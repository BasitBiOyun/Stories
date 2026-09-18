import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ProphetStory, Level } from '../../types';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight, Clock } from '../ui/icons';

// @ts-ignore
import meccaCover from '../../assets/images/mecca_cover_1781516729384.jpg';
// @ts-ignore
import abrahamCover from '../../assets/images/abraham_cover.webp';
// @ts-ignore
import mosesCover from '../../assets/images/moses_cover.webp';
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
    isComingSoon: false,
  },
  {
    id: 'musa',
    name: 'Prophet Moses',
    description: 'The journey from the palace to the desert, and the liberation of a people.',
    image: mosesCover,
    availableLevels: ['A2', 'B1', 'B2'],
    isComingSoon: false,
  },
  {
    id: 'mecca',
    name: 'Mecca Before Islam',
    description: 'The City and the Age of Ignorance: Mecca before the dawn of Islam.',
    image: meccaCover,
    availableLevels: ['A2', 'B1', 'B2'],
    isComingSoon: false,
  },
  {
    id: 'yunusEmre',
    name: 'Yunus Emre',
    description:
      'The story of a wise Anatolian dervish who taught love, humility, and devotion through simple Turkish poetry.',
    image: yunusEmreCover,
    availableLevels: ['A2', 'B1', 'B2'],
    isComingSoon: false,
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
  A2: { en: 'Elementary', ar: 'المستوى الأساسي' },
  B1: { en: 'Intermediate', ar: 'المستوى المتوسط' },
  B2: { en: 'Upper intermediate', ar: 'فوق المتوسط' },
};

const collectionVisuals: Record<
  StoryCollectionId,
  {
    accent: string;
    accentSoft: string;
    border: string;
    surface: string;
    background: string;
  }
