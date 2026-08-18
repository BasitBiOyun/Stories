import type { StudentGuideSection, TeacherGuideSection } from '../types';
import type {
  BlueprintCognitiveFocus,
  BlueprintLanguage,
  LearningBlueprint,
  LearningBlueprintChapter,
} from './learningBlueprint';

type GuideMode = 'teacher' | 'self';
type EvidencePoint = LearningBlueprintChapter['evidencePoints'][number];

const cleanCurriculumText = (value: string): string => value
  .replace(
    /TYMM\s+YD(?:AB|DB)\d+\s+(?:(?:supporting|primary)|(?:داعم|أساسي))\s*(?:\+\s*CEFR\s+B1)?\s*:\s*/gi,
    '',
  )
  .trim();

const simplifyStudentLanguage = (value: string): string => value
  .replace(/claim\s*[→-]\s*evidence\s*[→-]\s*explanation/gi, 'answer with a clear reason and one or two details from the chapter')
  .replace(/evidence-based/gi, 'based on the chapter')
  .replace(/textual evidence/gi, 'a supporting sentence from the chapter')
  .replace(/evidence point/gi, 'useful detail')
  .replace(/evidence/gi, 'supporting detail')
  .replace(/supported inference/gi, 'reasonable idea supported by the chapter')
  .replace(/inference/gi, 'idea you understand from the chapter')
  .replace(/misconception/gi, 'mistake in your understanding')
  .replace(/diagnostic check/gi, 'quick check')
  .replace(/diagnostic/gi, 'quick')
  .replace(/retrieve/gi, 'remember')
  .replace(/retrieval/gi, 'memory review')
  .replace(/scaffold/gi, 'help')
  .replace(/cognitive/gi, 'thinking')
  .replace(/relationship/gi, 'connection')
  .replace(/relationships/gi, 'connections');

/** Student-facing material must not expose curriculum or teacher-training language. */
export const sanitizeB1StudentGuideSections = (
  sections: StudentGuideSection[],
): StudentGuideSection[] => sections.map(section => {
  const titleMap: Record<string, string> = {
    'Read for Relationships': 'Find the Main Connection',
    'Separate Evidence and Inference': 'Check What the Chapter Really Shows',
    'Use Grammar to Explain Meaning': 'Notice Useful Language',
    'Learn Vocabulary in Context': 'Learn Words from the Story',
    'Repair, Don’t Reread Everything': 'Fix Only What You Missed',
    'Retrieve and Explain': 'Remember and Explain',
    'اقرأ للعلاقات': 'ابحث عن الفكرة والعلاقة الرئيسة',
    'افصل الدليل عن الاستنتاج': 'تحقق مما يوضحه الفصل فعلًا',
    'استخدم القواعد لشرح المعنى': 'لاحظ اللغة المفيدة',
    'تعلم المفردات في السياق': 'تعلم الكلمات من القصة',
    'صحح ولا تعِد قراءة كل شيء': 'صحح الجزء الذي لم تفهمه فقط',
    'استرجع واشرح': 'تذكر واشرح',
  };

  return {
    ...section,
    title: titleMap[section.title] ?? section.title,
    text: simplifyStudentLanguage(cleanCurriculumText(section.text)),
    points: section.points.map(point => simplifyStudentLanguage(cleanCurriculumText(point))),
  };
});

