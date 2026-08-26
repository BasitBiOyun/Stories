import type { Exercise } from '../../../../types';

/** Chapter 9 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter9: Record<number, Exercise[]> = {
  9: [
    {
      id: 'abraham-b2-language-9-condition-guidance',
      type: 'matching',
      title: 'Trace Condition, Guidance and Consequence',
      instructions: 'Match each clause with the discourse job it performs. Focus on how the chapter moves from uncertainty to dependence on guidance and then to a possible consequence.',
      question: 'How does the sentence “If my Lord does not guide me, I will be one of the erring people” organise meaning?',
      matchingPairs: [
        { left: 'If my Lord does not guide me', right: 'sets a condition on which the later outcome depends' },
        { left: 'I will be one of the erring people', right: 'states the consequence that would follow if the condition were met' },
        { left: 'does not guide me', right: 'frames guidance as something received rather than self-produced' },
        { left: 'will be', right: 'projects a future result from the present condition' },
      ],
      correctAnswer: {
        'If my Lord does not guide me': 'sets a condition on which the later outcome depends',
        'I will be one of the erring people': 'states the consequence that would follow if the condition were met',
        'does not guide me': 'frames guidance as something received rather than self-produced',
        'will be': 'projects a future result from the present condition',
      },
      explanation: 'The clause combines condition and consequence while also presenting guidance as necessary for avoiding error. The meaning is relational, not a grammar form in isolation.',
      feedback: {
        correct: 'Correct. You identified condition, dependence and projected consequence.',
        incorrect: 'Ask what must happen first, what depends on it, and how the future result is expressed.',
      },
    },
    {
      id: 'abraham-b2-language-9-stance-shift',
      type: 'multiple-choice',
      title: 'Interpret a Shift in Stance',
      instructions: 'Choose the option that best explains the contrast between “This is my lord” and “I am innocent of your idolatry.”',
      question: 'What does the change in wording do in the discourse?',
      options: [
        'It moves from examining an apparent possibility to an explicit rejection and a clearly stated commitment.',
        'It repeats the same belief twice with different vocabulary but no change in stance.',
        'It changes only the tense and leaves the speaker’s position unchanged.',
      ],
      correctAnswer: 0,
      explanation: 'The discourse progresses from testing what appears before him to an explicit declaration of separation from idolatry and orientation toward the Creator.',
      feedback: {
        correct: 'Correct. You read the wording as a development in stance rather than as isolated statements.',
        incorrect: 'Compare the level of commitment in the earlier claim and the later declaration.',
      },
    },
    {
      id: 'abraham-b2-language-9-created-vs-creator',
      type: 'matching',
      title: 'Separate Appearance from Created Status',
      instructions: 'Match each structure with the function it performs in the chapter’s argument. Do not retell which objects appear; focus on how language distinguishes visible movement from created dependence.',
      question: 'How does the paragraph move from what people see to what the writer says those objects actually are?',
      matchingPairs: [
        { left: 'were worshipped by people', right: 'uses passive focus to foreground the objects and the treatment they receive' },
        { left: 'while in fact', right: 'signals a correction from appearance or human practice to the writer’s asserted reality' },
        { left: 'had been created', right: 'presents the heavenly bodies as already-existing results of creation, not independent creators' },
        { left: 'they appeared and disappeared at the Creator’s command', right: 'links observable change to dependence on a higher agent' },
      ],
      correctAnswer: {
        'were worshipped by people': 'uses passive focus to foreground the objects and the treatment they receive',
        'while in fact': 'signals a correction from appearance or human practice to the writer’s asserted reality',
        'had been created': 'presents the heavenly bodies as already-existing results of creation, not independent creators',
        'they appeared and disappeared at the Creator’s command': 'links observable change to dependence on a higher agent',
      },
      explanation: 'The paragraph contrasts human practice with the status assigned to the heavenly bodies: they are worshipped, yet the text frames them as created and governed.',
      feedback: {
        correct: 'Correct. You distinguished passive focus, corrective contrast, prior created status and dependent action.',
        incorrect: 'Look for the shift from what people do to the objects toward what the text says about the objects themselves.',
      },
    },
    {
      id: 'abraham-b2-language-9-production',
      type: 'reflection',
      title: 'Build an Evidence-to-Stance Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story issue where an initial appearance is tested and then rejected or revised. Include: one real condition with “if ... will ...”, one sentence that moves from tentative examination to explicit stance, one passive structure that foregrounds an object or idea, one corrective contrast using “while in fact” or “however”, and one final sentence explaining how repeated evidence leads to a reasoned position. Keep the paragraph analytical and coherent.',
      question: 'Can you use condition, contrast, passive focus and stance development to build a B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should show reasoning developing across the paragraph: a possibility is examined, evidence changes the evaluation, and the final stance is expressed more explicitly.',
      feedback: {
        correct: 'Check that each target structure advances the argument and that the final stance follows from the evidence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Condition — What outcome will depend on a clear “if” condition?', mode: 'Individual' },
        { question: 'Appearance — What seems plausible at first, and what evidence later challenges it?', mode: 'Individual' },
        { question: 'Correction — Where will a passive structure and “while in fact” sharpen the contrast?', mode: 'Pair' },
        { question: 'Stance — How will the final sentence show a stronger, evidence-based position?', mode: 'Pair' },
      ],
    },
  ],
};
