import type { Exercise } from '../../../../types';

/** Chapter 6 only — authored from the English story text, not from the Arabic version. */
export const abrahamB2LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    {
      id: 'abraham-b2-language-6-time-background',
      type: 'matching',
      title: 'Layer Time and Background',
      instructions: 'Match each expression with the discourse function it performs. Focus on how the chapter separates the main event line from background and habitual context.',
      question: 'How does Chapter 6 build a childhood frame around individual events?',
      matchingPairs: [
        { left: 'when he was young in age', right: 'places Abraham’s knowledge of Allah inside an early-life time frame' },
        { left: 'During his early childhood', right: 'opens a broader period in which a new realization develops' },
        { left: 'One day', right: 'moves from background into a specific event in the narrative line' },
        { left: 'Being a child', right: 'adds background about Abraham’s state without creating a separate main event' },
      ],
      correctAnswer: {
        'when he was young in age': 'places Abraham’s knowledge of Allah inside an early-life time frame',
        'During his early childhood': 'opens a broader period in which a new realization develops',
        'One day': 'moves from background into a specific event in the narrative line',
        'Being a child': 'adds background about Abraham’s state without creating a separate main event',
      },
      explanation: 'The chapter does not narrate every sentence at the same level. Time expressions establish broader frames, while “One day” advances a specific event and “Being a child” compresses background information into a non-finite clause.',
      feedback: {
        correct: 'Correct. You distinguished broad time framing, event progression and compressed background.',
        incorrect: 'Ask which expressions move the event line forward and which simply tell us when or in what state the event happened.',
      },
    },
    {
      id: 'abraham-b2-language-6-reporting-directives',
      type: 'multiple-choice',
      title: 'Control Reported Speech and Directives',
      instructions: 'Choose the reformulation that preserves the sequence of question, reported answer, observation and command.',
      question: 'Which version best keeps the chapter’s different speech functions distinct?',
      options: [
        'Abraham asked his father what he was making. His father replied that he was making statues of gods. Later, when the father saw Abraham on the statue, he ordered him not to play with it again.',
        'Abraham told his father to make statues, and his father ordered Abraham that the statues were gods.',
        'Abraham asked a question, but the father’s reply and later command are presented as the same kind of speech act.',
      ],
      correctAnswer: 0,
      explanation: 'The chapter uses different reporting patterns for different purposes: “asked ... what”, “replied that ...”, and “ordered ... not to ...”. A precise B2 reformulation preserves both meaning and speech function.',
      feedback: {
        correct: 'Correct. You preserved the distinction between inquiry, reported statement and directive.',
        incorrect: 'Track what each speaker is doing: asking for information, giving information, or issuing a prohibition.',
      },
    },
    {
      id: 'abraham-b2-language-6-comparison-effect',
      type: 'matching',
      title: 'Use Comparison to Build Perspective',
      instructions: 'Match each phrase with the meaning effect it creates in the chapter.',
      question: 'How do comparison and analogy shape Abraham’s perspective on the statues?',
      matchingPairs: [
        { left: 'as people sit on the backs of donkeys', right: 'creates an analogy that treats the statue as an ordinary physical object rather than a divine being' },
        { left: 'It has big ears', right: 'draws attention to a concrete visible feature before evaluating it' },
        { left: 'bigger than ours', right: 'uses comparison to make the observation more pointed and questioning' },
        { left: 'the god of gods', right: 'reports the father’s elevated description, creating a contrast with Abraham’s physical observation' },
      ],
      correctAnswer: {
        'as people sit on the backs of donkeys': 'creates an analogy that treats the statue as an ordinary physical object rather than a divine being',
        'It has big ears': 'draws attention to a concrete visible feature before evaluating it',
        'bigger than ours': 'uses comparison to make the observation more pointed and questioning',
        'the god of gods': 'reports the father’s elevated description, creating a contrast with Abraham’s physical observation',
      },
      explanation: 'Comparison here is not decorative grammar. It helps construct a contrast between the statue’s physical qualities and the status assigned to it by the father.',
      feedback: {
        correct: 'Correct. You identified how comparison supports viewpoint and contrast.',
        incorrect: 'Look beyond form: ask what each comparison makes the reader notice about the difference between physical appearance and claimed status.',
      },
    },
    {
      id: 'abraham-b2-language-6-production',
      type: 'reflection',
      title: 'Build a Childhood Memory with Layered Language',
      instructions: 'Write or say an 8–10 sentence paragraph about a childhood memory or fictional scene outside this story. Use one broad time frame such as “when I was young” or “during my early childhood”, one specific event marker such as “one day”, one non-finite background phrase such as “being a child” or an equivalent structure, one reported question, one reported statement, one directive with “told/ordered + person + (not) to”, and one comparison with “as” or a comparative form. Make the paragraph coherent rather than listing grammar examples.',
      question: 'Can you use time framing, reported interaction and comparison to organise a coherent B2 narrative?',
      correctAnswer: null,
      explanation: 'A strong response should distinguish background from main events, preserve the different functions of reported speech, and use comparison to develop perspective rather than as an isolated sentence pattern.',
      feedback: {
        correct: 'Check that every target form contributes to the narrative flow and that the reported speech functions remain distinct.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Time — Which sentence establishes the broad childhood frame, and which sentence moves to one specific event?', mode: 'Individual' },
        { question: 'Background — What information can you compress into a non-finite phrase instead of another full event sentence?', mode: 'Individual' },
        { question: 'Speech — Which part is a question, which is a statement, and which is a directive?', mode: 'Pair' },
        { question: 'Comparison — What comparison will reveal a viewpoint rather than merely describe size or appearance?', mode: 'Pair' },
      ],
    },
  ],
};
