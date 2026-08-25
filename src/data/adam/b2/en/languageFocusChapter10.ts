import type { Exercise } from '../../../../types';

/** Chapter 10 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'adam-b2-language-10-future-viewpoint',
      type: 'matching',
      title: 'Read the Future from a Past Viewpoint',
      instructions: 'Match each Chapter 10 expression with the viewpoint or relationship it creates.',
      question: 'How does the chapter use past reporting with later events to frame what was already known or intended?',
      matchingPairs: [
        { left: 'Allah knew that Adam and Eve would eat of the tree and descend to Earth.', right: 'places later actions in the future from an earlier past viewpoint' },
        { left: 'He knew that Satan would violate their innocence.', right: 'uses would to present another later event as known from that same viewpoint' },
        { left: 'That experience was essential for their life on Earth.', right: 'evaluates the experience retrospectively rather than merely reporting chronology' },
        { left: 'It was meant to teach Adam, Eve, and their offspring...', right: 'frames the experience in terms of intended function or purpose' },
      ],
      correctAnswer: {
        'Allah knew that Adam and Eve would eat of the tree and descend to Earth.': 'places later actions in the future from an earlier past viewpoint',
        'He knew that Satan would violate their innocence.': 'uses would to present another later event as known from that same viewpoint',
        'That experience was essential for their life on Earth.': 'evaluates the experience retrospectively rather than merely reporting chronology',
        'It was meant to teach Adam, Eve, and their offspring...': 'frames the experience in terms of intended function or purpose',
      },
      explanation: 'The chapter combines a past viewpoint with later events, then shifts from chronology to evaluation and purpose. “Would” is therefore part of viewpoint management, not simply a free-standing future tense.',
      feedback: {
        correct: 'Correct. You tracked viewpoint, evaluation and purpose across the paragraph.',
        incorrect: 'Ask which clauses look forward from a past viewpoint and which clauses interpret the function of the experience.',
      },
    },
    {
      id: 'adam-b2-language-10-corrective-framing',
      type: 'multiple-choice',
      title: 'Reframe an Interpretation Precisely',
      instructions: 'Choose the explanation that best describes the discourse move.',
      question: 'What does the pattern “did not imply dishonour or humiliation, but rather it was an honorable and respected settlement” do?',
      options: [
        'It rejects one interpretation and replaces it with a more precise alternative.',
        'It presents two interpretations as equally certain and equally acceptable.',
        'It simply adds a second event after the first without changing the interpretation.',
      ],
      correctAnswer: 0,
      explanation: '“Not... but rather...” is corrective contrast. The first interpretation is explicitly rejected before a replacement framing is supplied.',
      feedback: {
        correct: 'Correct. You identified corrective contrast rather than simple addition.',
        incorrect: 'Notice that the first interpretation is denied before the second one is introduced.',
      },
    },
    {
      id: 'adam-b2-language-10-source-certainty',
      type: 'matching',
      title: 'Distinguish Source and Certainty',
      instructions: 'Match each reporting expression with the degree or type of attribution it signals. Do not treat all reported details as equally direct.',
      question: 'How does Chapter 10 mark who reports a claim and how directly the claim is presented?',
      matchingPairs: [
        { left: 'There are many hadiths about the place...', right: 'introduces a body of reported material without selecting one location as certain' },
        { left: 'Ibn Abbas ... said:', right: 'attributes a specific statement directly to a named transmitter' },
        { left: 'It is also reported that...', right: 'presents a report while leaving the immediate reporter backgrounded' },
        { left: 'It is said to have come from Paradise.', right: 'marks the claim with explicit reporting distance rather than asserting it directly' },
        { left: 'Ibn Umar said that...', right: 'introduces a second named attribution that may differ in detail from the first' },
      ],
      correctAnswer: {
        'There are many hadiths about the place...': 'introduces a body of reported material without selecting one location as certain',
        'Ibn Abbas ... said:': 'attributes a specific statement directly to a named transmitter',
        'It is also reported that...': 'presents a report while leaving the immediate reporter backgrounded',
        'It is said to have come from Paradise.': 'marks the claim with explicit reporting distance rather than asserting it directly',
        'Ibn Umar said that...': 'introduces a second named attribution that may differ in detail from the first',
      },
      explanation: 'B2 source reading requires preserving attribution. “X said,” “it is reported,” and “it is said” do not authorize a writer to convert every reported detail into an unqualified fact.',
      feedback: {
        correct: 'Good. You preserved the chapter’s source boundaries and reporting distance.',
        incorrect: 'Separate named attribution from impersonal reporting and from an unqualified factual assertion.',
      },
    },
    {
      id: 'adam-b2-language-10-production',
      type: 'reflection',
      title: 'Write with Viewpoint, Reframing and Source Distance',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story historical or community event for which people give more than one account. Do not retell Chapter 10. Begin from a past viewpoint and use “would” at least once to refer to something that was still later at that point. Use “was meant to...” or an equivalent purpose expression. Correct one possible interpretation with “not... but rather...”. Then introduce at least two claims with different source frames such as “X said...”, “it is reported that...”, or “it is said to...”. Do not turn a reported claim into a certain fact.',
      question: 'Can you control time viewpoint, corrective contrast and source certainty across one coherent paragraph?',
      correctAnswer: null,
      explanation: 'A strong B2 response uses grammar and reporting language to manage chronology, interpretation and evidential distance rather than merely listing information.',
      feedback: {
        correct: 'Keep the chronology clear and preserve the difference between what a named source says and what you can state directly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Viewpoint — From one past moment, what would happen later?', mode: 'Individual' },
        { question: 'Purpose — What was the event or action meant to achieve?', mode: 'Individual' },
        { question: 'Reframing — Reject one interpretation and replace it with a more precise one.', mode: 'Pair' },
        { question: 'Source distance — Attribute two claims without presenting both as certain facts.', mode: 'Pair' },
      ],
    },
  ],
};
