import type { StudentGuideMetadata, StudentGuideSection, TeacherGuideSection } from '../../../../types';
import { mosesA2Pages } from './pages';
import { mosesA2TeacherGuide } from './teacherGuide';
import { mosesA2QuickChallengesPolished } from './exercises';

export const mosesA2StudentGuideMetadata: StudentGuideMetadata = {
  title: 'Moses A2 — Self-Study Guide', level: 'A2', language: 'English', estimatedStudyTime: '16 × 20–25 minutes',
  whoIsThisFor: 'A2 learners studying the story independently.',
  learningGoals: ['understand the main events and reasons', 'find evidence in the chapter', 'reuse key vocabulary', 'practice listening, speaking and short writing', 'turn values into practical actions'],
  recommendedUse: ['read once for meaning', 'listen once for key events', 'complete the Quick Challenge', 'correct wrong answers by finding evidence', 'finish with one spoken or written retrieval sentence'],
};

export const mosesA2SelfStudyGuide: TeacherGuideSection[] = [
  { chapter: 'Chapter 1: The Cruel King', timing: '20 minutes', objectives: ['Identify the setting and groups.', 'Explain Pharaoh’s fear with evidence.', 'Use cruel/ruler/believe.'], pedagogy: 'Read → find cause → say one evidence sentence.', lessonPlan: 'Read once. Listen for Pharaoh’s fear. Find the sentence explaining his unfair treatment. Complete Quick Challenge 1. Say: “Pharaoh was unfair because…”', discussionPoints: ['What did Pharaoh fear?', 'Which action was unfair?', 'What fair action could a powerful person take?'], differentiation: { fastFinishers: 'Write a four-sentence fair/unfair comparison.', strugglingLearners: 'Use: “Pharaoh was __ because __.”' }, interactiveTips: ['Use both hotspots.', 'If wrong, reread the final sentences before retrying.'] },
  { chapter: 'Chapter 2: The King’s Dream', timing: '20 minutes', objectives: ['Sequence dream, explanation and order.', 'Understand fear → cruel action.', 'Reuse dream/heartless.'], pedagogy: 'Short sequence retrieval.', lessonPlan: 'Read/listen. Write three words: dream → explanation → order. Complete Quick Challenge 2. Retell the sequence aloud with then.', discussionPoints: ['What was the dream?', 'What happened after its explanation?', 'How can fear lead to a bad choice?'], differentiation: { fastFinishers: 'Write three first/then/finally sentences.', strugglingLearners: 'Say the three events using single phrases first.' }, interactiveTips: ['Replay the magicians’ explanation.', 'Check the cause, not only the dream detail.'] },
  { chapter: 'Chapter 3: A Baby in a Basket', timing: '20 minutes', objectives: ['Identify problem, instruction and action.', 'Use basket/protect/worried.', 'See trust as action.'], pedagogy: 'Evidence + action reflection.', lessonPlan: 'Read/listen. Find what Allah instructed. Complete the only Tap & Reveal Quick Challenge. Close the answer and retell the action from memory.', discussionPoints: ['Why was the mother worried?', 'What did she do?', 'Which action shows trust?'], differentiation: { fastFinishers: 'Write four factual sentences from the mother’s point of view.', strugglingLearners: 'Use basket → Nile → sister as three cues.' }, interactiveTips: ['Use basket/Nile hotspots.', 'Do not reveal until you answer first.'] },
  { chapter: 'Chapter 4: The Queen’s Love', timing: '20 minutes', objectives: ['Describe Asiye with evidence.', 'Compare her with Pharaoh.', 'Recognize care through action.'], pedagogy: 'Character evidence.', lessonPlan: 'Read/listen. Find two actions by Asiye. Complete Quick Challenge 4. Say one comparison: “Asiye was different from Pharaoh because…”', discussionPoints: ['What did Asiye believe?', 'What did she do for Moses?', 'How can care be shown in action?'], differentiation: { fastFinishers: 'Write three comparison sentences.', strugglingLearners: 'Choose kind/cruel for each character and explain one choice.' }, interactiveTips: ['Use Asiye hotspot.', 'Point to an action before naming a value.'] },
  { chapter: 'Chapter 5: Back to His Mother', timing: '20 minutes', objectives: ['Follow how Moses returned to his mother.', 'Notice his growth.', 'Use protector/safe/weak.'], pedagogy: 'Transition retrieval.', lessonPlan: 'Read/listen. Retell the return in three steps. Complete Quick Challenge 5. Say one sentence about young Moses.', discussionPoints: ['How did he return?', 'What changed as he grew?', 'How can we help someone weaker safely?'], differentiation: { fastFinishers: 'Make a five-event oral timeline.', strugglingLearners: 'Complete: “Moses returned to __.” “He grew up in __.”' }, interactiveTips: ['Use mother and bazaar hotspots.', 'Retry after finding the transition sentence.'] },
  { chapter: 'Chapter 6: A Mistake in the Bazaar', timing: '25 minutes', objectives: ['Understand accidental action vs intention.', 'Identify regret and forgiveness.', 'Practice responsibility language.'], pedagogy: 'Sensitive evidence recovery.', lessonPlan: 'Read calmly. Find “accidentally”, Moses’s feeling and his dua. Complete Quick Challenge 6. Say one responsible action after a mistake.', discussionPoints: ['Why was Moses sorry?', 'What did he ask Allah?', 'What can a person do after a mistake?'], differentiation: { fastFinishers: 'Write three responsible next steps.', strugglingLearners: 'Use: “It was accidental. Moses felt __. He asked __.”' }, interactiveTips: ['Use event and warning hotspots separately.', 'Do not focus on violent detail.'] },
  { chapter: 'Chapter 7: Escape to Midian', timing: '20 minutes', objectives: ['Trace Egypt → Midian → well.', 'Explain why Midian was safer.', 'Reuse guided/thirsty/well.'], pedagogy: 'Route-and-reason retrieval.', lessonPlan: 'Read/listen. Draw or imagine three route points. Find the sentence about who did not rule Midian. Complete Quick Challenge 7.', discussionPoints: ['Why did Moses leave?', 'Why was Midian safer?', 'What did he need on arrival?'], differentiation: { fastFinishers: 'Give a six-sentence journey retell.', strugglingLearners: 'Use three labels: Egypt, Midian, well.' }, interactiveTips: ['Use Midian/well hotspots.', 'Find the safety reason before answering.'] },
  { chapter: 'Chapter 8: The Two Sisters', timing: '20 minutes', objectives: ['Identify the sisters’ problem.', 'Explain Moses’s help.', 'Connect kindness to useful action.'], pedagogy: 'Problem → need → help.', lessonPlan: 'Read/listen to the dialogue. Answer why they waited and what Moses did. Complete Quick Challenge 8. Speak one useful helping action from daily life.', discussionPoints: ['Why did they wait?', 'How did Moses help?', 'What makes help useful?'], differentiation: { fastFinishers: 'Write a four-line factual dialogue.', strugglingLearners: 'Use: “They needed help because __.”' }, interactiveTips: ['Replay the dialogue.', 'Use the helping hotspot.'] },
  { chapter: 'Chapter 9: A New Life', timing: '20 minutes', objectives: ['Sequence invitation, job and new life.', 'Explain why Moses accepted.', 'Recognize gratitude/work.'], pedagogy: 'Motivation and sequence.', lessonPlan: 'Read/listen. Find “because he was a stranger”. Complete Quick Challenge 9. Retell four events with later/after.', discussionPoints: ['Why did Şuayb invite him?', 'Why accept the job?', 'How can gratitude be shown?'], differentiation: { fastFinishers: 'Write a five-sentence summary.', strugglingLearners: 'Order helped → invited → worked → married.' }, interactiveTips: ['Use both hotspots.', 'Listen for the reason sentence.'] },
  { chapter: 'Chapter 10: The Voice on the Mountain', timing: '25 minutes', objectives: ['Sequence fire, climb, call and sign.', 'Identify the central message.', 'Practice respectful listening.'], pedagogy: 'Source-faithful sacred-scene reading.', lessonPlan: 'Read/listen slowly. Note four events. Complete Quick Challenge 10. Retell without adding details not in the text.', discussionPoints: ['Why go to the fire?', 'What message did Moses hear?', 'What happened to the stick?'], differentiation: { fastFinishers: 'Retell in six past-simple sentences.', strugglingLearners: 'Use four event cues and first/then.' }, interactiveTips: ['Use the fire hotspot for setting.', 'Do not imagine or describe Allah visually.'] },
  { chapter: 'Chapter 11: The Signs of Allah', timing: '20 minutes', objectives: ['Identify the hand sign and Harun’s role.', 'Explain the mission.', 'Reuse sign/prophet/throne.'], pedagogy: 'Mission + support retrieval.', lessonPlan: 'Read/listen. Find the sign, mission and companion. Complete Quick Challenge 11. Say one sentence about how Harun supported Moses.', discussionPoints: ['What sign appeared?', 'Where was Moses sent?', 'Who went with him?'], differentiation: { fastFinishers: 'Write three mission sentences.', strugglingLearners: 'Complete: “His hand __. He went to __. Harun went __ him.”' }, interactiveTips: ['Use both hotspots.', 'Replay the mission line.'] },
  { chapter: 'Chapter 12: The King’s Magicians', timing: '20 minutes', objectives: ['Identify the message and signs.', 'Recognize Pharaoh’s rejection.', 'Separate story description from Pharaoh’s claim.'], pedagogy: 'Speaker-and-claim reading.', lessonPlan: 'Read/listen. Make two headings: story / Pharaoh. Put “miracles” and “magic” under the correct speaker. Complete Quick Challenge 12.', discussionPoints: ['What did Moses say?', 'What did the story call the signs?', 'What did Pharaoh call them?'], differentiation: { fastFinishers: 'Write two contrast sentences.', strugglingLearners: 'Say “story” or “Pharaoh” for teacher/self-read statements.' }, interactiveTips: ['Use snake/king hotspots.', 'Focus on response, not repeating the snake detail.'] },
  { chapter: 'Chapter 13: The Magicians Believe', timing: '25 minutes', objectives: ['Identify the turning point.', 'Compare magicians and Pharaoh.', 'Connect evidence with changing a response.'], pedagogy: 'Response comparison.', lessonPlan: 'Read/listen. Find what the magicians did and what Pharaoh did. Complete Quick Challenge 13. Say: “The magicians __, but Pharaoh __.”', discussionPoints: ['Why did they believe?', 'Why did Pharaoh refuse?', 'What can we do when evidence corrects us?'], differentiation: { fastFinishers: 'Write four comparison sentences.', strugglingLearners: 'Use the but sentence frame.' }, interactiveTips: ['Use both hotspots.', 'Find response evidence before naming arrogance/belief.'] },
  { chapter: 'Chapter 14: The Night Journey', timing: '20 minutes', objectives: ['Explain secret night departure.', 'Explain slow caravan movement.', 'Practice prediction from evidence.'], pedagogy: 'Journey cause-result.', lessonPlan: 'Read/listen. Find why they left at night and why they moved slowly. Complete Quick Challenge 14. Predict the next problem from the final sentence.', discussionPoints: ['Why secret?', 'Why slow?', 'What danger appears?'], differentiation: { fastFinishers: 'Write three facts plus one prediction.', strugglingLearners: 'Complete: “They left at __. They moved slowly because __.”' }, interactiveTips: ['Use both hotspots.', 'Replay old people/children sentence.'] },
  { chapter: 'Chapter 15: The Sea Opens', timing: '25 minutes', objectives: ['Identify problem, instruction and rescue.', 'Sequence the crossing.', 'Compare fear and calm trust.'], pedagogy: 'Problem → response → rescue.', lessonPlan: 'Read/listen. State “sea ahead / army behind”. Find Allah’s instruction. Complete Quick Challenge 15. Retell the crossing in three steps.', discussionPoints: ['Why panic?', 'What did Moses say?', 'What action changed the situation?'], differentiation: { fastFinishers: 'Write a five-sentence problem-solution summary.', strugglingLearners: 'Use army behind → sea ahead → road opens.' }, interactiveTips: ['Use sea/water-wall hotspots.', 'Leave full ending sequence for review.'] },
  { chapter: 'Chapter 16: The Cruel King Died in the Water', timing: '25 minutes', objectives: ['Retell the final events.', 'Find the two stated lessons.', 'Connect dignity/freedom to action.'], pedagogy: 'Whole-story retrieval and value transfer.', lessonPlan: 'Read/listen. Find the two final lesson sentences. Complete Quick Challenge 16. Do the Retrieval Review, then the Final Challenge. Correct each error by returning to evidence.', discussionPoints: ['What happened after Pharaoh entered?', 'What lessons are stated?', 'What action respects another person’s dignity?'], differentiation: { fastFinishers: 'Give a six-event whole-story summary.', strugglingLearners: 'Order five major events, then reread the final two sentences.' }, interactiveTips: ['Use final hotspots.', 'Do review before Final Challenge so retrieval is supported.'] },
];

