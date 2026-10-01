import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { BookOpen, Info, Link as LinkIcon, Play, Users, X } from '../ui/icons';
import {
  aboutIntro,
  advisoryBoard,
  projectCoordinator,
  sourceGroups,
  teamSections,
} from '../../data/aboutContent';

type AboutTab = 'about' | 'sources';

interface AboutPageProps {
  isOpen: boolean;
  onClose: () => void;
}

/** "About & Sources" overlay, opened from the home page footer and the reader menu. */
export const AboutPage: React.FC<AboutPageProps> = ({ isOpen, onClose }) => {
  const { language, isRTL, t } = useLanguage();
  const [tab, setTab] = useState<AboutTab>('about');
  const closeRef = useRef<HTMLButtonElement>(null);
  const lang = language === 'ar' ? 'ar' : 'en';

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const copy = lang === 'ar'
    ? {
        heading: 'عن المشروع والمصادر',
        about: 'عن المشروع',
        sources: 'المصادر',
        close: 'إغلاق',
        video: 'شاهد الفيلم التعريفي',
        team: 'فريق المشروع',
        board: 'الهيئة العلمية',
        boardNote: 'الاستشارة الأكاديمية والملاحظات العلمية',
        content: 'فريق اللغة والمحتوى',
        sourcesIntro: 'أهم المصادر التي رُجع إليها في كتابة القصص. الروابط تفتح المصدر على الإنترنت.',
        citedInText: 'إحالات في نص القصة',
      }
    : {
        heading: 'About & Sources',
        about: 'About',
        sources: 'Sources',
        close: 'Close',
        video: 'Watch the introduction film',
        team: 'Project team',
        board: 'Academic Advisory Board',
        boardNote: 'Academic advice and scholarly feedback',
        content: 'Language and Content Team',
        sourcesIntro: 'The main sources used in writing the stories. Linked entries open the source online.',
        citedInText: 'Cited in the story text',
      };

  const groupTitle = (id: string, title?: { en: string; ar: string }) =>
    title ? title[lang] : t(`prophet.${id}`);

  const tabs: { id: AboutTab; label: string; icon: React.ReactNode }[] = [
    { id: 'about', label: copy.about, icon: <Info size={17} /> },
    { id: 'sources', label: copy.sources, icon: <BookOpen size={17} /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className={cn(
            'fixed inset-0 z-[300] overflow-y-auto overscroll-contain bg-[#0b0e0c] text-[#F6F0E2]',
            isRTL && 'font-arabic',
          )}
          dir={isRTL ? 'rtl' : 'ltr'}
          role="dialog"
          aria-modal="true"
          aria-label={copy.heading}
          data-about-page
        >
          <div className="sticky top-0 z-10 border-b border-white/[0.07] bg-[#0b0e0c]/92 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-[960px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
              <div className="flex min-w-0 items-center gap-1 rounded-full border border-white/12 bg-black/35 p-1" role="tablist" aria-label={copy.heading}>
                {tabs.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === item.id}
                    onClick={() => setTab(item.id)}
                    className={cn(
                      'flex min-h-9 items-center gap-2 rounded-full px-3.5 font-display text-[12px] font-semibold uppercase tracking-wider transition-colors sm:px-4 sm:text-[13px]',
                      tab === item.id ? 'bg-white/[0.14] text-[#FFF9EC]' : 'text-[#F6F0E2]/60 hover:bg-white/5 hover:text-[#F6F0E2]',
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label={copy.close}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#F6F0E2]/75 transition-colors hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[960px] px-5 pb-16 pt-8 sm:px-8 sm:pt-10" role="tabpanel">
            {tab === 'about' ? (
              <div className="space-y-10">
                <section className="text-start">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D8B35C]/80">{t('nav.homeTitle')}</p>
                  <h1 className="mt-3 font-display text-[34px] font-semibold leading-tight tracking-[-0.02em] text-[#FFF9EC] sm:text-[44px]">
                    {aboutIntro.name}
                  </h1>
                  <p className="mt-2 text-[15px] font-medium text-[#F6F0E2]/70 sm:text-[17px]">{aboutIntro.subtitle[lang]}</p>
                  <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-[#F6F0E2]/82 sm:text-[16px]">
                    {aboutIntro.paragraphs[lang].map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {aboutIntro.facts[lang].map(fact => (
                      <li key={fact} className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-semibold text-[#F6F0E2]/85">
                        {fact}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={aboutIntro.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center gap-2.5 rounded-full border border-[#D8B35C]/40 bg-[#D8B35C]/10 px-5 font-display text-[14px] font-semibold text-[#F3D58C] transition-colors hover:bg-[#D8B35C]/20"
                  >
                    <Play size={17} />
                    {copy.video}
                  </a>
                </section>

                <section className="text-start" aria-labelledby="about-team">
                  <h2 id="about-team" className="flex items-center gap-2.5 font-display text-[20px] font-semibold text-[#FFF9EC]">
                    <Users size={21} className="text-[#D8B35C]" />
                    {copy.team}
                  </h2>

                  <div className="mt-4 rounded-2xl border border-[#D8B35C]/25 bg-[#D8B35C]/[0.06] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D8B35C]/85">{projectCoordinator.role[lang]}</p>
                    <p className="mt-1.5 text-[18px] font-semibold text-[#FFF9EC]">{projectCoordinator.name}</p>
                    <p className="mt-1 text-[13px] text-[#F6F0E2]/65">{projectCoordinator.note[lang]}</p>
                  </div>

                  <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#F6F0E2]/55">{copy.content}</p>
                  <div className="mt-3 grid gap-3 md:grid-cols-3">
                    {teamSections.map(section => (
                      <div key={section.title.en} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                        <h3 className="font-display text-[15px] font-semibold text-[#FFF9EC]">{section.title[lang]}</h3>
                        <dl className="mt-3 space-y-3">
                          {section.roles.map(role => (
                            <div key={role.role.en}>
                              <dt className="text-[12px] font-semibold text-[#D8B35C]/85">{role.role[lang]}</dt>
                              {role.members.map(member => (
                                <dd key={member.name} className="mt-0.5">
                                  <span className="block text-[15px] text-[#F6F0E2]">{member.name}</span>
                                  {member.note && <span className="block text-[12px] text-[#F6F0E2]/55">{member.note[lang]}</span>}
                                </dd>
                              ))}
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#F6F0E2]/55">{copy.board}</h3>
                    <p className="text-[12px] text-[#F6F0E2]/45">{copy.boardNote}</p>
                  </div>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {advisoryBoard.map(member => (
                      <li key={member.name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                        <p className="text-[15px] font-semibold text-[#FFF9EC]">{member.name}</p>
                        <p className="mt-1 text-[13px] text-[#F6F0E2]/75">{member.university[lang]}</p>
                        <p className="mt-0.5 text-[12px] text-[#F6F0E2]/50">{member.department[lang]}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            ) : (
              <div className="space-y-8 text-start">
                <p className="max-w-3xl text-[15px] leading-relaxed text-[#F6F0E2]/75">{copy.sourcesIntro}</p>
                {sourceGroups.map(group => (
                  <section key={group.id} aria-labelledby={`sources-${group.id}`}>
                    <h2 id={`sources-${group.id}`} className="border-b border-white/[0.08] pb-2 font-display text-[18px] font-semibold text-[#FFF9EC]">
                      {groupTitle(group.id, group.title)}
                    </h2>
                    {group.sources.length > 0 && (
                      <ul className="mt-3 space-y-2" dir="ltr">
                        {group.sources.map(source => (
                          <li key={source.text} className="text-[14px] leading-relaxed text-[#F6F0E2]/85" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                            {source.url ? (
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline underline decoration-[#D8B35C]/40 underline-offset-4 transition-colors hover:text-white hover:decoration-[#D8B35C]"
                              >
                                {source.text}
                                <LinkIcon size={13} className="ms-1.5 inline-block align-[-1px] text-[#D8B35C]/80" />
                              </a>
                            ) : source.text}
                          </li>
                        ))}
                      </ul>
                    )}
                    {group.citations && (
                      <dl className="mt-3 space-y-2 rounded-xl bg-white/[0.03] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D8B35C]/75">{copy.citedInText}</p>
                        {group.citations.map(citation => (
                          <div key={citation.text.en} className="text-[13px] leading-relaxed">
                            <dt className="inline font-semibold text-[#F6F0E2]/80">{citation.label[lang]}: </dt>
                            <dd className="inline text-[#F6F0E2]/70" dir={lang === 'ar' ? 'rtl' : 'ltr'}>{citation.text[lang]}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </section>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
