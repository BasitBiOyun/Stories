import type { Exercise } from '../../../../types';

/** Moses B1 Chapters 3–8 Language Focus: Notice → Build → Use, every quoted line taken from the English chapter. */

/** Moses B1 Chapter 3 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'moses-b1-language-3-guidance-sequence',
      type: 'multiple-choice',
      title: 'Why “Was Carried”?',
      instructions: 'Read the sentences from Chapter 3. Then choose the best answer.',
      question: '“There she put the basket in the water. The basket was carried away by the waters.” Why does the second sentence use “was carried” (a passive form)?',
      options: ['It shows that Moses’s mother carried the basket away.', 'It keeps the focus on the basket and on what happened to it.', 'It shows that the basket is still moving now.', 'It shows that the basket moved by itself.'],
      correctAnswer: 1,
      explanation: 'In a passive sentence (was/were + past participle), the thing that receives the action becomes the subject. The story is following the basket, so “The basket” comes first, and “by the waters” tells us what moved it. The mother’s part is over; now the basket is out of her hands.',
      feedback: {
        correct: 'Correct. The passive keeps our attention on the basket.',
        incorrect: 'Who puts the basket in the water, and what carries it away? Read the first paragraph of Chapter 3 again.',
      },
    },
    {
      id: 'moses-b1-language-3-trust-contrast',
      type: 'word-bank',
      title: 'Sadness, Trust and Time',
      instructions: 'Complete the lines from Chapter 3 with words from the bank. Two words are not needed.',
      question: 'Which words show contrast, add a second idea, link two actions at the same time and move the story on?',
      fillBlanksText: 'She was so sad, [blank] she knew that Allah was kinder to the baby Moses than she could be. Allah was their Lord and [blank] the Lord of the Nile. Allah told the waves to be kind [blank] carrying the baby. [blank], the waves brought the basket ashore near the Pharaoh’s palace.',
      wordBank: ['so', 'also', 'during', 'while', 'but', 'Soon'],
      correctAnswer: ['but', 'also', 'while', 'Soon'],
      explanation: '“But” shows contrast: she was sad, and at the same time she trusted Allah. “Also” adds a second, similar idea (their Lord, and the Lord of the Nile too). “While + -ing” links two things happening at the same time. “Soon” moves the story a short time forward. “During” is followed by a noun (during the journey), not by an -ing verb like this, and “so” would introduce a result.',
      feedback: {
        correct: 'Correct. You showed contrast, addition, time and sequence.',
        incorrect: 'Read the middle of Chapter 3 again: is her trust a contrast to her sadness or a result of it? Which word can come before “carrying”?',
      },
    },
    {
      id: 'moses-b1-language-3-description-and-decision',
      type: 'sentence-building',
      title: 'Adding Information About the Queen',
      instructions: 'Tap the pieces to rebuild this sentence from Chapter 3.',
      question: 'Where does the extra information about the queen go in the sentence?',
      sentenceChunks: ['The queen,', 'who was different from her husband,', 'was good, kind-hearted,', 'and believed in Allah.'],
      correctAnswer: null,
      explanation: 'A relative clause with “who” adds extra information about a person. It comes straight after the noun it describes and sits between commas: “The queen, who was different from her husband, was good …”. The main verb “was” comes after the second comma. This extra information prepares us for her decision: “I will take him to the palace and look after him.”',
      feedback: {
        correct: 'Well done. The “who” clause sits between commas, right after “The queen”.',
        incorrect: 'Start with the person, add the information about her husband, and then give the main verb. Check the end of Chapter 3.',
      },
    },
    {
      id: 'moses-b1-language-3-connected-production',
      type: 'reflection',
      title: 'Describe a Difficult Decision',
      instructions: 'Write or say five connected B1 sentences about a person who receives guidance, feels worried, and then makes a decision.',
      question: 'Can you combine instruction, sequence, contrast, background action, and a future decision in one short account?',
      correctAnswer: null,
      explanation: 'Keep one situation across all five sentences. Useful patterns include a direct imperative, a passive sentence, “but”, “while”, “when”, and “will” for a decision.',
      feedback: {
        correct: 'Keep the paragraph connected so each sentence develops the same situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give one direct instruction.', mode: 'Individual' },
        { question: 'Sentence 2 — Show what happened next, using a passive form if natural.', mode: 'Individual' },
        { question: 'Sentence 3 — Express worry or sadness, then contrast it with trust or confidence using “but”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add background with “while” or timing with “when”.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a clear decision using “will”.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 4 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-b1-language-4-instruction-prediction',
      type: 'matching',
      title: 'Words About Care and Belonging',
      instructions: 'Match each word or phrase from Chapter 4 with its meaning.',
      question: 'What do these words tell us about how Moses was looked after and where he felt he belonged?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'immediately', right: 'at once, without waiting' },
        { left: 'nearby', right: 'not far away' },
        { left: 'raised him', right: 'brought him up as a child' },
        { left: 'felt close to', right: 'had a strong connection with' },
        { left: 'originally', right: 'at the start, by birth' },
      ],
      correctAnswer: {
        immediately: 'at once, without waiting',
        nearby: 'not far away',
        'raised him': 'brought him up as a child',
        'felt close to': 'had a strong connection with',
        originally: 'at the start, by birth',
      },
      explanation: '“Immediately” shows how quickly the sister acted. “Nearby” tells the Queen that the woman lives close. To “raise” a child is to look after them until they grow up. To “feel close to” people is to feel connected to them. “Originally” refers to where someone comes from at the start: Moses was not born into the palace family.',
      feedback: {
        correct: 'Correct. These words show care, speed and belonging in Chapter 4.',
        incorrect: 'Find each word in Chapter 4 and use the sentence around it to work out its meaning.',
      },
    },
    {
      id: 'moses-b1-language-4-purpose-result-reason',
      type: 'word-bank',
      title: 'Purpose or Reason?',
      instructions: 'Complete the lines from Chapter 4 with words from the bank. Two words are not needed.',
      question: 'Which words give the purpose of an action, and which words give a reason?',
      fillBlanksText: 'And she brought her mother [blank] be Moses’s nurse in the palace. … People always remember her [blank] her goodness and courage. … Young Moses felt close to the Children of Israel [blank] he was originally not from a family of the palace and his mother was one of the Children of Israel.',
      wordBank: ['because', 'for', 'to', 'so', 'because of'],
      correctAnswer: ['to', 'because of', 'because'],
      explanation: '“To + base verb” gives the purpose of an action: why she brought her mother. “Because of” is followed by a noun phrase (her goodness and courage). “Because” is followed by a full clause with a subject and a verb (he was originally not …). “For be” is not possible, and “so” would introduce a result, not a reason.',
      feedback: {
        correct: 'Correct. You separated purpose (to) from reason (because / because of).',
        incorrect: 'Look at what comes after each gap: a base verb, a noun phrase or a full clause? Then check Chapter 4.',
      },
    },
    {
      id: 'moses-b1-language-4-growth-identity',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence from Chapter 4 has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct the language of prediction, change and personal quality?',
      errorItems: [
        {
          sentence: 'She will is a good nurse for the baby.',
          error: 'will is',
          options: ['will being', 'will be', 'is will'],
          answer: 1,
        },
        {
          sentence: 'Years passed and Moses become a strong young man.',
          error: 'become',
          options: ['became', 'becomed', 'was become'],
          answer: 0,
        },
        {
          sentence: 'He was always willing helping the weak people.',
          error: 'willing helping',
          options: ['willing help', 'willing for help', 'willing to help'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'After “will”, use the base verb: “will be”. The sister is confident about the future. “Became” is the past of “become” and shows a change into a new state (a strong young man). “Willing” is followed by “to + base verb”: willing to help. With “always”, it describes a lasting quality of his character.',
      feedback: {
        correct: 'Well done. You corrected the prediction, the change and the personal quality.',
        incorrect: 'Compare each sentence with Chapter 4: the sister’s words to the Queen, and the last paragraph about Moses as a young man.',
      },
    },
    {
      id: 'moses-b1-language-4-connected-production',
      type: 'reflection',
      title: 'Explain How a Person Grows into a Role',
      instructions: 'Write or say five connected B1 sentences about a person who receives help, grows over time, and develops a clear sense of responsibility or identity.',
      question: 'Can you connect instruction, purpose, reason, change over time, and a continuing personal quality?',
      correctAnswer: null,
      explanation: 'Keep one situation across all five sentences. Useful patterns include an imperative, “to + verb” for purpose, “because/because of” for reason, “became” for change, and “always” for a continuing tendency.',
      feedback: {
        correct: 'Keep the account connected so each sentence develops the same person and situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give one direct instruction or piece of guidance.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain an action and its purpose with “to + verb”.', mode: 'Individual' },
        { question: 'Sentence 3 — Give one reason with “because” or “because of”.', mode: 'Individual' },
        { question: 'Sentence 4 — Show a later change using “became” or another natural change expression.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a continuing quality using “always” or another frequency expression.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 5 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'moses-b1-language-5-background-interruption',
      type: 'true-false',
      title: 'Which Action Was in Progress?',
      instructions: 'Read the sentence from Chapter 5. Is the statement true or false?',
      question: '“One day, while Moses was walking in the bazaar, he saw two men fighting.” This means that Moses finished his walk first, and after that he saw the two men.',
      correctAnswer: false,
      explanation: '“While + past continuous” (was walking) describes a longer action that was already in progress. The past simple (saw) is a shorter event that happened in the middle of it. So Moses was still walking when he saw the fight. After that, “Suddenly” brings in a new, unexpected action: the man calls out for help.',
      feedback: {
        correct: 'Correct. The walking was still in progress when he saw the fight.',
        incorrect: 'Look at “while … was walking”. Was the walk finished, or still happening, when he saw the men? Check the first sentence of Chapter 5.',
      },
    },
    {
      id: 'moses-b1-language-5-description-inference',
      type: 'choose-form',
      title: 'The Next Day',
      instructions: 'Choose the correct form to complete each sentence from Chapter 5.',
      question: 'Which forms report a single event, identify a person and introduce Moses’s conclusion?',
      formChoices: [
        {
          sentence: 'The next day, Moses was again in the bazaar where he [choice] two men fighting.',
          options: ['was seeing', 'saw', 'sees'],
          answer: 1,
        },
        {
          sentence: 'One of them was the same man from the Children of Israel [choice] Moses helped the day before.',
          options: ['which', 'where', 'who'],
          answer: 2,
        },
        {
          sentence: 'Moses understood [choice] the Israelite was a quarrelsome man, not a peaceable man.',
          options: ['that', 'what', 'because'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'The past simple “saw” reports a single finished event; “see” is not normally used in the continuous with this meaning. “Who” begins a relative clause about a person: the same man who Moses helped the day before. “Understood that …” introduces a conclusion that Moses reached from what he saw: the man was fighting again.',
      feedback: {
        correct: 'Correct. You reported the event, identified the man and introduced Moses’s conclusion.',
        incorrect: 'Read the second half of Chapter 5 again. Is the man a person or a thing? What comes after “understood” when a full clause follows?',
      },
    },
    {
      id: 'moses-b1-language-5-voice-intention',
      type: 'matching',
      title: 'What Are the Speakers Doing?',
      instructions: 'Match each line of direct speech from Chapter 5 with what the speaker is doing.',
      question: 'How do the short spoken lines ask, admit and accuse?',
      matchingHeadings: { left: 'From the chapter', right: 'What the speaker is doing' },
      matchingPairs: [
        { left: 'Help me!', right: 'calls urgently for support' },
        { left: 'Forgive me!', right: 'asks to be pardoned' },
        { left: 'I didn’t do it on purpose.', right: 'says that the harm was not intended' },
        { left: 'I have wronged myself.', right: 'admits having done something wrong' },
        { left: 'Are you going to kill me too?', right: 'accuses someone by asking a question' },
      ],
      correctAnswer: {
        'Help me!': 'calls urgently for support',
        'Forgive me!': 'asks to be pardoned',
        'I didn’t do it on purpose.': 'says that the harm was not intended',
        'I have wronged myself.': 'admits having done something wrong',
        'Are you going to kill me too?': 'accuses someone by asking a question',
      },
      explanation: 'Short imperatives (Help me! Forgive me!) make urgent requests. “On purpose” means deliberately, so “I didn’t do it on purpose” means it was an accident. “I have wronged myself” uses the present perfect: a past action whose result matters now, so Moses admits his mistake. “Are you going to …?” asks about a next action, but here it is an accusation, not a real question.',
      feedback: {
        correct: 'Correct. You recognised requests, an admission and an accusation.',
        incorrect: 'Read Moses’s prayer and the man’s last words in Chapter 5 again. Who is asking for help, who is sorry, and who is blaming someone?',
      },
    },
    {
      id: 'moses-b1-language-5-connected-production',
      type: 'reflection',
      title: 'Tell a Short Incident Clearly',
      instructions: 'Write or say five connected B1 sentences about a tense public situation. Do not retell the chapter.',
      question: 'Can you combine background, sudden action, identification, inference, and a future-oriented question in one coherent mini-narrative?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include “while + past continuous”, “suddenly”, a relative clause with “who”, “understood/realized that”, and a question with “going to”.',
      feedback: {
        correct: 'Keep the five sentences connected and make each one develop the same event.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Set the background with “while + past continuous”.', mode: 'Individual' },
        { question: 'Sentence 2 — Introduce an unexpected event with “suddenly”.', mode: 'Individual' },
        { question: 'Sentence 3 — Identify one person with a short “who” clause.', mode: 'Individual' },
        { question: 'Sentence 4 — Show what someone understood or realized from the situation.', mode: 'Pair' },
        { question: 'Sentence 5 — End with a natural future-oriented question using “going to”.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 6 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'moses-b1-language-6-warning-action',
      type: 'multiple-choice',
      title: 'Now and Next',
      instructions: 'Read the friend’s warning from Chapter 6. Then choose the best answer.',
      question: 'A friend says to Moses, “The Pharaoh’s soldiers are looking for you. … Now they are going to catch you.” Why does the friend use “are going to”?',
      options: ['The soldiers have already caught Moses.', 'The soldiers catch people like Moses every day.', 'The friend is promising to help the soldiers.', 'He expects it to happen soon, because the soldiers are already searching.'],
      correctAnswer: 3,
      explanation: '“Be going to” makes a prediction based on what is happening now. The evidence is in the present continuous: “are looking for you” – the search is already in progress. That is why the friend then gives an urgent imperative: “Run away from the city.”',
      feedback: {
        correct: 'Correct. The friend predicts the next step from what is already happening.',
        incorrect: 'Look at the sentence before “are going to”: what are the soldiers doing right now? Check the first paragraph of Chapter 6.',
      },
    },
    {
      id: 'moses-b1-language-6-sequence-guidance',
      type: 'sequencing',
      title: 'From Egypt to Midian',
      instructions: 'Put the parts of Chapter 6 in the right order.',
      question: 'How does the chapter move from a reason, through a journey, to a new place?',
      sequencingItems: [
        { id: '1', text: 'Moses knew that the punishment for killing an Egyptian was death.' },
        { id: '2', text: 'Moses escaped from the soldiers.' },
        { id: '3', text: 'He left Egypt and travelled for a long time.' },
        { id: '4', text: 'After many days, he reached the land of Midian (Medyen) …' },
        { id: '5', text: 'Moses was tired and thirsty. He was looking for water.' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: '“Knew that …” gives the reason for his decision. Then a chain of past simple verbs (escaped, left, travelled) moves the journey forward. “After many days” marks a new point after a long time. In the new place, the past continuous “was looking for” describes what he was doing when the next scene begins.',
      feedback: {
        correct: 'Correct. You followed the reason, the journey and the arrival.',
        incorrect: 'Start with what Moses knew. Which phrase shows that a long time has passed? Check the middle of Chapter 6.',
      },
    },
    {
      id: 'moses-b1-language-6-well-scene',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence from Chapter 6 has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a place clause, a person clause and a question?',
      errorItems: [
        {
          sentence: 'Soon, he found a well which many men gathered.',
          error: 'which',
          options: ['where', 'who', 'what'],
          answer: 0,
        },
        {
          sentence: 'These were shepherds which were watering their sheep and cattle.',
          error: 'which',
          options: ['where', 'whose', 'who'],
          answer: 2,
        },
        {
          sentence: 'Moses asked the girls, “Why you are sitting far away from the spring?”',
          error: 'you are',
          options: ['do you', 'are you', 'you were'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: '“Where” begins a relative clause about a place: a well where many men gathered. “Who” is used for people: shepherds who were watering their sheep. In a question with a question word, the auxiliary comes before the subject: “Why are you sitting …?” Moses uses the present continuous because he is asking about what he can see at that moment.',
      feedback: {
        correct: 'Well done. You corrected the place clause, the person clause and the question.',
        incorrect: 'Compare each sentence with the last paragraph of Chapter 6. Is the clause about a place or about people? Where does “are” go in a question?',
      },
    },
    {
      id: 'moses-b1-language-6-connected-production',
      type: 'reflection',
      title: 'Write a Warning-to-New-Scene Mini-Narrative',
      instructions: 'Write or say five connected B1 sentences about someone who must leave a place quickly and arrives somewhere unfamiliar. Do not retell the chapter.',
      question: 'Can you connect warning, expected consequence, urgent advice, time movement and a new-scene question naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include present continuous for a current threat, “be going to” for an expected consequence, an imperative, “after + time”, and a “Why are you ...?” question about a visible situation.',
      feedback: {
        correct: 'Keep the five sentences connected and make the final scene follow naturally from the warning.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a danger already happening with present continuous.', mode: 'Individual' },
        { question: 'Sentence 2 — State an expected next consequence with “be going to”.', mode: 'Individual' },
        { question: 'Sentence 3 — Give one urgent command or piece of advice.', mode: 'Individual' },
        { question: 'Sentence 4 — Move the narrative forward with “After ...” and describe arrival in a new place.', mode: 'Pair' },
        { question: 'Sentence 5 — Ask a natural “Why are you ...?” question about something visible there.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 7 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'moses-b1-language-7-obligation-patience',
      type: 'multiple-choice',
      title: 'Necessary or Not?',
      instructions: 'Read the sisters’ words from Chapter 7. Then choose the best meaning.',
      question: 'The sisters tell their father, “We did not have to wait …” What does “did not have to wait” mean?',
      options: ['They were not allowed to wait.', 'Waiting was not necessary that day.', 'They waited, but only for a short time.', 'They did not want to wait, so they left.'],
      correctAnswer: 1,
      explanation: '“Have to” shows that something is necessary. “Did not have to” means it was not necessary – there was no need – because Moses had already watered their sheep. It does not mean “not allowed”; for that meaning we use “were not allowed to” or “must not”.',
      feedback: { correct: 'Correct. The usual waiting was not necessary that day.', incorrect: 'Why did the sisters come home early? Read what they tell their father in Chapter 7.' },
    },
    {
      id: 'moses-b1-language-7-action-result',
      type: 'word-bank',
      title: 'Why the Sisters Wait',
      instructions: 'Complete the sisters’ explanation from Chapter 7 with words from the bank. Three words are not needed.',
      question: 'Which words show inability, a result and the end point of waiting?',
      fillBlanksText: 'Our father is very old. He [blank] come with us. There are no young men in our house to help us with the animals. [blank], we have to take the sheep to the water ourselves. We have to wait our turn. We have to be patient [blank] the other sheepmen go away.',
      wordBank: ['must not', 'cannot', 'Because', 'until', 'So', 'during'],
      correctAnswer: ['cannot', 'So', 'until'],
      explanation: '“Cannot” shows that the father is not able to come. “So” introduces the result: nobody can help, so the girls have to do the work themselves. “Have to” shows necessity. “Until” gives the end point of the waiting. “Must not” would mean he is not allowed to come, and “when” would not show how long they wait.',
      feedback: {
        correct: 'Correct. You linked the problem, its result and the end of the waiting.',
        incorrect: 'Read the first paragraph of Chapter 7 again. Is the father not able to come, or not allowed to come? How long do the girls wait?',
      },
    },
    {
      id: 'moses-b1-language-7-early-return',
      type: 'transformation',
      title: 'Say It Another Way',
      instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 7. Type the missing word or words.',
      question: 'How can we turn a result into a reason, and say “there are no …” in another way?',
      transformItems: [
        {
          source: 'Prophet Şuayb (pbuh) was very old. That’s why he had to send the girls alone.',
          frame: 'Prophet Şuayb (pbuh) had to send the girls alone [blank] he was very old.',
          answers: ['because', 'as', 'since'],
        },
        {
          source: 'There are no young men in our house to help us with the animals.',
          frame: 'We do not have [blank] young men in our house to help us with the animals.',
          answers: ['any'],
        },
      ],
      correctAnswer: null,
      explanation: '“That’s why” introduces a result; “because” introduces a reason, so the order of the ideas changes. “There are no + noun” and “do not have any + noun” both say that something is missing. Here the missing help is the reason why the sisters have to do the work themselves.',
      feedback: {
        correct: 'Well done. You turned the result into a reason and described the missing help in another way.',
        incorrect: 'Which idea is the reason: Şuayb’s age or sending the girls alone? Which word goes with “do not have” before a plural noun?',
      },
    },
    {
      id: 'moses-b1-language-7-connected-production',
      type: 'reflection',
      title: 'Explain a Routine That Changes',
      instructions: 'Write or say five connected B1 sentences about people who usually have to do something difficult but receive unexpected help one day. Do not retell the chapter.',
      question: 'Can you connect limitation, obligation, waiting, help and a changed result naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include “cannot”, “have to”, “until”, a simple-past action that changes the situation, and “did not have to” for an obligation that disappears.',
      feedback: {
        correct: 'Keep the five sentences connected and make the changed result follow naturally from the help.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State one limitation or lack of support.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain what people therefore have to do.', mode: 'Individual' },
        { question: 'Sentence 3 — Add what they normally wait for using “until”.', mode: 'Individual' },
        { question: 'Sentence 4 — Describe one unexpected act of help in the simple past.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain what they did not have to do because the situation changed.', mode: 'Pair' },
      ],
    },
  ],
};

/** Moses B1 Chapter 8 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'moses-b1-language-8-reason-choice',
      type: 'drag-drop',
      title: 'Background or Main Event?',
      instructions: 'Read these parts of the last paragraph of Chapter 8. Do they describe the background (the situation) or a main event that moves the story on? Put each one in the right group.',
      question: 'How does the chapter build the winter scene before something new happens?',
      dragDropGroups: [
        {
          group: 'Background (the situation)',
          items: ['It was winter.', 'It was getting dark and cold.', 'They were crossing a valley between mountains.'],
        },
        {
          group: 'Main event (what happened)',
          items: ['He took his family and started to travel towards Egypt.', 'Suddenly, Moses saw a fire on the hillside.', 'He said to his family, “Wait here. …”'],
        },
      ],
      correctAnswer: {
        'Background (the situation)': ['It was winter.', 'It was getting dark and cold.', 'They were crossing a valley between mountains.'],
        'Main event (what happened)': ['He took his family and started to travel towards Egypt.', 'Suddenly, Moses saw a fire on the hillside.', 'He said to his family, “Wait here. …”'],
      },
      explanation: 'Background sentences describe the situation: “was” + a noun or adjective (It was winter), or the past continuous for something in progress or changing (was getting dark, were crossing). Main events use the past simple (took, started, saw, said). “Suddenly” marks an event that breaks into the background.',
      feedback: {
        correct: 'Correct. You separated the scene from the actions that move the story on.',
        incorrect: 'Look at the verbs: “was/were + -ing” or “was + adjective” describes the scene; the past simple tells what happened. Check the last paragraph of Chapter 8.',
      },
    },
    {
      id: 'moses-b1-language-8-duration-decision',
      type: 'matching',
      title: 'Words from Life in Midian',
      instructions: 'Match each word or phrase from Chapter 8 with its meaning.',
      question: 'What do these words tell us about Moses’s situation in Midian and on the journey?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'a stranger', right: 'a person from another place' },
        { left: 'urgently', right: 'very quickly, because it could not wait' },
        { left: 'with patience', right: 'calmly, without complaining' },
        { left: 'hillside', right: 'the sloping side of a mountain' },
        { left: 'burning sticks', right: 'pieces of wood that are on fire' },
      ],
      correctAnswer: {
        'a stranger': 'a person from another place',
        urgently: 'very quickly, because it could not wait',
        'with patience': 'calmly, without complaining',
        hillside: 'the sloping side of a mountain',
        'burning sticks': 'pieces of wood that are on fire',
      },
      explanation: '“A stranger” and “urgently” explain why Moses accepted the job: he was new in Midian and needed work and a home quickly. “With patience” describes how the family lived. “Hillside” and “burning sticks” build the winter scene and Moses’s plan to get warm.',
      feedback: {
        correct: 'Correct. These words explain Moses’s decision and build the scene.',
        incorrect: 'Find each word in Chapter 8 and use the sentence around it to work out its meaning.',
      },
    },
    {
      id: 'moses-b1-language-8-background-purpose',
      type: 'transformation',
      title: 'Same Meaning, Different Structure',
      instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 8. Type the missing word or words.',
      question: 'How can we express time, result and purpose in another way?',
      transformItems: [
        {
          source: 'After living in Midian for about ten years, with the guidance of Allah, Moses decided to go back to Egypt.',
          frame: 'After Moses [blank] in Midian for about ten years, he decided to go back to Egypt.',
          answers: ['had lived', 'lived', 'had been living', 'had stayed', 'stayed'],
        },
        {
          source: 'He accepted the offer, because he was a stranger in Midian and he urgently needed a job and a house.',
          frame: 'He was a stranger in Midian and he urgently needed a job and a house, [blank] he accepted the offer.',
          answers: ['so', 'and so', 'that’s why', 'that is why', 'which is why'],
        },
        {
          source: 'Let me go and take some burning sticks from the fire to get warm.',
          frame: 'Let me go and take some burning sticks from the fire so that we [blank] warm.',
          answers: ['can get', 'could get', 'will get', 'can be', 'will be', 'can keep', 'can stay'],
        },
      ],
      correctAnswer: null,
      explanation: '“After + -ing” (After living …) is a short way to say “After he had lived …”. “Because” introduces a reason; “so” introduces a result, so the order of the ideas changes. “To + base verb” shows purpose (to get warm); “so that + subject + can/will” says the same thing with a full clause.',
      feedback: {
        correct: 'Well done. You expressed time, result and purpose with new structures.',
        incorrect: 'Check the verb form after “After Moses …”, think about whether the missing word introduces a reason or a result, and remember that “so that” needs a subject and a verb such as “can”.',
      },
    },
    {
      id: 'moses-b1-language-8-connected-production',
      type: 'reflection',
      title: 'Explain a Change of Plan',
      instructions: 'Write or say five connected B1 sentences about someone who spends a long period in one place, decides to leave, and then changes action because of a sudden situation. Do not retell the chapter.',
      question: 'Can you connect duration, decision, background, a sudden event and purpose naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful language includes “After living/working...”, “decided to...”, a past-progressive background sentence, “Suddenly...”, and “to + verb” for purpose.',
      feedback: {
        correct: 'Keep the five sentences connected so the sudden event naturally changes what the person does next.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a long period using “After + -ing” or another duration phrase.', mode: 'Individual' },
        { question: 'Sentence 2 — State a new decision using “decided to”.', mode: 'Individual' },
        { question: 'Sentence 3 — Build the background with a past-progressive form.', mode: 'Individual' },
        { question: 'Sentence 4 — Introduce an unexpected event with “Suddenly”.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain the next action and its purpose with “to + verb”.', mode: 'Pair' },
      ],
    },
  ],
};
