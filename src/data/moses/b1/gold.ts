import { Exercise, PageData, TeacherGuideSection } from '../../../types';
import { mosesB1Pages } from './en/pages';
import { mosesB1TeacherGuide } from './en/teacherGuide';

type QuestionSpec = {
  id: string;
  title: string;
  question: string;
  options: [string, string, string];
  answer: 0 | 1 | 2;
  explanation: string;
  retry: string;
};

const buildQuestion = (spec: QuestionSpec): Exercise => ({
  id: spec.id,
  type: 'multiple-choice',
  title: spec.title,
  instructions: 'Choose the best answer. Use evidence from the story.',
  question: spec.question,
  options: [...spec.options],
  correctAnswer: spec.answer,
  explanation: spec.explanation,
  feedback: {
    correct: `Correct. ${spec.explanation}`,
    incorrect: spec.retry,
  },
});

const quickChallengeSpecs: Record<number, QuestionSpec> = {
  1: {
    id: 'b1-gold-ch1',
    title: 'Cause and Effect',
    question: 'Why did Pharaoh treat the Children of Israel harshly?',
    options: [
      'He feared that they might take control of his kingdom.',
      'They refused to work in Egypt at all.',
      'He wanted them to become palace advisors.',
    ],
    answer: 0,
    explanation: 'The chapter connects Pharaoh’s fear of losing control with his harsh treatment of the Children of Israel.',
    retry: 'Look again at the sentence beginning “The Pharaoh feared...” and the sentences that follow it.',
  },
  2: {
    id: 'b1-gold-ch2',
    title: 'Follow the Chain',
    question: 'Which sequence best shows the cause-and-effect chain in this chapter?',
    options: [
      'Dream → advisors’ interpretation → cruel order → Moses’s mother becomes frightened',
      'Cruel order → dream → Moses is born → advisors leave Egypt',
      'Moses’s mother prays → Pharaoh becomes kind → the soldiers stop searching',
    ],
    answer: 0,
    explanation: 'Pharaoh’s dream was interpreted by his advisors, he gave a cruel order, and Moses’s mother then feared for her baby.',
    retry: 'Trace the events from the dream to the final sentences about Moses’s mother.',
  },
  3: {
    id: 'b1-gold-ch3',
    title: 'Trust Under Pressure',
    question: 'Which action best shows Moses’s mother trusting Allah even while she was worried?',
    options: [
      'She placed Moses in the basket and let the river carry him away.',
      'She took Moses directly to Pharaoh.',
      'She stopped her daughter from following the basket.',
    ],
    answer: 0,
    explanation: 'She was sad and worried, but she followed the guidance to place Moses in the river and believed Allah was kinder to him than she was.',
    retry: 'Reread the sentences about her feelings just before and after the basket enters the water.',
  },
  4: {
    id: 'b1-gold-ch4',
    title: 'Character Evidence',
    question: 'Which detail best supports the description of Queen Asiye as courageous?',
    options: [
      'She cared for Moses in Pharaoh’s palace although she was different from her husband.',
      'She ordered Moses to leave Egypt.',
      'She refused to help Moses’s mother.',
    ],
    answer: 0,
    explanation: 'The chapter links Queen Asiye’s goodness and courage with caring for Moses and raising him in the palace.',
    retry: 'Find the sentences explaining why people remember Queen Asiye.',
  },
  5: {
    id: 'b1-gold-ch5',
    title: 'Meaning in Context',
    question: 'Why is the word “accidentally” important in this chapter?',
    options: [
      'It shows that Moses did not intend to cause the man’s death and that he regretted what happened.',
      'It shows that Moses planned the fight before entering the bazaar.',
      'It shows that the Israelite asked Moses to punish the Egyptian.',
    ],
    answer: 0,
    explanation: 'The text says Moses did not do it on purpose, became upset, and asked Allah for forgiveness.',
    retry: 'Read Moses’s prayer after the man’s death and compare “accidentally” with “on purpose.”',
  },
  6: {
    id: 'b1-gold-ch6',
    title: 'Why Midian?',
    question: 'Which detail explains why Midian was a safer destination for Moses?',
    options: [
      'Pharaoh was not the ruler there.',
      'It was inside Pharaoh’s palace lands.',
      'The soldiers had already moved there.',
    ],
    answer: 0,
    explanation: 'The chapter directly states that Pharaoh was not the ruler in Midian.',
    retry: 'Look at the sentence immediately after Moses reaches the land of Midian.',
  },
  7: {
    id: 'b1-gold-ch7',
    title: 'What Action Shows',
    question: 'What does Moses’s response to the two sisters show most clearly?',
    options: [
      'He noticed a difficulty and chose to help.',
      'He wanted the sisters to leave the spring.',
      'He expected a reward before helping them.',
    ],
    answer: 0,
    explanation: 'Moses understood that the sisters needed help and watered their sheep for them.',
    retry: 'Focus on what Moses did immediately after he understood why the sisters were waiting.',
  },
  8: {
    id: 'b1-gold-ch8',
    title: 'Decision and Reason',
    question: 'Why did Moses accept Şuayb’s offer of work?',
    options: [
      'He was a stranger in Midian and urgently needed a job and a home.',
      'He wanted to become the ruler of Midian.',
      'He planned to stay away from his family forever.',
    ],
    answer: 0,
    explanation: 'The chapter explicitly connects Moses’s decision with being a stranger who needed work and a place to live.',
    retry: 'Find the sentence beginning “He accepted the offer, because...”',
  },
  9: {
    id: 'b1-gold-ch9',
    title: 'Signs and Mission',
    question: 'What was Moses told to do with the signs he received?',
    options: [
      'Show them to Pharaoh and tell him about the power of Allah.',
      'Hide them from everyone in Egypt.',
      'Use them to become king of Egypt.',
    ],
    answer: 0,
    explanation: 'Allah told Moses to show the signs to Pharaoh and warn him to receive guidance.',
    retry: 'Reread the paragraph after the staff and the shining hand are described.',
  },
  10: {
    id: 'b1-gold-ch10',
    title: 'Reasoning and Evidence',
    question: 'Why did Moses finally display the miracles before Pharaoh?',
    options: [
      'Pharaoh kept refusing to believe after Moses tried to convince him.',
      'Pharaoh asked Moses to entertain the palace.',
      'Moses had forgotten the message he came to deliver.',
    ],
    answer: 0,
    explanation: 'The chapter says Moses made efforts to convince Pharaoh, but logical discussion did not change his refusal.',
    retry: 'Look at the sentences immediately before Moses throws down the staff.',
  },
  11: {
    id: 'b1-gold-ch11',
    title: 'Contrast the Reactions',
    question: 'What important contrast appears after Moses’s staff overcomes the magicians’ snakes?',
    options: [
      'The magicians believe, but Pharaoh continues to refuse because of his arrogance.',
      'Pharaoh believes immediately, but the magicians refuse.',
      'Both Pharaoh and the magicians leave without reacting.',
    ],
    answer: 0,
    explanation: 'The magicians say they believe in the Lord of Moses and Harun, while Pharaoh remains arrogant and continues his opposition.',
    retry: 'Compare the magicians’ words with the sentence describing Pharaoh immediately afterwards.',
  },
  12: {
    id: 'b1-gold-ch12',
    title: 'Read for Consequences',
    question: 'Why was Pharaoh’s army able to catch up with the group?',
    options: [
      'The caravan moved slowly because it included many children and older people.',
      'Moses ordered everyone to stop for several days.',
      'The group returned to Egypt before sunrise.',
    ],
    answer: 0,
    explanation: 'The chapter explains that children and older people became tired quickly, so the large caravan moved slowly.',
    retry: 'Find the sentences explaining why the caravan could not move quickly.',
  },
  13: {
    id: 'b1-gold-ch13',
    title: 'Compare Two Responses',
    question: 'Which contrast is central to the ending of the story?',
    options: [
      'Moses trusts Allah, while Pharaoh arrogantly claims that the sea opened at his own order.',
      'Moses claims that he opened the sea, while Pharaoh asks Allah for guidance.',
      'Both Moses and Pharaoh believe the sea opened by Pharaoh’s power.',
    ],
    answer: 0,
    explanation: 'The chapter presents Moses’s trust in Allah against Pharaoh’s arrogant claim of personal power.',
    retry: 'Compare Moses’s words before the sea opens with Pharaoh’s words after he sees the road through it.',
  },
};

