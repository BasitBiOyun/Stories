import type { Exercise } from '../../../../types';

/** Chapter 12 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter12: Record<number, Exercise[]> = {
  12: [
    {
      id: 'abraham-b2-language-12-discourse-stance',
      type: 'matching',
      title: 'Track How the Paragraph Builds a Stance',
      instructions: 'Match each expression with the discourse job it performs. Focus on how the writer moves from reaction to belief and action.',
      question: 'How do these expressions organise Abraham’s stance rather than simply list events?',
      matchingPairs: [
        { left: 'paid no heed to this threat', right: 'presents a refusal to let an external threat control the response' },
        { left: 'As a true believer', right: 'frames the following response from an explicitly stated identity or viewpoint' },
        { left: 'In doing so', right: 'links the previous action to the meaning or implication drawn from it' },
        { left: 'both benefit and harm come from Allah', right: 'states the belief that explains the preceding response' },
      ],
      correctAnswer: {
        'paid no heed to this threat': 'presents a refusal to let an external threat control the response',
        'As a true believer': 'frames the following response from an explicitly stated identity or viewpoint',
        'In doing so': 'links the previous action to the meaning or implication drawn from it',
        'both benefit and harm come from Allah': 'states the belief that explains the preceding response',
      },
      explanation: 'The paragraph moves from reaction to viewpoint to interpretation. These choices create a reasoned stance rather than a bare sequence of actions.',
      feedback: { correct: 'Correct. You traced the reaction → viewpoint → interpretation chain.', incorrect: 'Ask whether each expression shows reaction, viewpoint, connection, or underlying belief.' },
    },
    {
      id: 'abraham-b2-language-12-direct-speech-functions',
      type: 'matching',
      title: 'Read Direct Speech as Argument',
      instructions: 'Match each quoted form with the argumentative function it performs. Do not answer the questions as comprehension questions.',
      question: 'What does each form of direct speech do inside the debate?',
      matchingPairs: [
        { left: 'What are these statues to which you are faithful?', right: 'opens the challenge by questioning the object of commitment' },
        { left: 'We found our parents worshiping them.', right: 'offers inherited practice as the speakers’ justification' },
        { left: 'Are you telling us the truth, or are you just playing?', right: 'questions the seriousness and credibility of the challenge' },
        { left: 'Your Lord is the Lord of the heavens and the earth...', right: 'reframes the discussion around a positive alternative claim' },
      ],
      correctAnswer: {
        'What are these statues to which you are faithful?': 'opens the challenge by questioning the object of commitment',
        'We found our parents worshiping them.': 'offers inherited practice as the speakers’ justification',
        'Are you telling us the truth, or are you just playing?': 'questions the seriousness and credibility of the challenge',
        'Your Lord is the Lord of the heavens and the earth...': 'reframes the discussion around a positive alternative claim',
      },
      explanation: 'Direct speech carries different discourse moves: challenge, justification, credibility testing, and reframing.',
      feedback: { correct: 'Correct. You identified the function of each turn in the exchange.', incorrect: 'Focus on what each speaker is trying to accomplish with the line.' },
    },
    {
      id: 'abraham-b2-language-12-contrast-expansion',
      type: 'multiple-choice',
      title: 'Read an Expanding Contrast',
      instructions: 'Choose the interpretation that best captures the effect of “not only... but... as well”.',
      question: 'What does “he not only worshipped idols but shaped and sold them as well” add to the description of the father?',
      options: [
        'It expands the description from personal worship to active production and sale, intensifying his involvement.',
        'It corrects the earlier statement by saying that he did not actually worship idols.',
        'It presents two uncertain possibilities and leaves the reader to choose between them.',
      ],
      correctAnswer: 0,
      explanation: 'The structure is additive and intensifying: the second clause adds a stronger layer of involvement rather than replacing the first.',
      feedback: { correct: 'Correct. The second clause expands and intensifies the first.', incorrect: 'Notice that both actions remain true; the second adds another layer.' },
    },
    {
      id: 'abraham-b2-language-12-production',
      type: 'reflection',
      title: 'Build a Stance-and-Response Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone faces pressure but responds from a clear principle. Use one viewpoint frame such as “As a...”, one connector such as “In doing so” to explain the meaning of an action, one short exchange containing a genuine challenge and a response, and one “not only... but also...” sentence that expands the final description. Do not retell the Abraham story.',
      question: 'Can you use viewpoint, dialogue and expanding contrast to build a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should connect pressure, principle, action, interpretation and dialogue into one coherent argument rather than produce isolated grammar examples.',
      feedback: { correct: 'Check that every language choice advances the paragraph’s stance and that the dialogue has a clear function.', incorrect: '' },
      discussionPrompts: [
        { question: 'Pressure — What external pressure starts your situation?', mode: 'Individual' },
        { question: 'Viewpoint — Which identity or principle will frame the response?', mode: 'Individual' },
        { question: 'Dialogue — What challenge will one speaker make, and how will the other reframe it?', mode: 'Pair' },
        { question: 'Expansion — What second fact will “not only... but also...” add to deepen the final description?', mode: 'Pair' },
      ],
    },
  ],
};
