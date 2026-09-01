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
  const [isDyslexic, setIsDyslexic] = useState(false);
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
 


  const { language, t, formatNumber, isRTL } = useLanguage();
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
      if (isMenuOpen || isTeacherGuideOpen || isSelfStudyOpen || isQuickTOCOpen) return;

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
          isDyslexic && "font-dyslexic-mode"
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
            fontSize={currentBook?.baseFontSize || 12}
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
      case 'glossary':
        return <MasterGlossary bookData={currentBook!} page={currentPage} collectionId={currentCollection || 'prophets'} />;
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
        isDyslexic && "font-dyslexic-mode"
      )}
    >
      {/* Living Parchment Effect */}
      <ParchmentEffect />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Navigation Header */}
      {!showSummary && (
        <header className={cn(
          "relative z-50 h-12 sm:h-14 md:h-16 border-b px-2.5 sm:px-5 md:px-8 flex items-center justify-between transition-colors duration-500 shrink-0 gap-2 sm:gap-4",
          themeClasses.headerBg
        )}>
          {/* Left: Menu button + Title & Level */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 shrink">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-1.5 sm:p-2 rounded-full transition-colors shrink-0 hover:bg-white/10 text-parchment cursor-pointer"
              title={t('nav.menu')}
              aria-label={t('nav.menu')}
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            <div className="h-5 sm:h-6 w-px bg-gold/20 shrink-0 hidden sm:block" />

            <div className="flex flex-col min-w-0">
              <h2 className={cn(
                "font-display text-[11px] sm:text-[15px] md:text-[18px] tracking-tight leading-snug truncate max-w-[100px] xs:max-w-[140px] sm:max-w-xs md:max-w-sm lg:max-w-md",
                "text-parchment"
              )} title={currentBookTitle}>{currentBookTitle}</h2>
              <span className={cn(
                "font-serif italic text-[8px] sm:text-[10px] uppercase tracking-widest leading-none mt-0.5",
                themeClasses.headerSubtitle
              )}>
                {t('nav.level')} {formatNumber(currentLevel || '')}
              </span>
            </div>
          </div>

          {/* Center / Inline Language Toggle */}
          <div className="shrink-0 flex items-center">
            <LanguageToggle />
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
            {/* Download PDF button */}
            <button 
              onClick={() => currentBook && generateBookPDF(currentBook)}
              className={cn(
                "flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all border shrink-0 text-xs",
                themeClasses.buttonSec
              )}
              title={t('nav.downloadPdf')}
              aria-label={t('nav.downloadPdf')}
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden lg:inline font-display text-[10px] sm:text-[11px] uppercase tracking-wider">
                {t('nav.downloadPdf')}
              </span>
            </button>

            {/* Progress Bar & Percentage */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <div 
                onClick={handleProgressBarClick}
                className={cn(
                  "w-20 sm:w-28 md:w-36 lg:w-40 h-2 sm:h-2.5 rounded-full overflow-hidden border border-white/10 shadow-inner flex items-center p-[1px] cursor-pointer hover:scale-105 active:scale-95 transition-transform", 
                  themeClasses.progressTrack
                )}
                title={language === 'ar' ? "انقر للانتقال السريع للصفحة" : "Click to quick-jump to page"}
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress * 100}%` }}
                  className={cn("h-full rounded-full shadow-sm shadow-black/20", themeClasses.progressBar)}
                />
              </div>
              <span className={cn("font-display text-[10px] sm:text-[12px] font-bold tracking-wider", themeClasses.percentageText)}>
                {formatNumber(Math.round(progress * 100))}%
              </span>
            </div>

            {/* Return to Library (Home) */}
            <button 
              onClick={handleReturnToLibrary}
              className={cn(
                "p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-md flex items-center justify-center border shrink-0",
                "bg-amber-950/40 border-amber-400/30 text-gold hover:text-parchment hover:bg-amber-400/25 hover:border-amber-400/60 cursor-pointer",
                currentCollection === 'history' && "bg-emerald-950/40 border-emerald-500/30 text-emerald-400 hover:text-parchment hover:bg-emerald-500/25 hover:border-emerald-500/60",
                currentCollection === 'turkish' && "bg-[#0D1D2C]/40 border-[#22D3EE]/30 text-[#22D3EE] hover:text-parchment hover:bg-[#22D3EE]/25 hover:border-[#22D3EE]/60"
              )}
              title={t('nav.returnToLibrary')}
              aria-label={t('nav.returnToLibrary')}
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </button>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 flex flex-col overflow-hidden min-h-0">
        <div className={cn(
          "flex-1 w-full relative page-texture transition-all duration-500 flex flex-col overflow-hidden min-h-0",
          themeClasses.mainBg
        )}>
          {/* Page Navigation Controls - Floating Side Buttons on Desktop (lg+) */}
          {!showSummary && (
            <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none z-30 px-2 lg:px-3 xl:px-5">
              <button 
                onClick={handlePrevPage}
                disabled={currentPageIndex === 0}
                className={cn(
                  "pointer-events-auto p-2.5 lg:p-3 rounded-full shadow-xl transition-all border-2 backdrop-blur-md",
                  currentPageIndex === 0 ? "opacity-0 cursor-default" : "opacity-90 hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer",
                  themeClasses.navButton
                )}
                title={t('nav.back')}
                aria-label={t('nav.back')}
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={3} />
              </button>
              <button 
                onClick={handleNextPage}
                disabled={currentPageIndex === totalPages - 1}
                className={cn(
                  "pointer-events-auto p-2.5 lg:p-3 rounded-full shadow-xl transition-all border-2 backdrop-blur-md",
                  currentPageIndex === totalPages - 1 ? "opacity-0 cursor-default" : "opacity-90 hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer",
                  themeClasses.navButton
                )}
                title={t('nav.next')}
                aria-label={t('nav.next')}
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={3} />
              </button>
            </div>
          )}

          <div className="flex-1 overflow-hidden min-h-0 flex flex-col">
            <div className={cn(
              currentPage?.type === 'map' ? "w-full h-full" : "w-full max-w-[1700px] mx-auto h-full flex flex-col min-h-0",
              !showSummary && currentPage?.type !== 'map' && "p-3 sm:p-5 md:p-8 lg:py-8 lg:px-20 xl:px-24 2xl:px-28"
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

      {/* Footer */}
      {!showSummary && (
        <footer className={cn(
          "relative z-50 h-11 sm:h-13 md:h-14 border-t px-2.5 sm:px-5 md:px-8 flex items-center justify-between transition-colors duration-500 shrink-0 gap-2",
          themeClasses.headerBg
        )}>
          {/* Left: TOC button */}
          <div className="flex items-center gap-2 relative shrink-0">
            <button 
              onClick={() => setIsQuickTOCOpen(prev => !prev)}
              className={cn(
                "flex items-center gap-1.5 cursor-pointer group/page px-2 sm:px-2.5 py-1 rounded-lg border border-transparent transition-all duration-300",
                "hover:bg-white/10 hover:border-gold/20 select-none active:scale-95"
              )}
              title={t('nav.tableOfContents')}
              aria-label={t('nav.tableOfContents')}
              aria-expanded={isQuickTOCOpen}
            >
              <BookMarked className={cn(themeClasses.goldText, "w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2] shrink-0")} />
              <span className={cn(
                "font-serif italic text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1",
                "text-parchment/80 group-hover/page:text-parchment"
              )}>
                {t('nav.page')} {formatNumber(currentPageIndex + 1)} {t('nav.of')} {formatNumber(totalPages)}
                <ChevronUp className={cn("w-3 h-3 opacity-40 transition-transform duration-300 shrink-0", isQuickTOCOpen && "rotate-180")} />
              </span>
            </button>

            {/* Quick Table of Contents Popover */}
            <AnimatePresence>
              {isQuickTOCOpen && (
                <>
                  {/* Backdrop to close click outside */}
                  <div 
                    className="fixed inset-0 z-40 bg-transparent" 
                    onClick={() => setIsQuickTOCOpen(false)} 
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={cn(
                      "absolute bottom-14 left-0 z-50 w-72 sm:w-80 md:w-96 rounded-2xl shadow-2xl border backdrop-blur-2xl p-3 sm:p-4 flex flex-col gap-3",
                      themeClasses.menuBg,
                      themeClasses.menuBorder,
                      language === 'ar' ? "left-auto right-0 origin-bottom-right" : "origin-bottom-left"
                    )}
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <h4 className={cn("font-display text-xs md:text-sm uppercase tracking-wider font-semibold", themeClasses.goldText)}>
                        {t('nav.tableOfContents')}
                      </h4>
                      <span 
                        style={{ fontFamily: "'Poppins', sans-serif" }} 
                        className="text-[11px] text-white/50 font-medium"
                      >
                        {formatNumber(totalPages)} {language === 'ar' ? "صفحات" : "pages"}
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-64 sm:max-h-72 overflow-y-auto custom-scrollbar pr-1.5 scroll-smooth">
                      {currentBook?.pages.map((page, idx) => {
                        const isActive = currentPageIndex === idx;
                        return (
                          <button
                            key={page.id}
                            onClick={() => {
                              setCurrentPageIndex(idx);
                              setIsQuickTOCOpen(false);
                            }}
                            className={cn(
                              "w-full p-2 sm:p-2.5 rounded-xl text-left font-serif text-xs sm:text-[14px] flex items-center justify-between gap-2.5 transition-all",
                              language === 'ar' && "text-right flex-row-reverse",
                              isActive 
                                ? "bg-gold/25 text-white font-semibold border border-gold/30" 
                                : "hover:bg-white/5 text-parchment/70 hover:text-white border border-transparent"
                            )}
                          >
                            <div className={cn("flex items-center gap-2 min-w-0", language === 'ar' && "flex-row-reverse")}>
                              <span 
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                                className={cn(
                                  "text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-md min-w-[20px] text-center font-medium shrink-0",
                                  isActive ? "bg-gold/40 text-white" : "bg-white/5 text-white/40"
                                )}
                              >
                                {formatNumber(idx + 1)}
                              </span>
                              <span className="truncate">{page.title}</span>
                            </div>
                            
                            {/* Page Type Badge/Indicator */}
                            <div className="flex items-center gap-1 shrink-0">
                              {(page.type === 'quiz' || page.type === 'vocabulary-match' || page.type === 'sequencing' || page.type === 'game') && (
                                <span className="text-[10px] bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20 px-1.5 py-0.5 rounded font-display">
                                  {language === 'ar' ? 'معرفة' : 'Kc'}
                                </span>
                              )}
                              {page.type === 'exercises' && (
                                <span className="text-[10px] bg-amber-500/10 text-amber-400/90 border border-amber-500/20 px-1.5 py-0.5 rounded font-display">
                                  {language === 'ar' ? 'تمارين' : 'Ex'}
                                </span>
                              )}
                              {page.type === 'glossary' && (
                                <span className="text-[10px] bg-sky-500/10 text-sky-400/90 border border-sky-500/20 px-1.5 py-0.5 rounded font-display">
                                  {language === 'ar' ? 'قاموس' : 'Gl'}
                                </span>
                              )}
                              {page.type === 'final-challenge' && (
                                <span className="text-[10px] bg-red-500/10 text-red-400/90 border border-red-500/20 px-1.5 py-0.5 rounded font-display">
                                  {language === 'ar' ? 'تحدي' : 'Ch'}
                                </span>
                              )}
                              {isActive && (
                                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Center: Integrated Responsive Navigation Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button 
              onClick={handlePrevPage}
              disabled={currentPageIndex === 0}
              className={cn(
                "flex items-center gap-1 px-2 sm:px-3 py-1 rounded-lg border text-xs font-bold transition-all disabled:opacity-25 disabled:cursor-not-allowed shadow-sm active:scale-95 cursor-pointer",
                themeClasses.buttonSec
              )}
              title={t('nav.back')}
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{t('nav.back')}</span>
            </button>

            <button 
              onClick={handleNextPage}
              disabled={currentPageIndex === totalPages - 1}
              className={cn(
                "flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-lg border text-xs font-bold transition-all disabled:opacity-25 disabled:cursor-not-allowed shadow-md active:scale-95 cursor-pointer",
                themeClasses.navButton
              )}
              title={t('nav.next')}
            >
              <span className="hidden sm:inline">{t('nav.next')}</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Right: Quranic Quote or Collection Title */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Quranic Quote - Yusuf 111 - Shown on 2XL+ */}
            <div className="hidden 2xl:flex flex-col items-center">
              <div className="flex items-center gap-2">
                <p className={cn(
                  "tracking-wide drop-shadow-sm text-center font-medium text-xs",
                  themeClasses.goldText,
                  language === 'ar' ? "text-sm font-bold" : "font-serif italic text-xs"
                )} dir={language === 'ar' ? "rtl" : "ltr"}>
                  {language === 'ar' 
                    ? "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ"
                    : "\"In their stories is a lesson for those who have intelligence.\""}
                </p>
              </div>
            </div>

            <p className="font-display text-[10px] sm:text-[11px] tracking-[0.15em] text-white/70 font-semibold uppercase truncate max-w-[120px] lg:max-w-none">
              {currentCollection === 'history' ? t('home.collection2') : currentCollection === 'turkish' ? t('home.collection3') : t('home.collection1')}
            </p>
          </div>
        </footer>
      )}

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("fixed inset-0 backdrop-blur-sm z-[200]", themeClasses.menuOverlayBg)}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className={cn("w-80 h-full backdrop-blur-2xl shadow-2xl p-8 flex flex-col border-r", themeClasses.menuBg, themeClasses.menuBorder)}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-xl border flex items-center justify-center overflow-hidden p-1.5", themeClasses.menuLogoContainer)}>
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/home_icon.png?alt=media&token=d8075082-0856-42d8-bc20-db4d7ce86c99"
                      alt=""
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-display text-xl text-parchment tracking-tight">
                    {t('nav.mainMenu')}
                  </h3>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className={cn("transition-colors", themeClasses.menuCloseButton)} aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>

              <div className="lg:hidden mb-8">
                <LanguageToggle />
              </div>

              <div className="space-y-2 flex-1">
                <button 
                  onClick={handleReturnToLibrary}
                  className={cn("w-full p-4 rounded-xl flex items-center gap-4 text-parchment transition-all group", themeClasses.menuHoverBg)}
                >
                  <Home size={20} className={cn("group-hover:scale-110 transition-transform", themeClasses.menuAccentText)} />
                  <span className="font-serif font-bold">{t('nav.libraryHome')}</span>
                </button>
                
                <div className="py-4">
                  <h4 className={cn("font-display text-[10px] uppercase tracking-widest mb-4 px-4", themeClasses.menuSectionHeader)}>
                    {t('nav.guidesResources')}
                  </h4>
                  <button 
                    onClick={() => {
                      setIsTeacherGuideOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className={cn("w-full p-4 rounded-xl flex items-center gap-4 text-parchment transition-all group", themeClasses.menuHoverBg)}
                  >
                    <GraduationCap size={20} className={cn("group-hover:scale-110 transition-transform", themeClasses.menuAccentText)} />
                    <span className="font-serif font-bold">{t('nav.teacherGuide')}</span>
                  </button>
                  <button 
                    onClick={() => {
                      setIsSelfStudyOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className={cn("w-full p-4 rounded-xl flex items-center gap-4 text-parchment transition-all group", themeClasses.menuHoverBg)}
                  >
                    <ClipboardList size={20} className={cn("group-hover:scale-110 transition-transform", themeClasses.menuAccentText)} />
                    <span className="font-serif font-bold">{t('nav.selfStudyGuide')}</span>
                  </button>
                  <button 
                    onClick={() => {
                      currentBook && generateBookPDF(currentBook);
                      setIsMenuOpen(false);
                    }}
                    className={cn("w-full p-4 rounded-xl flex items-center gap-4 text-parchment transition-all group", themeClasses.menuHoverBg)}
                  >
                    <Download size={20} className={cn("group-hover:scale-110 transition-transform", themeClasses.menuAccentText)} />
                    <span className="font-serif font-bold">{t('nav.downloadPdf')}</span>
                  </button>
                </div>

                <div className="py-4">
                  <h4 className={cn("font-display text-[10px] uppercase tracking-widest mb-4 px-4", themeClasses.menuSectionHeader)}>
                    {t('nav.tableOfContents')}
                  </h4>
                  <div className="space-y-1 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                    {currentBook?.pages.map((page, idx) => (
                      <button 
                        key={page.id}
                        onClick={() => {
                          setCurrentPageIndex(idx);
                          setIsMenuOpen(false);
                        }}
                        className={cn(
                          "w-full p-3 rounded-lg text-left font-serif text-sm flex items-center gap-3 transition-all",
                          isRTL && "text-right",
                          currentPageIndex === idx ? themeClasses.menuItemActive : themeClasses.menuItemHover
                        )}
                      >
                        <span className="font-display text-[10px] opacity-40">{formatNumber(idx + 1)}</span>
                        <span className="truncate">{page.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Teacher Guide Overlay */}
      <TeacherGuide 
        isOpen={isTeacherGuideOpen} 
        onClose={() => setIsTeacherGuideOpen(false)} 
        content={currentBook?.teacherGuide || []}
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
