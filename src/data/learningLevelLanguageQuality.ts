type Level = 'A2' | 'B1' | 'B2';
type Language = 'en' | 'ar';

type StudentExercise = {
  question?: string;
  options?: string[];
};

type StudentAssessment = {
  id: string;
  exercise: { en: StudentExercise; ar: StudentExercise };
};

type StudentLanguageBlueprint = {
  id: string;
  level: Level;
  qualityContractVersion?: string;
  chapters: Array<{ assessmentItems: StudentAssessment[] }>;
};

const LIMITS: Record<Level, Record<Language, { question: number; option: number }>> = {
  A2: { en: { question: 18, option: 12 }, ar: { question: 20, option: 14 } },
  B1: { en: { question: 26, option: 18 }, ar: { question: 28, option: 20 } },
  B2: { en: { question: 36, option: 24 }, ar: { question: 38, option: 26 } },
};

const A2_HIGH_REGISTER_EN = [
  /\baccording to\b/i,
  /\bwhich statement best\b/i,
  /\banaly[sz]e\b/i,
  /\bevaluate\b/i,
  /\bjustify\b/i,
  /\binfer(?:ence)?\b/i,
  /\bimplication\b/i,
  /\bperspective\b/i,
  /\bsignificance\b/i,
  /\bsynthesi[sz]e\b/i,
  /\binterpretation\b/i,
];

const words = (value: string) => value.trim().split(/\s+/).filter(Boolean).length;

const validateTextLength = (
  value: string | undefined,
  limit: number,
  path: string,
) => {
  if (!value?.trim()) return;
  const count = words(value);
  if (count > limit) {
    throw new Error(`[Learning Blueprint language] ${path} has ${count} words; maximum for this level is ${limit}. Simplify the student-facing language without lowering the learning target.`);
  }
};

/**
 * Student-facing language guard for Blueprint v2 books.
 *
 * Cognitive demand and language demand are deliberately separated: an A2 item
 * may ask for a simple comparison or cause/result link, but the wording of the
 * question and answer choices must remain short, concrete and CEFR-appropriate.
 * This validator is intentionally conservative; human review remains mandatory.
 */
export const validateBlueprintStudentLanguageLevel = (blueprint: StudentLanguageBlueprint) => {
  if (blueprint.qualityContractVersion !== '2.0') return;
  const limits = LIMITS[blueprint.level];

  for (const chapter of blueprint.chapters) {
    for (const item of chapter.assessmentItems) {
      for (const language of ['en', 'ar'] as const) {
        const exercise = item.exercise[language];
        const path = `${blueprint.id}.${item.id}.${language}`;
        validateTextLength(exercise.question, limits[language].question, `${path}.question`);
        exercise.options?.forEach((option, index) => {
          validateTextLength(option, limits[language].option, `${path}.options[${index}]`);
        });
      }

      if (blueprint.level === 'A2') {
        const question = item.exercise.en.question ?? '';
        const highRegister = A2_HIGH_REGISTER_EN.find(pattern => pattern.test(question));
        if (highRegister) {
          throw new Error(`[Learning Blueprint language] ${blueprint.id}.${item.id}.en.question uses wording that is too academic for A2. Rewrite the question with short, concrete everyday language.`);
        }
      }
    }
  }
};
