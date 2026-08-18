import type {
  BlueprintGuideContent,
  LearningBlueprintChapter,
  LocalizedText,
} from '../../../learningBlueprint';
import type {
  BlueprintCognitiveDemandV2,
  BlueprintLearningOutcomeV2,
  BlueprintUniversalCompetency,
} from '../../../learningQualityContract';
import { L } from './helpers';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const CEFR = 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors';
const T = (en: string, ar: string): LocalizedText => L(en, ar);

const grammarByChapter: Record<number, LocalizedText> = {
  1: T('Simple Past for finished events and because for a stated reason.', 'الماضي البسيط للأحداث المنتهية، و«لأن» لذكر السبب.'),
  2: T('Simple Past and sequence language: saw, woke up, called, said, then.', 'الماضي البسيط ولغة ترتيب الأحداث: رأى، استيقظ، دعا، قال، ثم.'),
  3: T('Could/could not for past possibility or ability, plus so for a simple result.', 'could/could not للإمكان أو القدرة في الماضي، وso لنتيجة بسيطة.'),
  4: T('Simple Past for events, different from for comparison, and will for intention.', 'الماضي البسيط للأحداث، والمقارنة بمعنى «مختلف عن»، وwill للنية.'),
  5: T('Simple Past for life events and was ready to + verb for willingness.', 'الماضي البسيط لأحداث الحياة، وwas ready to + فعل للاستعداد.'),
  6: T('Simple Past with because; accidentally/not on purpose to distinguish intention.', 'الماضي البسيط مع because، والتمييز بين accidentally وnot on purpose.'),
  7: T('Simple Past for travel and Wh-questions with why/where for reasons and places.', 'الماضي البسيط للسفر، وأسئلة why/where للسؤال عن السبب والمكان.'),
  8: T('Could/could not for past ability and because/so for cause and result.', 'could/could not للقدرة في الماضي، وbecause/so للسبب والنتيجة.'),
  9: T('Simple Past with because for reasons and infinitives after decided/needed.', 'الماضي البسيط مع because للسبب، والمصدر بعد decided/needed.'),
  10: T('Past Progressive with Simple Past for background and a new event; will for an immediate plan.', 'الماضي المستمر مع الماضي البسيط للخلفية والحدث الجديد، وwill لخطة فورية.'),
  11: T('Imperatives in the quoted instructions and Simple Past for the mission sequence.', 'صيغة الأمر في التعليمات المقتبسة، والماضي البسيط لتسلسل الرسالة.'),
  12: T('Simple Past and then for ordered actions; called + noun for how Pharaoh described the signs.', 'الماضي البسيط وthen لترتيب الأفعال، وبنية called + اسم لوصف فرعون للآيات.'),
  13: T('Then/after for sequence, but for contrast, and because for Pharaoh’s stated reason.', 'then/after للتسلسل، وbut للمقارنة، وbecause للسبب المذكور عن فرعون.'),
  14: T('Must for strong obligation, will for planned departure, and Simple Past for the journey.', 'must للإلزام القوي، وwill لخطة المغادرة، والماضي البسيط للرحلة.'),
  15: T('Was/were for the trapped situation, will for reassurance, and Simple Past for the sea sequence.', 'was/were لوصف موقف الحصار، وwill للطمأنة، والماضي البسيط لتسلسل البحر.'),
  16: T('Simple Past for the final sequence and can/cannot for the stated lesson about power and ownership.', 'الماضي البسيط للتسلسل الختامي، وcan/cannot للدرس المذكور عن القدرة والملكية.'),
};

