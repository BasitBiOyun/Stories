import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { mosesA2GoldConfig, mosesA2PagesGoldAr as basePagesAr, mosesA2PagesGoldEn as basePagesEn } from './gold';
import { buildA2SelfStudyGuide, buildA2StudentGuideMetadata, buildA2StudentGuideSections, buildA2StudentGuideText, buildA2TeacherGuide, buildA2TeacherGuideMetadata } from '../../a2GoldFactory';

export const mosesA2PagesFinalEn = applyA2VocabularyGold({ pages: basePagesEn, storyIds: mosesA2GoldConfig.storyIds, vocabularyPageId: 18, language: 'en' });
export const mosesA2PagesFinalAr = applyA2VocabularyGold({ pages: basePagesAr, storyIds: mosesA2GoldConfig.storyIds, vocabularyPageId: 18, language: 'ar' });

export const mosesA2TeacherGuideFinalEn = buildA2TeacherGuide(mosesA2PagesFinalEn, mosesA2GoldConfig.storyIds, 'en');
export const mosesA2TeacherGuideFinalAr = buildA2TeacherGuide(mosesA2PagesFinalAr, mosesA2GoldConfig.storyIds, 'ar');
export const mosesA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(mosesA2PagesFinalEn, mosesA2GoldConfig.storyIds, 'en');
export const mosesA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(mosesA2PagesFinalAr, mosesA2GoldConfig.storyIds, 'ar');
export const mosesA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Prophet Moses', mosesA2GoldConfig.storyIds.length, 'en');
export const mosesA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('قصة النبي موسى', mosesA2GoldConfig.storyIds.length, 'ar');
export const mosesA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const mosesA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const mosesA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Prophet Moses', 'en');
export const mosesA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('قصة النبي موسى', 'ar');
export const mosesA2StudentGuideTextFinalEn = buildA2StudentGuideText('Prophet Moses', 'en');
export const mosesA2StudentGuideTextFinalAr = buildA2StudentGuideText('قصة النبي موسى', 'ar');
