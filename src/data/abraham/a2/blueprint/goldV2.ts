import type {
  BlueprintAssessmentItem,
  BlueprintGuideContent,
  LearningBlueprintChapter,
  LocalizedText,
} from '../../../learningBlueprint';
import type {
  BlueprintCognitiveDemandV2,
  BlueprintLearningOutcomeV2,
  BlueprintUniversalCompetency,
} from '../../../learningQualityContract';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const CEFR = 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors';

const L = (en: string, ar: string): LocalizedText => ({ en, ar });

const chapterLanguage: Record<number, { grammar: LocalizedText; prior: LocalizedText; misconception: LocalizedText; transfer: LocalizedText; reflection: LocalizedText }> = {
  1: {
    grammar: L('Use could not to describe inability: the stone objects could not hear, talk, move, or understand.', 'استخدم التعبير عن عدم الاستطاعة لوصف عجز الأصنام عن السمع والكلام والحركة والفهم.'),
    prior: L('Learners can use Simple Past and basic can/cannot language.', 'يستطيع المتعلمون استخدام الماضي البسيط والتعبير الأساسي عن الاستطاعة وعدمها.'),
    misconception: L('Learners may remember only where Abraham lived and miss why he rejected powerless objects.', 'قد يتذكر المتعلمون مكان حياة إبراهيم ويغفلون سبب رفضه للأشياء العاجزة.'),
    transfer: L('Write two A2 sentences: what people did and what the stone objects could not do.', 'اكتب جملتين بمستوى A2: ماذا فعل الناس وماذا لم تستطع الأشياء الحجرية فعله.'),
    reflection: L('Which detail best explains Abraham’s thinking: where he lived or what the objects could not do?', 'أي تفصيل يوضح تفكير إبراهيم أكثر: مكان عيشه أم ما لم تستطع الأصنام فعله؟'),
  },
  2: {
    grammar: L('Use Simple Past for repeated story actions and because for a stated reason.', 'استخدم الماضي البسيط لأفعال القصة و«لأن» لذكر السبب الصريح.'),
    prior: L('Recall that Abraham already questioned powerless stone objects.', 'استرجع أن إبراهيم كان يشكك بالفعل في الأشياء الحجرية العاجزة.'),
    misconception: L('Learners may treat the Mardukh detail as random humour instead of evidence that Abraham questioned the explanation.', 'قد يتعامل المتعلمون مع تفصيل مردوخ كفكاهة عشوائية بدل كونه دليلًا على تساؤل إبراهيم.'),
    transfer: L('Use because in one sentence to explain why Abraham found the explanation ridiculous.', 'استخدم «لأن» في جملة واحدة لشرح سبب استغراب إبراهيم من التفسير.'),
    reflection: L('What made the explanation sound unreasonable to Abraham?', 'ما الذي جعل التفسير يبدو غير منطقي لإبراهيم؟'),
  },
  3: {
    grammar: L('Use could / could not for possibility and ability, and when for simple event links.', 'استخدم could/could not للتعبير عن الاحتمال أو الاستطاعة وwhen لربط الأحداث ببساطة.'),
    prior: L('Learners can identify the star and moon and follow before/after events.', 'يستطيع المتعلمون تحديد النجم والقمر وتتبع أحداث قبل/بعد.'),
    misconception: L('Learners may think Abraham accepted the star or moon instead of testing the idea and rejecting what disappeared.', 'قد يظن المتعلمون أن إبراهيم قبل النجم أو القمر بدل اختبار الفكرة ورفض ما يغيب.'),
    transfer: L('Complete: “It disappeared, so Abraham understood that …” with one accurate A2 sentence.', 'أكمل معنى «غاب، لذلك فهم إبراهيم أن…» بجملة دقيقة تناسب A2.'),
    reflection: L('What repeated event helped Abraham reject both the star and the moon?', 'ما الحدث المتكرر الذي ساعد إبراهيم على رفض النجم والقمر؟'),
  },
  4: {
    grammar: L('Use comparatives such as bigger/brighter and First Conditional as it appears in the prayer: If …, I will …', 'استخدم المقارنة مثل bigger/brighter والشرط الأول كما ورد في الدعاء: If …, I will …'),
    prior: L('Recall why Abraham rejected the star and moon when they disappeared.', 'استرجع لماذا رفض إبراهيم النجم والقمر عندما غابا.'),
    misconception: L('Learners may focus on the sun being bigger and miss the Creator–creation distinction.', 'قد يركز المتعلمون على كون الشمس أكبر ويغفلون الفرق بين الخالق والمخلوق.'),
    transfer: L('Write one cause-result sentence explaining why the sun could not be the Creator.', 'اكتب جملة سبب ونتيجة تشرح لماذا لا يمكن أن تكون الشمس هي الخالق.'),
    reflection: L('Which idea mattered more than the sun’s size?', 'أي فكرة كانت أهم من حجم الشمس؟'),
  },
  5: {
    grammar: L('Use because to explain reasons and can/cannot to contrast power and powerlessness.', 'استخدم because لشرح الأسباب وcan/cannot للمقارنة بين القدرة والعجز.'),
    prior: L('Learners know Abraham now has a message to share with his people.', 'يعرف المتعلمون أن لدى إبراهيم الآن رسالة يبلغها لقومه.'),
    misconception: L('Learners may confuse following family tradition with evidence that the idols had power.', 'قد يخلط المتعلمون بين اتباع تقليد الآباء وبين وجود دليل على قدرة الأصنام.'),
    transfer: L('Compare in two short sentences what Allah can do and what the idols cannot do in the chapter.', 'قارن في جملتين قصيرتين ما يقدر الله عليه وما لا تستطيع الأصنام فعله في الفصل.'),
    reflection: L('Why was “our fathers did it” not an answer to Abraham’s question about power?', 'لماذا لم يكن قول «آباؤنا فعلوا ذلك» جوابًا عن سؤال إبراهيم حول القدرة؟'),
  },
  6: {
    grammar: L('Use when for event timing and Simple Past for a clear action sequence.', 'استخدم when لتوقيت الأحداث والماضي البسيط لتسلسل الأفعال.'),
    prior: L('Learners can sequence a short plan using first/then/in the end.', 'يستطيع المتعلمون ترتيب خطة قصيرة باستخدام أولًا/ثم/في النهاية.'),
    misconception: L('Learners may think the largest idol was left because Abraham respected it rather than because it was part of his plan.', 'قد يظن المتعلمون أن إبراهيم ترك الصنم الأكبر احترامًا له بدل كونه جزءًا من خطته.'),
    transfer: L('Retell the plan in three short ordered sentences.', 'أعد سرد الخطة في ثلاث جمل قصيرة مرتبة.'),
    reflection: L('Which action shows that leaving the largest idol was intentional?', 'أي فعل يبين أن ترك الصنم الأكبر كان مقصودًا؟'),
  },
  7: {
    grammar: L('Use can/cannot and simple question forms to test a claim: Can it speak? Can it protect itself?', 'استخدم can/cannot وصيغ السؤال البسيطة لاختبار الادعاء: هل يستطيع الكلام؟ هل يستطيع حماية نفسه؟'),
    prior: L('Recall Abraham’s plan and the axe left with the largest idol.', 'استرجع خطة إبراهيم والفأس الذي تركه مع الصنم الأكبر.'),
    misconception: L('Learners may miss that the people’s own statement that idols cannot speak supports Abraham’s point.', 'قد يغفل المتعلمون أن اعتراف الناس بأن الأصنام لا تتكلم يدعم حجة إبراهيم.'),
    transfer: L('Write one question and one answer showing the contradiction in the people’s belief.', 'اكتب سؤالًا وجوابًا واحدًا يبين التناقض في اعتقاد الناس.'),
    reflection: L('Which sentence from the people gives Abraham evidence for his argument?', 'أي جملة قالها الناس أعطت إبراهيم دليلًا على حجته؟'),
  },
  8: {
    grammar: L('Use because for reason and so … that for degree/result as found in the chapter.', 'استخدم because للسبب وso … that للدرجة والنتيجة كما ورد في الفصل.'),
    prior: L('Recall that the people knew Abraham’s argument was right but refused to accept it.', 'استرجع أن الناس عرفوا صحة حجة إبراهيم لكنهم رفضوا قبولها.'),
    misconception: L('Learners may confuse Abraham’s calmness with lack of danger; the chapter says the fire was extremely dangerous.', 'قد يخلط المتعلمون بين هدوء إبراهيم وعدم وجود خطر؛ فالفصل يذكر أن النار كانت شديدة الخطورة.'),
    transfer: L('Write: “The fire was dangerous, but Abraham … because …”', 'اكتب معنى: «كانت النار خطيرة، لكن إبراهيم… لأنه…».'),
    reflection: L('How can the chapter show both danger and calmness at the same time?', 'كيف يبين الفصل الخطر والهدوء في الوقت نفسه؟'),
  },
  9: {
    grammar: L('Use became/turned into for change and but to contrast the miracle with the people’s response.', 'استخدم became/turned into للتغير وbut للمقارنة بين المعجزة ورد الناس.'),
    prior: L('Recall why Abraham trusted Allah before he was thrown into the fire.', 'استرجع سبب توكل إبراهيم على الله قبل إلقائه في النار.'),
    misconception: L('Learners may assume the miracle made everyone believe, but the chapter says the people remained arrogant.', 'قد يظن المتعلمون أن المعجزة جعلت الجميع يؤمنون، لكن الفصل يقول إنهم بقوا متكبرين.'),
    transfer: L('Write one “The fire became …” sentence and one “But the people …” sentence.', 'اكتب جملة بمعنى «أصبحت النار…» وأخرى بمعنى «لكن الناس…».'),
    reflection: L('What changed in the fire, and what did not change in the people?', 'ما الذي تغير في النار وما الذي لم يتغير في الناس؟'),
  },
  10: {
    grammar: L('Use can/could not for ability and contrast, and make simple challenge questions with Can you …?', 'استخدم can/could not للاستطاعة والمقارنة وصغ أسئلة تحد بسيطة بـ Can you …?'),
    prior: L('Learners can distinguish a claim from evidence that proves or disproves it.', 'يستطيع المتعلمون التمييز بين الادعاء والدليل الذي يثبته أو ينفيه.'),
    misconception: L('Learners may accept Nimrod’s example as proof of giving life rather than see that Abraham changes the test to control of the sun.', 'قد يقبل المتعلمون مثال نمرود كدليل على إحياء الناس بدل ملاحظة أن إبراهيم نقل الاختبار إلى التحكم بالشمس.'),
    transfer: L('In two short sentences, state Nimrod’s claim and Abraham’s challenge.', 'في جملتين قصيرتين، اذكر ادعاء نمرود وتحدي إبراهيم.'),
    reflection: L('Why did the sun challenge test Nimrod’s claim more clearly?', 'لماذا اختبر تحدي الشمس ادعاء نمرود بصورة أوضح؟'),
  },
  11: {
    grammar: L('Use decided to + verb for a decision and because/so for reason and result.', 'استخدم decided to + verb للقرار وbecause/so للسبب والنتيجة.'),
    prior: L('Learners can name Babylon and identify that most people there rejected the message.', 'يستطيع المتعلمون تسمية بابل وتحديد أن أغلب أهلها رفضوا الرسالة.'),
    misconception: L('Learners may treat the journey as random travel and miss its stated purpose of carrying the message to other lands.', 'قد يتعامل المتعلمون مع الرحلة كسفر عشوائي ويغفلون هدفها المعلن في تبليغ الرسالة لأراض أخرى.'),
    transfer: L('Write one sentence explaining why Abraham left Babylon and one naming the family’s destination setting.', 'اكتب جملة تشرح لماذا غادر إبراهيم بابل وأخرى تسمي مكان وصول الأسرة.'),
    reflection: L('Which reason in the chapter connects leaving Babylon with Abraham’s mission?', 'أي سبب في الفصل يربط مغادرة بابل بمهمة إبراهيم؟'),
  },
  12: {
    grammar: L('Use there was / there was no to describe the valley and will for Hagar’s confident expectation.', 'استخدم there was / there was no لوصف الوادي وwill لتوقع هاجر الواثق.'),
    prior: L('Recall the quiet valley near Safa and Marwah from Chapter 11.', 'استرجع الوادي الهادئ قرب الصفا والمروة من الفصل 11.'),
    misconception: L('Learners may confuse trust with doing nothing; Hagar trusted Allah and also actively searched for food and water.', 'قد يخلط المتعلمون بين التوكل وعدم العمل؛ فقد وثقت هاجر بالله وبحثت أيضًا عن الطعام والماء.'),
    transfer: L('Write two linked sentences: one about Hagar’s trust and one about what she did.', 'اكتب جملتين مترابطتين: واحدة عن توكل هاجر وأخرى عما فعلته.'),
    reflection: L('How do trust and action appear together in this chapter?', 'كيف يظهر التوكل والعمل معًا في هذا الفصل؟'),
  },
  13: {
    grammar: L('Use suddenly/then/later for sequence and because of for a simple cause-result chain.', 'استخدم suddenly/then/later للتسلسل وbecause of لعلاقة سبب ونتيجة بسيطة.'),
    prior: L('Recall Hagar’s search for water in the empty valley.', 'استرجع بحث هاجر عن الماء في الوادي الخالي.'),
    misconception: L('Learners may remember only the name Zamzam and miss the cause-result chain from water to settlement and Mecca.', 'قد يتذكر المتعلمون اسم زمزم فقط ويغفلون سلسلة السبب والنتيجة من الماء إلى الاستقرار وبناء مكة.'),
    transfer: L('Complete a three-step chain: water appeared → more people came → …', 'أكمل سلسلة من ثلاث خطوات: ظهر الماء ← جاء مزيد من الناس ← …'),
    reflection: L('Which result happened because the water was there?', 'أي نتيجة حدثت بسبب وجود الماء؟'),
  },
  14: {
    grammar: L('Use will for willingness and no/any for the final message: no partner, rival, or helper.', 'استخدم will لإظهار الاستعداد وno/any في الرسالة الختامية: لا شريك ولا ند ولا معين.'),
    prior: L('Recall Ishmael, Mecca, and the family’s life near Zamzam.', 'استرجع إسماعيل ومكة وحياة الأسرة قرب زمزم.'),
    misconception: L('Learners may focus only on who built the Ka’ba and miss the chapter’s final message about Allah being unique.', 'قد يركز المتعلمون فقط على من بنى الكعبة ويغفلون الرسالة الختامية عن وحدانية الله.'),
    transfer: L('Write two short sentences: who worked together and what final message the chapter gives.', 'اكتب جملتين قصيرتين: من عمل معًا وما الرسالة الختامية التي يقدمها الفصل.'),
    reflection: L('How does the building task connect with the final message of the chapter?', 'كيف ترتبط مهمة البناء بالرسالة الختامية للفصل؟'),
  },
};

