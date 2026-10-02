import React, { useMemo, useRef, useState } from 'react';
import { Compass, Target } from '../../components/ui/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import type { PageData } from '../../types';
import { GROUP_COLORS, GROUP_OF_KIND, GROUP_ORDER, tint, type EntityGroup } from './categories';
import { EntityMap } from './EntityMap';
import { LearnerName } from './LearnerNameLine';
import { MapGame } from './MapGame';
import { MEDITERRANEAN_MAP_ASPECT, mediterraneanContextMap } from './mediterraneanMap';
import {
  getBookEntityIndex,
  isHistoricalEntityBookKey,
  resolveHistoricalCopy,
  resolveHistoricalMapAsset,
  type BookEntityEntry,
} from './registry';

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
    } satisfies Record<EntityGroup, string>,
    chapter: 'Chapter',
    chapters: 'Chapters',
    chapterShort: 'Ch.',
    places: 'places',
    names: 'names',
    noMap: 'This card has no map.',
    play: 'Find it on the map',
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
    } satisfies Record<EntityGroup, string>,
    chapter: 'الفصل',
    chapters: 'الفصول',
    chapterShort: 'ف',
    places: 'مكانًا',
    names: 'اسمًا',
    noMap: 'ليس لهذه البطاقة خريطة.',
    play: 'Find it on the map',
  },
};

