import type { Exercise } from '../../../../types';

/**
 * Cumulative language review for Abraham A2 English.
 * It recycles grammar and communicative functions from the chapter Language Focus sections.
 * Whole-story comprehension remains in Final Challenge.
 */
export const abrahamA2LanguageReviewExercises: Exercise[] = [
  {
    id: 'abraham-a2-language-review-1-observation-reason', type: 'matching', title: 'Observation, Reason and Result',
    instructions: 'Match each expression with its language job.', question: 'How can you connect an observation with a reason or result?',
    matchingPairs: [
      { left: 'could not hear or move', right: 'past inability' },
      { left: 'because', right: 'give a reason' },
      { left: 'because of this', right: 'show a result' },
      { left: 'thought that ...', right: 'report an idea or belief' },
    ],
    correctAnswer: { 'could not hear or move': 'past inability', because: 'give a reason', 'because of this': 'show a result', 'thought that ...': 'report an idea or belief' },
    explanation: 'The opening chapters combine observation, inability, thought, reason and result.',
    feedback: { correct: 'Correct. You connected form with function.', incorrect: 'Ask whether the expression shows inability, a reason, a result or a thought.' },
  },
  {
    id: 'abraham-a2-language-review-2-past-habit-comparison', type: 'matching', title: 'Past Habit, Questions and Comparison',
    instructions: 'Match each pattern with what it expresses.', question: 'What does each Chapter 2 pattern help a speaker do?',
    matchingPairs: [
      { left: 'used to make idols', right: 'describe a past habit' },
      { left: 'Why ...?', right: 'ask for a reason' },
      { left: 'bigger than', right: 'make a comparison' },
      { left: 'told him not to ...', right: 'report a prohibition or warning' },
    ],
    correctAnswer: { 'used to make idols': 'describe a past habit', 'Why ...?': 'ask for a reason', 'bigger than': 'make a comparison', 'told him not to ...': 'report a prohibition or warning' },
    explanation: 'These patterns let learners talk about repeated past actions, reasons, comparison and reported warnings.',
    feedback: { correct: 'Correct.', incorrect: 'Focus on used to, Why, -er than and told ... not to.' },
  },
  {
    id: 'abraham-a2-language-review-3-condition-purpose', type: 'fill-blanks', title: 'Condition and Future Result',
    instructions: 'Complete the conditional sentence with the future helper used in the story.', question: 'Which word completes the result?',
    fillBlanksText: 'If you follow the right way, you [blank] understand more clearly.', correctAnswer: 'will',
    explanation: 'The story uses if + present with will + verb to connect a condition with a future result.',
    feedback: { correct: 'Correct. “Will” gives the future result.', incorrect: 'The first clause gives the condition; the second gives the future result.' },
  },
  {
    id: 'abraham-a2-language-review-4-belief-reason-general-time', type: 'matching', title: 'Belief, Reason and General Time',
    instructions: 'Match each pattern with its communicative function.', question: 'How do the middle chapters express belief and explain ideas?',
    matchingPairs: [
      { left: 'I believe in ...', right: 'state a belief' },
      { left: 'Why ...? / Because ...', right: 'ask for and give a reason' },
      { left: 'When people are sick, ...', right: 'describe a general situation' },
      { left: 'have no power to ...', right: 'describe lack of ability or power' },
    ],
    correctAnswer: { 'I believe in ...': 'state a belief', 'Why ...? / Because ...': 'ask for and give a reason', 'When people are sick, ...': 'describe a general situation', 'have no power to ...': 'describe lack of ability or power' },
    explanation: 'These forms support belief, explanation, general truth and lack of power.',
    feedback: { correct: 'Correct.', incorrect: 'Separate belief, reason, general time and lack of power.' },
  },
  {
    id: 'abraham-a2-language-review-5-plan-sequence', type: 'sequencing', title: 'Plans and Narrative Sequence',
    instructions: 'Put the language moves into a natural order.', question: 'How can a short A2 narrative move from intention to result?',
    sequencingItems: [
      { id: '1', text: 'He wanted to test an idea.' },
      { id: '2', text: 'He made a plan to act.' },
      { id: '3', text: 'Then he carried out the plan.' },
      { id: '4', text: 'In the end, people saw the result.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'Wanted to, made a plan to, then and in the end help organise intention, action and result.',
    feedback: { correct: 'Correct.', incorrect: 'Start with intention, then planning, action and final result.' },
  },
  {
    id: 'abraham-a2-language-review-6-questions-ability', type: 'matching', title: 'Questions, Commands and Ability',
    instructions: 'Match each pattern with its function.', question: 'How can you challenge a claim or report an order?',
    matchingPairs: [
      { left: 'Can you + verb?', right: 'ask about ability' },
      { left: 'could not + verb', right: 'describe past inability' },
      { left: 'ordered him to + verb', right: 'report a command' },
      { left: 'let + person + verb', right: 'allow an action' },
    ],
    correctAnswer: { 'Can you + verb?': 'ask about ability', 'could not + verb': 'describe past inability', 'ordered him to + verb': 'report a command', 'let + person + verb': 'allow an action' },
    explanation: 'These forms distinguish questions about ability, inability, reported commands and permission.',
    feedback: { correct: 'Correct.', incorrect: 'Focus on Can, could not, ordered and let.' },
  },
  {
    id: 'abraham-a2-language-review-7-purpose-duty', type: 'matching', title: 'Purpose, Duty and Movement',
    instructions: 'Match each expression with what it communicates.', question: 'How does the journey section talk about purpose and responsibility?',
    matchingPairs: [
      { left: 'decided to leave', right: 'a decision' },
      { left: 'travelled to tell people ...', right: 'purpose' },
      { left: 'had to search', right: 'past necessity' },
      { left: 'from one hill to another', right: 'movement between places' },
    ],
    correctAnswer: { 'decided to leave': 'a decision', 'travelled to tell people ...': 'purpose', 'had to search': 'past necessity', 'from one hill to another': 'movement between places' },
    explanation: 'Decision, purpose, necessity and movement are recurring functions in the journey chapters.',
    feedback: { correct: 'Correct.', incorrect: 'Ask whether each phrase shows decision, purpose, necessity or movement.' },
  },
  {
    id: 'abraham-a2-language-review-8-change-continuation', type: 'matching', title: 'Change, Result and Continuation',
    instructions: 'Match each pattern with its meaning.', question: 'How can you describe change and something that continues?',
    matchingPairs: [
      { left: 'became cool and safe', right: 'change into a new state' },
      { left: 'turned into a settlement', right: 'change into a new thing' },
      { left: 'still remember', right: 'continuation to the present' },
      { left: 'because of the water', right: 'cause or reason expressed with a noun phrase' },
    ],
    correctAnswer: { 'became cool and safe': 'change into a new state', 'turned into a settlement': 'change into a new thing', 'still remember': 'continuation to the present', 'because of the water': 'cause or reason expressed with a noun phrase' },
    explanation: 'Become, turn into, still and because of express different kinds of change, continuation and cause.',
    feedback: { correct: 'Correct.', incorrect: 'Focus on became, turned into, still and because of.' },
  },
  {
    id: 'abraham-a2-language-review-9-future-certainty', type: 'matching', title: 'Future, Certainty and Sequence',
    instructions: 'Match each expression with its language job.', question: 'How does the final chapter talk about future action and sequence?',
    matchingPairs: [
      { left: 'will + verb', right: 'future action or willingness' },
      { left: 'for sure', right: 'certainty' },
      { left: 'after + past event', right: 'sequence after an event' },
      { left: 'one of + plural group', right: 'identify one member of a group' },
    ],
    correctAnswer: { 'will + verb': 'future action or willingness', 'for sure': 'certainty', 'after + past event': 'sequence after an event', 'one of + plural group': 'identify one member of a group' },
    explanation: 'The final chapters recycle future, certainty, sequence and group-reference language.',
    feedback: { correct: 'Correct.', incorrect: 'Separate future, certainty, sequence and group membership.' },
  },
  {
    id: 'abraham-a2-language-review-10-transfer', type: 'reflection', title: 'Use the Language in Daily Life',
    instructions: 'Write four short A2 sentences using patterns from different parts of the book.', question: 'Can you transfer the story language to a new situation?',
    correctAnswer: null,
    explanation: 'The aim is to use the book’s grammar and functions meaningfully, not to retell the story.',
    feedback: { correct: 'Use all four starters and make each sentence meaningful.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — “I decided to ... because ...”', mode: 'Individual' },
      { question: 'Sentence 2 — “Yesterday, I had to ...”', mode: 'Individual' },
      { question: 'Sentence 3 — “Can you ...?”', mode: 'Pair' },
      { question: 'Sentence 4 — “After ..., I will ... for sure.”', mode: 'Pair' },
    ],
  },
];
