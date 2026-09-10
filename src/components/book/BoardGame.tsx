import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';

export const BoardGame = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';
  const [position, setPosition] = useState(0);
  const [diceValue, setDiceValue] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [message, setMessage] = useState(t('bg.rollToStart'));
  
  const boardSize = 12;
  const cells = useMemo(() => [
    { title: t('bg.cell.1.title'), info: t('bg.cell.1.info') },
    { title: t('bg.cell.2.title'), info: t('bg.cell.2.info') },
    { title: t('bg.cell.3.title'), info: t('bg.cell.3.info') },
    { title: t('bg.cell.4.title'), info: t('bg.cell.4.info') },
    { title: t('bg.cell.5.title'), info: t('bg.cell.5.info') },
    { title: t('bg.cell.6.title'), info: t('bg.cell.6.info') },
    { title: t('bg.cell.7.title'), info: t('bg.cell.7.info') },
    { title: t('bg.cell.8.title'), info: t('bg.cell.8.info') },
    { title: t('bg.cell.9.title'), info: t('bg.cell.9.info') },
    { title: t('bg.cell.10.title'), info: t('bg.cell.10.info') },
    { title: t('bg.cell.11.title'), info: t('bg.cell.11.info') },
    { title: t('bg.cell.12.title'), info: t('bg.cell.12.info') }
  ], [t]);
  
  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const val = Math.floor(Math.random() * 6) + 1;
      setDiceValue(val);
      const newPos = Math.min(boardSize - 1, position + val);
      setPosition(newPos);
      setMessage(cells[newPos].info);
      setIsRolling(false);
    }, 600);
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 h-full">
      <div className="grid grid-cols-4 gap-3 w-full max-w-md">
        {cells.map((cell, i) => (
          <div 
            key={i} 
            className={cn(
              "aspect-square rounded-lg border-2 flex flex-col items-center justify-center relative transition-all p-1 text-center",
              position === i ? "bg-gold border-gold shadow-lg scale-105 z-10" : "bg-white border-gold/10"
            )}
          >
            <span className="text-[11px] font-display opacity-40 mb-1">{i + 1}</span>
            <span className={cn(
              "font-serif font-bold leading-tight text-wood",
              isArabic ? "text-[15px]" : "text-[12px]"
            )}>{cell.title}</span>
            {position === i && (
              <motion.div layoutId="player" className="absolute -top-2 -right-2">
                <div className="w-5 h-5 bg-wood rounded-full border-2 border-parchment shadow-md flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
        <div className="p-4 bg-gold/5 rounded-xl border border-gold/20 max-w-xs">
          <p className={cn(
            "font-serif text-wood leading-relaxed",
            isArabic ? "not-italic text-lg" : "italic text-base"
          )}>{message}</p>
        </div>
        
        <div className="flex items-center gap-6">
          <motion.div 
            animate={isRolling ? { rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] } : {}}
            className="w-14 h-14 bg-white border-4 border-gold rounded-xl flex items-center justify-center text-2xl font-display text-wood shadow-xl"
          >
            {diceValue || '?'}
          </motion.div>
          <button 
            onClick={rollDice}
            disabled={isRolling || position === boardSize - 1}
            className={cn(
              "px-6 py-3 bg-wood text-parchment rounded-full font-sans font-bold uppercase tracking-widest hover:bg-gold transition-colors disabled:opacity-50 shadow-lg",
              isArabic ? "text-[15px]" : "text-xs"
            )}
          >
            {position === boardSize - 1 ? t('bg.journeyComplete') : t('bg.rollDice')}
          </button>
        </div>
      </div>
    </div>
  );
};
