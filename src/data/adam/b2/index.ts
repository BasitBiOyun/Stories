import type { BookData, Exercise, PageData } from '../../../types';
import { adamB2Pages } from './en/pages';
import { adamB2PagesAr } from './ar/pages';
import {
  adamB2QuickChallenges,
  adamB2KnowledgeCheckExercises,
  adamB2VocabularyChallengePairs,
  adamB2FinalReviewExercises,
  adamB2FinalChallengeExercises,
} from './en/exercises';
import {
  adamB2QuickChallengesAr,
  adamB2KnowledgeCheckExercisesAr,
  adamB2VocabularyChallengePairsAr,
  adamB2FinalReviewExercisesAr,
  adamB2FinalChallengeExercisesAr,
} from './ar/exercises';
import { adamB2LanguageFocusExercises } from './en/languageFocus';
import { adamB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { adamB2TeacherGuide, adamB2TeacherGuideMetadata } from './en/teacherGuide';
import { adamB2SelfStudyGuide, adamB2StudentGuideMetadata } from './en/selfStudyGuide';
import { adamB2TeacherGuideAr, adamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB2SelfStudyGuideAr, adamB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 17 }, (_, index) => index + 1));

const decodedLower = (value = '') => {
  try {
    return decodeURIComponent(value).toLowerCase();
  } catch {
    return value.toLowerCase();
  }
};

const hasWrongFallbackImage = (value = '') => {
  const lower = decodedLower(value);
  return lower.includes('/adam_b1/images/') || lower.includes('picsum.photos/seed/review-b1');
};

const sanitizePageImage = (page: PageData): PageData =>
  hasWrongFallbackImage(page.image) ? { ...page, image: '' } : page;

/**
 * Final page-shell QA only. Canonical story `content` is never changed.
 * Storage remains the preferred media source; known wrong-level/demo fallbacks are
 * blanked so failed Storage lookup cannot silently show unrelated assets.
 */
