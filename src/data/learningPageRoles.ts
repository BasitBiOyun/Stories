import type { PageData } from '../types';

const normalizeRoleText = (value: string) => value
  .toLocaleLowerCase()
  .normalize('NFKC')
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '')
  .replace(/[أإآٱ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/\s+/g, ' ')
  .trim();

/**
 * Reference/source pages are auxiliary book pages, never narrative chapters and
 * never substitutes for Knowledge Check. Classification is multilingual and
 * semantic enough to tolerate titles such as "References" or
 * "المصادر والمراجع" without story-specific exceptions.
 */
export const isLearningReferencePage = (page: PageData): boolean => {
  const title = normalizeRoleText(page.title);
  if (!title) return false;
  if (/\breferences?\b/.test(title) || /\bsources?\b/.test(title)) return true;
  return title.includes('المراجع') || title.includes('المصادر');
};

export const narrativeLearningPages = (pages: PageData[]): PageData[] =>
  pages.filter(page => !isLearningReferencePage(page));
