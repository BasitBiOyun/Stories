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
const ARABIC_SCRIPT_RE = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
const LATIN_SCRIPT_RE = /[A-Za-z]/;
const TURKISH_OR_OTTOMAN_CHAR_RE = /[çğıöşüÇĞİÖŞÜâÂîÎûÛ]/;

const normalizeGlossaryKey = (word: string) => word.trim().toLocaleLowerCase();

const isTargetLanguageVocabulary = (word: string, isRTL: boolean) => {
  const cleaned = word.trim();
  if (!cleaned) return false;

  if (isRTL) {
    return ARABIC_SCRIPT_RE.test(cleaned) && !LATIN_SCRIPT_RE.test(cleaned);
  }

  return !ARABIC_SCRIPT_RE.test(cleaned) && !TURKISH_OR_OTTOMAN_CHAR_RE.test(cleaned);
};

const pickPreferredVoice = (lang: string) => {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return undefined;

  const normalizedLang = lang.toLowerCase();
  const prefix = normalizedLang.split('-')[0];
  const exact = voices.filter(voice => voice.lang.toLowerCase() === normalizedLang);
  const sameLanguage = voices.filter(voice => voice.lang.toLowerCase().startsWith(prefix));
  const candidates = exact.length > 0 ? exact : sameLanguage;
  if (!candidates.length) return undefined;

  const preferredName = /(google|microsoft|samantha|daniel|karen|zira|aria|majed|maged|tarik|hamed)/i;
  return candidates.find(voice => preferredName.test(voice.name))
    ?? candidates.find(voice => voice.localService)
    ?? candidates[0];
};

