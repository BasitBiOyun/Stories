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
  action: string;
  misconception: string;
  expected: string;
};

const plans: Plan[] = [
  {
    n: 1,
    title: 'Yunus Emre',
    focus: 'Yunus Emre’s biography, teacher, travels and the role of simple Turkish in making his poems easy to understand',
    evidence: 'the chapter links simple Turkish with easier understanding and gives birth, education, teacher, travel and death facts',
    language: 'past-life forms was / was born / became / traveled; because for reason; after for next event; when for time',
    pronunciation: 'Use the chapter audio to model the names Yunus Emre and Taptuk Emre, then chunk one biography sentence at because / after / when so learners hear meaning groups rather than reading word by word.',
    value: 'D6 Honesty — use dates, places and biographical claims exactly as the source states them',
    action: 'Give a short biography of a familiar person using only verified facts.',
    misconception: 'Do not confuse Mevlana’s death year with Yunus Emre’s, and do not change “easy to understand” into “simple in meaning”.',
    expected: 'Yunus Emre used simple Turkish, became Taptuk Emre’s dervish pupil and traveled to Syria and Azerbaijan.',
  },
  {
    n: 2,
    title: 'Our Dervish Yunus',
    focus: 'character, generosity, forgiveness and the contrast between wealth in the hands and wealth in the heart',
    evidence: 'dervishes are described as kind and cheerful, trying to understand people, sharing with the needy and leaving jealousy, arrogance, stinginess, greed, selfishness and gossip',
    language: 'were + adjective; tried to + verb; shared + object; could call; That is why for result; even if for surprising condition; not...but... for contrast; because of for motive',
    pronunciation: 'Replay one character-description sentence and one contrast sentence. Practise sentence stress on kind, cheerful, shared and needy, then pause around “not ... but ...” to make the contrast audible.',
    value: 'D20 Helpfulness / D10 Humility — generosity and humility shown through action',
    action: 'Choose one value and state one small action that makes it visible today.',
    misconception: 'Calling themselves poor does not mean every dervish had no money; the chapter contrasts inner dependence with material wealth.',
    expected: 'They shared what they had with the needy and tried to leave harmful habits.',
  },
  {
    n: 3,
    title: 'The Difficult Path',
    focus: 'the values and disciplined habits described as part of the dervish path',
    evidence: 'the chapter names honesty, patience, humility and selflessness, then describes eating, speaking and sleeping less and spending time on useful activities',
    language: 'needs / needs to for necessity; must for strong requirement; can’t for impossibility; repeated less with ate/spoke/slept; spent time on useful activities',
    pronunciation: 'Model the contrast in needs / must / can’t and the repeated rhythm of “ate less, spoke less, slept less”. Keep the poem in short sense groups and prioritise intelligibility over dramatic performance.',
    value: 'D12 Patience / D10 Humility — disciplined self-control without literalising poetic images',
    action: 'Choose one useful habit and describe one realistic way to practise it.',
    misconception: 'The poem’s strong images such as being “tongueless” are figurative language about restraint, not literal instructions.',
    expected: 'The path requires patience, humility and selflessness, and the chapter connects discipline with eating, speaking and sleeping less.',
  },
  {
    n: 4,
    title: 'The Woodcutter Yunus',
    focus: 'humility, willingness to serve, promise, instruction and Yunus’s repeated wood-gathering routine',
    evidence: 'a student should be humble and willing to serve; Yunus promises to do the service asked of him; Taptuk asks him to collect wood; every day he carries wood and never brings green or crooked pieces',
    language: 'to be humble / willing to serve for required quality and readiness; I will... for promise; ask + person + to + verb for reported request; every day / never / always for routine and frequency',
    pronunciation: 'Use the audio to contrast the promise “I will ...” with the reported request “asked Yunus to ...”. Stress every day, never and always when rehearsing the routine.',
    value: 'D16 Responsibility / D10 Humility — ordinary responsibility as character practice',
    action: 'Name one ordinary responsibility and the good quality it can help you practise.',
    misconception: 'The chapter does not say Yunus brought no wood; it says he did not bring green or crooked wood.',
    expected: 'Yunus was willing to serve, promised to do the work, and repeatedly brought suitable wood.',
  },
  {
    n: 5,
    title: 'Straight Wood and the Ego',
    focus: 'the difference between the outward appearance of woodcutting and the inner learning explained by the chapter',
    evidence: 'the text moves from what the work looks like to “But in fact”, then connects repeated axe use with learning and correction of heart and ego',
    language: 'Why...? for reason; Is there...? for existence; It looks like... for first impression; But in fact... for correction/deeper meaning; Every time... for repeated action; taught him how to... for learning/result',
    pronunciation: 'Model rising question intonation in “Is there ...?” and clear question stress in “Why ...?”. Then rehearse “It looks like ... / But in fact ...” as two contrasting chunks.',
    value: 'D6 Honesty / D10 Humility — distinguish appearance from the meaning the source actually explains',
    action: 'Give one everyday example where repeated ordinary work can train a good habit.',
    misconception: 'Do not add symbolic meanings beyond the explanation supplied in the chapter; forty years refers to the service period stated here, not Yunus’s age.',
    expected: 'The chapter explains that the outer wood work also represented inner training of the heart and ego.',
  },
  {
    n: 6,
    title: 'The Door of Honesty',
    focus: 'how nature, solitude, woodcutting and dervish-house learning support reflection and personal change',
    evidence: 'nature and being alone help deep thought; Yunus makes his heart purer, learns to be alone with Allah, and woodcutting helps him become a better person; lessons and talks also support learning',
    language: 'help + person + verb / help + person + become; make + object + comparative adjective; learn to + verb; place description with there are; if + present/simple result in If you look closely, you find...',
    pronunciation: 'Use one help/change sentence to practise chunking around helped / made / learned. In “If you look closely, you find ...”, pause lightly after the if-clause and stress look closely and find.',
    value: 'D6 Honesty / D5 Sensitivity — careful observation and separation of evidence from personal reflection',
    action: 'Observe one safe natural detail, state what you can actually see, then add one personal reflection separately.',
    misconception: 'Nature is not presented as Yunus’s only source of learning; lessons and talks at the dervish house are also named.',
    expected: 'Nature and solitude helped reflection, while the dervish house also provided lessons and talks.',
  },
  {
    n: 7,
    title: 'A Single Daisy',
    focus: 'the flower task, different responses, Yunus’s reason and the ordered daisy-scene narrative',
    evidence: 'Taptuk asks the students to bring flowers; the dervishes return with flowers; Yunus returns with one daisy; some mock him; he says he could not cut the flowers; when it gets dark a daisy calls out',
    language: 'time sequence with One day / in the late afternoon / when; all for the whole group; some for part; a single for exactly one; any after a negative for none from the group; could not + verb; because for reason',
    pronunciation: 'Rehearse the time markers as story chunks and contrast all / some / a single with sentence stress. Model the contraction-free phrase “could not” clearly before the short retell.',
    value: 'D14 Respect / D5 Sensitivity — notice differences without mocking and explain another person’s stated reason accurately',
    action: 'Describe a harmless situation where people reached different results because they noticed different things.',
    misconception: 'The chapter does not say there were no flowers or that Taptuk asked for exactly one flower.',
    expected: 'Some dervishes made fun of Yunus, but Yunus explained that he could not cut the flowers because of what he heard them saying.',
  },
  {
    n: 8,
    title: 'A Meaningful Life',
    focus: 'the closing lesson about remembrance, doing work well and living a meaningful and fruitful life',
    evidence: 'the final chapter reports Yunus’s message, states strong responsibility and advice, and links careful work with a positive result',
    language: 'tell + person + to for reported advice; must for strong necessity; should for advice; help + person + verb for positive result; so for reason → result',
    pronunciation: 'Use the closing paragraph to contrast strong stress on must with gentler advice stress on should. Chunk the reason-result sentence around so and keep “meaningful and fruitful life” as one final phrase.',
    value: 'D16 Responsibility / D6 Honesty — translate the closing lesson into careful, responsible daily action',
    action: 'Write one realistic personal commitment about doing an everyday responsibility carefully and well.',
    misconception: 'The daisy says it is dried up and dying; do not change the reason into beauty or health. The closing lesson includes remembrance as well as work quality.',
    expected: 'The final message combines remembering Allah, doing one’s best and doing every job well and correctly.',
  },
];

