import { BookData, PageData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { applyValidatedAdvancedParallelLearning } from '../../advancedParallelLearning';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import {
  abrahamB2PagesGoldEn,
  abrahamB2TeacherGuideMetadataGoldEn,
  abrahamB2StudentGuideMetadataGoldEn,
  abrahamB2StudentGuideSectionsGoldEn,
  abrahamB2StudentGuideTextGoldEn,
} from './gold';
import {
  abrahamB2PagesGoldAr,
  abrahamB2TeacherGuideMetadataGoldAr,
  abrahamB2StudentGuideMetadataGoldAr,
  abrahamB2StudentGuideSectionsGoldAr,
  abrahamB2StudentGuideTextGoldAr,
} from './goldAr';
import { abrahamB2ReviewedHighlightPairs } from './highlightPairs';

const abrahamB2Config = {
  level: 'B2' as const,
  storyIds: Array.from({ length: 35 }, (_, index) => index + 1),
  knowledgeCheckPageId: 36,
  reviewPageId: 37,
  glossaryPageIds: [38, 39] as [number, number],
  finalChallengePageId: 40,
};

const abrahamB2SourceTitleOverridesEn = {
  9: { 'b2-hs-9-2': 'Creator’s command' },
} as const;

const abrahamB2SourceDescriptionOverridesEn = {
  9: {
    'b2-hs-9-2': 'He was astonished that these heavenly bodies were worshipped by people, while in fact all those stars, asteroids, the Sun, the Moon, etc., had been created; they appeared and disappeared at the Creator’s command.',
  },
} as const;

export const adamB2ReferencesTemporarilyArchived = true;

export const abrahamB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(abrahamB2PagesGoldEn, {
  language: 'en',
  maxUniqueHighlights: 10,
});

export const abrahamB2PagesBeforeHotspotSourceLockAr = applyB2StoryLanguageLock(abrahamB2PagesGoldAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const abrahamB2PagesLockedEn = applyHotspotSourceLock(abrahamB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: abrahamB2SourceTitleOverridesEn,
  descriptionOverrides: abrahamB2SourceDescriptionOverridesEn,
});

const abrahamB2PagesLockedAr = applyHotspotSourceLock(abrahamB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

const abrahamB2HighlightStandard = applyB2HighlightStandard(abrahamB2PagesLockedEn, abrahamB2PagesLockedAr, {
  storyKey: 'Abraham',
  storyIds: abrahamB2Config.storyIds,
  glossaryPageIds: abrahamB2Config.glossaryPageIds,
  explicitTargets: resolveB2ReviewedPairs(
    abrahamB2PagesLockedEn,
    abrahamB2PagesLockedAr,
    'Abraham',
    abrahamB2ReviewedHighlightPairs,
  ),
});

const prepareKnowledgeCheckPage = (pages: PageData[], language: 'en' | 'ar'): PageData[] => pages.map((page) => (
  page.id === abrahamB2Config.knowledgeCheckPageId
    ? {
        ...page,
        type: 'quiz',
        title: language === 'ar' ? 'اختبار المعرفة — B2' : 'B2 Knowledge Check',
        content: '',
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

export const abrahamB2HighlightTargets = abrahamB2HighlightStandard.targets;
const abrahamB2Parallel = applyValidatedAdvancedParallelLearning({
  englishPages: prepareKnowledgeCheckPage(abrahamB2HighlightStandard.englishPages, 'en'),
  arabicPages: prepareKnowledgeCheckPage(abrahamB2HighlightStandard.arabicPages, 'ar'),
  config: abrahamB2Config,
});
const abrahamB2GuidesEn = buildB2EvidenceGuides({ effectivePages: abrahamB2Parallel.englishPages, storyIds: abrahamB2Config.storyIds, language: 'en' });
const abrahamB2GuidesAr = buildB2EvidenceGuides({ effectivePages: abrahamB2Parallel.arabicPages, storyIds: abrahamB2Config.storyIds, language: 'ar' });

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: abrahamB2Parallel.englishPages,
  teacherGuide: abrahamB2GuidesEn.teacherGuide,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataGoldEn,
  studentGuideMetadata: abrahamB2StudentGuideMetadataGoldEn,
  studentGuideSections: abrahamB2StudentGuideSectionsGoldEn,
  selfStudyGuide: abrahamB2GuidesEn.selfStudyGuide,
  studentGuideText: abrahamB2StudentGuideTextGoldEn
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (ع)',
  level: 'B2',
  baseFontSize: 14,
  pages: abrahamB2Parallel.arabicPages,
  teacherGuide: abrahamB2GuidesAr.teacherGuide,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataGoldAr,
  studentGuideMetadata: abrahamB2StudentGuideMetadataGoldAr,
  studentGuideSections: abrahamB2StudentGuideSectionsGoldAr,
  selfStudyGuide: abrahamB2GuidesAr.selfStudyGuide,
  studentGuideText: abrahamB2StudentGuideTextGoldAr
};
