import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Download,
  Compass, 
  CheckCircle, 
  Heart,
  Scale,
  Award,
  Layers,
  Users,
  BookOpenCheck,
  Volume2,
  ShieldCheck,
  School
} from '../ui/icons';

interface AppFeature {
  id: number;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  icon: React.ComponentType<any>;
  theme: {
    iconStyle: string;
    hoverStyle: string;
    textStyle: string;
  };
}

const appFeatures: AppFeature[] = [
  {
    id: 1,
    titleEn: 'Interactive Bilingual Text',
    titleAr: 'قراءة تفاعلية ثنائية اللغة',
    descEn: 'Read paired parallel text with side-by-side English & Arabic paragraphs or select focused single-language layouts.',
    descAr: 'اقرأ نصوصاً متوازية ومصطفة جنباً إلى جنب باللغتين الإنجليزية والعربية مع مرونة تامة لتفعيل أو إلغاء لغة للتركيز.',
    icon: BookOpen,
    theme: {
      iconStyle: 'text-gold bg-gold/10 border-gold/20',
      hoverStyle: 'hover:border-gold/30',
      textStyle: 'group-hover:text-gold'
    }
  },
  {
    id: 2,
    titleEn: 'CEFR Graduated Difficulty',
    titleAr: 'تدرج مستويات مواءمة CEFR',
    descEn: 'Systematically progress through carefully designed volumes mapping syntax and vocab to levels A2, B1, and B2.',
    descAr: 'تدرج تعليمي مرن ومحسّن عبر مستويات الإطار الأوروبي المشترك A2 و B1 و B2 لتسهيل نمو الحصيلة اللغوية والمفردات.',
    icon: Layers,
    theme: {
      iconStyle: 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20',
      hoverStyle: 'hover:border-[#D4AF37]/30',
      textStyle: 'group-hover:text-[#D4AF37]'
    }
  },
  {
    id: 3,
    titleEn: 'Active Values Alignment',
    titleAr: 'غرس وتنمية القيم والأخلاق',
    descEn: 'Crucial human values like personal dignity, environmental empathy, justice, and sincerity are built into every story.',
    descAr: 'محاور كبرى تتجاوز المعرفة البسيطة لتثبيت معاني الكرامة الإنسانية، التفكير العقلاني، والعدالة الاجتماعية.',
    icon: Heart,
    theme: {
      iconStyle: 'text-red-400 bg-red-500/10 border-red-500/20',
      hoverStyle: 'hover:border-red-500/30',
      textStyle: 'group-hover:text-red-400'
    }
  },
  {
    id: 4,
    titleEn: 'Bespoke Teacher Guides',
    titleAr: 'أدلة المعلمين والمنهج التربوي',
    descEn: 'Fully detailed moral rungs, pedagogical goals, assessment metrics, and complete classroom talking points.',
    descAr: 'بوابات مخصصة تمنح المعلمين والمنسقين أدوات تقييم تربوية، خطط دروس فصلية، ومحاور للنقاش مع الطلاب.',
    icon: GraduationCap,
    theme: {
      iconStyle: 'text-[#22D3EE] bg-[#22D3EE]/10 border-[#22D3EE]/20',
      hoverStyle: 'hover:border-[#22D3EE]/40',
      textStyle: 'group-hover:text-[#22D3EE]'
    }
  },
  {
    id: 5,
    titleEn: 'Contextual Word Glossaries',
    titleAr: 'قواميس الكلمات السياقية',
    descEn: 'Interact directly with difficult highlighted terms to immediately view precise context explanations and word roots.',
    descAr: 'تفاعل مباشرة مع الكلمات الصعبة المميزة لمعاينة شروحاتها السياقية الدقيقة وجذورها اللغوية على الفور.',
    icon: FileText,
    theme: {
      iconStyle: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      hoverStyle: 'hover:border-blue-500/30',
      textStyle: 'group-hover:text-blue-400'
    }
  },
  {
    id: 6,
    titleEn: 'Narrated Audio Syncing',
    titleAr: 'دعم صوتي وتتبع لفظي حقيقي',
    descEn: 'Increase pronunciation and active reading confidence with professional human audio synchronized word-by-word.',
    descAr: 'استمع للتسجيلات الصوتية المتقنة والمسجلة خصيصاً بنقرة زر واحدة لمتابعة الكلمات وبناء عادة نطق صحيحة وخالية من التردد.',
    icon: Volume2,
    theme: {
      iconStyle: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      hoverStyle: 'hover:border-amber-500/30',
      textStyle: 'group-hover:text-amber-400'
    }
  },
  {
    id: 7,
    titleEn: 'Printable Portals & Worksheets',
    titleAr: 'مواد دراسية وأوراق عمل مرافقة',
    descEn: 'Equipped with direct utility links to companion self-study worksheets, interactive pages, and vocabulary builders.',
    descAr: 'مزود بروابط مباشرة للوصول إلى أوراق العمل المرافقة للدراسة الذاتية، الصفحات التفاعلية، وأدوات بناء المفردات.',
    icon: Download,
    theme: {
      iconStyle: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      hoverStyle: 'hover:border-emerald-500/30',
      textStyle: 'group-hover:text-emerald-400'
    }
  },
  {
    id: 8,
    titleEn: 'Civilization & Cultural Depth',
    titleAr: 'عمق حضاري وثقافي أصيل',
    descEn: 'Integrates Anatolian history, dervish poetry, and the geographic progression of major world civilizations.',
    descAr: 'رحلة عبر قصص تاريخية تنبض بالحياة، مستلهمة من الأدب والآثار المادية لنقوش وشعراء الحضارة الإسلامية المأثورة.',
    icon: Compass,
    theme: {
      iconStyle: 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20',
      hoverStyle: 'hover:border-[#D4AF37]/30',
      textStyle: 'group-hover:text-gold'
    }
  },
  {
    id: 9,
    titleEn: 'Chapter Review Exercises',
    titleAr: 'تدريبات مراجعة بنهاية الفصول',
    descEn: 'Reinforce what is learned with fun comprehension tests, true/false scenarios, and word play.',
    descAr: 'اختبر حصيلتك بنهاية كل باب مع أسئلة فهم ذكية، وتوصيل للمرادفات، وألعاب تفاعلية مبهجة لترسيخ التعلم.',
    icon: CheckCircle,
    theme: {
      iconStyle: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
      hoverStyle: 'hover:border-yellow-500/30',
      textStyle: 'group-hover:text-yellow-500'
    }
  },
  {
    id: 10,
    titleEn: 'Academic Progress Bookmarks',
    titleAr: 'إنجاز لغوي وتوثيق مسار',
    descEn: 'Keeps direct automatic local bookmarks of finished books, reading scores, and vocabulary achievements.',
    descAr: 'ترسيم آلي مرن يسجل درجات الحفظ، والكلمات المنجزة، والتقدم القرائي ليزدهر التعلم خطوة بخطوة.',
    icon: Award,
    theme: {
      iconStyle: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      hoverStyle: 'hover:border-purple-500/30',
      textStyle: 'group-hover:text-purple-400'
    }
  },
  {
    id: 11,
    titleEn: 'Family & Caregiver Gateways',
    titleAr: 'بوابة الأسرة والمربين الخاصة',
    descEn: 'Actionable discussion points detailing how to address and reinforce values at home across generations.',
    descAr: 'إرشادات عائلية ممتازة تسهّل نقاش مفاهيم الأخلاق الحميدة، الصبر، والمثابرة مع الأطفال في بيئة منزلية دافئة.',
    icon: Users,
    theme: {
      iconStyle: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      hoverStyle: 'hover:border-indigo-500/30',
      textStyle: 'group-hover:text-indigo-400'
    }
  },
  {
    id: 12,
    titleEn: 'Islamic Character & Ethics',
    titleAr: 'القيم والمنظور الأخلاقي الإسلامي',
    descEn: 'Connects story virtues with fundamental Islamic morals, prophetic character references, and spiritual ethics.',
    descAr: 'يربط قيم القصص بالأخلاق الإسلامية والشمائل النبوية الشريفة والقيم الأخلاقية الراسخة والنبيلة.',
    icon: ShieldCheck,
    theme: {
      iconStyle: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      hoverStyle: 'hover:border-cyan-500/30',
      textStyle: 'group-hover:text-cyan-400'
    }
  },
  {
    id: 13,
    titleEn: 'Ethical Critical Thinking',
    titleAr: 'التفكير النقدي والأخلاقي المعمق',
    descEn: 'Presents complex dilemmas within every volume, encouraging students to trace human choices and cultivate balance.',
    descAr: 'تطرح سيناريوهات معقدة وغنية لمساندة مهارات اتخاذ القرارات الأخلاقية المتوازنة واستيعاب المنظور السلوكي السليم.',
    icon: Scale,
    theme: {
      iconStyle: 'text-rose-400 bg-rose-500/10 border-rose-500/25',
      hoverStyle: 'hover:border-rose-500/40',
      textStyle: 'group-hover:text-rose-400'
    }
  },
  {
    id: 14,
    titleEn: 'Interactive Comprehension Checks',
    titleAr: 'تحديات الفهم والتدبر التفاعلية',
    descEn: 'Reinforces book retention with interactive sequencing, true/false scenarios, and word play.',
    descAr: 'ثبّت مهارات الاستذكار والربط اللغوي عبر ترتيب أحداث ورسائل الكتب والقصص في تحديات تفاعلية حية.',
    icon: BookOpenCheck,
    theme: {
      iconStyle: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
      hoverStyle: 'hover:border-emerald-500/40',
      textStyle: 'group-hover:text-emerald-400'
    }
  },
  {
    id: 15,
    titleEn: 'Classroom Discussion Modes',
    titleAr: 'نقاشات صفيّة وتأملات جماعيّة',
    descEn: 'Features real-world discussion templates that sort questions into Individual, Pair, and Class dynamics.',
    descAr: 'تضم نقاشات نقدية مدروسة ومقسمة آلياً لمستويات نقاش فردي، ثنائي، أو جماعي لتنمية ثقة ومحاورة الطلاب.',
    icon: School,
    theme: {
      iconStyle: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
      hoverStyle: 'hover:border-amber-500/40',
      textStyle: 'group-hover:text-[#D4AF37]'
    }
  }
];