const knowledgeSpecs: QuestionSpec[] = [
  {
    id: 'b1-gold-k1', title: 'Knowledge Check',
    question: 'What best explains the beginning of Pharaoh’s oppression?',
    options: ['Fear of losing political control', 'A shortage of palace servants', 'A disagreement about trade'], answer: 0,
    explanation: 'Pharaoh feared that the Children of Israel might take control of his kingdom.',
    retry: 'Review Chapter 1 and identify Pharaoh’s stated fear.',
  },
  {
    id: 'b1-gold-k2', title: 'Knowledge Check',
    question: 'What happened after Pharaoh’s advisors interpreted his dream?',
    options: ['He ordered newborn boys of the Children of Israel to be killed.', 'He left Egypt for Midian.', 'He asked Queen Asiye to rule Egypt.'], answer: 0,
    explanation: 'The interpretation was followed by Pharaoh’s cruel order.',
    retry: 'Review the event chain in Chapter 2.',
  },
  {
    id: 'b1-gold-k3', title: 'Knowledge Check',
    question: 'How did Moses return to his mother while still being raised in the palace?',
    options: ['His sister brought their mother as a nurse for the baby.', 'Pharaoh sent him away from the palace.', 'The servants returned the basket to the river.'], answer: 0,
    explanation: 'Moses’s sister brought their mother, who became his nurse in the palace.',
    retry: 'Review the beginning of Chapter 4.',
  },
  {
    id: 'b1-gold-k4', title: 'Knowledge Check',
    question: 'What did Moses do immediately after unintentionally causing the Egyptian’s death?',
    options: ['He asked Allah for forgiveness.', 'He celebrated his victory.', 'He asked Pharaoh for a reward.'], answer: 0,
    explanation: 'Moses regretted what happened and prayed for forgiveness.',
    retry: 'Review Moses’s reaction in Chapter 5.',
  },
  {
    id: 'b1-gold-k5', title: 'Knowledge Check',
    question: 'What changed when Moses reached Midian?',
    options: ['He was outside Pharaoh’s rule.', 'He became Pharaoh’s advisor.', 'He returned to the palace.'], answer: 0,
    explanation: 'The story states that Pharaoh was not the ruler in Midian.',
    retry: 'Review the setting change in Chapter 6.',
  },
  {
    id: 'b1-gold-k6', title: 'Knowledge Check',
    question: 'What connects Chapters 6 and 7?',
    options: ['Moses arrives at the water source and then helps the two sisters there.', 'Moses meets the magicians and then leaves Egypt.', 'Moses returns to his mother and then becomes a shepherd.'], answer: 0,
    explanation: 'Chapter 6 introduces the spring and the sisters; Chapter 7 continues with Moses helping them.',
    retry: 'Look at the final event of Chapter 6 and the opening of Chapter 7.',
  },
  {
    id: 'b1-gold-k7', title: 'Knowledge Check',
    question: 'Which two signs are described on the mountain?',
    options: ['The staff becomes a snake and Moses’s hand shines.', 'The river disappears and the palace falls.', 'The sun stops and the mountains move.'], answer: 0,
    explanation: 'The staff and the shining hand are the two signs described in Chapter 9.',
    retry: 'Review the two actions Allah tells Moses to perform in Chapter 9.',
  },
  {
    id: 'b1-gold-k8', title: 'Knowledge Check',
    question: 'Why is the magicians’ reaction important?',
    options: ['They change their position after witnessing the miracle.', 'They persuade Moses to leave Egypt.', 'They help Pharaoh open the Red Sea.'], answer: 0,
    explanation: 'After witnessing the miracle, the magicians declare belief in the Lord of Moses and Harun.',
    retry: 'Review the end of the staff contest in Chapter 11.',
  },
];

