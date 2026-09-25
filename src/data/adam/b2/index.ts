import type { BookData, PageData } from '../../../types';
import { adamB2Pages } from './en/pages';
import { adamB2PagesAr } from './ar/pages';

const ADAM_B2_ENGLISH_GLOSSARY_EXCLUSIONS = new Set(['hayâ']);

const cleanEnglishGlossary = (pages: PageData[]): PageData[] => pages.map(page => {
  if (page.type !== 'glossary' || !page.vocabulary?.length) return page;
  return {
    ...page,
    vocabulary: page.vocabulary.filter(item => !ADAM_B2_ENGLISH_GLOSSARY_EXCLUSIONS.has(item.word.trim().toLocaleLowerCase())),
  };
});

const englishPages = cleanEnglishGlossary(adamB2Pages);

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: englishPages,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: adamB2PagesAr,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const adamB2BookData = adamB2BookDataEn;
