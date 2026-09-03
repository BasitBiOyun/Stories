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
    title: 'The Pharaoh’s Fear',
    focus: 'how the historical frame, Pharaoh’s self-image and fear of losing control develop into oppression',
    evidence: 'the chapter places the story in time, contrasts the Israelites’ belief with Pharaoh’s claim, reports his fear of future loss of control and shows forced labour as a result',
    language: 'historical time framing; feared that ... would ...; saw himself as / saw + object + verb; so / that’s why; make + person/group + verb; continued to + verb',
    pronunciation: 'Use the chapter audio to chunk the historical frame, then stress the cause-result links in “so / that’s why”. Rehearse “feared that ... would ...” as one meaning unit rather than word by word.',
    value: 'D1 Justice / D14 Respect — reject fear-based oppression and judge the use of power by how people are treated',
    misconception: 'Fear helps explain Pharaoh’s behaviour but does not justify oppression; keep Pharaoh’s claim about himself separate from narrator truth.',
    expected: 'Pharaoh fears losing control and responds with harsh treatment and forced work; the chapter presents this as oppressive rule, not justified protection.',
    transfer: 'Write a short historical or school example showing how a fear can lead to an unfair decision, then state a fairer alternative.',
  },
  {
    n: 2,
    title: 'The Pharaoh’s Dream',
    focus: 'the chain from reported dream to interpretation, prediction, command and family fear',
    evidence: 'a source introduces the dream, advisors predict a future threat, Pharaoh issues a direct order, and Moses’s mother is described through intense fear, feared possibility and uncertainty',
    language: 'reported source and quoted prediction; will + verb; when / then for sequence; direct imperative; so ... that ...; scared that ... could ...; embedded what to do',
    pronunciation: 'Contrast the calm reporting voice with the quoted prediction and command. Rehearse “so ... that ...” with a clear stress peak on the intense feeling and a pause before the result.',
    value: 'D1 Justice / D9 Compassion — recognise the human consequences of decisions that target innocent people',
    misconception: 'The advisors’ interpretation is a reported claim inside the story; do not present it as narrator commentary or use the scene for graphic discussion of violence.',
    expected: 'The dream is interpreted as a threat, Pharaoh turns that interpretation into a cruel command, and the chapter then shows the fear created for Moses’s family.',
    transfer: 'Describe a non-sensitive warning situation in five connected sentences, including a prediction, instruction, emotional result and responsible next action.',
  },
  {
    n: 3,
    title: 'A Baby in the River',
    focus: 'the movement from guidance to action, the basket’s route, simultaneous worry and trust, and Asiye’s protective decision',
    evidence: 'direct instructions lead to the basket being placed in the river, passive narration tracks what happens to it, and the chapter contrasts Moses’s mother’s sadness with trust before Asiye decides to care for the baby',
    language: 'direct imperatives; passive focus with was carried; soon for sequence/result; but / also / while; who-clause description; when for timing; will for a future decision',
    pronunciation: 'Use the audio to distinguish short imperative chunks from narrative sentences. In the trust contrast, pause before “but”; in Asiye’s decision, stress “will” and the two coordinated actions.',
    value: 'D9 Compassion / D16 Responsibility — connect care and trust with concrete protective action',
    misconception: 'Do not describe trust as passive waiting; the chapter presents multiple purposeful actions by Moses’s mother, sister and Asiye.',
    expected: 'Moses’s mother acts despite fear, the basket reaches the palace, and Asiye responds with care and a clear decision to protect the baby.',
    transfer: 'Write a five-sentence account of someone receiving guidance, acting despite worry and making a responsible protective decision.',
  },
  {
    n: 4,
    title: 'Back to His Mother',
    focus: 'how several people contribute to Moses returning to his mother and how the chapter develops protection, growth and identity over time',
    evidence: 'Asiye gives an instruction, Moses’s sister proposes a nurse, the mother returns to care for him, and the chapter later describes Moses growing up, becoming a young man and showing a continuing willingness to help',
    language: 'imperative instruction; present knowledge plus will prediction; to + verb / to be for purpose; because / because of; grew up / became; always for continuing tendency',
    pronunciation: 'Rehearse the problem-solution sequence with short chunks: instruction → supporting information → “will” prediction. Stress “because/because of” only enough to keep the reason clear, then model “grew up / became” as change-over-time phrases.',
    value: 'D9 Compassion / D20 Helpfulness — understand protection as shared action involving care, courage and practical support',
    misconception: 'Do not reduce the outcome to one person’s action; the chapter names distinct roles for the sister, mother and Asiye.',
    expected: 'Moses’s sister helps reconnect him with his mother, Asiye continues to protect him, and he grows safely in the palace while retaining his connection to the Children of Israel.',
    transfer: 'Explain how several people can contribute to one protective outcome, using purpose, reason and change-over-time language.',
  },
  {
    n: 5,
    title: 'A Mistake in the Bazaar',
    focus: 'the difference between intention and consequence, Moses’s response after the accidental death, and the inference created by the repeated conflict',
    evidence: 'the chapter explicitly describes the death as accidental, gives Moses’s direct prayer and self-evaluation, then returns to the bazaar the next day where he draws a conclusion from the repeated behaviour',
    language: 'while + past continuous background; suddenly; the next day; while for contrast; who-clause identification; understood that; direct request/prayer; present perfect self-evaluation; be going to in a confrontational future question',
    pronunciation: 'Use the audio to separate background from sudden action, with a clear pause after the opening while-clause. Rehearse the direct requests briefly and firmly, then use rising question intonation for “Are you going to ...?”',
    value: 'D6 Honesty / D16 Responsibility — distinguish intent from harm, admit a mistake and respond through accountability rather than denial',
    misconception: 'Accidental does not mean consequence-free; keep intention, harm, regret and response distinct, and do not dramatise the death.',
    expected: 'The death is described as accidental; Moses is upset, asks forgiveness and evaluates his own action, then the repeated conflict leads him to a new judgment about the Israelite man.',
    transfer: 'Describe a safe mistake using background → event → consequence → honest response → lesson, without using violent examples.',
  },
  {
    n: 6,
    title: 'Escape from Egypt',
    focus: 'how a present danger becomes an expected consequence and urgent command, then how the setting shifts from Egypt to Midian',
    evidence: 'a friend reports that soldiers are already looking for Moses, predicts they are going to catch him and tells him to leave; the narrative then follows his journey to a place outside Pharaoh’s rule and builds the well scene',
    language: 'present continuous for current danger; be going to for expected next action; urgent imperative; knew that; completed past-action sequence; as for explanation/reassurance; after + time; where/who relative clauses; present-continuous questions about visible action',
    pronunciation: 'Contrast the current danger and expected next action by stressing “are looking” and “are going to”. Rehearse the urgent command as one short chunk, then use natural falling-rising intonation in the two “Why are you ...?” questions.',
    value: 'D16 Responsibility — respond to danger through timely action, lawful safety-seeking and attention to the situation of others',
    misconception: 'Midian is important because Pharaoh does not rule there, not merely because it is a new place; Moses still arrives tired, thirsty and without support.',
    expected: 'Moses leaves because of an immediate threat, reaches relative safety outside Pharaoh’s rule and then begins observing a new social situation at the well.',
    transfer: 'Write a warning-to-new-scene mini-narrative using current danger, expected consequence, advice, time movement and one question about a visible situation.',
  },
  {
    n: 7,
    title: 'The Two Sisters',
    focus: 'how limitation creates obligation, how Moses infers a need and helps, and how the sisters’ early return proves that the situation changed',
    evidence: 'the sisters explain that their father cannot come and no helper is available, so they have to wait; Moses understands the need, acts, and the usual obligation to wait disappears that day',
    language: 'cannot; there are no ... to help; so + have to; until; understood that; make + object + base verb; when + early result; did not have to; that’s why + had to',
    pronunciation: 'Stress “have to” when it carries necessity and “did not have to” when the usual obligation disappears. Chunk the until-clause with the waiting action so the time limit remains clear.',
    value: 'D20 Helpfulness / D12 Patience — recognise need from evidence and help in a way that changes the real difficulty',
    misconception: 'Do not treat helpfulness as an abstract label; the chapter provides dialogue showing the need and a concrete action that changes the outcome.',
    expected: 'The sisters have to manage the sheep because help is unavailable; Moses understands the problem, helps them, and they return earlier because they no longer have to wait.',
    transfer: 'Explain a routine that normally requires waiting but changes after appropriate help, using have to, until and did not have to.',
  },
  {
    n: 8,
    title: 'A Simple Life in Midian',
    focus: 'how need and opportunity lead to a stable period, then how duration, decision, background and a sudden event open the next stage',
    evidence: 'Moses accepts Şuayb’s offer because he needs work and a home, lives in Midian for about ten years, decides to return, and later sees a fire while travelling in difficult conditions',
    language: 'because for reason; practical need; while for simultaneous period; after + -ing / duration; decided to; started to; past-progressive background; suddenly; let me ... for immediate intention; to + verb for purpose',
    pronunciation: 'Read the long-period phrase “After living ...” as one opening chunk, then stress “decided to” at the turning point. Pause before “Suddenly” and keep the purpose phrase attached to the proposed action.',
    value: 'D12 Patience / D16 Responsibility — connect work, family responsibility and long-term stability with purposeful decisions',
    misconception: 'The chapter does not present the ten years as empty waiting; work, family life and responsibility form a stable stage before the return journey.',
    expected: 'Moses accepts a needed opportunity, builds a life in Midian, decides to return after a long period, and a sudden fire becomes the next turning point.',
    transfer: 'Explain a change of plan using duration, decision, background, a sudden event and purpose.',
  },
  {
    n: 9,
    title: 'The Voice on the Mountain',
    focus: 'how direct commands produce visible results and how the encounter changes Moses’s role into a reported mission',
    evidence: 'Moses receives direct instructions involving the staff and hand, carries them out, sees the results, receives a mission to Pharaoh and is then described as becoming a messenger and prophet',
    language: 'direct imperatives; command → action → result; told + person + to + verb; coordinated reported mission; after this; became for role change; upon this / next action',
    pronunciation: 'Rehearse the short command sequences with clear falling intonation, then contrast direct commands with the longer reported mission sentence. Stress “became” when marking the role change.',
    value: 'D16 Responsibility — treat evidence and signs as support for a defined mission rather than spectacle',
    misconception: 'Keep discussion source-bound and respectful; the signs are linked to Moses’s mission to Pharaoh, not to entertainment or unsupported speculation.',
    expected: 'The encounter gives Moses two signs, direct instructions and a mission; the chapter then marks a change in role and movement toward Egypt.',
    transfer: 'Explain a new responsibility through instruction → action → result → reported mission → next step.',
  },
  {
    n: 10,
    title: 'The King’s Magicians',
    focus: 'how sustained persuasion leads to realization, necessity, visible signs and a contrasting response from Pharaoh and his advisors',
    evidence: 'Moses makes every effort to persuade Pharaoh, realizes discussion will not work while refusal continues, displays the signs, and the chapter contrasts their stated purpose with mockery',
    language: 'after + -ing for prior effort; realized that; would not; kept + -ing; had no choice but to; then / when; turned into / resulting state; in order to for purpose; contrast between purpose/evidence and reaction',
    pronunciation: 'Use sentence stress to show the progression effort → realization → necessity. Rehearse “had no choice but to ...” as one chunk and attach “in order to ...” closely to the action whose purpose it explains.',
    value: 'D14 Respect / D6 Honesty — respond to evidence without ridicule and revise an approach when a method is clearly not working',
    misconception: 'Do not imply that displaying signs comes before attempted explanation; the chapter explicitly places sustained discussion and refusal first.',
    expected: 'Moses first reasons with Pharaoh, recognizes the refusal is continuing, then displays the signs; Pharaoh and his advisors still respond with mockery.',
    transfer: 'Describe a non-story change of approach using effort, realization, necessity, result and purpose.',
  },
  {
    n: 11,
    title: 'The Miracle of the Staff',
    focus: 'how the same event leads to different responses from the magicians and Pharaoh and how the text separates appearance from miracle language',
    evidence: 'the magicians’ sticks and ropes look like snakes, Moses’s staff turns into a huge snake, the magicians who witness the event change their position, while Pharaoh still refuses and continues harmful action',
    language: 'once / when for sequence; looked like vs turned into; direct command and declaration; who-clause identification; still for persistence despite evidence; because for reason; continued to + verb',
    pronunciation: 'Contrast “looked like” with “turned into” through sentence stress so appearance and story claim remain distinct. Rehearse “still” before the refusal and “continued to” as persistence markers.',
    value: 'D6 Honesty / D10 Humility — revise a judgment when new evidence changes the situation and avoid arrogance in correction',
    misconception: 'Preserve the story’s distinction between what the magicians’ objects “looked like” and how the narrative describes Moses’s staff; do not collapse the two into the same claim.',
    expected: 'The magicians change their judgment after witnessing the event, whereas Pharaoh continues to refuse and act harshly.',
    transfer: 'Write a contrast paragraph in which one person changes a view after evidence while another continues resisting, explaining the difference with evidence.',
  },
  {
    n: 12,
    title: 'The Red Sea',
    focus: 'how a secret plan, obligation and physical limitation develop into pursuit, crisis and leadership reassurance',
    evidence: 'Moses gives preparation and secrecy instructions, children and older people cannot move quickly so the caravan slows, Pharaoh catches up, and Moses responds to panic with calm reassurance about future guidance',
    language: 'direct imperative; planned future movement; must / should; could not + verb; that’s why; when for trigger/time shift; managed to + verb; direct reassurance; will + verb for future guidance',
    pronunciation: 'Rehearse “must / should” with firm but non-dramatic stress, and “could not ... That’s why ...” as a limitation-result pair. In Moses’s reassurance, use calm falling intonation and stress the future “will”.',
    value: 'D16 Responsibility / D9 Compassion — combine realistic assessment, care for vulnerable people and calm leadership',
    misconception: 'Reassurance does not deny the danger; it follows the chapter’s clear description of vulnerability, pursuit and being trapped.',
    expected: 'The caravan moves slowly because some members cannot move quickly; after Pharaoh catches up and panic grows, Moses responds with calm reassurance and future-oriented guidance.',
    transfer: 'Write a five-sentence difficult-group-plan paragraph using instruction, obligation, limitation-result, pursuit/time and reassurance.',
  },
  {
    n: 13,
    title: 'The Cruel King Drowns',
    focus: 'the final command-to-result sequence, Pharaoh’s last claim, the closing consequence and the move from event to general lesson',
    evidence: 'the sea parts after the command, Moses and his people cross, Pharaoh claims the opening as his own act and pursues them, the sea closes, and the final paragraph explicitly draws lessons about enslavement, power and guidance',
    language: 'direct imperative; when for triggering moment; event → practical result; reported order; consequence; interpretation frames such as reminds us that; to + verb for purpose; recurring when-condition and usual result',
    pronunciation: 'Keep the command, trigger and result in separate meaning groups. In the final paragraph, slow the pace and stress the shift from narrative event to “reminds us that ...” so interpretation is clearly signalled.',
    value: 'D1 Justice / D11 Freedom / D14 Respect — reject enslavement and abusive power and connect dignity with freedom and fair treatment',
    misconception: 'Pharaoh’s claim that the sea opened at his order belongs to his speech; the narrator attributes the event differently. Handle drowning without graphic expansion.',
    expected: 'Pharaoh claims credit for the opened sea, pursues the group and is overtaken when the sea closes; the chapter then explicitly draws lessons rejecting enslavement and abusive power.',
    transfer: 'Write five connected sentences moving from an instruction and event to consequence, purpose and one clearly signalled general lesson.',
  },
];

