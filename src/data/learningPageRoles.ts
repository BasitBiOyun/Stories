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

const roleTokens = (value: string): string[] => normalizeRoleText(value)
  .split(/[^\p{L}\p{N}]+/u)
  .filter(Boolean);

/**
 * Reference/source pages are auxiliary book pages, never narrative chapters and
 * never substitutes for Knowledge Check. Arabic role words are matched as whole
 * tokens so "المراجعة" (review) can never be mistaken for "المراجع" (references).
 */
export const isLearningReferencePage = (page: PageData): boolean => {
  const title = normalizeRoleText(page.title);
  if (!title) return false;
  if (/\breferences?\b/.test(title) || /\bsources?\b/.test(title)) return true;
  const tokens = new Set(roleTokens(title));
  return tokens.has('المراجع') || tokens.has('المصادر') || tokens.has('مصادر') || tokens.has('مراجع');
};

export const narrativeLearningPages = (pages: PageData[]): PageData[] =>
  pages.filter(page => !isLearningReferencePage(page));
