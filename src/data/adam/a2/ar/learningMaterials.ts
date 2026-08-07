import type { Exercise, PageData } from '../../../../types';
import { adamA2PagesAr } from './pages';
import { adamA2FinalChallengeExercisesAr, adamA2KnowledgeCheckExercisesAr } from './exercises';

const chapterExercises: Record<number, Exercise[]> = {
  1: [{
    id: 'ar-ex1-reinforce', type: 'fill-blanks', title: 'تذكّر البداية',
    instructions: 'أكمل المعلومة الأساسية من الفصل.',
    question: 'ممَّ خلق الله آدم؟', fillBlanksText: 'خلق الله آدم من [blank].', correctAnswer: 'التراب',
    explanation: 'يذكر الفصل الأول أن الله خلق آدم من التراب.',
    feedback: { correct: 'صحيح. كلمة التراب مهمة في بداية القصة.', incorrect: 'ارجع إلى الفقرة الأولى وابحث عما خُلق منه آدم.' }
  }],
  2: [{
    id: 'ar-ex2-reinforce', type: 'multiple-choice', title: 'العلم والاحترام',
    instructions: 'اختر الفكرة التي يشرحها الفصل.',
    question: 'ما الذي علّمه الله آدم وساعده على التعلم والفهم؟',
    options: ['العلم والتفكير', 'الزراعة', 'القتال'], correctAnswer: 0,
    explanation: 'يذكر النص أن الله علّم آدم العلم والتفكير.',
    feedback: { correct: 'صحيح. العلم هو الفكرة الأساسية هنا.', incorrect: 'أعد قراءة الفقرة الأولى وابحث عن كلمة العلم.' }
  }],
  3: [{
    id: 'ar-ex3-reinforce', type: 'matching', title: 'النار والطين والعلم',
    instructions: 'صل كل كلمة بالفكرة التي وردت معها في الفصل.',
    question: 'طابق الكلمات مع المعلومات.',
    matchingPairs: [
      { left: 'النار', right: 'ذكرها إبليس عن أصله' },
      { left: 'الطين', right: 'ذكره إبليس عن أصل آدم' },
      { left: 'العلم النافع', right: 'يساعد الإنسان على فعل الخير ومنع الشر' }
    ],
    correctAnswer: { 'النار': 'ذكرها إبليس عن أصله', 'الطين': 'ذكره إبليس عن أصل آدم', 'العلم النافع': 'يساعد الإنسان على فعل الخير ومنع الشر' },
    explanation: 'يبني الفصل المقارنة بين الأصل والعلم النافع.',
    feedback: { correct: 'جيد. ربطت كل كلمة بفكرتها في النص.', incorrect: 'ارجع إلى الفصل وابحث عن النار والطين والعلم النافع.' }
  }],
  4: [{
    id: 'ar-ex4-reinforce', type: 'tap-reveal', title: 'التحذير في الجنة',
    instructions: 'فكّر أولا، ثم اكشف الإجابة.',
    question: 'ما التحذير الذي أعطاه الله لآدم وحواء؟', correctAnswer: 'لا تقربا هذه الشجرة.',
    explanation: 'ينتهي الفصل بتحذير واضح من شجرة واحدة.',
    feedback: { correct: 'صحيح. هذا هو التحذير المذكور في النص.', incorrect: 'اقرأ آخر جملة من الفصل مرة أخرى.' },
    tapRevealItems: [{ question: 'التحذير', answer: 'لا تقربا هذه الشجرة.' }]
  }],
  5: [{
    id: 'ar-ex5-reinforce', type: 'multiple-choice', title: 'الكذب والندم',
    instructions: 'اختر ما قاله إبليس في النص.',
    question: 'بماذا حاول إبليس إقناع آدم وحواء؟',
    options: ['لن تموتا أبدا إذا أكلتما من الشجرة', 'ستصبحان مزارعين', 'ستعودان إلى الأرض مباشرة'], correctAnswer: 0,
    explanation: 'يصف الفصل هذا الكلام بأنه كذب.',
    feedback: { correct: 'صحيح. تذكرت الكذب المذكور في الفصل.', incorrect: 'ارجع إلى أول فقرة واقرأ كلام إبليس.' }
  }],
  6: [{
    id: 'ar-ex6-reinforce', type: 'multiple-choice', title: 'العمل على الأرض',
    instructions: 'اختر مثالا ورد في الفصل.',
    question: 'أي عمل ذُكر ضمن الحياة على الأرض؟',
    options: ['زراعة الزروع وتربية الحيوانات', 'جمع الذهب', 'السفر في البحر'], correctAnswer: 0,
    explanation: 'يذكر الفصل الزراعة وتربية الحيوانات وبناء البيوت والمحافظة على الطبيعة ومساعدة الضعفاء.',
    feedback: { correct: 'صحيح. هذا المثال موجود مباشرة في الفصل.', incorrect: 'أعد قراءة قائمة الأعمال في الفصل السادس.' }
  }],
  7: [{
    id: 'ar-ex7-reinforce', type: 'fill-blanks', title: 'أول رسول',
    instructions: 'أكمل الجملة من الفكرة الأساسية في الفصل.',
    question: 'ماذا بدأ آدم يعلّم الناس؟',
    fillBlanksText: 'بدأ آدم يعلّم الناس أن يكونوا [blank]، ويفعلوا الخير، ويذكروا الله.', correctAnswer: 'صادقين',
    explanation: 'يذكر الفصل أن آدم علّم الناس الصدق وفعل الخير وذكر الله.',
    feedback: { correct: 'صحيح. الصدق جزء من التعليم المذكور في النص.', incorrect: 'ابحث عن الجملة التي تبدأ: فبدأ يعلم الناس.' }
  }],
  8: [{
    id: 'ar-ex8-reinforce', type: 'matching', title: 'عمل الأخوين',
    instructions: 'صل كل أخ بعمله كما ورد في النص.',
    question: 'طابق الشخص والعمل.',
    matchingPairs: [{ left: 'هابيل', right: 'راعٍ' }, { left: 'قابيل', right: 'مزارع' }],
    correctAnswer: { 'هابيل': 'راعٍ', 'قابيل': 'مزارع' },
    explanation: 'يذكر الفصل أن هابيل أصبح راعيا وقابيل أصبح مزارعا.',
    feedback: { correct: 'صحيح. تذكرت عمل كل أخ.', incorrect: 'ارجع إلى بداية الفصل الثامن.' }
  }],
  9: [{
    id: 'ar-ex9-reinforce', type: 'true-false', title: 'فعل الغراب',
    instructions: 'حدد هل العبارة توافق النص.',
    question: 'بدأ الغراب يحفر التراب، ففهم قابيل كيف يدفن أخاه.', correctAnswer: true,
    explanation: 'هذه هي الفكرة الموجودة في الجزء الأخير من الفصل.',
    feedback: { correct: 'صحيح. تعلّم قابيل من فعل الغراب.', incorrect: 'ارجع إلى الفقرة التي يظهر فيها الغراب.' }
  }],
  10: [{
    id: 'ar-ex10-reinforce', type: 'multiple-choice', title: 'رسالة النهاية',
    instructions: 'اختر الفكرة المذكورة في الفصل الأخير.',
    question: 'إلى ماذا تدعو الرسالة في نهاية القصة؟',
    options: ['محبة الله واحترامه وحسن الخلق واللطف مع الآخرين', 'ترك الناس الآخرين', 'جمع المال'], correctAnswer: 0,
    explanation: 'يذكر الفصل الأخير محبة الله واحترامه وحسن الخلق واللطف مع الآخرين.',
    feedback: { correct: 'صحيح. هذه فكرة واضحة في نهاية القصة.', incorrect: 'أعد قراءة الفقرة الثانية من الفصل العاشر.' }
  }]
};

