import { BookData, PageData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { applyValidatedAdvancedParallelLearning } from '../../advancedParallelLearning';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { yunusB2PagesGoldFinalEn, yunusB2PagesGoldFinalAr } from './goldAttribution';
import {
  yunusB2TeacherGuideMetadataGoldEn,
  yunusB2StudentGuideSectionsGoldEn,
  yunusB2StudentGuideTextGoldEn,
  yunusB2StudentGuideMetadataGoldEn,
} from './gold';
import {
  yunusB2TeacherGuideMetadataGoldAr,
  yunusB2StudentGuideSectionsGoldAr,
  yunusB2StudentGuideTextGoldAr,
  yunusB2StudentGuideMetadataGoldAr,
} from './goldAr';
import { yunusEmreB2ReviewedHighlightPairs } from './highlightPairs';

const yunusB2Config = {
  level: 'B2' as const,
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 15,
  vocabularyPageId: 16,
  glossaryPageIds: [17, 18] as [number, number],
  reviewPageId: 19,
  finalChallengePageId: 20,
};

const yunusB2SourceTitleOverridesEn = {
  5: { 'h5-1': 'false retreat', 'h5-2': 'victory at Kösedağ' },
  6: { 'h6-1': 'civil officials', 'h6-2': 'Ilkhanate Empire' },
  7: { 'h7-2': 'wise dervish' },
  8: { 'h8-1': 'vahdet-i vücut', 'h8-2': 'true and only reality' },
  9: { 'h9-1': 'love and unity' },
  10: { 'h10-1': 'center of love', 'h10-2': 'a light from Allah' },
  11: { 'h11-1': 'heart and reason' },
  12: { 'h12-1': 'morality consists', 'h12-2': 'negative traits' },
  13: { 'h13-2': 'future generations' },
} as const;

const yunusB2SourceDescriptionOverridesEn = {
  10: {
    'h10-1': 'In Yunus Emre’s philosophy, heart is the center of love.',
    'h10-2': 'Yunus Emre emphasizes not only heart but also intellect as a value, describing it as “a light from Allah that has existed since eternity.”',
  },
} as const;

const groundTransoxianaSurfaceForm = (pages: PageData[]): PageData[] => pages.map((page) => {
  if (page.type !== 'story' || page.id !== 7) return page;
  const from = 'مَا وَرَاءِ النَّهْرِ';
  const to = 'وَمَا وَرَاءِ النَّهْرِ';
  return {
    ...page,
    vocabulary: page.vocabulary?.map(entry => entry.word === from ? { ...entry, word: to } : entry),
    animatedWords: page.animatedWords?.map(word => word === from ? to : word),
  };
});

export const yunusB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(yunusB2PagesGoldFinalEn, {
  language: 'en',
  blockedHighlights: [
    'relates to',
    'adhere to',
    'coincided with',
    'cope with',
    'upside down',
  ],
  titleOverrides: {
    1: { 'h1-1': 'Old Anatolian Turkish', 'h1-2': 'Sûfî' },
    2: { 'h2-1': 'Historical accounts' },
    3: { 'h3-1': 'fine arts', 'h3-2': 'hard times' },
    4: { 'h4-1': 'Mongol invasion', 'h4-2': 'Turkmen rebelled' },
  },
  maxUniqueHighlights: 10,
});

// Page 14 is the Arabic References page, matching English Page 14. It is not an
// instructional chapter, so the legacy chapter exercise must not turn it into a
// fourteenth lesson or create EN/AR guide asymmetry.
const yunusB2GoldFinalArWithoutReferenceExercise = yunusB2PagesGoldFinalAr.map(page => (
  page.id === 14 && page.type === 'story'
    ? { ...page, exercises: undefined }
    : page
));

export const yunusB2PagesBeforeHotspotSourceLockAr = groundTransoxianaSurfaceForm(applyB2StoryLanguageLock(yunusB2GoldFinalArWithoutReferenceExercise, {
  language: 'ar',
  maxUniqueHighlights: 10,
}));

const yunusB2PagesLockedEn = applyHotspotSourceLock(yunusB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: yunusB2SourceTitleOverridesEn,
  descriptionOverrides: yunusB2SourceDescriptionOverridesEn,
});

const yunusB2PagesLockedAr = applyHotspotSourceLock(yunusB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

const yunusB2HighlightStandard = applyB2HighlightStandard(yunusB2PagesLockedEn, yunusB2PagesLockedAr, {
  storyKey: 'Yunus Emre',
  storyIds: yunusB2Config.storyIds,
  glossaryPageIds: yunusB2Config.glossaryPageIds,
  vocabularyPageId: yunusB2Config.vocabularyPageId,
  explicitTargets: resolveB2ReviewedPairs(
    yunusB2PagesLockedEn,
    yunusB2PagesLockedAr,
    'Yunus Emre',
    yunusEmreB2ReviewedHighlightPairs,
  ),
});

export const yunusEmreB2HighlightTargets = yunusB2HighlightStandard.targets;
const yunusB2Parallel = applyValidatedAdvancedParallelLearning({
  englishPages: yunusB2HighlightStandard.englishPages,
  arabicPages: yunusB2HighlightStandard.arabicPages,
  config: yunusB2Config,
});
const yunusB2GuidesEn = buildB2EvidenceGuides({ effectivePages: yunusB2Parallel.englishPages, storyIds: yunusB2Config.storyIds, language: 'en' });
const yunusB2GuidesAr = buildB2EvidenceGuides({ effectivePages: yunusB2Parallel.arabicPages, storyIds: yunusB2Config.storyIds, language: 'ar' });

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Stories of the Prophets: Yunus Emre (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: yunusB2Parallel.englishPages,
  teacherGuide: yunusB2GuidesEn.teacherGuide,
  teacherGuideMetadata: yunusB2TeacherGuideMetadataGoldEn,
  selfStudyGuide: yunusB2GuidesEn.selfStudyGuide,
  studentGuideSections: yunusB2StudentGuideSectionsGoldEn,
  studentGuideText: yunusB2StudentGuideTextGoldEn,
  studentGuideMetadata: yunusB2StudentGuideMetadataGoldEn,
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'قصص الأنبياء: يونس إمره (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: yunusB2Parallel.arabicPages,
  teacherGuide: yunusB2GuidesAr.teacherGuide,
  teacherGuideMetadata: yunusB2TeacherGuideMetadataGoldAr,
  selfStudyGuide: yunusB2GuidesAr.selfStudyGuide,
  studentGuideSections: yunusB2StudentGuideSectionsGoldAr,
  studentGuideText: yunusB2StudentGuideTextGoldAr,
  studentGuideMetadata: yunusB2StudentGuideMetadataGoldAr,
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
