import type { Exercise } from '../../../../types';

export const adamB1LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'adam-b1-language-8-future-necessity-purpose-addition',
      type: 'drag-drop',
      title: 'Why, With What, How Long?',
      instructions: 'Does it say why, with what, or how long? Put each part in the right group.',
      question: 'What does each phrase tell us: why, with what, or how long?',
      dragDropGroups: [
        {
          group: 'Why? (purpose)',
          items: [
            '… use land to grow crops and keep animals.',
            '… build buildings for shelter …',
            '… work hard to keep themselves alive.',
          ],
        },
        {
          group: 'With what? (means)',
          items: [
            '… protect themselves with clothes and weapons …',
          ],
        },
        {
          group: 'How long? (time)',
          items: [
            'Adam (pbuh) and Eve lived on earth for many years.',
          ],
        },
      ],
      correctAnswer: {
        'Why? (purpose)': [
          '… use land to grow crops and keep animals.',
          '… build buildings for shelter …',
          '… work hard to keep themselves alive.',
        ],
        'With what? (means)': [
          '… protect themselves with clothes and weapons …',
        ],
        'How long? (time)': [
          'Adam (pbuh) and Eve lived on earth for many years.',
        ],
      },
      explanation: '“To + verb” (to grow, to keep) gives the purpose of an action. “For + noun” can also give a purpose (for shelter), but “for + a period of time” (for many years) tells us how long. “With + noun” (with clothes and weapons) tells us what people used to do something.',
      feedback: {
        correct: 'Correct. You noticed that “for” can show a purpose or a length of time.',
        incorrect: 'Ask a question about each phrase: Why did they do it? What did they use? How long did it last? Notice that “shelter” is a purpose, but “many years” is a time.',
      },
    },
    {
      id: 'adam-b1-language-8-means-cause-duration-contrast',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about life on earth and Iblis?',
      errorItems: [
        {
          sentence: 'They will use land to grow crops and keep animals.',
          error: 'will',
          options: ['must', 'would', 'are going to'],
          answer: 1,
        },
        {
          sentence: 'On earth, they had to struggle for survive and work hard to keep themselves alive.',
          error: 'for survive',
          options: ['to survive', 'for surviving to', 'to surviving'],
          answer: 0,
        },
        {
          sentence: 'He was still there because he wanted people don’t remember Allah.',
          error: 'people don’t remember',
          options: ['people not remember', 'people to don’t remember', 'people not to remember'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'The story is told in the past, so a role that was still ahead of Adam and Eve is described with “would + verb”, not “will”. Purpose is “to + verb” (to survive), not “for + verb”. In the negative, “want + person + to” becomes “want + person + not to + verb”: he wanted people not to remember Allah.',
      feedback: {
        correct: 'Well done. You fixed “would”, the purpose infinitive and the negative “want” pattern.',
        incorrect: 'Compare each sentence with Chapter 8: the first sentence of the chapter, the second paragraph, and the sentence about Iblis in the third paragraph.',
      },
    },
    {
      id: 'adam-b1-language-8-connect-a-survival-account',
      type: 'word-bank',
      title: 'Necessity and Addition',
      instructions: 'Complete the lines from Chapter 8 with words from the bank. Three words are not needed.',
      question: 'Which word adds more, which shows a need, and which joins two things?',
      fillBlanksText: '[blank], they [blank] protect themselves with clothes and weapons and protect themselves from dangers in the wild. … They had [blank] good and difficult times and they had many children.',
      wordBank: ['In addition', 'had to', 'both', 'However', 'must', 'either'],
      correctAnswer: ['In addition', 'had to', 'both'],
      explanation: '“In addition” adds another point of the same kind: One more thing they needed to do. “Had to + verb” is the past of “must” when it means necessity; “must” is not used for the past. “Both … and …” joins two things and says that each one is true: Their life had good times and difficult times.',
      feedback: {
        correct: 'Correct. You added a need, showed past necessity and joined two experiences.',
        incorrect: 'Read the second and third paragraphs of Chapter 8. Does the first sentence add or contrast? Is the story in the past? Which word goes with “… and …”?',
      },
    },
    {
      id: 'adam-b1-language-8-build-new-responsibility-account', type: 'reflection', title: 'Build a New Responsibility Account', instructions: 'Write or say four sentences about people starting life in a hard new place.', question: 'What do the people have to do in their new place?', correctAnswer: null,
      explanation: 'A strong response may use “would + verb” for an expected role, “had to + verb” for necessity, “to + verb” for purpose, “in addition” to add another demand, “with + noun” for means, “because + clause” for cause, or “for + period” for duration.', feedback: { correct: 'Keep the four sentences connected so the role, necessity, purpose, and reason form one coherent account.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Say what the people would do: “They would …”', mode: 'Individual' }, { question: 'Sentence 2 — Say what they had to do and why: “They had to … to …”', mode: 'Individual' }, { question: 'Sentence 3 — Add more: “In addition, …” and “with + thing”', mode: 'Individual' }, { question: 'Sentence 4 — Give a reason: “because …” and how long: “for …”', mode: 'Pair' }],
    },
  ],
};

