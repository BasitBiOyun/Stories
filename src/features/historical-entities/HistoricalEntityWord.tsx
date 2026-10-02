import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { getHistoricalEntity, resolveHistoricalCopy, resolveHistoricalMapAsset } from './registry';
import { EntityMap } from './EntityMap';
import { entityPictureUrl } from './pictures';
import { LearnerName } from './LearnerNameLine';
import { groupColor } from './categories';

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
    const edge = 12;
    const gap = 8;
    const tooltipWidth = tooltipRef.current?.offsetWidth ?? Math.min(viewportWidth - edge * 2, 360);
    const tooltipHeight = tooltipRef.current?.offsetHeight ?? Math.min(viewportHeight - edge * 2, 420);
    const triggerCenterX = rect.left + rect.width / 2;

    const unclampedLeft = triggerCenterX - tooltipWidth / 2;
    const maxLeft = Math.max(edge, viewportWidth - tooltipWidth - edge);
    const left = Math.min(Math.max(unclampedLeft, edge), maxLeft);

    const spaceAbove = rect.top - edge;
    const spaceBelow = viewportHeight - rect.bottom - edge;
    const isAbove = spaceAbove >= tooltipHeight + gap || spaceAbove >= spaceBelow;
    const desiredTop = isAbove
      ? rect.top - gap - tooltipHeight
      : rect.bottom + gap;
    const maxTop = Math.max(edge, viewportHeight - tooltipHeight - edge);
    const top = Math.min(Math.max(desiredTop, edge), maxTop);

    const arrowOffset = Math.min(
      Math.max(triggerCenterX - left, 18),
      Math.max(18, tooltipWidth - 18),
    );

    setCoords({ top, left, arrowOffset, isAbove });
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

  const copy = resolveHistoricalCopy(entity, locale);
  const isArabic = locale === 'ar';
  const mapAsset = resolveHistoricalMapAsset(entity, locale);
  const picture = entityPictureUrl(entity);
  const colors = groupColor(entity);

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
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
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
                  'w-[calc(100vw-1.5rem)] max-w-[360px] max-h-[calc(100vh-1.5rem)] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl border border-teal-300/30',
                  'bg-wood text-parchment shadow-2xl',
                  isArabic ? 'text-right' : 'text-left',
                )}
              >
                <div className="px-3.5 pt-3 pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-display" style={{ color: colors.onDark }}>
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: colors.onDark }} />
                        {copy.kindLabel}
                      </span>
                      <h4 className={cn('mt-0.5 font-display font-bold leading-tight text-teal-200', isArabic ? 'text-xl' : 'text-lg')}>
                        {copy.title}
                        <LearnerName entity={entity} className="text-teal-100" />
                      </h4>
                    </div>
                    <span className="shrink-0 rounded-full border border-teal-300/20 bg-teal-300/10 px-2 py-0.5 text-[10px] text-teal-100/85">
                      {copy.periodLabel}
                    </span>
                  </div>
                </div>

                {mapAsset && (
                  <div className="relative mx-3">
                    <EntityMap
                      src={mapAsset}
                      alt={copy.mapAlt}
                      focus={entity.focus}
                      showFocus={Boolean(entity.showFocus)}
                      aspect={entity.mapAspect}
                      color={colors.base}
                      label={copy.title}
                    />
                    {picture && (
                      // The picture sits in the map corner away from the place, so it never covers it.
                      <img
                        src={picture}
                        alt=""
                        className={cn(
                          'pointer-events-none absolute h-[72px] w-[72px] rounded-full object-cover shadow-lg ring-2 ring-white/90',
                          (entity.focus?.x ?? 0) > 50 ? 'left-2' : 'right-2',
                          (entity.focus?.y ?? 0) > 50 ? 'top-2' : 'bottom-2',
                        )}
                      />
                    )}
                  </div>
                )}

                <div className={cn('px-3.5 pb-3', mapAsset ? 'pt-2.5' : 'pt-0')}>
                  <p className={cn('font-serif leading-snug text-parchment/90', isArabic ? 'text-base' : 'text-sm')}>
                    {copy.summary}
                  </p>
                  {copy.approximateLabel && (
                    <p className="mt-1.5 text-[10px] text-teal-200/65">
                      {copy.approximateLabel}
                    </p>
                  )}
                </div>

                <div
                  style={{ left: coords.arrowOffset }}
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
