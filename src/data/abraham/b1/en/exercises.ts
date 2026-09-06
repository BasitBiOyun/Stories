import type { Exercise } from '../../../../types';

// Single manually authored source of truth for Abraham B1 English learning activities.

export const abrahamB1QuickChallenges: Record<number, Exercise> = {
  1: {
    id: 'abraham-b1-quick-1', type: 'matching', title: 'Belief and Evidence',
    instructions: 'Match each observation with what it shows.', question: 'What did Abraham notice in Babylon?',
    matchingPairs: [
      { left: 'People', right: 'asked statues for help' },
      { left: 'Statues', right: 'could not hear, talk, or move by themselves' }
    ],
    correctAnswer: { People: 'asked statues for help', Statues: 'could not hear, talk, or move by themselves' },
    explanation: 'The chapter contrasts the people’s requests with the statues’ complete inability to respond.',
    feedback: { correct: 'Correct. You used the chapter’s contrast as evidence.', incorrect: 'Reread the final paragraph and separate the people’s actions from the statues’ abilities.' }
  },
  2: {
    id: 'abraham-b1-quick-2', type: 'multiple-choice', title: 'A Human-Made God?', instructions: 'Choose the best explanation supported by the chapter.',
    question: 'Why does Abraham’s treatment of the idols weaken his father’s claim about them?',
    options: ['He treats them like ordinary objects and toys, not powerful beings', 'He believes only the largest statue can move', 'He wants to become an idol maker'], correctAnswer: 0,
    explanation: 'Abraham watches the idols being made and even plays with them, which conflicts with the claim that they possess divine power.',
    feedback: { correct: 'Correct.', incorrect: 'Compare what Azer says about the statues with what Abraham actually does to them.' }
  },
  3: {
    id: 'abraham-b1-quick-3', type: 'tap-reveal', title: 'A Pattern in the Sky', instructions: 'Answer from memory, then reveal the evidence.',
    question: 'What shared feature of the star and moon leads Abraham to reject them as Allah?',
    tapRevealItems: [{ question: 'What happens to both?', answer: 'They disappear or fade; they do not remain.' }],
    correctAnswer: 'They disappear or fade; they do not remain.', explanation: 'Abraham uses change and disappearance as evidence that created things cannot be the Creator.',
    feedback: { correct: 'Correct.', incorrect: 'Return to the end of the star scene and the moon scene.' }
  },
  4: {
    id: 'abraham-b1-quick-4', type: 'true-false', title: 'Guidance Becomes Mission', instructions: 'Decide whether the statement is supported by Chapter 4.',
    question: 'After understanding that the sun is also a creation, Abraham asks Allah for guidance and then begins calling others to the right way.', correctAnswer: true,
    explanation: 'The chapter links Abraham’s request for guidance with his role as a Messenger and his call to his father.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the chapter from the setting sun to Abraham’s prayer and then to his conversation with his father.' }
  },
  5: {
    id: 'abraham-b1-quick-5', type: 'multiple-choice', title: 'Tradition or Evidence?', instructions: 'Choose the strongest inference from the people’s answer.',
    question: 'What weakness does Abraham expose when the people say they worship idols because their fathers did?',
    options: ['Their reason depends on inherited habit rather than the idols’ real power', 'Their fathers had proved the idols could heal', 'They had personally seen the statues speak'], correctAnswer: 0,
    explanation: 'The people appeal to tradition, while Abraham points to what actually provides food, drink, and healing.',
    feedback: { correct: 'Correct.', incorrect: 'Contrast the people’s reason with Abraham’s evidence about help and healing.' }
  },
  6: {
    id: 'abraham-b1-quick-6', type: 'sequencing', title: 'The Temple Plan', instructions: 'Put Abraham’s actions in order.',
    question: 'How does the temple plan unfold?',
    sequencingItems: [
      { id: '1', text: 'The town becomes empty during the celebration' },
      { id: '2', text: 'Abraham enters the temple and questions the untouched food' },
      { id: '3', text: 'He breaks the idols' },
      { id: '4', text: 'He leaves the largest statue with the axe' }
    ],
    correctAnswer: ['1', '2', '3', '4'], explanation: 'The sequence prepares the later public argument about whether the idols can act for themselves.',
    feedback: { correct: 'Correct.', incorrect: 'Trace the chapter from the celebration to Abraham’s return home.' }
  },
  7: {
    id: 'abraham-b1-quick-7', type: 'multiple-choice', title: 'Their Own Admission', instructions: 'Choose the statement that best explains Abraham’s argument.',
    question: 'Why is the people’s sentence “these idols don’t speak” important?',
    options: ['It gives Abraham evidence from their own words that the idols are powerless', 'It proves the largest idol broke the others', 'It explains why the people wanted new statues'], correctAnswer: 0,
    explanation: 'Abraham turns their own admission into a question: why worship things that cannot speak, see, or protect themselves?',
    feedback: { correct: 'Correct.', incorrect: 'Look at what Abraham says immediately after the people admit the idols cannot speak.' }
  },
  8: {
    id: 'abraham-b1-quick-8', type: 'true-false', title: 'Trust Under Pressure', instructions: 'Decide whether the statement matches the chapter.',
    question: 'Abraham’s calmness is presented as passive carelessness rather than trust in Allah.', correctAnswer: false,
    explanation: 'The chapter explicitly explains his calmness through trust in Allah even while the danger is extreme.',
    feedback: { correct: 'Correct.', incorrect: 'Find the sentence explaining why Abraham stayed calm while the fire was being prepared.' }
  },
  9: {
    id: 'abraham-b1-quick-9', type: 'matching', title: 'Claim and Challenge', instructions: 'Match each speaker with the key claim or response.',
    question: 'How does the debate with Nimrod develop?',
    matchingPairs: [
      { left: 'Nimrod', right: 'claims he can give life and death' },
      { left: 'Abraham', right: 'asks him to make the sun rise from the west' }
    ],
    correctAnswer: { Nimrod: 'claims he can give life and death', Abraham: 'asks him to make the sun rise from the west' },
    explanation: 'Abraham moves the discussion from Nimrod’s display of political power to a task beyond human control.',
    feedback: { correct: 'Correct.', incorrect: 'Separate Nimrod’s claim from Abraham’s final challenge.' }
  },
  10: {
    id: 'abraham-b1-quick-10', type: 'multiple-choice', title: 'Why Leave Babylon?', instructions: 'Choose the best cause-and-result explanation.',
    question: 'Why does Abraham’s departure from Babylon continue rather than end his mission?',
    options: ['He leaves because people will not listen and travels to spread Allah’s message elsewhere', 'He abandons his message after losing hope', 'He leaves to search for a stronger idol'], correctAnswer: 0,
    explanation: 'Migration becomes a way to continue the mission in other lands, not a withdrawal from it.',
    feedback: { correct: 'Correct.', incorrect: 'Read the sentence that explains why Abraham decided to leave Babylon.' }
  },
  11: {
    id: 'abraham-b1-quick-11', type: 'matching', title: 'Trust and Effort', instructions: 'Match Hagar’s belief with her response.',
    question: 'How does Chapter 11 combine reliance on Allah with human action?',
    matchingPairs: [
      { left: 'Hagar’s trust', right: 'Allah will protect us' },
      { left: 'Hagar’s effort', right: 'runs between Safa and Marwa searching for water and food' }
    ],
    correctAnswer: { 'Hagar’s trust': 'Allah will protect us', 'Hagar’s effort': 'runs between Safa and Marwa searching for water and food' },
    explanation: 'The chapter presents trust and sustained effort together rather than as opposites.',
    feedback: { correct: 'Correct.', incorrect: 'Use one detail from Hagar’s words and one from her actions.' }
  },
  12: {
    id: 'abraham-b1-quick-12', type: 'sequencing', title: 'From Water to Settlement', instructions: 'Arrange the cause-and-result chain.',
    question: 'How does Zamzam change the valley?',
    sequencingItems: [
      { id: '1', text: 'Water appears under Ishmael’s feet' },
      { id: '2', text: 'Hagar collects the water and gives it to her child' },
      { id: '3', text: 'More people settle near the spring' },
      { id: '4', text: 'A city called Mecca begins to grow' }
    ],
    correctAnswer: ['1', '2', '3', '4'], explanation: 'The chapter connects the appearance of water with settlement and the growth of Mecca.',
    feedback: { correct: 'Correct.', incorrect: 'Follow the chapter from Ishmael’s thirst to the arrival of other people.' }
  },
  13: {
    id: 'abraham-b1-quick-13', type: 'multiple-choice', title: 'Building and Legacy', instructions: 'Choose the answer that connects action and message.',
    question: 'Why is building the Ka’ba a fitting conclusion to Abraham’s mission in this story?',
    options: ['It creates a place of worship connected with the message that Allah is One and has no partner', 'It proves Babylon’s idols were rebuilt in Mecca', 'It ends the need to teach future generations'], correctAnswer: 0,
    explanation: 'The chapter joins the House of Allah with Abraham’s continuing legacy of Tawheed through later generations.',
    feedback: { correct: 'Correct.', incorrect: 'Connect the building paragraph with the final paragraph about Abraham’s descendants and message.' }
  }
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

