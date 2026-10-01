import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { ArrowRight, Check, RotateCcw, Target, X } from '../../components/ui/icons';
import { playMapSound } from './mapSounds';
import type { StoryMapChallengeQuestion } from './types';

export interface ChallengeAnswer {
  lon: number;
  lat: number;
  distanceKm: number;
  correct: boolean;
}

interface MapChallengeOverlayProps {
  question: StoryMapChallengeQuestion | undefined;
  index: number;
  total: number;
  answer: ChallengeAnswer | undefined;
  results: (ChallengeAnswer | undefined)[];
  done: boolean;
  score: number;
  onNext: () => void;
  onRetry: () => void;
  onExit: () => void;
}

const GOOD = '#0f8a5f';
const BAD = '#b8573f';
const SPRING = { type: 'spring', stiffness: 380, damping: 30 } as const;

const reducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Counts up to a number, so the score feels earned. */
const useCountUp = (target: number, delayMs: number, stepMs: number) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (reducedMotion()) { setValue(target); return undefined; }
    const timers: number[] = [];
    for (let i = 1; i <= target; i += 1) {
      timers.push(window.setTimeout(() => setValue(i), delayMs + i * stepMs));
    }
    return () => timers.forEach(timer => window.clearTimeout(timer));
  }, [target, delayMs, stepMs]);
  return value;
};