const valueActions = [
  'Fairness — use strength fairly and protect someone weaker.',
  'Responsible decisions — check facts before acting from fear.',
  'Trust with action — combine hope with one safe practical step.',
  'Mercy — protect someone who needs care.',
  'Care — help a younger or weaker person feel safe.',
  'Responsibility — stop, tell the truth, seek help and repair what can be repaired.',
  'Helpfulness — notice who may need help before acting.',
  'Service — offer useful help without showing off.',
  'Gratitude — respond to help through useful contribution.',
  'Attentive listening — stop, listen carefully and repeat an important instruction before acting.',
  'Responsible use of ability — use an ability or resource for a helpful purpose.',
  'Source awareness — say who made a claim before repeating it.',
  'Openness to evidence — change an answer when clear evidence changes what you know.',
  'Careful planning — include children, older people and slower members in a group plan.',
  'Calm action under pressure — identify the next safe instruction before reacting to fear.',
  'Human dignity — respect another person’s freedom and rights.',
];

const storyPages = mosesA2Pages.filter(page => page.type === 'story').slice(0, 16);
const baseGuide = mosesA2SelfStudyGuide;

export const mosesA2SelfStudyGuidePreview: TeacherGuideSection[] = baseGuide.map((section, index) => {
  const page = storyPages[index];
  const teacher = mosesA2TeacherGuide[index];
  const quick = mosesA2QuickChallengesPolished[index + 1] ?? page?.exercises?.[0];
  const words = (page?.vocabulary || []).slice(0, 5).map(item => item.word);
  const hotspots = (page?.hotspots || []).map(item => item.title);
  const valueAction = valueActions[index];
  const isSensitive = [1, 5, 15].includes(index);

  return {
    ...section,
    grammarFocus: teacher?.grammarFocus || 'Notice one useful pattern in the real Language Focus after understanding the chapter.',
    pronunciationFocus: teacher?.pronunciationFocus || (words.length ? words.slice(0, 3).join(', ') : undefined),
    whatToNotice: [
      ...(section.objectives || []).slice(0, 2),
      ...(hotspots.length ? [`Use the real hotspot(s) as evidence anchors: ${hotspots.join(', ')}.`] : []),
      quick?.question ? `The Quick Challenge asks: ${quick.question}` : 'Notice the question in the current Quick Challenge.',
    ],
    readListen: [
      'Listen once for the main event without stopping at every unknown word.',
      'Read again in 2–4-line parts and mark the sentence that answers the current chapter question.',
      isSensitive ? 'Keep the retelling calm and age-appropriate; focus on cause, consequence, responsibility and the lesson rather than graphic detail.' : 'Keep the retelling tied to the source text.',
    ],
    findAnswerInStory: [
      quick?.question ? `Answer “${quick.question}” from memory first, then find the exact supporting sentence.` : 'Answer from memory first, then locate the supporting sentence.',
      'Use only the current chapter unless a review task explicitly asks you to connect chapters.',
    ],
    vocabularyInContext: words.length
      ? [`Choose 3–5 source words: ${words.join(', ')}.`, 'Guess from the story sentence first, check the definition, say the word, then reuse one word in a short sentence.']
      : ['Choose 3–5 words from the current chapter and learn them in context.'],
    quickChallengeGuide: quick
      ? `Try ${quick.title || 'the Quick Challenge'} before reading feedback. ${quick.question || ''}`.trim()
      : 'Try the real current-page activity before reading feedback.',
    wrongAnswerSupport: [
      quick?.feedback?.incorrect || 'Use the retry hint and return to the related sentence.',
      'Explain why the corrected answer fits the text, then try again.',
    ],
    selfCheck: [
      'Can I tell the main event in one or two sentences?',
      words.length ? `Can I understand and use at least three of these words: ${words.slice(0, 3).join(', ')}?` : 'Can I use three chapter words?',
      `Can I understand or use this language focus: ${teacher?.grammarFocus || 'one real pattern from the chapter'}?`,
      'Can I support my answer with evidence and name my next step?',
    ],
    useWhatYouLearned: valueAction,
    reflectionPrompt: teacher?.discussionPoints?.[teacher.discussionPoints.length - 1] || section.discussionPoints?.[0] || 'What did you learn and what will you do next?',
    assessmentTools: {
      rubric: ['Main idea', '3–5 source words', 'One Language Focus pattern', 'Evidence and self-correction', '2–4 sentence production'],
      exitTicket: ['One fact', 'One language pattern', 'One value/action', 'My next step'],
    },
  };
});

