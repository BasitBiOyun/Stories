import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, BrainCircuit, ArrowRight, CheckCircle2, Book as BookIcon } from '../ui/icons';
import { PageData, Exercise } from '../../types';
import { KnowledgeCheck } from '../exercises/KnowledgeCheck';
import { SequencingExercise } from '../exercises/SequencingExercise';
import { VocabularyMatch } from '../exercises/VocabularyMatch';
import { BoardGame } from './BoardGame';
import { ExerciseModule } from '../ExerciseModule';
import { useLanguage } from '../../contexts/LanguageContext';

import { cn } from '../../lib/utils';

export const ExercisePage = ({ 
  page, 
  userAnswers, 
  handleAnswer,
  level,
  collectionId = 'prophets'
}: { 
  page: PageData; 
  userAnswers: Record<string, boolean | null>; 
  handleAnswer: (id: string, answer: boolean) => void;
  level: string;
  collectionId?: string;
}) => {
  const { t, language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

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
  const showGenericHeader = page.type === 'sequencing' || page.type === 'game';

  return (
    <div className="h-full relative flex flex-col lg:-my-3 lg:h-[calc(100%+1.5rem)]">
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
            {showGenericHeader && (
              <div className="flex items-center gap-2 mb-2 sm:mb-3 shrink-0">
                <div className={cn(
                  "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-sm shrink-0",
                  colTheme.iconBg
                )}>
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <h4 className={cn(
                  "font-display text-[10px] sm:text-xs uppercase tracking-[0.15em] font-black",
                  colTheme.iconText
                )}>{t('nav.interactiveChallenge')}</h4>
              </div>
            )}
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
              {page.type === 'sequencing' && page.sequencingItems && (
                <div className="h-full flex flex-col">
                  <h3 className={cn(
                    "font-display text-2xl sm:text-3xl md:text-4xl text-wood tracking-tight mb-3 border-b-2 pb-3",
                    colTheme.quizSectionBorder
                  )}>
                    {page.title}
                  </h3>
                  <SequencingExercise 
                    items={page.sequencingItems} 
                    onComplete={(correct) => console.log('Sequence correct:', correct)} 
                    collectionId={collectionId}
                  />
                </div>
              )}
              {page.type === 'vocabulary-match' && page.vocabularyPairs && (
                <div className="h-full flex flex-col min-h-0">
                  <h3 className={cn(
                    "font-display text-2xl sm:text-3xl text-wood tracking-tight mb-3 border-b-2 pb-3 shrink-0",
                    colTheme.quizSectionBorder
                  )}>
                    {page.title}
                  </h3>
                  <VocabularyMatch pairs={page.vocabularyPairs} collectionId={collectionId} />
                </div>
              )}
              {page.type === 'game' && (
                <div className="h-full flex flex-col">
                  <h3 className={cn(
                    "font-display text-2xl sm:text-3xl md:text-4xl text-wood tracking-tight mb-3 border-b-2 pb-3",
                    colTheme.quizSectionBorder
                  )}>
                    {page.title}
                  </h3>
                  <BoardGame />
                </div>
              )}
              {page.type === 'exercises' && page.exercises && (
                <div className="h-full min-h-0 flex flex-col">
                  <div className="shrink-0 mb-4">
                    <h3 className={cn(
                      "font-display text-2xl sm:text-3xl text-wood tracking-tight mb-1",
                      colTheme.exerciseTitle
                    )}>
                      {page.title}
                    </h3>
                    <p className={cn(
                      "text-sm sm:text-base text-wood/60 leading-relaxed max-w-5xl",
                      language !== 'ar' && "italic"
                    )}>{page.content}</p>
                  </div>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
                    {page.exercises.map((ex, idx) => (
                      <motion.button
                        key={ex.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setActiveExercise(ex)}
                        className={cn(
                          "p-4 rounded-2xl border-2 text-left flex items-center justify-between group transition-all",
                          completedExercises.includes(ex.id)
                            ? "bg-green-50 border-green-200"
                            : cn("bg-white border-gray-100 hover:shadow-md", colTheme.exerciseBtnHover)
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center font-bold",
                            completedExercises.includes(ex.id)
                              ? "bg-green-500 text-white"
                              : colTheme.exerciseIdxBg
                          )}>
                            {completedExercises.includes(ex.id) ? <CheckCircle2 size={20} /> : idx + 1}
                          </div>
                          <div>
                            <p className={cn(
                              "font-bold",
                              completedExercises.includes(ex.id) ? "text-green-800" : "text-gray-900"
                            )}>{ex.title}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{t(`ex.type.${ex.type}`)}</p>
                          </div>
                        </div>
                        <ArrowRight className={cn(
                          "w-5 h-5 transition-transform group-hover:translate-x-1",
                          completedExercises.includes(ex.id) ? "text-green-400" : colTheme.exerciseArrowColor
                        )} />
                      </motion.button>
                    ))}
                  </div>

                  {completedExercises.length === page.exercises.length && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl text-white text-center shadow-xl"
                    >
                      <h4 className="text-2xl font-black mb-1">{t('nav.masteryAchieved')}</h4>
                      <p className="text-sm opacity-90 font-medium">{t('nav.masteryDesc')}</p>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>

      {/* Exercise Modal */}
      <AnimatePresence>
        {activeExercise && (
          <ExerciseModule
            exercise={activeExercise}
            onComplete={() => {
              setCompletedExercises(prev => [...prev, activeExercise.id]);
              setActiveExercise(null);
            }}
            onClose={() => setActiveExercise(null)}
            collectionId={collectionId}
          />
        )}
      </AnimatePresence>
    </div>
  );
};