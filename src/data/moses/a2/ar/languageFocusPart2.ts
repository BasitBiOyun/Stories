import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart2Ar: Record<number, Exercise[]> = {
  3: [
    {
      id: 'moses-a2-ar-language-3-fear-ability', type: 'matching', title: 'الخوف وعدم الاستطاعة',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'كيف يعبّر الفصل عن الخوف وعدم القدرة؟',
      matchingPairs: [
        { left: 'كانت تخاف أن يعثر الجنود على طفلها', right: 'خوف من شيء قد يحدث' },
        { left: 'لم تستطع النوم ليلًا', right: 'عدم القدرة في الماضي' },
        { left: 'يخاف أن + فعل مضارع', right: 'التعبير عن خوف مرتبط بفعل محتمل' },
        { left: 'لم يستطع أن + فعل', right: 'التعبير عن عدم الاستطاعة في الماضي' },
      ],
      correctAnswer: {
        'كانت تخاف أن يعثر الجنود على طفلها': 'خوف من شيء قد يحدث',
        'لم تستطع النوم ليلًا': 'عدم القدرة في الماضي',
        'يخاف أن + فعل مضارع': 'التعبير عن خوف مرتبط بفعل محتمل',
        'لم يستطع أن + فعل': 'التعبير عن عدم الاستطاعة في الماضي',
      },
      explanation: 'يميّز الفصل بين الخوف من احتمال وبين عدم الاستطاعة.', feedback: { correct: 'صحيح.', incorrect: 'حدّد هل المعنى خوف أم عدم قدرة.' },
    },
    {
      id: 'moses-a2-ar-language-3-command-future', type: 'sequencing', title: 'الأمر ثم الطمأنة',
      instructions: 'رتّب التعليمات والطمأنة.', question: 'كيف تنتقل اللغة من الأمر إلى المستقبل؟',
      sequencingItems: [
        { id: '1', text: 'خذي تابوتًا صغيرًا.' },
        { id: '2', text: 'ضعي طفلك في التابوت.' },
        { id: '3', text: 'ألقي التابوت في نهر النيل.' },
        { id: '4', text: 'إن الله سيحفظه.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'تأتي أفعال الأمر أولًا، ثم «سـ + فعل مضارع» للطمأنة بالمستقبل.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ بالأوامر ثم جملة المستقبل.' },
    },
    {
      id: 'moses-a2-ar-language-3-report-comparison', type: 'multiple-choice', title: 'نقل التوجيه',
      instructions: 'اختر الجملة التي تنقل توجيهًا إلى شخص آخر.', question: 'أي جملة تنقل ما طُلب من شخص أن يفعله؟',
      options: ['أخبرت ابنتها أن تتبع التابوت', 'لم تستطع النوم ليلًا', 'الله أرحم بطفلها منها'], correctAnswer: 0,
      explanation: '«أخبر + شخصًا + أن + فعل» يمكن أن ينقل توجيهًا.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «أخبرت ... أن». ' },
    },
    {
      id: 'moses-a2-ar-language-3-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'أنشئ موقفًا جديدًا وآمنًا.', question: 'هل تستطيع ذكر خوف أو صعوبة، وإعطاء توجيه، ثم إضافة طمأنة؟',
      correctAnswer: null, explanation: 'استخدم «يخاف أن»، و«لم يستطع»، وفعل أمر، و«سـ + فعل مضارع».', feedback: { correct: 'اجعل الجمل قصيرة وواضحة.', incorrect: '' },
      discussionPrompts: [
        { question: 'جملة خوف أو عدم قدرة.', mode: 'Individual' },
        { question: 'أمر آمن.', mode: 'Pair' },
        { question: 'طمأنة أو توقع بالمستقبل.', mode: 'Individual' },
      ],
    },
  ],
};
