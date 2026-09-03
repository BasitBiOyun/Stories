import { TeacherGuideSection } from '../../../../types';
import { mosesA2Pages } from './pages';

type StudyPlan = {
  title: string;
  focus: string;
  language: string;
  evidence: string;
  action: string;
  question: string;
  sensitive?: boolean;
};

const plans: StudyPlan[] = [
  { title: 'The Cruel King', focus: 'power, injustice, Egypt, Pharaoh, and the Children of Israel', language: 'was/were + description; because/because of', evidence: 'show why Pharaoh is described as unfair and cruel', action: 'use strength fairly and protect someone weaker', question: 'Which detail shows most clearly that Pharaoh used power unfairly?' },
  { title: 'The King’s Dream', focus: 'the dream, the magicians’ prediction, and Pharaoh’s harmful reaction', language: 'simple past sequence; will in a prediction; because/so', evidence: 'retell dream → prediction → order', action: 'check facts before acting from fear', question: 'How did fear affect Pharaoh’s decision?', sensitive: true },
  { title: 'A Baby in a Basket', focus: 'worry, trust, and the practical steps Moses’s mother takes', language: 'could/couldn’t; commands; will for reassurance', evidence: 'explain what Moses’s mother did and why', action: 'combine hope with one safe practical step', question: 'What actions show both worry and trust?' },
  { title: 'The Queen’s Love', focus: 'Queen Asiye’s mercy and her contrast with Pharaoh', language: 'adjectives; different from; will for intention', evidence: 'show how Asiye is different from Pharaoh through her actions', action: 'protect someone who needs help', question: 'Which action shows Asiye’s kindness most clearly?' },
  { title: 'Back to His Mother', focus: 'protection and Moses’s growth from baby to young man', language: 'grew up/became; because', evidence: 'separate the baby event from the later bazaar event', action: 'help a younger or weaker person feel safe', question: 'What changes between baby Moses and young Moses?' },
  { title: 'A Mistake in the Bazaar', focus: 'accident, remorse, forgiveness, and responsibility', language: 'because; accidentally/on purpose; be going to in a warning', evidence: 'explain what Moses asked Allah for after the accidental death', action: 'stop, tell the truth, seek help, and repair what can be repaired', question: 'What should a person do after a serious mistake?', sensitive: true },
  { title: 'Escape to Midian', focus: 'journey, guidance, place, and the well setting', language: 'there was/were; near/around/far from', evidence: 'retell Egypt → Midian → well', action: 'notice who may need help before acting', question: 'How does the well setting prepare the next event?' },
  { title: 'The Two Sisters', focus: 'need, waiting, and helpfulness', language: 'why questions; can/cannot; so for result', evidence: 'explain why the sisters waited and how Moses helped', action: 'offer useful help without showing off', question: 'What information helps Moses understand that the sisters need help?' },
  { title: 'A New Life', focus: 'work, belonging, family, and gratitude', language: 'because; later/after ten years; decided to + verb', evidence: 'retell help → job → family → decision to return', action: 'respond to help through useful contribution', question: 'How does Moses move from stranger to member of a family?' },
  { title: 'The Voice on the Mountain', focus: 'the journey setting and the turning point when Allah speaks to Moses', language: 'was getting + adjective; will; imperatives', evidence: 'identify who spoke and the instruction connected with the walking stick', action: 'listen carefully before acting', question: 'Which sentence marks the biggest turning point in the journey?' },
  { title: 'The Signs of Allah', focus: 'the signs shown to Moses and his mission', language: 'imperatives; to + verb for purpose', evidence: 'connect the signs with Moses’s mission to Pharaoh', action: 'use an ability or resource for a helpful purpose', question: 'Why are the signs connected with a mission rather than personal display?' },
  { title: 'The King’s Magicians', focus: 'Moses’s message, the signs, and Pharaoh’s claim of magic', language: 'direct speech; simple past; can for ability', evidence: 'distinguish the narrator’s account from Pharaoh’s claim', action: 'say who made a claim before repeating it', question: 'How can we distinguish what the narrator says from what Pharaoh claims?' },
  { title: 'The Magicians Believe', focus: 'the contest, evidence, and the magicians’ change of response', language: 'then; because; continued to + verb', evidence: 'explain what changed the magicians and what did not change Pharaoh', action: 'change an answer when evidence changes', question: 'What changed the magicians’ response?' },
  { title: 'The Night Journey', focus: 'the secret departure and caring for a large group', language: 'must; will; could not; time language', evidence: 'explain why they left at night and why the caravan moved slowly', action: 'include slower or vulnerable people in a group plan', question: 'Why does Moses give both a plan and rules for the journey?' },
  { title: 'The Sea Opens', focus: 'panic, reassurance, instruction, and safe crossing', language: 'front of/behind/between; will for reassurance; imperatives', evidence: 'explain how the road in the sea appears according to the story', action: 'identify the next safe instruction under pressure', question: 'What changes between panic and the safe crossing?' },
  { title: 'The Cruel King Died in the Water', focus: 'Pharaoh’s final action, the ending, freedom, and limits of human power', language: 'when/in the end; can/cannot for general lessons', evidence: 'separate Pharaoh’s claim from the story’s final lesson', action: 'respect another person’s freedom and dignity', question: 'Which final sentence best summarizes the lesson about human power?', sensitive: true },
];

