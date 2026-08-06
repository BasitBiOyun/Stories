import { Exercise } from '../../../../types';

export const mosesA2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'رحلة موسى عليه السلام',
    instructions: 'ضع الأحداث في الترتيب الصحيح.',
    question: 'رتب أحداث القصة.',
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'تتبع القصة ولادة موسى، وحياته في القصر، ورحلته إلى مدين، ونبوته، والهروب من مصر ثم نجاته وقومه.',
    feedback: {
      correct: 'ممتاز! أنت تتذكر رحلة موسى عليه السلام جيدًا.',
      incorrect: 'بعض الأحداث في مكان غير صحيح. حاول مرة أخرى!'
    },
    sequencingItems: [
      { id: '1', text: 'وضع موسى في تابوت صغير في نهر النيل' },
      { id: '2', text: 'الملكة آسية تحب الطفل موسى وتعتني به في القصر' },
      { id: '3', text: 'موسى يهرب من مصر ويذهب إلى مدين' },
      { id: '4', text: 'الله يكلم موسى عليه السلام على جبل سيناء ويجعله نبيًا' },
      { id: '5', text: 'البحر ينشق وموسى ينقذ قومه من فرعون وجنوده' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'السلوك الطيب مقابل السلوك السيئ',
    instructions: 'اسحب السلوكيات إلى الفئة الصحيحة.',
    question: 'صنف هذه السلوكيات.',
    correctAnswer: {
      'سلوك طيب': ['الرحمة', 'مساعدة الضعفاء', 'التوكل على الله'],
      'سلوك سيئ': ['القسوة', 'التكبر', 'الظلم']
    },
    explanation: 'ساعد موسى الضعفاء وتوكل على الله، بينما كان فرعون قاسيًا ومتكبرًا وظالمًا لقومه.',
    feedback: {
      correct: 'صحيح! هذه دروس مهمة من القصة.',
      incorrect: 'سلوك واحد أو أكثر في المجموعة الخاطئة.'
    },
    dragDropGroups: [
      { group: 'سلوك طيب', items: ['الرحمة', 'مساعدة الضعفاء', 'التوكل على الله'] },
      { group: 'سلوك سيئ', items: ['القسوة', 'التكبر', 'الظلم'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'تفكير عميق',
    instructions: 'فكر في هذه الأسئلة وناقشها.',
    question: 'لماذا يجب على الناس التوكل على الله في الأوقات الصعبة؟',
    correctAnswer: null,
    explanation: 'تبين القصة كيف حفظ الله موسى في التابوت، وهداه في مدين، وأنقذه وقومه عند البحر عندما توكلوا عليه.',
    feedback: {
      correct: 'تفكير وتأمل رائع!',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'لماذا وثقت أم موسى بالله عند إلقائه في النهر؟', mode: 'Individual' },
      { question: 'ماذا نتعلم من مساعدة موسى للأختين عند البئر؟', mode: 'Pair' },
      { question: 'كيف ساعد الله موسى وقومه عند مواجهة البحر الأحمر؟', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'تحدي النبي موسى عليه السلام',
    instructions: 'أكمل رحلة السبع خطوات عبر القصة لتثبت حفظك وفهمك.',
    question: 'هل أنت مستعد للتحدي النهائي للقصة؟',
    correctAnswer: null,
    explanation: 'تغطي هذه اللعبة النقاط والدروس الرئيسية في قصة النبي موسى عليه السلام.',
    feedback: {
      correct: 'تهانينا! لقد أتقنت قصة النبي موسى عليه السلام بالكامل!',
      incorrect: 'تابع المحاولة! يمكنك فعلها بالتأكيد.'
    },
    hints: ['فكر في نهر النيل', 'تذكر الملكة آسية', 'فكر في البحر الأحمر'],
    quizQuestions: [
      {
        question: 'أين عاش موسى عليه السلام منذ أكثر من ٣٠٠٠ عام؟',
        options: [
          { text: 'مصر', isCorrect: true },
          { text: 'مدين', isCorrect: false },
          { text: 'القدس', isCorrect: false }
        ],
        hint: 'كان فرعون ملك هذه البلاد.'
      },
      {
        question: 'أين وضعت أم موسى طفلها الرضيع خوفًا من الجنود؟',
        options: [
          { text: 'في تابوت صغير', isCorrect: true },
          { text: 'في كهف', isCorrect: false },
          { text: 'في غرفة القصر', isCorrect: false }
        ],
        hint: 'حملت مياه النيل هذا الوعاء الخشبي.'
      },
      {
        question: 'من أحب الطفل موسى في القصر وطلبت الاحتفاظ به؟',
        options: [
          { text: 'الملكة آسية', isCorrect: true },
          { text: 'السحرة', isCorrect: false },
          { text: 'الجنود', isCorrect: false }
        ],
        hint: 'كانت زوجة فرعون الصالحة التي تؤمن بالله.'
      },
      {
        question: 'إلى أين ذهب موسى بعد هروبه من مصر؟',
        options: [
          { text: 'مدين', isCorrect: true },
          { text: 'بابل', isCorrect: false },
          { text: 'فلسطين', isCorrect: false }
        ],
        hint: 'هناك التقى بالنبي شعيب عليه السلام وساعد الأختين.'
      },
      {
        question: 'إلى ماذا تحولت عصا موسى عندما ألقاها على الأرض كمعجزة؟',
        options: [
          { text: 'ثعبان كبير', isCorrect: true },
          { text: 'طائر', isCorrect: false },
          { text: 'شجرة', isCorrect: false }
        ],
        hint: 'آية عظيمة أظهرها الله لفرعون وسحرته.'
      },
      {
        question: 'ماذا قال السحرة بعد أن رأوا معجزة العصا تلتهم سحرهم؟',
        options: [
          { text: 'آمَنَّا برب موسى وهارون', isCorrect: true },
          { text: 'فرعون هو الأكثر قوة', isCorrect: false },
          { text: 'هذا مجرد سحر مبين', isCorrect: false }
        ],
        hint: 'أيقنوا بالحق وسجدوا لله رب العالمين.'
      },
      {
        question: 'كيف أنقذ الله موسى وقومه عندما حوصروا عند الشاطئ؟',
        options: [
          { text: 'انشق البحر لهم وساروا في أرض يابسة', isCorrect: true },
          { text: 'أعطاهم قصرًا جديدًا', isCorrect: false },
          { text: 'أرسلهم للنوم الطويل', isCorrect: false }
        ],
        hint: 'أصبحت الأمواج العالية كالجدران وسلكوا طريقًا آمنًا.'
      }
    ]
  }
];

export const exercises = mosesA2FinalReviewExercises;
