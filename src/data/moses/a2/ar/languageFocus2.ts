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

export const mosesA2LanguageFocusExercisesPart3Ar: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-a2-ar-language-4-past-movement', type: 'matching', title: 'أفعال الماضي والحركة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل الحركة والأحداث المكتملة؟',
      matchingPairs: [
        { left: 'وصل التابوت إلى شاطئ النهر', right: 'وصول شيء إلى مكان' },
        { left: 'رأى خدم القصر التابوت', right: 'حدث مكتمل في الماضي' },
        { left: 'أخذوه إلى فرعون وآسية', right: 'حركة نحو شخص أو مكان' },
        { left: 'أسرعت أخت موسى إلى آسية', right: 'حركة شخص نحو شخص آخر' },
      ],
      correctAnswer: {
        'وصل التابوت إلى شاطئ النهر': 'وصول شيء إلى مكان', 'رأى خدم القصر التابوت': 'حدث مكتمل في الماضي',
        'أخذوه إلى فرعون وآسية': 'حركة نحو شخص أو مكان', 'أسرعت أخت موسى إلى آسية': 'حركة شخص نحو شخص آخر',
      },
      explanation: 'تتبع أفعال الماضي وحرف «إلى» حركة الأشخاص والأشياء.', feedback: { correct: 'صحيح.', incorrect: 'لاحظ الفعل ثم اتجاه الحركة.' },
    },
    {
      id: 'moses-a2-ar-language-4-description-contrast', type: 'multiple-choice', title: 'الوصف والاختلاف',
      instructions: 'اختر الجملة التي تقارن بين شخصين.', question: 'أي جملة تستعمل «مختلف عن»؟',
      options: ['كانت آسية مختلفة عن زوجها', 'كانت طيبة القلب ورحيمة', 'وصل التابوت إلى شاطئ النهر'], correctAnswer: 0,
      explanation: '«مختلف عن» يبيّن الفرق بين طرفين.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن كلمة «مختلفة».' },
    },
    {
      id: 'moses-a2-ar-language-4-future-command', type: 'fill-blanks', title: 'قرار في المستقبل',
      instructions: 'أكمل الجملة بحرف المستقبل.', question: 'كيف تعبّر آسية عن قرار للمستقبل؟',
      fillBlanksText: '[blank]آخذه إلى القصر وأعتني به.', correctAnswer: 'س',
      explanation: 'تدخل السين على الفعل المضارع للتعبير عن المستقبل: سآخذه.', feedback: { correct: 'صحيح.', incorrect: 'أضف حرف المستقبل قبل الفعل.' },
    },
    {
      id: 'moses-a2-ar-language-4-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'أنشئ موقفًا بسيطًا عن مساعدة شخص.', question: 'هل تستطيع وصف شخص، وبيان اختلاف، وذكر قرار للمستقبل، وإعطاء أمر آمن؟',
      correctAnswer: null, explanation: 'استخدم «كان/كانت + صفة»، و«مختلف عن»، و«سـ + فعل»، وفعل أمر.', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف شخصًا بصفتين.', mode: 'Individual' }, { question: 'استخدم «مختلف عن».', mode: 'Individual' },
        { question: 'قل ما ستفعله لاحقًا.', mode: 'Individual' }, { question: 'أعطِ أمرًا آمنًا.', mode: 'Pair' },
      ],
    },
  ],
  5: [
    {
      id: 'moses-a2-ar-language-5-care-change', type: 'matching', title: 'الرعاية والتغيّر',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل الرعاية والنمو والتغيّر؟',
      matchingPairs: [
        { left: 'لترعى الطفل', right: 'غاية الرعاية' },
        { left: 'اعتنت أمه بالطفل موسى', right: 'فعل رعاية في الماضي' },
        { left: 'نشأ موسى في مكان آمن', right: 'نمو مع الزمن' },
        { left: 'أصبح موسى شابًا قويًا', right: 'انتقال إلى حالة جديدة' },
      ],
      correctAnswer: {
        'لترعى الطفل': 'غاية الرعاية', 'اعتنت أمه بالطفل موسى': 'فعل رعاية في الماضي',
        'نشأ موسى في مكان آمن': 'نمو مع الزمن', 'أصبح موسى شابًا قويًا': 'انتقال إلى حالة جديدة',
      },
      explanation: 'تستخدم «أصبح» للتغير، و«نشأ» للنمو، واللام للغرض.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الرعاية والنمو والتغير.' },
    },
    {
      id: 'moses-a2-ar-language-5-habit-reason', type: 'fill-blanks', title: 'ذكر السبب',
      instructions: 'أكمل أداة السبب.', question: 'ما الكلمة التي تربط الفكرة بسببها؟',
      fillBlanksText: 'كان يحب بني إسرائيل [blank] أمه كانت من بني إسرائيل.', correctAnswer: 'لأن',
      explanation: 'تدخل «لأن» على جملة تشرح السبب.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج أداة تجيب عن «لماذا؟».' },
    },
    {
      id: 'moses-a2-ar-language-5-background-event', type: 'multiple-choice', title: 'خلفية الحدث',
      instructions: 'اختر الجملة التي تصف فعلًا مستمرًا في خلفية المشهد.', question: 'أي جملة تعطي خلفية قبل حدث جديد؟',
      options: ['كان يمشي في السوق', 'رأى رجلين يتخاصمان', 'أصبح موسى شابًا قويًا'], correctAnswer: 0,
      explanation: '«كان + فعل مضارع» يمكن أن يصف فعلًا مستمرًا في الخلفية.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «كان + مضارع».' },
    },
    {
      id: 'moses-a2-ar-language-5-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'اكتب ثلاث أو أربع جمل عن شخص يساعد الآخرين.', question: 'هل تستطيع استعمال «أصبح»، و«دائمًا»، و«لأن»، وجملة خلفية بـ«كان + مضارع»؟',
      correctAnswer: null, explanation: 'انقل لغة الفصل إلى موقف جديد.', feedback: { correct: 'اجعل الجمل مترابطة وبسيطة.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف تغيرًا بـ«أصبح».', mode: 'Individual' }, { question: 'صف عادة بـ«دائمًا».', mode: 'Individual' },
        { question: 'اذكر سببًا بـ«لأن».', mode: 'Individual' }, { question: 'أضف خلفية بـ«كان + فعل مضارع».', mode: 'Pair' },
      ],
    },
  ],
};

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

