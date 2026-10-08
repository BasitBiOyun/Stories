import { useEffect, useMemo, useState } from 'react';
import { api, fileToBase64 } from '../api';
import { IconImage, IconSound, IconUpload } from '../icons';
import { chapterFiles, forgetChapterFiles, newChapterPath, thumb, type ChapterFile, type MediaKind } from '../media';
import { getState, mayEditPath, refreshBasket, storyName, toast, useStore } from '../store';
import { bookPath, editionOf } from '../util';

/**
 * Pictures and recordings of a whole book at once. Drop a folder's files: each file goes to the
 * chapter whose number is in its name ("3.png", "chapter 3.mp3", "bolum_03.jpg"). Nothing reaches
 * the app before an admin publishes the basket.
 */

const chapterOf = (name: string): number | null => {
  const base = name.replace(/\.[a-z0-9]+$/i, '');
  const named = /(?:chapter|ch|bolum|bölüm|b)\s*[-_ ]?\s*(\d{1,2})/i.exec(base);
  if (named) return Number(named[1]);
  const numbers = base.match(/\d{1,2}/g);
  return numbers && numbers.length === 1 ? Number(numbers[0]) : numbers ? Number(numbers[numbers.length - 1]) : null;
};

interface Planned {
  file: File;
  chapter: number | null;
  kind: MediaKind;
}

