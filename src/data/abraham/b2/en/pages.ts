import type { Exercise, PageData } from '../../../../types';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2FinalReviewExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './exercises';
import { abrahamB2LanguageFocusPart1 } from './languageFocus';
import { abrahamB2LanguageFocusPart2 } from './languageFocus2';
import { abrahamB2LanguageFocusPart3 } from './languageFocus3';

const rawAbrahamB2Pages: PageData[] = [
// c01a
//__C01__
// c01b
// c02a
//__C02__
// c02b
// c03a
//__C03__
// c03b
// c04a
//__C04__
// c04b
// c05a
//__C05__
// c05b
// c06a
//__C06__
// c06b
// c07a
//__C07__
// c07b
// c08a
//__C08__
// c08b
// c09a
//__C09__
// c09b
// c10a
//__C10__
// c10b
// c11a
//__C11__
// c11b
];

export type AbrahamB2VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): AbrahamB2VocabSeed => [en, ar, enDefinition, arDefinition];
export const abrahamB2CanonicalVocabulary: Record<number, readonly AbrahamB2VocabSeed[]> = {
// k01a
//__K01__
// k01b
// k02a
//__K02__
// k02b
// k03a
//__K03__
// k03b
// k04a
//__K04__
// k04b
};

// t01a
const abrahamB2LanguageReviewExercises: Exercise[] = [
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

const englishFinalFeedback = {
  correct: 'Correct. Your answer is supported by the story as a whole.',
  incorrect: 'Not yet. Compare the relevant chapters and try again.',
};
const englishFinalOverrides: Record<string, Exercise> = {
  'ab-b2-f4': { id: 'ab-b2-f4', type: 'true-false', title: 'Final Challenge', instructions: 'Decide whether the claim is supported by the story.', question: 'Chapter 33 distinguishes animal sacrifice as an earlier prophetic practice from the human sacrifice it attributes to idolaters.', correctAnswer: true, explanation: 'The chapter says prophets before Abraham also offered animal sacrifices and contrasts this with human sacrifice attributed to idolaters.', feedback: englishFinalFeedback },
  'ab-b2-f6': { id: 'ab-b2-f6', type: 'matching', title: 'Final Challenge', instructions: 'Match each setting with the analytical change it creates.', question: 'How does setting sharpen Abraham’s argument across different stages of the story?', correctAnswer: {}, matchingPairs: [ { left: 'His father worships, makes, and sells idols', right: 'the disagreement combines belief with family and livelihood' }, { left: 'The festival leaves the temple empty with food before silent statues', right: 'the setting enables a practical test of the idols’ claimed agency' }, { left: 'Nimrod claims power over life and death from a royal position', right: 'the debate shifts from political control to a cosmic order the ruler cannot command' } ], explanation: 'The three settings change what can be tested: family authority, idol agency, and the limits of political power.', feedback: englishFinalFeedback },
  'ab-b2-f7': { id: 'ab-b2-f7', type: 'matching', title: 'Final Challenge', instructions: 'Match each family or place connection with the later legacy described in the narrative.', question: 'How does the story extend Abraham’s legacy beyond one person and one location?', correctAnswer: {}, matchingPairs: [ { left: 'Ishmael’s line', right: 'Mecca/Hijaz and the line connected with Prophet Muhammad in the narrative' }, { left: 'Isaac’s line', right: 'the line connected with Jacob and later prophets in the narrative' }, { left: 'The restored Ka‘ba', right: 'a continuing place of worship and pilgrimage presented for people beyond one family branch' } ], explanation: 'The ending combines family lines with a transregional place of worship, so the legacy is both genealogical and geographic.', feedback: englishFinalFeedback },
  'ab-b2-f8': { id: 'ab-b2-f8', type: 'fill-blanks', title: 'Final Challenge', instructions: 'Complete the cross-chapter synthesis with the best analytical word.', question: 'Complete the contrast across the idol and Nimrod debates.', fillBlanksText: 'Abraham repeatedly moves the argument away from inherited or political [blank] and toward evidence that can be examined.', correctAnswer: 'authority', explanation: 'The idolaters appeal to inherited practice and Nimrod relies on royal power; Abraham repeatedly redirects the argument toward observable or testable evidence.', feedback: englishFinalFeedback },
  'ab-b2-f9': { id: 'ab-b2-f9', type: 'fill-blanks', title: 'Final Challenge', instructions: 'Complete the whole-story synthesis with the best concept.', question: 'Complete the synthesis of the closing family chapters.', fillBlanksText: 'From sacrifice to building and pilgrimage, the closing chapters turn family submission into a continuing [blank].', correctAnswer: 'legacy', explanation: 'The final chapters connect submission, the Ka‘ba, pilgrimage, descendants, and continuing guidance into a lasting legacy.', feedback: englishFinalFeedback },
};
const englishFinalChallenge: Exercise[] = abrahamB2FinalChallengeExercises.map(exercise => englishFinalOverrides[exercise.id] ?? exercise);
// t01b
// t02a
//__T02__
// t02b