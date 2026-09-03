import type { TeacherGuideMetadata, TeacherGuideSection } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

type Plan = {
  n: number;
  title: string;
  focus: string;
  evidence: string;
  language: string;
  pronunciation: string;
  value: string;
  misconception: string;
  expected: string;
  transfer: string;
};

const plans: Plan[] = [
  {
    n: 1,
    title: 'Introduction & The Creation',
    focus: 'how Adam is introduced, the stated human role on earth, and the shift from source commentary to past narration',
    evidence: 'the chapter presents what the Qur’an tells or describes in the present, then narrates creation in the past and reports what was still going to happen from that past viewpoint',
    language: 'source-present vs past narrative; after; told/said that; began to; was going to / would for future viewed from a past moment',
    pronunciation: 'Use the chapter audio to hear meaning groups in reported information. Rehearse one sentence with “after” and one with “was going to / would”, pausing at the clause boundary rather than reading word by word.',
    value: 'D16 Responsibility — understand entrusted authority as responsibility rather than unrestricted power',
    misconception: 'Do not present the human role as unlimited power or the angels as enemies of Adam; neither claim is supported by the chapter.',
    expected: 'The source is presented in the present, creation is narrated in the past, and “was going to / would” looks forward from a past point in the story.',
    transfer: 'Describe a past school plan using one completed event and one thing that was going to happen next.',
  },
  {
    n: 2,
    title: 'The Shaping of Adam',
    focus: 'the two cause-result relationships in the chapter: different soil and human diversity, then intellect/knowledge and learning',
    evidence: 'the text links soil from different lands with diversity and separately links intellect and knowledge with learning and understanding',
    language: 'so / that’s why; reported speech and direct instruction; after; purpose with to; later; more ... than',
    pronunciation: 'Rehearse “so / that’s why” with clear result stress, then chunk a purpose phrase with “to + verb” and a comparison with “more ... than” so the relationship between ideas is audible.',
    value: 'D14 Respect — reject superiority based on origin, colour or group and treat diversity respectfully',
    misconception: 'Do not merge the two cause-result chains or reduce knowledge to memorising facts; the chapter keeps these ideas distinct.',
    expected: 'Different soil is linked with diversity, while intellect and knowledge are linked with learning and understanding.',
    transfer: 'Explain a new learning situation using one cause-result link, one purpose phrase and one comparison.',
  },
  {
    n: 3,
    title: 'Iblis’s Arrogance',
    focus: 'Iblis’s reasoning, the chapter’s rejection of his criterion, and the distinction between character viewpoint and narrator message',
    evidence: 'Iblis judges Adam by origin while the chapter rejects origin, race, colour or group as the source of greatness and contrasts this with Adam’s knowledge',
    language: 'thought/believed; but/however; better than / more ... than; because; couldn’t; which made ...; come from',
    pronunciation: 'Model one reported-belief sentence and one contrast sentence. Stress the compared qualities in “better/more ... than” and pause before “however” so viewpoint and narrator contrast remain clear.',
    value: 'D14 Respect / D10 Humility — reject origin-based superiority and recognise arrogance as a faulty basis for judgment',
    misconception: 'The story does not endorse the claim that fire is superior to soil, and it does not present race, colour or group as a valid measure of greatness.',
    expected: 'Iblis believes his origin makes him superior, but the chapter rejects that criterion and separates his belief from the narrator’s conclusion.',
    transfer: 'Report two opinions about a neutral topic, give the reason for one view, then introduce a contrasting conclusion.',
  },
  {
    n: 4,
    title: 'The Expulsion of Iblis',
    focus: 'the chain from pride to blame, hostility, intended harm and warning',
    evidence: 'Iblis continues his claim, becomes hostile, blames Adam, looks for a chance to mislead him, and Adam receives a warning',
    language: 'continued + -ing; got + adjective; want + object + to; because of + noun; thought; chance to; keep + object + away from; told + object + to',
    pronunciation: 'Use the audio to group “continued + -ing”, “because of ...” and “told + object + to ...” as complete meaning chunks. Stress the warning verb and the action that follows it.',
    value: 'D6 Honesty / D16 Responsibility — contrast accountability with blaming others and respond to warnings responsibly',
    misconception: 'Do not say Iblis accepts responsibility after expulsion or that Adam receives no warning; both would contradict the chapter.',
    expected: 'Iblis continues his position, becomes hostile and blames Adam, while the chapter also reports a warning given to Adam.',
    transfer: 'Write a short neutral scenario in which one person warns another about a harmful plan and explain the reason.',
  },
  {
    n: 5,
    title: 'Life in Paradise and the Warning',
    focus: 'companionship, abundance, the single restriction, and deception through false appearance and a claimed conditional result',
    evidence: 'the chapter presents many blessings but one restriction, then shows Iblis approaching while pretending friendship and making a conditional promise',
    language: 'start to / begin + -ing; called; purpose to be; more ... than; can; ask + object + not to; when; -ing for manner; if + past ... would + verb inside the reported claim',
    pronunciation: 'Rehearse the negative instruction as one chunk and contrast “when ...” background with the main event. In the reported “if ... would ...” claim, pause after the if-clause so condition and result remain distinct.',
    value: 'D16 Responsibility — recognise boundaries, evaluate claims carefully and make responsible choices',
    misconception: 'The chapter gives one restriction, not many; Iblis does not approach openly as an enemy, and the conditional promise belongs to his claim rather than to narrator truth.',
    expected: 'There is one restriction; Iblis presents himself as a friend and makes a false conditional promise.',
    transfer: 'Write a neutral situation with one negative instruction and a claimed condition-result, then state why the claim should be checked.',
  },
  {
    n: 6,
    title: 'Satan’s Lies and Adam’s Departure from Paradise',
    focus: 'the sequence from influence to action, emotion, change, discovery and reaction, including the chapter’s interpretation of modesty',
    evidence: 'the chapter places the earlier warning before the action, then describes deception, emotion, change, discovery and an attempt to cover',
    language: 'managed to; convinced + object + to; past perfect; when; became; so; started + -ing; discover that; purpose to; because; hurried to',
    pronunciation: 'Use a timeline sentence to contrast the earlier past with the main past narrative. Rehearse “so”, “to + verb” and “because” with short pauses that keep result, purpose and cause separate.',
    value: 'D6 Honesty / D10 Humility — recognise a mistake, respond without concealment or pride, and keep interpretation within source evidence',
    misconception: 'Do not turn the chapter’s interpretation of modesty into an unsupported universal claim or add graphic detail to the scene.',
    expected: 'An earlier warning is followed by deception, action, emotional reaction, change, discovery and an attempt to cover.',
    transfer: 'Describe a neutral situation in which an earlier warning is forgotten, then explain the result, purpose of the response and cause.',
  },
  {
    n: 7,
    title: 'Forgiveness and Repentance',
    focus: 'the contrast between Adam and Eve’s response and Iblis’s response, with repentance presented as regret, learning and changed intention',
    evidence: 'Adam and Eve regret, learn and decide not to repeat the mistake, while Iblis does not admit error; responsibility continues on earth',
    language: 'not on purpose; learn from; decide never to; direct speech; want + object + to; because; on the other hand; purpose to; would; make + object + adjective',
    pronunciation: 'Practise “because” and “on the other hand” as discourse signals. Rehearse “decided never to ...” and the future-responsibility “would ...” clause with stress on the decision and responsibility.',
    value: 'D6 Honesty / D10 Humility / D16 Responsibility — admit error, learn from it and turn regret into changed action',
    misconception: 'Repentance in the chapter is not only sadness, and life on earth is not framed only as punishment; future responsibility is part of the account.',
    expected: 'Adam and Eve regret the mistake, learn from it and decide not to repeat it, in contrast with Iblis’s refusal to admit error.',
    transfer: 'Apply an admit–repair–prevent sequence to a small everyday mistake in four connected B1 sentences.',
  },
  {
    n: 8,
    title: 'Struggle and Survival on Earth',
    focus: 'practical responsibilities on earth and how necessity, purpose, means, cause and duration turn stewardship into concrete action',
    evidence: 'the chapter names work for food and shelter, protection, care for nature and the weak, and describes both good and difficult periods over time',
    language: 'would for expected role; had to; purpose with to; in addition; with for means; because; for + duration; both ... and ...',
    pronunciation: 'Stress “had to” when expressing necessity, then group “to + verb” as purpose. Rehearse “in addition” as an additive signal and “both ... and ...” with balanced stress.',
    value: 'D16 Responsibility / D5 Sensitivity / D20 Helpfulness — connect stewardship with work, care for nature, protection and help for vulnerable people',
    misconception: 'Stewardship is not only a title and the chapter is not limited to personal survival; it names wider responsibilities as well.',
    expected: 'The chapter turns responsibility into practical actions for food, shelter, protection of nature, care for the weak and self-protection.',
    transfer: 'Describe four responsibilities in a class project using necessity, purpose, addition and cause.',
  },
  {
    n: 9,
    title: 'The First Messenger and the Path of Guidance',
    focus: 'Adam’s changing role as a community develops, the purpose of teaching, and the continuing need for guidance',
    evidence: 'the chapter describes a new messenger role, continued teaching about right conduct and remembrance, and later guidance continuing after Adam',
    language: 'time clauses; became; never stopped + -ing; started teaching; teach + object + to; purpose to; wanted to; make + object + base verb',
    pronunciation: 'Use time markers to divide the narrative into stages. Rehearse “started teaching / never stopped ...” with clear stress on continuation and group each purpose phrase with the action it explains.',
    value: 'D16 Responsibility — understand guidance as a continuing responsibility toward a community',
    misconception: 'The chapter does not present guidance as needed only once or Adam’s teaching as limited to a single ritual action.',
    expected: 'Adam’s role develops into teaching a community, and the chapter presents moral guidance and remembrance as continuing beyond one moment.',
    transfer: 'Describe someone beginning to guide a group, including a new role, teaching action, purpose and continuing influence.',
  },
  {
    n: 10,
    title: 'The Two Sons: Habil and Qabil',
    focus: 'how the brothers’ actions reveal different intentions and how the chapter moves from role and shared obligation to contrast and a general principle',
    evidence: 'Habil gives his best sheep while Qabil gives a low-value handful without care, and the chapter links the contrast to sincerity rather than profession alone',
    language: 'grew up / became; regular past description; purpose to; had to; but/while/however; did not care to; general principle with be + -ing',
    pronunciation: 'Use balanced stress when contrasting Habil and Qabil. Rehearse “had to” for shared obligation, then pause before “but/while/however” to make the different choices clear.',
    value: 'D6 Honesty / D20 Helpfulness — connect sincerity with giving one’s best rather than judging by labels or quantity alone',
    misconception: 'Do not say Habil’s offering is accepted simply because he is a shepherd or that quantity alone proves sincerity.',
    expected: 'The brothers share an obligation but respond differently; the text uses their choices as evidence for sincerity and effort.',
    transfer: 'Compare two approaches to the same neutral task and state one general principle about sincere effort.',
  },
  {
    n: 11,
    title: 'The First Conflict and the Raven',
    focus: 'the escalation from anger to violence, panic and regret, Habil’s refusal to harm, and the raven’s limited role in showing burial',
    evidence: 'Habil refuses harm and gives reasons, Qabil escalates to killing, then panics and learns from the raven how to bury the body',
    language: 'because; will for threat/intention; won’t for refusal; past evaluation; worse/worst; embedded what ... should ...; cannot; when; started + -ing; guidance with showed ... the way to ...',
    pronunciation: 'Contrast “will” in the threat with “won’t” in refusal through sentence stress. Rehearse uncertainty chunks such as “what ... should ...” without rushing the embedded clause.',
    value: 'D12 Patience / D9 Compassion — manage anger, refuse harm and focus on prevention, consequence and repair',
    misconception: 'Habil does not answer the threat with equal violence, and the raven does not cause the killing; keep the violence calm and non-graphic.',
    expected: 'Habil refuses to harm his brother; Qabil kills him, panics and later learns burial from the raven.',
    transfer: 'Write two practical steps for interrupting an argument before anger controls the next action, then explain why they help.',
  },
  {
    n: 12,
    title: 'The Legacy of Adam',
    focus: 'whole-book synthesis connecting jealousy, anger, repentance, responsibility, good action and continuing guidance',
    evidence: 'the final chapter draws lessons from earlier events and presents guidance as a message that still matters, while stressing admitting mistakes and turning back after error',
    language: 'suggests that ... should; as + role context; had to; still; never; over the years; parallel actions/purposes; the importance of + -ing',
    pronunciation: 'Rehearse “suggests that ... should ...” as one recommendation frame, then stress “still” when linking past and present. Use balanced rhythm for parallel purpose/action phrases.',
    value: 'D6 Honesty / D16 Responsibility — admit mistakes, act well and carry useful guidance forward through responsible choices',
    misconception: 'The legacy is not only the story of the two sons, and the final chapter does not teach that mistakes should be hidden.',
    expected: 'The final chapter warns against jealousy and uncontrolled anger, encourages repentance and good action, and presents guidance as continuing help.',
    transfer: 'Describe a useful lesson that still matters today and state one action people should take because of it.',
  },
];

