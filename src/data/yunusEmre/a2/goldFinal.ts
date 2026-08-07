import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import { yunusA2GoldConfig, yunusA2PagesGoldAr as basePagesAr, yunusA2PagesGoldEn as basePagesEn } from './gold';
import { buildA2SelfStudyGuide, buildA2StudentGuideMetadata, buildA2StudentGuideSections, buildA2StudentGuideText, buildA2TeacherGuide, buildA2TeacherGuideMetadata } from '../../a2GoldFactory';

export const yunusA2PagesFinalEn = applyA2VocabularyGold({ pages: basePagesEn, storyIds: yunusA2GoldConfig.storyIds, vocabularyPageId: 10, language: 'en' });
export const yunusA2PagesFinalAr = applyA2VocabularyGold({ pages: basePagesAr, storyIds: yunusA2GoldConfig.storyIds, vocabularyPageId: 10, language: 'ar' });

export const yunusA2TeacherGuideFinalEn = buildA2TeacherGuide(yunusA2PagesFinalEn, yunusA2GoldConfig.storyIds, 'en');
export const yunusA2TeacherGuideFinalAr = buildA2TeacherGuide(yunusA2PagesFinalAr, yunusA2GoldConfig.storyIds, 'ar');
export const yunusA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(yunusA2PagesFinalEn, yunusA2GoldConfig.storyIds, 'en');
export const yunusA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(yunusA2PagesFinalAr, yunusA2GoldConfig.storyIds, 'ar');
export const yunusA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Yunus Emre', yunusA2GoldConfig.storyIds.length, 'en');
export const yunusA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('يونس إمره', yunusA2GoldConfig.storyIds.length, 'ar');
export const yunusA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const yunusA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const yunusA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Yunus Emre', 'en');
export const yunusA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('يونس إمره', 'ar');
export const yunusA2StudentGuideTextFinalEn = buildA2StudentGuideText('Yunus Emre', 'en');
export const yunusA2StudentGuideTextFinalAr = buildA2StudentGuideText('يونس إمره', 'ar');
