import type { BookData, PageData } from '../../../types';

import { meccaB2Pages, meccaB2VocabIndexes } from './en/pages';

import { meccaB2PagesAr } from './ar/pages';

const MECCA_B2_ENGLISH_GLOSSARY_EXCLUSIONS = new Set([
  'jahiliyyah',
]);
const normalizeTerm = (word: string) => word.trim().toLocaleLowerCase();

const cleanEnglishGlossary = (pages: PageData[]): PageData[] => pages.map(page => {
  if (page.type !== 'glossary' || !page.vocabulary?.length) return page;
  return {
    ...page,
    vocabulary: page.vocabulary.filter(item => !MECCA_B2_ENGLISH_GLOSSARY_EXCLUSIONS.has(normalizeTerm(item.word))),
  };
});

const alignArabicVocabularyWithEnglish = (pages: PageData[]): PageData[] => pages.map(page => {
  const indexes = meccaB2VocabIndexes[page.id];
  if (page.type !== 'story' || !indexes) return page;

  const vocabulary = indexes
    .map(index => page.vocabulary?.[index])
    .filter((entry): entry is NonNullable<PageData['vocabulary']>[number] => Boolean(entry));

  return { ...page, vocabulary };
});

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Islamic History & Civilization: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: cleanEnglishGlossary(meccaB2Pages),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: alignArabicVocabularyWithEnglish(meccaB2PagesAr),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const meccaB2BookData = meccaB2BookDataEn;
