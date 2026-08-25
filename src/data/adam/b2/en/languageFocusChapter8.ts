import type { Exercise } from '../../../../types';

/** Chapter 8 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    {
      id: 'adam-b2-language-8-sequence-result',
      type: 'matching',
      title: 'Build the Realisation Sequence',
      instructions: 'Match each Chapter 8 expression with the relationship it creates in the narrative.',
      question: 'How does the chapter organise action, discovery and response without simply listing events?',
      matchingPairs: [
        { left: 'when they tasted the tree', right: 'opens the time point that triggers the next developments' },
        { left: 'their nakedness became evident to them', right: 'presents a newly perceived result of the previous action' },
        { left: 'so they both started cutting tree leaves', right: 'marks a response that follows from the discovery' },
        { left: 'They were in haste to hide...', right: 'adds the manner and urgency of the response' },
      ],
      correctAnswer: {
        'when they tasted the tree': 'opens the time point that triggers the next developments',
        'their nakedness became evident to them': 'presents a newly perceived result of the previous action',
        'so they both started cutting tree leaves': 'marks a response that follows from the discovery',
        'They were in haste to hide...': 'adds the manner and urgency of the response',
      },
      explanation: 'The chapter uses a time clause, a result, a consequence marker and an expression of manner to turn separate events into a connected realisation-and-response sequence.',
      feedback: {
        correct: 'Correct. You tracked time → result → response → manner.',
        incorrect: 'Ask whether each expression tells you when something happens, what becomes apparent, what follows, or how the response is carried out.',
      },
    },
    {
      id: 'adam-b2-language-8-dialogue-function',
      type: 'matching',
      title: 'Read Questions as Discourse Moves',
      instructions: 'Match each quoted line with what it does in the dialogue.',
      question: 'What functions do the questions and replies perform beyond requesting information?',
      matchingPairs: [
        { left: 'Did I not forbid you from this tree...?', right: 'recalls a prior warning and confronts the speakers with known information' },
        { left: 'Are you running away from Me?', right: 'tests the meaning of Adam’s immediate reaction' },
        { left: 'No, my Lord, but I am shy of You.', right: 'rejects one interpretation and replaces it with a more precise explanation' },
        { left: 'Forgiveness! Forgiveness!', right: 'compresses an urgent request into repeated direct speech' },
      ],
      correctAnswer: {
        'Did I not forbid you from this tree...?': 'recalls a prior warning and confronts the speakers with known information',
        'Are you running away from Me?': 'tests the meaning of Adam’s immediate reaction',
        'No, my Lord, but I am shy of You.': 'rejects one interpretation and replaces it with a more precise explanation',
        'Forgiveness! Forgiveness!': 'compresses an urgent request into repeated direct speech',
      },
      explanation: 'Questions in narrative dialogue can remind, challenge or clarify rather than merely seek unknown facts. The reply with “No ... but ...” explicitly corrects an interpretation.',
      feedback: {
        correct: 'Good. You interpreted the speech acts, not just the sentence forms.',
        incorrect: 'Consider what each speaker is trying to do: remind, test an interpretation, correct it, or urgently request something.',
      },
    },
    {
      id: 'adam-b2-language-8-source-boundaries',
      type: 'multiple-choice',
      title: 'Separate Textual Evidence from Interpretation',
      instructions: 'Choose the explanation that preserves the chapter’s source boundaries most accurately.',
      question: 'How do “This tree is not described in the Holy Qur’an”, “It is only mentioned that...”, “According to Islamic scholars...”, and “that is...” work together?',
      options: [
        'They distinguish what the Qur’an does not specify, what the text explicitly states, an interpretation attributed to scholars, and a clarification of that interpretation.',
        'They present every detail as an equally explicit Qur’anic statement.',
        'They show that the writer is uncertain whether any part of the incident appears in the Qur’an.',
      ],
      correctAnswer: 0,
      explanation: 'The paragraph carefully separates absence of specification, explicit textual content, attributed scholarly interpretation and clarification. B2 reading requires preserving those levels of certainty and source.',
      feedback: {
        correct: 'Correct. You preserved the difference between textual statement, omission, attribution and clarification.',
        incorrect: 'Look at who is responsible for each claim: the Qur’an, the chapter’s summary, or “Islamic scholars”.',
      },
    },
    {
      id: 'adam-b2-language-8-production',
      type: 'reflection',
      title: 'Write a Source-Aware Explanatory Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a historical, scientific or cultural claim you know from a source. Do not retell Chapter 8. State one detail the source explicitly gives, one detail it does not specify, and one interpretation attributed to a scholar/researcher using “according to...”. Add a clarification with “that is” or “in other words”. Include one question used to remind or challenge rather than simply request new information, then answer it with a correction pattern such as “No, ... but ...”.',
      question: 'Can you keep evidence, omission, attributed interpretation and clarification separate while still writing a coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response makes source responsibility visible, avoids turning interpretation into fact, and uses dialogue or rhetorical questioning for a clear discourse purpose.',
      feedback: {
        correct: 'Keep the evidence hierarchy clear: explicit source → unspecified detail → attributed interpretation → clarification.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Evidence — State exactly what the source says.', mode: 'Individual' },
        { question: 'Boundary — State one relevant detail the source does not specify.', mode: 'Individual' },
        { question: 'Attribution — Introduce an interpretation with “according to...”.', mode: 'Individual' },
        { question: 'Clarification — Use “that is” or “in other words” without changing the certainty of the original claim.', mode: 'Pair' },
      ],
    },
  ],
};
