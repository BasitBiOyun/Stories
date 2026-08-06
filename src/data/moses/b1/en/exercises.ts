import { Exercise } from '../../../../types';

export const mosesB1FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'The Journey of Moses',
    instructions: 'Put the events in the correct order.',
    question: 'Order the main events of the story.',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The story begins with Pharaoh’s fear, continues with Moses’s birth and escape, then his prophethood, the miracles, and finally the crossing of the Red Sea.',
    feedback: {
      correct: 'Excellent! You understand the full journey of Prophet Moses (pbuh).',
      incorrect: 'Some events are not in the correct order. Read the story timeline again.'
    },
    sequencingItems: [
      { id: '1', text: 'Pharaoh fears the Children of Israel and orders newborn boys to be killed' },
      { id: '2', text: 'Moses’s mother places baby Moses in a basket in the River Nile' },
      { id: '3', text: 'The palace servants find baby Moses and Queen Asiye loves and decides to protect him' },
      { id: '4', text: 'Moses escapes from Egypt and begins a simple life in Midian' },
      { id: '5', text: 'Allah speaks to Moses on the mountain and gives him signs' },
      { id: '6', text: 'Allah opens the Red Sea and Pharaoh drowns with his army' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Character Traits',
    instructions: 'Drag the traits into the correct character group.',
    question: 'Match the traits with the correct characters.',
    correctAnswer: {
      'MOSES': ['Helpful', 'Regretful', 'Trusting Allah'],
      'PHARAOH': ['Arrogant', 'Cruel', 'Dictatorial'],
      'QUEEN ASIYE': ['Kind-hearted', 'Courageous', 'Merciful']
    },
    explanation: 'Moses is shown as helpful and repentant. Pharaoh is cruel and arrogant. Queen Asiye is kind-hearted and brave.',
    feedback: {
      correct: 'Correct! You matched the character traits very well.',
      incorrect: 'Some traits are in the wrong group. Think about each character’s actions.'
    },
    dragDropGroups: [
      { group: 'MOSES', items: ['Helpful', 'Regretful', 'Trusting Allah'] },
      { group: 'PHARAOH', items: ['Arrogant', 'Cruel', 'Dictatorial'] },
      { group: 'QUEEN ASIYE', items: ['Kind-hearted', 'Courageous', 'Merciful'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Deep Thinking',
    instructions: 'Think about these questions and discuss them.',
    question: 'What is the most important lesson of the story of Prophet Moses (pbuh)?',
    correctAnswer: null,
    explanation: 'Students may mention trust in Allah, justice, courage, helping the weak, asking for forgiveness, or resisting oppression.',
    feedback: {
      correct: 'Great reflection! You connected the story to its deeper message.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why was Pharaoh’s arrogance dangerous?', mode: 'Individual' },
      { question: 'What can we learn from Moses helping the two sisters?', mode: 'Pair' },
      { question: 'How does the story teach us to trust Allah in difficult times?', mode: 'Class' },
      { question: 'Why is it wrong for one human being to enslave another human being?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'The Prophet Moses B1 Challenge',
    instructions: 'Complete the 10-question challenge about the story.',
    question: 'Are you ready for the final B1 challenge?',
    correctAnswer: null,
    explanation: 'This game reviews the main events, vocabulary, characters, and moral lessons of the B1 story of Prophet Moses (pbuh).',
    feedback: {
      correct: 'Congratulations! You have mastered the B1 Story of Prophet Moses (pbuh)!',
      incorrect: 'Keep trying! Review the chapters and try again.'
    },
    hints: [
      'Think about Pharaoh’s fear and dream',
      'Remember the River Nile and Queen Asiye',
      'Think about Midian, the mountain, and the Red Sea'
    ],
    quizQuestions: [
      {
        question: 'Why was Pharaoh afraid of the Children of Israel?',
        options: [
          { text: 'Because they were larger than the Egyptians and might take control of his kingdom', isCorrect: true },
          { text: 'Because they wanted to leave Egypt immediately', isCorrect: false },
          { text: 'Because they were magicians', isCorrect: false }
        ],
        hint: 'Pharaoh feared losing control of his kingdom.'
      },
      {
        question: 'What did Pharaoh see in his dream?',
        options: [
          { text: 'A fire coming from Jerusalem', isCorrect: true },
          { text: 'A snake in his palace', isCorrect: false },
          { text: 'A basket in the River Nile', isCorrect: false }
        ],
        hint: 'The dream involved fire and the houses of Egyptians.'
      },
      {
        question: 'Where did Moses’s mother put baby Moses?',
        options: [
          { text: 'In a basket in the River Nile', isCorrect: true },
          { text: 'In a cave near Midian', isCorrect: false },
          { text: 'In the palace garden', isCorrect: false }
        ],
        hint: 'The waters carried the basket away.'
      },
      {
        question: 'Who found the basket with baby Moses near the palace?',
        options: [
          { text: 'The palace servants', isCorrect: true },
          { text: 'The magicians', isCorrect: false },
          { text: 'The shepherds of Midian', isCorrect: false }
        ],
        hint: 'They took the basket to the Pharaoh and Queen Asiye.'
      },
      {
        question: 'What did Moses do after killing the Egyptian by accident?',
        options: [
          { text: 'He prayed to Allah for forgiveness', isCorrect: true },
          { text: 'He became proud of himself', isCorrect: false },
          { text: 'He went to Pharaoh for a reward', isCorrect: false }
        ],
        hint: 'Moses regretted his mistake and turned to Allah.'
      },
      {
        question: 'Why did Moses escape from Egypt?',
        options: [
          { text: 'Pharaoh’s soldiers were looking for him', isCorrect: true },
          { text: 'He wanted to become a magician', isCorrect: false },
          { text: 'He wanted to rule Midian', isCorrect: false }
        ],
        hint: 'A friend warned Moses to run away from the city.'
      },
      {
        question: 'How did Moses help the two sisters in Midian?',
        options: [
          { text: 'He watered their sheep at the spring', isCorrect: true },
          { text: 'He built them a palace', isCorrect: false },
          { text: 'He gave them gold', isCorrect: false }
        ],
        hint: 'They were waiting because the other sheepmen were using the water.'
      },
      {
        question: 'What happened to Moses’s staff on the mountain?',
        options: [
          { text: 'It turned into a big snake', isCorrect: true },
          { text: 'It turned into fire', isCorrect: false },
          { text: 'It broke into pieces', isCorrect: false }
        ],
        hint: 'This was one of the signs of Allah’s power.'
      },
      {
        question: 'What did the magicians do after witnessing the miracle?',
        options: [
          { text: 'They believed in the Lord of Moses and Harun', isCorrect: true },
          { text: 'They laughed at Moses', isCorrect: false },
          { text: 'They ran away to Midian', isCorrect: false }
        ],
        hint: 'They understood that the miracle was not ordinary magic.'
      },
      {
        question: 'What is one main lesson of the story?',
        options: [
          { text: 'Only Allah has true power over human beings', isCorrect: true },
          { text: 'Cruel rulers always win', isCorrect: false },
          { text: 'People should never help strangers', isCorrect: false }
        ],
        hint: 'The ending of the story explains the final lesson clearly.'
      }
    ]
  }
];