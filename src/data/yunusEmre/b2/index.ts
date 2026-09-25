import type { BookData, PageData } from '../../../types';

import { yunusB2Pages } from './en/pages';
import { yunusEmreB2PagesAr } from './ar/pages';

const normalizeTerm = (word: string) => word.trim().toLocaleLowerCase();

const ENGLISH_GLOSSARY_EXCLUSIONS = new Set([
  'qur’an',
  "qur'an",
  'quran',
  'tawhid',
  'vahdet-i vücut',
  'popular sûfîsm',
  'sûfî',
  'sûfîsm',
]);

const buildSplitGlossaryPages = (
  pages: PageData[],
  excludedTerms: Set<string> = new Set(),
): PageData[] => {
  const storyPages = pages.filter(page => page.type === 'story' && (page.vocabulary?.length ?? 0) > 0);
  const glossaryPages = pages.filter(page => page.type === 'glossary');

  if (glossaryPages.length === 0) return pages;

  const chunkSize = Math.ceil(storyPages.length / glossaryPages.length);

  return pages.map(page => {
    if (page.type !== 'glossary' || (page.vocabulary?.length ?? 0) > 0) return page;

    const glossaryIndex = glossaryPages.findIndex(glossaryPage => glossaryPage.id === page.id);
    if (glossaryIndex < 0) return page;

    const selectedStories = storyPages.slice(
      glossaryIndex * chunkSize,
      Math.min((glossaryIndex + 1) * chunkSize, storyPages.length),
    );

    const vocabularyMap = new Map<string, NonNullable<PageData['vocabulary']>[number]>();
    selectedStories.forEach(storyPage => {
      storyPage.vocabulary?.forEach(item => {
        const key = normalizeTerm(item.word);
        if (excludedTerms.has(key) || vocabularyMap.has(key)) return;
        vocabularyMap.set(key, item);
      });
    });

    return {
      ...page,
      vocabulary: Array.from(vocabularyMap.values()),
    };
  });
};

const englishPages = buildSplitGlossaryPages(yunusB2Pages, ENGLISH_GLOSSARY_EXCLUSIONS);
const arabicPages = buildSplitGlossaryPages(yunusEmreB2PagesAr);

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Yunus Emre: History, Poetry, and Moral Thought (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: englishPages,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'يونس إمره: التاريخ والشعر والفكر الأخلاقي (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: arabicPages,
  teacherGuide: [],
  selfStudyGuide: [],
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
