import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart7Ar: Record<number, Exercise[]> = {
  10: [
    {
      id: 'moses-a2-ar-language-10-setting-change', type: 'matching', title: 'المكان وتغيّر الحال',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل الجو والمكان والتغيّر؟',
      matchingPairs: [
        { left: 'كان الشتاء', right: 'خلفية زمنية' },
        { left: 'لم يكن هناك أحد في الطريق', right: 'عدم وجود شخص' },
        { left: 'بدأ الظلام يحل', right: 'بداية تغيّر' },
        { left: 'اشتد البرد', right: 'ازدياد حالة' },
      ],
      correctAnswer: {
        'كان الشتاء': 'خلفية زمنية', 'لم يكن هناك أحد في الطريق': 'عدم وجود شخص',
        'بدأ الظلام يحل': 'بداية تغيّر', 'اشتد البرد': 'ازدياد حالة',
      },
      explanation: 'يبني الفصل المشهد باستعمال «كان»، و«لم يكن هناك»، و«بدأ»، و«اشتد».', feedback: { correct: 'صحيح.', incorrect: 'فرّق بين الزمن والمكان وبداية التغير.' },
    },
    {
      id: 'moses-a2-ar-language-10-future-purpose', type: 'fill-blanks', title: 'المستقبل والغاية',
      instructions: 'أكمل أداة الغاية.', question: 'لماذا سيأتي موسى بالنار؟',
      fillBlanksText: 'سآتي ببعض النار [blank]نتدفأ.', correctAnswer: 'ل',
      explanation: 'تأتي اللام قبل الفعل لبيان الغاية: لنتدفأ.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج لام الغاية.' },
    },
    {
      id: 'moses-a2-ar-language-10-command-change', type: 'sequencing', title: 'الأمر والاستجابة والتحوّل',
      instructions: 'رتّب الخطوات.', question: 'كيف ينتقل المشهد من الأمر إلى التحول؟',
      sequencingItems: [
        { id: '1', text: 'قيل لموسى: ألق عصاك.' },
        { id: '2', text: 'ألقى موسى عصاه.' },
        { id: '3', text: 'تحولت العصا إلى ثعبان كبير.' },
        { id: '4', text: 'رأى موسى النتيجة.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'يميز الفصل بين الأمر وتنفيذه ثم التحول.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ بالأمر ثم التنفيذ ثم التحول.' },
    },
    {
      id: 'moses-a2-ar-language-10-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل مساء باردًا في موقف يومي.', question: 'هل تستطيع وصف تغير، وإعطاء توجيه، وذكر فعل قادم وغاية منه؟',
      correctAnswer: null, explanation: 'استخدم «بدأ»، وفعل أمر، و«سـ + فعل»، و«لـ + فعل».', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف شيئًا بدأ يتغير.', mode: 'Individual' }, { question: 'أعط توجيهًا بسيطًا.', mode: 'Pair' },
        { question: 'قل ما ستفعله بعد قليل.', mode: 'Individual' }, { question: 'اذكر الغاية منه.', mode: 'Individual' },
      ],
    },
  ],
};

