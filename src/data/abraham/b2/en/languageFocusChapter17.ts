import type { Exercise } from '../../../../types';

/** Chapter 17 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter17: Record<number, Exercise[]> = {
  17: [
    {
      id: 'abraham-b2-language-17-contrast-plan',
      type: 'matching',
      title: 'Track Resistance, Decision and Plan',
      instructions: 'Match each expression with the discourse job it performs. Focus on how the paragraph moves from continued resistance to a deliberate plan.',
      question: 'How does the chapter organize persistence, decision and intended action?',
      matchingPairs: [
        { left: 'However, idolaters would not give up...', right: 'marks contrast with the preceding argument and shows continued resistance' },
        { left: 'Actually, he decided to do something shocking...', right: 'signals a shift from description to an explicit decision' },
        { left: '...to show their error', right: 'states the intended purpose of the planned action' },
        { left: 'He knew that there was going to be a great celebration...', right: 'places a future event inside a past viewpoint and makes it part of the plan' },
      ],
      correctAnswer: {
        'However, idolaters would not give up...': 'marks contrast with the preceding argument and shows continued resistance',
        'Actually, he decided to do something shocking...': 'signals a shift from description to an explicit decision',
        '...to show their error': 'states the intended purpose of the planned action',
        'He knew that there was going to be a great celebration...': 'places a future event inside a past viewpoint and makes it part of the plan',
      },
      explanation: 'The paragraph moves from resistance to decision, then purpose and anticipation. “Was going to” is especially useful because the future event is viewed from an earlier past moment.',
      feedback: { correct: 'Correct. You traced the paragraph’s movement rather than retelling the event.', incorrect: 'Look for contrast, decision, purpose and future-from-the-past.' },
    },
    {
      id: 'abraham-b2-language-17-sequence',
      type: 'matching',
      title: 'Build the Time Sequence',
      instructions: 'Match each time expression with the relationship it creates in the narrative.',
      question: 'Which expressions organize waiting, completion of a condition and the next action?',
      matchingPairs: [
        { left: 'waited until the city was empty', right: 'shows that one action is delayed until a condition becomes true' },
        { left: 'then cautiously made his way to the temple', right: 'moves the narrative to the next deliberate action' },
        { left: 'The priests had also gone to the festival', right: 'uses the past perfect to show an earlier completed event relevant to the current scene' },
        { left: 'The streets leading to it and the temple itself were empty', right: 'describes the resulting state that makes the next action possible' },
      ],
      correctAnswer: {
        'waited until the city was empty': 'shows that one action is delayed until a condition becomes true',
        'then cautiously made his way to the temple': 'moves the narrative to the next deliberate action',
        'The priests had also gone to the festival': 'uses the past perfect to show an earlier completed event relevant to the current scene',
        'The streets leading to it and the temple itself were empty': 'describes the resulting state that makes the next action possible',
      },
      explanation: 'B2 narrative control depends on more than simple chronological listing. “Until”, “then” and past perfect help show dependency, sequence and prior completion.',
      feedback: { correct: 'Correct. You identified the time relations precisely.', incorrect: 'Ask which event is earlier, which is dependent on a condition, and which describes the resulting state.' },
    },
    {
      id: 'abraham-b2-language-17-rhetorical-question',
      type: 'multiple-choice',
      title: 'Read the Question as a Test, Not a Request',
      instructions: 'Choose the interpretation that best explains the function of the final question.',
      question: 'What does “The food in front of you is getting cold. Why don’t you eat?” do in this context?',
      options: [
        'It functions as an ironic test: the speaker already knows no answer or action will come, so the question exposes the statue’s inability.',
        'It is a genuine request for information because the speaker does not know whether the statue can eat.',
        'It simply changes the topic from worship to food without contributing to the argument.',
      ],
      correctAnswer: 0,
      explanation: 'The question is not information-seeking. The silence that follows confirms its argumentative function by making inability observable.',
      feedback: { correct: 'Correct. The question works as an ironic test whose effect depends on the expected silence.', incorrect: 'Use the following sentence — “The statue kept silent and rigid” — to interpret the function of the question.' },
    },
    {
      id: 'abraham-b2-language-17-production',
      type: 'reflection',
      title: 'Write a Plan-and-Test Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone notices resistance to an argument, forms a plan, waits for the right condition, and then uses an observable test to reveal a weakness in an idea, product or policy. Use one contrast marker such as “however”, one decision phrase, one purpose clause with “to...”, one future-from-the-past form such as “was/were going to” or “would”, one “until” clause, one past-perfect sentence to mark an earlier completed event, and one rhetorical or ironic question. End by explaining what the test revealed. Do not retell the Abraham story.',
      question: 'Can you control viewpoint, sequencing, purpose and rhetorical testing in one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make the time relations and the purpose of each action clear while using the final question as part of the argument rather than as a request for unknown information.',
      feedback: { correct: 'Check that each tense and connector has a clear discourse function and that the test leads naturally to your conclusion.', incorrect: '' },
      discussionPrompts: [
        { question: 'Resistance — What position or habit continues despite earlier reasoning?', mode: 'Individual' },
        { question: 'Plan — What future event was already known or expected from the earlier viewpoint?', mode: 'Individual' },
        { question: 'Timing — What had already happened before the key action began?', mode: 'Pair' },
        { question: 'Test — What question can expose the weakness through an observable result?', mode: 'Pair' },
      ],
    },
  ],
};
