import type {
  BlueprintAssessmentItem,
  LearningBlueprintChapter,
  LocalizedText,
} from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2 } from '../../../learningQualityContract';
import { L, mc, tf } from './helpers';

type OverrideSpec = {
  learningPointId?: string;
  exercise?: BlueprintAssessmentItem['exercise'];
  retry?: LocalizedText;
  demand?: BlueprintCognitiveDemandV2;
};

const T = (en: string, ar: string): LocalizedText => L(en, ar);

const overrides: Record<string, OverrideSpec> = {
  'adam-a2-c1-quick': { learningPointId: 'adam-a2-c1-colors', demand: 'connect' },
  'adam-a2-c1-knowledge': {
    learningPointId: 'adam-a2-c1-creation',
    exercise: mc(
      T('What was Adam created from?', 'مِمَّ خُلق آدم؟'),
      { en: ['Soil', 'Fire', 'Water'], ar: ['التراب', 'النار', 'الماء'] },
      0,
      T('The chapter says Allah created Adam from soil.', 'يقول الفصل إن الله خلق آدم من التراب.'),
    ),
    retry: T('Look at the opening paragraph and find the material named after “created him from”.', 'ارجع إلى الفقرة الأولى وابحث عن المادة المذكورة بعد معنى «خلقه من».'),
    demand: 'identify',
  },
  'adam-a2-c1-final': {
    learningPointId: 'adam-a2-c1-earth-role',
    exercise: mc(
      T('What role does the chapter give humans on Earth?', 'ما الدور الذي يذكره الفصل للإنسان في الأرض؟'),
      {
        en: ['Be responsible for life on Earth', 'Live only in the sky', 'Stay away from all work'],
        ar: ['تحمل مسؤولية الحياة في الأرض', 'العيش في السماء فقط', 'الابتعاد عن كل عمل'],
      },
      0,
      T('The chapter says the human is going to be the ruler on Earth, a role of responsibility.', 'يقول الفصل إن الإنسان سيكون خليفةً مسؤولًا في الأرض.'),
    ),
    retry: T('Return to what Allah told the angels before Adam was created. What role is named there?', 'ارجع إلى ما أخبر الله به الملائكة قبل خلق آدم. ما الدور المذكور؟'),
    demand: 'identify',
  },

  'adam-a2-c2-quick': { learningPointId: 'adam-a2-c2-respect-command', demand: 'retrieve' },
  'adam-a2-c2-knowledge': {
    learningPointId: 'adam-a2-c2-knowledge',
    exercise: mc(
      T('What helped Adam learn and understand?', 'ما الذي ساعد آدم على التعلم والفهم؟'),
      {
        en: ['Allah gave him knowledge and taught him to think', 'He was physically stronger than everyone', 'He had lived on Earth for many years'],
        ar: ['علّمه الله العلم والتفكير', 'كان أقوى جسديًا من الجميع', 'عاش في الأرض سنوات كثيرة'],
      },
      0,
      T('The chapter connects Adam’s learning and understanding with knowledge and thinking.', 'يربط الفصل تعلم آدم وفهمه بالعلم والتفكير.'),
    ),
    retry: T('Find the sentence after “Adam could learn and understand.” What reason does it give?', 'ابحث عن الجملة بعد معنى «كان آدم يتعلم ويفهم». ما السبب الذي تذكره؟'),
    demand: 'connect',
  },
  'adam-a2-c2-final': {
    exercise: mc(
      T('Which sentence shows the difference between the angels and Iblis?', 'أي جملة تبين الفرق بين موقف الملائكة وإبليس؟'),
      {
        en: [
          'The angels admired Adam, but Iblis thought he was unimportant',
          'The angels and Iblis both thought Adam was unimportant',
          'Iblis admired Adam more than the angels did',
        ],
        ar: [
          'أُعجبت الملائكة بآدم، لكن إبليس رآه غير مهم',
          'رأت الملائكة وإبليس أن آدم غير مهم',
          'أُعجب إبليس بآدم أكثر من الملائكة',
        ],
      },
      0,
      T('The chapter contrasts the angels’ admiration and respect with Iblis’s negative view of Adam.', 'يقارن الفصل بين إعجاب الملائكة واحترامها لآدم وبين نظرة إبليس السلبية إليه.'),
    ),
    retry: T('Compare the sentence about the angels with the final sentence about Iblis.', 'قارن الجملة عن الملائكة بالجملة الأخيرة عن إبليس.'),
    demand: 'compare',
  },

  'adam-a2-c3-knowledge': {
    exercise: mc(
      T('Why does the chapter call Iblis arrogant?', 'لماذا يصف الفصل إبليس بالتكبر؟'),
      {
        en: ['He thought he was more important and valuable than Adam', 'He wanted to learn from Adam', 'He thought fire and soil had the same value'],
        ar: ['ظن أنه أهم وأعلى قيمة من آدم', 'أراد أن يتعلم من آدم', 'رأى أن النار والتراب لهما القيمة نفسها'],
      },
      0,
      T('Iblis thought he was more important and more valuable than Adam, and the chapter calls him arrogant.', 'ظن إبليس أنه أهم وأعلى قيمة من آدم، ويصفه الفصل بالتكبر.'),
    ),
    retry: T('Read the two sentences immediately after “Iblis was arrogant.” What did he think about himself?', 'اقرأ الجملتين بعد معنى «كان إبليس متكبرًا». ماذا كان يظن عن نفسه؟'),
    demand: 'connect',
  },
  'adam-a2-c3-final': {
    exercise: mc(
      T('What does the chapter say about origin and a person’s value?', 'ماذا يقول الفصل عن الأصل وقيمة الإنسان؟'),
      {
        en: ['Clay or fire does not make a person valuable by itself', 'Being created from fire always makes someone better', 'A person’s origin is the only thing that gives value'],
        ar: ['التراب أو النار لا يجعلان الشخص ذا قيمة بذاتهما', 'الخلق من النار يجعل الشخص أفضل دائمًا', 'أصل الشخص هو الشيء الوحيد الذي يعطيه القيمة'],
      },
      0,
      T('The chapter says clay or fire does not by itself make anyone valuable.', 'يقول الفصل إن التراب أو النار لا يجعلان الشخص ذا قيمة بذاتهما.'),
    ),
    retry: T('Reread the sentence that begins “For Allah”. Does it say clay or fire gives value?', 'أعد قراءة الجملة التي تبدأ بمعنى «عند الله». هل تقول إن التراب أو النار يعطيان القيمة؟'),
    demand: 'explain',
  },

  'adam-a2-c4-quick': { learningPointId: 'adam-a2-c4-eve', demand: 'connect' },
  'adam-a2-c4-knowledge': {
    learningPointId: 'adam-a2-c4-tree',
    exercise: mc(
      T('What was the one tree warning in Paradise?', 'ما التحذير المتعلق بالشجرة في الجنة؟'),
      {
        en: ['Do not go near one tree', 'Do not walk in Paradise', 'Do not speak to each other'],
        ar: ['لا تقتربا من شجرة واحدة', 'لا تمشيا في الجنة', 'لا تتحدثا معًا'],
      },
      0,
      T('Allah told Adam and Eve not to go near one tree.', 'قال الله لآدم وحواء ألا يقتربا من شجرة واحدة.'),
    ),
    retry: T('Read the final warning in the chapter and identify the one thing Adam and Eve were told not to approach.', 'اقرأ التحذير الأخير في الفصل وحدد الشيء الوحيد الذي نُهيا عن الاقتراب منه.'),
    demand: 'identify',
  },
  'adam-a2-c4-final': {
    exercise: mc(
      T('What did Iblis want to happen to Adam?', 'ماذا أراد إبليس أن يحدث لآدم؟'),
      {
        en: ['He wanted Adam to lose Allah’s love', 'He wanted Adam to become wiser', 'He wanted Adam to stay safe from every danger'],
        ar: ['أراد أن يفقد آدم محبة الله', 'أراد أن يصبح آدم أكثر علمًا', 'أراد أن يبقى آدم آمنًا من كل خطر'],
      },
      0,
      T('The chapter says Iblis wanted Adam to lose Allah’s love, just as Iblis had.', 'يقول الفصل إن إبليس أراد أن يفقد آدم محبة الله كما فقدها هو.'),
    ),
    retry: T('Find the sentence that explains Iblis’s plan after he waited for a chance.', 'ابحث عن الجملة التي تشرح خطة إبليس بعد أن انتظر فرصة.'),
    demand: 'explain',
  },

  'adam-a2-c5-quick': {
    learningPointId: 'adam-a2-c5-never-die',
    exercise: mc(
      T('What did Iblis promise about the tree?', 'ماذا وعد إبليس بشأن الشجرة؟'),
      {
        en: ['If you eat from it, you will never die', 'If you eat from it, you will become hungry', 'If you eat from it, you will forget everything'],
        ar: ['إذا أكلتما منها فلن تموتا أبدًا', 'إذا أكلتما منها فستجوعان', 'إذا أكلتما منها فستنسيان كل شيء'],
      },
      0,
      T('Iblis said, “If you eat from that one tree, you will never die.”', 'قال إبليس: «إذا أكلتما من تلك الشجرة فلن تموتا أبدًا».'),
    ),
    retry: T('Find Iblis’s promise beginning with “If you eat…”. What result did he promise?', 'ابحث عن وعد إبليس الذي يبدأ بمعنى «إذا أكلتما...». ما النتيجة التي وعد بها؟'),
    demand: 'identify',
  },
  'adam-a2-c5-knowledge': {
    learningPointId: 'adam-a2-c5-not-purpose',
    exercise: tf(
      T('Adam and Eve made their mistake on purpose.', 'كان خطأ آدم وحواء مقصودًا.'),
      false,
      T('The chapter says they made a mistake, but it was not on purpose.', 'يقول الفصل إنهما وقعا في الخطأ، لكنهما لم يقصدا ذلك.'),
    ),
    retry: T('Find the sentence with “on purpose”. Does it say the mistake was intentional?', 'ابحث عن الجملة التي فيها معنى «عن قصد». هل تقول إن الخطأ كان مقصودًا؟'),
    demand: 'identify',
  },

  'adam-a2-c7-final': {
    exercise: mc(
      T('Which pair shows how Adam and Eve guided their children?', 'أي زوج يبين كيف وجّه آدم وحواء أولادهما؟'),
      {
        en: ['Behave well and thank Allah', 'Stay jealous and keep anger', 'Forget Allah and follow Iblis'],
        ar: ['الإحسان إلى الناس وشكر الله', 'البقاء على الحسد والغضب', 'نسيان الله واتباع إبليس'],
      },
      0,
      T('The chapter says Adam and Eve taught their children to behave well and thank Allah.', 'يقول الفصل إن آدم وحواء علّما أولادهما الإحسان إلى الناس وشكر الله.'),
    ),
    retry: T('Read the positive guidance in the family paragraph before the warning about Iblis.', 'اقرأ التوجيه الإيجابي في فقرة الأسرة قبل التحذير من إبليس.'),
    demand: 'identify',
  },

  'adam-a2-c8-knowledge': {
    retry: T('Find the sentence about Habil’s offering and focus on the words describing its quality.', 'اعثر على الجملة عن قربان هابيل وركز على الكلمات التي تصف جودته.'),
    demand: 'identify',
  },
  'adam-a2-c8-review': {
    retry: T('Reread the character description before the jobs and compare the two brothers.', 'أعد قراءة وصف الشخصيتين قبل ذكر العمل وقارن بين الأخوين.'),
    demand: 'compare',
  },
  'adam-a2-c8-final': {
    retry: T('Use the final lesson after the chapter compares the two offerings.', 'استخدم الدرس الأخير بعد أن يقارن الفصل بين القربانين.'),
    demand: 'infer',
  },

  'adam-a2-c9-review': {
    exercise: tf(
      T('Habil said, “I will fight back and harm you.”', 'قال هابيل: «سأرد عليك وسأؤذيك».'),
      false,
      T('Habil said, “I won’t fight back or harm you.”', 'قال هابيل إنه لن يرد على قابيل ولن يؤذيه.'),
    ),
    retry: T('Read Habil’s own reply and focus on “won’t”. What did he refuse to do?', 'اقرأ رد هابيل نفسه وركز على معنى «لن». ماذا رفض أن يفعل؟'),
    demand: 'identify',
  },

  'adam-a2-c10-knowledge': {
    exercise: mc(
      T('How did Adam’s message continue after him?', 'كيف استمرت رسالة آدم بعده؟'),
      {
        en: ['His children and grandchildren spread it worldwide', 'Only the angels remembered it', 'The message ended when Adam became old'],
        ar: ['نشرها أولاده وأحفاده في كل العالم', 'تذكرتها الملائكة فقط', 'انتهت الرسالة عندما كبر آدم'],
      },
      0,
      T('The chapter says Adam’s children and grandchildren spread his message worldwide.', 'يقول الفصل إن أولاد آدم وأحفاده نشروا رسالته في كل العالم.'),
    ),
    retry: T('Read the sentence about Adam’s children and grandchildren. What did they do with his message?', 'اقرأ الجملة عن أولاد آدم وأحفاده. ماذا فعلوا برسالته؟'),
    demand: 'sequence',
  },
};

