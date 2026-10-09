import { useEffect, useState } from 'react';
import { api, type Basket, type MediaItem, type OpenBasket } from '../api';
import { describeChanges, type Change } from '../diff';
import { IconCheck, IconImage, IconRefresh, IconSend, IconSound, IconTrash, IconWarn, IconX } from '../icons';
import { forgetDrafts, getState, refreshBasket, refreshBaskets, storyName, toast, useStore } from '../store';
import { Dialog, WordDiff, confirm, isArabic } from '../ui';
import { describeFile, timeAgo } from '../util';

/**
 * Baskets. Everyone sees their own: what they changed, word by word, and whether the tests passed.
 * Admins also see everyone else's and publish or send them back. Publishing merges the basket in
 * one go, which makes one new preview build however many small changes it holds.
 */

const CHECKS: Record<Basket['checks'], { text: string; kind: string }> = {
  none: { text: 'Değişiklik yok', kind: '' },
  missing: { text: 'Testler başlamadı', kind: 'warn' },
  running: { text: 'Testler çalışıyor', kind: 'warn' },
  passed: { text: 'Testler geçti', kind: 'good' },
  failed: { text: 'Testler hata buldu', kind: 'bad' },
};

export const Baskets = () => {
  const member = useStore(state => state.member);
  const basket = useStore(state => state.basket);
  const baskets = useStore(state => state.baskets);
  const config = useStore(state => state.config);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void refreshBasket();
    void refreshBaskets();
    // While tests run, look again every half minute.
    const timer = window.setInterval(() => {
      const running = getState().basket?.checks === 'running' || (getState().baskets ?? []).some(item => item.checks === 'running' || item.checks === 'missing');
      if (running && document.visibilityState === 'visible') {
        void refreshBasket();
        void refreshBaskets();
      }
    }, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!config?.proposals && !config?.storage) {
    return (
      <div className="content">
        <h1>Sepet</h1>
        <p className="muted">Kaydetme henüz açık değil: panelin GitHub bağlantısı kurulmadı.</p>
      </div>
    );
  }

  const others = (baskets ?? []).filter(item => item.owner !== member?.id && (item.files.length > 0 || item.media.length > 0));
  const refresh = async () => {
    setBusy(true);
    await Promise.all([refreshBasket(), refreshBaskets()]);
    setBusy(false);
  };

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>{member?.approve ? 'Onay bekleyenler ve sepetim' : 'Sepetim'}</h1>
          <p>Kaydettiğiniz değişiklikler sepetinizde durur; uygulamaya henüz geçmemiştir. {member?.approve ? 'Yayınladığınızda hepsi birlikte önizleme sitesine geçer (tek derleme).' : 'Yönetici onaylayınca hepsi birlikte uygulamaya geçer.'}</p>
        </div>
        <div className="actions">
          <button type="button" className="btn" onClick={() => void refresh()} disabled={busy}>
            <IconRefresh size={16} /> Yenile
          </button>
        </div>
      </div>

      <h2 className="section-title">Sepetim</h2>
      {basket ? <BasketCard basket={basket} own ownerName={member?.name ?? ''} /> : <p className="muted">Yükleniyor…</p>}

      {member?.approve && (
        <>
          <h2 className="section-title" style={{ marginTop: 26 }}>
            Ekipten gelenler
          </h2>
          {others.length === 0 ? <p className="muted">Onay bekleyen başka sepet yok.</p> : others.map(item => <BasketCard key={item.branch} basket={item} ownerName={item.ownerName} open={item} />)}
        </>
      )}
    </div>
  );
};

