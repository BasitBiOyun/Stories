import type { Exercise } from '../../../../types';

/**
 * Chapter 8 Language Focus, manually authored from the English story text.
 * It avoids repeating the Quick Challenge about why Abraham stayed calm.
 */
export const abrahamA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  8: [
    {
      id: 'abraham-a2-language-8-degree-and-result',
      type: 'matching',
      title: 'Degree and Result',
      instructions: 'Match each Chapter 8 expression with what it shows.',
      question: 'How does the chapter show that a quality is strong enough to cause a result?',
      matchingPairs: [
        { left: 'too arrogant to accept their mistake', right: 'the arrogance prevents the action' },
        { left: 'so huge that it was dangerous to go near it', right: 'a very strong quality leads to a result' },
        { left: 'so hot', right: 'emphasises a very high degree of heat' },
        { left: 'Birds could not fly over the flames', right: 'states an inability caused by the dangerous situation' },
      ],
      correctAnswer: {
        'too arrogant to accept their mistake': 'the arrogance prevents the action',
        'so huge that it was dangerous to go near it': 'a very strong quality leads to a result',
        'so hot': 'emphasises a very high degree of heat',
        'Birds could not fly over the flames': 'states an inability caused by the dangerous situation',
      },
      explanation: '“Too + adjective + to ...” can show that a quality prevents an action. “So + adjective + that ...” connects a strong degree with a result. “Could not + base verb” expresses past inability.',
      feedback: {
        correct: 'Good. You separated degree, result and inability.',
        incorrect: 'Look for “too ... to”, “so ... that”, “so + adjective”, and “could not + verb”.',
      },
    },
    {
      id: 'abraham-a2-language-8-purpose',
      type: 'matching',
      title: 'Why Did They Do It?',
      instructions: 'Match each action with the purpose expressed in Chapter 8.',
      question: 'How does the chapter use “to + verb” to explain purpose?',
      matchingPairs: [
        { left: 'People from many different towns came', right: 'to watch Abraham' },
        { left: 'People used this machine', right: 'to throw Abraham into the fire' },
        { left: 'They collected firewood', right: 'for the fire' },
        { left: 'They placed Abraham on a catapult', right: 'as part of preparing to throw him' },
      ],
      correctAnswer: {
        'People from many different towns came': 'to watch Abraham',
        'People used this machine': 'to throw Abraham into the fire',
        'They collected firewood': 'for the fire',
        'They placed Abraham on a catapult': 'as part of preparing to throw him',
      },
      explanation: 'Chapter 8 often gives a purpose after an action. “Come to watch” and “use ... to throw” use “to + base verb” for purpose. “For + noun” can also express purpose, as in “firewood for the fire”.',
      feedback: {
        correct: 'Correct. You connected actions with their purposes.',
        incorrect: 'Find the action first, then ask “Why did they do it?”',
      },
    },
    {
      id: 'abraham-a2-language-8-commands-and-sequence',
      type: 'matching',
      title: 'Commands and Story Movement',
      instructions: 'Match each expression with its job in the story.',
      question: 'How does Chapter 8 give commands and move events forward?',
      matchingPairs: [
        { left: 'Burn him!', right: 'gives a direct command' },
        { left: 'Punish him!', right: 'gives another direct command' },
        { left: 'for days', right: 'shows how long an action continued' },
        { left: 'finally', right: 'marks the last stage after a long preparation' },
      ],
      correctAnswer: {
        'Burn him!': 'gives a direct command',
        'Punish him!': 'gives another direct command',
        'for days': 'shows how long an action continued',
        'finally': 'marks the last stage after a long preparation',
      },
      explanation: 'Imperatives use the base verb directly to give commands. “For + time period” expresses duration, while “finally” signals the last stage of a sequence.',
      feedback: {
        correct: 'Good. You identified commands, duration and sequence.',
        incorrect: 'Look at the verb form in the shouted commands, then find the expressions for duration and the final stage.',
      },
    },
    {
      id: 'abraham-a2-language-8-production',
      type: 'reflection',
      title: 'Say It: Describe a Dangerous Plan',
      instructions: 'Write or say four or five short A2 sentences about a dangerous situation or a plan. Use at least four Chapter 8 language patterns. Do not retell the Quick Challenge answer.',
      question: 'Can you describe degree, result, purpose and sequence clearly?',
      correctAnswer: null,
      explanation: 'A strong response can use “too ... to ...”, “so ... that ...”, “could not ...”, “to + verb” for purpose, “for + time”, and “finally”.',
      feedback: {
        correct: 'Use each pattern for a clear meaning, not just to include the form.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Degree — Use “too + adjective + to ...” or “so + adjective + that ...”.', mode: 'Individual' },
        { question: 'Inability — Add one sentence with “could not + base verb”.', mode: 'Individual' },
        { question: 'Purpose — Explain why someone did something with “to + verb”.', mode: 'Individual' },
        { question: 'Duration — Add “for + a period of time”.', mode: 'Individual' },
        { question: 'Sequence — Finish with “Finally, ...”.', mode: 'Pair' },
      ],
    },
  ],
};
