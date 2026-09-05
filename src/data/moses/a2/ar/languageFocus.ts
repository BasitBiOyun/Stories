import type { Exercise } from '../../../../types';

/** أنشطة التركيز اللغوي لموسى A2، مصممة من لغة الفصل العربي نفسه. */
export const mosesA2LanguageFocusExercisesAr: Record<number, Exercise[]> = {
  1: [
    {
      id: 'moses-a2-ar-language-1-kan-description', type: 'matching', title: 'الوصف بـ «كان»',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يستخدم الفصل «كان» لوصف الماضي؟',
      matchingPairs: [
        { left: 'كان موسى رسولًا عظيمًا', right: 'تعريف شخص ووصفه في الماضي' },
        { left: 'كان فرعون ملك مصر', right: 'ذكر منصب في الماضي' },
        { left: 'كان حاكمًا ظالمًا وقاسيًا', right: 'وصف صفات في الماضي' },
        { left: 'كانوا أحفاد يعقوب ويوسف', right: 'ذكر علاقة عائلية في الماضي' },
      ],
      correctAnswer: {
        'كان موسى رسولًا عظيمًا': 'تعريف شخص ووصفه في الماضي',
        'كان فرعون ملك مصر': 'ذكر منصب في الماضي',
        'كان حاكمًا ظالمًا وقاسيًا': 'وصف صفات في الماضي',
        'كانوا أحفاد يعقوب ويوسف': 'ذكر علاقة عائلية في الماضي',
      },
      explanation: 'تساعد «كان/كانوا» على وصف الهوية والمنصب والصفة والعلاقة في الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'حدّد هل العبارة تعرّف شخصًا أم منصبًا أم صفة أم علاقة.' },
    },
    {
      id: 'moses-a2-ar-language-1-belief-negation', type: 'multiple-choice', title: 'الإيمان والنفي',
      instructions: 'اختر الجملة التي تنفي اعتقادًا في الماضي.', question: 'أي جملة تستعمل «لم» لنفي الاعتقاد؟',
      options: ['لم يعتقدوا أن فرعون إله', 'كان فرعون ملك مصر', 'كانوا أحفاد يعقوب ويوسف'], correctAnswer: 0,
      explanation: '«لم + فعل مضارع» تنفي فعلًا في الماضي.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن الجملة التي تبدأ بـ«لم».' },
    },
    {
      id: 'moses-a2-ar-language-1-cause', type: 'fill-blanks', title: 'ذكر السبب',
      instructions: 'أكمل أداة السبب.', question: 'ما العبارة المناسبة؟',
      fillBlanksText: '[blank] خوفه، كان فرعون فظًّا مع بني إسرائيل.', correctAnswer: 'بسبب',
      explanation: 'تأتي «بسبب» قبل اسم لذكر السبب.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج أداة سبب تأتي قبل الاسم «خوفه».' },
    },
    {
      id: 'moses-a2-ar-language-1-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'اكتب أو قل ثلاث جمل قصيرة.', question: 'هل تستطيع وصف شخص بـ«كان»، ونفي فكرة بـ«لم»، وذكر سبب بـ«بسبب»؟',
      correctAnswer: null, explanation: 'انقل التراكيب إلى مثال يومي جديد.', feedback: { correct: 'استخدم التراكيب الثلاثة بدقة.', incorrect: '' },
      discussionPrompts: [
        { question: 'جملة 1 — كان/كانت + اسم أو صفة.', mode: 'Individual' },
        { question: 'جملة 2 — لم + فعل مضارع.', mode: 'Individual' },
        { question: 'جملة 3 — بسبب + اسم.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'moses-a2-ar-language-2-past-sequence', type: 'matching', title: 'أفعال الماضي',
      instructions: 'صِل كل عبارة بدورها في تسلسل الأحداث.', question: 'كيف تتحرك القصة من الحلم إلى رد الفعل؟',
      matchingPairs: [
        { left: 'رأى فرعون حلمًا', right: 'بداية الحدث' },
        { left: 'استيقظ فرعون', right: 'حدث تالٍ' },
        { left: 'استدعى مساعديه والسحرة', right: 'فعل بعد الاستيقاظ' },
        { left: 'سألهم عن تفسير الحلم', right: 'طلب تفسيرًا' },
      ],
      correctAnswer: {
        'رأى فرعون حلمًا': 'بداية الحدث', 'استيقظ فرعون': 'حدث تالٍ',
        'استدعى مساعديه والسحرة': 'فعل بعد الاستيقاظ', 'سألهم عن تفسير الحلم': 'طلب تفسيرًا',
      },
      explanation: 'تسلسل الأفعال الماضية يحرك القصة خطوة بعد خطوة.', feedback: { correct: 'صحيح.', incorrect: 'رتّب ما حدث من الحلم إلى السؤال.' },
    },
    {
      id: 'moses-a2-ar-language-2-future', type: 'fill-blanks', title: 'المستقبل بالسين',
      instructions: 'أكمل الفعل بصيغة المستقبل.', question: 'كيف نعبّر عن حدث سيقع لاحقًا؟',
      fillBlanksText: '[blank]ولد صبيٌّ.', correctAnswer: 'سي',
      explanation: 'تدخل السين على الفعل المضارع للتعبير عن المستقبل: سيولد.', feedback: { correct: 'صحيح.', incorrect: 'أضف حرف المستقبل قبل «ولد».' },
    },
    {
      id: 'moses-a2-ar-language-2-command-when', type: 'sequencing', title: 'الأمر و«عندما»',
      instructions: 'رتّب العبارات.', question: 'كيف ينتقل النص من الأمر إلى تنفيذه؟',
      sequencingItems: [
        { id: '1', text: 'أصدر فرعون أمرًا لجنوده.' },
        { id: '2', text: 'سمع الجنود الأمر.' },
        { id: '3', text: 'عندما وجدوا مولودًا ذكرًا نفّذوا الأمر.' },
        { id: '4', text: 'تغيّرت حياة بني إسرائيل بسبب ذلك.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'تربط «عندما» موقفًا بحدث وقع فيه.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ بالأمر ثم التنفيذ.' },
    },
    {
      id: 'moses-a2-ar-language-2-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'أنشئ مثالًا آمنًا من الحياة اليومية.', question: 'هل تستطيع استعمال مستقبل بسيط، وأمر آمن، وجملة تبدأ بـ«عندما»؟',
      correctAnswer: null, explanation: 'الهدف نقل التراكيب إلى سياق جديد.', feedback: { correct: 'استخدم التراكيب الثلاثة.', incorrect: '' },
      discussionPrompts: [
        { question: 'توقع بسيط بـ«سـ + فعل مضارع».', mode: 'Individual' },
        { question: 'أمر آمن مثل «افتح الكتاب».', mode: 'Pair' },
        { question: 'جملة «عندما + ماضٍ».', mode: 'Individual' },
      ],
    },
  ],
};
