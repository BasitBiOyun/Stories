import type { BlueprintAssessmentItem, BlueprintGuideContent, LearningBlueprintChapter, LocalizedText } from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2, BlueprintLearningOutcomeV2, BlueprintUniversalCompetency } from '../../../learningQualityContract';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const CEFR = 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors';
const L = (en: string, ar: string): LocalizedText => ({ en, ar });

const specs: Record<number, { grammar: LocalizedText; prior: LocalizedText; misconception: LocalizedText; transfer: LocalizedText; reflection: LocalizedText }> = {
  1: {
    grammar: L('Use Simple Past for biography and because for the clear language-result link.', 'استخدم الماضي البسيط للسيرة وbecause لعلاقة اللغة والنتيجة الواضحة.'),
    prior: L('Learners can recognise basic biography words such as poet, teacher, student, born, and died.', 'يستطيع المتعلمون تعرف كلمات السيرة الأساسية مثل شاعر ومعلم وتلميذ وولد وتوفي.'),
    misconception: L('Learners may focus on dates and miss why Yunus’s simple Turkish mattered to people and Turkish culture.', 'قد يركز المتعلمون على التواريخ ويغفلون سبب أهمية لغة يونس التركية البسيطة للناس والثقافة التركية.'),
    transfer: L('Write two short sentences: why people understood his poems and who guided his dervish learning.', 'اكتب جملتين قصيرتين: لماذا فهم الناس قصائده ومن وجّه تعلمه كدرويش.'),
    reflection: L('Which fact is only a date, and which fact explains Yunus’s influence?', 'أي معلومة مجرد تاريخ وأي معلومة تشرح تأثير يونس؟'),
  },
  2: {
    grammar: L('Use not only … but also for a simple addition and tried to + verb for repeated effort.', 'استخدم not only … but also للإضافة البسيطة وtried to + verb للجهد المتكرر.'),
    prior: L('Recall that dervish training aimed at moral character.', 'استرجع أن تدريب الدراويش كان يهدف إلى الأخلاق.'),
    misconception: L('Learners may think calling themselves poor meant having nothing; the chapter contrasts material wealth with a generous heart.', 'قد يظن المتعلمون أن تسمية أنفسهم فقراء تعني عدم امتلاك شيء؛ بينما يقارن الفصل المال بالقلب الكريم.'),
    transfer: L('Write one sentence about sharing and one about a bad habit the dervishes tried to leave.', 'اكتب جملة عن المشاركة وأخرى عن عادة سيئة حاول الدراويش تركها.'),
    reflection: L('How can someone have wealth in the hand but not in the heart?', 'كيف يمكن أن يكون المال في اليد لا في القلب؟'),
  },
  3: {
    grammar: L('Use less for repeated comparisons: ate less, spoke less, slept less; use must/need to only as it appears in the poem and explanation.', 'استخدم less للمقارنة المتكررة: ate less, spoke less, slept less، ولاحظ must/need to كما يظهر في القصيدة والشرح.'),
    prior: L('Recall the good values and bad habits from Chapter 2.', 'استرجع القيم الجيدة والعادات السيئة من الفصل الثاني.'),
    misconception: L('Learners may read “difficult path” as physical travel only; the chapter describes disciplined habits and character training.', 'قد يفهم المتعلمون «الطريق الشاق» كسفر جسدي فقط؛ بينما يصف الفصل عادات منضبطة وتدريبًا للأخلاق.'),
    transfer: L('Write three short rules for the disciplined life described in the chapter.', 'اكتب ثلاث قواعد قصيرة للحياة المنضبطة المذكورة في الفصل.'),
    reflection: L('What made the path difficult according to the chapter?', 'ما الذي جعل الطريق شاقًا بحسب الفصل؟'),
  },
  4: {
    grammar: L('Use will for willingness in Yunus’s promise and never for repeated negative past behaviour.', 'استخدم will للاستعداد في وعد يونس وnever للسلوك الماضي المتكرر المنفي.'),
    prior: L('Recall humility and service as parts of dervish training.', 'استرجع التواضع والخدمة بوصفهما جزءًا من تدريب الدراويش.'),
    misconception: L('Learners may see woodcutting as only a practical chore and miss the stated purpose of training the ego and leaving bad behaviour.', 'قد يرى المتعلمون قطع الحطب عملًا عمليًا فقط ويغفلون الهدف المذكور وهو تدريب النفس وترك السلوك السيئ.'),
    transfer: L('Write one sentence about Yunus’s duty and one about the purpose behind ordinary service.', 'اكتب جملة عن مهمة يونس وأخرى عن الهدف وراء الخدمة العادية.'),
    reflection: L('Why could an ordinary job be part of training?', 'لماذا يمكن أن يكون العمل العادي جزءًا من التدريب؟'),
  },
  5: {
    grammar: L('Use looks like … but in fact … to contrast the outer action with its simple inner meaning.', 'استخدم looks like … but in fact … للمقارنة بين العمل الظاهر ومعناه الداخلي البسيط.'),
    prior: L('Recall Yunus’s careful choice of straight wood in Chapter 4.', 'استرجع اختيار يونس الدقيق للحطب المستقيم في الفصل الرابع.'),
    misconception: L('Learners may treat the wood metaphor as an abstract puzzle; at A2 the required link is simply wood work → training the heart and ego.', 'قد يتعامل المتعلمون مع رمز الحطب كلغز مجرد؛ وفي A2 يكفي الربط البسيط: عمل الحطب ← تدريب القلب والنفس.'),
    transfer: L('Complete two frames: “It looks like Yunus is fixing wood, but in fact …” and “The axe represents …”.', 'أكمل إطارين: «يبدو أن يونس يصلح الحطب، لكن في الحقيقة…» و«يمثل الفأس…».'),
    reflection: L('What is the outer work, and what is the inner training?', 'ما العمل الظاهر وما التدريب الداخلي؟'),
  },
  6: {
    grammar: L('Use can/cannot for a simple rule and if + present, present for the general idea in “If you look closely, you find …”.', 'استخدم can/cannot للقاعدة البسيطة وif + present, present للفكرة العامة في «إذا نظرت جيدًا تجد…».'),
    prior: L('Recall the straight/crooked wood contrast and its connection with character.', 'استرجع المقارنة بين الحطب المستقيم والمعوج وصلتها بالأخلاق.'),
    misconception: L('Learners may think nature is only a setting; the chapter says Yunus actively found lessons and deeper meaning in it.', 'قد يظن المتعلمون أن الطبيعة مجرد مكان؛ بينما يقول الفصل إن يونس وجد فيها دروسًا ومعنى أعمق.'),
    transfer: L('Write one sentence about the “door of honesty” and one about a lesson Yunus found in nature.', 'اكتب جملة عن «باب الصدق» وأخرى عن درس وجده يونس في الطبيعة.'),
    reflection: L('How are straightness and honesty connected in these two chapters?', 'كيف ترتبط الاستقامة بالصدق في هذين الفصلين؟'),
  },
  7: {
    grammar: L('Use could not + verb for inability and because for Yunus’s stated reason.', 'استخدم could not + verb لعدم الاستطاعة وbecause لسبب يونس المذكور.'),
    prior: L('Recall that Yunus learned to look for meaning in nature.', 'استرجع أن يونس تعلم البحث عن المعنى في الطبيعة.'),
    misconception: L('Learners may judge Yunus by the number of flowers and miss the reason he brought only one.', 'قد يحكم المتعلمون على يونس بعدد الأزهار ويغفلون سبب إحضاره زهرة واحدة فقط.'),
    transfer: L('Write: “Other students brought many flowers, but Yunus brought one because …”.', 'اكتب معنى: «أحضر الطلاب الآخرون أزهارًا كثيرة، لكن يونس أحضر واحدة لأنه…».'),
    reflection: L('Why is the number of flowers not enough to understand Yunus’s choice?', 'لماذا لا يكفي عدد الأزهار لفهم اختيار يونس؟'),
  },
  8: {
    grammar: L('Use should / must for simple advice and this helps us + verb for cause-result.', 'استخدم should / must للنصيحة البسيطة وthis helps us + verb للسبب والنتيجة.'),
    prior: L('Recall the wood and flower stories and their simple lessons.', 'استرجع قصتي الحطب والزهرة ودروسهما البسيطة.'),
    misconception: L('Learners may remember the dying daisy as the ending but miss the explicit daily-life lesson that follows it.', 'قد يتذكر المتعلمون الأقحوانة الذابلة كنهاية ويغفلون درس الحياة اليومية الصريح بعدها.'),
    transfer: L('Write two pieces of advice from the final paragraph and one result they can help create.', 'اكتب نصيحتين من الفقرة الأخيرة ونتيجة واحدة يمكن أن تساعدا على تحقيقها.'),
    reflection: L('How do the wood and flower stories become advice for daily life?', 'كيف تتحول قصتا الحطب والزهرة إلى نصيحة للحياة اليومية؟'),
  },
};

