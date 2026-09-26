import type { Exercise } from '../../../../types';

export const abrahamA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  10: [
    {
      id: 'abraham-a2-language-10-thought-intention',
      type: 'matching',
      title: 'Words from the King’s Palace',
      instructions: 'Match each Chapter 10 expression with its meaning.',
      question: 'What do these words from the meeting between Abraham and Nimrod mean?',
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
      instructions: 'Complete the lines from Chapter 10 with words from the bank. Two words are not needed.',
      question: 'Which past forms tell us what Nimrod heard, thought and wanted?',
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
      instructions: 'Tap the pieces to build the sentence from Chapter 10.',
      question: 'How does the chapter tell us what Nimrod ordered?',
      sentenceChunks: ['He ordered', 'his guards', 'to bring', 'two slaves.'],
      correctAnswer: null,
      explanation: 'The pattern is “order + person + to + base verb”: “He ordered his guards to bring two slaves.” First we say who got the order, then what they must do.',
      feedback: {
        correct: 'Correct. You built the order: ordered + person + to + verb.',
        incorrect: 'Start with “He ordered”. Then say who got the order, and then “to + verb”.',
      },
    },
    { id: 'abraham-a2-language-10-production', type: 'reflection', title: 'Say It: A Claim and a Test', instructions: 'Write or say four short A2 sentences using Chapter 10 patterns.', question: 'Can you report a thought, give an order, ask about ability and show a result?', correctAnswer: null, explanation: 'Use “thought ...”, “ordered ... to ...”, “Can you ...?”, and “couldn’t ...” or “made ... + adjective”.', feedback: { correct: 'Keep the situation short and connected.', incorrect: '' }, discussionPrompts: [{ question: 'Report one thought.', mode: 'Individual' }, { question: 'Report one order.', mode: 'Individual' }, { question: 'Ask one “Can you ...?” question.', mode: 'Individual' }, { question: 'Finish with a result.', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  11: [
    {
      id: 'abraham-a2-language-11-decision-purpose',
      type: 'drag-drop',
      title: 'Talking About a Journey',
      instructions: 'Put each Chapter 11 phrase in the right group.',
      question: 'Which phrases tell us where or how they travelled, and which tell us when or how long?',
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
        incorrect: 'Ask: does this phrase answer “Where?” or “How?”, or does it answer “When?” or “How long?”',
      },
    },
    {
      id: 'abraham-a2-language-11-journey-language',
      type: 'choose-form',
      title: 'Decided To, Asked To',
      instructions: 'Choose the correct words to complete each sentence from Chapter 11.',
      question: 'Which verb form comes after “decided”, after a place, and after “asked + person”?',
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
      instructions: 'Each sentence has one mistake. Tap the wrong word or words, then choose the correction.',
      question: 'Can you correct the past verb and the preposition after “arrived”?',
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
    { id: 'abraham-a2-language-11-production', type: 'reflection', title: 'Say It: A Short Journey', instructions: 'Write or say four short A2 sentences using Chapter 11 patterns.', question: 'Can you describe a decision, route, travel detail and arrival?', correctAnswer: null, explanation: 'Use “decided to”, “from ... to ...”, a transport phrase, and “Finally, arrived at ...”.', feedback: { correct: 'Keep the journey clear and short.', incorrect: '' }, discussionPrompts: [{ question: 'State one decision.', mode: 'Individual' }, { question: 'Give the route.', mode: 'Individual' }, { question: 'Add transport or a time detail.', mode: 'Individual' }, { question: 'Finish with the arrival.', mode: 'Pair' }] }
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
      instructions: 'Choose the correct word or words to complete each sentence from Chapter 12.',
      question: 'Can you complete an instruction, a duty and a sentence about no help?',
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
    { id: 'abraham-a2-language-12-production', type: 'reflection', title: 'Say It: Need, Request and Action', instructions: 'Write or say four short A2 sentences using Chapter 12 patterns.', question: 'Can you describe what is missing, what someone needs to do, what they ask for and what they believe will happen?', correctAnswer: null, explanation: 'Use “no ...”, “had to ...”, “asked ... to ...”, and “will surely/will never ...”.', feedback: { correct: 'Keep the four ideas connected.', incorrect: '' }, discussionPrompts: [{ question: 'Say what is missing.', mode: 'Individual' }, { question: 'Add one “had to” sentence.', mode: 'Individual' }, { question: 'Make one request.', mode: 'Individual' }, { question: 'Finish with a future belief.', mode: 'Pair' }] }
  ]
};

export const abrahamA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  13: [
    {
      id: 'abraham-a2-language-13-background-event',
      type: 'drag-drop',
      title: 'Going On, or One Moment?',
      instructions: 'Put each part of Chapter 13 in the right group.',
      question: 'Which actions were going on at that time, and which happened at one moment?',
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
      instructions: 'Choose the correct word or words to complete each sentence from Chapter 13.',
      question: 'Can you complete a change and two reasons?',
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
      explanation: '“Flow” and “stop” are imperatives: base verbs that tell someone or something what to do. There is no subject before them.',
      feedback: {
        correct: 'Correct. “Flow slowly, stop!” tells the water what to do.',
        incorrect: 'Look at the verbs “Flow” and “stop”. Is there a question mark? Is there a past form?',
      },
    },
    { id: 'abraham-a2-language-13-production', type: 'reflection', title: 'Say It: A Sudden Change', instructions: 'Write or say four short A2 sentences using Chapter 13 patterns.', question: 'Can you describe what was happening, what suddenly changed, what happened next and why?', correctAnswer: null, explanation: 'Use “was/were + -ing”, “Suddenly ...”, “Then ...”, and “because ...”.', feedback: { correct: 'Make the sequence short and clear.', incorrect: '' }, discussionPrompts: [{ question: 'Give one background action.', mode: 'Individual' }, { question: 'Add a sudden event.', mode: 'Individual' }, { question: 'Move to the next action with “Then”.', mode: 'Individual' }, { question: 'Finish with a reason.', mode: 'Pair' }] }
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
      explanation: '“Will + base verb” can make a promise about the future. “For sure” means “certainly”, so Ishmael is very sure: he will help.',
      feedback: {
        correct: 'Correct. “I will help you for sure” is a promise.',
        incorrect: 'Look at “will” and “for sure”. Is Ishmael talking about the past or the future? Is he sure?',
      },
    },
    {
      id: 'abraham-a2-language-14-future-certainty',
      type: 'matching',
      title: 'Which Question Does It Answer?',
      instructions: 'Match each Chapter 14 phrase with the question it answers.',
      question: 'Read: “During that time, Abraham (pbuh) visited Mecca several times to see his family.” Which question does each part answer?',
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
      instructions: 'Complete the lines from Chapter 14 with words from the bank. Two words are not needed.',
      question: 'Which words connect the Ka’ba to today and to the Prophet Muhammad (pbuh)?',
      fillBlanksText: '[blank] Abraham (pbuh) built the Sacred Ka’ba, his mission was over. … Today, people [blank] visit the House of Allah to make Hajj. … After many years, Ishmael’s children had children. [blank] them was Muhammad, the Prophet of Islam (pbuh).',
      wordBank: ['After', 'still', 'One of', 'Before', 'yet'],
      correctAnswer: ['After', 'still', 'One of'],
      explanation: '“After + past event” shows what came first: first he built the Ka’ba, then his mission was over. “Still” shows that something continues today. “One of + plural” picks one person from a group.',
      feedback: {
        correct: 'Correct. You connected the past, today and the Prophet’s family.',
        incorrect: 'Read Chapter 14 again. When was the mission over: before or after the building? Which word shows that Hajj continues today?',
      },
    },
    { id: 'abraham-a2-language-14-production', type: 'reflection', title: 'Say It: A Shared Task', instructions: 'Write or say four short A2 sentences using Chapter 14 patterns.', question: 'Can you explain when a task happens, why it is done, who will help and what continues afterwards?', correctAnswer: null, explanation: 'Use one time expression, purpose with “to”, “will” for help, and “still” for continuation.', feedback: { correct: 'Keep the four ideas connected.', incorrect: '' }, discussionPrompts: [{ question: 'Begin with a time expression.', mode: 'Individual' }, { question: 'Explain one purpose with “to + verb”.', mode: 'Individual' }, { question: 'Add one “will” sentence.', mode: 'Pair' }, { question: 'Finish with something that “still” happens.', mode: 'Individual' }] }
  ]
};
