import type { BookData, Level, RubricRow, TeacherGuideMetadata, TeacherGuideSection } from '../../types';
import type { BookPair, Language } from './contracts';

const arabicGuideReplacements: Array<[RegExp, string]> = [
  [/Quick Challenges/gi, 'التحديات السريعة'],
  [/Quick Challenge/gi, 'التحدي السريع'],
  [/Word Notes/gi, 'ملاحظات المفردات'],
  [/Word Note/gi, 'ملاحظة المفردة'],
  [/Review Challenge/gi, 'تحدي المراجعة'],
  [/Final Challenge/gi, 'التحدي النهائي'],
  [/Knowledge Check/gi, 'اختبار الفهم'],
  [/Master Glossary/gi, 'المعجم الشامل'],
  [/Self-Study Guide/gi, 'دليل الدراسة الذاتية'],
  [/Teacher Guide/gi, 'دليل المعلم'],
  [/Gold Standard/gi, 'المعيار الذهبي'],
  [/Ethical Code/gi, 'الميثاق الأخلاقي'],
  [/hotspots/gi, 'النقاط التفاعلية'],
  [/hotspot/gi, 'نقطة تفاعلية'],
  [/CEFR/gi, 'الإطار الأوروبي المرجعي المشترك'],
  [/EFL/gi, 'تعلم الإنجليزية كلغة أجنبية'],
  [/Grades\s*(\d+)\s*[–-]\s*(\d+)/gi, 'الصفوف $1–$2'],
  [/English/gi, 'الإنجليزية'],
  [/Arabic/gi, 'العربية'],
  [/Feedback/gi, 'التغذية الراجعة'],
  [/Knowledge/gi, 'المعرفة'],
  [/factual/gi, 'قائم على الحقائق'],
  [/Claim/gi, 'الفكرة'],
  [/Evidence/gi, 'الدليل'],
  [/Explanation/gi, 'التفسير'],
  [/Summary/gi, 'الملخص'],
  [/Review\s*=/gi, 'المراجعة ='],
  [/Final\s*=/gi, 'النهائي ='],
  [/\bReview\b/gi, 'المراجعة'],
  [/\bGold\b/gi, 'ذهبي'],
  [/\bStandard\b/gi, 'معيار'],
  [/\bCode\b/gi, 'ميثاق'],
  [/\bEthical\b/gi, 'أخلاقي'],
  [/\bMy\b/gi, 'خاصتي'],
];

const localizeArabicString = (value: string): string =>
  arabicGuideReplacements.reduce((current, [pattern, replacement]) => current.replace(pattern, replacement), value);

const localizeArabicGuideValue = <T>(value: T): T => {
  if (typeof value === 'string') return localizeArabicString(value) as T;
  if (Array.isArray(value)) return value.map(item => localizeArabicGuideValue(item)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, localizeArabicGuideValue(item)]),
    ) as T;
  }
  return value;
};

const parseTimedLessonSteps = (section: TeacherGuideSection): { time: string; activity: string }[] => {
  const text = section.lessonPlan.trim();
  if (!text) return [];

  const markerPattern = /(\d+\s*[–-]\s*\d+\s*(?:min(?:utes?)?|m|د(?:قيقة|قائق)?))\s*:\s*/giu;
  const markers = [...text.matchAll(markerPattern)];
  if (!markers.length) return [{ time: section.timing, activity: text }];

  return markers.map((marker, index) => {
    const start = (marker.index ?? 0) + marker[0].length;
    const end = markers[index + 1]?.index ?? text.length;
    return {
      time: marker[1].trim(),
      activity: text.slice(start, end).trim().replace(/^[-–—;,.\s]+/, ''),
    };
  }).filter(step => step.activity.length > 0);
};

