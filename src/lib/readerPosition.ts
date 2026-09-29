import type { Level } from '../types';

export interface ReaderPosition {
  pageIndex: number;
  totalPages: number;
}

const positionKey = (prophetId: string, level: Level) => `reader_position_${prophetId}_${level}`;

/** Last page the reader reached in a book, so "Continue reading" can reopen it there. */
export const readReaderPosition = (prophetId: string, level: Level): ReaderPosition | null => {
  try {
    const stored = localStorage.getItem(positionKey(prophetId, level));
    if (!stored) return null;
    const parsed = JSON.parse(stored) as Partial<ReaderPosition>;
    if (!Number.isInteger(parsed.pageIndex) || !Number.isInteger(parsed.totalPages)) return null;
    return { pageIndex: Math.max(0, parsed.pageIndex as number), totalPages: parsed.totalPages as number };
  } catch {
    return null;
  }
};

export const saveReaderPosition = (prophetId: string, level: Level, position: ReaderPosition) => {
  localStorage.setItem(positionKey(prophetId, level), JSON.stringify(position));
};

export const clearReaderPosition = (prophetId: string, level: Level) => {
  localStorage.removeItem(positionKey(prophetId, level));
};
