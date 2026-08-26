import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'abraham-b1-language-12-background-event',
      type: 'matching',
      title: 'Background and Sudden Event',
      instructions: 'Match each expression with the role it plays in the narrative.',
      question: 'How does Chapter 12 show an ongoing background and then a sudden change?',
      matchingPairs: [
        { left: 'While Ishmael was crying ... and Hagar was running ...', right: 'sets two actions as the background at the same time' },
        { left: 'suddenly water started flowing', right: 'introduces the new event that interrupts the background' },
        { left: 'When Hagar saw this from a distance', right: 'marks the moment that triggers her next reaction' },
        { left: 'she shouted, “Zamzam!”', right: 'gives the immediate response to what she saw' },
      ],
      correctAnswer: {
        'While Ishmael was crying ... and Hagar was running ...': 'sets two actions as the background at the same time',
        'suddenly water started flowing': 'introduces the new event that interrupts the background',
        'When Hagar saw this from a distance': 'marks the moment that triggers her next reaction',
        'she shouted, “Zamzam!”': 'gives the immediate response to what she saw',
      },
      explanation: 'The paragraph uses while + past continuous for background, suddenly + started + -ing for a new event, and when for the next response point.',
      feedback: {
        correct: 'Correct. You separated the ongoing background from the sudden event and reaction.',
        incorrect: 'Ask which actions were already in progress, which event began suddenly, and what happened immediately after it was noticed.',
      },
    },
    {
      id: 'abraham-b1-language-12-continuity-cause',
      type: 'matching',
      title: 'Continuity, Cause and Result',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the chapter explain why Zamzam remains important and why settlement grows?',
      matchingPairs: [
        { left: 'This historic Zamzam spring still exists', right: 'shows that a state continues from the past to the present' },
        { left: 'providing water for thousands of years', right: 'adds an ongoing result or function of the spring' },
        { left: 'The water is special because it was a gift from Allah', right: 'gives a reason for an evaluation' },
        { left: 'More people came to settle there because of this sacred spring', right: 'connects a cause with movement and settlement' },
      ],
      correctAnswer: {
        'This historic Zamzam spring still exists': 'shows that a state continues from the past to the present',
        'providing water for thousands of years': 'adds an ongoing result or function of the spring',
        'The water is special because it was a gift from Allah': 'gives a reason for an evaluation',
        'More people came to settle there because of this sacred spring': 'connects a cause with movement and settlement',
      },
      explanation: 'Still, an -ing clause, because, and because of help the chapter connect continuity, explanation, and cause.',
      feedback: {
        correct: 'Correct. You identified continuation, ongoing function, reason, and cause.',
        incorrect: 'Decide whether each phrase shows continuation, adds a result, explains why, or gives the cause of settlement.',
      },
    },
    {
      id: 'abraham-b1-language-12-development',
      type: 'matching',
      title: 'Describing Development Over Time',
      instructions: 'Match each expression with its function in the final paragraph.',
      question: 'How does Chapter 12 describe the valley becoming a developing community?',
      matchingPairs: [
        { left: 'Ishmael and his mother began to live in the valley', right: 'marks the beginning of a new situation' },
        { left: 'people came to settle there', right: 'expresses movement with a purpose' },
        { left: 'They started building up a city called Mecca', right: 'marks the beginning of a longer development process' },
        { left: 'Meanwhile, Abraham visited Mecca several times', right: 'adds a repeated action happening during the same wider period' },
      ],
      correctAnswer: {
        'Ishmael and his mother began to live in the valley': 'marks the beginning of a new situation',
        'people came to settle there': 'expresses movement with a purpose',
        'They started building up a city called Mecca': 'marks the beginning of a longer development process',
        'Meanwhile, Abraham visited Mecca several times': 'adds a repeated action happening during the same wider period',
      },
      explanation: 'Begin/start, come to + verb, and meanwhile help describe how different developments unfold across time.',
      feedback: {
        correct: 'Correct. You tracked beginnings, purpose, development, and a parallel repeated action.',
        incorrect: 'Check which phrase begins a state, gives purpose, begins a process, or adds a parallel action.',
      },
    },
    {
      id: 'abraham-b1-language-12-connected-production',
      type: 'reflection',
      title: 'Explain How a Place Changes',
      instructions: 'Write or say five connected B1 sentences about a non-story place that changes over time. Do not retell Chapter 12.',
      question: 'Can you combine background, a sudden event, cause, continuity, and development in one short explanation?',
      correctAnswer: null,
      explanation: 'A strong response can use while, suddenly, when, still, because/because of, begin/start, come to + verb, and meanwhile where natural.',
      feedback: {
        correct: 'Keep the sentences connected as one short development story.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set the background with while or another natural time expression.', mode: 'Individual' },
        { question: 'Sentence 2 — Introduce a new event with suddenly or when.', mode: 'Individual' },
        { question: 'Sentence 3 — Explain one result or reason with because or because of.', mode: 'Individual' },
        { question: 'Sentence 4 — Show something that continues with still or another natural continuity expression.', mode: 'Individual' },
        { question: 'Sentence 5 — Show later development with begin/start, come to + verb, or meanwhile.', mode: 'Pair' },
      ],
    },
  ],
};
