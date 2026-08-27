import type { Exercise } from '../../../../types';

/** Chapter 19 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter19: Record<number, Exercise[]> = {
  19: [
    {
      id: 'abraham-b2-language-19-voice-condition',
      type: 'matching',
      title: 'Track Voice, Challenge and Condition',
      instructions: 'Match each expression with the discourse function it performs in the public exchange.',
      question: 'How do direct speech and conditional language turn the confrontation into a test of the people’s own assumptions?',
      matchingPairs: [
        { left: 'Are you the one who did this to our gods, O Abraham?', right: 'opens the public accusation through direct questioning' },
        { left: 'But it was this biggest of them that did it.', right: 'uses corrective contrast to redirect attention toward the surviving idol' },
        { left: 'Ask them, if they can speak.', right: 'sets a conditional test whose logic depends on the idols’ supposed ability' },
        { left: 'You certainly know that these do not speak.', right: 'states the people’s own admission and makes the contradiction explicit' },
      ],
      correctAnswer: {
        'Are you the one who did this to our gods, O Abraham?': 'opens the public accusation through direct questioning',
        'But it was this biggest of them that did it.': 'uses corrective contrast to redirect attention toward the surviving idol',
        'Ask them, if they can speak.': 'sets a conditional test whose logic depends on the idols’ supposed ability',
        'You certainly know that these do not speak.': 'states the people’s own admission and makes the contradiction explicit',
      },
      explanation: 'The exchange develops through accusation, corrective redirection, a conditional test, and finally an explicit admission. The grammar serves the argument rather than merely reporting events.',
      feedback: { correct: 'Correct. You followed how the dialogue itself creates the logical test.', incorrect: 'Look for accusation, redirection, the condition introduced by “if”, and the people’s own admission.' },
    },
    {
      id: 'abraham-b2-language-19-reversal-purpose',
      type: 'matching',
      title: 'Read Reversal and Intended Purpose',
      instructions: 'Match each phrase with the relationship it creates in the discourse.',
      question: 'Which forms show temporary recognition, reversal, and deliberate purpose?',
      matchingPairs: [
        { left: 'Then they turned to one another...', right: 'marks a moment of inward reconsideration after the conditional test' },
        { left: 'You yourselves are the wrongdoers.', right: 'expresses a temporary self-correction in the group’s judgment' },
        { left: 'But they reverted to their old ideas...', right: 'signals reversal from recognition back to the previous position' },
        { left: '...so that he could demonstrate to them in public...', right: 'states the intended purpose of accepting the public confrontation' },
      ],
      correctAnswer: {
        'Then they turned to one another...': 'marks a moment of inward reconsideration after the conditional test',
        'You yourselves are the wrongdoers.': 'expresses a temporary self-correction in the group’s judgment',
        'But they reverted to their old ideas...': 'signals reversal from recognition back to the previous position',
        '...so that he could demonstrate to them in public...': 'states the intended purpose of accepting the public confrontation',
      },
      explanation: 'The paragraph briefly moves toward recognition, then reverses through “but”. The purpose clause explains why Abraham does not resist the public trial: the event becomes an opportunity for demonstration.',
      feedback: { correct: 'Correct. You distinguished reconsideration, reversal and purpose.', incorrect: 'Track where the group changes direction, then where “but” reverses that movement and “so that” explains purpose.' },
    },
    {
      id: 'abraham-b2-language-19-discourse-sequence',
      type: 'multiple-choice',
      title: 'Reconstruct the Argumentative Sequence',
      instructions: 'Choose the sequence that best reflects how the chapter’s language develops the confrontation.',
      question: 'Which discourse sequence best captures the chapter’s progression without turning it into a simple comprehension retelling?',
      options: [
        'Public accusation → corrective redirection → conditional test → temporary self-recognition → reversal → rhetorical challenge → public demonstration',
        'Private reflection → unrelated quotation → punishment → apology → agreement',
        'Narrator certainty → historical qualification → future prediction → comparison',
      ],
      correctAnswer: 0,
      explanation: 'The language moves through a tightly organized public argument. Each step changes the stance or logical pressure of the exchange rather than merely adding another event.',
      feedback: { correct: 'Correct. You identified the chapter’s discourse architecture.', incorrect: 'Follow how each speech move increases pressure on the contradiction before the public demonstration.' },
    },
    {
      id: 'abraham-b2-language-19-production',
      type: 'reflection',
      title: 'Build a Public Contradiction Test',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a public claim is tested. Begin with a direct accusation or challenge, use a corrective contrast such as “but”, introduce a conditional test with “if”, show a brief moment of self-correction, then reverse that movement with a contrast marker. Include a purpose clause with “so that” and end with a rhetorical question that exposes the contradiction. Do not retell the Abraham story.',
      question: 'Can you use dialogue, condition, reversal and purpose to build a coherent B2 argument?',
      correctAnswer: null,
      explanation: 'A strong response should make the language do argumentative work: the condition tests the claim, the reversal shows a change in stance, the purpose clause explains the speaker’s strategy, and the final rhetorical question crystallizes the contradiction.',
      feedback: { correct: 'Check that every connector changes the relationship between ideas and that the final question is rhetorical, not a request for unknown information.', incorrect: '' },
      discussionPrompts: [
        { question: 'Challenge — What direct question opens the confrontation?', mode: 'Individual' },
        { question: 'Condition — What “if” test forces the claim to face its own logic?', mode: 'Pair' },
        { question: 'Reversal — Where does the audience briefly reconsider, and what contrast marker shows that they reverse course?', mode: 'Pair' },
        { question: 'Purpose — Why does the speaker continue the public exchange, and how will “so that” express that?', mode: 'Individual' },
      ],
    },
  ],
};