const reviewStoryPageShell = (page: PageData): PageData => {
  if (page.type !== 'story') return sanitizePageImage(page);

  let reviewed: PageData = sanitizePageImage(page);
  const isArabic = /[\u0600-\u06ff]/.test(page.title);

  if (!isArabic && page.id === 1) {
    reviewed = {
      ...reviewed,
      vocabulary: reviewed.vocabulary?.map(note =>
        note.word.toLowerCase() === 'fabulous'
          ? { ...note, definition: 'Extraordinary or remarkable; here describing the story’s striking character.' }
          : note,
      ),
    };
  }

  if (isArabic && page.id === 1) {
    reviewed = {
      ...reviewed,
      vocabulary: reviewed.vocabulary?.map(note =>
        note.word === 'عجيب'
          ? { ...note, definition: 'غير مألوف ولافت في وصف القصة.' }
          : note,
      ),
    };
  }

  if (!isArabic && page.id === 2) {
    reviewed = {
      ...reviewed,
      vocabulary: reviewed.vocabulary?.map(note =>
        note.word.toLowerCase() === 'species'
          ? { ...note, definition: 'A group of living beings that share important biological characteristics.' }
          : note,
      ),
    };
  }

  if (isArabic && page.id === 2) {
    reviewed = {
      ...reviewed,
      vocabulary: [
        { word: 'خليط', definition: 'مزيج يتكوّن من أكثر من مادة، مثل الماء والتراب.' },
        { word: 'أول أب', definition: 'أول أصل بشري تنحدر منه الأجيال اللاحقة.' },
        { word: 'نوع بشري مستقل', definition: 'نوع بشري يقدمه الفصل بوصفه متميزا في أصل خلقه.' },
      ],
    };
  }

  if (!isArabic && page.id === 3) {
    reviewed = {
      ...reviewed,
      vocabulary: reviewed.vocabulary?.filter(note => note.word.toLowerCase() !== 'astonishment'),
    };
  }

  if (isArabic && page.id === 3) {
    reviewed = {
      ...reviewed,
      vocabulary: reviewed.vocabulary?.map(note => {
        if (note.word === 'الخليفة') {
          return { ...note, definition: 'من توكل إليه مسؤولية عمارة الأرض ورعايتها في سياق الفصل.' };
        }
        if (note.word === 'الأسماء') {
          return { ...note, definition: 'الأسماء التي علّمها الله لآدم، ويربطها الفصل بقدرات التعلم واللغة والمعرفة.' };
        }
        return note;
      }),
    };
  }

  if (!isArabic && page.id === 4) {
    reviewed = {
      ...reviewed,
      hotspots: reviewed.hotspots?.filter(hotspot => hotspot.id !== 'h5b'),
    };
  }

  if (isArabic && page.id === 7) {
    reviewed = {
      ...reviewed,
      hotspots: reviewed.hotspots?.map(hotspot =>
        hotspot.id === 'h7a'
          ? {
              ...hotspot,
              title: 'الوسوسة واستغلال الضعف',
              description: 'يستغل إبليس النسيان وضعف العزم والرغبة في الخلود ليقنع آدم وحواء.',
            }
          : hotspot,
      ),
    };
  }

  if (isArabic && page.id === 10) {
    reviewed = { ...reviewed, vocabulary: reviewed.vocabulary?.filter(note => note.word !== 'المشاق') };
  }
  if (isArabic && page.id === 11) {
    reviewed = { ...reviewed, vocabulary: reviewed.vocabulary?.filter(note => note.word !== 'التبلد الكوني') };
  }

  if (page.id === 13) {
    reviewed = {
      ...reviewed,
      title: isArabic ? 'رد هابيل والقدرة الأخلاقية' : 'Habil’s Response & Human Moral Capacity',
      ...(isArabic
        ? {
            vocabulary: [
              { word: 'موقف عدواني', definition: 'سلوك يتضمن التهديد أو استخدام القوة ضد الآخرين.' },
              { word: 'طبيعة', definition: 'الصفات والميول التي تكون جزءا من الإنسان.' },
              { word: 'السيطرة', definition: 'القدرة على ضبط الأفكار والمشاعر والتصرفات.' },
            ],
            hotspots: [
              { id: 'h13a', x: 47, y: 50, title: 'اختيار هابيل السلمي', description: 'يرفض هابيل أن يرد على تهديد أخيه بالعنف ويترك الأمر لله.' },
              { id: 'h13b', x: 78, y: 40, title: 'القدرة على الخير والشر', description: 'يذكر الفصل أن الإنسان قادر على الخير والشر وأن ضبط الرغبات مهم.' },
            ],
          }
        : {
            hotspots: reviewed.hotspots?.filter(hotspot => hotspot.id !== 'h13b'),
            vocabulary: reviewed.vocabulary?.filter(note => ['rebellious', 'compassion'].includes(note.word.toLowerCase())),
          }),
    };
  }

  if (page.id === 14) {
    reviewed = isArabic
      ? {
          ...reviewed,
          vocabulary: [
            { word: 'طوعت', definition: 'دفعت أو زيّنت له نفسه فعل الشيء.' },
            { word: 'الخاسرين', definition: 'الذين خسروا بسبب أفعالهم ونتائجها.' },
            { word: 'الذنب', definition: 'الشعور بأن الإنسان ارتكب فعلا خاطئا.' },
          ],
          hotspots: [
            { id: 'h13a', x: 30, y: 50, title: 'الجريمة وعاقبتها', description: 'يقتل قابيل أخاه ثم يواجه الحزن والذنب وثقل ما فعل.' },
            { id: 'h13b', x: 70, y: 40, title: 'درس الغرابين', description: 'يرى قابيل غرابين، فيدفن أحدهما الآخر، فيتعلم كيف يواري جثة أخيه.' },
          ],
        }
      : {
          ...reviewed,
          hotspots: reviewed.hotspots?.map(hotspot =>
            hotspot.id === 'h13b'
              ? { ...hotspot, title: 'The Two Ravens', description: 'Qabil learns how burial works by observing two ravens.' }
              : hotspot,
          ),
        };
  }

  if (page.id === 15) {
    reviewed = isArabic
      ? {
          ...reviewed,
          vocabulary: [
            { word: 'الأسى', definition: 'حزن شديد وألم نفسي.' },
            { word: 'يواري', definition: 'يستر أو يخفي؛ وهنا يقصد دفن الجسد في الأرض.' },
            { word: 'نوازع', definition: 'دوافع أو ميول داخلية تؤثر في السلوك.' },
          ],
          hotspots: [
            { id: 'h14a', x: 30, y: 50, title: 'ندم قابيل', description: 'يشعر قابيل بالخجل والذنب بعد أن يتعلم كيف يدفن أخاه.' },
            { id: 'h14b', x: 70, y: 40, title: 'استمرار مسؤولية آدم', description: 'رغم حزنه، يدعو آدم لابنه ويواصل مسؤوليات الحياة والعمل.' },
          ],
        }
      : {
          ...reviewed,
          vocabulary: reviewed.vocabulary?.filter(note => note.word.toLowerCase() !== 'prophet'),
          hotspots: reviewed.hotspots?.map(hotspot =>
            hotspot.id === 'h14b'
              ? { ...hotspot, title: 'Adam’s Continued Responsibility', description: 'Despite grief, Adam prays for his son and continues the responsibilities of daily life.' }
              : hotspot,
          ),
        };
  }

  if (page.id === 16) {
    reviewed = isArabic
      ? {
          ...reviewed,
          vocabulary: [
            { word: 'خليفة', definition: 'من يتولى مسؤولية أو دورا بعد شخص آخر.' },
            { word: 'الإرث', definition: 'ما يتركه الإنسان من هداية أو أثر لمن بعده.' },
            { word: 'العبادات', definition: 'الأعمال التي يتقرب بها الإنسان إلى الله.' },
          ],
          hotspots: [
            { id: 'h15a', x: 30, y: 50, title: 'شيث خليفة لآدم', description: 'يعيّن آدم ابنه شيث خليفة له ويعلّمه ما يرتبط بالعبادة.' },
            { id: 'h15b', x: 70, y: 40, title: 'استمرار الهداية', description: 'يخبر آدم أبناءه أن الأنبياء سيواصلون دعوة الناس إلى صراط الله المستقيم.' },
          ],
        }
      : {
          ...reviewed,
          vocabulary: reviewed.vocabulary?.map(note => {
            if (note.word.toLowerCase() === 'legacy') {
              return { ...note, definition: 'Guidance, influence, or responsibility passed to later generations.' };
            }
            if (note.word.toLowerCase() === 'miracles') {
              return { ...note, definition: 'Extraordinary signs associated with prophets in the story’s account.' };
            }
            return note;
          }),
        };
  }

  if (isArabic && page.id === 17) {
    reviewed = {
      ...reviewed,
      vocabulary: [
        { word: 'سلطان', definition: 'قدرة أو سلطة على التأثير والسيطرة.' },
        { word: 'المخلصين', definition: 'الذين يخلصون نيتهم لله ويتبعون هداه.' },
        { word: 'الجوهر الحقيقي', definition: 'المعنى الأساسي والعميق لقيمة الإنسان.' },
      ],
      hotspots: [
        { id: 'h18a', x: 30, y: 50, title: 'حدود سلطان الشيطان', description: 'يذكر الفصل أن الشيطان لا سلطان له على عباد الله المخلصين.' },
        { id: 'h18b', x: 70, y: 40, title: 'سؤال قيمة الإنسان', description: 'تنتهي القصة بسؤال عن المصدر الحقيقي لقيمة الإنسان.' },
      ],
    };
  }

  return reviewed;
};

