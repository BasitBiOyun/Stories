import { Exercise } from '../../../../types';

/**
 * مواد آدم A2 العربية بعد القراءة.
 * جميع الأسئلة مشتقة من النص العربي الأصلي فقط، ولا تضيف معلومات دينية أو تاريخية من خارج الكتاب.
 */

export const adamA2KnowledgeCheckExercisesAr: Exercise[] = [
  {
    id: 'ar-kc-1', type: 'multiple-choice', title: 'بداية القصة',
    instructions: 'اختر الإجابة الموجودة في النص.',
    question: 'ممَّ خلق الله آدم (عليه السلام)؟',
    options: ['من التراب', 'من النار', 'من الماء'], correctAnswer: 0,
    explanation: 'يذكر الفصل الأول أن الله خلق آدم من التراب.',
    feedback: { correct: 'صحيح. هذه معلومة أساسية في بداية القصة.', incorrect: 'ارجع إلى الفقرة الأولى وابحث عن كلمة التراب.' }
  },
  {
    id: 'ar-kc-2', type: 'true-false', title: 'العلم والتفكير',
    instructions: 'حدد هل العبارة توافق النص.',
    question: 'علّم الله آدم العلم والتفكير.', correctAnswer: true,
    explanation: 'يذكر الفصل الثاني أن آدم كان يتعلم ويفهم لأن الله علّمه العلم والتفكير.',
    feedback: { correct: 'صحيح. العلم فكرة مهمة في هذا الفصل.', incorrect: 'أعد قراءة الفقرة الأولى من فصل العلم والاحترام.' }
  },
  {
    id: 'ar-kc-3', type: 'multiple-choice', title: 'قول إبليس',
    instructions: 'اختر السبب الذي ذكره إبليس في النص.',
    question: 'لماذا قال إبليس إنه أفضل من آدم؟',
    options: ['لأنه خُلق من النار', 'لأنه عاش على الأرض أولا', 'لأنه كان راعيا'], correctAnswer: 0,
    explanation: 'قارن إبليس بين النار والطين وقال إنه أفضل بسبب أصله.',
    feedback: { correct: 'صحيح. هذا هو السبب الذي قاله إبليس.', incorrect: 'ارجع إلى أول فصل كبرياء إبليس واقرأ كلامه.' }
  },
  {
    id: 'ar-kc-4', type: 'true-false', title: 'التحذير في الجنة',
    instructions: 'حدد هل العبارة توافق النص.',
    question: 'قال الله لآدم وحواء ألا يقتربا من شجرة واحدة.', correctAnswer: true,
    explanation: 'ينتهي الفصل الرابع بالتحذير من الاقتراب من شجرة واحدة.',
    feedback: { correct: 'صحيح. كان هذا هو التحذير المذكور في الفصل.', incorrect: 'اقرأ آخر جملة من فصل الجنة والتحذير.' }
  },
  {
    id: 'ar-kc-5', type: 'multiple-choice', title: 'بعد الخطأ',
    instructions: 'اختر ما حدث في النص.',
    question: 'ماذا فعل آدم وحواء بعد الخطأ؟',
    options: ['حزنا وطلبا المغفرة', 'قالا إنهما لم يخطئا', 'تركا الجنة وحدهما'], correctAnswer: 0,
    explanation: 'يذكر النص أنهما حزنا وطلبا المغفرة وتعلما من الخطأ.',
    feedback: { correct: 'صحيح. الندم والتعلم من الخطأ واضحان في الفصل.', incorrect: 'ارجع إلى الفقرة التي تأتي بعد الأكل من الشجرة.' }
  },
  {
    id: 'ar-kc-6', type: 'multiple-choice', title: 'الحياة على الأرض',
    instructions: 'اختر النشاط المذكور في النص.',
    question: 'أي عمل ذُكر ضمن مسؤوليات الحياة على الأرض؟',
    options: ['زراعة الزروع وتربية الحيوانات', 'البحث عن الذهب', 'بناء سفينة كبيرة'], correctAnswer: 0,
    explanation: 'يذكر الفصل زراعة الزروع وتربية الحيوانات وبناء البيوت والمحافظة على الطبيعة ومساعدة الضعفاء.',
    feedback: { correct: 'صحيح. هذا المثال موجود مباشرة في الفصل السادس.', incorrect: 'ابحث في الفصل السادس عن قائمة الأعمال على الأرض.' }
  },
  {
    id: 'ar-kc-7', type: 'multiple-choice', title: 'هابيل وقابيل',
    instructions: 'اختر الزوج الصحيح.',
    question: 'ما العمل الصحيح لكل أخ؟',
    options: ['هابيل راعٍ وقابيل مزارع', 'هابيل مزارع وقابيل راعٍ', 'كلاهما مزارع'], correctAnswer: 0,
    explanation: 'يذكر الفصل الثامن أن هابيل أصبح راعيا وقابيل أصبح مزارعا.',
    feedback: { correct: 'صحيح. تذكرت عمل الأخوين.', incorrect: 'ارجع إلى بداية فصل قصة هابيل وقابيل.' }
  },
  {
    id: 'ar-kc-8', type: 'true-false', title: 'الغراب',
    instructions: 'حدد هل العبارة توافق النص.',
    question: 'بدأ الغراب يحفر التراب، ففهم قابيل كيف يدفن جثة أخيه.', correctAnswer: true,
    explanation: 'يصف الفصل التاسع الغراب وهو يحفر الأرض، ثم يفهم قابيل ما يفعل.',
    feedback: { correct: 'صحيح. تعلّم قابيل من فعل الغراب.', incorrect: 'اقرأ الجزء الأخير من فصل الجريمة الأولى.' }
  }
];

