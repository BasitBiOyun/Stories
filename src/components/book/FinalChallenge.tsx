import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Zap, RotateCcw, ArrowRight, CheckCircle2, XCircle, Medal, Target, Book as BookIcon } from 'lucide-react';
import { BookData, Exercise } from '../../types';
import { cn } from '../../lib/utils';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../contexts/LanguageContext';
import { useStoryProgress } from '../../contexts/StoryProgressContext';

interface FinalChallengeProps {
  bookData: BookData;
  onComplete?: () => void;
}

export const FinalChallenge: React.FC<FinalChallengeProps> = ({ bookData, onComplete }) => {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<Exercise[]>([]);
  const [isWrong, setIsWrong] = useState(false);
  const { language, t, formatNumber, isRTL } = useLanguage();
  const { setFinalScore } = useStoryProgress();

  const isHistory = bookData.id.toLowerCase().includes('mecca') || bookData.id.toLowerCase().includes('history');
  const isTurkish = bookData.id.toLowerCase().includes('yunus');

  // Approved books can provide an explicit ten-question Final Challenge on the
  // final-challenge page. Prefer that stable set so the app and print edition
  // use the same questions. Legacy books without a complete dedicated set keep
  // the previous random-pool behaviour until their content is reviewed.
  const dedicatedFinalQuestions = useMemo(() => {
    const finalPage = bookData.pages.find(page => page.type === 'final-challenge');
    return (finalPage?.exercises ?? []).filter(
      ex => ex.type === 'multiple-choice' || ex.type === 'true-false'
    );
  }, [bookData]);

  // Legacy fallback: extract all multiple-choice and true-false questions from the book.
  const allQuestions = useMemo(() => {
    const questions: Exercise[] = [];
    bookData.pages.forEach(page => {
      page.exercises?.forEach(ex => {
        if (ex.type === 'multiple-choice' || ex.type === 'true-false') {
          questions.push(ex);
        }
      });
    });
    return questions;
  }, [bookData]);

  const startChallenge = () => {
    const selected = dedicatedFinalQuestions.length === 10
      ? [...dedicatedFinalQuestions]
      : [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    
    if (selected.length === 0) {
      setGameState('results');
      return;
    }

    setShuffledQuestions(selected);
    setGameState('playing');
    setCurrentStep(0);
    setScore(0);
    setUserAnswers({});
  };

  const handleAnswer = (answer: any) => {
    const question = shuffledQuestions[currentStep];
    const isCorrect = answer === question.correctAnswer;

    if (isCorrect) {
      setScore(s => s + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: isTurkish 
          ? ['#0284C7', '#0EA5E9', '#38BDF8'] 
          : isHistory 
          ? ['#059669', '#10B981', '#34D399'] 
          : ['#D97706', '#F59E0B', '#FCD34D']
      });
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 500);
    }

    setUserAnswers(prev => ({ ...prev, [currentStep]: answer }));

    setTimeout(() => {
      if (currentStep < shuffledQuestions.length - 1) {
        setCurrentStep(s => s + 1);
      } else {
        const finalPercentage = Math.round(((score + (isCorrect ? 1 : 0)) / shuffledQuestions.length) * 100);
        setFinalScore(finalPercentage);
        setGameState('results');
      }
    }, 1000);
  };

  const isA2 = bookData.level === 'A2';

  if (gameState === 'intro') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={cn(
            "w-24 h-24 rounded-[2rem] text-white flex items-center justify-center shadow-2xl",
            isHistory ? "bg-teal-600 shadow-teal-100" : isTurkish ? "bg-sky-600 shadow-sky-100" : "bg-amber-600 shadow-amber-200"
          )}
        >
          <Trophy size={48} />
        </motion.div>
        
        <div className="max-w-md">
          <h2 className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2 sm:mb-4",
            isHistory ? "text-teal-900" : isTurkish ? "text-sky-950" : "text-amber-900"
          )}>{t('nav.finalChallenge')}</h2>
          <p className="font-serif text-sm sm:text-base md:text-lg text-wood/70 leading-relaxed">
            {t('nav.finalChallengeIntro')}
          </p>
        </div>

        <button
          onClick={startChallenge}
          className={cn(
            "group relative px-12 py-5 text-white rounded-2xl font-display text-lg uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center gap-3",
            isHistory ? "bg-teal-600 hover:bg-teal-700 hover:shadow-teal-100" : isTurkish ? "bg-sky-600 hover:bg-sky-700 hover:shadow-sky-100" : "bg-amber-600 hover:bg-amber-700 hover:shadow-amber-200"
          )}
        >
          {t('nav.startChallenge')}
          <ArrowRight className={cn("group-hover:translate-x-1 transition-transform", isRTL && "rotate-180 group-hover:-translate-x-1")} />
        </button>
      </div>
    );
  }

  if (gameState === 'results') {
    const totalQuestions = shuffledQuestions.length || 1;
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 gap-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative"
        >
          <div className={cn(
            "w-32 h-32 rounded-full border-8 flex items-center justify-center",
            isHistory ? "border-emerald-100" : isTurkish ? "border-sky-100" : "border-amber-100"
          )}>
            <span className={cn(
              "text-4xl font-black",
              isHistory ? "text-teal-900" : isTurkish ? "text-sky-950" : "text-amber-900"
            )}>{formatNumber(percentage)}%</span>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className={cn(
              "absolute -top-2 -right-2 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-lg",
              isHistory ? "bg-emerald-500" : isTurkish ? "bg-sky-500" : "bg-amber-500"
            )}
          >
            <Medal fill="white" size={24} />
          </motion.div>
        </motion.div>

        <div>
          <h2 className={cn(
            "text-3xl font-black tracking-tight mb-2",
            isHistory ? "text-teal-900" : isTurkish ? "text-sky-950" : "text-amber-900"
          )}>
            {percentage === 100 ? t('nav.perfectScore') : percentage >= 70 ? t('nav.greatJob') : t('nav.keepPracticing')}
          </h2>
          <p className="font-serif text-wood/60">
            {t('nav.resultsSummary').replace('{score}', formatNumber(score)).replace('{total}', formatNumber(shuffledQuestions.length))}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={startChallenge}
            className={cn(
              "px-8 py-4 bg-white border-2 rounded-2xl font-display text-base uppercase tracking-widest transition-all flex items-center gap-2",
              isHistory ? "border-teal-200 text-teal-600 hover:bg-teal-50" : isTurkish ? "border-sky-200 text-sky-600 hover:bg-sky-50" : "border-amber-200 text-amber-600 hover:bg-amber-50"
            )}
          >
            <RotateCcw size={18} /> {t('nav.tryAgain')}
          </button>
          <button
            onClick={() => {
              if (onComplete) onComplete();
            }}
            className={cn(
              "px-8 py-4 text-white rounded-2xl font-display text-base uppercase tracking-widest transition-all shadow-lg",
              isHistory ? "bg-teal-600 hover:bg-teal-700" : isTurkish ? "bg-sky-600 hover:bg-sky-700" : "bg-amber-600 hover:bg-amber-700"
            )}
          >
            {t('nav.finishJourney')}
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentStep];

  if (!currentQuestion) return null;

  return (
    <div className={cn(
      "h-full flex flex-col p-4 sm:p-6 md:p-8 transition-transform duration-100 overflow-y-auto custom-scrollbar",
      isWrong && "animate-shake"
    )}>
      {/* Progress */}
      <div className="flex items-center justify-between mb-6 sm:mb-10">
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className={cn(
            "w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-base sm:text-xl shadow-inner shrink-0",
            isHistory ? "bg-emerald-100 text-teal-600" : isTurkish ? "bg-sky-100 text-sky-600" : "bg-amber-100 text-amber-600"
          )}>
            {formatNumber(currentStep + 1)}
          </div>
          <div>
            <p className={cn(
              "text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black leading-none mb-1 sm:mb-2",
              isHistory ? "text-teal-500" : isTurkish ? "text-sky-500" : "text-amber-500"
            )}>{t('nav.question')}</p>
            <p className={cn(
              "font-display text-sm sm:text-lg",
              isHistory ? "text-teal-900" : isTurkish ? "text-sky-950" : "text-amber-900"
            )}>{t('nav.step')} {formatNumber(currentStep + 1)} {t('nav.of')} {formatNumber(shuffledQuestions.length)}</p>
          </div>
        </div>
        <div className={cn(
          "flex items-center gap-2 sm:gap-3 px-3.5 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border shadow-sm",
          isHistory ? "bg-emerald-50 border-emerald-100" : isTurkish ? "bg-sky-50/80 border-sky-100" : "bg-amber-50 border-amber-100"
        )}>
          <Target className={cn("w-4 h-4 sm:w-5 sm:h-5", isHistory ? "text-teal-600" : isTurkish ? "text-sky-600" : "text-amber-600")} />
          <span className={cn(
            "text-sm sm:text-lg font-black tabular-nums",
            isHistory ? "text-teal-900" : isTurkish ? "text-sky-950" : "text-amber-900"
          )}>{t('nav.score')}: {formatNumber(score)}</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-start py-2 sm:py-4 gap-6 sm:gap-10 max-w-3xl mx-auto w-full">
        <motion.h3
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "text-lg sm:text-2xl md:text-3xl font-black leading-snug text-center",
            isHistory ? "text-teal-900" : isTurkish ? "text-sky-950" : "text-amber-900"
          )}
        >
          {currentQuestion.question || currentQuestion.instructions}
        </motion.h3>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 w-full">
          {currentQuestion.type === 'true-false' ? (
            [true, false].map((val) => (
              <button
                key={val.toString()}
                onClick={() => handleAnswer(val)}
                className={cn(
                  "group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all flex items-center justify-between",
                  userAnswers[currentStep] === val
                    ? (val === currentQuestion.correctAnswer ? "border-emerald-500 bg-emerald-50" : "border-rose-500 bg-rose-50")
                    : (isHistory ? "border-emerald-100 bg-white hover:border-emerald-400 hover:bg-emerald-50" : isTurkish ? "border-sky-100 bg-white hover:border-sky-450 hover:bg-sky-50" : "border-amber-100 bg-white hover:border-amber-400 hover:bg-amber-50")
                )}
              >
                <span className={cn(
                  "text-base sm:text-xl font-black uppercase tracking-widest",
                  isHistory ? "text-teal-900" : isTurkish ? "text-sky-950" : "text-amber-900"
                )}>{val ? t('nav.true') : t('nav.false')}</span>
                <div className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors",
                  isHistory ? "bg-emerald-50 group-hover:bg-emerald-100" : isTurkish ? "bg-sky-50 group-hover:bg-sky-100" : "bg-amber-50 group-hover:bg-amber-100"
                )}>
                  <ArrowRight size={16} className={cn(isHistory ? "text-teal-400" : isTurkish ? "text-sky-400" : "text-amber-400", isRTL && "rotate-180")} />
                </div>
              </button>
            ))
          ) : (
            currentQuestion.options?.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={cn(
                  "group relative p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all flex items-center gap-3 sm:gap-4 text-left",
                  userAnswers[currentStep] === idx
                    ? (idx === currentQuestion.correctAnswer ? "border-emerald-500 bg-emerald-50" : "border-rose-500 bg-rose-50")
                    : (isHistory ? "border-emerald-100 bg-white hover:border-emerald-400 hover:bg-emerald-50" : isTurkish ? "border-sky-100 bg-white hover:border-sky-400 hover:bg-sky-50" : "border-amber-100 bg-white hover:border-amber-400 hover:bg-amber-50")
                )}
              >
                <div className={cn(
                  "w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-xs sm:text-base shrink-0 transition-colors",
                  isHistory ? "bg-emerald-50 text-teal-600 group-hover:bg-emerald-100" : isTurkish ? "bg-sky-50 text-sky-650 group-hover:bg-sky-100" : "bg-amber-50 text-amber-600 group-hover:bg-amber-100"
                )}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className={cn(
                  "flex-1 font-serif text-sm sm:text-base md:text-lg",
                  isHistory ? "text-teal-900" : isTurkish ? "text-sky-950" : "text-amber-900"
                )}>{opt}</span>
              </button>
            ))
          )}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {shuffledQuestions.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "h-1.5 rounded-full transition-all",
              idx === currentStep 
                ? (isHistory ? "w-8 bg-teal-600" : isTurkish ? "w-8 bg-sky-600" : "w-8 bg-amber-600") 
                : idx < currentStep 
                ? "w-4 bg-emerald-400" 
                : (isHistory ? "w-4 bg-emerald-100" : isTurkish ? "w-4 bg-sky-100" : "w-4 bg-amber-100")
            )}
          />
        ))}
      </div>
    </div>
  );
};