import { Exercise } from '../../../../types';

export const mosesA2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'Moses’s Journey',
    instructions: 'Put the main events in the correct order.',
    question: 'How did Moses’s journey develop?',
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'The story moves from the Nile and palace to Midian, then to Moses’s mission and the safe crossing of the sea.',
    feedback: {
      correct: 'Correct. You followed the main turning points across the whole story.',
      incorrect: 'Start with baby Moses, then follow where he lived, travelled, received his mission, and finally led his people.'
    },
    sequencingItems: [
      { id: '1', text: 'Baby Moses is placed in a basket on the River Nile' },
      { id: '2', text: 'Moses grows up safely in Pharaoh’s house' },
      { id: '3', text: 'Moses leaves Egypt and begins a new life in Midian' },
      { id: '4', text: 'Allah speaks to Moses and sends him with a message to Pharaoh' },
      { id: '5', text: 'Moses and his people walk safely through the opened sea' }
    ]
  },
  {
    id: 'final-2',
    type: 'matching',
    title: 'People and Actions',
    instructions: 'Match each person or group with the action supported by the story.',
    question: 'Who did what in the story?',
    correctAnswer: {
      'Moses’s mother': 'trusted Allah and placed baby Moses in the basket',
      'Queen Asiye': 'cared for baby Moses in the palace',
      'Moses': 'helped the two sisters at the well',
      'The magicians': 'believed in the Lord of Moses and Harun'
    },
    explanation: 'Each match connects a person or group with an important action from a different part of the story.',
    feedback: {
      correct: 'Correct. You connected four people or groups with the actions that define their part in the story.',
      incorrect: 'Think about four different places: the Nile, the palace, the well in Midian, and the magicians’ meeting.'
    },
    matchingPairs: [
      { left: 'Moses’s mother', right: 'trusted Allah and placed baby Moses in the basket' },
      { left: 'Queen Asiye', right: 'cared for baby Moses in the palace' },
      { left: 'Moses', right: 'helped the two sisters at the well' },
      { left: 'The magicians', right: 'believed in the Lord of Moses and Harun' }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Evidence and Lessons',
    instructions: 'Think about the story and support each answer with a chapter detail.',
    question: 'What can we learn from the choices and responses in Moses’s story?',
    correctAnswer: null,
    explanation: 'Good reflection stays connected to the story: trust in difficult moments, helping people in need, and responding to truth are shown through clear events.',
    feedback: {
      correct: 'Good reflection. Keep your answer connected to a clear story event.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'What detail shows Moses’s mother trusted Allah even when she was worried?', mode: 'Individual' },
      { question: 'What does Moses do when he sees that the two sisters need help?', mode: 'Pair' },
      { question: 'How are the magicians’ response and Pharaoh’s response different after the signs?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'Moses A2 Retrieval Challenge',
    instructions: 'Answer eight questions from different parts of the story.',
    question: 'Can you retrieve the key ideas without rereading everything?',
    correctAnswer: null,
    explanation: 'The eight questions revisit important people, decisions, places, and turning points from across the story.',
    feedback: {
      correct: 'Well done. You retrieved the main story ideas across the whole book.',
      incorrect: 'Use the hint to return to the right part of the story, then try again.'
    },
    hints: ['Think about the Nile and palace', 'Remember Midian', 'Remember the signs and the sea'],
    quizQuestions: [
      {
        question: 'Who followed the basket after Moses’s mother put it in the river?',
        options: [
          { text: 'Moses’s sister', isCorrect: true },
          { text: 'A magician', isCorrect: false },
          { text: 'Pharaoh', isCorrect: false }
        ],
        hint: 'His mother asked a member of the family to watch where the basket went.'
      },
      {
        question: 'What did Queen Asiye ask her servants to find for baby Moses?',
        options: [
          { text: 'A nurse', isCorrect: true },
          { text: 'A soldier', isCorrect: false },
          { text: 'A magician', isCorrect: false }
        ],
        hint: 'The baby needed someone to feed and care for him.'
      },
      {
        question: 'Why did Moses leave Egypt after the bazaar incident?',
        options: [
          { text: 'Pharaoh’s soldiers were looking for him', isCorrect: true },
          { text: 'He wanted to become a magician', isCorrect: false },
          { text: 'The River Nile became dry', isCorrect: false }
        ],
        hint: 'A man warned Moses about danger in the city.'
      },
      {
        question: 'What did Moses find when he reached Midian tired and thirsty?',
        options: [
          { text: 'A well with shepherds nearby', isCorrect: true },
          { text: 'Pharaoh’s palace', isCorrect: false },
          { text: 'A road through the sea', isCorrect: false }
        ],
        hint: 'He was looking for water.'
      },
      {
        question: 'Why did Moses accept Şuayb’s job offer?',
        options: [
          { text: 'He was a stranger and needed a job and a house', isCorrect: true },
          { text: 'He wanted to rule Midian', isCorrect: false },
          { text: 'He wanted to join Pharaoh’s army', isCorrect: false }
        ],
        hint: 'Think about what Moses needed after arriving in a new place.'
      },
      {
        question: 'Which two signs did Moses show in Pharaoh’s palace?',
        options: [
          { text: 'The stick became a snake and his hand shone white', isCorrect: true },
          { text: 'The Nile disappeared and the palace moved', isCorrect: false },
          { text: 'A basket flew and a well opened', isCorrect: false }
        ],
        hint: 'One sign involved his walking stick and the other involved his hand.'
      },
      {
        question: 'What did the magicians say after seeing Moses’s sign?',
        options: [
          { text: 'We believe in the Lord of Moses and Harun', isCorrect: true },
          { text: 'Pharaoh opened the sea', isCorrect: false },
          { text: 'We will return to Midian', isCorrect: false }
        ],
        hint: 'Their response changed after they saw what happened.'
      },
      {
        question: 'What was in front of Moses’s people when Pharaoh’s army was behind them?',
        options: [
          { text: 'The sea', isCorrect: true },
          { text: 'The palace', isCorrect: false },
          { text: 'The well', isCorrect: false }
        ],
        hint: 'They thought there was no place to escape.'
      }
    ]
  }
];