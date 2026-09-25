import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, CheckCircle2, ChevronLeft } from '../ui/icons';
import { PageData, Level } from '../../types';
import { KnowledgeCheck } from '../exercises/KnowledgeCheck';
import { VocabularyMatch } from '../exercises/VocabularyMatch';
import { ExerciseModule } from '../ExerciseModule';
import { useLanguage } from '../../contexts/LanguageContext';

import { cn } from '../../lib/utils';

export const ExercisePage = ({ 
  page, 
  userAnswers, 
  handleAnswer,
  level,
  collectionId = 'prophets',
  onReviewGlossary,
  onReviewComplete,
}: { 
  page: PageData; 
  userAnswers: Record<string, boolean | null>; 
  handleAnswer: (id: string, answer: boolean) => void;
  level: Level;
  collectionId?: string;
  onReviewGlossary?: () => void;
  onReviewComplete?: () => void;
}) => {
  const { t, language, formatNumber } = useLanguage();
  const isArabic = language === 'ar';
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [reviewIndex, setReviewIndex] = useState(0);

  const colTheme = React.useMemo(() => {
    if (collectionId === 'history') {
      return {
        audioBg: "bg-emerald-50/90 border-emerald-200 backdrop-blur-md shadow-lg",
        audioBtn: "bg-emerald-600 hover:bg-emerald-700 text-white",
        audioSlider: "text-emerald-600 bg-emerald-200",
        audioIcon: "hover:bg-emerald-200/50 text-emerald-600",
        speedBtn: "bg-emerald-100/80 text-emerald-700 hover:bg-emerald-200",
        containerBorder: "border-emerald-200/60",
        iconBg: "bg-emerald-600 text-white",
        iconText: "text-emerald-600",
        quizSectionBorder: "border-emerald-200/60",
        exerciseTitle: "text-emerald-900",
        exerciseBtnHover: "hover:border-emerald-400 hover:shadow-emerald-50/50",
        exerciseIdxBg: "bg-emerald-100 text-emerald-700",
        exerciseArrowColor: "text-emerald-400"
      };
    } else if (collectionId === 'turkish') {
      return {
        audioBg: "bg-sky-50/90 border-sky-200 backdrop-blur-md shadow-lg",
        audioBtn: "bg-sky-700 hover:bg-sky-850 text-white",
        audioSlider: "text-sky-700 bg-sky-100",
        audioIcon: "hover:bg-sky-100/60 text-sky-700",
        speedBtn: "bg-sky-100/80 text-sky-850 hover:bg-sky-200",
        containerBorder: "border-sky-200/60",
        iconBg: "bg-sky-700 text-white",
        iconText: "text-sky-700",
        quizSectionBorder: "border-sky-200/60",
        exerciseTitle: "text-sky-950",
        exerciseBtnHover: "hover:border-sky-400 hover:shadow-sky-50/50",
        exerciseIdxBg: "bg-sky-100 text-sky-700",
        exerciseArrowColor: "text-sky-400"
      };
    } else {
      // Default (prophets)
      return {
        audioBg: "bg-amber-50/90 border-amber-200 backdrop-blur-md shadow-lg",
        audioBtn: "bg-amber-600 hover:bg-amber-700 text-white",
        audioSlider: "text-amber-600 bg-amber-200",
        audioIcon: "hover:bg-amber-200/50 text-amber-600",
        speedBtn: "bg-amber-100/80 text-amber-700 hover:bg-amber-200",
        containerBorder: "border-amber-100",
        iconBg: "bg-amber-600 text-white",
        iconText: "text-amber-600",
        quizSectionBorder: "border-amber-200/60",
        exerciseTitle: "text-amber-900",
        exerciseBtnHover: "hover:border-amber-400 hover:shadow-amber-50/50",
        exerciseIdxBg: "bg-amber-100 text-amber-700",
        exerciseArrowColor: "text-amber-400"
      };
    }
  }, [collectionId]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = vol;
      setVolume(vol);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (volume > 0) {
        audioRef.current.volume = 0;
        setVolume(0);
      } else {
        audioRef.current.volume = 1;
        setVolume(1);
      }
    }
  };

  const handleSpeedChange = () => {
    const nextSpeeds: Record<number, number> = {
      1: 1.25,
      1.25: 1.5,
      1.5: 1.75,
      1.75: 2,
      2: 1
    };
    const newSpeed = nextSpeeds[speed] || 1;
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
      setSpeed(newSpeed);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Remove audio for pages 11, 12, 13 (indices 10, 11, 12)
  const hideAudio = page.id === 11 || page.id === 12 || page.id === 13;

  const languageReviewExercises = page.type === 'exercises' ? (page.exercises ?? []) : [];
  const reviewTotal = languageReviewExercises.length;
  const noticeCount = reviewTotal > 0 ? Math.max(2, Math.round(reviewTotal * 0.3)) : 0;
  const useCount = reviewTotal > 0 ? Math.max(2, Math.round(reviewTotal * 0.25)) : 0;
  const buildCount = Math.max(0, reviewTotal - noticeCount - useCount);
  const buildStart = noticeCount;
  const useStart = noticeCount + buildCount;
  const reviewStageIndex = reviewIndex < buildStart ? 0 : reviewIndex < useStart ? 1 : 2;
  const reviewStageStarts = [0, buildStart, useStart];
  const reviewStageLabels = level === 'A2'
    ? (isArabic ? ['انظر', 'تدرّب', 'استخدم'] : ['Look', 'Practice', 'Use'])
    : (isArabic ? ['لاحظ', 'طبّق', 'استخدم'] : ['Notice', 'Build', 'Use']);

  React.useEffect(() => {
    setReviewIndex(0);
    setCompletedExercises([]);
  }, [page.id, language]);

  const isReviewStageUnlocked = (stageIndex: number) => {
    const start = reviewStageStarts[stageIndex] ?? 0;
    if (start === 0) return true;
    return languageReviewExercises
      .slice(0, start)
      .every(exercise => completedExercises.includes(exercise.id));
  };

  return (
    <div className="h-full relative flex flex-col">
      {/* Top Bar: Audio (Right) */}
      <div className="absolute top-0 right-0 z-50">
        {/* Fixed Audio Player - Top Right */}
        {page.audioUrl && !hideAudio && (
          <div className={cn(
            "flex items-center gap-4 p-3 rounded-2xl border backdrop-blur-md shadow-lg transition-all shrink-0",
            colTheme.audioBg
          )}>
            <audio 
              ref={audioRef} 
              src={page.audioUrl} 
              onEnded={() => setIsPlaying(false)}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
            
            <button
              onClick={toggleAudio}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md shrink-0",
                colTheme.audioBtn
              )}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
            </button>

            <div className="flex flex-col w-32 gap-1 translate-y-1.5">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className={cn(
                  "w-full h-1 rounded-lg appearance-none cursor-pointer accent-current",
                  colTheme.audioSlider
                )}
              />
              <div className="flex justify-between text-[9px] font-mono opacity-60">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 group/vol">
              <button 
                onClick={toggleMute}
                className={cn(
                  "p-1.5 rounded-full transition-colors shrink-0",
                  colTheme.audioIcon
                )}
              >
                {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className={cn(
                    "w-16 h-1 rounded-lg appearance-none cursor-pointer accent-current",
                    colTheme.audioSlider
                  )}
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleSpeedChange}
                className={cn(
                  "px-2 py-0.5 text-[10px] font-bold rounded-lg transition-colors shrink-0",
                  colTheme.speedBtn
                )}
              >
                {speed}x
              </button>
            </div>
          </div>
        )}
      </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group h-full flex flex-col justify-center w-full min-h-0 flex-1"
        >
          <div className={cn(
            "relative bg-white/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 p-3 sm:p-4 md:p-5 shadow-xl h-full flex flex-col overflow-y-auto custom-scrollbar",
            colTheme.containerBorder
          )}>
            <div className="flex-1 min-h-0 flex flex-col h-full">
              {page.type === 'quiz' && page.exercises && (
                <KnowledgeCheck 
                  title={page.title} 
                  exercises={page.exercises} 
                  userAnswers={userAnswers} 
                  handleAnswer={handleAnswer} 
                  collectionId={collectionId}
                />
              )}
              {page.type === 'vocabulary-match' && page.vocabularyPairs && (
                <div className="h-full flex flex-col min-h-0">
                  <VocabularyMatch
                    pairs={page.vocabularyPairs}
                    collectionId={collectionId}
                    level={level}
                    onReviewGlossary={onReviewGlossary}
                  />
                </div>
              )}
              {page.type === 'exercises' && page.exercises && (
                <div className="h-full min-h-0 overflow-y-auto pe-1 custom-scrollbar">
                  <div className="mx-auto w-full max-w-5xl space-y-4 pb-4">
                    <section className={cn(
                      "rounded-[28px] bg-white/68 p-5 shadow-[0_16px_42px_rgba(63,49,28,0.06)] ring-1 sm:p-6",
                      colTheme.containerBorder
                    )}>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p className={cn(
                            "font-display text-[10px] font-semibold uppercase tracking-[0.18em]",
                            colTheme.iconText
                          )}>
                            {isArabic ? 'بعد المفردات' : 'After vocabulary'}
                          </p>
                          <h3 className={cn(
                            "mt-1 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl",
                            colTheme.exerciseTitle
                          )}>
                            {isArabic ? 'مراجعة اللغة' : 'Language Review'}
                          </h3>
                          <p className={cn(
                            "mt-2 max-w-2xl font-serif leading-relaxed text-wood/58",
                            isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                          )}>
                            {level === 'A2'
                              ? (isArabic
                                  ? 'انظر إلى لغة القصة، تدرّب عليها، ثم استخدمها بنفسك.'
                                  : 'Look at language from the story, practise it, then use it yourself.')
                              : page.content}
                          </p>
                        </div>

                        <div className="shrink-0 sm:min-w-[170px]">
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-display text-[9px] font-semibold uppercase tracking-[0.14em] text-wood/42">
                              {isArabic ? 'المهمة' : 'Task'}
                            </span>
                            <span className={cn("font-display text-sm font-semibold tabular-nums", colTheme.iconText)}>
                              {formatNumber(Math.min(reviewIndex + 1, reviewTotal))} / {formatNumber(reviewTotal)}
                            </span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
                            <motion.div
                              initial={false}
                              animate={{ width: `${reviewTotal ? ((reviewIndex + 1) / reviewTotal) * 100 : 0}%` }}
                              className={cn("h-full rounded-full", collectionId === 'history' ? 'bg-emerald-600' : collectionId === 'turkish' ? 'bg-sky-700' : 'bg-amber-600')}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {reviewStageLabels.map((label, stageIndex) => {
                          const unlocked = isReviewStageUnlocked(stageIndex);
                          const active = reviewStageIndex === stageIndex;
                          const complete = reviewStageStarts[stageIndex + 1] !== undefined
                            ? languageReviewExercises
                                .slice(reviewStageStarts[stageIndex], reviewStageStarts[stageIndex + 1])
                                .every(exercise => completedExercises.includes(exercise.id))
                            : languageReviewExercises
                                .slice(reviewStageStarts[stageIndex])
                                .every(exercise => completedExercises.includes(exercise.id));

                          return (
                            <button
                              key={label}
                              type="button"
                              disabled={!unlocked}
                              onClick={() => unlocked && setReviewIndex(reviewStageStarts[stageIndex])}
                              className={cn(
                                "min-h-11 rounded-xl px-2 py-2 font-display text-[11px] font-semibold transition-all ring-1 sm:text-xs md:text-sm",
                                active
                                  ? cn(colTheme.exerciseIdxBg, 'ring-current/15')
                                  : complete
                                  ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                                  : unlocked
                                  ? 'bg-white text-wood/58 ring-black/[0.07] hover:bg-white/85'
                                  : 'cursor-not-allowed bg-white/45 text-wood/25 ring-black/[0.04]'
                              )}
                            >
                              {complete ? '✓ ' : ''}{label}
                            </button>
                          );
                        })}
                      </div>
                    </section>

                    {languageReviewExercises[reviewIndex] && (
                      <div className="space-y-3">
                        {reviewIndex > 0 && (
                          <button
                            type="button"
                            onClick={() => setReviewIndex(index => Math.max(0, index - 1))}
                            className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-white/70 px-3 font-display text-[10px] font-semibold uppercase tracking-[0.11em] text-wood/52 ring-1 ring-black/[0.06] transition-colors hover:bg-white"
                          >
                            <ChevronLeft size={14} className={cn(isArabic && 'rotate-180')} />
                            {isArabic ? 'السابق' : 'Previous'}
                          </button>
                        )}

                        <ExerciseModule
                          key={languageReviewExercises[reviewIndex].id}
                          exercise={languageReviewExercises[reviewIndex]}
                          variant="review"
                          embedded
                          collectionId={collectionId}
                          onClose={() => undefined}
                          onComplete={() => {
                            const exerciseId = languageReviewExercises[reviewIndex].id;
                            setCompletedExercises(previous =>
                              previous.includes(exerciseId) ? previous : [...previous, exerciseId]
                            );
                            if (reviewIndex < reviewTotal - 1) {
                              setReviewIndex(index => index + 1);
                            } else {
                              onReviewComplete?.();
                            }
                          }}
                        />

                        {completedExercises.length === reviewTotal && reviewTotal > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-[22px] bg-emerald-50/85 p-5 text-center ring-1 ring-emerald-200"
                          >
                            <CheckCircle2 className="mx-auto text-emerald-600" size={24} />
                            <h4 className="mt-2 font-display text-xl font-semibold text-emerald-950">
                              {isArabic ? 'اكتملت مراجعة اللغة' : 'Language Review complete'}
                            </h4>
                            <p className={cn("mt-1 font-serif text-emerald-900/60", isArabic ? 'text-base' : 'text-sm')}>
                              {isArabic
                                ? 'راجعت اللغة من الكتاب واستخدمتها في مهام جديدة.'
                                : 'You reviewed the book’s language and used it in new tasks.'}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

    </div>
  );
};