export const mosesA2LanguageFocusExercisesPart8Ar: Record<number, Exercise[]> = {
  11: [
    {
      id: 'moses-a2-ar-language-11-command-message', type: 'matching', title: 'التوجيه والرسالة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف ينتقل الفصل من التوجيه إلى تبليغ الرسالة؟',
      matchingPairs: [
        { left: 'أدخل يدك في جيبك', right: 'توجيه بحركة مباشرة' },
        { left: 'ثم أخرجها', right: 'الخطوة التالية' },
        { left: 'اذهب إلى فرعون', right: 'توجيه إلى مكان لمهمة' },
        { left: 'أخبره أن الله رب العالمين', right: 'تبليغ رسالة' }
      ],
      correctAnswer: {
        'أدخل يدك في جيبك': 'توجيه بحركة مباشرة', 'ثم أخرجها': 'الخطوة التالية',
        'اذهب إلى فرعون': 'توجيه إلى مكان لمهمة', 'أخبره أن الله رب العالمين': 'تبليغ رسالة'
      },
      explanation: 'يستخدم الفصل صيغ التوجيه ثم لغة تبليغ الرسالة.', feedback: { correct: 'صحيح.', incorrect: 'فرّق بين الحركة والذهاب والتبليغ.' }
    },
    {
      id: 'moses-a2-ar-language-11-change-role', type: 'multiple-choice', title: 'تغيّر الدور',
      instructions: 'اختر الجملة التي تصف دورًا جديدًا.', question: 'أي جملة تستعمل «جعل» لإعطاء دور جديد؟',
      options: ['وجعله نبيًا ورسولًا', 'فإذا هي بيضاء مضيئة', 'لكنهم لم يؤمنوا بالله'], correctAnswer: 0,
      explanation: 'يستعمل «جعل + شخص + اسمًا/صفة» لوصف دور أو حال جديد.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن الفعل «جعل».' }
    },
    {
      id: 'moses-a2-ar-language-11-companion-purpose', type: 'fill-blanks', title: 'الغاية من الذهاب',
      instructions: 'أكمل حرف الغاية.', question: 'لماذا ذهب موسى إلى القصر؟',
      fillBlanksText: 'ذهب موسى إلى القصر [blank]تبليغ رسالة الله.', correctAnswer: 'ل',
      explanation: 'تستخدم اللام لبيان الغاية.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج لام الغاية.' }
    },
    {
      id: 'moses-a2-ar-language-11-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل مهمة صغيرة في المدرسة أو البيت.', question: 'هل تستطيع إعطاء توجيه وذكر المرافق وبيان الغاية ووصف نتيجة؟',
      correctAnswer: null, explanation: 'استخدم صيغة توجيه، و«معه»، و«لـ + فعل»، و«جعل» أو «لم + فعل».',
      feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'أعط توجيهًا بسيطًا.', mode: 'Pair' },
        { question: 'اذكر من يرافقك.', mode: 'Individual' },
        { question: 'اذكر الغاية.', mode: 'Individual' },
        { question: 'صف نتيجة أو دورًا جديدًا.', mode: 'Individual' }
      ]
    }
  ]
};

export const mosesA2LanguageFocusExercisesPart9Ar: Record<number, Exercise[]> = {
  12: [
    {
      id: 'moses-a2-ar-language-12-message-thought', type: 'matching', title: 'الرسالة والرأي والقرار',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يعبّر الفصل عن الرسالة والرأي والقرار؟',
      matchingPairs: [
        { left: 'أخبر موسى فرعون عن الله', right: 'نقل موضوع الحديث' },
        { left: 'ظن أن موسى مجنون', right: 'رأي أو اعتقاد' },
        { left: 'قرر موسى أن يظهر آيات الله', right: 'قرار أو نية' },
        { left: 'إني رسول من رب العالمين', right: 'رسالة مباشرة' },
      ],
      correctAnswer: {
        'أخبر موسى فرعون عن الله': 'نقل موضوع الحديث', 'ظن أن موسى مجنون': 'رأي أو اعتقاد',
        'قرر موسى أن يظهر آيات الله': 'قرار أو نية', 'إني رسول من رب العالمين': 'رسالة مباشرة',
      },
      explanation: 'يفرق الفصل بين نقل الرسالة والرأي والقرار والكلام المباشر.', feedback: { correct: 'صحيح.', incorrect: 'حدّد من ينقل رسالة ومن يعبّر عن رأي ومن يتخذ قرارًا.' },
    },
    {
      id: 'moses-a2-ar-language-12-change-sequence', type: 'sequencing', title: 'الفعل والتحول',
      instructions: 'رتّب الخطوات.', question: 'كيف يعرض الفصل الآيات بالترتيب؟',
      sequencingItems: [
        { id: '1', text: 'أخذ موسى عصاه.' },
        { id: '2', text: 'ألقاها على الأرض.' },
        { id: '3', text: 'تحولت العصا إلى ثعبان كبير.' },
        { id: '4', text: 'ثم أظهر آية اليد.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'تستخدم الأفعال الماضية و«ثم» لترتيب الأحداث، و«تحول إلى» لوصف التغير.', feedback: { correct: 'صحيح.', incorrect: 'اتبع المشهد خطوة خطوة.' },
    },
    {
      id: 'moses-a2-ar-language-12-purpose-ability', type: 'multiple-choice', title: 'القدرة',
      instructions: 'اختر الجملة التي تعبّر عن القدرة.', question: 'أي جملة تستعمل «يستطيع»؟',
      options: ['كل سحرتي يستطيعون فعل هذا', 'هذا مجرد سحر', 'سخر فرعون ومساعدوه من موسى'], correctAnswer: 0,
      explanation: '«يستطيع + فعل» تعبّر عن القدرة.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن كلمة «يستطيعون».' },
    },
    {
      id: 'moses-a2-ar-language-12-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل أنك تعرض مهارة أو تجربة بسيطة.', question: 'هل تستطيع التعبير عن رأي أو قرار، ووصف تحول، وذكر قدرة؟',
      correctAnswer: null, explanation: 'استخدم «ظن أن»، و«قرر أن»، و«تحول إلى»، و«يستطيع».', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر رأيًا أو اعتقادًا.', mode: 'Pair' }, { question: 'اذكر قرارًا.', mode: 'Individual' },
        { question: 'صف تحولًا.', mode: 'Individual' }, { question: 'اذكر قدرة.', mode: 'Individual' },
      ],
    },
  ],
};

