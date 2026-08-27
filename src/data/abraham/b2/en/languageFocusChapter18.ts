import type { Exercise } from '../../../../types';

/** Chapter 18 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter18: Record<number, Exercise[]> = {
  18: [
    {
      id: 'abraham-b2-language-18-rhetorical-reason',
      type: 'matching',
      title: 'Read Mockery, Reason and Contrast',
      instructions: 'Match each expression with the discourse function it performs. Focus on how the language turns an observable scene into an argument.',
      question: 'How do the chapter’s questions and connectors build a practical argument?',
      matchingPairs: [
        { left: 'Will you not eat of the offering before you?', right: 'works as a mocking rhetorical question rather than a genuine request for information' },
        { left: 'for he knew they would not eat', right: 'gives the speaker’s reason and makes the irony explicit' },
        { left: 'What is the matter with you that you do not speak?', right: 'uses another rhetorical question to expose inability through expected silence' },
        { left: 'He then raised his axe and started smashing...', right: 'moves the discourse from verbal challenge to observable action' },
      ],
      correctAnswer: {
        'Will you not eat of the offering before you?': 'works as a mocking rhetorical question rather than a genuine request for information',
        'for he knew they would not eat': 'gives the speaker’s reason and makes the irony explicit',
        'What is the matter with you that you do not speak?': 'uses another rhetorical question to expose inability through expected silence',
        'He then raised his axe and started smashing...': 'moves the discourse from verbal challenge to observable action',
      },
      explanation: 'The questions are argumentative because the speaker already expects no response. The connector “for” explains why the first question is mocking, and the following action turns the verbal test into visible evidence.',
      feedback: { correct: 'Correct. You identified how question, reason and action work together.', incorrect: 'Ask whether the speaker genuinely needs an answer, and what “for” explains.' },
    },
    {
      id: 'abraham-b2-language-18-exception-completion',
      type: 'matching',
      title: 'Track Exception and Completed Purpose',
      instructions: 'Match each form with the meaning relationship it creates in the paragraph.',
      question: 'Which structures show exception, completed action and intended function?',
      matchingPairs: [
        { left: 'He destroyed them all except one.', right: 'creates a clear exception inside an otherwise complete set' },
        { left: 'On its neck, he hung the axe.', right: 'adds a deliberate detail whose meaning depends on the surviving exception' },
        { left: 'He had fulfilled his duty...', right: 'uses the past perfect to present the intended task as already completed before the next scene begins' },
        { left: '...to show his people a practical proof...', right: 'states the intended function of the completed action' },
      ],
      correctAnswer: {
        'He destroyed them all except one.': 'creates a clear exception inside an otherwise complete set',
        'On its neck, he hung the axe.': 'adds a deliberate detail whose meaning depends on the surviving exception',
        'He had fulfilled his duty...': 'uses the past perfect to present the intended task as already completed before the next scene begins',
        '...to show his people a practical proof...': 'states the intended function of the completed action',
      },
      explanation: '“Except” narrows a total claim by removing one item from it. “Had fulfilled” places completion before the people return, while the infinitive phrase explains purpose rather than adding another event.',
      feedback: { correct: 'Correct. You separated exception, completion and purpose.', incorrect: 'Look for the one item excluded, the earlier completed action, and the phrase that explains why it was done.' },
    },
    {
      id: 'abraham-b2-language-18-evidence-shift',
      type: 'multiple-choice',
      title: 'Follow the Shift from Narrative to Quoted Evidence',
      instructions: 'Choose the explanation that best describes the final discourse shift.',
      question: 'What is the effect of moving from “they tried to find out who had done that” to the Qur’anic quotation beginning “They said, ‘Who did this to our gods?’”?',
      options: [
        'The narration moves from summary into directly quoted source material, making the people’s reaction more immediate while clearly marking the source of the wording.',
        'The quotation introduces a completely unrelated event and removes the need to connect it with the previous narrative.',
        'The quotation proves every earlier narrative detail independently, so source boundaries no longer matter.',
      ],
      correctAnswer: 0,
      explanation: 'The paragraph first summarizes the reaction, then explicitly attributes quoted wording to Surah Enbiyâ. The shift increases immediacy without erasing the distinction between narration and cited source.',
      feedback: { correct: 'Correct. You preserved the difference between narrative summary and explicitly cited wording.', incorrect: 'Notice the source marker before the quotation and ask what changes when the wording becomes direct speech.' },
    },
    {
      id: 'abraham-b2-language-18-production',
      type: 'reflection',
      title: 'Write an Evidence-Building Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone challenges an ineffective claim, uses a rhetorical question, gives the reason for the question with “for” or another natural reason connector, creates one deliberate exception with “except”, completes an action before a later reaction using the past perfect, and then shifts from narrative summary to a short explicitly attributed quotation or piece of evidence. End by explaining what the evidence shows. Do not retell the Abraham story.',
      question: 'Can you combine rhetorical testing, exception, completed purpose and source-marked evidence in one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should make each discourse move purposeful: the rhetorical question tests a claim, the reason explains the test, the exception matters to the logic, the past perfect clarifies sequence, and the quotation is explicitly sourced rather than blended into the narrator’s voice.',
      feedback: { correct: 'Check that the quotation is clearly attributed and that each connector changes the relationship between ideas.', incorrect: '' },
      discussionPrompts: [
        { question: 'Test — What rhetorical question can expose a weakness without genuinely asking for unknown information?', mode: 'Individual' },
        { question: 'Reason — What connector will explain why that question is being asked?', mode: 'Individual' },
        { question: 'Exception — What single item or case will you exclude, and why does that exception matter?', mode: 'Pair' },
        { question: 'Evidence — How will you mark the source of the final quotation or evidence explicitly?', mode: 'Pair' },
      ],
    },
  ],
};
