import type {
  Level,
  PageData,
  RubricRow,
  StudentGuideMetadata,
  StudentGuideSection,
  TeacherGuideMetadata,
  TeacherGuideSection,
} from '../types';
import { getLearningLevelPolicy } from './learningLevelPolicy';

export type LearningGuideLanguage = 'en' | 'ar';

export interface LearningGuideStructure {
  knowledgeCount: number;
  vocabularyCount: number;
  reviewCount: number;
  finalCount: number;
  hasVocabularyPage: boolean;
  glossaryCount: number;
}

export interface LearningGuideBundle {
  teacherGuide: TeacherGuideSection[];
  selfStudyGuide: TeacherGuideSection[];
  teacherGuideMetadata: TeacherGuideMetadata;
  studentGuideSections: StudentGuideSection[];
  studentGuideMetadata: StudentGuideMetadata;
  studentGuideText: string;
}

const storyPages = (pages: PageData[], storyIds: number[]): PageData[] => storyIds.map(id => {
  const page = pages.find(candidate => candidate.id === id && candidate.type === 'story');
  if (!page) throw new Error(`[Learning Guide System] Story page ${id} is missing.`);
  return page;
});

const evidence = (page: PageData) => {
  const primary = page.hotspots?.[0];
  const secondary = page.hotspots?.[1];
  return {
    primaryTitle: primary?.title || page.title,
    primaryIdea: primary?.description || page.exercises?.[0]?.explanation || page.exercises?.[0]?.question || page.title,
    secondaryTitle: secondary?.title || '',
    secondaryIdea: secondary?.description || '',
    quickQuestion: page.exercises?.[0]?.question?.trim() || '',
    words: (page.vocabulary ?? []).slice(0, 5).map(entry => entry.word).filter(Boolean),
  };
};

const chapterName = (page: PageData, language: LearningGuideLanguage): string =>
  language === 'ar' ? `الفصل ${page.id}: ${page.title}` : `Chapter ${page.id}: ${page.title}`;

const evidenceText = (level: Level, language: LearningGuideLanguage) => {
  const count = getLearningLevelPolicy(level).evidenceCount;
  if (language === 'ar') return count === 1 ? 'دليل واحد' : 'دليلين';
  return count === 1 ? 'one piece of evidence' : 'two pieces of evidence';
};