const buildPages = (
  pages: PageData[],
  quickChallenges: Record<number, Exercise>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => {
  const isArabicBook = /[\u0600-\u06ff]/.test(pages.find(page => page.type === 'story')?.title ?? '');
  const fullGlossary = pages
    .filter(page => page.id === 20 || page.id === 21)
    .flatMap(page => page.vocabulary ?? []);

  return pages.map((rawPage): PageData => {
    const page = reviewStoryPageShell(rawPage);

    if (STORY_IDS.has(page.id)) {
      const languageFocusExercises = isArabicBook
        ? adamB2LanguageFocusExercisesAr[page.id]
        : adamB2LanguageFocusExercises[page.id];
      return {
        ...page,
        exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [],
        ...(languageFocusExercises ? { languageFocusExercises } : {}),
      };
    }
    if (page.id === 18) {
      return { ...page, exercises: knowledgeCheck };
    }
    if (page.id === 19) {
      return { ...page, exercises: review };
    }
    if (page.id === 20) {
      return {
        ...page,
        type: 'vocabulary-match',
        title: isArabicBook ? 'تحدي المفردات' : 'Vocabulary Challenge',
        content: isArabicBook
          ? 'صل الكلمات الأساسية من القصة بمعانيها الدقيقة.'
          : 'Match key B2 words from the story with their meanings.',
        vocabulary: undefined,
        vocabularyPairs,
      };
    }
    if (page.id === 21) {
      return {
        ...page,
        title: isArabicBook ? 'القاموس الرئيسي' : 'Master Glossary',
        content: isArabicBook
          ? 'راجع المفردات الأساسية الواردة في القصة.'
          : 'Review the key vocabulary used across the story.',
        vocabulary: fullGlossary,
      };
    }
    if (page.id === 22) {
      return { ...page, exercises: finalChallenge };
    }
    return page;
  });
};

const englishPages = buildPages(
  adamB2Pages,
  adamB2QuickChallenges,
  adamB2KnowledgeCheckExercises,
  adamB2VocabularyChallengePairs,
  adamB2FinalReviewExercises,
  adamB2FinalChallengeExercises,
);

const arabicPages = buildPages(
  adamB2PagesAr,
  adamB2QuickChallengesAr,
  adamB2KnowledgeCheckExercisesAr,
  adamB2VocabularyChallengePairsAr,
  adamB2FinalReviewExercisesAr,
  adamB2FinalChallengeExercisesAr,
);

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: englishPages,
  teacherGuide: adamB2TeacherGuide,
  teacherGuideMetadata: adamB2TeacherGuideMetadata,
  selfStudyGuide: adamB2SelfStudyGuide,
  studentGuideMetadata: adamB2StudentGuideMetadata,
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: arabicPages,
  teacherGuide: adamB2TeacherGuideAr,
  teacherGuideMetadata: adamB2TeacherGuideMetadataAr,
  selfStudyGuide: adamB2SelfStudyGuideAr,
  studentGuideMetadata: adamB2StudentGuideMetadataAr,
};

export const adamB2BookData = adamB2BookDataEn;
