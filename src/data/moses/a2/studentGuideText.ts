import type { BlueprintLanguage, LearningBlueprint } from '../../learningBlueprint';

const bullets = (values: string[]) => values.map(value => `- ${value}`).join('\n');

export const buildMosesA2GoldStudentGuideText = (
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
): string => {
  const intro = language === 'en'
    ? `# Prophet Moses A2 — Self-Study Path

This is a sixteen-chapter story. Do not try to memorise every sentence. Work chapter by chapter: understand the main event, find evidence, notice useful A2 language, retrieve the idea without looking, correct misunderstandings, and use what you learned in a short response.`
    : `# قصة النبي موسى A2 — مسار الدراسة الذاتية

هذه قصة من ستة عشر فصلًا. لا تحاول حفظ كل جملة. اعمل فصلًا فصلًا: افهم الحدث الرئيس، وحدد الدليل، ولاحظ اللغة المفيدة المناسبة لمستوى A2، واسترجع الفكرة دون النظر، وصحح سوء الفهم، واستخدم ما تعلمته في استجابة قصيرة.`;

  const routine = language === 'en'
    ? `## Your chapter routine

1. Read the two goals.
2. Predict one idea from the title and image.
3. Read or listen once for the main event.
4. Reread and find evidence for each goal.
5. Guess important words from context before opening Word Notes.
6. Complete the Quick Challenge from memory.
7. If you are wrong, follow the retry hint and reread only the relevant part.
8. Finish with the short transfer task.`
    : `## روتينك في كل فصل

1. اقرأ هدفي الفصل.
2. ضع توقعًا واحدًا من العنوان والصورة.
3. اقرأ أو استمع مرة لفهم الحدث الرئيس.
4. أعد القراءة وابحث عن دليل لكل هدف.
5. حاول فهم الكلمات المهمة من السياق قبل فتح ملاحظات المفردات.
6. نفذ التحدي السريع من الذاكرة.
7. إذا أخطأت، اتبع تلميح إعادة المحاولة وأعد قراءة الجزء المناسب فقط.
8. اختم بمهمة النقل القصيرة.`;

  const chapterSections = blueprint.chapters.map(chapter => {
    const guide = chapter.selfStudyGuide[language];
    const outcomes = chapter.learningMap?.learningOutcomes ?? [];
    const goals = outcomes.map(outcome => outcome.objective[language]);
    const success = outcomes.flatMap(outcome => outcome.successCriteria.map(item => item[language]));
    const steps = guide.studySequence ?? [];
    const checks = guide.selfCheck ?? [];
    const repairs = guide.repairStrategy ?? [];
    const grammar = guide.grammarFocus ?? '';
    const transfer = guide.transferTask ?? '';
    const reflection = guide.reflectionPrompt ?? '';

    if (language === 'en') {
      return `## Chapter ${chapter.chapterId}

### Goals
${bullets(goals)}

### I know I understand when I can…
${bullets(success)}

### Language to notice
${grammar || '- Use the chapter language in context.'}

### Study steps
${bullets(steps)}

### If I get something wrong
${bullets(repairs)}

### Check myself
${bullets(checks)}

### Use what I learned
${transfer}

### Reflect
${reflection}`;
    }

    return `## الفصل ${chapter.chapterId}

### الأهداف
${bullets(goals)}

### أعرف أنني فهمت عندما أستطيع…
${bullets(success)}

### لغة ألاحظها
${grammar || '- استخدم لغة الفصل في السياق.'}

### خطوات الدراسة
${bullets(steps)}

### إذا أخطأت
${bullets(repairs)}

### أختبر نفسي
${bullets(checks)}

### أستخدم ما تعلمته
${transfer}

### أتأمل
${reflection}`;
  }).join('\n\n---\n\n');

  const ending = language === 'en'
    ? `## Before the Final Challenge

Ask yourself three questions:
- What did I learn from the story?
- Which chapter evidence can I use?
- What should I practise one more time?

Use the Knowledge Check, Vocabulary Challenge, and Retrieval Review to find gaps. Reread only the chapters you need.`
    : `## قبل التحدي النهائي

اسأل نفسك ثلاثة أسئلة:
- ماذا تعلمت من القصة؟
- ما الدليل من الفصول الذي أستطيع استخدامه؟
- ما الذي أحتاج إلى التدرب عليه مرة أخرى؟

استخدم اختبار الفهم وتحدي المفردات ومراجعة الاسترجاع لاكتشاف نقاط الضعف. أعد قراءة الفصول التي تحتاجها فقط.`;

  return `${intro}\n\n${routine}\n\n---\n\n${chapterSections}\n\n---\n\n${ending}`;
};
