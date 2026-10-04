import type { Exercise } from '../../../../types';

/** Moses B1 Chapters 9–13 Language Focus: Notice → Build → Use, every quoted line taken from the English chapter. */

/** Moses B1 Chapter 9 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'moses-b1-language-9-command-response',
      type: 'multiple-choice',
      title: 'What Does “Upon This” Mean?',
      instructions: 'Read the last sentence of Chapter 9. Then choose the best meaning.',
      question: 'After the message on the mountain, the chapter ends: “Upon this, Moses (pbuh) headed to Egypt.” What does “Upon this” mean here?',
      options: ['on top of this mountain', 'right after this, and because of it', 'before this happened', 'even though this happened'],
      correctAnswer: 1,
      explanation: '“Upon this” is a formal connector. It links an event with the action that follows it immediately, as a response. The message from Allah comes first, and heading to Egypt is Moses’s response. To “head to” a place means to go towards it.',
      feedback: {
        correct: 'Correct. “Upon this” shows an action that follows as a response.',
        incorrect: 'What had just happened before Moses went to Egypt? Read the last three sentences of Chapter 9.',
      },
    },
    {
      id: 'moses-b1-language-9-reported-mission',
      type: 'choose-form',
      title: 'Change, Mission and New Role',
      instructions: 'Choose the correct words for each sentence from Chapter 9.',
      question: 'What changed on the mountain, and what was Moses told to do?',
      formChoices: [
        {
          sentence: 'Moses put down his staff on the ground. It [choice] a big snake!',
          options: ['turned to be', 'turned into', 'was turning'],
          answer: 1,
        },
        {
          sentence: 'Allah told Moses [choice] to Egypt and show the Pharaoh the signs …',
          options: ['go', 'that go', 'to go'],
          answer: 2,
        },
        {
          sentence: 'After this message from Allah, Moses [choice] a Messenger of Allah, a prophet.',
          options: ['became', 'become', 'was becoming'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Turn into” shows a complete change from one thing into another. “Tell + person + to + base verb” reports an instruction without quoting it: Allah told Moses to go … and show … and warn …. “Became” marks a new role; “After this message” shows what came first.',
      feedback: {
        correct: 'Correct. You chose the forms for change, reported instruction and new role.',
        incorrect: 'Check the second half of Chapter 9: what happens to the staff, what Moses is told to do, and what he becomes.',
      },
    },
    {
      id: 'moses-b1-language-9-role-change',
      type: 'sequencing',
      title: 'On the Mountain',
      instructions: 'Put the parts of Chapter 9 in order. “Then” and “Once more” can help.',
      question: 'What did Allah say, and what did Moses do?',
      sequencingItems: [
        { id: '1', text: 'Moses climbed the mountain.' },
        { id: '2', text: 'In the silence he heard a thundering voice …' },
        { id: '3', text: 'Then Allah told Moses, “Put down your walking stick!”' },
        { id: '4', text: 'Moses put down his staff on the ground.' },
        { id: '5', text: 'Once more Allah spoke to Moses …' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: '“Then” and “Once more” show the order of Allah’s words. Each command is an imperative with no subject (“Put down …!”), and Moses’s action follows in the past simple (“put down”). This command → action → result pattern runs through the whole chapter.',
      feedback: {
        correct: 'Correct. You followed the scene from the voice to the command and Moses’s action.',
        incorrect: 'The voice comes before the command, and the command comes before Moses’s action. Which word shows that Allah spoke a second time?',
      },
    },
    {
      id: 'moses-b1-language-9-connected-production', type: 'reflection', title: 'Explain a New Responsibility', instructions: 'Write or say five sentences about someone who gets a new job or duty.', question: 'What is the person told to do, and what changes?', correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful language includes an imperative, “told + person + to...”, “After this...”, “became...”, and a final sentence showing the next action.', feedback: { correct: 'Keep the five sentences connected so the responsibility develops clearly from instruction to action.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Give an instruction: “Look after …”', mode: 'Individual' }, { question: 'Sentence 2 — Report it: “She told my friend to …”', mode: 'Individual' }, { question: 'Sentence 3 — Say what happened: “She did it, and soon …”', mode: 'Individual' }, { question: 'Sentence 4 — Show the new duty: “After this, she became …”', mode: 'Pair' }, { question: 'Sentence 5 — Say what she does now.', mode: 'Pair' }]
    }
  ]
};

/** Moses B1 Chapter 10 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter10: Record<number, Exercise[]> = { 10: [
  {
    id: 'moses-b1-language-10-effort-realization',
    type: 'multiple-choice',
    title: 'Only One Option Left',
    instructions: 'Read the sentence from Chapter 10. Then choose the best meaning.',
    question: '“Moses (pbuh) had no choice but to display the miracles.” What does “had no choice but to” mean?',
    options: ['He did not want to show the miracles, so he stopped.', 'He could choose from many different ways.', 'Showing the miracles was the only thing he could still do.', 'Someone else showed the miracles for him.'],
    correctAnswer: 2,
    explanation: '“Have no choice but to + base verb” means that the other options have failed, so only one action is left. The sentences before it explain why: talking and logical discussion did not work, and the Pharaoh went on refusing.',
    feedback: {
      correct: 'Correct. Only one option was left for Moses.',
      incorrect: 'Read the sentences just before this one in Chapter 10. Did Moses’s first way of convincing the Pharaoh work?',
    },
  },
  {
    id: 'moses-b1-language-10-action-result',
    type: 'sequencing',
    title: 'Action and Visible Result',
    instructions: 'Put the parts of Chapter 10 in order. “Then” and “When” can help.',
    question: 'What did Moses do, and what happened each time?',
    sequencingItems: [
      { id: '1', text: 'Moses (pbuh) got his staff and threw it on the ground.' },
      { id: '2', text: 'The staff turned into a big snake!' },
      { id: '3', text: 'Then he put his arm in his armpit.' },
      { id: '4', text: 'When he took his arm out, it was shining white!' },
      { id: '5', text: 'The king and his advisors laughed at him.' },
    ],
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'Each action is followed by its result. “Then” moves to the second action, and “When he took his arm out” links that action to the new state (it was shining white). The last sentence is a contrast: the signs were real miracles, but the king and his advisors only laughed.',
    feedback: {
      correct: 'Correct. You followed each action to its result and to the king’s reaction.',
      incorrect: 'An action comes before its result. Which sentence begins with “Then”, and which one begins with “When”? Check the end of Chapter 10.',
    },
  },
  {
    id: 'moses-b1-language-10-purpose-contrast',
    type: 'transformation',
    title: 'Effort, Repetition and Purpose',
    instructions: 'Write the missing words. Keep the same meaning.',
    question: 'How else can we say these lines from Chapter 10?',
    transformItems: [
      {
        source: 'After making every effort to convince him, Moses (pbuh) realized that logical discussions would not work.',
        frame: 'After he [blank] every effort to convince him, Moses (pbuh) realized that logical discussions would not work.',
        answers: ['had made', 'made'],
      },
      {
        source: 'The Pharaoh kept refusing to believe in Allah.',
        frame: 'The Pharaoh refused to believe in Allah again and [blank].',
        answers: ['again'],
      },
      {
        source: 'Allah gave them to Moses (pbuh) in order to help him against the Pharaoh.',
        frame: 'Allah gave them to Moses (pbuh) so that they [blank] help him against the Pharaoh.',
        answers: ['could', 'would', 'might'],
      },
    ],
    correctAnswer: null,
    explanation: '“After + -ing” can be expanded into a full clause: “After he had made every effort …”. “Keep + -ing” shows that an action happens again and again. “In order to + base verb” and “so that + subject + could/would” both express purpose.',
    feedback: {
      correct: 'Well done. You expressed the same ideas with new structures.',
      incorrect: 'Use the past form of “make” after “After he …”, think about what “kept refusing” says about how often he refused, and use a modal such as “could” after “so that they”.',
    },
  },
  { id:'moses-b1-language-10-connected-production', type:'reflection', title:'Explain a Change of Approach', instructions: 'Write or say five sentences about someone who tries a new way to solve a problem.', question: 'What did the person try first, and what did they do next?', correctAnswer:null, explanation:'Keep one situation throughout. Useful language includes “After making every effort...”, “realized that...”, “kept...”, “had no choice but to...”, “When...”, “turned into/became...”, and “in order to...”.', feedback:{correct:'Keep the five sentences connected so the change of approach is easy to follow.',incorrect:''}, discussionPrompts:[{ question: 'Sentence 1 — Say what they tried first: “We tried to …”',mode:'Individual'},{ question: 'Sentence 2 — Say what they understood: “… realized that …”',mode:'Individual'},{ question: 'Sentence 3 — Give the next step: “She had no choice but to …”',mode:'Individual'},{ question: 'Sentence 4 — Give the result: “When she …, everyone …”',mode:'Pair'},{ question: 'Sentence 5 — Say why: “She did it in order to …”',mode:'Pair'}]}
]};

/** Moses B1 Chapter 11 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter11: Record<number, Exercise[]> = { 11: [
  {
    id: 'moses-b1-language-11-sequence-result',
    type: 'true-false',
    title: 'Looked Like or Turned Into?',
    instructions: 'Read the sentence from Chapter 11. Is the statement true or false?',
    question: '“Once the sticks and ropes fell to the ground, they looked just like snakes!” This sentence tells us that the sticks and ropes really became snakes.',
    correctAnswer: false,
    explanation: '“Look (just) like” describes how something seems, not what it really is. The king himself calls it “only magic”. For Moses’s staff, the chapter uses a different verb: it “turned into a huge snake” – a real change. “Once” means “as soon as”: the sticks looked like snakes at the moment they fell.',
    feedback: { correct: 'Correct. The sticks only seemed to be snakes.', incorrect: 'Compare “looked just like snakes” with what happens to Moses’s staff later in Chapter 11.' },
  },
  {
    id: 'moses-b1-language-11-command-response',
    type: 'error-correction',
    title: 'Find and Fix the Mistake',
    instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
    question: 'Can you fix the sentences about the contest?',
    errorItems: [
      {
        sentence: 'The magicians which witnessed this miracle bowed down to Allah.',
        error: 'which',
        options: ['whose', 'who', 'what'],
        answer: 1,
      },
      {
        sentence: 'The Pharaoh did not want to let those who worshipped Allah to live.',
        error: 'to live',
        options: ['live', 'living', 'lived'],
        answer: 0,
      },
      {
        sentence: 'He told his advisors and soldiers, “Being rude to them!”',
        error: 'Being',
        options: ['Are', 'Be', 'To be'],
        answer: 1,
      },
    ],
    correctAnswer: null,
    explanation: '“Who” begins a relative clause about people: the magicians who witnessed this miracle. “Let + person + base verb” has no “to”: let them live. An order with “be” uses the base form at the start: “Be rude to them!”',
    feedback: {
      correct: 'Well done. You corrected the person clause, the “let” structure and the order.',
      incorrect: 'Compare each sentence with the second half of Chapter 11. Are the magicians people or things? Which verbs are followed by a base verb without “to”?',
    },
  },
  {
    id: 'moses-b1-language-11-witness-persistence-cause',
    type: 'word-bank',
    title: 'The King Does Not Change',
    instructions: 'Complete the lines from Chapter 11 with words from the bank. Three words are not needed.',
    question: 'Why did the king still refuse?',
    fillBlanksText: 'The king [blank] refused to believe in Allah, [blank] he was arrogant. … He continued [blank] Moses (pbuh) and his people day and night.',
    wordBank: ['already', 'because of', 'still', 'troubled', 'because', 'to trouble'],
    correctAnswer: ['still', 'because', 'to trouble'],
    explanation: '“Still” shows that the refusal continued even after the magicians believed. “Because” + a clause gives the reason (he was arrogant); “because of” would need a noun (because of his arrogance). “Continued to + base verb” shows an action going on over time.',
    feedback: {
      correct: 'Correct. You showed continuing refusal, its reason and a continuing action.',
      incorrect: 'The magicians changed, but did the king? Look at what follows each gap: a clause or a verb? Then check the end of Chapter 11.',
    },
  },
  {id:'moses-b1-language-11-connected-production',type:'reflection',title:'Describe a Turning Point',instructions: 'Write or say five sentences about a new idea that most people accept.',question: 'Who changes their mind, and who does not?',correctAnswer:null,explanation:'Useful language includes “Once...”, “When...”, a direct imperative, “turned into/became...”, “who...”, “still...”, “continued to...”, and “because...”.',feedback:{correct:'Keep the five sentences connected around one situation and make the cause of the continued resistance clear.',incorrect:''},discussionPrompts:[{ question: 'Sentence 1 — Give an instruction: “Try …”',mode:'Individual'},{ question: 'Sentence 2 — Show the result: “When they …, they …”',mode:'Individual'},{ question: 'Sentence 3 — Say who changed: “Most of the students …”',mode:'Individual'},{ question: 'Sentence 4 — Say who did not: “But one boy still …”',mode:'Pair'},{ question: 'Sentence 5 — Say why: “He did not change because …”',mode:'Pair'}]}
]};

/** Moses B1 Chapter 12 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter12: Record<number, Exercise[]> = { 12: [
  {
    id: 'moses-b1-language-12-plan-obligation',
    type: 'drag-drop',
    title: 'The Plan and the Rules',
    instructions: 'Is it the plan, or an instruction? Put each sentence in the right group.',
    question: 'What is the plan, and what are the rules?',
    dragDropGroups: [
      {
        group: 'The plan (what is going to happen)',
        items: ['We are going away from Egypt.', 'We will leave at night.'],
      },
      {
        group: 'Instructions and rules (what people must do or avoid)',
        items: ['Get ready for the journey.', 'But you must keep it secret.', 'Nobody should see us.'],
      },
    ],
    correctAnswer: {
      'The plan (what is going to happen)': ['We are going away from Egypt.', 'We will leave at night.'],
      'Instructions and rules (what people must do or avoid)': ['Get ready for the journey.', 'But you must keep it secret.', 'Nobody should see us.'],
    },
    explanation: 'Moses uses the present continuous (We are going away) and “will” (We will leave) for a plan that has already been decided. For the rules he uses an imperative (Get ready), “must” for a strong obligation, and “should” for what it is important to avoid.',
    feedback: {
      correct: 'Correct. You separated the plan from the instructions and rules.',
      incorrect: 'Ask: does the sentence say what will happen, or what the people must do or avoid? Look for “must”, “should” and a verb with no subject.',
    },
  },
  {
    id: 'moses-b1-language-12-inability-result',
    type: 'transformation',
    title: 'Cause, Result and Success',
    instructions: 'Write the missing words. Keep the same meaning.',
    question: 'How else can we say these lines from Chapter 12?',
    transformItems: [
      {
        source: 'The children and the old could not walk fast and got tired very quickly. That’s why the caravan moved slowly.',
        frame: 'The children and the old could not walk fast and got tired very quickly, [blank] the caravan moved slowly.',
        answers: ['so', 'and so', 'which is why', 'and that’s why', 'and that is why'],
      },
      {
        source: 'When the Pharaoh noticed that they had left the land, he prepared his huge army and easily managed to catch up with them.',
        frame: '… he prepared his huge army and easily succeeded in [blank] up with them.',
        answers: ['catching'],
      },
    ],
    correctAnswer: null,
    explanation: '“That’s why” and “so” both introduce a result. “Could not” shows a past inability, and that inability is the cause. “Manage to + base verb” means succeed in doing something difficult; after “succeed in”, use the -ing form.',
    feedback: {
      correct: 'Well done. You joined the cause to its result and expressed success in a new way.',
      incorrect: 'Which short word introduces a result in the middle of a sentence? Which verb form follows a preposition like “in”?',
    },
  },
  {
    id: 'moses-b1-language-12-time-pursuit-reassurance',
    type: 'matching',
    title: 'Words for the Chase',
    instructions: 'Match each word or phrase from Chapter 12 with its meaning.',
    question: 'What do these words tell us about the journey and the chase?',
    matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
    matchingPairs: [
      { left: 'caravan', right: 'a group of people travelling together' },
      { left: 'noticed', right: 'became aware of' },
      { left: 'catch up with', right: 'reach people who are ahead of you' },
      { left: 'panicked', right: 'suddenly became very afraid' },
      { left: 'Calm down!', right: 'Relax and stop worrying!' },
    ],
    correctAnswer: {
      caravan: 'a group of people travelling together',
      noticed: 'became aware of',
      'catch up with': 'reach people who are ahead of you',
      panicked: 'suddenly became very afraid',
      'Calm down!': 'Relax and stop worrying!',
    },
    explanation: 'The Pharaoh “noticed” (became aware) that the people had left, and his army could “catch up with” the slow “caravan”. When the people “panicked”, Moses answered with an imperative, “Calm down!”, and a promise with “will”: Allah “will show us the way to safety”.',
    feedback: {
      correct: 'Correct. These words carry the chase and the change from panic to calm.',
      incorrect: 'Find each word in Chapter 12 and use the sentence around it to work out its meaning.',
    },
  },
  {id:'moses-b1-language-12-connected-production',type:'reflection',title:'Explain a Difficult Group Plan',instructions: 'Write or say five sentences about a group trip with a problem.',question: 'What is the plan, and how does the leader help?',correctAnswer:null,explanation:'Useful language includes an imperative, “must/should”, “could not”, “That’s why...”, “When...”, “managed to...”, and “will...”.',feedback:{correct:'Keep the sentences connected around one situation and make the final reassurance respond naturally to the problem.',incorrect:''},discussionPrompts:[{ question: 'Sentence 1 — Give the plan: “Get ready. We are going to …”',mode:'Individual'},{ question: 'Sentence 2 — Give a rule: “You must … / Nobody should …”',mode:'Individual'},{ question: 'Sentence 3 — Give a problem and result: “… could not …. That’s why …”',mode:'Individual'},{ question: 'Sentence 4 — Say who followed: “When …, they managed to …”',mode:'Pair'},{ question: 'Sentence 5 — Calm the group: “I am with you, and I will …”',mode:'Pair'}]}
]};

/** Moses B1 Chapter 13 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter13: Record<number, Exercise[]> = { 13: [
  {
    id: 'moses-b1-language-13-command-event-result',
    type: 'true-false',
    title: 'One Moment or Every Time?',
    instructions: 'Read the two uses of “when” from Chapter 13. Is the statement true or false?',
    question: 'At the end of Chapter 13 we read, “… when we pray to Him, He always guides us on the right path.” Here “when” describes one moment in the story, just like “When the stick touched the waters of the sea”.',
    correctAnswer: false,
    explanation: 'With the present simple and “always”, “when” means “every time”: it states a general truth (when we pray, He guides us). With the past simple, “when” marks one moment in the story that triggers the next event: when the stick touched the water, a miracle happened.',
    feedback: {
      correct: 'Correct. The last “when” states a general truth, not one moment in the story.',
      incorrect: 'Compare the tenses: “touched” (past simple) and “pray … guides” (present simple with “always”). Which one is about every time?',
    },
  },
  {
    id: 'moses-b1-language-13-time-change-consequence',
    type: 'sequencing',
    title: 'Through the Sea',
    instructions: 'Put the parts of Chapter 13 in the right order.',
    question: 'What happened at the sea, from start to end?',
    sequencingItems: [
      { id: '1', text: 'He told Moses (pbuh), “Hit the sea with your stick!”' },
      { id: '2', text: 'When the stick touched the waters of the sea, a miracle happened!' },
      { id: '3', text: 'Allah made a path for them across the sea!' },
      { id: '4', text: 'Moses (pbuh) and his people safely walked between the walls of water.' },
      { id: '5', text: 'They entered the parted waters and when they were midway, Allah ordered the sea to close.' },
      { id: '6', text: 'The sea closed over them, and they drowned.' },
    ],
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The command comes first; “When the stick touched …” marks the moment that triggers the miracle. The path is the result, and Moses’s people use it. “When they were midway” marks a second key moment, and “Allah ordered the sea to close” reports an order (order + object + to + base verb). The last sentence gives the final consequence.',
    feedback: {
      correct: 'Correct. You followed the command, the two “when” moments and the final consequence.',
      incorrect: 'Start with the command. Moses’s people cross before the Pharaoh’s army enters the water. Check the first paragraph of Chapter 13.',
    },
  },
  {
    id: 'moses-b1-language-13-purpose-general-lesson',
    type: 'word-bank',
    title: 'From Story to Lesson',
    instructions: 'Complete the last lines of Chapter 13. Three words in the bank are extra.',
    question: 'What lesson does the story teach?',
    fillBlanksText: 'The story of Moses (pbuh) has many lessons for us [blank]. It again reminds us [blank] no one can enslave another human being. … Allah sent prophets [blank] show people a better life.',
    wordBank: ['learning', 'to learn', 'what', 'that', 'for', 'to'],
    correctAnswer: ['to learn', 'that', 'to'],
    explanation: '“Lessons for us to learn” uses “to + base verb” after a noun to say what we should do with the lessons. “Remind someone that + clause” introduces a general truth drawn from the story. “Sent prophets to show …” uses “to + base verb” for purpose. “For show” is not possible.',
    feedback: {
      correct: 'Correct. You moved from the events to the lessons and their purpose.',
      incorrect: 'Look at what follows each gap: a full clause after “reminds us”, and a base verb after the last gap. Check the last paragraph of Chapter 13.',
    },
  },
  {id:'moses-b1-language-13-connected-production',type:'reflection',title:'From Event to Lesson',instructions: 'Write or say five sentences about an event and the lesson it teaches.',question: 'What happened, and what did you learn?',correctAnswer:null,explanation:'Useful language includes an imperative, “When...”, a clear result clause, “to + verb” for purpose, and “This reminds us that...” or “This shows that...”.',feedback:{correct:'Keep one clear situation and make the final lesson grow naturally from the earlier events.',incorrect:''},discussionPrompts:[{ question: 'Sentence 1 — Give an instruction: “Clean …”',mode:'Individual'},{ question: 'Sentence 2 — Say what happened: “When we started, …”',mode:'Individual'},{ question: 'Sentence 3 — Give the result: “As a result, …”',mode:'Individual'},{ question: 'Sentence 4 — Say what for: “We used … to …”',mode:'Pair'},{ question: 'Sentence 5 — Give the lesson: “This reminds us that …”',mode:'Pair'}]}
]};