const teacherSection = (
  page: PageData,
  level: Level,
  language: LearningGuideLanguage,
): TeacherGuideSection => {
  const policy = getLearningLevelPolicy(level);
  const item = evidence(page);
  const words = item.words.join(language === 'ar' ? '، ' : ', ');
  const requiredEvidence = evidenceText(level, language);

  if (language === 'ar') {
    return {
      chapter: chapterName(page, language),
      timing: policy.teacherTiming.replace('minutes', 'دقيقة'),
      objectives: [
        `شرح الفكرة الرئيسة في الفصل اعتماداً على ${requiredEvidence} من النص.`,
        item.quickQuestion
          ? `حل التحدي السريع وربط الإجابة بجملة أو حدث واضح من الفصل: ${item.quickQuestion}`
          : `تحديد معلومة واضحة عن ${item.primaryTitle}.`,
        words ? `استخدام مفردات الفصل في السياق: ${words}.` : 'استخدام ملاحظات المفردات في السياق.',
        `التدرب على ${policy.analysisFocusAr}.`,
      ],
      pedagogy: `استخدم مسار مستوى ${level}: الفكرة العامة ← دليل الفصل ← النشاط ← العودة إلى النص بعد الخطأ ← استجابة مناسبة للمستوى. لا تضف معلومة تاريخية أو دينية لا يقدمها الفصل نفسه.`,
      grammarFocus: policy.grammarAr,
      pronunciationFocus: words
        ? `إذا كان الصوت متاحاً، استمع إلى نطق هذه الكلمات وكررها: ${words}. ثم اقرأ جملة الدليل بصوت واضح.`
        : 'إذا كان الصوت متاحاً، استمع إلى الكلمات المهمة ثم اقرأ جملة الدليل بصوت واضح.',
      lessonPlan: `ابدأ بالعنوان والصورة وملاحظات المفردات. اقرأ النص، واستمع إليه إذا كان الصوت متاحاً. حدد الفكرة العامة ثم أعد القراءة وحدد ${requiredEvidence}. استخدم نقطة التفاعل عند وجودها للوصول إلى الفقرة المناسبة، ثم نفّذ التحدي السريع. عند الخطأ ارجع إلى النص قبل المحاولة الثانية. اختم بـ ${policy.writingTarget}.`,
      discussionPoints: [
        item.quickQuestion || `ماذا يقول الفصل عن ${item.primaryTitle}؟`,
        `ما الجملة أو الحدث الذي يقدم أقوى دليل عن ${item.primaryTitle}؟`,
        item.secondaryTitle
          ? `كيف ترتبط ${item.secondaryTitle} بـ ${item.primaryTitle} وفق هذا الفصل؟`
          : 'ما الفكرة الثانية التي يدعمها النص؟',
      ],
      differentiation: {
        fastFinishers: policy.fastAr,
        strugglingLearners: level === 'A2'
          ? 'استخدم الإطار: «يقول الفصل إن ___». ثم أعد التحدي السريع والنص مفتوح.'
          : 'استخدم الإطار: «الفكرة ___، والدليل من الفصل ___، وهذا يوضح ___». ثم أعد المحاولة والنص مفتوح.',
      },
      interactiveTips: [
        'استخدم نقاط التفاعل وملاحظات المفردات للوصول إلى النص، لا بديلاً عنه.',
        'بعد الإجابة الخاطئة، اطلب العودة إلى الجملة أو الفقرة التي تحتوي الدليل قبل المحاولة التالية.',
      ],
      assessmentTools: {
        rubric: level === 'A2'
          ? ['صحة الفهم', 'العثور على دليل مباشر', 'المفردات في السياق', 'وضوح الاستجابة القصيرة']
          : level === 'B1'
            ? ['الفكرة الرئيسة', 'السبب والنتيجة أو الدافع', 'استخدام الدليل', 'وضوح التفسير']
            : ['اختيار الدليل', 'الاستنتاج والتحليل', 'المقارنة أو السبب', 'وضوح التفسير'],
        exitTicket: [`اكتب أو قل فكرة واحدة عن ${item.primaryTitle} واذكر دليلها من الفصل.`],
      },
      extraResources: undefined,
    };
  }

  return {
    chapter: chapterName(page, language),
    timing: policy.teacherTiming,
    objectives: [
      `Explain the chapter's main idea using ${requiredEvidence} from the text.`,
      item.quickQuestion
        ? `Complete the Quick Challenge and connect the answer to a sentence or event in the chapter: ${item.quickQuestion}`
        : `Identify one clear fact about ${item.primaryTitle}.`,
      words ? `Use chapter vocabulary accurately in context: ${words}.` : 'Use the chapter Word Notes in context.',
      `Practise ${policy.analysisFocusEn}.`,
    ],
    pedagogy: `Use the ${level} route: gist → chapter evidence → activity → return to the text after error → level-appropriate response. Do not add historical or religious information that the chapter itself does not provide.`,
    grammarFocus: policy.grammarEn,
    pronunciationFocus: words
      ? `If audio is available, listen for and repeat these chapter words: ${words}. Then read the evidence sentence aloud clearly.`
      : 'If audio is available, listen for the key words, then read the evidence sentence aloud clearly.',
    lessonPlan: `Preview the title, image, and Word Notes. Read the text and listen if audio is available. Identify the gist, then reread and mark ${requiredEvidence}. Use a hotspot, when present, to locate the relevant paragraph, then complete the Quick Challenge. After a wrong answer, return to the text before retrying. Finish with ${policy.writingTarget}.`,
    discussionPoints: [
      item.quickQuestion || `What does the chapter say about ${item.primaryTitle}?`,
      `Which sentence or event gives the strongest evidence about ${item.primaryTitle}?`,
      item.secondaryTitle
        ? `How is ${item.secondaryTitle} connected with ${item.primaryTitle} according to this chapter?`
        : 'What second idea is supported by the text?',
    ],
    differentiation: {
      fastFinishers: policy.fastEn,
      strugglingLearners: level === 'A2'
        ? 'Use the frame: “The chapter says ___.” Then retry the Quick Challenge with the text open.'
        : 'Use the frame: “The claim is ___; the chapter evidence is ___; this shows ___.” Then retry with the text open.',
    },
    interactiveTips: [
      'Use hotspots and Word Notes to lead learners back to the prose, not as substitutes for it.',
      'After an incorrect answer, require a return to the sentence or paragraph containing the evidence before retrying.',
    ],
    assessmentTools: {
      rubric: level === 'A2'
        ? ['Comprehension accuracy', 'Finding direct evidence', 'Vocabulary in context', 'Short-response clarity']
        : level === 'B1'
          ? ['Main idea', 'Cause/result or motivation', 'Use of evidence', 'Explanation clarity']
          : ['Evidence selection', 'Inference and analysis', 'Comparison or cause', 'Explanation clarity'],
      exitTicket: [`State one idea about ${item.primaryTitle} and identify its evidence in the chapter.`],
    },
    extraResources: undefined,
  };
};

