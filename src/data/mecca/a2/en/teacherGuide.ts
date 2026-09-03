import type { TeacherGuideSection, TeacherGuideMetadata } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_VALUES = 'https://tymm.meb.gov.tr/beceriler/erdem-deger-eylem-cercevesi';

export const meccaA2TeacherGuide: TeacherGuideSection[] = [
  {
    chapter: 'Chapter 1: Bilal Ibn Rabah’s Place in Islam',
    timing: '40 minutes',
    objectives: [
      'Identify Bilal’s early social position and the chapter’s explicit statement about equal human value.',
      'Separate what people in Mecca thought about slavery and skin colour from the chapter’s own message.',
      'Use was/were, was born in, thought + clause, would, make + person + complement and teaches us that to describe change and lesson.'
    ],
    pedagogy: 'Begin with identity and evidence, not with a general discussion of slavery. Ask learners to label social status, public belief and narrator lesson separately so the chapter’s dignity message is not reduced to a slogan.',
    priorKnowledge: ['Basic past forms and simple identity language.'],
    anticipatedMisconceptions: ['Bilal’s low social status does not mean the chapter presents him as less valuable.', 'The chapter reports what some people thought; those beliefs are not narrator-endorsed facts.'],
    grammarFocus: 'was/were; was born in; thought + clause; would for future viewed from the past; make + person + noun/adjective; teaches us that + clause.',
    pronunciationFocus: 'Use the chapter audio to model Bilal, Rabah, openly and valuable. Stress the contrast in “People in Mecca thought…” and pause before the lesson frame “His story teaches us that…”.',
    beforeReading: ['Show the title and ask learners to predict whether the chapter will focus more on status, character or later importance; keep the prediction open.'],
    duringReading: ['Mark one sentence about Bilal’s birth/status, one about early public faith and one about human value.', 'Circle the subject of each belief sentence so learners know whose view is being reported.'],
    afterReading: ['Complete the Quick Challenge with one sentence of evidence.', 'Use Chapter 1 Language Focus to build a three-sentence status → change → lesson response.', 'Finish with one school-based equality action clearly labelled as personal application.'],
    lessonPlan: '4 min prediction and identity vocabulary; 12 min read/listen for status, belief and narrator lesson; 6 min evidence sort and Quick Challenge; 10 min Language Focus; 6 min short oral/written transfer; 2 min exit ticket.',
    discussionPoints: ['Which sentence tells us Bilal’s social position?', 'Which sentence reports what people thought?', 'What does the chapter itself say makes a person valuable?'],
    interactiveTips: ['Replay the sentence that reports Meccan attitudes, then immediately compare it with the final lesson sentence.', 'Use the chapter image only for observation, not for inventing status details.', 'Before revealing a Quick Challenge answer, require learners to point to the exact sentence that supports it.'],
    differentiation: {
      strugglingLearners: 'Give three labels—status / people’s belief / chapter lesson—and let learners place one sentence under each before speaking.',
      fastFinishers: 'Write four connected sentences using thought, would and teaches us that while preserving who says each claim.'
    },
    formativeAssessment: ['Correctly separates reported social belief from the chapter’s value statement.', 'Uses at least two target patterns in a meaningful A2 response.'],
    expectedResponses: ['Bilal was born into slavery in Mecca.', 'The chapter says skin colour and slavery do not make a person less valuable.'],
    transferTask: 'State one concrete way a class can show equal respect regardless of background.',
    teacherReflection: 'Did learners distinguish social status, reported belief and narrator lesson without turning them into one idea?',
    assessmentTools: { rubric: ['Accurate chapter evidence', 'Speaker/viewpoint distinction', 'A2 target language', 'Concrete dignity action'], exitTicket: ['Write one fact about Bilal and one sentence beginning “His story teaches us that…”.'] },
    extraResources: { links: [{ label: 'TYMM Foreign Language Skills', url: TYMM_FOREIGN }, { label: 'TYMM Erdem-Değer-Eylem', url: TYMM_VALUES }] }
  },
  {
    chapter: 'Chapter 2: The Age of Ignorance',
    timing: '40 minutes',
    objectives: [
      'Explain how the chapter defines Jahiliyyah through belief, weak justice and economic inequality.',
      'Use rich–poor evidence to describe a social gap without claiming everyone lived in the same way.',
      'Use was/was called/there was, many/a lot of, but, between A and B, because of this and became + comparative.'
    ],
    pedagogy: 'Treat Jahiliyyah as a concept built from several chapter details. Learners should first collect evidence under belief, justice and economy, then make a short supported definition.',
    priorKnowledge: ['rich, poor, fair, unfair and simple contrast with but.'],
    anticipatedMisconceptions: ['Jahiliyyah does not mean that people had no knowledge at all.', 'The rich–poor contrast must not be rewritten as “all rich people…” or “all poor people…”.'],
    grammarFocus: 'was/was called/there was; many/a lot of; but; between A and B; because of this; became + comparative.',
    pronunciationFocus: 'Model Jahiliyyah, ignorance, justice and luxury. Pause before but and stress the contrast in “rich” and “poor” when reading the inequality sentence.',
    beforeReading: ['Put “ignorance” on the board and ask learners for two possible meanings; tell them the chapter will define its own meaning.'],
    duringReading: ['Sort evidence into three headings: belief / justice / economy.', 'Underline the sentence that explains how unfair debt made the gap wider.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to describe the gap in three connected sentences with but and because of this.', 'Write a one-sentence chapter definition of Jahiliyyah using only collected evidence.'],
    lessonPlan: '5 min concept prediction; 12 min evidence sorting while reading/listening; 6 min Quick Challenge and gap explanation; 10 min Language Focus; 5 min supported definition; 2 min exit.',
    discussionPoints: ['Why is “people knew nothing” an inaccurate summary?', 'Which detail shows weak justice?', 'How did debt affect the gap between rich and poor?'],
    interactiveTips: ['Pause the audio after each social/economic detail and ask learners which evidence heading it belongs under.', 'Use the Quick Challenge to test whether learners can distinguish definition from example.', 'Return to the exact debt sentence before accepting a cause-result explanation.'],
    differentiation: {
      strugglingLearners: 'Provide the frame “There was ____. Many ____, but ____. Because of this, ____ became ____.”',
      fastFinishers: 'Write a four-sentence definition using one belief detail, one justice detail and one economic consequence.'
    },
    formativeAssessment: ['Uses at least two different evidence categories in the definition.', 'Avoids universal claims not supported by the chapter.'],
    expectedResponses: ['The chapter connects Jahiliyyah with idol worship, weak justice and inequality.', 'Unfair extra money on debt made the gap wider.'],
    transferTask: 'Describe a simple school situation where one rule creates an unfair gap and suggest a fairer response.',
    teacherReflection: 'Did learners build the concept from several pieces of evidence rather than memorising one label?',
    assessmentTools: { rubric: ['Concept accuracy', 'Evidence from more than one category', 'Cause-result language', 'No overgeneralisation'], exitTicket: ['Complete: “In this chapter, Jahiliyyah is not only ____. It also includes ____.”'] }
  },
  {
    chapter: 'Chapter 3: Slaves in Mecca',
    timing: '40 minutes',
    objectives: [
      'Describe the slave system in Mecca and Umayya’s specific power over Bilal.',
      'Distinguish a social system from claims about every individual Meccan.',
      'Use comparative/superlative language, center for + -ing, when + past, started + -ing, wanted + object + to and became.'
    ],
    pedagogy: 'Move from system → individual example. First identify what the chapter says about slave trading in Mecca, then narrow to Umayya and Bilal so learners do not generalise one character to the whole city.',
    priorKnowledge: ['Comparatives and basic social-role vocabulary.'],
    anticipatedMisconceptions: ['Umayya’s behaviour is not evidence that every Meccan acted the same way.', 'Social power and human value must remain separate concepts.'],
    grammarFocus: 'were getting + comparative; the most / one of the + superlative; was a center for + -ing; from/especially; when + past; started + -ing; wanted + person/thing + to + verb; became.',
    pronunciationFocus: 'Model slavery, Abyssinia, Umayya and powerful. Stress the changing degree in “getting richer” and the key words in “one of the richest and most powerful”.',
    beforeReading: ['Ask learners to distinguish “a system in a city” from “every person in a city”.'],
    duringReading: ['Find one sentence about Mecca as a slave-trading centre and one sentence about Umayya.', 'Mark the words that show Umayya’s wealth or power.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to write a system sentence and a separate character sentence.', 'End by explaining in one sentence why power does not decide dignity.'],
    lessonPlan: '4 min system/individual distinction; 13 min read/listen and evidence marking; 5 min Quick Challenge; 10 min Language Focus; 6 min comparison and dignity statement; 2 min exit.',
    discussionPoints: ['What does the chapter say about Mecca as a place?', 'What does it say specifically about Umayya?', 'Why should we not turn Umayya into a description of all Meccans?'],
    interactiveTips: ['Replay the system sentence separately from the Umayya sentence.', 'Ask learners to highlight words of degree before discussing power.', 'Use the chapter image only to identify people/settings already named in the text.'],
    differentiation: {
      strugglingLearners: 'Use two boxes labelled Mecca/system and Umayya/person, then build one sentence from each.',
      fastFinishers: 'Write four sentences using center for, one of the most, when and became without making a universal claim.'
    },
    formativeAssessment: ['Separates system evidence from individual-character evidence.', 'Uses comparative/superlative forms proportionately.'],
    expectedResponses: ['Mecca is described as a centre for buying and selling slaves.', 'Umayya was Bilal’s rich and powerful master.'],
    transferTask: 'Explain why a person with more power still has a responsibility to respect others.',
    teacherReflection: 'Did learners avoid turning one powerful character into a claim about an entire community?',
    assessmentTools: { rubric: ['System/person distinction', 'Accurate degree language', 'Source-bound claim', 'Human-dignity connection'], exitTicket: ['Write one sentence about the system and one sentence about Umayya.'] }
  },
  {
    chapter: 'Chapter 4: Bilal’s Hard Life',
    timing: '40 minutes',
    objectives: [
      'Identify Bilal’s daily work and the specific ways he is treated without respect.',
      'Explain patience without suggesting that mistreatment is acceptable.',
      'Use frequency expressions, did not, purpose with to, job was to, all day, could and had to.'
    ],
    pedagogy: 'Keep two columns throughout: Bilal’s responsibilities / others’ treatment of Bilal. Values discussion comes only after learners see that patience describes his response, not the fairness of the situation.',
    priorKnowledge: ['daily routine language and basic obligation.'],
    anticipatedMisconceptions: ['Patience is not approval of injustice.', 'Could and had to express different meanings: ability versus obligation.'],
    grammarFocus: 'always/often/every; did not + base verb; to + verb for purpose; job was to + verb; all day; could + verb; had to + verb.',
    pronunciationFocus: 'Model hatred, rude, harsh and patient. Contrast could and had to in short chunks and stress “did not respect him as a person”.',
    beforeReading: ['Ask what makes hard work different from unfair treatment.'],
    duringReading: ['Mark routine expressions around Bilal’s work.', 'Underline one sentence about what Bilal had to do and one about how people treated him.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to describe one routine, one obligation and one missing respectful action.', 'Rewrite one rude action as a respectful alternative.'],
    lessonPlan: '5 min work/treatment distinction; 12 min read/listen and two-column evidence; 5 min Quick Challenge; 10 min Language Focus; 6 min respectful rewrite; 2 min exit.',
    discussionPoints: ['What was Bilal’s job?', 'Which sentence shows disrespect rather than simply hard work?', 'How can someone be patient while still recognising that treatment is wrong?'],
    interactiveTips: ['Replay one routine sentence and one mistreatment sentence separately.', 'Use frequency words as retrieval cues during the Quick Challenge.', 'Do not role-play degrading treatment; use neutral third-person discussion.'],
    differentiation: {
      strugglingLearners: 'Use “Every day he… / He had to… / They did not… / A respectful action would be…”.',
      fastFinishers: 'Write five sentences contrasting what Bilal could do, what he had to do and how he was treated.'
    },
    formativeAssessment: ['Correctly distinguishes work, obligation and mistreatment.', 'Uses could/had to without changing their meaning.'],
    expectedResponses: ['Bilal looked after camels and worked under the hot sun.', 'He was treated rudely and without respect.'],
    transferTask: 'Turn one unfair classroom behaviour into a respectful alternative.',
    teacherReflection: 'Did learners discuss patience without normalising the mistreatment described in the chapter?',
    assessmentTools: { rubric: ['Routine evidence', 'Obligation/ability accuracy', 'Mistreatment identified', 'Respectful alternative'], exitTicket: ['Complete: “Bilal had to ____. People did not ____. A fairer action would be ____.”'] }
  },
  {
    chapter: 'Chapter 5: A New Message',
    timing: '40 minutes',
    objectives: [
      'Explain why the new message is meaningful within Bilal’s lack of money, power and freedom.',
      'Connect worship of One Allah with the chapter’s statements about fairness and equality.',
      'Use because, had to, purpose to, thought + would, no/any, heard + people + -ing, tell + person + to, must and stop + -ing.'
    ],
    pedagogy: 'Build the lesson around contrast between Bilal’s current condition and what he hears. Do not jump ahead to freedom; the chapter is about hearing and considering a message before later events.',
    priorKnowledge: ['Bilal’s work, limited power and social position from Chapters 3–4.'],
    anticipatedMisconceptions: ['Hearing the new message does not make Bilal free immediately.', 'Fairness and equality should be connected to the actual chapter wording, not expanded into unrelated claims.'],
    grammarFocus: 'because; had to + verb; to + verb for purpose; thought + would; did not have any / had no; heard + people + -ing; tell + person + to + verb; must + verb; stop + -ing.',
    pronunciationFocus: 'Model obedient, freedom, fair and equal. Practise weak forms in had to/to protect and sentence stress in “People must be fair and equal.”',
    beforeReading: ['Recall one limitation Bilal faced and ask what kind of message might matter to someone in that position.'],
    duringReading: ['Mark Bilal’s thought about money/power separately from the teachings he hears.', 'Underline the fairness/equality sentence and identify who is speaking or teaching.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to build a limitation → message → importance chain.', 'Give one fair-treatment example that does not assume the later rescue has already happened.'],
    lessonPlan: '4 min retrieval of Bilal’s situation; 13 min read/listen for limitation/message; 5 min Quick Challenge; 10 min Language Focus; 6 min significance explanation; 2 min exit.',
    discussionPoints: ['What did Bilal think he lacked?', 'What ideas did he hear?', 'Why could those ideas matter before his situation physically changed?'],
    interactiveTips: ['Replay Bilal’s internal thought and the fairness/equality statement as two separate moments.', 'Use the Quick Challenge to test whether learners can avoid jumping to later chapters.', 'Ask learners to point to the exact line that supports “fair and equal”.'],
    differentiation: {
      strugglingLearners: 'Use “Bilal had no ____. He heard ____. This mattered because ____.”',
      fastFinishers: 'Write four sentences using had to, thought would, heard + -ing and must without mentioning later freedom.'
    },
    formativeAssessment: ['Explains significance from current chapter evidence only.', 'Uses obligation/reporting language accurately.'],
    expectedResponses: ['Bilal had little money or power for freedom.', 'He heard a message about One Allah, fairness and equality.'],
    transferTask: 'Give one example of treating a weaker person fairly instead of using power against them.',
    teacherReflection: 'Did learners stay inside this chapter’s stage of the story rather than importing the later rescue?',
    assessmentTools: { rubric: ['Current-chapter evidence', 'Limitation/message relationship', 'Target language control', 'Fairness transfer'], exitTicket: ['Finish: “The new message mattered to Bilal because ____.”'] }
  },
  {
    chapter: 'Chapter 6: Visiting Abu Bakr',
    timing: '40 minutes',
    objectives: [
      'Retell Bilal’s secret journey to Abu Bakr in the correct sequence.',
      'Explain the visit as a search for understanding rather than a request for money or freedom.',
      'Use think about, decide to, feel + noun, secretly/hidden, did not want anyone to, knew that, when + past and started to.'
    ],
    pedagogy: 'Use the physical journey as a visible sequence and the purpose of the visit as a separate inference supported by his questions. This keeps movement details from replacing the chapter’s inquiry focus.',
    priorKnowledge: ['The new message Bilal hears in Chapter 5.'],
    anticipatedMisconceptions: ['Bilal is not visiting Abu Bakr to ask for rescue in this chapter.', 'Secret movement should not be exaggerated beyond the path/visit described.'],
    grammarFocus: 'think about / think deeply about; decide to + verb; feel + noun; secretly/hidden; did not want anyone to + verb; knew that + clause; when + past; started to + verb.',
    pronunciationFocus: 'Model Creator, secretly, hidden and knocked. Practise final consonants in decided/knocked and chunk “When he arrived | he knocked | and went inside.”',
    beforeReading: ['Ask what people do when they want to understand a new idea better.'],
    duringReading: ['Number the physical actions of the journey.', 'Circle the questions or learning purpose that show why Bilal visits.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus for a four-step secret-journey retell.', 'Write one sincere question a learner could ask before judging an unfamiliar idea.'],
    lessonPlan: '4 min inquiry warm-up; 12 min read/listen and sequence numbering; 6 min purpose/evidence plus Quick Challenge; 10 min Language Focus; 6 min question transfer; 2 min exit.',
    discussionPoints: ['Why did Bilal leave secretly?', 'What does he do when he reaches Abu Bakr’s home?', 'Which evidence shows that his purpose is to learn?'],
    interactiveTips: ['Pause the audio at each movement verb and let learners number the sequence.', 'Return to Bilal’s questions before discussing his motive.', 'Use the chapter image as a sequencing cue, not as evidence for unmentioned danger.'],
    differentiation: {
      strugglingLearners: 'Provide four sequence cards: decided → walked secretly → arrived/knocked → asked questions.',
      fastFinishers: 'Retell the journey in five sentences using decide to, when, did not want anyone to and started to.'
    },
    formativeAssessment: ['Retells the visit in correct order.', 'Explains inquiry motive without importing later rescue events.'],
    expectedResponses: ['Bilal secretly visited Abu Bakr to learn more about the new religion.'],
    transferTask: 'Ask one respectful question that helps you understand before forming a judgement.',
    teacherReflection: 'Did learners connect physical sequence with sincere inquiry instead of jumping ahead to freedom?',
    assessmentTools: { rubric: ['Sequence accuracy', 'Purpose supported by evidence', 'Language Focus use', 'Sincere-question transfer'], exitTicket: ['Write: “Bilal decided to ____ because he wanted to ____.”'] }
  },
  {
    chapter: 'Chapter 7: Bilal Accepts Islam',
    timing: '40 minutes',
    objectives: [
      'Explain Bilal’s decision as a choice made despite expected difficulty.',
      'Identify the evidence that he believes the religion is true before accepting it.',
      'Use tell + person + about/that, want to, happy to, after/when, could not, stay + adjective, knew that + would, after + -ing and in the end.'
    ],
    pedagogy: 'Frame the chapter as decision-making: information → expected cost → belief → choice. Learners should not describe the choice as a search for an easier life.',
    priorKnowledge: ['Bilal’s questions to Abu Bakr in Chapter 6.'],
    anticipatedMisconceptions: ['Bilal does not accept Islam because he thinks his life will become easier.', 'Expected difficulty is not the same as certainty about every later event.'],
    grammarFocus: 'tell + person + about/that; want to + verb; be happy to + verb; after/when; could not + verb; stay + adjective; knew that + would; after + -ing; in the end.',
    pronunciationFocus: 'Model truth, accept and difficult. Rehearse After, When and In the end as clear sequence markers in a three-stage retell.',
    beforeReading: ['Ask learners for a harmless example of a right choice that can still be difficult.'],
    duringReading: ['Find what Bilal learns, what difficulty he expects and what decision he makes.', 'Underline the sentence that shows his reason for accepting.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to retell information → difficulty → decision.', 'Transfer the idea to a safe everyday choice without comparing the seriousness of experiences.'],
    lessonPlan: '5 min difficult-choice warm-up; 12 min read/listen for decision stages; 5 min Quick Challenge; 10 min Language Focus; 6 min safe transfer; 2 min exit.',
    discussionPoints: ['What did Bilal believe was true?', 'What difficulty did he expect?', 'What makes the final decision evidence-based in the chapter?'],
    interactiveTips: ['Replay the sentence about expected difficulty and the final decision separately.', 'Ask learners to order three evidence strips before opening Language Focus.', 'Do not ask students to role-play persecution; keep transfer to ordinary safe choices.'],
    differentiation: {
      strugglingLearners: 'Use “He learned ____. He knew ____. In the end, he ____.”',
      fastFinishers: 'Write five sentences using after, knew that would, could not and in the end.'
    },
    formativeAssessment: ['Links the decision to belief and expected difficulty.', 'Uses time/decision language in correct sequence.'],
    expectedResponses: ['Bilal accepts Islam because he believes it is true even though he expects difficulty.'],
    transferTask: 'Describe one safe situation where doing what is right may be harder than doing what is easy.',
    teacherReflection: 'Did learners explain the decision from chapter evidence rather than from later outcomes?',
    assessmentTools: { rubric: ['Decision sequence', 'Reason supported by text', 'Time markers', 'Safe transfer'], exitTicket: ['Complete: “Bilal knew that ____, but in the end he ____.”'] }
  },
  {
    chapter: 'Chapter 8: Allah Is One',
    timing: '40 minutes',
    objectives: [
      'Identify Umayya’s pressure, his conditional offer and Bilal’s refusal.',
      'Explain steadfastness while keeping the mistreatment factual and non-graphic.',
      'Use confirmation/past questions, now + present, force + person + to, refuse, tell + person + to, if + present → will and but.'
    ],
    pedagogy: 'Keep the chapter centred on coercion versus conscience. Do not dramatise punishment; use speaker labels to show demand, condition and refusal.',
    priorKnowledge: ['Bilal’s decision in Chapter 7 and simple if–will meaning.'],
    anticipatedMisconceptions: ['The punishment should not be acted out or embellished.', 'The conditional offer belongs to Umayya and should not be presented as narrator advice.'],
    grammarFocus: 'Is ...? / Did ...?; now + present verb; force + person + to + verb; refuse; tell + person + to + verb; if + present → will + verb; but.',
    pronunciationFocus: 'Model refused, force and belief. Practise question intonation and a clear pause between condition and result in the if–will offer.',
    beforeReading: ['Set a class rule: discuss pressure, choice and response without reenacting harm.'],
    duringReading: ['Label Umayya’s demand, the freedom condition and Bilal’s answer.', 'Mark the exact sentence that shows refusal.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to rewrite the scene as demand → condition → refusal without graphic details.', 'Compare pressure with a respectful way of handling disagreement in a safe school example.'],
    lessonPlan: '4 min safety frame; 12 min read/listen with speaker labels; 6 min evidence/Quick Challenge; 10 min Language Focus; 6 min conscience-respect transfer; 2 min exit.',
    discussionPoints: ['What does Umayya want Bilal to do?', 'What condition does he offer?', 'What does Bilal refuse?'],
    interactiveTips: ['Replay the demand and refusal as separate audio segments.', 'Use a three-column chart: pressure / offer / response.', 'Skip any dramatized performance; use text-based third-person analysis only.'],
    differentiation: {
      strugglingLearners: 'Use “Umayya told Bilal to ____. If he ____, he will ____. But Bilal refused.”',
      fastFinishers: 'Write four source-faithful sentences using force, if–will, refused and but.'
    },
    formativeAssessment: ['Correct speaker attribution.', 'Explains coercion/refusal without adding violent detail.'],
    expectedResponses: ['Umayya pressures Bilal to speak well of the idols in exchange for freedom.', 'Bilal refuses and continues to say Allah is One.'],
    transferTask: 'Give one example of respecting another person’s conscience instead of pressuring them.',
    teacherReflection: 'Did the class analyse coercion and steadfastness without sensationalising the harm?',
    assessmentTools: { rubric: ['Speaker accuracy', 'Condition/refusal sequence', 'Safe treatment of content', 'Respect-for-conscience transfer'], exitTicket: ['Write one sentence showing pressure and one sentence showing refusal.'] }
  },
  {
    chapter: 'Chapter 9: Abu Bakr Saves Bilal',
    timing: '40 minutes',
    objectives: [
      'Explain how Abu Bakr moves from seeing/hearing about harm to direct intervention.',
      'Identify his justice question and the fact that rescue begins here but freedom is completed in Chapter 10.',
      'Use want + person + to, hear that, go to see, right away, ask + person + to, if + present → can, and question forms.'
    ],
    pedagogy: 'Teach the chapter as observation → justice question → intervention. Keep the chapter boundary explicit so learners do not merge rescue negotiations with the final freeing event.',
    priorKnowledge: ['The coercion and refusal in Chapter 8.'],
    anticipatedMisconceptions: ['Bilal is not yet fully freed within the opening part of this rescue sequence.', 'Abu Bakr’s question about crime is a justice challenge, not a neutral information question.'],
    grammarFocus: 'want + person + to + verb; hear that + clause; go to see; right away; ask + person + to + verb; did not want to + verb; if + present, can + verb; What did ...? / Is it ... to ...?; can + verb.',
    pronunciationFocus: 'Model rescued, crime and right away. Practise question intonation in “Is it a crime…?” and stress Abu Bakr’s action verbs.',
    beforeReading: ['Ask what safe steps a person can take after seeing someone treated unfairly.'],
    duringReading: ['Track what Abu Bakr sees/hears, what he asks and what action he takes.', 'Underline the justice question and identify what makes it more than a factual question.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to build a four-step intervention sequence.', 'End with one safe help-seeking action suitable for school.'],
    lessonPlan: '5 min safe-intervention warm-up; 12 min read/listen for action sequence; 5 min Quick Challenge; 10 min Language Focus; 6 min justice/help transfer; 2 min exit.',
    discussionPoints: ['What makes Abu Bakr act?', 'Why is “Is it a crime…?” important?', 'What part of Bilal’s rescue is still unfinished at the end of this chapter?'],
    interactiveTips: ['Pause at the justice question and ask learners what answer the wording expects.', 'Use an action-arrow sequence rather than reenacting the scene.', 'Keep Chapter 10 hidden from the explanation until learners identify what has and has not happened yet.'],
    differentiation: {
      strugglingLearners: 'Use “He heard that ____. He went to ____. He asked ____. He wanted ____.”',
      fastFinishers: 'Write five sentences using hear that, right away, asked to and one justice question.'
    },
    formativeAssessment: ['Identifies the intervention sequence.', 'Keeps rescue and final freedom as two stages.'],
    expectedResponses: ['Abu Bakr challenges the injustice and asks to buy Bilal so he can rescue him.'],
    transferTask: 'Propose one safe way to seek adult help when someone is treated unfairly.',
    teacherReflection: 'Did learners understand intervention as an action sequence and preserve the chapter boundary?',
    assessmentTools: { rubric: ['Action sequence', 'Justice-question interpretation', 'Chapter-boundary accuracy', 'Safe help-seeking transfer'], exitTicket: ['Complete: “Abu Bakr acted because ____. He asked ____.”'] }
  },
  {
    chapter: 'Chapter 10: A Free Muslim',
    timing: '40 minutes',
    objectives: [
      'Sequence the agreement, purchase, removal of the rock and immediate freeing of Bilal.',
      'Explain why Abu Bakr’s help restores freedom instead of creating new ownership.',
      'Use agree to, if + past → would, first/after/finally, with + noun, now/no longer/became and could…but did not.'
    ],
    pedagogy: 'Use sequence language to make the ethical turning point visible: purchase is a means of rescue, not a new final status. Learners must state what happens after the purchase.',
    priorKnowledge: ['Abu Bakr’s intervention and request to buy Bilal in Chapter 9.'],
    anticipatedMisconceptions: ['Abu Bakr does not keep Bilal enslaved after buying him.', 'The price detail should not become the moral focus of the lesson.'],
    grammarFocus: 'agree to + verb; if + past → would + verb; finally/first/after; with + noun for manner; now/no longer/became; could + verb, but did not.',
    pronunciationFocus: 'Model freedom, agreed and finally. Stress First, After and Finally in the rescue sequence and contrast “could…, but did not…”.',
    beforeReading: ['Retrieve the unfinished rescue from Chapter 9 and ask what still needs to happen for freedom to be complete.'],
    duringReading: ['Number agreement → payment → removal of rock → freeing.', 'Mark the sentence that proves Abu Bakr does not keep Bilal as a slave.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to retell the rescue in sequence.', 'Explain in one sentence how help can restore another person’s control over their own life.'],
    lessonPlan: '4 min retrieval; 12 min read/listen and sequence numbering; 6 min proof of freedom/Quick Challenge; 10 min Language Focus; 6 min dignity transfer; 2 min exit.',
    discussionPoints: ['What happened first, after the agreement and finally?', 'Which line proves Bilal became free?', 'Why is freeing him different from simply changing masters?'],
    interactiveTips: ['Replay the final freedom sentence after learners hear the purchase sentence.', 'Use sequence cards for First/After/Finally.', 'Keep the amount of gold as supporting detail, not the main discussion target.'],
    differentiation: {
      strugglingLearners: 'Use four picture/text steps and the frames “First… / After… / Finally… / Now he…”.',
      fastFinishers: 'Write five connected sentences using agreed to, if…would, finally and could…but did not.'
    },
    formativeAssessment: ['Retells the rescue in correct sequence.', 'States explicitly that Bilal is freed rather than re-owned.'],
    expectedResponses: ['Abu Bakr buys Bilal to rescue him and then frees him.'],
    transferTask: 'Explain why good help should increase another person’s dignity and independence.',
    teacherReflection: 'Did learners identify freedom as the endpoint of the chapter rather than purchase as the endpoint?',
    assessmentTools: { rubric: ['Sequence accuracy', 'Freedom endpoint', 'Target language', 'Dignity interpretation'], exitTicket: ['Write: “First ____. After that ____. Finally Bilal ____.”'] }
  },
  {
    chapter: 'Chapter 11: The First Call to Prayer',
    timing: '40 minutes',
    objectives: [
      'Explain the transition from Hijrah to Bilal’s trusted public responsibility.',
      'Identify why the chapter’s main change is social trust/responsibility rather than wealth.',
      'Use after, became, want to/want + person + to, allow/tell + person + to, even when, adverbs and that is why/so.'
    ],
    pedagogy: 'Compare Bilal’s earlier lack of control with his new public responsibility, but keep the comparison evidence-based. The key classroom question is what changed in role and trust.',
    priorKnowledge: ['Bilal is now free after Chapter 10.'],
    anticipatedMisconceptions: ['The chapter’s main transformation is not that Bilal becomes rich.', 'Do not add details about the Adhan beyond what the chapter provides.'],
    grammarFocus: 'after + clause/time/event; became; want to / want + person + to; allow + person + to; tell + person + to; even when; adverb for manner; that is why / so.',
    pronunciationFocus: 'Model Hijrah, Medina and Adhan. Chunk “After the Hijrah…” and stress the reason-result relation in “That is why…”.',
    beforeReading: ['Ask what qualities make someone suitable for an important public responsibility.'],
    duringReading: ['Mark the move to Medina, the choice of Bilal and the task he receives.', 'Find language that shows trust or responsibility.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to write a role-change sequence.', 'Connect the chapter to one classroom responsibility that should depend on trust and ability.'],
    lessonPlan: '5 min responsibility warm-up; 12 min read/listen for role change; 5 min Quick Challenge; 10 min Language Focus; 6 min trust/ability transfer; 2 min exit.',
    discussionPoints: ['What changed after the Hijrah?', 'Why is this role a sign of trust?', 'What does the chapter show about status and responsibility?'],
    interactiveTips: ['Replay the sentence in which Bilal is chosen for the task.', 'Use “before/after” verbal comparison without inventing additional biography.', 'Ask learners to justify any claim about trust with a chapter action.'],
    differentiation: {
      strugglingLearners: 'Use “After ____, Bilal became ____. He was told to ____.”',
      fastFinishers: 'Write four sentences using after, became, told to and that is why.'
    },
    formativeAssessment: ['Explains the role change accurately.', 'Connects responsibility to trust/ability rather than wealth.'],
    expectedResponses: ['After the Hijrah, Bilal is chosen to call people to prayer.'],
    transferTask: 'Choose one class responsibility and explain which ability or trustworthy action should matter for giving it.',
    teacherReflection: 'Did learners focus on role, trust and responsibility instead of replacing the chapter with a success story about wealth?',
    assessmentTools: { rubric: ['Role-change evidence', 'Reason-result language', 'Responsibility interpretation', 'Realistic transfer'], exitTicket: ['Finish: “Bilal became ____. That is why/So ____.”'] }
  },
  {
    chapter: 'Chapter 12: Prayer Is Better Than Sleep',
    timing: '40 minutes',
    objectives: [
      'Identify the morning Adhan detail and the chapter’s equality teaching.',
      'Explain how the two parts connect through Bilal’s respected role and rejection of superiority.',
      'Use used to, added, which means, every morning, pleased with, tell + person + to, all, better than, it is wrong to and because of.'
    ],
    pedagogy: 'Do not teach the morning-Adhan detail and equality paragraph as two unrelated mini-lessons. Build a bridge from Bilal’s public role to the chapter’s explicit rejection of judging human worth by skin colour.',
    priorKnowledge: ['Bilal’s role in the Adhan from Chapter 11.'],
    anticipatedMisconceptions: ['The chapter does not say one skin colour is better than another.', 'The equality teaching must not be reduced to a grammar comparison exercise.'],
    grammarFocus: 'used to + verb; added; which means; every morning; pleased with; tell + person + to + verb; all + plural noun; better than; it is wrong to + verb; because of + noun.',
    pronunciationFocus: 'Model morning, pleased and better than. Stress the contrasted items in better than and pause before the explanation after which means.',
    beforeReading: ['Retrieve what Bilal does in Chapter 11, then ask what a repeated morning practice might add to that role.'],
    duringReading: ['Mark the morning phrase and its explanation.', 'Underline every sentence that rejects superiority based on skin colour or origin.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to explain the morning phrase and one equality statement.', 'Turn the equality lesson into one specific anti-discrimination action at school.'],
    lessonPlan: '4 min retrieval; 12 min read/listen for two linked parts; 6 min evidence/Quick Challenge; 10 min Language Focus; 6 min equality action; 2 min exit.',
    discussionPoints: ['What did Bilal add in the morning?', 'What does the chapter say about being “better than” another person?', 'How are public responsibility and equal human value connected here?'],
    interactiveTips: ['Replay the morning phrase and then the equality paragraph; ask learners to identify the change in topic.', 'Use which means as a signal to pause and paraphrase carefully.', 'Do not ask learners to rank identities in examples; use equal-treatment scenarios instead.'],
    differentiation: {
      strugglingLearners: 'Use “Every morning ____. Which means ____. It is wrong to ____ because of ____.”',
      fastFinishers: 'Write five sentences connecting used to, which means, better than and because of.'
    },
    formativeAssessment: ['Explains both parts without treating them as unrelated.', 'Uses comparison language without reproducing discriminatory ranking.'],
    expectedResponses: ['Bilal adds “Prayer is better than sleep” to the morning Adhan.', 'The chapter teaches that skin colour does not make one person better than another.'],
    transferTask: 'Write one concrete anti-discrimination action suitable for school.',
    teacherReflection: 'Did learners connect the Adhan detail with the equality message while keeping human-worth discussion respectful?',
    assessmentTools: { rubric: ['Two-part chapter understanding', 'Equality evidence', 'Comparison language accuracy', 'Concrete school action'], exitTicket: ['Complete: “It is wrong to judge a person because of ____.”'] }
  },
  {
    chapter: 'Chapter 13: Everyone Is Equal',
    timing: '40 minutes',
    objectives: [
      'Synthesize the chapter’s final equality lesson, Bilal’s grief and move to Damascus, and the closing statement about heart and good actions.',
      'Distinguish historical background from the chapter’s claim about human worth.',
      'Use not better than, because of, the only way to…is to…, too + adjective + to, start + -ing, when, could not, ask/allow + person + to, it is unfair to and what matters is.'
    ],
    pedagogy: 'Treat the final chapter as synthesis, not as a list of unrelated end facts. Sequence grief/movement clearly, then use the final lesson to revisit the dignity thread from Chapter 1.',
    priorKnowledge: ['The equality teaching and Bilal’s public role from Chapters 11–12.'],
    anticipatedMisconceptions: ['The chapter does not say historical background is unimportant; it says background must not determine human value.', 'Do not turn Bilal’s grief into a dramatic performance.'],
    grammarFocus: 'no/not better than; because of; the only way to ... is to ...; too + adjective + to + verb; start + -ing; when; could not + verb; ask + person + to; allow + person + to; it is unfair to + verb; what matters is.',
    pronunciationFocus: 'Model nationality, Damascus, unfair and matters. Use contrastive stress in “not better than” and pause in “What matters is | the heart and good actions.”',
    beforeReading: ['Ask learners to recall the equality message from Chapter 1 in one sentence before reading the ending.'],
    duringReading: ['Track the sequence after the Prophet’s death and Bilal’s move.', 'Mark the final statements about race, nationality, past, heart and good actions.'],
    afterReading: ['Complete the Quick Challenge.', 'Use Language Focus to build a final four-sentence synthesis.', 'Compare the Chapter 1 dignity statement with the Chapter 13 closing lesson using only book evidence.', 'Move to Knowledge Check, Vocabulary Challenge, Language Review and the Final Challenge as separate whole-book stages.'],
    lessonPlan: '5 min whole-book retrieval; 12 min read/listen for ending sequence and final lesson; 5 min Quick Challenge; 10 min Language Focus; 6 min Chapter 1↔13 synthesis; 2 min exit.',
    discussionPoints: ['Why does Bilal leave Medina in the chapter?', 'What does the ending say does not determine human worth?', 'How does Chapter 13 complete the dignity idea introduced in Chapter 1?'],
    interactiveTips: ['Replay the grief/movement passage separately from the final lesson paragraph.', 'Use a Chapter 1 / Chapter 13 evidence pair rather than a general whole-book discussion.', 'Keep the final review pages in their actual order and use them after the chapter, not as substitutes for Chapter 13 support.'],
    differentiation: {
      strugglingLearners: 'Provide four prompts: after the death / could not / moved to / what matters is.',
      fastFinishers: 'Write six connected sentences linking Chapter 1 and Chapter 13 with not better than, because of and what matters is.'
    },
    formativeAssessment: ['Accurate ending sequence.', 'Connects opening and closing dignity messages without adding outside claims.'],
    expectedResponses: ['Bilal leaves Medina for Damascus after deep grief.', 'The chapter says skin colour, nationality and past do not determine human worth; what matters is the heart and good actions.'],
    transferTask: 'Write one personal commitment to treat someone fairly regardless of background and label it as your own application.',
    teacherReflection: 'Did the final chapter function as evidence-based synthesis rather than a generic values lesson?',
    assessmentTools: { rubric: ['Ending-sequence accuracy', 'Opening/closing synthesis', 'Language Focus use', 'Story/application distinction'], exitTicket: ['Write one sentence beginning “What matters is…” and one equality action of your own.'] }
  }
];

