import type { Exercise } from '../../../../types';

// Single source of truth for every English Abraham A2 learning activity.
// Story prose remains in pages.ts and is never generated or rewritten here.

export const abrahamA2QuickChallenges: Record<number, Exercise> = {
  1: {
    id: 'abraham-a2-quick-1', type: 'matching', title: 'People and Stone Objects',
    instructions: 'Match each group with what Chapter 1 says.', question: 'What did the people do, and what could the stone objects not do?',
    matchingPairs: [{ left: 'People', right: 'made wishes to the objects' }, { left: 'Stone objects', right: 'could not hear, talk, move, or understand' }],
    correctAnswer: { People: 'made wishes to the objects', 'Stone objects': 'could not hear, talk, move, or understand' },
    explanation: 'The people made wishes, but Abraham noticed that the stone objects could not hear, talk, move, or understand.',
    feedback: { correct: 'Correct. You compared the people’s action with the objects’ lack of power.', incorrect: 'Reread the final sentences of Chapter 1 and separate what the people did from what the objects could not do.' }
  },
  2: {
    id: 'abraham-a2-quick-2', type: 'multiple-choice', title: 'Mardukh’s Big Ears', instructions: 'Choose the reason supported by Chapter 2.',
    question: 'Why did Abraham find his father’s explanation about Mardukh ridiculous?',
    options: ['His father said Mardukh’s big ears meant he was very smart', 'His father said Mardukh had created the sun', 'His father said Mardukh could speak to Abraham'], correctAnswer: 0,
    explanation: 'His father connected the statue’s large ears with being very smart, and Abraham found that explanation ridiculous.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sentence where Abraham’s father explains the statue’s big ears.' }
  },
  3: {
    id: 'abraham-a2-quick-3', type: 'tap-reveal', title: 'What Disappeared?', instructions: 'Answer from memory, then reveal the answer.',
    question: 'What happened to both the star and the moon that helped Abraham reject them as his Lord?',
    tapRevealItems: [{ question: 'What happened to both the star and the moon?', answer: 'They disappeared or went away.' }],
    correctAnswer: 'They disappeared or went away.', explanation: 'The star disappeared and the moon went away. Abraham understood that what disappears could not be Allah.',
    feedback: { correct: 'Correct.', incorrect: 'Compare the end of the star scene with the end of the moon scene.' }
  },
  4: {
    id: 'abraham-a2-quick-4', type: 'multiple-choice', title: 'Creator and Creation', instructions: 'Choose what Chapter 4 shows.',
    question: 'What did the setting sun help Abraham understand?',
    options: ['Allah is the Creator; the sun is a creation', 'The sun is Allah because it is bright', 'The moon is more powerful than the sun'], correctAnswer: 0,
    explanation: 'When the sun set, Abraham understood that Allah is not a creation; Allah is the Creator of everything.',
    feedback: { correct: 'Correct.', incorrect: 'Find what Abraham understood when the sun set.' }
  },
  5: {
    id: 'abraham-a2-quick-5', type: 'true-false', title: 'Following the Fathers', instructions: 'Decide whether the statement agrees with Chapter 5.',
    question: 'The people said they followed the idols because their fathers had done the same.', correctAnswer: true,
    explanation: 'Their stated reason was family tradition: they had seen their fathers worship the idols.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the people’s answer to Abraham’s question about why they bowed to the objects.' }
  },
  6: {
    id: 'abraham-a2-quick-6', type: 'multiple-choice', title: 'The Largest Idol', instructions: 'Choose the reason supported by Chapter 6.',
    question: 'Why did Abraham leave the largest idol unbroken and put the axe around its neck?',
    options: ['To make the people question what their idols could really do', 'Because he wanted to worship the largest idol', 'Because the festival ended before he could finish'], correctAnswer: 0,
    explanation: 'Leaving the largest idol and the axe was part of Abraham’s plan to make the people think about their belief.',
    feedback: { correct: 'Correct.', incorrect: 'Think about what Abraham wanted the people to ask when they saw the axe.' }
  },
  7: {
    id: 'abraham-a2-quick-7', type: 'multiple-choice', title: 'Their Own Words', instructions: 'Choose the sentence that supports Abraham’s point.',
    question: 'Which sentence from the people supported Abraham’s point about the idols?',
    options: ['These objects do not speak', 'The biggest idol is very smart', 'The idols can protect themselves'], correctAnswer: 0,
    explanation: 'The people themselves said the objects did not speak. Abraham then used that admission to question their worship.',
    feedback: { correct: 'Correct.', incorrect: 'Find the people’s answer after Abraham tells them to ask the biggest idol.' }
  },
  8: {
    id: 'abraham-a2-quick-8', type: 'multiple-choice', title: 'Calm in Danger', instructions: 'Choose the reason stated in Chapter 8.',
    question: 'The fire was extremely dangerous. Why did Abraham still stay calm?',
    options: ['Because he trusted Allah', 'Because the people stopped the punishment', 'Because he thought the fire was already cold'], correctAnswer: 0,
    explanation: 'The chapter places the danger and Abraham’s calmness together: he stayed calm because he trusted Allah.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the sentence that explains why Abraham stayed calm.' }
  },
  9: {
    id: 'abraham-a2-quick-9', type: 'matching', title: 'What Changed?', instructions: 'Match what changed and what did not change after the miracle.',
    question: 'What happened to the fire and to the people?',
    matchingPairs: [{ left: 'The fire', right: 'became cool and safe' }, { left: 'The people', right: 'remained against Abraham' }],
    correctAnswer: { 'The fire': 'became cool and safe', 'The people': 'remained against Abraham' },
    explanation: 'Allah made the fire cool and safe, but the amazed people still did not change their minds.',
    feedback: { correct: 'Correct.', incorrect: 'Compare the miracle with the people’s response in the final sentences.' }
  },
  10: {
    id: 'abraham-a2-quick-10', type: 'multiple-choice', title: 'The Sun Challenge', instructions: 'Choose why the question was a strong challenge.',
    question: 'Why was Abraham’s question about the sun a strong challenge to Nimrod’s claim?',
    options: ['Nimrod could not make the sun rise from the west', 'Nimrod did not know where Babylon was', 'Nimrod wanted to travel west'], correctAnswer: 0,
    explanation: 'Nimrod claimed great power, but he could not make the sun rise from the west.',
    feedback: { correct: 'Correct.', incorrect: 'Return to Abraham’s final question to Nimrod.' }
  },
  11: {
    id: 'abraham-a2-quick-11', type: 'multiple-choice', title: 'Leaving Babylon', instructions: 'Choose the reason stated in Chapter 11.',
    question: 'Why did Abraham leave Babylon and travel to other lands?',
    options: ['People would not listen, so he wanted to carry Allah’s message to other lands', 'He wanted to become king in another country', 'He wanted to find new stone idols'], correctAnswer: 0,
    explanation: 'Abraham understood that the people would not listen, so he left Babylon to tell people in other lands about Allah’s message.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sentence immediately before Abraham begins his journey.' }
  },
  12: {
    id: 'abraham-a2-quick-12', type: 'matching', title: 'Trust and Action', instructions: 'Match Hagar’s trust with her action in the valley.',
    question: 'What did Hagar believe, and what did she do?',
    matchingPairs: [{ left: 'Hagar’s trust', right: 'Allah will protect us' }, { left: 'Hagar’s action', right: 'searched and ran from hill to hill' }],
    correctAnswer: { 'Hagar’s trust': 'Allah will protect us', 'Hagar’s action': 'searched and ran from hill to hill' },
    explanation: 'Hagar trusted Allah and also acted: she searched for food and water and ran from hill to hill.',
    feedback: { correct: 'Correct.', incorrect: 'Use one sentence from each paragraph: what Hagar believed, then what she did.' }
  },
  13: {
    id: 'abraham-a2-quick-13', type: 'sequencing', title: 'Water to City', instructions: 'Put the cause-result chain in order.',
    question: 'How does Chapter 13 move from the water to the city?',
    sequencingItems: [{ id: '1', text: 'Zamzam water appears' }, { id: '2', text: 'More people come because of the water' }, { id: '3', text: 'They build a city called Mecca' }],
    correctAnswer: ['1', '2', '3'], explanation: 'The chapter connects the water with settlement: Zamzam appears, more people come, and Mecca is built.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the final paragraph from the water to the arrival of people and then the city.' }
  },
  14: {
    id: 'abraham-a2-quick-14', type: 'matching', title: 'Building and Message', instructions: 'Match the final action with the final message.',
    question: 'How does Chapter 14 end the story?',
    matchingPairs: [{ left: 'Abraham and Ishmael', right: 'build the Ka’ba together' }, { left: 'Final message', right: 'Allah is unique and has no partner' }],
    correctAnswer: { 'Abraham and Ishmael': 'build the Ka’ba together', 'Final message': 'Allah is unique and has no partner' },
    explanation: 'The final chapter joins the building of the Ka’ba with the story’s closing message about worshipping Allah alone.',
    feedback: { correct: 'Correct.', incorrect: 'Use the building paragraph and the final quoted message.' }
  }
};

