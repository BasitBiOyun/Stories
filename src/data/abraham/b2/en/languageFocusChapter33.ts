import type { Exercise } from '../../../../types';

/** Chapter 33 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter33: Record<number, Exercise[]> = {
  33: [
    {
      id: 'abraham-b2-language-33-contrast-history',
      type: 'matching',
      title: 'Trace Contrast Across Time',
      instructions: 'Match each expression with the discourse effect it creates.',
      question: 'How does the chapter compare practices across periods and communities?',
      matchingPairs: [
        { left: 'At Abraham’s time', right: 'anchors a practice in a specific historical period' },
        { left: 'In fact', right: 'introduces clarification or correction of a possible assumption' },
        { left: 'Prophets before him also sacrificed animals', right: 'extends the practice backward in time rather than presenting it as new' },
        { left: 'while idolaters sacrificed humans', right: 'sets two contrasting practices side by side' },
      ],
      correctAnswer: {
        'At Abraham’s time': 'anchors a practice in a specific historical period',
        'In fact': 'introduces clarification or correction of a possible assumption',
        'Prophets before him also sacrificed animals': 'extends the practice backward in time rather than presenting it as new',
        'while idolaters sacrificed humans': 'sets two contrasting practices side by side',
      },
      explanation: 'The chapter builds historical meaning by locating claims in time, correcting a possible assumption, then contrasting two practices without collapsing them into one.',
      feedback: { correct: 'Correct. You identified how time and contrast organize the historical explanation.', incorrect: 'Look for the phrases that mark time, correction and side-by-side contrast.' },
    },
    {
      id: 'abraham-b2-language-33-equivalence-reframing',
      type: 'multiple-choice',
      title: 'Interpret “Equivalent to” Carefully',
      instructions: 'Choose the reformulation that best preserves the chapter’s wording without overgeneralizing it.',
      question: 'Which version keeps the original scope and historical framing?',
      options: [
        'The chapter says that in Abraham’s religion animal sacrifice was treated as equivalent to human life for people of that era, especially in relation to children’s safety; it does not present animal and human life as universally identical in value.',
        'The chapter states that animals and humans always have exactly the same value in every religious and historical context.',
        'The chapter says human sacrifice continued unchanged and animal sacrifice had no different function.',
      ],
      correctAnswer: 0,
      explanation: 'The phrase is historically framed and connected to how people of that era understood safety; it should not be turned into a universal claim.',
      feedback: { correct: 'Correct. You preserved the time-bound scope of the claim.', incorrect: 'Keep the historical frame “for the people of that era” and avoid turning a contextual statement into a universal one.' },
    },
    {
      id: 'abraham-b2-language-33-time-reunion-purpose',
      type: 'matching',
      title: 'Build Reunion → New Purpose',
      instructions: 'Match each phrase with its role in moving the narrative from separation to a new shared task.',
      question: 'How does the chapter shift from past separation to future-directed action?',
      matchingPairs: [
        { left: 'After a separation of several years', right: 'provides the background period before the reunion' },
        { left: 'the father and son came together again', right: 'marks the return to a shared present situation' },
        { left: 'This time', right: 'signals a new phase different from the earlier reunion context' },
        { left: 'they were going to build the honored House of Allah', right: 'presents a future plan viewed from that past moment' },
      ],
      correctAnswer: {
        'After a separation of several years': 'provides the background period before the reunion',
        'the father and son came together again': 'marks the return to a shared present situation',
        'This time': 'signals a new phase different from the earlier reunion context',
        'they were going to build the honored House of Allah': 'presents a future plan viewed from that past moment',
      },
      explanation: 'The chapter uses background time, reunion language, a phase marker and future-in-the-past to redirect the narrative toward a new shared purpose.',
      feedback: { correct: 'Correct. You traced the move from separation to reunion and future purpose.', incorrect: 'Focus on which phrase gives background, which marks reunion, and which points forward from a past viewpoint.' },
    },
    {
      id: 'abraham-b2-language-33-production',
      type: 'reflection',
      title: 'Write a Historically Framed Contrast',
      instructions: 'Write or say an 8–10 sentence non-story paragraph comparing two practices, policies, or traditions across time. Use one explicit historical time frame, one “in fact” or similar clarification, one “while” contrast, one sentence that limits a claim to people or conditions of that period, one past-background expression such as “after several years”, and one future-in-the-past form such as “was/were going to” to show a later plan from that past viewpoint.',
      question: 'Can you compare historical practices and later developments without turning time-bound claims into universal statements?',
      correctAnswer: null,
      explanation: 'A strong B2 response should distinguish historical context, contrast, clarification and later intention while keeping claims within their proper scope.',
      feedback: { correct: 'Check that each claim is tied to its time, group or context where necessary.', incorrect: '' },
      discussionPrompts: [
        { question: 'Scope — Which claim is limited to a specific period or group?', mode: 'Individual' },
        { question: 'Contrast — Which two practices are compared with “while” or an equivalent linker?', mode: 'Pair' },
        { question: 'Clarification — What possible misunderstanding does your “in fact” sentence correct?', mode: 'Pair' },
        { question: 'Viewpoint — What later plan do you describe from the earlier past moment?', mode: 'Individual' },
      ],
    },
  ],
};
