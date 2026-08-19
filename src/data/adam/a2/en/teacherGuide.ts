import type { TeacherGuideMetadata, TeacherGuideSection } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_CONCEPTUAL = 'https://tymm.meb.gov.tr/beceriler/kavramsal-beceriler';

export const adamA2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Teacher Guide — Prophet Adam (A2)',
  subtitle: 'Manual chapter-by-chapter teaching guide',
  level: 'A2',
  estimatedDuration: '10 lessons, about 30–35 minutes per chapter',
  targetAudience: 'Lower-secondary EFL learners working around CEFR A2.',
  targetLearners: 'Learners who can understand short supported narratives and produce short spoken or written responses with scaffolding.',
  purpose: 'Develop English through story comprehension, listening, vocabulary in context, short production, reflection, and values-based transfer without adding facts outside the story.',
  approachDesc: 'Teach meaning first. Use the story and audio as the evidence source, then move to short language use, feedback, retrieval and transfer. TYMM language skills and values are made visible through actual learner actions rather than decorative labels.',
  assessmentEvidence: 'Quick Challenges, text-evidence questions, Knowledge Check, Vocabulary Challenge, four-part Retrieval Review, Final Challenge, exit tickets, short oral/written responses and teacher observation.',
  assessmentOverview: {
    formative: ['Chapter Quick Challenge', 'Teacher questioning', 'Text-evidence checks', 'Exit ticket', 'Short speaking/writing transfer'],
    summative: ['Knowledge Check', 'Retrieval Review', 'Vocabulary Challenge', 'Final Challenge']
  },
  readingFramework: {
    before: 'Activate only the prerequisite needed for the chapter and make one purposeful prediction from the title or image.',
    during: 'Read/listen first for overall meaning; reread with one precise evidence, sequence, comparison or cause-result purpose.',
    after: 'Use one short A2 response, value connection or transfer task, then check whether the learner can support the response from the chapter.'
  },
  skillsFocus: {
    reading: 'TYMM foreign-language reading/meaning-making: locate explicit information, follow sequence, compare clear details, and connect simple causes/results.',
    listening: 'Use narration to follow the same meaning, sequence and key vocabulary available in the written chapter.',
    speaking: 'Give one or two clear A2 sentences, compare simple ideas, give advice, or explain a reason using chapter-supported meaning.',
    writing: 'Write short supported sentences using sequence, comparison, because/so, should, or other chapter language where appropriate.'
  },
  valuesFocus: ['responsibility', 'respect', 'humility', 'learning from mistakes', 'care for nature', 'helping the weak', 'honesty', 'gratitude', 'generosity', 'self-control', 'kindness', 'non-retaliation'],
  languageFocus: ['main idea and evidence', 'sequence', 'cause and result', 'comparison', 'vocabulary in context', 'Simple Past', 'because/but/so', 'first conditional', 'will/won’t', 'should for advice'],
  differentiationNotes: 'Reduce language load without reducing the learning goal. Use sentence frames, one evidence sentence at a time, oral rehearsal before writing, and extension through connection rather than extra trivia.',
  sensitiveNotes: {
    title: 'Content safeguards',
    notes: ['Keep religious and historical claims within the story text used by the project.', 'Handle the Habil–Qabil violence calmly and without graphic elaboration.', 'Do not turn personal reflection into a new religious claim.']
  }
};

