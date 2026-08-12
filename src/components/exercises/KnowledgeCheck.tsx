import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  Sparkles,
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
  const { t, formatNumber, isRTL } = useLanguage();
  const theme = themeFor(collectionId);
  const hasAnswer = answer !== null && answer !== undefined;
  const correct = isExerciseAnswerCorrect(exercise, answer);
  const presentedOptions = React.useMemo(
    () => presentMultipleChoice(exercise),
    [exercise]
  );

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'rounded-2xl border-2 bg-white p-4 sm:p-5 shadow-sm flex flex-col gap-4 min-w-0',
        showResults && hasAnswer
          ? correct
            ? 'border-emerald-400 bg-emerald-50/60'
            : 'border-rose-400 bg-rose-50/60'
          : active
            ? theme.border
            : theme.softBorder
      )}
    >
      <div className="flex items-start gap-3 min-w-0">
        <span className={cn(
          'w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs font-black',
          showResults && hasAnswer
            ? correct
              ? 'bg-emerald-500 text-white'
              : 'bg-rose-500 text-white'
            : `${theme.softBg} ${theme.accentText}`
        )}>
          {showResults && hasAnswer ? (correct ? '✓' : '✗') : formatNumber(index + 1)}
        </span>
        <p className="font-serif text-sm sm:text-base md:text-lg font-semibold leading-snug text-wood flex-1 min-w-0">
          {exercise.question}
        </p>
        {showResults && hasAnswer && (
          <button
            type="button"
            onClick={onInfo}
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
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-auto">
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
                  'min-h-11 sm:min-h-12 rounded-xl border-2 px-3 py-2.5 font-display text-xs sm:text-sm md:text-base font-black uppercase tracking-wider transition-colors',
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
        <div className="grid grid-cols-1 gap-2.5 mt-auto">
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
                  'w-full min-h-11 rounded-xl border-2 px-3 py-2.5 flex items-center gap-3 text-start transition-colors',
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
                  'w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-black',
                  revealCorrect || revealWrong
                    ? 'bg-white/20 text-white'
                    : selected
                      ? `${theme.accentBg} text-white`
                      : `${theme.softBg} ${theme.accentText}`
                )}>
                  {String.fromCharCode(65 + displayIndex)}
                </span>
                <span className={cn(
                  'font-serif text-xs sm:text-sm md:text-base font-semibold leading-snug flex-1',
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
  const { t, formatNumber } = useLanguage();
  const theme = themeFor(collectionId);
  const supportedExercises = React.useMemo(
    () => exercises.filter((exercise) => exercise.type === 'true-false' || exercise.type === 'multiple-choice'),
    [exercises]
  );
  const [localAnswers, setLocalAnswers] = React.useState<Record<string, AnswerValue>>({});
  const [showResults, setShowResults] = React.useState(false);
  const [activeFeedback, setActiveFeedback] = React.useState<string | null>(null);

  React.useEffect(() => {
    setLocalAnswers({});
    setShowResults(false);
    setActiveFeedback(null);
  }, [title, exercises]);

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

  const answerQuestion = (exercise: Exercise, answer: boolean | number) => {
    if (showResults) return;
    setLocalAnswers((previous) => ({ ...previous, [exercise.id]: answer }));
    if (exercise.type === 'true-false' && typeof answer === 'boolean') {
      handleAnswer(exercise.id, answer);
    }
  };

  const reset = () => {
    setLocalAnswers({});
    setShowResults(false);
    setActiveFeedback(null);
    onReset?.();
  };

  return (
    <section className="h-full min-h-0 overflow-y-auto custom-scrollbar pr-1">
      <div className="space-y-5 pb-2">
        <div className={cn('flex flex-wrap items-center justify-between gap-3 border-b-2 pb-4', theme.border)}>
          <div className="flex items-center gap-3 min-w-0">
            <div className={cn('p-2.5 rounded-xl text-white shadow-md shrink-0', theme.accentBg)}>
              <GraduationCap size={24} />
            </div>
            <div className="min-w-0">
              <h3 className={cn('font-display text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight', theme.title)}>{title}</h3>
              <p className="font-serif text-xs sm:text-sm text-wood/50 mt-0.5">{t('nav.interactiveChallenge')}</p>
            </div>
          </div>
          {showResults && (
            <div className={cn(
              'px-3 py-2 rounded-xl border font-display text-xs sm:text-sm font-bold',
              percentage >= 70 ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-rose-50 border-rose-200 text-rose-700'
            )}>
              {formatNumber(correctCount)}/{formatNumber(supportedExercises.length)} · {formatNumber(percentage)}%
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-bold text-wood/50 tabular-nums shrink-0">
            {formatNumber(answeredCount)}/{formatNumber(supportedExercises.length)}
          </span>
          <div className={cn('h-2.5 rounded-full flex-1 overflow-hidden', theme.progressTrack)}>
            <motion.div
              className={cn('h-full rounded-full', theme.progress)}
              animate={{ width: `${supportedExercises.length ? (answeredCount / supportedExercises.length) * 100 : 0}%` }}
            />
          </div>
          <span className="font-display text-sm font-bold text-emerald-600 shrink-0">
            {formatNumber(correctCount)} {t('ex.pts')}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
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
              'w-full min-h-12 rounded-xl font-display text-xs sm:text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors',
              allAnswered
                ? `${theme.accentBg} text-white shadow-md`
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            )}
          >
            <Sparkles size={16} /> {t('ex.seeResults')}
          </button>
        )}

        <AnimatePresence mode="wait">
          {showResults && activeExercise && (
            <motion.div
              key={activeExercise.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className={cn(
                'rounded-2xl border-2 bg-white p-4 sm:p-5 shadow-sm',
                isExerciseAnswerCorrect(activeExercise, answerFor(activeExercise))
                  ? 'border-emerald-200'
                  : 'border-rose-200'
              )}
            >
              <div className="flex items-start gap-3">
                {isExerciseAnswerCorrect(activeExercise, answerFor(activeExercise))
                  ? <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                  : <XCircle className="text-rose-600 shrink-0 mt-0.5" size={20} />}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">
                  <p className="font-serif text-sm sm:text-base text-wood/75 leading-relaxed">
                    {isExerciseAnswerCorrect(activeExercise, answerFor(activeExercise))
                      ? activeExercise.feedback.correct
                      : activeExercise.feedback.incorrect}
                  </p>
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 font-serif text-sm sm:text-base text-wood/75 leading-relaxed">
                    <span className="block font-display text-[10px] uppercase tracking-widest text-wood/40 mb-1">{t('ex.explanation')}</span>
                    {activeExercise.explanation}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {showResults && !activeExercise && (
          <div className={cn(
            'rounded-2xl border-2 p-4 sm:p-5 flex items-center gap-4',
            percentage >= 70 ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'
          )}>
            <Trophy className={percentage >= 70 ? 'text-emerald-600' : 'text-amber-600'} size={28} />
            <div className="flex-1">
              <p className="font-display text-base sm:text-lg font-bold text-wood">
                {formatNumber(correctCount)} / {formatNumber(supportedExercises.length)}
              </p>
              <p className="font-serif text-sm text-wood/60">{t('ex.feedbackPanel')}</p>
            </div>
            {onReset && (
              <button type="button" onClick={reset} className="p-2.5 rounded-xl bg-white border border-gray-200 text-wood/60" aria-label={t('ex.tryAgain')}>
                <RotateCcw size={18} />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
