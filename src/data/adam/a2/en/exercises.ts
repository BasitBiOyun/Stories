import { Exercise } from '../../../../types';

// Single source of truth for every English Adam A2 learning activity.
// Story prose lives in pages.ts and is never generated or rewritten here.

export const adamA2QuickChallenges: Record<number, Exercise> = {
  1: {
    id: 'adam-a2-quick-1', type: 'multiple-choice', title: 'Different Places, Different Colours',
    instructions: 'Choose the answer supported by Chapter 1.',
    question: 'Why does the chapter say people have different skin colours?',
    options: ['The soil came from different parts of Earth', 'The angels chose different colours', 'People changed colour later'], correctAnswer: 0,
    explanation: 'The chapter connects soil from different parts of Earth with different human skin colours.',
    feedback: { correct: 'Correct. You connected the reason and result stated in the chapter.', incorrect: 'Reread the two sentences about soil from different parts of Earth and what the chapter says happened because of this.' }
  },
  2: {
    id: 'adam-a2-quick-2', type: 'fill-blanks', title: 'Show Respect',
    instructions: 'Complete the command with one word from Chapter 2.',
    question: 'Complete what Allah told the angels to do.', fillBlanksText: 'Show [blank] to Adam.', correctAnswer: 'respect',
    explanation: 'Allah told the angels to show respect to Adam.',
    feedback: { correct: 'Correct.', incorrect: 'Find the first command to the angels in Chapter 2.' }
  },
  3: {
    id: 'adam-a2-quick-3',
    type: 'matching',
    title: 'Origin, Knowledge and Value',
    instructions: 'Match each Chapter 3 idea with the detail that completes it.',
    question: 'How does Chapter 3 contrast origin with what truly makes a person valuable?',
    matchingPairs: [
      { left: "Iblis's origin", right: 'fire' },
      { left: "Adam's origin", right: 'soil' },
      { left: "Iblis's mistake", right: 'thinking his origin made him better' },
      { left: 'Useful knowledge', right: 'helps people do good and stop bad' },
    ],
    correctAnswer: {
      "Iblis's origin": 'fire',
      "Adam's origin": 'soil',
      "Iblis's mistake": 'thinking his origin made him better',
      'Useful knowledge': 'helps people do good and stop bad',
    },
    explanation: 'The chapter names fire and soil, but its main contrast is between pride in origin and the value of useful knowledge.',
    feedback: {
      correct: 'Correct. You connected the details with the chapter’s central contrast.',
      incorrect: 'Separate the two origins from the lesson about pride and useful knowledge.',
    },
  },
  4: {
    id: 'adam-a2-quick-4', type: 'multiple-choice', title: 'Adam and Eve',
    instructions: 'Choose the reason stated in Chapter 4.',
    question: 'Why did Allah give Adam a wife?', options: ['Adam felt lonely', 'Adam wanted to leave Paradise', 'The angels asked for another person'], correctAnswer: 0,
    explanation: 'Adam started to feel lonely in Paradise, so Allah gave him Eve (Hawwa).',
    feedback: { correct: 'Correct.', incorrect: 'Read the sentence immediately before Eve is introduced and notice how Adam felt.' }
  },
  5: {
    id: 'adam-a2-quick-5', type: 'multiple-choice', title: 'Iblis’s Lie',
    instructions: 'Choose the promise Iblis made in Chapter 5.',
    question: 'What did Iblis tell Adam and Eve about the tree?',
    options: ['They would never die if they ate from it', 'They would become hungry if they ate from it', 'They would forget everything if they ate from it'], correctAnswer: 0,
    explanation: 'Iblis told them that they would never die if they ate from the tree.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sentence beginning “If you eat…” and read the result Iblis promised.' }
  },
  6: {
    id: 'adam-a2-quick-6', type: 'tap-reveal', title: 'A New Life on Earth',
    instructions: 'Answer from memory, then reveal the chapter answer.',
    question: 'What happened after Allah forgave Adam and Eve?',
    tapRevealItems: [{ question: 'What happened after Allah forgave Adam and Eve?', answer: 'They began life on Earth.' }],
    correctAnswer: 'They began life on Earth.',
    explanation: 'After forgiving them, Allah put Adam and Eve on Earth to live there.',
    feedback: { correct: 'Correct.', incorrect: 'Read the first sentence of Chapter 6 and follow the order: forgiveness, then what?' }
  },
  7: {
    id: 'adam-a2-quick-7', type: 'fill-blanks', title: 'Adam’s Teaching',
    instructions: 'Complete the first quality in Adam’s teaching list.',
    question: 'Complete the sentence from Chapter 7.', fillBlanksText: 'He started teaching people to be [blank], do good, stop bad and always remember Allah.', correctAnswer: 'honest',
    explanation: 'Adam taught people to be honest, do good, stop bad and remember Allah.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sentence beginning “He started teaching…” and look at the first quality.' }
  },
  8: {
    id: 'adam-a2-quick-8',
    type: 'matching',
    title: 'The Two Brothers and Their Offerings',
    instructions: 'Match each Chapter 8 detail with the correct brother or idea.',
    question: 'What work and offering does the chapter connect with each brother?',
    matchingPairs: [
      { left: "Habil's work", right: 'shepherd' },
      { left: "Qabil's work", right: 'farmer' },
      { left: "Habil's offering", right: 'his best and healthiest sheep' },
      { left: "Qabil's offering", right: 'a handful of his crops' },
    ],
    correctAnswer: {
      "Habil's work": 'shepherd',
      "Qabil's work": 'farmer',
      "Habil's offering": 'his best and healthiest sheep',
      "Qabil's offering": 'a handful of his crops',
    },
    explanation: 'The chapter introduces each brother’s work and then contrasts what each one chose to offer.',
    feedback: {
      correct: 'Correct. You connected both jobs and both offerings accurately.',
      incorrect: 'Reread Chapter 8 from the brothers’ jobs to the two offerings.',
    },
  },
  9: {
    id: 'adam-a2-quick-9', type: 'true-false', title: 'Habil’s Response',
    instructions: 'Decide whether the statement agrees with Chapter 9.',
    question: 'Habil said that he would fight back and harm Qabil.', correctAnswer: false,
    explanation: 'Habil said that he would not fight back or harm Qabil.',
    feedback: { correct: 'Correct.', incorrect: 'Read Habil’s reply and focus on “I won’t fight back or harm you”.' }
  },
  10: {
    id: 'adam-a2-quick-10', type: 'multiple-choice', title: 'The Message Continues',
    instructions: 'Choose the answer stated in Chapter 10.',
    question: 'Who spread Adam’s message worldwide after him?', options: ['His children and grandchildren', 'Only the angels', 'Only farmers'], correctAnswer: 0,
    explanation: 'The chapter says that Adam’s children and grandchildren spread his message worldwide.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sentence about Adam’s children and grandchildren near the end of the story.' }
  }
};

