import { Exercise } from '../../../../types';

export const yunusA2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'Yunus Emre’s Journey',
    instructions: 'Put the events in the correct order.',
    question: 'Order the main events of Yunus Emre’s story.',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The story begins with Yunus Emre as a poet, continues with his dervish training, woodcutting service, the lesson of straight wood, the daisy story, and ends with the message of a meaningful life.',
    feedback: {
      correct: 'Excellent! You understand the main journey of Yunus Emre.',
      incorrect: 'Some events are not in the correct order. Read the chapters again and follow Yunus’s journey step by step.'
    },
    sequencingItems: [
      { id: '1', text: 'Yunus Emre becomes known as a great Anatolian Turkish poet' },
      { id: '2', text: 'Yunus becomes a dervish pupil of Taptuk Emre' },
      { id: '3', text: 'Taptuk Emre gives Yunus the duty of collecting wood' },
      { id: '4', text: 'Yunus always brings straight wood to the dervish house' },
      { id: '5', text: 'Yunus returns from the field with a single daisy' },
      { id: '6', text: 'The story teaches us to remember Allah and do every job well' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Good Dervish Values',
    instructions: 'Drag the values into the correct group.',
    question: 'Match the words with the correct category.',
    correctAnswer: {
      'GOOD VALUES': ['Honesty', 'Patience', 'Humility', 'Generosity'],
      'BAD HABITS': ['Jealousy', 'Arrogance', 'Stinginess', 'Gossiping']
    },
    explanation: 'The story says dervishes followed honesty, patience, humility, and generosity. It also says they tried to leave bad habits like jealousy, arrogance, stinginess, and gossiping.',
    feedback: {
      correct: 'Correct! These values are central to the dervish life in the story.',
      incorrect: 'Some words are in the wrong group. Think about which words describe good behavior and which words describe bad habits.'
    },
    dragDropGroups: [
      { group: 'GOOD VALUES', items: ['Honesty', 'Patience', 'Humility', 'Generosity'] },
      { group: 'BAD HABITS', items: ['Jealousy', 'Arrogance', 'Stinginess', 'Gossiping'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Think About the Lesson',
    instructions: 'Think about these questions and discuss them.',
    question: 'What is the most important lesson you learned from Yunus Emre’s story?',
    correctAnswer: null,
    explanation: 'Students may mention remembering Allah, being honest, doing every job well, being humble, avoiding bad habits, or seeing lessons in nature.',
    feedback: {
      correct: 'Beautiful reflection! You connected the story with its deeper meaning.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why did Yunus never bring crooked wood to the dervish house?', mode: 'Individual' },
      { question: 'What does “straight wood” teach us about honesty?', mode: 'Pair' },
      { question: 'Why did Yunus return with only one daisy?', mode: 'Pair' },
      { question: 'How can we remember Allah in our daily lives?', mode: 'Class' },
      { question: 'Why should we do every job carefully and correctly?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'The Yunus Emre A2 Challenge',
    instructions: 'Complete the 10-question challenge about the story.',
    question: 'Are you ready for the final A2 challenge?',
    correctAnswer: null,
    explanation: 'This game reviews the main events, vocabulary, characters, symbols, and moral lessons of the A2 story of Yunus Emre.',
    feedback: {
      correct: 'Congratulations! You have mastered the A2 story of Yunus Emre!',
      incorrect: 'Keep trying! Review the chapters and try again.'
    },
    hints: [
      'Think about Yunus Emre as a poet and dervish',
      'Remember Taptuk Emre and the woodcutting duty',
      'Think about straight wood, the ego, and the single daisy'
    ],
    quizQuestions: [
      {
        question: 'Where was Yunus Emre born?',
        options: [
          { text: 'In Anatolia', isCorrect: true },
          { text: 'In Egypt', isCorrect: false },
          { text: 'In Mecca', isCorrect: false }
        ],
        hint: 'The first chapter says he was born in Anatolia.'
      },
      {
        question: 'Why could people easily understand Yunus Emre’s poems?',
        options: [
          { text: 'Because he wrote them in very difficult language', isCorrect: false },
          { text: 'Because he wrote them in simple Turkish', isCorrect: true },
          { text: 'Because he wrote them only for teachers', isCorrect: false }
        ],
        hint: 'His language was simple and clear.'
      },
      {
        question: 'Who was Yunus Emre’s teacher?',
        options: [
          { text: 'Mevlana', isCorrect: false },
          { text: 'Sultan Alaeddin', isCorrect: false },
          { text: 'Taptuk Emre', isCorrect: true }
        ],
        hint: 'Yunus became his dervish pupil.'
      },
      {
        question: 'What did dervishes share with the needy?',
        options: [
          { text: 'All they had', isCorrect: true },
          { text: 'Only poems', isCorrect: false },
          { text: 'Only stones from the mountain', isCorrect: false }
        ],
        hint: 'Dervishes were generous-hearted and open-handed.'
      },
      {
        question: 'Which word is a good dervish value?',
        options: [
          { text: 'Arrogance', isCorrect: false },
          { text: 'Patience', isCorrect: true },
          { text: 'Gossiping', isCorrect: false }
        ],
        hint: 'Dervishes followed honesty, patience, humility, and generosity.'
      },
      {
        question: 'What duty did Taptuk Emre give to Yunus?',
        options: [
          { text: 'To collect flowers every day', isCorrect: false },
          { text: 'To sell things in the city', isCorrect: false },
          { text: 'To collect wood from the mountain', isCorrect: true }
        ],
        hint: 'There was a mountain behind the dervish house.'
      },
      {
        question: 'What kind of wood did Yunus always bring?',
        options: [
          { text: 'Straight wood', isCorrect: true },
          { text: 'Green and crooked wood', isCorrect: false },
          { text: 'Wet wood from the river', isCorrect: false }
        ],
        hint: 'Yunus said crooked wood could not enter the dervish house.'
      },
      {
        question: 'What does the wood symbolize in Chapter 5?',
        options: [
          { text: 'Only fire for cooking', isCorrect: false },
          { text: 'Yunus’s ego and heart training', isCorrect: true },
          { text: 'A gift for the king', isCorrect: false }
        ],
        hint: 'The chapter says the wood is like Yunus’s ego.'
      },
      {
        question: 'What did Yunus bring back in the flower story?',
        options: [
          { text: 'A large bunch of roses', isCorrect: false },
          { text: 'A basket of green wood', isCorrect: false },
          { text: 'A single daisy', isCorrect: true }
        ],
        hint: 'Other dervishes made fun of him because he brought only one flower.'
      },
      {
        question: 'What is one main lesson of the story?',
        options: [
          { text: 'We should remember Allah and do every job well', isCorrect: true },
          { text: 'We should only care about fame', isCorrect: false },
          { text: 'We should never help people', isCorrect: false }
        ],
        hint: 'The final chapter explains the main lesson of daily life.'
      }
    ]
  }
];
