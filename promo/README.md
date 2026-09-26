# Lisandan Kültüre — Tanıtım Filmi (motion graphic)

60 saniyelik, **3840×2160 (4K UHD), 60 fps**, konuşmasız, müzikli tanıtım filmi.
Final dosya: `out/lisandan-kulture-4k.mp4` (H.264 High + AAC 48 kHz).

Film tamamen kodla üretilir: `index.html` + `film.css` + `film.js` deterministik bir zaman çizelgesidir
(`window.__seek(t)` → t anının tam karesi). 1920×1080 CSS kompozisyonu **device scale factor 2** ile
rasterize edilir; metin, SVG ve UI gerçek 4K çözünürlükte çizilir (upscale yok). Görseller orijinal
çözünürlüklerinden (Adam B1 bölümleri 3200×4000) dışa aktarılmıştır.

Sahneler kendi saatleriyle koreografe edilir; `scene(..., warp)` ile film zamanına eşlenir. Böylece v2'deki
sahneler koreografisi bozulmadan yavaşlatıldı, araya yeni sahneler eklendi.

## Zaman çizelgesi (90 BPM; kesmeler vuruşlarda)

| Sahne | Süre | İçerik |
|-------|------|--------|
| Hook | 0.0–4.7 | Yıldız, logo kemeri, 5 kitabın illüstrasyonları arasında uçuş: **Oku. Dinle. Anla.** |
| Hikâye sayfası | 4.7–10.7 | Adam B1 · 1. bölüm: sayfa 3B'de kurulur; sesli anlatım, keşif noktası (Soil), Word Notes etiketleri. |
| Word Notes | 10.7–15.3 | "Messenger" sayfadan kopar → Word Note kartı (anlam + Arapça). Bölüm 1'in 4 kelimesi. |
| EN ⇄ AR | 15.3–20.7 | Gerçek dil anahtarı; RTL ışık dikişi sayfayı ayna düzenli Arapça sürüme çevirir; «قصص تُقرأ، وتُسمع، وتُعاش.» |
| Bölüm döngüsü | 20.7–29.3 | Akış göstergesi **Hikâye → Quick Challenge → Language Focus**. Quick Challenge çözülür; "After reading" Language Focus'un 4 gerçek etkinliği; 1. etkinlik (Source Voice and Story Time) eşleştirilir. Ardından 12 bölümün rayı: her bölümde aynı döngü. |
| Kitap sonu | 29.3–42.7 | Kemer kapısından geçiş; üstte gerçek sırayla ilerleyen çubuk: **Knowledge Check → Master Glossary → Vocabulary Challenge → Language Review → Final Challenge**. Master Glossary'de kitabın 48 kelimesinin tamamı, öz-değerlendirme (Confident / Practice / New) ve güven haritası. |
| Seviyeler | 42.7–48.7 | Mecca Before Islam: **A2 — Temel, B1 — Orta, B2 — Üst**; üç ayrı illüstrasyon dünyası ve her seviyeden aynı konudaki gerçek cümle. |
| Kılavuzlar | 48.7–54.7 | Işık dikişinden açılan kitap: **Öğretmen Kılavuzu** (16 bölüm) · **Evde Bağımsız Çalışma Kılavuzu** (12 bölüm, 60 etkinlik). |
| Final | 54.7–60.0 | Kütüphane duvarı, logo, **Lisandan Kültüre**, "Etkileşimli Dil ve Değerler Kütüphanesi", English · العربية · A2 · B1 · B2. |

### Doğrulanan öğrenme akışı (kaynak kod)

- Bölüm içi: `src/components/book/StoryPage.tsx` hikâye metninden sonra önce **Quick Challenge** panelini,
  ardından "After reading" **Language Focus** panelini gösterir; Self-Study Guide ders planları da aynı sırayı önerir.
- Kitap sonu: `src/core/content/uiBookFinalization.ts` → `reorderPreparedLearningFlow` sırası
  `knowledge → glossaries → vocabulary → review → final`. Uygulamadaki içindekiler: 13 Knowledge Check,
  14 Master Glossary, 15 Vocabulary Challenge, 16 Language Review ("After vocabulary"), 17 Final Challenge.

## Ses

Konuşma / TTS yok. `scripts/build_audio.py` özgün, prosedürel bir müzik besteler (hazır sample yok → lisans
sorunu yok): pad, yaylı ensemble, piyano motifi, kalimba arpeji, bas, sinematik davul; bölümler filmi izler
(sakin hikâye → bölüm döngüsü → kitap sonunda doruk → seviyelerde nefes → kılavuzlarda yükseliş → D majörde
final). Üzerine ince ses tasarımı: geçiş whoosh'ları, UI tıkları, doğru cevap çanı, riser ve final darbesi.
Master: -14 LUFS, -1.2 dBTP.

## Kullanılan gerçek proje assetleri

- Logo (`home_icon.png`) → `assets/brand/`
- Hikâye illüstrasyonları (Adam, Abraham, Moses, Mecca, Yunus Emre; A2/B1/B2) → `assets/img/`,
  Adam B1'in 12 bölüm görseli → `assets/img/adam_b1/`, duvar → `assets/img/wall/`
- Adam B1: 1. bölüm İngilizce/Arapça metin, Word Notes, hotspot'lar, Quick Challenge, Language Focus
  etkinlikleri, 12 bölüm başlığı, Knowledge Check soruları, Master Glossary'nin 48 kelimesi (tanım, tür,
  bölüm, kategori), Vocabulary Challenge ve Language Review ekran içerikleri, Final Challenge ekranı
- Mecca A2/B1/B2 "Age of Ignorance" cümleleri
- Teacher Guide ve Self-Study Guide başlıkları/bölüm listeleri
- Fontlar: Poppins (OFL, uygulamanın fontu), Arakom (`public/`); renkler `src/index.css` tokenlarından

## Üretim komutları

```bash
pip install playwright imageio-ffmpeg numpy scipy soundfile
# Chromium: PLAYWRIGHT_BROWSERS_PATH altında ya da --chrome /yol/chrome

python3 promo/scripts/build_audio.py                        # → promo/out/mix.wav (+ stems)
python3 promo/scripts/render.py --workers 4 --crf 14 --out promo/out/master-4k.mp4   # 4K60 master
python3 promo/scripts/render.py --stills 12 33.8 57         # 4K tek kareler → promo/out/stills/
python3 promo/scripts/render.py --scale 1 --workers 4 --out promo/out/preview-1080.mp4  # hızlı 1080p önizleme
```

Önizleme: `promo/` klasörünü bir HTTP sunucusuyla açıp `index.html` (gerçek zamanlı döngü) veya
`index.html?t=33.8` (tek kare) adresine gidin.
