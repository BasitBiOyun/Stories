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
  // LOOK — notice what the book's language does, across chapters.
  {
    id: 'adam-a2-language-review-1-past-or-later', type: 'drag-drop', title: 'Look: Finished or Still to Come?',
    instructions: 'Read the sentences from the book. Does the sentence tell us what happened, or what is going to happen later? Put each sentence in the right group.',
    question: 'Which verbs tell a finished event, and which verbs talk about later?',
    dragDropGroups: [
      { group: 'It happened (past verb)', items: ['Angels got surprised.', 'They forgot Allah’s warning.', 'He got old over the years.'] },
      { group: 'It is still to come (will / won’t / going to)', items: ['… you will never die.', 'They were going to build buildings for housing …', '“I won’t fight back or harm you.”'] },
    ],
    correctAnswer: {
      'It happened (past verb)': ['Angels got surprised.', 'They forgot Allah’s warning.', 'He got old over the years.'],
      'It is still to come (will / won’t / going to)': ['… you will never die.', 'They were going to build buildings for housing …', '“I won’t fight back or harm you.”'],
    },
    explanation: 'Past verbs (got, forgot) tell us that something happened and finished. “Will” and “won’t” (= will not) talk about later: a promise or a clear choice. “Were going to + verb” is a plan for later, seen from the past: when Adam and Eve came to earth, this work was in front of them.',
    feedback: { correct: 'Well done. Past verbs for finished events; will, won’t and going to for later.', incorrect: 'Look at the verb. Is it a past form like got, or does it have will, won’t or going to before it?' },
  },
  {
    id: 'adam-a2-language-review-2-could-had-to-should', type: 'matching', title: 'Look: Able, Necessary or Good Advice?',
    matchingHeadings: { left: 'From the book', right: 'Meaning' },
    instructions: 'Read the sentences from Chapters 2, 3, 8 and 10. Match each one with its meaning.',
    question: 'What do could, couldn’t, had to and should mean in these sentences?',
    matchingPairs: [
      { left: 'Adam could learn and understand.', right: 'He was able to do it.' },
      { left: 'Iblis couldn’t see that Adam had perfect knowledge …', right: 'It was impossible for him.' },
      { left: 'To solve the problem, they had to offer an offering to Allah.', right: 'It was necessary. There was no other way.' },
      { left: '… good people should stay away from jealousy …', right: 'This is good advice for everyone.' },
    ],
    correctAnswer: {
      'Adam could learn and understand.': 'He was able to do it.',
      'Iblis couldn’t see that Adam had perfect knowledge …': 'It was impossible for him.',
      'To solve the problem, they had to offer an offering to Allah.': 'It was necessary. There was no other way.',
      '… good people should stay away from jealousy …': 'This is good advice for everyone.',
    },
    explanation: '“Could + verb” = was able to. “Couldn’t + verb” = was not able to. “Had to + verb” = it was necessary in the past. “Should + verb” gives advice. After could, couldn’t and should, the verb has no “to”.',
    feedback: { correct: 'Correct. Could and couldn’t for ability, had to for necessity, should for advice.', incorrect: 'Look at the small word before the verb: could, couldn’t, had to or should. Check Chapters 2, 3, 8 and 10.' },
  },
  {
    id: 'adam-a2-language-review-3-comparing', type: 'multiple-choice', title: 'Look: Better Than or the Best?',
    instructions: 'Read the three parts from Chapters 2, 3 and 8. Then choose the best answer.',
    question: 'Which part compares one thing with ALL the others, not with only one other thing?',
    options: ['He was wiser than the angels …', '“I am better than Adam.”', 'Habil brought his best and healthiest sheep …'],
    correctAnswer: 2,
    explanation: '“-er + than” (wiser than) and “better than” compare two: Adam and the angels, Iblis and Adam. “The best” and “-est” (the healthiest) compare one thing with all the others: Habil had no sheep better than this one. Some words have special forms: good → better → the best.',
    feedback: { correct: 'Correct. “Than” compares two; “best” and “-est” mean number one of all.', incorrect: 'Look for the word “than”. Which part has no “than” and uses “best” and “-est”?' },
  },
  // PRACTISE — use the forms in the book's own sentences.
  {
    id: 'adam-a2-language-review-4-linking-ideas', type: 'word-bank', title: 'Practise: So, But, Because',
    instructions: 'Complete the sentences from Chapters 1, 2 and 7 with words from the bank. Two words are not needed.',
    question: 'Which word gives a result, which gives a different idea, and which gives a reason?',
    fillBlanksText: 'We are the grandchildren of Adam (pbuh), [blank] we can learn many lessons from this fantastic story. … They all admired him and respected him. [blank] Iblis didn’t think so. … They also warned their children against Iblis, [blank] Iblis was their enemy, not their friend.',
    wordBank: ['so', 'But', 'because', 'Because of', 'If'],
    correctAnswer: ['so', 'But', 'because'],
    explanation: '“So” gives a result: we are Adam’s grandchildren, so we can learn from his story. “But” gives a different idea: the angels admired Adam, but Iblis did not. “Because” + a sentence gives a reason: Iblis was their enemy. “Because of” needs a noun after it (“because of Adam”), not a sentence.',
    feedback: { correct: 'Well done. You linked a result, a different idea and a reason.', incorrect: 'For each gap, ask: does the next part give a result, a different idea or a reason? Check Chapters 1, 2 and 7.' },
  },
  {
    id: 'adam-a2-language-review-5-verb-patterns', type: 'choose-form', title: 'Practise: What Comes After the Verb?',
    instructions: 'Choose the correct form to complete each sentence from the book.',
    question: 'After “wanted Adam”, “started” and “advises people”, which form comes next?',
    formChoices: [
      { sentence: 'He wanted Adam [choice] Allah\'s love, just as he had.', options: ['lose', 'to lose', 'losing'], answer: 1 },
      { sentence: 'It landed on the ground near Qabil and started [choice] the ground.', options: ['digging', 'dig', 'dug'], answer: 0 },
      { sentence: 'This message still advises people [choice] and respect Allah.', options: ['love', 'loving', 'to love'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: 'After “want + person” and “advise + person”, use “to + verb”: wanted Adam to lose, advises people to love. After “start”, use verb-ing (started digging) or “to + verb” (“Adam started to feel lonely”). Never use the past form after “started”.',
    feedback: { correct: 'Correct. Want and advise + person + to; start + -ing.', incorrect: 'Look at the verb before the gap: wanted Adam …, started …, advises people …. Check Chapters 4, 9 and 10.' },
  },
  {
    id: 'adam-a2-language-review-6-fix-the-mistake', type: 'error-correction', title: 'Practise: Fix One Mistake',
    instructions: 'Each sentence has one mistake. Tap the mistake, then choose the correct form.',
    question: 'Can you correct the past verbs and the comparing word?',
    errorItems: [
      { sentence: 'They beginned waiting with curiosity.', error: 'beginned', options: ['begun', 'began', 'begin'], answer: 1 },
      { sentence: 'He losed both of his sons on the same day.', error: 'losed', options: ['lost', 'loses', 'lose'], answer: 0 },
      { sentence: 'He believed that he was superior to, more smarter than and more important than the human.', error: 'more smarter', options: ['smartest', 'more smart', 'smarter'], answer: 2 },
    ],
    correctAnswer: null,
    explanation: '“Begin” and “lose” change in the past: began, lost (not beginned, losed). Short words like “smart” add -er: smarter than. Do not use “more” and “-er” together. Long words use “more”: more important than.',
    feedback: { correct: 'Well done. You fixed all three sentences.', incorrect: 'Compare with the book: Chapter 1 (the angels), Chapter 10 (Adam’s sons) and Chapter 5 (what Iblis believed).' },
  },
  {
    id: 'adam-a2-language-review-7-teach-to', type: 'sentence-building', title: 'Practise: Adam Starts Teaching',
    instructions: 'Put the parts in order to make the sentence from Chapter 7.',
    question: 'How does the chapter say what Adam began to do and what he taught people?',
    sentenceChunks: ['He', 'started', 'teaching people', 'to be honest, do good, stop bad', 'and always remember Allah.'],
    correctAnswer: null,
    explanation: '“Started + verb-ing” shows that something new began: started teaching. “Teach + person + to + verb” tells us what people learn to do: teaching people to be honest. One “to” can go with a list of verbs: to be honest, do good, stop bad and always remember Allah.',
    feedback: { correct: 'Well done. Started teaching … people to … .', incorrect: 'Start with “He started”. Then say who he was teaching, and what he taught them to do.' },
  },
  // USE — take the language into a new, everyday context.
  {
    id: 'adam-a2-language-review-8-new-context', type: 'word-bank', title: 'Use: Trees for Our School',
    instructions: 'This text is not from the book. Complete it with words you practised in the book. Two words are not needed.',
    question: 'Can you use the book’s language to write about a day at your school?',
    fillBlanksText: 'Last Friday, our class was going to plant trees in the school garden. But it rained, [blank] we [blank] stay inside. On Monday, our teacher told us [blank] bring old gloves. The work was [blank] than we thought, but everyone helped, and now our garden looks better.',
    wordBank: ['so', 'had to', 'to', 'harder', 'because', 'more hard'],
    correctAnswer: ['so', 'had to', 'to', 'harder'],
    explanation: '“So” gives the result of the rain. “Had to + verb” says that it was necessary. “Told us to + verb” gives the teacher’s instruction. “Hard” is a short word, so we say “harder than”, not “more hard than”. The text also uses “was going to” for a plan that changed.',
    feedback: { correct: 'Well done. You used the book’s language in a new place.', incorrect: 'Ask for each gap: a result or a reason? Was it necessary? What comes after “told us”? How do we compare with a short word?' },
  },
  {
    id: 'adam-a2-language-review-9-transfer', type: 'reflection', title: 'Use: A Plan That Changed',
    instructions: 'Write four or five short sentences about a plan that changed: at home, at school or in your town. Say your sentences to a partner first.',
    question: 'Can you use the language of the whole book to write about a day in your own life?',
    correctAnswer: null,
    explanation: 'Example: “Last Saturday, I was going to play football with my friends. But my little brother was ill, so I had to stay at home. I couldn’t go out, but I read a story to him. My mother told me not to worry. The day was better than I thought.”',
    feedback: { correct: 'Check your sentences: was going to, past verbs, so / but / because, had to / couldn’t, told me (not) to, better than / -er than.', incorrect: '' },
    discussionPrompts: [
      { question: 'Sentence 1 — The plan: “Last …, I was going to …”', mode: 'Individual' },
      { question: 'Sentence 2 — What happened: “But …, so I had to …” or “I couldn’t … because …”', mode: 'Individual' },
      { question: 'Sentence 3 — Someone’s advice: “My mother / teacher told me to … / not to …”', mode: 'Pair' },
      { question: 'Sentence 4 — Compare: “The day was better / harder than I thought.”', mode: 'Pair' },
    ],
  },
];
