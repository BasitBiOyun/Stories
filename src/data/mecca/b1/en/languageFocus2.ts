import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 3 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'mecca-b1-language-3-place-and-state',
      type: 'multiple-choice',
      title: 'Which Came First?',
      instructions: 'Read the sentence from Chapter 3. Then choose what it tells us about the order of events.',
      question: '“When Prophet Abraham (as) brought his son Ishmael (as) and his wife Hagar to the city, Zamzam water had not been discovered yet.” What does “had not been discovered yet” tell us?',
      options: [
        'Zamzam water was discovered before they arrived.',
        'Zamzam water was discovered at the moment they arrived.',
        'Zamzam water was discovered some time after they arrived.',
        'Zamzam water was never discovered.',
      ],
      correctAnswer: 2,
      explanation: 'The past perfect (had + been + past participle) looks back from one past moment to an earlier time. At the moment of arrival, the discovery had not happened; “yet” shows that people expected it to happen later. The next paragraph confirms this: “After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca.”',
      feedback: {
        correct: 'Correct. At the time of their arrival, the discovery was still in the future.',
        incorrect: 'Think about “not … yet”: something has not happened so far, but may happen later. Then read the start of the second paragraph of Chapter 3.',
      },
    },
    {
      id: 'mecca-b1-language-3-time-relations',
      type: 'transformation',
      title: 'Reason and Result, Noun and Clause',
      instructions: 'Rewrite each sentence so that it keeps the same meaning. Use the start that is given.',
      question: 'Can you change a result into a reason, and a noun phrase into a clause?',
      transformItems: [
        {
          source: 'Arabs accepted the religion of Abraham (as) and Ishmael (as), so the Ka’ba became a pilgrimage site.',
          frame: 'The Ka’ba became a pilgrimage site [blank] the religion of Abraham (as) and Ishmael (as).',
          answers: ['because Arabs accepted', 'because the Arabs accepted', 'as Arabs accepted', 'as the Arabs accepted', 'since Arabs accepted', 'since the Arabs accepted'],
        },
        {
          source: 'After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca.',
          frame: 'After Zamzam water [blank], the Jurhumites from Yemen settled in Mecca.',
          answers: ['was discovered', 'had been discovered'],
        },
      ],
      correctAnswer: null,
      explanation: '“So” introduces a result; “because”, “as” or “since” introduce a reason. When you change the order of the ideas, you change the linker. “After” can be followed by a noun (“after the discovery”) or by a clause (“after Zamzam water was discovered”). The water is the thing that was found, so the clause is passive.',
      feedback: {
        correct: 'Well done. You kept the same cause and effect and the same order of events.',
        incorrect: 'Item 1: which part is the reason? Start the gap with “because”. Item 2: the water did not discover anything; it was found by people, so use was/had been + discovered.',
      },
    },
    {
      id: 'mecca-b1-language-3-purpose-change',
      type: 'choose-form',
      title: 'Place, Purpose and Growth',
      instructions: 'Choose the correct form to complete each sentence from Chapter 3.',
      question: 'Which form describes a place, gives a purpose and shows help with a change?',
      formChoices: [
        {
          sentence: 'The Quran describes Mecca as a valley [choice] no crops grow.',
          options: ['which', 'where', 'when'],
          answer: 1,
        },
        {
          sentence: 'Later, when Ishmael (as) grew up, Abraham (as) came to the city [choice] the Holy Ka’ba with his son.',
          options: ['to reconstruct', 'for reconstruct', 'reconstructing'],
          answer: 0,
        },
        {
          sentence: 'This helped the city [choice] rapidly.',
          options: ['growing', 'grows', 'grow'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Where” adds information about a place: in this valley, no crops grow. (“Which” would need a subject or object, as in “a valley which has no crops”.) “To + verb” gives the purpose of an action: why did Abraham come? To reconstruct the Ka’ba. “Help + object + base verb” shows that one thing supported a change: pilgrimage helped the city grow.',
      feedback: {
        correct: 'Correct. You chose the right form for place, purpose and growth.',
        incorrect: 'Ask: does the gap describe a place, answer “why?”, or follow “helped the city”? Then check the first and last paragraphs of Chapter 3.',
      },
    },
    {
      id: 'mecca-b1-language-3-production',
      type: 'reflection',
      title: 'Explain How a Place Changed Over Time',
      instructions: 'Write or say six connected B1 sentences about a different place that changed over time. Do not retell Chapter 3.',
      question: 'Can you describe the starting place, show an earlier condition, organise two later developments, give one purpose, and explain one result?',
      correctAnswer: null,
      explanation: 'A strong response should form one short historical paragraph. Useful patterns include “a place where...”, “There was/were...”, “had not ... yet”, “after...”, “later, when...”, “to + verb”, “so...”, and “helped ... grow/change”.',
      feedback: {
        correct: 'Keep the time relationships clear and make each sentence move the explanation forward.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe the place with “where” or another defining phrase.', mode: 'Individual' },
        { question: 'Sentence 2 — State an earlier condition that existed before change.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “after” to introduce the next development.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “later, when...” to move to another stage.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain the purpose of one action with “to + verb”.', mode: 'Pair' },
        { question: 'Sentence 6 — Finish with a result using “so” or “helped ... change”.', mode: 'Pair' },
      ],
    },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 4 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'mecca-b1-language-4-succession',
      type: 'sequencing',
      title: 'Stages of Control',
      instructions: 'Put these parts of Chapter 4 in time order. The time words at the start of each sentence will help you.',
      question: 'How do “after”, “later” and “under … rule” guide the reader through the changes in Mecca?',
      sequencingItems: [
        { id: 'a', text: 'Later, in the 5th century, the Quraysh tribe …' },
        { id: 'b', text: 'Under Khuza’a rule, people forgot the religion of Abraham (as) …' },
        { id: 'c', text: 'After Abraham (as) completed his mission and invited people for pilgrimage, he returned to Palestine.' },
        { id: 'd', text: 'Later, the Khuza’a tribe came to Mecca, defeated the Jurhum tribe, and took control of the city.' },
      ],
      correctAnswer: ['c', 'd', 'b', 'a'],
      explanation: '“After …” closes one stage before the next begins. “Later” moves the account forward, and “Later, in the 5th century” adds an exact time. “Under Khuza’a rule” describes life during a period of control, so it must come after the Khuza’a took control. A history text often uses these markers to show a chain of rulers and changes.',
      feedback: {
        correct: 'Correct. You followed the time markers from Abraham to the Quraysh.',
        incorrect: 'Start with the sentence that closes Abraham’s stage. “Under Khuza’a rule” can only come after the Khuza’a took control.',
      },
    },
    {
      id: 'mecca-b1-language-4-change-and-practice',
      type: 'choose-form',
      title: 'Starting and Taking Over',
      instructions: 'Choose the correct form to complete each sentence from Chapter 4.',
      question: 'Which forms show the start of a new practice and a new group taking control?',
      formChoices: [
        {
          sentence: '… people forgot the religion of Abraham (as) and started [choice] many idols.',
          options: ['worship', 'worshipping', 'worshipped'],
          answer: 1,
        },
        {
          sentence: 'Later, in the 5th century, the Quraysh tribe took [choice] the city and the Ka’ba.',
          options: ['off', 'up', 'over'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Start” is followed by -ing (or to + verb) to show the beginning of an action: “started worshipping”. “Take over” is a phrasal verb meaning “take control of”; the chapter uses both “took control of the city” and “took over the city”. “Take off” and “take up” have very different meanings.',
      feedback: {
        correct: 'Correct. You showed the start of a practice and a change of control.',
        incorrect: 'After “started”, use a form that can follow it as an object. For the second gap, which small word means “took control of”? Check the second paragraph of Chapter 4.',
      },
    },
    {
      id: 'mecca-b1-language-4-reason-background',
      type: 'transformation',
      title: 'Reason First or Reason Second?',
      instructions: 'Rewrite each sentence so that it keeps the same meaning. Use the start that is given.',
      question: 'Can you move a reason to a new place in the sentence, or turn it into a result?',
      transformItems: [
        {
          source: 'Because people could not farm in this dry land, they made money through trade.',
          frame: 'People made money through trade [blank] farm in this dry land.',
          answers: ['because they could not', 'because they couldn’t', "because they couldn't", 'because people could not', 'as they could not', 'since they could not', 'because they were not able to'],
        },
        {
          source: 'India, Indonesia, and China were also important for trade because they produced many different goods.',
          frame: 'India, Indonesia, and China produced many different goods, [blank] important for trade.',
          answers: ['so they were also', 'so they were', 'and so they were also', 'so these countries were also', 'so they were also very'],
        },
      ],
      correctAnswer: null,
      explanation: 'A “because” clause can come first (with a comma) or second (without a comma). “Could not + verb” shows what was impossible, and the main clause shows what people did instead. If the reason comes first as a full sentence part, use “so” to introduce the result.',
      feedback: {
        correct: 'Well done. You kept the same reason and result in a new order.',
        incorrect: 'Item 1: start the gap with “because” and keep “could not”. Item 2: the goods are the reason, so start the gap with “so”.',
      },
    },
    {
      id: 'mecca-b1-language-4-production', type: 'reflection', title: 'Explain a Historical Change', instructions: 'Write or say six connected B1 sentences about a different historical place or community. Do not retell Chapter 4.', question: 'Can you show an earlier stage, a later change of control, one change in practice, one limitation and response, and a wider background situation?', correctAnswer: null,
      explanation: 'A strong response should form one connected paragraph. Useful patterns include “after...”, “later...”, “under ... rule...”, “started + -ing”, “because ... could not..., ...”, and “when ... began, ... was/were ...”.',
      feedback: { correct: 'Keep the sequence clear and make each connector show a real relationship between ideas.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Close an earlier stage with “after...”.', mode: 'Individual' }, { question: 'Sentence 2 — Introduce a later change with “later...”.', mode: 'Individual' }, { question: 'Sentence 3 — Describe life “under” a new period or authority.', mode: 'Individual' }, { question: 'Sentence 4 — Show a new practice with “started + -ing”.', mode: 'Pair' }, { question: 'Sentence 5 — Use “because ... could not..., ...” to explain an alternative action.', mode: 'Pair' }, { question: 'Sentence 6 — Add wider background with “when ... began, ... was/were ...”.', mode: 'Pair' },
      ],
    },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 5 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    {
      id: 'mecca-b1-language-5-cause-change',
      type: 'multiple-choice',
      title: '“Because” or “Because of”?',
      instructions: 'Compare the two sentences from Chapter 5. Then choose the best answer.',
      question: '(1) “Because Mecca was in the middle of important trade routes, it became a busy and wealthy city.” (2) “Because of this safe atmosphere, more people could visit the city …” Why does the writer use “because” in (1) but “because of” in (2)?',
      options: [
        '“Because” gives a reason, but “because of” gives a result.',
        '“Because” is followed by a subject and a verb; “because of” is followed by a noun phrase.',
        '“Because of” can only be used at the start of a sentence.',
        'There is no difference; the writer only wanted some variety.',
      ],
      correctAnswer: 1,
      explanation: 'Both give a reason. The difference is what follows: “because + subject + verb” (Mecca was …) and “because of + noun phrase” (this safe atmosphere). Both can start a sentence or come in the middle. The two sentences frame the chapter: location made Mecca rich, and safety brought more visitors.',
      feedback: {
        correct: 'Correct. Look at what comes straight after each one: a clause or a noun phrase.',
        incorrect: 'Both sentences explain why something happened. Now look at the words straight after “because” and after “because of”. Is there a verb?',
      },
    },
    {
      id: 'mecca-b1-language-5-enabling',
      type: 'matching',
      title: 'What Do These Phrases Mean?',
      instructions: 'Match each phrase from Chapter 5 with its meaning.',
      question: 'What do these phrases tell us about trade and behaviour in and around Mecca?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'helped grow Mecca’s economy', right: 'played a part in making the city’s business bigger' },
        { left: 'allowed merchants to travel', right: 'made it possible for traders to go on journeys' },
        { left: 'focused on worship', right: 'gave most of their attention to prayer and religious acts' },
        { left: 'showed respect', right: 'treated others with honour' },
        { left: 'stayed away from fighting', right: 'avoided war and violence' },
      ],
      correctAnswer: {
        'helped grow Mecca’s economy': 'played a part in making the city’s business bigger',
        'allowed merchants to travel': 'made it possible for traders to go on journeys',
        'focused on worship': 'gave most of their attention to prayer and religious acts',
        'showed respect': 'treated others with honour',
        'stayed away from fighting': 'avoided war and violence',
      },
      explanation: '“Allow + person + to + verb” means “make something possible for someone”. “Focus on”, “show respect” and “stay away from” are fixed phrases: the small words (“on”, “from”) cannot be changed. Together they explain how agreements and the sacred months made trade and travel easier.',
      feedback: {
        correct: 'Correct. You matched each phrase with its meaning in the chapter.',
        incorrect: 'Read the second and third paragraphs of Chapter 5 again and replace each phrase with your answer. Does the sentence still make sense?',
      },
    },
    {
      id: 'mecca-b1-language-5-behaviour-purpose',
      type: 'choose-form',
      title: 'Time, Result and Purpose',
      instructions: 'Choose the correct form to complete each sentence from Chapter 5.',
      question: 'Which form marks a starting time, a new state and a purpose?',
      formChoices: [
        {
          sentence: '[choice] the early 6th century, Mecca became a major trading center.',
          options: ['Since', 'From', 'For'],
          answer: 1,
        },
        {
          sentence: 'The sacred months, Zilkade, Zilhicce, Muharram, and Rajab, made the region [choice].',
          options: ['to be safer', 'more safer', 'safer'],
          answer: 2,
        },
        {
          sentence: '… more people could visit the city [choice] Hajj.',
          options: ['to perform', 'for perform', 'for to perform'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“From + time” marks the point where a change began, and it works with the past simple (“became”). “Since” would need the present perfect or past perfect. “Make + object + adjective” describes a new state: “made the region safer” (no “to be”, and “safer” already means “more safe”). “To + verb” gives the purpose of a visit.',
      feedback: {
        correct: 'Correct. You marked the starting time, the new state and the purpose.',
        incorrect: 'Check the verb in the first sentence (“became”), remember that “safer” is already a comparative, and ask why people visited. Then compare with Chapter 5.',
      },
    },
    { id: 'mecca-b1-language-5-production', type: 'reflection', title: 'Explain How Conditions Create Opportunity', instructions: 'Write or say six connected B1 sentences about a different place, event or community. Do not retell Chapter 5.', question: 'Can you explain a reason, a change over time, an agreement or rule, a safer/easier condition, what people could then do, and their purpose?', correctAnswer: null, explanation: 'A strong response should form one connected paragraph using relationships such as “because...”, “from...”, “allowed ... to...”, “made ... safer/easier”, “could...”, and “to + verb” for purpose.', feedback: { correct: 'Keep the paragraph connected and make every language choice express a clear relationship.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Give a reason with “because...”.', mode: 'Individual' }, { question: 'Sentence 2 — Show a change beginning from a particular time.', mode: 'Individual' }, { question: 'Sentence 3 — Describe an agreement, rule or action that “allowed” people to do something.', mode: 'Individual' }, { question: 'Sentence 4 — Show how it “made” a place or situation safer, easier or more open.', mode: 'Pair' }, { question: 'Sentence 5 — Explain what people “could” do as a result.', mode: 'Pair' }, { question: 'Sentence 6 — Finish with “to + verb” to state their purpose.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 6 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'mecca-b1-language-6-continuation',
      type: 'true-false',
      title: 'What Does “Continued To” Show?',
      instructions: 'Read the sentence from Chapter 6. Decide whether the statement about its meaning is true or false.',
      question: '“Before Islam, idol worshippers continued to visit and walk around the Ka’ba.” The words “continued to” show that visiting the Ka’ba was a new practice that started at this time.',
      correctAnswer: false,
      explanation: '“Continue to + verb” shows that an action went on and did not stop. People had already visited the Ka’ba for a long time (Chapter 3: “the Ka’ba became a pilgrimage site”). Even after people started worshipping idols, the visits did not stop. The writer then shows the effect of this continuing activity on the city.',
      feedback: {
        correct: 'Correct. “Continued to” describes an old practice that did not stop.',
        incorrect: 'Think about the difference between “started to” and “continued to”. Then remember when the Ka’ba first became a pilgrimage site.',
      },
    },
    {
      id: 'mecca-b1-language-6-sequence-background',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap the wrong word or phrase, then choose the correction.',
      question: 'Can you correct the verb patterns after “kept” and “helped”, and keep the past tense in a sequence?',
      errorItems: [
        {
          sentence: 'These practices kept Mecca to be active during the pilgrimage season.',
          error: 'to be active',
          options: ['active', 'to active', 'activity'],
          answer: 0,
        },
        {
          sentence: 'This religious activity also helped business growing quickly.',
          error: 'growing',
          options: ['grows', 'grow', 'grew'],
          answer: 1,
        },
        {
          sentence: 'People attended these fairs first and then go to Arafat.',
          error: 'go',
          options: ['going', 'goes', 'went'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Keep + object + adjective” shows that a situation stays the same: “kept Mecca active”. “Help + object + base verb” shows support for a change: “helped business grow”. “First … and then …” orders two past actions, so both verbs are in the past simple: “attended … and then went”.',
      feedback: {
        correct: 'Well done. You fixed the verb patterns and the sequence.',
        incorrect: 'Check the first two paragraphs of Chapter 6: what comes after “kept Mecca”, after “helped business”, and after “then”?',
      },
    },
    {
      id: 'mecca-b1-language-6-result-comparison',
      type: 'sentence-building',
      title: 'Richer and Poorer',
      instructions: 'Tap the pieces to rebuild the last sentence of Chapter 6.',
      question: 'How can one sentence show a practice pushing two groups in opposite directions?',
      sentenceChunks: [
        'This made',
        'the rich',
        'richer',
        'and',
        'the poor',
        'poorer.',
      ],
      correctAnswer: [
        ['This made', 'the poor', 'poorer.', 'and', 'the rich', 'richer'],
      ],
      explanation: '“Make + object + comparative adjective” shows how something changed a group: “made the rich richer”. After “and”, the writer does not repeat “made”; the second group simply follows the same pattern: “and the poor poorer”. “This” refers back to lending money with usury.',
      feedback: {
        correct: 'Well done. Each group is followed by the comparative that shows how it changed.',
        incorrect: 'Start with “This made”, then give a group and how it changed, then “and”, then the other group. Check the last paragraph of Chapter 6.',
      },
    },
    { id: 'mecca-b1-language-6-production', type: 'reflection', title: 'Explain a System and Its Effects', instructions: 'Write or say six connected B1 sentences about a different event, school, community or economic situation. Do not retell Chapter 6.', question: 'Can you describe a continuing activity, organise two actions in sequence, set a time frame, explain a widespread practice and show how it affected two groups differently?', correctAnswer: null, explanation: 'A strong response should form one connected paragraph using language such as “continued to...”, “kept...”, “first... then...”, a historical or situational time frame, “was widespread”, and “made ... more/less ...” or another clear cause-and-result comparison.', feedback: { correct: 'Keep the paragraph connected and make each form express a real relationship between ideas.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Describe an activity that “continued to” happen.', mode: 'Individual' }, { question: 'Sentence 2 — Explain what that activity “kept” active, busy, open or connected.', mode: 'Individual' }, { question: 'Sentence 3 — Order two related actions with “first ... then ...”.', mode: 'Individual' }, { question: 'Sentence 4 — Set a clear time frame for the situation.', mode: 'Pair' }, { question: 'Sentence 5 — Describe one practice as common or widespread.', mode: 'Pair' }, { question: 'Sentence 6 — Show how that practice affected two groups differently.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 7 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'mecca-b1-language-7-cause-inability',
      type: 'multiple-choice',
      title: 'Whose Idea Is It?',
      instructions: 'Read the sentence from Chapter 7. Then choose the best answer.',
      question: '“When Prophet Muhammad (as) started calling people to Islam, some rich leaders asked why Muhammad should be the leader while they were rich and important.” What does this reported question show?',
      options: [
        'The writer thinks that rich people should be leaders.',
        'The leaders wanted information about the Prophet’s life.',
        'The leaders were objecting: they thought money and status should decide who leads.',
        'The leaders agreed that Muhammad should be the leader.',
      ],
      correctAnswer: 2,
      explanation: '“Asked why …” reports a question, but here the question is really an objection. The words “while they were rich and important” show the leaders’ own view: wealth and status should give power. The writer reports this view; he does not agree with it. This fits the chapter’s picture of a society where wealth and tribe decided a person’s value.',
      feedback: {
        correct: 'Correct. The reported question shows the leaders’ objection, not the writer’s opinion.',
        incorrect: 'Look at who is asking and at the words “while they were rich and important”. Is this the writer speaking, or the leaders?',
      },
    },
    {
      id: 'mecca-b1-language-7-contrast',
      type: 'transformation',
      title: 'Contrast and Importance',
      instructions: 'Rewrite each sentence so that it keeps the same meaning. Use the start that is given.',
      question: 'Can you move a “while” contrast and say “the most important” in a different way?',
      transformItems: [
        {
          source: 'While the rich lived in luxury with gold plates and silver cups, the poor struggled to survive.',
          frame: 'The poor struggled to survive, [blank] in luxury with gold plates and silver cups.',
          answers: ['while the rich lived', 'whereas the rich lived', 'but the rich lived'],
        },
        {
          source: 'For the wealthy Quraysh, money and tribe were the most important values.',
          frame: 'For the wealthy Quraysh, nothing was more important than [blank].',
          answers: ['money and tribe', 'money and the tribe', 'money and their tribe', 'money and tribes'],
        },
      ],
      correctAnswer: null,
      explanation: '“While” can join two situations that exist at the same time and show how different they are. The “while” clause can come first or second. A superlative (“the most important”) can also be expressed with “nothing was more important than …”. Both forms help the writer show the values of one group very clearly.',
      feedback: {
        correct: 'Well done. You kept the contrast and the meaning of the superlative.',
        incorrect: 'Item 1: start the gap with “while” and describe the rich. Item 2: what did the wealthy Quraysh value most? Check the second paragraph of Chapter 7.',
      },
    },
    {
      id: 'mecca-b1-language-7-values-reported-view',
      type: 'word-bank',
      title: 'Why Debt Grew',
      instructions: 'Complete the lines from Chapter 7 with words from the bank. Two words are not needed.',
      question: 'Which words show inability, cause and a worse result?',
      fillBlanksText: 'Many people were in debt and [blank] pay back their debts [blank] high interest. Drinking and gambling were also common, and these habits often pushed people deeper [blank] debt.',
      wordBank: ['because', 'into', 'could not', 'because of', 'to'],
      correctAnswer: ['could not', 'because of', 'into'],
      explanation: '“Could not + verb” shows that people were unable to do something. “Because of” + noun phrase (high interest) gives the cause; “because” would need a subject and verb. “Push + person + into” shows movement into a worse situation, and “deeper” shows that the situation became more serious.',
      feedback: {
        correct: 'Correct. You showed the inability, its cause and the worsening result.',
        incorrect: 'Look at what follows each gap: a verb, a noun phrase, or the word “debt” after “deeper”. Then check the first paragraph of Chapter 7.',
      },
    },
    { id: 'mecca-b1-language-7-production', type: 'reflection', title: 'Describe Inequality Without Retelling the Story', instructions: 'Write or say six connected B1 sentences about a different school, workplace or community situation. Do not retell Chapter 7.', question: 'Can you explain a cause, describe inability, contrast two groups, state a group’s priorities and report one person’s objection?', correctAnswer: null, explanation: 'A strong response should connect ideas with language such as “because of...”, “could not...”, “while...”, “the most important...”, “when...”, and “asked why...” or a natural equivalent.', feedback: { correct: 'Keep the paragraph connected and use each form to express a real relationship between ideas.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Describe a difficult situation.', mode: 'Individual' }, { question: 'Sentence 2 — Explain one cause with “because of...”.', mode: 'Individual' }, { question: 'Sentence 3 — Show what one group could not do.', mode: 'Individual' }, { question: 'Sentence 4 — Contrast two groups with “while...”.', mode: 'Pair' }, { question: 'Sentence 5 — State what one group considered most important.', mode: 'Pair' }, { question: 'Sentence 6 — Report an objection with “asked why...”.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 8 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'mecca-b1-language-8-cause-purpose',
      type: 'matching',
      title: 'Words for Loyalty and Duty',
      instructions: 'Match each phrase from Chapter 8 with its meaning.',
      question: 'What do these phrases tell us about duties and pride in tribal life?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'highly proud of their ancestors', right: 'felt great honour because of their family line' },
        { left: 'They had to protect … their tribe', right: 'it was their duty to defend their group' },
        { left: 'in every situation', right: 'whatever happened, at all times' },
        { left: 'even when the tribe did something wrong', right: 'also in cases where their group was at fault' },
        { left: 'A person outside tribal protection', right: 'someone with no group to keep them safe' },
      ],
      correctAnswer: {
        'highly proud of their ancestors': 'felt great honour because of their family line',
        'They had to protect … their tribe': 'it was their duty to defend their group',
        'in every situation': 'whatever happened, at all times',
        'even when the tribe did something wrong': 'also in cases where their group was at fault',
        'A person outside tribal protection': 'someone with no group to keep them safe',
      },
      explanation: '“Had to” expresses a strong duty or obligation. “In every situation” makes the duty general. “Even when” adds a case where we would not expect the duty to continue; it shows how strong tribal loyalty was. “Outside” here means “not covered by” tribal protection.',
      feedback: {
        correct: 'Correct. You matched each phrase with its meaning in tribal life.',
        incorrect: 'Read the second and third paragraphs of Chapter 8 again. Replace each phrase with your answer and check that the sentence still makes sense.',
      },
    },
    {
      id: 'mecca-b1-language-8-protection',
      type: 'word-bank',
      title: 'Result, Reason, Purpose',
      instructions: 'Complete the lines from Chapter 8 with words from the bank. Two words are not needed.',
      question: 'Which word gives a result, which gives a reason, and which gives a purpose?',
      fillBlanksText: 'Life in the desert was very hard, [blank] physical strength was extremely important. Men were often seen as valuable [blank] they were fighters in wars. [blank] earn respect from other tribes, families wanted to have many sons.',
      wordBank: ['because', 'For', 'To', 'so', 'because of'],
      correctAnswer: ['so', 'because', 'To'],
      explanation: '“So” introduces a result (hard life → strength was important). “Because” + subject + verb gives a reason (why were men valued?). “To + verb” at the start of a sentence gives the purpose of the action that follows (why did families want many sons?). “For” and “because of” cannot be followed by a verb here.',
      feedback: {
        correct: 'Correct. You chose the right link for result, reason and purpose.',
        incorrect: 'For each gap, ask: is this a result, a reason, or the aim of an action? Then check the first two paragraphs of Chapter 8.',
      },
    },
    {
      id: 'mecca-b1-language-8-obligation-concession',
      type: 'transformation',
      title: '“Without” and “If”',
      instructions: 'Rewrite the sentence from Chapter 8 with “if”. Keep the same meaning.',
      question: 'How can a “without” phrase become an “if” clause?',
      transformItems: [
        {
          source: 'Without a tribe, people could not easily protect their lives or property.',
          frame: 'If people did not have a tribe, they [blank] their lives or property.',
          answers: ['could not easily protect', 'couldn’t easily protect', "couldn't easily protect", 'could not protect easily', 'were not able to easily protect', 'were not easily able to protect'],
        },
      ],
      correctAnswer: null,
      explanation: '“Without + noun” is a short way to express a condition: “without a tribe” = “if people did not have a tribe”. “Could not easily” shows limited ability: protection was very difficult, not simply impossible. That is why the next sentence says a person outside tribal protection was “in great danger”.',
      feedback: {
        correct: 'Well done. You turned the “without” phrase into a condition and kept the limited ability.',
        incorrect: 'Keep “could not” and the word “easily” in your answer. Check the second paragraph of Chapter 8.',
      },
    },
    { id: 'mecca-b1-language-8-production', type: 'reflection', title: 'Explain Rules, Support and Consequences', instructions: 'Write or say six connected B1 sentences about a different group, team, club or community. Do not retell Chapter 8.', question: 'Can you explain a difficult condition, give a reason and a purpose, show what people could not do without support, and describe one strong obligation with “even when”?', correctAnswer: null, explanation: 'A strong response should use connected language such as “so”, “because”, “to + verb”, “without...”, “could not...”, “had to...” and “even when...” where they fit naturally.', feedback: { correct: 'Keep the six sentences connected so each structure expresses a real relationship between ideas.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Describe a difficult condition.', mode: 'Individual' }, { question: 'Sentence 2 — Give one result with “so”.', mode: 'Individual' }, { question: 'Sentence 3 — Explain a reason with “because”.', mode: 'Individual' }, { question: 'Sentence 4 — State a purpose with “to + verb”.', mode: 'Pair' }, { question: 'Sentence 5 — Explain what people could not do without one kind of support.', mode: 'Pair' }, { question: 'Sentence 6 — State one obligation and add an “even when” contrast.', mode: 'Pair' } ] },
  ],
};
