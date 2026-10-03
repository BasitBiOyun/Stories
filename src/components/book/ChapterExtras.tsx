import React, { useEffect, useState } from 'react';
import { Check, CheckCircle, ChevronRight, Clock } from '../ui/icons';
import { MODE_ICONS, SECTION_ICONS } from '../../lib/sectionIcons';
import type { BeforeYouRead, GroupTask } from '../../types';
import { cn } from '../../lib/utils';
import { useClassMode } from '../../contexts/ClassModeContext';

const readStored = <T,>(key: string, fallback: T): T => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const writeStored = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage may be unavailable; the answer then lasts for this visit only.
  }
};

export interface BeforeYouReadState {
  guess: number | null;
  checked: boolean;
}

/** The learner's guess for one chapter, kept on the device. */
export const useBeforeYouRead = (storageKey: string) => {
  const [state, setState] = useState<BeforeYouReadState>(() => readStored(storageKey, { guess: null, checked: false }));
  useEffect(() => setState(readStored(storageKey, { guess: null, checked: false })), [storageKey]);
  const update = (next: BeforeYouReadState) => {
    setState(next);
    writeStored(storageKey, next);
  };
  return {
    state,
    guess: (index: number) => update({ guess: index, checked: false }),
    check: () => update({ ...state, checked: true }),
  };
};

const LABELS = {
  en: {
    title: 'Before you read',
    check: 'Check my guess',
    right: 'Your guess was right!',
    wrong: 'Good try. The answer is:',
    answerIs: 'The answer is:',
    showAnswer: 'Show the answer',
    canTitle: 'I can',
    canHint: 'How well can you do these now?',
    yes: 'Yes',
    almost: 'Almost',
    notYet: 'Not yet',
  },
  ar: {
    title: 'قَبْلَ القِرَاءَةِ',
    check: 'تَحَقَّقْ مِنْ تَخْمِينِي',
    right: 'تَخْمِينُكَ صَحِيحٌ!',
    wrong: 'مُحَاوَلَةٌ جَيِّدَةٌ. الإِجَابَةُ:',
    answerIs: 'الإِجَابَةُ:',
    showAnswer: 'أَظْهِرِ الإِجَابَةَ',
    canTitle: 'أَسْتَطِيعُ',
    canHint: 'إِلَى أَيِّ حَدٍّ تَسْتَطِيعُ ذٰلِكَ الآنَ؟',
    yes: 'نَعَمْ',
    almost: 'تَقْرِيبًا',
    notYet: 'لَيْسَ بَعْدُ',
  },
};

/** A small optional guess above the story. The text is always visible; the learner can skip it. */
export const BeforeYouReadPanel = ({
  data,
  language,
  state,
  onGuess,
  onCheck,
}: {
  data: BeforeYouRead;
  language: string;
  state: BeforeYouReadState;
  onGuess: (index: number) => void;
  onCheck: () => void;
}) => {
  const L = language === 'ar' ? LABELS.ar : LABELS.en;
  const isArabic = language === 'ar';
  const { guess, checked } = state;
  const right = checked && guess === data.answer;
  const { classMode } = useClassMode();

  const letters = isArabic ? ['أ', 'ب', 'ج', 'د'] : ['A', 'B', 'C', 'D'];

  return (
    <section
      data-before-you-read
      className="mb-4 rounded-xl border border-brand-200/80 bg-brand-50/60 px-3 py-2.5 font-sans"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-2">
        <p className={cn('min-w-0 flex-1 text-wood', isArabic ? 'text-base' : 'text-sm')}>
          <span className={cn('me-2 inline-flex items-center gap-1 align-middle font-display font-semibold uppercase tracking-widest text-brand-800', isArabic ? 'text-xs' : 'text-[10px]')}>
            <SECTION_ICONS.beforeYouRead.icon size={14} />
            {L.title}
          </span>
          <span className="font-semibold">{data.question}</span>
        </p>
        {!checked && guess === null && classMode && (
          <button
            type="button"
            onClick={onCheck}
            data-class-show-answer
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-brand-300 bg-white px-3 font-display text-[12px] font-semibold text-brand-800 hover:bg-brand-50"
          >
            {L.showAnswer}
          </button>
        )}
        {!checked && guess !== null && (
          <button
            type="button"
            onClick={onCheck}
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-brand-700 px-3 font-display text-[12px] font-semibold text-white hover:bg-brand-800"
          >
            <Check size={14} />
            {L.check}
          </button>
        )}
      </div>

      <div role="radiogroup" className="mt-2 grid gap-1.5 sm:grid-cols-3">
        {data.options.map((option, index) => {
          const isGuess = guess === index;
          const isAnswer = checked && index === data.answer;
          const isWrongGuess = checked && isGuess && !isAnswer;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isGuess}
              disabled={checked}
              onClick={() => onGuess(index)}
              className={cn(
                'flex min-h-9 items-center gap-2 rounded-lg border bg-white px-2 py-1 text-start leading-snug transition-colors',
                isArabic ? 'text-sm' : 'text-[13px]',
                isAnswer
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold'
                  : isWrongGuess
                  ? 'border-amber-400 bg-amber-50 text-wood'
                  : isGuess
                  ? 'border-brand-600 ring-1 ring-brand-600 text-wood font-semibold'
                  : checked
                  ? 'border-brand-100 text-wood/50'
                  : 'border-brand-100 text-wood/85 hover:border-brand-400',
              )}
            >
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-display text-[11px] font-bold',
                  isAnswer
                    ? 'border-emerald-600 bg-emerald-600 text-white'
                    : isWrongGuess
                    ? 'border-amber-500 bg-amber-500 text-white'
                    : isGuess
                    ? 'border-brand-700 bg-brand-700 text-white'
                    : 'border-brand-200 text-brand-700',
                )}
              >
                {isAnswer ? <CheckCircle size={14} /> : letters[index]}
              </span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {checked && (
        <p className={cn('mt-1.5', isArabic ? 'text-sm' : 'text-[13px]', right ? 'text-emerald-800' : 'text-wood/80')}>
          <span className="font-semibold">{right ? L.right : `${guess === null ? L.answerIs : L.wrong} ${data.options[data.answer]}`}</span>
          {data.quote && data.quote.replace(/[.\s]+$/, '') !== data.options[data.answer].replace(/[.\s]+$/, '') && <span className={cn('ms-1.5 font-serif text-wood/60', !isArabic && 'italic')}>{isArabic ? `«${data.quote}»` : `“${data.quote}”`}</span>}
        </p>
      )}
    </section>
  );
};