const selfStudySection = (
  page: PageData,
  level: Level,
  language: LearningGuideLanguage,
): TeacherGuideSection => {
  const policy = getLearningLevelPolicy(level);
  const item = evidence(page);
  const words = item.words.join(language === 'ar' ? '، ' : ', ');
  const requiredEvidence = evidenceText(level, language);

  if (language === 'ar') {
    return {
      chapter: chapterName(page, language),
      timing: policy.selfStudyTiming.replace('minutes', 'دقيقة'),
      objectives: [
        'فهم الفكرة العامة من دون ترجمة كل كلمة.',
        `تحديد ${requiredEvidence} قبل تثبيت الإجابة.`,
        words ? `استخدام هذه المفردات في السياق: ${words}.` : 'استخدام ملاحظات المفردات في السياق.',
        `كتابة أو قول ملخص من ${policy.summaryLength}.`,
      ],
      pedagogy: `اتبع المسار نفسه في كل فصل: معاينة → قراءة للفكرة العامة → استماع عند توفر الصوت → إعادة قراءة للدليل → مفردات → التحدي السريع → إعادة المحاولة → تلخيص بمستوى ${level}.`,
      grammarFocus: policy.grammarAr,
      pronunciationFocus: words
        ? `إذا كان الصوت متاحاً، استمع ثم كرر: ${words}.`
        : 'إذا كان الصوت متاحاً، استمع إلى الكلمات الأساسية وكررها.',
      lessonPlan: `1) عاين العنوان والصورة وملاحظات المفردات. 2) اقرأ مرة للفكرة العامة واستمع إذا كان الصوت متاحاً. 3) أعد القراءة وحدد ${requiredEvidence}. 4) خمن المفردات من السياق ثم تحقق من التعريف. 5) أجب عن التحدي السريع. 6) إذا أخطأت أو ترددت، ارجع إلى الفقرة المناسبة ثم أعد المحاولة. 7) اكتب أو قل ملخصاً من ${policy.summaryLength}.`,
      discussionPoints: [
        item.quickQuestion || `ما الدليل الذي يوضح ${item.primaryTitle}؟`,
        `ما أقوى دليل في الفصل على ${item.primaryTitle}؟`,
        level === 'B2' ? 'ما الاستنتاج الذي يمكن دعمه بوضوح؟ وما الذي يبقى تأملاً شخصياً؟' : 'ما الفكرة الثانية التي يدعمها الفصل؟',
      ],
      differentiation: {
        fastFinishers: policy.fastAr,
        strugglingLearners: level === 'A2'
          ? 'اقرأ فقرة واحدة فقط، ثم توقف وحدد المعلومة الرئيسة قبل المتابعة.'
          : 'انسخ جملة دليل واحدة وأكمل: «هذا الدليل يوضح أن ___».',
      },
      interactiveTips: [
        'حاول فهم الكلمة من الجملة قبل فتح ملاحظات المفردات.',
        'إذا أخطأت، ابحث عن دليل الإجابة قبل المحاولة الثانية.',
      ],
      assessmentTools: {
        exitTicket: level === 'A2'
          ? ['معلومة واحدة', 'كلمة واحدة', 'جملة قصيرة واحدة']
          : ['فكرة واحدة', 'دليل واحد أو دليلان', 'تفسير قصير'],
      },
      extraResources: undefined,
    };
  }

  return {
    chapter: chapterName(page, language),
    timing: policy.selfStudyTiming,
    objectives: [
      'Understand the gist without translating every word.',
      `Identify ${requiredEvidence} before finalising an answer.`,
      words ? `Use these chapter words in context: ${words}.` : 'Use the chapter Word Notes in context.',
      `Write or say a ${policy.summaryLength} summary.`,
    ],
    pedagogy: `Use the same route in every chapter: preview → read for gist → listen when audio is available → reread for evidence → vocabulary → Quick Challenge → retry → ${level}-level summary.`,
    grammarFocus: policy.grammarEn,
    pronunciationFocus: words
      ? `If audio is available, listen and repeat: ${words}.`
      : 'If audio is available, listen to the key words and repeat them.',
    lessonPlan: `1) Preview the title, image, and Word Notes. 2) Read once for gist and listen if audio is available. 3) Reread and identify ${requiredEvidence}. 4) Infer vocabulary from context, then check the definition. 5) Complete the Quick Challenge. 6) If an answer is wrong or uncertain, return to the relevant paragraph and retry. 7) Write or say a ${policy.summaryLength} summary.`,
    discussionPoints: [
      item.quickQuestion || `What evidence explains ${item.primaryTitle}?`,
      `What is the strongest chapter evidence for ${item.primaryTitle}?`,
      level === 'B2' ? 'Which inference is clearly supported, and what should remain a personal reflection?' : 'What second idea does the chapter support?',
    ],
    differentiation: {
      fastFinishers: policy.fastEn,
      strugglingLearners: level === 'A2'
        ? 'Read one paragraph only. Stop and identify its main fact before continuing.'
        : 'Copy one evidence sentence and complete: “This evidence shows that ___.”',
    },
    interactiveTips: [
      'Try to infer a word from its sentence before opening Word Notes.',
      'If you make a mistake, locate the answer evidence before trying again.',
    ],
    assessmentTools: {
      exitTicket: level === 'A2'
        ? ['One fact', 'One word', 'One short sentence']
        : ['One claim', 'One or two pieces of evidence', 'One short explanation'],
    },
    extraResources: undefined,
  };
};

