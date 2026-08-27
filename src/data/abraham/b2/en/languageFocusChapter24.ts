import type { Exercise } from '../../../../types';

/** Chapter 24 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter24: Record<number, Exercise[]> = {
  24: [
    {
      id: 'abraham-b2-language-24-argument-result',
      type: 'matching',
      title: 'Track Challenge, Result and Public Effect',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the text move from Abraham’s final challenge to its wider consequences?',
      matchingPairs: [
        { left: 'so Abraham put forth another challenge', right: 'marks a consequence and moves the argument to a stronger test' },
        { left: 'which would unquestionably and easily quiet him', right: 'presents the expected effect of the new challenge from the narrator’s viewpoint' },
        { left: 'He was utterly defeated', right: 'compresses the immediate result of the exchange into a strong evaluative statement' },
        { left: 'Abraham’s fame spread throughout the entire kingdom of Babylonia', right: 'widens the focus from one debate to its public social effect' },
      ],
      correctAnswer: {
        'so Abraham put forth another challenge': 'marks a consequence and moves the argument to a stronger test',
        'which would unquestionably and easily quiet him': 'presents the expected effect of the new challenge from the narrator’s viewpoint',
        'He was utterly defeated': 'compresses the immediate result of the exchange into a strong evaluative statement',
        'Abraham’s fame spread throughout the entire kingdom of Babylonia': 'widens the focus from one debate to its public social effect',
      },
      explanation: 'The paragraph is organized as argument escalation → expected effect → immediate result → wider consequence, not as a simple list of events.',
      feedback: { correct: 'Correct. You tracked how the argument develops into a wider consequence.', incorrect: 'Look for the connector that marks consequence, the phrase that predicts an effect, and the sentence that broadens the scene.' },
    },
    {
      id: 'abraham-b2-language-24-simultaneous-contrast',
      type: 'matching',
      title: 'Build Simultaneity and Contrast',
      instructions: 'Match each expression with the relation it creates between ideas.',
      question: 'How does the chapter show that public attention and Abraham’s mission developed at the same time, yet produced little support?',
      matchingPairs: [
        { left: 'In the meantime, Abraham continued calling people to believe in Allah', right: 'signals that his mission continued while public discussion about him was also happening' },
        { left: 'He tried every means to persuade them', right: 'intensifies the scale and persistence of his effort' },
        { left: 'However, in spite of his love and care for his people, they left him alone', right: 'sets strong effort and concern against an unexpected negative outcome' },
        { left: 'Only one woman and one man of his people shared his belief in Allah', right: 'narrows the final result and emphasizes how limited the support remained' },
      ],
      correctAnswer: {
        'In the meantime, Abraham continued calling people to believe in Allah': 'signals that his mission continued while public discussion about him was also happening',
        'He tried every means to persuade them': 'intensifies the scale and persistence of his effort',
        'However, in spite of his love and care for his people, they left him alone': 'sets strong effort and concern against an unexpected negative outcome',
        'Only one woman and one man of his people shared his belief in Allah': 'narrows the final result and emphasizes how limited the support remained',
      },
      explanation: '“In the meantime” coordinates simultaneous developments, while “however” and “in spite of” create concession and contrast. “Only” then sharply limits the outcome.',
      feedback: { correct: 'Correct. You identified simultaneity, intensification, concession and limitation.', incorrect: 'Ask what continues at the same time, what effort is intensified, and where the text signals an unexpected result.' },
    },
    {
      id: 'abraham-b2-language-24-reference-cohesion',
      type: 'multiple-choice',
      title: 'Read Reference and Cohesion Across the Paragraph',
      instructions: 'Choose the analysis that best explains how the final sentences organize new information.',
      question: 'What is the main discourse effect of “The woman’s name was Sarah... The man’s name was Lot...” after “Only one woman and one man...”?',
      options: [
        'The text first introduces two supporters as a compact category, then identifies and develops each referent in parallel, creating clear cohesion from general reference to specific information.',
        'The repeated noun phrases are unnecessary because the identities were already fully explained before the sentence began.',
        'The two sentences mainly change the chronology by moving the story back to an earlier time.',
      ],
      correctAnswer: 0,
      explanation: 'The paragraph moves from limited quantity to identification: “one woman and one man” creates two referents, and the following parallel sentences name and develop them.',
      feedback: { correct: 'Correct. You recognized general-to-specific reference and parallel cohesion.', incorrect: 'Focus on how the unnamed pair in one sentence becomes two named, separately developed referents in the next sentences.' },
    },
    {
      id: 'abraham-b2-language-24-production',
      type: 'reflection',
      title: 'Write Effort, Resistance and Limited Outcome',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone makes a strong effort but receives only limited support. Include one consequence connector such as “so”, one phrase showing expected effect with “would”, one simultaneity marker such as “in the meantime”, one concession pattern with “however” plus “in spite of” or “although”, one limiting expression with “only”, and a final pair of parallel sentences that identify two specific supporters or outcomes. Keep the paragraph coherent rather than treating the forms as separate examples.',
      question: 'Can you organize a B2 paragraph around escalation, simultaneous development, concession and a sharply limited result?',
      correctAnswer: null,
      explanation: 'A strong response should show how an earlier event motivates a stronger action, how another development continues at the same time, why the eventual result is unexpected, and how a general reference can be developed into specific details.',
      feedback: { correct: 'Check that your connectors build a real discourse progression and that “only” genuinely limits the outcome.', incorrect: '' },
      discussionPrompts: [
        { question: 'Escalation — What earlier problem motivates a stronger response?', mode: 'Individual' },
        { question: 'Simultaneity — What two developments are happening at the same time?', mode: 'Pair' },
        { question: 'Concession — Why is the final result surprising despite the effort?', mode: 'Pair' },
        { question: 'Reference — How will you move from a general group to specific people or outcomes?', mode: 'Individual' },
      ],
    },
  ],
};
