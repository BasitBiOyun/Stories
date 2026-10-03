import {
  Eye,
  Headphones,
  BookOpen,
  Rocket,
  Search,
  ListChecks,
  BrainCircuit,
  Library,
  Compass,
  Target,
  MapPin,
  Languages,
  PencilSimple,
  Trophy,
  ClipboardList,
  GraduationCap,
  BookMarked,
  Layers,
  User,
  Users,
  UsersThree,
  ChatCircleDots,
  type AppIconProps,
} from '../components/ui/icons';

type IconComponent = React.ComponentType<AppIconProps>;

export interface SectionIconEntry {
  icon: IconComponent;
  en: string;
  ar: string;
  /** One short line for the "How to use this book" page. */
  hint: { en: string; ar: string };
}

/**
 * The fixed icon system: one icon means one thing everywhere in the app and in the printed books.
 * The same table is shown to learners on the "How to use this book" page.
 */
export const SECTION_ICONS = {
  beforeYouRead: {
    icon: Eye,
    en: 'Before you read',
    ar: 'قَبْلَ القِرَاءَةِ',
    hint: { en: 'Look at the picture and guess.', ar: 'اُنْظُرْ إِلَى الصُّورَةِ وَخَمِّنْ.' },
  },
  listen: {
    icon: Headphones,
    en: 'Listen',
    ar: 'اسْتَمِعْ',
    hint: { en: 'Listen to the chapter.', ar: 'اسْتَمِعْ إِلَى الفَصْلِ.' },
  },
  read: {
    icon: BookOpen,
    en: 'Read',
    ar: 'اقْرَأْ',
    hint: { en: 'Read the story. Tap a coloured word to see its meaning.', ar: 'اقْرَأِ القِصَّةَ. اضْغَطْ عَلَى كَلِمَةٍ مُلَوَّنَةٍ لِتَرَى مَعْنَاهَا.' },
  },
  quickChallenge: {
    icon: Rocket,
    en: 'Quick Challenge',
    ar: 'تَحَدٍّ سَرِيعٌ',
    hint: { en: 'Answer short questions about the chapter.', ar: 'أَجِبْ عَنْ أَسْئِلَةٍ قَصِيرَةٍ عَنِ الفَصْلِ.' },
  },
  languageFocus: {
    icon: Search,
    en: 'Language Focus',
    ar: 'التَّرْكِيزُ اللُّغَوِيُّ',
    hint: { en: 'Look closely at words and sentences from the story.', ar: 'تَأَمَّلْ كَلِمَاتٍ وَجُمَلًا مِنَ القِصَّةِ.' },
  },
  iCan: {
    icon: ListChecks,
    en: 'I can',
    ar: 'أَسْتَطِيعُ',
    hint: { en: 'Check what you can do now.', ar: 'تَحَقَّقْ مِمَّا تَسْتَطِيعُ فِعْلَهُ الآنَ.' },
  },
  knowledgeCheck: {
    icon: BrainCircuit,
    en: 'Knowledge Check',
    ar: 'اخْتِبَارُ المَعْرِفَةِ',
    hint: { en: 'Remember the whole story.', ar: 'تَذَكَّرِ القِصَّةَ كُلَّهَا.' },
  },
  glossary: {
    icon: Library,
    en: 'Master Glossary',
    ar: 'المُعْجَمُ',
    hint: { en: 'All the words of the book in one list.', ar: 'كُلُّ كَلِمَاتِ الكِتَابِ فِي قَائِمَةٍ وَاحِدَةٍ.' },
  },
  places: {
    icon: Compass,
    en: 'Places & People',
    ar: 'الأَمَاكِنُ وَالأَشْخَاصُ',
    hint: { en: 'Meet the places and people of the story.', ar: 'تَعَرَّفْ عَلَى أَمَاكِنِ القِصَّةِ وَأَشْخَاصِهَا.' },
  },
  journeyMap: {
    icon: MapPin,
    en: 'Journey map',
    ar: 'خَرِيطَةُ الرِّحْلَةِ',
    hint: { en: 'Follow the journey on the map.', ar: 'تَتَبَّعِ الرِّحْلَةَ عَلَى الخَرِيطَةِ.' },
  },
  mapGame: {
    icon: Target,
    en: 'Find it on the map',
    ar: 'اِبْحَثْ عَنْهُ عَلَى الخَرِيطَةِ',
    hint: { en: 'Find places on the map.', ar: 'جِدِ الأَمَاكِنَ عَلَى الخَرِيطَةِ.' },
  },
  vocabularyChallenge: {
    icon: Languages,
    en: 'Vocabulary Challenge',
    ar: 'تَحَدِّي المُفْرَدَاتِ',
    hint: { en: 'Match and use the new words.', ar: 'صِلْ بَيْنَ الكَلِمَاتِ الجَدِيدَةِ وَاسْتَخْدِمْهَا.' },
  },
  languageReview: {
    icon: PencilSimple,
    en: 'Language Review',
    ar: 'مُرَاجَعَةُ اللُّغَةِ',
    hint: { en: 'Practise the language of the whole book.', ar: 'تَدَرَّبْ عَلَى لُغَةِ الكِتَابِ كُلِّهِ.' },
  },
  finalChallenge: {
    icon: Trophy,
    en: 'Final Challenge',
    ar: 'التَّحَدِّي النِّهَائِيُّ',
    hint: { en: 'Show what you learned.', ar: 'أَظْهِرْ مَا تَعَلَّمْتَهُ.' },
  },
  selfStudy: {
    icon: ClipboardList,
    en: 'Self-Study Guide',
    ar: 'دَلِيلُ التَّعَلُّمِ الذَّاتِيِّ',
    hint: { en: 'A plan for learning on your own.', ar: 'خُطَّةٌ لِلتَّعَلُّمِ وَحْدَكَ.' },
  },
  myWords: {
    icon: BookMarked,
    en: 'My words',
    ar: 'كَلِمَاتِي',
    hint: { en: 'Save words and review them later.', ar: 'احْفَظِ الكَلِمَاتِ وَرَاجِعْهَا لَاحِقًا.' },
  },
  levelTest: {
    icon: Layers,
    en: 'Level test',
    ar: 'اخْتِبَارُ المُسْتَوَى',
    hint: { en: 'Ten short questions suggest a level for you.', ar: 'عَشَرَةُ أَسْئِلَةٍ قَصِيرَةٍ تَقْتَرِحُ لَكَ مُسْتَوًى.' },
  },
  teacherGuide: {
    icon: GraduationCap,
    en: 'Teacher Guide',
    ar: 'دَلِيلُ المُعَلِّمِ',
    hint: { en: 'Lesson plans and answers for the teacher.', ar: 'خُطَطُ الدُّرُوسِ وَالإِجَابَاتُ لِلْمُعَلِّمِ.' },
  },
} satisfies Record<string, SectionIconEntry>;

