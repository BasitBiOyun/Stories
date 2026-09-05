import type { Exercise } from '../../../../types';
import { meccaA2QuickChallenges } from './exercises';

/** Active polished Bilal / Mecca A2 English exercise system. */
export const meccaA2QuickChallengesPolished: Record<number, Exercise> = {
  ...meccaA2QuickChallenges,
};

export const meccaA2KnowledgeCheckExercisesPolished: Exercise[] = [
  {
    id: 'mecca-a2-kc-1', type: 'multiple-choice', title: 'Beginning and Society', instructions: 'Choose the answer supported by Chapters 1–2.',
    question: 'Which statement correctly joins Bilal’s beginning with the society around him?',
    options: ['Bilal was born into slavery in Mecca, where the story describes a large gap between rich and poor', 'Bilal was born a rich merchant in a society with equal wealth', 'Bilal was born in Medina after the Hijrah'], correctAnswer: 0,
    explanation: 'Chapter 1 introduces Bilal’s birth into slavery; Chapter 2 describes inequality between rich and poor.',
    feedback: { correct: 'Correct.', incorrect: 'Review Bilal’s beginning and the social contrast in Chapters 1–2.' },
  },
  {
    id: 'mecca-a2-kc-2', type: 'true-false', title: 'Power and Daily Life', instructions: 'Decide whether the statement agrees with Chapters 3–4.',
    question: 'Umayya was a rich and powerful leader, and Bilal worked hard while being treated without respect in his household.',
    correctAnswer: true,
    explanation: 'Chapters 3–4 connect Umayya’s social power with Bilal’s difficult daily work and treatment.',
    feedback: { correct: 'Correct.', incorrect: 'Review Umayya’s position and Bilal’s daily life.' },
  },
  {
    id: 'mecca-a2-kc-3', type: 'multiple-choice', title: 'Message and Questions', instructions: 'Choose the answer supported by Chapters 5–6.',
    question: 'What happened after Bilal heard the new message about worship, fairness and equality?',
    options: ['He thought about it and secretly went to Abu Bakr to ask questions', 'He immediately became a rich leader', 'He stopped thinking about religion'], correctAnswer: 0,
    explanation: 'Chapter 5 introduces the message; Chapter 6 shows Bilal thinking and visiting Abu Bakr secretly.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the story from hearing the message to the secret visit.' },
  },
  {
    id: 'mecca-a2-kc-4', type: 'true-false', title: 'Decision and Pressure', instructions: 'Decide whether the statement agrees with Chapters 7–8.',
    question: 'Bilal accepted Islam even though he expected difficulty, and he later refused to praise the idols under pressure.',
    correctAnswer: true,
    explanation: 'Chapter 7 gives Bilal’s decision; Chapter 8 shows his refusal under pressure.',
    feedback: { correct: 'Correct.', incorrect: 'Review Bilal’s decision and his response to Umayya.' },
  },
  {
    id: 'mecca-a2-kc-5', type: 'multiple-choice', title: 'Justice and Freedom', instructions: 'Choose the answer supported by Chapters 9–10.',
    question: 'How did Abu Bakr respond to Bilal’s situation?',
    options: ['He questioned the injustice, negotiated with Umayya, bought Bilal and freed him', 'He told Bilal to return to the idols', 'He asked Bilal to work for Umayya longer'], correctAnswer: 0,
    explanation: 'Chapters 9–10 move from Abu Bakr’s challenge to the purchase and Bilal’s freedom.',
    feedback: { correct: 'Correct.', incorrect: 'Review Abu Bakr’s questions and what he did after the agreement.' },
  },
  {
    id: 'mecca-a2-kc-6', type: 'multiple-choice', title: 'A Public Role', instructions: 'Choose the event supported by Chapter 11.',
    question: 'What new responsibility did Bilal receive after the Hijrah?',
    options: ['He was chosen to call people to prayer', 'He became Umayya’s servant again', 'He led a trade caravan'], correctAnswer: 0,
    explanation: 'Chapter 11 describes Bilal’s respected role in the Adhan.',
    feedback: { correct: 'Correct.', incorrect: 'Review the Adhan section of Chapter 11.' },
  },
  {
    id: 'mecca-a2-kc-7', type: 'true-false', title: 'Adhan and Equality', instructions: 'Decide whether the statement agrees with Chapter 12.',
    question: 'Chapter 12 connects a detail about the morning Adhan with a teaching that people should not be disrespected because of skin color.',
    correctAnswer: true,
    explanation: 'Both ideas are stated in Chapter 12.',
    feedback: { correct: 'Correct.', incorrect: 'Review the opening and closing parts of Chapter 12.' },
  },
  {
    id: 'mecca-a2-kc-8', type: 'multiple-choice', title: 'Later Life and Final Lesson', instructions: 'Choose the answer supported by Chapter 13.',
    question: 'Which ending detail is supported by the final chapter?',
    options: ['Bilal found Medina too painful after the Prophet’s death, later left, and the chapter closes by stressing heart and good actions', 'Bilal returned to Umayya and slavery', 'Bilal became ruler of Mecca'], correctAnswer: 0,
    explanation: 'Chapter 13 describes Bilal’s grief, departure and the final lesson about human value.',
    feedback: { correct: 'Correct.', incorrect: 'Review the final chapter’s events and closing message.' },
  },
];