export const adamA2TeacherGuide: TeacherGuideSection[] = [
  {
    chapter: 'Chapter 1 — Opening & The Creation', timing: '30–35 minutes',
    objectives: ['Identify Adam’s creation from soil and the human responsibility on Earth.', 'Follow the opening sequence and explain the chapter’s simple soil–skin-colour connection.'],
    pedagogy: 'Build a clear creation → responsibility → angel reaction → explanation chain. TYMM reading is direct through locating and connecting evidence; short speaking/writing is supporting. Values are responsibility for life on Earth and respect for human diversity as presented by the chapter.',
    grammarFocus: 'Simple Past for completed events; notice be going to for the future role announced in the chapter.',
    pronunciationFocus: 'messenger, soil, curiosity, created, Earth',
    lessonPlan: '1. Use the title/image for one prediction. 2. Read/listen for the main event. 3. Reread and mark the creation material, human role, angels’ reaction and the soil explanation. 4. Complete the Quick Challenge. 5. Learners give one sentence about creation and one about responsibility. 6. Exit: explain one cause-result link.',
    discussionPoints: ['What responsibility does the chapter give humans on Earth?', 'How does the chapter connect soil from different places with human diversity?'],
    differentiation: { fastFinishers: 'Write a four-sentence mini-summary using first, then, after that, because.', strugglingLearners: 'Use frames: “Adam was created from ___.” “Humans are responsible for ___.”' },
    interactiveTips: ['Use hotspots only to return to the supporting sentence.', 'TYMM conceptual support: sequence and cause-result.', 'Values link: responsibility and respect for difference.'],
    assessmentTools: { rubric: ['Accurate story detail', 'Finds supporting evidence', 'Clear A2 sentence'], exitTicket: ['Name one human responsibility from the chapter.'] },
    extraResources: { links: [{ label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN }, { label: 'TYMM Conceptual Skills', url: TYMM_CONCEPTUAL }] }
  },
  {
    chapter: 'Chapter 2 — Knowledge and Respect', timing: '30–35 minutes',
    objectives: ['Explain how knowledge and thinking support Adam’s learning.', 'Compare the angels’ respectful response with Iblis’s dismissive response.'],
    pedagogy: 'Use a two-column comparison: knowledge/respect versus pride/dismissal. TYMM reading and comparison skills are activated through text evidence; speaking uses but/because. Values: knowledge, respect, humility and avoiding contempt for others.',
    grammarFocus: 'because for reasons; simple comparative language where the text supports it.',
    pronunciationFocus: 'knowledge, think, understand, respect, wiser',
    lessonPlan: '1. Recall one fact from Chapter 1. 2. Read/listen for what Adam received. 3. Mark the angels’ reaction and Iblis’s reaction in two columns. 4. Complete the Quick Challenge. 5. Pair speaking: “The angels…, but Iblis…”. 6. Exit: explain why knowledge matters in the chapter.',
    discussionPoints: ['What helped Adam learn and understand?', 'What is the clearest difference between the angels and Iblis?'],
    differentiation: { fastFinishers: 'Write two contrast sentences using but and because.', strugglingLearners: 'Provide a two-column organizer: Angels / Iblis, with one sentence frame for each.' },
    interactiveTips: ['Ask for the exact sentence before accepting a comparison.', 'Values link: respect is shown through action, not only named.', 'TYMM conceptual support: comparison.'],
    assessmentTools: { rubric: ['Identifies knowledge', 'Compares two reactions', 'Uses but/because clearly'], exitTicket: ['Complete: “The angels respected Adam, but Iblis ___.”'] }
  },
  {
    chapter: 'Chapter 3 — Pride, Origin and Real Value', timing: '30–35 minutes',
    objectives: ['Explain why Iblis claimed to be better.', 'Distinguish Iblis’s origin-based idea of value from the chapter’s idea of useful knowledge and goodness.'],
    pedagogy: 'Keep the distinction explicit: the chapter reports Iblis’s claim but does not endorse it. Learners compare fire/soil, identify arrogance, then infer the stated value lesson. TYMM comparison and inference are supporting conceptual skills. Values: humility, equality of human worth, and useful knowledge directed toward good action.',
    grammarFocus: 'comparatives such as better/more valuable; because for reasons.',
    pronunciationFocus: 'arrogant, valuable, fire, clay, useful',
    lessonPlan: '1. Quick recall: Adam—soil. 2. Read Iblis’s comparison. 3. Highlight the sentence that names arrogance. 4. Highlight the sentence about real value/useful knowledge. 5. Quick Challenge. 6. Learners write “Iblis thought…, but the chapter says…”. 7. Exit with the missing-word idea valuable.',
    discussionPoints: ['Why is Iblis’s comparison described as arrogant?', 'What does the chapter present as more important than origin?'],
    differentiation: { fastFinishers: 'Write a three-sentence contrast between origin, arrogance and useful knowledge.', strugglingLearners: 'Give two cards: “Iblis thought…” / “The chapter says…”, then sort the evidence.' },
    interactiveTips: ['Do not let learners confuse reported belief with the chapter’s message.', 'Values link: humility and refusing superiority based on origin.', 'TYMM conceptual support: comparison and inference.'],
    assessmentTools: { rubric: ['Separates claim from message', 'Uses chapter evidence', 'Explains value simply'], exitTicket: ['Finish: “Fire or soil does not make a person ___.”'] }
  },
  {
    chapter: 'Chapter 4 — Adam, Eve and the Warnings', timing: '30–35 minutes',
    objectives: ['Connect Adam’s loneliness with the creation of Eve.', 'Distinguish the warning about Iblis from the warning about the tree.'],
    pedagogy: 'Prevent a common comprehension error by treating the two warnings separately. Use cause-result for loneliness → companionship, then a two-warning organizer. Values: companionship, attentiveness to guidance and careful decision-making.',
    grammarFocus: 'warning/command language; understand told…not to from context without turning it into an advanced grammar lesson.',
    pronunciationFocus: 'lonely, warning, Paradise, careful, mercy',
    lessonPlan: '1. Predict from the title. 2. Read/listen and identify why Eve is introduced. 3. Make two boxes: warning about Iblis / warning about the tree. 4. Quick Challenge. 5. Short writing with because/so plus one warning sentence. 6. Exit: name the two warnings without mixing them.',
    discussionPoints: ['Why was Eve given to Adam in the chapter?', 'How are the two warnings different?'],
    differentiation: { fastFinishers: 'Explain both warnings in three connected sentences.', strugglingLearners: 'Use two labelled boxes and copy only the key words from each warning before speaking.' },
    interactiveTips: ['Keep the two warnings visually separate.', 'Values link: careful choices and listening to guidance.', 'TYMM conceptual support: cause-result and classification.'],
    assessmentTools: { rubric: ['Identifies cause-result', 'Keeps warnings separate', 'Uses clear A2 language'], exitTicket: ['Write one warning from the chapter.'] }
  },
  {
    chapter: 'Chapter 5 — The Mistake, Regret and Repair', timing: '30–35 minutes',
    objectives: ['Identify Iblis’s lie and how the mistake happened.', 'Compare Adam and Eve’s response to being wrong with Iblis’s response.'],
    pedagogy: 'Organise the chapter as lie → forgotten warning → mistake → regret → forgiveness → decision not to repeat. The value focus is not “never make mistakes” but recognise, repair and learn. TYMM reading, sequence, speaking and writing are naturally combined.',
    grammarFocus: 'First Conditional in Iblis’s claim; Simple Past for the events and response.',
    pronunciationFocus: 'mistake, regret, forgive, purpose, repeat',
    lessonPlan: '1. Listen for Iblis’s promise. 2. Build the event chain. 3. Mark the sentence saying the mistake was not on purpose. 4. Quick Challenge. 5. Compare responses to being wrong. 6. Pair task: give one healthy step after a mistake using story evidence. 7. Exit: one sentence beginning “They learned…”.',
    discussionPoints: ['What made Iblis’s statement a lie?', 'What did Adam and Eve do after they understood the mistake?'],
    differentiation: { fastFinishers: 'Write the six-stage sequence with short connectors.', strugglingLearners: 'Give sequence cards and frames: “First… Then… After that…”' },
    interactiveTips: ['Treat feedback as repair: find evidence, correct the idea, retry.', 'Values link: honesty with oneself, repentance, learning from mistakes.', 'TYMM conceptual support: sequencing and cause-result.'],
    assessmentTools: { rubric: ['Follows sequence', 'Identifies repair actions', 'Uses first/then/because accurately'], exitTicket: ['Name two things Adam and Eve did after the mistake.'] }
  },
  {
    chapter: 'Chapter 6 — Life and Responsibility on Earth', timing: '30–35 minutes',
    objectives: ['Connect forgiveness with the beginning of life on Earth.', 'Identify responsibilities such as protecting nature and helping the weak.'],
    pedagogy: 'Avoid reducing the move to Earth to punishment alone; the chapter also states forgiveness, preparation and responsibility. Use a responsibility web that moves from text to realistic daily examples. TYMM language production supports values-based transfer.',
    grammarFocus: 'Simple Past and sequence markers; notice planned future actions in context.',
    pronunciationFocus: 'crops, protect, nature, weak, responsibility',
    lessonPlan: '1. Tap & Reveal from memory. 2. Read/listen for what happened after forgiveness. 3. Mark the responsibility list. 4. Sort responsibilities into care for Earth / care for people. 5. Give one realistic example for two responsibilities. 6. Exit: one “We can…” sentence.',
    discussionPoints: ['What responsibilities are named in the chapter?', 'How can one of these responsibilities appear in a student’s daily life?'],
    differentiation: { fastFinishers: 'Write four responsibility-example pairs.', strugglingLearners: 'Choose from two actions at a time and use “We can ___ to help/protect ___.”' },
    interactiveTips: ['This chapter gives a strong direct values connection: responsibility, environment and helping vulnerable people.', 'Keep transfer realistic and age-appropriate.', 'TYMM conceptual support: classification and application.'],
    assessmentTools: { rubric: ['Finds stated responsibilities', 'Gives realistic transfer', 'Keeps story fact and personal example separate'], exitTicket: ['Complete: “On Earth, people should help ___.”'] }
  },
  {
    chapter: 'Chapter 7 — The First Messenger and Guidance', timing: '30–35 minutes',
    objectives: ['Identify Adam’s Messenger role and the main teachings listed in the chapter.', 'Explain how Adam and Eve guided their children through good behaviour, gratitude and warning.'],
    pedagogy: 'Move beyond memorising the title “first Messenger”. Learners connect the role to actual guidance: honesty, doing good, stopping bad, remembering Allah, behaving well and gratitude. Values are explicit and can be expressed through simple A2 advice.',
    grammarFocus: 'should + base verb for simple advice in transfer; notice teach + person + to in the chapter.',
    pronunciationFocus: 'honest, behave, remember, enemy, thankful',
    lessonPlan: '1. Read/listen for the teaching list. 2. Quick Challenge on honest. 3. Sort teachings into personal behaviour / treatment of others / relationship with Allah. 4. Pair speaking: “Adam taught people to…”. 5. Write one should sentence for a school context. 6. Exit: name one teaching and one action that shows it.',
    discussionPoints: ['What did Adam teach people?', 'Which teaching is easiest to show through a real action?'],
    differentiation: { fastFinishers: 'Write three advice sentences linked to three different teachings.', strugglingLearners: 'Use frames: “Adam taught people to ___.” “Students should ___.”' },
    interactiveTips: ['Values link: honesty, good action, gratitude and responsible guidance.', 'Do not add new religious obligations beyond the story.', 'TYMM speaking/writing support: short advice and explanation.'],
    assessmentTools: { rubric: ['Names an accurate teaching', 'Connects value to action', 'Uses a clear A2 sentence'], exitTicket: ['Write one “Students should…” sentence connected to a story teaching.'] }
  },
  {
    chapter: 'Chapter 8 — Habil, Qabil and Giving One’s Best', timing: '30–35 minutes',
    objectives: ['Compare Habil and Qabil through work and character.', 'Use the offerings to explain the chapter’s stated lesson about giving the best and most loved.'],
    pedagogy: 'Compare the brothers on the same dimensions so learners do not infer that one job is inherently better. The value message comes from attitude and quality of giving. TYMM comparison and evidence-based inference are central.',
    grammarFocus: 'comparative/superlative language such as better, best and healthiest; but for contrast.',
    pronunciationFocus: 'shepherd, farmer, offering, healthiest, jealousy',
    lessonPlan: '1. Two-column character/work comparison. 2. Quick Challenge on the offerings. 3. Mark the final “real goodness” sentence. 4. Discuss why the lesson is about giving one’s best, not about occupation. 5. Short writing: one comparison + one lesson sentence. 6. Exit: give an age-appropriate example of doing one’s best.',
    discussionPoints: ['What differences between the brothers are actually stated?', 'What detail proves the lesson is about effort and sincerity rather than job type?'],
    differentiation: { fastFinishers: 'Write two comparison sentences and one evidence-based lesson sentence.', strugglingLearners: 'Use a Habil/Qabil table with headings: work, character, offering.' },
    interactiveTips: ['Values link: generosity, sincerity, effort and avoiding jealousy.', 'Monitor the misconception that occupation determines moral value.', 'TYMM conceptual support: comparison and inference.'],
    assessmentTools: { rubric: ['Fair comparison', 'Uses offering evidence', 'Explains lesson without overgeneralising'], exitTicket: ['Complete: “Real goodness means ___.”'] }
  },
  {
    chapter: 'Chapter 9 — Anger, Non-Retaliation and the Crow', timing: '30–35 minutes',
    objectives: ['Identify Habil’s peaceful response to Qabil’s threat.', 'Follow the consequence sequence and explain what the crow showed Qabil.'],
    pedagogy: 'Teach the chapter calmly and non-graphically. Focus on language of threat/refusal, consequences of uncontrolled anger, Habil’s non-retaliation and learning from the crow. Values: self-control, peace, non-retaliation and learning from consequences.',
    grammarFocus: 'will/won’t for intention and refusal; Simple Past and sequence markers for events.',
    pronunciationFocus: 'harm, anger, panic, crow, digging',
    lessonPlan: '1. Set a calm content frame. 2. Read/listen and contrast “I will…” with “I won’t…”. 3. Quick Challenge on Habil’s response. 4. Retell the event sequence without graphic detail. 5. Explain what Qabil learned from the crow. 6. Transfer: one safe action for handling anger. 7. Exit: finish “Habil chose not to…”.',
    discussionPoints: ['What did Habil refuse to do?', 'What does the chapter show about uncontrolled anger and its consequences?'],
    differentiation: { fastFinishers: 'Retell the chapter in four factual, non-graphic steps and add one lesson sentence.', strugglingLearners: 'Use a four-card sequence and the frame “He said… / Then…”.' },
    interactiveTips: ['Never elaborate violence beyond the story.', 'Values link: peaceful response and anger control.', 'TYMM speaking support: factual retelling and simple advice.'],
    assessmentTools: { rubric: ['Accurate calm retelling', 'Understands refusal', 'Connects anger to consequence'], exitTicket: ['Name one peaceful action a person can take when angry.'] }
  },
  {
    chapter: 'Chapter 10 — Final Lessons and Continuing Message', timing: '30–35 minutes',
    objectives: ['State the explicit lessons about jealousy, anger and kindness.', 'Explain how Adam’s message continued through his children and grandchildren.'],
    pedagogy: 'Use the ending to synthesise rather than collect trivia. Learners connect earlier events to the final behavioural lessons and express them as simple advice. TYMM reading, speaking and writing are integrated through synthesis and transfer.',
    grammarFocus: 'should + base verb for advice: stay away, control, be kind.',
    pronunciationFocus: 'jealousy, worldwide, well-behaved, message, kind',
    lessonPlan: '1. Quick Challenge on how the message continued. 2. Read/listen and underline each explicit advice statement. 3. Connect one final lesson to an earlier chapter event. 4. Write three short should sentences. 5. Prepare for whole-book review by naming one key lesson from three different chapters. 6. Exit: one lesson + one supporting event.',
    discussionPoints: ['Why does the story end with advice rather than another event?', 'Which final lesson connects most clearly to an earlier chapter?'],
    differentiation: { fastFinishers: 'Write a four-sentence “The story teaches…” paragraph using four different chapters.', strugglingLearners: 'Choose from value cards: jealousy, anger, kindness, honesty, then use one sentence frame.' },
    interactiveTips: ['Values link: self-control, kindness and honest living.', 'Require one supporting story event for each larger lesson.', 'TYMM conceptual support: synthesis and transfer.'],
    assessmentTools: { rubric: ['Identifies explicit lesson', 'Connects lesson to evidence', 'Uses should accurately'], exitTicket: ['Write one final lesson and the chapter event that supports it.'] }
  }
];
