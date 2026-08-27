import type { Exercise } from '../../../../types';

/** Chapter 27 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter27: Record<number, Exercise[]> = {
  27: [
    {
      id: 'abraham-b2-language-27-absence-accumulation',
      type: 'matching',
      title: 'Read Accumulated Absence',
      instructions: 'Match each expression with the discourse effect it creates.',
      question: 'How does the opening sentence build the sense of a completely barren setting before the dialogue begins?',
      matchingPairs: [
        { left: 'no fruit, no trees, no food, no water', right: 'accumulates several absences to intensify the description of scarcity' },
        { left: 'and no sign of life', right: 'widens the list from individual missing resources to a total impression of lifelessness' },
        { left: 'left them with a skin of water and a leather bag full of dates', right: 'contrasts the barren environment with the limited supplies they actually have' },
        { left: 'As Abraham began walking away, leaving them behind', right: 'moves from static setting into action while keeping the separation in focus' },
      ],
      correctAnswer: {
        'no fruit, no trees, no food, no water': 'accumulates several absences to intensify the description of scarcity',
        'and no sign of life': 'widens the list from individual missing resources to a total impression of lifelessness',
        'left them with a skin of water and a leather bag full of dates': 'contrasts the barren environment with the limited supplies they actually have',
        'As Abraham began walking away, leaving them behind': 'moves from static setting into action while keeping the separation in focus',
      },
      explanation: 'The chapter first piles up repeated negatives, then shifts into movement. That sequencing makes the setting feel severe before Hajar reacts to what is happening.',
      feedback: { correct: 'Correct. You identified how repetition, contrast and movement shape the opening.', incorrect: 'Look at what the repeated “no” items do together, then notice when the paragraph changes from description to action.' },
    },
    {
      id: 'abraham-b2-language-27-dialogue-reasoning',
      type: 'multiple-choice',
      title: 'Track Question, Answer and Inference',
      instructions: 'Choose the best analysis of how the dialogue changes Hajar’s understanding.',
      question: 'What discourse progression is created by “Has Allah commanded you to leave us here?” → “Yes” → “I am leaving you to Allah’s care” → “since Allah is with us”?',
      options: [
        'A direct question establishes the source of the decision, the answer confirms it, and the final “since” clause gives the reason for Hajar’s reassurance.',
        'The exchange mainly reports four unrelated facts without changing anyone’s interpretation of the situation.',
        'The final clause expresses uncertainty because “since” weakens the reason that came before it.',
      ],
      correctAnswer: 0,
      explanation: 'The dialogue moves from uncertainty to confirmation and then to a reasoned response. “Since” explicitly links reassurance to the belief expressed in the clause that follows.',
      feedback: { correct: 'Correct. The sequence is question → confirmation → interpretation → reason.', incorrect: 'Ask what information the question seeks, what “Yes” confirms, and why the final sentence begins with “since”.' },
    },
    {
      id: 'abraham-b2-language-27-correction-endpoint',
      type: 'matching',
      title: 'Follow Correction and Movement',
      instructions: 'Match each expression with its function in the later part of the chapter.',
      question: 'How does the paragraph correct an initial interpretation and then move Abraham out of sight?',
      matchingPairs: [
        { left: 'was not acting on his own decision; Allah had commanded him', right: 'corrects one possible interpretation and replaces it with the stated cause' },
        { left: 'had commanded him', right: 'uses past perfect to place the command before the visible act of leaving' },
        { left: 'advanced as far as the upper parts of Mecca', right: 'marks continued movement toward a spatial endpoint' },
        { left: 'a place where they could not see him', right: 'uses a relative clause to define the location by what was no longer possible from there' },
      ],
      correctAnswer: {
        'was not acting on his own decision; Allah had commanded him': 'corrects one possible interpretation and replaces it with the stated cause',
        'had commanded him': 'uses past perfect to place the command before the visible act of leaving',
        'advanced as far as the upper parts of Mecca': 'marks continued movement toward a spatial endpoint',
        'a place where they could not see him': 'uses a relative clause to define the location by what was no longer possible from there',
      },
      explanation: 'The text first reframes the reason for Abraham’s action, then uses spatial progression and a defining relative clause to complete the movement away from Hajar and Ishmael.',
      feedback: { correct: 'Correct. You separated causal correction, earlier command and spatial endpoint.', incorrect: 'Notice the contrast between “not...” and the clause after it, then track how “as far as” and “where” organize the location.' },
    },
    {
      id: 'abraham-b2-language-27-production',
      type: 'reflection',
      title: 'Write from Uncertainty to Reassurance',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult relocation, separation or responsibility. Begin with an accumulated description using at least three coordinated negatives or limitations. Add a background-to-reaction structure such as “As/While ... , ...”, include one direct or reported question that clarifies the reason for an action, one reason clause with “since” or “because”, one corrective contrast using “not ...; rather/but ...”, and one endpoint/location clause with “as far as”, “until”, or “where”. Keep the paragraph coherent and show a clear change from uncertainty to a more informed response.',
      question: 'Can you use setting, dialogue, causal reasoning and movement to build one connected B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should use the language forms to move the reader through stages: difficult setting → uncertainty → clarification → reasoned response → spatial or narrative endpoint.',
      feedback: { correct: 'Check that each connector changes the relationship between ideas, rather than merely decorating separate sentences.', incorrect: '' },
      discussionPrompts: [
        { question: 'Setting — Which repeated limitations make the situation difficult?', mode: 'Individual' },
        { question: 'Clarification — What question reveals the real reason for the action?', mode: 'Pair' },
        { question: 'Correction — Which first interpretation must be replaced by a more accurate one?', mode: 'Pair' },
        { question: 'Endpoint — How will you mark the final place or stage of the movement?', mode: 'Individual' },
      ],
    },
  ],
};
