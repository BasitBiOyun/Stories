import type { Exercise, PageData } from '../../../../types';
import { yunusB2QuickChallenges, yunusB2VocabularyChallengePairs, yunusB2FinalChallengeExercises } from './exercises';
import { yunusB2LanguageFocusExercises } from './languageFocus';
import { yunusB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { yunusB2LanguageFocusExercisesPart3, yunusB2LanguageFocusExercisesPart4, yunusB2LanguageReviewExercises } from './languageFocus3';

const rawYunusB2Pages: PageData[] = [
// c01a
//__C01__
// c01b
// c02a
//__C02__
// c02b
// c03a
//__C03__
// c03b
// c04a
//__C04__
// c04b
// c05a
//__C05__
// c05b
// c06a
//__C06__
// c06b
];

// t01a
//__T01__
// t01b
// t02a
const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));
const englishLanguageFocus: Record<number, Exercise[]> = {
  ...yunusB2LanguageFocusExercises,
  ...yunusB2LanguageFocusExercisesPart2,
  ...yunusB2LanguageFocusExercisesPart3,
  ...yunusB2LanguageFocusExercisesPart4,
};

export const yunusB2Pages: PageData[] = rawYunusB2Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return {
      ...page,
      animatedWords: undefined,
      exercises: yunusB2QuickChallenges[page.id] ? [yunusB2QuickChallenges[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 15) return { ...page, exercises: yunusB2ManualKnowledgeCheckExercises };
  if (page.id === 16) return { ...page, vocabularyPairs: yunusB2VocabularyChallengePairs };
  if (page.id === 19) return {
    ...page,
    title: 'B2 Language Review',
    content: 'Review and use the source-framing, cause-result, concession, comparison, interpretation, necessity and possibility patterns developed across all thirteen chapters.',
    exercises: yunusB2LanguageReviewExercises,
  };
  if (page.id === 20) return { ...page, exercises: yunusB2FinalChallengeExercisesPolished };
  return page;
});

export const pages: PageData[] = yunusB2Pages;
// t02b
