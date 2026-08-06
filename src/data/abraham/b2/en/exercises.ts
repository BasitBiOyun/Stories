import { Exercise } from '../../../../types';

export const abrahamB2FinalReviewExercises: Exercise[] = [
  {
    id: 'b2-abraham-final-1',
    type: 'sequencing',
    title: 'Chronological Narrative Analysis',
    instructions: 'Arrange the pivotal moments of Prophet Abraham\'s story in their correct chronological sequence.',
    question: 'Sequence the narrative milestones.',
    correctAnswer: ['1', '2', '3', '4', '5', '6', '7'],
    explanation: 'The B2 narrative traces Abraham\'s path from rejecting idols in his youth, to questioning the heavens, exposing the idolaters through debate, surviving the fire miracle, refuting Nimrod, migrating, and finally completing his mission by building the Ka\'ba.',
    feedback: {
      correct: 'Excellent analytical skills! You have mastered the chronological flow of the B2 Abraham narrative.',
      incorrect: 'Some milestones are misaligned. Think about the cause-and-effect progression from reasoning to final legacy.'
    },
    sequencingItems: [
      { id: '1', text: 'Abraham observes idol worship in Babylon and concludes that lifeless objects cannot be gods' },
      { id: '2', text: 'He analyzes the star, moon, and sun to conclude that only the Eternal Creator deserves worship' },
      { id: '3', text: 'He smashes the temple idols and uses logical argumentation to expose his people\'s blind imitation' },
      { id: '4', text: 'He is thrown into a blazing fire, which Allah transforms into coolness and safety due to his unshakeable faith' },
      { id: '5', text: 'He confronts the tyrant Nimrod in a serious debate, decisively exposing Nimrod\'s arrogant, false claims' },
      { id: '6', text: 'He leaves Hajar and Ishmael in a barren valley, demonstrating profound submission and leading to the miracle of Zamzam' },
      { id: '7', text: 'He and Ishmael construct the Ka\'ba as a lasting sanctuary for Tawheed, completing his great mission' }
    ]
  },
  {
    id: 'b2-abraham-final-2',
    type: 'drag-drop',
    title: 'Ethical & Abstract Categorization',
    instructions: 'Classify the following abstract attributes based on their role in the narrative of Prophet Abraham.',
    question: 'Categorize the moral values and counter-values.',
    correctAnswer: {
      'HANIFISM (THE TRUE PATH)': ['Tawheed', 'Reasoning', 'Evidence-Based Faith', 'Sincere Trust', 'Submission'],
      'IDOLATRY (THE FALSE PATH)': ['Blind Imitation', 'Arrogant Denial', 'Lifeless Worship', 'Tyrannical Claims', 'Ignorance']
    },
    explanation: 'The story sharply contrasts Hanifism\'s reasoning, submission, and Tawheed with idolatry\'s blind imitation, arrogance, and logical fallacies.',
    feedback: {
      correct: 'Correct! You have a clear understanding of the deep ethical and ideological framework at the B2 level.',
      incorrect: 'Some concepts are misplaced. Evaluate whether each term represents the prophetic intellect or the societal ignorance.'
    },
    dragDropGroups: [
      { group: 'HANIFISM (THE TRUE PATH)', items: ['Tawheed', 'Reasoning', 'Evidence-Based Faith', 'Sincere Trust', 'Submission'] },
      { group: 'IDOLATRY (THE FALSE PATH)', items: ['Blind Imitation', 'Arrogant Denial', 'Lifeless Worship', 'Tyrannical Claims', 'Ignorance'] }
    ]
  },
  {
    id: 'b2-abraham-final-3',
    type: 'reflection',
    title: 'Philosophical Reflection & Debate',
    instructions: 'Engage with these complex B2 themes and formulate your own sophisticated perspective.',
    question: 'In what ways does Abraham (pbuh) utilize critical reasoning and debate to deconstruct the false authority of his society?',
    correctAnswer: true,
    explanation: 'Abraham repeatedly uses observable evidence, rhetorical questions (the broken idols), and logical absolute limits (the sun rising from the west against Nimrod) to dismantle false beliefs constructed by tradition and tyranny.',
    feedback: {
      correct: 'Insightful reflection! Masterful integration of the B2 themes.',
      incorrect: 'Please reflect on the prompts above and ensure you are using evidence from the narrative.'
    },
    discussionPrompts: [
      { question: 'Contrast Abraham\'s use of clear reasoning with Nimrod\'s reliance on authority.', mode: 'Individual' },
      { question: 'Analyze why the springing up of Zamzam and the building of the Ka\'ba represent "trust in Allah" rather than mere passivity.', mode: 'Pair' },
      { question: 'Discuss how the concept of Tawheed serves as the ultimate liberator from the worship of created entities (stars, tyrants, statues).', mode: 'Class' }
    ]
  },
  {
    id: 'b2-abraham-final-4',
    type: 'quiz-game',
    title: 'Advanced Narrative Masterclass',
    instructions: 'Navigate through the nuanced, complex layers of the B2 story in this final interactive challenge.',
    question: 'Are you prepared to demonstrate comprehensive mastery of the B2 narrative theology and vocabulary?',
    correctAnswer: null,
    explanation: 'This high-level challenge evaluates your command of abstract vocabulary, theological concepts, and nuanced narrative details.',
    feedback: {
      correct: 'Outstanding! You have successfully completed the B2 Masterclass on Prophet Abraham (pbuh).',
      incorrect: 'Review the narrative, focusing particularly on the philosophical debates and vocabulary in the earlier chapters.'
    },
    hints: [
      'Focus on the relationship between Hanifism and Tawheed',
      'Remember how logic dismantled both societal tradition and tyrannical authority',
      'Reflect on the harmony of divine trust and immense human effort (Hajar)'
    ],
    quizQuestions: [
      {
        question: 'Abraham (pbuh) concluded that the stars, moon, and sun were divine beings because they provided light to the world.',
        options: [
          { text: 'True', isCorrect: false },
          { text: 'False', isCorrect: true }
        ],
        hint: 'Consider the limitations of celestial bodies that set and disappear.'
      },
      {
        question: 'What is the core meaning of Hanifism in the context of Prophet Abraham\'s (pbuh) story?',
        options: [
          { text: 'The pure monotheistic path based on sincere reasoning and complete submission to Allah.', isCorrect: true },
          { text: 'The ancient Mesopotamian practice of worshipping the sun and the stars for guidance.', isCorrect: false },
          { text: 'A political movement meant to overthrow King Nimrod and take control of Babylon.', isCorrect: false }
        ],
        hint: 'Consider the relationship between logic, reflection, and monotheism.'
      },
      {
        question: 'How did Abraham (pbuh) logically demonstrate the helplessness of the idols in the temple?',
        options: [
          { text: 'He asked the priests to perform a miracle and bring the idols to life.', isCorrect: false },
          { text: 'He completely destroyed every single statue in the temple without leaving any trace.', isCorrect: false },
          { text: 'He smashed all the idols except the largest one and told the people to ask the remaining idol who did it.', isCorrect: true }
        ],
        hint: 'He wanted to mathematically prove that the idols could not even speak or defend themselves.'
      },
      {
        question: 'When the idolaters threw Abraham (pbuh) into the blazing pit, Allah commanded the fire to become cool and safe, sparing him from any harm.',
        options: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false }
        ],
        hint: 'Think about the miracle that turned a punishing a raging fire into a peaceful place.'
      },
      {
        question: 'During their debate, what profound argument did Abraham (pbuh) use to completely silence King Nimrod?',
        options: [
          { text: 'He confidently challenged Nimrod to survive being thrown into the fire.', isCorrect: false },
          { text: 'He challenged Nimrod to alter the cosmic order by making the sun rise from the west.', isCorrect: true },
          { text: 'He proved that Nimrod\'s fortunetellers and astrologers had lied about the future.', isCorrect: false }
        ],
        hint: 'Abraham shifted the debate from earthly executions to absolute divine sovereignty over the universe.'
      },
      {
        question: 'King Nimrod successfully proved his divine power by choosing which prisoner to execute and which one to free.',
        options: [
          { text: 'True', isCorrect: false },
          { text: 'False', isCorrect: true }
        ],
        hint: 'Think about whether deciding someone\'s earthly fate is the same as true divine power over life and death.'
      },
      {
        question: 'What does Hajar\'s exhaustive run between Safa and Marwa symbolize for believers?',
        options: [
          { text: 'The desperate abandonment of faith when confronted with an impossible situation.', isCorrect: false },
          { text: 'The belief that sitting passively is the only way to wait for divine intervention.', isCorrect: false },
          { text: 'The perfect harmony of deep reliance on Allah combined with intense human effort.', isCorrect: true }
        ],
        hint: 'She trusted Allah completely but still took active steps to find water.'
      },
      {
        question: 'The miracle of the Zamzam well occurred when the angel Gabriel struck the dry ground in the desolate valley of Mecca.',
        options: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false }
        ],
        hint: 'Consider the source of the abundant water that saved Hajar and Ishmael.'
      },
      {
        question: 'What was the purpose of the deep insight where Abraham (pbuh) was commanded to sacrifice his son Ishmael?',
        options: [
          { text: 'To serve as the ultimate test of Abraham\'s unconditional love and absolute submission to Allah.', isCorrect: true },
          { text: 'To punish Abraham for his brief moment of doubt during the challenging journey from Babylon.', isCorrect: false },
          { text: 'To demonstrate to the Jurham tribe that Abraham possessed power over life and death.', isCorrect: false }
        ],
        hint: 'This monumental event is commemorated annually during the Celebration of Sacrifice.'
      },
      {
        question: 'Abraham (pbuh) and Ishmael built the Ka\'ba primarily as an impenetrable fortress to protect their growing family from local tribes.',
        options: [
          { text: 'True', isCorrect: false },
          { text: 'False', isCorrect: true }
        ],
        hint: 'Think about the spiritual significance of the Ka\'ba and why it was built as a center for Tawheed.'
      }
    ]
  }
];
