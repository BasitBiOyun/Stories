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