export const mosesA2LanguageFocusExercisesPart6Ar: Record<number, Exercise[]> = {
  9: [
    {
      id: 'moses-a2-ar-language-9-ability-need', type: 'matching', title: 'القدرة والحاجة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يعبّر الفصل عن عدم القدرة والحاجة والسبب؟',
      matchingPairs: [
        { left: 'لم يكن قادرًا على مساعدة بناته', right: 'عدم القدرة في الماضي' },
        { left: 'كان بحاجة إلى عمل وبيت', right: 'الحاجة إلى شيء' },
        { left: 'لأنه كان غريبًا في مدين', right: 'ذكر السبب' },
        { left: 'بحاجة إلى + اسم', right: 'تركيب للاحتياج' },
      ],
      correctAnswer: {
        'لم يكن قادرًا على مساعدة بناته': 'عدم القدرة في الماضي', 'كان بحاجة إلى عمل وبيت': 'الحاجة إلى شيء',
        'لأنه كان غريبًا في مدين': 'ذكر السبب', 'بحاجة إلى + اسم': 'تركيب للاحتياج',
      },
      explanation: 'يميّز الفصل بين عدم القدرة والحاجة وسبب الاختيار.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين ما لم يستطع فعله وما كان يحتاج إليه.' },
    },
    {
      id: 'moses-a2-ar-language-9-intention-instruction', type: 'multiple-choice', title: 'الرغبة والتوجيه',
      instructions: 'اختر الجملة التي تعبّر عن رغبة.', question: 'أي جملة تستعمل «أريد أن + فعل»؟',
      options: ['أريد أن أشكره على عمله', 'اذهبي ونادي الشاب', 'قبل موسى العمل'], correctAnswer: 0,
      explanation: '«أريد أن + فعل» تعبّر عن رغبة أو نية.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «أريد أن».' },
    },
    {
      id: 'moses-a2-ar-language-9-change-time', type: 'sequencing', title: 'التغير عبر الزمن',
      instructions: 'رتّب المراحل.', question: 'كيف ينظم الفصل بداية الحياة الجديدة ثم القرار اللاحق؟',
      sequencingItems: [
        { id: '1', text: 'بدأ موسى يقيم مع العائلة.' },
        { id: '2', text: 'بعد ذلك تزوج إحدى الفتاتين.' },
        { id: '3', text: 'مرت عشر سنوات.' },
        { id: '4', text: 'قرر موسى العودة إلى مصر.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'تساعد «بدأ»، و«بعد ذلك»، و«بعد + مدة»، و«قرر» على ترتيب التغيرات.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ ببداية الإقامة ثم الحدث اللاحق فالمدة فالقرار.' },
    },
    {
      id: 'moses-a2-ar-language-9-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل فرصة جديدة في المدرسة أو البيت.', question: 'هل تستطيع ذكر حاجة وسبب، ثم رغبة أو عرضًا، ثم قرارًا لاحقًا؟',
      correctAnswer: null, explanation: 'استخدم «بحاجة إلى»، و«لأن»، و«أريد أن»، و«بعد ذلك»، و«قرر».', feedback: { correct: 'اجعل المثال جديدًا وبسيطًا.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر حاجة.', mode: 'Individual' }, { question: 'اشرح سببًا.', mode: 'Individual' },
        { question: 'عبّر عن رغبة أو عرض.', mode: 'Pair' }, { question: 'اختم بقرار لاحق.', mode: 'Individual' },
      ],
    },
  ],
};
