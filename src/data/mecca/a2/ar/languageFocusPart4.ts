import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart4: Record<number, Exercise[]> = {
  5: [
    {
      id: 'mecca-a2-ar-language-5-form-function', type: 'matching', title: 'السبب والتوقّع والطلب',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل الخامس؟',
      matchingPairs: [
        { left: 'لأنّ + جملة', right: 'ذكر السبب' },
        { left: 'ظنّ أن + جملة', right: 'نقل اعتقاد أو توقّع' },
        { left: 'يجب أن + فعل', right: 'واجب أو مبدأ قوي' },
        { left: 'طلب من + شخص + أن + فعل', right: 'نقل طلب موجّه' },
      ],
      correctAnswer: {
        'لأنّ + جملة': 'ذكر السبب',
        'ظنّ أن + جملة': 'نقل اعتقاد أو توقّع',
        'يجب أن + فعل': 'واجب أو مبدأ قوي',
        'طلب من + شخص + أن + فعل': 'نقل طلب موجّه',
      },
      explanation: 'يجمع الفصل بين السبب والاعتقاد والواجب والطلب.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين السبب والتوقع والواجب والطلب.' },
    },
    {
      id: 'mecca-a2-ar-language-5-future', type: 'multiple-choice', title: 'مستقبل متوقّع',
      instructions: 'اختر الجملة التي تنقل توقعًا عن المستقبل من موقف ماضٍ.', question: 'أي جملة تناسب هذا المعنى؟',
      options: ['ظن بلال أنه سيكون عبدًا إلى الأبد.', 'بلال عبد الآن.', 'كان بلال قد وصل غدًا.'], correctAnswer: 0,
      explanation: '«ظنّ أن ... سيكون ...» يجمع اعتقادًا ماضيًا مع حالة متوقعة لاحقًا.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «ظنّ» و«سيكون».' },
    },
    {
      id: 'mecca-a2-ar-language-5-purpose', type: 'fill-blanks', title: 'الغرض',
      instructions: 'أكمل بتركيب الغرض.', question: 'كيف نوضح لماذا يعمل الشخص؟',
      fillBlanksText: 'كان على بلال أن يعمل بجد [blank] سيده.', correctAnswer: 'ليرضي',
      explanation: 'لام التعليل مع الفعل تبيّن الغرض من العمل.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل لام التعليل مع فعل مناسب.' },
    },
    {
      id: 'mecca-a2-ar-language-5-production', type: 'reflection', title: 'رسالة وتوقّع',
      instructions: 'اكتب أربع جمل A2 عن شخص يسمع فكرة جديدة ويتغير توقّعه، من دون إعادة قصة بلال.',
      question: 'هل تستطيع استعمال اعتقاد وطلب وواجب وغرض؟', correctAnswer: null,
      explanation: 'استعمل ثلاثة تراكيب على الأقل: ظنّ أن، سمع، يجب أن، طلب من ... أن، ولِـ + فعل.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر توقعًا قديمًا.', mode: 'Individual' },
        { question: 'أضف معلومة أو رسالة جديدة.', mode: 'Individual' },
        { question: 'أضف واجبًا أو طلبًا وغرضًا.', mode: 'Pair' },
      ],
    },
  ],
};
