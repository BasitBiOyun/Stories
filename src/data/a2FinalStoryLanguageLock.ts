import type { PageData } from '../types';
import {
  applyA2HotspotSourceLock,
  type A2SourceLanguage,
  type A2SourceStoryId,
} from './a2HotspotSourceLock';
import { applyHighlightSurfaceForms } from './highlightSourceLock';
import { applyHotspotSourceLock } from './storyHotspotSourceLock';

/**
 * Final A2 gate.
 *
 * 1. Keeps the reviewed A2 hotspot selections.
 * 2. Enforces direct same-chapter title/description source locking and the
 *    A2 description length limit.
 * 3. For Arabic only, preserves reviewed highlight choices while storing the
 *    exact inflected/cliticized surface form that occurs in the chapter.
 *
 * Canonical story prose, definitions, exercises, media, ids/order and timing
 * values are not changed here.
 */
export const applyA2FinalStoryLanguageLock = (
  pages: PageData[],
  storyId: A2SourceStoryId,
  language: A2SourceLanguage,
): PageData[] => {
  const reviewed = applyA2HotspotSourceLock(pages, storyId, language);
  const sourceLocked = applyHotspotSourceLock(reviewed, { language, level: 'A2' });
  return language === 'ar' ? applyHighlightSurfaceForms(sourceLocked, language) : sourceLocked;
};