export const mosesA2StudentGuideSectionsPreview: StudentGuideSection[] = [
  { title: '1. Start With a Goal', icon: 'Target', text: 'Choose one small goal before each of the sixteen story chapters.', points: ['Main idea', '3–5 words', 'One Language Focus pattern', 'One repaired mistake', 'One value/action'] },
  { title: '2. Preview', icon: 'Eye', text: 'Use the chapter title, image and real hotspots to make one simple prediction.', points: ['Predict one idea', 'Use only real page features'] },
  { title: '3. Listen for Meaning', icon: 'Ear', text: 'Listen once for the main event, then listen again while following the text.', points: ['Gist first', 'Evidence second', 'Repeat one short sentence'] },
  { title: '4. Read and Find Evidence', icon: 'BookOpen', text: 'Read 2–4 lines at a time and locate the sentence that supports your answer.', points: ['What happened?', 'Why?', 'What happened next?', 'Which sentence proves it?'] },
  { title: '5. Language Focus', icon: 'Compass', text: 'The preview book contains Language Focus activities. Use them after the story meaning is clear.', points: ['Notice the real example', 'Understand its meaning', 'Make one short new sentence'] },
  { title: '6. Vocabulary', icon: 'BookOpen', text: 'Learn 3–5 source words in context, not as a long isolated list.', points: ['Guess', 'Check', 'Say', 'Reuse'] },
  { title: '7. Quick Challenge and Repair', icon: 'CheckCircle', text: 'Try first, read feedback second, return to evidence, then retry.', points: ['Try', 'Check', 'Find proof', 'Repair', 'Try again'] },
  { title: '8. Say or Write', icon: 'PenTool', text: 'Finish with 2–4 simple sentences that show what you understood.', points: ['One fact', 'One language sentence', 'One short reflection'] },
  { title: '9. Need More Help?', icon: 'HelpCircle', text: 'Change the strategy, not the learning goal.', points: ['Real hotspot', 'Short replay', '2–3 lines', 'Three words', 'Sentence frame'] },
  { title: '10. Ready for a Challenge?', icon: 'Stars', text: 'Deepen the chapter using evidence and connected language.', points: ['3–5 connected sentences', 'Retell with sequence words', 'Explain with evidence'] },
  { title: '11. Values in Action', icon: 'Heart', text: 'Connect the story-supported value with one observable action.', points: ['Fairness', 'Responsibility', 'Helpfulness', 'Mercy', 'Gratitude', 'Human dignity'] },
  { title: '12. Review and Final', icon: 'Clock', text: 'After Chapter 16, use the real review pages in the preview book.', points: ['Knowledge Check', 'Vocabulary Challenge', 'Language Review', 'Master Glossary Parts 1–2', 'Final Challenge'] },
];