export const adamA2FinalReviewExercisesAr: Exercise[] = [
  {
    id: 'ar-final-1', type: 'sequencing', title: 'تابع أحداث القصة',
    instructions: 'رتّب المراحل بحسب ترتيبها في الكتاب.', question: 'ضع المراحل في ترتيب القصة.',
    sequencingItems: [
      { id: '1', text: 'خُلق آدم من التراب وتعلّم العلم والتفكير' },
      { id: '2', text: 'رفض إبليس احترام آدم بسبب كبريائه' },
      { id: '3', text: 'عاش آدم وحواء في الجنة وتلقيا تحذيرا' },
      { id: '4', text: 'أخطأ آدم وحواء ثم ندما وعاشا على الأرض' },
      { id: '5', text: 'تروي القصة أحداث هابيل وقابيل ثم حياة آدم في آخر القصة' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'هذه المراحل تتبع ترتيب الفصول من بداية خلق آدم إلى الأحداث العائلية في آخر القصة.',
    feedback: { correct: 'جيد. أعدت بناء تسلسل القصة.', incorrect: 'استخدم عناوين الفصول ورتّب مرحلة واحدة في كل مرة.' }
  },
  {
    id: 'ar-final-2', type: 'matching', title: 'صل الشخص بالمعلومة',
    instructions: 'صل كل اسم بمعلومة وردت في النص.', question: 'من يرتبط بكل معلومة؟',
    matchingPairs: [
      { left: 'آدم', right: 'تعلّم العلم وأصبح أول رسول' },
      { left: 'إبليس', right: 'افتخر بأنه خُلق من النار' },
      { left: 'هابيل', right: 'كان راعيا وقدّم أفضل خروف عنده' },
      { left: 'قابيل', right: 'كان مزارعا وكان حسودا غالبا' }
    ],
    correctAnswer: {
      'آدم': 'تعلّم العلم وأصبح أول رسول',
      'إبليس': 'افتخر بأنه خُلق من النار',
      'هابيل': 'كان راعيا وقدّم أفضل خروف عنده',
      'قابيل': 'كان مزارعا وكان حسودا غالبا'
    },
    explanation: 'كل معلومة مذكورة في الفصول الخاصة بهذه الشخصيات.',
    feedback: { correct: 'صحيح. كل شخصية مرتبطة بمعلومة من النص.', incorrect: 'ارجع إلى الفصول وابحث عن العمل أو الصفة المذكورة لكل شخص.' }
  },
  {
    id: 'ar-final-3', type: 'reflection', title: 'فكّر في القصة',
    instructions: 'ابدأ بمعلومة من النص، ثم أضف فكرتك القصيرة.',
    question: 'أي فكرة من القصة يمكن أن تساعدك في حياتك اليومية؟', correctAnswer: null,
    explanation: 'الإجابة التأملية تبدأ بفكرة موجودة في القصة ثم تشرح علاقتها بحياة المتعلم.',
    feedback: { correct: 'استخدم تفصيلا واحدا من القصة لدعم فكرتك.', incorrect: 'لا توجد إجابة خاطئة واحدة هنا. اختر فكرة موجودة في النص واشرح علاقتها بحياتك.' },
    discussionPrompts: [
      { question: 'يقول النص إن العلم النافع يساعد الإنسان على فعل الخير. كيف يمكن أن يساعدك العلم؟', mode: 'Individual' },
      { question: 'قدّم هابيل أفضل ما عنده. ماذا يعني بذل أفضل جهد بالنسبة لك؟', mode: 'Pair' },
      { question: 'تذكر القصة الحسد والغضب. ما تصرف هادئ يمكن أن يساعد عندما يزداد الغضب؟', mode: 'Class' }
    ]
  },
  {
    id: 'ar-final-4', type: 'quiz-game', title: 'تحدي مراجعة قصة آدم',
    instructions: 'أجب عن ثمانية أسئلة. إذا لم تتذكر، ارجع إلى الفصل المناسب ثم حاول مرة أخرى.',
    question: 'هل تستطيع تذكّر أهم المعلومات في القصة؟', correctAnswer: null,
    explanation: 'هذه المراجعة تساعد على تثبيت المعلومات قبل التحدي النهائي.',
    feedback: { correct: 'جيد. تذكرت المعلومة من القصة.', incorrect: 'استخدم الفصل للمساعدة: ابحث عن الجملة ثم حاول مرة أخرى.' },
    hints: ['استخدم عنوان الفصل لتحديد مكان المعلومة.', 'ابحث عن الجملة التي تجيب مباشرة عن السؤال.', 'الإجابة الخاطئة تعني: اقرأ الدليل ثم حاول ثانية.'],
    quizQuestions: [
      { question: 'ممَّ خُلق آدم؟', options: [{ text: 'من التراب', isCorrect: true }, { text: 'من النار', isCorrect: false }, { text: 'من الماء', isCorrect: false }], hint: 'ارجع إلى الفصل الأول.' },
      { question: 'ماذا علّم الله آدم؟', options: [{ text: 'العلم والتفكير', isCorrect: true }, { text: 'الزراعة فقط', isCorrect: false }, { text: 'صناعة السفن', isCorrect: false }], hint: 'انظر إلى فصل العلم والاحترام.' },
      { question: 'ما أصل إبليس الذي افتخر به؟', options: [{ text: 'النار', isCorrect: true }, { text: 'الطين', isCorrect: false }, { text: 'التراب', isCorrect: false }], hint: 'اقرأ كلام إبليس في الفصل الثالث.' },
      { question: 'ما التحذير في الجنة؟', options: [{ text: 'لا تقربا شجرة واحدة', isCorrect: true }, { text: 'لا تتحدثا', isCorrect: false }, { text: 'لا تناما', isCorrect: false }], hint: 'ابحث في نهاية الفصل الرابع.' },
      { question: 'ماذا فعل آدم وحواء بعد الخطأ؟', options: [{ text: 'حزنا وطلبا المغفرة', isCorrect: true }, { text: 'قالا إنهما على حق', isCorrect: false }, { text: 'نسيا الأمر مباشرة', isCorrect: false }], hint: 'اقرأ فقرة الندم في الفصل الخامس.' },
      { question: 'من كان راعيا؟', options: [{ text: 'هابيل', isCorrect: true }, { text: 'قابيل', isCorrect: false }, { text: 'إبليس', isCorrect: false }], hint: 'ارجع إلى الفصل الثامن.' },
      { question: 'ماذا فعل الغراب قرب قابيل؟', options: [{ text: 'بدأ يحفر التراب', isCorrect: true }, { text: 'حمل المحصول', isCorrect: false }, { text: 'أحضر خروفا', isCorrect: false }], hint: 'اقرأ نهاية الفصل التاسع.' },
      { question: 'ماذا علّم آدم الناس بعد أن جعله الله رسولا؟', options: [{ text: 'الصدق وفعل الخير وذكر الله', isCorrect: true }, { text: 'ترك العمل', isCorrect: false }, { text: 'اتباع إبليس', isCorrect: false }], hint: 'ارجع إلى فصل أول رسول.' }
    ]
  }
];

export const adamA2FinalChallengeExercisesAr: Exercise[] = [
  { id: 'ar-fc-1', type: 'multiple-choice', title: 'التذكر النهائي 1', instructions: 'اختر الإجابة المذكورة في القصة.', question: 'ممَّ خلق الله آدم؟', options: ['من التراب', 'من النار', 'من النور'], correctAnswer: 0, explanation: 'يبدأ الكتاب بخلق آدم من التراب.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى الفصل الأول.' } },
  { id: 'ar-fc-2', type: 'multiple-choice', title: 'التذكر النهائي 2', instructions: 'اختر الإجابة المذكورة في القصة.', question: 'ما الذي ساعد آدم على التعلم والفهم؟', options: ['العلم الذي علّمه الله', 'القوة الجسدية', 'العيش زمنا أطول'], correctAnswer: 0, explanation: 'يربط النص التعلم والفهم بالعلم والتفكير.', feedback: { correct: 'صحيح. العلم فكرة مركزية.', incorrect: 'ارجع إلى الفصل الثاني.' } },
  { id: 'ar-fc-3', type: 'true-false', title: 'التذكر النهائي 3', instructions: 'حدد هل العبارة توافق النص.', question: 'اعتقد إبليس أن أصله من النار يجعله أفضل من آدم.', correctAnswer: true, explanation: 'قارن إبليس النار بالطين وقال إنه أفضل.', feedback: { correct: 'صحيح.', incorrect: 'اقرأ كلام إبليس في الفصل الثالث.' } },
  { id: 'ar-fc-4', type: 'multiple-choice', title: 'التذكر النهائي 4', instructions: 'اختر الإجابة المذكورة في القصة.', question: 'ماذا قال الله لآدم وحواء عن الشجرة؟', options: ['لا تقربا هذه الشجرة', 'لا تتركا مكانكما', 'لا تتحدثا مع الملائكة'], correctAnswer: 0, explanation: 'هذا هو التحذير المذكور في نهاية الفصل الرابع.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى نهاية الفصل الرابع.' } },
  { id: 'ar-fc-5', type: 'multiple-choice', title: 'التذكر النهائي 5', instructions: 'اختر ما قاله إبليس في القصة.', question: 'بماذا حاول إبليس إقناع آدم وحواء؟', options: ['إذا أكلا من الشجرة فلن يموتا أبدا', 'إذا أكلا منها سيصبحان مزارعين', 'إذا أكلا منها سيعودان إلى الأرض'], correctAnswer: 0, explanation: 'يصف الفصل الخامس هذا الكلام بأنه كذب.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى أول الفصل الخامس.' } },
  { id: 'ar-fc-6', type: 'true-false', title: 'التذكر النهائي 6', instructions: 'حدد هل العبارة توافق النص.', question: 'حزن آدم وحواء وطلبا المغفرة وتعلما من الخطأ.', correctAnswer: true, explanation: 'هذه الأفعال مذكورة مباشرة بعد الخطأ.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة فقرة الندم.' } },
  { id: 'ar-fc-7', type: 'multiple-choice', title: 'التذكر النهائي 7', instructions: 'اختر مثالا ورد في النص.', question: 'أي عمل ورد في فصل الحياة على الأرض؟', options: ['زراعة الزروع وتربية الحيوانات', 'البحث عن كنز', 'بناء قصر في الجنة'], correctAnswer: 0, explanation: 'يذكر الفصل السادس الزراعة وتربية الحيوانات ضمن أعمال الحياة على الأرض.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى الفصل السادس.' } },
  { id: 'ar-fc-8', type: 'multiple-choice', title: 'التذكر النهائي 8', instructions: 'اختر العبارة الصحيحة.', question: 'أي عبارة عن هابيل وقابيل صحيحة؟', options: ['هابيل راعٍ وقابيل مزارع', 'هابيل مزارع وقابيل راعٍ', 'كلاهما راعيان'], correctAnswer: 0, explanation: 'هذه الأعمال مذكورة في الفصل الثامن.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى بداية الفصل الثامن.' } },
  { id: 'ar-fc-9', type: 'multiple-choice', title: 'التذكر النهائي 9', instructions: 'اختر ما حدث في القصة.', question: 'كيف ساعد فعل الغراب قابيل؟', options: ['حفر التراب ففهم قابيل كيف يدفن أخاه', 'حمل المحصول بعيدا', 'أحضر شخصا آخر'], correctAnswer: 0, explanation: 'حفر الغراب الأرض، ففهم قابيل ما يفعل.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى نهاية الفصل التاسع.' } },
  { id: 'ar-fc-10', type: 'multiple-choice', title: 'التذكر النهائي 10', instructions: 'اختر الفكرة المذكورة في نهاية القصة.', question: 'إلى ماذا تدعو رسالة آدم في الفصل الأخير؟', options: ['محبة الله واحترامه وحسن الخلق واللطف مع الآخرين', 'جمع المال أكثر من الآخرين', 'الابتعاد عن مساعدة الناس'], correctAnswer: 0, explanation: 'يذكر الفصل الأخير محبة الله واحترامه وحسن الخلق واللطف مع الآخرين.', feedback: { correct: 'صحيح. هذه من أفكار نهاية القصة.', incorrect: 'ارجع إلى الفقرة الثانية من الفصل العاشر.' } }
];
