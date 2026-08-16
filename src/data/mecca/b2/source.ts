import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { meccaB2Pages } from './en/pages';
import { meccaB2PagesAr } from './ar/pages';
import { meccaB2BlueprintConfig } from './config';

const sourceTitleOverridesEn = {
  7: { 'h7-2': 'social class division' },
  13: { 'h13-2': 'new Muslim community' },
  17: { 'h17-2': 'fair and peaceful place' },
} as const;

const languageLockedEn = applyB2StoryLanguageLock(meccaB2Pages, {
  language: 'en',
  maxUniqueHighlights: 10,
});

const languageLockedAr = applyB2StoryLanguageLock(meccaB2PagesAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const hotspotLockedEn = applyHotspotSourceLock(languageLockedEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: sourceTitleOverridesEn,
});

const hotspotLockedAr = applyHotspotSourceLock(languageLockedAr, {
  language: 'ar',
  level: 'B2',
});

const standardized = applyB2HighlightStandard(hotspotLockedEn, hotspotLockedAr, {
  storyKey: 'Mecca',
  storyIds: meccaB2BlueprintConfig.storyIds,
  glossaryPageIds: meccaB2BlueprintConfig.glossaryPageIds,
});

export const meccaB2SourcePagesEn = standardized.englishPages;
export const meccaB2SourcePagesAr = standardized.arabicPages;
export const meccaB2HighlightTargets = standardized.targets;
