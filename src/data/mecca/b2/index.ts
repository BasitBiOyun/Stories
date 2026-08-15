import { BookData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { applyValidatedAdvancedParallelLearning } from '../../advancedParallelLearning';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import {
  meccaB2PagesGoldEn,
  meccaB2TeacherGuideMetadataGoldEn,
  meccaB2StudentGuideSectionsGoldEn,
  meccaB2StudentGuideTextGoldEn,
  meccaB2StudentGuideMetadataGoldEn,
} from './gold';
import {
  meccaB2PagesGoldAr,
  meccaB2TeacherGuideMetadataGoldAr,
  meccaB2StudentGuideSectionsGoldAr,
  meccaB2StudentGuideTextGoldAr,
  meccaB2StudentGuideMetadataGoldAr,
} from './goldAr';

const meccaB2Config = {
  level: 'B2' as const,
  storyIds: Array.from({ length: 17 }, (_, index) => index + 1),
  knowledgeCheckPageId: 18,
  reviewPageId: 19,
  glossaryPageIds: [20, 21] as [number, number],
  finalChallengePageId: 22,
};

const meccaB2SourceTitleOverridesEn = {
  7: { 'h7-2': 'social class division' },
  13: { 'h13-2': 'new Muslim community' },
  17: { 'h17-2': 'fair and peaceful place' },
} as const;

export const meccaB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(meccaB2PagesGoldEn, {
  language: 'en',
  maxUniqueHighlights: 10,
});

export const meccaB2PagesBeforeHotspotSourceLockAr = applyB2StoryLanguageLock(meccaB2PagesGoldAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const meccaB2PagesLockedEn = applyHotspotSourceLock(meccaB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: meccaB2SourceTitleOverridesEn,
});

const meccaB2PagesLockedAr = applyHotspotSourceLock(meccaB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

const meccaB2HighlightStandard = applyB2HighlightStandard(meccaB2PagesLockedEn, meccaB2PagesLockedAr, {
  storyKey: 'Mecca',
  storyIds: meccaB2Config.storyIds,
  glossaryPageIds: meccaB2Config.glossaryPageIds,
});

export const meccaB2HighlightTargets = meccaB2HighlightStandard.targets;
const meccaB2Parallel = applyValidatedAdvancedParallelLearning({
  englishPages: meccaB2HighlightStandard.englishPages,
  arabicPages: meccaB2HighlightStandard.arabicPages,
  config: meccaB2Config,
});
const meccaB2GuidesEn = buildB2EvidenceGuides({ effectivePages: meccaB2Parallel.englishPages, storyIds: meccaB2Config.storyIds, language: 'en' });
const meccaB2GuidesAr = buildB2EvidenceGuides({ effectivePages: meccaB2Parallel.arabicPages, storyIds: meccaB2Config.storyIds, language: 'ar' });

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Stories of the Prophets: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: meccaB2Parallel.englishPages,
  teacherGuide: meccaB2GuidesEn.teacherGuide,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataGoldEn,
  selfStudyGuide: meccaB2GuidesEn.selfStudyGuide,
  studentGuideSections: meccaB2StudentGuideSectionsGoldEn,
  studentGuideText: meccaB2StudentGuideTextGoldEn,
  studentGuideMetadata: meccaB2StudentGuideMetadataGoldEn,
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: meccaB2Parallel.arabicPages,
  teacherGuide: meccaB2GuidesAr.teacherGuide,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataGoldAr,
  selfStudyGuide: meccaB2GuidesAr.selfStudyGuide,
  studentGuideSections: meccaB2StudentGuideSectionsGoldAr,
  studentGuideText: meccaB2StudentGuideTextGoldAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataGoldAr,
};

export const meccaB2BookData = meccaB2BookDataEn;