export const MasterGlossary: React.FC<MasterGlossaryProps> = ({ bookData, page, collectionId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [playingWord, setPlayingWord] = useState<string | null>(null);
  const [knownMap, setKnownMap] = useState<Record<string, KnownState>>({});
  const [filter, setFilter] = useState<FilterMode>('all');
  const { t, formatNumber, isRTL } = useLanguage();

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
        .filter(v => isTargetLanguageVocabulary(v.word, isRTL))
        .map(v => ({
          key: normalizeGlossaryKey(v.word),
          word: v.word.trim(),
          definition: v.definition,
          example: v.example ?? null,
        }))
        .sort((a, b) => a.word.localeCompare(b.word, isRTL ? 'ar' : 'en', { sensitivity: 'base' }));
    }

    const vocabMap = new Map<string, { word: string; definition: string; example: string | null }>();
    bookData.pages.forEach(p => {
      p.vocabulary?.forEach(v => {
        if (!isTargetLanguageVocabulary(v.word, isRTL)) return;

        const key = normalizeGlossaryKey(v.word);
        if (!vocabMap.has(key)) {
          vocabMap.set(key, {
            word: v.word.trim(),
            definition: v.definition,
            example: v.example ?? null,
          });
        }
      });
    });
    return Array.from(vocabMap.entries())
      .map(([key, data]) => ({ key, ...data }))
      .sort((a, b) => a.word.localeCompare(b.word, isRTL ? 'ar' : 'en', { sensitivity: 'base' }));
  }, [bookData, page, isRTL]);

  const knownCount = useMemo(
    () => allVocabulary.filter(v => knownMap[v.key] === 'known').length,
    [allVocabulary, knownMap]
  );

  const filteredVocab = useMemo(() => {
    return allVocabulary.filter(v => {
      const matchesSearch =
        !searchTerm ||
        v.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.definition.toLowerCase().includes(searchTerm.toLowerCase());

      const state: KnownState = knownMap[v.key] ?? 'unreviewed';
      const matchesFilter =
        filter === 'all' ||
        (filter === 'known' && state === 'known') ||
        (filter === 'unknown' && state === 'unknown') ||
        (filter === 'unreviewed' && state === 'unreviewed');

      return matchesSearch && matchesFilter;
    });
  }, [allVocabulary, searchTerm, filter, knownMap]);

  const playWord = useCallback((word: string) => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    setPlayingWord(word);

    const targetLang = isRTL ? 'ar-SA' : 'en-US';
    const utterance = new SpeechSynthesisUtterance(word);
    const preferredVoice = pickPreferredVoice(targetLang);

    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.lang = preferredVoice?.lang ?? targetLang;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    const reset = () => setPlayingWord(null);
    utterance.onerror = reset;

    const timeout = setTimeout(reset, 3000);
    utterance.onend = () => { clearTimeout(timeout); reset(); };

    window.speechSynthesis.speak(utterance);
  }, [isRTL]);

  const markWord = useCallback((wordKey: string, state: KnownState) => {
    setKnownMap(prev => {
      const next = { ...prev, [wordKey]: state };
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
    { value: 'unknown', label: `✗ ${t('nav.review')} (${formatNumber(allVocabulary.filter(v => knownMap[v.key] === 'unknown').length)})` },
    { value: 'unreviewed', label: `${t('nav.new')} (${formatNumber(allVocabulary.filter(v => !knownMap[v.key]).length)})` },
  ];

  return (
    <div className="flex-1 min-h-0 flex flex-col gap-2.5 overflow-hidden lg:-my-3 lg:h-[calc(100%+1.5rem)]">
      <div className="shrink-0 flex flex-col gap-2.5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2.5 lg:gap-6">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={cn("w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-md shrink-0", colTheme.brand600, colTheme.shadowBrand)}>
              <BookOpenCheck size={20} />
            </div>
            <div className="min-w-0">
              <h2 className={cn("text-2xl sm:text-3xl font-black tracking-tight leading-none", colTheme.text900)}>{t('nav.masterGlossary')}</h2>
              <p className="font-serif text-sm sm:text-base italic text-wood/55 mt-0.5 truncate">{t('nav.everyWordLearned')}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 lg:w-[42%] lg:min-w-[420px] lg:max-w-[620px]">
            <div className={cn("flex-1 h-2 rounded-full overflow-hidden", colTheme.progressTrack)}>
              <motion.div
                className={cn("h-full rounded-full", colTheme.progressFill)}
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
            <span className={cn("text-xs sm:text-sm font-bold tabular-nums whitespace-nowrap", colTheme.text700)}>
              {formatNumber(knownCount)}/{formatNumber(allVocabulary.length)} {t('nav.known')}
            </span>
            {knownCount > 0 && (
              <button
                onClick={resetProgress}
                className={cn("p-2 rounded-lg transition-all shrink-0", colTheme.brand600Text, colTheme.bgLight)}
                title={t('nav.reset')}
                aria-label={t('nav.reset')}
              >
                <RotateCcw size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center gap-2">
          <div className="relative flex-1 min-w-0">
            <Search className={cn(
              "absolute top-1/2 -translate-y-1/2 w-4 h-4",
              isRTL ? "right-3.5" : "left-3.5",
              colTheme.searchText
            )} />
            <input
              type="text"
              placeholder={t('nav.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={cn(
                "w-full py-2.5 bg-white/60 backdrop-blur-sm border-2 rounded-xl outline-none transition-all font-serif italic shadow-inner",
                isRTL ? "pr-10 pl-3" : "pl-10 pr-3",
                colTheme.searchBorder,
                `focus:${colTheme.brand600Text.replace('text-', 'border-')}`,
                colTheme.text900
              )}
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto custom-scrollbar shrink-0 pb-0.5 xl:pb-0">
            {filterOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={cn(
                  "px-3 py-2 rounded-xl text-xs font-semibold transition-all border whitespace-nowrap",
                  filter === opt.value
                    ? `${colTheme.brand600} text-white ${colTheme.brand600.replace('bg-', 'border-')} shadow-sm`
                    : cn("bg-white/50 hover:bg-white/80", colTheme.text700, colTheme.borderLight)
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 -mr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3.5 pb-2">
          <AnimatePresence mode="popLayout">
            {filteredVocab.map((v) => {
              const state: KnownState = knownMap[v.key] ?? 'unreviewed';

              return (
                <motion.div
                  key={v.key}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    "group relative bg-white/45 backdrop-blur-sm border-2 rounded-2xl p-3.5 transition-all shadow-sm hover:shadow-md",
                    state === 'known'
                      ? "border-green-200 bg-green-50/40"
                      : state === 'unknown'
                        ? "border-red-200 bg-red-50/30"
                        : colTheme.cardBorder
                  )}
                >
                  <div className="flex items-start gap-2.5">
                    <button
                      onClick={() => playWord(v.word)}
                      className={cn(
                        "shrink-0 p-2 rounded-lg transition-all shadow-sm mt-0.5",
                        playingWord === v.word ? colTheme.playingBg : colTheme.playIconBtn
                      )}
                      aria-label={v.word}
                    >
                      <Volume2 size={15} className={playingWord === v.word ? "animate-pulse" : ""} />
                    </button>

                    <div className="flex-1 min-w-0">
                      <h3 className={cn("text-xl font-bold capitalize mb-1 leading-tight", colTheme.text900)}>{v.word}</h3>
                      <p className="font-serif text-base text-wood/70 leading-snug">
                        {v.definition}
                      </p>
                      {v.example && (
                        <p className={cn("font-serif italic text-sm border-l-2 pl-2.5 leading-snug mt-2", colTheme.text700OpText, colTheme.borderL)}>
                          "{v.example}"
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 flex flex-col gap-1 mt-0.5">
                      <button
                        onClick={() => markWord(v.key, state === 'known' ? 'unreviewed' : 'known')}
                        className={cn(
                          "p-1.5 rounded-lg transition-all",
                          state === 'known'
                            ? "bg-green-500 text-white shadow-sm shadow-green-200"
                            : "bg-white/60 text-green-400 hover:bg-green-50 hover:text-green-600 border border-green-100"
                        )}
                        title={t('nav.iKnowThisWord')}
                      >
                        <Check size={13} />
                      </button>
                      <button
                        onClick={() => markWord(v.key, state === 'unknown' ? 'unreviewed' : 'unknown')}
                        className={cn(
                          "p-1.5 rounded-lg transition-all",
                          state === 'unknown'
                            ? "bg-red-400 text-white shadow-sm shadow-red-200"
                            : "bg-white/60 text-red-300 hover:bg-red-50 hover:text-red-500 border border-red-100"
                        )}
                        title={t('nav.needToReview')}
                      >
                        <X size={13} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredVocab.length === 0 && (
          <div className="h-48 flex flex-col items-center justify-center text-center p-6">
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-3", colTheme.bgLight)}>
              <Search className={cn("w-6 h-6", colTheme.searchText)} />
            </div>
            <p className="font-serif italic text-wood/40">
              {searchTerm ? t('nav.noWordsFound') : t('nav.noWordsCategory')}
            </p>
          </div>
        )}
      </div>

      <div className={cn("shrink-0 px-3 py-2 rounded-xl flex items-center gap-2.5 border", colTheme.footerBg)}>
        <div className={cn("w-8 h-8 rounded-lg text-white flex items-center justify-center shrink-0", colTheme.footerIconBg)}>
          <GraduationCap size={16} />
        </div>
        <p className={cn("text-xs sm:text-sm font-serif italic leading-snug", colTheme.footerText)}>
          {t('nav.glossaryTip')}
          {progressPct === 100
            ? ` ${t('nav.glossaryAmazing')}`
            : ` ${t('nav.glossaryProgress').replace('{percent}', formatNumber(progressPct)).replace('{total}', formatNumber(allVocabulary.length))}`}
        </p>
      </div>
    </div>
  );
};