const reviewSpecs: QuestionSpec[] = [
  {
    id: 'b1-gold-r1', title: 'Review Challenge',
    question: 'Which pair shows the clearest contrast in the story?',
    options: ['Queen Asiye’s care and Pharaoh’s cruelty', 'Moses’s mother’s fear and her daughter’s anger', 'The sisters’ wealth and Moses’s poverty'], answer: 0,
    explanation: 'The story repeatedly contrasts Queen Asiye’s care with Pharaoh’s cruelty and oppression.',
    retry: 'Compare how Pharaoh and Queen Asiye respond to vulnerable people.',
  },
  {
    id: 'b1-gold-r2', title: 'Review Challenge',
    question: 'Which event most clearly shows that a mistake is followed by responsibility rather than pride?',
    options: ['Moses asks Allah for forgiveness after the death in the bazaar.', 'Pharaoh calls the signs magic.', 'The magicians throw down their ropes.'], answer: 0,
    explanation: 'Moses is upset, acknowledges the wrong, and asks Allah for forgiveness.',
    retry: 'Review Moses’s response immediately after the bazaar incident.',
  },
  {
    id: 'b1-gold-r3', title: 'Review Challenge',
    question: 'What pattern appears in both the river episode and the Red Sea episode?',
    options: ['Danger involving water is followed by protection and safety.', 'Pharaoh helps Moses cross the water.', 'Moses avoids asking Allah for help.'], answer: 0,
    explanation: 'Both episodes place Moses or his people near water during danger and connect their safety with Allah’s protection.',
    retry: 'Compare Chapters 3 and 13 and focus on danger, water, and safety.',
  },
  {
    id: 'b1-gold-r4', title: 'Review Challenge',
    question: 'What does Moses’s help at the spring add to his character development?',
    options: ['It shows that he continues to notice and help people in difficulty.', 'It shows that he wants political power in Midian.', 'It shows that he refuses to work with others.'], answer: 0,
    explanation: 'After escaping Egypt, Moses still responds to people who need help.',
    retry: 'Think about Moses’s actions toward the two sisters rather than only the setting.',
  },
  {
    id: 'b1-gold-r5', title: 'Review Challenge',
    question: 'Why is Pharaoh’s response to the miracles different from the magicians’ response?',
    options: ['The magicians accept what they witnessed, while Pharaoh remains arrogant and refuses.', 'Pharaoh sees the miracle but the magicians do not.', 'The magicians are never present when the staff changes.'], answer: 0,
    explanation: 'The chapter directly contrasts the magicians’ belief with Pharaoh’s continued arrogance.',
    retry: 'Compare the final sentences about the magicians and Pharaoh in Chapter 11.',
  },
  {
    id: 'b1-gold-r6', title: 'Review Challenge',
    question: 'Which sentence best summarizes Moses’s time in Midian?',
    options: ['He finds safety, helps others, accepts work, builds a family life, and later returns toward Egypt.', 'He becomes ruler of Midian and never leaves.', 'He hides alone and has no contact with anyone.'], answer: 0,
    explanation: 'Chapters 6–8 show a transition from escape to a stable life and then a return journey.',
    retry: 'Review the sequence from Moses’s arrival in Midian to his decision to return to Egypt.',
  },
  {
    id: 'b1-gold-r7', title: 'Review Challenge',
    question: 'What is the main cause of the people’s panic at the Red Sea?',
    options: ['They see Pharaoh’s army behind them while the sea is in front of them.', 'They have already crossed safely and cannot see Pharaoh.', 'They decide to return voluntarily to Pharaoh.'], answer: 0,
    explanation: 'They appear trapped between the Red Sea and Pharaoh’s approaching army.',
    retry: 'Review the end of Chapter 12 and the opening of Chapter 13.',
  },
  {
    id: 'b1-gold-r8', title: 'Review Challenge',
    question: 'Which statement best captures the final lesson as the story presents it?',
    options: ['Human beings should not enslave one another, and ultimate power belongs to Allah.', 'Political power makes every action right.', 'Only rulers can decide what is morally right.'], answer: 0,
    explanation: 'The final chapter explicitly rejects enslaving other people and states that power over human beings belongs to Allah.',
    retry: 'Return to the final paragraph of Chapter 13.',
  },
];

