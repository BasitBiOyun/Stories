import { useEffect, useMemo, useRef, useState } from 'react';
import languageFile from '../../content/languages.json';
import { api, fileToBase64 } from '../api';
import { StringList, TextField, type EditContext } from '../FieldEditor';
import { IconCard, IconImage, IconSearch, IconUpload } from '../icons';
import { isDirty, loadFile, mayEditPath, refreshBasket, revertDraft, saveAll, toast, updateDraft, useStore } from '../store';
import { ENTITY_CARDS_PATH, normalize } from '../util';

/**
 * Places & People cards: the picture, the words on each card in every language of the library,
 * and the names the story uses for it (a name written here is underlined in the story and opens
 * the card). A card is shared by all levels of its book. Maps and which chapter shows which card
 * stay in code.
 */

interface CardWords {
  title: string;
  kindLabel: string;
  periodLabel: string;
  summary: string;
  more?: string;
}
interface Card {
  en: CardWords;
  ar?: CardWords;
  aliases?: Record<string, string[] | undefined>;
  tr?: string;
}
type Cards = Record<string, Card>;

/** The card's words in one language (English, Arabic, and later the library's other languages). */
const wordsIn = (card: Card, language: string) => (card as unknown as Record<string, CardWords | undefined>)[language];

/** The library's languages, from src/content/languages.json: a new language there gets a tab here. */
const LANGUAGES = (languageFile as { languages: { code: string; name: string; nativeName: string; direction: string; enabled?: boolean }[] }).languages.filter(language => language.enabled !== false);
const rtl = (code: string) => LANGUAGES.find(item => item.code === code)?.direction === 'rtl';
const TURKISH_NAME: Record<string, string> = { en: 'İngilizce', ar: 'Arapça', de: 'Almanca', fr: 'Fransızca', es: 'İspanyolca', ru: 'Rusça', zh: 'Çince', ja: 'Japonca', fa: 'Farsça' };

const BOOKS: Record<string, string> = {
  mecca: 'Mecca',
  abraham: 'Prophet Abraham',
  moses: 'Prophet Moses',
  yunus: 'Yunus Emre',
  ibnjubayr: 'Ibn Jubayr',
  gevher: 'Gevher Nesibe',
};

const WORD_FIELDS: [keyof CardWords, string, boolean][] = [
  ['title', 'Adı', false],
  ['periodLabel', 'Dönemi ve yeri', false],
  ['summary', 'Kısa bilgi (kartta)', true],
  ['more', 'Bir cümle daha (sadece Places & People sayfasında)', true],
];

