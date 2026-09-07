import type { BookData, Exercise, PageData } from '../../../types';

import { mosesB2Pages as rawMosesB2Pages } from './en/pages';
import {
  mosesB2FinalChallengeExercises,
  mosesB2KnowledgeCheckExercises,
  mosesB2QuickChallenges,
  mosesB2VocabularyChallengePairs,
} from './en/exercises';
import { mosesB2LanguageFocusExercises } from './en/languageFocus';
import { mosesB2LanguageFocusExercisesPart2 } from './en/languageFocus2';
import {
  mosesB2LanguageFocusExercisesPart3,
  mosesB2LanguageFocusExercisesPart4,
  mosesB2LanguageReviewExercises,
} from './en/languageFocus3';
import { mosesB2TeacherGuide, mosesB2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB2SelfStudyGuide } from './en/selfStudyGuide';

import { pages as rawMosesB2PagesAr } from './ar/pages';
import {
  mosesB2FinalChallengeExercisesAr,
  mosesB2KnowledgeCheckExercisesAr,
  mosesB2QuickChallengesAr,
  mosesB2VocabularyChallengePairsAr,
} from './ar/exercises';
import { mosesB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { mosesB2LanguageFocusExercisesArPart2 } from './ar/languageFocus2';
import {
  mosesB2LanguageFocusExercisesArPart3,
  mosesB2LanguageFocusExercisesArPart4,
  mosesB2LanguageReviewExercisesAr,
} from './ar/languageFocus3';
import { mosesB2TeacherGuideAr, mosesB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB2SelfStudyGuideAr } from './ar/selfStudyGuide';

const cleanRuntimePage = (page: PageData): PageData => {
  const cleaned: PageData = { ...page };
  delete cleaned.exercises;
  delete cleaned.sequencingItems;
  delete cleaned.vocabularyPairs;
  delete cleaned.syncPoints;
  return cleaned;
};

const mosesB2Pages = rawMosesB2Pages.map(cleanRuntimePage);
const mosesB2PagesAr = rawMosesB2PagesAr.map(cleanRuntimePage);

const englishFinalFeedback = {
  correct: 'Correct. Your answer is supported by evidence across the story.',
  incorrect: 'Not yet. Reconnect the claim with evidence from the relevant chapters and try again.',
};

const arabicFinalFeedback = {
  correct: 'صحيح. إجابتك مدعومة بأدلة مترابطة من القصة.',
  incorrect: 'ليس بعد. اربط الفكرة بالأدلة من الفصول ذات الصلة ثم حاول مرة أخرى.',
};

const finalMatching = (
  id: string,
  title: string,
  instructions: string,
  question: string,
  pairs: { left: string; right: string }[],
  explanation: string,
  feedback: { correct: string; incorrect: string },
): Exercise => ({
  id,
  type: 'matching',
  title,
  instructions,
  question,
  matchingPairs: pairs,
  correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])),
  explanation,
  feedback,
});

const finalFill = (
  id: string,
  title: string,
  instructions: string,
  question: string,
  fillBlanksText: string,
  correctAnswer: string,
  explanation: string,
  feedback: { correct: string; incorrect: string },
): Exercise => ({
  id,
  type: 'fill-blanks',
  title,
  instructions,
  question,
  fillBlanksText,
  correctAnswer,
  explanation,
  feedback,
});

