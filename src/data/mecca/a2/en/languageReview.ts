import type { Exercise } from '../../../../types';

/** Cumulative A2 language practice; whole-story comprehension remains in Final Challenge. */
export const meccaA2LanguageReviewExercises: Exercise[] = [
  {
    id: 'mecca-a2-language-review-1-form-function', type: 'matching', title: 'Past, Change and Reason',
    instructions: 'Match each pattern with its language job.', question: 'What does each pattern express?',
    matchingPairs: [
      { left: 'was / were', right: 'past state or identity' },
      { left: 'became + adjective', right: 'change of state' },
      { left: 'because + clause', right: 'reason with a full clause' },
      { left: 'because of + noun', right: 'reason with a noun phrase' },
    ],
    correctAnswer: {
      'was / were': 'past state or identity',
      'became + adjective': 'change of state',
      'because + clause': 'reason with a full clause',
      'because of + noun': 'reason with a noun phrase',
    },
    explanation: 'These patterns describe background, change and reasons.',
    feedback: { correct: 'Correct.', incorrect: 'Separate past state, change and the two reason patterns.' },
  },
  {
    id: 'mecca-a2-language-review-2-decision', type: 'multiple-choice', title: 'Thought to Decision',
    instructions: 'Choose the sentence that expresses a decision.', question: 'Which sentence shows a choice after thinking?',
    options: ['She decided to ask for help.', 'She thought about the problem.', 'She felt worried.'], correctAnswer: 0,
    explanation: '“Decided to + verb” expresses a decision.',
    feedback: { correct: 'Correct.', incorrect: 'Look for “decided to”.' },
  },
  {
    id: 'mecca-a2-language-review-3-purpose', type: 'fill-blanks', title: 'Purpose',
    instructions: 'Complete the sentence with one word.', question: 'Which word introduces the purpose?',
    fillBlanksText: 'He went to the library [blank] study.', correctAnswer: 'to',
    explanation: '“To + verb” can explain why an action is done.',
    feedback: { correct: 'Correct.', incorrect: 'Use the infinitive marker for purpose.' },
  },
  {
    id: 'mecca-a2-language-review-4-duty-purpose', type: 'drag-drop', title: 'Duty or Purpose?',
    instructions: 'Sort the expressions by function.', question: 'Which show necessity, and which show purpose?',
    dragDropGroups: [
      { group: 'Duty or necessity', items: ['had to work', 'must follow the rule'] },
      { group: 'Purpose', items: ['went to learn', 'called to ask'] },
    ],
    correctAnswer: {
      'Duty or necessity': ['had to work', 'must follow the rule'],
      Purpose: ['went to learn', 'called to ask'],
    },
    explanation: '“Had to/must” express necessity; “to + verb” can express purpose.',
    feedback: { correct: 'Correct.', incorrect: 'Ask whether each phrase means necessity or answers “Why?”' },
  },
  {
    id: 'mecca-a2-language-review-5-sequence', type: 'sequencing', title: 'Thought, Action, Result',
    instructions: 'Put the language moves in a natural order.', question: 'How can a short A2 narrative develop?',
    sequencingItems: [
      { id: '1', text: 'She thought about the problem.' },
      { id: '2', text: 'She decided to act.' },
      { id: '3', text: 'Then she started to work.' },
      { id: '4', text: 'In the end, the situation changed.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'Thought can lead to decision, action and result.',
    feedback: { correct: 'Correct.', incorrect: 'Begin with thought and finish with the result.' },
  },
  {
    id: 'mecca-a2-language-review-6-request-permission', type: 'matching', title: 'Request, Permission and Refusal',
    instructions: 'Match each pattern with its function.', question: 'What does each pattern do?',
    matchingPairs: [
      { left: 'ask + person + to + verb', right: 'make a request' },
      { left: 'allow + person + to + verb', right: 'give permission' },
      { left: 'tell + person + to + verb', right: 'give or report an instruction' },
      { left: 'refuse to + verb', right: 'say no to an action' },
    ],
    correctAnswer: {
      'ask + person + to + verb': 'make a request',
      'allow + person + to + verb': 'give permission',
      'tell + person + to + verb': 'give or report an instruction',
      'refuse to + verb': 'say no to an action',
    },
    explanation: 'These patterns separate request, permission, instruction and refusal.',
    feedback: { correct: 'Correct.', incorrect: 'Focus on ask, allow, tell and refuse.' },
  },
  {
    id: 'mecca-a2-language-review-7-condition', type: 'fill-blanks', title: 'Condition and Result',
    instructions: 'Complete the future result.', question: 'Which word completes the pattern?',
    fillBlanksText: 'If you practise, you [blank] improve.', correctAnswer: 'will',
    explanation: '“If + present, will + verb” connects a condition with a future result.',
    feedback: { correct: 'Correct.', incorrect: 'The second clause needs the future helper.' },
  },
  {
    id: 'mecca-a2-language-review-8-fairness', type: 'multiple-choice', title: 'Fair Evaluation',
    instructions: 'Choose the sentence that evaluates unfair behaviour.', question: 'Which sentence gives an evaluation?',
    options: ['It is unfair to judge people by skin color.', 'People were in the market.', 'They started to walk.'], correctAnswer: 0,
    explanation: '“It is unfair to + verb” evaluates behaviour.',
    feedback: { correct: 'Correct.', incorrect: 'Look for language that judges an action as unfair.' },
  },
  {
    id: 'mecca-a2-language-review-9-habit', type: 'true-false', title: 'Past Habit',
    instructions: 'Decide whether the language statement is correct.', question: '“Used to + verb” can describe a repeated past habit.',
    correctAnswer: true,
    explanation: '“Used to” is useful for repeated situations or habits in the past.',
    feedback: { correct: 'Correct.', incorrect: 'Review the language for repeated past actions.' },
  },
  {
    id: 'mecca-a2-language-review-10-transfer', type: 'reflection', title: 'Use It in Daily Life',
    instructions: 'Write or say four short A2 sentences in a new school, family, club or team situation. Do not retell the story.',
    question: 'Can you transfer four different language patterns?', correctAnswer: null,
    explanation: 'Use meaningful language from different parts of the book.',
    feedback: { correct: 'Use four different patterns.', incorrect: '' },
    discussionPrompts: [
      { question: 'Use a reason with because.', mode: 'Individual' },
      { question: 'Use a past duty with had to.', mode: 'Individual' },
      { question: 'Use a request or permission pattern.', mode: 'Pair' },
      { question: 'Use a fairness sentence.', mode: 'Pair' },
    ],
  },
];
