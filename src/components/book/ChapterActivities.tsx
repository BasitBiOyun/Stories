// What a chapter asks for after the story (moved from StoryPage.tsx, unchanged): the step chips under the title,
// the Quick Challenge card and the Language Focus list.
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from '../ui/icons';
import { PageData, Exercise, TeacherGuideSection } from '../../types';
import { cn } from '../../lib/utils';
import { SECTION_ICONS, type SectionKey } from '../../lib/sectionIcons';
import { presentExerciseTitle } from '../../lib/exercisePresentation';
import { useLanguage } from '../../contexts/LanguageContext';

export const ChapterSteps = ({
  page, listened, textEndReached, quickExercise, quickDone, focusExercises, focusDone, lessonSection,
  onOpenExercise, onOpenLanguageFocus, onOpenLessonCard,
}: {
  page: PageData;
  listened: boolean;
  textEndReached: boolean;
  quickExercise?: Exercise;
  quickDone: boolean;
  focusExercises: Exercise[];
  focusDone: boolean;
  lessonSection?: TeacherGuideSection;
  onOpenExercise: (exercise: Exercise) => void;
  onOpenLanguageFocus: () => void;
  onOpenLessonCard: () => void;
}) => {
    const { language, t } = useLanguage();
    if (page.type !== 'story') return null;
    const steps: { key: SectionKey; label: string; done: boolean; onClick?: () => void }[] = [];
    if (page.audioUrl) steps.push({ key: 'listen', label: t('nav.stepListen'), done: listened });
    steps.push({ key: 'read', label: t('nav.stepRead'), done: textEndReached });
    if (quickExercise) {
      steps.push({ key: 'quickChallenge', label: t('nav.quickChallenge'), done: quickDone, onClick: () => onOpenExercise(quickExercise) });
    }
    if (focusExercises.length > 0) {
      steps.push({
        key: 'languageFocus',
        label: t('nav.languageFocus'),
        done: focusDone,
        onClick: () => {
          onOpenLanguageFocus();
          const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-language-focus]'));
          (panels.find(panel => panel.offsetParent !== null) ?? panels[0])?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
      });
    }
    if (steps.length < 2 && !lessonSection) return null;
    const LessonIcon = SECTION_ICONS.lessonCard.icon;
    return (
      <ol className="mt-1.5 flex flex-wrap items-center gap-1 sm:gap-1.5" aria-label={t('nav.chapterSteps')} data-chapter-steps>
        {steps.map(step => {
          const StepIcon = SECTION_ICONS[step.key].icon;
          const chip = (
            <span
              className={cn(
                // Phones: smaller and without icons, so the four steps fit on one line.
                'inline-flex items-center gap-1 whitespace-nowrap rounded-full px-1.5 py-0.5 font-display text-[10px] font-semibold sm:px-2 sm:text-[11px]',
                language === 'ar' && 'text-[11px]',
                step.done ? 'bg-emerald-100 text-emerald-800' : 'bg-black/[0.05] text-wood/62',
              )}
            >
              <StepIcon size={12} aria-hidden="true" className="hidden sm:block" />
              {step.label}
              {step.done && <span aria-hidden="true">✓</span>}
            </span>
          );
          return (
            <li key={step.key} className="flex">
              {step.onClick ? (
                <button type="button" onClick={step.onClick} className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                  {chip}
                </button>
              ) : chip}
            </li>
          );
        })}
        {lessonSection && (
          <li className="flex">
            <button
              type="button"
              onClick={onOpenLessonCard}
              data-lesson-card-open
              className="inline-flex items-center gap-1 rounded-full border border-brand-300 bg-white px-2 py-0.5 font-display text-[11px] font-semibold text-brand-800 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <LessonIcon size={12} aria-hidden="true" />
              {SECTION_ICONS.lessonCard[language === 'ar' ? 'ar' : 'en']}
            </button>
          </li>
        )}
      </ol>
    );
  };

