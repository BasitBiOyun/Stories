import { Exercise } from '../../../../types';

export const adamA2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'The Journey of Adam',
    instructions: 'Put the events in the correct order.',
    question: 'Order the story events.',
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'The story follows the creation, the test in Paradise, the mistake, and finally life on Earth.',
    feedback: {
      correct: 'Perfect! You have a great memory of the story sequence.',
      incorrect: 'Some events are in the wrong place. Try again!'
    },
    sequencingItems: [
      { id: '1', text: 'Creation of Adam from soil' },
      { id: '2', text: 'Iblis refuses to show respect' },
      { id: '3', text: 'Life in Paradise with Eve' },
      { id: '4', text: 'The mistake at the forbidden tree' },
      { id: '5', text: 'Life and responsibility on Earth' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Good vs. Bad Behavior',
    instructions: 'Drag the behaviors into the correct category.',
    question: 'Categorize these behaviors.',
    correctAnswer: {
      'GOOD BEHAVIOR': ['Honesty', 'Kindness', 'Regret'],
      'BAD BEHAVIOR': ['Arrogance', 'Jealousy', 'Anger']
    },
    explanation: 'Honesty and kindness are good behaviors taught by prophets, while arrogance and jealousy lead to trouble.',
    feedback: {
      correct: 'Correct! These are important lessons for our lives.',
      incorrect: 'One or more behaviors are in the wrong group.'
    },
    dragDropGroups: [
      { group: 'GOOD BEHAVIOR', items: ['Honesty', 'Kindness', 'Regret'] },
      { group: 'BAD BEHAVIOR', items: ['Arrogance', 'Jealousy', 'Anger'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Deep Thinking',
    instructions: 'Think about these questions and discuss them.',
    question: 'Why is knowledge more important than where we come from (origin)?',
    correctAnswer: null,
    explanation: 'Knowledge allows us to do good and understand Allah\'s creation, regardless of our skin color or origin.',
    feedback: {
      correct: 'Great reflection!',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why is knowledge more important than origin?', mode: 'Individual' },
      { question: 'What can we learn from Habil\'s sincerity?', mode: 'Pair' },
      { question: 'How can we be better caretakers of the Earth?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'The Prophet Adam Challenge',
    instructions: 'Complete the 7-step journey through the story.',
    question: 'Are you ready for the final challenge?',
    correctAnswer: null,
    explanation: 'This game covers all the major points of the story.',
    feedback: {
      correct: 'Congratulations! You are a master of the Story of Adam (pbuh)!',
      incorrect: 'Keep trying! You can do it.'
    },
    hints: ['Think about the origin of Adam', 'Remember the warning in Paradise', 'Consider the two brothers'],
    quizQuestions: [
      {
        question: 'What was Adam (pbuh) created from?',
        options: [
          { text: 'Fire', isCorrect: false },
          { text: 'Soil', isCorrect: true },
          { text: 'Light', isCorrect: false }
        ],
        hint: 'Adam (pbuh) was made from the earth, not fire or light.'
      },
      {
        question: 'Who refused to show respect to Adam?',
        options: [
          { text: 'Angels', isCorrect: false },
          { text: 'Iblis', isCorrect: true },
          { text: 'Eve', isCorrect: false }
        ],
        hint: 'This being was proud and thought fire was better than soil.'
      },
      {
        question: 'What was the name of Adam\'s wife?',
        options: [
          { text: 'Sarah', isCorrect: false },
          { text: 'Hawwa', isCorrect: true },
          { text: 'Hajar', isCorrect: false }
        ],
        hint: 'Her name is very common and means "living one".'
      },
      {
        question: 'What was the warning in Paradise?',
        options: [
          { text: 'Don\'t eat', isCorrect: false },
          { text: 'Don\'t sleep', isCorrect: false },
          { text: 'Don\'t go near the tree', isCorrect: true }
        ],
        hint: 'There was only one thing they were told to avoid.'
      },
      {
        question: 'Who were the two sons of Adam?',
        options: [
          { text: 'Habil and Qabil', isCorrect: true },
          { text: 'Isaac and Ishmael', isCorrect: false },
          { text: 'Jacob and Joseph', isCorrect: false }
        ],
        hint: 'One was a shepherd and the other was a farmer.'
      },
      {
        question: 'What lesson do we learn from Habil?',
        options: [
          { text: 'Jealousy', isCorrect: false },
          { text: 'Sincerity', isCorrect: true },
          { text: 'Anger', isCorrect: false }
        ],
        hint: 'Habil gave his best because he was sincere.'
      },
      {
        question: 'What is the message of all prophets?',
        options: [
          { text: 'Remember Allah', isCorrect: true },
          { text: 'Be rich', isCorrect: false },
          { text: 'Fight others', isCorrect: false }
        ],
        hint: 'All prophets taught us to worship only one God.'
      }
    ]
  }
];
