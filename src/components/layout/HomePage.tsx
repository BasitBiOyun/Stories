import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { ProphetStory, Level } from '../../types';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ArrowRight, ChevronLeft, ChevronRight, Clock } from '../ui/icons';

// @ts-ignore
import meccaCover from '../../assets/images/mecca_cover_1781516729384.jpg';
// @ts-ignore
import abrahamCover from '../../assets/images/abraham_cover.png';
// @ts-ignore
import mosesCover from '../../assets/images/moses_cover.png';
// @ts-ignore
import yunusEmreCover from '../../assets/images/yunus_emre_cover.png';

interface HomePageProps {
  onStart: (prophetId: string, level: Level) => void;
}

type CollectionId = 'all' | 'prophets' | 'history' | 'turkish';
type StoryCollectionId = Exclude<CollectionId, 'all'>;

const stories: ProphetStory[] = [
  {
    id: 'adam',
    name: 'Prophet Adam',
    description: 'The first human, the knowledge of names, and the beginning of humanity.',
    image:
      'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2FAdam_soil.png?alt=media&token=88abb96a-8dad-4f48-9b60-f30073f9dd9c',
    availableLevels: ['A2', 'B1', 'B2'],
  },
  {
    id: 'ibrahim',
    name: 'Prophet Abraham',
    description: 'The search for truth, the building of the Kaaba, and unwavering faith.',
    image: abrahamCover,
    availableLevels: ['A2', 'B1', 'B2'],
  },
  {
    id: 'musa',
    name: 'Prophet Moses',
    description: 'The journey from the palace to the desert, and the liberation of a people.',
    image: mosesCover,
    availableLevels: ['A2', 'B1', 'B2'],
  },
  {
    id: 'mecca',
    name: 'Mecca Before Islam',
    description: 'The City and the Age of Ignorance: Mecca before the dawn of Islam.',
    image: meccaCover,
    availableLevels: ['A2', 'B1', 'B2'],
  },
  {
    id: 'yunusEmre',
    name: 'Yunus Emre',
    description:
      'The story of a wise Anatolian dervish who taught love, humility, and devotion through simple Turkish poetry.',
    image: yunusEmreCover,
    availableLevels: ['A2', 'B1', 'B2'],
  },
];

const collectionStoryIds: Record<StoryCollectionId, string[]> = {
  prophets: ['adam', 'ibrahim', 'musa'],
  history: ['mecca'],
  turkish: ['yunusEmre'],
};

const collectionIcons: Record<StoryCollectionId, string> = {
  prophets:
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/prophets_icon.png?alt=media&token=985739ce-9484-4998-a9e3-a11077955048',
  history:
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/civilization_icon.png?alt=media&token=fc8ac841-d12e-4169-a052-4946d20409f2',
  turkish:
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/scholars_icon.png?alt=media&token=3c0b480b-bea3-42e3-9718-2a1967dacf78',
};

const levelDescriptions: Record<Level, { en: string; ar: string }> = {
  A2: { en: 'Elementary', ar: 'Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ' },
  B1: { en: 'Intermediate', ar: 'Ø§Ù„Ù…Ø³ØªÙˆÙ‰ Ø§Ù„Ù…ØªÙˆØ³Ø·' },
  B2: { en: 'Upper intermediate', ar: 'ÙÙˆÙ‚ Ø§Ù„Ù…ØªÙˆØ³Ø·' },
};

const collectionVisuals: Record<
  StoryCollectionId,
  {
    accent: string;
    accentBright: string;
    accentSoft: string;
    ambient: string;
    stage: string;
  }
