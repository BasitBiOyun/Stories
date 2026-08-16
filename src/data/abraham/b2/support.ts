import type { StudentGuideMetadata, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import { abrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr } from './ar/pages';
import { abrahamB2BlueprintConfig } from './config';

const storyEn = abrahamB2Pages.filter((page) => page.type === 'story' && abrahamB2BlueprintConfig.storyIds.includes(page.id));
const storyAr = abrahamB2PagesAr.filter((page) => page.type === 'story' && abrahamB2BlueprintConfig.storyIds.includes(page.id));

const chapterListEn = storyEn.map((page) => `${page.id}. ${page.title}`).join('\n');
const chapterListAr = storyAr.map((page) => `${page.id}. ${page.title}`).join('\n');

const unitLessonsEn = Array.from({ length: 7 }, (_, index) => {
  const group = storyEn.slice(index * 5, index * 5 + 5);
  return {
    title: `Unit ${index + 1}`,
    description: `Chapters ${group[0].id}–${group[group.length - 1].id}: ${group.map((page) => page.title).join('; ')}`,
  };
});

const unitLessonsAr = Array.from({ length: 7 }, (_, index) => {
  const group = storyAr.slice(index * 5, index * 5 + 5);
  return {
    title: `الوحدة ${index + 1}`,
    description: `الفصول ${group[0].id}–${group[group.length - 1].id}: ${group.map((page) => page.title).join('؛ ')}`,
  };
});

export const abrahamB2TeacherGuideMetadataBlueprintEn: TeacherGuideMetadata = {
  title: 'Prophet Abraham B2 Teacher Guide — Blueprint',
  level: 'B2',
  estimatedDuration: '35 chapter lessons plus Knowledge Check, review, and final assessment',
  targetLearners: 'Upper-intermediate secondary or adult English learners working around CEFR B2.',
  assessmentEvidence: 'Evidence selection, source qualification, argument analysis, cause-effect reasoning, comparison, inference, vocabulary in context, and 120–150 word analytical writing.',
  readingFramework: {
    before: 'Preview the title, visual, and selected Word Notes without giving outside answers.',
    during: 'Read first for narrative movement and argument, then reread for evidence, inference, contrast, and source qualification.',
    after: 'Require an evidence-based explanation before reflection and return learners to the exact paragraph after weak or unsupported answers.',
  },
  vocabularyApproach: 'Infer meaning from context, verify with canonical Word Notes, and reuse vocabulary in text-grounded speaking and writing.',
  grammarApproach: 'Use cause-effect, contrast, concession, reporting, hedging, and evidence language to express B2 interpretation precisely.',
  speakingApproach: 'Require learners to identify which sentence or event supports each analytical claim.',
  writingApproach: 'Use evidence → interpretation → qualification in a 120–150 word analytical paragraph.',
  differentiationNotes: 'Provide evidence frames for support; require two independently explained textual details from faster learners where the chapter provides them.',
  implementationPlans: {
    optionA: { title: 'Seven-Unit Intensive Plan', steps: unitLessonsEn.map((lesson, index) => ({ time: `Unit ${index + 1}`, activity: lesson.description })) },
    optionB: { title: 'Standard Split — Seven Five-Chapter Units', lessons: unitLessonsEn },
    optionC: { title: 'Extended Project — 35 Lessons', steps: storyEn.map((page) => ({ time: `Lesson ${page.id}`, activity: `Chapter ${page.id}: evidence, Word Notes, analysis, Quick Challenge, and written synthesis.` })) },
  },
};

export const abrahamB2TeacherGuideMetadataBlueprintAr: TeacherGuideMetadata = {
  title: 'دليل المعلم — قصة إبراهيم B2 — Blueprint',
  level: 'B2',
  estimatedDuration: '35 حصة فصلية إضافة إلى اختبار المعرفة والمراجعة والتقييم النهائي',
  targetLearners: 'متعـلمو العربية في المستوى CEFR B2 في المرحلة الثانوية أو الدراسة المتقدمة.',
  assessmentEvidence: 'اختيار الدليل، قيد المصدر، تحليل الحجة، السبب والنتيجة، المقارنة، الاستنتاج، المفردات في السياق، والكتابة التحليلية من 120–150 كلمة.',
  readingFramework: {
    before: 'عاين العنوان والصورة وعددًا محدودًا من ملاحظات المفردات دون تقديم إجابات خارج النص.',
    during: 'اقرأ أولًا للحركة السردية والحجة، ثم أعد القراءة لتحديد الدليل والاستنتاج والمقارنة وقيد المصدر.',
    after: 'اطلب تفسيرًا مدعومًا بالدليل قبل التأمل، وأعد المتعلم إلى الفقرة الدقيقة بعد الإجابة الضعيفة أو غير المدعومة.',
  },
  vocabularyApproach: 'استنتج المعنى من السياق ثم تحقّق من Word Notes المعتمدة وأعد استخدام المفردات في كلام وكتابة مرتبطين بالنص.',
  grammarApproach: 'استخدم السبب والنتيجة والمقارنة والاستدراك والتحفظ وأفعال القول ولغة الدليل لخدمة تفسير B2 الدقيق.',
  speakingApproach: 'اطلب من المتعلم تحديد الجملة أو الحدث الذي يدعم كل ادعاء تحليلي.',
  writingApproach: 'استخدم: دليل ← تفسير ← تقييد في فقرة تحليلية من 120–150 كلمة.',
  differentiationNotes: 'قدم أطرًا للدليل عند الحاجة، واطلب من المتعلمين الأسرع تفسير دليلين مستقلين عندما يتيحهما الفصل.',
  implementationPlans: {
    optionA: { title: 'خطة مكثفة من سبع وحدات', steps: unitLessonsAr.map((lesson, index) => ({ time: `الوحدة ${index + 1}`, activity: lesson.description })) },
    optionB: { title: 'تقسيم قياسي — سبع وحدات من خمسة فصول', lessons: unitLessonsAr },
    optionC: { title: 'خطة موسعة — 35 حصة', steps: storyAr.map((page) => ({ time: `الحصة ${page.id}`, activity: `الفصل ${page.id}: دليل، Word Notes، تحليل، Quick Challenge، وتركيب كتابي.` })) },
  },
};

export const abrahamB2StudentGuideSectionsBlueprintEn: StudentGuideSection[] = [
  { title: '1. Read the 35 Canonical Chapters', icon: 'BookOpen', text: 'Study all 35 narrative chapters in order and treat the chapter prose as the source of truth.', points: ['35 canonical chapters', 'Text before outside knowledge', 'Reread after uncertainty'] },
  { title: '2. Read in Three Passes', icon: 'Search', text: 'Read for narrative and argument, reread for evidence and Word Notes, then reread for inference, comparison, and source limits.', points: ['Narrative and argument', 'Evidence and vocabulary', 'B2 analysis'] },
  { title: '3. Preserve Source Qualification', icon: 'Layers', text: 'Keep phrases such as “some sources”, “different ideas”, “is believed”, and “according to another narration” when the chapter uses them.', points: ['E = evidence', 'I = inference', 'Q = qualification'] },
  { title: '4. Write Analytically', icon: 'PenTool', text: 'Use 120–150 words, two distinct chapter details where available, and explain what each detail proves.', points: ['Claim', 'Evidence', 'Interpretation and qualification'] },
  { title: '5. Review the Whole Book', icon: 'Award', text: 'After Chapter 35, use the existing page 36 learning surface as Knowledge Check, then complete Review, both glossaries, and Final Challenge.', points: ['Knowledge: 8', 'Review: 8', 'Final: 10', 'No separate Vocabulary Challenge'] },
];

export const abrahamB2StudentGuideSectionsBlueprintAr: StudentGuideSection[] = [
  { title: '1. اقرأ الفصول الخمسة والثلاثين المعتمدة', icon: 'BookOpen', text: 'ادرس الفصول السردية الخمسة والثلاثين بالترتيب واجعل نص الفصل نفسه مصدر الحقيقة في الإجابة.', points: ['35 فصلًا معتمدًا', 'النص قبل المعرفة الخارجية', 'إعادة القراءة عند التردد'] },
  { title: '2. اقرأ في ثلاث جولات', icon: 'Search', text: 'اقرأ للسرد والحجة، ثم للدليل وWord Notes، ثم للاستنتاج والمقارنة وحدود المصدر.', points: ['السرد والحجة', 'الدليل والمفردات', 'تحليل B2'] },
  { title: '3. حافظ على قيد المصدر', icon: 'Layers', text: 'حافظ على عبارات مثل «بعض المصادر» و«هناك آراء مختلفة» و«يُعتقد» و«وفقًا لرواية أخرى» عندما يستخدمها الفصل.', points: ['د = دليل', 'س = استنتاج', 'ق = قيد المصدر'] },
  { title: '4. اكتب تحليليًا', icon: 'PenTool', text: 'اكتب 120–150 كلمة مستخدمًا دليلين مختلفين عندما يكونان متاحين واشرح ما يثبته كل دليل.', points: ['ادعاء', 'دليل', 'تفسير وتقييد'] },
  { title: '5. راجع الكتاب كاملًا', icon: 'Award', text: 'بعد الفصل 35 استخدم سطح الصفحة 36 نفسه لاختبار المعرفة، ثم أكمل المراجعة وقسمي المعجم والتحدي النهائي.', points: ['المعرفة: 8', 'المراجعة: 8', 'النهائي: 10', 'لا يوجد تحدي مفردات مستقل'] },
];

export const abrahamB2StudentGuideTextBlueprintEn = `# Abraham B2 Self-Study Guide\n\nStudy these 35 canonical chapters in order:\n\n${chapterListEn}\n\nFor every chapter, read first for narrative movement and argument. Reread to mark explicit evidence, inference, and any source qualification. Complete the Quick Challenge only from the chapter. If an answer is weak or uncertain, return to the relevant paragraph.\n\nAt B2, do not turn “some sources”, “different ideas”, “is believed”, or “according to another narration” into certainty. This is especially important in the historical framing of Abraham’s birthplace and chronology. Use 120–150 words for analytical writing and explain what each piece of evidence supports.\n\nThe raw book’s page 36 contains References. The learning runtime preserves the 1–40 page footprint and reuses page 36 as the 8-activity Knowledge Check; the raw References text itself is not edited. There is no separate Vocabulary Challenge page in this book. Then complete Review 8, both glossary sections, and Final 10.`;

export const abrahamB2StudentGuideTextBlueprintAr = `# دليل الدراسة الذاتية — إبراهيم B2\n\nادرس هذه الفصول الخمسة والثلاثين المعتمدة بالترتيب:\n\n${chapterListAr}\n\nفي كل فصل اقرأ أولًا للحركة السردية والحجة، ثم أعد القراءة لتحديد الدليل الصريح والاستنتاج وأي قيد للمصدر. أكمل Quick Challenge اعتمادًا على الفصل نفسه فقط، وإذا كانت الإجابة ضعيفة أو غير مؤكدة فارجع إلى الفقرة ذات الصلة.\n\nفي مستوى B2 لا تحول عبارات مثل «بعض المصادر» و«هناك آراء مختلفة» و«يُعتقد» و«وفقًا لرواية أخرى» إلى يقين، ولا سيما في الإطار التاريخي لمكان ميلاد إبراهيم وزمنه. في الكتابة التحليلية استخدم 120–150 كلمة واشرح ما الذي يثبته كل دليل.\n\nتحتوي الصفحة 36 في المصدر الخام على المراجع. يحافظ نظام التعلم على البنية من 1 إلى 40 ويستخدم الصفحة 36 نفسها لاختبار المعرفة من 8 أنشطة، من غير تعديل نص المراجع الخام. ولا توجد صفحة مستقلة لتحدي المفردات في هذا الكتاب. ثم أكمل المراجعة 8 وقسمي المعجم والتحدي النهائي 10.`;

export const abrahamB2StudentGuideMetadataBlueprintEn: StudentGuideMetadata = {
  title: 'Prophet Abraham B2 Self-Study Guide — Blueprint', level: 'B2', language: 'English', estimatedStudyTime: '35 chapter sessions plus Knowledge Check, review, and final assessment',
  whoIsThisFor: 'CEFR B2 learners studying the canonical Abraham story independently.',
  learningGoals: ['Support interpretation with textual evidence.', 'Preserve source qualification and degrees of certainty.', 'Analyse argument, cause, contrast, turning points, and motivation.', 'Use B2 vocabulary in context.'],
  recommendedUse: ['One chapter per focused session.', 'Reread after uncertain answers.', 'After Chapter 35 complete Knowledge 8, Review 8, both glossaries, and Final 10.'],
};

export const abrahamB2StudentGuideMetadataBlueprintAr: StudentGuideMetadata = {
  title: 'دليل الدراسة الذاتية — إبراهيم B2 — Blueprint', level: 'B2', language: 'Arabic', estimatedStudyTime: '35 جلسة فصلية إضافة إلى اختبار المعرفة والمراجعة والتقييم النهائي',
  whoIsThisFor: 'لمتعلم العربية في المستوى CEFR B2 الذي يدرس قصة إبراهيم بصورة مستقلة قائمة على الدليل.',
  learningGoals: ['دعم التفسير بدليل نصي.', 'الحفاظ على قيد المصدر ودرجات اليقين.', 'تحليل الحجة والسبب والمقارنة ونقاط التحول والدافع.', 'استخدام مفردات B2 في السياق.'],
  recommendedUse: ['فصل واحد في كل جلسة مركزة.', 'إعادة القراءة بعد الإجابة غير المؤكدة.', 'بعد الفصل 35 أكمل المعرفة 8 والمراجعة 8 وقسمي المعجم والنهائي 10.'],
};
