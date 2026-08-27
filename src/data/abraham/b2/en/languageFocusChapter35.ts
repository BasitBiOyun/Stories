import type { Exercise } from '../../../../types';

/** Chapter 35 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter35: Record<number, Exercise[]> = {
  35: [
    {
      id: 'abraham-b2-language-35-restoration-scope',
      type: 'matching',
      title: 'Restoration, Completion, and Scope',
      instructions: 'Match each expression with the meaning or discourse function it creates in the chapter.',
      question: 'How does the chapter distinguish Abraham’s role, the completion of his mission, and the intended scope of the Ka‘ba?',
      matchingPairs: [
        { left: 'was but the restorer of the structure', right: 'limits the claim: Abraham restores an earlier structure rather than being presented as its first-ever builder' },
        { left: 'was the completion of Abraham’s mission', right: 'presents reconstruction as the culminating stage of the mission described in the chapter' },
        { left: 'for all people, not just people of a chosen race or color', right: 'widens the scope and then explicitly rejects a narrower interpretation' },
        { left: 'This actually reminds us of the oneness of Allah', right: 'moves from a physical place and inclusive scope to an interpretive religious meaning' },
      ],
      correctAnswer: {
        'was but the restorer of the structure': 'limits the claim: Abraham restores an earlier structure rather than being presented as its first-ever builder',
        'was the completion of Abraham’s mission': 'presents reconstruction as the culminating stage of the mission described in the chapter',
        'for all people, not just people of a chosen race or color': 'widens the scope and then explicitly rejects a narrower interpretation',
        'This actually reminds us of the oneness of Allah': 'moves from a physical place and inclusive scope to an interpretive religious meaning',
      },
      explanation: 'The chapter carefully separates restoration from original construction, then connects completion, universal scope and interpretation.',
      feedback: { correct: 'Correct. You distinguished limitation, culmination, scope and interpretation.', incorrect: 'Look for the difference between what happened, how broadly it applies, and what meaning the writer draws from it.' },
    },
    {
      id: 'abraham-b2-language-35-evidence-interpretation',
      type: 'multiple-choice',
      title: 'Move from Evidence to Interpretation',
      instructions: 'Choose the reformulation that best preserves the chapter’s reasoning without strengthening its claims.',
      question: 'Which sentence best preserves the logic of “Reconstruction of the Ka‘ba and the call to pilgrimage ... are clear evidence that Prophet Abraham established the religion and invited those living in that region at that time to embrace it”?',
      options: [
        'The chapter treats reconstruction and the call to pilgrimage as evidence for Abraham’s religious mission in that region at that time, rather than as proof of every later historical development.',
        'The reconstruction proves with complete historical certainty that every society after Abraham immediately accepted Hanifism.',
        'Because the Ka‘ba was rebuilt, no other evidence or historical qualification is necessary.',
      ],
      correctAnswer: 0,
      explanation: 'The reformulation keeps the chapter’s evidence claim while preserving its explicit regional and temporal scope.',
      feedback: { correct: 'Correct. The wording preserves evidence, scope and qualification.', incorrect: 'Keep “in that region at that time” and do not expand the claim beyond what the chapter says.' },
    },
    {
      id: 'abraham-b2-language-35-coexistence-continuity',
      type: 'matching',
      title: 'Show Coexistence and Continuing Relevance',
      instructions: 'Match each expression with the relationship it builds across the final paragraph.',
      question: 'How does the chapter connect inherited faith, competing beliefs, and later relevance?',
      matchingPairs: [
        { left: 'his Hanif faith coexisted with idolatry', right: 'shows two belief systems existing in the same region at the same time without claiming one had disappeared' },
        { left: 'When people have lost their way and are looking for salvation', right: 'sets a recurring condition under which Abraham’s example is presented as relevant' },
        { left: 'has always been there to show them the right path', right: 'uses present-perfect continuity to connect an earlier figure with continuing guidance in later periods' },
        { left: 'especially true in societies where morals have worsened', right: 'narrows the general claim to situations of particular moral and religious decline' },
      ],
      correctAnswer: {
        'his Hanif faith coexisted with idolatry': 'shows two belief systems existing in the same region at the same time without claiming one had disappeared',
        'When people have lost their way and are looking for salvation': 'sets a recurring condition under which Abraham’s example is presented as relevant',
        'has always been there to show them the right path': 'uses present-perfect continuity to connect an earlier figure with continuing guidance in later periods',
        'especially true in societies where morals have worsened': 'narrows the general claim to situations of particular moral and religious decline',
      },
      explanation: 'The final paragraph layers coexistence, recurring conditions, continuing relevance and narrowed emphasis rather than presenting a simple chronological summary.',
      feedback: { correct: 'Correct. You traced how the ending moves from coexistence to recurring relevance.', incorrect: 'Separate simultaneous coexistence from the later, recurring conditions introduced by “when” and “especially”.' },
    },
    {
      id: 'abraham-b2-language-35-production',
      type: 'reflection',
      title: 'Write a Qualified Legacy Paragraph',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about the legacy of a historical institution, idea, or reform. Include one phrase that limits an overstrong claim, one evidence → interpretation link, one “not just ...” scope contrast, one coexistence statement, one recurring condition with “when/whenever”, and one form showing continuing relevance such as “has remained / has continued / has served”.',
      question: 'Can you explain a legacy without turning interpretation into certainty or reducing it to a list of past events?',
      correctAnswer: null,
      explanation: 'A strong B2 response should distinguish event, evidence, interpretation, scope, coexistence and continuing relevance across a coherent paragraph.',
      feedback: { correct: 'Check that your paragraph moves from evidence to a qualified interpretation and then explains why the legacy still matters.', incorrect: '' },
      discussionPrompts: [
        { question: 'Qualification — Which sentence prevents your historical claim from becoming too strong?', mode: 'Individual' },
        { question: 'Evidence — What observation or event supports your interpretation?', mode: 'Pair' },
        { question: 'Scope — Where do you widen or narrow who, where, or when the claim applies to?', mode: 'Pair' },
        { question: 'Continuity — Which form connects the past with continuing relevance?', mode: 'Individual' },
      ],
    },
  ],
};