const fallbackRubricRows = (level: Level, language: Language): RubricRow[] => {
  if (language === 'ar') {
    if (level === 'A2') {
      return [
        { criterion: 'فهم النص', excellent: 'يحدد المعلومات الأساسية باستقلالية.', good: 'يحدد معظم المعلومات بدعم بسيط.', developing: 'يحتاج إلى إعادة قراءة موجهة.' },
        { criterion: 'المفردات', excellent: 'يفهم ويستخدم مفردات الفصل بدقة.', good: 'يفهم معظم المفردات الأساسية.', developing: 'يحتاج إلى الرجوع المتكرر إلى ملاحظات المفردات.' },
        { criterion: 'التسلسل والسبب البسيط', excellent: 'يرتب الأحداث ويفهم العلاقات البسيطة بوضوح.', good: 'يفهم معظم العلاقات مع دعم محدود.', developing: 'يحتاج إلى إطار أو مثال.' },
        { criterion: 'الاستفادة من التغذية الراجعة', excellent: 'يعود إلى النص ويصحح إجابته باستقلالية.', good: 'يعيد المحاولة بعد تذكير.', developing: 'يحتاج إلى توجيه مباشر.' },
      ];
    }
    if (level === 'B1') {
      return [
        { criterion: 'الفكرة الرئيسة والدليل', excellent: 'يحدد الفكرة الرئيسة ويدعمها بأدلة مناسبة.', good: 'يحدد الفكرة ومعظم الأدلة بدعم بسيط.', developing: 'يحتاج إلى توجيه لاختيار الدليل.' },
        { criterion: 'السبب والنتيجة أو الدافع', excellent: 'يشرح العلاقة بوضوح اعتماداً على النص.', good: 'يشرح العلاقة إجمالاً.', developing: 'يحتاج إلى إطار جملة.' },
        { criterion: 'المفردات في السياق', excellent: 'يستخدم مفردات الفصل بدقة في إجابة قصيرة.', good: 'يستخدم بعض المفردات بصورة صحيحة.', developing: 'يحتاج إلى دعم من ملاحظات المفردات.' },
        { criterion: 'وضوح التلخيص', excellent: 'يقدم تلخيصاً قصيراً منظماً ومدعوماً بالنص.', good: 'يقدم تلخيصاً مفهوماً.', developing: 'يحتاج إلى تنظيم الأفكار.' },
      ];
    }
    return [
      { criterion: 'الاستدلال والتحليل', excellent: 'يبني استنتاجاً واضحاً ومدعوماً بالنص.', good: 'يقدم استنتاجاً مناسباً مع بعض الدعم.', developing: 'يحتاج إلى مساعدة لربط الدليل بالاستنتاج.' },
      { criterion: 'اختيار الدليل', excellent: 'يختار أدلة قوية ودقيقة من الفصل.', good: 'يختار أدلة مناسبة في الغالب.', developing: 'يحتاج إلى توجيه لاختيار الدليل الأقوى.' },
      { criterion: 'المقارنة والتقييم', excellent: 'يقارن التفسيرات ويقيمها وفق الأدلة.', good: 'يجري مقارنة واضحة مع بعض التبرير.', developing: 'يحتاج إلى إطار للمقارنة.' },
      { criterion: 'وضوح التفسير', excellent: 'يشرح الفكرة والدليل والعلاقة بينهما بدقة.', good: 'يشرح العلاقة بصورة مفهومة.', developing: 'يحتاج إلى تنظيم أو لغة داعمة.' },
    ];
  }

  if (level === 'A2') {
    return [
      { criterion: 'Text understanding', excellent: 'Finds key information independently.', good: 'Finds most information with light support.', developing: 'Needs guided rereading.' },
      { criterion: 'Vocabulary', excellent: 'Understands and uses chapter words accurately.', good: 'Understands most key words.', developing: 'Needs frequent Word Notes support.' },
      { criterion: 'Sequence / simple cause', excellent: 'Orders events and explains simple links clearly.', good: 'Understands most links with light support.', developing: 'Needs a frame or model.' },
      { criterion: 'Using feedback', excellent: 'Returns to the text and self-corrects independently.', good: 'Retries after a reminder.', developing: 'Needs direct guidance.' },
    ];
  }
  if (level === 'B1') {
    return [
      { criterion: 'Main idea and evidence', excellent: 'Identifies the main idea and supports it with relevant evidence.', good: 'Identifies the idea and most evidence with light support.', developing: 'Needs guidance to select evidence.' },
      { criterion: 'Cause / result / motivation', excellent: 'Explains the relationship clearly from the text.', good: 'Explains the relationship generally.', developing: 'Needs a sentence frame.' },
      { criterion: 'Vocabulary in context', excellent: 'Uses chapter vocabulary accurately in a short response.', good: 'Uses some target vocabulary correctly.', developing: 'Needs Word Notes support.' },
      { criterion: 'Summary clarity', excellent: 'Produces a concise, organised, text-grounded summary.', good: 'Produces a clear basic summary.', developing: 'Needs help organising ideas.' },
    ];
  }
  return [
    { criterion: 'Inference and analysis', excellent: 'Builds a clear inference supported by the chapter.', good: 'Makes a suitable inference with some support.', developing: 'Needs help linking evidence to inference.' },
    { criterion: 'Evidence selection', excellent: 'Selects strong and precise textual evidence.', good: 'Selects generally relevant evidence.', developing: 'Needs guidance to choose the strongest evidence.' },
    { criterion: 'Comparison and evaluation', excellent: 'Compares interpretations and evaluates them against evidence.', good: 'Makes a clear comparison with some justification.', developing: 'Needs a comparison frame.' },
    { criterion: 'Explanation clarity', excellent: 'Explains claim, evidence, and reasoning precisely.', good: 'Explains the relationship clearly enough.', developing: 'Needs organisation or language support.' },
  ];
};