const englishFinalOverrides: Record<string, Exercise> = {
  'mo-b2-f6': finalMatching(
    'mo-b2-f6',
    'Final Challenge',
    'Match each idea with the cross-chapter evidence or issue that best fits it.',
    'Match each person or group with the action that most clearly reveals a value or stance.',
    [
      { left: 'Asiye', right: 'Uses compassion and persuasion to protect the baby inside a violent political environment' },
      { left: 'Moses at the well', right: 'Serves others despite his own exhaustion and thirst' },
      { left: 'The magicians', right: 'Let expert recognition of the sign outweigh political safety' },
      { left: 'Moses at the sea', right: 'Expresses trust before a visible route of escape appears' },
    ],
    'The four actions connect compassion, service, evidence-based conviction, and trust with observable choices across different stages of the story.',
    englishFinalFeedback,
  ),
  'mo-b2-f7': finalMatching(
    'mo-b2-f7',
    'Final Challenge',
    'Match each idea with the cross-chapter evidence or issue that best fits it.',
    'Match each conflict with the deeper issue it develops across the narrative.',
    [
      { left: 'Nile projects and forced labor', right: 'Resource control is tied to exploited manpower and political authority' },
      { left: 'Moses asks for the Israelites’ release', right: 'Freedom and lordship confront Pharaoh’s claim to own people' },
      { left: 'The contest with the magicians', right: 'Evidence and expert recognition confront managed public illusion' },
      { left: 'Calf worship after liberation', right: 'Physical freedom does not remove the need for continuing moral guidance' },
    ],
    'These conflicts synthesize political, evidential, and moral problems rather than retesting isolated chapter facts.',
    englishFinalFeedback,
  ),
  'mo-b2-f8': finalFill(
    'mo-b2-f8',
    'Final Challenge',
    'Complete the synthesis with the most meaningful story language.',
    'Complete the cross-chapter analysis of Pharaoh’s rule.',
    'The Nile chapters connect control of resources and manpower with Pharaoh’s political [blank].',
    'authority',
    'The early chapters repeatedly connect control of the Nile, large projects, forced labor, administration, and Pharaoh’s authority.',
    englishFinalFeedback,
  ),
  'mo-b2-f9': finalFill(
    'mo-b2-f9',
    'Final Challenge',
    'Complete the synthesis with the most meaningful story language.',
    'Complete the synthesis of the story after physical liberation.',
    'The ending shows that escape from oppression does not remove the continuing need for [blank].',
    'guidance',
    'After the Red Sea, the narrative continues with questions of worship, the Torah, disobedience, and Moses’s continuing effort to guide his people.',
    englishFinalFeedback,
  ),
};

const arabicFinalOverrides: Record<string, Exercise> = {
  'mo-b2-ar-f6': finalMatching(
    'mo-b2-ar-f6',
    'التحدي الختامي',
    'صل كل فكرة بالدليل أو القضية العابرة للفصول التي تناسبها.',
    'صل كل شخصية أو جماعة بالفعل الذي يكشف موقفًا أو قيمة بوضوح.',
    [
      { left: 'آسية', right: 'تستعمل الرحمة والإقناع لحماية الطفل داخل بيئة سياسية عنيفة' },
      { left: 'موسى عند البئر', right: 'يخدم الآخرين رغم تعبه وعطشه' },
      { left: 'السحرة', right: 'يقدمون معرفتهم بالآية على سلامتهم السياسية' },
      { left: 'موسى عند البحر', right: 'يعبر عن الثقة قبل ظهور طريق مادي للنجاة' },
    ],
    'تجمع الأفعال بين الرحمة والخدمة والاقتناع المبني على التمييز والثقة عبر مراحل مختلفة من القصة.',
    arabicFinalFeedback,
  ),
  'mo-b2-ar-f7': finalMatching(
    'mo-b2-ar-f7',
    'التحدي الختامي',
    'صل كل فكرة بالدليل أو القضية العابرة للفصول التي تناسبها.',
    'صل كل صراع بالقضية الأعمق التي يطورها السرد.',
    [
      { left: 'مشروعات النيل والعمل القسري', right: 'ترتبط السيطرة على المورد باستغلال قوة العمل والسلطة السياسية' },
      { left: 'طلب موسى إطلاق بني إسرائيل', right: 'تواجه الحرية والربوبية ادعاء فرعون ملك الناس' },
      { left: 'المسابقة مع السحرة', right: 'يواجه الدليل وتمييز الخبراء إدارة الخداع أمام الجمهور' },
      { left: 'عبادة العجل بعد النجاة', right: 'لا تنهي الحرية الجسدية الحاجة إلى الهداية الأخلاقية المستمرة' },
    ],
    'تجمع المطابقات مشكلات سياسية ومعرفية وأخلاقية بدل إعادة اختبار حقائق فصل واحد.',
    arabicFinalFeedback,
  ),
  'mo-b2-ar-f8': finalFill(
    'mo-b2-ar-f8',
    'التحدي الختامي',
    'أكمل التركيب بأهم لغة تحمل المعنى في القصة.',
    'أكمل التحليل العابر للفصول لحكم فرعون.',
    'تربط فصول النيل بين التحكم في الموارد وقوة العمل وبين [blank] فرعون السياسية.',
    'سلطة',
    'تربط الفصول الأولى بين النيل والمشروعات والعمل القسري والإدارة وسلطة فرعون.',
    arabicFinalFeedback,
  ),
  'mo-b2-ar-f9': finalFill(
    'mo-b2-ar-f9',
    'التحدي الختامي',
    'أكمل التركيب بأهم لغة تحمل المعنى في القصة.',
    'أكمل تركيب نهاية القصة بعد النجاة الجسدية.',
    'تظهر النهاية أن الخلاص من الظلم لا يلغي الحاجة المستمرة إلى [blank].',
    'الهداية',
    'بعد البحر يستمر السرد في قضايا العبادة والتوراة والعصيان وجهد موسى المتواصل في هداية قومه.',
    arabicFinalFeedback,
  ),
};

