import { useEffect, useRef, useState, type PointerEvent } from 'react';
import type { Hotspot, PageData } from '../types';
import { api, fileToBase64, type MediaItem } from './api';
import { TextField, type EditContext } from './FieldEditor';
import { IconPlus, IconSound, IconTrash, IconUpload, IconWarn } from './icons';
import { chapterFiles, forgetChapterFiles, newChapterPath, storagePathOf, thumb, type ChapterFile, type MediaKind } from './media';
import { getState, mayEditPath, refreshBasket, setState, toast, updateDraft, useStore } from './store';
import { confirm } from './ui';
import { bookPath, editionOf, getIn, setIn, TTS_PATH } from './util';

/**
 * The picture and the two recordings of one chapter.
 *
 * The app finds a chapter's picture and recordings by looking through the book's Storage folders
 * (media.ts), so a new file replaces the one it finds there. Until an admin publishes the basket,
 * the new file waits in a separate folder and only the panel's preview shows it.
 */

interface Props {
  storyId: string;
  level: string;
  language: 'en' | 'ar';
  page: PageData;
  pageIndex: number;
  focusPictures?: boolean;
}

interface NarrationRequest {
  id: string;
  enabled: boolean;
  allowOverwrite: boolean;
  chapterNumber: number;
  storagePath: string;
  narrationText: string;
  /** The chapter text on screen this recording stands for, when the read text differs on purpose
   * (a pronunciation spelling, a [calm] tag) or only in what is not heard (spelling, parentheses). */
  bookText?: string;
}

/** The chapter's file in Storage: undefined while looking, null when there is none. */
const useChapterFile = (storyId: string, level: string, kind: MediaKind, chapter: number, revision: number) => {
  const [file, setFile] = useState<ChapterFile | null | undefined>(undefined);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let live = true;
    setFile(undefined);
    setFailed(false);
    chapterFiles(storyId, level, kind)
      .then(files => live && setFile(files[chapter] ?? null))
      .catch(() => live && setFailed(true));
    return () => {
      live = false;
    };
  }, [storyId, level, kind, chapter, revision]);
  return [file, failed] as const;
};

const LOOK_FAILED = 'Storage’a şu an bakılamadı. Sayfayı yenileyip tekrar deneyin.';

const extensionOf = (name: string, fallback: string) => (/\.([a-z0-9]+)$/i.exec(name)?.[1] ?? fallback).toLowerCase();

const upload = async (file: File, target: string, label: string, edition: string, chapter: number) => {
  if (!getState().config?.storage) {
    toast('Dosya yükleme henüz açık değil: panelin Storage bağlantısı kurulmadı.', 'bad');
    return false;
  }
  if (file.size > 30 * 1024 * 1024) {
    toast('Dosya 30 MB’tan büyük olamaz.', 'bad');
    return false;
  }
  try {
    const contentType = file.type || (/\.mp3$/i.test(file.name) ? 'audio/mpeg' : /\.m4a$/i.test(file.name) ? 'audio/mp4' : '');
    const result = await api.upload({ name: file.name, contentType, data: await fileToBase64(file), target, label, edition, chapter });
    setState(current => ({ basket: current.basket ? { ...current.basket, media: result.media } : current.basket }));
    void refreshBasket();
    toast('Yüklendi. Önizlemede görünüyor; yöneticinin onayıyla uygulamaya geçer.', 'good');
    return true;
  } catch (error) {
    toast((error as Error).message, 'bad');
    return false;
  }
};

export const PageMedia = ({ storyId, level, language, page, pageIndex, focusPictures }: Props) => {
  const [revision, setRevision] = useState(0);
  const chapter = page.id;
  const media = useStore(state => state.basket?.media ?? []);
  const isStory = page.type === 'story';
  if (!isStory) return <p className="muted">Resim ve ses sadece hikâye bölümlerinde var.</p>;
  return (
    <div>
      <Picture
        storyId={storyId}
        level={level}
        language={language}
        page={page}
        pageIndex={pageIndex}
        chapter={chapter}
        media={media}
        revision={revision}
        onUploaded={() => setRevision(value => value + 1)}
      />
      {!focusPictures && (
        <>
          <Recording
            storyId={storyId}
            level={level}
            language="en"
            chapter={chapter}
            pageIndex={pageIndex}
            media={media}
            revision={revision}
          />
          <Recording
            storyId={storyId}
            level={level}
            language="ar"
            chapter={chapter}
            pageIndex={pageIndex}
            media={media}
            revision={revision}
          />
        </>
      )}
    </div>
  );
};

