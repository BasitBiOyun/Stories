import type { Exercise, PageData, QuizQuestion, TeacherGuideSection } from '../../../../types';
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

const adamA2ReviewQuizQuestions: QuizQuestion[] = [
  {
    question: 'What did Allah say the human would become on Earth?',
    options: [
      { text: 'The ruler on Earth', isCorrect: true },
      { text: 'A king in Babylon', isCorrect: false },
      { text: 'A star in the sky', isCorrect: false },
    ],
    hint: 'Return to Chapter 1 and find what Allah told the angels about the human.',
  },
  {
    question: 'How did the angels react to Adam in Chapter 2?',
    options: [
      { text: 'They admired and respected him', isCorrect: true },
      { text: 'They ignored him', isCorrect: false },
      { text: 'They became angry with him', isCorrect: false },
    ],
    hint: 'Look at the second paragraph of Chapter 2.',
  },
  {
    question: 'What does Chapter 3 say useful knowledge helps people do?',
    options: [
      { text: 'Do good and stop bad', isCorrect: true },
      { text: 'Become physically stronger', isCorrect: false },
      { text: 'Live without learning', isCorrect: false },
    ],
    hint: 'Find the sentence about why useful knowledge makes people great.',
  },
  {
    question: 'Why did Allah give Adam a wife in Paradise?',
    options: [
      { text: 'Adam felt lonely', isCorrect: true },
      { text: 'Adam wanted to leave Paradise', isCorrect: false },
      { text: 'The angels asked for it', isCorrect: false },
    ],
    hint: 'Return to Chapter 4 and find how Adam felt in Paradise.',
  },
  {
    question: 'What did Iblis tell Adam and Eve about himself when he came near them?',
    options: [
      { text: 'He was their friend', isCorrect: true },
      { text: 'He was their teacher', isCorrect: false },
      { text: 'He was their son', isCorrect: false },
    ],
    hint: 'Read the first sentence about Iblis in Chapter 5.',
  },
  {
    question: 'Which responsibility on Earth is mentioned in Chapter 6 besides farming?',
    options: [
      { text: 'Protect nature and help the weak', isCorrect: true },
      { text: 'Look for hidden treasure', isCorrect: false },
      { text: 'Build a palace for Iblis', isCorrect: false },
    ],
    hint: 'Find the list of things people were going to do on Earth.',
  },
  {
    question: 'What did Adam and Eve warn their children about Iblis?',
    options: [
      { text: 'He was their enemy, not their friend', isCorrect: true },
      { text: 'He would teach them farming', isCorrect: false },
      { text: 'He was one of their children', isCorrect: false },
    ],
    hint: 'Return to Chapter 7 and read the warning given to their children.',
  },
  {
    question: 'How did Qabil feel after his anger cooled?',
    options: [
      { text: 'Sad and panicked', isCorrect: true },
      { text: 'Happy and calm', isCorrect: false },
      { text: 'Proud and excited', isCorrect: false },
    ],
    hint: 'Look at the second paragraph of Chapter 9.',
  },
];

