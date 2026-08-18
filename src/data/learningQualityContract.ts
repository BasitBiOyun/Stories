export type QualityContractVersion = '2.0';
export type QualityLevel = 'A2' | 'B1' | 'B2';
export type AlignmentStrength = 'direct' | 'supporting';

export interface QualityLocalizedText {
  en: string;
  ar: string;
}

export type BlueprintUniversalCompetency =
  | 'comprehend-explicit-information'
  | 'identify-main-idea'
  | 'sequence-events'
  | 'cause-effect-reasoning'
  | 'character-and-motivation'
  | 'compare-and-contrast'
  | 'infer-from-evidence'
  | 'select-and-use-evidence'
  | 'distinguish-evidence-and-interpretation'
  | 'qualify-claims'
  | 'synthesise-information'
  | 'vocabulary-in-context'
  | 'grammar-in-context'
  | 'pronunciation-in-context'
  | 'spoken-communication'
  | 'written-communication'
  | 'mediation-of-meaning'
  | 'reflection-and-self-regulation'
  | 'transfer-and-application';

export type BlueprintTYMMDomain =
  | 'programme-learning-outcome'
  | 'foreign-language-field-skill'
  | 'foreign-language-supporting-skill'
  | 'conceptual-skill'
  | 'cross-curricular-field-skill'
  | 'disposition'
  | 'social-emotional-learning'
  | 'literacy'
  | 'value';

export interface BlueprintTYMMAlignment {
  domain: BlueprintTYMMDomain;
  /** Official TYMM code, e.g. YDAB2, YDDB2 or a programme learning-outcome code. */
  code: string;
  /** Official Turkish label as published by the Ministry. Do not invent or translate this field. */
  officialLabel: string;
  strength: AlignmentStrength;
  /** Why this chapter outcome genuinely activates the referenced TYMM component. */
  rationale: QualityLocalizedText;
  /** Observable learner behaviour that makes the alignment auditable. */
  observableBehaviour: QualityLocalizedText;
  /** Direct official TYMM reference. */
  referenceUrl: string;
}

export type BlueprintCEFRMode = 'reception' | 'production' | 'interaction' | 'mediation';

export interface BlueprintCEFRAlignment {
  level: QualityLevel;
  mode: BlueprintCEFRMode;
  /** CEFR scale/category reference, not a fabricated verbatim descriptor. */
  descriptorReference: string;
  /** Project-specific can-do statement derived for this chapter. */
  learnerCanDo: QualityLocalizedText;
  rationale: QualityLocalizedText;
  /** Direct Council of Europe reference. */
  referenceUrl: string;
}

export interface BlueprintLearningOutcomeV2 {
  id: string;
  objective: QualityLocalizedText;
  successCriteria: QualityLocalizedText[];
  universalCompetencies: BlueprintUniversalCompetency[];
  cefrAlignment: BlueprintCEFRAlignment[];
  tymmAlignment: BlueprintTYMMAlignment[];
}

export interface BlueprintLanguageTargetsV2 {
  reading?: QualityLocalizedText[];
  listeningViewing?: QualityLocalizedText[];
  speaking?: QualityLocalizedText[];
  writing?: QualityLocalizedText[];
  vocabulary?: QualityLocalizedText[];
  grammar?: QualityLocalizedText[];
  pronunciation?: QualityLocalizedText[];
}

export interface BlueprintChapterLearningMap {
  learningOutcomes: BlueprintLearningOutcomeV2[];
  languageTargets: BlueprintLanguageTargetsV2;
  /** Meaningful application beyond recalling the same chapter detail. */
  transferGoal?: QualityLocalizedText;
}

export type BlueprintCognitiveDemandV2 =
  | 'retrieve'
  | 'identify'
  | 'sequence'
  | 'connect'
  | 'explain'
  | 'infer'
  | 'compare'
  | 'analyse'
  | 'evaluate'
  | 'qualify'
  | 'synthesise'
  | 'produce-controlled'
  | 'produce-supported'
  | 'produce-analytical';

