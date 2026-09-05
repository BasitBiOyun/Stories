import type { Exercise } from '../../../../types';

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
