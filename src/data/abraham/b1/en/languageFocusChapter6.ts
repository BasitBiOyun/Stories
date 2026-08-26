import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'abraham-b1-language-6-plan-intention',
      type: 'matching',
      title: 'Plan, Intention, and Secrecy',
      instructions: 'Match each Chapter 6 expression with the function it performs.',
      question: 'How does the chapter move from decision to hidden intention?',
      matchingPairs: [
        { left: 'decided to show them the foolishness of their beliefs', right: 'expresses a decision followed by an intended action' },
        { left: 'made a plan to destroy all their idols', right: 'turns a general decision into a concrete plan' },
        { left: 'did not tell anyone what he was going to do', right: 'presents a future action viewed from a past moment' },
        { left: 'what he was going to do', right: 'reports an intended future action without quoting the speaker directly' },
      ],
      correctAnswer: {
        'decided to show them the foolishness of their beliefs': 'expresses a decision followed by an intended action',
        'made a plan to destroy all their idols': 'turns a general decision into a concrete plan',
        'did not tell anyone what he was going to do': 'presents a future action viewed from a past moment',
        'what he was going to do': 'reports an intended future action without quoting the speaker directly',
      },
      explanation: 'The chapter uses decision, planning, and future-in-the-past language to show that the action is deliberate rather than accidental.',
      feedback: {
        correct: 'Correct. You distinguished decision, planning, and intended future action.',
        incorrect: 'Check whether the phrase shows a choice, a detailed plan, or an action that was still in the future at that past moment.',
      },
    },
    {
      id: 'abraham-b1-language-6-habit-event-condition',
      type: 'matching',
      title: 'Habit, Opportunity, and Timing',
      instructions: 'Match each expression with the time relationship it creates.',
      question: 'How does the chapter connect a usual event with one specific opportunity?',
      matchingPairs: [
        { left: 'All the people usually went outside of town', right: 'describes a repeated or habitual event' },
        { left: 'There was a big celebration soon', right: 'introduces the specific situation that creates an opportunity' },
        { left: 'so he got an axe', right: 'shows a result or response to the situation' },
        { left: 'waited until the whole town was empty', right: 'marks the point that had to be reached before the next action' },
      ],
      correctAnswer: {
        'All the people usually went outside of town': 'describes a repeated or habitual event',
        'There was a big celebration soon': 'introduces the specific situation that creates an opportunity',
        'so he got an axe': 'shows a result or response to the situation',
        'waited until the whole town was empty': 'marks the point that had to be reached before the next action',
      },
      explanation: 'The narrative combines a habitual pattern with a particular celebration, then uses so and until to show result and timing.',
      feedback: {
        correct: 'Correct. You identified habit, situation, result, and a time boundary.',
        incorrect: 'Ask whether the phrase describes what usually happened, what happened this time, what resulted, or when the next step became possible.',
      },
    },
    {
      id: 'abraham-b1-language-6-action-development',
      type: 'matching',
      title: 'How the Action Develops',
      instructions: 'Match each pattern with the meaning it adds to the action.',
      question: 'How do these structures show progression and resulting states?',
      matchingPairs: [
        { left: 'began to break the idols', right: 'marks the beginning of an action or process' },
        { left: 'one after another', right: 'shows repeated actions happening in sequence' },
        { left: 'until they were all broken', right: 'shows the endpoint or completed result of the process' },
        { left: 'left the largest statue ... untouched', right: 'uses leave + object + complement to show the state that remained after an action' },
      ],
      correctAnswer: {
        'began to break the idols': 'marks the beginning of an action or process',
        'one after another': 'shows repeated actions happening in sequence',
        'until they were all broken': 'shows the endpoint or completed result of the process',
        'left the largest statue ... untouched': 'uses leave + object + complement to show the state that remained after an action',
      },
      explanation: 'These patterns help the reader follow not just what happened, but how the action began, continued, reached an endpoint, and left one object in a different state.',
      feedback: {
        correct: 'Correct. You tracked beginning, sequence, endpoint, and resulting state.',
        incorrect: 'Focus on whether the phrase shows the start of a process, repetition, completion, or the final state of an object.',
      },
    },
    {
      id: 'abraham-b1-language-6-connected-production',
      type: 'reflection',
      title: 'Describe a Deliberate Plan',
      instructions: 'Write or say four connected B1 sentences about a person carrying out a careful plan in a new situation. Do not retell Chapter 6.',
      question: 'Can you connect intention, opportunity, timing, and a final resulting state?',
      correctAnswer: null,
      explanation: 'A strong response can combine decided/planned to, usually or a background situation, so, until, began to, and left + object + adjective/complement.',
      feedback: {
        correct: 'Keep the four sentences in one coherent situation and make each action logically lead to the next.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State a decision or plan using decided to or planned to.', mode: 'Individual' },
        { question: 'Sentence 2 — Describe the situation or opportunity, and connect the response with so.', mode: 'Individual' },
        { question: 'Sentence 3 — Use until to show when the main action could begin or end.', mode: 'Individual' },
        { question: 'Sentence 4 — Show the final state using left + object + adjective/complement, or another clear result expression.', mode: 'Pair' },
      ],
    },
  ],
};
