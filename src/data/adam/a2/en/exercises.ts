import { Exercise } from '../../../../types';

// Single source of truth for all Adam A2 English learning activities.
// Story prose lives in pages.ts. Nothing in this file rewrites story prose.

export const adamA2QuickChallenges: Record<number, Exercise> = {
  1: {
    id: 'adam-a2-quick-1', type: 'multiple-choice', title: 'Different Lands, Different Colors',
    instructions: 'Choose the answer supported by Chapter 1.',
    question: 'Why does the chapter say people have different skin colors?',
    options: ['The soil came from different parts of Earth', 'The angels chose different colors', 'People changed colors later'],
    correctAnswer: 0,
    explanation: 'The chapter connects soil from different parts of Earth with different human skin colors.',
    feedback: { correct: 'Correct. You connected the cause and result in the chapter.', incorrect: 'Reread the two sentences about soil from different parts of Earth and what comes after them.' }
  },
  2: {
    id: 'adam-a2-quick-2', type: 'fill-blanks', title: 'Show Respect',
    instructions: 'Complete the sentence with one word from Chapter 2.',
    question: 'Complete what Allah told the angels to do.',
    fillBlanksText: 'Show [blank] to Adam.', correctAnswer: 'respect',
    explanation: 'Allah told the angels to show respect to Adam.',
    feedback: { correct: 'Correct. Respect is the key word in this command.', incorrect: 'Find the first command to the angels in Chapter 2.' }
  },
  3: {
    id: 'adam-a2-quick-3', type: 'matching', title: 'Fire and Soil',
    instructions: 'Match each person with the material named in Chapter 3.',
    question: 'What origin does the chapter name for Adam and Iblis?',
    matchingPairs: [{ left: 'Iblis', right: 'fire' }, { left: 'Adam', right: 'soil' }],
    correctAnswer: { Iblis: 'fire', Adam: 'soil' },
    explanation: 'Iblis said he was created from fire and Adam was created from soil.',
    feedback: { correct: 'Correct. You matched the two origins exactly as the chapter states them.', incorrect: 'Reread Iblis’s answer and match each person with the material named there.' }
  },
  4: {
    id: 'adam-a2-quick-4', type: 'multiple-choice', title: 'Adam and Eve',
    instructions: 'Choose the reason stated in Chapter 4.',
    question: 'Why did Allah give Adam a wife?',
    options: ['Adam felt lonely', 'Adam wanted to leave Paradise', 'The angels asked for a new person'], correctAnswer: 0,
    explanation: 'Adam felt lonely in Paradise, so Allah gave him a wife, Eve.',
    feedback: { correct: 'Correct. You found the reason-result link in the chapter.', incorrect: 'Read the sentence just before Eve is introduced and notice how Adam felt.' }
  },
  5: {
    id: 'adam-a2-quick-5', type: 'multiple-choice', title: 'Iblis’s Lie',
    instructions: 'Choose the promise Iblis made in Chapter 5.',
    question: 'What did Iblis tell Adam and Eve about the tree?',
    options: ['They would never die if they ate from it', 'They would become hungry if they ate from it', 'They would forget everything if they ate from it'], correctAnswer: 0,
    explanation: 'Iblis told Adam and Eve that they would never die if they ate from the tree.',
    feedback: { correct: 'Correct. You identified the lie used in the chapter.', incorrect: 'Find the sentence beginning “If you eat from that one tree…” and read the promised result.' }
  },
  6: {
    id: 'adam-a2-quick-6', type: 'tap-reveal', title: 'A New Life on Earth',
    instructions: 'Answer from memory, then reveal the chapter answer.',
    question: 'What happened after Allah forgave Adam and Eve?',
    tapRevealItems: [{ question: 'What happened after Allah forgave Adam and Eve?', answer: 'They began life on Earth.' }],
    correctAnswer: 'They began life on Earth.',
    explanation: 'After Allah forgave them, Adam and Eve began their life on Earth.',
    feedback: { correct: 'Correct. You followed the sequence from forgiveness to life on Earth.', incorrect: 'Read the first sentence of Chapter 6 and follow the order: forgiveness, then what?' }
  },
  7: {
    id: 'adam-a2-quick-7', type: 'fill-blanks', title: 'Adam’s Teaching',
    instructions: 'Complete the first quality in Adam’s teaching list.',
    question: 'Complete the sentence from Chapter 7.',
    fillBlanksText: 'He started teaching people to be [blank], do good, stop bad and always remember Allah.', correctAnswer: 'honest',
    explanation: 'Adam taught people to be honest, do good, stop bad, and remember Allah.',
    feedback: { correct: 'Correct. Honest is the first quality in this teaching list.', incorrect: 'Find the sentence beginning “He started teaching people…” and look at the first quality.' }
  },
  8: {
    id: 'adam-a2-quick-8', type: 'matching', title: 'The Two Offerings',
    instructions: 'Match each brother with the offering described in Chapter 8.',
    question: 'What did each brother bring?',
    matchingPairs: [{ left: 'Habil', right: 'his best and healthiest sheep' }, { left: 'Qabil', right: 'a handful of his crops' }],
    correctAnswer: { Habil: 'his best and healthiest sheep', Qabil: 'a handful of his crops' },
    explanation: 'The chapter contrasts the quality of the two offerings.',
    feedback: { correct: 'Correct. You used the details that prepare the chapter’s lesson about giving one’s best.', incorrect: 'Reread the two sentences describing what Habil and Qabil brought.' }
  },
  9: {
    id: 'adam-a2-quick-9', type: 'true-false', title: 'Habil’s Response',
    instructions: 'Decide whether the statement agrees with Chapter 9.',
    question: 'Habil said he would fight back and harm Qabil.', correctAnswer: false,
    explanation: 'Habil said he would not fight back or harm Qabil.',
    feedback: { correct: 'Correct. Habil refused to answer harm with harm.', incorrect: 'Read Habil’s reply and focus on the words “won’t fight back or harm you”.' }
  },
  10: {
    id: 'adam-a2-quick-10', type: 'multiple-choice', title: 'The Message Continues',
    instructions: 'Choose the answer stated in Chapter 10.',
    question: 'Who spread Adam’s message worldwide after him?',
    options: ['His children and grandchildren', 'Only the angels', 'Only farmers'], correctAnswer: 0,
    explanation: 'The chapter says Adam’s children and grandchildren spread his message worldwide.',
    feedback: { correct: 'Correct. You identified how the message continued.', incorrect: 'Find the sentence about Adam’s children and grandchildren near the end of the story.' }
  }
};

