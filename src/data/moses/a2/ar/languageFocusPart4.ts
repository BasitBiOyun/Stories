import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart4Ar: Record<number, Exercise[]> = {
  6: [
    {
      id: 'moses-a2-ar-language-6-purpose-unplanned', type: 'matching', title: 'الغاية والنتيجة غير المقصودة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يوضح الفصل الغاية والنتيجة التي لم تكن مقصودة؟',
      matchingPairs: [
        { left: 'أسرع موسى لمساعدته', right: 'غاية الفعل' },
        { left: 'تسبب في موت رجل عن غير قصد', right: 'نتيجة غير متعمدة' },
        { left: 'لِـ + فعل', right: 'التعبير عن الهدف' },
        { left: 'عن غير قصد', right: 'الشيء حدث بلا تعمد' },
      ],
      correctAnswer: {
        'أسرع موسى لمساعدته': 'غاية الفعل', 'تسبب في موت رجل عن غير قصد': 'نتيجة غير متعمدة',
        'لِـ + فعل': 'التعبير عن الهدف', 'عن غير قصد': 'الشيء حدث بلا تعمد',
      },
      explanation: 'تبيّن اللام الغاية، بينما توضّح «عن غير قصد» أن النتيجة لم تكن متعمدة.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الهدف والنتيجة غير المقصودة.' },
    },
    {
      id: 'moses-a2-ar-language-6-feeling-reason', type: 'fill-blanks', title: 'الشعور والسبب',
      instructions: 'أكمل أداة السبب.', question: 'كيف نربط الحزن بسببه؟',
      fillBlanksText: 'شعر موسى بحزن شديد [blank] ما حدث كان عن غير قصد.', correctAnswer: 'لأن',
      explanation: 'تربط «لأن» الشعور بسببه.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج أداة تشرح السبب.' },
    },
    {
      id: 'moses-a2-ar-language-6-prayer-warning', type: 'multiple-choice', title: 'التحذير بالأمر',
      instructions: 'اختر الجملة التي تعطي أمرًا بسبب خطر قريب.', question: 'أي جملة هي تحذير عملي مباشر؟',
      options: ['اخرج من المدينة', 'جنود فرعون يبحثون عنك', 'شعر موسى بحزن شديد'], correctAnswer: 0,
      explanation: '«اخرج» فعل أمر يطلب فعلًا مباشرًا.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن فعل الأمر.' },
    },
    {
      id: 'moses-a2-ar-language-6-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل موقفًا آمنًا فيه خطأ غير مقصود وتحذير.', question: 'هل تستطيع ذكر غاية وسبب، ثم وصف خطر قائم وإعطاء أمر مناسب؟',
      correctAnswer: null, explanation: 'استخدم «لـ»، و«عن غير قصد»، و«لأن»، وفعلًا مضارعًا، وفعل أمر.', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر غاية فعل.', mode: 'Individual' }, { question: 'اذكر نتيجة حدثت عن غير قصد.', mode: 'Individual' },
        { question: 'اشرح السبب بـ«لأن».', mode: 'Individual' }, { question: 'أعط تحذيرًا آمنًا.', mode: 'Pair' },
      ],
    },
  ],
  7: [
    {
      id: 'moses-a2-ar-language-7-journey-sequence', type: 'matching', title: 'رحلة في الماضي',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف ينظم الفصل لغة الرحلة؟',
      matchingPairs: [
        { left: 'غادر مصر وسافر لفترة طويلة', right: 'أفعال رحلة مكتملة' },
        { left: 'بعد عدة أيام', right: 'زمن لاحق' },
        { left: 'وصل إلى مدين', right: 'بلوغ مكان جديد' },
        { left: 'بعد + مدة زمنية', right: 'ترتيب الأحداث زمنيًا' },
      ],
      correctAnswer: {
        'غادر مصر وسافر لفترة طويلة': 'أفعال رحلة مكتملة', 'بعد عدة أيام': 'زمن لاحق',
        'وصل إلى مدين': 'بلوغ مكان جديد', 'بعد + مدة زمنية': 'ترتيب الأحداث زمنيًا',
      },
      explanation: 'تساعد أفعال الماضي و«بعد» و«وصل إلى» على سرد الرحلة بالترتيب.', feedback: { correct: 'صحيح.', incorrect: 'حدّد الفعل والزمن ونهاية الرحلة.' },
    },
    {
      id: 'moses-a2-ar-language-7-reason-result', type: 'multiple-choice', title: 'الحاجة والنتيجة',
      instructions: 'اختر الجملة التي تعبّر عن نتيجة.', question: 'أي جملة تذكر ما فعله موسى بسبب تعبه وعطشه؟',
      options: ['لذلك بحث عن الماء', 'كان موسى متعبًا وعطشان', 'وصل إلى مدين'], correctAnswer: 0,
      explanation: 'تربط «لذلك» الحالة بالنتيجة.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «لذلك».' },
    },
    {
      id: 'moses-a2-ar-language-7-search', type: 'fill-blanks', title: 'البحث عن شيء',
      instructions: 'أكمل حرف الجر.', question: 'ما التركيب الصحيح؟',
      fillBlanksText: 'بحث موسى [blank] الماء.', correctAnswer: 'عن',
      explanation: 'نقول «بحث عن + اسم».', feedback: { correct: 'صحيح.', incorrect: 'الفعل «بحث» يأتي هنا مع «عن».' },
    },
    {
      id: 'moses-a2-ar-language-7-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'صف رحلة قصيرة مألوفة.', question: 'هل تستطيع استعمال فعلين في الماضي، و«بعد»، و«لذلك»، و«وصل إلى»؟',
      correctAnswer: null, explanation: 'استخدم تراكيب الرحلة في موقف جديد.', feedback: { correct: 'اجعل الترتيب واضحًا.', incorrect: '' },
      discussionPrompts: [
        { question: 'ابدأ بفعل سفر في الماضي.', mode: 'Individual' }, { question: 'أضف «بعد + مدة».', mode: 'Individual' },
        { question: 'اذكر نتيجة بـ«لذلك».', mode: 'Individual' }, { question: 'اختم بـ«وصل إلى».', mode: 'Pair' },
      ],
    },
  ],
};
