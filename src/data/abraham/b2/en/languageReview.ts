import type { Exercise } from '../../../../types';

/**
 * Cumulative B2 language review for Abraham English.
 * Synthesizes grammar, discourse and stance work from Chapters 1–35.
 * Whole-story comprehension remains the role of Final Challenge.
 */
export const abrahamB2LanguageReviewExercises: Exercise[] = [
  {
    id: 'abraham-b2-language-review-1-source-qualification',
    type: 'matching',
    title: 'Source, Report and Historical Distance',
    instructions: 'Match each reporting frame with the degree of commitment it signals.',
    question: 'How can a B2 writer preserve the difference between direct attribution, cautious synthesis, report and uncertain tradition?',
    matchingPairs: [
      { left: 'According to X, ...', right: 'directly attributes a claim to a named source' },
      { left: 'Some sources suggest that ...', right: 'marks limited evidence and avoids presenting the claim as settled fact' },
      { left: 'It is believed that ...', right: 'presents a historical belief with distance from certainty' },
      { left: 'It is reported / said that ...', right: 'passes on a narration or circulating claim without full authorial commitment' },
    ],
    correctAnswer: {
      'According to X, ...': 'directly attributes a claim to a named source',
      'Some sources suggest that ...': 'marks limited evidence and avoids presenting the claim as settled fact',
      'It is believed that ...': 'presents a historical belief with distance from certainty',
      'It is reported / said that ...': 'passes on a narration or circulating claim without full authorial commitment',
    },
    explanation: 'Across the book, source frames protect the boundary between evidence, narration, belief and interpretation.',
    feedback: {
      correct: 'Correct. The degree of commitment matches the reporting frame.',
      incorrect: 'Ask whether the wording names a source, limits the evidence, reports a belief, or passes on a narration at a distance.',
    },
  },
  {
    id: 'abraham-b2-language-review-2-viewpoint-time',
    type: 'matching',
    title: 'Time Viewed from Different Points',
    instructions: 'Match each form with the temporal viewpoint it creates.',
    question: 'How do B2 writers position events relative to a past viewpoint?',
    matchingPairs: [
      { left: 'was going to leave', right: 'a future plan viewed from a point in the past' },
      { left: 'would later become', right: 'a later development presented from an earlier past viewpoint' },
      { left: 'had already changed', right: 'an event completed before another past event' },
      { left: 'was about to begin when ...', right: 'an imminent action interrupted or redirected by another event' },
    ],
    correctAnswer: {
      'was going to leave': 'a future plan viewed from a point in the past',
      'would later become': 'a later development presented from an earlier past viewpoint',
      'had already changed': 'an event completed before another past event',
      'was about to begin when ...': 'an imminent action interrupted or redirected by another event',
    },
    explanation: 'The chapters repeatedly use tense and aspect to show plans, later developments, completed background and turning points.',
    feedback: {
      correct: 'Correct. You identified the viewpoint created by each form.',
      incorrect: 'Separate future-from-the-past, earlier completed background, and an action that is just about to happen.',
    },
  },
  {
    id: 'abraham-b2-language-review-3-contrast-reframing',
    type: 'multiple-choice',
    title: 'Contrast Without Oversimplifying',
    instructions: 'Choose the sentence that acknowledges one point and then reframes it more precisely.',
    question: 'Which sentence best uses concession and corrective contrast?',
    options: [
      'Although the policy appears strict, its purpose is not simply to punish but to make expectations clearer.',
      'The policy is strict, and strict policies are strict because they are strict.',
      'The policy is either completely successful or completely useless.',
    ],
    correctAnswer: 0,
    explanation: 'Although concedes an appearance, while not simply ... but ... redirects the claim toward a more precise interpretation.',
    feedback: {
      correct: 'Correct. The sentence concedes, then refines the argument.',
      incorrect: 'Look for a sentence that accepts an initial impression but avoids an all-or-nothing conclusion.',
    },
  },
  {
    id: 'abraham-b2-language-review-4-cause-purpose-result',
    type: 'sequencing',
    title: 'Build a Cause–Purpose–Result Chain',
    instructions: 'Put the moves into the most coherent order for a short analytical paragraph.',
    question: 'How can a paragraph distinguish a problem, a purpose, an action and a result?',
    sequencingItems: [
      { id: '1', text: 'The original process created repeated delays.' },
      { id: '2', text: 'To reduce those delays, the team changed the order of the steps.' },
      { id: '3', text: 'They also added a final check so that mistakes could be caught earlier.' },
      { id: '4', text: 'As a result, the process became faster without removing the quality check.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'The sequence moves from cause/problem to purpose, action and a measured result.',
    feedback: {
      correct: 'Correct. The relationships are now explicit and coherent.',
      incorrect: 'Start with the problem, then state the purpose, describe the action, and finish with its result.',
    },
  },
  {
    id: 'abraham-b2-language-review-5-condition-consequence',
    type: 'multiple-choice',
    title: 'Condition, Possibility and Consequence',
    instructions: 'Choose the sentence in which the consequence matches the strength of the condition.',
    question: 'Which sentence is the most appropriately calibrated?',
    options: [
      'If the evidence remains incomplete, the conclusion should remain open to revision.',
      'If one detail is uncertain, the whole argument must be false.',
      'Unless every source agrees, all possible explanations are equally certain.',
    ],
    correctAnswer: 0,
    explanation: 'The first sentence links an incomplete condition to a proportionate, non-absolute consequence.',
    feedback: {
      correct: 'Correct. The strength of the consequence matches the condition.',
      incorrect: 'Avoid a conclusion that is stronger than the evidence or condition allows.',
    },
  },
  {
    id: 'abraham-b2-language-review-6-reference-cohesion',
    type: 'matching',
    title: 'Reference and Cohesion Across Sentences',
    instructions: 'Match each form with the cohesion job it performs.',
    question: 'How do B2 writers keep a longer paragraph connected without repeating every noun?',
    matchingPairs: [
      { left: 'the group who ...', right: 'adds defining information while keeping the same referent active' },
      { left: 'the place where ...', right: 'links a location to information about what happens there' },
      { left: 'this decision', right: 'refers back to a whole previous action or proposition' },
      { left: 'some ..., while others ...', right: 'organises parallel groups without overgeneralising them' },
    ],
    correctAnswer: {
      'the group who ...': 'adds defining information while keeping the same referent active',
      'the place where ...': 'links a location to information about what happens there',
      'this decision': 'refers back to a whole previous action or proposition',
      'some ..., while others ...': 'organises parallel groups without overgeneralising them',
    },
    explanation: 'Relative clauses, demonstrative reference and parallel group framing support coherence across longer stretches of discourse.',
    feedback: {
      correct: 'Correct. Each form has a different cohesion role.',
      incorrect: 'Decide whether the form defines a person/group, anchors a place, refers back to an earlier idea, or compares parallel groups.',
    },
  },
  {
    id: 'abraham-b2-language-review-7-evidence-interpretation',
    type: 'fill-blanks',
    title: 'Keep Evidence Separate from Interpretation',
    instructions: 'Complete the sentence with the phrase that marks interpretation rather than direct evidence.',
    question: 'Which wording keeps the writer from presenting an inference as a fact?',
    fillBlanksText: 'The pattern is clear in the data; however, it [blank] a change in behaviour rather than proving one by itself.',
    correctAnswer: 'can be interpreted as',
    explanation: '“Can be interpreted as” explicitly marks an inference. It does not turn the interpretation into direct evidence.',
    feedback: {
      correct: 'Correct. The wording preserves the evidence–interpretation boundary.',
      incorrect: 'Use a phrase that offers a possible reading without claiming that the evidence proves it directly.',
    },
  },
  {
    id: 'abraham-b2-language-review-8-transfer',
    type: 'reflection',
    title: 'B2 Transfer: Build a Qualified Analytical Paragraph',
    instructions: 'Write or present one coherent 8–10 sentence paragraph about a non-story issue such as a school policy, a historical claim, a technology debate, a sports decision or a social trend.',
    question: 'Can you combine the book’s language resources into one nuanced argument rather than a sequence of isolated grammar forms?',
    correctAnswer: null,
    explanation: 'The aim is cumulative transfer: source control, viewpoint, contrast, cause/purpose/result, condition, cohesion and evidence-aware interpretation.',
    feedback: {
      correct: 'Use the language resources as tools for precision, stance and coherence.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Attribute or qualify at least one claim using “According to...”, “Some sources suggest...”, “It is believed...” or an equivalent frame.', mode: 'Individual' },
      { question: 'Use one past-viewpoint form such as “would later...”, “was going to...” or a past perfect background form.', mode: 'Individual' },
      { question: 'Include one concession/corrective contrast and one clear cause–purpose–result relationship.', mode: 'Pair' },
      { question: 'End with a conclusion whose certainty and scope do not exceed the evidence you presented.', mode: 'Pair' },
    ],
  },
];