const defaultReadingFramework = (level: Level, language: Language) => language === 'ar'
  ? {
      before: 'عاين العنوان والصورة والمفردات الأساسية وحدد هدف القراءة.',
      during: level === 'A2'
        ? 'اقرأ أو استمع على أجزاء قصيرة وحدد المعلومات المباشرة والتسلسل.'
        : level === 'B1'
          ? 'اقرأ للفكرة العامة ثم أعد القراءة لتحديد السبب والنتيجة والدليل.'
          : 'اقرأ للفكرة العامة ثم حلل المقارنة والاستدلال ونقاط التحول مع تحديد الأدلة.',
      after: level === 'A2'
        ? 'أجب عن التحدي السريع ثم عد إلى جملة الإجابة عند الخطأ.'
        : 'أجب، برر بالدليل، ثم أعد القراءة وصحح الإجابة عند الحاجة.',
    }
  : {
      before: 'Preview the title, image, and key vocabulary and set a reading purpose.',
      during: level === 'A2'
        ? 'Read or listen in short chunks and identify stated information and sequence.'
        : level === 'B1'
          ? 'Read for gist, then reread for cause, result, motivation, and evidence.'
          : 'Read for gist, then analyse comparison, inference, turning points, and textual evidence.',
      after: level === 'A2'
        ? 'Complete the Quick Challenge and return to the answer sentence after an error.'
        : 'Answer, justify with evidence, then reread and correct when needed.',
    };

