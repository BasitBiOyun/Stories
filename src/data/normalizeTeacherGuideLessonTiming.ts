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

const getStoryKey = (bookId: string): StoryKey => {
  const id = bookId.toLowerCase();
  if (id.includes('yunus')) return 'yunusEmre';
  if (id.includes('abraham') || id.includes('ibrahim')) return 'abraham';
  if (id.includes('moses') || id.includes('musa')) return 'moses';
  if (id.includes('mecca')) return 'mecca';
  if (id.includes('adam')) return 'adam';
  return 'unknown';
};

const singleLessonPlan = (level: Level, isArabic: boolean, chapterNumber: number): string => {
  if (isArabic) {
    if (level === 'A2') {
      return `خطة حصة واحدة (40 دقيقة): 0–4 استرجاع/توقع؛ 4–9 تمهيد قصير بالمفردات والصوت؛ 9–20 قراءة/استماع للمعنى العام والدليل؛ 20–25 التحدي السريع مع العودة إلى النص؛ 25–34 التركيز اللغوي للفصل ${chapterNumber} مع الملاحظة والتدريب الأساسي؛ 34–39 إنتاج شفهي/كتابي A2 قصير؛ 39–40 تذكرة خروج. إذا احتاج النقاش إلى وقت إضافي، انقل نشاط التوسع الاختياري إلى الحصة التالية ولا تحذف التركيز اللغوي أو الإنتاج الأساسي.`;
    }
    return `خطة حصة واحدة (40 دقيقة): 0–4 استرجاع/توقع؛ 4–8 ملاحظات الكلمات وتمهيد صوتي؛ 8–19 قراءة/استماع للمعنى والعلاقات؛ 19–24 تحديد الدليل أو وجهة النظر؛ 24–28 التحدي السريع مع التبرير؛ 28–35 التركيز اللغوي للفصل ${chapterNumber} مع الملاحظة والتدريب الأساسي؛ 35–39 إنتاج B1 مترابط؛ 39–40 تذكرة خروج. إذا طال النقاش، انقل التوسع الاختياري لا العمل اللغوي الأساسي إلى الحصة التالية.`;
  }

  if (level === 'A2') {
    return `One 40-minute lesson: 0–4 min recall/prediction; 4–9 min short vocabulary/audio preview; 9–20 min read/listen for overall meaning and evidence; 20–25 min Quick Challenge with return to the text; 25–34 min Chapter ${chapterNumber} Language Focus guided noticing and core practice; 34–39 min short A2 speaking/writing transfer; 39–40 min exit ticket. If discussion needs more time, move the optional extension to the next lesson rather than dropping core Language Focus or production.`;
  }
  return `One 40-minute lesson: 0–4 min recall/prediction; 4–8 min Word Notes/audio preview; 8–19 min read/listen for meaning and relationships; 19–24 min evidence or viewpoint check; 24–28 min Quick Challenge with justification; 28–35 min Chapter ${chapterNumber} Language Focus guided noticing and core practice; 35–39 min connected B1 production; 39–40 min exit ticket. If discussion runs long, move the optional extension—not the core language work—to the next lesson.`;
};

const doubleLessonPlan = (isArabic: boolean, chapterNumber: number): string => {
  if (isArabic) {
    return `خطة حصتين (40 + 40 دقيقة). الحصة الأولى: 0–5 استرجاع/توقع؛ 5–10 مفردات وتمهيد صوتي؛ 10–25 قراءة/استماع للمعنى والعلاقات الرئيسة؛ 25–33 تحديد الدليل/وجهة النظر/التسلسل؛ 33–38 التحدي السريع مع التبرير؛ 38–40 نقطة وصل يدوّن فيها الطالب جملة دليل واحدة وسؤالاً أو علاقة تحتاج إلى استكمال. الحصة الثانية: 0–5 استرجاع نقطة الوصل من غير إعادة قراءة الفصل كله؛ 5–18 التركيز اللغوي للفصل ${chapterNumber} والملاحظة الموجهة؛ 18–27 التدريب المضبوط والتصحيح بالرجوع إلى الجملة الأصلية؛ 27–36 إنتاج B1 مترابط؛ 36–39 تطبيق القيمة أو التفسير مع فصل الدليل عن الرأي؛ 39–40 تذكرة خروج. لا تضغط الحصتين في حصة واحدة.`;
  }
  return `Two-lesson plan (40 + 40 minutes). Lesson 1: 0–5 min recall/prediction; 5–10 min vocabulary/audio preview; 10–25 min read/listen for meaning and key relationships; 25–33 min evidence/viewpoint/sequence work; 33–38 min Quick Challenge with justification; 38–40 min bridge note in which learners record one evidence sentence and one relationship or question to carry forward. Lesson 2: 0–5 min retrieve the bridge evidence without rereading the whole chapter; 5–18 min Chapter ${chapterNumber} Language Focus guided noticing; 18–27 min controlled practice and correction from the source sentence; 27–36 min connected B1 production; 36–39 min value/interpretation transfer while separating evidence from opinion; 39–40 min exit ticket. Do not compress both lessons into one period.`;
};

const normalizeBook = (book: BookData): BookData => {
  if (book.level !== 'A2' && book.level !== 'B1') return book;

  const storyKey = getStoryKey(book.id);
  const isArabic = book.id.toLowerCase().endsWith('-ar');
  const doubleLessons = book.level === 'B1' && storyKey !== 'unknown'
    ? B1_DOUBLE_LESSON_CHAPTERS[storyKey]
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
        ? doubleLessonPlan(isArabic, chapterNumber)
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
