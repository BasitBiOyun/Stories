import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { applyB1StoryLanguageLock } from '../../b1StoryLanguageLock';
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

const titleOverridesEn = {
  5: { 'h5-1': 'On Purpose' },
  6: { 'h6-1': 'Run Away' },
  7: { 'h7-2': 'The Sheep' },
  8: { 'h8-1': 'Simple Life' },
  13: { 'h13-1': 'The Sea', 'h13-2': 'Allah' },
} as const;

const titleOverridesAr = {
  1: { 'h1-1': 'فرعون' },
  2: { 'h2-1': 'الحُلم', 'h2-2': 'المواليد الذُّكور' },
  3: { 'h3-1': 'السلّة', 'h3-2': 'قصر فرعون' },
  4: { 'h4-1': 'أخت موسى', 'h4-2': 'القصر' },
  5: { 'h5-1': 'قصدٍ', 'h5-2': 'اِغْفِرْ' },
  6: { 'h6-1': 'الجنود', 'h6-2': 'مَدْيَن' },
  7: { 'h7-1': 'الأغنام', 'h7-2': 'مبكّرًا' },
  8: { 'h8-1': 'تَزَوَّجَ', 'h8-2': 'نارًا' },
  9: { 'h9-1': 'الجبل', 'h9-2': 'حَيَّة' },
  10: { 'h10-1': 'هارون', 'h10-2': 'فرعون' },
  11: { 'h11-1': 'سحر', 'h11-2': 'السحرة' },
  12: { 'h12-1': 'ليلًا', 'h12-2': 'بنو إسرائيل' },
  13: { 'h13-1': 'انْشَقَّ', 'h13-2': 'فَانْطَبَقَ' },
} as const;

export const mosesB1PagesRolloutEn = applyB1StoryLanguageLock(mosesB1PagesFinalEn, {
  language: 'en',
  titleOverrides: titleOverridesEn,
  maxUniqueHighlights: 8,
});
export const mosesB1TeacherGuideRolloutEn = mosesB1TeacherGuideFinalEn;

const mosesB1PagesGoldAr = applyB1GoldPages({
  canonicalPages: mosesB1PagesAr,
  config: mosesB1RolloutConfig,
  language: 'ar',
});

export const mosesB1PagesRolloutAr = applyB1StoryLanguageLock(mosesB1PagesGoldAr, {
  language: 'ar',
  titleOverrides: titleOverridesAr,
  maxUniqueHighlights: 8,
});

export const mosesB1TeacherGuideRolloutAr = sanitizeB1TeacherGuide(mosesB1TeacherGuideAr);
