import type { PageData } from '../../src/types';
import { defineLearningBlueprint, type BlueprintAuthoredExercise, type BlueprintGuidePair } from '../../src/data/learningBlueprint';
import { runBlueprintAwareLearningSystem } from '../../src/data/learningBlueprintSystem';
import type { LearningSystemConfig } from '../../src/data/learningSystem';

const feedback = (language: 'en' | 'ar') => language === 'en'
  ? { correct: 'Correct.', incorrect: 'Return to the chapter evidence.' }
  : { correct: 'صحيح.', incorrect: 'ارجع إلى دليل الفصل.' };

const guide = (language: 'en' | 'ar'): BlueprintGuidePair[typeof language] => ({
  pedagogy: language === 'en' ? 'Use the manually selected evidence point.' : 'استخدم نقطة الدليل المحددة يدوياً.',
  lessonPlan: language === 'en' ? 'Read, locate the evidence, answer, and verify.' : 'اقرأ وحدد الدليل ثم أجب وتحقق.',
  discussionPoints: [language === 'en' ? 'Which sentence proves the answer?' : 'أي جملة تثبت الإجابة؟'],
  differentiation: {
    fastFinishers: language === 'en' ? 'Explain the evidence in one more sentence.' : 'اشرح الدليل بجملة إضافية.',
    strugglingLearners: language === 'en' ? 'Keep the evidence sentence open.' : 'أبقِ جملة الدليل مفتوحة أمامك.',
  },
  interactiveTips: [language === 'en' ? 'Return to the prose after an error.' : 'ارجع إلى النص بعد الخطأ.'],
});

const mc = (language: 'en' | 'ar', question: string, correct: string, wrong1: string, wrong2: string): BlueprintAuthoredExercise => ({
  type: 'multiple-choice',
  question,
  options: [correct, wrong1, wrong2],
  correctAnswer: 0,
  explanation: correct,
  feedback: feedback(language),
});
const tf = (language: 'en' | 'ar', question: string, answer: boolean): BlueprintAuthoredExercise => ({
  type: 'true-false',
  question,
  correctAnswer: answer,
  explanation: question,
  feedback: feedback(language),
});
const fill = (language: 'en' | 'ar', question: string, sentence: string, answer: string): BlueprintAuthoredExercise => ({
  type: 'fill-blanks',
  question,
  fillBlanksText: sentence,
  correctAnswer: answer,
  explanation: answer,
  feedback: feedback(language),
});
const tap = (language: 'en' | 'ar', question: string, answer: string): BlueprintAuthoredExercise => ({
  type: 'tap-reveal',
  question,
  correctAnswer: answer,
  explanation: answer,
  tapRevealItems: [{ question, answer }],
  feedback: feedback(language),
});

const page = (id: number, type: PageData['type'], title: string, content: string): PageData => ({ id, type, title, content, image: '' });

const englishPages: PageData[] = [
  page(1, 'story', 'First Chapter', 'Adam learned the names. The angels respected the knowledge. Useful knowledge helps people do good.'),
  page(2, 'story', 'Second Chapter', 'Adam lived in Paradise. He was warned about Iblis. Adam remembered the warning.'),
  page(3, 'quiz', 'Knowledge Check', 'Knowledge'),
  page(4, 'vocabulary-match', 'Vocabulary Challenge', 'Vocabulary'),
  page(5, 'exercises', 'Review', 'Review'),
  page(6, 'glossary', 'Glossary I', 'Glossary'),
  page(7, 'glossary', 'Glossary II', 'Glossary'),
  page(8, 'final-challenge', 'Final Challenge', 'Final'),
];
const arabicPages: PageData[] = [
  page(1, 'story', 'الفصل الأول', 'تعلّم آدم الأسماء. احترمت الملائكة العلم. العلم النافع يساعد الناس على فعل الخير.'),
  page(2, 'story', 'الفصل الثاني', 'عاش آدم في الجنة. حُذّر من إبليس. تذكّر آدم التحذير.'),
  page(3, 'quiz', 'اختبار الفهم', 'الفهم'),
  page(4, 'vocabulary-match', 'تحدي المفردات', 'المفردات'),
  page(5, 'exercises', 'المراجعة', 'المراجعة'),
  page(6, 'glossary', 'المفردات ١', 'المفردات'),
  page(7, 'glossary', 'المفردات ٢', 'المفردات'),
  page(8, 'final-challenge', 'التحدي النهائي', 'النهائي'),
];

