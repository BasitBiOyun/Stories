import { applyB1HighlightStandard } from '../../b1HighlightStandard';
import { applyHighlightSurfaceForms } from '../../highlightSourceLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { adamB1Pages } from './en/pages';
import { adamB1PagesAr } from './ar/pages';
import { adamB1ExplicitHighlightTargets } from './highlights';
import { adamB1BlueprintConfig } from './config';

const lockedEnglish = applyHotspotSourceLock(adamB1Pages, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    10: { 'h10-1': 'Sheep', 'h10-2': 'Crops' },
    11: { 'h11-1': 'Raven', 'h11-2': 'Anger' },
  },
});

const lockedArabic = applyHighlightSurfaceForms(
  applyHotspotSourceLock(adamB1PagesAr, { language: 'ar', level: 'B1' }),
  'ar',
);

const standardized = applyB1HighlightStandard(lockedEnglish, lockedArabic, {
  storyKey: 'Adam',
  storyIds: adamB1BlueprintConfig.storyIds,
  glossaryPageIds: adamB1BlueprintConfig.glossaryPageIds,
  vocabularyPageId: adamB1BlueprintConfig.vocabularyPageId,
  explicitTargets: adamB1ExplicitHighlightTargets,
});

export const adamB1SourcePagesEn = standardized.englishPages;
export const adamB1SourcePagesAr = standardized.arabicPages;
export const adamB1HighlightTargets = standardized.targets;
