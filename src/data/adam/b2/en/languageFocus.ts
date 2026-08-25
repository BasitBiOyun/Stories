import type { Exercise } from '../../../../types';

/**
 * Adam B2 Language Focus.
 * Manually authored from each English chapter and kept separate from the
 * Quick Challenge comprehension layer.
 */
export const adamB2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'adam-b2-language-1-source-focus',
      type: 'matching',
      title: 'Source, Focus and Framing',
      instructions: 'Match each expression from the introduction with the discourse job it performs.',
      question: 'How does Chapter 1 signal source, focus and interpretation?',
      matchingPairs: [
        { left: 'Based on the Holy Qur’an', right: 'grounds the statement in an identified source' },
        { left: 'He was created from clay without parents', right: 'uses passive voice to foreground Adam and the event rather than the agent' },
        { left: 'The story of Adam is told in several chapters', right: 'uses passive voice to foreground where the story appears' },
        { left: 'Satan is portrayed as a rebel', right: 'signals how a figure is represented in the source' },
      ],
      correctAnswer: {
        'Based on the Holy Qur’an': 'grounds the statement in an identified source',
        'He was created from clay without parents': 'uses passive voice to foreground Adam and the event rather than the agent',
        'The story of Adam is told in several chapters': 'uses passive voice to foreground where the story appears',
        'Satan is portrayed as a rebel': 'signals how a figure is represented in the source',
      },
      explanation: 'The introduction repeatedly controls how claims are presented: it names a source, uses passive forms to shift information focus, and uses “is portrayed as” to mark representation.',
      feedback: {
        correct: 'Correct. You identified source-grounding, passive focus and representation.',
        incorrect: 'Ask whether the phrase identifies a source, changes what receives sentence focus, or describes representation.',
      },
    },
    {
      id: 'adam-b2-language-1-contrast',
      type: 'matching',
      title: 'Building a Precise Contrast',
      instructions: 'Match each contrast pattern with the relationship it creates.',
      question: 'How does the introduction refine ideas rather than simply add information?',
      matchingPairs: [
        { left: 'not symbolic or imaginary, but ... factual', right: 'rejects one interpretation and replaces it with another' },
        { left: 'a rival and enemy of Adam rather than Allah', right: 'selects the more accurate comparison or focus' },
        { left: 'good and evil as opposed to each other', right: 'presents two ideas as opposing poles' },
        { left: 'not like the creation of other humans', right: 'marks difference before the text explains the distinction' },
      ],
      correctAnswer: {
        'not symbolic or imaginary, but ... factual': 'rejects one interpretation and replaces it with another',
        'a rival and enemy of Adam rather than Allah': 'selects the more accurate comparison or focus',
        'good and evil as opposed to each other': 'presents two ideas as opposing poles',
        'not like the creation of other humans': 'marks difference before the text explains the distinction',
      },
      explanation: 'B2 readers need to notice how contrast markers shape interpretation: “not ... but ...” corrects, “rather than” refines, and “as opposed to” sets up opposition.',
      feedback: {
        correct: 'Good. You separated correction, refinement, opposition and difference.',
        incorrect: 'Look at what the second part does to the first: replace it, narrow it, oppose it, or simply mark difference.',
      },
    },
    {
      id: 'adam-b2-language-1-reformulate',
      type: 'multiple-choice',
      title: 'Reformulate Without Changing the Meaning',
      instructions: 'Choose the reformulation that preserves both the information and the discourse focus.',
      question: 'Which sentence best preserves the meaning of “Satan is portrayed as a rebel against Allah’s command but also as a rival and enemy of Adam rather than Allah”?',
      options: [
        'The Qur’anic account presents Satan as disobedient to Allah’s command while framing his rivalry primarily against Adam.',
        'The Qur’anic account says Satan is equal to Allah and Adam.',
        'The Qur’anic account removes the idea of rebellion and focuses only on friendship with Adam.',
      ],
      correctAnswer: 0,
      explanation: 'The first option preserves both relations: rebellion concerns Allah’s command, while rivalry is framed in relation to Adam.',
      feedback: {
        correct: 'Correct. The reformulation keeps the original distinction and focus.',
        incorrect: 'Preserve both parts of the contrast and do not strengthen the source beyond what the sentence says.',
      },
    },
    {
      id: 'adam-b2-language-1-production',
      type: 'reflection',
      title: 'Frame a Short Explanatory Paragraph',
      instructions: 'Write or say a 4–6 sentence B2 paragraph about a historical, literary or religious account you know. Use at least three Chapter 1 language resources: source-grounding, passive focus, “not ... but ...”, “rather than”, “is portrayed as”, or another clear contrast marker. Do not retell the Quick Challenge answer.',
      question: 'Can you control source, information focus and contrast in one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong response identifies its source, chooses active/passive focus deliberately, and uses contrast to refine meaning rather than simply listing facts.',
      feedback: {
        correct: 'Use the target language to make your paragraph precise, connected and appropriately qualified.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Source — Begin with “According to ...” or “Based on ...”.', mode: 'Individual' },
        { question: 'Focus — Include one passive sentence where the event or subject deserves the main focus.', mode: 'Individual' },
        { question: 'Contrast — Use “not ... but ...” or “rather than” to refine one idea.', mode: 'Individual' },
        { question: 'Representation — If appropriate, use “is portrayed/presented as ...” without turning interpretation into an unqualified fact.', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'adam-b2-language-2-discourse-chain',
      type: 'matching',
      title: 'Follow the Explanatory Chain',
      instructions: 'Match each Chapter 2 expression with the role it plays in the explanation.',
      question: 'How does the chapter move from evidence to explanation and conclusion?',
      matchingPairs: [
        { left: 'using different terms', right: 'introduces variation that the next sentence explains' },
        { left: 'which is a mixture of water and soil', right: 'adds a defining explanation inside the sentence' },
        { left: 'As an example', right: 'moves from a general explanation to specific supporting evidence' },
        { left: 'Therefore', right: 'signals a conclusion drawn from the preceding evidence' },
      ],
      correctAnswer: {
        'using different terms': 'introduces variation that the next sentence explains',
        'which is a mixture of water and soil': 'adds a defining explanation inside the sentence',
        'As an example': 'moves from a general explanation to specific supporting evidence',
        'Therefore': 'signals a conclusion drawn from the preceding evidence',
      },
      explanation: 'The chapter is organised as an explanatory sequence: variation is introduced, clarified, supported with evidence, and followed by an explicit conclusion.',
      feedback: {
        correct: 'Correct. You identified how the paragraph develops rather than treating each sentence as isolated.',
        incorrect: 'Ask whether the phrase introduces variation, defines a term, gives evidence, or draws a conclusion.',
      },
    },
    {
      id: 'adam-b2-language-2-focus-relations',
      type: 'matching',
      title: 'Choose Focus and Relationship',
      instructions: 'Match each form from Chapter 2 with the meaning or information focus it creates.',
      question: 'What work do passive forms and clause links do in the chapter?',
      matchingPairs: [
        { left: 'Adam was created', right: 'foregrounds Adam and the creation event rather than the agent' },
        { left: 'These different expressions are used', right: 'foregrounds the expressions and their explanatory function' },
        { left: 'the material from which Adam was created', right: 'links the material directly to its role in the creation description' },
        { left: 'no superiority ... due to the difference in their colors', right: 'marks a reason or basis for a claim that the text rejects' },
      ],
      correctAnswer: {
        'Adam was created': 'foregrounds Adam and the creation event rather than the agent',
        'These different expressions are used': 'foregrounds the expressions and their explanatory function',
        'the material from which Adam was created': 'links the material directly to its role in the creation description',
        'no superiority ... due to the difference in their colors': 'marks a reason or basis for a claim that the text rejects',
      },
      explanation: 'At B2, grammar is not only form. Passive voice controls information focus, while relative and causal links show how ideas depend on one another.',
      feedback: {
        correct: 'Good. You connected form with focus and logical relationship.',
        incorrect: 'Look at what each structure makes central and what relationship it creates between the ideas.',
      },
    },
    {
      id: 'adam-b2-language-2-synthesis',
      type: 'multiple-choice',
      title: 'Compress Without Losing the Logic',
      instructions: 'Choose the sentence that best preserves the chapter’s explanatory structure without merely copying it.',
      question: 'Which reformulation most accurately combines the opening ideas of Chapter 2?',
      options: [
        'The Qur’anic terms earth, water and clay are presented as different descriptions of the material and stages involved in mud, and the chapter supports this explanation with a specific verse.',
        'The chapter presents earth, water and clay as three unrelated and contradictory accounts of Adam’s creation.',
        'The chapter says the different terms are unimportant because only one of them has any meaning.',
      ],
      correctAnswer: 0,
      explanation: 'The first option preserves the progression from varied terminology to explanation and supporting example without changing the chapter’s claim.',
      feedback: {
        correct: 'Correct. The reformulation keeps the evidence–explanation relationship intact.',
        incorrect: 'Preserve both the relationship among the terms and the role of the supporting verse.',
      },
    },
    {
      id: 'adam-b2-language-2-production',
      type: 'reflection',
      title: 'Build an Evidence-to-Conclusion Paragraph',
      instructions: 'Write or say a 5–7 sentence B2 paragraph explaining a concept that can be described in more than one way. Use at least four Chapter 2 resources: a defining relative clause, one passive form for information focus, an example marker, and a result/conclusion marker such as “therefore” or “so”. Do not repeat the Quick Challenge conclusion about human equality.',
      question: 'Can you organise explanation, evidence and conclusion as one coherent piece of discourse?',
      correctAnswer: null,
      explanation: 'A strong response introduces the concept, clarifies the relation among its descriptions, gives concrete evidence or an example, and signals the conclusion explicitly.',
      feedback: {
        correct: 'Keep the paragraph connected: each sentence should prepare, support or conclude the next idea.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Definition — Add a relative clause with “which” or “from which” to clarify one term.', mode: 'Individual' },
        { question: 'Focus — Use one passive form only where the process or object deserves main focus.', mode: 'Individual' },
        { question: 'Evidence — Introduce one supporting detail with “For example” or “As an example”.', mode: 'Individual' },
        { question: 'Conclusion — End with “Therefore”, “So”, or an equivalent marker that genuinely follows from your evidence.', mode: 'Pair' },
      ],
    },
  ],
  3: [
    {
      id: 'adam-b2-language-3-purpose-necessity',
      type: 'matching',
      title: 'Purpose, Need and Obligation',
      instructions: 'Match each Chapter 3 form with the relationship it creates.',
      question: 'How does the opening paragraph connect Adam’s role with the qualities and learning required for it?',
      matchingPairs: [
        { left: 'To be a representative', right: 'states the purpose or role that frames what follows' },
        { left: 'needed some extraordinary qualities', right: 'presents a requirement as necessary for that role' },
        { left: 'had to be taught by Allah', right: 'expresses strong necessity while keeping the learner as the focus' },
        { left: 'Then, He taught him all the names', right: 'moves the discourse from required preparation to the next event' },
      ],
      correctAnswer: {
        'To be a representative': 'states the purpose or role that frames what follows',
        'needed some extraordinary qualities': 'presents a requirement as necessary for that role',
        'had to be taught by Allah': 'expresses strong necessity while keeping the learner as the focus',
        'Then, He taught him all the names': 'moves the discourse from required preparation to the next event',
      },
      explanation: 'The paragraph is organised around purpose and requirement. The infinitive frames the role, “needed” and “had to” express necessity, and “Then” advances the sequence.',
      feedback: {
        correct: 'Correct. You connected form with purpose, necessity and discourse progression.',
        incorrect: 'Ask whether the expression states the goal, a requirement, an obligation, or the next step in the sequence.',
      },
    },
    {
      id: 'adam-b2-language-3-interpretive-stance',
      type: 'matching',
      title: 'Control the Strength of an Interpretation',
      instructions: 'Match each expression with the degree or kind of interpretation it signals.',
      question: 'How does Chapter 3 move from quoted evidence to interpretation without giving every claim the same certainty?',
      matchingPairs: [
        { left: 'shows the value that Allah gave him', right: 'presents the writer’s interpretation as a strong explanatory link' },
        { left: 'means giving Adam life', right: 'states an explanatory meaning directly' },
        { left: 'points to the broadness of Adam’s knowledge', right: 'signals what the quoted statement is interpreted as indicating' },
        { left: 'could be the fundamental knowledge of being human', right: 'marks a possible interpretation rather than a certain identification' },
      ],
      correctAnswer: {
        'shows the value that Allah gave him': 'presents the writer’s interpretation as a strong explanatory link',
        'means giving Adam life': 'states an explanatory meaning directly',
        'points to the broadness of Adam’s knowledge': 'signals what the quoted statement is interpreted as indicating',
        'could be the fundamental knowledge of being human': 'marks a possible interpretation rather than a certain identification',
      },
      explanation: 'B2 interpretation depends on stance. “Could be” is deliberately weaker than “means”, while “points to” presents an interpretive inference from the wording.',
      feedback: {
        correct: 'Good. You preserved the difference between direct explanation, inference and possibility.',
        incorrect: 'Do not treat “could be” as certainty. Compare how strongly each expression commits the writer to the interpretation.',
      },
    },
    {
      id: 'adam-b2-language-3-evidence-interpretation',
      type: 'multiple-choice',
      title: 'Move from Evidence to Interpretation Carefully',
      instructions: 'Choose the reformulation that preserves both the quotation’s role and the cautious wording of the interpretation.',
      question: 'Which sentence best represents the chapter’s move from the Qur’anic passage to the final interpretive paragraph?',
      options: [
        'After quoting the passage about the names, the chapter interprets it as indicating broad human capacities and suggests that the names could represent foundational knowledge for language, reasoning, culture and civilization.',
        'The quoted passage explicitly lists modern science and technology by name and proves exactly how every civilization would develop.',
        'The chapter treats the quotation and its later interpretation as unrelated ideas with no discourse connection.',
      ],
      correctAnswer: 0,
      explanation: 'The first option keeps the evidence–interpretation relationship and preserves the original modal caution in “could be”.',
      feedback: {
        correct: 'Correct. The reformulation connects evidence and interpretation without strengthening the claim.',
        incorrect: 'Keep the quotation as evidence and preserve the difference between what it says directly and what the chapter interprets from it.',
      },
    },
    {
      id: 'adam-b2-language-3-production',
      type: 'reflection',
      title: 'Write a Qualified Interpretive Paragraph',
      instructions: 'Write or say a 5–7 sentence B2 paragraph that begins with a role, goal or requirement, introduces one piece of evidence, and then interprets it. Use at least four Chapter 3 resources: a purpose phrase with “to”, “need” or “have to”, one sequencing connector, an interpretive verb such as “shows/means/points to”, and one cautious form such as “could/may”. Do not answer the Quick Challenge about what knowledge enables humans to do.',
      question: 'Can you separate evidence from interpretation while controlling how strongly you state each idea?',
      correctAnswer: null,
      explanation: 'A strong response makes the evidence identifiable, uses linking language to move into interpretation, and uses modality when the interpretation is possible rather than certain.',
      feedback: {
        correct: 'Keep the paragraph coherent and make the difference between evidence, explanation and possibility visible in your language.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Purpose — Frame the paragraph with a goal or requirement: “To..., a person needs/has to...”.', mode: 'Individual' },
        { question: 'Evidence — Present one concrete statement, quotation or observation before interpreting it.', mode: 'Individual' },
        { question: 'Interpretation — Use “shows”, “means” or “points to” according to how direct the relationship is.', mode: 'Individual' },
        { question: 'Qualification — Use “could” or “may” when you are offering a possible interpretation rather than a certainty.', mode: 'Pair' },
      ],
    },
  ],
};