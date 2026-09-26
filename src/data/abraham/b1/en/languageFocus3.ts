import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'abraham-b1-language-9-contrast-result',
      type: 'multiple-choice',
      title: 'What Does “Yet” Show?',
      instructions: 'Read the sentence from Chapter 9. Then choose what “yet” shows.',
      question: '“People felt embarrassed by the miracle, yet their anger and arrogance remained unchanged.” What does “yet” show here?',
      options: [
        'The second idea is surprising after the first: they were embarrassed, but they did not change.',
        'The second idea is the result of the first.',
        'The second idea has not happened until now.',
        'The second idea happened before the first.',
      ],
      correctAnswer: 0,
      explanation: 'Between two clauses, “yet” means “but” and shows an unexpected contrast: after such a miracle, we expect people to change, but their anger stayed the same. “However” does the same job in the next sentence: “Prophet Abraham (pbuh) tried every way …; however, their rage didn’t calm down.” This is different from “not … yet” (= not until now).',
      feedback: {
        correct: 'Correct. “Yet” joins two ideas that do not fit together as we expect.',
        incorrect: 'Ask: after a miracle, what would we expect people to do? Does the second part of the sentence follow that expectation or go against it?',
      },
    },
    {
      id: 'abraham-b1-language-9-reported-orders',
      type: 'error-correction',
      title: 'Order, Let and Make',
      instructions: 'Each sentence has one mistake. Tap the wrong word or words, then choose the correction.',
      question: 'Which verb form follows order, let and make + person or thing?',
      errorItems: [
        {
          sentence: 'He ordered his guards bring two slaves and told them to be put to death.',
          error: 'bring',
          options: ['to bring', 'bringing', 'brought'],
          answer: 0,
        },
        {
          sentence: '… then Nimrod said, “I let the second slave to live; let him go.”',
          error: 'to live',
          options: ['live', 'living', 'lived'],
          answer: 0,
        },
        {
          sentence: '“Allah makes the sun rise in the east. Can you make the sun to rise from the west?”',
          error: 'to rise',
          options: ['rise', 'rising', 'rises'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'Order and tell use person + to + verb: “ordered his guards to bring”. Let and make use person/thing + base verb with no “to”: “let the second slave live”, “make the sun rise”. Nimrod uses “let” to show his power to allow; Abraham uses “make” to test that claim.',
      feedback: {
        correct: 'Well done. You used “to” after order, and the base verb after let and make.',
        incorrect: 'Remember: order + person + to + verb, but let/make + person + verb without “to”. Check Nimrod’s and Abraham’s words in Chapter 9.',
      },
    },
    {
      id: 'abraham-b1-language-9-ability-challenge',
      type: 'transformation',
      title: 'Inability and Exclusive Power',
      instructions: 'Complete each new sentence so that it has the same meaning as the sentence from Chapter 9.',
      question: 'How else can we say “was unable to” and “only …”?',
      transformItems: [
        {
          source: 'Naturally, Nimrod was unable to do this; only Allah has the power to do that.',
          frame: 'Naturally, Nimrod [blank] this.',
          answers: ['could not do', "couldn't do", 'was not able to do', "wasn't able to do"],
        },
        {
          source: '… only Allah has the power to do that.',
          frame: 'Allah is the only one [blank] the power to do that.',
          answers: ['who has', 'that has', 'with'],
        },
      ],
      correctAnswer: null,
      explanation: '“Was unable to + verb” = “could not” or “was not able to”: it states inability in the past, after Nimrod’s claim “I can give life and death”. “Only Allah has …” limits the power to one source; “Allah is the only one who has …” says the same thing with a relative clause.',
      feedback: {
        correct: 'Well done. You expressed the same inability and the same limit in a new way.',
        incorrect: 'Item 1: use could not or was not able to + do. Item 2: after “the only one”, add who/that + has.',
      },
    },
    { id: 'abraham-b1-language-9-connected-production', type: 'reflection', title: 'Challenge a Claim with Evidence', instructions: 'Write or say four connected B1 sentences about a new situation in which someone makes a claim and another person tests it. Do not retell Chapter 9.', question: 'Can you connect a claim, a reason or decision, a challenge, and the final result?', correctAnswer: null, explanation: 'A strong response can use can/can’t, so, however/yet, order/tell/let if natural, and a final result expression such as was unable to or this made....', feedback: { correct: 'Keep the four sentences connected as one short exchange or narrative.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — State a claim using can or another ability expression.', mode: 'Individual' }, { question: 'Sentence 2 — Explain why someone decides to test the claim using so, because, or another natural connector.', mode: 'Individual' }, { question: 'Sentence 3 — Write the challenge as a direct question or instruction.', mode: 'Individual' }, { question: 'Sentence 4 — Report the outcome using was able/unable to, however/yet, or this made....', mode: 'Pair' }] },
  ],
};

