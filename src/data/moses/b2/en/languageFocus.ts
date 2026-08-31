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

export const mosesB2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    matching('mo-b2-lf1-a', 'Building a Historical Explanation', 'What job does each expression do?', [
      { left: 'according to Judaism, Christianity, and Islam', right: 'frames a claim by naming perspectives or traditions' },
      { left: 'because they grew so quickly', right: 'gives a cause for the rulers’ fear' },
      { left: 'to prevent them from becoming a ruling class', right: 'states the purpose of the rulers’ action' },
    ], 'The chapter combines framing, cause, and purpose to explain how historical pressure develops rather than simply listing events.'),
    fill('mo-b2-lf1-b', 'Purpose in Context', 'Complete the purpose relationship.', '[blank] prevent them from becoming a ruling class, local rulers tried to stop the population growth.', 'To', 'The infinitive phrase places the rulers’ purpose before the action taken to achieve it.'),
    reflection('mo-b2-lf1-c', 'From Fact to Explanation', [
      'Write 4–5 sentences about a historical change. Use one framing phrase such as “according to…”, one cause with “because”, and one purpose phrase with “to + verb”.',
    ], 'A B2 response should connect information through source framing, cause, and purpose instead of presenting disconnected facts.'),
  ],
  2: [
    matching('mo-b2-lf2-a', 'Degrees of Historical Certainty', 'Match the chapter phrase with its level or type of claim.', [
      { left: 'According to the sources…', right: 'attributes information to sources' },
      { left: 'must have taken place…', right: 'presents a strong historical inference' },
      { left: 'was probably Ramses II', right: 'signals a probable but not certain conclusion' },
      { left: 'the exact date … is unknown', right: 'marks an explicit limit of knowledge' },
    ], 'The chapter deliberately distinguishes source attribution, inference, probability, and acknowledged uncertainty.'),
    mc('mo-b2-lf2-b', 'Do Not Overclaim', 'Which sentence best preserves the chapter’s degree of certainty?', [
      'The Pharaoh who drowned was probably Ramses II, while the exact date of the Exodus is unknown.',
      'The Pharaoh who drowned was certainly Ramses II on a known exact date.',
      'No historical source connects Ramses II with the Exodus.',
    ], 0, 'B2 source fidelity requires keeping “probably” and “unknown” rather than strengthening them into certainty.'),
    fill('mo-b2-lf2-c', 'Cautious Conclusion', 'Complete the cautious conclusion.', 'The Pharaoh who drowned at sea was [blank] Ramses II.', 'probably', '“Probably” signals a reasoned conclusion that remains open to uncertainty.'),
    reflection('mo-b2-lf2-d', 'Qualified Historical Summary', [
      'Write a 5-sentence historical summary using “according to the sources”, “probably”, and one sentence that openly states what is not known.',
    ], 'The task practises B2 qualification: evidence can support a conclusion without turning an uncertain point into a fixed fact.'),
  ],
  3: [
    matching('mo-b2-lf3-a', 'How Authority Is Explained', 'Match each structure with its discourse role.', [
      { left: 'For this reason…', right: 'moves from an important condition to a consequence' },
      { left: 'Thus…', right: 'draws together the result of the preceding developments' },
      { left: 'not only … but also …', right: 'adds a second basis and prevents a one-cause explanation' },
      { left: 'Just like today’s petrol…', right: 'uses analogy to clarify the importance of controlling a resource' },
    ], 'The chapter develops a multi-cause explanation of authority through consequence, synthesis, addition, and analogy.'),
    sequencing('mo-b2-lf3-b', 'Resource → System → Power', 'Reconstruct the chapter’s explanatory chain.', [
      { id: 'a', text: 'The Nile is vital for agriculture, transport, and life.' },
      { id: 'b', text: 'Large projects are built to control and use the river.' },
      { id: 'c', text: 'Those projects require extensive administration and manpower.' },
      { id: 'd', text: 'Pharaoh’s authority is linked to both the river’s wealth and forced labor.' },
    ], 'The sequence shows how B2 discourse can move from a resource to infrastructure, then to labor and political authority.'),
    reflection('mo-b2-lf3-c', 'Analogy with Limits', [
      'Explain in 4–6 sentences why the text compares the Nile with modern petrol. Use “not only … but also …” and make clear that the comparison is an analogy, not an identity.',
    ], 'A strong B2 comparison identifies the shared function of strategic resources while respecting the limits of the analogy.'),
  ],
  4: [
    matching('mo-b2-lf4-a', 'Focus Through the Passive', 'Why does the chapter use these passive forms?', [
      { left: 'he was placed in a basket', right: 'focuses attention on baby Moses and what happens to him' },
      { left: 'the basket was set free', right: 'foregrounds the event rather than the unnamed actor' },
      { left: 'it was found near the palace', right: 'keeps the discovery and location at the center of the narrative' },
    ], 'Passive voice helps the chapter keep Moses, the basket, and the sequence of events in focus.'),
    sequencing('mo-b2-lf4-b', 'The Water Frame', 'Order the two water episodes and the relationship the chapter builds between them.', [
      { id: 'a', text: 'Baby Moses is carried by the Nile toward the palace.' },
      { id: 'b', text: 'He survives the danger surrounding his infancy.' },
      { id: 'c', text: 'Much later, Moses and his people face Pharaoh at the Red Sea.' },
      { id: 'd', text: 'Water again becomes part of a scene of salvation.' },
    ], 'The chapter uses a long-range thematic parallel: water is connected with survival at the beginning and salvation later.'),
    reflection('mo-b2-lf4-c', 'Parallel Without Repetition', [
      'Write 4–5 sentences explaining the Nile/Red Sea parallel. Use one passive form and one contrast or time marker such as “later”, “while”, or “whereas”.',
    ], 'The task practises thematic comparison while keeping the two events historically and narratively distinct.'),
  ],
  5: [
    mc('mo-b2-lf5-a', 'Possibility, Not Certainty', 'Which wording preserves the chapter’s claim about people who may not have believed in paganism?', [
      'It is possible that some people did not practise or believe in paganism.',
      'Everyone secretly rejected paganism.',
      'No one in Egypt practised paganism.',
    ], 0, 'The chapter explicitly uses “It is possible that” and “some people”; stronger versions would overstate the source.'),
    matching('mo-b2-lf5-b', 'Public Action and Private Position', 'Match the language with the contrast it expresses.', [
      { left: 'kept it secret', right: 'private position is hidden' },
      { left: 'outwardly followed social norms', right: 'public behavior conforms to the dominant system' },
      { left: 'because they were weak', right: 'gives the reason for concealment' },
    ], 'The language separates inner belief, outward behavior, and the political reason connecting them.'),
    fill('mo-b2-lf5-c', 'Qualified Interpretation', 'Complete the cautious frame.', 'It is [blank] that some people of that period did not practise or believe in paganism.', 'possible', '“Possible” keeps the claim within the limits stated by the chapter.'),
    reflection('mo-b2-lf5-d', 'Reporting a Vision Carefully', [
      'Write 4–6 sentences reporting a dream or prediction from a source. Attribute the report, use “said that” or an equivalent reporting structure, and distinguish the reported prediction from an established fact.',
    ], 'The chapter attributes the vision account to Ibn Abbas and reports what priests and magicians said would happen.'),
  ],
  6: [
    sequencing('mo-b2-lf6-a', 'Cause → Policy → Consequence', 'Reconstruct the policy reasoning in the chapter.', [
      { id: 'a', text: 'The killing policy reduces the labor force used for heavy work.' },
      { id: 'b', text: 'Economic experts warn Pharaoh about the loss of manpower.' },
      { id: 'c', text: 'They propose killing boys in one year and allowing them to live in the next.' },
      { id: 'd', text: 'Pharaoh accepts the alternating policy as economically realistic.' },
    ], 'The chapter builds a clear cause-response chain rather than presenting the new policy as an isolated decision.'),
    matching('mo-b2-lf6-b', 'Instruction and Reassurance', 'Match the quoted language with its function.', [
      { left: 'when you fear for him, then put him into the river', right: 'sets a condition and the action that follows it' },
      { left: 'fear not, nor grieve', right: 'reassures and prohibits fear/despair' },
      { left: 'We shall bring him back to you', right: 'expresses a future promise' },
    ], 'The quoted passage combines condition, instruction, reassurance, and future promise.'),
    reflection('mo-b2-lf6-c', 'Explaining a Difficult Decision', [
      'Write 5 sentences about a difficult decision. Use one cause, one conditional “when/if” relationship, one instruction, and one future reassurance.',
    ], 'B2 use means combining forms into a coherent decision sequence rather than practising them in isolation.'),
  ],
};
