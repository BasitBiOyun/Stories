import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { getHistoricalEntity, resolveHistoricalMapAsset } from './registry';

export const HistoricalEntityWord = ({
  word,
  entityId,
}: {
  word: string;
  entityId: string;
}) => {
  const { language } = useLanguage();
  const locale = language === 'ar' ? 'ar' : 'en';
  const entity = getHistoricalEntity(entityId);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    arrowOffset: 0,
    isAbove: true,
  });

  const updateCoords = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = tooltipRef.current?.offsetWidth ?? Math.min(viewportWidth - 24, 420);
    const tooltipHeight = tooltipRef.current?.offsetHeight ?? 330;
    const triggerCenterX = rect.left + rect.width / 2;
    const halfWidth = tooltipWidth / 2;
    const minLeft = 12 + halfWidth;
    const maxLeft = viewportWidth - 12 - halfWidth;
    const left = Math.min(Math.max(triggerCenterX, minLeft), maxLeft);
    const arrowOffset = triggerCenterX - left;
    const spaceAbove = rect.top;
    const isAbove = spaceAbove >= tooltipHeight + 16 || spaceAbove >= viewportHeight - rect.bottom;

    setCoords({
      top: isAbove ? rect.top - 8 : rect.bottom + 8,
      left,
      arrowOffset,
      isAbove,
    });
  };

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    updateCoords();
    const timer = window.setTimeout(updateCoords, 20);
    window.addEventListener('resize', updateCoords);
    window.addEventListener('scroll', updateCoords, true);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', updateCoords);
      window.removeEventListener('scroll', updateCoords, true);
    };
  }, [isOpen]);

  if (!entity) return <>{word}</>;

  const copy = entity.copy[locale];
  const isArabic = locale === 'ar';
  const mapAsset = resolveHistoricalMapAsset(entity, locale);

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-label={`${copy.title}: ${copy.kindLabel}`}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(current => !current);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsOpen(current => !current);
          }
          if (event.key === 'Escape') close();
        }}
        className={cn(
          'rounded-[3px] px-[2px] font-bold cursor-pointer transition-colors',
          'text-teal-900 border-b-2 border-teal-600/75 bg-teal-100/55',
          'hover:bg-teal-200/70 hover:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/40',
        )}
      >
        {word}
      </span>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <div className="fixed inset-0 z-[99998]" onClick={close} />
              <motion.div
                ref={tooltipRef}
                initial={{ opacity: 0, scale: 0.98, x: '-50%', y: coords.isAbove ? '-100%' : '0%' }}
                animate={{ opacity: 1, scale: 1, x: '-50%', y: coords.isAbove ? '-100%' : '0%' }}
                exit={{ opacity: 0, scale: 0.98, x: '-50%', y: coords.isAbove ? '-100%' : '0%' }}
                transition={{ duration: 0.12, ease: 'easeOut' }}
                style={{
                  position: 'fixed',
                  top: coords.top,
                  left: coords.left,
                  zIndex: 99999,
                  pointerEvents: 'auto',
                }}
                dir={isArabic ? 'rtl' : 'ltr'}
                lang={locale}
                onClick={(event) => event.stopPropagation()}
                className={cn(
                  'w-[calc(100vw-2rem)] max-w-[420px] overflow-hidden rounded-2xl border border-teal-300/30',
                  'bg-wood text-parchment shadow-2xl',
                  isArabic ? 'text-right' : 'text-left',
                )}
              >
                <div className="p-4 sm:p-5 pb-3 sm:pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="block text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-teal-300/80 font-display">
                        {copy.kindLabel}
                      </span>
                      <h4 className={cn('mt-1 font-display font-bold text-teal-200', isArabic ? 'text-2xl' : 'text-xl')}>
                        {copy.title}
                      </h4>
                    </div>
                    <span className="shrink-0 rounded-full border border-teal-300/20 bg-teal-300/10 px-2.5 py-1 text-[10px] sm:text-xs text-teal-100/85">
                      {copy.periodLabel}
                    </span>
                  </div>
                </div>

                <div className="relative mx-3 sm:mx-4 aspect-[4/3] overflow-hidden rounded-xl bg-[#d8c7a7]">
                  <img
                    src={mapAsset}
                    alt={copy.mapAlt}
                    className="absolute inset-0 h-full w-full object-contain"
                    draggable={false}
                  />
                </div>

                <div className="p-4 sm:p-5 pt-3.5 sm:pt-4">
                  <p className={cn('font-serif leading-relaxed text-parchment/90', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-[15px]')}>
                    {copy.summary}
                  </p>
                  {copy.approximateLabel && (
                    <p className="mt-2.5 text-[10px] sm:text-[11px] text-teal-200/65">
                      {copy.approximateLabel}
                    </p>
                  )}
                </div>

                <div
                  style={{ left: `calc(50% + ${coords.arrowOffset}px)` }}
                  className={cn(
                    'absolute -translate-x-1/2 border-8 border-transparent',
                    coords.isAbove ? 'top-full border-t-wood' : 'bottom-full border-b-wood',
                  )}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </span>
  );
};
