import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Search, GraduationCap, Check, X, RotateCcw, BookOpenCheck } from '../ui/icons';
import { PageData, BookData } from '../../types';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';

interface MasterGlossaryProps {
  bookData: BookData;
  page: PageData;
  collectionId?: string;
}

type KnownState = 'known' | 'unknown' | 'unreviewed';
type FilterMode = 'all' | 'known' | 'unknown' | 'unreviewed';

const STORAGE_KEY = (bookId: string) => `glossary_known_${bookId}`;

export const MasterGlossary: React.FC<MasterGlossaryProps> = ({ bookData, page, collectionId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [knownMap, setKnownMap] = useState<Record<string, KnownState>>({});
  const [filter, setFilter] = useState<FilterMode>('all');
  const { language, t, formatNumber, isRTL } = useLanguage();

  const colTheme = useMemo(() => {
    if (collectionId === 'history') {
      return {
        brand600: "bg-emerald-600",
        brand750: "bg-emerald-700",
        brand600Text: "text-emerald-600",
        shadowBrand: "shadow-emerald-200/55",
        text950: "text-emerald-950",
        text900: "text-emerald-900",
        text700: "text-emerald-700",
        text700OpText: "text-emerald-700/60",
        borderLight: "border-emerald-150",
        bgLight: "bg-emerald-50/80",
        bgLightRaw: "bg-emerald-100",
        progressTrack: "bg-emerald-100",
        progressFill: "bg-emerald-500",
        searchText: "text-emerald-400",
        searchBorder: "border-emerald-100",
        searchBg: "bg-white/60",
        cardBorder: "border-emerald-100/50 hover:border-emerald-300",
        playingBg: "bg-emerald-500 text-white scale-110",
        playIconBtn: "bg-emerald-100 text-emerald-600 hover:bg-emerald-200",
        playingIconBtnPulse: "bg-emerald-500",
        badgeBg: "bg-emerald-100 text-emerald-700",
        borderL: "border-emerald-200",
        footerBg: "bg-emerald-650/5 border-emerald-600/10",
        footerIconBg: "bg-emerald-600",
        footerText: "text-emerald-900/70"
      };
    } else if (collectionId === 'turkish') {
      return {
        brand600: "bg-sky-700",
        brand750: "bg-sky-800",
        brand600Text: "text-sky-700",
        shadowBrand: "shadow-sky-100/50",
        text950: "text-sky-950",
        text900: "text-sky-900",
        text700: "text-sky-800",
        text700OpText: "text-sky-700/65",
        borderLight: "border-sky-100",
        bgLight: "bg-sky-50/80",
        bgLightRaw: "bg-sky-100",
        progressTrack: "bg-sky-100",
        progressFill: "bg-sky-500",
        searchText: "text-sky-400",
        searchBorder: "border-sky-100",
        searchBg: "bg-white/60",
        cardBorder: "border-sky-100/50 hover:border-sky-300",
        playingBg: "bg-sky-700 text-white scale-110",
        playIconBtn: "bg-sky-100 text-sky-700 hover:bg-sky-200",
        playingIconBtnPulse: "bg-[#0284C7]",
        badgeBg: "bg-sky-100 text-sky-800",
        borderL: "border-sky-200",
        footerBg: "bg-[#0D1D2C]/5 border-sky-600/10",
        footerIconBg: "bg-sky-700",
        footerText: "text-[#0F172A]/70"
      };
    } else {
      return {
        brand600: "bg-amber-600",
        brand750: "bg-amber-700",
        brand600Text: "text-amber-600",
        shadowBrand: "shadow-amber-200",
        text950: "text-amber-950",
        text900: "text-amber-900",
        text700: "text-amber-700",
        text700OpText: "text-amber-700/60",
        borderLight: "border-amber-100",
        bgLight: "bg-amber-50/80",
        bgLightRaw: "bg-amber-100",
        progressTrack: "bg-amber-100",
        progressFill: "bg-amber-500",
        searchText: "text-amber-400",
        searchBorder: "border-amber-100",
        searchBg: "bg-white/60",
        cardBorder: "border-amber-100/50 hover:border-amber-300",
        playingBg: "bg-amber-500 text-white scale-110",
        playIconBtn: "bg-amber-100 text-amber-600 hover:bg-amber-200",
        playingIconBtnPulse: "bg-amber-500",
        badgeBg: "bg-amber-100 text-amber-700",
        borderL: "border-amber-200",
        footerBg: "bg-amber-600/5 border-amber-600/10",
        footerIconBg: "bg-amber-600",
        footerText: "text-amber-900/70"
      };
    }
  }, [collectionId]);

  // Load persisted known/unknown state
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(bookData.id ?? 'default'));
      if (stored) setKnownMap(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, [bookData.id]);

  const persistKnownMap = useCallback((map: Record<string, KnownState>) => {
    try {
      localStorage.setItem(STORAGE_KEY(bookData.id ?? 'default'), JSON.stringify(map));
    } catch {
      // ignore
    }
  }, [bookData.id]);

  const allVocabulary = useMemo(() => {
    if (page.vocabulary && page.vocabulary.length > 0) {
      return page.vocabulary
        .map(v => ({
          word: v.word.toLowerCase(),
          definition: v.definition,
          example: v.example ?? null,
        }))
        .sort((a, b) => a.word.localeCompare(b.word));
    }

    const vocabMap = new Map<string, { definition: string; example: string | null }>();
    bookData.pages.forEach(p => {
      p.vocabulary?.forEach(v => {
        if (!vocabMap.has(v.word.toLowerCase())) {
          vocabMap.set(v.word.toLowerCase(), {
            definition: v.definition,
            example: v.example ?? null,
          });
        }
      });
    });
    return Array.from(vocabMap.entries())
      .map(([word, data]) => ({ word, ...data }))
      .sort((a, b) => a.word.localeCompare(b.word));
  }, [bookData, page]);

  const knownCount = useMemo(
    () => allVocabulary.filter(v => knownMap[v.word] === 'known').length,
    [allVocabulary, knownMap]
  );

  const filteredVocab = useMemo(() => {
    return allVocabulary.filter(v => {
      const matchesSearch =
        !searchTerm ||
        v.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.definition.toLowerCase().includes(searchTerm.toLowerCase());

      const state: KnownState = knownMap[v.word] ?? 'unreviewed';
      const matchesFilter =
        filter === 'all' ||
        (filter === 'known' && state === 'known') ||
        (filter === 'unknown' && state === 'unknown') ||
        (filter === 'unreviewed' && state === 'unreviewed');

      return matchesSearch && matchesFilter;
    });
  }, [allVocabulary, searchTerm, filter, knownMap]);

  // Reliable TTS with timeout fallback to reset stuck state
  const playWord = useCallback((word: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    setPlayingWord(word);

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;

    const reset = () => setPlayingWord(null);
    utterance.onend = reset;
    utterance.onerror = reset;

    // Fallback: some browsers never fire onend
    const timeout = setTimeout(reset, 3000);
    utterance.onend = () => { clearTimeout(timeout); reset(); };

    window.speechSynthesis.speak(utterance);
  }, []);

  const markWord = useCallback((word: string, state: KnownState) => {
    setKnownMap(prev => {
      const next = { ...prev, [word]: state };
      persistKnownMap(next);
      return next;
    });
  }, [persistKnownMap]);

  const resetProgress = useCallback(() => {
    setKnownMap({});
    persistKnownMap({});
  }, [persistKnownMap]);

  const progressPct = allVocabulary.length > 0
    ? Math.round((knownCount / allVocabulary.length) * 100)
    : 0;

  const filterOptions: { value: FilterMode; label: string }[] = [
    { value: 'all', label: `${t('nav.all')} (${formatNumber(allVocabulary.length)})` },
    { value: 'known', label: `✓ ${t('nav.known')} (${formatNumber(knownCount)})` },
    { value: 'unknown', label: `✗ ${t('nav.review')} (${formatNumber(allVocabulary.filter(v => knownMap[v.word] === 'unknown').length)})` },
    { value: 'unreviewed', label: `${t('nav.new')} (${formatNumber(allVocabulary.filter(v => !knownMap[v.word]).length)})` },
  ];

  return (
    <div className="flex-1 min-h-0 flex flex-col gap-4 overflow-hidden">

      {/* Header */}
      <div className="shrink-0 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={cn("w-12 h-12 rounded-2xl text-white flex items-center justify-center shadow-lg", colTheme.brand600, colTheme.shadowBrand)}>
              <BookOpenCheck size={24} />
            </div>
            <div>
              <h2 className={cn("text-4xl font-black tracking-tight", colTheme.text900)}>{t('nav.masterGlossary')}</h2>
              <p className="font-serif text-lg italic text-wood/60">{t('nav.everyWordLearned')}</p>
            </div>
          </div>
          {knownCount > 0 && (
            <button
              onClick={resetProgress}
              className={cn("flex items-center gap-1.5 px-3 py-2 text-xs rounded-xl transition-all", colTheme.brand600Text, `hover:${colTheme.text700} ${colTheme.bgLight}`)}
              title={t('nav.reset')}
            >
              <RotateCcw size={13} />
              {t('nav.reset')}
            </button>
          )}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <div className={cn("flex-1 h-2.5 rounded-full overflow-hidden", colTheme.progressTrack)}>
            <motion.div
              className={cn("h-full rounded-full", colTheme.progressFill)}
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <span className={cn("text-sm font-bold tabular-nums min-w-[60px] text-right", colTheme.text700)}>
            {formatNumber(knownCount)}/{formatNumber(allVocabulary.length)} {t('nav.known')}
          </span>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className={cn("absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5", colTheme.searchText)} />
          <input
            type="text"
            placeholder={t('nav.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={cn(
              "w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-sm border-2 rounded-2xl outline-none transition-all font-serif italic shadow-inner",
              colTheme.searchBorder,
              `focus:${colTheme.brand600Text.replace('text-', 'border-')}`,
              colTheme.text900
            )}
          />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {filterOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border",
                filter === opt.value
                  ? `${colTheme.brand600} text-white ${colTheme.brand600.replace('bg-', 'border-')} shadow-sm`
                  : cn("bg-white/50 border-amber-100 hover:border-amber-300", colTheme.text700, colTheme.borderLight)
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Vocabulary cards */}
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-4 -mr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
          <AnimatePresence mode="popLayout">
            {filteredVocab.map((v) => {
              const state: KnownState = knownMap[v.word] ?? 'unreviewed';

              return (
                <motion.div
                  key={v.word}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    "group relative bg-white/40 backdrop-blur-sm border-2 rounded-2xl p-4 transition-all shadow-sm hover:shadow-md",
                    state === 'known'
                      ? "border-green-200 bg-green-50/40"
                      : state === 'unknown'
                        ? "border-red-200 bg-red-50/30"
                        : colTheme.cardBorder
                  )}
                >
                  <div className="flex items-start gap-3">
                    {/* TTS button */}
                    <button
                      onClick={() => playWord(v.word)}
                      className={cn(
                        "shrink-0 p-2.5 rounded-xl transition-all shadow-sm mt-0.5",
                        playingWord === v.word
                          ? colTheme.playingBg
                          : colTheme.playIconBtn
                      )}
                    >
                      <Volume2
                        size={16}
                        className={playingWord === v.word ? "animate-pulse" : ""}
                      />
                    </button>

                    {/* Word content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={cn("text-2xl font-bold capitalize mb-2", colTheme.text900)}>{v.word}</h3>
                      <p className="font-serif text-lg text-wood/70 leading-relaxed mb-3">
                        {v.definition}
                      </p>
                      {v.example && (
                        <p className={cn("font-serif italic text-base border-l-4 pl-4 leading-relaxed", colTheme.text700OpText, colTheme.borderL)}>
                          "{v.example}"
                        </p>
                      )}
                    </div>

                    {/* Known / Unknown buttons */}
                    <div className="shrink-0 flex flex-col gap-1.5 mt-0.5">
                      <button
                        onClick={() => markWord(v.word, state === 'known' ? 'unreviewed' : 'known')}
                        className={cn(
                          "p-2 rounded-xl transition-all",
                          state === 'known'
                            ? "bg-green-500 text-white shadow-sm shadow-green-200"
                            : "bg-white/60 text-green-400 hover:bg-green-50 hover:text-green-600 border border-green-100"
                        )}
                        title={t('nav.iKnowThisWord')}
                      >
                        <Check size={14} />
                      </button>
                      <button
                        onClick={() => markWord(v.word, state === 'unknown' ? 'unreviewed' : 'unknown')}
                        className={cn(
                          "p-2 rounded-xl transition-all",
                          state === 'unknown'
                            ? "bg-red-400 text-white shadow-sm shadow-red-200"
                            : "bg-white/60 text-red-300 hover:bg-red-50 hover:text-red-500 border border-red-100"
                        )}
                        title={t('nav.needToReview')}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredVocab.length === 0 && (
          <div className="h-64 flex flex-col items-center justify-center text-center p-8">
            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", colTheme.bgLight)}>
              <Search className={cn("w-8 h-8", colTheme.searchText)} />
            </div>
            <p className="font-serif italic text-wood/40">
              {searchTerm ? t('nav.noWordsFound') : t('nav.noWordsCategory')}
            </p>
          </div>
        )}
      </div>

      {/* Footer tip */}
      <div className={cn("shrink-0 p-4 rounded-2xl flex items-center gap-4 border", colTheme.footerBg)}>
        <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center shrink-0", colTheme.footerIconBg)}>
          <GraduationCap size={20} />
        </div>
        <p className={cn("text-sm font-serif italic", colTheme.footerText)}>
          {t('nav.glossaryTip')}
          {progressPct === 100
            ? ` ${t('nav.glossaryAmazing')}`
            : ` ${t('nav.glossaryProgress').replace('{percent}', formatNumber(progressPct)).replace('{total}', formatNumber(allVocabulary.length))}`}
        </p>
      </div>
    </div>
  );
};
