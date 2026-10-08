import { useEffect, useState } from 'react';
import { api } from '../api';
import { IconCheck, IconRocket, IconWarn } from '../icons';
import { toast, useStore } from '../store';
import { confirm } from '../ui';
import { timeAgo } from '../util';

type Release = Awaited<ReturnType<typeof api.release>>;

/** The panel's connections, and (once the live site exists) moving the preview to it. */
export const Settings = () => {
  const config = useStore(state => state.config);
  const member = useStore(state => state.member);
  const [release, setRelease] = useState<Release | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!config?.proposals) return;
    api
      .release()
      .then(setRelease)
      .catch(() => setRelease({ enabled: false }));
  }, [config?.proposals]);

  const status = (ok: boolean | undefined, good: string, bad: string) => (
    <li className={ok ? 'good' : 'bad'}>
      {ok ? <IconCheck size={16} /> : <IconWarn size={16} />} {ok ? good : bad}
    </li>
  );

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Yayın ve ayarlar</h1>
          <p>Panelin bağlantıları ve canlı siteye geçiş.</p>
        </div>
      </div>
      <div className="grid two">
        <section className="card">
          <h2>Bağlantılar</h2>
          <ul className="status-list">
            {status(config?.proposals, 'GitHub bağlı: kaydetme, onay ve geçmiş çalışıyor.', 'GitHub bağlı değil: kaydetme kapalı. Sunucuya PANEL_GITHUB_TOKEN anahtarı eklenmeli.')}
            {status(config?.storage, 'Depolama bağlı: resim, ses yükleme ve ekip listesi çalışıyor.', 'Depolama bağlı değil: resim ve ses yüklenemez.')}
            {config?.demo && <li className="bad">Deneme sürümü: değişiklikler hafızada durur, hiçbir yere gitmez.</li>}
          </ul>
          <p className="small muted">Ana dal: {config?.baseBranch}. Her yayın bu dala tek bir birleştirme yapar ve önizleme sitesi bir kez derlenir.</p>
        </section>
        <section className="card">
          <h2>
            <IconRocket size={18} /> Canlı site
          </h2>
          {!release ? (
            <p className="muted">Bakılıyor…</p>
          ) : !release.enabled ? (
            <p className="muted">Canlı site henüz kurulmadı; her şey önizleme sitesinde. Alan adı (ör. MEB veya EBA) belli olunca buradan tek tuşla canlıya alınacak.</p>
          ) : (
            <>
              <p>{release.aheadBy ? `Önizlemede canlıya geçmemiş ${release.aheadBy} değişiklik var.` : 'Canlı site önizlemeyle aynı.'}</p>
              <ul className="list plain">
                {(release.waiting ?? []).slice(0, 10).map(item => (
                  <li key={item.sha} className="small">
                    {item.message.split('\n')[0].replace(/^Panel: /, '')} · {timeAgo(item.date)}
                  </li>
                ))}
              </ul>
              {member?.approve && (
                <button
                  type="button"
                  className="btn primary"
                  disabled={busy || !release.aheadBy}
                  onClick={async () => {
                    if (!(await confirm({ title: 'Canlıya alınsın mı?', text: 'Önizleme sitesindeki her şey herkesin kullandığı siteye geçer.', yes: 'Canlıya al' }))) return;
                    setBusy(true);
                    try {
                      await api.goLive();
                      toast('Canlıya alındı. Site birkaç dakika içinde yenilenir.', 'good');
                      setRelease(await api.release());
                    } catch (error) {
                      toast((error as Error).message, 'bad');
                    } finally {
                      setBusy(false);
                    }
                  }}
                >
                  Canlıya al
                </button>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};