const misconceptionByChapter: Record<number, LocalizedText> = {
  1: T('Learners may remember that Pharaoh was cruel but miss the fear of losing control that the chapter gives as a reason.', 'قد يتذكر المتعلمون أن فرعون كان قاسيًا لكنهم يفوتون سبب خوفه من فقدان السيطرة.'),
  2: T('Learners may mix the dream itself with the interpretation and the order that came later.', 'قد يخلط المتعلمون بين الحلم نفسه وتفسيره والأمر الذي جاء بعد ذلك.'),
  3: T('Learners may treat the basket as abandonment instead of connecting it with the instruction and promise of protection in the chapter.', 'قد يفهم المتعلمون التابوت على أنه ترك للطفل بدل ربطه بالتعليمات ووعد الحفظ في الفصل.'),
  4: T('Learners may remember only that Asiye found Moses and miss the contrast between her character and Pharaoh’s.', 'قد يتذكر المتعلمون فقط أن آسية وجدت موسى ويفوتون الفرق بينها وبين فرعون.'),
  5: T('Learners may confuse Moses growing up in Pharaoh’s house with believing that Pharaoh was a god.', 'قد يخلط المتعلمون بين نشأة موسى في بيت فرعون وبين الاعتقاد بأن فرعون إله.'),
  6: T('Learners may describe the death as intentional even though the chapter repeatedly says it happened accidentally.', 'قد يصف المتعلمون الموت بأنه متعمد مع أن الفصل يكرر أنه حدث عن غير قصد.'),
  7: T('Learners may think Pharaoh also ruled Midian and miss why the new place changed Moses’s situation.', 'قد يظن المتعلمون أن فرعون كان يحكم مدين أيضًا ويفوتون سبب تغير وضع موسى هناك.'),
  8: T('Learners may remember that Moses helped but miss the cause-result link between his help and the sisters’ early return.', 'قد يتذكر المتعلمون أن موسى ساعد فقط ويفوتون علاقة السبب والنتيجة بين مساعدته وعودتهما المبكرة.'),
  9: T('Learners may remember the job but miss why Moses accepted it and how it became part of a new life in Midian.', 'قد يتذكر المتعلمون العمل لكنهم يفوتون سبب قبوله وكيف أصبح جزءًا من حياة جديدة في مدين.'),
  10: T('Learners may jump directly to the snake and miss why Moses first went toward the fire and what he heard before the sign.', 'قد يقفز المتعلمون مباشرة إلى الثعبان ويفوتون سبب توجه موسى إلى النار وما سمعه قبل الآية.'),
  11: T('Learners may mix the shining-hand sign with Moses’s mission and the role of Harun.', 'قد يخلط المتعلمون بين آية اليد المضيئة ورسالة موسى ودور هارون.'),
  12: T('Learners may treat Pharaoh’s word “magic” as the narrator’s explanation instead of Pharaoh’s response to the signs.', 'قد يفهم المتعلمون كلمة «سحر» على أنها تفسير القصة بدل كونها رد فرعون على الآيات.'),
  13: T('Learners may give the same response to the magicians and Pharaoh although the chapter clearly contrasts belief and arrogance.', 'قد ينسب المتعلمون الرد نفسه للسحرة وفرعون مع أن الفصل يقارن بوضوح بين الإيمان والتكبر.'),
  14: T('Learners may remember the night departure but miss why secrecy and the slow caravan mattered.', 'قد يتذكر المتعلمون الخروج ليلًا ويفوتون أهمية السرية وسبب بطء القافلة.'),
  15: T('Learners may remember the sea opening without first understanding why the people felt trapped and how Moses responded to their fear.', 'قد يتذكر المتعلمون انشقاق البحر دون فهم سبب شعور القوم بالحصار وكيف رد موسى على خوفهم.'),
  16: T('Learners may focus only on Pharaoh’s death and miss the two explicit lessons in the final sentences.', 'قد يركز المتعلمون فقط على موت فرعون ويفوتون الدرسين الصريحين في الجمل الختامية.'),
};

