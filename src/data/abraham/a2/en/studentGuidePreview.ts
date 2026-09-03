import type { StudentGuideMetadata, StudentGuideSection } from '../../../../types';
import { abrahamA2SelfStudyGuideEn } from './selfStudyGuide';
import { abrahamA2PagesEn } from './pages';

const storyPages = abrahamA2PagesEn.filter(page => page.type === 'story').slice(0, 14);

export const abrahamA2StudentGuideSectionsPreview: StudentGuideSection[] = [
  { title: '1. Start With a Goal', icon: 'Target', text: 'Choose one small goal before each chapter so you can see what you learned.', points: ['Main idea', '3–5 source words', 'One Language Focus pattern', 'One repaired mistake', 'One value/action'] },
  { title: '2. Preview', icon: 'Eye', text: 'Use the real title, image and hotspots to predict one idea.', points: ['Predict one idea', 'Use only real page features'] },
  { title: '3. Listen for Meaning', icon: 'Ear', text: 'Listen once for the main event, then again while following the text.', points: ['Gist first', 'Evidence second', 'Repeat one short sentence'] },
  { title: '4. Read and Find Evidence', icon: 'BookOpen', text: 'Read in short parts and locate the sentence that supports your answer.', points: ['What happened?', 'Why?', 'What happened next?', 'Which sentence proves it?'] },
  { title: '5. Language Focus', icon: 'Compass', text: 'Use the real Language Focus after the story meaning is clear: notice, understand, then use.', points: ['Notice', 'Understand', 'Use'] },
  { title: '6. Vocabulary', icon: 'BookOpen', text: 'Choose 3–5 source words and learn them in context.', points: ['Guess', 'Check', 'Say', 'Reuse'] },
  { title: '7. Quick Challenge and Repair', icon: 'CheckCircle', text: 'Try first, check feedback, return to the evidence and retry.', points: ['Try', 'Check', 'Find proof', 'Repair', 'Try again'] },
  { title: '8. Say or Write', icon: 'PenTool', text: 'Finish with 2–4 simple sentences that show what you understood.', points: ['One fact', 'One language sentence', 'One reflection'] },
  { title: '9. Need More Help?', icon: 'HelpCircle', text: 'Change the strategy, not the goal.', points: ['Real hotspot', 'Short replay', '2–3 lines', 'Three words', 'Sentence frame'] },
  { title: '10. Ready for a Challenge?', icon: 'Stars', text: 'Deepen understanding with connected language and evidence.', points: ['3–5 connected sentences', 'Retell with sequence words', 'Explain with evidence'] },
  { title: '11. Values in Action', icon: 'Heart', text: 'Connect a story-supported value with an observable action.', points: ['Respect', 'Courage', 'Trust', 'Patience', 'Gratitude', 'Humility', 'Cooperation'] },
  { title: '12. Review and Final', icon: 'Clock', text: 'After Chapter 14, use the real review pages in order.', points: ['Knowledge Check', 'Vocabulary Challenge', 'Language Review', 'Master Glossary Parts 1–2', 'Final Challenge'] },
];

export const abrahamA2StudentGuideMetadataPreview: StudentGuideMetadata = {
  title: 'Self-Study Guide — Prophet Abraham (A2)',
  subtitle: 'Understand • Notice • Use • Check • Repair • Reflect',
  level: 'A2', language: 'English', estimatedStudyTime: '15–20 minutes per chapter plus final review',
  whoIsThisFor: 'A2 learners studying the fourteen-chapter Prophet Abraham interactive story independently or with light support.',
  learningGoals: ['Understand the fourteen chapters', 'Use listening and reading together', 'Learn source vocabulary', 'Use the real Language Focus', 'Find evidence and repair mistakes', 'Produce short A2 responses', 'Connect values with practical actions'],
  recommendedUse: ['One chapter per session', 'Chapter Support for exact guidance', 'Quick Challenge before feedback', 'Language Focus after comprehension', 'Review after Chapter 14'],
};

const chapterMap = abrahamA2SelfStudyGuideEn.map((section, index) => `### Chapter ${index + 1} — ${storyPages[index]?.title || section.chapter}\n**Goals:** ${(section.objectives || []).join(' ')}  \n**Language:** ${section.grammarFocus || 'Use the real Language Focus attached to the chapter.'}  \n**Check:** ${section.quickChallengeGuide || 'Complete the real Quick Challenge and repair any mistake.'}  \n**Action:** ${section.useWhatYouLearned || 'Connect the chapter lesson with one practical action.'}`).join('\n\n');

export const abrahamA2StudentGuideTextPreview = `# A2 Self-Study Guide — Prophet Abraham

This guide follows the **14 real story chapters** in the preview book and uses its real audio, hotspots, Word Notes, Quick Challenges, Language Focus and final review pages.

**understand → notice → use → check → repair → reflect**

## 1. One Goal Before Every Chapter
Choose one small goal: main idea, 3–5 words, one Language Focus pattern, one repaired mistake, or one value/action.

**My goal today: __________**  
**My next step: __________**

## 2. A2 Study Cycle
1. Preview the title, image and real hotspots.  
2. Listen once for the main event.  
3. Read 2–4 lines at a time.  
4. Choose 3–5 source words.  
5. Try the real Quick Challenge.  
6. Check feedback and find the supporting sentence.  
7. Repair the answer if needed.  
8. Use the real Language Focus.  
9. Say or write 2–4 simple sentences.  
10. Connect one value with an action.

## 3. Evidence and Feedback
Use **Try → Check → Find proof → Repair → Try again**. Do not rely on guessing or outside information.

## 4. Language Focus
After understanding the chapter, notice the real example, understand its meaning, and make one short new sentence. Keep grammar connected to story meaning.

## 5. Fourteen-Chapter Study Map
${chapterMap}

## 6. Sensitive Scenes
Some chapters include threats, the fire and conflict with Nimrod. Focus on reasoning, courage, trust, consequence and the lesson. Do not add graphic detail or role-play violence.

## 7. Need More Help? / Ready for a Challenge?
For support, use a real hotspot, replay a short part, read 2–3 lines, choose three words or use a sentence frame. For challenge, write 3–5 connected sentences, retell with sequence words, use two source words, make one Language Focus sentence or explain an answer with evidence.

## 8. Chapter Self-Check
- [ ] I can tell the main idea.  
- [ ] I can use 3–5 chapter words.  
- [ ] I completed the real Quick Challenge.  
- [ ] I found evidence and repaired a mistake if needed.  
- [ ] I can understand or use one Language Focus pattern.  
- [ ] I can say or write 2–4 simple sentences.  
- [ ] I can connect one value with one action.  
- [ ] I know my next step.

## 9. Review After Chapter 14
Use the actual preview sequence: **Knowledge Check → Vocabulary Challenge → Language Review → Master Glossary Parts 1–2 → Final Challenge**. Repair errors before moving to the final scored set.
`;