> = {
  prophets: {
    accent: '#E2BE6A',
    accentSoft: 'rgba(226,190,106,0.15)',
    border: 'rgba(226,190,106,0.35)',
    surface: 'rgba(226,190,106,0.08)',
    background: 'rgba(99,64,25,0.34)',
  },
  history: {
    accent: '#5ED8A6',
    accentSoft: 'rgba(94,216,166,0.14)',
    border: 'rgba(94,216,166,0.34)',
    surface: 'rgba(94,216,166,0.08)',
    background: 'rgba(15,91,65,0.31)',
  },
  turkish: {
    accent: '#65D5EA',
    accentSoft: 'rgba(101,213,234,0.14)',
    border: 'rgba(101,213,234,0.34)',
    surface: 'rgba(101,213,234,0.08)',
    background: 'rgba(22,79,101,0.32)',
  },
};

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  const [activeCollection, setActiveCollection] = useState<CollectionId>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActive, setLastActive] = useState<{ prophetId: string; level: Level } | null>(null);

  const { language, t, isRTL } = useLanguage();

  const copy =
    language === 'ar'
      ? {
          eyebrow: 'مكتبة القصص التفاعلية',
          title: 'قصص تُقرأ، وتُسمع، وتُتعلّم.',
          intro: 'رحلات ثنائية اللغة تجمع القصة والفهم والمفردات والتعلّم النشط في تجربة واحدة.',
          all: 'جميع الكتب',
          prophets: 'قصص الأنبياء',
          history: 'التاريخ والحضارة',
          turkish: 'التراث التركي الإسلامي',
          continueLabel: 'تابع من حيث توقفت',
          continueAction: 'متابعة القراءة',
          libraryLabel: 'استكشف المكتبة',
          chooseLevel: 'اختر مستواك وابدأ الرحلة',
          books: 'كتب',
          previous: 'الكتاب السابق',
          next: 'الكتاب التالي',
        }
      : {
          eyebrow: 'Interactive story library',
          title: 'Stories to read, hear and learn from.',
          intro: 'Bilingual journeys that bring story, comprehension, vocabulary and active learning into one experience.',
          all: 'All books',
          prophets: 'Prophets',
          history: 'History & civilization',
          turkish: 'Turkish-Islamic heritage',
          continueLabel: 'Continue where you left off',
          continueAction: 'Continue reading',
          libraryLabel: 'Explore the library',
          chooseLevel: 'Choose your level and begin',
          books: 'books',
          previous: 'Previous book',
          next: 'Next book',
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

  return (
    <div
      className={cn(
        'min-h-screen overflow-x-hidden bg-[#0e1812] text-[#F6F0E2] selection:bg-[#E2BE6A]/25 selection:text-white',
        isRTL && 'font-arabic',
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <header className="relative z-40 border-b border-white/[0.07] bg-[#0e1812]/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[78px] w-full max-w-[1480px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[#E2BE6A]/25 bg-[#17261c] p-1.5">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/home_icon.png?alt=media&token=d8075082-0856-42d8-bc20-db4d7ce86c99"
                alt=""
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="min-w-0 text-start">
              <p className="truncate text-[15px] font-semibold tracking-[-0.01em] text-[#F6F0E2]">
                {t('nav.homeTitle')}
              </p>
              <p className="mt-0.5 hidden truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E2BE6A]/64 sm:block">
                {language === 'ar' ? 'مادة تعليمية ثنائية اللغة' : 'Bilingual curriculum library'}
              </p>
            </div>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-[1480px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-12 lg:pt-12">
        <section className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-4xl text-start">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#E2BE6A]/76">
              <span className="h-px w-9 bg-[#E2BE6A]/50" />
              <span>{copy.eyebrow}</span>
            </div>
            <h1 className="max-w-4xl text-[clamp(2.35rem,5.4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.052em] text-[#FFF8E9]">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[14px] font-medium leading-7 text-[#E5DDCC]/78 sm:text-[15px]">
              {copy.intro}
            </p>
          </div>

          {lastActiveStory && lastActive && (
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => launchStory(lastActiveStory.id, lastActive.level)}
              className="group w-full rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-start transition-colors hover:border-[#E2BE6A]/36 hover:bg-white/[0.065]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E2BE6A]/24 bg-[#E2BE6A]/10 text-[#E2BE6A]">
                  <Clock size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E2BE6A]/76">
                    {copy.continueLabel}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-[#FFF8E9]">
                    {translatedStoryName(lastActiveStory)} · {lastActive.level}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#E5DDCC]/72 transition-colors group-hover:text-white">
                    {copy.continueAction}
                    <ArrowRight size={14} mirrored={isRTL} />
                  </span>
                </div>
              </div>
            </motion.button>
          )}
        </section>

        <section className="mt-9 sm:mt-11">
          <div className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.21em] text-[#E2BE6A]/62">
            <BookOpen size={15} />
            <span>{copy.libraryLabel}</span>
          </div>

          <div className="grid gap-3 lg:grid-cols-[auto_repeat(3,minmax(0,1fr))]">
            <button
              type="button"
              onClick={() => selectCollection('all')}
              className={cn(
                'min-h-[72px] rounded-2xl border px-5 text-start transition-all lg:min-w-[150px]',
                activeCollection === 'all'
                  ? 'border-[#E2BE6A]/40 bg-[#E2BE6A]/10 text-[#FFF8E9]'
                  : 'border-white/[0.08] bg-white/[0.025] text-[#E5DDCC]/72 hover:border-white/16 hover:bg-white/[0.045]',
              )}
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.17em] text-[#E2BE6A]/70">
                {copy.all}
              </span>
              <span className="mt-1 block text-sm font-semibold">
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
                  className="group relative min-h-[72px] overflow-hidden rounded-2xl border p-3.5 text-start transition-all"
                  style={{
                    borderColor: active ? visual.border : 'rgba(255,255,255,0.08)',
                    background: active ? visual.surface : 'rgba(255,255,255,0.025)',
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 end-0 w-24 opacity-[0.055] transition-opacity group-hover:opacity-[0.09]"
                    style={{ background: `linear-gradient(to left, ${visual.accent}, transparent)` }}
                  />
                  <div className="relative flex items-center gap-3.5">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border p-1.5"
                      style={{ borderColor: visual.border, background: visual.accentSoft }}
                    >
                      <img
                        src={collectionIcons[collection]}
                        alt=""
                        className="h-full w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0">
                      <span
                        className="block truncate text-[13px] font-semibold text-[#FFF8E9]"
                      >
                        {collectionLabels[collection]}
                      </span>
                      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E5DDCC]/52">
                        {collectionStoryIds[collection].length} {copy.books}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            className="relative mt-5 overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#122019] shadow-[0_28px_80px_rgba(0,0,0,0.24)]"
            style={{ minHeight: 560 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <img
                  src={activeStory.image}
                  alt=""
                  className="h-full w-full scale-110 object-cover opacity-[0.16] blur-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#101a14]/95 via-[#101a14]/88 to-[#101a14]/76" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 78% 50%, ${activeVisual.background}, transparent 46%)`,
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="relative grid min-h-[560px] lg:grid-cols-[minmax(320px,0.86fr)_minmax(0,1.14fr)]">
              <div className="relative min-h-[440px] overflow-hidden lg:min-h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`cover-${activeStory.id}`}
                    initial={{ opacity: 0, x: isRTL ? 28 : -28, scale: 0.985 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: isRTL ? -20 : 20, scale: 0.99 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeStory.image}
                      alt={translatedStoryName(activeStory)}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101a14]/90 via-transparent to-black/10 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#101a14]/95" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 lg:hidden">
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 backdrop-blur-md">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(visibleStories.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="relative flex min-h-[520px] flex-col justify-center px-6 py-8 sm:px-9 lg:px-12 lg:py-10 xl:px-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`copy-${activeStory.id}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.32, ease: 'easeOut' }}
                    className="text-start"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <div
                        className="flex items-center gap-2.5 rounded-full border px-3 py-1.5"
                        style={{ borderColor: activeVisual.border, background: activeVisual.surface }}
                      >
                        <img
                          src={collectionIcons[activeStoryCollection]}
                          alt=""
                          className="h-5 w-5 object-contain"
                          referrerPolicy="no-referrer"
                        />
                        <span
                          className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                          style={{ color: activeVisual.accent }}
                        >
                          {collectionLabels[activeStoryCollection]}
                        </span>
                      </div>

                      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E5DDCC]/42 lg:inline">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(visibleStories.length).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="mt-6 max-w-2xl text-[clamp(2.35rem,4.5vw,4.9rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#FFF9EB]">
                      {translatedStoryName(activeStory)}
                    </h2>

                    <p className="mt-5 max-w-xl text-[15px] font-medium leading-7 text-[#EDE5D4]/82 sm:text-base">
                      {translatedStoryDescription(activeStory)}
                    </p>

                    <div className="mt-8">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E5DDCC]/56">
                        {copy.chooseLevel}
                      </p>

                      <div className="grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-3">
                        {activeStory.availableLevels.map((level) => (
                          <motion.button
                            key={level}
                            type="button"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.985 }}
                            onClick={() => launchStory(activeStory.id, level)}
                            className="group rounded-2xl border bg-black/10 px-4 py-4 text-start transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101a14]"
                            style={{
                              borderColor: 'rgba(255,255,255,0.11)',
                            }}
                            onMouseEnter={(event) => {
                              event.currentTarget.style.borderColor = activeVisual.border;
                              event.currentTarget.style.background = activeVisual.surface;
                            }}
                            onMouseLeave={(event) => {
                              event.currentTarget.style.borderColor = 'rgba(255,255,255,0.11)';
                              event.currentTarget.style.background = 'rgba(0,0,0,0.1)';
                            }}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-2xl font-semibold tracking-[-0.035em] text-[#FFF9EB]">
                                {level}
                              </span>
                              <ArrowRight
                                size={16}
                                mirrored={isRTL}
                                className="opacity-45 transition-all group-hover:translate-x-0.5 group-hover:opacity-90"
                                style={{ color: activeVisual.accent }}
                              />
                            </div>
                            <span className="mt-1.5 block text-[11px] font-medium leading-4 text-[#EDE5D4]/68">
                              {levelDescriptions[level][language === 'ar' ? 'ar' : 'en']}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-9 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => moveCarousel(-1)}
                      disabled={visibleStories.length <= 1}
                      aria-label={copy.previous}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[#FFF9EB] transition-colors hover:border-white/22 hover:bg-white/[0.07] disabled:cursor-default disabled:opacity-25"
                    >
                      <ChevronLeft size={18} mirrored={isRTL} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveCarousel(1)}
                      disabled={visibleStories.length <= 1}
                      aria-label={copy.next}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[#FFF9EB] transition-colors hover:border-white/22 hover:bg-white/[0.07] disabled:cursor-default disabled:opacity-25"
                    >
                      <ChevronRight size={18} mirrored={isRTL} />
                    </button>
                  </div>

                  <div className="hidden h-px flex-1 bg-white/[0.08] sm:block" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E5DDCC]/42">
                    A2 · B1 · B2
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-5 mt-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
            <div className="flex min-w-max gap-3 lg:min-w-0 lg:grid lg:grid-cols-5">
              {visibleStories.map((story, index) => {
                const collection = getStoryCollection(story.id);
                const visual = collectionVisuals[collection];
                const active = index === activeIndex;

                return (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative w-[190px] overflow-hidden rounded-2xl border text-start transition-all lg:w-auto"
                    style={{
                      borderColor: active ? visual.border : 'rgba(255,255,255,0.08)',
                      background: active ? visual.surface : 'rgba(255,255,255,0.025)',
                    }}
                  >
                    <div className="flex items-center gap-3 p-2.5">
                      <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-black/20">
                        <img
                          src={story.image}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="min-w-0">
                        <span
                          className="block text-[9px] font-semibold uppercase tracking-[0.14em]"
                          style={{ color: active ? visual.accent : 'rgba(229,221,204,0.42)' }}
                        >
                          {collectionLabels[collection]}
                        </span>
                        <span className="mt-1.5 block line-clamp-2 text-[12px] font-semibold leading-4 text-[#FFF8E9]">
                          {translatedStoryName(story)}
                        </span>
                      </div>
                    </div>
                    {active && (
                      <motion.div
                        layoutId="active-story-rail"
                        className="absolute inset-x-0 bottom-0 h-[2px]"
                        style={{ background: visual.accent }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
