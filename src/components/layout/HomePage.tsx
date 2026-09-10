import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProphetStory, Level } from '../../types';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';
import { HeroSection } from './HeroSection';
import { FeatureHighlights } from './FeatureHighlights';
import { 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Globe, 
  ShieldAlert, 
  FileText, 
  Play, 
  ArrowRight, 
  Clock, 
  Compass, 
  CheckCircle, 
  Download,
  Scroll,
  Heart,
  Scale,
  Award,
  Layers,
  Users,
  BookOpenCheck,
  Volume2,
  Zap,
  ShieldCheck,
  School,
  Languages
} from '../ui/icons';

// @ts-ignore
import meccaCover from '../../assets/images/mecca_cover_1781516729384.jpg';
// @ts-ignore
import abrahamCover from '../../assets/images/abraham_cover.webp';
// @ts-ignore
import yunusEmreCover from '../../assets/images/yunus_emre_cover.png';

interface HomePageProps {
  onStart: (prophetId: string, level: Level) => void;
}

const prophets: ProphetStory[] = [
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
    image:
      'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fmoses_cover.png?alt=media&token=3e9009f1-5f4d-47ed-9b5f-a6b58731d025',
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

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

const LEVEL_LABELS: Record<Level, string> = {
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper Int.',
};

// Atmospheric floating golden dust coordinates
const PARTICLE_COUNT = 15;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${(i * 6.7) % 100}%`,
  top: `${(i * 14.1) % 100}%`,
  size: (i % 3) + 2.5,
  duration: 20 + (i % 6) * 4,
  delay: (i % 3) * 1.5,
}));

interface Collection {
  id: 'prophets' | 'history' | 'turkish';
  titleKey: string;
  descKey: string;
  storyIds: string[];
  theme: {
    bgGradient: string;
    borderColor: string;
    activeBorder: string;
    badgeStyle: string;
    glowStyle: string;
    accentColor: string;
    iconStyle: string;
  };
  numStories: number;
}

const collections: Collection[] = [
  {
    id: 'prophets',
    titleKey: 'home.collection1',
    descKey: 'home.collection1Desc',
    storyIds: ['adam', 'ibrahim', 'musa'],
    theme: {
      bgGradient: 'from-[#1F0E08] via-[#2F1A12] to-[#0E0704]',
      borderColor: 'border-amber-700/25 hover:border-gold/50',
      activeBorder: 'border-gold shadow-[0_0_40px_rgba(217,119,6,0.25)]',
      badgeStyle: 'bg-amber-950/80 text-amber-300 border-amber-700/40 shadow-inner',
      glowStyle: 'rgba(217, 119, 6, 0.2)',
      accentColor: 'text-gold',
      iconStyle: 'text-gold bg-gold/15 border-gold/30',
    },
    numStories: 3,
  },
  {
    id: 'history',
    titleKey: 'home.collection2',
    descKey: 'home.collection2Desc',
    storyIds: ['mecca'],
    theme: {
      bgGradient: 'from-[#052117] via-[#0C2E22] to-[#03140E]',
      borderColor: 'border-emerald-600/25 hover:border-emerald-400/50',
      activeBorder: 'border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.25)]',
      badgeStyle: 'bg-emerald-950/80 text-emerald-300 border-emerald-600/40 shadow-inner',
      glowStyle: 'rgba(16, 185, 129, 0.2)',
      accentColor: 'text-emerald-400',
      iconStyle: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
    },
    numStories: 1,
  },
  {
    id: 'turkish',
    titleKey: 'home.collection3',
    descKey: 'home.collection3Desc',
    storyIds: ['yunusEmre'],
    theme: {
      bgGradient: 'from-[#051121] via-[#0D1D2C] to-[#030912]',
      borderColor: 'border-sky-500/25 hover:border-[#22D3EE]/50',
      activeBorder: 'border-[#22D3EE] shadow-[0_0_40px_rgba(34,211,238,0.25)]',
      badgeStyle: 'bg-[#0C1E30]/80 text-[#22D3EE] border-cyan-700/40 shadow-inner',
      glowStyle: 'rgba(34, 211, 238, 0.2)',
      accentColor: 'text-[#22D3EE]',
      iconStyle: 'text-[#22D3EE] bg-[#22D3EE]/15 border-[#22D3EE]/30',
    },
    numStories: 1,
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  const [activeCollection, setActiveCollection] = useState<'prophets' | 'history' | 'turkish'>('prophets');
  const [selectedProphet, setSelectedProphet] = useState<ProphetStory | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [lastActive, setLastActive] = useState<{ prophetId: string; level: Level } | null>(null);
  const [progressTracker, setProgressTracker] = useState<Record<string, number>>({});
  
  const { language, t, formatNumber, isRTL } = useLanguage();

  const libraryRef = useRef<HTMLDivElement>(null);
  const levelSelectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedProphet) {
      const timer = setTimeout(() => {
        levelSelectorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [selectedProphet]);

  useEffect(() => {
    // ── Load Last Active Book ──
    const stored = localStorage.getItem('last_active_story');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.prophetId && parsed?.level) {
          setLastActive(parsed);
        }
      } catch (e) {
        // Safe fail
      }
    }

    // ── Initialize mock/saved progress lines for cards ──
    const progressMap: Record<string, number> = {};
    prophets.forEach((p) => {
      const savedPage = localStorage.getItem(`glossary_known_${p.id}`);
      if (savedPage) {
        progressMap[p.id] = 85;
      } else if (p.id === 'adam') {
        progressMap[p.id] = 55;
      } else {
        progressMap[p.id] = 0;
      }
    });
    setProgressTracker(progressMap);
  }, []);

  const handleSelectProphet = (prophet: ProphetStory) => {
    if (prophet.isComingSoon) return;

    if (selectedProphet?.id === prophet.id) {
      setSelectedProphet(null);
      setSelectedLevel(null);
      return;
    }

    setSelectedProphet(prophet);
    setSelectedLevel(null);
  };

  const handleStart = () => {
    if (selectedProphet && selectedLevel) {
      localStorage.setItem('last_active_story', JSON.stringify({ prophetId: selectedProphet.id, level: selectedLevel }));
      onStart(selectedProphet.id, selectedLevel);
    }
  };

  const handleResumeLastActive = () => {
    if (lastActive) {
      onStart(lastActive.prophetId, lastActive.level);
    }
  };

  const handleDirectLaunch = (prophetId: string, level: Level) => {
    localStorage.setItem('last_active_story', JSON.stringify({ prophetId, level }));
    onStart(prophetId, level);
  };

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Filter stories belonging to currently active collection
  const selectedCollectionObj = collections.find(c => c.id === activeCollection) || collections[0];
  const collectionStories = prophets.filter(p => selectedCollectionObj.storyIds.includes(p.id));

  // Orchestrated hero entrance — staged so elements arrive as one sequence,
  // not independent fades. Parent controls timing via variants + staggerChildren.
  const heroContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const heroItemVariants: any = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div
      className={cn(
        'min-h-screen bg-[#14221a] text-[#F5EDD6] relative overflow-hidden flex flex-col items-center pb-24 select-none selection:bg-gold/30 selection:text-white',
        isRTL && 'font-arabic',
      )}
    >
      {/* ── Floating Gold Dust Particles ── */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen z-10 overflow-hidden">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#D4AF37]/45"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              filter: 'blur(1.5px)',
            }}
            animate={{
              y: [-10, -210],
              opacity: [0, 0.8, 0],
              x: [0, p.id % 2 === 0 ? 22 : -22, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ── Dynamic Ambient Cinematic Overlay Backing ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCollection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className={cn(
              "absolute inset-0 bg-cover bg-center bg-no-repeat grayscale-[25%]",
              activeCollection === 'prophets' && "bg-[radial-gradient(ellipse_at_center_top,#1f3d2f_0%,#14221a_80%)]",
              activeCollection === 'history' && "bg-[radial-gradient(ellipse_at_center_top,#2e4537_0%,#14221a_80%)]",
              activeCollection === 'turkish' && "bg-[radial-gradient(ellipse_at_center_top,#1b3d2b_0%,#14221a_80%)]",
            )}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14221a]/40 to-[#14221a]" />
      </div>

      {/* ── Border Ornaments ── */}
      {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => (
        <div
          key={corner}
          aria-hidden="true"
          className={cn(
            'fixed w-16 h-16 border-[rgba(212,175,55,0.06)] border-solid pointer-events-none z-40',
            corner === 'tl' && 'top-4 left-4 border-t border-l rounded-tl-lg',
            corner === 'tr' && 'top-4 right-4 border-t border-r rounded-tr-lg',
            corner === 'bl' && 'bottom-4 left-4 border-b border-l rounded-bl-lg',
            corner === 'br' && 'bottom-4 right-4 border-b border-r rounded-br-lg',
          )}
        />
      ))}

      {/* ── Sticky Navigation Bar ── */}
      <header className="relative z-50 w-full max-w-7xl px-6 py-5 flex items-center justify-between border-b border-gold/10 backdrop-blur-md bg-[#14221a]/30">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1d3025] to-[#111e17] border-2 border-gold/30 flex items-center justify-center text-gold shadow-[0_0_20px_rgba(212,175,55,0.2)] overflow-hidden p-0.5 transition-transform duration-300 hover:scale-105">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/home_icon.png?alt=media&token=d8075082-0856-42d8-bc20-db4d7ce86c99"
              alt="Logo"
              className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-start">
            <div className="text-base font-extrabold font-sans text-[#F5EDD6] tracking-wide leading-tight">
              {t('nav.homeTitle')}
            </div>
            <div className="text-[11px] font-mono text-gold/60 uppercase tracking-[0.2em] leading-none mt-1.5">
              {language === 'ar' ? 'مادة تعليمية ثنائية اللغة' : 'CEFR Bilingual Curriculum Material'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button 
            onClick={() => scrollToSection(libraryRef)}
            className="hidden sm:inline-block text-sm font-sans tracking-widest text-[#F5EDD6] hover:text-gold transition-colors font-semibold"
          >
            {language === 'ar' ? 'مكتبة القصص' : 'Library'}
          </button>
          <LanguageToggle />
        </div>
      </header>

      {/* ══════════════════════════════════════
          1. COLLECTIONS SECTION & STORY LIBRARY
      ══════════════════════════════════════ */}
      <section ref={libraryRef} className="relative z-20 w-full max-w-7xl px-6 pt-16 pb-10 flex flex-col items-center">
        
        {/* Collection Section Headers */}
        <div className="w-full flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-[#F5EDD6] tracking-tight select-none">
            {language === 'ar' ? 'المجموعات' : 'Collections'}
          </h2>
          <p className="text-sm sm:text-base text-parchment/50 font-sans max-w-lg mt-4 mb-2">
            {t('home.selectToBegin')}
          </p>
          <div className="w-24 h-px bg-gold/40 mt-4" />
        </div>

        {/* Collection Selector Grid (The Premium Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12 items-stretch">
          {collections.map((coll) => {
            const isActive = activeCollection === coll.id;
            
            return (
              <button
                key={coll.id}
                onClick={() => {
                  setActiveCollection(coll.id);
                  setSelectedProphet(null);
                  setSelectedLevel(null);
                }}
                className={cn(
                  'text-start rounded-[32px] p-6 sm:p-10 border transition-all duration-500 overflow-hidden relative flex flex-col justify-between min-h-[380px] sm:min-h-[440px] h-full group shadow-2xl backdrop-blur-md w-full',
                  isActive 
                    ? `bg-gradient-to-br ${coll.theme.bgGradient} ${coll.theme.activeBorder}` 
                    : `bg-[#1a2d21]/85 ${coll.theme.borderColor} hover:scale-[1.02] hover:shadow-gold/5`,
                )}
                style={{
                  boxShadow: isActive ? `0 0 50px ${coll.theme.glowStyle}` : 'none'
                }}
              >
                {/* Background Watermark Icon */}
                <div className="absolute -bottom-6 -right-6 w-56 h-56 select-none pointer-events-none opacity-[0.05] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.10] group-hover:rotate-6">
                  <img
                    src={
                      coll.id === 'prophets'
                        ? 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/prophets_icon.png?alt=media&token=985739ce-9484-4998-a9e3-a11077955048'
                        : coll.id === 'history'
                        ? 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/civilization_icon.png?alt=media&token=fc8ac841-d12e-4169-a052-4946d20409f2'
                        : 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/scholars_icon.png?alt=media&token=3c0b480b-bea3-42e3-9718-2a1967dacf78'
                    }
                    alt=""
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <img 
                        src={
                          coll.id === 'prophets'
                            ? 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/prophets_icon.png?alt=media&token=985739ce-9484-4998-a9e3-a11077955048'
                            : coll.id === 'history'
                            ? 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/civilization_icon.png?alt=media&token=fc8ac841-d12e-4169-a052-4946d20409f2'
                            : 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/scholars_icon.png?alt=media&token=3c0b480b-bea3-42e3-9718-2a1967dacf78'
                        }
                        alt=""
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <span className={cn("text-xs font-sans font-bold px-3 py-1.5 rounded-lg border uppercase tracking-wider", coll.theme.badgeStyle)}>
                      {coll.numStories} {t('home.collectionStories')}
                    </span>
                  </div>

                  <h3 className={cn("text-xl font-bold mb-3 group-hover:text-gold transition-colors font-sans tracking-wide", isActive ? 'text-gold' : 'text-[#F5EDD6]')}>
                    {t(coll.titleKey)}
                  </h3>
                  
                  <p className="text-sm text-parchment/70 leading-relaxed font-sans font-normal mb-4">
                    {t(coll.descKey)}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm font-sans">
                  {/* CEFR difficulty spectrum */}
                  <span className="text-parchment/40 flex items-center gap-1.5 font-semibold">
                    <span>A2</span>
                    <span className="opacity-40">•</span>
                    <span>B1</span>
                    <span className="opacity-40">•</span>
                    <span>B2</span>
                  </span>

                  <span className={cn("flex items-center gap-1 tracking-widest uppercase transition-transform duration-300", isActive ? 'translate-x-1 font-bold text-gold' : 'text-parchment/50 font-medium group-hover:translate-x-1 group-hover:text-gold')}>
                    {t('home.explore')}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Collection Story Container Trays */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCollection}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-center py-6 mb-4">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              </div>

              {/* Story Book Deck */}
              <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4">
                {collectionStories.map((prophet) => {
                  const isSelected = selectedProphet?.id === prophet.id;
                  const isDimmed = selectedProphet !== null && !isSelected;

                  return (
                    <motion.button
                      key={prophet.id}
                      onClick={() => handleSelectProphet(prophet)}
                      animate={{
                        opacity: isDimmed ? 0.35 : 1,
                        scale: isDimmed ? 0.95 : isSelected ? 1.02 : 1,
                        y: isSelected ? -8 : 0,
                      }}
                      whileHover={
                        prophet.isComingSoon || isDimmed
                          ? {}
                          : {
                              scale: 1.03,
                              y: -8,
                              rotateY: isRTL ? -4 : 4,
                              rotateX: 2,
                              transition: { duration: 0.25, ease: 'easeOut' },
                            }
                      }
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className={cn(
                        'group relative w-full sm:w-[300px] h-[400px] rounded-[24px] overflow-hidden text-start cursor-pointer select-none border transition-[border-color,box-shadow] flex-shrink-0',
                        isSelected
                          ? 'border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.22)]'
                          : 'border-white/10 hover:border-gold/40',
                      )}
                      style={{
                        background: '#16271c',
                        perspective: '1000px',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Ribbon Border */}
                      <div className="absolute inset-2 border border-gold/10 rounded-[18px] pointer-events-none z-10 transition-colors group-hover:border-gold/25" />

                      {/* Selection confirmation pulse */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-[0_0_16px_rgba(212,175,55,0.6)]"
                          >
                            <CheckCircle size={16} className="text-[#0E0602]" strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Level Badges with High Visibility BACKPLATE over the images */}
                      <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
                        {prophet.availableLevels.map((lvl) => {
                          const isLvlSelected = selectedLevel === lvl && isSelected;
                          let lvlStyle = '';
                          if (lvl === 'A2') lvlStyle = 'bg-[#0E1B35]/95 text-[#93C5FD] border-[#3B82F6]/50 shadow-[0_2px_8px_rgba(0,0,0,0.6)]';
                          else if (lvl === 'B1') lvlStyle = 'bg-[#062417]/95 text-[#6EE7B7] border-[#10B981]/50 shadow-[0_2px_8px_rgba(0,0,0,0.6)]';
                          else lvlStyle = 'bg-[#290B0B]/95 text-[#FCA5A5] border-[#EF4444]/50 shadow-[0_2px_8px_rgba(0,0,0,0.6)]';

                          return (
                            <span
                              key={lvl}
                              className={cn(
                                'text-sm font-sans font-extrabold px-3 py-1 rounded-md border tracking-wider uppercase transition-all duration-300 backdrop-blur-md',
                                lvlStyle,
                                isLvlSelected && 'scale-110 !border-gold !text-[#F5EDD6] font-black bg-gold/50 shadow-[0_0_12px_rgba(212,175,55,0.6)]',
                              )}
                            >
                              {lvl}
                            </span>
                          );
                        })}
                      </div>

                      {/* Cover Artwork Image */}
                      <motion.img
                        src={prophet.image}
                        alt={prophet.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                        animate={{ scale: isSelected ? 1.06 : 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      />

                      {/* Soft Cinematic Overlays */}
                      <div
                        className={cn(
                          'absolute inset-0 transition-opacity duration-300',
                          isSelected ? 'opacity-100' : 'opacity-85 group-hover:opacity-90',
                        )}
                        style={{
                          background: 'linear-gradient(to top, rgba(20,34,26,0.98) 0%, rgba(20,34,26,0.4) 45%, transparent 85%)',
                        }}
                      />

                      {/* Info Container */}
                      <div className="absolute inset-0 p-5 flex flex-col justify-end text-start font-sans">
                        <span className="text-sm font-sans tracking-[0.2em] mb-1 font-bold text-gold/60 uppercase">
                          {activeCollection === 'prophets' ? t('home.collection1Tag') : activeCollection === 'history' ? t('home.collection2Tag') : t('home.collection3Tag')}
                        </span>

                        <h3
                          className={cn(
                            'font-bold leading-tight transition-colors duration-300 mb-1 font-sans',
                            isSelected ? 'text-gold' : 'text-[#F5EDD6] group-hover:text-gold',
                          )}
                          style={{
                            fontSize: 'clamp(18px, 2.2vw, 24px)',
                          }}
                        >
                          {t(`prophet.${prophet.id}`) ?? prophet.name}
                        </h3>

                        {/* Brief descriptive overview */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden leading-relaxed text-sm text-parchment/70 font-sans"
                            >
                              {t(`prophet.${prophet.id}.desc`) ?? prophet.description}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Progress Line with readable label */}
                        <div className="mt-4">
                          {!isSelected && progressTracker[prophet.id] > 0 && (
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] uppercase tracking-wider text-gold/70 font-bold font-sans">
                                {language === 'ar' ? 'التقدم' : 'Progress'}
                              </span>
                              <span className="text-[10px] font-bold text-gold font-sans">
                                {progressTracker[prophet.id]}%
                              </span>
                            </div>
                          )}
                          <div className="h-[2px] rounded-full overflow-hidden bg-white/5 relative">
                            <motion.div
                              className="h-full bg-gradient-to-r from-gold/40 via-gold to-gold/40 rounded-full"
                              animate={{ width: isSelected ? '100%' : progressTracker[prophet.id] > 0 ? `${progressTracker[prophet.id]}%` : '15%' }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* ══════════════════════════════════════
                  DIFFICULTY LEVEL SELECTOR (METICULOUSLY SYMMETRIC)
              ══════════════════════════════════════ */}
              <AnimatePresence>
                {selectedProphet && (
                  <motion.div
                    key="selector"
                    ref={levelSelectorRef}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full max-w-4xl mt-12 pb-5"
                  >
                    <div className="flex flex-col items-center gap-6 pt-8 border-t border-gold/15">
                      <span className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-gold/70">
                        {t('nav.chooseLevel') ?? 'Select level difficulty'}
                      </span>

                      {/* Flex wrapper for perfectly synchronized identical button panels */}
                      <div className="flex gap-5 justify-center flex-wrap w-full max-w-3xl px-4 font-sans">
                        {(['A2', 'B1', 'B2'] as Level[]).map((level) => {
                          const isAvailable = selectedProphet.availableLevels.includes(level);
                          const isActive = selectedLevel === level;
                          
                          // Custom backplate styling per level for active states
                          let hoverGlow = 'rgba(212,175,55,0.06)';
                          let textAccent = 'text-gold';
                          let baseBackplate = 'bg-[#120F0D]/90 border-white/10 hover:border-gold/50';
                          if (level === 'A2') {
                             hoverGlow = 'rgba(59,130,246,0.18)';
                             textAccent = 'text-[#93C5FD]';
                             baseBackplate = 'bg-[#0F1624]/95 border-[#3B82F6]/20 hover:border-[#3B82F6]/50';
                          } else if (level === 'B1') {
                             hoverGlow = 'rgba(16,185,129,0.18)';
                             textAccent = 'text-[#6EE7B7]';
                             baseBackplate = 'bg-[#091C13]/95 border-[#10B981]/20 hover:border-[#10B981]/50';
                          } else if (level === 'B2') {
                             hoverGlow = 'rgba(239,68,68,0.18)';
                             textAccent = 'text-[#FCA5A5]';
                             baseBackplate = 'bg-[#220D0D]/95 border-[#EF4444]/20 hover:border-[#EF4444]/50';
                          }

                          return (
                            <motion.button
                              key={level}
                              disabled={!isAvailable}
                              onClick={() => setSelectedLevel(level)}
                              whileHover={isAvailable ? { y: -3, scale: 1.02 } : {}}
                              whileTap={isAvailable ? { scale: 0.98 } : {}}
                              // Symmetrical strict sizing to fix abnormal B2 issue
                              className={cn(
                                'relative flex flex-col items-center justify-center gap-2 rounded-2xl border transition-all duration-300 w-[140px] sm:w-[200px] h-[110px] sm:h-[130px] flex-shrink-0 shadow-lg select-none',
                                isActive
                                  ? 'border-gold bg-gold/15 shadow-[0_0_25px_rgba(212,175,55,0.25)]'
                                  : isAvailable
                                    ? baseBackplate
                                    : 'opacity-20 border-white/5 cursor-not-allowed bg-black/40',
                              )}
                              style={{
                                boxShadow: isActive ? `0 0 25px ${hoverGlow}` : 'none'
                              }}
                            >
                              <span
                                className={cn(
                                  'font-bold leading-none transition-colors duration-300 text-3xl mb-1 font-sans',
                                  isActive ? 'text-gold' : textAccent,
                                )}
                              >
                                {formatNumber(level)}
                              </span>

                              {(() => {
                                const labelText = t(
                                  `nav.${
                                    level === 'A2'
                                      ? 'elementary'
                                      : level === 'B1'
                                        ? 'intermediate'
                                        : level === 'B2'
                                          ? 'upperIntermediate'
                                          : 'advanced'
                                  }`,
                                ) ?? LEVEL_LABELS[level];
                                const isLong = labelText.length > 12;
                                return (
                                  <span
                                    className={cn(
                                      "uppercase font-bold text-center px-2 font-sans leading-tight whitespace-normal break-words w-full",
                                      isLong 
                                        ? "text-xs tracking-[0.08em] text-parchment/70" 
                                        : "text-sm tracking-[0.18em] text-parchment/65"
                                    )}
                                  >
                                    {labelText}
                                  </span>
                                );
                              })()}

                              {isActive && (
                                <motion.div
                                  layoutId="active-level-indicator"
                                  className="absolute -bottom-[2.5px] left-1/4 right-1/4 h-[3.5px] rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                                />
                              )}
                            </motion.button>
                          );
                        })}
                      </div>

                      {/* Start Action CTA of Selector */}
                      <div className="pt-4">
                        <motion.button
                          disabled={!selectedLevel}
                          onClick={handleStart}
                          whileHover={selectedLevel ? { scale: 1.03 } : {}}
                          whileTap={selectedLevel ? { scale: 0.97 } : {}}
                          className={cn(
                            'relative rounded-full overflow-hidden transition-all duration-300',
                            'font-black tracking-[0.25em] uppercase text-sm',
                            selectedLevel
                              ? 'bg-gold text-[#0E0602] cursor-pointer shadow-[0_0_40px_rgba(212,175,55,0.32)] hover:brightness-110'
                              : 'bg-gold/10 text-parchment/20 cursor-not-allowed border border-white/5',
                          )}
                          style={{
                            padding: '16px 44px',
                          }}
                        >
                          {selectedLevel && (
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              style={{
                                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                              }}
                              animate={{ x: ['-120%', '160%'] }}
                              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                            />
                          )}

                          <span className="relative z-10 flex items-center gap-2">
                            {t('nav.begin') ?? 'Begin Journey'}
                            <motion.div
                              animate={selectedLevel ? { x: [0, 4, 0] } : { x: 0 }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                              style={{ transform: isRTL ? 'scaleX(-1)' : undefined }}
                              className="inline-flex items-center"
                            >
                              <ArrowRight size={14} />
                            </motion.div>
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <HeroSection 
        libraryRef={libraryRef}
        lastActive={lastActive}
        handleResumeLastActive={handleResumeLastActive}
        handleDirectLaunch={handleDirectLaunch}
      />

      <FeatureHighlights />

      {/* Decorative ambient lower blur blobs */}
      <div
        aria-hidden="true"
        className="fixed top-1/3 left-10 w-96 h-96 rounded-full pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="fixed bottom-1/4 right-10 w-[500px] h-[500px] rounded-full pointer-events-none opacity-45 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.025) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};