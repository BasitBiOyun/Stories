import type { StudentGuideSection } from '../types';
import type { BlueprintLanguage, LearningBlueprint } from './learningBlueprint';
import type { B1GoldStory } from './b1GoldPedagogy';

const titles: Record<B1GoldStory, { en: string; ar: string }> = {
  adam: { en: 'Prophet Adam', ar: 'النبي آدم' },
  abraham: { en: 'Prophet Abraham', ar: 'النبي إبراهيم' },
  moses: { en: 'Prophet Moses', ar: 'النبي موسى' },
  mecca: { en: 'Mecca and the Age of Jahiliyyah', ar: 'مكة وعصر الجاهلية' },
  yunusEmre: { en: 'Yunus Emre', ar: 'يونس إمره' },
};

const cleanLanguageFocus = (value: string | undefined, language: BlueprintLanguage): string => {
  if (!value?.trim()) {
    return language === 'en'
      ? 'Notice the useful sentence patterns in the chapter and reuse one of them in your answer.'
      : 'لاحظ التراكيب المفيدة في الفصل واستخدم واحدًا منها في إجابتك.';
  }

  return value
    .replace(/TYMM\s+YD(?:AB|DB)\d+\s+(?:(?:supporting|primary)|(?:داعم|أساسي))\s*(?:\+\s*CEFR\s+B1)?\s*:\s*/gi, '')
    .replace(/claim\s*[→-]\s*evidence\s*[→-]\s*explanation/gi, 'a clear answer with a reason and one or two story details')
    .replace(/evidence-based/gi, 'based on the chapter')
    .replace(/textual evidence/gi, 'a useful sentence from the chapter')
    .replace(/supported inference/gi, 'an idea supported by the chapter')
    .replace(/inference/gi, 'an idea you understand from the chapter')
    .replace(/diagnostic/gi, 'quick')
    .replace(/scaffold/gi, 'help')
    .trim();
};

export const buildB1FriendlyStudentGuideSections = (
  language: BlueprintLanguage,
): StudentGuideSection[] => language === 'en'
  ? [
      {
        title: 'Understand the Big Idea',
        icon: 'Target',
        text: 'Read the chapter once without stopping too much. Your first job is to understand what is happening and what the chapter is mainly about.',
        points: ['Look at the title and picture first.', 'After reading, say the main idea in one or two sentences.'],
      },
      {
        title: 'Read Again for Important Details',
        icon: 'Eye',
        text: 'On your second reading, look for the parts that explain why something happened, how two ideas are different, or what changed.',
        points: ['Choose one or two useful sentences.', 'Do not add information that is not in the chapter.'],
      },
      {
        title: 'Notice Useful Language',
        icon: 'BookOpen',
        text: 'Pay attention to grammar inside sentences you already understand. You do not need to memorise a rule before you understand the story.',
        points: ['Find one useful sentence pattern.', 'Try the same pattern in one sentence of your own.'],
      },
      {
        title: 'Learn Words from the Story',
        icon: 'Stars',
        text: 'Learn new words where they appear in the story. The sentence around a word often helps you understand it.',
        points: ['Guess the meaning before opening the Word Note.', 'Use an important new word in a short sentence about the chapter.'],
      },
      {
        title: 'Fix Only What You Missed',
        icon: 'Lightbulb',
        text: 'If an answer is wrong, you do not need to read the whole chapter again. Read the hint and return to the part connected to that question.',
        points: ['Find the sentence that helps you correct the answer.', 'Say to yourself what you misunderstood before trying again.'],
      },
      {
        title: 'Remember and Explain',
        icon: 'PenTool',
        text: 'At the end, close the text for a moment and explain the chapter in your own words.',
        points: ['Answer one question in 3–5 sentences.', 'Use one or two accurate details from the chapter to make your answer clearer.'],
      },
    ]
  : [
      {
        title: 'افهم الفكرة الرئيسة',
        icon: 'Target',
        text: 'اقرأ الفصل مرة أولى دون توقف كثير. مهمتك الأولى هي فهم ما يحدث وما الفكرة الرئيسة للفصل.',
        points: ['انظر إلى العنوان والصورة أولًا.', 'بعد القراءة عبّر عن الفكرة الرئيسة بجملة أو جملتين.'],
      },
      {
        title: 'اقرأ مرة أخرى للتفاصيل المهمة',
        icon: 'Eye',
        text: 'في القراءة الثانية ابحث عن الأجزاء التي تشرح سبب الحدث أو الفرق بين فكرتين أو ما الذي تغير.',
        points: ['اختر جملة أو جملتين مفيدتين.', 'لا تضف معلومات غير موجودة في الفصل.'],
      },
      {
        title: 'لاحظ اللغة المفيدة',
        icon: 'BookOpen',
        text: 'لاحظ القواعد داخل الجمل التي تفهمها بالفعل. لا تحتاج إلى حفظ القاعدة قبل فهم القصة.',
        points: ['اعثر على تركيب مفيد واحد.', 'حاول استخدام التركيب نفسه في جملة من عندك.'],
      },
      {
        title: 'تعلم الكلمات من القصة',
        icon: 'Stars',
        text: 'تعلم الكلمات الجديدة في مكان ظهورها في القصة. غالبًا تساعدك الجملة المحيطة بالكلمة على فهمها.',
        points: ['خمّن المعنى قبل فتح ملاحظة الكلمة.', 'استخدم كلمة مهمة جديدة في جملة قصيرة عن الفصل.'],
      },
      {
        title: 'صحح الجزء الذي لم تفهمه فقط',
        icon: 'Lightbulb',
        text: 'إذا كانت إجابتك خاطئة فلا تحتاج إلى إعادة قراءة الفصل كله. اقرأ التلميح وارجع إلى الجزء المرتبط بالسؤال.',
        points: ['اعثر على الجملة التي تساعدك على تصحيح الإجابة.', 'حدد لنفسك ما الذي فهمته بصورة خاطئة ثم حاول مرة أخرى.'],
      },
      {
        title: 'تذكر واشرح',
        icon: 'PenTool',
        text: 'في النهاية أغلق النص للحظة وحاول شرح الفصل بكلماتك.',
        points: ['أجب عن سؤال واحد في 3–5 جمل.', 'استخدم تفصيلًا أو تفصيلين دقيقين من الفصل لتجعل إجابتك أوضح.'],
      },
    ];

