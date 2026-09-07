import type { BookData, Exercise, PageData } from '../../../types';

import { abrahamB2Pages as rawAbrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr as rawAbrahamB2PagesAr } from './ar/pages';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './en/exercises';
import {
  abrahamB2FinalChallengeExercisesAr,
  abrahamB2KnowledgeCheckExercisesAr,
  abrahamB2QuickChallengesAr,
  abrahamB2VocabularyChallengePairsAr,
} from './ar/exercises';
import { abrahamB2LanguageFocusPart1 } from './en/languageFocus';
import { abrahamB2LanguageFocusPart2 } from './en/languageFocus2';
import { abrahamB2LanguageFocusPart3 } from './en/languageFocus3';
import { abrahamB2LanguageFocusPart1Ar } from './ar/languageFocus';
import { abrahamB2LanguageFocusPart2Ar } from './ar/languageFocus2';
import { abrahamB2LanguageFocusPart3Ar } from './ar/languageFocus3';
import { abrahamB2TeacherGuideEn, abrahamB2TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB2TeacherGuideAr, abrahamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB2SelfStudyGuideEn } from './en/selfStudyGuide';
import { abrahamB2SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 35 }, (_, index) => index + 1));

const englishLanguageFocus: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusPart1,
  ...abrahamB2LanguageFocusPart2,
  ...abrahamB2LanguageFocusPart3,
};

const arabicLanguageFocus: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusPart1Ar,
  ...abrahamB2LanguageFocusPart2Ar,
  ...abrahamB2LanguageFocusPart3Ar,
};