export const meccaA2TeacherGuideMetadata: TeacherGuideMetadata = {
  title: 'Bilal ibn Rabah and Mecca (A2) — Teacher Guide',
  subtitle: 'TYMM-aligned chapter-by-chapter guide connected to the active Language Focus',
  level: 'A2',
  estimatedDuration: '13 × 40 minutes',
  targetAudience: 'Lower-secondary learners studying English at approximately CEFR A2.',
  targetLearners: 'Learners who can follow short supported narratives, locate direct evidence and produce short spoken or written responses with scaffolding.',
  purpose: 'Teach Bilal ibn Rabah’s story through source-faithful comprehension, listening, chapter-specific Language Focus, short production, review and values shown through observable action.',
  approachDesc: `Use TYMM YDAB1–YDAB4 in an evidence-first sequence: establish story meaning, complete the chapter comprehension check, analyse the actual Language Focus, then transfer one or two patterns into short A2 production. Each Chapter Support section is tied to that chapter’s own event, evidence, misconception and value action. See ${TYMM_FOREIGN}.`,
  assessmentEvidence: 'Chapter Quick Challenges, evidence checks, Language Focus tasks, chapter-specific exit tickets, short speaking/writing transfer, Knowledge Check, Vocabulary Challenge, Language Review and Final Challenge.',
  assessmentOverview: { formative: ['Chapter Quick Challenge', 'Text-evidence checks', 'Language Focus guided practice', 'Chapter-specific speaking/writing transfer', 'Exit tickets', 'Knowledge Check', 'Vocabulary Challenge', 'Language Review'], summative: ['Final Challenge'] },
  readingFramework: { before: 'Activate only the prerequisite needed by the individual chapter.', during: 'Read/listen for that chapter’s sequence, evidence, speaker or cause-result relationship.', after: 'Quick Challenge → actual Chapter Language Focus → chapter-specific A2 transfer.' },
  vocabularyApproach: { selection: 'Prioritise Word Notes and only words required by the chapter task.', method: 'Infer from chapter context before direct definition.', recycling: 'Reuse in Language Focus production, exit tickets and whole-book review.' },
  grammarApproach: 'Teach the language relationship that actually appears in each chapter and return to the original sentence before explaining form.',
  skillsFocus: { reading: 'YDAB2: locate explicit evidence, sequence and simple relationships.', listening: 'YDAB1: listen for gist, then replay for chapter evidence and target language.', speaking: 'YDAB3: produce short evidence-based A2 responses.', writing: 'YDAB4: write short connected sentences using chapter language.' },
  valuesFocus: ['D1 Justice', 'D5 Sensitivity', 'D6 Honesty', 'D9 Compassion', 'D10 Humility', 'D11 Freedom', 'D12 Patience', 'D14 Respect', 'D16 Responsibility', 'D20 Helpfulness'],
  differentiationNotes: 'Scaffold the exact chapter task with sentence frames, selected evidence and oral rehearsal; extend through fuller explanation rather than outside historical or religious information.',
  sensitiveNotes: { title: 'Content safeguards', notes: ['Handle slavery, coercion and mistreatment calmly and without role-play or graphic elaboration.', 'Keep speaker claims distinct from narrator statements.', 'Treat learner value transfer as personal application, not as a new religious or historical fact.'] },
  valuesEducation: { title: 'TYMM Values in Action', description: 'Connect values to concrete actions supported by each chapter rather than repeating the same abstract values prompt.', items: [{ label: 'D14 Respect / D11 Freedom', value: 'Human dignity and freedom are made visible through equal treatment and rejection of degrading control.' }, { label: 'D1 Justice / D20 Helpfulness', value: 'Justice becomes action through fair intervention and useful help.' }, { label: 'D12 Patience / D6 Honesty', value: 'Steadfastness and honest inquiry are tied to choices shown in the story.' }], questions: ['Which exact story action supports this value?', 'What is your own age-appropriate application?', 'Which part is story evidence and which part is personal transfer?'] }
};
