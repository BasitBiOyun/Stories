import type { TeacherGuideSection } from '../types';
import type {
  BlueprintCognitiveFocus,
  BlueprintLanguage,
  LearningBlueprint,
  LearningBlueprintChapter,
} from './learningBlueprint';

type GuideMode = 'teacher' | 'self';
type EvidencePoint = LearningBlueprintChapter['evidencePoints'][number];

const clip = (value: string, max = 170): string => {
  const normalized = value.replace(/\s+/g, ' ').trim();
  return normalized.length <= max ? normalized : `${normalized.slice(0, max - 1).trimEnd()}…`;
};

const preferredEvidence = (chapter: LearningBlueprintChapter): EvidencePoint | undefined => (
  chapter.evidencePoints.find(point => !['direct', 'vocabulary'].includes(point.focus))
  ?? chapter.evidencePoints[0]
);

const secondaryEvidence = (chapter: LearningBlueprintChapter, preferredId?: string): EvidencePoint | undefined =>
  chapter.evidencePoints.find(point => point.id !== preferredId && point.focus !== 'vocabulary');

const sourceLanguagePresent = (chapter: LearningBlueprintChapter, language: BlueprintLanguage): boolean => {
  const text = chapter.evidencePoints.map(point => `${point.claim[language]} ${point.evidence[language]}`).join(' ').toLowerCase();
  return language === 'en'
    ? /(some sources|according to|is believed|probably|may have|different (views|ideas)|historical accounts|narration)/i.test(text)
    : /(بعض المصادر|وفقًا|يُعتقد|على الأرجح|رواية|آراء مختلفة|الروايات التاريخية)/i.test(text);
};

const grammarFor = (
  chapter: LearningBlueprintChapter,
  focus: BlueprintCognitiveFocus,
  language: BlueprintLanguage,
): string => {
  const sourced = sourceLanguagePresent(chapter, language);
  if (language === 'ar') {
    if (sourced) return 'YDDB1 — استخدم أفعال النقل والمبني للمجهول وعبارات الترجيح مثل «وفقًا للفصل»، «تذكر بعض المصادر»، «يُعتقد»، و«على الأرجح» للحفاظ على درجة اليقين التي يقدمها النص.';
    switch (focus) {
      case 'sequence':
      case 'turning-point': return 'YDDB1 — راجع أزمنة الماضي المختلطة عند ترتيب حدثين أو أكثر: الماضي البسيط للأحداث الرئيسة والماضي التام عندما يلزم توضيح ما حدث أولًا.';
      case 'cause-result': return 'YDDB1 — استخدم روابط السبب والنتيجة والاستدلال مثل because, therefore, as a result, which led to لشرح العلاقة بدل سرد حدثين منفصلين.';
      case 'comparison': return 'YDDB1 — استخدم while, whereas, unlike, however وin contrast للمقارنة الدقيقة بين موقفين أو نظامين أو استجابتين.';
      case 'inference': return 'YDDB1 — استخدم may, might, could وmust/can’t عندما يكون الاستنتاج مبنيًا على دليل واضح، مع تجنب تحويل الاحتمال إلى يقين.';
      case 'motivation':
      case 'character-action': return 'YDDB1 — استخدم أفعال القول والسبب والمقصد مثل because, so that, in order to, explained, refused, decided لربط الفعل بالسبب.';
      case 'theme': return 'YDDB1 — استخدم روابط الاستدراك والنتيجة مثل although, however, therefore وthis suggests للانتقال من الحدث إلى معنى يدعمه الفصل.';
      default: return 'YDDB1 — استخدم جملًا مركبة واضحة وروابط مناسبة للمقارنة والسبب والنتيجة، مع الحفاظ على زمن السرد الذي يستخدمه الفصل.';
    }
  }

  if (sourced) return 'TYMM YDDB1 supporting — use reporting verbs, passive forms, and careful hedging such as according to the chapter, some sources note, is believed, and probably so that the degree of certainty stays faithful to the text.';
  switch (focus) {
    case 'sequence':
    case 'turning-point': return 'TYMM YDDB1 supporting — use mixed past tenses to order events: Simple Past for the main sequence and Past Perfect only when it helps show which past event happened first.';
    case 'cause-result': return 'TYMM YDDB1 supporting — use because, therefore, as a result, which led to, and consequently to explain a real cause-and-result relationship rather than listing two facts.';
    case 'comparison': return 'TYMM YDDB1 supporting — use while, whereas, unlike, however, and in contrast to compare two positions, systems, or responses precisely.';
    case 'inference': return 'TYMM YDDB1 supporting — use may, might, could, and must/can’t for evidence-based possibility or deduction; do not turn a reasonable inference into certainty.';
    case 'motivation':
    case 'character-action': return 'TYMM YDDB1 supporting — use reporting and purpose language such as explained, refused, decided, because, so that, and in order to to connect an action with its reason.';
    case 'theme': return 'TYMM YDDB1 supporting — use although, however, therefore, and this suggests to move from a concrete event to a chapter-supported interpretation.';
    default: return 'TYMM YDDB1 supporting — use clear complex sentences and suitable contrast/cause/result linkers while keeping the narrative tense used by the chapter.';
  }
};