const finalSpecs: QuestionSpec[] = [
  {
    id: 'b1-gold-f1', title: 'Final Challenge',
    question: 'What is the strongest cause-and-effect link in Pharaoh’s early actions?',
    options: ['Fear of losing control leads to oppression.', 'Kindness leads to a military attack.', 'Trade leads Moses to Midian.'], answer: 0,
    explanation: 'The opening chapter explicitly connects Pharaoh’s fear with his harsh rule.', retry: 'Review Chapter 1.',
  },
  {
    id: 'b1-gold-f2', title: 'Final Challenge',
    question: 'Which event directly follows the interpretation of Pharaoh’s dream?',
    options: ['An order to kill newborn boys from the Children of Israel', 'Moses’s marriage in Midian', 'The parting of the Red Sea'], answer: 0,
    explanation: 'Pharaoh gives the cruel order after hearing the interpretation.', retry: 'Review Chapter 2.',
  },
  {
    id: 'b1-gold-f3', title: 'Final Challenge',
    question: 'What do the basket episode and Moses’s return to his mother show together?',
    options: ['A dangerous separation is followed by protection and reunion.', 'Moses grows up without any connection to his mother.', 'Queen Asiye refuses to care for Moses.'], answer: 0,
    explanation: 'Moses is placed in the river during danger and later returns to his mother as she becomes his nurse.', retry: 'Review Chapters 3–4.',
  },
  {
    id: 'b1-gold-f4', title: 'Final Challenge',
    question: 'What most clearly shows Moses’s regret after the bazaar incident?',
    options: ['He asks Allah to forgive him.', 'He tells people he acted on purpose.', 'He asks the Israelite to praise him.'], answer: 0,
    explanation: 'Moses says he did not act on purpose and asks Allah for forgiveness.', retry: 'Review Chapter 5.',
  },
  {
    id: 'b1-gold-f5', title: 'Final Challenge',
    question: 'Why is the move to Midian a turning point?',
    options: ['Moses escapes Pharaoh’s rule and begins a new stage of life.', 'Moses becomes Pharaoh’s soldier.', 'Moses returns to the same bazaar.'], answer: 0,
    explanation: 'Midian is outside Pharaoh’s rule and becomes the setting for Moses’s new life.', retry: 'Review Chapters 6–8.',
  },
  {
    id: 'b1-gold-f6', title: 'Final Challenge',
    question: 'What do Moses’s actions toward the two sisters reveal?',
    options: ['He responds to need with practical help.', 'He refuses to speak to strangers.', 'He demands payment before helping.'], answer: 0,
    explanation: 'He understands their difficulty and waters their sheep.', retry: 'Review Chapter 7.',
  },
  {
    id: 'b1-gold-f7', title: 'Final Challenge',
    question: 'What changes Moses’s role in Chapter 9?',
    options: ['He receives signs and is sent to Pharaoh as a Messenger.', 'He becomes a merchant in Midian.', 'He is appointed as Pharaoh’s advisor.'], answer: 0,
    explanation: 'After receiving the message and signs, Moses is sent toward Egypt as a Messenger of Allah.', retry: 'Review Chapter 9.',
  },
  {
    id: 'b1-gold-f8', title: 'Final Challenge',
    question: 'What is the clearest difference between the magicians and Pharaoh after the miracle?',
    options: ['The magicians believe; Pharaoh continues to refuse.', 'Pharaoh believes; the magicians refuse.', 'Neither side changes in any way.'], answer: 0,
    explanation: 'The magicians declare belief, while Pharaoh remains arrogant.', retry: 'Review Chapter 11.',
  },
  {
    id: 'b1-gold-f9', title: 'Final Challenge',
    question: 'Why does the group appear trapped before the sea parts?',
    options: ['The Red Sea is ahead and Pharaoh’s army is behind.', 'They are surrounded by the people of Midian.', 'They cannot find the palace gates.'], answer: 0,
    explanation: 'The final two chapters place the group between the sea and the approaching army.', retry: 'Review Chapters 12–13.',
  },
  {
    id: 'b1-gold-f10', title: 'Final Challenge',
    question: 'Which idea links Pharaoh’s downfall with the final lesson?',
    options: ['Arrogant human power is limited, while the story presents ultimate power as belonging to Allah.', 'Pharaoh succeeds because he controls the sea.', 'The story presents slavery as a sign of justice.'], answer: 0,
    explanation: 'Pharaoh claims power over the sea but is defeated, and the ending rejects human enslavement and locates ultimate power with Allah.', retry: 'Review Pharaoh’s claim and the final paragraph of Chapter 13.',
  },
];

