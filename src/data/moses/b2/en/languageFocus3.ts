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

export const mosesB2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  19: [
    matching('mo-b2-lf19-a', 'Concession and Correction', 'Match the form with its discourse function.', [
      { left: 'rather, he had committed the act only by accident', right: 'corrects Pharaoh’s interpretation with an alternative account' },
      { left: 'despite the fact that the killing was an accident', right: 'concedes one point while introducing a consequence that still followed' },
      { left: 'If you accept any god other than me, I will imprison you', right: 'creates a condition backed by a threat' },
      { left: 'What if I bring you something convincing and true?', right: 'opens a hypothetical alternative in the argument' },
    ], 'The dialogue develops through correction, concession, threat, and hypothetical challenge.'),
    fill('mo-b2-lf19-b', 'Concession', 'Complete the relationship.', '[blank] the fact that the killing was an accident, Moses had left Egypt out of fear of revenge.', 'Despite', '“Despite” holds two ideas together: the act was accidental, yet serious consequences followed.'),
    sequencing('mo-b2-lf19-c', 'How Dialogue Becomes Confrontation', 'Order the escalation.', [
      { id: 'a', text: 'Pharaoh attacks Moses through his past and upbringing.' },
      { id: 'b', text: 'Moses corrects the accusation and explains the accidental killing and forgiveness.' },
      { id: 'c', text: 'Long intellectual discussion fails.' },
      { id: 'd', text: 'Pharaoh openly threatens imprisonment.' },
      { id: 'e', text: 'Moses proposes showing something convincing and true.' },
      { id: 'f', text: 'The staff is displayed as a sign.' },
    ], 'The chapter organizes the shift from argument to threat and then to demonstration.'),
    reflection('mo-b2-lf19-d', 'A Structured Rebuttal', [
      'Write a 6-sentence rebuttal in a new context. Use “rather”, “despite”, one if-clause, and “What if…?” to move from correction to challenge.',
    ], 'The task transfers the chapter’s argumentative resources to a new discourse situation.'),
  ],
  20: [
    matching('mo-b2-lf20-a', 'Plan, Purpose, Outcome', 'Match each expression with its role in the political plan.', [
      { left: 'In this way…', right: 'explains how the proposed action is expected to work' },
      { left: 'they aimed to lessen the impact', right: 'states the intended purpose' },
      { left: 'It was decided that a contest would be held', right: 'uses passive reporting to foreground the decision rather than the decision-makers' },
      { left: 'things did not go as Pharaoh had expected', right: 'marks the gap between plan and outcome' },
    ], 'The chapter’s language exposes a planned attempt to manage public interpretation and then signals that the plan fails.'),
    fill('mo-b2-lf20-b', 'Expectation vs Reality', 'Complete the comparison.', 'Things did not go [blank] Pharaoh had expected.', 'as', '“As” introduces the expected model against which the actual outcome is compared.'),
    reflection('mo-b2-lf20-c', 'Managing Public Perception', [
      'Write 5–7 sentences explaining how the advisers plan to reduce the impact of Moses’s signs. Use one passive reporting structure, one purpose expression, and one sentence showing expectation versus outcome.',
    ], 'The task integrates political purpose with discourse organization and source-based interpretation.'),
  ],
  21: [
    matching('mo-b2-lf21-a', 'Expert Status and Political Effect', 'Match each language move with what it contributes.', [
      { left: 'not merely performers, but the elite intellectual scholars', right: 'upgrades the significance of the magicians’ judgment through contrast' },
      { left: 'So it was a major defeat…', right: 'draws a political consequence from their expert recognition' },
      { left: 'couldn’t do anything but advise his people to be patient', right: 'expresses severely limited available action' },
      { left: 'since they had been under oppression for a long time', right: 'gives a reason for their limited vision' },
    ], 'The chapter moves from expertise to political consequence, then from repression to constrained response and social explanation.'),
    mc('mo-b2-lf21-b', 'Why “not merely … but …” Matters', 'What does the contrast add?', [
      'It explains why the magicians’ belief carries intellectual and political weight.',
      'It says the magicians have no expertise.',
      'It changes them into members of Pharaoh’s army.',
    ], 0, 'Their status as elite specialists makes their recognition more damaging to Pharaoh’s public interpretation.'),
    fill('mo-b2-lf21-c', 'Reason from Long Oppression', 'Complete the causal link.', 'They lacked vision [blank] they had been under oppression for a long time.', 'since', 'Here “since” functions causally: long oppression is offered as a reason for their limited outlook.'),
    reflection('mo-b2-lf21-d', 'Expert Recognition vs Public Obedience', [
      'Write 6–8 sentences explaining why expert recognition damages Pharaoh’s position while many ordinary subjects still obey him. Use “not merely … but…”, “so”, and one cause connector.',
    ], 'The chapter supports a B2 contrast between expert judgment and social obedience under long-term oppression.'),
  ],
  22: [
    sequencing('mo-b2-lf22-a', 'Before the Sea Opens', 'Order the situation before the visible solution appears.', [
      { id: 'a', text: 'Allah commands Moses to leave Egypt.' },
      { id: 'b', text: 'The people travel by night toward the Red Sea.' },
      { id: 'c', text: 'Pharaoh mobilizes his army and catches up.' },
      { id: 'd', text: 'The Israelites see the sea ahead and the army behind them.' },
      { id: 'e', text: 'They panic.' },
      { id: 'f', text: 'Moses says that Allah is with them and will guide them.' },
      { id: 'g', text: 'Only after this does the sea part.' },
    ], 'The order matters because Moses’s reassurance comes before the physical path is visible.'),
    matching('mo-b2-lf22-b', 'Two Responses to the Same Evidence', 'Match the response with its stance.', [
      { left: 'The Israelites panicked', right: 'responds to the visible trap as if no route exists' },
      { left: 'Allah is with us and will show us the way', right: 'expresses confidence before the route becomes visible' },
      { left: 'However…', right: 'marks the contrast between panic and trust' },
    ], 'The chapter uses contrast to place two interpretations of the same immediate situation side by side.'),
    fill('mo-b2-lf22-c', 'Contrast Before Resolution', 'Complete the connector.', 'The Israelites panicked. [blank], Moses said that Allah was with them and would show them the way to safety.', 'However', '“However” makes the contrast in stance explicit before the miracle resolves the physical problem.'),
    reflection('mo-b2-lf22-d', 'Certainty Before Visible Evidence', [
      'Write 6–8 sentences analyzing the difference between the people’s visible evidence and Moses’s confidence. Keep separate what the characters can see, what Moses says, and what happens later.',
    ], 'B2 analysis distinguishes present evidence, stated confidence, and later outcome instead of collapsing them into one moment.'),
  ],
  23: [
    matching('mo-b2-lf23-a', 'Event vs Self-Serving Interpretation', 'Separate what happens from how Pharaoh explains it.', [
      { left: 'The sea is parted', right: 'narrated event' },
      { left: 'The sea opened at my command', right: 'Pharaoh’s claim about the cause of the event' },
      { left: 'Allah commanded the sea to return', right: 'narrated cause of the sea closing in the chapter' },
    ], 'The chapter explicitly contrasts an event with Pharaoh’s attempt to reinterpret it as evidence of his own power.'),
    fill('mo-b2-lf23-b', 'Timing at the Turning Point', 'Complete the time clause.', '[blank] Pharaoh and his soldiers were midway, the sea returned to its former state.', 'When', 'The time clause locates the decisive change at the point when the pursuing force is inside the passage.'),
    reflection('mo-b2-lf23-c', 'Evidence and Motivated Interpretation', [
      'Write 5–7 sentences explaining why Pharaoh’s claim about the opened sea is a self-serving interpretation rather than the chapter’s explanation. Quote or paraphrase two pieces of chapter evidence.',
    ], 'The task requires B2 evidence-versus-interpretation reasoning grounded in the source.'),
  ],
  24: [
    matching('mo-b2-lf24-a', 'Looking Back and Looking Forward', 'Match the form with its time/discourse function.', [
      { left: 'Despite this…', right: 'introduces behavior that conflicts with the earlier rescue from oppression' },
      { left: 'he told his people that he would bring them a Book', right: 'uses future-in-the-past from an earlier narrative point' },
      { left: 'He would face many difficult tests', right: 'looks forward from the ending to continuing future difficulty' },
      { left: 'the reason he is known as the Prophet of Great Determination', right: 'links repeated effort with a concluding evaluation' },
    ], 'The final chapter uses concession and future-in-the-past to show that liberation is followed by continuing guidance and tests.'),
    sequencing('mo-b2-lf24-b', 'Guidance After Liberation', 'Order the final movement.', [
      { id: 'a', text: 'The people encounter idol worship after leaving Egypt.' },
      { id: 'b', text: 'Moses warns them against returning to idol worship.' },
      { id: 'c', text: 'Moses goes to Mount Tur for forty days.' },
      { id: 'd', text: 'The Torah is given to him.' },
      { id: 'e', text: 'He returns and finds people gathered around the calf statue.' },
      { id: 'f', text: 'The chapter closes by emphasizing continuing tests and determination.' },
    ], 'The sequence makes the final chapter’s central contrast visible: physical rescue does not remove the need for continuing moral guidance.'),
    fill('mo-b2-lf24-c', 'Concession After Rescue', 'Complete the connector.', '[blank] this, will you rebel against Allah and fall into idol worship?', 'Despite', '“Despite this” points back to the rescue from oppression and introduces behavior that conflicts with that history.'),
    reflection('mo-b2-lf24-d', 'Liberation Is Not the End', [
      'Write 7–8 sentences explaining the final chapter’s message that liberation is followed by continuing responsibility. Use “despite”, one future-in-the-past form with “would”, and at least two pieces of evidence.',
    ], 'A B2 synthesis should connect rescue, guidance, disobedience, and continuing determination without reducing the ending to one event.'),
  ],
};