const focusCompetencies = (focus: string): BlueprintUniversalCompetency[] => {
  if (focus === 'sequence' || focus === 'turning-point') return ['sequence-events', 'comprehend-explicit-information'];
  if (focus === 'cause-result') return ['cause-effect-reasoning', 'comprehend-explicit-information'];
  if (focus === 'comparison') return ['compare-and-contrast', 'comprehend-explicit-information'];
  if (focus === 'motivation' || focus === 'character-action') return ['character-and-motivation', 'comprehend-explicit-information'];
  if (focus === 'theme' || focus === 'inference') return ['infer-from-evidence', 'comprehend-explicit-information'];
  return ['comprehend-explicit-information'];
};

const makeOutcome = (
  chapterId: number,
  index: number,
  objective: LocalizedText,
  evidence: LearningBlueprintChapter['evidencePoints'],
): BlueprintLearningOutcomeV2 => ({
  id: `abraham-a2-c${chapterId}-o${index + 1}`,
  objective,
  successCriteria: evidence.map(point => point.claim),
  universalCompetencies: Array.from(new Set(evidence.flatMap(point => focusCompetencies(point.focus)))),
  cefrAlignment: [{
    level: 'A2',
    mode: 'reception',
    descriptorReference: 'Overall reading comprehension',
    learnerCanDo: L(
      `I can understand this chapter well enough to ${objective.en.charAt(0).toLowerCase()}${objective.en.slice(1)}`,
      `أستطيع فهم هذا الفصل بما يكفي لتحقيق الهدف: ${objective.ar}`,
    ),
    rationale: L(
      'The learner works with short narrative prose, explicit information, sequence, comparison, and simple cause-result relationships appropriate to A2 reception.',
      'يعمل المتعلم مع نص سردي قصير ومعلومات صريحة وتسلسل ومقارنة وعلاقات سبب ونتيجة بسيطة تناسب الاستقبال في مستوى A2.',
    ),
    referenceUrl: CEFR,
  }],
  tymmAlignment: [{
    domain: 'foreign-language-field-skill',
    code: 'YDAB2',
    officialLabel: 'Okuma-Anlamlandırma Becerisi',
    strength: 'direct',
    rationale: L(
      'The learner locates and connects information in the chapter to construct meaning.',
      'يحدد المتعلم معلومات الفصل ويربط بينها لبناء المعنى.',
    ),
    observableBehaviour: L(
      'The learner identifies the relevant chapter detail and gives a short text-supported response.',
      'يحدد المتعلم التفصيل المناسب من الفصل ويقدم استجابة قصيرة مدعومة بالنص.',
    ),
    referenceUrl: TYMM_FOREIGN,
  }],
});

