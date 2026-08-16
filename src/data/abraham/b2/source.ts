import type { PageData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { abrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr } from './ar/pages';
import { abrahamB2ReviewedHighlightPairs } from './highlightPairs';
import { abrahamB2BlueprintConfig } from './config';

const sourceTitleOverridesEn = {
  9: { 'b2-hs-9-2': 'Creator’s command' },
} as const;

const sourceDescriptionOverridesEn = {
  9: {
    'b2-hs-9-2': 'He was astonished that these heavenly bodies were worshipped by people, while in fact all those stars, asteroids, the Sun, the Moon, etc., had been created; they appeared and disappeared at the Creator’s command.',
  },
} as const;

const languageLockedEn = applyB2StoryLanguageLock(abrahamB2Pages, {
  language: 'en',
  maxUniqueHighlights: 10,
});

const languageLockedAr = applyB2StoryLanguageLock(abrahamB2PagesAr, {
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
  storyKey: 'Abraham',
  storyIds: abrahamB2BlueprintConfig.storyIds,
  glossaryPageIds: abrahamB2BlueprintConfig.glossaryPageIds,
  explicitTargets: resolveB2ReviewedPairs(
    hotspotLockedEn,
    hotspotLockedAr,
    'Abraham',
    abrahamB2ReviewedHighlightPairs,
  ),
});

export const abrahamB2SourcePagesEn = standardized.englishPages;
export const abrahamB2SourcePagesAr = standardized.arabicPages;
export const abrahamB2HighlightTargets = standardized.targets;

const prepareKnowledgeCheckPage = (pages: PageData[], language: 'en' | 'ar'): PageData[] => pages.map((page) => (
  page.id === abrahamB2BlueprintConfig.knowledgeCheckPageId
    ? {
        ...page,
        type: 'quiz' as const,
        title: language === 'ar' ? 'اختبار المعرفة — B2' : 'B2 Knowledge Check',
        content: '',
        image: '',
        audioUrl: '',
        vocabulary: undefined,
        vocabularyPairs: undefined,
        hotspots: undefined,
        animatedWords: undefined,
        syncPoints: undefined,
        timedChunks: undefined,
        exercises: undefined,
      }
    : page
));

/**
 * Page 36 is the historical References surface in the raw book. The learning
 * runtime reuses that existing page ID as Knowledge Check, preserving the
 * canonical 1–40 page footprint without editing the raw source file.
 */
export const abrahamB2LearningPagesEn = prepareKnowledgeCheckPage(abrahamB2SourcePagesEn, 'en');
export const abrahamB2LearningPagesAr = prepareKnowledgeCheckPage(abrahamB2SourcePagesAr, 'ar');
