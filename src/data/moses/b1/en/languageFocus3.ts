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
      instructions: 'Choose the correct form to complete each sentence from Chapter 9.',
      question: 'Which forms show a complete change, a reported instruction and a new role?',
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
      instructions: 'Put the parts of Chapter 9 in the right order. Use “Then” and “Once more” to help you.',
      question: 'How does the chapter move from Allah’s words to Moses’s action?',
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
      id: 'moses-b1-language-9-connected-production', type: 'reflection', title: 'Explain a New Responsibility', instructions: 'Write or say five connected B1 sentences about someone who receives instructions, carries them out, takes on a new responsibility, and then begins a new task. Do not retell the chapter.', question: 'Can you connect direct instruction, reported instruction, change of role and next action naturally?', correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful language includes an imperative, “told + person + to...”, “After this...”, “became...”, and a final sentence showing the next action.', feedback: { correct: 'Keep the five sentences connected so the responsibility develops clearly from instruction to action.', incorrect: '' },
      discussionPrompts: [{ question: 'Sentence 1 — Give a short direct instruction with an imperative.', mode: 'Individual' }, { question: 'Sentence 2 — Report the instruction using “told + person + to + verb”.', mode: 'Individual' }, { question: 'Sentence 3 — Show that the instruction was carried out and had a result.', mode: 'Individual' }, { question: 'Sentence 4 — Use “After this...” and “became...” to show a new role or responsibility.', mode: 'Pair' }, { question: 'Sentence 5 — Show the next action that follows from that responsibility.', mode: 'Pair' }]
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
    instructions: 'Put the parts of Chapter 10 in the right order. Use “Then” and “When” to help you.',
    question: 'How does the chapter connect Moses’s actions with the changes that follow?',
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
    instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 10. Type the missing word or words.',
    question: 'How can we express effort, repeated refusal and purpose in another way?',
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
  { id:'moses-b1-language-10-connected-production', type:'reflection', title:'Explain a Change of Approach', instructions:'Write or say five connected B1 sentences about a person who first tries one solution, realizes it is not working, chooses another action, sees a result, and explains the purpose of that action. Do not retell the chapter.', question:'Can you connect effort, realization, necessity, result and purpose in one short explanation?', correctAnswer:null, explanation:'Keep one situation throughout. Useful language includes “After making every effort...”, “realized that...”, “kept...”, “had no choice but to...”, “When...”, “turned into/became...”, and “in order to...”.', feedback:{correct:'Keep the five sentences connected so the change of approach is easy to follow.',incorrect:''}, discussionPrompts:[{question:'Sentence 1 — Describe the first solution and the effort made.',mode:'Individual'},{question:'Sentence 2 — Use “realized that...” to explain why the first approach was not working.',mode:'Individual'},{question:'Sentence 3 — Use “had no choice but to...” or another natural necessity expression for the next step.',mode:'Individual'},{question:'Sentence 4 — Use “When...” or a sequence marker to show the result of the new action.',mode:'Pair'},{question:'Sentence 5 — Use “in order to...” to explain the purpose of the new action.',mode:'Pair'}]}
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
    instructions: 'Each sentence from Chapter 11 has one mistake. Tap the wrong word or phrase, then choose the correction.',
    question: 'Can you correct a person clause, a “let” structure and an order?',
    errorItems: [
      {
        sentence: 'The magicians which witnessed this miracle bowed down in front of Moses (pbuh).',
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
    question: 'Which words show that the refusal continued, give its reason and show an action going on over time?',
    fillBlanksText: 'The king [blank] refused to believe in Allah, [blank] he was arrogant. … He continued [blank] Moses (pbuh) and his people day and night.',
    wordBank: ['already', 'because of', 'still', 'troubled', 'because', 'to trouble'],
    correctAnswer: ['still', 'because', 'to trouble'],
    explanation: '“Still” shows that the refusal continued even after the magicians believed. “Because” + a clause gives the reason (he was arrogant); “because of” would need a noun (because of his arrogance). “Continued to + base verb” shows an action going on over time.',
    feedback: {
      correct: 'Correct. You showed continuing refusal, its reason and a continuing action.',
      incorrect: 'The magicians changed, but did the king? Look at what follows each gap: a clause or a verb? Then check the end of Chapter 11.',
    },
  },
  {id:'moses-b1-language-11-connected-production',type:'reflection',title:'Describe a Turning Point',instructions:'Write or say five connected B1 sentences about a non-story situation in which an instruction leads to an action, the action produces a result, one group changes its view, and another person keeps resisting. Do not retell the chapter.',question:'Can you connect command, action, result, changed response, and continued resistance in one short paragraph?',correctAnswer:null,explanation:'Useful language includes “Once...”, “When...”, a direct imperative, “turned into/became...”, “who...”, “still...”, “continued to...”, and “because...”.',feedback:{correct:'Keep the five sentences connected around one situation and make the cause of the continued resistance clear.',incorrect:''},discussionPrompts:[{question:'Sentence 1 — Give a direct instruction.',mode:'Individual'},{question:'Sentence 2 — Show the action and use “Once...” or “When...” to connect it with the result.',mode:'Individual'},{question:'Sentence 3 — Describe a group who saw the result and changed its view.',mode:'Individual'},{question:'Sentence 4 — Use “still” or “continued to” for someone who did not change.',mode:'Pair'},{question:'Sentence 5 — Use “because” to explain why the resistance continued.',mode:'Pair'}]}
]};

