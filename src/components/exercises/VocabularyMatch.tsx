import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Zap, Lightbulb, ArrowRight, BrainCircuit } from '../ui/icons';
import type { Level, VocabularyChallengePair } from '../../types';
import { getLearningLevelPolicy } from '../../data/learningLevelPolicy';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import confetti from 'canvas-confetti';

type Pair = VocabularyChallengePair;
type Props = { pairs: Pair[]; collectionId?: string; level: Level; onReviewGlossary?: () => void };

type FeedbackState =
  | { kind: 'idle' }
  | { kind: 'correct'; word: string; meaning: string }
  | { kind: 'wrong'; word: string; meaning: string }
  | { kind: 'done' };

const shuffle = <T,>(items: T[]): T[] => [...items].sort(() => Math.random() - 0.5);

const displayWord = (word: string, language: string) => {
  if (language !== 'en' || !word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (items.length <= count) return items.slice();
  if (count <= 1) return count ? [items[0]] : [];
  return Array.from({ length: count }, (_, index) => {
    const sourceIndex = Math.round(index * (items.length - 1) / (count - 1));
    return items[sourceIndex];
  });
};

const normalizeTypedAnswer = (value: string, language: string) => {
  const base = value
    .toLocaleLowerCase(language === 'ar' ? 'ar' : 'en-US')
    .trim()
    .replace(/[.,!?;:'"“”‘’()[\]{}]/g, '')
    .replace(/\s+/g, ' ');

  if (language !== 'ar') return base;

  return base
    .replace(/[\u064B-\u0652\u0670]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/ئ/g, 'ي');
};

const normalizeMaskCharacter = (character: string): string => {
  if (/[\u064B-\u0652\u0670]/.test(character)) return '';
  if (/[أإآٱ]/.test(character)) return 'ا';
  if (character === 'ى') return 'ي';
  if (character === 'ؤ') return 'و';
  if (character === 'ئ') return 'ي';
  return character.toLocaleLowerCase();
};

const maskWord = (context: string | undefined, word: string) => {
  if (!context) return '';

  let normalizedContext = '';
  const originalPositions: number[] = [];
  Array.from(context).forEach((character, index) => {
    const normalized = normalizeMaskCharacter(character);
    if (!normalized) return;
    normalizedContext += normalized;
    originalPositions.push(index);
  });

  const normalizedWord = Array.from(word)
    .map(normalizeMaskCharacter)
    .join('');
  const matchIndex = normalizedContext.indexOf(normalizedWord);
  if (matchIndex < 0 || !normalizedWord) return '';

  const startIndex = originalPositions[matchIndex];
  const lastNormalizedIndex = matchIndex + normalizedWord.length - 1;
  let endIndex = (originalPositions[lastNormalizedIndex] ?? startIndex) + 1;
  while (endIndex < context.length && /[\u064B-\u0652\u0670]/.test(context[endIndex])) {
    endIndex += 1;
  }

  return context.slice(0, startIndex) + '_____' + context.slice(endIndex);
};

const themeFor = (collectionId: string) => {
  if (collectionId === 'history') {
    return {
      barBg: 'bg-emerald-100', barFill: 'bg-emerald-500', accent: 'text-emerald-700', dot: 'bg-emerald-500',
      badge: 'bg-emerald-600 text-white', reset: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
      selected: 'border-emerald-500 bg-emerald-50', matched: 'border-emerald-300 bg-emerald-50', idle: 'border-emerald-100 bg-white hover:border-emerald-300',
    };
  }
  if (collectionId === 'turkish') {
    return {
      barBg: 'bg-sky-100', barFill: 'bg-sky-600', accent: 'text-sky-700', dot: 'bg-sky-600',
      badge: 'bg-sky-600 text-white', reset: 'bg-sky-100 text-sky-700 hover:bg-sky-200',
      selected: 'border-sky-500 bg-sky-50', matched: 'border-sky-300 bg-sky-50', idle: 'border-sky-100 bg-white hover:border-sky-300',
    };
  }
  return {
    barBg: 'bg-amber-100', barFill: 'bg-amber-500', accent: 'text-amber-700', dot: 'bg-amber-500',
    badge: 'bg-amber-500 text-white', reset: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
    selected: 'border-amber-500 bg-amber-50', matched: 'border-emerald-300 bg-emerald-50', idle: 'border-amber-100 bg-white hover:border-amber-300',
  };
};

export const VocabularyMatch = ({ pairs, collectionId = 'prophets', level, onReviewGlossary }: Props) => {
  const { t, formatNumber, language, isRTL } = useLanguage();
  const policy = getLearningLevelPolicy(level);
  const theme = themeFor(collectionId);
  const isArabic = language === 'ar';
  const [meaningOrder, setMeaningOrder] = useState(() => shuffle(pairs.map((pair) => pair.meaning)));
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedMeaning, setSelectedMeaning] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [wrongWord, setWrongWord] = useState<string | null>(null);
  const [wrongMeaning, setWrongMeaning] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState>({ kind: 'idle' });

  const [stage, setStage] = useState<'match' | 'context' | 'recall' | 'done'>('match');
  const [maxUnlockedStage, setMaxUnlockedStage] = useState(0);
  const [revisitWords, setRevisitWords] = useState<Set<string>>(new Set());
  const [contextIndex, setContextIndex] = useState(0);
  const [contextChoice, setContextChoice] = useState<string | null>(null);
  const [contextFeedback, setContextFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [recallIndex, setRecallIndex] = useState(0);
  const [recallChoice, setRecallChoice] = useState<string | null>(null);
  const [typedRecall, setTypedRecall] = useState('');
  const [recallFeedback, setRecallFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [recallAttempts, setRecallAttempts] = useState(0);
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [useSentence, setUseSentence] = useState('');

  const contextItems = useMemo(() => {
    const contextualPairs = pairs.filter(pair => Boolean(pair.context) && Boolean(maskWord(pair.context, pair.word)));
    const pool = contextualPairs.length >= policy.vocabularyContextCount ? contextualPairs : pairs;
    return pickEvenly(pool, Math.min(policy.vocabularyContextCount, pool.length));
  }, [pairs, policy.vocabularyContextCount]);
  const recallItems = useMemo(() => {
    const reversed = [...pairs].reverse();
    const grounded = reversed.filter(pair => Boolean(pair.context?.trim()) && Boolean(maskWord(pair.context, pair.word)));
    const pool = policy.vocabularyRecallMode === 'guided' && grounded.length >= policy.vocabularyRecallCount
      ? grounded
      : reversed;
    return pickEvenly(pool, Math.min(policy.vocabularyRecallCount, pool.length));
  }, [pairs, policy.vocabularyRecallCount, policy.vocabularyRecallMode]);

  const signature = useMemo(
    () => `${level}:${language}:${pairs.map(pair => pair.word).join('|')}`,
    [level, language, pairs]
  );

  const wordToMeaning = useMemo(
    () => Object.fromEntries(pairs.map((pair) => [pair.word, pair.meaning])),
    [pairs]
  );
  const matchedMeanings = Object.values(matches);
  const correctCount = Object.keys(matches).length;
  const total = pairs.length;
  const progress = total ? Math.round((correctCount / total) * 100) : 0;

  const reset = () => {
    setMeaningOrder(shuffle(pairs.map((pair) => pair.meaning)));
    setSelectedWord(null);
    setSelectedMeaning(null);
    setMatches({});
    setWrongWord(null);
    setWrongMeaning(null);
    setStreak(0);
    setFeedback({ kind: 'idle' });
    setStage('match');
    setMaxUnlockedStage(0);
    setRevisitWords(new Set());
    setContextIndex(0);
    setContextChoice(null);
    setContextFeedback('idle');
    setRecallIndex(0);
    setRecallChoice(null);
    setTypedRecall('');
    setRecallFeedback('idle');
    setRecallAttempts(0);
    setAnswerRevealed(false);
    setUseSentence('');
  };

  useEffect(() => {
    reset();
    // Keep challenge state aligned with language/level/target-word changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  const addRevisit = (word: string) => {
    setRevisitWords(previous => {
      const next = new Set(previous);
      next.add(word);
      return next;
    });
  };

  const tryMatch = (word: string, meaning: string) => {
    if (wordToMeaning[word] === meaning) {
      const next = { ...matches, [word]: meaning };
      setMatches(next);
      setSelectedWord(null);
      setSelectedMeaning(null);
      const nextStreak = streak + 1;
      setStreak(nextStreak);

      if (Object.keys(next).length === total) {
        setFeedback({ kind: 'done' });
        setMaxUnlockedStage(current => Math.max(current, 1));
      } else {
        setFeedback({ kind: 'correct', word, meaning });
      }
      return;
    }

    setStreak(0);
    addRevisit(word);
    setWrongWord(word);
    setWrongMeaning(meaning);
    setFeedback({ kind: 'wrong', word, meaning });
    setTimeout(() => {
      setWrongWord(null);
      setWrongMeaning(null);
      setSelectedWord(null);
      setSelectedMeaning(null);
    }, 450);
  };

  const chooseWord = (word: string) => {
    if (matches[word] || feedback.kind === 'done') return;
    if (selectedMeaning) {
      tryMatch(word, selectedMeaning);
      return;
    }
    setSelectedWord((current) => current === word ? null : word);
    setFeedback({ kind: 'idle' });
  };

  const chooseMeaning = (meaning: string) => {
    if (matchedMeanings.includes(meaning) || feedback.kind === 'done') return;
    if (selectedWord) {
      tryMatch(selectedWord, meaning);
      return;
    }
    setSelectedMeaning((current) => current === meaning ? null : meaning);
    setFeedback({ kind: 'idle' });
  };

  const copy = isArabic
    ? {
        title: 'تحدي المفردات',
        subtitle: level === 'A2'
          ? 'طابق الكلمات، ثم ابحث عنها في القصة، ثم تذكّرها.'
          : 'من المعنى إلى السياق ثم الاسترجاع.',
        match: level === 'A2' ? 'طابق' : 'المطابقة',
        context: level === 'A2' ? 'في القصة' : 'في السياق',
        recall: level === 'A2' ? 'تذكّر واستخدم' : 'الاسترجاع والاستخدام',
        contextHint: level === 'A2'
          ? 'اختر الكلمة المناسبة لجملة القصة.'
          : 'اختر الكلمة التي تناسب سياق القصة.',
        recallHint: level === 'A2'
          ? 'اختر الكلمة التي تعبّر عن المعنى.'
          : level === 'B1'
          ? 'اكتب الكلمة الناقصة مستعينًا بالتلميح.'
          : 'استرجع الكلمة الدقيقة من دون بنك كلمات.',
        continue: 'متابعة',
        check: 'تحقق',
        correct: 'صحيح',
        wrong: 'حاول مرة أخرى',
        showAnswer: 'إظهار الإجابة',
        chapter: 'الفصل',
        cue: 'تلميح',
        complete: 'اكتملت المرحلة',
        done: 'اكتمل تحدي المفردات',
        mastered: 'متقنة في هذه الجولة',
        revisit: 'كلمات للمراجعة',
        revisitHint: 'راجع هذه الكلمات في المعجم الرئيسي ثم أعد التحدي.',
        restart: 'إعادة التحدي',
        backToGlossary: 'العودة إلى المعجم الرئيسي',
        usePrompt: 'استخدم الكلمة في جملة قصيرة مرتبطة بالقصة.',
        usePlaceholder: 'اكتب جملتك هنا…',
      }
    : {
        title: 'Vocabulary Challenge',
        subtitle: level === 'A2'
          ? 'Match the words, find them in the story, then remember them.'
          : 'Move from meaning recognition to story context and active recall.',
        match: 'Match',
        context: level === 'A2' ? 'In the Story' : 'In Context',
        recall: level === 'A2' ? 'Remember & Use' : 'Recall & Use',
        contextHint: level === 'A2'
          ? 'Choose the word that fits the story sentence.'
          : 'Choose the word that best fits the story context.',
        recallHint: level === 'A2'
          ? 'Choose the target word that matches the meaning.'
          : level === 'B1'
          ? 'Type the missing word with a small retrieval cue.'
          : 'Retrieve the precise target word without a word bank.',
        continue: 'Continue',
        check: 'Check',
        correct: 'Correct',
        wrong: 'Try again',
        showAnswer: 'Show answer',
        chapter: 'Chapter',
        cue: 'Cue',
        complete: 'Stage complete',
        done: 'Vocabulary Challenge complete',
        mastered: 'mastered this round',
        revisit: 'Words to revisit',
        revisitHint: 'Review these words in Master Glossary, then try the challenge again.',
        restart: 'Restart challenge',
        backToGlossary: 'Review in Master Glossary',
        usePrompt: 'Use the word in one short sentence connected to the story.',
        usePlaceholder: 'Write your sentence here…',
      };

  const optionWords = (item: Pair, itemIndex: number, optionCount: number) => {
    const samePart = item.partOfSpeech
      ? pairs.filter(candidate => candidate.word !== item.word && candidate.partOfSpeech === item.partOfSpeech)
      : [];
    const rest = pairs.filter(candidate =>
      candidate.word !== item.word && !samePart.some(match => match.word === candidate.word)
    );
    const pool = [...samePart, ...rest];
    const rotated = pool.length ? [...pool.slice(itemIndex % pool.length), ...pool.slice(0, itemIndex % pool.length)] : [];
    const words = [item.word, ...rotated.slice(0, Math.max(0, optionCount - 1)).map(candidate => candidate.word)];
    const shift = words.length ? (itemIndex * 2 + 1) % words.length : 0;
    return [...words.slice(shift), ...words.slice(0, shift)];
  };

  const currentContext = contextItems[contextIndex];
  const contextOptions = currentContext
    ? optionWords(currentContext, contextIndex, level === 'A2' ? 3 : 4)
    : [];
  const contextPrompt = currentContext
    ? (maskWord(currentContext.context, currentContext.word) || currentContext.meaning)
    : '';

  const answerContext = (word: string) => {
    if (!currentContext || contextFeedback === 'correct') return;
    setContextChoice(word);

    if (word === currentContext.word) {
      setContextFeedback('correct');
      return;
    }

    addRevisit(currentContext.word);
    setContextFeedback('wrong');
  };

  const continueContext = () => {
    if (contextIndex + 1 >= contextItems.length) {
      setMaxUnlockedStage(current => Math.max(current, 2));
      setStage('recall');
      setContextChoice(null);
      setContextFeedback('idle');
      return;
    }

    setContextIndex(index => index + 1);
    setContextChoice(null);
    setContextFeedback('idle');
  };

  const currentRecall = recallItems[recallIndex];
  const recallOptions = currentRecall ? optionWords(currentRecall, recallIndex + 3, 3) : [];

  const verifyRecall = () => {
    if (!currentRecall) return;

    const answer = policy.vocabularyRecallMode === 'choice'
      ? (recallChoice ?? '')
      : typedRecall;

    if (normalizeTypedAnswer(answer, language) === normalizeTypedAnswer(currentRecall.word, language)) {
      setRecallFeedback('correct');
      return;
    }

    addRevisit(currentRecall.word);
    setRecallAttempts(value => value + 1);
    setRecallFeedback('wrong');
  };

  const continueRecall = () => {
    if (recallIndex + 1 >= recallItems.length) {
      setStage('done');
      confetti({ particleCount: 55, spread: 55, origin: { y: 0.72 } });
      return;
    }

    setRecallIndex(index => index + 1);
    setRecallChoice(null);
    setTypedRecall('');
    setRecallFeedback('idle');
    setRecallAttempts(0);
    setAnswerRevealed(false);
    setUseSentence('');
  };

  const stageRank = stage === 'match' ? 0 : stage === 'context' ? 1 : stage === 'recall' ? 2 : 3;
  const stageDefinitions = [
    { key: 'match' as const, label: copy.match },
    { key: 'context' as const, label: copy.context },
    { key: 'recall' as const, label: copy.recall },
  ];
  const stageHeader = (
    <div className="shrink-0 rounded-2xl bg-white/65 p-3 ring-1 ring-black/[0.06] shadow-sm">
      <div className="flex items-center gap-3">
        <div className={cn('hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white sm:flex', theme.badge)}>
          <BrainCircuit size={18} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className={cn('font-display text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm', theme.accent)}>
                {copy.title}
              </p>
              <p className={cn('mt-0.5 font-serif text-wood/52', isArabic ? 'text-sm sm:text-base' : 'text-xs sm:text-sm')}>
                {copy.subtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors', theme.reset)}
              aria-label={t('nav.reset')}
            >
              <RotateCcw size={14} />
            </button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {stageDefinitions.map((item, index) => {
              const isUnlocked = index <= maxUnlockedStage;
              const isActive = stageRank === index;
              const isComplete = stageRank > index;

              return (
                <button
                  key={item.key}
                  type="button"
                  disabled={!isUnlocked}
                  onClick={() => {
                    if (!isUnlocked) return;
                    setStage(item.key);
                  }}
                  className={cn(
                    'min-h-10 rounded-xl px-2.5 py-2 text-center font-display text-[11px] font-semibold tracking-[0.02em] ring-1 transition-all sm:text-xs md:text-[13px]',
                    isActive
                      ? cn(theme.selected, 'ring-1')
                      : isComplete
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-200 hover:bg-emerald-100'
                      : isUnlocked
                      ? 'bg-white/80 text-wood/62 ring-black/[0.07] hover:bg-white'
                      : 'cursor-not-allowed bg-white/45 text-wood/28 ring-black/[0.04]'
                  )}
                >
                  {isComplete ? '✓ ' : ''}{item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  if (stage === 'context' && currentContext) {
    return (
      <div className="h-full flex flex-col gap-3 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'} onPointerDown={(event) => event.stopPropagation()}>
        {stageHeader}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pe-2">
          <div className="mx-auto max-w-4xl space-y-4 pb-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className={cn('font-display text-sm font-semibold tracking-[0.04em] sm:text-base', theme.accent)}>02 · {copy.context}</p>
                <p className={cn('mt-1 font-serif text-wood/52', isArabic ? 'text-base' : 'text-sm')}>{copy.contextHint}</p>
              </div>
              <span className={cn('font-display text-xs font-semibold tabular-nums', theme.accent)}>
                {formatNumber(contextIndex + 1)} / {formatNumber(contextItems.length)}
              </span>
            </div>

            <div className={cn('rounded-2xl p-5 ring-1', theme.barBg, theme.selected)}>
              <div className="flex flex-wrap gap-2 font-display text-[9px] font-semibold uppercase tracking-[0.12em] text-wood/38">
                {currentContext.chapter && <span>{copy.chapter} {formatNumber(currentContext.chapter)}</span>}
                {currentContext.partOfSpeech && <span>· {currentContext.partOfSpeech}</span>}
              </div>
              <p className={cn('mt-3 font-serif font-semibold leading-[1.7] text-wood', isArabic ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl')}>
                {contextPrompt}
              </p>
            </div>

            <div className={cn('grid gap-2.5', contextOptions.length > 3 ? 'sm:grid-cols-2' : 'sm:grid-cols-3')}>
              {contextOptions.map(word => {
                const selected = contextChoice === word;
                const correct = contextFeedback !== 'idle' && word === currentContext.word;
                const wrong = contextFeedback === 'wrong' && selected && !correct;

                return (
                  <button
                    key={word}
                    type="button"
                    onClick={() => answerContext(word)}
                    disabled={contextFeedback === 'correct'}
                    className={cn(
                      'min-h-14 rounded-2xl px-4 font-serif font-semibold ring-1 transition-all',
                      correct
                        ? 'bg-emerald-600 text-white ring-emerald-600'
                        : wrong
                        ? 'bg-rose-50 text-rose-700 ring-rose-300'
                        : selected
                        ? cn(theme.selected, 'ring-1')
                        : cn('bg-white text-wood ring-black/[0.07]', theme.idle)
                    )}
                  >
                    {displayWord(word, language)}
                  </button>
                );
              })}
            </div>

            {contextFeedback !== 'idle' && (
              <div className={cn(
                'rounded-2xl p-4 ring-1',
                contextFeedback === 'correct'
                  ? 'bg-emerald-50 text-emerald-900 ring-emerald-200'
                  : 'bg-rose-50 text-rose-900 ring-rose-200'
              )}>
                <div className="flex items-start gap-3">
                  {contextFeedback === 'correct'
                    ? <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-emerald-700" />
                    : <XCircle size={19} className="mt-0.5 shrink-0 text-rose-700" />}
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold">
                      {contextFeedback === 'correct' ? copy.correct : copy.wrong}
                    </p>
                    <p className={cn('mt-1 font-serif leading-relaxed opacity-75', isArabic ? 'text-base' : 'text-sm')}>
                      <strong>{displayWord(currentContext.word, language)}</strong> · {currentContext.meaning}
                    </p>
                  </div>
                  {contextFeedback === 'correct' && (
                    <button type="button" onClick={continueContext} className={cn('inline-flex min-h-10 items-center gap-1.5 rounded-xl px-3.5 font-display text-[10px] font-semibold', theme.badge)}>
                      {copy.continue}<ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'recall' && currentRecall) {
    return (
      <div className="h-full flex flex-col gap-3 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'} onPointerDown={(event) => event.stopPropagation()}>
        {stageHeader}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pe-2">
          <div className="mx-auto max-w-3xl space-y-4 pb-3">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className={cn('font-display text-sm font-semibold tracking-[0.04em] sm:text-base', theme.accent)}>03 · {copy.recall}</p>
                <p className={cn('mt-1 font-serif text-wood/52', isArabic ? 'text-base' : 'text-sm')}>{copy.recallHint}</p>
              </div>
              <span className={cn('font-display text-xs font-semibold tabular-nums', theme.accent)}>
                {formatNumber(recallIndex + 1)} / {formatNumber(recallItems.length)}
              </span>
            </div>

            <div className="rounded-2xl bg-white p-5 ring-1 ring-black/[0.06]">
              <p className={cn('font-serif font-semibold leading-[1.65] text-wood', isArabic ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl')}>
                {currentRecall.meaning}
              </p>
              {policy.vocabularyRecallMode === 'guided' && currentRecall.context && (
                <p className={cn('mt-4 rounded-xl p-3 font-serif leading-relaxed text-wood/62', theme.barBg, isArabic ? 'text-base' : 'text-sm')}>
                  {maskWord(currentRecall.context, currentRecall.word)}
                </p>
              )}
              {policy.vocabularyRecallMode === 'guided' && (
                <p className={cn('mt-3 font-display text-[10px] font-semibold uppercase tracking-[0.12em]', theme.accent)}>
                  {copy.cue}: {currentRecall.word.charAt(0)}…
                </p>
              )}
            </div>

            {policy.vocabularyRecallMode === 'choice' ? (
              <div className="grid gap-2.5 sm:grid-cols-3">
                {recallOptions.map(word => (
                  <button
                    key={word}
                    type="button"
                    onClick={() => {
                      setRecallChoice(word);
                      setRecallFeedback('idle');
                    }}
                    disabled={recallFeedback === 'correct'}
                    className={cn(
                      'min-h-14 rounded-2xl px-4 font-serif font-semibold ring-1 transition-all',
                      recallChoice === word ? cn(theme.selected, 'ring-1') : cn('bg-white ring-black/[0.07]', theme.idle)
                    )}
                  >
                    {displayWord(word, language)}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="text"
                value={typedRecall}
                onChange={(event) => {
                  setTypedRecall(event.target.value);
                  setRecallFeedback('idle');
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && typedRecall.trim()) verifyRecall();
                }}
                disabled={recallFeedback === 'correct' || answerRevealed}
                autoComplete="off"
                spellCheck={false}
                placeholder={isArabic ? 'اكتب الكلمة هنا…' : 'Type the target word…'}
                className={cn('min-h-14 w-full rounded-2xl bg-white px-4 font-serif text-lg text-wood outline-none ring-1 focus:ring-2', theme.selected)}
              />
            )}

            {policy.vocabularyRecallMode === 'independent' && recallFeedback === 'correct' && (
              <div className="rounded-2xl bg-white p-4 ring-1 ring-black/[0.06]">
                <label className={cn('block font-display text-[10px] font-semibold uppercase tracking-[0.12em]', theme.accent)}>
                  {copy.usePrompt}
                </label>
                <textarea
                  value={useSentence}
                  onChange={(event) => setUseSentence(event.target.value)}
                  rows={2}
                  placeholder={copy.usePlaceholder}
                  className="mt-2 w-full resize-none rounded-xl bg-stone-50 px-3.5 py-3 font-serif text-sm leading-relaxed text-wood outline-none ring-1 ring-black/[0.06] focus:ring-2 focus:ring-black/[0.12]"
                />
              </div>
            )}

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-h-10 flex-1">
                {recallFeedback === 'wrong' && (
                  <p className={cn('font-serif text-rose-700', isArabic ? 'text-base' : 'text-sm')}>{copy.wrong}</p>
                )}
                {(recallFeedback === 'correct' || answerRevealed) && (
                  <p className={cn('font-serif text-emerald-800', isArabic ? 'text-base' : 'text-sm')}>
                    <strong>{displayWord(currentRecall.word, language)}</strong> · {currentRecall.meaning}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                {recallFeedback === 'wrong' && recallAttempts >= 2 && !answerRevealed && (
                  <button
                    type="button"
                    onClick={() => {
                      setAnswerRevealed(true);
                      addRevisit(currentRecall.word);
                    }}
                    className="min-h-11 rounded-xl bg-white px-4 font-display text-[10px] font-semibold text-wood/62 ring-1 ring-black/[0.07]"
                  >
                    {copy.showAnswer}
                  </button>
                )}
                {recallFeedback !== 'correct' && !answerRevealed ? (
                  <button
                    type="button"
                    onClick={verifyRecall}
                    disabled={policy.vocabularyRecallMode === 'choice' ? !recallChoice : !typedRecall.trim()}
                    className={cn('min-h-11 rounded-xl px-5 font-display text-[11px] font-semibold disabled:opacity-35', theme.badge)}
                  >
                    {copy.check}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={continueRecall}
                    disabled={policy.vocabularyRecallMode === 'independent' && useSentence.trim().length < 8}
                    className={cn(
                      'inline-flex min-h-11 items-center gap-2 rounded-xl px-5 font-display text-[11px] font-semibold disabled:cursor-not-allowed disabled:opacity-35',
                      theme.badge
                    )}
                  >
                    {copy.continue}<ArrowRight size={15} className={isRTL ? 'rotate-180' : ''} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'done') {
    return (
      <div className="h-full flex flex-col gap-3 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
        {stageHeader}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pe-2">
          <div className="mx-auto max-w-3xl space-y-4 pb-3">
            <div className={cn('rounded-2xl p-6 text-center ring-1', theme.barBg, theme.selected)}>
              <CheckCircle2 size={30} className="mx-auto text-emerald-600" />
              <h4 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-wood">{copy.done}</h4>
              <p className={cn('mt-2 font-serif text-wood/55', isArabic ? 'text-lg' : 'text-base')}>
                {formatNumber(Math.max(0, pairs.length - revisitWords.size))} / {formatNumber(pairs.length)} {copy.mastered}
              </p>
            </div>

            {revisitWords.size > 0 && (
              <div className="rounded-2xl bg-rose-50 p-5 ring-1 ring-rose-200">
                <p className="font-display text-sm font-semibold text-rose-800">{copy.revisit}</p>
                <p className={cn('mt-1 font-serif text-rose-900/60', isArabic ? 'text-base' : 'text-sm')}>{copy.revisitHint}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[...revisitWords].map(word => (
                    <span key={word} className="rounded-full bg-white px-3 py-1.5 font-serif text-sm font-semibold text-rose-800 ring-1 ring-rose-200">
                      {displayWord(word, language)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              {revisitWords.size > 0 && onReviewGlossary && (
                <button
                  type="button"
                  onClick={onReviewGlossary}
                  className={cn('inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 font-display text-[11px] font-semibold', theme.badge)}
                >
                  <BrainCircuit size={16} />
                  {copy.backToGlossary}
                </button>
              )}
              <button type="button" onClick={reset} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 font-display text-[11px] font-semibold text-wood/65 ring-1 ring-black/[0.07]">
                <RotateCcw size={16} />{copy.restart}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-3 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'} onPointerDown={(event) => event.stopPropagation()}>
      {stageHeader}
      <div className="flex items-center gap-3 shrink-0 px-1">
        <span className={cn('font-display font-semibold text-wood/45 tabular-nums shrink-0', isArabic ? 'text-sm' : 'text-xs')}>
          {formatNumber(correctCount)}/{formatNumber(total)}
        </span>
        <div className={cn('flex-1 h-1.5 rounded-full overflow-hidden', theme.barBg)}>
          <motion.div className={cn('h-full rounded-full', theme.barFill)} animate={{ width: `${progress}%` }} transition={{ type: 'spring', stiffness: 160, damping: 22 }} />
        </div>
        <AnimatePresence>
          {streak >= 2 && (
            <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className={cn('flex items-center gap-1 px-2 py-1 rounded-full font-semibold shrink-0', isArabic ? 'text-sm' : 'text-[10px]', theme.badge)}>
              <Zap size={10} />{formatNumber(streak)}×
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="shrink-0 min-h-[58px]">
        <AnimatePresence mode="wait">
          {feedback.kind === 'done' ? (
            <motion.div key="done" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-emerald-50 px-4 py-3 flex items-center gap-3 ring-1 ring-emerald-200">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              <div className="flex-1">
                <p className={cn('font-display font-semibold text-emerald-800', isArabic ? 'text-base' : 'text-sm')}>{copy.complete}</p>
                <p className={cn('mt-0.5 font-serif text-emerald-700/70', isArabic ? 'text-sm' : 'text-xs')}>
                  {t('ex.allWordsMatched').replace('{total}', formatNumber(total))}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStage('context')}
                className={cn('inline-flex min-h-10 items-center gap-1.5 rounded-xl px-4 font-display text-[10px] font-semibold', theme.badge)}
              >
                {copy.continue}
                <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
              </button>
            </motion.div>
          ) : feedback.kind === 'correct' ? (
            <motion.div key={`correct-${feedback.word}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              <p className={cn('font-serif text-emerald-800', isArabic ? 'text-base' : 'text-sm')}><strong>{displayWord(feedback.word, language)}</strong> {t('ex.means')} <span className={isArabic ? '' : 'italic'}>{feedback.meaning}</span></p>
            </motion.div>
          ) : feedback.kind === 'wrong' ? (
            <motion.div key={`wrong-${feedback.word}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border-2 border-rose-300 bg-rose-50 px-4 py-3 flex items-center gap-3">
              <XCircle size={20} className="text-rose-600 shrink-0" />
              <p className={cn('font-serif text-rose-800', isArabic ? 'text-base' : 'text-sm')}><strong>{displayWord(feedback.word, language)}</strong> {t('ex.doesNotMean')} <span className={isArabic ? '' : 'italic'}>{feedback.meaning}</span>. {t('ex.keepTrying')}</p>
            </motion.div>
          ) : (
            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border-2 border-dashed border-gray-200 h-full min-h-[58px] flex items-center justify-center gap-2 px-4">
              <Lightbulb size={17} className={theme.accent} />
              <p className={cn('font-serif text-wood/50', isArabic ? 'text-base' : 'text-sm')}>{t('ex.selectWordHint')}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden custom-scrollbar px-2">
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 pb-1 items-start">
          <div className="flex items-center gap-2"><span className={cn('w-1 h-4 rounded-full', theme.dot)} /><span className={cn('font-display uppercase tracking-widest font-bold', isArabic ? 'text-sm' : 'text-xs', theme.accent)}>{t('ex.words')}</span></div>
          <div className="flex items-center gap-2"><span className={cn('w-1 h-4 rounded-full', theme.dot)} /><span className={cn('font-display uppercase tracking-widest font-bold', isArabic ? 'text-sm' : 'text-xs', theme.accent)}>{t('ex.meanings')}</span></div>

          {pairs.map((pair, index) => {
            const meaning = meaningOrder[index];
            const wordMatched = Boolean(matches[pair.word]);
            const meaningMatched = matchedMeanings.includes(meaning);
            const wordSelected = selectedWord === pair.word;
            const meaningSelected = selectedMeaning === meaning;
            const wordWrong = wrongWord === pair.word;
            const meaningWrong = wrongMeaning === meaning;

            return (
              <React.Fragment key={pair.word}>
                <motion.button
                  animate={wordWrong ? { x: [0, -7, 7, -4, 4, 0] } : {}}
                  whileTap={!wordMatched ? { scale: 0.97 } : {}}
                  onClick={() => chooseWord(pair.word)}
                  disabled={wordMatched || feedback.kind === 'done'}
                  className={cn(
                    'w-full min-h-[48px] sm:min-h-[58px] px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 text-left transition-all',
                    wordMatched ? theme.matched : wordWrong ? 'border-rose-400 bg-rose-50' : wordSelected ? theme.selected : theme.idle
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={cn('font-serif font-bold leading-snug', isArabic ? 'text-sm sm:text-lg md:text-lg' : 'text-xs sm:text-base md:text-lg', wordMatched ? 'text-emerald-800' : wordWrong ? 'text-rose-700' : 'text-wood')}>
                      {displayWord(pair.word, language)}
                    </span>
                    {wordMatched && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
                    {wordWrong && <XCircle size={16} className="text-rose-500 shrink-0" />}
                  </div>
                </motion.button>

                <motion.button
                  animate={meaningWrong ? { x: [0, -7, 7, -4, 4, 0] } : {}}
                  whileTap={!meaningMatched ? { scale: 0.97 } : {}}
                  onClick={() => chooseMeaning(meaning)}
                  disabled={meaningMatched || feedback.kind === 'done'}
                  className={cn(
                    'w-full min-h-[48px] sm:min-h-[58px] px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 text-left transition-all',
                    meaningMatched ? theme.matched : meaningWrong ? 'border-rose-400 bg-rose-50' : meaningSelected ? theme.selected : theme.idle
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={cn('font-serif leading-snug', isArabic ? 'text-sm sm:text-base md:text-lg' : 'text-xs sm:text-sm md:text-base', meaningMatched ? 'text-emerald-800' : meaningWrong ? 'text-rose-700' : 'text-wood/80')}>{meaning}</span>
                    {meaningMatched && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
                    {meaningWrong && <XCircle size={16} className="text-rose-500 shrink-0" />}
                  </div>
                </motion.button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};