export const adamA2KnowledgeCheckExercises: Exercise[] = [
  {
    id: 'adam-a2-kc-1', type: 'multiple-choice', title: 'Creation', instructions: 'Choose the fact stated in Chapter 1.',
    question: 'What did Allah create Adam from?', options: ['Soil', 'Fire', 'Water'], correctAnswer: 0,
    explanation: 'The opening chapter says Allah created Adam from soil.',
    feedback: { correct: 'Correct.', incorrect: 'Return to the opening paragraph and find the material used for Adam’s creation.' }
  },
  {
    id: 'adam-a2-kc-2', type: 'true-false', title: 'Knowledge and Thinking', instructions: 'Decide whether the sentence agrees with Chapter 2.',
    question: 'Allah gave Adam knowledge and taught him to think.', correctAnswer: true,
    explanation: 'The chapter directly links Adam’s learning and understanding with knowledge and thinking.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the sentence explaining why Adam could learn and understand.' }
  },
  {
    id: 'adam-a2-kc-3', type: 'multiple-choice', title: 'Iblis’s Claim', instructions: 'Choose the reason Iblis gave in Chapter 3.',
    question: 'Why did Iblis say he was better than Adam?', options: ['He was created from fire', 'He knew more names', 'He lived on Earth first'], correctAnswer: 0,
    explanation: 'Iblis used his origin from fire to claim superiority over Adam, who was created from soil.',
    feedback: { correct: 'Correct.', incorrect: 'Read Iblis’s own comparison of fire and soil.' }
  },
  {
    id: 'adam-a2-kc-4', type: 'true-false', title: 'The Warning in Paradise', instructions: 'Decide whether the sentence agrees with Chapter 4.',
    question: 'Adam and Eve were told not to go near one tree.', correctAnswer: true,
    explanation: 'The chapter gives one specific warning about one tree.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the final warning in Chapter 4.' }
  },
  {
    id: 'adam-a2-kc-5', type: 'multiple-choice', title: 'After the Mistake', instructions: 'Choose what the chapter says Adam and Eve did.',
    question: 'What did Adam and Eve do after they understood their mistake?', options: ['They were sorry and asked Allah for forgiveness', 'They said they were right', 'They blamed the angels'], correctAnswer: 0,
    explanation: 'They were sad, said sorry to Allah, learned from the mistake, and decided not to repeat it.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the paragraph after the mistake and notice how they responded.' }
  },
  {
    id: 'adam-a2-kc-6', type: 'multiple-choice', title: 'Life on Earth', instructions: 'Choose an activity stated in Chapter 6.',
    question: 'Which activity is part of life on Earth in the chapter?', options: ['Growing crops and keeping animals', 'Searching for treasure', 'Building ships for travel'], correctAnswer: 0,
    explanation: 'The chapter lists growing crops, keeping animals, building housing, protecting nature, and helping the weak.',
    feedback: { correct: 'Correct.', incorrect: 'Return to the list of activities and responsibilities in Chapter 6.' }
  },
  {
    id: 'adam-a2-kc-7', type: 'multiple-choice', title: 'Habil and Qabil', instructions: 'Choose the correct pair from Chapter 8.',
    question: 'Which pair is correct?', options: ['Habil—shepherd; Qabil—farmer', 'Habil—farmer; Qabil—shepherd', 'Both brothers—farmers'], correctAnswer: 0,
    explanation: 'Habil became a shepherd and Qabil became a farmer.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the first paragraph of Chapter 8.' }
  },
  {
    id: 'adam-a2-kc-8', type: 'true-false', title: 'The Crow', instructions: 'Decide whether the statement agrees with Chapter 9.',
    question: 'A crow showed Qabil how to put his brother’s body in the ground.', correctAnswer: true,
    explanation: 'The crow dug the ground and Qabil understood what to do.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the crow’s action in the final part of Chapter 9.' }
  }
];

