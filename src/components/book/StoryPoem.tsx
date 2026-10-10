// Poems in the story text ([POEM] / [POEM_GRID], Yunus Emre): the poem card and the parser (moved from StoryPage.tsx).
// Poems that follow each other with only a short lead-in line between them share one card (useStoryText groups them):
// one language switch for the whole card, the lead-in inside it, a small gold dot between poems.
import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../contexts/LanguageContext';

export interface PoemCardItem {
  key: string;
  /** The short story sentence that introduces this poem, already rendered (Word Notes included). */
  lead?: React.ReactNode;
  /** Translation lines, already rendered with Word Notes. */
  lines: React.ReactNode[];
  /** Original Turkish lines (never voiced). */
  original: string[];
  compact?: boolean;
}

const GOLD_TEXT = 'text-[#7a6534]';

export const PoemCard = ({ items, fontSize }: { items: PoemCardItem[]; fontSize: number }) => {
  const { isRTL, t, formatNumber } = useLanguage();
  const [showOriginal, setShowOriginal] = useState(false);
  const hasOriginal = items.some(item => item.original.length > 0);
  const count = items.length;
  const transFont = isRTL ? "'Arakom', sans-serif" : "'Poppins', sans-serif";
  const poet = t('poem.poet');

  // Arabic script reads smaller than Latin at the same size, so Arabic poems get one step more.
  const poemFontSize = (compact?: boolean) => {
    const scale = (compact ? 1.08 : 1.18) * (isRTL ? 1.12 : 1);
    return `clamp(${isRTL ? '1.05rem' : '0.95rem'}, 0.8rem + 0.6vw, ${(fontSize * scale * 1.3333).toFixed(1)}px)`;
  };

  // A poem with no lead-in sits beside the one before it when the card is wide enough.
  const rows: { lead?: React.ReactNode; items: PoemCardItem[] }[] = [];
  items.forEach(item => {
    const last = rows[rows.length - 1];
    if (last && !item.lead && last.items.length < 2) last.items.push(item);
    else rows.push({ lead: item.lead, items: [item] });
  });

  const dot = (
    <div aria-hidden className="flex items-center justify-center gap-3 my-5">
      <span className="h-px w-12 bg-gold/50" />
      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
      <span className="h-px w-12 bg-gold/50" />
    </div>
  );

  const renderPoem = (item: PoemCardItem) => {
    const original = showOriginal && item.original.length > 0;
    return (
      <div
        lang={original ? 'tr' : isRTL ? 'ar' : 'en'}
        dir={original ? 'ltr' : isRTL ? 'rtl' : 'ltr'}
        className="space-y-2 text-ink select-text selection:bg-gold/20"
        style={{
          fontSize: poemFontSize(item.compact),
          fontFamily: original ? "'Poppins', sans-serif" : transFont,
          lineHeight: isRTL && !original ? 1.9 : 1.55,
        }}
      >
        {(original ? item.original : item.lines).map((line, idx) => (
          <div key={idx} className="font-medium [text-wrap:balance]">{line}</div>
        ))}
      </div>
    );
  };

  return (
    <figure
      data-poem
      className="@container my-6 clear-both relative rounded-2xl px-5 md:px-10 pt-4 pb-5 text-center border-y-[3px] border-double border-gold/70"
      style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,247,222,0.95), rgba(244,241,234,0.9) 60%, rgba(239,234,222,0.9))' }}
    >
      {count > 1 && (
        <div className={cn('text-[12px] font-semibold uppercase mb-2', GOLD_TEXT, !isRTL && 'tracking-[0.12em]')} style={{ fontFamily: transFont }}>
          {poet} · {count === 2 ? t('poem.versesTwo') : t('poem.verses').replace('{count}', formatNumber(count))}
        </div>
      )}

      {hasOriginal ? (
        <div className="mb-4 flex justify-center">
          <div role="group" aria-label={t('poem.languageLabel')} className="inline-flex rounded-full bg-white/70 border border-gold/40 p-0.5 text-[13px] font-medium">
            {[
              { original: false, label: t('poem.translation'), font: transFont },
              { original: true, label: 'Türkçe', font: "'Poppins', sans-serif", lang: 'tr' },
            ].map(option => (
              <button
                key={String(option.original)}
                type="button"
                lang={option.lang}
                aria-pressed={showOriginal === option.original}
                onClick={() => setShowOriginal(option.original)}
                className={cn(
                  'min-h-8 px-3.5 py-1 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-605',
                  showOriginal === option.original ? 'bg-sky-850 text-white' : 'text-slate-600 hover:text-ink',
                )}
                style={{ fontFamily: option.font }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-3" />
      )}

      {rows.map((row, rowIdx) => (
        <React.Fragment key={row.items[0].key}>
          {rowIdx > 0 && dot}
          {row.lead && (
            <div className="mb-3 mx-auto max-w-[36rem] text-slate-600 [&_p]:mb-0 [&_p]:!text-center" style={{ fontSize: '0.86em', lineHeight: 1.6 }}>
              {row.lead}
            </div>
          )}
          <div className={cn('grid gap-5', row.items.length > 1 && '@xl:grid-cols-2 @xl:gap-8')}>
            {row.items.map((item, idx) => (
              <React.Fragment key={item.key}>
                {idx > 0 && <div className="@xl:hidden -my-5">{dot}</div>}
                <div className={cn(idx > 0 && '@xl:border-s @xl:border-gold/40 @xl:ps-8')}>{renderPoem(item)}</div>
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}

      {count === 1 && (
        <figcaption className={cn('mt-4 text-[13px] tracking-wide', GOLD_TEXT)} style={{ fontFamily: transFont }}>{poet}</figcaption>
      )}
    </figure>
  );
};

const normalizePoemLabel = (line: string) =>
  line
    .replace(/[ً-ٰٟ]/g, '')
    .trim()
    .toLowerCase();

const cleanPoemText = (lines: string[]) => {
  const text = lines
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && !/^\/\/\s*c\d+[ab]?$/i.test(line))
    .join('\n')
    .trim();

  return text
    .replace(/^[“"«]\s*/, '')
    .replace(/\s*[”"»](?=\s*[.!?،؛]?\s*$)/, '')
    .trim();
};

export const parsePoem = (part: string) => {
  const body = part
    .replace(/^\[POEM(?:\s+compact)?\]\s*/i, '')
    .replace(/\s*\[\/POEM\]$/i, '')
    .trim();
  const lines = body.split('\n');
  const translationLabelIndex = lines.findIndex((line) => {
    const label = normalizePoemLabel(line);
    return label === 'english:' || label === 'arabic:' || label === 'العربية:';
  });
  const turkishLabelIndex = lines.findIndex((line) => {
    const label = normalizePoemLabel(line);
    return label === 'turkish:' || label === 'التركية:';
  });

  if (turkishLabelIndex >= 0) {
    const translationStart = translationLabelIndex >= 0 ? translationLabelIndex + 1 : 0;
    return {
      translation: cleanPoemText(lines.slice(translationStart, turkishLabelIndex)),
      original: cleanPoemText(lines.slice(turkishLabelIndex + 1)),
    };
  }

  const translationStart = translationLabelIndex >= 0 ? translationLabelIndex + 1 : 0;
  return {
    translation: cleanPoemText(lines.slice(translationStart)),
    original: undefined,
  };
};
