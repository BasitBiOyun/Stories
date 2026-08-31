import type { Exercise } from '../../../../types';

const feedback = {
  correct: 'Correct. Your choice fits the discourse function and meaning practised across the book.',
  incorrect: 'Not yet. Reconsider the relationship between form, meaning, and discourse purpose, then try again.',
};

const mc = (id: string, title: string, question: string, options: string[], correctAnswer: number, explanation: string): Exercise => ({
  id, type: 'multiple-choice', title, instructions: 'Choose the option that best preserves the intended B2 meaning.', question, options, correctAnswer, explanation, feedback,
});
const fill = (id: string, title: string, question: string, text: string, correctAnswer: string, explanation: string): Exercise => ({
  id, type: 'fill-blanks', title, instructions: 'Complete the sentence with the language that best expresses the relationship.', question, fillBlanksText: text, correctAnswer, explanation, feedback,
});
const matching = (id: string, title: string, question: string, pairs: { left: string; right: string }[], explanation: string): Exercise => ({
  id, type: 'matching', title, instructions: 'Match each form with the discourse function it performs.', question, matchingPairs: pairs, correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])), explanation, feedback,
});
const sequencing = (id: string, title: string, question: string, items: { id: string; text: string }[], explanation: string): Exercise => ({
  id, type: 'sequencing', title, instructions: 'Order the moves so the paragraph develops as a coherent B2 explanation.', question, sequencingItems: items, correctAnswer: items.map(item => item.id), explanation, feedback,
});

export const mosesB2LanguageReviewExercises: Exercise[] = [
  matching('mo-b2-lr1', 'Language Review 1 — Degrees of Certainty', 'Match each expression with the stance it communicates.', [
    { left: 'According to the sources…', right: 'attributes information rather than presenting it as the writer’s unqualified fact' },
    { left: 'It is possible that…', right: 'opens a cautious possibility' },
    { left: 'probably…', right: 'marks a likely conclusion that is not certain' },
    { left: 'the exact date is unknown', right: 'states a clear limit on what can be claimed' },
  ], 'Across the historical chapters, source attribution, possibility, probability, and explicit uncertainty prevent overclaiming.'),

  matching('mo-b2-lr2', 'Language Review 2 — Cause, Purpose, and Result', 'Match each connector with the relationship it builds.', [
    { left: 'because…', right: 'gives a cause or reason' },
    { left: 'to prevent…', right: 'states the purpose of an action' },
    { left: 'so that…', right: 'expresses an intended result or purpose' },
    { left: 'as a result / thus…', right: 'presents a consequence or synthesized result' },
  ], 'B2 explanation depends on selecting connectors according to the relationship between ideas, not treating them as interchangeable linking words.'),

  mc('mo-b2-lr3', 'Language Review 3 — Focus and Information Structure', 'Why is a passive form such as “he was placed in a basket” useful in this narrative?', [
    'It keeps Moses and what happens to him in focus when the actor is not the main point.',
    'It proves that no one performed the action.',
    'It makes the event less important than the actor.',
  ], 0, 'Passive voice can shift attention toward the affected person or event without claiming that an action had no agent.'),

  fill('mo-b2-lr4', 'Language Review 4 — Multi-Cause Explanation', 'Complete the structure that prevents a one-cause explanation.', 'Pharaoh’s authority depended not only on control of resources, [blank] also on control of manpower and people.', 'but', '“Not only … but also …” adds a second factor and helps construct a more qualified, multi-cause analysis.'),

  matching('mo-b2-lr5', 'Language Review 5 — Contrast, Concession, and Correction', 'Match each form with what it does.', [
    { left: 'unlike…', right: 'contrasts two people or positions directly' },
    { left: 'however…', right: 'signals a turn that qualifies or opposes the previous statement' },
    { left: 'despite the fact that…', right: 'acknowledges a fact before presenting a contrasting outcome' },
    { left: 'rather…', right: 'rejects one interpretation and replaces it with a more accurate one' },
    { left: 'not merely … but…', right: 'reframes something as broader or more significant than the first description' },
  ], 'These forms help a B2 writer manage competing interpretations instead of simply adding sentences one after another.'),

  matching('mo-b2-lr6', 'Language Review 6 — Conditions, Threats, and Commitments', 'Match the pattern with its communicative function.', [
    { left: 'If you accept another god, I will…', right: 'sets a condition and a threatened consequence' },
    { left: 'What if I bring you something convincing?', right: 'opens a hypothetical challenge to the other speaker’s position' },
    { left: 'when you fear for him, then…', right: 'links a future condition/time point to an instructed response' },
    { left: 'I will never again…', right: 'turns reflection or repentance into a future commitment' },
  ], 'Modality and condition structures express more than time: they can threaten, challenge, instruct, reassure, or commit.'),

  sequencing('mo-b2-lr7', 'Language Review 7 — Build an Analytical Paragraph', 'Put the language moves into a coherent order.', [
    { id: 'a', text: 'According to the account, a ruler presents material provision as evidence of legitimate authority.' },
    { id: 'b', text: 'However, the same narrative also provides evidence of coercion and restricted freedom.' },
    { id: 'c', text: 'For this reason, material provision alone cannot explain whether the authority is just.' },
    { id: 'd', text: 'A stronger interpretation must therefore compare the ruler’s claims with the consequences of his actions.' },
  ], 'The sequence models B2 synthesis: source framing → counter-evidence → reasoned qualification → analytical conclusion.'),

  {
    id: 'mo-b2-lr8',
    type: 'reflection',
    title: 'Language Review 8 — B2 Synthesis',
    instructions: 'Write an 8–10 sentence analytical paragraph. This is language practice, not a story quiz.',
    question: 'Explain how a powerful public claim can be tested against evidence. Use at least one qualification phrase, one cause/result link, one concession or correction, and one sentence that distinguishes evidence from interpretation.',
    correctAnswer: null,
    explanation: 'A strong response selects language for stance, evidence, causality, contrast, and synthesis rather than relying on isolated grammar forms.',
    feedback,
    discussionPrompts: [
      { question: 'Write 8–10 connected sentences using “according to…”, a cautious marker such as “probably/it is possible”, a cause/result connector, and a contrast or correction form. End by stating what the evidence supports and what remains interpretation.', mode: 'Individual' },
    ],
  },
];
