import type { Exercise } from '../../../../types';

/** Chapter 32 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter32: Record<number, Exercise[]> = {
  32: [
    {
      id: 'abraham-b2-language-32-time-pressure',
      type: 'matching',
      title: 'Track Timing at the Turning Point',
      instructions: 'Match each expression with the timing or discourse effect it creates.',
      question: 'How does the chapter compress the final moments of the test and then interrupt them?',
      matchingPairs: [
        { left: 'when they both obeyed Allah\'s command', right: 'frames the decisive action as a shared point of submission' },
        { left: 'laid him face down upon his forehead', right: 'moves the narrative from intention into immediate physical action' },
        { left: 'just as his knife was about to near Ishmael', right: 'marks an action on the verge of happening and creates maximum tension' },
        { left: 'A voice stopped Abraham', right: 'interrupts the expected outcome and redirects the event' },
      ],
      correctAnswer: {
        'when they both obeyed Allah\'s command': 'frames the decisive action as a shared point of submission',
        'laid him face down upon his forehead': 'moves the narrative from intention into immediate physical action',
        'just as his knife was about to near Ishmael': 'marks an action on the verge of happening and creates maximum tension',
        'A voice stopped Abraham': 'interrupts the expected outcome and redirects the event',
      },
      explanation: 'The chapter uses a completed shared action, immediate physical sequencing and “was about to” to bring the test to its peak before an interruption reverses the expected outcome.',
      feedback: { correct: 'Correct. You traced how timing creates pressure and then a sudden reversal.', incorrect: 'Focus on which phrase signals a shared completed step, which signals imminent action, and which interrupts it.' },
    },
    {
      id: 'abraham-b2-language-32-test-fulfilment',
      type: 'matching',
      title: 'Follow Test → Fulfilment → Reward',
      instructions: 'Match each expression with its role in the chapter’s reasoning chain.',
      question: 'How does the text move from obedience to interpretation and consequence?',
      matchingPairs: [
        { left: 'You have indeed fulfilled the vision', right: 'interprets the required response as having been completed' },
        { left: 'That verily was a clear test', right: 'classifies the whole event as a test rather than an end in itself' },
        { left: 'Because of this', right: 'explicitly links the previous response to a later consequence' },
        { left: 'Allah made him the leader of humanity and brought Messengers from his children', right: 'presents the consequence that follows the chapter’s evaluation of Abraham’s faithfulness' },
      ],
      correctAnswer: {
        'You have indeed fulfilled the vision': 'interprets the required response as having been completed',
        'That verily was a clear test': 'classifies the whole event as a test rather than an end in itself',
        'Because of this': 'explicitly links the previous response to a later consequence',
        'Allah made him the leader of humanity and brought Messengers from his children': 'presents the consequence that follows the chapter’s evaluation of Abraham’s faithfulness',
      },
      explanation: 'These expressions build an argument, not just a sequence of events: fulfilment is stated, the event is interpreted as a test, and a consequence is then connected to that evaluation.',
      feedback: { correct: 'Correct. You identified how the chapter turns narrative events into an explicit interpretation-and-consequence chain.', incorrect: 'Look for the language that labels the event, explains its meaning, and then introduces a result.' },
    },
    {
      id: 'abraham-b2-language-32-reformulation',
      type: 'multiple-choice',
      title: 'Preserve the Chapter’s Meaning Boundaries',
      instructions: 'Choose the reformulation that best preserves the chapter’s sequence and interpretation without turning the Quick Challenge answer into the whole point.',
      question: 'Which version most accurately reflects how the chapter frames the event?',
      options: [
        'Abraham and Ishmael proceed in obedience until the action reaches its critical point; the act is stopped, Abraham is told that he has fulfilled the vision, and the event is explicitly described as a test. The chapter then connects Abraham’s demonstrated willingness with later leadership and prophetic lineage, while the sacrifice itself is replaced by an animal.',
        'The chapter presents Ishmael’s death as the necessary final goal, and every later reward depends on that death taking place.',
        'The chapter says the animal replacement was the original purpose announced before Abraham and Ishmael showed any willingness to obey.',
      ],
      correctAnswer: 0,
      explanation: 'The chapter distinguishes willingness and fulfilment of the test from the actual killing of Ishmael, which does not occur.',
      feedback: { correct: 'Correct. The test, interruption, interpretation and later consequence remain distinct.', incorrect: 'Do not collapse the test into an actual death or move the replacement to a point before the obedience is demonstrated.' },
    },
    {
      id: 'abraham-b2-language-32-production',
      type: 'reflection',
      title: 'Write a Turning-Point Evaluation',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult test, inspection, trial, or responsibility that reaches a critical point and is then reassessed. Include one “when” clause to frame a decisive moment, one “was about to” expression for an imminent action, one interruption or reversal, one sentence that explicitly evaluates what the event proved, one cause/result connector such as “because of this” or “therefore”, and one final sentence that limits or corrects a possible misunderstanding with “only”, “rather than”, or “not... but...”.',
      question: 'Can you move from event sequence to B2-level interpretation without confusing what happened with what the event demonstrated?',
      correctAnswer: null,
      explanation: 'A strong response should separate event timing, interruption, evaluation and consequence, then use a final limiting expression to prevent overstatement.',
      feedback: { correct: 'Check that your paragraph distinguishes the event itself from what it proves or leads to.', incorrect: '' },
      discussionPrompts: [
        { question: 'Timing — Which event was already happening, and what was just about to happen?', mode: 'Individual' },
        { question: 'Reversal — What interrupted the expected result?', mode: 'Pair' },
        { question: 'Evaluation — What did the event demonstrate, rather than merely what happened?', mode: 'Pair' },
        { question: 'Boundary — Which final sentence prevents an exaggerated interpretation?', mode: 'Individual' },
      ],
    },
  ],
};
