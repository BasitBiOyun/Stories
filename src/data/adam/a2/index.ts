import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import {
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuideMetadata,
  type A2BookConfig,
} from '../../a2BookSupport';
import { syncA2GlossariesFromStoryHighlights } from '../../a2HighlightStandard';
import { runA2BlueprintSystem } from '../../a2BlueprintSystem';
import { adamA2PagesQualityFinalized } from './en/qualityFinalization';
import { adamA2PagesArQualityFinalized } from './ar/qualityFinalization';
import { validateAdamA2HighlightContract } from './highlightValidation';
import { adamA2LearningBlueprint } from './learningBlueprint';

const adamA2Config: A2BookConfig = {
  storyIds: Array.from({ length: 10 }, (_, index) => index + 1),
  knowledgeCheckPageId: 11,
  vocabularyPageId: 12,
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

const adamA2 = runA2BlueprintSystem({
  englishPages: adamA2PagesLockedEn,
  arabicPages: adamA2PagesLockedAr,
  config: adamA2Config,
  blueprint: adamA2LearningBlueprint,
});

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
  pages: adamA2.englishPages,
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
  pages: adamA2.arabicPages,
  teacherGuide: adamA2.arabicTeacherGuide,
  teacherGuideMetadata: adamA2TeacherGuideMetadataAr,
  selfStudyGuide: adamA2.arabicSelfStudyGuide,
  studentGuideSections: adamA2StudentGuideSectionsAr,
  studentGuideMetadata: adamA2StudentGuideMetadataAr,
  studentGuideText: adamA2StudentGuideTextAr,
};

export const adamA2BookData = adamA2BookDataEn;