const transferByChapter: Record<number, LocalizedText> = {
  1: T('Write two short sentences linking fear, power, and unfair treatment in Chapter 1.', 'اكتب جملتين قصيرتين تربطان الخوف والسلطة والمعاملة الظالمة في الفصل الأول.'),
  2: T('Retell the chapter in three steps: dream → interpretation → order.', 'أعد سرد الفصل في ثلاث خطوات: الحلم ← التفسير ← الأمر.'),
  3: T('Explain in two A2 sentences how worry and trust appear together in Moses’s mother’s actions.', 'اشرح في جملتين بمستوى A2 كيف يظهر القلق والثقة معًا في تصرف أم موسى.'),
  4: T('Write one comparison sentence about Asiye and Pharaoh and one sentence about Moses’s sister.', 'اكتب جملة مقارنة عن آسية وفرعون وجملة عن أخت موسى.'),
  5: T('Give two facts showing how Moses’s early life and character are connected in this chapter.', 'اذكر حقيقتين تبينان العلاقة بين حياة موسى المبكرة وصفته في هذا الفصل.'),
  6: T('Use “accidentally” and “because” in two short sentences about the event and Moses’s response.', 'استخدم معنى «عن غير قصد» و«لأن» في جملتين قصيرتين عن الحدث ورد موسى.'),
  7: T('Explain why Midian changed Moses’s situation and describe what he found there.', 'اشرح لماذا غيرت مدين وضع موسى وصف ما وجده هناك.'),
  8: T('Write a simple cause-result chain: sisters wait → Moses helps → sisters return early.', 'اكتب سلسلة سبب ونتيجة بسيطة: تنتظر الفتاتان ← يساعد موسى ← تعودان مبكرًا.'),
  9: T('Write three short events showing how Moses built a new life in Midian.', 'اكتب ثلاثة أحداث قصيرة تبين كيف بنى موسى حياة جديدة في مدين.'),
  10: T('Retell the mountain scene using while/when or simple before/after language.', 'أعد سرد مشهد الجبل باستخدام while/when أو لغة قبل/بعد البسيطة.'),
  11: T('Give one sentence about the sign and one sentence about the message Moses had to take to Pharaoh.', 'اكتب جملة عن الآية وجملة عن الرسالة التي كان على موسى أن يبلغها لفرعون.'),
  12: T('Write one sentence for Moses’s message and one contrasting sentence for Pharaoh’s response.', 'اكتب جملة عن رسالة موسى وجملة مقابلة عن رد فرعون.'),
  13: T('Use “but” to compare the magicians’ response with Pharaoh’s response.', 'استخدم معنى «لكن» للمقارنة بين رد السحرة ورد فرعون.'),
  14: T('Give a four-step night-journey plan using must/will where appropriate.', 'قدّم خطة من أربع خطوات لرحلة الليل مستخدمًا معنى must/will عند الحاجة.'),
  15: T('Describe the trapped position, Moses’s reassurance, and the safe crossing in three short sentences.', 'صف الحصار وطمأنة موسى والعبور الآمن في ثلاث جمل قصيرة.'),
  16: T('State the two final lessons in your own short A2 sentences without adding outside information.', 'اذكر الدرسين الختاميين بجمل قصيرة من صياغتك دون إضافة معلومات خارجية.'),
};

const competenciesFor = (focuses: string[]): BlueprintUniversalCompetency[] => {
  const result = new Set<BlueprintUniversalCompetency>();
  focuses.forEach(focus => {
    if (focus === 'sequence' || focus === 'turning-point') result.add('sequence-events');
    if (focus === 'cause-result') result.add('cause-effect-reasoning');
    if (focus === 'character-action' || focus === 'motivation') result.add('character-and-motivation');
    if (focus === 'comparison') result.add('compare-and-contrast');
    if (focus === 'inference') result.add('infer-from-evidence');
    if (focus === 'main-idea' || focus === 'theme') result.add('identify-main-idea');
    if (focus === 'direct') result.add('comprehend-explicit-information');
  });
  if (!result.size) result.add('comprehend-explicit-information');
  return [...result];
};

const demandFor = (focus: string): BlueprintCognitiveDemandV2 => {
  if (focus === 'sequence' || focus === 'turning-point') return 'sequence';
  if (focus === 'cause-result') return 'connect';
  if (focus === 'comparison') return 'compare';
  if (focus === 'motivation' || focus === 'character-action') return 'explain';
  if (focus === 'inference' || focus === 'theme') return 'infer';
  return 'identify';
};

