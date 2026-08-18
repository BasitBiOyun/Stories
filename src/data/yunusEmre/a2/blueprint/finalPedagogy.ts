import type { BlueprintAssessmentItem, LearningBlueprintChapter, LocalizedText } from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2 } from '../../../learningQualityContract';
import { L, matching, mc, tap, tf } from '../../a2BlueprintAuthoring';

const T = (en: string, ar: string): LocalizedText => L(en, ar);

const quicks: Record<number, { learningPointId: string; exercise: BlueprintAssessmentItem['exercise']; demand: BlueprintCognitiveDemandV2 }> = {
  1: {
    learningPointId: 'yunus-a2-c1-simple',
    exercise: mc(
      T('Why could ordinary people understand Yunus Emre’s poems easily?', 'لماذا كان الناس يفهمون قصائد يونس إمره بسهولة؟'),
      { en: ['He used simple Turkish', 'He wrote only for madrasa teachers', 'He used only foreign words'], ar: ['استخدم لغة تركية بسيطة', 'كتب لمعلمي المدارس فقط', 'استخدم كلمات أجنبية فقط'] },
      0,
      T('The chapter directly connects simple Turkish with people being able to understand his poems.', 'يربط الفصل مباشرة بين اللغة التركية البسيطة وقدرة الناس على فهم قصائده.'),
    ),
    demand: 'connect',
  },
  2: {
    learningPointId: 'yunus-a2-c2-needy',
    exercise: matching(
      T('Match the dervishes’ view of wealth with what they did.', 'صل نظرة الدراويش إلى المال بما كانوا يفعلونه.'),
      { en: [['Wealth', 'kept in the hand, not the heart'], ['What they had', 'shared with the needy']], ar: [['المال', 'في اليد لا في القلب'], ['ما عندهم', 'شاركوه مع المحتاجين']] },
      T('The chapter explains generosity by saying wealth stayed in their hands to be shared, not in their hearts.', 'يشرح الفصل الكرم بأن المال كان في أيديهم ليشاركوه، لا في قلوبهم.'),
    ),
    demand: 'connect',
  },
  3: {
    learningPointId: 'yunus-a2-c3-less',
    exercise: matching(
      T('Match the disciplined dervish habits described in the chapter.', 'صل عادات الدراويش المنضبطة المذكورة في الفصل.'),
      { en: [['Eating', 'less'], ['Speaking', 'less'], ['Sleeping', 'less']], ar: [['الأكل', 'قليلًا'], ['الكلام', 'قليلًا'], ['النوم', 'قليلًا']] },
      T('The chapter says dervishes ate less, spoke less, and slept less while spending time on useful activities.', 'يقول الفصل إن الدراويش كانوا يأكلون ويتكلمون وينامون قليلًا ويقضون وقتهم في أعمال مفيدة.'),
    ),
    demand: 'compare',
  },
  4: {
    learningPointId: 'yunus-a2-c4-wood',
    exercise: mc(
      T('Which ordinary service did Taptuk assign to Yunus as part of his training?', 'أي خدمة عادية كلف تابتوك يونس بها كجزء من تدريبه؟'),
      { en: ['Collecting wood from the mountain', 'Selling poems in the city', 'Working in a palace'], ar: ['جمع الحطب من الجبل', 'بيع القصائد في المدينة', 'العمل في قصر'] },
      0,
      T('Taptuk assigned Yunus to collect wood from the mountain as a service in the dervish house.', 'كلف تابتوك يونس بجمع الحطب من الجبل بوصفه خدمة في دار الدراويش.'),
    ),
    demand: 'identify',
  },
  5: {
    learningPointId: 'yunus-a2-c5-ego',
    exercise: tap(
      T('The chapter says the wood is Yunus’s ego. What simple inner training does the wood work represent?', 'يقول الفصل إن الحطب يرمز إلى نفس يونس. ما التدريب الداخلي البسيط الذي يمثله العمل بالحطب؟'),
      T('Training and fixing his heart and ego.', 'تدريب قلبه ونفسه وإصلاحهما.'),
      T('The outer work is cutting and choosing wood; the chapter says the inner meaning is training and fixing his own heart and ego.', 'العمل الظاهر هو قطع الحطب واختياره، ويقول الفصل إن المعنى الداخلي هو تدريب قلبه ونفسه وإصلاحهما.'),
    ),
    demand: 'connect',
  },
  6: {
    learningPointId: 'yunus-a2-c6-door',
    exercise: mc(
      T('Why did Yunus call the dervish house a “door of honesty and goodness”?', 'لماذا سمى يونس دار الدراويش «باب الصدق والخير»؟'),
      { en: ['He connected straight wood with straight and honest character', 'He wanted to sell the wood at the door', 'He thought nature had no lessons'], ar: ['ربط الحطب المستقيم بالخلق المستقيم والصادق', 'أراد بيع الحطب عند الباب', 'ظن أن الطبيعة لا تحمل دروسًا'] },
      0,
      T('Yunus said crooked wood and a crooked person could not enter this place, connecting straightness with honesty and goodness.', 'قال يونس إن الحطب المعوج والإنسان غير المستقيم لا يدخلان هذا المكان، فربط الاستقامة بالصدق والخير.'),
    ),
    demand: 'connect',
  },
  7: {
    learningPointId: 'yunus-a2-c7-daisy',
    exercise: mc(
      T('What made Yunus’s return different from the other students’ return?', 'ما الذي جعل عودة يونس مختلفة عن عودة الطلاب الآخرين؟'),
      { en: ['He brought only one daisy while the others brought many flowers', 'He brought a large bundle of wood', 'He returned before everyone with the biggest bunch'], ar: ['أحضر أقحوانة واحدة بينما أحضر الآخرون أزهارًا كثيرة', 'أحضر حزمة كبيرة من الحطب', 'عاد قبل الجميع بأكبر باقة'] },
      0,
      T('Yunus returned late with a single daisy while the others had picked many flowers.', 'عاد يونس متأخرًا ومعه أقحوانة واحدة بينما قطف الآخرون أزهارًا كثيرة.'),
    ),
    demand: 'compare',
  },
  8: {
    learningPointId: 'yunus-a2-c8-best',
    exercise: mc(
      T('Which advice from the final chapter applies to ordinary daily work?', 'أي نصيحة من الفصل الأخير تنطبق على العمل اليومي العادي؟'),
      { en: ['Always do your best and do every job well', 'Only important-looking jobs deserve care', 'Avoid ordinary work whenever possible'], ar: ['ابذل جهدك دائمًا وأد كل عمل جيدًا', 'الأعمال التي تبدو مهمة فقط تستحق العناية', 'تجنب العمل العادي متى أمكن'] },
      0,
      T('The final chapter says every job is important and people should always do their best and work well.', 'يقول الفصل الأخير إن كل عمل مهم وإن على الناس بذل جهدهم وإتقان العمل.'),
    ),
    demand: 'connect',
  },
};

