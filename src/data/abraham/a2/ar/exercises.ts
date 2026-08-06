import { Exercise } from '../../../../types';

export const abrahamA2ExercisesAr: Exercise[] = [];

export const abrahamA2FinalReviewExercisesAr: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'حياة إبراهيم (عليه السلام)',
    instructions: 'رتب الأحداث بالترتيب الصحيح.',
    question: 'رتب أحداث القصة.',
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'تتبع القصة البحث عن الحقيقة، ومعجزة النار، والرحلة إلى مكة، ومعجزة زمزم، وبناء الكعبة.',
    feedback: {
      correct: 'ممتاز! لديك ذاكرة رائعة لرحلة إبراهيم (عليه السلام).',
      incorrect: 'بعض الأحداث في غير مكانها. تذكر رحلته من بابل إلى مكة.'
    },
    sequencingItems: [
      { id: '1', text: 'إبراهيم يتأمل النجوم والقمر والشمس' },
      { id: '2', text: 'إبراهيم ينجو من النار الكبيرة' },
      { id: '3', text: 'هاجر وإسماعيل يصلان إلى الوادي' },
      { id: '4', text: 'ماء زمزم يخرج من الأرض' },
      { id: '5', text: 'إبراهيم وإسماعيل يبنيان الكعبة' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'صفات إبراهيم (عليه السلام)',
    instructions: 'اسحب العناصر إلى الفئة الصحيحة.',
    question: 'صنف هذه العناصر.',
    correctAnswer: {
      'صفات إبراهيم': ['الصدق', 'الشجاعة', 'التوكل على الله'],
      'معتقدات بابل': ['الأصنام', 'النجوم', 'الأشياء الحجرية']
    },
    explanation: 'كان إبراهيم صادقاً وشجاعاً، بينما كان أهل بابل يعبدون خطأً أشياء مثل الأصنام والنجوم.',
    feedback: {
      correct: 'صحيح! لقد فهمت التباين جيداً.',
      incorrect: 'تحقق من تصنيفاتك مرة أخرى.'
    },
    dragDropGroups: [
      { group: 'صفات إبراهيم', items: ['الصدق', 'الشجاعة', 'التوكل على الله'] },
      { group: 'معتقدات بابل', items: ['الأصنام', 'النجوم', 'الأشياء الحجرية'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'تفكير عميق',
    instructions: 'فكر في هذه الأسئلة وناقشها.',
    question: 'لماذا من المهم طرح الأسئلة والتفكير بنفسك؟',
    correctAnswer: null,
    explanation: 'مساعدة طرح الأسئلة مكنت إبراهيم من العثور على حقيقة الخالق الواحد.',
    feedback: {
      correct: 'تفكير ممتاز!',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'لماذا من المهم طرح الأسئلة كما فعل إبراهيم؟', mode: 'Individual' },
      { question: 'ماذا يعني "التوكل على الله" في قصة هاجر؟', mode: 'Pair' },
      { question: 'كيف تجمع الكعبة الناس معاً اليوم؟', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'تحدي النبي إبراهيم (عليه السلام)',
    instructions: 'أكمل الرحلة المكونة من 7 خطوات عبر القصة.',
    question: 'هل أنت مستعد للتحدي النهائي؟',
    correctAnswer: null,
    explanation: 'تغطي هذه اللعبة أهم المعالم في حياة النبي إبراهيم (عليه السلام).',
    feedback: {
      correct: 'تهانينا! أنت الآن تتقن قصة إبراهيم (عليه السلام)!',
      incorrect: 'لا تستسلم! راجع القصة وحاول مرة أخرى.'
    },
    hints: ['فكر في بحثه في النجوم', 'تذكر المعجزة في النار', 'تذكر الوادي والماء'],
    quizQuestions: [
      {
        question: 'أين ولد إبراهيم (عليه السلام)؟',
        options: [
          { text: 'مكة', isCorrect: false },
          { text: 'بابل', isCorrect: true },
          { text: 'سوريا', isCorrect: false }
        ],
        hint: 'كانت مملكة قديمة في بلاد ما بين النهرين.'
      },
      {
        question: 'ماذا كان يعمل والد إبراهيم؟',
        options: [
          { text: 'كان صانع أصنام', isCorrect: true },
          { text: 'كان راعياً', isCorrect: false },
          { text: 'كان ملكاً', isCorrect: false }
        ],
        hint: 'كان يصنع أشياء من الحجر يعبدها الناس.'
      },
      {
        question: 'ماذا حدث عندما أُلقي إبراهيم في النار؟',
        options: [
          { text: 'أصبحت النار برداً وسلاماً', isCorrect: true },
          { text: 'نزل المطر وأطفأها', isCorrect: false },
          { text: 'هرب قبل السقوط فيها', isCorrect: false }
        ],
        hint: 'كانت معجزة عظيمة من الله.'
      },
      {
        question: 'من كان الملك الذي جادل إبراهيم؟',
        options: [
          { text: 'فرعون', isCorrect: false },
          { text: 'أبو جهل', isCorrect: false },
          { text: 'نمرود', isCorrect: true }
        ],
        hint: 'ادعى أنه يمكنه إحياء الموتى وإماتة الأحياء.'
      },
      {
        question: 'ما اسم الماء الخاص في مكة؟',
        options: [
          { text: 'نهر النيل', isCorrect: false },
          { text: 'زمزم', isCorrect: true },
          { text: 'الكوثر', isCorrect: false }
        ],
        hint: 'ظهر تحت قدمي الطفل إسماعيل.'
      },
      {
        question: 'بين أي جبلين ركضت هاجر؟',
        options: [
          { text: 'أحد والنور', isCorrect: false },
          { text: 'الصفا والمروة', isCorrect: true },
          { text: 'عرفات ومنى', isCorrect: false }
        ],
        hint: 'لا يزال الحجاج يمشون بينهما اليوم.'
      },
      {
        question: 'ماذا بنى إبراهيم وإسماعيل معاً؟',
        options: [
          { text: 'قصراً', isCorrect: false },
          { text: 'مسجداً كبيراً', isCorrect: false },
          { text: 'الكعبة', isCorrect: true }
        ],
        hint: 'إنه بيت الله في مكة.'
      }
    ]
  }
];
