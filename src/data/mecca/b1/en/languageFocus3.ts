import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 9 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'mecca-b1-language-9-contrast-status', type: 'true-false', title: 'What Does “Depending On” Mean?',
      instructions: 'Read the sentence from Chapter 9. Decide whether the statement about its meaning is true or false.',
      question: '“Before Islam, the life of Arab women was very different depending on their wealth and family.” This means that a woman’s life changed according to how rich she was and which family she came from.',
      correctAnswer: true,
      explanation: '“Depending on …” shows that one thing changes according to another factor. Here, women’s lives changed according to wealth and family. The next sentences give the two sides: what rich women like Khadija were able to do, and then, marked by “However”, the situation of many poor women.',
      feedback: { correct: 'Correct. “Depending on” tells us what made the difference between women’s lives.', incorrect: 'Read the next two sentences of Chapter 9. Were the lives of a rich woman and a poor woman the same or different? What made the difference?' },
    },
    {
      id: 'mecca-b1-language-9-cause-passive', type: 'transformation', title: 'Who Did It?',
      instructions: 'Rewrite each part of Chapter 9 so that it keeps the same meaning. Use the start that is given.',
      question: 'Why does the chapter keep the slaves, not the owners, at the centre of these sentences?',
      transformItems: [
        {
          source: 'Slaves faced brutal conditions and were bought and sold like animals.',
          frame: 'Slaves faced brutal conditions, and people [blank] like animals.',
          answers: ['bought and sold them', 'bought and sold slaves', 'sold and bought them'],
        },
        {
          source: 'They did the most difficult work, and owning many slaves was a sign of wealth.',
          frame: 'They did the most difficult work, and if someone [blank], it was a sign of wealth.',
          answers: ['owned many slaves', 'had many slaves', 'owned a lot of slaves', 'had a lot of slaves'],
        },
      ],
      correctAnswer: null,
      explanation: 'The passive “were bought and sold” keeps the slaves as the subject, so the reader stays focused on what happened to them; the people who did it are not important for the point. In your active version the subject is only “people”. An -ing form (“owning many slaves”) can be the subject of a sentence; it names an action as one idea.',
      feedback: { correct: 'Well done. You changed the focus of each sentence and kept the meaning.', incorrect: 'Item 1: use the active verbs “bought and sold” and put the slaves after them. Item 2: after “if someone”, use a past simple verb. Check the second paragraph of Chapter 9.' },
    },
    {
      id: 'mecca-b1-language-9-poetry-functions', type: 'error-correction', title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a verb after “could”, a reason clause and a list of parallel verbs?',
      errorItems: [
        {
          sentence: 'Rich women, like Khadija, could ran their own businesses.',
          error: 'could ran',
          options: ['could running', 'could run', 'could to run'],
          answer: 1,
        },
        {
          sentence: 'Some fathers were ashamed to have daughters because of they wanted sons to increase their power in society.',
          error: 'because of they',
          options: ['because they', 'because of them', 'due they'],
          answer: 0,
        },
        {
          sentence: 'Poetry kept tribal history alive, praised tribes, and criticizing enemies.',
          error: 'criticizing',
          options: ['criticize', 'was criticizing', 'criticized'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'After “could”, use the base verb: “could run”. “Because” + subject + verb gives a reason; “because of” needs a noun. In a list of actions, every verb has the same form: “kept …, praised …, and criticized …”. This parallel list lets the writer show three jobs of poetry in one clear sentence.',
      feedback: { correct: 'Well done. You fixed the modal verb, the reason clause and the parallel list.', incorrect: 'Check the first paragraph of Chapter 9 for the first two sentences, and the last paragraph for the list of what poetry did.' },
    },
    {
      id: 'mecca-b1-language-9-production', type: 'reflection', title: 'Describe Unequal Roles and Social Functions', instructions: 'Write or say six connected B1 sentences about a different historical or modern community. Do not retell Chapter 9.', question: 'Can you show how people’s opportunities vary, add a contrast, explain one cause, use one passive sentence, and describe an institution through several parallel verbs or a comparison?', correctAnswer: null,
      explanation: 'A strong response should use language such as “depending on...”, “however”, “because”, a passive form, and a clear list of parallel verbs or a useful comparison.',
      feedback: { correct: 'Keep the ideas connected so the grammar shows real relationships rather than appearing as separate examples.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe how opportunities vary depending on one factor.', mode: 'Individual' }, { question: 'Sentence 2 — Give one contrasting example with “however”.', mode: 'Individual' }, { question: 'Sentence 3 — Explain one reason with “because”.', mode: 'Individual' }, { question: 'Sentence 4 — Use a passive sentence to focus on people affected by an action.', mode: 'Pair' }, { question: 'Sentence 5 — Describe one institution with two or three parallel verbs.', mode: 'Pair' }, { question: 'Sentence 6 — Add a comparison that helps explain its social role.', mode: 'Pair' },
      ],
    },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 10 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'mecca-b1-language-10-group-contrast', type: 'drag-drop', title: 'Fact or Belief?',
      instructions: 'Sort the parts of Chapter 10. Does the writer say it directly, or report what people in that period thought or believed?',
      question: 'How does the chapter keep the writer’s statements separate from the beliefs of people in the past?',
      dragDropGroups: [
        { group: 'The writer says it directly', items: ['There were 360 idols …', 'Pilgrimage to the Ka’ba was the most important religious activity in early Arabia.', 'Life in the Age of Ignorance was also full of superstitions.'] },
        { group: 'The writer reports what people thought or believed', items: ['They thought these idols helped them talk to Allah.', 'People believed in kahins, or soothsayers …', 'Arab people in that period actually believed in one main God, Allah, as the Creator.'] },
      ],
      correctAnswer: {
        'The writer says it directly': ['There were 360 idols …', 'Pilgrimage to the Ka’ba was the most important religious activity in early Arabia.', 'Life in the Age of Ignorance was also full of superstitions.'],
        'The writer reports what people thought or believed': ['They thought these idols helped them talk to Allah.', 'People believed in kahins, or soothsayers …', 'Arab people in that period actually believed in one main God, Allah, as the Creator.'],
      },
      explanation: '“Thought” and “believed (in)” report what people in the past accepted as true. They do not mean that the writer agrees: “They thought these idols helped them talk to Allah” is their belief, not a fact. Sentences without a reporting verb are the writer’s own statements, including judgements like “full of superstitions”.',
      feedback: { correct: 'Correct. You separated the writer’s own statements from reported beliefs.', incorrect: 'Look for “thought” and “believed”. If one of these verbs is present, the sentence reports people’s beliefs.' },
    },
    {
      id: 'mecca-b1-language-10-passive-location', type: 'choose-form', title: 'How Many People?',
      instructions: 'Choose the correct word to complete each sentence from Chapter 10.',
      question: 'Which words describe a large group, a small group and examples inside a group accurately?',
      formChoices: [
        { sentence: 'Before Islam, [choice] people in Arabia worshipped idols.', options: ['all', 'most', 'every'], answer: 1 },
        { sentence: '[choice] people followed religions like Christianity.', options: ['Most', 'Only a little', 'Only a few'], answer: 2 },
        { sentence: 'There were 360 idols, [choice] Lat, Manat, and Uzza.', options: ['including', 'included', 'include'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: '“Most” means the majority, not everyone; “all” would be an overclaim, because the next sentence names people who followed other religions. “Only a few” is used with countable nouns such as “people”; “a little” is for uncountable nouns. “Including” introduces some examples from a larger group; it does not give the full list.',
      feedback: { correct: 'Correct. You described the groups accurately without overgeneralising.', incorrect: 'Ask: did everyone worship idols? Is “people” countable? Does the list give all 360 idols or only some examples? Then check the first paragraph of Chapter 10.' },
    },
    {
      id: 'mecca-b1-language-10-belief-purpose-decision', type: 'transformation', title: 'Where and When',
      instructions: 'Rewrite each sentence so that it keeps the same meaning. Use the start that is given.',
      question: 'Can you change a passive sentence about place into an active one, and “before + -ing” into a full clause?',
      transformItems: [
        {
          source: 'They were kept in and around the Ka’ba and in homes.',
          frame: 'People [blank] in and around the Ka’ba and in homes.',
          answers: ['kept them', 'kept the idols', 'kept these idols', 'kept their idols', 'kept those idols'],
        },
        {
          source: 'People believed in kahins, or soothsayers, and checked omens before making decisions.',
          frame: '… and checked omens before they [blank].',
          answers: ['made decisions', 'made their decisions', 'made a decision', 'made any decisions', 'made any decision'],
        },
      ],
      correctAnswer: null,
      explanation: 'The chapter uses the passive “were kept” because the idols and their places are the topic; who kept them is not important. “Before + -ing” is a short form of “before + subject + verb”: “before making decisions” = “before they made decisions”. It shows that checking omens came first and the decision came after.',
      feedback: { correct: 'Well done. You changed the focus and the time clause without changing the meaning.', incorrect: 'Item 1: use the past simple “kept” and put the idols after it. Item 2: use a past simple verb after “before they”.' },
    },
    { id: 'mecca-b1-language-10-production', type: 'reflection', title: 'Describe Beliefs Without Overgeneralizing', instructions: 'Write or say six connected B1 sentences about a different historical or modern community. Do not retell Chapter 10.', question: 'Can you describe a majority pattern, add one or two exceptions, use one passive location sentence, report a belief with “thought/believed”, and explain how that belief influenced a decision?', correctAnswer: null, explanation: 'A strong response should use precise group language such as “most”, “some” or “only a few”, plus a passive form, reported belief, and a clear before/decision relationship.', feedback: { correct: 'Keep the sentences connected so each language choice helps explain a real relationship.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — State the main pattern with “most”.', mode: 'Individual' }, { question: 'Sentence 2 — Add a small exception with “only a few” or “some”.', mode: 'Individual' }, { question: 'Sentence 3 — Use a passive sentence to describe where an object, practice or symbol was found.', mode: 'Individual' }, { question: 'Sentence 4 — Report what a group thought or believed.', mode: 'Pair' }, { question: 'Sentence 5 — Show an action that happened before a decision.', mode: 'Pair' }, { question: 'Sentence 6 — Explain how the belief influenced the decision or behavior.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 11 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'mecca-b1-language-11-cause-power', type: 'multiple-choice', title: 'What Does “That Is Why” Connect?',
      instructions: 'Read the start of Chapter 11. Then choose the best answer.',
      question: '“Politics, economics, and religion are connected. Beliefs shape how people live. That is why powerful groups in Mecca did not like Islam.” What does “That is why” do here?',
      options: [
        'It gives the reason why politics, economics and religion are connected.',
        'It shows that the leaders’ dislike of Islam was a result of the ideas before it: a new belief could change how people live, and so affect power and wealth too.',
        'It introduces an example of a new belief.',
        'It shows a contrast with the sentence before it.',
      ],
      correctAnswer: 1,
      explanation: '“That is why” points back to the ideas already given and introduces their result. The writer first makes two general statements (in the present simple, because they are always true) and then applies them to history (in the past simple). A new belief could change how people lived, and so it could also change who had power and money.',
      feedback: { correct: 'Correct. The dislike of Islam is presented as a result of the general ideas before it.', incorrect: '“That” refers back to what came before. Ask: is the last sentence a reason, an example, a contrast, or a result?' },
    },
    {
      id: 'mecca-b1-language-11-future-community', type: 'choose-form', title: 'Looking Forward from the Past',
      instructions: 'Choose the correct form to complete each sentence from Chapter 11.',
      question: 'Which forms show a future development seen from the past, and an action someone heard?',
      formChoices: [
        { sentence: 'From the beginning, Islam showed that Muslims were a new community. They [choice] different from the people around them.', options: ['are going to be', 'were going to be', 'was going to be'], answer: 1 },
        { sentence: 'When they heard Prophet Muhammad (as) [choice] the Quran, they were sure it was from Allah.', options: ['to read', 'reads', 'read'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: '“Was/were going to + verb” describes a future development seen from a point in the past: at the beginning, the difference was still to come. “They” is plural, so “were”. “Hear + person + base verb” reports an action that someone heard from start to end: “heard Prophet Muhammad read the Quran” (no “to”, and no -s).',
      feedback: { correct: 'Correct. You chose the future-in-the-past and the right verb after “heard”.', incorrect: 'The story is told in the past, and “they” is plural. After “heard + person”, use the base verb. Check the first two paragraphs of Chapter 11.' },
    },
    {
      id: 'mecca-b1-language-11-hearing-response-contrast', type: 'word-bank', title: 'Effect, Contrast and Time',
      instructions: 'Complete the lines from Chapter 11 with words from the bank. Three words are not needed.',
      question: 'Which words show an effect on people, a contrast between reactions, and a length of time?',
      fillBlanksText: 'This message changed them deeply. It touched their hearts and minds and made them [blank] great respect. [blank], many leaders ignored the Quran and stood against the Prophet (as). Prophet Muhammad (as) taught in Mecca [blank] 13 years, in a city with about 5,000 to 10,000 people.',
      wordBank: ['to feel', 'However', 'since', 'feel', 'So', 'for'],
      correctAnswer: ['feel', 'However', 'for'],
      explanation: '“Make + person + base verb” shows an effect on someone’s feelings: “made them feel great respect” (no “to”). “However” introduces a reaction that is the opposite of the one before; “So” would wrongly present the leaders’ opposition as a result of the message touching people’s hearts. “For + a period of time” gives the length of time; “since” needs a starting point.',
      feedback: { correct: 'Correct. You showed the effect, the contrasting reaction and the length of time.', incorrect: 'Check the last paragraph of Chapter 11. After “made them”, is there “to”? Do the leaders react in the same way or the opposite way? Is “13 years” a length or a starting point?' },
    },
    { id: 'mecca-b1-language-11-production', type: 'reflection', title: 'Explain a Social Change', instructions: 'Write or say six connected B1 sentences about a different social, school, historical or community change. Do not retell Chapter 11.', question: 'Can you explain how an idea affected a group, show a future change from a past viewpoint, and compare two different reactions?', correctAnswer: null, explanation: 'A strong answer should include a general relationship, a clear cause/result link, a new group identity or role, one “was/were going to” sentence, a time clause with “when”, and a contrast with “however”.', feedback: { correct: 'Keep the six sentences connected so the reader can follow the change and the different reactions.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — State how two parts of the situation are connected.', mode: 'Individual' }, { question: 'Sentence 2 — Explain how an idea or belief affected behavior.', mode: 'Individual' }, { question: 'Sentence 3 — Use “That is why” to show a result or reaction.', mode: 'Individual' }, { question: 'Sentence 4 — Describe a new identity, role or community.', mode: 'Pair' }, { question: 'Sentence 5 — Use “was/were going to” for a later development viewed from the past.', mode: 'Pair' }, { question: 'Sentence 6 — Use “When...” and “However...” to compare two reactions.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 12 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'mecca-b1-language-12-quantity-threat', type: 'true-false', title: 'How Many Is “Almost None”?',
      instructions: 'Read the sentence from Chapter 12. Decide whether the statement about its meaning is true or false.',
      question: '“In the first few years of the call to Islam, almost none of Mecca’s super-rich people became Muslims.” This means that not one super-rich person in Mecca became a Muslim in those years.',
      correctAnswer: false,
      explanation: '“Almost none” means “very, very few”, not “zero”. The writer chooses a careful quantity word so the claim is not stronger than the evidence. “In the first few years” also limits the claim to one period. Accurate history writing often depends on small words like these.',
      feedback: { correct: 'Correct. “Almost none” leaves room for a very small number.', incorrect: 'Compare “none” and “almost none”. What does “almost” add to the meaning?' },
    },
    {
      id: 'mecca-b1-language-12-reason-status', type: 'transformation', title: 'Priorities and Reported Feelings',
      instructions: 'Rewrite each sentence so that it keeps the same meaning. Use the start that is given.',
      question: 'Can you express a priority in another way and turn a reported feeling into a reason?',
      transformItems: [
        {
          source: 'Keeping their power and unity was very important for them.',
          frame: 'It was very important for them [blank].',
          answers: ['to keep their power and unity', 'to keep their unity and power'],
        },
        {
          source: 'The leaders of Quraysh felt that Islam was a danger to their power and did not accept it.',
          frame: 'The leaders of Quraysh did not accept Islam [blank] a danger to their power.',
          answers: ['because they felt that it was', 'because they felt it was', 'because they felt that Islam was', 'because they felt Islam was', 'as they felt that it was', 'as they felt it was', 'since they felt that it was', 'since they felt it was', 'because they thought that it was', 'because they thought it was'],
        },
      ],
      correctAnswer: null,
      explanation: 'An -ing form can be the subject of a sentence (“Keeping their power … was very important”); “It was important + to + verb” says the same thing. Starting with “Keeping …” puts the leaders’ priority at the front. “Felt that …” reports the leaders’ own view of Islam: the writer shows this was how they saw it, and the “because” clause makes it the reason for their refusal.',
      feedback: { correct: 'Well done. You kept the priority and the reported view in new sentences.', incorrect: 'Item 1: use “to + verb” after “for them”. Item 2: start with “because they felt …”. Check the first two paragraphs of Chapter 12.' },
    },
    {
      id: 'mecca-b1-language-12-contrast-purpose', type: 'matching', title: 'Status, Rules and Pressure',
      instructions: 'Match each phrase from Chapter 12 with its meaning.',
      question: 'What do these phrases tell us about the leaders’ status and the changes Islam brought?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'They had high prestige', right: 'Others respected and admired them a lot.' },
        { left: 'caretakers of pilgrimage', right: 'the people who looked after visitors to the holy place' },
        { left: 'turned the people against the new religion', right: 'made others hostile to Islam' },
        { left: 'the Quran forbade this', right: 'the Quran said that people must not do it' },
        { left: 'Islam also commanded zakat and sadaqah', right: 'Islam made giving to those in need a duty' },
      ],
      correctAnswer: {
        'They had high prestige': 'Others respected and admired them a lot.',
        'caretakers of pilgrimage': 'the people who looked after visitors to the holy place',
        'turned the people against the new religion': 'made others hostile to Islam',
        'the Quran forbade this': 'the Quran said that people must not do it',
        'Islam also commanded zakat and sadaqah': 'Islam made giving to those in need a duty',
      },
      explanation: '“Forbid” (past: forbade) means “say that something must not be done”; “command” means “order as a duty”. “Turn someone against something” means “make them hostile to it”. “Prestige” is the respect a person or group has in society. These words show both why the leaders had power and how Islam challenged it.',
      feedback: { correct: 'Correct. You matched each phrase with its meaning in the chapter.', incorrect: 'Read the second and third paragraphs of Chapter 12 again. Replace each phrase with your answer and check that the sentence still makes sense.' },
    },
    { id: 'mecca-b1-language-12-production', type: 'reflection', title: 'Explain Resistance to Change', instructions: 'Write or say six connected B1 sentences about a different school, community or historical change. Do not retell Chapter 12.', question: 'Can you explain why a powerful group resisted a change, what it wanted to preserve, and how a new rule challenged an old practice?', correctAnswer: null, explanation: 'A strong answer should include a quantity expression, a reported viewpoint with “felt/thought that”, a reason with “because/because of”, an -ing clause as subject to express a priority, a contrast with “but”, and a purpose phrase with “to + verb”.', feedback: { correct: 'Keep the six sentences connected so the reader can follow the group’s position, priority, contrast and purpose.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Use “almost all / almost none / only a few” to describe a group.', mode: 'Individual' }, { question: 'Sentence 2 — Report a viewpoint with “felt/thought that...”.', mode: 'Individual' }, { question: 'Sentence 3 — Give a reason with “because” or “because of”.', mode: 'Individual' }, { question: 'Sentence 4 — Use an -ing form as the subject: “Keeping/Protecting/Changing ... was important.”', mode: 'Pair' }, { question: 'Sentence 5 — Contrast an old practice with a new rule using “but”.', mode: 'Pair' }, { question: 'Sentence 6 — Explain the purpose of the new rule with “to + verb”.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 13 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter13: Record<number, Exercise[]> = {
  13: [
    {
      id: 'mecca-b1-language-13-escalation', type: 'sequencing', title: 'From Mocking to Boycott',
      instructions: 'Put these sentences from Chapter 13 in order. Use “At first”, “But when” and “went further” to help you.',
      question: 'How does the chapter show opposition becoming more and more serious?',
      sequencingItems: [
        { id: 'a', text: 'The leaders of Mecca went further.' },
        { id: 'b', text: 'At first, the leaders of Mecca only mocked Islam.' },
        { id: 'c', text: 'Between 617 and 620, they began a social and economic boycott against Muslims and those who helped them.' },
        { id: 'd', text: 'But when the Quran criticized the idols and warned against false worship, their opposition became violent.' },
      ],
      correctAnswer: ['b', 'd', 'a', 'c'],
      explanation: '“At first” sets the earliest stage, and “only” shows it was limited to mockery. “But when …” marks a change caused by a new event. “Went further” tells the reader that the next action will be even stronger, and the boycott sentence gives that action. These markers show escalation: each step is more serious than the one before.',
      feedback: { correct: 'Correct. You followed the opposition from mocking to violence to a boycott.', incorrect: 'Start with “At first”. “Went further” must come just before the stronger action it introduces.' },
    },
    {
      id: 'mecca-b1-language-13-habit-command', type: 'error-correction', title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct a repeated past action, a reported order and a purpose phrase?',
      errorItems: [
        {
          sentence: 'Whenever Prophet Muhammad (as) walked by, they laugh and said that he was talking about messages from heaven.',
          error: 'laugh',
          options: ['were laugh', 'laughed', 'laughing'],
          answer: 1,
        },
        {
          sentence: 'He put a heavy rock on Bilal’s chest and ordered him give up his religion.',
          error: 'ordered him give up',
          options: ['ordered him to give up', 'ordered to him give up', 'ordered him giving up'],
          answer: 0,
        },
        {
          sentence: 'During this hard time, the Prophet (as), Khadija, and Abu Talib spent their money for support the Muslims.',
          error: 'for support',
          options: ['for to support', 'supporting to', 'to support'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Whenever + past simple, past simple” describes a reaction that happened every time: both verbs are in the past (“walked … laughed”). “Order + person + to + verb” reports a command. “To + verb” gives the purpose of an action: why did they spend their money? To support the Muslims.',
      feedback: { correct: 'Well done. You fixed the repeated action, the reported order and the purpose.', incorrect: 'Check the tense after “whenever”, the word after “ordered him”, and the word before “support”. Then compare with Chapter 13.' },
    },
    {
      id: 'mecca-b1-language-13-vulnerability-purpose', type: 'multiple-choice', title: 'Who Are “Those Without Powerful Friends”?',
      instructions: 'Read the sentence from Chapter 13. Then choose the best answer.',
      question: '“Poor Muslims and those without powerful friends suffered the most.” Who does “those without powerful friends” describe?',
      options: [
        'people who had no friends at all',
        'people who had no strong supporters to protect them',
        'powerful people who lost their friends',
        'people who left their friends to become Muslims',
      ],
      correctAnswer: 1,
      explanation: '“Those + without + noun” describes a group by what they did not have. This links back to Chapter 8: in Meccan society, protection came from strong people and tribes. The next sentence gives one clear example of such a person: Bilal, “an Abyssinian slave”.',
      feedback: { correct: 'Correct. The phrase describes people who had no one strong to protect them.', incorrect: 'Look at the word “powerful”. The phrase is not about having friends in general. Who is the example in the next sentence?' },
    },
    { id: 'mecca-b1-language-13-production', type: 'reflection', title: 'Describe a Situation That Becomes More Serious', instructions: 'Write or say six connected B1 sentences about a different school, community or historical situation. Do not retell Chapter 13.', question: 'Can you describe how a problem began, became more serious, involved repeated behaviour, included an order, affected a vulnerable group and led someone to act for a purpose?', correctAnswer: null, explanation: 'A strong response should use “at first”, a change with “but when”, a repeated-past pattern with “whenever” or “often”, a reported command with “ordered/told + person + to + verb”, a group description with “those without...”, and a purpose phrase with “to + verb”.', feedback: { correct: 'Keep the six sentences connected so the reader can follow the change, repeated behaviour, command, vulnerability and purpose.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Set the earlier stage with “At first...”.', mode: 'Individual' }, { question: 'Sentence 2 — Show a change with “But when...”.', mode: 'Individual' }, { question: 'Sentence 3 — Add repeated past behaviour with “whenever” or “often”.', mode: 'Individual' }, { question: 'Sentence 4 — Report an order with “ordered/told + person + to + verb”.', mode: 'Pair' }, { question: 'Sentence 5 — Describe a group with “those without...”.', mode: 'Pair' }, { question: 'Sentence 6 — Explain an action’s purpose with “to + verb”.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 14 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter14: Record<number, Exercise[]> = {
  14: [
    {
      id: 'mecca-b1-language-14-survival-perception', type: 'multiple-choice', title: 'Why Not Say Who Heard?',
      instructions: 'Read the sentence from Chapter 14. Then choose the best answer.',
      question: '“The cries of hungry children could be heard everywhere.” Why does the writer not say who heard the cries?',
      options: [
        'Because nobody really heard the cries.',
        'Because only the leaders of Mecca heard them.',
        'Because the cries are the important thing: anyone in the area could hear them, so the listener does not matter.',
        'Because the children heard their own cries.',
      ],
      correctAnswer: 2,
      explanation: '“Could be heard” is a passive form with “could”. The passive puts the cries at the start of the sentence and leaves out the listener, because the listener could be anyone. With “everywhere”, it shows how widespread the hunger was.',
      feedback: { correct: 'Correct. The passive keeps the focus on the cries and how widely they could be heard.', incorrect: 'Look at the word “everywhere”. If the cries could be heard everywhere, who could hear them?' },
    },
    {
      id: 'mecca-b1-language-14-continuation-resistance', type: 'transformation', title: 'Result or Reason?',
      instructions: 'Rewrite each sentence so that it keeps the same meaning. Use the start that is given.',
      question: 'Can you turn a “so” result into a “because” reason, and a “because” reason into a “so” result?',
      transformItems: [
        {
          source: 'Losing the idols meant losing wealth and influence, so they became hostile to Islam.',
          frame: 'They became hostile to Islam [blank] wealth and influence.',
          answers: ['because losing the idols meant losing', 'as losing the idols meant losing', 'since losing the idols meant losing', 'because losing idols meant losing', 'because losing their idols meant losing'],
        },
        {
          source: 'Tribal loyalty was another challenge because people feared losing their tribe’s protection.',
          frame: 'People feared losing their tribe’s protection, [blank] another challenge.',
          answers: ['so tribal loyalty was', 'and so tribal loyalty was', 'so tribal loyalty became'],
        },
      ],
      correctAnswer: null,
      explanation: '“So” introduces a result; “because” introduces a reason. When you change the order of the ideas, you change the linker but keep the same cause and effect. Notice the -ing forms after “meant” and “feared”: “meant losing”, “feared losing”. They name the loss the leaders and people were afraid of.',
      feedback: { correct: 'Well done. You kept the same cause and effect in a new order.', incorrect: 'Item 1: start the gap with “because” and keep “losing … meant losing”. Item 2: start the gap with “so”. Check the second and third paragraphs of Chapter 14.' },
    },
    {
      id: 'mecca-b1-language-14-cause-consequence', type: 'error-correction', title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct the verb forms after “stop” and “want”, and in a list of -ing forms?',
      errorItems: [
        {
          sentence: 'Prophet Muhammad (as) continued to ask people to stop worship idols and worship Allah alone.',
          error: 'stop worship',
          options: ['stop worshipping', 'stop to worship', 'stopping worship'],
          answer: 0,
        },
        {
          sentence: 'However, the leaders were proud of their old beliefs and did not want changing.',
          error: 'did not want changing',
          options: ['did not wanted to change', 'did not want change', 'did not want to change'],
          answer: 2,
        },
        {
          sentence: 'They did not want to think about punishment for hurting people, making money unfairly, drink alcohol, or doing other evil things.',
          error: 'drink',
          options: ['drank', 'drinking', 'to drink'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: '“Stop + -ing” means “no longer do something”; “stop to + verb” would mean stopping in order to do it. “Want + to + verb” expresses wish or unwillingness: “did not want to change”. After “for”, the list uses -ing forms, and every item must have the same form: “hurting …, making …, drinking …, or doing …”.',
      feedback: { correct: 'Well done. You fixed the verb patterns and the parallel list.', incorrect: 'Check what follows “stop”, “want” and “for” in the second and third paragraphs of Chapter 14.' },
    },
    { id: 'mecca-b1-language-14-production', type: 'reflection', title: 'Explain Why People Resist Change', instructions: 'Write or say five to six connected B1 sentences about a different school, social or historical situation. Do not retell Chapter 14.', question: 'Can you explain a difficult situation, what people continued to do, what they refused to change, what consequence they feared, and why that fear affected their behaviour?', correctAnswer: null, explanation: 'A strong response should include a purpose phrase with “to + verb”, one continuation pattern with “continued to...”, one unwillingness pattern with “did not want to...”, one cause-result link with “so”, and one reason with “because”.', feedback: { correct: 'Keep the ideas connected so the reader can follow the situation, persistence, resistance, feared consequence and reason.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Describe a difficult situation and one action done for a purpose.', mode: 'Individual' }, { question: 'Sentence 2 — Say what someone continued to do.', mode: 'Individual' }, { question: 'Sentence 3 — Say what another person or group did not want to change.', mode: 'Individual' }, { question: 'Sentence 4 — Explain a feared consequence and its result with “so”.', mode: 'Pair' }, { question: 'Sentence 5–6 — Give the reason with “because” and add one short list of related actions if natural.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 15 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter15: Record<number, Exercise[]> = {
  15: [
    {
      id: 'mecca-b1-language-15-pressure-condition', type: 'drag-drop', title: 'Their Claim or the Writer’s View?',
      instructions: 'Sort the parts of Chapter 15. Is it what the Quraysh leaders said, or the writer’s own view?',
      question: 'How does the chapter keep a reported claim separate from the writer’s own view?',
      dragDropGroups: [
        { group: 'What the Quraysh leaders said', items: ['Islam was breaking up families …', '… destroying unity.'] },
        { group: 'The writer’s own view', items: ['Islam was calling people to a better form of unity …', 'In Islam, every person is important.', 'Before Islam, Mecca was a difficult place with much unfairness.'] },
      ],
      correctAnswer: {
        'What the Quraysh leaders said': ['Islam was breaking up families …', '… destroying unity.'],
        'The writer’s own view': ['Islam was calling people to a better form of unity …', 'In Islam, every person is important.', 'Before Islam, Mecca was a difficult place with much unfairness.'],
      },
      explanation: '“The Quraysh leaders said …” reports a claim; the writer does not present it as true. The next sentence starts with a contrast marker and gives the writer’s own view of Islam. Sentences without a reporting verb, such as “In Islam, every person is important”, are the writer’s own statements.',
      feedback: { correct: 'Correct. You separated the leaders’ claim from the writer’s view.', incorrect: 'Find the reporting verb “said” in the second paragraph of Chapter 15. Only the words after it belong to the leaders.' },
    },
    {
      id: 'mecca-b1-language-15-claim-reality', type: 'error-correction', title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct “so … that”, “prevent … from” and “told … to”?',
      errorItems: [
        {
          sentence: 'In old Arab society, tribal loyalty was such strong that freedom of choice was difficult.',
          error: 'such strong',
          options: ['too strong', 'very strong', 'so strong'],
          answer: 2,
        },
        {
          sentence: 'The leaders of Mecca tried to prevent members of their tribes to become Muslim.',
          error: 'to become',
          options: ['from becoming', 'become', 'for becoming'],
          answer: 0,
        },
        {
          sentence: 'Prophet Muhammad (as) told people be fair, respectful, and merciful.',
          error: 'people be',
          options: ['to people be', 'people to be', 'people being'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: '“So + adjective + that” links a strong degree to its result: loyalty was so strong that free choice was difficult (“such” is used before a noun: “such strong loyalty”). “Prevent + person + from + -ing” means “stop someone doing something”. “Tell + person + to + verb” reports advice or an instruction.',
      feedback: { correct: 'Well done. You fixed the degree-result pattern, the prevention pattern and the reported instruction.', incorrect: 'Check what comes before an adjective + “that”, what follows “prevent … ”, and what follows “told people”. Then compare with Chapter 15.' },
    },
    {
      id: 'mecca-b1-language-15-value-contrast', type: 'matching', title: 'Pressure, Reality and Value',
      instructions: 'Match each phrase from Chapter 15 with its meaning.',
      question: 'What do these phrases tell us about tribal pressure and the value of every person?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'that person could lose protection', right: 'the group might no longer keep them safe' },
        { left: 'almost like being stateless today', right: 'nearly the same as having no country to belong to now' },
        { left: 'In reality', right: 'What was actually true was different:' },
        { left: 'based on justice, mercy, and belief in one Allah', right: 'with these values as its foundation' },
        { left: 'do not make one person more valuable than another', right: 'do not give anyone greater worth' },
      ],
      correctAnswer: {
        'that person could lose protection': 'the group might no longer keep them safe',
        'almost like being stateless today': 'nearly the same as having no country to belong to now',
        'In reality': 'What was actually true was different:',
        'based on justice, mercy, and belief in one Allah': 'with these values as its foundation',
        'do not make one person more valuable than another': 'do not give anyone greater worth',
      },
      explanation: '“Could” shows a possible result, not a certain one. “Almost like” makes a careful comparison with today. “In reality” introduces what the writer sees as true, in contrast to a claim. “Based on” names the foundation of something. “Make + person + comparative adjective” in the negative rejects the idea that background or wealth gives more value.',
      feedback: { correct: 'Correct. You matched each phrase with its meaning in the chapter.', incorrect: 'Read Chapter 15 again. Replace each phrase with your answer and check that the sentence still makes sense.' },
    },
    { id: 'mecca-b1-language-15-production', type: 'reflection', title: 'Explain Pressure and a Fairer Alternative', instructions: 'Write or say five to six connected B1 sentences about a different school, community or historical situation. Do not retell Chapter 15.', question: 'Can you describe a strong social pressure, explain a possible consequence, report what one group claimed, contrast that claim with another view, and describe a fairer principle?', correctAnswer: null, explanation: 'A strong response should naturally use one “so ... that” relationship, one “if ... could ...” consequence, one prevention phrase, one reported claim, one contrast marker such as “In reality” or “however”, and one sentence explaining what a fair system is based on.', feedback: { correct: 'Keep the response connected so the reader can follow the pressure, consequence, reported claim, contrast and alternative principle.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Describe a pressure that was so strong that it affected people’s choices.', mode: 'Individual' }, { question: 'Sentence 2 — Explain what could happen if someone resisted that pressure.', mode: 'Individual' }, { question: 'Sentence 3 — Say how a person or group tried to prevent a change.', mode: 'Individual' }, { question: 'Sentence 4 — Report what that group said or believed.', mode: 'Pair' }, { question: 'Sentence 5–6 — Contrast the claim with another view and explain what the fairer alternative is based on.', mode: 'Pair' } ] },
  ],
};