/** How a task is done: alone, with a partner, in a group, or by speaking or writing. */
export const MODE_ICONS = {
  individual: {
    icon: User,
    en: 'On your own',
    ar: 'فَرْدِيٌّ',
    hint: { en: 'Do it alone.', ar: 'اِعْمَلْ وَحْدَكَ.' },
  },
  pair: {
    icon: Users,
    en: 'Pair',
    ar: 'ثُنَائِيٌّ',
    hint: { en: 'Work with a partner.', ar: 'اِعْمَلْ مَعَ زَمِيلٍ.' },
  },
  group: {
    icon: UsersThree,
    en: 'Group',
    ar: 'جَمَاعِيٌّ',
    hint: { en: 'Work in a small group.', ar: 'اِعْمَلْ فِي مَجْمُوعَةٍ صَغِيرَةٍ.' },
  },
  sayOrWrite: {
    icon: ChatCircleDots,
    en: 'Say it or write it',
    ar: 'قُلْهَا أَوِ اكْتُبْهَا',
    hint: { en: 'Answer in your own words. Then look at the example answer.', ar: 'أَجِبْ بِكَلِمَاتِكَ. ثُمَّ انْظُرْ إِلَى مِثَالِ الإِجَابَةِ.' },
  },
} satisfies Record<string, SectionIconEntry>;

export type SectionKey = keyof typeof SECTION_ICONS;
export type ModeKey = keyof typeof MODE_ICONS;

/** Maps the reflection prompt mode stored in the data ("Individual", "Pair", anything else = group). */
export const modeKeyFor = (mode: string): ModeKey =>
  mode === 'Individual' ? 'individual' : mode === 'Pair' ? 'pair' : 'group';
