import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 12 onward. */
export const mosesA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  12: [
    {
      id: 'moses-a2-language-12-thought-decision',
      type: 'matching',
      title: 'Thought, Decision and Message',
      instructions: 'Match each Chapter 12 expression with what it communicates.',
      question: 'How does the chapter report what Moses says, what Pharaoh thinks and what Moses decides?',
      matchingPairs: [
        { left: 'Moses told him about Allah.', right: 'uses tell + person + about + topic to introduce a message' },
        { left: 'He thought Moses was crazy.', right: 'uses thought + clause to report an opinion in the past' },
        { left: 'Moses decided to show the miracles.', right: 'uses decided to + verb for a choice or intention' },
        { left: 'I am the Messenger from the Lord of the universe.', right: 'uses direct speech to state identity and a message' },
      ],
      correctAnswer: {
        'Moses told him about Allah.': 'uses tell + person + about + topic to introduce a message',
        'He thought Moses was crazy.': 'uses thought + clause to report an opinion in the past',
        'Moses decided to show the miracles.': 'uses decided to + verb for a choice or intention',
        'I am the Messenger from the Lord of the universe.': 'uses direct speech to state identity and a message',
      },
      explanation: 'Chapter 12 moves from communicating a message to reporting an opinion and then a decision.',
      feedback: { correct: 'Correct. You identified message, opinion, decision and direct speech.', incorrect: 'Compare the opening sentences about Moses’s message, Pharaoh’s thought and Moses’s decision.' },
    },
    {
      id: 'moses-a2-language-12-change-sequence',
      type: 'matching',
      title: 'Action, Sequence and Change',
      instructions: 'Match the story language with its function.',
      question: 'How does the chapter describe actions in order and a change into a new form?',
      matchingPairs: [
        { left: 'He took his walking stick and threw it on the ground.', right: 'links two past actions in a sequence' },
        { left: 'The stick turned into a big snake.', right: 'uses turn into to describe transformation' },
        { left: 'Then he put his arm in his armpit.', right: 'uses then to move to the next action' },
        { left: 'It was shining white.', right: 'uses be + descriptive form to show a visible state' },
      ],
      correctAnswer: {
        'He took his walking stick and threw it on the ground.': 'links two past actions in a sequence',
        'The stick turned into a big snake.': 'uses turn into to describe transformation',
        'Then he put his arm in his armpit.': 'uses then to move to the next action',
        'It was shining white.': 'uses be + descriptive form to show a visible state',
      },
      explanation: 'Past verbs show the action sequence, “then” moves the sequence forward, and “turn into” expresses transformation.',
      feedback: { correct: 'Correct. You separated sequence, transformation and visible state.', incorrect: 'Follow the stick and hand actions in order.' },
    },
    {
      id: 'moses-a2-language-12-purpose-ability',
      type: 'matching',
      title: 'Purpose, Ability and Reaction',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does Chapter 12 explain purpose, ability and a negative reaction?',
      matchingPairs: [
        { left: 'Allah gave them to Moses to help him.', right: 'uses to + verb to explain purpose' },
        { left: 'All of my magicians can do this.', right: 'uses can + verb to claim ability' },
        { left: 'The king and his helpers laughed at him.', right: 'uses laugh at + person for a mocking reaction' },
        { left: 'He made fun of Moses and Allah.', right: 'uses make fun of + person/thing to describe ridicule' },
      ],
      correctAnswer: {
        'Allah gave them to Moses to help him.': 'uses to + verb to explain purpose',
        'All of my magicians can do this.': 'uses can + verb to claim ability',
        'The king and his helpers laughed at him.': 'uses laugh at + person for a mocking reaction',
        'He made fun of Moses and Allah.': 'uses make fun of + person/thing to describe ridicule',
      },
      explanation: 'The chapter uses “to + verb” for purpose, “can” for ability and two expressions for a mocking response.',
      feedback: { correct: 'Correct. You identified purpose, claimed ability and reaction language.', incorrect: 'Look again at why the signs were given and how Pharaoh responded.' },
    },
    {
      id: 'moses-a2-language-12-production',
      type: 'reflection',
      title: 'Use It: Show and Explain',
      instructions: 'Imagine you show someone a simple skill, object or experiment. Write or say four short sentences using at least three Chapter 12 language frames.',
      question: 'Can you report a thought, describe a change, explain a purpose and make an ability statement?',
      correctAnswer: null,
      explanation: 'A strong A2 response can use “thought + clause”, “decided to + verb”, “turned into”, “then”, “to + verb” for purpose, or “can + verb”.',
      feedback: { correct: 'Use the Chapter 12 language in a new everyday situation instead of retelling the miracle scene.', incorrect: '' },
      discussionPrompts: [
        { question: 'Thought or decision — Say what someone thought or decided to do.', mode: 'Pair' },
        { question: 'Change — Describe something that changed using “turned into” or a new visible state.', mode: 'Individual' },
        { question: 'Purpose — Explain why someone did an action using “to + verb”.', mode: 'Individual' },
        { question: 'Ability — Say what someone can do.', mode: 'Individual' },
      ],
    },
  ],
};
