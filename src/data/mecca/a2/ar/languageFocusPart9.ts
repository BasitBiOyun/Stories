import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'mecca-a2-ar-language-10-form-function', type: 'matching', title: 'الموافقة والافتراض والتغيّر',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل العاشر؟',
      matchingPairs: [
        { left: 'وافق أن + فعل', right: 'قبول فعل أو قرار' },
        { left: 'لو ... لـ...', right: 'موقف افتراضي ونتيجته' },
        { left: 'أصبح + اسم/صفة', right: 'تغيّر الحال' },
        { left: 'لكن ... بل ...', right: 'مقارنة اختيار بما لم يحدث' },
      ],
      correctAnswer: {
        'وافق أن + فعل': 'قبول فعل أو قرار',
        'لو ... لـ...': 'موقف افتراضي ونتيجته',
        'أصبح + اسم/صفة': 'تغيّر الحال',
        'لكن ... بل ...': 'مقارنة اختيار بما لم يحدث',
      },
      explanation: 'يجمع الفصل بين الموافقة والافتراض وتغيّر الحال والاختيار.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الموافقة والافتراض والتغيّر والاختيار.' },
    },
    {
      id: 'mecca-a2-ar-language-10-sequence', type: 'sequencing', title: 'ترتيب الأحداث',
      instructions: 'رتّب عبارات الزمن من البداية إلى النهاية.', question: 'ما الترتيب الطبيعي؟',
      sequencingItems: [
        { id: '1', text: 'أولًا' },
        { id: '2', text: 'بعد ذلك' },
        { id: '3', text: 'وأخيرًا' },
      ],
      correctAnswer: ['1', '2', '3'],
      explanation: '«أولًا، بعد ذلك، وأخيرًا» تنظّم تسلسل الأحداث.',
      feedback: { correct: 'صحيح.', incorrect: 'ابدأ بأولًا واختم بأخيرًا.' },
    },
    {
      id: 'mecca-a2-ar-language-10-change', type: 'fill-blanks', title: 'حال جديد',
      instructions: 'أكمل بفعل التغيّر.', question: 'أي فعل يصف انتقال الشخص إلى حال جديد؟',
      fillBlanksText: '[blank] بلال رجلًا حرًّا.', correctAnswer: 'أصبح',
      explanation: '«أصبح + اسم/صفة» تصف تغيرًا في الحال.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل فعلًا يدل على تغيّر الحال.' },
    },
    {
      id: 'mecca-a2-ar-language-10-production', type: 'reflection', title: 'تغيّر واختيار',
      instructions: 'اكتب أربع جمل A2 عن موقف جديد فيه موافقة وافتراض وتغيّر واختيار.',
      question: 'هل تستطيع استعمال وظائف الفصل في موقف يومي؟', correctAnswer: null,
      explanation: 'استعمل وافق أن، لو ... لـ...، أصبح/الآن، لكنه لم يفعل بل....',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'ابدأ بموافقة.', mode: 'Individual' },
        { question: 'أضف موقفًا افتراضيًا.', mode: 'Individual' },
        { question: 'اختم بتغيّر أو اختيار.', mode: 'Pair' },
      ],
    },
  ],
};