const storyPages = mosesA2Pages.filter((page) => page.type === 'story').slice(0, 16);

export const mosesA2SelfStudyGuideCustomEn: TeacherGuideSection[] = plans.map((plan, index) => {
  const page = storyPages[index];
  const words = (page?.vocabulary || []).slice(0, 5).map((item) => item.word);
  const hotspots = (page?.hotspots || []).map((item) => item.title);
  const exercise = page?.exercises?.[0];
  const sensitiveNote = plan.sensitive
    ? 'Keep the retelling calm and age-appropriate. Focus on cause, consequence, responsibility, protection, and the lesson rather than graphic detail.'
    : 'Keep the study focused on the actual chapter text and its evidence.';

  return {
    chapter: `Chapter ${index + 1}: ${plan.title}`,
    timing: '20–25 minutes',
    objectives: [
      `Understand the main chapter focus: ${plan.focus}.`,
      words.length ? `Use 3–5 source words in context: ${words.join(', ')}.` : 'Use 3–5 source words from the current page.',
      `Notice and use one short language pattern from the story: ${plan.language}.`,
      exercise ? `Complete the real activity “${exercise.title || 'Quick Check'}”, check feedback, find proof in the text, and repair any mistake.` : 'Complete the real current-page activity and repair any mistake from the text.',
    ],
    pedagogy: `Independent A2 cycle: predict → listen/read for gist → find evidence → notice language from a real story sentence → complete the real activity → correct from feedback → produce 2–4 simple sentences → connect the value with an action. ${sensitiveNote}`,
    grammarFocus: `There is no separate student-facing Language Focus page in Moses A2. Notice the pattern directly in the chapter text: ${plan.language}. Understand its meaning first, then make one short new sentence.`,
    pronunciationFocus: words.length ? `Listen again and repeat ${words.slice(0, 3).join(', ')}. Then shadow one short sentence from the chapter audio.` : 'Shadow one short sentence from the chapter audio.',
    lessonPlan: `Set one goal. ${hotspots.length ? `Use the real hotspot(s): ${hotspots.join(' and ')}.` : 'Use the title and image.'} Listen once for the main idea. Read 2–4 lines at a time. Learn 3–5 source words. Find one real example of ${plan.language}. ${exercise ? `Try “${exercise.title || 'Quick Check'}” before opening feedback.` : 'Try the current-page activity before opening feedback.'} If the answer is wrong, return to the supporting sentence and try again. Finish by ${plan.evidence}, then choose this value/action transfer: ${plan.action}.`,
    discussionPoints: [plan.question, `What sentence or detail supports this evidence: ${plan.evidence}?`, `What real action fits the lesson: ${plan.action}?`],
    differentiation: {
      fastFinishers: 'Ready for a challenge? Write 3–5 connected sentences, use two source words, and include one chapter language pattern with evidence.',
      strugglingLearners: `Need more help? Use the chapter picture${hotspots.length ? ` and the real hotspot(s) ${hotspots.join(', ')}` : ''}, choose only three words, read 2–3 lines at a time, and use a sentence frame.`
    },
    interactiveTips: [
      hotspots.length ? `Use only the hotspot(s) that actually exist on this page: ${hotspots.join(', ')}.` : 'Use only features actually present on this page.',
      exercise ? `For “${exercise.title || 'Quick Check'}”, answer first, then read feedback, find the evidence sentence, and try again.` : 'Use the current-page activity after understanding the main idea.',
      'Do not tell the learner to open a separate Language Focus section because Moses A2 does not currently contain one.'
    ],
    assessmentTools: {
      rubric: ['Main idea', '3–5 source words', 'One story-based language pattern', 'Evidence and self-correction', '2–4 sentence production'],
      exitTicket: ['One fact', 'One language pattern', 'One value/action', 'My next step']
    }
  };
});

const chapterMap = plans.map((plan, index) => `### Chapter ${index + 1} — ${plan.title}\n**Focus:** ${plan.focus}  \n**Language:** ${plan.language}  \n**Evidence:** ${plan.evidence}  \n**Action:** ${plan.action}`).join('\n\n');

