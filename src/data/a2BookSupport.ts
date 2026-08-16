import type {
  Hotspot,
  PageData,
  StudentGuideMetadata,
  StudentGuideSection,
  TeacherGuideMetadata,
} from '../types';

export type A2BookLanguage = 'en' | 'ar';

export interface A2HotspotText {
  title: string;
  description: string;
}

export type A2HotspotMap = Record<string, A2HotspotText>;

export interface A2BookConfig {
  storyIds: number[];
  knowledgeCheckPageId: number;
  vocabularyPageId: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
}

/**
 * Story-source preparation only. This function never creates questions,
 * assessments, vocabulary challenges, glossaries, or guides.
 * Learning material is owned exclusively by the blueprint engine.
 */
export const applyA2SourceHotspots = ({
  pages,
  storyIds,
  hotspotMap,
}: {
  pages: PageData[];
  storyIds: number[];
  hotspotMap: A2HotspotMap;
}): PageData[] => pages.map((page) => {
  if (!storyIds.includes(page.id)) return page;
  const hotspots: Hotspot[] | undefined = page.hotspots?.map((hotspot) => {
    const replacement = hotspotMap[hotspot.id];
    return replacement ? { ...hotspot, ...replacement } : hotspot;
  });
  return { ...page, hotspots };
});

export const buildA2TeacherGuideMetadata = (
  title: string,
  chapterCount: number,
  language: A2BookLanguage,
): TeacherGuideMetadata => language === 'ar'
  ? {
      title: `دليل المعلم — ${title}`,
      subtitle: 'دليل A2 للقراءة والاستماع والمفردات والتأمل بطريقة تعليمية أولا',
      level: 'A2',
      estimatedDuration: `${chapterCount} درسا، نحو 30–35 دقيقة لكل فصل`,
      targetAudience: 'متعلمات ومتعلمو مستوى A2 في المرحلة المتوسطة، مع إمكانية التكييف حسب العمر.',
      purpose: 'دعم فهم النص، والاستماع، والمفردات، والرجوع إلى جملة الإجابة بعد الخطأ.',
      approachDesc: 'معاينة قصيرة، قراءة واستماع، Quick Challenge للتثبيت، ثم الرجوع إلى النص والمحاولة مرة أخرى.',
      assessmentEvidence: 'الفكرة الرئيسة، جملة الإجابة، Quick Challenges، المفردات، Review Challenge من 8 أسئلة وFinal Challenge من 10 أسئلة.',
      readingFramework: {
        before: 'عاين العنوان والصورة وبعض الكلمات المهمة.',
        during: 'اقرأ واستمع على أجزاء قصيرة واسأل عن المعلومات الموجودة في النص.',
        after: 'نفذ Quick Challenge ثم عد إلى جملة الإجابة عند الخطأ.',
      },
      classroomManagement: ['استخدم الأسئلة للتعليم قبل القياس.', 'لا تضف معلومات دينية أو تاريخية غير موجودة في القصة.', 'قدّم مشاهد العنف أو الظلم بلغة هادئة وغير رسومية.'],
      valuesFocus: ['الإيمان', 'الصدق', 'الصبر', 'العدل', 'الرحمة', 'المسؤولية', 'مساعدة الآخرين'],
      languageFocus: ['الفكرة الرئيسة', 'التسلسل', 'السبب والنتيجة', 'المفردات في السياق', 'التلخيص القصير'],
      differentiationNotes: 'حافظ على نفس المعلومة، وقلل طول المهمة أو استخدم جملة نموذجية عند الحاجة.',
      sensitiveNotes: {
        title: 'ضوابط المحتوى',
        notes: ['الـ hotspots والأسئلة يجب أن تكون مرتبطة مباشرة بنص الفصل.', 'لا تقدم التأمل الشخصي على أنه حقيقة دينية جديدة.', 'لا تضف تفاصيل رسومية إلى مشاهد الألم أو العقاب.'],
      },
    }
  : {
      title: `Teacher Guide — ${title}`,
      subtitle: 'A2 teaching-first reading, listening, vocabulary, reflection, and review guide',
      level: 'A2',
      estimatedDuration: `${chapterCount} lessons, about 30–35 minutes per chapter`,
      targetAudience: 'Grades 5–6 EFL learners working around CEFR A2, adaptable for nearby age groups.',
      purpose: 'Support text comprehension, listening, vocabulary, and the habit of finding the answer sentence after a mistake.',
      approachDesc: 'Use a short preview, listen/read in small parts, a Quick Challenge for learning, then return to the text and try again.',
      assessmentEvidence: 'Main idea, answer sentence, Quick Challenges, vocabulary, an 8-question Review Challenge, and a 10-question Final Challenge.',
      readingFramework: {
        before: 'Preview the title, image, and a few important words.',
        during: 'Listen/read in short parts and ask questions that can be answered from the chapter.',
        after: 'Do the Quick Challenge, then return to the answer sentence after a mistake.',
      },
      classroomManagement: ['Use questions for teaching before scoring.', 'Do not add religious or historical claims that are not in the story.', 'Handle violence, punishment, or injustice in calm, non-graphic language.'],
      valuesFocus: ['faith', 'honesty', 'patience', 'justice', 'mercy', 'responsibility', 'helping others'],
      languageFocus: ['main idea', 'sequence', 'simple cause and effect', 'vocabulary in context', 'short retelling'],
      differentiationNotes: 'Keep the same learning fact; reduce task length or add a sentence frame when support is needed.',
      sensitiveNotes: {
        title: 'Content safeguards',
        notes: ['Hotspots and factual questions must be directly grounded in the chapter text.', 'Do not present an open personal reflection as a new religious fact.', 'Do not add graphic detail to scenes of pain, punishment, or violence.'],
      },
    };

