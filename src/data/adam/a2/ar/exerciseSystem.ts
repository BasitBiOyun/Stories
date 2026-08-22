import type { Exercise } from '../../../../types';
import {
  adamA2FinalChallengeExercisesAr,
  adamA2KnowledgeCheckExercisesAr,
  adamA2QuickChallengesAr,
  adamA2VocabularyChallengePairsAr,
} from './exercises';

/**
 * نظام التمارين العربي النشط والمنقح لآدم A2.
 * نعيد استخدام الأنشطة الجيدة من exercises.ts ونستبدل هنا فقط العناصر الضعيفة.
 */
export const adamA2QuickChallengesArPolished: Record<number, Exercise> = {
  ...adamA2QuickChallengesAr,
  3: {
    id: 'adam-a2-ar-quick-3',
    type: 'matching',
    title: 'الأصل والعلم والقيمة',
    instructions: 'صل كل فكرة من الفصل الثالث بالتفصيل الذي يكملها.',
    question: 'كيف يفرّق الفصل بين أصل الخلق وما يجعل الإنسان ذا قيمة؟',
    matchingPairs: [
      { left: 'أصل إبليس', right: 'النار' },
      { left: 'أصل آدم', right: 'التراب' },
      { left: 'خطأ إبليس', right: 'ظن أن أصله يجعله أفضل' },
      { left: 'العلم النافع', right: 'يساعد الناس على فعل الخير ومنع الشر' },
    ],
    correctAnswer: {
      'أصل إبليس': 'النار',
      'أصل آدم': 'التراب',
      'خطأ إبليس': 'ظن أن أصله يجعله أفضل',
      'العلم النافع': 'يساعد الناس على فعل الخير ومنع الشر',
    },
    explanation: 'يذكر الفصل النار والتراب، لكنه يوضح أن التكبر بالأصل خطأ وأن العلم النافع هو الذي يساعد الإنسان على الخير.',
    feedback: {
      correct: 'صحيح. ربطت التفاصيل بالفكرة الأساسية في الفصل.',
      incorrect: 'افصل بين أصل كل واحد وبين الدرس المتعلق بالتكبر والعلم النافع.',
    },
  },
  8: {
    id: 'adam-a2-ar-quick-8',
    type: 'matching',
    title: 'الأخوان والقربانان',
    instructions: 'صل كل تفصيل من الفصل الثامن بالشخص أو الفكرة الصحيحة.',
    question: 'ما العمل والقربان اللذان يرتبطان بكل أخ؟',
    matchingPairs: [
      { left: 'عمل هابيل', right: 'راعٍ' },
      { left: 'عمل قابيل', right: 'مزارع' },
      { left: 'قربان هابيل', right: 'أفضل وأصح خروف عنده' },
      { left: 'قربان قابيل', right: 'حفنة من محصوله' },
    ],
    correctAnswer: {
      'عمل هابيل': 'راعٍ',
      'عمل قابيل': 'مزارع',
      'قربان هابيل': 'أفضل وأصح خروف عنده',
      'قربان قابيل': 'حفنة من محصوله',
    },
    explanation: 'يعرّف الفصل بعمل كل أخ ثم يقارن بين ما اختاره كل واحد ليقدمه.',
    feedback: {
      correct: 'صحيح. ربطت العمل والقربان بكل أخ بدقة.',
      incorrect: 'أعد قراءة الفصل الثامن من عمل الأخوين إلى وصف القربانين.',
    },
  },
};

export const adamA2KnowledgeCheckExercisesArPolished: Exercise[] = adamA2KnowledgeCheckExercisesAr.map(exercise => {
  if (exercise.id !== 'adam-a2-ar-kc-4') return exercise;
  return {
    id: 'adam-a2-ar-kc-4',
    type: 'true-false',
    title: 'تحذير الشجرة',
    instructions: 'حدد هل العبارة توافق الفصل الرابع.',
    question: 'كان آدم وحواء يستطيعان الاقتراب من كل شجرة في الجنة بلا استثناء.',
    correctAnswer: false,
    explanation: 'يذكر الفصل استثناءً واضحًا: قيل لهما ألا يقتربا من شجرة واحدة.',
    feedback: {
      correct: 'صحيح. لاحظت الاستثناء الوحيد في الفصل.',
      incorrect: 'أعد قراءة التحذير الأخير في الفصل الرابع وابحث عن الاستثناء.',
    },
  };
});

export const adamA2VocabularyChallengePairsArPolished = adamA2VocabularyChallengePairsAr;

// التحدي النهائي الحالي يلتزم بالتوزيع المقفل لتمارين A2،
// لذلك يبقى تقييم إتقان القصة، بينما تُربط مراجعة اللغة بشكل مستقل.
export const adamA2FinalChallengeExercisesArPolished: Exercise[] = adamA2FinalChallengeExercisesAr;
