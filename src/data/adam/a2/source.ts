import type { PageData } from '../../../types';
import { adamA2Pages } from './en/pages';
import { adamA2PagesAr } from './ar/pages';
import { adamA2HotspotsGoldAr, adamA2HotspotsGoldEn } from './hotspotsGold';
import { getAdamA2ChapterHighlights } from './highlights';

const STORY_IDS = Array.from({ length: 10 }, (_, index) => index + 1);

const applyApprovedEnglishMechanicalFixes = (page: PageData): PageData => {
  if (page.type !== 'story') return page;
  const replacements: Array<[string, string]> = page.id === 7
    ? [['They had also lots of children.', 'They also had lots of children.']]
    : page.id === 9
      ? [['his brother dead body', "his brother's dead body"]]
      : [];
  if (!replacements.length) return page;
  const replaceText = (value: string) => replacements.reduce((text, [from, to]) => text.replaceAll(from, to), value);
  return {
    ...page,
    content: replaceText(page.content || ''),
    timedChunks: page.timedChunks?.map((chunk) => ({ ...chunk, text: replaceText(chunk.text) })),
  };
};

const prepareStoryPages = (
  pages: PageData[],
  language: 'en' | 'ar',
): PageData[] => pages.map((rawPage) => {
  const page = language === 'en' ? applyApprovedEnglishMechanicalFixes(rawPage) : rawPage;
  if (page.type !== 'story' || !STORY_IDS.includes(page.id)) return page;
  const hotspotMap = language === 'en' ? adamA2HotspotsGoldEn : adamA2HotspotsGoldAr;
  return {
    ...page,
    vocabulary: getAdamA2ChapterHighlights(page.id, language),
    animatedWords: undefined,
    hotspots: page.hotspots?.map((hotspot) => {
      const replacement = hotspotMap[hotspot.id];
      return replacement ? { ...hotspot, ...replacement } : hotspot;
    }),
  };
});

export const adamA2SourcePagesEn = prepareStoryPages(adamA2Pages, 'en');
export const adamA2SourcePagesAr = prepareStoryPages(adamA2PagesAr, 'ar');
