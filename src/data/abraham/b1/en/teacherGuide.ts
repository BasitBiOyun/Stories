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
    title: 'Abraham in Babylon',
    focus: 'what people in Babylon worshipped, what the idols could not do, and how the chapter moves from observation to a supported conclusion',
    evidence: 'people bow, pray and ask the statues for help, while the statues cannot eat, drink, talk, move, hear or understand',
    language: 'distant-past/time framing; when/since; contextual could/could not; named/made from/which/full of for compact description',
    pronunciation: 'Use the chapter audio to group the long opening time frame as one meaning unit. Rehearse two “could/could not” sentences with stress on the ability being tested, then chunk one attached description such as “statues made from wood and stone”.',
    value: 'D6 Honesty — distinguish observable evidence from claims and represent the chapter accurately',
    misconception: 'Do not reduce the chapter to a list of beliefs or give one fixed meaning to every use of could; its function changes with context.',
    expected: 'The statues are treated as powerful, but the chapter repeatedly shows that they cannot act independently or respond to people.',
    transfer: 'Describe a surprising object or place using a time frame, could/could not and one attached descriptive phrase.',
  },
  {
    n: 2,
    title: 'Abraham and His Father’s Idols',
    focus: 'Azer’s connection with idol making, the difference between stated belief and observable action, and the shift from repeated childhood habit to one specific event',
    evidence: 'Abraham watches his father make idols, plays with them as toys, then one day is seen riding the Mardukh statue and receives a direct/reported instruction',
    language: 'used to; while + past continuous; One day; not ... but; bigger than; tell + person + (not) to + verb versus direct imperative',
    pronunciation: 'Rehearse “used to” inside a full habit sentence and “while + past continuous” as background. Pause after “One day” to mark the event shift, then compare the intonation of a direct command with its reported form.',
    value: 'D6 Honesty / D14 Respect — compare claims and actions accurately without mocking people or beliefs',
    misconception: 'Do not treat Abraham’s laughter as the only evidence or confuse Azer’s interpretation of the statue with narrator fact.',
    expected: 'The chapter contrasts repeated childhood habits with one turning-point event and keeps Azer’s claims separate from what Abraham can observe.',
    transfer: 'Write four connected sentences about a past routine and one memorable turning point, including a reported instruction.',
  },
  {
    n: 3,
    title: 'Searching for the True Creator',
    focus: 'the repeated reasoning pattern in the star and moon episodes and the movement from possibility through evidence to conclusion',
    evidence: 'Abraham considers a possible explanation, observes that the object disappears, gives a reason and reaches a conclusion; the pattern is repeated with the moon',
    language: 'although; still; on the other hand; but; purpose with to; then/when; Could this be ...?; because; understood that ...',
    pronunciation: 'Use rising intonation for “Could this be ...?” and falling intonation for the reasoned conclusion. Rehearse “although”, “on the other hand” and “because” with short pauses so concession, viewpoint and reason remain distinct.',
    value: 'D6 Honesty / D10 Humility — remain open to evidence and revise a possible explanation when the evidence does not support it',
    misconception: 'Do not retell the star and moon as unrelated events or say brightness itself is the reason for rejection; disappearance is the key evidence in the chapter.',
    expected: 'Both episodes follow the same reasoning pattern: possibility, observation, reason and conclusion.',
    transfer: 'Compare two possible explanations for an everyday observation and show how evidence changes the conclusion.',
  },
  {
    n: 4,
    title: 'Abraham Receives Guidance',
    focus: 'the link between observation, prayer, responsibility and the difficult father-son response, including two different communicative uses of conditional language',
    evidence: 'Abraham observes the sun, asks for guidance, recognises a responsibility to guide his people, gives direct instructions to his father, and receives a threatening conditional response',
    language: 'until/when; if + present, will + verb for consequence or threat; should + because; chose him to be; direct imperatives',
    pronunciation: 'Rehearse the prayer condition and the father’s threat with different sentence stress so their communicative purposes are audible. Chunk “should ... because ...” as recommendation plus reason.',
    value: 'D16 Responsibility / D14 Respect — connect guidance with responsible communication while handling disagreement respectfully',
    misconception: 'Do not ignore Abraham’s request for guidance or treat both if-clauses as having the same communicative purpose.',
    expected: 'The chapter moves from observation to prayer and responsibility, then uses instruction and a threatening conditional in the family dialogue.',
    transfer: 'Write a safe school scenario involving responsibility, one instruction and one conditional response.',
  },
  {
    n: 5,
    title: 'Abraham Calls His People',
    focus: 'the contrast between inherited tradition and Abraham’s stated reasons, plus persistence when persuasion meets resistance',
    evidence: 'the people justify their practice by their fathers’ example, while Abraham points to the idols’ lack of power and continues trying to persuade them despite anger and rejection',
    language: 'because/because of/when; did not give up; try to; want + person + to; tell/reply/ignore; but/though',
    pronunciation: 'Practise “because” versus “because of” in full clauses/phrases and stress “did not give up” to mark persistence. Use a pause before “but/though” to make the contrasting response clear.',
    value: 'D12 Patience / D14 Respect — continue purposeful communication under resistance without turning disagreement into ridicule',
    misconception: 'Do not treat “our fathers did it” as evidence that the idols have power or add events that are not in the chapter.',
    expected: 'The people appeal to tradition, Abraham gives a different evidence-based reason, persists, and is still ignored.',
    transfer: 'Describe a respectful attempt to persuade someone in a neutral situation using reason, persistence and contrast.',
  },
  {
    n: 6,
    title: 'Abraham Enters the Temple',
    focus: 'the deliberate plan, the specific opportunity created by the celebration, the action sequence and the resulting final state',
    evidence: 'Abraham decides on a plan, waits until the town is empty, enters the temple, breaks the idols one after another, leaves the largest untouched and places the axe around its neck',
    language: 'decided/planned to; what he was going to do; usually; so; until; began to; one after another; left + object + complement',
    pronunciation: 'Use stress on “decided/planned” to mark intention, then rehearse “until” and “one after another” as sequence signals. Chunk the final-state pattern “left + object + complement” as one unit.',
    value: 'D16 Responsibility — analyse intention, planning and consequences through evidence rather than treating the event as random action',
    misconception: 'Do not present the largest idol as the actual agent or miss that the action is described as a deliberate plan.',
    expected: 'The chapter presents a deliberate sequence from decision and opportunity to action and a carefully prepared final state.',
    transfer: 'Describe a careful non-story plan and explain the resulting state using connected B1 sequencing language.',
  },
  {
    n: 7,
    title: 'The Broken Idols',
    focus: 'how the people’s own admission becomes evidence and how inner recognition differs from outward refusal',
    evidence: 'the people admit the idols cannot speak, recognise Abraham’s reasoning internally, but refuse to accept being wrong and move toward punishment',
    language: 'reaction/reporting; direct and embedded questions/content clauses; because/but/so ... that; if ... then consequence',
    pronunciation: 'Contrast a direct question with an embedded question: keep direct-question intonation, but read the embedded clause with statement word order and smoother intonation. Stress “but” and “so ... that” when the argument turns from recognition to refusal.',
    value: 'D6 Honesty / D10 Humility — acknowledge evidence and admit error instead of allowing pride to block correction',
    misconception: 'Do not say the people immediately accept Abraham’s message or use “arrogance” as a label without the chapter’s action evidence.',
    expected: 'The people recognise the weakness of the idols, but pride prevents them from admitting that their earlier position was wrong.',
    transfer: 'Report a harmless disagreement in which evidence is recognised but a person does not immediately change their view.',
  },
  {
    n: 8,
    title: 'Preparing the Great Fire',
    focus: 'evidence of severe danger, Abraham’s calmness, future viewed from a past point, passive process description and the unexpected outcome',
    evidence: 'the chapter builds danger through the size and heat of the fire, describes Abraham’s trust without claiming he knew the exact rescue, and reports the punishment process and outcome',
    language: 'so ... that; however/because; knew that ... would / what would happen; passive forms; was used to; turned out to be / turned into',
    pronunciation: 'Rehearse “so ... that” with strong stress on the degree word and result, then pause before “however”. In passive process sentences, stress the action/result rather than the unnamed agent.',
    value: 'D12 Patience — sustain calm and purposeful trust in a difficult situation without exaggerating what the chapter states',
    misconception: 'Do not say Abraham knew the exact form of rescue in advance or that the fire was never dangerous; neither claim is supported.',
    expected: 'The chapter establishes real danger, describes calm trust and then presents an unexpected protective outcome.',
    transfer: 'Describe a difficult but safe situation that produced an unexpected result using degree, contrast and passive/result language.',
  },
  {
    n: 9,
    title: 'The Miracle and Nimrod',
    focus: 'the chain of claim, demonstration, challenge and result, with authority over people separated from claimed power over creation',
    evidence: 'Nimrod gives an example involving people, Abraham challenges the broader claim with the sun, and Nimrod is unable to meet the challenge',
    language: 'contrast/consequence; reported orders and permission; can / Can you ...?; was unable to; only ... has the power',
    pronunciation: 'Use clear rising intonation in the ability challenge “Can you ...?” and falling intonation in the conclusion. Stress “only” to make exclusivity audible and distinguish an order from permission through phrasing.',
    value: 'D6 Honesty / D10 Humility — test claims against relevant evidence and recognise when an example does not prove a larger claim',
    misconception: 'Do not interpret releasing a person as literally creating life or claim that the miracle changes everyone’s belief.',
    expected: 'The example does not prove the broad claim; the challenge tests a different level of ability and exposes the limitation.',
    transfer: 'Test a simple everyday ability claim with relevant evidence and explain whether the evidence actually proves it.',
  },
  {
    n: 10,
    title: 'Leaving Babylon',
    focus: 'the movement from realisation to decision, purpose, journey stages and endpoint while keeping family roles distinct',
    evidence: 'Abraham recognises continuing opposition, decides to leave for a purpose, travels with named family members, follows reported instruction and reaches the valley in stages',
    language: 'realised that ... was going to; therefore; decided to; to + verb; so that + could; command/tell + person + to; during/soon/one day/finally',
    pronunciation: 'Use “therefore” with a clear pause to mark thought → decision. Rehearse “so that + could” as one purpose chunk and use the journey time markers to create natural paragraph rhythm.',
    value: 'D16 Responsibility — change strategy while continuing the same responsible mission and family care',
    misconception: 'Do not reduce departure to escape or confuse Sarah, Lot, Hagar and Ishmael or the stages of the journey.',
    expected: 'The chapter links realisation to a purposeful decision and presents the journey as a continuation of mission and family responsibility.',
    transfer: 'Explain a change of strategy using realisation, therefore, decision, purpose and a clear sequence.',
  },
  {
    n: 11,
    title: 'Hagar and Ishmael in the Valley',
    focus: 'Hagar’s trust together with active effort and the relationship between need, action, purpose, naming, obligation and process',
    evidence: 'the water runs out, Hagar recognises the need, actively searches, and the later paragraph explains the practice connected with her actions',
    language: 'purpose/assurance; ran out; need to; started + -ing; looking for; is known as; must; after + -ing; involves + -ing',
    pronunciation: 'Rehearse assurance language with stress on the certainty word, then group the process sequence “need to → started ... → looking for ...”. Practise “after + -ing” and “involves + -ing” as explanation chunks.',
    value: 'D16 Responsibility / D20 Helpfulness — connect trust with active effort, care and purposeful action',
    misconception: 'Do not present trust as passive waiting or make distance details the central learning goal; the chapter presents Hagar as an active agent.',
    expected: 'Hagar combines trust with active effort: a need appears, she searches purposefully, and the chapter later explains the related practice.',
    transfer: 'Explain a routine or difficult situation that includes a need, purpose, rule and sequence.',
  },
  {
    n: 12,
    title: 'Zamzam and the City of Mecca',
    focus: 'the relationship between ongoing background, sudden event, immediate relief, continuity and longer-term settlement development',
    evidence: 'the chapter moves from Hagar’s ongoing situation to the sudden spring, immediate response, continued importance of the water and later development of settlement',
    language: 'while + past continuous; suddenly + started + -ing; when; still; because/because of; begin/start; come to + verb; meanwhile',
    pronunciation: 'Use smooth background intonation in the “while” clause, then stronger stress after “suddenly” to mark interruption. Rehearse “because” versus “because of” and stress “still” when expressing continuity.',
    value: 'D16 Responsibility — understand how resources, action and community development connect over time without adding unsupported history',
    misconception: 'Do not place settlement before the appearance of water or collapse immediate relief and long-term development into one event.',
    expected: 'A sudden event interrupts the background, meets an immediate need and later contributes to a longer process of settlement.',
    transfer: 'Explain how one event can change a place over time using background, sudden event, cause and continuity language.',
  },
  {
    n: 13,
    title: 'Building the Ka’ba',
    focus: 'Abraham and Ishmael’s cooperation, rebuilding, completion, purpose and the chapter’s closing message of continuity across generations',
    evidence: 'Abraham receives the command, Ishmael commits to help, father and son find the foundations and rebuild together, then the chapter connects completion with purpose and later generations',
    language: 'command/tell + person + to; will for expected role/commitment; past state and change over time; began to; after; purpose/function; over the years; to + verb for later purpose',
    pronunciation: 'Contrast the reported command with Ishmael’s future commitment by stressing the instruction versus “will”. Rehearse “after” for completion and “over the years” with a slower rhythm to signal generational continuity.',
    value: 'D16 Responsibility / D20 Helpfulness — cooperate on an assigned task and carry useful work forward across generations',
    misconception: 'Do not say Abraham builds alone or separate the building action from the closing message the chapter explicitly connects to it.',
    expected: 'Abraham and Ishmael cooperate in rebuilding; the final paragraphs connect completion, purpose and a message continuing across generations.',
    transfer: 'Explain how a project or idea can continue after its founder using instruction, commitment, completion, purpose and continuity.',
  },
];

