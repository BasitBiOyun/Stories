import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Zap, Lightbulb } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import confetti from 'canvas-confetti';

type Pair = { word: string; meaning: string };
type Props = { pairs: Pair[]; collectionId?: string };

type FeedbackState =
  | { kind: 'idle' }
  | { kind: 'correct'; word: string; meaning: string }
  | { kind: 'wrong'; word: string; meaning: string }
  | { kind: 'done' };

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ─── Shake wrapper ────────────────────────────────────────────────────────────

const Shake = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <motion.div
    animate={active ? { x: [0, -9, 9, -6, 6, -3, 3, 0] } : {}}
    transition={{ duration: 0.38, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

// ─── Confetti burst ───────────────────────────────────────────────────────────

const Burst = ({ active }: { active: boolean }) => {
  const colors = ['#f59e0b', '#10b981', '#3b82f6', '#f43f5e', '#8b5cf6', '#06b6d4', '#f97316'];
  return (
    <AnimatePresence>
      {active &&
        [...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute pointer-events-none rounded-full z-20"
            style={{
              width: 5 + (i % 4) * 3,
              height: 5 + (i % 4) * 3,
              background: colors[i % colors.length],
              top: '50%',
              left: '50%',
            }}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1.6, 0.7],
              x: Math.cos((i * Math.PI * 2) / 12) * (44 + i * 7),
              y: Math.sin((i * Math.PI * 2) / 12) * (44 + i * 7),
              opacity: [1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
    </AnimatePresence>
  );
};

// ─── Feedback Panel ───────────────────────────────────────────────────────────

const FeedbackPanel = ({
  feedback,
  bestStreak,
  correctCount,
  total,
  onReset,
  colTheme,
}: {
  feedback: FeedbackState;
  bestStreak: number;
  correctCount: number;
  total: number;
  onReset: () => void;
  colTheme: any;
}) => {
  const { t, formatNumber, language } = useLanguage();
  return (
    <div className="shrink-0 min-h-[70px] sm:min-h-[80px]">
      <AnimatePresence mode="wait">

        {feedback.kind === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={cn("h-full rounded-2xl border-2 px-3 sm:px-5 py-2 flex items-center gap-3 sm:gap-4", colTheme.doneBorder)}
          >
            <span className="text-2xl sm:text-4xl shrink-0">🏆</span>
            <div className="flex-1 min-w-0">
              <p className={cn("font-display text-xs sm:text-base font-bold tracking-tight", colTheme.doneTitle)}>
                {t('ex.allWordsMatched').replace('{total}', formatNumber(total))}
              </p>
              <p className={cn("font-serif text-xs sm:text-sm truncate", colTheme.doneSub)}>
                {bestStreak >= 3
                  ? t('ex.bestStreak').replace('{count}', formatNumber(bestStreak))
                  : t('ex.greatWork')}
              </p>
            </div>
            <button
              onClick={onReset}
              className={cn("shrink-0 flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer", colTheme.doneBtn)}
            >
              <RotateCcw size={14} /> {t('ex.tryAgain')}
            </button>
          </motion.div>
        )}

        {feedback.kind === 'correct' && (
          <motion.div
            key={`correct-${feedback.word}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="h-full rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-3 sm:px-5 py-2 flex items-center gap-3 sm:gap-4"
          >
            <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-500 text-white shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-xs sm:text-sm font-bold text-emerald-800 uppercase tracking-wider mb-0.5">
                {t('ex.correct')}
              </p>
              <p className={cn(
                "font-serif text-xs sm:text-sm md:text-base text-emerald-700 leading-snug line-clamp-2",
                language === 'ar' && "text-sm sm:text-lg"
              )}>
                <span className="font-bold not-italic">"{feedback.word}"</span>
                {' '}{t('ex.means')}{' '}
                <span className={cn(language === 'ar' ? "not-italic" : "italic")}>"{feedback.meaning}"</span>
              </p>
            </div>
          </motion.div>
        )}

        {feedback.kind === 'wrong' && (
          <motion.div
            key={`wrong-${feedback.word}-${feedback.meaning}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="h-full rounded-2xl border-2 border-rose-300 bg-rose-50 px-3 sm:px-5 py-2 flex items-center gap-3 sm:gap-4"
          >
            <div className="p-1.5 sm:p-2 rounded-xl bg-rose-500 text-white shrink-0">
              <XCircle size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-xs sm:text-sm font-bold text-rose-800 uppercase tracking-wider mb-0.5">
                {t('ex.notQuite')}
              </p>
              <p className={cn(
                "font-serif text-xs sm:text-sm md:text-base text-rose-700 leading-snug line-clamp-2",
                language === 'ar' && "text-sm sm:text-lg"
              )}>
                <span className="font-bold not-italic">"{feedback.word}"</span>
                {' '}{t('ex.doesNotMean')}{' '}
                <span className={cn(language === 'ar' ? "not-italic" : "italic")}>"{feedback.meaning}"</span>.
                {' '}{t('ex.keepTrying')}
              </p>
            </div>
          </motion.div>
        )}

        {feedback.kind === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("h-full rounded-2xl border-2 border-dashed flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2", colTheme.idleFeedbackBorder)}
          >
            <Lightbulb size={18} className={cn("shrink-0", colTheme.idleFeedbackIcon)} />
            <p className={cn(
              "font-serif text-xs sm:text-sm md:text-base text-wood/50",
              language === 'ar' ? "not-italic text-sm sm:text-lg" : "italic"
            )}>
              {t('ex.selectWordHint')}
            </p>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const VocabularyMatch = ({ pairs, collectionId = 'prophets' }: Props) => {
  const { t, formatNumber, language } = useLanguage();
  const [shuffledMeanings] = useState(() => shuffle(pairs.map((p) => p.meaning)));

  const [selectedWord, setSelectedWord]       = useState<string | null>(null);
  const [selectedMeaning, setSelectedMeaning] = useState<string | null>(null);
  const [matches, setMatches]                 = useState<Record<string, string>>({});
  const [wrongWords, setWrongWords]           = useState<Set<string>>(new Set());
  const [wrongMeanings, setWrongMeanings]     = useState<Set<string>>(new Set());
  const [burstWord, setBurstWord]             = useState<string | null>(null);
  const [streak, setStreak]                   = useState(0);
  const [bestStreak, setBestStreak]           = useState(0);
  const [feedback, setFeedback]               = useState<FeedbackState>({ kind: 'idle' });

  const colTheme = React.useMemo(() => {
    const isHistory = collectionId === 'history';
    const isTurkish = collectionId === 'turkish';
    return {
      barBg: isHistory ? "bg-emerald-100" : isTurkish ? "bg-sky-100" : "bg-amber-100",
      barFill: isHistory ? "bg-emerald-555" : isTurkish ? "bg-sky-600" : "bg-amber-500",
      badgeBg: isHistory ? "bg-emerald-600 shadow-md shadow-emerald-205 text-white" : isTurkish ? "bg-sky-600 shadow-md shadow-sky-150 text-white" : "bg-amber-500 shadow-md shadow-amber-200 text-white",
      resetBtn: isHistory ? "bg-emerald-100 text-emerald-650 hover:bg-emerald-200" : isTurkish ? "bg-sky-100 text-sky-700 hover:bg-sky-200" : "bg-amber-100 text-amber-600 hover:bg-amber-200",
      columnDot: isHistory ? "bg-emerald-550" : isTurkish ? "bg-sky-600" : "bg-amber-500",
      columnTitle: isHistory ? "text-emerald-700" : isTurkish ? "text-sky-750" : "text-amber-600",
      wordMatched: "border-emerald-350 bg-emerald-50 text-emerald-800",
      wordSelected: isHistory ? "border-emerald-500 bg-emerald-50 shadow-md ring-2 ring-emerald-200/60" : isTurkish ? "border-sky-500 bg-sky-50 shadow-md ring-2 ring-sky-200/60" : "border-amber-500 bg-amber-50 shadow-md ring-2 ring-amber-200/60",
      wordIdle: isHistory ? "border-emerald-100 bg-white hover:border-emerald-300 hover:bg-emerald-50/60 shadow-sm" : isTurkish ? "border-sky-105 bg-white hover:border-sky-305 hover:bg-sky-50/60 shadow-sm" : "border-amber-100 bg-white hover:border-amber-300 hover:bg-amber-50/60 shadow-sm",
      wordActiveBullet: isHistory ? "bg-emerald-500" : isTurkish ? "bg-sky-500" : "bg-amber-500",
      meaningMatched: "border-emerald-200 bg-emerald-50/50 cursor-default opacity-55 text-emerald-700",
      meaningSelected: isHistory ? "border-emerald-500 bg-emerald-600 text-white shadow-md ring-2 ring-emerald-200/60" : isTurkish ? "border-sky-500 bg-sky-600 text-white shadow-md ring-2 ring-sky-200/60" : "border-amber-500 bg-amber-600 text-white shadow-md ring-2 ring-amber-200/65",
      meaningIdle: isHistory ? "border-emerald-105 bg-white hover:border-emerald-300 hover:bg-emerald-50/60 shadow-sm text-wood/80" : isTurkish ? "border-sky-105 bg-white hover:border-sky-305 hover:bg-sky-50/60 shadow-sm text-wood/80" : "border-amber-100 bg-white hover:border-amber-300 hover:bg-amber-50/60 shadow-sm text-wood/80",
      idleFeedbackBorder: isHistory ? "border-emerald-100 bg-white/40" : isTurkish ? "border-sky-105 bg-white/40" : "border-amber-100 bg-white/40",
      idleFeedbackIcon: isHistory ? "text-emerald-550" : isTurkish ? "text-sky-600" : "text-amber-400",
      doneBorder: isHistory ? "border-emerald-300 bg-emerald-50" : isTurkish ? "border-sky-250 bg-sky-50" : "border-amber-300 bg-amber-50",
      doneTitle: isHistory ? "text-emerald-850" : isTurkish ? "text-sky-950" : "text-amber-800",
      doneSub: isHistory ? "text-emerald-700/70" : isTurkish ? "text-sky-700/70" : "text-amber-700/70",
      doneBtn: isHistory ? "bg-emerald-650 text-white hover:bg-emerald-750 shadow-md shadow-emerald-200" : isTurkish ? "bg-sky-700 text-white hover:bg-sky-800 shadow-md shadow-sky-201" : "bg-amber-600 text-white hover:bg-amber-700 shadow-md shadow-amber-200"
    };
  }, [collectionId]);

  const wordToMeaning = useMemo(
    () => Object.fromEntries(pairs.map((p) => [p.word, p.meaning])),
    [pairs]
  );

  const matchedWords    = Object.keys(matches);
  const matchedMeanings = Object.values(matches);
  const totalPairs      = pairs.length;
  const correctCount    = matchedWords.length;
  const progress        = Math.round((correctCount / totalPairs) * 100);

  // ── Match attempt ──────────────────────────────────────────────────────────

  const tryMatch = (word: string, meaning: string) => {
    if (wordToMeaning[word] === meaning) {
      const newMatches = { ...matches, [word]: meaning };
      setMatches(newMatches);
      setSelectedWord(null);
      setSelectedMeaning(null);

      const newStreak = streak + 1;
      setStreak(newStreak);
      setBestStreak((b) => Math.max(b, newStreak));

      setBurstWord(word);
      setTimeout(() => setBurstWord(null), 650);

      if (Object.keys(newMatches).length === totalPairs) {
        setTimeout(() => {
          setFeedback({ kind: 'done' });
          confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 },
            colors: collectionId === 'history' ? ['#059669', '#10B981', '#34D399', '#A7F3D0'] : collectionId === 'turkish' ? ['#0284C7', '#0EA5E9', '#38BDF8', '#7DD3FC'] : ['#D97706', '#F59E0B', '#FCD34D', '#10B981']
          });
        }, 500);
      } else {
        setFeedback({ kind: 'correct', word, meaning });
      }
    } else {
      setStreak(0);
      setWrongWords((s)   => new Set(s).add(word));
      setWrongMeanings((s) => new Set(s).add(meaning));
      setFeedback({ kind: 'wrong', word, meaning });

      setTimeout(() => {
        setWrongWords((s)   => { const n = new Set(s); n.delete(word); return n; });
        setWrongMeanings((s) => { const n = new Set(s); n.delete(meaning); return n; });
        setSelectedWord(null);
        setSelectedMeaning(null);
      }, 420);
    }
  };

  const handleWordClick = (word: string) => {
    if (matchedWords.includes(word) || feedback.kind === 'done') return;
    if (selectedMeaning) {
      tryMatch(word, selectedMeaning);
    } else {
      const next = word === selectedWord ? null : word;
      setSelectedWord(next);
      if (!next && !selectedMeaning) setFeedback({ kind: 'idle' });
    }
  };

  const handleMeaningClick = (meaning: string) => {
    if (matchedMeanings.includes(meaning) || feedback.kind === 'done') return;
    if (selectedWord) {
      tryMatch(selectedWord, meaning);
    } else {
      const next = meaning === selectedMeaning ? null : meaning;
      setSelectedMeaning(next);
      if (!next && !selectedWord) setFeedback({ kind: 'idle' });
    }
  };

  const handleReset = () => {
    setMatches({});
    setSelectedWord(null);
    setSelectedMeaning(null);
    setWrongWords(new Set());
    setWrongMeanings(new Set());
    setStreak(0);
    setBestStreak(0);
    setFeedback({ kind: 'idle' });
    setBurstWord(null);
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div
      className="h-full flex flex-col gap-3 relative overflow-hidden"
      onPointerDown={(e) => e.stopPropagation()}
    >

      {/* PROGRESS BAR + STREAK + RESET */}
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs font-bold text-wood/50 tabular-nums w-8 text-right">
          {correctCount}/{totalPairs}
        </span>
        <div className={cn("flex-1 h-3 rounded-full overflow-hidden", colTheme.barBg)}>
          <motion.div
            className={cn("h-full rounded-full", colTheme.barFill)}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 160, damping: 22 }}
          />
        </div>
        <span className="text-xs font-bold text-emerald-600 tabular-nums w-10 text-right">
          {progress}%
        </span>
        <AnimatePresence>
          {streak >= 2 && (
            <motion.div
              key={streak}
              initial={{ scale: 0.6, opacity: 0, y: -4 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.6, opacity: 0 }}
              className={cn("flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-black shrink-0", colTheme.badgeBg)}
            >
              <Zap size={10} fill="white" />{streak}x
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={handleReset}
          className={cn("p-1.5 rounded-lg transition-colors shrink-0", colTheme.resetBtn)}
          aria-label={t('nav.reset')}
        >
          <RotateCcw size={14} />
        </button>
      </div>

      {/* INSTRUCTION HINT */}
      <div className="shrink-0 h-5 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
            <motion.p
              key={selectedWord ?? selectedMeaning ?? 'none'}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "font-serif text-base text-wood/45 text-center truncate px-4",
                language === 'ar' ? "not-italic text-lg" : "italic"
              )}
            >
              {feedback.kind === 'done'
                ? `🎉 ${t('ex.allMatchedJob')}`
                : !selectedWord && !selectedMeaning
                  ? t('ex.tapToBegin')
                  : selectedWord
                    ? t('ex.wordSelectedHint').replace('{word}', selectedWord)
                    : t('ex.meaningSelectedHint')}
            </motion.p>
        </AnimatePresence>
      </div>

      {/* TWO-COLUMN CARD GRID — scrolls as one unit */}
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 pb-1">

          {/* Column labels */}
          <div className="flex items-center gap-2">
            <div className={cn("w-1 h-4 rounded-full", colTheme.columnDot)} />
            <span className={cn("font-display text-xs uppercase tracking-widest font-bold", colTheme.columnTitle)}>{t('ex.words')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={cn("w-1 h-4 rounded-full", colTheme.columnDot)} />
            <span className={cn("font-display text-xs uppercase tracking-widest font-bold", colTheme.columnTitle)}>{t('ex.meanings')}</span>
          </div>

          {/* Rows: each pair occupies one row */}
          {pairs.map((pair) => {
            const meaning = shuffledMeanings[pairs.indexOf(pair)];

            const wordMatched    = !!matches[pair.word];
            const wordSelected   = selectedWord === pair.word;
            const wordWrong      = wrongWords.has(pair.word);

            const meaningMatched  = matchedMeanings.includes(meaning);
            const meaningSelected = selectedMeaning === meaning;
            const meaningWrong    = wrongMeanings.has(meaning);

            return (
              <React.Fragment key={pair.word}>

                {/* Word card */}
                <Shake active={wordWrong}>
                  <div className="relative">
                    <Burst active={burstWord === pair.word} />
                    <motion.button
                      whileTap={!wordMatched ? { scale: 0.96 } : {}}
                      onClick={() => handleWordClick(pair.word)}
                      disabled={wordMatched || feedback.kind === 'done'}
                      className={cn(
                        'w-full min-h-[48px] sm:min-h-[58px] px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer',
                        wordMatched
                          ? colTheme.wordMatched
                          : wordSelected
                            ? colTheme.wordSelected
                            : wordWrong
                              ? 'border-rose-400 bg-rose-50'
                              : colTheme.wordIdle
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className={cn(
                          'font-serif font-bold text-xs sm:text-base md:text-lg leading-snug',
                          language === 'ar' && "text-sm sm:text-xl",
                          wordMatched ? 'text-emerald-800' : wordWrong ? 'text-rose-700' : 'text-wood'
                        )}>
                          {pair.word}
                        </span>
                        {wordMatched  && <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />}
                        {wordWrong    && <XCircle size={16} className="text-rose-500 shrink-0" />}
                        {wordSelected && !wordWrong && (
                          <motion.span
                            animate={{ scale: [1, 1.35, 1] }}
                            transition={{ repeat: Infinity, duration: 0.85 }}
                            className={cn("w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0", colTheme.wordActiveBullet)}
                          />
                        )}
                      </div>

                    </motion.button>
                  </div>
                </Shake>

                {/* Meaning card */}
                <Shake active={meaningWrong}>
                  <motion.button
                    whileTap={!meaningMatched ? { scale: 0.96 } : {}}
                    onClick={() => handleMeaningClick(meaning)}
                    disabled={meaningMatched || feedback.kind === 'done'}
                    className={cn(
                      'w-full min-h-[48px] sm:min-h-[58px] px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer',
                      meaningMatched
                        ? colTheme.meaningMatched
                        : meaningSelected
                          ? colTheme.meaningSelected
                          : meaningWrong
                            ? 'border-rose-400 bg-rose-50'
                            : colTheme.meaningIdle
                    )}
                  >
                    <p className={cn(
                      'font-serif text-xs sm:text-sm md:text-base leading-snug',
                      language === 'ar' ? "not-italic text-sm sm:text-lg" : "italic",
                      meaningMatched   ? 'text-emerald-700'
                      : meaningSelected ? 'text-white'
                      : meaningWrong    ? 'text-rose-700'
                      : 'text-wood/85'
                    )}>
                      {meaning}
                    </p>
                  </motion.button>
                </Shake>

              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* FEEDBACK PANEL — fixed height, never pushes layout */}
      <FeedbackPanel
        feedback={feedback}
        bestStreak={bestStreak}
        correctCount={correctCount}
        total={totalPairs}
        onReset={handleReset}
        colTheme={colTheme}
      />

    </div>
  );
};