import { applyB1HighlightStandard } from '../../b1HighlightStandard';
import { applyB1StoryLanguageLock } from '../../b1StoryLanguageLock';
import { stripUnsupportedBoldMarkdown } from '../../stripUnsupportedMarkdown';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { yunusB1Pages } from './en/pages';
import { yunusEmreB1PagesAr } from './ar/pages';
import { yunusEmreB1ExplicitHighlightTargets } from './highlights';
import { yunusEmreB1BlueprintConfig } from './config';

const blockedHighlightsEn = [
  'is related to',
  'refers to',
  'in return',
  'responding to',
  'due to',
  'either',
  'spiritual tutor',
  'cope with',
  'upside down',
  'a way out',
  'put an end to',
  'false retreat and circling tactic',
  'attached to',
  'true and only reality',
  'the unity of existence',
  'original unity',
  'multiple existence',
  'set out',
  'rock-solid',
  'break free',
] as const;

const blockedHighlightsAr = [
  'يَتَعَلَّقُ',
  'يُشِيرُ إِلَى',
  'يُشِيرُ',
  'مُقَابِلٍ',
  'الرَّدِّ عَلَى',
  'الرَّدِّ',
  'بِسَبَبِ',
  'أَيْضًا',
  'رَأْسًا عَلَى عَقِبٍ',
] as const;

const titleOverridesEn = {
  1: { 'h1-1': 'Sûfî' },
  3: { 'h3-1': 'Tekkes' },
  4: { 'h4-2': 'Mongol Invasion' },
  5: { 'h5-2': 'Mongols' },
  6: { 'h6-1': 'Mongol Raids', 'h6-2': 'Ilkhanate Empire' },
  13: { 'h13-2': 'Patience and Faith' },
} as const;

const groundedEnglish = applyB1StoryLanguageLock(yunusB1Pages, {
  language: 'en',
  blockedHighlights: blockedHighlightsEn,
  titleOverrides: titleOverridesEn,
  maxUniqueHighlights: 8,
});

const groundedArabic = applyB1StoryLanguageLock(yunusEmreB1PagesAr, {
  language: 'ar',
  blockedHighlights: blockedHighlightsAr,
  maxUniqueHighlights: 8,
});

const lockedEnglish = stripUnsupportedBoldMarkdown(applyHotspotSourceLock(groundedEnglish, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    3: { 'h3-2': 'Anatolia' },
    4: { 'h4-1': 'Anatolian Seljuk' },
    6: { 'h6-1': 'Raids' },
    7: { 'h7-1': 'Wise Sûfî', 'h7-2': 'Poetry' },
    11: { 'h11-1': 'Intellect', 'h11-2': 'Death' },
    12: { 'h12-2': 'Moral Principles' },
    13: { 'h13-2': 'Patience' },
  },
}));

const lockedArabic = applyHotspotSourceLock(groundedArabic, {
  language: 'ar',
  level: 'B1',
});

const standardized = applyB1HighlightStandard(lockedEnglish, lockedArabic, {
  storyKey: 'Yunus Emre',
  storyIds: yunusEmreB1BlueprintConfig.storyIds,
  glossaryPageIds: yunusEmreB1BlueprintConfig.glossaryPageIds,
  vocabularyPageId: yunusEmreB1BlueprintConfig.vocabularyPageId,
  explicitTargets: yunusEmreB1ExplicitHighlightTargets,
});

export const yunusEmreB1SourcePagesEn = standardized.englishPages;
export const yunusEmreB1SourcePagesAr = standardized.arabicPages;
export const yunusEmreB1HighlightTargets = standardized.targets;
