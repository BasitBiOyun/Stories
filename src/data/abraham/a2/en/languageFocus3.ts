import type { Exercise } from '../../../../types';

export const abrahamA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  10: [
    {
      id: 'abraham-a2-language-10-thought-intention',
      type: 'matching',
      title: 'Words from the King’s Palace',
      instructions: 'Match each Chapter 10 expression with its meaning.',
      question: 'What do these words from Chapter 10 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'ordinary', right: 'like everybody else' },
        { left: 'Let him go.', right: 'He is free to leave.' },
        { left: 'brings death', right: 'makes people die' },
        { left: 'angrier', right: 'even more upset' },
      ],
      correctAnswer: {
        ordinary: 'like everybody else',
        'Let him go.': 'He is free to leave.',
        'brings death': 'makes people die',
        angrier: 'even more upset',
      },
      explanation: 'Nimrod thought Abraham “was not an ordinary person”: he was different from other people. “Let him go” means “allow him to leave”. Abraham says Allah “gives life and brings death”. At the end, Nimrod was already angry, and the question “made Nimrod angrier”.',
      feedback: {
        correct: 'Well done. You understood the key words of the chapter.',
        incorrect: 'Find each expression in Chapter 10 and read the sentence around it.',
      },
    },
    {
      id: 'abraham-a2-language-10-commands-let',
      type: 'word-bank',
      title: 'Heard, Thought, Wanted',
      instructions: 'Fill each gap from the bank. Two words are not needed.',
      question: 'Which past form fits each gap?',
      fillBlanksText: 'Nimrod was the King of Babylon. He [blank] about the miracle. He [blank] Abraham was not an ordinary person. So, he [blank] to meet him.',
      wordBank: ['heard', 'thought', 'wanted', 'thinked', 'hear'],
      correctAnswer: ['heard', 'thought', 'wanted'],
      explanation: 'The story is in the past. “Hear” and “think” are irregular: hear → heard, think → thought (not “thinked”). “Want” is regular: want → wanted. First Nimrod heard, then he thought, so he wanted to meet Abraham.',
      feedback: {
        correct: 'Correct. You used the past forms in the right order.',
        incorrect: 'Read the first lines of Chapter 10 again. The past of “think” is not “thinked”.',
      },
    },
    {
      id: 'abraham-a2-language-10-ability-cause',
      type: 'sentence-building',
      title: 'The King’s Order',
      instructions: 'Tap the pieces to make the sentence from Chapter 10.',
      question: 'What did Nimrod order?',
      sentenceChunks: ['He ordered', 'his guards', 'to bring', 'two slaves.'],
      correctAnswer: null,
      explanation: 'The pattern is “order + person + to + base verb”: “He ordered his guards to bring two slaves.” First we say who got the order, then what they must do.',
      feedback: {
        correct: 'Correct. You built the order: ordered + person + to + verb.',
        incorrect: 'Start with “He ordered”. Then say who got the order, and then “to + verb”.',
      },
    },
    { id: 'abraham-a2-language-10-production', type: 'reflection', title: 'Say It: A Claim and a Test', instructions: 'Write or say four short sentences about testing a friend’s words.', question: 'Can your friend really do it?', correctAnswer: null, explanation: 'Use “thought ...”, “ordered ... to ...”, “Can you ...?”, and “couldn’t ...” or “made ... + adjective”.', feedback: { correct: 'Keep the situation short and connected.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Say what someone thought: “My friend thought …”', mode: 'Individual' }, { question: 'Sentence 2 — Say what someone ordered: “Our teacher told us to …”', mode: 'Individual' }, { question: 'Sentence 3 — Ask: “Can you …?”', mode: 'Individual' }, { question: 'Sentence 4 — Give the result: “He couldn’t, and …”', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  11: [
    {
      id: 'abraham-a2-language-11-decision-purpose',
      type: 'drag-drop',
      title: 'Talking About a Journey',
      instructions: 'Put each Chapter 11 phrase in the right group.',
      question: 'Where or how did they travel? When, or how long?',
      dragDropGroups: [
        { group: 'Where or how', items: ['from Babylon to Syria and Palestine', 'on camels', 'near two small hills'] },
        { group: 'When or how long', items: ['During his journey', 'for a long time', 'Finally'] },
      ],
      correctAnswer: {
        'Where or how': ['from Babylon to Syria and Palestine', 'on camels', 'near two small hills'],
        'When or how long': ['During his journey', 'for a long time', 'Finally'],
      },
      explanation: '“From … to …” gives the start and end of a route, “on camels” tells us how they travelled, and “near” gives a place. “During” and “for a long time” are about time, and “Finally” shows the end of the journey.',
      feedback: {
        correct: 'Correct. You separated place and travel words from time words.',
        incorrect: 'Ask: Does this phrase answer “Where?” or “How?”, or does it answer “When?” or “How long?”',
      },
    },
    {
      id: 'abraham-a2-language-11-journey-language',
      type: 'choose-form',
      title: 'Decided To, Asked To',
      instructions: 'Choose the correct words for each sentence from Chapter 11.',
      question: 'Which words fit each sentence about the journey?',
      formChoices: [
        { sentence: 'So, he decided [choice] Babylon …', options: ['leaving', 'to leave', 'leave'], answer: 1 },
        { sentence: '… travel to other lands [choice] people about Allah’s message.', options: ['for tell', 'tell', 'to tell'], answer: 2 },
        { sentence: 'One day, Allah asked Abraham (pbuh) [choice] with his wife and the little child, Ishmael.', options: ['to travel', 'travel', 'travelling'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: 'After “decide”, use “to + base verb”: decided to leave. “To + base verb” can also give a purpose: he travelled to tell people about Allah’s message. After “ask + person”, use “to + base verb”: asked Abraham to travel.',
      feedback: {
        correct: 'Well done. All three need “to + base verb”.',
        incorrect: 'Read Chapter 11 again. After “decided”, after “asked Abraham”, and to give a purpose, the chapter uses “to + base verb”.',
      },
    },
    {
      id: 'abraham-a2-language-11-family-naming',
      type: 'error-correction',
      title: 'Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about the journey?',
      errorItems: [
        {
          sentence: 'Abraham (pbuh) begun his journey.',
          error: 'begun',
          options: ['begins', 'began', 'beginning'],
          answer: 1,
        },
        {
          sentence: 'Finally, they arrived to a quiet valley near two small hills, Safa and Marwah.',
          error: 'arrived to',
          options: ['arrived at', 'arrive at', 'arrived in to'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'The past form of “begin” is “began”. We say “arrive at” a place, not “arrive to”.',
      feedback: {
        correct: 'Correct. You fixed the past verb and the preposition.',
        incorrect: 'Read the second paragraph of Chapter 11 again. What is the past of “begin”? Which word comes after “arrived”?',
      },
    },
    { id: 'abraham-a2-language-11-production', type: 'reflection', title: 'Say It: A Short Journey', instructions: 'Write or say four short sentences about a journey you made.', question: 'Where did you go, and how?', correctAnswer: null, explanation: 'Use “decided to”, “from ... to ...”, a transport phrase, and “Finally, arrived at ...”.', feedback: { correct: 'Keep the journey clear and short.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Say what you decided: “We decided to …”', mode: 'Individual' }, { question: 'Sentence 2 — Give the route: “We travelled from … to …”', mode: 'Individual' }, { question: 'Sentence 3 — Say how or how long: “We went by …” or “The journey took …”', mode: 'Individual' }, { question: 'Sentence 4 — Say when you arrived: “Finally, we arrived at …”', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  12: [
    {
      id: 'abraham-a2-language-12-instructions-belief',
      type: 'matching',
      title: 'Words from the Valley',
      instructions: 'Match each Chapter 12 word with its meaning.',
      question: 'What do these words from Chapter 12 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'fearlessly', right: 'bravely' },
        { left: 'protect', right: 'keep safe from harm' },
        { left: 'blessings', right: 'good gifts from Allah' },
        { left: 'useless', right: 'of no help' },
      ],
      correctAnswer: {
        fearlessly: 'bravely',
        protect: 'keep safe from harm',
        blessings: 'good gifts from Allah',
        useless: 'of no help',
      },
      explanation: 'Hagar “thought fearlessly”: she was not afraid. Abraham “asked Allah to protect his family” and “to give them blessings”. Hagar ran from hill to hill, “but it was useless”: running did not help her find water.',
      feedback: {
        correct: 'Well done. You understood the key words of the chapter.',
        incorrect: 'Find each word in Chapter 12 and read the sentence around it.',
      },
    },
    {
      id: 'abraham-a2-language-12-prayer-purpose',
      type: 'sentence-building',
      title: 'Hagar’s Strong Belief',
      instructions: 'Tap the pieces to build Hagar’s words from Chapter 12.',
      question: 'Where does “never” go in a sentence with “will”?',
      sentenceChunks: ['Allah', 'will', 'never', 'let', 'us', 'die.'],
      correctAnswer: null,
      explanation: '“Never” goes after “will” and before the main verb: will never let. “Let + person + base verb” means “allow”: let us die. Hagar is sure about the future: Allah will protect them.',
      feedback: {
        correct: 'Correct. “Will never let us die” shows Hagar’s strong belief.',
        incorrect: 'Start with “Allah will”. Put “never” before the verb “let”.',
      },
    },
    {
      id: 'abraham-a2-language-12-lack-search',
      type: 'choose-form',
      title: 'Told To, Had To, Nobody',
      instructions: 'Choose the correct words for each sentence from Chapter 12.',
      question: 'Which words fit the sentences about Hagar?',
      formChoices: [
        { sentence: 'Abraham (pbuh) told his wife [choice] near one of the hills with Ishmael.', options: ['stay', 'to stay', 'staying'], answer: 1 },
        { sentence: 'Hagar [choice] give food to her child.', options: ['has to', 'must to', 'had to'], answer: 2 },
        { sentence: 'There was no water and [choice] to help her.', options: ['nobody', 'anybody', 'somebody'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: '“Tell + person + to + base verb” gives an instruction: told his wife to stay. “Had to” shows a duty in the past. “Nobody” means “no person”: there was no water and no person to help her.',
      feedback: {
        correct: 'Well done. You completed the instruction, the duty and the sentence about no help.',
        incorrect: 'Read Chapter 12 again. The story is in the past. Which word means “no person”?',
      },
    },
    { id: 'abraham-a2-language-12-production', type: 'reflection', title: 'Say It: Need, Request and Action', instructions: 'Write or say four short sentences about something your class needed.', question: 'What did you need, and what did you do?', correctAnswer: null, explanation: 'Use “no ...”, “had to ...”, “asked ... to ...”, and “will surely/will never ...”.', feedback: { correct: 'Keep the four ideas connected.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Say what is missing: “We had no … left.”', mode: 'Individual' }, { question: 'Sentence 2 — Say what you had to do: “We had to …”', mode: 'Individual' }, { question: 'Sentence 3 — Ask for help: “We asked … to …”', mode: 'Individual' }, { question: 'Sentence 4 — Say what will happen: “We will surely …”', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  13: [
    {
      id: 'abraham-a2-language-13-background-event',
      type: 'drag-drop',
      title: 'Going On, or One Moment?',
      instructions: 'Put each part of Chapter 13 in the right group.',
      question: 'Was it going on, or did it happen at one moment?',
      dragDropGroups: [
        { group: 'Was going on', items: ['Hagar was running in the desert', 'Ishmael was crying for water'] },
        { group: 'Happened at one moment', items: ['Suddenly water came out of the ground', 'she shouted, “Zamzam!”', 'She drank the water.'] },
      ],
      correctAnswer: {
        'Was going on': ['Hagar was running in the desert', 'Ishmael was crying for water'],
        'Happened at one moment': ['Suddenly water came out of the ground', 'she shouted, “Zamzam!”', 'She drank the water.'],
      },
      explanation: '“Was + -ing” (was running, was crying) tells us what was going on in the background. The past simple (came, shouted, drank) tells us what happened at one moment. “Suddenly” shows a surprising new event.',
      feedback: {
        correct: 'Correct. You separated the background actions from the events.',
        incorrect: 'Look at the verbs. “Was running” and “was crying” were going on. “Came”, “shouted” and “drank” happened at one moment.',
      },
    },
    {
      id: 'abraham-a2-language-13-sequence-degree',
      type: 'choose-form',
      title: 'Because or Because Of?',
      instructions: 'Choose the correct words for each sentence from Chapter 13.',
      question: 'Which fits: became, because or because of?',
      formChoices: [
        { sentence: 'Later, this water [choice] very famous.', options: ['become', 'became', 'becomes'], answer: 1 },
        { sentence: 'The water is special [choice] it was a gift from Allah in the middle of the desert.', options: ['because of', 'so', 'because'], answer: 2 },
        { sentence: 'More people came there [choice] this water.', options: ['because of', 'because', 'for because'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: '“Became” is the past of “become” and shows a change. “Because” comes before a subject and verb (it was a gift …). “Because of” comes before a noun (this water).',
      feedback: {
        correct: 'Well done. You chose “because” before a clause and “because of” before a noun.',
        incorrect: 'Look at the words after the gap. Is there a subject and verb (it was …), or only a noun (this water)?',
      },
    },
    {
      id: 'abraham-a2-language-13-change-cause',
      type: 'multiple-choice',
      title: 'Words That Tell Someone What to Do',
      instructions: 'Read the lines from Chapter 13. Choose the right answer.',
      question: 'When Hagar saw this, she shouted, “Zamzam!” It means “Flow slowly, stop!” What do the words “Flow” and “stop” do here?',
      options: [
        'They tell what happened in the past.',
        'They ask the water a question.',
        'They tell the water what to do.',
      ],
      correctAnswer: 2,
      explanation: '“Flow” and “stop” are imperatives: Base verbs that tell someone or something what to do. There is no subject before them.',
      feedback: {
        correct: 'Correct. “Flow slowly, stop!” tells the water what to do.',
        incorrect: 'Look at the verbs “Flow” and “stop”. Is there a question mark? Is there a past form?',
      },
    },
    { id: 'abraham-a2-language-13-production', type: 'reflection', title: 'Say It: A Sudden Change', instructions: 'Write or say four short sentences about something that happened suddenly.', question: 'What happened suddenly?', correctAnswer: null, explanation: 'Use “was/were + -ing”, “Suddenly ...”, “Then ...”, and “because ...”.', feedback: { correct: 'Make the sequence short and clear.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Say what was going on: “I was …ing …”', mode: 'Individual' }, { question: 'Sentence 2 — Add a sudden event: “Suddenly, …”', mode: 'Individual' }, { question: 'Sentence 3 — Say what happened next: “Then …”', mode: 'Individual' }, { question: 'Sentence 4 — Give a reason: “… because …”', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  14: [
    {
      id: 'abraham-a2-language-14-time-task',
      type: 'multiple-choice',
      title: 'A Promise to Help',
      instructions: 'Read Ishmael’s answer from Chapter 14. Choose the best meaning.',
      question: 'Abraham said, “Allah gave me an important job, and you will help me with it.” Ishmael said, “I will help you for sure.” What does Ishmael mean?',
      options: [
        'He helped his father before.',
        'He promises to help his father.',
        'He is not sure he can help.',
      ],
      correctAnswer: 1,
      explanation: '“Will + base verb” can make a promise about the future. “For sure” means “certainly”, so Ishmael is very sure: He will help.',
      feedback: {
        correct: 'Correct. “I will help you for sure” is a promise.',
        incorrect: 'Look at “will” and “for sure”. Is Ishmael talking about the past or the future? Is he sure?',
      },
    },
    {
      id: 'abraham-a2-language-14-future-certainty',
      type: 'matching',
      title: 'Which Question Does It Answer?',
      instructions: 'Match each part of the sentence with the question it answers.',
      question: '“During that time, Abraham (pbuh) visited Mecca several times to see his family.”',
      matchingHeadings: { left: 'From the chapter', right: 'It answers' },
      matchingPairs: [
        { left: 'During that time', right: 'When?' },
        { left: 'Mecca', right: 'Where?' },
        { left: 'several times', right: 'How often?' },
        { left: 'to see his family', right: 'Why?' },
      ],
      correctAnswer: {
        'During that time': 'When?',
        Mecca: 'Where?',
        'several times': 'How often?',
        'to see his family': 'Why?',
      },
      explanation: 'One sentence can answer many questions. “During that time” gives the time, “Mecca” gives the place, “several times” means more than two times, and “to + base verb” (to see) gives the reason or purpose.',
      feedback: {
        correct: 'Well done. You found the time, place, number of times and purpose.',
        incorrect: 'Read the first sentence of Chapter 14 again. Which part tells the purpose? Which part tells how many times?',
      },
    },
    {
      id: 'abraham-a2-language-14-after-still-connection',
      type: 'word-bank',
      title: 'After, Still, One Of',
      instructions: 'Fill each gap from the bank. Two words are not needed.',
      question: 'Which word fits each gap?',
      fillBlanksText: '[blank] Abraham (pbuh) built the Sacred Ka’ba, his mission was over. … Today, people [blank] visit the House of Allah to make Hajj. … After many years, Ishmael’s family grew and grew. [blank] them was Muhammad, the Prophet of Islam (pbuh).',
      wordBank: ['After', 'still', 'One of', 'Before', 'yet'],
      correctAnswer: ['After', 'still', 'One of'],
      explanation: '“After + past event” shows what came first: First he built the Ka’ba, then his mission was over. “Still” shows that something continues today. “One of + plural” picks one person from a group.',
      feedback: {
        correct: 'Correct. You connected the past, today and the Prophet’s family.',
        incorrect: 'Read Chapter 14 again. When was the mission over: Before or after the building? Which word shows that Hajj continues today?',
      },
    },
    { id: 'abraham-a2-language-14-production', type: 'reflection', title: 'Say It: A Shared Task', instructions: 'Write or say four sentences about a job your class did together.', question: 'What did you do, and why?', correctAnswer: null, explanation: 'Use one time expression, purpose with “to”, “will” for help, and “still” for continuation.', feedback: { correct: 'Keep the four ideas connected.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Begin with the time: “Last week, …”', mode: 'Individual' }, { question: 'Sentence 2 — Say what for: “We … to …”', mode: 'Individual' }, { question: 'Sentence 3 — Add a promise: “I will help you …”', mode: 'Pair' }, { question: 'Sentence 4 — Say what still happens: “Today, we still …”', mode: 'Individual' }] }
  ]
};
