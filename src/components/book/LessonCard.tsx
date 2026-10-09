import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { X, Clock } from '../ui/icons';
import { MODE_ICONS, SECTION_ICONS } from '../../lib/sectionIcons';
import type { GroupTask, TeacherGuideSection } from '../../types';
import { useDialogFocus } from '../../hooks/useDialogFocus';

interface LessonCardProps {
  isOpen: boolean;
  onClose: () => void;
  section: TeacherGuideSection;
  groupTask?: GroupTask;
  language: string;
}

/** "0–4 Hook: …; 4–11 Listen …" → [{ time: '0–4', step: 'Hook: …' }, …] */
export const splitLessonPlan = (plan: string) =>
  plan
    .split(/[;؛]\s*(?=\d)/)
    .map(part => part.trim().replace(/\.$/, ''))
    .filter(Boolean)
    .map(part => {
      const match = part.match(/^(\d+\s*[–-]\s*\d+)\s+(.*)$/s);
      return match ? { time: match[1].replace(/\s/g, ''), step: match[2] } : { time: '', step: part };
    });

/** A one-screen summary of the Teacher Guide for this chapter: aims, timed steps, group task and exit ticket. */
export const LessonCard: React.FC<LessonCardProps> = ({ isOpen, onClose, section, groupTask, language }) => {
  // Tab stays inside and focus returns to the opener; Escape is handled below.
  const dialogRef = useDialogFocus(isOpen, onClose, { escape: false });
  const isArabic = language === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const copy = isArabic
    ? { close: 'إغلاق', aims: 'الأَهْدَافُ', steps: 'خُطُوَاتُ الدَّرْسِ', group: 'مُهِمَّةٌ جَمَاعِيَّةٌ', exit: 'بِطَاقَةُ الخُرُوجِ', people: 'أَشْخَاص', full: 'التَّفَاصِيلُ كُلُّهَا فِي كِتَابِ المُعَلِّمِ.' }
    : { close: 'Close', aims: 'Aims', steps: 'Lesson steps', group: 'Group task', exit: 'Exit ticket', people: 'people', full: 'Full details are in the Teacher\'s Book.' };

  const steps = splitLessonPlan(section.lessonPlan ?? '');
  const exit = section.assessmentTools?.exitTicket ?? [];
  const Icon = SECTION_ICONS.lessonCard.icon;
  const GroupIcon = MODE_ICONS.group.icon;
  const label = isArabic ? 'text-xs' : 'text-[11px]';
  const text = isArabic ? 'text-base' : 'text-[14px]';

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/60 p-3 sm:p-6"
          onClick={onClose}
          data-lesson-card
        >
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={SECTION_ICONS.lessonCard[lang]}
            dir={isArabic ? 'rtl' : 'ltr'}
            onClick={event => event.stopPropagation()}
            className={cn('relative my-auto w-full max-w-3xl rounded-[26px] bg-[#FBF8F1] p-5 text-wood shadow-2xl sm:p-7', isArabic && 'font-arabic')}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={copy.close}
              className="absolute end-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-wood/60 hover:bg-black/5 hover:text-wood"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 pe-10">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                <Icon size={22} />
              </span>
              <div className="min-w-0">
                <p className={cn('font-display font-semibold uppercase tracking-[0.16em] text-brand-800', label)}>{SECTION_ICONS.lessonCard[lang]}</p>
                <h2 className="font-display text-xl font-semibold leading-snug sm:text-2xl">{section.chapter}</h2>
              </div>
            </div>
            {section.timing && (
              <p className={cn('mt-2 inline-flex items-center gap-1.5 text-wood/60', label === 'text-xs' ? 'text-sm' : 'text-[13px]')}>
                <Clock size={14} />
                {section.timing}
              </p>
            )}

            {section.objectives?.length > 0 && (
              <div className="mt-4">
                <h3 className={cn('font-display font-semibold uppercase tracking-widest text-wood/50', label)}>{copy.aims}</h3>
                <ul className="mt-1.5 space-y-1">
                  {section.objectives.map(aim => (
                    <li key={aim} className={cn('flex gap-2 leading-relaxed', text)}>
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                      <span>{aim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {steps.length > 0 && (
              <div className="mt-5">
                <h3 className={cn('font-display font-semibold uppercase tracking-widest text-wood/50', label)}>{copy.steps}</h3>
                <ol className="mt-2 divide-y divide-black/[0.06] rounded-2xl border border-black/[0.07] bg-white/85">
                  {steps.map(({ time, step }, index) => (
                    <li key={`${time}-${index}`} className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 px-4 py-2.5">
                      <span className="pt-0.5 font-mono text-[13px] font-semibold text-brand-800 tabular-nums" dir="ltr">{time ? `${time} ${isArabic ? 'د' : 'min'}` : ''}</span>
                      <span className={cn('leading-relaxed', text)}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {groupTask && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
                <GroupIcon size={20} className="mt-0.5 shrink-0 text-brand-700" />
                <div className="min-w-0">
                  <p className={cn('font-display font-semibold uppercase tracking-widest text-brand-800', label)}>{copy.group}</p>
                  <p className={cn('mt-0.5 font-semibold', text)}>{groupTask.title}</p>
                  <p className={cn('mt-0.5 text-wood/60', isArabic ? 'text-sm' : 'text-[13px]')}>{groupTask.time} · {groupTask.groupSize} {copy.people}</p>
                </div>
              </div>
            )}

            {exit.length > 0 && (
              <div className="mt-5">
                <h3 className={cn('font-display font-semibold uppercase tracking-widest text-wood/50', label)}>{copy.exit}</h3>
                <ul className="mt-1.5 space-y-1">
                  {exit.map(item => (
                    <li key={item} className={cn('rounded-xl bg-white/85 px-3 py-2 leading-relaxed', text)}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="mt-5 text-xs text-wood/50">{copy.full}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
