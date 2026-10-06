// The (i) points on a chapter picture and their cards (moved from StoryPage.tsx).
import React, { useRef, useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Info } from '../ui/icons';
import { Hotspot } from '../../types';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';

export const HotspotButton = ({ 
  hotspot, 
  isActive, 
  onToggle,
  collectionId = 'prophets'
}: { 
  hotspot: Hotspot; 
  isActive: boolean; 
  onToggle: () => void;
  collectionId?: string;
}) => {
  const { language } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [canShowTooltip, setCanShowTooltip] = useState(false);
  const [coords, setCoords] = useState({
    top: 12,
    left: 12,
    arrowOffset: 24,
    isAbove: true,
  });

  const updateCoords = () => {
    if (!buttonRef.current) {
      setCanShowTooltip(false);
      return;
    }

    const rect = buttonRef.current.getBoundingClientRect();
    const isVisibleTrigger =
      buttonRef.current.getClientRects().length > 0 &&
      rect.width > 0 &&
      rect.height > 0;

    if (!isVisibleTrigger) {
      setCanShowTooltip(false);
      return;
    }

    setCanShowTooltip(true);

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = tooltipRef.current?.offsetWidth ?? Math.min(viewportWidth - 24, 352);
    const tooltipHeight = tooltipRef.current?.offsetHeight ?? Math.min(viewportHeight - 24, 220);
    const gap = 10;
    const edge = 12;
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

  // Measured before paint (again once the card exists), so it opens in place instead of jumping.
  useLayoutEffect(() => {
    if (!isActive) {
      setCanShowTooltip(false);
      return;
    }

    updateCoords();
    window.addEventListener('resize', updateCoords);
    window.addEventListener('scroll', updateCoords, true);

    return () => {
      window.removeEventListener('resize', updateCoords);
      window.removeEventListener('scroll', updateCoords, true);
    };
  }, [isActive]);

  useLayoutEffect(() => {
    if (!isActive || !canShowTooltip || !tooltipRef.current) return;
    updateCoords();
    if (typeof ResizeObserver === 'undefined') return;
    const resizeObserver = new ResizeObserver(updateCoords);
    resizeObserver.observe(tooltipRef.current);
    return () => resizeObserver.disconnect();
  }, [isActive, canShowTooltip]);

  return (
    <div
      className="absolute pointer-events-auto"
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggle}
        className="relative z-[80] -m-2 p-2 visible opacity-100 group/hotspot rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        data-hotspot
        aria-expanded={isActive}
        aria-label={hotspot.title}
      >
        <motion.div
          animate={{ scale: [1, 1.16, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={cn(
            "w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white",
            "bg-brand-600/80"
          )}
        >
          <Info size={12} />
        </motion.div>

        {createPortal(
          <AnimatePresence>
            {isActive && canShowTooltip && (
              <>
                <div
                  className="fixed inset-0 z-[99998]"
                  onClick={onToggle}
                />
                <motion.div
                  ref={tooltipRef}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  style={{
                    position: 'fixed',
                    top: coords.top,
                    left: coords.left,
                    zIndex: 99999,
                    pointerEvents: 'auto',
                  }}
                  className={cn(
                    "w-[calc(100vw-1.5rem)] max-w-[22rem] max-h-[calc(100vh-1.5rem)] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                    language === 'ar' ? "p-4 sm:p-6" : "p-3.5 sm:p-5",
                    "bg-wood/95 backdrop-blur-md rounded-2xl shadow-2xl border",
                    "border-brand-500/40"
                  )}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h4 className={cn(
                    "font-display mb-2",
                    "text-brand-400",
                    language === 'ar' ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
                  )}>
                    {hotspot.title}
                  </h4>
                  <p className={cn(
                    "font-serif text-parchment/80 leading-relaxed",
                    language !== 'ar' && "italic",
                    language === 'ar' ? "text-base sm:text-lg" : "text-xs sm:text-base"
                  )}>
                    {hotspot.description}
                  </p>

                  <div
                    style={{ left: coords.arrowOffset }}
                    className={cn(
                      "pointer-events-none absolute -translate-x-1/2 border-8 border-transparent",
                      coords.isAbove
                        ? "top-full border-t-wood/95"
                        : "bottom-full border-b-wood/95"
                    )}
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
      </button>
    </div>
  );
};
