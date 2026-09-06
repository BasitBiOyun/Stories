import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  3: [
    {
      id: 'moses-a2-language-3-could', type: 'matching', title: 'Could: Possibility and Difficulty',
      instructions: 'Match each pattern with its meaning.', question: 'How does Chapter 3 use could and could not?',
      matchingPairs: [
        { left: 'Soldiers could find her baby.', right: 'past possibility or danger' },
        { left: 'She could not sleep at night.', right: 'past inability' },
        { left: 'could + base verb', right: 'possible or able in the past' },
        { left: 'could not + base verb', right: 'not able in the past' },
      ],
      correctAnswer: {
        'Soldiers could find her baby.': 'past possibility or danger', 'She could not sleep at night.': 'past inability',
        'could + base verb': 'possible or able in the past', 'could not + base verb': 'not able in the past',
      },
      explanation: 'Could can express past possibility or ability; could not expresses inability.', feedback: { correct: 'Correct.', incorrect: 'Separate possible danger from inability.' },
    },
    {
      id: 'moses-a2-language-3-instructions-promise', type: 'sequencing', title: 'Instructions and Reassurance',
      instructions: 'Put the sentences in order.', question: 'How does the chapter move from instructions to reassurance?',
      sequencingItems: [
        { id: '1', text: 'Take a basket.' }, { id: '2', text: 'Put your baby in the basket.' },
        { id: '3', text: 'Take the basket to the River Nile.' }, { id: '4', text: 'Allah will protect him.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'Imperatives give instructions; will + verb gives future reassurance.',
      feedback: { correct: 'Correct.', incorrect: 'Put the three commands before the future reassurance.' },
    },
    {
      id: 'moses-a2-language-3-tell-comparison', type: 'multiple-choice', title: 'Reported Instruction',
      instructions: 'Choose the correct pattern.', question: 'Which sentence correctly reports an instruction?',
      options: ['She told her daughter to follow the basket.', 'She told her daughter follow the basket.', 'She told to her daughter to follow the basket.'], correctAnswer: 0,
      explanation: 'Use tell + person + to + base verb.', feedback: { correct: 'Correct.', incorrect: 'Use tell + person + to + verb.' },
    },
    {
      id: 'moses-a2-language-3-production', type: 'reflection', title: 'Use It: Help in a Difficult Situation',
      instructions: 'Create a safe new A2 situation using at least three Chapter 3 patterns.', question: 'Can you describe a difficulty, give an instruction and add reassurance?',
      correctAnswer: null, explanation: 'Use could/could not, an imperative, will + verb, tell + person + to + verb, or a simple comparative.',
      feedback: { correct: 'Keep the situation new and the forms accurate.', incorrect: '' },
      discussionPrompts: [
        { question: 'Describe one difficulty with could/could not.', mode: 'Individual' },
        { question: 'Give one safe instruction.', mode: 'Individual' },
        { question: 'Add one will sentence.', mode: 'Individual' },
        { question: 'Report one instruction.', mode: 'Pair' },
      ],
    },
  ],
};

export const mosesA2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-a2-language-4-past-actions', type: 'matching', title: 'Past Actions and Place', instructions: 'Match each expression with its job.', question: 'How does Chapter 4 connect action and place?',
      matchingPairs: [
        { left: 'The basket came to the waterside.', right: 'movement to a place' },
        { left: 'The servants saw the basket and took it to the king and queen.', right: 'two completed past actions' },
        { left: 'Moses’s sister ran to the Queen.', right: 'movement toward a person' },
        { left: 'She lived nearby.', right: 'past location' },
      ],
      correctAnswer: {
        'The basket came to the waterside.': 'movement to a place', 'The servants saw the basket and took it to the king and queen.': 'two completed past actions',
        'Moses’s sister ran to the Queen.': 'movement toward a person', 'She lived nearby.': 'past location',
      },
      explanation: 'Past verbs and place expressions show movement, completed actions and location.', feedback: { correct: 'Correct.', incorrect: 'Look at the verb and place in each sentence.' },
    },
    {
      id: 'moses-a2-language-4-different-from', type: 'fill-blanks', title: 'Contrasting People', instructions: 'Complete the contrast.', question: 'Which word completes the Chapter 4 pattern?',
      fillBlanksText: 'The queen was different [blank] her husband.', correctAnswer: 'from', explanation: 'Use different from + person/thing.', feedback: { correct: 'Correct.', incorrect: 'The fixed phrase is different from.' },
    },
    {
      id: 'moses-a2-language-4-will-command', type: 'multiple-choice', title: 'Decision or Command?', instructions: 'Choose the sentence that gives a direct command.', question: 'Which sentence is an imperative?',
      options: ['Find a nurse for the baby.', 'I will take him to the palace.', 'She will be a good nurse.'], correctAnswer: 0,
      explanation: 'An imperative begins with the base verb and gives a direct instruction.', feedback: { correct: 'Correct.', incorrect: 'Look for the sentence that tells someone what to do.' },
    },
    {
      id: 'moses-a2-language-4-production', type: 'reflection', title: 'Use It: A Helpful Plan', instructions: 'Create a new A2 situation using Chapter 4 patterns.', question: 'Can you describe a helpful person, contrast people, state a decision and give an instruction?',
      correctAnswer: null, explanation: 'Use be + adjective, different from, will + verb and an imperative.', feedback: { correct: 'Keep the example new and clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Describe one person with two adjectives.', mode: 'Individual' }, { question: 'Use different from once.', mode: 'Individual' },
        { question: 'State one decision with will.', mode: 'Individual' }, { question: 'Give one safe command.', mode: 'Pair' },
      ],
    },
  ],
  5: [
    {
      id: 'moses-a2-language-5-care-growth', type: 'matching', title: 'Care and Change', instructions: 'Match each expression with its meaning.', question: 'How does Chapter 5 describe care and change over time?',
      matchingPairs: [
        { left: 'take care of the baby', right: 'care for and protect someone' }, { left: 'looked after baby Moses', right: 'cared for someone in the past' },
        { left: 'Moses grew up in a safe place.', right: 'development over time' }, { left: 'Moses became a strong young man.', right: 'change to a new state' },
      ],
      correctAnswer: {
        'take care of the baby': 'care for and protect someone', 'looked after baby Moses': 'cared for someone in the past',
        'Moses grew up in a safe place.': 'development over time', 'Moses became a strong young man.': 'change to a new state',
      },
      explanation: 'Take care of/look after express care; grow up and become describe change.', feedback: { correct: 'Correct.', incorrect: 'Separate care phrases from change phrases.' },
    },
    {
      id: 'moses-a2-language-5-habits-reasons', type: 'multiple-choice', title: 'Giving a Reason', instructions: 'Choose the sentence that correctly uses because.', question: 'Which sentence gives a complete reason?',
      options: ['He loved the Children of Israel because his mother was from the Children of Israel.', 'He loved the Children of Israel because of his mother was from them.', 'He loved because his mother from the Children of Israel.'], correctAnswer: 0,
      explanation: 'Because is followed by a clause with a subject and verb.', feedback: { correct: 'Correct.', incorrect: 'Use because + complete clause.' },
    },
    {
      id: 'moses-a2-language-5-background-event', type: 'sequencing', title: 'Background and New Event', instructions: 'Put the two ideas in story order.', question: 'Which action was already happening before the new event?',
      sequencingItems: [{ id: '1', text: 'He was walking in the bazaar.' }, { id: '2', text: 'He saw two men fighting.' }], correctAnswer: ['1','2'],
      explanation: 'Past continuous sets the background; simple past introduces the next completed event.', feedback: { correct: 'Correct.', incorrect: 'Put the action in progress before the new event.' },
    },
    {
      id: 'moses-a2-language-5-production', type: 'reflection', title: 'Use It: Someone Who Helps', instructions: 'Create a new A2 example using at least three Chapter 5 patterns.', question: 'Can you describe care, change, a regular quality and a reason?',
      correctAnswer: null, explanation: 'Use look after/take care of, became, always, because, or was/were + -ing.', feedback: { correct: 'Use the language in a new situation.', incorrect: '' },
      discussionPrompts: [
        { question: 'Say who someone looks after.', mode: 'Individual' }, { question: 'Describe one change with became.', mode: 'Individual' },
        { question: 'Use always for one regular quality.', mode: 'Individual' }, { question: 'Give one reason with because.', mode: 'Pair' },
      ],
    },
  ],
};

