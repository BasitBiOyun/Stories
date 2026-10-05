import type { Exercise } from '../../../../types';

/**
 * Manually authored Moses B1 Language Focus (Chapters 1–2). Each chapter follows
 * Notice → Build → Use; every quoted line is taken from the English chapter.
 */
export const mosesB1LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'moses-b1-language-1-time-frame',
      type: 'drag-drop',
      title: 'Setting the Time or Moving It On?',
      instructions: 'Put each time phrase in the right group.',
      question: 'Does it give a time in history, or move the story on?',
      dragDropGroups: [
        {
          group: 'Places the story in history',
          items: ['in the 13th century BC', 'over 3000 years ago', 'At that time, the Pharaoh ruled Egypt.'],
        },
        {
          group: 'Moves the story on',
          items: ['Years passed', 'One day the Pharaoh had a dream.'],
        },
      ],
      correctAnswer: {
        'Places the story in history': ['in the 13th century BC', 'over 3000 years ago', 'At that time, the Pharaoh ruled Egypt.'],
        'Moves the story on': ['Years passed', 'One day the Pharaoh had a dream.'],
      },
      explanation: '“In the 13th century BC” and “over 3000 years ago” date the story; “ago” counts back from today. “At that time” points back to that same period and describes the situation in Egypt. “Years passed” jumps over a long period, and “One day” moves the story to one particular event: The dream.',
      feedback: {
        correct: 'Correct. You separated the expressions that date the story from the ones that move it forward.',
        incorrect: 'Look at the first sentences of Chapter 1, then at the last two. Which expressions give a date or a period, and which ones take us to a later time?',
      },
    },
    {
      id: 'moses-b1-language-1-fear-and-future',
      type: 'transformation',
      title: 'Fear and Forced Work',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say the Pharaoh’s fear and his orders?',
      transformItems: [
        {
          source: 'The Pharaoh feared that this group, which was larger than the Egyptians, would take control of his kingdom.',
          frame: 'The Pharaoh thought, “This group [blank] take control of my kingdom.”',
          answers: ['will', 'is going to', 'might', 'may', 'could'],
        },
        {
          source: 'He made the Children of Israel do dangerous work for little or no money.',
          frame: 'The Children of Israel [blank] do dangerous work for little or no money.',
          answers: ['were made to', 'had to', 'were forced to'],
        },
      ],
      correctAnswer: null,
      explanation: 'In the Pharaoh’s own thoughts, the future is “will”: “This group will take control.” When the narrator reports that fear from a past point of view, “will” moves back to “would”: “feared that this group … would take control”. “Make + person + base verb” (made the Children of Israel do) shows that someone forced others to act. In the passive, “to” comes back: “The Children of Israel were made to do …”.',
      feedback: {
        correct: 'Well done. You moved between the Pharaoh’s fear and his own words, and between “made … do” and “were made to do”.',
        incorrect: 'Think about the Pharaoh’s own words at that moment, and about the fact that the Children of Israel had no choice. Then check the middle of Chapter 1.',
      },
    },
    {
      id: 'moses-b1-language-1-cause-result-power',
      type: 'choose-form',
      title: 'Linking Reason and Result',
      instructions: 'Choose the correct words for each sentence from Chapter 1.',
      question: 'Which words give a result, and which show that something went on?',
      formChoices: [
        {
          sentence: 'They believed in Allah alone, just like their ancestor, Prophet Abraham (pbuh). [choice], they did not believe that the Pharaoh was a god.',
          options: ['Because', 'So', 'Although'],
          answer: 1,
        },
        {
          sentence: 'The Pharaoh feared that this group … would take control of his kingdom. [choice] he was rude and harsh to the Children of Israel.',
          options: ['That’s because', 'Even so,', 'That’s why'],
          answer: 2,
        },
        {
          sentence: 'Years passed and the despotic kings continued [choice] Egypt.',
          options: ['rule', 'to rule', 'to ruling'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: '“So” and “That’s why” both introduce a result. “That’s because” does the opposite: It introduces a reason. In the chapter, the belief and the fear are the reasons; not believing in the Pharaoh and the harsh treatment are the results. “Continue” is followed by “to + base verb” (or an -ing form): “continued to rule” shows that the situation went on for many years.',
      feedback: {
        correct: 'Correct. You linked each reason to its result and showed that the situation continued.',
        incorrect: 'Ask: Is the next idea a reason or a result? Then check the second half of Chapter 1.',
      },
    },
    {
      id: 'moses-b1-language-1-build-context',
      type: 'reflection',
      title: 'A Story from History',
      instructions: 'Write or say five sentences about another time in history.',
      question: 'Can you tell a short story from history?',
      correctAnswer: null,
      explanation: 'A strong answer should create a coherent mini-paragraph rather than isolated sentences. Useful patterns include “At that time...”, “feared that... would...”, “that’s why...”, “made ... + verb”, and “continued to...”.',
      feedback: {
        correct: 'Keep the sentences connected so each one develops the same situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give the time: “At that time, …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say what someone feared: “… feared that … would …”', mode: 'Individual' },
        { question: 'Sentence 3 — Add a result: “so …” or “That’s why …”', mode: 'Individual' },
        { question: 'Sentence 4 — Say what someone made people do: “… made them …”', mode: 'Pair' },
        { question: 'Sentence 5 — Say what went on: “… continued to …”', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'moses-b1-language-2-reporting-prediction',
      type: 'multiple-choice',
      title: 'A Prediction About the Future',
      instructions: 'Read the advisors’ words. Then choose the best answer.',
      question: 'They said, “A boy will be born of the Children of Israel and the Egyptian people will die at this boy’s hands.” What are the advisors doing when they use “will”?',
      options: ['reporting something that has already happened', 'giving the soldiers an order', 'predicting something that they believe is going to happen', 'describing something that happens every year'],
      correctAnswer: 2,
      explanation: '“Will + base verb” is used here for a prediction: the advisors say what they believe is going to happen. “Will be born” is passive, because a baby does not do the action of being born. The prediction leads to the Pharaoh’s order, which uses an imperative with no subject: “Kill …”.',
      feedback: {
        correct: 'Correct. The advisors predict a future event, and the Pharaoh reacts to it.',
        incorrect: 'Ask: Has the boy been born yet when the advisors speak? Check what they said after the Pharaoh woke up.',
      },
    },
    {
      id: 'moses-b1-language-2-sequence-and-command',
      type: 'sequencing',
      title: 'What Happened After the Dream?',
      instructions: 'Put the events from Chapter 2 in order. “When” and “Then” can help.',
      question: 'What happened after the Pharaoh’s dream?',
      sequencingItems: [
        { id: '1', text: 'When he woke up, he called all his advisors and magicians and asked about the dream.' },
        { id: '2', text: 'Then, the Pharaoh told his soldiers, “Kill all the newborn boys of the Children of Israel.”' },
        { id: '3', text: 'His soldiers broke into houses and searched the rooms.' },
        { id: '4', text: 'When they found baby boys, they killed them.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: '“When he woke up” links his first action to the moment the dream ended. “Then” moves the story to the next step: The order. The imperative “Kill …” has no subject because it tells someone what to do. “When they found baby boys, they killed them” shows what happened each time the soldiers found a boy.',
      feedback: {
        correct: 'Correct. The time words guided you from the dream to the soldiers’ actions.',
        incorrect: 'Start with the moment the Pharaoh woke up. Which sentence begins with “Then”? What did the soldiers do before they found the boys? Check the first half of Chapter 2.',
      },
    },
    {
      id: 'moses-b1-language-2-fear-intensity',
      type: 'error-correction',
      title: 'Find and Fix the Mistake',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about the mother’s fear?',
      errorItems: [
        {
          sentence: 'His mother was such frightened that she was unable to sleep at night.',
          error: 'such',
          options: ['so', 'very', 'too'],
          answer: 0,
        },
        {
          sentence: 'She was scared that when Moses cried, the soldiers can hear his voice.',
          error: 'can',
          options: ['will', 'could', 'can be'],
          answer: 1,
        },
        {
          sentence: 'She did not know what doing.',
          error: 'what doing',
          options: ['what do', 'what did', 'what to do'],
          answer: 2,
        },
      ],
      correctAnswer: null,
      explanation: '“So + adjective + that …” links a strong feeling to its result: So frightened that she was unable to sleep. “Such” goes before a noun (such a strong fear). After a past verb like “was scared that”, “can” moves back to “could”. “What to do” (question word + to + base verb) shows that she could not decide on her next action.',
      feedback: {
        correct: 'Well done. You corrected the language of strong feeling, feared possibility and uncertainty.',
        incorrect: 'Compare each sentence with the end of Chapter 2, where Moses’s mother cannot sleep.',
      },
    },
    {
      id: 'moses-b1-language-2-connected-response',
      type: 'reflection',
      title: 'Report a Warning and a Response',
      instructions: 'Write or say five sentences about someone who gets a warning.',
      question: 'What happens after the warning?',
      correctAnswer: null,
      explanation: 'Keep one situation across all five sentences. Useful patterns include “They said that/will...”, a direct imperative, “when...”, “so ... that...”, “was scared that ... could...”, and “did not know what to do”.',
      feedback: {
        correct: 'Make the warning, emotional response, and final action form one connected mini-narrative.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Give the warning: “… warned that … would …”', mode: 'Individual' },
        { question: 'Sentence 2 — Give an order: “Stay … / Close …”', mode: 'Individual' },
        { question: 'Sentence 3 — Move the story on: “When …” or “Then …”', mode: 'Individual' },
        { question: 'Sentence 4 — Show strong fear: “… was so scared that …”', mode: 'Pair' },
        { question: 'Sentence 5 — End with a decision or a call for help.', mode: 'Pair' },
      ],
    },
  ],
};
