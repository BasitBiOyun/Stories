import type { Exercise } from '../../../../types';
import {
  mosesA2FinalChallengeExercisesAr,
  mosesA2KnowledgeCheckExercisesAr,
  mosesA2QuickChallengesAr,
  mosesA2VocabularyChallengePairsAr,
} from './exercises';

/** نظام الأنشطة العربي المصقول والفعّال لموسى A2. */
export const mosesA2QuickChallengesArPolished: Record<number, Exercise> = {
  ...mosesA2QuickChallengesAr,
  1: {
    id: 'moses-a2-ar-quick-1', type: 'matching', title: 'القوة والإيمان',
    instructions: 'صِل كل تفصيل من الفصل الأول بالفكرة الصحيحة.', question: 'ما التناقض الذي يبنيه الفصل الأول؟',
    matchingPairs: [
      { left: 'ادعاء فرعون', right: 'قال إنه إله' },
      { left: 'حكم فرعون', right: 'عامل الناس بظلم وقسوة' },
      { left: 'بنو إسرائيل', right: 'آمنوا بالله الواحد' },
      { left: 'حالهم', right: 'عاشوا تحت ظلم فرعون' },
    ],
    correctAnswer: {
      'ادعاء فرعون': 'قال إنه إله',
      'حكم فرعون': 'عامل الناس بظلم وقسوة',
      'بنو إسرائيل': 'آمنوا بالله الواحد',
      'حالهم': 'عاشوا تحت ظلم فرعون',
    },
    explanation: 'يقابل الفصل بين ادعاء فرعون الباطل وحكمه الظالم وبين إيمان بني إسرائيل وحالهم الصعب.',
    feedback: { correct: 'صحيح. أعدت بناء التناقض الرئيس في الفصل.', incorrect: 'افصل بين ادعاء فرعون وأفعاله وبين إيمان بني إسرائيل وحالهم.' },
  },
  6: {
    id: 'moses-a2-ar-quick-6', type: 'matching', title: 'الخطأ والشعور والدعاء',
    instructions: 'صِل كل تفصيل بما حدث في الفصل السادس.', question: 'كيف استجاب موسى للحادثة غير المقصودة؟',
    matchingPairs: [
      { left: 'الحادثة', right: 'تسبب موسى في موت رجل من غير قصد' },
      { left: 'شعوره', right: 'حزن وندم' },
      { left: 'دعاؤه', right: 'طلب من الله أن يغفر له' },
    ],
    correctAnswer: {
      'الحادثة': 'تسبب موسى في موت رجل من غير قصد',
      'شعوره': 'حزن وندم',
      'دعاؤه': 'طلب من الله أن يغفر له',
    },
    explanation: 'يفصل الفصل بين الفعل غير المقصود وبين ندم موسى وطلبه المغفرة.',
    feedback: { correct: 'صحيح.', incorrect: 'اتبع الفصل من الحادثة إلى شعور موسى ثم إلى دعائه.' },
  },
  11: {
    id: 'moses-a2-ar-quick-11', type: 'matching', title: 'الآيات والرفيق والمهمة',
    instructions: 'صِل كل تفصيل من الفصل الحادي عشر بدوره.', question: 'ما الذي هيأ موسى للمهمة؟',
    matchingPairs: [
      { left: 'اليد البيضاء', right: 'آية من آيات قدرة الله' },
      { left: 'هارون', right: 'أخو موسى ورفيقه' },
      { left: 'القصر', right: 'المكان الذي ذهب إليه موسى وهارون لتبليغ الرسالة' },
      { left: 'الرسالة', right: 'الله هو الأقوى' },
    ],
    correctAnswer: {
      'اليد البيضاء': 'آية من آيات قدرة الله',
      'هارون': 'أخو موسى ورفيقه',
      'القصر': 'المكان الذي ذهب إليه موسى وهارون لتبليغ الرسالة',
      'الرسالة': 'الله هو الأقوى',
    },
    explanation: 'يجمع الفصل بين آية ورفيق ووجهة ورسالة على موسى أن يبلغها.',
    feedback: { correct: 'صحيح.', incorrect: 'ابحث عن الآية، ومن ذهب مع موسى، وإلى أين ذهبا، وما الرسالة التي حملاها.' },
  },
  13: {
    id: 'moses-a2-ar-quick-13', type: 'matching', title: 'الآية واستجابتان',
    instructions: 'صِل كل تفصيل من الفصل الثالث عشر بما حدث.', question: 'كيف أدت الآية الكبرى إلى استجابتين مختلفتين؟',
    matchingPairs: [
      { left: 'عصا موسى', right: 'تحولت إلى ثعبان ضخم' },
      { left: 'الثعبان الضخم', right: 'ابتلع ما صنعه السحرة' },
      { left: 'السحرة', right: 'آمنوا برب موسى وهارون' },
      { left: 'فرعون', right: 'بقي متكبرًا واستمر في إيذاء المؤمنين' },
    ],
    correctAnswer: {
      'عصا موسى': 'تحولت إلى ثعبان ضخم',
      'الثعبان الضخم': 'ابتلع ما صنعه السحرة',
      'السحرة': 'آمنوا برب موسى وهارون',
      'فرعون': 'بقي متكبرًا واستمر في إيذاء المؤمنين',
    },
    explanation: 'يربط الفصل بين الآية وإيمان السحرة واستمرار فرعون في الرفض.',
    feedback: { correct: 'صحيح.', incorrect: 'اتبع المشهد من العصا إلى الثعبان، ثم قارن السحرة بفرعون.' },
  },
};

