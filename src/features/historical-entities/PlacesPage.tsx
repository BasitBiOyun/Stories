import React, { useMemo, useRef, useState } from 'react';
import { Compass, Users } from '../../components/ui/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import type { PageData } from '../../types';
import { EntityMap } from './EntityMap';
import { LearnerName } from './LearnerNameLine';
import { mediterraneanContextMap } from './mediterraneanMap';
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
    places: 'places',
    names: 'names',
    noMap: 'This card is about people, so it has no map.',
    tapHint: 'Tap a name in the list or a dot on the map.',
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
    places: 'مكانًا',
    names: 'اسمًا',
    noMap: 'هذه البطاقة عن أشخاص، فليس لها خريطة.',
    tapHint: 'اضغط اسمًا في القائمة أو نقطة على الخريطة.',
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
      <div className="flex flex-col gap-3 pb-6">
        <section className="relative overflow-hidden rounded-[1.6rem] border border-brand-200/70 bg-gradient-to-br from-brand-50/95 via-white/80 to-brand-50/70 px-4 py-4 sm:px-5 shadow-sm">
          <div className="absolute -top-16 -right-12 h-44 w-44 rounded-full bg-teal-300/20 blur-3xl pointer-events-none" />
          <div className="relative flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-lg sm:h-12 sm:w-12">
              <Compass size={23} />
            </div>
            <div className="min-w-0">
              <div className="mb-1 text-[11px] font-black uppercase tracking-[0.18em] text-teal-800 sm:text-xs">
                {text.eyebrow}
              </div>
              <h2 className="text-2xl font-black leading-none tracking-tight text-brand-950 sm:text-3xl">{page.title}</h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-wood/65 sm:text-[15px]">{page.content}</p>
              <p className="mt-2 text-xs font-bold text-teal-800/80">
                {formatNumber(placeCount)} {text.places} · {formatNumber(nameCount)} {text.names}
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
          <div ref={detailRef} className="scroll-mt-3 lg:sticky lg:top-0">
            <section className="rounded-2xl border border-black/5 bg-white/55 p-3 shadow-sm backdrop-blur-sm">
              <EntityMap
                src={selectedMap ?? mediterraneanContextMap}
                alt={selectedMap ? selectedCopy.mapAlt : ''}
                focus={selectedMap ? selected.entity.focus : undefined}
                showFocus={Boolean(selectedMap && selected.entity.showFocus)}
                label={selectedCopy.title}
                markers={markers}
                onMarkerClick={select}
              />
              <div className="px-1 pt-3" aria-live="polite">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className="block text-[11px] font-black uppercase tracking-[0.16em] text-teal-800/80">
                      {selectedCopy.kindLabel}
                    </span>
                    <h3 className="mt-0.5 font-display text-xl font-bold text-brand-950 sm:text-2xl">
                      {selectedCopy.title}
                      <LearnerName entity={selected.entity} className="text-wood/80" />
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-teal-700/15 bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-900/80">
                    {selectedCopy.periodLabel}
                  </span>
                </div>
                <p className="mt-2.5 font-serif text-[15px] leading-relaxed text-wood/90 sm:text-base">{selectedCopy.summary}</p>
                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-wood/55">
                  <span className="font-bold">{chapterLine(selected.chapters)}</span>
                  <span>{selectedMap ? selectedCopy.approximateLabel : text.noMap}</span>
                </div>
              </div>
            </section>
          </div>

          <section className="rounded-2xl border border-black/5 bg-white/45 p-3 shadow-sm backdrop-blur-sm">
            <div className="flex gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
              {(['all', ...grouped.map(group => group.key)] as const).map(key => {
                const count = key === 'all' ? entries.length : grouped.find(group => group.key === key)?.entries.length ?? 0;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveGroup(key)}
                    className={cn(
                      'whitespace-nowrap rounded-xl border px-3 py-2 text-xs font-bold transition-all',
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
            <p className="px-1 pt-1.5 text-[11px] text-wood/55">{text.tapHint}</p>

            <div className="mt-2 flex flex-col gap-4">
              {visibleGroups.map(group => (
                <div key={group.key}>
                  <h4 className="mb-1.5 flex items-center gap-1.5 px-1 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-900/70">
                    {group.key === 'people' && <Users size={13} />}
                    {text.groups[group.key]}
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
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
                            'min-h-11 rounded-xl border px-3 py-2 text-start transition-all',
                            isActive
                              ? 'border-teal-600 bg-teal-50 shadow-sm ring-2 ring-teal-600/15'
                              : 'border-black/5 bg-white/70 hover:border-teal-600/40 hover:bg-white',
                          )}
                        >
                          <span className="block font-display text-[15px] font-bold leading-tight text-brand-950">
                            {copy.title}
                            <LearnerName entity={entry.entity} className="text-wood/80" />
                          </span>
                          <span className="mt-0.5 block text-[11px] text-wood/60">{chapterLine(entry.chapters)}</span>
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
