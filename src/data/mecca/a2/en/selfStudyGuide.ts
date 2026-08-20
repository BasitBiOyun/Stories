import type { TeacherGuideSection, StudentGuideMetadata } from '../../../../types';

type SelfPlan = {
  chapter: string;
  notice: string;
  evidence: string;
  words: string;
  use: string;
  reflect: string;
};

const selfPlans: SelfPlan[] = [
  { chapter: 'Chapter 1: Bilal Ibn Rabah’s Place in Islam', notice: 'Notice the contrast between Bilal’s low social position and the value the chapter gives him.', evidence: 'Find the sentences that say Bilal was born into slavery, was among the first Muslims, and that skin colour does not make a person less valuable.', words: 'openly, Adhan, slave, valuable', use: 'Write three A2 sentences: Bilal was… / Bilal became… / The story teaches…', reflect: 'How can you show another person that their background does not reduce their value?' },
  { chapter: 'Chapter 2: The Age of Ignorance', notice: 'Notice the three social problems: idol worship, weak justice, and the rich–poor gap.', evidence: 'Find one sentence about rich people and one about poor people. Then find what happened when unfair extra money was added to debt.', words: 'ignorance, idol, justice, luxury, faiz', use: 'Make two simple contrasts with but: “Rich people…, but poor people…”', reflect: 'What is one fair action that can reduce unfairness between people?' },
  { chapter: 'Chapter 3: Slaves in Mecca', notice: 'Notice who has power and who has very little power in the chapter.', evidence: 'Find the sentence about Mecca as a centre for slave markets and the sentence identifying Umayya as Bilal’s master.', words: 'system, slave market, Abyssinia, master, enemy', use: 'Explain in two sentences why Umayya had power over Bilal.', reflect: 'Why should power never be used to remove another person’s dignity?' },
  { chapter: 'Chapter 4: Bilal’s Hard Life', notice: 'Notice the difference between Bilal’s hard work and the disrespect he receives.', evidence: 'Find Bilal’s daytime work and one sentence showing how the household treated him.', words: 'hatred, rude, camel, harsh, patient', use: 'Write one sentence about work, one about treatment, and one about patience.', reflect: 'What respectful action would be the opposite of the behaviour in this chapter?' },
  { chapter: 'Chapter 5: A New Message', notice: 'Notice why the ideas of fairness and equality matter to a person with little freedom.', evidence: 'Find what Bilal thinks about his future and the three main ideas he hears from the new message.', words: 'obedient, servant, freedom, fair, equal', use: 'Complete: “The new message mattered to Bilal because…”', reflect: 'How can fairness become an action, not only a word?' },
  { chapter: 'Chapter 6: Visiting Abu Bakr', notice: 'Notice the sequence of Bilal’s secret journey and his purpose for going.', evidence: 'Find the words secretly and hidden path, then find what Bilal did after entering Abu Bakr’s house.', words: 'Creator, secretly, hidden path, knocked, kind', use: 'Retell the visit with first, then, next, finally.', reflect: 'Why is asking sincere questions useful when you want to understand something important?' },
  { chapter: 'Chapter 7: Bilal Accepts Islam', notice: 'Notice that Bilal expects difficulty before he makes his decision.', evidence: 'Find the sentence saying life would be difficult and the sentence explaining why he still accepted Islam.', words: 'partner, equal, supported, truth, accepted', use: 'Write a because sentence explaining Bilal’s choice.', reflect: 'When can doing what you believe is right be harder than choosing comfort?' },
  { chapter: 'Chapter 8: Allah Is One', notice: 'Notice what Umayya tries to force Bilal to do and how Bilal responds.', evidence: 'Find the condition Umayya offers for freedom and Bilal’s repeated answer.', words: 'angrily, refused, rope, whipped, locked', use: 'Write two sentences using refused and because.', reflect: 'What is the difference between persuasion and forcing someone?' },
  { chapter: 'Chapter 9: Abu Bakr Saves Bilal', notice: 'Notice that Abu Bakr first challenges the injustice with a question and then seeks a practical way to help.', evidence: 'Find Abu Bakr’s question about crime and the repeated request to buy Bilal.', words: 'pain, right away, sell, price, crime', use: 'Explain Abu Bakr’s action with “He saw…, so he…”', reflect: 'What safe action can you take when you see someone being treated unfairly?' },
  { chapter: 'Chapter 10: A Free Muslim', notice: 'Notice the difference between buying Bilal to control him and buying him to free him.', evidence: 'Find the price, the removal of the rock, and the sentence saying Abu Bakr freed Bilal.', words: 'agreed, gold, difficulty, rescued, freely', use: 'Write the change as before → after: “Before…, but after…”', reflect: 'Why does genuine help protect another person’s freedom?' },
  { chapter: 'Chapter 11: The First Call to Prayer', notice: 'Notice Bilal’s change from a person with little social power to a trusted public role.', evidence: 'Find what happens after the Hijrah and who chooses Bilal to call people to prayer.', words: 'beloved, respected, hardship, Hijrah, fearlessly', use: 'Write three events using before / after / then.', reflect: 'Why should responsibility be based on trust and ability rather than background?' },
  { chapter: 'Chapter 12: Prayer Is Better Than Sleep', notice: 'Notice the two linked ideas: Bilal’s morning Adhan and the teaching about human equality.', evidence: 'Find the phrase Bilal added and the sentence saying it is wrong to disrespect people because of skin colour.', words: 'morning, pleased, equal, speech, disrespect', use: 'Write one comparison with better than and one equality sentence.', reflect: 'What is one action you can take if you hear discriminatory language?' },
  { chapter: 'Chapter 13: Everyone Is Equal', notice: 'Notice how the ending combines Bilal’s grief with the final lesson about human value.', evidence: 'Find why Bilal leaves Medina, where he goes, and the final sentence about what matters.', words: 'skin color, nationality, allowed, Damascus, matters', use: 'Write a four-sentence summary ending with the story’s main lesson.', reflect: 'What personal action can show that nationality, skin colour, or past do not decide a person’s worth?' },
];