export const buildB1FriendlyStudentGuideText = (
  blueprint: LearningBlueprint,
  story: B1GoldStory,
  language: BlueprintLanguage,
): string => {
  const chapterBlocks = blueprint.chapters.map(chapter => {
    const guide = chapter.selfStudyGuide[language];
    const goals = chapter.objectives.map((objective, index) => `${index + 1}. ${objective[language]}`).join('\n');
    const languageFocus = cleanLanguageFocus(guide.grammarFocus, language);
    const questions = guide.discussionPoints.slice(0, 2).map(point => `- ${point}`).join('\n');

    if (language === 'en') {
      return `## Chapter ${chapter.chapterId}\n\n### What to Understand\n${goals}\n\n### Useful Language\n${languageFocus}\n\n### How to Study This Chapter\n1. Read once for the main idea.\n2. Read again and find one or two details that help you understand the chapter better.\n3. Do the Quick Challenge from memory.\n4. If you are wrong, read the hint and return only to the part you misunderstood.\n5. Say or write a short 3–5 sentence answer in your own words.\n\n### Questions to Think About\n${questions}\n\n### Quick Self-Check\n- Can I explain the main idea without looking?\n- Can I give one accurate detail from the chapter?\n- Can I use one useful word or sentence pattern from this chapter?`;
    }

    return `## الفصل ${chapter.chapterId}\n\n### ما الذي ينبغي أن تفهمه؟\n${goals}\n\n### لغة مفيدة\n${languageFocus}\n\n### كيف تدرس هذا الفصل؟\n1. اقرأ مرة للفكرة الرئيسة.\n2. اقرأ مرة أخرى وابحث عن تفصيل أو تفصيلين يساعدانك على فهم الفصل بصورة أفضل.\n3. نفّذ التحدي السريع من الذاكرة.\n4. إذا أخطأت فاقرأ التلميح وارجع فقط إلى الجزء الذي لم تفهمه.\n5. قل أو اكتب إجابة قصيرة من 3–5 جمل بكلماتك.\n\n### أسئلة للتفكير\n${questions}\n\n### تحقق من نفسك بسرعة\n- هل أستطيع شرح الفكرة الرئيسة دون النظر إلى النص؟\n- هل أستطيع ذكر تفصيل دقيق واحد من الفصل؟\n- هل أستطيع استخدام كلمة أو تركيب مفيد من هذا الفصل؟`;
  }).join('\n\n');

  const storyTitle = titles[story][language];
  return language === 'en'
    ? `# ${storyTitle} — B1 Self-Study Guide\n\nUse this guide when you study by yourself. You do not need to analyse every sentence. First understand the story, then look more closely at why events happen, how ideas are connected, and what changes from one part to another.\n\n## A Simple Routine\n1. Look at the title and picture.\n2. Read or listen once for the big picture.\n3. Read again for important details.\n4. Do the chapter activity and Quick Challenge.\n5. Check a wrong answer by returning to the relevant part of the chapter.\n6. Finish by explaining one idea in your own words.\n\n${chapterBlocks}`
    : `# ${storyTitle} — دليل الدراسة الذاتية B1\n\nاستخدم هذا الدليل عندما تدرس بمفردك. لا تحتاج إلى تحليل كل جملة. افهم القصة أولًا، ثم انظر بصورة أعمق إلى أسباب الأحداث وكيف ترتبط الأفكار وما الذي يتغير من جزء إلى آخر.\n\n## طريقة بسيطة للدراسة\n1. انظر إلى العنوان والصورة.\n2. اقرأ أو استمع مرة لفهم الصورة العامة.\n3. اقرأ مرة أخرى للتفاصيل المهمة.\n4. نفّذ نشاط الفصل والتحدي السريع.\n5. إذا أخطأت فارجع إلى الجزء المرتبط بالسؤال فقط.\n6. اختم بشرح فكرة واحدة بكلماتك.\n\n${chapterBlocks}`;
};
