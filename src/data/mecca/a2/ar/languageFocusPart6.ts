import type { Exercise } from '../../../../types';

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
