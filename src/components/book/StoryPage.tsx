import React, { useRef, useState, useMemo, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Rocket, ArrowRight } from '../ui/icons';
import { PageData, Hotspot, Exercise, TeacherGuideSection } from '../../types';
import { ReaderTour, isReaderTourDone } from '../ui/ReaderTour';
import { ExerciseModule } from '../ExerciseModule';
import { GroupTaskPanel, ICanPanel, BeforeYouReadPanel, useBeforeYouRead } from './ChapterExtras';
import { beforeYouReadSeconds } from '../../lib/chapterExtras';
import { LessonCard } from './LessonCard';
import { cn } from '../../lib/utils';
import { markQuranVerses } from '../../lib/quranVerses';
import { useLanguage } from '../../contexts/LanguageContext';
import { useStoryProgress } from '../../contexts/StoryProgressContext';
import { MyWordsReminder } from './MyWordsPanel';
import { useFollowAlong } from './useFollowAlong';
import { timingsUrlFor } from '../../lib/followAlong';
import { HotspotButton } from './StoryHotspot';
import { getResponsiveStoryFontStyle, useStoryTextRenderer } from './useStoryText';
import { ChapterAudioBar, ChapterAudioElement, useChapterAudio } from './ChapterAudio';
import { useMediaQuery } from '../../lib/useMediaQuery';
import { ChapterSteps, LanguageFocusPanel, QuickChallengePanel } from './ChapterActivities';

// One chapter of the reader: title, steps and audio on top, picture and story text, then the chapter's activities.
// The parts live in their own files: the story text (useStoryText.tsx, StoryPoem.tsx), the picture points
// (StoryHotspot.tsx), the audio (ChapterAudio.tsx) and the activity cards (ChapterActivities.tsx).