const BasketCard = ({ basket, own, ownerName, open }: { basket: Basket; own?: boolean; ownerName: string; open?: OpenBasket }) => {
  const member = useStore(state => state.member);
  const config = useStore(state => state.config);
  const [note, setNote] = useState(basket.note ?? '');
  const [busy, setBusy] = useState<string | null>(null);
  const [rejecting, setRejecting] = useState(false);
  const empty = basket.files.length === 0 && basket.media.length === 0;
  const checks = CHECKS[basket.checks] ?? CHECKS.none;
  const ownerId = open?.owner ?? member?.id ?? '';
  const isNewBook = open?.kind === 'new-book';
  const filesReady = basket.files.length === 0 || basket.checks === 'passed';

  const run = async (what: string, action: () => Promise<unknown>, done?: string) => {
    setBusy(what);
    try {
      await action();
      if (done) toast(done, 'good');
      await Promise.all([refreshBasket(), refreshBaskets()]);
    } catch (error) {
      toast((error as Error).message, 'bad');
    } finally {
      setBusy(null);
    }
  };

  const publish = () =>
    run(
      'publish',
      async () => {
        const result = await api.publish(open ? (open.kind === 'new-book' ? String(open.number) : open.owner) : ownerId, config?.demo);
        forgetDrafts();
        if (result.mediaErrors.length) toast(`Yayınlandı, ama bazı dosyalar yerine konamadı: ${result.mediaErrors.join('; ')}`, 'bad');
      },
      'Yayınlandı. Önizleme sitesi birkaç dakika içinde yenilenir; resim ve sesler hemen görünür.',
    );

  if (empty && own) {
    return (
      <div className="card">
        <p className="muted">Sepetiniz boş. Bir kitabı açıp değiştirin ve “Kaydet”e basın.</p>
        {basket.rejected && (
          <div className="notice bad">
            <IconX size={16} />
            <span>
              Son sepetinizi {basket.rejected.by} geri çevirdi {basket.rejected.reason ? `: “${basket.rejected.reason}”` : ''} ({timeAgo(basket.rejected.at)}).
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="card basket">
      <div className="row wrap" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
        <div>
          <b>{own ? 'Benim değişikliklerim' : isNewBook ? `Yeni kitap: ${open?.title.replace(/^Panel: /, '')}` : ownerName}</b>
          <span className="small muted">
            {' '}
            · {basket.files.length} dosya{basket.media.length ? ` · ${basket.media.length} resim/ses` : ''}
            {open?.updatedAt ? ` · ${timeAgo(open.updatedAt)}` : ''}
          </span>
        </div>
        <div className="row wrap">
          {basket.files.length > 0 && <span className={`chip ${checks.kind}`}>{checks.text}</span>}
          {basket.submitted && <span className="chip good">Onaya gönderildi</span>}
          {basket.behind > 0 && <span className="chip">Önizlemede {basket.behind} yeni değişiklik var</span>}
        </div>
      </div>
      {basket.note && !own && <div className="notice">“{basket.note}”</div>}
      {basket.checks === 'failed' && (
        <div className="notice bad">
          <IconWarn size={16} />
          <span>Testler bu sepette bir sorun buldu. Aşağıdaki değişikliklere bakın; kırmızı uyarısı olan alanı düzeltip yeniden kaydedin.{basket.url ? ' ' : ''}</span>
        </div>
      )}

      {basket.files.map(file => (
        <FileChanges key={file.path} path={file.path} status={file.status} ownerId={ownerId} branchRef={isNewBook ? `branch:${basket.branch}` : `basket:${ownerId}`} canDiscard={Boolean(own)} />
      ))}
      {basket.media.length > 0 && <MediaList media={basket.media} canRemove={Boolean(own)} />}

      <div className="row wrap" style={{ marginTop: 12 }}>
        {own && !basket.submitted && !member?.approve && (
          <>
            <input type="text" value={note} onChange={event => setNote(event.target.value)} placeholder="Yöneticiye kısa bir not (isteğe bağlı)" aria-label="Not" style={{ flex: '1 1 260px' }} />
            <button type="button" className="btn primary" disabled={busy !== null} onClick={() => void run('submit', () => api.submit(note), 'Onaya gönderildi. Yönetici yayınlayınca uygulamaya geçer.')}>
              <IconSend size={16} /> Onaya gönder
            </button>
          </>
        )}
        {member?.approve && (
          <button type="button" className="btn primary" disabled={busy !== null || !filesReady} onClick={() => void publish()} title={filesReady ? '' : 'Testler geçince yayınlanabilir.'}>
            <IconCheck size={16} /> {busy === 'publish' ? 'Yayınlanıyor…' : 'Yayınla'}
          </button>
        )}
        {member?.approve && !own && (
          <button type="button" className="btn" disabled={busy !== null} onClick={() => setRejecting(true)}>
            <IconX size={16} /> Geri çevir
          </button>
        )}
        {own && (
          <button
            type="button"
            className="btn ghost danger"
            disabled={busy !== null}
            onClick={async () => {
              if (await confirm({ title: 'Sepet boşaltılsın mı?', text: 'Sepetteki bütün değişiklikler silinir; uygulamaya hiçbiri geçmez.', yes: 'Boşalt', danger: true })) {
                await run('clear', () => api.clear(), 'Sepet boşaltıldı.');
                forgetDrafts();
              }
            }}
          >
            <IconTrash size={16} /> Sepeti boşalt
          </button>
        )}
        {member?.approve && basket.files.length > 0 && !filesReady && <span className="small muted">Testler geçince yayınlanabilir; bu sayfa kendini yeniler.</span>}
        {basket.url && (
          <a className="small muted" href={basket.url} target="_blank" rel="noreferrer">
            GitHub’da gör
          </a>
        )}
      </div>
      {rejecting && <RejectDialog onClose={() => setRejecting(false)} onReject={reason => run('reject', () => api.reject(open?.kind === 'new-book' ? String(open.number) : ownerId, reason), 'Geri çevrildi.')} />}
    </section>
  );
};

const RejectDialog = ({ onClose, onReject }: { onClose: () => void; onReject: (reason: string) => void }) => {
  const [reason, setReason] = useState('');
  return (
    <Dialog title="Sepet geri çevrilsin mi?" onClose={onClose}>
      <p className="muted">Değişiklikler silinir ve uygulamaya geçmez. Sahibi nedenini panelde görür.</p>
      <label className="field">
        <span className="field-label">Neden?</span>
        <textarea value={reason} onChange={event => setReason(event.target.value)} rows={3} />
      </label>
      <div className="buttons">
        <button type="button" className="btn" onClick={onClose}>
          Vazgeç
        </button>
        <button
          type="button"
          className="btn danger"
          onClick={() => {
            onReject(reason);
            onClose();
          }}
        >
          Geri çevir
        </button>
      </div>
    </Dialog>
  );
};

/** One file of a basket: every changed text, word by word. */
const FileChanges = ({ path, status, branchRef, canDiscard }: { path: string; status: string; ownerId: string; branchRef: string; canDiscard: boolean }) => {
  const [changes, setChanges] = useState<Change[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [all, setAll] = useState(false);
  const [pictures, setPictures] = useState<[string | null, string | null] | null>(null);
  useEffect(() => {
    let live = true;
    Promise.all([api.file(path, 'base'), api.file(path, branchRef)])
      .then(([before, after]) => {
        if (!live) return;
        if (path.endsWith('.webp')) {
          setPictures([before.image ?? null, after.image ?? null]);
          setChanges([]);
          return;
        }
        const a = before.text ? JSON.parse(before.text) : {};
        const b = after.text ? JSON.parse(after.text) : {};
        setChanges(path.endsWith('.json') ? describeChanges(a, b) : []);
      })
      .catch(reason => live && setError((reason as Error).message));
    return () => {
      live = false;
    };
  }, [path, branchRef]);
  const shown = all ? changes ?? [] : (changes ?? []).slice(0, 8);
  return (
    <details className="diff-item" open>
      <summary>
        <b>{describeFile(path, id => storyName(id))}</b>
        <span className="small muted">
          {' '}
          · {pictures ? 'resim değişti' : status === 'added' ? 'yeni dosya' : status === 'removed' ? 'silindi' : changes ? `${changes.length} değişiklik` : '…'}
        </span>
        {canDiscard && (
          <button
            type="button"
            className="btn ghost small"
            style={{ marginInlineStart: 8 }}
            onClick={async event => {
              event.preventDefault();
              if (!(await confirm({ title: 'Bu dosyadaki değişiklikler geri alınsın mı?', text: 'Dosya önizlemedeki hâline döner.', yes: 'Geri al', danger: true }))) return;
              try {
                await api.discard(path);
                forgetDrafts([path]);
                await refreshBasket();
                toast('Dosya sepetten çıkarıldı.', 'good');
              } catch (reason) {
                toast((reason as Error).message, 'bad');
              }
            }}
          >
            Sepetten çıkar
          </button>
        )}
      </summary>
      {error && <p className="small muted">{error}</p>}
      {pictures && (
        <div className="row wrap" style={{ gap: 16, marginTop: 8 }}>
          {(['Önce', 'Sonra'] as const).map((label, index) => (
            <figure key={label} style={{ margin: 0 }}>
              {pictures[index] ? <img src={pictures[index]!} alt={label} width={140} height={140} style={{ borderRadius: 10, objectFit: 'cover' }} /> : <div className="small muted">resim yoktu</div>}
              <figcaption className="small muted">{label}</figcaption>
            </figure>
          ))}
        </div>
      )}
      {shown.map((change, index) => (
        <div key={index} className="diff-row">
          <div className="diff-where small muted">{change.where.join(' › ') || 'Dosya'}</div>
          <ChangeView change={change} />
        </div>
      ))}
      {changes && changes.length > 8 && !all && (
        <button type="button" className="btn ghost small" onClick={() => setAll(true)}>
          {changes.length - 8} değişikliği daha göster
        </button>
      )}
    </details>
  );
};

const text = (value: unknown) => (value === undefined ? '' : typeof value === 'string' ? value : JSON.stringify(value, null, 1));

const ChangeView = ({ change }: { change: Change }) => {
  if (change.before === undefined) return <div className="diff-text added">+ {summaryOf(change.after)}</div>;
  if (change.after === undefined) return <div className="diff-text removed">− {summaryOf(change.before)}</div>;
  const before = text(change.before);
  const after = text(change.after);
  return <WordDiff before={before} after={after} dir={isArabic(before + after) ? 'rtl' : undefined} />;
};

const summaryOf = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const name = record.title ?? record.question ?? record.word ?? record.text;
    if (typeof name === 'string') return `${name}`;
  }
  return text(value).slice(0, 300);
};

const MediaList = ({ media, canRemove }: { media: MediaItem[]; canRemove: boolean }) => (
  <div className="diff-item">
    <b>Resim ve sesler</b>
    <div className="media-list">
      {media.map(item => (
        <div key={item.staged} className="media-row">
          {item.kind === 'image' ? <img src={item.url} alt="" className="thumb-sm" /> : <IconSound size={20} />}
          <span className="grow">
            <b>{item.label || item.target}</b>
            <span className="small muted">
              {' '}
              · {item.edition ? describeFile(`src/content/books/${item.edition}.json`, id => storyName(id)) : item.target} · {item.by} · {timeAgo(item.at)}
            </span>
            {item.kind === 'audio' && <audio controls preload="none" src={item.url} style={{ display: 'block', width: '100%', marginTop: 4 }} />}
          </span>
          {canRemove && (
            <button
              type="button"
              className="icon-btn danger"
              aria-label="Çıkar"
              title="Sepetten çıkar"
              onClick={async () => {
                try {
                  await api.removeMedia(item.staged);
                  await refreshBasket();
                } catch (error) {
                  toast((error as Error).message, 'bad');
                }
              }}
            >
              {item.kind === 'image' ? <IconImage size={16} /> : null}
              <IconTrash size={16} />
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);