const blueprint = defineLearningBlueprint({
  id: 'infrastructure-fixture-a2',
  version: '1.0.0',
  storyId: 'fixture',
  level: 'A2',
  status: 'approved',
  chapters: [
    {
      chapterId: 1,
      objectives: [{ en: 'Identify what Adam learned.', ar: 'حدد ما تعلمه آدم.' }],
      evidencePoints: [
        { id: 'c1-names', focus: 'direct', claim: { en: 'Adam learned the names.', ar: 'تعلّم آدم الأسماء.' }, evidence: { en: 'Adam learned the names.', ar: 'تعلّم آدم الأسماء.' } },
        { id: 'c1-angels', focus: 'direct', claim: { en: 'The angels respected the knowledge.', ar: 'احترمت الملائكة العلم.' }, evidence: { en: 'The angels respected the knowledge.', ar: 'احترمت الملائكة العلم.' } },
        { id: 'c1-useful', focus: 'cause-result', claim: { en: 'Useful knowledge helps people do good.', ar: 'العلم النافع يساعد الناس على فعل الخير.' }, evidence: { en: 'Useful knowledge helps people do good.', ar: 'العلم النافع يساعد الناس على فعل الخير.' } },
      ],
      vocabularyTargets: [{ id: 'c1-useful-word', en: { word: 'knowledge', definition: 'what a person knows' }, ar: { word: 'العلم', definition: 'ما يعرفه الإنسان' } }],
      assessmentItems: [
        { id: 'c1-quick', learningPointId: 'c1-names', eligibleStages: ['quick'], exercise: { en: mc('en', 'What did Adam learn?', 'The names', 'A road', 'A palace'), ar: mc('ar', 'ماذا تعلّم آدم؟', 'الأسماء', 'طريقاً', 'قصراً') } },
        { id: 'c1-knowledge', learningPointId: 'c1-angels', eligibleStages: ['knowledge'], exercise: { en: tf('en', 'The angels respected the knowledge.', true), ar: tf('ar', 'احترمت الملائكة العلم.', true) } },
        { id: 'c1-review', learningPointId: 'c1-useful', eligibleStages: ['review'], exercise: { en: mc('en', 'What does useful knowledge help people do?', 'Do good', 'Forget everything', 'Avoid learning'), ar: mc('ar', 'ماذا يساعد العلم النافع الناس على أن يفعلوا؟', 'فعل الخير', 'نسيان كل شيء', 'ترك التعلم') } },
      ],
      teacherGuide: { en: guide('en'), ar: guide('ar') },
      selfStudyGuide: { en: guide('en'), ar: guide('ar') },
    },
    {
      chapterId: 2,
      objectives: [{ en: 'Recall the warning about Iblis.', ar: 'تذكر التحذير من إبليس.' }],
      evidencePoints: [
        { id: 'c2-paradise', focus: 'direct', claim: { en: 'Adam lived in Paradise.', ar: 'عاش آدم في الجنة.' }, evidence: { en: 'Adam lived in Paradise.', ar: 'عاش آدم في الجنة.' } },
        { id: 'c2-warning', focus: 'direct', claim: { en: 'Adam was warned about Iblis.', ar: 'حُذّر آدم من إبليس.' }, evidence: { en: 'He was warned about Iblis.', ar: 'حُذّر من إبليس.' } },
      ],
      vocabularyTargets: [{ id: 'c2-warning-word', en: { word: 'warned', definition: 'told about a possible danger' }, ar: { word: 'حُذّر', definition: 'نُبّه إلى خطر محتمل' } }],
      assessmentItems: [
        { id: 'c2-quick', learningPointId: 'c2-paradise', eligibleStages: ['quick'], exercise: { en: fill('en', 'Where did Adam live?', 'Adam lived in [blank].', 'Paradise'), ar: fill('ar', 'أين عاش آدم؟', 'عاش آدم في [blank].', 'الجنة') } },
        { id: 'c2-final', learningPointId: 'c2-warning', eligibleStages: ['final'], exercise: { en: tap('en', 'Who was Adam warned about?', 'Iblis'), ar: tap('ar', 'ممن حُذّر آدم؟', 'إبليس') } },
      ],
      teacherGuide: { en: guide('en'), ar: guide('ar') },
      selfStudyGuide: { en: guide('en'), ar: guide('ar') },
    },
  ],
});

const config: LearningSystemConfig = {
  level: 'A2',
  storyIds: [1, 2],
  knowledgeCheckPageId: 3,
  vocabularyPageId: 4,
  reviewPageId: 5,
  glossaryPageIds: [6, 7],
  finalChallengePageId: 8,
  knowledgeCount: 1,
  vocabularyCount: 1,
  reviewCount: 1,
  finalCount: 1,
};

const output = runBlueprintAwareLearningSystem({ englishPages, arabicPages, config, blueprint });
const assert = (condition: unknown, message: string) => { if (!condition) throw new Error(`[Blueprint Infrastructure Test] ${message}`); };

assert(output.englishPages.find(item => item.id === 1)?.exercises?.[0]?.id.startsWith('blueprint-'), 'Blueprint Quick Challenge was not compiled.');
assert(output.englishPages.find(item => item.id === 3)?.exercises?.length === 1, 'Knowledge Check count is wrong.');
assert(output.englishPages.find(item => item.id === 4)?.vocabularyPairs?.[0]?.word === 'knowledge', 'Vocabulary Challenge did not use manual targets.');
assert(output.englishPages.find(item => item.id === 6)?.vocabulary?.some(item => item.word === 'knowledge'), 'Glossary did not use manual vocabulary targets.');
assert(output.englishPages.find(item => item.id === 5)?.exercises?.[0]?.quizQuestions?.length === 1, 'Review was not compiled from manual questions.');
assert(output.englishPages.find(item => item.id === 8)?.exercises?.length === 1, 'Final Challenge count is wrong.');
assert(output.englishTeacherGuide[0]?.pedagogy.includes('manually selected evidence'), 'Manual teacher guide was not returned.');
assert(output.arabicSelfStudyGuide[1]?.discussionPoints.length === 1, 'Arabic self-study guide was not returned.');
assert(output.englishPages.find(item => item.id === 1)?.content === englishPages[0].content, 'Story prose changed during blueprint compilation.');

console.log('Learning Blueprint infrastructure: PASS');
console.log('Manual content path: evidence -> authored activity -> engine placement -> runtime pages/guides');
