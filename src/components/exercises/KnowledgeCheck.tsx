import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, CheckCircle2, XCircle, Rocket, Sparkles, Trophy, Info, RotateCcw } from '../ui/icons';
import { Exercise } from '../../types';
import { cn } from '../../lib/utils';

import { useLanguage } from '../../contexts/LanguageContext';

// ─── Types ────────────────────────────────────────────────────────────────────

type Props = {
  title: string;
  exercises: Exercise[];
  userAnswers: Record<string, boolean | null>;
  handleAnswer: (id: string, answer: boolean) => void;
  onReset?: () => void;
  level?: string;
  collectionId?: string;
};
 
// ─── Constants ────────────────────────────────────────────────────────────────
 
const BURST_COLORS = ['#f59e0b', '#10b981', '#3b82f6', '#f43f5e', '#8b5cf6'];
 
const SCORE_CONFIG = (t: (key: string) => string, collectionId?: string) => {
  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';
  return [
    { 
      min: 100, 
      label: t('ex.perfect'), 
      emoji: '🏆', 
      color: isHistory ? 'text-emerald-700' : isTurkish ? 'text-sky-700' : 'text-amber-600', 
      bg: isHistory ? 'bg-emerald-50 border-emerald-200' : isTurkish ? 'bg-sky-50 border-sky-200' : 'bg-amber-50 border-amber-200' 
    },
    { 
      min: 80,  
      label: t('ex.amazing'), 
      emoji: '✨', 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50 border-emerald-200' 
    },
    { 
      min: 60,  
      label: t('ex.goodJob'), 
      emoji: '👍', 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 border-blue-200' 
    },
    { 
      min: 0,   
      label: t('ex.keepGoing'), 
      emoji: '💪', 
      color: 'text-rose-600', 
      bg: 'bg-rose-50 border-rose-200' 
    },
  ];
};
 
// ─── Sub-components ───────────────────────────────────────────────────────────
 
/** Confetti burst on correct answer */
const ConfettiBurst = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active &&
      [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 7 + (i % 3) * 3,
            height: 7 + (i % 3) * 3,
            background: BURST_COLORS[i % BURST_COLORS.length],
            top: '50%',
            left: '50%',
          }}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.4, 0.8],
            x: Math.cos((i * Math.PI * 2) / 8) * (40 + i * 8),
            y: Math.sin((i * Math.PI * 2) / 8) * (40 + i * 8),
            opacity: [1, 1, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />
      ))}
  </AnimatePresence>
);
 
