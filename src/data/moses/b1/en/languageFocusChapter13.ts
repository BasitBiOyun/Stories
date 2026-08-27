import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 13 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter13: Record<number, Exercise[]> = {
  13: [
    {
      id: 'moses-b1-language-13-command-event-result',
      type: 'matching',
      title: 'Command, Event and Result',
      instructions: 'Match each expression with the role it plays in moving the scene forward.',
      question: 'How does the chapter connect instruction, action, and consequence?',
      matchingPairs: [
        { left: '“Hit the sea with your stick!”', right: 'gives a direct command' },
        { left: 'When the stick touched the waters of the sea', right: 'marks the moment that triggers the next event' },
        { left: 'The sea parted', right: 'states the immediate result' },
        { left: 'Allah made a path for them across the sea', right: 'explains the practical outcome of the event' },
      ],
      correctAnswer: {
        '“Hit the sea with your stick!”': 'gives a direct command',
        'When the stick touched the waters of the sea': 'marks the moment that triggers the next event',
        'The sea parted': 'states the immediate result',
        'Allah made a path for them across the sea': 'explains the practical outcome of the event',
      },
      explanation: 'The passage progresses from command → triggering moment → visible event → resulting possibility for the group.',
      feedback: {
        correct: 'Correct. You followed the command-to-result sequence.',
        incorrect: 'Separate the direct command, the “When...” trigger, the immediate event, and its practical outcome.',
      },
    },
    {
      id: 'moses-b1-language-13-time-change-consequence',
      type: 'matching',
      title: 'Time, Change and Consequence',
      instructions: 'Match each clause with the relationship it expresses.',
      question: 'How does the chapter organize the final change in the sea?',
      matchingPairs: [
        { left: 'when they were midway', right: 'places the next event at a specific moment in the journey' },
        { left: 'Allah ordered the sea to close', right: 'reports an instruction affecting what happens next' },
        { left: 'the sea closed over them', right: 'states the change that follows the order' },
        { left: 'and they drowned', right: 'states the final consequence' },
      ],
      correctAnswer: {
        'when they were midway': 'places the next event at a specific moment in the journey',
        'Allah ordered the sea to close': 'reports an instruction affecting what happens next',
        'the sea closed over them': 'states the change that follows the order',
        'and they drowned': 'states the final consequence',
      },
      explanation: 'The chapter uses a time clause, a reported order, a change of state, and a final result to build the ending clearly.',
      feedback: {
        correct: 'Correct. You identified time, order, change, and consequence.',
        incorrect: 'Look at what “when” introduces and what happens after the order.',
      },
    },
    {
      id: 'moses-b1-language-13-purpose-general-lesson',
      type: 'matching',
      title: 'Purpose and General Lessons',
      instructions: 'Match each expression with the function it performs in the final paragraph.',
      question: 'How does the ending move from events to general meaning?',
      matchingPairs: [
        { left: 'The story of Moses has many lessons to learn', right: 'signals a shift from narrative events to interpretation' },
        { left: 'It again reminds us that...', right: 'introduces a general principle drawn from the story' },
        { left: 'Allah sent prophets to show people a better life', right: 'uses “to + verb” to express purpose' },
        { left: 'when we pray to Him, He always guides us on the right path', right: 'connects a recurring situation with its usual result' },
      ],
      correctAnswer: {
        'The story of Moses has many lessons to learn': 'signals a shift from narrative events to interpretation',
        'It again reminds us that...': 'introduces a general principle drawn from the story',
        'Allah sent prophets to show people a better life': 'uses “to + verb” to express purpose',
        'when we pray to Him, He always guides us on the right path': 'connects a recurring situation with its usual result',
      },
      explanation: 'The final paragraph changes register: it interprets the story, states general principles, explains purpose, and gives a recurring condition-result relationship.',
      feedback: {
        correct: 'Good. You distinguished interpretation, purpose, and recurring meaning.',
        incorrect: 'Look for the shift from “what happened” to “what the story teaches”.',
      },
    },
    {
      id: 'moses-b1-language-13-connected-production',
      type: 'reflection',
      title: 'From Event to Lesson',
      instructions: 'Write or say five connected B1 sentences about a non-story situation where a leader gives an instruction, an event changes the situation, a consequence follows, and the group later explains what it learned. Do not retell the chapter.',
      question: 'Can you move naturally from command and sequence to consequence, purpose, and a general lesson?',
      correctAnswer: null,
      explanation: 'Useful language includes an imperative, “When...”, a clear result clause, “to + verb” for purpose, and “This reminds us that...” or “This shows that...”.',
      feedback: {
        correct: 'Keep one clear situation and make the final lesson grow naturally from the earlier events.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give a direct instruction.', mode: 'Individual' },
        { question: 'Sentence 2 — Use “When...” to introduce the event that follows.', mode: 'Individual' },
        { question: 'Sentence 3 — State the consequence of that event.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “to + verb” to explain the purpose of one action.', mode: 'Pair' },
        { question: 'Sentence 5 — End with “This reminds us that...” or “This shows that...” to express a general lesson.', mode: 'Pair' },
      ],
    },
  ],
};
