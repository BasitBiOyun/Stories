import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart5Ar: Record<number, Exercise[]> = {
  8: [
    {
      id: 'moses-a2-ar-language-8-question-ability', type: 'matching', title: 'السؤال والقدرة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يسأل الفصل عن فعل لا يحدث ويعبّر عن عدم القدرة؟',
      matchingPairs: [
        { left: 'لماذا لا تأخذان غنمكما لتشرب؟', right: 'سؤال موجّه إلى اثنتين' },
        { left: 'لا يستطيع أن يأتي معنا', right: 'عدم القدرة في الحاضر' },
        { left: 'لماذا لا + فعل مضارع', right: 'السؤال عن سبب عدم فعل شيء' },
        { left: 'لا يستطيع أن + فعل', right: 'التعبير عن عدم القدرة' },
      ],
      correctAnswer: {
        'لماذا لا تأخذان غنمكما لتشرب؟': 'سؤال موجّه إلى اثنتين', 'لا يستطيع أن يأتي معنا': 'عدم القدرة في الحاضر',
        'لماذا لا + فعل مضارع': 'السؤال عن سبب عدم فعل شيء', 'لا يستطيع أن + فعل': 'التعبير عن عدم القدرة',
      },
      explanation: 'يستخدم الفصل صيغة سؤال للمثنى و«لا يستطيع أن» لعدم القدرة.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين السؤال وبين وصف القدرة.' },
    },
    {
      id: 'moses-a2-ar-language-8-purpose-result', type: 'fill-blanks', title: 'النتيجة بـ«لذلك»',
      instructions: 'أكمل أداة النتيجة.', question: 'ما الكلمة التي تربط الوضع بما حدث بعده؟',
      fillBlanksText: 'لا يوجد شبان في بيتنا يساعدوننا، [blank] نحن نأخذ الغنم إلى الماء.', correctAnswer: 'لذلك',
      explanation: 'تربط «لذلك» السبب أو الوضع بالنتيجة.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج كلمة تدل على النتيجة.' },
    },
    {
      id: 'moses-a2-ar-language-8-time-waiting', type: 'multiple-choice', title: 'نهاية الانتظار',
      instructions: 'اختر الجملة التي تستعمل «حتى» لتحديد نهاية متوقعة للانتظار.', question: 'أي جملة صحيحة؟',
      options: ['لم ننتظر حتى يذهب الرعاة الآخرون', 'لقد عدتما إلى البيت مبكرًا جدًا', 'ننتظر دورنا'], correctAnswer: 0,
      explanation: '«حتى + فعل» يمكن أن تحدد الحدث الذي ينتهي عنده الانتظار.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «حتى».' },
    },
    {
      id: 'moses-a2-ar-language-8-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل مهمة مشتركة في البيت أو المدرسة.', question: 'هل تستطيع أن تسأل شخصين، وتذكر عدم قدرة، ثم نتيجة، ثم وقتًا أو انتظارًا؟',
      correctAnswer: null, explanation: 'استخدم «لماذا لا»، و«لا يستطيع»، و«لذلك»، و«حتى» أو «عندما».', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'وجّه سؤالًا إلى شخصين.', mode: 'Pair' }, { question: 'اذكر عدم قدرة.', mode: 'Individual' },
        { question: 'أضف نتيجة بـ«لذلك».', mode: 'Individual' }, { question: 'أضف جملة فيها «حتى» أو «عندما».', mode: 'Individual' },
      ],
    },
  ],
};