const grammarByChapter: Record<number, LocalizedText> = {
  1: T('Simple Past for finished story events; be going to for the future role announced in the chapter.', 'الماضي للأحداث المكتملة، والتعبير عن الدور المستقبلي المذكور في الفصل.'),
  2: T('Comparative language such as wiser/more than, with because for reasons.', 'لغة المقارنة مثل «أكثر علمًا» مع «لأن» لذكر السبب.'),
  3: T('Comparatives such as better/more valuable, with because for reasons.', 'المقارنة مثل «أفضل/أكثر قيمة» مع «لأن» لشرح السبب.'),
  4: T('Warning and command language. Treat told ... not to as chapter language, not a new advanced grammar target.', 'لغة التحذير والأمر والنهي؛ تُفهم صيغة «قال له ألا...» من السياق ولا تُقدم كهدف نحوي متقدم.'),
  5: T('First Conditional for a real or possible result: if + present, will/won’t + verb.', 'الشرط الأول للنتيجة الممكنة: if + المضارع، ثم will/won’t + الفعل.'),
  6: T('Simple Past and sequence markers for completed events. Notice were going to for meaning only, not as a new target.', 'الماضي وروابط الترتيب للأحداث المكتملة؛ يُلاحظ معنى «كانا سيقومان» دون تقديمه كهدف جديد.'),
  7: T('Should + base verb for simple advice in transfer; notice teach + person + to as chapter language.', 'should + الفعل للنصيحة البسيطة في التطبيق، مع ملاحظة تركيب «علّم شخصًا أن...» في سياق القصة.'),
  8: T('Comparative/superlative language such as better, best and healthiest, plus but for contrast.', 'المقارنة والتفضيل مثل «أفضل/الأفضل/الأصح» مع «لكن» لإظهار الاختلاف.'),
  9: T('Will/won’t for stated intention or refusal, and Simple Past for event sequence.', 'will/won’t للنية أو الرفض، والماضي لترتيب الأحداث.'),
  10: T('Should + base verb for advice: stay away, control anger, and be kind.', 'should + الفعل للنصيحة: الابتعاد عن الحسد وضبط الغضب واللطف مع الآخرين.'),
};