const mosesB2QuickChallengesPolished = mosesB2QuickChallenges;
const mosesB2KnowledgeCheckExercisesPolished = mosesB2KnowledgeCheckExercises;
const mosesB2VocabularyChallengePairsPolished = mosesB2VocabularyChallengePairs;
const mosesB2FinalChallengeExercisesPolished: Exercise[] = mosesB2FinalChallengeExercises.map(
  exercise => englishFinalOverrides[exercise.id] ?? exercise,
);

const mosesB2QuickChallengesArPolished = mosesB2QuickChallengesAr;
const mosesB2KnowledgeCheckExercisesArPolished = mosesB2KnowledgeCheckExercisesAr;
const mosesB2VocabularyChallengePairsArPolished = mosesB2VocabularyChallengePairsAr;
const mosesB2FinalChallengeExercisesArPolished: Exercise[] = mosesB2FinalChallengeExercisesAr.map(
  exercise => arabicFinalOverrides[exercise.id] ?? exercise,
);

const STORY_IDS = new Set(Array.from({ length: 24 }, (_, index) => index + 1));

const englishLanguageFocus = {
  ...mosesB2LanguageFocusExercises,
  ...mosesB2LanguageFocusExercisesPart2,
  ...mosesB2LanguageFocusExercisesPart3,
  ...mosesB2LanguageFocusExercisesPart4,
};

const arabicLanguageFocus = {
  ...mosesB2LanguageFocusExercisesAr,
  ...mosesB2LanguageFocusExercisesArPart2,
  ...mosesB2LanguageFocusExercisesArPart3,
  ...mosesB2LanguageFocusExercisesArPart4,
};

const attachEnglishLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return {
      ...page,
      exercises: mosesB2QuickChallengesPolished[page.id] ? [mosesB2QuickChallengesPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 25) return { ...page, exercises: mosesB2KnowledgeCheckExercisesPolished };
  if (page.id === 26) return { ...page, vocabularyPairs: mosesB2VocabularyChallengePairsPolished };
  if (page.id === 29) return {
    ...page,
    title: 'B2 Language Review',
    content: 'Review and use the source-framing, stance, cause, contrast, condition, focus and discourse patterns developed across all twenty-four chapters.',
    exercises: mosesB2LanguageReviewExercises,
  };
  if (page.id === 30) return { ...page, exercises: mosesB2FinalChallengeExercisesPolished };
  return page;
});

const attachArabicLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = arabicLanguageFocus[page.id];
    return {
      ...page,
      exercises: mosesB2QuickChallengesArPolished[page.id] ? [mosesB2QuickChallengesArPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 25) return { ...page, exercises: mosesB2KnowledgeCheckExercisesArPolished };
  if (page.id === 26) return { ...page, vocabularyPairs: mosesB2VocabularyChallengePairsArPolished };
  if (page.id === 29) return {
    ...page,
    title: 'مراجعة اللغة B2',
    content: 'راجع واستعمل صيغ تأطير المصدر والموقف والسبب والمقابلة والشرط وتركيز المعلومة والعلاقات الخطابية التي تطورت عبر الفصول الأربعة والعشرين.',
    exercises: mosesB2LanguageReviewExercisesAr,
  };
  if (page.id === 30) return { ...page, exercises: mosesB2FinalChallengeExercisesArPolished };
  return page;
});

export const mosesB2BookDataEn: BookData = {
  id: 'moses-b2-en',
  title: 'Stories of the Prophets: Moses (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: attachEnglishLearning(mosesB2Pages),
  teacherGuide: mosesB2TeacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadata,
  selfStudyGuide: mosesB2SelfStudyGuide,
};

export const mosesB2BookDataAr: BookData = {
  id: 'moses-b2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: attachArabicLearning(mosesB2PagesAr),
  teacherGuide: mosesB2TeacherGuideAr,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataAr,
  selfStudyGuide: mosesB2SelfStudyGuideAr,
};

export const mosesB2BookData = mosesB2BookDataEn;
