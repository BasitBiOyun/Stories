import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'mecca-a2-language-8-question-answer',
      type: 'matching',
      title: 'Asking and Answering Directly',
      instructions: 'Match each Chapter 8 expression with the job it does.',
      question: 'How does the chapter show a direct question and a clear answer?',
      matchingPairs: [
        { left: 'Is it true?', right: 'be + subject ...? asks for confirmation' },
        { left: 'Did you leave our religion ...?', right: 'Did + subject + base verb ...? asks about a past action' },
        { left: 'Bilal answered ... “Yes”', right: 'answer + Yes/No gives a direct response' },
        { left: 'Now I believe in the true religion', right: 'now + present verb describes a present state after a change' },
      ],
      correctAnswer: {
        'Is it true?': 'be + subject ...? asks for confirmation',
        'Did you leave our religion ...?': 'Did + subject + base verb ...? asks about a past action',
        'Bilal answered ... “Yes”': 'answer + Yes/No gives a direct response',
        'Now I believe in the true religion': 'now + present verb describes a present state after a change',
      },
      explanation: 'Chapter 8 moves from confirmation and a past-action question to Bilal’s direct answer and his present belief.',
      feedback: {
        correct: 'Correct. You identified confirmation, a past question, a direct answer and a present state.',
        incorrect: 'Look again at Umayya’s two questions and Bilal’s answer.',
      },
    },
    {
      id: 'mecca-a2-language-8-pressure-actions',
      type: 'matching',
      title: 'Making Someone Do Something',
      instructions: 'Match each expression with its language function.',
      question: 'How does Chapter 8 describe pressure, commands and refusal?',
      matchingPairs: [
        { left: 'He forced him to look at idols', right: 'force + person + to + verb means making someone do something unwillingly' },
        { left: 'Bilal refused', right: 'refuse means say no or not agree to do something' },
        { left: 'Umayya told children to tie ropes around Bilal’s neck', right: 'tell + person + to + verb gives an instruction or command' },
        { left: 'pull him through the city', right: 'base verb after to continues the action in an instruction' },
      ],
      correctAnswer: {
        'He forced him to look at idols': 'force + person + to + verb means making someone do something unwillingly',
        'Bilal refused': 'refuse means say no or not agree to do something',
        'Umayya told children to tie ropes around Bilal’s neck': 'tell + person + to + verb gives an instruction or command',
        'pull him through the city': 'base verb after to continues the action in an instruction',
      },
      explanation: 'The chapter contrasts language of pressure and commands with Bilal’s refusal.',
      feedback: {
        correct: 'Good. You separated forcing, commanding and refusing.',
        incorrect: 'Find “forced him to...”, “refused”, and “told children to...”.',
      },
    },
    {
      id: 'mecca-a2-language-8-condition-result',
      type: 'matching',
      title: 'Condition and Result',
      instructions: 'Match each part of the sentence with its function.',
      question: 'How does the chapter connect a condition with a future result?',
      matchingPairs: [
        { left: 'If you speak well of our idols', right: 'if + present form gives the condition' },
        { left: 'you will be free', right: 'will + base verb gives the future result' },
        { left: 'If you speak well ..., you will be free', right: 'if-clause + will-clause links a possible condition to its result' },
        { left: 'But Bilal only said, “Allah is One”', right: 'but introduces a contrasting response instead of the expected result' },
      ],
      correctAnswer: {
        'If you speak well of our idols': 'if + present form gives the condition',
        'you will be free': 'will + base verb gives the future result',
        'If you speak well ..., you will be free': 'if-clause + will-clause links a possible condition to its result',
        'But Bilal only said, “Allah is One”': 'but introduces a contrasting response instead of the expected result',
      },
      explanation: 'Chapter 8 contains a clear condition-result pattern: “If ... , you will ...”, followed by a contrasting response with “but”.',
      feedback: {
        correct: 'Correct. You identified the condition, future result and contrast.',
        incorrect: 'Separate the “if” condition from the “will” result, then notice what “but” introduces.',
      },
    },
    {
      id: 'mecca-a2-language-8-production',
      type: 'reflection',
      title: 'Say It: Ask, Set a Condition, Respond',
      instructions: 'Create a new, safe A2 situation about a rule, choice or classroom task. Write or say four short sentences: ask one direct question, give one instruction, make one “If ..., you will ...” condition, and give a response. Do not retell Bilal’s punishment.',
      question: 'Can you use Chapter 8 language in a different everyday situation?',
      correctAnswer: null,
      explanation: 'A strong response can use “Did you ...?”, “tell + person + to ...”, “If ... , you will ...”, “but”, and a clear Yes/No response.',
      feedback: {
        correct: 'Build a new situation with a question, instruction, condition and response.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Question — Ask “Did you ...?” or “Is it ...?”.', mode: 'Individual' },
        { question: 'Instruction — Use “told ... to ...”.', mode: 'Individual' },
        { question: 'Condition — Use “If ..., you will ...”.', mode: 'Individual' },
        { question: 'Response — Finish with “Yes...”, “No...”, or “But...”.', mode: 'Pair' },
      ],
    },
  ],
};
