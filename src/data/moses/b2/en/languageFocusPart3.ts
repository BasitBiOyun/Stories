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

export const mosesB2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  13: [
    matching('mo-b2-lf13-a', 'From Help to Invitation', 'Match each phrase with its role.', [
      { left: 'Due to Moses’s help…', right: 'gives the reason the women return early' },
      { left: 'which surprised their father', right: 'adds a reaction to the unexpectedly early return' },
      { left: 'so that he may thank you in person', right: 'states the purpose of the invitation' },
      { left: 'After introducing himself…', right: 'organizes one action before the next disclosure' },
    ], 'The paragraph links cause, reaction, purpose, and sequence into one coherent movement.'),
    fill('mo-b2-lf13-b', 'Purpose of an Invitation', 'Complete the purpose clause.', 'Our father invites you to our home [blank] he may thank you in person.', 'so that', '“So that” makes the intended purpose of the invitation explicit.'),
    reflection('mo-b2-lf13-c', 'Evidence and Interpretation', [
      'The chapter says, “It was clear to Moses that they enjoyed a comfortable and harmonious home life.” Write 4–5 sentences distinguishing what Moses directly observes from the interpretation he forms.',
    ], 'B2 reading should distinguish narrated evidence from the character’s interpretation of that evidence.'),
  ],
  14: [
    matching('mo-b2-lf14-a', 'Verb Patterns Around Work', 'Match each pattern with its use in the chapter.', [
      { left: 'advised her father to employ Moses', right: 'advice + person + to-infinitive' },
      { left: 'They offered Moses work', right: 'offer + person + noun opportunity' },
      { left: 'Moses became a shepherd', right: 'change into a new role or state' },
      { left: 'looked after the old man’s animals', right: 'describes continuing responsibility' },
    ], 'The chapter uses different verb patterns to move from evaluation to employment and long-term responsibility.'),
    mc('mo-b2-lf14-b', 'Reason, Not Coincidence', 'Which sentence best captures why the offer suited Moses?', [
      'It suited him because he was a stranger who urgently needed shelter and work.',
      'It suited him although he already ruled Midian.',
      'It suited him because Pharaoh had ordered the employment.',
    ], 0, 'The chapter explicitly gives his situation as the reason the offer fits his needs.'),
    sequencing('mo-b2-lf14-c', 'Long-Term Formation', 'Order the developments in Midian.', [
      { id: 'a', text: 'The family sees Moses as reliable and strong.' },
      { id: 'b', text: 'He is offered work and a place in the household.' },
      { id: 'c', text: 'He becomes a shepherd and marries one of the daughters.' },
      { id: 'd', text: 'He spends ten years in a quieter life of responsibility and reflection.' },
      { id: 'e', text: 'The chapter interprets this period as spiritual preparation for prophethood.' },
    ], 'The period is not presented as narrative empty time; the language gives it a formative function.'),
    reflection('mo-b2-lf14-d', 'Preparation or Delay?', [
      'Write 6–7 sentences explaining why the text calls the ten years “spiritual preparation” rather than simply “a delay”. Use at least two pieces of chapter evidence and one qualifying phrase such as “the chapter presents…”.',
    ], 'B2 interpretation should be explicitly tied to textual evidence and framed as the text’s interpretation.'),
  ],
  15: [
    matching('mo-b2-lf15-a', 'Purpose Before the Turning Point', 'Match the language with Moses’s practical purpose.', [
      { left: 'hoping to bring his family some fire', right: 'seeking warmth' },
      { left: 'and find a guide by the fire', right: 'seeking direction after losing the way' },
      { left: 'what is in your right hand?', right: 'focuses attention on an ordinary object before its transformation' },
    ], 'The chapter first establishes ordinary practical purposes and an ordinary staff, which makes the later transformation more meaningful.'),
    fill('mo-b2-lf15-b', 'Purpose with -ing', 'Complete the purpose-oriented participial phrase.', 'Moses approached the fire, [blank] to bring his family warmth and find guidance.', 'hoping', '“Hoping to…” expresses the expectation or purpose accompanying his movement toward the fire.'),
    reflection('mo-b2-lf15-c', 'Ordinary → Extraordinary', [
      'Write 5 sentences describing how the chapter moves from the ordinary uses of the staff to its extraordinary role. Use “at first”, “then”, and one relative clause with “which” or “on which”.',
    ], 'The task practises discourse movement from familiar description to a transformed meaning.'),
  ],
  16: [
    matching('mo-b2-lf16-a', 'Cause, Command, Purpose', 'Match each structure with its function.', [
      { left: 'because he realized that he was witnessing the Truth', right: 'explains why fear changes into peace' },
      { left: 'Allah commanded him to put his hand…', right: 'reports a command with object + to-infinitive' },
      { left: 'go to Pharaoh and his chiefs', right: 'expresses the mission as a direct command' },
      { left: 'that We may show you some of Our greater signs', right: 'states purpose' },
    ], 'The chapter links inner change, divine instruction, and prophetic purpose through distinct grammatical relations.'),
    sequencing('mo-b2-lf16-b', 'From Fear to Mission', 'Order the language moves.', [
      { id: 'a', text: 'The snake becomes the staff again.' },
      { id: 'b', text: 'Moses’s fear calms because he recognizes the Truth.' },
      { id: 'c', text: 'The shining hand becomes another sign.' },
      { id: 'd', text: 'The two signs are named together.' },
      { id: 'e', text: 'Moses is commanded to go to Pharaoh and his chiefs.' },
    ], 'The chapter moves from reassurance to evidence and then from evidence to responsibility.'),
    reflection('mo-b2-lf16-c', 'Evidence Creates Responsibility', [
      'Write 5–7 sentences explaining how receiving the two signs changes Moses’s situation. Include one cause clause, one reported command, and one purpose clause.',
    ], 'The B2 target is to integrate grammar with the chapter’s meaning: signs are followed by a public responsibility.'),
  ],
  17: [
    matching('mo-b2-lf17-a', 'Warning and Consequence', 'Match each form with its effect.', [
      { left: 'Therefore…', right: 'draws a consequence from the preceding statement' },
      { left: 'do not let him … turn you away', right: 'expresses a warning against influence' },
      { left: 'lest you fall', right: 'states the feared consequence to be avoided' },
      { left: 'one of the descendants of Abraham', right: 'expresses lineage and continuity' },
    ], 'The chapter combines warning language with genealogy, so it moves between moral consequence and historical continuity.'),
    fill('mo-b2-lf17-b', 'Consequence Connector', 'Complete the transition.', '[blank], do not let him who denies it turn you away from it.', 'Therefore', '“Therefore” signals that the warning follows from the importance of the preceding claim.'),
    reflection('mo-b2-lf17-c', 'Explaining Continuity', [
      'Write 5 sentences explaining the chapter’s claim of prophetic continuity from Abraham through Jacob to Moses. Use one relative clause and one consequence connector.',
    ], 'The task asks learners to build a connected explanation rather than list family names.'),
  ],
  18: [
    matching('mo-b2-lf18-a', 'Questions as Power Moves', 'What does each question do in the dialogue?', [
      { left: 'What do you want?', right: 'demands that Moses state his request directly' },
      { left: 'Why should I send them, as they are my slaves?', right: 'challenges the request through a claim of ownership' },
      { left: 'Didn’t he know that Pharaoh was a god?', right: 'presents Pharaoh’s claim as if it should already be accepted' },
      { left: 'Aren’t you that Moses whom we took from the Nile…?', right: 'uses shared past and upbringing to pressure Moses' },
    ], 'The questions are not neutral information questions; they perform challenge, pressure, and self-justification.'),
    fill('mo-b2-lf18-b', 'Permission and Release', 'Complete the institutional relationship.', 'Moses asked Pharaoh for [blank] to take the Israelites into the desert.', 'permission', 'The noun “permission” shows that Pharaoh claims political control over the people’s movement.'),
    mc('mo-b2-lf18-c', 'Ownership vs Lordship', 'Which contrast is built directly into the exchange?', [
      'Pharaoh calls the Israelites his slaves, while Moses states that their Lord is Allah.',
      'Both speakers agree that Pharaoh owns every person absolutely.',
      'Moses asks Pharaoh to become the Lord of the Israelites.',
    ], 0, 'The dialogue places Pharaoh’s claim of human ownership against Moses’s statement of divine lordship.'),
    reflection('mo-b2-lf18-d', 'Rhetorical Question Analysis', [
      'Choose two questions from the chapter and explain in 5–6 sentences how each question tries to control the dialogue. Use “whereas” or “while” to compare their functions.',
    ], 'B2 analysis should identify what questions do rhetorically, not only what information they contain.'),
  ],
};
