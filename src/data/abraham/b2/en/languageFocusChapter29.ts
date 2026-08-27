import type { Exercise } from '../../../../types';

/** Chapter 29 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter29: Record<number, Exercise[]> = {
  29: [
    {
      id: 'abraham-b2-language-29-source-voice',
      type: 'matching',
      title: 'Separate Source Voice from Narrative Voice',
      instructions: 'Match each expression with the discourse job it performs.',
      question: 'How does the chapter move between an attributed report, Hajar’s own thought, and the narrator’s later interpretation?',
      matchingPairs: [
        { left: 'Ibn Abbas ... said', right: 'marks the following account as attributed to a named transmitter rather than presented without a source frame' },
        { left: '“Maybe there is a caravan passing by,” she thought to herself', right: 'opens Hajar’s internal possibility rather than stating that a caravan was actually present' },
        { left: 'Hajar’s patient search for water is directly comparable to...', right: 'moves from narrated action to an explicit comparison made by the narrator' },
        { left: 'Her effort was later symbolized by all Muslims in Hajj', right: 'shifts forward from the immediate event to a later interpretive or ritual connection' },
      ],
      correctAnswer: {
        'Ibn Abbas ... said': 'marks the following account as attributed to a named transmitter rather than presented without a source frame',
        '“Maybe there is a caravan passing by,” she thought to herself': 'opens Hajar’s internal possibility rather than stating that a caravan was actually present',
        'Hajar’s patient search for water is directly comparable to...': 'moves from narrated action to an explicit comparison made by the narrator',
        'Her effort was later symbolized by all Muslims in Hajj': 'shifts forward from the immediate event to a later interpretive or ritual connection',
      },
      explanation: 'The chapter layers several voices and levels of certainty: a named report, an internal possibility, narrated action, and later comparison/interpretation. Keeping those layers separate prevents reported material or possibility from being turned into unqualified fact.',
      feedback: { correct: 'Correct. You distinguished attribution, possibility, narration and later interpretation.', incorrect: 'Ask who is responsible for each statement: Ibn Abbas, Hajar’s thought, or the chapter narrator.' },
    },
    {
      id: 'abraham-b2-language-29-sequence-background',
      type: 'matching',
      title: 'Track Motion Through a Narrative Chain',
      instructions: 'Match each structure with the way it organizes movement and time.',
      question: 'How does the paragraph keep a long search sequence coherent instead of listing disconnected actions?',
      matchingPairs: [
        { left: 'When the water ... was used up, she became thirsty', right: 'sets a completed change as the trigger for the next state' },
        { left: 'Leaving Ishmael under a tree, she began climbing...', right: 'compresses a background action into a participial phrase before the main movement' },
        { left: 'Then, she moved across to the opposite hill', right: 'signals the next stage explicitly after the first attempt' },
        { left: 'but still saw nothing', right: 'adds an expectation-reversing result while preserving continuity with the search' },
      ],
      correctAnswer: {
        'When the water ... was used up, she became thirsty': 'sets a completed change as the trigger for the next state',
        'Leaving Ishmael under a tree, she began climbing...': 'compresses a background action into a participial phrase before the main movement',
        'Then, she moved across to the opposite hill': 'signals the next stage explicitly after the first attempt',
        'but still saw nothing': 'adds an expectation-reversing result while preserving continuity with the search',
      },
      explanation: 'The sequence combines a trigger clause, a reduced background action, an explicit next-step marker and a contrastive result. Those choices make repeated movement readable as one developing search.',
      feedback: { correct: 'Correct. You traced trigger, background, progression and contrast.', incorrect: 'Look for the structure that starts the problem, the reduced action before the main verb, the next-step marker, and the failed-result contrast.' },
    },
    {
      id: 'abraham-b2-language-29-reformulate-comparison',
      type: 'multiple-choice',
      title: 'Preserve Comparison Without Overclaiming',
      instructions: 'Choose the reformulation that best preserves the chapter’s discourse roles.',
      question: 'Which version keeps observation, possibility, comparison and later interpretation distinct?',
      options: [
        'After the water ran out, Hajar searched repeatedly. She wondered whether a caravan might be nearby, but she found none. The chapter then compares her repeated movement with sa‘y and later links her effort with Hajj practice.',
        'After the water ran out, Hajar knew a caravan was nearby. Her running was already the formal Hajj ritual at that moment, so she performed it exactly as later pilgrims would.',
        'Ibn Abbas proved that every later detail of Hajj began during this search, and Hajar’s thought about a caravan confirms that one was passing nearby.',
      ],
      correctAnswer: 0,
      explanation: 'The first reformulation keeps the internal thought tentative, reports the failed search, and marks comparison/later connection as later discourse layers rather than collapsing them into the immediate event.',
      feedback: { correct: 'Correct. The reformulation preserves source and certainty boundaries.', incorrect: 'Do not turn “maybe” into knowledge, and do not collapse a later comparison or symbolization into the immediate event itself.' },
    },
    {
      id: 'abraham-b2-language-29-production',
      type: 'reflection',
      title: 'Write from Report to Later Interpretation',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a documented journey, experiment, rescue, discovery or repeated attempt. Begin with an attributed source frame such as “According to...” or “X reported that...”. Include one internal possibility with “might/maybe”, one trigger clause with “when/after”, one reduced -ing background phrase, at least two sequence markers, one contrastive failed or unexpected result with “but/yet/still”, and finish by clearly marking a later comparison, interpretation or symbolic meaning. Keep report, possibility and interpretation distinct.',
      question: 'Can you move from attributed evidence through a coherent action sequence to a later interpretation without blurring certainty?',
      correctAnswer: null,
      explanation: 'A strong B2 response should show a controlled discourse progression: attributed source → trigger → repeated or developing action → tentative possibility → contrastive result → later comparison/interpretation.',
      feedback: { correct: 'Check that the paragraph makes clear what was reported, what was only possible, what happened, and what was interpreted later.', incorrect: '' },
      discussionPrompts: [
        { question: 'Source — Who reports the initial event, and how will you mark that attribution?', mode: 'Individual' },
        { question: 'Possibility — What did the person think might happen without knowing it for certain?', mode: 'Pair' },
        { question: 'Sequence — Which actions need explicit ordering, and which can be compressed into an -ing phrase?', mode: 'Pair' },
        { question: 'Interpretation — What later comparison or meaning can you add without presenting it as part of the original event?', mode: 'Individual' },
      ],
    },
  ],
};
