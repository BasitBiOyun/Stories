import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart5: Record<number, Exercise[]> = {
  6: [
    {
      id: 'mecca-a2-ar-language-6-form-function', type: 'matching', title: 'التفكير والقرار والوقت',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'كيف ينتقل الفصل من التفكير إلى الفعل؟',
      matchingPairs: [
        { left: 'فكّر في + اسم', right: 'توجيه التفكير إلى موضوع' },
        { left: 'قرّر أن + فعل', right: 'اتخاذ قرار' },
        { left: 'لم يرد أن + فعل', right: 'عدم الرغبة' },
        { left: 'عندما + فعل ماضٍ', right: 'ربط حدث بوقت حدث آخر' },
      ],
      correctAnswer: {
        'فكّر في + اسم': 'توجيه التفكير إلى موضوع',
        'قرّر أن + فعل': 'اتخاذ قرار',
        'لم يرد أن + فعل': 'عدم الرغبة',
        'عندما + فعل ماضٍ': 'ربط حدث بوقت حدث آخر',
      },
      explanation: 'تساعد هذه التراكيب على وصف التفكير والقرار والرغبة والوقت.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين التفكير والقرار والرغبة والوقت.' },
    },
    {
      id: 'mecca-a2-ar-language-6-decision', type: 'multiple-choice', title: 'قرار بعد تفكير',
      instructions: 'اختر الجملة التي تعبّر عن قرار.', question: 'أي جملة تصف قرارًا واضحًا؟',
      options: ['قرّر بلال أن يزور أبا بكر.', 'فكّر بلال في الرسالة.', 'شعر بلال بالخوف.'], correctAnswer: 0,
      explanation: '«قرّر أن + فعل» تعبّر عن اتخاذ قرار.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «قرّر أن».' },
    },
    {
      id: 'mecca-a2-ar-language-6-starting', type: 'fill-blanks', title: 'بداية فعل جديد',
      instructions: 'أكمل بالفعل المناسب.', question: 'كيف نعبّر عن بداية فعل؟',
      fillBlanksText: 'عندما دخل البيت، [blank] يسأل أسئلة كثيرة.', correctAnswer: 'بدأ',
      explanation: '«بدأ + فعل مضارع» يعبّر عن بداية نشاط.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل فعل البداية.' },
    },
    {
      id: 'mecca-a2-ar-language-6-production', type: 'reflection', title: 'فكّر ثم قرّر',
      instructions: 'اكتب أربع جمل A2 عن شخص يفكر في أمر ثم يتخذ قرارًا ويبدأ فعلًا جديدًا.',
      question: 'هل تستطيع استعمال التفكير والقرار والرغبة والوقت؟', correctAnswer: null,
      explanation: 'استعمل ثلاثة تراكيب على الأقل: فكّر في، قرّر أن، لم يرد أن، عرف أن، عندما، بدأ + فعل.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'ابدأ بتفكير.', mode: 'Individual' },
        { question: 'أضف قرارًا.', mode: 'Individual' },
        { question: 'اختم بفعل يبدأ عند وقت محدد.', mode: 'Pair' },
      ],
    },
  ],
};
