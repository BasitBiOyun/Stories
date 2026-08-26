import type { Exercise } from '../../../../types';

/** Chapter 10 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'abraham-b2-language-10-created-controlled-purpose',
      type: 'matching',
      title: 'Trace Status, Control and Purpose',
      instructions: 'Match each phrase with the discourse function it performs. Focus on how the chapter turns visible celestial bodies into an argument about dependence.',
      question: 'How does the opening sentence build the claim that the heavenly bodies are not independent powers?',
      matchingPairs: [
        { left: 'are evidently created', right: 'states their dependent status as created beings' },
        { left: 'controlled, managed', right: 'foregrounds that their behaviour is governed rather than self-directed' },
        { left: 'made to serve a purpose', right: 'frames their existence as functional rather than autonomous' },
        { left: 'They come and go', right: 'adds observable change as evidence against permanence and independence' },
      ],
      correctAnswer: {
        'are evidently created': 'states their dependent status as created beings',
        'controlled, managed': 'foregrounds that their behaviour is governed rather than self-directed',
        'made to serve a purpose': 'frames their existence as functional rather than autonomous',
        'They come and go': 'adds observable change as evidence against permanence and independence',
      },
      explanation: 'The paragraph combines passive description and observable change to build a dependence argument rather than simply listing facts.',
      feedback: { correct: 'Correct. You traced how status, control, purpose and change work together.', incorrect: 'Look for what each phrase says about independence, control and permanence.' },
    },
    {
      id: 'abraham-b2-language-10-however-contrast',
      type: 'multiple-choice',
      title: 'Read the Contrast Across Sentences',
      instructions: 'Choose the option that best explains the function of “However” in the paragraph.',
      question: 'What contrast is created by “However, Allah sees and knows everything; nothing can be hidden from Him”?',
      options: [
        'It shifts from changing, limited created bodies to a contrasting description of Allah as unrestricted in knowledge and permanence.',
        'It merely changes topic from astronomy to weather without argumentative purpose.',
        'It shows that the heavenly bodies and Allah share the same limits but differ in size.',
      ],
      correctAnswer: 0,
      explanation: '“However” marks a major argumentative turn: created things are changing and dependent, while Allah is described as unlimited in knowledge and without disappearance.',
      feedback: { correct: 'Correct. You identified the chapter’s central contrast.', incorrect: 'Compare what is said about change and limitation before “However” with what follows it.' },
    },
    {
      id: 'abraham-b2-language-10-firstly-secondly',
      type: 'matching',
      title: 'Reconstruct a Two-Part Explanation',
      instructions: 'Match the organisers with the role they perform in Abraham’s explanation. Focus on discourse organisation, not on recalling the Quick Challenge answer.',
      question: 'How do “firstly” and “secondly” organise the reasoning?',
      matchingPairs: [
        { left: 'firstly', right: 'introduces the rejection of an inappropriate conclusion: worship' },
        { left: 'the heavenly bodies are unworthy of worship', right: 'states the negative evaluation produced by the earlier reasoning' },
        { left: 'secondly', right: 'adds a different positive interpretation after the rejection' },
        { left: 'they are the signs of Allah', right: 'reframes the same objects as evidence pointing beyond themselves' },
      ],
      correctAnswer: {
        'firstly': 'introduces the rejection of an inappropriate conclusion: worship',
        'the heavenly bodies are unworthy of worship': 'states the negative evaluation produced by the earlier reasoning',
        'secondly': 'adds a different positive interpretation after the rejection',
        'they are the signs of Allah': 'reframes the same objects as evidence pointing beyond themselves',
      },
      explanation: 'The sequence does more than enumerate points: it moves from rejecting one interpretation to supplying another.',
      feedback: { correct: 'Correct. You identified rejection followed by reinterpretation.', incorrect: 'Ask what the first point removes and what the second point puts in its place.' },
    },
    {
      id: 'abraham-b2-language-10-production',
      type: 'reflection',
      title: 'Build a Contrast-and-Reframing Argument',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story topic where something visible is first evaluated, then reinterpreted through evidence. Use one passive description, one “however” contrast, a “firstly / secondly” structure, and a final sentence showing how evidence leads to disagreement or debate. Do not retell the Abraham story.',
      question: 'Can you move from observation to contrast, evaluation and reframing in a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make each language choice advance the reasoning: observation, limitation, contrast, two-part interpretation, and a final consequence.',
      feedback: { correct: 'Check that your paragraph develops an argument rather than listing disconnected sentences.', incorrect: '' },
      discussionPrompts: [
        { question: 'Observation — What visible feature will you describe first?', mode: 'Individual' },
        { question: 'Contrast — What will “however” introduce?', mode: 'Individual' },
        { question: 'Reframing — What will “firstly” reject and “secondly” reinterpret?', mode: 'Pair' },
        { question: 'Consequence — How will the reasoning lead to disagreement, decision, or debate?', mode: 'Pair' },
      ],
    },
  ],
};
