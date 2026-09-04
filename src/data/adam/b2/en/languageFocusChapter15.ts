import type { Exercise } from '../../../../types';

/** Chapter 15 only — authored from the active corrected English story text. */
export const adamB2LanguageFocusChapter15: Record<number, Exercise[]> = {
  15: [
    {
      id: 'adam-b2-language-15-purpose-embedded',
      type: 'matching',
      title: 'Read Purpose, Method, and Possibility',
      instructions: 'Match each Chapter 15 expression with the relationship it builds.',
      question: 'How does the Qur’anic quotation compress purpose, method, and possibility into one sequence?',
      matchingPairs: [
        { left: 'Allah sent a raven', right: 'introduces the action that makes the lesson possible' },
        { left: 'who began to dig at the earth', right: 'adds the raven’s action through a relative clause' },
        { left: 'to show him', right: 'states the purpose of the raven’s action' },
        { left: 'how he might cover the corpse of his brother', right: 'embeds the method while “might” presents a possible way forward' },
      ],
      correctAnswer: {
        'Allah sent a raven': 'introduces the action that makes the lesson possible',
        'who began to dig at the earth': 'adds the raven’s action through a relative clause',
        'to show him': 'states the purpose of the raven’s action',
        'how he might cover the corpse of his brother': 'embeds the method while “might” presents a possible way forward',
      },
      explanation: 'The quotation builds a compact chain: action → added detail → purpose → possible method.',
      feedback: { correct: 'Correct.', incorrect: 'Separate the main action, relative clause, purpose phrase and embedded how-clause.' },
    },
    {
      id: 'adam-b2-language-15-interpretive-framing',
      type: 'multiple-choice',
      title: 'Separate Narrative from Interpretation',
      instructions: 'Choose the strongest analysis of the active story wording.',
      question: 'What is the discourse function of “What is essentially described here is the consequence of choosing evil”?',
      options: [
        'It signals that the paragraph is moving from narrated events to an interpretation of their wider significance.',
        'It introduces a new event that happens after the burial.',
        'It reports a direct Qur’anic quotation and therefore has the same source status as the verse above.',
      ],
      correctAnswer: 0,
      explanation: 'The phrase is metadiscursive framing: it marks a shift from event narration to interpretation of the event’s wider meaning.',
      feedback: { correct: 'Correct.', incorrect: 'Ask whether the sentence narrates an action, quotes a source, or comments on what the previous events mean.' },
    },
    {
      id: 'adam-b2-language-15-characterisation',
      type: 'matching',
      title: 'Build Analytical Characterisation',
      instructions: 'Match each expression with the language function it performs.',
      question: 'How does the chapter compress explanation and contrast when characterising Qabil and Habil?',
      matchingPairs: [
        { left: 'jealousy, which defeats the feelings of love and compassion', right: 'uses a relative clause to explain the destructive effect of jealousy' },
        { left: 'choosing the truth over falsehood and goodness over evil', right: 'uses parallel -ing forms to present two aligned moral choices' },
        { left: 'the type of person dominated by evil', right: 'uses a reduced passive description to characterise a person by what controls him' },
        { left: 'while Habil represents the righteous person', right: 'uses “while” to set two contrasting character types against each other' },
      ],
      correctAnswer: {
        'jealousy, which defeats the feelings of love and compassion': 'uses a relative clause to explain the destructive effect of jealousy',
        'choosing the truth over falsehood and goodness over evil': 'uses parallel -ing forms to present two aligned moral choices',
        'the type of person dominated by evil': 'uses a reduced passive description to characterise a person by what controls him',
        'while Habil represents the righteous person': 'uses “while” to set two contrasting character types against each other',
      },
      explanation: 'The paragraph links cause, parallel choices, compact characterisation and contrast to build an analysis rather than a list of traits.',
      feedback: { correct: 'Correct.', incorrect: 'Look for four jobs: explaining an effect, aligning choices, compressing description and contrasting characters.' },
    },
    {
      id: 'adam-b2-language-15-production',
      type: 'reflection',
      title: 'Write an Event-to-Interpretation Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which an event leads to a wider interpretation about human behaviour. Include one purpose structure, one embedded how-clause, the frame “What is essentially described here is...”, one explanatory relative clause and one contrast with “while”. Keep factual description and interpretation clearly separate.',
      question: 'Can you move from a concrete event to a careful interpretation while using clause structure to organise the argument?',
      correctAnswer: null,
      explanation: 'A strong response describes what happened first, explicitly marks the move into interpretation, explains a cause or effect and contrasts two responses without confusing interpretation with fact.',
      feedback: { correct: 'Keep event sentences factual and make the interpretive shift explicit.', incorrect: '' },
      discussionPrompts: [
        { question: 'Event — What concrete action or incident happens first?', mode: 'Individual' },
        { question: 'Purpose — What action is done to show, prevent or teach something?', mode: 'Individual' },
        { question: 'Interpretation — Which sentence clearly marks the move from event to meaning?', mode: 'Pair' },
        { question: 'Contrast — Which two responses or character types will “while” compare?', mode: 'Pair' },
      ],
    },
  ],
};
