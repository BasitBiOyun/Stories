import type { Level, PageData, TeacherGuideSection } from '../types';

export type LearningGuideLanguage = 'en' | 'ar';

type LevelPolicy = {
  teacherTiming: string;
  selfTiming: string;
  evidenceCount: number;
  summaryLength: string;
  analysisFocusEn: string;
  analysisFocusAr: string;
  grammarEn: string;
  grammarAr: string;
  fastEn: string;
  fastAr: string;
};

const POLICIES: Record<Level, LevelPolicy> = {
  A2: {
    teacherTiming: '30–35 minutes', selfTiming: '15–20 minutes', evidenceCount: 1, summaryLength: '2–3 sentences',
    analysisFocusEn: 'simple factual understanding and short retelling',
    analysisFocusAr: 'الفهم المباشر للمعلومة وإعادة السرد القصير',
    grammarEn: 'Notice the verb form and word order in one short chapter sentence and reuse the same pattern.',
    grammarAr: 'لاحظ صيغة الفعل وترتيب الكلمات في جملة قصيرة من الفصل، ثم استخدم النمط نفسه.',
    fastEn: 'Write three short sentences using two chapter words and check every fact in the text.',
    fastAr: 'اكتب ثلاث جمل قصيرة مستخدماً كلمتين من مفردات الفصل، ثم تحقق من كل معلومة في النص.',
  },
  B1: {
    teacherTiming: '45 minutes', selfTiming: '35–40 minutes', evidenceCount: 2, summaryLength: '3–5 sentences',
    analysisFocusEn: 'main idea, cause/result, character motivation, and text-supported explanation',
    analysisFocusAr: 'الفكرة الرئيسة والسبب والنتيجة ودافع الشخصية والتفسير المدعوم بالنص',
    grammarEn: 'Use cause/result linkers, reporting language, and short complex sentences only when they help explain the chapter.',
    grammarAr: 'استخدم روابط السبب والنتيجة وأفعال القول والجمل المركبة القصيرة عندما تساعد على شرح الفصل.',
    fastEn: 'Write a short claim → evidence → explanation paragraph and add a second consequence or comparison when the text supports it.',
    fastAr: 'اكتب فقرة قصيرة: ادعاء ← دليل ← تفسير، وأضف نتيجة أو مقارنة ثانية إذا كان النص يدعمها.',
  },
  B2: {
    teacherTiming: '55 minutes', selfTiming: '40 minutes', evidenceCount: 2, summaryLength: '5–7 sentences',
    analysisFocusEn: 'evidence selection, inference, comparison, cause, turning points, and clearly labelled interpretation',
    analysisFocusAr: 'اختيار الدليل والاستنتاج والمقارنة والسبب ونقاط التحول مع تمييز التفسير بوضوح',
    grammarEn: 'Use evidence, comparison, concession, and cause-effect language such as because, therefore, whereas, according to the chapter, and this suggests.',
    grammarAr: 'استخدم لغة الدليل والمقارنة والاستدراك والسبب والنتيجة مثل: لأن، لذلك، بينما، وفقاً للفصل، ويدل هذا على.',
    fastEn: 'Write a 120–150 word analytical paragraph using at least two pieces of chapter evidence.',
    fastAr: 'اكتب فقرة تحليلية من 120–150 كلمة مستخدماً دليلين على الأقل من الفصل.',
  },
};

const storyPages = (pages: PageData[], storyIds: number[]): PageData[] => storyIds.map((id) => {
  const page = pages.find((candidate) => candidate.id === id && candidate.type === 'story');
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
    words: (page.vocabulary || []).slice(0, 5).map((entry) => entry.word).filter(Boolean),
  };
};

const chapterName = (page: PageData, language: LearningGuideLanguage): string =>
  language === 'ar' ? `الفصل ${page.id}: ${page.title}` : `Chapter ${page.id}: ${page.title}`;