export const QuickChallengePanel = ({ page, completedExercises, onOpenExercise }: {
  page: PageData;
  completedExercises: string[];
  onOpenExercise: (exercise: Exercise) => void;
}) => {
    const { language, t, isRTL } = useLanguage();
    const isArabic = language === 'ar';
    const exercise = page.exercises?.[0];
    if (!exercise) return null;

    const completed = completedExercises.includes(exercise.id);
    const quickTheme = {
          container: 'bg-gradient-to-br from-brand-50/95 via-white/90 to-brand-50/55 ring-brand-200/70',
          rail: 'bg-brand-500',
          icon: 'bg-brand-700 text-white shadow-brand-900/10',
          title: 'text-brand-950',
          copy: 'text-brand-950/58',
          button: 'bg-brand-700 hover:bg-brand-800 focus-visible:ring-brand-500',
          glow: 'bg-brand-300/20',
        };

    return (
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full shrink-0 mt-6 scroll-mt-4"
        aria-label={t('nav.quickChallenge')}
        data-quick-challenge
      >
        <div className={cn(
          'relative overflow-hidden rounded-[26px] ring-1 shadow-[0_22px_28px_-26px_rgba(63,49,28,0.45)]',
          quickTheme.container
        )}>
          <div className={cn('absolute inset-y-0 start-0 w-1.5', quickTheme.rail)} aria-hidden="true" />
          <div className={cn('pointer-events-none absolute -end-10 -top-12 h-36 w-36 rounded-full blur-3xl', quickTheme.glow)} aria-hidden="true" />

          <div className="relative flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex min-w-0 items-start gap-4 text-start">
              <div className={cn(
                'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg',
                quickTheme.icon
              )}>
                {completed ? <CheckCircle2 size={23} /> : <SECTION_ICONS.quickChallenge.icon size={22} />}
              </div>

              <div className="min-w-0 pt-0.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h4 className={cn(
                    'font-display text-xl font-semibold tracking-[-0.025em] sm:text-2xl',
                    quickTheme.title
                  )}>
                    {t('nav.quickChallenge')}
                  </h4>
                  {completed && (
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                      {t('nav.completed')}
                    </span>
                  )}
                </div>
                <p className={cn(
                  'mt-1.5 max-w-2xl font-serif leading-relaxed',
                  isArabic ? 'text-base' : 'text-sm',
                  quickTheme.copy
                )}>
                  {t('nav.testUnderstanding')}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenExercise(exercise)}
              className={cn(
                'group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-2xl px-5 font-display text-[12px] font-semibold text-white shadow-lg transition-all active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:min-h-14 md:w-auto md:min-w-[205px] md:px-7 md:text-[13px]',
                quickTheme.button
              )}
            >
              {completed ? t('nav.completed') : t('nav.startExercise')}
              {!completed && (
                <ArrowRight
                  size={16}
                  className={cn('transition-transform group-hover:translate-x-0.5', isRTL && 'rotate-180 group-hover:-translate-x-0.5')}
                />
              )}
            </button>
          </div>
        </div>
      </motion.section>
    );
  };