export interface BlueprintFeedbackContractV2 {
  /** User-facing feedback after a correct response: confirm + explain. */
  correct: QualityLocalizedText;
  /** User-facing feedback after an incorrect response: diagnose + redirect without simply giving the answer. */
  incorrect: QualityLocalizedText;
  /** Authoring rationale explaining why this feedback repairs the target misconception. */
  rationale: QualityLocalizedText;
}

export interface BlueprintAssessmentQuality {
  cognitiveDemand: BlueprintCognitiveDemandV2;
  assessmentPurpose: QualityLocalizedText;
  successEvidence: QualityLocalizedText;
  misconceptionTargets: QualityLocalizedText[];
  feedback: BlueprintFeedbackContractV2;
}

/**
 * Optional at the TypeScript level so legacy v1 books continue to run.
 * Once a blueprint declares qualityContractVersion: '2.0', the validator makes
 * the relevant fields mandatory and refuses incomplete guide architecture.
 */
export interface BlueprintGuideQualityFields {
  learningOutcomeIds?: string[];
  priorKnowledge?: string[];
  anticipatedMisconceptions?: string[];
  preReading?: string[];
  whileReading?: string[];
  postReading?: string[];
  expectedResponses?: string[];
  formativeAssessment?: string[];
  transferTask?: string;
  reflectionPrompt?: string;
  studySequence?: string[];
  selfCheck?: string[];
  repairStrategy?: string[];
}

type QualityExerciseHost = {
  type: string;
  question?: string;
  options?: string[];
  correctAnswer: unknown;
  feedback: { correct: string; incorrect: string };
  matchingPairs?: { left: string; right: string }[];
  fillBlanksText?: string;
};

type QualityAssessmentHost = {
  id: string;
  learningPointId: string;
  learningOutcomeId?: string;
  quality?: BlueprintAssessmentQuality;
  exercise: { en: QualityExerciseHost; ar: QualityExerciseHost };
};

type QualityEvidenceHost = {
  id: string;
  learningOutcomeId?: string;
};

type QualityGuideHost = BlueprintGuideQualityFields & {
  objectives?: string[];
};

type QualityChapterHost = {
  chapterId: number;
  learningMap?: BlueprintChapterLearningMap;
  evidencePoints: QualityEvidenceHost[];
  assessmentItems: QualityAssessmentHost[];
  teacherGuide: { en: QualityGuideHost; ar: QualityGuideHost };
  selfStudyGuide: { en: QualityGuideHost; ar: QualityGuideHost };
};

export interface QualityBlueprintHost {
  id: string;
  level: QualityLevel;
  qualityContractVersion?: QualityContractVersion;
  chapters: QualityChapterHost[];
}

