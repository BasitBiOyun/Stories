import { useEffect, useState } from 'react';
import { api, type Role, type TeamMember } from '../api';
import { IconPlus, IconTrash, IconUsers } from '../icons';
import { ROLE_HELP } from '../labels';
import { useStore, toast } from '../store';
import { confirm } from '../ui';
import { timeAgo } from '../util';

/**
 * The team: who may sign in and what each person may do. Admins add and remove people here; no
 * code, no GitHub. The founding admins (set on the server) cannot be removed from the panel, so
 * the panel can never be locked by mistake.
 */
export const Team = () => {
  const member = useStore(state => state.member);
  const [members, setMembers] = useState<TeamMember[] | null>(null);
  const [roles, setRoles] = useState<Record<Role, string> | null>(null);
  const [canWrite, setCanWrite] = useState(false);
  const [form, setForm] = useState<{ email: string; name: string; role: Role }>({ email: '', name: '', role: 'teacher' });
  const [busy, setBusy] = useState(false);
  const [renaming, setRenaming] = useState<string | null>(null);
  const [newName, setNewName] = useState('');
  const admin = Boolean(member?.approve);

  useEffect(() => {
    api
      .team()
      .then(result => {
        setMembers(result.members);
        setRoles(result.roles);
        setCanWrite(result.canWrite);
      })
      .catch(error => toast((error as Error).message, 'bad'));
  }, []);

  const save = async (next: { email: string; name: string; role: Role }) => {
    setBusy(true);
    try {
      const result = await api.saveMember(next);
      setMembers(result.members);
      return true;
    } catch (error) {
      toast((error as Error).message, 'bad');
      return false;
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="content">
      <div className="page-head">
        <div>
          <h1>Ekip</h1>
          <p>Panele kimlerin girebileceği ve ne yapabileceği. Herkes kendi Google hesabıyla girer; şifre paylaşılmaz.</p>
        </div>
      </div>

      <div className="grid two">
        <section className="card">
          <h2>
            <IconUsers size={18} /> Ekip üyeleri
          </h2>
          {!members ? (
            <p className="muted">Yükleniyor…</p>
          ) : (
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kişi</th>
                    <th>Rol</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {members.map(person => (
                    <tr key={person.email}>
                      <td>
                        {renaming === person.email ? (
                          <form
                            className="row"
                            onSubmit={async event => {
                              event.preventDefault();
                              if (newName.trim() && (await save({ email: person.email, name: newName.trim(), role: person.role }))) setRenaming(null);
                            }}
                          >
                            <input value={newName} onChange={event => setNewName(event.target.value)} aria-label="Adı soyadı" autoFocus />
                            <button type="submit" className="btn small primary" disabled={busy}>
                              Kaydet
                            </button>
                            <button type="button" className="btn small ghost" onClick={() => setRenaming(null)}>
                              Vazgeç
                            </button>
                          </form>
                        ) : (
                          <b>
                            {person.name}
                            {admin && canWrite && (
                              <button
                                type="button"
                                className="linkish small"
                                style={{ marginInlineStart: 8, fontWeight: 400 }}
                                onClick={() => {
                                  setRenaming(person.email);
                                  setNewName(person.name);
                                }}
                              >
                                adı değiştir
                              </button>
                            )}
                          </b>
                        )}
                        <div className="small muted">{person.email}</div>
                        {person.addedBy && (
                          <div className="small muted">
                            {person.addedBy} ekledi · {timeAgo(person.addedAt)}
                          </div>
                        )}
                      </td>
                      <td>
                        {admin && !person.owner && canWrite ? (
                          <select value={person.role} aria-label={`${person.name} rolü`} disabled={busy} onChange={event => void save({ email: person.email, name: person.name, role: event.target.value as Role })}>
                            {Object.entries(roles ?? {}).map(([key, label]) => (
                              <option key={key} value={key}>
                                {label}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <span className="chip">{roles?.[person.role] ?? person.role}</span>
                        )}
                        {person.owner && <div className="small muted">kurucu yönetici</div>}
                      </td>
                      <td>
                        {admin && !person.owner && canWrite && person.email !== member?.email && (
                          <button
                            type="button"
                            className="icon-btn danger"
                            aria-label={`${person.name} ekipten çıkar`}
                            title="Ekipten çıkar"
                            onClick={async () => {
                              if (!(await confirm({ title: `${person.name} ekipten çıkarılsın mı?`, text: 'Bu kişi panele bir daha giremez. Sepetindeki değişiklikler silinmez.', yes: 'Çıkar', danger: true }))) return;
                              try {
                                setMembers((await api.removeMember(person.email)).members);
                              } catch (error) {
                                toast((error as Error).message, 'bad');
                              }
                            }}
                          >
                            <IconTrash size={16} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="card">
          {admin ? (
            canWrite ? (
              <>
                <h2>
                  <IconPlus size={18} /> Kişi ekle
                </h2>
                <form
                  onSubmit={async event => {
                    event.preventDefault();
                    if (await save(form)) {
                      toast(`${form.name || form.email} ekibe eklendi. Kendi Google hesabıyla girebilir.`, 'good');
                      setForm({ email: '', name: '', role: 'teacher' });
                    }
                  }}
                >
                  <label className="field">
                    <span className="field-label">Google hesabının e-postası</span>
                    <input type="email" required value={form.email} onChange={event => setForm({ ...form, email: event.target.value })} placeholder="ornek@gmail.com" />
                  </label>
                  <label className="field">
                    <span className="field-label">Adı soyadı</span>
                    <input type="text" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} placeholder="Boş kalırsa Google hesabındaki adı kullanılır" />
                  </label>
                  <fieldset className="field">
                    <legend className="field-label">Rolü</legend>
                    {Object.entries(roles ?? {}).map(([key, label]) => (
                      <label key={key} className="radio-row">
                        <input type="radio" name="role" checked={form.role === key} onChange={() => setForm({ ...form, role: key as Role })} />
                        <span>
                          <b>{label}</b>
                          <span className="small muted"> · {ROLE_HELP[key]}</span>
                        </span>
                      </label>
                    ))}
                  </fieldset>
                  <button type="submit" className="btn primary" disabled={busy}>
                    Ekibe ekle
                  </button>
                </form>
              </>
            ) : (
              <p className="muted">Ekip listesi şu an değiştirilemiyor: panelin depolama bağlantısı kurulmadı.</p>
            )
          ) : (
            <>
              <h2>Roller</h2>
              <ul className="list plain">
                {Object.entries(roles ?? {}).map(([key, label]) => (
                  <li key={key}>
                    <b>{label}</b>: {ROLE_HELP[key]}
                  </li>
                ))}
              </ul>
              <p className="small muted">Ekibe kişiyi bir yönetici ekler.</p>
            </>
          )}
        </section>
      </div>
    </div>
  );
};
