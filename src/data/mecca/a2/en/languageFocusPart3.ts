import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'mecca-a2-language-4-frequency-treatment',
      type: 'matching',
      title: 'Describing Repeated Treatment',
      instructions: 'Match each Chapter 4 expression with the job it does.',
      question: 'How does the chapter describe repeated behaviour and treatment?',
      matchingPairs: [
        { left: 'Umayya was always very unkind to Bilal', right: 'always + adjective shows that a condition happened regularly' },
        { left: 'His master was often angry and harsh', right: 'often + adjective shows something happened many times, but not all the time' },
        { left: 'Every member of the family was rude to him', right: 'every + singular noun includes all members of a group one by one' },
        { left: 'They did not respect him as a person', right: 'did not + base verb forms a negative statement about a past action or attitude' },
      ],
      correctAnswer: {
        'Umayya was always very unkind to Bilal': 'always + adjective shows that a condition happened regularly',
        'His master was often angry and harsh': 'often + adjective shows something happened many times, but not all the time',
        'Every member of the family was rude to him': 'every + singular noun includes all members of a group one by one',
        'They did not respect him as a person': 'did not + base verb forms a negative statement about a past action or attitude',
      },
      explanation: 'Chapter 4 uses frequency words, “every”, and past negatives to describe treatment that continued over time.',
      feedback: {
        correct: 'Correct. You identified frequency, group reference and negative past language.',
        incorrect: 'Look for “always”, “often”, “every”, and “did not”.',
      },
    },
    {
      id: 'mecca-a2-language-4-purpose-routine',
      type: 'matching',
      title: 'Talking About Purpose and Daily Routine',
      instructions: 'Match each expression with its language function.',
      question: 'How does the chapter explain why people acted and what Bilal did each day?',
      matchingPairs: [
        { left: 'They called Bilal ... to hurt his feelings', right: 'to + base verb can explain the purpose of an action' },
        { left: 'He looked after his master’s camels', right: 'look after means take care of a person, animal or thing' },
        { left: 'worked ... all day', right: 'all day shows the duration of an activity' },
        { left: 'his job was to bring food and wine', right: 'job was to + base verb explains a person’s duty or regular task' },
      ],
      correctAnswer: {
        'They called Bilal ... to hurt his feelings': 'to + base verb can explain the purpose of an action',
        'He looked after his master’s camels': 'look after means take care of a person, animal or thing',
        'worked ... all day': 'all day shows the duration of an activity',
        'his job was to bring food and wine': 'job was to + base verb explains a person’s duty or regular task',
      },
      explanation: 'The chapter combines purpose language with expressions for regular work and duration.',
      feedback: {
        correct: 'Good. You separated purpose, responsibility and duration.',
        incorrect: 'Ask whether the phrase tells why something happened, what the task was, or how long it lasted.',
      },
    },
    {
      id: 'mecca-a2-language-4-obligation-possibility',
      type: 'matching',
      title: 'Rules, Possibility and Obligation',
      instructions: 'Match each Chapter 4 pattern with what it expresses.',
      question: 'How does the chapter show what people could or had to do?',
      matchingPairs: [
        { left: 'No one could say “No” to him', right: 'could + base verb talks about what was possible or allowed in a past situation' },
        { left: 'Bilal had to be patient', right: 'had to + base verb expresses a past necessity or obligation' },
        { left: 'Bilal had to ... work hard every day', right: 'had to + base verb can describe a repeated duty in the past' },
        { left: 'anything negative', right: 'anything is common after a negative expression when no particular thing is specified' },
      ],
      correctAnswer: {
        'No one could say “No” to him': 'could + base verb talks about what was possible or allowed in a past situation',
        'Bilal had to be patient': 'had to + base verb expresses a past necessity or obligation',
        'Bilal had to ... work hard every day': 'had to + base verb can describe a repeated duty in the past',
        'anything negative': 'anything is common after a negative expression when no particular thing is specified',
      },
      explanation: '“Could” describes possibility in the past, while “had to” shows necessity or obligation.',
      feedback: {
        correct: 'Correct. You distinguished past possibility from past obligation.',
        incorrect: 'Focus on “could” for possibility and “had to” for necessity.',
      },
    },
    {
      id: 'mecca-a2-language-4-production',
      type: 'reflection',
      title: 'Say It: Describe a Difficult Routine',
      instructions: 'Write or say four short A2 sentences about an imaginary person with a difficult daily routine. Use at least three Chapter 4 language patterns. Do not retell the Quick Challenge answer.',
      question: 'Can you describe repeated treatment, a daily duty, a purpose and an obligation?',
      correctAnswer: null,
      explanation: 'A strong response can use “always/often”, “job was to ...”, “to + verb” for purpose, “could/couldn’t”, and “had to ...”.',
      feedback: {
        correct: 'Build a short routine with one frequency word, one duty, one purpose and one obligation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Frequency — Use “always” or “often”.', mode: 'Individual' },
        { question: 'Duty — Add “His/Her job was to ...”.', mode: 'Individual' },
        { question: 'Purpose — Add an action with “to + verb”.', mode: 'Individual' },
        { question: 'Obligation — Finish with “He/She had to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
