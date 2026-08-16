import type { PageData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { yunusB2Pages } from './en/pages';
import { pages as yunusEmreB2PagesAr } from './ar/pages';
import { yunusEmreB2BlueprintConfig } from './config';
import { yunusEmreB2ReviewedHighlightPairs } from './highlightPairs';

const titleOverridesEn = {
  5: { 'h5-1': 'false retreat', 'h5-2': 'victory at Kösedağ' },
  6: { 'h6-1': 'civil officials', 'h6-2': 'Ilkhanate Empire' },
  7: { 'h7-2': 'wise dervish' },
  8: { 'h8-1': 'vahdet-i vücut', 'h8-2': 'true and only reality' },
  9: { 'h9-1': 'love and unity' },
  10: { 'h10-1': 'center of love', 'h10-2': 'a light from Allah' },
  11: { 'h11-1': 'heart and reason' },
  12: { 'h12-1': 'morality consists', 'h12-2': 'negative traits' },
  13: { 'h13-2': 'future generations' },
} as const;

const descriptionOverridesEn = {
  10: {
    'h10-1': 'In Yunus Emre’s philosophy, heart is the center of love.',
    'h10-2': 'Yunus Emre emphasizes not only heart but also intellect as a value, describing it as “a light from Allah that has existed since eternity.”',
  },
} as const;

const withoutArabicReferenceExercise = (pages: PageData[]): PageData[] => pages.map(page => (
  page.id === 14 && page.type === 'story'
    ? { ...page, exercises: undefined }
    : page
));

const groundTransoxianaSurfaceForm = (pages: PageData[]): PageData[] => pages.map((page) => {
  if (page.type !== 'story' || page.id !== 7) return page;
  const from = 'مَا وَرَاءِ النَّهْرِ';
  const to = 'وَمَا وَرَاءِ النَّهْرِ';
  return {
    ...page,
    vocabulary: page.vocabulary?.map(entry => entry.word === from ? { ...entry, word: to } : entry),
    animatedWords: page.animatedWords?.map(word => word === from ? to : word),
  };
});

const needsEnglishAttribution = (word: string): boolean =>
  /vahdet-i vücut|true and only reality|absolute reality|initial unity|multiple existence|intellect|divine love|islamic mysticism|sufism|mystic|mystical|spiritual/i.test(word);

const needsArabicAttribution = (word: string): boolean =>
  /وحدة الوجود|الحقيقة|الوجود|العقل|الذهن|الكلي|الجزئي|الحب الالهي|التصوف|الصوفي|الصوفية|روحي|روحاني/.test(
    word.normalize('NFKD').replace(/\p{M}/gu, ''),
  );

const frameEnglishVocabulary = (pages: PageData[]): PageData[] => pages.map(page => ({
  ...page,
  vocabulary: page.vocabulary?.map(entry => (
    needsEnglishAttribution(entry.word) && !/^In the chapter/i.test(entry.definition)
      ? { ...entry, definition: `In the chapter’s presentation of Yunus Emre’s Sûfî thought: ${entry.definition}` }
      : entry
  )),
}));

const frameArabicVocabulary = (pages: PageData[]): PageData[] => pages.map(page => ({
  ...page,
  vocabulary: page.vocabulary?.map(entry => (
    needsArabicAttribution(entry.word) && !/^في عرض الفصل/.test(entry.definition)
      ? { ...entry, definition: `في عرض الفصل لفكر يونس إمره الصوفي: ${entry.definition}` }
      : entry
  )),
}));

const languageLockedEn = applyB2StoryLanguageLock(yunusB2Pages, {
  language: 'en',
  blockedHighlights: ['relates to', 'adhere to', 'coincided with', 'cope with', 'upside down'],
  titleOverrides: {
    1: { 'h1-1': 'Old Anatolian Turkish', 'h1-2': 'Sûfî' },
    2: { 'h2-1': 'Historical accounts' },
    3: { 'h3-1': 'fine arts', 'h3-2': 'hard times' },
    4: { 'h4-1': 'Mongol invasion', 'h4-2': 'Turkmen rebelled' },
  },
  maxUniqueHighlights: 10,
});

const languageLockedAr = groundTransoxianaSurfaceForm(applyB2StoryLanguageLock(
  withoutArabicReferenceExercise(yunusEmreB2PagesAr),
  {
    language: 'ar',
    maxUniqueHighlights: 10,
  },
));

const hotspotLockedEn = applyHotspotSourceLock(languageLockedEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: titleOverridesEn,
  descriptionOverrides: descriptionOverridesEn,
});

const hotspotLockedAr = applyHotspotSourceLock(languageLockedAr, {
  language: 'ar',
  level: 'B2',
});

const framedEn = frameEnglishVocabulary(hotspotLockedEn);
const framedAr = frameArabicVocabulary(hotspotLockedAr);

const standardized = applyB2HighlightStandard(framedEn, framedAr, {
  storyKey: 'Yunus Emre',
  storyIds: yunusEmreB2BlueprintConfig.storyIds,
  glossaryPageIds: yunusEmreB2BlueprintConfig.glossaryPageIds,
  vocabularyPageId: yunusEmreB2BlueprintConfig.vocabularyPageId,
  explicitTargets: resolveB2ReviewedPairs(
    framedEn,
    framedAr,
    'Yunus Emre',
    yunusEmreB2ReviewedHighlightPairs,
  ),
});

export const yunusEmreB2SourcePagesEn = standardized.englishPages;
export const yunusEmreB2SourcePagesAr = standardized.arabicPages;
export const yunusEmreB2HighlightTargets = standardized.targets;