const rubricRows = (level: Level, language: LearningGuideLanguage): RubricRow[] => {
  if (language === 'ar') {
    if (level === 'A2') return [
      { criterion: 'فهم النص', excellent: 'يحدد المعلومات الأساسية باستقلالية.', good: 'يحدد معظم المعلومات بدعم بسيط.', developing: 'يحتاج إلى إعادة قراءة موجهة.' },
      { criterion: 'المفردات', excellent: 'يفهم ويستخدم مفردات الفصل بدقة.', good: 'يفهم معظم المفردات الأساسية.', developing: 'يحتاج إلى الرجوع المتكرر إلى ملاحظات المفردات.' },
      { criterion: 'التسلسل والسبب البسيط', excellent: 'يرتب الأحداث ويفهم العلاقات البسيطة بوضوح.', good: 'يفهم معظم العلاقات مع دعم محدود.', developing: 'يحتاج إلى إطار أو مثال.' },
      { criterion: 'الاستفادة من التغذية الراجعة', excellent: 'يعود إلى النص ويصحح إجابته باستقلالية.', good: 'يعيد المحاولة بعد تذكير.', developing: 'يحتاج إلى توجيه مباشر.' },
    ];
    if (level === 'B1') return [
      { criterion: 'الفكرة الرئيسة والدليل', excellent: 'يحدد الفكرة الرئيسة ويدعمها بأدلة مناسبة.', good: 'يحدد الفكرة ومعظم الأدلة بدعم بسيط.', developing: 'يحتاج إلى توجيه لاختيار الدليل.' },
      { criterion: 'السبب والنتيجة أو الدافع', excellent: 'يشرح العلاقة بوضوح اعتماداً على النص.', good: 'يشرح العلاقة إجمالاً.', developing: 'يحتاج إلى إطار جملة.' },
      { criterion: 'المفردات في السياق', excellent: 'يستخدم مفردات الفصل بدقة في إجابة قصيرة.', good: 'يستخدم بعض المفردات بصورة صحيحة.', developing: 'يحتاج إلى دعم من ملاحظات المفردات.' },
      { criterion: 'وضوح التلخيص', excellent: 'يقدم تلخيصاً منظماً ومدعوماً بالنص.', good: 'يقدم تلخيصاً مفهوماً.', developing: 'يحتاج إلى تنظيم الأفكار.' },
    ];
    return [
      { criterion: 'الاستدلال والتحليل', excellent: 'يبني استنتاجاً واضحاً ومدعوماً بالنص.', good: 'يقدم استنتاجاً مناسباً مع بعض الدعم.', developing: 'يحتاج إلى مساعدة لربط الدليل بالاستنتاج.' },
      { criterion: 'اختيار الدليل', excellent: 'يختار أدلة قوية ودقيقة من الفصل.', good: 'يختار أدلة مناسبة في الغالب.', developing: 'يحتاج إلى توجيه لاختيار الدليل الأقوى.' },
      { criterion: 'المقارنة والتقييم', excellent: 'يقارن التفسيرات ويقيمها وفق الأدلة.', good: 'يجري مقارنة واضحة مع بعض التبرير.', developing: 'يحتاج إلى إطار للمقارنة.' },
      { criterion: 'وضوح التفسير', excellent: 'يشرح الفكرة والدليل والعلاقة بينهما بدقة.', good: 'يشرح العلاقة بصورة مفهومة.', developing: 'يحتاج إلى تنظيم أو لغة داعمة.' },
    ];
  }

  if (level === 'A2') return [
    { criterion: 'Text understanding', excellent: 'Finds key information independently.', good: 'Finds most information with light support.', developing: 'Needs guided rereading.' },
    { criterion: 'Vocabulary', excellent: 'Understands and uses chapter words accurately.', good: 'Understands most key words.', developing: 'Needs frequent Word Notes support.' },
    { criterion: 'Sequence / simple cause', excellent: 'Orders events and explains simple links clearly.', good: 'Understands most links with light support.', developing: 'Needs a frame or model.' },
    { criterion: 'Using feedback', excellent: 'Returns to the text and self-corrects independently.', good: 'Retries after a reminder.', developing: 'Needs direct guidance.' },
  ];
  if (level === 'B1') return [
    { criterion: 'Main idea and evidence', excellent: 'Identifies the main idea and supports it with relevant evidence.', good: 'Identifies the idea and most evidence with light support.', developing: 'Needs guidance to select evidence.' },
    { criterion: 'Cause / result / motivation', excellent: 'Explains the relationship clearly from the text.', good: 'Explains the relationship generally.', developing: 'Needs a sentence frame.' },
    { criterion: 'Vocabulary in context', excellent: 'Uses chapter vocabulary accurately in a short response.', good: 'Uses some target vocabulary correctly.', developing: 'Needs Word Notes support.' },
    { criterion: 'Summary clarity', excellent: 'Produces a concise, organised, text-grounded summary.', good: 'Produces a clear basic summary.', developing: 'Needs help organising ideas.' },
  ];
  return [
    { criterion: 'Inference and analysis', excellent: 'Builds a clear inference supported by the chapter.', good: 'Makes a suitable inference with some support.', developing: 'Needs help linking evidence to inference.' },
    { criterion: 'Evidence selection', excellent: 'Selects strong and precise textual evidence.', good: 'Selects generally relevant evidence.', developing: 'Needs guidance to choose the strongest evidence.' },
    { criterion: 'Comparison and evaluation', excellent: 'Compares interpretations and evaluates them against evidence.', good: 'Makes a clear comparison with some justification.', developing: 'Needs a comparison frame.' },
    { criterion: 'Explanation clarity', excellent: 'Explains claim, evidence, and reasoning precisely.', good: 'Explains the relationship clearly enough.', developing: 'Needs organisation or language support.' },
  ];
};

