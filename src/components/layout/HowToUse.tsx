import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { ChevronLeft } from '../ui/icons';
import { MODE_ICONS, SECTION_ICONS, type SectionIconEntry } from '../../lib/sectionIcons';

interface HowToUseProps {
  isOpen: boolean;
  onClose: () => void;
  isTeacher?: boolean;
}

const GROUPS: { title: { en: string; ar: string }; items: SectionIconEntry[] }[] = [
  {
    title: { en: 'In every chapter', ar: 'فِي كُلِّ فَصْلٍ' },
    items: [SECTION_ICONS.beforeYouRead, SECTION_ICONS.listen, SECTION_ICONS.read, SECTION_ICONS.quickChallenge, SECTION_ICONS.languageFocus, SECTION_ICONS.iCan, SECTION_ICONS.myWords],
  },
  {
    title: { en: 'At the end of the book', ar: 'فِي آخِرِ الكِتَابِ' },
    items: [SECTION_ICONS.knowledgeCheck, SECTION_ICONS.glossary, SECTION_ICONS.places, SECTION_ICONS.vocabularyChallenge, SECTION_ICONS.languageReview, SECTION_ICONS.finalChallenge],
  },
  {
    title: { en: 'How you work', ar: 'كَيْفَ تَعْمَلُ' },
    items: [MODE_ICONS.individual, MODE_ICONS.pair, MODE_ICONS.group, MODE_ICONS.sayOrWrite],
  },
];

/** "How to use this book": the fixed icon key, explained once. Opened from the reader menu. */
export const HowToUse: React.FC<HowToUseProps> = ({ isOpen, onClose, isTeacher = false }) => {
  const { language, isRTL } = useLanguage();
  const lang = language === 'ar' ? 'ar' : 'en';
  const closeRef = useRef<HTMLButtonElement>(null);

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
    ? { heading: 'كَيْفَ تَسْتَخْدِمُ هٰذَا الكِتَابَ', intro: 'لِكُلِّ قِسْمٍ رَمْزٌ وَاحِدٌ. تَرَى الرَّمْزَ نَفْسَهُ فِي التَّطْبِيقِ وَفِي الكِتَابِ المَطْبُوعِ.', close: 'إغلاق' }
    : { heading: 'How to use this book', intro: 'Each part of the book has one icon. You see the same icon in the app and in the printed book.', close: 'Close' };
  // Students see their result card with the book's end; teachers get their own group of tools.
  const groups = isTeacher
    ? [
        ...GROUPS,
        {
          title: { en: 'For the teacher', ar: 'لِلْمُعَلِّمِ' },
          items: [SECTION_ICONS.teacherGuide, SECTION_ICONS.lessonCard, SECTION_ICONS.classMode, SECTION_ICONS.checkCode],
        },
      ]
    : GROUPS.map(group =>
        group.title.en === 'At the end of the book'
          ? { ...group, items: [...group.items, SECTION_ICONS.resultCard, SECTION_ICONS.selfStudy] }
          : group,
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[300] overflow-y-auto overscroll-contain bg-[#FBF8F1]"
          data-how-to-use
        >
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={copy.heading}
            dir={isRTL ? 'rtl' : 'ltr'}
            onClick={event => event.stopPropagation()}
            className={cn('relative mx-auto min-h-full w-full max-w-4xl px-5 pb-16 pt-5 text-wood sm:px-8 sm:pt-8', isRTL && 'font-arabic')}
          >
            {/* A page of its own: the way back is a clear button at the top, not a close cross. */}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="mb-6 inline-flex min-h-10 items-center gap-1.5 rounded-full border border-brand-200 bg-white ps-3 pe-4 font-display text-[13px] font-semibold text-brand-800 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:text-sm"
            >
              <ChevronLeft size={16} className="rtl:rotate-180" aria-hidden="true" />
              {isRTL ? 'رُجُوع' : 'Back'}
            </button>
            <h2 className={cn('font-display font-semibold tracking-tight text-brand-900', lang === 'ar' ? 'text-2xl' : 'text-xl sm:text-2xl')}>{copy.heading}</h2>
            <p className={cn('mt-1 font-serif text-wood/65', lang === 'ar' ? 'text-base' : 'text-sm')}>{copy.intro}</p>

            <div className="mt-5 space-y-5">
              {groups.map(group => (
                <section key={group.title.en}>
                  <h3 className={cn('font-display font-semibold uppercase tracking-[0.16em] text-brand-700', lang === 'ar' ? 'text-sm' : 'text-[11px]')}>{group.title[lang]}</h3>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {group.items.map(item => (
                      <li key={item.en} className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white px-3 py-2.5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                          <item.icon size={20} aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className={cn('block font-display font-semibold text-wood', lang === 'ar' ? 'text-base' : 'text-sm')}>{item[lang]}</span>
                          <span className={cn('block font-serif leading-snug text-wood/65', lang === 'ar' ? 'text-sm' : 'text-[13px]')}>{item.hint[lang]}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
