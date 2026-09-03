import type { TeacherGuideMetadata, TeacherGuideSection } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

export const adamA2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Teacher Guide — Prophet Adam (A2)',
  subtitle: 'TYMM-aligned chapter-by-chapter teaching guide',
  level: 'A2',
  estimatedDuration: '10 lessons, about 35–40 minutes per chapter',
  targetAudience: 'Lower-secondary learners studying English at approximately CEFR A2.',
  targetLearners: 'Learners who can understand short supported narratives and produce short spoken or written responses with scaffolding.',
  purpose: 'Develop English through story comprehension, listening, vocabulary in context, chapter-specific Language Focus, short production, reflection and values-based transfer without adding facts outside the story.',
  approachDesc: 'Follow a TYMM learning route in every chapter: establish meaning through listening/viewing and reading (YDAB1–YDAB2), check evidence with the chapter challenge, use the chapter-specific Language Focus to notice and practise language that genuinely occurs in that chapter, then reuse one or two patterns in short speaking or writing (YDAB3–YDAB4). Language Focus is not a detached grammar lesson and should not be taught before learners understand the story context.',
  assessmentEvidence: 'Chapter Quick Challenges, text-evidence questions, Language Focus performance, Knowledge Check, Vocabulary Challenge, Language Review, Final Challenge, exit tickets, short oral/written responses and teacher observation.',
  assessmentOverview: {
    formative: ['Chapter Quick Challenge', 'Text-evidence checks', 'Language Focus guided practice', 'Short listening/reading response', 'Exit ticket', 'Short speaking/writing transfer', 'Knowledge Check', 'Vocabulary Challenge', 'Language Review'],
    summative: ['Final Challenge']
  },
  readingFramework: {
    before: 'Activate only the prerequisite needed for the chapter and make one purposeful prediction from the title or image.',
    during: 'Listen/read first for overall meaning; reread with one precise evidence, sequence, comparison or cause-result purpose. Do not stop to teach every word.',
    after: 'Complete the comprehension check, then use the chapter Language Focus to notice how meaning is expressed. Finish by reusing one target pattern in a short A2 spoken or written response.'
  },
  vocabularyApproach: {
    selection: 'Prioritise the chapter Word Notes and only the additional words needed to access the task.',
    method: 'Elicit meaning from context, image, hotspot or a short example before giving a definition.',
    recycling: 'Reuse target words in the Language Focus follow-up, oral rehearsal, exit ticket and later review.'
  },
  grammarApproach: 'Teach grammar through the existing chapter-specific Language Focus. First locate the form in the story, identify its communicative job, complete the activity, then transfer the pattern to one new A2 sentence. Do not replace Language Focus with unrelated grammar drills.',
  grammarSequence: [
    'Ch1: Simple Past; be going to; sequence/reason/result linkers',
    'Ch2: could; taught + person + to; comparatives; because/but; reported opinion',
    'Ch3: comparatives; said/thought/believed; make + object + adjective; can; because',
    'Ch4: want + person + to; tell + person + (not) to; started to; comparison/contrast',
    'Ch5: if + present → will + verb; mistake/intention/decision language; contrast/reason',
    'Ch6: were going to; purpose with to + verb; want + person + not to',
    'Ch7: teach/warn/want patterns; because; not X, but Y; story-time links',
    'Ch8: description and role language; time/purpose/necessity; superlatives and contrast',
    'Ch9: will/won’t; changing feelings; problem-solving language; cannot/should',
    'Ch10: should; had to; became/got; still; tell/help + person + to'
  ],
  skillsFocus: {
    reading: 'TYMM YDAB2: locate explicit information, combine nearby details, follow sequence, compare clear information and make simple text-supported connections.',
    listening: 'TYMM YDAB1: follow narration for overall meaning, key details, sequence and familiar target language.',
    speaking: 'TYMM YDAB3: give one or two clear A2 sentences, compare simple ideas, explain a reason, give simple advice or retell briefly after oral rehearsal.',
    writing: 'TYMM YDAB4: produce short text-supported sentences using chapter language, then check meaning and accuracy.'
  },
  valuesFocus: [
    'D14 Respect — respectful treatment of people and difference',
    'D16 Responsibility — responsibility for work, people and the environment',
    'D6 Honesty — truthfulness, useful knowledge and honest response to mistakes',
    'D10 Humility — rejecting arrogance and accepting correction',
    'D5 Sensitivity — care for nature, vulnerable people and consequences of harm',
    'D20 Helpfulness — helping the weak and giving one’s best',
    'D12 Patience — managing reactions and anger in difficult situations',
    'D9 Compassion — non-harm, kindness and sensitivity to suffering'
  ],
  languageFocus: [
    'Every story chapter has its own Language Focus and is used after basic comprehension is established.',
    'Language Focus examples remain traceable to the chapter text; return learners to the exact sentence when meaning is unclear.',
    'The final step is transfer: learners reuse one target pattern in a new, short and meaningful A2 sentence rather than merely naming a rule.'
  ],
  differentiationNotes: 'Reduce language load without reducing the learning goal. Use one evidence sentence at a time, sentence frames, oral rehearsal before writing and selected Language Focus items for support. Extend through explanation or transfer rather than extra factual content.',
  sensitiveNotes: {
    title: 'Content safeguards',
    notes: ['Keep religious and historical claims within the story text used by the project.', 'Handle the Habil–Qabil violence calmly and without graphic elaboration.', 'Do not present personal reflection or value-transfer examples as new religious facts.']
  },
  valuesEducation: {
    title: 'TYMM Values in Action',
    description: 'Use only values that the chapter can actually support. Ask learners to identify story evidence first and then connect it to an age-appropriate action.',
    items: [
      { label: 'D14 Respect', value: 'Respect is practised through attentive, non-superiority language and kind treatment.' },
      { label: 'D16 Responsibility', value: 'Responsibility becomes visible through care for work, people and nature.' },
      { label: 'D6 Honesty / D10 Humility', value: 'Truthfulness, admitting mistakes and rejecting arrogance are linked to concrete story choices.' },
      { label: 'D5 Sensitivity / D20 Helpfulness', value: 'Care and helpfulness are connected to protecting nature, helping the weak and giving one’s best.' },
      { label: 'D12 Patience / D9 Compassion', value: 'Self-control and compassion are explored through calm, non-harming responses.' }
    ],
    questions: ['Which story detail shows this value?', 'What simple action could show the same value at school or home?', 'Which part is story evidence and which part is your own application?']
  }
};

