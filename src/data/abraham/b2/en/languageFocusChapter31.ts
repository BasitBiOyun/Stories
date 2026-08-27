import type { Exercise } from '../../../../types';

/** Chapter 31 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter31: Record<number, Exercise[]> = {
  31: [
    {
      id: 'abraham-b2-language-31-time-development',
      type: 'matching',
      title: 'Track Growth and Turning Points',
      instructions: 'Match each expression with the discourse function it performs.',
      question: 'How does the chapter move from Ishmael’s settled life into the sacrifice test?',
      matchingPairs: [
        { left: 'Ishmael grew up among them', right: 'establishes a continuing life stage in the Jurham community' },
        { left: 'Growing up among the Jurham tribe, Ishmael married...', right: 'compresses background development before a later life event' },
        { left: 'Abraham had a dream that he sacrificed his son', right: 'introduces the turning point that changes the direction of the chapter' },
        { left: 'when he was old enough to walk with him', right: 'locates the command within a later stage of Ishmael’s growth' },
      ],
      correctAnswer: {
        'Ishmael grew up among them': 'establishes a continuing life stage in the Jurham community',
        'Growing up among the Jurham tribe, Ishmael married...': 'compresses background development before a later life event',
        'Abraham had a dream that he sacrificed his son': 'introduces the turning point that changes the direction of the chapter',
        'when he was old enough to walk with him': 'locates the command within a later stage of Ishmael’s growth',
      },
      explanation: 'The chapter uses background growth, a compressed participial phrase, and a later turning point to shift from settled life to a major test.',
      feedback: { correct: 'Correct. You traced background development, life-stage progression and the turning point.', incorrect: 'Look for which phrases describe background growth and which one introduces the new test.' },
    },
    {
      id: 'abraham-b2-language-31-command-framing',
      type: 'multiple-choice',
      title: 'Preserve Command and Viewpoint',
      instructions: 'Choose the reformulation that best preserves the chapter’s viewpoint and source framing.',
      question: 'Which version most accurately keeps the dream, Abraham’s understanding of it, and Ishmael’s response distinct?',
      options: [
        'Abraham sees the sacrifice in a dream and understands that he is commanded to act. He then tells Ishmael what he has seen and asks for his view; Ishmael responds by referring to what his father is commanded to do and expresses willingness to remain patient.',
        'Abraham privately decides to sacrifice Ishmael and then tells him that the decision cannot be discussed.',
        'Ishmael first proposes the sacrifice, and Abraham later interprets the proposal as a dream.',
      ],
      correctAnswer: 0,
      explanation: 'The chapter distinguishes the dream, Abraham’s understanding of command, consultation with Ishmael, and Ishmael’s willing response.',
      feedback: { correct: 'Correct. The source, interpretation, consultation and response remain separate.', incorrect: 'Do not collapse the dream, the command, and Ishmael’s response into one speaker’s private decision.' },
    },
    {
      id: 'abraham-b2-language-31-speech-functions',
      type: 'matching',
      title: 'Read the Dialogue as Action',
      instructions: 'Match each quoted expression with what it does in the exchange.',
      question: 'How do the speakers use language to move from disclosure to consultation and commitment?',
      matchingPairs: [
        { left: 'I have seen in a dream that I am slaughtering you', right: 'reports the vision directly to the person affected by it' },
        { left: 'so look what do you think', right: 'opens space for consultation rather than presenting only a monologue' },
        { left: 'Do that which you are commanded', right: 'frames the action as obedience to a command rather than a personal preference' },
        { left: 'you shall find me ... of the patient', right: 'expresses future-oriented commitment while leaving the outcome under Allah’s will' },
      ],
      correctAnswer: {
        'I have seen in a dream that I am slaughtering you': 'reports the vision directly to the person affected by it',
        'so look what do you think': 'opens space for consultation rather than presenting only a monologue',
        'Do that which you are commanded': 'frames the action as obedience to a command rather than a personal preference',
        'you shall find me ... of the patient': 'expresses future-oriented commitment while leaving the outcome under Allah’s will',
      },
      explanation: 'At B2 level, direct speech can be read by function: disclosure, consultation, framing of obligation and commitment.',
      feedback: { correct: 'Correct. You identified how each line changes the interaction.', incorrect: 'Focus on what each utterance does, not only what information it contains.' },
    },
    {
      id: 'abraham-b2-language-31-production',
      type: 'reflection',
      title: 'Build a Consultation under Pressure',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult responsibility discussed between two people. Include one background-growth expression, one turning-point sentence, one report of an obligation or instruction, one direct question inviting the other person’s view, one response that accepts or challenges the obligation with a reason, and one future-oriented commitment qualified by uncertainty or dependence such as “if possible”, “if all goes well”, or “God willing”. Keep obligation, consultation and personal choice clearly distinct.',
      question: 'Can you build a coherent B2 exchange in which responsibility is reported, discussed and responded to rather than simply announced?',
      correctAnswer: null,
      explanation: 'A strong response should move from background to a turning point, distinguish obligation from preference, and use consultation language to develop the interaction.',
      feedback: { correct: 'Check that your paragraph separates background, obligation, consultation, response and future commitment.', incorrect: '' },
      discussionPrompts: [
        { question: 'Background — What had developed before the difficult responsibility appeared?', mode: 'Individual' },
        { question: 'Obligation — How will you show that a responsibility comes from a rule, role or instruction rather than preference?', mode: 'Pair' },
        { question: 'Consultation — What direct question genuinely invites another viewpoint?', mode: 'Pair' },
        { question: 'Commitment — How can the response show willingness without pretending complete control over the future?', mode: 'Individual' },
      ],
    },
  ],
};
