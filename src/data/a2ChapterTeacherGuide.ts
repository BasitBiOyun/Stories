import type { PageData, TeacherGuideSection } from '../types';

export type A2TeacherGuideLanguage = 'en' | 'ar';

const wordList = (page: PageData, limit = 4): string[] =>
  (page.vocabulary || []).slice(0, limit).map((entry) => entry.word).filter(Boolean);

const chapterEvidence = (page: PageData) => {
  const primary = page.hotspots?.[0];
  const secondary = page.hotspots?.[1];
  const quickQuestion = page.exercises?.[0]?.question?.trim() || '';
  const words = wordList(page);

  return {
    primaryTitle: primary?.title || page.title,
    primaryIdea: primary?.description || quickQuestion || page.title,
    secondaryTitle: secondary?.title || '',
    secondaryIdea: secondary?.description || '',
    quickQuestion,
    words,
  };
};

const buildEnglishSection = (page: PageData, chapterNumber: number): TeacherGuideSection => {
  const evidence = chapterEvidence(page);
  const words = evidence.words.join(', ');
  const hasSecondAnchor = Boolean(evidence.secondaryTitle && evidence.secondaryIdea);

  return {
    chapter: `Chapter ${chapterNumber}: ${page.title}`,
    timing: '30–35 minutes',
    objectives: [
      `Explain this chapter fact in simple English: ${evidence.primaryIdea}`,
      evidence.quickQuestion
        ? `Answer the chapter Quick Challenge and point to the sentence that supports the answer: ${evidence.quickQuestion}`
        : `Find one sentence in the chapter that supports the main idea about ${evidence.primaryTitle}.`,
      words
        ? `Use these chapter words while speaking or writing: ${words}.`
        : 'Use the chapter Word Notes while speaking or writing.',
      hasSecondAnchor
        ? `Connect ${evidence.primaryTitle} and ${evidence.secondaryTitle} with one fact from the chapter.`
        : `Retell one important event from ${page.title} in one or two sentences.`,
    ],
    pedagogy: `Teach ${page.title} through text evidence rather than extra background information. Start with ${evidence.primaryTitle}, ask learners to locate the sentence behind the hotspot, then use ${hasSecondAnchor ? evidence.secondaryTitle : 'the Quick Challenge'} as a second evidence check. Keep every factual explanation inside the chapter.`,
    grammarFocus: evidence.words.length >= 2
      ? `Choose one chapter sentence containing “${evidence.words[0]}” and another containing “${evidence.words[1]}”. Notice the verb form and word order already used in those sentences; use them as short speaking models rather than teaching a separate grammar topic.`
      : 'Use one short sentence from the chapter as a speaking model and notice its verb form and word order.',
    pronunciationFocus: words
      ? `Model and repeat the chapter words: ${words}. Then read the answer sentence aloud once with natural sentence stress.`
      : 'Model the key chapter words, then read the answer sentence aloud once with natural sentence stress.',
    lessonPlan: `0–4 min: Predict from the title “${page.title}”. 4–9 min: Preview ${words || 'the Word Notes'}. 9–18 min: Listen/read and pause when the text reaches ${evidence.primaryTitle}. 18–23 min: Open that hotspot and find its evidence sentence. 23–28 min: ${hasSecondAnchor ? `Compare it with ${evidence.secondaryTitle}` : 'Complete the Quick Challenge and find the answer sentence'}. 28–32 min: ${evidence.quickQuestion ? `Quick Challenge: ${evidence.quickQuestion}` : 'Give a one-sentence oral retell.'} 32–35 min: Exit ticket using one fact and one chapter word.`,
    discussionPoints: [
      evidence.quickQuestion || `What does the chapter tell us about ${evidence.primaryTitle}?`,
      `What does the chapter tell us about ${evidence.primaryTitle}?`,
      hasSecondAnchor
        ? `How is ${evidence.secondaryTitle} connected to ${evidence.primaryTitle} in this chapter?`
        : `Which sentence best shows the main idea of ${page.title}?`,
    ],
    differentiation: {
      fastFinishers: hasSecondAnchor
        ? `Write three A2 sentences linking ${evidence.primaryTitle} and ${evidence.secondaryTitle}; use two Word Notes words.`
        : `Write a three-sentence retell of ${page.title} and use two Word Notes words.`,
      strugglingLearners: `Give two choices and ask the learner to point first to the sentence about ${evidence.primaryTitle}. Then answer the Quick Challenge with the text open.`,
    },
    interactiveTips: [
      `Open the ${evidence.primaryTitle} hotspot only after learners have found the related idea in the text.`,
      hasSecondAnchor
        ? `Use the ${evidence.secondaryTitle} hotspot as a second evidence anchor; ask learners what new fact it confirms.`
        : 'After the Quick Challenge, ask learners to underline or point to the exact answer sentence.',
    ],
    assessmentTools: {
      rubric: [`Text evidence for ${evidence.primaryTitle}`, 'Quick Challenge accuracy', 'Chapter vocabulary', 'Short oral/written retell'],
      exitTicket: [`One fact about ${evidence.primaryTitle}`, words ? `Use one of these words: ${words}` : 'Use one Word Notes word'],
    },
    kinestheticActivities: [
      hasSecondAnchor
        ? `Place two cards labelled “${evidence.primaryTitle}” and “${evidence.secondaryTitle}”. Read short facts from the chapter and have learners move to the matching evidence card.`
        : `Place a “main idea” card and an “answer sentence” card. Learners move between them as they identify each one in ${page.title}.`,
    ],
    globalCitizenship: [
      `Ask learners to name one value they can see in ${page.title} and support it with a fact from the chapter. Do not add a new historical or religious claim.`,
    ],
    extraResources: undefined,
  };
};