const ensureTeacherGuideMetadata = (
  metadata: TeacherGuideMetadata | undefined,
  guide: TeacherGuideSection[],
  level: Level,
  language: Language,
): TeacherGuideMetadata => {
  const base = metadata ?? {};
  const first = guide[0];
  const second = guide[1] ?? first;

  const implementationPlans = base.implementationPlans ?? (first && second ? {
    optionA: {
      title: language === 'ar' ? `نموذج: ${first.chapter}` : `Sample: ${first.chapter}`,
      steps: parseTimedLessonSteps(first),
    },
    optionB: {
      title: language === 'ar' ? `نموذج: ${second.chapter}` : `Sample: ${second.chapter}`,
      lessons: [{ title: second.chapter, description: second.lessonPlan }],
    },
  } : undefined);

  const rubricRows = base.rubricRows?.length ? base.rubricRows : fallbackRubricRows(level, language);
  const targetLearners = base.targetLearners || base.targetAudience || (
    language === 'ar'
      ? `متعلمو اللغة في مستوى ${level}.`
      : `Language learners working around CEFR ${level}.`
  );

  return {
    ...base,
    targetLearners,
    purpose: base.purpose || (language === 'ar' ? 'دعم فهم النص وتطوير اللغة من خلال قراءة موجهة مرتبطة بالفصل.' : 'Support text comprehension and language development through chapter-grounded guided reading.'),
    approachDesc: base.approachDesc || (language === 'ar' ? 'اقرأ للفهم، ارجع إلى الدليل، ثم استخدم الأسئلة والتغذية الراجعة للتعلم والمراجعة.' : 'Read for understanding, return to evidence, then use questions and feedback for learning and review.'),
    assessmentEvidence: base.assessmentEvidence || (language === 'ar' ? 'فهم النص، استخدام المفردات، اختيار الدليل، والاستجابة للأسئلة والمهام المرتبطة بالفصل.' : 'Text comprehension, vocabulary use, evidence selection, and responses to chapter-grounded questions and tasks.'),
    readingFramework: base.readingFramework ?? defaultReadingFramework(level, language),
    rubricTitle: base.rubricTitle || (language === 'ar' ? `معيار التقييم — مستوى ${level}` : `${level} Reading and Learning Rubric`),
    rubricRows,
    implementationPlans,
    homeConnection: base.homeConnection ?? {
      title: language === 'ar' ? 'التواصل مع المنزل' : 'Home Connection',
      items: language === 'ar'
        ? ['استمع إلى فصل واحد واتبع النص.', 'راجع ثلاث مفردات أساسية من الفصل.', 'اختر سؤالاً واحداً وأجب عنه بالرجوع إلى النص.']
        : ['Listen to one chapter and follow the text.', 'Review three key words from the chapter.', 'Choose one question and answer it by returning to the text.'],
    },
    sensitiveNotes: base.sensitiveNotes ?? {
      title: language === 'ar' ? 'ضوابط المحتوى' : 'Content Safeguards',
      notes: language === 'ar'
        ? ['ابقِ المعلومات الدينية والتاريخية مرتبطة بصياغة الفصل.', 'لا تحول التأمل الشخصي إلى حقيقة جديدة.', 'قدّم مشاهد الألم أو الظلم بلغة هادئة وغير رسومية.']
        : ['Keep religious and historical information within the wording of the chapter.', 'Do not present personal reflection as a new factual claim.', 'Handle pain, punishment, or injustice in calm, non-graphic language.'],
    },
  };
};

const finalizeBookForUi = (book: BookData, language: Language): BookData => {
  const localized = language === 'ar'
    ? {
        ...book,
        teacherGuide: localizeArabicGuideValue(book.teacherGuide),
        selfStudyGuide: localizeArabicGuideValue(book.selfStudyGuide),
        studentGuideText: localizeArabicGuideValue(book.studentGuideText),
        studentGuideSections: localizeArabicGuideValue(book.studentGuideSections),
        teacherGuideMetadata: localizeArabicGuideValue(book.teacherGuideMetadata),
        studentGuideMetadata: localizeArabicGuideValue(book.studentGuideMetadata),
      }
    : book;

  return {
    ...localized,
    teacherGuideMetadata: ensureTeacherGuideMetadata(
      localized.teacherGuideMetadata,
      localized.teacherGuide,
      localized.level,
      language,
    ),
  };
};

export const finalizeBookPairForUi = (pair: BookPair): BookPair => ({
  en: finalizeBookForUi(pair.en, 'en'),
  ar: finalizeBookForUi(pair.ar, 'ar'),
});