const retry = (focus: string, language: 'en' | 'ar'): string => {
  const en: Record<string, string> = {
    direct: 'Return to the sentence that directly names this detail. Do not choose a nearby biography fact.',
    sequence: 'Reread the event and check what happened before and after it.',
    comparison: 'Put the two habits, actions, or situations side by side and check the stated difference.',
    'cause-result': 'Find the because/result relationship and separate the reason from the result.',
    'character-action': 'Find the person or group in the question and check what they actually did.',
    motivation: 'Find the sentence that explains why the action happened. Use the stated reason only.',
    theme: 'Return to the explicit value or lesson and connect it with the event instead of choosing a random detail.',
  };
  const ar: Record<string, string> = {
    direct: 'ارجع إلى الجملة التي تذكر هذه المعلومة مباشرة ولا تختر حقيقة سيرة قريبة.',
    sequence: 'أعد قراءة الحدث وتحقق مما حدث قبله وبعده.',
    comparison: 'ضع العادتين أو الفعلين أو الموقفين جنبًا إلى جنب وتحقق من الفرق المذكور.',
    'cause-result': 'ابحث عن علاقة السبب والنتيجة وافصل السبب عن النتيجة.',
    'character-action': 'اعثر على الشخص أو المجموعة في السؤال وتحقق مما فعلوه فعلًا.',
    motivation: 'ابحث عن الجملة التي تشرح سبب الفعل واستخدم السبب المذكور فقط.',
    theme: 'ارجع إلى القيمة أو الدرس الصريح واربطه بالحدث بدل اختيار تفصيل عشوائي.',
  };
  return (language === 'en' ? en : ar)[focus] ?? (language === 'en' ? 'Return to the relevant chapter evidence and check the exact relationship.' : 'ارجع إلى دليل الفصل المناسب وتحقق من العلاقة الدقيقة.');
};