export const abrahamB1FinalReviewExercises: Exercise[] = [
  {
    id: 'abraham-b1-review-sequence', type: 'sequencing', title: 'Journey of the Argument', instructions: 'Put these major developments in order.',
    question: 'How does the narrative move from questioning inherited belief to establishing a place of worship?',
    sequencingItems: [
      { id: '1', text: 'Abraham questions powerless idols and created heavenly bodies' },
      { id: '2', text: 'He openly calls his father and people to worship Allah' },
      { id: '3', text: 'The broken idols expose a contradiction in the people’s belief' },
      { id: '4', text: 'Allah protects Abraham from the great fire' },
      { id: '5', text: 'Abraham challenges Nimrod’s claim of power' },
      { id: '6', text: 'He leaves Babylon and his family reaches the valley' },
      { id: '7', text: 'Zamzam supports settlement and Abraham and Ishmael build the Ka’ba' }
    ],
    correctAnswer: ['1', '2', '3', '4', '5', '6', '7'], explanation: 'The sequence shows a developing mission: reasoning, public challenge, trial, migration, family trust, and a lasting place of worship.',
    feedback: { correct: 'Correct. You reconstructed the major narrative arc.', incorrect: 'Use the chapter titles as anchors and rebuild the journey from Babylon to Mecca.' }
  },
  {
    id: 'abraham-b1-review-match', type: 'matching', title: 'Evidence and Meaning', instructions: 'Match each event with the idea it most clearly develops.',
    question: 'What does each event contribute to the story?',
    matchingPairs: [
      { left: 'People repeat their fathers’ worship', right: 'blind imitation can resist evidence' },
      { left: 'Abraham stays calm before the fire', right: 'trust can remain active under danger' },
      { left: 'Hagar runs between the hills', right: 'reliance on Allah includes sustained effort' },
      { left: 'The Ka’ba is rebuilt', right: 'the mission becomes a lasting communal legacy' }
    ],
    correctAnswer: { 'People repeat their fathers’ worship': 'blind imitation can resist evidence', 'Abraham stays calm before the fire': 'trust can remain active under danger', 'Hagar runs between the hills': 'reliance on Allah includes sustained effort', 'The Ka’ba is rebuilt': 'the mission becomes a lasting communal legacy' },
    explanation: 'These pairings connect events with broader B1-level themes while remaining grounded in the text.',
    feedback: { correct: 'Correct.', incorrect: 'Ask what each event shows about belief, trust, effort, or legacy.' }
  },
  {
    id: 'abraham-b1-review-reflection', type: 'reflection', title: 'Claim, Evidence, Explanation', instructions: 'Use at least one exact event from the story as evidence.',
    question: 'Which is more central to the story: Abraham’s reasoning or his perseverance? Explain how the two work together.',
    correctAnswer: true, explanation: 'A strong response makes a claim, cites a relevant event, and explains the relationship between thinking clearly and remaining committed under pressure.',
    feedback: { correct: 'Good reflection. Keep your claim tied to story evidence.', incorrect: 'Choose one event first, then explain what it shows about reasoning or perseverance.' },
    discussionPrompts: [
      { question: 'How does Chapter 5 show the difference between inherited belief and evidence?', mode: 'Individual' },
      { question: 'How does the fire episode test more than physical courage?', mode: 'Pair' },
      { question: 'How do Hagar’s actions complicate the idea that trust means simply waiting?', mode: 'Class' }
    ]
  },
  {
    id: 'abraham-b1-review-quiz', type: 'quiz-game', title: 'Independent Retrieval Quiz', instructions: 'Retrieve eight important ideas not used as simple repeats of the Knowledge Check.',
    question: 'Can you reconnect details, motives, and consequences across the story?', correctAnswer: null,
    explanation: 'This quiz targets distinct evidence and relationships across the narrative.',
    feedback: { correct: 'Strong retrieval.', incorrect: 'Return to the relevant chapter and identify the evidence before trying again.' },
    quizQuestions: [
      { question: 'Which created things, besides statues, did people in Babylon worship?', options: [{ text: 'The stars, the moon, and the sun', isCorrect: true }, { text: 'Only rivers and mountains', isCorrect: false }, { text: 'Only the king of Babylon', isCorrect: false }], hint: 'Use the opening paragraph of Chapter 1.' },
      { question: 'What does Abraham do after he enters the countryside and finds a cave?', options: [{ text: 'He sits and thinks about Allah before looking at the sky', isCorrect: true }, { text: 'He builds a new temple there', isCorrect: false }, { text: 'He meets Nimrod there', isCorrect: false }], hint: 'Use the beginning of the night scene in Chapter 3.' },
      { question: 'Why does Abraham mention food, drink, and healing when speaking to his people?', options: [{ text: 'To contrast Allah’s care with the idols’ inability to help', isCorrect: true }, { text: 'To ask the idols for a meal', isCorrect: false }, { text: 'To describe the festival menu', isCorrect: false }], hint: 'Focus on the contrast in Chapter 5.' },
      { question: 'What is the purpose of Abraham jokingly asking the idols to eat?', options: [{ text: 'To highlight their helplessness before he breaks them', isCorrect: true }, { text: 'To test whether the food is warm', isCorrect: false }, { text: 'To invite the people back early', isCorrect: false }], hint: 'The food remains untouched.' },
      { question: 'What does the fire burning only the ropes emphasize?', options: [{ text: 'The punishment is reversed into protection for Abraham', isCorrect: true }, { text: 'The people secretly untie him', isCorrect: false }, { text: 'The fire was never lit', isCorrect: false }], hint: 'Compare Abraham with what bound him.' },
      { question: 'Why are Sarah and Lot important at the beginning of the migration chapter?', options: [{ text: 'They show how few people had shared Abraham’s faith in Babylon', isCorrect: true }, { text: 'They lead Nimrod’s guards', isCorrect: false }, { text: 'They build the Ka’ba before Abraham', isCorrect: false }], hint: 'The chapter names only one woman and one man.' },
      { question: 'What does Abraham ask Allah to give his family so that they may give thanks?', options: [{ text: 'Blessings', isCorrect: true }, { text: 'A new group of idols', isCorrect: false }, { text: 'A royal palace', isCorrect: false }], hint: 'Use Abraham’s prayer at the beginning of Chapter 11.' },
      { question: 'How does Abraham remain connected to Mecca after people begin settling there?', options: [{ text: 'He visits Mecca several times to see his family', isCorrect: true }, { text: 'He sends Nimrod to govern the city', isCorrect: false }, { text: 'He never returns to the valley', isCorrect: false }], hint: 'Use the final sentence of Chapter 12.' }
    ]
  }
];

