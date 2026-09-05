import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart8: Record<number, Exercise[]> = {
  9: [
    {
      id: 'mecca-a2-ar-language-9-form-function', type: 'matching', title: 'الإرادة والخبر والطلب',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل التاسع؟',
      matchingPairs: [
        { left: 'أراد أن + فعل', right: 'الإرادة أو القصد' },
        { left: 'سمع أن + جملة', right: 'نقل خبر سمعه الشخص' },
        { left: 'طلب من + شخص + أن + فعل', right: 'صياغة طلب' },
        { left: 'لم يرد أن + فعل', right: 'عدم الرغبة' },
      ],
      correctAnswer: {
        'أراد أن + فعل': 'الإرادة أو القصد',
        'سمع أن + جملة': 'نقل خبر سمعه الشخص',
        'طلب من + شخص + أن + فعل': 'صياغة طلب',
        'لم يرد أن + فعل': 'عدم الرغبة',
      },
      explanation: 'يستخدم الفصل لغة الإرادة ونقل الخبر والطلب وعدم الرغبة.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الإرادة والخبر والطلب وعدم الرغبة.' },
    },
    {
      id: 'mecca-a2-ar-language-9-question', type: 'multiple-choice', title: 'سؤال عن فعل',
      instructions: 'اختر السؤال المناسب للسؤال عن فعل حدث.', question: 'أي سؤال يسأل مباشرة عمّا فعله شخص؟',
      options: ['ماذا فعل؟', 'هل هو؟', 'متى يكون؟'], correctAnswer: 0,
      explanation: '«ماذا + فعل؟» تسأل عن فعل أو حدث.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن أداة السؤال عن الفعل.' },
    },
    {
      id: 'mecca-a2-ar-language-9-immediate', type: 'fill-blanks', title: 'الفعل السريع',
      instructions: 'أكمل بالكلمة التي تعني بلا انتظار.', question: 'أي كلمة توضح سرعة الاستجابة؟',
      fillBlanksText: 'سمع أبو بكر الخبر، فذهب إليه [blank].', correctAnswer: 'فورًا',
      explanation: '«فورًا» تعني أن الفعل حدث بلا انتظار.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن ظرف يدل على السرعة.' },
    },
    {
      id: 'mecca-a2-ar-language-9-production', type: 'reflection', title: 'اسمع واطلب واسأل',
      instructions: 'أنشئ موقفًا مدرسيًا أو يوميًا آمنًا في أربع جمل قصيرة.',
      question: 'هل تستطيع نقل خبر وطلب شيء وطرح سؤال واقتراح حل؟', correctAnswer: null,
      explanation: 'استعمل سمعت أن، طلبت من ... أن، ماذا فعل...؟، وأقدر/نقدر أن.',
      feedback: { correct: 'استخدم الوظائف الأربع في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'انقل خبرًا.', mode: 'Individual' },
        { question: 'قدّم طلبًا.', mode: 'Individual' },
        { question: 'اسأل واقترح حلًا.', mode: 'Pair' },
      ],
    },
  ],
};
