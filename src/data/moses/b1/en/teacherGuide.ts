import { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

type ChapterPlan = {
  chapter: string;
  timing: string;
  focus: string;
  evidence: string;
  misconception: string;
  languageSupport: string;
  discussion: string;
  valueAction: string;
};

const plans: ChapterPlan[] = [
  {
    chapter: 'Chapter 1: The Pharaoh’s Fear',
    timing: '45 minutes',
    focus: 'explain why Pharaoh feared the Children of Israel and how fear became oppression',
    evidence: 'Pharaoh sees himself as a god, fears a larger group taking control, treats the Children of Israel harshly and forces them into dangerous work',
    misconception: 'the chapter does not present Pharaoh’s fear as a justification for oppression or his power as proof that he is right',
    languageSupport: 'cause and result with because, so and that’s why; simple relative clause with which; past simple for historical narration',
    discussion: 'How does fear become unfair action in this chapter?',
    valueAction: 'justice — identify one fair action a person with power can take instead of controlling others through fear',
  },
  {
    chapter: 'Chapter 2: The Pharaoh’s Dream',
    timing: '45 minutes',
    focus: 'connect the reported dream, the advisors’ interpretation, Pharaoh’s order and Moses’s mother’s fear',
    evidence: 'Ibn Abbas is named as the source of the dream account, the advisors predict a boy will be born, Pharaoh orders newborn boys killed and Moses’s mother prays for help',
    misconception: 'the dream account and advisors’ prediction must remain source-framed; the teacher should not strengthen them into independent historical certainty',
    languageSupport: 'reported source framing; will for prediction in direct speech; when for time; so...that and unable to for degree/result; could for past possibility',
    discussion: 'Which words show what was reported, predicted and actually done?',
    valueAction: 'responsible judgement — distinguish a report or prediction from an action that someone chooses to take',
  },
  {
    chapter: 'Chapter 3: A Baby in the River',
    timing: '45 minutes',
    focus: 'trace the basket from Moses’s mother to the palace and explain how action, worry and trust work together',
    evidence: 'the mother follows the instruction, the basket is carried by the waters, the sister follows it and Queen Asiye decides to care for Moses',
    misconception: 'trust is not passive in the chapter; Moses’s mother takes concrete steps and the teacher should not add details beyond the text',
    languageSupport: 'imperatives in quoted instruction; passive awareness with was carried away; when/while for simultaneous and sequential events; will for Asiye’s intention; relative clauses with who',
    discussion: 'Which actions in the chapter show both human effort and protection?',
    valueAction: 'trust with action — pair a hope with one responsible practical step',
  },
  {
    chapter: 'Chapter 4: Back to His Mother',
    timing: '45 minutes',
    focus: 'connect Moses’s return to his mother, Asiye’s courage and Moses’s growth and identity',
    evidence: 'Moses’s sister brings his mother as nurse, Asiye raises him with love, Moses grows up safely and feels close to the Children of Israel',
    misconception: 'the chapter covers many years; the return to his mother and Moses’s later young-adult identity should not be taught as one immediate event',
    languageSupport: 'relative clauses with who/that; because for reason; grew up/became for development; was willing to for disposition; past simple and present simple contrast',
    discussion: 'How do family, protection and identity connect across this chapter?',
    valueAction: 'care and courage — describe one concrete action that protects another person’s dignity or safety',
  },
  {
    chapter: 'Chapter 5: A Mistake in the Bazaar',
    timing: '50 minutes',
    focus: 'distinguish accident from intention and analyse remorse, forgiveness and repeated conflict',
    evidence: 'Moses accidentally causes the Egyptian’s death, says he did not do it on purpose, asks forgiveness and later recognises the Israelite as quarrelsome',
    misconception: 'the death is explicitly presented as accidental, not a planned killing; the teacher should not turn the scene into justification for violence',
    languageSupport: 'while/whereas for contrast and background; accidentally vs on purpose; present perfect inside the quoted dua; because for reason; be going to in a near-future question',
    discussion: 'What is the difference between taking responsibility for a mistake and intending harm?',
    valueAction: 'responsibility — name a safe sequence after a serious mistake: stop, tell the truth, seek help and repair what can be repaired',
  },
  {
    chapter: 'Chapter 6: Escape from Egypt',
    timing: '45 minutes',
    focus: 'follow Moses from danger in Egypt to Midian and interpret the new setting through movement, safety and need',
    evidence: 'a friend warns Moses, soldiers are looking for him, he leaves Egypt, Allah guides him, he reaches Midian and finds the two sisters far from the spring',
    misconception: 'Moses is not described as completely alone or without guidance; the chapter explicitly states that Allah guided him',
    languageSupport: 'be going to for imminent threat; imperatives in warning; journey prepositions from/to/near/far from/between; relative clauses with which/where/who; why questions',
    discussion: 'How does the description of place show the movement from danger to a new problem?',
    valueAction: 'seeking safety responsibly — identify when leaving danger and asking for guidance is the responsible choice',
  },
  {
    chapter: 'Chapter 7: The Two Sisters',
    timing: '45 minutes',
    focus: 'explain why the sisters have to wait and what Moses’s help reveals about patience, need and service',
    evidence: 'their father is old, there are no young men at home, they have to wait their turn, Moses waters the sheep and they return early',
    misconception: 'the sisters are not presented as passive or lazy; they already carry responsibility and are waiting because of the situation at the water',
    languageSupport: 'have to/had to for obligation; cannot for inability; until for an endpoint; ourselves for reflexive emphasis; when for time; because/that’s why for reason',
    discussion: 'Which details show that Moses’s help answers a real need rather than replacing the sisters’ responsibility?',
    valueAction: 'helpfulness — offer support that responds to a real need without humiliating the person receiving it',
  },
  {
    chapter: 'Chapter 8: A Simple Life in Midian',
    timing: '45–50 minutes',
    focus: 'trace the transition from gratitude and work in Midian to marriage, ten years of stability and the return journey to Egypt',
    evidence: 'Şuayb invites Moses, offers him work, Moses accepts because he needs work and housing, later marries, then decides to return and sees a fire during the journey',
    misconception: 'the chapter does not present Moses as only receiving help; he contributes through work and then makes a new decision after years of stability',
    languageSupport: 'would like to for polite intention; because for reason; while for concurrent background; after + -ing for sequence; decide to; past continuous/background description; suddenly; let me + verb',
    discussion: 'How does the chapter show movement from need to contribution and then to a new decision?',
    valueAction: 'gratitude through contribution — identify one useful way to respond after receiving help',
  },
  {
    chapter: 'Chapter 9: The Voice on the Mountain',
    timing: '45–50 minutes',
    focus: 'identify the signs given to Moses and explain the mission that follows the revelation',
    evidence: 'Allah speaks to Moses, commands him to put down the staff and show his hand, identifies the signs and sends him to Pharaoh with a message',
    misconception: 'the signs are given by Allah; they are not independent powers belonging to Moses, and no external sacred detail should be added',
    languageSupport: 'reported commands with told + object + to; imperatives in direct speech; infinitive of purpose; turned into for change; after/upon this for sequence; warn + object + to',
    discussion: 'How do the commands, signs and mission connect in the chapter?',
    valueAction: 'responsible listening — repeat an important instruction accurately before acting on it',
  },
  {
    chapter: 'Chapter 10: The King’s Magicians',
    timing: '50 minutes',
    focus: 'analyse Moses and Harun’s attempt to communicate with Pharaoh and the shift from explanation to displaying the signs',
    evidence: 'Moses takes Harun as companion, explains his message, Pharaoh refuses, Moses realises discussion will not work and displays the staff and shining hand',
    misconception: 'the text says Pharaoh thinks Moses has lost his mind and later laughs; the teacher should not add a different debate or claims not present here',
    languageSupport: 'past continuous for palace background; explain that; after + -ing; kept + -ing; had no choice but to; in order to for purpose; but/therefore for contrast and result',
    discussion: 'What changes in Moses’s approach after Pharaoh keeps refusing?',
    valueAction: 'clear communication — explain a position calmly, notice whether communication is working and choose a non-harmful next step',
  },
  {
    chapter: 'Chapter 11: The Miracle of the Staff',
    timing: '50 minutes',
    focus: 'sequence the contest and compare the magicians’ response with Pharaoh’s continued refusal',
    evidence: 'the ropes and sticks look like snakes, Moses becomes frightened, his staff becomes a huge snake, the magicians witness the miracle and believe while Pharaoh still refuses',
    misconception: 'the chapter distinguishes the appearance of the magicians’ ropes from the miracle of Moses’s staff; do not flatten both into the same kind of event',
    languageSupport: 'once/when for time; looked like for appearance; relative clause with who witnessed; still for continuation; because for reason; continued to + verb for repeated action',
    discussion: 'Why do the magicians change their position while Pharaoh does not?',
    valueAction: 'intellectual humility — state one example of changing your view when strong evidence appears',
  },
  {
    chapter: 'Chapter 12: The Red Sea',
    timing: '50 minutes',
    focus: 'follow the secret night departure, the slow caravan, Pharaoh’s pursuit and the contrast between panic and trust at the sea',
    evidence: 'Moses is told to travel at night, tells people to keep the plan secret, the old and children cannot walk fast, Pharaoh catches up and Moses tells the people Allah will show the way to safety',
    misconception: 'the chapter ends with the group trapped/seized; the sea has not yet opened in this chapter',
    languageSupport: 'must/should for obligation and advice; will for future reassurance; could not for past inability; that’s why for result; managed to/catch up with; when for sequence',
    discussion: 'How does Moses respond differently from the people when the danger becomes immediate?',
    valueAction: 'calm leadership — give one short, truthful and calming instruction in a stressful but safe classroom scenario',
  },
  {
    chapter: 'Chapter 13: The Cruel King Drowns',
    timing: '50 minutes',
    focus: 'synthesise the sea miracle, Pharaoh’s false claim, his drowning and the story’s final lessons about freedom, guidance and power',
    evidence: 'the sea parts after Allah commands Moses to strike it, the people cross safely, Pharaoh claims the sea opened at his order, the sea closes over the army and the chapter states final lessons',
    misconception: 'Moses does not open the sea by independent power and Pharaoh’s claim is presented as false; final universal claims must be reported exactly as the source frames them',
    languageSupport: 'when for sequence; passive/result awareness with were trapped/was opened only where supported; present simple for stated general lessons; can/cannot for ability; past simple for final retelling',
    discussion: 'Which final events directly answer the story’s earlier themes of oppression and guidance?',
    valueAction: 'freedom with responsibility — name one action that protects another person’s dignity and freedom',
  },
];

const makeSection = (p: ChapterPlan): TeacherGuideSection => ({
  chapter: p.chapter,
  timing: p.timing,
  objectives: [
    `Explain the chapter focus: ${p.focus}.`,
    `Support one interpretation with direct evidence, especially: ${p.evidence}.`,
    `Use contextual B1 language from the chapter: ${p.languageSupport}.`,
    `Turn the chapter value into an observable action: ${p.valueAction}.`,
  ],
  pedagogy: `Use a TYMM-compatible meaning → evidence → language noticing → production route. Learners first listen/read for meaning, then return to the exact chapter evidence, complete the existing page exercise, notice useful B1 language already present in the story, and reuse selected patterns in connected speaking or writing. Do not invent a separate Language Focus resource.`,
  priorKnowledge: ['Recall the previous chapter’s turning point.', 'Distinguish a direct story fact from an inference or interpretation.'],
  anticipatedMisconceptions: [p.misconception],
  grammarFocus: `Contextual language support from the current chapter: ${p.languageSupport}.`,
  pronunciationFocus: 'Use the chapter Word Notes and proper names. Rehearse one evidence sentence with clear stress, pausing and connected speech appropriate to B1.',
  beforeReading: [`Prediction: What evidence might help us ${p.focus}?`, 'Preview only the vocabulary needed for comprehension.'],
  duringReading: [`Listen/read first for gist, then locate: ${p.evidence}.`, 'Mark one cause, contrast, time link, command, description or other language relationship that helps the chapter meaning.'],
  afterReading: [
    `Discuss: ${p.discussion}`,
    'Complete the exercise that actually appears on the chapter page and correct any wrong answer by returning to the text.',
    `Guide a short noticing stage using: ${p.languageSupport}.`,
    'Finish with a 5–8 sentence or short B1 speaking/writing transfer in a new non-story context using one or two selected patterns naturally.',
  ],
  lessonPlan: '0–5 min: activate prior knowledge. 5–12: listen/read for gist. 12–23: close reading and evidence. 23–30: pair discussion. 30–34: existing chapter exercise and repair. 34–40: contextual language noticing/practice. 40–47: B1 speaking/writing transfer. Final minutes: exit ticket.',
  discussionPoints: [p.discussion, `What is the strongest evidence: ${p.evidence}?`, 'Which part is directly stated and which part is your interpretation?'],
  interactiveTips: ['Use only the audio, Word Notes/vocabulary, hotspots and exercise that actually exist on the current page.', 'Do not direct learners to a separate Language Focus because no student-facing Moses B1 Language Focus currently exists.', 'Use hotspots to return to evidence rather than introduce extra history or doctrine.'],
  differentiation: {
    strugglingLearners: `Provide two sentence frames and select only one relationship from: ${p.languageSupport}. Keep the same meaning/evidence target.`,
    fastFinishers: `Write 90–120 words answering “${p.discussion}” with two textual details and at least two natural links from the chapter language support.`,
  },
  formativeAssessment: ['Accuracy of chapter evidence', 'Comprehension of cause/sequence/contrast or character motivation', 'Appropriate use of contextual B1 language', 'Connected speaking/writing', 'Correction of the existing page exercise from evidence'],
  expectedResponses: [`A sound response should refer to ${p.evidence}.`, `It should explain ${p.focus} without adding unsupported information.`, `The value response should describe the concrete action: ${p.valueAction}.`],
  transferTask: `Use the chapter method in a new context: state a point, give a reason or example, use one or two patterns from ${p.languageSupport}, then describe one action linked to ${p.valueAction}.`,
  teacherReflection: 'Did learners build meaning before language analysis? Could they justify interpretations with the actual text? Did the language work support communication rather than become a detached grammar lesson?',
});

export const mosesB1TeacherGuide: TeacherGuideSection[] = plans.map(makeSection);

export const mosesB1TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Teacher Guide — Prophet Moses (B1)',
  subtitle: 'TYMM-aligned, chapter-specific guidance based on the current 13-chapter student text',
  level: 'B1',
  estimatedDuration: '13 lessons, about 45–50 minutes per story chapter',
  targetAudience: 'Turkish middle-school/early high-school and other CEFR B1 English learners using the current Prophet Moses story.',
  targetLearners: 'Learners who can follow connected narrative, identify direct evidence, explain cause and sequence, compare character responses and produce short connected B1 speech and writing.',
  purpose: 'Align teaching with the current 13 story chapters, their audio, vocabulary, hotspots and exercises while integrating TYMM receptive/productive skills, contextual language support and values-as-action.',
  approachDesc: `Follow the TYMM receptive-to-productive cycle: listening/viewing and reading for meaning (YDAB1–YDAB2), contextual noticing of grammar/vocabulary/pronunciation as supporting skills, then connected speaking and writing (YDAB3–YDAB4). Supporting language serves communication and meaning rather than functioning as a detached grammar syllabus. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Gist/detail responses, evidence selection, existing chapter exercises, contextual language use, pair speaking, short B1 writing, exit tickets and the existing final review tasks.',
  assessmentOverview: {
    formative: ['Gist and evidence checks', 'Existing chapter exercise plus evidence repair', 'Contextual language noticing', 'Short connected speaking/writing', 'Exit tickets and teacher feedback'],
    summative: ['Existing final review exercises and a supported whole-story B1 synthesis/retelling'],
  },
  readingFramework: {
    before: 'Activate relevant prior knowledge and set one purposeful prediction without pre-teaching the interpretation.',
    during: 'Listen/read for gist first, then return to direct evidence, cause, sequence, contrast, source framing, character motivation and language relationships.',
    after: 'Complete the actual page exercise, notice useful language already present in the chapter, and finish with a connected B1 transfer task.',
  },
  vocabularyApproach: { selection: 'Prioritise the current page vocabulary/Word Notes and words needed for comprehension or transfer.', method: 'Infer from context before direct explanation where possible.', recycling: 'Reuse vocabulary in evidence discussion, contextual language practice, exit tickets and later retelling.' },
  grammarApproach: 'There is currently no separate student-facing Moses B1 Language Focus source. Therefore, teach only contextual language structures that are actually present in the current chapter text. Do not tell learners to open a nonexistent Language Focus and do not replace the source with an unrelated grammar sequence.',
  grammarSequence: plans.map((p, index) => `Ch${index + 1}: ${p.languageSupport}`),
  skillsFocus: {
    reading: 'TYMM YDAB2: identify direct evidence, follow connected narrative, infer simple motives and understand cause, contrast and sequence.',
    listening: 'TYMM YDAB1: listen for gist, then revisit targeted details and language relationships.',
    speaking: 'TYMM YDAB3: explain evidence, retell, compare, give reasons and respond in connected B1 turns.',
    writing: 'TYMM YDAB4: produce short connected paragraphs using chapter-derived vocabulary and language relationships.',
  },
  valuesFocus: [
    'D6 Honesty — distinguish what the text says from interpretation and take responsibility for mistakes.',
    'D10 Humility — remain open to evidence instead of acting through arrogance.',
    'D12 Patience — manage difficulty through steady and active effort.',
    'D14 Respect — discuss people, beliefs and disagreement without humiliation.',
    'D16 Responsibility — accept consequences and act to protect safety and dignity.',
    'D20 Helpfulness — respond to real need through respectful help.',
    `Use a value only where the chapter gives concrete support; see ${TYMM_VALUES}.`,
  ],
  languageFocus: [
    'Source status: no separate student-facing Language Focus exists in src/data/moses/b1/en.',
    'Teacher-side language support must come from structures actually present in each current English chapter.',
    'Do not ask learners to open or complete a Language Focus until such a source is genuinely added.',
    'If a student-facing Language Focus is added later, re-audit all 13 chapter targets and link the guide to the new source.',
  ],
  differentiationNotes: 'Reduce output length and language choices while preserving the same evidence target. Extend stronger B1 learners through clearer reasons, comparison, paragraph cohesion and source-aware interpretation rather than unrelated B2 grammar or extra historical claims.',
};