export const abrahamA2KnowledgeCheckExercises: Exercise[] = [
  {
    id: 'abraham-a2-kc-1', type: 'multiple-choice', title: 'Abraham’s First Observation', instructions: 'Choose the answer supported by Chapter 1.',
    question: 'What first made Abraham doubt the stone objects?', options: ['They could not eat, drink, talk, move, hear, or understand', 'They were kept outside the town', 'They were smaller than the people'], correctAnswer: 0,
    explanation: 'Abraham noticed that the objects had none of the abilities people expected from a god.', feedback: { correct: 'Correct.', incorrect: 'Return to the final sentences of Chapter 1.' }
  },
  {
    id: 'abraham-a2-kc-2', type: 'multiple-choice', title: 'Looking at the Sky', instructions: 'Choose what Abraham learned from the star and moon scenes.',
    question: 'What idea connects the star and the moon in Chapter 3?', options: ['Both went away, so Abraham rejected them as Allah', 'Both spoke to Abraham', 'Both stayed in the sky forever'], correctAnswer: 0,
    explanation: 'Both disappeared or went away, which helped Abraham understand that they could not be Allah.', feedback: { correct: 'Correct.', incorrect: 'Compare what happens at the end of both sky examples.' }
  },
  {
    id: 'abraham-a2-kc-3', type: 'true-false', title: 'The People’s Reason', instructions: 'Decide whether the statement agrees with Chapter 5.',
    question: 'The people defended idol worship by saying that their fathers had done the same.', correctAnswer: true,
    explanation: 'They gave tradition, not the idols’ real power, as their reason.', feedback: { correct: 'Correct.', incorrect: 'Reread the people’s direct answer to Abraham.' }
  },
  {
    id: 'abraham-a2-kc-4', type: 'multiple-choice', title: 'The Broken Idols', instructions: 'Choose the purpose of Abraham’s plan.',
    question: 'What was Abraham trying to make the people think about by leaving the largest idol with the axe?', options: ['Whether their idols could really act or protect themselves', 'Whether the festival was long enough', 'Whether the food in the idol house was cold'], correctAnswer: 0,
    explanation: 'The plan prepared the question that exposed the idols’ inability to act.', feedback: { correct: 'Correct.', incorrect: 'Connect Chapter 6 with the questioning scene in Chapter 7.' }
  },
  {
    id: 'abraham-a2-kc-5', type: 'true-false', title: 'After the Fire', instructions: 'Decide whether the statement agrees with Chapter 9.',
    question: 'Seeing Abraham safe in the fire made all the people accept his message.', correctAnswer: false,
    explanation: 'The people were amazed, but the chapter says they did not change their minds.', feedback: { correct: 'Correct.', incorrect: 'Read the final two sentences of Chapter 9.' }
  },
  {
    id: 'abraham-a2-kc-6', type: 'multiple-choice', title: 'Nimrod’s Claim', instructions: 'Choose how Abraham answered Nimrod’s claim to great power.',
    question: 'What did Abraham ask Nimrod to do?', options: ['Make the sun rise from the west', 'Build a larger idol', 'Travel from Babylon to Palestine'], correctAnswer: 0,
    explanation: 'Abraham challenged Nimrod to make the sun rise from the west.', feedback: { correct: 'Correct.', incorrect: 'Return to Abraham’s final sentence in Chapter 10.' }
  },
  {
    id: 'abraham-a2-kc-7', type: 'multiple-choice', title: 'The Valley', instructions: 'Choose the best description of Hagar in Chapter 12.',
    question: 'Which answer shows both Hagar’s trust and her effort?', options: ['She trusted Allah and searched for food and water', 'She trusted Allah and did nothing', 'She left Ishmael and returned to Babylon'], correctAnswer: 0,
    explanation: 'The chapter shows trust first and active searching afterward.', feedback: { correct: 'Correct.', incorrect: 'Use one detail from each paragraph of Chapter 12.' }
  },
  {
    id: 'abraham-a2-kc-8', type: 'multiple-choice', title: 'The Closing Chapter', instructions: 'Choose the pair supported by Chapter 14.',
    question: 'Which two ideas belong together in the final chapter?', options: ['Abraham and Ishmael build the Ka’ba; the story closes with Allah having no partner', 'Nimrod builds Mecca; the people return to idol worship', 'Hagar builds the Ka’ba; Abraham stays in Babylon'], correctAnswer: 0,
    explanation: 'Chapter 14 joins the Ka’ba building with the final message that Allah is unique and has no partner.', feedback: { correct: 'Correct.', incorrect: 'Use the building paragraph and the final message together.' }
  }
];