export const abrahamB1LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'abraham-b1-language-10-realization-decision',
      type: 'drag-drop',
      title: 'Why? or What Was He Told?',
      instructions: 'All of these parts of Chapter 10 use “to + verb” or “so that”. Sort them: does the part explain why someone acts, or what someone is told to do?',
      question: 'Does “to + verb” always show purpose?',
      dragDropGroups: [
        {
          group: 'Purpose: why someone acts',
          items: [
            '… travel to other lands to spread Allah’s message',
            '… so that his child could teach people about Allah',
          ],
        },
        {
          group: 'Instruction: what someone is told to do',
          items: [
            'Allah commanded Abraham (pbuh) to travel with his wife …',
            '… told his wife to stay near one of the hills',
          ],
        },
      ],
      correctAnswer: {
        'Purpose: why someone acts': [
          '… travel to other lands to spread Allah’s message',
          '… so that his child could teach people about Allah',
        ],
        'Instruction: what someone is told to do': [
          'Allah commanded Abraham (pbuh) to travel with his wife …',
          '… told his wife to stay near one of the hills',
        ],
      },
      explanation: '“To + verb” has two different jobs here. After an action, it can give the purpose (travel … to spread Allah’s message = in order to spread it). After command/tell + person, it gives the instruction (commanded Abraham to travel, told his wife to stay). “So that + could” also gives a purpose, with its own subject: so that his child could teach people.',
      feedback: {
        correct: 'Correct. You separated purpose from instruction, even though both use “to”.',
        incorrect: 'Look before “to”: is there a verb like command or tell + a person? Then it is an instruction. Can you add “in order” before “to”? Then it is a purpose.',
      },
    },
    {
      id: 'abraham-b1-language-10-purpose',
      type: 'choose-form',
      title: 'Decision and Journey',
      instructions: 'Choose the correct word or form to complete each sentence from Chapter 10.',
      question: 'Which forms show a decision and the stages of a long journey?',
      formChoices: [
        {
          sentence: 'Therefore, he decided [choice] Babylon and travel to other lands to spread Allah’s message.',
          options: ['to leave', 'leaving', 'for leaving'],
          answer: 0,
        },
        {
          sentence: '[choice] his journey, Abraham (pbuh) married Hagar …',
          options: ['During', 'While', 'Meanwhile'],
          answer: 0,
        },
        {
          sentence: 'They all travelled for a long time. [choice], they reached a lonely valley near two small hills, Safa and Marwa.',
          options: ['Finally', 'At first', 'Firstly'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Decide” is followed by to + verb (decided to leave … and travel). “During + noun” places an event inside a longer period (during his journey); “while” needs a clause (while he was travelling). “Finally” marks the end point after a long process; “at first” and “firstly” introduce a beginning.',
      feedback: {
        correct: 'Correct. You chose the forms for a decision, a time period and an end point.',
        incorrect: 'Check what follows each gap: a verb, a noun (his journey), or a comma after a long time of travel. Then read the second and third paragraphs of Chapter 10.',
      },
    },
    {
      id: 'abraham-b1-language-10-sequencing-movement',
      type: 'transformation',
      title: 'From Thought to Report',
      instructions: 'Change the reported sentence into Abraham’s own thought.',
      question: 'How does “was going to” change when we use the speaker’s own words?',
      transformItems: [
        {
          source: 'Abraham (pbuh) realized that nobody was going to listen to his message.',
          frame: 'Abraham thought, “Nobody [blank] to my message.”',
          answers: ['is going to listen', 'will listen', 'is ever going to listen', 'will ever listen'],
        },
      ],
      correctAnswer: null,
      explanation: '“Realized that … was going to” reports a future prediction from a past moment. In Abraham’s own words, the prediction is in the present: “Nobody is going to listen to my message.” This realization leads to a result: “Therefore, he decided to leave Babylon.”',
      feedback: {
        correct: 'Well done. You changed the reported prediction back into direct thought.',
        incorrect: 'In direct words, “was going to” becomes “is going to”, and “his message” becomes “my message”.',
      },
    },
    { id: 'abraham-b1-language-10-connected-production', type: 'reflection', title: 'Explain a Purposeful Journey', instructions: 'Write or say five connected B1 sentences about a new journey or change of place. Do not retell Chapter 10.', question: 'Can you connect a realization, a decision, a purpose, events during the journey, and an endpoint?', correctAnswer: null, explanation: 'A strong response can use realized that, therefore/so, decided to, to + verb or so that, during, soon, one day, and finally.', feedback: { correct: 'Keep the sentences connected as one short narrative, not five unrelated statements.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — State what the person realizes about the situation.', mode: 'Individual' }, { question: 'Sentence 2 — Give the decision that follows, using therefore or so if natural.', mode: 'Individual' }, { question: 'Sentence 3 — Explain the purpose with to + verb or so that.', mode: 'Individual' }, { question: 'Sentence 4 — Add one event that happens during the journey.', mode: 'Individual' }, { question: 'Sentence 5 — Mark the endpoint with finally or another natural sequencing expression.', mode: 'Pair' }] },
  ],
};

