import type { Exercise } from '../../../../types';

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
