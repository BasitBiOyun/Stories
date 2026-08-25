import type { BookData, Exercise, PageData } from '../../../types';
import { adamB1Pages } from './en/pages';
import { adamB1PagesAr } from './ar/pages';
import {
  adamB1QuickChallenges,
  adamB1KnowledgeCheckExercises,
  adamB1VocabularyChallengePairs,
  adamB1FinalReviewExercises,
  adamB1FinalChallengeExercises,
} from './en/exercises';
import {
  adamB1QuickChallengesAr,
  adamB1KnowledgeCheckExercisesAr,
  adamB1VocabularyChallengePairsAr,
  adamB1FinalReviewExercisesAr,
  adamB1FinalChallengeExercisesAr,
} from './ar/exercises';
import { adamB1LanguageFocusExercises } from './en/languageFocus';
import { adamB1LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { adamB1LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { adamB1LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { adamB1LanguageFocusExercisesPart5 } from './en/languageFocusPart5';
import { adamB1LanguageFocusExercisesPart6 } from './en/languageFocusPart6';
import { adamB1LanguageFocusExercisesPart7 } from './en/languageFocusPart7';
import { adamB1LanguageFocusExercisesAr } from './ar/languageFocus';
import { adamB1LanguageFocusExercisesArPart2 } from './ar/languageFocusPart2';
import { adamB1LanguageFocusExercisesArPart3 } from './ar/languageFocusPart3';
import { adamB1LanguageFocusExercisesArPart4 } from './ar/languageFocusPart4';
import { adamB1LanguageFocusExercisesArPart5 } from './ar/languageFocusPart5';
import { adamB1LanguageFocusExercisesArPart6 } from './ar/languageFocusPart6';
import { adamB1LanguageFocusExercisesArPart7 } from './ar/languageFocusPart7';
import { adamB1TeacherGuide, adamB1TeacherGuideMetadata } from './en/teacherGuide';
import { adamB1SelfStudyGuide, adamB1StudentGuideMetadata } from './en/selfStudyGuide';
import { adamB1TeacherGuideAr, adamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB1SelfStudyGuideAr, adamB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 12 }, (_, index) => index + 1));

const englishLanguageFocus = {
  ...adamB1LanguageFocusExercises,
  ...adamB1LanguageFocusExercisesPart2,
  ...adamB1LanguageFocusExercisesPart3,
  ...adamB1LanguageFocusExercisesPart4,
  ...adamB1LanguageFocusExercisesPart5,
  ...adamB1LanguageFocusExercisesPart6,
  ...adamB1LanguageFocusExercisesPart7,
};

const arabicLanguageFocus = {
  ...adamB1LanguageFocusExercisesAr,
  ...adamB1LanguageFocusExercisesArPart2,
  ...adamB1LanguageFocusExercisesArPart3,
  ...adamB1LanguageFocusExercisesArPart4,
  ...adamB1LanguageFocusExercisesArPart5,
  ...adamB1LanguageFocusExercisesArPart6,
  ...adamB1LanguageFocusExercisesArPart7,
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
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = languageFocus[page.id];
    return {
      ...page,
      exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 13) return { ...page, exercises: knowledgeCheck };
  if (page.id === 14) return { ...page, exercises: review };
  if (page.id === 15) return { ...page, vocabularyPairs };
  if (page.id === 17) return { ...page, exercises: finalChallenge };
  return page;
});

const englishPages = buildPages(
  adamB1Pages,
  adamB1QuickChallenges,
  englishLanguageFocus,
  adamB1KnowledgeCheckExercises,
  adamB1VocabularyChallengePairs,
  adamB1FinalReviewExercises,
  adamB1FinalChallengeExercises,
);

const arabicPages = buildPages(
  adamB1PagesAr,
  adamB1QuickChallengesAr,
  arabicLanguageFocus,
  adamB1KnowledgeCheckExercisesAr,
  adamB1VocabularyChallengePairsAr,
  adamB1FinalReviewExercisesAr,
  adamB1FinalChallengeExercisesAr,
);

export const adamB1BookDataEn: BookData = {
  id: 'b1-prophets-en',
  title: 'Stories of the Prophets: Adam (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: englishPages,
  teacherGuide: adamB1TeacherGuide,
  teacherGuideMetadata: adamB1TeacherGuideMetadata,
  selfStudyGuide: adamB1SelfStudyGuide,
  studentGuideMetadata: adamB1StudentGuideMetadata,
};

export const adamB1BookDataAr: BookData = {
  id: 'b1-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B1',
  baseFontSize: 14,
  pages: arabicPages,
  teacherGuide: adamB1TeacherGuideAr,
  teacherGuideMetadata: adamB1TeacherGuideMetadataAr,
  selfStudyGuide: adamB1SelfStudyGuideAr,
  studentGuideMetadata: adamB1StudentGuideMetadataAr,
};

export const adamB1BookData = adamB1BookDataEn;