const supportFor = (
  focus: BlueprintCognitiveFocus,
  quote: string,
  language: BlueprintLanguage,
  mode: GuideMode,
): string => {
  if (language === 'ar') {
    const lead = mode === 'teacher' ? 'إذا احتاج المتعلمون إلى دعم، ' : 'إذا واجهت صعوبة، ';
    switch (focus) {
      case 'cause-result': return `${lead}ابدأ من «${quote}». افصل السبب عن النتيجة، ثم اشرح العلاقة بجملة because/therefore بدل إعادة السرد.`;
      case 'comparison': return `${lead}ضع «${quote}» في عمود، وابحث عن الفكرة أو الاستجابة المقابلة في عمود ثانٍ. اكتب فرقًا واحدًا مهمًا فقط.`;
      case 'sequence': return `${lead}اجعل «${quote}» نقطة في خط زمني، ثم حدد ما حدث قبلها وما الذي تغير بعدها.`;
      case 'turning-point': return `${lead}استخدم مخطط قبل / نقطة التحول / بعد حول «${quote}» وحدد نتيجة واحدة قابلة للإثبات.`;
      case 'motivation': return `${lead}افصل «ماذا حدث؟» عن «لماذا؟» في «${quote}»، ثم اربطهما فقط إذا كان الفصل يقدم سببًا.`;
      case 'inference': return `${lead}اكتب «${quote}» تحت «ما يقوله الفصل»، ثم أضف استنتاجًا واحدًا معقولًا تحت «ما يمكن أن أفهمه».`;
      case 'character-action': return `${lead}ابدأ بالفعل في «${quote}»، ثم حدد ما الذي يكشفه عن الاختيار أو الموقف دون تخمين دوافع غير مذكورة.`;
      case 'theme': return `${lead}ابدأ بما حدث في «${quote}»، ثم اكتب درسًا واحدًا يدعمه الحدث فعلًا.`;
      case 'main-idea': return `${lead}حدد كلمتين مفتاحيتين في «${quote}» وأضف تفصيلًا ثانيًا قبل صياغة الفكرة الرئيسة.`;
      default: return `${lead}ارجع إلى «${quote}»، اشرح أهميتها بجملة، ثم اربطها بفكرة الفصل الرئيسة.`;
    }
  }

  const lead = mode === 'teacher' ? 'If learners need support, ' : 'If you get stuck, ';
  switch (focus) {
    case 'cause-result': return `${lead}start from “${quote}”. Separate cause and result, then explain the link with because/therefore instead of retelling both facts.`;
    case 'comparison': return `${lead}put “${quote}” in one column and find the contrasting idea or response in a second column. State one meaningful difference only.`;
    case 'sequence': return `${lead}place “${quote}” on a short timeline, then identify what happened before it and what changed afterwards.`;
    case 'turning-point': return `${lead}use a BEFORE / TURNING POINT / AFTER chart around “${quote}” and name one result the chapter can prove.`;
    case 'motivation': return `${lead}separate WHAT HAPPENED from WHY in “${quote}”, and connect them only if the chapter gives a reason.`;
    case 'inference': return `${lead}write “${quote}” under WHAT THE CHAPTER SAYS, then add one reasonable idea under WHAT I CAN UNDERSTAND FROM IT.`;
    case 'character-action': return `${lead}start with the action in “${quote}”, then explain what it shows about the choice or attitude without inventing a motive.`;
    case 'theme': return `${lead}start with what happens in “${quote}”, then state one lesson that the event genuinely supports.`;
    case 'main-idea': return `${lead}choose two key words from “${quote}” and add one second detail before stating the main idea.`;
    default: return `${lead}return to “${quote}”, explain why it matters in one sentence, then connect it to the chapter’s main idea.`;
  }
};

