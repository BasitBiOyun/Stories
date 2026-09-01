import type { TeacherGuideMetadata, TeacherGuideSection } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

export const abrahamB1TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Prophet Abraham — B1 Teacher Guide',
  subtitle: 'TYMM-aligned chapter guidance with integrated English Language Focus',
  level: 'B1',
  estimatedDuration: '13 lessons, about 35–40 minutes per story chapter',
  targetAudience: 'High School Preparatory, Grade 9 and Grade 10 B1 learners.',
  targetLearners: 'Learners who can follow connected narrative, locate and compare evidence, explain simple reasoning and produce short connected B1 speech and writing.',
  purpose: 'Support evidence-based B1 reading, listening, speaking and writing through the story of Prophet Abraham while integrating the actual Language Focus attached to every story chapter.',
  approachDesc: `Use a TYMM-compatible meaning-to-language-to-production route: learners first construct meaning through listening/viewing and reading (YDAB1–YDAB2), verify comprehension with evidence and the Quick Challenge, notice the chapter’s actual language relationships in Language Focus, then reuse selected patterns in connected speaking or writing (YDAB3–YDAB4). Grammar, vocabulary and pronunciation are supporting skills integrated with the four main skills rather than detached drills. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Quick Challenges, chapter evidence tasks, Language Focus performance, connected oral/written transfer, exit tickets, Language Review, Knowledge Check, Vocabulary Challenge and Final Challenge.',
  assessmentOverview: {
    formative: ['Evidence-based chapter responses', 'Quick Challenge after comprehension', 'Guided Language Focus work', 'Connected B1 speaking/writing transfer', 'Exit tickets and repair after errors'],
    summative: ['Whole-book Knowledge Check', 'Vocabulary Challenge', 'B1 Language Review', 'Final Challenge']
  },
  readingFramework: {
    before: 'Activate only relevant prior knowledge and establish a purposeful prediction or inquiry question.',
    during: 'Read/listen first for meaning, then return to the text for claim, evidence, sequence, contrast, cause, motivation or inference.',
    after: 'Complete the Quick Challenge, use Language Focus for guided noticing and practice, then require a short connected B1 transfer rather than another comprehension retell.'
  },
  vocabularyApproach: { selection: 'Prioritise chapter Word Notes and language needed for the evidence or Language Focus task.', method: 'Infer meaning from context, morphology or visual support before direct explanation.', recycling: 'Reuse words in evidence explanations, Language Focus transfer, exit tickets and later review.' },
  grammarApproach: 'Use only the chapter-specific Language Focus already attached to the student page. Learners identify a form or discourse relationship in context, explain its communicative function, practise it, and transfer it to a new B1 situation. Do not replace it with a generic grammar syllabus.',
  grammarSequence: [
    'Ch1: time framing; contextual meanings of could/could not; compact descriptive phrases and clauses',
    'Ch2: used to; while + past continuous; one-day event shift; not...but; comparison; reported instructions',
    'Ch3: although; still; on the other hand; purpose/sequence; possibility → reason → conclusion',
    'Ch4: until/when; if...will; should + because; role/purpose; direct imperatives',
    'Ch5: because/because of/when; persistence and contrast; try to; want + person + to; response verbs',
    'Ch6: decision/plan; future-in-the-past; habit/opportunity; so/until; action development and resulting state',
    'Ch7: reaction/reporting; embedded questions/content clauses; because/but/so...that; if...then consequence',
    'Ch8: so...that; however/because; future from a past viewpoint; passive focus; purpose and unexpected result',
    'Ch9: contrast and consequence; reported orders/permission; ability claim → challenge → inability → exclusivity',
    'Ch10: realization → therefore → decision → purpose → action; so that; reported instruction; journey sequencing',
    'Ch11: purpose/assurance; need → action → purpose; passive naming; obligation; after + -ing; involves + -ing',
    'Ch12: while + past continuous; sudden event; still; because/because of; development and parallel action',
    'Ch13: reported command; future commitment; state/change/rebuilding; after; purpose; generational continuity'
  ],
  skillsFocus: {
    reading: 'TYMM YDAB2: identify and compare evidence, follow discourse relationships, infer motivation and synthesize across connected paragraphs.',
    listening: 'TYMM YDAB1: listen for gist, then replay to verify key evidence, discourse markers and pronunciation.',
    speaking: 'TYMM YDAB3: make short claims, justify them with text evidence, respond to a partner and transfer chapter language to new situations.',
    writing: 'TYMM YDAB4: produce connected B1 paragraphs using chapter-derived language relationships and revise for clarity after feedback.'
  },
  valuesFocus: [
    'D6 Dürüstlük — distinguish claims from evidence and represent the text accurately',
    'D10 Mütevazılık — remain open to evidence and avoid arrogance when correcting or being corrected',
    'D12 Sabır — sustain purposeful effort under resistance or difficulty',
    'D14 Saygı — discuss belief, disagreement and family/community differences respectfully',
    'D16 Sorumluluk — connect guidance, family care, mission and assigned tasks with responsible action',
    'D20 Yardımseverlik — recognise protection, cooperation and help as actions rather than abstract slogans',
    `Use a value only where chapter events genuinely support it; values should be integrated with learning experiences, not taught as a detached moral lecture. See ${TYMM_VALUES}.`
  ],
  languageFocus: ['Every story chapter has active English Language Focus derived from its own prose.', 'Use it after learners understand the chapter and complete/repair the Quick Challenge.', 'At B1, ask learners to notice relationships such as contrast, cause, viewpoint, purpose, time and reporting, not merely label forms.', 'Finish with a short connected transfer task in a new context so grammar supports communication.'],
  differentiationNotes: 'Reduce linguistic load while preserving the same evidence and communication target. Extend stronger learners through comparison, inference, discourse control or synthesis, not unrelated factual expansion.'
};

export const abrahamB1TeacherGuideEn: TeacherGuideSection[] = [
  {
    chapter: '1. Abraham in Babylon', timing: '35–40 minutes',
    objectives: ['Identify what people in Babylon worshipped and what the idols could not do.', 'Explain one conclusion with direct text evidence.', 'Use Chapter 1 Language Focus to organise time, interpret could/could not in context and add compact description.'],
    pedagogy: 'Guided discovery from concrete observations to a supported conclusion. Language Focus follows comprehension and shows how the narration packages time, ability/possibility and description.',
    priorKnowledge: ['Learners can describe objects and basic ability.', 'Learners know that a claim needs supporting evidence.'],
    anticipatedMisconceptions: ['Treating the chapter as only a list of old beliefs.', 'Giving one fixed meaning to every use of could.'],
    grammarFocus: 'Language Focus: distant-past/time framing; when/since; contextual could/could not; named/made from/which/full of for attached description.', pronunciationFocus: 'Babylon, idols, statues, worshipped.',
    beforeReading: ['Ask what a statue can do independently and set a claim/evidence purpose.'],
    duringReading: ['Mark what people do toward the statues and what the statues cannot do.', 'Notice the different time expressions and uses of could.'],
    afterReading: ['Complete the Quick Challenge.', 'Open Language Focus and classify time, ability/possibility and descriptive structures.', 'Produce four connected sentences about a new observation using at least three target patterns.'],
    lessonPlan: 'Predict → read/listen → evidence chart → Quick Challenge → Language Focus → connected speaking/writing → exit ticket.',
    discussionPoints: ['Which detail is strongest evidence?', 'How does could change meaning with context?', 'How do attached phrases make description more compact?'],
    interactiveTips: ['Use Word Notes and hotspots only after learners locate evidence in the prose.'],
    differentiation: { strugglingLearners: 'Use a People / Idols chart and frames with when, could not and made from.', fastFinishers: 'Rank evidence and rewrite two details using compact noun descriptions.' },
    formativeAssessment: ['Accurate evidence distinction', 'One correct contextual use of could/could not', 'One connected transfer response'], expectedResponses: ['The statues could not eat, drink, talk, move, hear or understand.'],
    transferTask: 'Describe a surprising object or place with a time frame, could/could not and one attached descriptive phrase.', teacherReflection: 'Did learners interpret language from context rather than memorise labels?'
  },
  {
    chapter: '2. Abraham and His Father’s Idols', timing: '35–40 minutes',
    objectives: ['Explain Azer’s connection with idol making and distinguish his claims from observable action.', 'Compare repeated childhood habits with one specific event.', 'Use Language Focus for past habit/background, corrective contrast, comparison and reported instruction.'],
    pedagogy: 'Contrast stated belief with observable action without ridicule. Move from recurring background to the turning-point event.',
    priorKnowledge: ['Learners can identify speaker/action and basic past forms.'], anticipatedMisconceptions: ['Treating Abraham’s laughter as the only evidence.', 'Confusing a character’s claim with narrator evidence.'],
    grammarFocus: 'Language Focus: used to; while + was/were -ing; One day; not...but; bigger than; tell + person + (not) to + verb vs direct imperative.', pronunciationFocus: 'Azer, Mardukh, idol maker, knowledge.',
    beforeReading: ['Ask how knowing who made an object can affect claims about its power.'], duringReading: ['Mark habitual actions, the One day event, Azer’s claim and Abraham’s treatment of the statue.'],
    afterReading: ['Complete the Quick Challenge.', 'Open Language Focus and sort habit/background/specific event.', 'Transform one direct instruction into reported form and produce a short connected childhood-memory transfer.'],
    lessonPlan: 'Recall → read/listen → claim/action + time sort → Quick Challenge → Language Focus → transfer → exit.',
    discussionPoints: ['What repeats?', 'What changes on One day?', 'How does not...but correct an idea?'], interactiveTips: ['Use Azer/Mardukh hotspots to locate the two sides of the contrast.'],
    differentiation: { strugglingLearners: 'Use “He used to... while...” and “One day...” frames.', fastFinishers: 'Add a comparison and convert direct ↔ reported instruction accurately.' }, formativeAssessment: ['Correct claim/action distinction', 'Accurate habit/event contrast and reported instruction'],
    transferTask: 'Write four connected sentences about a past routine and one turning point.', teacherReflection: 'Did learners separate repeated background from one event?'
  },
  {
    chapter: '3. Searching for the True Creator', timing: '35–40 minutes',
    objectives: ['Explain the repeated reasoning pattern in the star and moon episodes.', 'Track contrast and viewpoint changes.', 'Use Language Focus to move from possibility to reasoned conclusion.'],
    pedagogy: 'Pattern finding: observation and discourse relationships support reasoning rather than isolated grammar practice.', priorKnowledge: ['Creator vs created object; basic cause connectors.'], anticipatedMisconceptions: ['Retelling two events without stating the common principle.', 'Assuming brightness is the reason for rejection.'],
    grammarFocus: 'Language Focus: although; still; on the other hand; but; to + verb for purpose; then/when; Could this be...?; because; understood that....', pronunciationFocus: 'Creator, countryside, disappeared, faded.',
    beforeReading: ['Predict what kind of evidence could change a possible explanation.'], duringReading: ['Mark viewpoint/contrast expressions and the possibility → evidence → conclusion sequence twice.'],
    afterReading: ['Complete Quick Challenge after memory response.', 'Open Language Focus and classify concession, continuation, viewpoint, purpose and reasoning.', 'Create a four-sentence everyday reasoning chain.'],
    lessonPlan: 'Prediction → read/listen → parallel-event table → Quick Challenge → Language Focus → reasoned transfer → exit.', discussionPoints: ['What repeats in both examples?', 'What does on the other hand change?', 'How does because support the conclusion?'], interactiveTips: ['Use the sky hotspot only to revisit the common pattern.'],
    differentiation: { strugglingLearners: 'Use “Although...”, “Could this be...?”, “because...”, “I realised that...”.', fastFinishers: 'Explain the principle without naming the star or moon and control viewpoint markers.' }, formativeAssessment: ['Shared-pattern explanation', 'Coherent possibility-to-conclusion transfer'], transferTask: 'Compare two possible explanations for an everyday observation.', teacherReflection: 'Could learners control discourse relationships as well as content?'
  },
  {
    chapter: '4. Abraham Receives Guidance', timing: '35–40 minutes',
    objectives: ['Connect observation, prayer, responsibility and the father-son response.', 'Distinguish two communicative uses of the same condition-result form.', 'Use Language Focus for time, responsibility/reason, role and direct commands.'],
    pedagogy: 'Cause-to-responsibility reading: an insight becomes prayer, mission and difficult communication.', priorKnowledge: ['Star/moon reasoning pattern.'], anticipatedMisconceptions: ['Ignoring Abraham’s request for guidance.', 'Treating both if-clauses as having the same communicative purpose.'],
    grammarFocus: 'Language Focus: until/when; If + present, will + verb for consequence or threat; should...because; chose him to be; direct imperatives.', pronunciationFocus: 'prostrated, guidance, Messenger, recognized.',
    beforeReading: ['Ask what responsibility can follow an important realization.'], duringReading: ['Order sun → prayer → responsibility → father and classify the two if-clauses.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and connect time → duty/reason → imperative → conditional response.', 'Produce a four-sentence responsibility-and-response scene.'],
    lessonPlan: 'Recall → read/listen → four-stage chain → Quick Challenge → Language Focus → connected response → exit.', discussionPoints: ['Why ask for guidance?', 'How does because justify responsibility?', 'How does the father’s conditional differ in purpose from the prayer?'], interactiveTips: ['Use the guidance hotspot for the prayer/mission link only.'],
    differentiation: { strugglingLearners: 'Use “When...”, “should... because...”, and “If..., I will...”.', fastFinishers: 'Use both a supportive and a threatening condition in neutral examples and explain the function.' }, formativeAssessment: ['Accurate four-stage chain', 'Correct communicative interpretation of conditionals'], transferTask: 'Write a safe school scenario involving responsibility, an instruction and a conditional response.', teacherReflection: 'Did learners connect form with speaker purpose?'
  },
  {
    chapter: '5. Abraham Calls His People', timing: '35–40 minutes',
    objectives: ['Compare inherited tradition with Abraham’s stated reasons.', 'Explain persistence and response using text evidence.', 'Use Language Focus for reason/result, attempt, desired change and contrast.'],
    pedagogy: 'Evaluate different kinds of reasons, then examine what happens when persuasion meets resistance.', priorKnowledge: ['Claim/evidence distinction.'], anticipatedMisconceptions: ['Treating tradition as evidence of power.', 'Adding events not present in the chapter.'],
    grammarFocus: 'Language Focus: because/because of/when; did not give up; try to; want + person + to; tell/reply/ignore; but/though.', pronunciationFocus: 'furious, reconsider, harm, heals.',
    beforeReading: ['Ask whether “people before us did it” proves that something works.'], duringReading: ['Mark the people’s reason, Abraham’s evidence and the persistence/response sequence.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and trace reason → attempt → persistence/desire → contrasting response.', 'Create a four-sentence persuasion scene.'],
    lessonPlan: 'Question → read/listen → reason/evidence comparison → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['What kind of reason do the people give?', 'What does did not give up add?', 'How does though change the final relation?'], interactiveTips: ['Use public-call and people-response hotspots only for evidence.'],
    differentiation: { strugglingLearners: 'Use “because...”, “tried to...”, “wanted them to...”, “but...”.', fastFinishers: 'Evaluate the strongest persuasive sentence and justify the choice.' }, formativeAssessment: ['Correct tradition/evidence classification', 'Connected persuasion transfer'], transferTask: 'Describe a non-story attempt to persuade someone respectfully.', teacherReflection: 'Did the discussion stay analytical and respectful?'
  },
  {
    chapter: '6. Abraham Enters the Temple', timing: '35–40 minutes',
    objectives: ['Sequence the plan and explain how its stages prepare the next chapter.', 'Distinguish usual background from the specific opportunity.', 'Use Language Focus for decision, future-in-the-past, timing, action development and final state.'],
    pedagogy: 'Purposeful sequencing: every action contributes to the later public questioning.', priorKnowledge: ['People ignored the public call in Chapter 5.'], anticipatedMisconceptions: ['Treating the largest idol as the actual agent.', 'Missing the deliberate nature of the plan.'],
    grammarFocus: 'Language Focus: decided/planned to; what he was going to do; usually; so; until; began to; one after another; until completed; left + object + complement.', pronunciationFocus: 'temple, axe, ridiculous, celebration.',
    beforeReading: ['Predict how a deliberate demonstration can be prepared.'], duringReading: ['Mark decision, secrecy, opportunity, timing and action-development stages.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and build decision → opportunity → until → process → final state.', 'Write four connected sentences describing a new deliberate plan.'],
    lessonPlan: 'Prediction → read/listen → sequence/purpose → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['What makes the action deliberate?', 'What does was going to do mean from the past viewpoint?', 'How is the final state expressed?'], interactiveTips: ['Use Empty Town/Food Before Idols only after textual evidence.'],
    differentiation: { strugglingLearners: 'Use decision, so, until and began to frames.', fastFinishers: 'Add future-in-the-past and left + object + complement accurately.' }, formativeAssessment: ['Correct sequence', 'Accurate future-in-the-past/final-state use'], transferTask: 'Describe a careful non-story plan and its resulting state.', teacherReflection: 'Did learners distinguish intention, opportunity and result?'
  },
  {
    chapter: '7. The Broken Idols', timing: '40 minutes',
    objectives: ['Explain how the people’s own admission becomes evidence.', 'Distinguish inner recognition from outward refusal.', 'Use Language Focus for reporting, embedded questions, cause/contrast/result and conditional consequence.'],
    pedagogy: 'Dialogic reasoning and values-as-action: what people see/hear/remember is separated from what they choose to do.', priorKnowledge: ['Temple plan from Chapter 6.'], anticipatedMisconceptions: ['Saying the people immediately accept Abraham.', 'Treating arrogance as an abstract label without action evidence.'],
    grammarFocus: 'Language Focus: shocked to see/heard/remembered; find out who; direct Did...?; ask...if; what they heard; because; but; so...that; if...then.', pronunciationFocus: 'smashed, forefathers, arrogant, protect.',
    beforeReading: ['Recall why the largest idol was left.'], duringReading: ['Highlight admission, embedded/direct questions, shame and refusal.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and classify reporting/question/cause/contrast/condition functions.', 'Write a four-sentence disagreement with an embedded question and consequence.'],
    lessonPlan: 'Recap → read/listen → admission/reasoning/choice → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['Why is their admission powerful?', 'What is embedded rather than direct?', 'What action shows arrogance?'], interactiveTips: ['Use Broken Idols/Public Questioning for exact evidence only.'],
    differentiation: { strugglingLearners: 'Use “They heard...”, “find out who...”, “because...”, “If..., then...”.', fastFinishers: 'Explain recognition vs refusal with controlled contrast and embedded clauses.' }, formativeAssessment: ['Correct dialogue chain', 'Accurate embedded-question and consequence use'], transferTask: 'Report a harmless disagreement where evidence is recognised but a view does not immediately change.', teacherReflection: 'Did learners separate information, emotion and decision?'
  },
  {
    chapter: '8. Preparing the Great Fire', timing: '40 minutes',
    objectives: ['Identify evidence showing the severity of danger without sensationalising violence.', 'Explain Abraham’s calmness and temporal viewpoint accurately.', 'Use Language Focus for degree/result, contrast/cause, future-from-past, passive process, purpose and unexpected outcome.'],
    pedagogy: 'Tension-and-resolution reading with careful evidence selection and respectful handling of danger.', priorKnowledge: ['Reason for punishment from Chapter 7.'], anticipatedMisconceptions: ['Saying Abraham knew the exact form of rescue.', 'Saying the fire was never dangerous.'],
    grammarFocus: 'Language Focus: so...that; however/because; knew that...would / what would happen; passive forms; was used to; turned out to be/turned into.', pronunciationFocus: 'approach, catapult, flames, Gabriel.',
    beforeReading: ['Ask how a writer establishes extreme danger through evidence.'], duringReading: ['Collect danger details, trust language, past-viewpoint future forms and passive process descriptions.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and connect intensity → response → expectation → process → outcome.', 'Produce a four-sentence new pressure/unexpected-result narrative.'],
    lessonPlan: 'Prediction → read/listen → evidence → Quick Challenge → Language Focus → connected transfer → exit.', discussionPoints: ['Which evidence makes danger clearest?', 'What does would mean from this past viewpoint?', 'Why is passive useful in the punishment process?'], interactiveTips: ['Use the fire hotspot only for the source-supported outcome.'],
    differentiation: { strugglingLearners: 'Use so...that, however/because and one passive sentence.', fastFinishers: 'Add future-from-past and turned out to be in a coherent response.' }, formativeAssessment: ['Accurate danger evidence', 'Correct viewpoint/passive/result distinction'], transferTask: 'Describe a difficult but safe situation that produces an unexpected result.', teacherReflection: 'Did learners understand trust without claiming knowledge of the exact outcome?'
  },
  {
    chapter: '9. The Miracle and Nimrod', timing: '40 minutes',
    objectives: ['Summarize claim, demonstration, challenge and result.', 'Distinguish authority over people from claimed ability over creation.', 'Use Language Focus for contrast/consequence, reported orders, permission, ability testing and exclusivity.'],
    pedagogy: 'Argument analysis from claim to test and result.', priorKnowledge: ['Chapter 8 miracle outcome.'], anticipatedMisconceptions: ['Interpreting release as literally giving life.', 'Assuming the miracle changes everyone’s belief.'],
    grammarFocus: 'Language Focus: yet/however/so/result expressions; order + person + to; passive reported instruction; let; can; Can you...?; was unable to; only...has the power.', pronunciationFocus: 'miracle, rage, Nimrod, ordinary, response.',
    beforeReading: ['Ask the difference between authority to decide and physical ability to cause an event.'], duringReading: ['Label Claim / Example / Challenge / Result and notice order/permission structures.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and track claim → test → inability → exclusivity.', 'Create a four-sentence evidence-based claim challenge in a new context.'],
    lessonPlan: 'Warm-up → read/listen → argument chart → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['Why does the example not prove the claim?', 'How are orders reported?', 'What does only do in the conclusion?'], interactiveTips: ['Use Nimrod and sunrise hotspots to distinguish claim and challenge.'],
    differentiation: { strugglingLearners: 'Use can / Can you...? / was unable to.', fastFinishers: 'Add reported order/let and contrast connectors in a neutral summary.' }, formativeAssessment: ['Correct claim/challenge mapping', 'Accurate ability/order language'], transferTask: 'Test a simple everyday ability claim with evidence.', teacherReflection: 'Did learners analyse logic rather than memorise the final line?'
  },
  {
    chapter: '10. Leaving Babylon', timing: '40 minutes',
    objectives: ['Explain the realization, decision, purpose and route.', 'Keep Sarah, Lot, Hagar and Ishmael roles distinct.', 'Use Language Focus to organise a purposeful journey and reported instructions.'],
    pedagogy: 'Cause/consequence and changing-setting analysis: migration continues mission rather than simply ending conflict.', priorKnowledge: ['Sustained opposition in Babylon.'], anticipatedMisconceptions: ['Reducing departure to escape.', 'Confusing stages of the route or family members.'],
    grammarFocus: 'Language Focus: realized that...was going to; therefore; decided to; to + verb; so that + could; command/tell + person + to; during/soon/one day/finally.', pronunciationFocus: 'faith, camelback, Palestine, valley, Ishmael.',
    beforeReading: ['Ask when changing place can continue the same goal.'], duringReading: ['Mark realization, decision, purpose, route, family details and reported instruction.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and build realization → decision → purpose → journey event → endpoint.', 'Write five connected sentences about a new purposeful journey.'],
    lessonPlan: 'Question → read/listen → route/purpose → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['Why are Sarah and Lot mentioned?', 'How does therefore connect thought to action?', 'What does so that + could add?'], interactiveTips: ['Use Leaving Babylon/Lonely Valley as location and purpose anchors only.'],
    differentiation: { strugglingLearners: 'Use realized, therefore, decided to, finally.', fastFinishers: 'Add so that + could and reported instruction naturally.' }, formativeAssessment: ['Accurate reason/route/family summary', 'Coherent journey transfer'], transferTask: 'Explain a change of strategy using realization, decision and purpose.', teacherReflection: 'Did learners preserve the mission-purpose link?'
  },
  {
    chapter: '11. Hagar and Ishmael in the Valley', timing: '40 minutes',
    objectives: ['Explain Hagar’s trust and active effort with evidence.', 'Connect need, action and purpose.', 'Use Language Focus for assurance, process description, obligation and sequence.'],
    pedagogy: 'Trust-as-action: emotional understanding is paired with concrete agency and process language.', priorKnowledge: ['Family reaches the valley in Chapter 10.'], anticipatedMisconceptions: ['Treating trust as passive waiting.', 'Making distance facts the main learning.'],
    grammarFocus: 'Language Focus: so that; knew that; will never / will surely; ran out; need to; started + -ing; looking for; is known as; must; after + -ing; involves + -ing.', pronunciationFocus: 'Hagar, Ishmael, Safa, Marwa, ritual, blessings.',
    beforeReading: ['Ask what a family would need first in a valley without farming or water.'], duringReading: ['Mark trust statement, problem, need, action, purpose and explanatory ritual paragraph.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and build problem → need → action → purpose, then classify naming/obligation/sequence/process.', 'Explain a non-story routine or difficult situation in five connected sentences.'],
    lessonPlan: 'Context → read/listen → trust/effort evidence → Quick Challenge → Language Focus → process transfer → exit.', discussionPoints: ['How do trust and effort work together?', 'What does must express?', 'How does involves explain a practice?'], interactiveTips: ['Use Hagar/Safa-Marwa hotspots only to reinforce described actions.'],
    differentiation: { strugglingLearners: 'Use ran out, needed to, started + -ing, looking for.', fastFinishers: 'Add is known as, must, after + -ing and involves + -ing accurately.' }, formativeAssessment: ['Trust + effort evidence', 'Coherent need/process language'], transferTask: 'Explain a routine that has a need, purpose, rule and sequence.', teacherReflection: 'Did learners keep Hagar as an active agent?'
  },
  {
    chapter: '12. Zamzam and the City of Mecca', timing: '35–40 minutes',
    objectives: ['Sequence background, sudden event and settlement development.', 'Explain immediate and longer-term cause/result.', 'Use Language Focus for background, interruption, continuity, cause and development.'],
    pedagogy: 'Cause-chain reading from immediate relief to longer settlement, without unsupported history.', priorKnowledge: ['Hagar’s search from Chapter 11.'], anticipatedMisconceptions: ['Saying settlement came before the spring.', 'Collapsing immediate relief and long-term development.'],
    grammarFocus: 'Language Focus: while + past continuous; suddenly + started + -ing; when; still; -ing result/function; because/because of; begin/start; come to + verb; meanwhile.', pronunciationFocus: 'thirst, spring, sacred, Zamzam, Mecca.',
    beforeReading: ['Predict what changes if reliable water appears in a barren place.'], duringReading: ['Mark ongoing background, sudden water, immediate response, continued importance and settlement development.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and classify background/new event/cause/continuity/development.', 'Write five connected sentences about a place changing over time.'],
    lessonPlan: 'Prediction → read/listen → cause chain → Quick Challenge → Language Focus → development transfer → exit.', discussionPoints: ['What interrupts the background?', 'What continues?', 'How do because and because of differ in structure?'], interactiveTips: ['Use Zamzam/Mecca hotspots after the sequence is established.'],
    differentiation: { strugglingLearners: 'Use while, suddenly, because and started.', fastFinishers: 'Add still, providing..., meanwhile and both cause structures.' }, formativeAssessment: ['Correct cause chain', 'Coherent continuity/development language'], transferTask: 'Explain how one event can change a place over time.', teacherReflection: 'Did learners distinguish immediate and longer consequences?'
  },
  {
    chapter: '13. Building the Ka’ba', timing: '40 minutes',
    objectives: ['Explain Abraham and Ishmael’s cooperation and the chapter’s closing message.', 'Synthesize state, rebuilding, purpose and continuity.', 'Use Language Focus for reported command, commitment, completion and legacy.'],
    pedagogy: 'Synthesis and legacy: connect action, place and message while remaining inside the chapter’s wording.', priorKnowledge: ['Valley settlement and major earlier themes.'], anticipatedMisconceptions: ['Saying Abraham builds alone.', 'Separating the building from the final message.'],
    grammarFocus: 'Language Focus: command/tell + person + to; will for expected role/commitment; past state + change over time; began to; after; purpose/function; over the years; to + verb for later purpose.', pronunciationFocus: 'foundations, Hajj, Oneness, descendants, peninsula.',
    beforeReading: ['Ask how a physical place can carry meaning across generations.'], duringReading: ['Mark command, Ishmael’s commitment, earlier state, foundations/rebuilding, completion and continuing message.'],
    afterReading: ['Complete Quick Challenge.', 'Open Language Focus and build instruction → commitment → action/change → completion → purpose/continuity.', 'Write a five-sentence non-story legacy paragraph.'],
    lessonPlan: 'Question → read/listen → four-part synthesis → Quick Challenge → Language Focus → legacy transfer → exit/whole-book review.', discussionPoints: ['What does Ishmael’s response add?', 'How does after mark completion?', 'How does over the years extend the message beyond one generation?'], interactiveTips: ['Use Ka’ba/Tawheed hotspots for final textual synthesis only.'],
    differentiation: { strugglingLearners: 'Use “was told to... / will... / began to... / After...”.', fastFinishers: 'Connect purpose and generational continuity with controlled synthesis.' }, formativeAssessment: ['Accurate builder/message connection', 'One cross-chapter synthesis and one coherent Language Focus transfer'], transferTask: 'Explain how a project or idea continues after its founder.', teacherReflection: 'Could learners synthesize without inventing claims beyond the source?'
  }
];

export const abrahamB1TeacherGuide = abrahamB1TeacherGuideEn;