import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { abrahamB1Pages } from './en/pages';
import { abrahamB1TeacherGuide } from './en/teacherGuide';
import { abrahamB1PagesAr } from './ar/pages';
import { abrahamB1TeacherGuideAr } from './ar/teacherGuide';

export const abrahamB1GoldConfig: B1GoldPageConfig = {
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 14,
  reviewPageId: 15,
  glossaryPageIds: [16, 17],
  finalChallengePageId: 18,
};

export const abrahamB1PagesGoldEn = applyB1GoldPages({
  canonicalPages: abrahamB1Pages,
  config: abrahamB1GoldConfig,
  language: 'en',
});

export const abrahamB1PagesGoldAr = applyB1GoldPages({
  canonicalPages: abrahamB1PagesAr,
  config: abrahamB1GoldConfig,
  language: 'ar',
});

export const abrahamB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(abrahamB1TeacherGuide);
export const abrahamB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(abrahamB1TeacherGuideAr);