const patchEvidence = (chapter: LearningBlueprintChapter): LearningBlueprintChapter['evidencePoints'] =>
  chapter.evidencePoints.map(point => {
    if (chapter.chapterId === 8 && point.id === 'adam-a2-c8-qabil-offering') {
      return {
        ...point,
        claim: T('The chapter’s final lesson is that real goodness means giving the best and the most loved.', 'الدرس الأخير في الفصل هو أن الخير الحقيقي يعني أن نعطي أفضل وأحب ما نملك.'),
        evidence: T('Real goodness is giving the best and the most loved', 'الخير الحقيقي هو أن نعطي أفضل وأحب ما نملك'),
      };
    }
    return point;
  });

const withFeedback = (
  exercise: BlueprintAssessmentItem['exercise'],
  retry: LocalizedText,
): BlueprintAssessmentItem['exercise'] => ({
  en: {
    ...exercise.en,
    feedback: { correct: `Correct. ${exercise.en.explanation}`, incorrect: retry.en },
  },
  ar: {
    ...exercise.ar,
    feedback: { correct: `صحيح. ${exercise.ar.explanation}`, incorrect: retry.ar },
  },
});

const patchSelfStudy = (chapter: LearningBlueprintChapter, language: 'en' | 'ar') => {
  const guide = chapter.selfStudyGuide[language];
  const grammar = grammarByChapter[chapter.chapterId]?.[language] ?? guide.grammarFocus ?? '';
  return {
    ...guide,
    grammarFocus: grammar,
    pedagogy: language === 'en'
      ? 'Read to understand the chapter, find the supporting detail, correct mistakes, and use what you learned in short A2 language.'
      : 'اقرأ لفهم الفصل والعثور على المعلومة الداعمة وتصحيح الأخطاء واستخدام ما تعلمته بلغة قصيرة تناسب A2.',
    studySequence: language === 'en'
      ? [
          'Read the two chapter goals before you begin.',
          'Look at the title and image and predict one idea.',
          'Read once for the main meaning without stopping at every unknown word.',
          'Read again and mark the details that answer the two goals.',
          `Notice the key words and this language pattern: ${grammar}`,
          'Do the Quick Challenge from memory, then check the supporting sentence.',
          'If an answer is wrong, use the retry hint and reread only the sentence you need.',
          'Finish with one short spoken or written answer using an accurate chapter detail.',
        ]
      : [
          'اقرأ هدفي الفصل قبل أن تبدأ.',
          'انظر إلى العنوان والصورة وتوقع فكرة واحدة.',
          'اقرأ مرة لفهم المعنى الرئيس من دون التوقف عند كل كلمة غير معروفة.',
          'اقرأ مرة أخرى وحدد المعلومات التي تجيب عن الهدفين.',
          `لاحظ الكلمات الأساسية وهذا النمط اللغوي: ${grammar}`,
          'نفّذ التحدي السريع من الذاكرة ثم تحقق من الجملة الداعمة.',
          'إذا كانت الإجابة خاطئة، استخدم تلميح إعادة المحاولة وأعد قراءة الجملة التي تحتاجها فقط.',
          'اختم بإجابة شفوية أو كتابية قصيرة تستخدم معلومة صحيحة من الفصل.',
        ],
    repairStrategy: language === 'en'
      ? ['Read the retry hint.', 'Find the exact sentence it points to.', 'Say the corrected idea in your own A2 words.', 'Try the activity again.']
      : ['اقرأ تلميح إعادة المحاولة.', 'اعثر على الجملة التي يشير إليها.', 'قل الفكرة الصحيحة بكلمات بسيطة تناسب A2.', 'حاول النشاط مرة أخرى.'],
  };
};

