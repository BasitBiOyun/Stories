import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  X, 
  BookOpen, 
  Book as BookIcon,
  Layout, 
  Users, 
  Heart, 
  ShieldAlert, 
  ClipboardList, 
  Home, 
  CheckCircle,
  FileText,
  MessageSquare,
  Lightbulb,
  Move,
  Globe,
  Link as LinkIcon,
  Award,
  Download
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { generateTeacherGuidePDF } from '../../lib/pdfGenerator';
import { TeacherGuideSection } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

export const TeacherGuide = ({ 
  isOpen, 
  onClose, 
  title,
  subtitle,
  footerText,
  content = [],
  metadata,
  bookId,
  collectionId
}: { 
  isOpen: boolean; 
  onClose: () => void;
  title?: string;
  subtitle?: string;
  footerText?: string;
  content?: TeacherGuideSection[];
  metadata?: import('../../types').TeacherGuideMetadata;
  bookId?: string;
  collectionId?: string;
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const { language, t, formatNumber, isRTL } = useLanguage();

  const isHistory = collectionId === 'history';
  const isTurkish = collectionId === 'turkish';

  const isAdam = bookId?.toLowerCase().includes('adam');
  const isAbraham = bookId?.toLowerCase().includes('abraham');
  const isMoses = bookId?.toLowerCase().includes('moses') || bookId?.toLowerCase().includes('musa');
  const isMecca = bookId?.toLowerCase().includes('mecca') || bookId?.toLowerCase().includes('mekke');
  const isYunus = bookId?.toLowerCase().includes('yunus');

  const tabs = [
    { id: 'overview', label: `${formatNumber(1)}. ${t('tg.overview')}`, icon: <BookOpen size={24} /> },
    { id: 'curriculum', label: `${formatNumber(2)}. ${t('tg.curriculum')}`, icon: <Layout size={24} /> },
    { id: 'approach', label: `${formatNumber(3)}. ${t('tg.approach')}`, icon: <Lightbulb size={24} /> },
    { id: 'plans', label: `${formatNumber(4)}. ${t('tg.plans')}`, icon: <ClipboardList size={24} /> },
    { id: 'framework', label: `${formatNumber(5)}. ${t('tg.framework')}`, icon: <MessageSquare size={24} /> },
    { id: 'chapters', label: `${formatNumber(6)}. ${t('tg.chapters')}`, icon: <BookIcon size={24} /> },
    { id: 'management', label: `${formatNumber(7)}. ${t('tg.management')}`, icon: <Users size={24} /> },
    { id: 'differentiation', label: `${formatNumber(8)}. ${t('tg.differentiation')}`, icon: <Users size={24} /> },
    { id: 'assessment', label: `${formatNumber(9)}. ${t('tg.assessment')}`, icon: <Award size={24} /> },
    { id: 'kinesthetic', label: `${formatNumber(10)}. ${t('tg.kinesthetic')}`, icon: <Move size={24} /> },
    { id: 'global', label: `${formatNumber(11)}. ${t('tg.global')}`, icon: <Globe size={24} /> },
    { id: 'values', label: `${formatNumber(12)}. ${t('tg.values')}`, icon: <Heart size={24} /> },
    { id: 'sensitive', label: `${formatNumber(13)}. ${t('tg.sensitive')}`, icon: <ShieldAlert size={24} /> },
    { id: 'tips', label: `${formatNumber(14)}. ${t('tg.tips')}`, icon: <MessageSquare size={24} /> },
    { id: 'home', label: `${formatNumber(15)}. ${t('tg.home')}`, icon: <Home size={24} /> },
    { id: 'checklist', label: `${formatNumber(16)}. ${t('tg.checklist')}`, icon: <CheckCircle size={24} /> },
    { id: 'appendices', label: `${formatNumber(17)}. ${t('tg.appendices')}`, icon: <FileText size={24} /> },
  ];

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(tabs[0].id);
    }
  }, [isOpen]);

  const renderTeacherContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              <div className="space-y-3 sm:space-y-6">
                <h3 className="font-display text-xl sm:text-3xl text-parchment">
                  {t('tg.purpose')}
                </h3>
                <p className="font-serif text-sm sm:text-lg text-white leading-relaxed">
                  {metadata?.purpose || t('tg.approachDesc')}
                </p>
              </div>
              <div className="space-y-3 sm:space-y-6">
                <h3 className="font-display text-xl sm:text-3xl text-parchment">
                  {t('tg.targetLearners')}
                </h3>
                <p className="font-serif text-sm sm:text-lg text-white leading-relaxed">
                  {metadata?.targetLearners}
                </p>
              </div>
            </div>
            <div className="bg-gold/5 border border-gold/10 rounded-2xl p-4 sm:p-8">
              <h3 className="font-display text-lg sm:text-2xl text-gold mb-3 sm:mb-4">
                {t('tg.mainFocus')}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 font-serif text-sm sm:text-base text-white">
                <li className="flex gap-2.5 sm:gap-3 items-start"><CheckCircle size={18} className="text-gold shrink-0 mt-0.5" /> <span><strong>{t('tg.fluency')}:</strong> {t('tg.fluencyDesc')}</span></li>
                <li className="flex gap-2.5 sm:gap-3 items-start"><CheckCircle size={18} className="text-gold shrink-0 mt-0.5" /> <span><strong>{t('tg.vocabulary')}:</strong> {t('tg.vocabularyDesc')}</span></li>
                <li className="flex gap-2.5 sm:gap-3 items-start"><CheckCircle size={18} className="text-gold shrink-0 mt-0.5" /> <span><strong>{t('tg.character')}:</strong> {t('tg.characterDesc')}</span></li>
              </ul>
            </div>
          </div>
        );
      case 'curriculum':
        return (
          <div className="space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.holisticAlignment')}</h3>
            <p className={cn(
              "font-serif text-sm sm:text-lg text-white",
              language !== 'ar' && "italic"
            )}>{t('tg.holisticDesc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {[
                { title: t('tg.listeningViewing'), desc: t('tg.listeningViewingDesc') },
                { title: t('tg.readingComprehension'), desc: t('tg.readingComprehensionDesc') },
                { title: t('tg.spokenInteraction'), desc: t('tg.spokenInteractionDesc') },
                { title: t('tg.vocabularyDev'), desc: t('tg.vocabularyDevDesc') },
                { title: t('tg.valuesEducation'), desc: t('tg.valuesEducationDesc') },
                { title: t('tg.sel'), desc: t('tg.selDesc') }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-gold/10 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-display text-gold text-xs sm:text-base uppercase tracking-widest mb-2 sm:mb-3">{item.title}</h4>
                  <p className="font-serif text-parchment/70 text-xs sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'approach':
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.principles')}</h3>
            <p className="font-serif text-sm sm:text-lg text-white">{metadata?.approachDesc || t('tg.approachDesc')}</p>
            <div className="space-y-4 sm:space-y-6">
              {[
                { title: t('tg.corePrinciples'), desc: t('tg.preTeach') },
                { title: t('tg.classroomSequence'), desc: t('tg.sequence') },
                { title: t('tg.teacherRole'), desc: t('tg.guideNotLecturer') },
                { title: t('tg.interaction'), desc: t('tg.pairTalk') },
                { title: t('tg.languageUse'), desc: t('tg.clearTeacherTalk') }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-6 items-start">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-display shrink-0 text-sm sm:text-xl">{formatNumber(i+1)}</div>
                  <div>
                    <h4 className="font-display text-parchment text-base sm:text-xl">{item.title}</h4>
                    <p className="font-serif text-xs sm:text-lg text-parchment/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'plans':
        return (
          <div className="space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.plans')}</h3>
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/5 border border-gold/10 p-4 sm:p-8 rounded-2xl">
                <h4 className="font-display text-lg sm:text-2xl text-gold mb-4">{t('tg.plans')} A: {metadata?.implementationPlans?.optionA.title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs uppercase tracking-widest text-gold">
                  {metadata?.implementationPlans?.optionA.steps?.map((step, i) => (
                    <div key={i} className="space-y-1 bg-white/5 p-3 rounded-xl sm:bg-transparent sm:p-0 sm:space-y-2 sm:border-r sm:border-gold/10 sm:pr-4">
                      <div className="font-bold">{formatNumber(step.time)}</div>
                      <div className="normal-case text-parchment/60 font-serif text-xs sm:text-sm leading-tight">{step.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-gold/10 p-4 sm:p-8 rounded-2xl">
                <h4 className="font-display text-lg sm:text-2xl text-gold mb-4">{t('tg.plans')} B: {metadata?.implementationPlans?.optionB.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                  {metadata?.implementationPlans?.optionB.lessons?.map((lesson, i) => (
                    <div key={i}>
                      <h5 className="font-display text-parchment text-xs sm:text-sm mb-2 uppercase tracking-widest">{lesson.title}</h5>
                      <p className={cn(
                        "font-serif text-white text-xs sm:text-base leading-relaxed",
                        language !== 'ar' && "italic"
                      )}>{lesson.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {metadata?.implementationPlans?.optionC && (
                <div className="bg-white/5 border border-gold/10 p-4 sm:p-8 rounded-2xl">
                  <h4 className="font-display text-lg sm:text-2xl text-gold mb-4">{t('tg.plans')} C: {metadata?.implementationPlans?.optionC.title}</h4>
                  {metadata?.implementationPlans?.optionC.steps && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-xs uppercase tracking-widest text-gold">
                      {metadata?.implementationPlans?.optionC.steps.map((step, i) => (
                        <div key={i} className="space-y-2 bg-white/5 border border-gold/5 p-3 sm:p-4 rounded-xl leading-relaxed">
                          <div className="font-bold text-gold">{formatNumber(step.time)}</div>
                          <div className="normal-case text-parchment/70 font-serif text-xs sm:text-sm leading-tight font-medium">{step.activity}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  {metadata?.implementationPlans?.optionC.lessons && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                      {metadata?.implementationPlans?.optionC.lessons.map((lesson, i) => (
                        <div key={i}>
                          <h5 className="font-display text-parchment text-xs sm:text-sm mb-2 uppercase tracking-widest">{lesson.title}</h5>
                          <p className={cn(
                            "font-serif text-white text-xs sm:text-base leading-relaxed",
                            language !== 'ar' && "italic"
                          )}>{lesson.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      case 'framework':
        return (
          <div className="space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.bdaFramework')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
              <div className="space-y-3 sm:space-y-6">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase tracking-widest border-b border-gold/20 pb-2 sm:pb-3">{t('tg.beforeReading')}</h4>
                <div className="font-serif text-xs sm:text-base text-parchment/70 leading-relaxed">
                  {metadata?.readingFramework.before}
                </div>
              </div>
              <div className="space-y-3 sm:space-y-6">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase tracking-widest border-b border-gold/20 pb-2 sm:pb-3">{t('tg.duringReading')}</h4>
                <div className="font-serif text-xs sm:text-base text-parchment/70 leading-relaxed">
                  {metadata?.readingFramework.during}
                </div>
              </div>
              <div className="space-y-3 sm:space-y-6">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase tracking-widest border-b border-gold/20 pb-2 sm:pb-3">{t('tg.afterReading')}</h4>
                <div className="font-serif text-xs sm:text-base text-parchment/70 leading-relaxed">
                  {metadata?.readingFramework.after}
                </div>
              </div>
            </div>
          </div>
        );
      case 'chapters':
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment border-b border-gold/20 pb-3 sm:pb-4">{t('tg.chapterSupport')}</h3>
            <div className="space-y-6 sm:space-y-12">
              {content.map((section, idx) => (
                <div key={idx} className="relative">
                  <div className="relative bg-black/40 border border-gold/20 rounded-2xl overflow-hidden backdrop-blur-xl">
                    <div className="bg-gold/10 px-4 sm:px-8 py-4 sm:py-6 border-b border-gold/20 flex flex-wrap gap-2 justify-between items-center">
                      <div>
                        <h4 className="font-display text-lg sm:text-2xl text-gold">{section.chapter}</h4>
                        <p className="text-gold/40 text-[10px] uppercase tracking-[0.2em] mt-0.5">{t('tg.pedagogicalModule')} {formatNumber(idx + 1)}</p>
                      </div>
                      <span className="font-display text-[10px] sm:text-xs text-gold bg-gold/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/20 shadow-inner">
                        {formatNumber(section.timing)}
                      </span>
                    </div>
                    
                    <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                        <div className="space-y-3 sm:space-y-4">
                          <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                            <CheckCircle size={16} className="text-gold shrink-0" /> {t('tg.learningObjectives')}
                          </h5>
                          <ul className="space-y-2 font-serif text-xs sm:text-base text-white">
                            {section.objectives.map((obj, i) => <li key={i} className="flex gap-2.5 sm:gap-3"><span className="text-gold/40">•</span> {obj}</li>)}
                          </ul>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                            <Lightbulb size={16} className="text-gold shrink-0" /> {t('tg.pedagogyApproach')}
                          </h5>
                          <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-gold/10">
                            <p className={cn(
                              "font-serif text-xs sm:text-base text-white leading-relaxed",
                              language !== 'ar' && "italic"
                            )}>
                              {section.pedagogy}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 border-t border-gold/10 pt-4 sm:pt-8">
                        <div className="space-y-2 sm:space-y-3">
                          <h5 className="font-display text-[10px] text-gold/60 uppercase tracking-widest">{t('tg.grammarFocus')}</h5>
                          <div className="p-3 bg-white/5 rounded-lg border border-gold/5">
                            <p className="font-serif text-xs sm:text-base text-white">{section.grammarFocus}</p>
                          </div>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                          <h5 className="font-display text-[10px] text-gold/60 uppercase tracking-widest">{t('tg.pronunciationFocus')}</h5>
                          <div className="p-3 bg-white/5 rounded-lg border border-gold/5">
                            <p className="font-serif text-xs sm:text-base text-white">{section.pronunciationFocus}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 sm:space-y-4 border-t border-gold/10 pt-4 sm:pt-8">
                        <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                          <ClipboardList size={16} className="text-gold shrink-0" /> {t('tg.lessonFlow')}
                        </h5>
                        <div className="space-y-2.5 sm:space-y-3">
                          {section.lessonPlan.split(/\d\./).filter(Boolean).map((step, i) => (
                            <div key={i} className="flex gap-2.5 sm:gap-4 items-start group/step">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-display text-[10px] sm:text-xs shrink-0 group-hover/step:bg-gold group-hover/step:text-white transition-colors mt-0.5">{formatNumber(i+1)}</div>
                              <p className="font-serif text-xs sm:text-base text-white leading-relaxed">{step.trim()}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* New Assessment & Kinesthetic Fields in Chapter Support */}
                      {(section.assessmentTools || section.kinestheticActivities) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 border-t border-gold/10 pt-4 sm:pt-8">
                          {section.assessmentTools && (
                            <div className="space-y-3 sm:space-y-4">
                              <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                                <Award size={16} className="text-gold shrink-0" /> {t('tg.assessmentTools')}
                              </h5>
                              <div className="space-y-3 sm:space-y-4">
                                {section.assessmentTools.rubric && (
                                  <div>
                                    <span className="text-[10px] text-gold/60 uppercase font-display block mb-2">{t('tg.sampleRubric')}</span>
                                    <div className="flex flex-wrap gap-2">
                                      {section.assessmentTools.rubric.map((item, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-gold/5 border border-gold/20 rounded-full text-[10px] sm:text-xs text-white font-serif">{item}</span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                                {section.assessmentTools.exitTicket && (
                                  <div>
                                    <span className="text-[10px] text-gold/60 uppercase font-display block mb-2">{t('tg.exitTicketQuestions')}</span>
                                    <ul className="space-y-1 font-serif text-xs sm:text-sm text-white">
                                      {section.assessmentTools.exitTicket.map((q, i) => <li key={i}>• {q}</li>)}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                          {section.kinestheticActivities && (
                            <div className="space-y-3 sm:space-y-4">
                              <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                                <Move size={16} className="text-gold shrink-0" /> {t('tg.kinesthetic')}
                              </h5>
                              <ul className="space-y-2 sm:space-y-3 font-serif text-xs sm:text-base text-white">
                                {section.kinestheticActivities.map((act, i) => <li key={i} className="flex gap-2.5 sm:gap-3"><span className="text-gold/40">•</span> {act}</li>)}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 border-t border-gold/10 pt-4 sm:pt-8">
                        <div className="space-y-3 sm:space-y-4">
                          <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                            <MessageSquare size={16} className="text-gold shrink-0" /> {t('tg.discussionPoints')}
                          </h5>
                          <ul className="space-y-2 font-serif text-xs sm:text-base text-white">
                            {section.discussionPoints.map((point, i) => <li key={i} className="flex gap-2.5 sm:gap-3"><span className="text-gold/40">•</span> {point}</li>)}
                          </ul>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                            <Users size={16} className="text-gold shrink-0" /> {t('tg.differentiation')}
                          </h5>
                          <div className="space-y-3 sm:space-y-4">
                            <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-gold/10">
                              <span className="text-[10px] text-gold/60 uppercase font-display block mb-1">{t('tg.fastFinishers')}:</span>
                              <p className="text-xs sm:text-sm font-serif text-white leading-relaxed">{section.differentiation.fastFinishers}</p>
                            </div>
                            <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-gold/10">
                              <span className="text-[10px] text-gold/60 uppercase font-display block mb-1">{t('tg.strugglingLearners')}:</span>
                              <p className="text-xs sm:text-sm font-serif text-white leading-relaxed">{section.differentiation.strugglingLearners}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gold/5 border border-gold/10 p-4 sm:p-6 rounded-2xl space-y-3 sm:space-y-4">
                        <h5 className="font-display text-xs sm:text-sm text-gold uppercase tracking-widest flex items-center gap-2 sm:gap-3">
                          <Heart size={16} className="text-gold shrink-0" /> {t('tg.appTips')}
                        </h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 font-serif text-xs sm:text-sm text-white">
                          {section.interactiveTips.map((tip, i) => <li key={i} className="flex gap-2.5 sm:gap-3">
                            <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" /> {tip}
                          </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'management':
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.management')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {[
                { title: t('tg.wholeClassMode'), desc: t('tg.wholeClassModeDesc') },
                { title: t('tg.pairWorkMode'), desc: t('tg.pairWorkModeDesc') },
                { title: t('tg.quizMode'), desc: t('tg.quizModeDesc') },
                { title: t('tg.exitTicketMode'), desc: t('tg.exitTicketModeDesc') }
              ].map((item, i) => (
                <div key={i} className="bg-gold/5 p-4 sm:p-6 rounded-xl border border-gold/10">
                  <h4 className="font-display text-gold text-sm sm:text-base mb-2 sm:mb-3">{item.title}</h4>
                  <p className="font-serif text-white text-xs sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-gold/10">
              <h4 className="font-display text-gold text-sm sm:text-base mb-2 sm:mb-3">{t('tg.practicalNotes')}</h4>
              <ul className="space-y-2 font-serif text-white text-xs sm:text-base leading-relaxed">
                <li>• {t('tg.practicalNote1')}</li>
                <li>• {t('tg.practicalNote2')}</li>
                <li>• {t('tg.practicalNote3')}</li>
                <li>• {t('tg.practicalNote4')}</li>
              </ul>
            </div>
          </div>
        );
      case 'differentiation':
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.diffStrategies')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              <div className="space-y-3 sm:space-y-6">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase tracking-widest">{t('tg.forSupport')}</h4>
                <ul className="space-y-2 sm:space-y-3 font-serif text-xs sm:text-base text-white">
                  <li>• {t('tg.forSupport1')}</li>
                  <li>• {t('tg.forSupport2')}</li>
                  <li>• {t('tg.forSupport3')}</li>
                  <li>• {t('tg.forSupport4')}</li>
                  <li>• {t('tg.forSupport5')}</li>
                </ul>
              </div>
              <div className="space-y-3 sm:space-y-6">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase tracking-widest">{t('tg.forExtension')}</h4>
                <ul className="space-y-2 sm:space-y-3 font-serif text-xs sm:text-base text-white">
                  <li>• {t('tg.forExtension1')}</li>
                  <li>• {t('tg.forExtension2')}</li>
                  <li>• {t('tg.forExtension3')}</li>
                  <li>• {t('tg.forExtension4')}</li>
                </ul>
              </div>
            </div>
            <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-gold/10">
              <h4 className="font-display text-gold text-sm sm:text-base mb-2 sm:mb-3">{t('tg.forMixedAbility')}</h4>
              <ul className="space-y-2 font-serif text-white text-xs sm:text-base leading-relaxed">
                <li>• {t('tg.forMixedAbility1')}</li>
                <li>• {t('tg.forMixedAbility2')}</li>
                <li>• {t('tg.forMixedAbility3')}</li>
              </ul>
            </div>
          </div>
        );
      case 'assessment':
        return (
          <div className="space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment border-b border-gold/20 pb-3 sm:pb-4">{t('tg.assessmentEvidence')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-white/5 p-4 sm:p-8 rounded-2xl border border-gold/10 hover:bg-gold/5 transition-colors">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase mb-3 sm:mb-4 flex items-center gap-2"><ClipboardList size={16} /> {t('tg.assessmentEvidence')}</h4>
                <div className="font-serif text-white text-xs sm:text-base leading-relaxed">
                  {metadata?.assessmentEvidence}
                </div>
              </div>
              <div className="bg-white/5 p-4 sm:p-8 rounded-2xl border border-gold/10 hover:bg-gold/5 transition-colors">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase mb-3 sm:mb-4 flex items-center gap-2"><CheckCircle size={16} /> {t('tg.lookFor')}</h4>
                <ul className="space-y-2 font-serif text-white text-xs sm:text-sm leading-relaxed">
                  <li>• {t('tg.lookFor1')}</li>
                  <li>• {t('tg.lookFor2')}</li>
                  <li>• {t('tg.lookFor3')}</li>
                  <li>• {t('tg.lookFor4')}</li>
                </ul>
              </div>
            </div>

            <div className="bg-gold/5 border border-gold/10 p-4 sm:p-8 rounded-2xl">
              <h4 className="font-display text-lg sm:text-2xl text-gold mb-4 sm:mb-6">{metadata?.rubricTitle}</h4>
              <div className="overflow-x-auto -mx-2 px-2">
                <table className="w-full text-left font-serif text-xs sm:text-sm text-white min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gold/20">
                      <th className={cn("pb-3 sm:pb-4 font-display text-gold uppercase tracking-widest text-[10px]", isRTL && "text-right")}>{t('tg.criterion')}</th>
                      <th className={cn("pb-3 sm:pb-4 font-display text-gold uppercase tracking-widest text-[10px]", isRTL && "text-right")}>{t('tg.excellent')}</th>
                      <th className={cn("pb-3 sm:pb-4 font-display text-gold uppercase tracking-widest text-[10px]", isRTL && "text-right")}>{t('tg.good')}</th>
                      <th className={cn("pb-3 sm:pb-4 font-display text-gold uppercase tracking-widest text-[10px]", isRTL && "text-right")}>{t('tg.developing')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold/10">
                    {metadata?.rubricRows?.map((row, i) => (
                      <tr key={i}>
                        <td className="py-3 sm:py-6 font-bold text-parchment text-xs sm:text-base">{row.criterion}</td>
                        <td className="py-3 sm:py-6 pr-2 sm:pr-4">{row.excellent}</td>
                        <td className="py-3 sm:py-6 pr-2 sm:pr-4">{row.good}</td>
                        <td className="py-3 sm:py-6">{row.developing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'kinesthetic':
        return (
          <div className="space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment border-b border-gold/20 pb-3 sm:pb-4">{t('tg.kinesthetic')}</h3>
            <p className="font-serif text-sm sm:text-lg text-parchment/60 leading-relaxed">{t('tg.kinestheticDesc')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {[
                { 
                  title: t('tg.totalPhysicalResponse'), 
                  desc: t('tg.totalPhysicalResponseDesc'),
                  icon: <Users className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
                },
                { 
                  title: t('tg.storyActing'), 
                  desc: t('tg.storyActingDesc'),
                  icon: <Move className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
                },
                { 
                  title: t('tg.interactiveHotspots'), 
                  desc: t('tg.interactiveHotspotsDesc'),
                  icon: <Layout className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
                },
                { 
                  title: t('tg.classroomGames'), 
                  desc: t('tg.classroomGamesDesc'),
                  icon: <Users className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
                },
                { 
                  title: t('tg.storyWalkTimeline'), 
                  desc: t('tg.storyWalkTimelineDesc'),
                  icon: <Move className="text-gold w-5 h-5 sm:w-6 sm:h-6" />
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-gold/10 p-4 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 sm:gap-6 hover:bg-gold/5 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-display text-base sm:text-xl text-gold mb-1.5 sm:mb-2">{item.title}</h4>
                    <p className="font-serif text-white text-xs sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'global': {
        const globalData = metadata?.globalCitizenship;
        const isAr = language === 'ar';
        
        const fallbackThemes = isAbraham ? (
          isAr ? [
            { title: 'التفكر والبحث عن الحقيقة:', description: 'السعي وراء الحقيقة واليقين بالمنطق والتفكر السليم لا بالتقليد الأعمى.' },
            { title: 'الشجاعة والصدق:', description: 'الوقوف بجانب الحق بشجاعة وصدق والتعبير عنه بلطف وأدب أمام الآخرين.' },
            { title: 'الصبر والتوكل:', description: 'استلهام معاني الأمل واليقين بالله من قصة السيدة هاجر وسعيها في الوادي القاحل.' }
          ] : [
            { title: 'Seeking Truth with Reason:', description: 'Understanding independent thinking and logical checking rather than blind imitation.' },
            { title: 'Standing for Faith:', description: 'Being brave when speaking the truth respectfully, even when facing opposition.' },
            { title: 'Patience and Hope:', description: 'Drawing lessons of hope and resilience from Hagar and Ishmael’s patience in the valley.' }
          ]
        ) : isMoses ? (
          isAr ? [
            { title: 'الوقوف في وجه الظلم:', description: 'نصرة المستضعفين والدفاع عن الحق والعدل في مواجهة قوى البغي والطغيان.' },
            { title: 'القيادة الحكيمة والمسؤولية:', description: 'قيادة الآخرين برفق وصبر وتوجيههم وتفقد أحوالهم بحكمة ورحمة.' },
            { title: 'الكرامة والعدالة الإنسانية:', description: 'لكل إنسان حق أصيل في الكرامة والمعاملة الحسنة والعدالة دون تمييز.' }
          ] : [
            { title: 'Advocating for the Oppressed:', description: 'Standing up for the weak and defending human rights against tyrannical power.' },
            { title: 'Leadership with Responsibility:', description: 'Guiding others with wisdom, patience, and a deep commitment to their welfare.' },
            { title: 'Equality and Dignity:', description: 'Every human being has inherent dignity and must be treated with respect, regardless of status.' }
          ]
        ) : isMecca ? (
          isAr ? [
            { title: 'الأخوة الإنسانية والمساواة:', description: 'التأكيد على وحدة الأصل البشري ونبذ التفاخر بالأنساب والعصبية القبلية أو التفرقة العنصرية.' },
            { title: 'العدالة الاجتماعية والاقتصادية:', description: 'إقامة أسس متينة للتكافل الاجتماعي، ومحاربة الاحتكار، ونصرة الأرامل واليتامى والمستضعفين.' },
            { title: 'صون الكرامة الإنسانية:', description: 'حماية حقوق وحريات جميع أفراد المجتمع، وبالأخص الفئات التي كانت مهمشة تاريخياً.' }
          ] : [
            { title: 'Universal Human Brotherhood:', description: 'Emphasizing shared human ancestry (from Adam and Eve) and transcending tribal pride, origin, or racism.' },
            { title: 'Social Justice and Fair Trade:', description: 'Constructing robust social security nets, banning usurious or corrupt economic exploitation, and giving key priority to helping widows, orphans, and travellers.' },
            { title: 'Dignity of All Persons:', description: 'Protecting and valuing the absolute fundamental rights of all citizens, especially those historically marginalized.' }
          ]
        ) : isYunus ? (
          isAr ? [
            { title: 'الرحمة الشاملة والمحبة:', description: 'النظر لجميع المخلوقات بعين اللطف والمحبة، فكل كائن حي مرآة تعكس بديع صنع الخالق سبحانه.' },
            { title: 'الصدق الباطن والنزاهة:', description: 'الاستقامة المطلقة في النوايا الباطنة والظاهرة، فالحق سبحانه لا يقبل اعوجاجاً في طريق الصدق.' },
            { title: 'التماسك الاجتماعي والفنون:', description: 'استخدام الكلمة الطيبة والشعر البسيط العذب لتقريب القلوب وبث السلام في أوقات الفتن.' }
          ] : [
            { title: 'Universal Compassion:', description: 'Viewing all of creation with active love and kindness, because every creature is a temporal mirror reflecting the names of the Creator.' },
            { title: 'Honesty and Integrity (Straight Wood):', description: 'Cultivating absolute honesty inside one\'s thoughts and outer deeds, symbolizing that nothing crooked remains in the circle of truth.' },
            { title: 'Cultural Cohesion & Fine Arts:', description: 'Employing simple, beautiful language and pure poetry as emotional healing and a force of unity in times of social unrest.' }
          ]
        ) : isAdam ? (
          isAr ? [
            { title: 'الأصل البشري الواحد والمساواة:', description: 'بما أن البشر جميعاً يشتركون في أصل واحد، فإن الجميع يستحقون الاحترام والكرامة بالتساوي.' },
            { title: 'الأمانة ورعاية الأرض:', description: 'استخلاف الإنسان في الأرض يحمل مسؤولية عالمية لحماية الطبيعة والبيئة وكل كائن حي.' },
            { title: 'الحوار وحل النزاعات سلماً:', description: 'يبرز موقف هابيل السلمي قيمة اختيار الحوار والبعد عن الحسد والعنف كوسيلة لحل الخلافات.' }
          ] : [
            { title: 'Universal Origin & Equality:', description: 'Since all humans share a single origin, all people deserve equal respect, value, and dignity.' },
            { title: 'Responsible Stewardship:', description: 'Humans are appointed as caretakers of the earth, carrying a global duty to protect nature, wildlife, and resources.' },
            { title: 'Dialogue and Conflict Resolution:', description: 'Habil’s peaceful stance highlights the value of choosing dialogue and non-violence over jealousy and aggression.' }
          ]
        ) : (
          isAr ? [
            { title: 'الأخلاق والفضائل الإنسانية:', description: 'غرس الأخلاق الرفيعة والقيم السامية كركيزة أساسية لبناء مجتمع متعاون ومتراحم.' },
            { title: 'الاحترام المتبادل والتنوع:', description: 'تعزيز الفهم والتقدير المتبادل لكل الأفراد باختلاف خلفياتهم وثقافاتهم.' },
            { title: 'المسؤولية الاجتماعية والبيئية:', description: 'تشجيع المتعلمين على الإسهام الإيجابي في بيئتهم وحل المشكلات بطرق بناءة.' }
          ] : [
            { title: 'Universal Values and Character:', description: 'Focusing on universal moral growth and character building in a diverse world.' },
            { title: 'Empathy and Understanding:', description: 'Encouraging young learners to listen to different perspectives with kindness.' },
            { title: 'Social and Environmental Awareness:', description: 'Guiding pupils to take small, constructive actions inside their class and local community.' }
          ]
        );

        const fallbackActions = isAbraham ? (
          isAr ? [
            'كيف يمكن للتفكير السليم والمنطق أن يساعدنا في اتخاذ القرارات الصحيحة في حياتنا؟',
            'لماذا من المهم أن نكون شجعاناً عندما نعرف الحقيقة ونريد التعبير عنها بلطف؟',
            'كيف يمكننا إظهار الصبر والتوكل عندما نمر بظروف أو أماكن جديدة أو صعبة؟'
          ] : [
            'How can clear thinking help us avoid wrong choices today?',
            'Why is it important to speak the truth with kindness and respect?',
            'How can we show patience in new or challenging places?'
          ]
        ) : isMoses ? (
          isAr ? [
            'كيف نساعد زملاءنا الذين يتعرضون للمضايقات أو المعاملة السيئة في المدرسة أو مجتمعنا؟',
            'ما أهمية وجود قوانين عادلة تحمي الجميع وتحرص على صون كرامة المستضعفين؟',
            'كيف يمكننا التعبير عن آرائنا والدفاع عن الحق بطرق سلمية وحضارية؟'
          ] : [
            'How can we help people who are treated unfairly or bullied in our school or community?',
            'Why is it important to have rules that protect everyone, especially those who are weak?',
            'How can we speak up for what is right in a peaceful and respectful way?'
          ]
        ) : isMecca ? (
          isAr ? [
            'ناقش الأثر الاجتماعي والأخلاقي للربا والاحتكار واتساع الفجوة المادية بين الأغنياء والفقراء.',
            'حلل كيف أرست خطبة الوداع أسساً خالدة لحقوق الإنسان، والمساواة الكاملة، وحماية الأرواح والأموال.',
            'استكشف كيف تبني المجتمعات أواصر التضامن والتعاون لمواجهة التحديات والأزمات الكبرى.'
          ] : [
            'Discuss the social and ethical dangers of usury, monopolies, and extreme wealth gaps.',
            'Analyze how the Farewell Sermon lays down the foundation of modern human rights, equality, and protection.',
            'Explore how societies can build strong community solidarity during times of transition or difficulty.'
          ]
        ) : isYunus ? (
          isAr ? [
            'كيف يمكن للكلمة الصادقة أو الفن الهادف تقريب وجهات النظر ونشر قيم السلام في المدرسة والمجتمع؟',
            'ما المعنى الأخلاقي للعمل الجاد والنزاهة في مهامنا اليومية الصغيرة وكيف يبني ذلك شخصيتنا؟',
            'تأمل في التزامنا الإيجابي بمعاملة الزملاء بتقدير متساوٍ وتجنب ما يجرح خواطرهم أو يؤذي مشاعرهم.'
          ] : [
            'Discuss how simple, heartfelt literature or art can help resolve conflicts and unite diverse groups in high school or society.',
            'Explore the moral meaning of "crooked vs. straight wood," and discuss why honesty in small, daily tasks builds strong character.',
            'Reflect on the ethical responsibility of treating neighbors and classmates with equal respect to avoid causing any emotional harm.'
          ]
        ) : isAdam ? (
          isAr ? [
            'كيف يمكننا ترجمة شعورنا بأننا جميعاً عائلة إنسانية واحدة إلى سلوكيات لطف وتعاون مع زملائنا؟',
            'ما هي الممارسات اليومية التي يمكننا القيام بها للمحافظة على بيئتنا المدرسية والمنزلية؟',
            'كيف يساهم ضبط النفس والتغلب على الحسد في حمايتنا من ارتكاب الأخطاء وإيذاء الآخرين؟'
          ] : [
            'How can we show that we respect all classmates as part of one human family?',
            'What are some practical ways we can care for our environment and nature at school?',
            'Discuss how understanding the consequences of jealousy can help us solve arguments peacefully.'
          ]
        ) : (
          isAr ? [
            'كيف تساهم أخلاقنا وتصرفاتنا اليومية في نشر المودة والسلام داخل بيئتنا الصفية والمدرسية؟',
            'كيف يمكننا إبراز الاحترام والتقدير لكل زملائنا باختلاف صفاتهم ومهاراتهم الفردية؟',
            'ما هي المسؤوليات البسيطة التي يمكننا القيام بها يومياً لنكون مواطنين صالحين في مجتمعنا؟'
          ] : [
            'How do our daily choices and manners contribute to a peaceful and warm classroom environment?',
            'In what ways can we show active respect and appreciation for every classmate\'s unique talents?',
            'What simple responsibilities can we take on today to show care for our shared school environment?'
          ]
        );

        return (
          <div className="space-y-6 sm:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment border-b border-gold/20 pb-3 sm:pb-4">
              {globalData?.title || (isAr ? 'المواطنة العالمية والجسور الثقافية' : t('tg.globalCitizenship'))}
            </h3>
            <p className="font-serif text-sm sm:text-lg text-white leading-relaxed italic">
              {globalData?.description || (
                isAr ? (
                  isAbraham ? 'تُركِّز سيرة نبي الله إبراهيم عليه السلام على البحث عن الحقيقة، واستخدام العقل، والثبات على الحق برفق وحكمة.' :
                  isMoses ? 'تُركِّز قصة نبي الله موسى عليه السلام على مواجهة الظلم، وحماية حقوق الإنسان، وترسيخ معاني العدالة والتراحم.' :
                  isMecca ? 'تُركِّز دراسة مكة وظهور الإسلام على إرساء قيم العدالة الاجتماعية، والنزاهة الاقتصادية، والأخوة البشرية الشاملة.' :
                  isYunus ? 'تُركِّز مسيرة الشاعر يونس إمره على المحبة الشاملة، والنزاهة الباطنة، وخدمة الإنسانية بالكلمة الطيبة والجمال.' :
                  isAdam ? 'تُركِّز قصة آدم عليه السلام على الأصل الإنساني المشترك، ورعاية الأمانة وعمارة الأرض، والاعتراف بالخطأ بتواضع ويقين.' :
                  'التركيز على بناء القيم الإنسانية المشتركة، والمسؤولية الأخلاقية، والعيش المشترك في ضوء العبر والدروس.'
                ) : (
                  isAbraham ? 'The story of Prophet Abraham (AS) focuses on seeking truth, using reason, and standing with gentle strength.' :
                  isMoses ? 'The story of Prophet Moses (AS) focuses on standing against oppression, advocating for human dignity, and promoting justice.' :
                  isMecca ? 'The study of Mecca and the rise of Islam focuses on social justice, fair economics, and universal human brotherhood.' :
                  isYunus ? 'The life and legacy of Yunus Emre focus on universal compassion, inner integrity, ethics of love, and social solidarity through art.' :
                  isAdam ? 'The story of Prophet Adam (AS) focuses on our shared human origin, responsible stewardship of the earth, and the beauty of humility after a mistake.' :
                  t('tg.coreGlobalValues')
                )
              )}
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gold/5 border border-gold/10 p-4 sm:p-8 rounded-2xl">
                <h4 className="font-display text-lg sm:text-2xl text-gold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <Globe size={20} className="sm:w-6 sm:h-6 shrink-0" /> {t('tg.keyThemes')}
                </h4>
                <div className="space-y-3 font-serif text-xs sm:text-lg text-white leading-relaxed">
                  <ul className="space-y-2 sm:space-y-3 pl-4 sm:pl-6 border-l-2 border-gold/20">
                    {(globalData ? globalData.themes : fallbackThemes).map((theme, i) => (
                      <li key={i}>• <strong>{theme.title}</strong> {theme.description}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 p-4 sm:p-8 rounded-2xl border border-gold/10">
                <h4 className="font-display text-base sm:text-xl text-gold mb-3 sm:mb-4">{t('tg.actionPoints')}</h4>
                <ul className="space-y-2 sm:space-y-3 font-serif text-white text-xs sm:text-base leading-relaxed">
                  {(globalData?.actions || fallbackActions).map((action, i) => (
                    <li key={i}>• {action}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      }
      case 'values': {
        const valuesData = metadata?.valuesEducation;
        const isAr = language === 'ar';
        
        const fallbackItems = isAbraham ? (
          isAr ? [
            { label: 'الشجاعة والصدق', value: 'الوقوف بجانب الحق والصدق حتى في أشد الظروف صعوبة.' },
            { label: 'التوكل واليقين', value: 'الاعتماد الكامل واليقين بالله سبحانه وتعالى في الابتلاءات والشدائد (معجزة النار).' },
            { label: 'الصبر والتحمل', value: 'صبر السيدة هاجر عليها السلام وسعيها في الوادي القاحل بكل عزم وأمل ويقين.' },
            { label: 'الإخلاص والتوحيد', value: 'عبادة الخالق الواحد البارئ والتفكر في بديع صنعه في الكون الفسيح.' },
            { label: 'الامتنان والرضا', value: 'تقدير نعم الله سبحانه وتعالى الكثيرة والامتنان لها كمعجزة بئر زمزم المبارك.' }
          ] : [
            { label: 'Courage', value: 'Standing for truth even when facing great difficulties.' },
            { label: 'Trust (Tawakkul)', value: 'Relying on Allah during trials, like the fire miracle.' },
            { label: 'Patience', value: 'Hagar’s patience and strength in the valley.' },
            { label: 'Sincerity', value: 'Worshipping only the Creator with clear and honest pure hearts.' },
            { label: 'Gratitude', value: 'Recognizing blessings like Zamzam water.' }
          ]
        ) : isMoses ? (
          isAr ? [
            { label: 'الشجاعة والصدق', value: 'الجهر بالحق والثبات على المبدأ أمام القوى العاتية والمخاوف العظيمة.' },
            { label: 'التوكل واليقين', value: 'الثقة المطلقة في نصر الله ورعايته وحمايته في أحلك المواقف (سلة النيل، انفلاق البحر).' },
            { label: 'العدل والإنصاف', value: 'معاملة جميع الناس بإنصاف وتطبيق القوانين لحماية الضعفاء والانتصار للمظلوم.' },
            { label: 'التوبة والإصلاح', value: 'الاعتراف بالخطأ فوراً، وطلب المغفرة بصدق، والتعلم الواعي من التجارب السابقة.' },
            { label: 'إغاثة الملهوف', value: 'تقديم العون والمساعدة للضعفاء والمحتاجين بكل رفق ولطف (مساعدة الفتاتين في مدين).' }
          ] : [
            { label: 'Courage', value: 'Speaking the truth and standing firm even when facing great power or fear.' },
            { label: 'Trust (Tawakkul)', value: 'Believing in Allah’s protection and guidance during difficult situations (the Nile basket, the splitting of the sea).' },
            { label: 'Justice', value: 'Treating all people fairly and opposing oppression or abuse.' },
            { label: 'Repentance', value: 'Admitting mistakes quickly, asking for forgiveness, and learning from experience.' },
            { label: 'Helping Others', value: 'Showing kindness and offering help to those in need (helping the two sisters in Midian).' }
          ]
        ) : isMecca ? (
          isAr ? [
            { label: 'التوحيد والحرية', value: 'عبادة الله وحده كمنطلق أساسي لتحرير روح الإنسان من التبعية والمساواة الشاملة.' },
            { label: 'الأمانة والصدق', value: 'التزام الصدق المطلق في الحديث والأمانة الكاملة في المعاملات والتجارة العادلة.' },
            { label: 'التكافل والعدالة', value: 'بذل المال ومساعدة الفقراء، الأيتام، والأرامل للقضاء على الجشع والاحتكار والأنشطة الظالمة.' },
            { label: 'الصبر والثبات', value: 'تحمل الصعوبات والشدائد والأذى بسلام وصبر جميل دون الانجرار إلى دروب العنف.' },
            { label: 'المساواة والتقوى', value: 'رؤية البشر كأسنان المشط وتفاضلهم فقط بالتقوى والأخلاق والعمل الصالح المعمر.' }
          ] : [
            { label: 'Tawhid (Absolute Oneness)', value: 'Serving only the single Creator, which establishes absolute human liberty and class equality.' },
            { label: 'Trustworthiness (Al-Amin)', value: 'Building solid integrity and truthfulness in daily speech, actions, and fair commercial trade.' },
            { label: 'Social Justice & Charity', value: 'Sharing resources with the poor, widows, orphans, and travellers to eradicate hoarding and greed.' },
            { label: 'Resilience (Sabr)', value: 'Patiently and non-violently enduring boycotted isolation, verbal abuse, and physical hardships.' },
            { label: 'Unity & Equality', value: 'Recognizing individuals strictly by their moral character (taqwa) rather than status, race, or tribal wealth.' }
          ]
        ) : isYunus ? (
          isAr ? [
            { label: 'العشق الإلهي', value: 'توجيه كافة السلوكيات والمعاملات بنور محبة الله عز وجل والرحمة الشاملة بكل خلقه.' },
            { label: 'الإخلاص والنزاهة', value: 'تطابق النية مع الفعل للوصول إلى مرتبة الصدق التام الخالي من شائبة النفاق.' },
            { label: 'التواضع والخدمة', value: 'بذل الجهد لخدمة الآخرين وتأديب النفس وكسر الكبر والأنانية بالالتزام الذاتي المستمر.' },
            { label: 'حفظ القلوب', value: 'الحرص الواعي على تجنب الغيبة والغضب وكل قول أو فعل قد يجرح قلوب ومشاعر الآخرين.' },
            { label: 'الصبر الجميل', value: 'استقبال تقلبات الحياة والشدائد بالرضا والتوكل والامتنان والفرح الروحي الدائم.' }
          ] : [
            { label: 'Divine Love (Aşk)', value: 'Guiding all relations and moral actions through the light of loving Allah and His entire creation.' },
            { label: 'Perfect Sincerity (Straight Wood)', value: 'Matching inner intentions completely with outer behavior to achieve unblemished honesty.' },
            { label: 'Absolute Humility', value: 'Active service to others and subduing the arrogant ego (nafs) through continuous self-discipline.' },
            { label: 'Guarding the Heart', value: 'Striving deeply to avoid backbiting, anger, or gossip that might break or hurt any human heart.' },
            { label: 'Beautiful Patience', value: 'Accepting temporary worldly trials and poverty with content joy, peace, and deep gratitude.' }
          ]
        ) : isAdam ? (
          isAr ? [
            { label: 'التواضع والرفعة', value: 'تجنب الكبر والاستعلاء، مدركين أن التواضع هو جوهر الرفعة والكرامة البشرية.' },
            { label: 'التوبة والرجوع للحق', value: 'تحمل مسؤولية الخطأ والمبادرة بالاعتراف به والإصلاح الفوري بكل صدق ويقين.' },
            { label: 'الإخلاص والصدق', value: 'تقديم أفضل ما لدينا طاعة لله سبحانه وبإخلاص تام دون تطلع لرياء أو سمعة.' },
            { label: 'ضبط النفس والسكينة', value: 'التغلب على مشاعر الغضب والحسد والتحكم بالذات لحماية أنفسنا ومجتمعنا من الأذى.' }
          ] : [
            { label: 'Humility', value: 'Subduing the ego and rejecting arrogance, as shown by the contrast between Adam\'s obedience and Iblis\'s pride.' },
            { label: 'Repentance & Responsibility', value: 'Taking active responsibility for mistakes, asking for forgiveness, and making sincere amends.' },
            { label: 'Sincerity & Pure Effort', value: 'Offering our best work with sincere hearts, without seeking worldly show or competitive pride.' },
            { label: 'Self-Control', value: 'Overcoming negative impulses like anger and jealousy, focusing on peace and contentment.' }
          ]
        ) : (
          isAr ? [
            { label: 'الرحمة والتراحم', value: 'نشر المودة والتعامل بقلب رحيم ورفيق مع جميع الزملاء والكائنات.' },
            { label: 'الأمانة والصدق', value: 'الالتزام الكامل بالحق والصدق في الحديث وحفظ الأمانات والعهود.' },
            { label: 'الصبر والجد', value: 'بذل الجهد المتواصل لمواجهة التحديات الدراسية واليومية بروح إيجابية متفائلة.' },
            { label: 'العدالة والاحترام', value: 'معاملة الجميع بتقدير متساوٍ ومحاربة الانحيازات والاعتزاز بالفضيلة.' }
          ] : [
            { label: 'Compassion & Mercy', value: 'Spreading warmth and treating all peers and living creatures with a kind, caring heart.' },
            { label: 'Integrity & Sincerity', value: 'Committing fully to truthfulness in speech, actions, and keeping promises.' },
            { label: 'Patience & Diligence', value: 'Putting in active, consistent effort to face learning and life challenges with optimistic resilience.' },
            { label: 'Respect & Dignity', value: 'Treating all individuals with equal high regard, celebrating virtues and moral characters.' }
          ]
        );

        const fallbackQuestions = isAbraham ? (
          isAr ? [
            'كيف يساعدنا التفكير السليم والمنطق في اتخاذ القرارات الصحيحة في حياتنا اليومية؟',
            'لماذا من المهم أن نكون شجعاناً عندما نعرف الحق ونعبر عنه بلطف وأدب؟',
            'كيف يمكننا إظهار الصبر والتوكل عندما نمر بظروف أو أماكن جديدة أو صعبة؟'
          ] : [
            'How does thinking for yourself help us make good choices?',
            'How can we show patience in difficult circumstances?',
            'Why is standing for what is right a form of courage?'
          ]
        ) : isMoses ? (
          isAr ? [
            'كيف يمنحنا التوكل على الله سبحانه القوة واليقين لمواجهة الأوقات الصعبة؟',
            'ما هي الطريقة الفعالة والنبيلة لنصرة الضعفاء ومساعدة من يتعرض لمعاملة غير عادلة؟',
            'لماذا يعد الاعتراف بالخطأ والاستغفار علامة على القوة الأخلاقية الحقيقية؟'
          ] : [
            'How does trusting Allah help us find courage in hard times?',
            'What is the best way to help someone who is treated unfairly?',
            'Why is it important to admit when we are wrong and repent?'
          ]
        ) : isMecca ? (
          isAr ? [
            'كيف يهدم الإيمان بالخالق الواحد فكرة التفاضل المبني على العرق أو النسب أو الجاه المادي؟',
            'لماذا تعتبر الأمانة والتجارة الصادقة عبادة روحية عظيمة وليست مجرد نشاط مالي دنيوي؟',
            'ما هي العبر الأخلاقية التي نتعلمها من ثبات وصبر المسلمين الأوائل أثناء الحصار المقاطع؟'
          ] : [
            'How does belief in a single Creator challenge the idea of racial or tribal superiority?',
            'Why is honest trade more than just an economic activity – how is it a spiritual duty?',
            'What lessons of patience can we draw from the early Muslims who endured years of boycotted isolation?'
          ]
        ) : isYunus ? (
          isAr ? [
            'لماذا يعلمنا يونس إمره أن جرح قلب إنسان آخر يذهب ببركة عباداتنا ويجعل أعمالنا بلا معنى؟',
            'كيف يمكن للمرء أن يطابق نواياه الباطنة وتصرفاته الظاهرة ليصل إلى الصدق التام؟',
            'كيف ندرب أنفسنا على التغلب على الغضب والكبر عند مواجهة الإساءة أو الخلاف؟'
          ] : [
            'Why does Yunus Emre teach that hurting another person\'s heart renders our worship meaningless?',
            'How can a person match their inner thoughts with their outer actions to achieve true honesty?',
            'How can we train ourselves to overcome anger and arrogance when someone insults or opposes us?'
          ]
        ) : isAdam ? (
          isAr ? [
            'كيف تمنحنا قصة توبة آدم عليه السلام الأمل في أن الأخطاء هي فرص للتعلم والارتقاء والرجوع للحق؟',
            'كيف تظهر قصة قابيل وهابيل أن الحسد غير المضبوط يقود الإنسان إلى عواقب وخيمة ومؤلمة؟',
            'ما هي الخصال الأخلاقية التي تجعل الإنسان مكرماً ومحترماً حقيقياً في مجتمعه؟'
          ] : [
            'How does Adam\'s story of repentance teach us that mistakes are opportunities for learning, growth, and returning to truth?',
            'How does the story of Habil and Qabil demonstrate that uncontrolled jealousy leads to painful consequences?',
            'What are the core moral virtues that make a person truly honored and respected in their community?'
          ]
        ) : (
          isAr ? [
            'كيف يعيننا الصدق والأمانة على بناء علاقات ثقة متينة ودائمة مع الآخرين؟',
            'لماذا تعد القدرة على ضبط النفس والتحكم بالغضب عند الخلاف قوة وشجاعة حقيقية؟',
            'كيف يمكننا إظهار الرحمة واللطف الفعلي في تعاملاتنا مع من هم أصغر منا أو أضعف؟'
          ] : [
            'How do honesty and integrity help us build solid, lasting bonds of trust with others?',
            'Why is the capacity to manage our temper during an argument a sign of true moral strength?',
            'In what practical ways can we demonstrate actual compassion to those who are younger or weaker?'
          ]
        );

        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">
              {valuesData?.title || (isAr ? 'التربية الأخلاقية وبناء الشخصية' : t('tg.valuesCharacter'))}
            </h3>
            <p className="font-serif text-sm sm:text-lg text-white italic mb-6 sm:mb-8">
              {valuesData?.description || (
                isAr ? (
                  isAbraham ? 'التركيز على قيم الصدق المطلق، الشجاعة الأدبية في نصرة الحق، واليقين والتوكل الجميل.' :
                  isMoses ? 'التركيز على بناء الشخصية الأخلاقية المتكاملة، الشجاعة، والاعتماد المطلق على الرعاية الإلهية.' :
                  isMecca ? 'التركيز على تطهير القلوب من العصبية، والالتزام بالأمانة والصدق، ونصرة المستضعفين واليتامى.' :
                  isYunus ? 'التركيز على تهذيب النفس وتزكيتها، وممارسة التواضع والخدمة، ونشر المحبة والسلام الداخلي.' :
                  isAdam ? 'التركيز على التواضع والتحرر من الكبر، والاعتراف بالخطأ والمبادرة بالتوبة، وإخلاص العمل والجهد.' :
                  'التركيز على ترسيخ القيم الأخلاقية النبيلة وبناء الشخصية القوية المتوازنة والفاعلة في الخير.'
                ) : (
                  isAbraham ? 'Focus on seeking truth, courage under trial, and ultimate patience.' :
                  isMoses ? 'Focus on building strong moral character, courage, and reliance on divine guidance.' :
                  isMecca ? 'Focus on purifying tribal loyalty, cultivating absolute honesty, and supporting the oppressed.' :
                  isYunus ? 'Focus on cultivating a pure heart, practicing extreme humility, and expressing divine love toward all creation.' :
                  isAdam ? 'Focus on purifying the heart from pride, taking responsibility for mistakes, and practicing pure sincerity and self-control.' :
                  t('tg.keyValues')
                )
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-gold/5 p-4 sm:p-6 rounded-xl border border-gold/10">
                <h4 className="font-display text-gold text-sm sm:text-base mb-2 sm:mb-3">{t('tg.keyThemes')}</h4>
                <ul className="space-y-2 font-serif text-white text-xs sm:text-base leading-relaxed">
                  {(valuesData ? valuesData.items : fallbackItems).map((item, i) => (
                    <li key={i}>• <strong>{item.label}:</strong> {item.value}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-gold/10">
                <h4 className="font-display text-gold text-sm sm:text-base mb-2 sm:mb-3">{t('tg.actionPoints')}</h4>
                <ul className="space-y-2 font-serif text-white text-xs sm:text-sm leading-relaxed">
                  {(valuesData?.questions || fallbackQuestions).map((q, i) => (
                    <li key={i}>• {q}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      }
      case 'sensitive': {
        const sensitiveData = metadata?.sensitiveNotes;
        const isAr = language === 'ar';
        
        const fallbackNotes = isAbraham ? (
          isAr ? [
            'التعامل مع مشهد النار بوصفه معجزة إلهية للحماية والسلام؛ والتركيز البالغ على قيمة التوكل والأمان.',
            'شرح مفهوم "الأصنام" بتبسيط يناسب عقول الطلاب كرموز وتماثيل حجرية كان الناس يعبدونها خطأً بدلاً من الخالق سبحانه.',
            'عرض قصة هجرة السيدة هاجر وابنها إسماعيل عليه السلام بتقدير بالغ وعناية لإبراز فضيلة الصبر والأمل وعظيم السعي.',
            'التركيز الشديد على المنجزات والرموز الإيجابية كبناء الكعبة المشرفة وتفجر بئر زمزم المبارك كرموز للنماء والنماء والسلام والوحدة.',
            'توجيه بوصلة النقاش نحو البناء الداخلي والنقاء الأخلاقي والصفات الإيجابية الكريمة للأنبياء عليهم السلام.'
          ] : [
            'Handle the fire scene as a miracle of protection; focus on the lesson of trust.',
            'Explain "idols" simply as physical things people mistakenly worshipped instead of the Creator.',
            'Present Hagar and Ishmael’s story with deep respect for their patience, hope, and resilience.',
            'Focus on key historical milestones like the building of the Ka‘ba and the miracle of Zamzam.',
            'Keep structural focus on internal strength and character development of the prophets.'
          ]
        ) : isMoses ? (
          isAr ? [
            'تناول مواقف وقرارات فرعون وعناده بموضوعية وهدوء؛ والتركيز على العبرة التربوية الخالدة بأن القوة لا قيمة لها بلا عدل.',
            'توضيح حادثة السوق التي وقعت خطأً من موسى عليه السلام بوصفها حدثاً بشرياً غير مقصود قاده للاستغفار الصادق والنمو الروحي والارتقاء.',
            'عرض محنة وتفريق عائلات بني إسرائيل وصعوبة الظروف بلمسة تربوية حذرة تراعي التوازن النفسي والوجداني للطلاب.',
            'إبراز معجزات الله الكبرى (العصا، اليد البيضاء، انفلاق البحر) كعلامات مضيئة على قدرة الله سبحانه ورعايته للمظلومين والضعفاء.',
            'توجيه النقاش والتحليل حول عاقبة فرعون كقانون طبيعي عادل للجزاء نتيجة الكبر العظيم والظلم البين والإعراض عن الحق.'
          ] : [
            'Handle the actions and decisions of Pharaoh calmly; focus on the pedagogical lesson that power must always be aligned with justice.',
            'Explain Moses’s accidental mistake in the bazaar as a human event that led to sincere repentance and growth.',
            'Present the separation of families and the hardship of the Children of Israel with sensitivity to students’ emotional levels.',
            'Focus on the miracles (the staff, the hand, and the splitting of the sea) as signs of Allah’s ultimate power and protection.',
            'Keep discussions of Pharaoh’s fate focused on the natural consequences of pride, injustice, and refusal to change.'
          ]
        ) : isMecca ? (
          isAr ? [
            'التعامل مع العادات والتقاليد الجاهلية بموضوعية ودقة تاريخية، مبرزين التحول الأخلاقي والإنساني الشامل والعميق الذي أحدثه الإسلام.',
            'عرض فترات الحصار الاقتصادي والاجتماعي والأذى الذي تعرض له المسلمون الأوائل بهدوء، مركزين على قيم الصبر والثبات والتعامل السلمي والرحمة.',
            'تبيان المعاملات المالية كالربا والاحتكار بأسلوب تاريخي ميسر ومقارنتها بقيم التكافل والعدالة الاقتصادية والاجتماعية في الإسلام.',
            'شرح مفهوم التوحيد وإفراد العبودية لله بوصفه قوة تحريرية واجتماعية وإنسانية عظيمة تعيد الاعتبار والكرامة التامة لجميع المستضعفين.',
            'التأكيد التام عند دراسة خطبة الوداع الخالدة على مبدأ الأخوة الإنسانية الشاملة التي تتجاوز وتنسف كل الفروق العرقية والطبقية والقبلية.'
          ] : [
            'Handle pre-Islamic tribal practices and idolatry with objective historical accuracy, highlighting the moral transformation brought by Islam.',
            'Discuss historical boycotted hardships and early martyrdoms calmly, focusing on the concepts of resilience, patience, and non-violence.',
            'Present the economic systems like usury (riba) in their clear historical context while gently highlighting the modern socio-economic ethics.',
            'Explain the concept of monotheism (tawhid) respectfully as a historic source of human dignity, social liberation, and class equality.',
            'Ensure the study of the Farewell Sermon highlights the universal brotherhood of humanity, transcending race, tribe, and social origin.'
          ]
        ) : isYunus ? (
          isAr ? [
            'شرح مصطلحات السلوك والتربية الروحية والتصوف بتبسيط بالغ يناسب الفئة العمرية للطلاب كمدارس ومحاضن أخلاقية تاريخية تهذب السلوك البشري.',
            'عرض مجاز "الحطب المستقيم" الذي كان يجمعه يونس بوضوح لبيان أن الاستقامة الداخلية والنزاهة هي المقصد الأسمى والأهم وراء تزكية النفس.',
            'التعامل مع قيم الزهد والاكتفاء والرضا باليسير برفق وحكمة، موضحين أن يونس آثر الغنى الحقيقي للقلب والروح على بهرج الدنيا الزائل.',
            'مناقشة عبارة يونس الخالدة "أحب الخلق من أجل الخالق" كقاعدة سامية وعالمية تعزز التسامح الشامل وحماية البيئة والإحسان لكل كائن حي.',
            'توجيه نقاش مجاهدة الهوى والطباع السيئة بضرب أمثلة عملية من حياة الطلاب اليومية، مبيناً أن التغلب على الصفات الذميمة هو قمة الانضباط والتحكم بالذات.'
          ] : [
            'Explain Sufism (Tasavvuf) as the spiritual dimension of Islamic practice, complementing formal worship and deepening inner moral character.',
            'Teach historical dervish practices, lodges (tekkes), and sheikhs objectively as structured educational, artistic, and social centers in Anatolian history.',
            'Frame the inner struggle against the animal self (nafs) as a proactive, positive endeavor of personal self-discipline and refinement.',
            'Frame reflections on death and temporary life gently, focusing on how mortality teaches humility, gratitude, and social responsibility.',
            'Emphasize the profound Sufi metaphor of the human heart as a mirror of divine presence, so that students understand the severe ethical cost of pride.'
          ]
        ) : isAdam ? (
          isAr ? [
            'تقديم قصة بدء الخلق بنبرة دهشة وتفكر وتأمل رائع، مركزين على قيمة العقل والتعلم ونعمة المعرفة العظيمة الممنوحة للنوع الإنساني.',
            'شرح استكبار إبليس وإعراضه بشكل موضوعي مبسط لبيان أن الغرور والكبر يؤديان للهلاك، بينما التواضع والاعتراف بالخطأ يرفعان صاحبهما لمقامات شريفة.',
            'تناول قصة ابني آدم (هابيل وقابيل) بلطف فائق وبلا ترويع. تجنب تفصيل المشهد الجسدي العنيف وركز بدلاً من ذلك على قبح الحسد وعاقبة الظلم والاعتداء وقيمة السلم والصفح.',
            'تفسير قصة زلل الجنة والندم بوصفها أثراً بشرياً طبيعياً قاده الاستغفار للتكريم والاصطفاء مجدداً، لتعليم أهمية الأمل الدائم والتجدد الأخلاقي.'
          ] : [
            'Present the creation story with deep awe and wonder, focusing on the unique gift of intellect, knowledge, and learning bestowed upon humanity.',
            'Explain the arrogance and refusal of Iblis objectively as a choice of proud vanity, emphasizing that humility is the genuine source of spiritual strength and dignity.',
            'Handle the story of Habil and Qabil with utmost pedagogical care. Completely avoid graphic or frightening physical descriptions of the violence, focusing entirely on the toxic nature of jealousy, the consequences of greed, and the beauty of Habil’s peaceful, non-violent response.',
            'Frame the temptation in Heaven and subsequent regret as normal aspects of the human experience, showing that sincere repentance (Tawbah) restores direct honor, connection, and spiritual elevation.'
          ]
        ) : (
          isAr ? [
            'معالجة جميع الابتلاءات والشدائد والقصص التاريخية بنبرة أمل ويقين وتوجيه تربوي متوازن بعيداً عن تفاصيل الترويع أو الترهيب الجسدي.',
            'تقديم الشخصيات والمواقف الإيجابية والسلبية بشكل موضوعي هادئ يساعد الطالب على استخلاص العبرة والفضيلة والمقارنة السليمة بمفرده.',
            'شرح الرموز والمجازات اللغوية والمصطلحات التاريخية بمفردات ميسرة ومفهومة تلائم المستوى اللغوي والعمري للطلاب دون تعقيد.',
            'الحرص على أن تكون الخاتمة والهدف دائماً هو تقوية البناء الأخلاقي الداخلي والدافع الذاتي للمتعلم نحو فعل الخير والتعامل الحسن.'
          ] : [
            'Handle all trials, hardships, and historical accounts with a tone of ultimate hope, balance, and positive guidance, avoiding scary physical descriptions.',
            'Present positive and negative character traits objectively, enabling young learners to draw comparisons and value lessons naturally.',
            'Explain metaphorical language, symbols, and historical terms in simple, clear language tailored to the pupils\' linguistic capabilities and maturity.',
            'Ensure the closing focus is always directed towards reinforcing the students\' internal moral motivation, inspiring them toward constructive habits.'
          ]
        );

        return (
          <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-lg sm:text-2xl text-parchment">
              {sensitiveData?.title || (isAr ? 'التوجيه التربوي الحساس والأساليب المقترحة' : t('tg.sensitiveGuidance'))}
            </h3>
            <div className="space-y-4">
              <div className="bg-amber-950/20 border border-amber-500/20 p-4 sm:p-6 rounded-2xl">
                <h4 className="font-display text-amber-400 text-sm sm:text-base mb-2">{t('tg.keyGuidance')}</h4>
                <ul className="space-y-2 sm:space-y-3 font-serif text-white text-xs sm:text-sm leading-relaxed">
                  {(sensitiveData?.notes || fallbackNotes).map((note, i) => (
                    <li key={i}>• {note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      }
      case 'tips':
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.tips')}</h3>
            <div className="space-y-4 sm:space-y-6">
              {[
                { title: t('tg.simpleClassroomEnglish'), desc: t('tg.simpleEnglishDesc') },
                { title: t('tg.supportMeaning'), desc: t('tg.supportMeaningDesc') },
                { title: t('tg.praiseEffort'), desc: t('tg.praiseEffortDesc') },
                { title: t('tg.consistency'), desc: t('tg.consistencyDesc') },
                { title: t('tg.recycle'), desc: t('tg.recycleDesc') },
                { title: t('tg.l1Use'), desc: t('tg.l1UseDesc') },
                { title: t('tg.production'), desc: t('tg.productionDesc') }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-6 items-start bg-white/5 p-4 sm:p-6 rounded-xl border border-gold/10">
                  <MessageSquare className="text-gold shrink-0 mt-0.5 sm:mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                  <div>
                    <h4 className="font-display text-parchment text-base sm:text-xl mb-1 sm:mb-1.5">{item.title}</h4>
                    <p className="font-serif text-xs sm:text-lg text-white leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-gold/10">
              <h4 className="font-display text-gold text-sm sm:text-base mb-2 sm:mb-3">{t('tg.usefulLanguage')}</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 font-serif text-white text-xs sm:text-sm">
                <li>• {t('tg.classroomLang1')}</li>
                <li>• {t('tg.classroomLang2')}</li>
                <li>• {t('tg.classroomLang3')}</li>
                <li>• {t('tg.classroomLang4')}</li>
                <li>• {t('tg.classroomLang5')}</li>
                <li>• {t('tg.classroomLang6')}</li>
              </ul>
            </div>
          </div>
        );
      case 'home':
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.home')}</h3>
            <div className="bg-white/5 border border-gold/10 p-4 sm:p-8 rounded-2xl space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <Home className="text-gold shrink-0 w-6 h-6 sm:w-7 sm:h-7" />
                <div className="space-y-4 sm:space-y-6">
                  <h4 className="font-display text-lg sm:text-2xl text-parchment">{t('tg.homeConnection')}</h4>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      t('tg.homeAction1'),
                      t('tg.homeAction2'),
                      t('tg.homeAction3'),
                      t('tg.homeAction4')
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 sm:gap-4 items-start group">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <p className={cn(
                          "font-serif text-xs sm:text-lg text-white leading-relaxed",
                          language !== 'ar' && "italic"
                        )}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gold/5 p-4 sm:p-6 rounded-xl border border-gold/10">
                <h4 className="font-display text-gold text-sm sm:text-base mb-2 sm:mb-3">{t('tg.parentTask')}</h4>
                <ul className="space-y-2 font-serif text-white text-xs sm:text-sm">
                  <li>• {t('tg.parentTask1')}</li>
                  <li>• {t('tg.parentTask2')}</li>
                  <li>• {t('tg.parentTask3')}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'checklist':
        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.checklist')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase tracking-widest">{t('tg.beforeClass')}</h4>
                {[
                  t('tg.checklistBefore1'),
                  t('tg.checklistBefore2'),
                  t('tg.checklistBefore3'),
                  t('tg.checklistBefore4')
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 sm:gap-3 bg-white/5 p-3 sm:p-4 rounded-xl border border-gold/10">
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    <p className="font-serif text-white text-xs sm:text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase tracking-widest">{t('tg.duringClass')}</h4>
                {[
                  t('tg.checklistDuring1'),
                  t('tg.checklistDuring2'),
                  t('tg.checklistDuring3'),
                  t('tg.checklistDuring4')
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 sm:gap-3 bg-white/5 p-3 sm:p-4 rounded-xl border border-gold/10">
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    <p className="font-serif text-white text-xs sm:text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-display text-gold text-xs sm:text-sm uppercase tracking-widest">{t('tg.afterClass')}</h4>
                {[
                  t('tg.checklistAfter1'),
                  t('tg.checklistAfter2'),
                  t('tg.checklistAfter3'),
                  t('tg.checklistAfter4')
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 sm:gap-3 bg-white/5 p-3 sm:p-4 rounded-xl border border-gold/10">
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    <p className="font-serif text-white text-xs sm:text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'appendices': {
        const appendicesData = metadata?.appendices;
        const fallbackExitTicket = isAbraham ? [
          'One lesson I learned about Prophet Abraham (AS) today is...',
          'An action of courage I saw in this study was...',
          'A simple vocabulary word from this chapter I want to use is...'
        ] : isMoses ? [
          'One lesson I learned about Prophet Moses (AS) today is...',
          'An action showing safe courage in this study was...',
          'A CEFR A2 word I want to keep using from this chapter is...'
        ] : isMecca ? [
          'One lesson I learned about Mecca’s history or transition is...',
          'An ethical value from the Farewell Sermon that still matters today is...',
          'A key academic term from this chapter I want to remember is...'
        ] : isYunus ? [
          'One lesson I learned about the Sufi concept of tawhid or love is...',
          'An action of honesty or humility I read about in this chapter was...',
          'A key vocabulary word related to character that I want to use is...'
        ] : [
          t('tg.exitTicket1'),
          t('tg.exitTicket2'),
          t('tg.exitTicket3')
        ];

        const fallbackMiniProjectTitle = isAbraham ? 'Truth Search Board' : isMoses ? 'The Midian Kindness Poster' : isMecca ? 'The Brotherhood Scroll' : isYunus ? 'The Straight Path Lodge' : t('tg.miniProjectIdea');
        const fallbackMiniProjectDesc = isAbraham ? 'Draw a simple representation of Abraham looking at the stars, moon, and sun and reflecting on the Creator. Write 2 simple English sentences explaining it.' : isMoses ? 'Draw or write about the scene in Midian where Prophet Moses (AS) helped the two sisters, and write 3 simple English sentences on how we can show kindness today.' : isMecca ? 'Design a physical scroll representing the Prophet\'s Farewell Sermon values of absolute racial equality and safety. Write 3 simple English sentences showing how these apply to global citizens.' : isYunus ? 'Draw or write about the scene of Taptuk Emre’s lodge where Yunus Emre carried only straight, uncrooked pieces of wood. Write 3 sentences in English on why integrity in little things matters for our hearts.' : t('tg.miniProjectDesc');

        const fallbackReflectiveTitle = isAbraham ? 'Patience and Trust' : isMoses ? 'Trusting Allah in Difficult Times' : isMecca ? 'Ethical Economics & Character' : isYunus ? 'Guarding and Polishing the Heart' : t('tg.reflectiveWritingPrompt');
        const fallbackReflectiveDesc = isAbraham ? 'Hagar placed her trust in Allah in the desert. Write about a time when you had to be patient, hopeful, and trust things would work out.' : isMoses ? 'Moses’s mother placed him in a basket on the Nile, trusting Allah’s protection. Write about a time when you had to trust and be calm during a hard situation.' : isMecca ? 'Meccan society had high trade wealth but low ethical care for the poor, orphans, and widows. Write about a time you noticed that real richness and success come from helping others rather than just hoarding wealth.' : isYunus ? 'Yunus Emre taught that the heart is the "throne of the Lord," and hurting another person\'s feelings ruins any good deed. Write about a time when you had to control your anger, be patient, or speak kindly to save a sibling or classmate\'s heart.' : t('tg.reflectiveWritingDesc');

        const fallbackSentenceFrames = isAbraham ? [
          'Prophet Abraham (AS) searched for the Creator because...',
          'The fire became cool and safe for Abraham by Allah’s command.',
          'Hagar showed deep patience in the empty valley when she...',
          'Allah blessed the family with the miraculous spring of Zamzam water.',
          'The key moral lesson of this story is...'
        ] : isMoses ? [
          'Prophet Moses (AS) fled to Midian because...',
          'Prophet Moses (AS) helped the two sisters water their...',
          'Allah spoke to Moses at the sacred mountain of...',
          'With Allah’s command, Prophet Moses (AS) used his staff to...',
          'The biggest lesson from Moses’s life is...'
        ] : isMecca ? [
          'Mecca grew as a major center of pilgrimage and trade because...',
          'The Prophet Muhammad (pbuh) challenged tribal pride by teaching...',
          'The Farewell Sermon declared that all human beings are equal because...',
          'We can support vulnerable and marginalized communities today by...',
          'The spiritual and social lessons from Meccan history show us...'
        ] : isYunus ? [
          'Yunus Emre served his spiritual teacher Taptuk Emre for many years with...',
          'According to Yunus Emre, the heart is the center of love because...',
          'He wrote his deep Sufi poems in incredibly simple and beautiful language to...',
          'To overcome pride, arrogance, greed, and anger, we must train our...',
          'True sincerity and inner morality mean that our inner intentions must match our...'
        ] : [
          t('tg.sentence1'),
          t('tg.sentence2'),
          t('tg.sentence3'),
          t('tg.sentence4'),
          t('tg.sentence5')
        ];

        return (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-display text-xl sm:text-3xl text-parchment">{t('tg.appendices')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-white/5 p-4 sm:p-8 rounded-2xl border border-gold/10">
                <h4 className="font-display text-lg sm:text-2xl text-gold mb-3 sm:mb-4">{t('tg.sampleExitTicket')}</h4>
                <ul className="space-y-2 sm:space-y-3 font-serif text-xs sm:text-base text-parchment/60">
                  {(appendicesData?.exitTicket || fallbackExitTicket).map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 p-4 sm:p-8 rounded-2xl border border-gold/10">
                <h4 className="font-display text-lg sm:text-2xl text-gold mb-3 sm:mb-4">
                  {appendicesData?.miniProject?.title || fallbackMiniProjectTitle}
                </h4>
                <p className={cn(
                  "font-serif text-white text-xs sm:text-base leading-relaxed",
                  language !== 'ar' && "italic"
                )}>
                  {appendicesData?.miniProject?.desc || fallbackMiniProjectDesc}
                </p>
              </div>
              <div className="bg-white/5 p-4 sm:p-8 rounded-2xl border border-gold/10 col-span-full">
                <h4 className="font-display text-lg sm:text-2xl text-gold mb-3 sm:mb-4">
                  {appendicesData?.reflectivePrompt?.title || fallbackReflectiveTitle}
                </h4>
                <p className={cn(
                  "font-serif text-white text-xs sm:text-base leading-relaxed",
                  language !== 'ar' && "italic"
                )}>
                  {appendicesData?.reflectivePrompt?.desc || fallbackReflectiveDesc}
                </p>
              </div>
              <div className="bg-gold/5 p-4 sm:p-8 rounded-2xl border border-gold/10 col-span-full">
                <h4 className="font-display text-lg sm:text-2xl text-gold mb-3 sm:mb-4">
                  {isAbraham || isMoses || isMecca || isYunus ? 'Sentence Frames' : t('tg.glossary')}
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 font-serif text-white text-xs sm:text-base">
                  {(appendicesData?.sentenceFrames || fallbackSentenceFrames).map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      }
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
            "fixed inset-0 bg-wood/95 backdrop-blur-2xl z-[100] overflow-hidden flex flex-col",
            isRTL && "font-arabic"
          )}
          style={{
            '--color-gold': isHistory ? '#10b981' : isTurkish ? '#22D3EE' : '#c2aa6b',
            '--color-wood': isHistory ? '#042416' : isTurkish ? '#0d1d2c' : '#14221a',
          } as React.CSSProperties}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="min-h-[4rem] sm:min-h-[5rem] md:h-24 border-b border-gold/20 px-3 sm:px-6 md:px-12 py-2.5 sm:py-3.5 flex items-center justify-between shrink-0 bg-black/20 gap-2">
            <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
              <div className="p-2 sm:p-3 bg-gold text-white rounded-xl shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-base sm:text-2xl md:text-3xl text-parchment tracking-tight leading-tight truncate">
                  {t('tg.title')}
                </h2>
                <p className={cn(
                  "font-serif text-gold text-[10px] sm:text-xs md:text-sm mt-0.5 truncate",
                  language !== 'ar' && "italic"
                )}>
                  {t('tg.subtitle')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <button
                onClick={() => generateTeacherGuidePDF(title || t('tg.title'), subtitle || t('tg.subtitle'), content, metadata)}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gold/10 hover:bg-gold/20 text-gold rounded-xl border border-gold/20 transition-all font-display text-xs sm:text-sm group cursor-pointer"
                title={t('nav.downloadPdf')}
              >
                <Download size={18} className="group-hover:scale-110 transition-transform shrink-0" />
                <span className="hidden sm:inline">{t('nav.downloadPdf')}</span>
              </button>
              <button 
                onClick={onClose}
                className="p-2 sm:p-3 bg-white/5 text-gold hover:bg-white/10 rounded-full transition-all cursor-pointer shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Main Layout */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar Tabs */}
            <div className={cn(
              "w-14 sm:w-20 md:w-80 border-gold/10 overflow-y-auto custom-scrollbar bg-black/20 shrink-0",
              isRTL ? "border-l" : "border-r"
            )}>
              <div className="p-1.5 sm:p-3 md:p-4 space-y-1.5 sm:space-y-3">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "w-full flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 p-2 sm:p-3 md:p-5 rounded-xl transition-all group cursor-pointer",
                      activeTab === tab.id 
                        ? "bg-gold text-white shadow-lg shadow-gold/20" 
                        : "text-parchment/40 hover:bg-white/5 hover:text-parchment"
                    )}
                  >
                    <div className={cn(
                      "shrink-0",
                      activeTab === tab.id ? "text-white" : "text-gold/60 group-hover:text-gold"
                    )}>
                      {tab.icon}
                    </div>
                    <span className="block md:hidden text-[9px] font-bold text-center leading-none opacity-80">
                      #{formatNumber(idx + 1)}
                    </span>
                    <span className="hidden md:block font-display text-sm uppercase tracking-widest text-left font-bold">
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-3 sm:p-6 md:p-12">
              <div className="max-w-4xl mx-auto">
                {renderTeacherContent()}
              </div>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