const assessmentSequence = (structure: LearningGuideStructure, language: LearningGuideLanguage) => {
  if (language === 'ar') {
    const parts = [`اختبار الفهم: ${structure.knowledgeCount}`];
    if (structure.hasVocabularyPage) parts.push(`تحدي المفردات: ${structure.vocabularyCount}`);
    parts.push(`المعجم: ${structure.glossaryCount} قسمين`, `تحدي المراجعة: ${structure.reviewCount}`, `التحدي النهائي: ${structure.finalCount}`);
    return parts;
  }
  const parts = [`Knowledge Check: ${structure.knowledgeCount}`];
  if (structure.hasVocabularyPage) parts.push(`Vocabulary Challenge: ${structure.vocabularyCount}`);
  parts.push(`Glossary: ${structure.glossaryCount} parts`, `Review Challenge: ${structure.reviewCount}`, `Final Challenge: ${structure.finalCount}`);
  return parts;
};

const studentSections = (
  level: Level,
  language: LearningGuideLanguage,
  structure: LearningGuideStructure,
): StudentGuideSection[] => {
  const policy = getLearningLevelPolicy(level);
  const sequence = assessmentSequence(structure, language);

  if (language === 'ar') return [
    { title: '1. ابدأ بالفصل', icon: 'Eye', text: 'عاين العنوان والصورة وملاحظات المفردات، ثم حدد هدفاً واحداً للقراءة.', points: ['توقع الفكرة العامة', 'لا تستخدم معلومات من خارج الفصل'] },
    { title: '2. اقرأ واستمع', icon: 'Ear', text: 'اقرأ للفكرة العامة أولاً. إذا كان الصوت متاحاً، استمع واتبع النص.', points: ['الفكرة العامة أولاً', 'أعد الجزء الصعب فقط'] },
    { title: '3. ابحث عن الدليل', icon: 'Search', text: `في مستوى ${level} ابحث عن ${evidenceText(level, language)} قبل تثبيت إجابتك.`, points: [policy.analysisFocusAr, 'ارجع إلى الفقرة عند الشك'] },
    { title: '4. ملاحظات المفردات', icon: 'PenTool', text: 'حاول فهم الكلمة من سياقها أولاً ثم راجع التعريف.', points: ['السياق أولاً', 'استخدم الكلمة في جملة'] },
    { title: '5. التحدي السريع', icon: 'Target', text: 'نفذ نشاط الفصل. عند الخطأ ارجع إلى الدليل ثم حاول مرة أخرى.', points: ['لا تخمن فقط', 'صحح الإجابة من النص'] },
    { title: '6. استجابة المستوى', icon: 'Edit3', text: `اختم الفصل بـ ${policy.writingTarget}.`, points: [`الملخص: ${policy.summaryLength}`, 'افصل التأمل الشخصي عن حقيقة النص'] },
    { title: '7. راجع الكتاب', icon: 'RefreshCw', text: 'بعد نهاية الفصول استخدم مراحل المراجعة بالترتيب.', points: sequence },
    { title: '8. عند وجود نقص', icon: 'Compass', text: 'إذا كشفت نتيجة أي نشاط عن فجوة، ارجع إلى الفصل الذي يقدم الدليل قبل إعادة المحاولة.', points: ['النص هو المصدر', 'أعد القراءة ثم أعد المحاولة'] },
  ];

  return [
    { title: '1. Start the chapter', icon: 'Eye', text: 'Preview the title, image, and Word Notes, then set one reading purpose.', points: ['Predict the gist', 'Do not add outside facts'] },
    { title: '2. Read and listen', icon: 'Ear', text: 'Read for gist first. If audio is available, listen while following the text.', points: ['Gist first', 'Replay only the difficult part'] },
    { title: '3. Find evidence', icon: 'Search', text: `At ${level}, identify ${evidenceText(level, language)} before finalising an answer.`, points: [policy.analysisFocusEn, 'Return to the paragraph when uncertain'] },
    { title: '4. Word Notes', icon: 'PenTool', text: 'Infer the word from context first, then check the definition.', points: ['Context first', 'Reuse the word in a sentence'] },
    { title: '5. Quick Challenge', icon: 'Target', text: 'Complete the chapter activity. After a mistake, return to the evidence and retry.', points: ['Do not guess only', 'Self-correct from the text'] },
    { title: '6. Level response', icon: 'Edit3', text: `Finish the chapter with ${policy.writingTarget}.`, points: [`Summary: ${policy.summaryLength}`, 'Separate personal reflection from textual fact'] },
    { title: '7. Review the book', icon: 'RefreshCw', text: 'After all chapters, complete the whole-book stages in order.', points: sequence },
    { title: '8. When you find a gap', icon: 'Compass', text: 'If any result shows a gap, return to the chapter that contains the evidence before retrying.', points: ['The chapter is the source', 'Reread, then retry'] },
  ];
};

