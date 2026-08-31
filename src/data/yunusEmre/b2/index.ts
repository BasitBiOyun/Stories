import type { BookData, Exercise, PageData } from '../../../types';
import { yunusB2Pages } from './en/pages';
import { yunusEmreB2PagesAr } from './ar/pages';
import { yunusB2QuickChallengesPolished, yunusB2VocabularyChallengePairsPolished, yunusB2FinalChallengeExercisesPolished } from './en/exerciseSystem';
import { yunusB2QuickChallengesArPolished, yunusB2VocabularyChallengePairsArPolished, yunusB2FinalChallengeExercisesArPolished } from './ar/exerciseSystem';
import { yunusB2ManualKnowledgeCheckExercises } from './en/knowledgeCheck';
import { yunusB2ManualKnowledgeCheckExercisesAr } from './ar/knowledgeCheck';
import { yunusB2LanguageFocusExercises } from './en/languageFocus';
import { yunusB2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { yunusB2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { yunusB2LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { yunusB2LanguageReviewExercises } from './en/languageReview';
import { yunusB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { yunusB2LanguageFocusExercisesArPart2 } from './ar/languageFocusPart2';
import { yunusB2LanguageFocusExercisesArPart3 } from './ar/languageFocusPart3';
import { yunusB2LanguageFocusExercisesArPart4 } from './ar/languageFocusPart4';
import { yunusB2LanguageReviewExercisesAr } from './ar/languageReview';
import { yunusB2TeacherGuide, yunusB2TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB2SelfStudyGuide, yunusB2StudentGuideMetadata } from './en/selfStudyGuide';
import { yunusEmreB2TeacherGuideAr, yunusEmreB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB2SelfStudyGuideAr, yunusEmreB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));
const englishLanguageFocus: Record<number, Exercise[]> = { ...yunusB2LanguageFocusExercises, ...yunusB2LanguageFocusExercisesPart2, ...yunusB2LanguageFocusExercisesPart3, ...yunusB2LanguageFocusExercisesPart4 };
const arabicLanguageFocus: Record<number, Exercise[]> = { ...yunusB2LanguageFocusExercisesAr, ...yunusB2LanguageFocusExercisesArPart2, ...yunusB2LanguageFocusExercisesArPart3, ...yunusB2LanguageFocusExercisesArPart4 };

const buildPages = (pages: PageData[], quickChallenges: Record<number, Exercise>, languageFocus: Record<number, Exercise[]>, knowledgeCheck: Exercise[], vocabularyPairs: { word: string; meaning: string }[], languageReview: Exercise[], finalChallenge: Exercise[], language: 'en' | 'ar'): PageData[] => pages.map((page) => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = languageFocus[page.id];
    return { ...page, exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [], ...(languageFocusExercises ? { languageFocusExercises } : {}) };
  }
  if (page.id === 15) return { ...page, exercises: knowledgeCheck };
  if (page.id === 16) return { ...page, vocabularyPairs };
  if (page.id === 19) return { ...page, title: language === 'ar' ? 'مراجعة اللغة B2' : 'B2 Language Review', content: language === 'ar' ? 'راجع واستعمل لغة نسبة المصادر والسبب والنتيجة والاستدراك والمقارنة والتفسير والضرورة والإمكان التي تطورت عبر الفصول الثلاثة عشر.' : 'Review and use the source-framing, cause-result, concession, comparison, interpretation, necessity and possibility patterns developed across all thirteen chapters.', exercises: languageReview };
  if (page.id === 20) return { ...page, exercises: finalChallenge };
  return page;
});

const englishPages = buildPages(yunusB2Pages, yunusB2QuickChallengesPolished, englishLanguageFocus, yunusB2ManualKnowledgeCheckExercises, yunusB2VocabularyChallengePairsPolished, yunusB2LanguageReviewExercises, yunusB2FinalChallengeExercisesPolished, 'en');
const arabicPages = buildPages(yunusEmreB2PagesAr, yunusB2QuickChallengesArPolished, arabicLanguageFocus, yunusB2ManualKnowledgeCheckExercisesAr, yunusB2VocabularyChallengePairsArPolished, yunusB2LanguageReviewExercisesAr, yunusB2FinalChallengeExercisesArPolished, 'ar');

export const yunusEmreB2BookDataEn: BookData = { id: 'yunusEmre-b2-en', title: 'Yunus Emre: History, Poetry, and Moral Thought (B2)', level: 'B2', baseFontSize: 13, pages: englishPages, teacherGuide: yunusB2TeacherGuide, teacherGuideMetadata: yunusB2TeacherGuideMetadata, selfStudyGuide: yunusB2SelfStudyGuide, studentGuideMetadata: yunusB2StudentGuideMetadata };
export const yunusEmreB2BookDataAr: BookData = { id: 'yunusEmre-b2-ar', title: 'يونس إمره: التاريخ والشعر والفكر الأخلاقي (B2)', level: 'B2', baseFontSize: 14, pages: arabicPages, teacherGuide: yunusEmreB2TeacherGuideAr, teacherGuideMetadata: yunusEmreB2TeacherGuideMetadataAr, selfStudyGuide: yunusEmreB2SelfStudyGuideAr, studentGuideMetadata: yunusEmreB2StudentGuideMetadataAr };
export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
