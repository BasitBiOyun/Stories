import type { Level } from '../types';

/** What a reader has done in one book, kept across sessions so the TOC, the summary and the home page agree. */
export interface BookProgress {
  /** Zero-based indices of pages the reader has opened. */
  readPages: number[];
  /** Ids of exercises (Quick Challenge, Language Focus, review, quiz) the reader has completed. */
  doneExercises: string[];
  totalPages: number;
}

const progressKey = (storyId: string, level: Level) => `book_progress_${storyId}_${level}`;

const emptyProgress = (): BookProgress => ({ readPages: [], doneExercises: [], totalPages: 0 });

export const readBookProgress = (storyId: string, level: Level): BookProgress => {
  try {
    const stored = localStorage.getItem(progressKey(storyId, level));
    if (!stored) return emptyProgress();
    const parsed = JSON.parse(stored) as Partial<BookProgress>;
    return {
      readPages: Array.isArray(parsed.readPages) ? parsed.readPages.filter(Number.isInteger) : [],
      doneExercises: Array.isArray(parsed.doneExercises) ? parsed.doneExercises.filter(id => typeof id === 'string') : [],
      totalPages: Number.isInteger(parsed.totalPages) ? (parsed.totalPages as number) : 0,
    };
  } catch {
    return emptyProgress();
  }
};

/** Merges new pages and exercise ids into the stored progress; nothing is ever removed. */
export const mergeBookProgress = (
  storyId: string,
  level: Level,
  patch: { readPages?: Iterable<number>; doneExercises?: Iterable<string>; totalPages?: number },
): BookProgress => {
  const current = readBookProgress(storyId, level);
  const next: BookProgress = {
    readPages: [...new Set([...current.readPages, ...(patch.readPages ?? [])])].sort((a, b) => a - b),
    doneExercises: [...new Set([...current.doneExercises, ...(patch.doneExercises ?? [])])],
    totalPages: patch.totalPages ?? current.totalPages,
  };
  try {
    localStorage.setItem(progressKey(storyId, level), JSON.stringify(next));
  } catch {
    // Storage may be unavailable (private mode, quota); progress then lives for the session only.
  }
  return next;
};

export interface BookProgressSummary {
  pagesRead: number;
  totalPages: number;
  /** 0-100, 100 once the book's summary was reached. */
  percent: number;
}

/** Progress for the home page: how far into the book the reader is. Null when the book was never opened. */
export const summarizeBookProgress = (storyId: string, level: Level): BookProgressSummary | null => {
  const progress = readBookProgress(storyId, level);
  let completed = false;
  try {
    completed = localStorage.getItem(`completed_${storyId}_${level}`) === 'true';
  } catch {
    completed = false;
  }
  if (!completed && (progress.totalPages === 0 || progress.readPages.length === 0)) return null;
  const pagesRead = Math.min(progress.readPages.length, progress.totalPages || progress.readPages.length);
  const percent = completed ? 100 : Math.round((pagesRead / Math.max(progress.totalPages, 1)) * 100);
  return { pagesRead, totalPages: progress.totalPages, percent: Math.min(100, percent) };
};
