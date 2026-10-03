import React, { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { useStoryProgress } from '../../contexts/StoryProgressContext';
import { getActiveBilingualCounterpart } from '../../data/bilingualHighlightCards';
import { HistoricalEntityWord, getHistoricalEntityIdFromDefinition } from '../../features/historical-entities';
import { BookMarked, Check } from './icons';
import { isMyWord, toggleMyWord, useMyWords } from '../../lib/myWords';

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
  const myWords = useMyWords();
  const wordLanguage = language === 'ar' ? 'ar' : 'en';
  const isSaved = isMyWord(myWords, wordLanguage, word);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{
    top: number;
    left: number;
    arrowOffset: number;
    isAbove: boolean;
  }>({ top: 0, left: 0, arrowOffset: 0, isAbove: true });

  const normalizedDefinition = definition?.trim() ?? '';
  const historicalEntityId = getHistoricalEntityIdFromDefinition(normalizedDefinition);
  const genericFallback = t('nav.keyWordFallback').trim();
  const hasDefinition = Boolean(normalizedDefinition) && normalizedDefinition !== genericFallback;

  const pairedEntry = useMemo(() => getActiveBilingualCounterpart(
    language === 'ar' ? 'ar' : 'en',
    word,
    normalizedDefinition,
  ), [word, normalizedDefinition, language]);
  const pairedLanguage = pairedEntry?.language ?? (language === 'ar' ? 'en' : 'ar');

  const highlightStyle = customStyle || 'border-b-2 border-brand-600/40 hover:border-brand-700 font-bold text-brand-900 transition-colors';

  const tooltipTheme = {
    border: 'border-brand-300/30',
    accent: 'text-brand-300',
    accentSoft: 'text-brand-300/70',
    divider: 'border-brand-300/20',
  };

  const updateCoords = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const edge = 12;
    const gap = 8;
    const tooltipWidth = tooltipRef.current?.offsetWidth ?? Math.min(viewportWidth - edge * 2, 320);
    const tooltipHeight = tooltipRef.current?.offsetHeight ?? Math.min(viewportHeight - edge * 2, 180);
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

  if (historicalEntityId) {
    return <HistoricalEntityWord word={word} entityId={historicalEntityId} />;
  }

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        role={hasDefinition ? 'button' : undefined}
        data-vocab-word={hasDefinition ? '' : undefined}
        tabIndex={hasDefinition ? 0 : undefined}
        aria-expanded={hasDefinition ? isOpen : undefined}
        onClick={(e) => {
          e.stopPropagation();
          if (!hasDefinition) return;
          setIsOpen(!isOpen);
          if (!isOpen) trackWordClick(word);
        }}
        onKeyDown={(e) => {
          if (!hasDefinition) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
            if (!isOpen) trackWordClick(word);
          } else if (e.key === 'Escape' && isOpen) {
            setIsOpen(false);
          }
        }}
        className={cn(
          "transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-1",
          hasDefinition ? "cursor-help" : "cursor-default",
          highlightStyle
        )}
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
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                style={{ 
                  position: 'fixed',
                  top: coords.top,
                  left: coords.left,
                  zIndex: 99999,
                  pointerEvents: 'auto'
                }}
                className={cn(
                  "w-[calc(100vw-1.5rem)] max-w-xs sm:max-w-sm md:max-w-md max-h-[calc(100vh-1.5rem)] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden p-3.5 sm:p-5",
                  "bg-wood text-parchment rounded-xl shadow-2xl border",
                  tooltipTheme.border,
                  language === 'ar' ? "text-right" : "text-left"
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <span className={cn(
                  "font-display uppercase tracking-widest mb-1 sm:mb-2 block",
                  tooltipTheme.accent,
                  language === 'ar' ? "text-sm sm:text-base" : "text-[11px] sm:text-xs"
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

                <button
                  type="button"
                  data-my-word-toggle
                  aria-pressed={isSaved}
                  onClick={() => toggleMyWord({ word, definition: normalizedDefinition, language: wordLanguage })}
                  className={cn(
                    "mt-3.5 inline-flex min-h-9 items-center gap-2 rounded-full border px-3.5 font-display text-[11px] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70",
                    isSaved ? "border-brand-300/50 bg-brand-300/15 text-brand-200" : "border-white/15 text-parchment/75 hover:border-brand-300/50 hover:text-parchment",
                  )}
                >
                  {isSaved ? <Check size={14} /> : <BookMarked size={14} />}
                  {isSaved
                    ? (language === 'ar' ? 'فِي كَلِمَاتِي' : 'In My words')
                    : (language === 'ar' ? 'احْفَظْ فِي كَلِمَاتِي' : 'Save to My words')}
                </button>

                <div 
                  style={{
                    left: coords.arrowOffset
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