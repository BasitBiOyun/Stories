import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import {
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuideMetadata,
  type A2GoldPageConfig,
} from '../../a2GoldFactory';
import { syncA2GlossariesFromStoryHighlights } from '../../a2HighlightStandard';
import { applyValidatedA2ParallelLearning } from '../../a2ParallelLearningGuard';
import { adamA2PagesQualityFinalized } from './en/qualityFinalization';
import { adamA2PagesArQualityFinalized } from './ar/qualityFinalization';
import { validateAdamA2HighlightContract } from './highlightValidation';
import { adamA2LearningBlueprint } from './learningBlueprint';

const adamA2Config: A2GoldPageConfig = {
  storyIds: Array.from({ length: 10 }, (_, index) => index + 1),
  knowledgeCheckPageId: 11,
  reviewPageId: 13,
  glossaryPageIds: [14, 15],
  finalChallengePageId: 16,
};

const adamA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(adamA2PagesQualityFinalized, 'adam', 'en'),
  { storyIds: adamA2Config.storyIds, glossaryPageIds: adamA2Config.glossaryPageIds },
  'en',
);
const adamA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(adamA2PagesArQualityFinalized, 'adam', 'ar'),
  { storyIds: adamA2Config.storyIds, glossaryPageIds: adamA2Config.glossaryPageIds },
  'ar',
);

validateAdamA2HighlightContract(adamA2PagesLockedEn, adamA2PagesLockedAr);

const adamA2Parallel = applyValidatedA2ParallelLearning({
  englishPages: adamA2PagesLockedEn,
  arabicPages: adamA2PagesLockedAr,
  config: adamA2Config,
  blueprint: adamA2LearningBlueprint,
});

// Blueprint guides are canonical for Adam A2. Do not rebuild them from hotspots/Word Notes.
const adamA2TeacherGuideEn = adamA2Parallel.englishTeacherGuide;
const adamA2TeacherGuideAr = adamA2Parallel.arabicTeacherGuide;
const adamA2SelfStudyGuideEn = adamA2Parallel.englishSelfStudyGuide;
const adamA2SelfStudyGuideAr = adamA2Parallel.arabicSelfStudyGuide;

const adamA2TeacherGuideMetadataEn = buildA2TeacherGuideMetadata('Prophet Adam', adamA2Config.storyIds.length, 'en');
const adamA2TeacherGuideMetadataAr = buildA2TeacherGuideMetadata('قصة النبي آدم', adamA2Config.storyIds.length, 'ar');
const adamA2StudentGuideSectionsEn = buildA2StudentGuideSections('en');
const adamA2StudentGuideSectionsAr = buildA2StudentGuideSections('ar');
const adamA2StudentGuideMetadataEn = buildA2StudentGuideMetadata('Prophet Adam', 'en');
const adamA2StudentGuideMetadataAr = buildA2StudentGuideMetadata('قصة النبي آدم', 'ar');
const adamA2StudentGuideTextEn = buildA2StudentGuideText('Prophet Adam', 'en');
const adamA2StudentGuideTextAr = buildA2StudentGuideText('قصة النبي آدم', 'ar');

export const adamA2BookDataEn: BookData = {
  id: 'a2-prophets-en',
  title: 'Stories of the Prophets: Adam (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: adamA2Parallel.englishPages,
  teacherGuide: adamA2TeacherGuideEn,
  teacherGuideMetadata: adamA2TeacherGuideMetadataEn,
  selfStudyGuide: adamA2SelfStudyGuideEn,
  studentGuideSections: adamA2StudentGuideSectionsEn,
  studentGuideMetadata: adamA2StudentGuideMetadataEn,
  studentGuideText: adamA2StudentGuideTextEn,
};

export const adamA2BookDataAr: BookData = {
  id: 'a2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'A2',
  baseFontSize: 14,
  pages: adamA2Parallel.arabicPages,
  teacherGuide: adamA2TeacherGuideAr,
  teacherGuideMetadata: adamA2TeacherGuideMetadataAr,
  selfStudyGuide: adamA2SelfStudyGuideAr,
  studentGuideSections: adamA2StudentGuideSectionsAr,
  studentGuideMetadata: adamA2StudentGuideMetadataAr,
  studentGuideText: adamA2StudentGuideTextAr,
};

export const adamA2BookData = adamA2BookDataEn;
