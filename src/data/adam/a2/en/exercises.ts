import { Exercise } from '../../../../types';

/**
 * Adam A2 post-reading material.
 *
 * Pedagogical intent:
 * - reinforce and reteach before measuring;
 * - keep every answer recoverable from the unchanged canonical story;
 * - use short informative-essay-style questions rather than trick questions;
 * - make feedback send learners back to the relevant idea in the text.
 */

export const adamA2KnowledgeCheckExercises: Exercise[] = [
  {
    id: 'kc-1',
    type: 'multiple-choice',
    title: 'Remember the Beginning',
    instructions: 'Choose the answer that completes the idea from the story.',
    question: 'What did Allah create Adam (pbuh) from?',
    options: ['Soil', 'Fire', 'Water'],
    correctAnswer: 0,
    explanation: 'The opening chapter says that Allah created Adam (pbuh) from soil.',
    feedback: {
      correct: 'Yes. Adam (pbuh) was created from soil.',
      incorrect: 'Return to the opening chapter and find the sentence about Adam’s creation.'
    }
  },
  {
    id: 'kc-2',
    type: 'true-false',
    title: 'Knowledge and Respect',
    instructions: 'Decide if the sentence agrees with the story.',
    question: 'Allah gave Adam knowledge and taught him to think.',
    correctAnswer: true,
    explanation: 'The story explains that Adam could learn and understand because Allah gave him knowledge.',
    feedback: {
      correct: 'Correct. Knowledge is a key idea in this part of the story.',
      incorrect: 'Read the part about why Adam could learn and understand.'
    }
  },
  {
    id: 'kc-3',
    type: 'multiple-choice',
    title: 'Iblis and Pride',
    instructions: 'Choose the reason stated in the story.',
    question: 'Why did Iblis say that he was better than Adam?',
    options: ['He was created from fire', 'He knew more names', 'He lived on Earth first'],
    correctAnswer: 0,
    explanation: 'Iblis compared his origin from fire with Adam’s origin from soil.',
    feedback: {
      correct: 'Correct. Iblis focused on being created from fire.',
      incorrect: 'Look again at Iblis’s answer when Allah asked why he did not respect Adam.'
    }
  },
  {
    id: 'kc-4',
    type: 'true-false',
    title: 'The Warning in Paradise',
    instructions: 'Decide if the sentence agrees with the story.',
    question: 'Adam and Eve were told not to go near one tree.',
    correctAnswer: true,
    explanation: 'The story says that they could enjoy Paradise, but there was one warning about one tree.',
    feedback: {
      correct: 'Yes. The warning was about one tree.',
      incorrect: 'Return to the end of the chapter about Paradise and find the one warning.'
    }
  },
  {
    id: 'kc-5',
    type: 'multiple-choice',
    title: 'After the Mistake',
    instructions: 'Choose what happened next in the story.',
    question: 'What did Adam and Eve do after they understood their mistake?',
    options: ['They said sorry to Allah', 'They said they were not wrong', 'They blamed the angels'],
    correctAnswer: 0,
    explanation: 'They were sad about their action, said sorry to Allah, and decided not to repeat the mistake.',
    feedback: {
      correct: 'Correct. The chapter connects regret with learning from a mistake.',
      incorrect: 'Read the sentences after they ate from the tree and notice how they reacted.'
    }
  },
  {
    id: 'kc-6',
    type: 'multiple-choice',
    title: 'Life on Earth',
    instructions: 'Choose the activity mentioned in the story.',
    question: 'Which activity is part of Adam and Eve’s life on Earth in the text?',
    options: ['Growing crops and keeping animals', 'Building ships for travel', 'Looking for treasure'],
    correctAnswer: 0,
    explanation: 'The Earth chapter mentions growing crops, keeping animals, building housing, protecting nature, and helping the weak.',
    feedback: {
      correct: 'Yes. The text gives farming and caring for the Earth as examples.',
      incorrect: 'Return to the Earth chapter and find the list of things people were going to do.'
    }
  },
  {
    id: 'kc-7',
    type: 'multiple-choice',
    title: 'Habil and Qabil',
    instructions: 'Choose the correct pair from the story.',
    question: 'Which pair is correct?',
    options: ['Habil—shepherd; Qabil—farmer', 'Habil—farmer; Qabil—shepherd', 'Habil—builder; Qabil—teacher'],
    correctAnswer: 0,
    explanation: 'The story says that Habil became a shepherd and Qabil became a farmer.',
    feedback: {
      correct: 'Correct. Their different work is stated directly in the chapter.',
      incorrect: 'Read the first paragraph of the Habil and Qabil chapter again.'
    }
  },
  {
    id: 'kc-8',
    type: 'true-false',
    title: 'The Crow',
    instructions: 'Decide if the sentence agrees with the story.',
    question: 'A crow showed Qabil how to put his brother’s dead body in the ground.',
    correctAnswer: true,
    explanation: 'The story says that the crow landed near Qabil and started digging the ground.',
    feedback: {
      correct: 'Correct. The crow’s action showed Qabil what to do.',
      incorrect: 'Return to the final part of the chapter and follow what the crow did.'
    }
  }
];

