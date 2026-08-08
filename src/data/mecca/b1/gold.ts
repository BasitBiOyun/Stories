import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { meccaB1Pages } from './en/pages';
import { meccaB1TeacherGuide } from './en/teacherGuide';
import { meccaB1PagesAr } from './ar/pages';
import { meccaB1TeacherGuideAr } from './ar/teacherGuide';

export const meccaB1GoldConfig: B1GoldPageConfig = {
  storyIds: Array.from({ length: 15 }, (_, index) => index + 1),
  knowledgeCheckPageId: 16,
  reviewPageId: 17,
  glossaryPageIds: [18, 19],
  finalChallengePageId: 20,
};

export const meccaB1PagesGoldEn = applyB1GoldPages({
  canonicalPages: meccaB1Pages,
  config: meccaB1GoldConfig,
  language: 'en',
});

export const meccaB1PagesGoldAr = applyB1GoldPages({
  canonicalPages: meccaB1PagesAr,
  config: meccaB1GoldConfig,
  language: 'ar',
});

export const meccaB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(meccaB1TeacherGuide);
export const meccaB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(meccaB1TeacherGuideAr);
