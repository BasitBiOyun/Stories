import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ProphetStory, Level } from '../../types';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ArrowRight, BookOpen, Clock } from '../ui/icons';

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

const collectionStoryIds: Record<Exclude<CollectionId, 'all'>, string[]> = {
  prophets: ['adam', 'ibrahim', 'musa'],
  history: ['mecca'],
  turkish: ['yunusEmre'],
};

const levelDescriptions: Record<Level, { en: string; ar: string }> = {
  A2: { en: 'Elementary', ar: 'المستوى الأساسي' },
  B1: { en: 'Intermediate', ar: 'المستوى المتوسط' },
  B2: { en: 'Upper intermediate', ar: 'فوق المتوسط' },
};

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  const [activeCollection, setActiveCollection] = useState<CollectionId>('all');
  const [lastActive, setLastActive] = useState<{ prophetId: string; level: Level } | null>(null);

  const { language, t, isRTL } = useLanguage();

  useEffect(() => {
    const stored = localStorage.getItem('last_active_story');
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      const story = stories.find((item) => item.id === parsed?.prophetId);
      const level = parsed?.level as Level | undefined;

      if (story && level && story.availableLevels.includes(level)) {
        setLastActive({ prophetId: story.id, level });
      }
    } catch {
      // Ignore malformed local storage data.
    }
  }, []);

  const copy = language === 'ar'
    ? {
        eyebrow: 'مكتبة القصص التفاعلية',
        title: 'اقرأ. استمع. تعلّم من القصص.',
        intro: 'قصص ثنائية اللغة صُممت للقراءة المركزة، والفهم، وتنمية اللغة خطوة بخطوة.',
        all: 'جميع الكتب',
        prophets: 'قصص الأنبياء',
        history: 'التاريخ والحضارة',
        turkish: 'التراث التركي الإسلامي',
        chooseLevel: 'اختر المستوى',
        continueLabel: 'تابع من حيث توقفت',
        continueAction: 'متابعة القراءة',
        libraryLabel: 'المكتبة',
        libraryTitle: 'اختر كتابك',
        libraryIntro: 'ابدأ مباشرة من القصة والمستوى المناسبين لك.',
        levels: 'المستويات المتاحة',
      }
    : {
        eyebrow: 'Interactive story library',
        title: 'Read. Listen. Learn through stories.',
        intro: 'Bilingual stories designed for focused reading, comprehension and language growth at every level.',
        all: 'All books',
        prophets: 'Prophets',
        history: 'History & civilization',
        turkish: 'Turkish-Islamic heritage',
        chooseLevel: 'Choose level',
        continueLabel: 'Continue where you left off',
        continueAction: 'Continue reading',
        libraryLabel: 'Library',
        libraryTitle: 'Choose your book',
        libraryIntro: 'Start directly with the story and CEFR level that fit you.',
        levels: 'Available levels',
      };

  const collectionLabels: Record<Exclude<CollectionId, 'all'>, string> = {
    prophets: copy.prophets,
    history: copy.history,
    turkish: copy.turkish,
  };

  const getStoryCollection = (storyId: string): Exclude<CollectionId, 'all'> => {
    if (collectionStoryIds.history.includes(storyId)) return 'history';
    if (collectionStoryIds.turkish.includes(storyId)) return 'turkish';
    return 'prophets';
  };

  const visibleStories = useMemo(() => {
    if (activeCollection === 'all') return stories;
    return stories.filter((story) => collectionStoryIds[activeCollection].includes(story.id));
  }, [activeCollection]);

  const lastActiveStory = lastActive
    ? stories.find((story) => story.id === lastActive.prophetId) ?? null
    : null;

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

  const launchStory = (prophetId: string, level: Level) => {
    localStorage.setItem('last_active_story', JSON.stringify({ prophetId, level }));
    setLastActive({ prophetId, level });
    onStart(prophetId, level);
  };

  const collectionAccent = (collection: Exclude<CollectionId, 'all'>) => {
    if (collection === 'history') {
      return {
        dot: 'bg-emerald-400',
        line: 'from-emerald-400/70',
        level: 'hover:border-emerald-300/60 hover:bg-emerald-300/10',
      };
    }

    if (collection === 'turkish') {
      return {
        dot: 'bg-cyan-300',
        line: 'from-cyan-300/70',
        level: 'hover:border-cyan-300/60 hover:bg-cyan-300/10',
      };
    }

    return {
      dot: 'bg-[#D8B76A]',
      line: 'from-[#D8B76A]/70',
      level: 'hover:border-[#D8B76A]/60 hover:bg-[#D8B76A]/10',
    };
  };

  return (
    <div
      className={cn(
        'min-h-screen bg-[#101a14] text-[#F5EDD6] selection:bg-[#D8B76A]/25 selection:text-white',
        isRTL && 'font-arabic',
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 15% 5%, rgba(74,103,78,0.22), transparent 30%), radial-gradient(circle at 85% 25%, rgba(216,183,106,0.07), transparent 24%)',
        }}
      />

      <header className="relative z-20 border-b border-white/8 bg-[#101a14]/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[78px] w-full max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[#D8B76A]/25 bg-[#18271d] p-1.5">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/home_icon.png?alt=media&token=d8075082-0856-42d8-bc20-db4d7ce86c99"
                alt=""
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="min-w-0 text-start">
              <p className="truncate text-[15px] font-semibold tracking-[-0.01em] text-[#F5EDD6]">
                {t('nav.homeTitle')}
              </p>
              <p className="mt-0.5 hidden truncate text-[11px] font-medium uppercase tracking-[0.16em] text-[#D8B76A]/60 sm:block">
                {language === 'ar' ? 'مادة تعليمية ثنائية اللغة' : 'Bilingual curriculum library'}
              </p>
            </div>
          </div>

          <LanguageToggle />
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 pt-8 sm:px-8 sm:pt-11 lg:px-12 lg:pt-14">
        <section className="grid items-end gap-7 border-b border-white/8 pb-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:pb-11">
          <div className="max-w-3xl text-start">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D8B76A]/72">
              <span className="h-px w-8 bg-[#D8B76A]/45" />
              <span>{copy.eyebrow}</span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2rem,5vw,4.4rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-[#F7F0DF]">
              {copy.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#D8D0BF]/68 sm:text-[15px]">
              {copy.intro}
            </p>
          </div>

          {lastActiveStory && lastActive && (
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => launchStory(lastActiveStory.id, lastActive.level)}
              className="group w-full max-w-[390px] rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-start transition-colors hover:border-[#D8B76A]/35 hover:bg-white/[0.055] lg:w-[360px]"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D8B76A]/20 bg-[#D8B76A]/8 text-[#D8B76A]">
                  <Clock size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D8B76A]/65">
                    {copy.continueLabel}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-[#F7F0DF]">
                    {translatedStoryName(lastActiveStory)} · {lastActive.level}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#D8D0BF]/68 transition-colors group-hover:text-[#F7F0DF]">
                    {copy.continueAction}
                    <ArrowRight
                      size={14}
                      className={cn('transition-transform group-hover:translate-x-0.5', isRTL && 'rotate-180 group-hover:-translate-x-0.5')}
                    />
                  </span>
                </div>
              </div>
            </motion.button>
          )}
        </section>

        <section className="pt-9 sm:pt-11">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="text-start">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D8B76A]/58">
                <BookOpen size={14} />
                <span>{copy.libraryLabel}</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#F7F0DF] sm:text-3xl">
                {copy.libraryTitle}
              </h2>
              <p className="mt-2 text-sm text-[#D8D0BF]/58">{copy.libraryIntro}</p>
            </div>

            <div
              className="flex max-w-full gap-2 overflow-x-auto pb-1"
              role="tablist"
              aria-label={copy.libraryLabel}
            >
              {([
                ['all', copy.all],
                ['prophets', copy.prophets],
                ['history', copy.history],
                ['turkish', copy.turkish],
              ] as Array<[CollectionId, string]>).map(([id, label]) => {
                const isActive = activeCollection === id;

                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCollection(id)}
                    className={cn(
                      'shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors',
                      isActive
                        ? 'border-[#D8B76A]/45 bg-[#D8B76A]/12 text-[#F7F0DF]'
                        : 'border-white/8 bg-white/[0.025] text-[#D8D0BF]/58 hover:border-white/16 hover:text-[#F7F0DF]',
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeCollection}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="mt-7 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {visibleStories.map((story) => {
              const collection = getStoryCollection(story.id);
              const accent = collectionAccent(collection);

              return (
                <article
                  key={story.id}
                  className="group overflow-hidden rounded-[22px] border border-white/9 bg-[#14231a] transition-colors hover:border-white/18"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#0c140f]">
                    <img
                      src={story.image}
                      alt={translatedStoryName(story)}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101a14] via-[#101a14]/15 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-4 text-start">
                      <div className="mb-2 flex items-center gap-2">
                        <span className={cn('h-1.5 w-1.5 rounded-full', accent.dot)} />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                          {collectionLabels[collection]}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-white">
                        {translatedStoryName(story)}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 text-start">
                    <p className="line-clamp-2 min-h-[40px] text-[12px] leading-5 text-[#D8D0BF]/58">
                      {translatedStoryDescription(story)}
                    </p>

                    <div className="mt-4 border-t border-white/7 pt-3.5">
                      <div className="mb-2.5 flex items-center justify-between gap-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D8D0BF]/45">
                          {copy.chooseLevel}
                        </span>
                        <span className="text-[10px] text-[#D8D0BF]/35">{copy.levels}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {story.availableLevels.map((level) => (
                          <button
                            key={level}
                            type="button"
                            onClick={() => launchStory(story.id, level)}
                            title={levelDescriptions[level][language === 'ar' ? 'ar' : 'en']}
                            className={cn(
                              'rounded-xl border border-white/9 bg-white/[0.025] px-2 py-2.5 text-center transition-all',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B76A]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#14231a]',
                              accent.level,
                            )}
                          >
                            <span className="block text-sm font-semibold text-[#F7F0DF]">{level}</span>
                            <span className="mt-0.5 hidden text-[9px] leading-none text-[#D8D0BF]/42 2xl:block">
                              {levelDescriptions[level][language === 'ar' ? 'ar' : 'en']}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={cn('mt-4 h-px bg-gradient-to-r to-transparent opacity-45', accent.line)} />
                  </div>
                </article>
              );
            })}
          </motion.div>
        </section>
      </main>
    </div>
  );
};
