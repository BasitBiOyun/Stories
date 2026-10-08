import { IconHelp } from '../icons';

/**
 * "Ne nerede?": what can be changed where, written for someone who will run the project after
 * today's team, without code and without GitHub.
 */

const ROWS: [string, string][] = [
  ['Hikâye metni, bölüm başlığı', 'Kitaplar → kitap → bölüm. Uygulamada paragrafa tıklayın.'],
  ['Kelime notları (Word Notes)', 'Bölümde altı çizili kelimeye tıklayın. İngilizce ve Arapça notlar aynı sırada durur; birinde ekleyip silerken öbürü de aynı yerde değişir.'],
  ['Quick, Focus, Group, I can, Before you read', 'Bölümde ilgili kutuya tıklayın ya da sağda “Bu sayfa” sekmesinden seçin. Yeni etkinlik “Etkinlik ekle” ile.'],
  ['Kitap sonu sayfaları (Knowledge Check, Final Challenge…)', 'Kitabın son sayfalarını açın; sorulara tıklayın.'],
  ['Resimdeki noktalar (hotspot)', 'Bölüm resmine tıklayın: noktaları sürükleyin, yazılarını değiştirin.'],
  ['Bölüm resmi, ses kaydı', 'Bölümde “Resim ve ses” sekmesi; bir kitabın hepsi için menüdeki “Resim ve ses”.'],
  ['Metin değişince ses', 'Başlık da okunur. Metin değişince sekmede “ses eski” yazar; “Güncel metinden yeniden seslendir” deyin, yayınlanınca sunucu okur.'],
  ['Öğretmen kitabı, öğrenci rehberi', 'Bölümde sağdaki “Öğretmen kitabı” sekmesi.'],
  ['Places & People kartları', 'Menüdeki “Places & People”. Kartın adı, bilgisi ve hikâyedeki adları.'],
  ['Kitabın adı, açıklaması, gizli/görünür', 'Kitaplar → kitap → sağdaki kutu.'],
  ['Yeni kitap ya da yeni seviye', 'Menüdeki “Yeni kitap”: hocanın Word dosyası. Claude yazar, kitap gizli gelir.'],
  ['Ekibe kişi eklemek, yetki vermek', 'Menüdeki “Ekip” (yönetici).'],
  ['Bir değişikliği geri almak', 'Kaydetmeden: “Geri al”. Yayınlandıktan sonra: “Geçmiş” → değişiklik → “Geri al”.'],
];

const CODE_ONLY: string[] = [
  'Uygulamanın kendi düğme ve menü yazıları (Next, Settings, Quick Challenge başlığı gibi).',
  'Kitap kapakları, harita çizimleri ve kart resimleri.',
  'Hangi bölümde hangi Places & People kartının çıktığı ve haritadaki yeri.',
  'Sayfaların sırası ve uygulamanın görünüşü.',
];

export const Help = () => (
  <div className="content">
    <div className="page-head">
      <div>
        <h1>
          <IconHelp size={22} /> Yardım: ne nerede?
        </h1>
        <p>Bu panel, kod ve GitHub bilmeden kitapların her şeyini yönetmek için. Aşağıdaki tablo neyin nereden değiştiğini söyler.</p>
      </div>
    </div>
    <div className="grid two">
      <section className="card help-card">
        <h3>Nasıl çalışır?</h3>
        <ol>
          <li>Bir kitabı açın. Solda uygulamanın kendisi, sağda düzenleme alanı durur.</li>
          <li>Uygulamada değiştirmek istediğiniz şeye tıklayın; sağda formu açılır. Yazdıkça uygulama da değişir.</li>
          <li>“Kaydet”e basın (Ctrl+S). Değişiklik sepetinize girer; uygulamaya henüz geçmez.</li>
          <li>İşiniz bitince sepetinizi onaya gönderin. Yönetici bakar ve “Yayınla”ya basar.</li>
          <li>Yayınlanan her şey önizleme sitesine bir arada geçer (tek derleme, birkaç dakika). Resim ve sesler hemen görünür.</li>
        </ol>
        <h3>Kırmızı ve turuncu uyarılar</h3>
        <ul>
          <li>
            <b>Kırmızı</b>: yayından önce düzelmeli (yazım kuralı, bozuk alıştırma, yönerge çok uzun…).
          </li>
          <li>
            <b>Turuncu</b>: öneri. Örnek: soru bölümdeki hiçbir kişi, yer ya da kelimeyi anmıyorsa “genel” olabilir diye uyarır. Alıştırmalar her zaman o bölümün kendi olaylarından olmalı.
          </li>
        </ul>
        <h3>Kurallar</h3>
        <ul>
          <li>Peygamberler ve yakınları çizilmez. Haç, yıldız, parıltı simgesi kullanılmaz.</li>
          <li>Arapçası olmayan kitap rafa çıkarılmaz (Ibn Jubayr hariç).</li>
          <li>İngilizce metinde Türkçe açıklama olmaz; Türkçe adlar kartlarda durur.</li>
        </ul>
      </section>
      <section className="card">
        <h3>Ne nereden değişir?</h3>
        <div className="table-wrap">
          <table className="table">
            <tbody>
              {ROWS.map(([what, where]) => (
                <tr key={what}>
                  <th>{what}</th>
                  <td>{where}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={{ marginTop: 16 }}>Panelden değişmeyenler</h3>
        <p className="small muted">Bunlar uygulamanın kodunda durur. Değişmesi gerekirse Claude’a (ya da bir yazılımcıya) yazın.</p>
        <ul>
          {CODE_ONLY.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);
