import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'mecca-a2-ar-language-8-form-function', type: 'matching', title: 'السؤال والضغط والشرط',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل الثامن؟',
      matchingPairs: [
        { left: 'هل + جملة؟', right: 'سؤال مباشر بنعم أو لا' },
        { left: 'أجبر + شخصًا + على + مصدر', right: 'التعبير عن إجبار شخص' },
        { left: 'أمر + شخصًا + أن + فعل', right: 'إعطاء أمر' },
        { left: 'إذا ... سـ...', right: 'ربط شرط بنتيجة مستقبلية' },
      ],
      correctAnswer: {
        'هل + جملة؟': 'سؤال مباشر بنعم أو لا',
        'أجبر + شخصًا + على + مصدر': 'التعبير عن إجبار شخص',
        'أمر + شخصًا + أن + فعل': 'إعطاء أمر',
        'إذا ... سـ...': 'ربط شرط بنتيجة مستقبلية',
      },
      explanation: 'يجمع الفصل بين السؤال المباشر والضغط والأمر والشرط.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين السؤال والإجبار والأمر والشرط.' },
    },
    {
      id: 'mecca-a2-ar-language-8-condition', type: 'multiple-choice', title: 'شرط ونتيجة',
      instructions: 'اختر الجملة التي تربط شرطًا بنتيجة مستقبلية.', question: 'أي جملة تستخدم النمط الصحيح؟',
      options: ['إذا تكلمت، ستكون حرًّا.', 'عندما تكلمت، كنت حرًّا.', 'لأنك تكلمت، تتكلم.'], correctAnswer: 0,
      explanation: '«إذا + فعل ... سـ + فعل» تربط شرطًا بنتيجته المستقبلية.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «إذا» ثم نتيجة مستقبلية.' },
    },
    {
      id: 'mecca-a2-ar-language-8-command', type: 'fill-blanks', title: 'نقل الأمر',
      instructions: 'أكمل التركيب.', question: 'كيف ننقل أمرًا؟',
      fillBlanksText: 'أمر أمية الأطفال [blank] يربطوا الحبال.', correctAnswer: 'أن',
      explanation: '«أمر + شخصًا + أن + فعل» تنقل أمرًا إلى شخص أو جماعة.',
      feedback: { correct: 'صحيح.', incorrect: 'أكمل تركيب الأمر المنقول.' },
    },
    {
      id: 'mecca-a2-ar-language-8-production', type: 'reflection', title: 'سؤال وقاعدة',
      instructions: 'أنشئ موقفًا يوميًا آمنًا من المدرسة أو النادي في أربع جمل قصيرة.',
      question: 'هل تستطيع استعمال سؤال وأمر وشرط وجواب؟', correctAnswer: null,
      explanation: 'استعمل هل...؟، أمر ... أن، إذا ... سـ...، ونعم/لا أو لكن.',
      feedback: { correct: 'استخدم الوظائف الأربع في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'اسأل سؤالًا مباشرًا.', mode: 'Individual' },
        { question: 'أعطِ تعليمًا أو أمرًا آمنًا.', mode: 'Individual' },
        { question: 'أضف شرطًا ونتيجة.', mode: 'Pair' },
      ],
    },
  ],
};

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

export const meccaA2LanguageFocusExercisesArPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'mecca-a2-ar-language-10-form-function', type: 'matching', title: 'الموافقة والافتراض والتغيّر',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل العاشر؟',
      matchingPairs: [
        { left: 'وافق أن + فعل', right: 'قبول فعل أو قرار' },
        { left: 'لو ... لـ...', right: 'موقف افتراضي ونتيجته' },
        { left: 'أصبح + اسم/صفة', right: 'تغيّر الحال' },
        { left: 'لكن ... بل ...', right: 'مقارنة اختيار بما لم يحدث' },
      ],
      correctAnswer: {
        'وافق أن + فعل': 'قبول فعل أو قرار',
        'لو ... لـ...': 'موقف افتراضي ونتيجته',
        'أصبح + اسم/صفة': 'تغيّر الحال',
        'لكن ... بل ...': 'مقارنة اختيار بما لم يحدث',
      },
      explanation: 'يجمع الفصل بين الموافقة والافتراض وتغيّر الحال والاختيار.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الموافقة والافتراض والتغيّر والاختيار.' },
    },
    {
      id: 'mecca-a2-ar-language-10-sequence', type: 'sequencing', title: 'ترتيب الأحداث',
      instructions: 'رتّب عبارات الزمن من البداية إلى النهاية.', question: 'ما الترتيب الطبيعي؟',
      sequencingItems: [
        { id: '1', text: 'أولًا' },
        { id: '2', text: 'بعد ذلك' },
        { id: '3', text: 'وأخيرًا' },
      ],
      correctAnswer: ['1', '2', '3'],
      explanation: '«أولًا، بعد ذلك، وأخيرًا» تنظّم تسلسل الأحداث.',
      feedback: { correct: 'صحيح.', incorrect: 'ابدأ بأولًا واختم بأخيرًا.' },
    },
    {
      id: 'mecca-a2-ar-language-10-change', type: 'fill-blanks', title: 'حال جديد',
      instructions: 'أكمل بفعل التغيّر.', question: 'أي فعل يصف انتقال الشخص إلى حال جديد؟',
      fillBlanksText: '[blank] بلال رجلًا حرًّا.', correctAnswer: 'أصبح',
      explanation: '«أصبح + اسم/صفة» تصف تغيرًا في الحال.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل فعلًا يدل على تغيّر الحال.' },
    },
    {
      id: 'mecca-a2-ar-language-10-production', type: 'reflection', title: 'تغيّر واختيار',
      instructions: 'اكتب أربع جمل A2 عن موقف جديد فيه موافقة وافتراض وتغيّر واختيار.',
      question: 'هل تستطيع استعمال وظائف الفصل في موقف يومي؟', correctAnswer: null,
      explanation: 'استعمل وافق أن، لو ... لـ...، أصبح/الآن، لكنه لم يفعل بل....',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'ابدأ بموافقة.', mode: 'Individual' },
        { question: 'أضف موقفًا افتراضيًا.', mode: 'Individual' },
        { question: 'اختم بتغيّر أو اختيار.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesArPart10: Record<number, Exercise[]> = {
  11: [
    {
      id: 'mecca-a2-ar-language-11-form-function', type: 'matching', title: 'الزمن والإرادة والنتيجة',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل الحادي عشر؟',
      matchingPairs: [
        { left: 'بعد + حدث', right: 'تحديد مرحلة لاحقة' },
        { left: 'صار + اسم/صفة', right: 'تغيّر الحال أو المكانة' },
        { left: 'سمح لـ + شخص + أن + فعل', right: 'إعطاء الإذن' },
        { left: 'لذلك / فـ', right: 'ربط السبب بالنتيجة' },
      ],
      correctAnswer: {
        'بعد + حدث': 'تحديد مرحلة لاحقة',
        'صار + اسم/صفة': 'تغيّر الحال أو المكانة',
        'سمح لـ + شخص + أن + فعل': 'إعطاء الإذن',
        'لذلك / فـ': 'ربط السبب بالنتيجة',
      },
      explanation: 'تربط هذه التراكيب بين الزمن وتغيّر المكانة والإذن والنتيجة.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الزمن والتغيّر والإذن والنتيجة.' },
    },
    {
      id: 'mecca-a2-ar-language-11-permission', type: 'multiple-choice', title: 'الإذن',
      instructions: 'اختر الجملة التي تعبّر عن السماح.', question: 'أي جملة تعطي شخصًا إذنًا؟',
      options: ['سمح له أن يبقى.', 'أراد أن يبقى.', 'ذهب بعد ذلك.'], correctAnswer: 0,
      explanation: '«سمح لـ + شخص + أن + فعل» تعطي الإذن.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن فعل السماح.' },
    },
    {
      id: 'mecca-a2-ar-language-11-result', type: 'fill-blanks', title: 'النتيجة',
      instructions: 'أكمل بأداة النتيجة.', question: 'أي كلمة تقدّم نتيجة؟',
      fillBlanksText: 'كان صوته قويًّا، [blank] اختير للنداء إلى الصلاة.', correctAnswer: 'لذلك',
      explanation: '«لذلك» تقدّم نتيجة مبنية على فكرة سابقة.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل أداة نتيجة.' },
    },
    {
      id: 'mecca-a2-ar-language-11-production', type: 'reflection', title: 'دور جديد',
      instructions: 'اكتب أربع جمل A2 عن شخص يحصل على دور جديد بعد فترة من العمل.',
      question: 'هل تستطيع استعمال الزمن والإرادة أو الإذن والصعوبة والنتيجة؟', correctAnswer: null,
      explanation: 'استعمل بعد، أراد أن أو سمح لـ... أن، حتى عندما، لذلك أو فـ.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'ابدأ بعبارة زمن.', mode: 'Individual' },
        { question: 'أضف إرادة أو إذنًا.', mode: 'Individual' },
        { question: 'اختم بنتيجة.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesArPart11: Record<number, Exercise[]> = {
  12: [
    {
      id: 'mecca-a2-ar-language-12-form-function', type: 'matching', title: 'العادة والمقارنة والسبب',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل الثاني عشر؟',
      matchingPairs: [
        { left: 'كان + فعل مضارع', right: 'عادة أو فعل متكرر في الماضي' },
        { left: 'خير/أفضل من', right: 'المقارنة' },
        { left: 'أمر + شخص + أن + فعل', right: 'إعطاء توجيه أو أمر' },
        { left: 'بسبب + اسم', right: 'ذكر السبب قبل اسم' },
      ],
      correctAnswer: {
        'كان + فعل مضارع': 'عادة أو فعل متكرر في الماضي',
        'خير/أفضل من': 'المقارنة',
        'أمر + شخص + أن + فعل': 'إعطاء توجيه أو أمر',
        'بسبب + اسم': 'ذكر السبب قبل اسم',
      },
      explanation: 'يجمع الفصل بين العادة والمقارنة والتوجيه وذكر السبب.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين العادة والمقارنة والأمر والسبب.' },
    },
    {
      id: 'mecca-a2-ar-language-12-habit', type: 'multiple-choice', title: 'عادة متكررة',
      instructions: 'اختر الجملة التي تصف عادة.', question: 'أي جملة تصف فعلًا كان يتكرر؟',
      options: ['كان بلال يبدأ أذان الصباح مبكرًا كل يوم.', 'بدأ بلال مرة واحدة.', 'سيبدأ غدًا.'], correctAnswer: 0,
      explanation: '«كان + فعل مضارع» مع «كل يوم» تصف عادة متكررة في الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «كان + فعل مضارع» وعلامة التكرار.' },
    },
    {
      id: 'mecca-a2-ar-language-12-equality', type: 'fill-blanks', title: 'مقارنة عادلة',
      instructions: 'أكمل أداة المقارنة.', question: 'ما الكلمة التي تكمل العبارة؟',
      fillBlanksText: 'ليس هناك لون بشرة [blank] من آخر.', correctAnswer: 'أفضل',
      explanation: '«أفضل من» صيغة مقارنة؛ هنا تأتي مع النفي للتعبير عن المساواة.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل صيغة المقارنة.' },
    },
    {
      id: 'mecca-a2-ar-language-12-production', type: 'reflection', title: 'قاعدة عادلة',
      instructions: 'اكتب أربع جمل A2 عن قاعدة عادلة في المدرسة أو النادي.',
      question: 'هل تستطيع استعمال عادة وتوجيه ومقارنة وسبب؟', correctAnswer: null,
      explanation: 'استعمل كان + فعل، أمر ... أن، سواء أو أفضل من، ومن الخطأ أو بسبب.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر عادة سابقة.', mode: 'Individual' },
        { question: 'أعطِ توجيهًا.', mode: 'Individual' },
        { question: 'اختم بمقارنة عادلة أو سبب.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesArPart12: Record<number, Exercise[]> = {
  13: [
    {
      id: 'mecca-a2-ar-language-13-form-function', type: 'matching', title: 'المقارنة والسبب والإذن',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل الثالث عشر؟',
      matchingPairs: [
        { left: 'لا فضل لـ... على...', right: 'نفي الأفضلية بين الناس' },
        { left: 'بسبب + اسم', right: 'ذكر السبب' },
        { left: 'سأل ... أن يسمح', right: 'طلب الإذن' },
        { left: 'ليس من العدل + مصدر', right: 'تقييم سلوك بأنه غير عادل' },
      ],
      correctAnswer: {
        'لا فضل لـ... على...': 'نفي الأفضلية بين الناس',
        'بسبب + اسم': 'ذكر السبب',
        'سأل ... أن يسمح': 'طلب الإذن',
        'ليس من العدل + مصدر': 'تقييم سلوك بأنه غير عادل',
      },
      explanation: 'يجمع الفصل بين المقارنة العادلة وذكر السبب وطلب الإذن وتقييم السلوك.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين المقارنة والسبب والإذن والتقييم.' },
    },
    {
      id: 'mecca-a2-ar-language-13-ability', type: 'multiple-choice', title: 'عدم القدرة',
      instructions: 'اختر الجملة التي تعبّر عن عدم القدرة في الماضي.', question: 'أي جملة تستخدم النمط الصحيح؟',
      options: ['لم يقدر أن يبقى في المدينة.', 'لن يقدر أمس أن يبقى.', 'لا يقدر كان أن يبقى.'], correctAnswer: 0,
      explanation: '«لم يقدر أن + فعل» تعبّر عن عدم القدرة في الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «لم يقدر أن».' },
    },
    {
      id: 'mecca-a2-ar-language-13-permission', type: 'fill-blanks', title: 'طلب الإذن',
      instructions: 'أكمل بالفعل المناسب.', question: 'أي فعل يعبّر عن طلب السماح؟',
      fillBlanksText: 'سأل أبا بكر أن [blank] له بالرحيل.', correctAnswer: 'يسمح',
      explanation: '«سأل شخصًا أن يسمح» تعني طلب الإذن.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل فعل السماح.' },
    },
    {
      id: 'mecca-a2-ar-language-13-production', type: 'reflection', title: 'قرار عادل',
      instructions: 'اكتب أربع جمل A2 عن موقف عادل في المدرسة أو الأسرة أو الفريق.',
      question: 'هل تستطيع رفض مقارنة غير عادلة وذكر سبب وطلب إذن وتقييم سلوك؟', correctAnswer: null,
      explanation: 'استعمل لا فضل لـ... على... أو ليس ... أفضل من، بسبب، سأل ... أن يسمح، وليس من العدل.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'ارفض مقارنة غير عادلة.', mode: 'Individual' },
        { question: 'اذكر سببًا.', mode: 'Individual' },
        { question: 'اطلب إذنًا أو قيّم سلوكًا.', mode: 'Pair' },
      ],
    },
  ],
};