const aspectRatioOf = (aspect: string) => {
  const [width, height] = aspect.split('/').map(part => Number(part.trim()));
  return width && height ? width / height : 4 / 3;
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

  const [activeGroup, setActiveGroup] = useState<EntityGroup | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string | undefined>(() => entries[0]?.entity.id);
  const [playing, setPlaying] = useState(false);

  const selected = entries.find(entry => entry.entity.id === selectedId) ?? entries[0];
  if (!selected) return null;

  const selectedCopy = resolveHistoricalCopy(selected.entity, locale);
  const selectedMap = resolveHistoricalMapAsset(selected.entity, locale);
  const selectedColors = GROUP_COLORS[GROUP_OF_KIND[selected.entity.kind]];
  const placeCount = entries.filter(entry => GROUP_OF_KIND[entry.entity.kind] !== 'people').length;
  const nameCount = entries.length - placeCount;
  const mapAspect = selected.entity.mapAspect ?? MEDITERRANEAN_MAP_ASPECT;
  // On large screens the map takes the room left above the details: as wide as
  // the column allows, and never taller than the space it sits in.
  const gameMapClassName = 'w-full lg:w-[min(100cqw,calc(100cqh*var(--map-ratio)))]';
  const mapClassName = 'w-full lg:w-[min(100cqw,calc((100cqh-10.5rem)*var(--map-ratio)))]';
  const mapStyle = { '--map-ratio': aspectRatioOf(mapAspect) } as React.CSSProperties;

  const markers = entries
    .filter(entry => entry.entity.focus?.mode === 'point' && entry.entity.id !== selected.entity.id)
    .map(entry => ({
      id: entry.entity.id,
      x: entry.entity.focus!.x,
      y: entry.entity.focus!.y,
      color: tint(GROUP_COLORS[GROUP_OF_KIND[entry.entity.kind]].base, 0.75),
    }));

  const select = (id: string) => {
    setSelectedId(id);
    setPlaying(false);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      window.setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
    }
  };

  const chapterLine = (chapters: number[]) =>
    `${chapters.length > 1 ? text.chapters : text.chapter} ${chapters.map(chapter => formatNumber(chapter)).join(', ')}`;

  const showAll = activeGroup === 'all';
  const visibleEntries = (showAll ? grouped : grouped.filter(group => group.key === activeGroup)).flatMap(group => group.entries);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar lg:overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="flex flex-col gap-3 pb-2 lg:h-full lg:pb-5">
        <section className="relative overflow-hidden rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/95 via-white/80 to-brand-50/70 px-4 py-2 shadow-sm">
          <div className="relative flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white shadow-md">
              <Compass size={20} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-teal-800 sm:text-[11px]">{text.eyebrow}</div>
              <h2 className="text-lg font-black leading-tight tracking-tight text-brand-950 sm:text-xl">{page.title}</h2>
            </div>
            <p className="hidden max-w-md text-sm leading-snug text-wood/65 xl:block [@media(max-height:820px)]:hidden">{page.content}</p>
            <p className="hidden shrink-0 text-xs font-bold text-teal-800/80 sm:block">
              {formatNumber(placeCount)} {text.places} · {formatNumber(nameCount)} {text.names}
            </p>
            <button
              type="button"
              onClick={() => {
                setPlaying(value => !value);
                if (window.matchMedia('(max-width: 1023px)').matches) {
                  window.setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
                }
              }}
              aria-pressed={playing}
              aria-label={text.play}
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold shadow-sm transition-colors',
                playing ? 'bg-teal-900 text-white' : 'bg-teal-700 text-white hover:bg-teal-800',
              )}
            >
              <Target size={15} />
              <span className="hidden sm:inline">{text.play}</span>
            </button>
          </div>
        </section>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-3 lg:min-h-0 lg:flex-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] min-[1800px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div ref={detailRef} className="scroll-mt-3 lg:min-h-0">
            <section className="flex flex-col rounded-2xl border border-black/5 bg-white/55 p-3 shadow-sm backdrop-blur-sm lg:h-full lg:[container-type:size]">
              {playing ? (
                <MapGame
                  entries={entries}
                  mapSrc={mediterraneanContextMap}
                  aspect={MEDITERRANEAN_MAP_ASPECT}
                  locale={locale}
                  mapClassName={gameMapClassName}
                  mapStyle={{ '--map-ratio': aspectRatioOf(MEDITERRANEAN_MAP_ASPECT) } as React.CSSProperties}
                  onClose={() => setPlaying(false)}
                />
              ) : (
                <>
                  <div className="flex justify-center">
                    <EntityMap
                      src={selectedMap ?? mediterraneanContextMap}
                      alt={selectedMap ? selectedCopy.mapAlt : ''}
                      focus={selectedMap ? selected.entity.focus : undefined}
                      showFocus={Boolean(selectedMap && selected.entity.showFocus)}
                      aspect={mapAspect}
                      color={selectedColors.base}
                      label={selectedCopy.title}
                      markers={markers}
                      onMarkerClick={select}
                      className={mapClassName}
                      style={mapStyle}
                    />
                  </div>
                  <div className="px-1 pt-3" aria-live="polite">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em]" style={{ color: selectedColors.base }}>
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: selectedColors.base }} />
                          {selectedCopy.kindLabel}
                        </span>
                        <h3 className="font-display text-xl font-bold leading-tight text-brand-950">
                          {selectedCopy.title}
                          <LearnerName entity={selected.entity} className="text-wood/80" />
                        </h3>
                      </div>
                      <span
                        className="shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                        style={{ borderColor: tint(selectedColors.base, 0.25), backgroundColor: tint(selectedColors.base, 0.08), color: selectedColors.base }}
                      >
                        {selectedCopy.periodLabel}
                      </span>
                    </div>
                    <p className="mt-1.5 font-serif text-[15px] leading-snug text-wood/90 xl:text-base">{selectedCopy.summary}</p>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-wood/55">
                      <span className="font-bold">{chapterLine(selected.chapters)}</span>
                      <span>{selectedMap ? selectedCopy.approximateLabel : text.noMap}</span>
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>

          <section className="flex flex-col rounded-2xl border border-black/5 bg-white/45 p-3 shadow-sm backdrop-blur-sm lg:min-h-0">
            <div className="flex shrink-0 gap-1.5 overflow-x-auto pb-1.5 custom-scrollbar">
              {(['all', ...grouped.map(group => group.key)] as const).map(key => {
                const count = key === 'all' ? entries.length : grouped.find(group => group.key === key)?.entries.length ?? 0;
                const color = key === 'all' ? undefined : GROUP_COLORS[key].base;
                const active = activeGroup === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveGroup(key)}
                    className={cn(
                      'inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-all xl:text-xs',
                      active ? 'text-white shadow-sm' : 'bg-white/70 text-wood/85 hover:bg-white',
                    )}
                    style={{
                      borderColor: color ? tint(color, active ? 1 : 0.25) : active ? '#0f766e' : 'rgba(15,118,110,0.15)',
                      backgroundColor: active ? color ?? '#0f766e' : undefined,
                    }}
                  >
                    {color && !active && <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />}
                    {key === 'all' ? text.all : text.groups[key]} <span className="opacity-70">· {formatNumber(count)}</span>
                  </button>
                );
              })}
            </div>

            {/* One colour-coded grid: the filter chips above are the legend. With every
                place shown, the rows share the column height so the list fills the screen. */}
            <div className="mt-1.5 lg:min-h-0 lg:flex-1 lg:overflow-y-auto custom-scrollbar">
              <div className={cn('grid grid-cols-2 gap-1.5 lg:grid-cols-3 [@media(max-height:820px)]:gap-1', showAll && 'lg:h-full lg:[grid-auto-rows:minmax(min-content,1fr)]')}>
                {visibleEntries.map(entry => {
                  const color = GROUP_COLORS[GROUP_OF_KIND[entry.entity.kind]].base;
                  const copy = resolveHistoricalCopy(entry.entity, locale);
                  const isActive = entry.entity.id === selected.entity.id && !playing;
                  return (
                    <button
                      key={entry.entity.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => select(entry.entity.id)}
                      className={cn(
                        'flex items-center rounded-lg border border-black/5 border-s-[3px] px-2.5 py-1 text-start transition-all [@media(max-height:820px)]:py-0.5',
                        isActive ? 'shadow-sm' : 'bg-white/75 hover:bg-white',
                      )}
                      style={{
                        borderInlineStartColor: color,
                        ...(isActive ? { backgroundColor: tint(color, 0.12), boxShadow: `0 0 0 2px ${tint(color, 0.4)}` } : {}),
                      }}
                    >
                      <span className="flex w-full items-baseline justify-between gap-2">
                        <span className="min-w-0 font-display text-[13px] font-bold leading-tight text-brand-950 min-[1800px]:text-[15px] [@media(max-height:820px)]:text-[12px]">
                          {copy.title}
                          <LearnerName entity={entry.entity} className="text-wood/75" />
                        </span>
                        <span className="shrink-0 text-[10px] leading-tight text-wood/55 min-[1800px]:text-[11px]" title={chapterLine(entry.chapters)}>
                          {text.chapterShort} {entry.chapters.map(chapter => formatNumber(chapter)).join(', ')}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PlacesPage;
