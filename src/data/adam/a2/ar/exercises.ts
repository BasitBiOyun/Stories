import { Exercise } from '../../../../types';

// المصدر الوحيد لجميع أنشطة آدم A2 العربية.
// نص القصة موجود في pages.ts ولا يُعاد تحريره هنا.

export const adamA2QuickChallengesAr: Record<number, Exercise> = {
  1: {
    id: 'adam-a2-ar-quick-1', type: 'multiple-choice', title: 'أماكن مختلفة وألوان مختلفة',
    instructions: 'اختر الإجابة التي يدعمها الفصل الأول.',
    question: 'لماذا يقول الفصل إن للناس ألوان بشرة مختلفة؟',
    options: ['جاء التراب من أماكن مختلفة من الأرض', 'اختارت الملائكة ألوانا مختلفة', 'تغيرت ألوان الناس بعد ذلك'], correctAnswer: 0,
    explanation: 'يربط الفصل التراب من أماكن مختلفة من الأرض باختلاف ألوان بشرة الناس.',
    feedback: { correct: 'صحيح. ربطت السبب بالنتيجة في الفصل.', incorrect: 'أعد قراءة الجملتين عن التراب من أماكن مختلفة وما يأتي بعدهما.' }
  },
  2: {
    id: 'adam-a2-ar-quick-2', type: 'fill-blanks', title: 'إظهار الاحترام',
    instructions: 'أكمل الجملة بكلمة واحدة من الفصل الثاني.',
    question: 'أكمل ما أمر الله الملائكة أن تفعل.', fillBlanksText: 'أظهروا [blank] لآدم.', correctAnswer: 'الاحترام',
    explanation: 'أمر الله الملائكة أن يظهروا الاحترام لآدم.',
    feedback: { correct: 'صحيح.', incorrect: 'ابحث عن الأمر الأول الموجه إلى الملائكة في الفصل الثاني.' }
  },
  3: {
    id: 'adam-a2-ar-quick-3', type: 'matching', title: 'النار والتراب',
    instructions: 'صل كل شخص بالمادة المذكورة في الفصل الثالث.',
    question: 'ما الأصل الذي يذكره الفصل لآدم وإبليس؟',
    matchingPairs: [{ left: 'إبليس', right: 'النار' }, { left: 'آدم', right: 'التراب' }],
    correctAnswer: { 'إبليس': 'النار', 'آدم': 'التراب' },
    explanation: 'قال إبليس إنه خُلق من النار وإن آدم خُلق من التراب.',
    feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة جواب إبليس وصل كل شخص بالمادة المذكورة.' }
  },
  4: {
    id: 'adam-a2-ar-quick-4', type: 'multiple-choice', title: 'آدم وحواء',
    instructions: 'اختر السبب المذكور في الفصل الرابع.',
    question: 'لماذا أعطى الله آدم زوجة؟', options: ['لأن آدم شعر بالوحدة', 'لأن آدم أراد مغادرة الجنة', 'لأن الملائكة طلبت شخصا جديدا'], correctAnswer: 0,
    explanation: 'شعر آدم بالوحدة في الجنة، فأعطاه الله زوجته حواء.',
    feedback: { correct: 'صحيح.', incorrect: 'اقرأ الجملة التي تسبق ذكر حواء مباشرة ولاحظ شعور آدم.' }
  },
  5: {
    id: 'adam-a2-ar-quick-5', type: 'multiple-choice', title: 'كذبة إبليس',
    instructions: 'اختر الوعد الذي قاله إبليس في الفصل الخامس.',
    question: 'ماذا قال إبليس لآدم وحواء عن الشجرة؟',
    options: ['إنهما لن يموتا أبدا إذا أكلا منها', 'إنهما سيجوعان إذا أكلا منها', 'إنهما سينسيان كل شيء إذا أكلا منها'], correctAnswer: 0,
    explanation: 'قال إبليس لهما إنهما لن يموتا أبدا إذا أكلا من الشجرة.',
    feedback: { correct: 'صحيح.', incorrect: 'ابحث عن الجملة التي تبدأ بمعنى «إذا أكلتما...» واقرأ النتيجة التي وعد بها.' }
  },
  6: {
    id: 'adam-a2-ar-quick-6', type: 'tap-reveal', title: 'حياة جديدة على الأرض',
    instructions: 'أجب من الذاكرة ثم اكشف جواب الفصل.',
    question: 'ماذا حدث بعد أن غفر الله لآدم وحواء؟',
    tapRevealItems: [{ question: 'ماذا حدث بعد أن غفر الله لآدم وحواء؟', answer: 'بدآ الحياة على الأرض.' }],
    correctAnswer: 'بدآ الحياة على الأرض.',
    explanation: 'بعد أن غفر الله لهما بدأ آدم وحواء حياتهما على الأرض.',
    feedback: { correct: 'صحيح.', incorrect: 'اقرأ أول جملة في الفصل السادس واتبع الترتيب: المغفرة ثم ماذا؟' }
  },
  7: {
    id: 'adam-a2-ar-quick-7', type: 'fill-blanks', title: 'تعاليم آدم',
    instructions: 'أكمل أول صفة في قائمة تعاليم آدم.',
    question: 'أكمل الجملة من الفصل السابع.', fillBlanksText: 'بدأ يعلم الناس أن يكونوا [blank]، ويفعلوا الخير، ويمنعوا الشر، ويذكروا الله دائما.', correctAnswer: 'صادقين',
    explanation: 'علّم آدم الناس أن يكونوا صادقين ويفعلوا الخير ويمنعوا الشر ويذكروا الله.',
    feedback: { correct: 'صحيح.', incorrect: 'اعثر على الجملة التي تبدأ بمعنى «بدأ يعلم الناس...» وانظر إلى الصفة الأولى.' }
  },
  8: {
    id: 'adam-a2-ar-quick-8', type: 'matching', title: 'القربانان',
    instructions: 'صل كل أخ بالقُربان المذكور في الفصل الثامن.',
    question: 'ماذا قدّم كل أخ؟',
    matchingPairs: [{ left: 'هابيل', right: 'أفضل وأصح خروف عنده' }, { left: 'قابيل', right: 'حفنة من محصوله' }],
    correctAnswer: { 'هابيل': 'أفضل وأصح خروف عنده', 'قابيل': 'حفنة من محصوله' },
    explanation: 'يقارن الفصل بين جودة القربانين.',
    feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة الجملتين اللتين تصفان ما قدمه هابيل وقابيل.' }
  },
  9: {
    id: 'adam-a2-ar-quick-9', type: 'true-false', title: 'رد هابيل',
    instructions: 'حدد هل العبارة توافق الفصل التاسع.',
    question: 'قال هابيل إنه سيرد على قابيل ويؤذيه.', correctAnswer: false,
    explanation: 'قال هابيل إنه لن يرد على قابيل ولن يؤذيه.',
    feedback: { correct: 'صحيح.', incorrect: 'اقرأ رد هابيل وركز على معنى «لن أرد عليك ولن أؤذيك».' }
  },
  10: {
    id: 'adam-a2-ar-quick-10', type: 'multiple-choice', title: 'استمرار الرسالة',
    instructions: 'اختر الإجابة المذكورة في الفصل العاشر.',
    question: 'من نشر رسالة آدم في العالم بعده؟', options: ['أولاده وأحفاده', 'الملائكة فقط', 'المزارعون فقط'], correctAnswer: 0,
    explanation: 'يقول الفصل إن أولاد آدم وأحفاده نشروا رسالته في كل العالم.',
    feedback: { correct: 'صحيح.', incorrect: 'ابحث عن الجملة التي تذكر أولاد آدم وأحفاده قرب نهاية القصة.' }
  }
};

