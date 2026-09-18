import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  Info,
  RotateCcw,
  Trophy,
} from '../ui/icons';
import { Exercise } from '../../types';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { presentMultipleChoice } from '../../lib/exercisePresentation';

type AnswerValue = boolean | number | null;

type Props = {
  title: string;
  exercises: Exercise[];
  userAnswers: Record<string, boolean | null>;
  handleAnswer: (id: string, answer: boolean) => void;
  onReset?: () => void;
  level?: string;
  collectionId?: string;
};

const themeFor = (collectionId?: string) => {
  if (collectionId === 'history') {
    return {
      border: 'border-emerald-200',
      softBorder: 'border-emerald-100',
      softBg: 'bg-emerald-50',
      accentBg: 'bg-emerald-600',
      accentText: 'text-emerald-700',
      title: 'text-emerald-950',
      progress: 'bg-emerald-500',
      progressTrack: 'bg-emerald-100',
    };
  }
  if (collectionId === 'turkish') {
    return {
      border: 'border-sky-200',
      softBorder: 'border-sky-100',
      softBg: 'bg-sky-50',
      accentBg: 'bg-sky-700',
      accentText: 'text-sky-700',
      title: 'text-sky-950',
      progress: 'bg-sky-600',
      progressTrack: 'bg-sky-100',
    };
  }
  return {
    border: 'border-amber-200',
    softBorder: 'border-amber-100',
    softBg: 'bg-amber-50',
    accentBg: 'bg-amber-600',
    accentText: 'text-amber-700',
    title: 'text-amber-950',
    progress: 'bg-amber-500',
    progressTrack: 'bg-amber-100',
  };
};

const isExerciseAnswerCorrect = (exercise: Exercise, answer: AnswerValue) => {
  if (answer === null || answer === undefined) return false;
  return answer === exercise.correctAnswer;
};

