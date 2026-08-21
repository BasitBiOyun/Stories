import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific language work.
 * These are not generated from a fixed template: each chapter is read first,
 * then only language that is genuinely useful and visible in that text is practised.
 */
export const yunusA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'yunus-a2-language-1-past-life-forms',
      type: 'matching',
      title: 'Past Life Forms',
      instructions: 'Match each verb or phrase with the past form used in Chapter 1.',
      question: 'How does Chapter 1 talk about finished events in Yunus Emre’s life?',
      matchingPairs: [
        { left: 'be', right: 'was' },
        { left: 'be born', right: 'was born' },
        { left: 'become', right: 'became' },
        { left: 'travel', right: 'traveled' },
      ],
      correctAnswer: {
        be: 'was',
        'be born': 'was born',
        become: 'became',
        travel: 'traveled',
      },
      explanation: 'Chapter 1 is a short biography. It uses past forms such as “was born”, “became” and “traveled” to tell finished events in Yunus Emre’s life.',
      feedback: {
        correct: 'Good. You found the main past-life forms used in the chapter.',
        incorrect: 'Return to Chapter 1 and look for “was born”, “became” and “traveled”.',
      },
    },
    {
      id: 'yunus-a2-language-1-meaning-links',
      type: 'matching',
      title: 'Meaning Links',
      instructions: 'Match each story chunk with the job it does in the sentence.',
      question: 'What do because, after and when help the writer express?',
      matchingPairs: [
        { left: 'because he wrote and said them in simple Turkish', right: 'gives a reason' },
        { left: 'After he completed his madrasa education', right: 'shows what happened next' },
        { left: 'when Mevlana died', right: 'connects an event to a time' },
      ],
      correctAnswer: {
        'because he wrote and said them in simple Turkish': 'gives a reason',
        'After he completed his madrasa education': 'shows what happened next',
        'when Mevlana died': 'connects an event to a time',
      },
      explanation: 'The chapter uses “because” for a reason, “after” to organise events, and “when” to connect information to a time.',
      feedback: {
        correct: 'Correct. You connected the language chunks with their functions.',
        incorrect: 'Read the full sentences around because, after and when. Ask: reason, next event, or time?',
      },
    },
    {
      id: 'yunus-a2-language-1-mini-biography',
      type: 'reflection',
      title: 'Say It: Mini Biography',
      instructions: 'Use Chapter 1 to give a short three-sentence biography. Speak in complete sentences.',
      question: 'Can you retell three important facts about Yunus Emre using the chapter’s language?',
      correctAnswer: null,
      explanation: 'A clear A2 response can combine a birth fact, an education or life-change fact, and one more past event from the chapter.',
      feedback: {
        correct: 'Use three accurate past-life sentences from Chapter 1.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Start with birth: “Yunus Emre was born ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Continue with change: “After he completed ..., he became ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Add one more fact: “He traveled ...”, “He lived ...”, or “He was ... when ...”', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'yunus-a2-language-2-past-habit-chunks',
      type: 'matching',
      title: 'Describing Past Habits',
      instructions: 'Match each beginning with the exact kind of language Chapter 2 uses to describe the dervishes.',
      question: 'Which chunks help the chapter describe what the dervishes were like and what they regularly did?',
      matchingPairs: [
        { left: 'Dervishes were', right: 'kind and cheerful' },
        { left: 'They tried to', right: 'understand everyone' },
        { left: 'They shared', right: 'what they had with the needy' },
        { left: 'They could call', right: 'themselves poor' },
      ],
      correctAnswer: {
        'Dervishes were': 'kind and cheerful',
        'They tried to': 'understand everyone',
        'They shared': 'what they had with the needy',
        'They could call': 'themselves poor',
      },
      explanation: 'Chapter 2 mixes “were + adjective” with action chunks such as “tried to + verb”, “shared + object” and “could call” to describe character and repeated behaviour in the past.',
      feedback: {
        correct: 'Good. You rebuilt the chapter’s main character-and-habit patterns.',
        incorrect: 'Return to Chapter 2 and look for “were”, “tried to”, “shared” and “could call”.',
      },
    },
    {
      id: 'yunus-a2-language-2-reason-contrast-links',
      type: 'matching',
      title: 'Reason and Contrast',
      instructions: 'Match each Chapter 2 expression with the meaning relationship it creates.',
      question: 'How does the chapter connect reasons, results and contrasting ideas?',
      matchingPairs: [
        { left: 'That is why', right: 'introduces a result' },
        { left: 'even if they were rich', right: 'shows a surprising condition' },
        { left: 'not in their hearts, but in their hands', right: 'contrasts two ideas' },
        { left: 'Because of the Creator', right: 'gives a reason or motive' },
      ],
      correctAnswer: {
        'That is why': 'introduces a result',
        'even if they were rich': 'shows a surprising condition',
        'not in their hearts, but in their hands': 'contrasts two ideas',
        'Because of the Creator': 'gives a reason or motive',
      },
      explanation: 'The chapter does more than list qualities. It uses linking language to explain why the dervishes acted in certain ways and to contrast wealth in the hand with wealth in the heart.',
      feedback: {
        correct: 'Correct. You identified the function of each linking expression.',
        incorrect: 'Read the sentence around each expression and decide whether it gives a reason, result, condition or contrast.',
      },
    },
    {
      id: 'yunus-a2-language-2-character-portrait',
      type: 'reflection',
      title: 'Say It: Character Portrait',
      instructions: 'Describe the dervishes in three short sentences using language from Chapter 2.',
      question: 'Can you describe both their character and their actions without simply copying one sentence?',
      correctAnswer: null,
      explanation: 'A strong A2 response combines one character description, one repeated action and one contrast or reason from the chapter.',
      feedback: {
        correct: 'Use accurate Chapter 2 language to describe character, action and contrast.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe character: “They were ... and ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Describe an action: “They tried to ...” or “They shared ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Add a contrast or reason: “They called themselves poor, but ...” or “Because of ..., they ...”', mode: 'Pair' },
      ],
    },
  ],
  3: [
    {
      id: 'yunus-a2-language-3-need-must-cant',
      type: 'matching',
      title: 'Needs, Must and Can’t',
      instructions: 'Match each sentence from Chapter 3 with the meaning it expresses.',
      question: 'What job do needs, must and can’t do in the poem?',
      matchingPairs: [
        { left: 'A dervish needs a wounded heart', right: 'describes something necessary' },
        { left: 'He needs to be as easy going as a sheep', right: 'describes a quality that is needed' },
        { left: 'He must be tongueless when people make fun of him', right: 'states a strong requirement' },
        { left: 'You can’t be a dervish', right: 'says something is not possible' },
      ],
      correctAnswer: {
        'A dervish needs a wounded heart': 'describes something necessary',
        'He needs to be as easy going as a sheep': 'describes a quality that is needed',
        'He must be tongueless when people make fun of him': 'states a strong requirement',
        'You can’t be a dervish': 'says something is not possible',
      },
      explanation: 'The poem uses different forms for different purposes: “needs” identifies what is necessary, “must” gives a strong requirement, and “can’t” says that something is not possible.',
      feedback: {
        correct: 'Correct. You connected each form with its meaning in the poem.',
        incorrect: 'Read the poem again and ask whether each sentence describes a need, a strong requirement, or something impossible.',
      },
    },
    {
      id: 'yunus-a2-language-3-living-with-less',
      type: 'matching',
      title: 'Living with Less',
      instructions: 'Match each Chapter 3 phrase with the part of daily life it describes.',
      question: 'How does the chapter use “less” to describe a moderate and disciplined life?',
      matchingPairs: [
        { left: 'ate less', right: 'food' },
        { left: 'spoke less', right: 'speech' },
        { left: 'slept less', right: 'sleep' },
        { left: 'spent their time on useful activities', right: 'time' },
      ],
      correctAnswer: {
        'ate less': 'food',
        'spoke less': 'speech',
        'slept less': 'sleep',
        'spent their time on useful activities': 'time',
      },
      explanation: 'The repeated “less” pattern shows smaller amounts of eating, speaking and sleeping. The final phrase adds the positive side of discipline: using time for useful activities.',
      feedback: {
        correct: 'Good. You saw how the repeated pattern builds the idea of a moderate life.',
        incorrect: 'Look at the final paragraph and connect each action with the part of daily life it controls.',
      },
    },
    {
      id: 'yunus-a2-language-3-difficult-path',
      type: 'reflection',
      title: 'Say It: The Difficult Path',
      instructions: 'Use the language of Chapter 3 to explain the dervish path in three short sentences.',
      question: 'Can you combine a need, a strong requirement and one disciplined habit?',
      correctAnswer: null,
      explanation: 'A strong A2 response reuses the chapter’s own language functions rather than memorising a grammar rule.',
      feedback: {
        correct: 'Use one sentence with needs, one with must, and one about the disciplined way of life.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State a need: “A dervish needs ...”', mode: 'Individual' },
        { question: 'Sentence 2 — State a strong requirement: “He must ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Describe the lifestyle: “Dervishes ate/spoke/slept less and ...”', mode: 'Pair' },
      ],
    },
  ],
};
