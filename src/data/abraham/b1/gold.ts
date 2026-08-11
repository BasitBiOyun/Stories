import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { applyB1StoryLanguageLock } from '../../b1StoryLanguageLock';
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

const titleOverridesEn = {
  2: { 'h2-1': 'Azer' },
  4: { 'h4-2': 'Right Way' },
  5: { 'h5-1': 'People', 'h5-2': 'People' },
  6: { 'h6-2': 'Food and Idols' },
  7: { 'h7-2': 'The People' },
  8: { 'h8-1': 'The Fire' },
  9: { 'h9-1': 'Nimrod', 'h9-2': 'The Sun' },
  11: { 'h11-1': 'Hagar' },
  12: { 'h12-2': 'Mecca' },
} as const;

const basePagesEn = applyB1GoldPages({
  canonicalPages: abrahamB1Pages,
  config: abrahamB1GoldConfig,
  language: 'en',
});

const basePagesAr = applyB1GoldPages({
  canonicalPages: abrahamB1PagesAr,
  config: abrahamB1GoldConfig,
  language: 'ar',
});

export const abrahamB1PagesGoldEn = applyB1StoryLanguageLock(basePagesEn, {
  language: 'en',
  blockedHighlights: ['felt embarrassed', 'In response'],
  titleOverrides: titleOverridesEn,
  maxUniqueHighlights: 8,
});

export const abrahamB1PagesGoldAr = applyB1StoryLanguageLock(basePagesAr, {
  language: 'ar',
  maxUniqueHighlights: 8,
});

export const abrahamB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(abrahamB1TeacherGuide);
export const abrahamB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(abrahamB1TeacherGuideAr);