export const applyAdamA2FinalPedagogy = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const evidencePoints = patchEvidence(chapter);
  const assessmentItems = chapter.assessmentItems.map(item => {
    const spec = overrides[item.id];
    if (!spec) return item;

    const learningPointId = spec.learningPointId ?? item.learningPointId;
    const point = evidencePoints.find(candidate => candidate.id === learningPointId);
    if (!point) return item;

    const baseExercise = spec.exercise ?? item.exercise;
    const retry = spec.retry ?? item.quality?.feedback.incorrect ?? T(baseExercise.en.feedback.incorrect, baseExercise.ar.feedback.incorrect);
    const exercise = withFeedback(baseExercise, retry);
    const quality = item.quality
      ? {
          ...item.quality,
          ...(spec.demand ? { cognitiveDemand: spec.demand } : {}),
          assessmentPurpose: T(`Check understanding of this chapter idea: ${point.claim.en}`, `تحقق من فهم فكرة الفصل هذه: ${point.claim.ar}`),
          successEvidence: T('The response matches the linked chapter evidence.', 'تتفق الاستجابة مع دليل الفصل المرتبط.'),
          misconceptionTargets: [retry],
          feedback: {
            ...item.quality.feedback,
            correct: T(exercise.en.feedback.correct, exercise.ar.feedback.correct),
            incorrect: retry,
          },
        }
      : item.quality;

    return {
      ...item,
      learningPointId,
      learningOutcomeId: point.learningOutcomeId,
      exercise,
      quality,
    };
  });

  const grammar = grammarByChapter[chapter.chapterId];
  return {
    ...chapter,
    evidencePoints,
    assessmentItems,
    learningMap: chapter.learningMap
      ? {
          ...chapter.learningMap,
          languageTargets: {
            ...chapter.learningMap.languageTargets,
            grammar: grammar ? [grammar] : chapter.learningMap.languageTargets.grammar,
          },
        }
      : chapter.learningMap,
    teacherGuide: {
      en: { ...chapter.teacherGuide.en, grammarFocus: grammar?.en ?? chapter.teacherGuide.en.grammarFocus },
      ar: { ...chapter.teacherGuide.ar, grammarFocus: grammar?.ar ?? chapter.teacherGuide.ar.grammarFocus },
    },
    selfStudyGuide: {
      en: patchSelfStudy(chapter, 'en'),
      ar: patchSelfStudy(chapter, 'ar'),
    },
  };
};
