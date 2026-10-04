# Lisandan Kültüre — Tanıtım Filmi (motion graphic) · v9

**1:56.7** süreli, **3840×2160 (4K UHD), 60 fps**, müzikli tanıtım filmi (yalnızca iki kısa gerçek anlatım kesiti).
Final dosya: `out/lisandan-kulture-v9-4k.mp4` (H.264 High + AAC 48 kHz); hızlı paylaşım için
`out/lisandan-kulture-v9-1080p.mp4`.

Film tamamen kodla üretilir: `index.html` + `film.css` + `film.js` (+ `icons.js`: uygulamanın kendi Phosphor
ikonları) deterministik bir zaman çizelgesidir (`window.__seek(t)` → t anının tam karesi). 1920×1080 CSS
kompozisyonu **device scale factor 2** ile rasterize edilir; metin, SVG ve UI gerçek 4K çözünürlükte çizilir.

Her sahne kendi saatiyle koreografe edilir; `timeline.json → warps[id] = [[sahne saati, film zamanı], …]` sahne
saatini film zamanına parça parça doğrusal eşler. Böylece eski sahneler koreografisi bozulmadan kısaltıldı/uzatıldı.

## Zaman çizelgesi (90 BPM; kesmeler vuruşlarda)

| Sahne | Süre (sn) | İçerik |
|-------|-----------|--------|
| s0 Açılış | 0.0–13.3 | 5 durak: Peygamberlerin Hikâyeleri · Mekke · Kudüs · Buhara · İstanbul → "Dil öğrenirken tarihini ve medeniyetini de keşfet." |
| s1 Hook | 13.3–18.0 | Işık noktası, logo kemeri, kitap görselleri arasında uçuş: **Oku. Dinle. Anla.** |
| s2 Hikâye sayfası | 18.0–26.7 | Adam B1 · 1. bölüm: **Before you read** (tahmin → Check my guess → doğru), sesli anlatım (EN), keşif noktası, Word Notes |
| s3 Word Notes | 26.7–32.0 | "Messenger" → Word Note (Arapça «نبي») → **Save to My words → In My words** |
| s4 EN ⇄ AR | 32.0–41.3 | Dil anahtarı; Arapça sayfa (`ar/pages.ts` ile birebir), Arapça Before you read, **kadın sesli Arapça anlatım** (ilk cümle vurgulanır), iki Arapça keşif noktası |
| s5 Bölüm döngüsü | 41.3–54.0 | **Hikâye → Quick Challenge → Language Focus → I can**; I can: Yes / Yes / Almost; 12 bölümün rayı |
| s5b Kitap sonu | 54.0–66.7 | Knowledge Check (8 soru) → Master Glossary (48 kelime) → Vocabulary Challenge (10 kelime) → Language Review (Görev 1/10) → Final Challenge |
| s6 Seviyeler | 66.7–73.3 | Mecca Before Islam: A2 — Temel, B1 — Orta, B2 — Üst |
| n1 Üç yol | 73.3–78.0 | Gerçek RolePicker: Student / Teacher / On my own |
| n5 Kendi başına | 78.0–84.0 | Seviye testi sonucu (B1, 8/10) → My words tekrar kartı (Show the meaning → I knew it) |
| n6 Öğretmen | 84.0–92.0 | Lesson card (Mecca A2 · 10. bölüm, 40 dk) → Grup görevi "History Radio Show" (4. adım vurgulu) → Class mode |
| n7 Sonuç kodu | 92.0–97.3 | Result card (Mecca A2) → **Check a result code**: 2ENLRSSA → VALID CODE |
| s7 Kılavuzlar | 97.3–103.3 | Öğretmen Kılavuzu (16 bölüm) · Evde Bağımsız Çalışma Kılavuzu (12 bölüm, 60 etkinlik) |
| n4 Yerler ve haritalar | 103.3–110.7 | Ibn Jubayr "Places & People" (33 yer · 6 isim) → Musa yolculuk haritası (Midian'a dokunulur) → 6. hikâye ailesi: **Ibn Jubayr · A2 · English · 13 bölüm** |
| s8 Final | 110.7–116.7 | Yer görsellerinden duvar, kemer + açık kitap + ışık noktası işareti, **Lisandan Kültüre**, English · العربية · A2 · B1 · B2 · 6 hikâye ailesi |

## Kurallar (v9'da denetlendi)

- Yıldız / parıltı / hexagram / sekiz köşeli yıldız yok: eski dört köşeli parıltı (s1, s8) yuvarlak ışık noktasıyla
  değiştirildi; "✦ Lesson Prep" → pano ikonu; yıldızlı B2 görseli (mecca_b2_02) → mecca_b2_12. Uygulamanın logo
  PNG'si (`assets/brand/home_icon.png`) dört köşeli bir parıltı ve sekiz dilimli bir çerçeve içerdiği için **filmde
  kullanılmaz**; finalde kodla çizilmiş bir işaret (kemer + açık kitap + ışık noktası) var.
- Peygamber, ailesi, sahabe ve hikâyedeki adı geçen kişiler gösterilmez: açılıştaki ve hook'taki insan içeren
  görseller (Yunus Emre, Kaşgarlı, Yesevi, genç İbrahim, denizi geçen kalabalık) çıkarıldı; final duvarı yalnızca
  `src/features/historical-entities/assets/pictures` yer görsellerinden (73 görsel, `assets/img/places/`) kurulur;
  Ibn Jubayr ve Yunus Emre kapakları kullanılmaz.
- Ad: "Lisandan Kültüre" (EN "From Language to Culture").
- 6 hikâye ailesi: 5'i A2/B1/B2 × EN/AR, Ibn Jubayr yalnızca A2 · English (16 kitap).
- Ekrandaki her sayı `src/data` ve bileşenlerden doğrulandı (sayfa 1/17, 4 Word Note, 8 KC sorusu, 48 kelime,
  10 VC kelimesi, 10 LR görevi, 16 öğretmen bölümü, 12 bölüm / 60 etkinlik, 33 yer · 6 isim, 13 bölüm, 40 dk,
  15 dk · 3–4 kişi, 2ENLRSSA kodunun puanları `lib/resultCode.ts` ile çözülerek).

## Ses

`scripts/build_audio.py` özgün, prosedürel bir müzik besteler (sample yok): açılışta ney/ud/def, sonra pad,
yaylılar, piyano motifi, kalimba arpeji, bas, davul. Bölümler v9 vuruş planını izler
(`OPEN, HOOK, A0, B0, C0, D0, G0, E0, F0 = 0, 20, 27, 62, 81, 100, 110, 146, 166`); G yeni özellikler bölümüdür.
Ses efektleri sahne saatine bağlıdır (`film_time()` warps üzerinden). Anlatım:

- EN (s2, saat 4.80): `assets/audio/narration_en_ch1.wav` — Adam B1 1. bölüm İngilizce kaydı, 2.54–6.62 sn.
- AR (s4, saat 14.42): `assets/audio/narration_ar_ch1.wav` — Adam B1 1. bölüm Arapça kaydı (uygulamanın şu anki
  **kadın sesi**, `src/data/adam/b1/ar/pages.ts` → `audioUrl`), **2.26–7.30 sn** (bölüm başlığı atıldı):
  «آدَمُ عَلَيْهِ السَّلَامُ هُوَ أَوَّلُ نَبِيٍّ وَأَبُو الْبَشَرِ جَمِيعًا.»

Anlatım sırasında müzik alçalır. Master: -14 LUFS, -1.2 dBTP.

## Assetler

- `assets/img/app/`: çalışan uygulamadan 2× ekran görüntüleri (RolePicker, Lesson card, grup görevi, Class mode,
  Ibn Jubayr Places & People, Musa yolculuk haritası).
- `assets/img/places/`: yer görselleri (kişi içermeyenler); `assets/img/covers/`: Musa ve Mekke kapakları.
- Diğer diyaloglar (seviye testi sonucu, My words, Result card, Check a result code, Before you read, I can) bileşenlerin
  kendi metinleriyle HTML olarak yeniden kurulmuştur.

## Üretim komutları

```bash
pip install playwright imageio-ffmpeg numpy scipy soundfile
python3 promo/scripts/build_audio.py                                   # → promo/out/mix.wav (+ stems)
python3 promo/scripts/render.py --scale 1 --workers 6 --out promo/out/lisandan-kulture-v9-1080p.mp4   # 1080p60
python3 promo/scripts/render.py --workers 6 --crf 14 --out promo/out/lisandan-kulture-v9-4k.mp4      # 4K60 master
# 4 CPU / 16 GB makinede 4K tek seferde bellek yetmeyebilir: out/c4k/run.sh filmi 12 parçada (3'er paralel,
# --no-audio --crf 14) üretir; parçalar concat ile kopyalanıp out/mix.wav AAC 256k olarak eklenir.
python3 promo/scripts/render.py --scale 1 --stills 20.7 50.3 75 82.5 95.5 109.5    # tek kareler → promo/out/stills/
```

Önizleme: `promo/` klasörünü bir HTTP sunucusuyla açıp `index.html` (gerçek zamanlı döngü) veya
`index.html?t=50.3` (tek kare) adresine gidin.
