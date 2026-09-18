import React, { useState, useEffect, useMemo } from 'react';
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
  LoaderCircle,
  Menu,
  X,
} from './components/ui/icons';

import { Level } from './types';
import { useBookBundle } from './hooks/useBookBundle';
import { cn } from './lib/utils';
import { generateBookPDF } from './lib/pdfGenerator';
import { useLanguage } from './contexts/LanguageContext';
import { LanguageToggle } from './components/ui/LanguageToggle';
import { StoryProgressProvider, useStoryProgress } from './contexts/StoryProgressContext';

// Layout Components
import { TeacherGuide } from './components/layout/TeacherGuide';
import { SelfStudyGuide } from './components/layout/SelfStudyGuide';
import { HomePage } from './components/layout/HomePage';

// Book Components
import { StoryPage } from './components/book/StoryPage';
import { InteractiveMapPage } from './components/book/InteractiveMapPage';
import { ExercisePage } from './components/book/ExercisePage';
import { MasterGlossary } from './components/book/MasterGlossary';
import { FinalChallenge } from './components/book/FinalChallenge';
import { SummaryDashboard } from './components/book/SummaryDashboard';
import { ParchmentEffect } from './components/ui/ParchmentEffect';

const AppContent = () => {
  // --- State ---
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const code = sessionStorage.getItem('app_access_code');
    return code === 'stories_enar';
  });
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

  const [selectedProphetId, setSelectedProphetId] = useState<string | null>(null);
  const [currentLevel, setCurrentLevel] = useState<Level | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeacherGuideOpen, setIsTeacherGuideOpen] = useState(false);
  const [isSelfStudyOpen, setIsSelfStudyOpen] = useState(false);
  const [isDyslexic, setIsDyslexic] = useState(() => localStorage.getItem('reader_dyslexic') === 'true');
  const [readerScale, setReaderScale] = useState(() => {
    const stored = Number(localStorage.getItem('reader_scale'));
    return Number.isFinite(stored) && stored >= 0.85 && stored <= 1.3 ? stored : 1;
  });
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
 
  const { language, setLanguage, t, formatNumber, isRTL } = useLanguage();
  const { resetStats } = useStoryProgress();
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
  const totalPages = currentBook?.pages.length || 0;
  const progress = totalPages > 0 ? (currentPageIndex + 1) / totalPages : 0;

  const currentCollection = currentDefinition?.collection ?? null;

  // Dynamic UI theme classes based on active collection
  const themeClasses = useMemo(() => {
    if (currentCollection === 'history') {
      return {
        headerBg: "bg-emerald-950/85 border-emerald-500/20",
        headerSubtitle: "text-emerald-400",
        buttonSec: "bg-emerald-500/10 border-emerald-500/30 text-parchment hover:bg-emerald-500/20",
        progressTrack: "bg-emerald-500/10",
        progressBar: "bg-emerald-500",
        percentageText: "text-emerald-400/80",
        mainBg: !showSummary && (currentLevel === 'A2' || currentLevel === 'B1' 
          ? "bg-[#F4F7F5]/95" 
          : "bg-[#EDF2EE]/95"),
        cardBorder: "border-emerald-500/20",
        navButton: "bg-emerald-700 border-emerald-500 text-white hover:bg-emerald-800 hover:scale-110",
        goldText: "text-emerald-400",
        quoteLine: "via-emerald-500/40",
        // Side-menu specific
        menuOverlayBg: "bg-emerald-950/60",
        menuBg: "bg-[#042416]/95",
        menuBorder: "border-emerald-500/10",
        menuAccentText: "text-emerald-400",
        menuHoverBg: "hover:bg-emerald-500/10",
        menuSectionHeader: "text-emerald-400/40",
        menuItemActive: "bg-emerald-600 text-white",
        menuItemHover: "hover:bg-emerald-500/5 text-parchment/60",
        menuCloseButton: "text-emerald-400/40 hover:text-emerald-400",
        menuLogoContainer: "border-emerald-500/20 bg-emerald-500/10 shadow-[0_2px_10px_rgba(16,185,129,0.15)]",
      };
    } else if (currentCollection === 'turkish') {
      return {
        headerBg: "bg-[#0D1D2C]/85 border-[#22D3EE]/20",
        headerSubtitle: "text-[#22D3EE]",
        buttonSec: "bg-[#22D3EE]/10 border-[#22D3EE]/30 text-parchment hover:bg-[#22D3EE]/20",
        progressTrack: "bg-[#22D3EE]/10",
        progressBar: "bg-[#22D3EE]",
        percentageText: "text-[#22D3EE]/80",
        mainBg: !showSummary && (currentLevel === 'A2' || currentLevel === 'B1' 
          ? "bg-[#F2F6F9]/95" 
          : "bg-[#EAF0F4]/95"),
        cardBorder: "border-[#22D3EE]/20",
        navButton: "bg-sky-700 border-sky-450 text-white hover:bg-sky-850 hover:scale-110",
        goldText: "text-[#22D3EE]",
        quoteLine: "via-[#22D3EE]/40",
        // Side-menu specific
        menuOverlayBg: "bg-[#06121D]/60",
        menuBg: "bg-[#0a1826]/95",
        menuBorder: "border-[#22D3EE]/10",
        menuAccentText: "text-[#22D3EE]",
        menuHoverBg: "hover:bg-[#22D3EE]/10",
        menuSectionHeader: "text-[#22D3EE]/40",
        menuItemActive: "bg-sky-700 text-white",
        menuItemHover: "hover:bg-[#22D3EE]/5 text-parchment/60",
        menuCloseButton: "text-[#22D3EE]/40 hover:text-[#22D3EE]",
        menuLogoContainer: "border-[#22D3EE]/20 bg-[#22D3EE]/10 shadow-[0_2px_10px_rgba(34,211,238,0.15)]",
      };
    } else {
      // Default 'prophets'
      return {
        headerBg: "bg-amber-950/80 border-amber-400/20",
        headerSubtitle: "text-gold",
        buttonSec: "bg-amber-400/10 border-amber-400/30 text-parchment hover:bg-amber-400/20",
        progressTrack: "bg-gold/10",
        progressBar: "bg-gold",
        percentageText: "text-gold/60",
        mainBg: !showSummary && (currentLevel === 'A2' || currentLevel === 'B1' 
          ? "bg-orange-50/95" 
          : "bg-parchment/95"),
        cardBorder: "border-amber-400/10",
        navButton: currentLevel === 'A2' || currentLevel === 'B1' 
          ? "bg-amber-600 border-amber-400 text-white hover:bg-amber-700 hover:scale-110" 
          : "bg-gold border-gold/40 text-white hover:bg-gold/80 hover:scale-110",
        goldText: "text-gold",
        quoteLine: "via-gold/40",
        // Side-menu specific
        menuOverlayBg: "bg-[#14221a]/60",
        menuBg: "bg-[#14221a]/95",
        menuBorder: "border-amber-400/10",
        menuAccentText: "text-gold",
        menuHoverBg: "hover:bg-gold/10",
        menuSectionHeader: "text-gold/40",
        menuItemActive: "bg-gold text-white",
        menuItemHover: "hover:bg-gold/5 text-parchment/60",
        menuCloseButton: "text-gold/40 hover:text-gold",
        menuLogoContainer: "border-gold/20 bg-gold/10 shadow-[0_2px_10px_rgba(212,175,55,0.15)]",
      };
    }
  }, [currentCollection, currentLevel, showSummary]);

  const currentBookTitle = useMemo(() => {
    if (!currentDefinition) return currentBook?.title ?? '';
    return currentDefinition.titles[language];
  }, [currentBook, currentDefinition, language]);

  // --- Handlers ---
  const handleStartJourney = (prophetId: string, level: Level) => {
    setSelectedProphetId(prophetId);
    setCurrentLevel(level);
    setCurrentPageIndex(0);
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

  const handleNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

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
      if (!selectedProphetId || showSummary) return;
      if (isMenuOpen || isTeacherGuideOpen || isSelfStudyOpen || isQuickTOCOpen || isReaderSettingsOpen) return;

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
    isTeacherGuideOpen,
    isSelfStudyOpen,
    isQuickTOCOpen,
    isReaderSettingsOpen,
    currentPageIndex,
    totalPages,
    language
  ]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (totalPages <= 1) return;
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
        <ParchmentEffect />

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

  if (!selectedProphetId || !currentLevel) {
    return <HomePage onStart={handleStartJourney} />;
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
        <SummaryDashboard 
          bookData={currentBook!} 
          onFinish={handleReturnToLibrary}
          onReviewStory={handleReviewStory}
          onReadAgain={handleReadAgain}
          onStartJourney={handleStartJourney}
        />
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
            fontSize={(currentBook?.baseFontSize || 12) * readerScale}
            level={currentLevel}
            collectionId={currentCollection || 'prophets'}
          />
        );
      case 'map':
        return (
          <InteractiveMapPage 
            page={currentPage}
            collectionId={currentCollection || 'prophets'}
          />
        );
      case 'glossary': {
        const challengeIndex = currentBook.pages.findIndex(page => page.type === 'vocabulary-match');
        const challengePage = challengeIndex >= 0 ? currentBook.pages[challengeIndex] : null;
        const nextPage = currentBook.pages[currentPageIndex + 1];
        const canStartChallenge = challengeIndex >= 0 && nextPage?.type === 'vocabulary-match';

        return (
          <MasterGlossary
            bookData={currentBook}
            page={currentPage}
            collectionId={currentCollection || 'prophets'}
            onStartChallenge={canStartChallenge ? () => setCurrentPageIndex(challengeIndex) : undefined}
            challengeWordCount={challengePage?.vocabularyPairs?.length ?? 0}
          />
        );
      }
      case 'final-challenge':
        return <FinalChallenge bookData={currentBook!} onComplete={() => setShowSummary(true)} />;
      default:
        return (
          <ExercisePage 
            page={currentPage} 
            userAnswers={userAnswers} 
            handleAnswer={handleAnswer} 
            level={currentLevel}
            collectionId={currentCollection || 'prophets'}
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
      className={cn(
        "h-dvh max-h-dvh bg-wood flex flex-col relative overflow-hidden page-texture",
        isDyslexic && language !== 'ar' && "font-dyslexic-mode"
      )}
    >
      {/* Living Parchment Effect */}
      <ParchmentEffect />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
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
                  {currentBookTitle}
                </h2>
                <span className={cn(
                  "mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.16em] sm:text-[10px]",
                  themeClasses.headerSubtitle
                )}>
                  {t('nav.level')} {formatNumber(currentLevel || '')} · {t('nav.page')} {formatNumber(currentPageIndex + 1)}
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
                          <p className="mt-0.5 text-[10px] text-parchment/50">
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
                          <span className="mt-0.5 block text-[9px] text-parchment/45">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className={cn(
                  "touch-target flex items-center justify-center rounded-full border font-display text-[10px] font-semibold uppercase sm:hidden",
                  themeClasses.buttonSec
                )}
                aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              >
                {language === 'en' ? 'AR' : 'EN'}
              </button>

              <div className="hidden shrink-0 sm:block">
                <LanguageToggle />
              </div>

              <button 
                onClick={handleReturnToLibrary}
                className={cn(
                  "touch-target hidden items-center justify-center rounded-full border transition-colors sm:flex",
                  themeClasses.buttonSec
                )}
                title={t('nav.returnToLibrary')}
                aria-label={t('nav.returnToLibrary')}
              >
                <Home className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
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
      <main className="flex-1 relative z-10 flex flex-col overflow-hidden min-h-0">
        <div className={cn(
          "flex-1 w-full relative page-texture transition-all duration-500 flex flex-col overflow-hidden min-h-0",
          themeClasses.mainBg
        )}>
          <div className="flex-1 overflow-hidden min-h-0 flex flex-col">
            <div className={cn(
              currentPage?.type === 'map' ? "w-full h-full" : "w-full max-w-[1700px] mx-auto h-full flex flex-col min-h-0",
              !showSummary && currentPage?.type !== 'map' && "p-3 sm:p-5 md:p-7 lg:py-7 lg:px-10 xl:px-14 2xl:px-18"
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
      {!showSummary && (
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
              <span className="truncate font-display text-[10px] font-semibold sm:text-[11px]">
                {t('nav.page')} {formatNumber(currentPageIndex + 1)} / {formatNumber(totalPages)}
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
                      <h4 className={cn("font-display text-[11px] font-semibold uppercase tracking-[0.16em]", themeClasses.goldText)}>
                        {t('nav.tableOfContents')}
                      </h4>
                      <span className="font-display text-[10px] text-white/45">
                        {formatNumber(totalPages)} {language === 'ar' ? "صفحة" : "pages"}
                      </span>
                    </div>

                    <div className="max-h-[min(58vh,24rem)] space-y-1 overflow-y-auto pe-1 custom-scrollbar">
                      {currentBook?.pages.map((page, idx) => {
                        const isActive = currentPageIndex === idx;
                        return (
                          <button
                            key={page.id}
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
                            <span className="w-7 shrink-0 text-center font-display text-[10px] font-semibold opacity-60">
                              {formatNumber(idx + 1)}
                            </span>
                            <span className="min-w-0 flex-1 truncate font-display text-[11px] font-medium sm:text-[12px]">
                              {page.title}
                            </span>
                            {isActive && (
                              <span className={cn("h-2 w-2 shrink-0 rounded-full", themeClasses.progressBar)} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrevPage}
              disabled={currentPageIndex === 0}
              className={cn(
                "touch-target flex items-center justify-center rounded-full border transition-all disabled:cursor-not-allowed disabled:opacity-25 active:scale-95",
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
                "touch-target flex items-center justify-center rounded-full border transition-all disabled:cursor-not-allowed disabled:opacity-25 active:scale-95",
                themeClasses.navButton
              )}
              title={t('nav.next')}
              aria-label={t('nav.next')}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden min-w-0 items-center justify-end md:flex">
            <span className="truncate font-display text-[9px] font-semibold uppercase tracking-[0.16em] text-parchment/48 lg:text-[10px]">
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
                  <p className={cn("font-display text-[10px] font-semibold uppercase tracking-[0.18em]", themeClasses.menuAccentText)}>
                    {t('nav.mainMenu')}
                  </p>
                  <h3 className="mt-1 truncate font-display text-lg font-semibold text-parchment">
                    {currentBookTitle}
                  </h3>
                  <p className="mt-1 text-[11px] text-parchment/45">
                    {t('nav.level')} {formatNumber(currentLevel || '')} · {t('nav.page')} {formatNumber(currentPageIndex + 1)} / {formatNumber(totalPages)}
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
                  <Home size={19} className={themeClasses.menuAccentText} />
                  <span className="font-display text-[12px] font-semibold">{t('nav.libraryHome')}</span>
                </button>
              </div>

              <div className="mt-7">
                <h4 className={cn("px-4 font-display text-[9px] font-semibold uppercase tracking-[0.18em]", themeClasses.menuSectionHeader)}>
                  {t('nav.guidesResources')}
                </h4>

                <div className="mt-2 space-y-1">
                  <button 
                    onClick={() => {
                      setIsTeacherGuideOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment transition-colors", themeClasses.menuHoverBg)}
                  >
                    <GraduationCap size={19} className={themeClasses.menuAccentText} />
                    <span className="font-display text-[12px] font-semibold">{t('nav.teacherGuide')}</span>
                  </button>

                  <button 
                    onClick={() => {
                      setIsSelfStudyOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment transition-colors", themeClasses.menuHoverBg)}
                  >
                    <ClipboardList size={19} className={themeClasses.menuAccentText} />
                    <span className="font-display text-[12px] font-semibold">{t('nav.selfStudyGuide')}</span>
                  </button>

                  <button 
                    onClick={() => {
                      currentBook && generateBookPDF(currentBook);
                      setIsMenuOpen(false);
                    }}
                    className={cn("touch-target flex w-full items-center gap-4 rounded-xl px-4 text-parchment transition-colors", themeClasses.menuHoverBg)}
                  >
                    <Download size={19} className={themeClasses.menuAccentText} />
                    <span className="font-display text-[12px] font-semibold">{t('nav.downloadPdf')}</span>
                  </button>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <div className="rounded-2xl bg-white/[0.035] p-4">
                  <p className="font-display text-[10px] font-semibold text-parchment/72">
                    {language === 'ar' ? 'اختصارات القراءة' : 'Reading shortcuts'}
                  </p>
                  <p className="mt-2 text-[10px] leading-5 text-parchment/42">
                    {language === 'ar'
                      ? 'استخدم مفاتيح الأسهم للتنقل بين الصفحات. افتح Aa لضبط حجم النص.'
                      : 'Use the arrow keys to move between pages. Open Aa to tune text size.'}
                  </p>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teacher Guide Overlay */}
      <TeacherGuide 
        isOpen={isTeacherGuideOpen} 
        onClose={() => setIsTeacherGuideOpen(false)} 
        content={currentBook?.teacherGuide || []}
        pages={currentBook?.pages || []}
        metadata={currentBook?.teacherGuideMetadata}
        bookId={currentBook?.id}
        level={currentLevel || undefined}
        collectionId={currentCollection || 'prophets'}
      />

      {/* Self-Study Guide Overlay (Student Guide) */}
      <SelfStudyGuide 
        isOpen={isSelfStudyOpen} 
        onClose={() => setIsSelfStudyOpen(false)} 
        content={currentBook?.selfStudyGuide || []}
        studentGuideText={currentBook?.studentGuideText}
        studentGuideSections={currentBook?.studentGuideSections}
        metadata={currentBook?.studentGuideMetadata}
        title={t('nav.studentSelfStudyGuide')}
        subtitle={t('nav.reflectionPractice')}
        footerText={t('nav.interactiveEbookSeries')}
        collectionId={currentCollection || 'prophets'}
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
              <h5 className="font-display font-medium text-[10px] uppercase tracking-widest text-amber-400">Background Download</h5>
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
