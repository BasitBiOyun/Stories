import { useCallback, useEffect, useMemo, useState } from 'react';
import type { User } from '@firebase/auth';
import type { BookData, Level, PageData } from '../types';
import { bookCatalog } from '../content/bookCatalog';
import { checkEnglishPage, type ContentFinding } from '../content/rules';
import { editionName } from '../content/editionName';
import storyFile from '../content/stories.json';
import {
  decideProposal,
  loadConfig,
  loadMember,
  loadProposals,
  mayEdit,
  sendProposal,
  signIn,
  signOutOfPanel,
  teamFetch,
  watchUser,
  type Member,
  type PanelConfig,
  type Proposal,
} from './team';

/**
 * The content panel: an editor opens a book, reads it page by page, changes the text and
 * downloads the changed file. The house rules (src/content/rules.ts) are checked while they
 * type, so a mistake is seen before it is saved, not after it is published.
 *
 * With a team list on the server, people sign in with Google and a saved change becomes a
 * proposal (a pull request named after them) that only an admin approves. Without a team list
 * the panel works from the preview link and offers the changed file as a download.
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

/** Rule findings for the whole book, so a proposal can never add a new one. */
const countFindings = (file: EditionFile) =>
  file.language === 'en' ? file.book.pages.reduce((total, page) => total + checkEnglishPage(page, file.level).length, 0) : 0;