const adamA2DiversifiedFinalChallengeExercises: Exercise[] = [
  {
    id: 'fc-1',
    type: 'multiple-choice',
    title: 'Final Recall 1',
    instructions: 'Choose the answer stated in the story.',
    question: 'According to Chapter 1, why do humans have different skin colors?',
    options: ['The soil came from different parts of the Earth', 'They lived in different houses', 'They learned different jobs'],
    correctAnswer: 0,
    explanation: 'Chapter 1 says the angels collected soil from different parts of the Earth, and the story connects this with different skin colors.',
    feedback: { correct: 'Correct. This detail is stated in Chapter 1.', incorrect: 'Return to Chapter 1 and read the paragraph about soil from different parts of the Earth.' },
  },
  {
    id: 'fc-2',
    type: 'multiple-choice',
    title: 'Final Recall 2',
    instructions: 'Choose the answer stated in the story.',
    question: 'Who thought Adam was an unimportant creature created from clay?',
    options: ['Iblis', 'The angels', 'Habil'],
    correctAnswer: 0,
    explanation: 'Chapter 2 says Iblis thought Adam was an unimportant creature created from clay.',
    feedback: { correct: 'Correct. This is how Chapter 2 describes Iblis’s view of Adam.', incorrect: 'Return to the final sentence of Chapter 2.' },
  },
  {
    id: 'fc-3',
    type: 'multiple-choice',
    title: 'Final Recall 3',
    instructions: 'Choose what happens in the story.',
    question: 'What did Allah tell Iblis after he continued saying he was right?',
    options: ['Go away; you are far from My love and care', 'Stay in Paradise with Adam', 'Teach Adam about farming'],
    correctAnswer: 0,
    explanation: 'Chapter 3 says Allah told Iblis to go away and that he was far from His love and care.',
    feedback: { correct: 'Correct. You recalled the end of Iblis’s argument in Chapter 3.', incorrect: 'Return to the final part of Chapter 3.' },
  },
  {
    id: 'fc-4',
    type: 'multiple-choice',
    title: 'Final Recall 4',
    instructions: 'Choose the answer stated in the story.',
    question: 'What did Allah tell Adam to do about Iblis in Paradise?',
    options: ['Be careful about him', 'Ask him for help', 'Follow him everywhere'],
    correctAnswer: 0,
    explanation: 'Chapter 4 says Allah told Adam to be careful about Iblis.',
    feedback: { correct: 'Correct. This warning appears before the story introduces Eve.', incorrect: 'Return to the first paragraph of Chapter 4.' },
  },
  {
    id: 'fc-5',
    type: 'multiple-choice',
    title: 'Final Recall 5',
    instructions: 'Choose the answer stated in the story.',
    question: 'What did Iblis say would happen if Adam and Eve ate from the tree?',
    options: ['They would never die', 'They would become farmers', 'They would leave Earth'],
    correctAnswer: 0,
    explanation: 'Chapter 5 says Iblis told them that if they ate from the tree, they would never die.',
    feedback: { correct: 'Correct. The chapter describes this statement as a lie.', incorrect: 'Return to the first paragraph of Chapter 5.' },
  },
  {
    id: 'fc-6',
    type: 'multiple-choice',
    title: 'Final Recall 6',
    instructions: 'Choose the answer stated in the story.',
    question: 'What did Iblis want people not to do in their daily lives on Earth?',
    options: ['Remember Allah', 'Grow crops', 'Build housing'],
    correctAnswer: 0,
    explanation: 'Chapter 6 says Iblis wanted people not to remember Allah in their daily lives.',
    feedback: { correct: 'Correct. This is the closing idea of Chapter 6.', incorrect: 'Return to the final sentence of Chapter 6.' },
  },
  {
    id: 'fc-7',
    type: 'multiple-choice',
    title: 'Final Recall 7',
    instructions: 'Choose the teaching stated in the story.',
    question: 'Which ideas did Adam start teaching people in Chapter 7?',
    options: ['Be honest, do good, stop bad, and remember Allah', 'Collect wealth and avoid other people', 'Never work and never learn'],
    correctAnswer: 0,
    explanation: 'Chapter 7 says Adam started teaching people to be honest, do good, stop bad, and always remember Allah.',
    feedback: { correct: 'Correct. These teachings are listed directly in Chapter 7.', incorrect: 'Return to the first paragraph of Chapter 7.' },
  },
  {
    id: 'fc-8',
    type: 'multiple-choice',
    title: 'Final Recall 8',
    instructions: 'Choose what the story says.',
    question: 'What did Qabil bring as his offering?',
    options: ['A handful of his crops', 'His best and healthiest sheep', 'A bag of gold'],
    correctAnswer: 0,
    explanation: 'Chapter 8 says Qabil brought just a handful of his crops.',
    feedback: { correct: 'Correct. This contrasts with Habil’s offering in Chapter 8.', incorrect: 'Return to the second paragraph of Chapter 8.' },
  },
  {
    id: 'fc-9',
    type: 'true-false',
    title: 'Final Recall 9',
    instructions: 'Decide if the sentence agrees with the story.',
    question: 'Habil said he would not fight back and harm Qabil.',
    correctAnswer: true,
    explanation: 'Chapter 9 says Habil told Qabil that he would not fight back and harm him because he was his brother and he feared Allah.',
    feedback: { correct: 'Correct. This is Habil’s response in Chapter 9.', incorrect: 'Return to Habil’s words in the first paragraph of Chapter 9.' },
  },
  {
    id: 'fc-10',
    type: 'multiple-choice',
    title: 'Final Recall 10',
    instructions: 'Choose the lesson stated at the end of the story.',
    question: 'What does Chapter 10 tell good people to do about jealousy and anger?',
    options: ['Stay away from jealousy and control their anger', 'Use jealousy to become stronger', 'Stay angry when they are hurt'],
    correctAnswer: 0,
    explanation: 'Chapter 10 says good people should stay away from jealousy and control their anger.',
    feedback: { correct: 'Correct. This lesson appears at the beginning of Chapter 10.', incorrect: 'Return to the first paragraph of Chapter 10.' },
  },
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
      exercises: page.exercises?.map((exercise) => {
        if (exercise.id === 'final-3') {
          return {
            ...exercise,
            feedback: {
              correct: 'Use one detail from the story to support your reflection.',
              incorrect: 'This is a reflection, so there is no single wrong answer. Choose one idea from the story and explain your own connection.',
            },
          };
        }

        if (exercise.id === 'final-4') {
          return {
            ...exercise,
            title: 'Adam Review Challenge',
            instructions: 'Answer eight questions that review different details from the Knowledge Check. Return to the chapter when you need help.',
            quizQuestions: adamA2ReviewQuizQuestions,
          };
        }

        return exercise;
      }),
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

  if (page.id === 16) {
    return {
      ...page,
      content: 'Recall ten different details from the whole story. Use the chapters when you need help.',
      exercises: adamA2DiversifiedFinalChallengeExercises,
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
