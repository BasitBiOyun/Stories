import React, { useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  BookOpen,
  Rocket,
  ArrowRight,
  Target,
  RotateCcw,
  Library,
  CheckCircle2,
  Award,
  Crown,
  Sparkles,
  Compass,
  Star,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useStoryProgress } from '../../contexts/StoryProgressContext';
import { cn } from '../../lib/utils';
import { BookData, Level } from '../../types';

// Cover images
// @ts-ignore
import meccaCover from '../../assets/images/mecca_cover_1781516729384.jpg';
// @ts-ignore
import yunusEmreCover from '../../assets/images/yunus_emre_cover.png';

interface SummaryDashboardProps {
  bookData: BookData;
  onFinish: () => void;
  onReviewStory?: () => void;
  onReadAgain?: () => void;
  onStartJourney?: (prophetId: string, level: Level) => void;
}

// All stories metadata for recommendations
const storiesMetadata = [
  {
    id: 'adam',
    nameEn: 'Prophet Adam',
    nameAr: 'آدم عليه السلام',
    descriptionEn: 'The first human, the knowledge of names, and the beginning of humanity.',
    descriptionAr: 'الإنسان الأول، وتعليم الأسماء، وبداية البشرية.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2FAdam_soil.png?alt=media&token=88abb96a-8dad-4f48-9b60-f30073f9dd9c',
    category: 'prophets'
  },
  {
    id: 'ibrahim',
    nameEn: 'Prophet Abraham',
    nameAr: 'إبراهيم عليه السلام',
    descriptionEn: 'The search for truth, the building of the Kaaba, and unwavering faith.',
    descriptionAr: 'البحث عن الحقيقة، وبناء الكعبة، والإيمان الراسخ الذي لا يتزعزع.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham.png?alt=media&token=14c045ca-7578-4268-9963-b4bedd5435be',
    category: 'prophets'
  },
  {
    id: 'musa',
    nameEn: 'Prophet Moses',
    nameAr: 'موسى عليه السلام',
    descriptionEn: 'The journey from the palace to the desert, and the liberation of a people.',
    descriptionAr: 'الرحلة من القصر إلى الصحراء، وتحرير بني إسرائيل من فرعون.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Moses%2Fmoses_cover.png?alt=media&token=3e9009f1-5f4d-47ed-9b5f-a6b58731d025',
    category: 'prophets'
  },
  {
    id: 'mecca',
    nameEn: 'Mecca Before Islam',
    nameAr: 'مكة قبل الإسلام',
    descriptionEn: 'The City and the Age of Ignorance: Mecca before the dawn of Islam.',
    descriptionAr: 'المدينة وعصر الجاهلية: مكة المكرمة قبل بزوغ فجر الإسلام.',
    image: meccaCover,
    category: 'history'
  },
  {
    id: 'yunusEmre',
    nameEn: 'Yunus Emre',
    nameAr: 'يونس أمره',
    descriptionEn: 'The story of a wise Anatolian dervish who taught love, humility, and devotion.',
    descriptionAr: 'قصة درويش الأناضول الحكيم الذي علّم الحب والتواضع والولاء.',
    image: yunusEmreCover,
    category: 'turkish'
  }
];

// Helper to resolve theme & configurations for each category dynamically
const getCategoryInfo = (categoryId: string) => {
  if (categoryId === 'history') {
    return {
      id: 'history',
      nameEn: 'Islamic History & Civilization',
      nameAr: 'التاريخ والحضارة الإسلامية',
      tagEn: 'History',
      tagAr: 'التاريخ',
      accentColor: '#10B981', // Emerald
      accentClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
      badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-600/40 shadow-inner',
      badgeTextEn: 'History',
      badgeTextAr: 'التاريخ',
      btnClass: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-950/50',
    };
  } else if (categoryId === 'turkish') {
    return {
      id: 'turkish',
      nameEn: 'Turkish-Islamic Heritage',
      nameAr: 'التراث التركي الإسلامي',
      tagEn: 'Turkish-Islamic Heritage',
      tagAr: 'التراث التركي الإسلامي',
      accentColor: '#22D3EE', // Cyan
      accentClass: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
      badgeClass: 'bg-[#0C1E30]/80 text-[#22D3EE] border-cyan-700/40 shadow-inner',
      badgeTextEn: 'Heritage',
      badgeTextAr: 'التراث',
      btnClass: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-950/50',
    };
  } else {
    return {
      id: 'prophets',
      nameEn: 'Stories of the Prophets',
      nameAr: 'قصص الأنبياء عليهم السلام',
      tagEn: 'Stories of the Prophets',
      tagAr: 'قصص الأنبياء',
      accentColor: '#D4AF37', // Gold
      accentClass: 'text-gold border-amber-500/20 bg-amber-500/10',
      badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-700/40 shadow-inner',
      badgeTextEn: 'Prophets',
      badgeTextAr: 'الأنبياء',
      btnClass: 'bg-amber-600 hover:bg-amber-700 shadow-amber-950/50',
    };
  }
};

