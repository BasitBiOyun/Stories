import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { X, Crown, Download, FileText } from '../ui/icons';
import { PhosphorGuideIcon, type GuideIconName } from '../icons/PhosphorGuideIcon';
import { cn } from '../../lib/utils';
import { generateStudentGuidePDF } from '../../lib/pdfGenerator';
import { TeacherGuideSection, StudentGuideSection } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const GuideIcon = ({ name, className = 'w-7 h-7' }: { name: GuideIconName; className?: string }) => (
  <PhosphorGuideIcon name={name} className={className} />
);

const iconNameMap: Record<string, GuideIconName> = {
  Users: 'book', BookOpen: 'book', Rocket: 'target', Clock: 'clock', Compass: 'search',
  Stars: 'trophy', Ear: 'headphones', PenTool: 'pencil', Smile: 'check', Map: 'search',
  Lightbulb: 'book', Target: 'target', Heart: 'check', HelpCircle: 'search', FileText: 'book',
  Eye: 'eye', CheckCircle: 'check'
};

const iconFor = (name?: string, className = 'w-7 h-7'): React.ReactNode => (
  <GuideIcon name={name && iconNameMap[name] ? iconNameMap[name] : 'book'} className={className} />
);

const localizeArabicUiText = (value: string) => value
  .replace(/Tap\s*&\s*Reveal/gi, 'اضغط واكشف')
  .replace(/Tap\s+and\s+Reveal/gi, 'اضغط واكشف')
  .replace(/Language Focus/gi, 'التركيز اللغوي')
  .replace(/Language Review/gi, 'مراجعة اللغة')
  .replace(/Quick Challenge/gi, 'التحدي السريع')
  .replace(/Knowledge Check/gi, 'اختبار المعرفة')
  .replace(/Final Challenge/gi, 'التحدي النهائي')
  .replace(/Teacher Guide/gi, 'دليل المعلم')
  .replace(/Self Study Guide/gi, 'دليل الدراسة الذاتية')
  .replace(/Chapter Support/gi, 'دعم الفصول')
  .replace(/Full Guide/gi, 'الدليل الكامل');

const localizeArabicDeep = <T,>(value: T): T => {
  if (typeof value === 'string') return localizeArabicUiText(value) as T;
  if (Array.isArray(value)) return value.map(item => localizeArabicDeep(item)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, localizeArabicDeep(item)])
    ) as T;
  }
  return value;
};

const listBlock = (title: string, items?: string[]) => {
  if (!items?.length) return null;
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6">
      <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest mb-3">{title}</h5>
      <ul className="space-y-2 font-serif text-sm sm:text-base text-white leading-relaxed">
        {items.map((item, i) => <li key={i} className="flex gap-2.5"><span className="text-gold/60">•</span><span>{item}</span></li>)}
      </ul>
    </div>
  );
};

const textBlock = (title: string, text?: string) => {
  if (!text) return null;
  return (
    <div className="bg-gold/5 border border-gold/15 rounded-2xl p-4 sm:p-6">
      <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest mb-3">{title}</h5>
      <p className="font-serif text-sm sm:text-base text-white leading-relaxed">{text}</p>
    </div>
  );
};

