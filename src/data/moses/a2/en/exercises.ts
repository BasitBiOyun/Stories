import { Exercise } from '../../../../types';

export const mosesA2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'The Journey of Moses',
    instructions: 'Put the events in the correct order.',
    question: 'Order the story events.',
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'The story follows the birth of Moses, his life in the palace, his journey to Midian, his prophethood, and the escape from Egypt.',
    feedback: {
      correct: 'Perfect! You remember the journey of Moses very well.',
      incorrect: 'Some events are in the wrong place. Try again!'
    },
    sequencingItems: [
      { id: '1', text: 'Moses is placed in a basket in the River Nile' },
      { id: '2', text: 'Queen Asiye loves and takes care of baby Moses' },
      { id: '3', text: 'Moses escapes from Egypt and goes to Midian' },
      { id: '4', text: 'Allah speaks to Moses on the mountain' },
      { id: '5', text: 'The sea opens and Moses saves his people' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Good vs. Bad Behavior',
    instructions: 'Drag the behaviors into the correct category.',
    question: 'Categorize these behaviors.',
    correctAnswer: {
      'GOOD BEHAVIOR': ['Kindness', 'Helping the weak', 'Trust in Allah'],
      'BAD BEHAVIOR': ['Cruelty', 'Arrogance', 'Oppression']
    },
    explanation: 'Moses helped weak people and trusted Allah, while Pharaoh was cruel, arrogant, and unfair.',
    feedback: {
      correct: 'Correct! These are important lessons from the story.',
      incorrect: 'One or more behaviors are in the wrong group.'
    },
    dragDropGroups: [
      { group: 'GOOD BEHAVIOR', items: ['Kindness', 'Helping the weak', 'Trust in Allah'] },
      { group: 'BAD BEHAVIOR', items: ['Cruelty', 'Arrogance', 'Oppression'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Deep Thinking',
    instructions: 'Think about these questions and discuss them.',
    question: 'Why should people trust Allah in difficult times?',
    correctAnswer: null,
    explanation: 'The story shows that Allah protected Moses when he was a baby, guided him in Midian, and helped him and his people at the sea.',
    feedback: {
      correct: 'Great reflection!',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why did Moses’s mother trust Allah?', mode: 'Individual' },
      { question: 'What can we learn from Moses helping the two sisters?', mode: 'Pair' },
      { question: 'How did Allah help Moses and his people at the sea?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'The Prophet Moses Challenge',
    instructions: 'Complete the 7-step journey through the story.',
    question: 'Are you ready for the final challenge?',
    correctAnswer: null,
    explanation: 'This game covers the main points of the story of Prophet Moses (pbuh).',
    feedback: {
      correct: 'Congratulations! You are a master of the Story of Moses (pbuh)!',
      incorrect: 'Keep trying! You can do it.'
    },
    hints: ['Think about the River Nile', 'Remember Queen Asiye', 'Think about the sea'],
    quizQuestions: [
      {
        question: 'Where did Moses (pbuh) live more than 3000 years ago?',
        options: [
          { text: 'Egypt', isCorrect: true },
          { text: 'Midian', isCorrect: false },
          { text: 'Jerusalem', isCorrect: false }
        ],
        hint: 'Pharaoh was the king of this country.'
      },
      {
        question: 'Where did Moses’s mother put baby Moses?',
        options: [
          { text: 'In a basket', isCorrect: true },
          { text: 'In a cave', isCorrect: false },
          { text: 'In a palace room', isCorrect: false }
        ],
        hint: 'The basket was carried by the water.'
      },
      {
        question: 'Who loved baby Moses in the palace?',
        options: [
          { text: 'Queen Asiye', isCorrect: true },
          { text: 'The magicians', isCorrect: false },
          { text: 'The soldiers', isCorrect: false }
        ],
        hint: 'She was different from her husband and believed in Allah.'
      },
      {
        question: 'Where did Moses go after he escaped from Egypt?',
        options: [
          { text: 'Midian', isCorrect: true },
          { text: 'Babylon', isCorrect: false },
          { text: 'Palestine', isCorrect: false }
        ],
        hint: 'There he helped two sisters water their sheep.'
      },
      {
        question: 'What did Moses’s walking stick turn into?',
        options: [
          { text: 'A big snake', isCorrect: true },
          { text: 'A bird', isCorrect: false },
          { text: 'A tree', isCorrect: false }
        ],
        hint: 'Allah showed Moses a sign of His power.'
      },
      {
        question: 'What did the magicians say after they saw the miracle?',
        options: [
          { text: 'We believe in the Lord of Moses and Harun', isCorrect: true },
          { text: 'Pharaoh is the most powerful', isCorrect: false },
          { text: 'This is only magic', isCorrect: false }
        ],
        hint: 'They understood that it was not ordinary magic.'
      },
      {
        question: 'How did Allah save Moses and his people?',
        options: [
          { text: 'He opened the sea for them', isCorrect: true },
          { text: 'He gave them a palace', isCorrect: false },
          { text: 'He sent them to sleep', isCorrect: false }
        ],
        hint: 'The waves became high walls.'
      }
    ]
  }
];