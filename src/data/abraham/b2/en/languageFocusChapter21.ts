import type { Exercise } from '../../../../types';

/** Chapter 21 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter21: Record<number, Exercise[]> = {
  21: [
    {
      id: 'abraham-b2-language-21-contrast-cause',
      type: 'matching',
      title: 'Track Contrast and Cause',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the paragraph contrast what remains visible with what changes, and how does it explain the reason?',
      matchingPairs: [
        { left: 'But his fall into the fire was like going down into a cool garden', right: 'reframes an expected danger as an unexpectedly safe experience' },
        { left: 'The rising flames were still there, but they did not burn him', right: 'contrasts unchanged appearance with changed effect' },
        { left: 'for Allah commanded...', right: 'introduces the stated cause for the surprising result' },
        { left: 'It only burned his ropes', right: 'uses “only” to restrict the fire’s effect to one limited outcome' },
      ],
      correctAnswer: {
        'But his fall into the fire was like going down into a cool garden': 'reframes an expected danger as an unexpectedly safe experience',
        'The rising flames were still there, but they did not burn him': 'contrasts unchanged appearance with changed effect',
        'for Allah commanded...': 'introduces the stated cause for the surprising result',
        'It only burned his ropes': 'uses “only” to restrict the fire’s effect to one limited outcome',
      },
      explanation: 'The chapter repeatedly separates appearance from effect. “But” creates reversal, “for” gives the reason, and “only” narrows the result.',
      feedback: { correct: 'Correct. You tracked reversal, cause and restriction.', incorrect: 'Look at what “but”, “for”, and “only” contribute beyond the events themselves.' },
    },
    {
      id: 'abraham-b2-language-21-passive-change',
      type: 'matching',
      title: 'Follow Event Focus and State Change',
      instructions: 'Match each form with the way it organizes information.',
      question: 'Which structures foreground the event or the resulting state rather than the human actor?',
      matchingPairs: [
        { left: 'Abraham was thrown into the fire', right: 'uses passive voice to foreground Abraham and the event rather than the people who launched the catapult' },
        { left: 'The catapult was shot', right: 'uses passive voice to foreground the action at the turning point of the narrative' },
        { left: 'It became cool and safe for Abraham', right: 'presents a change from one state to another' },
        { left: 'the fire was turned into coolness', right: 'uses passive change-of-state language to foreground the resulting condition' },
      ],
      correctAnswer: {
        'Abraham was thrown into the fire': 'uses passive voice to foreground Abraham and the event rather than the people who launched the catapult',
        'The catapult was shot': 'uses passive voice to foreground the action at the turning point of the narrative',
        'It became cool and safe for Abraham': 'presents a change from one state to another',
        'the fire was turned into coolness': 'uses passive change-of-state language to foreground the resulting condition',
      },
      explanation: 'Passive forms shift attention away from the human agent, while “became” and “was turned into” organize the paragraph around transformation and result.',
      feedback: { correct: 'Correct. You distinguished event focus from change-of-state language.', incorrect: 'Ask what information is foregrounded in each passive and what new state is created.' },
    },
    {
      id: 'abraham-b2-language-21-comparison',
      type: 'multiple-choice',
      title: 'Interpret the Comparison',
      instructions: 'Choose the interpretation that best explains the function of “as if”.',
      question: 'What does “he sat in the middle of the fire as if he were sitting in a garden” do in the discourse?',
      options: [
        'It marks a comparison between the actual location and the experience it resembled, using an unreal comparison to emphasize the contrast.',
        'It states literally that the fire had physically become a garden with trees and plants.',
        'It introduces uncertainty about whether Abraham was really in the fire at all.',
      ],
      correctAnswer: 0,
      explanation: '“As if he were...” creates an unreal or counterfactual comparison. The location remains the fire, but the experience is compared with sitting safely in a garden.',
      feedback: { correct: 'Correct. The comparison intensifies the contrast without changing the literal location.', incorrect: 'Separate the literal event from the comparison used to describe its effect.' },
    },
    {
      id: 'abraham-b2-language-21-production',
      type: 'reflection',
      title: 'Write Appearance Versus Effect',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which something still looks dangerous, difficult, or negative but its actual effect changes. Use “but” for a genuine reversal, one passive sentence to foreground an event, “for” or “because” to explain a cause, “only” to restrict an effect, one “as if” comparison, and one change-of-state form such as “became” or “was turned into”. Do not retell the Abraham story.',
      question: 'Can you build a coherent B2 paragraph that separates appearance, cause, limited effect, comparison and resulting state?',
      correctAnswer: null,
      explanation: 'A strong response should make the contrast meaningful: the visible situation may remain similar while its consequence changes, and each connector or structure should perform a distinct discourse function.',
      feedback: { correct: 'Check that “but” reverses an expectation, the passive foregrounds the event, “only” narrows the result, and “as if” remains a comparison rather than a literal claim.', incorrect: '' },
      discussionPrompts: [
        { question: 'Appearance — What still looks unchanged?', mode: 'Individual' },
        { question: 'Reversal — What actual effect is different?', mode: 'Pair' },
        { question: 'Cause — What explains the change?', mode: 'Pair' },
        { question: 'Comparison — What “as if” image can describe the new experience without becoming a literal claim?', mode: 'Individual' },
      ],
    },
  ],
};
