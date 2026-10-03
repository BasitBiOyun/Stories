import React from 'react';
import { cn } from '../../lib/utils';
import { MODE_ICONS, SECTION_ICONS } from '../../lib/sectionIcons';
import type { PageData, TeacherGuideSection } from '../../types';

/** The story page a guide chapter belongs to: by the chapter number in its title, else by position. */
export const storyPageForSection = (pages: PageData[], section: TeacherGuideSection, index: number): PageData | undefined => {
  const storyPages = pages.filter(page => page.type === 'story');
  const number = Number(section.chapter?.match(/\d+/)?.[0]);
  return (Number.isFinite(number) && number > 0 ? storyPages[number - 1] : undefined) ?? storyPages[index];
};

const countExamples = (page: PageData) =>
  (page.languageFocusExercises ?? []).reduce(
    (sum, exercise) => sum + (exercise.discussionPrompts ?? []).filter(prompt => prompt.example).length,
    0,
  );

const COPY = {
  en: {
    title: 'In the app for this chapter',
    selfTitle: 'Your extra steps in this chapter',
    byrTeacher: 'Before you read: use it as a one-minute hook before listening. Learners guess, then check after reading.',
    byrSelf: 'Before you read: make your guess first, then read and check it.',
    answer: 'Answer',
    iCanTeacher: 'I can: in the last minute, learners rate each line Yes, Almost or Not yet. Ask for hands on “Not yet”.',
    iCanSelf: 'I can: at the end, rate each line honestly. If you choose “Not yet”, read the chapter again and try the Language Focus once more.',
    examples: (n: number) => `Example answers: ${n} discussion prompt${n === 1 ? ' has' : 's have'} a model answer. In class mode, show it with “Show example” after learners try.`,
    examplesSelf: 'Example answers: after you answer a discussion prompt, compare your answer with the example.',
    group: 'Group task after this chapter',
    groupNote: 'Turn on class mode so the task opens on the board. A learner on their own does the “On your own?” version.',
    solo: 'Group task, on your own',
    myWords: 'My words: save two or three new words from this chapter, then review them in “My words”.',
    lessonCard: 'The lesson card in the reader shows this plan on one screen.',
    types: { jigsaw: 'Jigsaw reading', roleplay: 'Role play', mapGap: 'Map game', project: 'Mini project' },
    people: 'people',
  },
  ar: {
    title: 'فِي التَّطْبِيقِ لِهٰذَا الفَصْلِ',
    selfTitle: 'خُطُوَاتُكَ الإِضَافِيَّةُ فِي هٰذَا الفَصْلِ',
    byrTeacher: 'قَبْلَ القِرَاءَةِ: اسْتَعْمِلْهُ تَهْيِئَةً لِدَقِيقَةٍ وَاحِدَةٍ قَبْلَ الاسْتِمَاعِ. يُخَمِّنُ الطُّلَّابُ، ثُمَّ يَتَحَقَّقُونَ بَعْدَ القِرَاءَةِ.',
    byrSelf: 'قَبْلَ القِرَاءَةِ: خَمِّنْ أَوَّلًا، ثُمَّ اقْرَأْ وَتَحَقَّقْ.',
    answer: 'الإِجَابَةُ',
    iCanTeacher: 'أَسْتَطِيعُ: فِي الدَّقِيقَةِ الأَخِيرَةِ يُقَيِّمُ الطُّلَّابُ كُلَّ سَطْرٍ: نَعَمْ، تَقْرِيبًا، لَيْسَ بَعْدُ. اسْأَلْ مَنِ اخْتَارَ «لَيْسَ بَعْدُ».',
    iCanSelf: 'أَسْتَطِيعُ: فِي النِّهَايَةِ قَيِّمْ كُلَّ سَطْرٍ بِصِدْقٍ. إِذَا اخْتَرْتَ «لَيْسَ بَعْدُ» فَاقْرَأِ الفَصْلَ مَرَّةً أُخْرَى وَأَعِدِ التَّرْكِيزَ اللُّغَوِيَّ.',
    examples: (n: number) => `أَمْثِلَةُ الإِجَابَاتِ: لِـ ${n.toLocaleString('ar-EG')} مِنْ أَسْئِلَةِ النِّقَاشِ إِجَابَةٌ نَمُوذَجِيَّةٌ. فِي وَضْعِ الصَّفِّ أَظْهِرْهَا بِـ«أَظْهِرِ المِثَالَ» بَعْدَ أَنْ يُحَاوِلَ الطُّلَّابُ.`,
    examplesSelf: 'أَمْثِلَةُ الإِجَابَاتِ: بَعْدَ أَنْ تُجِيبَ عَنْ سُؤَالِ النِّقَاشِ قَارِنْ إِجَابَتَكَ بِالمِثَالِ.',
    group: 'مُهِمَّةٌ جَمَاعِيَّةٌ بَعْدَ هٰذَا الفَصْلِ',
    groupNote: 'شَغِّلْ وَضْعَ الصَّفِّ لِتَظْهَرَ المُهِمَّةُ مَفْتُوحَةً عَلَى السَّبُّورَةِ. مَنْ يَتَعَلَّمُ وَحْدَهُ يَعْمَلُ بِنُسْخَةِ «تَتَعَلَّمُ وَحْدَكَ؟».',
    solo: 'المُهِمَّةُ الجَمَاعِيَّةُ وَحْدَكَ',
    myWords: 'كَلِمَاتِي: احْفَظْ كَلِمَتَيْنِ أَوْ ثَلَاثًا جَدِيدَةً مِنْ هٰذَا الفَصْلِ، ثُمَّ رَاجِعْهَا فِي «كَلِمَاتِي».',
    lessonCard: 'بِطَاقَةُ الدَّرْسِ فِي القَارِئِ تَعْرِضُ هٰذِهِ الخُطَّةَ فِي شَاشَةٍ وَاحِدَةٍ.',
    types: { jigsaw: 'قِرَاءَةٌ تَعَاوُنِيَّةٌ', roleplay: 'لَعِبُ الأَدْوَارِ', mapGap: 'لُعْبَةُ الخَرِيطَةِ', project: 'مَشْرُوعٌ صَغِيرٌ' },
    people: 'أَشْخَاص',
  },
};

