import type { Exercise } from '../../../../types';

/** Chapter 3 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'abraham-b2-language-3-discourse-movement',
      type: 'matching',
      title: 'Track the Discourse Movement',
      instructions: 'Match each expression with the job it performs in the chapter’s argument.',
      question: 'How does the chapter move from continuity to contrast and then to a wider conclusion?',
      matchingPairs: [
        { left: 'In fact', right: 'strengthens and foregrounds the opening claim' },
        { left: 'However, later on', right: 'marks a turn from the earlier state to a contrasting later development' },
        { left: 'like Judaism and Christianity', right: 'adds a comparison that places the change in a wider pattern' },
        { left: 'As the last faith', right: 'frames the final sentence as a broader concluding perspective' },
      ],
      correctAnswer: {
        'In fact': 'strengthens and foregrounds the opening claim',
        'However, later on': 'marks a turn from the earlier state to a contrasting later development',
        'like Judaism and Christianity': 'adds a comparison that places the change in a wider pattern',
        'As the last faith': 'frames the final sentence as a broader concluding perspective',
      },
      explanation: 'The chapter is not a list of facts. It uses discourse markers to organise continuity, later change, comparison and conclusion.',
      feedback: {
        correct: 'Correct. You followed how the connectors organise the chapter’s argument.',
        incorrect: 'Look for which phrase strengthens a claim, which introduces contrast, which compares, and which frames the conclusion.',
      },
    },
    {
      id: 'abraham-b2-language-3-relative-scope',
      type: 'multiple-choice',
      title: 'Read Evaluation with Its Limits',
      instructions: 'Choose the most accurate analysis of the wording.',
      question: 'What is important about the phrase “Christianity, which was the least corrupted religion at that time”?',
      options: [
        'The relative clause adds an evaluation, while “at that time” limits the evaluation to the period described rather than making it timeless.',
        'The clause makes a universal claim about Christianity in every period of history.',
        'The phrase is only giving the geographic location of Damascus.',
      ],
      correctAnswer: 0,
      explanation: 'At B2 level, readers should notice both the information added by a relative clause and the scope created by time expressions. The wording belongs to the chapter’s presentation and should not be expanded beyond it.',
      feedback: {
        correct: 'Correct. You preserved both the evaluative relative clause and its time boundary.',
        incorrect: 'Pay attention to what “which was...” adds and what “at that time” prevents you from overgeneralising.',
      },
    },
    {
      id: 'abraham-b2-language-3-time-layering',
      type: 'matching',
      title: 'Layer Events in Time',
      instructions: 'Match each form with the temporal relationship it creates in the Varaka–Bilal episode.',
      question: 'How does the chapter control the reader’s movement through simultaneous and successive events?',
      matchingPairs: [
        { left: 'When the first revelation came...', right: 'sets a completed event as the time frame for Varaka’s response' },
        { left: 'while he was in the desert', right: 'places one ongoing situation around another event' },
        { left: 'At that moment', right: 'focuses attention on the exact point in the scene' },
        { left: 'Hearing his words', right: 'compresses the cause/time link between hearing and Varaka’s reply' },
      ],
      correctAnswer: {
        'When the first revelation came...': 'sets a completed event as the time frame for Varaka’s response',
        'while he was in the desert': 'places one ongoing situation around another event',
        'At that moment': 'focuses attention on the exact point in the scene',
        'Hearing his words': 'compresses the cause/time link between hearing and Varaka’s reply',
      },
      explanation: 'The episode combines full time clauses, an ongoing background and a reduced participial clause. These choices keep the narrative compact while making event relationships clear.',
      feedback: {
        correct: 'Correct. You identified how the narrative layers background, event, focus and immediate response.',
        incorrect: 'Ask whether each form provides background, sets a time frame, zooms in on a moment, or compresses a response relationship.',
      },
    },
    {
      id: 'abraham-b2-language-3-production',
      type: 'reflection',
      title: 'Build a Coherent Contrast-and-Extension Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story belief, tradition, institution or idea that changed over time while keeping some continuity. Use one strengthening marker such as “in fact”, one clear contrast such as “however”, one time-layering structure with “when” or “while”, one relative clause that adds a limited evaluation, and one “not only... but also...” structure to widen the final point. Keep any evaluation carefully limited by time or context. Do not retell Chapter 3.',
      question: 'Can you use discourse markers, time relations, relative clauses and additive scope to organise a nuanced B2 explanation?',
      correctAnswer: null,
      explanation: 'A strong response should show controlled progression: establish a point, mark change, locate events in time, add a qualified description, and widen the conclusion without overclaiming.',
      feedback: {
        correct: 'Check that each connector has a real discourse purpose and that your relative-clause evaluation is limited to the context you actually describe.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Continuity — What remains stable across the period you describe?', mode: 'Individual' },
        { question: 'Contrast — Where does a real change occur, and which connector makes it clear?', mode: 'Individual' },
        { question: 'Qualification — Which evaluation needs a time or context limit?', mode: 'Pair' },
        { question: 'Extension — What wider point can you add naturally with “not only... but also...”?', mode: 'Pair' },
      ],
    },
  ],
};
