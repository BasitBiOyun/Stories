import React, { useMemo, useRef, useState } from 'react';
import { Compass, Users } from '../../components/ui/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import type { PageData } from '../../types';
import { EntityMap } from './EntityMap';
import { LearnerName } from './LearnerNameLine';
import { MEDITERRANEAN_MAP_ASPECT, mediterraneanContextMap } from './mediterraneanMap';
import {
  getBookEntityIndex,
  isHistoricalEntityBookKey,
  resolveHistoricalCopy,
  resolveHistoricalMapAsset,
  type BookEntityEntry,
} from './registry';
import type { HistoricalEntityKind } from './types';

type GroupKey = 'cities' | 'lands' | 'water' | 'buildings' | 'people';

const GROUP_OF_KIND: Record<HistoricalEntityKind, GroupKey> = {
  city: 'cities',
  region: 'lands',
  country: 'lands',
  kingdom: 'lands',
  empire: 'lands',
  sea: 'water',
  river: 'water',
  island: 'water',
  landmark: 'buildings',
  people: 'people',
  tribe: 'people',
  dynasty: 'people',
  person: 'people',
};

const GROUP_ORDER: GroupKey[] = ['cities', 'lands', 'water', 'buildings', 'people'];

const COPY = {
  en: {
    eyebrow: 'Book atlas',
    all: 'All',
    groups: {
      cities: 'Cities',
      lands: 'Lands and regions',
      water: 'Seas, rivers and islands',
      buildings: 'Buildings',
      people: 'People and rulers',
    } satisfies Record<GroupKey, string>,
    chapter: 'Chapter',
    chapters: 'Chapters',
    chapterShort: 'Ch.',
    places: 'places',
    names: 'names',
    noMap: 'This card is about people, so it has no map.',
  },
  ar: {
    eyebrow: 'أطلس الكتاب',
    all: 'الكل',
    groups: {
      cities: 'المدن',
      lands: 'البلاد والمناطق',
      water: 'البحار والأنهار والجزر',
      buildings: 'المباني',
      people: 'الناس والحكّام',
    } satisfies Record<GroupKey, string>,
    chapter: 'الفصل',
    chapters: 'الفصول',
    chapterShort: 'ف',
    places: 'مكانًا',
    names: 'اسمًا',
    noMap: 'هذه البطاقة عن أشخاص، فليس لها خريطة.',
  },
};

