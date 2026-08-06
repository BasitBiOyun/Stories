import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Clock, Zap, ArrowRight, BookOpen, GraduationCap, Languages } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Level } from '../../types';
import { cn } from '../../lib/utils';

interface HeroSectionProps {
  libraryRef: React.RefObject<HTMLDivElement | null>;
  lastActive: { prophetId: string; level: Level } | null;
  handleResumeLastActive: () => void;
  handleDirectLaunch: (prophetId: string, level: Level) => void;
}

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

export const HeroSection: React.FC<HeroSectionProps> = ({
  libraryRef,
  lastActive,
  handleResumeLastActive,
  handleDirectLaunch
}) => {
  const { language, t, formatNumber, isRTL } = useLanguage();

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative z-20 text-center pt-16 pb-12 px-6 w-full max-w-5xl flex flex-col items-center">
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full"
      >
        <motion.div
          variants={heroItemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-5xl mb-7 text-center md:text-start animate-fadeIn"
        >
          {/* Icon with dual borders and golden radial glow */}
          <div className="relative group flex-shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold/30 via-amber-600/20 to-gold/30 rounded-[2rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-[1.75rem] bg-[#110B07] border-2 border-gold/40 flex items-center justify-center text-gold shadow-[0_0_40px_rgba(212,175,55,0.25)] overflow-hidden p-3 transform duration-500">
              <div className="absolute inset-1 border border-solid border-gold/10 rounded-[1.4rem] pointer-events-none" />
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/home_icon.png?alt=media&token=d8075082-0856-42d8-bc20-db4d7ce86c99"
                alt="Sacred Heritage"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="hidden md:block w-[2px] h-24 bg-gradient-to-b from-transparent via-gold/40 to-transparent self-stretch" />
          <div className="md:hidden w-24 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent my-1" />

          <h1
            className="font-black leading-[1.1] tracking-tight text-[#F5EDD6] text-center md:text-start drop-shadow-[0_4px_25px_rgba(0,0,0,0.92)] select-none"
            style={{ fontSize: 'clamp(24px, 4.5vw, 58px)' }}
          >
            {t('home.heroTitle')}
          </h1>
        </motion.div>

        <motion.p
          variants={heroItemVariants}
          className="leading-relaxed max-w-2xl mx-auto mb-9 text-parchment/80 text-base md:text-lg"
        >
          {t('home.heroSubtitle')}
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div variants={heroItemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => scrollToSection(libraryRef)}
            className="px-8 py-3.5 bg-gold hover:bg-gold/90 text-[#0E0B07] rounded-full font-black tracking-widest text-sm uppercase flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-gold/15"
          >
            <Compass size={16} />
            {t('home.exploreLibrary')}
          </button>

          {lastActive ? (
            <button
              onClick={handleResumeLastActive}
              className="px-8 py-3.5 bg-transparent hover:bg-gold/10 text-gold border-2 border-gold/40 hover:border-gold rounded-full font-black tracking-widest text-sm uppercase flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Clock size={16} />
              {language === 'ar' ? 'استئناف القراءة' : 'Resume Reading'}
            </button>
          ) : (
            <button
              onClick={() => handleDirectLaunch('adam', 'A2')}
              className="px-8 py-3.5 bg-transparent hover:bg-gold/10 text-gold border-2 border-gold/40 hover:border-gold rounded-full font-black tracking-widest text-sm uppercase flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Zap size={16} />
              {language === 'ar' ? 'ابدأ الآن' : 'Quick Start'}
            </button>
          )}
        </motion.div>

        {/* Continue Journey Strip — appears under hero CTAs when relevant */}
        <AnimatePresence>
          {lastActive && (
            <motion.button
              onClick={handleResumeLastActive}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mb-10 w-full max-w-xl text-start bg-gradient-to-r from-gold/15 via-[#16120D] to-[#120F0C] border border-gold/30 rounded-2xl px-5 py-4 flex items-center justify-between gap-5 shadow-2xl backdrop-blur-md hover:border-gold/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.18)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold shadow-inner">
                  <Clock size={18} className="animate-pulse" />
                </div>
                <div className="text-start min-w-0">
                  <div className="text-[11px] text-gold/60 font-sans uppercase tracking-[0.22em]">
                    {language === 'ar' ? 'متابعة الكتاب السابق' : 'Pick up where you left off'}
                  </div>
                  <div className="text-base font-sans text-[#F5EDD6] font-semibold mt-0.5 flex items-center gap-2 flex-wrap truncate">
                    {t(`prophet.${lastActive.prophetId}`) ?? lastActive.prophetId}
                    <span className="text-xs font-sans font-extrabold bg-gold/15 text-gold px-2 py-0.5 rounded border border-gold/30 uppercase tracking-wider">
                      {lastActive.level}
                    </span>
                  </div>
                </div>
              </div>
              <ArrowRight size={18} className="flex-shrink-0 text-gold" style={{ transform: isRTL ? 'scaleX(-1)' : undefined }} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* ── Trust Cards Section — Grouped into 3 premium high-impact pedagogical cards ── */}
        <motion.div
          variants={heroItemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mt-6 px-4"
        >
          {[
            {
              value: `${formatNumber(15)} Books / ${formatNumber(5)} Stories`,
              valueAr: `١٥ مجلداً / ٥ قصص`,
              label: language === 'ar' ? 'المكتبة التراثية الشاملة' : 'Rich Heritage Library',
              desc: language === 'ar' ? 'رحلة أدبية وتربوية متكاملة عبر كتب وقصص مأثورة وملهمة.' : 'A robust digital curriculum spanning beautiful narratives, interactive vocabulary, and deep reading paths.',
              icon: BookOpen,
              bgBorderGlowClass: 'bg-[#13251c]/95 border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_15px_60px_rgba(16,185,129,0.1)]',
              iconClass: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/5 group-hover:border-emerald-400/55 group-hover:bg-emerald-500/10',
              valueColor: 'text-emerald-400',
            },
            {
              value: 'CEFR A2–B2 Levels',
              valueAr: 'منهج A2–B2 (الصفوف ٥–١٢)',
              label: language === 'ar' ? 'التوافق المعياري اللغوي' : 'Pedagogical Standards',
              desc: language === 'ar' ? 'محتوى لغوي متدرج تدريجياً لضمان تطور واكتساب سليم للغة.' : 'Structured lexical density and language grades fully aligned to international CEFR learning framework milestones.',
              icon: GraduationCap,
              bgBorderGlowClass: 'bg-[#0f1f2c]/95 border-sky-500/20 hover:border-sky-400 hover:shadow-[0_15px_60px_rgba(14,165,233,0.1)]',
              iconClass: 'text-sky-400 border-sky-500/25 bg-sky-500/5 group-hover:border-sky-400/55 group-hover:bg-sky-500/10',
              valueColor: 'text-sky-400',
            },
            {
              value: 'Bilingual EN / AR',
              valueAr: 'محتوى ثنائي اللغة',
              label: language === 'ar' ? 'التمكن اللغوي المزدوج' : 'Dual-Language Mastery',
              desc: language === 'ar' ? 'ترجمة موازية وطرق تفاعلية مبتكرة لترسيخ الكلمات والمفاهيم بدقة وسهولة.' : 'Seamless side-by-side translated layouts making heritage stories instantly legible in both English and Arabic.',
              icon: Languages,
              bgBorderGlowClass: 'bg-[#221c12]/95 border-amber-500/20 hover:border-amber-400 hover:shadow-[0_15px_60px_rgba(245,158,11,0.1)]',
              iconClass: 'text-amber-400 border-amber-500/25 bg-amber-500/5 group-hover:border-amber-400/55 group-hover:bg-amber-500/10',
              valueColor: 'text-amber-400',
            }
          ].map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className={cn(
                  "group relative overflow-hidden p-8 rounded-[32px] border-2 shadow-[0_15px_45px_rgba(0,0,0,0.85)] backdrop-blur-md flex flex-col justify-between transition-all duration-300 min-h-[300px]",
                  card.bgBorderGlowClass
                )}
              >
                {/* Subtle Top Inner Highlight overlay */}
                <div className="absolute inset-x-0 -top-[1.5px] h-[1.5px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                
                {/* Centered Indicator Icon */}
                <div className="flex justify-center mb-4">
                  <div className={cn(
                    'w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 shadow-xl', 
                    card.iconClass
                  )}>
                    <IconComponent size={26} />
                  </div>
                </div>

                {/* Text Contents with exact vertical spacing / heights so everything matches perfectly */}
                <div className="flex-1 flex flex-col items-center text-center justify-start">
                  {/* Meta Value Indicator */}
                  <div className={cn("text-xl md:text-2xl font-black tracking-tight font-sans drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] h-10 flex items-center justify-center", card.valueColor)}>
                    {language === 'ar' ? card.valueAr : card.value}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-base md:text-lg font-bold text-[#F5EDD6] mt-3 mb-2 font-sans tracking-wide min-h-[2.5rem] flex items-center justify-center">
                    {card.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-parchment/75 leading-relaxed font-sans font-normal mt-1">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
