import type { Exercise, PageData } from '../../../../types';
import { yunusB2QuickChallengesAr, yunusB2VocabularyChallengePairsAr, yunusB2FinalChallengeExercisesAr } from './exercises';
import { yunusB2LanguageFocusExercisesAr } from './languageFocus';
import { yunusB2LanguageFocusExercisesArPart2 } from './languageFocus2';
import { yunusB2LanguageFocusExercisesArPart3, yunusB2LanguageFocusExercisesArPart4, yunusB2LanguageReviewExercisesAr } from './languageFocus3';

const rawYunusEmreB2PagesAr: PageData[] = [
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
// c07a
//__C07__
// c07b
// c08a
//__C08__
// c08b
// c09a
//__C09__
// c09b
// c10a
//__C10__
// c10b
// c11a
//__C11__
// c11b
// c12a
//__C12__
// c12b
// c13a
//__C13__
// c13b
// c14a
//__C14__
// c14b
// c15a
//__C15__
// c15b
// c16a
//__C16__
// c16b
// c17a
//__C17__
// c17b
];

// t01a
//__T01__
// t01b
// t02a
const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));
const arabicLanguageFocus: Record<number, Exercise[]> = {
  ...yunusB2LanguageFocusExercisesAr,
  ...yunusB2LanguageFocusExercisesArPart2,
  ...yunusB2LanguageFocusExercisesArPart3,
  ...yunusB2LanguageFocusExercisesArPart4,
};
const cleanContent = (content = '') => content.replace(/^\/\/ c\d+[ab]\s*(?:\n|$)/gm, '');

export const yunusEmreB2PagesAr: PageData[] = rawYunusEmreB2PagesAr.map(page => {
  const clean = { ...page, content: cleanContent(page.content ?? '') };
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = arabicLanguageFocus[page.id];
    return {
      ...clean,
      exercises: yunusB2QuickChallengesAr[page.id] ? [yunusB2QuickChallengesAr[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 15) return { ...clean, exercises: yunusB2ManualKnowledgeCheckExercisesAr };
  if (page.id === 16) return { ...clean, vocabularyPairs: yunusB2VocabularyChallengePairsAr };
  if (page.id === 19) return {
    ...clean,
    title: 'مراجعة اللغة B2',
    content: 'راجع واستعمل لغة نسبة المصادر والسبب والنتيجة والاستدراك والمقارنة والتفسير والضرورة والإمكان التي تطورت عبر الفصول الثلاثة عشر.',
    exercises: yunusB2LanguageReviewExercisesAr,
  };
  if (page.id === 20) return { ...clean, exercises: yunusB2FinalChallengeExercisesArPolished };
  return clean;
});

export const pages: PageData[] = yunusEmreB2PagesAr;
// t02b
