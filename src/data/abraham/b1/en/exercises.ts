import type { Exercise } from '../../../../types';

// Single manually authored source of truth for Abraham B1 English learning activities.

export const abrahamB1QuickChallenges: Record<number, Exercise> = {
  1: {
    id: 'abraham-b1-quick-1', type: 'matching', matchingHeadings: { left: 'Who or what', right: 'What Chapter 1 says' }, title: 'Belief and Evidence',
    instructions: 'Match each name with what Chapter 1 says about it.', question: 'Who did what in Babylon?',
    matchingPairs: [
      { left: 'Allah', right: 'made the boy’s heart and mind clear of idols' },
      { left: 'Young Abraham', right: 'could not understand why intelligent people worshipped things they made' },
      { left: 'The people in the house of worship', right: 'bowed, cried and begged for help' },
      { left: 'The statues', right: 'could not hear or understand any prayer or wish' },
    ],
    correctAnswer: {
      Allah: 'made the boy’s heart and mind clear of idols',
      'Young Abraham': 'could not understand why intelligent people worshipped things they made',
      'The people in the house of worship': 'bowed, cried and begged for help',
      'The statues': 'could not hear or understand any prayer or wish',
    },
    explanation: 'Chapter 1 says “Allah made his heart and mind clear of idols”, that Abraham “could not understand how an intelligent person could make a statue and then see it as a god”, that people “bowed to the statues and started crying and begging”, and that their prayers “could not be heard or understood by the statues!”',
    feedback: { correct: 'Well done! You separated what the people did from what the statues could not do, and that contrast is Abraham’s evidence.', incorrect: 'Paragraph 1 is about Allah and Abraham’s heart, paragraph 2 about Abraham’s thoughts, and paragraph 3 about the people and the statues. Match each name with its paragraph.' },
  },
  2: {
    id: 'abraham-b1-quick-2', type: 'multiple-choice', title: 'A Human-Made God?', instructions: 'Choose the answer that the chapter supports best.',
    question: 'Azer said that Mardukh’s big ears showed his deep knowledge. Why did this make Abraham laugh?',
    options: ['His father had told him that the idols were only toys.', 'He knew that a statue he rode and kicked could not have any knowledge.', 'He was happy that his father allowed him to play with Mardukh.'],
    correctAnswer: 1,
    explanation: 'Abraham watched his father make the idols, and he “rode on their backs and sometimes kicked them.” So he could see that a made statue with big ears could not really know anything. Azer said the opposite: “They are not toys, but our gods,” and he told Abraham not to play with Mardukh again.',
    feedback: { correct: 'Right! Abraham treated the statues like toys, so the idea of a statue with “deep knowledge” seemed funny to him.', incorrect: 'Read the first paragraph again. What did Azer say the idols were, and what did Abraham do with them?' },
  },
  3: {
    id: 'abraham-b1-quick-3', type: 'multiple-choice', title: 'A Pattern in the Sky', instructions: 'Choose the answer that the chapter supports.',
    question: 'Why did Abraham decide that the star and the moon could not be Allah?',
    options: ['Neither of them stayed: the star set and the moon faded.', 'They were smaller and less bright than the sun.', 'He saw them from a cave, far away from the people.'],
    correctAnswer: 0,
    explanation: 'About the star Abraham said, “I will not show respect to it or worship it, because it sets and disappears.” Then, “when the moon faded, he understood that it could not be Allah.” Something that changes and goes away cannot be the Creator.',
    feedback: { correct: 'Yes! Both of them disappeared, and something that disappears cannot be the Creator.', incorrect: 'Read the end of the chapter again. Look at what happened to the star and to the moon, and at the word “because”.' },
  },
  4: {
    id: 'abraham-b1-quick-4', type: 'sequencing', title: 'From the Sun to His Father', instructions: 'Put the events of Chapter 4 in the right order.',
    question: 'What happened first, next and last?',
    sequencingItems: [
      { id: '1', text: 'Abraham saw the bright sun and wondered if it could be Allah.' },
      { id: '2', text: 'When it set, he understood that Allah could not be one of the creations.' },
      { id: '3', text: 'He prostrated himself and asked Allah for help.' },
      { id: '4', text: 'He asked his father to follow him and stop worshipping idols.' },
      { id: '5', text: 'Azer grew angry and told him to leave.' },
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'Abraham first wondered about the sun (“It is bigger”). When it set, he understood that “Allah is the Creator of everything.” He prostrated himself and asked for help, then went home and said, “O my father, follow me.” His father grew angry and said, “Leave here now.”',
    feedback: { correct: 'Great! You followed Abraham from watching the sky, to his prayer, to his call to his father.', incorrect: 'Follow the chapter step by step: the sky comes before the prayer, and the prayer comes before Abraham goes home.' },
  },
  5: {
    id: 'abraham-b1-quick-5', type: 'multiple-choice', title: 'Tradition or Evidence?', instructions: 'Choose the answer that the chapter supports best.',
    question: 'The people said, “We saw our fathers worship them.” Why was this a weak reason?',
    options: ['The statues gave them food and drink when they needed it.', 'Their fathers had seen the statues heal sick people.', 'It was only a habit, and the statues had no power to help or harm them.'],
    correctAnswer: 2,
    explanation: 'The people gave only one reason: “We saw our fathers worship them; because of this, we do the same.” Abraham showed the problem: the statues “have no power to help or harm you,” while Allah gives him food and drink and heals him when he is sick.',
    feedback: { correct: 'Right! Doing something because our fathers did it is not proof. Abraham asked his people to think about the evidence.', incorrect: 'Compare the people’s answer with Abraham’s words in the middle of the paragraph. Who gives food, drink and healing, and what can the statues do?' },
  },
  6: {
    id: 'abraham-b1-quick-6', type: 'true-false', title: 'The Temple Plan', instructions: 'Is the sentence true or false? Use Chapter 6.',
    question: 'Abraham broke every statue in the temple, even the largest one.',
    correctAnswer: false,
    explanation: 'Abraham broke the idols “one after another,” but “he left the largest statue in the temple untouched, hung the axe around its neck, and then hurried back home.” This was part of his plan.',
    feedback: { correct: 'Correct! He did not break the largest statue. He hung the axe around its neck.', incorrect: 'Read the last paragraph of Chapter 6 again. What did Abraham do with the largest statue?' },
  },
  7: {
    id: 'abraham-b1-quick-7', type: 'multiple-choice', title: 'Shame and Pride', instructions: 'Choose the answer that the chapter supports best.',
    question: 'The people felt that Abraham was right. Why did they still shout, “Burn him!”?',
    options: ['They were too proud to admit that they and their forefathers were wrong.', 'They believed that the largest statue had really broken the others.', 'King Nimrod had ordered them to punish Abraham.'],
    correctAnswer: 0,
    explanation: 'Chapter 7 says, “They looked at each other in shame because their thoughts and feelings told them that Abraham (pbuh) was right. But they were so arrogant that they couldn’t accept the truth.” Accepting it “meant their forefathers were wrong, as well.”',
    feedback: { correct: 'Yes! Their pride was stronger than the truth they felt. Admitting a mistake needs honesty and courage.', incorrect: 'Read the last paragraph of Chapter 7 again. Look for the word “But” after they felt shame.' },
  },
  8: {
    id: 'abraham-b1-quick-8', type: 'multiple-choice', title: 'Calm Before the Fire', instructions: 'Choose the answer that the chapter supports.',
    question: 'The fire was so big that people could not come near it. Why did Abraham stay calm?',
    options: ['Angel Gabriel had already told him that he would be safe.', 'He trusted Allah and knew that whatever happened would be for his own good.', 'Many people from other towns had come to help him.'],
    correctAnswer: 1,
    explanation: 'Chapter 8 says, “Abraham (pbuh) stayed calm because he trusted Allah. He knew that Allah would never leave him alone, and that whatever happened, it would be for his own good.” Gabriel came only later, and the people from other towns came “to see what would happen.”',
    feedback: { correct: 'Right! His calm came from his trust in Allah, not from knowing how the story would end.', incorrect: 'Read the second paragraph of Chapter 8 again. Find the sentence with “because”.' },
  },
  9: {
    id: 'abraham-b1-quick-9', type: 'matching', matchingHeadings: { left: 'In the debate', right: 'What was said or done' }, title: 'Claim and Challenge', instructions: 'Match each step of the debate with what was said or done.',
    question: 'How did the debate between Abraham and Nimrod go?',
    matchingPairs: [
      { left: 'Abraham’s first answer', right: '“He is Allah, the One. He gives life and brings death.”' },
      { left: 'Nimrod’s claim', right: '“I can give life and death.”' },
      { left: 'Nimrod’s example', right: 'One slave was killed, and the other was let go.' },
      { left: 'Abraham’s challenge', right: '“Can you make the sun rise from the west?”' },
    ],
    correctAnswer: {
      'Abraham’s first answer': '“He is Allah, the One. He gives life and brings death.”',
      'Nimrod’s claim': '“I can give life and death.”',
      'Nimrod’s example': 'One slave was killed, and the other was let go.',
      'Abraham’s challenge': '“Can you make the sun rise from the west?”',
    },
    explanation: 'Nimrod tried to copy Abraham’s words about life and death by deciding what happened to two slaves. Abraham then asked for something only Allah can do: “Can you make the sun rise from the west?” Nimrod “was unable to do this.”',
    feedback: { correct: 'Well done! You followed the debate from Abraham’s answer to the challenge Nimrod could not meet.', incorrect: 'Read the second half of Chapter 9 again. Check who says “I can …” and who asks about the sun.' },
  },
  10: {
    id: 'abraham-b1-quick-10', type: 'multiple-choice', title: 'Why Leave Babylon?', instructions: 'Choose the answer that the chapter supports.',
    question: 'Why did Abraham decide to leave Babylon?',
    options: ['His father had told him to leave home.', 'Nobody was going to listen to him, so he went to spread Allah’s message in other lands.', 'Nimrod ordered him to go to Syria and Palestine.'],
    correctAnswer: 1,
    explanation: 'Chapter 10 says, “Abraham (pbuh) realized that nobody was going to listen to his message. Therefore, he decided to leave Babylon and travel to other lands to spread Allah’s message.” Leaving did not end his mission; it continued it.',
    feedback: { correct: 'Yes! He did not give up. He took the message to new places.', incorrect: 'Read the beginning of the second paragraph again. Find the word “Therefore”.' },
  },
  11: {
    id: 'abraham-b1-quick-11', type: 'true-false', title: 'Trust and Effort', instructions: 'Is the sentence true or false? Use Chapter 11.',
    question: 'Hagar trusted Allah, so when the food and water ran out, she sat and waited for help.',
    correctAnswer: false,
    explanation: 'Hagar trusted Allah: “Allah will never let us die; He will surely protect us.” But she did not only wait. She “started running from one hill to another looking for water and food” and “ran between these two hills seven times.”',
    feedback: { correct: 'Correct! Hagar trusted Allah and also worked hard. She ran between Safa and Marwa seven times.', incorrect: 'Read the last paragraph of Chapter 11 again. What did Hagar do when the food and water ran out?' },
  },
  12: {
    id: 'abraham-b1-quick-12', type: 'sequencing', title: 'From Water to a City', instructions: 'Put the events of Chapter 12 in the right order.',
    question: 'How did the valley change?',
    sequencingItems: [
      { id: '1', text: 'Ishmael was crying with thirst while Hagar ran between the hills.' },
      { id: '2', text: 'Water started flowing from the ground under Ishmael’s feet.' },
      { id: '3', text: 'Hagar saw it from a distance and shouted, “Zamzam!”' },
      { id: '4', text: 'She drank the water, collected it and fed her child.' },
      { id: '5', text: 'More people came to settle there and started building Mecca.' },
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'Chapter 12 moves from need to gift to a new city: Ishmael’s thirst, the water under his feet, Hagar’s shout, the first drink, and then people who came to settle “because of this sacred spring.”',
    feedback: { correct: 'Great! One gift of water changed an empty valley into the city of Mecca.', incorrect: 'Start with Ishmael’s thirst. The city is built only after people come because of the water.' },
  },
  13: {
    id: 'abraham-b1-quick-13', type: 'multiple-choice', title: 'A House for Everyone', instructions: 'Choose the answer that the chapter supports.',
    question: 'According to Chapter 13, for whom did Abraham build the Ka’ba?',
    options: ['only for Abraham, Ishmael and their family', 'only for the people who settled near Zamzam', 'for all people of different races and colors'],
    correctAnswer: 2,
    explanation: 'Chapter 13 says, “He built a place of worship for all people of different races and colors.” It connects this house with the message of the Oneness of Allah that Abraham’s descendants carried.',
    feedback: { correct: 'Right! The chapter says the Ka’ba is a place of worship for people of every race and color.', incorrect: 'Read the third paragraph of Chapter 13 again. Find the words “a place of worship for …”.' },
  },
};

export const abrahamB1KnowledgeCheckExercises: Exercise[] = [
  { id: 'abraham-b1-kc-1-not-a-statue', type: 'true-false', title: 'A Young Man’s Search', instructions: 'Decide whether the statement is true or false according to the story.', question: 'According to Chapter 3, as a young man Abraham still thought that Allah might be a statue.', correctAnswer: false, explanation: 'Chapter 3: “Although he always wondered about Allah, he also knew that Allah could not be a statue.”', feedback: { correct: 'Right, the statement is false. He was still searching for the Creator, but he already knew that Allah could not be a statue.', incorrect: 'Reread the first paragraph of Chapter 3. What did Abraham already know while he was searching?' } },
  { id: 'abraham-b1-kc-2-why-guide', type: 'multiple-choice', title: 'A New Duty', instructions: 'Choose the best answer. Use the evidence in Chapter 4.', question: 'Why did Abraham begin to guide his people after that morning?', options: ['His father asked him to explain the idols.', 'The people of Babylon asked him for help.', 'Allah had chosen him to be His Messenger.'], correctAnswer: 2, explanation: 'Chapter 4: “He recognized that he should guide his people because Allah chose him to be His Messenger.”', feedback: { correct: 'Correct. Once Allah chose him as His Messenger, guiding his people became his duty, starting with his own father.', incorrect: 'Not quite. Reread the short paragraph after Abraham’s prayer in Chapter 4. What did he recognize, and why?' } },
  { id: 'abraham-b1-kc-3-point-of-the-joke', type: 'multiple-choice', title: 'A Joke with a Message', instructions: 'Choose the best answer. Use the evidence in Chapter 6.', question: 'Abraham jokingly asked the statues, “Why don’t you eat the food?” What was the point of his joke?', options: ['Giving food to statues that cannot eat was foolish.', 'The people had forgotten to bring enough food.', 'He wanted the statues to share the food with him.'], correctAnswer: 0, explanation: 'Chapter 6: “Abraham (pbuh) jokingly asked them, “Why don’t you eat the food? It is getting cold.” Offering food to these statues was so ridiculous.”', feedback: { correct: 'Well done. The joke shows the problem in one question: the statues could not eat, so offering them food made no sense.', incorrect: 'Reread the end of the first paragraph of Chapter 6. Read the sentence that comes right after Abraham’s question.' } },
  { id: 'abraham-b1-kc-4-nothing-from-you', type: 'multiple-choice', title: '“Nothing from You!”', instructions: 'Choose the best answer. Use the evidence in Chapter 8.', question: 'Angel Gabriel asked Abraham in the fire, “Is there anything you wish for?” What does Abraham’s answer show?', options: ['He did not believe that Gabriel was an angel.', 'He trusted Allah alone, not even an angel.', 'He wanted to show the people he was brave.'], correctAnswer: 1, explanation: 'Chapter 8: “Angel Gabriel came to him and asked, “Is there anything you wish for?” Abraham (pbuh) only said, “Nothing from you!”” Earlier in the chapter: “He knew that Allah would never leave him alone.”', feedback: { correct: 'Correct. Abraham asked for nothing from anyone but Allah. The chapter says he knew Allah would never leave him alone.', incorrect: 'Not quite. Reread the second paragraph of Chapter 8 about why Abraham stayed calm. Then connect it with his words to Gabriel.' } },
  { id: 'abraham-b1-kc-5-why-nimrod-called', type: 'true-false', title: 'Nimrod Meets Abraham', instructions: 'Decide whether the statement is true or false according to the story.', question: 'Nimrod called Abraham to him because he wanted to believe in Allah.', correctAnswer: false, explanation: 'Chapter 9: “He realized that Abraham was not an ordinary person, so he decided to meet him.” Later he claims, “I can give life and death,” and the debate “made Nimrod even more angry.”', feedback: { correct: 'Right, the statement is false. Nimrod saw that Abraham was not ordinary, but he met him to challenge him, not to believe.', incorrect: 'Reread the Nimrod paragraphs in Chapter 9. Why did Nimrod decide to meet Abraham, and how did he feel at the end?' } },
  { id: 'abraham-b1-kc-6-empty-valley-plan', type: 'multiple-choice', title: 'An Empty Valley', instructions: 'Choose the best answer. Use the evidence in Chapter 11.', question: 'The valley had no trees, no food and no water. How does Chapter 11 explain this?', options: ['Abraham wanted to test how strong Hagar was.', 'It was part of Allah’s plan for the Ka’ba and Mecca.', 'The people of Babylon had cut down all the trees.'], correctAnswer: 1, explanation: 'Chapter 11: “The valley had no trees, no fruit, no food, and no water. This was part of Allah’s plan to build the Holy House, the Ka’ba, and the city of Mecca in the time to come.”', feedback: { correct: 'Correct. The empty valley was not an accident: it was where the Ka’ba and Mecca would later be built.', incorrect: 'Not quite. Reread the start of the third paragraph of Chapter 11. What does the sentence after “no water” say?' } },
  { id: 'abraham-b1-kc-7-zamzam-today', type: 'true-false', title: 'Zamzam Today', instructions: 'Decide whether the statement is true or false according to the story.', question: 'According to Chapter 12, the Zamzam spring still gives water today.', correctAnswer: true, explanation: 'Chapter 12: “This historic Zamzam spring still exists, providing water for thousands of years.”', feedback: { correct: 'Right, the statement is true. The spring that appeared under Ishmael’s feet has given water for thousands of years.', incorrect: 'Reread the second paragraph of Chapter 12. What does it say about the Zamzam spring today?' } },
  { id: 'abraham-b1-kc-8-carrying-the-message', type: 'multiple-choice', title: 'The Message Continues', instructions: 'Choose the best answer. Use the evidence in Chapter 13.', question: 'What did Ishmael’s descendants do, according to the last paragraph of the story?', options: ['They carried Abraham’s message of the Oneness of Allah.', 'They went back to Babylon to find Abraham’s people.', 'They built new idols around the Ka’ba in Mecca.'], correctAnswer: 0, explanation: 'Chapter 13: “They spread all over the Arabian Peninsula to carry their grandfather Abraham’s (pbuh) message of the Oneness of Allah.”', feedback: { correct: 'Correct. Abraham’s message did not end with him: his descendants, and later Prophet Muhammad (pbuh), carried it on.', incorrect: 'Not quite. Reread the last paragraph of Chapter 13. Where did Ishmael’s descendants go, and what did they carry?' } },
];

export const abrahamB1VocabularyChallengePairs = [
  { word: 'Creator', meaning: 'The One who creates and controls everything' },
  { word: 'reconsider', meaning: 'to think again about a belief or decision' },
  { word: 'arrogant', meaning: 'too proud to accept truth or admit a mistake' },
  { word: 'catapult', meaning: 'a machine used to throw heavy objects or people' },
  { word: 'miracle', meaning: 'an extraordinary sign from Allah beyond ordinary human power' },
  { word: 'faith', meaning: 'strong belief and trust in Allah' },
  { word: 'valley', meaning: 'low land between hills or mountains' },
  { word: 'ritual', meaning: 'a religious action performed in a prescribed way' },
  { word: 'spring', meaning: 'a place where water naturally flows from the ground' },
  { word: 'foundations', meaning: 'the supporting base on which a building is constructed' }
];

export const abrahamB1FinalChallengeExercises: Exercise[] = [
{ id: 'abraham-b1-final-1', type: 'multiple-choice', title: 'A Public System of Worship', instructions: 'Choose the interpretation best supported by Chapter 1.', question: 'What do the large house of worship and the people’s repeated bowing, crying, begging, and asking for help suggest about idol worship in Babylon?', options: ['It was only a private habit inside Abraham’s family','It was an established communal practice supported by shared spaces and repeated actions','It happened only once during a temporary celebration'], correctAnswer: 1, explanation: 'The chapter presents idol worship as a public and organized part of community life, not an isolated personal action.', feedback: { correct: 'Correct.', incorrect: 'Use the description of the large house of worship and what people regularly did there.' } },
{ id: 'abraham-b1-final-2', type: 'multiple-choice', title: 'Perseverance in Communication', instructions: 'Choose the interpretation best supported by Chapter 5.', question: 'What does Abraham’s response to the people’s anger show about the way he communicates his message?', options: ['He immediately stops explaining his position to avoid disagreement','He accepts their inherited practice but disagrees only in private','He continues giving reasons and asks them to reconsider even when they become furious'], correctAnswer: 2, explanation: 'The chapter says Abraham does not give up; he continues giving reasons and wants the people to reconsider their beliefs.', feedback: { correct: 'Correct.', incorrect: 'Follow the dialogue after the people become furious.' } },
{ id: 'abraham-b1-final-3', type: 'multiple-choice', title: 'Family and Future Mission', instructions: 'Choose the answer supported by Chapter 10.', question: 'Why is Abraham’s prayer for a child connected with his wider mission?', options: ['He hopes his child can teach people about Allah','He wants a child mainly to restore his status in Babylon','He expects the child to end his travels and keep the message private'], correctAnswer: 0, explanation: 'The chapter explicitly says Abraham asks for a child so that the child can teach people about Allah.', feedback: { correct: 'Correct.', incorrect: 'Find the sentence explaining why Abraham asks Allah for a child.' } },
{ id: 'abraham-b1-final-4', type: 'true-false', title: 'Forefathers and Resistance', instructions: 'Decide whether the statement is supported by Chapter 7.', question: 'One reason the people resist admitting Abraham is right is that doing so would also mean admitting their forefathers were wrong.', correctAnswer: true, explanation: 'The chapter directly connects their refusal with the difficulty of accepting that their forefathers had also been wrong.', feedback: { correct: 'Correct.', incorrect: 'Read the sentences immediately before the people begin shouting for punishment.' } },
{ id: 'abraham-b1-final-5', type: 'true-false', title: 'Hajj and Memory', instructions: 'Decide whether the statement agrees with Chapter 13.', question: 'The story says Hajj has no connection with events from Abraham and his family.', correctAnswer: false, explanation: 'Chapter 13 states that Hajj reminds Muslims of many events connected with Abraham and his family.', feedback: { correct: 'Correct.', incorrect: 'Find the sentence about Hajj after the Ka’ba is rebuilt.' } },
{ id: 'abraham-b1-final-6', type: 'matching', title: 'Evidence and Interpretation', instructions: 'Match each detail with what it shows in the story.', question: 'What does each piece of evidence help the reader understand?', matchingPairs: [{ left: 'Birds could not fly over the flames', right: 'shows how extreme the heat was' }, { left: 'The people were shocked by the miracle but their anger remained', right: 'shows that amazement did not end their opposition' }], correctAnswer: { 'Birds could not fly over the flames': 'shows how extreme the heat was', 'The people were shocked by the miracle but their anger remained': 'shows that amazement did not end their opposition' }, explanation: 'The first detail establishes physical danger; the second separates surprise at the miracle from a change of belief.', feedback: { correct: 'Correct.', incorrect: 'Use the danger details in Chapter 8 and the opening reaction in Chapter 9.' } },
{ id: 'abraham-b1-final-7', type: 'matching', title: 'Action and Continuity', instructions: 'Match each action with the later meaning or result stated in the story.', question: 'How do these actions continue beyond the immediate moment?', matchingPairs: [{ left: 'Hagar runs between the two hills seven times', right: 'is remembered as sa’y in Hajj and Umrah' }, { left: 'Abraham and Ishmael find the old foundations', right: 'they build the Ka’ba on the earlier base' }], correctAnswer: { 'Hagar runs between the two hills seven times': 'is remembered as sa’y in Hajj and Umrah', 'Abraham and Ishmael find the old foundations': 'they build the Ka’ba on the earlier base' }, explanation: 'The story links Hagar’s repeated search with sa’y and links the new construction with the earlier foundations.', feedback: { correct: 'Correct.', incorrect: 'Use the later part of Chapter 11 and the second paragraph of Chapter 13.' } },
{ id: 'abraham-b1-final-8', type: 'fill-blanks', title: 'Azer’s Claim', instructions: 'Complete the key word from Chapter 2.', question: 'Complete Azer’s explanation about Mardukh.', fillBlanksText: 'Azer said Mardukh’s big ears showed his deep [blank].', correctAnswer: 'knowledge', explanation: 'Azer describes the statue’s large ears as a sign of “deep knowledge.”', feedback: { correct: 'Correct.', incorrect: 'Return to Azer’s final explanation about Mardukh’s ears.' } },
{ id: 'abraham-b1-final-9', type: 'fill-blanks', title: 'The Aim of the Public Call', instructions: 'Complete the meaningful action word from Chapter 5.', question: 'Complete the sentence.', fillBlanksText: 'Abraham wanted the people to [blank] their beliefs.', correctAnswer: 'reconsider', explanation: 'The chapter says Abraham wanted the people to reconsider their beliefs even though they ignored him.', feedback: { correct: 'Correct.', incorrect: 'Look at the sentence just before the people ignore Abraham.' } },
{ id: 'abraham-b1-final-10', type: 'sequencing', title: 'From Babylon to the Valley', instructions: 'Put the migration developments in story order.', question: 'How does Chapter 10 move from Babylon to the new family setting?', sequencingItems: [{ id: '1', text: 'Abraham decides to leave Babylon' }, { id: '2', text: 'He travels through Syria and Palestine' }, { id: '3', text: 'Hagar gives birth to Ishmael' }, { id: '4', text: 'The family reaches the valley near Safa and Marwa' }], correctAnswer: ['1', '2', '3', '4'], explanation: 'The chapter moves from departure, through travel and the birth of Ishmael, to the family’s arrival in the valley.', feedback: { correct: 'Correct.', incorrect: 'Trace Chapter 10 from the reason for leaving Babylon to the final valley scene.' } },
{ id: 'abraham-b1-final-11', type: 'multiple-choice', title: 'Creation and Creator', instructions: 'Choose the conclusion supported by Chapters 3–4.', question: 'Why do the star, moon, and sun fail as possible objects of worship in Abraham’s reasoning?', options: ['They are too far away for people to see clearly','Only the largest heavenly body deserves worship','They appear and disappear as created things, while Allah is the Creator'], correctAnswer: 2, explanation: 'Across Chapters 3–4, Abraham observes that the heavenly bodies set and disappear and concludes that Allah is not one of the creations but the Creator of everything.', feedback: { correct: 'Correct.', incorrect: 'Connect what happens to the star, moon, and sun with Abraham’s conclusion in Chapter 4.' } },
{ id: 'abraham-b1-final-12', type: 'multiple-choice', title: 'Trust and Effort', instructions: 'Choose the interpretation best supported by Chapter 11.', question: 'What does Hagar’s behavior in the valley show?', options: ['She waits without doing anything because trust makes effort unnecessary','She trusts Allah’s protection and still takes action by searching for food and water','She leaves the valley immediately because she does not trust Abraham’s decision'], correctAnswer: 1, explanation: 'Hagar expresses confidence that Allah will protect them, then actively runs between Safa and Marwa searching for food and water.', feedback: { correct: 'Correct.', incorrect: 'Read Hagar’s words of trust and then what she does when the supplies run out.' } },
];

/**
 * Cumulative Language Review for Abraham English.
 * Recycles language functions taught across Chapters 1–13 without retesting
 * story comprehension.
 */
export const abrahamB1LanguageReviewExercises: Exercise[] = [
  // NOTICE — discover what the book's language does, across chapters.
  {
    id: 'abraham-b1-language-review-1-habit-background-event', type: 'drag-drop', title: 'Notice: Habit, Background or Event?',
    instructions: 'Read the parts of Chapters 2, 3, 6, 10 and 12. Does each part describe a past habit, an action in progress in the background, or one event that moves the story on? Put it in the right group.',
    question: 'How does the book show the difference between a habit, a background action and a single event?',
    dragDropGroups: [
      { group: 'A habit in the past', items: ['But Abraham used to play with these idols as toys …', 'All the people usually went outside of town …'] },
      { group: 'An action in progress (background)', items: ['… they were still showing love and respect to idols.', 'While the little child Ishmael was crying with thirst …'] },
      { group: 'One event that moves the story on', items: ['One day, his father saw Abraham riding the statue of Mardukh …', '… suddenly water started flowing from the ground …', 'Finally, they reached a lonely valley …'] },
    ],
    correctAnswer: {
      'A habit in the past': ['But Abraham used to play with these idols as toys …', 'All the people usually went outside of town …'],
      'An action in progress (background)': ['… they were still showing love and respect to idols.', 'While the little child Ishmael was crying with thirst …'],
      'One event that moves the story on': ['One day, his father saw Abraham riding the statue of Mardukh …', '… suddenly water started flowing from the ground …', 'Finally, they reached a lonely valley …'],
    },
    explanation: 'Used to + verb and usually + past simple describe what happened again and again in an earlier time (Chapters 2 and 6). Was/were + -ing describes an action in progress, the background of the scene: the people were still showing respect to idols (Chapter 3), Ishmael was crying (Chapter 12). The past simple, often with One day, suddenly or Finally, tells the single event that moves the story on. Careful: in “his father saw Abraham riding the statue”, the event is saw; riding only describes what Abraham was doing at that moment.',
    feedback: { correct: 'Well done. You separated habits, background actions and single events across the whole book.', incorrect: 'Look at the verb form in each part: used to / usually, was/were + -ing, or a past simple event with a time word such as One day, suddenly or Finally.' },
  },
  {
    id: 'abraham-b1-language-review-2-could-in-context', type: 'matching', title: 'Notice: What Does “Could” Do?',
    matchingHeadings: { left: 'From the book', right: 'What “could” shows here' },
    instructions: 'Read the sentences from Chapters 1, 3, 8 and 10. Match each one with the job that could / couldn’t does in it.',
    question: 'The book uses “could” again and again. Does it always mean the same thing?',
    matchingPairs: [
      { left: '… see it as a god which could help or harm him.', right: 'an ability that people wrongly believed in' },
      { left: 'He saw a bright star and wondered, “Could this be my Allah?”', right: 'an idea that is being tested with a question' },
      { left: 'The fire was so big that people couldn’t approach it.', right: 'a real limit: nobody was able to do it' },
      { left: '… so that his child could teach people about Allah.', right: 'the aim of a request: an ability in the future' },
    ],
    correctAnswer: {
      '… see it as a god which could help or harm him.': 'an ability that people wrongly believed in',
      'He saw a bright star and wondered, “Could this be my Allah?”': 'an idea that is being tested with a question',
      'The fire was so big that people couldn’t approach it.': 'a real limit: nobody was able to do it',
      '… so that his child could teach people about Allah.': 'the aim of a request: an ability in the future',
    },
    explanation: 'Could changes its job with the context. In Chapter 1 it describes a power people believed a statue had, while the chapter shows the truth: “They could not even move from one place to another on their own.” In Chapter 3, Could this be …? tests a possible answer, and Abraham rejects it when the star sets. In Chapter 8, couldn’t is a real limit: the heat stopped people. In Chapter 10, so that + could gives the aim of Abraham’s request: what his child would be able to do later.',
    feedback: { correct: 'Correct. The same small word can show a belief, a test, a real limit or an aim.', incorrect: 'Read each sentence again and ask: is someone believing, testing an idea, meeting a real limit, or hoping for something in the future?' },
  },
  {
    id: 'abraham-b1-language-review-3-future-from-the-past', type: 'multiple-choice', title: 'Notice: Looking Forward from the Past',
    instructions: 'Read the sentences from Chapters 6, 8 and 10. Then choose the best answer.',
    question: 'Chapter 6: “He made a plan to destroy all their idols, but he did not tell anyone what he was going to do.” Chapter 8: “He knew that Allah would never leave him alone …” Chapter 10: “Abraham (pbuh) realized that nobody was going to listen to his message.” What do “was going to” and “would” show in these sentences?',
    options: [
      'an action that was already finished at that moment',
      'a habit that was repeated again and again in the past',
      'the future, seen from a moment in the past',
      'an action that was in progress at that exact moment',
    ],
    correctAnswer: 2,
    explanation: 'The book is told in the past, so when it looks forward from a past moment it uses was/were going to + verb and would + verb. When Abraham made his plan, breaking the idols was still in the future. Before the fire, Abraham trusted what would happen next. In Chapter 10, he understood a prediction about the future. In his own words at that moment, these would be is going to and will.',
    feedback: { correct: 'Correct. Was going to and would are the future seen from the past.', incorrect: 'Ask: at the moment described, had the action happened yet? Was it still in the future?' },
  },
  // BUILD — use the forms in the book's own sentences, mixing chapters.
  {
    id: 'abraham-b1-language-review-4-reason-result-contrast', type: 'word-bank', title: 'Build: Reason, Result and Surprise',
    instructions: 'Complete the lines from Chapters 4, 9 and 10 with words from the bank. Two words are not needed.',
    question: 'Which word gives a reason, which gives a result, and which show an unexpected contrast?',
    fillBlanksText: 'He recognized that he should guide his people [blank] Allah chose him to be His Messenger. … People felt embarrassed by the miracle, [blank] their anger and arrogance remained unchanged. Prophet Abraham (pbuh) tried every way to show them their error; [blank], their rage didn’t calm down. … Abraham (pbuh) realized that nobody was going to listen to his message. [blank], he decided to leave Babylon …',
    wordBank: ['because', 'yet', 'however', 'Therefore', 'because of', 'so'],
    correctAnswer: ['because', 'yet', 'however', 'Therefore'],
    explanation: 'Because + a clause gives the reason for a duty or a decision; because of needs a noun, not a clause. Yet (between two clauses, no comma after it) and however (after a semicolon, with a comma after it) both show a contrast we do not expect: people were embarrassed, but they did not change. Therefore starts a new sentence and gives the result of what came before: nobody would listen, so Abraham left. In the first gap, so would turn the reason into a result.',
    feedback: { correct: 'Well done. You linked reasons, results and unexpected contrasts, and you placed them correctly in the sentence.', incorrect: 'For each gap, ask: does the next part give a reason, a result, or a surprising contrast? Then check the punctuation around the gap. Look again at Chapters 4, 9 and 10.' },
  },
  {
    id: 'abraham-b1-language-review-5-verb-patterns', type: 'choose-form', title: 'Build: What Follows the Verb?',
    instructions: 'Choose the correct form to complete each sentence from the book.',
    question: 'After “was surprised”, “made him” and “told his wife”, which form comes next?',
    formChoices: [
      { sentence: 'Abraham was surprised [choice] that when people entered the building, they bowed to the statues …', options: ['seeing', 'to see', 'for seeing'], answer: 1 },
      { sentence: 'It made him [choice] to see the people of the kingdom …', options: ['sad', 'sadly', 'to be sad'], answer: 0 },
      { sentence: 'Prophet Abraham (pbuh) told his wife [choice] near one of the hills with Ishmael.', options: ['stay', 'to stay', 'staying'], answer: 1 },
    ],
    correctAnswer: null,
    explanation: 'An adjective of feeling + to + verb gives the cause of the feeling: surprised to see (Chapter 1). Make + person + adjective shows how something changes a person’s feelings: it made him sad (Chapter 3). Tell + person + to + verb reports an instruction (Chapter 10), like “He ordered his guards to bring two slaves” in Chapter 9. Compare make and let, which take the base verb with no to: “Can you make the sun rise from the west?”',
    feedback: { correct: 'Correct. Surprised to + verb, made + person + adjective, told + person + to + verb.', incorrect: 'Look at the word just before the gap: a feeling adjective, make + person, or tell + person. Check Chapters 1, 3 and 10.' },
  },
  {
    id: 'abraham-b1-language-review-6-passive-and-time', type: 'error-correction', title: 'Build: Fix the Verb Form',
    instructions: 'Each sentence has one mistake in a verb form. Tap the mistake, then choose the correction.',
    question: 'Can you correct a passive verb and a verb after “until”?',
    errorItems: [
      { sentence: 'But these prayers and wishes could not be hear or understood by the statues!', error: 'be hear', options: ['be heard', 'been heard', 'be hearing'], answer: 0 },
      { sentence: 'Prophet Abraham’s (pbuh) hands and feet was tied, and he was placed on a catapult.', error: 'was tied', options: ['were tied', 'were tying', 'tied'], answer: 0 },
      { sentence: '… he got an axe and waited until the whole town will be empty.', error: 'will be', options: ['would be', 'was', 'is'], answer: 1 },
    ],
    correctAnswer: null,
    explanation: 'The passive is be + past participle, and it also works after a modal: could not + be heard (Chapter 1). The form of be agrees with the subject: hands and feet (plural) were tied (Chapter 8); the passive is used because the people who did it are not important here. After until, when, after and while, we do not use will or would for the future: the past simple does this job in a story, so he waited until the town was empty (Chapter 6).',
    feedback: { correct: 'Well done. You corrected the passive forms and the verb after until.', incorrect: 'Check what comes after could not be, whether the subject is singular or plural, and which tense follows until in a past story. Compare with Chapters 1, 6 and 8.' },
  },
  {
    id: 'abraham-b1-language-review-7-reported-speech', type: 'transformation', title: 'Build: Report What People Said',
    instructions: 'Report each sentence from Chapters 2, 5 and 7. Write the missing words.',
    question: 'What changes when we report a statement or a question?',
    transformItems: [
      { source: 'Azer replied, “They are not toys, but our gods.”', frame: 'Azer replied that they [blank] toys, but their gods.', answers: ['were not', 'weren’t', "weren't", 'are not', 'aren’t', "aren't"] },
      { source: 'People replied, “We saw our fathers worship them; …”', frame: 'People replied that they [blank] their fathers worship them.', answers: ['had seen', 'saw'] },
      { source: 'They asked him, “Did you harm our gods in this way?”', frame: 'They asked him [blank] their gods in that way.', answers: ['if he had harmed', 'whether he had harmed', 'if he harmed', 'whether he harmed'] },
    ],
    correctAnswer: null,
    explanation: 'In reported speech the pronouns change (our → their, you → he), and the verb usually moves one step back: are → were, saw → had seen, did you harm → had harmed. A yes/no question is reported with if or whether and statement word order, with no did and no question mark. Inside a longer sentence, a question idea also uses statement word order, as in Chapter 7: the people “tried to find out who did this”.',
    feedback: { correct: 'Correct. You changed the pronouns, moved the verbs back and reported the question with if or whether.', incorrect: 'Change our to their and you to he. Move the verb back one step, and use if or whether for a yes/no question.' },
  },
  // USE — take the language into a new, everyday context.
  {
    id: 'abraham-b1-language-review-8-new-context', type: 'word-bank', title: 'Use: Our Recycling Project',
    instructions: 'This text is not from the book. Complete it with forms you practised in the book. Three words are not needed.',
    question: 'Can you use the book’s language to tell the story of a class project?',
    fillBlanksText: 'Last year, many students in our class [blank] throw paper into the rubbish bin. One day, our teacher, Mrs Demir, asked us to make a recycling box. We made a plan, but we did not tell the other classes what we [blank] to do. At first, some students laughed at the idea. We did not give up, [blank]. After two months, the box was [blank] full that we needed a second one. Now, every Friday, the paper [blank] to a recycling centre in our town.',
    wordBank: ['used to', 'were going', 'though', 'so', 'is taken', 'use to', 'such', 'takes'],
    correctAnswer: ['used to', 'were going', 'though', 'so', 'is taken'],
    explanation: 'Used to + verb describes a past habit that has now stopped (use to is only correct after did/didn’t). Were going to is the future seen from the past: the plan was still in the future. Though at the end of a sentence shows a contrast. So + adjective + that gives a strong degree and its result (such needs a noun: such a full box). The paper is taken is passive: what happens to the paper matters, not who takes it.',
    feedback: { correct: 'Well done. You used the book’s language to tell a new story.', incorrect: 'For each gap ask: a past habit? the future seen from the past? a contrast? a degree and its result? something that happens to the paper?' },
  },
  {
    id: 'abraham-b1-language-review-9-new-context', type: 'error-correction', title: 'Use: Check a Friend’s Sentences',
    instructions: 'A friend wrote these sentences about school. Each one has one mistake. Tap the mistake, then choose the correction.',
    question: 'Can you use the rules from the book to correct new sentences?',
    errorItems: [
      { sentence: 'Our coach made us to run around the school field three times.', error: 'to run', options: ['run', 'running', 'ran'], answer: 0 },
      { sentence: 'The maths exam was such difficult that nobody finished it early.', error: 'such difficult', options: ['such a difficult', 'so difficult', 'too difficult'], answer: 1 },
      { sentence: 'My teacher asked me if did I finish my project.', error: 'did I finish', options: ['I had finished', 'had I finished', 'I have finished'], answer: 0 },
    ],
    correctAnswer: null,
    explanation: 'Make + person + base verb, with no to: made us run. So + adjective + that shows a degree and its result; such needs a noun (such a difficult exam). A reported question uses if + statement word order and moves the verb back: asked me if I had finished.',
    feedback: { correct: 'Well done. You can check your own writing with the book’s patterns.', incorrect: 'Ask: which verbs take the base form? Is there a noun after such? Is the reported question in statement word order?' },
  },
  {
    id: 'abraham-b1-language-review-10-transfer', type: 'reflection', title: 'Use: A Plan That Changed Something',
    instructions: 'Write five or six connected sentences about a plan or project that changed something in your school, family or town. Tell your story to a partner first. Do not retell Abraham’s story.',
    question: 'Can you use the language of the whole book to tell a real story from your own life?',
    correctAnswer: null,
    explanation: 'Example: Two years ago, the children in our street used to play on a dirty piece of land. One day, while we were cleaning our bikes, our neighbour Mr Aydın told us to write to the town council. We sent a letter, but we did not know what they were going to say. However, they said yes, so the rubbish was collected and new trees were planted. The park was so beautiful that everybody came to see it. Today we still play there every afternoon.',
    feedback: { correct: 'Check your sentences: used to for a past habit, while + was/were -ing for the background, told/asked + person + to, was/were going to, a passive (was/were + past participle), a linker (however, so, because) and so … that.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentences 1–2 — Before and the start: “… used to …”, “One day, while … was/were -ing, …”', mode: 'Individual' },
      { question: 'Sentence 3 — An instruction and a plan: “… told/asked us to …”, “We didn’t know what … was/were going to …”', mode: 'Individual' },
      { question: 'Sentence 4 — The work and a turn: a passive (“… was/were cleaned / painted / planted”) and a linker (however / so / because)', mode: 'Pair' },
      { question: 'Sentences 5–6 — The result: “It was so … that …”, “Today … still …”', mode: 'Pair' },
    ],
  },
];

export const abrahamB1QuickChallengesPolished = abrahamB1QuickChallenges;
export const abrahamB1KnowledgeCheckExercisesPolished = abrahamB1KnowledgeCheckExercises;
export const abrahamB1VocabularyChallengePairsPolished = abrahamB1VocabularyChallengePairs;

const finalOverrides: Record<string, Exercise> = {
  'abraham-b1-final-5': {
    id: 'abraham-b1-final-5', type: 'true-false', title: 'Hajj and Memory', instructions: 'Decide whether the statement agrees with Chapter 13.',
    question: 'The story says Hajj reminds Muslims about events connected with Abraham and his family.', correctAnswer: true,
    explanation: 'Chapter 13 states that Hajj reminds Muslims of many events connected with Abraham and his family.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sentence about Hajj after the Ka’ba is rebuilt.' },
  },
  'abraham-b1-final-6': {
    id: 'abraham-b1-final-6', type: 'matching', title: 'Evidence and Interpretation', instructions: 'Match each detail with what it shows in the story.',
    question: 'What does each piece of evidence help the reader understand?',
    matchingPairs: [
      { left: 'Birds could not fly over the flames', right: 'shows how extreme the heat was' },
      { left: 'The people were shocked by the miracle but their anger remained', right: 'shows that amazement did not end their opposition' },
    ],
    correctAnswer: {
      'Birds could not fly over the flames': 'shows how extreme the heat was',
      'The people were shocked by the miracle but their anger remained': 'shows that amazement did not end their opposition',
    },
    explanation: 'The first detail establishes physical danger; the second separates surprise at the miracle from a change of belief.',
    feedback: { correct: 'Correct.', incorrect: 'Use the danger details in Chapter 8 and the opening reaction in Chapter 9.' },
  },
  'abraham-b1-final-7': {
    id: 'abraham-b1-final-7', type: 'matching', title: 'Action and Continuity', instructions: 'Match each action with the later meaning or result stated in the story.',
    question: 'How do these actions continue beyond the immediate moment?',
    matchingPairs: [
      { left: 'Hagar runs between the two hills seven times', right: 'is remembered as sa’y in Hajj and Umrah' },
      { left: 'Abraham and Ishmael find the old foundations', right: 'they build the Ka’ba on the earlier base' },
    ],
    correctAnswer: {
      'Hagar runs between the two hills seven times': 'is remembered as sa’y in Hajj and Umrah',
      'Abraham and Ishmael find the old foundations': 'they build the Ka’ba on the earlier base',
    },
    explanation: 'The story links Hagar’s repeated search with sa’y and links the new construction with the earlier foundations.',
    feedback: { correct: 'Correct.', incorrect: 'Use the later part of Chapter 11 and the second paragraph of Chapter 13.' },
  },
};

export const abrahamB1FinalChallengeExercisesPolished: Exercise[] = abrahamB1FinalChallengeExercises.map(
  (exercise) => finalOverrides[exercise.id] ?? exercise,
);