const teacherSection = (page: PageData, level: Level, language: LearningGuideLanguage): TeacherGuideSection => {
  const policy = POLICIES[level];
  const e = evidence(page);
  const words = e.words.join(language === 'ar' ? '، ' : ', ');
  const evidenceText = policy.evidenceCount === 1 ? (language === 'ar' ? 'دليل واحد' : 'one piece of evidence') : (language === 'ar' ? 'دليلين' : 'two pieces of evidence');

  if (language === 'ar') {
    return {
      chapter: chapterName(page, language),
      timing: policy.teacherTiming.replace('minutes', 'دقيقة'),
      objectives: [
        `شرح الفكرة الرئيسة في الفصل اعتماداً على ${evidenceText} من النص.`,
        e.quickQuestion ? `الإجابة عن التحدي السريع وربط الإجابة بجملة أو حدث من الفصل: ${e.quickQuestion}` : `تحديد معلومة واضحة عن ${e.primaryTitle}.`,
        words ? `استخدام مفردات الفصل في السياق: ${words}.` : 'استخدام ملاحظات المفردات في السياق.',
        `التدرب على ${policy.analysisFocusAr}.`,
      ],
      pedagogy: `استخدم مساراً واحداً في مستوى ${level}: الفكرة العامة ← دليل الفصل ← النشاط ← إعادة القراءة عند الخطأ ← تفسير مناسب للمستوى. لا تضف معلومة تاريخية أو دينية لا يقدمها الفصل نفسه.`,
      grammarFocus: policy.grammarAr,
      pronunciationFocus: words ? `استمع إلى نطق مفردات الفصل وكررها: ${words}. ثم اقرأ جملة الدليل بصوت واضح.` : 'استمع إلى الكلمات المهمة ثم اقرأ جملة الدليل بصوت واضح.',
      lessonPlan: `ابدأ بالعنوان والصورة وملاحظات المفردات. اقرأ أو استمع للفكرة العامة. أعد القراءة وحدد ${evidenceText}. استخدم نقطة التفاعل عند وجودها للتحقق من الفكرة، ثم نفّذ التحدي السريع. عند الخطأ ارجع إلى الفقرة ذات الصلة قبل المحاولة الثانية. اختم باستجابة مناسبة لمستوى ${level}.`,
      discussionPoints: [
        e.quickQuestion || `ماذا يقول الفصل عن ${e.primaryTitle}؟`,
        `ما الجملة أو الحدث الذي يقدم أقوى دليل عن ${e.primaryTitle}؟`,
        e.secondaryTitle ? `كيف ترتبط ${e.secondaryTitle} بـ ${e.primaryTitle} في هذا الفصل؟` : `ما الفكرة الثانية التي يدعمها النص؟`,
      ],
      differentiation: {
        fastFinishers: policy.fastAr,
        strugglingLearners: `استخدم إطاراً بسيطاً: «يقول الفصل إن ___، والدليل هو ___.» ثم أعد التحدي السريع والنص مفتوح.`,
      },
      interactiveTips: [
        'استخدم نقاط التفاعل وملاحظات المفردات كأدوات للوصول إلى النص، لا بديلاً عنه.',
        'بعد الإجابة الخاطئة، اطلب العودة إلى الجملة أو الفقرة التي تحتوي الدليل قبل المحاولة التالية.',
      ],
      assessmentTools: {
        rubric: ['صحة الفهم', 'استخدام دليل الفصل', 'المفردات في السياق', `وضوح الاستجابة بمستوى ${level}`],
        exitTicket: [`اكتب أو قل معلومة واحدة عن ${e.primaryTitle} واذكر دليلها من الفصل.`],
      },
      extraResources: undefined,
    };
  }

  return {
    chapter: chapterName(page, language),
    timing: policy.teacherTiming,
    objectives: [
      `Explain the chapter's main idea using ${evidenceText} from the text.`,
      e.quickQuestion ? `Answer the Quick Challenge and connect the answer to a sentence or event in the chapter: ${e.quickQuestion}` : `Identify one clear fact about ${e.primaryTitle}.`,
      words ? `Use chapter vocabulary accurately in context: ${words}.` : 'Use the chapter Word Notes in context.',
      `Practise ${policy.analysisFocusEn}.`,
    ],
    pedagogy: `Use one ${level} learning route: gist → chapter evidence → activity → reread after error → level-appropriate explanation. Do not add historical or religious information that the chapter itself does not provide.`,
    grammarFocus: policy.grammarEn,
    pronunciationFocus: words ? `Listen for and repeat the chapter words: ${words}. Then read the evidence sentence aloud clearly.` : 'Listen for the key words, then read the evidence sentence aloud clearly.',
    lessonPlan: `Preview the title, image, and Word Notes. Read/listen for gist. Reread and identify ${evidenceText}. Use a hotspot, when present, to check the idea, then complete the Quick Challenge. After a wrong answer, return to the relevant paragraph before retrying. Finish with a ${level}-appropriate response.`,
    discussionPoints: [
      e.quickQuestion || `What does the chapter say about ${e.primaryTitle}?`,
      `Which sentence or event gives the strongest evidence about ${e.primaryTitle}?`,
      e.secondaryTitle ? `How is ${e.secondaryTitle} connected with ${e.primaryTitle} in this chapter?` : 'What second idea is supported by the text?',
    ],
    differentiation: {
      fastFinishers: policy.fastEn,
      strugglingLearners: 'Use the frame: “The chapter shows ___, and the evidence is ___.” Then retry the Quick Challenge with the text open.',
    },
    interactiveTips: [
      'Use hotspots and Word Notes to lead learners back to the prose, not as substitutes for it.',
      'After an incorrect answer, require a return to the sentence or paragraph containing the evidence before retrying.',
    ],
    assessmentTools: {
      rubric: ['Comprehension accuracy', 'Use of chapter evidence', 'Vocabulary in context', `${level}-appropriate response clarity`],
      exitTicket: [`State one fact about ${e.primaryTitle} and identify its evidence in the chapter.`],
    },
    extraResources: undefined,
  };
};