export const FeatureHighlights: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative z-20 w-full max-w-7xl px-6 py-16">
      <div className="w-full flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-[#F5EDD6] tracking-tight select-none">
          {language === 'ar' ? 'باقة أدوات وميزات تفاعلية متفوقة' : 'Built for the Classroom, Designed for the Reader'}
        </h2>
        <div className="w-24 h-px bg-gold/40 mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {appFeatures.map((feat, idx) => {
          const IconComponent = feat.icon;
          const title = language === 'ar' ? feat.titleAr : feat.titleEn;
          const description = language === 'ar' ? feat.descAr : feat.descEn;
          return (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-8 rounded-[32px] bg-[#192b21]/95 border-2 border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.85)] hover:border-gold/30 hover:shadow-[0_15px_60px_rgba(212,175,55,0.06)] backdrop-blur-md flex flex-col justify-between transition-all duration-300 min-h-[260px]"
            >
              <div className="flex flex-col gap-6">
                <div className={cn('w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-110 shadow-lg', feat.theme.iconStyle)}>
                  <IconComponent size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className={cn('text-lg md:text-xl font-bold text-[#F5EDD6] mb-3 transition-colors duration-300 font-sans tracking-wide', feat.theme.textStyle)}>
                    {title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-parchment/80 leading-relaxed font-sans font-normal">
                    {description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