export const sanitizeB1StudentGuideText = (
  text: string,
  language: BlueprintLanguage,
): string => {
  const withoutCurriculumBlock = language === 'en'
    ? text.replace(/\n## TYMM \/ CEFR Focus\n[\s\S]*?(?=\n## Chapter 1\n)/, '\n')
    : text.replace(/\n## تركيز TYMM \/ CEFR\n[\s\S]*?(?=\n## الفصل 1\n)/, '\n');

  const cleaned = withoutCurriculumBlock
    .split('\n')
    .map(line => simplifyStudentLanguage(cleanCurriculumText(line)))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  if (language === 'en') {
    return cleaned
      .replace(/B1 does not mean abstract analysis\. It means explaining clear connections with supporting detail\./g, 'At B1, focus on understanding why things happen, how ideas are connected, and what the chapter is trying to show.')
      .replace(/### Language to Notice/g, '### Useful Language')
      .replace(/### Study Route/g, '### How to Study This Chapter')
      .replace(/### Prompts/g, '### Questions to Think About')
      .replace(/mark two useful details/gi, 'find two useful details')
      .replace(/answer with a clear reason and one or two details from the chapter response/gi, 'short 3–5 sentence answer');
  }

  return cleaned
    .replace(/لا يعني B1 التحليل المجرد؛ بل شرح العلاقات الواضحة بدليل\./g, 'في مستوى B1 ركز على فهم سبب الأحداث وكيف ترتبط الأفكار وما الذي يوضحه الفصل.')
    .replace(/### اللغة التي تلاحظها/g, '### لغة مفيدة')
    .replace(/### مسار الدراسة/g, '### كيف تدرس هذا الفصل')
    .replace(/### أسئلة/g, '### أسئلة للتفكير');
};

const clip = (value: string, max = 155): string => {
  const normalized = value.replace(/\s+/g, ' ').trim();
  return normalized.length <= max ? normalized : `${normalized.slice(0, max - 1).trimEnd()}…`;
};

const preferredEvidence = (chapter: LearningBlueprintChapter): EvidencePoint | undefined => (
  chapter.evidencePoints.find(point => point.focus !== 'direct' && point.focus !== 'vocabulary')
  ?? chapter.evidencePoints[0]
);

const secondaryEvidence = (
  chapter: LearningBlueprintChapter,
  preferredId?: string,
): EvidencePoint | undefined => chapter.evidencePoints.find(point => point.id !== preferredId);

const supportEn = (focus: BlueprintCognitiveFocus, quote: string, mode: GuideMode): string => {
  const lead = mode === 'teacher' ? 'If learners need support, ' : 'If you get stuck, ';
  switch (focus) {
    case 'cause-result': return `${lead}start from “${quote}”. Mark the cause and result separately, then complete: “Because ___, ___ happened.”`;
    case 'comparison': return `${lead}make two columns from “${quote}”. Complete: “___, while ___.” Use only differences stated in the chapter.`;
    case 'sequence': return `${lead}use “${quote}” as the middle event. Find what happened just before and just after it.`;
    case 'motivation': return `${lead}separate what happened from why it happened in “${quote}”. Answer What? and Why? before joining the ideas.`;
    case 'inference': return `${lead}write “${quote}” under WHAT THE CHAPTER SAYS, then add one reasonable idea under WHAT I UNDERSTAND.`;
    case 'turning-point': return `${lead}use “${quote}” in a BEFORE / CHANGE / AFTER chart and name one result of the change.`;
    case 'character-action': return `${lead}start with the action in “${quote}”. Then explain what that action shows about the person.`;
    case 'theme': return `${lead}return to “${quote}”. First say what happened; then say what lesson the event supports.`;
    case 'main-idea': return `${lead}find two key words in “${quote}” and use them to complete: “This chapter mainly shows ___.”`;
    case 'vocabulary': return `${lead}reread the sentence around “${quote}” and try a simple synonym before checking the meaning.`;
    case 'direct':
    default: return `${lead}find “${quote}”, answer in one sentence, and add why the detail matters.`;
  }
};

const supportAr = (focus: BlueprintCognitiveFocus, quote: string, mode: GuideMode): string => {
  const lead = mode === 'teacher' ? 'إذا احتاج المتعلمون إلى دعم، ' : 'إذا واجهت صعوبة، ';
  switch (focus) {
    case 'cause-result': return `${lead}ابدأ من «${quote}». حدّد السبب والنتيجة ثم أكمل: «لأن ___، حدث ___.»`;
    case 'comparison': return `${lead}أنشئ عمودين انطلاقًا من «${quote}». أكمل: «___، بينما ___.» واستخدم الفروق التي يذكرها الفصل فقط.`;
    case 'sequence': return `${lead}اجعل «${quote}» الحدث الأوسط، ثم حدد ما حدث قبله مباشرة وما حدث بعده.`;
    case 'motivation': return `${lead}افصل ما حدث عن سبب حدوثه في «${quote}». أجب: ماذا؟ ولماذا؟`;
    case 'inference': return `${lead}اكتب «${quote}» تحت «ما يقوله الفصل»، ثم أضف فكرة معقولة تحت «ما أفهمه من الفصل».`;
    case 'turning-point': return `${lead}ضع «${quote}» في مخطط: قبل / التغير / بعد، وحدد نتيجة واحدة لهذا التغير.`;
    case 'character-action': return `${lead}ابدأ بالفعل في «${quote}»، ثم اشرح ما الذي يوضحه هذا الفعل عن الشخص.`;
    case 'theme': return `${lead}ارجع إلى «${quote}». قل أولًا ما حدث، ثم حدد الدرس الذي يدعمه الحدث.`;
    case 'main-idea': return `${lead}حدد كلمتين أساسيتين في «${quote}» واستخدمهما لإكمال: «يبين هذا الفصل أساسًا ___.»`;
    case 'vocabulary': return `${lead}أعد قراءة الجملة حول «${quote}» وجرب مرادفًا بسيطًا قبل التحقق من المعنى.`;
    case 'direct':
    default: return `${lead}اعثر على «${quote}»، وأجب بجملة واحدة، ثم أضف سبب أهمية هذه المعلومة.`;
  }
};

const pedagogyEn = (
  chapter: LearningBlueprintChapter,
  preferred: EvidencePoint,
  secondary?: EvidencePoint,
): string => {
  const quote = clip(preferred.evidence.en);
  const second = secondary ? ` Then connect it with: ${secondary.claim.en}` : '';
  switch (preferred.focus) {
    case 'cause-result': return `Teach this chapter through a cause-and-result chain. Begin with “${quote}”. Learners identify what caused the event and what followed, then explain the connection in their own B1 language.${second}`;
    case 'comparison': return `Build a two-column comparison from the chapter. Use “${quote}” as one side, locate the contrasting response or idea, and ask learners to explain why the difference matters.${second}`;
    case 'sequence': return `Use chronology to build understanding. Place “${quote}” on a short timeline, identify the event before and after it, and discuss why this order matters.${second}`;
    case 'motivation': return `Focus on action and reason. Start from “${quote}”, establish what happened, then use another chapter detail to explain why it happened rather than guessing motives.${second}`;
    case 'inference': return `Keep interpretation close to the text. Put “${quote}” under WHAT THE CHAPTER SAYS, then let learners add one reasonable conclusion that this detail supports.${second}`;
    case 'turning-point': return `Organize the chapter as BEFORE → CHANGE → AFTER. Use “${quote}” as the central moment and identify one concrete result that follows.${second}`;
    case 'character-action': return `Explore character through actions. Begin with “${quote}”, identify exactly what the person does, and then discuss what the action shows using another detail as support.${second}`;
    case 'theme': return `Move from event to lesson. Begin with “${quote}”, establish what happens, and only then ask learners to state a lesson that the chapter clearly supports.${second}`;
    case 'main-idea': return `Build the main idea from details. Use “${quote}” as the first clue, collect one more important detail, and let learners state the chapter’s main idea in one clear B1 sentence.${second}`;
    case 'vocabulary': return `Teach the target word through its sentence. Use “${quote}”, test a simple synonym, and reconnect the word to the chapter idea it helps express.${second}`;
    case 'direct':
    default: return `Secure the factual detail “${quote}” first, then move one step beyond recall by asking why this detail matters to the chapter’s main idea.${second}`;
  }
};

const pedagogyAr = (
  chapter: LearningBlueprintChapter,
  preferred: EvidencePoint,
  secondary?: EvidencePoint,
): string => {
  const quote = clip(preferred.evidence.ar);
  const second = secondary ? ` ثم اربط ذلك بهذه الفكرة: ${secondary.claim.ar}` : '';
  switch (preferred.focus) {
    case 'cause-result': return `درّس هذا الفصل من خلال علاقة السبب والنتيجة. ابدأ بـ«${quote}»، وحدد مع المتعلمين سبب الحدث وما الذي نتج عنه، ثم دعهم يشرحون العلاقة بلغة B1 واضحة.${second}`;
    case 'comparison': return `ابنِ مقارنة من عمودين. استخدم «${quote}» طرفًا أول، وحدد الاستجابة أو الفكرة المقابلة، ثم ناقش لماذا يهم هذا الفرق.${second}`;
    case 'sequence': return `استخدم التسلسل لبناء الفهم. ضع «${quote}» على خط زمني قصير، وحدد ما قبله وما بعده، ثم ناقش أهمية ترتيب الأحداث.${second}`;
    case 'motivation': return `ركز على الفعل والسبب. ابدأ بـ«${quote}»، وثبّت ما حدث، ثم استخدم تفصيلًا آخر من الفصل لشرح السبب بدل تخمين الدوافع.${second}`;
    case 'inference': return `أبقِ التفسير قريبًا من النص. ضع «${quote}» تحت «ما يقوله الفصل»، ثم اسمح باستنتاج واحد معقول يدعمه هذا التفصيل.${second}`;
    case 'turning-point': return `نظّم الفصل وفق: قبل ← تغير ← بعد. استخدم «${quote}» لحظة مركزية، وحدد نتيجة ملموسة جاءت بعدها.${second}`;
    case 'character-action': return `ناقش الشخصية من خلال أفعالها. ابدأ بـ«${quote}»، وحدد الفعل بدقة، ثم ناقش ما الذي يوضحه باستخدام تفصيل آخر من الفصل.${second}`;
    case 'theme': return `انتقل من الحدث إلى الدرس. ابدأ بـ«${quote}»، وثبّت ما حدث أولًا، ثم دع المتعلمين يصوغون درسًا يدعمه الفصل بوضوح.${second}`;
    case 'main-idea': return `ابنِ الفكرة الرئيسة من التفاصيل. استخدم «${quote}» دليلًا أول، واجمع تفصيلًا مهمًا آخر، ثم صغ الفكرة الرئيسة بجملة واضحة مناسبة لـB1.${second}`;
    case 'vocabulary': return `علّم الكلمة من خلال جملتها. استخدم «${quote}»، وجرب مرادفًا بسيطًا، ثم اربط الكلمة بفكرة الفصل التي تساعد على التعبير عنها.${second}`;
    case 'direct':
    default: return `ثبّت أولًا المعلومة «${quote}»، ثم انتقل خطوة بعد الاسترجاع بسؤال: لماذا تهم هذه المعلومة للفكرة الرئيسة في الفصل؟${second}`;
  }
};

const taskEn = (focus: BlueprintCognitiveFocus, quote: string): string => {
  switch (focus) {
    case 'cause-result': return `Turn “${quote}” into a simple Cause → Result diagram.`;
    case 'comparison': return `Make a two-column comparison using “${quote}” and one contrasting detail.`;
    case 'sequence': return `Put “${quote}” between the event just before it and the event just after it.`;
    case 'motivation': return `Write WHAT HAPPENED and WHY; use “${quote}” to fill the first part, then find the reason.`;
    case 'inference': return `Write “${quote}” under WHAT THE CHAPTER SAYS and add one reasonable idea under WHAT I UNDERSTAND.`;
    case 'turning-point': return `Use “${quote}” in a BEFORE / CHANGE / AFTER chart.`;
    case 'character-action': return `Underline the action in “${quote}” and explain what it shows.`;
    case 'theme': return `Move from “${quote}” through EVENT → RESULT → LESSON.`;
    case 'main-idea': return `Find two key words in “${quote}” that help explain the main idea.`;
    case 'vocabulary': return `Try a simple synonym in the sentence around “${quote}” and see if the meaning still fits.`;
    case 'direct':
    default: return `Find “${quote}”, check the detail, and explain why it matters.`;
  }
};

const taskAr = (focus: BlueprintCognitiveFocus, quote: string): string => {
  switch (focus) {
    case 'cause-result': return `حوّل «${quote}» إلى مخطط بسيط: سبب ← نتيجة.`;
    case 'comparison': return `أنشئ مقارنة من عمودين باستخدام «${quote}» وتفصيل مقابل.`;
    case 'sequence': return `ضع «${quote}» بين الحدث الذي يسبقه مباشرة والحدث الذي يليه.`;
    case 'motivation': return `اكتب: ماذا حدث؟ ولماذا؟ استخدم «${quote}» للجزء الأول ثم ابحث عن السبب.`;
    case 'inference': return `اكتب «${quote}» تحت «ما يقوله الفصل» وأضف فكرة معقولة تحت «ما أفهمه».`;
    case 'turning-point': return `استخدم «${quote}» في مخطط: قبل / تغير / بعد.`;
    case 'character-action': return `حدد الفعل في «${quote}» واشرح ما الذي يوضحه.`;
    case 'theme': return `انتقل من «${quote}» عبر: الحدث ← النتيجة ← الدرس.`;
    case 'main-idea': return `حدد كلمتين في «${quote}» تساعدان على شرح الفكرة الرئيسة.`;
    case 'vocabulary': return `جرب مرادفًا بسيطًا في الجملة حول «${quote}» وتحقق من بقاء المعنى.`;
    case 'direct':
    default: return `اعثر على «${quote}»، وتحقق من المعلومة، واشرح لماذا تهم.`;
  }
};

const lessonPlan = (
  chapter: LearningBlueprintChapter,
  guide: TeacherGuideSection,
  preferred: EvidencePoint,
  secondary: EvidencePoint | undefined,
  language: BlueprintLanguage,
  mode: GuideMode,
): string => {
  const quote = clip(preferred.evidence[language]);
  const objective1 = chapter.objectives[0]?.[language] ?? preferred.claim[language];
  const objective2 = chapter.objectives[1]?.[language] ?? secondary?.claim[language] ?? objective1;
  const grammar = guide.grammarFocus || (language === 'en' ? 'Notice useful chapter language.' : 'لاحظ لغة الفصل المفيدة.');

  if (language === 'en') {
    if (mode === 'self') {
      return `1. Read once to understand the main idea. 2. On the second reading, do this: ${taskEn(preferred.focus, quote)} 3. Complete the Quick Challenge. If you are wrong, return only to the sentence that helps with the answer. 4. Notice this useful language: ${simplifyStudentLanguage(grammar)} 5. Answer this question in 3–5 sentences: ${objective2}`;
    }
    return `1. Set the reading purpose without giving the answer: ${objective1} 2. Read/listen once for the main idea, then use this chapter task: ${taskEn(preferred.focus, quote)} 3. Use the Quick Challenge to check understanding, then revisit this language in context: ${grammar} 4. Connect the chapter to this second target: ${objective2} 5. Close with a 3–5 sentence response using one or two accurate chapter details.`;
  }

  if (mode === 'self') {
    return `1. اقرأ مرة لفهم الفكرة الرئيسة. 2. في القراءة الثانية نفّذ هذه المهمة: ${taskAr(preferred.focus, quote)} 3. نفّذ التحدي السريع. إذا أخطأت فارجع فقط إلى الجملة التي تساعدك على تصحيح الإجابة. 4. لاحظ هذه اللغة المفيدة: ${simplifyStudentLanguage(grammar)} 5. أجب عن هذا السؤال في 3–5 جمل: ${objective2}`;
  }
  return `1. حدد غرض القراءة دون إعطاء الإجابة: ${objective1} 2. اقرأ/استمع للفكرة الرئيسة ثم نفّذ مهمة الفصل: ${taskAr(preferred.focus, quote)} 3. استخدم التحدي السريع للتحقق من الفهم ثم راجع هذه اللغة في السياق: ${grammar} 4. اربط الفصل بهذا الهدف الثاني: ${objective2} 5. اختم باستجابة من 3–5 جمل تستخدم تفصيلًا أو تفصيلين دقيقين من الفصل.`;
};

const discussionPoints = (
  chapter: LearningBlueprintChapter,
  preferred: EvidencePoint,
  secondary: EvidencePoint | undefined,
  language: BlueprintLanguage,
): string[] => {
  const objective1 = chapter.objectives[0]?.[language] ?? preferred.claim[language];
  const objective2 = chapter.objectives[1]?.[language];
  if (language === 'en') {
    return [
      `Which detail in this chapter best helps us understand this target: ${objective1}`,
      secondary
        ? `How are these two ideas connected: “${clip(preferred.claim.en, 100)}” and “${clip(secondary.claim.en, 100)}”?`
        : `Why is this part important to the chapter?`,
      objective2 ?? `What is one thing this chapter helps us understand better, and why?`,
    ];
  }
  return [
    `أي تفصيل في هذا الفصل يساعدنا أكثر على فهم هذا الهدف: ${objective1}`,
    secondary
      ? `كيف ترتبط هاتان الفكرتان: «${clip(preferred.claim.ar, 100)}» و«${clip(secondary.claim.ar, 100)}»؟`
      : `لماذا يعد هذا الجزء مهمًا في الفصل؟`,
    objective2 ?? `ما الشيء الذي يساعدنا هذا الفصل على فهمه بصورة أفضل؟ ولماذا؟`,
  ];
};

const extensionText = (chapter: LearningBlueprintChapter, language: BlueprintLanguage, preferredId?: string): string => {
  const secondary = secondaryEvidence(chapter, preferredId);
  if (!secondary) {
    return language === 'en'
      ? `Add one more accurate detail from Chapter ${chapter.chapterId} and explain how it strengthens the main idea.`
      : `أضف تفصيلًا دقيقًا آخر من الفصل ${chapter.chapterId} واشرح كيف يقوي الفكرة الرئيسة.`;
  }
  return language === 'en'
    ? `Use this second chapter idea as well: ${secondary.claim.en} Explain in 4–5 sentences how the two ideas connect.`
    : `استخدم هذه الفكرة الثانية من الفصل أيضًا: ${secondary.claim.ar} واشرح في 4–5 جمل كيف ترتبط الفكرتان.`;
};

const chapterTip = (chapter: LearningBlueprintChapter, language: BlueprintLanguage, quote: string, mode: GuideMode): string => {
  const objective = chapter.objectives[0]?.[language] ?? '';
  if (language === 'en') {
    return mode === 'teacher'
      ? `Ask learners to return to this exact chapter sentence before explaining: “${quote}”. Chapter target: ${objective}`
      : `If you are unsure, return to this sentence: “${quote}”. Then try the chapter goal again: ${objective}`;
  }
  return mode === 'teacher'
    ? `اطلب من المتعلمين العودة إلى هذه الجملة قبل التفسير: «${quote}». هدف الفصل: ${objective}`
    : `إذا لم تكن متأكدًا فارجع إلى هذه الجملة: «${quote}». ثم حاول هدف الفصل مرة أخرى: ${objective}`;
};

/** Fully rewrites the visible Chapter Support fields from each chapter's own targets. */
export const polishB1GuideSections = (
  guides: TeacherGuideSection[],
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
  mode: GuideMode,
): TeacherGuideSection[] => guides.map((guide, index) => {
  const chapter = blueprint.chapters[index];
  if (!chapter) return guide;
  const preferred = preferredEvidence(chapter);
  if (!preferred) return guide;
  const secondary = secondaryEvidence(chapter, preferred.id);
  const quote = clip(preferred.evidence[language]);
  const support = language === 'en' ? supportEn(preferred.focus, quote, mode) : supportAr(preferred.focus, quote, mode);
  const exitObjective = chapter.objectives[1]?.[language] ?? chapter.objectives[0]?.[language];

  return {
    ...guide,
    pedagogy: mode === 'teacher'
      ? (language === 'en' ? pedagogyEn(chapter, preferred, secondary) : pedagogyAr(chapter, preferred, secondary))
      : (language === 'en'
          ? `Your goal in this chapter is simple: understand ${simplifyStudentLanguage(preferred.claim.en)} Read twice, find the sentence that helps most, and explain the idea in your own words.`
          : `هدفك في هذا الفصل بسيط: افهم ${simplifyStudentLanguage(preferred.claim.ar)} اقرأ مرتين، وابحث عن الجملة الأكثر فائدة، ثم اشرح الفكرة بكلماتك.`),
    lessonPlan: lessonPlan(chapter, guide, preferred, secondary, language, mode),
    discussionPoints: discussionPoints(chapter, preferred, secondary, language),
    differentiation: {
      fastFinishers: extensionText(chapter, language, preferred.id),
      strugglingLearners: support,
    },
    interactiveTips: [
      chapterTip(chapter, language, quote, mode),
      mode === 'teacher'
        ? (language === 'en'
            ? `Use the Quick Challenge to see whether learners understood this chapter idea before moving on.`
            : `استخدم التحدي السريع لمعرفة ما إذا كان المتعلمون قد فهموا فكرة الفصل قبل الانتقال.`)
        : (language === 'en'
            ? 'Do the Quick Challenge from memory first. If you miss it, read the hint and return only to the relevant part of the chapter.'
            : 'نفّذ التحدي السريع من الذاكرة أولًا. إذا أخطأت فاقرأ التلميح وارجع فقط إلى الجزء المرتبط من الفصل.'),
    ],
    assessmentTools: {
      ...guide.assessmentTools,
      rubric: mode === 'teacher'
        ? (language === 'en'
            ? ['Understands the chapter idea', 'Uses an accurate chapter detail', 'Explains the connection clearly', 'Uses appropriate B1 language']
            : ['يفهم فكرة الفصل', 'يستخدم تفصيلًا دقيقًا من الفصل', 'يشرح العلاقة بوضوح', 'يستخدم لغة مناسبة لمستوى B1'])
        : guide.assessmentTools?.rubric,
      exitTicket: exitObjective ? [exitObjective] : guide.assessmentTools?.exitTicket,
    },
  };
});
