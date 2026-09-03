import type { StudentGuideMetadata, StudentGuideSection, TeacherGuideSection } from '../../../../types';
import { mosesA2Pages } from './pages';
import { mosesA2TeacherGuide } from './teacherGuide';
import { mosesA2SelfStudyGuide as baseGuide } from './selfStudyGuide';
import { mosesA2QuickChallengesPolished } from './exerciseSystem';

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
