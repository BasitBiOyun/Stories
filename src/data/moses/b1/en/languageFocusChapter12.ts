import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 12 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'moses-b1-language-12-plan-obligation',
      type: 'matching',
      title: 'Plan, Secrecy and Obligation',
      instructions: 'Match each expression with the meaning or function it adds to the plan.',
      question: 'How does the chapter turn an escape plan into clear instructions?',
      matchingPairs: [
        { left: '“Get ready for the journey.”', right: 'gives a direct instruction to prepare' },
        { left: '“We are going away from Egypt.”', right: 'states the planned movement already decided by the group leader' },
        { left: '“You must keep it secret.”', right: 'expresses strong obligation' },
        { left: '“Nobody should see us.”', right: 'expresses what needs to be avoided for the plan to stay safe' },
      ],
      correctAnswer: {
        '“Get ready for the journey.”': 'gives a direct instruction to prepare',
        '“We are going away from Egypt.”': 'states the planned movement already decided by the group leader',
        '“You must keep it secret.”': 'expresses strong obligation',
        '“Nobody should see us.”': 'expresses what needs to be avoided for the plan to stay safe',
      },
      explanation: 'The chapter combines direct instructions, a planned future action, obligation, and avoidance to organize a secret departure.',
      feedback: {
        correct: 'Correct. You distinguished instruction, plan, obligation, and avoidance.',
        incorrect: 'Look for the imperative, the planned movement, “must”, and “should”.',
      },
    },
    {
      id: 'moses-b1-language-12-inability-result',
      type: 'matching',
      title: 'Inability and Consequence',
      instructions: 'Match the clauses to show how the text explains why the caravan moves slowly.',
      question: 'How does the chapter connect physical limitation with its result?',
      matchingPairs: [
        { left: 'The children and the old could not walk fast', right: 'states an inability' },
        { left: 'and got tired very quickly', right: 'adds a second difficulty affecting the same group' },
        { left: 'That’s why', right: 'signals that a result is coming' },
        { left: 'the caravan moved slowly', right: 'states the consequence of the earlier difficulties' },
      ],
      correctAnswer: {
        'The children and the old could not walk fast': 'states an inability',
        'and got tired very quickly': 'adds a second difficulty affecting the same group',
        'That’s why': 'signals that a result is coming',
        'the caravan moved slowly': 'states the consequence of the earlier difficulties',
      },
      explanation: 'The chapter explains movement through a clear limitation → added difficulty → result sequence.',
      feedback: {
        correct: 'Correct. You followed the cause-and-result structure.',
        incorrect: 'Find the inability, the added problem, and the phrase that introduces the result.',
      },
    },
    {
      id: 'moses-b1-language-12-time-pursuit-reassurance',
      type: 'matching',
      title: 'Time, Pursuit and Reassurance',
      instructions: 'Match each expression with its role in moving the narrative forward.',
      question: 'How does the chapter organize the pursuit and then change the emotional direction of the scene?',
      matchingPairs: [
        { left: 'When the Pharaoh noticed they left the land', right: 'marks the moment that triggers Pharaoh’s response' },
        { left: 'he prepared his huge army and easily managed to catch up with them', right: 'shows action followed by successful pursuit' },
        { left: 'When the sun rose, the caravan reached the Red Sea', right: 'moves the story to a new time and location' },
        { left: '“Calm down! Allah is with us and will show us the way to safety.”', right: 'changes panic into reassurance and expresses future guidance' },
      ],
      correctAnswer: {
        'When the Pharaoh noticed they left the land': 'marks the moment that triggers Pharaoh’s response',
        'he prepared his huge army and easily managed to catch up with them': 'shows action followed by successful pursuit',
        'When the sun rose, the caravan reached the Red Sea': 'moves the story to a new time and location',
        '“Calm down! Allah is with us and will show us the way to safety.”': 'changes panic into reassurance and expresses future guidance',
      },
      explanation: 'Time clauses organize the chase, while direct reassurance shifts the scene from fear toward confidence about what will happen next.',
      feedback: {
        correct: 'Good. You identified trigger, pursuit, time shift, and reassurance.',
        incorrect: 'Separate the two “When...” clauses from the final direct speech about the future.',
      },
    },
    {
      id: 'moses-b1-language-12-connected-production',
      type: 'reflection',
      title: 'Explain a Difficult Group Plan',
      instructions: 'Write or say five connected B1 sentences about a non-story group that must leave quietly, has members who cannot move quickly, is followed by another group, and receives reassurance from its leader. Do not retell the chapter.',
      question: 'Can you connect instruction, obligation, inability, result, time, and reassurance in one short paragraph?',
      correctAnswer: null,
      explanation: 'Useful language includes an imperative, “must/should”, “could not”, “That’s why...”, “When...”, “managed to...”, and “will...”.',
      feedback: {
        correct: 'Keep the sentences connected around one situation and make the final reassurance respond naturally to the problem.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give a direct instruction and state the group’s plan.', mode: 'Individual' },
        { question: 'Sentence 2 — Use “must” or “should” to explain a rule for the plan.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “could not” and “That’s why...” to connect a limitation with its result.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “When...” and “managed to...” to describe another group following them.', mode: 'Pair' },
        { question: 'Sentence 5 — End with reassurance using a present support statement and “will” for future help.', mode: 'Pair' },
      ],
    },
  ],
};