export const SelfStudyGuide = ({
  isOpen,
  onClose,
  title,
  subtitle,
  footerText,
  content = [],
  studentGuideText = '',
  studentGuideSections = [],
  metadata,
  collectionId
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  footerText?: string;
  content?: TeacherGuideSection[];
  studentGuideText?: string;
  studentGuideSections?: StudentGuideSection[];
  metadata?: import('../../types').StudentGuideMetadata;
  collectionId?: string;
}) => {
  const [activeTab, setActiveTab] = useState('welcome');
  const [activeGuideSection, setActiveGuideSection] = useState(0);
  const { language, t, formatNumber, isRTL } = useLanguage();

  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';
  const isAr = language === 'ar';

  if (isAr) {
    title = title ? localizeArabicUiText(title) : title;
    subtitle = subtitle ? localizeArabicUiText(subtitle) : subtitle;
    footerText = footerText ? localizeArabicUiText(footerText) : footerText;
    content = localizeArabicDeep(content);
    studentGuideText = localizeArabicUiText(studentGuideText);
    studentGuideSections = localizeArabicDeep(studentGuideSections);
    metadata = localizeArabicDeep(metadata);
  }

  const displayTitle = title || t('nav.studentSelfStudyGuide');
  const displaySubtitle = subtitle || t('nav.reflectionPractice');
  const displayFooter = footerText || t('nav.interactiveEbookSeries');

  const defaultGuideSections = [
    { title: t('ssg.whoIsThisFor'), icon: iconFor('Users'), text: metadata?.whoIsThisFor || t('ssg.whoIsThisForDesc'), points: [t('ssg.learnerType1'), t('ssg.learnerType2')] },
    { title: t('ssg.whatInBook'), icon: iconFor('BookOpen'), text: t('ssg.whatInBookDesc'), points: [t('ssg.content1'), t('ssg.content2'), t('ssg.content3'), t('ssg.content4')] },
    { title: t('ssg.howToUse'), icon: iconFor('Rocket'), text: t('ssg.howToUseDesc'), points: [t('ssg.step1'), t('ssg.step2'), t('ssg.step3'), t('ssg.step4')] },
    { title: t('ssg.routine'), icon: iconFor('Clock'), text: t('ssg.routineDesc'), points: [t('ssg.routine1'), t('ssg.routine2'), t('ssg.routine3')] },
    { title: t('ssg.readingTips'), icon: iconFor('Compass'), text: t('ssg.readingTipsDesc'), points: [t('ssg.readingTip1'), t('ssg.readingTip2'), t('ssg.readingTip3')] },
    { title: t('ssg.learningWords'), icon: iconFor('Stars'), text: t('ssg.learningWordsDesc'), points: [t('ssg.learningWord1'), t('ssg.learningWord2'), t('ssg.learningWord3'), t('ssg.learningWord4')] },
    { title: t('ssg.listeningSpeaking'), icon: iconFor('Ear'), text: t('ssg.listeningSpeakingDesc'), points: [t('ssg.listeningSpeaking1'), t('ssg.listeningSpeaking2')] },
    { title: t('ssg.writingPractice'), icon: iconFor('PenTool'), text: t('ssg.writingPracticeDesc'), points: [t('ssg.writingPractice1'), t('ssg.writingPractice2'), t('ssg.writingPractice3')] },
    { title: t('ssg.whenHard'), icon: iconFor('Smile'), text: t('ssg.whenHardDesc'), points: [t('ssg.whenHard1'), t('ssg.whenHard2'), t('ssg.whenHard3')] },
  ];

  const displaySections = studentGuideSections.length > 0
    ? studentGuideSections.map(s => ({ ...s, icon: iconFor(s.icon) }))
    : defaultGuideSections;

  const tabs = [
    { id: 'welcome', label: t('ssg.welcome'), icon: iconFor('Stars', 'w-5 h-5') },
    ...(content.length ? [{ id: 'chapters', label: isAr ? 'دعم الفصول' : 'Chapter Support', icon: iconFor('Map', 'w-5 h-5') }] : []),
    ...displaySections.map((section, idx) => ({
      id: `section-${idx}`,
      label: section.title,
      icon: studentGuideSections.length > 0
        ? iconFor(studentGuideSections[idx]?.icon, 'w-5 h-5')
        : React.isValidElement(section.icon)
          ? React.cloneElement(section.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })
          : iconFor('FileText', 'w-5 h-5')
    })),
    ...(studentGuideText ? [{ id: 'full-guide', label: isAr ? 'الدليل الكامل' : (t('ssg.fullGuide') || 'Full Guide'), icon: iconFor('FileText', 'w-5 h-5') }] : [])
  ];

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab('welcome');
      setActiveGuideSection(0);
    }
  }, [isOpen]);

  const renderChapterSupport = () => {
    const section = content[activeGuideSection];
    if (!section) return null;

    const labels = isAr ? {
      goals: 'أهداف الفصل', notice: 'ما الذي ألاحظه؟', read: 'اقرأ / استمع', find: 'اعثر على الجواب في القصة',
      vocab: 'المفردات في السياق', quick: 'التحدي السريع', wrong: 'إذا أخطأت', check: 'اختبر نفسك',
      use: 'استخدم ما تعلمته', reflection: 'تأمل', grammar: 'التركيز اللغوي', pronunciation: 'النطق'
    } : {
      goals: 'Chapter Goals', notice: 'What to Notice', read: 'Read / Listen', find: 'Find the Answer in the Story',
      vocab: 'Vocabulary in Context', quick: 'Quick Challenge', wrong: 'If You Get It Wrong', check: 'Check Yourself',
      use: 'Use What You Learned', reflection: 'Reflection', grammar: 'Language Focus', pronunciation: 'Pronunciation'
    };

    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-5 sm:space-y-8">
        <div className="flex flex-wrap gap-2">
          {content.map((chapter, idx) => (
            <button
              key={`${chapter.chapter}-${idx}`}
              onClick={() => setActiveGuideSection(idx)}
              className={cn(
                'px-3 py-2 rounded-xl border text-xs sm:text-sm font-display transition-all cursor-pointer',
                activeGuideSection === idx ? 'bg-gold text-white border-gold' : 'bg-white/5 text-white/70 border-white/10 hover:border-gold/40'
              )}
            >
              {formatNumber(idx + 1)}
            </button>
          ))}
        </div>

        <div className="bg-gold/10 border border-gold/20 rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8">
          <div className="flex flex-wrap justify-between gap-3 items-start mb-6">
            <div>
              <p className="text-gold/60 uppercase tracking-[0.2em] text-[10px] font-display mb-2">{formatNumber(activeGuideSection + 1)} / {formatNumber(content.length)}</p>
              <h3 className="font-display text-xl sm:text-3xl text-white">{section.chapter}</h3>
            </div>
            <span className="text-xs text-gold border border-gold/20 bg-gold/5 rounded-full px-3 py-1.5">{section.timing}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {listBlock(labels.goals, section.objectives)}
            {listBlock(labels.notice, section.whatToNotice)}
            {listBlock(labels.read, section.readListen)}
            {listBlock(labels.find, section.findAnswerInStory)}
            {listBlock(labels.vocab, section.vocabularyInContext)}
            {textBlock(labels.quick, section.quickChallengeGuide)}
            {listBlock(labels.wrong, section.wrongAnswerSupport)}
            {listBlock(labels.check, section.selfCheck)}
            {textBlock(labels.use, section.useWhatYouLearned)}
            {textBlock(labels.reflection, section.reflectionPrompt)}
            {textBlock(labels.grammar, section.grammarFocus)}
            {textBlock(labels.pronunciation, section.pronunciationFocus)}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderContent = () => {
    if (activeTab.startsWith('section-')) {
      const sectionIdx = parseInt(activeTab.split('-')[1]);
      const section = displaySections[sectionIdx];
      if (!section) return null;
      return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={activeTab} className="space-y-4 sm:space-y-8">
          <div className="bg-gold/10 border border-gold/20 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gold/20 flex items-center justify-center text-gold shrink-0">{section.icon}</div>
                <h3 className="font-display text-xl sm:text-3xl text-white">{section.title}</h3>
              </div>
              <p className="font-serif text-base sm:text-xl text-white leading-relaxed mb-6">{section.text}</p>
              <div className="grid grid-cols-1 gap-3">
                {section.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <GuideIcon name="check" className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="font-serif text-sm sm:text-lg text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    switch (activeTab) {
      case 'welcome':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 sm:space-y-8 text-center py-4 sm:py-12">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gold/20 rounded-3xl flex items-center justify-center mx-auto text-gold"><GuideIcon name="trophy" className="w-8 h-8 sm:w-12 sm:h-12" /></div>
            <h3 className="font-display text-2xl sm:text-4xl text-white">{t('ssg.welcomeExplorer')}</h3>
            <p className="font-serif text-white leading-relaxed text-base sm:text-xl max-w-2xl mx-auto">{metadata?.whoIsThisFor || t('ssg.welcomeDesc')}</p>
            {content.length > 0 && <p className="font-serif text-gold text-sm sm:text-lg">{isAr ? 'استخدم «دعم الفصول» للحصول على خطوات خاصة بكل فصل.' : 'Use Chapter Support for the exact study steps for each chapter.'}</p>}
          </motion.div>
        );
      case 'chapters':
        return renderChapterSupport();
      case 'full-guide':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="prose prose-invert prose-gold max-w-none font-serif">
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-10 md:p-16">
              <ReactMarkdown>{studentGuideText}</ReactMarkdown>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className={cn('fixed inset-0 bg-wood/98 backdrop-blur-3xl z-[100] overflow-hidden flex flex-col', isRTL && 'font-arabic')}
          style={{ '--color-gold': isHistory ? '#10b981' : isTurkish ? '#22D3EE' : '#c2aa6b', '--color-wood': isHistory ? '#042416' : isTurkish ? '#0d1d2c' : '#14221a' } as React.CSSProperties}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="min-h-[4.5rem] md:h-28 border-b border-gold/20 px-3 sm:px-8 md:px-16 py-3 flex items-center justify-between shrink-0 bg-black/20 gap-2">
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <div className="p-2.5 sm:p-4 bg-gold text-white rounded-xl sm:rounded-2xl shrink-0"><Crown className="w-6 h-6 sm:w-8 sm:h-8" /></div>
              <div className="min-w-0"><h2 className="font-display text-lg sm:text-3xl md:text-4xl text-white truncate">{displayTitle}</h2><p className="font-serif text-gold text-xs sm:text-base mt-0.5 truncate">{displaySubtitle}</p></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-6 shrink-0">
              <button
                data-pdf-locked="true"
                aria-disabled="true"
                onClick={() => generateStudentGuidePDF(displayTitle, displaySubtitle, metadata, studentGuideText, displaySections.map(s => ({ title: s.title, text: s.text, points: s.points })))}
                className="flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-4 bg-gold/10 hover:bg-gold/20 text-gold rounded-xl border border-gold/20 font-display text-xs sm:text-base cursor-pointer"
                title={t('nav.downloadPdf')}
              ><Download size={20} /><span className="hidden sm:inline">{t('nav.downloadPdf')}</span></button>
              <button onClick={onClose} className="p-2.5 sm:p-4 bg-white/5 text-gold hover:bg-white/10 rounded-full cursor-pointer"><X className="w-5 h-5 sm:w-7 sm:h-7" /></button>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            <div className={cn('w-16 sm:w-20 md:w-80 border-gold/10 overflow-y-auto custom-scrollbar bg-black/40 shrink-0', isRTL ? 'border-l' : 'border-r')}>
              <div className="p-1.5 sm:p-3 md:p-4 space-y-2">
                {tabs.map(tab => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={cn('w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 p-2 sm:p-3 md:p-4 rounded-xl transition-all cursor-pointer', activeTab === tab.id ? 'bg-gold text-white' : 'text-white/60 hover:bg-white/5 hover:text-white')}>
                    <div className={activeTab === tab.id ? 'text-white' : 'text-gold'}>{tab.icon}</div>
                    <span className="block md:hidden text-[10px] sm:text-[11px] font-bold text-center max-w-[58px] truncate">{tab.label}</span>
                    <span className="hidden md:block text-[14px] lg:text-[15px] font-display uppercase tracking-[0.12em] text-left leading-snug">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-3 sm:p-8 md:p-16 bg-gradient-to-br from-transparent to-gold/5"><div className="max-w-5xl mx-auto">{renderContent()}</div></div>
          </div>

          <div className="h-14 md:h-20 border-t border-gold/10 px-4 md:px-16 flex items-center justify-center shrink-0 bg-black/20"><p className="font-display text-[12px] sm:text-[13px] tracking-[0.22em] text-gold uppercase text-center">{displayFooter}</p></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