const reviewFeedback = {
  correct: 'Correct. Your choice fits the discourse function and meaning practised across the book.',
  incorrect: 'Not yet. Reconsider the relationship between form, meaning, and discourse purpose, then try again.',
};

const reviewMc = (id: string, title: string, question: string, options: string[], correctAnswer: number, explanation: string): Exercise => ({
  id, type: 'multiple-choice', title, instructions: 'Choose the option that best preserves the intended B2 meaning.', question, options, correctAnswer, explanation, feedback: reviewFeedback,
});
const reviewFill = (id: string, title: string, question: string, text: string, correctAnswer: string, explanation: string): Exercise => ({
  id, type: 'fill-blanks', title, instructions: 'Complete the sentence with the language that best expresses the relationship.', question, fillBlanksText: text, correctAnswer, explanation, feedback: reviewFeedback,
});
const reviewMatching = (id: string, title: string, question: string, pairs: { left: string; right: string }[], explanation: string): Exercise => ({
  id, type: 'matching', title, instructions: 'Match each form with the discourse function it performs.', question, matchingPairs: pairs, correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])), explanation, feedback: reviewFeedback,
});
const reviewSequencing = (id: string, title: string, question: string, items: { id: string; text: string }[], explanation: string): Exercise => ({
  id, type: 'sequencing', title, instructions: 'Order the moves so the paragraph develops as a coherent B2 explanation.', question, sequencingItems: items, correctAnswer: items.map(item => item.id), explanation, feedback: reviewFeedback,
});

