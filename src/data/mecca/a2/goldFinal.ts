import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import {
  meccaA2GoldConfig,
  meccaA2PagesGoldAr as basePagesAr,
  meccaA2PagesGoldEn as basePagesEn,
} from './gold';
import {
  buildA2SelfStudyGuide,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuide,
  buildA2TeacherGuideMetadata,
} from '../../a2GoldFactory';

export const meccaA2PagesFinalEn = applyA2VocabularyGold({
  pages: basePagesEn,
  storyIds: meccaA2GoldConfig.storyIds,
  vocabularyPageId: 15,
  language: 'en',
});

export const meccaA2PagesFinalAr = applyA2VocabularyGold({
  pages: basePagesAr,
  storyIds: meccaA2GoldConfig.storyIds,
  vocabularyPageId: 15,
  language: 'ar',
});

export const meccaA2TeacherGuideFinalEn = buildA2TeacherGuide(meccaA2PagesFinalEn, meccaA2GoldConfig.storyIds, 'en');
export const meccaA2TeacherGuideFinalAr = buildA2TeacherGuide(meccaA2PagesFinalAr, meccaA2GoldConfig.storyIds, 'ar');
export const meccaA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(meccaA2PagesFinalEn, meccaA2GoldConfig.storyIds, 'en');
export const meccaA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(meccaA2PagesFinalAr, meccaA2GoldConfig.storyIds, 'ar');
export const meccaA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Bilal ibn Rabah and Mecca', meccaA2GoldConfig.storyIds.length, 'en');
export const meccaA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('بلال بن رباح ومكة', meccaA2GoldConfig.storyIds.length, 'ar');
export const meccaA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const meccaA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const meccaA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Bilal ibn Rabah and Mecca', 'en');
export const meccaA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('بلال بن رباح ومكة', 'ar');
export const meccaA2StudentGuideTextFinalEn = buildA2StudentGuideText('Bilal ibn Rabah and Mecca', 'en');
export const meccaA2StudentGuideTextFinalAr = buildA2StudentGuideText('بلال بن رباح ومكة', 'ar');