export const abrahamB1LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'abraham-b1-language-11-purpose-assurance',
      type: 'matching',
      title: 'Words for Hagar’s Struggle',
      instructions: 'Match each phrase from Chapter 11 with its meaning.',
      question: 'What do these phrases tell us about Hagar’s situation and actions?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'their food and water ran out', right: 'there was none left' },
        { left: 'Hagar needed to feed her child', right: 'it was necessary for her' },
        { left: 'started running', right: 'began to move very fast' },
        { left: 'looking for water and food', right: 'trying to find' },
        { left: 'She fearlessly said', right: 'without being afraid' },
      ],
      correctAnswer: {
        'their food and water ran out': 'there was none left',
        'Hagar needed to feed her child': 'it was necessary for her',
        'started running': 'began to move very fast',
        'looking for water and food': 'trying to find',
        'She fearlessly said': 'without being afraid',
      },
      explanation: '“Run out” is a phrasal verb: when a supply runs out, it is all used up. “Need to + verb” shows necessity. “Start + -ing” and “begin to + verb” both mark the beginning of an action. “Look for” means “try to find”. The suffix -less means “without”, so “fearlessly” = without fear.',
      feedback: {
        correct: 'Correct. You matched each phrase with its meaning in the chapter.',
        incorrect: 'Read the second and third paragraphs of Chapter 11 again and replace each phrase with your answer. Does the sentence still make sense?',
      },
    },
    {
      id: 'abraham-b1-language-11-need-process',
      type: 'choose-form',
      title: 'Prayer and Promise',
      instructions: 'Choose the correct form to complete each sentence from Chapter 11.',
      question: 'Which forms express a hoped-for purpose and strong confidence about the future?',
      formChoices: [
        {
          sentence: '“O Allah! Give them blessings so that they [choice] give thanks.”',
          options: ['may', 'must', 'are'],
          answer: 0,
        },
        {
          sentence: 'She fearlessly said to Abraham (pbuh) when he left them in this desert valley, “Allah will never let us [choice] …”',
          options: ['die', 'to die', 'dying'],
          answer: 0,
        },
        {
          sentence: '“… He will [choice] protect us.”',
          options: ['surely', 'sure', 'be sure'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“So that + subject + may/can/will” states the purpose or hoped-for result of an action: blessings so that they may give thanks. “Let + person + base verb” has no “to”: never let us die. “Will never” and “will surely” show strong confidence about the future; “surely” is an adverb, so it goes before the main verb.',
      feedback: {
        correct: 'Correct. You chose the forms for purpose, permission and certainty.',
        incorrect: 'Check the first two paragraphs of Chapter 11: Abraham’s prayer and Hagar’s words. Remember: let + verb without “to”, and an adverb (-ly) before the verb.',
      },
    },
    {
      id: 'abraham-b1-language-11-ritual-description',
      type: 'word-bank',
      title: 'Explaining a Practice',
      instructions: 'Complete the lines from Chapter 11 with words from the bank. Two words are not needed.',
      question: 'Which phrases name a practice, give a rule, show order and say what it includes?',
      fillBlanksText: 'This effort by Hagar [blank] “sa’y” in Hajj and Umrah rituals. Even today, Muslims [blank] complete the ritual “sa’y” [blank] performing the tawaf during Hajj or Umrah. This ritual [blank] walking back and forth between the hills of Safa and Marwa.',
      wordBank: ['is known as', 'must', 'after', 'involves', 'knows as', 'must to'],
      correctAnswer: ['is known as', 'must', 'after', 'involves'],
      explanation: 'Explanations of a practice often use: the passive “is known as” to give its name; “must + base verb” (no “to”) for a rule; “after + -ing” to show which step comes first; and “involves + -ing” to say what the practice includes.',
      feedback: {
        correct: 'Correct. You used the language of explaining a practice.',
        incorrect: 'Check the end of Chapter 11. The name is given with a passive form, and “must” is never followed by “to”.',
      },
    },
    { id: 'abraham-b1-language-11-connected-production', type: 'reflection', title: 'Explain a Process Clearly', instructions: 'Write or say five connected B1 sentences about a non-story routine, practice, or difficult situation. Do not retell Chapter 11.', question: 'Can you connect a purpose, a need, a developing action, an obligation, and a short explanation of the process?', correctAnswer: null, explanation: 'A strong response can use so that, need to, start + -ing, look for, must, after + -ing, is known as, or involves + -ing when natural.', feedback: { correct: 'Keep the five sentences connected as one short explanation rather than isolated examples.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — State the situation or goal.', mode: 'Individual' }, { question: 'Sentence 2 — Express a need or purpose with need to or so that.', mode: 'Individual' }, { question: 'Sentence 3 — Show the beginning of an action with start + -ing or another natural structure.', mode: 'Individual' }, { question: 'Sentence 4 — Add one rule or obligation with must if appropriate.', mode: 'Individual' }, { question: 'Sentence 5 — Explain what the process includes or what happens after another step.', mode: 'Pair' }] },
  ],
};

