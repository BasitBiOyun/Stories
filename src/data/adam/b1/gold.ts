import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { adamB1Pages } from './en/pages';
import { adamB1TeacherGuide } from './en/teacherGuide';
import { adamB1PagesAr } from './ar/pages';
import { adamB1TeacherGuideAr } from './ar/teacherGuide';

export const adamB1GoldConfig: B1GoldPageConfig = {
  storyIds: Array.from({ length: 12 }, (_, index) => index + 1),
  knowledgeCheckPageId: 13,
  reviewPageId: 14,
  glossaryPageIds: [15, 16],
  finalChallengePageId: 17,
};

export const adamB1PagesGoldEn = applyB1GoldPages({
  canonicalPages: adamB1Pages,
  config: adamB1GoldConfig,
  language: 'en',
});

export const adamB1PagesGoldAr = applyB1GoldPages({
  canonicalPages: adamB1PagesAr,
  config: adamB1GoldConfig,
  language: 'ar',
});

export const adamB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(adamB1TeacherGuide);
export const adamB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(adamB1TeacherGuideAr);
