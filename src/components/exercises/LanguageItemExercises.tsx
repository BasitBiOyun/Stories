import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, XCircle } from '../ui/icons';
import type { Exercise } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { presentDeranged } from '../../lib/exercisePresentation';
import {
  scoreLanguageItems,
  sentenceBuildingAccepted,
  wordBankExpected,
  type ErrorCorrectionAnswer,
} from '../../lib/exerciseScoring';

/**
 * Renderers for the item-based Language Focus types:
 * choose-form, word-bank, error-correction, sentence-building, transformation.
 *
 * Every item keeps the story sentence as its context. After checking, each item
 * shows its own result and the correct form in place, so the explanation that
 * follows confirms a pattern the learner has already met in context.
 */

export interface LanguageItemTheme {
  accentBg: string;
  accentText: string;
  softBg: string;
  softBorder: string;
  selected: string;
}

interface RendererProps {
  exercise: Exercise;
  isSubmitted: boolean;
  onSubmit: (answer: unknown) => void;
  theme: LanguageItemTheme;
}

const GAP = /(\[choice\]|\[blank\]|_{3,})/g;
const isGap = (part: string) => /^(?:\[choice\]|\[blank\]|_{3,})$/.test(part);

const useText = () => {
  const { language, t, formatNumber } = useLanguage();
  const isArabic = language === 'ar';
  return {
    t,
    formatNumber,
    isArabic,
    body: isArabic ? 'text-lg sm:text-xl leading-loose' : 'text-base sm:text-lg leading-relaxed',
    small: isArabic ? 'text-sm sm:text-base' : 'text-xs sm:text-sm',
    copy: isArabic
      ? {
          original: 'الجملة من الفصل',
          yourVersion: 'أعد الصياغة',
          correctForm: 'الصيغة الصحيحة',
          findError: 'انقر الكلمة أو العبارة الخطأ.',
          lookAgain: 'ليست هذه. اقرأ الجملة مرة أخرى.',
          replaceWith: 'اختر التصحيح:',
          buildHere: 'انقر القطع لبناء الجملة هنا.',
          pieces: 'القطع',
          wordBank: 'بنك الكلمات',
          blank: (n: string) => `الفراغ ${n}`,
          typeHere: 'اكتب هنا',
          correctSentence: 'الجملة الصحيحة',
          reset: 'ابدأ من جديد',
        }
      : {
          original: 'From the chapter',
          yourVersion: 'Rewrite it',
          correctForm: 'Correct form',
          findError: 'Tap the word or phrase that is wrong.',
          lookAgain: 'Not that one. Read the sentence again.',
          replaceWith: 'Choose the correction:',
          buildHere: 'Tap the pieces to build the sentence here.',
          pieces: 'Pieces',
          wordBank: 'Word bank',
          blank: (n: string) => `Blank ${n}`,
          typeHere: 'type here',
          correctSentence: 'Correct sentence',
          reset: 'Start again',
        },
  };
};

const ItemNumber = ({ index, result }: { index: number; result?: boolean }) => {
  const { formatNumber } = useLanguage();
  if (result === true) return <CheckCircle2 size={22} className="mt-1 shrink-0 text-emerald-600" aria-hidden="true" />;
  if (result === false) return <XCircle size={22} className="mt-1 shrink-0 text-rose-600" aria-hidden="true" />;
  return (
    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 font-display text-xs font-black text-wood/60" aria-hidden="true">
      {formatNumber(index + 1)}
    </span>
  );
};

const CheckButton = ({ enabled, onClick, theme, label }: { enabled: boolean; onClick: () => void; theme: LanguageItemTheme; label: string }) => {
  const { isArabic } = useText();
  return (
    <button
      type="button"
      disabled={!enabled}
      onClick={onClick}
      className={cn(
        'w-full min-h-12 rounded-xl font-display font-bold uppercase tracking-widest',
        isArabic ? 'text-sm sm:text-base normal-case tracking-normal' : 'text-xs sm:text-sm',
        enabled ? `${theme.accentBg} text-white` : 'cursor-not-allowed bg-gray-100 text-gray-400',
      )}
    >
      {label}
    </button>
  );
};

const itemCard = 'rounded-2xl border-2 border-stone-100 bg-white p-4 sm:p-5';
const resultSr = (result: boolean | undefined, isArabic: boolean) =>
  result === undefined ? null : <span className="sr-only">{result ? (isArabic ? 'صحيح' : 'correct') : (isArabic ? 'غير صحيح' : 'incorrect')}</span>;

/* ---------------------------------------------------------------- choose-form */

