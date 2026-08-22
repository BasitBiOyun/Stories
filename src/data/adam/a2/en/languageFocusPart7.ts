import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam A2 Language Focus continuation.
 * Chapter 8 is read in full before authoring; activities stay grounded in the
 * chapter and avoid repeating the comprehension job of Quick Challenge.
 */
export const adamA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'adam-a2-language-8-describing-people',
      type: 'matching',
      title: 'Describing People and Roles',
      instructions: 'Match each Chapter 8 expression with the language job it does.',
      question: 'How does the chapter describe character, interests and later roles?',
      matchingPairs: [
        { left: 'Habil was kind and gentle', right: 'describes character with be + adjective' },
        { left: 'He loved taking care of animals', right: 'describes an interest with love + -ing' },
        { left: 'Habil became a shepherd', right: 'shows a change into a new role with became' },
        { left: 'Qabil was a farmer', right: 'states a person’s role with be + job' },
      ],
      correctAnswer: {
        'Habil was kind and gentle': 'describes character with be + adjective',
        'He loved taking care of animals': 'describes an interest with love + -ing',
        'Habil became a shepherd': 'shows a change into a new role with became',
        'Qabil was a farmer': 'states a person’s role with be + job',
      },
      explanation: 'Chapter 8 uses simple A2 patterns to describe what people were like, what they enjoyed and what roles they later had.',
      feedback: {
        correct: 'Correct. You separated character, interest, change and job language.',
        incorrect: 'Look at the main verb in each expression: was, loved or became.',
      },
    },
    {
      id: 'adam-a2-language-8-time-purpose-duty',
      type: 'matching',
      title: 'Time, Purpose and Duty',
      instructions: 'Match each Chapter 8 expression with its function.',
      question: 'How does the chapter move the story forward and explain what the brothers needed to do?',
      matchingPairs: [
        { left: 'When they grew up', right: 'marks a later time in the story' },
        { left: 'One day', right: 'introduces a new event' },
        { left: 'To solve the problem', right: 'shows purpose with to + verb' },
        { left: 'They had to offer an offering', right: 'expresses necessity with had to + verb' },
      ],
      correctAnswer: {
        'When they grew up': 'marks a later time in the story',
        'One day': 'introduces a new event',
        'To solve the problem': 'shows purpose with to + verb',
        'They had to offer an offering': 'expresses necessity with had to + verb',
      },
      explanation: 'The chapter combines simple time markers with purpose and necessity: “when”, “one day”, “to + verb” and “had to + verb”.',
      feedback: {
        correct: 'Good. You identified time, purpose and necessity.',
        incorrect: 'Ask whether the expression tells when, why, or what was necessary.',
      },
    },
    {
      id: 'adam-a2-language-8-quality-contrast',
      type: 'matching',
      title: 'Comparing Quality',
      instructions: 'Match the expressions with what they show about quality or contrast.',
      question: 'How does Chapter 8 compare the quality and attitude behind the two gifts?',
      matchingPairs: [
        { left: 'his best and healthiest sheep', right: 'uses superlatives to show very high quality' },
        { left: 'just a handful of his crops', right: 'shows a small or limited amount' },
        { left: 'but Qabil brought ...', right: 'introduces a contrast between the brothers' },
        { left: 'the best and the most loved', right: 'describes what real goodness means in the final lesson' },
      ],
      correctAnswer: {
        'his best and healthiest sheep': 'uses superlatives to show very high quality',
        'just a handful of his crops': 'shows a small or limited amount',
        'but Qabil brought ...': 'introduces a contrast between the brothers',
        'the best and the most loved': 'describes what real goodness means in the final lesson',
      },
      explanation: 'Superlatives such as “best” and “healthiest” highlight quality. “But” contrasts the brothers, while “just a handful” limits quantity.',
      feedback: {
        correct: 'Correct. You noticed how the chapter contrasts quality, amount and attitude.',
        incorrect: 'Look for the words that show highest quality, small amount and contrast.',
      },
    },
    {
      id: 'adam-a2-language-8-use-it',
      type: 'reflection',
      title: 'Say It: Describe a Good Choice',
      instructions: 'Write or say four short A2 sentences using the Chapter 8 language patterns.',
      question: 'Can you describe a person, a responsibility and a good choice in your own life?',
      correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of description, necessity, purpose and quality to a familiar situation.',
      feedback: {
        correct: 'Use the sentence starters to make clear, meaningful sentences.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Character or interest: “My friend is ...” / “I love ...ing.”', mode: 'Individual' },
        { question: 'Necessity: “I have to ...”', mode: 'Individual' },
        { question: 'Purpose: “To ..., I ...”', mode: 'Pair' },
        { question: 'Good choice: “I try to choose/give the best ... because ...”', mode: 'Pair' },
      ],
    },
  ],
};