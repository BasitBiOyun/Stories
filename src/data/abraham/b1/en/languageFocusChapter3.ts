import type { Exercise } from '../../../../types';

export const abrahamB1LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'abraham-b1-language-3-contrast-viewpoint',
      type: 'matching',
      title: 'Holding Two Ideas Together',
      instructions: 'Match each Chapter 3 expression with the relationship it creates.',
      question: 'How does the chapter connect contrast, continuation, and viewpoint?',
      matchingPairs: [
        { left: 'Although he always wondered about Allah, he also knew ...', right: 'acknowledges one idea before adding a different but compatible conclusion' },
        { left: 'the people ... were still showing love and respect to idols', right: 'shows a situation continuing without change' },
        { left: 'On the other hand, Abraham was in search of one true Creator.', right: 'shifts the viewpoint from the people to Abraham' },
        { left: 'But when it disappeared ...', right: 'contrasts an earlier possibility with later evidence' },
      ],
      correctAnswer: {
        'Although he always wondered about Allah, he also knew ...': 'acknowledges one idea before adding a different but compatible conclusion',
        'the people ... were still showing love and respect to idols': 'shows a situation continuing without change',
        'On the other hand, Abraham was in search of one true Creator.': 'shifts the viewpoint from the people to Abraham',
        'But when it disappeared ...': 'contrasts an earlier possibility with later evidence',
      },
      explanation: 'The chapter uses concession, continuation, viewpoint shift, and contrast to organise connected reasoning.',
      feedback: {
        correct: 'Correct. You identified how the expressions organise viewpoint and contrast.',
        incorrect: 'Ask whether the expression concedes an idea, shows continuation, shifts viewpoint, or contrasts an earlier idea with later evidence.',
      },
    },
    {
      id: 'abraham-b1-language-3-purpose-sequence',
      type: 'matching',
      title: 'Purpose and Movement Through a Scene',
      instructions: 'Match each expression with its job in the narrative.',
      question: 'How does the chapter connect purpose and sequence?',
      matchingPairs: [
        { left: 'left his home to take a walk', right: 'uses “to + verb” to express purpose' },
        { left: 'found a cave, sat there, and started thinking', right: 'links several actions in a compact sequence' },
        { left: 'Then he stood up and looked up ...', right: 'moves the narrative to the next step' },
        { left: 'when the moon faded, he understood ...', right: 'links new evidence to a resulting conclusion' },
      ],
      correctAnswer: {
        'left his home to take a walk': 'uses “to + verb” to express purpose',
        'found a cave, sat there, and started thinking': 'links several actions in a compact sequence',
        'Then he stood up and looked up ...': 'moves the narrative to the next step',
        'when the moon faded, he understood ...': 'links new evidence to a resulting conclusion',
      },
      explanation: 'B1 narration becomes clearer when purpose, linked actions, sequence markers, and result clauses show how one moment leads to another.',
      feedback: {
        correct: 'Good. You traced how language organises intention and sequence.',
        incorrect: 'Look for purpose, a chain of actions, the next step, and the point where evidence leads to a conclusion.',
      },
    },
    {
      id: 'abraham-b1-language-3-question-to-conclusion',
      type: 'matching',
      title: 'From Possibility to Conclusion',
      instructions: 'Match each form with its role in a reasoning sequence.',
      question: 'How can a speaker explore a possibility and then move toward a conclusion?',
      matchingPairs: [
        { left: 'Could this be my Allah?', right: 'opens a possibility for consideration' },
        { left: 'because it sets and disappears', right: 'gives the reason for rejecting that possibility' },
        { left: 'Could this be Allah?', right: 'tests a new possibility with the same question pattern' },
        { left: 'he understood that it could not be Allah', right: 'reports the conclusion reached after new evidence' },
      ],
      correctAnswer: {
        'Could this be my Allah?': 'opens a possibility for consideration',
        'because it sets and disappears': 'gives the reason for rejecting that possibility',
        'Could this be Allah?': 'tests a new possibility with the same question pattern',
        'he understood that it could not be Allah': 'reports the conclusion reached after new evidence',
      },
      explanation: 'The useful language pattern is the reasoning sequence: consider a possibility, give a reason, test again, and report a conclusion.',
      feedback: {
        correct: 'Correct. You followed the language of reasoning from possibility to conclusion.',
        incorrect: 'Separate the question form, the reason clause, the repeated test, and the reported conclusion.',
      },
    },
    {
      id: 'abraham-b1-language-3-reasoned-observation',
      type: 'reflection',
      title: 'Build a Short Reasoning Chain',
      instructions: 'Write or say four connected B1 sentences about someone examining two possible explanations for an everyday situation. Use at least three Chapter 3 language patterns without retelling the story.',
      question: 'Can you move from contrast or viewpoint to purpose or sequence, then test a possibility and finish with a reasoned conclusion?',
      correctAnswer: null,
      explanation: 'A strong response can use “Although ...”, “On the other hand ...”, “Could this be ...?”, “because ...”, and “I understood/realised that ...” in one coherent line of reasoning.',
      feedback: {
        correct: 'Keep all four sentences focused on one situation and make the conclusion follow from the evidence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Introduce contrast with “Although ...” or shift viewpoint with “On the other hand ...”.', mode: 'Individual' },
        { question: 'Sentence 2 — Add purpose or sequence with “to + verb”, linked actions, or “Then ...”.', mode: 'Individual' },
        { question: 'Sentence 3 — Test a possibility with “Could this be ...?” and give a reason with “because ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — Report the conclusion with “I understood/realised that ...”.', mode: 'Pair' },
      ],
    },
  ],
};
