import type { StudentGuideMetadata, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import { meccaB2Pages } from './en/pages';
import { meccaB2PagesAr } from './ar/pages';
import { meccaB2BlueprintConfig } from './config';

const storyEn = meccaB2Pages.filter((page) => page.type === 'story' && meccaB2BlueprintConfig.storyIds.includes(page.id));
const storyAr = meccaB2PagesAr.filter((page) => page.type === 'story' && meccaB2BlueprintConfig.storyIds.includes(page.id));
const chapterListEn = storyEn.map((page) => `${page.id}. ${page.title}`).join('\n');
const chapterListAr = storyAr.map((page) => `${page.id}. ${page.title}`).join('\n');

const unitsEn = [storyEn.slice(0, 5), storyEn.slice(5, 9), storyEn.slice(9, 13), storyEn.slice(13, 17)].map((group, index) => ({
  title: `Unit ${index + 1}`,
  description: `Chapters ${group[0].id}–${group[group.length - 1].id}: ${group.map((page) => page.title).join('; ')}`,
}));
const unitsAr = [storyAr.slice(0, 5), storyAr.slice(5, 9), storyAr.slice(9, 13), storyAr.slice(13, 17)].map((group, index) => ({
  title: `الوحدة ${index + 1}`,
  description: `الفصول ${group[0].id}–${group[group.length - 1].id}: ${group.map((page) => page.title).join('؛ ')}`,
}));

export const meccaB2TeacherGuideMetadataBlueprintEn: TeacherGuideMetadata = {
  title: 'Mecca B2 Teacher Guide — Blueprint',
  level: 'B2',
  estimatedDuration: '17 chapter lessons plus Knowledge Check, review, and final assessment',
  targetLearners: 'CEFR B2 learners studying the historical, social, economic, and religious setting of Mecca.',
  assessmentEvidence: 'Evidence selection, systems reasoning, cause-effect, comparison, source-grounded interpretation, vocabulary in context, and 120–150 word analytical writing.',
  readingFramework: {
    before: 'Preview the title, image, and selected Word Notes without giving conclusions in advance.',
    during: 'Read first for the main system or argument, then reread for evidence, cause-effect links, contrasts, and source boundaries.',
    after: 'Require an evidence-based explanation before reflection and return learners to the exact paragraph after weak or unsupported answers.',
  },
  vocabularyApproach: 'Infer historical, social, economic, and religious terms from context, verify them with canonical Word Notes, and reuse them in text-grounded speaking and writing.',
  grammarApproach: 'Use cause-effect, contrast, concession, reporting verbs, hedging, and evidence language to explain connected systems precisely.',
  speakingApproach: 'Require learners to identify the exact sentence or event supporting each analytical claim.',
  writingApproach: 'Use evidence → interpretation → qualification in a 120–150 word analytical paragraph.',
  differentiationNotes: 'Provide relationship maps and evidence frames for support; require two independently explained details from faster learners where available.',
  implementationPlans: {
    optionA: { title: 'Four-Unit Intensive Plan', steps: unitsEn.map((unit, index) => ({ time: `Unit ${index + 1}`, activity: unit.description })) },
    optionB: { title: 'Standard Split — Four Thematic Units', lessons: unitsEn },
    optionC: { title: 'Extended Project — 17 Lessons', steps: storyEn.map((page) => ({ time: `Lesson ${page.id}`, activity: `Chapter ${page.id}: evidence, Word Notes, analysis, Quick Challenge, and written synthesis.` })) },
  },
  sensitiveNotes: {
    title: 'Sensitive historical content',
    notes: [
      'When chapters discuss slavery, discrimination, oppression, boycott, or persecution, focus on systems, dignity, justice, and consequences.',
      'Do not amplify suffering beyond what is necessary to understand the chapter.',
    ],
  },
};

export const meccaB2TeacherGuideMetadataBlueprintAr: TeacherGuideMetadata = {
  title: 'دليل المعلم — مكة B2 — Blueprint',
  level: 'B2',
  estimatedDuration: '17 حصة فصلية إضافة إلى اختبار المعرفة والمراجعة والتقييم النهائي',
  targetLearners: 'متعـلمو العربية في مستوى CEFR B2 الذين يدرسون السياق التاريخي والاجتماعي والاقتصادي والديني لمكة.',
  assessmentEvidence: 'اختيار الدليل، تحليل الأنظمة، السبب والنتيجة، المقارنة، التفسير المرتبط بالنص، المفردات في السياق، والكتابة التحليلية من 120–150 كلمة.',
  readingFramework: {
    before: 'عاين العنوان والصورة وبعض Word Notes دون تقديم الاستنتاجات مسبقًا.',
    during: 'اقرأ أولًا لفهم النظام أو الحجة الرئيسة، ثم أعد القراءة للدليل والسبب والنتيجة والمقارنة وحدود المصدر.',
    after: 'اطلب تفسيرًا مدعومًا بالدليل قبل التأمل، وأعد المتعلم إلى الفقرة الدقيقة بعد الإجابة الضعيفة أو غير المدعومة.',
  },
  vocabularyApproach: 'استنتج المصطلحات التاريخية والاجتماعية والاقتصادية والدينية من السياق ثم تحقق منها في Word Notes واستخدمها في كلام وكتابة مرتبطين بالنص.',
  grammarApproach: 'استخدم السبب والنتيجة والمقارنة والاستدراك وأفعال القول والتحفظ ولغة الدليل لشرح الأنظمة المترابطة بدقة.',
  speakingApproach: 'اطلب من المتعلم تحديد الجملة أو الحدث الذي يدعم كل ادعاء تحليلي.',
  writingApproach: 'استخدم: دليل ← تفسير ← تقييد في فقرة تحليلية من 120–150 كلمة.',
  differentiationNotes: 'قدّم خرائط للعلاقات وأطرًا للدليل عند الحاجة، واطلب من المتعلمين الأسرع تفسير دليلين مستقلين عندما يتيحهما الفصل.',
  implementationPlans: {
    optionA: { title: 'خطة مكثفة من أربع وحدات', steps: unitsAr.map((unit, index) => ({ time: `الوحدة ${index + 1}`, activity: unit.description })) },
    optionB: { title: 'تقسيم قياسي — أربع وحدات موضوعية', lessons: unitsAr },
    optionC: { title: 'خطة موسعة — 17 حصة', steps: storyAr.map((page) => ({ time: `الحصة ${page.id}`, activity: `الفصل ${page.id}: دليل، Word Notes، تحليل، Quick Challenge، وتركيب كتابي.` })) },
  },
  sensitiveNotes: {
    title: 'محتوى تاريخي حساس',
    notes: [
      'عند مناقشة الرق والتمييز والظلم والمقاطعة والاضطهاد ركز على البنية والكرامة والعدالة والنتائج.',
      'لا توسع وصف المعاناة أكثر مما يحتاجه فهم الفصل.',
    ],
  },
};

export const meccaB2StudentGuideSectionsBlueprintEn: StudentGuideSection[] = [
  { title: '1. Read the 17 Canonical Chapters', icon: 'BookOpen', text: 'Study all 17 narrative chapters in order and treat the chapter prose as the source of truth.', points: ['17 canonical chapters', 'Text before outside knowledge', 'Reread after uncertainty'] },
  { title: '2. Map Connected Systems', icon: 'Network', text: 'Connect geography, trade, pilgrimage, wealth, tribal protection, religion, social inequality, and political authority.', points: ['Cause and consequence', 'Compare systems', 'Avoid isolated facts'] },
  { title: '3. Handle Sensitive History Carefully', icon: 'Shield', text: 'When the text discusses slavery, discrimination, persecution, or boycott, explain the structure and consequence without sensationalizing suffering.', points: ['Human dignity', 'Text evidence', 'No graphic amplification'] },
  { title: '4. Write Analytically', icon: 'PenTool', text: 'Use 120–150 words, two distinct chapter details where available, and explain what each detail proves.', points: ['Claim', 'Evidence', 'Interpretation and qualification'] },
  { title: '5. Review the Whole Book', icon: 'Award', text: 'After Chapter 17, complete Knowledge, Review, both glossaries, and Final Challenge.', points: ['Knowledge: 8', 'Review: 8', 'Final: 10', 'No separate Vocabulary Challenge'] },
];

export const meccaB2StudentGuideSectionsBlueprintAr: StudentGuideSection[] = [
  { title: '1. اقرأ الفصول السبعة عشر المعتمدة', icon: 'BookOpen', text: 'ادرس الفصول السردية السبعة عشر بالترتيب واجعل نص الفصل نفسه مصدر الحقيقة.', points: ['17 فصلًا معتمدًا', 'النص قبل المعرفة الخارجية', 'إعادة القراءة عند التردد'] },
  { title: '2. اربط الأنظمة ببعضها', icon: 'Network', text: 'اربط الجغرافيا والتجارة والحج والثروة والحماية القبلية والدين والتفاوت الاجتماعي والسلطة السياسية.', points: ['سبب ونتيجة', 'مقارنة الأنظمة', 'تجنب الحقائق المعزولة'] },
  { title: '3. تعامل بحذر مع التاريخ الحساس', icon: 'Shield', text: 'عندما يناقش النص الرق أو التمييز أو الاضطهاد أو المقاطعة فاشرح البنية والنتيجة دون تضخيم المعاناة.', points: ['الكرامة الإنسانية', 'دليل من النص', 'لا تضخيم وصفي'] },
  { title: '4. اكتب تحليليًا', icon: 'PenTool', text: 'اكتب 120–150 كلمة مستخدمًا دليلين مختلفين عندما يكونان متاحين واشرح ما يثبته كل دليل.', points: ['ادعاء', 'دليل', 'تفسير وتقييد'] },
  { title: '5. راجع الكتاب كاملًا', icon: 'Award', text: 'بعد الفصل 17 أكمل اختبار المعرفة والمراجعة وقسمي المعجم والتحدي النهائي.', points: ['المعرفة: 8', 'المراجعة: 8', 'النهائي: 10', 'لا يوجد تحدي مفردات مستقل'] },
];

export const meccaB2StudentGuideTextBlueprintEn = `# Mecca B2 Self-Study Guide\n\nStudy these 17 canonical chapters in order:\n\n${chapterListEn}\n\nRead first for the chapter's main system or argument. Reread to identify evidence and the links among geography, trade, hierarchy, belief, protection, and power. Complete each Quick Challenge only from the chapter. In sensitive chapters, describe oppression and inequality only to the level needed to understand the text. At B2, write 120–150 words and explain what each piece of evidence proves. After Chapter 17, complete Knowledge 8, Review 8, both glossary sections, and Final 10.`;

export const meccaB2StudentGuideTextBlueprintAr = `# دليل الدراسة الذاتية — مكة B2\n\nادرس هذه الفصول السبعة عشر المعتمدة بالترتيب:\n\n${chapterListAr}\n\nاقرأ أولًا لفهم النظام أو الحجة الرئيسة، ثم أعد القراءة لتحديد الدليل والروابط بين الجغرافيا والتجارة والطبقات والعقيدة والحماية والسلطة. أكمل Quick Challenge اعتمادًا على الفصل نفسه فقط. وفي الفصول الحساسة اشرح الظلم والتفاوت بالقدر اللازم لفهم النص دون تضخيم. في مستوى B2 اكتب 120–150 كلمة واشرح ما الذي يثبته كل دليل. بعد الفصل 17 أكمل المعرفة 8 والمراجعة 8 وقسمي المعجم والنهائي 10.`;

export const meccaB2StudentGuideMetadataBlueprintEn: StudentGuideMetadata = {
  title: 'Mecca B2 Self-Study Guide — Blueprint',
  level: 'B2',
  language: 'English',
  estimatedStudyTime: '17 chapter sessions plus Knowledge Check, review, and final assessment',
  whoIsThisFor: 'CEFR B2 learners studying the canonical Mecca unit independently.',
  learningGoals: ['Connect historical and social systems with textual evidence.', 'Analyse cause, contrast, power, inequality, and change.', 'Use B2 vocabulary in context.', 'Write 120–150 word evidence-based analytical responses.'],
  recommendedUse: ['One chapter per session.', 'Reread after weak or incorrect answers.', 'After Chapter 17 complete Knowledge 8, Review 8, both glossaries, and Final 10.'],
};

export const meccaB2StudentGuideMetadataBlueprintAr: StudentGuideMetadata = {
  title: 'دليل الدراسة الذاتية — مكة B2 — Blueprint',
  level: 'B2',
  language: 'Arabic',
  estimatedStudyTime: '17 جلسة فصلية إضافة إلى اختبار المعرفة والمراجعة والتقييم النهائي',
  whoIsThisFor: 'متعـلمو مستوى CEFR B2 الذين يدرسون وحدة مكة المعتمدة بصورة مستقلة.',
  learningGoals: ['ربط الأنظمة التاريخية والاجتماعية بالدليل النصي.', 'تحليل السبب والمقارنة والسلطة والتفاوت والتغير.', 'استخدام مفردات B2 في السياق.', 'كتابة استجابات تحليلية مدعومة بالدليل من 120–150 كلمة.'],
  recommendedUse: ['فصل واحد في كل جلسة.', 'أعد القراءة بعد الإجابة الضعيفة أو الخاطئة.', 'بعد الفصل 17 أكمل المعرفة 8 والمراجعة 8 وقسمي المعجم والنهائي 10.'],
};
