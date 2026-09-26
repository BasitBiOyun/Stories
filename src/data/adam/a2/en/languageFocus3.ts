import type { Exercise } from '../../../../types';

/**
 * Canonical Adam A2 English Language Focus, Chapters 8–10, plus cumulative Language Review.
 * Look → Practise → Use; every quoted line comes from the English chapter.
 */
export const adamA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  8: [
    {
      id: 'adam-a2-language-8-describing-people', type: 'drag-drop', title: 'What Was He Like? What Was His Job?', instructions: 'Read the parts of Chapter 8. Put each one in the right group.', question: 'Which parts describe a person, and which parts tell us a person’s job?',
      dragDropGroups: [
        { group: 'What the person was like', items: ['Habil was kind, gentle …', 'Qabil was mostly jealous.'] },
        { group: 'The person’s job', items: ['When they grew up, Habil became a shepherd.', 'Qabil was a farmer.'] },
      ],
      correctAnswer: {
        'What the person was like': ['Habil was kind, gentle …', 'Qabil was mostly jealous.'],
        'The person’s job': ['When they grew up, Habil became a shepherd.', 'Qabil was a farmer.'],
      },
      explanation: '“Was + adjective” describes what a person is like: was kind, was jealous. “Was / became + a + job” tells us a person’s job: was a farmer, became a shepherd. “Became” shows a change: when they grew up, Habil started this job.',
      feedback: { correct: 'Good. You saw the difference between “was kind” (what he was like) and “was a farmer” (his job).', incorrect: 'Look at the word after “was” or “became”. Is it a word like kind or jealous, or “a” + a job? Check the first paragraph of Chapter 8.' },
    },
    {
      id: 'adam-a2-language-8-time-purpose-duty', type: 'choose-form', title: 'Loved, Had To, Best', instructions: 'Choose the correct form for each sentence from Chapter 8.', question: 'Which forms describe Habil’s interest, a past duty and the best quality?',
      formChoices: [
        { sentence: '… Habil was kind, gentle and loved [choice] care of animals.', options: ['take', 'taking', 'takes'], answer: 1 },
        { sentence: 'To solve the problem, they [choice] offer an offering to Allah.', options: ['had to', 'must to', 'had'], answer: 0 },
        { sentence: 'Habil brought his [choice] sheep as a gift for Allah …', options: ['goodest and healthiest', 'most good and most healthy', 'best and healthiest'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: '“Love + verb-ing” tells us what someone enjoys: loved taking care of animals. “Had to + verb” says something was necessary in the past. “Good” has a special form: the best. “Healthy” becomes “the healthiest”.',
      feedback: { correct: 'Well done. You chose “loved taking”, “had to” and “best and healthiest”.', incorrect: 'Read Chapter 8 again. Remember: love + -ing, had to + verb, good → best.' },
    },
    {
      id: 'adam-a2-language-8-quality-contrast', type: 'fill-blanks', title: 'Two Different Gifts', instructions: 'Complete the line from Chapter 8 with one word.', question: 'Which word shows that the two brothers’ gifts were different?',
      fillBlanksText: '… as a gift for Allah, [blank] Qabil brought just a handful of his crops.', correctAnswer: ['but', 'while', 'whereas'],
      explanation: '“But” joins two different ideas. Habil brought his best sheep, but Qabil brought just a handful of his crops. The chapter says: “Real goodness is giving the best and the most loved.”',
      feedback: { correct: 'Correct. “But” shows the difference between the two gifts.', incorrect: 'Habil gave a lot, and Qabil gave a little. Which small word shows this difference? Check the second paragraph of Chapter 8.' },
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
      id: 'adam-a2-language-9-future-intentions', type: 'multiple-choice', title: 'What Does “Won’t” Show?', instructions: 'Read Habil’s words from Chapter 9. Choose the best meaning.', question: 'Habil said, “I won’t fight back or harm you.” What does “won’t” show here?',
      options: ['Habil says no: he will not do these things.', 'Habil was not able to fight because he was weak.', 'Habil talks about something he did before.'],
      correctAnswer: 0,
      explanation: '“Won’t” = will not. “Won’t + verb” tells us about the future, and here it shows Habil’s clear choice: he refuses to fight back. He gives the reason: “You are my brother, and I fear Allah.”',
      feedback: { correct: 'Correct. “Won’t” shows Habil’s choice not to fight back.', incorrect: '“Won’t” is short for “will not”. It is about Habil’s choice now and in the future. Read his words in the first paragraph of Chapter 9.' },
    },
    {
      id: 'adam-a2-language-9-changing-feelings', type: 'matching', title: 'Feelings and Meanings', instructions: 'Find these phrases in Chapter 9. Match each one with its meaning.', question: 'What do these Chapter 9 phrases mean in the story?',
      matchingHeadings: { left: 'From Chapter 9', right: 'Meaning' },
      matchingPairs: [
        { left: 'he gave from his heart', right: 'he really wanted to give it' },
        { left: 'Qabil’s anger cooled', right: 'he was not so angry any more' },
        { left: 'he also started to panic', right: 'suddenly he felt very afraid' },
        { left: '“I am worse than this crow.”', right: 'Even this bird is better than me.' },
      ],
      correctAnswer: {
        'he gave from his heart': 'he really wanted to give it',
        'Qabil’s anger cooled': 'he was not so angry any more',
        'he also started to panic': 'suddenly he felt very afraid',
        '“I am worse than this crow.”': 'Even this bird is better than me.',
      },
      explanation: 'The chapter shows feelings that change: anger “cooled” (became less strong), and Qabil “started to panic”. “Worse than” is the opposite of “better than”: Qabil saw that even the crow knew what to do.',
      feedback: { correct: 'Good. You understood how Chapter 9 describes feelings.', incorrect: 'Find each phrase in Chapter 9 and read the sentence around it. What does it mean there?' },
    },
    {
      id: 'adam-a2-language-9-problem-solution', type: 'word-bank', title: 'Became, Should, Sent', instructions: 'Complete the lines from Chapter 9 with words from the box. Two words are not needed.', question: 'Which words tell what happened, and which word asks about the right action?',
      fillBlanksText: 'Qabil [blank] very angry … “Now I don’t know what I [blank] do with his dead body.” Then, Allah [blank] a crow.',
      wordBank: ['became', 'becomed', 'should', 'sent', 'sended'],
      correctAnswer: ['became', 'should', 'sent'],
      explanation: '“Become” and “send” have special past forms: became, sent. “Became + adjective” shows a change of feeling: Qabil’s feeling changed, and he became very angry. “I don’t know what I should do” shows that Qabil did not know the right action and needed help.',
      feedback: { correct: 'Correct. You used “became”, “should” and “sent”.', incorrect: 'Remember: become → became, send → sent. Then find Qabil’s words about what to do in Chapter 9.' },
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
      id: 'adam-a2-language-10-advice', type: 'matching', title: 'Past Forms in Chapter 10', instructions: 'Find these verbs in Chapter 10. Match each verb with its past form.', question: 'Chapter 10 tells us what happened to Adam’s family. Which past form goes with each verb?',
      matchingHeadings: { left: 'Verb', right: 'Past form in Chapter 10' },
      matchingPairs: [
        { left: 'go', right: 'went' },
        { left: 'become', right: 'became' },
        { left: 'lose', right: 'lost' },
        { left: 'spread', right: 'spread' },
      ],
      correctAnswer: { go: 'went', become: 'became', lose: 'lost', spread: 'spread' },
      explanation: 'These verbs have special past forms: go → went, become → became, lose → lost. Some verbs do not change at all: spread → spread (“His children and grandchildren spread his message worldwide”).',
      feedback: { correct: 'Good. You found the past forms in Chapter 10.', incorrect: 'Look at Chapter 10 again: “He went …”, “Adam (pbuh) became …”, “He lost …”, “… spread his message …”.' },
    },
    {
      id: 'adam-a2-language-10-past-necessity-change', type: 'choose-form', title: 'Should, Had To, Still', instructions: 'Choose the correct form for each sentence from Chapter 10.', question: 'Which form gives advice, which says what was necessary, and which shows that something continues?',
      formChoices: [
        { sentence: 'The story tells us that good people [choice] stay away from jealousy and control their anger.', options: ['should to', 'should', 'shoulds'], answer: 1 },
        { sentence: 'He [choice] continue his life.', options: ['had to', 'must to', 'had'], answer: 0 },
        { sentence: 'This message [choice] advises people to love and respect Allah.', options: ['yet', 'ever', 'still'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: '“Should + verb” gives advice (no “to” after should). “Had to + verb” says something was necessary in the past. “Still” shows that something continues until now: the message did not stop.',
      feedback: { correct: 'Well done. You chose “should”, “had to” and “still”.', incorrect: 'Remember: should + verb, had to + verb. Which word means “it continues now”? Check Chapter 10.' },
    },
    {
      id: 'adam-a2-language-10-continuing-message', type: 'sentence-building', title: 'What Does the Message Tell People?', instructions: 'Put the parts in order to make the sentence from Chapter 10.', question: 'How does the chapter say what the message asks people to do?',
      sentenceChunks: ['It', 'tells', 'them', 'to be', 'well-behaved', 'and kind to others.'],
      correctAnswer: null,
      explanation: '“Tell + person + to + verb” gives guidance: it tells them to be well-behaved. The chapter also says: “The stories of His messengers help us to live an honest life.”',
      feedback: { correct: 'Correct. “Tells them to be …” gives guidance.', incorrect: 'Use the pattern tell + person + to + verb. Check the second paragraph of Chapter 10.' },
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
    id: 'adam-a2-language-review-1-plan-result', type: 'matching', title: 'Plans and Order', instructions: 'Match each pattern with its meaning.', question: 'What does each pattern tell us?',
    matchingPairs: [
      { left: 'was going to create', right: 'a plan seen from the past' },
      { left: 'After that', right: 'the next event in a sequence' },
      { left: 'because', right: 'a reason' },
      { left: 'Because of this', right: 'a result or consequence' },
    ],
    correctAnswer: { 'was going to create': 'a plan seen from the past', 'After that': 'the next event in a sequence', because: 'a reason', 'Because of this': 'a result or consequence' },
    explanation: 'Chapter 1 uses words for a plan, order, reason and result.', feedback: { correct: 'Good. You distinguished four different language jobs.', incorrect: 'Think: plan, order, reason or result?' },
  },
  {
    id: 'adam-a2-language-review-2-ability', type: 'multiple-choice', title: 'Ability in the Story', instructions: 'Choose the sentence with could.', question: 'Which sentence says what Adam could do?',
    options: ['Adam could learn and understand', 'Allah taught him to think', 'He was wiser than the angels', 'Iblis thought Adam was unimportant'], correctAnswer: 0,
    explanation: '“Could + verb” says what someone was able to do.', feedback: { correct: 'Correct. “Could learn and understand” says what Adam was able to do.', incorrect: 'Look for could + verb.' },
  },
  {
    id: 'adam-a2-language-review-3-value-comparison-reason', type: 'fill-blanks', title: 'Comparison and Reason', instructions: 'Complete the sentence with one word.', question: 'Which word gives the reason?',
    fillBlanksText: 'Useful knowledge makes people great [blank] it helps them do good and stop bad.', correctAnswer: 'because',
    explanation: '“Because” connects an idea with its reason. Chapter 3 also uses comparative language such as better than and more valuable than.', feedback: { correct: 'Correct. “Because” introduces the reason.', incorrect: 'The second part explains why the first part is true.' },
  },
  {
    id: 'adam-a2-language-review-4-wants-warnings-change', type: 'drag-drop', title: 'Plans, Warnings and Change', instructions: 'Put each expression in the right group.', question: 'Where does each expression go?',
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
    explanation: 'Chapter 4 uses different phrases for a plan, a warning, saying “do not”, and a new change.', feedback: { correct: 'Correct. You put the four phrases in the right groups.', incorrect: 'Look at wanted, told, not to, and started to.' },
  },
  {
    id: 'adam-a2-language-review-5-condition-result', type: 'multiple-choice', title: 'Condition and Result', instructions: 'Choose the correct if sentence.', question: 'Which sentence uses if and will correctly?',
    options: ['If you eat from that tree, you will never die', 'They learned from their mistake', 'They decided never to repeat it', 'However, Iblis took an opposite direction'], correctAnswer: 0,
    explanation: 'The part with “if” comes first. The part with “will” tells us what happens next.', feedback: { correct: 'Correct. You identified the if + will pattern.', incorrect: 'Find the sentence with both if and will.' },
  },
  {
    id: 'adam-a2-language-review-6-purpose-responsibility', type: 'fill-blanks', title: 'A Planned Action', instructions: 'Complete the Chapter 6 plan with the missing word.', question: 'Which word completes the “were going to” structure?',
    fillBlanksText: 'They were [blank] to build buildings.', correctAnswer: 'going',
    explanation: '“Were going to + verb” describes a planned future action from a past viewpoint.', feedback: { correct: 'Correct. “Were going to” completes the plan.', incorrect: 'The complete pattern is were going to + verb.' },
  },
  {
    id: 'adam-a2-language-review-7-teaching-warning-time', type: 'sequencing', title: 'Story Order', instructions: 'Put the ideas in a clear story order.', question: 'Which idea comes first, next and last?',
    sequencingItems: [
      { id: '1', text: 'Adam and Eve lived on Earth for many years.' },
      { id: '2', text: 'Then Allah made Adam His first Messenger.' },
      { id: '3', text: 'Adam started teaching people to be honest and do good.' },
      { id: '4', text: 'He warned and guided people as part of his responsibility.' },
    ],
    correctAnswer: ['1', '2', '3', '4'], explanation: 'Time signals such as “for many years” and “then” organise events, while started teaching and warning language describes guidance.', feedback: { correct: 'Correct. You put the ideas in a clear order.', incorrect: 'Start with life on Earth, then the new role, then teaching and guidance.' },
  },
  {
    id: 'adam-a2-language-review-8-role-quality-obligation', type: 'matching', title: 'Jobs, Quality and Need', instructions: 'Match each pattern with its meaning.', question: 'What does each pattern tell us?',
    matchingPairs: [
      { left: 'Habil became a shepherd', right: 'change into a role or job' },
      { left: 'Qabil was a farmer', right: 'past role or state' },
      { left: 'his best and healthiest sheep', right: 'superlative quality' },
      { left: 'They had to offer an offering', right: 'past necessity or obligation' },
    ],
    correctAnswer: { 'Habil became a shepherd': 'change into a role or job', 'Qabil was a farmer': 'past role or state', 'his best and healthiest sheep': 'superlative quality', 'They had to offer an offering': 'past necessity or obligation' },
    explanation: 'Chapter 8 talks about jobs, the best quality, and things people had to do.', feedback: { correct: 'Good. You matched each phrase with the right meaning.', incorrect: 'Focus on became, was, best/healthiest and had to.' },
  },
  {
    id: 'adam-a2-language-review-9-intention-refusal', type: 'true-false', title: 'Future Refusal', instructions: 'Read the sentence and choose true or false.', question: '“I won’t fight back” talks about a future action.', correctAnswer: true,
    explanation: '“Won’t + verb” says that something will not happen. Here it shows a clear choice.', feedback: { correct: 'Correct. “Won’t” makes the future negative.', incorrect: 'Look at the pattern won’t + verb and what the speaker refuses to do.' },
  },
  {
    id: 'adam-a2-language-review-10-transfer', type: 'reflection', title: 'Use the Story’s Advice Language', instructions: 'Write four short sentences for daily life.', question: 'Can you use the story language in your own sentences?', correctAnswer: null,
    explanation: 'Now use the same story language in your own short sentences.', feedback: { correct: 'Use all four starters and keep each sentence clear and meaningful.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — “We should ...”', mode: 'Individual' },
      { question: 'Sentence 2 — “Yesterday, I had to ...”', mode: 'Individual' },
      { question: 'Sentence 3 — “I became/got ... when ...”', mode: 'Pair' },
      { question: 'Sentence 4 — “This helps people to ...”', mode: 'Pair' },
    ],
  },
];