const pedagogyFor = (
  chapter: LearningBlueprintChapter,
  preferred: EvidencePoint,
  secondary: EvidencePoint | undefined,
  language: BlueprintLanguage,
): string => {
  const quote = clip(preferred.evidence[language]);
  const second = secondary?.claim[language];
  if (language === 'ar') {
    switch (preferred.focus) {
      case 'cause-result': return `ابنِ الدرس حول سلسلة سبب ونتيجة تبدأ من «${quote}». بعد تثبيت العلاقة، اطلب من المتعلمين تفسير لماذا تهم هذه النتيجة للفصل.${second ? ` ثم اربطها بالفكرة: ${second}` : ''}`;
      case 'comparison': return `نظم الفصل في مقارنة من عمودين. استخدم «${quote}» طرفًا أول، وحدد الطرف المقابل من النص، ثم ناقش الفرق الذي يغير فهم الفصل فعلًا.${second ? ` واربط ذلك بـ: ${second}` : ''}`;
      case 'sequence': return `استخدم التسلسل الزمني لفهم الفصل. ضع «${quote}» في مكانه الصحيح، ثم حدد الحدث السابق واللاحق وأهمية الترتيب.${second ? ` أضف بعد ذلك: ${second}` : ''}`;
      case 'turning-point': return `قدّم الفصل بوصفه قبل ← تحول ← بعد. اجعل «${quote}» نقطة التحول وحدد أثرًا واضحًا واحدًا على الأقل.${second ? ` ثم اختبر العلاقة مع: ${second}` : ''}`;
      case 'inference': return `ميز بين ما يذكره الفصل وما يمكن استنتاجه. ابدأ بـ«${quote}»، ثم اسمح باستنتاج واحد فقط يمكن ربطه مباشرة بهذا الدليل.${second ? ` قارنه بعد ذلك بـ: ${second}` : ''}`;
      case 'motivation': return `ركز على الفعل والسبب. ثبّت أولًا ما حدث في «${quote}»، ثم استخدم تفصيلًا آخر لتحديد السبب الذي يقدمه الفصل بدل تخمين النوايا.${second ? ` استخدم أيضًا: ${second}` : ''}`;
      case 'character-action': return `حلل الشخصية من خلال الفعل لا الصفات المجردة. ابدأ بـ«${quote}» ثم اسأل: ماذا يكشف هذا الاختيار؟ وما التفصيل الآخر الذي يدعم ذلك؟${second ? ` التفصيل الثاني: ${second}` : ''}`;
      case 'theme': return `انتقل من الحدث إلى المعنى بحذر. ابدأ بـ«${quote}»، حدد ما حدث فعلًا، ثم صغ درسًا واحدًا فقط يستطيع الفصل دعمه.${second ? ` اختبره أيضًا أمام: ${second}` : ''}`;
      default: return `ابنِ الفكرة الرئيسة من تفاصيل الفصل لا من معرفة خارجية. ابدأ بـ«${quote}» وأضف تفصيلًا ثانيًا قبل صياغة تفسير B2 واضح.${second ? ` يمكن استخدام: ${second}` : ''}`;
    }
  }

  switch (preferred.focus) {
    case 'cause-result': return `Build the lesson around a cause-and-result chain beginning with “${quote}”. Once the relationship is secure, ask learners why that consequence matters to the chapter.${second ? ` Then connect it with: ${second}` : ''}`;
    case 'comparison': return `Organise the chapter as a two-column comparison. Use “${quote}” as one side, locate the contrasting position in the text, and discuss the difference that genuinely changes the interpretation.${second ? ` Connect this with: ${second}` : ''}`;
    case 'sequence': return `Use chronology to make the chapter understandable. Place “${quote}” correctly, identify what happened immediately before and after, then discuss why the order matters.${second ? ` Add this relationship: ${second}` : ''}`;
    case 'turning-point': return `Frame the chapter as BEFORE → TURNING POINT → AFTER. Treat “${quote}” as the central change and require at least one concrete consequence.${second ? ` Test it against: ${second}` : ''}`;
    case 'inference': return `Separate what the chapter states from what a reader may reasonably infer. Begin with “${quote}” and allow one inference only if learners can connect it directly to that detail.${second ? ` Then compare it with: ${second}` : ''}`;
    case 'motivation': return `Focus on action and reason. Secure what happens in “${quote}” first, then use a second chapter detail to identify the reason the text provides rather than guessing motives.${second ? ` Use this second idea: ${second}` : ''}`;
    case 'character-action': return `Analyse character through action rather than abstract labels. Begin with “${quote}”, ask what the choice shows, and require one additional detail before learners generalise.${second ? ` A useful second idea is: ${second}` : ''}`;
    case 'theme': return `Move from event to meaning carefully. Establish what happens in “${quote}”, then formulate one lesson the chapter can genuinely support.${second ? ` Check that lesson against: ${second}` : ''}`;
    default: return `Build the main idea from chapter details rather than outside knowledge. Start with “${quote}”, add one second detail, and only then formulate a clear B2 interpretation.${second ? ` A second useful idea is: ${second}` : ''}`;
  }
};