export const abrahamB1LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'abraham-b1-language-12-background-event',
      type: 'multiple-choice',
      title: 'Background and Sudden Event',
      instructions: 'Read the sentence from Chapter 12. Then choose the best explanation.',
      question: '“While the little child Ishmael was crying with thirst and Hagar was running between the two hills, suddenly water started flowing from the ground under the feet of Ishmael.” Why does the writer use “was crying” and “was running”, but “started flowing”?',
      options: [
        '“Was crying” and “was running” were already in progress; “started flowing” is the new event that happened during them.',
        '“Was crying” and “was running” happened after the water started flowing.',
        '“Was crying” and “was running” were very short actions that happened only once.',
        '“Started flowing” describes something that happened every day.',
      ],
      correctAnswer: 0,
      explanation: '“While + past continuous” (was crying, was running) sets the background: actions already in progress. “Suddenly” + past simple (started flowing) introduces a new event that happens in the middle of them. The next sentence uses “When + past simple” for the moment that causes a reaction: “When Hagar saw this …, she shouted”.',
      feedback: {
        correct: 'Correct. The continuous forms set the background, and the past simple brings in the sudden event.',
        incorrect: 'Look at “While” and “suddenly”. Which actions were happening already, and which one was new?',
      },
    },
    {
      id: 'abraham-b1-language-12-continuity-cause',
      type: 'error-correction',
      title: 'Saw or Was Seeing?',
      instructions: 'Each sentence has one mistake. Tap the wrong words, then choose the correction.',
      question: 'Can you correct verbs that should not be in the continuous form?',
      errorItems: [
        {
          sentence: 'When Hagar was seeing this from a distance, she shouted, “Zamzam!”',
          error: 'was seeing',
          options: ['saw', 'has seen', 'sees'],
          answer: 0,
        },
        {
          sentence: 'This historic Zamzam spring is still existing, providing water for thousands of years.',
          error: 'is still existing',
          options: ['still exists', 'still existed', 'is still exist'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“When + past simple” marks a single moment that causes the next action: when Hagar saw this, she shouted. Verbs of perception and state, such as see and exist, are not normally used in the continuous. “Still + present simple” (still exists) shows that a situation continues from the past to now.',
      feedback: {
        correct: 'Well done. You used simple forms for a single moment and for a continuing state.',
        incorrect: 'See and exist are usually not used with -ing. Check the first and second paragraphs of Chapter 12.',
      },
    },
    {
      id: 'abraham-b1-language-12-development',
      type: 'sentence-building',
      title: 'Build a Cause Sentence',
      instructions: 'Tap the pieces to build the sentence from Chapter 12. You can also start with the cause.',
      question: 'What follows “because of”, and where can the cause go?',
      sentenceChunks: ['More people', 'came', 'to settle there', 'because of', 'this sacred spring'],
      correctAnswer: [['because of', 'this sacred spring', 'More people', 'came', 'to settle there']],
      explanation: '“Because of” is followed by a noun phrase (this sacred spring), not a clause. “Came to settle” uses to + verb for purpose: people came in order to live there. The cause can go at the end or at the start: “Because of this sacred spring, more people came to settle there.”',
      feedback: {
        correct: 'Well done. You built the sentence with a clear cause and purpose.',
        incorrect: 'Start with who came (More people), then why they came (to settle there), then the cause (because of + noun). Check the second paragraph of Chapter 12.',
      },
    },
    { id: 'abraham-b1-language-12-connected-production', type: 'reflection', title: 'Explain How a Place Changes', instructions: 'Write or say five connected B1 sentences about a non-story place that changes over time. Do not retell Chapter 12.', question: 'Can you combine background, a sudden event, cause, continuity, and development in one short explanation?', correctAnswer: null, explanation: 'A strong response can use while, suddenly, when, still, because/because of, begin/start, come to + verb, and meanwhile where natural.', feedback: { correct: 'Keep the sentences connected as one short development story.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Set the background with while or another natural time expression.', mode: 'Individual' }, { question: 'Sentence 2 — Introduce a new event with suddenly or when.', mode: 'Individual' }, { question: 'Sentence 3 — Explain one result or reason with because or because of.', mode: 'Individual' }, { question: 'Sentence 4 — Show something that continues with still or another natural continuity expression.', mode: 'Individual' }, { question: 'Sentence 5 — Show later development with begin/start, come to + verb, or meanwhile.', mode: 'Pair' }] },
  ],
};

