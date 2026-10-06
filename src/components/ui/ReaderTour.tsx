import React, { useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';

const TOUR_KEY = 'app_reader_tour_done';

export const isReaderTourDone = (): boolean => {
  try {
    return localStorage.getItem(TOUR_KEY) === '1';
  } catch {
    return true;
  }
};

const markReaderTourDone = () => {
  try {
    localStorage.setItem(TOUR_KEY, '1');
  } catch {
    // Storage may be unavailable; the tour then shows again next time.
  }
};

interface TourStep {
  /** Selector of the element the step points at; the first visible match is used. */
  selector: string;
  title: string;
  body: string;
}

interface ReaderTourProps {
  active: boolean;
  onFinish: () => void;
}

const PAD = 8;

const firstVisible = (selector: string): HTMLElement | null => {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
  return nodes.find(node => node.offsetParent !== null && node.getBoundingClientRect().width > 0) ?? null;
};

/**
 * Three-step first-time tour of a story page: a vocabulary word, a picture hotspot and the
 * Quick Challenge. Steps whose target is not on this page are skipped. Runs once per device.
 */
export const ReaderTour: React.FC<ReaderTourProps> = ({ active, onFinish }) => {
  const { t, isRTL, formatNumber } = useLanguage();
  const [steps, setSteps] = useState<TourStep[]>([]);
  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!active) return;
    const all: TourStep[] = [
      { selector: '[data-vocab-word]', title: t('nav.tourWordTitle'), body: t('nav.tourWordBody') },
      { selector: '[data-hotspot]', title: t('nav.tourHotspotTitle'), body: t('nav.tourHotspotBody') },
      { selector: '[data-quick-challenge]', title: t('nav.tourQuickTitle'), body: t('nav.tourQuickBody') },
    ];
    const available = all.filter(step => firstVisible(step.selector));
    if (available.length === 0) {
      markReaderTourDone();
      onFinish();
      return;
    }
    setSteps(available);
    setIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const step = steps[index];

  useLayoutEffect(() => {
    if (!active || !step) return;
    const target = firstVisible(step.selector);
    if (!target) {
      setRect(null);
      return;
    }
    target.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'auto' });
    const measure = () => setRect(target.getBoundingClientRect());
    const frame = window.requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, true);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure, true);
    };
  }, [active, step]);

  const finish = () => {
    markReaderTourDone();
    onFinish();
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active || !step || !rect) return null;

  const isLast = index === steps.length - 1;
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const cardWidth = Math.min(320, viewportWidth - 24);
  const placeBelow = rect.bottom + 12 + 170 < viewportHeight || rect.top < 190;
  const cardTop = placeBelow ? rect.bottom + PAD + 10 : undefined;
  const cardBottom = placeBelow ? undefined : viewportHeight - rect.top + PAD + 10;
  const cardLeft = Math.min(Math.max(12, rect.left + rect.width / 2 - cardWidth / 2), viewportWidth - cardWidth - 12);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="reader-tour"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[900]"
        data-reader-tour
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Spotlight: the page is dimmed except the target. Clicks outside the card close the tour. */}
        <div
          className="absolute rounded-2xl ring-2 ring-white/90 transition-all duration-200"
          style={{
            top: rect.top - PAD,
            left: rect.left - PAD,
            width: rect.width + PAD * 2,
            height: rect.height + PAD * 2,
            boxShadow: '0 0 0 9999px rgba(10, 8, 4, 0.62)',
          }}
          onClick={finish}
          aria-hidden="true"
        />
        <motion.div
          key={step.selector}
          initial={{ opacity: 0, y: placeBelow ? 6 : -6 }}
          animate={{ opacity: 1, y: 0 }}
          role="dialog"
          aria-labelledby="reader-tour-title"
          className="absolute rounded-panel bg-white p-4 text-start shadow-[0_18px_48px_rgba(0,0,0,0.35)]"
          style={{ width: cardWidth, left: cardLeft, top: cardTop, bottom: cardBottom }}
        >
          <p className="ui-label text-wood/70">{formatNumber(index + 1)} / {formatNumber(steps.length)}</p>
          <p id="reader-tour-title" className="mt-1 font-display text-[15px] font-semibold text-wood">{step.title}</p>
          <p className="mt-1 font-serif text-[13px] leading-snug text-wood/72">{step.body}</p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={finish}
              className="min-h-10 rounded-full px-3 font-display text-[12px] font-semibold text-wood/70 transition-colors hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {t('nav.tourSkip')}
            </button>
            <button
              type="button"
              autoFocus
              onClick={() => (isLast ? finish() : setIndex(i => i + 1))}
              className={cn(
                'min-h-10 rounded-full bg-brand-700 px-4 font-display text-[12px] font-semibold text-white transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
              )}
            >
              {isLast ? t('nav.tourDone') : t('nav.tourNext')}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};