const studentMetadata = (
  bookTitle: string,
  chapterCount: number,
  level: Level,
  language: LearningGuideLanguage,
  structure: LearningGuideStructure,
): StudentGuideMetadata => {
  const policy = getLearningLevelPolicy(level);
  const sequence = assessmentSequence(structure, language).join(language === 'ar' ? '، ' : ', ');

  return language === 'ar'
    ? {
        whoIsThisFor: `لمتعلمي مستوى ${level} الذين يريدون دراسة ${bookTitle} بخطوات واضحة قائمة على النص.`,
        title: `دليل الدراسة الذاتية — ${bookTitle}`,
        subtitle: `قراءة • دليل • مفردات • نشاط • استجابة ${level}`,
        level,
        language: 'العربية',
        estimatedStudyTime: `${chapterCount} جلسة فصلية، نحو ${policy.selfStudyTiming.replace('minutes', 'دقيقة')} لكل فصل، ثم مراجعة الكتاب.`,
        learningGoals: [policy.analysisFocusAr, 'استخدام المفردات في السياق', 'العودة إلى النص بعد الخطأ', `إنتاج ${policy.writingTarget}`],
        recommendedUse: ['فصل واحد في كل جلسة', 'التحدي السريع بعد القراءة', `بعد الفصول: ${sequence}`],
      }
    : {
        whoIsThisFor: level === 'A2'
          ? `Grades 5–6 EFL learners around CEFR A2 studying ${bookTitle} with short, chapter-grounded steps.`
          : `Learners around CEFR ${level} studying ${bookTitle} through chapter-grounded evidence and language practice.`,
        title: `Self-Study Guide — ${bookTitle}`,
        subtitle: `Read • Evidence • Vocabulary • Activity • ${level} response`,
        level,
        language: 'English',
        estimatedStudyTime: `${chapterCount} chapter sessions, about ${policy.selfStudyTiming} each, plus whole-book review.`,
        learningGoals: [policy.analysisFocusEn, 'Use vocabulary in context', 'Return to the text after an error', `Produce ${policy.writingTarget}`],
        recommendedUse: ['One chapter per session', 'Quick Challenge after reading', `After the chapters: ${sequence}`],
      };
};

