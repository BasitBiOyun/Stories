import type { StudentGuideSection, TeacherGuideSection } from '../types';
import type {
  BlueprintCognitiveFocus,
  BlueprintLanguage,
  LearningBlueprint,
  LearningBlueprintChapter,
} from './learningBlueprint';

type GuideMode = 'teacher' | 'self';

const cleanCurriculumText = (value: string): string => value
  .replace(
    /TYMM\s+YD(?:AB|DB)\d+\s+(?:(?:supporting|primary)|(?:داعم|أساسي))\s*(?:\+\s*CEFR\s+B1)?\s*:\s*/gi,
    '',
  )
  .trim();

/**
 * Student-facing material must not expose curriculum implementation codes.
 * TYMM alignment remains available in Teacher Guide metadata only.
 */
export const sanitizeB1StudentGuideSections = (
  sections: StudentGuideSection[],
): StudentGuideSection[] => sections.map(section => ({
  ...section,
  text: cleanCurriculumText(section.text),
  points: section.points.map(cleanCurriculumText),
}));

export const sanitizeB1StudentGuideText = (
  text: string,
  language: BlueprintLanguage,
): string => {
  const withoutCurriculumBlock = language === 'en'
    ? text.replace(/\n## TYMM \/ CEFR Focus\n[\s\S]*?(?=\n## Chapter 1\n)/, '\n')
    : text.replace(/\n## تركيز TYMM \/ CEFR\n[\s\S]*?(?=\n## الفصل 1\n)/, '\n');

  return cleanCurriculumText(withoutCurriculumBlock)
    .replace(/\n{3,}/g, '\n\n');
};

const clip = (value: string, max = 145): string => {
  const normalized = value.replace(/\s+/g, ' ').trim();
  return normalized.length <= max ? normalized : `${normalized.slice(0, max - 1).trimEnd()}…`;
};

const preferredEvidence = (chapter: LearningBlueprintChapter) => (
  chapter.evidencePoints.find(point => point.focus !== 'direct' && point.focus !== 'vocabulary')
  ?? chapter.evidencePoints[0]
);

const secondaryEvidence = (chapter: LearningBlueprintChapter, preferredId?: string) => (
  chapter.evidencePoints.find(point => point.id !== preferredId)
);

const supportEn = (
  focus: BlueprintCognitiveFocus,
  quote: string,
  mode: GuideMode,
): string => {
  const lead = mode === 'teacher' ? 'If learners need support, ' : 'If you get stuck, ';
  switch (focus) {
    case 'cause-result':
      return `${lead}start from “${quote}”. Mark the cause and the result separately, then use: “Because ___, ___ happened. This shows ___.”`;
    case 'comparison':
      return `${lead}make a two-column comparison from “${quote}”. Complete: “___, while ___.” Add only differences the chapter actually states.`;
    case 'sequence':
      return `${lead}use “${quote}” as the anchor event. Identify what comes immediately before and after it, then retell with First / Then / After that.`;
    case 'motivation':
      return `${lead}separate action from reason in “${quote}”. Answer “What did the person do?” and “Why?”, then join the ideas with because.`;
    case 'inference':
      return `${lead}make two boxes: FACT and INFERENCE. Put “${quote}” under FACT, then complete: “This suggests ___ because ___.” Keep the inference one step from the evidence.`;
    case 'turning-point':
      return `${lead}mark BEFORE / TURNING POINT / AFTER. Use “${quote}” as the turning point and name one change that follows it.`;
    case 'character-action':
      return `${lead}begin with the action in “${quote}”. Use: “When ___ did ___, it showed ___.” Check that the final idea is supported by the chapter.`;
    case 'theme':
      return `${lead}return to the concrete event in “${quote}” before naming a lesson. Use: “This event teaches ___ because ___.”`;
    case 'main-idea':
      return `${lead}highlight two key words in “${quote}” that support the main idea, then complete: “The chapter mainly shows ___ because ___.”`;
    case 'vocabulary':
      return `${lead}reread the sentence around “${quote}”, replace the target word with a simple synonym, and check whether the meaning still fits the chapter.`;
    case 'direct':
    default:
      return `${lead}locate “${quote}” and answer in one complete sentence. Then add one short sentence explaining why that detail matters in this chapter.`;
  }
};

const supportAr = (
  focus: BlueprintCognitiveFocus,
  quote: string,
  mode: GuideMode,
): string => {
  const lead = mode === 'teacher' ? 'إذا احتاج المتعلمون إلى دعم، ' : 'إذا واجهت صعوبة، ';
  switch (focus) {
    case 'cause-result':
      return `${lead}ابدأ من «${quote}». حدّد السبب والنتيجة كلًّا على حدة، ثم استخدم: «لأن ___، حدث ___. وهذا يوضح ___.»`;
    case 'comparison':
      return `${lead}أنشئ عمودين للمقارنة انطلاقًا من «${quote}». أكمل: «___، بينما ___.» ولا تضف فرقًا لا يذكره الفصل.`;
    case 'sequence':
      return `${lead}اجعل «${quote}» حدثًا محوريًا. حدّد ما يأتي قبله مباشرة وما يأتي بعده، ثم أعد السرد باستخدام: أولًا / ثم / بعد ذلك.`;
    case 'motivation':
      return `${lead}افصل الفعل عن السبب في «${quote}». أجب: «ماذا فعل؟» و«لماذا؟» ثم اربط الفكرتين بأداة سبب.`;
    case 'inference':
      return `${lead}أنشئ خانتين: حقيقة / استنتاج. ضع «${quote}» تحت الحقيقة، ثم أكمل: «هذا يشير إلى ___ لأن ___.» واجعل الاستنتاج قريبًا من الدليل.`;
    case 'turning-point':
      return `${lead}قسّم الحدث إلى: قبل / نقطة التحول / بعد. استخدم «${quote}» نقطة تحول وحدد تغيرًا واحدًا نتج عنها.`;
    case 'character-action':
      return `${lead}ابدأ بالفعل في «${quote}». استخدم: «عندما فعل ___، دل ذلك على ___.» وتأكد من أن الفكرة الأخيرة يدعمها الفصل.`;
    case 'theme':
      return `${lead}ارجع إلى الحدث الملموس في «${quote}» قبل ذكر الدرس. استخدم: «يعلمنا هذا الحدث ___ لأن ___.»`;
    case 'main-idea':
      return `${lead}حدد كلمتين أساسيتين في «${quote}» تدعمان الفكرة الرئيسة، ثم أكمل: «يبين الفصل أساسًا ___ لأن ___.»`;
    case 'vocabulary':
      return `${lead}أعد قراءة الجملة التي تحتوي «${quote}»، واستبدل الكلمة المستهدفة بمرادف بسيط، ثم تحقق من بقاء المعنى مناسبًا للسياق.`;
    case 'direct':
    default:
      return `${lead}اعثر على «${quote}» وأجب بجملة كاملة، ثم أضف جملة قصيرة تشرح أهمية هذه المعلومة في الفصل.`;
  }
};

const extensionText = (
  chapter: LearningBlueprintChapter,
  language: BlueprintLanguage,
  preferredId?: string,
): string => {
  const secondary = secondaryEvidence(chapter, preferredId);
  if (!secondary) {
    return language === 'en'
      ? `Extend the answer with one more accurate detail from Chapter ${chapter.chapterId} and explain how it strengthens the main idea.`
      : `وسّع الإجابة بتفصيل دقيق آخر من الفصل ${chapter.chapterId} واشرح كيف يقوي الفكرة الرئيسة.`;
  }

  return language === 'en'
    ? `Add a second piece of evidence connected to this idea: ${secondary.claim.en} Explain in 4–5 sentences how the two details work together.`
    : `أضف دليلًا ثانيًا مرتبطًا بهذه الفكرة: ${secondary.claim.ar} واشرح في 4–5 جمل كيف يعمل الدليلان معًا.`;
};

const chapterTip = (
  chapter: LearningBlueprintChapter,
  language: BlueprintLanguage,
  quote: string,
  mode: GuideMode,
): string => {
  const objective = chapter.objectives[0]?.[language] ?? '';
  if (language === 'en') {
    return mode === 'teacher'
      ? `Before accepting an explanation, ask learners to point to this chapter anchor: “${quote}”. The target is: ${objective}`
      : `Before checking the answer, find this chapter anchor yourself: “${quote}”. Your target is: ${objective}`;
  }
  return mode === 'teacher'
    ? `قبل قبول التفسير، اطلب من المتعلمين الإشارة إلى دليل الفصل: «${quote}». والهدف هو: ${objective}`
    : `قبل التحقق من الإجابة، ابحث بنفسك عن دليل الفصل: «${quote}». والهدف هو: ${objective}`;
};

/**
 * Replaces repeated generic differentiation with chapter-specific scaffolding.
 * The scaffold is selected from the chapter's real cognitive focus and evidence.
 */
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

  const quote = clip(preferred.evidence[language]);
  const support = language === 'en'
    ? supportEn(preferred.focus, quote, mode)
    : supportAr(preferred.focus, quote, mode);
  const exitObjective = chapter.objectives[1]?.[language] ?? chapter.objectives[0]?.[language];

  return {
    ...guide,
    differentiation: {
      fastFinishers: extensionText(chapter, language, preferred.id),
      strugglingLearners: support,
    },
    interactiveTips: [
      chapterTip(chapter, language, quote, mode),
      language === 'en'
        ? `Use the Quick Challenge as a diagnostic check for the chapter's ${preferred.focus.replace('-', ' ')} target; repair that relationship before moving on.`
        : `استخدم التحدي السريع فحصًا تشخيصيًا لهدف الفصل (${preferred.focus})، وصحح هذه العلاقة قبل الانتقال.`
    ],
    assessmentTools: {
      ...guide.assessmentTools,
      exitTicket: exitObjective ? [exitObjective] : guide.assessmentTools?.exitTicket,
    },
  };
});