const learningEvidenceRubric = [
  'Source evidence — uses accurate evidence from the chapter and does not add unsupported religious or historical claims.',
  'Language function — identifies what the selected Chapter Language Focus pattern does in context.',
  'B1 control — reuses target language accurately enough to maintain clear meaning.',
  'Connected reasoning — links ideas through time, cause, contrast, purpose, reporting, condition or consequence rather than listing isolated sentences.',
  'Transfer and values — applies learning to a realistic new context while clearly separating source evidence from personal reflection.',
];

export const abrahamB1TeacherGuideEn: TeacherGuideSection[] = plans.map((p) => ({
  chapter: `${p.n}. ${p.title}`,
  timing: '45–50 minutes',
  objectives: [
    `Understand and explain the chapter focus: ${p.focus}.`,
    `Locate and use direct story evidence: ${p.evidence}.`,
    `Notice and practise the actual Chapter ${p.n} Language Focus: ${p.language}.`,
    'Transfer two or more useful chapter patterns into one connected B1 spoken or written response.',
    `Connect chapter evidence to ${p.value} through a realistic observable action.`,
  ],
  pedagogy: `Use a TYMM meaning-first route. YDAB1 listening and YDAB2 reading establish gist, evidence, sequence, viewpoint and reasoning before language analysis. The Quick Challenge verifies comprehension. Chapter ${p.n} Language Focus then makes the chapter’s real grammar and discourse relationships visible. YDAB3 speaking and YDAB4 writing require connected B1 transfer rather than isolated example sentences. Values remain evidence-first and action-based: ${p.value}.`,
  priorKnowledge: p.n === 1
    ? ['Learners can follow connected past narration, describe objects and distinguish a claim from supporting evidence.']
    : [`Recall one event, reasoning step or responsibility from Chapter ${p.n - 1} that supports entry into this chapter without retelling the whole story.`],
  anticipatedMisconceptions: [p.misconception],
  grammarFocus: `Chapter Language Focus: ${p.language}.`,
  pronunciationFocus: p.pronunciation,
  beforeReading: ['Use the title, image or one key concept to establish one purposeful prediction or inquiry question. Keep prediction separate from evidence.'],
  duringReading: [
    `Locate and mark this evidence chain: ${p.evidence}.`,
    'Listen once for overall meaning, then replay/read for the exact clause that carries one major Language Focus relationship.',
    'Mark who owns each claim or viewpoint and which language signal links one idea to the next.',
  ],
  afterReading: [
    'Complete the Quick Challenge and justify at least one response with direct textual evidence.',
    `Open Chapter ${p.n} Language Focus. Return to the source sentence first, identify the communicative job of the form, then complete the prepared task for: ${p.language}.`,
    'Complete the Language Focus production/reflection task and reuse at least two target patterns in one connected B1 response.',
    p.transfer,
  ],
  lessonPlan: `0–5 min focused recall/prediction; 5–18 min read + listen for meaning; 18–27 min evidence/relationship marking; 27–32 min Quick Challenge; 32–42 min Chapter ${p.n} Language Focus; 42–47 min connected B1 transfer; 47–50 min evidence/value exit response.`,
  discussionPoints: [
    'Which sentence gives the strongest evidence for the chapter’s main idea?',
    'Which discourse or grammar relationship makes the reasoning easier to follow?',
    `How can ${p.value} be shown through an observable action without turning personal reflection into a new story claim?`,
  ],
  interactiveTips: [
    'Use only student-facing image, audio, Word Notes, hotspots, Quick Challenge and Language Focus that actually exist for this chapter.',
    'When a Language Focus answer is uncertain, return to the exact chapter sentence before explaining terminology.',
    'Keep character claims, narrator evidence and learner reflection visibly separate.',
  ],
  differentiation: {
    strugglingLearners: `Reduce language load while keeping the reasoning target. Pre-select one evidence sentence and two useful language signals from: ${p.language}. Rehearse orally before writing 3–4 connected sentences.`,
    fastFinishers: `Write a 5–6 sentence B1 paragraph in a new context using at least three Chapter ${p.n} Language Focus patterns, then explain the relationship each pattern expresses.`,
  },
  formativeAssessment: ['Locates accurate chapter evidence.', 'Explains the function of at least one Language Focus pattern.', 'Produces a connected response using at least two target patterns.', 'Keeps source, viewpoint and transfer appropriately separated.'],
  expectedResponses: [p.expected],
  transferTask: p.transfer,
  teacherReflection: 'Did learners understand the chapter before analysing language? Did Language Focus improve connected explanation, reasoning and transfer rather than become a detached grammar exercise?',
  assessmentTools: {
    rubric: learningEvidenceRubric,
    exitTicket: ['Give one evidence-based sentence, explain one Chapter Language Focus relationship, and write one new connected sentence using that relationship.'],
  },
  extraResources: p.n === 1 ? { links: [{ label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN }, { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES }] } : undefined,
}));

