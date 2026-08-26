import type { Exercise } from '../../../../types';

/** Chapter 16 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter16: Record<number, Exercise[]> = {
  16: [
    {
      id: 'abraham-b2-language-16-dialogue-structure',
      type: 'matching',
      title: 'Track the Argument Through Dialogue',
      instructions: 'Match each move in the exchange with the discourse function it performs. Do not answer the chapter comprehension question; focus on how the argument develops.',
      question: 'How does the dialogue move from inherited practice to a different basis for judgement?',
      matchingPairs: [
        { left: 'What do you worship?', right: 'opens the topic by making the object of worship explicit' },
        { left: 'Do they hear you... Or do they benefit you, or harm you?', right: 'tests the claimed status through observable ability' },
        { left: 'But we found our ancestors doing so.', right: 'shifts the defence from evidence to inherited practice' },
        { left: 'Have you considered what you worship...?', right: 'reframes the issue by asking the listeners to evaluate the practice itself' },
      ],
      correctAnswer: {
        'What do you worship?': 'opens the topic by making the object of worship explicit',
        'Do they hear you... Or do they benefit you, or harm you?': 'tests the claimed status through observable ability',
        'But we found our ancestors doing so.': 'shifts the defence from evidence to inherited practice',
        'Have you considered what you worship...?': 'reframes the issue by asking the listeners to evaluate the practice itself',
      },
      explanation: 'The exchange develops through questioning, testing, an appeal to tradition, and then a reframing that changes the basis of judgement.',
      feedback: { correct: 'Correct. You traced the discourse moves rather than retelling the event.', incorrect: 'Look at what each line does to the direction of the argument.' },
    },
    {
      id: 'abraham-b2-language-16-relative-chain',
      type: 'matching',
      title: 'Follow the Relative-Clause Chain',
      instructions: 'Match each repeated “He who...” clause with the type of relationship it adds to the paragraph. Focus on cohesion and accumulation.',
      question: 'What is the effect of repeating “He who...” across several clauses?',
      matchingPairs: [
        { left: 'He who created me, and guides me', right: 'links origin with continuing direction' },
        { left: 'He who feeds me, and waters me', right: 'adds continuing provision in parallel form' },
        { left: 'He who makes me die, and then revives me', right: 'extends the chain across a sequence of opposite states' },
        { left: 'He who, I hope, will forgive my sins...', right: 'keeps the parallel structure while adding the speaker’s stance through “I hope”' },
      ],
      correctAnswer: {
        'He who created me, and guides me': 'links origin with continuing direction',
        'He who feeds me, and waters me': 'adds continuing provision in parallel form',
        'He who makes me die, and then revives me': 'extends the chain across a sequence of opposite states',
        'He who, I hope, will forgive my sins...': 'keeps the parallel structure while adding the speaker’s stance through “I hope”',
      },
      explanation: 'The repeated relative-clause frame creates cohesion and cumulative force. The last clause also changes the stance by inserting hope rather than presenting every statement in exactly the same way.',
      feedback: { correct: 'Correct. You identified both cohesion and the shift in stance.', incorrect: 'Notice what remains parallel and where the speaker’s attitude changes.' },
    },
    {
      id: 'abraham-b2-language-16-exception-stance',
      type: 'multiple-choice',
      title: 'Read Exception and Stance Precisely',
      instructions: 'Choose the interpretation that best preserves both the contrast and the speaker’s degree of commitment.',
      question: 'What do “They are enemies to me, but not so the Lord of the Worlds” and “I hope, will forgive my sins” contribute together?',
      options: [
        'They combine a strong exclusion/contrast with a later expression of personal hope, so the paragraph does not use one uniform level of stance throughout.',
        'They make every claim equally tentative because “I hope” weakens the entire paragraph.',
        'They remove contrast by treating the idols and the Lord as parallel alternatives.',
      ],
      correctAnswer: 0,
      explanation: 'The first expression creates a sharp exception; the later “I hope” marks personal stance locally. B2 reading requires keeping those functions separate rather than flattening them into one certainty level.',
      feedback: { correct: 'Correct. Exception and hope perform different discourse jobs.', incorrect: 'Do not let the local phrase “I hope” change the certainty of every surrounding clause.' },
    },
    {
      id: 'abraham-b2-language-16-production',
      type: 'reflection',
      title: 'Build a Cohesive Evaluation Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story practice, policy, technology or social habit. Begin with one question that identifies the practice, add two questions that test it through observable effects, include one sentence reporting an inherited or conventional justification, then reframe the issue with “Have you considered...?” or a natural equivalent. Build a three-part relative-clause chain using “which/that/who” to define a stronger alternative. Include one clear exception with “except” or “but not...”, and one local stance marker such as “I hope”, “I expect”, or “it seems”. End with a reasoned conclusion. Do not retell the Abraham story.',
      question: 'Can you combine dialogue moves, relative-clause cohesion, exception and stance in one controlled B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should move logically from questioning to evaluation, use repeated clause structure for cohesion, and keep strong claims separate from local stance markers.',
      feedback: { correct: 'Check that each language choice contributes to the argument and that your stance markers apply only where intended.', incorrect: '' },
      discussionPrompts: [
        { question: 'Testing — What two observable effects could you question?', mode: 'Individual' },
        { question: 'Convention — What inherited or conventional justification could someone give?', mode: 'Individual' },
        { question: 'Cohesion — What three linked relative clauses can define the stronger alternative?', mode: 'Pair' },
        { question: 'Stance — Which statement is firm, and which one should be marked as hope, expectation or interpretation?', mode: 'Pair' },
      ],
    },
  ],
};