export const StoryPage = ({ 
  page, 
  allPages,
  currentIndex,
  isDyslexic,
  showHighlights = true,
  followAlong = true,
  fontSize,
  level,
  storyId = '',
  collectionId = 'prophets',
  lessonSection,
}: { 
  page: PageData; 
  allPages: PageData[];
  currentIndex: number;
  isDyslexic: boolean;
  /** Off: the story reads as plain text, without Word Note and place card highlights. */
  showHighlights?: boolean;
  /** On: while the audio plays, the word being read fills with the book colour (when timings exist). */
  followAlong?: boolean;
  fontSize: number;
  level: string;
  /** Book id from the catalogue (e.g. 'ibrahim'); finds the verse passages the verse rule cannot see. */
  storyId?: string;
  collectionId?: string;
  /** The Teacher Guide section for this chapter; given only to teachers. */
  lessonSection?: TeacherGuideSection;
}) => {
  const { language, t, formatNumber, isRTL } = useLanguage();
  const { stats, trackExerciseComplete, trackChapterVisit } = useStoryProgress();
  const audio = useChapterAudio(page);
  const { audioRef, isPlaying } = audio;
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  // Completion lives in the shared progress, so a finished Quick Challenge stays finished when the reader comes back.
  const completedExercises = useMemo(() => [...stats.exercisesCompleted], [stats.exercisesCompleted]);
  const [isLanguageFocusOpen, setIsLanguageFocusOpen] = useState(false);
  const [isLessonCardOpen, setIsLessonCardOpen] = useState(false);
  // First story page on this device: a three-step tour once the page has settled.
  const [isTourActive, setIsTourActive] = useState(false);
  useEffect(() => {
    if (page.type !== 'story' || isReaderTourDone()) return;
    const timer = window.setTimeout(() => setIsTourActive(true), 1100);
    return () => window.clearTimeout(timer);
  }, [page.type]);
  // "What's next": the chapter's audio finished, or the reader scrolled to the end of the text.
  const [audioEnded, setAudioEnded] = useState(false);
  const [textEndReached, setTextEndReached] = useState(false);
  const endSentinelsRef = useRef<Set<HTMLDivElement>>(new Set());

  useEffect(() => {
    if (page.type === 'story') trackChapterVisit(page.id);
    setIsLanguageFocusOpen(false);
    setAudioEnded(false);
    setTextEndReached(false);
  }, [page.id, page.type]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) setTextEndReached(true);
    });
    endSentinelsRef.current.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [page.id]);

  const registerEndSentinel = (node: HTMLDivElement | null) => {
    if (node) endSentinelsRef.current.add(node);
    else endSentinelsRef.current.clear();
  };

  // The reader's footer asks for the Quick Challenge when the reader tries to move on without it.
  useEffect(() => {
    const focusQuickChallenge = () => {
      const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-quick-challenge]'));
      const visible = panels.find(panel => panel.offsetParent !== null) ?? panels[0];
      visible?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const exercise = page.exercises?.[0];
      if (exercise) window.setTimeout(() => setActiveExercise(exercise), 450);
    };
    window.addEventListener('reader:focus-quick-challenge', focusQuickChallenge);
    return () => window.removeEventListener('reader:focus-quick-challenge', focusQuickChallenge);
  }, [page.id, page.exercises]);

  const highlightLanguage = language === 'ar' ? 'ar' : 'en';
  const followTextA = useRef<HTMLDivElement>(null);
  const followTextB = useRef<HTMLDivElement>(null);
  const followTextRefs = useMemo(() => [followTextA, followTextB], []);
  useFollowAlong({
    enabled: followAlong && page.type === 'story',
    timingsUrl: timingsUrlFor(page.audioUrl),
    audioRef,
    textRefs: followTextRefs,
    language: highlightLanguage,
    isPlaying,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);
  const imageX = useTransform(springX, [-300, 300], [10, -10]);
  const imageY = useTransform(springY, [-300, 300], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  const chunksWithIndices = useMemo(() => {
    if (!page.timedChunks) return [];
    let currentWordIdx = 0;
    return page.timedChunks.map(chunk => {
      const wordCount = chunk.text.split(/\s+/).filter(w => w.length > 0).length;
      const startIdx = currentWordIdx;
      const endIdx = currentWordIdx + wordCount - 1;
      currentWordIdx += wordCount;
      return { ...chunk, startIdx, endIdx };
    });
  }, [page.timedChunks]);
  void chunksWithIndices;

  const storyText = useMemo(
    () => markQuranVerses(page.content, /[\u0600-\u06FF]/.test(page.content) ? 'ar' : 'en', storyId, level, page.id),
    [page.content, page.id, storyId, level],
  );

  const renderContent = useStoryTextRenderer({ page, allPages, currentIndex, showHighlights, fontSize, collectionId });

  const isA2 = level === 'A2';

  // Before you read: one optional guess above the story; the text is always visible.
  const extrasKey = `v2:${level}:${language}:${page.id}:${page.title}`;
  const beforeYouRead = useBeforeYouRead(`${extrasKey}:byr`);
  const renderBeforeYouRead = () => page.type === 'story' && page.beforeYouRead ? (
    <BeforeYouReadPanel
      data={page.beforeYouRead}
      language={language}
      state={beforeYouRead.state}
      onGuess={beforeYouRead.guess}
      onCheck={beforeYouRead.check}
      seconds={beforeYouReadSeconds(page.content)}
    />
  ) : null;
  const renderICan = () => page.type === 'story' && page.iCan?.length ? (
    <ICanPanel items={page.iCan} language={language} storageKey={`${extrasKey}:ican`} />
  ) : null;
  const renderGroupTask = () => page.type === 'story' && page.groupTask ? (
    <GroupTaskPanel key={extrasKey} task={page.groupTask} language={language} />
  ) : null;

  const quickExercise = page.exercises?.[0];
  const quickDone = Boolean(quickExercise && completedExercises.includes(quickExercise.id));
  const focusExercises = page.languageFocusExercises ?? [];
  const focusDone = focusExercises.length > 0 && focusExercises.every(exercise => completedExercises.includes(exercise.id));
  const listened = audioEnded || stats.audioChaptersPlayed.has(page.id);

  // End of the text: a sentinel for the observer, and the call to the Quick Challenge once the reader is there.
  const renderNextUp = () => (
    <>
      <div ref={registerEndSentinel} className="h-px w-full" aria-hidden="true" />
      <AnimatePresence>
        {quickExercise && !quickDone && (audioEnded || textEndReached) && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            className="mt-5 flex justify-end"
          >
            <button
              type="button"
              data-next-up
              onClick={() => setActiveExercise(quickExercise)}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-700 px-5 font-display text-[12px] font-semibold text-white shadow-lg transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <Rocket size={15} />
              {t('nav.nextUpQuickChallenge')}
              <ArrowRight size={15} className={cn('transition-transform group-hover:translate-x-0.5', isRTL && 'rotate-180 group-hover:-translate-x-0.5')} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // Listen · Read · Quick Challenge · Language Focus: what this chapter asks for and what is done.
  const isWide = useMediaQuery('(min-width: 1024px)');
  const onAudioEnded = () => setAudioEnded(true);
  const renderHeading = () => (
    <div className={cn("flex flex-col min-w-0", isRTL && "text-right")}>
      <h3 className="font-display text-[1.3rem] sm:text-3xl lg:text-4xl text-wood font-semibold tracking-[-0.03em] leading-tight lg:truncate clip-room">{page.title}</h3>
      <p className={cn(
        "font-serif text-xs sm:text-base lg:text-lg sm:mt-0.5",
        language !== 'ar' && "italic",
        "text-brand-600"
      )}>
        {t('nav.chapter')} {formatNumber(page.id)}
      </p>
      <ChapterSteps
        page={page}
        listened={listened}
        textEndReached={textEndReached}
        quickExercise={quickExercise}
        quickDone={quickDone}
        focusExercises={focusExercises}
        focusDone={focusDone}
        lessonSection={lessonSection}
        onOpenExercise={setActiveExercise}
        onOpenLanguageFocus={() => setIsLanguageFocusOpen(true)}
        onOpenLessonCard={() => setIsLessonCardOpen(true)}
      />
    </div>
  );

  return (
    <div className="h-full flex flex-col relative overflow-hidden min-h-0">
      {/* One audio element for both layouts, so turning a tablet does not stop the sound */}
      <ChapterAudioElement page={page} audio={audio} onEnded={onAudioEnded} />

      {/* Wide screens: title, steps and audio stay on top. Phones and tablets scroll them with the story (below). */}
      {isWide && (
        <div className="flex flex-row items-center justify-between gap-4 mb-5 shrink-0">
          {renderHeading()}
          <div className="shrink-0 w-auto">
            <ChapterAudioBar page={page} audio={audio} onEnded={onAudioEnded} withElement={false} />
          </div>
        </div>
      )}

      {/* Dynamic responsive layout container */}
      <div className="flex-1 min-h-0 overflow-hidden">
        {/* Mobile View: Vertical scrolling stack */}
        <div className="block lg:hidden h-full overflow-y-auto custom-scrollbar px-0.5 sm:ps-0.5 sm:pe-4 space-y-4 sm:space-y-6">
          {/* The title and steps scroll away; the audio bar stays at the top of the text */}
          {!isWide && renderHeading()}
          {!isWide && page.audioUrl && (
            <div className="sticky top-0 z-[90] !mt-2 sm:!mt-3 [&>div]:bg-brand-50">
              <ChapterAudioBar page={page} audio={audio} onEnded={onAudioEnded} withElement={false} />
            </div>
          )}
          {page.image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-[60] group perspective-1000 w-full max-w-lg mx-auto"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY }}
            >
              <div className="relative aspect-[4/5] w-full rounded-[1.5rem] shadow-[0_24px_30px_-28px_rgba(0,0,0,0.55)] overflow-hidden">
                <motion.img 
                  src={page.image} 
                  alt={page.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                  style={{ x: imageX, y: imageY, scale: 1.1 }}
                />
                
                <div className="absolute inset-0 z-[70] p-4 pointer-events-none">
                  <div className="relative w-full h-full">
                     {page.hotspots?.map((hotspot) => (
                      <HotspotButton 
                        key={hotspot.id} 
                        hotspot={hotspot} 
                        isActive={activeHotspot?.id === hotspot.id}
                        onToggle={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                        collectionId={collectionId}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-wood/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          )}

          {/* Text Content */}
          <div className="mx-auto max-w-[68ch] wide:max-w-none">
          {renderBeforeYouRead()}
          <div className="relative">
          <div 
            className={cn(
              "font-serif leading-[1.72] text-wood/90",
              isDyslexic ? "font-sans tracking-wide" : "",
              isRTL && "text-right"
            )}
            style={getResponsiveStoryFontStyle(fontSize, isRTL, isDyslexic)}
          >
            <div ref={followTextA}>{renderContent(storyText)}</div>
            {renderNextUp()}
          </div>
          </div>
          </div>

          <QuickChallengePanel page={page} completedExercises={completedExercises} onOpenExercise={setActiveExercise} />

          <LanguageFocusPanel page={page} completedExercises={completedExercises} onOpenExercise={setActiveExercise} isOpen={isLanguageFocusOpen} onToggle={() => setIsLanguageFocusOpen(open => !open)} mobile />

          {renderGroupTask()}
          {renderICan()}
          {page.type === 'story' && page.id === 1 && <MyWordsReminder />}
        </div>

        {/* Desktop View: Grid layout with Quick Challenge spanning both columns at bottom */}
        <div className="hidden lg:flex lg:flex-col h-full min-h-0 overflow-y-auto custom-scrollbar ps-0.5 pe-3 xl:pe-4 pb-4">
          <div className="grid grid-cols-12 gap-8 desk:gap-12 items-start">
            {/* Left side: Image */}
            <div className="col-span-5 self-start lg:sticky lg:top-0">
              {page.image && (
                <motion.div 
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative z-[60] group perspective-1000 w-full"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ rotateX, rotateY }}
                >
                  <div className="relative aspect-[4/5] w-full rounded-[1.25rem] shadow-[0_24px_30px_-28px_rgba(0,0,0,0.55)] overflow-hidden border border-gold/15">
                    <motion.img 
                      src={page.image} 
                      alt={page.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      referrerPolicy="no-referrer"
                      style={{ x: imageX, y: imageY, scale: 1.1 }}
                    />
                    
                    <div className="absolute inset-0 z-[70] p-4 pointer-events-none">
                      <div className="relative w-full h-full">
                         {page.hotspots?.map((hotspot) => (
                          <HotspotButton 
                            key={hotspot.id} 
                            hotspot={hotspot} 
                            isActive={activeHotspot?.id === hotspot.id}
                            onToggle={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                            collectionId={collectionId}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-wood/40 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right side: Story text scrolling content */}
            <div className="col-span-7">
              <div className="w-full max-w-[72ch] desk:max-w-none">
              {renderBeforeYouRead()}
              <div className="relative">
              <div 
                className={cn(
                  "font-serif leading-[1.72] text-wood/90",
                  isDyslexic ? "font-sans tracking-wide" : "",
                  isRTL && "text-right"
                )}
                style={getResponsiveStoryFontStyle(fontSize, isRTL, isDyslexic)}
                  >
                <div ref={followTextB}>{renderContent(storyText)}</div>
                {renderNextUp()}
              </div>
                  </div>
              </div>
            </div>
          </div>

          <QuickChallengePanel page={page} completedExercises={completedExercises} onOpenExercise={setActiveExercise} />

          <LanguageFocusPanel page={page} completedExercises={completedExercises} onOpenExercise={setActiveExercise} isOpen={isLanguageFocusOpen} onToggle={() => setIsLanguageFocusOpen(open => !open)} />

          {renderGroupTask()}
          {renderICan()}
          {page.type === 'story' && page.id === 1 && <MyWordsReminder />}
        </div>
      </div>

      <AnimatePresence>
        {activeExercise && (
          <ExerciseModule
            exercise={activeExercise}
            onComplete={() => {
              trackExerciseComplete(activeExercise.id);
              setActiveExercise(null);
            }}
            onClose={() => setActiveExercise(null)}
            collectionId={collectionId}
            variant={
              page.exercises?.[0]?.id === activeExercise.id
                ? 'quick'
                : page.languageFocusExercises?.some(exercise => exercise.id === activeExercise.id)
                ? 'language'
                : 'default'
            }
          />
        )}
      </AnimatePresence>

      <ReaderTour active={isTourActive} onFinish={() => setIsTourActive(false)} />
      {lessonSection && (
        <LessonCard
          isOpen={isLessonCardOpen}
          onClose={() => setIsLessonCardOpen(false)}
          section={lessonSection}
          groupTask={page.type === 'story' ? page.groupTask : undefined}
          language={language}
        />
      )}
    </div>
  );
};
