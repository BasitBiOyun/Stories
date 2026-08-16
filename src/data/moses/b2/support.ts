import type { StudentGuideMetadata, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import { mosesB2Pages } from './en/pages';
import { pages as mosesB2PagesAr } from './ar/pages';
import { mosesB2BlueprintConfig } from './config';

const storyEn = mosesB2Pages.filter((page) => page.type === 'story' && mosesB2BlueprintConfig.storyIds.includes(page.id));
const storyAr = mosesB2PagesAr.filter((page) => page.type === 'story' && mosesB2BlueprintConfig.storyIds.includes(page.id));

const chapterListEn = storyEn.map((page) => `${page.id}. ${page.title}`).join('\n');
const chapterListAr = storyAr.map((page) => `${page.id}. ${page.title}`).join('\n');

const unitLessonsEn = Array.from({ length: 6 }, (_, index) => {
  const group = storyEn.slice(index * 4, index * 4 + 4);
  return { title: `Unit ${index + 1}`, description: `Chapters ${group[0].id}–${group[group.length - 1].id}: ${group.map((page) => page.title).join('; ')}` };
});
const unitLessonsAr = Array.from({ length: 6 }, (_, index) => {
  const group = storyAr.slice(index * 4, index * 4 + 4);
  return { title: `الوحدة ${index + 1}`, description: `الفصول ${group[0].id}–${group[group.length - 1].id}: ${group.map((page) => page.title).join('؛ ')}` };
});

export const mosesB2TeacherGuideMetadataBlueprintEn: TeacherGuideMetadata = {
  title: 'Prophet Moses B2 Teacher Guide — Blueprint',
  level: 'B2',
  estimatedDuration: '24 chapter lessons plus review and final assessment',
  targetLearners: 'Upper-intermediate secondary or adult English learners working around CEFR B2.',
  assessmentEvidence: 'Evidence selection, source qualification, cause-effect explanation, comparison, inference, vocabulary in context, and 120–150 word analytical writing.',
  readingFramework: {
    before: 'Preview title, visual, and a small set of Word Notes without supplying outside answers.',
    during: 'Read once for the line of thought, then reread to mark evidence, inference, contrast, and source qualification.',
    after: 'Require an evidence-based explanation before reflection and return learners to the relevant paragraph after weak answers.',
  },
  vocabularyApproach: 'Infer from context, verify with Word Notes, and recycle vocabulary in text-grounded speaking and writing.',
  grammarApproach: 'Use cause-effect, contrast, concession, hedging, reporting language, and evidence phrases as tools for precise B2 interpretation.',
  speakingApproach: 'Require learners to identify the chapter sentence or event supporting an interpretation.',
  writingApproach: 'Use evidence → interpretation → qualification and a 120–150 word analytical paragraph.',
  differentiationNotes: 'Use evidence frames for support; require two independently explained pieces of evidence from faster learners.',
  implementationPlans: {
    optionA: {
      title: 'Six-Unit Intensive Plan',
      steps: unitLessonsEn.map((lesson, index) => ({ time: `Unit ${index + 1}`, activity: lesson.description })),
    },
    optionB: { title: 'Standard Split — Six Four-Chapter Units', lessons: unitLessonsEn },
    optionC: {
      title: 'Extended Project — 24 Lessons',
      steps: storyEn.map((page) => ({ time: `Lesson ${page.id}`, activity: `Chapter ${page.id}: evidence, Word Notes, analysis, Quick Challenge, and written synthesis.` })),
    },
  },
};

export const mosesB2TeacherGuideMetadataBlueprintAr: TeacherGuideMetadata = {
  title: 'دليل المعلم — قصة موسى B2 — Blueprint',
  level: 'B2',
  estimatedDuration: '24 حصة فصلية إضافة إلى المراجعة والتقييم النهائي',
  targetLearners: 'متعـلمو العربية في المستوى CEFR B2 في المرحلة الثانوية أو الدراسة المتقدمة.',
  assessmentEvidence: 'اختيار الدليل، قيد المصدر، تفسير السبب والنتيجة، المقارنة، الاستنتاج، المفردات في السياق، والكتابة التحليلية من 120–150 كلمة.',
  readingFramework: {
    before: 'عاين العنوان والصورة وعددًا محدودًا من ملاحظات المفردات من غير تقديم إجابات خارج النص.',
    during: 'اقرأ أولًا لخط التفكير ثم أعد القراءة لتحديد الدليل والاستنتاج والمقارنة وقيد المصدر.',
    after: 'اطلب تفسيرًا مدعومًا بالدليل قبل التأمل، وأعد المتعلم إلى الفقرة ذات الصلة بعد الإجابة الضعيفة.',
  },
  vocabularyApproach: 'استنتج المعنى من السياق ثم تحقّق من Word Notes وأعد استخدام المفردات في كلام وكتابة مرتبطين بالنص.',
  grammarApproach: 'استخدم السبب والنتيجة والمقارنة والاستدراك والتحفظ وأفعال القول ولغة الدليل لخدمة تفسير B2 الدقيق.',
  speakingApproach: 'اطلب من المتعلم تحديد الجملة أو الحدث الذي يدعم كل تفسير.',
  writingApproach: 'استخدم: دليل ← تفسير ← تقييد في فقرة تحليلية من 120–150 كلمة.',
  differentiationNotes: 'قدم أطرًا للدليل عند الحاجة، واطلب من المتعلمين الأسرع تفسير دليلين مستقلين من الفصل.',
  implementationPlans: {
    optionA: {
      title: 'خطة مكثفة من ست وحدات',
      steps: unitLessonsAr.map((lesson, index) => ({ time: `الوحدة ${index + 1}`, activity: lesson.description })),
    },
    optionB: { title: 'تقسيم قياسي — ست وحدات من أربعة فصول', lessons: unitLessonsAr },
    optionC: {
      title: 'خطة موسعة — 24 حصة',
      steps: storyAr.map((page) => ({ time: `الحصة ${page.id}`, activity: `الفصل ${page.id}: دليل، Word Notes، تحليل، Quick Challenge، وتركيب كتابي.` })),
    },
  },
};

export const mosesB2StudentGuideSectionsBlueprintEn: StudentGuideSection[] = [
  { title: '1. Read the 24 Canonical Chapters', icon: 'BookOpen', text: 'Study all 24 story chapters in order and treat the chapter prose as the source of truth.', points: ['24 canonical chapters', 'Text before outside knowledge', 'Reread after uncertainty'] },
  { title: '2. Read in Three Passes', icon: 'Search', text: 'Read for the line of thought, reread for evidence and Word Notes, then reread for inference, comparison, and source limits.', points: ['Gist and argument', 'Evidence and vocabulary', 'B2 analysis'] },
  { title: '3. Label Evidence and Interpretation', icon: 'Layers', text: 'Mark explicit evidence, inference, and source qualification separately before writing.', points: ['E = evidence', 'I = inference', 'Q = qualification'] },
  { title: '4. Write Analytically', icon: 'PenTool', text: 'Use 120–150 words, at least two chapter details when available, and explain what each detail proves.', points: ['Claim', 'Two evidence points', 'Interpretation and qualification'] },
  { title: '5. Review the Whole Book', icon: 'Award', text: 'Use Knowledge Check, Vocabulary Challenge, both glossaries, Review Challenge, and Final Challenge to identify gaps.', points: ['Knowledge: 8', 'Vocabulary: 10', 'Review: 8', 'Final: 10'] },
];

export const mosesB2StudentGuideSectionsBlueprintAr: StudentGuideSection[] = [
  { title: '1. اقرأ الفصول الأربعة والعشرين المعتمدة', icon: 'BookOpen', text: 'ادرس الفصول الأربعة والعشرين بالترتيب واجعل نص الفصل نفسه مصدر الحقيقة في الإجابة.', points: ['24 فصلًا معتمدًا', 'النص قبل المعرفة الخارجية', 'إعادة القراءة عند التردد'] },
  { title: '2. اقرأ في ثلاث جولات', icon: 'Search', text: 'اقرأ لخط التفكير، ثم للدليل وWord Notes، ثم للاستنتاج والمقارنة وحدود المصدر.', points: ['الفكرة والحجة', 'الدليل والمفردات', 'تحليل B2'] },
  { title: '3. ميّز الدليل من التفسير', icon: 'Layers', text: 'صنّف الدليل الصريح والاستنتاج وقيد المصدر بصورة منفصلة قبل الكتابة.', points: ['د = دليل', 'س = استنتاج', 'ق = قيد المصدر'] },
  { title: '4. اكتب تحليليًا', icon: 'PenTool', text: 'اكتب 120–150 كلمة مستخدمًا دليلين من الفصل عندما يكونان متاحين واشرح ما يثبته كل دليل.', points: ['ادعاء', 'دليلان', 'تفسير وتقييد'] },
  { title: '5. راجع الكتاب كاملًا', icon: 'Award', text: 'استخدم اختبار المعرفة وتحدي المفردات وقسمي المعجم وتحدي المراجعة والتحدي النهائي لتحديد نقاط الضعف.', points: ['المعرفة: 8', 'المفردات: 10', 'المراجعة: 8', 'النهائي: 10'] },
];

export const mosesB2StudentGuideTextBlueprintEn = `# Moses B2 Self-Study Guide\n\nStudy these 24 canonical chapters in order:\n\n${chapterListEn}\n\nFor each chapter, preview the title and Word Notes, read once for the main line of thought, and reread to mark explicit evidence, inference, and any source qualification. Complete the Quick Challenge from the chapter itself. If an answer is wrong or uncertain, return to the relevant paragraph before retrying.\n\nAt B2, do not flatten “according to the sources”, “probably”, or “unknown” into certainty. In analytical writing, use 120–150 words and two distinct chapter details when available. State what the text supports first; label interpretation or reflection separately.\n\nAfter Chapter 24, complete the 8-item Knowledge Check, the 10-item Vocabulary Challenge, both glossary sections, the 8-item Review Challenge, and the 10-item Final Challenge.`;

export const mosesB2StudentGuideTextBlueprintAr = `# دليل الدراسة الذاتية — موسى B2\n\nادرس هذه الفصول الأربعة والعشرين المعتمدة بالترتيب:\n\n${chapterListAr}\n\nفي كل فصل، عاين العنوان وWord Notes، واقرأ أولًا لخط التفكير الرئيس، ثم أعد القراءة لتحديد الدليل الصريح والاستنتاج وأي قيد للمصدر. أكمل Quick Challenge اعتمادًا على الفصل نفسه. إذا كانت الإجابة خاطئة أو غير مؤكدة، فارجع إلى الفقرة ذات الصلة قبل إعادة المحاولة.\n\nفي مستوى B2 لا تحول عبارات مثل «بحسب المصادر» أو «على الأرجح» أو «غير معروف» إلى يقين. في الكتابة التحليلية استخدم 120–150 كلمة ودليلين مختلفين من الفصل عندما يكونان متاحين. اذكر ما يثبته النص أولًا، وميّز التفسير أو التأمل بوضوح.\n\nبعد الفصل الرابع والعشرين، أكمل اختبار المعرفة من 8 عناصر، وتحدي المفردات من 10 عناصر، وقسمي المعجم، وتحدي المراجعة من 8 عناصر، ثم التحدي النهائي من 10 عناصر.`;

export const mosesB2StudentGuideMetadataBlueprintEn: StudentGuideMetadata = {
  title: 'Prophet Moses B2 Self-Study Guide — Blueprint', level: 'B2', language: 'English', estimatedStudyTime: '24 chapter sessions plus whole-book review',
  whoIsThisFor: 'CEFR B2 learners studying the canonical Moses story independently.',
  learningGoals: ['Support interpretation with textual evidence.', 'Preserve source qualification and degrees of certainty.', 'Analyse cause, contrast, turning points, and motivation.', 'Use B2 vocabulary in context.'],
  recommendedUse: ['One chapter per focused session.', 'Reread after uncertain answers.', 'Complete Knowledge 8, Vocabulary 10, Review 8, and Final 10 after the story.'],
};

export const mosesB2StudentGuideMetadataBlueprintAr: StudentGuideMetadata = {
  title: 'دليل الدراسة الذاتية — موسى B2 — Blueprint', level: 'B2', language: 'Arabic', estimatedStudyTime: '24 جلسة فصلية إضافة إلى مراجعة الكتاب كاملًا',
  whoIsThisFor: 'لمتعلم العربية في المستوى CEFR B2 الذي يدرس قصة موسى بصورة مستقلة قائمة على الدليل.',
  learningGoals: ['دعم التفسير بدليل من النص.', 'الحفاظ على قيود المصدر ودرجات اليقين.', 'تحليل السبب والمقارنة ونقاط التحول والدافع.', 'استخدام مفردات B2 في السياق.'],
  recommendedUse: ['فصل واحد في كل جلسة مركزة.', 'إعادة القراءة بعد الإجابة غير المؤكدة.', 'إكمال المعرفة 8 والمفردات 10 والمراجعة 8 والنهائي 10 بعد القصة.'],
};