export const mosesA2FullGuideTextCustomEn = `
# A2 SELF-STUDY GUIDE
## Prophet Moses Interactive Storybook

This guide follows the **16 real story chapters** in Moses A2. It uses the chapter audio, source vocabulary, real hotspots, current-page activities, review pages, and language patterns already present in the story.

There is currently **no separate student-facing Language Focus page in Moses A2**. Do not look for a missing tab. Notice useful language directly in real story sentences.

**Study rule: understand → notice → use → check → improve**

---

## 1. Start With One Goal

Choose one:
- understand the main idea,
- learn 3–5 source words,
- use one story-based language pattern,
- correct one mistake by yourself,
- connect one value with one real action.

**My goal today: __________**  
**My next step: __________**

---

## 2. The A2 Study Cycle

1. Look at the title, picture, and real hotspots.
2. Predict the topic in one sentence.
3. Listen once for the main idea.
4. Read 2–4 lines at a time.
5. Choose 3–5 source words.
6. Notice one useful pattern in a real story sentence.
7. Do the real chapter activity before reading feedback.
8. If wrong, return to the text, find proof, repair, and try again.
9. Say or write 2–4 simple sentences.
10. Reflect and choose your next step.

---

## 3. Listening, Reading, and Evidence

First listen for gist. Listen again while following the text. On a third short listen, repeat one clear sentence for pronunciation.

When reading, ask:
- What happened?
- Why?
- What happened next?
- Which sentence gives me the answer?

Use this activity routine:

**Answer → Check → Find proof → Repair → Try again**

---

## 4. Language From the Story

Do not memorise long grammar explanations.

1. **Notice** a real example.
2. **Understand** what it means there.
3. **Use** it in one short new sentence.

The chapter map below shows the language worth noticing. These are taken from the current story text and Teacher Guide support, not from an invented Language Focus page.

---

## 5. Vocabulary

Choose 3–5 words per session. Read the source definition, find the word in the story, say it aloud, use it once, and review it later in the Vocabulary Challenge or Master Glossary.

---

## 6. Sixteen-Chapter Self-Study Map

${chapterMap}

---

## 7. Need More Help?

Change the strategy, not the learning goal:
- use a real hotspot,
- listen again,
- read only 2–3 lines,
- choose three key words,
- use a sentence frame,
- find the exact answer sentence.

Use only features that actually exist on the current page.

---

## 8. Ready for a Challenge?

Choose one:
- retell with first, then, after that, finally,
- write 3–5 connected sentences,
- use two source words in a short paragraph,
- make one new sentence with the chapter pattern,
- compare two people or events using evidence,
- explain one value and one real action.

---

## 9. Values in Action

Keep values observable: justice, mercy, responsibility, helpfulness, gratitude, attentive listening, openness to evidence, careful planning, and human dignity should become a real action rather than a separate moral lecture.

**Today I will: __________**

---

## 10. Sensitive Scenes

Some chapters include the killing of babies, an accidental death, threats, pursuit, and drowning. Use calm, age-appropriate language. Focus on cause, consequence, responsibility, protection, justice, and the stated lesson. Do not add graphic detail.

---

## 11. Chapter Self-Check

- [ ] I can tell the main idea.
- [ ] I can use 3–5 chapter words.
- [ ] I can understand or use one language pattern from the story.
- [ ] I completed the real chapter activity.
- [ ] I checked feedback and repaired a mistake if needed.
- [ ] I can say or write 2–4 simple sentences.
- [ ] I can name one value and one real action.
- [ ] I know my next step.

---

## 12. Final Review After Chapter 16

Use the actual review pages in the book:

### Knowledge Check
Answer the review questions first, then check and repair mistakes.

### Vocabulary Challenge
Match source words with their meanings and mark words to review again.

### Master Glossary
Review both parts and return to the relevant chapter when a word is unclear.

### Final Review & Reflection
Complete **The Journey of Moses**, **Good vs. Bad Behavior**, **Deep Thinking**, and the review challenge available in the current build.

### Final Challenge
Complete the whole-book Final Challenge, then choose your next learning goal.

---

## 13. Final Learning Check

At the end, try to say:
- I understand the main events of Moses’s story.
- I can listen and read for the main idea.
- I can find evidence in the text.
- I can use important story vocabulary.
- I can notice and use simple language patterns from real story sentences.
- I can retell events in short connected sentences.
- I can distinguish a narrator’s statement from a character’s claim.
- I can learn from feedback and correct mistakes.
- I can connect a value with a real action.
- I can choose my next learning goal.
`;