export const MediaPage = () => {
  const summary = useStore(state => state.summary);
  const media = useStore(state => state.basket?.media ?? []);
  const config = useStore(state => state.config);
  const editions = (summary ?? []).filter(item => item.language === 'en');
  const [choice, setChoice] = useState<string>('');
  const [audioLanguage, setAudioLanguage] = useState<'en' | 'ar'>('en');
  const [files, setFiles] = useState<Record<MediaKind, Record<number, ChapterFile>>>({ image: {}, englishAudio: {}, arabicAudio: {} });
  const [planned, setPlanned] = useState<Planned[]>([]);
  const [busy, setBusy] = useState<string | null>(null);
  const [revision, setRevision] = useState(0);
  const current = editions.find(item => item.edition === choice) ?? editions[0];
  const storyId = current?.storyId ?? '';
  const level = current?.level ?? '';
  const chapters = useMemo(() => (current?.pages ?? []).filter(page => page.type === 'story'), [current]);
  const canWrite = Boolean(config?.storage) && mayEditPath(bookPath(editionOf(storyId, level, 'en')));

  useEffect(() => {
    if (!storyId) return;
    let live = true;
    Promise.all((['image', 'englishAudio', 'arabicAudio'] as MediaKind[]).map(kind => chapterFiles(storyId, level, kind).catch(() => ({}))))
      .then(([image, englishAudio, arabicAudio]) => live && setFiles({ image, englishAudio, arabicAudio }))
      .catch(() => undefined);
    return () => {
      live = false;
    };
  }, [storyId, level, revision]);

  const plan = (list: FileList | null) => {
    const next: Planned[] = [];
    for (const file of Array.from(list ?? [])) {
      const image = /^image\/(png|jpeg|webp)$/.test(file.type);
      const audio = /\.(mp3|m4a)$/i.test(file.name);
      if (!image && !audio) continue;
      next.push({ file, chapter: chapterOf(file.name), kind: image ? 'image' : audioLanguage === 'ar' ? 'arabicAudio' : 'englishAudio' });
    }
    if (next.length === 0) toast('Sadece PNG, JPG, WebP resim ve MP3/M4A ses yüklenebilir.', 'bad');
    setPlanned(next.sort((a, b) => (a.chapter ?? 99) - (b.chapter ?? 99)));
  };

  const uploadAll = async () => {
    let done = 0;
    for (const item of planned) {
      if (!item.chapter || !chapters.some(page => page.id === item.chapter)) continue;
      setBusy(`${item.file.name} yükleniyor (${done + 1}/${planned.length})…`);
      const existing = files[item.kind][item.chapter];
      const extension = (/\.([a-z0-9]+)$/i.exec(item.file.name)?.[1] ?? 'png').toLowerCase();
      const target = existing?.path ?? newChapterPath(storyId, level, item.kind, item.chapter, extension);
      const language = item.kind === 'arabicAudio' ? 'ar' : 'en';
      try {
        const contentType = item.file.type || (extension === 'm4a' ? 'audio/mp4' : 'audio/mpeg');
        await api.upload({
          name: item.file.name,
          contentType,
          data: await fileToBase64(item.file),
          target,
          label: `${item.chapter}. bölümün ${item.kind === 'image' ? 'resmi' : language === 'ar' ? 'Arapça sesi' : 'İngilizce sesi'}`,
          edition: editionOf(storyId, level, language),
          chapter: item.chapter,
        });
        done += 1;
      } catch (error) {
        toast(`${item.file.name}: ${(error as Error).message}`, 'bad');
        break;
      }
    }
    setBusy(null);
    setPlanned([]);
    forgetChapterFiles();
    setRevision(value => value + 1);
    await refreshBasket();
    if (done) toast(`${done} dosya sepetinize eklendi. Yönetici yayınlayınca uygulamaya geçer.`, 'good');
  };

  const waitingFor = (chapter: number, kind: MediaKind) =>
    media.find(item => item.chapter === chapter && item.edition.startsWith(`${storyId}-${level.toLowerCase()}-`) && (kind === 'image' ? item.kind === 'image' : item.kind === 'audio' && item.edition.endsWith(kind === 'arabicAudio' ? '-ar' : '-en')));

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Resim ve ses</h1>
          <p>Bir kitabın bütün resimlerini ya da kayıtlarını tek seferde yükleyin. Dosya adındaki sayı bölümü belirler: “3.png”, “chapter 3.mp3”, “bolum_03.jpg”.</p>
        </div>
        <div className="actions">
          <select aria-label="Kitap" value={current?.edition ?? ''} onChange={event => (setChoice(event.target.value), setPlanned([]))}>
            {editions.map(item => (
              <option key={item.edition} value={item.edition}>
                {storyName(item.storyId)} · {item.level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {canWrite ? (
        <div
          className="dropzone big"
          onDragOver={event => event.preventDefault()}
          onDrop={event => {
            event.preventDefault();
            plan(event.dataTransfer.files);
          }}
        >
          <IconUpload size={22} />
          <b>Dosyaları buraya bırakın</b>
          <span className="small">
            ya da{' '}
            <label className="linkish">
              bilgisayardan seçin
              <input type="file" multiple accept="image/png,image/jpeg,image/webp,.mp3,.m4a" hidden onChange={event => plan(event.target.files)} />
            </label>
          </span>
          <div className="seg" role="group" aria-label="Seslerin dili">
            <button type="button" aria-pressed={audioLanguage === 'en'} onClick={() => setAudioLanguage('en')}>
              Sesler İngilizce
            </button>
            <button type="button" aria-pressed={audioLanguage === 'ar'} onClick={() => setAudioLanguage('ar')}>
              Sesler Arapça
            </button>
          </div>
        </div>
      ) : (
        <div className="notice">{config?.storage ? 'Rolünüz dosya yüklemeye izin vermiyor.' : 'Dosya yükleme, panelin depolama bağlantısı kurulunca açılır.'}</div>
      )}

      {planned.length > 0 && (
        <section className="card" style={{ marginTop: 14 }}>
          <h2>Yüklenecekler</h2>
          <div className="table-wrap">
            <table className="table">
              <tbody>
                {planned.map((item, index) => {
                  const known = item.chapter && chapters.some(page => page.id === item.chapter);
                  return (
                    <tr key={`${item.file.name}-${index}`}>
                      <td>{item.kind === 'image' ? <IconImage size={16} /> : <IconSound size={16} />}</td>
                      <td>{item.file.name}</td>
                      <td>
                        <select
                          aria-label={`${item.file.name} bölümü`}
                          value={item.chapter ?? ''}
                          onChange={event => setPlanned(list => list.map((other, at) => (at === index ? { ...other, chapter: Number(event.target.value) || null } : other)))}
                        >
                          <option value="">Bölüm seçin</option>
                          {chapters.map(page => (
                            <option key={page.id} value={page.id}>
                              {page.id}. {page.title}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="small">{known ? (files[item.kind][item.chapter!] ? 'eskisinin yerine geçer' : 'yeni') : <span className="chip bad">bölüm yok</span>}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row" style={{ marginTop: 10 }}>
            <button type="button" className="btn primary" disabled={Boolean(busy)} onClick={() => void uploadAll()}>
              {busy ?? 'Sepete yükle'}
            </button>
            <button type="button" className="btn ghost" disabled={Boolean(busy)} onClick={() => setPlanned([])}>
              Vazgeç
            </button>
          </div>
        </section>
      )}

      <section className="card" style={{ marginTop: 14 }}>
        <h2>
          {storyName(storyId)} · {level}
        </h2>
        <div className="media-grid">
          {chapters.map(page => {
            const picture = waitingFor(page.id, 'image')?.url ?? files.image[page.id]?.url;
            const enWaiting = waitingFor(page.id, 'englishAudio');
            const arWaiting = waitingFor(page.id, 'arabicAudio');
            return (
              <a key={page.id} className="media-card" href={`#/duzenle/${storyId}/${level.toLowerCase()}/${(current?.pages.indexOf(page) ?? 0) + 1}?dil=en`}>
                <span className="thumb">{picture ? <img src={waitingFor(page.id, 'image') ? picture : thumb(picture, 320)} alt="" loading="lazy" /> : <span className="muted small">resim yok</span>}</span>
                <b>
                  {page.id}. {page.title}
                </b>
                <span className="row wrap small">
                  {waitingFor(page.id, 'image') && <span className="chip warn">yeni resim bekliyor</span>}
                  <span className={`chip ${files.englishAudio[page.id] || enWaiting ? '' : 'bad'}`}>EN ses {enWaiting ? 'bekliyor' : files.englishAudio[page.id] ? (page.audio === 'stale' ? 'eski' : 'var') : 'yok'}</span>
                  <span className={`chip ${files.arabicAudio[page.id] || arWaiting ? '' : 'bad'}`}>AR ses {arWaiting ? 'bekliyor' : files.arabicAudio[page.id] ? 'var' : 'yok'}</span>
                </span>
              </a>
            );
          })}
        </div>
        {getState().config?.storage === false && <p className="small muted">Depolama bağlı değil.</p>}
      </section>
    </div>
  );
};
