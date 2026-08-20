import type { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';

type ChapterPlan = {
  chapter: string;
  focus: string;
  evidence: string;
  language: string;
  valueAction: string;
  misconception: string;
  expected: string;
};

const chapterPlans: ChapterPlan[] = [
  { chapter: 'Chapter 1: Bilal Ibn Rabah’s Place in Islam', focus: 'Bilal’s early social position, his importance in Islamic history, and the idea that human value is not decided by skin colour or slavery.', evidence: 'Bilal was among the first seven who openly said they were Muslim; he was born into slavery; the chapter says skin colour or slavery does not make a person less valuable.', language: 'was/were; first; valuable; slave; Adhan', valueAction: 'Students name one respectful action that shows every classmate has equal human value.', misconception: 'Do not let students reduce the chapter to “Bilal was poor”; the chapter contrasts low social power with lasting human value.', expected: 'Bilal was born into slavery in Mecca, became an early Muslim, and is presented as the first person to read the Adhan.' },
  { chapter: 'Chapter 2: The Age of Ignorance', focus: 'Jahiliyyah, idol worship, lack of justice, and the rich–poor gap.', evidence: 'The text contrasts rich people living in luxury with poor people living in need and explains unfair extra money on debt.', language: 'there was/there were; rich/poor; fair/unfair; justice', valueAction: 'Students suggest one fair response to a simple rich–poor classroom scenario.', misconception: 'Jahiliyyah here is not simply “people knew nothing”; the chapter highlights belief and social injustice.', expected: 'The chapter describes idol worship, weak justice, and an economic gap that made poor people’s lives harder.' },
  { chapter: 'Chapter 3: Slaves in Mecca', focus: 'Slavery in Mecca, unequal power, and Umayya’s position.', evidence: 'Mecca is described as a centre for buying and selling slaves; Umayya is identified as Bilal’s rich and powerful master and an enemy of Islam.', language: 'master; slave market; powerful; enemy; from', valueAction: 'Students identify why owning or controlling another person is incompatible with dignity.', misconception: 'Do not present all Meccans as identical; the text specifically describes a social system and Umayya’s role in it.', expected: 'Bilal was enslaved by Umayya, a powerful Meccan leader who opposed the new message.' },
  { chapter: 'Chapter 4: Bilal’s Hard Life', focus: 'Hard work, degrading treatment, and patience.', evidence: 'Bilal looks after camels under the hot sun and is treated rudely without respect.', language: 'past simple; worked/looked after; harsh; patient; respect', valueAction: 'Students rewrite one rude behaviour from the chapter as a respectful action.', misconception: 'Patience does not make unfair treatment acceptable; students should distinguish Bilal’s response from Umayya’s wrongdoing.', expected: 'Bilal worked hard and was treated harshly, yet the chapter presents him as patient.' },
  { chapter: 'Chapter 5: A New Message', focus: 'Why the message of worshipping Allah alone, fairness, and equality mattered to Bilal.', evidence: 'Bilal thinks he has no money or power for freedom; then he hears teaching about One Allah, fairness, and equality.', language: 'must; fair/equal; freedom; worship; because', valueAction: 'Students give one example of treating a weaker person fairly rather than using power against them.', misconception: 'The chapter does not say Bilal became free immediately after hearing the message.', expected: 'The message mattered because Bilal had little social power while it taught worship of Allah, fairness, and equality.' },
  { chapter: 'Chapter 6: Visiting Abu Bakr', focus: 'Bilal’s search for understanding and his secret visit to Abu Bakr.', evidence: 'He leaves secretly, walks on a hidden path, knocks at Abu Bakr’s door, and asks many questions about the new religion.', language: 'sequencing words; secretly; hidden; asked; went', valueAction: 'Students practise asking a sincere question before making a judgement.', misconception: 'Bilal visits to learn and ask questions, not to obtain money or freedom from Abu Bakr at this point.', expected: 'Bilal secretly visits Abu Bakr because he wants to learn more about Islam.' },
  { chapter: 'Chapter 7: Bilal Accepts Islam', focus: 'A difficult choice based on belief rather than comfort.', evidence: 'Bilal knows life may become difficult but believes the religion of Allah is true and accepts Islam.', language: 'knew; wanted; but; because; truth', valueAction: 'Students describe a safe everyday situation where doing what is right may be harder than doing what is easy.', misconception: 'Bilal does not accept Islam because he expects an easier life.', expected: 'He accepts Islam even though he expects difficulty because he believes it is the truth.' },
  { chapter: 'Chapter 8: Allah Is One', focus: 'Pressure, refusal to worship idols, and steadfast belief.', evidence: 'Umayya confines and hurts Bilal and offers freedom if he speaks well of the idols; Bilal refuses and repeats that Allah is One.', language: 'refused; forced; if; will; one', valueAction: 'Students identify the difference between using pressure and respecting another person’s conscience.', misconception: 'Keep the physical violence factual and age-appropriate; do not dramatize beyond the source.', expected: 'Bilal refuses Umayya’s demand and continues to state his belief in One Allah.' },
  { chapter: 'Chapter 9: Abu Bakr Saves Bilal', focus: 'Abu Bakr’s intervention and his question about justice.', evidence: 'Abu Bakr sees Bilal under the rock, asks Umayya to sell him, and asks whether believing in One Allah is a crime.', language: 'asked; sell; price; crime; right away', valueAction: 'Students propose one safe way to seek help when they see someone being treated unfairly.', misconception: 'This chapter begins the rescue; Bilal’s actual freedom is completed in Chapter 10.', expected: 'Abu Bakr challenges the injustice and repeatedly asks to buy Bilal to rescue him.' },
  { chapter: 'Chapter 10: A Free Muslim', focus: 'The purchase, rescue, and immediate freeing of Bilal.', evidence: 'Umayya sells Bilal for five pieces of gold; Abu Bakr removes the rock, buys him, and frees him.', language: 'agreed; bought; rescued; freed; could', valueAction: 'Students explain why helping someone should restore dignity rather than create a new form of control.', misconception: 'Abu Bakr does not keep Bilal as his slave after buying him.', expected: 'Abu Bakr buys Bilal to rescue him and then makes him a free man.' },
  { chapter: 'Chapter 11: The First Call to Prayer', focus: 'The Hijrah and Bilal’s new respected public role.', evidence: 'After the move to Medina, the Prophet chooses Bilal to call people to prayer.', language: 'after; chose; call; respected; Hijrah', valueAction: 'Students identify a class responsibility that should be given on trust and ability rather than social status.', misconception: 'The chapter’s central change is not wealth; it is trust, freedom, and public responsibility.', expected: 'After the Hijrah, Bilal is chosen to call people to prayer and gives the first Adhan described in the story.' },
  { chapter: 'Chapter 12: Prayer Is Better Than Sleep', focus: 'The morning Adhan and the teaching that skin colour does not make one person better than another.', evidence: 'Bilal adds “Prayer is better than sleep”; the chapter then connects the Farewell Sermon with equality and shared human origin.', language: 'better than; equal; speech; disrespect; morning', valueAction: 'Students turn the equality message into one concrete anti-discrimination action at school.', misconception: 'Keep the two parts connected by the chapter’s larger theme of Bilal’s role and human equality rather than treating them as unrelated facts.', expected: 'The chapter links Bilal’s morning call with a clear teaching against judging people by skin colour.' },
  { chapter: 'Chapter 13: Everyone Is Equal', focus: 'The final equality lesson, Bilal’s grief, and the story’s closing message about heart and good actions.', evidence: 'The chapter rejects racial and national superiority, describes Bilal leaving Medina after the Prophet’s death, and ends with heart and good actions.', language: 'better than; allowed; nationality; matters; good actions', valueAction: 'Students write one personal commitment to treat someone fairly regardless of background.', misconception: 'The ending does not say background is historically irrelevant; it says it must not decide a person’s value.', expected: 'Bilal leaves Medina for Damascus after deep grief, while the final lesson states that skin colour, nationality, and past do not determine human worth.' },
];

export const meccaA2TeacherGuide: TeacherGuideSection[] = chapterPlans.map((p, index) => ({
  chapter: p.chapter,
  timing: '40 minutes',
  objectives: [
    `Understand the chapter focus: ${p.focus}`,
    `Find direct story evidence: ${p.evidence}`,
    `Use A2 language for the chapter: ${p.language}`,
    'Give a short spoken or written response supported by the story.',
  ],
  pedagogy: `Keep the historical and values content source-bound. Model one short answer, then require learners to locate evidence before speaking or writing. TYMM integration: reading for evidence, listening for key detail, supported speaking, short writing, and values shown through action.`,
  priorKnowledge: index === 0 ? ['No prior chapter knowledge required; activate the ideas of value, respect, and historical人物 identification.'] : [`Recall one event from Chapter ${index} that leads into this chapter.`],
  anticipatedMisconceptions: [p.misconception],
  grammarFocus: p.language,
  pronunciationFocus: `Rehearse only the key names and words that appear in this chapter; use the chapter audio as the pronunciation model where available.`,
  beforeReading: [`Preview the title and image. Ask learners to predict one event or idea without adding facts not shown in the book.`],
  duringReading: [`Pause once to locate this evidence: ${p.evidence}`, 'Replay a short audio section and ask learners to point to the matching sentence in the text.'],
  afterReading: [`Complete the chapter Quick Challenge, then ask learners to justify one answer with a sentence from the story.`, p.valueAction],
  lessonPlan: '0–5 min prior recall/title prediction; 5–10 min Word Notes; 10–22 min read + listen with evidence marking; 22–30 min Quick Challenge and answer justification; 30–36 min pair speaking; 36–40 min short written exit response.',
  discussionPoints: [`What is the most important change or idea in this chapter?`, `Which sentence gives the best evidence?`, `How does the chapter show its value through an action rather than a slogan?`],
  interactiveTips: ['Use only the chapter image, audio, Word Notes, hotspots, and Quick Challenge already present in the book.', 'Require students to find the source sentence before accepting a factual answer.'],
  differentiation: {
    strugglingLearners: `Give the frame “The chapter says ____. This shows ____.” Pre-select two relevant Word Notes and let the learner replay the audio once more.`,
    fastFinishers: `Write 3–4 connected A2 sentences explaining the chapter focus and cite two details from the story without copying whole sentences.`,
  },
  formativeAssessment: ['Can the learner locate one accurate piece of evidence?', 'Can the learner explain the main idea in simple A2 language?', 'Can the learner connect the value to a concrete action?'],
  expectedResponses: [p.expected],
  transferTask: p.valueAction,
  teacherReflection: 'Did students use story evidence, or did discussion drift into unsupported general statements? Which language support should be recycled next lesson?',
}));

export const meccaA2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Mecca A2 — Teacher Guide',
  level: 'A2',
  estimatedDuration: '13 × 40 minutes',
  targetAudience: 'A2 English learners',
  purpose: 'Teach the Bilal ibn Rabah story through evidence-based language learning, integrated skills, and values-as-action.',
  skillsFocus: {
    reading: 'Locate explicit evidence and follow simple narrative sequence.',
    listening: 'Use chapter audio to confirm key details and language.',
    speaking: 'Give short supported answers and pair explanations.',
    writing: 'Produce short evidence-based A2 sentences.',
  },
  valuesFocus: ['human dignity', 'justice', 'equality', 'patience', 'courage', 'helping someone facing unfair treatment'],
  differentiationNotes: ['Use sentence frames, reduced Word Notes, and audio replay for support; use evidence-based extension writing for fast finishers.'],
};
