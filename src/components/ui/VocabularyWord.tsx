import React, { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { useStoryProgress } from '../../contexts/StoryProgressContext';
import { getActiveBilingualCounterpart } from '../../data/bilingualHighlightCards';

export const VocabularyWord = ({ 
  word, 
  definition,
  customStyle,
  collectionId = 'prophets'
}: { 
  word: string; 
  definition: string;
  customStyle?: string;
  collectionId?: string;
}) => {
  const { t, language } = useLanguage();
  const { trackWordClick } = useStoryProgress();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{
    top: number;
    left: number;
    arrowOffset: number;
    isAbove: boolean;
  }>({ top: 0, left: 0, arrowOffset: 0, isAbove: true });

  const normalizedDefinition = definition?.trim() ?? '';
  const genericFallback = t('nav.keyWordFallback').trim();
  const hasDefinition = Boolean(normalizedDefinition) && normalizedDefinition !== genericFallback;

  const pairedEntry = useMemo(() => getActiveBilingualCounterpart(
    language === 'ar' ? 'ar' : 'en',
    word,
    normalizedDefinition,
  ), [word, normalizedDefinition, language]);
  const pairedLanguage = pairedEntry?.language ?? (language === 'ar' ? 'en' : 'ar');

  const highlightStyle = useMemo(() => {
    if (collectionId === 'turkish') {
      return 'text-sky-700 border-b-2 border-cyan-500/60 hover:border-cyan-600 font-bold transition-colors';
    }
    return customStyle || 'border-b-2 border-gold/40 hover:border-gold font-bold text-wood';
  }, [collectionId, customStyle]);

  const tooltipTheme = useMemo(() => {
    if (collectionId === 'turkish') {
      return {
        border: 'border-cyan-300/30',
        accent: 'text-cyan-300',
        accentSoft: 'text-cyan-300/70',
        divider: 'border-cyan-300/20',
      };
    }
    if (collectionId === 'history') {
      return {
        border: 'border-emerald-300/30',
        accent: 'text-emerald-300',
        accentSoft: 'text-emerald-300/70',
        divider: 'border-emerald-300/20',
      };
    }
    return {
      border: 'border-gold/20',
      accent: 'text-gold',
      accentSoft: 'text-gold/70',
      divider: 'border-gold/20',
    };
  }, [collectionId]);

  const updateCoords = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      const tooltipWidth = tooltipRef.current 
        ? tooltipRef.current.offsetWidth 
        : Math.min(viewportWidth - 24, 320);
      const tooltipHeight = tooltipRef.current 
        ? tooltipRef.current.offsetHeight 
        : 100;

      const triggerCenterX = rect.left + rect.width / 2;

      const halfWidth = tooltipWidth / 2;
      const minLeft = 12 + halfWidth;
      const maxLeft = viewportWidth - 12 - halfWidth;
      
      let clampedLeft = triggerCenterX;
      if (clampedLeft < minLeft) clampedLeft = minLeft;
      if (clampedLeft > maxLeft) clampedLeft = maxLeft;

      const arrowOffset = triggerCenterX - clampedLeft;

      const spaceAbove = rect.top;
      const isAbove = spaceAbove >= tooltipHeight + 16 || spaceAbove >= viewportHeight - rect.bottom;

      const top = isAbove 
        ? rect.top - 8
        : rect.bottom + 8;

      setCoords({
        top,
        left: clampedLeft,
        arrowOffset,
        isAbove
      });
    }
  };

  useEffect(() => {
    if (isOpen && hasDefinition) {
      updateCoords();
      const timer = setTimeout(updateCoords, 10);
      window.addEventListener('resize', updateCoords);
      window.addEventListener('scroll', updateCoords, true);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', updateCoords);
        window.removeEventListener('scroll', updateCoords, true);
      };
    }
  }, [isOpen, hasDefinition]);

  useEffect(() => {
    if (!hasDefinition && isOpen) setIsOpen(false);
  }, [hasDefinition, isOpen]);

  return (
    <span className="relative inline-block">
      <span 
        ref={triggerRef}
        onClick={(e) => {
          e.stopPropagation();
          if (!hasDefinition) return;
          setIsOpen(!isOpen);
          if (!isOpen) trackWordClick(word);
        }}
        className={cn(
          "transition-colors",
          hasDefinition ? "cursor-help" : "cursor-default",
          highlightStyle
        )}
        aria-disabled={!hasDefinition}
      >
        {word}
      </span>
      {hasDefinition && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-[99998]"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                ref={tooltipRef}
                initial={{ opacity: 0, scale: 0.95, x: '-50%', y: coords.isAbove ? '-100%' : '0%' }}
                animate={{ opacity: 1, scale: 1, x: '-50%', y: coords.isAbove ? '-100%' : '0%' }}
                exit={{ opacity: 0, scale: 0.95, x: '-50%', y: coords.isAbove ? '-100%' : '0%' }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                style={{ 
                  position: 'fixed',
                  top: coords.top,
                  left: coords.left,
                  zIndex: 99999,
                  pointerEvents: 'auto'
                }}
                className={cn(
                  "w-[calc(100vw-2rem)] max-w-xs sm:max-w-sm md:max-w-md p-3.5 sm:p-5",
                  "bg-wood text-parchment rounded-xl shadow-2xl border",
                  tooltipTheme.border,
                  language === 'ar' ? "text-right" : "text-left"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <span className={cn(
                  "font-display uppercase tracking-widest mb-1 sm:mb-2 block",
                  tooltipTheme.accent,
                  language === 'ar' ? "text-sm sm:text-base" : "text-[10px] sm:text-[11px]"
                )}>
                  {t('nav.meaning')}
                </span>
                <span className={cn(
                  "font-serif block leading-relaxed",
                  language !== 'ar' && "italic",
                  language === 'ar' ? "text-base sm:text-xl font-bold" : "text-xs sm:text-sm md:text-base"
                )}>{normalizedDefinition}</span>

                {pairedEntry && (
                  <div
                    dir={pairedLanguage === 'ar' ? 'rtl' : 'ltr'}
                    lang={pairedLanguage}
                    className={cn(
                      "mt-3.5 sm:mt-4 pt-3.5 sm:pt-4 border-t",
                      tooltipTheme.divider,
                      pairedLanguage === 'ar' ? "text-right" : "text-left"
                    )}
                  >
                    <span className={cn(
                      "font-display uppercase tracking-widest text-[9px] sm:text-[10px] block mb-1.5",
                      tooltipTheme.accentSoft
                    )}>
                      {pairedLanguage === 'ar' ? 'العربية' : 'English'}
                    </span>
                    <span className={cn(
                      "font-serif font-bold block mb-1",
                      tooltipTheme.accent,
                      pairedLanguage === 'ar' ? "text-lg sm:text-xl" : "text-sm sm:text-base"
                    )}>
                      {pairedEntry.word}
                    </span>
                    <span className={cn(
                      "font-serif text-parchment/85 block leading-relaxed",
                      pairedLanguage === 'ar' ? "text-base sm:text-lg" : "text-xs sm:text-sm md:text-base italic"
                    )}>
                      {pairedEntry.definition}
                    </span>
                  </div>
                )}

                <div 
                  style={{
                    left: `calc(50% + ${coords.arrowOffset}px)`
                  }}
                  className={cn(
                    "absolute -translate-x-1/2 border-8 border-transparent",
                    coords.isAbove 
                      ? "top-full border-t-wood" 
                      : "bottom-full border-b-wood"
                  )} 
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </span>
  );
};
