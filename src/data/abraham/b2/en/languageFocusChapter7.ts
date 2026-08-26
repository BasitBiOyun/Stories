import type { Exercise } from '../../../../types';

/** Chapter 7 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    {
      id: 'abraham-b2-language-7-reasoning-chain',
      type: 'matching',
      title: 'Follow the Reasoning Chain',
      instructions: 'Match each clause with the role it plays in Abraham’s reasoning. Focus on how the chapter moves from observation to evaluation rather than simply retelling events.',
      question: 'How does the chapter build an argument from what Abraham observes?',
      matchingPairs: [
        { left: 'He realized these statues were lifeless, silent, and entirely helpless', right: 'states the central observation on which the later judgement is based' },
        { left: 'when they fell, they could not get back up', right: 'adds concrete evidence of inability' },
        { left: 'It was impossible to understand how people could believe...', right: 'moves from evidence to a strong evaluation of the belief' },
        { left: 'as if those lifeless idols were capable of hearing their prayers', right: 'highlights the contradiction between observed reality and people’s behaviour' },
      ],
      correctAnswer: {
        'He realized these statues were lifeless, silent, and entirely helpless': 'states the central observation on which the later judgement is based',
        'when they fell, they could not get back up': 'adds concrete evidence of inability',
        'It was impossible to understand how people could believe...': 'moves from evidence to a strong evaluation of the belief',
        'as if those lifeless idols were capable of hearing their prayers': 'highlights the contradiction between observed reality and people’s behaviour',
      },
      explanation: 'The paragraph develops an argument: observation comes first, concrete evidence strengthens it, evaluation follows, and the “as if” clause exposes the gap between reality and behaviour.',
      feedback: {
        correct: 'Correct. You traced the chapter’s observation → evidence → evaluation → contradiction sequence.',
        incorrect: 'Ask whether each clause observes, proves, evaluates, or contrasts appearance with reality.',
      },
    },
    {
      id: 'abraham-b2-language-7-modality-possibility',
      type: 'multiple-choice',
      title: 'Interpret Possibility and Ability',
      instructions: 'Choose the reformulation that best preserves the chapter’s use of “could” without turning every occurrence into the same meaning.',
      question: 'Which version best distinguishes mental possibility from physical ability?',
      options: [
        'Abraham could not understand how a reasonable person could worship what he had made; meanwhile, the statues themselves could not stand up, harm, benefit, or hear. The first use concerns what seems conceivable, while the others concern actual ability.',
        'Every use of “could” in the chapter means exactly the same thing: permission granted by another person.',
        'The chapter uses “could” only to describe uncertain future events and never to discuss ability or plausibility.',
      ],
      correctAnswer: 0,
      explanation: 'B2 reading requires interpreting modal meaning in context. “How ... could” questions plausibility or conceivability, while “could not get back up / could harm or benefit” concerns ability or capacity.',
      feedback: {
        correct: 'Correct. You distinguished contextual meanings of the same modal form.',
        incorrect: 'Look at what follows each “could”: is the text judging whether an idea makes sense, or whether something has the power to act?',
      },
    },
    {
      id: 'abraham-b2-language-7-relative-as-if-change',
      type: 'matching',
      title: 'Build Viewpoint and Change',
      instructions: 'Match each structure with its discourse effect. Focus on how the chapter embeds background, presents an unreal-looking comparison, and marks a change in attitude over time.',
      question: 'How do relative clauses and contrast markers shape Abraham’s viewpoint?',
      matchingPairs: [
        { left: 'Abraham, who used to go to the temple with his father when he was a child', right: 'embeds relevant childhood background inside the main sentence' },
        { left: 'as if those lifeless idols were capable of hearing their prayers', right: 'presents people’s behaviour as though an impossible condition were true' },
        { left: 'At first, Abraham thought the sight was funny', right: 'establishes the earlier stage of his emotional response' },
        { left: 'but later his feelings turned into anger', right: 'marks a clear contrast and development from the earlier response' },
      ],
      correctAnswer: {
        'Abraham, who used to go to the temple with his father when he was a child': 'embeds relevant childhood background inside the main sentence',
        'as if those lifeless idols were capable of hearing their prayers': 'presents people’s behaviour as though an impossible condition were true',
        'At first, Abraham thought the sight was funny': 'establishes the earlier stage of his emotional response',
        'but later his feelings turned into anger': 'marks a clear contrast and development from the earlier response',
      },
      explanation: 'The chapter combines embedded background, an “as if” viewpoint structure, and temporal contrast to show not just what Abraham saw, but how his interpretation and feelings developed.',
      feedback: {
        correct: 'Correct. You identified how grammar organizes viewpoint, background and emotional development.',
        incorrect: 'Notice which structure inserts background, which creates an unreal comparison, and which marks before-versus-later change.',
      },
    },
    {
      id: 'abraham-b2-language-7-production',
      type: 'reflection',
      title: 'Write an Observation-to-Evaluation Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone notices a contradiction between evidence and behaviour or belief. Include: one observation with three linked qualities, one concrete example introduced by “when” or “if”, one use of “could” for plausibility and one for ability, one relative clause that embeds background, one “as if” clause that reveals the gap between appearance and reality, and an “at first ... but later ...” change in viewpoint or feeling. Keep the paragraph coherent and evidence-led.',
      question: 'Can you move from observation to evidence, evaluation, contradiction and changed viewpoint in a coherent B2 paragraph?',
      correctAnswer: null,
      explanation: 'A strong response should use the target structures to organize reasoning. The grammar should help the reader see how evidence leads to judgement and how the writer’s viewpoint develops.',
      feedback: {
        correct: 'Check that your paragraph has a visible reasoning chain and that the two uses of “could” perform different functions.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Observation — What three qualities or facts will form the basis of your judgement?', mode: 'Individual' },
        { question: 'Evidence — What concrete “when/if” example will make the observation harder to dismiss?', mode: 'Individual' },
        { question: 'Viewpoint — Where can an “as if” clause expose a gap between appearance and reality?', mode: 'Pair' },
        { question: 'Development — How will “at first ... but later ...” show a genuine change rather than simple chronology?', mode: 'Pair' },
      ],
    },
  ],
};
