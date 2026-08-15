import type { PageData, TeacherGuideSection } from '../types';

export type A2SelfStudyLanguage = 'en' | 'ar';

const wordList = (page: PageData, limit = 5): string[] =>
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

const englishRoute = (
  page: PageData,
  chapterNumber: number,
  primaryTitle: string,
  secondaryTitle: string,
  words: string,
  quickQuestion: string,
): string => {
  const route = (chapterNumber - 1) % 3;

  if (route === 0) {
    return `1) Look at the title “${page.title}” and predict one idea. 2) Listen once without stopping. 3) Read again and find the sentence about ${primaryTitle}. 4) Check these Word Notes: ${words || 'the highlighted words'}. 5) Open the ${primaryTitle} hotspot and compare it with your sentence. 6) ${quickQuestion ? `Answer the Quick Challenge: ${quickQuestion}` : 'Say the main idea in one sentence.'} 7) If you are wrong, return only to the answer sentence and try again. 8) Finish by saying one fact aloud.`;
  }

  if (route === 1) {
    return `1) Read the title “${page.title}” and scan the chapter for ${primaryTitle}. 2) Read one short part at a time. 3) Pause and say what you understood before checking Word Notes. 4) Review: ${words || 'the highlighted words'}. 5) Listen to the chapter and follow the text. 6) ${secondaryTitle ? `Compare the ${primaryTitle} and ${secondaryTitle} hotspots.` : `Re-read the sentence about ${primaryTitle}.`} 7) ${quickQuestion ? `Do the Quick Challenge: ${quickQuestion}` : 'Give a two-sentence retell.'} 8) Write one short sentence from memory, then check the text.`;
  }

  return `1) Start with these Word Notes: ${words || 'the highlighted words'}. Guess each meaning from its sentence before opening the definition. 2) Listen to “${page.title}” once. 3) Read and underline the sentence about ${primaryTitle}. 4) ${secondaryTitle ? `Find one different fact about ${secondaryTitle}.` : 'Find one second important fact.'} 5) Close the text and say the two facts. 6) Reopen the text and correct yourself if needed. 7) ${quickQuestion ? `Answer the Quick Challenge: ${quickQuestion}` : 'Write the main idea in one sentence.'} 8) Finish by using one Word Notes word in your own short sentence.`;
};

const arabicRoute = (
  page: PageData,
  chapterNumber: number,
  primaryTitle: string,
  secondaryTitle: string,
  words: string,
  quickQuestion: string,
): string => {
  const route = (chapterNumber - 1) % 3;

  if (route === 0) {
    return `1) انظر إلى عنوان «${page.title}» وتوقع فكرة واحدة. 2) استمع مرة واحدة من دون توقف. 3) اقرأ مرة أخرى وابحث عن الجملة المتعلقة بـ ${primaryTitle}. 4) راجع كلمات Word Notes: ${words || 'الكلمات المميزة'}. 5) افتح hotspot «${primaryTitle}» وقارنه بالجملة التي وجدتها. 6) ${quickQuestion ? `أجب عن Quick Challenge: ${quickQuestion}` : 'قل الفكرة الرئيسة بجملة واحدة.'} 7) إذا أخطأت، ارجع فقط إلى جملة الإجابة ثم حاول ثانية. 8) اختم بقول معلومة واحدة بصوت مرتفع.`;
  }

  if (route === 1) {
    return `1) اقرأ عنوان «${page.title}» وابحث سريعًا عن ${primaryTitle}. 2) اقرأ جزءًا قصيرًا في كل مرة. 3) توقف وقل ما فهمته قبل مراجعة Word Notes. 4) راجع: ${words || 'الكلمات المميزة'}. 5) استمع إلى الفصل واتبع النص. 6) ${secondaryTitle ? `قارن بين hotspot «${primaryTitle}» و«${secondaryTitle}».` : `أعد قراءة الجملة المتعلقة بـ ${primaryTitle}.`} 7) ${quickQuestion ? `نفذ Quick Challenge: ${quickQuestion}` : 'أعد سرد الفصل بجملتين.'} 8) اكتب جملة قصيرة من الذاكرة ثم تحقق منها في النص.`;
  }

  return `1) ابدأ بكلمات Word Notes: ${words || 'الكلمات المميزة'}. حاول فهم كل كلمة من جملتها قبل فتح التعريف. 2) استمع إلى «${page.title}» مرة واحدة. 3) اقرأ وحدد الجملة المتعلقة بـ ${primaryTitle}. 4) ${secondaryTitle ? `ابحث عن معلومة مختلفة عن ${secondaryTitle}.` : 'ابحث عن معلومة مهمة ثانية.'} 5) أغلق النص وقل المعلومتين. 6) افتح النص وصحح نفسك عند الحاجة. 7) ${quickQuestion ? `أجب عن Quick Challenge: ${quickQuestion}` : 'اكتب الفكرة الرئيسة بجملة واحدة.'} 8) اختم باستخدام كلمة واحدة من Word Notes في جملة قصيرة من عندك.`;
};

