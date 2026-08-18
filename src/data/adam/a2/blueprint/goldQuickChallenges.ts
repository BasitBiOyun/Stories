import type {
  BlueprintAssessmentItem,
  LearningBlueprintChapter,
  LocalizedText,
} from '../../../learningBlueprint';
import { L, mc } from './helpers';

type QuickSpec = {
  exercise: BlueprintAssessmentItem['exercise'];
  retry: LocalizedText;
};

const namedQuick = (
  title: LocalizedText,
  question: LocalizedText,
  options: { en: string[]; ar: string[] },
  correctAnswer: number,
  explanation: LocalizedText,
): BlueprintAssessmentItem['exercise'] => {
  const exercise = mc(question, options, correctAnswer, explanation);
  return {
    en: {
      ...exercise.en,
      title: title.en,
      instructions: 'Choose the best answer from the chapter.',
    },
    ar: {
      ...exercise.ar,
      title: title.ar,
      instructions: 'اختر أفضل إجابة من الفصل.',
    },
  };
};

const quickByChapter: Record<number, QuickSpec> = {
  1: {
    exercise: namedQuick(
      L('The Story Begins', 'بداية القصة'),
      L('What was Adam created from?', 'مِمَّ خُلق آدم؟'),
      { en: ['Soil', 'Fire', 'Water'], ar: ['التراب', 'النار', 'الماء'] },
      0,
      L('The opening says Allah created Adam from soil.', 'تقول بداية الفصل إن الله خلق آدم من التراب.'),
    ),
    retry: L(
      'Read the first paragraph and find the words “created him from”.',
      'اقرأ الفقرة الأولى وابحث عن العبارة التي تذكر ممَّ خُلق آدم.',
    ),
  },
  2: {
    exercise: namedQuick(
      L('Knowledge and Learning', 'العلم والتعلم'),
      L('Which idea explains why Adam could learn and understand?', 'أي فكرة تشرح لماذا استطاع آدم أن يتعلم ويفهم؟'),
      {
        en: ['Knowledge and thinking', 'Fire and soil', 'Farming and animals'],
        ar: ['العلم والتفكير', 'النار والتراب', 'الزراعة والحيوانات'],
      },
      0,
      L('The chapter links Adam’s learning and understanding with the knowledge Allah gave him and with thinking.', 'يربط الفصل تعلم آدم وفهمه بالعلم الذي علّمه الله إياه وبالتفكير.'),
    ),
    retry: L(
      'Find the sentence with “knowledge” and “think”. What do these help Adam do?',
      'ابحث عن الجملة التي فيها «العلم» و«التفكير». ماذا ساعدا آدم على أن يفعل؟',
    ),
  },
  3: {
    exercise: namedQuick(
      L('Iblis’s Claim', 'ادعاء إبليس'),
      L('Why did Iblis say he was better than Adam?', 'لماذا قال إبليس إنه أفضل من آدم؟'),
      {
        en: ['He compared fire with soil', 'He compared farming with animals', 'He compared Earth with Paradise'],
        ar: ['قارن النار بالتراب', 'قارن الزراعة بالحيوانات', 'قارن الأرض بالجنة'],
      },
      0,
      L('Iblis used the difference between fire and soil to claim that he was better.', 'استخدم إبليس الفرق بين النار والتراب ليقول إنه أفضل.'),
    ),
    retry: L(
      'Read Iblis’s answer and find the two materials he compares.',
      'اقرأ جواب إبليس وحدد المادتين اللتين يقارن بينهما.',
    ),
  },
  4: {
    exercise: namedQuick(
      L('The Rule in Paradise', 'التعليمات في الجنة'),
      L('Which rule did Adam and Eve need to remember in Paradise?', 'أي تعليمات كان على آدم وحواء أن يتذكراها في الجنة؟'),
      {
        en: ['Stay away from one tree', 'Leave Paradise at once', 'Start farming there'],
        ar: ['الابتعاد عن شجرة واحدة', 'مغادرة الجنة فورًا', 'البدء بالزراعة هناك'],
      },
      0,
      L('Allah told Adam and Eve not to go near one tree.', 'قال الله لآدم وحواء ألا يقتربا من شجرة واحدة.'),
    ),
    retry: L(
      'Read the final warning in Chapter 4. What must they stay away from?',
      'اقرأ التحذير الأخير في الفصل الرابع. عمَّ كان عليهما أن يبتعدا؟',
    ),
  },
  5: {
    exercise: namedQuick(
      L('A Mistake', 'الخطأ'),
      L('Did Adam and Eve plan to make the mistake?', 'هل خطط آدم وحواء للوقوع في الخطأ؟'),
      {
        en: ['No. It was not on purpose.', 'Yes. They planned it.', 'The chapter says they made no mistake.'],
        ar: ['لا، لم يكن الخطأ مقصودًا.', 'نعم، خططا له.', 'يقول الفصل إنهما لم يخطئا.'],
      },
      0,
      L('The chapter says Adam and Eve made a mistake, but it was not on purpose.', 'يقول الفصل إن آدم وحواء وقعا في الخطأ، لكنه لم يكن مقصودًا.'),
    ),
    retry: L(
      'Find the words “not on purpose”. Did they plan the mistake?',
      'ابحث عن معنى «لم يقصدا». هل خططا للخطأ؟',
    ),
  },
  6: {
    exercise: namedQuick(
      L('A New Life on Earth', 'حياة جديدة في الأرض'),
      L('What happened after Allah forgave Adam and Eve?', 'ماذا حدث بعد أن غفر الله لآدم وحواء؟'),
      {
        en: ['They began life on Earth', 'They went back to the tree', 'They stayed in Paradise'],
        ar: ['بدآ الحياة في الأرض', 'عادا إلى الشجرة', 'بقيا في الجنة'],
      },
      0,
      L('After forgiveness, Allah put Adam and Eve on Earth to live there.', 'بعد المغفرة أنزل الله آدم وحواء إلى الأرض ليعيشا فيها.'),
    ),
    retry: L(
      'Read the first sentence in Chapter 6 and follow the order: forgiveness, then what?',
      'اقرأ الجملة الأولى في الفصل السادس واتبع الترتيب: المغفرة، ثم ماذا؟',
    ),
  },
  7: {
    exercise: namedQuick(
      L('Adam’s Teaching', 'تعاليم آدم'),
      L('Which list matches what Adam taught people?', 'أي قائمة تطابق ما علّمه آدم للناس؟'),
      {
        en: [
          'Be honest, do good, stop bad, remember Allah',
          'Grow crops, keep animals, build houses',
          'Be jealous, stay angry, forget Allah',
        ],
        ar: [
          'الصدق وفعل الخير ومنع الشر وذكر الله',
          'زراعة المحاصيل وتربية الحيوانات وبناء البيوت',
          'الحسد والبقاء غاضبين ونسيان الله',
        ],
      },
      0,
      L('The chapter says Adam taught people to be honest, do good, stop bad, and always remember Allah.', 'يقول الفصل إن آدم علّم الناس الصدق وفعل الخير ومنع الشر وذكر الله دائمًا.'),
    ),
    retry: L(
      'Find the sentence that begins “He started teaching people…” and read the whole list.',
      'ابحث عن الجملة التي تبدأ بمعنى «بدأ يعلم الناس…» واقرأ القائمة كاملة.',
    ),
  },
  8: {
    exercise: namedQuick(
      L('Habil and Qabil', 'هابيل وقابيل'),
      L('Who cared for animals, and who worked with crops?', 'من كان يعتني بالحيوانات، ومن كان يعمل في الزراعة؟'),
      {
        en: [
          'Habil cared for animals; Qabil worked with crops',
          'Qabil cared for animals; Habil worked with crops',
          'Both brothers cared only for animals',
        ],
        ar: [
          'هابيل اعتنى بالحيوانات؛ وقابيل عمل في الزراعة',
          'قابيل اعتنى بالحيوانات؛ وهابيل عمل في الزراعة',
          'كلا الأخوين اعتنى بالحيوانات فقط',
        ],
      },
      0,
      L('Habil became a shepherd and cared for animals; Qabil was a farmer and worked with crops.', 'أصبح هابيل راعيًا يعتني بالحيوانات، وكان قابيل مزارعًا يعمل في الزراعة.'),
    ),
    retry: L(
      'Read the first paragraph. Who worked with animals, and who worked with crops?',
      'اقرأ الفقرة الأولى. من عمل مع الحيوانات، ومن عمل في الزراعة؟',
    ),
  },
  9: {
    exercise: namedQuick(
      L('What Qabil Learned', 'ما الذي تعلمه قابيل'),
      L('A crow is a bird. It dug the ground. What did Qabil learn?', 'الغراب طائر. حفر التراب. ماذا تعلم قابيل؟'),
      {
        en: ['How to bury his brother', 'How to grow crops', 'How to care for sheep'],
        ar: ['كيف يدفن أخاه', 'كيف يزرع المحاصيل', 'كيف يعتني بالأغنام'],
      },
      0,
      L('The crow’s digging showed Qabil how to bury his brother.', 'أظهر حفر الغراب لقابيل كيف يدفن أخاه.'),
    ),
    retry: L(
      'The word “crow” means a bird here. Read what the bird did and what Qabil understood next.',
      'الغراب طائر هنا. اقرأ ما فعله الطائر وما الذي فهمه قابيل بعد ذلك.',
    ),
  },
  10: {
    exercise: namedQuick(
      L('The Main Lesson', 'الدرس الرئيس'),
      L('What lesson does Chapter 10 give?', 'ما الدرس الذي يقدمه الفصل العاشر؟'),
      {
        en: [
          'Stay away from jealousy and control anger',
          'Keep jealousy and anger',
          'Ignore kindness and good behaviour',
        ],
        ar: [
          'الابتعاد عن الحسد والسيطرة على الغضب',
          'التمسك بالحسد والغضب',
          'تجاهل اللطف وحسن الخلق',
        ],
      },
      0,
      L('Chapter 10 says good people should stay away from jealousy and control their anger.', 'يقول الفصل العاشر إن الناس الصالحين يجب أن يبتعدوا عن الحسد ويسيطروا على غضبهم.'),
    ),
    retry: L(
      'Find the sentence with “should”. Which two actions does it give?',
      'ابحث عن الجملة التي فيها معنى «يجب». ما الفعلان اللذان تذكرهما؟',
    ),
  },
};