export const abrahamB1TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Prophet Abraham — B1 Teacher Guide',
  subtitle: 'TYMM-aligned, evidence-first guide with chapter-specific Language Focus and connected B1 transfer',
  level: 'B1',
  estimatedDuration: '13 × 45–50 minutes',
  targetAudience: 'Secondary-school learners studying English at approximately CEFR B1.',
  targetLearners: 'Learners who can follow connected narrative, compare evidence, explain reasoning and produce short connected B1 speech and writing.',
  purpose: 'Develop English through evidence-based story comprehension, listening, the actual Language Focus attached to all thirteen chapters, connected B1 production, reflection and values-as-action without adding unsupported facts.',
  approachDesc: `Follow one TYMM route in every chapter: establish meaning through listening/viewing and reading (YDAB1–YDAB2), verify comprehension with evidence and the Quick Challenge, open the actual chapter Language Focus for guided noticing of grammar and discourse relationships, then transfer selected patterns to connected speaking or writing (YDAB3–YDAB4). Language Focus follows comprehension and remains attached to source evidence. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Chapter Quick Challenges, evidence checks, chapter Language Focus tasks and production, connected oral/written transfer, exit tickets, Knowledge Check, B1 Language Review, Vocabulary Challenge and Final Challenge.',
  assessmentOverview: {
    formative: ['Chapter Quick Challenges', 'Evidence checks', 'Language Focus guided practice and production', 'Connected speaking/writing transfer', 'Exit tickets and repair after feedback', 'Knowledge Check', 'B1 Language Review', 'Vocabulary Challenge'],
    summative: ['Final Challenge'],
  },
  readingFramework: {
    before: 'Activate only relevant prior knowledge and establish one purposeful prediction or inquiry question.',
    during: 'Read/listen first for meaning, then return to the text for claim, evidence, sequence, contrast, cause, motivation, viewpoint and inference.',
    after: 'Complete the Quick Challenge, then Chapter Language Focus, then one connected B1 transfer response using two or more target patterns.',
  },
  vocabularyApproach: {
    selection: 'Prioritise chapter Word Notes and only additional language required for evidence or Language Focus work.',
    method: 'Infer meaning from context, morphology, image or audio before direct explanation.',
    recycling: 'Reuse target vocabulary in evidence explanations, Language Focus production, exit tickets and the later whole-book review sequence.',
  },
  grammarApproach: 'Use only the chapter-specific Language Focus already attached to the student pages. Learners locate the form in context, identify its communicative function, complete the prepared task and transfer it to a new connected B1 situation. Do not replace it with a generic grammar syllabus.',
  grammarSequence: plans.map((p) => `Ch${p.n}: ${p.language}`),
  skillsFocus: {
    reading: 'TYMM YDAB2: identify and compare evidence, follow discourse relationships, infer motivation and synthesise across connected paragraphs.',
    listening: 'TYMM YDAB1: listen for gist, then replay to verify evidence, discourse signals and pronunciation.',
    speaking: 'TYMM YDAB3: make short claims, justify them with text evidence, respond to a partner and transfer chapter language to new situations.',
    writing: 'TYMM YDAB4: produce connected B1 paragraphs using chapter-derived language relationships and revise for clarity after feedback.',
  },
  valuesFocus: [
    'D6 Honesty — distinguish claims from evidence and represent the source accurately',
    'D10 Humility — remain open to evidence and admit correction rather than protecting a weak claim',
    'D12 Patience — sustain purposeful effort under resistance or difficulty',
    'D14 Respect — discuss belief, disagreement and family/community differences respectfully',
    'D16 Responsibility — connect guidance, family care, mission and assigned tasks with responsible action',
    'D20 Helpfulness — recognise protection, cooperation and help as observable actions',
  ],
  languageFocus: [
    'All thirteen story chapters have active, student-facing English Language Focus derived from their own prose.',
    'Use Language Focus after learners understand the chapter and complete or repair the Quick Challenge.',
    'At B1, require learners to identify relationships such as contrast, cause, viewpoint, purpose, time, reporting and condition rather than merely naming forms.',
    'Finish Language Focus with connected transfer in a new context.',
    'After Chapter 13, use the real review flow: Knowledge Check → B1 Language Review → Vocabulary Challenge → Master Glossary → Final Challenge.',
  ],
  differentiationNotes: 'Reduce linguistic load while preserving the same evidence and communication target. Extend stronger learners through comparison, inference, discourse control and synthesis rather than unrelated factual expansion.',
  sensitiveNotes: {
    title: 'Source and content safeguards',
    notes: [
      'Keep religious and historical claims inside the project story text.',
      'Discuss belief differences analytically and respectfully; do not turn evidence work into ridicule of people or communities.',
      'Handle the threat, punishment and fire sequence in Chapters 7–9 without sensationalising violence or danger.',
      'Keep Chapter 8 trust language inside what the source states; do not claim Abraham knew the exact form of rescue in advance.',
      'Do not present learner reflection or value-transfer examples as new religious facts.',
    ],
  },
  valuesEducation: {
    title: 'TYMM Values in Action',
    description: `Use a value only where chapter events genuinely support it. Require source evidence before moving to a realistic age-appropriate action. See ${TYMM_VALUES}.`,
    items: [
      { label: 'D6 Honesty', value: 'Honesty appears through accurate evidence use and willingness to admit when a claim is not supported.' },
      { label: 'D10 Humility', value: 'Humility appears through openness to correction rather than arrogance in the face of evidence.' },
      { label: 'D12 Patience', value: 'Patience is connected with sustained purposeful effort under resistance or difficulty.' },
      { label: 'D14 Respect', value: 'Respect shapes how disagreement, belief and family/community differences are discussed.' },
      { label: 'D16 Responsibility', value: 'Responsibility appears through guidance, family care, mission, cooperation and assigned tasks.' },
      { label: 'D20 Helpfulness', value: 'Helpfulness appears through concrete protection, cooperation and support.' },
    ],
    questions: ['Which chapter detail supports this value?', 'What realistic action could show the same value?', 'Which part is source evidence and which part is your own application?'],
  },
};

export const abrahamB1TeacherGuide = abrahamB1TeacherGuideEn;