const demandFor = (item: BlueprintAssessmentItem, chapter: LearningBlueprintChapter): BlueprintCognitiveDemandV2 => {
  const point = chapter.evidencePoints.find(evidence => evidence.id === item.learningPointId);
  switch (point?.focus) {
    case 'sequence': return 'sequence';
    case 'cause-result': return 'connect';
    case 'comparison': return 'compare';
    case 'motivation':
    case 'character-action': return 'connect';
    case 'theme':
    case 'inference': return 'infer';
    default: return 'identify';
  }
};

const upgradeGuide = (
  guide: BlueprintGuideContent,
  chapter: LearningBlueprintChapter,
  language: 'en' | 'ar',
  kind: 'teacher' | 'self',
): BlueprintGuideContent => {
  const spec = chapterLanguage[chapter.chapterId];
  const outcomeIds = [`abraham-a2-c${chapter.chapterId}-o1`, `abraham-a2-c${chapter.chapterId}-o2`];
  const objectives = chapter.objectives.map(item => item[language]);
  const evidenceClaims = chapter.evidencePoints.map(point => point.claim[language]);
  const isEn = language === 'en';

  if (kind === 'teacher') {
    return {
      ...guide,
      grammarFocus: spec.grammar[language],
      learningOutcomeIds: outcomeIds,
      objectives,
      priorKnowledge: [spec.prior[language]],
      anticipatedMisconceptions: [spec.misconception[language]],
      preReading: [isEn ? 'Use the title and image for one purposeful prediction; do not give away the chapter answer.' : 'استخدم العنوان والصورة لتوقع واحد هادف دون كشف إجابة الفصل.'],
      whileReading: [isEn ? 'Read once for the main event, then reread to locate evidence for the two outcomes.' : 'اقرأ مرة للحدث الرئيس ثم أعد القراءة لتحديد الدليل لهدفي التعلم.'],
      postReading: [spec.transfer[language]],
      expectedResponses: evidenceClaims.slice(0, 4),
      formativeAssessment: [isEn ? 'Quick Challenge plus one oral or written evidence check.' : 'التحدي السريع مع فحص دليل شفهي أو كتابي واحد.'],
      transferTask: spec.transfer[language],
      reflectionPrompt: spec.reflection[language],
    };
  }

  return {
    ...guide,
    grammarFocus: spec.grammar[language],
    learningOutcomeIds: outcomeIds,
    objectives,
    studySequence: isEn
      ? ['Read the two goals.', 'Predict from the title or image.', 'Read/listen once for the main event.', 'Read again and mark one supporting detail for each goal.', 'Check Word Notes in context.', 'Complete the Quick Challenge.', 'If wrong, return only to the relevant sentence and try again.', 'Finish the short transfer task.']
      : ['اقرأ هدفي الفصل.', 'ضع توقعًا من العنوان أو الصورة.', 'اقرأ/استمع مرة للحدث الرئيس.', 'أعد القراءة وحدد معلومة داعمة لكل هدف.', 'راجع ملاحظات المفردات في السياق.', 'نفذ التحدي السريع.', 'إذا أخطأت فارجع فقط إلى الجملة المناسبة وحاول من جديد.', 'اختم بمهمة النقل القصيرة.'],
    selfCheck: isEn
      ? ['Can I explain the two chapter goals without copying?', 'Can I point to the story detail that supports my answer?']
      : ['هل أستطيع شرح هدفي الفصل دون نسخ؟', 'هل أستطيع تحديد التفصيل الذي يدعم إجابتي؟'],
    repairStrategy: isEn
      ? ['Read the feedback hint.', 'Find the named event or sentence.', 'Explain what you misunderstood in a few words, then retry.']
      : ['اقرأ تلميح التغذية الراجعة.', 'اعثر على الحدث أو الجملة المشار إليها.', 'حدد باختصار ما فهمته خطأ ثم حاول من جديد.'],
    transferTask: spec.transfer[language],
    reflectionPrompt: spec.reflection[language],
  };
};