const learningEvidenceRubric = [
  'Source evidence — uses accurate chapter evidence and keeps religious/historical claims inside the supplied story.',
  'Language function — explains what a selected Chapter Language Focus pattern does in its actual context.',
  'B1 control — reuses target language accurately enough to keep meaning clear.',
  'Connected reasoning — links ideas through time, cause, result, contrast, purpose, viewpoint, obligation or consequence rather than listing facts.',
  'Transfer and values — applies the learning to a realistic new context while separating source evidence from personal reflection.',
];

export const mosesB1TeacherGuide: TeacherGuideSection[] = plans.map((p) => ({
  chapter: `Chapter ${p.n}: ${p.title}`,
  timing: '45–50 minutes',
  objectives: [
    `Understand and explain the chapter focus: ${p.focus}.`,
    `Locate and use direct story evidence: ${p.evidence}.`,
    `Notice and practise the actual Chapter ${p.n} Language Focus: ${p.language}.`,
    'Transfer at least two useful chapter patterns into one connected B1 spoken or written response.',
    `Connect the chapter evidence to ${p.value} through one realistic observable action.`,
  ],
  pedagogy: `Use a TYMM meaning-first route. YDAB1 listening and YDAB2 reading establish gist, sequence, viewpoint and evidence before language analysis. The Quick Challenge checks comprehension. Chapter ${p.n} Language Focus then makes the actual grammar and discourse relationships visible. YDAB3 speaking and YDAB4 writing require connected B1 transfer rather than isolated grammar examples. Values stay evidence-first and action-based: ${p.value}.`,
  priorKnowledge: p.n === 1
    ? ['Learners can follow connected past narration and recognise familiar cause, time and contrast links.']
    : [`Recall one event, relationship or responsibility from Chapter ${p.n - 1} that directly prepares learners for this chapter.`],
  anticipatedMisconceptions: [p.misconception],
  grammarFocus: `Chapter Language Focus: ${p.language}.`,
  pronunciationFocus: p.pronunciation,
  beforeReading: ['Use the chapter title, image or one key concept to make a purposeful prediction; keep prediction separate from source fact until evidence is found.'],
  duringReading: [
    `Locate this evidence chain: ${p.evidence}.`,
    'Listen once for overall meaning, then replay/read for the exact clause or sentence carrying one major Language Focus relationship.',
    'Mark speaker or viewpoint ownership whenever direct speech, prediction, interpretation or claim could be confused with narrator message.',
  ],
  afterReading: [
    'Complete the Quick Challenge and justify at least one response with direct chapter evidence.',
    `Open Chapter ${p.n} Language Focus. Return to the original sentence first, identify the communicative job of the form, then complete the prepared task for: ${p.language}.`,
    'Complete the Language Focus production/reflection task using at least two target patterns in one connected B1 response.',
    p.transfer,
    ...(p.n === 13 ? ['After chapter work, use the real whole-book sequence: Knowledge Check → Vocabulary Challenge → Master Glossary Parts 1–2 → B1 Language Review → Final Challenge.'] : []),
  ],
  lessonPlan: `0–5 min focused recall/prediction; 5–18 min read + listen for meaning; 18–27 min evidence/relationship marking; 27–32 min Quick Challenge; 32–42 min Chapter ${p.n} Language Focus; 42–47 min connected B1 transfer; 47–50 min evidence/value exit response.`,
  discussionPoints: [
    'Which sentence or clause gives the strongest evidence for the chapter’s main idea?',
    'Which language relationship makes the sequence, reasoning or viewpoint easier to follow?',
    `How can ${p.value} be shown through an observable action without turning personal reflection into a new story claim?`,
  ],
  interactiveTips: [
    'Use only student-facing image, audio, Word Notes, hotspots, Quick Challenge and chapter-specific Language Focus that actually exist in the book.',
    'If a Language Focus answer is uncertain, return to the exact story sentence before explaining terminology.',
    'Keep narrator message, character speech or prediction, and learner reflection visibly separate.',
  ],
  differentiation: {
    strugglingLearners: `Reduce language load without reducing the reasoning target. Pre-select one evidence sentence and two useful patterns from: ${p.language}. Rehearse orally before a 3–4 sentence response.`,
    fastFinishers: `Write a 5–6 sentence B1 paragraph in a new context using at least three Chapter ${p.n} Language Focus patterns, then label the relationship each pattern creates.`,
  },
  formativeAssessment: [
    'Locates accurate story evidence.',
    'Explains the function of at least one chapter Language Focus pattern.',
    'Produces a connected response using at least two target patterns.',
    'Keeps claim, interpretation and personal transfer appropriately separated.',
  ],
  expectedResponses: [p.expected],
  transferTask: p.transfer,
  teacherReflection: 'Did learners understand the story before analysing language? Did Language Focus deepen connected reasoning and production rather than become a detached grammar lesson?',
  assessmentTools: {
    rubric: learningEvidenceRubric,
    exitTicket: ['Give one evidence-based sentence, explain one Language Focus relationship, and write one new connected sentence using that relationship.'],
  },
  extraResources: p.n === 1 ? {
    links: [
      { label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN },
      { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES },
    ],
  } : undefined,
}));