export const buildA2StudentGuideSections = (language: A2BookLanguage): StudentGuideSection[] => language === 'ar'
  ? [
      { title: '1. انظر', icon: 'Eye', text: 'ابدأ بالعنوان والصورة.', points: ['توقع فكرة واحدة', 'لا تحاول معرفة كل شيء'] },
      { title: '2. استمع', icon: 'Ear', text: 'استمع مرة واتبع النص.', points: ['أعد الجزء الصعب فقط'] },
      { title: '3. اقرأ', icon: 'BookOpen', text: 'اقرأ جزءا قصيرا في كل مرة.', points: ['ابحث عن الفكرة الرئيسة'] },
      { title: '4. Word Notes', icon: 'PenTool', text: 'راجع الكلمات المميزة عند الحاجة.', points: ['اقرأ الجملة أولا', 'ثم راجع المعنى'] },
      { title: '5. Quick Challenge', icon: 'Target', text: 'جرّب النشاط بعد القراءة.', points: ['الخطأ يعني: ارجع إلى النص'] },
      { title: '6. ابحث عن الإجابة', icon: 'Compass', text: 'ابحث عن جملة الإجابة.', points: ['اقرأها مرة أخرى', 'حاول ثانية'] },
      { title: '7. اختم', icon: 'CheckCircle', text: 'قل معلومة واكتب جملة قصيرة.', points: ['راجع كلمة واحدة أيضا'] },
      { title: '8. راجع القصة', icon: 'Clock', text: 'استخدم Review Challenge ثم Final Challenge.', points: ['Review = 8', 'Final = 10'] },
    ]
  : [
      { title: '1. Look', icon: 'Eye', text: 'Start with the title and image.', points: ['Make one prediction', 'Do not try to know everything'] },
      { title: '2. Listen', icon: 'Ear', text: 'Listen once and follow the text.', points: ['Replay only the hard part'] },
      { title: '3. Read', icon: 'BookOpen', text: 'Read one short part at a time.', points: ['Find the main idea'] },
      { title: '4. Word Notes', icon: 'PenTool', text: 'Check underlined words when you need help.', points: ['Read the sentence first', 'Then check the meaning'] },
      { title: '5. Quick Challenge', icon: 'Target', text: 'Try the activity after you read.', points: ['A mistake means: go back to the text'] },
      { title: '6. Find the answer', icon: 'Compass', text: 'Find the answer sentence.', points: ['Read it again', 'Try again'] },
      { title: '7. Finish', icon: 'CheckCircle', text: 'Say one fact and write one short sentence.', points: ['Review one word too'] },
      { title: '8. Review the story', icon: 'Clock', text: 'Use the Review Challenge, then the Final Challenge.', points: ['Review = 8', 'Final = 10'] },
    ];

