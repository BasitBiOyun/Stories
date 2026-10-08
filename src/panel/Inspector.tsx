import { useMemo, useState, type ReactNode } from 'react';
import type { BeforeYouRead, Exercise, Level, PageData, VocabularyItem } from '../types';
import { pageFindings } from './checks';
import { describePath } from './diff';
import type { Selection } from './Editor';
import { EXERCISE_TEMPLATES, ExerciseEditor, ObjectFields, StringList, TextField, ValueEditor, newExercise, type EditContext } from './FieldEditor';
import { IconCard, IconPlus, IconTeacher, IconUndo, IconWarn } from './icons';
import { BEFORE_KINDS, EXERCISE_TYPES, GROUP_TYPES, PAGE_TYPES } from './labels';
import { PageMedia } from './PageMedia';
import { navigate } from './router';
import { dirtyDrafts, getState, isDirty, mayEditPath, revertDraft, saveAll, updateDraft, useStore } from './store';
import { Findings, confirm } from './ui';
import { bookPath, editionOf, getIn, guidePath, paragraphs, pathText, plain, setIn, type Path } from './util';

type Tab = 'selected' | 'page' | 'guide' | 'media' | 'checks';

interface Props {
  storyId: string;
  level: string;
  language: 'en' | 'ar';
  pageIndex: number;
  page?: PageData;
  selection: Selection | null;
  onSelect: (selection: Selection | null) => void;
  dirtyCount: number;
}