export const mosesA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  6: [
    { id:'moses-a2-language-6-purpose-accident', type:'matching', title:'Purpose and an Unplanned Result', instructions:'Match each expression with its meaning.', question:'How does Chapter 6 show purpose and accident?', matchingPairs:[{left:'Moses ran to help him.',right:'purpose with to + verb'},{left:'He accidentally caused someone’s death.',right:'an unplanned result'},{left:'to help + person',right:'answers why an action happened'},{left:'accidentally',right:'not on purpose'}], correctAnswer:{'Moses ran to help him.':'purpose with to + verb','He accidentally caused someone’s death.':'an unplanned result','to help + person':'answers why an action happened','accidentally':'not on purpose'}, explanation:'To + verb can show purpose; accidentally marks an unintended result.', feedback:{correct:'Correct.',incorrect:'Separate purpose from an unintended result.'} },
    { id:'moses-a2-language-6-feeling-reason', type:'fill-blanks', title:'Feeling and Reason', instructions:'Complete the reason connector.', question:'Which word completes the sentence?', fillBlanksText:'He was so sorry [blank] he accidentally caused someone’s death.', correctAnswer:'because', explanation:'Because introduces the reason for a feeling.', feedback:{correct:'Correct.',incorrect:'Use because before a full reason clause.'} },
    { id:'moses-a2-language-6-warning-language', type:'multiple-choice', title:'Warning About Danger', instructions:'Choose the sentence about an expected future result.', question:'Which sentence uses be going to for a warning?', options:['They are going to catch you.','The soldiers are looking for you.','Run away from the city.'], correctAnswer:0, explanation:'Be going to can describe an expected future result.', feedback:{correct:'Correct.',incorrect:'Look for be going to + verb.'} },
    { id:'moses-a2-language-6-production', type:'reflection', title:'Use It: Give a Safe Warning', instructions:'Create a safe new situation using Chapter 6 patterns.', question:'Can you explain purpose, reason, present danger and a future warning?', correctAnswer:null, explanation:'Use to + verb, because, present continuous, be going to/will and an imperative.', feedback:{correct:'Keep the situation safe and new.',incorrect:''}, discussionPrompts:[{question:'Give one purpose with to + verb.',mode:'Individual'},{question:'Add a reason with because.',mode:'Individual'},{question:'Describe what is happening now.',mode:'Individual'},{question:'Give one safe warning and instruction.',mode:'Pair'}] },
  ],
  7: [
    { id:'moses-a2-language-7-journey-sequence', type:'matching', title:'A Journey in the Past', instructions:'Match each expression with its job.', question:'How does Chapter 7 organize a journey?', matchingPairs:[{left:'He left Egypt and travelled for a long time.',right:'past journey actions'},{left:'After many days, he arrived at Midian.',right:'later event'},{left:'after + time',right:'sequence marker'},{left:'arrive at + place',right:'reach a destination'}], correctAnswer:{'He left Egypt and travelled for a long time.':'past journey actions','After many days, he arrived at Midian.':'later event','after + time':'sequence marker','arrive at + place':'reach a destination'}, explanation:'Simple past, after + time and arrive at organize a completed journey.', feedback:{correct:'Correct.',incorrect:'Follow the journey from departure to arrival.'} },
    { id:'moses-a2-language-7-reason-result', type:'multiple-choice', title:'Need and Result', instructions:'Choose the correct result sentence.', question:'Which sentence correctly follows “Moses was tired and thirsty”?', options:['So, he looked for water.','Because, he looked for water.','So he was look for water.'], correctAnswer:0, explanation:'So introduces the result or next action.', feedback:{correct:'Correct.',incorrect:'Use so + complete clause.'} },
    { id:'moses-a2-language-7-scene-actions', type:'fill-blanks', title:'Action in Progress', instructions:'Complete the past continuous.', question:'Which word completes the scene?', fillBlanksText:'They [blank] watering their animals.', correctAnswer:'were', explanation:'Were + verb-ing describes an action in progress in a past scene.', feedback:{correct:'Correct.',incorrect:'Use were with plural they.'} },
    { id:'moses-a2-language-7-production', type:'reflection', title:'Use It: Describe an Arrival', instructions:'Imagine a safe journey and use Chapter 7 patterns.', question:'Can you describe arrival, a need, a search and an action in progress?', correctAnswer:null, explanation:'Use after, arrived at, so, looked for, there were and was/were + -ing.', feedback:{correct:'Use the forms in a new situation.',incorrect:''}, discussionPrompts:[{question:'Say where you arrived.',mode:'Individual'},{question:'Give a need and result with so.',mode:'Individual'},{question:'Say what you looked for.',mode:'Individual'},{question:'Describe what people were doing.',mode:'Pair'}] },
  ],
};