const buildArabicSection = (page: PageData, chapterNumber: number): TeacherGuideSection => {
  const evidence = chapterEvidence(page);
  const words = evidence.words.join('، ');
  const hasSecondAnchor = Boolean(evidence.secondaryTitle && evidence.secondaryIdea);

  return {
    chapter: `الفصل ${chapterNumber}: ${page.title}`,
    timing: '30–35 دقيقة',
    objectives: [
      `يشرح المتعلم هذه المعلومة من الفصل بجملة أو جملتين بسيطتين: ${evidence.primaryIdea}`,
      evidence.quickQuestion
        ? `يجيب عن Quick Challenge ويشير إلى الجملة التي تدعم الإجابة: ${evidence.quickQuestion}`
        : `يجد جملة من الفصل تدعم الفكرة الرئيسة عن ${evidence.primaryTitle}.`,
      words
        ? `يستخدم كلمات الفصل الآتية في الكلام أو الكتابة: ${words}.`
        : 'يستخدم كلمات Word Notes في الكلام أو الكتابة.',
      hasSecondAnchor
        ? `يربط بين ${evidence.primaryTitle} و${evidence.secondaryTitle} بمعلومة واحدة من الفصل.`
        : `يعيد سرد حدث مهم من ${page.title} بجملة أو جملتين.`,
    ],
    pedagogy: `درّس ${page.title} بالاعتماد على أدلة النص لا على معلومات إضافية. ابدأ بـ ${evidence.primaryTitle}، واطلب من المتعلمين العثور على الجملة التي تدعم الـ hotspot، ثم استخدم ${hasSecondAnchor ? evidence.secondaryTitle : 'Quick Challenge'} للتحقق من الفهم مرة ثانية.`,
    grammarFocus: evidence.words.length >= 2
      ? `اختر جملة من الفصل فيها «${evidence.words[0]}» وأخرى فيها «${evidence.words[1]}». لاحظ ترتيب الكلمات وصيغة الفعل كما وردت في النص، واستخدم الجملتين نموذجا قصيرا للكلام من دون درس قواعد منفصل.`
      : 'استخدم جملة قصيرة من الفصل نموذجا للكلام، ولاحظ ترتيب الكلمات وصيغة الفعل كما وردت في النص.',
    pronunciationFocus: words
      ? `نمذج نطق كلمات الفصل وكررها مع المتعلمين: ${words}. ثم اقرأ جملة الإجابة مرة واحدة بوضوح.`
      : 'نمذج نطق كلمات الفصل، ثم اقرأ جملة الإجابة مرة واحدة بوضوح.',
    lessonPlan: `0–4: توقع من عنوان «${page.title}». 4–9: مراجعة ${words || 'Word Notes'}. 9–18: استماع وقراءة حتى فكرة ${evidence.primaryTitle}. 18–23: فتح الـ hotspot والعثور على جملة الدليل. 23–28: ${hasSecondAnchor ? `المقارنة مع ${evidence.secondaryTitle}` : 'تنفيذ Quick Challenge والعثور على جملة الإجابة'}. 28–32: ${evidence.quickQuestion ? `Quick Challenge: ${evidence.quickQuestion}` : 'إعادة سرد بجملة واحدة.'} 32–35: بطاقة خروج بمعلومة وكلمة من الفصل.`,
    discussionPoints: [
      evidence.quickQuestion || `ماذا يخبرنا الفصل عن ${evidence.primaryTitle}؟`,
      `ماذا يخبرنا الفصل عن ${evidence.primaryTitle}؟`,
      hasSecondAnchor
        ? `ما العلاقة بين ${evidence.secondaryTitle} و${evidence.primaryTitle} في هذا الفصل؟`
        : `أي جملة توضح الفكرة الرئيسة في ${page.title}؟`,
    ],
    differentiation: {
      fastFinishers: hasSecondAnchor
        ? `اكتب ثلاث جمل بسيطة تربط بين ${evidence.primaryTitle} و${evidence.secondaryTitle}، واستخدم كلمتين من Word Notes.`
        : `اكتب ثلاث جمل تلخص ${page.title} واستخدم كلمتين من Word Notes.`,
      strugglingLearners: `قدّم خيارين، واطلب من المتعلم أولا الإشارة إلى الجملة المتعلقة بـ ${evidence.primaryTitle}، ثم أجب عن Quick Challenge والنص مفتوح.`,
    },
    interactiveTips: [
      `افتح hotspot «${evidence.primaryTitle}» بعد أن يعثر المتعلمون على الفكرة المرتبطة به في النص.`,
      hasSecondAnchor
        ? `استخدم hotspot «${evidence.secondaryTitle}» كدليل ثان، واسأل: ما المعلومة الجديدة التي يؤكدها؟`
        : 'بعد Quick Challenge، اطلب من المتعلمين تحديد جملة الإجابة نفسها في النص.',
    ],
    assessmentTools: {
      rubric: [`دليل النص عن ${evidence.primaryTitle}`, 'دقة Quick Challenge', 'مفردات الفصل', 'إعادة سرد قصيرة'],
      exitTicket: [`معلومة عن ${evidence.primaryTitle}`, words ? `استخدم كلمة من: ${words}` : 'استخدم كلمة من Word Notes'],
    },
    kinestheticActivities: [
      hasSecondAnchor
        ? `ضع بطاقتين بعنوان «${evidence.primaryTitle}» و«${evidence.secondaryTitle}». اقرأ معلومات قصيرة من الفصل، وينتقل المتعلم إلى بطاقة الدليل المناسبة.`
        : `ضع بطاقة «الفكرة الرئيسة» وبطاقة «جملة الإجابة»، وينتقل المتعلم بينهما عندما يحدد كل واحدة في ${page.title}.`,
    ],
    globalCitizenship: [
      `اطلب من المتعلمين تسمية قيمة واحدة تظهر في ${page.title} ودعمها بمعلومة من الفصل، من دون إضافة ادعاء ديني أو تاريخي جديد.`,
    ],
    extraResources: undefined,
  };
};

export const buildA2ChapterTeacherGuide = (
  finalizedPages: PageData[],
  storyIds: number[],
  language: A2TeacherGuideLanguage,
): TeacherGuideSection[] => storyIds.map((id, index) => {
  const page = finalizedPages.find((item) => item.id === id);
  if (!page) throw new Error(`Story page ${id} is missing.`);
  return language === 'ar'
    ? buildArabicSection(page, index + 1)
    : buildEnglishSection(page, index + 1);
});
