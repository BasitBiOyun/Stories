import type { Exercise } from '../../../../types';

/** Chapter 14 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter14: Record<number, Exercise[]> = {
  14: [
    {
      id: 'abraham-b2-language-14-condition-threat',
      type: 'matching',
      title: 'Track Condition, Threat and Response',
      instructions: 'Match each expression with the discourse function it performs. Focus on how the language structures pressure and response, not on recalling the event.',
      question: 'How does the passage move from a threatened consequence to Abraham’s own future commitments?',
      matchingPairs: [
        { left: 'If you do not stop this, I will stone you.', right: 'links a condition to a threatened future consequence' },
        { left: 'I will ask my Lord to forgive you', right: 'states a future commitment in response to hostility rather than mirroring the threat' },
        { left: 'I will turn away from you, and from what you pray to instead of Allah', right: 'marks deliberate separation while maintaining control of the speaker’s own action' },
        { left: 'I hope I will not be disappointed in my prayer', right: 'combines future reference with explicitly limited, hopeful stance rather than certainty' },
      ],
      correctAnswer: {
        'If you do not stop this, I will stone you.': 'links a condition to a threatened future consequence',
        'I will ask my Lord to forgive you': 'states a future commitment in response to hostility rather than mirroring the threat',
        'I will turn away from you, and from what you pray to instead of Allah': 'marks deliberate separation while maintaining control of the speaker’s own action',
        'I hope I will not be disappointed in my prayer': 'combines future reference with explicitly limited, hopeful stance rather than certainty',
      },
      explanation: 'Future forms do different jobs here: one threatens, others commit the speaker to chosen actions, and “I hope...” reduces certainty and marks stance.',
      feedback: { correct: 'Correct. You distinguished threat, commitment, separation, and hopeful stance.', incorrect: 'Ask what kind of future meaning each form creates: pressure, commitment, boundary, or hope.' },
    },
    {
      id: 'abraham-b2-language-14-concession-risk',
      type: 'multiple-choice',
      title: 'Read Persistence Against Risk',
      instructions: 'Choose the interpretation that best explains how the paragraph presents determination without pretending the risk is absent.',
      question: 'What is the effect of combining “did not stop him”, “was determined”, and “he knew well that he might face negative consequences”?',
      options: [
        'The paragraph presents persistence as a deliberate choice made with awareness of possible risk.',
        'The paragraph claims there was no real danger, so determination was unnecessary.',
        'The modal “might” makes the entire mission sound imaginary and unrelated to consequences.',
      ],
      correctAnswer: 0,
      explanation: 'The wording balances firmness with uncertainty about consequences. “Might” preserves possibility, while “did not stop” and “was determined” frame action despite that possibility.',
      feedback: { correct: 'Correct. The text combines resolve with risk-awareness.', incorrect: 'Notice the contrast between possible consequences and continued action.' },
    },
    {
      id: 'abraham-b2-language-14-analogy-reasoning',
      type: 'matching',
      title: 'Follow the Analogy as a Reasoning Tool',
      instructions: 'Match each comparison with the reasoning function it contributes. Do not retell the story; analyse why the analogy is used.',
      question: 'How do the doctor and judge comparisons prepare the final statement about questioning?',
      matchingPairs: [
        { left: 'a wise doctor looks for the cause of an illness', right: 'frames questioning as diagnosis before choosing an appropriate response' },
        { left: 'to find the right cure', right: 'shows that discovering cause is linked to a practical purpose' },
        { left: 'a clever judge questions a suspect', right: 'frames questioning as a method for testing claims and evidence' },
        { left: 'to uncover the truth / to reveal the reality of their situation', right: 'states the shared goal that connects both analogies to the final action' },
      ],
      correctAnswer: {
        'a wise doctor looks for the cause of an illness': 'frames questioning as diagnosis before choosing an appropriate response',
        'to find the right cure': 'shows that discovering cause is linked to a practical purpose',
        'a clever judge questions a suspect': 'frames questioning as a method for testing claims and evidence',
        'to uncover the truth / to reveal the reality of their situation': 'states the shared goal that connects both analogies to the final action',
      },
      explanation: 'The analogy is not decorative. It gives the reader a structure for understanding inquiry: identify cause, test evidence, then expose what is really happening.',
      feedback: { correct: 'Correct. You identified how analogy organizes the reasoning process.', incorrect: 'Look for the shared logic across doctor, judge, and final questioning.' },
    },
    {
      id: 'abraham-b2-language-14-production',
      type: 'reflection',
      title: 'Build a Risk-Aware Reasoning Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone continues a difficult course of action despite possible consequences. Include one condition→consequence sentence, two different future commitments using “will”, one cautious possibility with “might”, and one analogy introduced with “just as” that explains why questioning or investigation is useful. End by stating the purpose of the inquiry with “to uncover...”, “to reveal...”, or an equivalent expression. Do not retell the Abraham story.',
      question: 'Can you combine condition, stance, future commitment, risk and analogy into one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should show why the person acts, what risk remains possible, what they commit to doing, and how the analogy clarifies the reasoning process.',
      feedback: { correct: 'Check that each grammar choice contributes to stance, consequence, commitment or reasoning rather than appearing as an isolated example.', incorrect: '' },
      discussionPrompts: [
        { question: 'Condition — What future consequence depends on a present choice?', mode: 'Individual' },
        { question: 'Commitment — Which actions will the person deliberately take?', mode: 'Individual' },
        { question: 'Risk — What might still happen even if the person continues?', mode: 'Pair' },
        { question: 'Analogy — What familiar role or process explains the value of investigation?', mode: 'Pair' },
      ],
    },
  ],
};
