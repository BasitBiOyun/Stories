import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'mecca-a2-ar-language-3-form-function', type: 'matching', title: 'التغيّر والمقارنة والمكان',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة كل تركيب في الفصل الثالث؟',
      matchingPairs: [
        { left: 'يزداد + اسمًا', right: 'وصف تغيّر تدريجي' },
        { left: 'الأقوى / من أغنى', right: 'المقارنة بصيغة التفضيل' },
        { left: 'من + مكان', right: 'ذكر الأصل أو المصدر' },
        { left: 'أراد أن + فعل', right: 'التعبير عن رغبة أو قصد' },
      ],
      correctAnswer: {
        'يزداد + اسمًا': 'وصف تغيّر تدريجي',
        'الأقوى / من أغنى': 'المقارنة بصيغة التفضيل',
        'من + مكان': 'ذكر الأصل أو المصدر',
        'أراد أن + فعل': 'التعبير عن رغبة أو قصد',
      },
      explanation: 'يصف الفصل تغيّر الحال والمقارنة وأصل الناس والرغبة في الفعل.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين التغيّر والمقارنة والأصل والرغبة.' },
    },
    {
      id: 'mecca-a2-ar-language-3-comparison', type: 'multiple-choice', title: 'صيغة التفضيل',
      instructions: 'اختر الجملة التي تستخدم صيغة التفضيل.', question: 'أي جملة تقارن أمية بغيره؟',
      options: ['كان أمية من أغنى رؤساء مكة.', 'كان أمية غنيًّا.', 'كان أمية في مكة.'], correctAnswer: 0,
      explanation: '«من أغنى» تضع الشخص داخل مجموعة من الأعلى في الصفة.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن صيغة «من + أفعل التفضيل».' },
    },
    {
      id: 'mecca-a2-ar-language-3-time', type: 'fill-blanks', title: 'ربط الأحداث بالزمن',
      instructions: 'أكمل بأداة الزمن.', question: 'أي كلمة تربط بداية الدعوة بتغيّر موقف أمية؟',
      fillBlanksText: '[blank] بدأ النبي محمد صلى الله عليه وسلم يدعو إلى الإسلام، أصبح أمية من أشد أعدائه.', correctAnswer: 'عندما',
      explanation: '«عندما» تربط حدثًا بالوقت الذي وقع فيه حدث آخر.',
      feedback: { correct: 'صحيح.', incorrect: 'نحتاج إلى أداة زمن.' },
    },
    {
      id: 'mecca-a2-ar-language-3-production', type: 'reflection', title: 'مدينة تتغيّر',
      instructions: 'اكتب أربع جمل A2 عن مدينة خيالية، واستعمل ثلاثة تراكيب من الفصل.',
      question: 'هل تستطيع وصف تغيّر ومقارنة ومكان ثم رغبة؟', correctAnswer: null,
      explanation: 'استعمل يزداد، صيغة تفضيل، من + مكان، عندما، أو أراد أن.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف تغيّرًا تدريجيًا.', mode: 'Individual' },
        { question: 'أضف مقارنة.', mode: 'Individual' },
        { question: 'اربط حدثًا برغبة باستخدام «عندما» و«أراد أن».', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesArPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'mecca-a2-ar-language-4-form-function', type: 'matching', title: 'الروتين والواجب والغرض',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'كيف يصف الفصل حياة بلال اليومية؟',
      matchingPairs: [
        { left: 'كان + فعل مضارع', right: 'عمل متكرر أو مستمر في الماضي' },
        { left: 'غالبًا / كل يوم', right: 'التكرار' },
        { left: 'كان عليه أن + فعل', right: 'واجب أو ضرورة في الماضي' },
        { left: 'لِـ + فعل مضارع', right: 'الغرض من الفعل' },
      ],
      correctAnswer: {
        'كان + فعل مضارع': 'عمل متكرر أو مستمر في الماضي',
        'غالبًا / كل يوم': 'التكرار',
        'كان عليه أن + فعل': 'واجب أو ضرورة في الماضي',
        'لِـ + فعل مضارع': 'الغرض من الفعل',
      },
      explanation: 'يجمع الفصل بين الروتين والتكرار والواجب والغرض.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين العمل المتكرر والواجب والغرض.' },
    },
    {
      id: 'mecca-a2-ar-language-4-frequency', type: 'multiple-choice', title: 'التكرار في الماضي',
      instructions: 'اختر الجملة التي تصف عادة متكررة.', question: 'أي جملة تصف روتينًا في الماضي؟',
      options: ['كان بلال يرعى الجمال كل يوم.', 'رعى بلال جملًا مرة واحدة.', 'سيرعى بلال الجمال غدًا.'], correctAnswer: 0,
      explanation: '«كان + فعل مضارع» مع «كل يوم» يصف عادة متكررة في الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «كان + فعل مضارع» وعلامة التكرار.' },
    },
    {
      id: 'mecca-a2-ar-language-4-obligation', type: 'fill-blanks', title: 'واجب في الماضي',
      instructions: 'أكمل التركيب.', question: 'كيف نعبّر عن واجب كان موجودًا في الماضي؟',
      fillBlanksText: 'كان على بلال [blank] يكون صبورًا ويعمل بجد.', correctAnswer: 'أن',
      explanation: '«كان على + شخص + أن + فعل» تعبّر عن واجب أو ضرورة في الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'أكمل تركيب «كان على ... أن ...».' },
    },
    {
      id: 'mecca-a2-ar-language-4-production', type: 'reflection', title: 'روتين يومي',
      instructions: 'اكتب أربع جمل A2 عن روتين صعب لشخص خيالي، من دون إعادة قصة بلال.',
      question: 'هل تستطيع وصف التكرار والواجب والغرض؟', correctAnswer: null,
      explanation: 'استعمل غالبًا أو كل يوم، كان + فعل مضارع، كان عليه أن، ولِـ + فعل.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر عادة متكررة.', mode: 'Individual' },
        { question: 'اذكر واجبًا.', mode: 'Individual' },
        { question: 'اشرح الغرض من فعل واحد.', mode: 'Pair' },
      ],
    },
  ],
};

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