const retryFor = (focus: string, chapterId: number): LocalizedText => {
  if (focus === 'sequence' || focus === 'turning-point') return T(`Return to Chapter ${chapterId} and check what happens immediately before and after the key event.`, `ارجع إلى الفصل ${chapterId} وتحقق مما يحدث مباشرة قبل الحدث الرئيس وبعده.`);
  if (focus === 'cause-result') return T(`Return to Chapter ${chapterId} and find the reason and its result in the same part of the story.`, `ارجع إلى الفصل ${chapterId} وابحث عن السبب ونتيجته في الجزء نفسه من القصة.`);
  if (focus === 'comparison') return T(`Return to Chapter ${chapterId} and compare the two people, actions, or responses side by side.`, `ارجع إلى الفصل ${chapterId} وقارن الشخصين أو الفعلين أو الردين جنبًا إلى جنب.`);
  if (focus === 'motivation') return T(`Return to Chapter ${chapterId} and find the sentence that explains why the person acted.`, `ارجع إلى الفصل ${chapterId} وابحث عن الجملة التي تشرح سبب تصرف الشخص.`);
  if (focus === 'character-action') return T(`Return to Chapter ${chapterId} and match the person with the action the text gives them.`, `ارجع إلى الفصل ${chapterId} واربط الشخص بالفعل الذي يذكره النص.`);
  if (focus === 'theme') return T(`Return to Chapter ${chapterId} and reread the sentence that states the lesson or central idea.`, `ارجع إلى الفصل ${chapterId} وأعد قراءة الجملة التي تذكر الدرس أو الفكرة المركزية.`);
  return T(`Return to Chapter ${chapterId} and find the sentence that states this detail directly.`, `ارجع إلى الفصل ${chapterId} وابحث عن الجملة التي تذكر هذه المعلومة مباشرة.`);
};

const makeOutcome = (
  chapter: LearningBlueprintChapter,
  outcomeIndex: 0 | 1,
): BlueprintLearningOutcomeV2 => {
  const points = outcomeIndex === 0 ? chapter.evidencePoints.slice(0, 2) : chapter.evidencePoints.slice(2, 4);
  const objective = chapter.objectives[outcomeIndex] ?? chapter.objectives[0];
  const id = `moses-a2-c${chapter.chapterId}-o${outcomeIndex + 1}`;
  return {
    id,
    objective,
    successCriteria: points.map(point => point.claim),
    universalCompetencies: competenciesFor(points.map(point => point.focus)),
    cefrAlignment: [{
      level: 'A2',
      mode: 'reception',
      descriptorReference: 'Overall reading comprehension',
      learnerCanDo: T(
        `I can understand this short story chapter well enough to ${objective.en.charAt(0).toLowerCase()}${objective.en.slice(1)}`,
        `أستطيع فهم هذا الفصل القصير بما يكفي لتحقيق الهدف: ${objective.ar}`,
      ),
      rationale: T(
        'The learner works with short narrative prose, concrete events, clear relationships, and supported A2 meaning-making.',
        'يعمل المتعلم مع نص سردي قصير وأحداث واضحة وعلاقات مباشرة وبناء معنى مدعوم يناسب A2.',
      ),
      referenceUrl: CEFR,
    }],
    tymmAlignment: [{
      domain: 'foreign-language-field-skill',
      code: 'YDAB2',
      officialLabel: 'Okuma-Anlamlandırma Becerisi',
      strength: 'direct',
      rationale: T(
        'The learner locates and connects information in the chapter to demonstrate understanding rather than recalling outside information.',
        'يحدد المتعلم معلومات الفصل ويربطها لإظهار الفهم بدل استرجاع معلومات من خارج النص.',
      ),
      observableBehaviour: T(
        'The learner selects the relevant chapter evidence and gives a text-based answer.',
        'يختار المتعلم الدليل المناسب من الفصل ويقدم إجابة قائمة على النص.',
      ),
      referenceUrl: TYMM_FOREIGN,
    }],
  };
};

