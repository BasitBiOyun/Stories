import type { Exercise } from '../../../../types';

/**
 * Chapter 13 Language Focus, manually authored from the English story text.
 * It avoids repeating the Quick Challenge cause-result sequence from Zamzam to Mecca.
 */
export const abrahamA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  13: [
    {
      id: 'abraham-a2-language-13-background-event',
      type: 'matching',
      title: 'Background and Sudden Event',
      instructions: 'Match each Chapter 13 expression with the language job it performs.',
      question: 'How does the chapter show actions already happening and then introduce a sudden event?',
      matchingPairs: [
        { left: 'Hagar was running in the desert', right: 'was/were + -ing describes an action in progress in the past' },
        { left: 'Ishmael was crying for water', right: 'was/were + -ing can describe another action happening at the same time' },
        { left: 'Suddenly water came out of the ground', right: 'suddenly + past simple introduces a new unexpected event' },
        { left: 'When Hagar saw this, she shouted', right: 'when + past simple connects one completed event to the next reaction' },
      ],
      correctAnswer: {
        'Hagar was running in the desert': 'was/were + -ing describes an action in progress in the past',
        'Ishmael was crying for water': 'was/were + -ing can describe another action happening at the same time',
        'Suddenly water came out of the ground': 'suddenly + past simple introduces a new unexpected event',
        'When Hagar saw this, she shouted': 'when + past simple connects one completed event to the next reaction',
      },
      explanation: 'Chapter 13 uses the past continuous for background actions, then “suddenly” and the past simple for the new event and reaction.',
      feedback: {
        correct: 'Good. You separated background actions from the sudden event and reaction.',
        incorrect: 'Look for the two actions already in progress, then the event introduced by “Suddenly”.',
      },
    },
    {
      id: 'abraham-a2-language-13-sequence-degree',
      type: 'matching',
      title: 'Sequence and Degree',
      instructions: 'Match the expressions with what they do in the story.',
      question: 'How does Chapter 13 move actions forward and show a strong feeling?',
      matchingPairs: [
        { left: 'Then she took some water', right: 'then moves the story to the next action' },
        { left: 'gave it to Ishmael', right: 'give + object + to + person shows who receives something' },
        { left: 'She was so happy', right: 'so + adjective increases the degree of a feeling or quality' },
        { left: 'Flow slowly, stop!', right: 'imperatives give direct commands or instructions' },
      ],
      correctAnswer: {
        'Then she took some water': 'then moves the story to the next action',
        'gave it to Ishmael': 'give + object + to + person shows who receives something',
        'She was so happy': 'so + adjective increases the degree of a feeling or quality',
        'Flow slowly, stop!': 'imperatives give direct commands or instructions',
      },
      explanation: 'The chapter uses “then” to sequence actions, “give ... to ...” for transfer, “so + adjective” for degree, and imperatives for direct commands.',
      feedback: {
        correct: 'Correct. You identified sequence, transfer, degree and command language.',
        incorrect: 'Ask what each phrase does: moves time forward, gives something, strengthens a feeling, or gives a command.',
      },
    },
    {
      id: 'abraham-a2-language-13-change-cause',
      type: 'matching',
      title: 'Change, Continuity and Cause',
      instructions: 'Match each expression with its function.',
      question: 'How does the chapter describe change, something continuing until now, and reasons?',
      matchingPairs: [
        { left: 'this water became very famous', right: 'become + adjective describes a change of state' },
        { left: 'It is still there today', right: 'still + present form shows that a situation continues now' },
        { left: 'The water is special because it was a gift', right: 'because + clause gives a reason' },
        { left: 'people came there because of this water', right: 'because of + noun gives a reason' },
      ],
      correctAnswer: {
        'this water became very famous': 'become + adjective describes a change of state',
        'It is still there today': 'still + present form shows that a situation continues now',
        'The water is special because it was a gift': 'because + clause gives a reason',
        'people came there because of this water': 'because of + noun gives a reason',
      },
      explanation: 'Chapter 13 contrasts “became” for change with “still” for continuation, and uses both “because + clause” and “because of + noun” to explain reasons.',
      feedback: {
        correct: 'Good. You distinguished change, continuation and two ways of giving a reason.',
        incorrect: 'Notice what follows “because” and what follows “because of”.',
      },
    },
    {
      id: 'abraham-a2-language-13-production',
      type: 'reflection',
      title: 'Say It: A Sudden Change',
      instructions: 'Write or say four or five short A2 sentences about a situation that changes suddenly. Use at least four Chapter 13 language patterns. Do not retell the Quick Challenge sequence.',
      question: 'Can you describe what was happening, what suddenly changed, what happened next, and why the result mattered?',
      correctAnswer: null,
      explanation: 'A strong response can use “was/were + -ing”, “suddenly + past simple”, “when ...”, “then ...”, “so + adjective”, “became + adjective”, “still ...”, “because + clause”, or “because of + noun”.',
      feedback: {
        correct: 'Use the chapter patterns to make one short, connected situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Background — Say two things that were happening with “was/were + -ing”.', mode: 'Individual' },
        { question: 'Change — Add a new event with “Suddenly ...”.', mode: 'Individual' },
        { question: 'Reaction — Use “When ...” or “Then ...”.', mode: 'Individual' },
        { question: 'Result — Add “became + adjective” or “still ...”.', mode: 'Individual' },
        { question: 'Reason — Finish with “because ...” or “because of ...”.', mode: 'Pair' },
      ],
    },
  ],
};