export const mosesA2LanguageFocusExercisesPart10Ar: Record<number, Exercise[]> = {
  13: [
    {
      id: 'moses-a2-ar-language-13-arrival-action', type: 'matching', title: 'الدعوة والحضور والفعل',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل الدعوة والحضور وما كان يفعله الأشخاص؟',
      matchingPairs: [
        { left: 'دعا فرعون السحرة إلى القصر', right: 'دعوة أشخاص إلى مكان' },
        { left: 'جاء السحرة وعصيهم في أيديهم', right: 'الحضور مع أشياء' },
        { left: 'كان بعضهم يحمل حبالًا', right: 'فعل مستمر في الماضي' },
        { left: 'وضعوا العصي والحبال على الأرض', right: 'وضع أشياء في مكان' }
      ],
      correctAnswer: {
        'دعا فرعون السحرة إلى القصر': 'دعوة أشخاص إلى مكان', 'جاء السحرة وعصيهم في أيديهم': 'الحضور مع أشياء',
        'كان بعضهم يحمل حبالًا': 'فعل مستمر في الماضي', 'وضعوا العصي والحبال على الأرض': 'وضع أشياء في مكان'
      },
      explanation: 'يجمع الفصل بين الدعوة والحضور ووصف فعل مستمر ووضع الأشياء.', feedback: { correct: 'صحيح.', incorrect: 'فرّق بين الدعوة والحضور والفعل المستمر.' }
    },
    {
      id: 'moses-a2-ar-language-13-command-change', type: 'sequencing', title: 'التوجيه والتحول والنتيجة',
      instructions: 'رتّب الخطوات.', question: 'كيف ينتقل المشهد من التوجيه إلى النتيجة؟',
      sequencingItems: [
        { id: '1', text: 'قيل لموسى أن يلقي عصاه.' },
        { id: '2', text: 'ألقى موسى عصاه.' },
        { id: '3', text: 'تحولت إلى ثعبان ضخم.' },
        { id: '4', text: 'سرعان ما ابتلعت ما صنعه السحرة.' }
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'يرتب الفصل التوجيه ثم التنفيذ فالتحول فالنتيجة السريعة.', feedback: { correct: 'صحيح.', incorrect: 'اتبع المشهد بالترتيب.' }
    },
    {
      id: 'moses-a2-ar-language-13-reason-continuation', type: 'fill-blanks', title: 'السبب والاستمرار',
      instructions: 'أكمل أداة السبب.', question: 'كيف يشرح النص سبب موقف فرعون؟',
      fillBlanksText: 'لم يؤمن بالله [blank] كان متكبرًا.', correctAnswer: 'لأنه',
      explanation: 'تدخل «لأن» على جملة تشرح السبب.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج أداة سبب.' }
    },
    {
      id: 'moses-a2-ar-language-13-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل تجربة أو نشاطًا بسيطًا.', question: 'هل تستطيع وصف حضور شخص، ثم توجيه، ثم تحول، ثم سبب أو فعل مستمر؟',
      correctAnswer: null, explanation: 'استخدم «جاء ... ومعه»، وصيغة توجيه، و«تحول إلى»، و«لأن» أو «استمر في».', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر ماذا كان مع شخص عند وصوله.', mode: 'Pair' },
        { question: 'أعط توجيهًا قصيرًا.', mode: 'Individual' },
        { question: 'صف تحولًا.', mode: 'Individual' },
        { question: 'اذكر سببًا أو استمرارًا.', mode: 'Individual' }
      ]
    }
  ],
  14: [
    {
      id: 'moses-a2-ar-language-14-command-preparation', type: 'matching', title: 'التوجيه والاستعداد',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يستخدم الفصل لغة التوجيه والاستعداد قبل الرحلة؟',
      matchingPairs: [
        { left: 'اخرج بقومك ليلًا', right: 'توجيه مباشر' },
        { left: 'استعدوا للرحلة', right: 'الاستعداد لحدث' },
        { left: 'دعا موسى قومه', right: 'جمع الناس أو دعوتهم' },
        { left: 'سنغادر في الليل', right: 'خطة مستقبلية' }
      ],
      correctAnswer: {
        'اخرج بقومك ليلًا': 'توجيه مباشر', 'استعدوا للرحلة': 'الاستعداد لحدث',
        'دعا موسى قومه': 'جمع الناس أو دعوتهم', 'سنغادر في الليل': 'خطة مستقبلية'
      },
      explanation: 'يجمع الفصل بين التوجيه والاستعداد والدعوة والخطة المستقبلية.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين التوجيه والاستعداد والمستقبل.' }
    },
    {
      id: 'moses-a2-ar-language-14-obligation-future', type: 'multiple-choice', title: 'الواجب',
      instructions: 'اختر الجملة التي تعبّر عن واجب.', question: 'أي جملة تستعمل «عليكم أن»؟',
      options: ['عليكم أن تحافظوا على سرية الأمر', 'سنغادر مصر', 'دعا موسى قومه'], correctAnswer: 0,
      explanation: '«على + شخص + أن + فعل» تعبّر عن واجب أو مسؤولية.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «عليكم أن».' }
    },
    {
      id: 'moses-a2-ar-language-14-secrecy-time', type: 'fill-blanks', title: 'الخطة المستقبلية',
      instructions: 'أكمل حرف المستقبل.', question: 'كيف يعبّر النص عن خطة المغادرة؟',
      fillBlanksText: '[blank]نغادر في الليل.', correctAnswer: 'س',
      explanation: 'تدخل السين على الفعل المضارع للتعبير عن المستقبل.', feedback: { correct: 'صحيح.', incorrect: 'أضف حرف المستقبل.' }
    },
    {
      id: 'moses-a2-ar-language-14-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'خطط لنشاط جماعي آمن.', question: 'هل تستطيع إعطاء توجيه، وذكر استعداد، وواجب، وخطة مستقبلية؟',
      correctAnswer: null, explanation: 'استخدم صيغة توجيه، و«استعد لـ»، و«عليك أن»، و«سـ + فعل».', feedback: { correct: 'اجعل المثال يوميًا وآمنًا.', incorrect: '' },
      discussionPrompts: [
        { question: 'أعط توجيهًا.', mode: 'Pair' },
        { question: 'اذكر ما يجب الاستعداد له.', mode: 'Individual' },
        { question: 'اذكر واجبًا.', mode: 'Individual' },
        { question: 'اختم بخطة مستقبلية.', mode: 'Individual' }
      ]
    }
  ]
};

