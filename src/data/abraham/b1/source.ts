import { applyB1HighlightStandard } from '../../b1HighlightStandard';
import { applyB1StoryLanguageLock } from '../../b1StoryLanguageLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { abrahamB1Pages } from './en/pages';
import { abrahamB1PagesAr } from './ar/pages';
import { abrahamB1ExplicitHighlightTargets } from './highlights';
import { abrahamB1BlueprintConfig } from './config';

const titleOverridesEn = {
  2: { 'h2-1': 'Azer' },
  4: { 'h4-2': 'Right Way' },
  5: { 'h5-1': 'People', 'h5-2': 'People' },
  6: { 'h6-2': 'Food and Idols' },
  7: { 'h7-2': 'The People' },
  8: { 'h8-1': 'The Fire' },
  9: { 'h9-1': 'Nimrod', 'h9-2': 'The Sun' },
  11: { 'h11-1': 'Hagar' },
  12: { 'h12-2': 'Mecca' },
} as const;

const groundedEnglish = applyB1StoryLanguageLock(abrahamB1Pages, {
  language: 'en',
  blockedHighlights: ['felt embarrassed', 'In response'],
  titleOverrides: titleOverridesEn,
  maxUniqueHighlights: 8,
});

const groundedArabic = applyB1StoryLanguageLock(abrahamB1PagesAr, {
  language: 'ar',
  maxUniqueHighlights: 8,
});

const lockedEnglish = applyHotspotSourceLock(groundedEnglish, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    5: { 'h5-1': 'Idols', 'h5-2': 'People' },
    6: { 'h6-1': 'Axe', 'h6-2': 'Food' },
    7: { 'h7-1': 'Statues' },
    13: { 'h13-2': 'Arabian Peninsula' },
  },
});

const lockedArabic = applyHotspotSourceLock(groundedArabic, {
  language: 'ar',
  level: 'B1',
});

const standardized = applyB1HighlightStandard(lockedEnglish, lockedArabic, {
  storyKey: 'Abraham',
  storyIds: abrahamB1BlueprintConfig.storyIds,
  glossaryPageIds: abrahamB1BlueprintConfig.glossaryPageIds,
  explicitTargets: abrahamB1ExplicitHighlightTargets,
});

export const abrahamB1SourcePagesEn = standardized.englishPages;
export const abrahamB1SourcePagesAr = standardized.arabicPages;
export const abrahamB1HighlightTargets = standardized.targets;