export const abrahamA2VocabularyChallengePairs = [
  { word: 'idol', meaning: 'A statue or object that people wrongly worship as a god' },
  { word: 'Creator', meaning: 'The one who made everything' },
  { word: 'arrogant', meaning: 'Thinking you are better or more important than others' },
  { word: 'miracle', meaning: 'An extraordinary event from Allah beyond normal human power' },
  { word: 'valley', meaning: 'A low area of land between hills or mountains' },
  { word: 'mission', meaning: 'An important job or task given to someone' }
];

export const abrahamA2FinalReviewExercises: Exercise[] = [
  {
    id: 'abraham-a2-review-sequence', type: 'sequencing', title: 'Abraham’s Journey', instructions: 'Put the major stages in the correct order.', question: 'How does the story move from Babylon to the Ka’ba?',
    correctAnswer: ['1', '2', '3', '4', '5', '6'], explanation: 'The story moves from questioning idol worship to the fire, the journey away from Babylon, Hagar’s search, Zamzam, and the building of the Ka’ba.',
    feedback: { correct: 'Correct. You rebuilt the major turning points.', incorrect: 'Start in Babylon. Then find the fire, the journey, the valley, Zamzam, and finally the Ka’ba.' },
    sequencingItems: [
      { id: '1', text: 'Abraham questions the worship of powerless objects' },
      { id: '2', text: 'Allah makes the fire cool and safe for Abraham' },
      { id: '3', text: 'Abraham leaves Babylon to carry the message to other lands' },
      { id: '4', text: 'Hagar searches for food and water in the valley' },
      { id: '5', text: 'Zamzam appears and more people come to the area' },
      { id: '6', text: 'Abraham and Ishmael build the Ka’ba together' }
    ]
  },
  {
    id: 'abraham-a2-review-match', type: 'matching', title: 'People, Choices, and Results', instructions: 'Match each person or group with a different action or response.', question: 'Who did what in the story?',
    matchingPairs: [{ left: 'Abraham', right: 'challenges Nimrod with the sun' }, { left: 'People of Babylon', right: 'stay against the message after the miracle' }, { left: 'Hagar', right: 'searches between the hills' }, { left: 'Ishmael', right: 'helps build the Ka’ba' }],
    correctAnswer: { Abraham: 'challenges Nimrod with the sun', 'People of Babylon': 'stay against the message after the miracle', Hagar: 'searches between the hills', Ishmael: 'helps build the Ka’ba' },
    explanation: 'These matches reconnect four different story stages.', feedback: { correct: 'Correct.', incorrect: 'Check Chapters 9–10, 12, and 14 and match one action to each person or group.' }
  },
  {
    id: 'abraham-a2-review-reflection', type: 'reflection', title: 'Trust Followed by Action', instructions: 'Use one story event, then give a short A2 response.', question: 'How does the story show that trust can be followed by action?', correctAnswer: null,
    explanation: 'Hagar trusted Allah, but she also searched and ran from hill to hill. Abraham also trusted Allah while continuing his mission.',
    feedback: { correct: 'Use one accurate story event to support your idea.', incorrect: 'Choose a story event first; then add your short explanation.' },
    discussionPrompts: [{ question: 'What did Hagar believe, and what did she do next?', mode: 'Individual' }, { question: 'What changed in the fire, and what did not change in the people?', mode: 'Pair' }, { question: 'How does the final message connect with Abraham’s earlier questions about idols?', mode: 'Class' }]
  },
  {
    id: 'abraham-a2-review-quiz', type: 'quiz-game', title: 'Abraham A2 Retrieval Review', instructions: 'Answer eight questions from across the story. Use the hint only when needed.', question: 'Can you reconnect important ideas without repeating the Knowledge Check?', correctAnswer: null,
    explanation: 'The questions retrieve supporting details, cause-result links, and character responses not used as the same micro-facts in the Knowledge Check.', feedback: { correct: 'Good retrieval.', incorrect: 'Use the hint to return to the relevant chapter idea, then try again.' },
    quizQuestions: [
      { question: 'What did Abraham do with the idols when he was a young boy?', options: [{ text: 'He played with them like toys', isCorrect: true }, { text: 'He built a new house for them', isCorrect: false }, { text: 'He asked them to teach him', isCorrect: false }], hint: 'Use Chapter 2 before the Mardukh conversation.' },
      { question: 'What did Abraham ask Allah for before becoming a Messenger?', options: [{ text: 'The right way', isCorrect: true }, { text: 'A palace', isCorrect: false }, { text: 'A larger statue', isCorrect: false }], hint: 'Use the prayer in Chapter 4.' },
      { question: 'What did Abraham jokingly ask the idols in the empty house?', options: [{ text: 'Why do you not eat the food?', isCorrect: true }, { text: 'Why do you not leave Babylon?', isCorrect: false }, { text: 'Why do you not build a fire?', isCorrect: false }], hint: 'Use the food placed in front of the idols in Chapter 6.' },
      { question: 'Why were the people ashamed in Chapter 8?', options: [{ text: 'They knew Abraham was right but were too arrogant to accept it', isCorrect: true }, { text: 'They had forgotten the festival', isCorrect: false }, { text: 'They wanted Abraham to become king', isCorrect: false }], hint: 'Read the first two sentences of Chapter 8.' },
      { question: 'What did the fire burn while Abraham remained safe?', options: [{ text: 'The ropes on his hands and feet', isCorrect: true }, { text: 'The Ka’ba walls', isCorrect: false }, { text: 'Nimrod’s palace', isCorrect: false }], hint: 'Use the first paragraph of Chapter 9.' },
      { question: 'Who are the two believers named before Abraham leaves Babylon?', options: [{ text: 'Sarah and Lot', isCorrect: true }, { text: 'Hagar and Nimrod', isCorrect: false }, { text: 'Ishmael and Gabriel', isCorrect: false }], hint: 'Use the opening of Chapter 11.' },
      { question: 'What did Abraham ask Allah to give his family so they could thank Him?', options: [{ text: 'Blessings', isCorrect: true }, { text: 'Stone idols', isCorrect: false }, { text: 'A kingdom', isCorrect: false }], hint: 'Use Abraham’s prayer in Chapter 12.' },
      { question: 'What did Hagar do with the Zamzam water first?', options: [{ text: 'She drank and gave some to Ishmael', isCorrect: true }, { text: 'She carried it back to Babylon', isCorrect: false }, { text: 'She used it to build a house', isCorrect: false }], hint: 'Use the first paragraph of Chapter 13.' }
    ]
  }
];

