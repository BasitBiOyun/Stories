import type { BlueprintLanguage, LearningBlueprint } from '../../learningBlueprint';

const bullets = (values: string[]) => values.map(value => `- ${value}`).join('\n');

export const buildAbrahamA2GoldStudentGuideText = (
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
): string => {
  const intro = language === 'en'
    ? '# Prophet Abraham A2 — Self-Study Path\n\nUse this guide chapter by chapter. Understand the main event, find the supporting story detail, notice useful A2 language, correct mistakes, retrieve the idea later, and express it in a short response.'
    : '# قصة النبي إبراهيم A2 — مسار الدراسة الذاتية\n\nاستخدم هذا الدليل فصلًا فصلًا. افهم الحدث الرئيس، وحدد التفصيل الداعم من القصة، ولاحظ لغة A2 المفيدة، وصحح الأخطاء، واسترجع الفكرة لاحقًا، وعبّر عنها في استجابة قصيرة.';

  const chapterSections = blueprint.chapters.map(chapter => {
    const guide = chapter.selfStudyGuide[language];
    const outcomes = chapter.learningMap?.learningOutcomes ?? [];
    const goals = outcomes.map(outcome => outcome.objective[language]);
    const success = outcomes.flatMap(outcome => outcome.successCriteria.map(item => item[language]));
    const steps = guide.studySequence ?? [];
    const checks = guide.selfCheck ?? [];
    const repair = guide.repairStrategy ?? [];
    const heading = language === 'en' ? `## Chapter ${chapter.chapterId}` : `## الفصل ${chapter.chapterId}`;
    const labels = language === 'en'
      ? {
          goals: 'Goals', success: 'What success looks like', grammar: 'Language to notice', steps: 'Study steps', check: 'Check yourself', repair: 'If you get stuck', transfer: 'Use what you learned', reflection: 'Reflect',
        }
      : {
          goals: 'الأهداف', success: 'كيف يبدو النجاح', grammar: 'لغة لاحظها', steps: 'خطوات الدراسة', check: 'اختبر نفسك', repair: 'إذا واجهت صعوبة', transfer: 'استخدم ما تعلمته', reflection: 'تأمل',
        };

    return [
      heading,
      `### ${labels.goals}\n${bullets(goals)}`,
      `### ${labels.success}\n${bullets(success)}`,
      guide.grammarFocus ? `### ${labels.grammar}\n${guide.grammarFocus}` : '',
      `### ${labels.steps}\n${bullets(steps)}`,
      `### ${labels.check}\n${bullets(checks)}`,
      `### ${labels.repair}\n${bullets(repair)}`,
      guide.transferTask ? `### ${labels.transfer}\n${guide.transferTask}` : '',
      guide.reflectionPrompt ? `### ${labels.reflection}\n${guide.reflectionPrompt}` : '',
    ].filter(Boolean).join('\n\n');
  }).join('\n\n---\n\n');

  return `${intro}\n\n${chapterSections}`;
};
