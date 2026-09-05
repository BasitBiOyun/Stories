import type { Exercise } from '../../../../types';
import { abrahamA2QuickChallenges } from './exercises';

/** Active polished Abraham A2 English exercise system. */
export const abrahamA2QuickChallengesPolished: Record<number, Exercise> = {
  ...abrahamA2QuickChallenges,
  1: {
    id: 'abraham-a2-quick-1', type: 'matching', title: 'People and Powerless Objects',
    instructions: 'Match each Chapter 1 detail with the correct idea.', question: 'What contrast does Abraham notice?',
    matchingPairs: [
      { left: 'People', right: 'made wishes to the objects' },
      { left: 'Hearing', right: 'the stone objects could not hear' },
      { left: 'Movement', right: 'the stone objects could not move' },
      { left: 'Understanding', right: 'the stone objects could not understand' },
    ],
    correctAnswer: {
      People: 'made wishes to the objects', Hearing: 'the stone objects could not hear', Movement: 'the stone objects could not move', Understanding: 'the stone objects could not understand',
    },
    explanation: 'The chapter contrasts what people asked from the objects with the objects’ complete lack of human abilities.',
    feedback: { correct: 'Correct. You rebuilt the contrast from four details.', incorrect: 'Return to the final sentences and separate what people did from what the objects could not do.' },
  },
  6: {
    id: 'abraham-a2-quick-6', type: 'multiple-choice', title: 'The Largest Idol', instructions: 'Choose the action stated in Chapter 6.',
    question: 'What did Abraham do after breaking the smaller stone gods?',
    options: ['He left the largest one unbroken and placed the axe around its neck', 'He carried the largest idol home', 'He waited inside the idol house for the people'], correctAnswer: 0,
    explanation: 'Chapter 6 directly says that Abraham left the largest one unbroken and placed the axe around its neck.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the final three sentences of Chapter 6.' },
  },
  9: {
    id: 'abraham-a2-quick-9', type: 'matching', title: 'Miracle and Response',
    instructions: 'Match each Chapter 9 detail with what happened.', question: 'What changed, and what stayed the same?',
    matchingPairs: [
      { left: 'The fire', right: 'became cool' },
      { left: 'Abraham', right: 'was safe' },
      { left: 'The people', right: 'were amazed' },
      { left: 'Their position', right: 'remained against Abraham' },
    ],
    correctAnswer: { 'The fire': 'became cool', Abraham: 'was safe', 'The people': 'were amazed', 'Their position': 'remained against Abraham' },
    explanation: 'The miracle changed the danger around Abraham, but it did not automatically change the people’s position.',
    feedback: { correct: 'Correct.', incorrect: 'Separate the change in the fire from Abraham’s safety and the people’s reaction.' },
  },
  12: {
    id: 'abraham-a2-quick-12', type: 'matching', title: 'Trust and Action',
    instructions: 'Match each Chapter 12 idea with the detail that completes it.', question: 'How does Hagar combine trust with action?',
    matchingPairs: [
      { left: 'Hagar’s trust', right: 'Allah will protect us' },
      { left: 'Her problem', right: 'food and water were gone' },
      { left: 'Her action', right: 'she searched' },
      { left: 'Her movement', right: 'she ran from hill to hill' },
    ],
    correctAnswer: { 'Hagar’s trust': 'Allah will protect us', 'Her problem': 'food and water were gone', 'Her action': 'she searched', 'Her movement': 'she ran from hill to hill' },
    explanation: 'The chapter presents trust and active effort together.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the chapter from Hagar’s belief to the problem and then to what she did.' },
  },
};

