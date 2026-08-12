import React from 'react';
import { motion } from 'motion/react';
import { Trophy, RotateCcw, ArrowRight, Medal, Target } from '../ui/icons';
import { BookData, Exercise } from '../../types';
import { cn } from '../../lib/utils';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';
import { useStoryProgress } from '../../contexts/StoryProgressContext';
import { presentMultipleChoice } from '../../lib/exercisePresentation';

interface FinalChallengeProps {
  bookData: BookData;
  onComplete?: () => void;
}

const getTheme = (bookData: BookData) => {
  const isHistory = bookData.id.toLowerCase().includes('mecca') || bookData.id.toLowerCase().includes('history');
  const isTurkish = bookData.id.toLowerCase().includes('yunus');

  if (isHistory) {
    return {
      accent: 'bg-emerald-600 hover:bg-emerald-700',
      accentSolid: 'bg-emerald-600',
      soft: 'bg-emerald-50 border-emerald-200',
      border: 'border-emerald-200',
      text: 'text-emerald-950',
      subtext: 'text-emerald-700',
      confetti: ['#059669', '#10B981', '#34D399'],
    };
  }

  if (isTurkish) {
    return {
      accent: 'bg-sky-700 hover:bg-sky-800',
      accentSolid: 'bg-sky-700',
      soft: 'bg-sky-50 border-sky-200',
      border: 'border-sky-200',
      text: 'text-sky-950',
      subtext: 'text-sky-700',
      confetti: ['#0284C7', '#0EA5E9', '#38BDF8'],
    };
  }

  return {
    accent: 'bg-amber-600 hover:bg-amber-700',
    accentSolid: 'bg-amber-600',
    soft: 'bg-amber-50 border-amber-200',
    border: 'border-amber-200',
    text: 'text-amber-950',
    subtext: 'text-amber-700',
    confetti: ['#D97706', '#F59E0B', '#FCD34D'],
  };
};