type Rating = 'yes' | 'almost' | 'notYet';

export const ICanPanel = ({ items, language, storageKey }: { items: string[]; language: string; storageKey: string }) => {
  const L = language === 'ar' ? LABELS.ar : LABELS.en;
  const isArabic = language === 'ar';
  const [ratings, setRatings] = useState<Record<number, Rating>>(() => readStored(storageKey, {}));
  useEffect(() => setRatings(readStored(storageKey, {})), [storageKey]);
  const rate = (index: number, value: Rating) => {
    const next = { ...ratings, [index]: value };
    setRatings(next);
    writeStored(storageKey, next);
  };
  const options: { value: Rating; label: string; on: string }[] = [
    { value: 'yes', label: L.yes, on: 'bg-emerald-600 text-white border-emerald-600' },
    { value: 'almost', label: L.almost, on: 'bg-amber-500 text-white border-amber-500' },
    { value: 'notYet', label: L.notYet, on: 'bg-wood/70 text-white border-wood/70' },
  ];

  return (
    <section data-i-can className="mt-6 rounded-[26px] border border-brand-100 bg-white p-5 sm:p-6 shadow-[0_14px_38px_rgba(63,49,28,0.06)] font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="flex items-baseline gap-3">
        <span className="inline-flex items-center gap-2 text-brand-800">
          <SECTION_ICONS.iCan.icon size={18} />
          <span className={cn('font-display font-semibold uppercase tracking-widest', isArabic ? 'text-sm' : 'text-[11px]')}>{L.canTitle}</span>
        </span>
        <span className={cn('text-wood/55', isArabic ? 'text-sm' : 'text-xs')}>{L.canHint}</span>
      </header>
      <ul className="mt-3 divide-y divide-gray-100">
        {items.map((item, index) => (
          <li key={item} className="flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between">
            <span className={cn('font-serif text-wood', isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base')}>{item}</span>
            <span className="flex shrink-0 gap-1.5">
              {options.map(option => (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={ratings[index] === option.value}
                  onClick={() => rate(index, option.value)}
                  className={cn(
                    'min-h-9 rounded-full border px-3 font-display text-[12px] font-semibold transition-colors',
                    ratings[index] === option.value ? option.on : 'border-gray-200 bg-white text-wood/65 hover:border-gray-300',
                  )}
                >
                  {option.label}
                </button>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const GROUP_LABELS = {
  en: {
    title: 'Group task',
    show: 'Show the task',
    hide: 'Hide the task',
    people: 'people',
    roles: 'Roles',
    steps: 'Steps',
    share: 'Share',
    solo: 'On your own?',
    types: { jigsaw: 'Jigsaw reading', roleplay: 'Role play', mapGap: 'Map game', project: 'Mini project' },
  },
  ar: {
    title: 'مُهِمَّةٌ جَمَاعِيَّةٌ',
    show: 'اِعْرِضِ المُهِمَّةَ',
    hide: 'أَخْفِ المُهِمَّةَ',
    people: 'أَشْخَاص',
    roles: 'الأَدْوَارُ',
    steps: 'الخُطُوَاتُ',
    share: 'شَارِكْ',
    solo: 'تَتَعَلَّمُ وَحْدَكَ؟',
    types: { jigsaw: 'قِرَاءَةٌ تَعَاوُنِيَّةٌ', roleplay: 'لَعِبُ الأَدْوَارِ', mapGap: 'لُعْبَةُ الخَرِيطَةِ', project: 'مَشْرُوعٌ صَغِيرٌ' },
  },
};

/** A group task after some chapters. Closed by default so it never lengthens the page for a learner who skips it. */
export const GroupTaskPanel = ({ task, language }: { task: GroupTask; language: string }) => {
  const isArabic = language === 'ar';
  const L = isArabic ? GROUP_LABELS.ar : GROUP_LABELS.en;
  const { classMode } = useClassMode();
  const [open, setOpen] = useState(classMode);
  const GroupIcon = MODE_ICONS.group.icon;
  const SoloIcon = MODE_ICONS.individual.icon;
  const small = isArabic ? 'text-sm' : 'text-[13px]';
  const body = isArabic ? 'text-base' : 'text-sm sm:text-[15px]';

  return (
    <section data-group-task className="mt-6 rounded-[26px] border border-brand-100 bg-white p-5 sm:p-6 shadow-[0_14px_38px_rgba(63,49,28,0.06)] font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
      <button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} className="flex w-full items-center gap-3 text-start">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
          <GroupIcon size={22} />
        </span>
        <span className="min-w-0 flex-1">
          <span className={cn('block font-display font-semibold uppercase tracking-widest text-brand-800', isArabic ? 'text-sm' : 'text-[11px]')}>
            {L.title} · {L.types[task.type]}
          </span>
          <span className={cn('block font-display font-semibold text-wood', isArabic ? 'text-lg' : 'text-base sm:text-lg')}>{task.title}</span>
          <span className={cn('mt-0.5 flex flex-wrap items-center gap-x-3 text-wood/55', small)}>
            <span className="inline-flex items-center gap-1"><Clock size={13} />{task.time}</span>
            <span className="inline-flex items-center gap-1"><GroupIcon size={13} />{task.groupSize} {L.people}</span>
          </span>
        </span>
        <span className={cn('inline-flex shrink-0 items-center gap-1 rounded-full border border-brand-200 px-3 py-1.5 font-display text-[12px] font-semibold text-brand-800', isArabic && 'text-sm')}>
          {open ? L.hide : L.show}
          <ChevronRight size={14} className={cn('transition-transform', open ? 'rotate-90' : isArabic && 'rotate-180')} />
        </span>
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          {task.roles?.length ? (
            <div>
              <h5 className={cn('font-display font-semibold uppercase tracking-widest text-wood/50', isArabic ? 'text-xs' : 'text-[10px]')}>{L.roles}</h5>
              <ul className="mt-1.5 grid gap-1.5 sm:grid-cols-2">
                {task.roles.map(role => (
                  <li key={role.name} className={cn('rounded-xl bg-brand-50/60 px-3 py-2 text-wood', small)}>
                    <span className="font-semibold">{role.name}:</span> {role.job}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div>
            <h5 className={cn('font-display font-semibold uppercase tracking-widest text-wood/50', isArabic ? 'text-xs' : 'text-[10px]')}>{L.steps}</h5>
            <ol className="mt-1.5 space-y-1.5">
              {task.steps.map((step, index) => (
                <li key={step} className={cn('flex gap-2.5 font-serif text-wood', body)}>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 font-display text-[11px] font-bold text-white">{(index + 1).toLocaleString(isArabic ? 'ar-EG' : 'en')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className={cn('rounded-xl border border-emerald-200 bg-emerald-50/70 px-3 py-2 text-emerald-900', small)}>
            <span className="font-semibold">{L.share}: </span>{task.share}
          </p>
          <p className={cn('flex items-start gap-2 text-wood/70', small)}>
            <SoloIcon size={15} className="mt-0.5 shrink-0" />
            <span><span className="font-semibold">{L.solo} </span>{task.solo}</span>
          </p>
        </div>
      )}
    </section>
  );
};
