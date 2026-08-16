import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { adamB2Pages } from './en/pages';
import { adamB2PagesAr } from './ar/pages';
import { adamB2ReviewedHighlightPairs } from './highlightPairs';
import { adamB2BlueprintConfig } from './config';

const titleOverridesEn = {
  2: { h2a: 'Humble Material', h2b: 'Different Lands' },
  3: { h3a: 'Representative', h3b: 'Knowledge' },
  4: { h5a: 'Knowledge', h5b: 'Fire and Clay' },
  5: { h5a: 'Respect and Admiration', h5b: 'Origin' },
  7: { h7a: 'Satan Whispered', h7b: 'The Tree' },
  8: { h8a: 'Unclad', h8b: 'Forgiveness' },
  11: { h11a: 'Life on Earth', h11b: 'Struggle' },
} as const;

const titleOverridesAr = {
  2: { h2a: 'مادة بسيطة', h2b: 'اختلاف ألوانهم' },
  3: { h3a: 'الخليفة', h3b: 'الأسماء كلها' },
} as const;

const sourceTitleOverridesEn = {
  4: { h5b: 'power of knowledge' },
  6: { h6a: 'the Garden', h6b: 'point of no return' },
  9: { h9a: 'left Paradise' },
  10: { h10b: 'descending upon Earth' },
  13: { h13b: 'rebellious attitude' },
  14: { h13a: 'tragic end' },
  15: { h14b: 'daily bread' },
  16: { h15a: 'his successor' },
  17: { h18b: 'worldly life' },
} as const;

const sourceDescriptionOverridesEn = {
  17: {
    h18b: 'In fact, all the events that Adam (pbuh) and Eve experienced are like a summary of the adventures of their descendants in worldly life.',
  },
} as const;

const groundedEnglish = applyB2StoryLanguageLock(adamB2Pages, {
  language: 'en',
  titleOverrides: titleOverridesEn,
  maxUniqueHighlights: 10,
});

const groundedArabic = applyB2StoryLanguageLock(adamB2PagesAr, {
  language: 'ar',
  titleOverrides: titleOverridesAr,
  maxUniqueHighlights: 10,
});

const lockedEnglish = applyHotspotSourceLock(groundedEnglish, {
  language: 'en',
  level: 'B2',
  titleOverrides: sourceTitleOverridesEn,
  descriptionOverrides: sourceDescriptionOverridesEn,
});

const lockedArabic = applyHotspotSourceLock(groundedArabic, {
  language: 'ar',
  level: 'B2',
});

const standardized = applyB2HighlightStandard(lockedEnglish, lockedArabic, {
  storyKey: 'Adam',
  storyIds: adamB2BlueprintConfig.storyIds,
  glossaryPageIds: adamB2BlueprintConfig.glossaryPageIds,
  explicitTargets: resolveB2ReviewedPairs(
    lockedEnglish,
    lockedArabic,
    'Adam',
    adamB2ReviewedHighlightPairs,
  ),
});

export const adamB2SourcePagesEn = standardized.englishPages;
export const adamB2SourcePagesAr = standardized.arabicPages;
export const adamB2HighlightTargets = standardized.targets;
