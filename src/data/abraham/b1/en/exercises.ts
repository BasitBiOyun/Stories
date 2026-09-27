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
  { id: 'abraham-b1-kc-1', type: 'multiple-choice', title: 'A Consistent Standard', instructions: 'Choose the explanation that connects Chapters 1–4.', question: 'What standard does Abraham repeatedly use when evaluating idols and heavenly bodies?', options: ['Created things that lack independent power cannot be the Creator', 'Anything admired by many people must be divine', 'The largest object deserves worship'], correctAnswer: 0, explanation: 'Idols cannot act, while the star, moon, and sun appear and disappear; the story uses these limits to distinguish creation from the Creator.', feedback: { correct: 'Correct.', incorrect: 'Compare Abraham’s observations about statues with his observations about the sky.' } },
  { id: 'abraham-b1-kc-2', type: 'true-false', title: 'Family Pressure', instructions: 'Decide whether this accurately summarizes Chapter 4.', question: 'Abraham’s father responds to his invitation by threatening him and telling him to leave.', correctAnswer: true, explanation: 'The chapter shows that Abraham’s mission immediately brings personal and family opposition.', feedback: { correct: 'Correct.', incorrect: 'Reread the final dialogue in Chapter 4.' } },
  { id: 'abraham-b1-kc-3', type: 'multiple-choice', title: 'Why the Demonstration Works', instructions: 'Choose the best explanation across Chapters 6–7.', question: 'Why is the broken-idol episode more than an act of destruction in the narrative?', options: ['It creates a situation in which the people must admit the idols cannot speak or protect themselves', 'It teaches the people how to build stronger statues', 'It convinces the people before Abraham is questioned'], correctAnswer: 0, explanation: 'The plan produces a public contradiction between worshipping the idols and admitting their helplessness.', feedback: { correct: 'Correct.', incorrect: 'Connect the axe in Chapter 6 with the people’s admission in Chapter 7.' } },
  { id: 'abraham-b1-kc-4', type: 'true-false', title: 'Evidence and Response', instructions: 'Decide whether the statement is supported.', question: 'After recognizing the weakness of their position, the people immediately change their beliefs.', correctAnswer: false, explanation: 'The chapter says they feel shame but remain arrogant and call for Abraham to be punished.', feedback: { correct: 'Correct.', incorrect: 'Read the final paragraph of Chapter 7 and distinguish recognition from acceptance.' } },
  { id: 'abraham-b1-kc-5', type: 'multiple-choice', title: 'The Fire as a Turning Point', instructions: 'Choose the best cause-and-result summary.', question: 'What makes the fire episode a turning point in the story?', options: ['A punishment meant to destroy Abraham becomes evidence of Allah’s protection', 'The people cancel the punishment before it starts', 'Nimrod orders Abraham to leave Babylon immediately'], correctAnswer: 0, explanation: 'The fire becomes cool and safe, reversing the people’s intended result.', feedback: { correct: 'Correct.', incorrect: 'Compare what the people intend with what actually happens to Abraham.' } },
  { id: 'abraham-b1-kc-6', type: 'multiple-choice', title: 'Authority and Life', instructions: 'Evaluate Nimrod’s prisoner example from Chapter 9.', question: 'Why does Nimrod’s example with the two prisoners fail to prove that he gives life in the same sense Abraham attributes to Allah?', options: ['He only decides whether people are killed or released; he does not create life itself', 'His guards refuse to obey his orders', 'The second prisoner had already left Babylon'], correctAnswer: 0, explanation: 'The scene shows political authority over prisoners, not control over life or creation itself.', feedback: { correct: 'Correct.', incorrect: 'Separate a ruler’s decision over prisoners from the power to create or control life.' } },
  { id: 'abraham-b1-kc-7', type: 'multiple-choice', title: 'Migration and Responsibility', instructions: 'Choose the explanation supported by Chapters 10–11.', question: 'How do the migration chapters broaden Abraham’s mission?', options: ['The story moves from public preaching to family responsibility, trust, and establishing a new future', 'Abraham stops caring about his family after leaving Babylon', 'The journey is presented only as a search for wealth'], correctAnswer: 0, explanation: 'The narrative now connects mission with Hagar, Ishmael, the valley, prayer, and responsibility for a future community.', feedback: { correct: 'Correct.', incorrect: 'Compare the reason for leaving Babylon with Abraham’s prayer for his family.' } },
  { id: 'abraham-b1-kc-8', type: 'multiple-choice', title: 'The Valley’s Transformation', instructions: 'Choose the strongest synthesis of Chapters 11–13.', question: 'Which chain best explains how the barren valley gains long-term religious significance?', options: ['Hagar acts with trust → Zamzam appears → people settle → Abraham and Ishmael build the Ka’ba', 'Nimrod sends water → idols are built → Babylon moves to Mecca', 'Abraham finds a city first → Hagar searches later → Zamzam disappears'], correctAnswer: 0, explanation: 'The final chapters connect effort, divine provision, settlement, worship, and the message of Tawheed.', feedback: { correct: 'Correct.', incorrect: 'Trace the story from Hagar’s search to the building of the Ka’ba.' } }
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
 * Cumulative B1 Language Review for Abraham English.
 * Recycles language functions taught across Chapters 1–13 without retesting
 * story comprehension.
 */
