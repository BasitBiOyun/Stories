import React, { Suspense, lazy, useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookMarked,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ClipboardList,
  Download,
  Eye,
  EyeOff,
  GraduationCap,
  Home,
  Info,
  LoaderCircle,
  CheckCircle,
  Layers,
  MapPin,
  Menu,
  X,
} from './components/ui/icons';

import { Level } from './types';
import { useBookBundle } from './hooks/useBookBundle';
import {
  loadSelfStudyGuideData,
  loadTeacherGuideData,
  type BilingualSelfStudyGuideData,
  type BilingualTeacherGuideData,
} from './core/content/bookGuideLoader';
import { cn } from './lib/utils';
import { generateBookPDF } from './lib/pdfGenerator';
import { clearReaderPosition, readReaderPosition, saveReaderPosition } from './lib/readerPosition';
import { formatHashRoute, isHomeHash, parseHashRoute, type HashRoute } from './lib/hashRoute';
import { mergeBookProgress, readBookProgress, type BookProgress } from './lib/bookProgress';
import { collectionVisuals, getStoryMeta, readerTokenVariables } from './core/content/storyCatalog';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageToggle } from './components/ui/LanguageToggle';
import { FullscreenIcon, useFullscreen } from './components/ui/FullscreenButton';
import { useMediaQuery } from './lib/useMediaQuery';
import { StoryProgressProvider, useStoryProgress } from './contexts/StoryProgressContext';

// Layout Components
// Loaded on first use: the teacher guide, the final challenge and the summary are large and not needed to start reading.
const TeacherGuide = lazy(() => import('./components/layout/TeacherGuide').then(module => ({ default: module.TeacherGuide })));
const FinalChallenge = lazy(() => import('./components/book/FinalChallenge').then(module => ({ default: module.FinalChallenge })));
const StoryMapPage = lazy(() => import('./features/story-maps/StoryMapPage').then(module => ({ default: module.StoryMapPage })));
const SummaryDashboard = lazy(() => import('./components/book/SummaryDashboard').then(module => ({ default: module.SummaryDashboard })));
import { SelfStudyGuide } from './components/layout/SelfStudyGuide';
import { HomePage } from './components/layout/HomePage';
import { AboutPage } from './components/layout/AboutPage';

// Book Components
import { StoryPage } from './components/book/StoryPage';
import { ExercisePage } from './components/book/ExercisePage';
import { MasterGlossary } from './components/book/MasterGlossary';
import { RolePicker } from './components/layout/RolePicker';
import { useUserRole } from './contexts/UserRoleContext';
import { saveBookOffline } from './lib/pwa';