export const adamA2TeacherGuide: TeacherGuideSection[] = [
  {
    chapter: 'Chapter 1 — Opening & The Creation', timing: '35–40 minutes',
    objectives: ['Identify Adam’s creation from soil and the human role on Earth stated in the chapter.', 'Follow the opening sequence and explain the soil-from-different-places → different-skin-colours connection.', 'Use Chapter 1 Language Focus to retell the opening with past forms, be going to and simple sequence/reason/result linkers.'],
    pedagogy: 'Build a clear event chain before language analysis. Move from listening/reading and evidence to Language Focus and short production. Use the diversity statement to practise D14 Respect with descriptive, non-ranking language.',
    priorKnowledge: ['Common past events and simple first/then/because relationships.'],
    anticipatedMisconceptions: ['Confusing Adam’s soil with Iblis’s fire introduced later.', 'Turning the skin-colour statement into comparisons of value.'],
    grammarFocus: 'Simple Past story forms; be going to for a future plan/role; After that/Then/because/Because of this/So for sequence, reason and result.',
    pronunciationFocus: 'Use the chapter audio to model stress in curiosity and created; practise the final sound in created and chunk “After that | he told the angels…” before retelling.',
    beforeReading: ['Use the title/image to predict one idea.', 'Pre-teach only soil and curiosity if they block access.'],
    duringReading: ['Listen/read once for the main event without stopping.', 'Reread for the creation material, announced Earth role, angels’ reaction and cause-result connection.'],
    afterReading: ['Complete the Quick Challenge with text evidence.', 'Complete the core Language Focus work on past actions, be going to and linkers; retell in three or four short sentences.', 'End with one respectful sentence about human difference.'],
    lessonPlan: 'Predict → listen/read → evidence → Quick Challenge → core Language Focus → retell → exit ticket.',
    discussionPoints: ['What role does the chapter announce for humans on Earth?', 'Which details support the chapter’s skin-colour connection?'],
    interactiveTips: ['Replay the target sentence from the chapter audio.', 'Use the Soil/Earth hotspots to return to evidence.', 'Use the actual Quick Challenge and Chapter 1 Language Focus only.'],
    differentiation: { fastFinishers: 'Retell in four sentences using a past form, be going to and two linkers.', strugglingLearners: 'Use “Allah created…”, “Then…”, “The human is going to…”, “Because of this…”.' },
    formativeAssessment: ['Locates the four evidence points.', 'Uses one past form and one sequence/reason/result linker accurately.'],
    expectedResponses: ['Adam was created from soil.', 'The human is going to live on Earth.', 'Because soil came from different places, the chapter connects this with different skin colours.'],
    transferTask: 'Say one respectful sentence about people being different without ranking any group.', teacherReflection: 'Did Language Focus strengthen comprehension and production rather than become detached grammar?',
    assessmentTools: { rubric: ['Accurate story detail', 'Uses chapter language', 'Clear A2 sequence/cause-result'], exitTicket: ['Retell one event and connect it with Then, because or so.'] },
    extraResources: { links: [{ label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN }, { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES }] }
  },
  {
    chapter: 'Chapter 2 — Knowledge and Respect', timing: '35–40 minutes',
    objectives: ['Explain how knowledge and thinking support Adam’s learning.', 'Compare the angels’ respectful response with Iblis’s response.', 'Use Chapter 2 Language Focus for ability, comparison, reason and contrasting opinions.'],
    pedagogy: 'Compare responses only after learners locate relevant sentences. Connect D14 Respect and D10 Humility to observable actions.',
    priorKnowledge: ['Recall Adam’s creation and the angels’ initial reaction.'], anticipatedMisconceptions: ['Thinking physical origin creates value.', 'Naming respect without identifying actions that show it.'],
    grammarFocus: 'could + verb; taught + person + to + verb; wiser than/more than; because; thought (that); but.',
    pronunciationFocus: 'Use the audio to model knowledge, respect and thought; practise /th/ in thought and sentence stress in “Adam could learn and understand.”',
    beforeReading: ['Ask what can help a person learn.'], duringReading: ['Listen/read for what Adam could do and why.', 'Mark one sentence about the angels and one about Iblis.'],
    afterReading: ['Complete the Quick Challenge.', 'Complete core Language Focus on ability, comparison and reason/opinion/contrast; finish with the short two-views production.'],
    lessonPlan: 'Activate → listen/read → compare → Quick Challenge → Language Focus → short explanation → exit.', discussionPoints: ['What helped Adam learn?', 'What is the clearest difference between the two reactions?'],
    interactiveTips: ['Replay the could/comparison sentences.', 'Use the Knowledge/Angels hotspots for evidence.', 'Use the actual Quick Challenge and Chapter 2 Language Focus only.'],
    differentiation: { fastFinishers: 'Write four connected sentences using could, a comparison, because and but.', strugglingLearners: 'Use “Adam could…”, “He was… than… because…”, “The angels thought…, but Iblis thought…”.' },
    formativeAssessment: ['Connects knowledge with learning.', 'Compares reactions with an accurate reason/contrast.'], expectedResponses: ['Adam could learn and understand.', 'He was wiser because Allah gave him knowledge.', 'The angels respected Adam, but Iblis did not.'],
    transferTask: 'Give one school example of showing respect while disagreeing.', teacherReflection: 'Did learners use target language to express meaning?', assessmentTools: { rubric: ['Accurate evidence', 'Clear comparison', 'A2 language'], exitTicket: ['Complete: “The angels thought…, but Iblis thought…”.'] }
  },
  {
    chapter: "Chapter 3 — Iblis's Arrogance", timing: '35–40 minutes',
    objectives: ['Explain why Iblis claimed to be better.', 'Separate Iblis’s judgement from the chapter’s statement about useful knowledge.', 'Use Chapter 3 Language Focus to report beliefs, compare ideas and explain cause/result or ability.'],
    pedagogy: 'Keep the character’s claim and narrator’s message separate; use evidence before interpretation and connect D10 Humility/D6 Honesty to that distinction.',
    priorKnowledge: ['Recall Adam—soil, Iblis—fire and the knowledge idea.'], anticipatedMisconceptions: ['Repeating “I am better” as the chapter conclusion.', 'Confusing material origin with useful knowledge.'],
    grammarFocus: 'better/more important/more valuable than; said/thought/believed; make + object + adjective; because; can + verb.',
    pronunciationFocus: 'Use the audio to model arrogant, valuable and believed; mark main stress and pause after reporting verbs.',
    beforeReading: ['Recall who is linked with soil and fire.'], duringReading: ['Mark Iblis’s claim and the useful-knowledge statement separately.', 'Find what useful knowledge enables.'],
    afterReading: ['Complete the polished Quick Challenge.', 'Complete core Language Focus on comparison, reporting beliefs and cause/result; explain the wrong judgement briefly.'],
    lessonPlan: 'Recall → listen/read → separate claim/message → Quick Challenge → Language Focus → explanation → exit.', discussionPoints: ['What did Iblis believe?', 'What does the chapter say useful knowledge can do?'],
    interactiveTips: ['Replay the claim and useful-knowledge sentences.', 'Use Fire/Arrogant hotspots as evidence cues.', 'Use the actual Quick Challenge and Chapter 3 Language Focus.'],
    differentiation: { fastFinishers: 'Write four sentences using believed/thought, a comparison, but and because.', strugglingLearners: 'Use “Iblis thought…”, “But the chapter says…”, “because…”.' },
    formativeAssessment: ['Separates reported belief from chapter message.', 'Uses comparison and reason accurately.'], expectedResponses: ['Iblis believed his origin was better.', 'Useful knowledge helps people do good and stop bad.'],
    transferTask: 'Give one simple example of using knowledge helpfully.', teacherReflection: 'Was reported belief clearly separated from supported message?', assessmentTools: { rubric: ['Claim/message distinction', 'Evidence', 'Meaningful language'], exitTicket: ['Finish: “Iblis believed…, but useful knowledge…”.'] }
  },
  {
    chapter: 'Chapter 4 — Paradise and the Warning', timing: '35–40 minutes',
    objectives: ['Explain Iblis’s intention and Adam’s loneliness.', 'Distinguish the warning about Iblis from the tree prohibition.', 'Use Chapter 4 Language Focus for wants/plans, beginnings and warnings.'],
    pedagogy: 'Keep the two warnings distinct and connect language to decision-making. Production follows comprehension.', priorKnowledge: ['Iblis was sent away and Adam was in Paradise.'], anticipatedMisconceptions: ['Merging the two warnings.', 'Confusing Iblis’s plan with Allah’s warning.'],
    grammarFocus: 'want + person + to; tell + person + to/not to; started to; more…than; but.', pronunciationFocus: 'Use the audio to model lonely, warning and wanted; practise weak to and chunk “told Adam and Eve | not to go near…”.',
    beforeReading: ['Predict the meaning of warning.'], duringReading: ['Find what Iblis wanted.', 'Find why Eve is introduced and separate the two warnings.'], afterReading: ['Complete Quick Challenge.', 'Use Language Focus for wants/plans, warning/prohibition and beginning/comparison; give one safe everyday warning.'],
    lessonPlan: 'Preview → listen/read → distinguish warnings → Quick Challenge → Language Focus → safe transfer → exit.', discussionPoints: ['What did Iblis want?', 'How are the two warnings different?'], interactiveTips: ['Replay warning sentences.', 'Use Eve/Tree hotspots.', 'Use only the actual Quick Challenge and Language Focus.'],
    differentiation: { fastFinishers: 'Write four sentences using wanted…to, started to, told…to and told…not to.', strugglingLearners: 'Use the same four frames with story vocabulary.' }, formativeAssessment: ['Distinguishes intention/new situation/warning.', 'Uses to/not to accurately.'], expectedResponses: ['Iblis wanted Adam to lose Allah’s love.', 'Adam started to feel lonely.', 'Allah told Adam and Eve not to go near one tree.'], transferTask: 'Give one clear and kind everyday warning.', teacherReflection: 'Was warning meaning understood before form practice?', assessmentTools: { rubric: ['Story distinction', 'Warning language', 'A2 production'], exitTicket: ['Write one sentence with told…not to.'] }
  },
  {
    chapter: "Chapter 5 — Satan's Lie and Regret", timing: '35–40 minutes',
    objectives: ['Sequence lie → forgotten warning → mistake → regret → learning → decision.', 'Compare Adam and Eve’s response with Iblis’s response.', 'Use Chapter 5 Language Focus for condition/result and mistake-response language.'],
    pedagogy: 'Identify the conditional as Iblis’s quoted promise, not narrator fact. Connect D6 Honesty/D10 Humility to acknowledging and learning from mistakes.', priorKnowledge: ['Recall the tree warning.'], anticipatedMisconceptions: ['Treating Iblis’s promise as true.', 'Missing the contrast between a mistake and refusing to admit wrong.'],
    grammarFocus: 'if + present → will + verb; made a mistake / wasn’t on purpose / learned from / decided never to; but/because.', pronunciationFocus: 'Use the audio to model mistake, purpose and decided; practise wasn’t and condition-result chunking.',
    beforeReading: ['Recall the tree warning.'], duringReading: ['Mark Iblis’s promise as his speech.', 'Track the response sequence and contrast.'], afterReading: ['Complete Quick Challenge.', 'Use Language Focus for condition/result and mistake-response language; give a small safe transfer example.'],
    lessonPlan: 'Recall → listen/read → sequence → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['What did Iblis promise?', 'How did the responses differ?'], interactiveTips: ['Replay the “If you eat…” sentence and regret paragraph.', 'Use Lie/Mistake hotspots.', 'Use actual Quick Challenge and Language Focus only.'],
    differentiation: { fastFinishers: 'Write four connected sentences using if/will, but and decided not to.', strugglingLearners: 'Use mistake → sorry → learned → decided plus a simple if/will frame.' }, formativeAssessment: ['Identifies condition/result.', 'Sequences response to mistake.'], expectedResponses: ['Iblis said, “If you eat…, you will never die.”', 'Adam and Eve learned from their mistake and decided not to repeat it.'], transferTask: 'Describe a small mistake and one responsible next action.', teacherReflection: 'Was quoted claim separated from story truth?', assessmentTools: { rubric: ['Sequence', 'Condition/result', 'Responsible transfer'], exitTicket: ['Complete: “I made a mistake, but… so I decided…”.'] }
  },
  {
    chapter: 'Chapter 6 — Life on Earth', timing: '35–40 minutes',
    objectives: ['Identify responsibilities listed in the chapter.', 'Group them under work, nature and helping others.', 'Use Chapter 6 Language Focus for planned responsibilities, purpose and intention.'],
    pedagogy: 'Make D16 Responsibility, D5 Sensitivity and D20 Helpfulness concrete through chapter actions.', priorKnowledge: ['Recall forgiveness and learning from the mistake.'], anticipatedMisconceptions: ['Adding responsibilities not stated during evidence work.', 'Confusing Iblis’s intention with human responsibilities.'],
    grammarFocus: 'were going to + verb; to + verb for purpose; want + person + not to + verb.', pronunciationFocus: 'Use the audio to model crops, protect and weak; practise linking in “going to protect nature” and stress action verbs.',
    beforeReading: ['Predict two kinds of work, then check the text.'], duringReading: ['Underline responsibilities and purpose.', 'Mark Iblis’s intention separately.'], afterReading: ['Complete Quick Challenge.', 'Use Language Focus for plan, purpose and intention; say two chapter-based responsibility sentences and one transfer sentence.'],
    lessonPlan: 'Predict → listen/read → sort → Quick Challenge → Language Focus → transfer → exit.', discussionPoints: ['Which responsibilities are stated?', 'Which connect to nature/helping?'], interactiveTips: ['Replay the responsibility list.', 'Use only existing hotspots as evidence cues.', 'Use actual Quick Challenge and Language Focus.'],
    differentiation: { fastFinishers: 'Write three responsibility sentences and add purpose where possible.', strugglingLearners: 'Use grow, keep, build, protect, help with “They were going to…”.' }, formativeAssessment: ['Finds responsibilities.', 'Expresses purpose/planned responsibility.'], expectedResponses: ['They were going to protect nature.', 'They used land to grow crops and keep animals.', 'Iblis wanted people not to remember Allah.'], transferTask: 'Name one school/home responsibility and its purpose.', teacherReflection: 'Did values arise from concrete responsibilities?', assessmentTools: { rubric: ['Evidence', 'Responsibility/purpose language', 'Transfer'], exitTicket: ['Write one to + verb purpose sentence.'] }
  },
  {
    chapter: 'Chapter 7 — The First Messenger', timing: '35–40 minutes',
    objectives: ['Identify what Adam and Eve taught and why they warned their children.', 'Follow the sequence to later messengers.', 'Use Chapter 7 Language Focus for teaching, warning, reason, correction and time links.'],
    pedagogy: 'Build meaning around guidance/responsibility and connect D6 Honesty/D16 Responsibility to explicit teaching.', priorKnowledge: ['Recall life on Earth and Iblis’s continuing presence.'], anticipatedMisconceptions: ['Adding details about later messengers not in the chapter.', 'Missing the warning reason.'],
    grammarFocus: 'teach + person + to; warn + person + against; want to make people + verb; because; not X, but Y; Then/After.', pronunciationFocus: 'Use the audio to model messenger, honest and enemy; stress action verbs in “be honest, do good, stop bad and remember Allah.”',
    beforeReading: ['Ask what a teacher/messenger can do: teach, warn, help.'], duringReading: ['List only stated teachings.', 'Find warning reason and time expressions.'], afterReading: ['Complete Quick Challenge.', 'Use Language Focus for guidance, reason/contrast and time links; give one short everyday guidance sentence.'],
    lessonPlan: 'Activate → listen/read → timeline → Quick Challenge → Language Focus → guidance → exit.', discussionPoints: ['What did they teach?', 'Why did they warn their children?'], interactiveTips: ['Replay teaching/warning sentences.', 'Use Messenger/Children hotspots.', 'Use actual Quick Challenge and Language Focus.'],
    differentiation: { fastFinishers: 'Write four guidance sentences using teach, warn, because and not…but.', strugglingLearners: 'Use “They taught…to…”, “They warned…because…”, “not…, but…”.' }, formativeAssessment: ['Identifies teachings.', 'Gives warning reason with because.'], expectedResponses: ['They taught their children to behave well.', 'They warned them because Iblis was their enemy, not their friend.'], transferTask: 'Give kind guidance to a younger learner and explain why.', teacherReflection: 'Was guidance language communicative?', assessmentTools: { rubric: ['Chapter content', 'Guidance/reason', 'Sequence'], exitTicket: ['Write one because sentence and one not…but sentence.'] }
  },
  {
    chapter: 'Chapter 8 — Story of Habil and Qabil', timing: '35–40 minutes',
    objectives: ['Compare character, roles and offerings using chapter evidence.', 'Explain purpose/necessity around the offering without adding external detail.', 'Use Chapter 8 Language Focus for description, role, time, purpose, necessity, quality and contrast.'],
    pedagogy: 'Use chapter evidence before value transfer and avoid speculation.', priorKnowledge: ['Adam and Eve had children and taught good behaviour.'], anticipatedMisconceptions: ['Importing details from other versions.', 'Confusing job/role with character.'],
    grammarFocus: 'be + adjective; love + -ing; became + role; When/One day; to + verb; had to; best/healthiest; but.', pronunciationFocus: 'Use the audio to model Habil, Qabil, shepherd and healthiest; practise word stress and contrastive stress around but.',
    beforeReading: ['Preview shepherd, farmer and offering only if needed.'], duringReading: ['Track character, role and offering for each brother.', 'Find time/purpose/necessity language.'], afterReading: ['Complete polished Quick Challenge.', 'Use Language Focus for description/role, purpose/necessity and contrast; produce a short comparison.'],
    lessonPlan: 'Preview → listen/read → compare → Quick Challenge → Language Focus → production → exit.', discussionPoints: ['How were they different?', 'What language shows quality/amount difference?'], interactiveTips: ['Replay offering sentences.', 'Use Sheep/Crops hotspots.', 'Use actual Quick Challenge and Language Focus.'],
    differentiation: { fastFinishers: 'Write four sentences with description, became, had to and contrast.', strugglingLearners: 'Use “Habil was…”, “He became…”, “They had to…”, “but…”.' }, formativeAssessment: ['Distinguishes character from role.', 'Uses necessity/purpose or quality form.'], expectedResponses: ['Habil was kind and gentle and became a shepherd.', 'Qabil was a farmer.', 'They had to offer an offering to solve the problem.'], transferTask: 'Describe one situation where giving your best matters, marked as your own example.', teacherReflection: 'Did learners stay within chapter evidence?', assessmentTools: { rubric: ['Evidence-based comparison', 'Target pattern', 'Story/transfer distinction'], exitTicket: ['Write one sentence using had to or best.'] }
  },
  {
    chapter: 'Chapter 9 — The First Crime', timing: '35–40 minutes',
    objectives: ['Follow the sequence from anger/threat to harm, sadness/panic and the crow episode.', 'Contrast Qabil’s intention with Habil’s refusal to harm.', 'Use Chapter 9 Language Focus for will/won’t, changing feelings and safe problem-solving.'],
    pedagogy: 'Handle violence calmly without graphic elaboration; focus on D12 Patience/D9 Compassion through non-harm, self-control and asking for guidance.', priorKnowledge: ['Recall the disagreement and offerings.'], anticipatedMisconceptions: ['Focusing on violent detail.', 'Treating will/won’t as neutral prediction rather than intention/refusal in direct speech.'],
    grammarFocus: 'will + verb; won’t + verb; became/felt/started to; I don’t know what I should do; show someone the way to; cannot + verb.', pronunciationFocus: 'Use the audio to model anger, panic, crow and should; practise the contrast between will and won’t and pause around direct speech.',
    beforeReading: ['Set a calm rule: focus on choices, feelings, consequences and lesson.'], duringReading: ['Mark Qabil’s threat and Habil’s refusal separately.', 'Track anger → sadness/panic → crow episode.'], afterReading: ['Complete Quick Challenge.', 'Use Language Focus for will/won’t, changing feelings and problem-solving; finish with a safe “What should I do?” example.'],
    lessonPlan: 'Sensitive frame → listen/read → track choices/feelings → Quick Challenge → Language Focus → safe transfer → exit.', discussionPoints: ['How are their choices different?', 'What changed after anger cooled?', 'What did the crow show?'], interactiveTips: ['Replay Habil’s refusal and crow paragraph.', 'Use Crow/Panic hotspots.', 'Use actual Quick Challenge and Language Focus; there is no separate crow animation.'],
    differentiation: { fastFinishers: 'Write four safe sentences with will, won’t, became/felt and should.', strugglingLearners: 'Use “I will…”, “I won’t…”, “He felt…”, “What should I do?”.' }, formativeAssessment: ['Follows sequence calmly.', 'Distinguishes will/won’t and uses should safely.'], expectedResponses: ['Qabil said he would harm Habil, but Habil would not fight back.', 'Qabil later felt sad and panicked.', 'The crow showed him what to do.'], transferTask: 'Give a safe example of stopping when angry and asking what to do next.', teacherReflection: 'Was sensitive content handled without sensationalism?', assessmentTools: { rubric: ['Sequence', 'will/won’t use', 'Safe transfer'], exitTicket: ['Write a safe “I don’t know what I should do…” sentence and a helpful response.'] }
  },
  {
    chapter: 'Chapter 10 — The Story of Adam (pbuh)', timing: '35–40 minutes',
    objectives: ['Identify explicit final lessons about jealousy, anger, kindness and continuing responsibility.', 'Summarise how the message continues through children and grandchildren.', 'Use Chapter 10 Language Focus for advice, past necessity, change, continuation and guidance.'],
    pedagogy: 'Use the final chapter as synthesis. Connect D12 Patience, D9 Compassion and D16 Responsibility to explicit wording, then use Language Focus for advice/reflection.', priorKnowledge: ['Recall the main story sequence.'], anticipatedMisconceptions: ['Adding conclusions not stated.', 'Using should only as a grammar label.'],
    grammarFocus: 'should + verb; tell + person + to; had to + verb; became/got + adjective; still; help + person + to.', pronunciationFocus: 'Use the audio to model jealousy, worldwide and should; practise stress in worldwide and chunk the explicit advice sentence.',
    beforeReading: ['Predict which earlier ideas may return.'], duringReading: ['Underline explicit advice.', 'Mark responsibility, ageing and continuation expressions.'], afterReading: ['Complete Quick Challenge.', 'Use Chapter 10 Language Focus for advice, duty/change and continuation; finish with a short reflection.', 'Use Knowledge Check, Vocabulary Challenge and Language Review as formative retrieval before the summative Final Challenge.'],
    lessonPlan: 'Predict → listen/read → evidence → Quick Challenge → Language Focus → reflection → exit/review.', discussionPoints: ['What advice is explicit?', 'How does responsibility continue?', 'What does still communicate?'], interactiveTips: ['Replay advice/continuation sentences.', 'Use Old/Message hotspots.', 'Use the actual Quick Challenge, Language Focus and review pages in their real order.'],
    differentiation: { fastFinishers: 'Write five sentences using should, had to, became/still and help…to.', strugglingLearners: 'Use “People should…”, “Adam had to…”, “He became…”, “The message still…”, “Stories help us to…”.' }, formativeAssessment: ['Identifies explicit advice.', 'Uses at least two final Language Focus patterns meaningfully.'], expectedResponses: ['Good people should stay away from jealousy and control their anger.', 'Adam had to continue his life.', 'The message still advises people.'], transferTask: 'Write two age-appropriate pieces of advice and label them as your own application.', teacherReflection: 'Did the lesson integrate evidence, TYMM values and Language Focus without new claims?', assessmentTools: { rubric: ['Final-chapter evidence', 'Advice/continuation language', 'Story/transfer distinction'], exitTicket: ['Write one should sentence and one still/help sentence.'] }, extraResources: { links: [{ label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN }, { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES }] }
  }
];