export const Cards = ({ focus }: { focus?: string }) => {
  const draft = useStore(state => state.drafts[ENTITY_CARDS_PATH]);
  const [query, setQuery] = useState('');
  const [book, setBook] = useState<string>(() => focus?.split('-')[0] ?? 'all');
  const [open, setOpen] = useState<string | null>(focus ?? null);
  useEffect(() => {
    void loadFile(ENTITY_CARDS_PATH);
  }, []);
  useEffect(() => {
    if (focus) setOpen(focus);
  }, [focus]);

  const cards = (draft?.value as { cards: Record<string, Card> } | undefined)?.cards;
  const list = useMemo(() => {
    const wanted = normalize(query);
    return Object.entries(cards ?? {}).filter(([id, card]) => {
      if (book !== 'all' && id.split('-')[0] !== book) return false;
      if (!wanted) return true;
      return normalize(`${card.en.title} ${card.ar?.title ?? ''} ${card.tr ?? ''} ${(card.aliases?.en ?? []).join(' ')}`).includes(wanted);
    });
  }, [cards, book, query]);
  const readOnly = !mayEditPath(ENTITY_CARDS_PATH);

  if (!draft) return <div className="content muted">Kartlar yükleniyor…</div>;
  const change = (id: string, next: Card) => updateDraft(ENTITY_CARDS_PATH, value => ({ ...(value as object), cards: { ...(value as { cards: Record<string, Card> }).cards, [id]: next } }));
  const current = open && cards?.[open];

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Places &amp; People kartları</h1>
          <p>Hikâyede altı çizili yer ve kişilerin kartları. Bir kart kitabın bütün seviyelerinde ortaktır.</p>
        </div>
        <div className="actions">
          {isDirty(draft) && (
            <>
              <button type="button" className="btn ghost" onClick={() => revertDraft(ENTITY_CARDS_PATH)}>
                Geri al
              </button>
              <button type="button" className="btn primary" onClick={() => void saveAll()}>
                Kaydet
              </button>
            </>
          )}
        </div>
      </div>
      <div className="row wrap" style={{ marginBottom: 12 }}>
        <label className="search-inline">
          <IconSearch size={16} />
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Kart ara (Mekke, Nil, Konya…)" aria-label="Kart ara" />
        </label>
        <select value={book} onChange={event => setBook(event.target.value)} aria-label="Kitap" style={{ width: 'auto' }}>
          <option value="all">Bütün kitaplar</option>
          {Object.entries(BOOKS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <span className="small muted">{list.length} kart</span>
      </div>
      <div className="split">
        <nav className="card list-pane" aria-label="Kartlar">
          {list.map(([id, card]) => (
            <button key={id} type="button" aria-current={open === id ? 'true' : undefined} onClick={() => setOpen(id)}>
              <b>{card.en.title}</b>
              <span className="small muted">
                {card.en.kindLabel} · {BOOKS[id.split('-')[0]] ?? ''}
              </span>
            </button>
          ))}
        </nav>
        <section className="card">
          {!current ? (
            <div className="empty">
              <IconCard size={22} />
              <b>Soldan bir kart seçin</b>
            </div>
          ) : (
            <CardEditor key={open} id={open!} card={current} cards={cards ?? {}} readOnly={readOnly} onChange={next => change(open!, next)} />
          )}
        </section>
      </div>
    </div>
  );
};

const CardEditor = ({ id, card, cards, readOnly, onChange }: { id: string; card: Card; cards: Cards; readOnly: boolean; onChange: (card: Card) => void }) => {
  const [language, setLanguage] = useState('en');
  const ctx: EditContext = { language: language === 'ar' ? 'ar' : 'en', level: 'A2', readOnly };
  const words = wordsIn(card, language);
  const english = card.en;
  const setWords = (key: keyof CardWords, text: string, extra?: { language: string; key: keyof CardWords; text: string }) => {
    const next = { ...card } as unknown as Record<string, unknown>;
    const put = (lang: string, field: keyof CardWords, value: string) => {
      const base = (next[lang] as CardWords | undefined) ?? { ...english, more: undefined };
      const updated = { ...base, [field]: value } as CardWords;
      if (field === 'more' && !value.trim()) delete updated.more;
      if (updated.more === undefined) delete updated.more;
      next[lang] = updated;
    };
    put(language, key, text);
    if (extra && wordsIn(card, extra.language)) put(extra.language, extra.key, extra.text);
    onChange(next as unknown as Card);
  };
  const other = LANGUAGES.find(item => item.code !== language && item.code === 'en');
  return (
    <div>
      <div className="card-top">
        <PictureBox id={id} title={english.title} readOnly={readOnly} />
        <div className="card-top-words">
          <h2 style={{ margin: 0 }}>{english.title}</h2>
          {card.ar?.title && (
            <p style={{ margin: '2px 0 8px' }}>
              <span className="ar" dir="rtl">
                {card.ar.title}
              </span>
            </p>
          )}
          <TextField label="Türkçe adı (kartta parantez içinde)" value={card.tr ?? ''} onChange={text => onChange({ ...card, tr: text || undefined })} path={`${id}.tr`} ctx={{ ...ctx, language: 'en' }} checks={false} />
        </div>
      </div>
      <div className="tabs" role="tablist" aria-label="Kartın dili">
        {LANGUAGES.map(item => (
          <button key={item.code} type="button" role="tab" aria-selected={language === item.code} onClick={() => setLanguage(item.code)}>
            {TURKISH_NAME[item.code] ?? item.name}
            {!wordsIn(card, item.code) && <span className="small muted"> · yazılmadı</span>}
          </button>
        ))}
      </div>
      {!words && language !== 'en' && (
        <p className="small muted">
          Bu dilde henüz yazılmadı; uygulama İngilizcesini gösterir. Aşağıya yazdığınız anda bu dil kaydedilmeye hazır olur.
        </p>
      )}
      <div>
        <KindField
          cards={cards}
          language={language}
          value={words?.kindLabel ?? ''}
          readOnly={readOnly}
          onChange={(text, paired) => setWords('kindLabel', text, paired)}
        />
        {WORD_FIELDS.map(([key, label, long]) => (
          <TextField
            key={key}
            label={label}
            value={String(words?.[key] ?? '')}
            onChange={text => setWords(key, text)}
            path={`${id}.${language}.${key}`}
            ctx={ctx}
            long={long}
            checks={key === 'summary' || key === 'more'}
            help={other && english[key] ? `İngilizcesi: ${english[key]}` : undefined}
          />
        ))}
        <StringList
          label="Hikâyedeki adları"
          help="Hikâyede bu yazılardan biri geçince altı çizilir ve kartı açar. Yazıldığı gibi girin."
          value={card.aliases?.[language] ?? []}
          onChange={next => onChange({ ...card, aliases: { ...card.aliases, [language]: next as string[] } })}
          path={`${id}.aliases.${language}`}
          ctx={ctx}
          addLabel="Ad ekle"
        />
      </div>
      <p className="small muted">Kartın haritası ve hangi bölümde çıktığı kodda durur; değiştirmek için Claude’a yazın.</p>
    </div>
  );
};

/**
 * The card's type, chosen from the types the library already uses in that language. Choosing an
 * English type also fills the Arabic one the other cards use with it.
 */
const KindField = ({
  cards,
  language,
  value,
  readOnly,
  onChange,
}: {
  cards: Cards;
  language: string;
  value: string;
  readOnly: boolean;
  onChange: (text: string, paired?: { language: string; key: keyof CardWords; text: string }) => void;
}) => {
  const kinds = useMemo(() => {
    const seen = new Map<string, number>();
    for (const card of Object.values(cards)) {
      const kind = wordsIn(card, language)?.kindLabel?.trim();
      if (kind) seen.set(kind, (seen.get(kind) ?? 0) + 1);
    }
    return [...seen.keys()].sort((a, b) => a.localeCompare(b, language));
  }, [cards, language]);
  const [typing, setTyping] = useState(false);
  const known = !value || kinds.includes(value);
  const arabicFor = (english: string) => {
    const counts = new Map<string, number>();
    for (const card of Object.values(cards)) if (card.en.kindLabel === english && card.ar?.kindLabel) counts.set(card.ar.kindLabel, (counts.get(card.ar.kindLabel) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
  };
  const choose = (text: string) => {
    const arabic = language === 'en' ? arabicFor(text) : undefined;
    onChange(text, arabic ? { language: 'ar', key: 'kindLabel', text: arabic } : undefined);
  };
  return (
    <div className="field">
      <span className="field-label">Türü</span>
      {typing || !known ? (
        <div className="row">
          <input type="text" value={value} aria-label="Yeni tür" onChange={event => onChange(event.target.value)} disabled={readOnly} placeholder={language === 'en' ? 'Örneğin: Mountain pass' : ''} dir={rtl(language) ? 'rtl' : undefined} />
          {kinds.length > 0 && (
            <button type="button" className="btn ghost small" disabled={readOnly} onClick={() => (setTyping(false), choose(kinds.includes(value) ? value : ''))}>
              Listeden seç
            </button>
          )}
        </div>
      ) : (
        <select
          value={value}
          aria-label="Türü"
          disabled={readOnly}
          dir={rtl(language) ? 'rtl' : undefined}
          onChange={event => {
            if (event.target.value === '__new__') setTyping(true);
            else choose(event.target.value);
          }}
        >
          {!value && <option value="">Seçin…</option>}
          {kinds.map(kind => (
            <option key={kind} value={kind}>
              {kind}
            </option>
          ))}
          <option value="__new__">Listede yok, yeni tür yaz…</option>
        </select>
      )}
      {language === 'en' && <small>İngilizce tür seçilince Arapçası da diğer kartlardaki gibi seçilir.</small>}
    </div>
  );
};

/** The app's picture files for the cards, read once when this page first shows a picture. */
type PictureSpot = { folder: string; name: string } | null;
let picturesOf: Promise<Map<string, PictureSpot>> | null = null;
const pictureSpots = () =>
  (picturesOf ??= import('../../features/historical-entities/books').then(
    ({ BOOK_SETS }) => new Map(BOOK_SETS.flatMap(set => set.entities).map(entity => [entity.id, entity.picture ?? null] as [string, PictureSpot])),
  ));
const picturePath = (spot: { folder: string; name: string }) => `src/features/historical-entities/assets/pictures/${spot.folder}/${spot.name}.webp`;

/** Makes the chosen picture the size the app uses: a 480 px square WebP, cut from the middle. */
const toCardPicture = async (file: File): Promise<Blob> => {
  const bitmap = await createImageBitmap(file);
  const side = Math.min(bitmap.width, bitmap.height);
  const canvas = document.createElement('canvas');
  canvas.width = 480;
  canvas.height = 480;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Resim hazırlanamadı.');
  context.imageSmoothingQuality = 'high';
  context.drawImage(bitmap, (bitmap.width - side) / 2, (bitmap.height - side) / 2, side, side, 0, 0, 480, 480);
  bitmap.close();
  const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/webp', 0.86));
  if (!blob || blob.type !== 'image/webp') throw new Error('Bu tarayıcı WebP resim hazırlayamıyor; Chrome veya Edge ile deneyin.');
  return blob;
};

const PictureBox = ({ id, title, readOnly }: { id: string; title: string; readOnly: boolean }) => {
  const [spot, setSpot] = useState<PictureSpot | undefined>(undefined);
  const [image, setImage] = useState<string | null | undefined>(undefined);
  const [from, setFrom] = useState('');
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    let live = true;
    void pictureSpots()
      .then(async spots => {
        const found = spots.get(id) ?? null;
        if (!live) return;
        setSpot(found);
        if (!found) return setImage(null);
        const result = await api.file(picturePath(found)).catch(() => null);
        if (!live) return;
        setImage(result?.image ?? null);
        setFrom(result?.from ?? '');
      })
      .catch(() => live && (setSpot(null), setImage(null)));
    return () => {
      live = false;
    };
  }, [id]);

  const replace = async (file: File) => {
    if (!spot) return;
    setBusy(true);
    try {
      const picture = await toCardPicture(file);
      await api.saveBinary(picturePath(spot), await fileToBase64(picture), `Places & People: ${title} kartının resmi değişti`);
      setImage(URL.createObjectURL(picture));
      setFrom('basket');
      await refreshBasket();
      toast('Yeni resim sepetinize eklendi; yayınlanınca uygulamada görünür.', 'good');
    } catch (reason) {
      toast((reason as Error).message, 'bad');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card-picture">
      <div className="card-picture-frame">
        {image ? <img src={image} alt={`${title} kartının resmi`} /> : <IconImage size={30} />}
      </div>
      {spot === undefined || image === undefined ? (
        <span className="small muted">Resim okunuyor…</span>
      ) : !spot ? (
        <span className="small muted">Bu kartın resim yeri henüz açılmadı; Claude’a yazın.</span>
      ) : (
        <>
          {from === 'basket' && <span className="small">Sepetinizdeki yeni resim</span>}
          {!readOnly && (
            <button type="button" className="btn small" disabled={busy} onClick={() => input.current?.click()}>
              <IconUpload size={15} /> {busy ? 'Hazırlanıyor…' : image ? 'Resmi değiştir' : 'Resim yükle'}
            </button>
          )}
          <input
            ref={input}
            type="file"
            accept="image/png,image/jpeg,image/webp"
            hidden
            onChange={event => {
              const file = event.target.files?.[0];
              event.target.value = '';
              if (file) void replace(file);
            }}
          />
          <span className="small muted">Kare kesilir, 480 px yapılır. Peygamberler ve yakınları asla çizilmez; parıltı, yıldız, haç kullanılmaz.</span>
        </>
      )}
    </div>
  );
};
