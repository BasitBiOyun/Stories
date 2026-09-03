import type { BookData, Level, TeacherGuideSection } from '../types';
import type { BookPair } from '../core/content/contracts';

type StoryKey = 'adam' | 'abraham' | 'moses' | 'mecca' | 'yunusEmre' | 'unknown';

const B1_DOUBLE_LESSON_CHAPTERS: Record<Exclude<StoryKey, 'unknown'>, ReadonlySet<number>> = {
  adam: new Set([11]),
  abraham: new Set([8, 13]),
  moses: new Set([9, 11, 13]),
  mecca: new Set([9, 13, 14, 15]),
  yunusEmre: new Set([4, 5, 6, 8, 10, 11, 13]),
};

// B2 books are reviewed one by one. Only books already reviewed should be added here.
const B2_DOUBLE_LESSON_CHAPTERS: Partial<Record<Exclude<StoryKey, 'unknown'>, ReadonlySet<number>>> = {
  adam: new Set([7, 8, 10, 12, 14, 15, 17]),
};

const getStoryKey = (book: BookData): StoryKey => {
  const identity = `${book.id} ${book.title}`.toLowerCase();
  if (identity.includes('yunus')) return 'yunusEmre';
  if (identity.includes('abraham') || identity.includes('ibrahim') || identity.includes('إبراهيم')) return 'abraham';
  if (identity.includes('moses') || identity.includes('musa') || identity.includes('موسى')) return 'moses';
  if (identity.includes('mecca') || identity.includes('مكة')) return 'mecca';
  if (identity.includes('adam') || identity.includes('آدم')) return 'adam';
  return 'unknown';
};

const singleLessonPlan = (level: Level, isArabic: boolean, chapterNumber: number): string => {
  if (isArabic) {
    if (level === 'A2') {
      return `خطة حصة واحدة (40 دقيقة): 0–4 استرجاع/توقع؛ 4–9 تمهيد قصير بالمفردات والصوت؛ 9–20 قراءة/استماع للمعنى العام والدليل؛ 20–25 التحدي السريع مع العودة إلى النص؛ 25–34 التركيز اللغوي للفصل ${chapterNumber} مع الملاحظة والتدريب الأساسي؛ 34–39 إنتاج شفهي/كتابي A2 قصير؛ 39–40 تذكرة خروج. إذا احتاج النقاش إلى وقت إضافي، انقل نشاط التوسع الاختياري إلى الحصة التالية ولا تحذف التركيز اللغوي أو الإنتاج الأساسي.`;
    }
    if (level === 'B2') {
      return `خطة حصة واحدة (40 دقيقة): 0–4 استرجاع وسؤال مصدر/دليل؛ 4–15 قراءة/استماع للمعنى العام؛ 15–21 تحديد الدليل والمصدر والموقف أو العلاقة الخطابية؛ 21–25 التحدي السريع مع التبرير؛ 25–33 التركيز اللغوي للفصل ${chapterNumber} وتحليل وظيفته في النص؛ 33–39 إنتاج B2 مترابط يربط الادعاء بالدليل والتفسير؛ 39–40 تذكرة خروج. إذا طال النقاش، انقل التوسع الاختياري إلى حصة لاحقة ولا تختصر ضبط المصدر أو الإنتاج الأساسي.`;
    }
    return `خطة حصة واحدة (40 دقيقة): 0–4 استرجاع/توقع؛ 4–8 ملاحظات الكلمات وتمهيد صوتي؛ 8–19 قراءة/استماع للمعنى والعلاقات؛ 19–24 تحديد الدليل أو وجهة النظر؛ 24–28 التحدي السريع مع التبرير؛ 28–35 التركيز اللغوي للفصل ${chapterNumber} مع الملاحظة والتدريب الأساسي؛ 35–39 إنتاج B1 مترابط؛ 39–40 تذكرة خروج. إذا طال النقاش، انقل التوسع الاختياري لا العمل اللغوي الأساسي إلى الحصة التالية.`;
  }

  if (level === 'A2') {
    return `One 40-minute lesson: 0–4 min recall/prediction; 4–9 min short vocabulary/audio preview; 9–20 min read/listen for overall meaning and evidence; 20–25 min Quick Challenge with return to the text; 25–34 min Chapter ${chapterNumber} Language Focus guided noticing and core practice; 34–39 min short A2 speaking/writing transfer; 39–40 min exit ticket. If discussion needs more time, move the optional extension to the next lesson rather than dropping core Language Focus or production.`;
  }
  if (level === 'B2') {
    return `One 40-minute lesson: 0–4 min retrieval plus one source/evidence question; 4–15 min read/listen for overall meaning; 15–21 min evidence, source, stance or discourse-relationship marking; 21–25 min Quick Challenge with justification; 25–33 min Chapter ${chapterNumber} Language Focus with function-in-context analysis; 33–39 min connected B2 claim-evidence-explanation production; 39–40 min exit ticket. If discussion runs long, move optional extension work to another lesson rather than compressing source control or core production.`;
  }
  return `One 40-minute lesson: 0–4 min recall/prediction; 4–8 min Word Notes/audio preview; 8–19 min read/listen for meaning and relationships; 19–24 min evidence or viewpoint check; 24–28 min Quick Challenge with justification; 28–35 min Chapter ${chapterNumber} Language Focus guided noticing and core practice; 35–39 min connected B1 production; 39–40 min exit ticket. If discussion runs long, move the optional extension—not the core language work—to the next lesson.`;
};