// --- the picture and its points -----------------------------------------------------------------

const Picture = ({
  storyId,
  level,
  language,
  page,
  pageIndex,
  chapter,
  media,
  revision,
  onUploaded,
}: Props & { chapter: number; media: MediaItem[]; revision: number; onUploaded: () => void }) => {
  const [found, lookFailed] = useChapterFile(storyId, level, 'image', chapter, revision);
  const [chosen, setChosen] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const picture = useRef<HTMLDivElement>(null);
  const dragging = useRef<number | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const enFile = bookPath(editionOf(storyId, level, 'en'));
  const arFile = bookPath(editionOf(storyId, level, 'ar'));
  const file = bookPath(editionOf(storyId, level, language));
  const readOnly = !mayEditPath(file);
  const target = found?.path ?? storagePathOf(page.image) ?? null;
  const waiting = media.find(
    item =>
      item.kind === 'image' &&
      (item.target === target || (item.chapter === chapter && item.edition.startsWith(`${storyId}-${level.toLowerCase()}-`))),
  );
  const shown = waiting?.url ?? found?.url ?? page.image;
  const hotspots = page.hotspots ?? [];
  const spotsPath = ['book', 'pages', pageIndex, 'hotspots'];

  // A point's place is the same in both languages; its words are per language.
  const moveSpot = (id: string, x: number, y: number) => {
    for (const path of [enFile, arFile]) {
      if (!mayEditPath(path) || !getState().drafts[path]) continue;
      updateDraft(path, value => {
        const list = (getIn(value, spotsPath) as Hotspot[] | undefined) ?? [];
        if (!list.some(spot => spot.id === id)) return value;
        return setIn(
          value,
          spotsPath,
          list.map(spot => (spot.id === id ? { ...spot, x, y } : spot)),
        );
      });
    }
  };
  const setSpots = (path: string, change: (list: Hotspot[]) => Hotspot[]) =>
    updateDraft(path, value => setIn(value, spotsPath, change((getIn(value, spotsPath) as Hotspot[] | undefined) ?? [])));

  const pointer = (event: PointerEvent) => {
    const box = picture.current?.getBoundingClientRect();
    if (!box) return null;
    const x = Math.round(Math.min(98, Math.max(2, ((event.clientX - box.left) / box.width) * 100)));
    const y = Math.round(Math.min(98, Math.max(2, ((event.clientY - box.top) / box.height) * 100)));
    return { x, y };
  };

  const choose = async (files: FileList | null) => {
    const picked = files?.[0];
    if (!picked) return;
    if (!/^image\/(png|jpeg|webp)$/.test(picked.type)) {
      toast('Resim PNG, JPG veya WebP olmalı.', 'bad');
      return;
    }
    const where = target ?? newChapterPath(storyId, level, 'image', chapter, extensionOf(picked.name, 'png'));
    setBusy(true);
    if (await upload(picked, where, `${chapter}. bölümün resmi`, editionOf(storyId, level, 'en'), chapter)) {
      forgetChapterFiles();
      onUploaded();
    }
    setBusy(false);
  };

  return (
    <section className="box" aria-label="Bölüm resmi">
      <div className="box-head">
        <b>Bölüm resmi</b>
        {waiting && <span className="chip warn">Yeni resim onay bekliyor</span>}
      </div>
      {found === undefined && !page.image ? (
        <p className="muted small">{lookFailed ? LOOK_FAILED : 'Resim aranıyor…'}</p>
      ) : shown ? (
        <>
          <div
            className="pic-edit"
            ref={picture}
            onPointerMove={event => {
              if (dragging.current === null) return;
              const place = pointer(event);
              const spot = hotspots[dragging.current];
              if (place && spot) moveSpot(spot.id, place.x, place.y);
            }}
            onPointerUp={() => (dragging.current = null)}
            onPointerLeave={() => (dragging.current = null)}
          >
            <img src={waiting ? shown : thumb(shown, 900)} alt={`${chapter}. bölümün resmi`} draggable={false} />
            {hotspots.map((spot, index) => (
              <button
                key={spot.id}
                type="button"
                className="spot"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                aria-pressed={chosen === index}
                aria-label={`Nokta ${index + 1}: ${spot.title}`}
                title={readOnly ? spot.title : `${spot.title} · yerini değiştirmek için sürükleyin`}
                onPointerDown={event => {
                  setChosen(index);
                  if (readOnly) return;
                  dragging.current = index;
                  (event.target as HTMLElement).setPointerCapture?.(event.pointerId);
                }}
                onPointerMove={event => {
                  if (dragging.current !== index) return;
                  const place = pointer(event);
                  if (place) moveSpot(spot.id, place.x, place.y);
                }}
                onPointerUp={() => (dragging.current = null)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <p className="small muted">
            Resimdeki numaralar öğrencinin tıkladığı noktalardır. Yerini değiştirmek için sürükleyin; yazısını aşağıdan değiştirin. Yeri iki
            dilde ortaktır.
          </p>
        </>
      ) : (
        <p className="muted small">Bu bölümün henüz resmi yok.</p>
      )}
      {!readOnly && (
        <div
          className="dropzone"
          onDragOver={event => event.preventDefault()}
          onDrop={event => {
            event.preventDefault();
            void choose(event.dataTransfer.files);
          }}
        >
          <IconUpload size={18} />
          <span>
            <b>{shown ? 'Resmi değiştir' : 'Resim ekle'}</b> · dosyayı buraya bırakın ya da{' '}
            <button type="button" className="linkish" onClick={() => input.current?.click()} disabled={busy}>
              {busy ? 'yükleniyor…' : 'seçin'}
            </button>
          </span>
          <input
            ref={input}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            hidden
            onChange={event => void choose(event.target.files)}
          />
          <span className="small muted">
            Büyük ve net bir resim yükleyin; uygulama telefona küçük kopyasını kendisi yapar. Kitapların resim kuralları geçerlidir
            (peygamberler ve yakınları çizilmez).
          </span>
        </div>
      )}

      <div className="box-head" style={{ marginTop: 14 }}>
        <b>Resimdeki noktalar ({language === 'ar' ? 'Arapça yazıları' : 'İngilizce yazıları'})</b>
      </div>
      {hotspots.length === 0 && <p className="small muted">Bu resimde nokta yok.</p>}
      {hotspots.map((spot, index) => (
        <details
          key={spot.id}
          className="box nested"
          open={chosen === index}
          onToggle={event => (event.currentTarget as HTMLDetailsElement).open && setChosen(index)}
        >
          <summary>
            <span className="chip">{index + 1}</span> {spot.title || 'Başlıksız nokta'}
          </summary>
          <TextField
            label="Başlık"
            value={spot.title}
            onChange={next => setSpots(file, list => list.map(item => (item.id === spot.id ? { ...item, title: next } : item)))}
            path={`book.pages.${pageIndex}.hotspots.${index}.title`}
            ctx={{ language, level: level.toUpperCase() } as EditContext}
          />
          <TextField
            label="Açıklama"
            value={spot.description}
            long
            onChange={next => setSpots(file, list => list.map(item => (item.id === spot.id ? { ...item, description: next } : item)))}
            path={`book.pages.${pageIndex}.hotspots.${index}.description`}
            ctx={{ language, level: level.toUpperCase() } as EditContext}
          />
          {!readOnly && (
            <button
              type="button"
              className="btn small danger"
              onClick={async () => {
                if (
                  !(await confirm({ title: 'Nokta silinsin mi?', text: 'Nokta iki dilde de resimden kalkar.', yes: 'Sil', danger: true }))
                )
                  return;
                for (const path of [enFile, arFile])
                  if (getState().drafts[path] && mayEditPath(path)) setSpots(path, list => list.filter(item => item.id !== spot.id));
                setChosen(null);
              }}
            >
              <IconTrash size={14} /> Noktayı sil
            </button>
          )}
        </details>
      ))}
      {!readOnly && shown && language === 'en' && (
        <button
          type="button"
          className="btn small"
          onClick={() => {
            const id = `hs-${chapter}-${Date.now().toString(36)}`;
            for (const path of [enFile, arFile])
              if (getState().drafts[path] && mayEditPath(path))
                setSpots(path, list => [...list, { id, x: 50, y: 50, title: '', description: '' }]);
            setChosen(hotspots.length);
          }}
        >
          <IconPlus size={15} /> Nokta ekle
        </button>
      )}
      {!readOnly && language === 'ar' && (
        <p className="small muted">Yeni nokta İngilizce görünümden eklenir; Arapça yazısı sonra buradan yazılır.</p>
      )}
    </section>
  );
};

// --- one recording ------------------------------------------------------------------------------

const Recording = ({
  storyId,
  level,
  language,
  chapter,
  pageIndex,
  media,
  revision,
}: {
  storyId: string;
  level: string;
  language: 'en' | 'ar';
  chapter: number;
  pageIndex: number;
  media: MediaItem[];
  revision: number;
}) => {
  const kind: MediaKind = language === 'ar' ? 'arabicAudio' : 'englishAudio';
  const [mine, setMine] = useState(0);
  const [found, lookFailed] = useChapterFile(storyId, level, kind, chapter, revision + mine);
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const file = bookPath(editionOf(storyId, level, language));
  const ttsFile = TTS_PATH[language];
  const book = useStore(state => state.drafts[file]);
  const tts = useStore(state => state.drafts[ttsFile]);
  const page = getIn(book?.value, ['book', 'pages', pageIndex]) as PageData | undefined;
  const target = found?.path ?? storagePathOf(page?.audioUrl) ?? null;
  const waiting = media.find(item => item.kind === 'audio' && item.target === target);
  const requests = ((tts?.value as { requests: NarrationRequest[] } | undefined)?.requests ?? []).filter(
    item => target && item.storagePath === target,
  );
  const published = ((tts?.original as { requests: NarrationRequest[] } | undefined)?.requests ?? []).filter(
    item => target && item.storagePath === target,
  );
  const latest = requests[requests.length - 1];
  const text = page ? `${page.title}\n\n${page.content ?? ''}` : '';
  const queued = latest && !published.some(item => item.id === latest.id);
  const state: 'none' | 'unknown' | 'current' | 'stale' | 'queued' = !target
    ? 'none'
    : queued
      ? 'queued'
      : !latest
        ? 'unknown'
        : (latest.bookText ?? latest.narrationText) === text
          ? 'current'
          : 'stale';
  const name = language === 'ar' ? 'Arapça ses' : 'İngilizce ses';
  const readOnly = !mayEditPath(ttsFile);

  const renarrate = () => {
    if (!target || !page) return;
    const stamp = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '');
    const entry: NarrationRequest = {
      id: `${storyId}-${level.toLowerCase()}${language === 'ar' ? '-ar' : ''}-ch${chapter}-panel-${stamp}`,
      enabled: true,
      allowOverwrite: true,
      chapterNumber: chapter,
      storagePath: target,
      narrationText: text,
    };
    updateDraft(ttsFile, value => {
      const current = value as { version: number; requests: NarrationRequest[] };
      // One request per file: the new one takes the old one's place, so the list never grows twice.
      const at = current.requests.findIndex(item => item.storagePath === target);
      const rest = current.requests.filter(item => item.storagePath !== target);
      const requestsNext = at < 0 ? [...rest, entry] : [...rest.slice(0, at), entry, ...rest.slice(at)];
      return { ...current, requests: requestsNext };
    });
  };

  const choose = async (files: FileList | null) => {
    const picked = files?.[0];
    if (!picked) return;
    if (!/\.(mp3|m4a)$/i.test(picked.name)) {
      toast('Ses MP3 veya M4A olmalı.', 'bad');
      return;
    }
    setBusy(true);
    const where = target ?? newChapterPath(storyId, level, kind, chapter, extensionOf(picked.name, 'mp3'));
    if (await upload(picked, where, `${chapter}. bölümün ${name.toLowerCase()}i`, editionOf(storyId, level, language), chapter)) {
      forgetChapterFiles();
      setMine(value => value + 1);
    }
    setBusy(false);
  };

  return (
    <section className="box" aria-label={name}>
      <div className="box-head">
        <IconSound size={16} />
        <b>{name}</b>
        <span className={`chip ${state === 'current' ? 'good' : state === 'stale' ? 'bad' : state === 'queued' ? 'warn' : ''}`}>
          {found === undefined && !target
            ? lookFailed
              ? 'bakılamadı'
              : 'aranıyor…'
            : {
                none: 'Kayıt yok',
                unknown: 'Kayıt var',
                current: 'Metinle aynı',
                stale: 'Metin değişti, ses eski',
                queued: 'Yeniden seslendirilecek',
              }[state]}
        </span>
      </div>
      {found === undefined ? (
        <p className="small muted">{lookFailed ? LOOK_FAILED : 'Kayıt aranıyor…'}</p>
      ) : (
        (waiting?.url || found?.url) && <audio controls preload="none" src={waiting?.url ?? found?.url} style={{ width: '100%' }} />
      )}
      {waiting && <p className="small">Yüklediğiniz kayıt onay bekliyor; önizlemede o çalıyor.</p>}
      {state === 'stale' && (
        <p className="small">
          <IconWarn size={14} /> Bu bölümün başlığı veya metni seslendirildikten sonra değişti. Okunan ses ekrandaki metinle uyuşmuyor.
        </p>
      )}
      {state === 'unknown' && (
        <p className="small muted">Bu kayıt seslendirme listesinden önce yapılmış; hangi metinden okunduğu bilinmiyor.</p>
      )}
      {state === 'queued' && (
        <p className="small muted">
          Kaydettiğinizde listeye girer. Yönetici yayınlayınca sunucu bu bölümü ElevenLabs ile yeniden okur ve eski kaydın yerine koyar
          (aboneliğin ses kotasından düşer).
        </p>
      )}
      {!readOnly && target && /\.mp3$/i.test(target) && state !== 'queued' && (
        <button type="button" className="btn small" onClick={renarrate}>
          <IconSound size={15} /> Güncel metinden yeniden seslendir
        </button>
      )}
      {!readOnly && state === 'queued' && (
        <button
          type="button"
          className="btn small ghost"
          onClick={() =>
            updateDraft(ttsFile, value => {
              const original = tts?.original as { requests: NarrationRequest[] };
              const before = original.requests.find(item => item.storagePath === target);
              const current = value as { requests: NarrationRequest[] };
              const at = current.requests.findIndex(item => item.storagePath === target);
              const rest = current.requests.filter(item => item.storagePath !== target);
              return { ...current, requests: before ? [...rest.slice(0, at), before, ...rest.slice(at)] : rest };
            })
          }
        >
          Vazgeç
        </button>
      )}
      {!readOnly && (
        <div className="row wrap" style={{ marginTop: 8 }}>
          <button type="button" className="btn small ghost" onClick={() => input.current?.click()} disabled={busy}>
            <IconUpload size={15} /> {busy ? 'Yükleniyor…' : target ? 'Kendi kaydını yükle' : 'Kayıt yükle'}
          </button>
          <input
            ref={input}
            type="file"
            accept=".mp3,.m4a,audio/mpeg,audio/mp4"
            hidden
            onChange={event => void choose(event.target.files)}
          />
        </div>
      )}
    </section>
  );
};