export const meccaA2VocabularyChallengePairsPolished = [
  { word: 'Justice', meaning: 'Fair treatment of people' },
  { word: 'Freedom', meaning: 'The state of not being a slave or prisoner' },
  { word: 'Secretly', meaning: 'In a hidden way' },
  { word: 'Refused', meaning: 'Said no and did not agree to do something' },
  { word: 'Rescued', meaning: 'Saved from danger or harm' },
  { word: 'Respected', meaning: 'Honored and treated as important' },
];

export const meccaA2FinalChallengeExercisesPolished: Exercise[] = [
  {
    id: 'mecca-a2-final-1', type: 'multiple-choice', title: 'Bilal and Mecca', instructions: 'Choose the answer supported by Chapters 1–2.',
    question: 'What contrast is established at the start of the book?',
    options: ['Bilal has little social power while Mecca has strong divisions between rich and poor', 'Bilal begins as the richest man in a fully equal society', 'Bilal begins in Medina after the Hijrah'], correctAnswer: 0,
    explanation: 'The opening chapters establish Bilal’s position and the unequal society around him.',
    feedback: { correct: 'Correct.', incorrect: 'Use Chapters 1–2.' },
  },
  {
    id: 'mecca-a2-final-2', type: 'true-false', title: 'Umayya and Bilal', instructions: 'Decide whether the statement agrees with Chapters 3–4.',
    question: 'Umayya had wealth and influence, while Bilal’s daily life included hard work and disrespect.',
    correctAnswer: true,
    explanation: 'This contrast is developed in Chapters 3–4.',
    feedback: { correct: 'Correct.', incorrect: 'Review the power and daily-life chapters.' },
  },
  {
    id: 'mecca-a2-final-3', type: 'sequencing', title: 'From Hearing to Decision', instructions: 'Put the Chapters 5–7 developments in order.',
    question: 'How does Bilal move from hearing the message to choosing Islam?',
    sequencingItems: [
      { id: '1', text: 'Bilal hears ideas about worship, fairness and equality' },
      { id: '2', text: 'Bilal thinks deeply about the message' },
      { id: '3', text: 'Bilal secretly visits Abu Bakr and asks questions' },
      { id: '4', text: 'Bilal accepts Islam despite expecting difficulty' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'Chapters 5–7 develop hearing, reflection, learning and decision in order.',
    feedback: { correct: 'Correct.', incorrect: 'Follow Chapters 5, 6 and 7.' },
  },
  {
    id: 'mecca-a2-final-4', type: 'multiple-choice', title: 'Under Pressure', instructions: 'Choose the answer supported by Chapter 8.',
    question: 'What did Bilal do when Umayya tried to make him praise the idols?',
    options: ['He refused and continued to say that Allah is One', 'He agreed immediately', 'He asked to return to his old belief'], correctAnswer: 0,
    explanation: 'Chapter 8 presents Bilal’s refusal under pressure.',
    feedback: { correct: 'Correct.', incorrect: 'Review Bilal’s final answer in Chapter 8.' },
  },
  {
    id: 'mecca-a2-final-5', type: 'matching', title: 'Justice, Rescue and Freedom', instructions: 'Match each action from Chapters 9–10 with its result.',
    question: 'How do Abu Bakr’s actions change the situation?',
    matchingPairs: [
      { left: 'Abu Bakr questions Umayya', right: 'the injustice of punishing Bilal for belief is challenged' },
      { left: 'Abu Bakr buys Bilal', right: 'Bilal is rescued from Umayya' },
      { left: 'Abu Bakr frees Bilal', right: 'Bilal is no longer a slave' },
    ],
    correctAnswer: {
      'Abu Bakr questions Umayya': 'the injustice of punishing Bilal for belief is challenged',
      'Abu Bakr buys Bilal': 'Bilal is rescued from Umayya',
      'Abu Bakr frees Bilal': 'Bilal is no longer a slave',
    },
    explanation: 'The two chapters move from challenging injustice to rescue and freedom.',
    feedback: { correct: 'Correct.', incorrect: 'Use Chapters 9–10.' },
  },
  {
    id: 'mecca-a2-final-6', type: 'true-false', title: 'A Changed Role', instructions: 'Decide whether the statement agrees with Chapter 11.',
    question: 'After the Hijrah, Bilal’s story includes a respected public responsibility: calling people to prayer.',
    correctAnswer: true,
    explanation: 'Chapter 11 describes Bilal’s role in the Adhan.',
    feedback: { correct: 'Correct.', incorrect: 'Review Chapter 11.' },
  },
  {
    id: 'mecca-a2-final-7', type: 'multiple-choice', title: 'Equality Teaching', instructions: 'Choose the answer supported by Chapter 12.',
    question: 'Which idea matches the equality teaching in the chapter?',
    options: ['Skin color does not make one person better than another', 'Wealth makes one person more valuable', 'Only social leaders deserve respect'], correctAnswer: 0,
    explanation: 'Chapter 12 explicitly rejects judging human value by skin color.',
    feedback: { correct: 'Correct.', incorrect: 'Review the Farewell Sermon section.' },
  },
  {
    id: 'mecca-a2-final-8', type: 'fill-blanks', title: 'The Final Lesson', instructions: 'Complete the key word from the final chapter’s lesson.',
    question: 'Complete the sentence.', fillBlanksText: 'What matters is the heart and good [blank].', correctAnswer: 'actions',
    explanation: 'Chapter 13 closes by focusing on the heart and good actions.',
    feedback: { correct: 'Correct.', incorrect: 'Return to the final sentence of Chapter 13.' },
  },
  {
    id: 'mecca-a2-final-9', type: 'multiple-choice', title: 'Bilal’s Later Life', instructions: 'Choose the detail supported by Chapter 13.',
    question: 'What happened after Bilal found it too painful to remain in Medina?',
    options: ['He asked to leave and later went to Damascus', 'He returned to Umayya’s house', 'He stopped believing'], correctAnswer: 0,
    explanation: 'The final chapter describes his departure and later life.',
    feedback: { correct: 'Correct.', incorrect: 'Review the middle of Chapter 13.' },
  },
  {
    id: 'mecca-a2-final-10', type: 'sequencing', title: 'Whole-Story Turning Points', instructions: 'Put the major turning points in story order.',
    question: 'Which order best represents Bilal’s story?',
    sequencingItems: [
      { id: '1', text: 'Bilal lives in slavery in unequal Mecca' },
      { id: '2', text: 'Bilal hears the new message and seeks answers' },
      { id: '3', text: 'Bilal accepts Islam and remains firm under pressure' },
      { id: '4', text: 'Abu Bakr buys and frees Bilal' },
      { id: '5', text: 'Bilal receives the public role of calling people to prayer' },
      { id: '6', text: 'The final chapters connect equality, grief and the value of good actions' },
    ],
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'These anchors cover the full progression from Chapters 1–13.',
    feedback: { correct: 'Correct.', incorrect: 'Use the opening, decision, freedom, Adhan and final chapters as anchors.' },
  },
];