export const adamA2PagesArForLearning: PageData[] = adamA2PagesAr.map((page) => {
  if (page.type === 'story' && page.id >= 1 && page.id <= 10) {
    return { ...page, exercises: chapterExercises[page.id] };
  }

  if (page.id === 11) {
    return {
      ...page,
      title: 'تحقق من الفهم: قصة آدم',
      content: 'راجع أهم المعلومات من الفصول. إذا أخطأت، ارجع إلى النص ثم حاول مرة أخرى.',
      exercises: adamA2KnowledgeCheckExercisesAr
    };
  }

  if (page.id === 12) {
    return {
      ...page,
      title: 'تحدي المفردات',
      content: 'صل الكلمات الأساسية بمعانيها البسيطة من القصة.',
      vocabularyPairs: [
        { word: 'رسول', meaning: 'شخص يرسله الله ليعلّم الناس' },
        { word: 'متكبر', meaning: 'يظن أنه أفضل من الآخرين' },
        { word: 'مغفرة', meaning: 'أن يغفر الله الخطأ' },
        { word: 'راعٍ', meaning: 'شخص يعتني بالغنم' },
        { word: 'قربان', meaning: 'شيء يُقدَّم لله' },
        { word: 'حسد', meaning: 'شعور سيئ بسبب ما عند شخص آخر' }
      ]
    };
  }

  if (page.id === 16) {
    return {
      ...page,
      title: 'التحدي النهائي',
      content: 'راجع القصة كلها في عشرة أسئلة واضحة من النص.',
      exercises: adamA2FinalChallengeExercisesAr
    };
  }

  return page;
});