const AppContent = () => {
  // --- State ---
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const code = sessionStorage.getItem('app_access_code');
    return code === 'stories_enar';
  });
  const { role, isTeacher } = useUserRole();
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = passwordInput.trim();
    if (normalized === 'stories_enar') {
      sessionStorage.setItem('app_access_code', normalized);
      setIsAuthenticated(true);
    } else {
      setErrorMsg('Incorrect password! Please try again.');
    }
  };

  // A shared or reloaded link like #/mecca/a2/5 opens that book at that page.
  const [initialRoute] = useState(() => parseHashRoute(window.location.hash));
  const [selectedProphetId, setSelectedProphetId] = useState<string | null>(initialRoute?.storyId ?? null);
  const [currentLevel, setCurrentLevel] = useState<Level | null>(initialRoute?.level ?? null);
  const [currentPageIndex, setCurrentPageIndex] = useState(initialRoute?.pageIndex ?? 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isTeacherGuideOpen, setIsTeacherGuideOpen] = useState(false);
  const [isSelfStudyOpen, setIsSelfStudyOpen] = useState(false);
  const [teacherGuideData, setTeacherGuideData] = useState<BilingualTeacherGuideData | null>(null);
  const [selfStudyGuideData, setSelfStudyGuideData] = useState<BilingualSelfStudyGuideData | null>(null);
  const [isDyslexic, setIsDyslexic] = useState(() => localStorage.getItem('reader_dyslexic') === 'true');
  const [readerScale, setReaderScale] = useState(() => {
    const stored = Number(localStorage.getItem('reader_scale'));
    return Number.isFinite(stored) && stored >= 0.85 && stored <= 1.3 ? stored : 1;
  });
  const [isWideView, setIsWideView] = useState(() => localStorage.getItem('reader_wide') === 'true');
  const isLargeDesktop = useMediaQuery('(min-width: 90rem)');
  const [isReaderSettingsOpen, setIsReaderSettingsOpen] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, boolean | null>>({});
  const [showSummary, setShowSummary] = useState(false);
  const [isQuickTOCOpen, setIsQuickTOCOpen] = useState(false);
  const [activePdfDownloads, setActivePdfDownloads] = useState<string[]>([]);
 
  useEffect(() => {
    const handleStart = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && detail.name) {
        setActivePdfDownloads(prev => [...prev, detail.name]);
      }
    };
    const handleEnd = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && detail.name) {
        setActivePdfDownloads(prev => prev.filter(n => n !== detail.name));
      }
    };
    window.addEventListener('pdf-generation-start', handleStart);
    window.addEventListener('pdf-generation-end', handleEnd);
    return () => {
      window.removeEventListener('pdf-generation-start', handleStart);
      window.removeEventListener('pdf-generation-end', handleEnd);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('reader_scale', String(readerScale));
  }, [readerScale]);

  useEffect(() => {
    localStorage.setItem('reader_dyslexic', String(isDyslexic));
  }, [isDyslexic]);

  useEffect(() => {
    localStorage.setItem('reader_wide', String(isWideView));
  }, [isWideView]);
 
  const { language, setLanguage, t, formatNumber, isRTL } = useLanguage();
  const { stats, resetStats, hydrateStats } = useStoryProgress();
  const { isSupported: canFullscreen, isFullscreen, toggleFullscreen } = useFullscreen();
  const {
    definition: currentDefinition,
    pair: currentBookPair,
    loading: isBookLoading,
    error: bookLoadError,
  } = useBookBundle(selectedProphetId, currentLevel);

  // --- Data ---
  const currentBook = useMemo(() => {
    if (!currentBookPair) return null;
    return language === 'ar' ? currentBookPair.ar : currentBookPair.en;
  }, [currentBookPair, language]);

  const currentPage = currentBook?.pages[currentPageIndex];
  const isFinalChallengePage = currentPage?.type === 'final-challenge';
  const totalPages = currentBook?.pages.length || 0;
  const progress = totalPages > 0 ? (currentPageIndex + 1) / totalPages : 0;

  // A resumed position or a hand-typed link may point past the end of the book.
  useEffect(() => {
    if (!currentBook) return;
    setCurrentPageIndex(prev => Math.min(prev, Math.max(currentBook.pages.length - 1, 0)));
  }, [currentBook, currentPageIndex]);

  useEffect(() => {
    if (!selectedProphetId || !currentLevel || !currentPage) return;
    if (showSummary) {
      clearReaderPosition(selectedProphetId, currentLevel);
      return;
    }
    saveReaderPosition(selectedProphetId, currentLevel, { pageIndex: currentPageIndex, totalPages });
  }, [selectedProphetId, currentLevel, currentPage, currentPageIndex, totalPages, showSummary]);

  // --- Book progress: pages read and exercises done, stored per book and shared by the TOC, summary and home page ---
  const [bookProgress, setBookProgress] = useState<BookProgress | null>(null);

  useEffect(() => {
    if (!selectedProphetId || !currentLevel || !currentBookPair) {
      setBookProgress(null);
      return;
    }
    const saved = readBookProgress(selectedProphetId, currentLevel);
    const pages = currentBookPair.en.pages;
    const chaptersVisited = saved.readPages
      .map(index => pages[index])
      .filter(page => page?.type === 'story')
      .map(page => page.id);
    hydrateStats({ exercisesCompleted: saved.doneExercises, chaptersVisited });
    setBookProgress(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProphetId, currentLevel, currentBookPair]);

  useEffect(() => {
    if (!selectedProphetId || !currentLevel || !currentBook) return;
    setBookProgress(
      mergeBookProgress(selectedProphetId, currentLevel, {
        readPages: [currentPageIndex],
        totalPages: currentBook.pages.length,
      }),
    );
  }, [selectedProphetId, currentLevel, currentBook, currentPageIndex]);

  useEffect(() => {
    if (!selectedProphetId || !currentLevel || stats.exercisesCompleted.size === 0) return;
    setBookProgress(mergeBookProgress(selectedProphetId, currentLevel, { doneExercises: stats.exercisesCompleted }));
  }, [selectedProphetId, currentLevel, stats.exercisesCompleted]);

  const readPageSet = useMemo(() => new Set(bookProgress?.readPages ?? []), [bookProgress]);
  const doneExerciseSet = useMemo(() => new Set(bookProgress?.doneExercises ?? []), [bookProgress]);
  const allDone = (ids: string[] | undefined) =>
    Boolean(ids && ids.length > 0 && ids.every(id => doneExerciseSet.has(id)));

  // --- URL hash: one entry per page, so the browser back button and reload keep the reader's place ---
  const currentRoute = useMemo<HashRoute | null>(
    () => (selectedProphetId && currentLevel ? { storyId: selectedProphetId, level: currentLevel, pageIndex: currentPageIndex } : null),
    [selectedProphetId, currentLevel, currentPageIndex],
  );
  const currentRouteRef = useRef(currentRoute);
  currentRouteRef.current = currentRoute;

  useEffect(() => {
    const next = formatHashRoute(currentRoute);
    const hash = window.location.hash;
    if (hash === next || (!currentRoute && isHomeHash(hash))) return;
    window.location.hash = next;
  }, [currentRoute]);

  const currentCollection = currentDefinition?.collection ?? null;

  const currentTeacherGuide = teacherGuideData
    ? (language === 'ar' ? teacherGuideData.ar : teacherGuideData.en)
    : null;
  const currentSelfStudyGuide = selfStudyGuideData
    ? (language === 'ar' ? selfStudyGuideData.ar : selfStudyGuideData.en)
    : null;

  useEffect(() => {
    setTeacherGuideData(null);
    setSelfStudyGuideData(null);
    setIsTeacherGuideOpen(false);
    setIsSelfStudyOpen(false);
  }, [currentDefinition?.storyId, currentLevel]);

  useEffect(() => {
    if (!currentDefinition || !currentLevel || !currentBookPair) return;

    const timer = window.setTimeout(() => {
      loadTeacherGuideData(currentDefinition.storyId, currentLevel)
        .then(setTeacherGuideData)
        .catch(() => undefined);
      loadSelfStudyGuideData(currentDefinition.storyId, currentLevel)
        .then(setSelfStudyGuideData)
        .catch(() => undefined);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [currentDefinition?.storyId, currentLevel, currentBookPair]);

  const openTeacherGuide = () => {
    if (!currentDefinition || !currentLevel) return;
    setIsMenuOpen(false);
    if (teacherGuideData) {
      setIsTeacherGuideOpen(true);
      return;
    }
    loadTeacherGuideData(currentDefinition.storyId, currentLevel)
      .then(data => {
        setTeacherGuideData(data);
        setIsTeacherGuideOpen(true);
      })
      .catch(error => console.error('[Teacher Guide] Unable to load guide data.', error));
  };

  // The home page's Teacher Guide shortcut opens the book and then its guide once the book is in.
  const [pendingTeacherGuide, setPendingTeacherGuide] = useState(false);
  useEffect(() => {
    if (!pendingTeacherGuide || !currentBook || !currentDefinition || !currentLevel) return;
    setPendingTeacherGuide(false);
    openTeacherGuide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingTeacherGuide, currentBook, currentDefinition, currentLevel]);

  const handleOpenTeacherGuideFromHome = (prophetId: string, level: Level) => {
    setPendingTeacherGuide(true);
    handleStartJourney(prophetId, level);
  };

  // "Save this book offline": every image and audio file of both language editions, stored by the service worker.
  const [offlineSaveState, setOfflineSaveState] = useState<'idle' | 'saving' | 'saved' | 'failed'>('idle');
  useEffect(() => { setOfflineSaveState('idle'); }, [currentBookPair]);
  const canSaveOffline = import.meta.env.PROD && typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
  const handleSaveOffline = () => {
    if (!currentBookPair || offlineSaveState === 'saving') return;
    const urls = new Set<string>();
    [currentBookPair.en, currentBookPair.ar].forEach(book => {
      book.pages.forEach(page => {
        if (page.image) urls.add(page.image);
        if (page.audioUrl) urls.add(page.audioUrl);
      });
    });
    setOfflineSaveState('saving');
    saveBookOffline([...urls])
      .then(result => setOfflineSaveState(result.failed === 0 ? 'saved' : 'failed'))
      .catch(() => setOfflineSaveState('failed'));
  };

  const openSelfStudyGuide = () => {
    if (!currentDefinition || !currentLevel) return;
    setIsMenuOpen(false);
    if (selfStudyGuideData) {
      setIsSelfStudyOpen(true);
      return;
    }
    loadSelfStudyGuideData(currentDefinition.storyId, currentLevel)
      .then(data => {
        setSelfStudyGuideData(data);
        setIsSelfStudyOpen(true);
      })
      .catch(error => console.error('[Self-Study Guide] Unable to load guide data.', error));
  };

  // Dynamic UI theme classes based on active collection
  // One palette for the reader chrome. The collection only changes the accent tokens the root
  // publishes (see collectionVisuals[...].readerTokens); the class names never change.
  const themeClasses = useMemo(() => ({
    headerBg: "bg-chrome/85 border-accent/20",
    headerSubtitle: "text-accent",
    buttonSec: "bg-accent/10 border-accent/30 text-parchment hover:bg-accent/20",
    progressTrack: "bg-accent/10",
    progressBar: "bg-accent",
    percentageText: "text-accent/80",
    mainBg: !showSummary && (currentLevel === 'A2' || currentLevel === 'B1' ? "bg-page/95" : "bg-page-deep/95"),
    cardBorder: "border-accent/20",
    navButton: "bg-accent-strong border-accent text-white hover:brightness-110 hover:scale-110",
    goldText: "text-accent",
    quoteLine: "via-accent/40",
    // Side-menu specific
    menuOverlayBg: "bg-chrome/60",
    menuBg: "bg-chrome-menu/95",
    menuBorder: "border-accent/10",
    menuAccentText: "text-accent",
    menuHoverBg: "hover:bg-accent/10",
    menuSectionHeader: "text-accent/40",
    menuItemActive: "bg-accent-strong text-white",
    menuItemHover: "hover:bg-accent/5 text-parchment/60",
    menuCloseButton: "text-accent/40 hover:text-accent",
    menuLogoContainer: "border-accent/20 bg-accent/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)]",
  }), [currentLevel, showSummary]);

  // The collection's tokens go on <html>, so portaled tooltips and overlays read the same variables as the reader.
  useEffect(() => {
    const root = document.documentElement;
    const variables = readerTokenVariables(collectionVisuals[currentCollection ?? 'prophets'].readerTokens);
    Object.entries(variables).forEach(([name, value]) => root.style.setProperty(name, value));
    root.setAttribute('data-collection', currentCollection ?? 'prophets');
    return () => {
      Object.keys(variables).forEach(name => root.style.removeProperty(name));
      root.removeAttribute('data-collection');
    };
  }, [currentCollection]);

  // One name per book everywhere: the same translated story name the library shows.
  const currentBookTitle = useMemo(() => {
    if (!currentDefinition) return currentBook?.title ?? '';
    const key = `prophet.${currentDefinition.storyId}`;
    const translated = t(key);
    if (translated && translated !== key) return translated;
    return getStoryMeta(currentDefinition.storyId)?.name ?? currentBook?.title ?? '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBook, currentDefinition, language]);

  // --- Handlers ---
  const handleStartJourney = (
    prophetId: string,
    level: Level,
    options?: { resume?: boolean; pageIndex?: number },
  ) => {
    setSelectedProphetId(prophetId);
    setCurrentLevel(level);
    setCurrentPageIndex(
      options?.pageIndex ?? (options?.resume ? readReaderPosition(prophetId, level)?.pageIndex ?? 0 : 0),
    );
    setUserAnswers({});
    setIsMenuOpen(false);
    setShowSummary(false);
    resetStats();
  };

  const handleLevelSelect = (level: Level) => {
    setCurrentLevel(level);
    setCurrentPageIndex(0);
    setUserAnswers({});
    setIsMenuOpen(false);
    setShowSummary(false);
    resetStats();
  };

  const handleReturnToLibrary = () => {
    setSelectedProphetId(null);
    setCurrentLevel(null);
    setCurrentPageIndex(0);
    setIsMenuOpen(false);
    setShowSummary(false);
    resetStats();
  };

  const handleReadAgain = () => {
    setCurrentPageIndex(0);
    setUserAnswers({});
    setShowSummary(false);
    resetStats();
  };

  const handleReviewStory = () => {
    setShowSummary(false);
  };

  // Moving on with the chapter's Quick Challenge still open: one reminder per chapter, then the reader decides.
  const [isQuickReminderOpen, setIsQuickReminderOpen] = useState(false);
  const remindedPagesRef = useRef<Set<string>>(new Set());

  const advancePage = () => {
    setIsQuickReminderOpen(false);
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const handleNextPage = () => {
    if (isQuickReminderOpen) {
      advancePage();
      return;
    }
    const quickExercise = currentPage?.type === 'story' ? currentPage.exercises?.[0] : undefined;
    const reminderKey = `${selectedProphetId}:${currentLevel}:${currentPage?.id}`;
    if (
      quickExercise &&
      currentPageIndex < totalPages - 1 &&
      !doneExerciseSet.has(quickExercise.id) &&
      !remindedPagesRef.current.has(reminderKey)
    ) {
      remindedPagesRef.current.add(reminderKey);
      setIsQuickReminderOpen(true);
      return;
    }
    advancePage();
  };

  const handleGoToQuickChallenge = () => {
    setIsQuickReminderOpen(false);
    window.dispatchEvent(new Event('reader:focus-quick-challenge'));
  };

  useEffect(() => {
    setIsQuickReminderOpen(false);
  }, [currentPageIndex, selectedProphetId, currentLevel]);

  useEffect(() => {
    if (!isQuickReminderOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsQuickReminderOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isQuickReminderOpen]);

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const applyHash = () => {
      const route = parseHashRoute(window.location.hash);
      const current = currentRouteRef.current;
      if (!route) {
        if (current) handleReturnToLibrary();
        return;
      }
      if (current && current.storyId === route.storyId && current.level === route.level) {
        if (current.pageIndex !== route.pageIndex) setCurrentPageIndex(route.pageIndex);
        setShowSummary(false);
        return;
      }
      handleStartJourney(route.storyId, route.level, { pageIndex: route.pageIndex });
    };
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in form controls
      const activeEl = document.activeElement as HTMLElement | null;
      if (
        activeEl && (
          activeEl.tagName === 'INPUT' || 
          activeEl.tagName === 'TEXTAREA' || 
          activeEl.isContentEditable
        )
      ) {
        return;
      }

      // Only navigate if a story is active, no overlays are open, and summary is not shown
      if (!selectedProphetId || showSummary || isFinalChallengePage) return;
      if (isMenuOpen || isAboutOpen || isTeacherGuideOpen || isSelfStudyOpen || isQuickTOCOpen || isReaderSettingsOpen) return;

      if (e.key === 'ArrowRight') {
        if (language === 'ar') {
          handlePrevPage();
        } else {
          handleNextPage();
        }
      } else if (e.key === 'ArrowLeft') {
        if (language === 'ar') {
          handleNextPage();
        } else {
          handlePrevPage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    selectedProphetId,
    showSummary,
    isMenuOpen,
    isAboutOpen,
    isTeacherGuideOpen,
    isSelfStudyOpen,
    isQuickTOCOpen,
    isReaderSettingsOpen,
    currentPageIndex,
    totalPages,
    language,
    isFinalChallengePage
  ]);

  // A horizontal swipe on a touch screen turns the page; sliders, inputs and open overlays are left alone.
  const swipeStartRef = useRef<{ x: number; y: number; ignore: boolean } | null>(null);
  const handleSwipeStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const target = e.target as HTMLElement | null;
    const ignore =
      !touch ||
      Boolean(target?.closest('input, textarea, select, [role="slider"], [draggable="true"], [data-no-swipe]')) ||
      showSummary || isFinalChallengePage ||
      isMenuOpen || isAboutOpen || isTeacherGuideOpen || isSelfStudyOpen || isQuickTOCOpen || isReaderSettingsOpen;
    swipeStartRef.current = touch ? { x: touch.clientX, y: touch.clientY, ignore } : null;
  };
  const handleSwipeEnd = (e: React.TouchEvent) => {
    const start = swipeStartRef.current;
    swipeStartRef.current = null;
    const touch = e.changedTouches[0];
    if (!start || start.ignore || !touch) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < 70 || Math.abs(dy) > 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const forward = isRTL ? dx > 0 : dx < 0;
    if (forward) handleNextPage();
    else handlePrevPage();
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (totalPages <= 1 || isFinalChallengePage) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    const pageIdx = Math.min(
      totalPages - 1,
      Math.max(0, Math.floor(percentage * totalPages))
    );
    setCurrentPageIndex(pageIdx);
  };

  const handleAnswer = (id: string, answer: boolean) => {
    setUserAnswers(prev => ({ ...prev, [id]: answer }));
  };

  // --- Render Helpers ---
  if (!isAuthenticated) {
    return (
      <div 
        dir={isRTL ? 'rtl' : 'ltr'}
        lang={language}
        className={cn(
          "min-h-screen bg-wood flex flex-col items-center justify-center relative overflow-hidden page-texture p-4",
          isDyslexic && language !== 'ar' && "font-dyslexic-mode"
        )}
      >

        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 w-full max-w-md bg-[#1e1915]/95 rounded-2xl p-8 border-2 border-gold/40 shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center backdrop-blur-sm">
          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold/40" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold/40" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold/40" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold/40" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6 border border-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>

          <h2 className="font-display text-2xl tracking-wide text-gold uppercase mb-2">Access Required</h2>
          <p className="font-serif text-[#F5EDD6]/70 text-[14px] leading-relaxed mb-6">
            Please enter the access code provided to you to unlock the application.
          </p>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="relative flex items-center">
              <input 
                type={showPassword ? "text" : "password"}
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="Access Code"
                className="w-full bg-[#120F0D]/90 border border-gold/30 rounded-xl pl-5 pr-12 py-3.5 text-center text-white placeholder-[#F5EDD6]/30 font-mono text-base focus:outline-none focus:border-gold/70 focus:ring-1 focus:ring-gold/50 transition-all shadow-inner"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-3.5 text-gold/60 hover:text-gold p-1 transition-colors cursor-pointer"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {errorMsg && (
              <p className="text-red-400 font-serif text-[12px] animate-pulse">
                {errorMsg}
              </p>
            )}

            <button 
              type="submit"
              className="w-full bg-gold/10 hover:bg-gold/20 text-gold border border-gold/50 rounded-xl px-6 py-3.5 font-display text-[12px] uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] active:scale-95"
            >
              Unlock App
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gold/10 flex justify-center gap-4">
            <span className="font-display text-[9px] uppercase tracking-widest text-[#F5EDD6]/40">Interactive E-Book Series</span>
          </div>
        </div>
      </div>
    );
  }

  if (!role) {
    return <RolePicker />;
  }

  if (!selectedProphetId || !currentLevel) {
    return <HomePage onStart={handleStartJourney} onOpenTeacherGuide={isTeacher ? handleOpenTeacherGuideFromHome : undefined} />;
  }

  if (bookLoadError) {
    return (
      <div className="min-h-screen bg-wood page-texture flex items-center justify-center p-6 text-center" role="alert">
        <div className="max-w-lg rounded-2xl border border-red-400/30 bg-black/30 p-8 text-parchment shadow-2xl">
          <h2 className="font-display text-xl text-red-300">Book could not be loaded</h2>
          <p className="mt-3 font-serif text-sm text-parchment/70">{bookLoadError.message}</p>
          <button onClick={handleReturnToLibrary} className="mt-6 rounded-xl border border-gold/40 px-5 py-2 font-display text-sm text-gold">
            {t('nav.returnToLibrary')}
          </button>
        </div>
      </div>
    );
  }

  if (isBookLoading || !currentBook) {
    return (
      <div className="min-h-screen bg-wood page-texture flex items-center justify-center" role="status" aria-live="polite">
        <LoaderCircle className="h-8 w-8 animate-spin text-gold" aria-hidden="true" />
        <span className="sr-only">Loading book</span>
      </div>
    );
  }

  const renderPage = () => {
    if (showSummary) {
      return (
        <Suspense fallback={null}>
          <SummaryDashboard 
            bookData={currentBook!} 
            onFinish={handleReturnToLibrary}
            onReviewStory={handleReviewStory}
            onReadAgain={handleReadAgain}
            onStartJourney={handleStartJourney}
          />
        </Suspense>
      );
    }

    if (!currentPage) return null;

    switch (currentPage.type) {
      case 'story':
        return (
          <StoryPage 
            page={currentPage} 
            allPages={currentBook?.pages || []}
            currentIndex={currentPageIndex}
            isDyslexic={isDyslexic} 
            fontSize={(currentBook?.baseFontSize || 12) * readerScale * (isLargeDesktop ? 1.15 : 1)}
            level={currentLevel}
            collectionId={currentCollection || 'prophets'}
          />
        );
      case 'map':
        return (
          <Suspense fallback={null}>
            <StoryMapPage page={currentPage} />
          </Suspense>
        );
      case 'glossary':
        return (
          <MasterGlossary
            bookData={currentBook}
            page={currentPage}
            collectionId={currentCollection || 'prophets'}
          />
        );
      case 'final-challenge':
        return (
          <Suspense fallback={null}>
            <FinalChallenge bookData={currentBook!} onComplete={() => setShowSummary(true)} />
          </Suspense>
        );
      default:
        return (
          <ExercisePage 
            page={currentPage} 
            userAnswers={userAnswers} 
            handleAnswer={handleAnswer} 
            level={currentLevel}
            collectionId={currentCollection || 'prophets'}
            onReviewComplete={currentPage.type === 'exercises' ? handleNextPage : undefined}
            onReviewGlossary={
              currentPage.type === 'vocabulary-match'
                ? () => {
                    const glossaryIndexes = currentBook.pages
                      .map((page, index) => page.type === 'glossary' ? index : -1)
                      .filter(index => index >= 0);
                    const targetIndex = glossaryIndexes[glossaryIndexes.length - 1];
                    if (typeof targetIndex === 'number') setCurrentPageIndex(targetIndex);
                  }
                : undefined
            }
          />
        );
    }
  };

  return (
    <div 
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={language}
      data-reader-wide={isWideView ? 'true' : undefined}
      className={cn(
        "h-dvh max-h-dvh bg-wood flex flex-col relative overflow-hidden page-texture",
        isDyslexic && language !== 'ar' && "font-dyslexic-mode"
      )}
    >
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Reader Header */}
      {!showSummary && (
        <header className={cn(
          "relative z-50 min-h-14 sm:min-h-16 px-3 sm:px-5 md:px-8 flex items-center transition-colors duration-500 shrink-0",
          themeClasses.headerBg
        )}>
          <div className="relative z-50 flex w-full items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="touch-target flex items-center justify-center rounded-full text-parchment transition-colors hover:bg-white/10"
                title={t('nav.menu')}
                aria-label={t('nav.menu')}
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div className="min-w-0">
                <h2
                  className="max-w-[150px] truncate font-display text-[12px] font-semibold leading-tight tracking-[-0.01em] text-parchment sm:max-w-xs sm:text-[15px] md:max-w-md md:text-[17px]"
                  title={currentBookTitle}
                >
                  <span className="sm:hidden">{currentPage?.title || currentBookTitle}</span>
                  <span className="hidden sm:inline">{currentBookTitle}</span>
                </h2>
                <span className={cn(
                  "ui-label mt-0.5 block sm:text-xs",
                  themeClasses.headerSubtitle
                )}>
                  {t('nav.level')} {currentLevel} · {t('nav.page')} {formatNumber(currentPageIndex + 1)}
                </span>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsReaderSettingsOpen(prev => !prev)}
                  className={cn(
                    "touch-target flex items-center justify-center rounded-full border text-[13px] font-semibold tracking-[-0.03em] transition-colors",
                    themeClasses.buttonSec
                  )}
                  aria-label={language === 'ar' ? 'إعدادات القراءة' : 'Reading settings'}
                  aria-expanded={isReaderSettingsOpen}
                  title={language === 'ar' ? 'إعدادات القراءة' : 'Reading settings'}
                >
                  Aa
                </button>

                <AnimatePresence>
                  {isReaderSettingsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.16, ease: 'easeOut' }}
                      className={cn(
                        "absolute top-[calc(100%+0.65rem)] z-[80] w-72 rounded-2xl border p-4 shadow-2xl backdrop-blur-2xl",
                        isRTL ? "left-0" : "right-0",
                        themeClasses.menuBg,
                        themeClasses.menuBorder
                      )}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-display text-[12px] font-semibold text-parchment">
                            {language === 'ar' ? 'حجم النص' : 'Text size'}
                          </p>
                          <p className="mt-0.5 text-[11px] text-parchment/62">
                            {language === 'ar' ? 'اضبط النص للقراءة المريحة' : 'Tune the story text for comfortable reading'}
                          </p>
                        </div>
                        <span className={cn("font-display text-[11px] font-semibold", themeClasses.goldText)}>
                          {Math.round(readerScale * 100)}%
                        </span>
                      </div>

                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setReaderScale(prev => Math.max(0.85, Number((prev - 0.1).toFixed(2))))}
                          disabled={readerScale <= 0.85}
                          className="touch-target rounded-xl bg-white/[0.06] font-display text-lg text-parchment transition-colors hover:bg-white/[0.11] disabled:opacity-30"
                          aria-label={language === 'ar' ? 'تصغير النص' : 'Decrease text size'}
                        >
                          −
                        </button>
                        <button
                          type="button"
                          onClick={() => setReaderScale(1)}
                          className="touch-target rounded-xl bg-white/[0.06] font-display text-[11px] font-semibold text-parchment transition-colors hover:bg-white/[0.11]"
                        >
                          {language === 'ar' ? 'إعادة' : 'Reset'}
                        </button>
                        <button
                          type="button"
                          onClick={() => setReaderScale(prev => Math.min(1.3, Number((prev + 0.1).toFixed(2))))}
                          disabled={readerScale >= 1.3}
                          className="touch-target rounded-xl bg-white/[0.06] font-display text-lg text-parchment transition-colors hover:bg-white/[0.11] disabled:opacity-30"
                          aria-label={language === 'ar' ? 'تكبير النص' : 'Increase text size'}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsDyslexic(prev => !prev)}
                        className="mt-3 flex w-full items-center justify-between gap-4 rounded-xl bg-white/[0.045] px-3 py-3 text-start transition-colors hover:bg-white/[0.08]"
                        aria-pressed={isDyslexic}
                      >
                        <span>
                          <span className="block font-display text-[11px] font-semibold text-parchment">
                            {language === 'ar' ? 'خط سهل للقراءة' : 'Dyslexia-friendly font'}
                          </span>
                          <span className="mt-0.5 block text-[11px] text-parchment/62">
                            OpenDyslexic
                          </span>
                        </span>
                        <span
                          dir="ltr"
                          className={cn(
                            "flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition-colors",
                            isDyslexic ? themeClasses.progressBar : "bg-white/15",
                            isDyslexic ? "justify-end" : "justify-start"
                          )}
                        >
                          <span className="h-4 w-4 rounded-full bg-white shadow" />
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsWideView(prev => !prev)}
                        className="mt-2 hidden w-full items-center justify-between gap-4 rounded-xl bg-white/[0.045] px-3 py-3 text-start transition-colors hover:bg-white/[0.08] lg:flex"
                        aria-pressed={isWideView}
                        data-wide-view-toggle
                      >
                        <span>
                          <span className="block font-display text-[11px] font-semibold text-parchment">
                            {language === 'ar' ? 'عرض واسع' : 'Wide view'}
                          </span>
                          <span className="mt-0.5 block text-[11px] text-parchment/62">
                            {language === 'ar' ? 'يملأ النص واللوحات الشاشة' : 'Text and panels fill the screen'}
                          </span>
                        </span>
                        <span
                          dir="ltr"
                          className={cn(
                            "flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition-colors",
                            isWideView ? themeClasses.progressBar : "bg-white/15",
                            isWideView ? "justify-end" : "justify-start"
                          )}
                        >
                          <span className="h-4 w-4 rounded-full bg-white shadow" />
                        </span>
                      </button>

                      {canFullscreen && (
                        <button
                          type="button"
                          onClick={() => { void toggleFullscreen(); }}
                          className="mt-2 flex w-full items-center justify-between gap-4 rounded-xl bg-white/[0.045] px-3 py-3 text-start transition-colors hover:bg-white/[0.08]"
                          aria-pressed={isFullscreen}
                        >
                          <span className="block font-display text-[11px] font-semibold text-parchment">
                            {isFullscreen
                              ? (language === 'ar' ? 'الخروج من ملء الشاشة' : 'Exit full screen')
                              : (language === 'ar' ? 'ملء الشاشة' : 'Full screen')}
                          </span>
                          <span className="text-parchment/70"><FullscreenIcon size={17} /></span>
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {isFinalChallengePage ? (
                <span
                  className={cn(
                    "min-w-11 h-11 px-3 flex items-center justify-center rounded-full border font-display text-[11px] font-semibold uppercase",
                    themeClasses.buttonSec
                  )}
                  title={language === 'ar' ? 'لغة التحدي ثابتة أثناء المحاولة' : 'Challenge language is locked during the attempt'}
                  aria-label={language === 'ar' ? 'لغة التحدي: العربية' : 'Challenge language: English'}
                >
                  {language.toUpperCase()}
                </span>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                    className={cn(
                      "ui-control ui-label sm:hidden",
                      themeClasses.buttonSec
                    )}
                    aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                  >
                    {language === 'en' ? 'AR' : 'EN'}
                  </button>

                  <div className="hidden shrink-0 sm:block">
                    <LanguageToggle />
                  </div>
                </>
              )}

              <button 
                onClick={handleReturnToLibrary}
                className={cn(
                  "ui-control",
                  themeClasses.buttonSec
                )}
                title={t('nav.returnToLibrary')}
                aria-label={t('nav.returnToLibrary')}
              >
                <Home className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[360px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center xl:flex 2xl:w-[520px]"
            aria-label="Surah Yusuf 12:111"
          >
            <p
              dir="rtl"
              lang="ar"
              className={cn("text-[13px] font-semibold leading-tight 2xl:text-[15px]", themeClasses.goldText)}
              style={{ fontFamily: 'Arakom, sans-serif' }}
            >
              ﴿لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ﴾
            </p>
            {language === 'ar' ? (
              <p dir="rtl" lang="ar" className="mt-0.5 text-[11px] font-medium leading-tight text-parchment/62 2xl:text-xs">
                سُورَةُ يُوسُف، الآيَة ١١١
              </p>
            ) : (
              <p
                dir="ltr"
                lang="en"
                className="mt-0.5 text-[11px] font-medium leading-tight text-parchment/70 2xl:text-xs"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                “In their stories there is truly a lesson for people of understanding.”
                <span className="ms-1 text-parchment/50">Yusuf 12:111</span>
              </p>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/[0.06]" aria-hidden="true">
            <motion.div
              initial={false}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={cn("h-full", themeClasses.progressBar)}
              style={{ marginInlineStart: isRTL ? 'auto' : 0 }}
            />
          </div>

          {isReaderSettingsOpen && (
            <button
              type="button"
              className="fixed inset-0 z-40 cursor-default"
              aria-label={language === 'ar' ? 'إغلاق إعدادات القراءة' : 'Close reading settings'}
              onClick={() => setIsReaderSettingsOpen(false)}
            />
          )}
        </header>
      )}

      {/* Main Content Area */}
      <main
        className="flex-1 relative z-10 flex flex-col overflow-hidden min-h-0"
        onTouchStart={handleSwipeStart}
        onTouchEnd={handleSwipeEnd}
      >
        <div className={cn(
          "flex-1 w-full relative page-texture transition-all duration-500 flex flex-col overflow-hidden min-h-0",
          themeClasses.mainBg
        )}>
          <div className="flex-1 overflow-hidden min-h-0 flex flex-col">
            <div className={cn(
              "w-full max-w-[1700px] desk:max-w-[1900px] wide:max-w-none mx-auto h-full flex flex-col min-h-0",
              !showSummary && "p-3 sm:p-5 md:p-7 lg:py-7 lg:px-10 xl:px-14 2xl:px-18 wide:lg:px-6 wide:xl:px-8 wide:2xl:px-10"
            )}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={showSummary ? 'summary' : `${currentLevel}-${currentPageIndex}`}
                  initial={{ opacity: 0, scale: showSummary ? 1.05 : 1, y: showSummary ? 0 : 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: showSummary ? 0.95 : 1, y: showSummary ? 0 : -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-full flex flex-col overflow-hidden min-h-0"
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* Reader Navigation Dock */}
      {!showSummary && !isFinalChallengePage && (
        <footer className={cn(
          "relative z-50 min-h-[52px] sm:min-h-14 px-2.5 sm:px-5 md:px-8 grid grid-cols-[1fr_auto_1fr] items-center gap-2 transition-colors duration-500 shrink-0",
          themeClasses.headerBg
        )}>
          <div className="relative flex min-w-0 items-center justify-start">
            <button 
              onClick={() => setIsQuickTOCOpen(prev => !prev)}
              className="touch-target flex max-w-full items-center gap-2 rounded-xl px-2.5 text-parchment/80 transition-colors hover:bg-white/[0.08] hover:text-parchment"
              title={t('nav.tableOfContents')}
              aria-label={t('nav.tableOfContents')}
              aria-expanded={isQuickTOCOpen}
            >
              <BookMarked className={cn(themeClasses.goldText, "h-4 w-4 shrink-0")} />
              <span className="truncate font-display text-[12px] font-semibold sm:text-[13px] md:text-[14px]">
                <span className="hidden sm:inline">{t('nav.page')} </span>
                {formatNumber(currentPageIndex + 1)} / {formatNumber(totalPages)}
              </span>
              <ChevronUp className={cn("h-3 w-3 shrink-0 opacity-45 transition-transform", isQuickTOCOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {isQuickTOCOpen && (
                <>
                  <button
                    type="button"
                    className="fixed inset-0 z-40 cursor-default"
                    aria-label={language === 'ar' ? 'إغلاق الفهرس' : 'Close table of contents'}
                    onClick={() => setIsQuickTOCOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className={cn(
                      "absolute bottom-[calc(100%+0.7rem)] z-50 w-[min(25rem,calc(100vw-1.5rem))] rounded-2xl border p-3 shadow-2xl backdrop-blur-2xl sm:p-4",
                      themeClasses.menuBg,
                      themeClasses.menuBorder,
                      isRTL ? "right-0" : "left-0"
                    )}
                  >
                    <div className="mb-2 flex items-center justify-between gap-4 px-1">
                      <h4 className={cn("font-display text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em]", themeClasses.goldText)}>
                        {t('nav.tableOfContents')}
                      </h4>
                      <span className="font-display text-[11px] sm:text-[12px] text-white/50">
                        {formatNumber(totalPages)} {language === 'ar' ? (totalPages === 2 ? 'صفحتان' : totalPages >= 3 && totalPages <= 10 ? 'صفحات' : 'صفحة') : "pages"}
                      </span>
                    </div>

                    <div className="max-h-[min(58vh,24rem)] space-y-1 overflow-y-auto pe-1 custom-scrollbar">
                      {currentBook?.pages.map((page, idx) => {
                        const isActive = currentPageIndex === idx;
                        const isStorySection = page.type === 'story' || page.type === 'map';
                        const prevPage = idx > 0 ? currentBook.pages[idx - 1] : null;
                        const prevIsStorySection = prevPage ? prevPage.type === 'story' || prevPage.type === 'map' : null;
                        const sectionHeading = prevIsStorySection === isStorySection
                          ? null
                          : (isStorySection ? t('nav.tocStory') : t('nav.tocPractice'));
                        return (
                          <React.Fragment key={page.id}>
                          {sectionHeading && (
                            <div
                              role="presentation"
                              className={cn(
                                "flex items-center gap-3 px-1 pb-1 font-display text-[11px] font-semibold uppercase tracking-[0.16em]",
                                idx === 0 ? "pt-0.5" : "pt-3 mt-2 border-t border-white/10",
                                isStorySection ? "text-white/45" : themeClasses.goldText
                              )}
                            >
                              <span>{sectionHeading}</span>
                              <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
                            </div>
                          )}
                          <button
                            type="button"
                            aria-current={isActive ? 'page' : undefined}
                            onClick={() => {
                              setCurrentPageIndex(idx);
                              setIsQuickTOCOpen(false);
                            }}
                            className={cn(
                              "flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2 text-start transition-colors",
                              isRTL && "text-right",
                              isActive
                                ? themeClasses.menuItemActive
                                : "text-parchment/68 hover:bg-white/[0.06] hover:text-white"
                            )}
                          >
                            <span
                              className={cn(
                                "w-8 shrink-0 text-center font-display text-[11px] sm:text-[12px] font-semibold",
                                readPageSet.has(idx) && !isActive ? "text-emerald-300" : "opacity-65"
                              )}
                              aria-label={readPageSet.has(idx) ? (language === 'ar' ? 'مقروءة' : 'Read') : undefined}
                            >
                              {readPageSet.has(idx) && !isActive ? '✓' : page.type === 'map' ? <MapPin size={15} className="mx-auto" aria-label={t('map.label')} /> : formatNumber(idx + 1)}
                            </span>
                            <span className="min-w-0 flex-1 truncate font-display text-[13px] font-medium sm:text-[14px]">
                              {page.title}
                            </span>
                            {allDone(page.exercises?.map(exercise => exercise.id)) && (
                              <span className="shrink-0 rounded-full bg-emerald-500/15 px-1.5 py-0.5 font-display text-[11px] font-semibold text-emerald-300">
                                {page.type === 'story' ? 'QC ✓' : '✓'}
                              </span>
                            )}
                            {allDone(page.languageFocusExercises?.map(exercise => exercise.id)) && (
                              <span className="shrink-0 rounded-full bg-emerald-500/15 px-1.5 py-0.5 font-display text-[11px] font-semibold text-emerald-300">
                                LF ✓
                              </span>
                            )}
                            {isActive && (
                              <span className={cn("h-2 w-2 shrink-0 rounded-full", themeClasses.progressBar)} />
                            )}
                          </button>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="relative flex items-center gap-2">
            <AnimatePresence>
              {isQuickReminderOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  role="dialog"
                  aria-labelledby="quick-reminder-title"
                  data-quick-reminder
                  className="absolute bottom-[calc(100%+10px)] left-1/2 z-50 w-[min(300px,calc(100vw-24px))] -translate-x-1/2 rounded-panel bg-white p-4 text-start shadow-[0_18px_48px_rgba(0,0,0,0.28)] ring-1 ring-black/10"
                >
                  <p id="quick-reminder-title" className="font-display text-[14px] font-semibold text-wood">{t('nav.quickChallengeFirst')}</p>
                  <p className="mt-1 font-serif text-[13px] leading-snug text-wood/70">{t('nav.quickChallengeFirstHint')}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleGoToQuickChallenge}
                      className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full bg-brand-700 px-4 font-display text-[12px] font-semibold text-white transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                    >
                      {t('nav.goToQuickChallenge')}
                    </button>
                    <button
                      type="button"
                      onClick={advancePage}
                      className="inline-flex min-h-10 items-center justify-center rounded-full px-4 font-display text-[12px] font-semibold text-wood/70 ring-1 ring-black/10 transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      {t('nav.skipForNow')}
                    </button>
                  </div>
                  <span aria-hidden="true" className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white ring-1 ring-black/10" />
                </motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={handlePrevPage}
              disabled={currentPageIndex === 0}
              className={cn(
                "ui-control disabled:cursor-not-allowed disabled:opacity-25 active:scale-95",
                themeClasses.buttonSec
              )}
              title={t('nav.back')}
              aria-label={t('nav.back')}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button 
              onClick={handleNextPage}
              disabled={currentPageIndex === totalPages - 1}
              className={cn(
                "ui-control disabled:cursor-not-allowed disabled:opacity-25 active:scale-95",
                themeClasses.navButton
              )}
              title={t('nav.next')}
              aria-label={t('nav.next')}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden min-w-0 items-center justify-end md:flex">
            <span className="truncate font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-parchment/55 lg:text-[12px]">
              {currentCollection === 'history' ? t('home.collection2') : currentCollection === 'turkish' ? t('home.collection3') : t('home.collection1')}
            </span>
          </div>
        </footer>
      )}

      {/* Reader Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("fixed inset-0 z-[200] backdrop-blur-sm", themeClasses.menuOverlayBg)}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: isRTL ? 340 : -340 }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? 340 : -340 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "flex h-full w-[min(22rem,88vw)] flex-col border-r p-5 shadow-2xl backdrop-blur-2xl sm:p-7",
                isRTL && "ml-auto border-l border-r-0",
                themeClasses.menuBg,
                themeClasses.menuBorder
              )}
              onClick={e => e.stopPropagation()}
              aria-label={t('nav.mainMenu')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className={cn("font-display text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em]", themeClasses.menuAccentText)}>
                    {t('nav.mainMenu')}
                  </p>
                  <h3 className="mt-1 truncate font-display text-lg font-semibold text-parchment">
                    {currentBookTitle}
                  </h3>
                  <p className="mt-1 text-[13px] text-parchment/55">
                    {t('nav.level')} {currentLevel} · {t('nav.page')} {formatNumber(currentPageIndex + 1)} / {formatNumber(totalPages)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className={cn("touch-target flex items-center justify-center rounded-full transition-colors hover:bg-white/[0.06]", themeClasses.menuCloseButton)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="mt-7 space-y-2">
                <button 
                  onClick={handleReturnToLibrary}
                  className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment transition-colors", themeClasses.menuHoverBg)}
                >
                  <Home size={21} className={themeClasses.menuAccentText} />
                  <span className="font-display text-[14px] sm:text-[15px] font-semibold">{t('nav.libraryHome')}</span>
                </button>
              </div>

              <div className="mt-7">
                <h4 className={cn("px-4 font-display text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em]", themeClasses.menuSectionHeader)}>
                  {t('nav.guidesResources')}
                </h4>

                <div className="mt-2 space-y-1">
                  {isTeacher ? (
                    <button 
                      onClick={openTeacherGuide}
                      className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment transition-colors", themeClasses.menuHoverBg)}
                    >
                      <GraduationCap size={21} className={themeClasses.menuAccentText} />
                      <span className="font-display text-[14px] sm:text-[15px] font-semibold">{t('nav.teacherGuide')}</span>
                    </button>
                  ) : (
                    <button 
                      onClick={openSelfStudyGuide}
                      className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment transition-colors", themeClasses.menuHoverBg)}
                    >
                      <ClipboardList size={21} className={themeClasses.menuAccentText} />
                      <span className="font-display text-[14px] sm:text-[15px] font-semibold">{t('nav.selfStudyGuide')}</span>
                    </button>
                  )}

                  <button 
                    data-pdf-locked="true"
                    aria-disabled="true"
                    onClick={() => {
                      currentBook && generateBookPDF(currentBook);
                      setIsMenuOpen(false);
                    }}
                    className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment transition-colors", themeClasses.menuHoverBg)}
                  >
                    <Download size={21} className={themeClasses.menuAccentText} />
                    <span className="font-display text-[14px] sm:text-[15px] font-semibold">{t('nav.downloadPdf')}</span>
                  </button>

                  {canSaveOffline && (
                    <button
                      type="button"
                      onClick={handleSaveOffline}
                      disabled={offlineSaveState === 'saving' || offlineSaveState === 'saved'}
                      aria-live="polite"
                      data-save-offline={offlineSaveState}
                      className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment transition-colors disabled:opacity-80", themeClasses.menuHoverBg)}
                    >
                      {offlineSaveState === 'saved'
                        ? <CheckCircle size={21} className="text-emerald-400" />
                        : offlineSaveState === 'saving'
                          ? <LoaderCircle size={21} className={cn('animate-spin', themeClasses.menuAccentText)} />
                          : <Layers size={21} className={themeClasses.menuAccentText} />}
                      <span className="font-display text-[14px] sm:text-[15px] font-semibold">
                        {offlineSaveState === 'saved' ? t('nav.savedOffline')
                          : offlineSaveState === 'saving' ? t('nav.savingOffline')
                          : offlineSaveState === 'failed' ? t('nav.saveOfflineFailed')
                          : t('nav.saveOffline')}
                      </span>
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsAboutOpen(true);
                  }}
                  className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment/80 transition-colors", themeClasses.menuHoverBg)}
                  data-about-link
                >
                  <Info size={21} className={themeClasses.menuAccentText} />
                  <span className="font-display text-[14px] sm:text-[15px] font-semibold">{t('nav.aboutSources')}</span>
                </button>
              </div>

            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <AboutPage isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      {/* Teacher Guide Overlay */}
      {isTeacher && (
        <Suspense fallback={null}>
          <TeacherGuide 
            isOpen={isTeacherGuideOpen} 
            onClose={() => setIsTeacherGuideOpen(false)} 
            content={currentTeacherGuide?.content || []}
            pages={currentBook?.pages || []}
            bookTitle={currentBookTitle}
            metadata={currentTeacherGuide?.metadata}
            bookId={currentBook?.id}
            level={currentLevel || undefined}
            collectionId={currentCollection || 'prophets'}
          />
        </Suspense>
      )}

      {/* Self-Study Guide Overlay (Student Guide) */}
      <SelfStudyGuide 
        isOpen={isSelfStudyOpen} 
        onClose={() => setIsSelfStudyOpen(false)} 
        content={currentSelfStudyGuide?.content || []}
        pages={currentBook?.pages || []}
        bookTitle={currentBookTitle}
        studentGuideText={currentSelfStudyGuide?.text}
        studentGuideSections={currentSelfStudyGuide?.sections}
        metadata={currentSelfStudyGuide?.metadata}
        title={t('nav.studentSelfStudyGuide')}
        subtitle={t('nav.reflectionPractice')}
        footerText={t('nav.interactiveEbookSeries')}
        collectionId={currentCollection || 'prophets'}
        level={currentLevel}
      />

      {/* Background PDF Generation Notification Card */}
      <AnimatePresence>
        {activePdfDownloads.map((name) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-[#1E293B]/95 text-white p-4 pr-5 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md max-w-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="font-display font-medium text-[11px] uppercase tracking-widest text-amber-400">Background Download</h5>
              <p className="font-serif text-[13px] text-slate-200 truncate mt-0.5" title={name}>
                Generating PDF for {name}...
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const App = () => (
  <StoryProgressProvider>
    <AppContent />
  </StoryProgressProvider>
);

export default App;
