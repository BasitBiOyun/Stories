import type { TeacherGuideMetadata, TeacherGuideSection } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

export const mosesA2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Teacher Guide — Prophet Moses (A2)',
  subtitle: 'TYMM-aligned, chapter-by-chapter guide connected to the active Language Focus',
  level: 'A2',
  estimatedDuration: '16 lessons, about 40–45 minutes per story chapter',
  targetAudience: 'Lower-secondary learners studying English at approximately CEFR A2.',
  targetLearners: 'Learners who can follow short supported narratives, locate direct evidence and produce short spoken or written responses with scaffolding.',
  purpose: 'Develop English through source-faithful story comprehension, listening, vocabulary in context, chapter-specific Language Focus, short production, retrieval and values shown through observable action.',
  approachDesc: `Follow a TYMM route in every chapter: establish meaning through listening/viewing and reading (YDAB1–YDAB2), verify comprehension with direct evidence and the Quick Challenge, then use the active chapter Language Focus to notice and practise language genuinely present in that chapter. Finish by reusing selected patterns in short speaking or writing (YDAB3–YDAB4). Language Focus follows comprehension and is not a detached grammar lesson. ${TYMM_FOREIGN}`,
  assessmentEvidence: 'Chapter Quick Challenges, evidence checks, Language Focus performance, oral retells, short written responses, exit tickets, Knowledge Check, Vocabulary Challenge, Language Review and Final Challenge.',
  assessmentOverview: {
    formative: ['Chapter Quick Challenge', 'Text-evidence checks', 'Language Focus guided practice', 'Short speaking/writing transfer', 'Exit ticket and repair after an incorrect answer', 'Knowledge Check', 'Vocabulary Challenge', 'Language Review'],
    summative: ['Final Challenge']
  },
  readingFramework: {
    before: 'Activate only the background needed for the chapter and make one purposeful prediction from the title or image.',
    during: 'Listen/read first for overall meaning, then return to the text for sequence, direct evidence, cause-result, comparison or a simple inference. Do not stop to teach every word.',
    after: 'Complete the Quick Challenge, use the chapter Language Focus, then produce one short A2 response that reuses chapter language and remains traceable to the story.'
  },
  vocabularyApproach: {
    selection: 'Prioritise the chapter Word Notes and only the extra words needed to access the task.',
    method: 'Infer meaning from context, image, hotspot or a short example before giving a definition.',
    recycling: 'Reuse target words in Language Focus production, oral rehearsal, exit tickets and later review.'
  },
  grammarApproach: 'Teach language through the existing chapter-specific Language Focus. Locate the form in the story, identify its communicative job, complete the guided activity and transfer one or two patterns to a new short A2 context. Do not replace the chapter Language Focus with a generic grammar syllabus.',
  grammarSequence: [
    'Ch1: was/were; believed/thought; did not + verb; because of',
    'Ch2: Simple Past sequence; will for prediction; imperatives; when + past',
    'Ch3: could/could not; imperatives; will for reassurance; tell + person + to; comparatives',
    'Ch4: past actions/place; different from; be + adjective; will for decision/expectation; imperative',
    'Ch5: take care of/look after; grew up/became; always; because; background action in progress',
    'Ch6: to + verb for purpose; accidentally; so + adjective; because; present continuous; be going to/will warnings; imperative',
    'Ch7: past journey sequence; after; arrive at; so; look for; there was/were; was/were + -ing; place language',
    'Ch8: Why + negative present continuous; cannot; there are no ... to ...; so; wait for; when/early',
    'Ch9: could not; needed; because; want to; offer/accept; imperative; began/later/after + time/decided to',
    'Ch10: there was; was getting + adjective; imperatives; will; to + verb for purpose; turn into',
    'Ch11: imperatives; became/made + person + complement; did not; take + person + with; destination + purpose',
    'Ch12: tell + person + about; thought; decided to; direct speech; sequence/then; turn into; purpose; can',
    'Ch13: invite + person + to; come with; past continuous; put down; imperative; turn into; adverbs; still; because; continue to',
    'Ch14: imperatives; get ready for; must; will; could not; adverbs of manner; when + past',
    'Ch15: in front of/behind/between; imperative; will for reassurance; became; could; destination/location; adverbs',
    'Ch16: position/time with when/in the end; say to; imperative; tell + object + to; general lesson frames; no one can; only'
  ],
  skillsFocus: {
    reading: 'TYMM YDAB2: locate direct evidence, follow sequence, compare nearby information, understand simple cause-result and distinguish a speaker’s claim from the narrator’s account.',
    listening: 'TYMM YDAB1: listen for gist first, then replay a targeted section for evidence, sequence, action verbs or target language.',
    speaking: 'TYMM YDAB3: retell, compare, explain a reason, give reassurance or advice, and complete short Language Focus transfers after oral rehearsal.',
    writing: 'TYMM YDAB4: write short connected A2 sentences using chapter-derived language and revise for meaning and accuracy.'
  },
  valuesFocus: [
    'D1 Justice — reject harmful or unfair use of power and identify fair alternatives',
    'D9 Compassion — notice suffering and respond without harm',
    'D12 Patience — remain measured in fear, difficulty and anger',
    'D16 Responsibility — respond to mistakes, duties and difficult choices through accountable action',
    'D20 Helpfulness — notice a real need and provide useful help',
    'D6 Honesty — distinguish claim, evidence and what the story actually supports',
    'D10 Humility — remain open to correction when evidence challenges a belief',
    'D11 Freedom — respect that people are not possessions and should not be oppressed',
    'D14 Respect — protect human dignity and discuss sacred material carefully'
  ],
  languageFocus: [
    'All 16 story chapters have active Language Focus connected to the preview book.',
    'Use Language Focus only after learners understand the chapter and complete the main comprehension check.',
    'Return to the exact story sentence whenever meaning is unclear; do not invent a separate Language Focus source.',
    'Finish with transfer: learners reuse selected chapter patterns in a new, short and safe A2 context.'
  ],
  differentiationNotes: 'Reduce language load without lowering the evidence or communication goal. Use one evidence sentence at a time, sentence frames, audio replay and selected Language Focus items for support. Extend through fuller explanation or transfer, never unsupported historical or religious expansion.',
  sensitiveNotes: {
    title: 'Content safeguards',
    notes: [
      'Chapter 2 includes the killing of baby boys: use calm, age-appropriate language and focus on injustice, cause and consequence without graphic elaboration.',
      'Chapter 6 includes an accidental death: preserve the source distinction that the result was accidental and focus on regret, responsibility and next action.',
      'Chapter 10 is a sacred scene: do not speculate about or visually represent Allah beyond what the source text says.',
      'Chapter 12 distinguishes the story’s description of signs/miracles from Pharaoh’s claim that they were magic; keep speaker and claim clear.',
      'Chapter 16 includes drowning: focus on sequence, oppression, freedom, dignity and the explicit lesson rather than graphic detail.'
    ]
  },
  valuesEducation: {
    title: 'TYMM Values in Action',
    description: 'Name a value only after learners identify a concrete story action or choice that supports it.',
    items: [
      { label: 'D1 Justice', value: 'Ask what fair action could replace an abusive use of power.' },
      { label: 'D9 Compassion / D20 Helpfulness', value: 'Connect care to useful action: protecting, helping, supporting or noticing a need.' },
      { label: 'D16 Responsibility', value: 'After a mistake, identify acknowledgement, regret, repair or a safer next action.' },
      { label: 'D6 Honesty / D10 Humility', value: 'Separate claims from evidence and accept correction when evidence changes the situation.' },
      { label: 'D11 Freedom / D14 Respect', value: 'Connect the ending to human dignity and the rejection of treating people as possessions.' }
    ],
    questions: ['Which exact story action supports this value?', 'What age-appropriate action could show the same value at school or home?', 'Which part is story evidence and which part is your own application?']
  }
};

