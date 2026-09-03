import type { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

type Plan = {
  chapter: string;
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
    chapter: 'Chapter 1: Bilal Ibn Rabah’s Place in Islam',
    focus: 'Bilal’s early social position, historical importance and human value.',
    evidence: 'Bilal was among the first seven who openly said they were Muslim; he was born into slavery; the chapter explicitly rejects the idea that skin colour or slavery makes a person less valuable.',
    language: 'was/were; was born in; thought + clause; would for a future viewed from the past; make + person + noun/adjective; teaches us that + clause',
    pronunciation: 'Use the chapter audio to model Bilal, Rabah, openly and valuable; practise sentence stress in “People in Mecca thought…” and chunk “His story teaches us that | …” before production.',
    value: 'D14 Respect / D11 Freedom — human dignity, equal worth and freedom from degrading treatment',
    action: 'Name one respectful action that shows every classmate has equal human value.',
    misconception: 'Do not reduce the chapter to “Bilal was poor”; contrast low social power with the human value and later change stated in the story.',
    expected: 'Bilal was born into slavery in Mecca, became an early Muslim and is presented in the story as the first person to read the Adhan.'
  },
  {
    chapter: 'Chapter 2: The Age of Ignorance',
    focus: 'Jahiliyyah, idol worship, weak justice and the rich–poor gap.',
    evidence: 'Rich people lived in luxury while many poor people lived in need; the chapter says unfair extra money on debt widened the gap.',
    language: 'was/was called/there was; many/a lot of; but; between A and B; because of this; became + comparative',
    pronunciation: 'Use the audio to model Jahiliyyah, ignorance, justice and luxury; practise stress in “There was a big gap…” and the contrastive pause before “But many poor people…”.',
    value: 'D1 Justice / D5 Sensitivity — noticing unfair conditions and responding fairly',
    action: 'Suggest one fair response to a simple classroom situation in which people have unequal resources.',
    misconception: 'Jahiliyyah here is not simply “people knew nothing”; the chapter highlights belief, social injustice and economic inequality.',
    expected: 'The chapter describes idol worship, weak justice and an economic gap that made poor people’s lives harder.'
  },
  {
    chapter: 'Chapter 3: Slaves in Mecca',
    focus: 'Slavery in Mecca, unequal power and Umayya’s position.',
    evidence: 'Mecca is described as a centre for buying and selling slaves; Umayya is Bilal’s rich and powerful master and an enemy of Islam.',
    language: 'were getting + comparative; the most / one of the + superlative; was a center for + -ing; from/especially; when + past; started + -ing; wanted + person/thing + to + verb; became',
    pronunciation: 'Use the audio to model slavery, Abyssinia, Umayya and powerful; practise comparative/superlative stress in “getting richer” and “one of the richest and most powerful”.',
    value: 'D14 Respect / D11 Freedom — dignity must not depend on social power or ownership',
    action: 'Explain why power must never be used to remove another person’s dignity.',
    misconception: 'Do not present all Meccans as identical; stay with the social system and Umayya described in the source story.',
    expected: 'Bilal was enslaved by Umayya, a powerful Meccan leader who opposed the new message.'
  },
  {
    chapter: 'Chapter 4: Bilal’s Hard Life',
    focus: 'Hard work, degrading treatment and patience.',
    evidence: 'Bilal looks after camels under the hot sun and is treated rudely without respect.',
    language: 'always/often/every; did not + base verb; to + verb for purpose; job was to + verb; all day; could + verb; had to + verb',
    pronunciation: 'Use the audio to model hatred, rude, harsh and patient; contrast could and had to in short chunks and practise stress in “They did not respect him as a person.”',
    value: 'D12 Patience / D14 Respect — patience without normalising mistreatment',
    action: 'Rewrite one rude behaviour from the chapter as a respectful action.',
    misconception: 'Patience does not make unfair treatment acceptable; distinguish Bilal’s response from the wrongdoing described in the chapter.',
    expected: 'Bilal worked hard and was treated harshly, yet the chapter presents him as patient.'
  },
  {
    chapter: 'Chapter 5: A New Message',
    focus: 'Why worshipping Allah alone, fairness and equality mattered to Bilal.',
    evidence: 'Bilal thinks he has no money or power for freedom; then he hears teaching about One Allah, fairness and equality.',
    language: 'because; had to + verb; to + verb for purpose; thought + would; did not have any / had no; heard + people + -ing; tell + person + to + verb; must + verb; stop + -ing',
    pronunciation: 'Use the audio to model obedient, freedom, fair and equal; practise weak forms in “had to” and “to protect”, plus sentence stress in “People must be fair and equal.”',
    value: 'D1 Justice / D14 Respect — equality and fair treatment',
    action: 'Give one example of treating a weaker person fairly rather than using power against them.',
    misconception: 'The chapter does not say Bilal became free immediately after hearing the message.',
    expected: 'The message mattered because Bilal had little social power while it taught worship of Allah, fairness and equality.'
  },
  {
    chapter: 'Chapter 6: Visiting Abu Bakr',
    focus: 'Bilal’s search for understanding and his secret visit to Abu Bakr.',
    evidence: 'He leaves secretly, walks on a hidden path, knocks at Abu Bakr’s door and asks questions about the new religion.',
    language: 'think about / think deeply about; decide to + verb; feel + noun; secretly/hidden; did not want anyone to + verb; knew that + clause; when + past; started to + verb',
    pronunciation: 'Use the audio to model Creator, secretly, hidden and knocked; practise final consonants in decided/knocked and chunk “When he arrived… | he knocked… | and went inside.”',
    value: 'D6 Honesty — sincere inquiry and evidence before judgement',
    action: 'Practise asking one sincere question before making a judgement.',
    misconception: 'Bilal visits to learn and ask questions, not to obtain money or freedom at this point.',
    expected: 'Bilal secretly visits Abu Bakr because he wants to learn more about Islam.'
  },
  {
    chapter: 'Chapter 7: Bilal Accepts Islam',
    focus: 'A difficult choice based on belief rather than comfort.',
    evidence: 'Bilal knows life may become difficult but believes the religion of Allah is true and accepts Islam.',
    language: 'tell + person + about/that; want to + verb; be happy to + verb; after/when; could not + verb; stay + adjective; knew that + would; after + -ing; in the end',
    pronunciation: 'Use the audio to model truth, accept and difficult; practise could not in a short phrase and the timing markers “After…”, “When…” and “In the end…” during a three-step retell.',
    value: 'D6 Honesty / D12 Patience — staying with a considered decision despite expected difficulty',
    action: 'Describe a safe everyday situation where doing what is right may be harder than doing what is easy.',
    misconception: 'Bilal does not accept Islam because he expects an easier life.',
    expected: 'He accepts Islam even though he expects difficulty because he believes it is the truth.'
  },
  {
    chapter: 'Chapter 8: Allah Is One',
    focus: 'Pressure, refusal to worship idols and steadfast belief.',
    evidence: 'Umayya confines and hurts Bilal and offers freedom if he speaks well of the idols; Bilal refuses and repeats that Allah is One.',
    language: 'Is ...? / Did ...?; now + present verb; force + person + to + verb; refuse; tell + person + to + verb; if + present → will + verb; but',
    pronunciation: 'Use the audio to model refused, force and belief; practise rising intonation in confirmation questions, falling intonation in “Did you…?”, and a clear condition-result pause in “If… | you will…”.',
    value: 'D12 Patience / D14 Respect — steadfastness and respect for conscience',
    action: 'Identify the difference between pressuring someone and respecting another person’s conscience.',
    misconception: 'Keep the violence factual and age-appropriate; do not dramatise or role-play the punishment beyond the source.',
    expected: 'Bilal refuses Umayya’s demand and continues to state his belief in One Allah.'
  },
  {
    chapter: 'Chapter 9: Abu Bakr Saves Bilal',
    focus: 'Abu Bakr’s intervention and his question about justice.',
    evidence: 'Abu Bakr sees Bilal under the rock, asks Umayya to sell him and asks whether believing in One Allah is a crime.',
    language: 'want + person + to + verb; hear that + clause; go to see; right away; ask + person + to + verb; did not want to + verb; if + present, can + verb; What did ...? / Is it ... to ...?; can + verb',
    pronunciation: 'Use the audio to model rescued, crime and right away; practise question intonation in “Is it a crime…?” and stress the helper/action contrast in Abu Bakr’s intervention.',
    value: 'D20 Helpfulness / D9 Compassion / D1 Justice — safe intervention when someone faces harm',
    action: 'Propose one safe way to seek help when someone is being treated unfairly.',
    misconception: 'This chapter begins the rescue; Bilal’s freedom is completed in Chapter 10.',
    expected: 'Abu Bakr challenges the injustice and repeatedly asks to buy Bilal to rescue him.'
  },
  {
    chapter: 'Chapter 10: A Free Muslim',
    focus: 'The purchase, rescue and immediate freeing of Bilal.',
    evidence: 'Umayya sells Bilal for five pieces of gold; Abu Bakr removes the rock, buys him and frees him.',
    language: 'agree to + verb; if + past → would + verb; finally/first/after; with + noun for manner; now/no longer/became; could + verb, but did not',
    pronunciation: 'Use the audio to model freedom, agreed and finally; practise sequence-word stress in “First… / After… / Finally…” and contrastive stress in “could…, but did not…”.',
    value: 'D11 Freedom / D20 Helpfulness / D14 Respect — help restores freedom and dignity rather than creating new control',
    action: 'Explain why helping someone should restore dignity rather than create new control.',
    misconception: 'Abu Bakr does not keep Bilal as his slave after buying him.',
    expected: 'Abu Bakr buys Bilal to rescue him and then makes him a free man.'
  },
  {
    chapter: 'Chapter 11: The First Call to Prayer',
    focus: 'The Hijrah and Bilal’s new respected public role.',
    evidence: 'After the move to Medina, the Prophet chooses Bilal to call people to prayer.',
    language: 'after + clause/time/event; became; want to / want + person + to; allow + person + to; tell + person + to; even when; adverb for manner; that is why / so',
    pronunciation: 'Use the audio to model Hijrah, Medina and Adhan; practise chunking with “After the Hijrah…” and sentence stress in the reason-result frame “That is why…”.',
    value: 'D16 Responsibility / D14 Respect — responsibility based on trust and ability rather than social status',
    action: 'Identify one class responsibility that should be given on trust and ability rather than social status.',
    misconception: 'The central change is not wealth; it is trust, freedom and public responsibility.',
    expected: 'After the Hijrah, Bilal is chosen to call people to prayer and gives the first Adhan described in the story.'
  },
  {
    chapter: 'Chapter 12: Prayer Is Better Than Sleep',
    focus: 'The morning Adhan and the teaching that skin colour does not make one person better than another.',
    evidence: 'Bilal adds “Prayer is better than sleep”; the chapter links the Farewell Sermon with equality and shared human origin.',
    language: 'used to + verb; added; which means; every morning; pleased with; tell + person + to + verb; all + plural noun; better than; it is wrong to + verb; because of + noun',
    pronunciation: 'Use the audio to model morning, pleased and better than; practise comparative stress in “better than” and chunk the explanatory phrase “which means | …”.',
    value: 'D14 Respect / D10 Humility — equality and rejection of superiority',
    action: 'Turn the equality message into one concrete anti-discrimination action at school.',
    misconception: 'Connect both parts through Bilal’s role and human equality rather than treating them as unrelated facts.',
    expected: 'The chapter links Bilal’s morning call with a clear teaching against judging people by skin colour.'
  },
  {
    chapter: 'Chapter 13: Everyone Is Equal',
    focus: 'The final equality lesson, Bilal’s grief and the closing message about heart and good actions.',
    evidence: 'The chapter rejects racial and national superiority, describes Bilal leaving Medina after the Prophet’s death and ends with heart and good actions.',
    language: 'no/not better than; because of; the only way to ... is to ...; too + adjective + to + verb; start + -ing; when; could not + verb; ask + person + to; allow + person + to; it is unfair to + verb; what matters is',
    pronunciation: 'Use the audio to model nationality, Damascus, unfair and matters; practise contrastive stress in “not better than”, and pause naturally in “What matters is | the heart and good actions.”',
    value: 'D14 Respect / D10 Humility / D5 Sensitivity — equal worth regardless of background',
    action: 'Write one personal commitment to treat someone fairly regardless of background.',
    misconception: 'The ending does not say background is historically irrelevant; it says background must not decide a person’s human value.',
    expected: 'Bilal leaves Medina for Damascus after deep grief, while the final lesson states that skin colour, nationality and past do not determine human worth.'
  }
];

