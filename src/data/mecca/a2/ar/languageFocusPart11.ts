import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart11: Record<number, Exercise[]> = {
  12: [
    {
      id: 'mecca-a2-ar-language-12-form-function', type: 'matching', title: 'العادة والمقارنة والسبب',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل الثاني عشر؟',
      matchingPairs: [
        { left: 'كان + فعل مضارع', right: 'عادة أو فعل متكرر في الماضي' },
        { left: 'خير/أفضل من', right: 'المقارنة' },
        { left: 'أمر + شخص + أن + فعل', right: 'إعطاء توجيه أو أمر' },
        { left: 'بسبب + اسم', right: 'ذكر السبب قبل اسم' },
      ],
      correctAnswer: {
        'كان + فعل مضارع': 'عادة أو فعل متكرر في الماضي',
        'خير/أفضل من': 'المقارنة',
        'أمر + شخص + أن + فعل': 'إعطاء توجيه أو أمر',
        'بسبب + اسم': 'ذكر السبب قبل اسم',
      },
      explanation: 'يجمع الفصل بين العادة والمقارنة والتوجيه وذكر السبب.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين العادة والمقارنة والأمر والسبب.' },
    },
    {
      id: 'mecca-a2-ar-language-12-habit', type: 'multiple-choice', title: 'عادة متكررة',
      instructions: 'اختر الجملة التي تصف عادة.', question: 'أي جملة تصف فعلًا كان يتكرر؟',
      options: ['كان بلال يبدأ أذان الصباح مبكرًا كل يوم.', 'بدأ بلال مرة واحدة.', 'سيبدأ غدًا.'], correctAnswer: 0,
      explanation: '«كان + فعل مضارع» مع «كل يوم» تصف عادة متكررة في الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «كان + فعل مضارع» وعلامة التكرار.' },
    },
    {
      id: 'mecca-a2-ar-language-12-equality', type: 'fill-blanks', title: 'مقارنة عادلة',
      instructions: 'أكمل أداة المقارنة.', question: 'ما الكلمة التي تكمل العبارة؟',
      fillBlanksText: 'ليس هناك لون بشرة [blank] من آخر.', correctAnswer: 'أفضل',
      explanation: '«أفضل من» صيغة مقارنة؛ هنا تأتي مع النفي للتعبير عن المساواة.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل صيغة المقارنة.' },
    },
    {
      id: 'mecca-a2-ar-language-12-production', type: 'reflection', title: 'قاعدة عادلة',
      instructions: 'اكتب أربع جمل A2 عن قاعدة عادلة في المدرسة أو النادي.',
      question: 'هل تستطيع استعمال عادة وتوجيه ومقارنة وسبب؟', correctAnswer: null,
      explanation: 'استعمل كان + فعل، أمر ... أن، سواء أو أفضل من، ومن الخطأ أو بسبب.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر عادة سابقة.', mode: 'Individual' },
        { question: 'أعطِ توجيهًا.', mode: 'Individual' },
        { question: 'اختم بمقارنة عادلة أو سبب.', mode: 'Pair' },
      ],
    },
  ],
};