export const yunusA2TeacherGuide: TeacherGuideSection[] = plans.map(p => ({
  chapter: `Chapter ${p.n} — ${p.title}`,
  timing: '40 minutes',
  objectives: [
    `Understand the chapter focus: ${p.focus}.`,
    `Find direct story evidence: ${p.evidence}.`,
    `Notice and practise the actual Chapter ${p.n} Language Focus: ${p.language}.`,
    'Reuse at least one target pattern in a short A2 spoken or written response instead of merely repeating the Quick Challenge answer.',
    `Connect the chapter evidence to ${p.value} through one observable action.`,
  ],
  pedagogy: `Use a TYMM meaning-first route. YDAB1 listening and YDAB2 reading establish the story, sequence and evidence first. The Quick Challenge checks comprehension. Chapter ${p.n} Language Focus then makes the language genuinely present in the chapter visible through guided noticing and controlled practice. YDAB3 speaking and YDAB4 writing transfer one or two patterns into a short new A2 context. Values stay evidence-first and action-based: ${p.value}.`,
  priorKnowledge: p.n === 1 ? ['Basic biography words and simple past awareness.'] : [`Recall one directly relevant event or idea from Chapter ${p.n - 1}.`],
  anticipatedMisconceptions: [p.misconception],
  grammarFocus: `Chapter Language Focus: ${p.language}`,
  pronunciationFocus: p.pronunciation,
  beforeReading: ['Use the title and image to make one simple prediction without adding facts not present in the book.'],
  duringReading: [`Locate this evidence: ${p.evidence}.`, 'Listen first for overall meaning, then replay a short section for the exact evidence or language target.'],
  afterReading: [
    'Complete the Quick Challenge and justify one answer with a story sentence.',
    `Open Chapter ${p.n} Language Focus. Return to the original story sentence first, then complete the prepared noticing, matching or sequencing work for: ${p.language}.`,
    'Complete the Language Focus reflection/production task using at least one target pattern in a new or personal A2 context.',
    p.action,
    ...(p.n === 8 ? ['After Chapter 8, use the real preview review sequence: Knowledge Check → Vocabulary Challenge → Master Glossary Parts 1–2 → Language Review → Final Challenge. Treat the first three assessment stages and Language Review as formative preparation; Final Challenge is the summative whole-book check.'] : []),
  ],
  lessonPlan: `0–5 min recall/prediction; 5–10 min Word Notes; 10–20 min read + listen for meaning; 20–25 min evidence + Quick Challenge; 25–34 min Chapter ${p.n} Language Focus; 34–38 min short speaking/writing transfer; 38–40 min value/action exit response.`,
  discussionPoints: ['What is the most important idea or change in this chapter?', 'Which sentence gives the clearest evidence?', `How can ${p.value} be shown through an action rather than only named?`],
  interactiveTips: ['Use only the chapter image, audio, Word Notes, real hotspots, Quick Challenge and chapter-specific Language Focus that exist in the student material.', 'If a Language Focus answer is uncertain, return to the exact story sentence before explaining the form.', 'Keep poem interpretation and spiritual reflection within what the chapter itself supports.'],
  differentiation: {
    strugglingLearners: `Use the frame “The chapter says ____. This shows ____.” Pre-select two useful words, replay the relevant audio section once, and practise one Language Focus pattern from: ${p.language}. Rehearse orally before writing.`,
    fastFinishers: `Write 3–4 connected A2 sentences in a new context using two Chapter ${p.n} Language Focus patterns, then identify the source sentence that helped you understand each pattern.`,
  },
  formativeAssessment: ['Locates accurate story evidence.', 'Connects the Language Focus form to its meaning or communicative job.', 'Reuses at least one chapter target in understandable A2 production.', 'Keeps values and interpretation within the evidence supplied by the chapter.'],
  expectedResponses: [p.expected],
  transferTask: p.action,
  teacherReflection: 'Did learners understand the story before Language Focus? Did the language work strengthen comprehension and short production rather than become a detached grammar lesson?',
  assessmentTools: {
    rubric: ['Accurate story evidence', 'Appropriate Chapter Language Focus use', 'Clear A2 production', 'Concrete value/action connection'],
    exitTicket: ['Give one evidence-based sentence and one new sentence using a Chapter Language Focus pattern.'],
  },
  extraResources: p.n === 1 ? { links: [{ label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN }, { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES }] } : undefined,
}));

