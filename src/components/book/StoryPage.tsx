import React, { useRef, useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Info, Rocket, Book as BookIcon, Lock, ArrowLeftRight } from 'lucide-react';
import { PageData, Hotspot, Exercise } from '../../types';
import { VocabularyWord } from '../ui/VocabularyWord';
import { ExerciseModule } from '../ExerciseModule';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';
import { useStoryProgress } from '../../contexts/StoryProgressContext';
import { fallbackDefinitions as rawFallbackDefinitions, arabicAnimatedDefinitions as rawArabicAnimatedDefinitions } from '../../data/fallbackVocab';

const HotspotButton = ({ 
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
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const updateCoords = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + window.scrollY - 12,
        left: rect.left + window.scrollX + rect.width / 2
      });
    }
  };

  useEffect(() => {
    if (isActive) {
      updateCoords();
      window.addEventListener('resize', updateCoords);
      window.addEventListener('scroll', updateCoords, true);
      return () => {
        window.removeEventListener('resize', updateCoords);
        window.removeEventListener('scroll', updateCoords, true);
      };
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && tooltipRef.current && coords.top !== 0) {
      const h = tooltipRef.current.offsetHeight;
      const w = tooltipRef.current.offsetWidth;
      tooltipRef.current.style.marginTop = `-${h}px`;
      tooltipRef.current.style.marginLeft = `-${w / 2}px`;
    }
  }, [isActive, coords]);

  return (
    <div
      className="absolute pointer-events-auto"
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
    >
      <button
        ref={buttonRef}
        onClick={onToggle}
        className="relative group/hotspot"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={cn(
            "w-6 h-6 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white",
            collectionId === 'history' ? "bg-emerald-600/80" : collectionId === 'turkish' ? "bg-cyan-600/80" : "bg-amber-600/80"
          )}
        >
          <Info size={12} />
        </motion.div>

        {createPortal(
          <AnimatePresence>
            {isActive && (
              <>
                <div
                  className="fixed inset-0 z-[99998]"
                  onClick={onToggle}
                />
                <motion.div
                  ref={tooltipRef}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    position: 'absolute',
                    top: coords.top,
                    left: coords.left,
                    zIndex: 99999,
                    pointerEvents: 'auto'
                  }}
                  className={cn(
                    language === 'ar' ? "w-96 max-w-[90vw] p-4 sm:p-7" : "w-80 max-w-[85vw] p-3.5 sm:p-5",
                    "bg-wood/95 backdrop-blur-md rounded-xl shadow-2xl border",
                    collectionId === 'history' ? "border-emerald-500/40" : collectionId === 'turkish' ? "border-cyan-400/40" : "border-gold/30"
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h4 className={cn(
                    "font-display mb-2",
                    collectionId === 'history' ? "text-emerald-400" : collectionId === 'turkish' ? "text-cyan-400" : "text-gold",
                    language === 'ar' ? "text-xl sm:text-3xl" : "text-base sm:text-lg"
                  )}>
                    {hotspot.title}
                  </h4>
                  <p className={cn(
                    "font-serif text-parchment/80 leading-relaxed",
                    language !== 'ar' && "italic",
                    language === 'ar' ? "text-base sm:text-xl" : "text-xs sm:text-base"
                  )}>
                    {hotspot.description}
                  </p>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-wood/95" />
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

const normalizeArabic = (text: string) => {
  return text
    .replace(/[\u064B-\u0652]/g, "") // Remove diacritics
    .replace(/[أإآ]/g, "ا") // Normalize Alef
    .replace(/ة/g, "ه") // Normalize Teh Marbuta
    .replace(/ى/g, "ي"); // Normalize Alef Maksura
};

const getResponsiveStoryFontStyle = (baseSize: number, isRTL: boolean, isDyslexic?: boolean) => {
  const desktopPt = baseSize * (isRTL ? 1.35 : 1.1) + (isRTL ? 1 : 0);
  const desktopPx = desktopPt * 1.3333;
  const minPx = Math.max(13, desktopPx * 0.76);
  const slopeVw = isRTL ? 0.85 : 0.65;
  const interceptPx = minPx - (375 * slopeVw / 100);

  return {
    fontSize: `clamp(${minPx.toFixed(1)}px, ${interceptPx.toFixed(1)}px + ${slopeVw.toFixed(2)}vw, ${desktopPx.toFixed(1)}px)`
  };
};

const PoemBlock = ({ 
  english, 
  turkish, 
  fontSize 
}: { 
  english: string; 
  turkish: string; 
  fontSize: number;
}) => {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => setShowOriginal(!showOriginal)}
      className="my-6 w-auto p-4 md:py-4 md:pl-10 md:pr-16 rounded-2xl bg-parchment/45 border border-sky-300/60 border-l-4 border-r-4 border-sky-400 shadow-md relative overflow-hidden flex flex-col items-center justify-center text-center page-texture transition-all hover:shadow-lg hover:bg-parchment/55 hover:border-sky-500 cursor-pointer select-none"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={showOriginal ? 'tr' : 'en'}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className="font-serif italic leading-relaxed text-wood font-medium py-3 select-text selection:bg-gold/20"
          style={{ 
            fontSize: `clamp(0.95rem, 0.8rem + 0.6vw, ${(fontSize * 1.25 * 1.3333).toFixed(1)}px)` 
          }}
        >
          {(showOriginal ? turkish : english).split('\n').map((line, idx) => (
            <div key={idx} className="my-1">{line.trim()}</div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-600 transition-colors shadow-sm border border-sky-100 flex items-center justify-center">
        <ArrowLeftRight size={16} />
      </div>
    </motion.div>
  );
};

export const StoryPage = ({ 
  page, 
  allPages,
  currentIndex,
  isDyslexic,
  fontSize,
  level,
  collectionId = 'prophets'
}: { 
  page: PageData; 
  allPages: PageData[];
  currentIndex: number;
  isDyslexic: boolean;
  fontSize: number;
  level: string;
  collectionId?: string;
}) => {
  const { language, t, formatNumber, isRTL } = useLanguage();
  const { trackExerciseComplete } = useStoryProgress();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);

  const vocabStyle = useMemo(() => {
    if (collectionId === 'history') {
      return "border-b-2 border-teal-600/40 hover:border-teal-700 font-bold text-teal-900 transition-colors cursor-help";
    } else if (collectionId === 'turkish') {
      return "border-b-2 border-sky-600/40 hover:border-sky-600 font-bold text-blue-950 transition-colors cursor-help";
    } else {
      return "border-b-2 border-gold/40 hover:border-gold font-bold text-wood transition-colors cursor-help";
    }
  }, [collectionId]);

  const animatedStyle = useMemo(() => {
    if (collectionId === 'history') {
      return "text-emerald-700 border-b-2 border-emerald-500/50 hover:border-emerald-605 transition-colors font-bold cursor-help";
    } else if (collectionId === 'turkish') {
      return "text-sky-700 border-b-2 border-sky-500/50 hover:border-sky-600 transition-colors font-bold cursor-help";
    } else {
      return "text-amber-600 border-b-2 border-amber-400/50 hover:border-amber-500 transition-colors font-bold cursor-help";
    }
  }, [collectionId]);

  const seenHighlightedWords = useMemo(() => {
    const seen = new Set<string>();
    for (let i = 0; i < currentIndex; i++) {
      const prevPage = allPages[i];
      if (prevPage.animatedWords) {
        prevPage.animatedWords.forEach(word => seen.add(word.toLowerCase().trim()));
      }
      if (prevPage.vocabulary) {
        prevPage.vocabulary.forEach(v => seen.add(v.word.toLowerCase().trim()));
      }
    }
    return seen;
  }, [allPages, currentIndex]);

  // Dynamic book vocabulary map built from all pages of the current book
  const bookVocabularyMap = useMemo(() => {
    const map = new Map<string, string>();
    allPages.forEach(p => {
      p.vocabulary?.forEach(v => {
        const wordClean = v.word.replace(/[.,!?;:\"'“”‘’`()]/g, '').toLowerCase().trim();
        map.set(wordClean, v.definition);
        const norm = normalizeArabic(wordClean);
        if (norm !== wordClean) {
          map.set(norm, v.definition);
        }
        // Also strip "ال" for Arabic
        if (language === 'ar') {
          const stripped = normalizeArabic(wordClean.replace(/^ال/, ''));
          if (stripped !== norm) {
            map.set(stripped, v.definition);
          }
        }
      });
    });
    return map;
  }, [allPages, language]);

  const fallbackDefinitionsMap = useMemo(() => {
    const map = new Map<string, string>();
    Object.entries(rawFallbackDefinitions).forEach(([k, v]) => {
      map.set(k.toLowerCase().trim(), v);
    });
    return map;
  }, []);

  const fallbackArabicDefinitionsMap = useMemo(() => {
    const map = new Map<string, string>();
    Object.entries(rawArabicAnimatedDefinitions).forEach(([k, v]) => {
      const kClean = k.toLowerCase().trim();
      const kNorm = normalizeArabic(kClean);
      map.set(kNorm, v);
      map.set(kClean, v);
      const stripped = normalizeArabic(kClean.replace(/^ال/, ''));
      map.set(stripped, v);
    });
    return map;
  }, []);

  const getEnglishDefinition = (text: string) => {
    const clean = text.replace(/[.,!?;:\"'“”‘’`()]/g, '').toLowerCase().trim();
    if (bookVocabularyMap.has(clean)) {
      return bookVocabularyMap.get(clean)!;
    }
    
    let singular = clean;
    if (clean.endsWith('s')) singular = clean.slice(0, -1);
    if (clean.endsWith('es')) singular = clean.slice(0, -2);
    if (clean.endsWith('ies')) singular = clean.slice(0, -3) + 'y';
    if (bookVocabularyMap.has(singular)) {
      return bookVocabularyMap.get(singular)!;
    }

    for (const [k, v] of bookVocabularyMap.entries()) {
      if (clean.startsWith(k) && clean.length <= k.length + 3) {
        return v;
      }
      if (k.startsWith(clean) && k.length <= clean.length + 3) {
        return v;
      }
    }

    if (fallbackDefinitionsMap.has(clean)) {
      return fallbackDefinitionsMap.get(clean)!;
    }
    if (fallbackDefinitionsMap.has(singular)) {
      return fallbackDefinitionsMap.get(singular)!;
    }

    for (const [k, v] of fallbackDefinitionsMap.entries()) {
      if (clean.startsWith(k) && clean.length <= k.length + 3) {
        return v;
      }
      if (k.startsWith(clean) && k.length <= clean.length + 3) {
        return v;
      }
    }
    return '';
  };

  const getArabicDefinition = (text: string) => {
    const clean = text.replace(/[.,!?;:\"'“”‘’`()]/g, '').toLowerCase().trim();
    const norm = normalizeArabic(clean);
    const stripped = normalizeArabic(clean.replace(/^ال/, ''));

    if (bookVocabularyMap.has(norm)) {
      return bookVocabularyMap.get(norm)!;
    }
    if (bookVocabularyMap.has(stripped)) {
      return bookVocabularyMap.get(stripped)!;
    }
    if (bookVocabularyMap.has(clean)) {
      return bookVocabularyMap.get(clean)!;
    }

    for (const [k, v] of bookVocabularyMap.entries()) {
      const kNorm = normalizeArabic(k);
      const kStripped = normalizeArabic(k.replace(/^ال/, ''));
      if ((norm.startsWith(kNorm) || norm.startsWith(kStripped)) && norm.length <= kNorm.length + 3) {
        return v;
      }
      if ((kNorm.startsWith(norm) || kStripped.startsWith(norm)) && kNorm.length <= norm.length + 3) {
        return v;
      }
    }

    if (fallbackArabicDefinitionsMap.has(norm)) {
      return fallbackArabicDefinitionsMap.get(norm)!;
    }
    if (fallbackArabicDefinitionsMap.has(stripped)) {
      return fallbackArabicDefinitionsMap.get(stripped)!;
    }
    if (fallbackArabicDefinitionsMap.has(clean)) {
      return fallbackArabicDefinitionsMap.get(clean)!;
    }

    for (const [k, v] of fallbackArabicDefinitionsMap.entries()) {
      const kNorm = normalizeArabic(k);
      if (norm.startsWith(kNorm) && norm.length <= kNorm.length + 3) {
        return v;
      }
      if (kNorm.startsWith(norm) && kNorm.length <= norm.length + 3) {
        return v;
      }
    }
    return '';
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);
  const imageX = useTransform(springX, [-300, 300], [10, -10]);
  const imageY = useTransform(springY, [-300, 300], [10, -10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = vol;
      setVolume(vol);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (volume > 0) {
        audioRef.current.volume = 0;
        setVolume(0);
      } else {
        audioRef.current.volume = 1;
        setVolume(1);
      }
    }
  };

  const handleSpeedChange = () => {
    const nextSpeeds: Record<number, number> = {
      1: 1.25,
      1.25: 1.5,
      1.5: 1.75,
      1.75: 2,
      2: 1
    };
    const newSpeed = nextSpeeds[speed] || 1;
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
      setSpeed(newSpeed);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const chunksWithIndices = useMemo(() => {
    if (!page.timedChunks) return [];
    let currentWordIdx = 0;
    return page.timedChunks.map(chunk => {
      const wordCount = chunk.text.split(/\s+/).filter(w => w.length > 0).length;
      const startIdx = currentWordIdx;
      const endIdx = currentWordIdx + wordCount - 1;
      currentWordIdx += wordCount;
      return { ...chunk, startIdx, endIdx };
    });
  }, [page.timedChunks]);

  const renderContent = (content: string) => {
    const parts = content.split(/(\[POEM\][\s\S]*?\[\/POEM\])/g);
    
    let globalWordCounter = 0;
    const seenOnCurrentPage = new Set<string>();

    return parts.map((part, partIdx) => {
      if (part.startsWith('[POEM]') && part.endsWith('[/POEM]')) {
        const match = part.match(/\[POEM\]\s*English:\s*([\s\S]*?)\s*Turkish:\s*([\s\S]*?)\s*\[\/POEM\]/i);
        if (match) {
          const english = match[1].trim();
          const turkish = match[2].trim();
          return (
            <PoemBlock 
              key={`poem-${partIdx}`} 
              english={english} 
              turkish={turkish} 
              fontSize={fontSize} 
            />
          );
        }
      }

      // Normal text part
      const paragraphs = part.split('\n\n').filter(p => p.trim().length > 0);
      return paragraphs.map((paragraph, pIdx) => {
        const words = paragraph.split(/(\s+)/);

        const renderedElements: React.ReactNode[] = [];
        let skipCount = 0;

        for (let wIdx = 0; wIdx < words.length; wIdx++) {
          if (skipCount > 0) {
            skipCount--;
            continue;
          }

          const word = words[wIdx];
          if (/\s+/.test(word)) {
            renderedElements.push(word);
            continue;
          }

          // Check for phrases (up to 3 words)
          let foundPhrase = null;
          const potentialPhrases = [];
          let currentPotential = word;
          
          // Look ahead for potential phrases
          for (let lookAhead = 1; lookAhead <= 4; lookAhead++) {
            if (wIdx + lookAhead < words.length) {
              currentPotential += words[wIdx + lookAhead];
              if (!/\s+/.test(words[wIdx + lookAhead])) {
                potentialPhrases.push({ text: currentPotential, endIdx: wIdx + lookAhead });
              }
            }
          }

          // Check longest phrases first
          for (let i = potentialPhrases.length - 1; i >= 0; i--) {
            const p = potentialPhrases[i];
            const cleanP = p.text.replace(/[.,!?;:\"'“”‘’`()]/g, '').toLowerCase().trim();
            const normP = language === 'ar' ? normalizeArabic(cleanP) : cleanP;
            
            const isAlreadyHighlighted = seenHighlightedWords.has(cleanP) || seenOnCurrentPage.has(cleanP) || (language === 'ar' && seenOnCurrentPage.has(normP));
            
            const vocab = !isAlreadyHighlighted ? page.vocabulary?.find(v => {
              const vWord = v.word.toLowerCase().trim();
              const cleanV = vWord.replace(/[.,!?;:\"'“”‘’`()]/g, '');
              if (language === 'ar') {
                return normalizeArabic(cleanV) === normP || normalizeArabic(cleanV) === normalizeArabic(normP.replace(/^ال/, ''));
              }
              const cleanV_plural = cleanV + 's';
              const cleanV_es = cleanV + 'es';
              let cleanV_ies = cleanV;
              if (cleanV.endsWith('y')) {
                cleanV_ies = cleanV.slice(0, -1) + 'ies';
              }
              // For lookahead phrases, we only match if the vocab item itself is a multi-word phrase
              const isMultiWord = cleanV.includes(' ');
              if (!isMultiWord) return false;
              return cleanV === cleanP || cleanV_plural === cleanP || cleanV_es === cleanP || cleanV_ies === cleanP;
            }) : null;

            const isAnimated = !isAlreadyHighlighted && !vocab && page.animatedWords?.some(aw => {
              const awWord = aw.toLowerCase().trim();
              if (language === 'ar') {
                return normalizeArabic(awWord) === normP || normalizeArabic(awWord) === normalizeArabic(normP.replace(/^ال/, ''));
              }
              const awWord_plural = awWord + 's';
              const awWord_es = awWord + 'es';
              let awWord_ies = awWord;
              if (awWord.endsWith('y')) {
                awWord_ies = awWord.slice(0, -1) + 'ies';
              }
              // For lookahead phrases, we only match if the animated word itself is a multi-word phrase
              const isMultiWord = awWord.includes(' ');
              if (!isMultiWord) return false;
              return awWord === cleanP || awWord_plural === cleanP || awWord_es === cleanP || awWord_ies === cleanP;
            });

            if (vocab || isAnimated) {
              foundPhrase = { vocab, isAnimated, endIdx: p.endIdx, text: p.text, cleanText: cleanP, normText: normP };
              break;
            }
          }

          const currentGlobalIdx = globalWordCounter;

          if (foundPhrase) {
            const wordsInPhrase = foundPhrase.text.split(/\s+/).filter(w => w.length > 0).length;
            
            seenOnCurrentPage.add(foundPhrase.cleanText);
            if (foundPhrase.normText) seenOnCurrentPage.add(foundPhrase.normText);
            
            globalWordCounter += wordsInPhrase;
            skipCount = foundPhrase.endIdx - wIdx;

            let element: React.ReactNode;
            if (foundPhrase.vocab) {
              element = (
                <VocabularyWord 
                  word={foundPhrase.text} 
                  definition={foundPhrase.vocab.definition} 
                  customStyle={vocabStyle}
                  collectionId={collectionId}
                />
              );
            } else {
              const definition = language === 'ar' 
                ? getArabicDefinition(foundPhrase.cleanText)
                : getEnglishDefinition(foundPhrase.cleanText);
              element = (
                <VocabularyWord 
                  word={foundPhrase.text} 
                  definition={definition} 
                  customStyle={animatedStyle}
                  collectionId={collectionId}
                />
              );
            }

            renderedElements.push(
              <motion.span
                key={`${partIdx}-${pIdx}-${wIdx}`}
                className="inline-block rounded px-0.5"
              >
                {element}
              </motion.span>
            );
          } else {
            const cleanWord = word.replace(/[.,!?;:\"'“”‘’`()]/g, '').toLowerCase().trim();
            const normWord = language === 'ar' ? normalizeArabic(cleanWord) : cleanWord;
            
            const cleanV_for_check = page.vocabulary?.find(v => {
              const cleanV = v.word.toLowerCase().trim().replace(/[.,!?;:\"'“”‘’`()]/g, '');
              const cleanV_plural = cleanV + 's';
              const cleanV_es = cleanV + 'es';
              let cleanV_ies = cleanV;
              if (cleanV.endsWith('y')) {
                cleanV_ies = cleanV.slice(0, -1) + 'ies';
              }
              return cleanV === cleanWord || cleanV_plural === cleanWord || cleanV_es === cleanWord || cleanV_ies === cleanWord || cleanWord.startsWith(cleanV);
            })?.word.toLowerCase().trim().replace(/[.,!?;:\"'“”‘’`()]/g, '');

            const isAlreadyHighlighted = seenHighlightedWords.has(cleanWord) || 
              seenOnCurrentPage.has(cleanWord) || 
              (cleanV_for_check && seenOnCurrentPage.has(cleanV_for_check)) ||
              (language === 'ar' && seenOnCurrentPage.has(normWord));
            
            const vocab = !isAlreadyHighlighted ? page.vocabulary?.find(v => {
              const vWord = v.word.toLowerCase().trim();
              const cleanV = vWord.replace(/[.,!?;:\"'“”‘’`()]/g, '');
              if (language === 'ar') {
                return normalizeArabic(cleanV) === normWord || normalizeArabic(cleanV) === normalizeArabic(normWord.replace(/^ال/, ''));
              }
              const cleanV_plural = cleanV + 's';
              const cleanV_es = cleanV + 'es';
              let cleanV_ies = cleanV;
              if (cleanV.endsWith('y')) {
                cleanV_ies = cleanV.slice(0, -1) + 'ies';
              }
              return cleanV === cleanWord || cleanV_plural === cleanWord || cleanV_es === cleanWord || cleanV_ies === cleanWord || cleanWord.startsWith(cleanV);
            }) : null;
            
            const isAnimated = !isAlreadyHighlighted && !vocab && page.animatedWords?.some(aw => {
              const awWord = aw.toLowerCase().trim();
              if (language === 'ar') {
                return normalizeArabic(awWord) === normWord || normalizeArabic(awWord) === normalizeArabic(normWord.replace(/^ال/, ''));
              }
              const awWord_plural = awWord + 's';
              const awWord_es = awWord + 'es';
              let awWord_ies = awWord;
              if (awWord.endsWith('y')) {
                awWord_ies = awWord.slice(0, -1) + 'ies';
              }
              return awWord === cleanWord || awWord_plural === cleanWord || awWord_es === cleanWord || awWord_ies === cleanWord || cleanWord.startsWith(awWord);
            });

            if (vocab || isAnimated) {
              seenOnCurrentPage.add(cleanWord);
              if (vocab) {
                const baseV = vocab.word.toLowerCase().trim().replace(/[.,!?;:\"'“”‘’`()]/g, '');
                seenOnCurrentPage.add(baseV);
              }
              if (language === 'ar') seenOnCurrentPage.add(normWord);
            }

            globalWordCounter++;

            let element: React.ReactNode = word;
            if (vocab) {
              element = (
                <VocabularyWord 
                  word={word} 
                  definition={vocab.definition} 
                  customStyle={vocabStyle}
                  collectionId={collectionId}
                />
              );
            } else if (isAnimated) {
              const definition = language === 'ar' 
                ? getArabicDefinition(cleanWord)
                : getEnglishDefinition(cleanWord);
              element = (
                <VocabularyWord 
                  word={word} 
                  definition={definition} 
                  customStyle={animatedStyle}
                  collectionId={collectionId}
                />
              );
            }

            renderedElements.push(
              <motion.span
                key={`${partIdx}-${pIdx}-${wIdx}`}
                className="inline-block rounded px-0.5"
              >
                {element}
              </motion.span>
            );
          }
        }

        return (
          <p key={`${partIdx}-${pIdx}`} className="mb-4">
            {renderedElements}
          </p>
        );
      });
    });
  };

  const isA2 = level === 'A2';

  const isAudioLocked = false;

  return (
    <div className="h-full flex flex-col relative overflow-hidden min-h-0">
      {/* Top Bar with Audio and Title Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3 sm:mb-5 shrink-0">
        <div className={cn(
          "flex flex-col min-w-0",
          isRTL ? "text-right" : ""
        )}>
          <h3 className="font-display text-xl sm:text-3xl lg:text-4xl text-wood tracking-tight uppercase leading-tight truncate">{page.title}</h3>
          <p className={cn(
            "font-serif text-xs sm:text-base lg:text-lg mt-0.5",
            language !== 'ar' && "italic",
            collectionId === 'history' 
              ? "text-teal-600" 
              : collectionId === 'turkish' 
              ? "text-cyan-600" 
              : isA2 ? "text-amber-600" : "text-gold"
          )}>
            {t('nav.chapter')} {formatNumber(page.id)}
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          {page.audioUrl && (
            <div 
              dir="ltr"
              className={cn(
                "flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border backdrop-blur-md shadow-md transition-all w-full sm:w-auto justify-between sm:justify-start",
                collectionId === 'history'
                  ? "bg-emerald-50/85 border-emerald-200 shadow-emerald-100/10"
                  : collectionId === 'turkish'
                  ? "bg-sky-50/85 border-sky-250 shadow-sky-100/10"
                  : isA2 
                    ? "bg-amber-50/80 border-amber-200" 
                    : "bg-white/80 border-gold/20"
              )}
            >
              <audio 
                ref={audioRef} 
                src={page.audioUrl} 
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              />
              
              <button
                onClick={isAudioLocked ? undefined : toggleAudio}
                disabled={isAudioLocked}
                className={cn(
                  "w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all shadow-md shrink-0",
                  isAudioLocked
                    ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                    : collectionId === 'history'
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : collectionId === 'turkish'
                    ? "bg-sky-700 text-white hover:bg-sky-850"
                    : isA2 ? "bg-amber-600 text-white hover:bg-amber-700" : "bg-gold text-white hover:bg-gold/80"
                )}
              >
                {isAudioLocked ? <Lock size={16} /> : (isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />)}
              </button>

              <div className="flex flex-col flex-1 sm:w-36 md:w-44 gap-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  disabled={isAudioLocked}
                  className={cn(
                    "w-full h-1.5 rounded-lg appearance-none cursor-pointer accent-current",
                    isAudioLocked 
                      ? "opacity-30 cursor-not-allowed" 
                      : collectionId === 'history'
                      ? "text-teal-600 bg-teal-200"
                      : collectionId === 'turkish'
                      ? "text-sky-600 bg-sky-200"
                      : isA2 ? "text-amber-600 bg-amber-200" : "text-gold bg-gold/20"
                  )}
                />
                <div className="flex justify-between text-[10px] font-mono opacity-60">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 group/vol">
                <button 
                  onClick={isAudioLocked ? undefined : toggleMute}
                  disabled={isAudioLocked}
                  className={cn(
                    "p-2 rounded-full transition-colors shrink-0",
                    isAudioLocked 
                      ? "opacity-30 cursor-not-allowed" 
                      : collectionId === 'history'
                      ? "hover:bg-teal-100 text-teal-600"
                      : collectionId === 'turkish'
                      ? "hover:bg-sky-100 text-sky-600"
                      : isA2 ? "hover:bg-amber-200/50 text-amber-600" : "hover:bg-gold/10 text-gold"
                  )}
                >
                  {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <div className="w-0 overflow-hidden group-hover/vol:w-24 transition-all duration-300 flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    disabled={isAudioLocked}
                    className={cn(
                      "w-20 h-1.5 rounded-lg appearance-none cursor-pointer accent-current",
                      isAudioLocked 
                        ? "opacity-30 cursor-not-allowed" 
                        : collectionId === 'history'
                        ? "text-teal-600 bg-teal-200"
                        : collectionId === 'turkish'
                        ? "text-sky-600 bg-sky-200"
                        : isA2 ? "text-amber-600 bg-amber-200" : "text-gold bg-gold/20"
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={isAudioLocked ? undefined : handleSpeedChange}
                  disabled={isAudioLocked}
                  className={cn(
                    "px-2 py-0.5 text-xs font-bold rounded-lg transition-colors shrink-0",
                    isAudioLocked 
                      ? "opacity-30 cursor-not-allowed bg-gray-200 text-gray-500" 
                      : collectionId === 'history'
                      ? "bg-teal-100 text-teal-700 hover:bg-teal-200"
                      : collectionId === 'turkish'
                      ? "bg-sky-100 text-sky-700 hover:bg-sky-200"
                      : isA2 
                        ? "bg-amber-100/80 text-amber-700 hover:bg-amber-200" 
                        : "bg-gold/10 text-gold hover:bg-gold/30"
                  )}
                >
                  {speed}x
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dynamic responsive layout container */}
      <div className="flex-1 min-h-0 overflow-hidden">
        {/* Mobile View: Vertical scrolling stack */}
        <div className="block lg:hidden h-full overflow-y-auto custom-scrollbar pr-2 space-y-6">
          {page.image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group perspective-1000 w-full max-w-lg mx-auto"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY }}
            >
              <div className="relative aspect-[4/5] w-full rounded-[1.5rem] shadow-xl overflow-hidden">
                <motion.img 
                  src={page.image} 
                  alt={page.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                  style={{ x: imageX, y: imageY, scale: 1.1 }}
                />
                
                <div className="absolute inset-0 p-4 pointer-events-none">
                  <div className="relative w-full h-full">
                     {page.hotspots?.map((hotspot) => (
                      <HotspotButton 
                        key={hotspot.id} 
                        hotspot={hotspot} 
                        isActive={activeHotspot?.id === hotspot.id}
                        onToggle={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                        collectionId={collectionId}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-wood/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          )}

          {/* Text Content */}
          <div 
            className={cn(
              "font-serif leading-relaxed text-wood/90",
              isDyslexic ? "font-sans tracking-wide" : "",
              isRTL && "text-right"
            )}
            style={getResponsiveStoryFontStyle(fontSize, isRTL, isDyslexic)}
          >
            {renderContent(page.content)}
          </div>

          {/* Mobile Quick Challenge */}
          {page.exercises && page.exercises.length > 0 && (
            <div className={cn(
              "pt-6 border-t",
              collectionId === 'history' ? "border-emerald-100" : collectionId === 'turkish' ? "border-sky-100" : "border-amber-100"
            )}>
              <div className={cn(
                "flex flex-col items-center p-6 rounded-3xl border shadow-sm gap-4 text-center",
                collectionId === 'history' 
                  ? "bg-emerald-50/40 border-emerald-105" 
                  : collectionId === 'turkish' 
                  ? "bg-sky-50/45 border-sky-105" 
                  : "bg-amber-50/50 border-amber-100"
              )}>
                <div className="flex flex-col items-center gap-3">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shadow-inner shrink-0",
                    collectionId === 'history' ? "bg-emerald-100 text-emerald-600" : collectionId === 'turkish' ? "bg-sky-150 text-sky-600" : "bg-amber-100 text-amber-600"
                  )}>
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className={cn(
                      "font-black text-xl",
                      collectionId === 'history' ? "text-[#064E3B]" : collectionId === 'turkish' ? "text-sky-950" : "text-amber-900"
                    )}>
                      {t('nav.quickChallenge')}
                    </h4>
                    <p className={cn(
                      "text-sm font-medium",
                      collectionId === 'history' ? "text-emerald-900/50" : collectionId === 'turkish' ? "text-sky-950/50" : "text-amber-900/50"
                    )}>
                      {t('nav.testUnderstanding')}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveExercise(page.exercises![0])}
                  className={cn(
                    "w-full px-6 py-3.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-95 shrink-0 cursor-pointer",
                    completedExercises.includes(page.exercises[0].id)
                      ? "bg-green-500 text-white"
                      : collectionId === 'history'
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : collectionId === 'turkish'
                      ? "bg-sky-700 text-white hover:bg-sky-800"
                      : "bg-amber-600 text-white hover:bg-amber-700"
                  )}
                >
                  {completedExercises.includes(page.exercises[0].id) ? t('nav.completed') : t('nav.startExercise')}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop View: Grid layout with Quick Challenge spanning both columns at bottom */}
        <div className="hidden lg:flex lg:flex-col h-full min-h-0 overflow-y-auto custom-scrollbar pr-2 pb-4">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left side: Image */}
            <div className="col-span-5">
              {page.image && (
                <motion.div 
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative group perspective-1000 w-full"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ rotateX, rotateY }}
                >
                  <div className="relative aspect-[4/5] w-full rounded-[1.25rem] shadow-xl overflow-hidden border border-gold/15">
                    <motion.img 
                      src={page.image} 
                      alt={page.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      referrerPolicy="no-referrer"
                      style={{ x: imageX, y: imageY, scale: 1.1 }}
                    />
                    
                    <div className="absolute inset-0 p-4 pointer-events-none">
                      <div className="relative w-full h-full">
                         {page.hotspots?.map((hotspot) => (
                          <HotspotButton 
                            key={hotspot.id} 
                            hotspot={hotspot} 
                            isActive={activeHotspot?.id === hotspot.id}
                            onToggle={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
                            collectionId={collectionId}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-wood/40 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right side: Story text scrolling content */}
            <div className="col-span-7">
              <div 
                className={cn(
                  "font-serif leading-relaxed text-wood/90",
                  isDyslexic ? "font-sans tracking-wide" : "",
                  isRTL && "text-right"
                )}
                style={getResponsiveStoryFontStyle(fontSize, isRTL, isDyslexic)}
              >
                {renderContent(page.content)}
              </div>
            </div>
          </div>

          {/* Quick Challenge spanning across full width / both columns at the bottom */}
          {page.exercises && page.exercises.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full mt-6 pt-6 border-t border-gold/15 shrink-0"
            >
              <div className={cn(
                "flex items-center justify-between p-5 rounded-2xl border shadow-sm gap-4",
                collectionId === 'history' 
                  ? "bg-emerald-50/40 border-emerald-105" 
                  : collectionId === 'turkish' 
                  ? "bg-sky-50/45 border-sky-105" 
                  : "bg-amber-50/50 border-amber-100"
              )}>
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shadow-inner shrink-0",
                    collectionId === 'history' ? "bg-emerald-100 text-emerald-600" : collectionId === 'turkish' ? "bg-sky-150 text-sky-600" : "bg-amber-100 text-amber-600"
                  )}>
                    <Rocket size={24} />
                  </div>
                  <div>
                    <h4 className={cn(
                      "font-black text-lg sm:text-xl",
                      collectionId === 'history' ? "text-[#064E3B]" : collectionId === 'turkish' ? "text-sky-950" : "text-amber-900"
                    )}>
                      {t('nav.quickChallenge')}
                    </h4>
                    <p className={cn(
                      "text-xs sm:text-sm font-medium",
                      collectionId === 'history' ? "text-emerald-900/50" : collectionId === 'turkish' ? "text-sky-950/50" : "text-amber-900/50"
                    )}>
                      {t('nav.testUnderstanding')}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveExercise(page.exercises![0])}
                  className={cn(
                    "px-6 py-3 rounded-xl font-bold text-base transition-all shadow-md active:scale-95 shrink-0 min-w-[160px] cursor-pointer",
                    completedExercises.includes(page.exercises[0].id)
                      ? "bg-green-500 text-white"
                      : collectionId === 'history'
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : collectionId === 'turkish'
                      ? "bg-sky-700 text-white hover:bg-sky-800"
                      : "bg-amber-600 text-white hover:bg-amber-700"
                  )}
                >
                  {completedExercises.includes(page.exercises[0].id) ? t('nav.completed') : t('nav.startExercise')}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {activeExercise && (
          <ExerciseModule
            exercise={activeExercise}
            onComplete={() => {
              setCompletedExercises(prev => [...prev, activeExercise.id]);
              trackExerciseComplete(activeExercise.id);
              setActiveExercise(null);
            }}
            onClose={() => setActiveExercise(null)}
            collectionId={collectionId}
          />
        )}
      </AnimatePresence>
    </div>
  );
};