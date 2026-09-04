import type { Exercise } from '../../../../types';

/**
 * Cumulative B2 language review for Adam English.
 * This page consolidates grammar/discourse/function work from Chapters 1–17.
 * Whole-story comprehension remains in Final Challenge.
 */
export const adamB2LanguageReviewExercises: Exercise[] = [
  {
    id: 'adam-b2-language-review-1-source-certainty',
    type: 'matching',
    title: 'Source, Distance and Certainty',
    instructions: 'Match each reporting frame with the degree of commitment it normally signals.',
    question: 'How can a B2 writer preserve the difference between direct attribution, report, tradition and source limitation?',
    matchingPairs: [
      { left: 'X states that ...', right: 'direct attribution to a named source' },
      { left: 'It is reported that ...', right: 'information presented with reporting distance' },
      { left: 'It is said that ...', right: 'a less firmly anchored traditional or circulating claim' },
      { left: 'The source does not identify ...', right: 'an explicit limit on what can safely be claimed' },
    ],
    correctAnswer: {
      'X states that ...': 'direct attribution to a named source',
      'It is reported that ...': 'information presented with reporting distance',
      'It is said that ...': 'a less firmly anchored traditional or circulating claim',
      'The source does not identify ...': 'an explicit limit on what can safely be claimed',
    },
    explanation: 'Across the book, reporting frames control certainty and prevent interpretation from becoming unqualified fact.',
    feedback: {
      correct: 'Correct. You preserved the source boundary.',
      incorrect: 'Ask whether the wording names a source directly, reports at a distance, marks a circulating claim, or limits what is known.',
    },
  },
  {
    id: 'adam-b2-language-review-2-concession-reframing',
    type: 'multiple-choice',
    title: 'Concede, Then Reframe',
    instructions: 'Choose the sentence that acknowledges one point but redirects the argument without cancelling it.',
    question: 'Which sentence uses concession and reframing most effectively?',
    options: [
      'Although the plan looks efficient, its real strength lies not in speed but in the way it reduces errors.',
      'The plan looks efficient because it is efficient and therefore it is efficient.',
      'The plan is not efficient, and there is nothing else to consider.',
    ],
    correctAnswer: 0,
    explanation: 'Although concedes an apparent strength, while not ... but ... redirects attention to the writer’s main criterion.',
    feedback: {
      correct: 'Correct. The sentence concedes before it reframes.',
      incorrect: 'Look for a sentence that accepts one point first and then shifts the focus to a more important one.',
    },
  },
  {
    id: 'adam-b2-language-review-3-scope-exception',
    type: 'matching',
    title: 'Control the Scope of a Claim',
    instructions: 'Match each form with the way it narrows or qualifies a statement.',
    question: 'How do B2 writers stop broad claims from becoming absolute?',
    matchingPairs: [
      { left: 'except', right: 'removes one case from a wider set' },
      { left: 'may seem', right: 'marks an appearance rather than a settled fact' },
      { left: 'can be understood as', right: 'offers an interpretation without presenting it as the only possible reading' },
      { left: 'in fact', right: 'clarifies or corrects an earlier impression' },
    ],
    correctAnswer: {
      except: 'removes one case from a wider set',
      'may seem': 'marks an appearance rather than a settled fact',
      'can be understood as': 'offers an interpretation without presenting it as the only possible reading',
      'in fact': 'clarifies or corrects an earlier impression',
    },
    explanation: 'The chapters repeatedly distinguish appearance, interpretation, exception and clarification.',
    feedback: {
      correct: 'Correct.',
      incorrect: 'Decide whether each form narrows a set, weakens certainty, offers an interpretation, or corrects an impression.',
    },
  },
  {
    id: 'adam-b2-language-review-4-cause-appearance',
    type: 'fill-blanks',
    title: 'Appearance Is Not Cause',
    instructions: 'Complete the sentence with the relative form that identifies the real cause.',
    question: 'Which word makes the cause-focused structure complete?',
    fillBlanksText: 'It is repeated exposure [blank] makes the claim look more convincing than the evidence actually allows.',
    correctAnswer: 'that',
    explanation: 'The cleft structure “It is X that ...” highlights the real cause while keeping appearance separate from reality.',
    feedback: {
      correct: 'Correct. The cleft gives the cause special focus.',
      incorrect: 'Use the form in “It is X that makes Y look ...”.',
    },
  },
  {
    id: 'adam-b2-language-review-5-viewpoint-modality',
    type: 'matching',
    title: 'Viewpoint, Obligation and Possibility',
    instructions: 'Match each pattern with the viewpoint or stance it expresses.',
    question: 'How do tense and modality shape a writer’s position?',
    matchingPairs: [
      { left: 'would later become', right: 'future seen from a past viewpoint' },
      { left: 'had to respond', right: 'necessity located in the past' },
      { left: 'could be interpreted as', right: 'possible interpretation rather than certainty' },
      { left: 'must distinguish', right: 'strong present obligation in the argument' },
    ],
    correctAnswer: {
      'would later become': 'future seen from a past viewpoint',
      'had to respond': 'necessity located in the past',
      'could be interpreted as': 'possible interpretation rather than certainty',
      'must distinguish': 'strong present obligation in the argument',
    },
    explanation: 'B2 grammar helps position events in time and calibrate necessity, possibility and commitment.',
    feedback: {
      correct: 'Correct.',
      incorrect: 'Separate time viewpoint from past necessity, interpretive possibility and present obligation.',
    },
  },
  {
    id: 'adam-b2-language-review-6-discourse-chain',
    type: 'sequencing',
    title: 'Build a Coherent Reasoning Chain',
    instructions: 'Put the moves into the most coherent order for a short analytical paragraph.',
    question: 'How can a B2 paragraph move from an initial impression to a qualified conclusion?',
    sequencingItems: [
      { id: '1', text: 'At first, the change may seem to solve the problem.' },
      { id: '2', text: 'However, the available evidence is limited.' },
      { id: '3', text: 'Because the sample is small, the result could have another explanation.' },
      { id: '4', text: 'Therefore, the change can be described as promising rather than proven.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'The sequence moves from appearance to contrast, then cause and finally a qualified synthesis.',
    feedback: {
      correct: 'Correct. The paragraph now has a clear discourse logic.',
      incorrect: 'Start with the first impression, introduce the limitation, explain why it matters, then qualify the conclusion.',
    },
  },
  {
    id: 'adam-b2-language-review-7-condition-consequence',
    type: 'multiple-choice',
    title: 'Condition and Consequence',
    instructions: 'Choose the version that expresses a real condition and a clear consequence without overclaiming.',
    question: 'Which sentence best controls the relationship between condition and result?',
    options: [
      'If the evidence remains incomplete, the conclusion should remain provisional.',
      'The evidence is incomplete, so the conclusion is certainly false.',
      'Unless evidence exists, every possible explanation becomes equally true.',
    ],
    correctAnswer: 0,
    explanation: 'The first sentence links a condition to an appropriately calibrated consequence.',
    feedback: {
      correct: 'Correct. The consequence matches the strength of the condition.',
      incorrect: 'Avoid a result that is stronger than the condition or evidence supports.',
    },
  },
  {
    id: 'adam-b2-language-review-8-transfer',
    type: 'reflection',
    title: 'B2 Transfer: Build a Qualified Argument',
    instructions: 'Write one coherent 8–10 sentence B2 paragraph about a non-story issue such as a school rule, a technology claim, a sports debate or a social trend.',
    question: 'Write an 8–10 sentence paragraph that uses the book’s language resources to build a nuanced argument rather than simply state an opinion.',
    correctAnswer: null,
    explanation: 'The aim is cumulative written transfer: source control, concession, stance, cause, condition, cohesion and a qualified conclusion.',
    feedback: {
      correct: 'Use the language features as tools for meaning and coherence.',
      incorrect: '',
    },
    discussionPrompts: [
      { question: 'Attribute at least one claim: “According to ... / X states that ... / It is reported that ...”', mode: 'Individual' },
      { question: 'Include one genuine concession and reframing move: “Although ..., ... not ... but ...”', mode: 'Individual' },
      { question: 'Distinguish appearance from cause using “may seem”, “in fact”, or “It is X that ...”.', mode: 'Pair' },
      { question: 'Use one condition-consequence sentence and end with a conclusion whose certainty matches the evidence.', mode: 'Pair' },
    ],
  },
];