const ScoreDialog: React.FC<{ score: number; total: number; results: (ChallengeAnswer | undefined)[]; onRetry: () => void; onExit: () => void }> = ({ score, total, results, onRetry, onExit }) => {
  const { t, language, formatNumber } = useLanguage();
  const great = score === total;
  const shown = useCountUp(score, 500, 280);
  const [filled, setFilled] = useState(false);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const textSize = language === 'ar' ? 'text-[17px] leading-[1.8]' : 'text-[14px] leading-snug sm:text-[15px]';

  useEffect(() => {
    const frame = requestAnimationFrame(() => setFilled(true));
    const timer = window.setTimeout(() => playMapSound(great ? 'perfect' : 'finish'), 350);
    return () => { cancelAnimationFrame(frame); window.clearTimeout(timer); };
  }, [great]);

  return (
    <motion.div
      className="absolute inset-0 z-30 flex items-center justify-center bg-[#16322f]/40 p-4 backdrop-blur-[3px]"
      role="dialog"
      aria-label={t('map.scoreTitle')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="w-full max-w-sm rounded-3xl border border-white/70 bg-white/95 p-5 text-center shadow-2xl"
        initial={{ opacity: 0, scale: 0.86, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 0.1 }}
      >
        <div className="relative mx-auto h-[116px] w-[116px]">
          <svg viewBox="0 0 116 116" className="absolute inset-0 -rotate-90" aria-hidden="true">
            <circle cx="58" cy="58" r={radius} fill="none" stroke="var(--brand-100)" strokeWidth="9" />
            <circle
              cx="58" cy="58" r={radius} fill="none" strokeWidth="9" strokeLinecap="round"
              stroke={great ? GOOD : 'var(--brand-600)'}
              strokeDasharray={circumference}
              strokeDashoffset={filled ? circumference * (1 - score / total) : circumference}
              style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(.22,.8,.25,1) .3s' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold tabular-nums" style={{ color: great ? GOOD : 'var(--brand-800)' }}>
            {formatNumber(shown)}/{formatNumber(total)}
          </div>
        </div>
        <div className="mt-3 flex justify-center gap-1.5" aria-hidden="true">
          {results.map((item, index) => (
            <motion.span
              key={index}
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ background: item?.correct ? GOOD : BAD }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18, delay: 0.5 + index * 0.1 }}
            >
              {item?.correct ? <Check size={13} /> : <X size={13} />}
            </motion.span>
          ))}
        </div>
        <h4 className="mt-3 font-display text-xl font-semibold text-wood">{t('map.scoreTitle')}</h4>
        <p className={cn('mt-1 font-serif text-wood/85', textSize)}>
          {t('map.scoreText').replace('{n}', formatNumber(score)).replace('{m}', formatNumber(total))}
        </p>
        <p className={cn('mt-1 font-serif text-wood/70', textSize)}>{great ? t('map.scoreGreat') : t('map.scoreTry')}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <button type="button" onClick={onRetry} className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-brand-200 bg-white px-4 font-display text-[12px] font-semibold text-brand-800 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
            <RotateCcw size={15} aria-hidden="true" />
            {t('map.tryAgain')}
          </button>
          <button type="button" onClick={onExit} className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-brand-700 px-4 font-display text-[12px] font-semibold text-white shadow-md hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
            {t('map.backToMap')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/** Prompt on top of the map, a tap cue while waiting, the feedback sheet, and the final score. */
export const MapChallengeOverlay: React.FC<MapChallengeOverlayProps> = ({ question, index, total, answer, results, done, score, onNext, onRetry, onExit }) => {
  const { t, language, isRTL, formatNumber } = useLanguage();
  const isLast = index >= total - 1;
  const textSize = language === 'ar' ? 'text-[17px] leading-[1.8]' : 'text-[14px] leading-snug sm:text-[15px]';

  if (done) return <ScoreDialog score={score} total={total} results={results} onRetry={onRetry} onExit={onExit} />;
  if (!question) return null;

  return (
    <>
      <div className="pointer-events-none absolute left-[64px] right-[64px] top-3 z-20 flex justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={question.id}
            className="max-w-full rounded-2xl border border-white/70 bg-white/92 px-3 py-2 text-center shadow-md backdrop-blur-sm"
            initial={{ opacity: 0, y: -18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={SPRING}
          >
            <div className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
              {t('map.question')} {formatNumber(index + 1)} / {formatNumber(total)}
            </div>
            <p className={cn('font-serif font-semibold text-[#3c3428]', textSize)}>{question.prompt}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tap cue: tells the learner exactly what to do next, then gets out of the way */}
      <AnimatePresence>
        {!answer && (
          <motion.div
            key={`cue-${question.id}`}
            className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ ...SPRING, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-800/92 px-4 py-2 font-display text-[13px] font-semibold text-white shadow-lg">
              <span className="story-map-cue flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <Target size={15} aria-hidden="true" />
              </span>
              {t('map.tapHint')}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {answer && (
          <motion.div
            key={`sheet-${question.id}`}
            className="absolute inset-x-3 bottom-3 z-20"
            role="status"
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26, delay: 0.95 }}
          >
            <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between gap-2 rounded-2xl border-2 bg-white/96 px-3 py-2.5 shadow-lg backdrop-blur-sm" style={{ borderColor: answer.correct ? GOOD : BAD }}>
              <div className="flex min-w-0 flex-1 items-start gap-2.5">
                <motion.span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ background: answer.correct ? GOOD : BAD }}
                  initial={{ scale: 0, rotate: -40 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 520, damping: 16, delay: 1.1 }}
                >
                  {answer.correct ? <Check size={17} aria-hidden="true" /> : <X size={17} aria-hidden="true" />}
                </motion.span>
                <div className="min-w-0">
                  <div className="font-display text-[15px] font-bold" style={{ color: answer.correct ? GOOD : BAD }}>
                    {answer.correct ? t('map.correct') : t('map.notQuite')}
                  </div>
                  <p className={cn('font-serif text-[#3c3428]/85', language === 'ar' ? 'text-[15px] leading-[1.7]' : 'text-[12px] leading-snug sm:text-[13px]')}>
                    {t('map.kmAway').replace('{n}', formatNumber(Math.round(answer.distanceKm)))}
                    {!answer.correct && <> {t('map.greenCircle')}</>}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onNext}
                className="pointer-events-auto inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full bg-brand-700 px-4 font-display text-[12px] font-semibold text-white shadow-md hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                {isLast ? t('map.seeScore') : t('map.nextQuestion')}
                <ArrowRight size={15} className={cn(isRTL && 'rotate-180')} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