/** Streak badge */
const StreakBadge = ({ streak, collectionId }: { streak: number; collectionId?: string }) => {
  const { t } = useLanguage();
  if (streak < 2) return null;
  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';
  return (
    <motion.div
      key={streak}
      initial={{ scale: 0.6, opacity: 0, y: -4 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      className={cn(
        "flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-sm font-black tracking-wider shadow-md",
        isHistory 
          ? "bg-emerald-600 shadow-emerald-250" 
          : isTurkish 
          ? "bg-sky-600 shadow-sky-150" 
          : "bg-amber-500 shadow-amber-200"
      )}
    >
      <Rocket size={14} fill="white" />
      {streak}x {t('ex.streak')}
    </motion.div>
  );
};
 
/** Progress bar */
const ProgressBar = ({
  answered,
  total,
  correct,
  collectionId,
}: {
  answered: number;
  total: number;
  correct: number;
  collectionId?: string;
}) => {
  const { t } = useLanguage();
  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';
  return (
    <div className="flex items-center gap-3 shrink-0">
      <span className="text-sm font-bold text-wood/50 tabular-nums w-10 text-right">
        {answered}/{total}
      </span>
      <div className={cn(
        "flex-1 h-3 rounded-full overflow-hidden",
        isHistory ? "bg-emerald-100" : isTurkish ? "bg-sky-100" : "bg-amber-100"
      )}>
        <motion.div
          className={cn(
            'h-full rounded-full',
            isHistory ? "bg-emerald-550" : isTurkish ? "bg-sky-600" : "bg-amber-500"
          )}
          initial={{ width: 0 }}
          animate={{ width: `${(answered / total) * 100}%` }}
          transition={{ type: 'spring', stiffness: 180, damping: 26 }}
        />
      </div>
      <div className="flex items-center gap-1 text-sm font-bold text-emerald-600 tabular-nums w-16">
        <CheckCircle2 size={14} />
        {correct} {t('ex.pts')}
      </div>
    </div>
  );
};
 
/** Single question card */
const QuestionCard: React.FC<{
  ex: Exercise;
  index: number;
  userAnswer: boolean | undefined | null;
  showResults: boolean;
  isActive: boolean;
  onAnswer: (answer: boolean) => void;
  onInfo: () => void;
  collectionId?: string;
}> = ({
  ex,
  index,
  userAnswer,
  showResults,
  isActive,
  onAnswer,
  onInfo,
  collectionId,
}) => {
  const { t } = useLanguage();
  const hasAnswer = userAnswer !== undefined && userAnswer !== null;
  const isCorrect = hasAnswer && userAnswer === ex.correctAnswer;
  const [burst, setBurst] = React.useState(false);
  
  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';

  const handleClick = (answer: boolean) => {
    if (showResults || hasAnswer) return;
    onAnswer(answer);
    if (answer === ex.correctAnswer) {
      setBurst(true);
      setTimeout(() => setBurst(false), 600);
    }
  };
 
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        'relative rounded-2xl border-2 p-3.5 sm:p-4 flex flex-col justify-between gap-3 transition-all duration-300 shadow-sm min-h-[115px]',
        !hasAnswer && (
          isHistory 
            ? 'border-emerald-100 bg-white/85 hover:border-emerald-300 hover:shadow-emerald-100/50'
            : isTurkish 
            ? 'border-sky-105 bg-white/85 hover:border-sky-300 hover:shadow-sky-100/50'
            : 'border-amber-100 bg-white/80 hover:border-amber-300 hover:shadow-amber-100/50'
        ),
        hasAnswer && !showResults && (
          isHistory 
            ? 'border-emerald-400 bg-emerald-50/70'
            : isTurkish 
            ? 'border-sky-400 bg-sky-50/70'
            : 'border-amber-400 bg-amber-50/70'
        ),
        hasAnswer && showResults && isCorrect && 'border-emerald-400 bg-emerald-50/60 shadow-emerald-100',
        hasAnswer && showResults && !isCorrect && 'border-rose-400 bg-rose-50/60 shadow-rose-100',
      )}
    >
      {/* Burst particles */}
      <ConfettiBurst active={burst} />
 
      {/* Question number + text */}
      <div className="flex items-start gap-2.5 relative z-10">
        <div className={cn(
          'w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-black transition-colors',
          hasAnswer && showResults && isCorrect ? 'bg-emerald-500 text-white' :
          hasAnswer && showResults && !isCorrect ? 'bg-rose-500 text-white' :
          hasAnswer ? (isHistory ? 'bg-emerald-500 text-white' : isTurkish ? 'bg-sky-500 text-white' : 'bg-amber-500 text-white') :
          (isHistory ? 'bg-emerald-100 text-emerald-700' : isTurkish ? 'bg-sky-100 text-sky-700' : 'bg-amber-100 text-amber-700')
        )}>
          {hasAnswer && showResults
            ? isCorrect
              ? '✓'
              : '✗'
            : index + 1}
        </div>
        <p className="font-serif text-xs sm:text-sm md:text-base leading-snug text-wood font-semibold flex-1">
          {ex.question}
        </p>
        {showResults && hasAnswer && (
          <button
            onClick={onInfo}
            className={cn(
              'p-1.5 rounded-lg shrink-0 transition-all cursor-pointer',
              isActive
                ? (isHistory ? 'bg-emerald-600 text-white' : isTurkish ? 'bg-sky-600 text-white' : 'bg-amber-600 text-white')
                : (isHistory ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200' : isTurkish ? 'bg-sky-100 text-sky-600 hover:bg-sky-200' : 'bg-amber-100 text-amber-600 hover:bg-amber-200')
            )}
            title={t('ex.explanation')}
          >
            <Info size={14} />
          </button>
        )}
      </div>

      {/* True / False buttons */}
      <div className="flex gap-2 relative z-10 mt-auto shrink-0 pt-1">
        {[true, false].map((val) => {
          const label = val ? t('ex.true') : t('ex.false');
          const selected = userAnswer === val;
          const revealCorrect = showResults && ex.correctAnswer === val;
          const revealWrong = showResults && selected && !revealCorrect;

          return (
            <motion.button
              key={label}
              whileTap={!hasAnswer && !showResults ? { scale: 0.94 } : {}}
              onClick={() => handleClick(val)}
              disabled={showResults || hasAnswer}
              className={cn(
                'flex-1 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base font-black uppercase tracking-wider border-2 rounded-xl transition-all duration-200 cursor-pointer',
                // default idle state
                !selected && !revealCorrect
                  ? (
                    isHistory 
                      ? 'bg-white text-emerald-900/60 border-emerald-100 hover:border-emerald-400 hover:text-emerald-900 hover:bg-emerald-50'
                      : isTurkish 
                      ? 'bg-white text-sky-950/60 border-sky-100 hover:border-sky-450 hover:text-sky-950 hover:bg-sky-50'
                      : 'bg-white text-wood/60 border-amber-100 hover:border-amber-400 hover:text-wood hover:bg-amber-50'
                  )
                  : '',
                // selected before results
                selected && !showResults
                  ? (
                    isHistory 
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-200'
                      : isTurkish 
                      ? 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-200'
                      : 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-200'
                  )
                  : '',
                // correct reveal
                revealCorrect && showResults
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-200'
                  : '',
                // wrong reveal
                revealWrong
                  ? 'bg-rose-500 text-white border-rose-500'
                  : '',
                (showResults || hasAnswer) ? 'cursor-default' : ''
              )}
            >
              {label}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};
 
// ─── Main Component ───────────────────────────────────────────────────────────
 
export const KnowledgeCheck = ({
  title,
  exercises,
  userAnswers,
  handleAnswer,
  onReset,
  level = 'A2',
  collectionId = 'prophets',
}: Props) => {
  const { t, formatNumber } = useLanguage();
  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';
 
  const [showResults, setShowResults] = React.useState(false);
  const [activeFeedback, setActiveFeedback] = React.useState<string | null>(null);
  const [streak, setStreak] = React.useState(0);
  const [lastStreak, setLastStreak] = React.useState(0);
 
  const visibleExercises = React.useMemo(() => exercises.slice(0, 6), [exercises]);
 
  const exerciseMap = React.useMemo(
    () => Object.fromEntries(visibleExercises.map((e) => [e.id, e])),
    [visibleExercises]
  );
 
  const answeredCount = React.useMemo(
    () => visibleExercises.filter((ex) => userAnswers[ex.id] !== undefined && userAnswers[ex.id] !== null).length,
    [visibleExercises, userAnswers]
  );
 
  const correctCount = React.useMemo(
    () => visibleExercises.filter(
      (ex) => userAnswers[ex.id] === ex.correctAnswer
    ).length,
    [visibleExercises, userAnswers]
  );
 
  const allAnswered = answeredCount === visibleExercises.length;
 
  const score = React.useMemo(() => {
    const pct = visibleExercises.length > 0
      ? Math.round((correctCount / visibleExercises.length) * 105)
      : 0;
    const finalPct = Math.min(pct === 105 ? 100 : pct, 100);
    return { correct: correctCount, total: visibleExercises.length, percentage: finalPct };
  }, [visibleExercises, correctCount]);
 
  const scoreTier = React.useMemo(() => {
    return SCORE_CONFIG(t, collectionId).find((s) => score.percentage >= s.min)!;
  }, [score.percentage, t, collectionId]);
 
  const activeExercise = activeFeedback ? exerciseMap[activeFeedback] : null;
  const activeIsCorrect =
    activeExercise && userAnswers[activeExercise.id] === activeExercise.correctAnswer;
 
  // Track streak on new answers
  const handleAnswerWithStreak = React.useCallback(
    (id: string, answer: boolean) => {
      handleAnswer(id, answer);
      const ex = exerciseMap[id];
      if (!ex) return;
      if (answer === ex.correctAnswer) {
        setStreak((s) => {
          const next = s + 1;
          setLastStreak(next);
          return next;
        });
      } else {
        setStreak(0);
      }
    },
    [handleAnswer, exerciseMap]
  );
 
  const handleReset = () => {
    setShowResults(false);
    setActiveFeedback(null);
    setStreak(0);
    setLastStreak(0);
    onReset?.();
  };
 
  return (
    <div className="flex flex-col h-full min-h-0 gap-4">
 
      {/* ── HEADER ── */}
      <div className={cn(
        'flex items-center justify-between border-b-2 pb-4 shrink-0',
        isHistory ? 'border-emerald-200' : isTurkish ? 'border-sky-200' : 'border-amber-200'
      )}>
        <div className="flex items-center gap-3">
          <div className={cn(
            'p-2.5 rounded-xl shadow-lg text-white',
            isHistory ? 'bg-emerald-600 shadow-emerald-200' : isTurkish ? 'bg-sky-600 shadow-sky-100' : 'bg-amber-600 shadow-amber-200'
          )}>
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="font-display text-2xl text-wood tracking-tight leading-none">{title}</h3>
            <p className="font-serif italic text-xs text-wood/40 mt-0.5">{t('ex.tfChallenge')}</p>
          </div>
        </div>
 
        <div className="flex items-center gap-2">
          <StreakBadge streak={lastStreak} collectionId={collectionId} />
 
          {showResults && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-sm font-bold',
                scoreTier.bg, scoreTier.color
              )}
            >
              <span>{scoreTier.emoji}</span>
              <span>{formatNumber(score.correct)}/{formatNumber(score.total)} · {formatNumber(score.percentage)}%</span>
            </motion.div>
          )}
 
          {allAnswered && !showResults && (
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowResults(true)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-xl font-display text-[11px] uppercase tracking-widest text-white shadow-lg',
                isHistory ? 'bg-emerald-600 shadow-emerald-205' : isTurkish ? 'bg-sky-600 shadow-sky-105' : 'bg-amber-600 shadow-amber-200'
              )}
            >
              <Sparkles size={13} fill="white" />
              {t('ex.seeResults')}
            </motion.button>
          )}
 
          {showResults && onReset && (
            <button
              onClick={handleReset}
              className={cn(
                "p-2 rounded-xl transition-colors",
                isHistory ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-200" : isTurkish ? "bg-sky-100 text-sky-700 hover:bg-sky-200" : "bg-amber-100 text-amber-600 hover:bg-amber-200"
              )}
              aria-label={t('ex.tryAgain')}
            >
              <RotateCcw size={15} />
            </button>
          )}
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <ProgressBar
        answered={answeredCount}
        total={visibleExercises.length}
        correct={correctCount}
        collectionId={collectionId}
      />

      {/* ── QUESTION GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 flex-1 min-h-[200px] overflow-y-auto custom-scrollbar pr-1.5 py-1">
        {visibleExercises.map((ex, index) => (
          <QuestionCard
            key={ex.id}
            ex={ex}
            index={index}
            userAnswer={userAnswers[ex.id]}
            showResults={showResults}
            isActive={activeFeedback === ex.id}
            onAnswer={(answer) => handleAnswerWithStreak(ex.id, answer)}
            onInfo={() => setActiveFeedback(activeFeedback === ex.id ? null : ex.id)}
            collectionId={collectionId}
          />
        ))}
      </div>

      {/* ── FEEDBACK PANEL ── */}
      <div className="shrink-0 min-h-[85px] sm:min-h-[110px] mt-1">
        <AnimatePresence mode="wait">
          {activeExercise ? (
            <motion.div
              key={activeExercise.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'rounded-2xl border-2 p-3 sm:p-4 flex flex-col gap-2 bg-white/95 shadow-md',
                isHistory ? 'border-emerald-200' : isTurkish ? 'border-sky-200' : 'border-amber-200'
              )}
            >
              {/* Feedback header */}
              <div className="flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    'p-1.5 rounded-lg',
                    activeIsCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                  )}>
                    {activeIsCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                  </div>
                  <span className={cn(
                    'font-display text-xs sm:text-sm uppercase tracking-widest font-bold',
                    activeIsCorrect ? 'text-emerald-700' : 'text-rose-700'
                  )}>
                    {activeIsCorrect ? `✓ ${t('ex.correct')}` : `✗ ${t('ex.notQuite')}`}
                  </span>
                </div>
                <button
                  onClick={() => setActiveFeedback(null)}
                  className="text-wood/30 hover:text-wood/60 transition-colors cursor-pointer"
                >
                  <XCircle size={18} />
                </button>
              </div>

              {/* Feedback body */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-3 flex-1 min-h-0 overflow-hidden">
                <p className="font-serif text-xs sm:text-sm leading-relaxed text-wood/80 overflow-y-auto custom-scrollbar">
                  {activeIsCorrect
                    ? activeExercise.feedback.correct
                    : activeExercise.feedback.incorrect}
                </p>
                <div className={cn(
                  'rounded-xl border p-2 sm:p-3 text-xs sm:text-sm leading-relaxed overflow-y-auto custom-scrollbar',
                  activeIsCorrect
                    ? 'bg-emerald-50/60 border-emerald-100 text-emerald-900'
                    : 'bg-rose-50/60 border-rose-100 text-rose-900'
                )}>
                  <span className="block font-black text-[10px] sm:text-xs uppercase tracking-widest mb-0.5 opacity-60">
                    {t('ex.explanation')}
                  </span>
                  {activeExercise.explanation}
                </div>
              </div>
            </motion.div>
          ) : showResults ? (
            /* Score summary card */
            <motion.div
              key="score-summary"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                'rounded-2xl border-2 p-3 sm:p-4 flex items-center gap-4 sm:gap-6 shadow-sm',
                scoreTier.bg
              )}
            >
              <div className="text-3xl sm:text-5xl shrink-0">{scoreTier.emoji}</div>
              <div className="flex-1 min-w-0">
                <p className={cn('font-display text-base sm:text-xl font-bold tracking-tight', scoreTier.color)}>
                  {scoreTier.label}
                </p>
                <p className="font-serif text-xs sm:text-base text-wood/60 mt-0.5">
                  {t('ex.scoreSummary')
                    .replace('{correct}', formatNumber(score.correct))
                    .replace('{total}', formatNumber(score.total))
                    .replace('{percent}', formatNumber(score.percentage))}
                </p>
              </div>
              {score.percentage === 100 && (
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="ml-auto shrink-0"
                >
                  <Trophy size={28} className={isHistory ? 'text-emerald-500' : isTurkish ? 'text-sky-500' : 'text-amber-500'} />
                </motion.div>
              )}
            </motion.div>
          ) : (
            /* Idle placeholder */
            <div className={cn(
              "rounded-2xl border-2 border-dashed bg-white/40 flex items-center justify-center text-center p-3 sm:p-4 min-h-[70px]",
              isHistory ? "border-emerald-100" : isTurkish ? "border-sky-100" : "border-amber-100"
            )}>
              <div>
                <p className="font-display text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-wood/35 mb-0.5">
                  {t('ex.feedbackPanel')}
                </p>
                <p className="font-serif text-xs sm:text-[13px] text-wood/50">
                  {t('ex.feedbackHint').split('{info}')[0]}
                  <span className={cn(
                    "inline-flex items-center justify-center w-4 h-4 rounded align-middle mx-0.5",
                    isHistory ? "bg-emerald-100 text-emerald-600" : isTurkish ? "bg-sky-100 text-sky-600" : "bg-amber-100 text-amber-600"
                  )}>
                    <Info size={10} />
                  </span>
                  {t('ex.feedbackHint').split('{info}')[1]}
                </p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
 
