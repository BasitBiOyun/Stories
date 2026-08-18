import type { BlueprintAssessmentItem, LearningBlueprintChapter, LocalizedText } from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2 } from '../../../learningQualityContract';
import { L, matching, mc, tap, tf } from '../../a2BlueprintAuthoring';

const T = (en: string, ar: string): LocalizedText => L(en, ar);

const quickOverrides: Record<number, { learningPointId: string; exercise: BlueprintAssessmentItem['exercise']; demand: BlueprintCognitiveDemandV2 }> = {
  1: {
    learningPointId: 'abraham-a2-c1-powerless',
    exercise: matching(
      T('Match the people and the stone objects with what the chapter says about them.', 'صل الناس والأصنام الحجرية بما يقوله الفصل عنهم.'),
      {
        en: [['People', 'made wishes to the objects'], ['Stone objects', 'could not hear, talk, or understand']],
        ar: [['الناس', 'طلبوا أمنياتهم من الأصنام'], ['الأصنام الحجرية', 'لا تسمع ولا تتكلم ولا تفهم']],
      },
      T('The people made wishes, but Abraham noticed that the stone objects could not hear, talk, or understand.', 'كان الناس يطلبون أمنياتهم، لكن إبراهيم لاحظ أن الأصنام الحجرية لا تسمع ولا تتكلم ولا تفهم.'),
    ),
    demand: 'compare',
  },
  2: {
    learningPointId: 'abraham-a2-c2-ears',
    exercise: mc(
      T('Why did Abraham find his father’s explanation about Mardukh ridiculous?', 'لماذا وجد إبراهيم تفسير والده عن مردوخ سخيفًا؟'),
      {
        en: ['His father said Mardukh’s big ears meant he was very smart', 'His father said Mardukh had made the sun', 'His father said Mardukh could speak to Abraham'],
        ar: ['قال والده إن أذني مردوخ الكبيرتين تعنيان أنه ذكي جدًا', 'قال والده إن مردوخ صنع الشمس', 'قال والده إن مردوخ يستطيع الكلام مع إبراهيم'],
      },
      0,
      T('His father connected the statue’s large ears with being very smart, and Abraham found that explanation ridiculous.', 'ربط والده بين أذني الصنم الكبيرتين والذكاء، فوجد إبراهيم هذا التفسير سخيفًا.'),
    ),
    demand: 'connect',
  },
  3: {
    learningPointId: 'abraham-a2-c3-moon',
    exercise: tap(
      T('What happened to both the star and the moon that helped Abraham reject them as his Lord?', 'ما الذي حدث للكوكب والقمر وساعد إبراهيم على رفضهما ربًا؟'),
      T('They disappeared or went away.', 'غابا وذهبا.'),
      T('The star disappeared and the moon went away. Abraham understood that what disappears could not be Allah.', 'غاب الكوكب وذهب القمر، ففهم إبراهيم أن ما يغيب لا يمكن أن يكون الله.'),
    ),
    demand: 'connect',
  },
  4: {
    learningPointId: 'abraham-a2-c4-creator',
    exercise: mc(
      T('What did the setting sun help Abraham understand?', 'ماذا ساعد غروب الشمس إبراهيم على أن يفهم؟'),
      {
        en: ['Allah is the Creator; the sun is a creation', 'The sun is Allah because it is bright', 'The moon is more powerful than the sun'],
        ar: ['الله هو الخالق، والشمس مخلوق', 'الشمس هي الله لأنها ساطعة', 'القمر أقوى من الشمس'],
      },
      0,
      T('When the sun set, Abraham understood that Allah is not a creation; Allah is the Creator of everything.', 'لما غابت الشمس فهم إبراهيم أن الله ليس مخلوقًا، بل هو خالق كل شيء.'),
    ),
    demand: 'connect',
  },
  5: {
    learningPointId: 'abraham-a2-c5-fathers',
    exercise: tf(
      T('The people said they followed the idols because their fathers had done the same, not because the idols showed real power.', 'قال الناس إنهم اتبعوا الأصنام لأن آباءهم فعلوا ذلك، لا لأن الأصنام أظهرت قوة حقيقية.'),
      true,
      T('Their stated reason was family tradition: they had seen their fathers worship the idols.', 'كان سببهم المعلن هو تقليد الآباء؛ فقد رأوا آباءهم يعبدون الأصنام.'),
    ),
    demand: 'connect',
  },
  6: {
    learningPointId: 'abraham-a2-c6-largest',
    exercise: mc(
      T('Why did Abraham leave the largest idol unbroken and put the axe around its neck?', 'لماذا ترك إبراهيم الصنم الأكبر سليمًا ووضع الفأس على عنقه؟'),
      {
        en: ['To make the people question what their idols could really do', 'Because he wanted to worship the largest idol', 'Because the festival ended before he could finish'],
        ar: ['ليجعل الناس يفكرون فيما تستطيع أصنامهم فعله حقًا', 'لأنه أراد عبادة الصنم الأكبر', 'لأن العيد انتهى قبل أن يكمل عمله'],
      },
      0,
      T('Leaving the largest idol and the axe was part of Abraham’s plan to make the people think about their belief.', 'كان ترك الصنم الأكبر والفأس جزءًا من خطة إبراهيم ليجعل الناس يفكرون في اعتقادهم.'),
    ),
    demand: 'infer',
  },
  7: {
    learningPointId: 'abraham-a2-c7-admit',
    exercise: mc(
      T('Which sentence from the people supported Abraham’s point about the idols?', 'أي جملة قالها الناس دعمت حجة إبراهيم عن الأصنام؟'),
      {
        en: ['These objects do not speak', 'The biggest idol is very smart', 'The idols can protect themselves'],
        ar: ['هذه الأشياء لا تتكلم', 'الصنم الأكبر ذكي جدًا', 'الأصنام تستطيع حماية نفسها'],
      },
      0,
      T('The people themselves said the objects did not speak. Abraham then used that admission to question their worship.', 'قال الناس بأنفسهم إن هذه الأشياء لا تتكلم، ثم استخدم إبراهيم هذا الاعتراف ليسألهم عن عبادتها.'),
    ),
    demand: 'connect',
  },
  8: {
    learningPointId: 'abraham-a2-c8-trust',
    exercise: mc(
      T('The fire was extremely dangerous. Why did Abraham still stay calm?', 'كانت النار شديدة الخطورة. لماذا بقي إبراهيم هادئًا؟'),
      {
        en: ['Because he trusted Allah', 'Because the people stopped the punishment', 'Because he thought the fire was cold already'],
        ar: ['لأنه كان يثق بالله', 'لأن الناس أوقفوا العقوبة', 'لأنه ظن أن النار كانت باردة بالفعل'],
      },
      0,
      T('The chapter places the danger and Abraham’s calmness together: he stayed calm because he trusted Allah.', 'يجمع الفصل بين الخطر وهدوء إبراهيم؛ فقد بقي هادئًا لأنه كان يثق بالله.'),
    ),
    demand: 'connect',
  },
  9: {
    learningPointId: 'abraham-a2-c9-unchanged',
    exercise: matching(
      T('Match what changed and what did not change after the miracle.', 'صل ما تغير وما لم يتغير بعد المعجزة.'),
      {
        en: [['The fire', 'became cool and safe'], ['The people', 'remained arrogant and against Abraham']],
        ar: [['النار', 'صارت باردة وآمنة'], ['الناس', 'بقوا متكبرين وضد إبراهيم']],
      },
      T('Allah made the fire cool and safe, but the amazed people still did not change their minds.', 'جعل الله النار باردة وآمنة، لكن الناس رغم دهشتهم لم يغيروا رأيهم.'),
    ),
    demand: 'compare',
  },
  10: {
    learningPointId: 'abraham-a2-c10-west',
    exercise: mc(
      T('Why was Abraham’s question about the sun a strong challenge to Nimrod’s claim?', 'لماذا كان سؤال إبراهيم عن الشمس تحديًا قويًا لادعاء نمرود؟'),
      {
        en: ['Nimrod could not make the sun rise from the west', 'Nimrod did not know where Babylon was', 'Nimrod wanted to travel west'],
        ar: ['لم يستطع نمرود أن يأتي بالشمس من المغرب', 'لم يعرف نمرود أين تقع بابل', 'أراد نمرود السفر إلى الغرب'],
      },
      0,
      T('Nimrod claimed great power, but he could not meet Abraham’s challenge to make the sun rise from the west.', 'ادعى نمرود قوة عظيمة، لكنه لم يستطع تنفيذ تحدي إبراهيم بأن يأتي بالشمس من المغرب.'),
    ),
    demand: 'connect',
  },
  11: {
    learningPointId: 'abraham-a2-c11-leave',
    exercise: mc(
      T('Why did Abraham leave Babylon and travel to other lands?', 'لماذا غادر إبراهيم بابل وسافر إلى أراض أخرى؟'),
      {
        en: ['People would not listen, so he wanted to carry Allah’s message to other lands', 'He wanted to become king in another country', 'He wanted to find new stone idols'],
        ar: ['لم يسمع الناس له، فأراد أن يبلغ رسالة الله في أراض أخرى', 'أراد أن يصبح ملكًا في بلد آخر', 'أراد أن يجد أصنامًا حجرية جديدة'],
      },
      0,
      T('Abraham understood that the people would not listen, so he left Babylon to tell people in other lands about Allah’s message.', 'فهم إبراهيم أن الناس لن يسمعوا له، فغادر بابل ليخبر أهل أراض أخرى برسالة الله.'),
    ),
    demand: 'connect',
  },
  12: {
    learningPointId: 'abraham-a2-c12-trust',
    exercise: matching(
      T('Match Hagar’s trust with the action she took in the valley.', 'صل توكل هاجر بالفعل الذي قامت به في الوادي.'),
      {
        en: [['Hagar’s trust', 'Allah will protect us'], ['Hagar’s action', 'searched and ran from hill to hill']],
        ar: [['توكل هاجر', 'سيحمينا الله'], ['عمل هاجر', 'بحثت وركضت من تل إلى تل']],
      },
      T('Hagar trusted Allah and also acted: she searched for food and water and ran from hill to hill.', 'توكلت هاجر على الله وعملت أيضًا؛ فقد بحثت عن الطعام والماء وركضت من تل إلى تل.'),
    ),
    demand: 'connect',
  },
  13: {
    learningPointId: 'abraham-a2-c13-people',
    exercise: mc(
      T('Which cause-result chain does Chapter 13 give?', 'أي سلسلة سبب ونتيجة يقدمها الفصل 13؟'),
      {
        en: ['Zamzam water appeared → more people came → Mecca was built', 'Mecca was built → the water disappeared → everyone left', 'Nimrod came → the people returned to Babylon → Zamzam stopped'],
        ar: ['ظهر ماء زمزم ← جاء مزيد من الناس ← بُنيت مكة', 'بُنيت مكة ← اختفى الماء ← غادر الجميع', 'جاء نمرود ← عاد الناس إلى بابل ← توقف زمزم'],
      },
      0,
      T('The chapter connects the water with settlement: more people came because of Zamzam, and they built Mecca.', 'يربط الفصل الماء بالاستقرار؛ فقد جاء مزيد من الناس بسبب زمزم وبنوا مكة.'),
    ),
    demand: 'connect',
  },
  14: {
    learningPointId: 'abraham-a2-c14-message',
    exercise: matching(
      T('Match the chapter’s final actions and message.', 'صل أفعال الفصل الأخيرة برسالته.'),
      {
        en: [['Abraham and Ishmael', 'worked together on the Ka’ba'], ['Final message', 'Allah has no partner, rival, or helper']],
        ar: [['إبراهيم وإسماعيل', 'عملا معًا في بناء الكعبة'], ['الرسالة الأخيرة', 'ليس لله شريك ولا ند ولا معين']],
      },
      T('The chapter ends with father and son building the Ka’ba and the message that Allah is unique and has no partner.', 'ينتهي الفصل ببناء الأب والابن للكعبة ورسالة أن الله واحد لا شريك له.'),
    ),
    demand: 'connect',
  },
};

