import type {
  Level,
  StudentGuideMetadata,
  StudentGuideSection,
  TeacherGuideMetadata,
  TeacherGuideSection,
} from '../../types';
import type { StoryId } from './contracts';

type GuideModule = Record<string, unknown>;

export interface TeacherGuideData {
  content: TeacherGuideSection[];
  metadata?: TeacherGuideMetadata;
}

export interface SelfStudyGuideData {
  content: TeacherGuideSection[];
  metadata?: StudentGuideMetadata;
  sections?: StudentGuideSection[];
  text?: string;
}

export interface BilingualTeacherGuideData {
  en: TeacherGuideData;
  ar: TeacherGuideData;
}

export interface BilingualSelfStudyGuideData {
  en: SelfStudyGuideData;
  ar: SelfStudyGuideData;
}

const teacherGuideModules = import.meta.glob('../../data/*/*/*/teacherGuide.ts');
const selfStudyGuideModules = import.meta.glob('../../data/*/*/*/selfStudyGuide.ts');

const storyFolder: Record<StoryId, string> = {
  adam: 'adam',
  ibrahim: 'abraham',
  musa: 'moses',
  mecca: 'mecca',
  yunusEmre: 'yunusEmre',
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value);

const isChapterGuide = (value: unknown): value is TeacherGuideSection[] =>
  Array.isArray(value)
  && value.length > 0
  && isObject(value[0])
  && typeof value[0].chapter === 'string'
  && Array.isArray(value[0].objectives)
  && typeof value[0].lessonPlan === 'string';

const isStudentSections = (value: unknown): value is StudentGuideSection[] =>
  Array.isArray(value)
  && value.length > 0
  && isObject(value[0])
  && typeof value[0].title === 'string'
  && typeof value[0].text === 'string'
  && Array.isArray(value[0].points)
  && !('chapter' in value[0]);

const isTeacherMetadata = (value: unknown): value is TeacherGuideMetadata =>
  isObject(value)
  && (
    'purpose' in value
    || 'approachDesc' in value
    || 'targetLearners' in value
    || 'assessmentOverview' in value
    || 'readingFramework' in value
    || 'rubricRows' in value
  );

const isStudentMetadata = (value: unknown): value is StudentGuideMetadata =>
  isObject(value)
  && (
    'estimatedStudyTime' in value
    || 'learningGoals' in value
    || 'recommendedUse' in value
    || 'whoIsThisFor' in value
    || 'audience' in value
  );

const modulePath = (
  storyId: StoryId,
  level: Level,
  language: 'en' | 'ar',
  file: 'teacherGuide' | 'selfStudyGuide',
) => `../../data/${storyFolder[storyId]}/${level.toLowerCase()}/${language}/${file}.ts`;

const loadModule = async (
  modules: Record<string, () => Promise<unknown>>,
  path: string,
): Promise<GuideModule> => {
  const loader = modules[path];
  if (!loader) throw new Error(`[Guide Loader] Missing module: ${path}`);
  const loaded = await loader();
  return loaded && typeof loaded === 'object' ? loaded as GuideModule : {};
};

const extractTeacherGuide = (module: GuideModule): TeacherGuideData => {
  const values = Object.values(module);
  return {
    content: values.find(isChapterGuide) ?? [],
    metadata: values.find(isTeacherMetadata),
  };
};

const extractSelfStudyGuide = (module: GuideModule): SelfStudyGuideData => {
  const values = Object.values(module);
  const textCandidates = values.filter((value): value is string => (
    typeof value === 'string' && value.trim().length > 40
  ));

  return {
    content: values.find(isChapterGuide) ?? [],
    metadata: values.find(isStudentMetadata),
    sections: values.find(isStudentSections),
    text: textCandidates.sort((left, right) => right.length - left.length)[0],
  };
};

const teacherCache = new Map<string, Promise<BilingualTeacherGuideData>>();
const selfStudyCache = new Map<string, Promise<BilingualSelfStudyGuideData>>();

export const loadTeacherGuideData = (
  storyId: StoryId,
  level: Level,
): Promise<BilingualTeacherGuideData> => {
  const key = `${storyId}:${level}`;
  const cached = teacherCache.get(key);
  if (cached) return cached;

  const request = Promise.all([
    loadModule(teacherGuideModules, modulePath(storyId, level, 'en', 'teacherGuide')),
    loadModule(teacherGuideModules, modulePath(storyId, level, 'ar', 'teacherGuide')),
  ]).then(([en, ar]) => ({
    en: extractTeacherGuide(en),
    ar: extractTeacherGuide(ar),
  }));

  teacherCache.set(key, request);
  return request;
};

export const loadSelfStudyGuideData = (
  storyId: StoryId,
  level: Level,
): Promise<BilingualSelfStudyGuideData> => {
  const key = `${storyId}:${level}`;
  const cached = selfStudyCache.get(key);
  if (cached) return cached;

  const request = Promise.all([
    loadModule(selfStudyGuideModules, modulePath(storyId, level, 'en', 'selfStudyGuide')),
    loadModule(selfStudyGuideModules, modulePath(storyId, level, 'ar', 'selfStudyGuide')),
  ]).then(([en, ar]) => ({
    en: extractSelfStudyGuide(en),
    ar: extractSelfStudyGuide(ar),
  }));

  selfStudyCache.set(key, request);
  return request;
};