export const mosesB2LanguageReviewExercises: Exercise[] = [
  reviewMatching('mo-b2-lr1', 'Language Review 1 — Degrees of Certainty', 'Match each expression with the stance it communicates.', [
    { left: 'According to the sources…', right: 'attributes information rather than presenting it as the writer’s unqualified fact' },
    { left: 'It is possible that…', right: 'opens a cautious possibility' },
    { left: 'probably…', right: 'marks a likely conclusion that is not certain' },
    { left: 'the exact date is unknown', right: 'states a clear limit on what can be claimed' },
  ], 'Across the historical chapters, source attribution, possibility, probability, and explicit uncertainty prevent overclaiming.'),

  reviewMatching('mo-b2-lr2', 'Language Review 2 — Cause, Purpose, and Result', 'Match each connector with the relationship it builds.', [
    { left: 'because…', right: 'gives a cause or reason' },
    { left: 'to prevent…', right: 'states the purpose of an action' },
    { left: 'so that…', right: 'expresses an intended result or purpose' },
    { left: 'as a result / thus…', right: 'presents a consequence or synthesized result' },
  ], 'B2 explanation depends on selecting connectors according to the relationship between ideas, not treating them as interchangeable linking words.'),

  reviewMc('mo-b2-lr3', 'Language Review 3 — Focus and Information Structure', 'Why is a passive form such as “he was placed in a basket” useful in this narrative?', [
    'It keeps Moses and what happens to him in focus when the actor is not the main point.',
    'It proves that no one performed the action.',
    'It makes the event less important than the actor.',
  ], 0, 'Passive voice can shift attention toward the affected person or event without claiming that an action had no agent.'),

  reviewFill('mo-b2-lr4', 'Language Review 4 — Multi-Cause Explanation', 'Complete the structure that prevents a one-cause explanation.', 'Pharaoh’s authority depended not only on control of resources, [blank] also on control of manpower and people.', 'but', '“Not only … but also …” adds a second factor and helps construct a more qualified, multi-cause analysis.'),

  reviewMatching('mo-b2-lr5', 'Language Review 5 — Contrast, Concession, and Correction', 'Match each form with what it does.', [
    { left: 'unlike…', right: 'contrasts two people or positions directly' },
    { left: 'however…', right: 'signals a turn that qualifies or opposes the previous statement' },
    { left: 'despite the fact that…', right: 'acknowledges a fact before presenting a contrasting outcome' },
    { left: 'rather…', right: 'rejects one interpretation and replaces it with a more accurate one' },
    { left: 'not merely … but…', right: 'reframes something as broader or more significant than the first description' },
  ], 'These forms help a B2 writer manage competing interpretations instead of simply adding sentences one after another.'),

  reviewMatching('mo-b2-lr6', 'Language Review 6 — Conditions, Threats, and Commitments', 'Match the pattern with its communicative function.', [
    { left: 'If you accept another god, I will…', right: 'sets a condition and a threatened consequence' },
    { left: 'What if I bring you something convincing?', right: 'opens a hypothetical challenge to the other speaker’s position' },
    { left: 'when you fear for him, then…', right: 'links a future condition/time point to an instructed response' },
    { left: 'I will never again…', right: 'turns reflection or repentance into a future commitment' },
  ], 'Modality and condition structures express more than time: they can threaten, challenge, instruct, reassure, or commit.'),

  reviewSequencing('mo-b2-lr7', 'Language Review 7 — Build an Analytical Paragraph', 'Put the language moves into a coherent order.', [
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
    feedback: reviewFeedback,
    discussionPrompts: [
      { question: 'Write 8–10 connected sentences using “according to…”, a cautious marker such as “probably/it is possible”, a cause/result connector, and a contrast or correction form. End by stating what the evidence supports and what remains interpretation.', mode: 'Individual' },
    ],
  },
];
