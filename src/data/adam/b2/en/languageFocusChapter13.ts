import type { Exercise } from '../../../../types';

/** Chapter 13 only — authored from the English story text, not from the Arabic version. */
export const adamB2LanguageFocusChapter13: Record<number, Exercise[]> = {
  13: [
    {
      id: 'adam-b2-language-13-concession-contrast',
      type: 'matching',
      title: 'Track Concession and Contrast',
      instructions: 'Match each Chapter 13 expression with the discourse relationship it creates.',
      question: 'How does the chapter organise opposing attitudes without simply repeating who is good or bad?',
      matchingPairs: [
        { left: 'although Qabil had the intention to kill, Habil did not adopt an aggressive attitude', right: 'concedes one threatening fact before foregrounding a contrasting response' },
        { left: 'At first glance, Qabil’s rebellious attitude may seem unacceptable. However, it is important to remember...', right: 'moves from an initial judgement to a broader reflection that qualifies the discussion' },
        { left: 'This contrasted sharply with his brother who was arrogant, selfish, and disobedient', right: 'sets two character patterns against each other explicitly' },
        { left: 'Habil did not fear his brother’s threats, but also he did not want his brother to be hurt', right: 'holds two attitudes together that might otherwise seem contradictory' },
      ],
      correctAnswer: {
        'although Qabil had the intention to kill, Habil did not adopt an aggressive attitude': 'concedes one threatening fact before foregrounding a contrasting response',
        'At first glance, Qabil’s rebellious attitude may seem unacceptable. However, it is important to remember...': 'moves from an initial judgement to a broader reflection that qualifies the discussion',
        'This contrasted sharply with his brother who was arrogant, selfish, and disobedient': 'sets two character patterns against each other explicitly',
        'Habil did not fear his brother’s threats, but also he did not want his brother to be hurt': 'holds two attitudes together that might otherwise seem contradictory',
      },
      explanation: 'The chapter uses concession and contrast to organise moral tension: it acknowledges one fact, shifts perspective, compares patterns and holds two attitudes together.',
      feedback: {
        correct: 'Correct. You identified four different contrast relationships rather than treating every contrast marker as equivalent.',
        incorrect: 'Ask whether each expression concedes, reframes, compares, or combines two apparently competing ideas.',
      },
    },
    {
      id: 'adam-b2-language-13-modal-stance',
      type: 'multiple-choice',
      title: 'Read Possibility Without Overclaiming',
      instructions: 'Choose the analysis that best reflects the wording of the chapter.',
      question: 'What do “may seem unacceptable” and “People can be jealous, selfish, greedy, and even damaging and harmful” contribute to the paragraph?',
      options: [
        'They mark evaluation and human possibility rather than claiming that every person necessarily behaves in those ways.',
        'They state that all human beings inevitably become jealous, selfish, greedy, and harmful.',
        'They remove any moral responsibility because possibility means actions cannot be controlled.',
      ],
      correctAnswer: 0,
      explanation: '“May seem” softens an initial evaluation, while “can be” presents capacities or possibilities. The following discussion of controlling thoughts and actions keeps responsibility in view.',
      feedback: {
        correct: 'Correct. The modal language describes possibility and viewpoint without turning them into universal certainty.',
        incorrect: 'Separate what the text presents as possible from what it presents as necessary or unavoidable.',
      },
    },
    {
      id: 'adam-b2-language-13-purpose-condition',
      type: 'matching',
      title: 'Follow Purpose, Advice and Consequence',
      instructions: 'Match each expression with its role in the final part of the chapter.',
      question: 'How does the final paragraph move from intention to advice and then to consequence?',
      matchingPairs: [
        { left: 'Hoping to lessen the hatred in his brother', right: 'frames the purpose or intended effect behind Habil’s speech' },
        { left: 'It is better that you repent to Allah and forget about your foolish threat.', right: 'presents a recommended alternative course of action' },
        { left: 'But if you do not, then I will leave the matter in the hands of Allah.', right: 'uses a condition to organise what will follow if the advice is rejected' },
        { left: 'You alone will bear the consequence of your sin.', right: 'places responsibility for the resulting action on the person who chooses it' },
      ],
      correctAnswer: {
        'Hoping to lessen the hatred in his brother': 'frames the purpose or intended effect behind Habil’s speech',
        'It is better that you repent to Allah and forget about your foolish threat.': 'presents a recommended alternative course of action',
        'But if you do not, then I will leave the matter in the hands of Allah.': 'uses a condition to organise what will follow if the advice is rejected',
        'You alone will bear the consequence of your sin.': 'places responsibility for the resulting action on the person who chooses it',
      },
      explanation: 'The paragraph is structured as a purposeful intervention: intended effect → advice → rejected-advice condition → consequence and responsibility.',
      feedback: {
        correct: 'Correct. You followed the logic of the speech rather than only identifying individual forms.',
        incorrect: 'Read the final speech as a sequence: why speak, what alternative is recommended, what if it is rejected, and who bears the result?',
      },
    },
    {
      id: 'adam-b2-language-13-production',
      type: 'reflection',
      title: 'Build a Qualified Conflict-Response Paragraph',
      instructions: 'Write or say an 8–10 sentence B2 paragraph about a non-story conflict. Do not retell Chapter 13. Begin with a concession using “although”, “even if”, or an equivalent expression. Use one modal expression such as “may”, “can”, or “might” to describe a possibility without presenting it as certainty. State the purpose of one response, recommend an alternative action, and finish with an if-clause that makes a consequence or responsibility clear. Keep the paragraph coherent rather than listing target forms.',
      question: 'Can you use concession, modal stance, purpose and condition-consequence language to explain a measured response to conflict?',
      correctAnswer: null,
      explanation: 'A strong B2 response uses these resources to control viewpoint and logic: acknowledge tension, avoid overclaiming, explain intention, propose an alternative and make consequences explicit.',
      feedback: {
        correct: 'Keep the modal claim genuinely possible rather than certain, and make the final condition follow logically from the advice.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Concession — What difficult fact will you acknowledge before presenting the response?', mode: 'Individual' },
        { question: 'Stance — Which claim should be presented as possible rather than certain?', mode: 'Individual' },
        { question: 'Purpose — What result is the responder trying to achieve?', mode: 'Pair' },
        { question: 'Condition — What happens if the recommended alternative is rejected?', mode: 'Pair' },
      ],
    },
  ],
};
