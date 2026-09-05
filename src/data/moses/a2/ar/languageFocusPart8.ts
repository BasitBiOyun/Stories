import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart8Ar: Record<number, Exercise[]> = {
  11: [
    {
      id: 'moses-a2-ar-language-11-command-message', type: 'matching', title: 'التوجيه والرسالة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف ينتقل الفصل من التوجيه إلى تبليغ الرسالة؟',
      matchingPairs: [
        { left: 'أدخل يدك في جيبك', right: 'توجيه بحركة مباشرة' },
        { left: 'ثم أخرجها', right: 'الخطوة التالية' },
        { left: 'اذهب إلى فرعون', right: 'توجيه إلى مكان لمهمة' },
        { left: 'أخبره أن الله رب العالمين', right: 'تبليغ رسالة' }
      ],
      correctAnswer: {
        'أدخل يدك في جيبك': 'توجيه بحركة مباشرة', 'ثم أخرجها': 'الخطوة التالية',
        'اذهب إلى فرعون': 'توجيه إلى مكان لمهمة', 'أخبره أن الله رب العالمين': 'تبليغ رسالة'
      },
      explanation: 'يستخدم الفصل صيغ التوجيه ثم لغة تبليغ الرسالة.', feedback: { correct: 'صحيح.', incorrect: 'فرّق بين الحركة والذهاب والتبليغ.' }
    },
    {
      id: 'moses-a2-ar-language-11-change-role', type: 'multiple-choice', title: 'تغيّر الدور',
      instructions: 'اختر الجملة التي تصف دورًا جديدًا.', question: 'أي جملة تستعمل «جعل» لإعطاء دور جديد؟',
      options: ['وجعله نبيًا ورسولًا', 'فإذا هي بيضاء مضيئة', 'لكنهم لم يؤمنوا بالله'], correctAnswer: 0,
      explanation: 'يستعمل «جعل + شخص + اسمًا/صفة» لوصف دور أو حال جديد.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن الفعل «جعل».' }
    },
    {
      id: 'moses-a2-ar-language-11-companion-purpose', type: 'fill-blanks', title: 'الغاية من الذهاب',
      instructions: 'أكمل حرف الغاية.', question: 'لماذا ذهب موسى إلى القصر؟',
      fillBlanksText: 'ذهب موسى إلى القصر [blank]تبليغ رسالة الله.', correctAnswer: 'ل',
      explanation: 'تستخدم اللام لبيان الغاية.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج لام الغاية.' }
    },
    {
      id: 'moses-a2-ar-language-11-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل مهمة صغيرة في المدرسة أو البيت.', question: 'هل تستطيع إعطاء توجيه وذكر المرافق وبيان الغاية ووصف نتيجة؟',
      correctAnswer: null, explanation: 'استخدم صيغة توجيه، و«معه»، و«لـ + فعل»، و«جعل» أو «لم + فعل».',
      feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'أعط توجيهًا بسيطًا.', mode: 'Pair' },
        { question: 'اذكر من يرافقك.', mode: 'Individual' },
        { question: 'اذكر الغاية.', mode: 'Individual' },
        { question: 'صف نتيجة أو دورًا جديدًا.', mode: 'Individual' }
      ]
    }
  ]
};