export const abrahamB1LanguageReviewExercises: Exercise[] = [
  { id: 'abraham-b1-language-review-1-time-development', type: 'matching', title: 'Time, Habit, and Development', instructions: 'Match each pattern with the job it performs in connected narration.', question: 'How can a writer organise repeated past behaviour, a specific event, change, and continuation?', matchingPairs: [{ left: 'used to / usually + verb', right: 'describe repeated behaviour in an earlier period' }, { left: 'while + past continuous', right: 'show a background action happening at the same time' }, { left: 'One day / when / after', right: 'move to a specific event or order events' }, { left: 'over time / still / continued to', right: 'show change or continuation across a longer period' }], correctAnswer: { 'used to / usually + verb': 'describe repeated behaviour in an earlier period', 'while + past continuous': 'show a background action happening at the same time', 'One day / when / after': 'move to a specific event or order events', 'over time / still / continued to': 'show change or continuation across a longer period' }, explanation: 'Across the book, time expressions separate habit, background, turning points, and longer-term development.', feedback: { correct: 'Correct. You matched each pattern with its time function.', incorrect: 'Ask whether the form shows habit, background, a specific event, or longer-term continuation.' } },
  { id: 'abraham-b1-language-review-2-reason-result-contrast', type: 'matching', title: 'Reason, Result, and Contrast', instructions: 'Match each connector or structure with the relationship it creates.', question: 'How can you explain why something happened, what followed, and how another idea differs?', matchingPairs: [{ left: 'because / because of', right: 'give a reason or cause' }, { left: 'so / therefore / as a result', right: 'introduce a result or consequence' }, { left: 'although / but / however / though', right: 'show contrast or an unexpected result' }, { left: 'on the other hand', right: 'shift to a contrasting viewpoint or alternative' }], correctAnswer: { 'because / because of': 'give a reason or cause', 'so / therefore / as a result': 'introduce a result or consequence', 'although / but / however / though': 'show contrast or an unexpected result', 'on the other hand': 'shift to a contrasting viewpoint or alternative' }, explanation: 'These links recur throughout Abraham B1 and turn separate statements into coherent reasoning.', feedback: { correct: 'Correct. You distinguished cause, result, contrast, and viewpoint shift.', incorrect: 'Focus on the relationship between the second idea and the first.' } },
  { id: 'abraham-b1-language-review-3-thinking-possibility-conclusion', type: 'matching', title: 'Reasoning from Possibility to Conclusion', instructions: 'Match each form with its role in a reasoning chain.', question: 'How can a speaker test an idea, explain evidence, and report a conclusion?', matchingPairs: [{ left: 'Could this be ...?', right: 'open a possibility for consideration' }, { left: 'because ...', right: 'give evidence or a reason for accepting or rejecting an idea' }, { left: 'realised / understood that ...', right: 'report the conclusion reached after evidence' }, { left: 'could / could not / was unable to', right: 'express possibility, ability, or limitation in context' }], correctAnswer: { 'Could this be ...?': 'open a possibility for consideration', 'because ...': 'give evidence or a reason for accepting or rejecting an idea', 'realised / understood that ...': 'report the conclusion reached after evidence', 'could / could not / was unable to': 'express possibility, ability, or limitation in context' }, explanation: 'The chapters repeatedly move from observation to possibility, evidence, and conclusion rather than presenting conclusions without support.', feedback: { correct: 'Correct. You traced the reasoning sequence.', incorrect: 'Separate possibility, evidence, conclusion, and ability/limitation.' } },
  { id: 'abraham-b1-language-review-4-intention-duty-instruction', type: 'matching', title: 'Intention, Responsibility, and Instruction', instructions: 'Match each pattern with its communicative function.', question: 'How can you express a plan, responsibility, direct instruction, or reported instruction?', matchingPairs: [{ left: 'decided / planned / tried to + verb', right: 'express intention, planning, or attempted action' }, { left: 'should / had to + verb', right: 'express responsibility or necessity' }, { left: 'Stop ... / Follow ... / Leave ...', right: 'give a direct instruction with an imperative' }, { left: 'told / ordered + person + to + verb', right: 'report an instruction without quoting it directly' }], correctAnswer: { 'decided / planned / tried to + verb': 'express intention, planning, or attempted action', 'should / had to + verb': 'express responsibility or necessity', 'Stop ... / Follow ... / Leave ...': 'give a direct instruction with an imperative', 'told / ordered + person + to + verb': 'report an instruction without quoting it directly' }, explanation: 'B1 narration needs clear distinctions between what someone plans, what someone must do, and what one person tells another to do.', feedback: { correct: 'Correct.', incorrect: 'Ask whether the expression shows intention, duty, a direct command, or a reported command.' } },
  { id: 'abraham-b1-language-review-5-condition-purpose-future', type: 'matching', title: 'Conditions, Purpose, and Future Meaning', instructions: 'Match each structure with its function.', question: 'How can a speaker connect conditions, goals, and future consequences?', matchingPairs: [{ left: 'If + present, will + verb', right: 'present a possible condition and its future consequence' }, { left: 'to / in order to + verb', right: 'state the purpose of an action' }, { left: 'was going to + verb', right: 'show an intended future action viewed from a past moment' }, { left: 'will + verb', right: 'express future expectation, promise, or commitment' }], correctAnswer: { 'If + present, will + verb': 'present a possible condition and its future consequence', 'to / in order to + verb': 'state the purpose of an action', 'was going to + verb': 'show an intended future action viewed from a past moment', 'will + verb': 'express future expectation, promise, or commitment' }, explanation: 'These patterns let learners connect present conditions, intended purposes, and future meaning from either present or past viewpoints.', feedback: { correct: 'Correct.', incorrect: 'Think: condition, purpose, future-from-the-past, or future commitment.' } },
  { id: 'abraham-b1-language-review-6-action-process-state', type: 'sequencing', title: 'Build a Process from Plan to Result', instructions: 'Put the language moves into the most natural order for a short B1 account.', question: 'How can a paragraph move from intention to process, completion, and continuing purpose?', sequencingItems: [{ id: '1', text: 'First, the person decided to carry out a plan.' }, { id: '2', text: 'Then the main action began and continued step by step.' }, { id: '3', text: 'After the work was completed, the result became clear.' }, { id: '4', text: 'Over time, the project continued to serve its purpose.' }], correctAnswer: ['1', '2', '3', '4'], explanation: 'Decision, process language, completion, and continuity create a coherent development rather than a list of disconnected actions.', feedback: { correct: 'Correct. The sequence moves from plan to process, completion, and continuity.', incorrect: 'Follow the development: decision → process → completed result → continuing purpose.' } },
  { id: 'abraham-b1-language-review-7-reconstruct-discourse', type: 'fill-blanks', title: 'Choose the Relationship', instructions: 'Complete the paragraph with the connector that best expresses the relationship.', question: 'Which connector best introduces an unexpected contrast?', fillBlanksText: 'Mina explained her reasons clearly and tried several times to persuade the group. [blank], they still refused to change their decision.', correctAnswer: 'However', explanation: '“However” shows that the result contrasts with what the earlier effort might lead us to expect.', feedback: { correct: 'Correct. “However” clearly marks the unexpected contrast.', incorrect: 'The second sentence contrasts with the effort described in the first.' } },
  { id: 'abraham-b1-language-review-8-transfer', type: 'reflection', title: 'Use the Language in a New Situation', instructions: 'Write or say a connected six-sentence B1 response about a new situation. Do not retell Abraham’s story.', question: 'Can you combine time, reason/result, intention, condition, reported instruction, and continuity in one coherent response?', correctAnswer: null, explanation: 'The aim is to select and combine language from across the book in a new context, not to recall story facts.', feedback: { correct: 'Keep all six sentences focused on one situation and make the relationships between ideas explicit.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Set a past routine or background with “used to”, “usually”, or “while ... was/were -ing”.', mode: 'Individual' }, { question: 'Sentence 2 — Introduce a specific event with “One day”, “when”, or “after”.', mode: 'Individual' }, { question: 'Sentence 3 — Explain a reason and result with “because” and “so/therefore”.', mode: 'Individual' }, { question: 'Sentence 4 — Add a decision, plan, or purpose with “decided/planned to” or “to + verb”.', mode: 'Individual' }, { question: 'Sentence 5 — Include either “If ..., will ...” or a reported instruction with “told/ordered ... to ...”.', mode: 'Pair' }, { question: 'Sentence 6 — Finish with change or continuity using “over time”, “still”, or “continued to”.', mode: 'Pair' }] }
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