export const LanguageFocusPanel = ({ page, completedExercises, onOpenExercise, isOpen: isLanguageFocusOpen, onToggle, mobile = false }: {
  page: PageData;
  completedExercises: string[];
  onOpenExercise: (exercise: Exercise) => void;
  isOpen: boolean;
  onToggle: () => void;
  mobile?: boolean;
}) => {
    const { language, t, formatNumber, isRTL } = useLanguage();
    const isArabic = language === 'ar';
    const exercises = page.languageFocusExercises ?? [];
    if (!exercises.length) return null;

    const completedCount = exercises.filter(exercise => completedExercises.includes(exercise.id)).length;
    const focusTheme = {
          container: 'bg-gradient-to-br from-brand-50/92 via-white/94 to-brand-50/65 ring-brand-200/65',
          icon: 'bg-brand-800 text-white',
          accent: 'text-brand-800',
          title: 'text-brand-950',
          copy: 'text-brand-950/58',
          card: 'bg-white/82 hover:bg-white ring-brand-100/80 hover:ring-brand-300/90',
          number: 'bg-brand-100 text-brand-800',
          glow: 'bg-brand-300/18',
          progress: 'bg-brand-700',
          arrow: 'text-brand-700',
        };

    const typeLabel = (exercise: Exercise) => {
      const labels: Record<string, { en: string; ar: string }> = {
        matching: { en: 'Match', ar: 'مطابقة' },
        'fill-blanks': { en: 'Complete', ar: 'أكمل' },
        sequencing: { en: 'Order', ar: 'رتّب' },
        reflection: { en: 'Use', ar: 'استخدم' },
        'true-false': { en: 'Decide', ar: 'قرّر' },
        'multiple-choice': { en: 'Choose', ar: 'اختر' },
        'tap-reveal': { en: 'Explore', ar: 'استكشف' },
        'drag-drop': { en: 'Classify', ar: 'صنّف' },
        'choose-form': { en: 'Choose the form', ar: 'اختر الصيغة' },
        'word-bank': { en: 'Complete', ar: 'أكمل' },
        'error-correction': { en: 'Correct', ar: 'صحّح' },
        'sentence-building': { en: 'Build', ar: 'ابنِ الجملة' },
        transformation: { en: 'Rewrite', ar: 'أعد الصياغة' },
      };
      return labels[exercise.type]?.[language === 'ar' ? 'ar' : 'en']
        ?? (language === 'ar' ? 'تدريب' : 'Practice');
    };

    return (
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn('w-full shrink-0 scroll-mt-4', mobile ? 'mt-1' : 'mt-4')}
        aria-label={t('nav.languageFocus')}
        data-language-focus
      >
        <div className={cn(
          'relative overflow-hidden rounded-[26px] ring-1 shadow-[0_22px_28px_-26px_rgba(63,49,28,0.4)]',
          focusTheme.container
        )}>
          <div className={cn('pointer-events-none absolute -end-12 -top-12 h-36 w-36 rounded-full blur-3xl', focusTheme.glow)} aria-hidden="true" />

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isLanguageFocusOpen}
            className="relative w-full p-4 sm:p-5 text-start"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={cn(
                'flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl shadow-md',
                focusTheme.icon
              )}>
                <SECTION_ICONS.languageFocus.icon size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className={cn(
                    'font-display text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]',
                    focusTheme.accent
                  )}>
                    {language === 'ar' ? 'بعد القراءة' : 'After reading'}
                  </p>
                  <span className={cn('font-display text-[11px] sm:text-xs font-semibold', focusTheme.copy)}>
                    {formatNumber(exercises.length)} {language === 'ar' ? (exercises.length === 1 ? 'نشاط' : exercises.length === 2 ? 'نشاطان' : exercises.length <= 10 ? 'أنشطة' : 'نشاطًا') : exercises.length === 1 ? 'activity' : 'activities'}
                  </span>
                </div>
                <h4 className={cn(
                  'mt-0.5 font-display text-lg sm:text-xl font-semibold tracking-[-0.02em]',
                  focusTheme.title
                )}>
                  {language === 'ar' ? 'التركيز اللغوي' : 'Language Focus'}
                </h4>
                <p className={cn(
                  'mt-1 font-serif leading-relaxed',
                  isArabic ? 'text-[14px] sm:text-base' : 'text-[12px] sm:text-[13px]',
                  focusTheme.copy
                )}>
                  {language === 'ar'
                    ? 'افتح الأنشطة عندما تكون مستعدًا لملاحظة اللغة وربطها واستخدامها.'
                    : 'Open when you are ready to notice, connect, and use the language.'}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <div className="hidden sm:block min-w-[112px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className={cn('font-display text-[11px] font-semibold uppercase tracking-[0.12em]', focusTheme.copy)}>
                      {language === 'ar' ? 'التقدّم' : 'Progress'}
                    </span>
                    <span className={cn('font-display text-[11px] font-semibold', focusTheme.accent)}>
                      {formatNumber(completedCount)} / {formatNumber(exercises.length)}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-black/[0.06]">
                    <motion.div
                      initial={false}
                      animate={{ width: `${exercises.length ? (completedCount / exercises.length) * 100 : 0}%` }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={cn('h-full rounded-full', focusTheme.progress)}
                    />
                  </div>
                </div>
                <span className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-xl ring-1 transition-transform',
                  focusTheme.number,
                  isLanguageFocusOpen && 'rotate-90'
                )}>
                  <ArrowRight size={16} className={cn(isRTL && 'rotate-180')} />
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 sm:hidden">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
                <motion.div
                  initial={false}
                  animate={{ width: `${exercises.length ? (completedCount / exercises.length) * 100 : 0}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={cn('h-full rounded-full', focusTheme.progress)}
                />
              </div>
              <span className={cn('font-display text-[11px] font-semibold', focusTheme.accent)}>
                {formatNumber(completedCount)} / {formatNumber(exercises.length)}
              </span>
            </div>
          </button>

          <AnimatePresence initial={false}>
            {isLanguageFocusOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="border-t border-black/[0.06] px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                  <div className="space-y-2">
                    {exercises.map((exercise, index) => {
                      const completed = completedExercises.includes(exercise.id);

                      return (
                        <motion.button
                          key={exercise.id}
                          type="button"
                          whileHover={{ x: isRTL ? -2 : 2 }}
                          whileTap={{ scale: 0.995 }}
                          onClick={() => onOpenExercise(exercise)}
                          className={cn(
                            'group flex w-full items-center gap-3 rounded-2xl p-3 sm:p-3.5 text-start ring-1 transition-all',
                            focusTheme.card
                          )}
                        >
                          <span className={cn(
                            'flex h-9 min-w-9 items-center justify-center rounded-xl px-2 font-display text-[11px] font-semibold shrink-0',
                            completed ? 'bg-emerald-600 text-white' : focusTheme.number
                          )}>
                            {completed ? '✓' : formatNumber(index + 1)}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-2">
                              <span className={cn(
                                'font-display font-semibold leading-tight',
                                isArabic ? 'text-[15px] sm:text-base' : 'text-[13px] sm:text-[14px]',
                                focusTheme.title
                              )}>
                                {presentExerciseTitle(exercise)}
                              </span>
                              <span className={cn(
                                'rounded-full px-2 py-0.5 font-display text-[11px] font-semibold uppercase tracking-[0.12em]',
                                completed ? 'bg-emerald-100 text-emerald-700' : focusTheme.number
                              )}>
                                {completed ? t('nav.completed') : typeLabel(exercise)}
                              </span>
                            </span>
                            {exercise.instructions && (
                              <span className={cn(
                                'mt-1 block truncate font-serif',
                                isArabic ? 'text-[13px] sm:text-[14px]' : 'text-[11px] sm:text-[12px]',
                                focusTheme.copy
                              )}>
                                {exercise.instructions}
                              </span>
                            )}
                          </span>

                          <ArrowRight
                            size={16}
                            className={cn(
                              'shrink-0 opacity-45 transition-all group-hover:opacity-90',
                              focusTheme.arrow,
                              isRTL && 'rotate-180'
                            )}
                          />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    );
  };
