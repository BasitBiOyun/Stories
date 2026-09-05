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