export const mosesA2StudentGuideMetadataPreview: StudentGuideMetadata = {
  title: 'Self-Study Guide — Prophet Moses (A2)',
  subtitle: 'Understand • Notice • Use • Check • Repair • Reflect',
  level: 'A2',
  language: 'English',
  estimatedStudyTime: '20–25 minutes per story chapter plus final review',
  whoIsThisFor: 'A2 learners studying the sixteen-chapter Prophet Moses interactive story independently or with light support.',
  learningGoals: ['Understand the main events and reasons', 'Use listening and reading together', 'Learn source vocabulary', 'Use the real Language Focus', 'Find evidence and repair mistakes', 'Produce short A2 speaking/writing', 'Turn story-supported values into practical actions'],
  recommendedUse: ['One chapter per session', 'Chapter Support for exact guidance', 'Quick Challenge before feedback', 'Language Focus after comprehension', 'Review after Chapter 16'],
};

const chapterMap = mosesA2SelfStudyGuidePreview.map((section, index) => `### Chapter ${index + 1} — ${storyPages[index]?.title || section.chapter}\n**Goals:** ${(section.objectives || []).slice(0, 2).join(' ')}  \n**Language:** ${section.grammarFocus || 'Use one real pattern from the chapter.'}  \n**Check:** ${section.quickChallengeGuide || 'Complete the real Quick Challenge and repair any mistake.'}  \n**Action:** ${valueActions[index]}`).join('\n\n');

