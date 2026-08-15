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

const glossaryPart1: NonNullable<PageData['vocabulary']> = [
  { word: 'Messenger', definition: 'A person who brings a message from Allah.' },
  { word: 'soil', definition: 'The earth where plants can grow.' },
  { word: 'curiosity', definition: 'Wanting to know or learn something.' },
  { word: 'respect', definition: 'A feeling that someone is important and should be treated well.' },
  { word: 'wiser', definition: 'Knowing more and making better choices.' },
  { word: 'knowledge', definition: 'Things that a person knows and understands.' },
  { word: 'arrogant', definition: 'Thinking you are better or more important than other people.' },
  { word: 'valuable', definition: 'Very useful or important.' },
  { word: 'creature', definition: 'A living thing created by Allah.' },
  { word: 'lonely', definition: 'Sad because you are alone.' },
  { word: 'warning', definition: 'Words that tell you about something you should be careful about.' },
  { word: 'regret', definition: 'Feeling sad because of something wrong you did.' },
];

const glossaryPart2: NonNullable<PageData['vocabulary']> = [
  { word: 'crops', definition: 'Plants that people grow for food.' },
  { word: 'rule', definition: 'To be in charge of a place or people.' },
  { word: 'planet', definition: 'A large world in space, like Earth.' },
  { word: 'honest', definition: 'Telling the truth and not cheating.' },
  { word: 'behave', definition: 'To act in a particular way.' },
  { word: 'enemy', definition: 'A person who wants to harm or oppose someone.' },
  { word: 'shepherd', definition: 'A person who looks after sheep.' },
  { word: 'farmer', definition: 'A person who grows crops or keeps animals on a farm.' },
  { word: 'offering', definition: 'Something given to Allah.' },
  { word: 'crow', definition: 'A large black bird.' },
  { word: 'panic', definition: 'A sudden strong feeling of fear.' },
  { word: 'worldwide', definition: 'In many places around the world.' },
];

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
      content: 'Selected key vocabulary from Chapters 1–5 for whole-book review.',
      vocabulary: glossaryPart1,
    };
  }

  if (page.id === 15) {
    return {
      ...page,
      content: 'Selected key vocabulary from Chapters 6–10 for whole-book review.',
      vocabulary: glossaryPart2,
    };
  }

  return page;
});

export const adamA2TeacherGuideQualityFinalized: TeacherGuideSection[] = adamA2TeacherGuide.map((section) => ({
  ...section,
  // Lesson plans already contain usable no-print activities. Do not claim that
  // separate worksheets exist when the repository does not supply them.
  extraResources: undefined,
  ...(section.chapter.startsWith('Chapter 9:')
    ? {
        pronunciationFocus: 'Diphthong /oʊ/ in crow; stress in panic; clear -ing ending in digging.',
      }
    : {}),
}));