export const mosesA2KnowledgeCheckExercisesArPolished: Exercise[] = mosesA2KnowledgeCheckExercisesAr;
export const mosesA2VocabularyChallengePairsArPolished = mosesA2VocabularyChallengePairsAr;

export const mosesA2FinalChallengeExercisesArPolished: Exercise[] = mosesA2FinalChallengeExercisesAr.map(exercise => {
  if (exercise.id === 'moses-a2-ar-final-6') {
    return {
      id: 'moses-a2-ar-final-6', type: 'matching', title: 'المراحل والأهداف', instructions: 'صِل كل مرحلة بدورها الرئيس في القصة.',
      question: 'ماذا كان يحدث في كل مرحلة؟',
      matchingPairs: [
        { left: 'مدين', right: 'وجد موسى حياة جديدة بعيدًا عن حكم فرعون' },
        { left: 'العودة إلى مصر', right: 'حمل موسى رسالة الله عائدًا نحو فرعون' },
        { left: 'القصر', right: 'بلّغ موسى وهارون الرسالة وأظهرا الآيات' },
      ],
      correctAnswer: {
        'مدين': 'وجد موسى حياة جديدة بعيدًا عن حكم فرعون',
        'العودة إلى مصر': 'حمل موسى رسالة الله عائدًا نحو فرعون',
        'القصر': 'بلّغ موسى وهارون الرسالة وأظهرا الآيات',
      },
      explanation: 'تنقل هذه المراحل موسى من الأمان في مدين إلى المهمة التي كلفه الله بها في مصر.',
      feedback: { correct: 'صحيح.', incorrect: 'فكر فيما أعطته مدين لموسى، ولماذا عاد، وماذا حدث في القصر.' },
    };
  }
  if (exercise.id === 'moses-a2-ar-final-7') {
    return {
      id: 'moses-a2-ar-final-7', type: 'matching', title: 'الحاجة والاستجابة', instructions: 'صِل كل مشكلة أو حاجة باستجابة موسى.',
      question: 'كيف تصرف موسى في رحلات مختلفة؟',
      matchingPairs: [
        { left: 'كان متعبًا وعطشان في مدين', right: 'بحث عن الماء' },
        { left: 'احتاجت الفتاتان إلى المساعدة عند البئر', right: 'سقى غنمهما' },
        { left: 'شعرت أسرته بالبرد في رحلة العودة', right: 'ذهب نحو النار' },
      ],
      correctAnswer: {
        'كان متعبًا وعطشان في مدين': 'بحث عن الماء',
        'احتاجت الفتاتان إلى المساعدة عند البئر': 'سقى غنمهما',
        'شعرت أسرته بالبرد في رحلة العودة': 'ذهب نحو النار',
      },
      explanation: 'في مشاهد الرحلة يلاحظ موسى الحاجة ثم يتخذ خطوة عملية مناسبة.',
      feedback: { correct: 'صحيح.', incorrect: 'راجع مشهد البئر ورحلة العودة الباردة.' },
    };
  }
  return exercise;
});