export const mosesA2StudentGuideTextPreview = `# A2 Self-Study Guide — Prophet Moses

This guide follows the **16 real story chapters** in the preview book. It uses the real audio, hotspots, source vocabulary, Quick Challenges, Language Focus activities and final review pages.

The study rule is:

**understand → notice → use → check → repair → reflect**

---

## 1. One Goal Before Every Chapter

Choose one:
- understand the main idea,
- learn 3–5 source words,
- use one Language Focus pattern,
- repair one mistake,
- connect one value with one real action.

**My goal today: __________**  
**My next step: __________**

---

## 2. The A2 Study Cycle

1. Preview the title, image and real hotspots.
2. Listen once for the main event.
3. Read 2–4 lines at a time.
4. Choose 3–5 source words.
5. Try the real Quick Challenge.
6. Check feedback and find the supporting sentence.
7. Repair the answer if needed.
8. Open the real Language Focus and notice one pattern.
9. Say or write 2–4 simple sentences.
10. Connect the chapter lesson with one practical action.

---

## 3. Evidence and Feedback

Use:

**Try → Check → Find proof → Repair → Try again**

Do not reread the whole book after one mistake. Return to the chapter and the sentence connected with the question.

---

## 4. Language Focus

The preview version of Moses A2 contains student-facing Language Focus activities attached to the story chapters. Use them after comprehension:

1. Notice the real example.
2. Understand what it means in this chapter.
3. Make one short new sentence.

The goal is meaningful A2 use, not memorising long grammar rules.

---

## 5. Sixteen-Chapter Study Map

${chapterMap}

---

## 6. Sensitive Chapters

Some chapters include oppression, the death in the bazaar and the final death of Pharaoh and his soldiers. Study these calmly:
- focus on cause, consequence, responsibility, protection and the lesson,
- do not add graphic detail,
- do not role-play violence,
- use age-appropriate language,
- return to the exact source sentence when unsure.

---

## 7. Need More Help?

Use a real hotspot, replay one short part, read only 2–3 lines, choose three key words or use a sentence frame. Keep the learning goal the same.

---

## 8. Ready for a Challenge?

Write 3–5 connected sentences, retell with sequence words, use two source words, make one new Language Focus sentence or explain an answer with evidence.

---

## 9. Chapter Self-Check

- [ ] I can tell the main event.
- [ ] I can use 3–5 chapter words.
- [ ] I completed the real Quick Challenge.
- [ ] I found evidence for my answer.
- [ ] I repaired a mistake if needed.
- [ ] I can understand or use one Language Focus pattern.
- [ ] I can say or write 2–4 simple sentences.
- [ ] I can connect one value with one action.
- [ ] I know my next step.

---

## 10. Review After Chapter 16

Use the actual preview-book sequence:

### Knowledge Check
Answer the key story questions and repair mistakes from the relevant chapter.

### Vocabulary Challenge
Match source words with their meanings and mark words that need another review.

### Language Review
Review and use language patterns from all sixteen chapters.

### Master Glossary — Parts 1 and 2
Review vocabulary from both halves of the story.

### Final Challenge
Complete the final scored set after review, then choose your next learning goal.
`;
