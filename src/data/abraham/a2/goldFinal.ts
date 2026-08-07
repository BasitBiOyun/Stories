import { applyA2VocabularyGold } from '../../a2GoldVocabulary';
import {
  abrahamA2GoldConfig,
  abrahamA2PagesGoldAr as basePagesAr,
  abrahamA2PagesGoldEn as basePagesEn,
} from './gold';
import {
  buildA2SelfStudyGuide,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuide,
  buildA2TeacherGuideMetadata,
} from '../../a2GoldFactory';

export const abrahamA2PagesFinalEn = applyA2VocabularyGold({
  pages: basePagesEn,
  storyIds: abrahamA2GoldConfig.storyIds,
  vocabularyPageId: 16,
  language: 'en',
  chapterAdditions: {
    6: [{ word: 'axe', definition: 'A heavy tool used for cutting or breaking things.' }],
  },
});

export const abrahamA2PagesFinalAr = applyA2VocabularyGold({
  pages: basePagesAr,
  storyIds: abrahamA2GoldConfig.storyIds,
  vocabularyPageId: 16,
  language: 'ar',
  chapterAdditions: {
    6: [{ word: 'فَأْس', definition: 'أداة قوية تُستعمل للقطع أو الكسر.' }],
  },
});

export const abrahamA2TeacherGuideFinalEn = buildA2TeacherGuide(abrahamA2PagesFinalEn, abrahamA2GoldConfig.storyIds, 'en');
export const abrahamA2TeacherGuideFinalAr = buildA2TeacherGuide(abrahamA2PagesFinalAr, abrahamA2GoldConfig.storyIds, 'ar');
export const abrahamA2SelfStudyGuideFinalEn = buildA2SelfStudyGuide(abrahamA2PagesFinalEn, abrahamA2GoldConfig.storyIds, 'en');
export const abrahamA2SelfStudyGuideFinalAr = buildA2SelfStudyGuide(abrahamA2PagesFinalAr, abrahamA2GoldConfig.storyIds, 'ar');
export const abrahamA2TeacherGuideMetadataFinalEn = buildA2TeacherGuideMetadata('Prophet Abraham', abrahamA2GoldConfig.storyIds.length, 'en');
export const abrahamA2TeacherGuideMetadataFinalAr = buildA2TeacherGuideMetadata('قصة النبي إبراهيم', abrahamA2GoldConfig.storyIds.length, 'ar');
export const abrahamA2StudentGuideSectionsFinalEn = buildA2StudentGuideSections('en');
export const abrahamA2StudentGuideSectionsFinalAr = buildA2StudentGuideSections('ar');
export const abrahamA2StudentGuideMetadataFinalEn = buildA2StudentGuideMetadata('Prophet Abraham', 'en');
export const abrahamA2StudentGuideMetadataFinalAr = buildA2StudentGuideMetadata('قصة النبي إبراهيم', 'ar');
export const abrahamA2StudentGuideTextFinalEn = buildA2StudentGuideText('Prophet Abraham', 'en');
export const abrahamA2StudentGuideTextFinalAr = buildA2StudentGuideText('قصة النبي إبراهيم', 'ar');
