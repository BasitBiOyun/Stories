import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam A2 Language Focus continuation.
 * Chapter 6 is read in full before authoring; activities stay grounded in the
 * chapter and avoid repeating the comprehension job of Quick Challenge.
 */
export const adamA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  6: [
    {
      id: 'adam-a2-language-6-planned-responsibilities',
      type: 'matching',
      title: 'Plans and Responsibilities on Earth',
      instructions: 'Match each Chapter 6 expression with what it communicates.',
      question: 'How does the chapter talk about the work Adam and Eve were expected to do on Earth?',
      matchingPairs: [
        { left: 'They were going to direct and make everything better', right: 'describes a planned responsibility' },
        { left: 'They were going to build buildings for housing', right: 'describes something they were expected to do later' },
        { left: 'They were going to protect nature', right: 'describes a future duty from that point in the story' },
        { left: 'They were going to help the weak', right: 'describes another planned duty' },
      ],
      correctAnswer: {
        'They were going to direct and make everything better': 'describes a planned responsibility',
        'They were going to build buildings for housing': 'describes something they were expected to do later',
        'They were going to protect nature': 'describes a future duty from that point in the story',
        'They were going to help the weak': 'describes another planned duty',
      },
      explanation: 'Chapter 6 repeatedly uses “were going to + verb” to look forward from a point in the past and describe planned or expected responsibilities on Earth.',
      feedback: {
        correct: 'Correct. You identified how “were going to” presents responsibilities that lay ahead.',
        incorrect: 'Return to the first paragraph and look for the actions that follow “They were going to ...”.',
      },
    },
    {
      id: 'adam-a2-language-6-purpose',
      type: 'matching',
      title: 'What Is It For?',
      instructions: 'Rebuild the purpose relationships from Chapter 6.',
      question: 'How does the chapter use “to + verb” to explain the purpose of an action or resource?',
      matchingPairs: [
        { left: 'Allah put them on Earth', right: 'to live there' },
        { left: 'They used land', right: 'to grow crops and keep animals' },
        { left: 'They were going to build buildings', right: 'to provide places for housing' },
        { left: 'to + verb', right: 'can answer the question “What is this action for?”' },
      ],
      correctAnswer: {
        'Allah put them on Earth': 'to live there',
        'They used land': 'to grow crops and keep animals',
        'They were going to build buildings': 'to provide places for housing',
        'to + verb': 'can answer the question “What is this action for?”',
      },
      explanation: 'The chapter often connects an action with its purpose. “To + verb” can explain why something is done: live there, grow crops, keep animals or provide housing.',
      feedback: {
        correct: 'Good. You connected each action or resource with its purpose.',
        incorrect: 'Ask “What for?” after each action and find the purpose in the first paragraph.',
      },
    },
    {
      id: 'adam-a2-language-6-wants-and-influence',
      type: 'matching',
      title: 'Wanting Someone to Act',
      instructions: 'Match each language pattern with the intention it expresses.',
      question: 'How does Chapter 6 describe Iblis’s intention toward people?',
      matchingPairs: [
        { left: 'He wanted people not to remember Allah', right: 'shows that he wanted another group to avoid an action' },
        { left: 'want + person + to + verb', right: 'expresses a wish about another person’s action' },
        { left: 'want + person + not to + verb', right: 'expresses a wish that another person does not do an action' },
        { left: 'He was still around', right: 'shows that his presence continued' },
      ],
      correctAnswer: {
        'He wanted people not to remember Allah': 'shows that he wanted another group to avoid an action',
        'want + person + to + verb': 'expresses a wish about another person’s action',
        'want + person + not to + verb': 'expresses a wish that another person does not do an action',
        'He was still around': 'shows that his presence continued',
      },
      explanation: '“Want + person + (not) to + verb” lets us talk about what one person wants another person or group to do. Chapter 6 uses the negative form for Iblis’s intention.',
      feedback: {
        correct: 'Correct. You separated continued presence from the language used to express influence or intention.',
        incorrect: 'Read the final two sentences and notice who wants whom to do—or not do—something.',
      },
    },
    {
      id: 'adam-a2-language-6-talk-about-responsibility',
      type: 'reflection',
      title: 'Say It: A Responsible Life',
      instructions: 'Write or say four short A2 sentences about useful responsibilities. Use Chapter 6 language patterns.',
      question: 'Can you describe a plan, a purpose and a positive responsibility?',
      correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of plans, purposes and responsibilities to a simple real-life context.',
      feedback: {
        correct: 'Use the sentence starters to connect a plan with its purpose and a useful responsibility.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Plan: “We are going to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Purpose: “We use ... to ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Responsibility: “We are going to protect/help ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Positive influence: “I want people to ...”', mode: 'Pair' },
      ],
    },
  ],
};
