import type { BookData, PageData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { applySafeAdvancedParallelLearning } from '../../safeAdvancedParallelLearning';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { mosesB2PagesGoldEn } from './goldLearning';
import {
  mosesB2TeacherGuideMetadataFinalEn,
  mosesB2StudentGuideSectionsFinalEn,
  mosesB2StudentGuideTextFinalEn,
  mosesB2StudentGuideMetadataFinalEn,
} from './goldGuideFinal';
import { mosesB2PagesGoldAr } from './goldLearningAr';
import {
  mosesB2TeacherGuideMetadataFinalAr,
  mosesB2StudentGuideSectionsFinalAr,
  mosesB2StudentGuideTextFinalAr,
  mosesB2StudentGuideMetadataFinalAr,
} from './goldGuideFinalAr';
import { mosesB2ReviewedHighlightPairs } from './highlightPairs';

const mosesB2Config = {
  level: 'B2' as const,
  storyIds: Array.from({ length: 24 }, (_, index) => index + 1),
  knowledgeCheckPageId: 25,
  vocabularyPageId: 26,
  glossaryPageIds: [27, 28] as [number, number],
  reviewPageId: 29,
  finalChallengePageId: 30,
};

/**
 * Chapter 4 canonical prose already uses the corrected wording
 * "he was miraculously saved". Remove stale derived survive/survived metadata
 * without touching the canonical story sentence.
 */
const preserveSavedWording = (pages: PageData[]): PageData[] => pages.map((page) => {
  if (page.type !== 'story' || page.id !== 4) return page;

  return {
    ...page,
    vocabulary: (page.vocabulary ?? []).filter((entry) => entry.word.trim().toLowerCase() !== 'survive'),
    animatedWords: (page.animatedWords ?? []).filter((word) => word.trim().toLowerCase() !== 'survive'),
    hotspots: page.hotspots?.map((hotspot) => hotspot.id === 'h4-1'
      ? {
          ...hotspot,
          title: 'Miraculously Saved',
          description: 'It was found at the foot of a tree near the Pharaoh’s palace on the banks of the Nile and he was miraculously saved.',
        }
      : hotspot),
    exercises: page.exercises?.map((exercise) => ({
      ...exercise,
      options: exercise.options?.map((option) => option.replace(
        'Moses survives through the Nile as a baby',
        'Moses was miraculously saved after travelling through the Nile as a baby',
      )),
    })),
  };
});

const mosesB2SourceTitleOverridesEn = {
  2: { 'h2-2': 'Seti I' },
  14: { 'h14-1': 'Do not fear' },
  18: { 'h18-1': 'Aaron' },
  19: { 'h19-2': 'Bring it' },
  23: { 'h23-1': 'Strike the sea', 'h23-2': 'extraordinary event', 'h23-3': 'parted waters' },
} as const;

const mosesB2SourceDescriptionOverridesEn = {
  2: {
    'h2-2': 'According to the sources, Seti I (I. Seti, approximately 1290-1279 BC) was the pharaoh who oppressed the Israelites.',
  },
  14: {
    'h14-1': 'The old man comforted him: “Do not fear, you have escaped from the wrongdoers.”',
  },
  18: {
    'h18-1': 'Aaron (Harun), who was the brother of Moses and the prophet sent to the Children of Israel, helped Moses (pbuh).',
  },
  19: {
    'h19-2': 'The Pharaoh said, “Bring it, if you are honest!”',
  },
  23: {
    'h23-1': 'Then We inspired Moses, saying: ‘Strike the sea with your stick.’',
    'h23-2': 'He and his soldiers saw this extraordinary event as a sign of Pharaoh’s godlike power.',
    'h23-3': 'They entered the parted waters, and when they were midway, Allah commanded the sea to return to its former state.',
  },
} as const;

export const mosesB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(preserveSavedWording(mosesB2PagesGoldEn), {
  language: 'en',
  blockedHighlights: ['survive'],
  maxUniqueHighlights: 10,
});

export const mosesB2PagesBeforeHotspotSourceLockAr = applyB2StoryLanguageLock(mosesB2PagesGoldAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const mosesB2PagesLockedEn = applyHotspotSourceLock(mosesB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: mosesB2SourceTitleOverridesEn,
  descriptionOverrides: mosesB2SourceDescriptionOverridesEn,
});

const mosesB2PagesLockedAr = applyHotspotSourceLock(mosesB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

const mosesB2HighlightStandard = applyB2HighlightStandard(mosesB2PagesLockedEn, mosesB2PagesLockedAr, {
  storyKey: 'Moses',
  storyIds: mosesB2Config.storyIds,
  glossaryPageIds: mosesB2Config.glossaryPageIds,
  vocabularyPageId: mosesB2Config.vocabularyPageId,
  explicitTargets: resolveB2ReviewedPairs(
    mosesB2PagesLockedEn,
    mosesB2PagesLockedAr,
    'Moses',
    mosesB2ReviewedHighlightPairs,
  ),
});

export const mosesB2HighlightTargets = mosesB2HighlightStandard.targets;
const mosesB2Parallel = applySafeAdvancedParallelLearning({
  englishPages: mosesB2HighlightStandard.englishPages,
  arabicPages: mosesB2HighlightStandard.arabicPages,
  config: mosesB2Config,
});
const mosesB2GuidesEn = buildB2EvidenceGuides({ effectivePages: mosesB2Parallel.englishPages, storyIds: mosesB2Config.storyIds, language: 'en' });
const mosesB2GuidesAr = buildB2EvidenceGuides({ effectivePages: mosesB2Parallel.arabicPages, storyIds: mosesB2Config.storyIds, language: 'ar' });

export const mosesB2BookDataEn: BookData = {
  id: 'moses-b2-en',
  title: 'Stories of the Prophets: Moses (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: mosesB2Parallel.englishPages,
  teacherGuide: mosesB2GuidesEn.teacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataFinalEn,
  selfStudyGuide: mosesB2GuidesEn.selfStudyGuide,
  studentGuideSections: mosesB2StudentGuideSectionsFinalEn,
  studentGuideText: mosesB2StudentGuideTextFinalEn,
  studentGuideMetadata: mosesB2StudentGuideMetadataFinalEn,
};

export const mosesB2BookDataAr: BookData = {
  id: 'moses-b2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: mosesB2Parallel.arabicPages,
  teacherGuide: mosesB2GuidesAr.teacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataFinalAr,
  selfStudyGuide: mosesB2GuidesAr.selfStudyGuide,
  studentGuideSections: mosesB2StudentGuideSectionsFinalAr,
  studentGuideText: mosesB2StudentGuideTextFinalAr,
  studentGuideMetadata: mosesB2StudentGuideMetadataFinalAr,
};

export const mosesB2BookData = mosesB2BookDataEn;