const vocabularyOverrides: Record<number, NonNullable<PageData['vocabulary']>> = {
  1: [
    { word: 'dictatorial', definition: 'Using political power in a strict and unfair way.' },
    { word: 'ancestor', definition: 'A member of your family who lived many generations ago.' },
    { word: 'harsh', definition: 'Severe, cruel, or unkind.' },
    { word: 'despotic', definition: 'Using complete power in a cruel or unfair way.' },
  ],
  2: [
    { word: 'advisor', definition: 'A person who gives advice to a leader or ruler.' },
    { word: 'newborn', definition: 'A baby who has only recently been born.' },
    { word: 'heartless', definition: 'Showing no sympathy, kindness, or pity.' },
    { word: 'frightened', definition: 'Feeling very afraid.' },
    { word: 'broke into', definition: 'Entered a place by force.' },
  ],
  3: [
    { word: 'shelter', definition: 'A place that gives safety or protection.' },
    { word: 'ashore', definition: 'From the water onto the land.' },
    { word: 'servants', definition: 'People employed to work in a house or palace.' },
    { word: 'kind-hearted', definition: 'Naturally kind, caring, and sympathetic.' },
    { word: 'carried away', definition: 'Moved from one place to another by a force such as water.' },
  ],
  4: [
    { word: 'nurse', definition: 'In this story, a woman who feeds and cares for a baby.' },
    { word: 'courage', definition: 'The ability to act bravely in a difficult situation.' },
    { word: 'originally', definition: 'In the beginning or by origin.' },
    { word: 'raised', definition: 'Cared for a child while the child was growing up.' },
    { word: 'felt close to', definition: 'Felt a strong personal connection with someone or a group.' },
  ],
  5: [
    { word: 'accidentally', definition: 'Without intending or planning for something to happen.' },
    { word: 'on purpose', definition: 'Intentionally; because you planned to do it.' },
    { word: 'pardoned', definition: 'Forgave someone for a wrong action.' },
    { word: 'quarrelsome', definition: 'Likely to argue or fight often.' },
    { word: 'peaceable', definition: 'Calm and not wanting conflict or violence.' },
  ],
  6: [
    { word: 'punishment', definition: 'A penalty given for doing something wrong.' },
    { word: 'escaped', definition: 'Got away from danger or control.' },
    { word: 'guided', definition: 'Helped or shown the right direction.' },
    { word: 'spring', definition: 'A place where water naturally comes out of the ground.' },
    { word: 'cattle', definition: 'Large farm animals such as cows and bulls.' },
  ],
  7: [
    { word: 'patient', definition: 'Able to wait calmly without becoming angry.' },
    { word: 'shepherds', definition: 'People whose work is to look after sheep.' },
    { word: 'messenger', definition: 'A person who carries or delivers a message.' },
    { word: 'wait your turn', definition: 'Wait until it is the proper time for you to act.' },
  ],
  8: [
    { word: 'offered', definition: 'Presented something for another person to accept or refuse.' },
    { word: 'urgently', definition: 'In a way that needs quick attention or action.' },
    { word: 'guidance', definition: 'Help or direction about what to do.' },
    { word: 'valley', definition: 'Low land between hills or mountains.' },
    { word: 'hillside', definition: 'The sloping side of a hill.' },
  ],
  9: [
    { word: 'thundering', definition: 'Extremely loud and powerful in sound.' },
    { word: 'staff', definition: 'A long stick used for walking or support.' },
    { word: 'signs', definition: 'In this chapter, miracles shown as evidence of Allah’s power.' },
    { word: 'guidance', definition: 'Direction toward the right path.' },
    { word: 'headed to', definition: 'Started travelling toward a place.' },
  ],
  10: [
    { word: 'companion', definition: 'A person who travels with or supports someone.' },
    { word: 'throne', definition: 'A special ceremonial seat used by a king or ruler.' },
    { word: 'convince', definition: 'Make someone believe that something is true.' },
    { word: 'logical', definition: 'Based on clear reasoning.' },
    { word: 'display', definition: 'Show something clearly so that others can see it.' },
  ],
  11: [
    { word: 'made fun of', definition: 'Laughed at someone in an unkind or disrespectful way.' },
    { word: 'frightened', definition: 'Feeling afraid.' },
    { word: 'witnessed', definition: 'Saw an event happen directly.' },
    { word: 'arrogant', definition: 'Believing that you are more important or powerful than others.' },
    { word: 'trouble', definition: 'Cause problems, difficulty, or suffering for someone.' },
  ],
  12: [
    { word: 'caravan', definition: 'A group of people travelling together.' },
    { word: 'catch up with', definition: 'Reach someone who is ahead of you.' },
    { word: 'panicked', definition: 'Suddenly became very frightened and unable to think calmly.' },
    { word: 'seized', definition: 'Caught or taken by force.' },
    { word: 'keep secret', definition: 'Prevent other people from learning information or a plan.' },
  ],
  13: [
    { word: 'trapped', definition: 'Unable to escape from a dangerous or difficult situation.' },
    { word: 'parted', definition: 'Separated and opened into two sides.' },
    { word: 'midway', definition: 'At or near the middle of a journey or process.' },
    { word: 'enslave', definition: 'Force another person to live as a slave.' },
    { word: 'visible', definition: 'Able to be seen.' },
  ],
};

