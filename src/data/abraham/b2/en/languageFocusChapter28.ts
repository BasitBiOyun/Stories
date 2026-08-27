import type { Exercise } from '../../../../types';

/** Chapter 28 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter28: Record<number, Exercise[]> = {
  28: [
    {
      id: 'abraham-b2-language-28-purpose-chain',
      type: 'matching',
      title: 'Trace Purpose and Intended Outcome',
      instructions: 'Match each expression with the function it performs in the chapter’s purpose chain.',
      question: 'How does the chapter connect settlement, worship, provision and gratitude without simply listing events?',
      matchingPairs: [
        { left: 'in order ... that they may offer prayers perfectly', right: 'states the intended religious purpose of settling near the Sacred House' },
        { left: 'so fill some hearts among men with love towards them', right: 'moves from purpose to a requested human response' },
        { left: 'provide them with fruits so that they may give thanks', right: 'links provision to a further intended response through “so that”' },
        { left: 'to reconstruct the Holy Ka‘ba ... making this place the renewed center of monotheism', right: 'combines an immediate purpose with a broader resulting function' },
      ],
      correctAnswer: {
        'in order ... that they may offer prayers perfectly': 'states the intended religious purpose of settling near the Sacred House',
        'so fill some hearts among men with love towards them': 'moves from purpose to a requested human response',
        'provide them with fruits so that they may give thanks': 'links provision to a further intended response through “so that”',
        'to reconstruct the Holy Ka‘ba ... making this place the renewed center of monotheism': 'combines an immediate purpose with a broader resulting function',
      },
      explanation: 'The paragraph repeatedly moves beyond action itself to why the action matters. Purpose markers and the participial phrase “making this place...” build a chain from settlement to worship, provision, gratitude and renewed religious function.',
      feedback: { correct: 'Correct. You identified how purpose and intended outcome organize the paragraph.', incorrect: 'Look for “in order”, “so that”, infinitive “to...” phrases and the final “making...” result phrase.' },
    },
    {
      id: 'abraham-b2-language-28-obligation-reformulation',
      type: 'multiple-choice',
      title: 'Read Obligation and Clarification',
      instructions: 'Choose the best analysis of the relationship between obligation and explanation.',
      question: 'What is the strongest reading of “Abraham had to take Hajar and Ishmael away...” followed by “This was about the rebuilding of the temple, that is, the Ka‘ba”?',
      options: [
        '“Had to” presents the move as necessary within the narrative, while “that is” clarifies the preceding noun phrase by naming the temple more precisely.',
        '“Had to” expresses a weak personal preference, and “that is” introduces an unrelated new event.',
        'Both expressions mainly add chronological detail without changing how the reader interprets the action.',
      ],
      correctAnswer: 0,
      explanation: 'The modal phrase frames the relocation as necessity rather than optional choice, while “that is” reformulates “the temple” with a more specific referent.',
      feedback: { correct: 'Correct. One structure marks necessity; the other narrows and clarifies reference.', incorrect: 'Ask whether “had to” signals choice or necessity, then ask what “that is” does to “the temple”.' },
    },
    {
      id: 'abraham-b2-language-28-time-reference',
      type: 'matching',
      title: 'Build Time and Reference Cohesion',
      instructions: 'Match each expression with the way it helps the paragraph stay coherent across time and generations.',
      question: 'How does the final part move from an earlier sacred site to later descendants without losing reference?',
      matchingPairs: [
        { left: 'the Holy Ka‘ba which was lost after Noah’s Flood', right: 'uses a relative clause to add earlier background about a previously mentioned place' },
        { left: 'Over the years', right: 'signals a large forward movement in time before the lineage develops' },
        { left: 'one of them was Muhammad', right: 'selects one member from the previously mentioned descendants without restarting the whole reference chain' },
        { left: 'They spread all over the Arabian Peninsula', right: 'uses a pronoun to continue the descendant group as the topic of the next sentence' },
      ],
      correctAnswer: {
        'the Holy Ka‘ba which was lost after Noah’s Flood': 'uses a relative clause to add earlier background about a previously mentioned place',
        'Over the years': 'signals a large forward movement in time before the lineage develops',
        'one of them was Muhammad': 'selects one member from the previously mentioned descendants without restarting the whole reference chain',
        'They spread all over the Arabian Peninsula': 'uses a pronoun to continue the descendant group as the topic of the next sentence',
      },
      explanation: 'The paragraph moves across long spans of time by combining a relative clause, an explicit time shift and careful pronoun/reference choices. Those devices let the writer compress history without turning the paragraph into disconnected statements.',
      feedback: { correct: 'Correct. You tracked background, time shift and reference continuity.', incorrect: 'Notice which phrase looks backward, which one moves time forward, and what “them/They” refers back to.' },
    },
    {
      id: 'abraham-b2-language-28-production',
      type: 'reflection',
      title: 'Write a Purpose-to-Legacy Paragraph',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a community project, institution or long-term plan. Include one obligation structure with “had to” or “needed to”, one clarification with “that is” or “in other words”, at least two purpose/result links using “in order to”, “so that”, “to”, or an -ing result phrase, one relative clause that adds earlier background, one explicit long-term time shift such as “over the years”, and clear pronoun/reference links across at least three sentences. Do not write isolated examples; make the paragraph move from an immediate necessity to a wider long-term effect.',
      question: 'Can you connect necessity, clarification, purpose, background and long-term consequence in one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should show a clear discourse progression: necessity → clarification → immediate purpose → wider result → earlier/later background → long-term consequence.',
      feedback: { correct: 'Check that every connector and reference choice helps the paragraph progress rather than merely adding another sentence.', incorrect: '' },
      discussionPrompts: [
        { question: 'Necessity — What action had to happen first, and why?', mode: 'Individual' },
        { question: 'Clarification — Which term or idea needs to be reformulated for the reader?', mode: 'Pair' },
        { question: 'Purpose — Which two outcomes should be linked rather than simply listed?', mode: 'Pair' },
        { question: 'Legacy — How will you move from the immediate project to its effect years later?', mode: 'Individual' },
      ],
    },
  ],
};