export const mosesA2LanguageFocusExercisesPart11Ar: Record<number, Exercise[]> = {
  15: [
    {
      id: 'moses-a2-ar-language-15-position-reassurance', type: 'matching', title: 'المكان والطمأنينة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل موقع الخطر ويطمئن القوم؟',
      matchingPairs: [
        { left: 'كان البحر أمامهم', right: 'وصف ما أمام المجموعة' },
        { left: 'كان فرعون وجيشه خلفهم', right: 'وصف ما خلف المجموعة' },
        { left: 'اهدؤوا', right: 'طلب الهدوء' },
        { left: 'سيهدين', right: 'طمأنة بالمستقبل' }
      ],
      correctAnswer: {
        'كان البحر أمامهم': 'وصف ما أمام المجموعة', 'كان فرعون وجيشه خلفهم': 'وصف ما خلف المجموعة',
        'اهدؤوا': 'طلب الهدوء', 'سيهدين': 'طمأنة بالمستقبل'
      },
      explanation: 'يجمع المشهد بين ألفاظ المكان والتوجيه وصيغة المستقبل.', feedback: { correct: 'صحيح.', incorrect: 'فرّق بين المكان والطمأنة.' }
    },
    {
      id: 'moses-a2-ar-language-15-command-change', type: 'sequencing', title: 'التوجيه والتحول والنتيجة',
      instructions: 'رتّب الخطوات.', question: 'كيف ينتقل المشهد من التوجيه إلى الطريق الآمن؟',
      sequencingItems: [
        { id: '1', text: 'قيل لموسى أن يضرب البحر بعصاه.' },
        { id: '2', text: 'انشق البحر.' },
        { id: '3', text: 'أصبحت الأمواج جدرانًا عالية.' },
        { id: '4', text: 'ظهر طريق في البحر.' }
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'ترتب القصة التوجيه ثم التغير ثم الحالة الجديدة ثم النتيجة.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ بالتوجيه ثم اتبع النتيجة.' }
    },
    {
      id: 'moses-a2-ar-language-15-safe-movement', type: 'fill-blanks', title: 'الموقع في الوسط',
      instructions: 'أكمل حرف المكان.', question: 'كيف نصف السير في وسط شيئين؟',
      fillBlanksText: 'سار القوم بأمان [blank] جدران من الماء.', correctAnswer: 'بين',
      explanation: 'تستخدم «بين» لوصف موقع في الوسط.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج كلمة مكان تعني في الوسط.' }
    },
    {
      id: 'moses-a2-ar-language-15-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل مجموعة تحتاج إلى المرور بأمان في مكان مزدحم.', question: 'هل تستطيع وصف ما أمامهم وخلفهم، وطمأنتهم، ثم وصف طريق آمن؟',
      correctAnswer: null, explanation: 'استخدم «أمام»، و«خلف»، وصيغة توجيه، و«سـ + فعل»، و«بين» و«بأمان».', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف ما أمام المجموعة وما خلفها.', mode: 'Individual' },
        { question: 'قدّم طمأنة قصيرة.', mode: 'Pair' },
        { question: 'اذكر شيئًا سيحدث.', mode: 'Individual' },
        { question: 'صف طريقًا آمنًا.', mode: 'Individual' }
      ]
    }
  ],
  16: [
    {
      id: 'moses-a2-ar-language-16-place-time', type: 'matching', title: 'المكان والزمن',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يحدد الفصل المكان والزمن في المشهد الأخير؟',
      matchingPairs: [
        { left: 'قريبين جدًا من ورائهم', right: 'موقع خلف مجموعة' },
        { left: 'في وسط البحر', right: 'موقع في المنتصف' },
        { left: 'عندما وصلوا إلى منتصف الطريق', right: 'تحديد وقت حدث آخر' },
        { left: 'وفي النهاية', right: 'تقديم النتيجة الأخيرة' }
      ],
      correctAnswer: {
        'قريبين جدًا من ورائهم': 'موقع خلف مجموعة', 'في وسط البحر': 'موقع في المنتصف',
        'عندما وصلوا إلى منتصف الطريق': 'تحديد وقت حدث آخر', 'وفي النهاية': 'تقديم النتيجة الأخيرة'
      },
      explanation: 'تساعد ألفاظ المكان و«عندما» و«في النهاية» على ترتيب المشهد.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين المكان والزمن والختام.' }
    },
    {
      id: 'moses-a2-ar-language-16-claim-command-result', type: 'multiple-choice', title: 'تقديم الكلام',
      instructions: 'اختر الجملة التي تقدّم كلامًا إلى جماعة.', question: 'أي جملة تستعمل «قال لـ»؟',
      options: ['قال فرعون لجنوده', 'في وسط البحر', 'وفي النهاية'], correctAnswer: 0,
      explanation: '«قال لـ + شخص» تقدم المخاطب الذي وُجّه إليه الكلام.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «قال ... لجنوده».' }
    },
    {
      id: 'moses-a2-ar-language-16-final-sequence', type: 'sequencing', title: 'الحدث الأخير',
      instructions: 'رتّب العبارات زمنيًا.', question: 'كيف ينظم الفصل نهاية المطاردة؟',
      sequencingItems: [
        { id: '1', text: 'دخل فرعون وجنوده الطريق.' },
        { id: '2', text: 'وصلوا إلى منتصف الطريق.' },
        { id: '3', text: 'أغلق البحر عليهم.' },
        { id: '4', text: 'وصلت القصة إلى نتيجتها الأخيرة.' }
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'تستخدم أحداث الماضي و«عندما» و«في النهاية» لترتيب الخاتمة.', feedback: { correct: 'صحيح.', incorrect: 'اتبع الحدث من الدخول إلى منتصف الطريق ثم النتيجة.' }
    },
    {
      id: 'moses-a2-ar-language-16-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'اكتب أو قل خاتمة قصيرة لحدث يومي آمن.', question: 'هل تستطيع استعمال عبارة مكان، و«عندما»، و«في النهاية» لترتيب الحدث؟',
      correctAnswer: null, explanation: 'انقل لغة المكان والزمن والترتيب إلى موقف جديد.', feedback: { correct: 'اجعل الخاتمة واضحة وبسيطة.', incorrect: '' },
      discussionPrompts: [
        { question: 'ابدأ بعبارة مكان.', mode: 'Individual' },
        { question: 'أضف جملة تبدأ بـ«عندما».', mode: 'Individual' },
        { question: 'اختم بـ«في النهاية».', mode: 'Pair' }
      ]
    }
  ]
};
