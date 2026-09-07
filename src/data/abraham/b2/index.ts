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

const englishPages = attachEnglishLearning(rawAbrahamB2Pages.map(cleanEnglishPage));
const arabicPages = attachArabicLearning(rawAbrahamB2PagesAr.map(cleanArabicPage));

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
