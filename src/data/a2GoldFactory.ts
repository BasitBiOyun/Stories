import type {
  Exercise,
  Hotspot,
  PageData,
  QuizQuestion,
  StudentGuideMetadata,
  StudentGuideSection,
  TeacherGuideMetadata,
  TeacherGuideSection,
} from '../types';

export type A2GoldLanguage = 'en' | 'ar';

export interface A2HotspotText {
  title: string;
  description: string;
}

export type A2HotspotMap = Record<string, A2HotspotText>;

export interface A2GoldPageConfig {
  storyIds: number[];
  knowledgeCheckPageId: number;
  reviewPageId: number;
  glossaryPageIds: [number, number];
  finalChallengePageId: number;
}

const normalizeQuestion = (value: string): string => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^a-z0-9\u0600-\u06ff]+/g, ' ')
  .trim();

const isObjectiveExercise = (exercise: Exercise): boolean =>
  Boolean(exercise.question?.trim()) &&
  (exercise.type === 'multiple-choice' || exercise.type === 'true-false');

interface BankItem {
  exercise: Exercise;
  chapterId?: number;
}

const collectObjectiveBank = (
  pages: PageData[],
  config: A2GoldPageConfig,
): BankItem[] => {
  const bank: BankItem[] = [];

  for (const id of config.storyIds) {
    const page = pages.find((item) => item.id === id);
    const exercise = page?.exercises?.find(isObjectiveExercise);
    if (exercise) bank.push({ exercise, chapterId: id });
  }

  const knowledgePage = pages.find((item) => item.id === config.knowledgeCheckPageId);
  knowledgePage?.exercises?.filter(isObjectiveExercise).forEach((exercise) => bank.push({ exercise }));

  const seen = new Set<string>();
  return bank.filter(({ exercise }) => {
    const key = normalizeQuestion(exercise.question || '');
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const pickEvenly = <T,>(items: T[], count: number): T[] => {
  if (items.length <= count) return items.slice();
  if (count === 1) return [items[0]];
  const picked: T[] = [];
  const used = new Set<number>();
  for (let index = 0; index < count; index += 1) {
    let sourceIndex = Math.round(index * (items.length - 1) / (count - 1));
    while (used.has(sourceIndex) && sourceIndex + 1 < items.length) sourceIndex += 1;
    used.add(sourceIndex);
    picked.push(items[sourceIndex]);
  }
  return picked;
};

const cloneObjective = (
  item: BankItem,
  id: string,
  language: A2GoldLanguage,
): Exercise => ({
  ...item.exercise,
  id,
  title: item.exercise.title || (language === 'ar' ? 'مراجعة' : 'Review'),
  instructions: item.exercise.instructions || (
    item.exercise.type === 'true-false'
      ? (language === 'ar' ? 'حدد هل العبارة صحيحة أم خاطئة.' : 'Decide if the statement is true or false.')
      : (language === 'ar' ? 'اختر الإجابة الصحيحة.' : 'Choose the correct answer.')
  ),
  feedback: {
    correct: item.exercise.feedback?.correct || (language === 'ar' ? 'صحيح.' : 'Correct.'),
    incorrect: item.exercise.feedback?.incorrect || (
      language === 'ar'
        ? 'ارجع إلى الفصل، وابحث عن جملة الإجابة، ثم حاول مرة أخرى.'
        : 'Go back to the chapter, find the answer sentence, and try again.'
    ),
  },
});

const toQuizQuestion = (
  item: BankItem,
  language: A2GoldLanguage,
): QuizQuestion => {
  const exercise = item.exercise;
  if (exercise.type === 'multiple-choice') {
    const correctIndex = typeof exercise.correctAnswer === 'number' ? exercise.correctAnswer : 0;
    return {
      question: exercise.question || '',
      options: (exercise.options || []).map((text, index) => ({ text, isCorrect: index === correctIndex })),
      hint: item.chapterId
        ? (language === 'ar' ? `ارجع إلى الفصل ${item.chapterId}.` : `Go back to Chapter ${item.chapterId}.`)
        : (language === 'ar' ? 'ابحث عن جملة الإجابة في القصة.' : 'Find the answer sentence in the story.'),
    };
  }

  const correct = Boolean(exercise.correctAnswer);
  return {
    question: exercise.question || '',
    options: language === 'ar'
      ? [{ text: 'صحيح', isCorrect: correct }, { text: 'خطأ', isCorrect: !correct }]
      : [{ text: 'True', isCorrect: correct }, { text: 'False', isCorrect: !correct }],
    hint: item.chapterId
      ? (language === 'ar' ? `ارجع إلى الفصل ${item.chapterId}.` : `Go back to Chapter ${item.chapterId}.`)
      : (language === 'ar' ? 'ابحث عن جملة الإجابة في القصة.' : 'Find the answer sentence in the story.'),
  };
};

const reviewExercises = (
  original: Exercise[] | undefined,
  quizItems: BankItem[],
  language: A2GoldLanguage,
): Exercise[] => {
  const nonQuiz = (original || [])
    .filter((exercise) => exercise.type !== 'quiz-game')
    .map((exercise) => exercise.type === 'reflection'
      ? {
          ...exercise,
          feedback: {
            correct: exercise.feedback?.correct || (
              language === 'ar'
                ? 'استخدم معلومة واحدة من القصة لدعم فكرتك.'
                : 'Use one fact from the story to support your idea.'
            ),
            incorrect: exercise.feedback?.incorrect?.trim() || (
              language === 'ar'
                ? 'لا توجد إجابة واحدة خاطئة هنا. اختر فكرة من القصة واشرحها بكلماتك.'
                : 'There is no single wrong answer here. Choose an idea from the story and explain it in your own words.'
            ),
          },
        }
      : exercise);

  const quiz: Exercise = {
    id: 'gold-review-quiz',
    type: 'quiz-game',
    title: language === 'ar' ? 'تحدي المراجعة' : 'Review Challenge',
    instructions: language === 'ar'
      ? 'أجب عن ثمانية أسئلة. إذا نسيت، ارجع إلى الفصل ثم حاول مرة أخرى.'
      : 'Answer eight questions. If you forget, go back to the chapter and try again.',
    question: language === 'ar'
      ? 'هل تتذكر أهم المعلومات في القصة؟'
      : 'Can you remember the key facts in the story?',
    correctAnswer: null,
    explanation: language === 'ar'
      ? 'هذه المراجعة تساعدك على تذكر المعلومات قبل التحدي النهائي.'
      : 'This review helps you remember key facts before the Final Challenge.',
    feedback: {
      correct: language === 'ar' ? 'جيد. تذكرت المعلومة.' : 'Good. You remembered the fact.',
      incorrect: language === 'ar'
        ? 'ارجع إلى الفصل، وابحث عن جملة الإجابة، ثم حاول مرة أخرى.'
        : 'Go back to the chapter, find the answer sentence, and try again.',
    },
    hints: language === 'ar'
      ? ['استخدم عنوان الفصل.', 'ابحث عن جملة الإجابة.', 'اقرأها مرة أخرى ثم حاول.']
      : ['Use the chapter title.', 'Find the answer sentence.', 'Read it again and try once more.'],
    quizQuestions: quizItems.map((item) => toQuizQuestion(item, language)),
  };

  return [...nonQuiz, quiz];
};

const selectGlossary = (
  storyPages: PageData[],
  start: number,
  end: number,
  count = 12,
): NonNullable<PageData['vocabulary']> => {
  const seen = new Set<string>();
  const selected: NonNullable<PageData['vocabulary']> = [];
  for (const page of storyPages.slice(start, end)) {
    for (const entry of page.vocabulary || []) {
      const key = entry.word.toLowerCase().trim();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      selected.push({ ...entry });
      if (selected.length === count) return selected;
    }
  }

  for (const page of storyPages) {
    for (const entry of page.vocabulary || []) {
      const key = entry.word.toLowerCase().trim();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      selected.push({ ...entry });
      if (selected.length === count) return selected;
    }
  }
  return selected;
};

export const applyA2GoldPages = ({
  canonicalPages,
  hotspotMap,
  config,
  language,
}: {
  canonicalPages: PageData[];
  hotspotMap: A2HotspotMap;
  config: A2GoldPageConfig;
  language: A2GoldLanguage;
}): PageData[] => {
  const storyPages = config.storyIds
    .map((id) => canonicalPages.find((page) => page.id === id))
    .filter((page): page is PageData => Boolean(page));

  const objectiveBank = collectObjectiveBank(canonicalPages, config);
  if (objectiveBank.length < 10) {
    throw new Error(`A2 Gold requires at least 10 unique objective questions; found ${objectiveBank.length}.`);
  }
  const knowledgeItems = pickEvenly(objectiveBank, 8);
  const finalItems = pickEvenly([...objectiveBank].reverse(), 10);
  const reviewItems = pickEvenly(objectiveBank, 8);

  const midpoint = Math.ceil(storyPages.length / 2);
  const glossary1 = selectGlossary(storyPages, 0, midpoint, 12);
  const glossary2 = selectGlossary(storyPages, midpoint, storyPages.length, 12);

  return canonicalPages.map((page) => {
    if (config.storyIds.includes(page.id)) {
      const hotspots: Hotspot[] | undefined = page.hotspots?.map((hotspot) => {
        const replacement = hotspotMap[hotspot.id];
        return replacement ? { ...hotspot, ...replacement } : hotspot;
      });
      return { ...page, hotspots };
    }

    if (page.id === config.knowledgeCheckPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'راجع أهم المعلومات. إذا أخطأت، ارجع إلى القصة ثم حاول مرة أخرى.'
          : 'Review the key facts. If you make a mistake, go back to the story and try again.',
        exercises: knowledgeItems.map((item, index) => cloneObjective(item, `gold-kc-${index + 1}`, language)),
      };
    }

    if (page.id === config.reviewPageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'رتب، صِل، فكّر، ثم أكمل تحدي المراجعة المكوّن من ثمانية أسئلة.'
          : 'Put ideas in order, match, reflect, then complete the eight-question Review Challenge.',
        exercises: reviewExercises(page.exercises, reviewItems, language),
      };
    }

    if (page.id === config.glossaryPageIds[0]) {
      return {
        ...page,
        content: language === 'ar'
          ? `مفردات أساسية مختارة من النصف الأول من القصة للمراجعة.`
          : 'Selected key vocabulary from the first half of the story for whole-book review.',
        vocabulary: glossary1,
      };
    }

    if (page.id === config.glossaryPageIds[1]) {
      return {
        ...page,
        content: language === 'ar'
          ? `مفردات أساسية مختارة من النصف الثاني من القصة للمراجعة.`
          : 'Selected key vocabulary from the second half of the story for whole-book review.',
        vocabulary: glossary2,
      };
    }

    if (page.id === config.finalChallengePageId) {
      return {
        ...page,
        content: language === 'ar'
          ? 'اختبر تذكرك للقصة كلها في عشرة أسئلة واضحة.'
          : 'Check what you remember from the whole story in ten clear questions.',
        exercises: finalItems.map((item, index) => cloneObjective(item, `gold-fc-${index + 1}`, language)),
      };
    }

    return page;
  });
};

const wordList = (page: PageData, limit = 4): string =>
  (page.vocabulary || []).slice(0, limit).map((entry) => entry.word).join(', ');

const keyIdea = (page: PageData): string =>
  page.hotspots?.[0]?.description || page.exercises?.[0]?.question || page.title;

export const buildA2TeacherGuide = (
  finalizedPages: PageData[],
  storyIds: number[],
  language: A2GoldLanguage,
): TeacherGuideSection[] => storyIds.map((id, index) => {
  const page = finalizedPages.find((item) => item.id === id);
  if (!page) throw new Error(`Story page ${id} is missing.`);
  const words = wordList(page);
  const quickQuestion = page.exercises?.[0]?.question || '';
  const idea = keyIdea(page);

  if (language === 'ar') {
    return {
      chapter: `الفصل ${index + 1}: ${page.title}`,
      timing: '30–35 دقيقة',
      objectives: [
        'يحدد المتعلم الفكرة الرئيسة في الفصل.',
        'يجيب عن Quick Challenge ثم يجد جملة الإجابة في النص.',
        words ? `يفهم الكلمات الأساسية في السياق: ${words}.` : 'يفهم الكلمات الأساسية في السياق.',
        `يشرح الفكرة الآتية بجملة أو جملتين بسيطتين: ${idea}`,
      ],
      pedagogy: 'استخدم دورة تعليمية قصيرة: معاينة، استماع وقراءة، فكرة رئيسة، Quick Challenge، الرجوع إلى جملة الإجابة، ثم تأمل قصير. أبقِ جميع المعلومات مرتبطة بالنص.',
      grammarFocus: 'لاحظ التراكيب الموجودة في جمل الفصل فقط، واستخدم القاعدة لخدمة الفهم والتعبير القصير.',
      pronunciationFocus: words ? `استمع ثم كرر الكلمات: ${words}.` : 'استمع إلى الكلمات الأساسية وكررها بوضوح.',
      lessonPlan: `0–5: معاينة العنوان والصورة. 5–10: كلمات أساسية. 10–20: استماع وقراءة على أجزاء قصيرة. 20–25: مناقشة الفكرة الرئيسة: ${idea} 25–30: Quick Challenge والرجوع إلى جملة الإجابة. 30–35: جملة تلخيص أو بطاقة خروج.`,
      discussionPoints: [
        quickQuestion || 'ما أهم معلومة في هذا الفصل؟',
        'ما أهم معلومة في هذا الفصل؟',
        'ما الفكرة أو القيمة التي يمكن فهمها من النص؟ ابدأ بمعلومة من الفصل.',
      ],
      differentiation: {
        fastFinishers: 'اكتب ثلاث جمل قصيرة تلخص الفصل مستخدما كلمتين من Word Notes.',
        strugglingLearners: 'اقرأ فقرة واحدة في كل مرة وحدد جملة الإجابة قبل الكتابة.',
      },
      interactiveTips: [
        'استخدم الـ hotspots بعد القراءة الأولى لتثبيت المعلومات المهمة، لا لتقديم معلومات خارج النص.',
        'بعد الإجابة الخاطئة، اطلب من المتعلم العثور على جملة الإجابة ثم المحاولة مرة أخرى.',
      ],
      assessmentTools: {
        rubric: ['الفكرة الرئيسة', 'جملة الإجابة', 'مفردات الفصل'],
        exitTicket: ['معلومة واحدة', 'كلمة واحدة + معناها'],
      },
      kinestheticActivities: ['رتب ثلاث بطاقات معلومات من الفصل، أو صِل الكلمة بجملتها من دون أوراق عمل إضافية.'],
      globalCitizenship: ['ناقش قيمة مناسبة مثل الصدق أو الصبر أو العدل أو الرحمة أو مساعدة الآخرين، مع الرجوع إلى النص.'],
      extraResources: undefined,
    };
  }

  return {
    chapter: `Chapter ${index + 1}: ${page.title}`,
    timing: '30–35 minutes',
    objectives: [
      'Identify the main idea in the chapter.',
      'Answer the Quick Challenge and point to the answer sentence.',
      words ? `Understand these key words in context: ${words}.` : 'Understand the key words in context.',
      `Explain this key idea in one or two simple sentences: ${idea}`,
    ],
    pedagogy: 'Use a short teaching-first cycle: preview, listen/read, find the main idea, complete the Quick Challenge, return to the answer sentence, then reflect briefly. Keep all factual teaching grounded in the chapter text.',
    grammarFocus: 'Notice useful forms inside the chapter sentences only. Use grammar to support meaning and a short retell, not as a separate lecture.',
    pronunciationFocus: words ? `Model and repeat: ${words}.` : 'Model and repeat the key chapter words.',
    lessonPlan: `0–5 min: Look at the title and image. 5–10 min: Preview key words. 10–20 min: Listen and read in short parts. 20–25 min: Check the main idea: ${idea} 25–30 min: Quick Challenge and answer-sentence check. 30–35 min: One-sentence recap or exit ticket.`,
    discussionPoints: [
      quickQuestion || 'What is one important fact in this chapter?',
      'What is one important fact in this chapter?',
      'What lesson or value can you see in the chapter? Start with one fact from the story.',
    ],
    differentiation: {
      fastFinishers: 'Write three short sentences about the chapter and use two Word Notes words.',
      strugglingLearners: 'Read one short part at a time and point to the answer sentence before writing.',
    },
    interactiveTips: [
      'Open hotspots after the first reading to review key information, not to add facts outside the chapter.',
      'After a wrong answer, ask the learner to find the answer sentence and try again.',
    ],
    assessmentTools: {
      rubric: ['Main idea', 'Answer sentence', 'Chapter vocabulary'],
      exitTicket: ['One fact', 'One word + meaning'],
    },
    kinestheticActivities: ['Put three chapter fact cards in order, or match a key word to its sentence without adding a separate worksheet.'],
    globalCitizenship: ['Discuss a text-grounded value such as honesty, patience, justice, mercy, responsibility, or helping others.'],
    extraResources: undefined,
  };
});

export const buildA2SelfStudyGuide = (
  finalizedPages: PageData[],
  storyIds: number[],
  language: A2GoldLanguage,
): TeacherGuideSection[] => storyIds.map((id, index) => {
  const page = finalizedPages.find((item) => item.id === id);
  if (!page) throw new Error(`Story page ${id} is missing.`);
  const words = wordList(page, 5);
  const quickQuestion = page.exercises?.[0]?.question || '';

  if (language === 'ar') {
    return {
      chapter: `الفصل ${index + 1}: ${page.title}`,
      timing: '15–20 دقيقة',
      objectives: [
        'اعرف الفكرة الرئيسة في الفصل.',
        words ? `تعلم هذه الكلمات: ${words}.` : 'تعلم كلمات الفصل المهمة.',
        'استخدم Quick Challenge لتتأكد من فهمك.',
      ],
      pedagogy: 'انظر → استمع → اقرأ → راجع الكلمات → جرّب → ابحث عن الإجابة → اقرأ مرة أخرى → حاول ثانية.',
      grammarFocus: 'انظر إلى جملة قصيرة من الفصل ولاحظ كيف تعمل الكلمات فيها.',
      pronunciationFocus: words ? `استمع وكرر: ${words}.` : 'استمع إلى الكلمات المهمة وكررها.',
      lessonPlan: `1) انظر إلى العنوان والصورة. 2) استمع مرة واتبع النص. 3) اقرأ جزءا قصيرا في كل مرة. 4) راجع هذه الكلمات في Word Notes: ${words || 'الكلمات المميزة'}. 5) نفذ Quick Challenge. 6) إذا كانت الإجابة خاطئة، ابحث عن جملة الإجابة. 7) اقرأها مرة أخرى ثم حاول ثانية. 8) اختم: قل معلومة واحدة واكتب جملة قصيرة.`,
      discussionPoints: [quickQuestion || 'ما المعلومة الأهم؟', 'ما المعلومة الأهم؟', 'ما كلمة جديدة تعلمتها؟'],
      differentiation: {
        fastFinishers: 'اكتب ثلاث جمل قصيرة عن الفصل.',
        strugglingLearners: 'اقرأ فقرة واحدة فقط، ثم توقف وابحث عن الفكرة الرئيسة.',
      },
      interactiveTips: ['لا تحاول ترجمة كل كلمة.', 'إذا أخطأت، ابحث عن جملة الإجابة قبل المحاولة الثانية.'],
      assessmentTools: { exitTicket: ['معلومة واحدة', 'كلمة واحدة', 'جملة قصيرة واحدة'] },
      extraResources: undefined,
    };
  }

  return {
    chapter: `Chapter ${index + 1}: ${page.title}`,
    timing: '15–20 minutes',
    objectives: [
      'Know the main idea in the chapter.',
      words ? `Learn these words: ${words}.` : 'Learn the important chapter words.',
      'Use the Quick Challenge to check your reading.',
    ],
    pedagogy: 'Look → Listen → Read → Check words → Try → Find the answer → Read again → Try again.',
    grammarFocus: 'Look at one short sentence from the chapter and notice how the English works.',
    pronunciationFocus: words ? `Listen and repeat: ${words}.` : 'Listen to the key words and repeat them.',
    lessonPlan: `1) Look at the title and image. 2) Listen once and follow the text. 3) Read one short part at a time. 4) Check these words in Word Notes: ${words || 'the underlined words'}. 5) Do the Quick Challenge. 6) If an answer is wrong, find the answer sentence. 7) Read it again and try again. 8) Finish: say one fact and write one short sentence.`,
    discussionPoints: [quickQuestion || 'What is the most important fact?', 'What is the most important fact?', 'What new word did you learn?'],
    differentiation: {
      fastFinishers: 'Write three short sentences about the chapter.',
      strugglingLearners: 'Read only one paragraph. Stop and find the main idea before you continue.',
    },
    interactiveTips: ['Do not try to translate every word.', 'If you make a mistake, find the answer sentence before you try again.'],
    assessmentTools: { exitTicket: ['One fact', 'One word', 'One short sentence'] },
    extraResources: undefined,
  };
});

export const buildA2TeacherGuideMetadata = (
  title: string,
  chapterCount: number,
  language: A2GoldLanguage,
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

export const buildA2StudentGuideSections = (language: A2GoldLanguage): StudentGuideSection[] => language === 'ar'
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
  language: A2GoldLanguage,
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
  language: A2GoldLanguage,
): string => language === 'ar'
  ? `# دليل الدراسة الذاتية A2\n## ${title}\n\n### استخدم هذه الخطوات\n\n1. **انظر:** انظر إلى العنوان والصورة.\n2. **استمع:** استمع مرة واتبع النص.\n3. **اقرأ:** اقرأ جزءا قصيرا في كل مرة.\n4. **راجع الكلمات:** اقرأ الجملة أولا، ثم استخدم Word Notes.\n5. **جرّب:** نفذ Quick Challenge.\n6. **ابحث:** إذا أخطأت، ابحث عن جملة الإجابة.\n7. **حاول ثانية:** اقرأ الجملة مرة أخرى ثم أجب.\n8. **اختم:** قل معلومة، وراجع كلمة، واكتب جملة قصيرة.\n\n### تذكر\nلا تحتاج إلى فهم كل كلمة من أول مرة. اقرأ، جرّب، تحقق، ثم عد إلى النص عند الحاجة.\n\n### المراجعة النهائية\nReview Challenge فيه **8 أسئلة**. Final Challenge فيه **10 أسئلة**. قبل البدء، انظر إلى عناوين الفصول وتذكر معلومة واحدة من كل فصل.`
  : `# A2 Self-Study Guide\n## ${title}\n\n### Use these steps\n\n1. **Look:** Look at the title and image.\n2. **Listen:** Listen once and follow the text.\n3. **Read:** Read one short part at a time.\n4. **Check words:** Read the sentence first, then use Word Notes.\n5. **Try:** Do the Quick Challenge.\n6. **Find:** If an answer is wrong, find the answer sentence.\n7. **Try again:** Read the sentence again, then answer one more time.\n8. **Finish:** Say one fact, review one word, and write one short sentence.\n\n### Remember\nYou do not need to understand every word the first time. Read, try, check, and go back to the text when you need help.\n\n### Final review\nThe Review Challenge has **8 questions**. The Final Challenge has **10 questions**. Before you start, look at the chapter titles and remember one fact from each chapter.`;
