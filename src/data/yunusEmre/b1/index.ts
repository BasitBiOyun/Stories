import type { BookData, Exercise, PageData } from '../../../types';
import { yunusB1Pages } from './en/pages';
import { yunusEmreB1PagesAr } from './ar/pages';
import {
  yunusB1QuickChallenges,
  yunusB1VocabularyChallengePairs,
  yunusB1FinalReviewExercises,
  yunusB1FinalChallengeExercises,
} from './en/exercises';
import {
  yunusB1QuickChallengesAr,
  yunusB1VocabularyChallengePairsAr,
  yunusB1FinalReviewExercisesAr,
  yunusB1FinalChallengeExercisesAr,
} from './ar/exercises';
import { yunusB1LanguageFocusExercises } from './en/languageFocus';
import { yunusB1LanguageFocusExercisesAr } from './ar/languageFocus';
import { yunusB1LanguageFocusChapter4 } from './en/languageFocusChapter4';
import { yunusB1LanguageFocusChapter4Ar } from './ar/languageFocusChapter4';
import { yunusB1LanguageFocusChapter5 } from './en/languageFocusChapter5';
import { yunusB1LanguageFocusChapter5Ar } from './ar/languageFocusChapter5';
import { yunusB1LanguageFocusChapter6 } from './en/languageFocusChapter6';
import { yunusB1LanguageFocusChapter6Ar } from './ar/languageFocusChapter6';
import { yunusB1LanguageFocusChapter7 } from './en/languageFocusChapter7';
import { yunusB1LanguageFocusChapter7Ar } from './ar/languageFocusChapter7';
import { yunusB1ManualKnowledgeCheckExercises } from './en/knowledgeCheck';
import { yunusB1ManualKnowledgeCheckExercisesAr } from './ar/knowledgeCheck';
import { yunusB1TeacherGuide, yunusB1TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB1SelfStudyGuide, yunusB1StudentGuideMetadata } from './en/selfStudyGuide';
import { yunusEmreB1TeacherGuideAr, yunusEmreB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB1SelfStudyGuideAr, yunusEmreB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

const englishLanguageFocus: Record<number, Exercise[]> = {
  ...yunusB1LanguageFocusExercises,
  4: yunusB1LanguageFocusChapter4,
  5: yunusB1LanguageFocusChapter5,
  6: yunusB1LanguageFocusChapter6,
  7: yunusB1LanguageFocusChapter7,
};

const arabicLanguageFocus: Record<number, Exercise[]> = {
  ...yunusB1LanguageFocusExercisesAr,
  4: yunusB1LanguageFocusChapter4Ar,
  5: yunusB1LanguageFocusChapter5Ar,
  6: yunusB1LanguageFocusChapter6Ar,
  7: yunusB1LanguageFocusChapter7Ar,
};

const buildPages = (
  pages: PageData[],
  quickChallenges: Record<number, Exercise>,
  languageFocus: Record<number, Exercise[]>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => pages.map((page) => {
  if (STORY_IDS.has(page.id)) return {
    ...page,
    exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [],
    languageFocusExercises: languageFocus[page.id] ?? [],
  };
  if (page.id === 14) return { ...page, exercises: knowledgeCheck };
  if (page.id === 15) return { ...page, vocabularyPairs };
  if (page.id === 18) return { ...page, exercises: review };
  if (page.id === 19) return { ...page, exercises: finalChallenge };
  return page;
});

const englishPages = buildPages(
  yunusB1Pages,
  yunusB1QuickChallenges,
  englishLanguageFocus,
  yunusB1ManualKnowledgeCheckExercises,
  yunusB1VocabularyChallengePairs,
  yunusB1FinalReviewExercises,
  yunusB1FinalChallengeExercises,
);
const arabicPages = buildPages(
  yunusEmreB1PagesAr,
  yunusB1QuickChallengesAr,
  arabicLanguageFocus,
  yunusB1ManualKnowledgeCheckExercisesAr,
  yunusB1VocabularyChallengePairsAr,
  yunusB1FinalReviewExercisesAr,
  yunusB1FinalChallengeExercisesAr,
);

export const yunusEmreB1BookDataEn: BookData = {
  id: 'yunusEmre-b1-en',
  title: 'Yunus Emre: History, Poetry, and Moral Thought (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: englishPages,
  teacherGuide: yunusB1TeacherGuide,
  teacherGuideMetadata: yunusB1TeacherGuideMetadata,
  selfStudyGuide: yunusB1SelfStudyGuide,
  studentGuideMetadata: yunusB1StudentGuideMetadata,
};

export const yunusEmreB1BookDataAr: BookData = {
  id: 'yunusEmre-b1-ar',
  title: 'يونس إمره: التاريخ والشعر والفكر الأخلاقي (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: arabicPages,
  teacherGuide: yunusEmreB1TeacherGuideAr,
  teacherGuideMetadata: yunusEmreB1TeacherGuideMetadataAr,
  selfStudyGuide: yunusEmreB1SelfStudyGuideAr,
  studentGuideMetadata: yunusEmreB1StudentGuideMetadataAr,
};

export const yunusEmreB1BookData = yunusEmreB1BookDataEn;
