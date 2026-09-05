import type { Exercise } from '../../../../types';

/** Cumulative grammar/function review for Moses A2 English. */
export const mosesA2LanguageReviewExercises: Exercise[] = [
  {
    id: 'moses-a2-language-review-1-form-function', type: 'matching', title: 'Form and Function',
    instructions: 'Match each pattern with its job.', question: 'What does each pattern help you express?',
    matchingPairs: [
      { left: 'was/were + -ing', right: 'background action in the past' },
      { left: 'because + clause', right: 'a reason' },
      { left: 'so + clause', right: 'a result' },
      { left: 'then / after + time', right: 'sequence' },
    ],
    correctAnswer: { 'was/were + -ing': 'background action in the past', 'because + clause': 'a reason', 'so + clause': 'a result', 'then / after + time': 'sequence' },
    explanation: 'These patterns organise past events and connect reasons with results.', feedback: { correct: 'Correct.', incorrect: 'Separate background action, reason, result and sequence.' },
  },
  {
    id: 'moses-a2-language-review-2-ability', type: 'multiple-choice', title: 'Past Inability',
    instructions: 'Choose the sentence that talks about inability in the past.', question: 'Which sentence is correct?',
    options: ['He could not continue because he was tired.', 'He cannot continue yesterday.', 'He will not could continue.'], correctAnswer: 0,
    explanation: 'Could not + base verb expresses past inability.', feedback: { correct: 'Correct.', incorrect: 'Look for could not + base verb.' },
  },
  {
    id: 'moses-a2-language-review-3-purpose', type: 'fill-blanks', title: 'Purpose',
    instructions: 'Complete the purpose phrase with one word.', question: 'Which word completes the sentence?',
    fillBlanksText: 'She went to the library [blank] study.', correctAnswer: 'to',
    explanation: 'To + base verb can express purpose.', feedback: { correct: 'Correct.', incorrect: 'Use the infinitive marker before the base verb.' },
  },
  {
    id: 'moses-a2-language-review-4-command-report', type: 'drag-drop', title: 'Direct or Reported?',
    instructions: 'Sort the examples by their language job.', question: 'Which are direct commands and which report an instruction?',
    dragDropGroups: [
      { group: 'Direct command', items: ['Wait here!', 'Open the book!'] },
      { group: 'Reported instruction', items: ['She told me to wait.', 'He told us to open the book.'] },
    ],
    correctAnswer: { 'Direct command': ['Wait here!', 'Open the book!'], 'Reported instruction': ['She told me to wait.', 'He told us to open the book.'] },
    explanation: 'Imperatives give a command directly. Tell + person + to + verb reports an instruction.', feedback: { correct: 'Correct.', incorrect: 'Separate the exact command from the sentence that reports it.' },
  },
  {
    id: 'moses-a2-language-review-5-future-time', type: 'fill-blanks', title: 'Future and Time',
    instructions: 'Complete the future result.', question: 'Which word completes the sentence?',
    fillBlanksText: 'When we finish this work, we [blank] go home.', correctAnswer: 'will',
    explanation: 'When + present can introduce a future event; will + verb gives the future result.', feedback: { correct: 'Correct.', incorrect: 'Use the future helper before the base verb.' },
  },
  {
    id: 'moses-a2-language-review-6-change', type: 'multiple-choice', title: 'Change of State',
    instructions: 'Choose the sentence that describes change into a new state.', question: 'Which sentence uses become correctly?',
    options: ['The room became quiet.', 'The room become quiet yesterday.', 'The room became to quiet.'], correctAnswer: 0,
    explanation: 'Become + adjective describes a change of state.', feedback: { correct: 'Correct.', incorrect: 'Look for became + adjective.' },
  },
  {
    id: 'moses-a2-language-review-7-place-movement', type: 'matching', title: 'Place and Movement',
    instructions: 'Match the expression with its meaning.', question: 'How can you describe position, arrival and searching?',
    matchingPairs: [
      { left: 'in front of / behind', right: 'position' },
      { left: 'in the middle of', right: 'central position' },
      { left: 'arrive at / arrive in', right: 'reach a place' },
      { left: 'look for', right: 'search for someone or something' },
    ],
    correctAnswer: { 'in front of / behind': 'position', 'in the middle of': 'central position', 'arrive at / arrive in': 'reach a place', 'look for': 'search for someone or something' },
    explanation: 'Journey chapters recycle useful place and movement language.', feedback: { correct: 'Correct.', incorrect: 'Separate position, arrival and searching.' },
  },
  {
    id: 'moses-a2-language-review-8-question-ability', type: 'true-false', title: 'Questions About Ability',
    instructions: 'Decide whether the statement is correct.', question: '“Can you + base verb?” can ask whether someone is able to do something.',
    correctAnswer: true, explanation: 'Can you...? is a common A2 question about ability.', feedback: { correct: 'Correct.', incorrect: 'Think about the meaning of can.' },
  },
  {
    id: 'moses-a2-language-review-9-sequence', type: 'sequencing', title: 'Build a Clear A2 Narrative',
    instructions: 'Put the language moves into a natural order.', question: 'How can a short story move from situation to result?',
    sequencingItems: [
      { id: '1', text: 'At first, there was a problem.' },
      { id: '2', text: 'Someone decided to help.' },
      { id: '3', text: 'Then the person acted.' },
      { id: '4', text: 'In the end, the situation changed.' },
    ],
    correctAnswer: ['1','2','3','4'], explanation: 'At first, decided to, then and in the end organise a simple A2 narrative.', feedback: { correct: 'Correct.', incorrect: 'Start with the situation, then decision, action and result.' },
  },
  {
    id: 'moses-a2-language-review-10-transfer', type: 'reflection', title: 'Use the Language in Daily Life',
    instructions: 'Write four short A2 sentences about a new everyday situation.', question: 'Can you use the book’s language without retelling the story?',
    correctAnswer: null, explanation: 'The goal is meaningful transfer of grammar and communicative functions.', feedback: { correct: 'Use all four starters and make each sentence meaningful.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — “Yesterday, I could not ... because ...”', mode: 'Individual' },
      { question: 'Sentence 2 — “I decided to ... to ...”', mode: 'Individual' },
      { question: 'Sentence 3 — “Can you ...?”', mode: 'Pair' },
      { question: 'Sentence 4 — “When ..., I will ...”', mode: 'Pair' },
    ],
  },
];
