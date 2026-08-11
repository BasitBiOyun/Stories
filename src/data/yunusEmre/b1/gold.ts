import type { PageData } from '../../../types';
import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { applyB1StoryLanguageLock } from '../../b1StoryLanguageLock';
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

const lowerFirst = (value: string): string => value
  ? `${value.charAt(0).toLowerCase()}${value.slice(1)}`
  : value;

/** Preserve the existing Gold exercise attribution without adding commentary to hotspots. */
const withYunusExerciseAttribution = (pages: PageData[], language: 'en' | 'ar'): PageData[] =>
  pages.map((page) => ({
    ...page,
    exercises: page.exercises?.map((exercise) => {
      const question = exercise.question?.trim();
      const explanation = exercise.explanation?.trim();
      if (!question && !explanation) return exercise;

      if (language === 'ar') {
        return {
          ...exercise,
          question: question ? `بِحَسَبِ مَا يُقَدِّمُهُ الْفَصْلُ، ${question}` : exercise.question,
          explanation: explanation ? `يُقَدِّمُ الْفَصْلُ هَذِهِ الْفِكْرَةَ فِي سِيَاقِ يُونُس إِمْرَه: ${explanation}` : exercise.explanation,
          feedback: {
            correct: 'صَحِيح. هَذَا يُطَابِقُ الطَّرِيقَةَ الَّتِي يَعْرِضُ بِهَا الْفَصْلُ أَفْكَارَ يُونُس إِمْرَه وَسِيَاقَهَا.',
            incorrect: 'اِرْجِعْ إِلَى الْفَصْلِ، وَحَدِّدْ كَيْفَ نُسِبَتِ الْفِكْرَةُ إِلَى يُونُس إِمْرَه أَوْ إِلَى السِّيَاقِ التَّارِيخِيِّ، ثُمَّ حَاوِلْ مَرَّةً أُخْرَى.',
          },
        };
      }

      return {
        ...exercise,
        question: question ? `According to the chapter, ${lowerFirst(question)}` : exercise.question,
        explanation: explanation ? `The chapter presents this idea in Yunus Emre's context: ${explanation}` : exercise.explanation,
        feedback: {
          correct: 'Correct. This matches how the chapter presents Yunus Emre’s ideas and historical context.',
          incorrect: 'Return to the chapter, identify how the idea is attributed to Yunus Emre or the historical context, and try again.',
        },
      };
    }),
  }));

const blockedHighlightsEn = [
  'is related to',
  'refers to',
  'in return',
  'responding to',
  'due to',
  'either',
  'spiritual tutor',
  'cope with',
  'upside down',
  'a way out',
  'put an end to',
  'false retreat and circling tactic',
  'attached to',
  'true and only reality',
  'the unity of existence',
  'original unity',
  'multiple existence',
  'set out',
  'rock-solid',
  'break free',
] as const;

const blockedHighlightsAr = [
  'يَتَعَلَّقُ',
  'يُشِيرُ إِلَى',
  'يُشِيرُ',
  'مُقَابِلٍ',
  'الرَّدِّ عَلَى',
  'الرَّدِّ',
  'بِسَبَبِ',
  'أَيْضًا',
  'رَأْسًا عَلَى عَقِبٍ',
] as const;

const titleOverridesEn = {
  1: { 'h1-1': 'Sûfî' },
  3: { 'h3-1': 'Tekkes' },
  4: { 'h4-2': 'Mongol Invasion' },
  5: { 'h5-2': 'Mongols' },
  6: { 'h6-1': 'Mongol Raids', 'h6-2': 'Ilkhanate Empire' },
  13: { 'h13-2': 'Patience and Faith' },
} as const;

const basePagesEn = applyB1GoldPages({
  canonicalPages: yunusB1Pages,
  config: yunusEmreB1GoldConfig,
  language: 'en',
});

const basePagesAr = applyB1GoldPages({
  canonicalPages: yunusEmreB1PagesAr,
  config: yunusEmreB1GoldConfig,
  language: 'ar',
});

export const yunusEmreB1PagesGoldEn = withYunusExerciseAttribution(applyB1StoryLanguageLock(basePagesEn, {
  language: 'en',
  blockedHighlights: blockedHighlightsEn,
  titleOverrides: titleOverridesEn,
  maxUniqueHighlights: 8,
}), 'en');

export const yunusEmreB1PagesGoldAr = withYunusExerciseAttribution(applyB1StoryLanguageLock(basePagesAr, {
  language: 'ar',
  blockedHighlights: blockedHighlightsAr,
  maxUniqueHighlights: 8,
}), 'ar');

export const yunusEmreB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(yunusB1TeacherGuide);
export const yunusEmreB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(yunusEmreB1TeacherGuideAr);
