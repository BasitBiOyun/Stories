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
    id: 'adam-a2-quick-3', type: 'matching', title: 'Fire and Soil',
    instructions: 'Match each person with the material named in Chapter 3.',
    question: 'Which origin does the chapter name for Adam and Iblis?',
    matchingPairs: [{ left: 'Iblis', right: 'fire' }, { left: 'Adam', right: 'soil' }],
    correctAnswer: { Iblis: 'fire', Adam: 'soil' },
    explanation: 'Iblis said that he was created from fire and Adam from soil.',
    feedback: { correct: 'Correct.', incorrect: 'Reread Iblis’s answer and match each person with the material he names.' }
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
    id: 'adam-a2-quick-8', type: 'matching', title: 'The Two Offerings',
    instructions: 'Match each brother with the offering described in Chapter 8.',
    question: 'What did each brother bring?',
    matchingPairs: [{ left: 'Habil', right: 'his best and healthiest sheep' }, { left: 'Qabil', right: 'a handful of his crops' }],
    correctAnswer: { Habil: 'his best and healthiest sheep', Qabil: 'a handful of his crops' },
    explanation: 'The chapter contrasts the quality of the two offerings.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the two sentences describing what Habil and Qabil brought.' }
  },
  9: {
    id: 'adam-a2-quick-9', type: 'true-false', title: 'Habil’s Response',
    instructions: 'Decide whether the statement agrees with Chapter 9.',
    question: 'Habil said that he would fight back and harm Qabil.', correctAnswer: false,
    explanation: 'Habil said that he would not fight back or harm Qabil.',
    feedback: { correct: 'Correct.', incorrect: 'Read Habil’s reply and focus on “I won’t fight back and harm you”.' }
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
    id: 'adam-a2-kc-1', type: 'multiple-choice', title: 'A Role on Earth', instructions: 'Choose the role stated in Chapter 1.',
    question: 'What role did Allah say the human would have on Earth?',
    options: ['A ruler on Earth', 'An angel in the sky', 'A shepherd in Paradise'], correctAnswer: 0,
    explanation: 'Chapter 1 says that the human was going to become the ruler on Earth.',
    feedback: { correct: 'Correct. You recalled the role announced for life on Earth.', incorrect: 'Return to the sentence about what the human was going to become on Earth.' }
  },
  {
    id: 'adam-a2-kc-2', type: 'true-false', title: 'Knowledge and Thinking', instructions: 'Decide whether the statement agrees with Chapter 2.',
    question: 'Allah gave Adam knowledge and taught him to think.', correctAnswer: true,
    explanation: 'Chapter 2 connects Adam’s learning and understanding with knowledge and thinking.', feedback: { correct: 'Correct.', incorrect: 'Reread the sentence explaining why Adam could learn and understand.' }
  },
  {
    id: 'adam-a2-kc-3', type: 'multiple-choice', title: 'Useful Knowledge', instructions: 'Choose what Chapter 3 says useful knowledge helps people do.',
    question: 'According to Chapter 3, what can useful knowledge help people do?',
    options: ['Do good and stop bad', 'Decide that one origin is always better', 'Avoid thinking about right and wrong'], correctAnswer: 0,
    explanation: 'The chapter says useful knowledge helps people do good and stop bad.',
    feedback: { correct: 'Correct. You used the chapter’s stated purpose of useful knowledge.', incorrect: 'Find the sentence beginning “But useful knowledge…” and read what people can do with it.' }
  },
  {
    id: 'adam-a2-kc-4', type: 'true-false', title: 'The Tree Warning', instructions: 'Decide whether the statement agrees with Chapter 4.',
    question: 'Adam and Eve were told not to go near one tree.', correctAnswer: true,
    explanation: 'The chapter states one specific warning about one tree.', feedback: { correct: 'Correct.', incorrect: 'Reread the final warning in Chapter 4.' }
  },
  {
    id: 'adam-a2-kc-5', type: 'multiple-choice', title: 'After the Mistake', instructions: 'Choose the response described in Chapter 5.',
    question: 'What did Adam and Eve do after they understood their mistake?',
    options: ['They were sorry, asked Allah to forgive them and learned from the mistake', 'They kept saying they were right', 'They ignored the mistake and continued as before'], correctAnswer: 0,
    explanation: 'They were sad, said sorry to Allah, learned from the mistake and decided not to repeat it.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the paragraph after the mistake and follow their response step by step.' }
  },
  {
    id: 'adam-a2-kc-6', type: 'multiple-choice', title: 'Life on Earth', instructions: 'Choose an activity explicitly named in Chapter 6.',
    question: 'Which activity is part of life on Earth in the chapter?',
    options: ['Growing crops and keeping animals', 'Staying in Paradise and avoiding work', 'Leaving the land unused and living alone'], correctAnswer: 0,
    explanation: 'The chapter names growing crops and keeping animals among the activities on Earth.',
    feedback: { correct: 'Correct.', incorrect: 'Return to the activity list in Chapter 6 and choose only what is actually named.' }
  },
  {
    id: 'adam-a2-kc-7', type: 'multiple-choice', title: 'Habil and Qabil', instructions: 'Choose the correct pair from Chapter 8.',
    question: 'Which pair is correct?', options: ['Habil—shepherd; Qabil—farmer', 'Habil—farmer; Qabil—shepherd', 'Both brothers—farmers'], correctAnswer: 0,
    explanation: 'Habil became a shepherd and Qabil became a farmer.', feedback: { correct: 'Correct.', incorrect: 'Reread the first paragraph of Chapter 8.' }
  },
  {
    id: 'adam-a2-kc-8', type: 'true-false', title: 'The Crow', instructions: 'Decide whether the statement agrees with Chapter 9.',
    question: 'The crow’s digging showed Qabil how to put his brother’s body in the ground.', correctAnswer: true,
    explanation: 'The crow dug the ground and Qabil understood what to do.', feedback: { correct: 'Correct.', incorrect: 'Follow the crow’s action in the final part of Chapter 9.' }
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

export const adamA2FinalReviewExercises: Exercise[] = [
  {
    id: 'adam-a2-review-1', type: 'sequencing', title: 'Rebuild the Story', instructions: 'Put the main stages in story order.', question: 'Order the five stages.',
    sequencingItems: [
      { id: '1', text: 'Adam is created and receives knowledge' },
      { id: '2', text: 'Iblis refuses to respect Adam' },
      { id: '3', text: 'Adam and Eve live in Paradise' },
      { id: '4', text: 'They make a mistake, learn from it and begin life on Earth' },
      { id: '5', text: 'The story moves to Adam’s family and its later lessons' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5'], explanation: 'This activity retrieves the structure of the whole story rather than one isolated fact.',
    feedback: { correct: 'Good. You rebuilt the main sequence.', incorrect: 'Use the chapter order and place one stage at a time.' }
  },
  {
    id: 'adam-a2-review-2', type: 'matching', title: 'Evidence and Lesson', instructions: 'Match each story detail with the simple idea it shows.', question: 'What does each detail help us understand?',
    matchingPairs: [
      { left: 'Soil came from different parts of Earth', right: 'people can be different' },
      { left: 'Adam and Eve decided not to repeat their mistake', right: 'learn from mistakes' },
      { left: 'Habil gave his best offering', right: 'give your best' },
      { left: 'People should stay away from jealousy and control anger', right: 'control yourself' }
    ],
    correctAnswer: {
      'Soil came from different parts of Earth': 'people can be different',
      'Adam and Eve decided not to repeat their mistake': 'learn from mistakes',
      'Habil gave his best offering': 'give your best',
      'People should stay away from jealousy and control anger': 'control yourself'
    },
    explanation: 'The learner connects each story detail with a clear A2 lesson instead of only recalling who did what.',
    feedback: { correct: 'Correct. You connected each story detail with its meaning.', incorrect: 'Read each detail first, then choose the short lesson it shows.' }
  },
  {
    id: 'adam-a2-review-3', type: 'reflection', title: 'Use a Story Lesson', instructions: 'Start with a lesson that really appears in the story, then add one short personal example.',
    question: 'Which lesson from the story could help a student in daily life?', correctAnswer: null,
    explanation: 'A strong reflection identifies a real story lesson and connects it with a realistic action.',
    feedback: { correct: 'Use one accurate story detail to support your idea.', incorrect: 'Choose a lesson that is stated or clearly shown in the story before adding your example.' },
    discussionPrompts: [
      { question: 'How can useful knowledge help a person do good?', mode: 'Individual' },
      { question: 'What can a person do after making a mistake?', mode: 'Pair' },
      { question: 'What is one calm way to manage anger or jealousy?', mode: 'Class' }
    ]
  },
  {
    id: 'adam-a2-review-4', type: 'quiz-game', title: 'Retrieval Quiz', instructions: 'Answer eight different questions from memory. Use a hint only when needed.', question: 'Can you retrieve eight ideas before the Final Challenge?', correctAnswer: null,
    explanation: 'These prompts target different details from the Knowledge Check and Final Challenge.',
    feedback: { correct: 'Good retrieval.', incorrect: 'Use the hint, locate the exact detail, then try again.' },
    hints: ['Use chapter titles to locate the idea.', 'Find the exact sentence before changing an answer.'],
    quizQuestions: [
      { question: 'How did the angels wait after hearing about the new human?', options: [{ text: 'With curiosity', isCorrect: true }, { text: 'With fear', isCorrect: false }, { text: 'Without interest', isCorrect: false }], hint: 'Chapter 1 describes how they waited.' },
      { question: 'How did Iblis describe Adam in Chapter 2?', options: [{ text: 'As an unimportant creature created from clay', isCorrect: true }, { text: 'As amazing and worthy of respect', isCorrect: false }, { text: 'As someone wiser whom he wanted to follow', isCorrect: false }], hint: 'Look at the final sentence of Chapter 2.' },
      { question: 'What did Allah tell Adam to do about Iblis?', options: [{ text: 'Be careful about Iblis', isCorrect: true }, { text: 'Trust Iblis as a friend', isCorrect: false }, { text: 'Forget the warning about Iblis', isCorrect: false }], hint: 'Use the warning in the first paragraph of Chapter 4, not the tree warning.' },
      { question: 'What did Iblis falsely say about himself to Adam and Eve?', options: [{ text: 'He was their friend', isCorrect: true }, { text: 'He had accepted that he was wrong', isCorrect: false }, { text: 'He wanted them to remember the warning', isCorrect: false }], hint: 'Chapter 5 calls this a big lie.' },
      { question: 'Does the story say Adam and Eve made their mistake on purpose?', options: [{ text: 'No', isCorrect: true }, { text: 'Yes', isCorrect: false }, { text: 'The story says nothing about this', isCorrect: false }], hint: 'Find the words “on purpose”.' },
      { question: 'What did Allah give Adam and Eve for life on Earth?', options: [{ text: 'What they needed to manage life on Earth', isCorrect: true }, { text: 'A way to return to the tree', isCorrect: false }, { text: 'A life with no work or responsibility', isCorrect: false }], hint: 'Read the first part of Chapter 6 before the list of activities.' },
      { question: 'What role did Allah give Adam in Chapter 7?', options: [{ text: 'The first Messenger', isCorrect: true }, { text: 'The first farmer', isCorrect: false }, { text: 'The first shepherd', isCorrect: false }], hint: 'Find the sentence naming Adam’s role.' },
      { question: 'What happened to Qabil after his anger cooled?', options: [{ text: 'He felt sad and started to panic', isCorrect: true }, { text: 'He became proud of what happened', isCorrect: false }, { text: 'He immediately forgot his brother', isCorrect: false }], hint: 'Read the beginning of the second paragraph in Chapter 9.' }
    ]
  }
];

// Locked Final distribution:
// 3 multiple choice + 2 true/false + 2 matching + 2 fill blanks + 1 sequencing.
export const adamA2FinalChallengeExercises: Exercise[] = [
  {
    id: 'adam-a2-final-1', type: 'multiple-choice', title: 'Earth: From Role to Action', instructions: 'Choose the statement that correctly connects two parts of the story.',
    question: 'Which statement best connects the opening of the story with Chapter 6?',
    options: [
      'The opening gives humans a role on Earth, and Chapter 6 later gives examples of work and care on Earth',
      'The opening says humans should avoid Earth, and Chapter 6 says they should return to Paradise immediately',
      'The opening says humans have no role on Earth, and Chapter 6 removes every responsibility'
    ], correctAnswer: 0,
    explanation: 'Chapter 1 announces a human role on Earth; Chapter 6 later describes activities and responsibilities there.',
    feedback: { correct: 'Correct. You connected an early idea with its later development.', incorrect: 'Compare the statement about the human role in Chapter 1 with the activity and responsibility list in Chapter 6.' }
  },
  {
    id: 'adam-a2-final-2', type: 'multiple-choice', title: 'Giving One’s Best', instructions: 'Choose the lesson stated after the two offerings.',
    question: 'What lesson does Chapter 8 state after describing Habil’s and Qabil’s offerings?',
    options: ['Real goodness is giving the best and the most loved', 'A person’s job decides whether the person is good', 'The quality and intention behind a gift never matter'], correctAnswer: 0,
    explanation: 'The chapter explicitly states that real goodness is giving the best and the most loved.',
    feedback: { correct: 'Correct.', incorrect: 'Use the final sentence of Chapter 8, not the brothers’ job titles.' }
  },
  {
    id: 'adam-a2-final-3', type: 'multiple-choice', title: 'Iblis’s Plan', instructions: 'Choose the plan stated in Chapter 4.',
    question: 'What did Iblis want to happen to Adam?', options: ['He wanted Adam to lose Allah’s love', 'He wanted Adam to remain careful about Iblis', 'He wanted Adam to keep following Allah’s warning'], correctAnswer: 0,
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
    id: 'adam-a2-final-6', type: 'matching', title: 'Character and Action', instructions: 'Match each brother with the description supported by Chapters 8–9.',
    question: 'Which description belongs to each brother?',
    matchingPairs: [
      { left: 'Habil', right: 'kind and gentle; he chose not to harm his brother' },
      { left: 'Qabil', right: 'mostly jealous; his anger led to a terrible consequence' }
    ],
    correctAnswer: { Habil: 'kind and gentle; he chose not to harm his brother', Qabil: 'mostly jealous; his anger led to a terrible consequence' },
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
    id: 'adam-a2-final-10', type: 'sequencing', title: 'From Temptation to Later Lessons', instructions: 'Put these later events in story order.',
    question: 'Which sequence shows how the later part of the story develops?',
    sequencingItems: [
      { id: '1', text: 'Iblis lies about the tree' },
      { id: '2', text: 'Adam and Eve make a mistake and ask forgiveness' },
      { id: '3', text: 'They begin life on Earth with work and responsibilities' },
      { id: '4', text: 'Habil and Qabil bring different offerings' },
      { id: '5', text: 'A crow later shows Qabil what to do after Habil dies' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'The sequence checks organisation across several chapters rather than another isolated fact.',
    feedback: { correct: 'Correct. You connected five later stages in order.', incorrect: 'Use Chapters 5–9 and place one event at a time.' }
  }
];
