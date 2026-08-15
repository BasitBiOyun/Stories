import type { PageData, TeacherGuideSection } from '../../../../types';
import { adamA2PagesForLearning } from './learningMaterials';
import { adamA2TeacherGuide } from './teacherGuide';
import { adamA2HotspotsGoldEn } from '../hotspotsGold';
import { getAdamA2ChapterHighlights } from '../highlights';

/**
 * Final Adam A2 English derived-content pass.
 *
 * Canonical story prose, chapter structure, images, audio and timing data remain
 * owned by pages.ts. Story highlight targets are owned exclusively by
 * ../highlights.ts so legacy vocabulary/animatedWords cannot diverge.
 */

const glossaryPart1: NonNullable<PageData['vocabulary']> = [1, 2, 3, 4, 5]
  .flatMap((chapterId) => getAdamA2ChapterHighlights(chapterId, 'en'));
const glossaryPart2: NonNullable<PageData['vocabulary']> = [6, 7, 8, 9, 10]
  .flatMap((chapterId) => getAdamA2ChapterHighlights(chapterId, 'en'));

const fixApprovedObviousTextSlips = (page: PageData): PageData => {
  if (page.type !== 'story') return page;

  const replacements: Array<[string, string]> = page.id === 7
    ? [['They had also lots of children.', 'They also had lots of children.']]
    : page.id === 9
      ? [['his brother dead body', "his brother's dead body"]]
      : [];

  if (!replacements.length) return page;

  const replaceText = (value: string): string => replacements.reduce(
    (text, [from, to]) => text.replaceAll(from, to),
    value,
  );

  return {
    ...page,
    content: replaceText(page.content || ''),
    timedChunks: page.timedChunks?.map((chunk) => ({ ...chunk, text: replaceText(chunk.text) })),
  };
};

export const adamA2PagesQualityFinalized: PageData[] = adamA2PagesForLearning.map((rawPage) => {
  const page = fixApprovedObviousTextSlips(rawPage);

  if (page.type === 'story' && page.id >= 1 && page.id <= 10) {
    const hotspots = page.hotspots?.map((hotspot) => {
      const replacement = adamA2HotspotsGoldEn[hotspot.id];
      return replacement ? { ...hotspot, ...replacement } : hotspot;
    });
    return {
      ...page,
      vocabulary: getAdamA2ChapterHighlights(page.id, 'en'),
      animatedWords: undefined,
      hotspots,
    };
  }

  if (page.id === 13) {
    return {
      ...page,
      exercises: page.exercises?.map((exercise) => exercise.id === 'final-3'
        ? {
            ...exercise,
            feedback: {
              correct: 'Use one detail from the story to support your reflection.',
              incorrect: 'This is a reflection, so there is no single wrong answer. Choose one idea from the story and explain your own connection.',
            },
          }
        : exercise),
    };
  }

  if (page.id === 14) {
    return {
      ...page,
      content: 'All highlighted words from Chapters 1–5 for whole-book review.',
      vocabulary: glossaryPart1,
    };
  }

  if (page.id === 15) {
    return {
      ...page,
      content: 'All highlighted words from Chapters 6–10 for whole-book review.',
      vocabulary: glossaryPart2,
    };
  }

  return page;
});

export const adamA2TeacherGuideQualityFinalized: TeacherGuideSection[] = adamA2TeacherGuide.map((section) => ({
  ...section,
  extraResources: undefined,
  ...(section.chapter.startsWith('Chapter 9:')
    ? {
        pronunciationFocus: 'Diphthong /oʊ/ in crow; stress in panic; clear -ing ending in digging.',
      }
    : {}),
}));