export const Inspector = ({ storyId, level, language, pageIndex, page, selection, onSelect, dirtyCount }: Props) => {
  const [tab, setTab] = useState<Tab>('page');
  const [shownSelection, setShownSelection] = useState<Selection | null>(null);
  const drafts = useStore(state => state.drafts);
  const saving = useStore(state => state.saving);
  const config = useStore(state => state.config);
  const edition = editionOf(storyId, level, language);
  const filePath = bookPath(edition);
  const otherPath = bookPath(editionOf(storyId, level, language === 'en' ? 'ar' : 'en'));

  // A new click always shows its form.
  if (selection !== shownSelection) {
    setShownSelection(selection);
    if (selection) setTab('selected');
  }

  const ctx: EditContext = {
    language,
    level: level.toUpperCase() as Level,
    page,
    focus: selection?.focus ? pathText(selection.focus) : undefined,
    readOnly: !mayEditPath(filePath),
  };

  const findings = useMemo(() => (page ? pageFindings(page, level.toUpperCase() as Level, language) : []), [page, level, language]);
  const blockers = findings.filter(item => item.finding.level === 'blocker').length;

  // An English change means the Arabic must be checked, and the other way round.
  const otherDraft = drafts[otherPath];
  const otherChanged = otherDraft && isDirty(otherDraft) && JSON.stringify(getIn(otherDraft.value, ['book', 'pages', pageIndex])) !== JSON.stringify(getIn(otherDraft.original, ['book', 'pages', pageIndex]));

  const bookDirty = dirtyDrafts(drafts).filter(draft => draft.path.includes(`/${storyId}-${level.toLowerCase()}-`));

  return (
    <aside className="inspector" aria-label="Düzenleme">
      <div className="inspector-head">
        <div className="tabs" role="tablist">
          {(
            [
              ['selected', 'Seçili'],
              ['page', 'Bu sayfa'],
              ['guide', 'Öğretmen'],
              ['media', 'Resim ve ses'],
              ['checks', blockers ? `Kontroller (${blockers})` : 'Kontroller'],
            ] as [Tab, string][]
          ).map(([key, label]) => (
            <button key={key} type="button" role="tab" aria-selected={tab === key} onClick={() => setTab(key)}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="inspector-body">
        {otherChanged && (
          <div className="notice warn" style={{ marginBottom: 12 }}>
            <IconWarn size={16} />
            <span>{language === 'ar' ? 'Bu sayfanın İngilizcesi değişti; Arapçasını kontrol edin.' : 'Bu sayfanın Arapçası değişti; İngilizcesiyle uyumunu kontrol edin.'}</span>
          </div>
        )}
        {tab === 'selected' &&
          (selection ? (
            <UnitEditor selection={selection} ctx={ctx} onSelect={onSelect} />
          ) : (
            <div className="empty">
              <b>Uygulamada bir şeye tıklayın</b>
              Başlık, paragraf, kelime, resim, soru, seçenek… Tıkladığınız şey burada düzenlenmek üzere açılır. Ya da “Bu sayfa” sekmesinden seçin.
            </div>
          ))}
        {tab === 'page' && page && <PageOutline page={page} pageIndex={pageIndex} filePath={filePath} ctx={ctx} onSelect={next => (onSelect(next), setTab('selected'))} />}
        {tab === 'guide' && <GuideTab storyId={storyId} level={level} language={language} page={page} pageIndex={pageIndex} ctx={ctx} />}
        {tab === 'media' && page && <PageMedia storyId={storyId} level={level} language={language} page={page} pageIndex={pageIndex} />}
        {tab === 'checks' && (
          <div>
            <p className="small muted">Kırmızılar yayından önce düzeltilmeli; turuncular öneridir, karar sizin.</p>
            {findings.length === 0 ? (
              <Findings findings={[]} empty="Bu sayfada bir sorun bulunmadı." />
            ) : (
              findings.map((item, index) => (
                <div key={index} className={`finding ${item.finding.level}`} style={{ marginBottom: 6 }}>
                  <IconWarn size={16} />
                  <span>
                    <b>{item.where}</b> · {item.finding.text}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="inspector-foot">
        {bookDirty.length > 0 ? (
          <span className="chip warn">{bookDirty.length === 1 ? 'Kaydedilmemiş değişiklik var' : `${bookDirty.length} dosyada kaydedilmemiş değişiklik`}</span>
        ) : (
          <span className="small muted">{dirtyCount > 0 ? `Başka kitaplarda ${dirtyCount} kaydedilmemiş dosya var` : 'Her şey kayıtlı'}</span>
        )}
        <div className="savebar">
          {bookDirty.length > 0 && (
            <button
              type="button"
              className="btn ghost small"
              onClick={async () => {
                if (await confirm({ title: 'Değişiklikler geri alınsın mı?', text: 'Bu kitapta kaydetmediğiniz bütün değişiklikler silinir.', yes: 'Geri al', danger: true })) {
                  for (const draft of bookDirty) revertDraft(draft.path);
                }
              }}
            >
              <IconUndo size={15} /> Geri al
            </button>
          )}
          {!config?.proposals && bookDirty.length > 0 && (
            <button type="button" className="btn small" onClick={() => bookDirty.forEach(draft => download(draft.path, draft.value))}>
              Dosyayı indir
            </button>
          )}
          <button type="button" className="btn primary small" disabled={dirtyCount === 0 || saving || !config?.proposals} onClick={() => void saveAll()} title="Ctrl+S">
            {saving ? 'Kaydediliyor…' : 'Kaydet'}
          </button>
        </div>
      </div>
    </aside>
  );
};

const download = (path: string, value: unknown) => {
  const url = URL.createObjectURL(new Blob([`${JSON.stringify(value, null, path.startsWith('tts/') ? 2 : 1)}\n`], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = path.split('/').pop() ?? 'dosya.json';
  link.click();
  URL.revokeObjectURL(url);
};

/** A book file and its other-language twin (when it is open and the panel may change it). */
const pairedBooks = (file: string): string[] => {
  const twin = file.replace(/-(en|ar)\.json$/, (_, language: string) => (language === 'en' ? '-ar.json' : '-en.json'));
  const state = getState();
  return [file, ...(twin !== file && state.drafts[twin] && mayEditPath(twin) ? [twin] : [])];
};

// --- the form for one clicked unit ----------------------------------------------------------

const UnitEditor = ({ selection, ctx, onSelect }: { selection: Selection; ctx: EditContext; onSelect: (selection: Selection | null) => void }) => {
  const draft = useStore(state => state.drafts[selection.file]);
  if (!draft) return <p className="muted">Yükleniyor…</p>;
  const unit = selection.unit;
  const file = selection.file;
  const words = describePath(draft.value, unit);
  const last = unit[unit.length - 1];
  const change = (path: Path) => (next: unknown) => updateDraft(file, value => setIn(value, path, next));
  const base = pathText(unit);
  const pageIndex = typeof unit[2] === 'number' ? unit[2] : -1;
  const page = pageIndex >= 0 ? (getIn(draft.value, ['book', 'pages', pageIndex]) as PageData | undefined) : undefined;
  const pagePath: Path = ['book', 'pages', pageIndex];
  const context = { ...ctx, page: page ?? ctx.page };

  let body: ReactNode;
  if (typeof last === 'string' && last.startsWith('#') && unit[unit.length - 2] === 'content') {
    // One paragraph of a chapter.
    const contentPath = unit.slice(0, -1);
    const content = String(getIn(draft.value, contentPath) ?? '');
    const index = Number(last.slice(1));
    const list = paragraphs(content);
    const notes = (page?.vocabulary ?? []).filter(item => plain(list[index] ?? '').toLowerCase().includes(item.word.toLowerCase()));
    body = (
      <>
        <TextField
          label={`${index + 1}. paragraf`}
          help="**kalın** için iki yıldız. Paragrafı bölmek için boş satır bırakın."
          value={list[index] ?? ''}
          onChange={next => change(contentPath)(list.map((old, at) => (at === index ? next : old)).join('\n\n'))}
          path={base}
          ctx={context}
          long
        />
        <div className="row wrap" style={{ marginBottom: 12 }}>
          <button type="button" className="btn small" disabled={index === 0} onClick={() => onSelect({ file, unit: [...contentPath, `#${index - 1}`] })}>
            Önceki paragraf
          </button>
          <button type="button" className="btn small" disabled={index >= list.length - 1} onClick={() => onSelect({ file, unit: [...contentPath, `#${index + 1}`] })}>
            Sonraki paragraf
          </button>
          <button type="button" className="btn small ghost" onClick={() => onSelect({ file, unit: contentPath })}>
            Bölümün bütün metni
          </button>
        </div>
        {notes.length > 0 && (
          <div className="box nested">
            <div className="box-head">
              <b>Bu paragraftaki kelime notları</b>
            </div>
            <div className="row wrap">
              {notes.map(item => {
                const at = (page?.vocabulary ?? []).indexOf(item);
                return (
                  <button key={item.word} type="button" className="btn small" onClick={() => onSelect({ file, unit: [...pagePath, 'vocabulary', at] })}>
                    {item.word}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  } else if (last === 'hotspots') {
    body = page ? <PageMedia {...mediaProps(file, page, pageIndex, ctx)} focusPictures /> : null;
  } else if (last === 'title' && page) {
    body = (
      <>
        <TextField label="Başlık" value={page.title ?? ''} onChange={change([...pagePath, 'title'])} path={`${pathText(pagePath)}.title`} ctx={context} />
        {page.subtitle !== undefined && <TextField label="Alt başlık" value={page.subtitle ?? ''} onChange={change([...pagePath, 'subtitle'])} path={`${pathText(pagePath)}.subtitle`} ctx={context} />}
        {page.type === 'story' && <p className="small muted">Başlık seslendirmede de okunur; değişirse “Resim ve ses” sekmesinden yeniden seslendirin.</p>}
      </>
    );
  } else if ((unit[unit.length - 2] === 'exercises' || unit[unit.length - 2] === 'languageFocusExercises') && typeof last === 'number') {
    const exercise = getIn(draft.value, unit) as Exercise | undefined;
    body = exercise ? (
      <>
        <ExerciseEditor exercise={exercise} onChange={change(unit)} path={base} ctx={context} />
        <ExerciseTools file={file} unit={unit} onSelect={onSelect} />
      </>
    ) : (
      <p className="muted">Bu etkinlik silindi.</p>
    );
  } else if (unit[unit.length - 2] === 'vocabulary' && typeof last === 'number') {
    const item = getIn(draft.value, unit) as VocabularyItem | undefined;
    const entity = item && String(item.definition).startsWith('__historical_entity__:') ? String(item.definition).split(':')[1] : null;
    body = !item ? (
      <p className="muted">Bu kelime notu silindi.</p>
    ) : entity ? (
      <div>
        <p>
          <b>{item.word}</b> bir Places &amp; People kartına bağlı. Kartın yazıları bütün seviyelerde ortaktır.
        </p>
        <button type="button" className="btn primary" onClick={() => navigate(`/kartlar?kart=${encodeURIComponent(entity)}`)}>
          <IconCard size={16} /> Kartı düzenle
        </button>
        <TextField label="Hikâyede işaretlenen yazı" value={item.word} onChange={next => change([...unit, 'word'])(next)} path={`${base}.word`} ctx={context} checks={false} />
      </div>
    ) : (
      <>
        <ObjectFields value={item as unknown as Record<string, unknown>} onChange={change(unit)} path={base} ctx={context} />
        <button
          type="button"
          className="btn danger small"
          onClick={async () => {
            if (await confirm({ title: 'Kelime notu silinsin mi?', text: `“${item.word}” artık hikâyede işaretlenmez. Öbür dildeki karşılığı da silinir (iki dilin notları aynı sırada durur).`, yes: 'Sil', danger: true })) {
              const listPath = unit.slice(0, -1);
              for (const path of pairedBooks(file)) updateDraft(path, value => setIn(value, listPath, ((getIn(value, listPath) as unknown[]) ?? []).filter((_, at) => at !== last)));
              onSelect(null);
            }
          }}
        >
          Kelime notunu sil
        </button>
      </>
    );
  } else if (last === 'beforeYouRead') {
    const value = getIn(draft.value, unit) as BeforeYouRead | undefined;
    body = value ? <BeforeYouReadEditor value={value} onChange={change(unit)} path={base} ctx={context} /> : <AddMissing file={file} unit={unit} />;
  } else if (last === 'iCan') {
    const value = (getIn(draft.value, unit) as string[] | undefined) ?? [];
    body = <StringList label="I can maddeleri" help="Öğrenci bölüm sonunda kendini bu cümlelerle değerlendirir. Genelde üç madde." value={value} onChange={change(unit)} path={base} ctx={context} addLabel="Madde ekle" />;
  } else if (last === 'groupTask') {
    const value = getIn(draft.value, unit) as Record<string, unknown> | undefined;
    body = value ? (
      <>
        <label className="field">
          <span>Türü</span>
          <select value={String(value.type)} onChange={event => change(unit)({ ...value, type: event.target.value })} disabled={ctx.readOnly}>
            {Object.entries(GROUP_TYPES).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <ObjectFields value={value} onChange={change(unit)} path={base} ctx={context} skip={['type']} />
      </>
    ) : (
      <AddMissing file={file} unit={unit} />
    );
  } else {
    const value = getIn(draft.value, unit);
    body = <ValueEditor name={String(last)} value={value} onChange={change(unit)} path={base} ctx={context} />;
  }

  return (
    <div>
      <div className="crumbs small muted" style={{ marginBottom: 8 }}>
        {(file.includes('/guides/') ? ['Öğretmen ve öğrenci rehberi', ...words] : words).join(' › ')}
      </div>
      {body}
    </div>
  );
};

const mediaProps = (file: string, page: PageData, pageIndex: number, ctx: EditContext) => {
  const match = /books\/([a-zA-Z]+)-(\w\d)-(\w\w)\.json$/.exec(file)!;
  return { storyId: match[1], level: match[2], language: ctx.language, page, pageIndex };
};

const AddMissing = ({ file, unit }: { file: string; unit: Path }) => (
  <div className="empty">
    <b>Bu sayfada bu bölüm yok.</b>
    <button
      type="button"
      className="btn small"
      onClick={() => {
        const key = unit[unit.length - 1];
        const fresh =
          key === 'beforeYouRead'
            ? { kind: 'picture', question: '', options: ['', '', ''], answer: 0 }
            : key === 'groupTask'
              ? { type: 'jigsaw', title: '', time: '15 minutes', groupSize: '3-4', steps: [''], share: '', solo: '' }
              : '';
        updateDraft(file, value => setIn(value, unit, fresh));
      }}
    >
      <IconPlus size={15} /> Ekle
    </button>
  </div>
);

const ExerciseTools = ({ file, unit, onSelect }: { file: string; unit: Path; onSelect: (selection: Selection | null) => void }) => {
  const listPath = unit.slice(0, -1);
  const index = unit[unit.length - 1] as number;
  return (
    <div className="row wrap" style={{ marginTop: 6 }}>
      <button
        type="button"
        className="btn small danger"
        onClick={async () => {
          if (await confirm({ title: 'Etkinlik silinsin mi?', text: 'Etkinlik bu sayfadan kalkar. Kaydetmeden önce “Geri al” ile geri getirebilirsiniz.', yes: 'Sil', danger: true })) {
            updateDraft(file, value => setIn(value, listPath, (getIn(value, listPath) as unknown[]).filter((_, at) => at !== index)));
            onSelect(null);
          }
        }}
      >
        Etkinliği sil
      </button>
    </div>
  );
};

const BeforeYouReadEditor = ({ value, onChange, path, ctx }: { value: BeforeYouRead; onChange: (value: unknown) => void; path: string; ctx: EditContext }) => (
  <div>
    <label className="field">
      <span>Türü</span>
      <select value={value.kind ?? 'picture'} onChange={event => onChange({ ...value, kind: event.target.value })} disabled={ctx.readOnly}>
        {Object.entries(BEFORE_KINDS).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>
    </label>
    <TextField label="Soru" value={value.question} onChange={next => onChange({ ...value, question: next })} path={`${path}.question`} ctx={ctx} long />
    <div className="field">
      <span className="field-label">Seçenekler · doğru olanı işaretleyin</span>
      {value.options.map((option, index) => (
        <div className="answer-row" key={index}>
          <input type="radio" name={`${path}-answer`} checked={value.answer === index} onChange={() => onChange({ ...value, answer: index })} aria-label={`${index + 1}. seçenek doğru`} disabled={ctx.readOnly} />
          <input
            type="text"
            value={option}
            aria-label={`${index + 1}. seçenek`}
            onChange={event => onChange({ ...value, options: value.options.map((old, at) => (at === index ? event.target.value : old)) })}
            disabled={ctx.readOnly}
            dir={ctx.language === 'ar' ? 'rtl' : undefined}
          />
        </div>
      ))}
    </div>
    <TextField label="Kanıt cümlesi" help="Hikâyeden cevabı gösteren sözcükler. Başka bir alıştırmanın bilgisini tekrar etmesin." value={value.quote ?? ''} onChange={next => onChange({ ...value, quote: next })} path={`${path}.quote`} ctx={ctx} long />
  </div>
);

// --- everything on one page --------------------------------------------------------------------

const PageOutline = ({ page, pageIndex, filePath, ctx, onSelect }: { page: PageData; pageIndex: number; filePath: string; ctx: EditContext; onSelect: (selection: Selection) => void }) => {
  const [adding, setAdding] = useState<'exercises' | 'languageFocusExercises' | null>(null);
  const base: Path = ['book', 'pages', pageIndex];
  const open = (unit: Path) => onSelect({ file: filePath, unit });
  const item = (label: string, unit: Path, extra?: string) => (
    <button key={pathText(unit)} type="button" onClick={() => open(unit)}>
      <span className="grow">{label}</span>
      {extra && <span className="chip">{extra}</span>}
    </button>
  );
  const exercises = (key: 'exercises' | 'languageFocusExercises', title: string) => {
    const list = (page[key] ?? []) as Exercise[];
    if (!list.length && page.type !== 'story') return null;
    return (
      <>
        <div className="group">{title}</div>
        {list.map((exercise, index) => item(`${index + 1}. ${exercise.title || exercise.question || EXERCISE_TYPES[exercise.type]?.name}`, [...base, key, index], EXERCISE_TYPES[exercise.type]?.name))}
        {!ctx.readOnly &&
          (adding === key ? (
            <div className="box nested" style={{ marginTop: 6 }}>
              <div className="small muted" style={{ marginBottom: 6 }}>
                Hangi tür etkinlik?
              </div>
              <div className="row wrap">
                {Object.keys(EXERCISE_TEMPLATES).map(type => (
                  <button
                    key={type}
                    type="button"
                    className="btn small"
                    onClick={() => {
                      const prefix = list[0]?.id?.replace(/-[^-]+$/, '') ?? `${page.id}`;
                      updateDraft(filePath, value => setIn(value, [...base, key], [...((getIn(value, [...base, key]) as Exercise[]) ?? []), newExercise(type, prefix)]));
                      setAdding(null);
                      open([...base, key, list.length]);
                    }}
                  >
                    {EXERCISE_TYPES[type]?.name ?? type}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => setAdding(key)}>
              <IconPlus size={15} /> <span className="grow">Etkinlik ekle</span>
            </button>
          ))}
      </>
    );
  };
  const notes = (page.vocabulary ?? []).map((note, index) => ({ note, index }));
  return (
    <nav className="outline" aria-label="Bu sayfadaki her şey">
      <div className="group">{page.type === 'story' ? 'Bölüm' : PAGE_TYPES[page.type] ?? 'Sayfa'}</div>
      {item(`Başlık: ${page.title}`, [...base, 'title'])}
      {page.type === 'story' && item('Resim ve resimdeki noktalar', [...base, 'hotspots'], String(page.hotspots?.length ?? 0))}
      {page.type === 'story' && item('Önce oku (Before you read)', [...base, 'beforeYouRead'], page.beforeYouRead ? undefined : 'yok')}
      {page.content !== undefined &&
        (page.type === 'story'
          ? paragraphs(page.content).map((paragraph, index) => item(`${index + 1}. paragraf: ${plain(paragraph).slice(0, 60)}…`, [...base, 'content', `#${index}`]))
          : item('Sayfa metni', [...base, 'content']))}
      {notes.length > 0 && (
        <>
          <div className="group">Kelime notları ve kartlar</div>
          {notes.map(({ note, index }) => item(note.word, [...base, 'vocabulary', index], String(note.definition).startsWith('__historical_entity__') ? 'kart' : undefined))}
          {!ctx.readOnly && page.type === 'story' && (
            <button
              type="button"
              onClick={() => {
                // The English and Arabic notes of a chapter are pairs in the same order: add to both.
                for (const path of pairedBooks(filePath)) updateDraft(path, value => setIn(value, [...base, 'vocabulary'], [...((getIn(value, [...base, 'vocabulary']) as VocabularyItem[]) ?? []), { word: '', definition: '' }]));
                open([...base, 'vocabulary', notes.length]);
              }}
            >
              <IconPlus size={15} /> <span className="grow">Kelime notu ekle</span>
            </button>
          )}
        </>
      )}
      {page.vocabularyPairs && (
        <>
          <div className="group">Kelime çiftleri</div>
          {item('Bütün çiftler', [...base, 'vocabularyPairs'], String(page.vocabularyPairs.length))}
        </>
      )}
      {exercises('exercises', page.type === 'story' ? 'Quick' : 'Etkinlikler')}
      {page.type === 'story' && exercises('languageFocusExercises', 'Focus (Language Focus)')}
      {page.type === 'story' && (
        <>
          <div className="group">Bölüm sonu</div>
          {item('Grup çalışması', [...base, 'groupTask'], page.groupTask ? undefined : 'yok')}
          {item('I can maddeleri', [...base, 'iCan'], String(page.iCan?.length ?? 0))}
        </>
      )}
      {page.type === 'map' && <p className="small muted">Haritanın yerleri ve çizgileri kodda durur; başlığı ve metni buradan değişir.</p>}
      {page.type === 'places' && (
        <button type="button" onClick={() => navigate('/kartlar')}>
          <IconCard size={15} /> <span className="grow">Places &amp; People kartlarını düzenle</span>
        </button>
      )}
    </nav>
  );
};

// --- the Teacher's Book and the self-study guide for this chapter -------------------------------

const GuideTab = ({ storyId, level, language, page, pageIndex, ctx }: { storyId: string; level: string; language: 'en' | 'ar'; page?: PageData; pageIndex: number; ctx: EditContext }) => {
  const [which, setWhich] = useState<'teacherGuide' | 'selfStudyGuide'>('teacherGuide');
  const file = guidePath(editionOf(storyId, level, language));
  const draft = useStore(state => state.drafts[file]);
  const book = useStore(state => state.drafts[bookPath(editionOf(storyId, level, language))]);
  if (!draft) return <p className="muted">Rehber yükleniyor…</p>;
  const pages = ((book?.value as { book: { pages: PageData[] } } | undefined)?.book.pages ?? []).slice(0, pageIndex + 1);
  const chapter = page?.type === 'story' ? pages.filter(item => item.type === 'story').length : 0;
  const sections = (getIn(draft.value, [which, 'content']) as { chapter: string }[] | undefined) ?? [];
  const index = chapter ? sections.findIndex(section => Number(section.chapter.match(/\d+/)?.[0]) === chapter) : -1;
  const unit: Path = index >= 0 ? [which, 'content', index] : [which, 'metadata'];
  const value = getIn(draft.value, unit);
  const readOnly = !mayEditPath(file);
  return (
    <div>
      <div className="seg" role="group" aria-label="Rehber" style={{ marginBottom: 12 }}>
        <button type="button" aria-pressed={which === 'teacherGuide'} onClick={() => setWhich('teacherGuide')}>
          <IconTeacher size={15} /> Öğretmen kitabı
        </button>
        <button type="button" aria-pressed={which === 'selfStudyGuide'} onClick={() => setWhich('selfStudyGuide')}>
          Kendi kendine çalışma
        </button>
      </div>
      <p className="small muted">
        {index >= 0 ? `Bu bölümün (${chapter}. bölüm) ${which === 'teacherGuide' ? 'ders planı' : 'çalışma rehberi'}. Her bölümün kendine özgü planı vardır; başka bölümden kopyalamayın.` : 'Bu sayfa bir bölüm değil; rehberin genel bilgileri gösteriliyor.'}
      </p>
      {value && typeof value === 'object' ? (
        <ObjectFields value={value as Record<string, unknown>} onChange={next => updateDraft(file, current => setIn(current, unit, next))} path={pathText(unit)} ctx={{ ...ctx, readOnly, page: undefined }} />
      ) : (
        <p className="muted">Bu bölüm için rehberde bir kısım bulunamadı.</p>
      )}
    </div>
  );
};
