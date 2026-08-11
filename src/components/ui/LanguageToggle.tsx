import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-2 bg-black/35 backdrop-blur-md p-0.5 xs:p-1 rounded-full border border-gold/40 shadow-lg transition-all duration-300 hover:border-gold/60" role="group" aria-label="Language selection">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="Use English"
        aria-pressed={language === 'en'}
        className={cn(
          "min-h-8 xs:min-h-9 px-2 xs:px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] xs:text-[10px] sm:text-[12px] font-display font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer",
          language === 'en' 
            ? "bg-gold text-white shadow-md shadow-gold/30 font-bold" 
            : "text-parchment/70 hover:text-parchment hover:bg-white/5"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('ar')}
        aria-label="استخدام العربية"
        aria-pressed={language === 'ar'}
        className={cn(
          "min-h-8 xs:min-h-9 px-2 xs:px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] xs:text-[11px] sm:text-[13px] font-arabic font-semibold transition-all duration-300 cursor-pointer",
          language === 'ar' 
            ? "bg-gold text-white shadow-md shadow-gold/30 font-bold" 
            : "text-parchment/70 hover:text-parchment hover:bg-white/5"
        )}
      >
        العربية
      </button>
    </div>
  );
};
