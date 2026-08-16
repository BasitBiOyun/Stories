import { applyB1HighlightStandard } from '../../b1HighlightStandard';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { mosesB1Pages } from './en/pages';
import { mosesB1PagesAr } from './ar/pages';
import { mosesB1ExplicitHighlightTargets } from './highlights';
import { mosesB1BlueprintConfig } from './config';

const lockedEnglish = applyHotspotSourceLock(mosesB1Pages, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    4: { 'h4-1': 'Mother', 'h4-2': 'Queen Asiye' },
    9: { 'h9-1': 'Voice' },
    11: { 'h11-2': 'Staff' },
    12: { 'h12-1': 'Night' },
  },
});

const lockedArabic = applyHotspotSourceLock(mosesB1PagesAr, {
  language: 'ar',
  level: 'B1',
});

const standardized = applyB1HighlightStandard(lockedEnglish, lockedArabic, {
  storyKey: 'Moses',
  storyIds: mosesB1BlueprintConfig.storyIds,
  glossaryPageIds: mosesB1BlueprintConfig.glossaryPageIds,
  vocabularyPageId: mosesB1BlueprintConfig.vocabularyPageId,
  explicitTargets: mosesB1ExplicitHighlightTargets,
});

export const mosesB1SourcePagesEn = standardized.englishPages;
export const mosesB1SourcePagesAr = standardized.arabicPages;
export const mosesB1HighlightTargets = standardized.targets;
