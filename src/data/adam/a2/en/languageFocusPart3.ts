import type { Exercise } from '../../../../types';

/** Canonical Adam A2 English Language Focus, Chapters 8–10, plus cumulative Language Review. */
export const adamA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  8: [
    {
      id: 'adam-a2-language-8-describing-people', type: 'matching', title: 'Describing People and Roles', instructions: 'Match each Chapter 8 expression with the language job it does.', question: 'How does the chapter describe character, interests and later roles?',
      matchingPairs: [
        { left: 'Habil was kind and gentle', right: 'describes character with be + adjective' },
        { left: 'He loved taking care of animals', right: 'describes an interest with love + -ing' },
        { left: 'Habil became a shepherd', right: 'shows a change into a new role with became' },
        { left: 'Qabil was a farmer', right: 'states a person’s role with be + job' },
      ],
      correctAnswer: {
        'Habil was kind and gentle': 'describes character with be + adjective',
        'He loved taking care of animals': 'describes an interest with love + -ing',
        'Habil became a shepherd': 'shows a change into a new role with became',
        'Qabil was a farmer': 'states a person’s role with be + job',
      },
      explanation: 'Chapter 8 uses simple A2 patterns to describe what people were like, what they enjoyed and what roles they later had.', feedback: { correct: 'Correct. You separated character, interest, change and job language.', incorrect: 'Look at the main verb in each expression: was, loved or became.' },
    },
    {
      id: 'adam-a2-language-8-time-purpose-duty', type: 'fill-blanks', title: 'Time, Purpose and Duty', instructions: 'Complete the sentence with the word that expresses past necessity.', question: 'Which word completes the “had to + verb” pattern?',
      fillBlanksText: 'They [blank] to offer an offering.', correctAnswer: 'had',
      explanation: '“Had to + verb” expresses necessity in the past. Chapter 8 also uses time markers such as “When they grew up” and “One day”, and “to + verb” to show purpose.', feedback: { correct: 'Correct. “Had to” expresses a past necessity.', incorrect: 'The complete pattern for past necessity is had to + verb.' },
    },
    {
      id: 'adam-a2-language-8-quality-contrast', type: 'multiple-choice', title: 'Comparing Quality', instructions: 'Choose the expression that shows the highest quality.', question: 'Which Chapter 8 phrase uses superlative language to describe a very high-quality offering?',
      options: ['his best and healthiest sheep', 'just a handful of his crops', 'but Qabil brought ...'], correctAnswer: 0,
      explanation: '“Best” and “healthiest” are superlative forms that highlight very high quality. “But” introduces contrast, while “a handful” describes a limited amount.', feedback: { correct: 'Correct. “Best and healthiest” shows the highest quality.', incorrect: 'Look for the superlative forms in the options.' },
    },
    {
      id: 'adam-a2-language-8-use-it', type: 'reflection', title: 'Say It: Describe a Good Choice', instructions: 'Write or say four short A2 sentences using the Chapter 8 language patterns.', question: 'Can you describe a person, a responsibility and a good choice in your own life?', correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of description, necessity, purpose and quality to a familiar situation.', feedback: { correct: 'Use the sentence starters to make clear, meaningful sentences.', incorrect: '' },
      discussionPrompts: [
        { question: 'Character or interest: “My friend is ...” / “I love ...ing.”', mode: 'Individual' },
        { question: 'Necessity: “I have to ...”', mode: 'Individual' },
        { question: 'Purpose: “To ..., I ...”', mode: 'Pair' },
        { question: 'Good choice: “I try to choose/give the best ... because ...”', mode: 'Pair' },
      ],
    },
  ],
  9: [
    {
      id: 'adam-a2-language-9-future-intentions', type: 'matching', title: 'Will and Won’t: Intention and Refusal', instructions: 'Match each Chapter 9 expression with the language job it does.', question: 'How does the dialogue use will and won’t to show what a person intends or refuses to do?',
      matchingPairs: [
        { left: 'I will kill you', right: 'states a future intention with will + verb' },
        { left: 'I won’t fight back', right: 'refuses a future action with won’t + verb' },
        { left: 'I won’t harm you', right: 'says clearly that an action will not happen' },
        { left: 'I fear Allah', right: 'gives the reason behind the speaker’s choice' },
      ],
      correctAnswer: {
        'I will kill you': 'states a future intention with will + verb',
        'I won’t fight back': 'refuses a future action with won’t + verb',
        'I won’t harm you': 'says clearly that an action will not happen',
        'I fear Allah': 'gives the reason behind the speaker’s choice',
      },
      explanation: 'In direct speech, “will + verb” states a future intention. “Won’t + verb” makes the future negative and can show a clear refusal.', feedback: { correct: 'Correct. You separated positive future intention, negative future choice and reason.', incorrect: 'Look first for will/won’t, then ask whether the speaker plans an action, rejects it, or explains why.' },
    },
    {
      id: 'adam-a2-language-9-changing-feelings', type: 'drag-drop', title: 'Changing Feelings and States', instructions: 'Sort each Chapter 9 expression by the language pattern it uses.', question: 'How does the chapter describe changing feelings and reactions?',
      dragDropGroups: [
        { group: 'became + adjective', items: ['Qabil became very angry'] },
        { group: 'felt + adjective', items: ['he felt so sad'] },
        { group: 'started to + verb', items: ['he started to panic'] },
        { group: 'change became weaker', items: ['Qabil’s anger cooled'] },
      ],
      correctAnswer: {
        'became + adjective': ['Qabil became very angry'],
        'felt + adjective': ['he felt so sad'],
        'started to + verb': ['he started to panic'],
        'change became weaker': ['Qabil’s anger cooled'],
      },
      explanation: 'The chapter uses “became + adjective”, “felt + adjective”, “started to + verb” and a change verb such as “cooled” to show emotional change over time.', feedback: { correct: 'Good. You sorted the chapter’s different ways of describing feelings and change.', incorrect: 'Focus on the main signal in each expression: became, felt, started to, or cooled.' },
    },
    {
      id: 'adam-a2-language-9-problem-solution', type: 'fill-blanks', title: 'A Problem and a Way Forward', instructions: 'Complete the uncertainty expression with one word.', question: 'Which word asks about the right action in this Chapter 9 sentence?',
      fillBlanksText: 'I don’t know what I [blank] do.', correctAnswer: 'should',
      explanation: '“I don’t know what I should do” expresses uncertainty and a need for guidance. Chapter 9 also uses “cannot + verb” for inability and “show someone the way to ...” for learning a solution.', feedback: { correct: 'Correct. “Should” is used when the speaker is unsure about the right action.', incorrect: 'Look for the modal used to ask what the right action is.' },
    },
    {
      id: 'adam-a2-language-9-use-it', type: 'reflection', title: 'Say It: Ask for and Give Help', instructions: 'Write or say four short A2 sentences. Use the Chapter 9 patterns in a safe everyday situation.', question: 'Can you express a choice, describe a feeling, ask what to do and show someone how to do something?', correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of future choice, feelings, uncertainty and practical help to an everyday context.', feedback: { correct: 'Use the sentence starters to make short, clear and meaningful sentences.', incorrect: '' },
      discussionPrompts: [
        { question: 'Future choice: “I will ...” or “I won’t ... because ...”', mode: 'Individual' },
        { question: 'Feeling/change: “I felt ...” or “I started to ...”', mode: 'Individual' },
        { question: 'Ask for guidance: “I don’t know what I should do. Can you help me?”', mode: 'Pair' },
        { question: 'Give guidance: “I can show you how / the way to ...”', mode: 'Pair' },
      ],
    },
  ],
  10: [
    {
      id: 'adam-a2-language-10-advice', type: 'matching', title: 'Should: Giving Advice', instructions: 'Match each Chapter 10 expression with the language job it does.', question: 'How does the chapter use should and other advice language to tell people how to behave?',
      matchingPairs: [
        { left: 'good people should stay away from jealousy', right: 'gives advice about something to avoid' },
        { left: 'good people should control their anger', right: 'gives advice about self-control' },
        { left: 'It tells them to be well-behaved', right: 'uses tell + person + to + verb to give guidance' },
        { left: 'It tells them to be kind to others', right: 'gives positive guidance about how to treat people' },
      ],
      correctAnswer: {
        'good people should stay away from jealousy': 'gives advice about something to avoid',
        'good people should control their anger': 'gives advice about self-control',
        'It tells them to be well-behaved': 'uses tell + person + to + verb to give guidance',
        'It tells them to be kind to others': 'gives positive guidance about how to treat people',
      },
      explanation: '“Should + verb” gives advice. “Tell + person + to + verb” is another useful way to give guidance about what someone should do.', feedback: { correct: 'Correct. You separated advice about avoiding something, controlling behaviour and doing something positive.', incorrect: 'Look for should and tells them to. Then ask what behaviour each expression recommends.' },
    },
    {
      id: 'adam-a2-language-10-past-necessity-change', type: 'fill-blanks', title: 'Had To and Became: Duty and Change', instructions: 'Complete the past-necessity pattern with one word.', question: 'Which word completes the Chapter 10 responsibility expression?',
      fillBlanksText: 'He [blank] to continue his life.', correctAnswer: 'had',
      explanation: '“Had to + verb” expresses necessity or responsibility in the past. The chapter also uses “became” and “got” to describe changes of state over time.', feedback: { correct: 'Correct. “Had to” expresses a past necessity.', incorrect: 'The complete past-necessity pattern is had to + verb.' },
    },
    {
      id: 'adam-a2-language-10-continuing-message', type: 'multiple-choice', title: 'Still, Tell and Help: A Message That Continues', instructions: 'Choose the expression that shows continuation up to the present.', question: 'Which Chapter 10 phrase uses “still” to show that something continues?',
      options: ['This message still advises people', 'It tells them to be well-behaved', 'The stories help us to live an honest life'], correctAnswer: 0,
      explanation: '“Still” shows that something continues. “Tell someone to ...” gives guidance, while “help someone to ...” describes support or a positive result.', feedback: { correct: 'Correct. “Still” marks continuation.', incorrect: 'Look for the option containing the word “still”.' },
    },
    {
      id: 'adam-a2-language-10-use-it', type: 'reflection', title: 'Say It: Advice, Responsibility and Help', instructions: 'Write or say four short A2 sentences. Use the Chapter 10 patterns in everyday situations.', question: 'Can you give advice, describe a past responsibility, show change over time and explain how something helps you?', correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of advice, past necessity, change and positive guidance to familiar situations.', feedback: { correct: 'Use the sentence starters to make short, clear and meaningful sentences.', incorrect: '' },
      discussionPrompts: [
        { question: 'Advice: “People should ... / should stay away from ...”', mode: 'Individual' },
        { question: 'Past responsibility: “Yesterday / last week, I had to ...”', mode: 'Individual' },
        { question: 'Change: “Over time, I became / got ...”', mode: 'Individual' },
        { question: 'Positive support: “... helps me to ...” or “My family/teacher tells me to ...”', mode: 'Pair' },
      ],
    },
  ],
};

