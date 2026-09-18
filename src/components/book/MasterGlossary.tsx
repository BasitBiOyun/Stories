import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  Search,
  GraduationCap,
  Check,
  X,
  RotateCcw,
  BookOpenCheck,
  BrainCircuit,
  Target,
  Sparkles,
  CheckCircle,
} from '../ui/icons';
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

  const copy = useMemo(() => isRTL
    ? {
        eyebrow: 'مركز المفردات',
        subtitle: 'راجِعْ الكلمات، قيِّمْ ثقتك، وحدِّدْ ما يحتاج إلى مزيد من التدرّب.',
        progressTitle: 'خريطة الثقة',
        progressHint: 'يعكس هذا المؤشر تقييمك الذاتي الحالي للكلمات.',
        total: 'كل الكلمات',
        confident: 'واثق',
        practice: 'للتدرّب',
        fresh: 'جديد',
        allWords: 'كل الكلمات',
        confidentFilter: 'واثق',
        practiceFilter: 'للتدرّب',
        newFilter: 'جديد',
        knowAction: 'أعرف هذه الكلمة',
        reviewAction: 'أحتاج إلى التدرّب',
        knownBadge: 'واثق',
        reviewBadge: 'للتدرّب',
        newBadge: 'جديد',
        learningPath: 'مسار التعلّم',
        pathSteps: ['اكتشف', 'لاحظ', 'استرجع', 'استخدم'],
        selfCheck: 'تقييم ذاتي',
        selfCheckNote: 'اختر «واثق» إذا كنت تفهم الكلمة دون مساعدة، أو «للتدرّب» إذا أردت العودة إليها.',
        visibleWords: 'كلمات ظاهرة',
      }
    : {
        eyebrow: 'Vocabulary Learning Hub',
        subtitle: 'Review the story vocabulary, map your confidence and keep difficult words visible.',
        progressTitle: 'Confidence map',
        progressHint: 'This stage reflects your current self-assessment of the vocabulary.',
        total: 'All words',
        confident: 'Confident',
        practice: 'Practice',
        fresh: 'New',
        allWords: 'All words',
        confidentFilter: 'Confident',
        practiceFilter: 'Practice',
        newFilter: 'New',
        knowAction: 'I know this',
        reviewAction: 'Needs practice',
        knownBadge: 'Confident',
        reviewBadge: 'Practice',
        newBadge: 'New',
        learningPath: 'Learning path',
        pathSteps: ['Discover', 'Notice', 'Recall', 'Use'],
        selfCheck: 'Self-check',
        selfCheckNote: 'Choose “Confident” when you understand the word without help, or “Practice” when you want to revisit it.',
        visibleWords: 'words shown',
      }, [isRTL]);

  const colTheme = useMemo(() => {
    if (collectionId === 'history') {
      return {
        brand600: 'bg-emerald-600',
        brand700: 'bg-emerald-700',
        brandText: 'text-emerald-700',
        brandTextStrong: 'text-emerald-950',
        brandSoft: 'bg-emerald-50',
        brandSoftStrong: 'bg-emerald-100',
        border: 'border-emerald-100',
        borderStrong: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-300',
        progressTrack: 'bg-emerald-100',
        progressFill: 'bg-emerald-500',
        audio: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
        audioPlaying: 'bg-emerald-600 text-white',
        hero: 'from-emerald-50/95 via-white/80 to-teal-50/70',
        heroGlow: 'bg-emerald-300/20',
        accentBorder: 'border-emerald-200/70',
        footer: 'bg-emerald-50/70 border-emerald-100 text-emerald-900/70',
      };
    }

    if (collectionId === 'turkish') {
      return {
        brand600: 'bg-sky-700',
        brand700: 'bg-sky-800',
        brandText: 'text-sky-700',
        brandTextStrong: 'text-sky-950',
        brandSoft: 'bg-sky-50',
        brandSoftStrong: 'bg-sky-100',
        border: 'border-sky-100',
        borderStrong: 'border-sky-200',
        hoverBorder: 'hover:border-sky-300',
        progressTrack: 'bg-sky-100',
        progressFill: 'bg-sky-600',
        audio: 'bg-sky-100 text-sky-700 hover:bg-sky-200',
        audioPlaying: 'bg-sky-700 text-white',
        hero: 'from-sky-50/95 via-white/80 to-cyan-50/70',
        heroGlow: 'bg-sky-300/20',
        accentBorder: 'border-sky-200/70',
        footer: 'bg-sky-50/70 border-sky-100 text-sky-950/70',
      };
    }

    return {
      brand600: 'bg-amber-600',
      brand700: 'bg-amber-700',
      brandText: 'text-amber-700',
      brandTextStrong: 'text-amber-950',
      brandSoft: 'bg-amber-50',
      brandSoftStrong: 'bg-amber-100',
      border: 'border-amber-100',
      borderStrong: 'border-amber-200',
      hoverBorder: 'hover:border-amber-300',
      progressTrack: 'bg-amber-100',
      progressFill: 'bg-amber-500',
      audio: 'bg-amber-100 text-amber-700 hover:bg-amber-200',
      audioPlaying: 'bg-amber-600 text-white',
      hero: 'from-amber-50/95 via-white/80 to-orange-50/70',
      heroGlow: 'bg-amber-300/20',
      accentBorder: 'border-amber-200/70',
      footer: 'bg-amber-50/70 border-amber-100 text-amber-950/70',
    };
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
  const reviewCount = useMemo(
    () => allVocabulary.filter(v => knownMap[v.key] === 'unknown').length,
    [allVocabulary, knownMap]
  );
  const newCount = allVocabulary.length - knownCount - reviewCount;

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
    utterance.onend = () => {
      clearTimeout(timeout);
      reset();
    };

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

  const filterOptions: { value: FilterMode; label: string; count: number }[] = [
    { value: 'all', label: copy.allWords, count: allVocabulary.length },
    { value: 'known', label: copy.confidentFilter, count: knownCount },
    { value: 'unknown', label: copy.practiceFilter, count: reviewCount },
    { value: 'unreviewed', label: copy.newFilter, count: newCount },
  ];

  const summaryCards = [
    {
      key: 'all' as FilterMode,
      label: copy.total,
      value: allVocabulary.length,
      icon: BookOpenCheck,
      className: cn(colTheme.brandSoft, colTheme.brandText, colTheme.border),
    },
    {
      key: 'known' as FilterMode,
      label: copy.confident,
      value: knownCount,
      icon: CheckCircle,
      className: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      key: 'unknown' as FilterMode,
      label: copy.practice,
      value: reviewCount,
      icon: Target,
      className: 'bg-rose-50 text-rose-700 border-rose-100',
    },
    {
      key: 'unreviewed' as FilterMode,
      label: copy.fresh,
      value: newCount,
      icon: Sparkles,
      className: 'bg-violet-50 text-violet-700 border-violet-100',
    },
  ];

  return (
    <div className="flex-1 min-h-0 flex flex-col gap-3 overflow-hidden lg:-my-3 lg:h-[calc(100%+1.5rem)]">
      <section className={cn(
        'shrink-0 relative overflow-hidden rounded-[1.6rem] border bg-gradient-to-br px-4 py-4 sm:px-5 sm:py-4 shadow-sm',
        colTheme.hero,
        colTheme.accentBorder
      )}>
        <div className={cn('absolute -top-16 -right-12 w-44 h-44 rounded-full blur-3xl pointer-events-none', colTheme.heroGlow)} />
        <div className="relative flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className={cn(
              'w-11 h-11 sm:w-12 sm:h-12 rounded-2xl text-white flex items-center justify-center shadow-lg shrink-0',
              colTheme.brand600
            )}>
              <BrainCircuit size={23} />
            </div>
            <div className="min-w-0">
              <div className={cn('text-[10px] sm:text-xs uppercase tracking-[0.18em] font-black mb-1', colTheme.brandText)}>
                {copy.eyebrow}
              </div>
              <h2 className={cn('text-2xl sm:text-3xl font-black tracking-tight leading-none', colTheme.brandTextStrong)}>
                {t('nav.masterGlossary')}
              </h2>
              <p className="text-sm sm:text-[15px] text-wood/60 mt-1.5 max-w-2xl leading-relaxed">
                {copy.subtitle}
              </p>
            </div>
          </div>

          <div className="xl:w-[42%] xl:min-w-[430px] rounded-2xl border border-white/80 bg-white/65 backdrop-blur-md px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div>
                <div className={cn('text-xs font-black uppercase tracking-[0.12em]', colTheme.brandText)}>
                  {copy.progressTitle}
                </div>
                <p className="text-[11px] sm:text-xs text-wood/45 mt-0.5">
                  {copy.progressHint}
                </p>
              </div>
              <div className={cn('text-2xl sm:text-3xl font-black tabular-nums', colTheme.brandTextStrong)}>
                {formatNumber(progressPct)}%
              </div>
            </div>

            <div className={cn('h-2.5 rounded-full overflow-hidden', colTheme.progressTrack)}>
              <motion.div
                className={cn('h-full rounded-full', colTheme.progressFill)}
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
            </div>

            <div className="flex items-center justify-between gap-2 mt-2">
              <span className="text-[11px] sm:text-xs text-wood/45">
                {formatNumber(knownCount)} / {formatNumber(allVocabulary.length)} {copy.confident.toLowerCase()}
              </span>
              {(knownCount > 0 || reviewCount > 0) && (
                <button
                  onClick={resetProgress}
                  className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all hover:scale-[1.02]', colTheme.brandSoft, colTheme.brandText)}
                  title={t('nav.reset')}
                  aria-label={t('nav.reset')}
                >
                  <RotateCcw size={12} />
                  {t('nav.reset')}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-2.5 mt-4">
          {summaryCards.map(item => {
            const Icon = item.icon;
            const active = filter === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setFilter(item.key)}
                className={cn(
                  'rounded-2xl border p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-sm',
                  item.className,
                  active && 'ring-2 ring-current/15 shadow-sm'
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
                    <Icon size={16} />
                  </div>
                  <span className="text-xl sm:text-2xl font-black tabular-nums">{formatNumber(item.value)}</span>
                </div>
                <div className="mt-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.08em] opacity-80">
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="shrink-0 rounded-2xl border border-black/5 bg-white/45 backdrop-blur-sm p-3 shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-center gap-2.5">
          <div className="relative flex-1 min-w-0">
            <Search className={cn(
              'absolute top-1/2 -translate-y-1/2 w-4 h-4',
              isRTL ? 'right-3.5' : 'left-3.5',
              colTheme.brandText
            )} />
            <input
              type="text"
              placeholder={t('nav.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={cn(
                'w-full py-2.5 bg-white/75 border rounded-xl outline-none transition-all font-serif shadow-inner focus:ring-2 focus:ring-black/5',
                isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3',
                colTheme.borderStrong,
                colTheme.brandTextStrong
              )}
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto custom-scrollbar shrink-0 pb-0.5 xl:pb-0">
            {filterOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={cn(
                  'px-3 py-2 rounded-xl text-xs font-bold transition-all border whitespace-nowrap',
                  filter === opt.value
                    ? `${colTheme.brand600} text-white ${colTheme.brand600.replace('bg-', 'border-')} shadow-sm`
                    : cn('bg-white/60 hover:bg-white', colTheme.brandText, colTheme.border)
                )}
              >
                {opt.label} <span className="opacity-70">· {formatNumber(opt.count)}</span>
              </button>
            ))}
          </div>

          <div className="hidden 2xl:flex items-center gap-1.5 text-[11px] text-wood/40 whitespace-nowrap px-1">
            <span>{formatNumber(filteredVocab.length)}</span>
            <span>{copy.visibleWords}</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-4 mt-2.5 pt-2.5 border-t border-black/5">
          <div className="flex items-center gap-2 min-w-0">
            <GraduationCap size={15} className={colTheme.brandText} />
            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-wood/45">{copy.learningPath}</span>
            <div className="flex items-center gap-1.5">
              {copy.pathSteps.map((step, index) => (
                <React.Fragment key={step}>
                  <span className={cn(
                    'px-2 py-1 rounded-lg text-[11px] font-semibold border',
                    index === 0 ? cn(colTheme.brandSoft, colTheme.brandText, colTheme.border) : 'bg-white/50 border-black/5 text-wood/45'
                  )}>
                    {step}
                  </span>
                  {index < copy.pathSteps.length - 1 && <span className="text-wood/20">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-wood/40" title={copy.selfCheckNote}>
            <Target size={13} />
            <span className="font-semibold">{copy.selfCheck}</span>
          </div>
        </div>
      </section>

      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-2 -mr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3.5 pb-2">
          <AnimatePresence mode="popLayout">
            {filteredVocab.map((v, index) => {
              const state: KnownState = knownMap[v.key] ?? 'unreviewed';
              const statusLabel = state === 'known'
                ? copy.knownBadge
                : state === 'unknown'
                  ? copy.reviewBadge
                  : copy.newBadge;

              return (
                <motion.article
                  key={v.key}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.16 }}
                  className={cn(
                    'group relative overflow-hidden bg-white/68 backdrop-blur-sm border rounded-[1.35rem] p-4 transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px]',
                    state === 'known'
                      ? 'border-emerald-200/80'
                      : state === 'unknown'
                        ? 'border-rose-200/80'
                        : cn(colTheme.border, colTheme.hoverBorder)
                  )}
                >
                  <div className={cn(
                    'absolute inset-x-0 top-0 h-1',
                    state === 'known'
                      ? 'bg-emerald-400'
                      : state === 'unknown'
                        ? 'bg-rose-400'
                        : colTheme.progressFill
                  )} />

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-black tabular-nums text-wood/25">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className={cn(
                          'px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.08em]',
                          state === 'known'
                            ? 'bg-emerald-50 text-emerald-700'
                            : state === 'unknown'
                              ? 'bg-rose-50 text-rose-700'
                              : 'bg-violet-50 text-violet-700'
                        )}>
                          {statusLabel}
                        </span>
                      </div>

                      <h3 className={cn(
                        'text-xl sm:text-[1.35rem] font-black leading-tight',
                        colTheme.brandTextStrong,
                        !isRTL && 'capitalize'
                      )}>
                        {v.word}
                      </h3>
                    </div>

                    <button
                      onClick={() => playWord(v.word)}
                      className={cn(
                        'shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all shadow-sm',
                        playingWord === v.word ? colTheme.audioPlaying : colTheme.audio
                      )}
                      aria-label={v.word}
                    >
                      <Volume2 size={16} className={playingWord === v.word ? 'animate-pulse' : ''} />
                    </button>
                  </div>

                  <p className="font-serif text-[15px] sm:text-base text-wood/72 leading-relaxed mt-3 min-h-[3rem]">
                    {v.definition}
                  </p>

                  {v.example && (
                    <div className={cn(
                      'mt-3 rounded-xl border px-3 py-2.5 bg-white/55',
                      colTheme.border
                    )}>
                      <p className="font-serif italic text-sm text-wood/55 leading-relaxed">
                        “{v.example}”
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-black/5">
                    <button
                      onClick={() => markWord(v.key, state === 'known' ? 'unreviewed' : 'known')}
                      className={cn(
                        'flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all border',
                        state === 'known'
                          ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm shadow-emerald-100'
                          : 'bg-white/70 text-emerald-700 border-emerald-100 hover:bg-emerald-50 hover:border-emerald-200'
                      )}
                      title={t('nav.iKnowThisWord')}
                    >
                      <Check size={13} />
                      {copy.knowAction}
                    </button>

                    <button
                      onClick={() => markWord(v.key, state === 'unknown' ? 'unreviewed' : 'unknown')}
                      className={cn(
                        'flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all border',
                        state === 'unknown'
                          ? 'bg-rose-500 text-white border-rose-500 shadow-sm shadow-rose-100'
                          : 'bg-white/70 text-rose-600 border-rose-100 hover:bg-rose-50 hover:border-rose-200'
                      )}
                      title={t('nav.needToReview')}
                    >
                      <X size={13} />
                      {copy.reviewAction}
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredVocab.length === 0 && (
          <div className="h-48 flex flex-col items-center justify-center text-center p-6">
            <div className={cn('w-12 h-12 rounded-full flex items-center justify-center mb-3', colTheme.brandSoft)}>
              <Search className={cn('w-6 h-6', colTheme.brandText)} />
            </div>
            <p className="font-serif italic text-wood/40">
              {searchTerm ? t('nav.noWordsFound') : t('nav.noWordsCategory')}
            </p>
          </div>
        )}
      </div>

      <div className={cn(
        'shrink-0 px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 border',
        colTheme.footer
      )}>
        <div className={cn('w-8 h-8 rounded-lg text-white flex items-center justify-center shrink-0', colTheme.brand600)}>
          <GraduationCap size={16} />
        </div>
        <p className="text-xs sm:text-sm font-serif leading-snug">
          {copy.selfCheckNote}
        </p>
      </div>
    </div>
  );
};
