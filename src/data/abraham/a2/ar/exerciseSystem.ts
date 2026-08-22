import type { Exercise } from '../../../../types';
import {
  abrahamA2FinalChallengeExercisesAr,
  abrahamA2KnowledgeCheckExercisesAr,
  abrahamA2QuickChallengesAr,
  abrahamA2VocabularyChallengePairsAr,
} from './exercises';

/** نظام الأنشطة العربي المصقول والفعّال لإبراهيم A2. */
export const abrahamA2QuickChallengesArPolished: Record<number, Exercise> = {
  ...abrahamA2QuickChallengesAr,
  1: {
    id: 'abraham-a2-quick-1-ar', type: 'matching', title: 'الناس والأشياء العاجزة',
    instructions: 'صل كل تفصيل من الفصل الأول بالفكرة الصحيحة.', question: 'ما التناقض الذي لاحظه إبراهيم؟',
    matchingPairs: [
      { left: 'الناس', right: 'طلبوا أمنياتهم من الأشياء' },
      { left: 'السمع', right: 'لم تستطع الأشياء الحجرية أن تسمع' },
      { left: 'الحركة', right: 'لم تستطع الأشياء الحجرية أن تتحرك' },
      { left: 'الفهم', right: 'لم تستطع الأشياء الحجرية أن تفهم' },
    ],
    correctAnswer: {
      'الناس': 'طلبوا أمنياتهم من الأشياء', 'السمع': 'لم تستطع الأشياء الحجرية أن تسمع', 'الحركة': 'لم تستطع الأشياء الحجرية أن تتحرك', 'الفهم': 'لم تستطع الأشياء الحجرية أن تفهم',
    },
    explanation: 'يقابل الفصل بين ما يطلبه الناس من الأشياء وبين عجز هذه الأشياء.',
    feedback: { correct: 'صحيح. أعدت بناء التناقض من أربعة تفاصيل.', incorrect: 'ارجع إلى الجمل الأخيرة وافصل بين فعل الناس وما لا تستطيع الأشياء فعله.' },
  },
  9: {
    id: 'abraham-a2-quick-9-ar', type: 'matching', title: 'المعجزة ورد الفعل',
    instructions: 'صل كل تفصيل من الفصل التاسع بما حدث.', question: 'ما الذي تغير، وما الذي بقي كما هو؟',
    matchingPairs: [
      { left: 'النار', right: 'صارت باردة' },
      { left: 'إبراهيم', right: 'صار آمنًا' },
      { left: 'الناس', right: 'تعجبوا' },
      { left: 'موقفهم', right: 'بقي ضد إبراهيم' },
    ],
    correctAnswer: { 'النار': 'صارت باردة', 'إبراهيم': 'صار آمنًا', 'الناس': 'تعجبوا', 'موقفهم': 'بقي ضد إبراهيم' },
    explanation: 'غيّرت المعجزة الخطر حول إبراهيم، لكنها لم تغيّر موقف الناس تلقائيًا.',
    feedback: { correct: 'صحيح.', incorrect: 'افصل بين تغير النار وسلامة إبراهيم ورد الناس.' },
  },
  12: {
    id: 'abraham-a2-quick-12-ar', type: 'matching', title: 'التوكل والعمل',
    instructions: 'صل كل فكرة من الفصل الثاني عشر بالتفصيل الذي يكملها.', question: 'كيف تجمع هاجر بين التوكل والعمل؟',
    matchingPairs: [
      { left: 'توكل هاجر', right: 'سيحمينا الله' },
      { left: 'المشكلة', right: 'نفد الطعام والماء' },
      { left: 'العمل', right: 'بحثت' },
      { left: 'الحركة', right: 'ركضت من تل إلى تل' },
    ],
    correctAnswer: { 'توكل هاجر': 'سيحمينا الله', 'المشكلة': 'نفد الطعام والماء', 'العمل': 'بحثت', 'الحركة': 'ركضت من تل إلى تل' },
    explanation: 'يعرض الفصل التوكل والعمل معًا.',
    feedback: { correct: 'صحيح.', incorrect: 'اتبع الفصل من اعتقاد هاجر إلى المشكلة ثم إلى ما فعلته.' },
  },
};

export const abrahamA2KnowledgeCheckExercisesArPolished: Exercise[] = abrahamA2KnowledgeCheckExercisesAr;
export const abrahamA2VocabularyChallengePairsArPolished = abrahamA2VocabularyChallengePairsAr;

export const abrahamA2FinalChallengeExercisesArPolished: Exercise[] = abrahamA2FinalChallengeExercisesAr.map(exercise => {
  if (exercise.id === 'abraham-a2-final-6-ar') {
    return {
      id: 'abraham-a2-final-6-ar', type: 'matching', title: 'الرحلة والحاجة والهدف', instructions: 'صل كل فعل في القسم الأخير من القصة بسببه أو هدفه.',
      question: 'لماذا تحدث هذه الأفعال؟',
      matchingPairs: [
        { left: 'يغادر إبراهيم بابل', right: 'ليبلغ الرسالة في أراض أخرى' },
        { left: 'تبحث هاجر', right: 'لتجد الطعام والماء لطفلها' },
        { left: 'تركض هاجر من تل إلى تل', right: 'لتواصل البحث عندما لا تجد مؤونة في الوادي' },
      ],
      correctAnswer: {
        'يغادر إبراهيم بابل': 'ليبلغ الرسالة في أراض أخرى',
        'تبحث هاجر': 'لتجد الطعام والماء لطفلها',
        'تركض هاجر من تل إلى تل': 'لتواصل البحث عندما لا تجد مؤونة في الوادي',
      },
      explanation: 'تربط الفصول الأخيرة بين الفعل الهادف والموقف الصعب.',
      feedback: { correct: 'صحيح.', incorrect: 'استخدم الأسباب المذكورة في الفصلين 11 و12.' },
    };
  }
  if (exercise.id === 'abraham-a2-final-7-ar') {
    return {
      id: 'abraham-a2-final-7-ar', type: 'matching', title: 'من الماء إلى المجتمع', instructions: 'صل كل تطور بالنتيجة التالية في القصة.',
      question: 'كيف يتطور الوادي بعد ظهور زمزم؟',
      matchingPairs: [
        { left: 'ماء زمزم', right: 'يجعل الحياة في الوادي ممكنة' },
        { left: 'مصدر الماء', right: 'يجذب مزيدًا من الناس إلى المكان' },
        { left: 'التجمع المتزايد', right: 'يصبح مدينة تسمى مكة' },
      ],
      correctAnswer: {
        'ماء زمزم': 'يجعل الحياة في الوادي ممكنة',
        'مصدر الماء': 'يجذب مزيدًا من الناس إلى المكان',
        'التجمع المتزايد': 'يصبح مدينة تسمى مكة',
      },
      explanation: 'يربط الفصل 13 بين الماء والاستقرار ونمو مكة في سلسلة سبب ونتيجة واضحة.',
      feedback: { correct: 'صحيح.', incorrect: 'اتبع الفصل 13 من ظهور الماء إلى قدوم الناس ثم إلى المدينة.' },
    };
  }
  return exercise;
});