const teacherMetadata = (
  bookTitle: string,
  chapterCount: number,
  level: Level,
  language: LearningGuideLanguage,
  guide: TeacherGuideSection[],
  structure: LearningGuideStructure,
): TeacherGuideMetadata => {
  const policy = getLearningLevelPolicy(level);
  const sequence = assessmentSequence(structure, language);
  const first = guide[0];
  const second = guide[1] ?? first;

  return language === 'ar'
    ? {
        title: `دليل المعلم — ${bookTitle}`,
        subtitle: `نظام تعلم موحد لمستوى ${level} قائم على نص الفصل ودليله`,
        level,
        estimatedDuration: `${chapterCount} درساً، نحو ${policy.teacherTiming.replace('minutes', 'دقيقة')} لكل فصل، ثم مراحل المراجعة والتقييم.`,
        targetAudience: `متعلمات ومتعلمو مستوى ${level}، مع إمكانية التكييف حسب العمر والسياق الصفي.`,
        purpose: `دعم ${policy.analysisFocusAr} مع إبقاء كل معلومة واقعية داخل حدود الفصل.`,
        approachDesc: 'معاينة → قراءة/استماع عند توفر الصوت → دليل → مفردات → نشاط → إعادة قراءة → استجابة مناسبة للمستوى.',
        assessmentEvidence: sequence.join('؛ '),
        readingFramework: {
          before: 'عاين العنوان والصورة والمفردات وحدد هدف القراءة.',
          during: level === 'A2' ? 'اقرأ المعلومات المباشرة والتسلسل.' : level === 'B1' ? 'حدد الفكرة والسبب والنتيجة والدافع والدليل.' : 'حلل الدليل والاستنتاج والمقارنة ونقاط التحول.',
          after: 'نفذ النشاط، برر الإجابة بالنص، ثم أعد القراءة عند الحاجة.',
        },
        rubricTitle: `معيار القراءة والتعلم — ${level}`,
        rubricRows: rubricRows(level, language),
        vocabularyApproach: { selection: 'مفردات موجودة في الفصل ومقترنة بين اللغتين.', method: 'استنتاج من السياق ثم مراجعة التعريف.', recycling: 'إعادة الاستخدام في أنشطة الفصل والمراجعة والكتابة.' },
        grammarApproach: policy.grammarAr,
        skillsFocus: { reading: policy.analysisFocusAr, listening: 'متابعة النص مع الصوت عند توفره.', speaking: 'تبرير الإجابة بعبارة قصيرة أو مناقشة.', writing: policy.writingTarget },
        classroomManagement: ['استخدم الأسئلة للتعليم قبل القياس.', 'لا تضف معلومات تاريخية أو دينية غير موجودة في الفصل.', 'بعد الخطأ أعد الطالب إلى موضع الدليل.'],
        differentiationNotes: 'حافظ على المعلومة نفسها، وغيّر طول المهمة أو مقدار الدعم لا مصدر الإجابة.',
        implementationPlans: first && second ? {
          optionA: { title: `نموذج: ${first.chapter}`, steps: [{ time: first.timing, activity: first.lessonPlan }] },
          optionB: { title: `نموذج: ${second.chapter}`, lessons: [{ title: second.chapter, description: second.lessonPlan }] },
        } : undefined,
        sensitiveNotes: { title: 'ضوابط المحتوى', notes: ['النص هو المرجع الواقعي.', 'لا تحول التأمل إلى حقيقة جديدة.', 'قدّم مشاهد الألم أو الظلم بلغة هادئة وغير رسومية.'] },
      }
    : {
        title: `Teacher Guide — ${bookTitle}`,
        subtitle: `Unified ${level} learning system grounded in chapter text and evidence`,
        level,
        estimatedDuration: `${chapterCount} lessons, about ${policy.teacherTiming} per chapter, plus whole-book review and assessment.`,
        targetAudience: level === 'A2' ? 'Grades 5–6 EFL learners around CEFR A2, adaptable for nearby age groups.' : `Learners working around CEFR ${level}, adaptable to the classroom context.`,
        purpose: `Support ${policy.analysisFocusEn} while keeping every factual claim inside the chapter.`,
        approachDesc: 'Preview → read/listen when audio is available → evidence → vocabulary → activity → reread → level-appropriate response.',
        assessmentEvidence: sequence.join('; '),
        readingFramework: {
          before: 'Preview the title, image, and vocabulary and set a reading purpose.',
          during: level === 'A2' ? 'Read for stated information and sequence.' : level === 'B1' ? 'Identify main idea, cause/result, motivation, and evidence.' : 'Analyse evidence, inference, comparison, and turning points.',
          after: 'Complete the activity, justify with the text, and reread when needed.',
        },
        rubricTitle: `${level} Reading and Learning Rubric`,
        rubricRows: rubricRows(level, language),
        vocabularyApproach: { selection: 'Chapter-attested vocabulary paired across languages.', method: 'Infer from context, then check the definition.', recycling: 'Reuse in chapter activities, review, and writing.' },
        grammarApproach: policy.grammarEn,
        skillsFocus: { reading: policy.analysisFocusEn, listening: 'Follow the text with narration when audio is available.', speaking: 'Justify an answer briefly or discuss evidence.', writing: policy.writingTarget },
        classroomManagement: ['Use questions for teaching before scoring.', 'Do not add historical or religious information not present in the chapter.', 'After an error, send the learner back to the evidence.'],
        differentiationNotes: 'Keep the learning fact unchanged; vary task length or support, not the source of the answer.',
        implementationPlans: first && second ? {
          optionA: { title: `Sample: ${first.chapter}`, steps: [{ time: first.timing, activity: first.lessonPlan }] },
          optionB: { title: `Sample: ${second.chapter}`, lessons: [{ title: second.chapter, description: second.lessonPlan }] },
        } : undefined,
        sensitiveNotes: { title: 'Content Safeguards', notes: ['The chapter is the factual authority.', 'Do not turn reflection into a new factual claim.', 'Handle pain, punishment, or injustice in calm, non-graphic language.'] },
      };
};

