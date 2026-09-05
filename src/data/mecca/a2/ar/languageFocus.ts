import type { Exercise } from '../../../../types';

/** Arabic chapter-specific Language Focus for Mecca A2. */
export const meccaA2LanguageFocusExercisesAr: Record<number, Exercise[]> = {
  1: [
    {
      id: 'mecca-a2-ar-language-1-form-function', type: 'matching', title: 'التعريف والاعتقاد والتغيّر',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'ما وظيفة كل تركيب في الفصل الأول؟',
      matchingPairs: [
        { left: 'كان/كانت + اسم أو صفة', right: 'وصف حالة أو هوية في الماضي' },
        { left: 'وُلِدَ في + مكان', right: 'ذكر مكان الميلاد' },
        { left: 'ظنّ/اعتقد أن + جملة', right: 'نقل اعتقاد أو فكرة' },
        { left: 'جعل + شخص + صفة', right: 'بيان تغيّر أو أثر' },
      ],
      correctAnswer: {
        'كان/كانت + اسم أو صفة': 'وصف حالة أو هوية في الماضي',
        'وُلِدَ في + مكان': 'ذكر مكان الميلاد',
        'ظنّ/اعتقد أن + جملة': 'نقل اعتقاد أو فكرة',
        'جعل + شخص + صفة': 'بيان تغيّر أو أثر',
      },
      explanation: 'يجمع الفصل بين وصف الماضي، ومكان الميلاد، ونقل الاعتقاد، وتغيّر الحال.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الماضي والاعتقاد والتغيّر.' },
    },
    {
      id: 'mecca-a2-ar-language-1-future', type: 'multiple-choice', title: 'نفي المستقبل',
      instructions: 'اختر الجملة التي تنفي أمرًا في المستقبل.', question: 'أي جملة تستخدم «لن» بصورة صحيحة؟',
      options: ['لن يصبح شخصًا مهمًّا أبدًا.', 'لم يصبح شخصًا مهمًّا غدًا.', 'كان لن يصبح شخصًا مهمًّا.'], correctAnswer: 0,
      explanation: '«لن + فعل مضارع» تنفي حدوث الفعل في المستقبل.',
      feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «لن + فعل مضارع».' },
    },
    {
      id: 'mecca-a2-ar-language-1-change', type: 'fill-blanks', title: 'تغيّر الحال',
      instructions: 'أكمل بالفعل المناسب.', question: 'أي فعل يبيّن تغيّر حال الشخص؟',
      fillBlanksText: '[blank] الإسلام بلالًا رجلًا حرًّا وعظيمًا.', correctAnswer: 'جعل',
      explanation: '«جعل + شخص + اسم/صفة» يبيّن أثرًا أو تغيّرًا في الحال.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل الفعل الذي يبيّن الأثر والتغيّر.' },
    },
    {
      id: 'mecca-a2-ar-language-1-production', type: 'reflection', title: 'نبذة قصيرة',
      instructions: 'اكتب أربع جمل A2 عن شخص حقيقي أو خيالي باستعمال لغة الفصل، من دون إعادة قصة بلال.',
      question: 'هل تستطيع الجمع بين خلفية واعتقاد وتغيّر أو درس؟', correctAnswer: null,
      explanation: 'استعمل ثلاثة تراكيب على الأقل: كان/كانت، وُلِدَ في، ظنّ أن، جعل، تعلّمنا أن.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر خلفية في الماضي.', mode: 'Individual' },
        { question: 'انقل اعتقادًا سابقًا.', mode: 'Individual' },
        { question: 'اذكر تغيّرًا أو درسًا.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'mecca-a2-ar-language-2-form-function', type: 'matching', title: 'المجتمع في الماضي',
      instructions: 'صِل كل تركيب بوظيفته.', question: 'كيف يصف الفصل المجتمع في الماضي؟',
      matchingPairs: [
        { left: 'كانت هناك + اسم', right: 'ذكر وجود شيء في الماضي' },
        { left: 'لم يكن هناك + اسم', right: 'نفي وجود شيء في الماضي' },
        { left: 'الكثير من + جمع', right: 'التعبير عن عدد كبير' },
        { left: 'لكن', right: 'المقابلة بين فكرتين' },
      ],
      correctAnswer: {
        'كانت هناك + اسم': 'ذكر وجود شيء في الماضي',
        'لم يكن هناك + اسم': 'نفي وجود شيء في الماضي',
        'الكثير من + جمع': 'التعبير عن عدد كبير',
        'لكن': 'المقابلة بين فكرتين',
      },
      explanation: 'تصف هذه التراكيب وجود الأشياء ونفيها والكثرة والمقابلة في المجتمع الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الوجود والنفي والكثرة والمقابلة.' },
    },
    {
      id: 'mecca-a2-ar-language-2-contrast', type: 'multiple-choice', title: 'مقابلة حالتين',
      instructions: 'اختر أداة الربط الصحيحة.', question: 'أي كلمة تربط بين حال الأغنياء وحال الفقراء المتقابلتين؟',
      options: ['لكن', 'لأن', 'بعد'], correctAnswer: 0,
      explanation: '«لكن» تربط بين فكرتين أو حالتين متقابلتين.',
      feedback: { correct: 'صحيح.', incorrect: 'نحتاج إلى أداة للمقابلة.' },
    },
    {
      id: 'mecca-a2-ar-language-2-existence', type: 'fill-blanks', title: 'وجود ونفي',
      instructions: 'أكمل العبارة.', question: 'كيف ننفي وجود شيء في الماضي؟',
      fillBlanksText: '[blank] سلام ولا عدالة.', correctAnswer: 'لم يكن هناك',
      explanation: '«لم يكن هناك» تنفي وجود شيء في الماضي.',
      feedback: { correct: 'صحيح.', incorrect: 'استعمل تركيب نفي الوجود في الماضي.' },
    },
    {
      id: 'mecca-a2-ar-language-2-production', type: 'reflection', title: 'صف مجتمعًا',
      instructions: 'اكتب أربع جمل A2 عن مدينة خيالية في الماضي. استعمل ثلاثة تراكيب من الفصل.',
      question: 'هل تستطيع وصف وجود شيء ونفي شيء وذكر فرق بين مجموعتين؟', correctAnswer: null,
      explanation: 'يمكن استعمال كانت هناك، لم يكن هناك، الكثير من، لكن، وكان الناس + فعل مضارع.',
      feedback: { correct: 'استخدم ثلاثة تراكيب على الأقل.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر شيئًا كان موجودًا.', mode: 'Individual' },
        { question: 'انفِ وجود شيء آخر.', mode: 'Individual' },
        { question: 'اربط حالتين مختلفتين بـ«لكن».', mode: 'Pair' },
      ],
    },
  ],
};
