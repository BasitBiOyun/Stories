import type { Exercise } from '../../../../types';

/** Chapter 20 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter20: Record<number, Exercise[]> = {
  20: [
    {
      id: 'abraham-b2-language-20-inference-contrast',
      type: 'matching',
      title: 'Track Inference, Recognition and Resistance',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the language move from logical inference to recognition, then to refusal to admit the conclusion?',
      matchingPairs: [
        { left: 'it must be the culprit', right: 'expresses a strong inference presented as the unavoidable conclusion of the test' },
        { left: 'In fact, they realized the stupidity of their beliefs', right: 'states the narrator’s explicit evaluation of their internal recognition' },
        { left: 'however, their arrogance would not allow them to admit their foolishness', right: 'uses concession and past modal language to contrast recognition with refusal' },
        { left: 'They had no answer for Abraham', right: 'marks the collapse of their argumentative response before the move to coercion' },
      ],
      correctAnswer: {
        'it must be the culprit': 'expresses a strong inference presented as the unavoidable conclusion of the test',
        'In fact, they realized the stupidity of their beliefs': 'states the narrator’s explicit evaluation of their internal recognition',
        'however, their arrogance would not allow them to admit their foolishness': 'uses concession and past modal language to contrast recognition with refusal',
        'They had no answer for Abraham': 'marks the collapse of their argumentative response before the move to coercion',
      },
      explanation: 'The paragraph does more than report events. It first presents an inference, then an explicit recognition, and finally a contrast between recognizing a conclusion and being willing to admit it.',
      feedback: { correct: 'Correct. You distinguished inference, recognition, concession and refusal.', incorrect: 'Look for the strength of “must”, the evaluative role of “In fact”, and the reversal introduced by “however”.' },
    },
    {
      id: 'abraham-b2-language-20-limitation-authority',
      type: 'matching',
      title: 'Read Limitation, Decision and Authority',
      instructions: 'Match each form with the kind of control or narrowing it expresses.',
      question: 'Which structures show that argument is replaced by limited options, collective decision and imposed authority?',
      matchingPairs: [
        { left: 'All they could do was use their authority as tyrants', right: 'narrows the group’s response to one coercive option after argument fails' },
        { left: 'They agreed that Abraham should be burned alive', right: 'reports a collective decision using “should” inside a that-clause' },
        { left: 'They decided to throw Abraham into the biggest fire they could build', right: 'uses “decided to” to move from judgment to planned action' },
        { left: 'All the citizens were ordered to gather wood', right: 'uses passive voice to foreground the imposed command rather than the individual commander' },
      ],
      correctAnswer: {
        'All they could do was use their authority as tyrants': 'narrows the group’s response to one coercive option after argument fails',
        'They agreed that Abraham should be burned alive': 'reports a collective decision using “should” inside a that-clause',
        'They decided to throw Abraham into the biggest fire they could build': 'uses “decided to” to move from judgment to planned action',
        'All the citizens were ordered to gather wood': 'uses passive voice to foreground the imposed command rather than the individual commander',
      },
      explanation: 'The language shifts from debate to institutional action. Limitation, reported decision, infinitive planning and passive command together build a discourse of coercive authority.',
      feedback: { correct: 'Correct. You tracked how grammar marks narrowing, planning and imposed authority.', incorrect: 'Focus on “could do”, “agreed that”, “decided to”, and the passive form “were ordered”.' },
    },
    {
      id: 'abraham-b2-language-20-preparation-purpose',
      type: 'multiple-choice',
      title: 'Reconstruct the Preparation Chain',
      instructions: 'Choose the sequence that best represents how the chapter’s language organizes the punishment plan.',
      question: 'Which discourse chain best reflects the movement from decision to organized preparation?',
      options: [
        'Recognition but refusal → coercive decision → passive public order → repeated preparation over several days → pit and fuel → catapult for the intended action → Abraham placed and restrained',
        'Historical uncertainty → source qualification → comparison of traditions → private reflection',
        'Request for information → apology → negotiated compromise → cancellation of the punishment',
      ],
      correctAnswer: 0,
      explanation: 'The chapter organizes the punishment as an escalating preparation sequence. Passive command and purpose language help show how individual anger becomes collective, organized action.',
      feedback: { correct: 'Correct. You identified the chapter’s decision-to-preparation discourse architecture.', incorrect: 'Follow the movement from the decision, through public orders and preparation, to the catapult and restraint.' },
    },
    {
      id: 'abraham-b2-language-20-production',
      type: 'reflection',
      title: 'Write Recognition Without Admission',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a group recognizes that an argument is weak but refuses to admit it. Use “must” for a strong inference, “in fact” to state recognition, “however” to mark resistance, and a narrowing structure such as “all they could do was...”. Then report a collective decision with “agreed that” or “decided to”, include one passive command, and finish with a purpose phrase such as “to...” or “for...”. Do not retell the Abraham story.',
      question: 'Can you build a coherent B2 paragraph in which inference, concession, authority and purpose each perform a different discourse function?',
      correctAnswer: null,
      explanation: 'A strong response should clearly separate what the group recognizes from what it is willing to admit, then show how the language shifts from reasoning to authority and organized action.',
      feedback: { correct: 'Check that “must” signals inference, “however” creates a genuine reversal, the passive hides or backgrounds the commander, and the final purpose expression explains the action.', incorrect: '' },
      discussionPrompts: [
        { question: 'Inference — What conclusion “must” follow from the evidence?', mode: 'Individual' },
        { question: 'Concession — What does the group recognize, and what does “however” show it refuses to admit?', mode: 'Pair' },
        { question: 'Authority — What is the only response left, and how will you report the decision?', mode: 'Pair' },
        { question: 'Purpose — What action is ordered, and for what intended purpose?', mode: 'Individual' },
      ],
    },
  ],
};