const Row = ({ icon: Icon, children }: { icon: React.ComponentType<{ size?: number; className?: string }>; children: React.ReactNode }) => (
  <li className="flex gap-2.5 sm:gap-3">
    <Icon size={16} className="mt-1 shrink-0 text-gold" />
    <div className="min-w-0 flex-1">{children}</div>
  </li>
);

/** The V2 steps of one chapter, read from the book itself so every guide stays in step with the app. */
export const GuideV2ChapterBox = ({ page, language, variant }: { page?: PageData; language: string; variant: 'teacher' | 'self' }) => {
  if (!page || page.type !== 'story') return null;
  const isArabic = language === 'ar';
  const L = isArabic ? COPY.ar : COPY.en;
  const examples = countExamples(page);
  const { beforeYouRead, iCan, groupTask } = page;
  if (!beforeYouRead && !iCan?.length && !groupTask && !examples) return null;
  const isTeacher = variant === 'teacher';
  const text = 'font-serif text-[13px] sm:text-[15px] text-white leading-relaxed';

  return (
    <div className="rounded-2xl border border-gold/20 bg-gold/[0.06] p-3.5 sm:p-6" data-guide-v2>
      <h5 className="mb-3 flex items-center gap-2 font-display text-[13px] uppercase tracking-widest text-gold sm:text-[15px]">
        <SECTION_ICONS.lessonCard.icon size={16} className="shrink-0" />
        {isTeacher ? L.title : L.selfTitle}
      </h5>
      <ul className={cn('space-y-3', text)}>
        {beforeYouRead && (
          <Row icon={SECTION_ICONS.beforeYouRead.icon}>
            <p>{isTeacher ? L.byrTeacher : L.byrSelf}</p>
            <p className="mt-1 text-parchment/80">
              <span className="font-semibold">{beforeYouRead.question}</span>
              {isTeacher && <> <span className="text-gold/70">{L.answer}:</span> {beforeYouRead.options[beforeYouRead.answer]}</>}
            </p>
          </Row>
        )}
        {iCan?.length ? (
          <Row icon={SECTION_ICONS.iCan.icon}>
            <p>{isTeacher ? L.iCanTeacher : L.iCanSelf}</p>
            <ul className="mt-1 space-y-0.5 text-parchment/80">
              {iCan.map(line => <li key={line}>• {line}</li>)}
            </ul>
          </Row>
        ) : null}
        {examples > 0 && (
          <Row icon={MODE_ICONS.sayOrWrite.icon}>
            <p>{isTeacher ? L.examples(examples) : L.examplesSelf}</p>
          </Row>
        )}
        {!isTeacher && (
          <Row icon={SECTION_ICONS.myWords.icon}>
            <p>{L.myWords}</p>
          </Row>
        )}
        {groupTask && (
          <Row icon={MODE_ICONS.group.icon}>
            <p className="font-semibold text-gold">{isTeacher ? L.group : L.solo}</p>
            <p className="mt-0.5">
              {groupTask.title} · {L.types[groupTask.type]}
              {isTeacher && <> · <span className="whitespace-nowrap">{groupTask.time}</span> · <span className="whitespace-nowrap">{groupTask.groupSize} {L.people}</span></>}
            </p>
            {isTeacher ? (
              <>
                {groupTask.roles?.length ? <p className="mt-0.5 text-parchment/80">{groupTask.roles.map(role => role.name).join(' · ')}</p> : null}
                <p className="mt-0.5 text-parchment/70">{L.groupNote}</p>
              </>
            ) : (
              <p className="mt-0.5 text-parchment/80">{groupTask.solo}</p>
            )}
          </Row>
        )}
        {isTeacher && (
          <Row icon={SECTION_ICONS.lessonCard.icon}>
            <p className="text-parchment/70">{L.lessonCard}</p>
          </Row>
        )}
      </ul>
    </div>
  );
};