export const abrahamB1FinalChallengeExercises: Exercise[] = [
  { id: 'abraham-b1-final-1', type: 'multiple-choice', title: 'A Public System of Worship', instructions: 'Choose the interpretation best supported by Chapter 1.', question: 'What do the large house of worship and the people’s repeated bowing, crying, begging, and asking for help suggest about idol worship in Babylon?', options: ['It was an established communal practice supported by shared spaces and repeated actions', 'It was only a private habit inside Abraham’s family', 'It happened only once during a temporary celebration'], correctAnswer: 0, explanation: 'The chapter presents idol worship as a public and organized part of community life, not an isolated personal action.', feedback: { correct: 'Correct.', incorrect: 'Use the description of the large house of worship and what people regularly did there.' } },
  { id: 'abraham-b1-final-2', type: 'multiple-choice', title: 'Perseverance in Communication', instructions: 'Choose the interpretation best supported by Chapter 5.', question: 'What does Abraham’s response to the people’s anger show about the way he communicates his message?', options: ['He continues giving reasons and asks them to reconsider even when they become furious', 'He immediately stops explaining his position to avoid disagreement', 'He accepts their inherited practice but disagrees only in private'], correctAnswer: 0, explanation: 'The chapter says Abraham does not give up; he continues giving reasons and wants the people to reconsider their beliefs.', feedback: { correct: 'Correct.', incorrect: 'Follow the dialogue after the people become furious.' } },
  { id: 'abraham-b1-final-3', type: 'multiple-choice', title: 'Family and Future Mission', instructions: 'Choose the answer supported by Chapter 10.', question: 'Why is Abraham’s prayer for a child connected with his wider mission?', options: ['He hopes his child can teach people about Allah', 'He wants a child mainly to restore his status in Babylon', 'He expects the child to end his travels and keep the message private'], correctAnswer: 0, explanation: 'The chapter explicitly says Abraham asks for a child so that the child can teach people about Allah.', feedback: { correct: 'Correct.', incorrect: 'Find the sentence explaining why Abraham asks Allah for a child.' } },
  { id: 'abraham-b1-final-4', type: 'true-false', title: 'Forefathers and Resistance', instructions: 'Decide whether the statement is supported by Chapter 7.', question: 'One reason the people resist admitting Abraham is right is that doing so would also mean admitting their forefathers were wrong.', correctAnswer: true, explanation: 'The chapter directly connects their refusal with the difficulty of accepting that their forefathers had also been wrong.', feedback: { correct: 'Correct.', incorrect: 'Read the sentences immediately before the people begin shouting for punishment.' } },
  { id: 'abraham-b1-final-5', type: 'true-false', title: 'Hajj and Memory', instructions: 'Decide whether the statement agrees with Chapter 13.', question: 'The story says Hajj reminds Muslims about events connected with Abraham and his family.', correctAnswer: true, explanation: 'Chapter 13 states that Hajj reminds Muslims of many events connected with Abraham and his family.', feedback: { correct: 'Correct.', incorrect: 'Find the sentence about Hajj after the Ka’ba is rebuilt.' } },
  { id: 'abraham-b1-final-6', type: 'matching', title: 'Evidence and Interpretation', instructions: 'Match each detail with what it shows in the story.', question: 'What does each piece of evidence help the reader understand?', matchingPairs: [{ left: 'Birds could not fly over the flames', right: 'shows how extreme the heat was' }, { left: 'The people were shocked by the miracle but their anger remained', right: 'shows that amazement did not end their opposition' }], correctAnswer: { 'Birds could not fly over the flames': 'shows how extreme the heat was', 'The people were shocked by the miracle but their anger remained': 'shows that amazement did not end their opposition' }, explanation: 'The first detail establishes physical danger; the second separates surprise at the miracle from a change of belief.', feedback: { correct: 'Correct.', incorrect: 'Use the danger details in Chapter 8 and the opening reaction in Chapter 9.' } },
  { id: 'abraham-b1-final-7', type: 'matching', title: 'Action and Continuity', instructions: 'Match each action with the later meaning or result stated in the story.', question: 'How do these actions continue beyond the immediate moment?', matchingPairs: [{ left: 'Hagar runs between the two hills seven times', right: 'is remembered as sa’y in Hajj and Umrah' }, { left: 'Abraham and Ishmael find the old foundations', right: 'they build the Ka’ba on the earlier base' }], correctAnswer: { 'Hagar runs between the two hills seven times': 'is remembered as sa’y in Hajj and Umrah', 'Abraham and Ishmael find the old foundations': 'they build the Ka’ba on the earlier base' }, explanation: 'The story links Hagar’s repeated search with sa’y and links the new construction with the earlier foundations.', feedback: { correct: 'Correct.', incorrect: 'Use the later part of Chapter 11 and the second paragraph of Chapter 13.' } },
  { id: 'abraham-b1-final-8', type: 'fill-blanks', title: 'Azer’s Claim', instructions: 'Complete the key word from Chapter 2.', question: 'Complete Azer’s explanation about Mardukh.', fillBlanksText: 'Azer said Mardukh’s big ears showed his deep [blank].', correctAnswer: 'knowledge', explanation: 'Azer describes the statue’s large ears as a sign of “deep knowledge.”', feedback: { correct: 'Correct.', incorrect: 'Return to Azer’s final explanation about Mardukh’s ears.' } },
  { id: 'abraham-b1-final-9', type: 'fill-blanks', title: 'The Aim of the Public Call', instructions: 'Complete the meaningful action word from Chapter 5.', question: 'Complete the sentence.', fillBlanksText: 'Abraham wanted the people to [blank] their beliefs.', correctAnswer: 'reconsider', explanation: 'The chapter says Abraham wanted the people to reconsider their beliefs even though they ignored him.', feedback: { correct: 'Correct.', incorrect: 'Look at the sentence just before the people ignore Abraham.' } },
  { id: 'abraham-b1-final-10', type: 'sequencing', title: 'From Babylon to the Valley', instructions: 'Put the migration developments in story order.', question: 'How does Chapter 10 move from Babylon to the new family setting?', sequencingItems: [{ id: '1', text: 'Abraham decides to leave Babylon' }, { id: '2', text: 'He travels through Syria and Palestine' }, { id: '3', text: 'Hagar gives birth to Ishmael' }, { id: '4', text: 'The family reaches the valley near Safa and Marwa' }], correctAnswer: ['1', '2', '3', '4'], explanation: 'The chapter moves from departure, through travel and the birth of Ishmael, to the family’s arrival in the valley.', feedback: { correct: 'Correct.', incorrect: 'Trace Chapter 10 from the reason for leaving Babylon to the final valley scene.' } }
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
