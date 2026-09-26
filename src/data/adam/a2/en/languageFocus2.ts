import type { Exercise } from '../../../../types';

/**
 * Canonical Adam A2 English Language Focus, Chapters 5–7.
 * Look → Practise → Use; every quoted line comes from the English chapter.
 */
export const adamA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  5: [
    {
      id: 'adam-a2-language-5-condition-result',
      type: 'true-false',
      title: 'If …, You Will …',
      instructions: 'Read Iblis’s words from Chapter 5. Is the statement true or false?',
      question: 'Iblis said, “If you eat from that one tree, you will never die.” The “If …” part is what they must do first. The “will …” part is the result that Iblis promised.',
      correctAnswer: true,
      explanation: '“If + present verb …, … will + verb” joins a condition and a result. The “if” part says what must happen first (eat from the tree). The “will” part says what will happen next (never die). But Iblis’s promise was “a big lie”.',
      feedback: {
        correct: 'Correct. “If you eat …” is the condition, and “you will never die” is the promised result.',
        incorrect: 'Read Iblis’s words in the first paragraph of Chapter 5. Which part comes first? Which part is the promise?',
      },
    },
    {
      id: 'adam-a2-language-5-mistake-response',
      type: 'choose-form',
      title: 'Talking about a Mistake',
      instructions: 'Choose the correct form for each sentence from Chapter 5.',
      question: 'Which forms tell us what Adam and Eve did and decided?',
      formChoices: [
        {
          sentence: 'They [choice] Allah’s warning.',
          options: ['forgotted', 'forgot', 'forget'],
          answer: 1,
        },
        {
          sentence: 'They [choice] a mistake, but …',
          options: ['made', 'did', 'make'],
          answer: 0,
        },
        {
          sentence: 'They learned from their mistake and decided never [choice] it.',
          options: ['repeat', 'repeating', 'to repeat'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“Forget” has a special past form: forgot. In English we “make a mistake” (not “do a mistake”). After “decided (never)”, we use “to + verb”: decided never to repeat it.',
      feedback: {
        correct: 'Well done. You used “forgot”, “made a mistake” and “decided never to”.',
        incorrect: 'Read the second and third paragraphs of Chapter 5 again. Remember: make a mistake, decide to + verb.',
      },
    },
    {
      id: 'adam-a2-language-5-contrast-reason',
      type: 'matching',
      title: 'What Do These Words Mean?',
      instructions: 'Find these words in Chapter 5. Match each one with its meaning.',
      question: 'What do these Chapter 5 words and phrases mean in the story?',
      matchingHeadings: { left: 'From Chapter 5', right: 'Meaning' },
      matchingPairs: [
        { left: 'After a while', right: 'after some time' },
        { left: 'Unfortunately', right: 'sadly' },
        { left: 'banned', right: 'not allowed' },
        { left: 'it wasn’t on purpose', right: 'they did not plan to do it' },
        { left: 'took an opposite direction', right: 'went a very different way' },
      ],
      correctAnswer: {
        'After a while': 'after some time',
        Unfortunately: 'sadly',
        banned: 'not allowed',
        'it wasn’t on purpose': 'they did not plan to do it',
        'took an opposite direction': 'went a very different way',
      },
      explanation: 'These words help us follow the story. “After a while” shows time. “Unfortunately” shows a sad fact. “Banned” means not allowed. “It wasn’t on purpose” means they did not plan the mistake. “Took an opposite direction” shows that Iblis did the opposite of Adam and Eve: he never said he was wrong.',
      feedback: {
        correct: 'Good. You understood the key words of Chapter 5.',
        incorrect: 'Find each word in Chapter 5 and read the sentence around it. What does it mean there?',
      },
    },
    {
      id: 'adam-a2-language-5-talk-about-a-mistake',
      type: 'reflection',
      title: 'Say It: Learn from a Mistake',
      instructions: 'Write or say four short A2 sentences about a simple mistake and a better response. Use Chapter 5 language.',
      question: 'Can you explain a mistake, intention, learning and a new decision?',
      correctAnswer: null,
      explanation: 'A strong A2 response uses the chapter’s language to move from a past mistake to reflection and a future decision.',
      feedback: { correct: 'Use the sentence starters to build a clear mistake-to-learning sequence.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Mistake: “I/They made a mistake when ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Intention: “It was / wasn’t on purpose.”', mode: 'Individual' },
        { question: 'Sentence 3 — Learning: “I/They learned from ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Decision: “I/They decided not to ... again.”', mode: 'Pair' },
      ],
    },
  ],
  6: [
    {
      id: 'adam-a2-language-6-planned-responsibilities',
      type: 'multiple-choice',
      title: 'What Does “Were Going To” Mean?',
      instructions: 'Read the sentence from Chapter 6. Choose the best meaning.',
      question: '“They were going to direct and make everything better on the planet.” What does “were going to” mean here?',
      options: [
        'They walked to a new place on the planet.',
        'This was their work for the future on earth.',
        'They did this before they came to earth.',
      ],
      correctAnswer: 1,
      explanation: 'Here “were going to + verb” does not mean moving to a place. It tells us about a plan or a job for the future, seen from the past. When Adam and Eve came to earth, this work was in front of them.',
      feedback: {
        correct: 'Correct. “Were going to direct” tells us about their future work on earth.',
        incorrect: 'Look at the verb after “going to”: direct. It is a job for later, not a place. Check the first paragraph of Chapter 6.',
      },
    },
    {
      id: 'adam-a2-language-6-purpose',
      type: 'sentence-building',
      title: 'Their Plans on Earth',
      instructions: 'Put the parts in order to make the sentence from Chapter 6.',
      question: 'What were Adam and Eve going to do on earth?',
      sentenceChunks: ['They were going to', 'build buildings for housing,', 'protect nature', 'and', 'help the weak.'],
      correctAnswer: null,
      explanation: 'One “were going to” can go with a list of verbs: build …, protect … and help …. We use commas between the actions and “and” before the last one.',
      feedback: {
        correct: 'Well done. You built a list of future jobs with “were going to”.',
        incorrect: 'Start with “They were going to”. Then list the actions, and put “and” before the last one. Check the first paragraph of Chapter 6.',
      },
    },
    {
      id: 'adam-a2-language-6-wants-and-influence',
      type: 'choose-form',
      title: 'Why? To … / Not To …',
      instructions: 'Choose the correct form for each sentence from Chapter 6.',
      question: 'Which form tells us why, and which form tells us what Iblis did not want?',
      formChoices: [
        {
          sentence: 'Allah excused Adam and Eve and put them on earth [choice] live there.',
          options: ['for', 'to', 'for to'],
          answer: 1,
        },
        {
          sentence: 'Allah taught them and gave them everything [choice] rule on earth.',
          options: ['to', 'for to', 'for'],
          answer: 0,
        },
        {
          sentence: 'He wanted people [choice] remember Allah in their daily lives.',
          options: ['to not', 'don’t', 'not to'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“To + verb” tells us why: on earth to live there, everything to rule on earth. We do not say “for live” or “for to live”. “Want + person + not to + verb” tells us what someone does not want another person to do.',
      feedback: {
        correct: 'Correct. You used “to + verb” for why and “not to + verb” for Iblis’s wish.',
        incorrect: 'Ask “Why?”: the answer starts with “to + verb”. For “do not”, put “not” before “to”. Check Chapter 6.',
      },
    },
    {
      id: 'adam-a2-language-6-talk-about-responsibility',
      type: 'reflection',
      title: 'Say It: A Responsible Life',
      instructions: 'Write or say four short A2 sentences about useful responsibilities. Use Chapter 6 language patterns.',
      question: 'Can you describe a plan, a purpose and a positive responsibility?',
      correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of plans, purposes and responsibilities to a simple real-life context.',
      feedback: { correct: 'Use the sentence starters to connect a plan with its purpose and a useful responsibility.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Plan: “We are going to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Purpose: “We use ... to ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Responsibility: “We are going to protect/help ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Positive influence: “I want people to ...”', mode: 'Pair' },
      ],
    },
  ],
  7: [
    {
      id: 'adam-a2-language-7-teaching-patterns',
      type: 'choose-form',
      title: 'Teach … To, Warn … Against',
      instructions: 'Choose the correct word for each sentence from Chapter 7.',
      question: 'Which small words go with “teach”, “warn” and “enemy”?',
      formChoices: [
        {
          sentence: 'He started teaching people [choice] be honest, do good, stop bad and always remember Allah.',
          options: ['for', 'to', 'that'],
          answer: 1,
        },
        {
          sentence: 'They also warned their children [choice] Iblis …',
          options: ['against', 'to', 'for'],
          answer: 0,
        },
        {
          sentence: '… because Iblis was their enemy, [choice] their friend.',
          options: ['no', 'isn’t', 'not'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: 'We “teach + person + to + verb”: teaching people to be honest. We “warn + person + against + danger”: warned their children against Iblis. “X, not Y” says one thing is true and the other is not: their enemy, not their friend.',
      feedback: {
        correct: 'Well done. You chose “to”, “against” and “not”.',
        incorrect: 'Remember: teach someone to …, warn someone against …. Check the first two paragraphs of Chapter 7.',
      },
    },
    {
      id: 'adam-a2-language-7-reason-contrast',
      type: 'matching',
      title: 'Time and Life Words',
      instructions: 'Find these phrases in Chapter 7. Match each one with its meaning.',
      question: 'What do these Chapter 7 phrases mean in the story?',
      matchingHeadings: { left: 'From Chapter 7', right: 'Meaning' },
      matchingPairs: [
        { left: 'for many years', right: 'for a long time' },
        { left: 'good and hard days', right: 'happy times and difficult times' },
        { left: 'After the death of Adam (pbuh)', right: 'when he was no longer alive' },
        { left: 'took the same way', right: 'did the same thing' },
      ],
      correctAnswer: {
        'for many years': 'for a long time',
        'good and hard days': 'happy times and difficult times',
        'After the death of Adam (pbuh)': 'when he was no longer alive',
        'took the same way': 'did the same thing',
      },
      explanation: 'Time phrases such as “for many years” and “After the death of …” help us follow the story. “Hard” can mean difficult. “Took the same way” means all the prophets did the same work: they taught people to remember Allah.',
      feedback: {
        correct: 'Good. You understood the time and life phrases of Chapter 7.',
        incorrect: 'Find each phrase in Chapter 7 and read the sentence around it. What does it mean there?',
      },
    },
    {
      id: 'adam-a2-language-7-story-time',
      type: 'sequencing',
      title: 'From Adam to Later Messengers',
      instructions: 'Put the sentences from Chapter 7 in the correct order. Use the time words to help you.',
      question: 'How do “Then” and “After” move the story forward?',
      sequencingItems: [
        { id: '1', text: 'Adam and Eve lived on earth for many years.' },
        { id: '2', text: 'Then, Allah made Adam His first Messenger.' },
        { id: '3', text: 'He started teaching people …' },
        { id: '4', text: 'After the death of Adam (pbuh), Allah sent many other messengers.' },
        { id: '5', text: 'All the prophets took the same way.' },
      ],
      correctAnswer: ['1', '2', '3', '4', '5'],
      explanation: '“Then” shows the next step: after many years, Adam became the first Messenger, and he started teaching people. “After the death of Adam” moves to a later time, when other messengers came.',
      feedback: {
        correct: 'Correct. You used the time words to put the story in order.',
        incorrect: 'Look for “Then” and “After the death of …”. Which event comes first? Check Chapter 7.',
      },
    },
    {
      id: 'adam-a2-language-7-give-guidance',
      type: 'reflection',
      title: 'Say It: Give Good Guidance',
      instructions: 'Write or say four short A2 sentences that teach, warn and explain a reason.',
      question: 'Can you use Chapter 7 language to give simple positive guidance in daily life?',
      correctAnswer: null,
      explanation: 'A strong A2 response transfers the chapter’s language of teaching, warning, reason and positive influence to a familiar context.',
      feedback: { correct: 'Use the sentence starters to give clear and useful guidance.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Teach: “I teach/help my friend to ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Warn: “I warn people against ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Give a reason: “... because ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Positive goal: “I want people to ...”', mode: 'Pair' },
      ],
    },
  ],
};