const TOOLS = {
  teacher: {
    en: {
      title: 'New classroom tools',
      intro: 'These tools are in the reader for every book.',
      items: [
        [SECTION_ICONS.lessonCard, 'Open “Lesson card” under the chapter title: aims, timed steps, the group task and the exit ticket on one screen.'],
        [SECTION_ICONS.classMode, 'Reading settings (Aa) → Class mode: bigger text for the board, “Show the answer” for Before you read, “Show example” for discussion prompts, and group tasks open.'],
        [SECTION_ICONS.beforeYouRead, 'Before you read: one guess per chapter, a one-minute hook before listening.'],
        [SECTION_ICONS.iCan, 'I can: three lines at the end of each chapter for self-assessment.'],
        [MODE_ICONS.group, 'Group tasks: three per book, with roles, steps and what each group shares. Nobody plays a prophet or a person from the story.'],
        [SECTION_ICONS.resultCard, 'Result card: at the end of the book each learner opens a card with their scores and an 8-character code.'],
        [SECTION_ICONS.checkCode, 'Check a result code: on the home page, type the code to see the same scores. It is a light check, not protection against cheating.'],
      ] as const,
    },
    ar: {
      title: 'أَدَوَاتُ الصَّفِّ الجَدِيدَةُ',
      intro: 'هٰذِهِ الأَدَوَاتُ مَوْجُودَةٌ فِي القَارِئِ لِكُلِّ كِتَابٍ.',
      items: [
        [SECTION_ICONS.lessonCard, 'افْتَحْ «بِطَاقَةَ الدَّرْسِ» تَحْتَ عُنْوَانِ الفَصْلِ: الأَهْدَافُ وَخُطُوَاتُ الدَّرْسِ بِأَوْقَاتِهَا وَالمُهِمَّةُ الجَمَاعِيَّةُ وَبِطَاقَةُ الخُرُوجِ فِي شَاشَةٍ وَاحِدَةٍ.'],
        [SECTION_ICONS.classMode, 'إِعْدَادَاتُ القِرَاءَةِ (Aa) ← وَضْعُ الصَّفِّ: نَصٌّ أَكْبَرُ لِلسَّبُّورَةِ، وَ«أَظْهِرِ الإِجَابَةَ» قَبْلَ القِرَاءَةِ، وَ«أَظْهِرِ المِثَالَ» لِأَسْئِلَةِ النِّقَاشِ، وَالمُهِمَّاتُ الجَمَاعِيَّةُ مَفْتُوحَةٌ.'],
        [SECTION_ICONS.beforeYouRead, 'قَبْلَ القِرَاءَةِ: تَخْمِينٌ وَاحِدٌ لِكُلِّ فَصْلٍ، تَهْيِئَةٌ لِدَقِيقَةٍ قَبْلَ الاسْتِمَاعِ.'],
        [SECTION_ICONS.iCan, 'أَسْتَطِيعُ: ثَلَاثَةُ أَسْطُرٍ فِي آخِرِ كُلِّ فَصْلٍ لِلتَّقْيِيمِ الذَّاتِيِّ.'],
        [MODE_ICONS.group, 'المُهِمَّاتُ الجَمَاعِيَّةُ: ثَلَاثٌ فِي كُلِّ كِتَابٍ، بِأَدْوَارٍ وَخُطُوَاتٍ وَمَا تَعْرِضُهُ كُلُّ مَجْمُوعَةٍ. لَا يُمَثِّلُ أَحَدٌ نَبِيًّا وَلَا شَخْصًا مِنَ القِصَّةِ.'],
        [SECTION_ICONS.resultCard, 'بِطَاقَةُ النَّتِيجَةِ: فِي آخِرِ الكِتَابِ يَفْتَحُ كُلُّ طَالِبٍ بِطَاقَةً فِيهَا نَتَائِجُهُ وَرَمْزٌ مِنْ ثَمَانِيَةِ أَحْرُفٍ.'],
        [SECTION_ICONS.checkCode, 'تَحَقَّقْ مِنْ رَمْزِ النَّتِيجَةِ: فِي الصَّفْحَةِ الرَّئِيسَةِ اكْتُبِ الرَّمْزَ لِتَرَى النَّتَائِجَ نَفْسَهَا. هُوَ فَحْصٌ خَفِيفٌ، لَا حِمَايَةٌ مِنَ الغِشِّ.'],
      ] as const,
    },
  },
  self: {
    en: {
      title: 'Tools for learning on your own',
      intro: 'You find these in every book.',
      items: [
        [SECTION_ICONS.levelTest, 'Level test: choose “On my own” on the home page and take the ten-question test. The result is only a suggestion.'],
        [SECTION_ICONS.beforeYouRead, 'Before you read: guess first, then read and check your guess.'],
        [SECTION_ICONS.myWords, 'My words: tap a word, save it, and review your words with flashcards. A word is learned after you know it twice.'],
        [SECTION_ICONS.iCan, 'I can: rate three lines at the end of each chapter. “Not yet” means read again.'],
        [MODE_ICONS.sayOrWrite, 'Example answers: compare your answer with the example after you try.'],
        [SECTION_ICONS.resultCard, 'Result card: at the end of the book, see your scores and a code you can show a teacher.'],
      ] as const,
    },
    ar: {
      title: 'أَدَوَاتٌ لِلتَّعَلُّمِ وَحْدَكَ',
      intro: 'تَجِدُهَا فِي كُلِّ كِتَابٍ.',
      items: [
        [SECTION_ICONS.levelTest, 'اخْتِبَارُ المُسْتَوَى: اخْتَرْ «وَحْدِي» فِي الصَّفْحَةِ الرَّئِيسَةِ وَأَجِبْ عَنْ عَشَرَةِ أَسْئِلَةٍ. النَّتِيجَةُ اقْتِرَاحٌ فَقَطْ.'],
        [SECTION_ICONS.beforeYouRead, 'قَبْلَ القِرَاءَةِ: خَمِّنْ أَوَّلًا، ثُمَّ اقْرَأْ وَتَحَقَّقْ مِنْ تَخْمِينِكَ.'],
        [SECTION_ICONS.myWords, 'كَلِمَاتِي: اضْغَطْ عَلَى كَلِمَةٍ وَاحْفَظْهَا، ثُمَّ رَاجِعْهَا بِالبِطَاقَاتِ. تُصْبِحُ الكَلِمَةُ مَحْفُوظَةً إِذَا عَرَفْتَهَا مَرَّتَيْنِ.'],
        [SECTION_ICONS.iCan, 'أَسْتَطِيعُ: قَيِّمْ ثَلَاثَةَ أَسْطُرٍ فِي آخِرِ كُلِّ فَصْلٍ. «لَيْسَ بَعْدُ» تَعْنِي: اقْرَأْ مَرَّةً أُخْرَى.'],
        [MODE_ICONS.sayOrWrite, 'أَمْثِلَةُ الإِجَابَاتِ: قَارِنْ إِجَابَتَكَ بِالمِثَالِ بَعْدَ أَنْ تُحَاوِلَ.'],
        [SECTION_ICONS.resultCard, 'بِطَاقَةُ النَّتِيجَةِ: فِي آخِرِ الكِتَابِ تَرَى نَتَائِجَكَ وَرَمْزًا تَسْتَطِيعُ أَنْ تُرِيَهُ لِمُعَلِّمٍ.'],
      ] as const,
    },
  },
};