export const adamA2VocabularyChallengePairs = [
  { word: 'Messenger', meaning: 'A person who carries a message from Allah' },
  { word: 'arrogant', meaning: 'Thinking that you are more important or better than others' },
  { word: 'regret', meaning: 'Feeling sorry about a mistake' },
  { word: 'shepherd', meaning: 'A person who looks after sheep' },
  { word: 'offering', meaning: 'Something given to Allah' },
  { word: 'jealousy', meaning: 'Feeling unhappy because of what another person has or receives' }
];

export const adamA2FinalReviewExercises: Exercise[] = [
  {
    id: 'adam-a2-review-1', type: 'sequencing', title: 'Follow the Story', instructions: 'Put the main stages in story order.', question: 'Order the main stages.',
    sequencingItems: [
      { id: '1', text: 'Adam is created and receives knowledge' },
      { id: '2', text: 'Iblis refuses to respect Adam' },
      { id: '3', text: 'Adam and Eve live in Paradise' },
      { id: '4', text: 'They make a mistake, learn from it, and begin life on Earth' },
      { id: '5', text: 'The story turns to Adam’s family and later lessons' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'The activity retrieves the whole story structure rather than one isolated fact.',
    feedback: { correct: 'Good. You rebuilt the main sequence.', incorrect: 'Use the chapter order and place one stage at a time.' }
  },
  {
    id: 'adam-a2-review-2', type: 'matching', title: 'People and Their Actions', instructions: 'Match each person with a different action from the story.', question: 'Connect each person to the correct information.',
    matchingPairs: [
      { left: 'Angels', right: 'admired Adam and showed respect' },
      { left: 'Iblis', right: 'said he was a friend although the chapter calls it a lie' },
      { left: 'Adam', right: 'taught people to be honest and do good' },
      { left: 'Habil', right: 'refused to fight back and harm his brother' }
    ],
    correctAnswer: {
      Angels: 'admired Adam and showed respect',
      Iblis: 'said he was a friend although the chapter calls it a lie',
      Adam: 'taught people to be honest and do good',
      Habil: 'refused to fight back and harm his brother'
    },
    explanation: 'The matching activity retrieves character-action relationships from different chapters.',
    feedback: { correct: 'Correct. Each relationship is supported by the story.', incorrect: 'Return to the relevant chapter and check what each person actually did or said.' }
  },
  {
    id: 'adam-a2-review-3', type: 'reflection', title: 'Use a Story Lesson', instructions: 'Start with a lesson stated in the story, then add one short personal example.',
    question: 'Which lesson from the story could help a student in daily life?', correctAnswer: null,
    explanation: 'A strong answer names a real story lesson and connects it to one realistic action.',
    feedback: { correct: 'Use one accurate story detail to support your reflection.', incorrect: 'Choose a lesson stated in the story first, then give your own example.' },
    discussionPrompts: [
      { question: 'How can useful knowledge help a person do good?', mode: 'Individual' },
      { question: 'What can a person do after making a mistake?', mode: 'Pair' },
      { question: 'What is one peaceful way to control anger or jealousy?', mode: 'Class' }
    ]
  },
  {
    id: 'adam-a2-review-4', type: 'quiz-game', title: 'Retrieval Quiz', instructions: 'Answer eight questions from memory. Use the hint only when needed.', question: 'Can you retrieve eight different ideas before the Final Challenge?', correctAnswer: null,
    explanation: 'These eight prompts deliberately avoid repeating the Knowledge Check and Final Challenge questions.',
    feedback: { correct: 'Good retrieval.', incorrect: 'Use the hint, return to the exact chapter detail, then try again.' },
    hints: ['Use chapter titles to locate the idea.', 'Find the exact sentence before changing your answer.'],
    quizQuestions: [
      { question: 'How did the angels wait after hearing that a human would be created?', options: [{ text: 'With curiosity', isCorrect: true }, { text: 'With anger', isCorrect: false }, { text: 'Without interest', isCorrect: false }], hint: 'Chapter 1 describes how they waited.' },
      { question: 'How did the angels react to Adam in Chapter 2?', options: [{ text: 'They admired and respected him', isCorrect: true }, { text: 'They ignored him', isCorrect: false }, { text: 'They became jealous', isCorrect: false }], hint: 'Look at the reaction after Adam showed his knowledge.' },
      { question: 'Why was Eve given to Adam?', options: [{ text: 'Adam felt lonely', isCorrect: true }, { text: 'Adam wanted a farm', isCorrect: false }, { text: 'Iblis asked for it', isCorrect: false }], hint: 'Chapter 4 gives a direct reason.' },
      { question: 'What did Iblis falsely say about himself to Adam and Eve?', options: [{ text: 'He was their friend', isCorrect: true }, { text: 'He was their son', isCorrect: false }, { text: 'He was their teacher', isCorrect: false }], hint: 'Chapter 5 calls this a big lie.' },
      { question: 'Was Adam and Eve’s mistake described as being on purpose?', options: [{ text: 'No', isCorrect: true }, { text: 'Yes', isCorrect: false }, { text: 'The story gives no answer', isCorrect: false }], hint: 'Find the sentence with “on purpose”.' },
      { question: 'Which two responsibilities are named together in Chapter 6?', options: [{ text: 'Protect nature and help the weak', isCorrect: true }, { text: 'Collect gold and build ships', isCorrect: false }, { text: 'Avoid work and live alone', isCorrect: false }], hint: 'Look at the responsibility list.' },
      { question: 'What role did Allah give Adam in Chapter 7?', options: [{ text: 'The first Messenger', isCorrect: true }, { text: 'The first farmer', isCorrect: false }, { text: 'The first king', isCorrect: false }], hint: 'Find the sentence beginning “Then Allah made Adam…”' },
      { question: 'What kind of sheep did Habil bring as an offering?', options: [{ text: 'His best and healthiest sheep', isCorrect: true }, { text: 'His weakest sheep', isCorrect: false }, { text: 'No sheep', isCorrect: false }], hint: 'Chapter 8 describes the quality of Habil’s gift.' }
    ]
  }
];

// Locked Final Challenge distribution:
// 3 multiple-choice + 2 true-false + 2 matching + 2 fill-blanks + 1 sequencing.
export const adamA2FinalChallengeExercises: Exercise[] = [
  {
    id: 'adam-a2-final-1', type: 'multiple-choice', title: 'Responsibility on Earth', instructions: 'Choose the idea stated at the beginning of the story.',
    question: 'What role does the story give humans on Earth?', options: ['Be responsible for life on Earth', 'Live only in the sky', 'Stay away from all work'], correctAnswer: 0,
    explanation: 'The story presents the human role on Earth as a responsibility.',
    feedback: { correct: 'Correct.', incorrect: 'Return to what Allah told the angels before Adam was created.' }
  },
  {
    id: 'adam-a2-final-2', type: 'multiple-choice', title: 'Real Value', instructions: 'Choose the idea supported by Chapter 3.',
    question: 'What does the chapter say about origin and a person’s value?', options: ['Clay or fire does not make a person valuable by itself', 'Being created from fire always makes someone better', 'Origin is the only thing that gives value'], correctAnswer: 0,
    explanation: 'The chapter rejects Iblis’s idea that material of origin decides a person’s value.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the sentence beginning “For Allah”.' }
  },
  {
    id: 'adam-a2-final-3', type: 'multiple-choice', title: 'Iblis’s Plan', instructions: 'Choose the plan stated in Chapter 4.',
    question: 'What did Iblis want to happen to Adam?', options: ['He wanted Adam to lose Allah’s love', 'He wanted Adam to become wiser', 'He wanted Adam to stay safe from every danger'], correctAnswer: 0,
    explanation: 'The chapter says Iblis wanted Adam to lose Allah’s love and mercy.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sentence that explains Iblis’s plan.' }
  },
  {
    id: 'adam-a2-final-4', type: 'true-false', title: 'Learning from a Mistake', instructions: 'Decide whether the sentence agrees with Chapter 5.',
    question: 'Adam and Eve learned from their mistake and decided not to repeat it.', correctAnswer: true,
    explanation: 'The chapter directly says they learned from the mistake and decided never to repeat it.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the end of the mistake-and-forgiveness paragraph.' }
  },
  {
    id: 'adam-a2-final-5', type: 'true-false', title: 'Daily Life', instructions: 'Decide whether the statement agrees with Chapter 6.',
    question: 'Iblis wanted people not to remember Allah in their daily lives.', correctAnswer: true,
    explanation: 'The chapter states this as Iblis’s continuing aim on Earth.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the final idea about Iblis in Chapter 6.' }
  },
  {
    id: 'adam-a2-final-6', type: 'matching', title: 'Earth Responsibilities', instructions: 'Match each group with the action stated in Chapter 6.',
    question: 'How should people care for life on Earth according to the chapter?',
    matchingPairs: [{ left: 'Nature', right: 'protect it' }, { left: 'The weak', right: 'help them' }],
    correctAnswer: { Nature: 'protect it', 'The weak': 'help them' },
    explanation: 'The chapter names protecting nature and helping the weak as responsibilities.',
    feedback: { correct: 'Correct.', incorrect: 'Find the responsibility list and match each object with its verb.' }
  },
  {
    id: 'adam-a2-final-7', type: 'matching', title: 'Lessons at the End', instructions: 'Match each idea with the action advised in Chapter 10.',
    question: 'Connect each idea to the positive action in the final chapter.',
    matchingPairs: [{ left: 'Jealousy', right: 'stay away from it' }, { left: 'Anger', right: 'control it' }, { left: 'Other people', right: 'be kind to them' }],
    correctAnswer: { Jealousy: 'stay away from it', Anger: 'control it', 'Other people': 'be kind to them' },
    explanation: 'The final chapter turns the story into clear behavioural advice.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the advice sentences in Chapter 10 and match each noun with its action.' }
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
      { id: '3', text: 'They begin life on Earth with responsibilities' },
      { id: '4', text: 'Habil and Qabil bring different offerings' },
      { id: '5', text: 'A crow later shows Qabil what to do after Habil dies' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'The sequence checks whole-story organisation rather than another isolated detail.',
    feedback: { correct: 'Correct. You connected five later stages in order.', incorrect: 'Use Chapters 5–9 and place one event at a time.' }
  }
];
