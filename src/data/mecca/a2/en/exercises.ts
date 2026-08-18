import { Exercise } from '../../../../types';

export const meccaA2FinalReviewExercises: Exercise[] = [
  {
    id: 'mecca-a2-review-sequence',
    type: 'sequencing',
    title: 'Bilal’s Journey',
    instructions: 'Put the major events in the correct order.',
    question: 'How does Bilal’s story move from slavery to a respected public role?',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The story moves from Bilal’s hard life and the new message to his questions, decision, freedom, Hijrah, and role in the Adhan.',
    feedback: { correct: 'Correct. You connected the major turning points in Bilal’s story.', incorrect: 'Start with Bilal’s life under Umayya, then find the new message, Abu Bakr, acceptance of Islam, freedom, and the Adhan.' },
    sequencingItems: [
      { id: '1', text: 'Bilal lives as a slave under Umayya in Mecca' },
      { id: '2', text: 'Bilal hears the message about worship, fairness, and equality' },
      { id: '3', text: 'Bilal secretly visits Abu Bakr and asks questions' },
      { id: '4', text: 'Bilal accepts Islam despite expecting difficulty' },
      { id: '5', text: 'Abu Bakr buys Bilal and frees him' },
      { id: '6', text: 'After the Hijrah, Bilal is chosen to call people to prayer' }
    ]
  },
  {
    id: 'mecca-a2-review-match',
    type: 'matching',
    title: 'People and Responses',
    instructions: 'Match each person or group with the action or response supported by the story.',
    question: 'Who did what?',
    matchingPairs: [
      { left: 'Bilal', right: 'accepted Islam and stayed with his belief' },
      { left: 'Abu Bakr', right: 'questioned the injustice and freed Bilal' },
      { left: 'Umayya', right: 'used power to pressure Bilal' },
      { left: 'Prophet Muhammad (pbuh)', right: 'taught worship of Allah and equality' }
    ],
    correctAnswer: {
      Bilal: 'accepted Islam and stayed with his belief',
      'Abu Bakr': 'questioned the injustice and freed Bilal',
      Umayya: 'used power to pressure Bilal',
      'Prophet Muhammad (pbuh)': 'taught worship of Allah and equality'
    },
    explanation: 'The matches connect the main people with choices and teachings that shape Bilal’s story.',
    feedback: { correct: 'Correct. Each match is supported by a different stage of the story.', incorrect: 'Review the new message, Bilal’s decision, Abu Bakr’s rescue, and Umayya’s response.' }
  },
  {
    id: 'mecca-a2-review-reflection',
    type: 'reflection',
    title: 'Equality, Freedom, and Choice',
    instructions: 'Think from the story and give a short A2 response.',
    question: 'How does Bilal’s story challenge the idea that social power decides a person’s value?',
    correctAnswer: null,
    explanation: 'Bilal begins the story as a powerless slave in an unequal society, but the story repeatedly says that skin color, nationality, status, or past do not decide human value.',
    feedback: { correct: 'Use one event and one final lesson from the story to support your idea.', incorrect: '' },
    discussionPrompts: [
      { question: 'What did society think about Bilal at the beginning?', mode: 'Individual' },
      { question: 'What choice did Abu Bakr make after buying Bilal?', mode: 'Pair' },
      { question: 'How does Chapter 13 answer the inequality described in Chapter 2?', mode: 'Class' }
    ]
  },
  {
    id: 'mecca-a2-review-quiz',
    type: 'quiz-game',
    title: 'Bilal & Mecca A2 Retrieval Review',
    instructions: 'Answer eight questions from across the story. Use the hint only when you need it.',
    question: 'Can you reconnect the main ideas without rereading everything?',
    correctAnswer: null,
    explanation: 'The questions review social contrast, choice, freedom, response, and equality rather than graphic or random details.',
    feedback: { correct: 'Good retrieval. Connect each answer with the chapter evidence.', incorrect: 'Use the hint to return to the relevant idea, then try again.' },
    quizQuestions: [
      { question: 'What social contrast does Chapter 2 emphasize?', options: [{ text: 'Rich people lived in luxury while many poor people lived in need', isCorrect: true }, { text: 'Everyone had the same wealth and power', isCorrect: false }, { text: 'Poor people controlled Mecca’s business', isCorrect: false }], hint: 'Compare the rich and poor paragraphs.' },
      { question: 'Why did the new message matter to Bilal’s situation?', options: [{ text: 'It taught worship of Allah and that people should be fair and equal', isCorrect: true }, { text: 'It promised that rich masters were always right', isCorrect: false }, { text: 'It said slavery decided a person’s value', isCorrect: false }], hint: 'Use both teachings in Chapter 5.' },
      { question: 'Why did Bilal visit Abu Bakr secretly?', options: [{ text: 'He wanted answers about the new religion without being seen', isCorrect: true }, { text: 'He wanted to sell camels at night', isCorrect: false }, { text: 'He wanted to collect unfair extra money', isCorrect: false }], hint: 'Connect the hidden path with the questions he asked.' },
      { question: 'What makes Bilal’s decision in Chapter 7 meaningful?', options: [{ text: 'He expected difficulty but accepted Islam because he believed it was true', isCorrect: true }, { text: 'He expected an easy and wealthy life', isCorrect: false }, { text: 'Umayya asked him to become Muslim', isCorrect: false }], hint: 'Compare what Bilal expected with what he believed.' },
      { question: 'What did Bilal’s repeated “Allah is One” show?', options: [{ text: 'He refused to change his belief under pressure', isCorrect: true }, { text: 'He agreed to worship the idols', isCorrect: false }, { text: 'He wanted to return to the slave market', isCorrect: false }], hint: 'Focus on Umayya’s demand and Bilal’s answer.' },
      { question: 'What is the important result of Abu Bakr buying Bilal?', options: [{ text: 'He freed Bilal instead of keeping him as a slave', isCorrect: true }, { text: 'He sold Bilal back to Umayya', isCorrect: false }, { text: 'He made Bilal pay back the price', isCorrect: false }], hint: 'The result matters more than the number of gold pieces.' },
      { question: 'How does Chapter 11 connect Bilal’s earlier life with the first Adhan?', options: [{ text: 'His bravery and public faith are connected with the role of calling people to prayer', isCorrect: true }, { text: 'His work with camels made him the richest man', isCorrect: false }, { text: 'Umayya chose him for the Adhan', isCorrect: false }], hint: 'Read the paragraph that explains why the role was worthy of Bilal.' },
      { question: 'What final lesson does Chapter 13 give about human value?', options: [{ text: 'Skin color, nationality, or past do not decide value; heart and good actions matter', isCorrect: true }, { text: 'Nationality decides who is better', isCorrect: false }, { text: 'Only social power gives a person value', isCorrect: false }], hint: 'Use the opening and closing paragraphs of Chapter 13 together.' }
    ]
  }
];