export const abrahamA2KnowledgeCheckExercisesPolished: Exercise[] = [
  {
    id: 'abraham-a2-kc-1', type: 'multiple-choice', title: 'From Idols to the Sky', instructions: 'Choose the sequence that matches Chapters 1–3.',
    question: 'Which sequence correctly follows Abraham’s early questioning?',
    options: [
      'He notices that stone objects are powerless, questions the idols his father makes, then observes that the star and moon disappear',
      'He becomes king, builds a palace, then travels to Mecca',
      'He sees Zamzam, meets Nimrod, then returns to the idol house',
    ],
    correctAnswer: 0,
    explanation: 'Chapters 1–3 move from powerless stone objects, to Abraham questioning the idols made by his father, to his observations of the star and moon.',
    feedback: { correct: 'Correct.', incorrect: 'Trace the first three chapters in order: stone objects, his father’s idols, then the night sky.' },
  },
  {
    id: 'abraham-a2-kc-2', type: 'true-false', title: 'Guidance and Care', instructions: 'Decide whether the statement agrees with Chapters 4–5.',
    question: 'After becoming a Messenger, Abraham tried to guide his people and explained that Allah gives him food and drink and heals him when he is sick.',
    correctAnswer: true,
    explanation: 'Chapter 4 gives Abraham the responsibility to guide his people, and Chapter 5 records his examples of Allah’s care.',
    feedback: { correct: 'Correct.', incorrect: 'Review Abraham’s new responsibility in Chapter 4 and his speech in Chapter 5.' },
  },
  {
    id: 'abraham-a2-kc-3', type: 'multiple-choice', title: 'The Idol House', instructions: 'Choose the answer supported by Chapters 6–7.',
    question: 'What happened after Abraham broke the stone gods?',
    options: [
      'He left the largest idol unbroken, and later the people admitted that the idols could not speak',
      'The largest idol spoke and told the people what happened',
      'The people immediately accepted Abraham’s message without questioning him',
    ],
    correctAnswer: 0,
    explanation: 'Chapter 6 leaves the largest idol unbroken; Chapter 7 shows the people themselves saying that the objects do not speak.',
    feedback: { correct: 'Correct.', incorrect: 'Connect the ending of Chapter 6 with the questioning scene in Chapter 7.' },
  },
  {
    id: 'abraham-a2-kc-4', type: 'true-false', title: 'Fire and Miracle', instructions: 'Decide whether the statement agrees with Chapters 8–9.',
    question: 'The people prepared a dangerously hot fire, but Allah made it cool and safe for Abraham; even after the miracle, the people remained against him.',
    correctAnswer: true,
    explanation: 'Chapter 8 describes the dangerous fire, and Chapter 9 describes Abraham’s safety and the people’s unchanged position.',
    feedback: { correct: 'Correct.', incorrect: 'Compare the danger in Chapter 8 with the miracle and reaction in Chapter 9.' },
  },
  {
    id: 'abraham-a2-kc-5', type: 'multiple-choice', title: 'Nimrod’s Challenge', instructions: 'Choose the detail stated in Chapter 10.',
    question: 'What challenge could Nimrod not meet?',
    options: ['Making the sun rise from the west', 'Making the moon disappear', 'Finding the road to Babylon'],
    correctAnswer: 0,
    explanation: 'Abraham challenged Nimrod to make the sun rise from the west, and Nimrod could not do it.',
    feedback: { correct: 'Correct.', incorrect: 'Return to Abraham’s final question in Chapter 10.' },
  },
  {
    id: 'abraham-a2-kc-6', type: 'multiple-choice', title: 'Leaving Babylon', instructions: 'Choose the answer supported by Chapter 11.',
    question: 'Why did Abraham leave Babylon, and where did the journey eventually take his family?',
    options: [
      'He left to carry Allah’s message to other lands, and the journey eventually reached a quiet valley near Safa and Marwah',
      'He left to become a king, and the journey ended at Nimrod’s palace',
      'He left to find new idols, and the journey ended at the old idol house',
    ],
    correctAnswer: 0,
    explanation: 'Chapter 11 connects Abraham’s decision to carry the message with the long journey that eventually reaches the valley near Safa and Marwah.',
    feedback: { correct: 'Correct.', incorrect: 'Review the reason for leaving Babylon and the final destination named in Chapter 11.' },
  },
  {
    id: 'abraham-a2-kc-7', type: 'true-false', title: 'Hagar, Ishmael and Zamzam', instructions: 'Decide whether the statement agrees with Chapters 12–13.',
    question: 'Hagar trusted Allah and searched for food and water; later, water appeared under Ishmael’s feet and more people came to the area because of it.',
    correctAnswer: true,
    explanation: 'Chapter 12 shows Hagar’s trust and effort, while Chapter 13 tells how Zamzam appeared and drew people to the area.',
    feedback: { correct: 'Correct.', incorrect: 'Follow Hagar’s actions in Chapter 12 and the results of the water in Chapter 13.' },
  },
  {
    id: 'abraham-a2-kc-8', type: 'multiple-choice', title: 'The Ka’ba and the Message', instructions: 'Choose the answer supported by Chapter 14.',
    question: 'Which statement brings together the main ideas of the final chapter?',
    options: [
      'Abraham and Ishmael build the Ka’ba, Hajj recalls Abraham and his family, and the closing message says Allah has no partner',
      'Abraham builds a palace, Hajj remembers Nimrod, and the closing message praises the idols',
      'Ishmael returns to Babylon, Hajj ends, and the Ka’ba is forgotten',
    ],
    correctAnswer: 0,
    explanation: 'Chapter 14 joins the building of the Ka’ba, the continuing practice of Hajj, and the final message about Allah’s uniqueness.',
    feedback: { correct: 'Correct.', incorrect: 'Use the building paragraph, the Hajj sentence, and the closing message.' },
  },
];