export const adamB1LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  9: [
    {
      id: 'adam-b1-language-9-time-change-continuation',
      type: 'true-false',
      title: 'Stopped Doing or Stopped to Do?',
      instructions: 'Read the sentence from Chapter 9. Then decide: True or false?',
      question: '“Allah never stopped sending messengers and sacred texts to remind people of Him.” True or false: This means the same as “Allah never stopped to send messengers.”',
      correctAnswer: false,
      explanation: '“Stop + -ing” means that an activity ends: “never stopped sending” means the sending went on and never ended. “Stop + to + verb” means to pause one activity in order to do something else. So the two sentences have different meanings, and only “never stopped sending” fits the chapter.',
      feedback: {
        correct: 'Correct. “Never stopped sending” means the sending continued all the time.',
        incorrect: 'Compare “I stopped eating” (I ended the activity) with “I stopped to eat” (I paused something else in order to eat). Which one matches the chapter’s meaning?',
      },
    },
    {
      id: 'adam-b1-language-9-teaching-purpose-direction',
      type: 'sequencing',
      title: 'Follow the Time Markers',
      instructions: 'Put the parts of Chapter 9 in order. The time words can help.',
      question: 'What happened before and after Adam (pbuh) became a Messenger?',
      sequencingItems: [
        { id: 'a', text: 'At that time, there was no community.' },
        { id: 'b', text: 'After a period of time, when a community formed, Adam (pbuh) became the first Messenger of Allah.' },
        { id: 'c', text: 'Thus, he became the first human, the first father, and the first messenger of Islam.' },
        { id: 'd', text: 'Years later, after the death of Adam (pbuh), Allah sent many other messengers …' },
      ],
      correctAnswer: ['a', 'b', 'c', 'd'],
      explanation: '“At that time” describes the situation at the start. “After a period of time, when …” moves to a later stage, and “became” shows Adam’s new role. “Thus” draws a conclusion from what came before. “Years later, after the death of …” jumps forward to a much later time.',
      feedback: {
        correct: 'Correct. The time markers lead you through the stages of the chapter.',
        incorrect: 'Look at the first words of each part. Which describes the starting situation, which a later stage, which a conclusion, and which a time long after?',
      },
    },
    {
      id: 'adam-b1-language-9-connect-time-purpose-result',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about teaching people?',
      errorItems: [
        {
          sentence: 'He started teaching people live righteously and act honestly.',
          error: 'people live',
          options: ['people living', 'people to live', 'to people live'],
          answer: 1,
        },
        {
          sentence: '… Allah sent many other messengers for show people the right path and the ways to stay away from Iblis.',
          error: 'for show',
          options: ['to show', 'for showing to', 'to showing'],
          answer: 0,
        },
        {
          sentence: 'They wanted people to keep Allah in their minds because if people will forget Allah, they lose the meaning and purpose of life.',
          error: 'will forget',
          options: ['would forget', 'forgot', 'forget'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Teach + person + to + verb” says what someone learns to do: teaching people to live righteously. “To + verb” after an action gives its purpose: messengers were sent to show the right path. In an if-clause about something that is generally true, use the present simple, not “will”: “if people forget Allah, they lose …”.',
      feedback: {
        correct: 'Well done. You fixed the teaching pattern, the purpose and the if-clause.',
        incorrect: 'Compare each sentence with Chapter 9: the first paragraph, and the last paragraph that begins “Years later …”.',
      },
    },
    {
      id: 'adam-b1-language-9-build-guidance-paragraph', type: 'reflection', title: 'Build a Guidance Paragraph', instructions: 'Write or say four sentences about someone who starts to lead a group.', question: 'How does the new leader guide the group?', correctAnswer: null,
      explanation: 'A strong response may use “after ... / when ...”, “became ...”, “started teaching ... to ...”, “never stopped + -ing”, “to + verb” for purpose, “wanted + person + to ...”, or “if + present, present” for a general result.', feedback: { correct: 'Keep the four sentences connected so the role change, teaching, purpose, and result form one coherent paragraph.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Give the new role: “After …, … became …”', mode: 'Individual' }, { question: 'Sentence 2 — Say what they taught: “… started teaching … to …”', mode: 'Individual' }, { question: 'Sentence 3 — Say what they wanted: “… wanted everyone to …”', mode: 'Individual' }, { question: 'Sentence 4 — Say what went on: “… never stopped + -ing” or “If …, …”', mode: 'Pair' }],
    },
  ],
};

export const adamB1LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'adam-b1-language-10-growth-role-habit',
      type: 'matching',
      title: 'What Do These Phrases Mean?',
      instructions: 'Match each phrase from Chapter 10 with its meaning.',
      question: 'What do these phrases tell us about the two brothers?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'grew up to be', right: 'developed into, as they got older' },
        { left: 'mostly jealous', right: 'usually unhappy when others had good things' },
        { left: 'a serious disagreement', right: 'a big argument' },
        { left: 'just a handful of', right: 'only a small amount of' },
      ],
      correctAnswer: {
        'grew up to be': 'developed into, as they got older',
        'mostly jealous': 'usually unhappy when others had good things',
        'a serious disagreement': 'a big argument',
        'just a handful of': 'only a small amount of',
      },
      explanation: '“Grow up to be + description” tells us what a child became as an adult. “Mostly” means “most of the time”. “Just” in “just a handful of” means “only” and makes the amount sound small, which contrasts with Habil’s “best and healthiest sheep”.',
      feedback: {
        correct: 'Correct. These phrases help the chapter describe and contrast the brothers.',
        incorrect: 'Read Chapter 10 again and use the words around each phrase. For example, what does “just” add before “a handful of his crops that were not very valuable”?',
      },
    },
    {
      id: 'adam-b1-language-10-contrast-purpose-obligation',
      type: 'choose-form',
      title: 'Roles, Obligation and the Best Gift',
      instructions: 'Choose the correct form to complete each sentence from Chapter 10.',
      question: 'Which words show a new job, what they had to do, and the best?',
      formChoices: [
        {
          sentence: 'When they grew up, Habil [choice] a shepherd.',
          options: ['become', 'became', 'was becoming'],
          answer: 1,
        },
        {
          sentence: 'To solve the problem, they [choice] make an offering to Allah.',
          options: ['must', 'have to', 'had to'],
          answer: 2,
        },
        {
          sentence: 'Habil brought his [choice] and healthiest sheep as a gift for Allah, …',
          options: ['best', 'better', 'most good'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Become” is irregular: become – became – become, so the past simple is “became”. “Had to” is the past form for a necessary action; “must” is not used for the past. “Good – better – best”: “best” is the superlative, and it matches “healthiest” in the same phrase.',
      feedback: {
        correct: 'Correct. You chose the past form, the past obligation and the superlative.',
        incorrect: 'Check Chapter 10: the story is in the past, and “best” goes together with “healthiest”.',
      },
    },
    {
      id: 'adam-b1-language-10-build-connected-comparison',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about Habil and Qabil?',
      errorItems: [
        {
          sentence: 'Habil was kind, gentle and loved take care of animals.',
          error: 'loved take',
          options: ['loved to taking', 'loved taking', 'love taking'],
          answer: 1,
        },
        {
          sentence: '… as a gift for Allah, and Qabil brought just a handful of his crops that were not very valuable.',
          error: 'and Qabil',
          options: ['but Qabil', 'so Qabil', 'because Qabil'],
          answer: 0,
        },
        {
          sentence: 'Qabil didn’t care about please Allah and his father Adam (pbuh).',
          error: 'please',
          options: ['to please', 'pleasing', 'pleased'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: '“Love” can be followed by -ing (or to + verb), so “loved taking care of animals” is correct. “But” shows the contrast between the two gifts: Habil’s best sheep and Qabil’s crops that were not very valuable. After a preposition such as “about”, use the -ing form: “care about pleasing”.',
      feedback: {
        correct: 'Well done. You fixed the verb patterns and the contrast.',
        incorrect: 'Compare each sentence with Chapter 10. Remember: after a preposition (about, of, in) the verb takes -ing.',
      },
    },
    {
      id: 'adam-b1-language-10-compare-two-choices', type: 'reflection', title: 'Compare Two Choices', instructions: 'Write or say four sentences about two people who do the same job differently.', question: 'How are the two people different?', correctAnswer: null,
      explanation: 'A strong response may use “when ... grew up”, “became ...”, “to + verb” for purpose, “had to ...”, “but/while/however” for contrast, “didn’t care about + -ing”, and a pattern such as “real responsibility is + -ing ...” to express a general principle.', feedback: { correct: 'Keep the four sentences connected so the contrast grows naturally from the shared task.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Name the two people and their role: “When …, … became …”', mode: 'Individual' }, { question: 'Sentence 2 — Say what they had to do and why: “To …, they had to …”', mode: 'Individual' }, { question: 'Sentence 3 — Show the difference: “…, while …” or “… but …”', mode: 'Individual' }, { question: 'Sentence 4 — Give a lesson: “Real … is + -ing …”', mode: 'Pair' }],
    },
  ],
};

export const adamB1LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  11: [
    {
      id: 'adam-b1-language-11-cause-threat-refusal',
      type: 'drag-drop',
      title: 'Future, Past or Now?',
      instructions: 'Future, past or now? Put each spoken line in the right group.',
      question: 'Is each line about the future, the past or now?',
      dragDropGroups: [
        {
          group: 'The future: A threat or a refusal',
          items: ['“I will kill you.”', '“I won’t fight back and harm you.”'],
        },
        {
          group: 'The past: Admitting what he did',
          items: ['“I killed my brother.”', '“I did the worst thing in life.”'],
        },
        {
          group: 'Now: A present judgment or inability',
          items: ['“I am worse than this raven.”', '“I cannot hide my brother’s dead body.”'],
        },
      ],
      correctAnswer: {
        'The future: A threat or a refusal': ['“I will kill you.”', '“I won’t fight back and harm you.”'],
        'The past: Admitting what he did': ['“I killed my brother.”', '“I did the worst thing in life.”'],
        'Now: A present judgment or inability': ['“I am worse than this raven.”', '“I cannot hide my brother’s dead body.”'],
      },
      explanation: '“Will” and “won’t” look to the future: Here “will” is a threat and “won’t” is a firm refusal. The past simple (killed, did) admits finished actions. The present (am, cannot) describes how Qabil sees himself and what he is unable to do at that moment. “Worst” compares with everything (the superlative); “worse than” compares two things.',
      feedback: {
        correct: 'Correct. You connected each verb form with the time it talks about.',
        incorrect: 'Look at the verb in each quotation: will / won’t, killed / did, or am / cannot. Which time does each one point to?',
      },
    },
    {
      id: 'adam-b1-language-11-regret-indirect-question',
      type: 'choose-form',
      title: 'Reason, Beginning and Guidance',
      instructions: 'Choose the correct form to complete each sentence from Chapter 11.',
      question: 'Which word gives a reason, and which words come after “started” and “the way”?',
      formChoices: [
        {
          sentence: 'Allah accepted Habil’s offering [choice] he gave from his heart.',
          options: ['because of', 'because', 'so'],
          answer: 1,
        },
        {
          sentence: 'He also started [choice].',
          options: ['panic', 'panicked', 'to panic'],
          answer: 2,
        },
        {
          sentence: 'It showed Qabil the way [choice] his brother’s dead body in the pit.',
          options: ['to put', 'putting', 'for put'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Because” is followed by a full clause (he gave from his heart); “because of” needs a noun. “Start + to + verb” (or -ing) shows the beginning of a feeling or action. “Show someone the way to + verb” explains how to do something: the raven showed Qabil how to put the body in the ground.',
      feedback: {
        correct: 'Correct. You chose the reason word, the verb pattern after “started” and the guidance pattern.',
        incorrect: 'Check Chapter 11. Is a full clause or a noun after the reason word? After “started”, the verb does not take the past form.',
      },
    },
    {
      id: 'adam-b1-language-11-process-and-guidance',
      type: 'transformation',
      title: 'Report What Qabil Said',
      instructions: 'Report Qabil’s words. Write the missing words.',
      question: 'What did Qabil admit, and what did he not know?',
      transformItems: [
        {
          source: 'He said, “I killed my brother. …”',
          frame: 'Qabil admitted that he [blank] his brother.',
          answers: ['had killed', 'killed'],
        },
        {
          source: '“Now I don’t know what I should do with his dead body.”',
          frame: 'Qabil did not know [blank] with his brother’s dead body.',
          answers: ['what he should do', 'what to do', 'what he could do'],
        },
      ],
      correctAnswer: null,
      explanation: 'When we report words after a past verb (admitted, did not know), a finished past action can move back to the past perfect: “he had killed”. Inside a sentence, a question word is followed by normal statement order: “what he should do”, not “what should he do”. “What to do” is a shorter way to say the same thing.',
      feedback: {
        correct: 'Well done. You reported the admission and the uncertainty correctly.',
        incorrect: 'Item 1: change “I” to “he” and move “killed” back in time. Item 2: after “what”, put the subject before “should”.',
      },
    },
    {
      id: 'adam-b1-language-11-reflect-and-revise', type: 'reflection', title: 'From a Bad Choice to a Better Next Step', instructions: 'Write or say four sentences about someone who makes a serious mistake.', question: 'What did the person do wrong, and what did they do next?', correctAnswer: null,
      explanation: 'A strong response may use “because ...”, “I will ... / I won’t ...”, “when ...”, “started + -ing”, “I don’t know what I should ...”, “showed ... the way to ...”, “worse/better than ...”, or “cannot ...”. Keep the sentences connected around one new situation rather than retelling Chapter 11.', feedback: { correct: 'Keep the response coherent: Show the choice, the reaction, the uncertainty, and the next step.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Say what happened and why: “… because …”', mode: 'Individual' }, { question: 'Sentence 2 — Make a strong promise: “I will …” or “I won’t …”', mode: 'Individual' }, { question: 'Sentence 3 — Show they are not sure: “I don’t know what I should …”', mode: 'Individual' }, { question: 'Sentence 4 — Say what they learned: “… guided him to …” or “… is better than …”', mode: 'Pair' }],
    },
  ],
};

export const adamB1LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  12: [
    {
      id: 'adam-b1-language-12-stance-obligation-continuity',
      type: 'multiple-choice',
      title: 'What Is This Sentence Doing?',
      instructions: 'Read the sentence from Chapter 12. Then choose the best answer.',
      question: '“The story suggests that true believers should stay away from jealousy and control their anger.” What does this sentence do?',
      options: [
        'It reports a rule that Adam gave to his sons.',
        'It describes what true believers did on that day.',
        'It says that anger is impossible to control.',
        'It gives advice that the writer takes from the story.',
      ],
      correctAnswer: 3,
      explanation: '“The story suggests that …” introduces an interpretation: A lesson the writer draws from the events, not an event itself. “Should + verb” gives advice about the right way to act. Together they turn the story of the two brothers into a recommendation for readers today.',
      feedback: {
        correct: 'Correct. “Suggests that” gives the writer’s interpretation, and “should” gives advice.',
        incorrect: 'Look at the subject: “The story” suggests something. Is this an event in the story, or a lesson taken from it? What does “should” usually express?',
      },
    },
    {
      id: 'adam-b1-language-12-time-and-parallel-purpose',
      type: 'word-bank',
      title: 'Necessity, Time and Continuity',
      instructions: 'Complete the lines from Chapter 12 with words from the bank. Three words are not needed.',
      question: 'Which word shows a need, which shows time passing, and which means “even now”?',
      fillBlanksText: 'But as a prophet and the father of his other children, Adam (pbuh) [blank] continue his life. He got old [blank] the years. … He sent His prophets, and their stories [blank] guide us.',
      wordBank: ['had to', 'over', 'still', 'must', 'since', 'yet'],
      correctAnswer: ['had to', 'over', 'still'],
      explanation: '“Had to” shows what was necessary in the past because of Adam’s role (as a prophet and a father). “Over the years” shows slow change across a long period. “Still” (before the main verb) shows that something continues now and has not stopped: the prophets’ stories guide us today.',
      feedback: {
        correct: 'Correct. You showed past necessity, change over time and continuity.',
        incorrect: 'Read Chapter 12 again. Is the first sentence about the past? Which word goes with “the years”? Which word shows that the guidance continues today?',
      },
    },
    {
      id: 'adam-b1-language-12-coherent-legacy-passage',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about the story’s message?',
      errorItems: [
        {
          sentence: 'It also teaches people the importance of admit mistakes and turning back to Allah.',
          error: 'admit',
          options: ['to admit', 'admitted', 'admitting'],
          answer: 2,
        },
        {
          sentence: '… calls upon people to turn away from Satan’s tricks and jealousy, to do good, and avoiding evil.',
          error: 'avoiding',
          options: ['to avoid', 'avoided', 'of avoiding'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After a preposition such as “of”, use the -ing form, and keep both actions the same: “the importance of admitting … and turning back …”. In a list, the items should be parallel (the same form): “to turn away …, to do good, and to avoid evil”.',
      feedback: {
        correct: 'Well done. You made the verb forms match in each sentence.',
        incorrect: 'Look at the other verb in each list: “turning back” in the first sentence, and “to turn away … to do good” in the second. Make the wrong verb match them.',
      },
    },
    {
      id: 'adam-b1-language-12-reflect-and-transfer', type: 'reflection', title: 'A Lesson That Remains Useful', instructions: 'Write or say four sentences about someone whose life teaches a useful lesson.', question: 'What did the person do, and what can we learn?', correctAnswer: null,
      explanation: 'A strong response may use “As a/an ..., ... had to ...”, “over the years ...”, “still ...”, “never ...”, “the story/experience suggests that ... should ...”, or “the importance of + -ing”. Keep the four sentences connected around one new situation.', feedback: { correct: 'Keep the response coherent: past role, development, continuing influence, and present lesson.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Give the role and a past duty: “As a …, she had to …”', mode: 'Individual' }, { question: 'Sentence 2 — Show a change: “Over the years, …”', mode: 'Individual' }, { question: 'Sentence 3 — Say what still matters now: “… still …”', mode: 'Individual' }, { question: 'Sentence 4 — Give the lesson: “… shows the importance of + -ing” or “… suggests that we should …”', mode: 'Pair' }],
    },
  ],
};