export const adamA2KnowledgeCheckExercises: Exercise[] = [
  {
    id: 'adam-a2-kc-1', type: 'multiple-choice', title: 'Adam on Earth', instructions: 'Choose the correct answer.',
    question: 'What role would Adam have on Earth?',
    options: ['A ruler on Earth', 'An angel in the sky', 'A shepherd in Paradise'], correctAnswer: 0,
    explanation: 'Chapter 1 says that Adam would have a role on Earth.',
    feedback: { correct: 'Correct.', incorrect: 'Read the part about Adam’s role on Earth again.' }
  },
  {
    id: 'adam-a2-kc-2', type: 'true-false', title: 'Learning', instructions: 'Choose true or false.',
    question: 'Allah gave Adam knowledge and taught him to think.', correctAnswer: true,
    explanation: 'Chapter 2 says that Adam learned and understood through the knowledge Allah gave him.',
    feedback: { correct: 'Correct.', incorrect: 'Read the part about Adam’s knowledge again.' }
  },
  {
    id: 'adam-a2-kc-3', type: 'multiple-choice', title: 'Useful Knowledge', instructions: 'Choose the correct answer.',
    question: 'What does useful knowledge help people do?',
    options: ['Do good and stop bad', 'Think one origin is always better', 'Stop thinking about right and wrong'], correctAnswer: 0,
    explanation: 'Chapter 3 says useful knowledge helps people do good and stop bad.',
    feedback: { correct: 'Correct.', incorrect: 'Read the sentence about useful knowledge again.' }
  },
  {
    id: 'adam-a2-kc-4', type: 'true-false', title: 'The Tree', instructions: 'Choose true or false.',
    question: 'Adam and Eve could go near every tree in Paradise.', correctAnswer: false,
    explanation: 'They were told not to go near one tree.',
    feedback: { correct: 'Correct.', incorrect: 'There was one tree they could not go near.' }
  },
  {
    id: 'adam-a2-kc-5', type: 'multiple-choice', title: 'After the Mistake', instructions: 'Choose the correct answer.',
    question: 'What did Adam and Eve do after their mistake?',
    options: ['They were sorry and asked Allah to forgive them', 'They said they were right', 'They forgot the mistake'], correctAnswer: 0,
    explanation: 'They were sorry, asked Allah to forgive them and learned from their mistake.',
    feedback: { correct: 'Correct.', incorrect: 'Read what Adam and Eve did after the mistake.' }
  },
  {
    id: 'adam-a2-kc-6', type: 'true-false', title: 'Life on Earth', instructions: 'Choose true or false.',
    question: 'People on Earth did not need to work.', correctAnswer: false,
    explanation: 'Chapter 6 talks about work such as growing crops and keeping animals.',
    feedback: { correct: 'Correct.', incorrect: 'Chapter 6 gives examples of work on Earth.' }
  },
  {
    id: 'adam-a2-kc-7', type: 'multiple-choice', title: 'Habil and Qabil', instructions: 'Choose the correct answer.',
    question: 'What were Habil and Qabil’s jobs?',
    options: ['Habil was a shepherd and Qabil was a farmer', 'Habil was a farmer and Qabil was a shepherd', 'Both were farmers'], correctAnswer: 0,
    explanation: 'Habil became a shepherd and Qabil became a farmer.',
    feedback: { correct: 'Correct.', incorrect: 'Read the first part of Chapter 8 again.' }
  },
  {
    id: 'adam-a2-kc-8', type: 'true-false', title: 'The Crow', instructions: 'Choose true or false.',
    question: 'The crow showed Qabil how to put his brother’s body in the ground.', correctAnswer: true,
    explanation: 'The crow dug the ground and Qabil understood what to do.',
    feedback: { correct: 'Correct.', incorrect: 'Read the part about the crow again.' }
  }
];

