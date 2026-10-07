import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from '../ui/icons';
import { cn } from '../../lib/utils';
import { useRevealOnPhone } from '../../lib/phone';
import { useLanguage } from '../../contexts/LanguageContext';

/**
 * One behaviour for every scored exercise (the Final Challenge model):
 * right → ✓ and Next; first miss → a hint and only Try again; second miss → the answer,
 * the explanation and Next. Nothing moves on by itself and nothing loops forever.
 */
export type FeedbackState = 'correct' | 'retry' | 'revealed';

/** The state an answer leads to, given how many tries were already used on this item. */
export const feedbackStateFor = (correct: boolean, triesBefore: number): FeedbackState =>
  correct ? 'correct' : triesBefore === 0 ? 'retry' : 'revealed';

const BOX: Record<FeedbackState, string> = {
  correct: 'bg-emerald-50 border-emerald-200',
  retry: 'bg-amber-50 border-amber-200',
  revealed: 'bg-rose-50 border-rose-200',
};

const HEAD: Record<FeedbackState, string> = {
  correct: 'text-emerald-700',
  retry: 'text-amber-800',
  revealed: 'text-rose-700',
};

export const primaryButton = 'w-full min-h-12 rounded-xl font-display uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors';

type FeedbackBoxProps = {
  state: FeedbackState;
  /** What the learner reads first: praise, a hint, or why the answer is different. */
  message?: React.ReactNode;
  /** Shown once the item is settled (right, or answer revealed). */
  explanation?: React.ReactNode;
  /** Extra lines under the message, e.g. "The answer: …". Shown once the item is settled. */
  children?: React.ReactNode;
  onRetry: () => void;
  onNext: () => void;
  nextLabel?: string;
  /** Next waits for something else on the page (e.g. a sentence to write). */
  nextDisabled?: boolean;
  /** Changes whenever a new box should be brought into view on phones. */
  revealKey?: string;
  className?: string;
};

export const FeedbackBox = ({ state, message, explanation, children, onRetry, onNext, nextLabel, nextDisabled, revealKey, className }: FeedbackBoxProps) => {
  const { t, isRTL, language } = useLanguage();
  const isArabic = language === 'ar';
  const ref = useRevealOnPhone<HTMLDivElement>(`${revealKey ?? ''}:${state}`);
  const settled = state !== 'retry';
  const body = cn('font-serif text-wood/75 leading-relaxed', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base');

  return (
    <motion.div
      ref={ref}
      key={state}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      role="status"
      className={cn('rounded-2xl border-2 p-4 sm:p-5 scroll-mb-3', BOX[state], className)}
    >
      <p className={cn('flex items-center gap-2 font-display font-black uppercase tracking-wider', isArabic ? 'text-sm sm:text-base' : 'text-xs sm:text-sm', HEAD[state])}>
        {state === 'correct' ? <CheckCircle2 size={17} aria-hidden="true" /> : <XCircle size={17} aria-hidden="true" />}
        {state === 'correct' ? t('ex.correct') : t('ex.notQuite')}
      </p>
      {message && <div className={cn(body, 'mt-2')}>{message}</div>}
      {settled && children && <div className={cn(body, 'mt-2')}>{children}</div>}
      {settled && explanation && (
        <div className={cn(body, 'mt-2 text-wood/60')}>
          <span className={cn('font-display uppercase tracking-widest text-wood/40 me-1.5', isArabic ? 'text-sm' : 'text-[11px]')}>{t('ex.explanation')}</span>
          {explanation}
        </div>
      )}
      {state === 'retry' ? (
        <>
          <p className={cn('mt-2 font-serif text-wood/55', isArabic ? 'text-sm sm:text-base' : 'text-xs sm:text-sm')}>{t('nav.answerAfterNextTry')}</p>
          <button type="button" onClick={onRetry} data-feedback-retry className={cn(primaryButton, 'mt-4 bg-white border-2 border-amber-300 text-amber-900 hover:bg-amber-100/60', isArabic ? 'text-sm sm:text-base' : 'text-xs')}>
            <RotateCcw size={16} aria-hidden="true" /> {t('nav.tryAgain')}
          </button>
        </>
      ) : (
        <button type="button" onClick={onNext} disabled={nextDisabled} data-feedback-next className={cn(primaryButton, 'mt-4 bg-brand-700 text-white hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40', isArabic ? 'text-sm sm:text-base' : 'text-xs')}>
          {nextLabel ?? t('nav.next')} <ArrowRight className={cn('w-4 h-4', isRTL && 'rotate-180')} aria-hidden="true" />
        </button>
      )}
    </motion.div>
  );
};

const END_COPY = {
  en: {
    done: 'Well done, you finished.',
    firstTry: (right: string, total: string) => `First try: ${right} / ${total} correct`,
    restart: 'Start again',
    next: (name: string) => `Next: ${name}`,
  },
  ar: {
    done: 'أَحْسَنْتَ، لَقَدْ أَنْهَيْتَ.',
    firstTry: (right: string, total: string) => `المحاولة الأولى: ${right} من ${total} صحيحة`,
    restart: 'اِبْدَأْ مِنْ جَدِيدٍ',
    next: (name: string) => `التالي: ${name}`,
  },
};

type EndCardProps = {
  title?: string;
  firstTry?: { right: number; total: number } | null;
  onRestart?: () => void;
  /** Opens the next page of the book; never called automatically. */
  onNext?: () => void;
  nextLabel?: string;
  /** Extra content between the score and the buttons (e.g. words to revisit). */
  children?: React.ReactNode;
  /** Extra buttons placed before "Start again". */
  actions?: React.ReactNode;
};

/** The same closing card for every scored exercise page: first-try score, Start again, Next: <page>. */
export const EndCard = ({ title, firstTry, onRestart, onNext, nextLabel, children, actions }: EndCardProps) => {
  const { formatNumber, isRTL, language } = useLanguage();
  const isArabic = language === 'ar';
  const copy = END_COPY[isArabic ? 'ar' : 'en'];
  const ref = useRevealOnPhone<HTMLDivElement>('end');
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      data-end-card
      className="rounded-[22px] bg-emerald-50/85 p-5 sm:p-6 ring-1 ring-emerald-200 text-center scroll-mb-3"
    >
      <CheckCircle2 className="mx-auto text-emerald-600" size={26} aria-hidden="true" />
      <h4 className={cn('mt-2 font-display font-semibold text-emerald-950', isArabic ? 'text-xl' : 'text-lg sm:text-xl')}>{title ?? copy.done}</h4>
      {firstTry && firstTry.total > 0 && (
        <p className={cn('mt-1 font-serif text-emerald-900/70', isArabic ? 'text-base' : 'text-sm')}>
          {copy.firstTry(formatNumber(firstTry.right), formatNumber(firstTry.total))}
        </p>
      )}
      {children && <div className="mt-4 text-start">{children}</div>}
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
        {actions}
        {onRestart && (
          <button type="button" onClick={onRestart} data-end-restart className={cn('inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 font-display font-semibold text-wood/65 ring-1 ring-black/[0.08]', isArabic ? 'text-sm' : 'text-[12px]')}>
            <RotateCcw size={16} aria-hidden="true" /> {copy.restart}
          </button>
        )}
        {onNext && nextLabel && (
          <button type="button" onClick={onNext} data-end-next className={cn('inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 font-display font-semibold text-white hover:bg-brand-800', isArabic ? 'text-sm' : 'text-[12px]')}>
            {copy.next(nextLabel)} <ArrowRight className={cn('w-4 h-4', isRTL && 'rotate-180')} aria-hidden="true" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
