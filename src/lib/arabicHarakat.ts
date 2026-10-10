import { useSyncExternalStore } from 'react';

/**
 * Arabic harakat (tashkeel) on or off. Every Arabic text is written with harakat and shows them by
 * default; a reader who prefers plain Arabic turns them off in Story settings, and the choice holds on
 * this device. Qur'an verses (between ﴿ and ﴾, or marked as a verse in the story) keep their harakat.
 */
const STORAGE_KEY = 'v2:arabic-harakat-hidden';
const CHANGE_EVENT = 'v2-arabic-harakat-change';

// Tanween, fatha, damma, kasra, shadda, sukun and the dagger alif (the small alif in a word like hādhā).
const HARAKAT = /[\u064B-\u0652\u0670]/g;
const HAS_HARAKAT = /[\u064B-\u0652\u0670\u0671]/;

/** The text without harakat; anything between ﴿ and ﴾ stays as written. */
export const stripHarakat = (text: string): string => {
  if (!HAS_HARAKAT.test(text)) return text;
  return text
    .split(/(﴿[^﴾]*﴾)/)
    .map(part => (part.startsWith('﴿') ? part : part.replace(HARAKAT, '').replace(/\u0671/g, '\u0627')))
    .join('');
};

export const hasHarakat = (text: string): boolean => HAS_HARAKAT.test(text);

let memory: boolean | undefined;

const isHidden = () => {
  if (memory !== undefined) return memory;
  try {
    return localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
};

export const setHarakatShown = (shown: boolean) => {
  try {
    if (shown) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, '1');
    memory = undefined;
  } catch {
    // Storage may be unavailable; the choice then lasts until the page reloads.
    memory = !shown;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

const subscribe = (callback: () => void) => {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
};

export const useHarakatShown = () => useSyncExternalStore(subscribe, () => !isHidden(), () => true);