export const adamA2VocabularyChallengePairs = [
  { word: 'Messenger', meaning: 'A person who carries a message from Allah' },
  { word: 'arrogant', meaning: 'Thinking that you are more important or better than others' },
  { word: 'regret', meaning: 'Feeling sorry about a mistake' },
  { word: 'shepherd', meaning: 'A person who looks after sheep' },
  { word: 'offering', meaning: 'Something given to Allah' },
  { word: 'jealousy', meaning: 'Feeling unhappy because of what another person has or achieves' }
];

// Locked Final distribution:
// 3 multiple choice + 2 true/false + 2 matching + 2 fill blanks + 1 sequencing.
export const adamA2FinalChallengeExercises: Exercise[] = [
{
    id: 'adam-a2-final-1', type: 'multiple-choice', title: 'Earth and Work', instructions: 'Choose the true sentence.',
    question: 'What do Chapters 1 and 6 both tell us about people on Earth?',
    options: ['Chapter 1 says people should stay away from Earth. Chapter 6 says they should go back to Paradise at once.','Chapter 1 says people have a role on Earth. Chapter 6 shows some of their work and care.','Chapter 1 says people have no role on Earth. Chapter 6 says they have no duties.'], correctAnswer: 1,
    explanation: 'Chapter 1 announces a human role on Earth; Chapter 6 later describes activities and responsibilities there.',
    feedback: { correct: 'Correct. You connected an early idea with its later development.', incorrect: 'Compare the statement about the human role in Chapter 1 with the activity and responsibility list in Chapter 6.' }
  },
{
    id: 'adam-a2-final-2', type: 'multiple-choice', title: 'Giving One’s Best', instructions: 'Choose the lesson stated after the two offerings.',
    question: 'What lesson does Chapter 8 state after describing Habil’s and Qabil’s offerings?',
    options: ['Real goodness is giving the best and the most loved','A person’s job decides whether the person is good','The quality and intention behind a gift never matter'], correctAnswer: 0,
    explanation: 'The chapter explicitly states that real goodness is giving the best and the most loved.',
    feedback: { correct: 'Correct.', incorrect: 'Use the final sentence of Chapter 8, not the brothers’ job titles.' }
  },
{
    id: 'adam-a2-final-3', type: 'multiple-choice', title: 'Iblis’s Plan', instructions: 'Choose the plan stated in Chapter 4.',
    question: 'What did Iblis want to happen to Adam?', options: ['He wanted Adam to remain careful about Iblis','He wanted Adam to keep following Allah’s warning','He wanted Adam to lose Allah’s love'], correctAnswer: 2,
    explanation: 'The chapter says Iblis wanted Adam to lose Allah’s love, just as Iblis had.', feedback: { correct: 'Correct.', incorrect: 'Find the sentence explaining what Iblis wanted after he waited for a chance.' }
  },
{
    id: 'adam-a2-final-4', type: 'true-false', title: 'Two Responses to Being Wrong', instructions: 'Decide whether the comparison agrees with Chapter 5.',
    question: 'Adam and Eve admitted their mistake, and Iblis also accepted that he was wrong.', correctAnswer: false,
    explanation: 'Adam and Eve were sorry and tried to repair their mistake; Iblis kept believing that he was right.',
    feedback: { correct: 'Correct. You compared two different responses to being wrong.', incorrect: 'Compare the paragraph about Adam and Eve’s regret with the final paragraph about Iblis.' }
  },
{
    id: 'adam-a2-final-5', type: 'true-false', title: 'Daily Life', instructions: 'Decide whether the statement agrees with Chapter 6.',
    question: 'Iblis wanted people not to remember Allah in their daily lives.', correctAnswer: true,
    explanation: 'The chapter states this as Iblis’s continuing aim on Earth.', feedback: { correct: 'Correct.', incorrect: 'Reread the final sentence about Iblis in Chapter 6.' }
  },
{
    id: 'adam-a2-final-6', type: 'matching', title: 'Habil and Qabil', instructions: 'Match each brother with the right description.',
    question: 'Which description is right for each brother?',
    matchingPairs: [
      { left: 'Habil', right: 'kind and gentle; he chose not to harm his brother' },
      { left: 'Qabil', right: 'was jealous; his anger led to something terrible' }
    ],
    correctAnswer: { Habil: 'kind and gentle; he chose not to harm his brother', Qabil: 'was jealous; his anger led to something terrible' },
    explanation: 'The two chapters contrast Habil’s gentle, non-retaliating response with Qabil’s jealousy and uncontrolled anger.',
    feedback: { correct: 'Correct. You connected character descriptions with later actions.', incorrect: 'Use the character descriptions in Chapter 8 and the brothers’ actions in Chapter 9.' }
  },
{
    id: 'adam-a2-final-7', type: 'matching', title: 'Lessons at the End', instructions: 'Match each idea with the action advised in Chapter 10.',
    question: 'Connect each idea to the positive action in the final chapter.',
    matchingPairs: [{ left: 'Jealousy', right: 'stay away from it' }, { left: 'Anger', right: 'control it' }, { left: 'Other people', right: 'be kind to them' }],
    correctAnswer: { Jealousy: 'stay away from it', Anger: 'control it', 'Other people': 'be kind to them' },
    explanation: 'The final chapter turns earlier events into clear behavioural advice.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the advice sentences in Chapter 10 and match each idea with its action.' }
  },
{
    id: 'adam-a2-final-8', type: 'fill-blanks', title: 'Origin and Value', instructions: 'Complete the chapter sentence with one word.',
    question: 'Complete the idea from Chapter 3.', fillBlanksText: 'For Allah, clay or fire did not make anybody [blank].', correctAnswer: 'valuable',
    explanation: 'The missing word is valuable.',
    feedback: { correct: 'Correct.', incorrect: 'Use the sentence beginning “For Allah” and find the final value word.' }
  },
{
    id: 'adam-a2-final-9', type: 'fill-blanks', title: 'Guiding Children', instructions: 'Complete one positive action from Chapter 7.',
    question: 'Complete the sentence.', fillBlanksText: 'Adam and Eve taught their children to [blank] well and to thank Allah.', correctAnswer: 'behave',
    explanation: 'The chapter says they taught their children to behave well and thank Allah.',
    feedback: { correct: 'Correct.', incorrect: 'Find the family paragraph and look at the first positive teaching action.' }
  },
{
    id: 'adam-a2-final-10', type: 'sequencing', title: 'Story Order', instructions: 'Put these events in the correct order.',
    question: 'What happened first, next, and later?',
    sequencingItems: [
      { id: '1', text: 'Iblis lies about the tree' },
      { id: '2', text: 'Adam and Eve make a mistake and ask forgiveness' },
      { id: '3', text: 'They begin life on Earth and have work to do' },
      { id: '4', text: 'Habil and Qabil bring different offerings' },
      { id: '5', text: 'A crow later shows Qabil what to do after Habil dies' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'These events happen in this order across Chapters 5–9.',
    feedback: { correct: 'Correct. You connected five later stages in order.', incorrect: 'Use Chapters 5–9 and place one event at a time.' }
  },
{
    id: 'adam-a2-final-11', type: 'multiple-choice', title: 'Knowledge and Respect', instructions: 'Choose the answer stated in Chapter 2.',
    question: 'Why did the angels admire and respect Adam?',
    options: ['Because he was created from fire','Because Allah gave him knowledge and taught him to think and learn','Because he already had many children'], correctAnswer: 1,
    explanation: 'Chapter 2 says Allah gave Adam knowledge, taught him to think, and gave him the ability to learn and understand.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the sentences about Adam’s knowledge in Chapter 2.' }
  },
{
    id: 'adam-a2-final-12', type: 'true-false', title: 'Different Human Colors', instructions: 'Decide whether the statement agrees with Chapter 1.',
    question: 'Chapter 1 connects different human skin colors with soil collected from different parts of the earth.', correctAnswer: true,
    explanation: 'The chapter says soil was collected from different parts of the earth and connects this with different human skin colors.',
    feedback: { correct: 'Correct.', incorrect: 'Look again at the final two paragraphs of Chapter 1.' }
  },
];