export const meccaA2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Bilal ibn Rabah and Mecca (A2) — Teacher Guide',
  subtitle: 'TYMM-aligned chapter-by-chapter guide connected to the active Language Focus',
  level: 'A2',
  estimatedDuration: '13 lessons, about 40 minutes per story chapter',
  targetAudience: 'Lower-secondary learners studying English at approximately CEFR A2.',
  targetLearners: 'Learners who can follow short supported narratives, locate direct evidence and produce short spoken or written responses with scaffolding.',
  purpose: 'Teach the Bilal ibn Rabah story through source-faithful comprehension, integrated skills, chapter-specific Language Focus, short production, review and values shown through observable action.',
  approachDesc: `Follow the same TYMM route in every chapter: establish story meaning through listening and reading (YDAB1–YDAB2), check comprehension with the Quick Challenge, use the active chapter-specific Language Focus for guided noticing and controlled practice, then transfer one or two patterns to short speaking or writing (YDAB3–YDAB4). Language Focus comes from the chapter and follows comprehension. ${TYMM_FOREIGN}`,
  assessmentEvidence: 'Chapter Quick Challenges, text-evidence checks, Language Focus matching/noticing and production tasks, short oral/written transfer, exit responses, Knowledge Check, Vocabulary Challenge, Language Review and Final Challenge.',
  assessmentOverview: {
    formative: ['Chapter Quick Challenge', 'Text-evidence checks', 'Language Focus guided practice', 'Short speaking/writing transfer', 'Exit ticket and repair after an incorrect answer', 'Knowledge Check', 'Vocabulary Challenge', 'Language Review'],
    summative: ['Final Challenge']
  },
  readingFramework: {
    before: 'Activate only the prerequisite needed for the chapter and make one purposeful prediction from the title or image.',
    during: 'Listen/read first for overall meaning, then reread for one precise evidence, sequence, comparison, cause-result or character-choice purpose. Do not stop to teach every word.',
    after: 'Complete the Quick Challenge, use the chapter Language Focus and finish with one short A2 transfer response that reuses chapter language.'
  },
  vocabularyApproach: {
    selection: 'Prioritise the chapter Word Notes and only the additional words required for the comprehension or Language Focus task.',
    method: 'Infer meaning from context, image, hotspot or a short example before giving a definition.',
    recycling: 'Reuse target words in Language Focus production, oral rehearsal, exit tickets and later review.'
  },
  grammarApproach: 'Teach language through the existing chapter-specific Language Focus. Locate the source form in the story, identify its communicative job, complete the guided activity and transfer one or two patterns to a new short A2 situation. Do not substitute a generic grammar syllabus.',
  grammarSequence: plans.map((plan, index) => `Ch${index + 1}: ${plan.language}`),
  skillsFocus: {
    reading: 'TYMM YDAB2: locate direct evidence, follow sequence, compare nearby details and understand simple cause-result, change and character choice.',
    listening: 'TYMM YDAB1: listen for gist first, then replay a targeted section for evidence, sequence or target language.',
    speaking: 'TYMM YDAB3: retell briefly, compare, explain a reason, ask/answer, state a choice and complete a short Language Focus transfer after oral rehearsal.',
    writing: 'TYMM YDAB4: write short connected A2 sentences using chapter-derived grammar, functions and vocabulary, then check meaning and accuracy.'
  },
  valuesFocus: [
    'D1 Justice — recognise unfair systems and choose fair alternatives',
    'D5 Sensitivity — notice discrimination, inequality and another person’s need',
    'D6 Honesty — ask sincerely, distinguish evidence from assumption and stay truthful to what the text supports',
    'D9 Compassion — respond to suffering without causing further harm',
    'D10 Humility — reject racial, national or social superiority',
    'D11 Freedom — recognise freedom and human dignity as central to Bilal’s story',
    'D12 Patience — remain steady under difficulty without normalising mistreatment',
    'D14 Respect — treat people as equal in human worth regardless of background',
    'D16 Responsibility — carry trusted public roles carefully',
    'D20 Helpfulness — intervene safely and help restore dignity'
  ],
  languageFocus: [
    'All 13 story chapters have active Language Focus connected to the preview book.',
    'Use Language Focus only after learners understand the chapter and complete the main comprehension check.',
    'Return to the exact story sentence whenever meaning is unclear; do not replace the chapter Language Focus with unrelated grammar drills.',
    'Finish with transfer: learners reuse selected chapter patterns in a new, short and safe A2 context.'
  ],
  differentiationNotes: 'Reduce language load without lowering the evidence or communication goal. Use one evidence sentence at a time, sentence frames, audio replay and selected Language Focus items for support. Extend through fuller explanation or transfer, never unsupported historical or religious expansion.',
  sensitiveNotes: {
    title: 'Content safeguards',
    notes: [
      'The book discusses slavery, discrimination and social inequality. Keep the language factual, age-appropriate and dignity-centred.',
      'Chapters 8–10 include confinement, physical mistreatment and rescue. Do not dramatise, role-play or add graphic detail; focus on pressure, choice, justice, help, freedom and dignity.',
      'When discussing skin colour, nationality and social status, avoid recreating discriminatory labels as classroom judgements. Use them only to understand and reject the unequal treatment stated in the source.',
      'Keep religious and historical claims within the story text used by the project; personal value-transfer examples must be labelled as learner applications rather than new historical facts.'
    ]
  },
  valuesEducation: {
    title: 'TYMM Values in Action',
    description: 'Start with a concrete action or choice from the story, name only the value that the evidence supports, then connect it to one age-appropriate action.',
    items: [
      { label: 'D1 Justice / D14 Respect', value: 'Recognise unfair treatment and choose a fair, dignity-preserving alternative.' },
      { label: 'D11 Freedom / D20 Helpfulness', value: 'Connect rescue and freedom with help that restores another person’s agency.' },
      { label: 'D12 Patience / D9 Compassion', value: 'Discuss steadiness and care without presenting suffering or mistreatment as acceptable.' },
      { label: 'D6 Honesty', value: 'Ask sincere questions and distinguish what the text says from assumptions.' },
      { label: 'D10 Humility / D5 Sensitivity', value: 'Reject claims of superiority based on race, nationality, wealth or status.' },
      { label: 'D16 Responsibility', value: 'Connect trusted roles with careful and reliable action.' }
    ],
    questions: ['Which story action supports this value?', 'What simple school or home action could show the same value?', 'Which part is story evidence and which part is your own application?']
  }
};

