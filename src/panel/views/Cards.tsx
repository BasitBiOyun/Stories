import { useEffect, useMemo, useState } from 'react';
import { StringList, TextField, type EditContext } from '../FieldEditor';
import { IconCard, IconSearch } from '../icons';
import { isDirty, loadFile, mayEditPath, revertDraft, saveAll, updateDraft, useStore } from '../store';
import { ENTITY_CARDS_PATH, normalize } from '../util';

/**
 * Places & People cards: the words on each card, in English and Arabic, and the names the story
 * uses for it (a name written here is underlined in the story and opens the card). A card is
 * shared by all levels of its book. Maps, pictures and which chapter shows which card stay in code.
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
  aliases?: { en?: string[]; ar?: string[] };
  tr?: string;
}

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
  ['kindLabel', 'Türü (şehir, nehir, kişi…)', false],
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
            <CardEditor key={open} id={open!} card={current} readOnly={readOnly} onChange={next => change(open!, next)} />
          )}
        </section>
      </div>
    </div>
  );
};

const CardEditor = ({ id, card, readOnly, onChange }: { id: string; card: Card; readOnly: boolean; onChange: (card: Card) => void }) => {
  const ctx = (language: 'en' | 'ar'): EditContext => ({ language, level: 'A2', readOnly });
  const setWords = (language: 'en' | 'ar', key: keyof CardWords, text: string) => {
    const words = { ...(card[language] ?? card.en), [key]: text } as CardWords;
    if (key === 'more' && !text.trim()) delete words.more;
    onChange({ ...card, [language]: words });
  };
  return (
    <div>
      <div className="grid two">
        {(['en', 'ar'] as const).map(language => (
          <div key={language}>
            <h3>{language === 'en' ? 'İngilizce' : 'Arapça'}</h3>
            {!card[language] && <p className="small muted">Arapçası yok; uygulama İngilizcesini gösterir.</p>}
            {WORD_FIELDS.map(([key, label, long]) => (
              <TextField key={key} label={label} value={String(card[language]?.[key] ?? '')} onChange={text => setWords(language, key, text)} path={`${id}.${language}.${key}`} ctx={ctx(language)} long={long} checks={key === 'summary' || key === 'more'} />
            ))}
            <StringList
              label="Hikâyedeki adları"
              help="Hikâyede bu yazılardan biri geçince altı çizilir ve kartı açar. Yazıldığı gibi girin."
              value={card.aliases?.[language] ?? []}
              onChange={next => onChange({ ...card, aliases: { ...card.aliases, [language]: next as string[] } })}
              path={`${id}.aliases.${language}`}
              ctx={ctx(language)}
              addLabel="Ad ekle"
            />
          </div>
        ))}
      </div>
      <TextField label="Türkçe adı (kartta parantez içinde)" value={card.tr ?? ''} onChange={text => onChange({ ...card, tr: text || undefined })} path={`${id}.tr`} ctx={ctx('en')} checks={false} />
      <p className="small muted">Kartın haritası ve resmi kodda durur; değiştirmek için Claude’a yazın. Peygamberler ve yakınları çizilmez.</p>
    </div>
  );
};
