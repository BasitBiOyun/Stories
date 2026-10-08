import { useEffect, useState } from 'react';
import { api, type HistoryCommit } from '../api';
import { describeChanges, type Change } from '../diff';
import { IconUndo } from '../icons';
import { refreshBasket, storyName, toast, useStore } from '../store';
import { WordDiff, confirm, isArabic } from '../ui';
import { describeFile, timeAgo } from '../util';

/**
 * Everything that was published, newest first, with who did it and what changed. Any change can
 * be undone: the undo goes to your basket like any other change, so it is published the same way.
 */
export const History = () => {
  const member = useStore(state => state.member);
  const config = useStore(state => state.config);
  const [commits, setCommits] = useState<HistoryCommit[] | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    api
      .history()
      .then(result => setCommits(result.commits))
      .catch(error => {
        setCommits([]);
        toast((error as Error).message, 'bad');
      });
  }, []);

  if (!config?.proposals) {
    return (
      <div className="content">
        <h1>Geçmiş</h1>
        <p className="muted">Geçmiş, panelin GitHub bağlantısı kurulunca görünür.</p>
      </div>
    );
  }

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Geçmiş</h1>
          <p>Önizleme sitesine geçen her değişiklik. Birini açıp ne değiştiğini görebilir, gerekirse geri alabilirsiniz.</p>
        </div>
      </div>
      {!commits ? (
        <p className="muted">Yükleniyor…</p>
      ) : (
        <div className="card">
          {commits.length === 0 && <p className="muted">Henüz bir şey yok.</p>}
          {commits.map(commit => {
            const [title, ...rest] = commit.message.split('\n');
            const by = rest.join(' ').trim();
            return (
              <div key={commit.sha} className="history-row">
                <button type="button" className="history-head" aria-expanded={open === commit.sha} onClick={() => setOpen(open === commit.sha ? null : commit.sha)}>
                  <span className="grow">
                    <b>{title.replace(/^Panel: /, '')}</b>
                    <span className="small muted">
                      {' '}
                      · {timeAgo(commit.date)}
                      {by ? ` · ${by.replace(/\s*Co-Authored-By:.*$/is, '').slice(0, 120)}` : ''}
                    </span>
                  </span>
                </button>
                {open === commit.sha && <CommitDetail commit={commit} canUndo={Boolean(member && member.role !== 'viewer')} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const CommitDetail = ({ commit, canUndo }: { commit: HistoryCommit; canUndo: boolean }) => {
  const [files, setFiles] = useState<{ path: string; changes: Change[] }[] | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let live = true;
    (async () => {
      const detail = await api.commit(commit.sha);
      const result: { path: string; changes: Change[] }[] = [];
      for (const file of detail.files.slice(0, 12)) {
        const [before, after] = await Promise.all([
          detail.parents[0] ? api.file(file.path, detail.parents[0]).catch(() => ({ text: null })) : Promise.resolve({ text: null }),
          api.file(file.path, commit.sha).catch(() => ({ text: null })),
        ]);
        result.push({ path: file.path, changes: describeChanges(before.text ? JSON.parse(before.text) : {}, after.text ? JSON.parse(after.text) : {}) });
      }
      if (live) setFiles(result);
    })().catch(error => live && (toast((error as Error).message, 'bad'), setFiles([])));
    return () => {
      live = false;
    };
  }, [commit.sha]);

  return (
    <div className="history-detail">
      {!files ? (
        <p className="small muted">Değişiklikler okunuyor…</p>
      ) : files.length === 0 ? (
        <p className="small muted">Bu değişiklik panelin düzenlediği içerik dosyalarına dokunmuyor (kod veya ayar değişikliği).</p>
      ) : (
        files.map(file => (
          <div key={file.path} className="diff-item">
            <b>{describeFile(file.path, id => storyName(id))}</b>
            {file.changes.slice(0, 10).map((change, index) => (
              <div key={index} className="diff-row">
                <div className="diff-where small muted">{change.where.join(' › ')}</div>
                {typeof change.before === 'string' && typeof change.after === 'string' ? (
                  <WordDiff before={change.before} after={change.after} dir={isArabic(change.before + change.after) ? 'rtl' : undefined} />
                ) : (
                  <div className="small">{change.before === undefined ? 'Eklendi' : change.after === undefined ? 'Silindi' : 'Değişti'}</div>
                )}
              </div>
            ))}
            {file.changes.length > 10 && <p className="small muted">ve {file.changes.length - 10} değişiklik daha</p>}
          </div>
        ))
      )}
      {canUndo && files && files.length > 0 && (
        <button
          type="button"
          className="btn small"
          disabled={busy}
          onClick={async () => {
            if (!(await confirm({ title: 'Bu değişiklik geri alınsın mı?', text: 'Geri alma sepetinize eklenir; yayınlanınca uygulamada eski hâline döner. Sonradan yapılan başka değişikliklere dokunulmaz.', yes: 'Geri al' }))) return;
            setBusy(true);
            try {
              const result = (await api.undo(commit.sha)) as { conflicts?: number };
              await refreshBasket();
              toast(result.conflicts ? `Geri alındı ve sepetinize eklendi. ${result.conflicts} yer sonradan yeniden değiştiği için olduğu gibi bırakıldı.` : 'Geri alındı ve sepetinize eklendi.', 'good');
            } catch (error) {
              toast((error as Error).message, 'bad');
            } finally {
              setBusy(false);
            }
          }}
        >
          <IconUndo size={15} /> Bu değişikliği geri al
        </button>
      )}
    </div>
  );
};
