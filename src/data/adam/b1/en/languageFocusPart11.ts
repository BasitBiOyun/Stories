import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam B1 English Language Focus for Chapter 12.
 * Activities are grounded in the chapter language and remain separate from the
 * Quick Challenge's whole-story lesson-summary task.
 */
export const adamB1LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  12: [
    {
      id: 'adam-b1-language-12-stance-obligation-continuity',
      type: 'matching',
      title: 'Suggestion, Obligation, and a Message That Continues',
      instructions: 'Match each Chapter 12 expression with the function it performs.',
      question: 'How does the final chapter move from interpreting the story to responsibility and continuing guidance?',
      matchingPairs: [
        { left: 'The story suggests that true believers should stay away from jealousy.', right: 'reports an interpretation, then uses “should” for recommended conduct' },
        { left: 'As a prophet and a father of his other children, Adam had to continue his life.', right: 'uses a role as context and “had to” for past necessity' },
        { left: 'The message still calls upon people ...', right: 'uses “still” to show that something continues to be true now' },
        { left: 'Allah never left people alone.', right: 'uses “never” to describe something that did not happen at any time' },
      ],
      correctAnswer: {
        'The story suggests that true believers should stay away from jealousy.': 'reports an interpretation, then uses “should” for recommended conduct',
        'As a prophet and a father of his other children, Adam had to continue his life.': 'uses a role as context and “had to” for past necessity',
        'The message still calls upon people ...': 'uses “still” to show that something continues to be true now',
        'Allah never left people alone.': 'uses “never” to describe something that did not happen at any time',
      },
      explanation: 'The chapter does more than narrate events. It interprets the story, expresses recommended conduct, describes a past responsibility, and marks ideas that continue across time.',
      feedback: {
        correct: 'Correct. You separated interpretation, recommendation, past necessity, and continuity.',
        incorrect: 'Look closely at “suggests that”, “should”, “had to”, “still”, and “never”.',
      },
    },
    {
      id: 'adam-b1-language-12-time-and-parallel-purpose',
      type: 'matching',
      title: 'Across Time and Across Actions',
      instructions: 'Match the language pattern with what it helps the writer organise.',
      question: 'How are time, change, and several connected actions organised in Chapter 12?',
      matchingPairs: [
        { left: 'He got old over the years.', right: 'shows gradual change across a period of time' },
        { left: 'His children and grandchildren moved ... and spread his message ...', right: 'joins two connected completed actions with “and”' },
        { left: 'to turn away from Satan’s tricks, ... to do good and avoid evil', right: 'uses parallel verb patterns to organise several aims or directions' },
        { left: 'the importance of admitting mistakes and turning back to Allah', right: 'uses “the importance of + -ing” to present actions as important principles' },
      ],
      correctAnswer: {
        'He got old over the years.': 'shows gradual change across a period of time',
        'His children and grandchildren moved ... and spread his message ...': 'joins two connected completed actions with “and”',
        'to turn away from Satan’s tricks, ... to do good and avoid evil': 'uses parallel verb patterns to organise several aims or directions',
        'the importance of admitting mistakes and turning back to Allah': 'uses “the importance of + -ing” to present actions as important principles',
      },
      explanation: 'These patterns help a B1 writer move beyond isolated sentences by organising development through time and grouping related actions in a balanced way.',
      feedback: {
        correct: 'Good. You identified time development and parallel organisation.',
        incorrect: 'Ask whether the expression marks change over time, links completed actions, groups aims, or turns actions into general principles.',
      },
    },
    {
      id: 'adam-b1-language-12-coherent-legacy-passage',
      type: 'multiple-choice',
      title: 'Build a Message That Continues',
      instructions: 'Choose the paragraph that uses Chapter 12 language relationships naturally in a new context.',
      question: 'Which paragraph clearly links past responsibility, change over time, a continuing message, and a present recommendation?',
      options: [
        'As the oldest member of the team, Selin had to support the new students after the coach left. Over the years, she became more experienced and shared what she had learned. Her advice still helps younger players, and the story suggests that leaders should listen carefully and act responsibly.',
        'As oldest team had support over years still suggests leaders listening because advice.',
        'Selin had to years and still coach suggests because younger experienced responsibly.',
      ],
      correctAnswer: 0,
      explanation: 'The first paragraph uses “as ...” to frame a role, “had to” for past necessity, “over the years” for development, “still” for continuity, and “suggests that ... should ...” for a present recommendation.',
      feedback: {
        correct: 'Correct. The forms work together to build one coherent B1 paragraph.',
        incorrect: 'Choose the option where role, necessity, time development, continuity, and recommendation are expressed in complete connected sentences.',
      },
    },
    {
      id: 'adam-b1-language-12-reflect-and-transfer',
      type: 'reflection',
      title: 'A Lesson That Remains Useful',
      instructions: 'Write or say four connected B1 sentences about a person, family, class, or community whose experience leaves a useful lesson. Use at least four Chapter 12 patterns.',
      question: 'Can you describe a past responsibility, development over time, and a message that still matters without retelling Adam’s story?',
      correctAnswer: null,
      explanation: 'A strong response may use “As a/an ..., ... had to ...”, “over the years ...”, “still ...”, “never ...”, “the story/experience suggests that ... should ...”, or “the importance of + -ing”. Keep the four sentences connected around one new situation.',
      feedback: {
        correct: 'Keep the response coherent: past role, development, continuing influence, and present lesson.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Introduce a role and a past responsibility with “As a/an ...” and “had to”.', mode: 'Individual' },
        { question: 'Sentence 2 — Show change or development “over the years”.', mode: 'Individual' },
        { question: 'Sentence 3 — Explain what “still” continues to influence people now.', mode: 'Individual' },
        { question: 'Sentence 4 — State a recommendation with “suggests that ... should ...” or a principle with “the importance of + -ing”.', mode: 'Pair' },
      ],
    },
  ],
};