export const mosesA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  8: [
    { id:'moses-a2-language-8-question-ability', type:'matching', title:'Questions and Ability', instructions:'Match each pattern with its job.', question:'How does Chapter 8 ask about an action and express inability?', matchingPairs:[{left:'Why aren’t you taking your sheep to drink water?',right:'asks why an expected action is not happening now'},{left:'He cannot come with us.',right:'present inability'},{left:'Why + negative present continuous?',right:'question about a missing current action'},{left:'cannot + base verb',right:'not able to do something'}], correctAnswer:{'Why aren’t you taking your sheep to drink water?':'asks why an expected action is not happening now','He cannot come with us.':'present inability','Why + negative present continuous?':'question about a missing current action','cannot + base verb':'not able to do something'}, explanation:'The chapter uses a negative present-continuous question and cannot for inability.', feedback:{correct:'Correct.',incorrect:'Separate the question form from inability.'} },
    { id:'moses-a2-language-8-purpose-result', type:'fill-blanks', title:'Situation and Result', instructions:'Complete the result connector.', question:'Which word links the situation to the next action?', fillBlanksText:'There are no young men in our house to help us. [blank], we take the sheep to the water.', correctAnswer:'So', explanation:'So introduces the result or action that follows from a situation.', feedback:{correct:'Correct.',incorrect:'Use the result connector from the chapter.'} },
    { id:'moses-a2-language-8-time-waiting', type:'multiple-choice', title:'Waiting for an Event', instructions:'Choose the correct pattern.', question:'Which sentence correctly uses wait for + person + to + verb?', options:['We did not wait for the other shepherds to leave the well.','We did not wait the other shepherds leave the well.','We did not wait for the other shepherds leaving to the well.'], correctAnswer:0, explanation:'Use wait for + person + to + base verb.', feedback:{correct:'Correct.',incorrect:'Use wait for + person + to + verb.'} },
    { id:'moses-a2-language-8-production', type:'reflection', title:'Use It: Explain a Shared Task', instructions:'Create a safe everyday situation using Chapter 8 patterns.', question:'Can you ask about a missing action, explain inability, give a result and describe waiting?', correctAnswer:null, explanation:'Use Why aren’t you...?, cannot, There are no..., so, wait for, when or early.', feedback:{correct:'Keep the example new and clear.',incorrect:''}, discussionPrompts:[{question:'Ask one Why aren’t you...? question.',mode:'Pair'},{question:'Explain one thing someone cannot do.',mode:'Individual'},{question:'Add a result with so.',mode:'Individual'},{question:'Add wait for, when or early.',mode:'Individual'}] },
  ],
};

