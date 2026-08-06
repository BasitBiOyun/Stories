import React from 'react';
import { motion } from 'motion/react';

export const GrowthTree = ({ progress }: { progress: number }) => {
  return (
    <div className="fixed bottom-24 right-8 z-40 pointer-events-none opacity-40">
      <motion.div 
        animate={{ 
          scale: 0.5 + progress * 1.5,
          rotate: [0, 2, -2, 0]
        }}
        transition={{ rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="text-gold"
      >
        <svg width="40" height="60" viewBox="0 0 40 60">
          <path d="M20 60 V20 M20 40 L10 30 M20 35 L30 25 M20 25 L15 15 M20 20 L25 10" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="10" r="3" fill="currentColor" />
          <circle cx="10" cy="30" r="2" fill="currentColor" />
          <circle cx="30" cy="25" r="2" fill="currentColor" />
        </svg>
      </motion.div>
    </div>
  );
};