const learningEvidenceRubric = [
  'Source evidence — uses accurate evidence from the chapter and keeps claims inside the project text.',
  'Language function — identifies what the selected Chapter Language Focus pattern does in context.',
  'B1 control — reuses target language accurately enough to keep meaning clear.',
  'Connected reasoning — links ideas through cause, contrast, sequence, purpose, viewpoint or consequence rather than listing isolated sentences.',
  'Transfer and values — applies the learning to a realistic new context while clearly separating source evidence from personal reflection.',
];

export const adamB1TeacherGuide: TeacherGuideSection[] = plans.map((p) => ({
  chapter: `Chapter ${p.n}: ${p.title}`,
  timing: '45–50 minutes',
  objectives: [
    `Understand and explain the chapter focus: ${p.focus}.`,
    `Locate and use direct story evidence: ${p.evidence}.`,
    `Notice and practise the actual Chapter ${p.n} Language Focus: ${p.language}.`,
    'Transfer two or more useful chapter patterns into a short connected B1 spoken or written response.',
    `Connect the chapter evidence to ${p.value} through a realistic observable action.`,
  ],
  pedagogy: `Use a TYMM meaning-first route. YDAB1 listening and YDAB2 reading establish gist, sequence, viewpoint and evidence before language analysis. The Quick Challenge checks comprehension. Chapter ${p.n} Language Focus then makes the actual discourse and grammar relationships visible. YDAB3 speaking and YDAB4 writing require a connected B1 transfer rather than isolated example sentences. Values remain evidence-first and action-based: ${p.value}.`,
  priorKnowledge: p.n === 1
    ? ['Students can follow connected past narration and recognise familiar present/past forms and common discourse links.']
    : [`Recall one event, contrast or responsibility from Chapter ${p.n - 1} that helps learners enter this chapter without retelling the whole book.`],
  anticipatedMisconceptions: [p.misconception],
  grammarFocus: `Chapter Language Focus: ${p.language}.`,
  pronunciationFocus: p.pronunciation,
  beforeReading: [
    'Use the chapter title, image or one key concept to make a purposeful prediction. Keep predictions separate from facts until learners find evidence.',
  ],
  duringReading: [
    `Locate and mark this evidence chain: ${p.evidence}.`,
    'Listen once for overall meaning, then listen/read again for the exact clause or sentence that carries a major Language Focus relationship.',
    'Mark who holds each viewpoint and which connector or structure links one idea to the next.',
  ],
  afterReading: [
    'Complete the chapter Quick Challenge and justify at least one response with direct textual evidence.',
    `Open Chapter ${p.n} Language Focus. Return to the original chapter sentence first, identify the communicative job of the form, then complete the prepared task for: ${p.language}.`,
    'Complete the Language Focus production/reflection task and reuse at least two target patterns in one connected B1 response.',
    p.transfer,
  ],
  lessonPlan: `0–5 min focused recall/prediction; 5–18 min read + listen for meaning; 18–27 min evidence and relationship marking; 27–32 min Quick Challenge; 32–42 min Chapter ${p.n} Language Focus guided noticing/practice; 42–47 min connected B1 transfer; 47–50 min evidence/value exit response.`,
  discussionPoints: [
    'Which sentence or clause gives the strongest evidence for the chapter’s main idea?',
    'Which language relationship makes the reasoning or sequence easier to follow?',
    `How can ${p.value} be shown through an observable action without turning personal reflection into a new story claim?`,
  ],
  interactiveTips: [
    'Use only student-facing images, audio, Word Notes, hotspots, Quick Challenge and Language Focus that actually exist for this chapter.',
    'When a Language Focus answer is uncertain, return to the exact source sentence before explaining terminology.',
    'Keep character viewpoint, narrator message and learner reflection visibly separate.',
  ],
  differentiation: {
    strugglingLearners: `Reduce language load while keeping the reasoning goal. Pre-select one evidence sentence and two useful connectors from: ${p.language}. Rehearse orally with a short frame before writing a 3–4 sentence response.`,
    fastFinishers: `Write a 5–6 sentence B1 paragraph in a new context using at least three Chapter ${p.n} Language Focus patterns, then identify which relationship each pattern expresses.`,
  },
  formativeAssessment: [
    'Locates accurate chapter evidence.',
    'Explains the meaning/function of at least one Language Focus pattern.',
    'Produces a connected response using at least two target patterns.',
    'Keeps viewpoint, interpretation and personal transfer appropriately separated.',
  ],
  expectedResponses: [p.expected],
  transferTask: p.transfer,
  teacherReflection: 'Did learners understand the chapter before analysing language? Did Language Focus strengthen connected explanation, viewpoint control and transfer rather than become a detached grammar exercise?',
  assessmentTools: {
    rubric: learningEvidenceRubric,
    exitTicket: ['Give one evidence-based sentence from the chapter, explain one Language Focus relationship, and write one new connected sentence using that relationship.'],
  },
  extraResources: p.n === 1 ? {
    links: [
      { label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN },
      { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES },
    ],
  } : undefined,
}));