const studentText = (
  bookTitle: string,
  chapters: PageData[],
  level: Level,
  language: LearningGuideLanguage,
  structure: LearningGuideStructure,
) => {
  const policy = getLearningLevelPolicy(level);
  const chapterList = chapters.map(page => language === 'ar' ? `${page.id}. ${page.title}` : `${page.id}. ${page.title}`).join('\n');
  const sequence = assessmentSequence(structure, language).map(item => `- ${item}`).join('\n');

  if (language === 'ar') return `# دليل الدراسة الذاتية — ${bookTitle}\n\n## مستوى ${level}\n\nهذا الدليل جزء من نظام التعلم نفسه الذي ينتج أنشطة الفصول والمراجعة. المصدر الواقعي الوحيد هو نص الفصل.\n\n## الفصول\n${chapterList}\n\n## طريقة دراسة كل فصل\n1. عاين العنوان والصورة وملاحظات المفردات.\n2. اقرأ للفكرة العامة، واستمع إذا كان الصوت متاحاً.\n3. أعد القراءة وحدد ${evidenceText(level, language)}.\n4. حاول فهم المفردات من السياق ثم راجع التعريفات.\n5. نفذ التحدي السريع.\n6. عند الخطأ ارجع إلى الدليل قبل المحاولة التالية.\n7. اختم بملخص من ${policy.summaryLength} وبـ ${policy.writingTarget}.\n\n## تركيز مستوى ${level}\n${policy.analysisFocusAr}.\n\n## بعد نهاية الفصول\n${sequence}\n\nإذا كشفت النتيجة عن فجوة، ارجع إلى الفصل الذي يقدم الدليل ثم أعد المحاولة. لا تستخدم معلومة خارج القصة لتحديد الإجابة الصحيحة.\n`;

  return `# Self-Study Guide — ${bookTitle}\n\n## ${level} level\n\nThis guide belongs to the same Learning System that generates chapter activities and whole-book review. The chapter text is the only factual authority.\n\n## Chapters\n${chapterList}\n\n## How to study each chapter\n1. Preview the title, image, and Word Notes.\n2. Read for gist and listen if audio is available.\n3. Reread and identify ${evidenceText(level, language)}.\n4. Infer vocabulary from context, then check the definitions.\n5. Complete the Quick Challenge.\n6. After an error, return to the evidence before retrying.\n7. Finish with a ${policy.summaryLength} summary and ${policy.writingTarget}.\n\n## ${level} focus\n${policy.analysisFocusEn}.\n\n## After the chapters\n${sequence}\n\nIf a result reveals a gap, return to the chapter that provides the evidence and retry. Do not use outside information to determine the correct answer.\n`;
};

export const buildLearningGuides = ({
  pages,
  storyIds,
  level,
  language,
}: {
  pages: PageData[];
  storyIds: number[];
  level: Level;
  language: LearningGuideLanguage;
}) => {
  const chapters = storyPages(pages, storyIds);
  return {
    teacherGuide: chapters.map(page => teacherSection(page, level, language)),
    selfStudyGuide: chapters.map(page => selfStudySection(page, level, language)),
  };
};

export const buildLearningGuideBundle = ({
  pages,
  storyIds,
  level,
  language,
  bookTitle,
  structure,
}: {
  pages: PageData[];
  storyIds: number[];
  level: Level;
  language: LearningGuideLanguage;
  bookTitle: string;
  structure: LearningGuideStructure;
}): LearningGuideBundle => {
  const chapters = storyPages(pages, storyIds);
  const guides = buildLearningGuides({ pages, storyIds, level, language });
  return {
    ...guides,
    teacherGuideMetadata: teacherMetadata(bookTitle, chapters.length, level, language, guides.teacherGuide, structure),
    studentGuideSections: studentSections(level, language, structure),
    studentGuideMetadata: studentMetadata(bookTitle, chapters.length, level, language, structure),
    studentGuideText: studentText(bookTitle, chapters, level, language, structure),
  };
};