export const adamA2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'Follow the Story',
    instructions: 'Put these events in the order used by the story.',
    question: 'Order the main stages.',
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'The story moves from Adam’s creation and knowledge to Paradise, the mistake, life on Earth, and later family events.',
    feedback: {
      correct: 'Good. You followed the main sequence of the informative story.',
      incorrect: 'Use the chapter order to rebuild the sequence one stage at a time.'
    },
    sequencingItems: [
      { id: '1', text: 'Adam is created from soil and receives knowledge' },
      { id: '2', text: 'Iblis refuses to respect Adam' },
      { id: '3', text: 'Adam and Eve live in Paradise and receive one warning' },
      { id: '4', text: 'Adam and Eve make a mistake, regret it, and later live on Earth' },
      { id: '5', text: 'The story tells about Habil, Qabil, and Adam’s later life' }
    ]
  },
  {
    id: 'final-2',
    type: 'matching',
    title: 'Match the Person and Information',
    instructions: 'Match each person with information stated in the story.',
    question: 'Connect each name to the correct information.',
    correctAnswer: {
      'Adam': 'was given knowledge and became the first Messenger',
      'Iblis': 'was proud of being created from fire',
      'Habil': 'was a shepherd and gave his best sheep',
      'Qabil': 'was a farmer and became jealous'
    },
    explanation: 'These details are stated across the chapters and help learners recall the main people and their roles.',
    feedback: {
      correct: 'Correct. Each person is matched with information from the story.',
      incorrect: 'Return to the chapters and find what the text says about each person.'
    },
    matchingPairs: [
      { left: 'Adam', right: 'was given knowledge and became the first Messenger' },
      { left: 'Iblis', right: 'was proud of being created from fire' },
      { left: 'Habil', right: 'was a shepherd and gave his best sheep' },
      { left: 'Qabil', right: 'was a farmer and became jealous' }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Think About the Information',
    instructions: 'Use the story first. Then add your own short idea.',
    question: 'Which lesson from the story is easiest to use in daily life?',
    correctAnswer: null,
    explanation: 'A reflection answer should begin with an idea that is actually present in the story and then explain a personal connection.',
    feedback: {
      correct: 'Use one detail from the story to support your reflection.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'The story says useful knowledge helps people do good. How can knowledge help you?', mode: 'Individual' },
      { question: 'Habil gave his best. What does this detail teach about effort?', mode: 'Pair' },
      { question: 'The story tells people to control jealousy and anger. What is one peaceful action a person can take?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'The Prophet Adam Challenge',
    instructions: 'Use the story to recall eight key ideas. If you are unsure, return to the relevant chapter and try again.',
    question: 'Can you rebuild the main information from the story?',
    correctAnswer: null,
    explanation: 'This review is designed to reinforce important information before the final challenge.',
    feedback: {
      correct: 'Good work. You recalled the information from the story.',
      incorrect: 'Use the chapter as support. Find the related sentence, then try again.'
    },
    hints: ['Use the chapter titles to locate the information.', 'Look for the sentence that directly answers the question.', 'Treat a wrong answer as a signal to reread, not as a final score.'],
    quizQuestions: [
      {
        question: 'What was Adam (pbuh) created from?',
        options: [
          { text: 'Soil', isCorrect: true },
          { text: 'Fire', isCorrect: false },
          { text: 'Water', isCorrect: false }
        ],
        hint: 'Return to the opening chapter and find the material used in Adam’s creation.'
      },
      {
        question: 'What did Allah give Adam that helped him learn and understand?',
        options: [
          { text: 'Knowledge', isCorrect: true },
          { text: 'Gold', isCorrect: false },
          { text: 'A farm', isCorrect: false }
        ],
        hint: 'Look at the chapter about knowledge and respect.'
      },
      {
        question: 'What did Iblis say about his own origin?',
        options: [
          { text: 'He was created from fire', isCorrect: true },
          { text: 'He was created from soil', isCorrect: false },
          { text: 'He was created from water', isCorrect: false }
        ],
        hint: 'Read Iblis’s answer about fire and soil.'
      },
      {
        question: 'What was the one warning in Paradise?',
        options: [
          { text: 'Do not go near one tree', isCorrect: true },
          { text: 'Do not speak to the angels', isCorrect: false },
          { text: 'Do not sleep', isCorrect: false }
        ],
        hint: 'The warning appears at the end of the Paradise chapter.'
      },
      {
        question: 'How did Adam and Eve react after their mistake?',
        options: [
          { text: 'They were sad and said sorry to Allah', isCorrect: true },
          { text: 'They said they were right', isCorrect: false },
          { text: 'They forgot the event immediately', isCorrect: false }
        ],
        hint: 'Look for the words about regret and saying sorry.'
      },
      {
        question: 'Which work did Habil do?',
        options: [
          { text: 'He was a shepherd', isCorrect: true },
          { text: 'He was a farmer', isCorrect: false },
          { text: 'He was a builder', isCorrect: false }
        ],
        hint: 'The Habil and Qabil chapter gives both brothers’ work.'
      },
      {
        question: 'What did the crow do near Qabil?',
        options: [
          { text: 'It started digging the ground', isCorrect: true },
          { text: 'It carried crops away', isCorrect: false },
          { text: 'It brought a sheep', isCorrect: false }
        ],
        hint: 'Read the last part of the chapter about the first crime.'
      },
      {
        question: 'What did Adam and Eve teach their children to do?',
        options: [
          { text: 'Behave well and remember Allah', isCorrect: true },
          { text: 'Stay away from all work', isCorrect: false },
          { text: 'Follow Iblis', isCorrect: false }
        ],
        hint: 'Return to the chapter about the first Messenger.'
      }
    ]
  }
];

export const adamA2FinalChallengeExercises: Exercise[] = [
  {
    id: 'fc-1',
    type: 'multiple-choice',
    title: 'Final Recall 1',
    instructions: 'Choose the answer stated in the story.',
    question: 'What did Allah create Adam (pbuh) from?',
    options: ['Soil', 'Fire', 'Light'],
    correctAnswer: 0,
    explanation: 'The story begins by explaining that Adam (pbuh) was created from soil.',
    feedback: { correct: 'Correct. This is the starting fact of the story.', incorrect: 'Return to Chapter 1 and find the sentence about Adam’s creation.' }
  },
  {
    id: 'fc-2',
    type: 'multiple-choice',
    title: 'Final Recall 2',
    instructions: 'Choose the answer stated in the story.',
    question: 'What made Adam able to learn and understand?',
    options: ['Knowledge from Allah', 'His physical strength', 'Living longer than others'],
    correctAnswer: 0,
    explanation: 'The story connects Adam’s ability to learn and think with the knowledge Allah gave him.',
    feedback: { correct: 'Correct. Knowledge is one of the central ideas of the story.', incorrect: 'Return to Chapter 2 and reread the sentences about learning and thinking.' }
  },
  {
    id: 'fc-3',
    type: 'true-false',
    title: 'Final Recall 3',
    instructions: 'Decide if the sentence agrees with the story.',
    question: 'Iblis thought being created from fire made him better than Adam.',
    correctAnswer: true,
    explanation: 'Iblis compared fire with soil and used this comparison to claim that he was better.',
    feedback: { correct: 'Correct. This statement recalls Iblis’s argument in the story.', incorrect: 'Read Iblis’s answer in Chapter 3 and compare fire with soil.' }
  },
  {
    id: 'fc-4',
    type: 'multiple-choice',
    title: 'Final Recall 4',
    instructions: 'Choose the answer stated in the story.',
    question: 'What warning did Adam and Eve receive in Paradise?',
    options: ['Do not go near one tree', 'Do not speak to each other', 'Do not leave one room'],
    correctAnswer: 0,
    explanation: 'The story states one warning: they were not to go near one tree.',
    feedback: { correct: 'Correct. You recalled the one warning in Paradise.', incorrect: 'Return to Chapter 4 and find the final sentence.' }
  },
  {
    id: 'fc-5',
    type: 'multiple-choice',
    title: 'Final Recall 5',
    instructions: 'Choose the answer stated in the story.',
    question: 'What did Iblis tell Adam and Eve about the tree?',
    options: ['If they ate from it, they would never die', 'If they ate from it, they would become farmers', 'If they ate from it, they would return to Earth'],
    correctAnswer: 0,
    explanation: 'The chapter calls this statement a lie used by Iblis.',
    feedback: { correct: 'Correct. This was the lie used in the chapter.', incorrect: 'Return to Chapter 5 and reread what Iblis softly told them.' }
  },
  {
    id: 'fc-6',
    type: 'true-false',
    title: 'Final Recall 6',
    instructions: 'Decide if the sentence agrees with the story.',
    question: 'Adam and Eve were sorry for their mistake and decided not to repeat it.',
    correctAnswer: true,
    explanation: 'The story says that they were sad, said sorry to Allah, learned from the mistake, and decided not to repeat it.',
    feedback: { correct: 'Correct. This is how the story describes their response.', incorrect: 'Read the paragraph about regret in Chapter 5 again.' }
  },
  {
    id: 'fc-7',
    type: 'multiple-choice',
    title: 'Final Recall 7',
    instructions: 'Choose an example stated in the story.',
    question: 'Which activity is mentioned as part of life on Earth?',
    options: ['Growing crops and keeping animals', 'Searching for hidden gold', 'Building a palace in Paradise'],
    correctAnswer: 0,
    explanation: 'The Earth chapter lists growing crops and keeping animals among human responsibilities.',
    feedback: { correct: 'Correct. This example comes directly from Chapter 6.', incorrect: 'Return to Chapter 6 and find the list of activities on Earth.' }
  },
  {
    id: 'fc-8',
    type: 'multiple-choice',
    title: 'Final Recall 8',
    instructions: 'Choose the correct pair from the story.',
    question: 'Which statement about Habil and Qabil is correct?',
    options: ['Habil was a shepherd and Qabil was a farmer', 'Habil was a farmer and Qabil was a shepherd', 'Both brothers were shepherds'],
    correctAnswer: 0,
    explanation: 'The story identifies Habil as a shepherd and Qabil as a farmer.',
    feedback: { correct: 'Correct. You recalled the brothers’ work.', incorrect: 'Return to Chapter 8 and reread the first paragraph.' }
  },
  {
    id: 'fc-9',
    type: 'multiple-choice',
    title: 'Final Recall 9',
    instructions: 'Choose what happened in the story.',
    question: 'How did the crow help Qabil understand what to do?',
    options: ['It started digging the ground', 'It carried his crops', 'It brought another person'],
    correctAnswer: 0,
    explanation: 'The crow landed near Qabil and dug the ground, showing him what to do with his brother’s body.',
    feedback: { correct: 'Correct. The crow taught through its action.', incorrect: 'Return to Chapter 9 and follow the crow’s action.' }
  },
  {
    id: 'fc-10',
    type: 'multiple-choice',
    title: 'Final Recall 10',
    instructions: 'Choose the idea stated at the end of the story.',
    question: 'What message did Adam’s children and grandchildren continue to spread?',
    options: ['Love and respect Allah and be kind to others', 'Become richer than other people', 'Avoid helping weak people'],
    correctAnswer: 0,
    explanation: 'The final chapter says that the message advises people to love and respect Allah and to be well-behaved and kind to others.',
    feedback: { correct: 'Correct. This is one of the closing ideas of the story.', incorrect: 'Return to Chapter 10 and reread the paragraph about Adam’s children and grandchildren.' }
  }
];