export const yunusA2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Yunus Emre A2 — Teacher Guide',
  subtitle: 'TYMM-aligned, chapter-specific guide with integrated Language Focus',
  level: 'A2',
  estimatedDuration: '8 × 40 minutes',
  targetAudience: 'A2 English learners, especially middle-school students.',
  targetLearners: 'Learners who can follow short supported narrative and biographical texts and produce brief spoken or written responses with scaffolding.',
  purpose: 'Teach Yunus Emre through evidence-based story comprehension, integrated skills, actual chapter-specific Language Focus and values-as-action.',
  approachDesc: `Follow one TYMM route in every story chapter: establish meaning through listening/viewing and reading (YDAB1–YDAB2), check comprehension with the Quick Challenge, open the actual chapter Language Focus for guided noticing and controlled practice, then transfer one or two patterns to short speaking or writing (YDAB3–YDAB4). Language Focus follows comprehension and remains connected to the story. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Chapter Quick Challenges, text-evidence checks, Language Focus tasks and production, short oral/written transfer, exit tickets, Knowledge Check, Vocabulary Challenge, Language Review and Final Challenge.',
  assessmentOverview: {
    formative: ['Chapter Quick Challenge', 'Text-evidence checks', 'Language Focus guided practice', 'Short speaking/writing transfer', 'Exit tickets', 'Knowledge Check', 'Vocabulary Challenge', 'Language Review'],
    summative: ['Final Challenge'],
  },
  readingFramework: {
    before: 'Activate only the knowledge needed for the chapter and make one purposeful prediction.',
    during: 'Read/listen first for meaning, then return to direct evidence, sequence, cause, contrast or character action.',
    after: 'Complete Quick Challenge, then Chapter Language Focus, then one short A2 transfer response.',
  },
  vocabularyApproach: {
    selection: 'Prioritise chapter Word Notes and only additional language necessary for the task.',
    method: 'Infer from context, image or audio before giving a direct definition.',
    recycling: 'Reuse target words in Language Focus production, exit tickets and the later Language Review.',
  },
  grammarApproach: 'Teach language through the existing chapter-specific Language Focus. Locate the form in the story, identify its communicative job, complete the prepared task, then reuse the pattern in a new short A2 context. Do not replace chapter Language Focus with unrelated grammar drills.',
  grammarSequence: plans.map(p => `Ch${p.n}: ${p.language}`),
  skillsFocus: {
    listening: 'TYMM YDAB1: follow chapter narration for gist, key details and familiar target language.',
    reading: 'TYMM YDAB2: locate explicit evidence, follow sequence and understand simple reason, contrast and result relationships.',
    speaking: 'TYMM YDAB3: give short supported answers, retell key events and transfer chapter language to a new A2 context.',
    writing: 'TYMM YDAB4: produce short connected sentences using chapter language and check basic meaning and accuracy.',
  },
  valuesFocus: [
    'D5 Sensitivity — careful attention to people, nature and the effects of behaviour',
    'D6 Honesty — source accuracy and honest self-reflection',
    'D10 Humility — humility expressed through service rather than status',
    'D12 Patience — disciplined persistence and self-control',
    'D14 Respect — respect for people, differences and non-mocking interaction',
    'D16 Responsibility — careful fulfilment of everyday responsibilities',
    'D20 Helpfulness — generosity and service as observable action',
  ],
  languageFocus: [
    'All eight story chapters have active, student-facing Language Focus in preview.',
    'Use it only after learners understand the chapter and complete the core comprehension check.',
    'Always trace the target pattern back to its actual story sentence before discussing form or function.',
    'Finish Language Focus with transfer: one or two target patterns reused in a meaningful new A2 response.',
  ],
  differentiationNotes: 'Reduce language load, not the learning goal: use one evidence sentence at a time, selected vocabulary, audio replay, oral rehearsal before writing and one selected Language Focus pattern. Extend with a second target pattern rather than extra unsupported facts.',
  sensitiveNotes: {
    title: 'Source and interpretation safeguards',
    notes: [
      'Keep biographical, spiritual and historical claims inside the student-facing text.',
      'Treat poetic images as figurative only where the chapter itself supports that reading; do not turn them into literal behavioural instructions.',
      'Separate learner reflection from claims about Yunus Emre’s historical beliefs or intentions.',
      'Chapter 7–8 includes a personified daisy and its death; teach it as the story scene provided by the book without adding botanical or spiritual claims.',
      'Do not turn values activities into unsupported religious or biographical statements.',
    ],
  },
  valuesEducation: {
    title: 'TYMM Values in Action',
    description: 'Begin with chapter evidence, identify the relevant D-coded value, then ask for one observable and age-appropriate action.',
    items: [
      { label: 'D6 Honesty', value: 'Use source facts accurately and distinguish evidence from personal reflection.' },
      { label: 'D10 Humility / D16 Responsibility', value: 'Connect service and ordinary duties with concrete responsible action.' },
      { label: 'D12 Patience', value: 'Describe disciplined self-control without literalising poetic images.' },
      { label: 'D14 Respect / D5 Sensitivity', value: 'Avoid mockery, notice differences carefully and treat people and nature with consideration.' },
      { label: 'D20 Helpfulness', value: 'Make generosity visible through useful help rather than abstract slogans.' },
    ],
    questions: ['Which sentence supports this value?', 'What simple action could show it today?', 'Which part is story evidence and which part is your own application?'],
  },
};
