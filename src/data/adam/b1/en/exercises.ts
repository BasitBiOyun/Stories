import { Exercise } from '../../../../types';

export const adamB1FinalReviewExercises: Exercise[] = [
  {
    id: 'b1-final-1',
    type: 'sequencing',
    title: 'Chronological Narrative Analysis',
    instructions: 'Arrange the pivotal moments of Prophet Adam\'s life in their correct chronological sequence.',
    question: 'Sequence the narrative milestones.',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The narrative progresses from creation and the granting of knowledge, through the trial of arrogance, the test in Paradise, and finally the establishment of human stewardship on Earth.',
    feedback: {
      correct: 'Excellent analytical skills! You have mastered the chronological flow of the B1 narrative.',
      incorrect: 'Some milestones are misaligned. Consider the cause-and-effect relationship between the events.'
    },
    sequencingItems: [
      { id: '1', text: 'Allah bestows superior knowledge and intellect upon Adam' },
      { id: '2', text: 'Iblis refuses the divine command due to material arrogance' },
      { id: '3', text: 'Adam and Hawwa are granted residence in Paradise with one restriction' },
      { id: '4', text: 'The deception by Iblis leads to the transgression at the tree' },
      { id: '5', text: 'Sincere repentance and divine forgiveness follow the mistake' },
      { id: '6', text: 'Establishment of human vicegerency (Khalifa) and stewardship on Earth' }
    ]
  },
  {
    id: 'b1-final-2',
    type: 'drag-drop',
    title: 'Ethical Categorization',
    instructions: 'Classify the following concepts based on their role in the narrative of Prophet Adam.',
    question: 'Categorize the moral and immoral attributes.',
    correctAnswer: {
      'VIRTUES (PROPHETIC PATH)': ['Humility', 'Repentance', 'Sincerity', 'Stewardship'],
      'VICES (PATH OF IBLIS)': ['Arrogance', 'Jealousy', 'Deception', 'Insistent Opposition']
    },
    explanation: 'The story contrasts the humility and repentance of Adam with the arrogance and jealousy of Iblis.',
    feedback: {
      correct: 'Correct! You have a clear understanding of the ethical framework presented in the story.',
      incorrect: 'Some concepts are misplaced. Reflect on which attributes led to growth and which led to expulsion.'
    },
    dragDropGroups: [
      { group: 'VIRTUES (PROPHETIC PATH)', items: ['Humility', 'Repentance', 'Sincerity', 'Stewardship'] },
      { group: 'VICES (PATH OF IBLIS)', items: ['Arrogance', 'Jealousy', 'Deception', 'Insistent Opposition'] }
    ]
  },
  {
    id: 'b1-final-3',
    type: 'reflection',
    title: 'Philosophical Reflection',
    instructions: 'Engage with these complex themes and formulate your own perspective.',
    question: 'How does the concept of "intellect" redefine the criteria for superiority in the story?',
    correctAnswer: true,
    explanation: 'The story teaches that true value is derived from knowledge and character, not from material origin or race.',
    feedback: {
      correct: 'Insightful reflection! These are the core lessons for high school students.',
      incorrect: 'Please reflect on the prompts above.'
    },
    discussionPrompts: [
      { question: 'In what ways does arrogance act as a barrier to objective truth?', mode: 'Individual' },
      { question: 'Analyze the psychological impact of "shame" as described after the fall.', mode: 'Pair' },
      { question: 'Discuss the responsibilities of being a "ruler" (Khalifa) on Earth today.', mode: 'Class' }
    ]
  },
  {
    id: 'b1-final-4',
    type: 'quiz-game',
    title: 'Narrative Masterclass',
    instructions: 'Navigate through the complex layers of the story in this final interactive challenge.',
    question: 'Are you prepared to demonstrate your mastery of the B1 level content?',
    correctAnswer: null,
    explanation: 'This challenge evaluates your understanding of vocabulary, themes, and narrative details.',
    feedback: {
      correct: 'Outstanding! You have successfully completed the B1 Masterclass on Prophet Adam (pbuh).',
      incorrect: 'Keep exploring the depths of the story. Sincerity leads to mastery.'
    },
    hints: ['Focus on the spiritual significance of the soil', 'Remember the difference between a mistake and insistent opposition', 'Consider the legacy of the two brothers'],
    quizQuestions: [
      {
        question: 'What does the diversity of soil used in Adam\'s creation symbolize?',
        options: [
          { text: 'The physical strength of humans', isCorrect: false },
          { text: 'The diversity and common origin of humanity', isCorrect: true },
          { text: 'The different types of plants on Earth', isCorrect: false }
        ],
        hint: 'Consider the limitations of seeing skin color differences instead of universal diversity.'
      },
      {
        question: 'Why was it a mistake for Iblis to think fire is superior to clay?',
        options: [
          { text: 'Because fire is actually weaker than soil', isCorrect: false },
          { text: 'Because it ignored the value of divine knowledge and intellect', isCorrect: true },
          { text: 'Because he was not actually made of fire', isCorrect: false }
        ],
        hint: 'Consider what Allah gave Adam that Iblis ignored.'
      },
      {
        question: 'What is the primary function of the "Khalifa" (ruler) on Earth?',
        options: [
          { text: 'To rule with absolute power', isCorrect: false },
          { text: 'To act as a steward and maintain goodness on the planet', isCorrect: true },
          { text: 'To build as many cities as possible', isCorrect: false }
        ],
        hint: 'Look for the word "stewardship" or "responsibility".'
      },
      {
        question: 'How does the story describe the "sense of shame" (haya)?',
        options: [
          { text: 'As a learned behavior from society', isCorrect: false },
          { text: 'As an inborn human nature (fitra)', isCorrect: true },
          { text: 'As a punishment from the angels', isCorrect: false }
        ],
        hint: 'Is modesty something we are born with or something we learn?'
      },
      {
        question: 'What was the key difference between Adam\'s mistake and Iblis\'s insistent opposition?',
        options: [
          { text: 'Adam repented sincerely while Iblis remained arrogant', isCorrect: true },
          { text: 'Iblis was tricked, but Adam was not', isCorrect: false },
          { text: 'Adam\'s mistake was more harmful to the world', isCorrect: false }
        ],
        hint: 'Compare "I am sorry" with "I am better".'
      },
      {
        question: 'Why was Habil\'s offering accepted by Allah?',
        options: [
          { text: 'Because he was a shepherd', isCorrect: false },
          { text: 'Because he gave his best with a sincere heart', isCorrect: true },
          { text: 'Because he gave more than Qabil', isCorrect: false }
        ],
        hint: 'Focus on the quality and intention of the gift.'
      },
      {
        question: 'What did the raven represent in the conflict between the brothers?',
        options: [
          { text: 'A divine sign teaching humility and practical knowledge', isCorrect: true },
          { text: 'A bad omen for the future of humanity', isCorrect: false },
          { text: 'A companion for Qabil in his journey', isCorrect: false }
        ],
        hint: 'What did the raven show Qabil that he didn\'t know?'
      }
    ]
  }
];
