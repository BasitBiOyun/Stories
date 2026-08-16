import type { StudentGuideMetadata, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import { yunusB2Pages } from './en/pages';
import { pages as yunusEmreB2PagesAr } from './ar/pages';
import { yunusEmreB2BlueprintConfig } from './config';

const storyEn = yunusB2Pages.filter(page => page.type === 'story' && yunusEmreB2BlueprintConfig.storyIds.includes(page.id));
const storyAr = yunusEmreB2PagesAr.filter(page => page.type === 'story' && yunusEmreB2BlueprintConfig.storyIds.includes(page.id));
const chapterListEn = storyEn.map(page => `${page.id}. ${page.title}`).join('\n');
const chapterListAr = storyAr.map(page => `${page.id}. ${page.title}`).join('\n');
const groupsEn = [storyEn.slice(0, 3), storyEn.slice(3, 6), storyEn.slice(6, 10), storyEn.slice(10, 13)];
const groupsAr = [storyAr.slice(0, 3), storyAr.slice(3, 6), storyAr.slice(6, 10), storyAr.slice(10, 13)];
const unitsEn = groupsEn.map((group, index) => ({ title: `Unit ${index + 1}`, description: `Chapters ${group[0].id}–${group[group.length - 1].id}: ${group.map(page => page.title).join('; ')}` }));
const unitsAr = groupsAr.map((group, index) => ({ title: `الوحدة ${index + 1}`, description: `الفصول ${group[0].id}–${group[group.length - 1].id}: ${group.map(page => page.title).join('؛ ')}` }));

export const yunusEmreB2TeacherGuideMetadataBlueprintEn: TeacherGuideMetadata = {
  title: 'Yunus Emre B2 Teacher Guide — Blueprint', level: 'B2',
  estimatedDuration: '13 chapter lessons plus Knowledge, Vocabulary, Review, and Final assessment',
  targetLearners: 'CEFR B2 learners studying Yunus Emre through historical, literary, ethical, and Sûfî contexts.',
  assessmentEvidence: 'Evidence selection, historical cause-effect, source attribution, literary interpretation, comparison, vocabulary in context, and 120–150 word analytical writing.',
  readingFramework: {
    before: 'Preview historical and literary context and essential Word Notes without presenting interpretation as fact.',
    during: 'Read for argument and evidence. Require explicit attribution when the chapter presents Sûfî thought, metaphor, or a historical-source qualification.',
    after: 'Build an evidence → interpretation → qualification response and return learners to the exact chapter sentence after unsupported claims.',
  },
  vocabularyApproach: 'Infer canonical Word Notes from context, then verify meaning. For Sûfî, mystical, or intellect terms, preserve the chapter’s attribution framing.',
  grammarApproach: 'Practise reporting verbs, source qualifiers, cause-effect, contrast, concession, and careful analytical language such as according to the chapter and in Yunus Emre’s thought.',
  speakingApproach: 'Require learners to identify the exact sentence supporting a historical, literary, or Sûfî interpretation before discussing it.',
  writingApproach: 'Write 120–150 words using evidence → interpretation → qualification and two distinct chapter details where available.',
  differentiationNotes: 'Offer evidence frames and relationship maps for support; ask faster learners to distinguish direct evidence, historical attribution, metaphor, and interpretation.',
  implementationPlans: {
    optionA: { title: 'Four-Unit Intensive Plan', steps: unitsEn.map((unit, index) => ({ time: `Unit ${index + 1}`, activity: unit.description })) },
    optionB: { title: 'Standard Split — Four Thematic Units', lessons: unitsEn },
    optionC: { title: 'Extended Project — 13 Lessons', steps: storyEn.map(page => ({ time: `Lesson ${page.id}`, activity: `Chapter ${page.id}: evidence, Word Notes, source attribution, Quick Challenge, and analytical synthesis.` })) },
  },
  sensitiveNotes: {
    title: 'Historical violence and attributed Sûfî language',
    notes: [
      'In Mongol-era chapters, focus on political, economic, and social consequences without amplifying graphic violence.',
      'For Chapters 8–11 especially, distinguish what the chapter attributes to Yunus Emre or a named Sûfî theory from an unqualified doctrinal statement.',
      'Keep Page 14 as References; it is not a fourteenth learning chapter.',
    ],
  },
};

export const yunusEmreB2TeacherGuideMetadataBlueprintAr: TeacherGuideMetadata = {
  title: 'دليل المعلم — يونس إمره B2 — Blueprint', level: 'B2',
  estimatedDuration: '13 حصة فصلية إضافة إلى المعرفة والمفردات والمراجعة والتقييم النهائي',
  targetLearners: 'متعلمو العربية في مستوى CEFR B2 الذين يدرسون يونس إمره ضمن سياقه التاريخي والأدبي والأخلاقي والصوفي.',
  assessmentEvidence: 'اختيار الدليل، السبب والنتيجة التاريخية، نسبة الأفكار إلى مصدرها، التفسير الأدبي، المقارنة، المفردات في السياق، والكتابة التحليلية من 120–150 كلمة.',
  readingFramework: {
    before: 'عاين السياق التاريخي والأدبي وWord Notes الأساسية دون تقديم التفسير بوصفه حقيقة غير مقيدة.',
    during: 'اقرأ للحجة والدليل، وحافظ على نسبة الأفكار إلى مصدرها عندما يعرض الفصل فكرًا صوفيًا أو استعارة أو قيدًا تاريخيًا.',
    after: 'ابنِ استجابة على نمط دليل ← تفسير ← تقييد، وأعد المتعلم إلى الجملة الدقيقة عند ظهور ادعاء غير مدعوم.',
  },
  vocabularyApproach: 'استنتج Word Notes المعتمدة من السياق ثم تحقق من معناها، وحافظ على صيغة النسبة إلى الفصل في المصطلحات الصوفية أو الروحية أو المتعلقة بالعقل.',
  grammarApproach: 'تدرّب على أفعال القول ونسبة الرأي والسبب والنتيجة والمقارنة والاستدراك ولغة التحفظ مثل: وفقًا للفصل، وفي فكر يونس إمره.',
  speakingApproach: 'اطلب من المتعلم تحديد الجملة الدقيقة التي تدعم كل تفسير تاريخي أو أدبي أو صوفي قبل مناقشته.',
  writingApproach: 'اكتب 120–150 كلمة بصيغة دليل ← تفسير ← تقييد مع دليلين مختلفين عندما يتيحهما الفصل.',
  differentiationNotes: 'قدّم أطرًا للدليل وخرائط للعلاقات عند الحاجة، واطلب من المتعلمين الأسرع التمييز بين الدليل الصريح والنسبة التاريخية والاستعارة والتفسير.',
  implementationPlans: {
    optionA: { title: 'خطة مكثفة من أربع وحدات', steps: unitsAr.map((unit, index) => ({ time: `الوحدة ${index + 1}`, activity: unit.description })) },
    optionB: { title: 'تقسيم قياسي — أربع وحدات موضوعية', lessons: unitsAr },
    optionC: { title: 'خطة موسعة — 13 حصة', steps: storyAr.map(page => ({ time: `الحصة ${page.id}`, activity: `الفصل ${page.id}: دليل، Word Notes، نسبة المصدر، Quick Challenge، وتركيب تحليلي.` })) },
  },
  sensitiveNotes: {
    title: 'العنف التاريخي واللغة الصوفية المنسوبة',
    notes: [
      'في فصول العصر المغولي ركز على النتائج السياسية والاقتصادية والاجتماعية دون تضخيم وصف العنف.',
      'في الفصول 8–11 خصوصًا ميّز بين ما ينسبه الفصل إلى يونس إمره أو إلى نظرية صوفية مسماة وبين تقرير عقائدي غير مقيد.',
      'تبقى الصفحة 14 صفحة مراجع وليست فصلًا تعليميًا رابع عشر.',
    ],
  },
};

export const yunusEmreB2StudentGuideSectionsBlueprintEn: StudentGuideSection[] = [
  { title: '1. Study 13 Narrative Chapters', icon: 'BookOpen', text: 'Read Chapters 1–13 in order. Page 14 is the canonical References page and remains reference material.', points: ['13 narrative chapters', 'Page 14 = References', 'Chapter text is the evidence source'] },
  { title: '2. Attribute Before Interpreting', icon: 'Quote', text: 'When the text discusses Sûfî thought, metaphor, vahdet-i vücut, the heart, love, or intellect, begin with “According to the chapter” or “In Yunus Emre’s thought.”', points: ['Attribute the idea', 'Then explain the evidence', 'Do not turn metaphor into unqualified doctrine'] },
  { title: '3. Analyse Historical Pressure Structurally', icon: 'Shield', text: 'For the Mongol-era chapters, explain governance, migration, dependency, taxation, and social consequences without repeating graphic violence unnecessarily.', points: ['Cause and consequence', 'Human impact with dignity', 'No graphic amplification'] },
  { title: '4. Write at B2 Level', icon: 'PenTool', text: 'Write 120–150 words using evidence → interpretation → qualification and two distinct chapter details where available.', points: ['Analytical claim', 'Two evidence points', 'Careful qualification'] },
  { title: '5. Complete the Whole-Book Review', icon: 'Award', text: 'After Chapter 13 and the References page, complete Knowledge, Vocabulary, both glossaries, Review, and Final Challenge.', points: ['Knowledge: 8', 'Vocabulary: 10', 'Review: 8', 'Final: 10'] },
];

export const yunusEmreB2StudentGuideSectionsBlueprintAr: StudentGuideSection[] = [
  { title: '1. ادرس الفصول السردية الثلاثة عشر', icon: 'BookOpen', text: 'اقرأ الفصول 1–13 بالترتيب. الصفحة 14 هي صفحة المراجع المعتمدة وتبقى مادة مرجعية.', points: ['13 فصلًا سرديًا', 'الصفحة 14 = المراجع', 'نص الفصل هو مصدر الدليل'] },
  { title: '2. انسب الفكرة قبل تفسيرها', icon: 'Quote', text: 'عند مناقشة الفكر الصوفي أو الاستعارة أو وحدة الوجود أو القلب أو المحبة أو العقل ابدأ بعبارة «وفقًا للفصل» أو «في فكر يونس إمره».', points: ['انسب الفكرة', 'ثم فسّر الدليل', 'لا تحول الاستعارة إلى تقرير عقائدي غير مقيد'] },
  { title: '3. حلل الضغط التاريخي بنيويًا', icon: 'Shield', text: 'في فصول العصر المغولي اشرح الحكم والهجرة والتبعية والضرائب والنتائج الاجتماعية دون تكرار أو تضخيم العنف.', points: ['سبب ونتيجة', 'الأثر الإنساني بكرامة', 'لا تضخيم وصفي'] },
  { title: '4. اكتب بمستوى B2', icon: 'PenTool', text: 'اكتب 120–150 كلمة بصيغة دليل ← تفسير ← تقييد مستخدمًا دليلين مختلفين عندما يتيحهما الفصل.', points: ['ادعاء تحليلي', 'دليلان', 'تقييد دقيق'] },
  { title: '5. أكمل مراجعة الكتاب', icon: 'Award', text: 'بعد الفصل 13 وصفحة المراجع أكمل المعرفة والمفردات وقسمي المعجم والمراجعة والتحدي النهائي.', points: ['المعرفة: 8', 'المفردات: 10', 'المراجعة: 8', 'النهائي: 10'] },
];

export const yunusEmreB2StudentGuideTextBlueprintEn = `# Yunus Emre B2 Self-Study Guide\n\nStudy these 13 canonical narrative chapters:\n\n${chapterListEn}\n\nPage 14 is the canonical References page and is not a fourteenth learning chapter. Read once for the main line of thought, then reread for evidence, cause-effect, historical attribution, and interpretation. In Chapters 8–11 especially, write “According to the chapter…” or “In Yunus Emre’s thought…” before explaining Sûfî or metaphorical language. Do not convert a literary or mystical formulation into an unqualified doctrinal statement. In the Mongol-era chapters, focus on structural causes and consequences without amplifying graphic violence. Complete the Quick Challenge after each chapter. At B2, finish with a 120–150 word evidence-based analytical response. Then complete Knowledge 8, Vocabulary 10, both Master Glossary sections, Review 8, and Final 10.`;

export const yunusEmreB2StudentGuideTextBlueprintAr = `# دليل الدراسة الذاتية — يونس إمره B2\n\nادرس الفصول السردية الثلاثة عشر المعتمدة:\n\n${chapterListAr}\n\nالصفحة 14 هي صفحة المراجع المعتمدة وليست فصلًا تعليميًا رابع عشر. اقرأ أولًا لفهم خط التفكير الرئيس، ثم أعد القراءة للدليل والسبب والنتيجة والنسبة التاريخية والتفسير. وفي الفصول 8–11 خصوصًا استخدم «وفقًا للفصل…» أو «في فكر يونس إمره…» قبل تفسير اللغة الصوفية أو الاستعارية. لا تحول الصياغة الأدبية أو الصوفية إلى تقرير عقائدي غير مقيد. وفي فصول العصر المغولي ركز على الأسباب والنتائج البنيوية دون تضخيم وصف العنف. نفذ Quick Challenge بعد كل فصل. وفي مستوى B2 اختم باستجابة تحليلية من 120–150 كلمة مدعومة بالدليل. ثم أكمل المعرفة 8 والمفردات 10 وقسمي المعجم والمراجعة 8 والنهائي 10.`;

export const yunusEmreB2StudentGuideMetadataBlueprintEn: StudentGuideMetadata = {
  title: 'Yunus Emre B2 Self-Study Guide — Blueprint', level: 'B2', language: 'English',
  estimatedStudyTime: '13 chapter sessions plus Knowledge, Vocabulary, Review, and Final assessment',
  whoIsThisFor: 'CEFR B2 learners studying the canonical Yunus Emre unit independently.',
  learningGoals: ['Connect historical context with Yunus Emre’s literary and ethical role.', 'Distinguish chapter evidence, attributed Sûfî thought, metaphor, and interpretation.', 'Analyse cause-effect and social consequences without overgeneralisation.', 'Write 120–150 word evidence-based analytical responses.'],
  recommendedUse: ['Study Chapters 1–13 in order and keep Page 14 as References.', 'Reread after weak or unsupported answers.', 'Complete Knowledge 8, Vocabulary 10, both glossaries, Review 8, and Final 10.'],
};

export const yunusEmreB2StudentGuideMetadataBlueprintAr: StudentGuideMetadata = {
  title: 'دليل الدراسة الذاتية — يونس إمره B2 — Blueprint', level: 'B2', language: 'العربية',
  estimatedStudyTime: '13 جلسة فصلية إضافة إلى المعرفة والمفردات والمراجعة والتقييم النهائي',
  whoIsThisFor: 'متعلمو العربية في مستوى CEFR B2 الذين يدرسون وحدة يونس إمره المعتمدة بصورة مستقلة.',
  learningGoals: ['ربط السياق التاريخي بدور يونس إمره الأدبي والأخلاقي.', 'التمييز بين دليل الفصل والفكر الصوفي المنسوب والاستعارة والتفسير.', 'تحليل السبب والنتيجة والآثار الاجتماعية دون تعميم زائد.', 'كتابة استجابات تحليلية من 120–150 كلمة مدعومة بالدليل.'],
  recommendedUse: ['ادرس الفصول 1–13 بالترتيب واجعل الصفحة 14 للمراجع.', 'أعد القراءة بعد الإجابات الضعيفة أو غير المدعومة.', 'أكمل المعرفة 8 والمفردات 10 وقسمي المعجم والمراجعة 8 والنهائي 10.'],
};
