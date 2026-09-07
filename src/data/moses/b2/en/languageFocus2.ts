import type { Exercise } from '../../../../types';

const feedback = {
  correct: 'Correct. Your answer fits the language and meaning of this chapter.',
  incorrect: 'Not yet. Return to the chapter, notice how the form builds meaning, and try again.',
};

const mc = (id: string, title: string, question: string, options: string[], correctAnswer: number, explanation: string): Exercise => ({
  id, type: 'multiple-choice', title, instructions: 'Choose the option that best preserves the chapter’s language and meaning.', question, options, correctAnswer, explanation, feedback,
});

const fill = (id: string, title: string, question: string, text: string, correctAnswer: string, explanation: string): Exercise => ({
  id, type: 'fill-blanks', title, instructions: 'Complete the sentence with the chapter language that best fits the relationship.', question, fillBlanksText: text, correctAnswer, explanation, feedback,
});

const matching = (id: string, title: string, question: string, pairs: { left: string; right: string }[], explanation: string): Exercise => ({
  id, type: 'matching', title, instructions: 'Match each form with the function it performs in this chapter.', question, matchingPairs: pairs, correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])), explanation, feedback,
});

const sequencing = (id: string, title: string, question: string, items: { id: string; text: string }[], explanation: string): Exercise => ({
  id, type: 'sequencing', title, instructions: 'Order the language moves so the reasoning develops coherently.', question, sequencingItems: items, correctAnswer: items.map(item => item.id), explanation, feedback,
});

const reflection = (id: string, title: string, prompts: string[], explanation: string): Exercise => ({
  id, type: 'reflection', title, instructions: 'Produce a short response using the target language naturally and accurately.', question: prompts[0], correctAnswer: null, explanation, feedback,
  discussionPrompts: prompts.map(question => ({ question, mode: 'Individual' })),
});

