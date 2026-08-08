import type { PageData } from '../../../types';
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

const lowerFirst = (value: string): string => value
  ? `${value.charAt(0).toLowerCase()}${value.slice(1)}`
  : value;

const frameHotspot = (description: string, language: 'en' | 'ar'): string => {
  if (language === 'ar') {
    return `يُقَدِّمُ الْفَصْلُ هَذِهِ الْفِكْرَةَ فِي سِيَاقِ يُونُس إِمْرَه: ${description}`;
  }
  return `The chapter presents this in Yunus Emre's historical and literary context: ${description}`;
};

const withYunusAttribution = (pages: PageData[], language: 'en' | 'ar'): PageData[] =>
  pages.map((page) => ({
    ...page,
    hotspots: page.hotspots?.map((hotspot) => ({
      ...hotspot,
      description: frameHotspot(hotspot.description, language),
    })),
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

export const yunusEmreB1PagesGoldEn = withYunusAttribution(applyB1GoldPages({
  canonicalPages: yunusB1Pages,
  config: yunusEmreB1GoldConfig,
  language: 'en',
}), 'en');

export const yunusEmreB1PagesGoldAr = withYunusAttribution(applyB1GoldPages({
  canonicalPages: yunusEmreB1PagesAr,
  config: yunusEmreB1GoldConfig,
  language: 'ar',
}), 'ar');

export const yunusEmreB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(yunusB1TeacherGuide);
export const yunusEmreB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(yunusEmreB1TeacherGuideAr);
