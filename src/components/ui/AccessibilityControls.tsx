import React from 'react';
import { Type } from 'lucide-react';
import { cn } from '../../lib/utils';

export const AccessibilityControls = ({ 
  isDyslexic, 
  onToggleDyslexic
}: { 
  isDyslexic: boolean; 
  onToggleDyslexic: () => void;
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-wood/80 backdrop-blur-md p-2 rounded-full border border-gold/20 shadow-xl">
      <button
        onClick={onToggleDyslexic}
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all",
          isDyslexic ? "bg-gold text-white" : "text-gold hover:bg-gold/10"
        )}
        title="Toggle Dyslexic Font"
      >
        <Type size={18} />
      </button>
    </div>
  );
};