const normalize = (value: string) => value
  .trim()
  .toLocaleLowerCase()
  .normalize('NFKC')
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '')
  .replace(/[^\p{L}\p{N}\s]/gu, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const requireText = (value: string | undefined, path: string) => {
  if (!value?.trim()) throw new Error(`[Learning Blueprint v2] Missing text: ${path}.`);
};

const requireLocalized = (value: QualityLocalizedText | undefined, path: string) => {
  if (!value) throw new Error(`[Learning Blueprint v2] Missing localized content: ${path}.`);
  requireText(value.en, `${path}.en`);
  requireText(value.ar, `${path}.ar`);
};

const requireLocalizedList = (values: QualityLocalizedText[] | undefined, path: string, minimum = 1) => {
  if (!values || values.length < minimum) {
    throw new Error(`[Learning Blueprint v2] ${path} requires at least ${minimum} item(s).`);
  }
  values.forEach((value, index) => requireLocalized(value, `${path}[${index}]`));
};

const requireStringList = (values: string[] | undefined, path: string, minimum = 1) => {
  if (!values || values.length < minimum) {
    throw new Error(`[Learning Blueprint v2] ${path} requires at least ${minimum} item(s).`);
  }
  values.forEach((value, index) => requireText(value, `${path}[${index}]`));
};

const assertUnique = (values: string[], path: string) => {
  const normalized = values.map(normalize);
  if (new Set(normalized).size !== normalized.length) {
    throw new Error(`[Learning Blueprint v2] Duplicate content is not allowed in ${path}.`);
  }
};

const validateOfficialReference = (url: string, authority: 'tymm' | 'cefr', path: string) => {
  requireText(url, path);
  const valid = authority === 'tymm'
    ? /^https:\/\/tymm\.meb\.gov\.tr(?:\/|$)/i.test(url)
    : /^https:\/\/(?:www\.|rm\.)?coe\.int(?:\/|$)/i.test(url);
  if (!valid) {
    throw new Error(`[Learning Blueprint v2] ${path} must point to an official ${authority === 'tymm' ? 'TYMM/MEB' : 'Council of Europe CEFR'} source.`);
  }
};

const validateExerciseIntegrity = (item: QualityAssessmentHost, language: 'en' | 'ar') => {
  const exercise = item.exercise[language];
  const path = `${item.id}.${language}`;

  if (exercise.type === 'multiple-choice') {
    if (!exercise.options || exercise.options.length < 3) {
      throw new Error(`[Learning Blueprint v2] ${path} multiple-choice requires at least three options.`);
    }
    exercise.options.forEach((option, index) => requireText(option, `${path}.options[${index}]`));
    assertUnique(exercise.options, `${path}.options`);
    if (!Number.isInteger(exercise.correctAnswer) || Number(exercise.correctAnswer) < 0 || Number(exercise.correctAnswer) >= exercise.options.length) {
      throw new Error(`[Learning Blueprint v2] ${path} has an invalid multiple-choice correctAnswer index.`);
    }
  }

  if (exercise.type === 'matching') {
    if (!exercise.matchingPairs || exercise.matchingPairs.length < 2) {
      throw new Error(`[Learning Blueprint v2] ${path} matching requires at least two pairs.`);
    }
    exercise.matchingPairs.forEach((pair, index) => {
      requireText(pair.left, `${path}.matchingPairs[${index}].left`);
      requireText(pair.right, `${path}.matchingPairs[${index}].right`);
    });
    assertUnique(exercise.matchingPairs.map(pair => pair.left), `${path}.matchingPairs.left`);
    assertUnique(exercise.matchingPairs.map(pair => pair.right), `${path}.matchingPairs.right`);
  }

  if (exercise.type === 'fill-blanks' && !exercise.fillBlanksText?.includes('[blank]')) {
    throw new Error(`[Learning Blueprint v2] ${path} fill-blanks must contain [blank].`);
  }
};

const validateGuideOutcomeCoverage = (guide: QualityGuideHost, outcomeIds: string[], path: string) => {
  requireStringList(guide.learningOutcomeIds, `${path}.learningOutcomeIds`);
  const linked = new Set(guide.learningOutcomeIds);
  const missing = outcomeIds.filter(id => !linked.has(id));
  if (missing.length) {
    throw new Error(`[Learning Blueprint v2] ${path} does not cover learning outcome(s): ${missing.join(', ')}.`);
  }
};

const validateTeacherGuide = (guide: QualityGuideHost, outcomeIds: string[], path: string) => {
  validateGuideOutcomeCoverage(guide, outcomeIds, path);
  requireStringList(guide.objectives, `${path}.objectives`);
  requireStringList(guide.priorKnowledge, `${path}.priorKnowledge`);
  requireStringList(guide.anticipatedMisconceptions, `${path}.anticipatedMisconceptions`);
  requireStringList(guide.preReading, `${path}.preReading`);
  requireStringList(guide.whileReading, `${path}.whileReading`);
  requireStringList(guide.postReading, `${path}.postReading`);
  requireStringList(guide.expectedResponses, `${path}.expectedResponses`);
  requireStringList(guide.formativeAssessment, `${path}.formativeAssessment`);
  requireText(guide.transferTask, `${path}.transferTask`);
  requireText(guide.reflectionPrompt, `${path}.reflectionPrompt`);
};

const validateSelfStudyGuide = (guide: QualityGuideHost, outcomeIds: string[], path: string) => {
  validateGuideOutcomeCoverage(guide, outcomeIds, path);
  requireStringList(guide.objectives, `${path}.objectives`);
  requireStringList(guide.studySequence, `${path}.studySequence`, 6);
  requireStringList(guide.selfCheck, `${path}.selfCheck`, 2);
  requireStringList(guide.repairStrategy, `${path}.repairStrategy`);
  requireText(guide.transferTask, `${path}.transferTask`);
  requireText(guide.reflectionPrompt, `${path}.reflectionPrompt`);
};

const validateLearningMap = (blueprint: QualityBlueprintHost, chapter: QualityChapterHost) => {
  const path = `${blueprint.id}.chapter-${chapter.chapterId}`;
  const map = chapter.learningMap;
  if (!map) throw new Error(`[Learning Blueprint v2] Missing learningMap: ${path}.`);
  if (!map.learningOutcomes.length) throw new Error(`[Learning Blueprint v2] ${path} requires at least one learning outcome.`);

  const outcomeIds = map.learningOutcomes.map(outcome => outcome.id);
  assertUnique(outcomeIds, `${path}.learningOutcomes.id`);

  for (const outcome of map.learningOutcomes) {
    const outcomePath = `${path}.learningOutcomes.${outcome.id}`;
    requireText(outcome.id, `${outcomePath}.id`);
    requireLocalized(outcome.objective, `${outcomePath}.objective`);
    requireLocalizedList(outcome.successCriteria, `${outcomePath}.successCriteria`);
    if (!outcome.universalCompetencies.length) {
      throw new Error(`[Learning Blueprint v2] ${outcomePath} requires at least one universal competency.`);
    }
    assertUnique(outcome.universalCompetencies, `${outcomePath}.universalCompetencies`);

    if (!outcome.cefrAlignment.length) {
      throw new Error(`[Learning Blueprint v2] ${outcomePath} requires CEFR alignment.`);
    }
    for (const [index, alignment] of outcome.cefrAlignment.entries()) {
      const alignmentPath = `${outcomePath}.cefrAlignment[${index}]`;
      if (alignment.level !== blueprint.level) {
        throw new Error(`[Learning Blueprint v2] ${alignmentPath}.level must match book level ${blueprint.level}.`);
      }
      requireText(alignment.descriptorReference, `${alignmentPath}.descriptorReference`);
      requireLocalized(alignment.learnerCanDo, `${alignmentPath}.learnerCanDo`);
      requireLocalized(alignment.rationale, `${alignmentPath}.rationale`);
      validateOfficialReference(alignment.referenceUrl, 'cefr', `${alignmentPath}.referenceUrl`);
    }

    if (!outcome.tymmAlignment.length) {
      throw new Error(`[Learning Blueprint v2] ${outcomePath} requires TYMM alignment.`);
    }
    if (!outcome.tymmAlignment.some(alignment => alignment.strength === 'direct')) {
      throw new Error(`[Learning Blueprint v2] ${outcomePath} requires at least one direct TYMM alignment.`);
    }
    for (const [index, alignment] of outcome.tymmAlignment.entries()) {
      const alignmentPath = `${outcomePath}.tymmAlignment[${index}]`;
      requireText(alignment.code, `${alignmentPath}.code`);
      requireText(alignment.officialLabel, `${alignmentPath}.officialLabel`);
      requireLocalized(alignment.rationale, `${alignmentPath}.rationale`);
      requireLocalized(alignment.observableBehaviour, `${alignmentPath}.observableBehaviour`);
      validateOfficialReference(alignment.referenceUrl, 'tymm', `${alignmentPath}.referenceUrl`);
    }
  }

  const targetGroups = Object.entries(map.languageTargets).filter(([, values]) => values?.length);
  if (!targetGroups.length) {
    throw new Error(`[Learning Blueprint v2] ${path}.languageTargets requires at least one explicit language target.`);
  }
  for (const [group, values] of targetGroups) {
    requireLocalizedList(values, `${path}.languageTargets.${group}`);
  }
  if (map.transferGoal) requireLocalized(map.transferGoal, `${path}.transferGoal`);

  const evidenceById = new Map(chapter.evidencePoints.map(point => [point.id, point]));
  for (const point of chapter.evidencePoints) {
    if (!point.learningOutcomeId || !outcomeIds.includes(point.learningOutcomeId)) {
      throw new Error(`[Learning Blueprint v2] ${path}.evidencePoints.${point.id} must link to a valid learningOutcomeId.`);
    }
  }

  for (const outcomeId of outcomeIds) {
    if (!chapter.evidencePoints.some(point => point.learningOutcomeId === outcomeId)) {
      throw new Error(`[Learning Blueprint v2] ${path} learning outcome ${outcomeId} has no chapter evidence.`);
    }
  }

  for (const item of chapter.assessmentItems) {
    const itemPath = `${path}.assessmentItems.${item.id}`;
    const point = evidenceById.get(item.learningPointId);
    if (!point) throw new Error(`[Learning Blueprint v2] ${itemPath} references unknown learning point ${item.learningPointId}.`);
    if (!item.learningOutcomeId || !outcomeIds.includes(item.learningOutcomeId)) {
      throw new Error(`[Learning Blueprint v2] ${itemPath} must link to a valid learningOutcomeId.`);
    }
    if (point.learningOutcomeId !== item.learningOutcomeId) {
      throw new Error(`[Learning Blueprint v2] ${itemPath} learning outcome must match its evidence point.`);
    }
    if (!item.quality) throw new Error(`[Learning Blueprint v2] Missing assessment quality metadata: ${itemPath}.`);

    requireLocalized(item.quality.assessmentPurpose, `${itemPath}.quality.assessmentPurpose`);
    requireLocalized(item.quality.successEvidence, `${itemPath}.quality.successEvidence`);
    requireLocalizedList(item.quality.misconceptionTargets, `${itemPath}.quality.misconceptionTargets`);
    requireLocalized(item.quality.feedback.correct, `${itemPath}.quality.feedback.correct`);
    requireLocalized(item.quality.feedback.incorrect, `${itemPath}.quality.feedback.incorrect`);
    requireLocalized(item.quality.feedback.rationale, `${itemPath}.quality.feedback.rationale`);

    if (item.exercise.en.type !== item.exercise.ar.type) {
      throw new Error(`[Learning Blueprint v2] ${itemPath} EN/AR exercise types must match.`);
    }
    validateExerciseIntegrity(item, 'en');
    validateExerciseIntegrity(item, 'ar');

    for (const language of ['en', 'ar'] as const) {
      if (item.exercise[language].feedback.correct.trim() !== item.quality.feedback.correct[language].trim()) {
        throw new Error(`[Learning Blueprint v2] ${itemPath}.${language} correct feedback must come from the authored feedback contract.`);
      }
      if (item.exercise[language].feedback.incorrect.trim() !== item.quality.feedback.incorrect[language].trim()) {
        throw new Error(`[Learning Blueprint v2] ${itemPath}.${language} incorrect feedback must come from the authored feedback contract.`);
      }
    }
  }

  for (const outcomeId of outcomeIds) {
    if (!chapter.assessmentItems.some(item => item.learningOutcomeId === outcomeId)) {
      throw new Error(`[Learning Blueprint v2] ${path} learning outcome ${outcomeId} is not assessed.`);
    }
  }

  validateTeacherGuide(chapter.teacherGuide.en, outcomeIds, `${path}.teacherGuide.en`);
  validateTeacherGuide(chapter.teacherGuide.ar, outcomeIds, `${path}.teacherGuide.ar`);
  validateSelfStudyGuide(chapter.selfStudyGuide.en, outcomeIds, `${path}.selfStudyGuide.en`);
  validateSelfStudyGuide(chapter.selfStudyGuide.ar, outcomeIds, `${path}.selfStudyGuide.ar`);
};

/**
 * Strict Ministry/Gold quality gate. Legacy blueprints are deliberately ignored
 * until they opt in with qualityContractVersion: '2.0'. Once opted in, missing
 * alignment, assessment rationale, diagnostic feedback or guide architecture is fatal.
 * Semantic truth of a TYMM/CEFR mapping still requires human pedagogical review.
 */
export const validateBlueprintV2QualityContract = (blueprint: QualityBlueprintHost) => {
  if (blueprint.qualityContractVersion !== '2.0') return;
  if (!blueprint.chapters.length) throw new Error(`[Learning Blueprint v2] ${blueprint.id} has no chapters.`);
  blueprint.chapters.forEach(chapter => validateLearningMap(blueprint, chapter));
};
