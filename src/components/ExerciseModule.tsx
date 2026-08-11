import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw, MessageSquare, Users, GraduationCap } from './ui/icons';
import { Exercise, ExerciseType } from '../types';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';
import { useLanguage } from '../contexts/LanguageContext';

interface ExerciseModuleProps {
  exercise: Exercise;
  onComplete: () => void;
  onClose: () => void;
  collectionId?: string;
}

export const ExerciseModule: React.FC<ExerciseModuleProps> = ({ 
  exercise, 
  onComplete, 
  onClose,
  collectionId = 'prophets'
}) => {
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});
  const [quizFeedback, setQuizFeedback] = useState<string | null>(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [localSequence, setLocalSequence] = useState<string[]>([]);
  const [shuffledSequencingItems, setShuffledSequencingItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<Record<string, string[]>>({});
  const [isWrong, setIsWrong] = useState(false);
  const { language, t, formatNumber, isRTL } = useLanguage();

  const colTheme = React.useMemo(() => {
    if (collectionId === 'history') {
      return {
        brand600: "bg-teal-600",
        brand750: "bg-teal-700",
        brand600Text: "text-teal-600",
        brand700Text: "text-teal-700",
        brand900Text: "text-[#064E3B]",
        bgLight: "bg-emerald-50",
        borderLight: "border-emerald-200",
        borderDark: "border-emerald-500",
        shadowColor: "hover:shadow-emerald-100",
        hoverBorder: "hover:border-emerald-400 hover:bg-emerald-50/50",
        selectedBorder: "border-emerald-500 bg-emerald-50 text-emerald-600",
        groupBg: "border-emerald-100 bg-emerald-50/30",
        groupBgHover: "border-emerald-400 bg-emerald-50/50 hover:bg-emerald-100/50",
        badgeBg: "bg-emerald-100 text-teal-700",
        titleCol: "text-emerald-900 border-emerald-200"
      };
    } else if (collectionId === 'turkish') {
      return {
        brand600: "bg-sky-700",
        brand750: "bg-sky-850",
        brand600Text: "text-sky-600",
        brand700Text: "text-sky-700",
        brand900Text: "text-sky-950",
        bgLight: "bg-sky-50/80",
        borderLight: "border-sky-100",
        borderDark: "border-sky-500",
        shadowColor: "hover:shadow-sky-100",
        hoverBorder: "hover:border-sky-400 hover:bg-sky-50/50",
        selectedBorder: "border-sky-500 bg-sky-50 text-sky-600",
        groupBg: "border-sky-100 bg-sky-50/30",
        groupBgHover: "border-sky-250 bg-sky-50/50 hover:bg-sky-100/50",
        badgeBg: "bg-sky-100 text-sky-700",
        titleCol: "text-sky-900 border-sky-100"
      };
    } else {
      // Default (prophets)
      return {
        brand600: "bg-amber-600",
        brand750: "bg-amber-700",
        brand600Text: "text-amber-600",
        brand700Text: "text-amber-700",
        brand900Text: "text-amber-900",
        bgLight: "bg-amber-50",
        borderLight: "border-amber-200",
        borderDark: "border-amber-500",
        shadowColor: "hover:shadow-amber-200",
        hoverBorder: "hover:border-amber-400 hover:bg-amber-50/50",
        selectedBorder: "border-amber-500 bg-amber-50 text-amber-600",
        groupBg: "border-amber-100 bg-amber-50/30",
        groupBgHover: "border-amber-400 bg-amber-50/50 hover:bg-amber-100/50",
        badgeBg: "bg-amber-100 text-amber-700",
        titleCol: "text-amber-900 border-amber-200"
      };
    }
  }, [collectionId]);

  // Initialize shuffled items for sequencing
  React.useEffect(() => {
    if (exercise.type === 'sequencing' && exercise.sequencingItems) {
      const items = [...exercise.sequencingItems];
      // Simple shuffle
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
      setShuffledSequencingItems(items);
    }
  }, [exercise]);

  const handleSubmit = (answer: any) => {
    setUserAnswer(answer);
    setIsSubmitted(true);

    // Dynamic Feedback
    let isCorrect = false;
    if (exercise.type === 'drag-drop') {
      const user = answer as Record<string, string[]>;
      const correct = exercise.correctAnswer as Record<string, string[]>;
      isCorrect = Object.keys(correct).every(group => {
        const userItems = (user[group] || []).map(i => i.trim().toLowerCase());
        const correctItems = (correct[group] || []).map(i => i.trim().toLowerCase());
        return userItems.length === correctItems.length && 
               userItems.every(item => correctItems.includes(item));
      });
    } else if (exercise.type === 'reflection' || exercise.type === 'tap-reveal') {
      isCorrect = true;
    } else {
      isCorrect = JSON.stringify(answer) === JSON.stringify(exercise.correctAnswer);
    }

    if (isCorrect) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D97706', '#F59E0B', '#FCD34D']
      });
    } else {
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 500);
    }
  };

  const handleQuizAnswer = (step: number, answer: string, isCorrect: boolean) => {
    if (quizAnswered) return;
    
    setQuizResults(prev => ({ ...prev, [step]: isCorrect }));
    setQuizAnswered(true);
    
    if (isCorrect) {
      setQuizFeedback(t('nav.correctWellDone'));
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D97706', '#F59E0B', '#FCD34D']
      });
    } else {
      setQuizFeedback(`${t('nav.incorrect')} ${exercise.quizQuestions?.[step - 1]?.hint || ''}`);
    }
  };

  const handleNextQuizStep = () => {
    setQuizAnswered(false);
    setQuizFeedback(null);
    const totalSteps = exercise.quizQuestions?.length || 7;
    if (quizStep < totalSteps) {
      setQuizStep(quizStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const getQuizHint = (step: number) => {
    switch (step) {
      case 1: return "Hint: Adam (AS) was made from the earth, not fire or light.";
      case 2: return "Hint: This being was proud and thought fire was better than soil.";
      case 3: return "Hint: Her name is very common and means 'living one'.";
      case 4: return "Hint: There was only one thing they were told to avoid.";
      case 5: return "Hint: One was a shepherd and the other was a farmer.";
      case 6: return "Hint: Habil gave his best because he was sincere.";
      case 7: return "Hint: All prophets taught us to worship only one God.";
      default: return "";
    }
  };

  const renderFeedback = () => {
    if (!isSubmitted) return null;
    
    let isCorrect = false;
    if (exercise.type === 'drag-drop') {
      // Order-insensitive comparison for groups
      const user = userAnswer as Record<string, string[]>;
      const correct = exercise.correctAnswer as Record<string, string[]>;
      
      isCorrect = Object.keys(correct).every(group => {
        const userItems = (user[group] || []).map(i => i.trim().toLowerCase());
        const correctItems = (correct[group] || []).map(i => i.trim().toLowerCase());
        return userItems.length === correctItems.length && 
               userItems.every(item => correctItems.includes(item));
      });
    } else if (exercise.type === 'quiz-game') {
      const correctCount = Object.values(quizResults).filter(Boolean).length;
      const totalSteps = exercise.quizQuestions?.length || 7;
      isCorrect = correctCount === totalSteps;
    } else if (exercise.type === 'reflection' || exercise.type === 'tap-reveal') {
      isCorrect = true;
    } else {
      isCorrect = JSON.stringify(userAnswer) === JSON.stringify(exercise.correctAnswer);
    }

    if (exercise.type === 'quiz-game') {
      const correctCount = Object.values(quizResults).filter(Boolean).length;
      const totalSteps = exercise.quizQuestions?.length || 7;
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn("mt-4 sm:mt-6 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border-2 bg-white shadow-xl", colTheme.borderLight)}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-6 mb-4 sm:mb-8">
            <div className={cn(
              "w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-lg sm:text-2xl shadow-lg shrink-0",
              correctCount === totalSteps ? "bg-emerald-500 shadow-emerald-100" : `${colTheme.brand600} ${colTheme.shadowColor}`
            )}>
              {correctCount}/{totalSteps}
            </div>
            <div>
              <h5 className={cn("font-display text-lg sm:text-2xl tracking-tight", colTheme.brand900Text)}>
                {t('nav.challengeComplete')}
              </h5>
              <p className="font-serif italic text-xs sm:text-sm text-wood/60">
                {t('nav.journeySummary')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-8 max-h-48 sm:max-h-64 overflow-y-auto custom-scrollbar p-1">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map(s => (
              <motion.div 
                key={s} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: s * 0.1 }}
                className={cn(
                  "flex items-center justify-between p-2.5 sm:p-3 rounded-xl border",
                  collectionId === 'history' 
                    ? "bg-emerald-50/30 border-emerald-100" 
                    : collectionId === 'turkish' 
                    ? "bg-sky-50/30 border-sky-100" 
                    : "bg-amber-50/50 border-amber-100"
                )}
              >
                <span className="text-xs sm:text-sm font-bold text-wood/70">
                  {t('nav.question')} {formatNumber(s)}
                </span>
                {quizResults[s] ? (
                  <span className="text-xs sm:text-sm font-black text-emerald-600 flex items-center gap-1 uppercase tracking-widest">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t('nav.correct')}
                  </span>
                ) : (
                  <span className="text-xs sm:text-sm font-black text-rose-600 flex items-center gap-1 uppercase tracking-widest">
                    <XCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t('nav.incorrect')}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          <button
            onClick={onComplete}
            className={cn(
              "w-full py-3 sm:py-4 text-white rounded-xl sm:rounded-2xl font-display text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 cursor-pointer",
              colTheme.brand600,
              collectionId === 'history' 
                ? "hover:bg-teal-700 hover:shadow-emerald-100/50" 
                : collectionId === 'turkish' 
                ? "hover:bg-sky-850 hover:shadow-sky-100/50" 
                : "hover:bg-amber-700 hover:shadow-amber-200"
            )}
          >
            {t('nav.finishContinue')}
          </button>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "mt-4 sm:mt-6 p-3.5 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border-2 flex flex-col gap-3 sm:gap-4 shadow-xl",
          isCorrect ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"
        )}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <div className={cn(
            "p-1.5 sm:p-2 rounded-xl shrink-0 mt-0.5",
            isCorrect ? "bg-emerald-200 text-emerald-700" : "bg-rose-200 text-rose-700"
          )}>
            {isCorrect ? <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" /> : <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
          </div>
          <div className="flex-1 min-w-0">
            <p className={cn(
              "font-display text-base sm:text-xl tracking-tight mb-0.5 sm:mb-1",
              isCorrect ? "text-emerald-900" : "text-rose-900"
            )}>{isCorrect ? t('nav.correct') + '!' : t('nav.notQuite')}</p>
            <p className={cn(
              "font-serif text-xs sm:text-sm md:text-base opacity-80 leading-relaxed",
              language === 'ar' ? "not-italic text-sm sm:text-base" : "italic"
            )}>
              {isCorrect ? exercise.feedback.correct : exercise.feedback.incorrect}
            </p>
          </div>
        </div>

        <div className={cn(
          "p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border bg-white/50 text-xs sm:text-sm md:text-base leading-relaxed max-h-36 sm:max-h-48 overflow-y-auto custom-scrollbar",
          language === 'ar' ? "not-italic text-xs sm:text-sm" : "italic",
          isCorrect ? "border-emerald-100 text-emerald-900" : "border-rose-100 text-rose-900"
        )}>
          <span className="font-bold uppercase text-xs sm:text-sm block mb-1 opacity-60 tracking-widest">
            {t('nav.explanation')}
          </span>
          {exercise.explanation}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-1 sm:mt-2">
          {!isCorrect && (
            <button
              onClick={() => {
                setIsSubmitted(false);
                setUserAnswer(null);
                if (exercise.type === 'drag-drop') {
                  setAssignments({});
                  setSelectedItem(null);
                }
              }}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-white border-2 border-rose-200 py-2.5 sm:py-3 rounded-xl shadow-sm hover:bg-rose-50 transition-all font-display text-xs sm:text-sm uppercase tracking-wider text-rose-600 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {t('nav.tryAgain')}
            </button>
          )}
          <button
            onClick={onComplete}
            className={cn(
              "w-full sm:flex-[2] flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-xl shadow-lg transition-all font-display text-xs sm:text-sm uppercase tracking-wider text-white cursor-pointer",
              isCorrect ? "bg-emerald-600 hover:bg-emerald-700" : "bg-rose-600 hover:bg-rose-700"
            )}
          >
            {t('nav.continue')} <ArrowRight className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4", isRTL && "rotate-180")} />
          </button>
        </div>
      </motion.div>
    );
  };

  const renderExerciseContent = () => {
    switch (exercise.type) {
      case 'true-false':
        return (
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-8">
            {[true, false].map((val) => (
              <button
                key={val.toString()}
                disabled={isSubmitted}
                onClick={() => handleSubmit(val)}
                className={cn(
                  "p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 transition-all text-base sm:text-2xl font-display uppercase tracking-widest flex flex-col items-center gap-2 sm:gap-4",
                  userAnswer === val 
                    ? (isSubmitted 
                        ? (val === exercise.correctAnswer ? "border-emerald-500 bg-emerald-50 text-emerald-600" : "border-rose-500 bg-rose-50 text-rose-600")
                        : `${colTheme.borderDark} ${colTheme.bgLight} ${colTheme.brand600Text}`)
                    : `bg-white hover:bg-white text-wood/40 border-gray-100 ${colTheme.hoverBorder}`
                )}
              >
                {val ? t('nav.true') : t('nav.false')}
              </button>
            ))}
          </div>
        );

      case 'multiple-choice':
        return (
          <div className="flex flex-col gap-3 mt-8">
            {exercise.options?.map((option, idx) => (
              <button
                key={idx}
                disabled={isSubmitted}
                onClick={() => handleSubmit(idx)}
                className={cn(
                  "p-4 rounded-xl border-2 text-left transition-all font-medium flex items-center gap-4",
                  userAnswer === idx
                    ? (idx === exercise.correctAnswer ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50")
                    : `border-gray-200 ${colTheme.hoverBorder}`
                )}
              >
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </button>
            ))}
          </div>
        );

      case 'matching':
        return (
          <div className="mt-8 space-y-4">
            <p className={cn(
              "text-sm text-gray-500 mb-4",
              language === 'ar' ? "not-italic text-base" : "italic"
            )}>
              {t('nav.matchingInstructions')}
            </p>
            {exercise.matchingPairs?.map((pair, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={cn("flex-1 p-4 border-2 rounded-xl font-bold text-center", colTheme.bgLight, colTheme.borderLight)}>
                  {pair.left}
                </div>
                <ArrowRight className={cn("w-6 h-6", colTheme.brand600Text, isRTL && "rotate-180")} />
                <div className="flex-1 p-4 bg-white border-2 border-gray-200 rounded-xl font-medium text-center">
                  {pair.right}
                </div>
              </div>
            ))}
            {!isSubmitted && (
              <button
                onClick={() => handleSubmit(null)}
                className={cn(
                  "w-full mt-4 text-white py-3 rounded-xl font-bold transition-all",
                  colTheme.brand600,
                  collectionId === 'history' ? "hover:bg-teal-700" : collectionId === 'turkish' ? "hover:bg-sky-800" : "hover:bg-amber-700"
                )}
              >
                {t('nav.matchedThem')}
              </button>
            )}
          </div>
        );

      case 'tap-reveal':
        return (
          <div className="mt-8">
            {exercise.tapRevealItems?.map((item, idx) => (
              <motion.button
                key={idx}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsSubmitted(true)}
                className={cn(
                  "w-full p-8 rounded-2xl border-4 border-dashed relative overflow-hidden group bg-gradient-to-br",
                  collectionId === 'history' 
                    ? "from-emerald-50 to-teal-100/50 border-emerald-300" 
                    : collectionId === 'turkish' 
                    ? "from-sky-50 to-sky-100/50 border-sky-300" 
                    : "from-amber-100 to-orange-100 border-amber-300"
                )}
              >
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="question"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-4"
                    >
                      <HelpCircle className={cn("w-12 h-12 animate-bounce", colTheme.brand600Text)} />
                      <span className={cn("text-xl font-bold", colTheme.brand900Text)}>{item.question}</span>
                      <span className={cn("text-sm font-medium uppercase tracking-widest", colTheme.brand600Text)}>
                        {t('nav.tapToReveal')}
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={cn("text-2xl font-bold", colTheme.brand900Text)}
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        );

      case 'reflection':
        return (
          <div className="mt-8 space-y-6">
            {exercise.discussionPrompts?.map((prompt: any, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border-2 border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  {prompt.mode === 'Individual' && <GraduationCap className="w-5 h-5 text-blue-500" />}
                  {prompt.mode === 'Pair' && <MessageSquare className="w-5 h-5 text-green-500" />}
                  {prompt.mode === 'Class' && <Users className="w-5 h-5 text-purple-500" />}
                  <span className={cn(
                    "text-sm font-bold uppercase tracking-wider",
                    prompt.mode === 'Individual' ? "text-blue-600" :
                    prompt.mode === 'Pair' ? "text-green-600" : "text-purple-600"
                  )}>
                    {prompt.mode === 'Individual' ? t('nav.individualMode') : prompt.mode === 'Pair' ? t('nav.pairMode') : t('nav.classMode')}
                  </span>
                </div>
                <p className="text-lg font-medium text-gray-800">{prompt.question}</p>
              </div>
            ))}
            {!isSubmitted && (
              <button
                onClick={() => handleSubmit(true)}
                className="w-full bg-gray-800 text-white py-4 rounded-xl font-bold hover:bg-black transition-colors"
              >
                {t('nav.reflectedOnThese')}
              </button>
            )}
          </div>
        );

      case 'sequencing':
        const displayItems = shuffledSequencingItems.length > 0 ? shuffledSequencingItems : (exercise.sequencingItems || []);
        return (
          <div className="mt-8 space-y-2">
            <p className={cn(
              "text-sm text-gray-500 mb-4",
              language === 'ar' ? "not-italic text-base" : "italic"
            )}>
              {t('nav.sequencingInstructions')} ({formatNumber(1)} {t('nav.of')} {formatNumber(exercise.sequencingItems?.length || 0)}).
            </p>
            {displayItems.map((item, idx) => {
              const orderIdx = localSequence.indexOf(item.id);
              return (
                <button
                  key={item.id}
                  disabled={isSubmitted}
                  onClick={() => {
                    if (localSequence.includes(item.id)) {
                      setLocalSequence(localSequence.filter(id => id !== item.id));
                    } else {
                      setLocalSequence([...localSequence, item.id]);
                    }
                  }}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4",
                    orderIdx !== -1 ? `${colTheme.borderDark} ${colTheme.bgLight}` : `border-gray-100 ${colTheme.hoverBorder}`
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                    orderIdx !== -1 ? `${colTheme.brand600} text-white` : "bg-gray-100 text-gray-400"
                  )}>
                    {orderIdx !== -1 ? orderIdx + 1 : ''}
                  </div>
                  <span className="font-medium text-gray-800">{item.text}</span>
                </button>
              );
            })}
            {!isSubmitted && (
              <button
                onClick={() => handleSubmit(localSequence)}
                disabled={localSequence.length !== exercise.sequencingItems?.length}
                className={cn(
                  "w-full mt-4 py-3 rounded-xl font-bold transition-all shadow-lg",
                  localSequence.length === exercise.sequencingItems?.length
                    ? `${colTheme.brand600} text-white hover:opacity-90`
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                )}
              >
                {localSequence.length === exercise.sequencingItems?.length 
                  ? t('nav.checkOrder')
                  : `${t('nav.selectAllEvents')} (${formatNumber(localSequence.length)}/${formatNumber(exercise.sequencingItems?.length || 0)})`}
              </button>
            )}
          </div>
        );

      case 'fill-blanks':
        return (
          <div className="mt-8 p-6 bg-white border-2 border-gray-100 rounded-2xl shadow-sm">
            <div className="text-xl leading-loose text-gray-800 font-serif">
              {exercise.fillBlanksText?.split('[blank]').map((part, idx, arr) => (
                <React.Fragment key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <input
                      type="text"
                      disabled={isSubmitted}
                      placeholder="..."
                      className={cn(
                        "mx-2 px-3 py-1 border-b-2 outline-none w-32 text-center font-bold transition-all bg-transparent",
                        collectionId === 'history' ? "border-emerald-300 focus:border-emerald-500" : collectionId === 'turkish' ? "border-sky-300 focus:border-sky-500" : "border-amber-300 focus:border-amber-500",
                        isSubmitted && (userAnswer === exercise.correctAnswer ? "text-green-600 border-green-500" : "text-red-600 border-red-500")
                      )}
                      onChange={(e) => setUserAnswer(e.target.value)}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            {!isSubmitted && (
              <button
                onClick={() => setIsSubmitted(true)}
                className={cn(
                  "mt-8 w-full text-white py-3 rounded-xl font-bold transition-all",
                  colTheme.brand600,
                  collectionId === 'history' ? "hover:bg-teal-700" : collectionId === 'turkish' ? "hover:bg-sky-800" : "hover:bg-amber-700"
                )}
              >
                {t('nav.check')}
              </button>
            )}
          </div>
        );

      case 'drag-drop':
        const handleItemClick = (item: string) => {
          if (isSubmitted) return;
          setSelectedItem(item === selectedItem ? null : item);
        };

        const handleGroupClick = (groupName: string) => {
          if (isSubmitted || !selectedItem) return;
          
          // Remove from other groups first
          const newAssignments = { ...assignments };
          Object.keys(newAssignments).forEach(g => {
            newAssignments[g] = (newAssignments[g] || []).filter(i => i !== selectedItem);
          });
          
          // Add to new group
          if (!newAssignments[groupName]) newAssignments[groupName] = [];
          newAssignments[groupName].push(selectedItem);
          
          setAssignments(newAssignments);
          setSelectedItem(null);
          setUserAnswer(newAssignments);
        };

        const allItems = exercise.dragDropGroups?.flatMap(g => g.items) || [];
        const assignedItems = Object.values(assignments).flat();
        const unassignedItems = allItems.filter(i => !assignedItems.includes(i));

        return (
          <div className="mt-8 space-y-6">
            <div className="space-y-2">
              <p className="text-base font-bold text-gray-400 uppercase tracking-widest">
                {t('nav.availableItems')}
              </p>
              <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 min-h-[80px]">
                {unassignedItems.map((item, idx) => (
                  <button
                    key={idx}
                    disabled={isSubmitted}
                    onClick={() => handleItemClick(item)}
                    className={cn(
                      "px-4 py-2 bg-white border-2 rounded-lg font-bold text-sm shadow-sm transition-all",
                      selectedItem === item ? `${colTheme.borderDark} ${colTheme.bgLight} scale-105 shadow-md` : `border-gray-200 ${colTheme.hoverBorder}`
                    )}
                  >
                    {item}
                  </button>
                ))}
                {unassignedItems.length === 0 && <p className="text-sm text-gray-400 italic w-full text-center">{t('nav.allItemsAssigned')}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {exercise.dragDropGroups?.map((group, idx) => (
                <button
                  key={idx}
                  disabled={isSubmitted}
                  onClick={() => handleGroupClick(group.group)}
                  className={cn(
                    "p-4 rounded-2xl border-2 min-h-[150px] transition-all text-left flex flex-col",
                    selectedItem ? `${colTheme.groupBgHover} cursor-pointer` : colTheme.groupBg
                  )}
                >
                  <h5 className={cn("text-base font-black uppercase tracking-widest mb-4 text-center w-full", colTheme.brand600Text)}>{group.group}</h5>
                  <div className="flex flex-wrap gap-2">
                    {(assignments[group.group] || []).map((item, i) => (
                      <div
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item);
                        }}
                        className={cn(
                          "px-3 py-1 bg-white border rounded-lg text-base font-bold shadow-sm",
                          selectedItem === item ? `${colTheme.borderDark} ${colTheme.bgLight}` : colTheme.borderLight
                        )}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {!isSubmitted && (
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setAssignments({});
                    setSelectedItem(null);
                    setUserAnswer(null);
                  }}
                  className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  {t('nav.reset')}
                </button>
                <button
                  onClick={() => setIsSubmitted(true)}
                  disabled={assignedItems.length < allItems.length}
                  className={cn(
                    "flex-[2] py-3 rounded-xl font-bold transition-colors",
                    assignedItems.length < allItems.length 
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : `${colTheme.brand600} text-white hover:opacity-90`
                  )}
                >
                  {assignedItems.length < allItems.length 
                    ? `${t('nav.assignAllItems')} (${formatNumber(assignedItems.length)}/${formatNumber(allItems.length)})`
                    : t('nav.submitCategories')}
                </button>
              </div>
            )}
          </div>
        );

      case 'quiz-game':
        const currentQuizQuestion = exercise.quizQuestions?.[quizStep - 1];
        const totalQuizSteps = exercise.quizQuestions?.length || 7;
        return (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-8">
              {Array.from({ length: totalQuizSteps }, (_, i) => i + 1).map((s) => (
                <div key={s} className="flex items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center font-bold text-base transition-all",
                    quizStep >= s ? `${colTheme.brand600} text-white` : "bg-gray-200 text-gray-400",
                    quizResults[s] === false && "bg-red-500 text-white"
                  )}>
                    {s}
                  </div>
                  {s < totalQuizSteps && <div className={cn("w-4 md:w-8 h-1", quizStep > s ? colTheme.brand600 : "bg-gray-200")} />}
                </div>
              ))}
            </div>
            
            {!isSubmitted ? (
              <div className={cn("p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border-2 shadow-inner text-center relative overflow-hidden", colTheme.borderLight)}>
                <h5 className={cn("text-lg sm:text-2xl font-black mb-2 sm:mb-4", colTheme.brand900Text)}>
                  {t('nav.step')} {formatNumber(quizStep)}: {t('nav.journey')}
                </h5>
                <p className="text-xs sm:text-base text-gray-600 mb-4 sm:mb-8">
                  {currentQuizQuestion?.question}
                </p>
                
                <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
                  {currentQuizQuestion?.options.map(opt => (
                    <button 
                      key={opt.text} 
                      disabled={quizAnswered} 
                      onClick={() => handleQuizAnswer(quizStep, opt.text, opt.isCorrect)} 
                      className={cn(
                        "p-3 sm:p-4 rounded-xl border-2 font-bold text-xs sm:text-base transition-all", 
                        quizAnswered && opt.isCorrect ? "border-green-500 bg-green-50" : `border-gray-100 ${colTheme.hoverBorder}`
                      )}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {quizFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={cn(
                        "mt-4 sm:mt-6 p-3 sm:p-4 border rounded-xl text-xs sm:text-sm font-medium",
                        quizResults[quizStep] ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {quizResults[quizStep] ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> : <XCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
                        {quizFeedback}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {quizAnswered && (
                  <button
                    onClick={handleNextQuizStep}
                    className={cn(
                      "w-full mt-4 sm:mt-6 py-2.5 sm:py-3 text-white rounded-xl font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2",
                      colTheme.brand600,
                      collectionId === 'history' ? "hover:bg-teal-700" : collectionId === 'turkish' ? "hover:bg-sky-850" : "hover:bg-amber-700"
                    )}
                  >
                    {quizStep < totalQuizSteps ? t('nav.nextQuestion') : t('nav.seeResults')} <ArrowRight className={cn("w-4 h-4 sm:w-5 sm:h-5", isRTL && "rotate-180")} />
                  </button>
                )}
              </div>
            ) : null}
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className={cn(
          "bg-[#FDFBF7] w-full max-w-4xl rounded-2xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh] border-4 sm:border-8 border-white/20 transition-transform duration-100",
          isWrong && "animate-shake",
          isRTL && "font-arabic"
        )}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className={cn("p-3.5 sm:p-6 border-b flex items-center justify-between", colTheme.bgLight, colTheme.borderLight)}>
          <div>
            <h3 className={cn("text-base sm:text-2xl font-black tracking-tight", colTheme.brand900Text)}>{exercise.title}</h3>
            <p className={cn("font-medium text-xs sm:text-sm", colTheme.brand700Text)}>{exercise.instructions}</p>
          </div>
          <button 
            onClick={onClose}
            className={cn("p-1.5 sm:p-2 rounded-full transition-colors shrink-0", collectionId === 'history' ? "hover:bg-teal-100" : collectionId === 'turkish' ? "hover:bg-sky-100" : "hover:bg-amber-100")}
          >
            <XCircle className={cn("w-6 h-6 sm:w-8 sm:h-8", collectionId === 'history' ? "text-teal-400" : collectionId === 'turkish' ? "text-sky-500" : "text-amber-500")} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 overflow-y-auto">
          <h4 className="text-sm sm:text-xl font-bold text-gray-900 leading-snug">
            {exercise.question}
          </h4>

          {renderExerciseContent()}
          {renderFeedback()}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t flex items-center justify-between">
          <div className="flex gap-2">
            {exercise.hints && (
              <button
                onClick={() => setShowHint(!showHint)}
                className={cn("flex items-center gap-2 font-bold text-sm", colTheme.brand700Text, collectionId === 'history' ? "hover:text-teal-700" : collectionId === 'turkish' ? "hover:text-sky-700" : "hover:text-amber-700")}
              >
                <HelpCircle className="w-4 h-4" /> {showHint ? t('nav.hideHint') : t('nav.needHint')}
              </button>
            )}
          </div>
          {isSubmitted && (
            <button
              onClick={() => {
                setIsSubmitted(false);
                setUserAnswer(null);
              }}
              className="flex items-center gap-2 text-gray-500 font-bold text-sm hover:text-gray-700"
            >
              <RotateCcw className="w-4 h-4" /> {t('nav.reset')}
            </button>
          )}
        </div>

        {/* Hint Tooltip */}
        <AnimatePresence>
          {showHint && exercise.hints && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={cn(
                "p-4 text-sm font-medium",
                collectionId === 'history' ? "bg-emerald-100 text-teal-900" : collectionId === 'turkish' ? "bg-sky-100 text-sky-950" : "bg-amber-100 text-amber-900",
                language === 'ar' ? "not-italic text-base" : "italic"
              )}
            >
              💡 {t('nav.hint')} {exercise.hints[0]}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