> = {
  prophets: {
    accent: '#D8B35C',
    accentBright: '#F3D58A',
    accentSoft: 'rgba(216,179,92,0.14)',
    ambient: 'rgba(111,74,29,0.44)',
    stage: 'linear-gradient(135deg, #17140f 0%, #21180f 46%, #10130f 100%)',
  },
  history: {
    accent: '#55C997',
    accentBright: '#86EDBD',
    accentSoft: 'rgba(85,201,151,0.14)',
    ambient: 'rgba(14,95,65,0.40)',
    stage: 'linear-gradient(135deg, #0d1714 0%, #10251d 48%, #0b1512 100%)',
  },
  turkish: {
    accent: '#58CBE0',
    accentBright: '#8AE8F5',
    accentSoft: 'rgba(88,203,224,0.14)',
    ambient: 'rgba(22,88,108,0.42)',
    stage: 'linear-gradient(135deg, #0b1418 0%, #10242b 48%, #0a1216 100%)',
  },
};

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  const [activeCollection, setActiveCollection] = useState<CollectionId>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActive, setLastActive] = useState<{ prophetId: string; level: Level } | null>(null);

  const { language, t, isRTL } = useLanguage();
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerGlowX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-42, 42]), {
    stiffness: 160,
    damping: 26,
    mass: 0.7,
  });
  const pointerGlowY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-28, 28]), {
    stiffness: 160,
    damping: 26,
    mass: 0.7,
  });
  const coverRotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-6, 6]),
    { stiffness: 180, damping: 24, mass: 0.65 },
  );
  const coverRotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], reduceMotion ? [0, 0] : [5, -5]),
    { stiffness: 180, damping: 24, mass: 0.65 },
  );

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  });
  const scrollCoverY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [16, -18]);
  const scrollGlowY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-26, 30]);
  const scrollSigilY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [22, -24]);

  const copy =
    language === 'ar'
      ? {
          eyebrow: 'Ù…ÙƒØªØ¨Ø© Ø§Ù„Ù‚ØµØµ Ø§Ù„ØªÙØ§Ø¹Ù„ÙŠØ©',
          title: 'Ù‚ØµØµ ØªÙÙ‚Ø±Ø£ØŒ ÙˆØªÙØ³Ù…Ø¹ØŒ ÙˆØªÙØ¹Ø§Ø´.',
          intro: 'Ø±Ø­Ù„Ø§Øª Ø«Ù†Ø§Ø¦ÙŠØ© Ø§Ù„Ù„ØºØ© ØªØ¬Ù…Ø¹ Ø§Ù„Ù‚ØµØ© ÙˆØ§Ù„ÙÙ‡Ù… ÙˆØ§Ù„Ù…ÙØ±Ø¯Ø§Øª ÙˆØ§Ù„ØªØ¹Ù„Ù‘Ù… Ø§Ù„Ù†Ø´Ø· ÙÙŠ ØªØ¬Ø±Ø¨Ø© ÙˆØ§Ø­Ø¯Ø©.',
          all: 'Ø¬Ù…ÙŠØ¹ Ø§Ù„ÙƒØªØ¨',
          prophets: 'Ù‚ØµØµ Ø§Ù„Ø£Ù†Ø¨ÙŠØ§Ø¡',
          history: 'Ø§Ù„ØªØ§Ø±ÙŠØ® ÙˆØ§Ù„Ø­Ø¶Ø§Ø±Ø©',
          turkish: 'Ø§Ù„ØªØ±Ø§Ø« Ø§Ù„ØªØ±ÙƒÙŠ Ø§Ù„Ø¥Ø³Ù„Ø§Ù…ÙŠ',
          continueLabel: 'ØªØ§Ø¨Ø¹ Ù…Ù† Ø­ÙŠØ« ØªÙˆÙ‚ÙØª',
          continueAction: 'Ù…ØªØ§Ø¨Ø¹Ø© Ø§Ù„Ù‚Ø±Ø§Ø¡Ø©',
          chooseLevel: 'Ø§Ø®ØªØ± Ù…Ø³ØªÙˆØ§Ùƒ',
          previous: 'Ø§Ù„ÙƒØªØ§Ø¨ Ø§Ù„Ø³Ø§Ø¨Ù‚',
          next: 'Ø§Ù„ÙƒØªØ§Ø¨ Ø§Ù„ØªØ§Ù„ÙŠ',
          explore: 'Ø§Ø³Ø­Ø¨ Ø£Ùˆ Ø§Ø³ØªØ®Ø¯Ù… Ø§Ù„Ø£Ø³Ù‡Ù… Ù„Ù„Ø§Ø³ØªÙƒØ´Ø§Ù',
          books: 'ÙƒØªØ¨',
        }
      : {
          eyebrow: 'Interactive story library',
          title: 'Stories to read, hear and step inside.',
          intro: 'Bilingual journeys combining story, comprehension, vocabulary and active learning in one focused experience.',
          all: 'All books',
          prophets: 'Prophets',
          history: 'History & civilization',
          turkish: 'Turkish-Islamic heritage',
          continueLabel: 'Continue where you left off',
          continueAction: 'Continue reading',
          chooseLevel: 'Choose your level',
          previous: 'Previous book',
          next: 'Next book',
          explore: 'Swipe or use the arrows to explore',
          books: 'books',
        };

  const collectionLabels: Record<StoryCollectionId, string> = {
    prophets: copy.prophets,
    history: copy.history,
    turkish: copy.turkish,
  };

  const getStoryCollection = (storyId: string): StoryCollectionId => {
    if (collectionStoryIds.history.includes(storyId)) return 'history';
    if (collectionStoryIds.turkish.includes(storyId)) return 'turkish';
    return 'prophets';
  };

  const translatedStoryName = (story: ProphetStory) => {
    const key = `prophet.${story.id}`;
    const value = t(key);
    return value && value !== key ? value : story.name;
  };

  const translatedStoryDescription = (story: ProphetStory) => {
    const key = `prophet.${story.id}.desc`;
    const value = t(key);
    return value && value !== key ? value : story.description;
  };

  const visibleStories = useMemo(() => {
    if (activeCollection === 'all') return stories;
    return stories.filter((story) => collectionStoryIds[activeCollection].includes(story.id));
  }, [activeCollection]);

  const activeStory = visibleStories[Math.min(activeIndex, visibleStories.length - 1)] ?? stories[0];
  const activeStoryCollection = getStoryCollection(activeStory.id);
  const activeVisual = collectionVisuals[activeStoryCollection];

  const lastActiveStory = lastActive
    ? stories.find((story) => story.id === lastActive.prophetId) ?? null
    : null;

  useEffect(() => {
    const stored = localStorage.getItem('last_active_story');
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      const storyIndex = stories.findIndex((item) => item.id === parsed?.prophetId);
      const story = storyIndex >= 0 ? stories[storyIndex] : undefined;
      const level = parsed?.level as Level | undefined;

      if (story && level && story.availableLevels.includes(level)) {
        setLastActive({ prophetId: story.id, level });
        setActiveIndex(storyIndex);
      }
    } catch {
      // Ignore malformed local storage data.
    }
  }, []);

  const selectCollection = (collection: CollectionId) => {
    setActiveCollection(collection);
    setActiveIndex(0);
  };

  const launchStory = (prophetId: string, level: Level) => {
    localStorage.setItem('last_active_story', JSON.stringify({ prophetId, level }));
    setLastActive({ prophetId, level });
    onStart(prophetId, level);
  };

  const moveCarousel = (direction: 1 | -1) => {
    if (visibleStories.length <= 1) return;

    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return visibleStories.length - 1;
      if (next >= visibleStories.length) return 0;
      return next;
    });
  };

  const handleStagePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === 'touch') return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleSwipeEnd = (offsetX: number, velocityX: number) => {
    if (visibleStories.length <= 1) return;
    if (Math.abs(offsetX) < 55 && Math.abs(velocityX) < 450) return;

    const effectiveX = isRTL ? -offsetX : offsetX;
    moveCarousel(effectiveX < 0 ? 1 : -1);
  };

  const circularDelta = (index: number) => {
    const total = visibleStories.length;
    let delta = index - activeIndex;

    if (total > 2) {
      if (delta > total / 2) delta -= total;
      if (delta < -total / 2) delta += total;
    }

    return delta;
  };

  return (
    <div
      className={cn(
        'min-h-screen overflow-x-hidden bg-[#0b0e0c] text-[#F6F0E2] selection:bg-[#D8B35C]/25 selection:text-white',
        isRTL && 'font-arabic',
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <header className="relative z-50 bg-[#0b0e0c]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[76px] w-full max-w-[1500px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white/[0.045] p-1.5">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/home_icon.png?alt=media&token=d8075082-0856-42d8-bc20-db4d7ce86c99"
                alt=""
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="min-w-0 text-start">
              <p className="truncate text-[15px] font-semibold tracking-[-0.01em] text-[#F7F1E5]">
                {t('nav.homeTitle')}
              </p>
              <p className="mt-0.5 hidden truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8B35C]/68 sm:block">
                {language === 'ar' ? 'Ù…Ø§Ø¯Ø© ØªØ¹Ù„ÙŠÙ…ÙŠØ© Ø«Ù†Ø§Ø¦ÙŠØ© Ø§Ù„Ù„ØºØ©' : 'Bilingual curriculum library'}
              </p>
            </div>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-[1500px] px-5 pb-20 pt-7 sm:px-8 sm:pt-9 lg:px-12 lg:pt-11">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-end">
          <div className="max-w-5xl text-start">
            <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D8B35C]/78">
              {copy.eyebrow}
            </div>
            <h1 className="max-w-5xl text-[clamp(2.5rem,5.6vw,5.45rem)] font-semibold leading-[0.96] tracking-[-0.056em] text-[#FFF9EC]">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[14px] font-medium leading-7 text-[#EDE5D4]/78 sm:text-[15px]">
              {copy.intro}
            </p>
          </div>

          {lastActiveStory && lastActive && (
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => launchStory(lastActiveStory.id, lastActive.level)}
              className="group w-full rounded-2xl bg-white/[0.045] p-4 text-start transition-colors hover:bg-white/[0.075]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D8B35C]/11 text-[#E4C779]">
                  <Clock size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E4C779]/76">
                    {copy.continueLabel}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-[#FFF9EC]">
                    {translatedStoryName(lastActiveStory)} Â· {lastActive.level}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#EDE5D4]/72 transition-colors group-hover:text-white">
                    {copy.continueAction}
                    <ArrowRight size={14} mirrored={isRTL} />
                  </span>
                </div>
              </div>
            </motion.button>
          )}
        </section>

        <section className="mt-9">
          <div className="grid gap-3 md:grid-cols-4">
            <button
              type="button"
              onClick={() => selectCollection('all')}
              className={cn(
                'rounded-2xl px-5 py-4 text-start transition-all',
                activeCollection === 'all'
                  ? 'bg-[#D8B35C]/13 shadow-[0_16px_42px_rgba(0,0,0,0.16)]'
                  : 'bg-white/[0.025] hover:bg-white/[0.055]',
              )}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E4C779]/72">
                {copy.all}
              </span>
              <span className="mt-1 block text-sm font-semibold text-[#FFF9EC]">
                {stories.length} {copy.books}
              </span>
            </button>

            {(['prophets', 'history', 'turkish'] as StoryCollectionId[]).map((collection) => {
              const visual = collectionVisuals[collection];
              const active = activeCollection === collection;

              return (
                <button
                  key={collection}
                  type="button"
                  onClick={() => selectCollection(collection)}
                  className="group relative overflow-hidden rounded-2xl px-4 py-3.5 text-start transition-all"
                  style={{
                    background: active ? visual.accentSoft : 'rgba(255,255,255,0.025)',
                    boxShadow: active ? '0 16px 42px rgba(0,0,0,0.16)' : 'none',
                  }}
                >
                  <div className="relative flex items-center gap-3.5">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl p-1.5"
                      style={{ background: visual.accentSoft }}
                    >
                      <img
                        src={collectionIcons[collection]}
                        alt=""
                        className="h-full w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block truncate text-[13px] font-semibold text-[#FFF9EC]">
                        {collectionLabels[collection]}
                      </span>
                      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.15em] text-[#EDE5D4]/48">
                        {collectionStoryIds[collection].length} {copy.books}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section
          ref={stageRef}
          onPointerMove={handleStagePointerMove}
          onPointerLeave={resetPointer}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') moveCarousel(isRTL ? 1 : -1);
            if (event.key === 'ArrowRight') moveCarousel(isRTL ? -1 : 1);
          }}
          tabIndex={0}
          aria-label={copy.explore}
          className="relative mt-5 overflow-hidden rounded-[38px] outline-none shadow-[0_38px_110px_rgba(0,0,0,0.33)] lg:h-[660px] xl:h-[690px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`stage-${activeStoryCollection}`}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="absolute inset-0"
              style={{ background: activeVisual.stage }}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`ambient-${activeStory.id}`}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-[-7%]"
              style={{ y: scrollGlowY }}
            >
              <img
                src={activeStory.image}
                alt=""
                className="h-full w-full scale-110 object-cover opacity-[0.15] blur-[34px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#090c0a]/94 via-[#090c0a]/78 to-[#090c0a]/58" />
              <motion.div
                className="absolute left-[12%] top-[8%] h-[58%] w-[46%] rounded-full blur-3xl"
                style={{
                  x: pointerGlowX,
                  y: pointerGlowY,
                  background: `radial-gradient(circle, ${activeVisual.ambient}, transparent 68%)`,
                }}
              />
              <div
                className="absolute bottom-[-12%] right-[-6%] h-[62%] w-[52%] rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, ${activeVisual.accentSoft}, transparent 70%)`,
                }}
              />
            </motion.div>
          </AnimatePresence>

          <motion.img
            aria-hidden="true"
            src={collectionIcons[activeStoryCollection]}
            alt=""
            referrerPolicy="no-referrer"
            className="pointer-events-none absolute -right-16 top-8 h-72 w-72 object-contain opacity-[0.045] sm:h-96 sm:w-96 lg:-right-8 lg:h-[460px] lg:w-[460px]"
            style={{ y: scrollSigilY }}
          />

          <div className="relative grid min-h-[610px] lg:h-full lg:min-h-0 lg:grid-cols-[minmax(420px,0.95fr)_minmax(0,1.05fr)]">
            <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-6 py-8 sm:px-10 lg:min-h-0 lg:px-8 lg:py-8 [perspective:1800px]">
              <div className="absolute inset-x-[10%] bottom-[8%] h-16 rounded-[50%] bg-black/45 blur-3xl" />

              <div className="relative h-[470px] w-full max-w-[560px] sm:h-[520px] lg:h-[560px]">
                {visibleStories.map((story, index) => {
                  const delta = circularDelta(index);
                  const absDelta = Math.abs(delta);
                  const isActive = delta === 0;
                  const hidden = absDelta > 2;
                  const visual = collectionVisuals[getStoryCollection(story.id)];
                  const baseX = delta * 96;

                  return (
                    <div
                      key={story.id}
                      className="pointer-events-none absolute inset-0 flex items-center justify-center"
                      style={{ zIndex: 30 - absDelta }}
                    >
                      <motion.button
                        type="button"
                        aria-label={translatedStoryName(story)}
                        onClick={() => setActiveIndex(index)}
                        initial={false}
                        animate={{
                          x: hidden ? (delta < 0 ? -330 : 330) : baseX,
                          scale: isActive ? 1 : absDelta === 1 ? 0.84 : 0.7,
                          rotateY: isActive ? 0 : delta * -17,
                          opacity: hidden ? 0 : isActive ? 1 : absDelta === 1 ? 0.62 : 0.24,
                          filter: isActive ? 'brightness(1)' : absDelta === 1 ? 'brightness(0.72)' : 'brightness(0.5)',
                        }}
                        transition={{ duration: reduceMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          pointerEvents: hidden ? 'none' : 'auto',
                          transformPerspective: 1800,
                          transformStyle: 'preserve-3d',
                        }}
                        className="pointer-events-auto aspect-[4/5] h-[82%] overflow-hidden rounded-[28px] bg-[#0b120d] text-start shadow-[0_36px_90px_rgba(0,0,0,0.45)]"
                      >
                        <motion.div
                          className="relative h-full w-full"
                          style={
                            isActive
                              ? {
                                  rotateX: coverRotateX,
                                  rotateY: coverRotateY,
                                  y: scrollCoverY,
                                  transformPerspective: 1800,
                                  transformStyle: 'preserve-3d',
                                }
                              : undefined
                          }
                        >
                          <img
                            src={story.image}
                            alt=""
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/22 via-transparent to-white/[0.08]" />
                          <div
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%]"
                            style={{
                              background: `linear-gradient(to top, rgba(10,17,13,0.72), transparent)`,
                            }}
                          />
                          {isActive && (
                            <div
                              className="pointer-events-none absolute left-4 top-4 h-2.5 w-2.5 rounded-full shadow-[0_0_20px_currentColor]"
                              style={{ color: visual.accentBright, background: visual.accentBright }}
                            />
                          )}
                        </motion.div>
                      </motion.button>
                    </div>
                  );
                })}

                <motion.div
                  drag={visibleStories.length > 1 ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.13}
                  onDragEnd={(_, info) => handleSwipeEnd(info.offset.x, info.velocity.x)}
                  className="absolute inset-0 z-40 cursor-grab touch-pan-y active:cursor-grabbing"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2.5">
                {visibleStories.map((story, index) => {
                  const active = index === activeIndex;
                  const visual = collectionVisuals[getStoryCollection(story.id)];

                  return (
                    <button
                      key={story.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        'h-2.5 rounded-full transition-all duration-300',
                        active ? 'w-8' : 'w-2.5 bg-white/20 hover:bg-white/40',
                      )}
                      style={active ? { background: visual.accentBright } : undefined}
                      aria-label={translatedStoryName(story)}
                    />
                  );
                })}
              </div>
            </div>

            <div className="relative flex min-h-[520px] flex-col justify-center px-6 py-8 sm:px-10 lg:h-full lg:min-h-0 lg:px-12 lg:py-10 xl:px-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeStory.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.34, ease: 'easeOut' }}
                  className="text-start"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className="inline-flex items-center gap-2.5 rounded-full px-3 py-1.5"
                      style={{ background: activeVisual.accentSoft }}
                    >
                      <img
                        src={collectionIcons[activeStoryCollection]}
                        alt=""
                        className="h-5 w-5 object-contain"
                        referrerPolicy="no-referrer"
                      />
                      <span
                        className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                        style={{ color: activeVisual.accentBright }}
                      >
                        {collectionLabels[activeStoryCollection]}
                      </span>
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#EDE5D4]/46">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(visibleStories.length).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="mt-7 max-w-2xl text-[clamp(2.6rem,4.7vw,5.15rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#FFF9EC]">
                    {translatedStoryName(activeStory)}
                  </h2>

                  <p className="mt-5 max-w-xl text-[15px] font-medium leading-7 text-[#EEE6D6]/84 sm:text-[16px]">
                    {translatedStoryDescription(activeStory)}
                  </p>

                  <div className="mt-8">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F0E8D8]/66">
                      {copy.chooseLevel}
                    </p>

                    <div className="grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {activeStory.availableLevels.map((level) => (
                        <motion.button
                          key={level}
                          type="button"
                          whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
                          whileTap={{ scale: 0.985 }}
                          onClick={() => launchStory(activeStory.id, level)}
                          className="group rounded-2xl px-4 py-4 text-start transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101a14]"
                          style={{
                            background: `linear-gradient(145deg, rgba(255,255,255,0.07), ${activeVisual.accentSoft})`,
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.035)',
                          }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-[30px] font-semibold leading-none tracking-[-0.04em] text-[#FFF9EC] sm:text-[32px]">
                              {level}
                            </span>
                            <ArrowRight
                              size={16}
                              mirrored={isRTL}
                              className="opacity-45 transition-all group-hover:translate-x-0.5 group-hover:opacity-95"
                              style={{ color: activeVisual.accentBright }}
                            />
                          </div>
                          <span className="mt-2 block text-[12px] font-medium leading-4 text-[#F0E8D8]/76 sm:text-[13px]">
                            {levelDescriptions[level][language === 'ar' ? 'ar' : 'en']}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <p className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-[#EDE5D4]/42 sm:block">
                      {copy.explore}
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => moveCarousel(-1)}
                        disabled={visibleStories.length <= 1}
                        aria-label={copy.previous}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-[#FFF9EC] transition-colors hover:bg-white/[0.12] disabled:cursor-default disabled:opacity-25"
                      >
                        <ChevronLeft size={18} mirrored={isRTL} />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveCarousel(1)}
                        disabled={visibleStories.length <= 1}
                        aria-label={copy.next}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] text-[#FFF9EC] transition-colors hover:bg-white/[0.12] disabled:cursor-default disabled:opacity-25"
                      >
                        <ChevronRight size={18} mirrored={isRTL} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