export const adamA2KnowledgeCheckExercisesAr: Exercise[] = [
  {
    id: 'adam-a2-ar-kc-1', type: 'multiple-choice', title: 'الخلق', instructions: 'اختر المعلومة المذكورة في الفصل الأول.',
    question: 'ممَّ خلق الله آدم؟', options: ['من التراب', 'من النار', 'من الماء'], correctAnswer: 0,
    explanation: 'يذكر الفصل الأول أن الله خلق آدم من التراب.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى الفقرة الأولى وابحث عن المادة التي خُلق منها آدم.' }
  },
  {
    id: 'adam-a2-ar-kc-2', type: 'true-false', title: 'العلم والتفكير', instructions: 'حدد هل العبارة توافق الفصل الثاني.',
    question: 'علّم الله آدم العلم والتفكير.', correctAnswer: true,
    explanation: 'يربط الفصل تعلم آدم وفهمه بالعلم والتفكير.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة الجملة التي تشرح لماذا كان آدم يتعلم ويفهم.' }
  },
  {
    id: 'adam-a2-ar-kc-3', type: 'multiple-choice', title: 'ادعاء إبليس', instructions: 'اختر السبب الذي ذكره إبليس في الفصل الثالث.',
    question: 'لماذا قال إبليس إنه أفضل من آدم؟', options: ['لأنه خُلق من النار', 'لأنه عرف أسماء أكثر', 'لأنه عاش على الأرض أولا'], correctAnswer: 0,
    explanation: 'استخدم إبليس أصله من النار ليدعي أنه أفضل من آدم الذي خُلق من التراب.', feedback: { correct: 'صحيح.', incorrect: 'اقرأ مقارنة إبليس بين النار والتراب.' }
  },
  {
    id: 'adam-a2-ar-kc-4', type: 'true-false', title: 'تحذير الجنة', instructions: 'حدد هل العبارة توافق الفصل الرابع.',
    question: 'قيل لآدم وحواء ألا يقتربا من شجرة واحدة.', correctAnswer: true,
    explanation: 'يذكر الفصل تحذيرا محددا بشأن شجرة واحدة.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة التحذير الأخير في الفصل الرابع.' }
  },
  {
    id: 'adam-a2-ar-kc-5', type: 'multiple-choice', title: 'بعد الخطأ', instructions: 'اختر ما فعله آدم وحواء بحسب الفصل.',
    question: 'ماذا فعلا بعد أن أدركا خطأهما؟', options: ['حزنا وطلبا المغفرة من الله', 'قالا إنهما على صواب', 'لاما الملائكة'], correctAnswer: 0,
    explanation: 'حزنا وطلبا المغفرة وتعلما من الخطأ وقررا ألا يكرراه.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة الفقرة التي تأتي بعد الخطأ.' }
  },
  {
    id: 'adam-a2-ar-kc-6', type: 'multiple-choice', title: 'الحياة على الأرض', instructions: 'اختر عملا مذكورا في الفصل السادس.',
    question: 'أي عمل ذُكر ضمن الحياة على الأرض؟', options: ['زراعة الزروع وتربية الحيوانات', 'البحث عن الكنوز', 'بناء السفن للسفر'], correctAnswer: 0,
    explanation: 'يذكر الفصل الزراعة وتربية الحيوانات وبناء البيوت والمحافظة على الطبيعة ومساعدة الضعفاء.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى قائمة الأعمال والمسؤوليات في الفصل السادس.' }
  },
  {
    id: 'adam-a2-ar-kc-7', type: 'multiple-choice', title: 'هابيل وقابيل', instructions: 'اختر الزوج الصحيح من الفصل الثامن.',
    question: 'أي زوج صحيح؟', options: ['هابيل راعٍ؛ قابيل مزارع', 'هابيل مزارع؛ قابيل راعٍ', 'كلاهما مزارع'], correctAnswer: 0,
    explanation: 'أصبح هابيل راعيا وأصبح قابيل مزارعا.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة الفقرة الأولى من الفصل الثامن.' }
  },
  {
    id: 'adam-a2-ar-kc-8', type: 'true-false', title: 'الغراب', instructions: 'حدد هل العبارة توافق الفصل التاسع.',
    question: 'أظهر الغراب لقابيل كيف يضع جثة أخيه في الأرض.', correctAnswer: true,
    explanation: 'حفر الغراب الأرض ففهم قابيل ما ينبغي أن يفعله.', feedback: { correct: 'صحيح.', incorrect: 'اتبع فعل الغراب في الجزء الأخير من الفصل التاسع.' }
  }
];

