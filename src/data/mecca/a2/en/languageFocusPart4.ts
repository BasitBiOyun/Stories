import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  5: [
    {
      id: 'mecca-a2-language-5-reason-purpose-obligation',
      type: 'matching',
      title: 'Reason, Purpose and Obligation',
      instructions: 'Match each Chapter 5 expression with the job it does.',
      question: 'How does the chapter explain why Bilal acted and what he had to do?',
      matchingPairs: [
        { left: 'Umayya liked Bilal because he was obedient', right: 'because + clause gives a reason' },
        { left: 'Bilal had to work very hard', right: 'had to + base verb expresses a past necessity or obligation' },
        { left: 'to please his master', right: 'to + base verb can explain the purpose of an action' },
        { left: 'to protect himself from his master’s anger', right: 'to + base verb can also explain a second purpose' },
      ],
      correctAnswer: {
        'Umayya liked Bilal because he was obedient': 'because + clause gives a reason',
        'Bilal had to work very hard': 'had to + base verb expresses a past necessity or obligation',
        'to please his master': 'to + base verb can explain the purpose of an action',
        'to protect himself from his master’s anger': 'to + base verb can also explain a second purpose',
      },
      explanation: 'Chapter 5 uses “because” for reason, “had to” for past obligation, and “to + verb” for purpose.',
      feedback: {
        correct: 'Correct. You separated reason, obligation and purpose.',
        incorrect: 'Ask whether the phrase explains why something was true, what was necessary, or the aim of an action.',
      },
    },
    {
      id: 'mecca-a2-language-5-thought-future',
      type: 'matching',
      title: 'Talking About a Future Seen from the Past',
      instructions: 'Match each Chapter 5 pattern with its meaning.',
      question: 'How does the chapter describe what Bilal expected about his future?',
      matchingPairs: [
        { left: 'Bilal thought ...', right: 'thought introduces an idea or belief in the past' },
        { left: 'he would be a slave forever', right: 'would + base verb shows a future situation as Bilal imagined it at that past time' },
        { left: 'He did not have any money', right: 'did not have any + noun expresses absence in the past' },
        { left: 'He had no power', right: 'had no + noun is another way to express complete absence in the past' },
      ],
      correctAnswer: {
        'Bilal thought ...': 'thought introduces an idea or belief in the past',
        'he would be a slave forever': 'would + base verb shows a future situation as Bilal imagined it at that past time',
        'He did not have any money': 'did not have any + noun expresses absence in the past',
        'He had no power': 'had no + noun is another way to express complete absence in the past',
      },
      explanation: '“Thought + would” reports an expectation from a past point of view. The chapter also uses two common ways to say that something was absent.',
      feedback: {
        correct: 'Good. You identified past thought, expected future and absence.',
        incorrect: 'Focus on “thought”, “would”, “did not have any”, and “had no”.',
      },
    },
    {
      id: 'mecca-a2-language-5-reporting-message',
      type: 'matching',
      title: 'Reporting a Message and Instructions',
      instructions: 'Match each expression with the language function it shows.',
      question: 'How does Chapter 5 report what people heard, taught and told others to do?',
      matchingPairs: [
        { left: 'Bilal heard people talking about a new Prophet', right: 'hear + person/people + -ing describes an action that someone notices by hearing' },
        { left: 'The Prophet was telling everyone to worship only Allah', right: 'tell + person + to + verb reports an instruction or message' },
        { left: 'He taught that people must be fair and equal', right: 'must + base verb expresses a strong rule, duty or principle' },
        { left: 'He told the people ... to stop worshipping idols', right: 'tell + person + to + verb can be followed by stop + -ing when asking an activity to end' },
      ],
      correctAnswer: {
        'Bilal heard people talking about a new Prophet': 'hear + person/people + -ing describes an action that someone notices by hearing',
        'The Prophet was telling everyone to worship only Allah': 'tell + person + to + verb reports an instruction or message',
        'He taught that people must be fair and equal': 'must + base verb expresses a strong rule, duty or principle',
        'He told the people ... to stop worshipping idols': 'tell + person + to + verb can be followed by stop + -ing when asking an activity to end',
      },
      explanation: 'The chapter combines language for hearing an action, reporting instructions, expressing a strong principle, and asking an activity to stop.',
      feedback: {
        correct: 'Correct. You identified four different ways the chapter reports a message.',
        incorrect: 'Look at who heard, who told someone to act, where “must” appears, and what action was asked to stop.',
      },
    },
    {
      id: 'mecca-a2-language-5-production',
      type: 'reflection',
      title: 'Say It: A Message That Changes a Plan',
      instructions: 'Write or say four short A2 sentences about an imaginary person who hears a new message and changes how they think about the future. Use at least three Chapter 5 language patterns. Do not retell the Quick Challenge answer.',
      question: 'Can you connect a past belief, a new message, a rule or instruction, and a purpose?',
      correctAnswer: null,
      explanation: 'A strong response can use “thought ... would ...”, “heard people talking about ...”, “must ...”, “told ... to ...”, and “to + verb” for purpose.',
      feedback: {
        correct: 'Build a short situation with one old expectation, one new message, one instruction or rule, and one purpose.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Past belief — Start with “He/She thought ... would ...”.', mode: 'Individual' },
        { question: 'New information — Add “He/She heard people talking about ...”.', mode: 'Individual' },
        { question: 'Rule or instruction — Use “must ...” or “told ... to ...”.', mode: 'Individual' },
        { question: 'Purpose — Finish with “to + verb”.', mode: 'Pair' },
      ],
    },
  ],
};