const abrahamB2LanguageReviewExercises: Exercise[] = [
  {
    id: 'abraham-b2-language-review-1-source-qualification',
    type: 'matching',
    title: 'Source, Report and Historical Distance',
    instructions: 'Match each reporting frame with the degree of commitment it signals.',
    question: 'How can a B2 writer preserve the difference between direct attribution, cautious synthesis, report and uncertain tradition?',
    matchingPairs: [
      { left: 'According to X, ...', right: 'directly attributes a claim to a named source' },
      { left: 'Some sources suggest that ...', right: 'marks limited evidence and avoids presenting the claim as settled fact' },
      { left: 'It is believed that ...', right: 'presents a historical belief with distance from certainty' },
      { left: 'It is reported / said that ...', right: 'passes on a narration or circulating claim without full authorial commitment' },
    ],
    correctAnswer: {
      'According to X, ...': 'directly attributes a claim to a named source',
      'Some sources suggest that ...': 'marks limited evidence and avoids presenting the claim as settled fact',
      'It is believed that ...': 'presents a historical belief with distance from certainty',
      'It is reported / said that ...': 'passes on a narration or circulating claim without full authorial commitment',
    },
    explanation: 'Across the book, source frames protect the boundary between evidence, narration, belief and interpretation.',
    feedback: {
      correct: 'Correct. The degree of commitment matches the reporting frame.',
      incorrect: 'Ask whether the wording names a source, limits the evidence, reports a belief, or passes on a narration at a distance.',
    },
  },
  {
    id: 'abraham-b2-language-review-2-viewpoint-time',
    type: 'matching',
    title: 'Time Viewed from Different Points',
    instructions: 'Match each form with the temporal viewpoint it creates.',
    question: 'How do B2 writers position events relative to a past viewpoint?',
    matchingPairs: [
      { left: 'was going to leave', right: 'a future plan viewed from a point in the past' },
      { left: 'would later become', right: 'a later development presented from an earlier past viewpoint' },
      { left: 'had already changed', right: 'an event completed before another past event' },
      { left: 'was about to begin when ...', right: 'an imminent action interrupted or redirected by another event' },
    ],
    correctAnswer: {
      'was going to leave': 'a future plan viewed from a point in the past',
      'would later become': 'a later development presented from an earlier past viewpoint',
      'had already changed': 'an event completed before another past event',
      'was about to begin when ...': 'an imminent action interrupted or redirected by another event',
    },
    explanation: 'The chapters repeatedly use tense and aspect to show plans, later developments, completed background and turning points.',
    feedback: {
      correct: 'Correct. You identified the viewpoint created by each form.',
      incorrect: 'Separate future-from-the-past, earlier completed background, and an action that is just about to happen.',
    },
  },
  {
    id: 'abraham-b2-language-review-3-contrast-reframing',
    type: 'multiple-choice',
    title: 'Contrast Without Oversimplifying',
    instructions: 'Choose the sentence that acknowledges one point and then reframes it more precisely.',
    question: 'Which sentence best uses concession and corrective contrast?',
    options: [
      'Although the policy appears strict, its purpose is not simply to punish but to make expectations clearer.',
      'The policy is strict, and strict policies are strict because they are strict.',
      'The policy is either completely successful or completely useless.',
    ],
    correctAnswer: 0,
    explanation: 'Although concedes an appearance, while not simply ... but ... redirects the claim toward a more precise interpretation.',
    feedback: {
      correct: 'Correct. The sentence concedes, then refines the argument.',
      incorrect: 'Look for a sentence that accepts an initial impression but avoids an all-or-nothing conclusion.',
    },
  },
  {
    id: 'abraham-b2-language-review-4-cause-purpose-result',
    type: 'sequencing',
    title: 'Build a Cause–Purpose–Result Chain',
    instructions: 'Put the moves into the most coherent order for a short analytical paragraph.',
    question: 'How can a paragraph distinguish a problem, a purpose, an action and a result?',
    sequencingItems: [
      { id: '1', text: 'The original process created repeated delays.' },
      { id: '2', text: 'To reduce those delays, the team changed the order of the steps.' },
      { id: '3', text: 'They also added a final check so that mistakes could be caught earlier.' },
      { id: '4', text: 'As a result, the process became faster without removing the quality check.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'The sequence moves from cause/problem to purpose, action and a measured result.',
    feedback: {
      correct: 'Correct. The relationships are now explicit and coherent.',
      incorrect: 'Start with the problem, then state the purpose, describe the action, and finish with its result.',
    },
  },
  {
    id: 'abraham-b2-language-review-5-condition-consequence',
    type: 'multiple-choice',
    title: 'Condition, Possibility and Consequence',
    instructions: 'Choose the sentence in which the consequence matches the strength of the condition.',
    question: 'Which sentence is the most appropriately calibrated?',
    options: [
      'If the evidence remains incomplete, the conclusion should remain open to revision.',
      'If one detail is uncertain, the whole argument must be false.',
      'Unless every source agrees, all possible explanations are equally certain.',
    ],
    correctAnswer: 0,
    explanation: 'The first sentence links an incomplete condition to a proportionate, non-absolute consequence.',
    feedback: {
      correct: 'Correct. The strength of the consequence matches the condition.',
      incorrect: 'Avoid a conclusion that is stronger than the evidence or condition allows.',
    },
  },
  {
    id: 'abraham-b2-language-review-6-reference-cohesion',
    type: 'matching',
    title: 'Reference and Cohesion Across Sentences',
    instructions: 'Match each form with the cohesion job it performs.',
    question: 'How do B2 writers keep a longer paragraph connected without repeating every noun?',
    matchingPairs: [
      { left: 'the group who ...', right: 'adds defining information while keeping the same referent active' },
      { left: 'the place where ...', right: 'links a location to information about what happens there' },
      { left: 'this decision', right: 'refers back to a whole previous action or proposition' },
      { left: 'some ..., while others ...', right: 'organises parallel groups without overgeneralising them' },
    ],
    correctAnswer: {
      'the group who ...': 'adds defining information while keeping the same referent active',
      'the place where ...': 'links a location to information about what happens there',
      'this decision': 'refers back to a whole previous action or proposition',
      'some ..., while others ...': 'organises parallel groups without overgeneralising them',
    },
    explanation: 'Relative clauses, demonstrative reference and parallel group framing support coherence across longer stretches of discourse.',
    feedback: {
      correct: 'Correct. Each form has a different cohesion role.',
      incorrect: 'Decide whether the form defines a person/group, anchors a place, refers back to an earlier idea, or compares parallel groups.',
    },
  },
  {
    id: 'abraham-b2-language-review-7-evidence-interpretation',
    type: 'fill-blanks',
    title: 'Keep Evidence Separate from Interpretation',
    instructions: 'Complete the sentence with the phrase that marks interpretation rather than direct evidence.',
    question: 'Which wording keeps the writer from presenting an inference as a fact?',
    fillBlanksText: 'The pattern is clear in the data; however, it [blank] a change in behaviour rather than proving one by itself.',
    correctAnswer: 'can be interpreted as',
    explanation: '“Can be interpreted as” explicitly marks an inference. It does not turn the interpretation into direct evidence.',
    feedback: {
      correct: 'Correct. The wording preserves the evidence–interpretation boundary.',
      incorrect: 'Use a phrase that offers a possible reading without claiming that the evidence proves it directly.',
    },
  },
  {
    id: 'abraham-b2-language-review-8-transfer',
    type: 'reflection',
    title: 'B2 Transfer: Build a Qualified Analytical Paragraph',
    instructions: 'Write or present one coherent 8–10 sentence paragraph about a non-story issue such as a school policy, a historical claim, a technology debate, a sports decision or a social trend.',
    question: 'Can you combine the book’s language resources into one nuanced argument rather than a sequence of isolated grammar forms?',
    correctAnswer: null,
    explanation: 'The aim is cumulative transfer: source control, viewpoint, contrast, cause/purpose/result, condition, cohesion and evidence-aware interpretation.',
    feedback: {
      correct: 'Use the language resources as tools for precision, stance and coherence.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Attribute or qualify at least one claim using “According to...”, “Some sources suggest...”, “It is believed...” or an equivalent frame.', mode: 'Individual' },
      { question: 'Use one past-viewpoint form such as “would later...”, “was going to...” or a past perfect background form.', mode: 'Individual' },
      { question: 'Include one concession/corrective contrast and one clear cause–purpose–result relationship.', mode: 'Pair' },
      { question: 'End with a conclusion whose certainty and scope do not exceed the evidence you presented.', mode: 'Pair' },
    ],
  },
];

const abrahamB2LanguageReviewExercisesAr: Exercise[] = [
  {
    id: 'abraham-b2-ar-language-review-1-source-qualification',
    type: 'matching',
    title: 'المصدر ودرجة اليقين',
    instructions: 'صل كل صيغة بالدرجة التي تعبّر بها عن الالتزام بالمعلومة.',
    question: 'كيف يفرّق الكاتب بين الإسناد المباشر والرواية والاعتقاد التاريخي والقول غير المحسوم؟',
    matchingPairs: [
      { left: 'بحسب / وفقًا لـ...', right: 'إسناد مباشر إلى مصدر محدد' },
      { left: 'تشير بعض المصادر إلى أن...', right: 'عرض معلومة محدودة الدليل دون تحويلها إلى حقيقة محسومة' },
      { left: 'يُعتقد أن...', right: 'نقل اعتقاد تاريخي مع مسافة عن اليقين' },
      { left: 'رُوي / يُقال إن...', right: 'نقل رواية أو قول متداول دون التزام كامل بصحته' },
    ],
    correctAnswer: {
      'بحسب / وفقًا لـ...': 'إسناد مباشر إلى مصدر محدد',
      'تشير بعض المصادر إلى أن...': 'عرض معلومة محدودة الدليل دون تحويلها إلى حقيقة محسومة',
      'يُعتقد أن...': 'نقل اعتقاد تاريخي مع مسافة عن اليقين',
      'رُوي / يُقال إن...': 'نقل رواية أو قول متداول دون التزام كامل بصحته',
    },
    explanation: 'تكررت في الفصول صيغ تضبط المسافة بين الدليل والرواية والاعتقاد والتفسير.',
    feedback: {
      correct: 'صحيح. حافظت على درجة اليقين التي تحملها كل صيغة.',
      incorrect: 'اسأل: هل العبارة تسند إلى مصدر محدد، أم تقيد الدليل، أم تنقل اعتقادًا، أم تروي قولًا على مسافة؟',
    },
  },
  {
    id: 'abraham-b2-ar-language-review-2-viewpoint-time',
    type: 'matching',
    title: 'الزمن من منظور الماضي',
    instructions: 'صل كل تركيب بالمنظور الزمني الذي يبنيه.',
    question: 'كيف تستخدم العربية الزمن والسياق لربط حدث لاحق بنقطة سابقة في الماضي؟',
    matchingPairs: [
      { left: 'كان سيغادر', right: 'خطة مستقبلية تُرى من نقطة ماضية' },
      { left: 'كان يعلم أنه سيصبح...', right: 'تطور لاحق معروض من منظور سابق' },
      { left: 'كان قد تغيّر بالفعل', right: 'حدث اكتمل قبل حدث ماضٍ آخر' },
      { left: 'كان على وشك أن يبدأ حين...', right: 'فعل وشيك قطعه أو غيّر مساره حدث آخر' },
    ],
    correctAnswer: {
      'كان سيغادر': 'خطة مستقبلية تُرى من نقطة ماضية',
      'كان يعلم أنه سيصبح...': 'تطور لاحق معروض من منظور سابق',
      'كان قد تغيّر بالفعل': 'حدث اكتمل قبل حدث ماضٍ آخر',
      'كان على وشك أن يبدأ حين...': 'فعل وشيك قطعه أو غيّر مساره حدث آخر',
    },
    explanation: 'تستخدم العربية في الفصول كان + سـ، وكان قد، وعلى وشك أن لضبط ترتيب الأحداث والمنظور إليها.',
    feedback: {
      correct: 'صحيح. ميّزت بين المستقبل من منظور الماضي والخلفية السابقة والفعل الوشيك.',
      incorrect: 'افصل بين ما سيحدث لاحقًا من نقطة ماضية، وما كان قد اكتمل قبلها، وما كان على وشك البدء.',
    },
  },
  {
    id: 'abraham-b2-ar-language-review-3-contrast-reframing',
    type: 'multiple-choice',
    title: 'الاستدراك وإعادة التأطير',
    instructions: 'اختر الجملة التي تقر بنقطة أولى ثم تعيد ضبطها بدقة.',
    question: 'أي جملة تستخدم الاستدراك والتصحيح دون تبسيط مخل؟',
    options: [
      'مع أن النظام يبدو صارمًا، فإن هدفه ليس مجرد العقاب، بل توضيح ما هو متوقع من الجميع.',
      'النظام صارم لأنه صارم، ولذلك فهو صارم.',
      'النظام إما ناجح تمامًا أو عديم الفائدة تمامًا.',
    ],
    correctAnswer: 0,
    explanation: 'تقر الجملة الأولى بانطباع أولي ثم تعيد توجيه المعنى بواسطة ليس... بل... .',
    feedback: {
      correct: 'صحيح. الاستدراك لا يلغي النقطة الأولى بل يعيد تفسيرها.',
      incorrect: 'ابحث عن جملة تبدأ بإقرار محدود ثم تنقل مركز الحجة إلى معنى أدق.',
    },
  },
  {
    id: 'abraham-b2-ar-language-review-4-cause-purpose-result',
    type: 'sequencing',
    title: 'بناء سلسلة السبب والغاية والنتيجة',
    instructions: 'رتب الجمل لتكوين فقرة تحليلية مترابطة.',
    question: 'كيف تميز فقرة B2 بين المشكلة والغاية والإجراء والنتيجة؟',
    sequencingItems: [
      { id: '1', text: 'كان النظام القديم يسبب تأخرًا متكررًا.' },
      { id: '2', text: 'ولتقليل هذا التأخر، غيّر الفريق ترتيب الخطوات.' },
      { id: '3', text: 'وأضاف فحصًا أخيرًا لكي تُكتشف الأخطاء في وقت أبكر.' },
      { id: '4', text: 'ولذلك أصبح العمل أسرع من غير أن يُلغى فحص الجودة.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'ينتقل التسلسل من السبب أو المشكلة إلى الغاية، ثم الإجراء، ثم نتيجة محسوبة.',
    feedback: {
      correct: 'صحيح. أصبحت العلاقات بين الجمل واضحة.',
      incorrect: 'ابدأ بالمشكلة، ثم اذكر الغاية، ثم الإجراء، ثم النتيجة.',
    },
  },
  {
    id: 'abraham-b2-ar-language-review-5-condition-consequence',
    type: 'multiple-choice',
    title: 'الشرط والنتيجة بدرجة مناسبة',
    instructions: 'اختر الجملة التي تجعل قوة النتيجة متناسبة مع قوة الشرط.',
    question: 'أي جملة تضبط العلاقة بين الشرط والنتيجة بصورة أفضل؟',
    options: [
      'إن بقيت الأدلة ناقصة، فينبغي أن تبقى النتيجة قابلة للمراجعة.',
      'إن كان تفصيل واحد غير مؤكد، فالحجة كلها خاطئة بالضرورة.',
      'إن لم تتفق كل المصادر، فجميع التفسيرات صحيحة بالدرجة نفسها.',
    ],
    correctAnswer: 0,
    explanation: 'الجملة الأولى تربط نقص الدليل بنتيجة متناسبة معه، لا بحكم مطلق.',
    feedback: {
      correct: 'صحيح. النتيجة لا تتجاوز ما يسمح به الشرط.',
      incorrect: 'تجنب نتيجة أقوى من الشرط أو الأدلة التي سبقتها.',
    },
  },
  {
    id: 'abraham-b2-ar-language-review-6-reference-cohesion',
    type: 'matching',
    title: 'الإحالة والتماسك بين الجمل',
    instructions: 'صل كل تركيب بوظيفته في ربط أجزاء الفقرة.',
    question: 'كيف يحافظ الكاتب على الترابط من غير تكرار الأسماء والأفكار نفسها؟',
    matchingPairs: [
      { left: 'الذين...', right: 'إضافة وصف محدد مع إبقاء المرجع نفسه حاضرًا' },
      { left: 'المكان الذي / حيث...', right: 'ربط موقع بالمعلومة المتعلقة بما يحدث فيه' },
      { left: 'هذا القرار', right: 'الإحالة إلى فعل أو فكرة كاملة وردت قبلها' },
      { left: 'كان بعضهم... بينما كان آخرون...', right: 'تنظيم مجموعات متوازية دون تعميمها كلها في حكم واحد' },
    ],
    correctAnswer: {
      'الذين...': 'إضافة وصف محدد مع إبقاء المرجع نفسه حاضرًا',
      'المكان الذي / حيث...': 'ربط موقع بالمعلومة المتعلقة بما يحدث فيه',
      'هذا القرار': 'الإحالة إلى فعل أو فكرة كاملة وردت قبلها',
      'كان بعضهم... بينما كان آخرون...': 'تنظيم مجموعات متوازية دون تعميمها كلها في حكم واحد',
    },
    explanation: 'تسهم صلة الموصول والإحالة والربط المتوازي في تماسك الفقرة على مستوى يتجاوز الجملة المفردة.',
    feedback: {
      correct: 'صحيح. لكل تركيب وظيفة مختلفة في التماسك.',
      incorrect: 'حدد هل التركيب يصف مرجعًا، أو يثبت مكانًا، أو يعود إلى فكرة سابقة، أو يقابل بين مجموعات.',
    },
  },
  {
    id: 'abraham-b2-ar-language-review-7-evidence-interpretation',
    type: 'fill-blanks',
    title: 'الفصل بين الدليل والتفسير',
    instructions: 'أكمل الجملة بصيغة تعرض التفسير بوصفه احتمالًا لا حقيقة مباشرة.',
    question: 'أي تعبير يمنع تحويل الاستنتاج إلى حقيقة غير مقيدة؟',
    fillBlanksText: 'النمط ظاهر في البيانات، ومع ذلك [blank] علامة على تغير في السلوك، لا دليلًا قاطعًا عليه وحده.',
    correctAnswer: 'يمكن فهمه على أنه',
    explanation: 'صيغة يمكن فهمه على أنه تميز بوضوح بين ما نراه في الدليل وبين التفسير الذي نستنتجه منه.',
    feedback: {
      correct: 'صحيح. بقي التفسير منفصلًا عن الدليل المباشر.',
      incorrect: 'استخدم صيغة تقدم قراءة محتملة ولا تقول إن الدليل يثبتها يقينًا.',
    },
  },
  {
    id: 'abraham-b2-ar-language-review-8-transfer',
    type: 'reflection',
    title: 'تطبيق B2: فقرة تحليلية مقيدة ومتوازنة',
    instructions: 'اكتب أو قدم شفهيا فقرة مترابطة من 8–10 جمل عن قضية خارج القصة مثل قرار مدرسي أو ادعاء تاريخي أو نقاش تقني أو رياضي أو ظاهرة اجتماعية.',
    question: 'هل تستطيع دمج أدوات اللغة والخطاب في حجة واحدة دقيقة بدل استخدام تراكيب منفصلة؟',
    correctAnswer: null,
    explanation: 'الهدف هو نقل المهارة: ضبط المصدر والزمن والموقف والاستدراك والسبب والغاية والشرط والإحالة والتفسير المقيد.',
    feedback: {
      correct: 'استخدم التراكيب لخدمة الدقة والموقف والتماسك.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'انسب أو قيد ادعاء واحدًا على الأقل بصيغة مثل بحسب... أو تشير بعض المصادر... أو يُعتقد أن... .', mode: 'Individual' },
      { question: 'استخدم تركيبًا واحدًا ينظر إلى المستقبل من نقطة في الماضي مثل كان سيـ أو كان يعلم أن... سيـ، أو استخدم كان قد للخلفية السابقة.', mode: 'Individual' },
      { question: 'أدخل استدراكًا حقيقيًا وعلاقة واضحة بين السبب والغاية والنتيجة.', mode: 'Pair' },
      { question: 'اختم بنتيجة لا تتجاوز في يقينها أو نطاقها الأدلة التي قدمتها.', mode: 'Pair' },
    ],
  },
];

const englishFinalFeedback = {
  correct: 'Correct. Your answer is supported by the story as a whole.',
  incorrect: 'Not yet. Compare the relevant chapters and try again.',
};

const arabicFinalFeedback = {
  correct: 'صحيح. إجابتك مدعومة بالقصة على مستوى الكتاب كله.',
  incorrect: 'ليست دقيقة بعد. قارن بين الفصول ذات الصلة ثم حاول مرة أخرى.',
};

const englishFinalOverrides: Record<string, Exercise> = {
  'ab-b2-f4': {
    id: 'ab-b2-f4', type: 'true-false', title: 'Final Challenge',
    instructions: 'Decide whether the claim is supported by the story.',
    question: 'Chapter 33 distinguishes animal sacrifice as an earlier prophetic practice from the human sacrifice it attributes to idolaters.',
    correctAnswer: true,
    explanation: 'The chapter says prophets before Abraham also offered animal sacrifices and contrasts this with human sacrifice attributed to idolaters.',
    feedback: englishFinalFeedback,
  },
  'ab-b2-f6': {
    id: 'ab-b2-f6', type: 'matching', title: 'Final Challenge',
    instructions: 'Match each setting with the analytical change it creates.',
    question: 'How does setting sharpen Abraham’s argument across different stages of the story?',
    correctAnswer: {},
    matchingPairs: [
      { left: 'His father worships, makes, and sells idols', right: 'the disagreement combines belief with family and livelihood' },
      { left: 'The festival leaves the temple empty with food before silent statues', right: 'the setting enables a practical test of the idols’ claimed agency' },
      { left: 'Nimrod claims power over life and death from a royal position', right: 'the debate shifts from political control to a cosmic order the ruler cannot command' },
    ],
    explanation: 'The three settings change what can be tested: family authority, idol agency, and the limits of political power.',
    feedback: englishFinalFeedback,
  },
  'ab-b2-f7': {
    id: 'ab-b2-f7', type: 'matching', title: 'Final Challenge',
    instructions: 'Match each family or place connection with the later legacy described in the narrative.',
    question: 'How does the story extend Abraham’s legacy beyond one person and one location?',
    correctAnswer: {},
    matchingPairs: [
      { left: 'Ishmael’s line', right: 'Mecca/Hijaz and the line connected with Prophet Muhammad in the narrative' },
      { left: 'Isaac’s line', right: 'the line connected with Jacob and later prophets in the narrative' },
      { left: 'The restored Ka‘ba', right: 'a continuing place of worship and pilgrimage presented for people beyond one family branch' },
    ],
    explanation: 'The ending combines family lines with a transregional place of worship, so the legacy is both genealogical and geographic.',
    feedback: englishFinalFeedback,
  },
  'ab-b2-f8': {
    id: 'ab-b2-f8', type: 'fill-blanks', title: 'Final Challenge',
    instructions: 'Complete the cross-chapter synthesis with the best analytical word.',
    question: 'Complete the contrast across the idol and Nimrod debates.',
    fillBlanksText: 'Abraham repeatedly moves the argument away from inherited or political [blank] and toward evidence that can be examined.',
    correctAnswer: 'authority',
    explanation: 'The idolaters appeal to inherited practice and Nimrod relies on royal power; Abraham repeatedly redirects the argument toward observable or testable evidence.',
    feedback: englishFinalFeedback,
  },
  'ab-b2-f9': {
    id: 'ab-b2-f9', type: 'fill-blanks', title: 'Final Challenge',
    instructions: 'Complete the whole-story synthesis with the best concept.',
    question: 'Complete the synthesis of the closing family chapters.',
    fillBlanksText: 'From sacrifice to building and pilgrimage, the closing chapters turn family submission into a continuing [blank].',
    correctAnswer: 'legacy',
    explanation: 'The final chapters connect submission, the Ka‘ba, pilgrimage, descendants, and continuing guidance into a lasting legacy.',
    feedback: englishFinalFeedback,
  },
};

const arabicFinalOverrides: Record<string, Exercise> = {
  'ab-b2-ar-f4': {
    id: 'ab-b2-ar-f4', type: 'true-false', title: 'التحدي النهائي',
    instructions: 'قرر هل الادعاء مدعوم بالقصة أم لا.',
    question: 'يميّز الفصل الثالث والثلاثون بين التضحية بالحيوان بوصفها ممارسة نبوية سابقة وبين التضحية البشرية التي ينسبها إلى عبدة الأصنام.',
    correctAnswer: true,
    explanation: 'يذكر الفصل أن أنبياء قبل إبراهيم قدّموا حيوانات، ويقابل ذلك بالتضحية البشرية التي ينسبها إلى عبدة الأصنام.',
    feedback: arabicFinalFeedback,
  },
  'ab-b2-ar-f6': {
    id: 'ab-b2-ar-f6', type: 'matching', title: 'التحدي النهائي',
    instructions: 'صل كل سياق بالتغير التحليلي الذي يسببه.',
    question: 'كيف يجعل السياق حجة إبراهيم أكثر حدة في مراحل مختلفة من القصة؟',
    correctAnswer: {},
    matchingPairs: [
      { left: 'أبوه يعبد الأصنام ويصنعها ويبيعها', right: 'يجمع الخلاف بين العقيدة والأسرة ومصدر المعيشة' },
      { left: 'يخلو المعبد في الاحتفال ويبقى الطعام أمام تماثيل صامتة', right: 'يتيح السياق اختباراً عملياً لفكرة قدرة الأصنام على الفعل' },
      { left: 'يدّعي نمرود القدرة على الإحياء والإماتة من موقع السلطة', right: 'تنتقل المناظرة من التحكم السياسي إلى نظام كوني لا يملكه الحاكم' },
    ],
    explanation: 'تغيّر السياقات ما يمكن اختباره: سلطة الأسرة، وفاعلية الأصنام، وحدود القوة السياسية.',
    feedback: arabicFinalFeedback,
  },
  'ab-b2-ar-f7': {
    id: 'ab-b2-ar-f7', type: 'matching', title: 'التحدي النهائي',
    instructions: 'صل كل فرع أو مكان بالامتداد اللاحق الذي يصفه السرد.',
    question: 'كيف يوسّع السرد إرث إبراهيم ليتجاوز شخصاً واحداً ومكاناً واحداً؟',
    correctAnswer: {},
    matchingPairs: [
      { left: 'نسل إسماعيل', right: 'مكة والحجاز والسلسلة المرتبطة بالنبي محمد صلى الله عليه وسلم في السرد' },
      { left: 'نسل إسحاق', right: 'السلسلة المرتبطة بيعقوب وأنبياء لاحقين في السرد' },
      { left: 'الكعبة بعد رفع قواعدها', right: 'مكان عبادة وحج مستمر يقدمه السرد للناس بما يتجاوز فرعاً أسرياً واحداً' },
    ],
    explanation: 'تجمع الخاتمة بين خطوط الأسرة ومكان عبادة عابر للمناطق، فيصبح الإرث نسبياً وجغرافياً معاً.',
    feedback: arabicFinalFeedback,
  },
  'ab-b2-ar-f8': {
    id: 'ab-b2-ar-f8', type: 'fill-blanks', title: 'التحدي النهائي',
    instructions: 'أكمل الخلاصة العابرة للفصول بأفضل كلمة تحليلية.',
    question: 'أكمل المقابلة بين مناظرة الأصنام ومناظرة نمرود.',
    fillBlanksText: 'ينقل إبراهيم الحجة مراراً من [blank] الموروثة أو السياسية إلى دليل يمكن فحصه.',
    correctAnswer: 'السلطة',
    explanation: 'يحتج عبدة الأصنام بالموروث، ويعتمد نمرود على قوة الملك، بينما يعيد إبراهيم توجيه النقاش إلى دليل قابل للملاحظة أو الاختبار.',
    feedback: arabicFinalFeedback,
  },
  'ab-b2-ar-f9': {
    id: 'ab-b2-ar-f9', type: 'fill-blanks', title: 'التحدي النهائي',
    instructions: 'أكمل خلاصة الكتاب بالمفهوم الأنسب.',
    question: 'أكمل خلاصة الفصول الأسرية الأخيرة.',
    fillBlanksText: 'من التضحية إلى بناء الكعبة والحج، تحوّل الفصول الأخيرة طاعة الأسرة إلى [blank] مستمر.',
    correctAnswer: 'إرث',
    explanation: 'تربط الفصول الأخيرة بين الطاعة والكعبة والحج والذرية واستمرار الهداية في إرث باقٍ.',
    feedback: arabicFinalFeedback,
  },
};

const englishFinalChallenge = abrahamB2FinalChallengeExercises.map(exercise => englishFinalOverrides[exercise.id] ?? exercise);
const arabicFinalChallenge = abrahamB2FinalChallengeExercisesAr.map(exercise => arabicFinalOverrides[exercise.id] ?? exercise);

const refineEnglishStorySupport = (page: PageData): PageData => {
  if (page.id === 1) {
    return {
      ...page,
      hotspots: page.hotspots?.map(hotspot => hotspot.id === 'b2-hs-1-2'
        ? { ...hotspot, description: 'Abraham is presented as a fundamental figure in Judaism, Christianity, and Islam.' }
        : hotspot),
    };
  }

  if (page.id === 4) {
    return {
      ...page,
      hotspots: page.hotspots?.map(hotspot => hotspot.id === 'b2-hs-4-1'
        ? { ...hotspot, description: "Islamic sources present Azer as Nimrod's idol maker." }
        : hotspot),
    };
  }

  if (page.id === 5) {
    return {
      ...page,
      hotspots: page.hotspots?.map(hotspot => {
        if (hotspot.id === 'b2-hs-5-1') return { ...hotspot, description: "In one report, Nimrod's astrologers predict that a child will threaten his reign." };
        if (hotspot.id === 'b2-hs-5-2') return { ...hotspot, description: 'The chapter reports that Azer hid his pregnant wife in a cave.' };
        return hotspot;
      }),
    };
  }

  if (page.id === 10) {
    return {
      ...page,
      vocabulary: page.vocabulary?.map(item => item.word === 'Bodies'
        ? { ...item, definition: 'Celestial bodies such as stars, planets, the sun, and the moon.' }
        : item),
    };
  }

  return page;
};

const refineArabicStorySupport = (page: PageData): PageData => {
  const withoutEnglishFallback = { ...page, audioUrl: '' };

  if (page.id === 1) {
    return {
      ...withoutEnglishFallback,
      hotspots: page.hotspots?.map(hotspot => hotspot.id === 'b2-hs-1-2'
        ? { ...hotspot, description: 'يُقَدَّمُ إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ بَوْصْفِهِ شَخْصِيَّةً أَسَاسِيَّةً فِي الْيَهُودِيَّةِ وَالْمَسِيحِيَّةِ وَالْإِسْلَامِ.' }
        : hotspot),
    };
  }

  if (page.id === 4) {
    return {
      ...withoutEnglishFallback,
      hotspots: page.hotspots?.map(hotspot => hotspot.id === 'b2-hs-4-1'
        ? { ...hotspot, description: 'تُقَدِّمُ الْمَصَادِرُ الْإِسْلَامِيَّةُ آزَرَ عَلَى أَنَّهُ صَانِعُ أَصْنَامِ النُّمْرُودِ.' }
        : hotspot),
    };
  }

  if (page.id === 5) {
    return {
      ...withoutEnglishFallback,
      hotspots: page.hotspots?.map(hotspot => {
        if (hotspot.id === 'b2-hs-5-1') return { ...hotspot, description: 'فِي إِحْدَى الرِّوَايَاتِ، تَنَبَّأَ مُنَجِّمُو النُّمْرُودِ بِطِفْلٍ سَيُهَدِّدُ مُلْكَهُ.' };
        if (hotspot.id === 'b2-hs-5-2') return { ...hotspot, description: 'تَذْكُرُ الْقِصَّةُ أَنَّ آزَرَ أَخْفَى زَوْجَتَهُ الْحَامِلَ فِي كَهْفٍ.' };
        return hotspot;
      }),
    };
  }

  return withoutEnglishFallback;
};

const cleanEnglishPage = (page: PageData): PageData => {
  const {
    exercises: _exercises,
    sequencingItems: _sequencingItems,
    vocabularyPairs: _vocabularyPairs,
    ...base
  } = page;

  if (page.id === 36) {
    return {
      ...base,
      type: 'quiz',
      title: 'B2 Knowledge Check',
      content: 'Check your understanding of the complete Prophet Abraham B2 story.',
      image: '',
      audioUrl: '',
      vocabulary: undefined,
      hotspots: undefined,
      animatedWords: undefined,
      syncPoints: undefined,
      timedChunks: undefined,
    };
  }

  if (page.id === 37) return { ...base, type: 'exercises', title: 'B2 Retrieval Review', content: 'Retrieve, reconnect, and use evidence from across the complete story.', image: '' };
  if (page.id === 38) return { ...base, type: 'vocabulary-match', title: 'B2 Vocabulary Challenge', content: 'Match ten meaning-bearing story terms with their precise meanings.', image: '', vocabulary: undefined, animatedWords: undefined };
  if (page.id === 39) return { ...base, type: 'glossary', title: 'B2 Story Glossary', image: '' };
  if (page.id === 40) return { ...base, type: 'final-challenge', title: 'Final Challenge', content: 'Demonstrate whole-book B2 mastery through analysis, evidence, comparison, and synthesis.', image: '' };
  return page.type === 'story' ? refineEnglishStorySupport(base) : base;
};

const cleanArabicPage = (page: PageData): PageData => {
  const {
    exercises: _exercises,
    sequencingItems: _sequencingItems,
    vocabularyPairs: _vocabularyPairs,
    ...base
  } = page;

  if (page.id === 36) {
    return {
      ...base,
      type: 'quiz',
      title: 'اختبار المعرفة — B2',
      content: 'اختبر فهمك لقصة النبي إبراهيم عليه السلام كاملة في مستوى B2.',
      image: '',
      audioUrl: '',
      vocabulary: undefined,
      hotspots: undefined,
      animatedWords: undefined,
      syncPoints: undefined,
      timedChunks: undefined,
    };
  }

  if (page.id === 37) return { ...base, type: 'exercises', title: 'مراجعة الاسترجاع — B2', content: 'استرجع الأدلة واربط الأفكار واستخدمها من جميع فصول القصة.', image: '' };
  if (page.id === 38) return { ...base, type: 'vocabulary-match', title: 'تحدي المفردات — B2', content: 'صل عشرة مصطلحات أساسية من القصة بمعانيها الدقيقة.', image: '', vocabulary: undefined, animatedWords: undefined };
  if (page.id === 39) return { ...base, type: 'glossary', title: 'مسرد القصة — B2', image: '' };
  if (page.id === 40) return { ...base, type: 'final-challenge', title: 'التحدي النهائي', content: 'أظهر إتقانك للقصة كاملة من خلال التحليل والدليل والمقارنة والتركيب.', image: '' };
  return page.type === 'story' ? refineArabicStorySupport(base) : base;
};

const attachEnglishLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return {
      ...page,
      exercises: [abrahamB2QuickChallenges[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 36) return { ...page, exercises: abrahamB2KnowledgeCheckExercises };
  if (page.id === 37) return {
    ...page,
    title: 'B2 Language Review',
    content: 'Review and use the source, stance, time, cohesion and discourse patterns developed across all thirty-five chapters.',
    exercises: abrahamB2LanguageReviewExercises,
  };
  if (page.id === 38) return { ...page, vocabularyPairs: abrahamB2VocabularyChallengePairs };
  if (page.id === 40) return { ...page, exercises: englishFinalChallenge };
  return page;
});

const attachArabicLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = arabicLanguageFocus[page.id];
    return {
      ...page,
      exercises: [abrahamB2QuickChallengesAr[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 36) return { ...page, exercises: abrahamB2KnowledgeCheckExercisesAr };
  if (page.id === 37) return {
    ...page,
    title: 'مراجعة اللغة B2',
    content: 'راجع واستعمل صيغ المصدر والموقف والزمن والتماسك والعلاقات الخطابية التي تطورت عبر الفصول الخمسة والثلاثين.',
    exercises: abrahamB2LanguageReviewExercisesAr,
  };
  if (page.id === 38) return { ...page, vocabularyPairs: abrahamB2VocabularyChallengePairsAr };
  if (page.id === 40) return { ...page, exercises: arabicFinalChallenge };
  return page;
});

type VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): VocabSeed => [en, ar, enDefinition, arDefinition];

const canonicalVocabulary: Record<number, readonly VocabSeed[]> = {
  1: [
    v('monotheistic belief', 'العقيدة التوحيدية', 'Belief that Allah is One and has no partner.', 'الإيمان بأن الله واحد لا شريك له.'),
    v('fundamental figure', 'الشخصية الأساسية', 'A person of central importance in a religious or historical tradition.', 'شخصية ذات أهمية محورية في تقليد ديني أو تاريخي.'),
    v('direct forefather', 'الجد المباشر', 'A direct ancestor in a family line.', 'جد يقع مباشرة في سلسلة النسب.'),
    v('Allah’s friend', 'خليل الله', 'A unique title of closeness and devotion given to Abraham.', 'لقب فريد يدل على القرب والمحبة والطاعة لله.'),
    v('idol-worshipping nation', 'يعبدون الأصنام', 'A society in which the worship of idols is widespread.', 'قوم تنتشر بينهم عبادة الأصنام.'),
  ],
  2: [
    v('life mission', 'مهمة حياته', 'The central purpose guiding a person’s life and actions.', 'الغاية الأساسية التي توجه حياة الإنسان وأعماله.'),
    v('morally upright', 'مستقيم في الأخلاق', 'Behaving according to sound moral principles.', 'ملتزم بالسلوك القويم والمبادئ الأخلاقية.'),
    v('through reasoning', 'عن طريق العقل والتفكير', 'By using logical thought to reach a conclusion.', 'باستخدام التفكير العقلي والمنطقي للوصول إلى نتيجة.'),
    v('human capacity', 'قدرات الإنسان', 'The ability of human beings to think, act, or develop.', 'قدرة الإنسان على التفكير والعمل والتطور.'),
    v('acts of worship', 'العبادات', 'Religious actions performed as devotion to Allah.', 'أعمال دينية يؤديها المؤمن تقربًا إلى الله.'),
  ],
  3: [
    v('became mixed with idolatry', 'اختلط هذا الاعتقاد بالشرك', 'Lost its original purity by becoming combined with idol worship.', 'فقد صفاءه الأصلي حين اختلط بالشرك وعبادة غير الله.'),
    v('corrupted', 'التحريف', 'Changed from an original form in a damaging or misleading way.', 'تغيير الشيء عن أصله بصورة تفسد معناه أو حقيقته.'),
    v('first revelation', 'الوحي الأول', 'The first divine message received by a prophet.', 'أول رسالة أو وحي إلهي يتلقاه النبي.'),
    v('prophethood', 'بنبوة', 'The status and mission of being a prophet.', 'مقام النبي ومهمته في تبليغ رسالة الله.'),
    v('burning sun', 'الشمس الحارقة', 'Extremely hot sunlight capable of causing suffering.', 'شمس شديدة الحرارة تسبب المشقة والألم.'),
  ],
  4: [
    v('Islamic sources', 'المصادر الإسلامية', 'Texts and reports used within the Islamic scholarly tradition.', 'نصوص وروايات يعتمد عليها التراث العلمي الإسلامي.'),
    v('migrated from there', 'هاجر من هناك', 'Moved from one region to settle in another.', 'انتقل من منطقة إلى أخرى للإقامة فيها.'),
    v('prosperous', 'مزدهرة', 'Economically or materially successful and flourishing.', 'ناجحة ومتقدمة من الناحية المادية والاقتصادية.'),
    v('agriculture and industry', 'الزراعة والصناعة', 'Two major areas of economic production.', 'مجالان أساسيان من مجالات الإنتاج الاقتصادي.'),
    v('kings and rulers', 'ملوكهم وحكامهم', 'People holding political authority over a society.', 'أشخاص يملكون السلطة السياسية على المجتمع.'),
  ],
  5: [
    v('whole system', 'النظام كله', 'The complete social or political structure, not one isolated part.', 'البنية الاجتماعية أو السياسية كاملة لا جزءًا منفردًا منها.'),
    v('fortunetellers', 'العرافين', 'People claiming to predict events through supernatural knowledge.', 'أشخاص يزعمون معرفة المستقبل بوسائل غيبية.'),
    v('astrologers', 'المنجمين', 'People who interpret stars as signs of human events.', 'أشخاص يربطون حركة النجوم بأحداث البشر.'),
    v('reign', 'حكم نمرود', 'The period or authority of a ruler’s government.', 'مدة حكم الملك أو سلطته على البلاد.'),
    v('throne', 'يهدد عرشه', 'A symbol of royal power and political rule.', 'رمز للسلطة الملكية والحكم السياسي.'),
  ],
  6: [
    v('sound judgement', 'رشده', 'The ability to make wise and reasonable decisions.', 'القدرة على اتخاذ قرارات حكيمة وصائبة.'),
    v('wisdom', 'الحكمة', 'Deep understanding used to make good judgments.', 'فهم عميق يساعد على حسن الحكم والتصرف.'),
    v('sculptures', 'تماثيل وأصناما', 'Figures shaped from material such as stone or wood.', 'أشكال مصنوعة من الحجر أو الخشب ونحوهما.'),
    v('spontaneously', 'تلقائيا', 'Naturally and without being planned in advance.', 'بصورة طبيعية ومن غير تخطيط مسبق.'),
    v('Chief God', 'الإله الأكبر', 'The deity regarded as highest within a polytheistic system.', 'الإله الذي يعد الأعلى في نظام متعدد الآلهة.'),
  ],
  7: [
    v('reasonable person', 'شخص عاقل', 'A person capable of logical and sensible judgment.', 'شخص قادر على التفكير المنطقي والحكم السليم.'),
    v('lifeless', 'بلا حياة', 'Having no life or living power.', 'خالي من الحياة ولا يملك قدرة الكائن الحي.'),
    v('entirely helpless', 'عاجزة تماما', 'Completely unable to act or defend oneself.', 'غير قادر إطلاقًا على الفعل أو الدفاع عن النفس.'),
    v('niche', 'محراب', 'A recessed or designated sacred space in a place of worship.', 'موضع مخصص أو مجوف داخل مكان العبادة.'),
    v('capable of hearing', 'قادرة على سماع دعائهم', 'Able to receive and respond to sound or prayer.', 'قادر على سماع الصوت أو الدعاء والاستجابة له.'),
  ],
  8: [
    v('priest', 'كاهنا', 'A religious official serving in a place of worship.', 'شخص يتولى وظيفة دينية في مكان للعبادة.'),
    v('displaying his hatred', 'إظهار كراهيته', 'Openly showing strong rejection or dislike.', 'إظهار الرفض أو الكراهية الشديدة بصورة واضحة.'),
    v('cave', 'كهفا', 'A natural hollow space inside a mountain or rock.', 'تجويف طبيعي داخل جبل أو صخر.'),
    v('certainty', 'الموقنين', 'A state of firm conviction without serious doubt.', 'حالة من اليقين الراسخ من غير شك مؤثر.'),
    v('those that set', 'الآفلين', 'Celestial objects that disappear below the horizon.', 'الأجرام التي تغيب وتختفي عن الأفق.'),
  ],
  9: [
    v('erring people', 'القوم الضالين', 'People who have moved away from the correct path.', 'قوم ابتعدوا عن الطريق أو الاعتقاد الصحيح.'),
    v('innocent', 'بريء', 'Free from responsibility for or association with something wrong.', 'منزّه عن المشاركة في أمر باطل أو المسؤولية عنه.'),
    v('heavenly bodies', 'الأجرام السماوية', 'Natural objects in space such as stars, planets, the sun, and the moon.', 'أجسام طبيعية في السماء كالنجوم والكواكب والشمس والقمر.'),
    v('astronomical objects', 'النجوم والكويكبات', 'Objects studied as part of the physical universe beyond Earth.', 'أجرام يدرسها علم الفلك خارج الأرض.'),
    v('Creator’s command', 'بأمر الخالق', 'The authority by which created things follow an ordered system.', 'الأمر الذي تخضع له المخلوقات في نظامها.'),
  ],
  10: [
    v('evidently created', 'مخلوقة بوضوح', 'Clearly showing the characteristics of something created rather than eternal.', 'تظهر بوضوح صفات المخلوق لا صفات الأزلي.'),
    v('everlasting', 'أزلي لا يزول', 'Continuing forever without ending or disappearing.', 'دائم لا ينتهي ولا يزول.'),
    v('unworthy of worship', 'غير مستحقة للعبادة', 'Not deserving religious devotion or worship.', 'لا تستحق أن تصرف لها العبادة.'),
    v('rational thinking', 'تفكير إبراهيم العقلي', 'Reasoning based on logic and evidence.', 'تفكير يعتمد على العقل والمنطق والدليل.'),
    v('uncover the truth', 'كشف الحقيقة', 'To reveal what is actually true after examination.', 'إظهار الحقيقة بعد البحث والنظر.'),
  ],
  11: [
    v('present evidence', 'تقديم الأدلة', 'To offer reasons or proof in support of a claim.', 'عرض حجج أو براهين لتأييد ادعاء.'),
    v('correctness of their beliefs', 'صحة معتقداتهم', 'The claimed truth or validity of what a group believes.', 'مدى صحة أو صدق ما يعتقده قوم.'),
    v('ridiculousness', 'سخافة ادعاءاتهم', 'The quality of being unreasonable or impossible to take seriously.', 'كون الادعاء غير معقول ولا يستند إلى حجة قوية.'),
    v('threatened him', 'هددوه', 'Warned someone of intended harm or punishment.', 'أنذروه بإيقاع الأذى أو العقوبة.'),
    v('punishment of their gods', 'عقاب آلهتهم', 'Harm they believed their deities could inflict.', 'الأذى الذي اعتقدوا أن آلهتهم تستطيع إيقاعه.'),
  ],
  12: [
    v('paid no heed', 'لم يلتفت', 'Ignored a warning or refused to give it attention.', 'لم يهتم بالتهديد ولم يجعله يغير موقفه.'),
    v('benefit and harm', 'النفع والضر', 'Positive and negative effects that may reach a person.', 'ما يصل إلى الإنسان من خير أو أذى.'),
    v('mindful', 'لتذكير قومه', 'Consciously aware of an important truth or duty.', 'واعٍ بحقيقة أو واجب مهم ومتذكر له.'),
    v('evident error', 'ضلال مبين', 'A mistake or false belief that is clearly visible.', 'خطأ أو اعتقاد باطل ظاهر بوضوح.'),
    v('bitter struggle', 'معركة حادة', 'A severe and continuing conflict between opposing sides.', 'صراع شديد ومستمر بين طرفين متعارضين.'),
  ],
  13: [
    v('duty', 'من واجبه', 'A moral responsibility a person believes must be fulfilled.', 'مسؤولية أخلاقية يرى الإنسان وجوب القيام بها.'),
    v('embarrassed', 'بالإحراج', 'Made to feel ashamed or socially uncomfortable.', 'شعر بالخجل أو الضيق أمام الآخرين.'),
    v('fatherly love', 'الحب الأبوي', 'Affection associated with the relationship between a father and child.', 'المحبة المرتبطة بعلاقة الأب بابنه.'),
    v('straight way', 'صراطا سويا', 'A correct and morally sound path.', 'طريق مستقيم صحيح من الناحية الدينية والأخلاقية.'),
    v('disobedient', 'عصيا', 'Refusing to obey rightful authority or command.', 'رافض للطاعة ومخالف للأمر.'),
  ],
  14: [
    v('harsh behavior', 'سلوك والده القاسي', 'Severe or unkind conduct toward another person.', 'تصرف شديد أو غير لين تجاه شخص آخر.'),
    v('negative consequences', 'عواقب سلبية', 'Harmful results that may follow an action.', 'نتائج ضارة قد تترتب على فعل ما.'),
    v('cause of an illness', 'سبب المرض', 'The underlying factor responsible for a disease or problem.', 'العامل الأساسي الذي يؤدي إلى مرض أو مشكلة.'),
    v('clever judge', 'القاضي الذكي', 'A judge who reasons carefully to uncover facts.', 'قاض يستخدم التفكير الدقيق لكشف الحقيقة.'),
    v('suspect', 'المشتبه به', 'A person believed possibly to be responsible for an act.', 'شخص يظن أنه قد يكون مسؤولًا عن فعل.'),
  ],
  15: [
    v('defend their beliefs', 'الدفاع عن معتقداتهم', 'To give arguments in support of what they believe.', 'تقديم حجج لتأييد ما يؤمنون به.'),
    v('confirmed their belief', 'يؤكد إيمانهم', 'Made an existing belief seem more certain to them.', 'جعل اعتقادهم القائم يبدو أكثر ثبوتًا لديهم.'),
    v('worthy of worship', 'يستحق العبادة', 'Deserving religious devotion and worship.', 'جدير بأن تصرف له العبادة.'),
    v('regulates all affairs', 'مدبر شؤون الحياة', 'Controls and orders the different matters of existence.', 'يدبر وينظم شؤون الحياة المختلفة.'),
    v('persuade', 'ولإقناعهم', 'To lead someone to accept an idea through reasons or evidence.', 'جعل شخص يقبل فكرة عن طريق الحجة والدليل.'),
  ],
  16: [
    v('beauty of Allah\'s creation', 'جمال خلق الله', 'The order and excellence seen in what Allah has created.', 'ما يظهر في خلق الله من نظام وحسن.'),
    v('His power', 'قدرته', 'The ability and authority to bring about what He wills.', 'القدرة والسلطان على إيجاد ما يشاء.'),
    v('His wisdom', 'حكمته', 'Perfect knowledge expressed in right and purposeful action.', 'العلم التام الذي يظهر في الفعل الصحيح ذي الغاية.'),
    v('offers guidance', 'هدى عباده', 'Directs people toward the right path.', 'يرشد الناس إلى الطريق الصحيح.'),
    v('heals the sick', 'يشفي المرضى', 'Restores health to people who are ill.', 'يعيد العافية إلى من أصابه المرض.'),
  ],
  17: [
    v('held on tightly', 'تمسكوا بشدة', 'Refused to give up a belief or practice.', 'رفضوا ترك اعتقاد أو ممارسة وتمسكوا بها.'),
    v('great celebration', 'احتفالا كبيرا', 'A major public festival or communal event.', 'مناسبة عامة كبيرة يشارك فيها المجتمع.'),
    v('priests', 'الكهنة', 'Religious officials responsible for ritual duties.', 'أشخاص يتولون وظائف وشعائر دينية.'),
    v('offerings', 'قرابين', 'Objects or food presented as acts of religious devotion.', 'أشياء أو طعام يقدم تعبّدًا وتقربًا.'),
    v('silent and rigid', 'صامتا جامدا', 'Unable to speak, move, or show life.', 'لا ينطق ولا يتحرك ولا تظهر فيه حياة.'),
  ],
  18: [
    v('mocking them', 'يسخر منها', 'Treating something as foolish through ridicule.', 'يتعامل معها باستهزاء لأنها تبدو له باطلة.'),
    v('false gods', 'الآلهة الباطلة', 'Beings or objects wrongly treated as divine.', 'معبودات تعامل على أنها آلهة وهي باطلة.'),
    v('practical proof', 'دليل عملي', 'Evidence demonstrated through an observable action.', 'برهان يظهر من خلال فعل يمكن ملاحظته.'),
    v('smashed into pieces', 'مكسرة إلى قطع', 'Broken violently into many separate parts.', 'محطمة إلى أجزاء كثيرة منفصلة.'),
    v('wrongdoers', 'الظالمين', 'People who act unjustly or commit serious wrongdoing.', 'أشخاص يرتكبون الظلم أو الخطأ الجسيم.'),
  ],
  19: [
    v('may witness', 'يشهدون', 'May observe an event directly and testify about it.', 'يرون الحدث مباشرة ويشهدون عليه.'),
    v('reverted', 'فرجعوا', 'Returned to an earlier state, position, or belief.', 'عادوا إلى موقف أو حال سابق.'),
    v('arrested and judged', 'باعتقال إبراهيم ومحاكمته', 'Taken into custody and subjected to a formal judgment.', 'القبض على شخص وإخضاعه للمحاكمة.'),
    v('demonstrate in public', 'ليظهر لهم أمام الناس', 'To prove or show something openly before others.', 'إظهار أمر وإثباته علنًا أمام الناس.'),
    v('undamaged', 'لا يزال سليما', 'Remaining whole and not physically harmed.', 'باق على حاله من غير كسر أو ضرر.'),
  ],
  20: [
    v('culprit', 'الجاني', 'The person or thing responsible for a wrongdoing.', 'الشخص أو الشيء المسؤول عن فعل خاطئ.'),
    v('arrogance', 'كبرياءهم', 'Excessive pride that prevents acceptance of truth.', 'غرور شديد يمنع صاحبه من قبول الحق.'),
    v('authority as tyrants', 'سلطتهم كطغاة', 'Power exercised through oppressive and unjust rule.', 'سلطة تمارس بالقهر والظلم.'),
    v('chains', 'بالسلاسل', 'Metal restraints used to prevent a person from moving freely.', 'قيود معدنية تمنع الإنسان من الحركة بحرية.'),
    v('catapult', 'منجنيقا', 'A device used to launch a heavy object over a distance.', 'آلة تستخدم لقذف جسم ثقيل إلى مسافة.'),
  ],
  21: [
    v('flames reaching the sky', 'ألسنة لهبها تبلغ السماء', 'Very high flames rising from an intense fire.', 'لهب شديد يرتفع إلى علو كبير.'),
    v('chief priest', 'كبير الكهنة', 'The highest-ranking religious official among the priests.', 'أعلى مسؤول ديني بين الكهنة.'),
    v('angel Gabriel', 'الملك جبريل', 'The angel Gabriel, presented as a messenger from Allah.', 'جبريل عليه السلام، الملك الذي يبلغ رسالات الله.'),
    v('coolness and safety', 'بردا وسلاما', 'A state in which the fire no longer causes harm.', 'حال أصبحت فيها النار باردة لا تؤذي.'),
    v('burned his ropes', 'تحرق إلا حباله', 'Destroyed the restraints while leaving Abraham unharmed.', 'أحرقت القيود وحدها وتركت إبراهيم سالمًا.'),
  ],
  22: [
    v('sufficient for me', 'حسبي الله', 'Enough to rely on completely for protection and support.', 'كاف لي أعتمد عليه في الحفظ والنصرة.'),
    v('breathless', 'بلا نفس', 'Temporarily unable to breathe normally.', 'غير قادر على التنفس بصورة طبيعية.'),
    v('completely unharmed', 'دون أي أذى', 'Having suffered no injury or damage at all.', 'لم يصبه أي ضرر أو إصابة.'),
    v('astonishment', 'أصوات الدهشة', 'Great surprise caused by an unexpected event.', 'دهشة شديدة بسبب حدث غير متوقع.'),
    v('despotic rulers', 'الحكام الطغاة', 'Rulers who exercise power in an oppressive way.', 'حكام يستخدمون السلطة بالقهر والاستبداد.'),
  ],
  23: [
    v('declared themselves as gods', 'ادعوا الألوهية', 'Claimed divine status and authority for themselves.', 'زعموا لأنفسهم مقام الألوهية وسلطتها.'),
    v('filled with rage', 'امتلأ غضبا', 'Became extremely and intensely angry.', 'اشتد غضبه حتى سيطر عليه.'),
    v('held a dialogue', 'دار بينهما حوار', 'Took part in a structured exchange of arguments.', 'جرى بين طرفين تبادل منظم للكلام والحجج.'),
    v('undeniable', 'لا يمكن دحضه', 'So strong that it cannot reasonably be refuted.', 'قوي إلى درجة يصعب معها إبطاله بالحجة.'),
    v('sentenced to death', 'حكم عليهما بالإعدام', 'Officially ordered to be executed as a punishment.', 'صدر عليه حكم رسمي بالقتل عقوبةً.'),
  ],
  24: [
    v('put forth', 'طرح', 'Presented an argument, idea, or challenge for consideration.', 'قدم فكرة أو حجة أو تحديًا للنظر فيه.'),
    v('unquestionably', 'بلا شك', 'In a way that leaves no reasonable doubt.', 'على نحو لا يترك مجالًا معقولًا للشك.'),
    v('unable to speak', 'أعجزه عن الكلام', 'Left without an effective answer or response.', 'جعله غير قادر على تقديم جواب.'),
    v('entire kingdom', 'جميع أنحاء مملكة بابل', 'The whole territory under a ruler’s authority.', 'كل الأراضي الواقعة تحت سلطة الملك.'),
    v('every means', 'بكل الوسائل', 'All available methods that could be used to reach a goal.', 'جميع الطرق المتاحة لتحقيق غاية.'),
  ],
  25: [
    v('emigrate', 'قرر الهجرة', 'To leave one land and settle in another.', 'مغادرة بلد للاستقرار في بلد آخر.'),
    v('settled there', 'استقر فيها', 'Established a permanent or long-term home in a place.', 'اتخذ مكانًا للإقامة الدائمة أو الطويلة.'),
    v('judged fairly', 'بالعدل', 'Made decisions according to justice rather than bias.', 'حكم وفق العدل من غير تحيز.'),
    v('righteousness', 'الحق والصواب', 'Moral correctness and commitment to what is right.', 'الاستقامة الأخلاقية والالتزام بالحق.'),
    v('sterile', 'عاقرا', 'Unable to have children.', 'غير قادرة على الإنجاب.'),
  ],
  26: [
    v('offspring', 'نسل هذين الابنين', 'Children and later descendants of a person.', 'الأبناء والذرية الذين يأتون بعد الإنسان.'),
    v('descendants', 'ذرية إسماعيل', 'People descended from a particular ancestor.', 'أشخاص ينحدرون من جد معين.'),
    v('Sacred City', 'المدينة المقدسة', 'A city regarded as holy because of its religious importance.', 'مدينة لها قداسة بسبب مكانتها الدينية.'),
    v('master plan', 'تدبير الله الحكيم', 'A larger purposeful plan guiding a sequence of events.', 'خطة واسعة ذات غاية تربط أحداثًا متعددة.'),
    v('uncultivated valley', 'واد غير ذي زرع', 'A valley where crops are not grown and vegetation is scarce.', 'واد لا توجد فيه زراعة ويقل فيه النبات.'),
  ],
  27: [
    v('skin of water', 'سقاء من الماء', 'A traditional animal-skin container used to carry water.', 'وعاء تقليدي من الجلد يستخدم لحمل الماء.'),
    v('leather bag', 'كيسا جلديا', 'A bag made from treated animal skin.', 'كيس مصنوع من جلد الحيوان.'),
    v('anxious', 'تشعر بالقلق', 'Worried because the outcome of a situation is uncertain.', 'شعور بالقلق بسبب عدم وضوح ما سيحدث.'),
    v('degree of comfort', 'بقدر من الراحة', 'A limited but real feeling of reassurance.', 'قدر من الطمأنينة يخفف القلق.'),
    v('own decision', 'من تلقاء نفسه', 'A choice made independently without an external command.', 'قرار يتخذه الإنسان بإرادته من غير توجيه خارجي.'),
  ],
  28: [
    v('Sacred House', 'البيت الحرام', 'The holy sanctuary identified with the Ka‘ba.', 'المكان المقدس الذي يقصد به الكعبة.'),
    v('rebuilding', 'إعادة بناء', 'Constructing a structure again after it has been lost or damaged.', 'بناء منشأة من جديد بعد زوالها أو تلفها.'),
    v('barren valley', 'وادي مكة الجدب', 'A dry valley with little or no vegetation.', 'واد جاف يقل فيه النبات أو ينعدم.'),
    v('renewed center', 'مركزا للتوحيد', 'A place restored to function again as a central focus.', 'مكان أعيد ليؤدي دوره مركزًا من جديد.'),
    v('throughout the Arabian Peninsula', 'جميع أنحاء شبه الجزيرة العربية', 'Across the different regions of the Arabian Peninsula.', 'في المناطق المختلفة من شبه الجزيرة العربية.'),
  ],
  29: [
    v('companion', 'صحابة النبي', 'A person who lived with and supported Prophet Muhammad.', 'من لقي النبي محمد وآمن به وصحبه.'),
    v('narrated many hadiths', 'الرواة الكبار للحديث', 'Reported a large number of transmitted sayings and accounts.', 'نقل عددًا كبيرًا من الأحاديث والروايات.'),
    v('Safa', 'جبل الصفا', 'One of the two hills between which Hajar searched for help.', 'أحد الجبلين اللذين سعت هاجر بينهما طلبًا للماء.'),
    v('patient search', 'بحث هاجر المثابر', 'A persistent effort continued despite hardship.', 'سعي مستمر بصبر رغم المشقة.'),
    v('pilgrimage', 'الحج', 'A religious journey to a sacred place.', 'رحلة دينية إلى مكان مقدس.'),
  ],
  30: [
    v('hit the ground', 'ضرب الملك الأرض', 'Struck the earth with force.', 'ضرب الأرض بقوة.'),
    v('small basin', 'حوضا صغيرا', 'A small enclosed area used to collect or hold water.', 'موضع صغير يجمع الماء ويحفظه.'),
    v('abundant and flowing', 'الوفرة والتدفق', 'Present in a large quantity and moving continuously.', 'كثير ومستمر في الجريان.'),
    v('origin is unknown', 'مجهول المنشأ', 'Having a source that is not known or identified.', 'لا يعرف مصدره أو أصله.'),
    v('tribe of Jurham', 'قبيلة جرهم', 'The tribal group that later settled near the Zamzam water.', 'القبيلة التي استقرت لاحقًا قرب ماء زمزم.'),
  ],
  31: [
    v('gentle character', 'لطف طباعه', 'A kind and mild way of behaving toward others.', 'طبع يتصف باللين وحسن المعاملة.'),
    v('ultimate test', 'أعظم اختبار', 'The most demanding test of faith or commitment.', 'أشد اختبار للإيمان أو الالتزام.'),
    v('glad tidings', 'فبشرناه', 'Good news that brings joy and hope.', 'خبر سار يجلب الفرح والأمل.'),
    v('forbearing boy', 'غلام حليم', 'A boy described as patient, calm, and self-controlled.', 'غلام يتصف بالصبر والحلم وضبط النفس.'),
    v('slaughtering you', 'أذبحك', 'Killing as an act of sacrifice in the reported vision.', 'الذبح بوصفه قربانًا في الرؤيا المذكورة.'),
  ],
  32: [
    v("obeyed Allah's command", 'بطاعة الله', 'Acted in complete submission to what Allah commanded.', 'استجاب لأمر الله بخضوع كامل.'),
    v('fulfilled the vision', 'صدقت الرؤيا', 'Carried out what the vision required as a test.', 'حقق ما دلت عليه الرؤيا من اختبار.'),
    v('willingness to sacrifice', 'استعداده لتضحية', 'Readiness to give up something deeply valued for a higher duty.', 'الاستعداد لبذل شيء عزيز من أجل واجب أعلى.'),
    v('leader of humanity', 'إماما للناس', 'A person appointed as a model and guide for people.', 'شخص جعل قدوة ودليلًا للناس.'),
    v('proxy', 'الفداء', 'A substitute given in place of another.', 'بديل يقدم عوضًا عن غيره.'),
  ],
  33: [
    v('hundreds of millions', 'مئات الملايين', 'A very large number measured in multiple hundreds of millions.', 'عدد ضخم يبلغ مئات الملايين.'),
    v('widespread', 'شائعة', 'Existing or practiced across many places or among many people.', 'منتشر بين عدد كبير من الناس أو المناطق.'),
    v('firstborn children', 'أول الأبناء', 'Children born first in their families.', 'الأبناء الذين يولدون أولًا في أسرهم.'),
    v('equivalent to human life', 'تعادل حياة الإنسان', 'Treated as equal in value to a human life in the described context.', 'تعد مساوية في القيمة لحياة الإنسان في السياق المذكور.'),
    v('separation', 'بعد فراق', 'A period in which people are apart from one another.', 'مدة يكون فيها الأشخاص بعيدين بعضهم عن بعض.'),
  ],
  34: [
    v('made sacred', 'حرمه الله', 'Declared holy and protected by religious sanctity.', 'جعله مقدسًا محفوظ الحرمة.'),
    v('important task', 'أمر عظيم', 'A significant duty requiring serious effort.', 'واجب مهم يحتاج إلى جهد وعناية.'),
    v('foundations', 'أسس البناء القديم', 'The lowest structural parts on which a building is constructed.', 'الأجزاء السفلية التي يقوم عليها البناء.'),
    v('Al-Maqam', 'حجر المقام', 'The stone associated with Abraham while building the Ka‘ba.', 'الحجر المرتبط بإبراهيم أثناء بناء الكعبة.'),
    v('handing him the stones', 'يناوله الحجارة', 'Passing building stones to another person by hand.', 'إعطاء الحجارة لشخص آخر ليستخدمها في البناء.'),
  ],
  35: [
    v('restorer', 'معيد بناء', 'A person who rebuilds or returns something to an earlier state.', 'شخص يعيد بناء شيء أو إرجاعه إلى حال سابقة.'),
    v('clear evidence', 'دليل واضح', 'Strong and understandable proof supporting a conclusion.', 'برهان قوي وواضح يؤيد نتيجة.'),
    v('completion of Abraham', 'إكمالا لرسالة إبراهيم', 'The final stage that brings Abraham’s mission to completion.', 'المرحلة التي تتم بها رسالة إبراهيم.'),
    v('chosen race', 'عرق معين', 'A particular ethnic group selected over others.', 'جماعة عرقية محددة تختار دون غيرها.'),
    v('coexisted with idolatry', 'جنبا إلى جنب مع الوثنية', 'Existed at the same time and place as idol worship.', 'وجد في الوقت والمكان نفسيهما مع الوثنية.'),
  ],
};

const imageTokens = [
  '43d9ebc7-48bf-4186-b63b-67bc0e802ccb','76b855a8-e11a-4cb0-b253-66dd9fbdaa49','f4afdb01-ccbe-4c95-9d16-69c26e703deb','7ba07b75-fcfb-4638-aba5-6f39c7926a48','57f04b55-8f74-40a7-be8c-3cb930c389a5','1bd63548-b8cf-4771-bce4-e6257f83edb7','2747cb7b-e6dd-4f64-a0f7-e229fb1f4998','b0ebd110-9850-4988-a3cb-eb3a9974269a','fca90286-8c0e-4b54-873d-e690f315f907','813a7fab-1e6f-4972-b23e-9e26fd9dec92','31c4c791-2a72-46a1-b54c-a10fe39472db','66045d4f-213c-4096-8776-df44861d0ea5','66892559-503c-4a8f-a4ab-2192bbe5851c','a806d7bc-e4ff-41b0-bc59-5192dce9440f','adb653da-0511-40dc-9db5-02c362fb3b20','e290f82a-46e4-4fd5-ad84-aa98df6f87cf','f3799f77-fe5d-4f3d-8f93-e90c9b1ef428','014cbefa-f28e-4915-a830-0256099d9a24','8a010ead-3641-4729-b9ee-aefcbed2be7b','46806189-2bf4-4bf7-b1c7-a8d934b2c191','bddaf258-5e76-44c4-a78a-36db4249d291','5b890972-155f-4ceb-a5ad-0027cc3524d4','3e850ea7-1b41-4439-bfb9-8c7fa2b4ed25','e809ade7-76af-453c-b299-cd151511e886','9cc99be9-686a-4898-bfec-1b3dd6ecf95b','13a18e7a-ab1f-4ce3-8d62-38b0a724aead','68966648-2077-4abf-80dd-d62eee99796e','35ed5958-0500-41a6-a170-e549c4a069f5','9d7364c7-1103-4862-af19-814cdf3a8384','1f01566b-ffc3-4fc0-be30-a13c92a9365e','258e6e7d-cfec-4f9a-af48-0a3ec52237f3','8e36da5a-2c1c-4086-9649-e34ed6586a30','e2eb0e82-eb65-45a2-b9fb-98c88bf7450e','48f70835-c4b4-4c22-ba7d-b7326278970e','580c305e-c318-42f7-aae9-ec2f6b8d306b',
] as const;

const arabicAudioTokens = [
  'ac141b9d-73c1-436e-9db5-e2dc3fe06fd0','2fe1ca83-0f4c-439b-84ad-893cfb155a19','f1628231-d7ef-4286-85d8-189a6cb72063','d2cab735-0f57-44e7-bf8a-e3e94d5fd540','9b385b4b-8229-4f70-bab4-a0e45a2ed9e4','7a447a31-0345-4e56-88fd-3face653336a','b69ea386-7b1a-4f10-9381-64bf4c81eab6','995beb9f-6ab9-4d16-947b-df0fe3419498','654667a2-9814-4833-a9c8-e63820c057ae','99e6a224-24cd-467d-857e-36ee636d9a0e','88f3cd04-ae9c-4031-aa19-8f9ea4462984','12af9feb-44d1-424a-b6eb-4b649c86655e','af710c60-adba-4d84-96e0-656a02adf01b','e31e0d8b-73e8-4fdf-aee1-f2b58cd926be','0bdc1948-ec66-446a-a11e-0043ec1b1bfe','2bcc1fc7-8b32-40ac-ac01-0ce2bf51d479','4e9a095b-2754-4809-b887-c324a9e9c05c','27dbb89e-cd63-4734-836d-b537d733800a','fa8fa126-fc86-4021-9996-2962e572a9c0','31325634-d850-42bf-a833-50e605d6d2f2','99cdb781-fde1-4824-a5d0-3f61c578e18b','e029f713-f051-415a-b795-dc1fc3c380ba','2d25817f-bddf-43db-bc00-53571ae66188','07c73128-1201-4926-b4fa-919b92d57f32','51a50c70-9ac8-496f-a7ad-0183159b1225','15521c55-6b94-427a-8f7d-471b92a04a4c','4557144f-66f6-4aae-942e-75b4895014fa','5d0add92-2802-4fea-8e44-15d2beccbc9d','6262ae57-39b0-47ab-a45f-8c1f70e3c482','6c8fea82-b220-45d7-9f06-628ef3a4c080','3724a893-f982-40d6-b829-4156355f1d7d','cabc451b-7eec-4642-b419-050782bce547','a401acfd-0c85-47bd-a479-869eaa157720','68f33245-b35d-42b4-b930-097a3bcec62b','eb631425-7204-4c9e-8d0f-70af5b7ea0e1',
] as const;

const imageUrl = (chapter: number) => `https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Fimages%2Fabraham_b2_ch${chapter}-clean.png?alt=media&token=${imageTokens[chapter - 1]}`;
const arabicAudioUrl = (chapter: number) => `https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2Farabic_audio%2FCHAPTER%20${chapter}.mp3?alt=media&token=${arabicAudioTokens[chapter - 1]}`;

const normalizeArabicChar = (char: string) => char
  .replace(/[\u064B-\u065F\u0670\u0640\u0610-\u061A\u06D6-\u06ED\u200B-\u200F\uFEFF]/g, '')
  .replace(/[أإآٱ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/ة/g, 'ه');

const normalizeArabic = (text: string) => Array.from(text).map(normalizeArabicChar).join('').replace(/\s+/g, ' ').trim();

const findEnglishSurface = (content: string, needle: string): string | null => {
  const index = content.toLocaleLowerCase('en').indexOf(needle.toLocaleLowerCase('en'));
  return index < 0 ? null : content.slice(index, index + needle.length);
};

const findArabicSurface = (content: string, needle: string): string | null => {
  let normalized = '';
  const originalIndices: number[] = [];
  let previousWasSpace = false;
  for (let i = 0; i < content.length; i += 1) {
    const raw = content[i];
    const part = normalizeArabicChar(raw);
    if (!part) continue;
    if (/\s/.test(part)) {
      if (previousWasSpace) continue;
      normalized += ' ';
      originalIndices.push(i);
      previousWasSpace = true;
      continue;
    }
    previousWasSpace = false;
    normalized += part;
    originalIndices.push(i);
  }
  const target = normalizeArabic(needle);
  const startInNormalized = normalized.indexOf(target);
  if (startInNormalized < 0 || target.length === 0) return null;
  const start = originalIndices[startInNormalized];
  const lastMapped = originalIndices[startInNormalized + target.length - 1];
  if (start == null || lastMapped == null) return null;
  let end = lastMapped + 1;
  while (end < content.length && /[\u064B-\u065F\u0670\u0610-\u061A\u06D6-\u06ED]/.test(content[end])) end += 1;
  return content.slice(start, end);
};

const hotspotCoords = (chapter: number) => {
  const leftX = 21 + ((chapter * 7) % 22);
  const rightX = 59 + ((chapter * 11) % 21);
  const firstY = 28 + ((chapter * 13) % 37);
  let secondY = 31 + ((chapter * 17) % 38);
  if (Math.abs(firstY - secondY) < 9) secondY = secondY < 52 ? secondY + 14 : secondY - 14;
  return [{ x: leftX, y: firstY }, { x: rightX, y: secondY }] as const;
};

const standardizeAbrahamStoryPages = (english: PageData[], arabic: PageData[]): [PageData[], PageData[]] => {
  const arabicById = new Map(arabic.map(page => [page.id, page]));
  const standardizedArabic = new Map<number, PageData>();
  const standardizedEnglish = english.map(page => {
    if (!STORY_IDS.has(page.id)) return page;
    const arPage = arabicById.get(page.id);
    if (!arPage) return page;
    const seeds = canonicalVocabulary[page.id] ?? [];
    const resolved = seeds.map(([enNeedle, arNeedle, enDefinition, arDefinition]) => {
      const enWord = findEnglishSurface(page.content ?? '', enNeedle);
      const arWord = findArabicSurface(arPage.content ?? '', arNeedle);
      return enWord && arWord ? { enWord, arWord, enDefinition, arDefinition } : null;
    }).filter((item): item is NonNullable<typeof item> => item !== null).slice(0, 5);

    if (resolved.length !== 5) {
      console.warn(`[Abraham B2] Chapter ${page.id} resolved ${resolved.length}/5 canonical vocabulary pairs.`);
    }

    const coordinates = hotspotCoords(page.id);
    const enVocabulary = resolved.map(item => ({ word: item.enWord, definition: item.enDefinition }));
    const arVocabulary = resolved.map(item => ({ word: item.arWord, definition: item.arDefinition }));
    const enHotspots = resolved.slice(0, 2).map((item, index) => ({
      id: `ab-b2-runtime-hs-${page.id}-${index + 1}`,
      ...coordinates[index],
      title: item.enWord,
      description: item.enDefinition,
    }));
    const arHotspots = resolved.slice(0, 2).map((item, index) => ({
      id: `ab-b2-runtime-hs-${page.id}-${index + 1}`,
      ...coordinates[index],
      title: item.arWord,
      description: item.arDefinition,
    }));

    standardizedArabic.set(page.id, {
      ...arPage,
      image: imageUrl(page.id),
      audioUrl: arabicAudioUrl(page.id),
      vocabulary: arVocabulary,
      hotspots: arHotspots,
      animatedWords: undefined,
      syncPoints: undefined,
      timedChunks: undefined,
    });

    return {
      ...page,
      image: imageUrl(page.id),
      vocabulary: enVocabulary,
      hotspots: enHotspots,
      animatedWords: undefined,
      syncPoints: undefined,
      timedChunks: undefined,
    };
  });

  return [
    standardizedEnglish,
    arabic.map(page => standardizedArabic.get(page.id) ?? page),
  ];
};

const cleanedEnglishPages = rawAbrahamB2Pages.map(cleanEnglishPage);
const cleanedArabicPages = rawAbrahamB2PagesAr.map(cleanArabicPage);
const [standardizedEnglishPages, standardizedArabicPages] = standardizeAbrahamStoryPages(cleanedEnglishPages, cleanedArabicPages);
const englishPages = attachEnglishLearning(standardizedEnglishPages);
const arabicPages = attachArabicLearning(standardizedArabicPages);

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: englishPages,
  teacherGuide: abrahamB2TeacherGuideEn,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadata,
  selfStudyGuide: abrahamB2SelfStudyGuideEn,
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: arabicPages,
  teacherGuide: abrahamB2TeacherGuideAr,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataAr,
  selfStudyGuide: abrahamB2SelfStudyGuideAr,
};

export const abrahamB2BookData = abrahamB2BookDataEn;