export const meccaA2LanguageFocusExercisesArPart6: Record<number, Exercise[]> = {
  7: [
    {
      id: 'mecca-a2-ar-language-7-form-function', type: 'matching', title: 'الإخبار والرغبة والترتيب',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'كيف ينقل الفصل معلومات وقرارات؟',
      matchingPairs: [
        { left: 'أخبر + شخصًا + عن + اسم', right: 'تقديم موضوع أو معلومة' },
        { left: 'يريد أن + فعل', right: 'التعبير عن رغبة أو نية' },
        { left: 'بعد أن + فعل ماضٍ', right: 'ترتيب حدث بعد حدث' },
        { left: 'في النهاية', right: 'تقديم النتيجة الأخيرة' },
      ],
      correctAnswer: {
        'أخبر + شخصًا + عن + اسم': 'تقديم موضوع أو معلومة',
        'يريد أن + فعل': 'التعبير عن رغبة أو نية',
        'بعد أن + فعل ماضٍ': 'ترتيب حدث بعد حدث',
        'في النهاية': 'تقديم النتيجة الأخيرة',
      },
      explanation: 'تربط هذه التراكيب بين المعلومة والرغبة وتسلسل الأحداث والنتيجة.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الإخبار والرغبة والترتيب والنتيجة.' },
    },
    {
      id: 'mecca-a2-ar-language-7-future', type: 'multiple-choice', title: 'توقّع المستقبل',
      instructions: 'اختر الجملة التي تنقل معرفة عن مستقبل متوقع.', question: 'أي جملة تناسب هذا المعنى؟',
      options: ['عرف أن الحياة ستكون صعبة.', 'عرف أن الحياة كانت صعبة أمس.', 'الحياة صعبة فقط.'], correctAnswer: 0,
      explanation: '«عرف أن ... ستكون ...» تنقل معرفة ماضية عن حالة متوقعة لاحقًا.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «عرف أن» و«ستكون».' },
    },
    {
      id: 'mecca-a2-ar-language-7-ability', type: 'fill-blanks', title: 'عدم القدرة',
      instructions: 'أكمل التركيب.', question: 'كيف نعبّر عن عدم القدرة في الماضي؟',
      fillBlanksText: 'لم [blank] أن ينام طوال الليل.', correctAnswer: 'يستطع',
      explanation: '«لم يستطع أن + فعل» تعبّر عن عدم القدرة في الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'أكمل تركيب «لم يستطع أن».' },
    },
    {
      id: 'mecca-a2-ar-language-7-production', type: 'reflection', title: 'أخبر وتوقّع وقرّر',
      instructions: 'اكتب أربع جمل A2 عن شخص يسمع معلومة ويعبّر عن رغبة ويتوقع صعوبة ثم يصل إلى نتيجة.',
      question: 'هل تستطيع استعمال لغة الفصل في موقف قرار جديد؟', correctAnswer: null,
      explanation: 'استعمل ثلاثة تراكيب على الأقل: أخبر عن/أن، يريد أن، بعد أن، عرف أن ... ستكون، في النهاية.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'انقل معلومة.', mode: 'Individual' },
        { question: 'اذكر رغبة أو توقعًا.', mode: 'Individual' },
        { question: 'اختم بنتيجة واضحة.', mode: 'Pair' },
      ],
    },
  ],
};
