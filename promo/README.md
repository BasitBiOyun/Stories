# Stories — Tanıtım Filmi (motion graphic)

39.65 saniyelik, 1920×1080, Türkçe voice-over'lı tanıtım filmi.
Final dosya: `out/stories-promo.mp4` (H.264 + AAC, 30 fps, 60 fps'ten kare harmanlamalı motion blur ile).

Film tamamen kodla üretilir: `index.html` + `film.css` + `film.js` deterministik bir zaman çizelgesidir
(`window.__seek(t)` → t anının tam karesi). Harici animasyon kütüphanesi yoktur; kamera, 3B derinlik,
maskeler, parallax, kinetik tipografi ve easing'ler `film.js` içindedir. Uygulama ekranları ekran görüntüsü
olarak değil, gerçek içerik ve marka tokenlarıyla sahne içinde yeniden kurulan bileşenler olarak yer alır.

## Konsept — "Kemer"

Kütüphane logosundaki kemer (ve içindeki yıldız) filmin görsel omurgasıdır: açılışta kemer altın bir çizgiyle
çizilir ve kameranın içinden geçtiği bir pencereye dönüşür; seviye sahnesinde A2/B1/B2 panelleri aynı kemer
maskesiyle kesilir; finalde tüm kütüphane duvarının önünde logo olarak geri döner.

## Voice-over (final metin)

| # | Başlangıç | Metin |
|---|-----------|-------|
| 1 | 0.75 s | Bir hikâyeyi okumak başka, içine girmek başka. |
| 2 | 4.05 s | Her bölüm kendi illüstrasyonu, sesli anlatımı ve keşfedilecek ayrıntılarıyla açılıyor. |
| 3 | 8.75 s | Bilmediğin bir kelimeye dokun; anlamı ve Arapça karşılığı hemen yanında. |
| 4 | 12.6 s | Tek dokunuşla kitap Arapçaya geçiyor. Metin, ses ve sayfa düzeniyle birlikte. |
| 5 | 17.75 s | Her bölümün ardından kısa bir alıştırma ve dil çalışması. Kitabın sonunda kapsamlı bir değerlendirme. |
| 6 | 23.0 s | Aynı hikâye üç seviyede: A2, B1 ve B2. Her seviyenin kendi dili, kendi görselleri var. |
| 7 | 28.95 s | Öğretmene, ders planlarıyla hazır bir kılavuz. Öğrenciye, adım adım bir çalışma rehberi. |
| 8 | 35.4 s | Okunan, dinlenen, içine girilen hikâyeler. |

Ses: açık kaynak Piper `tr_TR-fahrettin-medium` (offline). Her satır için birden fazla take üretildi ve
Whisper ile geri-transkripsiyon skoruna göre en anlaşılır take seçildi (`audio/vo/take_report.json`).
Profesyonel bir seslendirme ile değiştirmek için aynı dosya adlarıyla `audio/vo/vo_0X.wav` dosyalarını
değiştirip ses ve video adımlarını tekrar çalıştırmak yeterlidir (başlangıç zamanları `timeline.json`'da).

## Zaman çizelgesi (92.3 BPM; sahne kesmeleri vuruşlara oturur)

| Sahne | Süre | İçerik |
|-------|------|--------|
| S1 Hook | 0.00–3.90 | Yıldız yanar, logo kemeri çizilir, kamera kemerden geçip 5 kitabın illüstrasyonları arasında uçar. "Oku. / Dinle. / İçine gir." — kemer biçimli varış penceresi Adam B1 1. bölüm görselidir. |
| S2 Hikâye sayfası | 3.90–8.45 | Match-cut: görsel, yeniden kurulan gerçek hikâye sayfasındaki yerine oturur. Sayfa 3B ürün açısına döner; metin dizilir, oynatıcı başlar (gerçek anlatımdan kesit duyulur), hotspot "Soil" açılır. Etiketler: Sesli anlatım · Keşif noktası · Word Notes. Kamera "Messenger" kelimesine dalar. |
| S3 Word Notes | 8.45–12.35 | Kelime sayfadan kopar, gerçek Word Note kartına dönüşür (tanım + Arapça karşılık). Bölümün diğer kelime kartları derinlikten gelir; sayaç 48 (Master Glossary). |
| S4 EN ⇄ AR | 12.35–17.55 | Gerçek EN/العربية anahtarı; altın ışık dikişi sağdan sola (RTL) geçerek sayfayı ayna düzenli Arapça sürümüne çevirir. Uygulamanın Arapça sloganı: «قصص تُقرأ، وتُسمع، وتُعاش.» — gerçek Arapça anlatımdan kesit. |
| S5 Alıştırmalar | 17.55–22.75 | Quick Challenge sorusu yanıtlanır (Correct! + açıklama). Kitap sonu dizisi derinlikten akar: Language Focus, Knowledge Check, Language Review, Vocabulary Challenge, Final Challenge. |
| S6 Seviyeler | 22.75–28.60 | "Mecca Before Islam": aynı konu (Cahiliye) üç seviyede, üç ayrı illüstrasyon dünyası; her seviyenin gerçek cümlesi altında. Altın ilerleme çizgisi A2→B1→B2. |
| S7 Kılavuzlar | 28.60–34.45 | Işık dikişinden açılan bir kitap gibi: solda Teacher Guide (16 bölümlük rehber haritası, Lesson Prep), sağda Self-Study Guide (bölüm haritası, ilerleme). Sayfalar kapanır → |
| S8 Final | 34.45–39.65 | Darbe; tüm hikâye illüstrasyonlarından oluşan kütüphane duvarı, logo + ışık süzmesi, "Stories", "Etkileşimli Dil ve Değerler Kütüphanesi", "Stories to read, hear and step inside.", English · العربية · A2 · B1 · B2 · 5 kitap. |

## Kullanılan gerçek proje assetleri

- Logo ve koleksiyon ikonları (Firebase: `home_icon.png`, `prophets/civilization/scholars_icon.png`) → `assets/brand/`
- Hikâye illüstrasyonları (Adam, Abraham, Moses, Mecca, Yunus Emre; A2/B1/B2) → `assets/img/`, duvar için `assets/img/wall/`
- Adam B1 1. bölüm: İngilizce ve Arapça metin, Word Notes, hotspot'lar, Quick Challenge sorusu ve açıklaması
- Mecca A2/B1/B2 "Age of Ignorance" cümleleri (seviye farkı için)
- Teacher Guide ve Self-Study Guide başlıkları/bölüm listeleri, kitap sonu etkinlik adları
- Adam B1 1. bölüm İngilizce ve Arapça gerçek anlatım sesinden kısa kesitler → `audio/source/`
- Fontlar: Poppins (OFL, uygulamanın fontu), Arakom (`public/`)
- Renkler: `src/index.css` tokenları ve uygulama ekranlarından örneklenen değerler (gold `#c2aa6b`, wood `#14221a`, parchment `#f3ece2`, brown `#3c1b06`…)

Müzik ve efektler `scripts/build_audio.py` içinde tamamen prosedürel sentezlenir (hazır sample yok → lisans sorunu yok).

## Üretim komutları

```bash
pip install playwright imageio-ffmpeg numpy scipy soundfile
# (Chromium: PLAYWRIGHT_BROWSERS_PATH altında ya da --chrome /yol/chrome)

python3 promo/scripts/build_audio.py                      # → promo/out/mix.wav (+ stems)
python3 promo/scripts/render.py --workers 4               # → promo/out/stories-promo.mp4
python3 promo/scripts/render.py --stills 5 12.8 36        # tek kareler → promo/out/stills/
```

Önizleme: `promo/` klasörünü bir HTTP sunucusuyla açıp `index.html` (gerçek zamanlı döngü) veya
`index.html?t=13.5` (tek kare) adresine gidin.

VO'yu yeniden üretmek (yalnızca metin değişirse): `python3 promo/scripts/generate_vo.py --models <model klasörü>`.
