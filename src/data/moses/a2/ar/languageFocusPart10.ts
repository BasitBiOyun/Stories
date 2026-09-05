import type { Exercise } from '../../../../types';

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
