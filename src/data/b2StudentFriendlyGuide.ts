import type { BlueprintCognitiveFocus, BlueprintLanguage, LearningBlueprint, LearningBlueprintChapter } from './learningBlueprint';
import type { B2GoldStory } from './b2GoldPedagogy';

const titles: Record<B2GoldStory, { en: string; ar: string }> = {
  adam: { en: 'Prophet Adam', ar: 'النبي آدم' },
  abraham: { en: 'Prophet Abraham', ar: 'النبي إبراهيم' },
  moses: { en: 'Prophet Moses', ar: 'النبي موسى' },
  mecca: { en: 'Mecca and the Age of Jahiliyyah', ar: 'مكة وعصر الجاهلية' },
  yunusEmre: { en: 'Yunus Emre', ar: 'يونس إمره' },
};

const focusOf = (chapter: LearningBlueprintChapter): BlueprintCognitiveFocus =>
  chapter.evidencePoints.find(point => !['direct', 'vocabulary'].includes(point.focus))?.focus
  ?? chapter.evidencePoints[0]?.focus
  ?? 'main-idea';

const hasSourceLanguage = (chapter: LearningBlueprintChapter, language: BlueprintLanguage): boolean => {
  const text = chapter.evidencePoints.map(point => `${point.claim[language]} ${point.evidence[language]}`).join(' ');
  return language === 'en'
    ? /(some sources|according to|is believed|probably|may have|different (views|ideas)|historical accounts|narration)/i.test(text)
    : /(بعض المصادر|وفقًا|يُعتقد|على الأرجح|رواية|آراء مختلفة|الروايات التاريخية)/i.test(text);
};

const usefulLanguage = (
  chapter: LearningBlueprintChapter,
  language: BlueprintLanguage,
): string => {
  const focus = focusOf(chapter);
  const sourceAware = hasSourceLanguage(chapter, language);

  if (language === 'ar') {
    if (sourceAware) {
      return 'عندما يستخدم الفصل عبارة مثل «وفقًا للروايات التاريخية» أو «بعض المصادر» أو «يُعتقد»، حافظ على العبارة نفسها في إجابتك. لا تحول الاحتمال إلى حقيقة مؤكدة.';
    }
    switch (focus) {
      case 'cause-result': return 'لشرح السبب والنتيجة بوضوح، استخدم روابط مثل because, therefore, as a result وwhich led to. اشرح العلاقة ولا تكتف بذكر حدثين.';
      case 'comparison': return 'عند المقارنة استخدم while, whereas, unlike, however أو in contrast. اختر فرقًا أو تشابهًا مهمًا يغير فهمك للفصل.';
      case 'sequence': return 'رتب أحداث الماضي بوضوح. استخدم Simple Past للأحداث الرئيسة، وPast Perfect فقط إذا احتجت إلى إظهار أن حدثًا ماضيًا وقع قبل حدث ماضٍ آخر.';
      case 'turning-point': return 'استخدم before, when, after وas a result لتبين كيف كانت الحالة قبل نقطة التحول وما الذي تغير بعدها.';
      case 'inference': return 'إذا كان الفصل يسمح باستنتاج حذر، استخدم may, might أو could بدل الكتابة كأن الفكرة حقيقة مؤكدة.';
      case 'motivation': return 'اربط الفعل بالسبب باستخدام because, so that أو in order to. لا تضف دافعًا لا يذكره الفصل أو لا يدعمه.';
      case 'character-action': return 'ابدأ بما فعله الشخص فعلًا، ثم استخدم because أو this shows لشرح ما يكشفه الفعل عن اختياره أو موقفه.';
      case 'theme': return 'انتقل من حدث واضح إلى معنى مدعوم باستخدام although, however, therefore أو this suggests. تجنب التعميم الكبير من تفصيل واحد.';
      default: return 'استخدم جملًا مترابطة وروابط واضحة مثل because, however, while وtherefore. الهدف هو شرح الفكرة الرئيسة لا استخدام تركيب صعب لمجرد أنه B2.';
    }
  }

  if (sourceAware) {
    return 'When the chapter says “according to historical accounts”, “some sources”, “is believed”, or a similar phrase, keep that wording in your answer. Do not turn possibility into certainty.';
  }
  switch (focus) {
    case 'cause-result': return 'For cause and result, use because, therefore, as a result, or which led to. Explain the link instead of simply listing two events.';
    case 'comparison': return 'For comparison, use while, whereas, unlike, however, or in contrast. Choose a difference or similarity that actually changes your understanding of the chapter.';
    case 'sequence': return 'Keep past events in a clear order. Use Simple Past for the main events and Past Perfect only when you need to show that one past event happened before another.';
    case 'turning-point': return 'Use before, when, after, and as a result to show what the situation was like before the turning point and what changed afterwards.';
    case 'inference': return 'When the chapter allows a careful conclusion, use may, might, or could instead of writing as if the idea were completely certain.';
    case 'motivation': return 'Connect an action with its reason using because, so that, or in order to. Do not add a motive that the chapter does not state or support.';
    case 'character-action': return 'Start with what the person actually does, then use because or this shows to explain what the action reveals about the choice or attitude.';
    case 'theme': return 'Move from a clear event to a supported meaning with although, however, therefore, or this suggests. Avoid making a huge generalisation from one detail.';
    default: return 'Use connected sentences and clear linkers such as because, however, while, and therefore. The goal is to explain the main idea, not to use a difficult structure just because this is B2.';
  }
};

