import type { BookData, PageData } from '../../../types';
import { mosesB2CanonicalVocabulary, mosesB2HotspotCoords, mosesB2Pages } from './en/pages';
import { mosesB2PagesAr } from './ar/pages';
import { findHighlightSurface } from '../../../lib/highlightTextMatch';

const MOSES_B2_ENGLISH_GLOSSARY_EXCLUSIONS = new Set([
  'zalimeen',
]);

const normalizeTerm = (word: string) => word.trim().toLocaleLowerCase();

const cleanEnglishGlossary = (pages: PageData[]): PageData[] => pages.map(page => {
  if (page.type !== 'glossary' || !page.vocabulary?.length) return page;
  return {
    ...page,
    vocabulary: page.vocabulary.filter(item => !MOSES_B2_ENGLISH_GLOSSARY_EXCLUSIONS.has(normalizeTerm(item.word))),
  };
});

const englishPages = cleanEnglishGlossary(mosesB2Pages);

const mosesB2PagesArResolved = mosesB2PagesAr.map(page => {
  if (page.id < 1 || page.id > 24) return page;

  const seeds = mosesB2CanonicalVocabulary[page.id] ?? [];
  const vocabulary = seeds.flatMap(([, arNeedle, , arDefinition]) => {
    const word = findHighlightSurface(page.content ?? '', arNeedle, 'ar');
    return word ? [{ word, definition: arDefinition }] : [];
  });

  if (vocabulary.length !== seeds.length) {
    console.warn(`[Moses B2 AR] Chapter ${page.id} resolved ${vocabulary.length}/${seeds.length} canonical vocabulary pairs with shared matcher.`);
  }

  const [x1, y1, x2, y2] = mosesB2HotspotCoords[page.id];
  return {
    ...page,
    vocabulary,
    hotspots: vocabulary.slice(0, 2).map((item, index) => ({
      id: `mo-b2-ar-hs-${page.id}-${index + 1}`,
      x: index ? x2 : x1,
      y: index ? y2 : y1,
      title: item.word,
      description: item.definition,
    })),
  };
});

export const mosesB2BookDataEn:BookData={id:'moses-b2-en',title:'Stories of the Prophets: Moses (B2)',level:'B2',baseFontSize:13,pages:englishPages,teacherGuide: [],selfStudyGuide: []};
export const mosesB2BookDataAr:BookData={id:'moses-b2-ar',title:'قصص الأنبياء: موسى (عليه السلام) (B2)',level:'B2',baseFontSize:14,pages:mosesB2PagesArResolved,teacherGuide: [],selfStudyGuide: []};
export const mosesB2BookData=mosesB2BookDataEn;