const qualityGuide = (
  guide: BlueprintGuideContent,
  chapter: LearningBlueprintChapter,
  language: 'en' | 'ar',
): BlueprintGuideContent => {
  const outcomeIds = [`moses-a2-c${chapter.chapterId}-o1`, `moses-a2-c${chapter.chapterId}-o2`];
  const objectives = chapter.objectives.map(objective => objective[language]);
  const evidence = chapter.evidencePoints.map(point => point.claim[language]);
  const misconception = misconceptionByChapter[chapter.chapterId][language];
  const transfer = transferByChapter[chapter.chapterId][language];
  const grammar = grammarByChapter[chapter.chapterId][language];
  const primary = guide.discussionPoints[0] ?? objectives[0];
  const secondary = guide.discussionPoints[1] ?? objectives[1];

  return {
    ...guide,
    objectives,
    grammarFocus: grammar,
    learningOutcomeIds: outcomeIds,
    priorKnowledge: [chapter.chapterId === 1
      ? (language === 'en' ? 'No earlier chapter knowledge is required; use only the story opening and familiar A2 past-event language.' : 'لا يحتاج الفصل إلى معرفة من فصل سابق؛ استخدم بداية القصة ولغة الماضي المألوفة في A2.')
      : (language === 'en' ? `Recall the main event of Chapter ${chapter.chapterId - 1} only when it helps connect the story sequence.` : `استرجع الحدث الرئيس في الفصل ${chapter.chapterId - 1} فقط عندما يساعد على ربط تسلسل القصة.`)],
    anticipatedMisconceptions: [misconception],
    preReading: [language === 'en'
      ? 'Use the title and image for one purposeful prediction. Do not reveal the Quick Challenge answer.'
      : 'استخدم العنوان والصورة لتوقع واحد هادف. لا تكشف إجابة التحدي السريع.'],
    whileReading: [primary, language === 'en' ? 'Ask learners to mark one sentence that supports each chapter objective.' : 'اطلب من المتعلمين تحديد جملة واحدة تدعم كل هدف من هدفي الفصل.'],
    postReading: [secondary, transfer],
    expectedResponses: evidence,
    formativeAssessment: [
      language === 'en' ? 'Quick Challenge response' : 'إجابة التحدي السريع',
      language === 'en' ? 'One text-evidence check after rereading' : 'فحص واحد للدليل من النص بعد إعادة القراءة',
      language === 'en' ? 'Short exit response using the chapter grammar focus where natural' : 'إجابة خروج قصيرة تستخدم التركيب المستهدف عندما يكون ذلك طبيعيًا',
    ],
    transferTask: transfer,
    reflectionPrompt: language === 'en'
      ? 'Which answer came directly from one sentence, and which answer needed you to connect two details?'
      : 'أي إجابة جاءت مباشرة من جملة واحدة، وأي إجابة احتاجت إلى ربط معلومتين؟',
  };
};

const qualitySelfStudyGuide = (
  guide: BlueprintGuideContent,
  chapter: LearningBlueprintChapter,
  language: 'en' | 'ar',
): BlueprintGuideContent => {
  const outcomeIds = [`moses-a2-c${chapter.chapterId}-o1`, `moses-a2-c${chapter.chapterId}-o2`];
  const objectives = chapter.objectives.map(objective => objective[language]);
  const transfer = transferByChapter[chapter.chapterId][language];
  const grammar = grammarByChapter[chapter.chapterId][language];
  return {
    ...guide,
    objectives,
    grammarFocus: grammar,
    learningOutcomeIds: outcomeIds,
    studySequence: language === 'en'
      ? [
          'Read the two chapter goals.',
          'Look at the title and image and make one prediction.',
          'Read or listen once for the main event without stopping for every word.',
          'Read again and find one sentence for each goal.',
          'Use Word Notes only after first guessing meaning from context.',
          'Complete the Quick Challenge without looking at the answer.',
          'If you are wrong, use the retry hint and reread only the relevant part.',
          'Finish with the short transfer task in your own A2 language.',
        ]
      : [
          'اقرأ هدفي الفصل.',
          'انظر إلى العنوان والصورة وضع توقعًا واحدًا.',
          'اقرأ أو استمع مرة لفهم الحدث الرئيس دون التوقف عند كل كلمة.',
          'اقرأ مرة أخرى وابحث عن جملة تدعم كل هدف.',
          'استخدم ملاحظات المفردات بعد محاولة فهم الكلمة من السياق أولًا.',
          'نفذ التحدي السريع دون النظر إلى الإجابة.',
          'إذا أخطأت، استخدم تلميح المحاولة وأعد قراءة الجزء المناسب فقط.',
          'اختم بمهمة النقل القصيرة بلغتك المناسبة لمستوى A2.',
        ],
    selfCheck: language === 'en'
      ? [`Can I ${objectives[0].charAt(0).toLowerCase()}${objectives[0].slice(1)}`, `Can I ${objectives[1].charAt(0).toLowerCase()}${objectives[1].slice(1)}`]
      : [`هل أستطيع تحقيق هذا الهدف: ${objectives[0]}`, `هل أستطيع تحقيق هذا الهدف: ${objectives[1]}`],
    repairStrategy: [
      language === 'en' ? 'Use the retry hint to identify the exact paragraph you need.' : 'استخدم تلميح المحاولة لتحديد الفقرة التي تحتاجها بالضبط.',
      language === 'en' ? 'Explain the corrected answer in one short sentence before moving on.' : 'اشرح الإجابة المصححة في جملة قصيرة قبل الانتقال.',
    ],
    transferTask: transfer,
    reflectionPrompt: language === 'en'
      ? 'What did I learn, what story evidence can I use, and what should I practise once more?'
      : 'ماذا تعلمت؟ وما الدليل الذي أستطيع استخدامه؟ وما الذي أحتاج إلى التدرب عليه مرة أخرى؟',
  };
};

