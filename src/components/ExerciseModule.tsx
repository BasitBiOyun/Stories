import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RotateCcw,
  MessageSquare,
  Users,
  GraduationCap,
  Lightbulb,
} from './ui/icons';
import { Exercise } from '../types';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';
import { useLanguage } from '../contexts/LanguageContext';
import { highlightPhraseMatches } from '../lib/highlightTextMatch';
import {
  presentMatchingMeanings,
  presentMultipleChoice,
  presentQuizOptions,
} from '../lib/exercisePresentation';

interface ExerciseModuleProps {
  exercise: Exercise;
  onComplete: () => void;
  onClose: () => void;
  collectionId?: string;
  variant?: 'default' | 'quick' | 'language' | 'review';
  embedded?: boolean;
}

const themeFor = (collectionId: string) => {
  if (collectionId === 'history') {
    return {
      accentBg: 'bg-emerald-600',
      accentHover: 'hover:bg-emerald-700',
      accentText: 'text-emerald-700',
      title: 'text-emerald-950',
      softBg: 'bg-emerald-50',
      softBorder: 'border-emerald-200',
      selected: 'border-emerald-500 bg-emerald-50 text-emerald-900',
    };
  }
  if (collectionId === 'turkish') {
    return {
      accentBg: 'bg-sky-700',
      accentHover: 'hover:bg-sky-800',
      accentText: 'text-sky-700',
      title: 'text-sky-950',
      softBg: 'bg-sky-50',
      softBorder: 'border-sky-200',
      selected: 'border-sky-500 bg-sky-50 text-sky-950',
    };
  }
  return {
    accentBg: 'bg-amber-600',
    accentHover: 'hover:bg-amber-700',
    accentText: 'text-amber-700',
    title: 'text-amber-950',
    softBg: 'bg-amber-50',
    softBorder: 'border-amber-200',
    selected: 'border-amber-500 bg-amber-50 text-amber-950',
  };
};