/**
 * "Before you read: one guess…" → label "Before you read", body "one guess…", so the card title is not repeated in its text.
 * A line without a short lead-in ("Open “Lesson card” under…", "Reading settings (Aa) → Class mode: …") keeps the section name as its title.
 */
const splitToolLine = (line: string, fallback: string) => {
  const match = line.match(/^([^:→←]+):\s*(.+)$/s);
  if (match && match[1].replace(/[\u064B-\u0652\u0670]/g, '').length <= 25) {
    const body = match[2];
    return { label: match[1], body: body.charAt(0).toLocaleUpperCase() + body.slice(1) };
  }
  return { label: fallback, body: line };
};

/** One card on the guide's first tab listing the V2 tools. */
export const GuideV2Tools = ({ language, variant }: { language: string; variant: 'teacher' | 'self' }) => {
  const copy = TOOLS[variant][language === 'ar' ? 'ar' : 'en'];
  const lang = language === 'ar' ? 'ar' : 'en';
  return (
    <div className="rounded-2xl border border-gold/15 bg-white/[0.04] p-4 sm:p-8" data-guide-v2-tools>
      <h3 className="font-display text-lg text-gold sm:text-2xl">{copy.title}</h3>
      <p className="mt-1 font-serif text-sm text-parchment/70 sm:text-base">{copy.intro}</p>
      <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        {copy.items.map(([entry, line]) => {
          const { label, body } = splitToolLine(line, entry[lang]);
          return (
          <li key={entry.en} className="flex gap-3 rounded-xl bg-black/20 p-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
              <entry.icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-[13px] font-semibold text-parchment sm:text-sm">{label}</span>
              <span className="mt-0.5 block font-serif text-[13px] leading-relaxed text-white/80 sm:text-[15px]">{body}</span>
            </span>
          </li>
          );
        })}
      </ul>
    </div>
  );
};