const competencies = (focus: string): BlueprintUniversalCompetency[] => {
  if (focus === 'sequence' || focus === 'turning-point') return ['sequence-events', 'comprehend-explicit-information'];
  if (focus === 'cause-result') return ['cause-effect-reasoning', 'comprehend-explicit-information'];
  if (focus === 'comparison') return ['compare-and-contrast', 'comprehend-explicit-information'];
  if (focus === 'motivation' || focus === 'character-action') return ['character-and-motivation', 'comprehend-explicit-information'];
  if (focus === 'theme' || focus === 'inference') return ['infer-from-evidence', 'comprehend-explicit-information'];
  return ['comprehend-explicit-information'];
};

const makeOutcome = (chapter: LearningBlueprintChapter, index: number, evidence: LearningBlueprintChapter['evidencePoints']): BlueprintLearningOutcomeV2 => ({
  id: `yunus-a2-c${chapter.chapterId}-o${index + 1}`,
  objective: chapter.objectives[index],
  successCriteria: evidence.map(point => point.claim),
  universalCompetencies: Array.from(new Set(evidence.flatMap(point => competencies(point.focus)))),
  cefrAlignment: [{
    level: 'A2',
    mode: 'reception',
    descriptorReference: 'Overall reading comprehension',
    learnerCanDo: L(`I can understand this chapter well enough to ${chapter.objectives[index].en.charAt(0).toLowerCase()}${chapter.objectives[index].en.slice(1)}`, `أستطيع فهم هذا الفصل بما يكفي لتحقيق الهدف: ${chapter.objectives[index].ar}`),
    rationale: L('The learner works with short biographical/narrative prose, explicit values, simple comparison, sequence, cause-result, and supported symbolic links appropriate to A2 reception.', 'يعمل المتعلم مع نص سيرة/سرد قصير وقيم صريحة ومقارنة وتسلسل وسبب ونتيجة وروابط رمزية بسيطة ومدعومة تناسب الاستقبال في مستوى A2.'),
    referenceUrl: CEFR,
  }],
  tymmAlignment: [{
    domain: 'foreign-language-field-skill',
    code: 'YDAB2',
    officialLabel: 'Okuma-Anlamlandırma Becerisi',
    strength: 'direct',
    rationale: L('The learner locates and connects chapter information to construct meaning.', 'يحدد المتعلم معلومات الفصل ويربط بينها لبناء المعنى.'),
    observableBehaviour: L('The learner identifies the relevant story detail and gives a short text-supported response.', 'يحدد المتعلم التفصيل المناسب من القصة ويقدم استجابة قصيرة مدعومة بالنص.'),
    referenceUrl: TYMM_FOREIGN,
  }],
});