export const upgradeAbrahamA2ChapterToGoldV2 = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const spec = chapterLanguage[chapter.chapterId];
  if (!spec) throw new Error(`[Abraham A2 Gold] Missing chapter specification ${chapter.chapterId}.`);

  const firstEvidence = chapter.evidencePoints.slice(0, 2);
  const secondEvidence = chapter.evidencePoints.slice(2, 4);
  const learningOutcomes = [
    makeOutcome(chapter.chapterId, 0, chapter.objectives[0], firstEvidence),
    makeOutcome(chapter.chapterId, 1, chapter.objectives[1], secondEvidence),
  ];
  const outcomeByEvidence = new Map<string, string>();
  firstEvidence.forEach(point => outcomeByEvidence.set(point.id, learningOutcomes[0].id));
  secondEvidence.forEach(point => outcomeByEvidence.set(point.id, learningOutcomes[1].id));

  return {
    ...chapter,
    learningMap: {
      learningOutcomes,
      languageTargets: {
        reading: chapter.objectives,
        vocabulary: chapter.vocabularyTargets.map(target => L(target.en.word, target.ar.word)),
        grammar: [spec.grammar],
      },
      transferGoal: spec.transfer,
    },
    evidencePoints: chapter.evidencePoints.map(point => ({ ...point, learningOutcomeId: outcomeByEvidence.get(point.id) })),
    assessmentItems: chapter.assessmentItems.map(item => ({
      ...item,
      learningOutcomeId: outcomeByEvidence.get(item.learningPointId),
      quality: {
        cognitiveDemand: demandFor(item, chapter),
        assessmentPurpose: L('Check whether the learner can use the targeted chapter idea accurately.', 'التحقق من قدرة المتعلم على استخدام فكرة الفصل المستهدفة بدقة.'),
        successEvidence: L('The learner selects or produces the response supported by the linked chapter evidence.', 'يختار المتعلم أو ينتج الاستجابة التي يدعمها دليل الفصل المرتبط.'),
        misconceptionTargets: [spec.misconception],
        feedback: {
          correct: L('The response matches the linked chapter evidence.', 'تطابق الاستجابة دليل الفصل المرتبط.'),
          incorrect: L('Return to the linked chapter detail and check the relationship before trying again.', 'ارجع إلى تفصيل الفصل المرتبط وتحقق من العلاقة قبل المحاولة من جديد.'),
          rationale: L('Feedback redirects the learner to evidence rather than giving an unrelated rule.', 'تعيد التغذية الراجعة المتعلم إلى الدليل بدل تقديم قاعدة غير مرتبطة.'),
        },
      },
    })),
    teacherGuide: {
      en: upgradeGuide(chapter.teacherGuide.en, chapter, 'en', 'teacher'),
      ar: upgradeGuide(chapter.teacherGuide.ar, chapter, 'ar', 'teacher'),
    },
    selfStudyGuide: {
      en: upgradeGuide(chapter.selfStudyGuide.en, chapter, 'en', 'self'),
      ar: upgradeGuide(chapter.selfStudyGuide.ar, chapter, 'ar', 'self'),
    },
  };
};
