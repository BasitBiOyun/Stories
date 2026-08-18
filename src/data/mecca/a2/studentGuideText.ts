import type { BlueprintLanguage, LearningBlueprint } from '../../learningBlueprint';

const bullets = (values: string[]) => values.map(value => `- ${value}`).join('\n');

export const buildMeccaA2GoldStudentGuideText = (blueprint: LearningBlueprint, language: BlueprintLanguage): string => {
  const intro = language === 'en'
    ? '# Bilal & Mecca A2 — Self-Study Path\n\nUse this guide chapter by chapter. Understand the main event and social idea, find story evidence, notice useful A2 language, correct mistakes, retrieve the idea later, and express it briefly.'
    : '# بلال ومكة A2 — مسار الدراسة الذاتية\n\nاستخدم هذا الدليل فصلًا فصلًا. افهم الحدث الرئيس والفكرة الاجتماعية، وحدد دليل القصة، ولاحظ لغة A2 المفيدة، وصحح الأخطاء، واسترجع الفكرة لاحقًا، وعبّر عنها باختصار.';
  const sections = blueprint.chapters.map(chapter => {
    const guide = chapter.selfStudyGuide[language];
    const outcomes = chapter.learningMap?.learningOutcomes ?? [];
    const goals = outcomes.map(outcome => outcome.objective[language]);
    const success = outcomes.flatMap(outcome => outcome.successCriteria.map(item => item[language]));
    const labels = language === 'en'
      ? { goals: 'Goals', success: 'What success looks like', grammar: 'Language to notice', steps: 'Study steps', check: 'Check yourself', repair: 'If you get stuck', transfer: 'Use what you learned', reflection: 'Reflect' }
      : { goals: 'الأهداف', success: 'كيف يبدو النجاح', grammar: 'لغة لاحظها', steps: 'خطوات الدراسة', check: 'اختبر نفسك', repair: 'إذا واجهت صعوبة', transfer: 'استخدم ما تعلمته', reflection: 'تأمل' };
    return [
      language === 'en' ? `## Chapter ${chapter.chapterId}` : `## الفصل ${chapter.chapterId}`,
      `### ${labels.goals}\n${bullets(goals)}`,
      `### ${labels.success}\n${bullets(success)}`,
      guide.grammarFocus ? `### ${labels.grammar}\n${guide.grammarFocus}` : '',
      `### ${labels.steps}\n${bullets(guide.studySequence ?? [])}`,
      `### ${labels.check}\n${bullets(guide.selfCheck ?? [])}`,
      `### ${labels.repair}\n${bullets(guide.repairStrategy ?? [])}`,
      guide.transferTask ? `### ${labels.transfer}\n${guide.transferTask}` : '',
      guide.reflectionPrompt ? `### ${labels.reflection}\n${guide.reflectionPrompt}` : '',
    ].filter(Boolean).join('\n\n');
  }).join('\n\n---\n\n');
  return `${intro}\n\n${sections}`;
};