const demandFor = (item: BlueprintAssessmentItem, chapter: LearningBlueprintChapter): BlueprintCognitiveDemandV2 => {
  const focus = chapter.evidencePoints.find(point => point.id === item.learningPointId)?.focus;
  if (focus === 'sequence') return 'sequence';
  if (focus === 'cause-result') return 'connect';
  if (focus === 'comparison') return 'compare';
  if (focus === 'motivation' || focus === 'character-action') return 'connect';
  if (focus === 'theme' || focus === 'inference') return 'infer';
  return 'identify';
};

const upgradeGuide = (guide: BlueprintGuideContent, chapter: LearningBlueprintChapter, language: 'en' | 'ar', teacher: boolean): BlueprintGuideContent => {
  const spec = specs[chapter.chapterId];
  const ids = [`yunus-a2-c${chapter.chapterId}-o1`, `yunus-a2-c${chapter.chapterId}-o2`];
  const isEn = language === 'en';
  if (teacher) return {
    ...guide,
    grammarFocus: spec.grammar[language],
    learningOutcomeIds: ids,
    objectives: chapter.objectives.map(item => item[language]),
    priorKnowledge: [spec.prior[language]],
    anticipatedMisconceptions: [spec.misconception[language]],
    preReading: [isEn ? 'Use the title/image for one purposeful prediction and activate only the background needed for the chapter.' : 'استخدم العنوان/الصورة لتوقع هادف واحد وفعل فقط الخلفية اللازمة للفصل.'],
    whileReading: [isEn ? 'Read once for the main event, then reread for evidence, value, cause/result, comparison, or simple inner meaning.' : 'اقرأ مرة للحدث الرئيس ثم أعد القراءة للدليل أو القيمة أو السبب والنتيجة أو المقارنة أو المعنى الداخلي البسيط.'],
    postReading: [spec.transfer[language]],
    expectedResponses: chapter.evidencePoints.map(point => point.claim[language]).slice(0, 4),
    formativeAssessment: [isEn ? 'Quick Challenge plus one short evidence-based oral or written check.' : 'التحدي السريع مع فحص شفهي أو كتابي قصير قائم على الدليل.'],
    transferTask: spec.transfer[language],
    reflectionPrompt: spec.reflection[language],
  };
  return {
    ...guide,
    grammarFocus: spec.grammar[language],
    learningOutcomeIds: ids,
    objectives: chapter.objectives.map(item => item[language]),
    studySequence: isEn
      ? ['Read the two goals.', 'Predict from the title/image.', 'Read/listen once for the main event.', 'Read again and mark one useful detail for each goal.', 'Check Word Notes in context.', 'Complete the Quick Challenge.', 'If wrong, return only to the relevant sentence or relationship.', 'Finish the short transfer task.']
      : ['اقرأ هدفي الفصل.', 'ضع توقعًا من العنوان/الصورة.', 'اقرأ/استمع مرة للحدث الرئيس.', 'أعد القراءة وحدد تفصيلًا مفيدًا لكل هدف.', 'راجع ملاحظات المفردات في السياق.', 'نفذ التحدي السريع.', 'إذا أخطأت فارجع فقط إلى الجملة أو العلاقة المناسبة.', 'اختم بمهمة النقل القصيرة.'],
    selfCheck: isEn ? ['Can I explain the two goals without copying?', 'Can I point to the detail that supports my answer?'] : ['هل أستطيع شرح الهدفين دون نسخ؟', 'هل أستطيع تحديد التفصيل الذي يدعم إجابتي؟'],
    repairStrategy: isEn ? ['Read the feedback hint.', 'Find the relevant sentence or relationship.', 'State what you mixed up, then retry.'] : ['اقرأ تلميح التغذية الراجعة.', 'اعثر على الجملة أو العلاقة المناسبة.', 'حدد ما الذي خلطت فيه ثم حاول من جديد.'],
    transferTask: spec.transfer[language],
    reflectionPrompt: spec.reflection[language],
  };
};

