import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Adam B1 English Language Focus work.
 * Chapter 4 activities are derived from the actual chapter language and remain
 * separate from comprehension assessment.
 */
export const adamB1LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'adam-b1-language-4-continuing-and-reaction',
      type: 'matching',
      title: 'Continuing an Action and Describing a Reaction',
      instructions: 'Match each Chapter 4 expression with the function it performs.',
      question: 'How does the chapter show that a position continues and then describe the emotional reaction that follows?',
      matchingPairs: [
        { left: 'Iblis continued saying he was right', right: 'shows that an action or claim continues over time' },
        { left: 'Iblis got angry with Adam', right: 'describes a change into an emotional state' },
        { left: 'He hated him', right: 'states the resulting attitude directly' },
      ],
      correctAnswer: {
        'Iblis continued saying he was right': 'shows that an action or claim continues over time',
        'Iblis got angry with Adam': 'describes a change into an emotional state',
        'He hated him': 'states the resulting attitude directly',
      },
      explanation: '“Continue + -ing” presents an action or claim as ongoing, while “get + adjective” can show a change of state. The chapter then uses a simple verb to state the attitude that follows.',
      feedback: {
        correct: 'Correct. You identified continuation, change of state, and attitude.',
        incorrect: 'Ask whether each expression shows an ongoing action, a change of feeling, or a direct attitude.',
      },
    },
    {
      id: 'adam-b1-language-4-reason-and-desire',
      type: 'matching',
      title: 'Reason and Desired Outcome',
      instructions: 'Match each structure with the relationship it expresses.',
      question: 'How does the chapter connect a reason with what one person wants another person to do or experience?',
      matchingPairs: [
        { left: 'He didn’t want Allah to be nice with Adam.', right: 'expresses a desired or undesired outcome involving another person' },
        { left: 'because of Adam', right: 'gives a reason with a noun phrase rather than a full clause' },
        { left: 'He thought ... Allah put him far from His help.', right: 'reports the belief through which the character interprets the event' },
      ],
      correctAnswer: {
        'He didn’t want Allah to be nice with Adam.': 'expresses a desired or undesired outcome involving another person',
        'because of Adam': 'gives a reason with a noun phrase rather than a full clause',
        'He thought ... Allah put him far from His help.': 'reports the belief through which the character interprets the event',
      },
      explanation: '“Want + object + to ...” expresses a desired outcome involving someone else. “Because of + noun” gives a reason without adding a full clause, while “thought ...” keeps the interpretation inside the character’s viewpoint.',
      feedback: {
        correct: 'Good. You separated desire, reason, and reported interpretation.',
        incorrect: 'Look for the pattern that answers what was wanted, why, or what the character believed.',
      },
    },
    {
      id: 'adam-b1-language-4-purpose-warning',
      type: 'matching',
      title: 'Purpose, Prevention, and Warning',
      instructions: 'Match each Chapter 4 phrase with its communicative function.',
      question: 'How does the chapter express purpose, prevention, similarity, and a warning?',
      matchingPairs: [
        { left: 'waited for a chance to keep Adam away', right: 'shows purpose after waiting for an opportunity' },
        { left: 'keep Adam away from Allah’s kindness', right: 'describes preventing someone from staying close to something' },
        { left: 'just like himself', right: 'compares one intended situation with another person’s situation' },
        { left: 'told him to be careful about Iblis', right: 'reports advice or a warning directed to another person' },
      ],
      correctAnswer: {
        'waited for a chance to keep Adam away': 'shows purpose after waiting for an opportunity',
        'keep Adam away from Allah’s kindness': 'describes preventing someone from staying close to something',
        'just like himself': 'compares one intended situation with another person’s situation',
        'told him to be careful about Iblis': 'reports advice or a warning directed to another person',
      },
      explanation: 'The chapter uses “a chance to ...” for opportunity and purpose, “keep + object + away from ...” for prevention, “just like ...” for similarity, and “tell + object + to ...” for reported advice or warning.',
      feedback: {
        correct: 'Correct. You tracked four different relationships across the paragraph.',
        incorrect: 'Decide whether the phrase expresses purpose, prevention, similarity, or warning.',
      },
    },
    {
      id: 'adam-b1-language-4-build-warning-situation',
      type: 'reflection',
      title: 'Build a Warning Situation',
      instructions: 'Write or say four connected B1 sentences about a new situation in which someone continues a harmful plan and another person gives a warning. Use at least three Chapter 4 patterns.',
      question: 'Can you connect continuation, reason, purpose, and warning in a short new situation without retelling Chapter 4?',
      correctAnswer: null,
      explanation: 'A strong response may use “continued + -ing”, “because of + noun”, “waited for a chance to ...”, “keep + object + away from ...”, and “told + object + to be careful”.',
      feedback: {
        correct: 'Keep the four sentences connected and make the reason and warning clear.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Show an action that continues with “continued + -ing”.', mode: 'Individual' },
        { question: 'Sentence 2 — Give a reason with “because of + noun”.', mode: 'Individual' },
        { question: 'Sentence 3 — Express purpose with “waited for a chance to ...” or a similar pattern.', mode: 'Individual' },
        { question: 'Sentence 4 — Report a warning with “told + person + to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
