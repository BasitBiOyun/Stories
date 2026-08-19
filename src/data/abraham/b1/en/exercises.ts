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
  {
    id: 'abraham-b1-kc-1', type: 'multiple-choice', title: 'A Consistent Standard', instructions: 'Choose the explanation that connects Chapters 1–4.',
    question: 'What standard does Abraham repeatedly use when evaluating idols and heavenly bodies?',
    options: ['Created things that lack independent power cannot be the Creator', 'Anything admired by many people must be divine', 'The largest object deserves worship'], correctAnswer: 0,
    explanation: 'Idols cannot act, while the star, moon, and sun appear and disappear; the story uses these limits to distinguish creation from the Creator.',
    feedback: { correct: 'Correct.', incorrect: 'Compare Abraham’s observations about statues with his observations about the sky.' }
  },
  {
    id: 'abraham-b1-kc-2', type: 'true-false', title: 'Family Pressure', instructions: 'Decide whether this accurately summarizes Chapter 4.',
    question: 'Abraham’s father responds to his invitation by threatening him and telling him to leave.', correctAnswer: true,
    explanation: 'The chapter shows that Abraham’s mission immediately brings personal and family opposition.',
    feedback: { correct: 'Correct.', incorrect: 'Reread the final dialogue in Chapter 4.' }
  },
  {
    id: 'abraham-b1-kc-3', type: 'multiple-choice', title: 'Why the Demonstration Works', instructions: 'Choose the best explanation across Chapters 6–7.',
    question: 'Why is the broken-idol episode more than an act of destruction in the narrative?',
    options: ['It creates a situation in which the people must admit the idols cannot speak or protect themselves', 'It teaches the people how to build stronger statues', 'It convinces the people before Abraham is questioned'], correctAnswer: 0,
    explanation: 'The plan produces a public contradiction between worshipping the idols and admitting their helplessness.',
    feedback: { correct: 'Correct.', incorrect: 'Connect the axe in Chapter 6 with the people’s admission in Chapter 7.' }
  },
  {
    id: 'abraham-b1-kc-4', type: 'true-false', title: 'Evidence and Response', instructions: 'Decide whether the statement is supported.',
    question: 'After recognizing the weakness of their position, the people immediately change their beliefs.', correctAnswer: false,
    explanation: 'The chapter says they feel shame but remain arrogant and call for Abraham to be punished.',
    feedback: { correct: 'Correct.', incorrect: 'Read the final paragraph of Chapter 7 and distinguish recognition from acceptance.' }
  },
  {
    id: 'abraham-b1-kc-5', type: 'multiple-choice', title: 'The Fire as a Turning Point', instructions: 'Choose the best cause-and-result summary.',
    question: 'What makes the fire episode a turning point in the story?',
    options: ['A punishment meant to destroy Abraham becomes evidence of Allah’s protection', 'The people cancel the punishment before it starts', 'Nimrod orders Abraham to leave Babylon immediately'], correctAnswer: 0,
    explanation: 'The fire becomes cool and safe, reversing the people’s intended result.',
    feedback: { correct: 'Correct.', incorrect: 'Compare what the people intend with what actually happens to Abraham.' }
  },
  {
    id: 'abraham-b1-kc-6', type: 'multiple-choice', title: 'Power in the Nimrod Debate', instructions: 'Choose the best interpretation.',
    question: 'What does Abraham’s sunrise challenge reveal about Nimrod’s claim?',
    options: ['Nimrod can control people but not the order of creation', 'Nimrod has the same power as Allah', 'Nimrod refuses because the sun already rises from the west'], correctAnswer: 0,
    explanation: 'Abraham distinguishes political control over people from power over creation itself.',
    feedback: { correct: 'Correct.', incorrect: 'Ask what Nimrod can command and what he cannot command.' }
  },
  {
    id: 'abraham-b1-kc-7', type: 'multiple-choice', title: 'Migration and Responsibility', instructions: 'Choose the explanation supported by Chapters 10–11.',
    question: 'How do the migration chapters broaden Abraham’s mission?',
    options: ['The story moves from public preaching to family responsibility, trust, and establishing a new future', 'Abraham stops caring about his family after leaving Babylon', 'The journey is presented only as a search for wealth'], correctAnswer: 0,
    explanation: 'The narrative now connects mission with Hagar, Ishmael, the valley, prayer, and responsibility for a future community.',
    feedback: { correct: 'Correct.', incorrect: 'Compare the reason for leaving Babylon with Abraham’s prayer for his family.' }
  },
  {
    id: 'abraham-b1-kc-8', type: 'multiple-choice', title: 'The Valley’s Transformation', instructions: 'Choose the strongest synthesis of Chapters 11–13.',
    question: 'Which chain best explains how the barren valley gains long-term religious significance?',
    options: ['Hagar acts with trust → Zamzam appears → people settle → Abraham and Ishmael build the Ka’ba', 'Nimrod sends water → idols are built → Babylon moves to Mecca', 'Abraham finds a city first → Hagar searches later → Zamzam disappears'], correctAnswer: 0,
    explanation: 'The final chapters connect effort, divine provision, settlement, worship, and the message of Tawheed.',
    feedback: { correct: 'Correct.', incorrect: 'Trace the story from Hagar’s search to the building of the Ka’ba.' }
  }
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
    correctAnswer: {
      'People repeat their fathers’ worship': 'blind imitation can resist evidence',
      'Abraham stays calm before the fire': 'trust can remain active under danger',
      'Hagar runs between the hills': 'reliance on Allah includes sustained effort',
      'The Ka’ba is rebuilt': 'the mission becomes a lasting communal legacy'
    },
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
      {
        question: 'What does Abraham watching his father make idols add to his criticism of idol worship?',
        options: [{ text: 'It shows the objects are made by human hands', isCorrect: true }, { text: 'It proves the idols created Azer', isCorrect: false }, { text: 'It shows only children could see them', isCorrect: false }],
        hint: 'Think about maker and made object.'
      },
      {
        question: 'Why does Abraham ask Allah for guidance after observing the sun?',
        options: [{ text: 'He recognizes his dependence on Allah for the right path', isCorrect: true }, { text: 'He decides the sun is divine', isCorrect: false }, { text: 'He wants to return to idol worship', isCorrect: false }],
        hint: 'Use Abraham’s prayer in Chapter 4.'
      },
      {
        question: 'Why does Abraham mention food, drink, and healing when speaking to his people?',
        options: [{ text: 'To contrast Allah’s care with the idols’ inability to help', isCorrect: true }, { text: 'To ask the idols for a meal', isCorrect: false }, { text: 'To describe the festival menu', isCorrect: false }],
        hint: 'Focus on the contrast in Chapter 5.'
      },
      {
        question: 'What is the purpose of Abraham jokingly asking the idols to eat?',
        options: [{ text: 'To highlight their helplessness before he breaks them', isCorrect: true }, { text: 'To test whether the food is warm', isCorrect: false }, { text: 'To invite the people back early', isCorrect: false }],
        hint: 'The food remains untouched.'
      },
      {
        question: 'What does the fire burning only the ropes emphasize?',
        options: [{ text: 'The punishment is reversed into protection for Abraham', isCorrect: true }, { text: 'The people secretly untie him', isCorrect: false }, { text: 'The fire was never lit', isCorrect: false }],
        hint: 'Compare Abraham with what bound him.'
      },
      {
        question: 'Why are Sarah and Lot important at the beginning of the migration chapter?',
        options: [{ text: 'They show how few people had shared Abraham’s faith in Babylon', isCorrect: true }, { text: 'They lead Nimrod’s guards', isCorrect: false }, { text: 'They build the Ka’ba before Abraham', isCorrect: false }],
        hint: 'The chapter names only one woman and one man.'
      },
      {
        question: 'What makes Hagar’s statement before Abraham leaves important?',
        options: [{ text: 'She understands that he is obeying Allah and expresses trust in Allah’s protection', isCorrect: true }, { text: 'She believes the valley already has farms', isCorrect: false }, { text: 'She plans to return immediately to Babylon', isCorrect: false }],
        hint: 'Use her words about Allah’s protection.'
      },
      {
        question: 'Why do more people settle in the valley after Zamzam appears?',
        options: [{ text: 'Reliable water makes life possible there', isCorrect: true }, { text: 'Nimrod orders them to move', isCorrect: false }, { text: 'The old Babylonian temple is moved there', isCorrect: false }],
        hint: 'Think about what a desert settlement needs.'
      }
    ]
  }
];

