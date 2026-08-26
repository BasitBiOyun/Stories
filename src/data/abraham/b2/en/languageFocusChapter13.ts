import type { Exercise } from '../../../../types';

/** Chapter 13 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter13: Record<number, Exercise[]> = {
  13: [
    {
      id: 'abraham-b2-language-13-purpose-chain',
      type: 'matching',
      title: 'Track Purpose Through the Paragraph',
      instructions: 'Match each expression with the purpose relationship it creates. Focus on why the action is presented, not on recalling the story event.',
      question: 'How does the paragraph connect action to intended result?',
      matchingPairs: [
        { left: 'to advise his father against this evil', right: 'states the immediate purpose of Abraham’s action as a son' },
        { left: 'so that his father could be saved', right: 'expresses the hoped-for result of that advice' },
        { left: 'in that way, he hoped to increase fatherly love', right: 'links a communicative choice to its intended interpersonal effect' },
        { left: 'before his father got angry', right: 'places the explanation strategically before a possible reaction' },
      ],
      correctAnswer: {
        'to advise his father against this evil': 'states the immediate purpose of Abraham’s action as a son',
        'so that his father could be saved': 'expresses the hoped-for result of that advice',
        'in that way, he hoped to increase fatherly love': 'links a communicative choice to its intended interpersonal effect',
        'before his father got angry': 'places the explanation strategically before a possible reaction',
      },
      explanation: 'The text does more than sequence actions. It explains motive, intended outcome, interpersonal strategy, and timing.',
      feedback: { correct: 'Correct. You traced how purpose and timing organise the interaction.', incorrect: 'Ask whether the phrase gives motive, hoped-for result, interpersonal effect, or timing.' },
    },
    {
      id: 'abraham-b2-language-13-negative-parallelism',
      type: 'multiple-choice',
      title: 'Read Parallel Negatives as Argument',
      instructions: 'Choose the interpretation that best explains the effect of the repeated negatives.',
      question: 'What is the discourse effect of “could not hear, see, or protect him” and “can neither hear, nor see, nor benefit you in any way”?',
      options: [
        'The repeated negative structure accumulates several limitations and strengthens one argument through parallel form.',
        'The structure presents three unrelated facts with no argumentative connection.',
        'The negatives soften the criticism by making the limitations sound uncertain.',
      ],
      correctAnswer: 0,
      explanation: 'Parallel negatives accumulate evidence. Repetition gives the critique rhythm, cohesion, and argumentative force.',
      feedback: { correct: 'Correct. The parallel structure builds cumulative force.', incorrect: 'Notice that each negative adds another limitation to the same argument.' },
    },
    {
      id: 'abraham-b2-language-13-knowledge-guidance',
      type: 'matching',
      title: 'Follow the Logic Inside the Direct Speech',
      instructions: 'Match each quoted expression with its communicative function. Do not answer the theological content; analyse how the speech develops its appeal.',
      question: 'How does the speech move from evidence to invitation, warning and consequence?',
      matchingPairs: [
        { left: 'there has come to me knowledge that never came to you', right: 'establishes a reason for the speaker to offer guidance without simply claiming status' },
        { left: 'So follow me, and I will guide you along a straight way.', right: 'turns the knowledge claim into an invitation and promised direction' },
        { left: 'do not worship Satan', right: 'shifts from explanation to a direct warning or prohibition' },
        { left: 'I fear that a punishment ... will afflict you', right: 'frames a possible consequence as concern rather than a detached prediction' },
      ],
      correctAnswer: {
        'there has come to me knowledge that never came to you': 'establishes a reason for the speaker to offer guidance without simply claiming status',
        'So follow me, and I will guide you along a straight way.': 'turns the knowledge claim into an invitation and promised direction',
        'do not worship Satan': 'shifts from explanation to a direct warning or prohibition',
        'I fear that a punishment ... will afflict you': 'frames a possible consequence as concern rather than a detached prediction',
      },
      explanation: 'The speech develops through a structured sequence: basis for guidance → invitation → warning → feared consequence.',
      feedback: { correct: 'Correct. You identified the function of each stage in the appeal.', incorrect: 'Track what each line is doing to the listener: justify, invite, warn, or express concern.' },
    },
    {
      id: 'abraham-b2-language-13-production',
      type: 'reflection',
      title: 'Design a Respectful Persuasion Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which one person tries to persuade someone they respect without humiliating them. Include one purpose clause with “so that”, one connector such as “in that way” to explain an interpersonal effect, one parallel negative structure such as “neither... nor...”, one invitation or recommendation, and one carefully framed possible consequence using language such as “I’m concerned that...” or “I fear that...”. Do not retell the Abraham story.',
      question: 'Can you organise B2 persuasion so that purpose, evidence, respect and consequence work together coherently?',
      correctAnswer: null,
      explanation: 'A strong response should use language choices to manage both argument and relationship, rather than producing isolated grammar examples.',
      feedback: { correct: 'Check that your wording explains both what the speaker wants and how the speaker protects the relationship.', incorrect: '' },
      discussionPrompts: [
        { question: 'Purpose — What change does the speaker hope for, and why?', mode: 'Individual' },
        { question: 'Relationship — Which wording avoids embarrassment or attack?', mode: 'Individual' },
        { question: 'Evidence — What two or three parallel limitations or reasons strengthen the case?', mode: 'Pair' },
        { question: 'Consequence — How can you frame risk as concern rather than aggression?', mode: 'Pair' },
      ],
    },
  ],
};