const demandForFocus = (focus: string): BlueprintCognitiveDemandV2 => {
  switch (focus) {
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

const retryForFocus = (focus: string, language: 'en' | 'ar'): string => {
  const en: Record<string, string> = {
    direct: 'Return to the sentence that directly names this detail. Do not use a nearby but different fact.',
    sequence: 'Reread the two sentences around this event and check what happened before and after it.',
    'cause-result': 'Find the reason/result link in the paragraph. Separate what happened from why it happened.',
    comparison: 'Compare the two people, objects, or responses in the same paragraph before choosing again.',
    motivation: 'Find the sentence that explains why the character acted. Choose the reason stated in the chapter.',
    'character-action': 'Find the character named in the question and check the action that person actually took.',
    theme: 'Return to the chapter’s explicit lesson or repeated idea and connect it to the event in the question.',
    inference: 'Use only the nearby chapter facts. Ask what those facts clearly show without adding outside information.',
    'turning-point': 'Find the moment when the situation changes and check what becomes different immediately afterward.',
  };
  const ar: Record<string, string> = {
    direct: 'ارجع إلى الجملة التي تذكر هذه المعلومة مباشرة، ولا تستخدم تفصيلًا قريبًا لكنه مختلف.',
    sequence: 'أعد قراءة الجملتين حول الحدث وتحقق مما حدث قبله وبعده.',
    'cause-result': 'ابحث عن علاقة السبب والنتيجة في الفقرة، وافصل بين ما حدث ولماذا حدث.',
    comparison: 'قارن بين الشخصين أو الشيئين أو الردين في الفقرة نفسها قبل الاختيار من جديد.',
    motivation: 'ابحث عن الجملة التي تشرح لماذا تصرفت الشخصية، واختر السبب المذكور في الفصل.',
    'character-action': 'اعثر على الشخصية المذكورة في السؤال وتحقق من الفعل الذي قامت به فعلًا.',
    theme: 'ارجع إلى الدرس الصريح أو الفكرة المتكررة في الفصل واربطها بالحدث في السؤال.',
    inference: 'استخدم فقط معلومات الفصل القريبة واسأل عما تدل عليه بوضوح دون إضافة معلومات خارجية.',
    'turning-point': 'اعثر على اللحظة التي تغير فيها الموقف وتحقق مما اختلف بعدها مباشرة.',
  };
  return (language === 'en' ? en : ar)[focus] ?? (language === 'en' ? 'Return to the relevant chapter sentence and check the exact detail before trying again.' : 'ارجع إلى الجملة المناسبة في الفصل وتحقق من التفصيل الدقيق قبل المحاولة من جديد.');
};

const improveItem = (item: BlueprintAssessmentItem, chapter: LearningBlueprintChapter, demandOverride?: BlueprintCognitiveDemandV2): BlueprintAssessmentItem => {
  const point = chapter.evidencePoints.find(candidate => candidate.id === item.learningPointId);
  const focus = point?.focus ?? 'direct';
  const enExercise = item.exercise.en;
  const arExercise = item.exercise.ar;
  const enExplanation = enExercise.explanation || point?.claim.en || '';
  const arExplanation = arExercise.explanation || point?.claim.ar || '';

  return {
    ...item,
    learningOutcomeId: point?.learningOutcomeId ?? item.learningOutcomeId,
    exercise: {
      en: {
        ...enExercise,
        feedback: {
          correct: enExplanation ? `Correct. ${enExplanation}` : 'Correct. Your answer matches the chapter.',
          incorrect: retryForFocus(focus, 'en'),
        },
      },
      ar: {
        ...arExercise,
        feedback: {
          correct: arExplanation ? `صحيح. ${arExplanation}` : 'صحيح. إجابتك تطابق الفصل.',
          incorrect: retryForFocus(focus, 'ar'),
        },
      },
    },
    quality: {
      cognitiveDemand: demandOverride ?? demandForFocus(focus),
      assessmentPurpose: T('Measure the linked chapter idea without testing random trivia.', 'قياس فكرة الفصل المرتبطة دون اختبار تفاصيل عشوائية.'),
      successEvidence: point?.claim ?? T('The learner gives the response supported by the linked chapter evidence.', 'يقدم المتعلم الاستجابة التي يدعمها دليل الفصل المرتبط.'),
      misconceptionTargets: [T('A nearby story detail may be remembered correctly but used for the wrong relationship.', 'قد يتذكر المتعلم تفصيلًا قريبًا بصورة صحيحة لكنه يستخدمه لعلاقة غير صحيحة.')],
      feedback: {
        correct: T('Confirm the answer and connect it to the chapter evidence.', 'تأكيد الإجابة وربطها بدليل الفصل.'),
        incorrect: T('Redirect the learner to the relevant evidence relationship without giving the answer immediately.', 'إعادة توجيه المتعلم إلى علاقة الدليل المناسبة دون إعطاء الإجابة مباشرة.'),
        rationale: T('The retry cue diagnoses whether the learner confused a detail, sequence, cause, comparison, or motivation.', 'يشخص تلميح إعادة المحاولة ما إذا كان المتعلم قد خلط بين تفصيل أو تسلسل أو سبب أو مقارنة أو دافع.'),
      },
    },
  };
};

export const applyAbrahamA2FinalPedagogy = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const quick = quickOverrides[chapter.chapterId];
  const baseItems = chapter.assessmentItems.map(item => item.id === `abraham-a2-c${chapter.chapterId}-quick`
    ? { ...item, learningPointId: quick.learningPointId, exercise: quick.exercise }
    : item);

  const hasQuick = baseItems.some(item => item.eligibleStages.includes('quick'));
  const items = hasQuick
    ? baseItems
    : [{
        id: `abraham-a2-c${chapter.chapterId}-quick`,
        learningPointId: quick.learningPointId,
        eligibleStages: ['quick' as const],
        exercise: quick.exercise,
      }, ...baseItems];

  return {
    ...chapter,
    assessmentItems: items.map(item => improveItem(
      item,
      chapter,
      item.id === `abraham-a2-c${chapter.chapterId}-quick` ? quick.demand : undefined,
    )),
  };
};