export const meccaA2TeacherGuide: TeacherGuideSection[] = plans.map((plan, index) => ({
  chapter: plan.chapter,
  timing: '40 minutes',
  objectives: [
    `Understand the chapter focus: ${plan.focus}`,
    `Find direct story evidence: ${plan.evidence}`,
    `Notice and practise the actual Chapter ${index + 1} Language Focus: ${plan.language}`,
    'Reuse at least one target pattern in a short A2 spoken or written response that is not a repetition of the Quick Challenge.',
    `Connect story evidence to ${plan.value} through one age-appropriate action.`
  ],
  pedagogy: `Keep historical and values content source-bound. TYMM route: YDAB1 listening and YDAB2 reading establish meaning and evidence first; the Quick Challenge checks comprehension; chapter-specific Language Focus then supports noticing and guided practice; YDAB3 speaking and YDAB4 writing reuse one or two target patterns in a new A2 context. Values work stays evidence-first and is linked to ${plan.value}.`,
  priorKnowledge: index === 0 ? ['No prior story knowledge is required; activate respectful character identification and human dignity.'] : [`Recall one event from Chapter ${index} that leads into this chapter.`],
  anticipatedMisconceptions: [plan.misconception],
  grammarFocus: `Chapter Language Focus: ${plan.language}`,
  pronunciationFocus: plan.pronunciation,
  beforeReading: ['Preview the title and image and make one purposeful prediction without adding facts not shown in the book.'],
  duringReading: [`Locate this evidence: ${plan.evidence}`, 'Replay one short audio section and point to the matching sentence in the text.'],
  afterReading: [
    'Complete the Quick Challenge and justify one answer with a sentence from the story.',
    `Use Chapter ${index + 1} Language Focus. First locate the source examples in the chapter, then complete the guided tasks for: ${plan.language}.`,
    'Complete the Language Focus production/reflection task by reusing at least one target pattern in a new, short A2 situation.',
    plan.action
  ],
  lessonPlan: '0–5 min recall/prediction; 5–10 min Word Notes; 10–20 min read + listen for meaning/evidence; 20–25 min Quick Challenge with text justification; 25–34 min Language Focus noticing + guided practice; 34–38 min pair speaking or short production; 38–40 min value/action exit response.',
  discussionPoints: ['What is the most important change or idea in this chapter?', 'Which sentence gives the strongest evidence?', `How does ${plan.value} appear through an action rather than only as an abstract word?`],
  interactiveTips: ['Use only the chapter image, audio, existing hotspots, Word Notes, Quick Challenge and chapter-specific Language Focus already provided in the student material.', 'If a Language Focus answer is uncertain, return to the exact story sentence before explaining the pattern.', 'Do not imply extra maps, cards, animations, worksheets or interactive tools that are not present in the chapter.'],
  differentiation: {
    strugglingLearners: `Use the frame “The chapter says ____. This shows ____.” Pre-select two Word Notes, replay the audio once and choose one Language Focus pattern from: ${plan.language}. Rehearse it orally before writing.`,
    fastFinishers: `Write 3–4 connected A2 sentences in a new situation using two Chapter ${index + 1} Language Focus patterns, then underline the story evidence that helped you understand their meaning.`
  },
  formativeAssessment: ['Locates accurate story evidence.', 'Connects form with meaning/function in the core Language Focus task.', 'Reuses at least one chapter language pattern in understandable A2 speaking or writing.', 'Connects the value to a concrete action without adding unsupported story facts.'],
  expectedResponses: [plan.expected],
  transferTask: plan.action,
  teacherReflection: 'Did students understand the story before Language Focus? Did Language Focus strengthen comprehension and short production rather than become a detached grammar lesson? Which target pattern needs recycling?',
  assessmentTools: { rubric: ['Accurate story evidence', 'Appropriate use of chapter Language Focus', 'Clear A2 production', 'Concrete value/action connection'], exitTicket: ['Write or say one evidence-based sentence and one new sentence using a Chapter Language Focus pattern.'] },
  extraResources: index === 0 ? { links: [{ label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN }, { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES }] } : undefined
}));
