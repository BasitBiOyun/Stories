import type { PageData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { mosesB2Pages } from './en/pages';
import { pages as mosesB2PagesAr } from './ar/pages';
import { mosesB2ReviewedHighlightPairs } from './highlightPairs';
import { mosesB2BlueprintConfig } from './config';

const preserveSavedWording = (pages: PageData[]): PageData[] => pages.map((page) => {
  if (page.type !== 'story' || page.id !== 4) return page;
  return {
    ...page,
    vocabulary: (page.vocabulary ?? []).filter((entry) => entry.word.toLowerCase().trim() !== 'survive'),
    animatedWords: (page.animatedWords ?? []).filter((word) => word.toLowerCase().trim() !== 'survive'),
    hotspots: (page.hotspots ?? []).map((hotspot) => hotspot.id === 'h4-1'
      ? {
          ...hotspot,
          title: 'Miraculously Saved',
          description: 'It was found at the foot of a tree near the Pharaoh’s palace on the banks of the Nile and he was miraculously saved.',
        }
      : hotspot),
  };
});

const sourceTitleOverridesEn = {
  2: { 'h2-2': 'Seti I' },
  14: { 'h14-1': 'Do not fear' },
  18: { 'h18-1': 'Aaron' },
  19: { 'h19-2': 'Bring it' },
  23: { 'h23-1': 'Strike the sea', 'h23-2': 'extraordinary event', 'h23-3': 'parted waters' },
} as const;

const sourceDescriptionOverridesEn = {
  2: { 'h2-2': 'According to the sources, Seti I (I. Seti, approximately 1290-1279 BC) was the pharaoh who oppressed the Israelites.' },
  14: { 'h14-1': 'The old man comforted him: “Do not fear, you have escaped from the wrongdoers.”' },
  18: { 'h18-1': 'Aaron (Harun), who was the brother of Moses and the prophet sent to the Children of Israel, helped Moses (pbuh).' },
  19: { 'h19-2': 'The Pharaoh said, “Bring it, if you are honest!”' },
  23: {
    'h23-1': 'Then We inspired Moses, saying: ‘Strike the sea with your stick.’',
    'h23-2': 'He and his soldiers saw this extraordinary event as a sign of Pharaoh’s godlike power.',
    'h23-3': 'They entered the parted waters, and when they were midway, Allah commanded the sea to return to its former state.',
  },
} as const;

const languageLockedEn = applyB2StoryLanguageLock(preserveSavedWording(mosesB2Pages), {
  language: 'en',
  blockedHighlights: ['survive'],
  maxUniqueHighlights: 10,
});

const languageLockedAr = applyB2StoryLanguageLock(mosesB2PagesAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const hotspotLockedEn = applyHotspotSourceLock(languageLockedEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: sourceTitleOverridesEn,
  descriptionOverrides: sourceDescriptionOverridesEn,
});

const hotspotLockedAr = applyHotspotSourceLock(languageLockedAr, {
  language: 'ar',
  level: 'B2',
});

const standardized = applyB2HighlightStandard(hotspotLockedEn, hotspotLockedAr, {
  storyKey: 'Moses',
  storyIds: mosesB2BlueprintConfig.storyIds,
  vocabularyPageId: mosesB2BlueprintConfig.vocabularyPageId,
  glossaryPageIds: mosesB2BlueprintConfig.glossaryPageIds,
  explicitTargets: resolveB2ReviewedPairs(
    hotspotLockedEn,
    hotspotLockedAr,
    'Moses',
    mosesB2ReviewedHighlightPairs,
  ),
});

export const mosesB2SourcePagesEn = standardized.englishPages;
export const mosesB2SourcePagesAr = standardized.arabicPages;
export const mosesB2HighlightTargets = standardized.targets;
