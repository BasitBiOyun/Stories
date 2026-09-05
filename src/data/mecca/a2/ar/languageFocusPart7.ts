import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesArPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'mecca-a2-ar-language-8-form-function', type: 'matching', title: 'السؤال والضغط والشرط',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة هذه التراكيب في الفصل الثامن؟',
      matchingPairs: [
        { left: 'هل + جملة؟', right: 'سؤال مباشر بنعم أو لا' },
        { left: 'أجبر + شخصًا + على + مصدر', right: 'التعبير عن إجبار شخص' },
        { left: 'أمر + شخصًا + أن + فعل', right: 'إعطاء أمر' },
        { left: 'إذا ... سـ...', right: 'ربط شرط بنتيجة مستقبلية' },
      ],
      correctAnswer: {
        'هل + جملة؟': 'سؤال مباشر بنعم أو لا',
        'أجبر + شخصًا + على + مصدر': 'التعبير عن إجبار شخص',
        'أمر + شخصًا + أن + فعل': 'إعطاء أمر',
        'إذا ... سـ...': 'ربط شرط بنتيجة مستقبلية',
      },
      explanation: 'يجمع الفصل بين السؤال المباشر والضغط والأمر والشرط.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين السؤال والإجبار والأمر والشرط.' },
    },
    {
      id: 'mecca-a2-ar-language-8-condition', type: 'multiple-choice', title: 'شرط ونتيجة',
      instructions: 'اختر الجملة التي تربط شرطًا بنتيجة مستقبلية.', question: 'أي جملة تستخدم النمط الصحيح؟',
      options: ['إذا تكلمت، ستكون حرًّا.', 'عندما تكلمت، كنت حرًّا.', 'لأنك تكلمت، تتكلم.'], correctAnswer: 0,
      explanation: '«إذا + فعل ... سـ + فعل» تربط شرطًا بنتيجته المستقبلية.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «إذا» ثم نتيجة مستقبلية.' },
    },
    {
      id: 'mecca-a2-ar-language-8-command', type: 'fill-blanks', title: 'نقل الأمر',
      instructions: 'أكمل التركيب.', question: 'كيف ننقل أمرًا؟',
      fillBlanksText: 'أمر أمية الأطفال [blank] يربطوا الحبال.', correctAnswer: 'أن',
      explanation: '«أمر + شخصًا + أن + فعل» تنقل أمرًا إلى شخص أو جماعة.',
      feedback: { correct: 'صحيح.', incorrect: 'أكمل تركيب الأمر المنقول.' },
    },
    {
      id: 'mecca-a2-ar-language-8-production', type: 'reflection', title: 'سؤال وقاعدة',
      instructions: 'أنشئ موقفًا يوميًا آمنًا من المدرسة أو النادي في أربع جمل قصيرة.',
      question: 'هل تستطيع استعمال سؤال وأمر وشرط وجواب؟', correctAnswer: null,
      explanation: 'استعمل هل...؟، أمر ... أن، إذا ... سـ...، ونعم/لا أو لكن.',
      feedback: { correct: 'استخدم الوظائف الأربع في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'اسأل سؤالًا مباشرًا.', mode: 'Individual' },
        { question: 'أعطِ تعليمًا أو أمرًا آمنًا.', mode: 'Individual' },
        { question: 'أضف شرطًا ونتيجة.', mode: 'Pair' },
      ],
    },
  ],
};
