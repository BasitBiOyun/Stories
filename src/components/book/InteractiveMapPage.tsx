import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, X, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { PageData, Hotspot } from '../../types';
import { cn } from '../../lib/utils';

interface InteractiveMapPageProps {
  page: PageData;
  collectionId: string;
}

export const InteractiveMapPage: React.FC<InteractiveMapPageProps> = ({ page, collectionId }) => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  // Get theme colors based on collection
  const theme = React.useMemo(() => {
    if (collectionId === 'turkish') {
      return {
        accent: 'text-[#22D3EE]',
        accentBg: 'bg-[#22D3EE]',
        border: 'border-[#22D3EE]/30',
        glow: 'shadow-[#22D3EE]/20',
        dotGlow: 'bg-[#22D3EE]/20',
        btnBg: 'bg-[#22D3EE]/10 hover:bg-[#22D3EE]/20 text-[#22D3EE]',
        badgeBg: 'bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/20',
        panelBg: 'bg-[#0a1826]/95 border-[#22D3EE]/20',
      };
    } else if (collectionId === 'history') {
      return {
        accent: 'text-emerald-400',
        accentBg: 'bg-emerald-500',
        border: 'border-emerald-500/30',
        glow: 'shadow-emerald-500/20',
        dotGlow: 'bg-emerald-500/20',
        btnBg: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400',
        badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        panelBg: 'bg-[#042416]/95 border-emerald-500/20',
      };
    } else {
      return {
        accent: 'text-gold',
        accentBg: 'bg-gold',
        border: 'border-amber-400/30',
        glow: 'shadow-amber-400/20',
        dotGlow: 'bg-gold/20',
        btnBg: 'bg-gold/10 hover:bg-gold/20 text-gold',
        badgeBg: 'bg-gold/10 text-gold border-gold/20',
        panelBg: 'bg-[#14221a]/95 border-amber-400/20',
      };
    }
  }, [collectionId]);

  return (
    <div className="w-full h-full relative flex flex-col md:flex-row bg-[#030712] overflow-hidden rounded-3xl border border-white/5 select-none shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
      
      {/* Immersive Compass Background Emblem */}
      <div className="absolute -bottom-16 -right-16 w-80 h-80 opacity-5 pointer-events-none z-0">
        <Compass className="w-full h-full animate-[spin_120s_linear_infinite]" />
      </div>

      {/* Map Content Layer (Left/Center area) */}
      <div className="flex-1 h-full relative flex items-center justify-center overflow-hidden bg-black/40 z-10">
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

        {/* Dynamic Map Title */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-2.5 shadow-2xl z-30">
          <Sparkles className={cn("w-4 h-4 animate-pulse", theme.accent)} />
          <h3 className={cn("font-display text-[11px] md:text-xs uppercase tracking-widest font-bold", theme.accent)}>
            {page.title}
          </h3>
        </div>

        {/* Map Stage */}
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-[82vh] aspect-video w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            
            {/* Real Map Image */}
            <img 
              src={page.image} 
              alt={page.title}
              className="w-full h-full object-contain pointer-events-none select-none transition-transform duration-700 hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />

            {/* Gradient vignette edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none" />

            {/* Interactive Pulse Hotspots */}
            {page.hotspots?.map((hotspot) => {
              const isSelected = selectedHotspot?.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  id={`map-hotspot-${hotspot.id}`}
                  onClick={() => setSelectedHotspot(hotspot)}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer p-3 focus:outline-none"
                  title={hotspot.title}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Ring ping animation */}
                    <div className={cn(
                      "absolute w-8 h-8 rounded-full animate-ping opacity-70",
                      isSelected ? theme.accentBg : "bg-white"
                    )} />
                    
                    {/* Secondary ring for richer depth */}
                    <div className={cn(
                      "absolute w-6 h-6 rounded-full opacity-30 scale-100 group-hover:scale-125 transition-transform duration-300",
                      isSelected ? "bg-white/40" : theme.accentBg
                    )} />

                    {/* Core Solid point */}
                    <div className={cn(
                      "w-3.5 h-3.5 rounded-full border border-white/80 shadow-md flex items-center justify-center transition-all duration-300",
                      isSelected ? "bg-white scale-110" : theme.accentBg
                    )}>
                      <MapPin className="w-2 h-2 text-black stroke-[3]" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Info Sidebar Panel (Wow element - Slate glass sliding description) */}
      <div className="w-full md:w-[380px] h-auto md:h-full border-t md:border-t-0 md:border-l border-white/10 bg-black/50 backdrop-blur-xl relative flex flex-col justify-between z-20 overflow-hidden shrink-0">
        
        {/* Panel background glow */}
        <div className={cn("absolute inset-0 pointer-events-none opacity-5 transition-opacity duration-500", theme.dotGlow)} />

        {/* Upper container */}
        <div className="p-6 md:p-8 flex-1 flex flex-col overflow-y-auto custom-scrollbar">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Compass className={cn("w-5 h-5", theme.accent)} />
              <span className="font-display text-[10px] uppercase tracking-wider font-semibold text-white/40">
                Interactive Legend
              </span>
            </div>
            {selectedHotspot && (
              <button 
                onClick={() => setSelectedHotspot(null)}
                className="p-1 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {selectedHotspot ? (
              <motion.div
                key={selectedHotspot.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col"
              >
                {/* Badge */}
                <div className="flex">
                  <span className={cn("text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-bold border", theme.badgeBg)}>
                    Active Location
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-sans font-medium text-lg md:text-xl text-white tracking-tight mt-3 mb-4 leading-tight">
                  {selectedHotspot.title}
                </h4>

                {/* Description */}
                <p className="font-serif italic text-white/75 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  {selectedHotspot.description}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-12"
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border", theme.border, "bg-white/5")}>
                  <AlertCircle className={cn("w-6 h-6", theme.accent)} />
                </div>
                <h4 className="font-display text-xs uppercase tracking-wider font-semibold text-white mb-2">
                  Explore the Region
                </h4>
                <p className="text-white/40 text-xs max-w-[240px] leading-relaxed">
                  Click on any of the glowing hotspots on the map to view historical events, routes, and geographic context.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mini Tip Footer inside sidebar */}
        <div className="p-4 bg-black/40 border-t border-white/5 flex items-center justify-center text-[10px] text-white/30 font-mono tracking-wider uppercase">
          Use the arrows to navigate the story
        </div>
      </div>
    </div>
  );
};