export const mosesB2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  7: [
    matching('mo-b2-lf7-a', 'Persuasion Inside Direct Speech', 'What persuasive function does each expression perform?', [
      { left: 'this baby would be a ray of light for both of them', right: 'frames the child as a shared source of hope' },
      { left: 'Let me keep the baby', right: 'asks for permission or acceptance of a proposal' },
      { left: 'let him be our son', right: 'proposes a future role for the child' },
    ], 'Asiye does not merely state an opinion; she uses hopeful framing and “let” structures to persuade Pharaoh.'),
    fill('mo-b2-lf7-b', 'Contrast in Character', 'Complete the contrast.', 'The queen was good and kind-hearted and, [blank] her husband, held a belief in Allah.', 'unlike', '“Unlike” makes the contrast between Asiye and Pharaoh explicit.'),
    reflection('mo-b2-lf7-c', 'A Persuasive Proposal', [
      'Write a short persuasive proposal using “Let me…”, “let … be…”, and one sentence explaining why the proposal could benefit both sides.',
    ], 'The task transfers the chapter’s persuasion pattern to a new context without retelling the event.'),
  ],
  8: [
    mc('mo-b2-lf8-a', 'Timeline: Not Yet', 'What does “He had not yet been given the prophetic mission” tell the reader?', [
      'The inner conflict happens before the prophetic mission begins.',
      'The prophetic mission had already ended.',
      'The mission and the palace conflict happen at exactly the same time.',
    ], 0, '“Had not yet been given” places the mission after the young-man period being described.'),
    matching('mo-b2-lf8-b', 'Two Competing Positions', 'Match each pattern with what it expresses.', [
      { left: 'whether he should be thankful to Pharaoh', right: 'one side of an unresolved moral choice' },
      { left: 'or oppose the oppression', right: 'the competing side of that choice' },
      { left: 'Because of these gifts…', right: 'links Moses’s abilities with others looking to him for justice' },
    ], 'The chapter uses “whether … or …” to represent an unresolved choice and then gives a causal link through “because of”.'),
    reflection('mo-b2-lf8-c', 'Writing an Inner Conflict', [
      'Write 5–6 sentences about a person facing two competing duties. Use “had not yet…”, “whether … or …”, and one cause/result link.',
    ], 'The production task uses timeline and alternative-choice language to build a coherent B2 dilemma.'),
  ],
  9: [
    matching('mo-b2-lf9-a', 'Intention, Result, Interpretation', 'Keep the three layers separate.', [
      { left: 'Moses got involved in the dispute', right: 'describes the intentional intervention' },
      { left: 'the Egyptian instantly died', right: 'states the consequence' },
      { left: 'He unintentionally killed the Copt', right: 'qualifies the consequence by clarifying intention' },
    ], 'The chapter does not treat intention and outcome as identical; “unintentionally” is essential to the account.'),
    sequencing('mo-b2-lf9-b', 'How the Danger Escalates', 'Order the information chain.', [
      { id: 'a', text: 'The accidental death occurs.' },
      { id: 'b', text: 'The same Israelite becomes involved in another dispute.' },
      { id: 'c', text: 'His shout reveals what happened the previous day.' },
      { id: 'd', text: 'News spreads and the legal danger becomes immediate.' },
      { id: 'e', text: 'A man from the palace warns Moses to leave.' },
    ], 'The chapter builds danger through a chain of consequence, disclosure, spread of information, and warning.'),
    reflection('mo-b2-lf9-c', 'Qualified Responsibility', [
      'Write a 5-sentence claim-evidence explanation showing how a harmful consequence can be serious even when it was unintended. Use “although” or “even though” once.',
    ], 'The task practises qualification: intention matters, but it does not erase the consequences described by the narrative.'),
  ],
  10: [
    matching('mo-b2-lf10-a', 'Repentance as Language of Change', 'Match each quoted move with its function.', [
      { left: 'I have wronged myself, so forgive me', right: 'acknowledges responsibility and asks forgiveness' },
      { left: 'Then He forgave him', right: 'states the response that follows the request' },
      { left: 'I will never more be a helper for the criminals', right: 'turns repentance into a commitment about future conduct' },
    ], 'The sequence moves from acknowledging wrong to forgiveness and then to a future ethical commitment.'),
    fill('mo-b2-lf10-b', 'Future Commitment', 'Complete the strength of the commitment.', 'I will [blank] more be a helper for the criminals.', 'never', '“Never” gives the future commitment its categorical force in the quoted passage.'),
    reflection('mo-b2-lf10-c', 'Past Action → Future Principle', [
      'Write 4–6 sentences about learning from a mistake. Move from what happened, to acknowledgement, to a future commitment using “will not” or “will never”.',
    ], 'A coherent B2 response should show how reflection on a past event changes future conduct.'),
  ],
  11: [
    matching('mo-b2-lf11-a', 'Escape and Survival Relations', 'Match each form with the relation it creates.', [
      { left: 'so escape', right: 'presents the advised action as the response to immediate danger' },
      { left: 'However, fearing pursuit…', right: 'contrasts physical hardship with the need to continue' },
      { left: 'His only companion … was Allah and his trust in Him', right: 'uses exclusivity to emphasize what supported him in isolation' },
      { left: 'by night … during the day', right: 'contrasts two repeated travel strategies' },
    ], 'The chapter coordinates advice, contrast, exclusivity, and repeated time patterns to describe survival.'),
    sequencing('mo-b2-lf11-b', 'A Strategic Escape', 'Build the travel strategy in order.', [
      { id: 'a', text: 'Moses receives a direct warning that the chiefs plan to kill him.' },
      { id: 'b', text: 'He leaves Egypt without normal travel preparation.' },
      { id: 'c', text: 'He heads toward an inhabited region outside Pharaoh’s rule.' },
      { id: 'd', text: 'He travels by night and hides during the day.' },
      { id: 'e', text: 'He eventually reaches a watering place outside Midian.' },
    ], 'The language of the chapter presents trust and practical decision-making together.'),
    fill('mo-b2-lf11-c', 'Contrast Under Pressure', 'Complete the connector.', 'The hot sand burned his soles. [blank], fearing pursuit, he forced himself to continue.', 'However', '“However” marks the contrast between intense physical difficulty and continued movement.'),
  ],
  12: [
    matching('mo-b2-lf12-a', 'Cause, Limitation, Sequence', 'Match the structure with the relationship it expresses.', [
      { left: 'Due to the crowd at the water source…', right: 'introduces the cause of the women’s difficulty' },
      { left: 'could only water … after…', right: 'sets a limitation and the condition for later action' },
      { left: 'his health is too poor and he cannot go out', right: 'links degree with inability' },
    ], 'The chapter uses several ways of explaining why an action cannot happen freely or immediately.'),
    fill('mo-b2-lf12-b', 'Only After', 'Complete the sequence constraint.', 'The young women could only water their animals [blank] the male shepherds had taken their flocks away.', 'after', '“Only … after” makes the timing restriction central to the sentence.'),
    reflection('mo-b2-lf12-c', 'Service Despite Need', [
      'Explain in 5–6 sentences why “Forgetting his thirst” matters in the paragraph. Use one cause phrase, one limitation with “could only”, and one sentence of interpretation.',
    ], 'The phrase foregrounds Moses’s own need and helps the reader interpret the priority he gives to helping others.'),
  ],
};
