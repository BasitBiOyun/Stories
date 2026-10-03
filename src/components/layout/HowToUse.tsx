import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { X } from '../ui/icons';
import { MODE_ICONS, SECTION_ICONS, type SectionIconEntry } from '../../lib/sectionIcons';

interface HowToUseProps {
  isOpen: boolean;
  onClose: () => void;
  isTeacher?: boolean;
}

const GROUPS: { title: { en: string; ar: string }; items: SectionIconEntry[] }[] = [
  {
    title: { en: 'In every chapter', ar: 'فِي كُلِّ فَصْلٍ' },
    items: [SECTION_ICONS.beforeYouRead, SECTION_ICONS.listen, SECTION_ICONS.read, SECTION_ICONS.quickChallenge, SECTION_ICONS.languageFocus, SECTION_ICONS.iCan],
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
  const guide = isTeacher ? SECTION_ICONS.teacherGuide : SECTION_ICONS.selfStudy;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/55 p-3 sm:items-center sm:p-6"
          onClick={onClose}
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
            className={cn('relative w-full max-w-3xl rounded-[26px] bg-[#FBF8F1] p-5 text-wood shadow-2xl sm:p-7', isRTL && 'font-arabic')}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={copy.close}
              className="absolute end-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-wood/60 hover:bg-black/5 hover:text-wood focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <X size={20} />
            </button>
            <h2 className={cn('pe-10 font-display font-semibold tracking-tight text-brand-900', lang === 'ar' ? 'text-2xl' : 'text-xl sm:text-2xl')}>{copy.heading}</h2>
            <p className={cn('mt-1 font-serif text-wood/65', lang === 'ar' ? 'text-base' : 'text-sm')}>{copy.intro}</p>

            <div className="mt-5 space-y-5">
              {GROUPS.map(group => (
                <section key={group.title.en}>
                  <h3 className={cn('font-display font-semibold uppercase tracking-[0.16em] text-brand-700', lang === 'ar' ? 'text-sm' : 'text-[11px]')}>{group.title[lang]}</h3>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {(group.title.en === 'At the end of the book' ? [...group.items, guide] : group.items).map(item => (
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
