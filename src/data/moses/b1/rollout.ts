import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { mosesB1PagesFinalEn, mosesB1TeacherGuideFinalEn, mosesB1GoldContract } from './goldFinal';
import { mosesB1PagesAr } from './ar/pages';
import { mosesB1TeacherGuideAr } from './ar/teacherGuide';

export const mosesB1RolloutConfig: B1GoldPageConfig = {
  storyIds: [...mosesB1GoldContract.storyIds],
  knowledgeCheckPageId: mosesB1GoldContract.knowledgeCheckPageId,
  vocabularyPageId: mosesB1GoldContract.vocabularyPageId,
  glossaryPageIds: [...mosesB1GoldContract.glossaryPageIds],
  reviewPageId: mosesB1GoldContract.reviewPageId,
  finalChallengePageId: mosesB1GoldContract.finalChallengePageId,
};

export const mosesB1PagesRolloutEn = mosesB1PagesFinalEn;
export const mosesB1TeacherGuideRolloutEn = mosesB1TeacherGuideFinalEn;

export const mosesB1PagesRolloutAr = applyB1GoldPages({
  canonicalPages: mosesB1PagesAr,
  config: mosesB1RolloutConfig,
  language: 'ar',
});

export const mosesB1TeacherGuideRolloutAr = sanitizeB1TeacherGuide(mosesB1TeacherGuideAr);