/** Moses B1 Chapter 12 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter12: Record<number, Exercise[]> = { 12: [
  {
    id: 'moses-b1-language-12-plan-obligation',
    type: 'drag-drop',
    title: 'The Plan and the Rules',
    instructions: 'Read Moses’s words to his people in Chapter 12. Does each sentence tell the plan, or give an instruction or a rule? Put it in the right group.',
    question: 'How does Moses use different forms for the plan and for the rules the group must follow?',
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
    instructions: 'Complete each new sentence so that it keeps the meaning of the sentence from Chapter 12. Type the missing word or words.',
    question: 'How can we join a cause and its result, and say that someone succeeded?',
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
    question: 'What do these words tell us about the journey, the chase and Moses’s answer to his people’s fear?',
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
  {id:'moses-b1-language-12-connected-production',type:'reflection',title:'Explain a Difficult Group Plan',instructions:'Write or say five connected B1 sentences about a non-story group that must leave quietly, has members who cannot move quickly, is followed by another group, and receives reassurance from its leader. Do not retell the chapter.',question:'Can you connect instruction, obligation, inability, result, time, and reassurance in one short paragraph?',correctAnswer:null,explanation:'Useful language includes an imperative, “must/should”, “could not”, “That’s why...”, “When...”, “managed to...”, and “will...”.',feedback:{correct:'Keep the sentences connected around one situation and make the final reassurance respond naturally to the problem.',incorrect:''},discussionPrompts:[{question:'Sentence 1 — Give a direct instruction and state the group’s plan.',mode:'Individual'},{question:'Sentence 2 — Use “must” or “should” to explain a rule for the plan.',mode:'Individual'},{question:'Sentence 3 — Use “could not” and “That’s why...” to connect a limitation with its result.',mode:'Individual'},{question:'Sentence 4 — Use “When...” and “managed to...” to describe another group following them.',mode:'Pair'},{question:'Sentence 5 — End with reassurance using a present support statement and “will” for future help.',mode:'Pair'}]}
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
    question: 'How does the chapter move from a command, through a trigger, to a final consequence?',
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
    instructions: 'Complete the lines from the end of Chapter 13 with words from the bank. Three words are not needed.',
    question: 'Which words turn the events of the story into lessons and explain a purpose?',
    fillBlanksText: 'The story of Moses (pbuh) has many lessons for us [blank]. It again reminds us [blank] no one can enslave another human being. … Allah sent prophets [blank] show people a better life.',
    wordBank: ['learning', 'to learn', 'what', 'that', 'for', 'to'],
    correctAnswer: ['to learn', 'that', 'to'],
    explanation: '“Lessons for us to learn” uses “to + base verb” after a noun to say what we should do with the lessons. “Remind someone that + clause” introduces a general truth drawn from the story. “Sent prophets to show …” uses “to + base verb” for purpose. “For show” is not possible.',
    feedback: {
      correct: 'Correct. You moved from the events to the lessons and their purpose.',
      incorrect: 'Look at what follows each gap: a full clause after “reminds us”, and a base verb after the last gap. Check the last paragraph of Chapter 13.',
    },
  },
  {id:'moses-b1-language-13-connected-production',type:'reflection',title:'From Event to Lesson',instructions:'Write or say five connected B1 sentences about a non-story situation where a leader gives an instruction, an event changes the situation, a consequence follows, and the group later explains what it learned. Do not retell the chapter.',question:'Can you move naturally from command and sequence to consequence, purpose, and a general lesson?',correctAnswer:null,explanation:'Useful language includes an imperative, “When...”, a clear result clause, “to + verb” for purpose, and “This reminds us that...” or “This shows that...”.',feedback:{correct:'Keep one clear situation and make the final lesson grow naturally from the earlier events.',incorrect:''},discussionPrompts:[{question:'Sentence 1 — Give a direct instruction.',mode:'Individual'},{question:'Sentence 2 — Use “When...” to introduce the event that follows.',mode:'Individual'},{question:'Sentence 3 — State the consequence of that event.',mode:'Individual'},{question:'Sentence 4 — Use “to + verb” to explain the purpose of one action.',mode:'Pair'},{question:'Sentence 5 — End with “This reminds us that...” or “This shows that...” to express a general lesson.',mode:'Pair'}]}
]};