export const SummaryDashboard: React.FC<SummaryDashboardProps> = ({
  bookData,
  onFinish,
  onReviewStory,
  onReadAgain,
  onStartJourney
}) => {
  const { formatNumber, isRTL, language, t } = useLanguage();
  const { stats } = useStoryProgress();

  const isArabic = language === 'ar';

  // Determine current story and category
  const currentStoryId = useMemo(() => {
    const idLower = bookData.id.toLowerCase();
    if (idLower.includes('adam')) return 'adam';
    if (idLower.includes('abraham')) return 'ibrahim';
    if (idLower.includes('moses')) return 'musa';
    if (idLower.includes('mecca')) return 'mecca';
    if (idLower.includes('yunusemre')) return 'yunusEmre';
    return 'adam';
  }, [bookData.id]);

  // Mark this specific story & level as completed in local storage
  useEffect(() => {
    localStorage.setItem(`completed_${currentStoryId}_${bookData.level}`, 'true');
  }, [currentStoryId, bookData.level]);

  // Category Configuration (Theming)
  const categoryInfo = useMemo(() => {
    if (currentStoryId === 'mecca') {
      return {
        id: 'history',
        nameEn: 'Islamic History & Civilization',
        nameAr: 'التاريخ والحضارة الإسلامية',
        tagEn: 'Islamic History & Civilization',
        tagAr: 'التاريخ والحضارة الإسلامية',
        accentColor: '#10B981', // Emerald
        accentClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
        bgGradient: 'from-[#041d13] via-[#092c1e] to-[#020e0a]',
        cardBg: 'bg-[#042416]/95 border-emerald-500/20',
        ringClass: 'text-emerald-500',
        ringTrack: 'text-emerald-500/10',
        badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-600/40 shadow-inner',
        glowStyle: 'rgba(16, 185, 129, 0.2)',
        btnClass: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-950/50',
        lightBgClass: 'bg-[#EDF2EE]/95',
        bannerIconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
        badgeTextEn: 'History',
        badgeTextAr: 'التاريخ',
        quote: {
          textAr: 'إِنَّ فِي قَصَصِهِمْ عِبْرَةً لِأُولِي الْأَلْبَابِ',
          textEn: '"In their stories there is truly a lesson for people of understanding."',
          sourceAr: 'سورة يوسف ١١١',
          sourceEn: 'Surah Yusuf 111'
        }
      };
    } else if (currentStoryId === 'yunusEmre') {
      return {
        id: 'turkish',
        nameEn: 'Turkish-Islamic Heritage',
        nameAr: 'التراث التركي الإسلامي',
        tagEn: 'Great Figures of Turkish-Islamic Heritage',
        tagAr: 'أعلام التراث التركي الإسلامي',
        accentColor: '#22D3EE', // Cyan
        accentClass: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
        bgGradient: 'from-[#041221] via-[#091e30] to-[#020a12]',
        cardBg: 'bg-[#0a1826]/95 border-cyan-500/20',
        ringClass: 'text-cyan-400',
        ringTrack: 'text-cyan-400/10',
        badgeClass: 'bg-[#0C1E30]/80 text-[#22D3EE] border-cyan-700/40 shadow-inner',
        glowStyle: 'rgba(34, 211, 238, 0.2)',
        btnClass: 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-950/50',
        lightBgClass: 'bg-[#EAF0F4]/95',
        bannerIconBg: 'bg-[#22D3EE]/10 border-[#22D3EE]/20 text-[#22D3EE]',
        badgeTextEn: 'Heritage',
        badgeTextAr: 'التراث',
        quote: {
          textAr: 'نحب المخلوق لأجل الخالق.',
          textEn: '"We love the created, for the sake of the Creator."',
          sourceAr: 'يونس أمره',
          sourceEn: 'Yunus Emre'
        }
      };
    } else {
      // Prophets
      return {
        id: 'prophets',
        nameEn: 'Stories of the Prophets',
        nameAr: 'قصص الأنبياء عليهم السلام',
        tagEn: 'Prophet Biography',
        tagAr: 'السيرة النبوية',
        accentColor: '#D4AF37', // Gold
        accentClass: 'text-gold border-amber-500/20 bg-amber-500/10',
        bgGradient: 'from-[#1a0c07] via-[#291710] to-[#0b0503]',
        cardBg: 'bg-[#14221a]/95 border-amber-400/20',
        ringClass: 'text-gold',
        ringTrack: 'text-gold/10',
        badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-700/40 shadow-inner',
        glowStyle: 'rgba(217, 119, 6, 0.2)',
        btnClass: 'bg-amber-600 hover:bg-amber-700 shadow-amber-950/50',
        lightBgClass: 'bg-parchment/95',
        bannerIconBg: 'bg-amber-500/10 border-amber-500/20 text-gold',
        badgeTextEn: 'Prophets',
        badgeTextAr: 'الأنبياء',
        quote: {
          textAr: 'إِنَّ فِي قَصَصِهِمْ عِبْرَةً لِأُولِي الْأَلْبَابِ',
          textEn: '"In their stories there is truly a lesson for people of understanding."',
          sourceAr: 'سورة يوسف ١١١',
          sourceEn: 'Surah Yusuf 111'
        }
      };
    }
  }, [currentStoryId]);

  // Calculations
  const chaptersCount = useMemo(() => {
    return bookData.pages.filter(p => p.type === 'story').length;
  }, [bookData.pages]);

  const finalScore = stats.finalScore;

  // Metadata of the current story
  const currentStoryMeta = useMemo(() => {
    return storiesMetadata.find(s => s.id === currentStoryId);
  }, [currentStoryId]);

  // Clean success message without hardcoded text prefixing
  const successMessage = useMemo(() => {
    if (isArabic) {
      const name = currentStoryMeta ? currentStoryMeta.nameAr : bookData.title;
      return `لقد أكملت قراءة قصة ${name} (${bookData.level}) بنجاح.`;
    } else {
      const name = currentStoryMeta ? currentStoryMeta.nameEn : bookData.title;
      return `You completed ${name} (${bookData.level}) successfully.`;
    }
  }, [isArabic, currentStoryMeta, bookData.level, bookData.title]);

  // Achievement Title & Subtitle based on Score Thresholds
  const scoreResult = useMemo(() => {
    if (finalScore !== null && finalScore >= 90) {
      return {
        badgeNameEn: 'Mastered',
        badgeNameAr: 'متقن القصة',
        colorClass: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
        descEn: 'Superb! Perfect comprehension and thorough mastery of vocabulary.',
        descAr: 'رائع جداً! فهم متكامل وإتقان تام للمفردات والدروس المستفادة.'
      };
    } else if (finalScore !== null && finalScore >= 70) {
      return {
        badgeNameEn: 'Successful Reader',
        badgeNameAr: 'قارئ متميز',
        colorClass: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
        descEn: 'Excellent! Strong understanding and active participation.',
        descAr: 'ممتاز! إدراك قوي ومشاركة نشطة في جميع أقسام القصة.'
      };
    } else if (finalScore !== null) {
      return {
        badgeNameEn: 'Story Explorer',
        badgeNameAr: 'مستكشف القصة',
        colorClass: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
        descEn: 'Good job! Completed the story and explored new words.',
        descAr: 'عمل رائع! أكملت القصة واستكشفت كلمات ومرادفات جديدة.'
      };
    } else {
      // No final score
      return {
        badgeNameEn: 'Journey Explorer',
        badgeNameAr: 'مستكشف الرحلة',
        colorClass: 'text-slate-400 bg-slate-400/10 border-slate-400/30',
        descEn: 'Completed! Read all chapters and mastered key concepts.',
        descAr: 'مكتمل! قرأت جميع الفصول وتعرفت على المفاهيم الأساسية.'
      };
    }
  }, [finalScore]);

  // Dynamic recommendation logic for primary "What's Next" CTA
  const nextRec = useMemo(() => {
    const levels: Level[] = ['A2', 'B1', 'B2'];
    const currentLevelIdx = levels.indexOf(bookData.level);

    // 1. Next level of same story
    if (currentLevelIdx !== -1 && currentLevelIdx < levels.length - 1) {
      const nextLevel = levels[currentLevelIdx + 1];
      const meta = storiesMetadata.find(s => s.id === currentStoryId);
      if (meta) {
        return {
          storyId: currentStoryId,
          level: nextLevel,
          metadata: meta
        };
      }
    }

    // 2. Other story in same category, starting at Level A2
    const sameCategoryOthers = storiesMetadata.filter(s => s.category === categoryInfo.id && s.id !== currentStoryId);
    if (sameCategoryOthers.length > 0) {
      return {
        storyId: sameCategoryOthers[0].id,
        level: 'A2' as Level,
        metadata: sameCategoryOthers[0]
      };
    }

    // 3. Story in another category, starting at Level A2
    const otherCategories = storiesMetadata.filter(s => s.id !== currentStoryId);
    if (otherCategories.length > 0) {
      return {
        storyId: otherCategories[0].id,
        level: 'A2' as Level,
        metadata: otherCategories[0]
      };
    }

    return null;
  }, [currentStoryId, bookData.level, categoryInfo.id]);

  // Dynamic recommendation logic for other stories at the same level
  const sameLevelStories = useMemo(() => {
    const currentLevel = bookData.level;
    
    // Filter out current story
    const others = storiesMetadata.filter(s => s.id !== currentStoryId);
    
    // Map them to include their completion status for this level
    const mapped = others.map(story => {
      const isCompleted = localStorage.getItem(`completed_${story.id}_${currentLevel}`) === 'true';
      return {
        ...story,
        isCompleted
      };
    });
    
    // Sort: incomplete first, completed last
    mapped.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) return 1;
      if (!a.isCompleted && b.isCompleted) return -1;
      return 0;
    });
    
    // Return up to 4 recommendations
    return mapped.slice(0, 4);
  }, [bookData.level, currentStoryId]);

  // Localized section header for other stories at the same level
  const moreStoriesHeader = useMemo(() => {
    if (isArabic) {
      return `قصص أخرى في المستوى ${bookData.level}`;
    } else {
      return `More Stories at ${bookData.level} Level`;
    }
  }, [isArabic, bookData.level]);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 overflow-y-auto w-full min-h-screen bg-gradient-to-b py-12 px-6 md:py-16 md:px-12 flex flex-col items-center justify-start custom-scrollbar",
        categoryInfo.bgGradient
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Subtle Full-Screen Ambient Glow Overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[150px] bg-white" />
        <div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-25 blur-[180px]"
          style={{ backgroundColor: categoryInfo.accentColor }}
        />
      </div>

      {/* Main Content Wrapper (Appropriate max-width so content doesn't disperse) */}
      <div className="w-full max-w-6xl relative z-10 flex flex-col gap-16">
        
        {/* Animated Main Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          
          {/* LEFT COLUMN: VISUAL CONGRATULATIONS & MAIN SUMMARY ACCENT */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-10">
            
            <div className="space-y-8">
              {/* Level & Category Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={cn("px-4 py-2 rounded-full text-[13px] font-bold uppercase tracking-wide border", categoryInfo.badgeClass)}>
                  {isArabic ? categoryInfo.nameAr : categoryInfo.nameEn}
                </span>
                <span className="px-4 py-2 rounded-full text-[13px] font-bold uppercase tracking-wide bg-white/5 border border-white/10 text-parchment/90 shadow-inner">
                  {t('nav.level')} {formatNumber(bookData.level)}
                </span>
              </div>

              {/* Achievement Badge Visual Shield */}
              <div className="relative py-4 flex flex-col items-center text-center lg:items-start lg:text-left">
                
                <div className="relative mb-8 self-center lg:self-start">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 scale-[1.3] rounded-full opacity-15"
                    style={{ border: `1px dashed ${categoryInfo.accentColor}` }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-xl border"
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${categoryInfo.accentColor}20, ${categoryInfo.accentColor}40)`,
                      borderColor: `${categoryInfo.accentColor}40`
                    }}
                  >
                    <Trophy className="w-16 h-16 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]" />
                    <div className="absolute -top-2 -right-2 bg-black/40 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </motion.div>
                </div>

                <span className="text-[13px] md:text-[14px] uppercase tracking-wider text-[#F5EDD6]/60 font-bold mb-3">
                  {isArabic ? 'إنجاز متميز' : 'JOURNEY COMPLETED'}
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight text-white leading-tight mb-4 font-display">
                  {isArabic ? 'تهانينا لك!' : 'Congratulations!'}
                </h1>

                <p className="text-lg md:text-[19px] font-medium text-[#F5EDD6]/90 leading-relaxed max-w-xl mb-6">
                  {successMessage}
                </p>

                {/* Level Achievement Badge Description */}
                <div className={cn("inline-flex flex-col p-5 rounded-2xl border w-full max-w-md", scoreResult.colorClass)}>
                  <span className="text-[14px] md:text-[15px] font-black uppercase tracking-wide mb-1.5 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {isArabic ? scoreResult.badgeNameAr : scoreResult.badgeNameEn}
                  </span>
                  <span className="text-[13px] md:text-[14px] opacity-90 leading-relaxed">
                    {isArabic ? scoreResult.descAr : scoreResult.descEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Back to library button */}
            <div className="pt-4 max-w-md">
              <button
                onClick={onFinish}
                className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-parchment font-bold text-[14px] md:text-[16px] uppercase tracking-wide py-4.5 px-6 transition-all shadow-sm"
              >
                <Library className="w-5 h-5" />
                {isArabic ? 'المكتبة الرئيسية' : 'Back to Library'}
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: SUMMARY DETAILS, QUOTE, & NEXT RECOMMENDED */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-12">
            
            {/* SECTION: LEARNING SUMMARY */}
            <div className="space-y-6">
              <h3 className="text-[15px] md:text-[16px] uppercase tracking-wider text-[#F5EDD6]/40 font-black flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryInfo.accentColor }} />
                {isArabic ? 'ملخص التعلم' : 'LEARNING SUMMARY'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Stats Card 1: Chapters */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center gap-4 hover:border-white/15 transition-colors">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 text-white">
                    <BookOpen className="w-7 h-7" style={{ color: categoryInfo.accentColor }} />
                  </div>
                  <div>
                    <span className="block text-[13px] md:text-[14px] uppercase tracking-wide text-[#F5EDD6]/50">
                      {isArabic ? 'الفصول المقروءة' : 'Chapters Completed'}
                    </span>
                    <span className="block text-2xl md:text-[28px] font-black text-white mt-1 tabular-nums">
                      {formatNumber(chaptersCount)}
                    </span>
                  </div>
                </div>

                {/* Stats Card 2: Words Explored */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center gap-4 hover:border-white/15 transition-colors">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 text-white">
                    <Compass className="w-7 h-7" style={{ color: categoryInfo.accentColor }} />
                  </div>
                  <div>
                    <span className="block text-[13px] md:text-[14px] uppercase tracking-wide text-[#F5EDD6]/50">
                      {isArabic ? 'الكلمات المستكشفة' : 'Words Explored'}
                    </span>
                    <span className="block text-2xl md:text-[28px] font-black text-white mt-1 tabular-nums">
                      {formatNumber(stats.wordsClicked.size)}
                    </span>
                  </div>
                </div>

                {/* Stats Card 3: Challenges Completed */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center gap-4 hover:border-white/15 transition-colors">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 text-white">
                    <Rocket className="w-7 h-7" style={{ color: categoryInfo.accentColor }} />
                  </div>
                  <div>
                    <span className="block text-[13px] md:text-[14px] uppercase tracking-wide text-[#F5EDD6]/50">
                      {isArabic ? 'التمارين والمهام' : 'Challenges Completed'}
                    </span>
                    <span className="block text-2xl md:text-[28px] font-black text-white mt-1 tabular-nums">
                      {formatNumber(stats.exercisesCompleted.size)}
                    </span>
                  </div>
                </div>

                {/* Stats Card 4: Final Challenge Score with Progress Ring */}
                {finalScore !== null ? (
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center justify-between hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 text-white">
                        <Target className="w-7 h-7" style={{ color: categoryInfo.accentColor }} />
                      </div>
                      <div>
                        <span className="block text-[13px] md:text-[14px] uppercase tracking-wide text-[#F5EDD6]/50">
                          {isArabic ? 'نقاط التحدي' : 'Challenge Score'}
                        </span>
                        <span className="block text-2xl md:text-[28px] font-black text-white mt-1 tabular-nums">
                          {formatNumber(finalScore)}%
                        </span>
                      </div>
                    </div>

                    {/* Dynamic SVG Circular Progress */}
                    <div className="relative w-12 h-12">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className={categoryInfo.ringTrack}
                          stroke="currentColor"
                          strokeWidth="3.5"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className={categoryInfo.ringClass}
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeDasharray={`${finalScore}, 100`}
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  // Quiz not taken state
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center gap-4 hover:border-white/15 transition-colors">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 text-white/40">
                      <Target className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="block text-[13px] md:text-[14px] uppercase tracking-wide text-[#F5EDD6]/50">
                        {isArabic ? 'الاختبار النهائي' : 'Final Challenge'}
                      </span>
                      <span className="block text-sm font-semibold text-[#F5EDD6]/40 mt-1">
                        {isArabic ? 'غير مكتمل بعد' : 'Not completed'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SECTION: REFLECTION / QUOTE */}
            {categoryInfo.quote && (
              <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 text-center space-y-4">
                <p 
                  className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-white font-serif italic"
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {isArabic ? categoryInfo.quote.textAr : categoryInfo.quote.textEn}
                </p>
                <span className="block text-[13px] md:text-[14px] font-bold uppercase tracking-wider text-[#F5EDD6]/50">
                  — {isArabic ? categoryInfo.quote.sourceAr : categoryInfo.quote.sourceEn}
                </span>
              </div>
            )}

            {/* SECTION: WHAT'S NEXT & RECOMMENDED ACTION */}
            {nextRec && (
              <div className="space-y-4">
                <h3 className="text-[15px] md:text-[16px] uppercase tracking-wider text-[#F5EDD6]/40 font-black flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryInfo.accentColor }} />
                  {isArabic ? 'الخطوة التالية في الرحلة' : 'WHAT\'S NEXT?'}
                </h3>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-white/15 transition-all">
                  
                  {/* Recommendation Card Info */}
                  <div className="flex items-center gap-5 w-full md:w-auto">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border border-white/10 flex-shrink-0 bg-black/20">
                      <img 
                        src={nextRec.metadata.image} 
                        alt={nextRec.metadata.nameEn} 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className={cn("px-2.5 py-1 rounded text-[11px] font-bold uppercase border", categoryInfo.badgeClass)}>
                          {nextRec.level}
                        </span>
                        <span className="text-[13px] text-[#F5EDD6]/60 uppercase tracking-wide font-bold">
                          {isArabic ? nextRec.metadata.nameAr : nextRec.metadata.nameEn}
                        </span>
                      </div>
                      <h4 className="text-lg md:text-[20px] font-bold text-white font-display">
                        {isArabic ? nextRec.metadata.nameAr : nextRec.metadata.nameEn}
                      </h4>
                      <p className="text-[14px] md:text-[15px] text-[#F5EDD6]/70 line-clamp-2 leading-relaxed max-w-md">
                        {isArabic ? nextRec.metadata.descriptionAr : nextRec.metadata.descriptionEn}
                      </p>
                    </div>
                  </div>

                  {/* Recommend Button Action (Primary CTA) */}
                  <div className="w-full md:w-auto flex-shrink-0">
                    <button
                      onClick={() => onStartJourney && onStartJourney(nextRec.storyId, nextRec.level)}
                      className={cn(
                        "w-full md:w-auto group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-bold text-[14px] md:text-[16px] uppercase tracking-wide transition-all",
                        categoryInfo.btnClass
                      )}
                    >
                      {isArabic ? 'مواصلة الرحلة' : 'Continue Journey'}
                      {isRTL ? (
                        <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                      ) : (
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      )}
                    </button>
                  </div>

                </div>
              </div>
            )}

          </div>

        </motion.div>

        {/* SECTION: MORE STORIES AT SAME LEVEL */}
        {sameLevelStories.length > 0 && (
          <div className="space-y-6 pt-10 border-t border-white/10">
            <h3 className="text-[15px] md:text-[16px] uppercase tracking-wider text-[#F5EDD6]/40 font-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryInfo.accentColor }} />
              {moreStoriesHeader}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sameLevelStories.map(story => {
                const storyCategoryInfo = getCategoryInfo(story.category);
                return (
                  <div 
                    key={story.id} 
                    className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.07] transition-all group shadow-lg"
                  >
                    {/* Image & Badges */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/20">
                      <img 
                        src={story.image} 
                        alt={isArabic ? story.nameAr : story.nameEn} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Badges Overlay */}
                      <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 justify-between items-center">
                        <span className={cn("px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wide border", storyCategoryInfo.badgeClass)}>
                          {isArabic ? storyCategoryInfo.badgeTextAr : storyCategoryInfo.badgeTextEn}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/10 border border-white/10 text-white shadow-inner uppercase tracking-wide">
                          {bookData.level}
                        </span>
                      </div>

                      {/* Completed Overlay Badge */}
                      {story.isCompleted && (
                        <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/95 border border-emerald-400/30 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {isArabic ? 'مكتمل' : 'Completed'}
                        </div>
                      )}
                    </div>

                    {/* Info and CTA */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-2">
                        <h4 className="text-[18px] md:text-[20px] font-bold text-white font-display line-clamp-1">
                          {isArabic ? story.nameAr : story.nameEn}
                        </h4>
                        <p className="text-[14px] md:text-[15px] text-[#F5EDD6]/70 line-clamp-2 leading-relaxed">
                          {isArabic ? story.descriptionAr : story.descriptionEn}
                        </p>
                      </div>

                      <button
                        onClick={() => onStartJourney && onStartJourney(story.id, bookData.level)}
                        className={cn(
                          "w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-white font-bold text-[14px] md:text-[15px] uppercase tracking-wide transition-all shadow-md group-hover:opacity-95",
                          story.isCompleted 
                            ? "bg-white/10 hover:bg-white/20 border border-white/10" 
                            : storyCategoryInfo.btnClass
                        )}
                      >
                        {story.isCompleted ? (
                          <>
                            <RotateCcw className="w-4 h-4" />
                            {isArabic ? 'قراءة مرة أخرى' : 'Read Again'}
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-4 h-4" />
                            {isArabic ? 'ابدأ القصة' : 'Start Story'}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECONDARY OPERATIONS LINK */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
          <button
            onClick={onReviewStory ?? onFinish}
            className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-4 text-[13px] md:text-[14px] font-bold uppercase tracking-wide text-parchment transition-all"
          >
            <Library className="h-4.5 w-4.5" style={{ color: categoryInfo.accentColor }} />
            {isArabic ? 'مراجعة هذه القصة' : 'Review This Story'}
          </button>

          <button
            onClick={onReadAgain ?? onFinish}
            className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-4 text-[13px] md:text-[14px] font-bold uppercase tracking-wide text-parchment transition-all"
          >
            <RotateCcw className="h-4.5 w-4.5" style={{ color: categoryInfo.accentColor }} />
            {isArabic ? 'قراءة مرة أخرى' : 'Read Again'}
          </button>
        </div>

      </div>
    </div>
  );
};
