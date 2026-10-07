import { useEffect, useMemo, useState } from 'react';
import type { BookData, Level, PageData } from '../types';
import { bookCatalog } from '../content/bookCatalog';
import { checkEnglishPage, type ContentFinding } from '../content/rules';
import { editionName } from '../content/editionName';
import storyFile from '../content/stories.json';

/**
 * The content panel: an editor opens a book, reads it page by page, changes the text and
 * downloads the changed file. The house rules (src/content/rules.ts) are checked while they
 * type, so a mistake is seen before it is saved, not after it is published.
 *
 * The panel never writes anything by itself: the downloaded file goes into the repository by
 * the usual route, which keeps every change reviewed and reversible. Signing in, roles and
 * publishing straight from here wait for the accounts stage.
 */

interface EditionFile {
  schema: number;
  storyId: string;
  level: Level;
  language: 'en' | 'ar';
  collection: string;
  book: BookData;
}

const storyName = (storyId: string): string => {
  const story = (storyFile.stories as { id: string; text: { en: { name: string } } }[]).find(item => item.id === storyId);
  return story?.text.en.name ?? storyId;
};

const download = (name: string, text: string) => {
  const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  URL.revokeObjectURL(url);
};

/** The fields of a page an editor may change here: the text a learner reads. */
const pageFields = (page: PageData) => [
  { key: 'title' as const, label: 'Title', value: page.title ?? '', multiline: false },
  { key: 'subtitle' as const, label: 'Subtitle', value: page.subtitle ?? '', multiline: false },
  { key: 'content' as const, label: 'Text', value: page.content ?? '', multiline: true },
];

const Findings = ({ findings }: { findings: ContentFinding[] }) => {
  if (findings.length === 0) return <p className="ok">No rule is broken on this page.</p>;
  return (
    <div>
      {findings.map((finding, index) => (
        <p key={`${finding.where}-${index}`} className={`finding${finding.rule === 'shared term' ? ' bad' : ''}`}>
          <strong>{finding.rule}</strong> · {finding.detail}
          <br />
          <span className="muted">{finding.where}</span>
        </p>
      ))}
    </div>
  );
};

export const Panel = () => {
  const editions = useMemo(() => bookCatalog.flatMap(entry => (['en', 'ar'] as const).map(language => ({ ...entry, language }))), []);
  const [selected, setSelected] = useState(() => editions[0]);
  const [file, setFile] = useState<EditionFile | null>(null);
  const [original, setOriginal] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const name = editionName(selected.storyId, selected.level, selected.language);

  useEffect(() => {
    let current = true;
    setFile(null);
    setError(null);
    setPageIndex(0);
    // The content files are served beside the panel, behind the same preview key.
    fetch(`/content/${name}.json`)
      .then(response => (response.ok ? response.json() : Promise.reject(new Error(`the server answered ${response.status}`))))
      .then((loaded: EditionFile) => {
        if (!current) return;
        setFile(structuredClone(loaded));
        setOriginal(JSON.stringify(loaded));
      })
      .catch((reason: Error) => {
        if (current) setError(reason.message);
      });
    return () => {
      current = false;
    };
  }, [name]);

  const page = file?.book.pages[pageIndex];
  const isEnglish = selected.language === 'en';
  const findings = useMemo(() => (page && isEnglish ? checkEnglishPage(page, selected.level) : []), [page, isEnglish, selected.level]);
  const changed = Boolean(file) && JSON.stringify(file) !== original;

  const editPage = (key: 'title' | 'subtitle' | 'content', value: string) => {
    setFile(current => {
      if (!current) return current;
      const next = structuredClone(current);
      next.book.pages[pageIndex] = { ...next.book.pages[pageIndex], [key]: value };
      return next;
    });
  };

  const editInstructions = (exerciseIndex: number, list: 'exercises' | 'languageFocusExercises', value: string) => {
    setFile(current => {
      if (!current) return current;
      const next = structuredClone(current);
      const target = next.book.pages[pageIndex][list];
      if (target?.[exerciseIndex]) target[exerciseIndex] = { ...target[exerciseIndex], instructions: value };
      return next;
    });
  };

  return (
    <>
      <header>
        <h1>Content panel</h1>
        <p>Read a book, change its text, download the file. Nothing is published from here.</p>
        <span style={{ marginInlineStart: 'auto' }}>
          <button
            className="primary"
            disabled={!file || !changed}
            onClick={() => file && download(`${name}.json`, `${JSON.stringify(file, null, 1)}\n`)}
          >
            Download {name}.json
          </button>
        </span>
      </header>
      <main>
        <div className="grid">
          <div className="card list" style={{ padding: 0 }}>
            {editions.map(edition => {
              const key = editionName(edition.storyId, edition.level, edition.language);
              return (
                <button key={key} aria-current={key === name} onClick={() => setSelected(edition)}>
                  {storyName(edition.storyId)} · {edition.level} · {edition.language.toUpperCase()}
                </button>
              );
            })}
          </div>

          <div>
            {error && <p className="finding bad">This book could not be opened: {error}</p>}
            {!file && !error && <p className="muted">Opening {name} …</p>}
            {file && page && (
              <div className="card">
                <div className="row">
                  <span className="pill">{file.book.pages.length} pages</span>
                  <button disabled={pageIndex === 0} onClick={() => setPageIndex(index => index - 1)}>
                    Previous page
                  </button>
                  <select
                    value={pageIndex}
                    onChange={event => setPageIndex(Number(event.target.value))}
                    style={{ padding: 7, borderRadius: 8, border: '1px solid var(--line)' }}
                  >
                    {file.book.pages.map((item, index) => (
                      <option key={item.id} value={index}>
                        {index + 1}. {item.title || item.type}
                      </option>
                    ))}
                  </select>
                  <button disabled={pageIndex === file.book.pages.length - 1} onClick={() => setPageIndex(index => index + 1)}>
                    Next page
                  </button>
                  {changed && <span className="changed">changed — not saved yet</span>}
                </div>

                {pageFields(page).map(field => (
                  <div key={field.key}>
                    <label htmlFor={`field-${field.key}`}>{field.label}</label>
                    {field.multiline ? (
                      <textarea
                        id={`field-${field.key}`}
                        dir={isEnglish ? 'ltr' : 'rtl'}
                        value={field.value}
                        onChange={event => editPage(field.key, event.target.value)}
                        rows={10}
                      />
                    ) : (
                      <input
                        id={`field-${field.key}`}
                        type="text"
                        dir={isEnglish ? 'ltr' : 'rtl'}
                        value={field.value}
                        onChange={event => editPage(field.key, event.target.value)}
                      />
                    )}
                  </div>
                ))}

                {(['exercises', 'languageFocusExercises'] as const).map(list => {
                  const items = page[list] ?? [];
                  if (items.length === 0) return null;
                  return (
                    <div key={list}>
                      <label>{list === 'exercises' ? 'Activity instructions' : 'Language Focus instructions'}</label>
                      {items.map((exercise, index) => (
                        <div key={exercise.id} style={{ marginBottom: 8 }}>
                          <span className="muted">
                            {exercise.id} · {exercise.type}
                          </span>
                          <input
                            type="text"
                            dir={isEnglish ? 'ltr' : 'rtl'}
                            value={exercise.instructions ?? ''}
                            onChange={event => editInstructions(index, list, event.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  );
                })}

                <label>House rules on this page</label>
                {isEnglish ? (
                  <Findings findings={findings} />
                ) : (
                  <p className="muted">The rules are written for the English text. Arabic is read by the teacher who checks it.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
