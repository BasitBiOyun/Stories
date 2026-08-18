import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import {
  buildA2StudentGuideMetadata,
  buildA2TeacherGuideMetadata,
  type A2BookConfig,
} from '../../a2BookSupport';
import { syncA2GlossariesFromStoryHighlights } from '../../a2HighlightStandard';
import { runA2BlueprintSystem } from '../../a2BlueprintSystem';
import {
  applyAdamA2GoldVocabularyChallenge,
  buildAdamA2GoldStudentGuideSections,
  buildAdamA2GoldStudentGuideText,
  buildAdamA2GoldTeacherGuideMetadata,
} from './goldGuides';
import { adamA2LearningBlueprint } from './learningBlueprint';
import { adamA2SourcePagesAr, adamA2SourcePagesEn } from './source';

const adamA2Config: A2BookConfig = {
  storyIds: Array.from({ length: 10 }, (_, index) => index + 1),
  knowledgeCheckPageId: 11,
  vocabularyPageId: 12,
  reviewPageId: 13,
  glossaryPageIds: [14, 15],
  finalChallengePageId: 16,
};

const adamA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(adamA2SourcePagesEn, 'adam', 'en'),
  { storyIds: adamA2Config.storyIds, glossaryPageIds: adamA2Config.glossaryPageIds },
  'en',
);
const adamA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(adamA2SourcePagesAr, 'adam', 'ar'),
  { storyIds: adamA2Config.storyIds, glossaryPageIds: adamA2Config.glossaryPageIds },
  'ar',
);

const adamA2 = runA2BlueprintSystem({
  englishPages: adamA2PagesLockedEn,
  arabicPages: adamA2PagesLockedAr,
  config: adamA2Config,
  blueprint: adamA2LearningBlueprint,
});

const adamA2GoldPagesEn = applyAdamA2GoldVocabularyChallenge(adamA2.englishPages, adamA2LearningBlueprint, 'en');
const adamA2GoldPagesAr = applyAdamA2GoldVocabularyChallenge(adamA2.arabicPages, adamA2LearningBlueprint, 'ar');

const adamA2TeacherGuideMetadataEn = buildAdamA2GoldTeacherGuideMetadata(
  buildA2TeacherGuideMetadata('Prophet Adam', adamA2Config.storyIds.length, 'en'),
  'en',
);
const adamA2TeacherGuideMetadataAr = buildAdamA2GoldTeacherGuideMetadata(
  buildA2TeacherGuideMetadata('قصة النبي آدم', adamA2Config.storyIds.length, 'ar'),
  'ar',
);
const adamA2StudentGuideSectionsEn = buildAdamA2GoldStudentGuideSections('en');
const adamA2StudentGuideSectionsAr = buildAdamA2GoldStudentGuideSections('ar');
const adamA2StudentGuideMetadataEn = buildA2StudentGuideMetadata('Prophet Adam', 'en');
const adamA2StudentGuideMetadataAr = buildA2StudentGuideMetadata('قصة النبي آدم', 'ar');
const adamA2StudentGuideTextEn = buildAdamA2GoldStudentGuideText(adamA2LearningBlueprint, 'en');
const adamA2StudentGuideTextAr = buildAdamA2GoldStudentGuideText(adamA2LearningBlueprint, 'ar');

export const adamA2BookDataEn: BookData = {
  id: 'a2-prophets-en',
  title: 'Stories of the Prophets: Adam (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: adamA2GoldPagesEn,
  teacherGuide: adamA2.englishTeacherGuide,
  teacherGuideMetadata: adamA2TeacherGuideMetadataEn,
  selfStudyGuide: adamA2.englishSelfStudyGuide,
  studentGuideSections: adamA2StudentGuideSectionsEn,
  studentGuideMetadata: adamA2StudentGuideMetadataEn,
  studentGuideText: adamA2StudentGuideTextEn,
};

export const adamA2BookDataAr: BookData = {
  id: 'a2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'A2',
  baseFontSize: 14,
  pages: adamA2GoldPagesAr,
  teacherGuide: adamA2.arabicTeacherGuide,
  teacherGuideMetadata: adamA2TeacherGuideMetadataAr,
  selfStudyGuide: adamA2.arabicSelfStudyGuide,
  studentGuideSections: adamA2StudentGuideSectionsAr,
  studentGuideMetadata: adamA2StudentGuideMetadataAr,
  studentGuideText: adamA2StudentGuideTextAr,
};

export const adamA2BookData = adamA2BookDataEn;