const startingEvidence = (chapter: LearningBlueprintChapter, language: BlueprintLanguage): string =>
  chapter.evidencePoints.find(point => !['direct', 'vocabulary'].includes(point.focus))?.evidence[language]
  ?? chapter.evidencePoints[0]?.evidence[language]
  ?? '';

export const buildB2StudentFriendlyGuideText = (
  blueprint: LearningBlueprint,
  story: B2GoldStory,
  language: BlueprintLanguage,
): string => {
  const chapterBlocks = blueprint.chapters.map(chapter => {
    const objectives = chapter.objectives.map(objective => `- ${objective[language]}`).join('\n');
    const start = startingEvidence(chapter, language);
    const prompts = chapter.selfStudyGuide[language].discussionPoints.slice(0, 2).map(point => `- ${point}`).join('\n');

    if (language === 'en') {
      return `## Chapter ${chapter.chapterId}\n\n### What to Understand\n${objectives}\n\n### Start Here on Your Second Reading\nFind this part again: “${start}”\nAsk yourself: Why is this detail important in this chapter?\n\n### Useful Language\n${usefulLanguage(chapter, language)}\n\n### Study This Chapter\n1. Read or listen once without stopping too much.\n2. Say the main idea in one or two sentences.\n3. Read again and find the main connection: a cause, contrast, decision, sequence, turning point, or idea.\n4. Choose one useful detail. Add a second detail only if it helps explain the connection.\n5. Do the Quick Challenge without looking at the text.\n6. If you are wrong, use the feedback and return only to the relevant paragraph.\n7. Close the text and explain one important idea in 5–7 connected sentences.\n\n### Questions to Think About\n${prompts}\n\n### Check Yourself\n- Can I explain the main connection without looking?\n- Can I give one or two accurate details?\n- Did I avoid adding information that is not in the chapter?\n- Can I use one useful B2 linker, grammar pattern, or new word naturally?`;
    }

    return `## الفصل ${chapter.chapterId}\n\n### ما الذي ينبغي أن تفهمه؟\n${objectives}\n\n### ابدأ من هنا في القراءة الثانية\nابحث عن هذا الجزء مرة أخرى: «${start}»\nواسأل نفسك: لماذا يعد هذا التفصيل مهمًا في الفصل؟\n\n### لغة مفيدة\n${usefulLanguage(chapter, language)}\n\n### ادرس هذا الفصل\n1. اقرأ أو استمع مرة دون توقف كثير.\n2. عبّر عن الفكرة الرئيسة بجملة أو جملتين.\n3. اقرأ مرة أخرى وابحث عن العلاقة الرئيسة: سبب أو مقارنة أو قرار أو تسلسل أو نقطة تحول أو فكرة.\n4. اختر تفصيلًا مفيدًا واحدًا، وأضف ثانيًا فقط إذا ساعد على شرح العلاقة.\n5. نفذ التحدي السريع دون النظر إلى النص.\n6. إذا أخطأت فاستخدم التغذية الراجعة وارجع فقط إلى الفقرة ذات الصلة.\n7. أغلق النص واشرح فكرة مهمة في 5–7 جمل مترابطة.\n\n### أسئلة للتفكير\n${prompts}\n\n### تحقق من نفسك\n- هل أستطيع شرح العلاقة الرئيسة دون النظر؟\n- هل أستطيع ذكر تفصيل أو تفصيلين دقيقين؟\n- هل تجنبت إضافة معلومات غير موجودة في الفصل؟\n- هل أستطيع استخدام رابط أو تركيب B2 أو كلمة جديدة بصورة طبيعية؟`;
  }).join('\n\n');

  const title = titles[story][language];
  return language === 'en'
    ? `# ${title} — B2 Self-Study Guide\n\nThis guide is for studying by yourself. B2 does not mean writing an academic essay after every chapter. First understand the chapter. Then connect the important ideas, check the part you misunderstood, and explain the result clearly in your own words.\n\n## Your Routine\n1. Look at the title, image and hotspots.\n2. Read or listen once for the whole picture.\n3. Read again for the main connection and one or two useful details.\n4. Notice useful language inside sentences you already understand.\n5. Do the Quick Challenge from memory.\n6. Use feedback to fix only what you missed.\n7. Finish with a clear 5–7 sentence explanation. Use a longer 100–150 word response only for selected review, comparison, or whole-book tasks.\n\n${chapterBlocks}`
    : `# ${title} — دليل الدراسة الذاتية B2\n\nهذا الدليل للدراسة بمفردك. مستوى B2 لا يعني كتابة مقال أكاديمي بعد كل فصل. افهم الفصل أولًا، ثم اربط الأفكار المهمة وصحح الجزء الذي لم تفهمه واشرح النتيجة بوضوح بكلماتك.\n\n## طريقتك في الدراسة\n1. انظر إلى العنوان والصورة ونقطتي التفاعل.\n2. اقرأ أو استمع مرة للصورة كاملة.\n3. اقرأ مرة أخرى للعلاقة الرئيسة وتفصيل أو تفصيلين مفيدين.\n4. لاحظ اللغة المفيدة داخل جمل تفهمها بالفعل.\n5. نفذ التحدي السريع من الذاكرة.\n6. استخدم التغذية الراجعة لتصحيح ما فاتك فقط.\n7. اختم بتفسير واضح من 5–7 جمل. استخدم 100–150 كلمة فقط في بعض مهام المراجعة أو المقارنة أو الكتاب كاملًا.\n\n${chapterBlocks}`;
};
