import { Exercise } from '../../../../types';

// Single source of truth for every English Adam A2 learning activity.
// Story prose lives in pages.ts and is never generated or rewritten here.

export const adamA2QuickChallenges: Record<number, Exercise> = {
  1: {
    id: 'adam-a2-quick-1', type: 'multiple-choice', title: 'Many Skin Colors',
    instructions: 'Read the question. Choose the answer from Chapter 1.',
    question: 'Why are people’s skin colors not all the same?',
    options: ['Humans have lived on earth for many years.', 'Adam was made from soil from many parts of the earth.', 'The angels waited with curiosity for the new human.'], correctAnswer: 1,
    explanation: 'Chapter 1 says the angels “collected soil from different parts of the earth, and Allah shaped Adam. Because of this, humans have different skin colors.”',
    feedback: { correct: 'Yes! The soil came from many places, so people have many skin colors. We are all children of Adam.', incorrect: 'Not this one. Read the third paragraph of Chapter 1 again and find the words “Because of this …”.' }
  },
  2: {
    id: 'adam-a2-quick-2', type: 'multiple-choice', title: 'Adam’s Knowledge',
    instructions: 'Read the question. Choose the answer from Chapter 2.',
    question: 'Why did Adam know more than the angels?',
    options: ['Allah gave him knowledge and taught him to think.', 'He was created from clay.', 'The angels admired him and respected him.'], correctAnswer: 0,
    explanation: 'Chapter 2 says Adam “was wiser than the angels, because Allah gave Adam knowledge and taught him to think.”',
    feedback: { correct: 'Right! Allah gave Adam knowledge and taught him to think. That is why he learned more than the angels knew.', incorrect: 'Read the first paragraph of Chapter 2 again. Find the word “because” and read what comes after it.' }
  },
  3: {
    id: 'adam-a2-quick-3', type: 'matching', matchingHeadings: { left: 'Who or what', right: 'What Chapter 3 says' }, title: 'What Makes a Person Great?',
    instructions: 'Match each part with what Chapter 3 says about it.',
    question: 'What does Chapter 3 tell us about Iblis, Adam and real value?',
    matchingPairs: [
      { left: 'Iblis', right: 'He said, “I am better than Adam.”' },
      { left: 'Adam', right: 'His knowledge was for the good of every creature.' },
      { left: 'Clay or fire', right: 'It did not make anybody valuable.' },
      { left: 'Useful knowledge', right: 'With it, humans can do good and stop bad.' }
    ],
    correctAnswer: { 'Iblis': 'He said, “I am better than Adam.”', 'Adam': 'His knowledge was for the good of every creature.', 'Clay or fire': 'It did not make anybody valuable.', 'Useful knowledge': 'With it, humans can do good and stop bad.' },
    explanation: 'Iblis said he was better because he came from fire. But Chapter 3 says, “For Allah, the clay or the fire did not make anybody valuable. But useful knowledge makes people great, because with this knowledge, humans can do good and stop bad.”',
    feedback: { correct: 'Well done! Where we come from does not make us better. Useful knowledge and good actions do.', incorrect: 'Read Chapter 3 again. The first paragraph has Iblis’s words, the second is about Adam’s knowledge, and the third is about clay, fire and useful knowledge.' }
  },
  4: {
    id: 'adam-a2-quick-4', type: 'multiple-choice', title: 'Adam and Eve',
    instructions: 'Read the question. Choose the answer from Chapter 4.',
    question: 'Why did Allah give Adam a wife?',
    options: ['Allah wanted Adam to be careful about Iblis.', 'The angels asked Allah for another human.', 'Adam started to feel lonely in Paradise.'], correctAnswer: 2,
    explanation: 'Chapter 4 says, “Adam started to feel lonely in Paradise. So, Allah gave him a wife. Her name was Eve (Hawwa).”',
    feedback: { correct: 'Yes! Adam felt lonely, so Allah gave him Eve.', incorrect: 'Read the second paragraph of Chapter 4 again. How did Adam feel just before the word “So”?' }
  },
  5: {
    id: 'adam-a2-quick-5', type: 'sequencing', title: 'The Lie and the Mistake',
    instructions: 'Put the events from Chapter 5 in the right order.',
    question: 'What happened first, next and last?',
    sequencingItems: [
      { id: '1', text: 'Iblis told Adam and Eve that he was their friend.' },
      { id: '2', text: 'Adam and Eve forgot Allah’s warning.' },
      { id: '3', text: 'They ate fruit from the banned tree.' },
      { id: '4', text: 'They said sorry to Allah.' }
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'First Iblis came near them and said he was their friend. After a while, they believed his lie and forgot Allah’s warning. Then they ate from the banned tree. They were very sad and said sorry to Allah.',
    feedback: { correct: 'Great! You followed the story from Iblis’s lie to Adam and Eve saying sorry.', incorrect: 'Follow Chapter 5 paragraph by paragraph: Iblis’s words, what Adam and Eve forgot, what they ate, and what they did when they were sad.' }
  },
  6: {
    id: 'adam-a2-quick-6', type: 'true-false', title: 'Iblis on Earth',
    instructions: 'Is the sentence true or false? Use Chapter 6.',
    question: 'On earth, Iblis stayed far away from Adam and Eve.', correctAnswer: false,
    explanation: 'Chapter 6 says, “But Iblis also followed Adam and Eve on earth. He was still around. He wanted people not to remember Allah in their daily lives.”',
    feedback: { correct: 'Correct! Iblis followed them to earth. He wanted people to forget Allah.', incorrect: 'Read the last paragraph of Chapter 6 again. Where did Iblis go, and what did he want?' }
  },
  7: {
    id: 'adam-a2-quick-7', type: 'multiple-choice', title: 'A Warning for the Children',
    instructions: 'Read the question. Choose the answer from Chapter 7.',
    question: 'Why did Adam and Eve warn their children against Iblis?',
    options: ['Iblis was their enemy, not their friend.', 'Iblis was the ruler of the earth.', 'The other messengers asked them to do it.'], correctAnswer: 0,
    explanation: 'Chapter 7 says, “They also warned their children against Iblis, because Iblis was their enemy, not their friend.” The other messengers came later, after Adam’s death.',
    feedback: { correct: 'Right! Iblis said he was their friend, but he was really their enemy.', incorrect: 'Read the second paragraph of Chapter 7 again. Find the word “because” after “warned their children”.' }
  },
  8: {
    id: 'adam-a2-quick-8', type: 'matching', matchingHeadings: { left: 'The brothers', right: 'Their work and gift' }, title: 'Two Brothers, Two Offerings',
    instructions: 'Match each part with the right answer from Chapter 8.',
    question: 'What was each brother’s work, and what did he offer to Allah?',
    matchingPairs: [
      { left: 'Habil’s work', right: 'a shepherd' },
      { left: 'Qabil’s work', right: 'a farmer' },
      { left: 'Habil’s offering', right: 'his best and healthiest sheep' },
      { left: 'Qabil’s offering', right: 'just a handful of his crops' }
    ],
    correctAnswer: { 'Habil’s work': 'a shepherd', 'Qabil’s work': 'a farmer', 'Habil’s offering': 'his best and healthiest sheep', 'Qabil’s offering': 'just a handful of his crops' },
    explanation: 'Chapter 8 says Habil became a shepherd and Qabil was a farmer. “Habil brought his best and healthiest sheep as a gift for Allah, but Qabil brought just a handful of his crops.” The chapter ends: “Real goodness is giving the best and the most loved.”',
    feedback: { correct: 'Well done! Habil gave his best. Real goodness is giving the best we have.', incorrect: 'The jobs are in the first paragraph of Chapter 8. The offerings are in the second paragraph.' }
  },
  9: {
    id: 'adam-a2-quick-9', type: 'multiple-choice', title: 'Habil’s Answer',
    instructions: 'Read the question. Choose the answer from Chapter 9.',
    question: 'Habil said, “I won’t fight back or harm you.” Why?',
    options: ['Qabil said sorry to him first.', 'Qabil was his brother, and he feared Allah.', 'Their father Adam told him not to fight.'], correctAnswer: 1,
    explanation: 'Habil gave his reasons himself: “You are my brother, and I fear Allah.”',
    feedback: { correct: 'Yes! Habil chose not to hurt his brother, because he feared Allah.', incorrect: 'Read Habil’s words in the first paragraph of Chapter 9 again. Look at the sentence right after “I won’t fight back or harm you.”' }
  },
  10: {
    id: 'adam-a2-quick-10', type: 'true-false', title: 'The Message Continues',
    instructions: 'Is the sentence true or false? Use Chapter 10.',
    question: 'Adam’s message stayed only with his own family.', correctAnswer: false,
    explanation: 'Chapter 10 says, “His children and grandchildren spread his message worldwide. This message still advises people to love and respect Allah.”',
    feedback: { correct: 'Correct! His children and grandchildren took his message all over the world.', incorrect: 'Read the second paragraph of Chapter 10 again. Where did Adam’s children and grandchildren spread his message?' }
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