export const abrahamA2FinalChallengeExercises: Exercise[] = [
  {
    id: 'abraham-a2-final-1', type: 'multiple-choice', title: 'Power and Worship', instructions: 'Choose the conclusion supported by Chapters 1–2.',
    question: 'Which observation best supports Abraham’s rejection of the stone gods?', options: ['They depended on people and could not act for themselves', 'They lived far from Babylon', 'They were made only during festivals'], correctAnswer: 0,
    explanation: 'Across the opening chapters, the objects are made and handled by people and cannot hear, speak, move, or help.', feedback: { correct: 'Correct.', incorrect: 'Combine what Abraham sees in Chapters 1 and 2.' }
  },
  {
    id: 'abraham-a2-final-2', type: 'multiple-choice', title: 'From Sky to Creator', instructions: 'Choose the best whole-idea answer.',
    question: 'What larger idea does Abraham reach after watching the star, moon, and sun?', options: ['Things that appear and disappear are creation; Allah is the Creator', 'The brightest object must be Allah', 'Only the moon can guide people'], correctAnswer: 0,
    explanation: 'The sky scenes lead to the distinction between creation and the Creator.', feedback: { correct: 'Correct.', incorrect: 'Connect Chapters 3 and 4 instead of using only one object.' }
  },
  {
    id: 'abraham-a2-final-3', type: 'multiple-choice', title: 'Courage and Consequence', instructions: 'Choose the cause-result connection supported by Chapters 7–8.',
    question: 'What happens after Abraham makes the people face the idols’ weakness?', options: ['They refuse to accept the point and prepare a huge fire', 'They immediately leave Babylon with him', 'They ask him to build the Ka’ba'], correctAnswer: 0,
    explanation: 'The people know his point but remain arrogant and choose punishment.', feedback: { correct: 'Correct.', incorrect: 'Follow the transition from the questioning scene to the fire scene.' }
  },
  {
    id: 'abraham-a2-final-4', type: 'true-false', title: 'Miracle and Choice', instructions: 'Decide whether the statement is supported by the story.',
    question: 'The miracle of the cool fire changed Abraham’s danger, but it did not automatically change the people’s decision.', correctAnswer: true,
    explanation: 'Abraham became safe, while the people remained against him.', feedback: { correct: 'Correct.', incorrect: 'Compare the result for Abraham with the result for the people.' }
  },
  {
    id: 'abraham-a2-final-5', type: 'true-false', title: 'Claim and Real Power', instructions: 'Decide whether the statement is supported by Chapter 10.',
    question: 'Nimrod’s example with the two slaves proved that he could control the natural order like Allah.', correctAnswer: false,
    explanation: 'Abraham’s sun challenge shows the limit of Nimrod’s claim.', feedback: { correct: 'Correct.', incorrect: 'Separate choosing whether a prisoner lives from controlling the sun.' }
  },
  {
    id: 'abraham-a2-final-6', type: 'matching', title: 'Journey and Purpose', instructions: 'Match each event with its purpose or result.', question: 'How do later events move the story forward?',
    matchingPairs: [{ left: 'Abraham leaves Babylon', right: 'carry the message to other lands' }, { left: 'Hagar searches between the hills', right: 'look for food and water for her child' }],
    correctAnswer: { 'Abraham leaves Babylon': 'carry the message to other lands', 'Hagar searches between the hills': 'look for food and water for her child' },
    explanation: 'Both actions respond to a difficult situation with purposeful action.', feedback: { correct: 'Correct.', incorrect: 'Use the reasons stated in Chapters 11 and 12.' }
  },
  {
    id: 'abraham-a2-final-7', type: 'matching', title: 'Gift and Community', instructions: 'Match each development with the result named in the story.', question: 'What grows from the valley events?',
    matchingPairs: [{ left: 'Zamzam water', right: 'draws more people to the area' }, { left: 'The growing settlement', right: 'becomes the city called Mecca' }],
    correctAnswer: { 'Zamzam water': 'draws more people to the area', 'The growing settlement': 'becomes the city called Mecca' },
    explanation: 'Chapter 13 gives a clear water → people → city development.', feedback: { correct: 'Correct.', incorrect: 'Read the final three sentences of Chapter 13 in order.' }
  },
  {
    id: 'abraham-a2-final-8', type: 'fill-blanks', title: 'The Final Message', instructions: 'Complete the key word from the closing message.', question: 'Complete the statement.', fillBlanksText: 'Allah is unique in every way. He has no [blank].', correctAnswer: 'partner',
    explanation: 'The final message says that Allah has no partner, rival, or helper.', feedback: { correct: 'Correct.', incorrect: 'Return to the last quoted message of Chapter 14.' }
  },
  {
    id: 'abraham-a2-final-9', type: 'fill-blanks', title: 'Trust With Effort', instructions: 'Complete the action word from the valley scene.', question: 'Complete the sentence.', fillBlanksText: 'Hagar trusted Allah, and she also [blank] for food and water.', correctAnswer: 'searched',
    explanation: 'Chapter 12 shows trust together with active searching.', feedback: { correct: 'Correct.', incorrect: 'Use the verb describing what Hagar did after the food and water were gone.' }
  },
  {
    id: 'abraham-a2-final-10', type: 'sequencing', title: 'From Babylon to Mecca', instructions: 'Put these four turning points in story order.', question: 'Which order best represents the second half of the story?',
    sequencingItems: [{ id: '1', text: 'Abraham survives the fire' }, { id: '2', text: 'Abraham challenges Nimrod' }, { id: '3', text: 'Abraham leaves Babylon' }, { id: '4', text: 'Abraham and Ishmael build the Ka’ba' }],
    correctAnswer: ['1', '2', '3', '4'], explanation: 'These turning points move from the Babylon conflict to the journey and the final building scene.', feedback: { correct: 'Correct.', incorrect: 'Use Chapters 9, 10, 11, and 14 as anchors.' }
  }
];
