import { useMemo, useState } from 'react';
import { IconInbox, IconSearch, IconSound, IconSparkDoc, IconWarn } from '../icons';
import { navigate } from '../router';
import { storyName, useStore, type EditionSummary } from '../store';
import { timeAgo } from '../util';

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const Home = () => {
  const summary = useStore(state => state.summary);
  const stories = useStore(state => state.stories);
  const member = useStore(state => state.member);
  const basket = useStore(state => state.basket);
  const baskets = useStore(state => state.baskets);
  const config = useStore(state => state.config);
  const [allStale, setAllStale] = useState(false);

  const stats = useMemo(() => {
    const list = summary ?? [];
    const chapters = list.reduce((sum, item) => sum + item.pages.filter(page => page.type === 'story').length, 0);
    const exercises = list.reduce((sum, item) => sum + item.pages.reduce((total, page) => total + page.quick + page.focus, 0), 0);
    const stale = list.flatMap(item => item.pages.filter(page => page.audio === 'stale').map(page => ({ item, page })));
    return { editions: list.length, chapters, exercises, stale };
  }, [summary]);

  const waiting = (baskets ?? []).filter(item => item.owner !== member?.id && (item.files.length > 0 || item.media.length > 0));
  const mine = (basket?.files.length ?? 0) + (basket?.media.length ?? 0);

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Merhaba{member?.name ? `, ${member.name.split(' ')[0]}` : ''}</h1>
          <p>Bir kitabı açıp uygulamanın üstünde tıklayarak değiştirin. Değişiklikler sepetinizde toplanır; yönetici tek seferde yayınlar.</p>
        </div>
        <div className="actions">
          <button type="button" className="btn primary" onClick={() => navigate('/kitaplar')}>
            Bir kitabı düzenle
          </button>
          {member?.role !== 'viewer' && (
            <button type="button" className="btn" onClick={() => navigate('/yeni-kitap')}>
              <IconSparkDoc size={16} /> Yeni kitap
            </button>
          )}
        </div>
      </div>

      {config && !config.proposals && (
        <div className="notice warn" style={{ marginBottom: 16 }}>
          <IconWarn size={16} />
          <span>Panelin GitHub bağlantısı henüz kurulmadı: her şeyi görebilir ve deneyebilirsiniz, ama kaydetmek bağlantı kurulunca açılır.</span>
        </div>
      )}

      <div className="grid four" style={{ marginBottom: 16 }}>
        <div className="stat">
          <b>{stories?.filter(item => !item.hidden).length ?? '…'}</b>
          <span>görünen kitap</span>
        </div>
        <div className="stat">
          <b>{stats.editions || '…'}</b>
          <span>baskı (seviye × dil)</span>
        </div>
        <div className="stat">
          <b>{stats.chapters || '…'}</b>
          <span>bölüm</span>
        </div>
        <div className="stat">
          <b>{stats.exercises || '…'}</b>
          <span>alıştırma</span>
        </div>
      </div>

      <div className="grid two">
        <section className="card">
          <h2>
            <IconInbox size={18} /> {member?.approve ? 'Onay bekleyenler' : 'Sepetim'}
          </h2>
          {member?.approve && waiting.length > 0 ? (
            <ul className="list plain">
              {waiting.map(item => (
                <li key={item.branch}>
                  <a href="#/onay">
                    <b>{item.ownerName}</b> · {item.files.length + item.media.length} değişiklik · {timeAgo(item.updatedAt)}
                  </a>
                </li>
              ))}
            </ul>
          ) : member?.approve ? (
            <p className="muted">Onay bekleyen değişiklik yok.</p>
          ) : null}
          <p>
            {mine > 0 ? (
              <>
                Sepetinizde {mine} değişiklik var.{' '}
                <a href="#/onay">{basket?.submitted ? 'Onaya gönderildi.' : 'Bakıp onaya gönderin.'}</a>
              </>
            ) : (
              <span className="muted">Sepetiniz boş.</span>
            )}
          </p>
          {basket?.rejected && (
            <div className="notice bad">
              {basket.rejected.by} geri çevirdi: “{basket.rejected.reason}”
            </div>
          )}
        </section>

        <section className="card">
          <h2>
            <IconSound size={18} /> Sesi eski kalan bölümler
          </h2>
          {stats.stale.length === 0 ? (
            <p className="muted">Bütün kayıtlar güncel metinle aynı.</p>
          ) : (
            <>
              <p className="small muted">Bu bölümlerin metni seslendirildikten sonra değişti. Açıp “Resim ve ses” sekmesinden yeniden seslendirin.</p>
              <ul className="list plain">
                {(allStale ? stats.stale : stats.stale.slice(0, 12)).map(({ item, page }) => (
                  <li key={`${item.edition}-${page.id}`}>
                    <a href={`#/duzenle/${item.storyId}/${item.level.toLowerCase()}/${item.pages.indexOf(page) + 1}?dil=${item.language}`}>
                      {storyName(item.storyId)} · {item.level} · {item.language === 'ar' ? 'Arapça' : 'İngilizce'} · {page.id}. bölüm
                    </a>
                  </li>
                ))}
              </ul>
              {stats.stale.length > 12 && (
                <button type="button" className="linkish small" onClick={() => setAllStale(value => !value)}>
                  {allStale ? 'Daha az göster' : `ve ${stats.stale.length - 12} bölüm daha: hepsini göster`}
                </button>
              )}
            </>
          )}
        </section>
      </div>

      <section className="card" style={{ marginTop: 16 }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h2>Kütüphane</h2>
          <span className="small muted">
            <IconSearch size={14} /> Bir yazıyı bulmak için Ctrl K
          </span>
        </div>
        <Matrix summary={summary ?? []} />
      </section>
    </div>
  );
};

const Matrix = ({ summary }: { summary: EditionSummary[] }) => {
  const stories = useStore(state => state.stories);
  return (
    <div className="table-wrap">
      <table className="matrix">
        <thead>
          <tr>
            <th>Kitap</th>
            {LEVELS.map(level => (
              <th key={level}>{level}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(stories ?? []).map(story => (
            <tr key={story.id}>
              <th>
                <a href={`#/kitap/${story.id}`}>{story.text.en?.name ?? story.id}</a>
                {story.hidden && <span className="chip">gizli</span>}
              </th>
              {LEVELS.map(level => {
                const en = summary.find(item => item.storyId === story.id && item.level === level && item.language === 'en');
                const ar = summary.find(item => item.storyId === story.id && item.level === level && item.language === 'ar');
                if (!en && !ar) return <td key={level} className="cell muted">–</td>;
                return (
                  <td key={level} className="cell">
                    <a href={`#/duzenle/${story.id}/${level.toLowerCase()}/1?dil=en`}>
                      {en ? 'EN' : ''}
                      {en && ar ? ' · ' : ''}
                      {ar ? 'AR' : ''}
                    </a>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
