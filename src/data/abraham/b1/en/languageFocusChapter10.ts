import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'abraham-b1-language-10-realization-decision',
      type: 'matching',
      title: 'From Realization to Decision',
      instructions: 'Match each expression with the relationship it creates in Chapter 10.',
      question: 'How does the chapter connect understanding, decision, and action?',
      matchingPairs: [
        { left: 'Abraham realized that nobody was going to listen to his message', right: 'states the conclusion he reached about the situation' },
        { left: 'Therefore, he decided to leave Babylon', right: 'shows the decision that follows from that conclusion' },
        { left: 'travel to other lands to spread Allah’s message', right: 'expresses the purpose of the journey' },
        { left: 'He traveled from Babylon to Syria and Palestine', right: 'reports the concrete action that follows the decision' },
      ],
      correctAnswer: {
        'Abraham realized that nobody was going to listen to his message': 'states the conclusion he reached about the situation',
        'Therefore, he decided to leave Babylon': 'shows the decision that follows from that conclusion',
        'travel to other lands to spread Allah’s message': 'expresses the purpose of the journey',
        'He traveled from Babylon to Syria and Palestine': 'reports the concrete action that follows the decision',
      },
      explanation: 'The chapter builds a clear B1 chain: realization → therefore → decision → purpose → action.',
      feedback: {
        correct: 'Correct. You followed how the chapter turns a conclusion into purposeful action.',
        incorrect: 'Separate the conclusion, the connector, the decision, the purpose, and the action.',
      },
    },
    {
      id: 'abraham-b1-language-10-purpose',
      type: 'matching',
      title: 'Expressing Purpose',
      instructions: 'Match each purpose expression with what it explains.',
      question: 'How does Chapter 10 explain why people act?',
      matchingPairs: [
        { left: 'to spread Allah’s message', right: 'explains why Abraham travels to other lands' },
        { left: 'asked for a child from Allah so that his child could teach people about Allah', right: 'connects a wish with a future purpose' },
        { left: 'to travel with his wife and little child Ishmael', right: 'states the action Allah commands Abraham to perform' },
        { left: 'told his wife to stay near one of the hills', right: 'reports an instruction directed to another person' },
      ],
      correctAnswer: {
        'to spread Allah’s message': 'explains why Abraham travels to other lands',
        'asked for a child from Allah so that his child could teach people about Allah': 'connects a wish with a future purpose',
        'to travel with his wife and little child Ishmael': 'states the action Allah commands Abraham to perform',
        'told his wife to stay near one of the hills': 'reports an instruction directed to another person',
      },
      explanation: 'The chapter uses to + verb and so that + could to express purpose, while command/tell structures report required actions.',
      feedback: {
        correct: 'Correct. You distinguished purpose from reported instruction.',
        incorrect: 'Ask whether the phrase explains why something is done or reports what someone is told to do.',
      },
    },
    {
      id: 'abraham-b1-language-10-sequencing-movement',
      type: 'matching',
      title: 'Moving the Story Forward',
      instructions: 'Match each time or movement expression with its narrative function.',
      question: 'How does Chapter 10 organise a long journey across time and place?',
      matchingPairs: [
        { left: 'During his journey', right: 'places another event inside the longer journey' },
        { left: 'Hagar soon gave birth', right: 'shows that the next event happens after a relatively short time' },
        { left: 'One day', right: 'introduces a new event in the narrative' },
        { left: 'Finally, they reached a lonely valley', right: 'marks the endpoint after a long journey' },
      ],
      correctAnswer: {
        'During his journey': 'places another event inside the longer journey',
        'Hagar soon gave birth': 'shows that the next event happens after a relatively short time',
        'One day': 'introduces a new event in the narrative',
        'Finally, they reached a lonely valley': 'marks the endpoint after a long journey',
      },
      explanation: 'During, soon, one day, and finally help the reader follow events without turning the paragraph into a list of isolated sentences.',
      feedback: {
        correct: 'Correct. You identified how time expressions organise the narrative.',
        incorrect: 'Check whether the phrase sets background time, introduces an event, shows quick succession, or marks an endpoint.',
      },
    },
    {
      id: 'abraham-b1-language-10-connected-production',
      type: 'reflection',
      title: 'Explain a Purposeful Journey',
      instructions: 'Write or say five connected B1 sentences about a new journey or change of place. Do not retell Chapter 10.',
      question: 'Can you connect a realization, a decision, a purpose, events during the journey, and an endpoint?',
      correctAnswer: null,
      explanation: 'A strong response can use realized that, therefore/so, decided to, to + verb or so that, during, soon, one day, and finally.',
      feedback: {
        correct: 'Keep the sentences connected as one short narrative, not five unrelated statements.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State what the person realizes about the situation.', mode: 'Individual' },
        { question: 'Sentence 2 — Give the decision that follows, using therefore or so if natural.', mode: 'Individual' },
        { question: 'Sentence 3 — Explain the purpose with to + verb or so that.', mode: 'Individual' },
        { question: 'Sentence 4 — Add one event that happens during the journey.', mode: 'Individual' },
        { question: 'Sentence 5 — Mark the endpoint with finally or another natural sequencing expression.', mode: 'Pair' },
      ],
    },
  ],
};
