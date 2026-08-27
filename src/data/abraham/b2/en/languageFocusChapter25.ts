import type { Exercise } from '../../../../types';

/** Chapter 25 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter25: Record<number, Exercise[]> = {
  25: [
    {
      id: 'abraham-b2-language-25-decision-chain',
      type: 'matching',
      title: 'Track Realization, Decision and Movement',
      instructions: 'Match each expression with the discourse job it performs in the chapter.',
      question: 'How does the opening turn a realization into a major change of action?',
      matchingPairs: [
        { left: 'realized that no one else was going to believe in his call', right: 'presents a conclusion reached from the situation and uses future-in-the-past for an expected outcome' },
        { left: 'he decided to emigrate', right: 'turns that conclusion into an explicit decision' },
        { left: 'He left his people and traveled with his wife Sarah and Lot to Egypt', right: 'moves from decision to concrete action through coordinated past verbs' },
        { left: 'After Egypt, Abraham traveled to Palestine and settled there', right: 'marks the next stage of the journey and a new settled state' },
      ],
      correctAnswer: {
        'realized that no one else was going to believe in his call': 'presents a conclusion reached from the situation and uses future-in-the-past for an expected outcome',
        'he decided to emigrate': 'turns that conclusion into an explicit decision',
        'He left his people and traveled with his wife Sarah and Lot to Egypt': 'moves from decision to concrete action through coordinated past verbs',
        'After Egypt, Abraham traveled to Palestine and settled there': 'marks the next stage of the journey and a new settled state',
      },
      explanation: 'The paragraph develops as realization → decision → movement → resettlement. “Was going to believe” is viewed from a past moment, while the simple past carries the actual sequence forward.',
      feedback: { correct: 'Correct. You tracked how viewpoint and tense choices organize a major transition.', incorrect: 'Look for the sentence that reports the conclusion first, then the decision, then the actions that follow it.' },
    },
    {
      id: 'abraham-b2-language-25-distributed-action',
      type: 'multiple-choice',
      title: 'Read Parallel Action Across Places',
      instructions: 'Choose the best analysis of how the sentence organizes repeated mission-related action.',
      question: 'What is the main discourse effect of “He called people to believe in Allah wherever he traveled, judged fairly between people, and guided them to truth and righteousness”?',
      options: [
        'It presents three parallel actions as a continuing pattern across changing locations, with “wherever” widening the scope beyond one place.',
        'It describes three unrelated events that happened only once in Palestine.',
        'It mainly expresses uncertainty about whether Abraham performed any of these actions.',
      ],
      correctAnswer: 0,
      explanation: '“Wherever” gives the first action open spatial scope, while the coordinated verbs “called”, “judged”, and “guided” build a compact profile of recurring activity.',
      feedback: { correct: 'Correct. The sentence compresses a repeated pattern into parallel actions with wide spatial scope.', incorrect: 'Focus on the effect of “wherever” and on why the three past-tense verbs are coordinated in one sentence.' },
    },
    {
      id: 'abraham-b2-language-25-background-time',
      type: 'matching',
      title: 'Separate Background from Main Events',
      instructions: 'Match each form with the time relationship it creates.',
      question: 'How does the chapter layer earlier background, accumulated time and later events?',
      matchingPairs: [
        { left: 'She had been given an Egyptian woman, Hajar, as a servant', right: 'places an earlier completed event before the later family developments being narrated' },
        { left: 'Abraham had aged and his hair was gray after many years spent in calling people to Allah', right: 'summarizes accumulated change over a long period before the later decision about marriage' },
        { left: 'Sarah thought she could not have a child', right: 'reports her viewpoint at that later point in the narrative' },
        { left: 'Hajar gave birth to her first son, Ishmael', right: 'returns to a main event that advances the storyline' },
      ],
      correctAnswer: {
        'She had been given an Egyptian woman, Hajar, as a servant': 'places an earlier completed event before the later family developments being narrated',
        'Abraham had aged and his hair was gray after many years spent in calling people to Allah': 'summarizes accumulated change over a long period before the later decision about marriage',
        'Sarah thought she could not have a child': 'reports her viewpoint at that later point in the narrative',
        'Hajar gave birth to her first son, Ishmael': 'returns to a main event that advances the storyline',
      },
      explanation: 'The text does not move in one flat tense sequence. Past perfect supplies earlier background, while simple past reports viewpoint and advances the main events.',
      feedback: { correct: 'Correct. You distinguished prior background from later narrative events.', incorrect: 'Ask which events were already complete before Sarah’s later thought and the birth of Ishmael.' },
    },
    {
      id: 'abraham-b2-language-25-production',
      type: 'reflection',
      title: 'Write a Coherent Change-of-Plan Narrative',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about someone who changes plans after realizing an expected outcome will not happen. Use one past-viewpoint future form such as “was going to” or “would”, one explicit decision phrase, at least two coordinated action verbs, one “wherever/whenever” clause to widen scope, one past-perfect sentence for earlier background, and one consequence connector such as “therefore” or “so”. Keep the paragraph coherent rather than listing grammar examples.',
      question: 'Can you control viewpoint, background and consequence in one connected B2 narrative?',
      correctAnswer: null,
      explanation: 'A strong response should distinguish what had happened earlier, what the person realized at a later moment, what decision followed, and how the new actions developed across time or place.',
      feedback: { correct: 'Check that your tense choices show clear time relationships and that each connector advances the discourse.', incorrect: '' },
      discussionPrompts: [
        { question: 'Background — What had already happened before the person changed plans?', mode: 'Individual' },
        { question: 'Viewpoint — What outcome did the person realize was not going to happen?', mode: 'Pair' },
        { question: 'Decision — What explicit choice followed that realization?', mode: 'Pair' },
        { question: 'Scope — Which action continued wherever or whenever the person moved?', mode: 'Individual' },
      ],
    },
  ],
};