export const mosesA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  9: [
    { id:'moses-a2-language-9-reason-need', type:'matching', title:'Reasons and Needs', instructions:'Match each expression with its job.', question:'How does Chapter 9 express inability, need and reason?', matchingPairs:[{left:'He couldn’t help his daughters.',right:'past inability'},{left:'He needed a job and a house.',right:'need or necessity'},{left:'Moses accepted the job because he was a stranger in Midian.',right:'reason with because'},{left:'needed + noun',right:'something was necessary'}], correctAnswer:{'He couldn’t help his daughters.':'past inability','He needed a job and a house.':'need or necessity','Moses accepted the job because he was a stranger in Midian.':'reason with because','needed + noun':'something was necessary'}, explanation:'Couldn’t expresses past inability, needed expresses need, and because gives a reason.', feedback:{correct:'Correct.',incorrect:'Separate inability, need and reason.'} },
    { id:'moses-a2-language-9-want-offer', type:'multiple-choice', title:'Wanting and Offering', instructions:'Choose the sentence that expresses a desire.', question:'Which sentence uses want to + verb?', options:['I want to thank him for his work.','Şuayb offered Moses a job.','Moses accepted the job.'], correctAnswer:0, explanation:'Want to + verb expresses a desire or intention.', feedback:{correct:'Correct.',incorrect:'Look for want to + base verb.'} },
    { id:'moses-a2-language-9-life-sequence', type:'sequencing', title:'Changes Over Time', instructions:'Put the events in order.', question:'How does the chapter organize Moses’s new life?', sequencingItems:[{id:'1',text:'Moses began to stay with the family.'},{id:'2',text:'Later, he married one of the sisters.'},{id:'3',text:'After ten years, he decided to go back to Egypt.'}], correctAnswer:['1','2','3'], explanation:'Began to, later and after + time organize change and later decisions.', feedback:{correct:'Correct.',incorrect:'Start with the new situation, then the later event and final decision.'} },
    { id:'moses-a2-language-9-production', type:'reflection', title:'Use It: A New Opportunity', instructions:'Create a safe new situation using Chapter 9 patterns.', question:'Can you explain a need, give a reason, describe an intention or offer, and make a later decision?', correctAnswer:null, explanation:'Use need, because, want to, offer/accept, later, after + time or decide to.', feedback:{correct:'Use the forms in a new situation.',incorrect:''}, discussionPrompts:[{question:'State one need.',mode:'Individual'},{question:'Give one reason with because.',mode:'Individual'},{question:'Describe an intention or offer.',mode:'Pair'},{question:'Add a later decision.',mode:'Individual'}] },
  ],
};
