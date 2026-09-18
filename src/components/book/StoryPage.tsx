import React, { useRef, useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Info, Rocket, Book as BookIcon, Lock, ArrowLeftRight, ArrowRight, CheckCircle2 } from '../ui/icons';
import { PageData, Hotspot, Exercise } from '../../types';
import { VocabularyWord } from '../ui/VocabularyWord';
import { ExerciseModule } from '../ExerciseModule';
import { cn } from '../../lib/utils';
import { highlightPhraseMatches, highlightTokenMatches, normalizeHighlightText } from '../../lib/highlightTextMatch';
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
  const [coords, setCoords] = useState({
    top: 12,
    left: 12,
    arrowOffset: 24,
    isAbove: true,
  });

  const updateCoords = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
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

  useEffect(() => {
    if (!isActive) return;

    updateCoords();
    const frame = window.requestAnimationFrame(updateCoords);
    const timer = window.setTimeout(updateCoords, 40);
    window.addEventListener('resize', updateCoords);
    window.addEventListener('scroll', updateCoords, true);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener('resize', updateCoords);
      window.removeEventListener('scroll', updateCoords, true);
    };
  }, [isActive]);

  return (
    <div
      className="absolute pointer-events-auto"
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
    >
      <button
        ref={buttonRef}
        onClick={onToggle}
        className="relative group/hotspot"
        aria-expanded={isActive}
        aria-label={hotspot.title}
      >
        <motion.div
          animate={{ scale: [1, 1.16, 1] }}
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
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.14, ease: 'easeOut' }}
                  style={{
                    position: 'fixed',
                    top: coords.top,
                    left: coords.left,
                    zIndex: 99999,
                    pointerEvents: 'auto',
                  }}
                  className={cn(
                    "w-[calc(100vw-1.5rem)] max-w-[22rem] max-h-[calc(100vh-1.5rem)] overflow-y-auto overscroll-contain",
                    language === 'ar' ? "p-4 sm:p-6" : "p-3.5 sm:p-5",
                    "bg-wood/95 backdrop-blur-md rounded-2xl shadow-2xl border",
                    collectionId === 'history' ? "border-emerald-500/40" : collectionId === 'turkish' ? "border-cyan-400/40" : "border-gold/30"
                  )}
                  dir={language === 'ar' ? 'rtl' : 'ltr'}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h4 className={cn(
                    "font-display mb-2",
                    collectionId === 'history' ? "text-emerald-400" : collectionId === 'turkish' ? "text-cyan-400" : "text-gold",
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
  fontSize,
  renderTranslation,
  compact = false,
  inGrid = false,
}: { 
  english: string; 
  turkish?: string; 
  fontSize: number;
  renderTranslation?: (line: string, lineIndex: number) => React.ReactNode;
  compact?: boolean;
  inGrid?: boolean;
}) => {
  const { isRTL } = useLanguage();
  const [showOriginal, setShowOriginal] = useState(false);
  const hasOriginal = Boolean(turkish?.trim());

  const poemFontSize = compact
    ? `clamp(0.82rem, 0.74rem + 0.42vw, ${(fontSize * 1.08 * 1.3333).toFixed(1)}px)`
    : `clamp(0.95rem, 0.8rem + 0.6vw, ${(fontSize * 1.25 * 1.3333).toFixed(1)}px)`;

  const renderPoemLines = (
    text: string,
    useHighlights: boolean,
  ) => text.split('\n').map((line, idx) => (
    <div key={idx} className="my-1">
      {useHighlights && renderTranslation ? renderTranslation(line.trim(), idx) : line.trim()}
    </div>
  ));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => hasOriginal && setShowOriginal(current => !current)}
      className={cn(
        "w-auto p-4 md:py-4 rounded-2xl bg-parchment/45 border border-sky-300/60 border-l-4 border-r-4 border-sky-400 shadow-md relative overflow-hidden flex flex-col items-center justify-center text-center page-texture transition-all hover:shadow-lg hover:bg-parchment/55 hover:border-sky-500 select-none",
        inGrid ? "my-0 h-full min-h-[180px]" : "my-6",
        hasOriginal ? "md:ps-10 md:pe-16 cursor-pointer" : "md:px-10"
      )}
    >
      <div className="grid w-full place-items-center">
        <motion.div
          aria-hidden={showOriginal}
          animate={{ opacity: showOriginal ? 0 : 1, scale: showOriginal ? 0.985 : 1 }}
          transition={{ duration: 0.15 }}
          dir={isRTL ? 'rtl' : 'ltr'}
          lang={isRTL ? 'ar' : 'en'}
          className={cn(
            "col-start-1 row-start-1 py-3 select-text selection:bg-gold/20 leading-relaxed font-semibold italic",
            showOriginal && "pointer-events-none"
          )}
          style={{
            fontSize: poemFontSize,
            fontFamily: isRTL ? "'Arakom', sans-serif" : "'Poppins', sans-serif",
          }}
        >
          {renderPoemLines(english, true)}
        </motion.div>

        {hasOriginal && (
          <motion.div
            aria-hidden={!showOriginal}
            animate={{ opacity: showOriginal ? 1 : 0, scale: showOriginal ? 1 : 0.985 }}
            transition={{ duration: 0.15 }}
            dir="ltr"
            lang="tr"
            className={cn(
              "col-start-1 row-start-1 py-3 select-text selection:bg-gold/20 leading-relaxed font-semibold italic",
              !showOriginal && "pointer-events-none"
            )}
            style={{
              fontSize: poemFontSize,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {renderPoemLines(turkish!, false)}
          </motion.div>
        )}
      </div>

      {hasOriginal && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setShowOriginal(current => !current);
          }}
          aria-label={showOriginal ? 'Show translation' : 'Show original Turkish'}
          className="absolute end-4 md:end-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-600 transition-colors shadow-sm border border-sky-100 flex items-center justify-center"
        >
          <ArrowLeftRight size={16} />
        </button>
      )}
    </motion.div>
  );
};

