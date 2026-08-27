import type { Exercise } from '../../../../types';

/** Chapter 30 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter30: Record<number, Exercise[]> = {
  30: [
    {
      id: 'abraham-b2-language-30-event-result',
      type: 'matching',
      title: 'Build an Event → Immediate Result Chain',
      instructions: 'Match each expression with the discourse job it performs.',
      question: 'How does the chapter turn separate actions into a rapid cause-and-result sequence?',
      matchingPairs: [
        { left: 'The angel hit the ground with his heel, and water immediately flowed out', right: 'links an initiating action with an immediate visible result' },
        { left: 'Hajar quickly made a small basin around the water to stop it from spreading', right: 'adds a purposeful response through an infinitive of purpose' },
        { left: 'Not long after that, the tribe of Jurham ... stopped by the valley', right: 'moves the narrative forward while keeping the time gap limited' },
        { left: 'They had seen the unusual sight of a bird ... which could only mean the presence of water', right: 'uses earlier evidence to explain the tribe’s later decision' },
      ],
      correctAnswer: {
        'The angel hit the ground with his heel, and water immediately flowed out': 'links an initiating action with an immediate visible result',
        'Hajar quickly made a small basin around the water to stop it from spreading': 'adds a purposeful response through an infinitive of purpose',
        'Not long after that, the tribe of Jurham ... stopped by the valley': 'moves the narrative forward while keeping the time gap limited',
        'They had seen the unusual sight of a bird ... which could only mean the presence of water': 'uses earlier evidence to explain the tribe’s later decision',
      },
      explanation: 'The paragraph develops through action → result → purposeful response → later movement explained by prior evidence. This keeps the episode coherent without simply listing events.',
      feedback: { correct: 'Correct. You traced result, purpose, time progression and explanatory background.', incorrect: 'Look for what happens immediately, why Hajar acts, how the story moves forward, and which earlier sign explains the tribe’s choice.' },
    },
    {
      id: 'abraham-b2-language-30-reference-time',
      type: 'multiple-choice',
      title: 'Control Reference Across Time',
      instructions: 'Choose the reformulation that best preserves reference and time relationships.',
      question: 'Which version keeps the future plan, continuing present relevance and earlier evidence distinct?',
      options: [
        'The angel identifies the place as the future site of the House that Ishmael and his father will build. The narrator then says that Zamzam continues to flow to this day. Later, Jurham stop near the valley because they had already seen a bird whose movement suggested water.',
        'The angel says the House has already been built, Zamzam flowed only in the past, and Jurham see the bird after they settle in the valley.',
        'The chapter treats the future building, the present-day well and the tribe’s earlier observation as one event happening at the same time.',
      ],
      correctAnswer: 0,
      explanation: 'The chapter layers three time perspectives: a future building plan, continuing relevance in the narrator’s present, and prior evidence that explains a later tribal action.',
      feedback: { correct: 'Correct. You preserved future, continuing present relevance and past-perfect background.', incorrect: 'Separate what is still future in the angel’s speech, what continues “to this day,” and what the tribe had already observed.' },
    },
    {
      id: 'abraham-b2-language-30-inference',
      type: 'matching',
      title: 'Distinguish Observation from Inference',
      instructions: 'Match the language with its evidential role.',
      question: 'How does the final sentence move from a visible sign to an inferred conclusion?',
      matchingPairs: [
        { left: 'the unusual sight of a bird flying in its direction', right: 'the directly observed sign' },
        { left: 'which could only mean', right: 'the language that marks a strong inference from the sign' },
        { left: 'the presence of water', right: 'the conclusion drawn from the observation' },
        { left: 'They had seen...', right: 'the past-perfect background that places the evidence before the later stop in the valley' },
      ],
      correctAnswer: {
        'the unusual sight of a bird flying in its direction': 'the directly observed sign',
        'which could only mean': 'the language that marks a strong inference from the sign',
        'the presence of water': 'the conclusion drawn from the observation',
        'They had seen...': 'the past-perfect background that places the evidence before the later stop in the valley',
      },
      explanation: 'B2 readers should distinguish what is observed from what is inferred. Here the bird is the evidence; water is the conclusion, and “could only mean” marks the strength of that inference.',
      feedback: { correct: 'Correct. You separated evidence, inference marker, conclusion and time background.', incorrect: 'Ask what the tribe actually sees and what they conclude from it.' },
    },
    {
      id: 'abraham-b2-language-30-production',
      type: 'reflection',
      title: 'Write from Sign to Settlement',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a discovery that changes what people do next. Include one action with an immediate result, one purpose phrase with “to...”, one future-in-view statement with “will”, one continuing-present expression such as “still/to this day”, one later-time marker such as “not long after/later”, one past-perfect background sentence, and one clearly marked inference from observable evidence using “could mean / suggested / indicated”. Do not present the inference as if it were the original observation.',
      question: 'Can you connect action, purpose, time shifts, evidence and inference in one coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should move coherently from an initiating event through purpose and time shifts to an evidence-based inference that motivates a later action.',
      feedback: { correct: 'Check that your paragraph separates what happened, what was intended, what continues, what had happened earlier, and what was inferred.', incorrect: '' },
      discussionPrompts: [
        { question: 'Trigger — What event creates an immediate visible change?', mode: 'Individual' },
        { question: 'Purpose — What does someone do in response, and why?', mode: 'Pair' },
        { question: 'Evidence — What can later observers actually see?', mode: 'Pair' },
        { question: 'Inference — What conclusion do they draw, and which phrase makes it clear that this is an inference?', mode: 'Individual' },
      ],
    },
  ],
};
