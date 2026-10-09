import { useSyncExternalStore } from 'react';

/**
 * Whether Word Note cards show the second language (Arabic under an English note, English under an
 * Arabic note). Shown by default; the reader turns it off on the card itself and the choice holds
 * for every card on this device, separately for English and Arabic books.
 */
type BookLanguage = 'en' | 'ar';

const storageKey = (language: BookLanguage) => `v2:word-note-gloss-hidden:${language}`;
const CHANGE_EVENT = 'v2-word-note-gloss-change';

const isHidden = (language: BookLanguage) => {
  try {
    return localStorage.getItem(storageKey(language)) === '1';
  } catch {
    return false;
  }
};

export const setWordNoteGlossShown = (language: BookLanguage, shown: boolean) => {
  try {
    if (shown) localStorage.removeItem(storageKey(language));
    else localStorage.setItem(storageKey(language), '1');
  } catch {
    // Storage may be unavailable; the choice then lasts until the page reloads.
    memory[language] = !shown;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
};

const memory: Record<BookLanguage, boolean | undefined> = { en: undefined, ar: undefined };

const subscribe = (callback: () => void) => {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
};

export const useWordNoteGlossShown = (language: BookLanguage) => useSyncExternalStore(
  subscribe,
  () => !(memory[language] ?? isHidden(language)),
  () => true,
);