const normalizePoemLabel = (line: string) =>
  line
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .trim()
    .toLowerCase();

const cleanPoemText = (lines: string[]) => {
  const text = lines
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !/^\/\/\s*c\d+[ab]?$/i.test(line))
    .join('\n')
    .trim();

  return text
    .replace(/^[“"«]\s*/, '')
    .replace(/\s*[”"»](?=\s*[.!?،؛]?\s*$)/, '')
    .trim();
};

const parsePoem = (part: string) => {
  const body = part
    .replace(/^\[POEM(?:\s+compact)?\]\s*/i, '')
    .replace(/\s*\[\/POEM\]$/i, '')
    .trim();
  const lines = body.split('\n');
  const translationLabelIndex = lines.findIndex((line) => {
    const label = normalizePoemLabel(line);
    return label === 'english:' || label === 'arabic:' || label === 'العربية:';
  });
  const turkishLabelIndex = lines.findIndex((line) => {
    const label = normalizePoemLabel(line);
    return label === 'turkish:' || label === 'التركية:';
  });

  if (turkishLabelIndex >= 0) {
    const translationStart = translationLabelIndex >= 0 ? translationLabelIndex + 1 : 0;
    return {
      translation: cleanPoemText(lines.slice(translationStart, turkishLabelIndex)),
      original: cleanPoemText(lines.slice(turkishLabelIndex + 1)),
    };
  }

  const translationStart = translationLabelIndex >= 0 ? translationLabelIndex + 1 : 0;
  return {
    translation: cleanPoemText(lines.slice(translationStart)),
    original: undefined,
  };
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
  const [audioMenu, setAudioMenu] = useState<'volume' | 'speed' | null>(null);
  const audioControlsRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null);
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const isArabic = language === 'ar';
  const highlightLanguage = isArabic ? 'ar' : 'en';

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
        prevPage.animatedWords.forEach(word => seen.add(word));
      }
      if (prevPage.vocabulary) {
        prevPage.vocabulary.forEach(v => seen.add(v.word));
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
      if (highlightPhraseMatches(text, k, 'ar')) {
        return v;
      }
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
      if (highlightPhraseMatches(text, k, 'ar')) {
        return v;
      }
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

  const setPlaybackSpeed = (newSpeed: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
    setSpeed(newSpeed);
    setAudioMenu(null);
  };

  useEffect(() => {
    const closeAudioMenus = (event: PointerEvent) => {
      if (!audioControlsRef.current?.contains(event.target as Node)) {
        setAudioMenu(null);
      }
    };

    document.addEventListener('pointerdown', closeAudioMenus);
    return () => document.removeEventListener('pointerdown', closeAudioMenus);
  }, []);

  useEffect(() => {
    setAudioMenu(null);
  }, [page.id]);

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
  void chunksWithIndices;

  const renderContent = (content: string) => {
    const parts = content.split(/(\[POEM_GRID\][\s\S]*?\[\/POEM_GRID\]|\[POEM(?:\s+compact)?\][\s\S]*?\[\/POEM\])/g);
    const highlightWordCount = (value: string) => {
      const normalized = normalizeHighlightText(value, highlightLanguage);
      return normalized ? normalized.split(' ').length : 0;
    };
    const maxPhraseWords = Math.max(
      1,
      ...(page.vocabulary ?? []).map(v => highlightWordCount(v.word)),
      ...(page.animatedWords ?? []).map(highlightWordCount),
    );
    const hasAlreadyBeenHighlighted = (requested: string, seen: Set<string>) => {
      const normalizedRequested = normalizeHighlightText(requested, highlightLanguage);
      return [...seen].some(previous => (
        normalizeHighlightText(previous, highlightLanguage) === normalizedRequested
      ));
    };
    
    let globalWordCounter = 0;
    const seenOnCurrentPage = new Set<string>();

    const renderInlineHighlights = (text: string, keyPrefix: string): React.ReactNode[] => {
      const words = text.split(/(\s+)/);
      const rendered: React.ReactNode[] = [];
      let skipCount = 0;

      for (let wIdx = 0; wIdx < words.length; wIdx += 1) {
        if (skipCount > 0) {
          skipCount -= 1;
          continue;
        }

        const word = words[wIdx];
        if (/\s+/.test(word)) {
          rendered.push(word);
          continue;
        }

        let foundPhrase: { vocab?: { word: string; definition: string }; animatedWord?: string; endIdx: number; text: string } | null = null;
        const potentialPhrases: { text: string; endIdx: number }[] = [];
        let currentPotential = word;
        let wordsInPotential = 1;

        for (let lookAhead = 1; wIdx + lookAhead < words.length && wordsInPotential < maxPhraseWords; lookAhead += 1) {
          const nextPart = words[wIdx + lookAhead];
          currentPotential += nextPart;
          if (!/\s+/.test(nextPart)) {
            wordsInPotential += 1;
            potentialPhrases.push({ text: currentPotential, endIdx: wIdx + lookAhead });
          }
        }

        for (let i = potentialPhrases.length - 1; i >= 0; i -= 1) {
          const candidate = potentialPhrases[i];
          const vocab = page.vocabulary?.find(v => (
            highlightWordCount(v.word) > 1
            && !hasAlreadyBeenHighlighted(v.word, seenHighlightedWords)
            && !hasAlreadyBeenHighlighted(v.word, seenOnCurrentPage)
            && highlightPhraseMatches(candidate.text, v.word, highlightLanguage)
          ));
          const animatedWord = !vocab ? page.animatedWords?.find(aw => (
            highlightWordCount(aw) > 1
            && !hasAlreadyBeenHighlighted(aw, seenHighlightedWords)
            && !hasAlreadyBeenHighlighted(aw, seenOnCurrentPage)
            && highlightPhraseMatches(candidate.text, aw, highlightLanguage)
          )) : undefined;

          if (vocab || animatedWord) {
            foundPhrase = { vocab, animatedWord, endIdx: candidate.endIdx, text: candidate.text };
            break;
          }
        }

        if (foundPhrase) {
          const canonicalWord = foundPhrase.vocab?.word ?? foundPhrase.animatedWord ?? foundPhrase.text;
          seenOnCurrentPage.add(canonicalWord);
          skipCount = foundPhrase.endIdx - wIdx;
          const element = foundPhrase.vocab ? (
            <VocabularyWord
              word={foundPhrase.text}
              definition={foundPhrase.vocab.definition}
              customStyle={vocabStyle}
              collectionId={collectionId}
            />
          ) : (
            <VocabularyWord
              word={foundPhrase.text}
              definition={language === 'ar' ? getArabicDefinition(canonicalWord) : getEnglishDefinition(canonicalWord)}
              customStyle={animatedStyle}
              collectionId={collectionId}
            />
          );
          rendered.push(<span key={`${keyPrefix}-${wIdx}`}>{element}</span>);
          continue;
        }

        const vocab = page.vocabulary?.find(v => (
          highlightWordCount(v.word) === 1
          && !hasAlreadyBeenHighlighted(v.word, seenHighlightedWords)
          && !hasAlreadyBeenHighlighted(v.word, seenOnCurrentPage)
          && highlightTokenMatches(word, v.word, highlightLanguage)
        ));
        const animatedWord = !vocab ? page.animatedWords?.find(aw => (
          highlightWordCount(aw) === 1
          && !hasAlreadyBeenHighlighted(aw, seenHighlightedWords)
          && !hasAlreadyBeenHighlighted(aw, seenOnCurrentPage)
          && highlightTokenMatches(word, aw, highlightLanguage)
        )) : undefined;

        const canonicalWord = vocab?.word ?? animatedWord;
        if (canonicalWord) seenOnCurrentPage.add(canonicalWord);

        const element = vocab ? (
          <VocabularyWord
            word={word}
            definition={vocab.definition}
            customStyle={vocabStyle}
            collectionId={collectionId}
          />
        ) : animatedWord ? (
          <VocabularyWord
            word={word}
            definition={language === 'ar' ? getArabicDefinition(animatedWord) : getEnglishDefinition(animatedWord)}
            customStyle={animatedStyle}
            collectionId={collectionId}
          />
        ) : word;

        rendered.push(<span key={`${keyPrefix}-${wIdx}`}>{element}</span>);
      }

      return rendered;
    };

    return parts.map((part, partIdx) => {
      if (part.startsWith('[POEM_GRID]') && part.endsWith('[/POEM_GRID]')) {
        const poemParts = [...part.matchAll(/\[POEM(?:\s+compact)?\][\s\S]*?\[\/POEM\]/gi)].map(match => match[0]);
        if (poemParts.length > 0) {
          return (
            <div key={`poem-grid-${partIdx}`} className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {poemParts.map((poemPart, poemIndex) => {
                const poem = parsePoem(poemPart);
                if (!poem.translation) return null;
                return (
                  <PoemBlock
                    key={`poem-grid-${partIdx}-${poemIndex}`}
                    english={poem.translation}
                    turkish={poem.original}
                    fontSize={fontSize}
                    compact
                    inGrid
                    renderTranslation={(line, lineIndex) => renderInlineHighlights(line, `poem-grid-${partIdx}-${poemIndex}-${lineIndex}`)}
                  />
                );
              })}
            </div>
          );
        }
      }

      if (/^\[POEM(?:\s+compact)?\]/i.test(part) && part.endsWith('[/POEM]')) {
        const poem = parsePoem(part);
        if (poem.translation) {
          const compact = /^\[POEM\s+compact\]/i.test(part);
          return (
            <PoemBlock 
              key={`poem-${partIdx}`} 
              english={poem.translation} 
              turkish={poem.original} 
              fontSize={fontSize}
              compact={compact}
              renderTranslation={(line, lineIndex) => renderInlineHighlights(line, `poem-${partIdx}-${lineIndex}`)}
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

          let foundPhrase = null;
          const potentialPhrases: { text: string; endIdx: number }[] = [];
          let currentPotential = word;
          let wordsInPotential = 1;
          
          // Look ahead as far as the longest configured vocabulary/animated phrase.
          for (let lookAhead = 1; wIdx + lookAhead < words.length && wordsInPotential < maxPhraseWords; lookAhead++) {
            const nextPart = words[wIdx + lookAhead];
            currentPotential += nextPart;
            if (!/\s+/.test(nextPart)) {
              wordsInPotential += 1;
              potentialPhrases.push({ text: currentPotential, endIdx: wIdx + lookAhead });
            }
          }

          // Check longest phrases first.
          for (let i = potentialPhrases.length - 1; i >= 0; i--) {
            const p = potentialPhrases[i];
            const vocab = page.vocabulary?.find(v => (
              highlightWordCount(v.word) > 1
              && !hasAlreadyBeenHighlighted(v.word, seenHighlightedWords)
              && !hasAlreadyBeenHighlighted(v.word, seenOnCurrentPage)
              && highlightPhraseMatches(p.text, v.word, highlightLanguage)
            ));

            const animatedWord = !vocab ? page.animatedWords?.find(aw => (
              highlightWordCount(aw) > 1
              && !hasAlreadyBeenHighlighted(aw, seenHighlightedWords)
              && !hasAlreadyBeenHighlighted(aw, seenOnCurrentPage)
              && highlightPhraseMatches(p.text, aw, highlightLanguage)
            )) : undefined;

            if (vocab || animatedWord) {
              foundPhrase = { vocab, animatedWord, endIdx: p.endIdx, text: p.text };
              break;
            }
          }

          const currentGlobalIdx = globalWordCounter;
          void currentGlobalIdx;

          if (foundPhrase) {
            const wordsInPhrase = foundPhrase.text.split(/\s+/).filter(w => w.length > 0).length;
            const canonicalWord = foundPhrase.vocab?.word ?? foundPhrase.animatedWord ?? foundPhrase.text;
            seenOnCurrentPage.add(canonicalWord);
            
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
              const definitionSource = foundPhrase.animatedWord ?? foundPhrase.text;
              const definition = language === 'ar' 
                ? getArabicDefinition(definitionSource)
                : getEnglishDefinition(definitionSource);
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
            const vocab = page.vocabulary?.find(v => (
              highlightWordCount(v.word) === 1
              && !hasAlreadyBeenHighlighted(v.word, seenHighlightedWords)
              && !hasAlreadyBeenHighlighted(v.word, seenOnCurrentPage)
              && highlightTokenMatches(word, v.word, highlightLanguage)
            ));
            
            const animatedWord = !vocab ? page.animatedWords?.find(aw => (
              highlightWordCount(aw) === 1
              && !hasAlreadyBeenHighlighted(aw, seenHighlightedWords)
              && !hasAlreadyBeenHighlighted(aw, seenOnCurrentPage)
              && highlightTokenMatches(word, aw, highlightLanguage)
            )) : undefined;

            const canonicalWord = vocab?.word ?? animatedWord;
            if (canonicalWord) {
              seenOnCurrentPage.add(canonicalWord);
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
            } else if (animatedWord) {
              const definition = language === 'ar' 
                ? getArabicDefinition(animatedWord)
                : getEnglishDefinition(animatedWord);
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

  const renderQuickChallengePanel = () => {
    const exercise = page.exercises?.[0];
    if (!exercise) return null;

    const completed = completedExercises.includes(exercise.id);
    const quickTheme = collectionId === 'history'
      ? {
          container: 'bg-gradient-to-br from-emerald-50/95 via-white/90 to-emerald-50/65 ring-emerald-200/70',
          rail: 'bg-emerald-500',
          icon: 'bg-emerald-700 text-white shadow-emerald-900/10',
          title: 'text-emerald-950',
          copy: 'text-emerald-950/58',
          button: 'bg-emerald-700 hover:bg-emerald-800 focus-visible:ring-emerald-500',
          glow: 'bg-emerald-300/20',
        }
      : collectionId === 'turkish'
      ? {
          container: 'bg-gradient-to-br from-sky-50/95 via-white/90 to-cyan-50/65 ring-cyan-200/70',
          rail: 'bg-cyan-500',
          icon: 'bg-sky-700 text-white shadow-sky-900/10',
          title: 'text-sky-950',
          copy: 'text-sky-950/58',
          button: 'bg-sky-700 hover:bg-sky-800 focus-visible:ring-sky-500',
          glow: 'bg-cyan-300/20',
        }
      : {
          container: 'bg-gradient-to-br from-amber-50/95 via-white/90 to-orange-50/55 ring-amber-200/70',
          rail: 'bg-amber-500',
          icon: 'bg-amber-700 text-white shadow-amber-900/10',
          title: 'text-amber-950',
          copy: 'text-amber-950/58',
          button: 'bg-amber-700 hover:bg-amber-800 focus-visible:ring-amber-500',
          glow: 'bg-amber-300/20',
        };

    return (
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full shrink-0 mt-6"
        aria-label={t('nav.quickChallenge')}
      >
        <div className={cn(
          'relative overflow-hidden rounded-[26px] ring-1 shadow-[0_16px_42px_rgba(63,49,28,0.08)]',
          quickTheme.container
        )}>
          <div className={cn('absolute inset-y-0 start-0 w-1.5', quickTheme.rail)} aria-hidden="true" />
          <div className={cn('pointer-events-none absolute -end-10 -top-12 h-36 w-36 rounded-full blur-3xl', quickTheme.glow)} aria-hidden="true" />

          <div className="relative flex flex-col gap-5 p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex min-w-0 items-start gap-4 text-start">
              <div className={cn(
                'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg',
                quickTheme.icon
              )}>
                {completed ? <CheckCircle2 size={23} /> : <Rocket size={22} />}
              </div>

              <div className="min-w-0 pt-0.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h4 className={cn(
                    'font-display text-xl font-semibold tracking-[-0.025em] sm:text-2xl',
                    quickTheme.title
                  )}>
                    {t('nav.quickChallenge')}
                  </h4>
                  {completed && (
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 font-display text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                      {t('nav.completed')}
                    </span>
                  )}
                </div>
                <p className={cn(
                  'mt-1.5 max-w-2xl font-serif leading-relaxed',
                  isArabic ? 'text-base' : 'text-sm',
                  quickTheme.copy
                )}>
                  {t('nav.testUnderstanding')}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveExercise(exercise)}
              className={cn(
                'group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-2xl px-5 font-display text-[12px] font-semibold text-white shadow-lg transition-all active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:min-h-14 md:w-auto md:min-w-[205px] md:px-7 md:text-[13px]',
                quickTheme.button
              )}
            >
              {completed ? t('nav.completed') : t('nav.startExercise')}
              {!completed && (
                <ArrowRight
                  size={16}
                  className={cn('transition-transform group-hover:translate-x-0.5', isRTL && 'rotate-180 group-hover:-translate-x-0.5')}
                />
              )}
            </button>
          </div>
        </div>
      </motion.section>
    );
  };

  const renderLanguageFocusPanel = (mobile = false) => {
    const exercises = page.languageFocusExercises ?? [];
    if (!exercises.length) return null;

    const completedCount = exercises.filter(exercise => completedExercises.includes(exercise.id)).length;
    const focusTheme = collectionId === 'history'
      ? {
          container: 'bg-gradient-to-br from-emerald-50/92 via-white/94 to-teal-50/72 ring-emerald-200/65',
          icon: 'bg-emerald-800 text-white',
          accent: 'text-emerald-800',
          title: 'text-emerald-950',
          copy: 'text-emerald-950/58',
          card: 'bg-white/82 hover:bg-white ring-emerald-100/80 hover:ring-emerald-300/90',
          number: 'bg-emerald-100 text-emerald-800',
          glow: 'bg-emerald-300/18',
          progress: 'bg-emerald-600',
          arrow: 'text-emerald-700',
        }
      : collectionId === 'turkish'
      ? {
          container: 'bg-gradient-to-br from-sky-50/92 via-white/94 to-cyan-50/72 ring-cyan-200/65',
          icon: 'bg-sky-800 text-white',
          accent: 'text-sky-800',
          title: 'text-sky-950',
          copy: 'text-sky-950/58',
          card: 'bg-white/82 hover:bg-white ring-cyan-100/80 hover:ring-cyan-300/90',
          number: 'bg-cyan-100 text-cyan-800',
          glow: 'bg-cyan-300/18',
          progress: 'bg-sky-700',
          arrow: 'text-sky-700',
        }
      : {
          container: 'bg-gradient-to-br from-amber-50/92 via-white/94 to-orange-50/65 ring-amber-200/65',
          icon: 'bg-amber-800 text-white',
          accent: 'text-amber-800',
          title: 'text-amber-950',
          copy: 'text-amber-950/58',
          card: 'bg-white/82 hover:bg-white ring-amber-100/80 hover:ring-amber-300/90',
          number: 'bg-amber-100 text-amber-800',
          glow: 'bg-amber-300/18',
          progress: 'bg-amber-700',
          arrow: 'text-amber-700',
        };

    const typeLabel = (exercise: Exercise) => {
      const labels: Record<string, { en: string; ar: string }> = {
        matching: { en: 'Match', ar: 'مطابقة' },
        'fill-blanks': { en: 'Complete', ar: 'أكمل' },
        sequencing: { en: 'Order', ar: 'رتّب' },
        reflection: { en: 'Use', ar: 'استخدم' },
        'true-false': { en: 'Decide', ar: 'قرّر' },
        'multiple-choice': { en: 'Choose', ar: 'اختر' },
        'tap-reveal': { en: 'Explore', ar: 'استكشف' },
        'drag-drop': { en: 'Classify', ar: 'صنّف' },
      };
      return labels[exercise.type]?.[language === 'ar' ? 'ar' : 'en']
        ?? (language === 'ar' ? 'تدريب' : 'Practice');
    };

    return (
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn('w-full shrink-0', mobile ? 'mt-1' : 'mt-4')}
        aria-label={language === 'ar' ? 'التركيز اللغوي' : 'Language Focus'}
      >
        <div className={cn(
          'relative overflow-hidden rounded-[28px] ring-1 shadow-[0_18px_48px_rgba(63,49,28,0.07)]',
          focusTheme.container
        )}>
          <div className={cn('pointer-events-none absolute -end-12 -top-12 h-40 w-40 rounded-full blur-3xl', focusTheme.glow)} aria-hidden="true" />

          <div className="relative p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex min-w-0 items-start gap-4 text-start">
                <div className={cn(
                  'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-lg',
                  focusTheme.icon
                )}>
                  <BookIcon size={22} />
                </div>

                <div className="min-w-0">
                  <p className={cn(
                    'font-display text-[10px] font-semibold uppercase tracking-[0.18em]',
                    focusTheme.accent
                  )}>
                    {language === 'ar' ? 'بعد القراءة' : 'After reading'}
                  </p>
                  <h4 className={cn(
                    'mt-1 font-display text-xl font-semibold tracking-[-0.025em] sm:text-2xl',
                    focusTheme.title
                  )}>
                    {language === 'ar' ? 'التركيز اللغوي' : 'Language Focus'}
                  </h4>
                  <p className={cn(
                    'mt-1.5 font-serif leading-relaxed',
                    isArabic ? 'text-base' : 'text-sm',
                    focusTheme.copy
                  )}>
                    {language === 'ar' ? 'لاحظها. اربطها. استخدمها.' : 'Notice it. Connect it. Use it.'}
                  </p>
                </div>
              </div>

              <div className="min-w-[150px] sm:text-end">
                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <span className={cn('font-display text-[10px] font-semibold uppercase tracking-[0.14em]', focusTheme.copy)}>
                    {language === 'ar' ? 'التقدّم' : 'Progress'}
                  </span>
                  <span className={cn('font-display text-[11px] font-semibold', focusTheme.accent)}>
                    {formatNumber(completedCount)} / {formatNumber(exercises.length)}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-black/[0.06] sm:w-36">
                  <motion.div
                    initial={false}
                    animate={{ width: `${exercises.length ? (completedCount / exercises.length) * 100 : 0}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={cn('h-full rounded-full', focusTheme.progress)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {exercises.map((exercise, index) => {
                const completed = completedExercises.includes(exercise.id);

                return (
                  <motion.button
                    key={exercise.id}
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setActiveExercise(exercise)}
                    className={cn(
                      'group relative min-h-[148px] overflow-hidden rounded-2xl p-4 text-start ring-1 transition-all shadow-[0_8px_24px_rgba(63,49,28,0.05)]',
                      focusTheme.card
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={cn(
                        'flex h-8 min-w-8 items-center justify-center rounded-xl px-2 font-display text-[10px] font-semibold',
                        completed ? 'bg-emerald-600 text-white' : focusTheme.number
                      )}>
                        {completed ? '✓' : String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={cn(
                        'font-display text-[9px] font-semibold uppercase tracking-[0.15em]',
                        completed ? 'text-emerald-700' : focusTheme.accent
                      )}>
                        {completed ? t('nav.completed') : typeLabel(exercise)}
                      </span>
                    </div>

                    <h5 className={cn(
                      'mt-4 font-display font-semibold leading-[1.18] tracking-[-0.02em]',
                      isArabic ? 'text-lg' : 'text-[15px] sm:text-base',
                      focusTheme.title
                    )}>
                      {exercise.title}
                    </h5>

                    {exercise.instructions && (
                      <p className={cn(
                        'mt-2 line-clamp-2 font-serif leading-relaxed',
                        isArabic ? 'text-sm sm:text-base' : 'text-[11px] sm:text-xs',
                        focusTheme.copy
                      )}>
                        {exercise.instructions}
                      </p>
                    )}

                    <ArrowRight
                      size={16}
                      className={cn(
                        'absolute bottom-4 end-4 opacity-38 transition-all group-hover:translate-x-0.5 group-hover:opacity-90',
                        isRTL && 'rotate-180 group-hover:-translate-x-0.5',
                        focusTheme.arrow
                      )}
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    );
  };

  return (
    <div className="h-full flex flex-col relative overflow-hidden min-h-0">
      {/* Top Bar with Audio and Title Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3 sm:mb-5 shrink-0">
        <div className={cn(
          "flex flex-col min-w-0",
          isRTL ? "text-right" : ""
        )}>
          <h3 className="font-display text-xl sm:text-3xl lg:text-4xl text-wood font-semibold tracking-[-0.03em] leading-tight truncate">{page.title}</h3>
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
              ref={audioControlsRef}
              dir="ltr"
              className={cn(
                "relative flex w-full items-center gap-2.5 rounded-2xl border px-2.5 py-2.5 shadow-[0_10px_30px_rgba(63,49,28,0.10)] backdrop-blur-md sm:w-[430px] sm:gap-3 sm:px-3 sm:py-3 lg:w-[500px]",
                collectionId === 'history'
                  ? "bg-emerald-50/88 border-emerald-200/90"
                  : collectionId === 'turkish'
                  ? "bg-sky-50/88 border-sky-200/90"
                  : isA2
                    ? "bg-amber-50/88 border-amber-200/90"
                    : "bg-white/88 border-gold/20"
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
                type="button"
                onClick={isAudioLocked ? undefined : toggleAudio}
                disabled={isAudioLocked}
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-[0_7px_18px_rgba(63,49,28,0.16)] transition-all active:scale-[0.97] sm:h-12 sm:w-12",
                  isAudioLocked
                    ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
                    : collectionId === 'history'
                    ? "bg-teal-700 text-white hover:bg-teal-800"
                    : collectionId === 'turkish'
                    ? "bg-sky-800 text-white hover:bg-sky-900"
                    : isA2
                      ? "bg-amber-700 text-white hover:bg-amber-800"
                      : "bg-gold text-white hover:bg-gold/85"
                )}
                aria-label={isPlaying ? (language === 'ar' ? 'إيقاف مؤقت' : 'Pause audio') : (language === 'ar' ? 'تشغيل' : 'Play audio')}
              >
                {isAudioLocked
                  ? <Lock size={17} />
                  : isPlaying
                  ? <Pause size={18} />
                  : <Play size={19} className="translate-x-[1px]" />}
              </button>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span className="w-9 shrink-0 text-start font-mono text-[10px] font-semibold tabular-nums text-wood/55 sm:w-10 sm:text-[11px]">
                    {formatTime(currentTime)}
                  </span>

                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    disabled={isAudioLocked}
                    aria-label={language === 'ar' ? 'تقدّم الصوت' : 'Audio progress'}
                    className={cn(
                      "h-1.5 min-w-0 flex-1 cursor-pointer appearance-none rounded-full accent-current",
                      isAudioLocked
                        ? "cursor-not-allowed opacity-30"
                        : collectionId === 'history'
                        ? "bg-teal-200 text-teal-700"
                        : collectionId === 'turkish'
                        ? "bg-sky-200 text-sky-700"
                        : isA2
                          ? "bg-amber-200 text-amber-700"
                          : "bg-gold/20 text-gold"
                    )}
                  />

                  <span className="w-9 shrink-0 text-end font-mono text-[10px] font-semibold tabular-nums text-wood/55 sm:w-10 sm:text-[11px]">
                    {formatTime(duration)}
                  </span>
                </div>
              </div>

              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setAudioMenu(current => current === 'volume' ? null : 'volume')}
                  disabled={isAudioLocked}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full transition-colors sm:h-10 sm:w-10",
                    isAudioLocked
                      ? "cursor-not-allowed opacity-30"
                      : audioMenu === 'volume'
                      ? collectionId === 'history'
                        ? "bg-teal-100 text-teal-800"
                        : collectionId === 'turkish'
                        ? "bg-sky-100 text-sky-800"
                        : "bg-amber-100 text-amber-800"
                      : collectionId === 'history'
                      ? "text-teal-700 hover:bg-teal-100"
                      : collectionId === 'turkish'
                      ? "text-sky-700 hover:bg-sky-100"
                      : "text-amber-700 hover:bg-amber-100"
                  )}
                  aria-label={language === 'ar' ? 'مستوى الصوت' : 'Volume'}
                  aria-expanded={audioMenu === 'volume'}
                >
                  {volume === 0 ? <VolumeX size={19} /> : <Volume2 size={19} />}
                </button>

                <AnimatePresence>
                  {audioMenu === 'volume' && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.14, ease: 'easeOut' }}
                      className="absolute end-0 top-[calc(100%+0.55rem)] z-50 w-48 rounded-2xl border border-black/[0.07] bg-white/96 p-3.5 shadow-2xl backdrop-blur-xl"
                    >
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.045] text-wood/65 transition-colors hover:bg-black/[0.08]"
                          aria-label={volume === 0 ? (language === 'ar' ? 'إلغاء كتم الصوت' : 'Unmute') : (language === 'ar' ? 'كتم الصوت' : 'Mute')}
                        >
                          {volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
                        </button>

                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={handleVolumeChange}
                          aria-label={language === 'ar' ? 'مستوى الصوت' : 'Volume level'}
                          className={cn(
                            "h-1.5 min-w-0 flex-1 cursor-pointer appearance-none rounded-full accent-current",
                            collectionId === 'history'
                              ? "bg-teal-200 text-teal-700"
                              : collectionId === 'turkish'
                              ? "bg-sky-200 text-sky-700"
                              : "bg-amber-200 text-amber-700"
                          )}
                        />

                        <span className="w-9 shrink-0 text-end font-mono text-[10px] font-semibold tabular-nums text-wood/50">
                          {Math.round(volume * 100)}%
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setAudioMenu(current => current === 'speed' ? null : 'speed')}
                  disabled={isAudioLocked}
                  className={cn(
                    "flex h-9 min-w-[46px] items-center justify-center rounded-full px-2.5 font-display text-[11px] font-semibold tabular-nums transition-colors sm:h-10 sm:min-w-[50px]",
                    isAudioLocked
                      ? "cursor-not-allowed bg-gray-100 text-gray-400"
                      : audioMenu === 'speed'
                      ? collectionId === 'history'
                        ? "bg-teal-100 text-teal-800"
                        : collectionId === 'turkish'
                        ? "bg-sky-100 text-sky-800"
                        : "bg-amber-100 text-amber-800"
                      : collectionId === 'history'
                      ? "bg-teal-50 text-teal-800 hover:bg-teal-100"
                      : collectionId === 'turkish'
                      ? "bg-sky-50 text-sky-800 hover:bg-sky-100"
                      : "bg-amber-50 text-amber-800 hover:bg-amber-100"
                  )}
                  aria-label={language === 'ar' ? 'سرعة التشغيل' : 'Playback speed'}
                  aria-expanded={audioMenu === 'speed'}
                >
                  {speed}×
                </button>

                <AnimatePresence>
                  {audioMenu === 'speed' && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.14, ease: 'easeOut' }}
                      className="absolute end-0 top-[calc(100%+0.55rem)] z-50 w-28 rounded-2xl border border-black/[0.07] bg-white/96 p-1.5 shadow-2xl backdrop-blur-xl"
                    >
                      {[1, 1.25, 1.5, 1.75, 2].map(option => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setPlaybackSpeed(option)}
                          className={cn(
                            "flex min-h-10 w-full items-center justify-between rounded-xl px-3 font-display text-[11px] font-semibold tabular-nums transition-colors",
                            speed === option
                              ? collectionId === 'history'
                                ? "bg-teal-50 text-teal-800"
                                : collectionId === 'turkish'
                                ? "bg-sky-50 text-sky-800"
                                : "bg-amber-50 text-amber-800"
                              : "text-wood/62 hover:bg-black/[0.045]"
                          )}
                        >
                          <span>{option}×</span>
                          {speed === option && <span aria-hidden="true">✓</span>}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dynamic responsive layout container */}
      <div className="flex-1 min-h-0 overflow-hidden">
        {/* Mobile View: Vertical scrolling stack */}
        <div className="block lg:hidden h-full overflow-y-auto custom-scrollbar pe-3 sm:pe-4 space-y-6">
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
              "font-serif leading-[1.72] text-wood/90 mx-auto max-w-[68ch]",
              isDyslexic ? "font-sans tracking-wide" : "",
              isRTL && "text-right"
            )}
            style={getResponsiveStoryFontStyle(fontSize, isRTL, isDyslexic)}
          >
            {renderContent(page.content)}
          </div>

          {renderQuickChallengePanel()}

          {renderLanguageFocusPanel(true)}
        </div>

        {/* Desktop View: Grid layout with Quick Challenge spanning both columns at bottom */}
        <div className="hidden lg:flex lg:flex-col h-full min-h-0 overflow-y-auto custom-scrollbar pe-3 xl:pe-4 pb-4">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left side: Image */}
            <div className="col-span-5 self-start lg:sticky lg:top-0">
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
                  "font-serif leading-[1.72] text-wood/90 w-full max-w-[72ch]",
                  isDyslexic ? "font-sans tracking-wide" : "",
                  isRTL && "text-right"
                )}
                style={getResponsiveStoryFontStyle(fontSize, isRTL, isDyslexic)}
              >
                {renderContent(page.content)}
              </div>
            </div>
          </div>

          {renderQuickChallengePanel()}

          {renderLanguageFocusPanel()}
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
            variant={
              page.exercises?.[0]?.id === activeExercise.id
                ? 'quick'
                : page.languageFocusExercises?.some(exercise => exercise.id === activeExercise.id)
                ? 'language'
                : 'default'
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
};