export const FinalChallenge: React.FC<FinalChallengeProps> = ({ bookData, onComplete }) => {
  const { t, formatNumber, isRTL } = useLanguage();
  const { setFinalScore } = useStoryProgress();
  const theme = React.useMemo(() => getTheme(bookData), [bookData]);

  const [gameState, setGameState] = React.useState<'intro' | 'playing' | 'results'>('intro');
  const [questions, setQuestions] = React.useState<Exercise[]>([]);
  const [currentStep, setCurrentStep] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<boolean | number | null>(null);
  const [lastCorrect, setLastCorrect] = React.useState<boolean | null>(null);

  const dedicatedFinalQuestions = React.useMemo(() => {
    const finalPage = bookData.pages.find((page) => page.type === 'final-challenge');
    return (finalPage?.exercises ?? []).filter(
      (exercise) => exercise.type === 'multiple-choice' || exercise.type === 'true-false'
    );
  }, [bookData]);

  const fallbackQuestions = React.useMemo(() => {
    const collected: Exercise[] = [];
    bookData.pages.forEach((page) => {
      page.exercises?.forEach((exercise) => {
        if (exercise.type === 'multiple-choice' || exercise.type === 'true-false') {
          collected.push(exercise);
        }
      });
    });
    return collected;
  }, [bookData]);

  const startChallenge = () => {
    const selected = dedicatedFinalQuestions.length === 10
      ? [...dedicatedFinalQuestions]
      : [...fallbackQuestions].slice(0, 10);

    setQuestions(selected);
    setCurrentStep(0);
    setScore(0);
    setSelectedAnswer(null);
    setLastCorrect(null);
    setGameState(selected.length ? 'playing' : 'results');
  };

  const currentQuestion = questions[currentStep];
  const presentedOptions = React.useMemo(
    () => currentQuestion?.type === 'multiple-choice' ? presentMultipleChoice(currentQuestion) : [],
    [currentQuestion]
  );

  const handleAnswer = (answer: boolean | number) => {
    if (!currentQuestion || selectedAnswer !== null) return;
    const correct = answer === currentQuestion.correctAnswer;
    setSelectedAnswer(answer);
    setLastCorrect(correct);

    if (correct) {
      setScore((previous) => previous + 1);
      confetti({
        particleCount: 90,
        spread: 65,
        origin: { y: 0.65 },
        colors: theme.confetti,
      });
    }
  };

  const goNext = () => {
    if (!currentQuestion || selectedAnswer === null) return;

    if (currentStep < questions.length - 1) {
      setCurrentStep((previous) => previous + 1);
      setSelectedAnswer(null);
      setLastCorrect(null);
      return;
    }

    const percentage = Math.round((score / Math.max(questions.length, 1)) * 100);
    setFinalScore(percentage);
    setGameState('results');
  };

  if (gameState === 'intro') {
    return (
      <div className="h-full min-h-0 overflow-y-auto flex flex-col items-center justify-center text-center px-5 py-8 sm:p-10 gap-6 sm:gap-8">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={cn('w-20 h-20 sm:w-24 sm:h-24 rounded-3xl text-white flex items-center justify-center shadow-xl', theme.accentSolid)}
        >
          <Trophy size={44} />
        </motion.div>

        <div className="max-w-xl">
          <h2 className={cn('font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight', theme.text)}>
            {t('nav.finalChallenge')}
          </h2>
          <p className="font-serif text-sm sm:text-base md:text-lg text-wood/65 mt-3 leading-relaxed">
            {t('nav.finalChallengeIntro')}
          </p>
        </div>

        <button
          type="button"
          onClick={startChallenge}
          className={cn('min-h-12 px-8 sm:px-10 rounded-xl text-white font-display text-xs sm:text-sm uppercase tracking-widest font-bold flex items-center gap-2 shadow-lg', theme.accent)}
        >
          {t('nav.startChallenge')}
          <ArrowRight className={cn('w-4 h-4', isRTL && 'rotate-180')} />
        </button>
      </div>
    );
  }

  if (gameState === 'results') {
    const total = Math.max(questions.length, 1);
    const percentage = Math.round((score / total) * 100);

    return (
      <div className="h-full min-h-0 overflow-y-auto flex flex-col items-center justify-center text-center px-5 py-8 gap-6 sm:gap-8">
        <div className="relative">
          <div className={cn('w-28 h-28 sm:w-32 sm:h-32 rounded-full border-8 flex items-center justify-center', theme.soft)}>
            <span className={cn('font-display text-3xl sm:text-4xl font-black', theme.text)}>{formatNumber(percentage)}%</span>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={cn('absolute -top-2 -right-2 w-11 h-11 rounded-full text-white flex items-center justify-center shadow-md', theme.accentSolid)}
          >
            <Medal size={22} />
          </motion.div>
        </div>

        <div>
          <h2 className={cn('font-display text-2xl sm:text-3xl font-black', theme.text)}>
            {percentage === 100 ? t('nav.perfectScore') : percentage >= 70 ? t('nav.greatJob') : t('nav.keepPracticing')}
          </h2>
          <p className="font-serif text-sm sm:text-base text-wood/60 mt-2">
            {t('nav.resultsSummary')
              .replace('{score}', formatNumber(score))
              .replace('{total}', formatNumber(questions.length))}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <button
            type="button"
            onClick={startChallenge}
            className={cn('flex-1 min-h-12 rounded-xl border-2 bg-white font-display text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2', theme.border, theme.subtext)}
          >
            <RotateCcw size={16} /> {t('nav.tryAgain')}
          </button>
          <button
            type="button"
            onClick={onComplete}
            className={cn('flex-1 min-h-12 rounded-xl text-white font-display text-xs uppercase tracking-widest font-bold', theme.accent)}
          >
            {t('nav.finishJourney')}
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="h-full min-h-0 overflow-y-auto custom-scrollbar px-4 py-5 sm:p-8">
      <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className={cn('w-10 h-10 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center font-display font-black shrink-0', theme.soft, theme.subtext)}>
              {formatNumber(currentStep + 1)}
            </span>
            <div className="min-w-0">
              <p className={cn('font-display text-[10px] uppercase tracking-widest font-black', theme.subtext)}>{t('nav.question')}</p>
              <p className={cn('font-display text-sm sm:text-base font-bold', theme.text)}>
                {formatNumber(currentStep + 1)} {t('nav.of')} {formatNumber(questions.length)}
              </p>
            </div>
          </div>
          <div className={cn('px-3 py-2 rounded-xl border flex items-center gap-2 shrink-0', theme.soft)}>
            <Target size={17} className={theme.subtext} />
            <span className={cn('font-display text-sm font-black', theme.text)}>{formatNumber(score)}</span>
          </div>
        </div>

        <motion.h3
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn('font-display text-xl sm:text-2xl md:text-3xl font-black leading-snug text-center', theme.text)}
        >
          {currentQuestion.question || currentQuestion.instructions}
        </motion.h3>

        <div className="grid grid-cols-1 gap-3">
          {currentQuestion.type === 'true-false' ? (
            [true, false].map((value) => {
              const selected = selectedAnswer === value;
              const revealCorrect = selectedAnswer !== null && currentQuestion.correctAnswer === value;
              const revealWrong = selectedAnswer !== null && selected && !revealCorrect;

              return (
                <button
                  type="button"
                  key={String(value)}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleAnswer(value)}
                  className={cn(
                    'min-h-14 sm:min-h-16 rounded-2xl border-2 px-4 font-display text-sm sm:text-lg font-black uppercase tracking-widest transition-colors',
                    revealCorrect
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : revealWrong
                        ? 'bg-rose-500 border-rose-500 text-white'
                        : `bg-white ${theme.border} ${theme.text}`
                  )}
                >
                  {value ? t('nav.true') : t('nav.false')}
                </button>
              );
            })
          ) : (
            presentedOptions.map((option, displayIndex) => {
              const selected = selectedAnswer === option.originalIndex;
              const revealCorrect = selectedAnswer !== null && option.originalIndex === currentQuestion.correctAnswer;
              const revealWrong = selectedAnswer !== null && selected && !revealCorrect;

              return (
                <button
                  type="button"
                  key={`${option.originalIndex}-${option.text}`}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleAnswer(option.originalIndex)}
                  className={cn(
                    'min-h-14 sm:min-h-16 rounded-2xl border-2 px-4 py-3 flex items-center gap-4 text-start transition-colors',
                    revealCorrect
                      ? 'bg-emerald-500 border-emerald-500 text-white'
                      : revealWrong
                        ? 'bg-rose-500 border-rose-500 text-white'
                        : `bg-white ${theme.border}`
                  )}
                >
                  <span className={cn(
                    'w-9 h-9 rounded-full shrink-0 flex items-center justify-center font-display font-black text-sm',
                    revealCorrect || revealWrong ? 'bg-white/20 text-white' : `${theme.soft} ${theme.subtext}`
                  )}>
                    {String.fromCharCode(65 + displayIndex)}
                  </span>
                  <span className="font-serif text-sm sm:text-base md:text-lg font-semibold flex-1 leading-snug">{option.text}</span>
                </button>
              );
            })
          )}
        </div>

        {selectedAnswer !== null && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn('rounded-2xl border-2 p-4 sm:p-5', lastCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200')}
          >
            <p className="font-serif text-sm sm:text-base text-wood/75 leading-relaxed">
              {lastCorrect ? currentQuestion.feedback.correct : currentQuestion.feedback.incorrect}
            </p>
            {currentQuestion.explanation && (
              <p className="font-serif text-sm sm:text-base text-wood/60 mt-2 leading-relaxed">{currentQuestion.explanation}</p>
            )}
            <button
              type="button"
              onClick={goNext}
              className={cn('w-full mt-4 min-h-12 rounded-xl text-white font-display text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2', theme.accent)}
            >
              {currentStep < questions.length - 1 ? t('nav.nextQuestion') : t('nav.seeResults')}
              <ArrowRight className={cn('w-4 h-4', isRTL && 'rotate-180')} />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