const buildEnglishSection = (page: PageData, chapterNumber: number): TeacherGuideSection => {
  const evidence = chapterEvidence(page);
  const words = evidence.words.join(', ');
  const hasSecondAnchor = Boolean(evidence.secondaryTitle && evidence.secondaryIdea);

  return {
    chapter: `Chapter ${chapterNumber}: ${page.title}`,
    timing: '15–20 minutes',
    objectives: [
      `Find and explain one fact about ${evidence.primaryTitle}.`,
      words ? `Understand these chapter words in context: ${words}.` : 'Understand the important Word Notes in context.',
      evidence.quickQuestion
        ? `Answer this Quick Challenge from the text: ${evidence.quickQuestion}`
        : `Retell one important idea from ${page.title}.`,
    ],
    pedagogy: `Study this chapter independently by using the text as the answer source. Focus first on ${evidence.primaryTitle}${hasSecondAnchor ? `, then compare it with ${evidence.secondaryTitle}` : ''}. Do not try to translate every sentence; use Word Notes only when the surrounding sentence is not enough.`,
    grammarFocus: evidence.words.length
      ? `Choose one short sentence containing “${evidence.words[0]}”. Copy its word order, then make one new A2 sentence with the same pattern.`
      : 'Choose one short sentence from the chapter, notice its word order, and make one similar A2 sentence.',
    pronunciationFocus: words
      ? `Listen for these words and repeat them after the audio: ${words}. Then read the sentence about ${evidence.primaryTitle} aloud.`
      : `Listen for the key words, repeat them, then read the sentence about ${evidence.primaryTitle} aloud.`,
    lessonPlan: englishRoute(
      page,
      chapterNumber,
      evidence.primaryTitle,
      evidence.secondaryTitle,
      words,
      evidence.quickQuestion,
    ),
    discussionPoints: [
      evidence.quickQuestion || `What does the chapter say about ${evidence.primaryTitle}?`,
      `Which sentence gives the clearest fact about ${evidence.primaryTitle}?`,
      hasSecondAnchor
        ? `What is one difference between the information about ${evidence.primaryTitle} and ${evidence.secondaryTitle}?`
        : `What is one second fact you remember from ${page.title}?`,
    ],
    differentiation: {
      fastFinishers: hasSecondAnchor
        ? `Close the text and write three short sentences using ${evidence.primaryTitle}, ${evidence.secondaryTitle}, and one Word Notes word. Then check every fact in the chapter.`
        : `Close the text and write a three-sentence retell of ${page.title}. Then check every fact in the chapter.`,
      strugglingLearners: `Work with one paragraph only. Find the sentence about ${evidence.primaryTitle}, read it aloud twice, and answer the Quick Challenge with the text open before continuing.`,
    },
    interactiveTips: [
      `Use the ${evidence.primaryTitle} hotspot as a self-check only after you find the related sentence yourself.`,
      hasSecondAnchor
        ? `Use the ${evidence.secondaryTitle} hotspot for a second self-check and say one fact it confirms.`
        : 'After the Quick Challenge, point to the exact answer sentence before moving on.',
    ],
    assessmentTools: {
      rubric: [`One accurate fact about ${evidence.primaryTitle}`, 'Quick Challenge', 'Word Notes use', 'One short retell sentence'],
      exitTicket: [
        `Say one fact about ${evidence.primaryTitle} without looking.`,
        words ? `Use one of these words in a sentence: ${words}.` : 'Use one Word Notes word in a sentence.',
      ],
    },
    extraResources: undefined,
  };
};