export const meccaA2SelfStudyGuide: TeacherGuideSection[] = selfPlans.map((p) => ({
  chapter: p.chapter,
  timing: '20 minutes',
  objectives: ['Understand the chapter’s main event or idea.', 'Find direct evidence in the story.', 'Use key A2 vocabulary in a short response.', 'Complete the Quick Challenge and check the reason for the answer.'],
  pedagogy: 'Independent evidence-first study using only the chapter text, audio, Word Notes, hotspots, and prepared exercise.',
  lessonPlan: 'Read once for meaning; listen while following the text; read again to mark evidence; complete the Quick Challenge; write a short response; self-check.',
  discussionPoints: [p.reflect],
  interactiveTips: ['Replay the chapter audio once while following the exact text.', 'Use hotspots only to return to evidence already present in the chapter.'],
  differentiation: { strugglingLearners: 'Read one paragraph at a time and use a two-part frame: “The story says ____. This means ____.”', fastFinishers: p.use },
  whatToNotice: [p.notice],
  readListen: ['Read the chapter once silently.', 'Play the chapter audio and follow the same sentences with your eyes.'],
  findAnswerInStory: [p.evidence],
  vocabularyInContext: [p.words, 'Choose two words and make a new A2 sentence for each without changing their meaning.'],
  quickChallengeGuide: 'Answer before checking feedback. Then point to the sentence or event that proves your answer.',
  wrongAnswerSupport: ['Do not guess again immediately.', 'Return to the named chapter evidence, reread the relevant sentence, and then try once more.'],
  selfCheck: ['Can I explain the main idea in one or two simple sentences?', 'Can I point to evidence in the story?', 'Can I use two key words correctly?'],
  useWhatYouLearned: p.use,
  reflectionPrompt: p.reflect,
}));

export const meccaA2StudentGuideMetadata: StudentGuideMetadata = {
  title: 'Mecca A2 — Self-Study Guide',
  level: 'A2',
  language: 'English',
  estimatedStudyTime: 'About 20 minutes per chapter',
  whoIsThisFor: 'A2 learners studying the Bilal ibn Rabah story independently.',
  learningGoals: ['Read and listen for clear evidence.', 'Build useful A2 vocabulary.', 'Explain story events in short sentences.', 'Turn values such as justice and equality into concrete actions.'],
  recommendedUse: ['Study one chapter at a time.', 'Answer before checking feedback.', 'Return to the story whenever an answer is uncertain.'],
};