export const mosesA2TeacherGuide: TeacherGuideSection[] = [
  {
    chapter: 'Chapter 1 — The Cruel King', timing: '40 minutes',
    objectives: ['Identify Egypt, Pharaoh and the Children of Israel.', 'Explain the fear → cruel treatment relationship with direct evidence.', 'Use Chapter 1 Language Focus to describe people, report beliefs and express a reason.'],
    pedagogy: 'Read for setting, cause and D1 Justice. Establish what the chapter says before moving to values or language analysis.',
    priorKnowledge: ['Basic past descriptions and simple reason language.'], anticipatedMisconceptions: ['Confusing Pharaoh’s belief about himself with the narrator’s position.', 'Naming injustice without citing an action from the chapter.'],
    grammarFocus: 'was/were for identity, role and description; believed/thought; did not + base verb; because of + noun for cause.',
    pronunciationFocus: 'Use the chapter audio to model stress in Pharaoh, Israel and cruel; chunk “Because of his fear | he was rude to the Children of Israel.”',
    beforeReading: ['Predict what “cruel ruler” may mean from the title/image.'], duringReading: ['Listen/read for who the groups are.', 'Locate Pharaoh’s fear and the actions that show unfair treatment.'],
    afterReading: ['Complete Quick Challenge 1 with evidence.', 'Complete the core Chapter 1 Language Focus on past description, belief/negative meaning and cause.', 'Produce three or four short sentences contrasting two people/groups and giving one reason.'],
    lessonPlan: 'Predict → listen/read → evidence → Quick Challenge → Language Focus → short contrast → exit.', discussionPoints: ['Why was Pharaoh afraid?', 'Which actions show injustice?', 'What fair action could a powerful person take instead?'],
    interactiveTips: ['Use the Pharaoh and Children of Israel hotspots only to return to source evidence.', 'Replay the reason sentence before Language Focus.', 'Use the actual Quick Challenge and Chapter 1 Language Focus.'],
    differentiation: { fastFinishers: 'Write four connected sentences using was/were, believed/thought, did not and because of.', strugglingLearners: 'Use “Pharaoh was…”, “He thought…”, “They did not…”, “Because of…”.' },
    formativeAssessment: ['Locates fear and treatment evidence.', 'Uses at least two Chapter 1 patterns accurately.'], transferTask: 'Describe a safe everyday situation where power should be used fairly.', teacherReflection: 'Did learners separate belief, evidence and value judgement?'
  },
  {
    chapter: 'Chapter 2 — The King’s Dream', timing: '45 minutes',
    objectives: ['Sequence dream → explanation → order → soldiers’ action.', 'Distinguish a prediction from what later happens in the story.', 'Use Chapter 2 Language Focus for past sequence, future prediction, command and when + past.'],
    pedagogy: 'Handle the violence calmly. Focus on sequence, cause-result and D1 Justice/D9 Compassion rather than graphic detail.',
    priorKnowledge: ['Simple Past and first/then sequencing.'], anticipatedMisconceptions: ['Treating the magicians’ prediction as the narrator’s own statement.', 'Role-playing or elaborating the violence.'],
    grammarFocus: 'Simple Past action sequence; will + verb for prediction; imperative commands; when + past clause to connect events.',
    pronunciationFocus: 'Use the audio to model dream, magicians, soldiers and heartless; practise stress in “A boy WILL be born” and pause around the quoted command.',
    beforeReading: ['Set a calm reading rule: focus on decisions and consequences, not violent detail.'], duringReading: ['Mark the dream, explanation, order and later action separately.', 'Identify who speaks each prediction or command.'],
    afterReading: ['Complete Quick Challenge 2.', 'Use Chapter 2 Language Focus for past sequence, will, a safe imperative and when + past.', 'Transfer the structures to a harmless new situation rather than repeating Pharaoh’s order.'],
    lessonPlan: 'Sensitive frame → listen/read → sequence/speaker → Quick Challenge → Language Focus → safe transfer → exit.', discussionPoints: ['What did the king see?', 'What did the magicians say would happen?', 'What responsible action could replace a fear-based harmful decision?'],
    interactiveTips: ['Replay the dream explanation and later order as separate audio moments.', 'Use the Dream/Soldiers hotspots for evidence only.', 'Do not role-play violence.'],
    differentiation: { fastFinishers: 'Write three safe new sentences: one prediction, one instruction and one when + past result.', strugglingLearners: 'Use “will + verb”, one safe command and “When…, …”.' }, formativeAssessment: ['Correct sequence and speaker attribution.', 'Correct use of one future and one sequence pattern.'], transferTask: 'Give one safe example of responding responsibly to fear.', teacherReflection: 'Were prediction, command and narrator evidence kept distinct?'
  },
  {
    chapter: 'Chapter 3 — A Baby in a Basket', timing: '40 minutes',
    objectives: ['Identify the mother’s fear, the instructions and the action sequence.', 'Explain trust through observable action.', 'Use Chapter 3 Language Focus for could/could not, instructions, reassurance, reported instruction and comparison.'],
    pedagogy: 'Evidence first: problem → instruction → action → reassurance. Connect D12 Patience and family care to what the mother actually does.',
    priorKnowledge: ['Basic ability language and common action verbs.'], anticipatedMisconceptions: ['Confusing possible danger with inability.', 'Treating reassurance as an instruction.'],
    grammarFocus: 'could/could not; imperatives; will for reassurance; tell + person + to + verb; comparative adjective + than.',
    pronunciationFocus: 'Use the audio to model basket, protect, worried and Nile; practise contrast between could/couldn’t and chunk the three instructions before “Allah will protect him.”',
    beforeReading: ['Predict one difficulty the mother may face.'], duringReading: ['Locate the possible danger, the three instructions and the reassurance.', 'Track what the mother then does and what she tells her daughter to do.'],
    afterReading: ['Complete the existing chapter challenge.', 'Use Chapter 3 Language Focus for possibility/inability, instruction/reassurance and reported instruction/comparison.', 'Finish with a safe new situation using three target frames.'],
    lessonPlan: 'Predict → listen/read → instruction/action evidence → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['What was the possible danger?', 'What instructions were given?', 'Which action shows trust?'],
    interactiveTips: ['Use the Basket and River Nile hotspots.', 'Replay the instruction sequence before Language Focus.', 'Use the existing chapter challenge without revealing its answer early.'],
    differentiation: { fastFinishers: 'Create four safe sentences using could/could not, an imperative, will and told…to.', strugglingLearners: 'Use “She could…”, “Take…”, “will protect…”, “She told her daughter to…”.' }, formativeAssessment: ['Distinguishes possible danger from inability.', 'Rebuilds instruction → reassurance accurately.'], transferTask: 'Give one safe example of trust shown through a responsible action.', teacherReflection: 'Did learners connect trust with evidence rather than an abstract slogan?'
  },
  {
    chapter: 'Chapter 4 — The Queen’s Love', timing: '40 minutes',
    objectives: ['Describe Asiye and compare her with Pharaoh using evidence.', 'Identify her decision and the instruction to find a nurse.', 'Use Chapter 4 Language Focus for description, contrast, decision/expectation and command.'],
    pedagogy: 'Character comparison must be grounded in actions. Connect D9 Compassion/D15 Love to care, not only adjectives.',
    priorKnowledge: ['Simple adjectives and will.'], anticipatedMisconceptions: ['Describing Asiye as kind without citing an action.', 'Confusing a future decision with a prediction about another person.'],
    grammarFocus: 'Simple Past and place language; different from; be + adjective; will for decision/expectation; imperative.',
    pronunciationFocus: 'Use the audio to model Asiye, palace, nurse and kind-hearted; practise sentence stress in “She was DIFFERENT from her husband” and “I WILL take him…”.',
    beforeReading: ['Recall where the basket was travelling.'], duringReading: ['Find two actions that show Asiye’s care.', 'Mark the sentence comparing her with Pharaoh and the two uses of will.'],
    afterReading: ['Complete Quick Challenge 4.', 'Use Chapter 4 Language Focus for past/place, description/contrast and will/command.', 'Create a short safe “helpful plan” response.'],
    lessonPlan: 'Recall → listen/read → character evidence → Quick Challenge → Language Focus → helpful-plan transfer → exit.', discussionPoints: ['How was Asiye different?', 'Which actions show care?', 'What is the difference between her decision and the expectation about the nurse?'],
    interactiveTips: ['Use the Asiye and Palace hotspots for evidence.', 'Replay the decision and nurse sentences.', 'Use only the actual Quick Challenge and Language Focus.'],
    differentiation: { fastFinishers: 'Write four sentences using different from, two adjectives, will and one safe imperative.', strugglingLearners: 'Use “She was…”, “She was different from…”, “I will…”, “Find…”.' }, formativeAssessment: ['Gives evidence for character description.', 'Uses one contrast and one will pattern accurately.'], transferTask: 'Describe one useful action that shows care at school or home.', teacherReflection: 'Did learners move from action evidence to value language?'
  },
  {
    chapter: 'Chapter 5 — Back to His Mother', timing: '40 minutes',
    objectives: ['Explain Moses’s return to his mother and later growth.', 'Identify a repeated helpful quality and its reason.', 'Use Chapter 5 Language Focus for care, change over time, frequency/reason and background action.'],
    pedagogy: 'Use the chapter as a bridge from care to growth and the bazaar setting. Keep D20 Helpfulness connected to safe, concrete action.',
    priorKnowledge: ['Past actions and basic because clauses.'], anticipatedMisconceptions: ['Treating grew up and became as identical.', 'Missing the difference between a background action and the new event in the bazaar.'],
    grammarFocus: 'take care of/look after; grew up; became + noun/adjective phrase; always; because; was/were + -ing for background.',
    pronunciationFocus: 'Use the audio to model protector, safe, weak and bazaar; practise linking in “looked after baby Moses” and chunk “He was walking in the bazaar | when…”.',
    beforeReading: ['Recall who offered to find a nurse.'], duringReading: ['Track return → care → growth → repeated helpful quality → bazaar scene.', 'Find the because sentence and the action in progress.'],
    afterReading: ['Complete Quick Challenge 5.', 'Use Chapter 5 Language Focus for care/change, always/because and background/new-event language.', 'Produce three or four sentences about a helpful person in a new safe context.'],
    lessonPlan: 'Recall → listen/read → timeline/evidence → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['How did Moses return?', 'What changed as he grew up?', 'What repeated quality does the text describe?'],
    interactiveTips: ['Use the Mother/Bazaar hotspots to bridge the two parts of the chapter.', 'Replay the growth and bazaar sentences before Language Focus.'],
    differentiation: { fastFinishers: 'Use look after, became, always, because and one was/were + -ing sentence.', strugglingLearners: 'Use “His mother looked after…”, “He became…”, “He always… because…”.' }, formativeAssessment: ['Builds the change-over-time sequence.', 'Uses one care/change pattern and one reason/background pattern.'], transferTask: 'Describe one safe way of helping someone who needs support.', teacherReflection: 'Did helpfulness stay concrete and safe?'
  },
  {
    chapter: 'Chapter 6 — A Mistake in the Bazaar', timing: '45 minutes',
    objectives: ['Preserve the source distinction between purpose and accidental result.', 'Identify regret, forgiveness request and later warning.', 'Use Chapter 6 Language Focus for purpose, accident, feeling/reason and warning language.'],
    pedagogy: 'Handle the death briefly and calmly. Focus on D16 Responsibility, regret, cause and safer next action; do not role-play violence.',
    priorKnowledge: ['Basic because and future forms.'], anticipatedMisconceptions: ['Treating the death as planned.', 'Conflating what is happening now with predicted future danger.'],
    grammarFocus: 'to + verb for purpose; accidentally/not on purpose; so + adjective and because; present continuous; be going to/will for warning; imperative.',
    pronunciationFocus: 'Use the audio to model upset, forgive, accidentally and warning; practise stress in accidentally and contrast “are LOOKING” / “are GOING TO catch” / “WILL kill”.',
    beforeReading: ['Set a sensitive-reading rule focused on intention, consequence and response.'], duringReading: ['Separate why Moses ran from the accidental result.', 'Locate feeling/reason and distinguish current danger, expected danger and the urgent command.'],
    afterReading: ['Complete Quick Challenge 6.', 'Use Chapter 6 Language Focus for purpose/accident, feeling/reason and warning forms.', 'Transfer the warning structures to a harmless situation such as bad weather or a closed road.'],
    lessonPlan: 'Sensitive frame → listen/read → purpose/result evidence → Quick Challenge → Language Focus → safe warning transfer → exit.', discussionPoints: ['Why did Moses run?', 'What shows the result was accidental?', 'What responsible response follows a serious mistake in the chapter?'],
    interactiveTips: ['Use the Mistake and Warning hotspots separately.', 'Replay the warning paragraph to compare now/future language.', 'Do not ask learners to dramatise the violence.'],
    differentiation: { fastFinishers: 'Write four safe transfer sentences using to + verb, because, be going to/will and an imperative.', strugglingLearners: 'Use “He ran to…”, “It happened accidentally”, “because…”, “They are going to…”, “Run/Wait…”.' }, formativeAssessment: ['Correctly distinguishes purpose from accidental outcome.', 'Correctly separates current and future warning forms.'], transferTask: 'Describe a small safe mistake and one responsible next action.', teacherReflection: 'Was accidental intent preserved exactly as the source states?'
  },
  {
    chapter: 'Chapter 7 — Escape to Midian', timing: '40 minutes',
    objectives: ['Trace Egypt → Midian → well.', 'Explain the need that leads Moses to look for water.', 'Use Chapter 7 Language Focus for journey sequence, reason/result, scene-setting and place language.'],
    pedagogy: 'Journey and scene-building through evidence. Keep the map conceptual; no external geography is required.',
    priorKnowledge: ['Past journey verbs and basic place expressions.'], anticipatedMisconceptions: ['Adding geographic facts not present in the chapter.', 'Using there was/were and past continuous as interchangeable forms.'],
    grammarFocus: 'Simple Past journey verbs; after + time; arrive at; so + result; look for; there was/were; was/were + -ing; near/around/far from; direct question about a current action.',
    pronunciationFocus: 'Use the audio to model Midian, thirsty, shepherds and well; practise final consonants in left/arrived and chunk “Moses was tired and thirsty | so he looked for water.”',
    beforeReading: ['Recall the warning that caused Moses to leave.'], duringReading: ['Track journey, arrival, need and the scene around the well.', 'Identify there were + people and were + -ing actions separately.'],
    afterReading: ['Complete Quick Challenge 7.', 'Use Chapter 7 Language Focus for journey, need/result and scene actions.', 'Describe a new safe arrival scene in four A2 sentences.'],
    lessonPlan: 'Recall → listen/read → route/scene evidence → Quick Challenge → Language Focus → arrival transfer → exit.', discussionPoints: ['Why did Moses leave?', 'Why did he look for water?', 'What was happening around the well?'],
    interactiveTips: ['Use the Midian and Well hotspots as source anchors.', 'Replay the “tired and thirsty” and well-scene sentences.'],
    differentiation: { fastFinishers: 'Use after, arrived at, so, there were and one were + -ing sentence.', strugglingLearners: 'Use “After…, he arrived at…”, “He was… so…”, “There were…”, “They were…”.' }, formativeAssessment: ['Correct route order.', 'Uses there were and an action-in-progress form for different jobs.'], transferTask: 'Describe arriving at a familiar safe place and what people were doing there.', teacherReflection: 'Did learners use only the place information actually present in the source?'
  },
  {
    chapter: 'Chapter 8 — The Two Sisters', timing: '40 minutes',
    objectives: ['Explain why the sisters wait and what prevents another action.', 'Identify Moses’s useful helping action.', 'Use Chapter 8 Language Focus for questions, inability, absence/purpose, result and waiting/time.'],
    pedagogy: 'Problem → need → useful help. Connect D20 Helpfulness to action rather than a label.',
    priorKnowledge: ['Why/because and can/cannot.'], anticipatedMisconceptions: ['Treating “cannot” as unwillingness.', 'Missing the difference between absence, purpose and result.'],
    grammarFocus: 'Why + negative present continuous; cannot + verb; there are no + plural noun; to + verb for purpose; so + clause; wait for + person + to; when; early.',
    pronunciationFocus: 'Use the audio to model sisters, sheep, shepherds and early; practise question intonation in “Why aren’t you…?” and the contrast can/cannot.',
    beforeReading: ['Predict why someone may wait near a busy shared resource.'], duringReading: ['Locate the reason, inability/absence information and Moses’s action.', 'Find the later early-arrival/waiting language.'],
    afterReading: ['Complete Quick Challenge 8.', 'Use Chapter 8 Language Focus for question/ability, absence/purpose/result and waiting/time.', 'Create a four-sentence shared-task example.'],
    lessonPlan: 'Predict → listen/read → problem/help evidence → Quick Challenge → Language Focus → shared-task transfer → exit.', discussionPoints: ['Why were they waiting?', 'What could their father not do?', 'What made Moses’s help useful?'],
    interactiveTips: ['Replay the sisters’ explanation before Language Focus.', 'Use the existing chapter hotspots to return to the problem and help action.'],
    differentiation: { fastFinishers: 'Use Why aren’t…, cannot, there are no…to…, so and when/early in a short new scenario.', strugglingLearners: 'Use “Why aren’t…?”, “He cannot…”, “There are no… to…”, “So…”.' }, formativeAssessment: ['Explains the problem with source evidence.', 'Uses one inability and one result/time pattern accurately.'], transferTask: 'Name one useful helping action at school or home.', teacherReflection: 'Did learners connect helpfulness to a real need and action?'
  },
  {
    chapter: 'Chapter 9 — A New Life', timing: '40 minutes',
    objectives: ['Summarise invitation → offer/job → family life → later decision.', 'Explain need and reason around the job.', 'Use Chapter 9 Language Focus for need, reason, intention/offer and change over time.'],
    pedagogy: 'Life-change sequence with D16 Responsibility and gratitude shown through action.',
    priorKnowledge: ['because and basic time linkers.'], anticipatedMisconceptions: ['Confusing Şuayb’s need with Moses’s need.', 'Using later/after ten years without maintaining sequence.'],
    grammarFocus: 'could not; needed + noun; because; want to; offer/accept; imperative; began to; later; after + time; decided to + verb.',
    pronunciationFocus: 'Use the audio to model Şuayb, stranger, accepted and married; practise stress in “needed a JOB and a HOUSE” and chunk “After ten years | Moses decided to…”.',
    beforeReading: ['Recall how Moses helped at the well.'], duringReading: ['Mark who needed what, the offer and acceptance, then later life changes.', 'Locate the reason for acceptance and the later decision.'],
    afterReading: ['Complete Quick Challenge 9.', 'Use Chapter 9 Language Focus for reason/need, offer/intention and life-sequence language.', 'Create a short new-opportunity example.'],
    lessonPlan: 'Recall → listen/read → need/sequence evidence → Quick Challenge → Language Focus → opportunity transfer → exit.', discussionPoints: ['Why did Şuayb invite Moses?', 'Why did Moses accept the job?', 'What changed later?'],
    interactiveTips: ['Use the two chapter hotspots to connect help with the new life.', 'Replay the because and after ten years sentences.'],
    differentiation: { fastFinishers: 'Use needed, because, offered/accepted, later and decided to in five sentences.', strugglingLearners: 'Use “He needed…”, “because…”, “He accepted…”, “Later…”, “He decided to…”.' }, formativeAssessment: ['Keeps needs and speakers clear.', 'Uses reason and sequence language accurately.'], transferTask: 'Describe one way gratitude can be shown through action.', teacherReflection: 'Did sequence and motivation remain source-based?'
  },
  {
    chapter: 'Chapter 10 — The Voice on the Mountain', timing: '45 minutes',
    objectives: ['Build the setting and sequence fire → approach → call → instruction → sign.', 'Handle the sacred scene without speculative visualisation.', 'Use Chapter 10 Language Focus for changing conditions, instruction, plan/purpose and transformation.'],
    pedagogy: 'Slow, respectful and source-faithful reading. Do not speculate about Allah beyond the wording of the chapter.',
    priorKnowledge: ['Past setting language and imperatives.'], anticipatedMisconceptions: ['Treating the hotspot/image as a depiction of Allah.', 'Missing the difference between setting change and sudden transformation.'],
    grammarFocus: 'there was; was getting + adjective; place expressions; imperatives; will + verb; to + verb for purpose; turn into.',
    pronunciationFocus: 'Use the audio to model silence, hillside, walking stick and snake; practise chunking “It was getting dark and cold” and clear imperative stress in “WAIT here / LISTEN to me / PUT down…”.',
    beforeReading: ['Set a respectful-reading norm and predict why Moses might approach the fire.'], duringReading: ['Build setting evidence before the call.', 'Separate direct commands from Moses’s completed responses and the transformation.'],
    afterReading: ['Complete Quick Challenge 10.', 'Use Chapter 10 Language Focus for setting/change, plan/purpose and commands/transformation.', 'Transfer the language to a neutral cold-evening scenario.'],
    lessonPlan: 'Respectful frame → listen/read → setting/sequence → Quick Challenge → Language Focus → neutral transfer → exit.', discussionPoints: ['Why did Moses go toward the fire?', 'What commands are stated?', 'What happened to the walking stick?'],
    interactiveTips: ['Use the Fire hotspot for setting and the Voice hotspot only as a text reminder of the call.', 'Replay command/response sentences; do not add speculative visualisation.'],
    differentiation: { fastFinishers: 'Use getting + adjective, an imperative, will, to + verb and turn into in a new safe scenario.', strugglingLearners: 'Use “It was getting…”, “Wait…”, “I will… to…”, “It turned into…”.' }, formativeAssessment: ['Maintains source fidelity.', 'Separates setting, command, response and transformation.'], transferTask: 'Describe a safe plan in changing weather using one instruction and one purpose sentence.', teacherReflection: 'Was the sacred scene treated respectfully and without invented detail?'
  },
  {
    chapter: 'Chapter 11 — The Signs of Allah', timing: '40 minutes',
    objectives: ['Identify the shining-hand sign, Moses’s mission and Harun’s support.', 'Follow instruction → change → mission → accompaniment/purpose.', 'Use Chapter 11 Language Focus for imperatives, role/status change and companion/purpose language.'],
    pedagogy: 'Mission-and-support reading grounded only in chapter evidence. Connect D20 Helpfulness to companionship and support.',
    priorKnowledge: ['Imperatives and simple purpose language.'], anticipatedMisconceptions: ['Reducing the chapter to the sign and missing the mission.', 'Confusing accompaniment with purpose.'],
    grammarFocus: 'imperatives (put/take/go/tell); be + visible state; became; make + person + complement; did not + verb; take + person + with; go to + place; to + verb for purpose.',
    pronunciationFocus: 'Use the audio to model shining, signs, prophet and Harun; practise clear command stress and chunk “went to the palace | to give the message”.',
    beforeReading: ['Retrieve the walking-stick sign from Chapter 10.'], duringReading: ['Locate the second sign, the mission and Harun’s role.', 'Mark destination and purpose separately.'],
    afterReading: ['Complete Quick Challenge 11.', 'Use Chapter 11 Language Focus for instructions/message, change/role and companion/purpose.', 'Create a short new “small mission” scenario.'],
    lessonPlan: 'Retrieve → listen/read → sign/mission/support → Quick Challenge → Language Focus → small-mission transfer → exit.', discussionPoints: ['What sign is shown?', 'What was Moses told to do?', 'How does Harun support the task?'],
    interactiveTips: ['Use the Shining Hand and Harun hotspots.', 'Replay the mission sentence before asking for purpose language.'],
    differentiation: { fastFinishers: 'Use one imperative, became/made, took…with and to + verb in four sentences.', strugglingLearners: 'Use “Put/Go/Tell…”, “He became…”, “Harun went with…”, “to give…”.' }, formativeAssessment: ['Identifies sign, mission and support separately.', 'Uses one command and one destination/purpose pattern.'], transferTask: 'Describe how a companion can support a difficult but safe task.', teacherReflection: 'Did the lesson keep mission and support as central as the sign?'
  },
  {
    chapter: 'Chapter 12 — The King’s Magicians', timing: '40 minutes',
    objectives: ['Identify Moses’s message and the two signs.', 'Distinguish the story’s account from Pharaoh’s opinion/claim.', 'Use Chapter 12 Language Focus for message/opinion/decision, sequence/change, purpose/ability and reaction.'],
    pedagogy: 'Speaker-and-claim comparison: keep “what the story says” separate from “what Pharaoh says”. Connect D6 Honesty to evidence language.',
    priorKnowledge: ['Reported thought, direct speech and can.'], anticipatedMisconceptions: ['Calling the signs magic as if that were the narrator’s position.', 'Treating Pharaoh’s claimed ability as established fact.'],
    grammarFocus: 'tell + person + about; thought + clause; decided to; direct speech; Simple Past sequence and then; turn into; to + verb for purpose; can + verb; laugh at/make fun of.',
    pronunciationFocus: 'Use the audio to model miracles, universe, magic and laughed; practise contrastive stress in “the STORY says…” / “PHARAOH called…” and chunk direct speech clearly.',
    beforeReading: ['Recall Moses’s mission and signs.'], duringReading: ['Mark Moses’s message, Pharaoh’s thought, Moses’s decision and the signs.', 'Mark Pharaoh’s description/reaction separately from narrator wording.'],
    afterReading: ['Complete Quick Challenge 12.', 'Use Chapter 12 Language Focus for message/opinion/decision, change/sequence and purpose/ability.', 'Produce a neutral “show and explain” example without repeating the miracle scene.'],
    lessonPlan: 'Recall → listen/read → speaker/claim evidence → Quick Challenge → Language Focus → neutral transfer → exit.', discussionPoints: ['What does Moses say?', 'What signs does the story describe?', 'How does Pharaoh describe or react to them?'],
    interactiveTips: ['Use the Snake/King hotspots to separate event from response.', 'Replay the narrator and Pharaoh lines separately.'],
    differentiation: { fastFinishers: 'Use thought, decided to, then, turned into and can in a new example.', strugglingLearners: 'Use “He thought…”, “He decided to…”, “Then…”, “It turned into…”, “can…”.' }, formativeAssessment: ['Correct speaker/claim distinction.', 'Uses one reporting and one sequence/change pattern.'], transferTask: 'Give a safe example of checking what evidence shows before repeating someone’s claim.', teacherReflection: 'Were claim and narrator evidence kept separate throughout?'
  },
  {
    chapter: 'Chapter 13 — The Magicians Believe', timing: '45 minutes',
    objectives: ['Sequence arrival → objects/actions → command → change → response.', 'Compare the magicians’ response with Pharaoh’s continued response.', 'Use Chapter 13 Language Focus for arrival/accompaniment, action/change and reason/continuation.'],
    pedagogy: 'Turning-point comparison with D10 Humility: accepting correction when evidence changes a view.',
    priorKnowledge: ['Imperatives, because and basic past continuous.'], anticipatedMisconceptions: ['Making the snake micro-detail the only learning target.', 'Treating belief change and Pharaoh’s continued rejection as the same response.'],
    grammarFocus: 'invite + person + to + place; come with; was/were + -ing; put down; imperative; throw/threw; turn into; adverbs; still + negative; because; continue to + verb; time expressions.',
    pronunciationFocus: 'Use the audio to model ropes, huge, bowed and arrogant; practise throw/threw contrast and stress in “The king STILL did not believe… because…”.',
    beforeReading: ['Predict how people may respond when new evidence appears.'], duringReading: ['Track what the magicians bring/do, the command and change.', 'Compare the magicians’ response with Pharaoh’s continuing response and locate because.'],
    afterReading: ['Complete Quick Challenge 13.', 'Use Chapter 13 Language Focus for arrival/action, command/change and reason/continuation.', 'Create a neutral classroom demonstration transfer.'],
    lessonPlan: 'Predict → listen/read → sequence/response evidence → Quick Challenge → Language Focus → neutral transfer → exit.', discussionPoints: ['Why did the magicians change their response?', 'What remained unchanged about Pharaoh?', 'What responsible action can follow clear corrective evidence?'],
    interactiveTips: ['Use the Belief/Snake hotspots to contrast response and event.', 'Replay the final still/because/continued sentences.'],
    differentiation: { fastFinishers: 'Use came with, were + -ing, an imperative, turned into, because and continued to in a new example.', strugglingLearners: 'Use “They came with…”, “They were…”, “Throw…”, “It turned into…”, “because…”.' }, formativeAssessment: ['Sequences the turning point accurately.', 'Uses still/because/continue to for an unchanged/continuing response.'], transferTask: 'Give one age-appropriate example of changing a view after clear evidence.', teacherReflection: 'Did the value come from response to evidence, not from abstract moralising?'
  },
  {
    chapter: 'Chapter 14 — The Night Journey', timing: '40 minutes',
    objectives: ['Explain the instructions and the need for secrecy.', 'Describe the group’s movement and difficulty.', 'Use Chapter 14 Language Focus for command/preparation, obligation/future and ability/time/manner.'],
    pedagogy: 'Journey-planning and cause-result reading; remain within chapter evidence.',
    priorKnowledge: ['Imperatives, will and could/could not.'], anticipatedMisconceptions: ['Confusing must with will.', 'Treating slowly/quickly as time rather than manner.'],
    grammarFocus: 'imperatives; get ready for; must + verb; will + verb; at night; could not + verb; adverbs such as quickly/slowly; when + past.',
    pronunciationFocus: 'Use the audio to model journey, secret, caravan and prepared; practise must/will stress and adverb endings in quickly/slowly.',
    beforeReading: ['Recall the danger that makes departure necessary.'], duringReading: ['Locate direct instructions, must statements and future plan.', 'Find why some people could not walk fast and how the caravan moved.'],
    afterReading: ['Complete Quick Challenge 14.', 'Use Chapter 14 Language Focus for plan/command, obligation/future and ability/manner/time.', 'Transfer to a safe class or family trip plan.'],
    lessonPlan: 'Recall → listen/read → instruction/plan evidence → Quick Challenge → Language Focus → trip-plan transfer → exit.', discussionPoints: ['Why did the departure need to be secret?', 'What must the group do?', 'Why did the caravan move slowly?'],
    interactiveTips: ['Use the Night Journey/Caravan hotspots.', 'Replay the old people/children sentence for could not and movement evidence.'],
    differentiation: { fastFinishers: 'Use an imperative, must, will, could not, slowly/quickly and when in a short travel plan.', strugglingLearners: 'Use “Get ready…”, “We must…”, “We will…”, “They could not…”, “They moved slowly.”' }, formativeAssessment: ['Distinguishes obligation, future and inability.', 'Uses an adverb accurately.'], transferTask: 'Plan a small safe journey using one instruction, one must sentence and one will sentence.', teacherReflection: 'Were travel details and language kept source-bound?'
  },
  {
    chapter: 'Chapter 15 — The Sea Opens', timing: '45 minutes',
    objectives: ['Describe the difficult position and Moses’s reassurance.', 'Sequence the change and safe crossing.', 'Use Chapter 15 Language Focus for position, reassurance, change/ability and safe movement.'],
    pedagogy: 'Problem → response → rescue. Keep sacred content respectful and focus on the chapter’s explicit sequence.',
    priorKnowledge: ['Place expressions and will.'], anticipatedMisconceptions: ['Reducing the chapter to only the instruction.', 'Missing how place expressions create the problem before reassurance.'],
    grammarFocus: 'in front of/behind; imperative “Calm down”; will + verb for reassurance; became; could + verb; go to/in/between; adverbs such as safely.',
    pronunciationFocus: 'Use the audio to model panicked, parted, safely and caught; practise reassurance stress in “Allah is WITH us and WILL help us” and preposition chunks “in FRONT of / BEHIND / BETWEEN”.',
    beforeReading: ['Use the image/title only to identify the problem position: sea ahead, army behind.'], duringReading: ['Mark position, people’s reaction, reassurance and instruction.', 'Track sea change, new ability/route and safe movement.'],
    afterReading: ['Complete Quick Challenge 15.', 'Use Chapter 15 Language Focus for position/reassurance, change/result and safe movement.', 'Create a safe-route transfer in a familiar everyday setting.'],
    lessonPlan: 'Problem position → listen/read → evidence → Quick Challenge → Language Focus → safe-route transfer → exit.', discussionPoints: ['Why did the people panic?', 'How did Moses reassure them?', 'How did the new route change what they could do?'],
    interactiveTips: ['Use the Sea and Walls of Water hotspots.', 'Replay the reassurance and crossing sentences separately.'],
    differentiation: { fastFinishers: 'Use in front of, behind, will, became, could, between and safely in a new route description.', strugglingLearners: 'Use “The … is in front of…”, “Calm down”, “will…”, “became…”, “walk between… safely.”' }, formativeAssessment: ['Describes the initial problem with place language.', 'Uses reassurance and safe-movement language accurately.'], transferTask: 'Explain a safe route through a crowded familiar place using position language.', teacherReflection: 'Did Language Focus deepen the problem–response–rescue sequence?'
  },
  {
    chapter: 'Chapter 16 — The Cruel King Died in the Water', timing: '45 minutes',
    objectives: ['Retell the final events accurately and calmly.', 'Distinguish Pharaoh’s claim from the narrator’s final result and lessons.', 'Use Chapter 16 Language Focus for place/time, reported claim/command and simple general lessons.'],
    pedagogy: 'Whole-story closure: evidence first, then D11 Freedom/D14 Respect. Avoid graphic elaboration of drowning.',
    priorKnowledge: ['Place/time expressions, direct speech and can/cannot.'], anticipatedMisconceptions: ['Repeating Pharaoh’s claim that he opened the sea as narrator fact.', 'Focusing on drowning detail instead of sequence and explicit lessons.'],
    grammarFocus: 'behind/in the middle of; when + clause; in the end; say to + person; imperative; tell + object + to + verb; The story tells us that/It shows that; no one can + verb; only + person/thing.',
    pronunciationFocus: 'Use the audio to model midway, lessons, freedom and power; practise pause after “The king said…” and sentence stress in “The story TELLS us that…” / “NO ONE can…”.',
    beforeReading: ['Recall where Moses’s people are at the end of Chapter 15.'], duringReading: ['Track position and timing through the final sequence.', 'Mark Pharaoh’s direct claim separately from what the narrator says happened and from the two explicit lessons.'],
    afterReading: ['Complete Quick Challenge 16.', 'Use Chapter 16 Language Focus for place/time, claim/command/result and lesson frames.', 'Use Knowledge Check, Vocabulary Challenge and Language Review as formative retrieval before the summative Final Challenge.'],
    lessonPlan: 'Recall → listen/read → claim/result/lesson evidence → Quick Challenge → Language Focus → whole-story retrieval → exit/review.', discussionPoints: ['What happened after Pharaoh entered the sea?', 'Which sentence is Pharaoh’s claim?', 'What lessons does the narrator state?'],
    interactiveTips: ['Use the final Event/Lesson hotspots.', 'Replay Pharaoh’s speech separately from the narrator’s ending.', 'Follow the real preview review order: Knowledge Check → Vocabulary Challenge → Language Review → Master Glossary → Final Challenge.'],
    differentiation: { fastFinishers: 'Write a six-event summary and finish with one lesson frame from Language Focus.', strugglingLearners: 'Order five major events, then use “The story tells us that…” for one explicit lesson.' }, formativeAssessment: ['Separates claim from narrator account.', 'States one explicit lesson using an appropriate frame.'], transferTask: 'Give one everyday action that respects another person’s freedom and dignity, clearly labelled as your own application.', teacherReflection: 'Did the ending remain calm, source-faithful and focused on freedom/dignity rather than graphic detail?'
  }
];