const normalizeText = (value: unknown) => String(value ?? '')
  .trim()
  .toLocaleLowerCase()
  .normalize('NFKC')
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '')
  .replace(/[أإآٱ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/ؤ/g, 'و')
  .replace(/ئ/g, 'ي')
  .replace(/ة/g, 'ه')
  .replace(/\s+/g, ' ');

const sameUnorderedGroup = (left: string[] = [], right: string[] = []) => {
  const a = left.map(normalizeText).sort();
  const b = right.map(normalizeText).sort();
  return a.length === b.length && a.every((value, index) => value === b[index]);
};

export const ExerciseModule: React.FC<ExerciseModuleProps> = ({
  exercise,
  onComplete,
  onClose,
  collectionId = 'prophets',
  variant = 'default',
  embedded = false,
}) => {
  const { language, t, formatNumber, isRTL } = useLanguage();
  const theme = themeFor(collectionId);
  const isArabic = language === 'ar';
  const isQuick = variant === 'quick';
  const isLanguage = variant === 'language';
  const isReview = variant === 'review';
  const [userAnswer, setUserAnswer] = React.useState<any>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [showHint, setShowHint] = React.useState(false);
  const [selectedMatchingLeft, setSelectedMatchingLeft] = React.useState<string | null>(null);
  const [matchingAssignments, setMatchingAssignments] = React.useState<Record<string, string>>({});
  const [localSequence, setLocalSequence] = React.useState<string[]>([]);
  const [selectedDragItem, setSelectedDragItem] = React.useState<string | null>(null);
  const [dragAssignments, setDragAssignments] = React.useState<Record<string, string[]>>({});
  const [revealedItems, setRevealedItems] = React.useState<Set<number>>(new Set());
  const [quizStep, setQuizStep] = React.useState(0);
  const [quizScore, setQuizScore] = React.useState(0);
  const [quizAnswered, setQuizAnswered] = React.useState(false);
  const [quizWasCorrect, setQuizWasCorrect] = React.useState<boolean | null>(null);
  const [reflectionResponse, setReflectionResponse] = React.useState('');

  const reflectionNeedsWriting = exercise.type === 'reflection' && (
    /\bwrite\b/i.test(exercise.instructions ?? '')
    || (exercise.instructions ?? '').includes('كتابة')
  );

  const presentedMcOptions = React.useMemo(() => presentMultipleChoice(exercise), [exercise]);
  const presentedMeanings = React.useMemo(() => presentMatchingMeanings(exercise), [exercise]);
  const sequenceItems = React.useMemo(() => {
    const items = exercise.sequencingItems ?? [];
    if (items.length <= 1) return items;
    return [...items.slice(1), items[0]];
  }, [exercise]);

  React.useEffect(() => {
    setUserAnswer(null);
    setIsSubmitted(false);
    setShowHint(false);
    setSelectedMatchingLeft(null);
    setMatchingAssignments({});
    setLocalSequence([]);
    setSelectedDragItem(null);
    setDragAssignments({});
    setRevealedItems(new Set());
    setQuizStep(0);
    setQuizScore(0);
    setQuizAnswered(false);
    setQuizWasCorrect(null);
    setReflectionResponse('');
  }, [exercise]);

  React.useEffect(() => {
    if (embedded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [embedded]);

  const isCorrectAnswer = (answer: any) => {
    if (exercise.type === 'matching') {
      return (exercise.matchingPairs ?? []).every(
        (pair) => matchingAssignments[pair.left] === pair.right
      );
    }
    if (exercise.type === 'sequencing') {
      return JSON.stringify(answer) === JSON.stringify(exercise.correctAnswer);
    }
    if (exercise.type === 'drag-drop') {
      const correct = exercise.correctAnswer as Record<string, string[]>;
      return Object.keys(correct ?? {}).every((group) =>
        sameUnorderedGroup((answer ?? {})[group] ?? [], correct[group] ?? [])
      );
    }
    if (exercise.type === 'reflection' || exercise.type === 'tap-reveal') return true;
    if (exercise.type === 'fill-blanks') {
      if (typeof answer !== 'string') return false;
      const expectedAnswers = Array.isArray(exercise.correctAnswer)
        ? exercise.correctAnswer.map(String)
        : [String(exercise.correctAnswer ?? '')];

      return expectedAnswers.some((expected) => (
        normalizeText(answer) === normalizeText(expected)
        || highlightPhraseMatches(answer, expected, language === 'ar' ? 'ar' : 'en')
      ));
    }
    return answer === exercise.correctAnswer;
  };

  const submit = (answer: any = userAnswer) => {
    setUserAnswer(answer);
    setIsSubmitted(true);
    if (isCorrectAnswer(answer)) {
      confetti({
        particleCount: isQuick ? 60 : isLanguage ? 36 : isReview ? 22 : 110,
        spread: isQuick ? 52 : isLanguage ? 42 : isReview ? 34 : 65,
        origin: { y: 0.65 },
        colors: collectionId === 'history'
          ? ['#059669', '#10B981', '#34D399']
          : collectionId === 'turkish'
            ? ['#0284C7', '#0EA5E9', '#38BDF8']
            : ['#D97706', '#F59E0B', '#FCD34D'],
      });
    }
  };

  const retry = () => {
    setUserAnswer(null);
    setIsSubmitted(false);
    setShowHint(false);
    setSelectedMatchingLeft(null);
    setMatchingAssignments({});
    setLocalSequence([]);
    setSelectedDragItem(null);
    setDragAssignments({});
    setRevealedItems(new Set());
    setReflectionResponse('');
  };

  const selectMeaning = (meaning: string) => {
    if (!selectedMatchingLeft || isSubmitted) return;
    setMatchingAssignments((previous) => {
      const next = { ...previous };
      for (const [left, assignedMeaning] of Object.entries(next)) {
        if (assignedMeaning === meaning) delete next[left];
      }
      next[selectedMatchingLeft] = meaning;
      return next;
    });
    setSelectedMatchingLeft(null);
  };

  const assignDragItem = (groupName: string) => {
    if (!selectedDragItem || isSubmitted) return;
    setDragAssignments((previous) => {
      const next: Record<string, string[]> = {};
      for (const [group, items] of Object.entries(previous)) {
        next[group] = items.filter((item) => item !== selectedDragItem);
      }
      next[groupName] = [...(next[groupName] ?? []), selectedDragItem];
      setUserAnswer(next);
      return next;
    });
    setSelectedDragItem(null);
  };

  const currentQuizQuestion = exercise.quizQuestions?.[quizStep];
  const currentQuizOptions = React.useMemo(
    () => currentQuizQuestion
      ? presentQuizOptions(currentQuizQuestion, `${exercise.id}:${quizStep}`)
      : [],
    [currentQuizQuestion, exercise.id, quizStep]
  );

  const answerQuiz = (isCorrect: boolean) => {
    if (quizAnswered) return;
    setQuizAnswered(true);
    setQuizWasCorrect(isCorrect);
    if (isCorrect) {
      setQuizScore((score) => score + 1);
      confetti({ particleCount: isQuick ? 40 : isLanguage ? 28 : isReview ? 18 : 70, spread: isQuick ? 45 : isLanguage ? 38 : isReview ? 32 : 55, origin: { y: 0.7 } });
    }
  };

  const nextQuiz = () => {
    const total = exercise.quizQuestions?.length ?? 0;
    if (quizStep < total - 1) {
      setQuizStep((step) => step + 1);
      setQuizAnswered(false);
      setQuizWasCorrect(null);
    } else {
      setIsSubmitted(true);
    }
  };

  const renderContent = () => {
    if (exercise.type === 'true-false') {
      return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[true, false].map((value) => {
            const selected = userAnswer === value;
            const revealCorrect = isSubmitted && exercise.correctAnswer === value;
            const revealWrong = isSubmitted && selected && !revealCorrect;
            return (
              <button
                key={String(value)}
                type="button"
                disabled={isSubmitted}
                onClick={() => {
                  setUserAnswer(value);
                  submit(value);
                }}
                className={cn(
                  'min-h-14 sm:min-h-16 rounded-2xl border-2 font-display font-black uppercase tracking-wider transition-colors',
                  isArabic ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-lg md:text-xl',
                  revealCorrect
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : revealWrong
                      ? 'bg-rose-500 border-rose-500 text-white'
                      : selected
                        ? `${theme.accentBg} border-transparent text-white`
                        : `bg-white ${theme.softBorder} text-wood/65`
                )}
              >
                {value ? t('nav.true') : t('nav.false')}
              </button>
            );
          })}
        </div>
      );
    }

    if (exercise.type === 'multiple-choice') {
      return (
        <div className="grid grid-cols-1 gap-3">
          {presentedMcOptions.map((option, displayIndex) => {
            const selected = userAnswer === option.originalIndex;
            const revealCorrect = isSubmitted && option.originalIndex === exercise.correctAnswer;
            const revealWrong = isSubmitted && selected && !revealCorrect;
            return (
              <button
                key={`${option.originalIndex}-${option.text}`}
                type="button"
                disabled={isSubmitted}
                onClick={() => {
                  setUserAnswer(option.originalIndex);
                  submit(option.originalIndex);
                }}
                className={cn(
                  'w-full min-h-14 sm:min-h-16 rounded-2xl border-2 px-4 py-3 flex items-center gap-4 text-start transition-colors',
                  revealCorrect
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : revealWrong
                      ? 'bg-rose-500 border-rose-500 text-white'
                      : selected
                        ? theme.selected
                        : `bg-white ${theme.softBorder}`
                )}
              >
                <span className={cn(
                  'w-9 h-9 rounded-full shrink-0 flex items-center justify-center font-display text-sm font-black',
                  revealCorrect || revealWrong
                    ? 'bg-white/20 text-white'
                    : selected
                      ? `${theme.accentBg} text-white`
                      : `${theme.softBg} ${theme.accentText}`
                )}>
                  {String.fromCharCode(65 + displayIndex)}
                </span>
                <span className={cn(
                  'font-serif font-semibold leading-snug flex-1',
                  isArabic ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base md:text-lg'
                )}>
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>
      );
    }

    if (exercise.type === 'matching') {
      const pairs = exercise.matchingPairs ?? [];
      const assignedMeanings = new Set(Object.values(matchingAssignments));
      const allAssigned = pairs.length > 0 && Object.keys(matchingAssignments).length === pairs.length;
      return (
        <div className="space-y-5">
          <p className={cn('font-serif text-wood/55', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base')}>{t('nav.matchingInstructions')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-2.5">
              <p className={cn('font-display uppercase tracking-widest font-black', isArabic ? 'text-sm sm:text-base' : 'text-xs', theme.accentText)}>
                {isArabic ? 'المفاهيم' : 'Concepts'}
              </p>
              {pairs.map((pair) => {
                const selected = selectedMatchingLeft === pair.left;
                const assigned = matchingAssignments[pair.left];
                return (
                  <button
                    key={pair.left}
                    type="button"
                    disabled={isSubmitted}
                    onClick={() => setSelectedMatchingLeft(selected ? null : pair.left)}
                    className={cn(
                      'w-full min-h-14 rounded-xl border-2 px-4 py-3 text-start font-serif font-bold transition-colors flex items-center justify-between gap-3',
                      isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                      selected ? theme.selected : `bg-white ${theme.softBorder}`
                    )}
                  >
                    <span>{pair.left}</span>
                    {assigned && <span className={cn('font-medium truncate max-w-[45%]', isArabic ? 'text-sm' : 'text-xs', theme.accentText)}>✓ {assigned}</span>}
                  </button>
                );
              })}
            </div>
            <div className="space-y-2.5">
              <p className={cn('font-display uppercase tracking-widest font-black', isArabic ? 'text-sm sm:text-base' : 'text-xs', theme.accentText)}>
                {isArabic ? 'المعاني' : 'Meanings'}
              </p>
              {presentedMeanings.map((meaning) => {
                const used = assignedMeanings.has(meaning);
                return (
                  <button
                    key={meaning}
                    type="button"
                    disabled={isSubmitted || !selectedMatchingLeft}
                    onClick={() => selectMeaning(meaning)}
                    className={cn(
                      'w-full min-h-14 rounded-xl border-2 px-4 py-3 text-start font-serif font-medium transition-colors',
                      isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                      used
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                        : selectedMatchingLeft
                          ? `bg-white ${theme.softBorder} hover:bg-gray-50`
                          : 'bg-gray-50 border-gray-100 text-wood/45'
                    )}
                  >
                    {meaning}
                  </button>
                );
              })}
            </div>
          </div>
          {!isSubmitted && (
            <button
              type="button"
              disabled={!allAssigned}
              onClick={() => submit(matchingAssignments)}
              className={cn(
                'w-full min-h-12 rounded-xl font-display uppercase tracking-widest font-bold',
                isArabic ? 'text-sm sm:text-base' : 'text-xs sm:text-sm',
                allAssigned ? `${theme.accentBg} ${theme.accentHover} text-white` : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              )}
            >
              {t('nav.matchedThem')}
            </button>
          )}
        </div>
      );
    }

    if (exercise.type === 'sequencing') {
      return (
        <div className="space-y-3">
          <p className={cn('font-serif text-wood/55', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base')}>{t('nav.sequencingInstructions')}</p>
          {sequenceItems.map((item) => {
            const order = localSequence.indexOf(item.id);
            return (
              <button
                key={item.id}
                type="button"
                disabled={isSubmitted}
                onClick={() => setLocalSequence((previous) =>
                  previous.includes(item.id)
                    ? previous.filter((id) => id !== item.id)
                    : [...previous, item.id]
                )}
                className={cn(
                  'w-full min-h-14 rounded-xl border-2 px-4 py-3 text-start flex items-center gap-4 font-serif font-semibold',
                  isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                  order >= 0 ? theme.selected : `bg-white ${theme.softBorder}`
                )}
              >
                <span className={cn(
                  'w-8 h-8 rounded-full shrink-0 flex items-center justify-center font-display text-sm font-black',
                  order >= 0 ? `${theme.accentBg} text-white` : 'bg-gray-100 text-gray-400'
                )}>
                  {order >= 0 ? formatNumber(order + 1) : '—'}
                </span>
                <span>{item.text}</span>
              </button>
            );
          })}
          {!isSubmitted && (
            <button
              type="button"
              disabled={localSequence.length !== sequenceItems.length}
              onClick={() => submit(localSequence)}
              className={cn(
                'w-full min-h-12 rounded-xl font-display uppercase tracking-widest font-bold',
                isArabic ? 'text-sm sm:text-base' : 'text-xs sm:text-sm',
                localSequence.length === sequenceItems.length
                  ? `${theme.accentBg} text-white`
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              )}
            >
              {localSequence.length === sequenceItems.length
                ? t('nav.checkOrder')
                : `${t('nav.selectAllEvents')} (${formatNumber(localSequence.length)}/${formatNumber(sequenceItems.length)})`}
            </button>
          )}
        </div>
      );
    }

    if (exercise.type === 'fill-blanks') {
      return (
        <div className="rounded-2xl bg-white border-2 border-gray-100 p-4 sm:p-6 space-y-5">
          <div className={cn('font-serif leading-loose text-wood', isArabic ? 'text-lg sm:text-xl' : 'text-base sm:text-lg')}>
            {(exercise.fillBlanksText ?? '').split('[blank]').map((part, index, pieces) => (
              <React.Fragment key={index}>
                {part}
                {index < pieces.length - 1 && (
                  <input
                    type="text"
                    disabled={isSubmitted}
                    value={typeof userAnswer === 'string' ? userAnswer : ''}
                    onChange={(event) => setUserAnswer(event.target.value)}
                    className={cn('mx-2 px-3 py-1 border-b-2 bg-transparent outline-none min-w-32 text-center font-bold', theme.softBorder)}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          {!isSubmitted && (
            <button type="button" onClick={() => submit(userAnswer)} className={cn('w-full min-h-12 rounded-xl text-white font-bold', isArabic && 'text-base', theme.accentBg)}>
              {t('nav.check')}
            </button>
          )}
        </div>
      );
    }

    if (exercise.type === 'drag-drop') {
      const allItems = exercise.dragDropGroups?.flatMap((group) => group.items) ?? [];
      const assigned = Object.values(dragAssignments).flat();
      const available = allItems.filter((item) => !assigned.includes(item));
      const allAssigned = allItems.length > 0 && available.length === 0;
      return (
        <div className="space-y-5">
          <div>
            <p className={cn('font-display uppercase tracking-widest text-wood/45 mb-2', isArabic ? 'text-sm' : 'text-xs')}>{t('nav.availableItems')}</p>
            <div className="min-h-20 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-3 flex flex-wrap gap-2">
              {available.map((item) => (
                <button
                  key={item}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => setSelectedDragItem(selectedDragItem === item ? null : item)}
                  className={cn('px-3 py-2 rounded-lg border-2 bg-white font-serif font-semibold', isArabic ? 'text-base' : 'text-sm', selectedDragItem === item ? theme.selected : 'border-gray-200')}
                >
                  {item}
                </button>
              ))}
              {!available.length && <span className={cn('text-wood/40 m-auto', isArabic ? 'text-base' : 'text-sm')}>{t('nav.allItemsAssigned')}</span>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exercise.dragDropGroups?.map((group) => (
              <button
                key={group.group}
                type="button"
                disabled={isSubmitted || !selectedDragItem}
                onClick={() => assignDragItem(group.group)}
                className={cn('rounded-2xl border-2 min-h-32 p-4 text-start', selectedDragItem ? theme.softBorder : 'border-gray-100 bg-gray-50')}
              >
                <h5 className={cn('font-display font-bold mb-3', isArabic ? 'text-base' : 'text-sm', theme.accentText)}>{group.group}</h5>
                <div className="flex flex-wrap gap-2">
                  {(dragAssignments[group.group] ?? []).map((item) => (
                    <span key={item} className={cn('px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 font-serif', isArabic ? 'text-sm sm:text-base' : 'text-xs sm:text-sm')}>{item}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
          {!isSubmitted && (
            <button type="button" disabled={!allAssigned} onClick={() => submit(dragAssignments)} className={cn('w-full min-h-12 rounded-xl font-bold', isArabic && 'text-base', allAssigned ? `${theme.accentBg} text-white` : 'bg-gray-100 text-gray-400')}>
              {t('nav.check')}
            </button>
          )}
        </div>
      );
    }

    if (exercise.type === 'tap-reveal') {
      const items = exercise.tapRevealItems ?? [];
      return (
        <div className="space-y-3">
          {items.map((item, index) => {
            const revealed = revealedItems.has(index);
            return (
              <button
                key={`${item.question}-${index}`}
                type="button"
                onClick={() => setRevealedItems((previous) => new Set(previous).add(index))}
                className={cn('w-full rounded-2xl border-2 p-5 sm:p-7 text-center min-h-28', theme.softBorder, theme.softBg)}
              >
                <p className={cn('font-serif font-semibold text-wood', isArabic ? 'text-lg sm:text-xl' : 'text-base sm:text-lg')}>{revealed ? item.answer : item.question}</p>
                {!revealed && <span className={cn('block mt-3 uppercase tracking-widest font-bold', isArabic ? 'text-sm sm:text-base' : 'text-xs', theme.accentText)}>{t('nav.tapToReveal')}</span>}
              </button>
            );
          })}
          {!isSubmitted && revealedItems.size === items.length && (
            <button type="button" onClick={() => submit(true)} className={cn('w-full min-h-12 rounded-xl text-white font-bold', isArabic && 'text-base', theme.accentBg)}>{t('nav.continue')}</button>
          )}
        </div>
      );
    }

    if (exercise.type === 'reflection') {
      return (
        <div className="space-y-4">
          {reflectionNeedsWriting && (
            <div className="rounded-2xl bg-white border-2 border-gray-100 p-4 sm:p-5">
              <textarea
                rows={5}
                disabled={isSubmitted}
                value={reflectionResponse}
                onChange={(event) => setReflectionResponse(event.target.value)}
                placeholder={isArabic ? 'اكتب إجابتك القصيرة هنا...' : 'Write your short response here...'}
                className={cn(
                  'w-full resize-y rounded-xl border-2 bg-white px-4 py-3 font-serif leading-relaxed text-wood outline-none',
                  isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                  theme.softBorder
                )}
              />
            </div>
          )}
          {exercise.discussionPrompts?.map((prompt, index) => (
            <div key={`${prompt.question}-${index}`} className="rounded-2xl bg-white border-2 border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2 text-wood/50">
                {prompt.mode === 'Individual' ? <GraduationCap size={18} /> : prompt.mode === 'Pair' ? <MessageSquare size={18} /> : <Users size={18} />}
                <span className={cn('font-display uppercase tracking-widest', isArabic ? 'text-sm' : 'text-xs')}>{isArabic ? (prompt.mode === 'Individual' ? 'فردي' : prompt.mode === 'Pair' ? 'ثنائي' : 'صفي') : prompt.mode}</span>
              </div>
              <p className={cn('font-serif font-semibold text-wood', isArabic ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base md:text-lg')}>{prompt.question}</p>
            </div>
          ))}
          {!isSubmitted && (
            <button
              type="button"
              disabled={reflectionNeedsWriting && !reflectionResponse.trim()}
              onClick={() => submit(reflectionNeedsWriting ? reflectionResponse : true)}
              className={cn(
                'w-full min-h-12 rounded-xl font-bold',
                isArabic && 'text-base',
                reflectionNeedsWriting && !reflectionResponse.trim()
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : `${theme.accentBg} text-white`
              )}
            >
              {t('nav.reflectedOnThese')}
            </button>
          )}
        </div>
      );
    }

    if (exercise.type === 'quiz-game') {
      const total = exercise.quizQuestions?.length ?? 0;
      if (isSubmitted) {
        return (
          <div className="rounded-2xl bg-white border-2 border-gray-100 p-6 text-center">
            <p className={cn('font-display text-3xl font-black', theme.title)}>{formatNumber(quizScore)}/{formatNumber(total)}</p>
            <p className={cn('font-serif text-wood/60 mt-2', isArabic ? 'text-base' : 'text-sm')}>{t('nav.challengeComplete')}</p>
          </div>
        );
      }
      if (!currentQuizQuestion) return null;
      return (
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <span className={cn('font-display uppercase tracking-widest', isArabic ? 'text-sm' : 'text-xs', theme.accentText)}>{t('nav.question')} {formatNumber(quizStep + 1)} / {formatNumber(total)}</span>
            <span className={cn('font-display font-bold text-wood/50', isArabic ? 'text-base' : 'text-sm')}>{formatNumber(quizScore)} {t('ex.pts')}</span>
          </div>
          <p className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-wood leading-snug">{currentQuizQuestion.question}</p>
          <div className="grid grid-cols-1 gap-3">
            {currentQuizOptions.map((option, index) => (
              <button
                key={`${option.text}-${index}`}
                type="button"
                disabled={quizAnswered}
                onClick={() => answerQuiz(option.isCorrect)}
                className={cn(
                  'min-h-14 rounded-xl border-2 p-3 text-start font-serif font-semibold',
                  isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                  quizAnswered && option.isCorrect ? 'border-emerald-500 bg-emerald-50' : `bg-white ${theme.softBorder}`
                )}
              >
                {option.text}
              </button>
            ))}
          </div>
          {quizAnswered && (
            <div className={cn('rounded-xl border p-3 font-serif', isArabic ? 'text-base' : 'text-sm', quizWasCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800')}>
              {quizWasCorrect ? t('nav.correctWellDone') : currentQuizQuestion.hint}
            </div>
          )}
          {quizAnswered && (
            <button type="button" onClick={nextQuiz} className={cn('w-full min-h-12 rounded-xl text-white font-bold flex items-center justify-center gap-2', isArabic && 'text-base', theme.accentBg)}>
              {quizStep < total - 1 ? t('nav.nextQuestion') : t('nav.seeResults')} <ArrowRight className={cn('w-4 h-4', isRTL && 'rotate-180')} />
            </button>
          )}
        </div>
      );
    }

    return null;
  };

  const correct = isSubmitted && (exercise.type === 'quiz-game'
    ? quizScore === (exercise.quizQuestions?.length ?? 0)
    : isCorrectAnswer(userAnswer));

  const quickBackground = collectionId === 'history'
    ? 'radial-gradient(circle at 14% 8%, rgba(16,185,129,0.12), transparent 34%), #FBFAF6'
    : collectionId === 'turkish'
    ? 'radial-gradient(circle at 14% 8%, rgba(14,165,233,0.12), transparent 34%), #FBFAF6'
    : 'radial-gradient(circle at 14% 8%, rgba(217,119,6,0.12), transparent 34%), #FBFAF6';

  const languageBackground = collectionId === 'history'
    ? 'radial-gradient(circle at 88% 12%, rgba(16,185,129,0.11), transparent 32%), #FCFBF8'
    : collectionId === 'turkish'
    ? 'radial-gradient(circle at 88% 12%, rgba(14,165,233,0.11), transparent 32%), #FCFBF8'
    : 'radial-gradient(circle at 88% 12%, rgba(217,119,6,0.11), transparent 32%), #FCFBF8';

  const dialog = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        embedded
          ? 'relative flex min-h-0 w-full flex-col overflow-hidden rounded-[24px] bg-white/72 ring-1 ring-black/[0.06]'
          : 'fixed inset-0 z-[1000] flex flex-col',
        !embedded && (isQuick ? 'bg-[#FBFAF6]' : isLanguage ? 'bg-[#FCFBF8]' : 'bg-[#FDFBF7]'),
        isRTL && 'font-arabic'
      )}
      style={!embedded ? (isQuick ? { background: quickBackground } : isLanguage ? { background: languageBackground } : undefined) : undefined}
      dir={isRTL ? 'rtl' : 'ltr'}
      role={embedded ? 'group' : 'dialog'}
      aria-modal={embedded ? undefined : true}
      aria-label={isQuick ? t('nav.quickChallenge') : isLanguage ? (language === 'ar' ? 'التركيز اللغوي' : 'Language Focus') : (exercise.title || exercise.question || t('nav.interactiveChallenge'))}
    >
      <header className={cn(
        'shrink-0 px-4 sm:px-6 md:px-10 flex items-start justify-between gap-4',
        embedded && isReview
          ? 'border-b border-black/[0.05] bg-white/45 py-4 sm:py-5'
          : isQuick
          ? 'border-b border-black/[0.06] bg-white/45 py-4 sm:py-5 backdrop-blur-xl'
          : isLanguage
          ? 'border-b border-black/[0.05] bg-white/55 py-4 sm:py-5 backdrop-blur-xl'
          : `border-b-2 py-4 sm:py-5 ${theme.softBg} ${theme.softBorder}`
      )}>
        <div className="min-w-0">
          <p className={cn(
            'font-display uppercase tracking-[0.2em] font-semibold',
            isArabic ? 'text-sm sm:text-base' : 'text-[10px] sm:text-xs',
            theme.accentText
          )}>
            {isQuick
              ? t('nav.quickChallenge')
              : isLanguage
              ? (language === 'ar' ? 'التركيز اللغوي' : 'Language Focus')
              : isReview
              ? (language === 'ar' ? 'مهمة لغوية' : 'Language task')
              : t('nav.interactiveChallenge')}
          </p>

          {!isQuick && (
            <h3 className={cn(
              'mt-1 font-display text-xl sm:text-2xl md:text-3xl leading-tight',
              isLanguage ? 'font-semibold tracking-[-0.03em]' : 'font-black tracking-tight',
              theme.title
            )}>
              {exercise.title}
            </h3>
          )}

          {exercise.instructions && (
            <p className={cn(
              'font-serif',
              isQuick ? 'mt-2 max-w-3xl text-wood/58' : isLanguage ? 'mt-2 max-w-3xl text-wood/55' : `mt-1 ${theme.accentText}`,
              isArabic ? 'text-sm sm:text-base md:text-lg' : 'text-xs sm:text-sm md:text-base'
            )}>
              {exercise.instructions}
            </p>
          )}
        </div>

        {!embedded && (
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'touch-target flex shrink-0 items-center justify-center rounded-full transition-colors',
              isQuick || isLanguage
                ? 'bg-white/70 text-wood/55 shadow-sm ring-1 ring-black/[0.06] hover:bg-white hover:text-wood'
                : `border-2 bg-white ${theme.softBorder} ${theme.accentText}`
            )}
            aria-label={t('nav.close')}
          >
            <XCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}
      </header>

      <main className={cn('flex-1 min-h-0 custom-scrollbar', embedded ? 'overflow-visible' : 'overflow-y-auto')}>
        <div className={cn(
          'w-full mx-auto px-4 sm:px-6 md:px-10 space-y-6',
          embedded && isReview
            ? 'max-w-5xl py-5 sm:py-6 md:py-7'
            : isQuick
            ? 'max-w-4xl py-7 sm:py-10 md:py-12'
            : isLanguage
            ? 'max-w-5xl py-7 sm:py-9 md:py-10'
            : 'max-w-6xl py-5 sm:py-8'
        )}>
          {exercise.question && exercise.type !== 'quiz-game' && (
            <h4 className={cn(
              'font-display font-semibold text-wood leading-[1.16]',
              isQuick
                ? 'max-w-3xl text-2xl tracking-[-0.03em] sm:text-3xl md:text-[2.15rem]'
                : isLanguage
                ? 'max-w-4xl text-xl tracking-[-0.025em] sm:text-2xl md:text-[1.75rem]'
                : isReview
                ? 'max-w-4xl text-lg tracking-[-0.02em] sm:text-xl md:text-2xl'
                : 'text-xl sm:text-2xl md:text-3xl'
            )}>
              {exercise.question}
            </h4>
          )}

          {renderContent()}

          <AnimatePresence mode="wait">
            {isSubmitted && exercise.type !== 'quiz-game' && (
              <motion.section
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  'rounded-2xl p-4 sm:p-6 space-y-4',
                  isQuick || isLanguage ? 'border ring-1 ring-inset' : 'border-2',
                  correct
                    ? 'bg-emerald-50 border-emerald-200 ring-emerald-100'
                    : 'bg-rose-50 border-rose-200 ring-rose-100'
                )}
              >
                <div className="flex items-start gap-3">
                  {correct ? <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={22} /> : <XCircle className="text-rose-600 shrink-0 mt-0.5" size={22} />}
                  <div className="flex-1 min-w-0">
                    <p className={cn('font-display font-black', isArabic ? 'text-lg sm:text-xl' : 'text-base sm:text-lg', correct ? 'text-emerald-800' : 'text-rose-800')}>
                      {correct ? `${t('nav.correct')}!` : t('nav.notQuite')}
                    </p>
                    <p className={cn('font-serif text-wood/75 mt-1 leading-relaxed', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base')}>
                      {correct ? exercise.feedback.correct : exercise.feedback.incorrect}
                    </p>
                  </div>
                </div>

                {exercise.explanation && (
                  <div className={cn('rounded-xl bg-white/70 border border-black/5 p-3 sm:p-4 font-serif text-wood/75 leading-relaxed', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base')}>
                    <span className={cn('block font-display uppercase tracking-widest text-wood/40 mb-1', isArabic ? 'text-sm' : 'text-[10px]')}>{t('nav.explanation')}</span>
                    {exercise.explanation}
                  </div>
                )}

                <div className={cn(
                  'grid grid-cols-1 gap-3 w-full',
                  correct ? 'sm:max-w-sm sm:mx-auto' : 'sm:grid-cols-2'
                )}>
                  {!correct && (
                    <button type="button" onClick={retry} className={cn('min-h-12 rounded-xl bg-white border-2 border-rose-200 text-rose-700 font-display uppercase tracking-widest font-bold flex items-center justify-center gap-2', isArabic ? 'text-sm sm:text-base' : 'text-xs')}>
                      <RotateCcw size={16} /> {t('nav.tryAgain')}
                    </button>
                  )}
                  <button type="button" onClick={onComplete} className={cn('min-h-12 rounded-xl text-white font-display uppercase tracking-widest font-bold flex items-center justify-center gap-2', isArabic ? 'text-sm sm:text-base' : 'text-xs', correct ? 'bg-emerald-600' : 'bg-rose-600')}>
                    {t('nav.continue')} <ArrowRight className={cn('w-4 h-4', isRTL && 'rotate-180')} />
                  </button>
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {isSubmitted && exercise.type === 'quiz-game' && (
            <button type="button" onClick={onComplete} className={cn('w-full min-h-12 rounded-xl text-white font-display uppercase tracking-widest font-bold', isArabic ? 'text-sm sm:text-base' : 'text-xs', theme.accentBg)}>
              {t('nav.continue')}
            </button>
          )}
        </div>
      </main>

      <footer className={cn(
        'shrink-0 px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between gap-3 safe-area-bottom',
        embedded && isReview
          ? 'border-t border-black/[0.05] bg-white/38'
          : isQuick || isLanguage
          ? 'border-t border-black/[0.06] bg-white/55 backdrop-blur-xl'
          : 'border-t border-gray-200 bg-white'
      )}>
        <div>
          {exercise.hints?.length ? (
            <button type="button" onClick={() => setShowHint((value) => !value)} className={cn('flex items-center gap-2 font-display font-bold', isArabic ? 'text-sm' : 'text-xs', theme.accentText)}>
              <HelpCircle size={16} /> {showHint ? t('nav.hideHint') : t('nav.needHint')}
            </button>
          ) : null}
        </div>
        {showHint && exercise.hints?.length ? (
          <p className={cn('font-serif text-wood/60 flex items-center gap-2 max-w-2xl text-end', isArabic ? 'text-sm sm:text-base' : 'text-xs sm:text-sm')}>
            <Lightbulb size={15} className={theme.accentText} /> {exercise.hints[0]}
          </p>
        ) : null}
      </footer>
    </motion.div>
  );
  if (embedded || typeof document === 'undefined') return dialog;
  return createPortal(dialog, document.body);
};