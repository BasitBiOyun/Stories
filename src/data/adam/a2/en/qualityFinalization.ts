import type { PageData, TeacherGuideSection } from '../../../../types';
import { adamA2PagesForLearning } from './learningMaterials';
import { adamA2TeacherGuide } from './teacherGuide';

/**
 * Final Adam A2 English derived-content pass.
 *
 * Canonical story fields remain owned by pages.ts. This layer only refines
 * vocabulary/glossary data, reflection feedback, and teacher-guide support
 * material that is derived from the unchanged canonical chapters.
 */

const chapterVocabulary: Record<number, NonNullable<PageData['vocabulary']>> = {
  1: [
    { word: 'Messenger', definition: 'A person who brings a message from Allah.' },
    { word: 'soil', definition: 'The earth where plants can grow.' },
    { word: 'curiosity', definition: 'Wanting to know or learn something.' },
    { word: 'sky', definition: 'The space we see above the Earth.' },
    { word: 'earth', definition: 'The world where people live.' },
    { word: 'dust', definition: 'Very small, dry pieces of earth.' },
  ],
  2: [
    { word: 'respect', definition: 'A feeling that someone is important and should be treated well.' },
    { word: 'wiser', definition: 'Knowing more and making better choices.' },
    { word: 'knowledge', definition: 'Things that a person knows and understands.' },
    { word: 'think', definition: 'To use your mind to understand or decide.' },
    { word: 'amazing', definition: 'Very surprising or very good.' },
  ],
  3: [
    { word: 'arrogant', definition: 'Thinking you are better or more important than other people.' },
    { word: 'valuable', definition: 'Very useful or important.' },
    { word: 'creature', definition: 'A living thing created by Allah.' },
    { word: 'fire', definition: 'Heat and light from something that is burning.' },
    { word: 'clay', definition: 'Soft earth that can be shaped when wet.' },
  ],
  4: [
    { word: 'lonely', definition: 'Sad because you are alone.' },
    { word: 'wonderful', definition: 'Very good and giving you a happy feeling.' },
    { word: 'warning', definition: 'Words that tell you about something you should be careful about.' },
  ],
  5: [
    { word: 'forgetful', definition: 'Often forgetting things.' },
    { word: 'mistake', definition: 'Something you do that is wrong or not correct.' },
    { word: 'regret', definition: 'Feeling sad because of something wrong you did.' },
    { word: 'superior', definition: 'Better or more important than someone else.' },
    { word: 'on purpose', definition: 'Because you meant to do it.' },
  ],
  6: [
    { word: 'crops', definition: 'Plants that people grow for food.' },
    { word: 'rule', definition: 'To be in charge of a place or people.' },
    { word: 'planet', definition: 'A large world in space, like Earth.' },
    { word: 'excused', definition: 'Forgave someone for a mistake.' },
  ],
  7: [
    { word: 'honest', definition: 'Telling the truth and not cheating.' },
    { word: 'behave', definition: 'To act in a particular way.' },
    { word: 'enemy', definition: 'A person who wants to harm or oppose someone.' },
    { word: 'remember', definition: 'To keep something in your mind and not forget it.' },
  ],
  8: [
    { word: 'shepherd', definition: 'A person who looks after sheep.' },
    { word: 'farmer', definition: 'A person who grows crops or keeps animals on a farm.' },
    { word: 'offering', definition: 'Something given to Allah.' },
    { word: 'gentle', definition: 'Kind and calm; not rough.' },
    { word: 'jealous', definition: 'Unhappy because another person has something you want.' },
  ],
  9: [
    { word: 'crow', definition: 'A large black bird.' },
    { word: 'panic', definition: 'A sudden strong feeling of fear.' },
    { word: 'digging', definition: 'Making a hole in the ground.' },
    { word: 'harm', definition: 'To hurt or damage someone or something.' },
    { word: 'anger', definition: 'A strong feeling when you are very upset.' },
  ],
  10: [
    { word: 'jealousy', definition: 'The feeling of being jealous.' },
    { word: 'worldwide', definition: 'In many places around the world.' },
    { word: 'well-behaved', definition: 'Acting in a good and polite way.' },
    { word: 'advises', definition: 'Tells someone what they should do.' },
    { word: 'honest', definition: 'Telling the truth and not cheating.' },
  ],
};

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

export const adamA2PagesQualityFinalized: PageData[] = adamA2PagesForLearning.map((page) => {
  if (page.type === 'story' && page.id >= 1 && page.id <= 10) {
    return {
      ...page,
      vocabulary: chapterVocabulary[page.id],
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