export const mosesB1TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Moses (B1) Teacher Guide',
  subtitle: 'TYMM-aligned, evidence-first guide with chapter-specific Language Focus and connected B1 transfer',
  level: 'B1',
  estimatedDuration: '13 × 45–50 minutes',
  targetAudience: 'Secondary-school learners studying English at approximately CEFR B1.',
  targetLearners: 'Learners who can follow connected narrative, locate evidence, track cause, time, contrast, purpose and viewpoint, and produce short connected explanations with support.',
  purpose: 'Develop English through the supplied Moses story, chapter audio, evidence-based reading, actual chapter-specific Language Focus, connected B1 speaking/writing and values-as-action without adding claims outside the source.',
  approachDesc: `Follow one TYMM route in every story chapter: establish meaning through listening/viewing and reading (YDAB1–YDAB2), check comprehension with the Quick Challenge, open the actual chapter Language Focus for guided noticing of grammar and discourse relationships, then transfer selected patterns to connected speaking or writing (YDAB3–YDAB4). Language Focus follows comprehension and stays tied to source evidence. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Chapter Quick Challenges, evidence checks, chapter Language Focus tasks, connected oral/written transfer, exit tickets, Knowledge Check, Vocabulary Challenge, B1 Language Review and Final Challenge.',
  assessmentOverview: {
    formative: ['Chapter Quick Challenges', 'Evidence checks', 'Language Focus guided practice and production', 'Connected speaking/writing transfer', 'Exit tickets', 'Knowledge Check', 'Vocabulary Challenge', 'B1 Language Review'],
    summative: ['Final Challenge'],
  },
  readingFramework: {
    before: 'Activate only the knowledge needed for the chapter and make one purposeful prediction without treating it as fact.',
    during: 'Read/listen first for overall meaning, then return to direct evidence, sequence, cause/result, viewpoint, contrast, purpose, obligation and consequence.',
    after: 'Complete the Quick Challenge, then Chapter Language Focus, then one connected B1 transfer response using at least two target patterns.',
  },
  vocabularyApproach: {
    selection: 'Prioritise chapter Word Notes and only additional words required to understand the evidence or Language Focus task.',
    method: 'Infer from context, image, hotspot or audio before giving a direct definition.',
    recycling: 'Reuse target vocabulary in Language Focus production, discussion, exit tickets and the later whole-book review sequence.',
  },
  grammarApproach: 'Teach grammar and discourse through the existing chapter-specific Language Focus. Locate the form in the story, identify its communicative job, complete the prepared task, then reuse it in a new connected B1 context. Do not replace Language Focus with an unrelated generic grammar syllabus.',
  grammarSequence: plans.map((p) => `Ch${p.n}: ${p.language}`),
  skillsFocus: {
    listening: 'TYMM YDAB1: follow connected narration for gist, key details, sequence, speaker viewpoint and meaning-bearing language patterns.',
    reading: 'TYMM YDAB2: identify explicit evidence, trace relationships across clauses and paragraphs, distinguish reported voices from narrator message and synthesise across chapters.',
    speaking: 'TYMM YDAB3: make short claims, justify them with evidence, explain cause/contrast/consequence and transfer chapter language to a new context.',
    writing: 'TYMM YDAB4: produce short coherent paragraphs using chapter language and discourse links, then review meaning, evidence and accuracy.',
  },
  valuesFocus: [
    'D1 Justice — reject oppression and evaluate power through fair treatment',
    'D6 Honesty — represent evidence accurately, admit mistakes and revise judgments when evidence changes',
    'D9 Compassion — protect vulnerable people and avoid harm',
    'D10 Humility — remain open to correction rather than persist through arrogance',
    'D11 Freedom — reject enslavement and abusive control over other people',
    'D12 Patience — persist responsibly through difficulty without turning frustration into harm',
    'D14 Respect — disagree without ridicule and preserve human dignity',
    'D16 Responsibility — connect leadership, decisions, repair and assigned tasks with responsible action',
    'D20 Helpfulness — recognise need and respond through appropriate concrete help',
  ],
  languageFocus: [
    'All 13 story chapters have active, student-facing English Language Focus derived from the actual chapter prose.',
    'Use Language Focus only after learners establish comprehension and complete or repair the Quick Challenge.',
    'At B1, teach the relationship created by a form—time, cause, result, viewpoint, obligation, purpose, contrast or consequence—not only the grammar label.',
    'Finish each Language Focus with connected transfer to a new context.',
    'After Chapter 13, follow the real book sequence: Knowledge Check → Vocabulary Challenge → Master Glossary Parts 1–2 → B1 Language Review → Final Challenge.',
  ],
  differentiationNotes: 'Reduce linguistic load without reducing the evidence or reasoning goal: use one source sentence at a time, selected vocabulary, audio replay, oral rehearsal and selected Language Focus patterns. Extend through synthesis, discourse control and evidence-based explanation rather than unsupported factual expansion.',
  sensitiveNotes: {
    title: 'Source and content safeguards',
    notes: [
      'Handle infant killing, accidental death, punishment, pursuit and drowning without dramatization, role-play or graphic expansion.',
      'Keep religious and historical claims within the supplied story and distinguish reported predictions or character claims from narrator statements.',
      'Use neutral, safe contexts for transfer tasks involving conflict, warnings or mistakes.',
      'Do not present learner reflection or values transfer as a new religious fact.',
    ],
  },
  valuesEducation: {
    title: 'TYMM Values in Action',
    description: `Use a value only where chapter evidence genuinely supports it. Ask for source evidence first, then connect it to an age-appropriate observable action. See ${TYMM_VALUES}.`,
    items: [
      { label: 'D1 Justice / D11 Freedom', value: 'Justice and freedom appear through rejection of oppression, enslavement and abusive control.' },
      { label: 'D6 Honesty / D10 Humility', value: 'Admitting mistakes and revising judgment after evidence are treated as concrete choices.' },
      { label: 'D9 Compassion / D20 Helpfulness', value: 'Care becomes visible through protection and appropriate help for people in need.' },
      { label: 'D12 Patience / D16 Responsibility', value: 'Patience and responsibility appear through sustained effort, calm leadership and purposeful action.' },
      { label: 'D14 Respect', value: 'Respect requires disagreement without ridicule and attention to human dignity.' },
    ],
    questions: ['Which story detail supports this value?', 'What realistic action could show the same value?', 'Which part is source evidence and which part is your own application?'],
  },
};
