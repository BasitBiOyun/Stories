import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart10: Record<number, Exercise[]> = {
  11: [
    {
      id: 'mecca-a2-ar-language-11-form-function', type: 'matching', title: 'الزمن والإرادة والنتيجة',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل الحادي عشر؟',
      matchingPairs: [
        { left: 'بعد + حدث', right: 'تحديد مرحلة لاحقة' },
        { left: 'صار + اسم/صفة', right: 'تغيّر الحال أو المكانة' },
        { left: 'سمح لـ + شخص + أن + فعل', right: 'إعطاء الإذن' },
        { left: 'لذلك / فـ', right: 'ربط السبب بالنتيجة' },
      ],
      correctAnswer: {
        'بعد + حدث': 'تحديد مرحلة لاحقة',
        'صار + اسم/صفة': 'تغيّر الحال أو المكانة',
        'سمح لـ + شخص + أن + فعل': 'إعطاء الإذن',
        'لذلك / فـ': 'ربط السبب بالنتيجة',
      },
      explanation: 'تربط هذه التراكيب بين الزمن وتغيّر المكانة والإذن والنتيجة.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الزمن والتغيّر والإذن والنتيجة.' },
    },
    {
      id: 'mecca-a2-ar-language-11-permission', type: 'multiple-choice', title: 'الإذن',
      instructions: 'اختر الجملة التي تعبّر عن السماح.', question: 'أي جملة تعطي شخصًا إذنًا؟',
      options: ['سمح له أن يبقى.', 'أراد أن يبقى.', 'ذهب بعد ذلك.'], correctAnswer: 0,
      explanation: '«سمح لـ + شخص + أن + فعل» تعطي الإذن.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن فعل السماح.' },
    },
    {
      id: 'mecca-a2-ar-language-11-result', type: 'fill-blanks', title: 'النتيجة',
      instructions: 'أكمل بأداة النتيجة.', question: 'أي كلمة تقدّم نتيجة؟',
      fillBlanksText: 'كان صوته قويًّا، [blank] اختير للنداء إلى الصلاة.', correctAnswer: 'لذلك',
      explanation: '«لذلك» تقدّم نتيجة مبنية على فكرة سابقة.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل أداة نتيجة.' },
    },
    {
      id: 'mecca-a2-ar-language-11-production', type: 'reflection', title: 'دور جديد',
      instructions: 'اكتب أربع جمل A2 عن شخص يحصل على دور جديد بعد فترة من العمل.',
      question: 'هل تستطيع استعمال الزمن والإرادة أو الإذن والصعوبة والنتيجة؟', correctAnswer: null,
      explanation: 'استعمل بعد، أراد أن أو سمح لـ... أن، حتى عندما، لذلك أو فـ.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'ابدأ بعبارة زمن.', mode: 'Individual' },
        { question: 'أضف إرادة أو إذنًا.', mode: 'Individual' },
        { question: 'اختم بنتيجة.', mode: 'Pair' },
      ],
    },
  ],
};
