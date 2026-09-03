import type { BookData } from '../types';
import type { BookPair } from '../core/content/contracts';

type StoryKey = 'adam' | 'abraham' | 'moses' | 'mecca' | 'yunusEmre' | 'unknown';

type SupportedLevel = 'A2' | 'B1' | 'B2';

const rangeSet = (count: number): ReadonlySet<number> =>
  new Set(Array.from({ length: count }, (_, index) => index + 1));

/**
 * Timing policy only. This file must never rewrite chapter pedagogy, lessonPlan,
 * objectives, app tips, assessment tools, differentiation or reflection.
 *
 * Türkiye school-period standard used by the project:
 * - one lesson = 40 minutes
 * - genuinely dense chapters = 40 + 40 minutes
 */
const DOUBLE_LESSON_CHAPTERS: Record<SupportedLevel, Partial<Record<Exclude<StoryKey, 'unknown'>, ReadonlySet<number>>>> = {
  A2: {},
  B1: {
    adam: new Set([11]),
    abraham: new Set([8, 13]),
    moses: new Set([9, 11, 13]),
    mecca: new Set([9, 13, 14, 15]),
    yunusEmre: new Set([4, 5, 6, 8, 10, 11, 13]),
  },
  B2: {
    // Adam B2 mixes shorter analytical chapters with denser source/interpretation chapters.
    adam: new Set([7, 8, 10, 12, 14, 15, 17]),
    // Abraham B2 chapters were authored as roughly one-period units (previously 40–45 min).
    abraham: new Set(),
    // These B2 guides were authored as 50+ minute units; they should not be compressed into 40 minutes.
    moses: rangeSet(24),
    mecca: rangeSet(17),
    yunusEmre: rangeSet(13),
  },
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

const normalizeBookTiming = (book: BookData): BookData => {
  if (book.level !== 'A2' && book.level !== 'B1' && book.level !== 'B2') return book;

  const level = book.level as SupportedLevel;
  const storyKey = getStoryKey(book);
  if (storyKey === 'unknown') return book;

  const isArabic = book.id.toLowerCase().endsWith('-ar') || /[\u0600-\u06ff]/.test(book.title);
  const configuredDoubleLessons = DOUBLE_LESSON_CHAPTERS[level][storyKey] ?? new Set<number>();

  const teacherGuide = book.teacherGuide.map((section, index) => {
    const chapterNumber = index + 1;
    const isDoubleLesson = configuredDoubleLessons.has(chapterNumber);
    return {
      ...section,
      timing: isDoubleLesson
        ? (isArabic ? '40 + 40 دقيقة' : '40 + 40 minutes')
        : (isArabic ? '40 دقيقة' : '40 minutes'),
    };
  });

  const chapterCount = teacherGuide.length;
  const doubleNumbers = [...configuredDoubleLessons]
    .filter(chapterNumber => chapterNumber <= chapterCount)
    .sort((a, b) => a - b);
  const singleCount = chapterCount - doubleNumbers.length;

  const estimatedDuration = isArabic
    ? (doubleNumbers.length
      ? `${chapterCount} وحدة فصلية: ${singleCount} في 40 دقيقة، والفصول ${doubleNumbers.join('، ')} في 40 + 40 دقيقة. صفحات المراجعة والتقييم مستقلة.`
      : `${chapterCount} وحدة فصلية، كل فصل في حصة واحدة مدتها 40 دقيقة. صفحات المراجعة والتقييم مستقلة.`)
    : (doubleNumbers.length
      ? `${chapterCount} chapter units: ${singleCount} are planned for 40 minutes; Chapters ${doubleNumbers.join(', ')} are planned as 40 + 40 minutes. Review and assessment pages are separate.`
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
  en: normalizeBookTiming(pair.en),
  ar: normalizeBookTiming(pair.ar),
});