/**
 * Replaces the chapter Quick Challenge after the Gold learning map has been built.
 * This keeps the same evidence/outcome link while making the student-facing task
 * A2-accessible, meaningful, and chapter-specific. The feedback contract is
 * updated at the same time so v2 validation still checks the exact runtime copy.
 */
export const applyAdamA2GoldQuickChallenges = (
  chapter: LearningBlueprintChapter,
): LearningBlueprintChapter => {
  const spec = quickByChapter[chapter.chapterId];
  if (!spec) throw new Error(`[Adam A2 Gold Quick] Missing Chapter ${chapter.chapterId} specification.`);

  const quickId = `adam-a2-c${chapter.chapterId}-quick`;
  let replaced = false;

  const assessmentItems = chapter.assessmentItems.map((item) => {
    if (item.id !== quickId) return item;
    replaced = true;
    if (!item.quality) throw new Error(`[Adam A2 Gold Quick] ${item.id} has no v2 quality metadata.`);

    const correct = L(
      `Correct. ${spec.exercise.en.explanation}`,
      `صحيح. ${spec.exercise.ar.explanation}`,
    );
    const exercise = {
      en: {
        ...spec.exercise.en,
        feedback: { correct: correct.en, incorrect: spec.retry.en },
      },
      ar: {
        ...spec.exercise.ar,
        feedback: { correct: correct.ar, incorrect: spec.retry.ar },
      },
    };

    return {
      ...item,
      exercise,
      quality: {
        ...item.quality,
        feedback: {
          ...item.quality.feedback,
          correct,
          incorrect: spec.retry,
          rationale: L(
            'The Quick Challenge checks one meaningful chapter idea in simple A2 language. Correct feedback explains the evidence link; retry feedback points to a precise rereading move without giving the answer first.',
            'يقيس التحدي السريع فكرة مهمة واحدة من الفصل بلغة بسيطة تناسب A2. تشرح تغذية الإجابة الصحيحة علاقة الدليل، وتوجه إعادة المحاولة إلى قراءة محددة دون إعطاء الإجابة أولًا.',
          ),
        },
      },
    };
  });

  if (!replaced) throw new Error(`[Adam A2 Gold Quick] Chapter ${chapter.chapterId} Quick Challenge was not found.`);
  return { ...chapter, assessmentItems };
};