const ChooseForm = ({ exercise, isSubmitted, onSubmit, theme }: RendererProps) => {
  const text = useText();
  const items = exercise.formChoices ?? [];
  const [choices, setChoices] = React.useState<(number | null)[]>(() => items.map(() => null));
  const results = isSubmitted ? scoreLanguageItems(exercise, choices) ?? [] : [];
  const complete = choices.every(choice => choice !== null);

  return (
    <div className="space-y-3">
      {items.map((item, itemIndex) => {
        const result = isSubmitted ? results[itemIndex] : undefined;
        return (
          <div key={itemIndex} className={cn(itemCard, 'flex gap-3')}>
            <ItemNumber index={itemIndex} result={result} />
            <p className={cn('flex-1 font-serif text-wood', text.body)}>
              {resultSr(result, text.isArabic)}
              {item.sentence.split(GAP).map((part, partIndex) => {
                if (!isGap(part)) return <React.Fragment key={partIndex}>{part}</React.Fragment>;
                return (
                  <span key={partIndex} role="radiogroup" aria-label={text.copy.correctForm} className="mx-1 inline-flex flex-wrap items-center gap-1.5 align-middle">
                    {presentDeranged(item.options.map((_, index) => index), `${exercise.id}:${itemIndex}`).map((optionIndex) => {
                      const option = item.options[optionIndex];
                      const selected = choices[itemIndex] === optionIndex;
                      const isAnswer = optionIndex === item.answer;
                      return (
                        <button
                          key={optionIndex}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          disabled={isSubmitted}
                          onClick={() => setChoices(previous => previous.map((value, index) => (index === itemIndex ? optionIndex : value)))}
                          className={cn(
                            'min-h-10 rounded-full border-2 px-3 py-1 font-bold transition-colors',
                            text.isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                            isSubmitted && isAnswer && 'border-emerald-500 bg-emerald-50 text-emerald-800',
                            isSubmitted && selected && !isAnswer && 'border-rose-400 bg-rose-50 text-rose-700 line-through',
                            isSubmitted && !selected && !isAnswer && 'border-stone-100 text-wood/35',
                            !isSubmitted && (selected ? theme.selected : `bg-white ${theme.softBorder} hover:bg-stone-50`),
                          )}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </span>
                );
              })}
            </p>
          </div>
        );
      })}
      {!isSubmitted && <CheckButton enabled={complete} onClick={() => onSubmit(choices)} theme={theme} label={text.t('nav.check')} />}
    </div>
  );
};

/* ------------------------------------------------------------------ word-bank */

const WordBank = ({ exercise, isSubmitted, onSubmit, theme }: RendererProps) => {
  const text = useText();
  const parts = (exercise.fillBlanksText ?? '').split(GAP);
  const blankCount = parts.filter(isGap).length;
  const bank = React.useMemo(() => presentDeranged(exercise.wordBank ?? [], `${exercise.id}:bank`), [exercise]);
  const expected = wordBankExpected(exercise);
  const [slots, setSlots] = React.useState<(number | null)[]>(() => Array.from({ length: blankCount }, () => null));
  const [active, setActive] = React.useState(0);
  const placedTexts = slots.map(slot => (slot === null ? '' : bank[slot]));
  const results = isSubmitted ? scoreLanguageItems(exercise, placedTexts) ?? [] : [];
  const used = new Set(slots.filter((slot): slot is number => slot !== null));
  const complete = slots.every(slot => slot !== null);

  const place = (bankIndex: number) => {
    const target = slots[active] === null ? active : slots.findIndex(slot => slot === null);
    if (target < 0) return;
    const next = slots.map((slot, index) => (index === target ? bankIndex : slot));
    setSlots(next);
    const following = next.findIndex((slot, index) => slot === null && index > target);
    setActive(following >= 0 ? following : Math.max(0, next.findIndex(slot => slot === null)));
  };

  let blankIndex = -1;
  return (
    <div className="space-y-4">
      <div className={cn(itemCard, 'font-serif text-wood', text.body)}>
        {parts.map((part, partIndex) => {
          if (!isGap(part)) return <React.Fragment key={partIndex}>{part}</React.Fragment>;
          blankIndex += 1;
          const index = blankIndex;
          const slot = slots[index];
          const result = isSubmitted ? results[index] : undefined;
          return (
            <React.Fragment key={partIndex}>
              <button
                type="button"
                disabled={isSubmitted}
                aria-label={`${text.copy.blank(text.formatNumber(index + 1))}${slot !== null ? `: ${bank[slot]}` : ''}`}
                onClick={() => {
                  if (slot !== null) setSlots(previous => previous.map((value, i) => (i === index ? null : value)));
                  setActive(index);
                }}
                className={cn(
                  'mx-1 inline-flex min-h-10 min-w-24 items-center justify-center rounded-lg border-b-[3px] px-2 align-middle font-bold transition-colors',
                  result === true && 'border-emerald-500 bg-emerald-50 text-emerald-800',
                  result === false && 'border-rose-500 bg-rose-50 text-rose-700',
                  result === undefined && slot !== null && `${theme.softBg} ${theme.softBorder} ${theme.accentText}`,
                  result === undefined && slot === null && (active === index ? `${theme.softBorder} bg-white ring-2 ring-offset-1 ring-stone-300` : 'border-stone-300 bg-stone-50'),
                )}
              >
                {slot !== null ? bank[slot] : <span className="text-wood/30">{text.formatNumber(index + 1)}</span>}
              </button>
              {result === false && (
                <span className={cn('mx-1 rounded-md bg-emerald-50 px-1.5 font-bold text-emerald-800', text.small)}>{expected[index]}</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div>
        <p className={cn('mb-2 font-display font-bold uppercase tracking-widest text-wood/45', text.small)}>{text.copy.wordBank}</p>
        <div className="flex flex-wrap gap-2 rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 p-3">
          {bank.map((word, bankIndex) => (
            <button
              key={`${word}-${bankIndex}`}
              type="button"
              disabled={isSubmitted || used.has(bankIndex)}
              onClick={() => place(bankIndex)}
              className={cn(
                'min-h-10 rounded-lg border-2 bg-white px-3 py-1.5 font-serif font-semibold transition-opacity',
                text.isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                used.has(bankIndex) ? 'border-dashed border-stone-200 text-transparent' : `${theme.softBorder} text-wood hover:bg-stone-50`,
              )}
              aria-hidden={used.has(bankIndex) || undefined}
            >
              {word}
            </button>
          ))}
        </div>
      </div>
      {!isSubmitted && <CheckButton enabled={complete} onClick={() => onSubmit(placedTexts)} theme={theme} label={text.t('nav.check')} />}
    </div>
  );
};

/* ----------------------------------------------------------- error-correction */

interface Token { text: string; start: number; end: number }

const tokenize = (sentence: string): Token[] => {
  const tokens: Token[] = [];
  const pattern = /\S+/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(sentence))) tokens.push({ text: match[0], start: match.index, end: match.index + match[0].length });
  return tokens;
};

const ErrorCorrection = ({ exercise, isSubmitted, onSubmit, theme }: RendererProps) => {
  const text = useText();
  const reduceMotion = useReducedMotion();
  const items = exercise.errorItems ?? [];
  const [answers, setAnswers] = React.useState<ErrorCorrectionAnswer[]>(() => items.map(() => ({ found: false, choice: null })));
  const [miss, setMiss] = React.useState<{ item: number; token: number } | null>(null);
  const results = isSubmitted ? scoreLanguageItems(exercise, answers) ?? [] : [];
  const complete = answers.every(answer => answer.found && answer.choice !== null);

  return (
    <div className="space-y-3">
      <p className={cn('font-serif text-wood/55', text.small)}>{text.copy.findError}</p>
      {items.map((item, itemIndex) => {
        const start = item.sentence.indexOf(item.error);
        const end = start + item.error.length;
        const tokens = tokenize(item.sentence);
        const answer = answers[itemIndex];
        const result = isSubmitted ? results[itemIndex] : undefined;
        const corrected = start >= 0
          ? `${item.sentence.slice(0, start)}${item.options[item.answer]}${item.sentence.slice(end)}`
          : item.sentence;
        return (
          <div key={itemIndex} className={cn(itemCard, 'flex gap-3')}>
            <ItemNumber index={itemIndex} result={result} />
            <div className="min-w-0 flex-1 space-y-3">
              {resultSr(result, text.isArabic)}
              <p className={cn('font-serif text-wood', text.body)}>
                {tokens.map((token, tokenIndex) => {
                  const inError = start >= 0 && token.start < end && token.end > start;
                  const revealed = answer.found && inError;
                  const missed = miss?.item === itemIndex && miss.token === tokenIndex;
                  return (
                    <React.Fragment key={tokenIndex}>
                    {tokenIndex > 0 && ' '}
                    <motion.button
                      type="button"
                      disabled={isSubmitted || answer.found}
                      animate={missed && !reduceMotion ? { x: [0, -5, 5, -3, 3, 0] } : { x: 0 }}
                      onClick={() => {
                        if (inError) {
                          setAnswers(previous => previous.map((value, index) => (index === itemIndex ? { ...value, found: true } : value)));
                          setMiss(null);
                        } else {
                          setMiss({ item: itemIndex, token: tokenIndex });
                        }
                      }}
                      className={cn(
                        'inline rounded-md px-0.5 transition-colors',
                        revealed ? 'bg-rose-50 text-rose-700 underline decoration-rose-400 decoration-wavy underline-offset-4' : 'hover:bg-stone-100',
                        missed && 'bg-stone-100',
                        answer.found && !revealed && 'cursor-default',
                      )}
                    >
                      {token.text}
                    </motion.button>
                    </React.Fragment>
                  );
                })}
              </p>
              {miss?.item === itemIndex && !answer.found && (
                <p className={cn('font-serif text-wood/60', text.small)} role="status">{text.copy.lookAgain}</p>
              )}
              {answer.found && (
                <div className="space-y-2">
                  <p className={cn('font-display font-bold uppercase tracking-widest text-wood/45', text.small)}>{text.copy.replaceWith}</p>
                  <div role="radiogroup" aria-label={text.copy.replaceWith} className="flex flex-wrap gap-2">
                    {presentDeranged(item.options.map((_, index) => index), `${exercise.id}:${itemIndex}`).map((optionIndex) => {
                      const option = item.options[optionIndex];
                      const selected = answer.choice === optionIndex;
                      const isAnswer = optionIndex === item.answer;
                      return (
                        <button
                          key={optionIndex}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          disabled={isSubmitted}
                          onClick={() => setAnswers(previous => previous.map((value, index) => (index === itemIndex ? { ...value, choice: optionIndex } : value)))}
                          className={cn(
                            'min-h-10 rounded-full border-2 px-3 py-1 font-bold',
                            text.isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                            isSubmitted && isAnswer && 'border-emerald-500 bg-emerald-50 text-emerald-800',
                            isSubmitted && selected && !isAnswer && 'border-rose-400 bg-rose-50 text-rose-700 line-through',
                            isSubmitted && !selected && !isAnswer && 'border-stone-100 text-wood/35',
                            !isSubmitted && (selected ? theme.selected : `bg-white ${theme.softBorder}`),
                          )}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
              {isSubmitted && (
                <p className={cn('rounded-xl bg-emerald-50 px-3 py-2 font-serif text-emerald-900', text.small)}>
                  <span className="font-bold">{text.copy.correctSentence}: </span>{corrected}
                </p>
              )}
            </div>
          </div>
        );
      })}
      {!isSubmitted && <CheckButton enabled={complete} onClick={() => onSubmit(answers)} theme={theme} label={text.t('nav.check')} />}
    </div>
  );
};

/* ---------------------------------------------------------- sentence-building */

const SentenceBuilding = ({ exercise, isSubmitted, onSubmit, theme }: RendererProps) => {
  const text = useText();
  const chunks = exercise.sentenceChunks ?? [];
  const order = React.useMemo(
    () => presentDeranged(chunks.map((_, index) => index), `${exercise.id}:chunks`),
    [chunks, exercise.id],
  );
  const [built, setBuilt] = React.useState<number[]>([]);
  const builtTexts = built.map(index => chunks[index]);
  const result = isSubmitted ? (scoreLanguageItems(exercise, builtTexts) ?? [])[0] : undefined;
  const complete = built.length === chunks.length;

  return (
    <div className="space-y-4">
      <div
        className={cn(
          'min-h-20 rounded-2xl border-2 p-3 transition-colors',
          result === true ? 'border-emerald-400 bg-emerald-50' : result === false ? 'border-rose-300 bg-rose-50' : 'border-stone-200 bg-white',
        )}
      >
        {resultSr(result, text.isArabic)}
        {built.length === 0 ? (
          <p className={cn('py-3 text-center font-serif text-wood/40', text.small)}>{text.copy.buildHere}</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {built.map((chunkIndex, position) => (
              <button
                key={`${chunkIndex}-${position}`}
                type="button"
                disabled={isSubmitted}
                onClick={() => setBuilt(previous => previous.filter((_, index) => index !== position))}
                className={cn('min-h-10 rounded-lg border-2 px-3 py-1.5 font-serif font-semibold', text.isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base', theme.selected)}
              >
                {chunks[chunkIndex]}
              </button>
            ))}
          </div>
        )}
      </div>
      <div>
        <p className={cn('mb-2 font-display font-bold uppercase tracking-widest text-wood/45', text.small)}>{text.copy.pieces}</p>
        <div className="flex flex-wrap gap-2 rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 p-3">
          {order.map(chunkIndex => {
            const used = built.includes(chunkIndex);
            return (
              <button
                key={chunkIndex}
                type="button"
                disabled={isSubmitted || used}
                aria-hidden={used || undefined}
                onClick={() => setBuilt(previous => [...previous, chunkIndex])}
                className={cn(
                  'min-h-10 rounded-lg border-2 bg-white px-3 py-1.5 font-serif font-semibold',
                  text.isArabic ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
                  used ? 'border-dashed border-stone-200 text-transparent' : `${theme.softBorder} text-wood hover:bg-stone-50`,
                )}
              >
                {chunks[chunkIndex]}
              </button>
            );
          })}
        </div>
      </div>
      {isSubmitted && result === false && (
        <p className={cn('rounded-xl bg-emerald-50 px-3 py-2 font-serif text-emerald-900', text.small)}>
          <span className="font-bold">{text.copy.correctSentence}: </span>{sentenceBuildingAccepted(exercise)[0].join(' ')}
        </p>
      )}
      {!isSubmitted && <CheckButton enabled={complete} onClick={() => onSubmit(builtTexts)} theme={theme} label={text.t('nav.check')} />}
    </div>
  );
};

/* ------------------------------------------------------------- transformation */

const Transformation = ({ exercise, isSubmitted, onSubmit, theme }: RendererProps) => {
  const text = useText();
  const items = exercise.transformItems ?? [];
  const [typed, setTyped] = React.useState<string[]>(() => items.map(() => ''));
  const results = isSubmitted ? scoreLanguageItems(exercise, typed) ?? [] : [];
  const complete = typed.every(value => value.trim().length > 0);

  return (
    <div className="space-y-3">
      {items.map((item, itemIndex) => {
        const result = isSubmitted ? results[itemIndex] : undefined;
        return (
          <div key={itemIndex} className={cn(itemCard, 'flex gap-3')}>
            <ItemNumber index={itemIndex} result={result} />
            <div className="min-w-0 flex-1 space-y-3">
              {resultSr(result, text.isArabic)}
              <div className="rounded-xl bg-stone-50 px-3 py-2">
                <p className={cn('font-display font-bold uppercase tracking-widest text-wood/40', text.isArabic ? 'text-xs normal-case tracking-normal' : 'text-[10px]')}>{text.copy.original}</p>
                <p className={cn('font-serif italic text-wood/80', text.isArabic ? 'text-base sm:text-lg not-italic' : 'text-sm sm:text-base')}>{item.source}</p>
              </div>
              <p className={cn('font-display font-bold uppercase tracking-widest text-wood/40', text.isArabic ? 'text-xs normal-case tracking-normal' : 'text-[10px]')}>{text.copy.yourVersion}</p>
              <p className={cn('font-serif text-wood', text.body)}>
                {item.frame.split(GAP).map((part, partIndex) => {
                  if (!isGap(part)) return <React.Fragment key={partIndex}>{part}</React.Fragment>;
                  return (
                    <input
                      key={partIndex}
                      type="text"
                      dir="auto"
                      disabled={isSubmitted}
                      value={typed[itemIndex]}
                      placeholder={text.copy.typeHere}
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      onChange={event => setTyped(previous => previous.map((value, index) => (index === itemIndex ? event.target.value : value)))}
                      aria-label={`${text.copy.yourVersion} ${text.formatNumber(itemIndex + 1)}`}
                      className={cn(
                        'mx-1 min-w-36 max-w-full border-b-2 bg-transparent px-2 py-0.5 text-center font-bold outline-none placeholder:font-normal placeholder:text-wood/25',
                        result === true ? 'border-emerald-500 text-emerald-800' : result === false ? 'border-rose-500 text-rose-700' : theme.softBorder,
                      )}
                    />
                  );
                })}
              </p>
              {result === false && (
                <p className={cn('rounded-xl bg-emerald-50 px-3 py-2 font-serif text-emerald-900', text.small)}>
                  <span className="font-bold">{text.copy.correctForm}: </span>{item.answers[0]}
                </p>
              )}
            </div>
          </div>
        );
      })}
      {!isSubmitted && <CheckButton enabled={complete} onClick={() => onSubmit(typed)} theme={theme} label={text.t('nav.check')} />}
    </div>
  );
};

export const LanguageItemExercise = (props: RendererProps) => {
  switch (props.exercise.type) {
    case 'choose-form': return <ChooseForm {...props} />;
    case 'word-bank': return <WordBank {...props} />;
    case 'error-correction': return <ErrorCorrection {...props} />;
    case 'sentence-building': return <SentenceBuilding {...props} />;
    case 'transformation': return <Transformation {...props} />;
    default: return null;
  }
};