const vocabularyPairs = [
  { word: 'dictatorial', meaning: 'using political power in a strict and unfair way' },
  { word: 'heartless', meaning: 'showing no sympathy or pity' },
  { word: 'ashore', meaning: 'from the water onto the land' },
  { word: 'quarrelsome', meaning: 'often ready to argue or fight' },
  { word: 'guidance', meaning: 'help or direction about the right path' },
  { word: 'companion', meaning: 'someone who travels with or supports another person' },
  { word: 'witnessed', meaning: 'saw an event happen directly' },
  { word: 'arrogant', meaning: 'believing you are more important or powerful than others' },
  { word: 'panicked', meaning: 'became suddenly very frightened' },
  { word: 'enslave', meaning: 'force another person to live as a slave' },
];

const glossaryPart1: NonNullable<PageData['vocabulary']> = [
  ...vocabularyOverrides[1],
  ...vocabularyOverrides[2],
  ...vocabularyOverrides[3],
  ...vocabularyOverrides[4],
  ...vocabularyOverrides[5],
  ...vocabularyOverrides[6],
].filter((item, index, items) => items.findIndex(candidate => candidate.word === item.word) === index);

const glossaryPart2: NonNullable<PageData['vocabulary']> = [
  ...vocabularyOverrides[7],
  ...vocabularyOverrides[8],
  ...vocabularyOverrides[9],
  ...vocabularyOverrides[10],
  ...vocabularyOverrides[11],
  ...vocabularyOverrides[12],
  ...vocabularyOverrides[13],
].filter((item, index, items) => items.findIndex(candidate => candidate.word === item.word) === index);