const demand = (focus: string): BlueprintCognitiveDemandV2 => {
  if (focus === 'sequence') return 'sequence';
  if (focus === 'comparison') return 'compare';
  if (focus === 'cause-result' || focus === 'character-action' || focus === 'motivation') return 'connect';
  if (focus === 'theme' || focus === 'inference') return 'infer';
  return 'identify';
};

const improve = (item: BlueprintAssessmentItem, chapter: LearningBlueprintChapter, override?: BlueprintCognitiveDemandV2): BlueprintAssessmentItem => {
  const point = chapter.evidencePoints.find(candidate => candidate.id === item.learningPointId);
  const focus = point?.focus ?? 'direct';
  const enExplanation = item.exercise.en.explanation || point?.claim.en || '';
  const arExplanation = item.exercise.ar.explanation || point?.claim.ar || '';
  return {
    ...item,
    learningOutcomeId: point?.learningOutcomeId ?? item.learningOutcomeId,
    exercise: {
      en: { ...item.exercise.en, feedback: { correct: enExplanation ? `Correct. ${enExplanation}` : 'Correct. The answer matches the chapter.', incorrect: retry(focus, 'en') } },
      ar: { ...item.exercise.ar, feedback: { correct: arExplanation ? `صحيح. ${arExplanation}` : 'صحيح. الإجابة تطابق الفصل.', incorrect: retry(focus, 'ar') } },
    },
    quality: {
      cognitiveDemand: override ?? demand(focus),
      assessmentPurpose: T('Measure a meaningful biographical or value-based chapter idea without reducing the book to dates and trivia.', 'قياس فكرة ذات معنى من السيرة أو القيم دون اختزال الكتاب في التواريخ والتفاصيل العشوائية.'),
      successEvidence: point?.claim ?? T('The learner gives the response supported by the linked evidence.', 'يقدم المتعلم الاستجابة التي يدعمها الدليل المرتبط.'),
      misconceptionTargets: [T('The learner may remember a visible detail but miss the simple relationship or lesson attached to it.', 'قد يتذكر المتعلم تفصيلًا ظاهرًا لكنه يغفل العلاقة أو الدرس البسيط المرتبط به.')],
      feedback: { correct: T('Confirm and connect the response to evidence.', 'تأكيد الاستجابة وربطها بالدليل.'), incorrect: T('Redirect to the relevant evidence without giving the answer immediately.', 'إعادة التوجيه إلى الدليل المناسب دون إعطاء الإجابة مباشرة.'), rationale: T('The retry cue keeps the learner inside the chapter and repairs the specific relationship.', 'يبقي تلميح إعادة المحاولة المتعلم داخل الفصل ويعالج العلاقة المحددة.') },
    },
  };
};

export const applyYunusA2FinalPedagogy = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const quick = quicks[chapter.chapterId];
  if (!quick) throw new Error(`[Yunus A2 Gold] Missing Quick Challenge for Chapter ${chapter.chapterId}.`);
  const items = chapter.assessmentItems.map(item => item.id === `yunus-a2-c${chapter.chapterId}-quick`
    ? { ...item, learningPointId: quick.learningPointId, exercise: quick.exercise }
    : item);
  return { ...chapter, assessmentItems: items.map(item => improve(item, chapter, item.id === `yunus-a2-c${chapter.chapterId}-quick` ? quick.demand : undefined)) };
};
