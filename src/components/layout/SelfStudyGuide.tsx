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
  'Users': 'book',
  'BookOpen': 'book',
  'Rocket': 'target',
  'Clock': 'clock',
  'Compass': 'search',
  'Stars': 'trophy',
  'Ear': 'headphones',
  'PenTool': 'pencil',
  'Smile': 'check',
  'Map': 'search',
  'Lightbulb': 'book',
  'Target': 'target',
  'Heart': 'check',
  'HelpCircle': 'search',
  'FileText': 'book',
  'Eye': 'eye',
  'CheckCircle': 'check'
};

const iconFor = (name?: string, className = 'w-7 h-7'): React.ReactNode => (
  <GuideIcon name={name && iconNameMap[name] ? iconNameMap[name] : 'book'} className={className} />
);

export const SelfStudyGuide = ({ 
  isOpen, 
  onClose, 
  title,
  subtitle,
  footerText,
  content = [],
  studentGuideText = "",
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
  const [activeTab, setActiveTab] = useState('guide');
  const [activeGuideSection, setActiveGuideSection] = useState<number | null>(null);
  const { language, t, formatNumber, isRTL } = useLanguage();

  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';

  const displayTitle = title || t('nav.studentSelfStudyGuide');
  const displaySubtitle = subtitle || t('nav.reflectionPractice');
  const displayFooter = footerText || t('nav.interactiveEbookSeries');

  const defaultGuideSections = [
    {
      title: t('ssg.whoIsThisFor'),
      icon: iconFor('Users'),
      text: metadata?.whoIsThisFor || t('ssg.whoIsThisForDesc'),
      points: [t('ssg.learnerType1'), t('ssg.learnerType2')]
    },
    {
      title: t('ssg.whatInBook'),
      icon: iconFor('BookOpen'),
      text: t('ssg.whatInBookDesc'),
      points: [t('ssg.content1'), t('ssg.content2'), t('ssg.content3'), t('ssg.content4')]
    },
    {
      title: t('ssg.howToUse'),
      icon: iconFor('Rocket'),
      text: t('ssg.howToUseDesc'),
      points: [t('ssg.step1'), t('ssg.step2'), t('ssg.step3'), t('ssg.step4')]
    },
    {
      title: t('ssg.routine'),
      icon: iconFor('Clock'),
      text: t('ssg.routineDesc'),
      points: [t('ssg.routine1'), t('ssg.routine2'), t('ssg.routine3')]
    },
    {
      title: t('ssg.readingTips'),
      icon: iconFor('Compass'),
      text: t('ssg.readingTipsDesc'),
      points: [t('ssg.readingTip1'), t('ssg.readingTip2'), t('ssg.readingTip3')]
    },
    {
      title: t('ssg.learningWords'),
      icon: iconFor('Stars'),
      text: t('ssg.learningWordsDesc'),
      points: [t('ssg.learningWord1'), t('ssg.learningWord2'), t('ssg.learningWord3'), t('ssg.learningWord4')]
    },
    {
      title: t('ssg.listeningSpeaking'),
      icon: iconFor('Ear'),
      text: t('ssg.listeningSpeakingDesc'),
      points: [t('ssg.listeningSpeaking1'), t('ssg.listeningSpeaking2')]
    },
    {
      title: t('ssg.writingPractice'),
      icon: iconFor('PenTool'),
      text: t('ssg.writingPracticeDesc'),
      points: [t('ssg.writingPractice1'), t('ssg.writingPractice2'), t('ssg.writingPractice3')]
    },
    {
      title: t('ssg.whenHard'),
      icon: iconFor('Smile'),
      text: t('ssg.whenHardDesc'),
      points: [t('ssg.whenHard1'), t('ssg.whenHard2'), t('ssg.whenHard3')]
    },
    {
      title: t('ssg.chapterSupport'),
      icon: iconFor('Map'),
      text: t('ssg.chapterSupportDesc'),
      points: [t('ssg.chapterSupport1'), t('ssg.chapterSupport2'), t('ssg.chapterSupport3')]
    }
  ];

  const displaySections = studentGuideSections.length > 0 
    ? studentGuideSections.map(s => ({
        ...s,
        icon: iconFor(s.icon)
      }))
    : defaultGuideSections;

  const tabs = [
    { id: 'welcome', label: t('ssg.welcome'), icon: iconFor('Stars', 'w-5 h-5') },
    ...displaySections.map((section, idx) => ({
      id: `section-${idx}`,
      label: section.title,
      icon: studentGuideSections.length > 0
        ? iconFor(studentGuideSections[idx]?.icon, 'w-5 h-5')
        : React.isValidElement(section.icon)
          ? React.cloneElement(section.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })
          : iconFor('FileText', 'w-5 h-5')
    })),
    ...(studentGuideText ? [{ id: 'full-guide', label: t('ssg.fullGuide') || 'Full Guide', icon: iconFor('FileText', 'w-5 h-5') }] : [])
  ];

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab('welcome');
    }
  }, [isOpen]);

  const renderContent = () => {
    if (activeTab.startsWith('section-')) {
      const sectionIdx = parseInt(activeTab.split('-')[1]);
      const section = displaySections[sectionIdx];
      if (!section) return null;

      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeTab}
          className="space-y-4 sm:space-y-8"
        >
          <div className="bg-gold/10 border border-gold/20 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl bg-gold/20 flex items-center justify-center text-gold shadow-inner shrink-0">
                  {React.isValidElement(section.icon)
                    ? React.cloneElement(section.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" })
                    : section.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-3xl md:text-4xl text-white mb-1 sm:mb-2">{section.title}</h3>
                  <div className="h-1 w-12 sm:w-20 bg-gold rounded-full" />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-10">
                <p className="font-serif text-base sm:text-xl md:text-2xl text-white leading-relaxed">
                  {section.text}
                </p>

                <div className="grid grid-cols-1 gap-2.5 sm:gap-4">
                  {section.points.map((point, pIdx) => (
                    <motion.div 
                      key={pIdx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: pIdx * 0.1 }}
                      className="flex items-start sm:items-center gap-3 sm:gap-5 bg-white/5 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-gold/20 transition-all group"
                    >
                      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-0.5 sm:mt-0 group-hover:bg-gold group-hover:text-white transition-colors">
                        <GuideIcon name="check" className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className="font-serif text-sm sm:text-lg md:text-xl text-white leading-snug">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-8 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl text-center">
            <p className={cn(
              "font-serif text-white text-sm sm:text-lg",
              language !== 'ar' && "italic"
            )}>
              {t('ssg.sectionOf')
                .replace('{section}', formatNumber(sectionIdx + 1))
                .replace('{total}', formatNumber(displaySections.length))}
            </p>
          </div>
        </motion.div>
      );
    }

    switch (activeTab) {
      case 'welcome':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 sm:space-y-8 text-center py-4 sm:py-12"
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gold/20 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-8 text-gold animate-pulse">
              <GuideIcon name="trophy" className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
            <h3 className="font-display text-2xl sm:text-4xl text-white">
              {t('ssg.welcomeExplorer')}
            </h3>
            <p className="font-serif text-white leading-relaxed text-base sm:text-xl max-w-2xl mx-auto px-2">
              {t('ssg.welcomeDesc')}
            </p>
            <div className="bg-gold/10 border border-gold/20 rounded-2xl sm:rounded-3xl p-5 sm:p-10 max-w-xl mx-auto mt-6 sm:mt-12">
              <h4 className="font-display text-xl sm:text-2xl text-gold mb-2 sm:mb-4">
                {t('ssg.yourMission')}
              </h4>
              <p className={cn(
                "font-serif text-white text-sm sm:text-lg",
                language !== 'ar' && "italic"
              )}>
                {t('ssg.missionDesc')}
              </p>
            </div>
          </motion.div>
        );
      case 'full-guide':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-gold max-w-none font-serif"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-10 md:p-16">
              <div className="markdown-body text-sm sm:text-base">
                <ReactMarkdown>
                  {studentGuideText}
                </ReactMarkdown>
              </div>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 bg-wood/98 backdrop-blur-3xl z-[100] overflow-hidden flex flex-col",
            isRTL && "font-arabic"
          )}
          style={{
            '--color-gold': isHistory ? '#10b981' : isTurkish ? '#22D3EE' : '#c2aa6b',
            '--color-wood': isHistory ? '#042416' : isTurkish ? '#0d1d2c' : '#14221a',
          } as React.CSSProperties}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="min-h-[4.5rem] md:h-28 border-b border-gold/20 px-3 sm:px-8 md:px-16 py-3 flex items-center justify-between shrink-0 bg-black/20 gap-2">
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <div className="p-2.5 sm:p-4 bg-gold text-white rounded-xl sm:rounded-2xl shadow-xl shadow-gold/20 shrink-0">
                <Crown className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-lg sm:text-3xl md:text-4xl text-white tracking-tight truncate">
                  {displayTitle}
                </h2>
                <p className={cn(
                  "font-serif text-gold text-xs sm:text-base md:text-lg mt-0.5 truncate",
                  language !== 'ar' && "italic"
                )}>
                  {displaySubtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-6 shrink-0">
              <button
                onClick={() => {
                  generateStudentGuidePDF(
                    displayTitle,
                    displaySubtitle,
                    metadata,
                    studentGuideText,
                    displaySections.map(s => ({
                      title: s.title,
                      text: s.text,
                      points: s.points
                    }))
                  );
                }}
                className="flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-4 bg-gold/10 hover:bg-gold/20 text-gold rounded-xl sm:rounded-2xl border border-gold/20 transition-all font-display text-xs sm:text-base group cursor-pointer"
                title={t('nav.downloadPdf')}
              >
                <Download size={20} className="group-hover:scale-110 transition-transform shrink-0" />
                <span className="hidden sm:inline">{t('nav.downloadPdf')}</span>
              </button>
              <button 
                onClick={onClose}
                className="p-2.5 sm:p-4 bg-white/5 text-gold hover:bg-white/10 rounded-full transition-all hover:rotate-90 cursor-pointer shrink-0"
              >
                <X className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </button>
            </div>
          </div>

          {/* Main Layout */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar Tabs */}
            <div className={cn(
              "w-16 sm:w-20 md:w-72 border-gold/10 overflow-y-auto custom-scrollbar bg-black/40 shrink-0",
              isRTL ? "border-l" : "border-r"
            )}>
              <div className="p-1.5 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl transition-all group cursor-pointer",
                      activeTab === tab.id 
                        ? "bg-gold text-white shadow-2xl shadow-gold/30 scale-[1.02]" 
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <div className={cn(
                      "shrink-0 transition-colors",
                      activeTab === tab.id ? "text-white" : "text-gold group-hover:text-gold"
                    )}>
                      {tab.icon}
                    </div>
                    <span className="block md:hidden text-[9px] font-bold text-center leading-none mt-0.5 max-w-[50px] truncate opacity-80">
                      {tab.label}
                    </span>
                    <span className="hidden md:block text-xs font-display uppercase tracking-[0.2em] text-left leading-tight">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-3 sm:p-8 md:p-16 bg-gradient-to-br from-transparent to-gold/5">
              <div className="max-w-5xl mx-auto">
                {renderContent()}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="h-14 md:h-20 border-t border-gold/10 px-4 md:px-16 flex items-center justify-center shrink-0 bg-black/20">
            <p className="font-display text-[10px] sm:text-xs tracking-[0.3em] md:tracking-[0.4em] text-gold uppercase text-center">
              {displayFooter}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
