import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 6 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'moses-b1-language-6-warning-action',
      type: 'matching',
      title: 'Warning, Expected Action and Command',
      instructions: 'Match each expression with the communicative job it does.',
      question: 'How does the warning move from a present danger to an urgent response?',
      matchingPairs: [
        { left: 'The Pharaoh’s soldiers are looking for you.', right: 'describes a danger already in progress' },
        { left: 'Now they are going to catch you.', right: 'presents an expected next action based on the current situation' },
        { left: 'Run away from the city.', right: 'gives an urgent direct command' },
        { left: 'Moses knew that the punishment ... was death.', right: 'shows the knowledge that explains why immediate action is necessary' },
      ],
      correctAnswer: {
        'The Pharaoh’s soldiers are looking for you.': 'describes a danger already in progress',
        'Now they are going to catch you.': 'presents an expected next action based on the current situation',
        'Run away from the city.': 'gives an urgent direct command',
        'Moses knew that the punishment ... was death.': 'shows the knowledge that explains why immediate action is necessary',
      },
      explanation: 'The chapter combines present continuous for an action already happening, “be going to” for an expected next development, an imperative for urgent advice, and “knew that” to state the knowledge behind the response.',
      feedback: {
        correct: 'Correct. You followed the warning from present danger to expected consequence, command, and reason.',
        incorrect: 'Ask whether each line describes what is happening now, what is expected next, what someone is told to do, or what explains the response.',
      },
    },
    {
      id: 'moses-b1-language-6-sequence-guidance',
      type: 'matching',
      title: 'Cause, Movement and Guidance',
      instructions: 'Match the language with the relationship it creates in the narrative.',
      question: 'How does the chapter connect Moses’s knowledge, movement and continuing guidance?',
      matchingPairs: [
        { left: 'Moses knew that ...', right: 'introduces the reason behind his decision' },
        { left: 'Moses escaped ... He left Egypt and travelled ...', right: 'uses a sequence of completed past actions to move the story forward' },
        { left: 'He was not alone as Allah guided him.', right: 'adds reassurance and explains the continuing situation during the journey' },
        { left: 'After many days, he reached ...', right: 'marks a later point after a long period of travel' },
      ],
      correctAnswer: {
        'Moses knew that ...': 'introduces the reason behind his decision',
        'Moses escaped ... He left Egypt and travelled ...': 'uses a sequence of completed past actions to move the story forward',
        'He was not alone as Allah guided him.': 'adds reassurance and explains the continuing situation during the journey',
        'After many days, he reached ...': 'marks a later point after a long period of travel',
      },
      explanation: 'The narrative moves through a reason, a chain of completed actions, an explanatory “as” clause, and a time marker that opens the next stage of the journey.',
      feedback: {
        correct: 'Good. You identified reason, action sequence, explanation and time movement.',
        incorrect: 'Look for what explains the decision, what advances the journey, what gives background reassurance, and what marks a later stage.',
      },
    },
    {
      id: 'moses-b1-language-6-well-scene',
      type: 'matching',
      title: 'Build the Well Scene',
      instructions: 'Match each structure with the role it plays in describing the new scene.',
      question: 'How does the text move from Moses’s condition to observation and then to questions?',
      matchingPairs: [
        { left: 'Moses was tired and thirsty.', right: 'states his physical condition' },
        { left: 'he was looking for water', right: 'shows an activity already in progress' },
        { left: 'Soon, he found a well where many men gathered.', right: 'introduces a new event and adds information about the place' },
        { left: 'shepherds who were watering their sheep and cattle', right: 'identifies the men through an added relative-clause description' },
        { left: 'Why are you sitting ...? Why aren’t you taking ...?', right: 'uses present continuous questions to ask about the situation he can see' },
      ],
      correctAnswer: {
        'Moses was tired and thirsty.': 'states his physical condition',
        'he was looking for water': 'shows an activity already in progress',
        'Soon, he found a well where many men gathered.': 'introduces a new event and adds information about the place',
        'shepherds who were watering their sheep and cattle': 'identifies the men through an added relative-clause description',
        'Why are you sitting ...? Why aren’t you taking ...?': 'uses present continuous questions to ask about the situation he can see',
      },
      explanation: 'The scene combines a past state, an ongoing past activity, a new simple-past discovery, relative clauses with “where/who”, and present continuous questions about visible actions.',
      feedback: {
        correct: 'Correct. You traced how condition, activity, description and questioning work together.',
        incorrect: 'Separate physical state, ongoing search, new discovery, added description, and questions about what is happening now.',
      },
    },
    {
      id: 'moses-b1-language-6-connected-production',
      type: 'reflection',
      title: 'Write a Warning-to-New-Scene Mini-Narrative',
      instructions: 'Write or say five connected B1 sentences about someone who must leave a place quickly and arrives somewhere unfamiliar. Do not retell the chapter.',
      question: 'Can you connect warning, expected consequence, urgent advice, time movement and a new-scene question naturally?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful patterns include present continuous for a current threat, “be going to” for an expected consequence, an imperative, “after + time”, and a “Why are you ...?” question about a visible situation.',
      feedback: {
        correct: 'Keep the five sentences connected and make the final scene follow naturally from the warning.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe a danger already happening with present continuous.', mode: 'Individual' },
        { question: 'Sentence 2 — State an expected next consequence with “be going to”.', mode: 'Individual' },
        { question: 'Sentence 3 — Give one urgent command or piece of advice.', mode: 'Individual' },
        { question: 'Sentence 4 — Move the narrative forward with “After ...” and describe arrival in a new place.', mode: 'Pair' },
        { question: 'Sentence 5 — Ask a natural “Why are you ...?” question about something visible there.', mode: 'Pair' },
      ],
    },
  ],
};