export const abrahamA2VocabularyChallengePairsPolished = [
  { word: 'Idol', meaning: 'A statue or object that people wrongly worship as a god' },
  { word: 'Creator', meaning: 'The one who made everything' },
  { word: 'Arrogant', meaning: 'Thinking you are better or more important than others' },
  { word: 'Miracle', meaning: 'An extraordinary event from Allah beyond normal human power' },
  { word: 'Valley', meaning: 'A low area of land between hills or mountains' },
  { word: 'Mission', meaning: 'An important job or task given to someone' },
];

export const abrahamA2FinalChallengeExercisesPolished: Exercise[] = [
  {
    id: 'abraham-a2-final-1', type: 'multiple-choice', title: 'Powerless Objects', instructions: 'Choose the conclusion supported by Chapters 1–2.',
    question: 'Which observation best supports Abraham’s rejection of the stone gods?',
    options: ['They depended on people and could not act for themselves', 'They lived far from Babylon', 'They were made only during festivals'],
    correctAnswer: 0,
    explanation: 'The opening chapters show that people make and handle the objects while the objects cannot hear, speak, move, or help.',
    feedback: { correct: 'Correct.', incorrect: 'Combine the evidence from the first two chapters.' },
  },
  {
    id: 'abraham-a2-final-2', type: 'multiple-choice', title: 'From Sky to Creator', instructions: 'Choose the best whole-idea answer from Chapters 3–4.',
    question: 'What larger idea does Abraham reach after watching the star, moon, and sun?',
    options: ['Things that appear and disappear are creation; Allah is the Creator', 'The brightest object must be Allah', 'Only the moon can guide people'],
    correctAnswer: 0,
    explanation: 'The sky scenes lead Abraham to distinguish creation from the Creator.',
    feedback: { correct: 'Correct.', incorrect: 'Connect the observations in Chapters 3 and 4.' },
  },
  {
    id: 'abraham-a2-final-3', type: 'true-false', title: 'Message and Plan', instructions: 'Decide whether the statement is supported by Chapters 5–6.',
    question: 'The people defended their practice by saying their fathers had done the same, and Abraham later made a plan involving the stone gods.',
    correctAnswer: true,
    explanation: 'Chapter 5 gives the people’s tradition-based reason, and Chapter 6 begins Abraham’s plan with the idols.',
    feedback: { correct: 'Correct.', incorrect: 'Review the people’s answer in Chapter 5 and Abraham’s plan in Chapter 6.' },
  },
  {
    id: 'abraham-a2-final-4', type: 'multiple-choice', title: 'Admission and Punishment', instructions: 'Choose the cause-result connection supported by Chapters 7–8.',
    question: 'What happens after the people admit that the idols cannot speak?',
    options: ['They remain arrogant and prepare a huge fire to punish Abraham', 'They immediately leave Babylon with him', 'They ask him to build the Ka’ba'],
    correctAnswer: 0,
    explanation: 'The questioning scene exposes the idols’ weakness, but the people refuse the point and move toward punishment.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the end of Chapter 7 into Chapter 8.' },
  },
  {
    id: 'abraham-a2-final-5', type: 'true-false', title: 'Miracle and Limits of Power', instructions: 'Decide whether the statement is supported by Chapters 9–10.',
    question: 'The fire became cool and safe for Abraham, and later Nimrod could not make the sun rise from the west.',
    correctAnswer: true,
    explanation: 'Chapter 9 records Abraham’s safety in the fire, and Chapter 10 ends with Nimrod unable to meet Abraham’s sun challenge.',
    feedback: { correct: 'Correct.', incorrect: 'Review the miracle in Chapter 9 and the final challenge in Chapter 10.' },
  },
  {
    id: 'abraham-a2-final-6', type: 'matching', title: 'Journey, Need and Purpose', instructions: 'Match each action from Chapters 11–12 with its reason or purpose.',
    question: 'Why do these actions happen?',
    matchingPairs: [
      { left: 'Abraham leaves Babylon', right: 'carry the message to other lands' },
      { left: 'The family travels to the valley', right: 'follow the journey Allah asks Abraham to make' },
      { left: 'Hagar searches', right: 'look for food and water for her child' },
    ],
    correctAnswer: {
      'Abraham leaves Babylon': 'carry the message to other lands',
      'The family travels to the valley': 'follow the journey Allah asks Abraham to make',
      'Hagar searches': 'look for food and water for her child',
    },
    explanation: 'The journey chapters connect movement and effort with clear purposes and needs.',
    feedback: { correct: 'Correct.', incorrect: 'Use the stated purposes in Chapters 11–12.' },
  },
  {
    id: 'abraham-a2-final-7', type: 'sequencing', title: 'From Zamzam to Mecca', instructions: 'Put the Chapter 13 developments in story order.',
    question: 'How does the valley change after the water appears?',
    sequencingItems: [
      { id: '1', text: 'Water comes out under Ishmael’s feet' },
      { id: '2', text: 'Hagar drinks and gives water to Ishmael' },
      { id: '3', text: 'More people come because of the water' },
      { id: '4', text: 'They build a city called Mecca' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'Chapter 13 moves from the appearance of Zamzam to Hagar’s response, the arrival of people, and the growth of Mecca.',
    feedback: { correct: 'Correct.', incorrect: 'Follow Chapter 13 from the water to Hagar, then the people, then the city.' },
  },
  {
    id: 'abraham-a2-final-8', type: 'fill-blanks', title: 'The Final Message', instructions: 'Complete the key word from the closing message in Chapter 14.',
    question: 'Complete the statement.',
    fillBlanksText: 'Allah is unique in every way. He has no [blank].',
    correctAnswer: 'partner',
    explanation: 'The closing message says that Allah has no partner, rival, or helper.',
    feedback: { correct: 'Correct.', incorrect: 'Return to the final quoted message of Chapter 14.' },
  },
  {
    id: 'abraham-a2-final-9', type: 'multiple-choice', title: 'A Shared Task', instructions: 'Choose the detail stated in Chapter 14.',
    question: 'What important task do Abraham and Ishmael do together?',
    options: ['They build the Ka’ba', 'They build Nimrod’s palace', 'They make stone idols'],
    correctAnswer: 0,
    explanation: 'Chapter 14 says Ishmael helps Abraham build the House of Allah, the Ka’ba.',
    feedback: { correct: 'Correct.', incorrect: 'Return to the building scene in Chapter 14.' },
  },
  {
    id: 'abraham-a2-final-10', type: 'sequencing', title: 'Whole-Story Turning Points', instructions: 'Put these major turning points in story order.',
    question: 'Which order best represents the whole Abraham A2 story?',
    sequencingItems: [
      { id: '1', text: 'Abraham questions powerless stone objects' },
      { id: '2', text: 'Abraham leaves the largest idol unbroken after breaking the others' },
      { id: '3', text: 'Allah makes the fire cool and safe for Abraham' },
      { id: '4', text: 'Abraham leaves Babylon and travels to other lands' },
      { id: '5', text: 'Abraham and Ishmael build the Ka’ba' },
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'These anchors move from the opening idol scenes through the fire and journey to the final building chapter.',
    feedback: { correct: 'Correct.', incorrect: 'Use Chapters 1, 6, 9, 11, and 14 as anchors.' },
  },
];
