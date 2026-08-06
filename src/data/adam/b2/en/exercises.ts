import { Exercise } from '../../../../types';

export const adamB2FinalReviewExercises: Exercise[] = [
  {
    id: 'b2-final-1',
    type: 'sequencing',
    title: 'Thematic Progression Analysis',
    instructions: 'Arrange the pivotal narrative developments of Prophet Adam\'s life in their correct chronological and thematic sequence.',
    question: 'Sequence the narrative milestones.',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The narrative arc transitions from the initial divine proclamation and the bestowal of intellect, through the trial of arrogance and the test of obedience in Paradise, culminating in the establishment of human vicegerency and the subsequent earthly struggle.',
    feedback: {
      correct: 'Exceptional analytical mastery! You have accurately reconstructed the complex narrative flow of the B2 text.',
      incorrect: 'Some milestones are misaligned. Consider the causal links between divine knowledge, the test of pride, and the eventual transition to Earth.'
    },
    sequencingItems: [
      { id: '1', text: 'Allah proclaims the creation of a vicegerent (Khalifa) and bestows comprehensive knowledge upon Adam.' },
      { id: '2', text: 'The angels acknowledge Adam\'s intellectual superiority, while Iblis manifests material arrogance.' },
      { id: '3', text: 'Adam and Eve are granted residence in Paradise with a singular prohibition as a test of their determination.' },
      { id: '4', text: 'Satanic deception exploits human vulnerability, leading to the transgression and the realization of shame.' },
      { id: '5', text: 'Sincere repentance and divine pardon facilitate the transition to Earth as an honorable settlement.' },
      { id: '6', text: 'The earthly struggle begins, marked by the first conflict between Habil and Qabil and the establishment of prophetic guidance.' }
    ]
  },
  {
    id: 'b2-final-2',
    type: 'drag-drop',
    title: 'Ethical and Philosophical Categorization',
    instructions: 'Classify the following conceptual attributes based on their role and manifestation within the B2 narrative framework.',
    question: 'Categorize the moral and immoral attributes.',
    correctAnswer: {
      'PROPHETIC VIRTUES (THE PATH OF GUIDANCE)': ['Intellectual Humility', 'Sincere Repentance', 'Vicegerency (Stewardship)', 'Peaceful Resolution'],
      'SATANIC VICES (THE PATH OF DECEPTION)': ['Material Arrogance', 'Destructive Jealousy', 'Deliberate Trick', 'Persistent Opposition']
    },
    explanation: 'The B2 narrative deeply explores the contrast between the humility and accountability of the Prophetic path and the pride and resentment of the Satanic path.',
    feedback: {
      correct: 'Correct! You have a profound understanding of the ethical dualism presented in the story.',
      incorrect: 'Some concepts are misplaced. Reflect on which attributes are associated with the "spirit of evil" and which with "divine guidance".'
    },
    dragDropGroups: [
      { group: 'PROPHETIC VIRTUES (THE PATH OF GUIDANCE)', items: ['Intellectual Humility', 'Sincere Repentance', 'Vicegerency (Stewardship)', 'Peaceful Resolution'] },
      { group: 'SATANIC VICES (THE PATH OF DECEPTION)', items: ['Material Arrogance', 'Destructive Jealousy', 'Deliberate Trick', 'Persistent Opposition'] }
    ]
  },
  {
    id: 'b2-final-3',
    type: 'reflection',
    title: 'Reflection Based on Philosophy and Existence',
    instructions: 'Engage with these profound themes and formulate a nuanced perspective based on the B2 narrative.',
    question: 'How does the B2 text redefine the relationship between knowledge, responsibility, and human value?',
    correctAnswer: true,
    explanation: 'The story posits that human value is intrinsically linked to the capacity for knowledge and the responsibility of stewardship, rather than material origins.',
    feedback: {
      correct: 'Profound reflection! You have captured the essence of the B2 level philosophical inquiries.',
      incorrect: 'Please reflect on the prompts above.'
    },
    discussionPrompts: [
      { question: 'Analyze the role of "forgetfulness" in the human condition as depicted in the narrative of the forbidden tree.', mode: 'Individual' },
      { question: 'Discuss the implications of "vicegerency" (Khalifa) as a mandate for environmental and social stewardship in the modern world.', mode: 'Pair' },
      { question: 'Evaluate the psychological transition from "internal harmony" to "shame" following the transgression.', mode: 'Class' }
    ]
  },
  {
  id: 'b2-final-4',
  type: 'quiz-game',
  title: 'B2 Narrative Masterclass',
  instructions: 'Navigate through the sophisticated layers of the B2 narrative in this final interactive challenge.',
  question: 'Are you prepared to demonstrate your comprehensive mastery of the B2 level content?',
  correctAnswer: null,
  explanation: 'This challenge evaluates your grasp of advanced vocabulary, complex themes, and detailed narrative nuances.',
  feedback: {
    correct: 'Outstanding! You have successfully navigated the B2 Masterclass on Prophet Adam (pbuh).',
    incorrect: 'Continue to delve into the philosophical depths of the story. Mastery is a journey of constant reflection.'
  },
  hints: [
    'Consider the distinction between "revelation" and "worldly knowledge"',
    'Reflect on the symbolic significance of the raven',
    'Think about the "twofold nature" of humanity'
  ],
  quizQuestions: [
    {
      question: 'According to the B2 text, what does the "breathing of Allah\'s spirit" into Adam signify?',
      options: [
        { text: 'The gift of life and a special status among creation', isCorrect: true },
        { text: 'A change in Adam\'s physical form only', isCorrect: false },
        { text: 'His departure from Paradise to the earth', isCorrect: false }
      ],
      hint: 'Consider the limitations of mere material clay without the divine spirit.'
    },
    {
      question: 'How does the B2 narrative describe the relationship between "revelation" and "worldly knowledge"?',
      options: [
        { text: 'They stand in conflict with one another', isCorrect: false },
        { text: 'Worldly knowledge is more valuable than revelation', isCorrect: false },
        { text: 'They complete each other in human life and guidance', isCorrect: true }
      ],
      hint: 'Are they alternatives or do they complete each other?'
    },
    {
      question: 'What was the underlying cause of Iblis\'s failure to recognize Adam\'s value?',
      options: [
        { text: 'He feared Adam\'s physical power', isCorrect: false },
        { text: 'He judged by material origin instead of true merit', isCorrect: true },
        { text: 'He did not understand the command itself', isCorrect: false }
      ],
      hint: 'What did Iblis focus on when he said "I am better than he"?'
    },
    {
      question: 'What does the "sense of shame" (haya) reveal about human nature according to the text?',
      options: [
        { text: 'It developed later through social customs', isCorrect: false },
        { text: 'It is an inborn quality within human nature', isCorrect: true },
        { text: 'It appeared only as a result of punishment', isCorrect: false }
      ],
      hint: 'Is modesty natural or learned?'
    },
    {
      question: 'How is Adam\'s descent to Earth characterized in the B2 narrative?',
      options: [
        { text: 'As a dishonourable fall with no higher purpose', isCorrect: false },
        { text: 'As an ordinary event without spiritual meaning', isCorrect: false },
        { text: 'As an honourable settlement linked to human duty', isCorrect: true }
      ],
      hint: 'Did it imply dishonor or a respected settlement?'
    },
    {
      question: 'What is the primary lesson derived from the conflict between Habil and Qabil?',
      options: [
        { text: 'Sincerity matters, and jealousy can destroy a person', isCorrect: true },
        { text: 'Strength decides who is right in a conflict', isCorrect: false },
        { text: 'Life in the fields is better than life with animals', isCorrect: false }
      ],
      hint: 'Why was one offering accepted and the other rejected?'
    },
    {
      question: 'What did the raven\'s actions demonstrate to Qabil?',
      options: [
        { text: 'How to survive alone in nature', isCorrect: false },
        { text: 'That prosperity would follow his actions', isCorrect: false },
        { text: 'How to bury the body and face his own limitation', isCorrect: true }
      ],
      hint: 'What did Qabil realize when he saw the raven?'
    }
  ]
}
];