const buildArabicSection = (page: PageData, chapterNumber: number): TeacherGuideSection => {
  const evidence = chapterEvidence(page);
  const words = evidence.words.join('، ');
  const hasSecondAnchor = Boolean(evidence.secondaryTitle && evidence.secondaryIdea);

  return {
    chapter: `الفصل ${chapterNumber}: ${page.title}`,
    timing: '15–20 دقيقة',
    objectives: [
      `يجد المتعلم معلومة واحدة عن ${evidence.primaryTitle} ويشرحها.`,
      words ? `يفهم كلمات الفصل الآتية من السياق: ${words}.` : 'يفهم كلمات Word Notes المهمة من السياق.',
      evidence.quickQuestion
        ? `يجيب عن Quick Challenge من النص: ${evidence.quickQuestion}`
        : `يعيد سرد فكرة مهمة من ${page.title}.`,
    ],
    pedagogy: `ادرس هذا الفصل بصورة مستقلة واجعل النص هو مصدر الإجابة. ركز أولا على ${evidence.primaryTitle}${hasSecondAnchor ? `، ثم قارنه بـ ${evidence.secondaryTitle}` : ''}. لا تحاول ترجمة كل جملة؛ استخدم Word Notes عندما لا يكفي السياق لفهم الكلمة.`,
    grammarFocus: evidence.words.length
      ? `اختر جملة قصيرة فيها «${evidence.words[0]}». لاحظ ترتيب الكلمات، ثم كوّن جملة A2 جديدة على النمط نفسه.`
      : 'اختر جملة قصيرة من الفصل، ولاحظ ترتيب الكلمات، ثم كوّن جملة A2 مشابهة.',
    pronunciationFocus: words
      ? `استمع إلى هذه الكلمات وكررها بعد الصوت: ${words}. ثم اقرأ الجملة المتعلقة بـ ${evidence.primaryTitle} بصوت مرتفع.`
      : `استمع إلى الكلمات المهمة وكررها، ثم اقرأ الجملة المتعلقة بـ ${evidence.primaryTitle} بصوت مرتفع.`,
    lessonPlan: arabicRoute(
      page,
      chapterNumber,
      evidence.primaryTitle,
      evidence.secondaryTitle,
      words,
      evidence.quickQuestion,
    ),
    discussionPoints: [
      evidence.quickQuestion || `ماذا يقول الفصل عن ${evidence.primaryTitle}؟`,
      `ما الجملة التي تقدم أوضح معلومة عن ${evidence.primaryTitle}؟`,
      hasSecondAnchor
        ? `ما الفرق بين المعلومة عن ${evidence.primaryTitle} والمعلومة عن ${evidence.secondaryTitle}؟`
        : `ما المعلومة الثانية التي تتذكرها من ${page.title}؟`,
    ],
    differentiation: {
      fastFinishers: hasSecondAnchor
        ? `أغلق النص واكتب ثلاث جمل قصيرة تستخدم ${evidence.primaryTitle} و${evidence.secondaryTitle} وكلمة من Word Notes، ثم تحقق من كل معلومة في الفصل.`
        : `أغلق النص واكتب ثلاث جمل تلخص ${page.title}، ثم تحقق من كل معلومة في الفصل.`,
      strugglingLearners: `اعمل على فقرة واحدة فقط. ابحث عن الجملة المتعلقة بـ ${evidence.primaryTitle}، واقرأها بصوت مرتفع مرتين، ثم أجب عن Quick Challenge والنص مفتوح قبل أن تتابع.`,
    },
    interactiveTips: [
      `استخدم hotspot «${evidence.primaryTitle}» للتحقق الذاتي فقط بعد أن تجد الجملة المرتبطة به بنفسك.`,
      hasSecondAnchor
        ? `استخدم hotspot «${evidence.secondaryTitle}» للتحقق الثاني، وقل معلومة واحدة يؤكدها.`
        : 'بعد Quick Challenge، حدد جملة الإجابة نفسها قبل الانتقال إلى الخطوة التالية.',
    ],
    assessmentTools: {
      rubric: [`معلومة صحيحة عن ${evidence.primaryTitle}`, 'Quick Challenge', 'استخدام Word Notes', 'جملة إعادة سرد قصيرة'],
      exitTicket: [
        `قل معلومة عن ${evidence.primaryTitle} من دون النظر إلى النص.`,
        words ? `استخدم كلمة من هذه الكلمات في جملة: ${words}.` : 'استخدم كلمة من Word Notes في جملة.',
      ],
    },
    extraResources: undefined,
  };
};

export const buildA2ChapterSelfStudyGuide = (
  finalizedPages: PageData[],
  storyIds: number[],
  language: A2SelfStudyLanguage,
): TeacherGuideSection[] => storyIds.map((id, index) => {
  const page = finalizedPages.find((item) => item.id === id);
  if (!page) throw new Error(`Story page ${id} is missing.`);

  return language === 'ar'
    ? buildArabicSection(page, index + 1)
    : buildEnglishSection(page, index + 1);
});
