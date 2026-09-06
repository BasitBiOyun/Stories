import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  8: [
    {
      id: 'mecca-a2-language-8-dialogue', type: 'matching', title: 'Questions, Answers and Pressure',
      instructions: 'Match each Chapter 8 pattern with its job.', question: 'How does the chapter build the confrontation?',
      matchingPairs: [
        { left: 'Is it true? / Did you ...?', right: 'asks for confirmation about a past action' },
        { left: 'refused to + verb', right: 'shows that someone would not do an action' },
        { left: 'forced + person + to + verb', right: 'shows pressure or compulsion' },
        { left: 'If + present, will + verb', right: 'connects a condition with a future result' },
      ],
      correctAnswer: {
        'Is it true? / Did you ...?': 'asks for confirmation about a past action',
        'refused to + verb': 'shows that someone would not do an action',
        'forced + person + to + verb': 'shows pressure or compulsion',
        'If + present, will + verb': 'connects a condition with a future result',
      },
      explanation: 'Chapter 8 combines questioning, refusal, pressure and condition-result language.',
      feedback: { correct: 'Correct.', incorrect: 'Separate question, refusal, pressure and condition.' },
    },
    {
      id: 'mecca-a2-language-8-refusal', type: 'multiple-choice', title: 'Refusing an Action',
      instructions: 'Choose the correct sentence.', question: 'Which sentence correctly uses refused to + verb?',
      options: ['Bilal refused to worship the idols.', 'Bilal refused worship the idols.', 'Bilal refused to worshipped the idols.'], correctAnswer: 0,
      explanation: 'Use “refused to + base verb”.', feedback: { correct: 'Correct.', incorrect: 'Use refused to followed by the base verb.' },
    },
    {
      id: 'mecca-a2-language-8-condition', type: 'fill-blanks', title: 'Condition and Result',
      instructions: 'Complete the future result.', question: 'Which helper completes the sentence?',
      fillBlanksText: 'If you speak well of our idols, you [blank] be free.', correctAnswer: 'will',
      explanation: 'The chapter uses if + present with will + verb for a future result.', feedback: { correct: 'Correct.', incorrect: 'Use the future helper in the result clause.' },
    },
    {
      id: 'mecca-a2-language-8-production', type: 'reflection', title: 'Use the Language Safely',
      instructions: 'Write or say four short A2 sentences about refusing unfair pressure in a safe everyday situation.', question: 'Can you use a question, refusal and condition-result pattern?', correctAnswer: null,
      explanation: 'Transfer the language without recreating the violent scene.', feedback: { correct: 'Use at least three Chapter 8 patterns.', incorrect: '' },
      discussionPrompts: [
        { question: 'Ask one past yes/no question.', mode: 'Individual' },
        { question: 'Use “refused to ...”.', mode: 'Individual' },
        { question: 'Use “forced ... to ...” only in a safe non-violent example.', mode: 'Individual' },
        { question: 'Finish with an if–will sentence.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  9: [
    {
      id: 'mecca-a2-language-9-response', type: 'matching', title: 'Reaction and Request',
      instructions: 'Match each Chapter 9 pattern with its job.', question: 'How does the chapter describe Abu Bakr’s response?',
      matchingPairs: [
        { left: 'heard that + clause', right: 'reports information someone received' },
        { left: 'right away', right: 'shows immediate action' },
        { left: 'asked + person + to + verb', right: 'reports a request' },
        { left: 'did not want to + verb', right: 'shows an unwilling intention' },
      ],
      correctAnswer: { 'heard that + clause': 'reports information someone received', 'right away': 'shows immediate action', 'asked + person + to + verb': 'reports a request', 'did not want to + verb': 'shows an unwilling intention' },
      explanation: 'Chapter 9 moves from information to immediate action and repeated requests.', feedback: { correct: 'Correct.', incorrect: 'Separate information, speed, request and intention.' },
    },
    {
      id: 'mecca-a2-language-9-question', type: 'multiple-choice', title: 'Asking About a Past Action',
      instructions: 'Choose the grammatically correct question.', question: 'Which question uses did + base verb correctly?',
      options: ['What did he do wrong?', 'What did he did wrong?', 'What he did do wrong?'], correctAnswer: 0,
      explanation: 'Past questions use did + subject + base verb.', feedback: { correct: 'Correct.', incorrect: 'After did, use the base verb.' },
    },
    {
      id: 'mecca-a2-language-9-request', type: 'fill-blanks', title: 'Reporting a Request',
      instructions: 'Complete the request pattern.', question: 'Which word is missing?',
      fillBlanksText: 'Abu Bakr asked Umayya [blank] sell Bilal to him.', correctAnswer: 'to',
      explanation: 'Use asked + person + to + verb.', feedback: { correct: 'Correct.', incorrect: 'Use to before the requested action.' },
    },
    {
      id: 'mecca-a2-language-9-production', type: 'reflection', title: 'Respond to a Problem',
      instructions: 'Write or say four short A2 sentences about hearing of a safe everyday problem and helping.', question: 'Can you report information, act quickly, ask a question and make a request?', correctAnswer: null,
      explanation: 'Use at least three Chapter 9 patterns.', feedback: { correct: 'Keep the response practical and safe.', incorrect: '' },
      discussionPrompts: [
        { question: 'Begin with “I heard that ...”.', mode: 'Individual' },
        { question: 'Add “right away”.', mode: 'Individual' },
        { question: 'Ask one did-question.', mode: 'Individual' },
        { question: 'Use “asked ... to ...”.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'mecca-a2-language-10-condition-price', type: 'matching', title: 'Price, Condition and Freedom',
      instructions: 'Match each Chapter 10 pattern with its job.', question: 'How does the chapter describe price and freedom?',
      matchingPairs: [
        { left: 'agreed to + verb', right: 'shows acceptance of an action' },
        { left: 'If you offered ..., I would ...', right: 'describes an unreal or imagined condition' },
        { left: 'no longer + noun/adjective', right: 'shows that an earlier state has ended' },
        { left: 'could + verb', right: 'shows past possibility or ability' },
      ],
      correctAnswer: { 'agreed to + verb': 'shows acceptance of an action', 'If you offered ..., I would ...': 'describes an unreal or imagined condition', 'no longer + noun/adjective': 'shows that an earlier state has ended', 'could + verb': 'shows past possibility or ability' },
      explanation: 'Chapter 10 uses agreement, imagined conditions and change of status.', feedback: { correct: 'Correct.', incorrect: 'Separate agreement, condition, ended state and ability.' },
    },
    {
      id: 'mecca-a2-language-10-condition', type: 'multiple-choice', title: 'Imagined Condition',
      instructions: 'Choose the sentence that follows the chapter pattern.', question: 'Which sentence is correct?',
      options: ['If you asked me for more, I would still pay.', 'If you ask me for more, I would paid.', 'If you asked me for more, I will still paid.'], correctAnswer: 0,
      explanation: 'The chapter uses if + past with would + base verb for an imagined condition.', feedback: { correct: 'Correct.', incorrect: 'Use asked in the if-clause and would + base verb in the result.' },
    },
    {
      id: 'mecca-a2-language-10-status', type: 'fill-blanks', title: 'A Changed Status',
      instructions: 'Complete the expression.', question: 'Which word completes the phrase?',
      fillBlanksText: 'Bilal was now a free man and no [blank] a slave.', correctAnswer: 'longer',
      explanation: '“No longer” shows that a previous state has ended.', feedback: { correct: 'Correct.', incorrect: 'Use the two-word expression meaning not anymore.' },
    },
    {
      id: 'mecca-a2-language-10-production', type: 'reflection', title: 'Describe a Change',
      instructions: 'Write or say four short A2 sentences about a positive change in someone’s situation.', question: 'Can you use agreement, an imagined condition and no longer?', correctAnswer: null,
      explanation: 'Use at least three Chapter 10 patterns.', feedback: { correct: 'Keep the example realistic and simple.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “agreed to ...”.', mode: 'Individual' },
        { question: 'Add one “If ..., I would ...” sentence.', mode: 'Individual' },
        { question: 'Use “no longer ...”.', mode: 'Individual' },
        { question: 'Add one could/couldn’t sentence.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  11: [
    {
      id: 'mecca-a2-language-11-change-choice', type: 'matching', title: 'Change, Time and Choice',
      instructions: 'Match each Chapter 11 pattern with its job.', question: 'How does the chapter connect Bilal’s freedom with the first Adhan?',
      matchingPairs: [
        { left: 'after + clause', right: 'shows one event happened later than another' },
        { left: 'wanted someone to + verb', right: 'expresses a desired action by another person' },
        { left: 'chose + person', right: 'shows a selection' },
        { left: 'even when + clause', right: 'shows something remained true despite difficulty' },
      ],
      correctAnswer: { 'after + clause': 'shows one event happened later than another', 'wanted someone to + verb': 'expresses a desired action by another person', 'chose + person': 'shows a selection', 'even when + clause': 'shows something remained true despite difficulty' },
      explanation: 'Chapter 11 uses time, selection and contrast-with-difficulty language.', feedback: { correct: 'Correct.', incorrect: 'Separate time, desire, selection and contrast.' },
    },
    {
      id: 'mecca-a2-language-11-purpose', type: 'multiple-choice', title: 'Choosing Someone for a Task',
      instructions: 'Choose the correct sentence.', question: 'Which sentence correctly expresses the Prophet’s wish?',
      options: ['He wanted someone to call people to prayer.', 'He wanted someone call people to prayer.', 'He wanted to someone called people to prayer.'], correctAnswer: 0,
      explanation: 'Use wanted + person + to + base verb.', feedback: { correct: 'Correct.', incorrect: 'Put the person before to + base verb.' },
    },
    {
      id: 'mecca-a2-language-11-time', type: 'fill-blanks', title: 'Connecting Events',
      instructions: 'Complete the time phrase.', question: 'Which word connects the Hijrah with the next event?',
      fillBlanksText: '[blank] the Hijrah, the Prophet (pbuh) wanted someone to call people to prayer.', correctAnswer: 'After',
      explanation: '“After + noun/event” places one event later than another.', feedback: { correct: 'Correct.', incorrect: 'Use the chapter time connector.' },
    },
    {
      id: 'mecca-a2-language-11-production', type: 'reflection', title: 'Choose Someone for a Task',
      instructions: 'Write or say four short A2 sentences about choosing someone for a positive group task.', question: 'Can you use after, wanted someone to, chose and even when?', correctAnswer: null,
      explanation: 'Use at least three Chapter 11 patterns.', feedback: { correct: 'Keep the example positive and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Begin with “After ...”.', mode: 'Individual' },
        { question: 'Use “wanted someone to ...”.', mode: 'Individual' },
        { question: 'Say who was chosen.', mode: 'Individual' },
        { question: 'Add one “even when ...” sentence.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  12: [
    {
      id: 'mecca-a2-language-12-habit-message', type: 'matching', title: 'Habit, Meaning and Equality',
      instructions: 'Match each Chapter 12 pattern with its job.', question: 'How does the chapter connect Bilal’s routine with the Prophet’s teaching?',
      matchingPairs: [
        { left: 'used to + verb', right: 'describes a repeated past habit' },
        { left: 'which means + clause', right: 'explains the meaning of words' },
        { left: 'told + person + to + verb', right: 'reports an instruction' },
        { left: 'all + plural noun + are', right: 'makes a general statement about everyone' },
      ],
      correctAnswer: { 'used to + verb': 'describes a repeated past habit', 'which means + clause': 'explains the meaning of words', 'told + person + to + verb': 'reports an instruction', 'all + plural noun + are': 'makes a general statement about everyone' },
      explanation: 'Chapter 12 combines past habit, explanation, instruction and general statements.', feedback: { correct: 'Correct.', incorrect: 'Separate habit, meaning, instruction and general truth.' },
    },
    {
      id: 'mecca-a2-language-12-habit', type: 'multiple-choice', title: 'Past Habit',
      instructions: 'Choose the sentence that describes a repeated past habit.', question: 'Which sentence is correct?',
      options: ['Bilal used to start the morning call very early.', 'Bilal use to started the morning call.', 'Bilal was use to start the morning call.'], correctAnswer: 0,
      explanation: 'Use “used to + base verb” for a repeated past habit.', feedback: { correct: 'Correct.', incorrect: 'Use used to followed by the base verb.' },
    },
    {
      id: 'mecca-a2-language-12-instruction', type: 'fill-blanks', title: 'Reported Instruction',
      instructions: 'Complete the pattern.', question: 'Which word is missing?',
      fillBlanksText: 'The Prophet (pbuh) told him [blank] repeat it every morning.', correctAnswer: 'to',
      explanation: 'Use told + person + to + verb.', feedback: { correct: 'Correct.', incorrect: 'Use to before the instructed action.' },
    },
    {
      id: 'mecca-a2-language-12-production', type: 'reflection', title: 'Explain a Routine and a Principle',
      instructions: 'Write or say four short A2 sentences about a routine and one fair principle.', question: 'Can you use used to, which means, told ... to, and all ... are?', correctAnswer: null,
      explanation: 'Use at least three Chapter 12 patterns.', feedback: { correct: 'Keep the language simple and respectful.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “used to ...”.', mode: 'Individual' },
        { question: 'Explain one phrase with “which means ...”.', mode: 'Individual' },
        { question: 'Report one instruction.', mode: 'Individual' },
        { question: 'End with an “All ... are ...” statement.', mode: 'Pair' },
      ],
    },
  ],
};

export const meccaA2LanguageFocusExercisesPart12: Record<number, Exercise[]> = {
  13: [
    {
      id: 'mecca-a2-language-13-comparison', type: 'matching', title: 'Equality and Comparison',
      instructions: 'Match each Chapter 13 pattern with its job.', question: 'How does the chapter compare people and explain what matters?',
      matchingPairs: [
        { left: 'not better than', right: 'rejects a claim of superiority' },
        { left: 'because of + noun', right: 'gives a reason before a noun phrase' },
        { left: 'too + adjective + to + verb', right: 'shows that a condition prevents an action' },
        { left: 'What matters is + noun phrase', right: 'states what is important' },
      ],
      correctAnswer: { 'not better than': 'rejects a claim of superiority', 'because of + noun': 'gives a reason before a noun phrase', 'too + adjective + to + verb': 'shows that a condition prevents an action', 'What matters is + noun phrase': 'states what is important' },
      explanation: 'Chapter 13 combines equality language with reason, degree and importance.', feedback: { correct: 'Correct.', incorrect: 'Separate comparison, reason, degree and importance.' },
    },
    {
      id: 'mecca-a2-language-13-degree', type: 'multiple-choice', title: 'Too ... to ...',
      instructions: 'Choose the correct sentence.', question: 'Which sentence correctly shows that sadness prevented an action?',
      options: ['Bilal was too sad to call the prayer.', 'Bilal was too sad calling the prayer.', 'Bilal too was sad to called the prayer.'], correctAnswer: 0,
      explanation: 'Use too + adjective + to + base verb.', feedback: { correct: 'Correct.', incorrect: 'Use too + adjective + to + base verb.' },
    },
    {
      id: 'mecca-a2-language-13-importance', type: 'fill-blanks', title: 'What Is Important?',
      instructions: 'Complete the statement.', question: 'Which word completes the chapter pattern?',
      fillBlanksText: 'What [blank] is the heart and good actions.', correctAnswer: 'matters',
      explanation: '“What matters is ...” introduces what the speaker considers important.', feedback: { correct: 'Correct.', incorrect: 'Use the verb from the final paragraph.' },
    },
    {
      id: 'mecca-a2-language-13-production', type: 'reflection', title: 'State a Fair Principle',
      instructions: 'Write or say four short A2 sentences about fairness and what makes a person valuable.', question: 'Can you compare fairly, give a reason and state what matters?', correctAnswer: null,
      explanation: 'Use at least three Chapter 13 patterns without adding claims outside the chapter’s theme.', feedback: { correct: 'Keep the message respectful and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “not better than ...”.', mode: 'Individual' },
        { question: 'Give one reason with “because of ...”.', mode: 'Individual' },
        { question: 'Use one “too ... to ...” sentence in a neutral example.', mode: 'Individual' },
        { question: 'Finish with “What matters is ...”.', mode: 'Pair' },
      ],
    },
  ],
};