export const adamA2LanguageReviewExercises: Exercise[] = [
  {
    id: 'adam-a2-language-review-1-plan-result', type: 'matching', title: 'Plans, Sequence and Result', instructions: 'Match each Chapter 1 pattern with what it communicates.', question: 'How does the opening talk about future plans, order and results?',
    matchingPairs: [
      { left: 'was going to create', right: 'a plan seen from the past' },
      { left: 'After that', right: 'the next event in a sequence' },
      { left: 'because', right: 'a reason' },
      { left: 'Because of this', right: 'a result or consequence' },
    ],
    correctAnswer: { 'was going to create': 'a plan seen from the past', 'After that': 'the next event in a sequence', because: 'a reason', 'Because of this': 'a result or consequence' },
    explanation: 'Chapter 1 combines future-in-the-past language with simple linkers for sequence, reason and result.', feedback: { correct: 'Good. You distinguished four different language jobs.', incorrect: 'Ask whether each expression shows a plan, order, reason or result.' },
  },
  {
    id: 'adam-a2-language-review-2-ability', type: 'multiple-choice', title: 'Ability in the Story', instructions: 'Choose the sentence that directly expresses ability.', question: 'Which Chapter 2 sentence uses could to say what Adam was able to do?',
    options: ['Adam could learn and understand', 'Allah taught him to think', 'He was wiser than the angels', 'Iblis thought Adam was unimportant'], correctAnswer: 0,
    explanation: '“Could + verb” expresses ability. The other choices show teaching, comparison and opinion.', feedback: { correct: 'Correct. “Could learn and understand” directly expresses ability.', incorrect: 'Look for could + verb.' },
  },
  {
    id: 'adam-a2-language-review-3-value-comparison-reason', type: 'fill-blanks', title: 'Comparison and Reason', instructions: 'Complete the sentence with the simple reason linker used throughout the story.', question: 'Which word introduces the reason useful knowledge matters?',
    fillBlanksText: 'Useful knowledge makes people great [blank] it helps them do good and stop bad.', correctAnswer: 'because',
    explanation: '“Because” connects an idea with its reason. Chapter 3 also uses comparative language such as better than and more valuable than.', feedback: { correct: 'Correct. “Because” introduces the reason.', incorrect: 'The second part explains why the first part is true.' },
  },
  {
    id: 'adam-a2-language-review-4-wants-warnings-change', type: 'drag-drop', title: 'Intention, Warning, Prohibition and Change', instructions: 'Place each Chapter 4 expression in the correct language-function group.', question: 'Can you sort the four patterns by what they do?',
    dragDropGroups: [
      { group: 'Intention', items: ['wanted Adam to lose Allah’s love'] },
      { group: 'Warning', items: ['told Adam to be careful'] },
      { group: 'Prohibition', items: ['told Adam and Eve not to go near one tree'] },
      { group: 'Change', items: ['started to feel lonely'] },
    ],
    correctAnswer: {
      Intention: ['wanted Adam to lose Allah’s love'],
      Warning: ['told Adam to be careful'],
      Prohibition: ['told Adam and Eve not to go near one tree'],
      Change: ['started to feel lonely'],
    },
    explanation: 'Chapter 4 uses want + person + to for intention, tell for warning, tell + person + not to for prohibition, and started to for the beginning of a new state.', feedback: { correct: 'Correct. You sorted four different communicative functions.', incorrect: 'Look at wanted, told, not to, and started to.' },
  },
  {
    id: 'adam-a2-language-review-5-condition-result', type: 'multiple-choice', title: 'Condition and Result', instructions: 'Choose the sentence that connects a condition with a future result.', question: 'Which Chapter 5 sentence uses the if + will pattern?',
    options: ['If you eat from that tree, you will never die', 'They learned from their mistake', 'They decided never to repeat it', 'However, Iblis took an opposite direction'], correctAnswer: 0,
    explanation: 'The first clause gives the condition with if; the second gives the promised future result with will.', feedback: { correct: 'Correct. You identified the if + will pattern.', incorrect: 'Find the sentence with both if and will.' },
  },
  {
    id: 'adam-a2-language-review-6-purpose-responsibility', type: 'fill-blanks', title: 'A Planned Action', instructions: 'Complete the Chapter 6 plan with the missing word.', question: 'Which word completes the “were going to” structure?',
    fillBlanksText: 'They were [blank] to build buildings.', correctAnswer: 'going',
    explanation: '“Were going to + verb” describes a planned future action from a past viewpoint.', feedback: { correct: 'Correct. “Were going to” completes the plan.', incorrect: 'The complete pattern is were going to + verb.' },
  },
  {
    id: 'adam-a2-language-review-7-teaching-warning-time', type: 'sequencing', title: 'Teaching and Narrative Time', instructions: 'Put the Chapter 7 ideas into a natural story sequence.', question: 'How do time expressions and teaching language help organise a short narrative?',
    sequencingItems: [
      { id: '1', text: 'Adam and Eve lived on Earth for many years.' },
      { id: '2', text: 'Then Allah made Adam His first Messenger.' },
      { id: '3', text: 'Adam started teaching people to be honest and do good.' },
      { id: '4', text: 'He warned and guided people as part of his responsibility.' },
    ],
    correctAnswer: ['1', '2', '3', '4'], explanation: 'Time signals such as “for many years” and “then” organise events, while started teaching and warning language describes guidance.', feedback: { correct: 'Correct. You rebuilt the sequence using time and teaching language.', incorrect: 'Start with life on Earth, then the new role, then teaching and guidance.' },
  },
  {
    id: 'adam-a2-language-review-8-role-quality-obligation', type: 'matching', title: 'Roles, Quality and Obligation', instructions: 'Match each Chapter 8 pattern with what it expresses.', question: 'How does the chapter describe jobs, quality and what people needed to do?',
    matchingPairs: [
      { left: 'Habil became a shepherd', right: 'change into a role or job' },
      { left: 'Qabil was a farmer', right: 'past role or state' },
      { left: 'his best and healthiest sheep', right: 'superlative quality' },
      { left: 'They had to offer an offering', right: 'past necessity or obligation' },
    ],
    correctAnswer: { 'Habil became a shepherd': 'change into a role or job', 'Qabil was a farmer': 'past role or state', 'his best and healthiest sheep': 'superlative quality', 'They had to offer an offering': 'past necessity or obligation' },
    explanation: 'Chapter 8 uses role language, superlatives and past obligation to describe the brothers and their choices.', feedback: { correct: 'Good. You distinguished role, state, quality and obligation.', incorrect: 'Focus on became, was, best/healthiest and had to.' },
  },
  {
    id: 'adam-a2-language-review-9-intention-refusal', type: 'true-false', title: 'Future Refusal', instructions: 'Decide whether the statement about Chapter 9 language is true or false.', question: '“I won’t fight back” uses won’t to express a future refusal or negative intention.', correctAnswer: true,
    explanation: '“Won’t + verb” makes the future negative and can show a clear refusal. Chapter 9 also uses started to for changing reactions and should for uncertainty about the right action.', feedback: { correct: 'Correct. Won’t expresses a negative future choice here.', incorrect: 'Look at the pattern won’t + verb and what the speaker refuses to do.' },
  },
  {
    id: 'adam-a2-language-review-10-transfer', type: 'reflection', title: 'Use the Story’s Advice Language', instructions: 'Use four language patterns from the final chapters to write a short A2 message for daily life.', question: 'Can you give advice, describe a past responsibility, show change and explain a positive result?', correctAnswer: null,
    explanation: 'This final Language Review task transfers the book’s grammar and functions into meaningful language of your own.', feedback: { correct: 'Use all four starters and keep each sentence clear and meaningful.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — “We should ...”', mode: 'Individual' },
      { question: 'Sentence 2 — “Yesterday, I had to ...”', mode: 'Individual' },
      { question: 'Sentence 3 — “I became/got ... when ...”', mode: 'Pair' },
      { question: 'Sentence 4 — “This helps people to ...”', mode: 'Pair' },
    ],
  },
];