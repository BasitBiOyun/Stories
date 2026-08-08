import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { yunusB1Pages } from './en/pages';
import { yunusB1TeacherGuide } from './en/teacherGuide';
import { yunusEmreB1PagesAr } from './ar/pages';
import { yunusEmreB1TeacherGuideAr } from './ar/teacherGuide';

export const yunusEmreB1GoldConfig: B1GoldPageConfig = {
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 14,
  vocabularyPageId: 15,
  glossaryPageIds: [16, 17],
  reviewPageId: 18,
  finalChallengePageId: 19,
};

export const yunusEmreB1PagesGoldEn = applyB1GoldPages({
  canonicalPages: yunusB1Pages,
  config: yunusEmreB1GoldConfig,
  language: 'en',
});

export const yunusEmreB1PagesGoldAr = applyB1GoldPages({
  canonicalPages: yunusEmreB1PagesAr,
  config: yunusEmreB1GoldConfig,
  language: 'ar',
});

export const yunusEmreB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(yunusB1TeacherGuide);
export const yunusEmreB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(yunusEmreB1TeacherGuideAr);