const doubleLessonPlan = (level: Level, isArabic: boolean, chapterNumber: number): string => {
  if (isArabic) {
    if (level === 'B2') {
      return `خطة حصتين (40 + 40 دقيقة). الحصة الأولى: 0–5 استرجاع وسؤال مصدر/تفسير؛ 5–22 قراءة/استماع متأنٍ للمعنى والعلاقات الرئيسة؛ 22–31 خريطة دليل/مصدر/موقف/سبب أو تسلسل بحسب الفصل؛ 31–37 التحدي السريع مع التبرير من النص؛ 37–40 نقطة وصل يدوّن فيها الطالب ادعاءً واحدًا ودليله وسؤالًا يحتاج إلى استكمال. الحصة الثانية: 0–5 استرجاع نقطة الوصل من غير إعادة قراءة الفصل كله؛ 5–18 التركيز اللغوي للفصل ${chapterNumber} وتحليل أثره في تنظيم المعنى؛ 18–26 تدريب مضبوط وتصحيح بالعودة إلى العبارة الأصلية؛ 26–35 إنتاج B2 مترابط بصيغة ادعاء–دليل–تفسير أو مقارنة/تركيب بحسب الهدف؛ 35–39 فحص حدود المصدر أو التفسير والقيمة؛ 39–40 تذكرة خروج. لا تضغط الحصتين في حصة واحدة.`;
    }
    return `خطة حصتين (40 + 40 دقيقة). الحصة الأولى: 0–5 استرجاع/توقع؛ 5–10 مفردات وتمهيد صوتي؛ 10–25 قراءة/استماع للمعنى والعلاقات الرئيسة؛ 25–33 تحديد الدليل/وجهة النظر/التسلسل؛ 33–38 التحدي السريع مع التبرير؛ 38–40 نقطة وصل يدوّن فيها الطالب جملة دليل واحدة وسؤالاً أو علاقة تحتاج إلى استكمال. الحصة الثانية: 0–5 استرجاع نقطة الوصل من غير إعادة قراءة الفصل كله؛ 5–18 التركيز اللغوي للفصل ${chapterNumber} والملاحظة الموجهة؛ 18–27 التدريب المضبوط والتصحيح بالرجوع إلى الجملة الأصلية؛ 27–36 إنتاج B1 مترابط؛ 36–39 تطبيق القيمة أو التفسير مع فصل الدليل عن الرأي؛ 39–40 تذكرة خروج. لا تضغط الحصتين في حصة واحدة.`;
  }
  if (level === 'B2') {
    return `Two-lesson plan (40 + 40 minutes). Lesson 1: 0–5 min retrieval plus a source/interpretation question; 5–22 min careful read/listen for meaning and key relationships; 22–31 min evidence/source/stance/cause-or-sequence mapping as appropriate; 31–37 min Quick Challenge with text justification; 37–40 min bridge note containing one claim, its evidence and one unresolved question. Lesson 2: 0–5 min retrieve the bridge without rereading the whole chapter; 5–18 min Chapter ${chapterNumber} Language Focus and function-in-context analysis; 18–26 min controlled practice and correction from the source wording; 26–35 min connected B2 claim-evidence-explanation, comparison or synthesis production; 35–39 min source-boundary/interpretation/value check; 39–40 min exit ticket. Do not compress both lessons into one period.`;
  }
  return `Two-lesson plan (40 + 40 minutes). Lesson 1: 0–5 min recall/prediction; 5–10 min vocabulary/audio preview; 10–25 min read/listen for meaning and key relationships; 25–33 min evidence/viewpoint/sequence work; 33–38 min Quick Challenge with justification; 38–40 min bridge note in which learners record one evidence sentence and one relationship or question to carry forward. Lesson 2: 0–5 min retrieve the bridge evidence without rereading the whole chapter; 5–18 min Chapter ${chapterNumber} Language Focus guided noticing; 18–27 min controlled practice and correction from the source sentence; 27–36 min connected B1 production; 36–39 min value/interpretation transfer while separating evidence from opinion; 39–40 min exit ticket. Do not compress both lessons into one period.`;
};