export const buildA2StudentGuideMetadata = (
  title: string,
  language: A2BookLanguage,
): StudentGuideMetadata => language === 'ar'
  ? {
      whoIsThisFor: 'لمتعلمي مستوى A2 الذين يريدون قراءة القصة والاستماع إليها والعمل بخطوات قصيرة وواضحة.',
      title: `دليل الدراسة الذاتية — ${title}`,
      subtitle: 'انظر • استمع • اقرأ • ابحث عن الإجابة • حاول مرة أخرى',
      level: 'A2',
      language: 'العربية',
      estimatedStudyTime: '15–20 دقيقة لكل فصل',
      learningGoals: ['فهم الفكرة الرئيسة', 'تعلم كلمات من السياق', 'استخدام الصوت', 'الرجوع إلى جملة الإجابة', 'مراجعة القصة كلها'],
      recommendedUse: ['فصل واحد في الجلسة', 'Quick Challenge بعد القراءة', 'مراجعة قصيرة قبل التحدي النهائي'],
    }
  : {
      whoIsThisFor: 'Grades 5–6 EFL learners around CEFR A2 who want short, clear steps for reading and listening on their own.',
      title: `Self-Study Guide — ${title}`,
      subtitle: 'Look • Listen • Read • Find the answer • Try again',
      level: 'A2',
      language: 'English',
      estimatedStudyTime: '15–20 minutes per chapter',
      learningGoals: ['Find the main idea', 'Learn words from the story', 'Use the audio', 'Find the answer sentence', 'Review the whole story'],
      recommendedUse: ['One chapter per study time', 'Quick Challenge after reading', 'Short review before the Final Challenge'],
    };

export const buildA2StudentGuideText = (
  title: string,
  language: A2BookLanguage,
): string => language === 'ar'
  ? `# دليل الدراسة الذاتية A2\n## ${title}\n\n### استخدم هذه الخطوات\n\n1. **انظر:** انظر إلى العنوان والصورة.\n2. **استمع:** استمع مرة واتبع النص.\n3. **اقرأ:** اقرأ جزءا قصيرا في كل مرة.\n4. **راجع الكلمات:** اقرأ الجملة أولا، ثم استخدم Word Notes.\n5. **جرّب:** نفذ Quick Challenge.\n6. **ابحث:** إذا أخطأت، ابحث عن جملة الإجابة.\n7. **حاول ثانية:** اقرأ الجملة مرة أخرى ثم أجب.\n8. **اختم:** قل معلومة، وراجع كلمة، واكتب جملة قصيرة.\n\n### تذكر\nلا تحتاج إلى فهم كل كلمة من أول مرة. اقرأ، جرّب، تحقق، ثم عد إلى النص عند الحاجة.\n\n### المراجعة النهائية\nReview Challenge فيه **8 أسئلة**. Final Challenge فيه **10 أسئلة**. قبل البدء، انظر إلى عناوين الفصول وتذكر معلومة واحدة من كل فصل.`
  : `# A2 Self-Study Guide\n## ${title}\n\n### Use these steps\n\n1. **Look:** Look at the title and image.\n2. **Listen:** Listen once and follow the text.\n3. **Read:** Read one short part at a time.\n4. **Check words:** Read the sentence first, then use Word Notes.\n5. **Try:** Do the Quick Challenge.\n6. **Find:** If an answer is wrong, find the answer sentence.\n7. **Try again:** Read the sentence again, then answer one more time.\n8. **Finish:** Say one fact, review one word, and write one short sentence.\n\n### Remember\nYou do not need to understand every word the first time. Read, try, check, and go back to the text when you need help.\n\n### Final review\nThe Review Challenge has **8 questions**. The Final Challenge has **10 questions**. Before you start, look at the chapter titles and remember one fact from each chapter.`;
