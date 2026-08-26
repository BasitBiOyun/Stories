import type { Exercise } from '../../../../types';

/** Chapter 11 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter11: Record<number, Exercise[]> = {
  11: [
    {
      id: 'abraham-b2-language-11-rhetorical-questions',
      type: 'matching',
      title: 'Trace the Argument Through Questions',
      instructions: 'Match each question with the argumentative move it performs. Focus on discourse function rather than story recall.',
      question: 'How do Abraham’s questions organise the challenge to his opponents?',
      matchingPairs: [
        { left: 'Do you argue with me about Allah, when He has guided me?', right: 'challenges the basis of the dispute by foregrounding a prior position of guidance' },
        { left: 'Will you not reconsider?', right: 'presses the audience to reassess its reasoning rather than simply receive information' },
        { left: 'Why should I fear the partners you give to Him...?', right: 'reverses the burden of fear and asks why unsupported objects deserve authority' },
        { left: 'Which of the two parties has more right to security...?', right: 'turns the debate into a comparison that requires a reasoned judgement' },
      ],
      correctAnswer: {
        'Do you argue with me about Allah, when He has guided me?': 'challenges the basis of the dispute by foregrounding a prior position of guidance',
        'Will you not reconsider?': 'presses the audience to reassess its reasoning rather than simply receive information',
        'Why should I fear the partners you give to Him...?': 'reverses the burden of fear and asks why unsupported objects deserve authority',
        'Which of the two parties has more right to security...?': 'turns the debate into a comparison that requires a reasoned judgement',
      },
      explanation: 'The questions are not requests for missing facts. They structure the argument by challenging assumptions, shifting the burden of proof, and forcing comparison.',
      feedback: { correct: 'Correct. You identified how each question advances the reasoning.', incorrect: 'Ask what argumentative pressure each question places on the listener.' },
    },
    {
      id: 'abraham-b2-language-11-unless-exception',
      type: 'multiple-choice',
      title: 'Read an Exception Without Weakening the Main Claim',
      instructions: 'Choose the explanation that best captures the role of “unless” in the sentence.',
      question: 'What does “I do not fear partners you assign to Him, unless my Lord wills it” do?',
      options: [
        'It maintains the main rejection of fear while leaving a limited exception dependent on the Lord’s will.',
        'It means Abraham is generally afraid of the partners and only sometimes confident.',
        'It changes the sentence into a historical guess about what the people believed.',
      ],
      correctAnswer: 0,
      explanation: '“Unless” preserves the main stance while marking a tightly controlled exception. The sentence does not surrender the argument.',
      feedback: { correct: 'Correct. The exception is subordinate to the main stance.', incorrect: 'Separate the main claim from the narrow condition introduced by “unless”.' },
    },
    {
      id: 'abraham-b2-language-11-authority-evidence-inference',
      type: 'matching',
      title: 'Separate Evidence, Absence of Evidence and Inference',
      instructions: 'Match each expression with the epistemic role it plays. Preserve the chapter’s distinction between stated evidence and later interpretation.',
      question: 'How does the chapter distinguish what is stated from what is inferred?',
      matchingPairs: [
        { left: 'for which He sent down to you no authority', right: 'explicitly frames the opposing claim as lacking authorised evidence' },
        { left: 'present evidence to prove the correctness of their beliefs', right: 'reports the opponents’ attempt to justify their position' },
        { left: 'these arguments are not told in the verses', right: 'states an absence in the presented scriptural account' },
        { left: 'It is understood from Abraham’s statement... that his people threatened him', right: 'marks a later inference drawn from the wording rather than a directly quoted event' },
      ],
      correctAnswer: {
        'for which He sent down to you no authority': 'explicitly frames the opposing claim as lacking authorised evidence',
        'present evidence to prove the correctness of their beliefs': 'reports the opponents’ attempt to justify their position',
        'these arguments are not told in the verses': 'states an absence in the presented scriptural account',
        'It is understood from Abraham’s statement... that his people threatened him': 'marks a later inference drawn from the wording rather than a directly quoted event',
      },
      explanation: 'B2 reading requires keeping evidence, absence of evidence, reported attempts at proof, and interpretation separate instead of flattening them into one certainty level.',
      feedback: { correct: 'Correct. You kept the evidence levels distinct.', incorrect: 'Look for whether the sentence states, reports, notes an absence, or infers.' },
    },
    {
      id: 'abraham-b2-language-11-production',
      type: 'reflection',
      title: 'Build a Question-Led Evidence Argument',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story disagreement. Use at least two rhetorical questions, one narrow exception with “unless”, one sentence about evidence or authority, one sentence that explicitly marks an inference with wording such as “it can be inferred that”, and a final comparison that asks which position is better supported. Do not retell the Abraham story.',
      question: 'Can you use questions, qualification and evidence status to build a coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should use language choices to organise reasoning: challenge an assumption, qualify a claim, distinguish evidence from inference, and end with an evaluative comparison.',
      feedback: { correct: 'Check that your questions advance the argument and that your inference is clearly marked as an inference.', incorrect: '' },
      discussionPrompts: [
        { question: 'Assumption — Which idea will your first rhetorical question challenge?', mode: 'Individual' },
        { question: 'Qualification — What narrow exception will “unless” introduce?', mode: 'Individual' },
        { question: 'Evidence — What is directly supported, and what is only inferred?', mode: 'Pair' },
        { question: 'Comparison — How will your final question compare the two positions?', mode: 'Pair' },
      ],
    },
  ],
};