export const upgradeMosesA2ChapterToGoldV2 = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const outcomes: [BlueprintLearningOutcomeV2, BlueprintLearningOutcomeV2] = [makeOutcome(chapter, 0), makeOutcome(chapter, 1)];
  const evidencePoints = chapter.evidencePoints.map((point, index) => ({
    ...point,
    learningOutcomeId: outcomes[index < 2 ? 0 : 1].id,
  }));
  const evidenceById = new Map(evidencePoints.map(point => [point.id, point]));

  const assessmentItems = chapter.assessmentItems.map(item => {
    const point = evidenceById.get(item.learningPointId);
    const learningOutcomeId = point?.learningOutcomeId ?? outcomes[0].id;
    const focus = point?.focus ?? 'direct';
    const retry = retryFor(focus, chapter.chapterId);
    const correct = T(`Correct. ${item.exercise.en.explanation}`, `صحيح. ${item.exercise.ar.explanation}`);
    const exercise = {
      en: { ...item.exercise.en, feedback: { correct: correct.en, incorrect: retry.en } },
      ar: { ...item.exercise.ar, feedback: { correct: correct.ar, incorrect: retry.ar } },
    };
    return {
      ...item,
      learningOutcomeId,
      exercise,
      quality: {
        cognitiveDemand: demandFor(focus),
        assessmentPurpose: T('Check the targeted chapter meaning using story evidence.', 'قياس معنى الفصل المستهدف باستخدام دليل من القصة.'),
        successEvidence: point?.claim ?? T('The learner selects the chapter-supported answer.', 'يختار المتعلم الإجابة التي يدعمها الفصل.'),
        misconceptionTargets: [misconceptionByChapter[chapter.chapterId]],
        feedback: {
          correct,
          incorrect: retry,
          rationale: T('The retry directs the learner back to the relevant reading move instead of simply revealing the answer.', 'يوجه تلميح المحاولة المتعلم إلى طريقة القراءة المناسبة بدل كشف الإجابة مباشرة.'),
        },
      },
    };
  });

  return {
    ...chapter,
    learningMap: {
      learningOutcomes: outcomes,
      languageTargets: {
        reading: chapter.objectives,
        listeningViewing: [T('Follow the same main events and relationships when listening to the chapter narration.', 'تتبع الأحداث والعلاقات الرئيسة نفسها عند الاستماع إلى سرد الفصل.')],
        vocabulary: [T('Use the chapter Word Notes to understand important meaning in context, not as isolated memorisation.', 'استخدم ملاحظات مفردات الفصل لفهم المعنى المهم في السياق لا للحفظ المنفصل.')],
        grammar: [grammarByChapter[chapter.chapterId]],
      },
      transferGoal: transferByChapter[chapter.chapterId],
    },
    evidencePoints,
    assessmentItems,
    teacherGuide: {
      en: qualityGuide(chapter.teacherGuide.en, chapter, 'en'),
      ar: qualityGuide(chapter.teacherGuide.ar, chapter, 'ar'),
    },
    selfStudyGuide: {
      en: qualitySelfStudyGuide(chapter.selfStudyGuide.en, chapter, 'en'),
      ar: qualitySelfStudyGuide(chapter.selfStudyGuide.ar, chapter, 'ar'),
    },
  };
};