export const upgradeYunusA2ChapterToGoldV2 = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const spec = specs[chapter.chapterId];
  if (!spec) throw new Error(`[Yunus A2 Gold] Missing chapter specification ${chapter.chapterId}.`);
  const split = Math.ceil(chapter.evidencePoints.length / 2);
  const first = chapter.evidencePoints.slice(0, split);
  const second = chapter.evidencePoints.slice(split);
  const outcomes = [makeOutcome(chapter, 0, first), makeOutcome(chapter, 1, second)];
  const map = new Map<string, string>();
  first.forEach(point => map.set(point.id, outcomes[0].id));
  second.forEach(point => map.set(point.id, outcomes[1].id));
  return {
    ...chapter,
    learningMap: { learningOutcomes: outcomes, languageTargets: { reading: chapter.objectives, vocabulary: chapter.vocabularyTargets.map(target => L(target.en.word, target.ar.word)), grammar: [spec.grammar] }, transferGoal: spec.transfer },
    evidencePoints: chapter.evidencePoints.map(point => ({ ...point, learningOutcomeId: map.get(point.id) })),
    assessmentItems: chapter.assessmentItems.map(item => ({
      ...item,
      learningOutcomeId: map.get(item.learningPointId),
      quality: {
        cognitiveDemand: demandFor(item, chapter),
        assessmentPurpose: L('Measure the linked chapter idea without reducing the biography to dates or trivia.', 'قياس فكرة الفصل المرتبطة دون اختزال السيرة في التواريخ أو التفاصيل العشوائية.'),
        successEvidence: L('The learner gives the response supported by the linked chapter evidence.', 'يقدم المتعلم الاستجابة التي يدعمها دليل الفصل المرتبط.'),
        misconceptionTargets: [spec.misconception],
        feedback: { correct: L('Confirm and connect the response to the chapter evidence.', 'تأكيد الاستجابة وربطها بدليل الفصل.'), incorrect: L('Redirect to the relevant evidence relationship without giving the answer immediately.', 'إعادة التوجيه إلى علاقة الدليل المناسبة دون إعطاء الإجابة مباشرة.'), rationale: L('The feedback repairs the chapter-specific misconception while preserving A2 language.', 'تعالج التغذية الراجعة سوء الفهم الخاص بالفصل مع الحفاظ على لغة A2.') },
      },
    })),
    teacherGuide: { en: upgradeGuide(chapter.teacherGuide.en, chapter, 'en', true), ar: upgradeGuide(chapter.teacherGuide.ar, chapter, 'ar', true) },
    selfStudyGuide: { en: upgradeGuide(chapter.selfStudyGuide.en, chapter, 'en', false), ar: upgradeGuide(chapter.selfStudyGuide.ar, chapter, 'ar', false) },
  };
};
