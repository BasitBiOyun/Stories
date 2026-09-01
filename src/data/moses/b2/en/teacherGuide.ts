import { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';
import { mosesB2Pages } from './pages';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

const storyPages = mosesB2Pages.filter((page) => page.type === 'story');

type ChapterPlan = {
  focus: string;
  evidence: string;
  misconception: string;
  languageSupport: string;
  discussion: string;
  valueAction: string;
};

const plans: ChapterPlan[] = [
  {
    focus: 'build a source-aware historical frame for Moses, the Children of Israel and their settlement in Egypt',
    evidence: 'the chapter distinguishes religious traditions, states how often Moses is mentioned in the Quran, traces the Israelites to Jacob and describes their growth in Egypt',
    misconception: 'do not collapse religious tradition, historical framing and the chapter’s own explanatory claims into one level of certainty',
    languageSupport: 'according to; is mentioned; originated from; were descended from; however; because; relative clauses for defining people and groups',
    discussion: 'Which statements are religious-text references, which are historical background, and how does the chapter signal the difference?',
    valueAction: 'intellectual honesty — label a statement as source-based, background information or interpretation before discussing it',
  },
  {
    focus: 'evaluate historical-source language about Seti I, Ramses II and the possible date of the Exodus',
    evidence: 'the chapter repeatedly uses source markers and ends by saying the exact date is unknown while describing Ramses II as probable',
    misconception: 'probably and must have taken place do not mean the exact date or identity is established beyond doubt',
    languageSupport: 'according to the sources; sources also say; most sources state; probably; however; the exact date is unknown; because of; as a result of',
    discussion: 'How does the wording change when the text moves from evidence to probability?',
    valueAction: 'evidence awareness — preserve uncertainty when a source itself preserves uncertainty',
  },
  {
    focus: 'explain how Nile control, labour and royal authority are connected in the chapter’s argument',
    evidence: 'Herodotus is cited, canal projects are described, large projects require manpower and the text says authority was apparently based on both river wealth and forced labour',
    misconception: 'the word apparently signals interpretation; it should not be taught as a proven single-cause explanation of Egyptian authority',
    languageSupport: 'points to; for this reason; thus; apparently; not only...but also; was based on; for agricultural/commercial purposes',
    discussion: 'What is direct information and what is the chapter’s interpretation of the relationship between resources, labour and authority?',
    valueAction: 'justice — examine who benefits from a system and who bears its cost',
  },
  {
    focus: 'trace the water motif from baby Moses to the later Red Sea event while treating the name-etymology claim as the text frames it',
    evidence: 'Moses is placed in a basket, found near the palace, named there and the chapter explicitly links his first water journey with later salvation at the Red Sea',
    misconception: 'do not present the mu/sa etymology as independently verified linguistics; teach it as a claim made within the current chapter',
    languageSupport: 'was placed / was set free / was found / was given the name; however; while; also; took place; a combination of...meaning...',
    discussion: 'How does the chapter use water as a repeated narrative motif?',
    valueAction: 'source discipline — repeat an etymology or historical claim with the same level of certainty used by the source',
  },
  {
    focus: 'analyse oppression, outward conformity and the reported dream without erasing the chapter’s uncertainty markers',
    evidence: 'Pharaoh is described as a tyrant, some secret non-pagan belief is presented as possible, and the dream account is explicitly attributed to Ibn Abbas',
    misconception: 'it is possible that and Ibn Abbas said are source/stance markers and must not be rewritten as unqualified fact',
    languageSupport: 'it is possible that; according to; Ibn Abbas said; but; because; while; continued to; relative clauses',
    discussion: 'Which two phrases most clearly show that the narrator is qualifying a claim?',
    valueAction: 'honesty — separate what the text asserts strongly from what it presents as possible or reported',
  },
  {
    focus: 'connect Pharaoh’s labour policy, Moses’s birth and his mother’s action through cause, policy and quoted revelation',
    evidence: 'the killing policy changes because of manpower loss, Moses is born in a killing year and his mother acts after the quoted instruction',
    misconception: 'the economic explanation belongs to the current narrative; do not generalise it beyond what the text says',
    languageSupport: 'because; according to the new policy; would / were to; in one year...in the next; so; when; for fear that; had to',
    discussion: 'How do political calculation and personal danger meet in this chapter?',
    valueAction: 'responsibility — evaluate policies by their effects on human life, not only by efficiency',
  },
  {
    focus: 'analyse Asiye’s persuasion, secret belief and protective action through character evidence',
    evidence: 'the chapter describes her as unlike Pharaoh, secretly believing in Allah, persuading him and asking that Moses be kept and nursed',
    misconception: 'do not turn the whole palace into a safe or compassionate setting; the protection is tied to Asiye’s choices',
    languageSupport: 'unlike; who + relative clause; persuaded + object; while; let me + verb; let + object + verb; because',
    discussion: 'Which actions, rather than adjectives alone, establish Asiye’s character?',
    valueAction: 'mercy — use position or influence to protect someone vulnerable',
  },
  {
    focus: 'examine Moses’s identity tension before prophethood and the text’s transition to the conflict in town',
    evidence: 'he grows up in the palace, has not yet received the prophetic mission, cannot decide whether to feel gratitude or oppose oppression and feels close to the Israelites',
    misconception: 'do not read later prophetic knowledge back into this chapter; the text explicitly says the mission had not yet been given',
    languageSupport: 'had not yet been given; could not decide whether...or; because of; one of; was raised; became; while/when for background and transition',
    discussion: 'How does the text present identity, gratitude and justice as a genuine tension at this point?',
    valueAction: 'fairness — recognise competing loyalties without ignoring harm done to others',
  },
  {
    focus: 'distinguish accidental harm, remorse, repeated conflict and the legal threat that follows',
    evidence: 'the death is described as unintentional, Moses immediately asks forgiveness, the second dispute spreads the news and a man warns him to flee',
    misconception: 'the killing must not be retold as planned; the chapter explicitly marks it as unintentional',
    languageSupport: 'upon + -ing; thus; unintentionally; just as; would result in; so; was forced to; immediately; the very next day',
    discussion: 'How do intention, consequence and responsibility differ in this chapter?',
    valueAction: 'responsibility — acknowledge harm accurately, seek forgiveness/help and avoid repeating the harmful pattern',
  },
  {
    focus: 'read the embedded sacred quotation as quoted register while following Moses’s moral commitment and fear',
    evidence: 'the chapter quotes the Kasas passage, includes Moses’s prayer and promise not to support wrongdoers, then returns to the second-day confrontation',
    misconception: 'archaic translation forms such as verily are part of the quoted register and should not become the productive B2 language target',
    languageSupport: 'quotation versus narrator voice; said / replied; when / then; decided to; nothing but; will never; past reference and sequence markers',
    discussion: 'How can a reader distinguish the chapter narrator from the embedded translated scripture?',
    valueAction: 'integrity — state a principle after a mistake and connect it to a future action',
  },
  {
    focus: 'trace the warning, escape route and physical hardship without adding details beyond the current account',
    evidence: 'a man warns Moses that the chiefs plan to kill him, Moses leaves without preparation, travels by night, hides by day and reaches Midian',
    misconception: 'the chapter says Allah and trust in Him are his companion; do not invent human companions or an organised caravan',
    languageSupport: 'warn/tell + object + to; without + -ing; however; fearing + noun; by night / during the day; after; headed for; which + relative clause',
    discussion: 'Which language shows both urgency and sustained endurance during the escape?',
    valueAction: 'safe decision-making — recognise when leaving danger is the responsible action',
  },
  {
    focus: 'analyse Moses’s observation of need and his offer of help at the Midian watering place',
    evidence: 'the women can water only after the male shepherds, their father is old, Moses notices hardship and asks whether he can help',
    misconception: 'the chapter does not portray the women as unwilling to work; their difficulty comes from crowding and their father’s condition',
    languageSupport: 'while; due to; could only...after; in need of; if he could; until; too + adjective; after + clause',
    discussion: 'What evidence allows Moses to infer need before he offers help?',
    valueAction: 'helpfulness — observe the real need before deciding what support is useful',
  },
  {
    focus: 'connect help, gratitude, invitation and Moses’s account of his past through cause and purpose',
    evidence: 'Moses waters the sheep, the sisters return unexpectedly early, their father sends an invitation and Moses explains the events that forced him to flee Egypt',
    misconception: 'do not add a reward bargain not found in this chapter; the invitation is framed as gratitude and hospitality',
    languageSupport: 'due to; unexpectedly; so that; after + -ing; forced + object + to; it was clear that; invite + object + to',
    discussion: 'How does one act of help change Moses’s situation without being presented as a transaction?',
    valueAction: 'gratitude — respond to help with appreciation and appropriate hospitality rather than entitlement',
  },
  {
    focus: 'evaluate the chapter’s interpretation of Moses’s ten years in Midian and the transition back toward Egypt',
    evidence: 'Moses is offered work, marries, serves for ten years and the text interprets the period as spiritual preparation before dating his return to early Ramses II rule',
    misconception: 'spiritual preparation and the precise historical dating are claims of the current chapter; distinguish interpretation from directly narrated events',
    languageSupport: 'because; for ten years; after a period of; during; suited + object; needed someone + adjective; returned during; this period was...',
    discussion: 'Which part is event sequence and which part is the chapter’s interpretation of what those years meant?',
    valueAction: 'reliability — treat long preparation and ordinary work as meaningful forms of responsibility',
  },
  {
    focus: 'follow the lost-route, fire and staff episode as a sequence of intention, preparation and command',
    evidence: 'Moses loses his way, approaches a fire hoping for warmth or guidance, hears the call, explains the staff and is told to throw it down',
    misconception: 'do not move the shining-hand sign into this chapter; the current page ends with the staff returning under divine command',
    languageSupport: 'until; hoping to; as + clause; was about to; told + object + to; at once; but; began to; in order to',
    discussion: 'How does the chapter move from an ordinary travel need to a prophetic turning point?',
    valueAction: 'attentive listening — pause, identify an instruction accurately and act only on what is actually given',
  },
  {
    focus: 'connect the second sign with the beginning of Moses’s mission while respecting the embedded sacred quotation',
    evidence: 'the hand becomes exceptionally bright, the two signs are named, Moses is commanded to go to Pharaoh and a Quranic passage is then quoted',
    misconception: 'the quoted sacred text and the chapter narrator are distinct voices and should be signalled as such in analysis',
    languageSupport: 'when; then; together with; commanded + object + to; for + clause; after; direct command versus reported command; source-quotation framing',
    discussion: 'How do the signs, command and quoted passage establish the mission in different textual voices?',
    valueAction: 'responsibility — connect receiving a task with understanding its purpose before carrying it out',
  },
  {
    focus: 'analyse the continuation of the quoted revelation and the genealogy/monotheism explanation that follows',
    evidence: 'the chapter continues the Taha quotation, then states Moses’s relation to Jacob and Abraham and frames his religion as monotheism',
    misconception: 'do not make the archaic translated quotation a model for ordinary modern English production',
    languageSupport: 'therefore; lest; who + relative clause; descendant of; one of; came after; successor; quotation-to-explanation transition',
    discussion: 'How does the chapter shift from sacred quotation to explanatory genealogy?',
    valueAction: 'respect — identify changes in textual register before paraphrasing sacred or historical material',
  },
  {
    focus: 'analyse Moses and Aaron’s joint message, Pharaoh’s questioning and the request to release the Children of Israel',
    evidence: 'Aaron accompanies Moses, they deliver the message, Moses asks permission to take the Israelites and Pharaoh challenges both his request and identity',
    misconception: 'do not import later contest details into this dialogue chapter; focus on the request and Pharaoh’s rhetorical pressure',
    languageSupport: 'ask for permission to; want + object + to; why should...?; as + reason; whether; who + relative clause; deliver a message; ask + wh-clause',
    discussion: 'How does Pharaoh use questions to shift attention from Moses’s request to Moses’s personal history?',
    valueAction: 'respectful courage — state a difficult request clearly without copying the other speaker’s mockery',
  },
  {
    focus: 'distinguish Pharaoh’s accusation from Moses’s rebuttal and trace the move from dialogue to open threat and sign',
    evidence: 'Pharaoh weaponises Moses’s past, Moses says the death was accidental and forgiven, Pharaoh threatens prison and Moses offers convincing evidence',
    misconception: 'Pharaoh’s accusation that the accidental killing made Moses an unbeliever is dialogue, not the narrator’s judgement',
    languageSupport: 'rather; despite the fact that; after; if; what if; had no choice but to; when; accuse + object + of; explained that',
    discussion: 'Which sentences belong to accusation, which to rebuttal, and which move the scene toward evidence?',
    valueAction: 'honesty — answer an accusation by separating fact, interpretation and responsibility',
  },
  {
    focus: 'analyse the advisers’ strategy for reducing the public impact of Moses’s signs and the illusion/miracle distinction',
    evidence: 'the advisers recommend detaining Moses and calling magicians, the contest is planned to lessen impact, and the magicians’ moving snakes are explicitly called an illusion',
    misconception: 'do not describe the magicians’ performance and Moses’s sign as the same kind of event; the chapter explicitly distinguishes them',
    languageSupport: 'recommended that; might; aimed to; it was decided that; was held; however; in this way; to lessen / to defeat / to prove',
    discussion: 'How does the text distinguish strategic imitation from the claim of a genuine sign?',
    valueAction: 'evidence evaluation — ask what kind of evidence would actually distinguish appearance from reality',
  },
  {
    focus: 'trace the magicians’ change of position and Pharaoh’s response while evaluating the chapter’s elite-scholar interpretation',
    evidence: 'the illusion frightens Moses briefly, his staff consumes the fake snakes, the magicians believe, and the narrator describes them as elite intellectual scholars before Pharaoh escalates repression',
    misconception: 'the description of the magicians as elite intellectual scholars is the chapter’s interpretive framing and should be identified as such',
    languageSupport: 'when / after seeing; not merely...but; so; upon this; could not do anything but; since; including; continued pressure and stance language',
    discussion: 'What changes the magicians’ position, and which sentence interprets the significance of that change?',
    valueAction: 'intellectual humility — revise a position when the evidence you recognise as relevant changes',
  },
  {
    focus: 'follow the escalation from oppression to Exodus, pursuit, entrapment and the opening of the Red Sea while distinguishing narration from quoted revelation',
    evidence: 'the people leave at night, Pharaoh mobilises, Moses reassures them, the sea parts after the command, and the chapter embeds a longer Quranic quotation',
    misconception: 'the sea does not open by Moses’s independent power; the chapter attributes the command and miracle to Allah',
    languageSupport: 'it seemed that; finding no other way; when; so; however; would; then; immediately; managed to; was trapped; source-quotation framing',
    discussion: 'How does the chapter build tension linguistically before the sea opens?',
    valueAction: 'calm leadership — communicate truthful reassurance and the next responsible action in a crisis',
  },
  {
    focus: 'compare Moses’s trust with Pharaoh’s false claim and follow the cause-result sequence of the drowning',
    evidence: 'the sacred quotation states guidance and parting, Pharaoh claims the sea opened at his command, the army enters and the sea returns over them',
    misconception: 'Pharaoh’s claim is quoted as his false interpretation; it must never be presented as the narrator’s explanation of the miracle',
    languageSupport: 'but; when; claimed that; commanded + object + to; then; midway; return to its former state; quotation versus narrator claim',
    discussion: 'How does the chapter place two competing interpretations of the same event side by side?',
    valueAction: 'humility — distinguish receiving help or power from falsely claiming exclusive credit for it',
  },
  {
    focus: 'synthesise the post-Exodus calf episode, receipt of the Torah and Moses’s continued guidance as a perseverance theme',
    evidence: 'some people ask for an object of worship, Moses advises them, he leaves Aaron in charge, spends forty days on Mount Tur, receives the Torah and returns to calf worship',
    misconception: 'do not turn the final chapter into a complete account of every later event in Moses’s life; it explicitly says his story and tests continued',
    languageSupport: 'despite this; when; during this time; left + object + in charge; but unfortunately; would face; continued + -ing; the reason why; despite difficulties',
    discussion: 'Why does the chapter end with continued responsibility rather than a simple “problem solved” ending?',
    valueAction: 'perseverance — continue a responsible task after disappointment while reviewing what needs to change',
  },
];

const makeSection = (plan: ChapterPlan, index: number): TeacherGuideSection => {
  const pageTitle = storyPages[index]?.title ?? `Story ${index + 1}`;
  return {
    chapter: `Chapter ${index + 1}: ${pageTitle}`,
    timing: index < 4 ? '45–50 minutes' : '50–55 minutes',
    objectives: [
      `Analyse the chapter focus: ${plan.focus}.`,
      `Support interpretation with current-page evidence, especially: ${plan.evidence}.`,
      `Use B2 contextual language and discourse patterns from the chapter: ${plan.languageSupport}.`,
      `Turn the chapter value into an observable action: ${plan.valueAction}.`,
    ],
    pedagogy: 'Use a TYMM-compatible B2 route: listen/read for meaning → distinguish source, evidence and interpretation → complete the existing page exercise → notice useful discourse/grammar/vocabulary from the chapter → produce a connected spoken or written response. At B2, source qualification, stance, discourse relationships and evidence quality matter as much as sentence-level grammar.',
    priorKnowledge: ['Recall the previous chapter’s key claim or turning point.', 'Distinguish direct quotation, narrator statement, source attribution and interpretation.'],
    anticipatedMisconceptions: [plan.misconception],
    grammarFocus: `Contextual B2 language support from the current chapter: ${plan.languageSupport}.`,
    pronunciationFocus: 'Use current Word Notes/proper names. Rehearse one evidence sentence and one source/stance sentence with clear stress, pausing and intonation.',
    beforeReading: [`Prediction: What evidence or source language might help us ${plan.focus}?`, 'Preview only vocabulary needed for comprehension and discourse analysis.'],
    duringReading: [`Locate the strongest evidence: ${plan.evidence}.`, 'Mark source signals, hedges, cause/result, contrast, concession, time links, reported speech or stance language that shapes meaning.'],
    afterReading: [
      `Discuss: ${plan.discussion}`,
      'Complete the exercise that actually appears on the current chapter page and repair wrong answers from the text.',
      `Guide a short noticing stage with: ${plan.languageSupport}.`,
      'Finish with a connected B2 response that uses evidence and one or two chapter-derived discourse patterns naturally.',
    ],
    lessonPlan: '0–6: activate context and source awareness. 6–18: listen/read for gist and structure. 18–30: close reading, evidence and stance. 30–35: current page exercise and repair. 35–43: contextual language/discourse noticing. 43–52: pair or individual B2 production. Final minutes: evidence-based exit ticket.',
    discussionPoints: [plan.discussion, `Which exact evidence supports this reading: ${plan.evidence}?`, 'What is directly stated, quoted, attributed, probable or interpreted?'],
    interactiveTips: ['Use only the audio, vocabulary/Word Notes, hotspots and exercise that actually exist on the current page.', 'Do not direct learners to a separate Moses B2 Language Focus because no student-facing Language Focus currently exists.', 'Use hotspots to return to evidence; do not use them as permission to add unsupported historical or religious detail.'],
    differentiation: {
      strugglingLearners: `Provide an evidence frame plus one stance/linking choice from: ${plan.languageSupport}. Reduce output length but keep the same evidence target.`,
      fastFinishers: `Write 130–170 words answering “${plan.discussion}” with at least two textual details, one explicit source/stance distinction where relevant and cohesive B2 linking.`,
    },
    formativeAssessment: ['Accuracy of textual evidence', 'Source/stance distinction', 'B2 cohesion and discourse control', 'Appropriate contextual language', 'Successful repair of the existing page exercise'],
    expectedResponses: [`A sound response refers to: ${plan.evidence}.`, `It explains ${plan.focus} without strengthening uncertainty or adding unsupported claims.`, `The value response describes the observable action: ${plan.valueAction}.`],
    transferTask: `Transfer the chapter method to a new context: state a claim, qualify its evidence appropriately, use one or two patterns from “${plan.languageSupport}”, and connect it to the action “${plan.valueAction}”.`,
    teacherReflection: 'Did learners distinguish source, evidence and interpretation? Did language noticing support meaning and B2 communication rather than become an unrelated grammar lesson?',
  };
};

export const mosesB2TeacherGuide: TeacherGuideSection[] = plans.map(makeSection);

export const mosesB2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Teacher Guide — Prophet Moses (B2)',
  subtitle: 'TYMM-aligned guidance for the current 24-chapter Moses B2 student text',
  level: 'B2',
  estimatedDuration: '24 lessons, about 45–55 minutes per story chapter',
  targetAudience: 'Upper-secondary and other CEFR B2 English learners using the current Moses B2 story.',
  targetLearners: 'Learners able to follow extended narrative/expository texts, compare claims, qualify evidence, explain relationships and produce connected analytical speaking and writing.',
  purpose: 'Align teaching with the current 24 story pages, their vocabulary, hotspots and exercises while developing TYMM receptive/productive skills, source-aware B2 discourse and values as observable action.',
  approachDesc: `Use TYMM receptively first (YDAB1 listening/viewing and YDAB2 reading), then treat grammar, vocabulary and pronunciation as integrated supporting skills before connected YDAB3 speaking and YDAB4 writing. For B2, use semi-inductive/inductive noticing of source language, stance and discourse relationships from the authentic chapter context rather than detached drills. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Gist/detail comprehension, source and evidence labelling, current page exercises, discourse-language noticing, B2 pair discussion, 130–170-word analytical responses, exit tickets and existing final review tasks.',
  assessmentOverview: {
    formative: ['Gist and evidence checks', 'Source/stance classification', 'Current page exercise with text-based repair', 'Contextual language/discourse noticing', 'Connected B2 speaking/writing and feedback'],
    summative: ['Existing Moses B2 final review tasks plus a supported whole-story synthesis that preserves source certainty and evidence boundaries'],
  },
  readingFramework: {
    before: 'Activate only essential context and predict the kind of evidence/source language the chapter may contain.',
    during: 'Read/listen for structure, then distinguish quotation, attribution, narrator claim, hedge, interpretation, cause/result, contrast and turning point.',
    after: 'Complete the real page exercise, notice useful discourse language in context and produce a connected B2 response that cites or paraphrases evidence accurately.',
  },
  vocabularyApproach: {
    selection: 'Prioritise the vocabulary supplied on the current page and items needed for evidence/source discussion.',
    method: 'Infer meaning from local context before direct explanation when practical.',
    recycling: 'Reuse target items in evidence discussion, stance work, synthesis and exit tickets.',
  },
  grammarApproach: 'No separate student-facing Moses B2 Language Focus currently exists. Use only grammar and discourse relationships genuinely present in each current chapter. Treat them as TYMM supporting skills integrated with comprehension and production, and do not invent or reference a missing resource.',
  grammarSequence: plans.map((plan, index) => `Ch${index + 1}: ${plan.languageSupport}`),
  skillsFocus: {
    reading: 'TYMM YDAB2: analyse extended text structure, evidence, source attribution, stance, cause/result, contrast, concession and interpretation.',
    listening: 'TYMM YDAB1: listen for global structure first, then identify targeted evidence, quoted voice, stance and key vocabulary.',
    speaking: 'TYMM YDAB3: explain, qualify, compare, justify and synthesise in connected B2 interaction.',
    writing: 'TYMM YDAB4: produce coherent analytical paragraphs with accurate evidence boundaries, linking and revision after feedback.',
  },
  valuesFocus: [
    'D1 Justice — examine oppression, freedom, fairness and the effects of power on human dignity.',
    'D6 Honesty — preserve the difference between fact, quotation, source report, probability and interpretation.',
    'D10 Humility — revise a view when evidence changes and avoid false claims of personal power.',
    'D12 Patience — sustain responsible effort through long preparation, danger and disappointment.',
    'D14 Respect — discuss sacred narratives, historical claims and disagreement without ridicule.',
    'D16 Responsibility — connect decisions, leadership and correction of mistakes with observable action.',
    'D20 Helpfulness — respond to genuine need in ways that preserve dignity.',
    `Use a value only where the current chapter provides concrete support; see ${TYMM_VALUES}.`,
  ],
  languageFocus: [
    'Source status: there is currently no separate student-facing Language Focus file in src/data/moses/b2/en.',
    'Teacher language work must therefore come from the grammar, vocabulary, stance and discourse patterns actually present in each current chapter.',
    'Do not ask learners to open or complete a Language Focus resource that does not exist.',
    'If a student-facing Language Focus is added later, re-audit all 24 chapters and bind these targets directly to that resource.',
  ],
  differentiationNotes: 'Reduce text/output load while preserving source/evidence reasoning for learners who need support. Extend stronger B2 learners through synthesis, qualification, paragraph cohesion and competing interpretations, not unrelated C1 grammar or extra historical claims.',
};