export const adamB1TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Teacher Guide — Prophet Adam (B1)',
  subtitle: 'TYMM-aligned, evidence-first guide with chapter-specific Language Focus and connected B1 transfer',
  level: 'B1',
  estimatedDuration: '12 × 45–50 minutes',
  targetAudience: 'Secondary-school learners studying English at approximately CEFR B1.',
  targetLearners: 'Learners who can follow connected narrative, trace cause, contrast, purpose, viewpoint and consequence, and produce short evidence-based spoken and written responses.',
  purpose: 'Develop English through story comprehension, listening, evidence-based reading, actual chapter-specific Language Focus, connected B1 production, reflection and values-as-action without adding facts outside the source text.',
  approachDesc: `Follow one TYMM route in every chapter: establish meaning through listening/viewing and reading (YDAB1–YDAB2), check comprehension with the Quick Challenge, open the actual chapter Language Focus for guided noticing of grammar and discourse relationships, then transfer selected patterns to connected speaking or writing (YDAB3–YDAB4). Language Focus follows comprehension and remains attached to the chapter evidence. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Chapter Quick Challenges, evidence checks, chapter Language Focus tasks, short connected oral/written transfer, exit tickets, Knowledge Check, B1 Language Review, Vocabulary Challenge and Final Challenge.',
  assessmentOverview: {
    formative: ['Chapter Quick Challenges', 'Evidence checks', 'Language Focus guided practice and production', 'Short connected speaking/writing transfer', 'Exit tickets', 'Knowledge Check', 'B1 Language Review', 'Vocabulary Challenge'],
    summative: ['Final Challenge'],
  },
  readingFramework: {
    before: 'Activate only the knowledge needed for the chapter and make one purposeful prediction without treating it as fact.',
    during: 'Read/listen first for meaning, then return to evidence, sequence, cause/result, viewpoint, comparison, purpose and consequence. Mark relationships across clauses and paragraphs rather than stopping for every word.',
    after: 'Complete the Quick Challenge, then Chapter Language Focus, then one connected B1 transfer response using two or more target patterns.',
  },
  vocabularyApproach: {
    selection: 'Prioritise the chapter Word Notes and only additional words required to understand the story or complete the learning task.',
    method: 'Infer meaning from context, image, hotspot or audio before giving a direct definition.',
    recycling: 'Reuse target vocabulary in Language Focus production, discussion, exit tickets and the later whole-book review sequence.',
  },
  grammarApproach: 'Teach grammar and discourse through the existing chapter-specific Language Focus. Locate the form in the story, identify its communicative job, complete the prepared task, then reuse the pattern in a new connected B1 context. Do not replace chapter Language Focus with unrelated grammar drills.',
  grammarSequence: plans.map((p) => `Ch${p.n}: ${p.language}`),
  skillsFocus: {
    listening: 'TYMM YDAB1: follow connected narration for gist, key details, sequence, viewpoint and meaning-bearing language patterns.',
    reading: 'TYMM YDAB2: identify explicit evidence, trace relationships across clauses and paragraphs, distinguish character viewpoint from narrator message and synthesise across chapters.',
    speaking: 'TYMM YDAB3: explain cause, contrast, motivation, consequence and values-as-action using connected B1 language and text evidence.',
    writing: 'TYMM YDAB4: produce short coherent paragraphs using chapter language, evidence and appropriate discourse links, then review meaning and accuracy.',
  },
  valuesFocus: [
    'D5 Sensitivity — care for nature, vulnerable people and the effects of harmful choices',
    'D6 Honesty — accurate self-evaluation, admitting mistakes and evidence-based claims',
    'D9 Compassion — non-harm, forgiveness and sensitivity to suffering',
    'D10 Humility — rejecting arrogance and accepting correction',
    'D12 Patience — managing reactions, conflict and anger',
    'D14 Respect — rejecting superiority based on origin, colour or group and using respectful language',
    'D16 Responsibility — stewardship, work, repair after mistakes and responsible choices',
    'D20 Helpfulness — helping vulnerable people and giving one’s best',
  ],
  languageFocus: [
    'All 12 story chapters have active, student-facing chapter-specific Language Focus.',
    'Use Language Focus only after learners understand the chapter and complete the core comprehension check.',
    'Return to the actual story sentence before discussing form or function, especially where the language expresses a character claim rather than narrator truth.',
    'Finish each Language Focus with connected transfer rather than isolated grammar examples.',
    'After Chapter 12, use the separate B1 Language Review for cross-chapter consolidation before the Final Challenge.',
  ],
  differentiationNotes: 'Reduce language load without reducing the thinking goal: use one evidence sentence at a time, selected vocabulary, audio replay, oral rehearsal and a limited number of Language Focus patterns. Extend through synthesis, viewpoint control and connected explanation rather than extra unsupported facts.',
  sensitiveNotes: {
    title: 'Source and content safeguards',
    notes: [
      'Keep religious and historical claims within the project story text.',
      'Handle the Habil–Qabil conflict calmly and without graphic elaboration; focus on escalation, refusal of harm, consequence and prevention.',
      'Distinguish character claims from narrator message, especially in Chapters 3 and 5.',
      'Do not present learner reflection or value-transfer examples as new religious facts.',
    ],
  },
  valuesEducation: {
    title: 'TYMM Values in Action',
    description: `Use only values genuinely supported by chapter evidence. Require story evidence first, then connect the value to an age-appropriate observable action. See ${TYMM_VALUES}.`,
    items: [
      { label: 'D14 Respect', value: 'Respect appears through rejection of origin-based superiority and fair treatment.' },
      { label: 'D16 Responsibility', value: 'Responsibility becomes visible through stewardship, work, decision-making and repair after error.' },
      { label: 'D6 Honesty / D10 Humility', value: 'Admitting error and rejecting arrogance are treated as concrete choices.' },
      { label: 'D5 Sensitivity / D20 Helpfulness', value: 'Care and helpfulness connect with nature, vulnerable people and giving one’s best.' },
      { label: 'D12 Patience / D9 Compassion', value: 'Self-control and non-harm are explored through conflict, consequence and forgiveness.' },
    ],
    questions: ['Which story detail supports this value?', 'What realistic action could show the same value?', 'Which part is source evidence and which part is your own application?'],
  },
};
