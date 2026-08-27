import type { Exercise } from '../../../../types';
import {
  abrahamB2FinalChallengeExercisesAr,
  abrahamB2KnowledgeCheckExercisesAr,
  abrahamB2QuickChallengesAr,
  abrahamB2VocabularyChallengePairsAr,
} from './exercises';

const feedback = {
  correct: 'صحيح. إجابتك مدعومة بالقصة على مستوى الكتاب كله.',
  incorrect: 'ليست دقيقة بعد. قارن بين الفصول ذات الصلة ثم حاول مرة أخرى.',
};

const finalOverrides: Record<string, Exercise> = {
  'ab-b2-ar-f4': {
    id: 'ab-b2-ar-f4',
    type: 'true-false',
    title: 'التحدي النهائي',
    instructions: 'قرر هل الادعاء مدعوم بالقصة أم لا.',
    question: 'يميّز الفصل الثالث والثلاثون بين التضحية بالحيوان بوصفها ممارسة نبوية سابقة وبين التضحية البشرية التي ينسبها إلى عبدة الأصنام.',
    correctAnswer: true,
    explanation: 'يذكر الفصل أن أنبياء قبل إبراهيم قدّموا حيوانات، ويقابل ذلك بالتضحية البشرية التي ينسبها إلى عبدة الأصنام.',
    feedback,
  },
  'ab-b2-ar-f6': {
    id: 'ab-b2-ar-f6',
    type: 'matching',
    title: 'التحدي النهائي',
    instructions: 'صل كل سياق بالتغير التحليلي الذي يسببه.',
    question: 'كيف يجعل السياق حجة إبراهيم أكثر حدة في مراحل مختلفة من القصة؟',
    correctAnswer: {},
    matchingPairs: [
      {
        left: 'أبوه يعبد الأصنام ويصنعها ويبيعها',
        right: 'يجمع الخلاف بين العقيدة والأسرة ومصدر المعيشة',
      },
      {
        left: 'يخلو المعبد في الاحتفال ويبقى الطعام أمام تماثيل صامتة',
        right: 'يتيح السياق اختباراً عملياً لفكرة قدرة الأصنام على الفعل',
      },
      {
        left: 'يدّعي نمرود القدرة على الإحياء والإماتة من موقع السلطة',
        right: 'تنتقل المناظرة من التحكم السياسي إلى نظام كوني لا يملكه الحاكم',
      },
    ],
    explanation: 'تغيّر السياقات ما يمكن اختباره: سلطة الأسرة، وفاعلية الأصنام، وحدود القوة السياسية.',
    feedback,
  },
  'ab-b2-ar-f7': {
    id: 'ab-b2-ar-f7',
    type: 'matching',
    title: 'التحدي النهائي',
    instructions: 'صل كل فرع أو مكان بالامتداد اللاحق الذي يصفه السرد.',
    question: 'كيف يوسّع السرد إرث إبراهيم ليتجاوز شخصاً واحداً ومكاناً واحداً؟',
    correctAnswer: {},
    matchingPairs: [
      {
        left: 'نسل إسماعيل',
        right: 'مكة والحجاز والسلسلة المرتبطة بالنبي محمد صلى الله عليه وسلم في السرد',
      },
      {
        left: 'نسل إسحاق',
        right: 'السلسلة المرتبطة بيعقوب وأنبياء لاحقين في السرد',
      },
      {
        left: 'الكعبة بعد رفع قواعدها',
        right: 'مكان عبادة وحج مستمر يقدمه السرد للناس بما يتجاوز فرعاً أسرياً واحداً',
      },
    ],
    explanation: 'تجمع الخاتمة بين خطوط الأسرة ومكان عبادة عابر للمناطق، فيصبح الإرث نسبياً وجغرافياً معاً.',
    feedback,
  },
  'ab-b2-ar-f8': {
    id: 'ab-b2-ar-f8',
    type: 'fill-blanks',
    title: 'التحدي النهائي',
    instructions: 'أكمل الخلاصة العابرة للفصول بأفضل كلمة تحليلية.',
    question: 'أكمل المقابلة بين مناظرة الأصنام ومناظرة نمرود.',
    fillBlanksText: 'ينقل إبراهيم الحجة مراراً من [blank] الموروثة أو السياسية إلى دليل يمكن فحصه.',
    correctAnswer: 'السلطة',
    explanation: 'يحتج عبدة الأصنام بالموروث، ويعتمد نمرود على قوة الملك، بينما يعيد إبراهيم توجيه النقاش إلى دليل قابل للملاحظة أو الاختبار.',
    feedback,
  },
  'ab-b2-ar-f9': {
    id: 'ab-b2-ar-f9',
    type: 'fill-blanks',
    title: 'التحدي النهائي',
    instructions: 'أكمل خلاصة الكتاب بالمفهوم الأنسب.',
    question: 'أكمل خلاصة الفصول الأسرية الأخيرة.',
    fillBlanksText: 'من التضحية إلى بناء الكعبة والحج، تحوّل الفصول الأخيرة طاعة الأسرة إلى [blank] مستمر.',
    correctAnswer: 'إرث',
    explanation: 'تربط الفصول الأخيرة بين الطاعة والكعبة والحج والذرية واستمرار الهداية في إرث باقٍ.',
    feedback,
  },
};

export const abrahamB2QuickChallengesArPolished = abrahamB2QuickChallengesAr;
export const abrahamB2KnowledgeCheckExercisesArPolished = abrahamB2KnowledgeCheckExercisesAr;
export const abrahamB2VocabularyChallengePairsArPolished = abrahamB2VocabularyChallengePairsAr;
export const abrahamB2FinalChallengeExercisesArPolished = abrahamB2FinalChallengeExercisesAr.map(
  exercise => finalOverrides[exercise.id] ?? exercise,
);
