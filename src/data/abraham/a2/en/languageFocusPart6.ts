import type { Exercise } from '../../../../types';

/**
 * Chapter 9 Language Focus, manually authored from the English story text.
 * It avoids repeating the Quick Challenge about what changed after the miracle.
 */
export const abrahamA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  9: [
    {
      id: 'abraham-a2-language-9-anything-nothing-only',
      type: 'matching',
      title: 'Anything, Nothing and Only',
      instructions: 'Match each Chapter 9 expression with its meaning or function.',
      question: 'How does the chapter talk about an open possibility, no thing, and one limited result?',
      matchingPairs: [
        { left: 'Is there anything you wish for?', right: 'asks openly whether there is some thing the person wants' },
        { left: 'Nothing from you!', right: 'means no thing is wanted from that person' },
        { left: 'It only burnt the ropes', right: 'limits the result to the ropes' },
        { left: 'not harmed at all', right: 'strengthens the negative meaning: no harm happened' },
      ],
      correctAnswer: {
        'Is there anything you wish for?': 'asks openly whether there is some thing the person wants',
        'Nothing from you!': 'means no thing is wanted from that person',
        'It only burnt the ropes': 'limits the result to the ropes',
        'not harmed at all': 'strengthens the negative meaning: no harm happened',
      },
      explanation: '“Anything” is common in open questions, “nothing” means no thing, “only” limits an action or result, and “not ... at all” makes a negative meaning stronger.',
      feedback: {
        correct: 'Good. You separated open possibility, zero quantity, limitation and strong negation.',
        incorrect: 'Look at “anything”, “nothing”, “only”, and “not ... at all” and ask what each one adds to the sentence.',
      },
    },
    {
      id: 'abraham-a2-language-9-change-and-time',
      type: 'matching',
      title: 'Change and Time',
      instructions: 'Match each expression with the language job it performs.',
      question: 'How does Chapter 9 show change and connect one event to another?',
      matchingPairs: [
        { left: 'The fire became cool and safe', right: 'become + adjective describes a change of state' },
        { left: 'The fire turned into a garden', right: 'turn into + noun describes a change into something different' },
        { left: 'when the flames cooled', right: 'when connects the main event to its time' },
        { left: 'At that moment', right: 'places an event at a specific point in the story' },
      ],
      correctAnswer: {
        'The fire became cool and safe': 'become + adjective describes a change of state',
        'The fire turned into a garden': 'turn into + noun describes a change into something different',
        'when the flames cooled': 'when connects the main event to its time',
        'At that moment': 'places an event at a specific point in the story',
      },
      explanation: '“Become + adjective” describes a new state. “Turn into + noun” describes a change into something else. “When” and “at that moment” help organise the timing of events.',
      feedback: {
        correct: 'Correct. You identified change-of-state language and time links.',
        incorrect: 'Separate the expressions that show a change from the expressions that tell us when something happened.',
      },
    },
    {
      id: 'abraham-a2-language-9-reaction-contrast-still',
      type: 'matching',
      title: 'Reaction, Contrast and Still',
      instructions: 'Match each Chapter 9 expression with what it communicates.',
      question: 'How does the chapter show people’s reaction and contrast one idea with another?',
      matchingPairs: [
        { left: 'People were shocked to see that Abraham was not harmed', right: 'reaction + to see that ... explains what caused the reaction' },
        { left: 'The miracle made the people amazed', right: 'make + person + adjective shows that something causes a feeling' },
        { left: 'but they did not change their mind', right: 'but introduces a contrasting result' },
        { left: 'they were still against him', right: 'still shows that a situation continued without changing' },
      ],
      correctAnswer: {
        'People were shocked to see that Abraham was not harmed': 'reaction + to see that ... explains what caused the reaction',
        'The miracle made the people amazed': 'make + person + adjective shows that something causes a feeling',
        'but they did not change their mind': 'but introduces a contrasting result',
        'they were still against him': 'still shows that a situation continued without changing',
      },
      explanation: 'The chapter uses reaction language such as “shocked” and “amazed”, “make + person + adjective” for cause, “but” for contrast, and “still” for a situation that continues.',
      feedback: {
        correct: 'Good. You connected reaction, cause, contrast and continuation.',
        incorrect: 'Ask four questions: What was the reaction? What caused it? Where is the contrast? What continued?',
      },
    },
    {
      id: 'abraham-a2-language-9-production',
      type: 'reflection',
      title: 'Say It: A Surprising Change',
      instructions: 'Write or say four or five short A2 sentences about a surprising event or change. Use at least four Chapter 9 language patterns. Do not answer the Quick Challenge.',
      question: 'Can you describe change, reaction, contrast and continuation clearly?',
      correctAnswer: null,
      explanation: 'A strong response can use “anything/nothing”, “only”, “became + adjective”, “turned into + noun”, “when”, “made + person + adjective”, “but”, and “still”.',
      feedback: {
        correct: 'Use each pattern to express a real meaning in your short description.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Change — Use “became + adjective” or “turned into + noun”.', mode: 'Individual' },
        { question: 'Time — Connect one event with “when” or “at that moment”.', mode: 'Individual' },
        { question: 'Reaction — Use “was shocked/amazed to ...” or “made ... + adjective”.', mode: 'Individual' },
        { question: 'Contrast — Add one sentence with “but”.', mode: 'Individual' },
        { question: 'Continuation — Use “still” to show what did not change.', mode: 'Pair' },
      ],
    },
  ],
};
