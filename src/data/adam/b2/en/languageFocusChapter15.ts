import type { Exercise } from '../../../../types';

/** Chapter 15 only — authored from the English story text, not from the Arabic version. */
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
      explanation: 'The quotation builds a compact information chain: action → added detail → purpose → possible method. The modal “might” belongs inside the embedded how-clause and does not weaken the fact that the raven is sent.',
      feedback: {
        correct: 'Correct. You tracked several clause relationships inside one sentence instead of reading each phrase in isolation.',
        incorrect: 'Separate the main action, the relative clause, the purpose phrase, and the embedded how-clause.',
      },
    },
    {
      id: 'adam-b2-language-15-interpretive-framing',
      type: 'multiple-choice',
      title: 'Separate Narrative from Interpretation',
      instructions: 'Choose the strongest analysis of the wording.',
      question: 'What is the discourse function of “What is essentially being described here are the consequences of choosing evil”?',
      options: [
        'It signals that the paragraph is moving from narrated events to an interpretation of their wider significance.',
        'It introduces a new event that happened after the burial.',
        'It reports a direct quotation from the Qur’an and therefore carries the same source status as the verse above.',
      ],
      correctAnswer: 0,
      explanation: 'The expression “What is essentially being described here...” is metadiscursive framing. It tells the reader that the writer is now interpreting the narrative rather than continuing the event sequence or quoting scripture.',
      feedback: {
        correct: 'Correct. The phrase marks a shift in discourse level: event → interpretation.',
        incorrect: 'Ask whether the sentence narrates an action, quotes a source, or comments on what the previous events mean.',
      },
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
      explanation: 'The paragraph moves beyond naming qualities. It links cause, parallel choices, compact passive characterisation, and contrast to build an analytical comparison.',
      feedback: {
        correct: 'Correct. You identified how grammar helps the paragraph analyse character rather than merely list traits.',
        incorrect: 'Look for four different jobs: explaining an effect, aligning two choices, compressing a description, and contrasting two people.',
      },
    },
    {
      id: 'adam-b2-language-15-production',
      type: 'reflection',
      title: 'Write an Event-to-Interpretation Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story situation in which an event leads to a wider interpretation about human behaviour. Include one purpose structure such as “to show...”, one embedded how-clause such as “how someone might...”, one interpretive frame such as “What is essentially being shown here is...”, one relative clause that explains a cause or effect, and one contrast with “while”. Keep factual description and interpretation clearly separate. Do not retell Chapter 15.',
      question: 'Can you move from a concrete event to a careful interpretation while using clause structure to organise the argument?',
      correctAnswer: null,
      explanation: 'A strong B2 response should make the discourse shift visible: describe what happened first, then mark the move into interpretation, explain a cause or effect, and contrast two responses without confusing interpretation with fact.',
      feedback: {
        correct: 'Keep the event sentences factual, make the interpretive frame explicit, and ensure each relative or purpose clause adds a real relationship rather than extra decoration.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Event — What concrete action or incident happens first?', mode: 'Individual' },
        { question: 'Purpose — What action is done to show, prevent, or teach something?', mode: 'Individual' },
        { question: 'Interpretation — Which sentence clearly marks the move from event to meaning?', mode: 'Pair' },
        { question: 'Contrast — Which two responses or character types will “while” compare?', mode: 'Pair' },
      ],
    },
  ],
};
