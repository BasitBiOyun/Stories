import type { Exercise } from '../../../../types';

/** Chapter 23 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter23: Record<number, Exercise[]> = {
  23: [
    {
      id: 'abraham-b2-language-23-stance-focus',
      type: 'matching',
      title: 'Track Claim, Attitude and Information Focus',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the chapter frame status, attitude and authority before the debate itself?',
      matchingPairs: [
        { left: 'those who declared themselves as gods', right: 'distances the narrator from a self-made claim by presenting it as something people declared about themselves' },
        { left: 'he thought that his claim to be god could not be questioned', right: 'reports Nimrod’s belief while the passive modal foregrounds the claimed immunity of the idea itself' },
        { left: 'Still a young man, Abraham was put on trial', right: 'compresses background information and foregrounds the unequal situation he faced' },
        { left: 'Even his father was not on his side; he was on the king’s side', right: 'uses contrast and “even” to intensify Abraham’s isolation before the argument begins' },
      ],
      correctAnswer: {
        'those who declared themselves as gods': 'distances the narrator from a self-made claim by presenting it as something people declared about themselves',
        'he thought that his claim to be god could not be questioned': 'reports Nimrod’s belief while the passive modal foregrounds the claimed immunity of the idea itself',
        'Still a young man, Abraham was put on trial': 'compresses background information and foregrounds the unequal situation he faced',
        'Even his father was not on his side; he was on the king’s side': 'uses contrast and “even” to intensify Abraham’s isolation before the argument begins',
      },
      explanation: 'The paragraph builds the power imbalance through reported attitude, passive focus, compressed background and contrast before moving into direct debate.',
      feedback: { correct: 'Correct. You identified how stance and information focus shape the scene.', incorrect: 'Look at whose viewpoint is being reported and which part of each sentence is foregrounded.' },
    },
    {
      id: 'abraham-b2-language-23-time-cause',
      type: 'matching',
      title: 'Build Time and Cause Relations',
      instructions: 'Match each structure with the relation it creates.',
      question: 'How does the chapter organize earlier events, later reactions and the reason for the dispute?',
      matchingPairs: [
        { left: 'When King Nimrod heard that Abraham had emerged from the fire unharmed...', right: 'places an earlier completed event inside the cause of a later reaction' },
        { left: 'he was filled with rage', right: 'presents the emotional result of the preceding information' },
        { left: 'because Allah had given him the kingdom', right: 'marks the reason attached to the dispute in the quoted source' },
        { left: 'The king called up two men sentenced to death. He freed one and the other was put to death.', right: 'moves from general claim to a concrete staged example through sequential actions' },
      ],
      correctAnswer: {
        'When King Nimrod heard that Abraham had emerged from the fire unharmed...': 'places an earlier completed event inside the cause of a later reaction',
        'he was filled with rage': 'presents the emotional result of the preceding information',
        'because Allah had given him the kingdom': 'marks the reason attached to the dispute in the quoted source',
        'The king called up two men sentenced to death. He freed one and the other was put to death.': 'moves from general claim to a concrete staged example through sequential actions',
      },
      explanation: 'The chapter layers chronology and causality rather than listing facts: past perfect looks back, the reaction follows, “because” marks reason, and the final sequence illustrates a claim through actions.',
      feedback: { correct: 'Correct. You tracked chronology, cause and exemplification.', incorrect: 'Ask which event happened first, what reaction followed, and which phrase explicitly gives a reason.' },
    },
    {
      id: 'abraham-b2-language-23-parallel-claims',
      type: 'multiple-choice',
      title: 'Read Parallel Claims Carefully',
      instructions: 'Choose the analysis that best explains the effect of the repeated wording.',
      question: 'What is the main discourse effect of placing “My Lord is He Who gives life and causes death” beside “I give life and cause death”?',
      options: [
        'The repeated wording creates a surface parallel between two claims, allowing the reader to compare how the same language is being used with different intended meanings.',
        'The repetition proves that the two speakers are making exactly the same kind of claim with exactly the same scope.',
        'The second sentence is only a grammatical paraphrase and has no argumentative function in the dialogue.',
      ],
      correctAnswer: 0,
      explanation: 'The close verbal parallel is argumentative: it invites comparison between two uses of the same life-and-death language without collapsing them into identical meanings.',
      feedback: { correct: 'Correct. You recognized the argumentative value of parallel wording.', incorrect: 'Focus on why the chapter places nearly identical wording in two different speakers’ mouths.' },
    },
    {
      id: 'abraham-b2-language-23-production',
      type: 'reflection',
      title: 'Write a Claim-and-Counterclaim Exchange',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story disagreement in which one person presents an important claim and another person responds using closely parallel wording. Include one reported-attitude clause such as “she thought that...”, one passive modal such as “could not be questioned”, one past-perfect clause inside a “when” sentence, one explicit reason with “because”, one contrast with “even”, “still”, or a semicolon, and one pair of deliberately parallel claims. Make clear that similar wording does not automatically mean identical scope or meaning.',
      question: 'Can you use stance, chronology, cause, contrast and parallel wording to build a coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should show who holds each viewpoint, order the events clearly, explain why the disagreement occurs, and use parallel wording as an argumentative device rather than as empty repetition.',
      feedback: { correct: 'Check that your parallel claims are genuinely comparable but not automatically equivalent in meaning.', incorrect: '' },
      discussionPrompts: [
        { question: 'Stance — Whose belief or assumption is being reported?', mode: 'Individual' },
        { question: 'Chronology — What earlier event needs a past-perfect form?', mode: 'Pair' },
        { question: 'Cause — What explicit reason drives the disagreement?', mode: 'Pair' },
        { question: 'Parallel wording — How can two speakers use similar words for different claims?', mode: 'Individual' },
      ],
    },
  ],
};
