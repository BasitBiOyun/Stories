import { useEffect, useState } from 'react';
import { ensureOpenDyslexicStyles } from '../lib/deferredStyles';

/** A reading setting the learner can change: kept in this browser, so the book opens the same way next time. */
const stored = (key: string, fallback: boolean): boolean => {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value === 'true';
  } catch {
    return fallback;
  }
};

const storedScale = (): number => {
  try {
    const value = Number(localStorage.getItem('reader_scale'));
    return Number.isFinite(value) && value >= 0.85 && value <= 1.3 ? value : 1;
  } catch {
    return 1;
  }
};

const remember = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage blocked: the setting lasts for this visit only */
  }
};

export interface ReaderPreferences {
  isDyslexic: boolean;
  setIsDyslexic: React.Dispatch<React.SetStateAction<boolean>>;
  readerScale: number;
  setReaderScale: React.Dispatch<React.SetStateAction<number>>;
  isWideView: boolean;
  setIsWideView: React.Dispatch<React.SetStateAction<boolean>>;
  showHighlights: boolean;
  setShowHighlights: React.Dispatch<React.SetStateAction<boolean>>;
  followAlong: boolean;
  setFollowAlong: React.Dispatch<React.SetStateAction<boolean>>;
  /** Story mode: the whole story on one page, the activities after "The End". */
  storyMode: boolean;
  setStoryMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useReaderPreferences = (): ReaderPreferences => {
  const [isDyslexic, setIsDyslexic] = useState(() => stored('reader_dyslexic', false));
  const [readerScale, setReaderScale] = useState(storedScale);
  const [isWideView, setIsWideView] = useState(() => stored('reader_wide', false));
  const [showHighlights, setShowHighlights] = useState(() => stored('reader_highlights', true));
  const [followAlong, setFollowAlong] = useState(() => stored('reader_follow_along', true));
  const [storyMode, setStoryMode] = useState(() => stored('reader_story_mode', false));

  useEffect(() => {
    remember('reader_scale', String(readerScale));
  }, [readerScale]);
  useEffect(() => {
    remember('reader_dyslexic', String(isDyslexic));
    if (isDyslexic) ensureOpenDyslexicStyles();
  }, [isDyslexic]);
  useEffect(() => {
    remember('reader_wide', String(isWideView));
  }, [isWideView]);
  useEffect(() => {
    remember('reader_highlights', String(showHighlights));
  }, [showHighlights]);
  useEffect(() => {
    remember('reader_follow_along', String(followAlong));
  }, [followAlong]);
  useEffect(() => {
    remember('reader_story_mode', String(storyMode));
  }, [storyMode]);

  return {
    isDyslexic,
    setIsDyslexic,
    readerScale,
    setReaderScale,
    isWideView,
    setIsWideView,
    showHighlights,
    setShowHighlights,
    followAlong,
    setFollowAlong,
    storyMode,
    setStoryMode,
  };
};
