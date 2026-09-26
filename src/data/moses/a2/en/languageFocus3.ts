import type { Exercise } from '../../../../types';

/**
 * Chapter-specific A2 Language Focus for Moses — Chapters 10–16.
 * Look → Practise → Use. Every quoted sentence comes from the English chapter text.
 */
export const mosesA2LanguageFocusExercisesPart7: Record<number, Exercise[]> = {
  10: [
    {
      id: 'moses-a2-language-10-setting-change',
      type: 'choose-form',
      title: 'It or There?',
      instructions: 'Choose the correct word for each sentence from Chapter 10.',
      question: 'Which words describe the weather, the time and the empty road?',
      formChoices: [
        { sentence: '[choice] was winter.', options: ['There', 'It'], answer: 1 },
        { sentence: '[choice] was nobody on the way.', options: ['There', 'It'], answer: 0 },
        { sentence: 'It was [choice] dark and cold.', options: ['get', 'gets', 'getting'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'Use It was for the season, the weather or the time: It was winter. Use There was to say if something or someone is in a place: There was nobody on the way. It was getting + adjective shows a slow change: it was getting dark.',
      feedback: {
        correct: 'Correct. It for the season, There for nobody on the way, and getting for a slow change.',
        incorrect: 'Read the start of Chapter 10 again. Is the sentence about the season, or about people on the way?',
      },
    },
    {
      id: 'moses-a2-language-10-purpose-future',
      type: 'sentence-building',
      title: 'Moses’s Plan',
      instructions: 'Tap the pieces to build Moses’s words to his family.',
      question: 'Where does the reason (to get warm) go?',
      sentenceChunks: ['“Wait here.', 'I will', 'get some fire', 'to get warm.”'],
      correctAnswer: null,
      explanation: 'Wait here is an instruction. I will + base verb gives Moses’s plan. To + base verb at the end gives the purpose: to get warm.',
      feedback: {
        correct: 'Correct. An instruction, a plan with will, and the purpose with to.',
        incorrect: 'Read what Moses says to his family in Chapter 10. Start with the instruction.',
      },
    },
    {
      id: 'moses-a2-language-10-commands-change',
      type: 'matching',
      title: 'Words from the Mountain',
      instructions: 'Find these words in Chapter 10. Match each one with its meaning.',
      question: 'What do these words from Chapter 10 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'valley', right: 'low land between hills' },
        { left: 'Suddenly', right: 'quickly and with no warning' },
        { left: 'silence', right: 'no sound at all' },
        { left: 'chose', right: 'picked for a special job' },
        { left: 'turned into', right: 'changed and became' },
      ],
      correctAnswer: {
        valley: 'low land between hills',
        Suddenly: 'quickly and with no warning',
        silence: 'no sound at all',
        chose: 'picked for a special job',
        'turned into': 'changed and became',
      },
      explanation: 'Turn into + noun shows a change from one thing to another: the walking stick turned into a big snake. Suddenly shows that something happens with no warning.',
      feedback: {
        correct: 'Correct. You know the key words of the scene on the mountain.',
        incorrect: 'Read Chapter 10 again. Find each word and look at the sentence around it.',
      },
    },
    { id:'moses-a2-language-10-production', type:'reflection', title:'Use It: A Cold Evening', instructions:'Create a new A2 situation using Chapter 10 patterns.', question:'Can you describe changing conditions, give an instruction, state a plan and explain purpose?', correctAnswer:null, explanation:'Use getting + adjective, there is/are, an imperative, will + verb, and to + verb.', feedback:{correct:'Keep the situation new.',incorrect:''}, discussionPrompts:[{question:'Describe one changing condition.',mode:'Individual'},{question:'Give one instruction.',mode:'Pair'},{question:'State what you will do.',mode:'Individual'},{question:'Explain why with to + verb.',mode:'Individual'}] },
  ],
};

export const mosesA2LanguageFocusExercisesPart8: Record<number, Exercise[]> = {
  11: [
    {
      id: 'moses-a2-language-11-command-message',
      type: 'drag-drop',
      title: 'An Instruction or a Story Event?',
      instructions: 'Read the parts of Chapter 11. Put each one in the right group.',
      question: 'Which parts tell Moses what to do, and which parts tell us what happened?',
      dragDropGroups: [
        {
          group: 'Allah tells Moses what to do',
          items: ['Put your hand into your chest.', 'Now take it out.', 'Go to the king'],
        },
        {
          group: 'The story tells what happened',
          items: ['Moses (pbuh) went to Egypt.', 'He met the king and his helpers.', 'The king was sitting on his throne.'],
        },
      ],
      correctAnswer: {
        'Allah tells Moses what to do': ['Put your hand into your chest.', 'Now take it out.', 'Go to the king'],
        'The story tells what happened': ['Moses (pbuh) went to Egypt.', 'He met the king and his helpers.', 'The king was sitting on his throne.'],
      },
      explanation: 'An instruction starts with the base verb and has no subject: Put …, Take …, Go …. The story events have a subject and a past verb: Moses went, He met, The king was sitting.',
      feedback: {
        correct: 'Correct. Base verb with no subject = instruction; subject + past verb = story event.',
        incorrect: 'Look at the first word. Is it a base verb with no subject, or a subject and a past verb?',
      },
    },
    {
      id: 'moses-a2-language-11-change-role',
      type: 'choose-form',
      title: 'A New Role',
      instructions: 'Choose the correct word for each sentence from Chapter 11.',
      question: 'Which past forms complete the sentences?',
      formChoices: [
        { sentence: 'After this message from Allah, Moses [choice] a Messenger of Allah, a prophet.', options: ['become', 'became', 'becomes'], answer: 1 },
        { sentence: 'But they [choice] believe in Allah.', options: ['did not', 'not', 'was not'], answer: 0 },
        { sentence: 'Allah chose Moses and [choice] him His prophet.', options: ['make', 'did', 'made'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'Became + noun shows a change into a new role. Did not + base verb makes a past negative. Made + person + noun also shows a new role: made him His prophet.',
      feedback: {
        correct: 'Correct. Became, did not and made are all past forms.',
        incorrect: 'Read the middle of Chapter 11 again. The story is in the past.',
      },
    },
    {
      id: 'moses-a2-language-11-companion-purpose',
      type: 'word-bank',
      title: 'With Whom? Why?',
      instructions: 'Complete the sentence from Chapter 11. Use the words in the box. Two words are not needed.',
      question: 'Which word shows who went with Moses, and which word shows why he went?',
      fillBlanksText: 'Moses (pbuh) took his brother Harun [blank] him and went to the palace [blank] give the message of Allah.',
      wordBank: ['with', 'to', 'for', 'and'],
      correctAnswer: ['with', 'to'],
      explanation: 'Take + person + with + me/him shows who goes together. To + base verb gives the purpose: to give the message.',
      feedback: {
        correct: 'Correct. With Harun, and to give the message.',
        incorrect: 'Read the end of Chapter 11 again. Before a base verb (give), use to for the purpose.',
      },
    },
    { id:'moses-a2-language-11-production', type:'reflection', title:'Use It: A Small Mission', instructions:'Create a new A2 task using Chapter 11 patterns.', question:'Can you give an instruction, name a companion, explain purpose and describe a change?', correctAnswer:null, explanation:'Use an imperative, take + person + with, go to + place, to + verb, become, or make + person + complement.', feedback:{correct:'Use a new everyday task.',incorrect:''}, discussionPrompts:[{question:'Give one instruction.',mode:'Pair'},{question:'Say who goes with you.',mode:'Individual'},{question:'Explain purpose with to + verb.',mode:'Individual'},{question:'Describe one change.',mode:'Individual'}] },
  ],
};

export const mosesA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  12: [
    {
      id: 'moses-a2-language-12-thought-decision',
      type: 'matching',
      title: 'Words in the Palace',
      instructions: 'Find these words in Chapter 12. Match each one with its meaning.',
      question: 'What do these words from Chapter 12 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'universe', right: 'everything that exists' },
        { left: 'crazy', right: 'not thinking in a normal way' },
        { left: 'miracles', right: 'wonderful signs from Allah' },
        { left: 'made fun of', right: 'said unkind jokes about' },
      ],
      correctAnswer: {
        universe: 'everything that exists',
        crazy: 'not thinking in a normal way',
        miracles: 'wonderful signs from Allah',
        'made fun of': 'said unkind jokes about',
      },
      explanation: 'He thought Moses was crazy: thought + sentence tells us the king’s opinion, not a fact. The chapter shows he was wrong: the stick and the shining hand were miracles of Allah.',
      feedback: {
        correct: 'Correct. You know the key words of the palace scene.',
        incorrect: 'Read Chapter 12 again. Find each word and look at the sentence around it.',
      },
    },
    {
      id: 'moses-a2-language-12-change-sequence',
      type: 'choose-form',
      title: 'Told, Decided To, Can',
      instructions: 'Choose the correct words for each sentence from Chapter 12.',
      question: 'Which verb patterns complete the sentences?',
      formChoices: [
        { sentence: 'Moses (pbuh) [choice] him about Allah.', options: ['said', 'told', 'spoke'], answer: 1 },
        { sentence: 'Moses (pbuh) decided [choice] the miracles.', options: ['to show', 'showing', 'show'], answer: 0 },
        { sentence: '“This is only magic. All of my magicians can [choice] this.”', options: ['to do', 'doing', 'do'], answer: 2 },
      ],
      correctAnswer: null,
      explanation: 'Tell + person + about: told him about Allah (said does not take a person directly). Decided to + base verb shows a choice. Can + base verb (with no to) shows ability.',
      feedback: {
        correct: 'Correct. Told him about, decided to show, can do.',
        incorrect: 'Read Chapter 12 again. Which verb can have “him” right after it? What comes after can?',
      },
    },
    {
      id: 'moses-a2-language-12-purpose-ability',
      type: 'sequencing',
      title: 'The Signs, Step by Step',
      instructions: 'Put the sentences from Chapter 12 in story order.',
      question: 'Which word shows the next step?',
      sequencingItems: [
        { id: '1', text: 'Moses (pbuh) took his walking stick and threw it on the ground.' },
        { id: '2', text: 'The stick turned into a big snake!' },
        { id: '3', text: 'Then he put his arm in his armpit.' },
        { id: '4', text: 'He took his arm out.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'Past verbs give the actions in order. Then shows the next step: after the stick, Moses showed the second sign.',
      feedback: {
        correct: 'Correct. First the stick, then the hand.',
        incorrect: 'Read Chapter 12 again. Look for Then to find the second sign.',
      },
    },
    { id:'moses-a2-language-12-production', type:'reflection', title:'Use It: Show and Explain', instructions:'Create a new A2 example using Chapter 12 patterns.', question:'Can you report a thought, describe a change, explain purpose and state ability?', correctAnswer:null, explanation:'Use thought + clause, decided to, turned into, then, to + verb or can + verb.', feedback:{correct:'Keep the example new and simple.',incorrect:''}, discussionPrompts:[{question:'Report one thought or decision.',mode:'Pair'},{question:'Describe a change.',mode:'Individual'},{question:'Explain one purpose.',mode:'Individual'},{question:'State one ability.',mode:'Individual'}] },
  ],
};

export const mosesA2LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  13: [
    {
      id: 'moses-a2-language-13-arrival-action',
      type: 'drag-drop',
      title: 'Finished or in Progress?',
      instructions: 'Read the parts of Chapter 13. Put each one in the right group.',
      question: 'Which actions were finished, and which actions were in progress?',
      dragDropGroups: [
        {
          group: 'A finished action',
          items: [
            'The magicians came with sticks in their hands.',
            'They put down the sticks and ropes on the ground.',
            'The magicians bowed down in front of Moses (pbuh).',
          ],
        },
        {
          group: 'An action in progress',
          items: ['Some were holding ropes.', 'They were moving like snakes!'],
        },
      ],
      correctAnswer: {
        'A finished action': [
          'The magicians came with sticks in their hands.',
          'They put down the sticks and ropes on the ground.',
          'The magicians bowed down in front of Moses (pbuh).',
        ],
        'An action in progress': ['Some were holding ropes.', 'They were moving like snakes!'],
      },
      explanation: 'The simple past (came, put down, bowed down) tells a finished action. Was/were + verb-ing (were holding, were moving) shows an action in progress at that moment, like a picture of the scene.',
      feedback: {
        correct: 'Correct. Simple past for finished actions, were + -ing for actions in progress.',
        incorrect: 'Look for were + -ing. Those actions were in progress.',
      },
    },
    {
      id: 'moses-a2-language-13-command-change',
      type: 'error-correction',
      title: 'Fix the Past Verb and the Adverb',
      instructions: 'Each sentence has one mistake. Tap the wrong word. Then choose the correct word.',
      question: 'Can you fix an irregular past verb and a word that describes how?',
      errorItems: [
        {
          sentence: 'Moses (pbuh) throwed down his stick and it turned into a huge snake.',
          error: 'throwed',
          options: ['throw', 'threw', 'was throwing'],
          answer: 1,
        },
        {
          sentence: 'His stick quick ate all the snakes of the magicians.',
          error: 'quick',
          options: ['quickly', 'quicker', 'quickest'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'Throw is irregular: throw → threw. To describe how an action happens, use an adverb (often adjective + -ly): quick → quickly.',
      feedback: {
        correct: 'Well done. Threw and quickly.',
        incorrect: 'Read the middle of Chapter 13 again. Throw has an irregular past. Which word tells us how the stick ate?',
      },
    },
    {
      id: 'moses-a2-language-13-reason-continuation',
      type: 'word-bank',
      title: 'Still, Because, Continued To',
      instructions: 'Complete the sentences from Chapter 13. Use the words in the box. Two words are not needed.',
      question: 'Which word shows no change, which gives a reason, and which follows continued?',
      fillBlanksText: 'The king [blank] did not believe in Allah, [blank] he was arrogant. … He continued [blank] harm Moses (pbuh) and his people day and night.',
      wordBank: ['still', 'because', 'to', 'already', 'for'],
      correctAnswer: ['still', 'because', 'to'],
      explanation: 'Still + did not shows that the situation did not change, even after the miracle. Because gives the reason. Continued to + base verb means he did not stop.',
      feedback: {
        correct: 'Correct. Still, because and continued to.',
        incorrect: 'Read the end of Chapter 13 again. Did the king change after the miracle? Why not?',
      },
    },
    { id:'moses-a2-language-13-production', type:'reflection', title:'Use It: A Small Demonstration', instructions:'Create a new A2 situation using Chapter 13 patterns.', question:'Can you describe arrival, give a command, describe change and explain continuation?', correctAnswer:null, explanation:'Use came with, was/were + -ing, an imperative, turned into, quickly, because, still or continued to.', feedback:{correct:'Use a new everyday situation.',incorrect:''}, discussionPrompts:[{question:'Say what someone came with or was holding.',mode:'Pair'},{question:'Give one command.',mode:'Individual'},{question:'Describe one change.',mode:'Individual'},{question:'Add still, because or continued to.',mode:'Individual'}] },
  ],
  14: [
    {
      id: 'moses-a2-language-14-command-plan',
      type: 'true-false',
      title: 'A Plan for the Journey',
      instructions: 'Read Moses’s words from Chapter 14. Is the sentence below true or false?',
      question: 'Moses (pbuh) called his people and said, “Get ready for the journey. We are going away from Egypt.” — When Moses said this, the people were already far away from Egypt.',
      correctAnswer: false,
      explanation: 'Get ready for is an instruction to prepare. We are going away (are + -ing) talks about a plan for the near future. The people had not left yet; they left Egypt at night.',
      feedback: {
        correct: 'Correct. It was a plan: they were getting ready to leave.',
        incorrect: 'Read Chapter 14 again. When did they leave Egypt? Get ready shows they had not left yet.',
      },
    },
    {
      id: 'moses-a2-language-14-obligation-future',
      type: 'matching',
      title: 'Night Journey Words',
      instructions: 'Find these words in Chapter 14. Match each one with its meaning.',
      question: 'What do these words from Chapter 14 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'keep it secret', right: 'tell nobody about it' },
        { left: 'Life became harder', right: 'Things were more difficult' },
        { left: 'caravan', right: 'a group travelling together' },
        { left: 'got tired', right: 'started to need rest' },
        { left: 'rose', right: 'came up in the sky' },
      ],
      correctAnswer: {
        'keep it secret': 'tell nobody about it',
        'Life became harder': 'Things were more difficult',
        caravan: 'a group travelling together',
        'got tired': 'started to need rest',
        rose: 'came up in the sky',
      },
      explanation: 'You must keep it secret: must + base verb shows that something is necessary. The people had to tell nobody about the journey.',
      feedback: {
        correct: 'Correct. You know the key words of the night journey.',
        incorrect: 'Read Chapter 14 again. Find each word and look at the sentence around it.',
      },
    },
    {
      id: 'moses-a2-language-14-ability-time',
      type: 'choose-form',
      title: 'Slowly Through the Night',
      instructions: 'Choose the correct words for each sentence from Chapter 14.',
      question: 'Which words show ability, how something moved, and time?',
      formChoices: [
        { sentence: 'The children and the old [choice] walk fast and got tired very quickly.', options: ['cannot', 'could not', 'did not could'], answer: 1 },
        { sentence: 'Their caravan moved [choice].', options: ['slow', 'slower', 'slowly'], answer: 2 },
        { sentence: '[choice] the sun rose, they arrived at the sea.', options: ['When', 'Because', 'So'], answer: 0 },
      ],
      correctAnswer: null,
      explanation: 'Could not + base verb shows past inability. An adverb (slow + -ly) tells us how the caravan moved. When + past links two past events that happen at the same time.',
      feedback: {
        correct: 'Correct. Could not, slowly and When.',
        incorrect: 'Read the end of Chapter 14 again. The story is in the past. Which word tells us how the caravan moved?',
      },
    },
    { id:'moses-a2-language-14-production', type:'reflection', title:'Use It: Plan a Quiet Trip', instructions:'Create a new A2 journey using Chapter 14 patterns.', question:'Can you give an instruction, state an obligation, make a future plan and describe movement?', correctAnswer:null, explanation:'Use an imperative, get ready for, must, will, could not, slowly/quickly or when.', feedback:{correct:'Use a new travel situation.',incorrect:''}, discussionPrompts:[{question:'Give one preparation instruction.',mode:'Individual'},{question:'State one obligation with must.',mode:'Pair'},{question:'Say what will happen.',mode:'Individual'},{question:'Describe ability or speed.',mode:'Individual'}] },
  ],
};

export const mosesA2LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  15: [
    {
      id: 'moses-a2-language-15-position-reassurance',
      type: 'word-bank',
      title: 'In Front Of, Behind, With',
      instructions: 'Complete the sentences from Chapter 15. Use the words in the box. One word is not needed.',
      question: 'Where were the sea and the army?',
      fillBlanksText: 'The sea was [blank] them. The king and his army were [blank] them. They had no place to escape. But Allah was [blank] them.',
      wordBank: ['in front of', 'behind', 'with', 'between'],
      correctAnswer: ['in front of', 'behind', 'with'],
      explanation: 'In front of and behind show position: the sea was ahead, and the army was at their back. With shows that Allah was helping them.',
      feedback: {
        correct: 'Correct. The sea in front, the army behind, and Allah with them.',
        incorrect: 'Read Chapter 15 again. Where was the sea? Where did the army come from?',
      },
    },
    {
      id: 'moses-a2-language-15-change-result',
      type: 'sequencing',
      title: 'The Sea Opens',
      instructions: 'Put the sentences from Chapter 15 in story order.',
      question: 'What happened after Moses hit the sea?',
      sequencingItems: [
        { id: '1', text: 'He hit the sea and the sea parted!' },
        { id: '2', text: 'The waves became high walls!' },
        { id: '3', text: 'They could see the sandy ground!' },
        { id: '4', text: 'Moses (pbuh) and his people safely walked between the walls of water.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'Became shows a change (waves → walls). Could see shows what was now possible. Safely walked between tells us how and where they moved.',
      feedback: {
        correct: 'Correct. From the first change to the safe walk.',
        incorrect: 'Read the end of Chapter 15 again. Start with Moses hitting the sea.',
      },
    },
    {
      id: 'moses-a2-language-15-safe-movement',
      type: 'error-correction',
      title: 'Fix the Verbs',
      instructions: 'Each sentence has one mistake. Tap the wrong word. Then choose the correct word.',
      question: 'Can you fix the verb after will and an irregular past verb?',
      errorItems: [
        {
          sentence: '“Calm down! Allah … will helps us go to a safe place.”',
          error: 'helps',
          options: ['helping', 'help', 'helped'],
          answer: 1,
        },
        {
          sentence: 'Soon, the king and his soldiers catched up with them!',
          error: 'catched',
          options: ['caught', 'catch', 'catching'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'After will, use the base verb with no -s: will help. Catch is irregular: catch → caught. Catch up with means reach someone who is in front of you.',
      feedback: {
        correct: 'Well done. Will help and caught up with.',
        incorrect: 'Read Chapter 15 again. After will, the verb does not change. Catch has an irregular past.',
      },
    },
    { id:'moses-a2-language-15-production', type:'reflection', title:'Use It: Find a Safe Route', instructions:'Create a new A2 route situation using Chapter 15 patterns.', question:'Can you describe positions, reassure someone, describe a change and explain safe movement?', correctAnswer:null, explanation:'Use in front of, behind, an imperative, will, became, could, between and safely.', feedback:{correct:'Use a new everyday route.',incorrect:''}, discussionPrompts:[{question:'Describe what is in front of or behind the group.',mode:'Individual'},{question:'Give reassurance with an instruction and will.',mode:'Pair'},{question:'Describe one change.',mode:'Individual'},{question:'Explain a safe route with between.',mode:'Individual'}] },
  ],
  16: [
    {
      id: 'moses-a2-language-16-place-time',
      type: 'multiple-choice',
      title: 'What Do These Sentences Give Us?',
      instructions: 'Read the end of Chapter 16. Choose the best answer.',
      question: '“It tells us that no one can own another person. It shows that only Allah has power over us.” What do these two sentences give us?',
      options: ['a new event in the story', 'lessons from the story', 'the king’s words'],
      correctAnswer: 1,
      explanation: 'It tells us that … and It shows that … introduce a lesson. The present simple (tells, shows, has) is used because a lesson is always true, not only in the past.',
      feedback: {
        correct: 'Correct. These sentences give lessons from the story.',
        incorrect: 'Read the last lines of Chapter 16. The sentence before them says the story “has many lessons to learn”.',
      },
    },
    {
      id: 'moses-a2-language-16-claim-command-result',
      type: 'error-correction',
      title: 'Said To, Told … To',
      instructions: 'Each sentence has one mistake. Tap the wrong words. Then choose the correct words.',
      question: 'Can you fix say to + person and tell + person/thing + to + verb?',
      errorItems: [
        {
          sentence: 'The king said his soldiers, “Look! …”',
          error: 'said his soldiers',
          options: ['said to his soldiers', 'told to his soldiers', 'said at his soldiers'],
          answer: 0,
        },
        {
          sentence: '“Look! I told the sea open, and it opened.”',
          error: 'told the sea open',
          options: ['told to the sea open', 'told the sea to open', 'said the sea to open'],
          answer: 1,
        },
      ],
      correctAnswer: null,
      explanation: 'Say to + person: said to his soldiers. Tell + person/thing + to + base verb: told the sea to open. We do not say told to the sea.',
      feedback: {
        correct: 'Well done. Said to his soldiers, and told the sea to open.',
        incorrect: 'Read the king’s words in Chapter 16 again. Said needs to before the person; told needs to before the verb.',
      },
    },
    {
      id: 'moses-a2-language-16-general-lessons',
      type: 'matching',
      title: 'Place and Time Words',
      instructions: 'Find these words in Chapter 16. Match each one with its meaning.',
      question: 'What do these place and time words from Chapter 16 mean?',
      matchingHeadings: { left: 'From the chapter', right: 'Meaning' },
      matchingPairs: [
        { left: 'very close behind', right: 'only a short distance after' },
        { left: 'entered', right: 'went into' },
        { left: 'midway', right: 'halfway across' },
        { left: 'In the end', right: 'finally' },
        { left: 'no one', right: 'not a single person' },
      ],
      correctAnswer: {
        'very close behind': 'only a short distance after',
        entered: 'went into',
        midway: 'halfway across',
        'In the end': 'finally',
        'no one': 'not a single person',
      },
      explanation: 'Very close behind tells us where. When they were midway and In the end tell us when: in the end introduces the final result.',
      feedback: {
        correct: 'Correct. You know the place and time words of the final scene.',
        incorrect: 'Read Chapter 16 again. Find each word and look at the sentence around it.',
      },
    },
    { id:'moses-a2-language-16-production', type:'reflection', title:'Use It: Explain a Simple Lesson', instructions:'Think of a short everyday story and use Chapter 16 patterns.', question:'Can you locate an event, report an instruction, give a result and express a lesson?', correctAnswer:null, explanation:'Use in the middle of, when, in the end, said to/told + person + to, It tells us that, or It shows that.', feedback:{correct:'Use a new everyday story.',incorrect:''}, discussionPrompts:[{question:'Give place and time.',mode:'Individual'},{question:'Report one instruction.',mode:'Pair'},{question:'State the result.',mode:'Individual'},{question:'Finish with one lesson frame.',mode:'Individual'}] },
  ],
};
