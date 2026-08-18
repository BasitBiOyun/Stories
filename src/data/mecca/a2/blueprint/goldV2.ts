import type { BlueprintAssessmentItem, BlueprintGuideContent, LearningBlueprintChapter, LocalizedText } from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2, BlueprintLearningOutcomeV2, BlueprintUniversalCompetency } from '../../../learningQualityContract';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const CEFR = 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors';
const L = (en: string, ar: string): LocalizedText => ({ en, ar });

const specs: Record<number, { grammar: LocalizedText; prior: LocalizedText; misconception: LocalizedText; transfer: LocalizedText; reflection: LocalizedText }> = {
  1: {
    grammar: L('Use was/were and became for past facts and change: Bilal was a slave; he became a free and respected man.', 'استخدم was/were وbecame لحقائق الماضي والتغير: كان بلال عبدًا ثم أصبح رجلًا حرًا محترمًا.'),
    prior: L('Learners can describe a person with simple past forms and basic value words.', 'يستطيع المتعلمون وصف شخص بصيغ الماضي البسيطة وكلمات القيمة الأساسية.'),
    misconception: L('Learners may remember Bilal only as a slave and miss the chapter’s contrast between social status and human value.', 'قد يتذكر المتعلمون بلالًا بوصفه عبدًا فقط ويغفلون الفرق بين المكانة الاجتماعية وقيمة الإنسان.'),
    transfer: L('Write two short sentences: one about Bilal’s early condition and one about the lesson on human value.', 'اكتب جملتين قصيرتين: واحدة عن حال بلال الأولى وأخرى عن درس قيمة الإنسان.'),
    reflection: L('Which fact shows social status, and which sentence explains value?', 'أي معلومة تبين المكانة الاجتماعية وأي جملة تشرح القيمة؟'),
  },
  2: {
    grammar: L('Use there was/were, comparatives, and because of for a simple social cause-result relationship.', 'استخدم there was/were والمقارنة وbecause of لعلاقة اجتماعية بسيطة بين السبب والنتيجة.'),
    prior: L('Learners can compare rich/poor and fair/unfair situations.', 'يستطيع المتعلمون مقارنة الغني والفقير والمواقف العادلة وغير العادلة.'),
    misconception: L('Learners may treat Jahiliyyah as only idol worship and miss the social and economic unfairness described.', 'قد يحصر المتعلمون الجاهلية في عبادة الأصنام ويغفلون الظلم الاجتماعي والاقتصادي المذكور.'),
    transfer: L('Write one contrast between rich and poor life and one cause-result sentence about unfair extra money.', 'اكتب مقارنة واحدة بين حياة الغني والفقير وجملة سبب ونتيجة عن المال الإضافي الظالم.'),
    reflection: L('Which problem in the chapter is religious, and which problems are social or economic?', 'أي مشكلة في الفصل دينية وأيها اجتماعية أو اقتصادية؟'),
  },
  3: {
    grammar: L('Use Simple Past and superlatives in context: one of the richest and most powerful leaders.', 'استخدم الماضي البسيط وصيغة التفضيل في السياق: أحد أغنى وأقوى القادة.'),
    prior: L('Recall the rich-poor power gap from Chapter 2.', 'استرجع فجوة القوة بين الغني والفقير من الفصل الثاني.'),
    misconception: L('Learners may remember the slave market as an isolated fact and miss how money and power shaped Bilal’s position.', 'قد يتذكر المتعلمون سوق العبيد كحقيقة منفصلة ويغفلون أثر المال والقوة في وضع بلال.'),
    transfer: L('Write two short sentences connecting Mecca’s slave market with Umayya’s power.', 'اكتب جملتين قصيرتين تربطان سوق العبيد في مكة بقوة أمية.'),
    reflection: L('How does Chapter 3 continue the unfair-system idea from Chapter 2?', 'كيف يواصل الفصل الثالث فكرة النظام غير العادل من الفصل الثاني؟'),
  },
  4: {
    grammar: L('Use had to for obligation and but for contrast between treatment and patience.', 'استخدم had to للإلزام وbut للمقارنة بين المعاملة والصبر.'),
    prior: L('Learners know Bilal was enslaved by a powerful master.', 'يعرف المتعلمون أن بلالًا كان مستعبدًا عند سيد قوي.'),
    misconception: L('Learners may focus only on Bilal’s work and miss the chapter’s repeated lack of respect and harsh treatment.', 'قد يركز المتعلمون على عمل بلال فقط ويغفلون تكرار عدم الاحترام والمعاملة القاسية.'),
    transfer: L('Write one sentence about what Bilal had to do and one about how he was treated.', 'اكتب جملة عما كان على بلال فعله وأخرى عن كيفية معاملته.'),
    reflection: L('Which details show hard work, and which show lack of dignity?', 'أي تفاصيل تبين العمل الشاق وأيها تبين غياب الكرامة؟'),
  },
  5: {
    grammar: L('Use must for a rule and could not / had no for lack of power or freedom.', 'استخدم must للقاعدة وcould not / had no لغياب القدرة أو الحرية.'),
    prior: L('Recall Bilal’s limited freedom and the unfair social setting.', 'استرجع محدودية حرية بلال والبيئة الاجتماعية غير العادلة.'),
    misconception: L('Learners may separate worship from equality, while the chapter presents both as parts of the new message.', 'قد يفصل المتعلمون العبادة عن المساواة بينما يقدم الفصل كليهما ضمن الرسالة الجديدة.'),
    transfer: L('Write two teachings from the new message: one about worship and one about people.', 'اكتب تعليمين من الرسالة الجديدة: واحدًا عن العبادة وآخر عن الناس.'),
    reflection: L('What was new in the message for Bilal personally?', 'ما الذي كان جديدًا في الرسالة بالنسبة لبلال شخصيًا؟'),
  },
  6: {
    grammar: L('Use decided to + verb and first/then/when for a short purposeful sequence.', 'استخدم decided to + verb وfirst/then/when لتسلسل قصير هادف.'),
    prior: L('Learners know Bilal has heard a new message and wants to understand it.', 'يعرف المتعلمون أن بلالًا سمع الرسالة الجديدة ويريد فهمها.'),
    misconception: L('Learners may remember the hidden path but miss that the purpose of the secret visit was to ask questions and learn.', 'قد يتذكر المتعلمون الطريق الخفي ويغفلون أن هدف الزيارة السرية كان السؤال والتعلم.'),
    transfer: L('Retell the visit in three short steps ending with Bilal asking questions.', 'أعد سرد الزيارة في ثلاث خطوات قصيرة تنتهي بأسئلة بلال.'),
    reflection: L('Which detail shows fear, and which detail shows curiosity or determination?', 'أي تفصيل يبين الخوف وأي تفصيل يبين الفضول أو الإصرار؟'),
  },
  7: {
    grammar: L('Use knew … but … to contrast expected difficulty with a chosen action; notice will for the future stated in the story.', 'استخدم knew … but … للمقارنة بين الصعوبة المتوقعة والاختيار، ولاحظ will للمستقبل المذكور في القصة.'),
    prior: L('Recall Bilal’s questions and Abu Bakr’s explanation of the new religion.', 'استرجع أسئلة بلال وشرح أبي بكر للدين الجديد.'),
    misconception: L('Learners may think Bilal chose Islam because he expected an easier life, but the chapter says he expected difficulty.', 'قد يظن المتعلمون أن بلالًا اختار الإسلام لأنه توقع حياة أسهل، لكن الفصل يقول إنه توقع الصعوبة.'),
    transfer: L('Write: “Bilal knew life would be difficult, but …” and complete the idea accurately.', 'اكتب معنى: «عرف بلال أن الحياة ستكون صعبة، لكنه…» وأكمل الفكرة بدقة.'),
    reflection: L('What two ideas did Bilal weigh before his decision?', 'ما الفكرتان اللتان فكر فيهما بلال قبل قراره؟'),
  },
  8: {
    grammar: L('Use refused to + verb and First Conditional in the quoted offer: If you …, you will …', 'استخدم refused to + verb والشرط الأول في العرض المقتبس: If you …, you will …'),
    prior: L('Recall Bilal’s decision and Umayya’s anger at the end of Chapter 7.', 'استرجع قرار بلال وغضب أمية في نهاية الفصل السابع.'),
    misconception: L('Learners may focus on the physical punishment rather than Bilal’s repeated choice and refusal; assessment should not reward graphic recall.', 'قد يركز المتعلمون على تفاصيل الأذى الجسدي بدل اختيار بلال ورفضه المتكرر؛ ولا ينبغي أن يكافئ التقويم حفظ التفاصيل المؤذية.'),
    transfer: L('Write a two-sentence contrast: what Umayya wanted and what Bilal chose to say or do.', 'اكتب جملتين للمقارنة بين ما أراده أمية وما اختار بلال قوله أو فعله.'),
    reflection: L('Which repeated response shows Bilal’s choice most clearly?', 'أي استجابة متكررة تبين اختيار بلال بأوضح صورة؟'),
  },
  9: {
    grammar: L('Use asked + person + to + verb and right away for an immediate response.', 'استخدم asked + person + to + verb وright away للاستجابة الفورية.'),
    prior: L('Recall that Bilal refused to leave his belief despite pressure.', 'استرجع أن بلالًا رفض ترك إيمانه رغم الضغط.'),
    misconception: L('Learners may reduce Abu Bakr’s action to a purchase and miss the justice question and rescue purpose.', 'قد يختزل المتعلمون فعل أبي بكر في الشراء ويغفلون سؤال العدالة وهدف الإنقاذ.'),
    transfer: L('Write one sentence about Abu Bakr’s immediate action and one about the justice question he asked.', 'اكتب جملة عن فعل أبي بكر الفوري وأخرى عن سؤال العدالة الذي طرحه.'),
    reflection: L('What does Abu Bakr’s question reveal about how he viewed Bilal’s treatment?', 'ماذا يكشف سؤال أبي بكر عن نظرته إلى معاملة بلال؟'),
  },
  10: {
    grammar: L('Use became / was now for change of state and could … but did not for choice.', 'استخدم became / was now لتغير الحال وcould … but did not للاختيار.'),
    prior: L('Recall Abu Bakr asking Umayya to sell Bilal.', 'استرجع طلب أبي بكر من أمية أن يبيع بلالًا.'),
    misconception: L('Learners may remember the price more strongly than the meaningful outcome: Abu Bakr freed Bilal instead of keeping him enslaved.', 'قد يتذكر المتعلمون الثمن أكثر من النتيجة المهمة: حرر أبو بكر بلالًا بدل إبقائه مستعبدًا.'),
    transfer: L('Write a before-and-after pair describing Bilal before and after Abu Bakr’s action.', 'اكتب جملتين تصفان بلالًا قبل فعل أبي بكر وبعده.'),
    reflection: L('Which choice by Abu Bakr matters more than the price?', 'أي اختيار لأبي بكر أهم من الثمن؟'),
  },
  11: {
    grammar: L('Use after for sequence and chose + person + to + verb for a role.', 'استخدم after للتسلسل وchose + person + to + verb للدور.'),
    prior: L('Recall Bilal’s freedom and his earlier fearless statement of faith.', 'استرجع حرية بلال وقوله السابق للإيمان بلا خوف.'),
    misconception: L('Learners may treat the first Adhan as an isolated honor and miss the chapter’s link to Bilal’s earlier bravery and faith.', 'قد يتعامل المتعلمون مع الأذان الأول كتكريم منفصل ويغفلون ربط الفصل له بشجاعة بلال وإيمانه السابقين.'),
    transfer: L('Write one sentence linking Bilal’s earlier bravery with the new role he received after the Hijrah.', 'اكتب جملة تربط شجاعة بلال السابقة بالدور الجديد الذي ناله بعد الهجرة.'),
    reflection: L('Why does the chapter say the first Adhan was worthy of Bilal?', 'لماذا يقول الفصل إن الأذان الأول كان جديرًا ببلال؟'),
  },
  12: {
    grammar: L('Notice used to for a repeated past routine, and use comparatives/equality language: no skin color is better than another.', 'لاحظ used to لعادة ماضية متكررة واستخدم لغة المقارنة والمساواة: لا لون بشرة أفضل من آخر.'),
    prior: L('Recall Bilal’s role in the Adhan and the story’s earlier equality message.', 'استرجع دور بلال في الأذان ورسالة المساواة السابقة في القصة.'),
    misconception: L('Learners may remember only the morning-Adhan phrase and miss the second half’s equality message.', 'قد يتذكر المتعلمون عبارة أذان الصباح فقط ويغفلون رسالة المساواة في النصف الثاني.'),
    transfer: L('Write one fact about the morning Adhan and one equality statement from the Farewell Sermon section.', 'اكتب معلومة عن أذان الصباح وعبارة مساواة من قسم خطبة الوداع.'),
    reflection: L('How do the two halves of this chapter connect Bilal’s role with the equality message?', 'كيف يربط نصفا الفصل دور بلال برسالة المساواة؟'),
  },
  13: {
    grammar: L('Use comparatives for equality statements and “What matters is …” for a simple conclusion.', 'استخدم المقارنة لعبارات المساواة و“What matters is …” لخلاصة بسيطة.'),
    prior: L('Recall the chapter 1 lesson about skin color and human value.', 'استرجع درس الفصل الأول عن لون البشرة وقيمة الإنسان.'),
    misconception: L('Learners may focus on Bilal’s final location and miss that the story closes by returning to equality, dignity, heart, and good actions.', 'قد يركز المتعلمون على مكان بلال الأخير ويغفلون أن القصة تختم بالعودة إلى المساواة والكرامة والقلب والأعمال الصالحة.'),
    transfer: L('Write a three-sentence ending: equality, what does not decide value, and what matters.', 'اكتب خاتمة من ثلاث جمل: المساواة، وما لا يحدد القيمة، وما هو المهم.'),
    reflection: L('How does the final chapter answer the social attitudes described at the beginning?', 'كيف يجيب الفصل الأخير عن المواقف الاجتماعية المذكورة في البداية؟'),
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
  id: `mecca-a2-c${chapter.chapterId}-o${index + 1}`,
  objective: chapter.objectives[index],
  successCriteria: evidence.map(point => point.claim),
  universalCompetencies: Array.from(new Set(evidence.flatMap(point => competencies(point.focus)))),
  cefrAlignment: [{
    level: 'A2',
    mode: 'reception',
    descriptorReference: 'Overall reading comprehension',
    learnerCanDo: L(`I can understand this chapter well enough to ${chapter.objectives[index].en.charAt(0).toLowerCase()}${chapter.objectives[index].en.slice(1)}`, `أستطيع فهم هذا الفصل بما يكفي لتحقيق الهدف: ${chapter.objectives[index].ar}`),
    rationale: L('The learner works with short narrative and social-history information, clear sequence, comparison, and simple cause-result relationships at A2 reception.', 'يعمل المتعلم مع معلومات سردية واجتماعية تاريخية قصيرة وتسلسل ومقارنة وعلاقات سبب ونتيجة واضحة تناسب الاستقبال في مستوى A2.'),
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
  const ids = [`mecca-a2-c${chapter.chapterId}-o1`, `mecca-a2-c${chapter.chapterId}-o2`];
  const isEn = language === 'en';
  if (teacher) return {
    ...guide,
    grammarFocus: spec.grammar[language],
    learningOutcomeIds: ids,
    objectives: chapter.objectives.map(item => item[language]),
    priorKnowledge: [spec.prior[language]],
    anticipatedMisconceptions: [spec.misconception[language]],
    preReading: [isEn ? 'Use the title/image for one purposeful prediction; keep sensitive historical content factual and non-graphic.' : 'استخدم العنوان/الصورة لتوقع هادف واحد، وحافظ على عرض المحتوى التاريخي الحساس بصورة واقعية وغير تصويرية.'],
    whileReading: [isEn ? 'Read once for the main event, then reread for evidence, relationship, choice, or social contrast.' : 'اقرأ مرة للحدث الرئيس ثم أعد القراءة للدليل أو العلاقة أو الاختيار أو المقارنة الاجتماعية.'],
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

export const upgradeMeccaA2ChapterToGoldV2 = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const spec = specs[chapter.chapterId];
  if (!spec) throw new Error(`[Mecca A2 Gold] Missing chapter specification ${chapter.chapterId}.`);
  const split = Math.ceil(chapter.evidencePoints.length / 2);
  const first = chapter.evidencePoints.slice(0, split);
  const second = chapter.evidencePoints.slice(split);
  const outcomes = [makeOutcome(chapter, 0, first), makeOutcome(chapter, 1, second)];
  const map = new Map<string, string>();
  first.forEach(point => map.set(point.id, outcomes[0].id));
  second.forEach(point => map.set(point.id, outcomes[1].id));
  return {
    ...chapter,
    learningMap: {
      learningOutcomes: outcomes,
      languageTargets: { reading: chapter.objectives, vocabulary: chapter.vocabularyTargets.map(target => L(target.en.word, target.ar.word)), grammar: [spec.grammar] },
      transferGoal: spec.transfer,
    },
    evidencePoints: chapter.evidencePoints.map(point => ({ ...point, learningOutcomeId: map.get(point.id) })),
    assessmentItems: chapter.assessmentItems.map(item => ({
      ...item,
      learningOutcomeId: map.get(item.learningPointId),
      quality: {
        cognitiveDemand: demandFor(item, chapter),
        assessmentPurpose: L('Measure the linked chapter idea without turning sensitive history into trivia.', 'قياس فكرة الفصل المرتبطة دون تحويل التاريخ الحساس إلى تفاصيل عشوائية.'),
        successEvidence: L('The learner gives the response supported by the linked chapter evidence.', 'يقدم المتعلم الاستجابة التي يدعمها دليل الفصل المرتبط.'),
        misconceptionTargets: [spec.misconception],
        feedback: {
          correct: L('Confirm the response and connect it to the chapter evidence.', 'تأكيد الاستجابة وربطها بدليل الفصل.'),
          incorrect: L('Redirect to the relevant evidence relationship without giving the answer immediately.', 'إعادة التوجيه إلى علاقة الدليل المناسبة دون إعطاء الإجابة مباشرة.'),
          rationale: L('The feedback repairs the chapter-specific misconception instead of adding outside information.', 'تعالج التغذية الراجعة سوء الفهم الخاص بالفصل دون إضافة معلومات خارجية.'),
        },
      },
    })),
    teacherGuide: { en: upgradeGuide(chapter.teacherGuide.en, chapter, 'en', true), ar: upgradeGuide(chapter.teacherGuide.ar, chapter, 'ar', true) },
    selfStudyGuide: { en: upgradeGuide(chapter.selfStudyGuide.en, chapter, 'en', false), ar: upgradeGuide(chapter.selfStudyGuide.ar, chapter, 'ar', false) },
  };
};
