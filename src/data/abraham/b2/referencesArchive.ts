import type { PageData } from '../../../types';
import { abrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr } from './ar/pages';

/**
 * Retains the canonical Abraham B2 References pages while Page 36 is temporarily
 * used as the runtime Knowledge Check. When B2 references are standardized across
 * all books, these pages can be restored as a separate support page without
 * reconstructing or rewriting their source lists.
 */
const referencePage = (pages: PageData[], language: 'en' | 'ar'): PageData => {
  const page = pages.find((candidate) => candidate.id === 36);
  if (!page) throw new Error(`Abraham B2 ${language.toUpperCase()} References page 36 is missing.`);
  return page;
};

export const abrahamB2ReferencesArchiveEn = referencePage(abrahamB2Pages, 'en');
export const abrahamB2ReferencesArchiveAr = referencePage(abrahamB2PagesAr, 'ar');