const Proposals = ({ member, onChanged }: { member: Member; onChanged: number }) => {
  const [items, setItems] = useState<Proposal[] | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const refresh = useCallback(() => {
    loadProposals()
      .then(setItems)
      .catch((error: Error) => setMessage(error.message));
  }, []);
  useEffect(refresh, [refresh, onChanged]);

  const decide = async (number: number, approve: boolean) => {
    setMessage(null);
    try {
      await decideProposal(number, approve);
      setMessage(approve ? `Proposal #${number} is approved and goes live with the next build.` : `Proposal #${number} is rejected.`);
      refresh();
    } catch (error) {
      setMessage((error as Error).message);
    }
  };

  return (
    <div className="card">
      <label>Open proposals</label>
      {message && <p className="muted">{message}</p>}
      {items === null && !message && <p className="muted">Loading …</p>}
      {items?.length === 0 && <p className="muted">There is no open proposal.</p>}
      {items?.map(item => (
        <div key={item.number} className="row" style={{ justifyContent: 'space-between' }}>
          <span>
            <a href={item.url} target="_blank" rel="noreferrer">
              #{item.number} {item.title}
            </a>
            <br />
            <span className="muted">{item.body.split('\n')[0].replace(/\*\*/g, '')}</span>
          </span>
          {member.approve && (
            <span className="row">
              <button className="primary" onClick={() => decide(item.number, true)}>
                Approve and publish
              </button>
              <button onClick={() => decide(item.number, false)}>Reject</button>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export const Panel = () => {
  const [config, setConfig] = useState<PanelConfig | null | undefined>(undefined);
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [member, setMember] = useState<Member | null>(null);
  const [problem, setProblem] = useState<string | null>(null);

  useEffect(() => {
    loadConfig()
      .then(setConfig)
      .catch(() => setConfig(null));
  }, []);
  useEffect(() => (config ? watchUser(setUser) : undefined), [config]);
  useEffect(() => {
    setMember(null);
    setProblem(null);
    if (!user) return;
    loadMember()
      .then(setMember)
      .catch((error: Error) => setProblem(error.message));
  }, [user]);

  if (config === undefined || (config && user === undefined))
    return (
      <p className="muted" style={{ padding: 24 }}>
        Opening the panel …
      </p>
    );
  if (config && !member) {
    return (
      <main>
        <div className="card" style={{ maxWidth: 520, margin: '48px auto' }}>
          <h1>Content panel</h1>
          <p>Sign in with the Google account the admin added to the team list.</p>
          {problem && <p className="finding bad">{problem}</p>}
          {user ? (
            <button onClick={() => signOutOfPanel()}>Sign out ({user.email})</button>
          ) : (
            <button className="primary" onClick={() => signIn().catch((error: Error) => setProblem(error.message))}>
              Sign in with Google
            </button>
          )}
        </div>
      </main>
    );
  }
  return <Editor config={config} member={member} />;
};

const Editor = ({ config, member }: { config: PanelConfig | null; member: Member | null }) => {
  const editions = useMemo(() => bookCatalog.flatMap(entry => (['en', 'ar'] as const).map(language => ({ ...entry, language }))), []);
  const [selected, setSelected] = useState(() => editions[0]);
  const [file, setFile] = useState<EditionFile | null>(null);
  const [original, setOriginal] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [note, setNote] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<{ number: number; url: string } | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);
  const [proposalsVersion, setProposalsVersion] = useState(0);

  const name = editionName(selected.storyId, selected.level, selected.language);

  useEffect(() => {
    let current = true;
    setFile(null);
    setError(null);
    setPageIndex(0);
    // The content files are served beside the panel, behind the same preview key.
    setSent(null);
    setSendError(null);
    teamFetch(`/content/${name}.json`)
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
  const editable = mayEdit(member, selected.language);
  const originalFindings = useMemo(() => (original ? countFindings(JSON.parse(original) as EditionFile) : 0), [original]);
  const addsFindings = Boolean(file) && changed && countFindings(file!) > originalFindings;
  const canPropose = Boolean(config?.proposals && member && editable);

  const propose = async () => {
    if (!file) return;
    setSending(true);
    setSendError(null);
    try {
      const result = await sendProposal(name, file, note);
      setSent(result);
      setOriginal(JSON.stringify(file));
      setNote('');
      setProposalsVersion(version => version + 1);
    } catch (error) {
      setSendError((error as Error).message);
    } finally {
      setSending(false);
    }
  };

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
        <p>
          {member
            ? 'Change the text and send it as a proposal. An admin approves it before it goes live.'
            : 'Read a book, change its text, download the file. Nothing is published from here.'}
        </p>
        <span className="row" style={{ marginInlineStart: 'auto' }}>
          {member && (
            <>
              <span className="pill">
                {member.email} · {member.label}
              </span>
              <button onClick={() => signOutOfPanel()}>Sign out</button>
            </>
          )}
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
                  {!editable && <span className="pill">read only for your role</span>}
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
                        readOnly={!editable}
                      />
                    ) : (
                      <input
                        id={`field-${field.key}`}
                        type="text"
                        dir={isEnglish ? 'ltr' : 'rtl'}
                        value={field.value}
                        onChange={event => editPage(field.key, event.target.value)}
                        readOnly={!editable}
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
                            readOnly={!editable}
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

                {canPropose && (
                  <div>
                    <label htmlFor="proposal-note">Send as a proposal</label>
                    <input
                      id="proposal-note"
                      type="text"
                      placeholder="What did you change? (for the admin)"
                      value={note}
                      onChange={event => setNote(event.target.value)}
                    />
                    {addsFindings && <p className="finding bad">This change breaks a house rule. Fix it before sending.</p>}
                    {sendError && <p className="finding bad">{sendError}</p>}
                    {sent && (
                      <p className="ok">
                        Sent as{' '}
                        <a href={sent.url} target="_blank" rel="noreferrer">
                          proposal #{sent.number}
                        </a>
                        . The tests run on it, then an admin approves it.
                      </p>
                    )}
                    <button className="primary" disabled={!changed || addsFindings || sending} onClick={propose}>
                      {sending ? 'Sending …' : 'Send proposal'}
                    </button>
                  </div>
                )}
              </div>
            )}
            {member && config?.proposals && <Proposals member={member} onChanged={proposalsVersion} />}
          </div>
        </div>
      </main>
    </>
  );
};
