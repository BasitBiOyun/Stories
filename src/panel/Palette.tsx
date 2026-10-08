import { useEffect, useMemo, useRef, useState } from 'react';
import { contentFetch } from './api';
import { navigate } from './router';
import { storyName, useStore } from './store';
import { normalize, splitEdition } from './util';

/**
 * Ctrl+K: one box that finds any text in any book (a word, a sentence, a question, an answer)
 * and any page of the panel. Choosing a text opens the book at that page with its form open.
 */

interface Index {
  editions: string[];
  entries: [number, number, string, string][];
  norms: string[];
}

let indexPromise: Promise<Index> | null = null;
const loadIndex = () =>
  (indexPromise ??= contentFetch('/content/search-index.json')
    .then(response => (response?.ok ? response.json() : { editions: [], entries: [] }))
    .then((data: Omit<Index, 'norms'>) => ({ ...data, norms: data.entries.map(entry => normalize(entry[3])) }))
    .catch(() => {
      indexPromise = null;
      return { editions: [], entries: [], norms: [] };
    }));

const PLACES: { label: string; to: string; words: string }[] = [
  { label: 'Ana sayfa', to: '/', words: 'ana sayfa özet' },
  { label: 'Kitaplar', to: '/kitaplar', words: 'kitaplar kitap listesi seviye' },
  { label: 'Places & People kartları', to: '/kartlar', words: 'places people kart yer kişi' },
  { label: 'Resim ve ses', to: '/medya', words: 'resim ses kayıt yükle medya' },
  { label: 'Yeni kitap ekle', to: '/yeni-kitap', words: 'yeni kitap word ekle' },
  { label: 'Onay bekleyenler / Sepetim', to: '/onay', words: 'onay sepet yayınla bekleyen' },
  { label: 'Geçmiş ve geri alma', to: '/gecmis', words: 'geçmiş geri al eski' },
  { label: 'Ekip ve yetkiler', to: '/ekip', words: 'ekip yönetici ekle kişi rol yetki' },
  { label: 'Yayın ve ayarlar', to: '/ayarlar', words: 'yayın canlı ayar' },
  { label: 'Yardım: ne nerede?', to: '/yardim', words: 'yardım nasıl nerede' },
];

const KIND: [RegExp, string][] = [
  [/\.content#/, 'Hikâye metni'],
  [/\.title$/, 'Başlık'],
  [/\.vocabulary\./, 'Kelime notu'],
  [/\.languageFocusExercises\./, 'Focus'],
  [/\.exercises\./, 'Alıştırma'],
  [/\.beforeYouRead/, 'Önce oku'],
  [/\.groupTask/, 'Grup çalışması'],
  [/\.iCan/, 'I can'],
  [/\.hotspots/, 'Resim noktası'],
];

export const Palette = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<Index | null>(null);
  const [active, setActive] = useState(0);
  const summary = useStore(state => state.summary);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
    void loadIndex().then(setIndex);
  }, []);

  const results = useMemo(() => {
    const wanted = normalize(query);
    if (!wanted) return PLACES.map(place => ({ key: place.to, label: place.label, where: 'Panel', go: () => navigate(place.to) }));
    const places = PLACES.filter(place => normalize(`${place.label} ${place.words}`).includes(wanted)).map(place => ({ key: place.to, label: place.label, where: 'Panel', go: () => navigate(place.to) }));
    const books = (summary ?? [])
      .filter(item => item.language === 'en' && normalize(`${storyName(item.storyId)} ${item.level}`).includes(wanted))
      .map(item => ({ key: item.edition, label: `${storyName(item.storyId)} · ${item.level}`, where: 'Kitap', go: () => navigate(`/kitap/${item.storyId}`) }));
    const texts: { key: string; label: string; where: string; go: () => void }[] = [];
    if (index && wanted.length >= 2) {
      for (let at = 0; at < index.entries.length && texts.length < 60; at += 1) {
        if (!index.norms[at].includes(wanted)) continue;
        const [edIndex, , path, text] = index.entries[at];
        const edition = splitEdition(index.editions[edIndex]);
        const pageNumber = Number(/^pages\.(\d+)/.exec(path)?.[1] ?? 0) + 1;
        const focus = `book.${path.replace('content#', 'content.#')}`;
        const kind = KIND.find(([pattern]) => pattern.test(path))?.[1] ?? 'Yazı';
        texts.push({
          key: `${edIndex}-${path}`,
          label: text,
          where: `${storyName(edition.storyId)} · ${edition.level} · ${edition.language === 'ar' ? 'Arapça' : 'İngilizce'} · ${pageNumber}. sayfa · ${kind}`,
          go: () => navigate(`/duzenle/${edition.storyId}/${edition.level.toLowerCase()}/${pageNumber}?dil=${edition.language}&yer=${encodeURIComponent(focus)}`),
        });
      }
    }
    return [...places, ...books, ...texts];
  }, [query, index, summary]);

  const choose = (at: number) => {
    const result = results[at];
    if (!result) return;
    onClose();
    result.go();
  };

  return (
    <div className="overlay" onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Ara">
        <input
          ref={input}
          value={query}
          placeholder="Ne arıyorsunuz? Bir kelime, cümle, soru ya da sayfa adı…"
          aria-label="Ara"
          onChange={event => (setQuery(event.target.value), setActive(0))}
          onKeyDown={event => {
            if (event.key === 'Escape') onClose();
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setActive(value => Math.min(results.length - 1, value + 1));
            }
            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setActive(value => Math.max(0, value - 1));
            }
            if (event.key === 'Enter') choose(active);
          }}
        />
        {query && !index && <p className="hint">Kitaplar taranıyor…</p>}
        <ul role="listbox" aria-label="Sonuçlar">
          {results.map((result, at) => (
            <li key={result.key} role="option" aria-selected={at === active} onMouseEnter={() => setActive(at)} onMouseDown={() => choose(at)} dir="auto">
              <span>{result.label}</span>
              <span className="where">{result.where}</span>
            </li>
          ))}
          {query && index && results.length === 0 && <li className="hint">Bulunamadı. Daha kısa bir parça yazmayı deneyin.</li>}
        </ul>
        <p className="hint">↑ ↓ ile seçin, Enter ile açın. Arapçada harekeler yok sayılır.</p>
      </div>
    </div>
  );
};
