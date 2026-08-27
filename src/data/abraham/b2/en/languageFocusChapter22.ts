import type { Exercise } from '../../../../types';

/** Chapter 22 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter22: Record<number, Exercise[]> = {
  22: [
    {
      id: 'abraham-b2-language-22-time-result',
      type: 'matching',
      title: 'Track Time and Result',
      instructions: 'Match each expression with the way it organizes the sequence or consequence.',
      question: 'How does the chapter move from an ongoing situation to a completed turning point and its result?',
      matchingPairs: [
        { left: 'The fire kept burning for such a long time that...', right: 'links duration with a consequence that develops from it' },
        { left: 'Once the fire burnt out...', right: 'marks the completed event that opens the next stage of the narrative' },
        { left: 'The smoke had blackened their faces...', right: 'uses past perfect to present an earlier completed result before the next comparison' },
        { left: 'Consequently, many people started following Abraham', right: 'signals an explicit consequence of the preceding events' },
      ],
      correctAnswer: {
        'The fire kept burning for such a long time that...': 'links duration with a consequence that develops from it',
        'Once the fire burnt out...': 'marks the completed event that opens the next stage of the narrative',
        'The smoke had blackened their faces...': 'uses past perfect to present an earlier completed result before the next comparison',
        'Consequently, many people started following Abraham': 'signals an explicit consequence of the preceding events',
      },
      explanation: 'The paragraph does more than list events. Duration builds toward a result, “once” marks a completed turning point, past perfect looks back to an earlier result, and “consequently” states a later consequence.',
      feedback: { correct: 'Correct. You tracked duration, completion, earlier result and consequence.', incorrect: 'Look at how each form places one event in relation to another rather than only identifying tense names.' },
    },
    {
      id: 'abraham-b2-language-22-reversal-focus',
      type: 'matching',
      title: 'Read Reversal and Information Focus',
      instructions: 'Match each structure with its discourse effect.',
      question: 'How does the chapter foreground unexpected outcomes and contrast them with what observers expected?',
      matchingPairs: [
        { left: 'they were shocked to see that Abraham stepped out... unharmed', right: 'foregrounds the observers’ reaction to an outcome that contradicts expectation' },
        { left: 'The smoke blackened their faces, yet his face was bright', right: 'uses “yet” to place two sharply contrasting results side by side' },
        { left: 'Cries of astonishment were heard from the unbelievers', right: 'uses passive voice to foreground the public reaction rather than who produced each cry' },
        { left: 'This miracle shamed the despotic rulers, but the fire of their rage remained uncooled', right: 'uses “but” to show that one consequence does not automatically produce a second expected change' },
      ],
      correctAnswer: {
        'they were shocked to see that Abraham stepped out... unharmed': 'foregrounds the observers’ reaction to an outcome that contradicts expectation',
        'The smoke blackened their faces, yet his face was bright': 'uses “yet” to place two sharply contrasting results side by side',
        'Cries of astonishment were heard from the unbelievers': 'uses passive voice to foreground the public reaction rather than who produced each cry',
        'This miracle shamed the despotic rulers, but the fire of their rage remained uncooled': 'uses “but” to show that one consequence does not automatically produce a second expected change',
      },
      explanation: 'The chapter repeatedly manages expectation. “Yet” and “but” create reversals, while the passive form keeps attention on the visible reaction rather than individual actors.',
      feedback: { correct: 'Correct. You identified how contrast and information focus shape the turning point.', incorrect: 'Ask what expectation is being reversed and what information the sentence chooses to foreground.' },
    },
    {
      id: 'abraham-b2-language-22-motive-vs-result',
      type: 'multiple-choice',
      title: 'Separate Result from Motive',
      instructions: 'Choose the option that best preserves the difference between consequence and motive.',
      question: 'Which reformulation best preserves the functions of “Consequently” and “out of fear of rulers”?',
      options: [
        'The miracle had a public consequence: many began to follow Abraham; fear, however, explains why some believers kept their faith private.',
        'Fear caused the miracle, and the miracle directly forced every observer to become a public follower.',
        'Both phrases simply repeat the same cause-and-effect relation and can be exchanged without changing meaning.',
      ],
      correctAnswer: 0,
      explanation: '“Consequently” links the preceding event to a later result. “Out of fear of rulers” explains the motive for a different human choice. They operate at different points in the reasoning chain.',
      feedback: { correct: 'Correct. You kept consequence and motive distinct.', incorrect: 'Separate what happened as a result from why a particular group chose to act in a certain way.' },
    },
    {
      id: 'abraham-b2-language-22-production',
      type: 'reflection',
      title: 'Build a Turning-Point Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a long-running difficulty reaches a turning point and produces mixed reactions. Use one duration-to-result structure such as “for such a long time that”, one “once” clause, one past-perfect sentence for an earlier completed result, “yet” or “but” for a genuine reversal, one passive sentence to foreground a reaction or event, “consequently” for a later result, and a separate motive phrase such as “out of fear of...”, “because of...”, or “to avoid...”. Do not retell the Abraham story.',
      question: 'Can you organize duration, turning point, reversal, consequence and motive into one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make the timeline clear and keep discourse relations distinct: duration leads toward a turning point, contrast reverses an expectation, consequence follows from an event, and motive explains a person’s choice.',
      feedback: { correct: 'Check that your timeline is coherent and that consequence and motive are not treated as the same relationship.', incorrect: '' },
      discussionPrompts: [
        { question: 'Duration — What continued for a long time?', mode: 'Individual' },
        { question: 'Turning point — What completed event changed the situation?', mode: 'Pair' },
        { question: 'Reversal — What happened differently from what people expected?', mode: 'Pair' },
        { question: 'Result and motive — What followed, and why did one person or group react differently?', mode: 'Individual' },
      ],
    },
  ],
};