export const abrahamB1FinalChallengeExercises: Exercise[] = [
  {
    id: 'abraham-b1-final-1', type: 'multiple-choice', title: 'From Observation to Principle', instructions: 'Choose the best synthesis.',
    question: 'What principle links Abraham’s rejection of idols with his rejection of the star, moon, and sun?',
    options: ['What is created, limited, or dependent cannot be the Creator', 'Whatever is visible must be worshipped', 'Only large objects can have power'], correctAnswer: 0,
    explanation: 'Across the opening chapters, Abraham distinguishes the Creator from things that are made, powerless, changing, or disappearing.',
    feedback: { correct: 'Correct.', incorrect: 'Compare the limits of the statues with the limits of the heavenly bodies.' }
  },
  {
    id: 'abraham-b1-final-2', type: 'multiple-choice', title: 'Courage and Communication', instructions: 'Choose the answer best supported by the story.',
    question: 'Which description best fits Abraham’s way of challenging false belief?',
    options: ['He combines direct speech, questions, comparisons, and public evidence', 'He avoids giving reasons and only leaves silently', 'He accepts every tradition to avoid disagreement'], correctAnswer: 0,
    explanation: 'The story repeatedly shows Abraham using reasons and questions before and during public opposition.',
    feedback: { correct: 'Correct.', incorrect: 'Think across the conversations with his father, his people, and Nimrod.' }
  },
  {
    id: 'abraham-b1-final-3', type: 'multiple-choice', title: 'Trust as Action', instructions: 'Choose the best comparison.',
    question: 'What do Abraham before the fire and Hagar in the valley have in common?',
    options: ['Both trust Allah while still facing the concrete demands of their situation', 'Both avoid every difficult situation', 'Both depend on idols for protection'], correctAnswer: 0,
    explanation: 'Abraham remains steadfast under danger, while Hagar trusts Allah and actively searches for help.',
    feedback: { correct: 'Correct.', incorrect: 'Compare trust in Chapter 8 with trust and effort in Chapter 11.' }
  },
  {
    id: 'abraham-b1-final-4', type: 'true-false', title: 'Recognition Is Not Acceptance', instructions: 'Decide whether this synthesis is correct.',
    question: 'The people’s shame after Abraham’s argument shows that recognizing a strong argument does not always mean accepting it.', correctAnswer: true,
    explanation: 'They recognize the force of Abraham’s point but arrogance leads them to reject the truth and demand punishment.',
    feedback: { correct: 'Correct.', incorrect: 'Return to the people’s reaction after they admit the idols cannot speak.' }
  },
  {
    id: 'abraham-b1-final-5', type: 'true-false', title: 'Migration and Mission', instructions: 'Decide whether the statement is supported.',
    question: 'Leaving Babylon is presented as the end of Abraham’s public mission.', correctAnswer: false,
    explanation: 'He leaves specifically to spread Allah’s message in other lands; the mission continues in a new setting.',
    feedback: { correct: 'Correct.', incorrect: 'Read the reason given for Abraham’s departure.' }
  },
  {
    id: 'abraham-b1-final-6', type: 'matching', title: 'Cause and Consequence', instructions: 'Match each cause with its consequence.',
    question: 'Which consequences follow these story events?',
    matchingPairs: [
      { left: 'The people admit the idols cannot speak', right: 'Abraham questions why they worship them' },
      { left: 'Zamzam provides water', right: 'more people settle in the valley' }
    ],
    correctAnswer: { 'The people admit the idols cannot speak': 'Abraham questions why they worship them', 'Zamzam provides water': 'more people settle in the valley' },
    explanation: 'Both pairs require following an explicit cause-and-result relationship.',
    feedback: { correct: 'Correct.', incorrect: 'Use Chapters 7 and 12 and follow what happens immediately afterward.' }
  },
  {
    id: 'abraham-b1-final-7', type: 'matching', title: 'Speaker and Purpose', instructions: 'Match the statement with its purpose in the narrative.',
    question: 'What is each statement doing?',
    matchingPairs: [
      { left: '“Can you make the sun rise from the west?”', right: 'tests the limits of Nimrod’s claimed power' },
      { left: '“Allah will surely protect us.”', right: 'expresses Hagar’s trust in the valley' }
    ],
    correctAnswer: { '“Can you make the sun rise from the west?”': 'tests the limits of Nimrod’s claimed power', '“Allah will surely protect us.”': 'expresses Hagar’s trust in the valley' },
    explanation: 'One statement challenges human arrogance; the other expresses reliance on Allah.',
    feedback: { correct: 'Correct.', incorrect: 'Identify the speaker and situation for each line.' }
  },
  {
    id: 'abraham-b1-final-8', type: 'fill-blanks', title: 'A Reason for Opposition', instructions: 'Complete the sentence with the key idea from Chapter 7.',
    question: 'Complete the explanation.', fillBlanksText: 'The people knew Abraham’s argument was strong, but their [blank] kept them from admitting they were wrong.',
    correctAnswer: 'arrogance', explanation: 'The chapter explicitly says they were too arrogant to accept the truth and admit they were wrong.',
    feedback: { correct: 'Correct.', incorrect: 'Look for the word describing pride that blocks acceptance of truth.' }
  },
  {
    id: 'abraham-b1-final-9', type: 'fill-blanks', title: 'A Lasting Message', instructions: 'Complete the sentence from the story’s closing idea.',
    question: 'Complete the statement.', fillBlanksText: 'Abraham’s descendants carried the message of the [blank] of Allah.', correctAnswer: 'Oneness',
    explanation: 'The final chapter names the Oneness of Allah as the message carried through Abraham’s descendants.',
    feedback: { correct: 'Correct.', incorrect: 'Use the final paragraph of Chapter 13.' }
  },
  {
    id: 'abraham-b1-final-10', type: 'sequencing', title: 'The Valley Becomes a Sacred Centre', instructions: 'Put the developments in their logical and narrative order.',
    question: 'How does the final part of the story move from hardship to lasting worship?',
    sequencingItems: [
      { id: '1', text: 'Hagar and Ishmael face scarcity in the valley' },
      { id: '2', text: 'Hagar searches between Safa and Marwa' },
      { id: '3', text: 'Zamzam appears and supports settlement' },
      { id: '4', text: 'Abraham and Ishmael rebuild the Ka’ba' }
    ],
    correctAnswer: ['1', '2', '3', '4'], explanation: 'The sequence links hardship, effort, provision, community, and worship without reducing the story to isolated facts.',
    feedback: { correct: 'Correct.', incorrect: 'Trace Chapters 11–13 in order.' }
  }
];