const selfStudySection = (page: PageData, level: Level, language: LearningGuideLanguage): TeacherGuideSection => {
  const policy = POLICIES[level];
  const e = evidence(page);
  const words = e.words.join(language === 'ar' ? '، ' : ', ');
  const evidenceText = policy.evidenceCount === 1 ? (language === 'ar' ? 'دليلاً واحداً' : 'one piece of evidence') : (language === 'ar' ? 'دليلين' : 'two pieces of evidence');

  if (language === 'ar') {
    return {
      chapter: chapterName(page, language),
      timing: policy.selfTiming.replace('minutes', 'دقيقة'),
      objectives: [
        'فهم الفكرة العامة من دون ترجمة كل كلمة.',
        `تحديد ${evidenceText} قبل تثبيت الإجابة.`,
        words ? `استخدام هذه المفردات في السياق: ${words}.` : 'استخدام ملاحظات المفردات في السياق.',
        `كتابة أو قول ملخص من ${policy.summaryLength}.`,
      ],
      pedagogy: `اتبع المسار نفسه في كل فصل: معاينة → قراءة/استماع للفكرة العامة → إعادة قراءة للدليل → مفردات → التحدي السريع → إعادة المحاولة → تلخيص بمستوى ${level}.`,
      grammarFocus: policy.grammarAr,
      pronunciationFocus: words ? `استمع ثم كرر: ${words}.` : 'استمع إلى الكلمات الأساسية وكررها.',
      lessonPlan: `1) عاين العنوان والصورة وملاحظات المفردات. 2) اقرأ/استمع مرة للفكرة العامة. 3) أعد القراءة وحدد ${evidenceText}. 4) خمن المفردات من السياق ثم تحقق من التعريف. 5) أجب عن التحدي السريع. 6) إذا أخطأت أو ترددت، ارجع إلى الفقرة المناسبة ثم أعد المحاولة. 7) اكتب أو قل ملخصاً من ${policy.summaryLength}.`,
      discussionPoints: [e.quickQuestion || `ما الدليل الذي يوضح ${e.primaryTitle}؟`, 'ما الجملة أو الحدث الذي اعتمدت عليه؟'],
      differentiation: {
        fastFinishers: policy.fastAr,
        strugglingLearners: 'اعمل على فقرة واحدة، وحدد جملة الدليل، ثم أعد صياغتها بكلمات أبسط قبل الإجابة.',
      },
      interactiveTips: ['لا تتحقق من الإجابة قبل تحديد موضع الدليل في الفصل.', 'استخدم التغذية الراجعة كإشارة لإعادة القراءة لا كبديل عن النص.'],
      extraResources: undefined,
    };
  }

  return {
    chapter: chapterName(page, language),
    timing: policy.selfTiming,
    objectives: [
      'Understand the gist without translating every word.',
      `Identify ${evidenceText} before settling on an answer.`,
      words ? `Use these chapter words in context: ${words}.` : 'Use the chapter Word Notes in context.',
      `Produce a ${policy.summaryLength} summary.`,
    ],
    pedagogy: `Use the same route in every chapter: preview → gist → reread for evidence → vocabulary → Quick Challenge → retry → ${level}-appropriate summary.`,
    grammarFocus: policy.grammarEn,
    pronunciationFocus: words ? `Listen, then repeat: ${words}.` : 'Listen for and repeat the key chapter words.',
    lessonPlan: `1) Preview the title, image, and Word Notes. 2) Read/listen once for gist. 3) Reread and mark ${evidenceText}. 4) Infer vocabulary from context, then check the definition. 5) Complete the Quick Challenge. 6) If wrong or uncertain, return to the relevant paragraph and retry. 7) Write or say a ${policy.summaryLength} summary.`,
    discussionPoints: [e.quickQuestion || `Which evidence explains ${e.primaryTitle}?`, 'Which sentence or event did you use?'],
    differentiation: {
      fastFinishers: policy.fastEn,
      strugglingLearners: 'Work with one paragraph, identify the evidence sentence, and paraphrase it in simpler language before answering.',
    },
    interactiveTips: ['Do not check the answer until you can point to the evidence in the chapter.', 'Use feedback as a cue to reread, not as a substitute for the text.'],
    extraResources: undefined,
  };
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
}): { teacherGuide: TeacherGuideSection[]; selfStudyGuide: TeacherGuideSection[] } => {
  const stories = storyPages(pages, storyIds);
  return {
    teacherGuide: stories.map((page) => teacherSection(page, level, language)),
    selfStudyGuide: stories.map((page) => selfStudySection(page, level, language)),
  };
};