export const abrahamB1LanguageFocusChapter13: Record<number, Exercise[]> = {
  13: [
    {
      id: 'abraham-b1-language-13-command-commitment',
      type: 'drag-drop',
      title: 'Instruction or Promise?',
      instructions: 'Sort the parts of Chapter 13. Does each part report what someone was told to do, or say what someone will do in the future?',
      question: 'How does the opening dialogue move from an instruction to a promise?',
      dragDropGroups: [
        {
          group: 'What someone was told to do',
          items: [
            'Allah commanded Abraham (pbuh) to build the House of Allah',
            'Allah told me to do an important task',
          ],
        },
        {
          group: 'What someone will do (a role or a promise)',
          items: [
            'you will help me in this task',
            'I will help you for sure',
          ],
        },
      ],
      correctAnswer: {
        'What someone was told to do': [
          'Allah commanded Abraham (pbuh) to build the House of Allah',
          'Allah told me to do an important task',
        ],
        'What someone will do (a role or a promise)': [
          'you will help me in this task',
          'I will help you for sure',
        ],
      },
      explanation: 'Command/tell + person + to + verb reports an instruction (commanded Abraham to build, told me to do). “Will + verb” looks to the future: Abraham uses it to give Ishmael a role (you will help me), and Ishmael uses it to make a promise (I will help you for sure). “For sure” makes the promise stronger.',
      feedback: {
        correct: 'Correct. You separated reported instructions from future roles and promises.',
        incorrect: 'Look for command/told + person + to (an instruction) and will + verb (the future). Check the first paragraph of Chapter 13.',
      },
    },
    {
      id: 'abraham-b1-language-13-state-change-rebuilding',
      type: 'sequencing',
      title: 'From Old Building to New',
      instructions: 'Put the parts of Chapter 13 in order. Use the linking words to help you.',
      question: 'Which words show an earlier state, a change over time, a new start and completion?',
      sequencingItems: [
        { id: '1', text: 'The Ka’ba was an ancient building originally built as the first sacred place on Earth,' },
        { id: '2', text: 'but it disappeared over time.' },
        { id: '3', text: 'Father and son found the foundations of the old building' },
        { id: '4', text: 'and began to construct the new building on it.' },
        { id: '5', text: 'After he built the Holy Ka’ba, Abraham’s (pbuh) mission was over.' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: 'The past simple “was” describes the earlier state. “But … over time” shows a slow change. “The old building” refers back to the ancient Ka’ba, and “on it” refers to the foundations. “Began to” marks the start of the rebuilding, and “After + past simple” shows that one action was completed before the next.',
      feedback: {
        correct: 'Correct. The linking words guided you from the old building to the completed mission.',
        incorrect: 'Look for clues: “but” and “and” continue a sentence, “the old building” and “on it” refer back, and “After he built …” comes when the work is finished.',
      },
    },
    {
      id: 'abraham-b1-language-13-completion-purpose-continuity',
      type: 'word-bank',
      title: 'Purpose Across Generations',
      instructions: 'Complete the lines from Chapter 13 with words from the bank. Two words are not needed.',
      question: 'Which words show who the Ka’ba was for, a long period of time and a purpose?',
      fillBlanksText: 'He built a place of worship [blank] all people of different races and colors. … [blank], Ishmael’s children had children; one of them was Muhammad, the Prophet of Islam (pbuh). They spread all over the Arabian Peninsula [blank] carry their grandfather Abraham’s (pbuh) message of the Oneness of Allah.',
      wordBank: ['for', 'Over the years', 'to', 'Since', 'so'],
      correctAnswer: ['for', 'Over the years', 'to'],
      explanation: '“For + noun” shows who something is for (a place of worship for all people). “Over the years” shows change or continuity across a long period, here across generations. “To + verb” gives the purpose of an action (spread … to carry the message). “Since” needs a starting point, and “so” would introduce a result.',
      feedback: {
        correct: 'Correct. You showed who the Ka’ba was for, the long time period and the purpose.',
        incorrect: 'Ask: who was the place for? How long did it take for children to have children? Why did they spread? Then check the last two paragraphs of Chapter 13.',
      },
    },
    { id: 'abraham-b1-language-13-connected-production', type: 'reflection', title: 'Explain How a Legacy Continues', instructions: 'Write or say five connected B1 sentences about a non-story project, tradition, or idea that continues after its founder. Do not retell Chapter 13.', question: 'Can you connect instruction, action, completion, purpose, and continuity in one short paragraph?', correctAnswer: null, explanation: 'A strong response can use told/asked + person + to + verb, will, after, begin/start, to + verb for purpose, and over the years where natural.', feedback: { correct: 'Keep the five sentences connected as one explanation of how something continues over time.', incorrect: '' }, discussionPrompts: [{ question: 'Sentence 1 — Report an instruction, request, or goal.', mode: 'Individual' }, { question: 'Sentence 2 — Show a person’s future commitment or expected role.', mode: 'Individual' }, { question: 'Sentence 3 — Describe the beginning or completion of an important action.', mode: 'Individual' }, { question: 'Sentence 4 — Explain the purpose or function of what was created.', mode: 'Individual' }, { question: 'Sentence 5 — Show how the idea or work continues over the years.', mode: 'Pair' }] },
  ],
};
