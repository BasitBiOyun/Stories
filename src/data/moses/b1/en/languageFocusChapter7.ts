import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 7 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'moses-b1-language-7-obligation-patience',
      type: 'matching',
      title: 'Need, Obligation and Patience',
      instructions: 'Match each expression with the function it performs in the sisters’ explanation.',
      question: 'How does the chapter explain why the sisters must manage the situation themselves?',
      matchingPairs: [
        { left: 'He cannot come with us.', right: 'states an inability that creates a practical problem' },
        { left: 'There are no young men in our house to help us.', right: 'adds another reason why support is unavailable' },
        { left: 'So, we have to take the sheep to the water ourselves.', right: 'expresses obligation as the result of the situation' },
        { left: 'We have to wait our turn.', right: 'expresses a necessary action they cannot avoid' },
        { left: 'until the other sheepmen go away', right: 'sets the time limit for the waiting' },
      ],
      correctAnswer: {
        'He cannot come with us.': 'states an inability that creates a practical problem',
        'There are no young men in our house to help us.': 'adds another reason why support is unavailable',
        'So, we have to take the sheep to the water ourselves.': 'expresses obligation as the result of the situation',
        'We have to wait our turn.': 'expresses a necessary action they cannot avoid',
        'until the other sheepmen go away': 'sets the time limit for the waiting',
      },
      explanation: 'The explanation moves from inability and lack of help to obligation with “have to”, while “until” marks how long the waiting must continue.',
      feedback: {
        correct: 'Correct. You followed the chain from limitation to obligation and waiting.',
        incorrect: 'Look for what creates the difficulty, what becomes necessary, and what marks the end of the waiting period.',
      },
    },
    {
      id: 'moses-b1-language-7-action-result',
      type: 'matching',
      title: 'From Understanding to Result',
      instructions: 'Match each sentence with the relationship it creates in the narrative.',
      question: 'How does the chapter move from recognizing a situation to a changed outcome?',
      matchingPairs: [
        { left: 'Moses understood that the two sisters needed help.', right: 'presents an interpretation of the situation before action' },
        { left: 'He took their sheep to the spring and made them drink water.', right: 'shows the action that follows from that understanding' },
        { left: 'The girls were very happy.', right: 'states an immediate result or reaction' },
        { left: 'They took their sheep and went home.', right: 'continues the completed action sequence after the problem is solved' },
      ],
      correctAnswer: {
        'Moses understood that the two sisters needed help.': 'presents an interpretation of the situation before action',
        'He took their sheep to the spring and made them drink water.': 'shows the action that follows from that understanding',
        'The girls were very happy.': 'states an immediate result or reaction',
        'They took their sheep and went home.': 'continues the completed action sequence after the problem is solved',
      },
      explanation: 'The narrative links understanding, action, reaction and further completed actions. This helps readers see how one decision changes the next part of the scene.',
      feedback: {
        correct: 'Good. You identified interpretation, action, result and continuation.',
        incorrect: 'Separate what Moses realizes, what he does, how the sisters react, and what happens next.',
      },
    },
    {
      id: 'moses-b1-language-7-early-return',
      type: 'matching',
      title: 'Expected Routine vs Changed Outcome',
      instructions: 'Match the language with the contrast it creates.',
      question: 'How does the text show that the sisters’ normal routine has changed?',
      matchingPairs: [
        { left: 'When the sisters came home early ...', right: 'introduces a result that happens sooner than expected' },
        { left: 'What happened?', right: 'shows surprise and asks for an explanation' },
        { left: 'You came home very early!', right: 'emphasizes the unusual timing' },
        { left: 'We did not have to wait ...', right: 'shows that a usual obligation was removed in this situation' },
        { left: 'that’s why he had to send the girls alone', right: 'connects Şuayb’s age with a resulting necessity' },
      ],
      correctAnswer: {
        'When the sisters came home early ...': 'introduces a result that happens sooner than expected',
        'What happened?': 'shows surprise and asks for an explanation',
        'You came home very early!': 'emphasizes the unusual timing',
        'We did not have to wait ...': 'shows that a usual obligation was removed in this situation',
        'that’s why he had to send the girls alone': 'connects Şuayb’s age with a resulting necessity',
      },
      explanation: 'The chapter contrasts a normal obligation with an exceptional day: “did not have to” shows that the usual waiting was unnecessary, while “that’s why” links a condition with a necessary result.',
      feedback: {
        correct: 'Correct. You identified unusual timing, removed obligation and cause-result language.',
        incorrect: 'Look for the normal routine, what changed on this day, and what explains the family situation.',
      },
    },
    {
      id: 'moses-b1-language-7-connected-production',
      type: 'reflection',
      title: 'Explain a Routine That Changes',
      instructions: 'Write or say five connected B1 sentences about people who usually have to do something difficult but receive unexpected help one day. Do not retell the chapter.',
      question: 'Can you connect limitation, obligation, waiting, help and a changed result naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include “cannot”, “have to”, “until”, a simple-past action that changes the situation, and “did not have to” for an obligation that disappears.',
      feedback: {
        correct: 'Keep the five sentences connected and make the changed result follow naturally from the help.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State one limitation or lack of support.', mode: 'Individual' },
        { question: 'Sentence 2 — Explain what people therefore have to do.', mode: 'Individual' },
        { question: 'Sentence 3 — Add what they normally wait for using “until”.', mode: 'Individual' },
        { question: 'Sentence 4 — Describe one unexpected act of help in the simple past.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain what they did not have to do because the situation changed.', mode: 'Pair' },
      ],
    },
  ],
};
