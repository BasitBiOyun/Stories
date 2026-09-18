import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Zap, Lightbulb, ArrowRight, BrainCircuit } from '../ui/icons';
import type { Level, VocabularyChallengePair } from '../../types';
import { getLearningLevelPolicy } from '../../data/learningLevelPolicy';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import confetti from 'canvas-confetti';

type Pair = VocabularyChallengePair;
type Props = { pairs: Pair[]; collectionId?: string; level: Level };

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

const maskWord = (context: string | undefined, word: string) => {
  if (!context) return '';
  const lowerContext = context.toLocaleLowerCase();
  const lowerWord = word.toLocaleLowerCase();
  const index = lowerContext.indexOf(lowerWord);
  if (index < 0) return context;
  return context.slice(0, index) + '_____' + context.slice(index + word.length);
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

export const VocabularyMatch = ({ pairs, collectionId = 'prophets', level }: Props) => {
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
  const [bestStreak, setBestStreak] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState>({ kind: 'idle' });

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
    setBestStreak(0);
    setFeedback({ kind: 'idle' });
  };

  const tryMatch = (word: string, meaning: string) => {
    if (wordToMeaning[word] === meaning) {
      const next = { ...matches, [word]: meaning };
      setMatches(next);
      setSelectedWord(null);
      setSelectedMeaning(null);
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setBestStreak((value) => Math.max(value, nextStreak));

      if (Object.keys(next).length === total) {
        setFeedback({ kind: 'done' });
        confetti({ particleCount: 160, spread: 85, origin: { y: 0.6 } });
      } else {
        setFeedback({ kind: 'correct', word, meaning });
      }
      return;
    }

    setStreak(0);
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

  return (
    <div className="h-full flex flex-col gap-3 relative overflow-hidden" onPointerDown={(event) => event.stopPropagation()}>
      <div className="flex items-center gap-3 shrink-0">
        <span className={cn('font-bold text-wood/50 tabular-nums w-8 text-right', isArabic ? 'text-sm' : 'text-xs')}>{formatNumber(correctCount)}/{formatNumber(total)}</span>
        <div className={cn('flex-1 h-3 rounded-full overflow-hidden', theme.barBg)}>
          <motion.div className={cn('h-full rounded-full', theme.barFill)} animate={{ width: `${progress}%` }} transition={{ type: 'spring', stiffness: 160, damping: 22 }} />
        </div>
        <span className={cn('font-bold text-emerald-600 tabular-nums w-10 text-right', isArabic ? 'text-sm' : 'text-xs')}>{formatNumber(progress)}%</span>
        <AnimatePresence>
          {streak >= 2 && (
            <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className={cn('flex items-center gap-1 px-2 py-1 rounded-full font-black shrink-0', isArabic ? 'text-sm' : 'text-[11px]', theme.badge)}>
              <Zap size={10} />{formatNumber(streak)}x
            </motion.div>
          )}
        </AnimatePresence>
        <button onClick={reset} className={cn('p-1.5 rounded-lg transition-colors shrink-0', theme.reset)} aria-label={t('nav.reset')}><RotateCcw size={14} /></button>
      </div>

      <div className="shrink-0 min-h-[58px]">
        <AnimatePresence mode="wait">
          {feedback.kind === 'done' ? (
            <motion.div key="done" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              <div className="flex-1"><p className={cn('font-display font-bold text-emerald-800', isArabic ? 'text-base' : 'text-sm')}>{t('ex.allWordsMatched').replace('{total}', formatNumber(total))}</p>{bestStreak >= 2 && <p className={cn('text-emerald-700', isArabic ? 'text-sm' : 'text-xs')}>{t('ex.bestStreak').replace('{count}', formatNumber(bestStreak))}</p>}</div>
              <button onClick={reset} className={cn('px-3 py-2 rounded-xl bg-emerald-600 text-white font-bold flex items-center gap-1', isArabic ? 'text-sm' : 'text-xs')}><RotateCcw size={13} />{t('ex.tryAgain')}</button>
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

      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
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