import type { Exercise, VocabularyChallengePair } from '../../../../types';

// Single source of truth for every English Adam A2 learning activity.
// Story prose lives in pages.ts and is never generated or rewritten here.

export const adamA2QuickChallenges: Record<number, Exercise> = {
  1: {
    id: 'adam-a2-quick-1', type: 'multiple-choice', title: 'Many Skin Colors',
    instructions: 'Read the question. Choose the answer from Chapter 1.',
    question: 'Why are people’s skin colors not all the same?',
    options: ['Humans have lived on earth for many years.', 'Adam was made from soil from many parts of the earth.', 'The angels waited with curiosity for the new human.'], correctAnswer: 1,
    explanation: 'Chapter 1 says the angels “collected soil from different parts of the earth, and Allah shaped Adam. Because of this, humans have different skin colors.”',
    feedback: { correct: 'Yes! The soil came from many places, so people have many skin colors. We are all children of Adam.', incorrect: 'Not this one. Read the third paragraph of Chapter 1 again and find the words “Because of this …”.' }
  },
  2: {
    id: 'adam-a2-quick-2', type: 'multiple-choice', title: 'Adam’s Knowledge',
    instructions: 'Read the question. Choose the answer from Chapter 2.',
    question: 'Why did Adam know more than the angels?',
    options: ['Allah gave him knowledge and taught him to think.', 'He was created from clay.', 'The angels admired him and respected him.'], correctAnswer: 0,
    explanation: 'Chapter 2 says Adam “was wiser than the angels, because Allah gave Adam knowledge and taught him to think.”',
    feedback: { correct: 'Right! Allah gave Adam knowledge and taught him to think. That is why he learned more than the angels knew.', incorrect: 'Read the first paragraph of Chapter 2 again. Find the word “because” and read what comes after it.' }
  },
  3: {
    id: 'adam-a2-quick-3', type: 'matching', matchingHeadings: { left: 'Who or what', right: 'What Chapter 3 says' }, title: 'What Makes a Person Great?',
    instructions: 'Match each part with what Chapter 3 says about it.',
    question: 'What does Chapter 3 tell us about Iblis, Adam and real value?',
    matchingPairs: [
      { left: 'Iblis', right: 'He said, “I am better than Adam.”' },
      { left: 'Adam', right: 'His knowledge was for the good of every creature.' },
      { left: 'Clay or fire', right: 'It did not make anybody valuable.' },
      { left: 'Useful knowledge', right: 'With it, humans can do good and stop bad.' }
    ],
    correctAnswer: { 'Iblis': 'He said, “I am better than Adam.”', 'Adam': 'His knowledge was for the good of every creature.', 'Clay or fire': 'It did not make anybody valuable.', 'Useful knowledge': 'With it, humans can do good and stop bad.' },
    explanation: 'Iblis said he was better because he came from fire. But Chapter 3 says, “For Allah, the clay or the fire did not make anybody valuable. But useful knowledge makes people great, because with this knowledge, humans can do good and stop bad.”',
    feedback: { correct: 'Well done! Where we come from does not make us better. Useful knowledge and good actions do.', incorrect: 'Read Chapter 3 again. The first paragraph has Iblis’s words, the second is about Adam’s knowledge, and the third is about clay, fire and useful knowledge.' }
  },
  4: {
    id: 'adam-a2-quick-4', type: 'multiple-choice', title: 'Adam and Eve',
    instructions: 'Read the question. Choose the answer from Chapter 4.',
    question: 'Why did Allah give Adam a wife?',
    options: ['Allah wanted Adam to be careful about Iblis.', 'The angels asked Allah for another human.', 'Adam started to feel lonely in Paradise.'], correctAnswer: 2,
    explanation: 'Chapter 4 says, “Adam started to feel lonely in Paradise. So, Allah gave him a wife. Her name was Eve (Hawwa).”',
    feedback: { correct: 'Yes! Adam felt lonely, so Allah gave him Eve.', incorrect: 'Read the second paragraph of Chapter 4 again. How did Adam feel just before the word “So”?' }
  },
  5: {
    id: 'adam-a2-quick-5', type: 'sequencing', title: 'The Lie and the Mistake',
    instructions: 'Put the events from Chapter 5 in the right order.',
    question: 'What happened first, next and last?',
    sequencingItems: [
      { id: '1', text: 'Iblis told Adam and Eve that he was their friend.' },
      { id: '2', text: 'Adam and Eve forgot Allah’s warning.' },
      { id: '3', text: 'They ate fruit from the banned tree.' },
      { id: '4', text: 'They said sorry to Allah.' }
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'First Iblis came near them and said he was their friend. After a while, they believed his lie and forgot Allah’s warning. Then they ate from the banned tree. They were very sad and said sorry to Allah.',
    feedback: { correct: 'Great! You followed the story from Iblis’s lie to Adam and Eve saying sorry.', incorrect: 'Follow Chapter 5 paragraph by paragraph: Iblis’s words, what Adam and Eve forgot, what they ate, and what they did when they were sad.' }
  },
  6: {
    id: 'adam-a2-quick-6', type: 'true-false', title: 'Iblis on Earth',
    instructions: 'Is the sentence true or false? Use Chapter 6.',
    question: 'On earth, Iblis stayed far away from Adam and Eve.', correctAnswer: false,
    explanation: 'Chapter 6 says, “But Iblis also followed Adam and Eve on earth. He was still around. He wanted people not to remember Allah in their daily lives.”',
    feedback: { correct: 'Correct! Iblis followed them to earth. He wanted people to forget Allah.', incorrect: 'Read the last paragraph of Chapter 6 again. Where did Iblis go, and what did he want?' }
  },
  7: {
    id: 'adam-a2-quick-7', type: 'multiple-choice', title: 'A Warning for the Children',
    instructions: 'Read the question. Choose the answer from Chapter 7.',
    question: 'Why did Adam and Eve warn their children against Iblis?',
    options: ['Iblis was their enemy, not their friend.', 'Iblis was the ruler of the earth.', 'The other messengers asked them to do it.'], correctAnswer: 0,
    explanation: 'Chapter 7 says, “They also warned their children against Iblis, because Iblis was their enemy, not their friend.” The other messengers came later, after Adam’s death.',
    feedback: { correct: 'Right! Iblis said he was their friend, but he was really their enemy.', incorrect: 'Read the second paragraph of Chapter 7 again. Find the word “because” after “warned their children”.' }
  },
  8: {
    id: 'adam-a2-quick-8', type: 'matching', matchingHeadings: { left: 'The brothers', right: 'Their work and gift' }, title: 'Two Brothers, Two Offerings',
    instructions: 'Match each part with the right answer from Chapter 8.',
    question: 'What was each brother’s work, and what did he offer to Allah?',
    matchingPairs: [
      { left: 'Habil’s work', right: 'a shepherd' },
      { left: 'Qabil’s work', right: 'a farmer' },
      { left: 'Habil’s offering', right: 'his best and healthiest sheep' },
      { left: 'Qabil’s offering', right: 'just a handful of his crops' }
    ],
    correctAnswer: { 'Habil’s work': 'a shepherd', 'Qabil’s work': 'a farmer', 'Habil’s offering': 'his best and healthiest sheep', 'Qabil’s offering': 'just a handful of his crops' },
    explanation: 'Chapter 8 says Habil became a shepherd and Qabil was a farmer. “Habil brought his best and healthiest sheep as a gift for Allah, but Qabil brought just a handful of his crops.” The chapter ends: “Real goodness is giving the best and the most loved.”',
    feedback: { correct: 'Well done! Habil gave his best. Real goodness is giving the best we have.', incorrect: 'The jobs are in the first paragraph of Chapter 8. The offerings are in the second paragraph.' }
  },
  9: {
    id: 'adam-a2-quick-9', type: 'multiple-choice', title: 'Habil’s Answer',
    instructions: 'Read the question. Choose the answer from Chapter 9.',
    question: 'Habil said, “I won’t fight back or harm you.” Why?',
    options: ['Qabil said sorry to him first.', 'Qabil was his brother, and he feared Allah.', 'Their father Adam told him not to fight.'], correctAnswer: 1,
    explanation: 'Habil gave his reasons himself: “You are my brother, and I fear Allah.”',
    feedback: { correct: 'Yes! Habil chose not to hurt his brother, because he feared Allah.', incorrect: 'Read Habil’s words in the first paragraph of Chapter 9 again. Look at the sentence right after “I won’t fight back or harm you.”' }
  },
  10: {
    id: 'adam-a2-quick-10', type: 'true-false', title: 'The Message Continues',
    instructions: 'Is the sentence true or false? Use Chapter 10.',
    question: 'Adam’s message stayed only with his own family.', correctAnswer: false,
    explanation: 'Chapter 10 says, “His children and grandchildren spread his message worldwide. This message still advises people to love and respect Allah.”',
    feedback: { correct: 'Correct! His children and grandchildren took his message all over the world.', incorrect: 'Read the second paragraph of Chapter 10 again. Where did Adam’s children and grandchildren spread his message?' }
  }
};

export const adamA2KnowledgeCheckExercises: Exercise[] = [
  { id: 'adam-a2-kc-1-the-angels-wait', type: 'multiple-choice', title: 'The Angels', instructions: 'Read the question. Choose the answer.', question: 'Allah told the angels that He was going to create a human. How did the angels feel?', options: ['They were surprised and curious.', 'They were angry and afraid.', 'They were sad and lonely.'], correctAnswer: 0, explanation: 'Chapter 1: “Angels got surprised. They began waiting with curiosity.”', feedback: { correct: 'Yes! The angels were surprised, and they waited with curiosity to see the new creature.', incorrect: 'Not this one. Read the second paragraph of Chapter 1 again. What did the angels do after Allah spoke?' } },
  { id: 'adam-a2-kc-2-not-everyone-admired', type: 'true-false', title: 'Everyone Admired Adam?', instructions: 'Read the sentence. Is it true or false?', question: 'All the angels and Iblis admired Adam.', correctAnswer: false, explanation: 'Chapter 2: “All the angels thought that Adam was amazing.” But: “Iblis didn’t think so. Iblis thought Adam was an unimportant creature created from clay.”', feedback: { correct: 'Right, it is false. The angels admired Adam, but Iblis did not. He thought Adam was unimportant.', incorrect: 'Read the second paragraph of Chapter 2 again. Did Iblis think the same as the angels?' } },
  { id: 'adam-a2-kc-3-sent-away', type: 'multiple-choice', title: 'Iblis Is Sent Away', instructions: 'Read the question. Choose the answer.', question: 'Why did Allah send Iblis away?', options: ['He ate fruit from the banned tree.', 'He hurt Adam and Eve in Paradise.', 'He kept saying that he was right.'], correctAnswer: 2, explanation: 'Chapter 3: “But Iblis continued saying he was right and the Creator was wrong.” After that, Allah sent him away from His love and care.', feedback: { correct: 'Yes. Iblis was arrogant. He did not say sorry. He kept saying he was right.', incorrect: 'Not quite. Read the end of Chapter 3 again. What did Iblis continue saying?' } },
  { id: 'adam-a2-kc-4-why-iblis-hated-adam', type: 'multiple-choice', title: 'Iblis and Adam', instructions: 'Read the question. Choose the answer.', question: 'Why did Iblis hate Adam?', options: ['Adam told the angels bad things about him.', 'Adam took the best place in Paradise from him.', 'He thought he lost Allah’s love because of Adam.'], correctAnswer: 2, explanation: 'Chapter 4: “Iblis thought Allah put him far from His love because of Adam.”', feedback: { correct: 'Yes. Iblis blamed Adam. He did not see that his own arrogance was the real problem.', incorrect: 'Not this one. Read the first paragraph of Chapter 4 again. What did Iblis think about Adam?' } },
  { id: 'adam-a2-kc-5-not-on-purpose', type: 'true-false', title: 'The Mistake', instructions: 'Read the sentence. Is it true or false?', question: 'Adam and Eve ate from the tree on purpose, because they wanted to disobey Allah.', correctAnswer: false, explanation: 'Chapter 5: “They forgot Allah’s warning.” And: “They made a mistake, but it wasn’t on purpose.”', feedback: { correct: 'Right, it is false. Adam and Eve forgot the warning. Their mistake was not on purpose, and they were very sorry.', incorrect: 'Read Chapter 5 again. Did Adam and Eve remember Allah’s warning? Was their mistake on purpose?' } },
  { id: 'adam-a2-kc-6-the-first-messenger', type: 'multiple-choice', title: 'The First Messenger', instructions: 'Read the question. Choose the answer.', question: 'What did Adam (pbuh) teach people as the first Messenger?', options: ['to build big houses and grow crops', 'to be honest, do good and remember Allah', 'to stay in one place and never travel'], correctAnswer: 1, explanation: 'Chapter 7: “He started teaching people to be honest, do good, stop bad and always remember Allah.”', feedback: { correct: 'Yes. Adam (pbuh) taught people to be honest, to do good, to stop bad and to always remember Allah.', incorrect: 'Not quite. Read the first paragraph of Chapter 7 again. What did Adam (pbuh) start teaching people?' } },
  { id: 'adam-a2-kc-7-the-same-way', type: 'true-false', title: 'Other Messengers', instructions: 'Read the sentence. Is it true or false?', question: 'After Adam (pbuh), Allah sent other messengers, and they taught the same way.', correctAnswer: true, explanation: 'Chapter 7: “After the death of Adam (pbuh), Allah sent many other messengers.” And: “All the prophets took the same way. They wanted to make people remember Allah.”', feedback: { correct: 'Right, it is true. All the prophets took the same way. They wanted people to remember Allah.', incorrect: 'Read the last paragraph of Chapter 7 again. What did all the prophets want?' } },
  { id: 'adam-a2-kc-8-a-sad-father', type: 'multiple-choice', title: 'A Sad Father', instructions: 'Read the question. Choose the answer.', question: 'Why did Adam (pbuh) become very sad at the end of the story?', options: ['His children did not want to hear his message.', 'He lost both of his sons on the same day.', 'He had to leave his home and go far away.'], correctAnswer: 1, explanation: 'Chapter 10: “Adam (pbuh) became very sad. He lost both of his sons on the same day.” Habil died, and Qabil went far away.', feedback: { correct: 'Yes. Habil died, and Qabil went far away. Adam (pbuh) lost both sons on one day.', incorrect: 'Not this one. Read the first paragraph of Chapter 10 again. What happened to Adam’s two sons?' } },
];

export const adamA2VocabularyChallengePairs: VocabularyChallengePair[] = [
  { word: 'grandchildren', meaning: 'The children of a person’s children.', partOfSpeech: 'noun', chapter: 1, context: 'We are the grandchildren of Adam (pbuh), so we can learn many lessons from this fantastic story.' },
  { word: 'origin', meaning: 'The place or material something comes from.', partOfSpeech: 'noun', chapter: 3, context: 'He came from the fire and believed his origin was better.' },
  { word: 'wonderful', meaning: 'Very good and enjoyable.', partOfSpeech: 'adjective', chapter: 4, context: 'It was more wonderful than we can imagine.' },
  { word: 'forgetful', meaning: 'Often forgetting things.', partOfSpeech: 'adjective', chapter: 5, context: 'Unfortunately, people are sometimes forgetful.' },
  { word: 'harm', meaning: 'To hurt someone or cause damage.', partOfSpeech: 'verb', chapter: 9, context: 'I won’t fight back or harm you.' },
  { word: 'control', meaning: 'To stop a feeling from becoming too strong.', partOfSpeech: 'verb', chapter: 10, context: 'The story tells us that good people should stay away from jealousy and control their anger.' },
];

// Locked Final distribution:
// 3 multiple choice + 2 true/false + 2 matching + 2 fill blanks + 1 sequencing.
export const adamA2FinalChallengeExercises: Exercise[] = [
{ id: 'adam-a2-final-1', type: 'fill-blanks', title: 'A Job on Earth', instructions: 'Complete Allah’s words from Chapter 1 with one word: ruler, angel or farmer.', question: 'What did Allah say about the new human?', fillBlanksText: 'The human is going to become the [blank] on earth.', correctAnswer: ['ruler'], explanation: 'In Chapter 1 Allah says: “The human is going to become the ruler on earth.”', feedback: { correct: 'Yes. From the start, Allah gives the human an important job on earth.', incorrect: 'Read what Allah tells the angels in Chapter 1. What will the human become on earth?' } },
{ id: 'adam-a2-final-2', type: 'multiple-choice', title: 'How Iblis Saw Adam', instructions: 'Choose the answer from Chapter 2.', question: 'Why did Iblis think Adam was not important?', options: ['Adam could not learn new things.', 'Adam was created from clay.', 'The angels did not like Adam.'], correctAnswer: 1, explanation: 'Chapter 2 says: “Iblis thought Adam was an unimportant creature created from clay.” But the same chapter says Adam “could learn and understand”, and the angels “admired him and respected him”.', feedback: { correct: 'Yes. Iblis looked only at the clay. He did not see Adam’s knowledge.', incorrect: 'Read the last sentence of Chapter 2. What did Iblis look at when he thought about Adam?' } },
{ id: 'adam-a2-final-3', type: 'true-false', title: 'One Warning', instructions: 'Is this sentence true or false?', question: 'In Paradise, Adam and Eve could eat from every tree.', correctAnswer: false, explanation: 'Chapter 4 says: “All the gifts in Paradise were for them. But Allah had only one warning. He told Adam and Eve not to go near one tree.”', feedback: { correct: 'Right. Almost everything was for them, but Allah told them not to go near one tree.', incorrect: 'Read the end of Chapter 4. What was Allah’s only warning?' } },
{ id: 'adam-a2-final-4', type: 'sequencing', title: 'Adam’s Life in Order', instructions: 'Put these events in the correct order.', question: 'What happened first, next and later in Adam’s life?', sequencingItems: [{ id: '4', text: 'Adam and Eve eat from the banned tree.' }, { id: '1', text: 'Allah shapes Adam from soil.' }, { id: '6', text: 'Allah makes Adam His first Messenger.' }, { id: '3', text: 'Allah gives Adam a wife, Eve.' }, { id: '5', text: 'Adam and Eve start to live on earth.' }, { id: '2', text: 'The angels respect Adam, but Iblis does not.' }], correctAnswer: ['1', '2', '3', '4', '5', '6'], explanation: 'Allah shapes Adam (Chapter 1), the angels respect him but Iblis does not (Chapter 2), Allah gives him Eve (Chapter 4), they eat from the tree (Chapter 5) and live on earth (Chapter 6). After many years, “Allah made Adam His first Messenger” (Chapter 7).', feedback: { correct: 'Yes. Adam became a Messenger on earth, after many years there.', incorrect: 'Start with Chapter 1. Then remember: Adam became the first Messenger after he and Eve “lived on earth for many years”.' } },
{ id: 'adam-a2-final-5', type: 'matching', title: 'Rulers of the Earth', instructions: 'Match each thing with what Adam and Eve did with it.', question: 'What did Adam and Eve do on earth?', matchingPairs: [{ left: 'land', right: 'used it to grow crops and keep animals' }, { left: 'buildings', right: 'built them for housing' }, { left: 'nature', right: 'protected it' }, { left: 'the weak', right: 'helped them' }], correctAnswer: { land: 'used it to grow crops and keep animals', buildings: 'built them for housing', nature: 'protected it', 'the weak': 'helped them' }, explanation: 'Chapter 6 says: “They were using land to grow crops and keep animals. They were going to build buildings for housing, protect nature and help the weak.”', feedback: { correct: 'Yes. As rulers, Adam and Eve took care of the earth and the people on it.', incorrect: 'Read the first paragraph of Chapter 6 again. Find each word: land, buildings, nature, the weak.' } },
{ id: 'adam-a2-final-6', type: 'multiple-choice', title: 'After the Mistake', instructions: 'Choose the answer from Chapter 5.', question: 'After the mistake, how were Adam and Eve different from Iblis?', options: ['They blamed Iblis, and Iblis said sorry to Allah.', 'They stayed quiet, and Iblis ran away from them.', 'They said sorry, but Iblis never thought he was wrong.'], correctAnswer: 2, explanation: 'Chapter 5 says Adam and Eve “said sorry to Allah” and “learned from their mistake”. But Iblis “never thought he was wrong, because he was arrogant.”', feedback: { correct: 'Yes. Adam and Eve learned from their mistake. Iblis was arrogant and did not change.', incorrect: 'Compare the third paragraph of Chapter 5 (Adam and Eve) with the last paragraph (Iblis).' } },
{ id: 'adam-a2-final-7', type: 'fill-blanks', title: 'Real Goodness', instructions: 'Complete the sentence from Chapter 8 with one word: loved, expensive or beautiful.', question: 'What is real goodness, as Chapter 8 says?', fillBlanksText: 'Real goodness is giving the best and the most [blank].', correctAnswer: ['loved'], explanation: 'Chapter 8 ends: “Real goodness is giving the best and the most loved.” Habil gave “his best and healthiest sheep”; Qabil gave “just a handful of his crops”.', feedback: { correct: 'Yes. Real goodness means giving what we love most, like Habil’s best sheep.', incorrect: 'Read the last sentence of Chapter 8. What kind of thing is best to give?' } },
{ id: 'adam-a2-final-8', type: 'true-false', title: 'The Crow', instructions: 'Is this sentence true or false?', question: 'The crow showed Qabil how to put his brother’s body in the ground.', correctAnswer: true, explanation: 'Chapter 9 says Qabil did not know what to do. Then “The crow showed Qabil the way to put his brother\'s dead body in the hole.”', feedback: { correct: 'True. Allah sent a crow, and it dug the ground to show Qabil what to do.', incorrect: 'Read the end of Chapter 9. What did the crow do near Qabil?' } },
{ id: 'adam-a2-final-9', type: 'matching', title: 'Words for Each Person', instructions: 'Match each person with the words the story uses for him.', question: 'Which words from the story describe each person?', matchingPairs: [{ left: 'Adam', right: 'wiser than the angels' }, { left: 'Iblis', right: 'arrogant' }, { left: 'Habil', right: 'kind and gentle' }, { left: 'Qabil', right: 'mostly jealous' }], correctAnswer: { Adam: 'wiser than the angels', Iblis: 'arrogant', Habil: 'kind and gentle', Qabil: 'mostly jealous' }, explanation: 'Chapter 2: Adam “was wiser than the angels”. Chapter 3: “Iblis was arrogant.” Chapter 8: “Habil was kind, gentle and loved taking care of animals. Qabil was mostly jealous.”', feedback: { correct: 'Yes. These words help us understand why each person acted the way he did.', incorrect: 'Look at Chapter 2 for Adam, Chapter 3 for Iblis and the start of Chapter 8 for the two brothers.' } },
{ id: 'adam-a2-final-10', type: 'multiple-choice', title: 'The Lesson for Us', instructions: 'Choose the lesson from Chapter 10.', question: 'What does the story of the two brothers teach good people?', options: ['Stay away from jealousy and control your anger.', 'Give your best gifts only to your own family.', 'Go far away from people after a mistake.'], correctAnswer: 0, explanation: 'Chapter 10 says: “The story tells us that good people should stay away from jealousy and control their anger.” Qabil was jealous and angry, and this led to the first crime.', feedback: { correct: 'Yes. Jealousy and anger led Qabil to the worst thing in life.', incorrect: 'Read the first paragraph of Chapter 10. Find the sentence that begins “The story tells us”.' } },
];