const normalizeBook = (book: BookData): BookData => {
  const storyKey = getStoryKey(book);
  const isReviewedAdamB2 = book.level === 'B2' && storyKey === 'adam';
  if (book.level !== 'A2' && book.level !== 'B1' && !isReviewedAdamB2) return book;

  const isArabic = book.id.toLowerCase().endsWith('-ar');
  const doubleLessons = book.level === 'B1' && storyKey !== 'unknown'
    ? B1_DOUBLE_LESSON_CHAPTERS[storyKey]
    : book.level === 'B2' && storyKey !== 'unknown'
      ? (B2_DOUBLE_LESSON_CHAPTERS[storyKey] ?? new Set<number>())
      : new Set<number>();

  const teacherGuide: TeacherGuideSection[] = book.teacherGuide.map((section, index) => {
    const chapterNumber = index + 1;
    const isDoubleLesson = doubleLessons.has(chapterNumber);
    return {
      ...section,
      timing: isDoubleLesson
        ? (isArabic ? '40 + 40 دقيقة' : '40 + 40 minutes')
        : (isArabic ? '40 دقيقة' : '40 minutes'),
      lessonPlan: isDoubleLesson
        ? doubleLessonPlan(book.level, isArabic, chapterNumber)
        : singleLessonPlan(book.level, isArabic, chapterNumber),
      teacherReflection: isDoubleLesson
        ? `${section.teacherReflection ?? ''}${section.teacherReflection ? ' ' : ''}${isArabic ? 'إذا كان الفصل على حصتين، فهل حافظت نقطة الوصل على المعنى والدليل من غير إعادة قراءة غير ضرورية؟' : 'If this chapter used two lessons, did the bridge preserve meaning and evidence without unnecessary rereading?'}`
        : section.teacherReflection,
    };
  });

  const chapterCount = teacherGuide.length;
  const doubleNumbers = [...doubleLessons].filter(n => n <= chapterCount).sort((a, b) => a - b);
  const singleCount = chapterCount - doubleNumbers.length;
  const estimatedDuration = isArabic
    ? (doubleNumbers.length
      ? `${chapterCount} وحدة فصلية: ${singleCount} فصل/فصول في 40 دقيقة، والفصول ${doubleNumbers.join('، ')} في 40 + 40 دقيقة. صفحات المراجعة والتقييم مستقلة.`
      : `${chapterCount} وحدة فصلية، كل فصل في حصة واحدة مدتها 40 دقيقة. صفحات المراجعة والتقييم مستقلة.`)
    : (doubleNumbers.length
      ? `${chapterCount} chapter units: ${singleCount} chapters are planned for 40 minutes; Chapters ${doubleNumbers.join(', ')} are planned as 40 + 40 minutes. Review and assessment pages are separate.`
      : `${chapterCount} chapter units, each planned for one 40-minute lesson. Review and assessment pages are separate.`);

  return {
    ...book,
    teacherGuide,
    teacherGuideMetadata: book.teacherGuideMetadata
      ? { ...book.teacherGuideMetadata, estimatedDuration }
      : book.teacherGuideMetadata,
  };
};

export const normalizeTeacherGuideLessonTiming = (pair: BookPair): BookPair => ({
  en: normalizeBook(pair.en),
  ar: normalizeBook(pair.ar),
});
