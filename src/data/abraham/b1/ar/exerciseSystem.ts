import type { Exercise } from '../../../../types';
import {
  abrahamB1FinalChallengeExercisesAr,
  abrahamB1KnowledgeCheckExercisesAr,
  abrahamB1QuickChallengesAr,
  abrahamB1VocabularyChallengePairsAr,
} from './exercises';

export const abrahamB1QuickChallengesArPolished = abrahamB1QuickChallengesAr;
export const abrahamB1KnowledgeCheckExercisesArPolished = abrahamB1KnowledgeCheckExercisesAr;
export const abrahamB1VocabularyChallengePairsArPolished = abrahamB1VocabularyChallengePairsAr;

const finalOverridesAr: Record<string, Exercise> = {
  'abraham-b1-final-5-ar': {
    id: 'abraham-b1-final-5-ar',
    type: 'true-false',
    title: 'الحج والذاكرة',
    instructions: 'حدد هل العبارة توافق الفصل الثالث عشر.',
    question: 'تقدم القصة الحج بوصفه ممارسة لاحقة لا صلة لها بأحداث إبراهيم وأسرته.',
    correctAnswer: false,
    explanation: 'يربط الفصل الثالث عشر الحج صراحة بأحداث مرتبطة بإبراهيم وأسرته.',
    feedback: {
      correct: 'صحيح. تربط القصة الحج بذكريات وأفعال متصلة بإبراهيم وأسرته.',
      incorrect: 'ابحث عن جملة الحج بعد بناء الكعبة وحدد بمن ترتبط الأحداث التي يذكّر بها.',
    },
  },
  'abraham-b1-final-6-ar': {
    id: 'abraham-b1-final-6-ar',
    type: 'matching',
    title: 'الدليل والتفسير',
    instructions: 'صل كل تفصيل بما يبينه في القصة.',
    question: 'ماذا يساعد كل دليل القارئ على فهمه؟',
    matchingPairs: [
      { left: 'لم يستطع الناس الاقتراب من النار', right: 'يبين أن العقوبة نفسها خلقت خطراً جسدياً شديداً' },
      { left: 'لم تستطع الطيور الطيران فوق اللهب', right: 'يبين شدة الحرارة' },
      { left: 'صُدم الناس بالمعجزة لكن غضبهم بقي', right: 'يبين أن الدهشة لم تُنهِ معارضتهم' },
    ],
    correctAnswer: {
      'لم يستطع الناس الاقتراب من النار': 'يبين أن العقوبة نفسها خلقت خطراً جسدياً شديداً',
      'لم تستطع الطيور الطيران فوق اللهب': 'يبين شدة الحرارة',
      'صُدم الناس بالمعجزة لكن غضبهم بقي': 'يبين أن الدهشة لم تُنهِ معارضتهم',
    },
    explanation: 'يبين التفصيلان الأولان شدة الخطر، ويفصل الثالث بين الدهشة بالمعجزة وبين تغير الموقف الحقيقي.',
    feedback: {
      correct: 'صحيح. ربطت الدليل بتفسيره لا بمجرد تذكر الحدث.',
      incorrect: 'استخدم تفاصيل الخطر في الفصل الثامن ورد الناس في بداية الفصل التاسع.',
    },
  },
  'abraham-b1-final-7-ar': {
    id: 'abraham-b1-final-7-ar',
    type: 'matching',
    title: 'الفعل والاستمرار',
    instructions: 'صل كل فعل بمعناه أو نتيجته اللاحقة في القصة.',
    question: 'كيف تستمر دلالة هذه الأفعال بعد لحظتها المباشرة؟',
    matchingPairs: [
      { left: 'تسعى هاجر بين التلين سبع مرات', right: 'يُتذكر هذا الفعل في شعيرة السعي في الحج والعمرة' },
      { left: 'يستقر الناس قرب زمزم', right: 'يتحول الوادي القاحل تدريجياً إلى مستوطنة مكة الآخذة في النمو' },
      { left: 'يعثر إبراهيم وإسماعيل على الأساسات القديمة', right: 'يبنيان الكعبة فوق القاعدة القديمة' },
    ],
    correctAnswer: {
      'تسعى هاجر بين التلين سبع مرات': 'يُتذكر هذا الفعل في شعيرة السعي في الحج والعمرة',
      'يستقر الناس قرب زمزم': 'يتحول الوادي القاحل تدريجياً إلى مستوطنة مكة الآخذة في النمو',
      'يعثر إبراهيم وإسماعيل على الأساسات القديمة': 'يبنيان الكعبة فوق القاعدة القديمة',
    },
    explanation: 'تربط الفصول الأخيرة بين الأفعال المباشرة وبين الاستقرار اللاحق والعبادة والذاكرة الدينية المستمرة.',
    feedback: {
      correct: 'صحيح. ربطت الأفعال بنتائجها ومعانيها الأطول مدى.',
      incorrect: 'راجع نهاية الفصل الحادي عشر والفصلين الثاني عشر والثالث عشر، ثم اربط كل فعل بما نتج عنه.',
    },
  },
};

export const abrahamB1FinalChallengeExercisesArPolished: Exercise[] =
  abrahamB1FinalChallengeExercisesAr.map(exercise => finalOverridesAr[exercise.id] ?? exercise);
