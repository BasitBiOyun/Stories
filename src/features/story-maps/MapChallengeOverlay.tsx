import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { ArrowRight, Check, RotateCcw, X } from '../../components/ui/icons';
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
  done: boolean;
  score: number;
  onNext: () => void;
  onRetry: () => void;
  onExit: () => void;
}

const GOOD = '#0f8a5f';
const BAD = '#b8573f';

/** Prompt on top of the map, feedback sheet at the bottom, and the final score. All sit above the map. */
export const MapChallengeOverlay: React.FC<MapChallengeOverlayProps> = ({ question, index, total, answer, done, score, onNext, onRetry, onExit }) => {
  const { t, language, isRTL, formatNumber } = useLanguage();
  const isLast = index >= total - 1;
  const textSize = language === 'ar' ? 'text-[17px] leading-[1.8]' : 'text-[14px] leading-snug sm:text-[15px]';

  if (done) {
    const great = score === total;
    return (
      <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#16322f]/35 p-4 backdrop-blur-[2px]" role="dialog" aria-label={t('map.scoreTitle')}>
        <div className="w-full max-w-sm rounded-3xl border border-white/70 bg-white/95 p-5 text-center shadow-2xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 font-display text-3xl font-bold tabular-nums" style={{ borderColor: great ? GOOD : 'var(--brand-500)', color: great ? GOOD : 'var(--brand-800)' }}>
            {formatNumber(score)}/{formatNumber(total)}
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
        </div>
      </div>
    );
  }

  if (!question) return null;

  return (
    <>
      <div className="pointer-events-none absolute left-[64px] right-[64px] top-3 z-20 flex justify-center">
        <div className="max-w-full rounded-2xl border border-white/70 bg-white/92 px-3 py-2 text-center shadow-md backdrop-blur-sm">
          <div className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
            {t('map.question')} {formatNumber(index + 1)} / {formatNumber(total)}
          </div>
          <p className={cn('font-serif font-semibold text-[#3c3428]', textSize)}>{question.prompt}</p>
        </div>
      </div>

      {answer && (
        <div className="absolute inset-x-3 bottom-3 z-20" role="status">
          <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between gap-2 rounded-2xl border bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-sm" style={{ borderColor: answer.correct ? GOOD : BAD }}>
            <div className="flex min-w-0 flex-1 items-start gap-2.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white" style={{ background: answer.correct ? GOOD : BAD }}>
                {answer.correct ? <Check size={16} aria-hidden="true" /> : <X size={16} aria-hidden="true" />}
              </span>
              <div className="min-w-0">
                <div className="font-display text-[14px] font-bold" style={{ color: answer.correct ? GOOD : BAD }}>
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
        </div>
      )}
    </>
  );
};