const QuestionCard = ({
  exercise,
  index,
  answer,
  showResults,
  active,
  onAnswer,
  onInfo,
  collectionId,
}: {
  exercise: Exercise;
  index: number;
  answer: AnswerValue;
  showResults: boolean;
  active: boolean;
  onAnswer: (answer: boolean | number) => void;
  onInfo: () => void;
  collectionId?: string;
}) => {
  const { t, formatNumber, isRTL, language } = useLanguage();
  const isArabic = language === 'ar';
  const theme = themeFor(collectionId);
  const hasAnswer = answer !== null && answer !== undefined;
  const correct = isExerciseAnswerCorrect(exercise, answer);
  const presentedOptions = React.useMemo(
    () => presentMultipleChoice(exercise),
    [exercise]
  );

  const openFeedbackFromCard = () => {
    if (showResults && hasAnswer) onInfo();
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={openFeedbackFromCard}
      onKeyDown={(event) => {
        if (showResults && hasAnswer && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          onInfo();
        }
      }}
      role={showResults && hasAnswer ? 'button' : undefined}
      tabIndex={showResults && hasAnswer ? 0 : undefined}
      className={cn(
        'rounded-[24px] bg-white/85 p-4 sm:p-5 md:p-6 shadow-[0_12px_32px_rgba(63,49,28,0.055)] ring-1 flex flex-col gap-4 min-w-0 self-start w-full transition-all',
        showResults && hasAnswer && 'cursor-pointer',
        showResults && hasAnswer
          ? correct
            ? 'ring-emerald-300 bg-emerald-50/55'
            : 'ring-rose-300 bg-rose-50/55'
          : active
            ? 'ring-2 ring-amber-300'
            : 'ring-black/[0.07]'
      )}
    >
      <div className="flex items-start gap-3 min-w-0">
        <span className={cn(
          'h-8 min-w-8 shrink-0 rounded-xl px-2 flex items-center justify-center text-[10px] font-semibold font-display',
          showResults && hasAnswer
            ? correct
              ? 'bg-emerald-500 text-white'
              : 'bg-rose-500 text-white'
            : `${theme.softBg} ${theme.accentText}`
        )}>
          {showResults && hasAnswer ? (correct ? '✓' : '✗') : formatNumber(index + 1)}
        </span>
        <p className={cn(
          'font-serif font-semibold leading-[1.55] text-wood flex-1 min-w-0',
          isArabic ? 'text-[17px] sm:text-lg md:text-xl' : 'text-base sm:text-[17px] md:text-lg'
        )}>
          {exercise.question}
        </p>
        {showResults && hasAnswer && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onInfo();
            }}
            className={cn(
              'p-2 rounded-lg shrink-0 transition-colors',
              active ? `${theme.accentBg} text-white` : `${theme.softBg} ${theme.accentText}`
            )}
            aria-label={t('ex.explanation')}
            title={t('ex.explanation')}
          >
            <Info size={15} />
          </button>
        )}
      </div>

      {exercise.type === 'true-false' && (
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          {[true, false].map((value) => {
            const selected = answer === value;
            const revealCorrect = showResults && exercise.correctAnswer === value;
            const revealWrong = showResults && selected && !revealCorrect;
            return (
              <button
                type="button"
                key={String(value)}
                disabled={showResults}
                onClick={() => onAnswer(value)}
                className={cn(
                  'min-h-12 sm:min-h-14 rounded-2xl px-4 font-display font-semibold ring-1 transition-all',
                  isArabic ? 'text-sm sm:text-[15px] md:text-[17px]' : 'text-xs sm:text-sm md:text-base',
                  revealCorrect
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : revealWrong
                      ? 'bg-rose-500 border-rose-500 text-white'
                      : selected
                        ? `${theme.accentBg} border-transparent text-white`
                        : `bg-white ${theme.softBorder} text-wood/65 hover:${theme.softBg}`
                )}
              >
                {value ? t('ex.true') : t('ex.false')}
              </button>
            );
          })}
        </div>
      )}

      {exercise.type === 'multiple-choice' && (
        <div className="grid grid-cols-1 gap-2.5">
          {presentedOptions.map((option, displayIndex) => {
            const selected = answer === option.originalIndex;
            const revealCorrect = showResults && option.originalIndex === exercise.correctAnswer;
            const revealWrong = showResults && selected && !revealCorrect;
            return (
              <button
                type="button"
                key={`${option.originalIndex}-${option.text}`}
                disabled={showResults}
                onClick={() => onAnswer(option.originalIndex)}
                className={cn(
                  'w-full min-h-12 rounded-2xl px-3.5 sm:px-4 py-3 flex items-center gap-3 text-start ring-1 transition-all',
                  revealCorrect
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : revealWrong
                      ? 'bg-rose-500 border-rose-500 text-white'
                      : selected
                        ? `${theme.softBg} ${theme.border}`
                        : `bg-white ${theme.softBorder} hover:${theme.softBg}`
                )}
              >
                <span className={cn(
                  'w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-[10px] font-semibold font-display',
                  revealCorrect || revealWrong
                    ? 'bg-white/20 text-white'
                    : selected
                      ? `${theme.accentBg} text-white`
                      : `${theme.softBg} ${theme.accentText}`
                )}>
                  {String.fromCharCode(65 + displayIndex)}
                </span>
                <span className={cn(
                  'font-serif font-medium leading-relaxed flex-1',
                  isArabic ? 'text-[15px] sm:text-[17px]' : 'text-sm sm:text-[15px] md:text-base',
                  isRTL && 'text-right'
                )}>
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </motion.article>
  );
};

export const KnowledgeCheck = ({
  title,
  exercises,
  userAnswers,
  handleAnswer,
  onReset,
  collectionId = 'prophets',
}: Props) => {
  const { t, formatNumber, isRTL, language } = useLanguage();
  const isArabic = language === 'ar';
  const theme = themeFor(collectionId);
  const supportedExercises = React.useMemo(
    () => exercises.filter((exercise) => exercise.type === 'true-false' || exercise.type === 'multiple-choice'),
    [exercises]
  );
  const storageKey = React.useMemo(
    () => `knowledge-check:${supportedExercises.map((exercise) => exercise.id).join('|')}`,
    [supportedExercises]
  );
  const [localAnswers, setLocalAnswers] = React.useState<Record<string, AnswerValue>>({});
  const [showResults, setShowResults] = React.useState(false);
  const [activeFeedback, setActiveFeedback] = React.useState<string | null>(null);

  React.useEffect(() => {
    let restored: Record<string, AnswerValue> = {};
    if (typeof window !== 'undefined') {
      try {
        const stored = window.localStorage.getItem(storageKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            restored = parsed as Record<string, AnswerValue>;
          }
        }
      } catch {
        // Ignore unavailable or malformed local storage and start clean.
      }
    }
    setLocalAnswers(restored);
    setShowResults(false);
    setActiveFeedback(null);
  }, [storageKey]);

  const answerFor = React.useCallback((exercise: Exercise): AnswerValue => {
    if (Object.prototype.hasOwnProperty.call(localAnswers, exercise.id)) {
      return localAnswers[exercise.id];
    }
    if (exercise.type === 'true-false') {
      return userAnswers[exercise.id] ?? null;
    }
    return null;
  }, [localAnswers, userAnswers]);

  const answeredCount = supportedExercises.filter((exercise) => answerFor(exercise) !== null).length;
  const correctCount = supportedExercises.filter((exercise) => isExerciseAnswerCorrect(exercise, answerFor(exercise))).length;
  const allAnswered = supportedExercises.length > 0 && answeredCount === supportedExercises.length;
  const percentage = supportedExercises.length
    ? Math.round((correctCount / supportedExercises.length) * 100)
    : 0;
  const activeExercise = supportedExercises.find((exercise) => exercise.id === activeFeedback) ?? null;
  const activeIsCorrect = activeExercise
    ? isExerciseAnswerCorrect(activeExercise, answerFor(activeExercise))
    : false;

  const answerQuestion = (exercise: Exercise, answer: boolean | number) => {
    if (showResults) return;
    setLocalAnswers((previous) => {
      const next = { ...previous, [exercise.id]: answer };
      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {
          // Keep the in-memory answer even when local storage is unavailable.
        }
      }
      return next;
    });
    if (exercise.type === 'true-false' && typeof answer === 'boolean') {
      handleAnswer(exercise.id, answer);
    }
  };

  const reset = () => {
    setLocalAnswers({});
    setShowResults(false);
    setActiveFeedback(null);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(storageKey);
      } catch {
        // Ignore unavailable local storage.
      }
    }
    onReset?.();
  };

  const feedbackOverlay = createPortal(
    <AnimatePresence>
      {showResults && activeExercise && (
        <motion.div
          key={activeExercise.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[320] bg-black/45 backdrop-blur-[2px] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveFeedback(null)}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className={cn(
              'w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-[26px] bg-white shadow-2xl ring-1 p-5 sm:p-7 md:p-8',
              activeIsCorrect ? 'ring-emerald-200' : 'ring-rose-200'
            )}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={cn(
                'w-10 h-10 rounded-xl shrink-0 flex items-center justify-center',
                activeIsCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
              )}>
                {activeIsCorrect ? <CheckCircle2 size={22} /> : <XCircle size={22} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn(
                  'font-display uppercase tracking-widest font-bold mb-1',
                  isArabic ? 'text-sm sm:text-[15px]' : 'text-xs sm:text-sm',
                  activeIsCorrect ? 'text-emerald-700' : 'text-rose-700'
                )}>
                  {activeIsCorrect ? t('ex.correct') : t('ex.notQuite')}
                </p>
                <h4 className="font-display text-lg sm:text-xl md:text-2xl text-wood leading-snug">
                  {activeExercise.question}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveFeedback(null)}
                className="p-1.5 rounded-lg text-wood/35 hover:text-wood/70 hover:bg-gray-100 transition-colors shrink-0"
                aria-label="Close feedback"
              >
                <XCircle size={22} />
              </button>
            </div>

            <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className={cn(
                'rounded-xl sm:rounded-2xl border p-4 sm:p-5 font-serif leading-relaxed',
                isArabic ? 'text-[15px] sm:text-[17px]' : 'text-sm sm:text-base',
                activeIsCorrect
                  ? 'bg-emerald-50 border-emerald-100 text-emerald-950'
                  : 'bg-rose-50 border-rose-100 text-rose-950'
              )}>
                {activeIsCorrect
                  ? activeExercise.feedback.correct
                  : activeExercise.feedback.incorrect}
              </div>
              <div className={cn(
                'rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 p-4 sm:p-5 font-serif text-wood/80 leading-relaxed',
                isArabic ? 'text-[15px] sm:text-[17px]' : 'text-sm sm:text-base'
              )}>
                <span className={cn('block font-display uppercase tracking-widest text-wood/40 mb-1.5', isArabic ? 'text-sm' : 'text-[10px] sm:text-xs')}>
                  {t('ex.explanation')}
                </span>
                {activeExercise.explanation}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );

  return (
    <section className="h-full min-h-0 overflow-y-auto custom-scrollbar pe-2">
      <div className="mx-auto w-full max-w-5xl space-y-5 pb-4">
        <div className={cn(
          'relative overflow-hidden rounded-[28px] p-5 sm:p-6 ring-1 shadow-[0_18px_48px_rgba(63,49,28,0.07)]',
          theme.softBg,
          theme.softBorder
        )}>
          <div className="flex items-center gap-3 min-w-0">
            <div className={cn('flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg shrink-0', theme.accentBg)}>
              <GraduationCap size={23} />
            </div>
            <div className="min-w-0">
              <p className={cn('font-display text-[10px] font-semibold uppercase tracking-[0.18em]', theme.accentText)}>
                {isArabic ? 'بعد إكمال القصة' : 'After the story'}
              </p>
              <h3 className={cn('mt-1 font-display text-2xl sm:text-3xl font-semibold tracking-[-0.03em] leading-tight', theme.title)}>{title}</h3>
              <p className={cn('font-serif text-wood/55 mt-2 max-w-2xl leading-relaxed', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base')}>
                {isArabic
                  ? 'اختبر فهمك للعلاقات والأحداث والأفكار الرئيسة في الكتاب كله.'
                  : 'Check your understanding of the key relationships, events and ideas across the whole book.'}
              </p>
            </div>
          </div>
          {showResults && (
            <div className={cn(
              'px-3 py-2 rounded-xl border font-display font-bold',
              isArabic ? 'text-sm sm:text-[15px]' : 'text-xs sm:text-sm',
              percentage >= 70 ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-rose-50 border-rose-200 text-rose-700'
            )}>
              {formatNumber(correctCount)}/{formatNumber(supportedExercises.length)} · {formatNumber(percentage)}%
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 px-1">
          <span className={cn('font-display font-semibold text-wood/50 tabular-nums shrink-0', isArabic ? 'text-sm' : 'text-xs')}>
            {isArabic ? 'تمت الإجابة' : 'Answered'} {formatNumber(answeredCount)}/{formatNumber(supportedExercises.length)}
          </span>
          <div className={cn('h-1.5 rounded-full flex-1 overflow-hidden', theme.progressTrack)}>
            <motion.div
              className={cn('h-full rounded-full', theme.progress)}
              animate={{ width: `${supportedExercises.length ? (answeredCount / supportedExercises.length) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className="space-y-3.5">
          {supportedExercises.map((exercise, index) => (
            <QuestionCard
              key={exercise.id}
              exercise={exercise}
              index={index}
              answer={answerFor(exercise)}
              showResults={showResults}
              active={activeFeedback === exercise.id}
              onAnswer={(answer) => answerQuestion(exercise, answer)}
              onInfo={() => setActiveFeedback(activeFeedback === exercise.id ? null : exercise.id)}
              collectionId={collectionId}
            />
          ))}
        </div>

        {!showResults && (
          <button
            type="button"
            onClick={() => setShowResults(true)}
            disabled={!allAnswered}
            className={cn(
              'w-full min-h-14 rounded-2xl px-6 font-display uppercase tracking-[0.13em] font-semibold flex items-center justify-center gap-2 transition-all',
              isArabic ? 'text-sm sm:text-base' : 'text-[12px] sm:text-[13px]',
              allAnswered
                ? `${theme.accentBg} text-white shadow-md`
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            )}
          >
            <CheckCircle2 size={16} /> {t('ex.seeResults')}
          </button>
        )}

        {showResults && (
          <div className={cn(
            'rounded-[24px] ring-1 p-5 sm:p-6 flex items-center gap-4',
            percentage >= 70 ? 'bg-emerald-50/85 ring-emerald-200' : 'bg-amber-50/85 ring-amber-200'
          )}>
            <Trophy className={percentage >= 70 ? 'text-emerald-600' : 'text-amber-600'} size={28} />
            <div className="flex-1">
              <p className="font-display text-base sm:text-lg font-bold text-wood">
                {formatNumber(correctCount)} / {formatNumber(supportedExercises.length)}
              </p>
              <p className={cn('font-serif text-wood/60', isArabic ? 'text-[15px]' : 'text-sm')}>
                {t('ex.feedbackHint').replace('{info}', 'ⓘ')}
              </p>
            </div>
            {onReset && (
              <button type="button" onClick={reset} className="p-2.5 rounded-xl bg-white border border-gray-200 text-wood/60" aria-label={t('ex.tryAgain')}>
                <RotateCcw size={18} />
              </button>
            )}
          </div>
        )}
      </div>
      {feedbackOverlay}
    </section>
  );
};