export const adamA2VocabularyChallengePairsAr = [
  { word: 'رسول', meaning: 'شخص يحمل رسالة من الله' },
  { word: 'متكبر', meaning: 'يظن أنه أهم أو أفضل من الآخرين' },
  { word: 'ندم', meaning: 'الشعور بالأسف على خطأ' },
  { word: 'راعٍ', meaning: 'شخص يعتني بالغنم' },
  { word: 'قربان', meaning: 'شيء يُقدَّم لله' },
  { word: 'حسد', meaning: 'الشعور بالحزن أو الضيق بسبب ما عند غيرك' }
];

export const adamA2FinalReviewExercisesAr: Exercise[] = [
  {
    id: 'adam-a2-ar-review-1', type: 'sequencing', title: 'تابع القصة', instructions: 'رتب المراحل الرئيسة بحسب القصة.', question: 'ضع المراحل في ترتيبها.',
    sequencingItems: [
      { id: '1', text: 'خُلق آدم وتعلم العلم' },
      { id: '2', text: 'رفض إبليس احترام آدم' },
      { id: '3', text: 'عاش آدم وحواء في الجنة' },
      { id: '4', text: 'وقعا في الخطأ وتعلما منه وبدآ الحياة على الأرض' },
      { id: '5', text: 'تنتقل القصة إلى أسرة آدم والدروس اللاحقة' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5'], explanation: 'يسترجع النشاط بنية القصة كلها لا معلومة منفردة.',
    feedback: { correct: 'جيد. أعدت بناء التسلسل الرئيس.', incorrect: 'استخدم ترتيب الفصول وضع مرحلة واحدة في كل مرة.' }
  },
  {
    id: 'adam-a2-ar-review-2', type: 'matching', title: 'الشخص والفعل', instructions: 'صل كل شخص بفعل مختلف من القصة.', question: 'صل كل شخص بالمعلومة الصحيحة.',
    matchingPairs: [
      { left: 'الملائكة', right: 'أُعجبت بآدم وأظهرت له الاحترام' },
      { left: 'إبليس', right: 'قال إنه صديق مع أن الفصل يصف ذلك بالكذب' },
      { left: 'آدم', right: 'علّم الناس الصدق وفعل الخير' },
      { left: 'هابيل', right: 'رفض أن يرد الأذى بأذى' }
    ],
    correctAnswer: {
      'الملائكة': 'أُعجبت بآدم وأظهرت له الاحترام',
      'إبليس': 'قال إنه صديق مع أن الفصل يصف ذلك بالكذب',
      'آدم': 'علّم الناس الصدق وفعل الخير',
      'هابيل': 'رفض أن يرد الأذى بأذى'
    },
    explanation: 'يسترجع النشاط علاقات بين الشخصيات والأفعال من فصول مختلفة.',
    feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى الفصل المناسب وتحقق مما قاله أو فعله كل شخص.' }
  },
  {
    id: 'adam-a2-ar-review-3', type: 'reflection', title: 'استخدم درسا من القصة', instructions: 'ابدأ بدرس مذكور في القصة ثم أضف مثالا شخصيا قصيرا.',
    question: 'أي درس من القصة يمكن أن يساعد طالبا في حياته اليومية؟', correctAnswer: null,
    explanation: 'الإجابة الجيدة تذكر درسا حقيقيا من القصة وتربطه بفعل واقعي.',
    feedback: { correct: 'استخدم تفصيلا دقيقا من القصة لدعم فكرتك.', incorrect: 'اختر أولا درسا مذكورا في القصة ثم أعط مثالك.' },
    discussionPrompts: [
      { question: 'كيف يساعد العلم النافع الإنسان على فعل الخير؟', mode: 'Individual' },
      { question: 'ماذا يمكن أن يفعل الإنسان بعد وقوعه في خطأ؟', mode: 'Pair' },
      { question: 'ما طريقة هادئة للسيطرة على الغضب أو الحسد؟', mode: 'Class' }
    ]
  },
  {
    id: 'adam-a2-ar-review-4', type: 'quiz-game', title: 'اختبار الاسترجاع', instructions: 'أجب عن ثمانية أسئلة من الذاكرة واستخدم التلميح عند الحاجة فقط.', question: 'هل تستطيع استرجاع ثماني أفكار مختلفة قبل التحدي النهائي؟', correctAnswer: null,
    explanation: 'هذه الأسئلة لا تكرر أسئلة اختبار المعرفة أو التحدي النهائي.',
    feedback: { correct: 'استرجاع جيد.', incorrect: 'استخدم التلميح وارجع إلى المعلومة الدقيقة ثم حاول ثانية.' },
    hints: ['استخدم عناوين الفصول لتحديد مكان الفكرة.', 'اعثر على الجملة الدقيقة قبل تغيير إجابتك.'],
    quizQuestions: [
      { question: 'كيف انتظرت الملائكة بعد سماع خبر خلق الإنسان؟', options: [{ text: 'بفضول', isCorrect: true }, { text: 'بغضب', isCorrect: false }, { text: 'بلا اهتمام', isCorrect: false }], hint: 'يصف الفصل الأول طريقة انتظارهم.' },
      { question: 'كيف كان موقف الملائكة من آدم في الفصل الثاني؟', options: [{ text: 'أُعجبت به واحترمته', isCorrect: true }, { text: 'تجاهلته', isCorrect: false }, { text: 'حسدته', isCorrect: false }], hint: 'انظر إلى رد الفعل بعد ظهور علم آدم.' },
      { question: 'لماذا أعطى الله آدم حواء؟', options: [{ text: 'لأنه شعر بالوحدة', isCorrect: true }, { text: 'لأنه أراد مزرعة', isCorrect: false }, { text: 'لأن إبليس طلب ذلك', isCorrect: false }], hint: 'الفصل الرابع يذكر السبب مباشرة.' },
      { question: 'ماذا قال إبليس كذبا عن نفسه لآدم وحواء؟', options: [{ text: 'إنه صديقهما', isCorrect: true }, { text: 'إنه ابنهما', isCorrect: false }, { text: 'إنه معلمهما', isCorrect: false }], hint: 'الفصل الخامس يصف ذلك بأنه كذب كبير.' },
      { question: 'هل وصف النص خطأ آدم وحواء بأنه كان عن قصد؟', options: [{ text: 'لا', isCorrect: true }, { text: 'نعم', isCorrect: false }, { text: 'لا يذكر النص', isCorrect: false }], hint: 'ابحث عن معنى «عن قصد».' },
      { question: 'أي مسؤوليتين ذُكرتا معا في الفصل السادس؟', options: [{ text: 'المحافظة على الطبيعة ومساعدة الضعفاء', isCorrect: true }, { text: 'جمع الذهب وبناء السفن', isCorrect: false }, { text: 'ترك العمل والعيش منفردين', isCorrect: false }], hint: 'انظر إلى قائمة المسؤوليات.' },
      { question: 'ما الدور الذي أعطاه الله لآدم في الفصل السابع؟', options: [{ text: 'أول رسول', isCorrect: true }, { text: 'أول مزارع', isCorrect: false }, { text: 'أول ملك', isCorrect: false }], hint: 'ابحث عن الجملة التي تذكر دور آدم.' },
      { question: 'أي خروف قدم هابيل قربانا؟', options: [{ text: 'أفضل وأصح خروف عنده', isCorrect: true }, { text: 'أضعف خروف عنده', isCorrect: false }, { text: 'لم يقدم خروفا', isCorrect: false }], hint: 'يصف الفصل الثامن جودة قربان هابيل.' }
    ]
  }
];

// توزيع التحدي النهائي ثابت:
// 3 اختيار من متعدد + 2 صح/خطأ + 2 مطابقة + 2 إكمال + 1 ترتيب.
export const adamA2FinalChallengeExercisesAr: Exercise[] = [
  {
    id: 'adam-a2-ar-final-1', type: 'multiple-choice', title: 'المسؤولية في الأرض', instructions: 'اختر الفكرة المذكورة في بداية القصة.',
    question: 'ما الدور الذي تعطيه القصة للإنسان في الأرض؟', options: ['تحمل مسؤولية الحياة في الأرض', 'العيش في السماء فقط', 'الابتعاد عن كل عمل'], correctAnswer: 0,
    explanation: 'تقدم القصة دور الإنسان في الأرض بوصفه مسؤولية.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى ما أخبر الله به الملائكة قبل خلق آدم.' }
  },
  {
    id: 'adam-a2-ar-final-2', type: 'multiple-choice', title: 'القيمة الحقيقية', instructions: 'اختر الفكرة التي يدعمها الفصل الثالث.',
    question: 'ماذا يقول الفصل عن الأصل وقيمة الإنسان؟', options: ['التراب أو النار لا يجعلان الشخص ذا قيمة بذاتهما', 'الخلق من النار يجعل الشخص أفضل دائما', 'الأصل هو الشيء الوحيد الذي يعطي القيمة'], correctAnswer: 0,
    explanation: 'يرفض الفصل فكرة إبليس أن مادة الأصل تحدد قيمة الشخص.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة الجملة التي تبدأ بمعنى «عند الله».' }
  },
  {
    id: 'adam-a2-ar-final-3', type: 'multiple-choice', title: 'خطة إبليس', instructions: 'اختر الخطة المذكورة في الفصل الرابع.',
    question: 'ماذا أراد إبليس أن يحدث لآدم؟', options: ['أراد أن يفقد آدم محبة الله', 'أراد أن يصبح آدم أكثر علما', 'أراد أن يبقى آدم آمنا من كل خطر'], correctAnswer: 0,
    explanation: 'يذكر الفصل أن إبليس أراد إبعاد آدم عن محبة الله ورحمته.', feedback: { correct: 'صحيح.', incorrect: 'اعثر على الجملة التي تشرح خطة إبليس.' }
  },
  {
    id: 'adam-a2-ar-final-4', type: 'true-false', title: 'التعلم من الخطأ', instructions: 'حدد هل العبارة توافق الفصل الخامس.',
    question: 'تعلم آدم وحواء من خطئهما وقررا ألا يكرراه.', correctAnswer: true,
    explanation: 'يذكر الفصل ذلك مباشرة.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة نهاية فقرة الخطأ والمغفرة.' }
  },
  {
    id: 'adam-a2-ar-final-5', type: 'true-false', title: 'الحياة اليومية', instructions: 'حدد هل العبارة توافق الفصل السادس.',
    question: 'أراد إبليس أن ينسى الناس الله في حياتهم اليومية.', correctAnswer: true,
    explanation: 'يذكر الفصل ذلك هدفا مستمرا لإبليس في الأرض.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة الفكرة الأخيرة عن إبليس في الفصل السادس.' }
  },
  {
    id: 'adam-a2-ar-final-6', type: 'matching', title: 'مسؤوليات الأرض', instructions: 'صل كل مجموعة بالفعل المذكور في الفصل السادس.',
    question: 'كيف ينبغي رعاية الحياة في الأرض بحسب الفصل؟',
    matchingPairs: [{ left: 'الطبيعة', right: 'المحافظة عليها' }, { left: 'الضعفاء', right: 'مساعدتهم' }],
    correctAnswer: { 'الطبيعة': 'المحافظة عليها', 'الضعفاء': 'مساعدتهم' },
    explanation: 'يسمي الفصل المحافظة على الطبيعة ومساعدة الضعفاء من المسؤوليات.', feedback: { correct: 'صحيح.', incorrect: 'اعثر على قائمة المسؤوليات وصل كل اسم بفعله.' }
  },
  {
    id: 'adam-a2-ar-final-7', type: 'matching', title: 'دروس النهاية', instructions: 'صل كل فكرة بالفعل الإيجابي في الفصل العاشر.',
    question: 'صل كل فكرة بالنصيحة المناسبة.',
    matchingPairs: [{ left: 'الحسد', right: 'الابتعاد عنه' }, { left: 'الغضب', right: 'السيطرة عليه' }, { left: 'الآخرون', right: 'اللطف معهم' }],
    correctAnswer: { 'الحسد': 'الابتعاد عنه', 'الغضب': 'السيطرة عليه', 'الآخرون': 'اللطف معهم' },
    explanation: 'يحول الفصل الأخير القصة إلى نصائح سلوكية واضحة.', feedback: { correct: 'صحيح.', incorrect: 'أعد قراءة جمل النصيحة في الفصل العاشر.' }
  },
  {
    id: 'adam-a2-ar-final-8', type: 'fill-blanks', title: 'الأصل والقيمة', instructions: 'أكمل جملة الفصل بكلمة واحدة.',
    question: 'أكمل الفكرة من الفصل الثالث.', fillBlanksText: 'عند الله، التراب أو النار لا يجعل أحدا [blank].', correctAnswer: 'كريما',
    explanation: 'الكلمة الناقصة هي كريما.', feedback: { correct: 'صحيح.', incorrect: 'استخدم الجملة التي تبدأ بمعنى «عند الله» وابحث عن كلمة القيمة الأخيرة.' }
  },
  {
    id: 'adam-a2-ar-final-9', type: 'fill-blanks', title: 'توجيه الأولاد', instructions: 'أكمل فعلا إيجابيا من الفصل السابع.',
    question: 'أكمل الجملة.', fillBlanksText: 'علّم آدم وحواء أولادهما أن [blank] إلى الناس وأن يشكروا الله.', correctAnswer: 'يحسنوا',
    explanation: 'يذكر الفصل أنهما علما أولادهما الإحسان إلى الناس وشكر الله.', feedback: { correct: 'صحيح.', incorrect: 'اعثر على فقرة الأسرة وانظر إلى أول فعل تعليمي إيجابي.' }
  },
  {
    id: 'adam-a2-ar-final-10', type: 'sequencing', title: 'من الإغواء إلى الدروس اللاحقة', instructions: 'رتب الأحداث اللاحقة بحسب القصة.',
    question: 'أي ترتيب يبين تطور الجزء اللاحق من القصة؟',
    sequencingItems: [
      { id: '1', text: 'يكذب إبليس بشأن الشجرة' },
      { id: '2', text: 'يقع آدم وحواء في الخطأ ويطلبان المغفرة' },
      { id: '3', text: 'يبدآن الحياة على الأرض مع مسؤوليات' },
      { id: '4', text: 'يقدم هابيل وقابيل قربانين مختلفين' },
      { id: '5', text: 'يُظهر الغراب لقابيل ما يفعل بعد موت هابيل' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'يقيس الترتيب تنظيم القصة كلها بدل معلومة منفردة أخرى.', feedback: { correct: 'صحيح. ربطت خمس مراحل بالترتيب.', incorrect: 'استخدم الفصول 5–9 وضع حدثا واحدا في كل مرة.' }
  }
];