export const PlacesPage = ({ page }: { page: PageData }) => {
  const { language, formatNumber, isRTL } = useLanguage();
  const locale = language === 'ar' ? 'ar' : 'en';
  const text = COPY[locale];
  const detailRef = useRef<HTMLDivElement>(null);

  const entries = useMemo<BookEntityEntry[]>(
    () => (isHistoricalEntityBookKey(page.entityBookKey) ? getBookEntityIndex(page.entityBookKey) : []),
    [page.entityBookKey],
  );
  const grouped = useMemo(() => GROUP_ORDER.map(key => ({
    key,
    entries: entries.filter(entry => GROUP_OF_KIND[entry.entity.kind] === key),
  })).filter(group => group.entries.length > 0), [entries]);

  const [activeGroup, setActiveGroup] = useState<GroupKey | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string | undefined>(() => entries[0]?.entity.id);

  const selected = entries.find(entry => entry.entity.id === selectedId) ?? entries[0];
  if (!selected) return null;

  const selectedCopy = resolveHistoricalCopy(selected.entity, locale);
  const selectedMap = resolveHistoricalMapAsset(selected.entity, locale);
  const placeCount = entries.filter(entry => GROUP_OF_KIND[entry.entity.kind] !== 'people').length;
  const nameCount = entries.length - placeCount;

  const markers = entries
    .filter(entry => entry.entity.focus?.mode === 'point' && entry.entity.id !== selected.entity.id)
    .map(entry => ({ id: entry.entity.id, x: entry.entity.focus!.x, y: entry.entity.focus!.y }));

  const select = (id: string) => {
    setSelectedId(id);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      window.setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
    }
  };

  const chapterLine = (chapters: number[]) =>
    `${chapters.length > 1 ? text.chapters : text.chapter} ${chapters.map(chapter => formatNumber(chapter)).join(', ')}`;

  const visibleGroups = activeGroup === 'all' ? grouped : grouped.filter(group => group.key === activeGroup);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex flex-col gap-2.5 pb-1">
        <section className="relative overflow-hidden rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/95 via-white/80 to-brand-50/70 px-3.5 py-1.5 shadow-sm sm:px-4">
          <div className="relative flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white shadow-md">
              <Compass size={19} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-teal-800 sm:text-[11px]">{text.eyebrow}</div>
              <h2 className="text-lg font-black leading-tight tracking-tight text-brand-950 sm:text-xl">{page.title}</h2>
            </div>
            <p className="hidden max-w-md text-sm leading-snug text-wood/65 md:block">{page.content}</p>
            <p className="shrink-0 text-xs font-bold text-teal-800/80">
              {formatNumber(placeCount)} {text.places} · {formatNumber(nameCount)} {text.names}
            </p>
          </div>
        </section>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-2.5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div ref={detailRef} className="scroll-mt-3 lg:sticky lg:top-0">
            <section className="rounded-2xl border border-black/5 bg-white/55 p-2.5 shadow-sm backdrop-blur-sm">
              <EntityMap
                src={selectedMap ?? mediterraneanContextMap}
                alt={selectedMap ? selectedCopy.mapAlt : ''}
                focus={selectedMap ? selected.entity.focus : undefined}
                showFocus={Boolean(selectedMap && selected.entity.showFocus)}
                aspect={selected.entity.mapAspect ?? MEDITERRANEAN_MAP_ASPECT}
                label={selectedCopy.title}
                markers={markers}
                onMarkerClick={select}
              />
              <div className="px-1 pt-2.5" aria-live="polite">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="block text-[10px] font-black uppercase tracking-[0.16em] text-teal-800/80">
                      {selectedCopy.kindLabel}
                    </span>
                    <h3 className="font-display text-lg font-bold leading-tight text-brand-950 sm:text-xl">
                      {selectedCopy.title}
                      <LearnerName entity={selected.entity} className="text-wood/80" />
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-teal-700/15 bg-teal-50 px-2.5 py-0.5 text-[11px] font-semibold text-teal-900/80">
                    {selectedCopy.periodLabel}
                  </span>
                </div>
                <p className="mt-1.5 font-serif text-[15px] leading-snug text-wood/90">{selectedCopy.summary}</p>
                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-wood/55">
                  <span className="font-bold">{chapterLine(selected.chapters)}</span>
                  <span>{selectedMap ? selectedCopy.approximateLabel : text.noMap}</span>
                </div>
              </div>
            </section>
          </div>

          <section className="rounded-2xl border border-black/5 bg-white/45 p-2.5 shadow-sm backdrop-blur-sm">
            <div className="flex gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
              {(['all', ...grouped.map(group => group.key)] as const).map(key => {
                const count = key === 'all' ? entries.length : grouped.find(group => group.key === key)?.entries.length ?? 0;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveGroup(key)}
                    className={cn(
                      'whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-all',
                      activeGroup === key
                        ? 'border-teal-700 bg-teal-700 text-white shadow-sm'
                        : 'border-teal-700/15 bg-white/60 text-teal-900 hover:bg-white',
                    )}
                  >
                    {key === 'all' ? text.all : text.groups[key]} <span className="opacity-70">· {formatNumber(count)}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-1 flex flex-col gap-1.5">
              {visibleGroups.map(group => (
                <div key={group.key}>
                  <h4 className="mb-0.5 flex items-center gap-1.5 px-1 font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-900/70">
                    {group.key === 'people' && <Users size={12} />}
                    {text.groups[group.key]}
                  </h4>
                  <div className="grid grid-cols-2 gap-1 lg:grid-cols-3">
                    {group.entries.map(entry => {
                      const copy = resolveHistoricalCopy(entry.entity, locale);
                      const isActive = entry.entity.id === selected.entity.id;
                      return (
                        <button
                          key={entry.entity.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => select(entry.entity.id)}
                          className={cn(
                            'rounded-lg border px-2 py-1 text-start transition-all',
                            isActive
                              ? 'border-teal-600 bg-teal-50 shadow-sm ring-2 ring-teal-600/15'
                              : 'border-black/5 bg-white/70 hover:border-teal-600/40 hover:bg-white',
                          )}
                        >
                          <span className="flex items-baseline justify-between gap-2">
                            <span className="min-w-0 font-display text-[13px] font-bold leading-tight text-brand-950">
                              {copy.title}
                              <LearnerName entity={entry.entity} className="text-wood/75" />
                            </span>
                            <span className="shrink-0 text-[10px] leading-tight text-wood/55" title={chapterLine(entry.chapters)}>
                              {text.chapterShort} {entry.chapters.map(chapter => formatNumber(chapter)).join(', ')}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PlacesPage;