const discussionFor = (
  chapter: LearningBlueprintChapter,
  preferred: EvidencePoint,
  secondary: EvidencePoint | undefined,
  language: BlueprintLanguage,
): string[] => {
  const objective = chapter.objectives[0]?.[language] ?? preferred.claim[language];
  const primary = language === 'en'
    ? `How does the chapter support this idea: ${preferred.claim.en}`
    : `كيف يدعم الفصل هذه الفكرة: ${preferred.claim.ar}`;
  const secondaryQuestion = secondary
    ? (language === 'en'
      ? `How does this second idea change or deepen the first one: ${secondary.claim.en}`
      : `كيف تغير هذه الفكرة الثانية الفكرة الأولى أو تعمقها: ${secondary.claim.ar}`)
    : objective;
  return [primary, secondaryQuestion, objective];
};

export const polishB2GuideSections = (
  sections: TeacherGuideSection[],
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
  mode: GuideMode = 'teacher',
): TeacherGuideSection[] => sections.map((section, index) => {
  const chapter = blueprint.chapters[index];
  if (!chapter) return section;
  const preferred = preferredEvidence(chapter);
  if (!preferred) return section;
  const secondary = secondaryEvidence(chapter, preferred.id);
  const quote = clip(preferred.evidence[language]);
  const vocab = chapter.vocabularyTargets.slice(0, 3).map(target => target[language].word).filter(Boolean);
  const objectives = chapter.objectives.map(item => item[language]);
  const support = supportFor(preferred.focus, quote, language, mode);

  if (mode === 'self') {
    return {
      ...section,
      timing: language === 'en' ? '30–40 minutes' : '30–40 دقيقة',
      objectives,
      pedagogy: language === 'en'
        ? `Read for the main relationship in this chapter. Start with “${quote}”, then find one more detail that helps you explain the idea in your own words.`
        : `اقرأ للعثور على العلاقة الرئيسة في هذا الفصل. ابدأ بـ«${quote}»، ثم ابحث عن تفصيل آخر يساعدك على شرح الفكرة بكلماتك.`,
      grammarFocus: grammarFor(chapter, preferred.focus, language)
        .replace(/TYMM\s+YDDB1\s+supporting\s*—\s*/i, '')
        .replace(/YDDB1\s*—\s*/i, ''),
      pronunciationFocus: language === 'en'
        ? `Say these chapter words aloud and notice stress: ${vocab.join(', ') || 'the main Word Notes'}.`
        : `انطق كلمات الفصل بصوت واضح ولاحظ النبر: ${vocab.join('، ') || 'الكلمات الأساسية'}.`,
      lessonPlan: language === 'en'
        ? `1. Read once for the big picture. 2. Read again and find “${quote}”. 3. Find one second detail connected to it. 4. Do the Quick Challenge without looking. 5. Check only the paragraph connected to a wrong answer. 6. Explain one chapter idea in 5–7 sentences.`
        : `1. اقرأ مرة للصورة العامة. 2. اقرأ ثانية وحدد «${quote}». 3. ابحث عن تفصيل ثانٍ مرتبط بها. 4. نفذ التحدي السريع من الذاكرة. 5. عند الخطأ ارجع فقط إلى الفقرة ذات الصلة. 6. اشرح فكرة واحدة من الفصل في 5–7 جمل.`,
      discussionPoints: discussionFor(chapter, preferred, secondary, language).slice(0, 2),
      differentiation: {
        fastFinishers: language === 'en'
          ? 'Write 90–120 words connecting two chapter details. Add a contrast, cause, or careful conclusion only if the text supports it.'
          : 'اكتب 90–120 كلمة تربط بين تفصيلين من الفصل، وأضف مقارنة أو سببًا أو استنتاجًا حذرًا فقط إذا دعمه النص.',
        strugglingLearners: support,
      },
      interactiveTips: language === 'en'
        ? ['Use the Word Notes only after guessing from context.', 'After a wrong Quick Challenge answer, return to the relevant paragraph rather than rereading everything.']
        : ['استخدم ملاحظات الكلمات بعد محاولة فهم المعنى من السياق.', 'بعد خطأ في التحدي السريع ارجع إلى الفقرة ذات الصلة بدل إعادة قراءة كل شيء.'],
      assessmentTools: { exitTicket: [discussionFor(chapter, preferred, secondary, language)[0]] },
    };
  }

  return {
    ...section,
    timing: language === 'en' ? '50–55 minutes' : '50–55 دقيقة',
    objectives,
    pedagogy: pedagogyFor(chapter, preferred, secondary, language),
    grammarFocus: grammarFor(chapter, preferred.focus, language),
    pronunciationFocus: language === 'en'
      ? `YDDB3 pronunciation support — practise stress and clear production of ${vocab.join(', ') || 'the chapter Word Notes'}, then read one evidence sentence aloud with natural thought-grouping.`
      : `YDDB3 دعم النطق — تدرّب على نبر ونطق ${vocab.join('، ') || 'كلمات الفصل الأساسية'}، ثم اقرأ جملة دليل واحدة مع تقسيم طبيعي للمعنى.`,
    lessonPlan: language === 'en'
      ? `1. Preview the title, image and two hotspots; elicit one prediction without giving the answer. 2. Read once for the chapter’s main movement. 3. Reread around “${quote}” and identify what this detail actually establishes. 4. Work with the chapter grammar focus in one or two authentic sentences. 5. Complete the Quick Challenge, then discuss one second chapter detail and how it changes the first. 6. Finish with a short exit response that connects two accurate details.`
      : `1. عاين العنوان والصورة ونقطتي التفاعل واطلب توقعًا واحدًا دون إعطاء الإجابة. 2. اقرأ مرة لفهم حركة الفصل الرئيسة. 3. أعد القراءة حول «${quote}» وحدد ما الذي يثبته هذا التفصيل فعلًا. 4. طبّق تركيز القواعد في جملة أو جملتين حقيقيتين من الفصل. 5. نفذ التحدي السريع ثم ناقش تفصيلًا ثانيًا وكيف يغير الفكرة الأولى. 6. اختم باستجابة قصيرة تربط بين تفصيلين دقيقين.`,
    discussionPoints: discussionFor(chapter, preferred, secondary, language),
    differentiation: {
      fastFinishers: language === 'en'
        ? `Write 100–140 words connecting “${quote}” with a second chapter detail. Use one contrast, cause/result, deduction, or qualification that genuinely fits the text.`
        : `اكتب 100–140 كلمة تربط «${quote}» بتفصيل ثانٍ من الفصل، واستخدم مقارنة أو سببًا ونتيجة أو استنتاجًا أو قيدًا يناسب النص فعلًا.`,
      strugglingLearners: support,
    },
    interactiveTips: language === 'en'
      ? [
          'Use both image hotspots as prediction/context prompts before revealing their notes.',
          `Return learners to the exact passage around “${quote}” when an answer becomes too general.`,
          'Use the Quick Challenge as a diagnostic check; after an error, identify the mistaken connection before retrying.',
        ]
      : [
          'استخدم نقطتي التفاعل في الصورة للتوقع وفهم السياق قبل كشف الملاحظات.',
          `أعد المتعلم إلى المقطع الدقيق حول «${quote}» عندما تصبح الإجابة عامة أكثر من اللازم.`,
          'استخدم التحدي السريع فحصًا تشخيصيًا، وحدد العلاقة التي فُهمت خطأ قبل المحاولة من جديد.',
        ],
    assessmentTools: {
      rubric: language === 'en'
        ? ['Accurate chapter understanding', 'Relevant supporting detail', 'Clear connection or interpretation', 'Appropriate B2 language', 'No unsupported claim']
        : ['فهم دقيق للفصل', 'تفصيل داعم مناسب', 'علاقة أو تفسير واضح', 'لغة مناسبة لمستوى B2', 'عدم إضافة ادعاء غير مدعوم'],
      exitTicket: [discussionFor(chapter, preferred, secondary, language)[0]],
    },
  };
});