export const mosesB1PagesGoldEn: PageData[] = mosesB1Pages.map(page => {
  if (page.type === 'story' && quickChallengeSpecs[page.id]) {
    return {
      ...page,
      vocabulary: vocabularyOverrides[page.id] ?? page.vocabulary,
      exercises: [buildQuestion(quickChallengeSpecs[page.id])],
    };
  }

  if (page.id === 14) {
    return {
      ...page,
      title: 'Knowledge Check: Moses (pbuh) - B1',
      content: 'Check causes, consequences, character choices, and key events across the story.',
      exercises: knowledgeSpecs.map(buildQuestion),
    };
  }

  if (page.id === 15) {
    return {
      ...page,
      title: 'Vocabulary in Context',
      content: 'Match useful B1 words and phrases from the story with their meanings.',
      vocabularyPairs,
    };
  }

  if (page.id === 16) {
    return {
      ...page,
      content: 'Important B1 words and phrases from Chapters 1–6.',
      vocabulary: glossaryPart1,
    };
  }

  if (page.id === 17) {
    return {
      ...page,
      content: 'Important B1 words and phrases from Chapters 7–13.',
      vocabulary: glossaryPart2,
    };
  }

  if (page.id === 18) {
    return {
      ...page,
      title: 'Review Challenge',
      content: 'Review relationships between events, character choices, and the main lessons of the story.',
      exercises: reviewSpecs.map(buildQuestion),
    };
  }

  if (page.id === 19) {
    return {
      ...page,
      content: 'Complete ten objective questions covering the whole B1 story of Prophet Moses (pbuh).',
      exercises: finalSpecs.map(buildQuestion),
    };
  }

  return page;
});

// The existing Moses B1 teacher guide is already chapter-specific and pedagogically
// strong. The pilot removes worksheet claims that are not backed by repository files.
export const mosesB1TeacherGuideGoldEn: TeacherGuideSection[] = mosesB1TeacherGuide.map(section => ({
  ...section,
  extraResources: undefined,
}));

export const mosesB1GoldContract = {
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 14,
  vocabularyPageId: 15,
  glossaryPageIds: [16, 17] as [number, number],
  reviewPageId: 18,
  finalChallengePageId: 19,
  knowledgeQuestionCount: 8,
  reviewQuestionCount: 8,
  finalQuestionCount: 10,
} as const;
