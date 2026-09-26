/* ==========================================================================
   Stories — promo film engine
   A deterministic timeline: window.__seek(t) renders the exact frame for time t
   (seconds). Nothing depends on wall-clock time, so every frame is reproducible
   and can be captured one by one by scripts/render.py.
   ========================================================================== */
(() => {
'use strict';

const W = 1920, H = 1080, CX = 960, CY = 540;
const DURATION = 60.0;
const OLD_END = 39.65; // end of the finale in the finale's own (original) clock

/* ---------- math & easing ---------- */
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
function bezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = t => ((ax * t + bx) * t + cx) * t;
  const sy = t => ((ay * t + by) * t + cy) * t;
  const dx = t => (3 * ax * t + 2 * bx) * t + cx;
  return x => {
    if (x <= 0) return 0; if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) { const e = sx(t) - x; const d = dx(t); if (Math.abs(e) < 1e-6 || !d) break; t -= e / d; }
    return sy(clamp(t));
  };
}
const E = {
  out: bezier(0.22, 1, 0.36, 1),        // the app's own motion curve (menu / cards)
  outSoft: bezier(0.16, 1, 0.3, 1),
  inOut: bezier(0.65, 0, 0.35, 1),
  cam: bezier(0.45, 0, 0.15, 1),          // camera moves: slow in, long settle
  in: bezier(0.55, 0, 0.9, 0.4),
  inStrong: bezier(0.7, 0, 0.95, 0.3),
  lin: t => t,
  back: t => { const c1 = 1.55, c3 = c1 + 1; const u = t - 1; return 1 + c3 * u * u * u + c1 * u * u; },
  expo: t => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
};
/** normalized, eased progress of t inside [a,b] */
const P = (t, a, b, e = E.out) => e(clamp((t - a) / (b - a)));
/** keyframes: [[time, value, easeInto?], ...] */
function K(t, keys) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    const k0 = keys[i - 1], k1 = keys[i];
    if (t <= k1[0]) {
      const e = k1[2] || E.inOut;
      const p = e((t - k0[0]) / (k1[0] - k0[0] || 1));
      if (Array.isArray(k0[1])) return k0[1].map((v, j) => lerp(v, k1[1][j], p));
      return lerp(k0[1], k1[1], p);
    }
  }
  return keys[keys.length - 1][1];
}
/* seeded noise */
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const smoothNoise = (x, seed = 0) => { // cheap 1D value noise for hand-held drift
  const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
  const h = n => { const s = Math.sin((n + seed * 101.3) * 127.1) * 43758.5453; return s - Math.floor(s); };
  return lerp(h(i), h(i + 1), u) * 2 - 1;
};

/* ---------- DOM helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
function el(tag, cls, html, parent) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; if (parent) parent.appendChild(e); return e; }
function tf(e, o) {
  const s = o.s == null ? 1 : o.s;
  e.style.transform =
    `translate3d(${(o.x || 0).toFixed(2)}px,${(o.y || 0).toFixed(2)}px,${(o.z || 0).toFixed(2)}px)` +
    (o.rx ? ` rotateX(${o.rx.toFixed(3)}deg)` : '') + (o.ry ? ` rotateY(${o.ry.toFixed(3)}deg)` : '') + (o.rz ? ` rotateZ(${o.rz.toFixed(3)}deg)` : '') +
    ` scale(${o.sx != null ? o.sx.toFixed(4) : s.toFixed(4)},${o.sy != null ? o.sy.toFixed(4) : s.toFixed(4)})`;
}
const op = (e, v) => { e.style.opacity = clamp(v).toFixed(4); };
const blur = (e, px, extra = '') => { e.style.filter = (px > 0.05 ? `blur(${px.toFixed(2)}px) ` : '') + extra; };
const show = (e, on) => { e.style.display = on ? '' : 'none'; };
/** camera-style transform: point (px,py) of a 1920×1080 plane lands at screen (sx,sy) */
function camTf(e, c) {
  e.style.transform = `translate3d(${(c.sx ?? CX).toFixed(2)}px,${(c.sy ?? CY).toFixed(2)}px,${(c.z || 0).toFixed(2)}px) rotateX(${(c.rx || 0).toFixed(3)}deg) rotateY(${(c.ry || 0).toFixed(3)}deg) rotateZ(${(c.rz || 0).toFixed(3)}deg) scale(${c.s.toFixed(4)}) translate(${(-c.px).toFixed(2)}px,${(-c.py).toFixed(2)}px)`;
}
/** position of an element inside a plane (unaffected by transforms) */
function planePos(node, root) {
  let x = 0, y = 0, n = node;
  while (n && n !== root) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
  return { x, y, w: node.offsetWidth, h: node.offsetHeight, cx: x + node.offsetWidth / 2, cy: y + node.offsetHeight / 2 };
}
/** wrap every word of an element's text into <span class="w"> for per-word motion */
function splitWords(root) {
  const out = [];
  const walk = node => {
    Array.from(node.childNodes).forEach(ch => {
      if (ch.nodeType === 3) {
        const parts = ch.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          const s = document.createElement('span'); s.className = 'w'; s.textContent = p; frag.appendChild(s); out.push(s);
        });
        node.replaceChild(frag, ch);
      } else if (ch.nodeType === 1) walk(ch);
    });
  };
  walk(root);
  return out;
}
/** wrap inner of kinetic lines so they can rise from a mask */
function maskLines(root) {
  return Array.from(root.querySelectorAll('.line, .eyebrow')).map(l => { l.innerHTML = `<span>${l.innerHTML}</span>`; return l.firstChild; });
}
function riseIn(span, t, t0, dur = 0.7, dist = 110) {
  const p = P(t, t0, t0 + dur, E.outSoft);
  span.style.transform = `translate3d(0,${((1 - p) * dist).toFixed(2)}%,0)`;
  return p;
}

/** the brand arch outline (from the library logo) as an absolute pixel path */
function archD(x, y, w, h, closed = true) {
  const X = u => (x + u * w).toFixed(2), Y = v => (y + v * h).toFixed(2);
  const d = `M${X(0)},${Y(1)} L${X(0)},${Y(0.4)} C${X(0)},${Y(0.29)} ${X(0.07)},${Y(0.235)} ${X(0.19)},${Y(0.195)} C${X(0.32)},${Y(0.15)} ${X(0.43)},${Y(0.095)} ${X(0.5)},${Y(0)} C${X(0.57)},${Y(0.095)} ${X(0.68)},${Y(0.15)} ${X(0.81)},${Y(0.195)} C${X(0.93)},${Y(0.235)} ${X(1)},${Y(0.29)} ${X(1)},${Y(0.4)} L${X(1)},${Y(1)}`;
  return closed ? d + ' Z' : d;
}

/* ---------- global overlays ---------- */
const dust = $('#dust').getContext('2d');
const grainCv = $('#grain'), grain = grainCv.getContext('2d');
const grainImg = grain.createImageData(1920, 1080);
const DUST = (() => { const r = rng(42); return Array.from({ length: 140 }, () => ({ x: r(), y: r(), z: r(), s: r(), ph: r() * 6.28 })); })();
function drawDust(t, amt, drift = 0, tint = [255, 228, 170]) {
  dust.clearRect(0, 0, W, H);
  if (amt <= 0.001) return;
  for (const p of DUST) {
    const depth = 0.3 + p.z * 0.7;
    const x = ((p.x * W + t * (12 + 30 * depth) + drift * depth * 400) % (W + 80) + W + 80) % (W + 80) - 40;
    const y = ((p.y * H - t * (8 + 18 * depth) + Math.sin(t * 0.7 + p.ph) * 14) % (H + 80) + H + 80) % (H + 80) - 40;
    const r = 0.6 + depth * 2.6 * (0.6 + p.s);
    const a = amt * (0.25 + 0.6 * p.s) * (0.6 + 0.4 * Math.sin(t * 2 + p.ph));
    const g = dust.createRadialGradient(x, y, 0, x, y, r * 3);
    g.addColorStop(0, `rgba(${tint[0]},${tint[1]},${tint[2]},${a.toFixed(3)})`);
    g.addColorStop(1, `rgba(${tint[0]},${tint[1]},${tint[2]},0)`);
    dust.fillStyle = g; dust.beginPath(); dust.arc(x, y, r * 3, 0, 6.283); dust.fill();
  }
}
function drawGrain(frameIndex) {
  const r = rng(1000 + frameIndex), d = grainImg.data;
  for (let i = 0; i < d.length; i += 4) { const v = (r() * 255) | 0; d[i] = d[i + 1] = d[i + 2] = v; d[i + 3] = 255; }
  grain.putImageData(grainImg, 0, 0);
}

/* ======================================================================
   SCENES
   ====================================================================== */
const scenes = [];
/* A scene runs on its own clock. `warp` = [clockA, clockB, filmA, filmB] maps film time onto it,
   so a scene choreographed once can be re-timed (slowed down / moved) without touching its keys. */
const scene = (id, a, b, update, warp) => scenes.push({ el: document.getElementById(id), a, b, update, warp });
const W1 = [0, 3.9, 0, 4.667], W2 = [3.9, 8.45, 4.667, 10.667], W3 = [8.45, 12.35, 10.667, 15.333], W4 = [12.35, 17.6, 15.333, 20.667];
const W6 = [22.75, 28.6, 42.667, 48.667], W7 = [28.6, 34.45, 48.667, 54.667], W8 = [34.45, 39.65, 54.667, 60.0];

/* ------------------------------ S1 · HOOK ------------------------------ */
{
  const world = $('#s1world');
  const CARDS = [
    ['moses_a2_15', -610, -150, 900, 430, 560, -6],
    ['abraham_b1_03', 560, 170, 1500, 440, 570, 5],
    ['mecca_b1_06', -520, 230, 2100, 420, 540, 4],
    ['yunusEmre_b1_07', 590, -190, 2700, 430, 560, -5],
    ['abraham_a2_09', -600, -60, 3300, 420, 540, -3],
    ['mecca_b2_12', 540, 120, 3850, 400, 520, 6],
    ['yunusEmre_b2_08', -470, 210, 4400, 400, 520, 3],
    ['moses_a2_03', 480, -230, 4950, 380, 490, -4],
  ].map(([img, x, y, z, w, h, rz]) => {
    const c = el('div', 'card3d', `<img src="assets/img/${img}.jpg"><div class="shade"></div>`, world);
    c.style.width = w + 'px'; c.style.height = h + 'px';
    return { c, x, y, z, w, h, rz };
  });
  const FINAL_Z = 6000;
  // destination: an arch-shaped window (the logo's arch) glowing with the first chapter's light
  const FW = 2600, FH = 2400;
  const fin = el('div', 'fin-wrap', `<div class="fin-glow"></div><div class="fin-arch"><img src="assets/img/adam_b1_01.jpg"></div>`, world);
  fin.style.width = FW + 'px'; fin.style.height = FH + 'px';
  window.__FINAL_W = FW;

  const words = [['Oku', 1.18, -330, -40], ['Dinle', 1.78, 300, 60], ['Anla', 2.34, 0, 0]].map(([txt, t0, x, y]) => {
    const w = el('div', 'word3d', `<span class="m"><span>${txt}<span class="dot">.</span></span></span>`, $('#s1'));
    return { w, inner: w.querySelector('.m > span'), t0, x, y };
  });
  const archPath = $('#s1archPath'), star = $('#s1star'), persp = $('#s1persp');
  const archPath2 = archPath.cloneNode(); archPath.parentNode.appendChild(archPath2);
  const AR = { x: 760, y: 300, w: 400, h: 560 };

  scene('s1', 0, 3.9, t => {
    /* star ignition */
    const ign = P(t, 0.12, 0.7, E.out);
    const flare = Math.exp(-Math.pow((t - 0.95) / 0.12, 2));
    const starOut = P(t, 0.95, 1.35, E.in);
    tf(star, { x: 0, y: lerp(40, -70, P(t, 0.1, 1.0, E.cam)) + starOut * -30, s: (0.15 + 0.85 * ign) * (1 + flare * 0.6) * (1 + starOut * 3), rz: t * 18 });
    op(star, ign * (1 - starOut));

    /* the arch draws itself, then becomes the window we fly through */
    const draw = P(t, 0.3, 1.15, E.inOut);
    const open = P(t, 1.0, 2.05, bezier(0.6, 0, 0.8, 0.6));
    const k = 1 + open * 7.5;
    const ax = CX - (AR.w * k) / 2, ay = 580 - (580 - AR.y) * k, aw = AR.w * k, ah = AR.h * k + 400 * open;
    // two halves, drawn from each base up to the apex
    const full = archD(ax, ay, aw, ah, false);
    const X = u => (ax + u * aw).toFixed(2), Y = v => (ay + v * ah).toFixed(2);
    archPath.setAttribute('d', `M${X(0)},${Y(1)} L${X(0)},${Y(0.4)} C${X(0)},${Y(0.29)} ${X(0.07)},${Y(0.235)} ${X(0.19)},${Y(0.195)} C${X(0.32)},${Y(0.15)} ${X(0.43)},${Y(0.095)} ${X(0.5)},${Y(0)}`);
    archPath2.setAttribute('d', `M${X(1)},${Y(1)} L${X(1)},${Y(0.4)} C${X(1)},${Y(0.29)} ${X(0.93)},${Y(0.235)} ${X(0.81)},${Y(0.195)} C${X(0.68)},${Y(0.15)} ${X(0.57)},${Y(0.095)} ${X(0.5)},${Y(0)}`);
    const hl = archPath.getTotalLength();
    [archPath, archPath2].forEach(pth => { pth.style.strokeDasharray = `${(hl * draw).toFixed(1)} ${(hl + 10).toFixed(1)}`; });
    op($('#s1arch'), 1 - P(t, 1.5, 2.1, E.lin));
    $('#s1arch').style.strokeWidth = 2.4 + open * 4;

    persp.style.clipPath = `path('${archD(ax, ay, aw, ah)}')`;
    op(persp, P(t, 0.8, 1.1, E.lin));

    /* camera dolly through the library */
    const camZ = K(t, [[0.9, 0], [3.9, FINAL_Z, bezier(0.5, 0.0, 0.3, 1)]]);
    const sway = smoothNoise(t * 0.9, 3) * 1.4;
    for (const o of CARDS) {
      const rel = camZ - o.z; // >0 : card is closer than its rest depth
      const vis = rel < 1350;
      show(o.c, vis);
      if (!vis) continue;
      tf(o.c, { x: CX - o.w / 2 + o.x, y: CY - o.h / 2 + o.y, z: rel, rz: o.rz + rel * 0.004, ry: (o.x > 0 ? -1 : 1) * 12 });
      op(o.c, clamp((1350 - rel) / 350) * clamp((rel + 3400) / 1300));
      blur(o.c, Math.max(0, (rel - 700) / 60) + Math.max(0, (-rel - 2600) / 900));
    }
    tf(fin, { x: CX - FW / 2, y: CY - FH / 2, z: camZ - FINAL_Z });
    op(fin, clamp((camZ - 300) / 1200));
    tf(world, { rz: sway * (1 - P(t, 3.2, 3.9)), x: 0 });

    /* kinetic words, flying past the lens */
    for (const o of words) {
      const pin = P(t, o.t0, o.t0 + 0.42, E.outSoft);
      const pass = P(t, o.t0 + 0.5, o.t0 + (o === words[2] ? 1.05 : 0.8), E.in);
      o.inner.style.transform = `translate3d(0,${((1 - pin) * 105).toFixed(1)}%,0)`;
      o.w.style.left = (CX - o.w.offsetWidth / 2 + o.x) + 'px';
      o.w.style.top = (CY - 90 + o.y) + 'px';
      tf(o.w, { s: 1 + pass * 2.4, x: o.x * pass * 1.4, z: 0 });
      op(o.w, (t < o.t0 ? 0 : 1) * (1 - pass));
      blur(o.w, pass * 22);
    }
    drawDust(t, 0.25 + 0.5 * P(t, 0.8, 1.6), camZ / 900);
    $('#flash').style.opacity = (flare * 0.55).toFixed(3);
  }, W1);
}

/* --------------------------- S2 · STORY PAGE --------------------------- */
const pageEn = $('#page-en');
const enWords = splitWords($('#pgTextEn'));
{
  const persp = $('#s2persp'), backdrop = $('#s2backdrop');
  const img = $('#pgImg'), player = $('#player');
  const hs1 = $('#hs1'), hs2 = $('#hs2'), hsCard = $('#hsCard');
  const title = $('.pg-title', pageEn), chap = pageEn.querySelector('.pg-chapter');
  const word = $('#vwMessenger');
  let imgRect = null, wRect = null;
  const svg = $('#callouts'), labels = $('#calloutLabels');
  const CALLOUTS = [
    { key: 'player', text: 'Sesli anlatım', sub: 'her bölüm için', t0: 5.05, t1: 7.35, target: () => player, dx: -330, dy: -40, anchor: 'right' },
    { key: 'hs', text: 'Keşif noktası', sub: 'görselin içinde', t0: 6.0, t1: 7.4, target: () => hs1, dx: -250, dy: -170, anchor: 'bottom' },
    { key: 'word', text: 'Word Notes', sub: 'dokun, anlamını gör', t0: 6.75, t1: 7.55, target: () => word, dx: 40, dy: 250, anchor: 'top' },
  ].map(c => {
    c.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    c.path.setAttribute('fill', 'none'); c.path.setAttribute('stroke', '#F3D58A'); c.path.setAttribute('stroke-width', '1.6');
    c.dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c.dot.setAttribute('r', '6'); c.dot.setAttribute('fill', '#FFF3CF');
    c.ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle'); c.ring.setAttribute('fill', 'none'); c.ring.setAttribute('stroke', '#F3D58A'); c.ring.setAttribute('stroke-width', '1.5');
    svg.append(c.path, c.ring, c.dot);
    c.label = el('div', 'co', `<div class="chip"><i></i>${c.text}<small>${c.sub}</small></div>`, labels);
    return c;
  });

  scene('s2', 3.9, 9.25, t => {
    if (!wRect) {
      pageEn.style.transform = 'none';
      const pr = pageEn.getBoundingClientRect();
      const rel = n => { const r = n.getBoundingClientRect(); return { x: r.left - pr.left, y: r.top - pr.top, w: r.width, h: r.height, cx: r.left - pr.left + r.width / 2, cy: r.top - pr.top + r.height / 2 }; };
      wRect = rel(word); imgRect = rel(img);
    }
    /* camera: from the image filling the frame → hero product angle → into "Messenger" */
    const imgFocus = { px: imgRect.cx, py: imgRect.cy, s: window.__FINAL_W / imgRect.w };
    const pull = P(t, 3.9, 5.3, bezier(0.3, 0, 0.1, 1));
    const push = P(t, 7.45, 8.45, bezier(0.6, 0, 0.9, 0.55));
    const after = P(t, 8.45, 9.25, E.out);
    const hand = { x: smoothNoise(t * 0.5, 7) * 6, y: smoothNoise(t * 0.45, 9) * 5 };
    let c = {
      px: lerp(imgFocus.px, 1000 + (t - 5.4) * 14, pull), py: lerp(imgFocus.py, 545, pull),
      s: Math.exp(lerp(Math.log(imgFocus.s), Math.log(0.9 + (t - 5.4) * 0.014), pull)),
      ry: lerp(0, -13 + (t - 5.4) * 1.5, pull), rx: lerp(0, 6, pull), rz: lerp(0, -0.6, pull),
      sx: CX + hand.x * pull, sy: CY + hand.y * pull,
    };
    const S3S = 96 / 21.6;
    c = {
      px: lerp(c.px, wRect.cx, push), py: lerp(c.py, wRect.cy, push),
      s: Math.exp(lerp(Math.log(c.s), Math.log(S3S), push)) * (1 + after * 0.25),
      ry: lerp(c.ry, 0, push), rx: lerp(c.rx, 0, push), rz: lerp(c.rz, 0, push), sx: lerp(c.sx, CX, push), sy: lerp(c.sy, CY, push),
    };
    camTf(pageEn, c);
    blur(pageEn, after * 14);
    op(pageEn, 1 - P(t, 8.45, 8.85, E.inOut));
    op(backdrop, P(t, 4.2, 5.2) * (1 - push));
    tf(backdrop, { x: -c.ry * 3, y: c.rx * 3, s: 1 });

    /* page furniture assembles */
    const hdr = P(t, 4.0, 4.6);
    title.style.clipPath = `inset(0 ${(100 - 100 * P(t, 4.2, 4.9, E.outSoft)).toFixed(1)}% 0 0)`;
    chap.style.opacity = P(t, 4.5, 5.0).toFixed(3);
    enWords.forEach((w, i) => {
      const p = P(t, 4.35 + i * 0.011, 4.85 + i * 0.011, E.outSoft);
      w.style.opacity = p.toFixed(3); w.style.transform = `translateY(${((1 - p) * 14).toFixed(2)}px)`;
    });
    const pl = P(t, 4.3, 4.9, E.back);
    player.style.transform = `translateY(${((1 - pl) * -30).toFixed(1)}px) scale(${(0.92 + 0.08 * pl).toFixed(4)})`;
    player.style.opacity = P(t, 4.3, 4.6).toFixed(3);
    /* narration starts */
    const playing = t > 4.78;
    $('#plBtn .play').style.opacity = playing ? 0 : 1; $('#plBtn .pause').style.opacity = playing ? 1 : 0;
    const press = Math.exp(-Math.pow((t - 4.76) / 0.07, 2));
    $('#plBtn').style.transform = `scale(${(1 - press * 0.12).toFixed(3)})`;
    const prog = clamp((t - 4.78) / 58);
    $('#plFill').style.width = (prog * 100).toFixed(3) + '%'; $('#plKnob').style.left = (prog * 100).toFixed(3) + '%';
    $('#plTime').textContent = `0:0${Math.max(0, Math.floor(t - 4.78))}`;
    /* hotspots */
    [hs1, hs2].forEach((h, i) => {
      const a = P(t, 5.2 + i * 0.15, 5.6 + i * 0.15, E.back);
      const pulse = (Math.sin((t - 5) * 5 + i) + 1) / 2;
      h.style.transform = `scale(${(a * (1 + pulse * 0.08)).toFixed(3)})`;
      h.style.boxShadow = `0 0 0 ${(pulse * 14).toFixed(1)}px rgba(225,113,0,${(0.35 * (1 - pulse)).toFixed(3)})`;
    });
    const hc = P(t, 6.05, 6.5, E.back) * (1 - P(t, 7.5, 7.8));
    hsCard.style.opacity = clamp(hc * 1.4).toFixed(3);
    hsCard.style.transform = `translateY(${((1 - hc) * 16).toFixed(1)}px) scale(${(0.9 + 0.1 * hc).toFixed(3)})`;

    /* callouts, anchored to the live projected position of the UI they describe */
    for (const co of CALLOUTS) {
      const vis = P(t, co.t0, co.t0 + 0.5, E.outSoft) * (1 - P(t, co.t1, co.t1 + 0.3, E.in));
      if (vis <= 0.001) { co.path.style.opacity = 0; co.dot.style.opacity = 0; co.ring.style.opacity = 0; co.label.style.opacity = 0; continue; }
      const r = co.target().getBoundingClientRect();
      const tx = co.key === 'player' ? r.left + 8 : r.left + r.width / 2, ty = co.key === 'word' ? r.bottom + 4 : r.top + r.height / 2;
      const lw = co.label.offsetWidth, lh = co.label.offsetHeight;
      const lx = clamp(tx + co.dx, 40 + lw / 2, W - 40 - lw / 2), ly = clamp(ty + co.dy, 40 + lh / 2, H - 40 - lh / 2);
      co.label.style.transform = `translate3d(${(lx - lw / 2).toFixed(1)}px,${(ly - lh / 2 + (1 - vis) * 12).toFixed(1)}px,0)`;
      co.label.style.opacity = vis.toFixed(3);
      const ey = co.anchor === 'bottom' ? ly + lh / 2 : co.anchor === 'top' ? ly - lh / 2 : ly;
      const ex = co.anchor === 'right' ? lx + lw / 2 : lx;
      const d = `M${ex.toFixed(1)},${ey.toFixed(1)} L${tx.toFixed(1)},${ty.toFixed(1)}`;
      co.path.setAttribute('d', d);
      const len = Math.hypot(tx - ex, ty - ey);
      const lp = P(t, co.t0 + 0.1, co.t0 + 0.55, E.inOut);
      co.path.style.strokeDasharray = `${len}`; co.path.style.strokeDashoffset = `${(len * (1 - lp)).toFixed(1)}`;
      co.path.style.opacity = vis;
      co.dot.setAttribute('cx', tx); co.dot.setAttribute('cy', ty); co.dot.style.opacity = vis * lp;
      const rp = ((t - co.t0) * 1.2) % 1;
      co.ring.setAttribute('cx', tx); co.ring.setAttribute('cy', ty); co.ring.setAttribute('r', 6 + rp * 22); co.ring.style.opacity = vis * lp * (1 - rp);
    }
    drawDust(t, 0.35 * (1 - pull) + 0.12, 0);
    op($('#s2'), 1 - P(t, 8.9, 9.25, E.lin));
  }, W2);
}

/* --------------------------- S3 · WORD NOTES --------------------------- */
{
  const world = $('#s3world'), bg = $('#s3bg'), word = $('#s3word');
  const NOTES = [
    ['Messenger', 'noun', 'A person chosen by Allah to deliver His message.', 'رسول', 'شخص يختاره الله لتبليغ رسالته.'],
    ['ruler', 'noun', 'A person given responsibility to lead or manage.', 'خليفة', 'من يُكلَّف بالمسؤولية والعمارة في الأرض.'],
    ['curiosity', 'noun', 'A strong wish to know more.', 'فضول', 'رغبة قوية في معرفة المزيد.'],
    ['fabulous', 'adjective', 'Very impressive or wonderful.', 'الرائعة', 'جميلة ومثيرة للإعجاب.'],
  ];
  const card = ([w, pos, d, aw, ad], small) => el('div', 'wn' + (small ? ' small' : ''),
    `<div class="wn-word">${w}<span class="wn-pos">${pos}</span></div><div class="wn-lbl">MEANING</div><div class="wn-def">${d}</div><div class="wn-hr"></div><div class="wn-arl">العربية</div><div class="wn-arw">${aw}</div><div class="wn-ard">${ad}</div>`, world);
  const main = card(NOTES[0], false);
  const mainParts = Array.from(main.children);
  const ring = NOTES.slice(1).map((n, i) => ({ c: card(n, true), i }));
  const head = $('#s3head'), headSpans = maskLines(head);
  const count = $('#s3count'), num = $('#s3num');
  let mainSize = null;

  scene('s3', 8.45, 12.5, t => {
    if (!mainSize) mainSize = { w: main.offsetWidth, h: main.offsetHeight, ww: main.querySelector('.wn-word').offsetWidth };
    op(bg, P(t, 8.5, 8.95, E.inOut) * (1 - P(t, 12.2, 12.5, E.lin)));
    const dk = P(t, 8.55, 8.95, E.inOut);
    /* 1 — tap on the word */
    const tap = Math.exp(-Math.pow((t - 8.72) / 0.09, 2));
    const lift = P(t, 8.85, 9.65, E.cam);
    const W0 = word.offsetWidth, H0 = word.offsetHeight;
    // start: centered, same size as the zoomed page word · end: sits as the card's headword
    const cardX = CX - mainSize.w / 2 - 330 * P(t, 10.3, 11.1, E.cam), cardY = CY - mainSize.h / 2 - 40 * P(t, 10.3, 11.1, E.cam);
    const endS = 54 / 96;
    const wx = lerp(CX - W0 / 2, cardX + 50, lift), wy = lerp(CY - H0 / 2 - 6, cardY + 38, lift);
    const ws = lerp(1, endS, lift) * (1 + tap * 0.05);
    word.style.transform = `translate3d(${wx.toFixed(2)}px,${wy.toFixed(2)}px,0) scale(${ws.toFixed(4)})`;
    word.style.color = `rgb(${lerp(20, 255, dk) | 0},${lerp(34, 247, dk) | 0},${lerp(26, 228, dk) | 0})`;
    word.style.setProperty('--u', (1 - P(t, 8.95, 9.4, E.in)).toFixed(3));
    op(word, t < 9.7 ? 1 : 0);
    word.style.textShadow = `0 0 ${(tap * 40).toFixed(1)}px rgba(243,213,138,${(tap * 0.9).toFixed(2)})`;

    /* 2 — the Word Note unfolds around it */
    const unfold = P(t, 9.05, 9.75, E.cam);
    const exitRing = P(t, 11.9, 12.4, E.inStrong);
    const float = { ry: smoothNoise(t * 0.6, 2) * 4 - 8 * P(t, 10.3, 11.1, E.cam), rx: smoothNoise(t * 0.5, 5) * 3 + 4 };
    tf(main, { x: cardX, y: cardY, z: -exitRing * 900, ...float });
    main.style.clipPath = `inset(0 ${((1 - unfold) * (mainSize.w - mainSize.ww - 80)).toFixed(1)}px ${((1 - unfold) * (mainSize.h - 110)).toFixed(1)}px 0 round 22px)`;
    op(main, P(t, 9.0, 9.2, E.lin) * (1 - exitRing));
    main.querySelector('.wn-word').style.opacity = t < 9.7 ? 0 : 1;
    mainParts.slice(1).forEach((p, i) => {
      const q = P(t, 9.45 + i * 0.08, 9.95 + i * 0.08, E.outSoft);
      p.style.opacity = q.toFixed(3); p.style.transform = `translateY(${((1 - q) * 16).toFixed(1)}px)`;
    });

    /* 3 — the rest of the chapter's Word Notes orbit in */
    const SLOTS = [[1010, 120, -260, -14], [1400, 250, -520, -18], [1060, 520, -380, -12], [1430, 620, -700, -20], [1250, -60, -1000, -16], [1580, 430, -1100, -22]];
    ring.forEach(({ c, i }) => {
      const t0 = 10.35 + i * 0.1;
      const p = P(t, t0, t0 + 0.95, E.cam);
      const [x, y, z, ry] = SLOTS[i];
      const drift = (t - 10.3) * 14;
      tf(c, { x: lerp(x + 700, x, p) - drift, y: y + Math.sin(t * 0.9 + i) * 8, z: lerp(z - 1800, z, p) - exitRing * 1200, ry: ry + (1 - p) * -25, rx: 4, rz: (i % 2 ? 1 : -1) * 1.5 });
      op(c, P(t, t0, t0 + 0.4, E.lin) * (1 - exitRing) * (i > 3 ? 0.55 : 1));
      blur(c, (-z - 250) / 160 + (1 - p) * 8 + exitRing * 6);
    });
    /* 4 — type + counter */
    headSpans.forEach((s, i) => riseIn(s, t, 10.45 + i * 0.12, 0.8));
    op(head, 1 - P(t, 11.95, 12.3, E.lin));
    const cp = P(t, 11.0, 11.9, E.out);
    num.textContent = Math.round(cp * 4);
    op(count, P(t, 10.95, 11.2, E.lin) * (1 - P(t, 11.95, 12.3, E.lin)));
    tf(count, { y: (1 - P(t, 10.95, 11.5, E.outSoft)) * 30 });
    drawDust(t, 0.3, 0.2);
  }, W3);
}

/* ------------------------- S4 · ENGLISH ⇄ ARABIC ------------------------ */
{
  const enL = $('#s4en'), arL = $('#s4ar');
  const en = pageEn.cloneNode(true); en.id = 'page-en2'; enL.appendChild(en);
  const ar = pageEn.cloneNode(true); ar.id = 'page-ar'; ar.classList.add('rtl'); arL.appendChild(ar);
  [enL, arL].forEach(l => { l.style.perspective = '1500px'; });
  en.querySelectorAll('.w').forEach(w => { w.style.opacity = 1; w.style.transform = 'none'; });
  en.querySelector('.hs-card').remove(); ar.querySelector('.hs-card').remove();
  en.querySelector('.pg-title').style.clipPath = 'none'; en.querySelector('.pg-chapter').style.opacity = 1;
  en.querySelector('.player').style.opacity = 1;
  // Arabic source: src/data/adam/b1/ar/pages.ts (chapter 1), unchanged
  ar.querySelector('.pg-title').textContent = 'الْمُقَدِّمَةُ وَالْخَلْق';
  ar.querySelector('.pg-title').style.clipPath = 'none';
  ar.querySelector('.pg-chapter').textContent = 'الفصل ١'; ar.querySelector('.pg-chapter').style.opacity = 1;
  ar.querySelector('.pg-book-title').textContent = 'قصص الأنبياء: آدم (عليه السلام)';
  ar.querySelector('.pg-book-meta').textContent = 'المستوى B1 · صفحة ١';
  ar.querySelector('.pg-lang').innerHTML = '<span class="on" style="font-family:Arakom;font-weight:400;font-size:17px">العربية</span><span>EN</span>';
  ar.querySelector('.pg-count').textContent = 'صفحة ١ / ١٧';
  ar.querySelector('.pg-brand').textContent = 'قصص الأنبياء عليهم السلام';
  ar.querySelectorAll('.pl-time')[1].textContent = '1:11';
  ar.querySelector('.player').style.opacity = 1;
  const arText = ar.querySelector('.pg-text');
  arText.innerHTML = '<p>آدم (عليه السلام) هو أول <b class="vw">رسول</b> وأبو البشر جميعا. خلقه الله من التراب، وأكرمه تكريما عظيما، وأعطاه قيمة كبيرة كأول إنسان. يحكي القرآن الكريم قصة آدم (عليه السلام) في سور مختلفة. تتحدث سور الأعراف، والبقرة، والحجر، والإسراء، وص، وطه عن قصة آدم (عليه السلام) بوضوح. نحن -أحفاد آدم- يمكننا أن نتعلم دروسا كثيرة من هذه القصة <b class="vw">الرائعة</b> والحقيقية.</p><p>بعد أن خلق الله السماء والأرض، أخبر الملائكة أنه سيخلق إنسانًا. وقال إنه قرر أن يجعل <b class="vw">خليفة</b> في الأرض. وكان هذا الخليفة سيعيش فيها سنوات كثيرة. فتعجبت الملائكة وبدأت تنتظر <b class="vw">بفضول</b>.</p>';
  const toggle = $('#s4toggle'), knob = $('#s4knob'), seam = $('#s4seam');
  const arTag = $('#s4arTag'), trTag = $('#s4trTag');

  scene('s4', 12.3, 17.6, t => {
    const intro = P(t, 12.3, 12.95, E.cam);
    const flip = P(t, 13.3, 14.35, bezier(0.6, 0, 0.3, 1));   // seam travels right → left (RTL)
    const settle = P(t, 14.35, 15.3, E.cam);
    const recede = P(t, 15.05, 15.9, E.cam);
    const leave = P(t, 17.15, 17.6, E.inStrong);
    const ry = lerp(-15, 15, P(t, 13.25, 14.5, E.inOut));
    const hand = smoothNoise(t * 0.5, 11) * 4;
    const cam = {
      px: 960, py: 540, s: lerp(0.62, 0.8, intro) + settle * 0.04 - recede * 0.12,
      ry: ry, rx: 7 - recede * 3, rz: lerp(-0.6, 0.6, flip), sx: CX + hand - recede * 60, sy: CY + recede * 40,
    };
    camTf(en, cam); camTf(ar, cam);
    const seamX = lerp(W + 60, -60, flip);
    enL.style.clipPath = `inset(0 ${Math.max(0, W - seamX).toFixed(1)}px 0 0)`;
    arL.style.clipPath = `inset(0 0 0 ${Math.max(0, seamX).toFixed(1)}px)`;
    const dim = recede * 0.7 + leave * 0.3;
    [en, ar].forEach(p => { p.style.filter = `brightness(${(lerp(0.55, 1, intro) * (1 - dim)).toFixed(3)}) blur(${(recede * 6 + leave * 10).toFixed(2)}px)`; });
    op(enL, P(t, 12.35, 12.75, E.lin)); op(arL, 1 - leave);
    seam.style.left = seamX + 'px';
    op(seam, Math.sin(Math.PI * flip) * 1.2);
    /* toggle: the real EN / العربية switch, one tap */
    const tIn = P(t, 12.35, 12.85, E.back), tOut = P(t, 13.35, 13.8, E.in);
    const press = Math.exp(-Math.pow((t - 13.02) / 0.07, 2));
    tf(toggle, { s: (0.8 + 0.4 * tIn) * (1 - press * 0.06) * (1 + tOut * 0.6), y: -tOut * 20 });
    op(toggle, P(t, 12.35, 12.6, E.lin) * (1 - tOut));
    blur(toggle, tOut * 16);
    knob.style.transform = `translateX(${(P(t, 13.02, 13.4, E.back) * 164).toFixed(1)}px)`;
    /* the Arabic tagline of the library */
    const reveal = P(t, 15.2, 16.1, bezier(0.5, 0, 0.2, 1));
    arTag.style.clipPath = `inset(-20% 0 -20% ${((1 - reveal) * 100).toFixed(2)}%)`;
    arTag.style.webkitMaskImage = `linear-gradient(to left, #000 ${(reveal * 100).toFixed(1)}%, transparent ${(reveal * 100 + 12).toFixed(1)}%)`;
    tf(arTag, { x: (1 - reveal) * -40 - leave * 80, s: 1 + (t - 15.2) * 0.012 });
    op(arTag, 1 - leave); blur(arTag, leave * 12);
    const tr = P(t, 15.75, 16.4, E.outSoft);
    trTag.style.opacity = (tr * (1 - leave)).toFixed(3); tf(trTag, { y: (1 - tr) * 18 });
    drawDust(t, 0.25, 0.1);
  }, W4);
}

/* ------------- S5 · CHAPTER LOOP · story → Quick Challenge → Language Focus ------------- */
// The reader's real chapter order (StoryPage.tsx): the chapter text, then its Quick Challenge,
// then its "After reading" Language Focus. Every one of the 12 chapters repeats this loop.
const CHECK_SVG = '<svg viewBox="0 0 24 24"><path d="M5.5 12.5l4 4 9-9" fill="none" stroke="#1a1408" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function flowRow(labels) {
  return '<div class="fl-row">' + labels.map((l, i) => (i ? '<b class="fl-l"><em></em></b>' : '') + `<div class="fl-n"><i>${CHECK_SVG}</i><span>${l}</span></div>`).join('') + '</div>';
}
/** state per node: 0 upcoming, 1 active, 2 done (fractional values blend) */
function paintFlow(root, states, fills) {
  const nodes = root.querySelectorAll('.fl-n'), lines = root.querySelectorAll('.fl-l em');
  nodes.forEach((n, i) => {
    const s = states[i];
    const act = clamp(1 - Math.abs(s - 1)), done = clamp(s - 1);
    n.style.setProperty('--dot', (act * (1 - done)).toFixed(3));
    n.style.setProperty('--chk', done.toFixed(3));
    n.style.setProperty('--txt', (0.42 + 0.58 * clamp(s)).toFixed(3));
    const ring = n.querySelector('i');
    ring.style.background = done > 0.5 ? 'var(--gold)' : 'rgba(10,10,8,.6)';
    ring.style.borderColor = s > 0.5 ? 'var(--gold-hi)' : 'rgba(194,170,107,.45)';
  });
  lines.forEach((l, i) => l.parentNode.querySelector('em').style.setProperty('--fill', clamp(fills[i]).toFixed(3)));
}
/** matching lines between two columns inside a card; pairs = [[leftIndex, rightIndex], ...] */
function matchLines(svg, lefts, rights, pairs, t, t0, step) {
  const box = svg.getBoundingClientRect();
  const sx = svg.clientWidth / (box.width || 1), sy = svg.clientHeight / (box.height || 1);
  let html = '';
  pairs.forEach(([li, ri], k) => {
    const p = P(t, t0 + k * step, t0 + k * step + step * 0.8, E.inOut);
    const L = lefts[li], R = rights[ri];
    const x1 = L.offsetLeft + L.offsetWidth, y1 = L.offsetTop + L.offsetHeight / 2;
    const x2 = R.offsetLeft, y2 = R.offsetTop + R.offsetHeight / 2;
    L.classList.toggle('ok', p >= 1); R.classList.toggle('ok', p >= 1);
    if (p <= 0) return;
    const mx = (x1 + x2) / 2;
    const d = `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
    html += `<path d="${d}" stroke="#00bc7d" stroke-width="3" fill="none" pathLength="1" stroke-dasharray="${p.toFixed(3)} 1" stroke-linecap="round"/>` +
      `<circle cx="${x1}" cy="${y1}" r="6" fill="#00bc7d"/>` + (p >= 1 ? `<circle cx="${x2}" cy="${y2}" r="6" fill="#00bc7d"/>` : '');
  });
  svg.innerHTML = html;
}
function matchCard(cls, eyebrow, title, sub, question, instr, lefts, rights, headL = 'CONCEPTS', headR = 'MEANINGS', parent) {
  const c = el('div', 'ui mt ui-pad ' + cls, `<div class="ui-ey">${eyebrow}</div><div class="ui-t">${title}</div><div class="ui-s">${sub}</div>
    <div class="mt-q">${question}</div><div class="mt-i">${instr}</div>
    <div class="mt-cols"><div><h5>${headL}</h5>${lefts.map(x => `<div class="mt-c">${x}</div>`).join('')}</div><div><h5>${headR}</h5>${rights.map(x => `<div class="mt-m">${x}</div>`).join('')}</div><svg class="mt-svg"></svg></div>`, parent);
  return { c, L: Array.from(c.querySelectorAll('.mt-c')), R: Array.from(c.querySelectorAll('.mt-m')), svg: c.querySelector('.mt-svg') };
}
const ADAM_CH = ['Introduction & The Creation', 'The Shaping of Adam', 'Iblis’s Arrogance', 'The Expulsion of Iblis', 'Life in Paradise and the Warning', 'Satan’s lies and Adam’s Departure from Paradise', 'Forgiveness and Repentance', 'Struggle and Survival on Earth', 'The First Messenger and the Path of Guidance', 'The Two Sons: Habil and Qabil', 'The First Conflict and the Raven', 'The Legacy of Adam'];
{
  const S = $('#s5'), world = $('#s5world'), qc = $('#qc'), q = $('#qcQ');
  const opts = [0, 1, 2].map(i => $('#qo' + i)), fb = $('#qcFb'), tap = $('#s5tap');
  const qWords = splitWords(q);
  const oldHead = $('#s5head'); if (oldHead) oldHead.remove();
  const flow = el('div', 'flow', `<div class="fl-eye"><span lang="tr">Bölüm 1</span> · Introduction &amp; The Creation</div>${flowRow(['Hikâye', 'Quick Challenge', 'Language Focus'])}`, S);
  /* Language Focus panel — real Chapter 1 activities (src/data/adam/b1/en/languageFocus.ts) */
  const LFA = [
    ['Source Voice and Story Time', 'MATCH', 'Match each Chapter 1 expression with the time perspective it creates.'],
    ['Looking Forward from a Past Moment', 'MATCH', 'Match each expression with the meaning it carries in the chapter.'],
    ['Connecting and Reporting Ideas', 'MATCH', 'Match each Chapter 1 structure with its communicative job.'],
    ['Build a Connected Account', 'USE', 'Write or say four connected B1 sentences using Chapter 1 language patterns.'],
  ];
  const lf = el('div', 'ui lf', `<div class="lf-head"><div class="ico brown"><svg viewBox="0 0 24 24"><path d="M5 4.5h11a2 2 0 0 1 2 2V20H7a2 2 0 0 1-2-2z M5 18a2 2 0 0 1 2-2h11" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg></div>
    <div><div class="lf-meta">AFTER READING<span>4 activities</span></div><div class="lf-title">Language Focus</div><div class="lf-sub">Open when you are ready to notice, connect, and use the language.</div></div>
    <div class="lf-prog"><small>PROGRESS</small><b id="lfCount">0 / 4</b><div class="bar"><i id="lfBar"></i></div></div></div>
    <div class="lf-rows">${LFA.map(([ti, tg, d], i) => `<div class="lf-row"><div class="n">${i + 1}</div><div><b>${ti}</b><span class="tag">${tg}</span><p>${d}</p></div><div class="arr">→</div></div>`).join('')}</div>`, world);
  const lfRows = Array.from(lf.querySelectorAll('.lf-row'));
  const task = matchCard('lft', 'LANGUAGE FOCUS', 'Source Voice and Story Time', 'Match each Chapter 1 expression with the time perspective it creates.',
    'How does the chapter move between presenting the story as a source and narrating past events?', 'Match the concepts on the left with their meanings on the right.',
    ['The Holy Qur’an tells his tale', 'These surahs describe Adam’s tale', 'Allah created the sky and the earth', 'the angels began to wait'],
    ['narrates a completed event in the past', 'moves the past narrative to the next event', 'presents what the source does generally', 'presents information about the source in the present'], 'CONCEPTS', 'MEANINGS', world);
  const TASK_PAIRS = [[0, 2], [1, 3], [2, 0], [3, 1]];
  /* chapter rail: all 12 chapters of Adam (B1), each with its own Quick Challenge and Language Focus */
  const railW = $('#s5railw');
  const mods = ADAM_CH.map((ti, i) => el('div', 'rail-m', `<div class="ri"><img src="assets/img/adam_b1/ch${String(i + 1).padStart(2, '0')}.jpg"></div><div class="rb"><div class="rn" lang="tr">BÖLÜM ${String(i + 1).padStart(2, '0')}</div><div class="rt">${ti}</div><div class="rc"><span class="q">Quick Challenge</span><span class="l">Language Focus</span></div></div>`, railW));
  const railHead = el('div', 'kin', '<div class="eyebrow" lang="tr">12 bölümün her birinde</div><div class="line">Hikâye, ardından</div><div class="line gold">kendi alıştırması ve dil çalışması.</div>', S);
  railHead.style.bottom = '90px'; railHead.querySelectorAll('.line').forEach(l => { l.style.fontSize = '62px'; });
  const railSpans = maskLines(railHead);
  let fbH = null;

  scene('s5', 20.5, 29.6, t => {
    if (fbH == null) { fb.style.height = 'auto'; fbH = fb.offsetHeight; }
    const hand = { x: smoothNoise(t * 0.45, 51) * 5, y: smoothNoise(t * 0.4, 52) * 4 };
    /* flow indicator */
    const fIn = P(t, 20.7, 21.3, E.outSoft), fOut = P(t, 27.95, 28.35, E.in);
    op(flow, fIn * (1 - fOut)); tf(flow, { y: (1 - fIn) * -16 });
    paintFlow(flow, [1 + P(t, 21.1, 21.5), P(t, 21.2, 21.6) + P(t, 24.45, 24.85), P(t, 24.6, 25.0) + P(t, 27.7, 28.0)], [P(t, 21.0, 21.6, E.inOut), P(t, 24.4, 25.0, E.inOut)]);
    /* Quick Challenge */
    const inn = P(t, 20.85, 21.75, E.outSoft);
    const up = P(t, 24.3, 25.2, E.cam);
    tf(qc, { x: 410 + hand.x - up * 180, y: lerp(lerp(560, 200, inn), -620, up) + hand.y, z: lerp(-600, 0, inn) - up * 500, rx: lerp(24, 3, inn) + up * 10, ry: lerp(10, -4, inn), rz: lerp(-2.5, 0, inn) });
    op(qc, P(t, 20.85, 21.1, E.lin) * (1 - P(t, 24.9, 25.3, E.lin)));
    qWords.forEach((w, i) => { const p = P(t, 21.35 + i * 0.03, 21.85 + i * 0.03, E.outSoft); w.style.opacity = p; w.style.transform = `translateY(${((1 - p) * 20).toFixed(1)}px)`; });
    opts.forEach((o, i) => { const p = P(t, 21.8 + i * 0.12, 22.35 + i * 0.12, E.outSoft); o.style.opacity = p.toFixed(3); o.style.transform = `translateX(${((1 - p) * 60).toFixed(1)}px)`; });
    const r = opts[1].getBoundingClientRect();
    const tx = r.left + r.width * 0.36, ty = r.top + r.height * 0.55;
    const mv = P(t, 22.55, 23.05, E.cam);
    tap.style.left = lerp(tx + 520, tx, mv) + 'px'; tap.style.top = lerp(ty + 330, ty, mv) + 'px';
    const press = Math.exp(-Math.pow((t - 23.1) / 0.07, 2));
    tap.style.transform = `scale(${(1 - press * 0.25).toFixed(3)})`;
    const rp = P(t, 23.1, 23.6, E.out);
    tap.style.setProperty('--r', (1 + rp * 1.8).toFixed(3)); tap.style.setProperty('--ro', (t > 23.1 ? 1 - rp : 0).toFixed(3));
    op(tap, P(t, 22.55, 22.75, E.lin) * (1 - P(t, 23.4, 23.7, E.lin)));
    const ok = t >= 23.12;
    opts[1].classList.toggle('ok', ok);
    const pop = ok ? Math.exp(-Math.pow((t - 23.2) / 0.12, 2)) : 0;
    opts[1].style.transform += ` scale(${(1 + pop * 0.035).toFixed(4)})`;
    const fbp = P(t, 23.25, 23.75, E.cam);
    fb.style.height = (fbp * fbH).toFixed(1) + 'px'; fb.style.opacity = P(t, 23.25, 23.45, E.lin).toFixed(3);
    fb.style.marginTop = (12 * fbp).toFixed(1) + 'px'; fb.style.borderWidth = fbp > 0.01 ? '1.5px' : '0';
    /* Language Focus rises from below, then its first activity opens */
    const lIn = P(t, 24.45, 25.35, E.cam), lSide = P(t, 25.95, 26.7, E.cam), lOut = P(t, 27.95, 28.5, E.inStrong);
    tf(lf, { x: 340 - lSide * 250 + hand.x, y: lerp(1250, 250, lIn) + hand.y, z: -lSide * 380 - lOut * 900, rx: lerp(18, 2, lIn), ry: lSide * 16 });
    op(lf, P(t, 24.45, 24.7, E.lin) * (1 - lSide * 0.35) * (1 - lOut));
    lfRows.forEach((row, i) => { const p = P(t, 24.95 + i * 0.1, 25.5 + i * 0.1, E.outSoft); row.style.opacity = p.toFixed(3); row.style.transform = `translateY(${((1 - p) * 26).toFixed(1)}px)`; });
    lfRows[0].classList.toggle('hl', t > 25.75);
    lfRows[0].style.transform += ` scale(${(1 - Math.exp(-Math.pow((t - 25.8) / 0.07, 2)) * 0.02).toFixed(4)})`;
    const doneA = t >= 27.7;
    lfRows[0].querySelector('.n').classList.toggle('done', doneA);
    lfRows[0].querySelector('.n').textContent = doneA ? '✓' : '1';
    $('#lfCount').textContent = doneA ? '1 / 4' : '0 / 4';
    $('#lfBar').style.width = (P(t, 27.7, 28.0) * 25) + '%';
    const tIn = P(t, 25.95, 26.75, E.cam);
    tf(task.c, { x: lerp(2100, 690, tIn) + hand.x, y: 150 + hand.y, z: 120 - lOut * 900, ry: lerp(-24, -6, tIn), rx: 2 });
    op(task.c, P(t, 25.95, 26.2, E.lin) * (1 - lOut));
    matchLines(task.svg, task.L, task.R, TASK_PAIRS, t, 26.75, 0.3);
    /* every chapter repeats the loop */
    const rIn = P(t, 28.05, 28.6, E.outSoft), rOut = P(t, 29.15, 29.5, E.in);
    const pan = P(t, 28.2, 29.45, bezier(0.5, 0, 0.3, 1));
    camTf(railW, { px: 200 + pan * 11 * 440, py: 280, s: 1, sx: 760 + hand.x, sy: 470 + (1 - rIn) * 80, z: -150 - rOut * 300, ry: -14, rx: 3 });
    mods.forEach((m, i) => tf(m, { x: i * 440, y: Math.sin(i * 1.3) * 18, z: 0 }));
    op($('#s5rail'), rIn * (1 - rOut)); blur(railW, Math.sin(Math.PI * pan) * 2.5 + rOut * 6);
    railSpans.forEach((sp, i) => riseIn(sp, t, 28.25 + i * 0.12, 0.7));
    op(railHead, 1 - P(t, 29.1, 29.45, E.lin));
    drawDust(t, 0.22, 0);
  });
}

/* -------- S5b · END OF BOOK · the real finalized order (uiBookFinalization.ts) --------
   Knowledge Check → Master Glossary → Vocabulary Challenge → Language Review → Final Challenge */
{
  const S = $('#s5b'), world = $('#s5bworld');
  const track = el('div', 'track', `<div class="fl-eye" style="font-size:17px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);font-weight:600;margin-bottom:18px" lang="tr">Bölümler bittikten sonra · kitabın sonunda</div>${flowRow(['Knowledge Check', 'Master Glossary', 'Vocabulary Challenge', 'Language Review', 'Final Challenge'])}`, S);
  const capBox = el('div', 'caption', '', S);
  const CAPS = [
    ['Knowledge Check', 'Bütün kitabı kapsayan anlama soruları'],
    ['Master Glossary', 'Kitabın bütün kelimeleri, tek bir sözlükte'],
    ['Vocabulary Challenge', 'Anlamdan bağlama, bağlamdan kullanıma'],
    ['Language Review', 'Kitabın dil yapıları, yeni bağlamlarda'],
    ['Final Challenge', 'Bütün hikâyeyi bir araya getiren final'],
  ].map(([k, c]) => el('div', 'cap', `<small lang="en">${k}</small><span lang="tr">${c}</span>`, capBox));
  const ICON_CAP = '<svg viewBox="0 0 24 24"><path d="M2.5 9L12 4.5 21.5 9 12 13.5z M6 11v4.2c0 1.6 2.7 3 6 3s6-1.4 6-3V11" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg>';
  const ICON_BOOK = '<svg viewBox="0 0 24 24"><path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5z M12 6.5v13" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/></svg>';
  const ICON_TROPHY = '<svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0z M8 6H4.5v1.5A3.5 3.5 0 0 0 8 11 M16 6h3.5v1.5A3.5 3.5 0 0 1 16 11 M12 13v4 M8.5 20h7 M9.5 17h5" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* Knowledge Check (src/data/adam/b1/en/exercises.ts) */
  const kc = el('div', 'ui kc', `<div class="kc-box"><div class="ico">${ICON_CAP}</div><div><div class="ui-ey">AFTER THE STORY</div><div class="ui-t" style="font-size:40px">B1 Knowledge Check: Prophet Adam (pbuh)</div><div class="ui-s">Check your understanding of the key relationships, events and ideas across the whole book.</div></div></div>
    <div class="kc-ans"><span id="kcA">Answered 0/8</span><div class="bar"><i id="kcBar"></i></div></div>
    <div class="kc-q"><div class="qq"><span>1</span>How is Adam introduced at the beginning of the book?</div>
      <div class="kc-o"><span>A</span>As a ruler who lived after many other messengers</div><div class="kc-o" id="kcB"><span>B</span>As the first Messenger and father of all humans</div><div class="kc-o"><span>C</span>As one of Qabil’s sons</div></div>
    <div class="kc-q"><div class="qq"><span>2</span>Chapter 2 presents knowledge and intellect as important gifts given to Adam for learning and understanding.</div><div class="kc-tf"><div id="kcT">True</div><div>False</div></div></div>`, world);

  /* Master Glossary — all 48 words of the book (src/data/adam/b1/en/pages.ts, glossary page) */
  const GLOSS = [["admired", "verb", 3, "Felt respect and approval for someone.", "Feelings & Attitudes"], ["admitting", "verb", 12, "Accepting or saying that something is true.", "Learning & Values"], ["angry", "adjective", 4, "Feeling strong displeasure.", "Feelings"], ["arrogant", "adjective", 3, "Too proud and sure of one’s own importance.", "Character & Values"], ["barrier", "noun", 7, "Something that prevents progress or clear understanding.", "Ideas & Obstacles"], ["blessings", "noun", 5, "Good things or gifts for which people are thankful.", "Spiritual Life"], ["careful", "adjective", 4, "Paying attention to avoid danger or harm.", "Safety & Awareness"], ["community", "noun", 9, "A group of people living or acting together.", "Society"], ["Creator", "noun", 4, "The One who creates.", "Belief & Faith"], ["curiosity", "noun", 1, "A strong wish to know more.", "Learning & Thinking"], ["digging", "verb", 11, "Making a hole in the ground.", "Actions"], ["disagreement", "noun", 10, "A serious difference of opinion.", "Relationships & Conflict"], ["distinguishing", "verb", 7, "Recognizing the difference between things.", "Learning & Thinking"], ["enemy", "noun", 4, "Someone who is hostile or wishes harm.", "Relationships"], ["fabulous", "adjective", 1, "Very impressive or wonderful.", "Description"], ["forbidden", "adjective", 6, "Not allowed by a rule or command.", "Rules & Choices"], ["friend", "noun", 5, "A person who is trusted and cared about.", "Relationships"], ["goodness", "noun", 2, "What is good, helpful, or beneficial.", "Values"], ["guide", "verb", 12, "To show the right direction or way to act.", "Guidance & Faith"], ["handful", "noun", 2, "An amount that can be held in one hand.", "Quantity & Description"], ["harm", "verb", 11, "To hurt or damage someone or something.", "Actions & Safety"], ["inborn", "adjective", 6, "Present naturally from birth.", "Human Nature"], ["intellect", "noun", 2, "The ability to reason, learn, and understand.", "Learning & Thinking"], ["jealous", "adjective", 10, "Unhappy because someone else has something one wants.", "Feelings"], ["jealousy", "noun", 12, "A feeling of wanting what another person has.", "Feelings"], ["knowledge", "noun", 2, "Information and understanding that someone has.", "Learning & Thinking"], ["lonely", "adjective", 5, "Unhappy because one is without companionship.", "Feelings"], ["message", "noun", 12, "An important idea or teaching passed to others.", "Communication & Faith"], ["Messenger", "noun", 1, "A person chosen by Allah to deliver His message.", "Spiritual Life"], ["mistake", "noun", 7, "An action or decision that is wrong.", "Learning & Choices"], ["offering", "noun", 10, "A gift or sacrifice made to show devotion.", "Spiritual Life"], ["origin", "noun", 3, "The point or material from which something begins.", "Ideas & Identity"], ["panic", "noun", 11, "Sudden strong fear that makes calm thinking difficult.", "Feelings"], ["pardon", "verb", 7, "To forgive someone for a wrong action.", "Forgiveness & Values"], ["purpose", "noun", 9, "The reason why something exists or is done.", "Ideas & Meaning"], ["raven", "noun", 11, "A large black bird.", "Animals & Nature"], ["righteously", "adverb", 9, "In a morally right way.", "Values & Conduct"], ["ruler", "noun", 1, "A person given responsibility to lead or manage.", "Leadership & Responsibility"], ["sacred", "adjective", 9, "Connected with religion and deserving special respect.", "Spiritual Life"], ["shame", "noun", 6, "A painful feeling connected with awareness of wrong behavior.", "Feelings & Values"], ["shelter", "noun", 8, "A place that gives protection from danger or weather.", "Survival & Daily Life"], ["shepherd", "noun", 10, "A person who takes care of sheep or other animals.", "People & Roles"], ["struggle", "verb", 8, "To make a strong effort during difficulty.", "Challenges & Effort"], ["superiority", "noun", 3, "The state of being considered better or higher.", "Values & Equality"], ["survive", "verb", 8, "To continue to live despite difficulty or danger.", "Survival & Life"], ["visible", "adjective", 6, "Able to be seen.", "Description"], ["weapons", "noun", 8, "Objects used for protection or fighting.", "Objects & Safety"], ["wife", "noun", 5, "A married woman in relation to her spouse.", "Family & Relationships"]];
  const gl = el('div', 'ui gl', `<div class="gl-top"><div class="ico">${ICON_BOOK}</div><div><div class="ui-ey">VOCABULARY LEARNING HUB</div><div class="ui-t" style="font-size:42px">Master Glossary</div><div class="ui-s" style="font-size:18px">Review the story vocabulary, map your confidence and keep difficult words visible.</div></div>
    <div class="gl-map"><small>CONFIDENCE MAP</small><b id="glPct">0%</b><p>This stage reflects your current self-assessment of the vocabulary.</p><div class="bar"><i id="glBar" style="background:linear-gradient(90deg,#00bc7d,#34d399)"></i></div></div></div>
    <div class="gl-stats"><div class="gl-st a"><small>ALL WORDS</small><b>48</b></div><div class="gl-st c"><small>CONFIDENT</small><b id="glC">0</b></div><div class="gl-st p"><small>PRACTICE</small><b id="glP">0</b></div><div class="gl-st n"><small>NEW</small><b id="glN">48</b></div></div>
    <div class="gl-filters"><div class="gl-search">⌕&nbsp;&nbsp;Search for a word or definition…</div><div class="gl-chip on">All words · 48</div><div class="gl-chip" id="glCc">Confident · 0</div><div class="gl-chip" id="glPc">Practice · 0</div><div class="gl-chip" id="glNc">New · 48</div><div class="gl-sel">All Chapters&nbsp;&nbsp;⌄</div></div>
    <div class="gl-view"><div class="gl-grid" id="glGrid"></div></div>`, world);
  const cap1 = w => w.charAt(0).toUpperCase() + w.slice(1);
  const gcards = GLOSS.map(([w, pos, ch, d, cat], i) => el('div', 'gc', `<div class="gn">${String(i + 1).padStart(2, '0')}<em>NEW</em></div><div class="spk"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z M15.5 9.5c1 1.2 1 3.8 0 5" fill="none" stroke="#e17100" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="gw">${cap1(w)}</div><div class="gp">${pos}<b>·</b>Chapter ${ch}</div><div class="gd">${d}</div><div class="gk">${cat}</div><div class="gf">Word Focus</div><div class="gb"><span class="y">✓ I know this</span><span class="x">✕ Needs practice</span></div>`, gl.querySelector('#glGrid')));
  // self-assessment played out on screen: which card gets marked, and when
  const MARKS = [[0, 'conf'], [2, 'conf'], [3, 'prac'], [5, 'conf'], [6, 'conf'], [9, 'conf'], [11, 'prac'], [13, 'conf'], [14, 'conf'], [16, 'conf'], [18, 'conf'], [21, 'prac'], [22, 'conf'], [25, 'conf']];

  /* Vocabulary Challenge (live UI content) */
  const VW = ['Messenger', 'Origin', 'Friend', 'Struggle', 'Disagreement', 'Guide', 'Fabulous', 'Arrogant'];
  const VM = ['A place that gives protection from danger or weather.', 'Too proud and sure of one’s own importance.', 'A person who takes care of sheep or other animals.', 'The point or material from which something begins.', 'A person chosen by Allah to deliver His message.', 'To show the right direction or way to act.', 'To make a strong effort during difficulty.', 'A serious difference of opinion.'];
  const vc = el('div', 'ui vc', `<div class="hrow"><div class="ico">${ICON_BOOK}</div><div><div class="ui-ey">VOCABULARY CHALLENGE</div><div class="ui-s" style="margin-top:4px">Move from meaning recognition to story context and active recall.</div></div></div>
    <div class="tabs"><div class="on">Match</div><div>In Context</div><div>Recall &amp; Use</div></div>
    <div class="vc-cnt"><span id="vcN">0/12</span><div class="bar"><i id="vcBar"></i></div></div>
    <div class="vc-hint">Select a word, then select its meaning to make a match.</div>
    <div class="vc-cols"><div><h5>WORDS</h5>${VW.map(w => `<div class="vc-w">${w}</div>`).join('')}</div><div><h5>MEANINGS</h5>${VM.map(m => `<div class="vc-m">${m}</div>`).join('')}</div><svg class="mt-svg"></svg></div>`, world);
  const vcL = Array.from(vc.querySelectorAll('.vc-w')), vcR = Array.from(vc.querySelectorAll('.vc-m')), vcSvg = vc.querySelector('.mt-svg');
  const VPAIRS = [[0, 4], [1, 3], [7, 1], [3, 6]];

  /* Language Review (live UI content, task 1 / 8) */
  const lrWrap = el('div', 'ui', '', world); lrWrap.style.width = '1400px';
  const lrHead = el('div', 'ui-pad', `<div class="kc-box" style="display:block;padding:22px 30px"><div style="display:flex;justify-content:space-between"><div><div class="ui-ey">AFTER VOCABULARY</div><div class="ui-t" style="font-size:40px">Language Review</div></div><div style="width:190px;font-size:13px;letter-spacing:.16em;color:#8a8579;font-weight:700">TASK <b style="float:right;color:var(--rust);font-size:18px">1 / 8</b><div class="bar" style="margin-top:12px"><i style="width:12.5%"></i></div></div></div>
    <div class="tabs amber" style="margin-top:14px"><div class="on">Notice</div><div>Build</div><div>Use</div></div></div>`, lrWrap);
  const lr = matchCard('lrt', 'LANGUAGE TASK', 'Time Perspective and Narrative Voice', 'Match each pattern with the job it performs in connected narration.',
    'How can a writer move between source information, past events, and what was still ahead from a past viewpoint?', 'Match the concepts on the left with their meanings on the right.',
    ['The Qur’an tells ...', 'After ... happened, ...', 'was going to / would + verb', 'began / started to + verb'],
    ['place one past event before another', 'show future meaning viewed from the past', 'mark the beginning of a process or action', 'present information about a source'], 'CONCEPTS', 'MEANINGS', lrWrap);
  lr.c.style.position = 'relative'; lr.c.style.boxShadow = 'none'; lr.c.style.background = 'transparent'; lr.c.style.width = '100%'; lr.c.style.paddingTop = '0';
  lr.c.querySelector('.mt-q').style.fontSize = '28px'; lr.c.querySelector('.mt-i').remove(); lr.c.querySelector('.ui-s').remove(); lrHead.style.paddingBottom = '18px';
  const LRP = [[0, 3], [1, 0], [2, 1], [3, 2]];

  /* Final Challenge */
  const fc = el('div', 'ui fc', `<div class="ico">${ICON_TROPHY}</div><h2>Final Challenge</h2><p>You’ve reached the end of the journey. Bring the whole story together with a carefully designed final challenge.</p><div class="go" id="fcGo">START THE CHALLENGE &nbsp;→</div>`, world);
  const fcq = el('div', 'ui fcq', `<div class="ui-ey">FINAL CHALLENGE · VALUE BEYOND ORIGIN</div><div class="ui-s" style="margin-top:6px">Choose the best supported conclusion.</div>
    <div class="kc-q" style="margin-top:22px"><div class="qq" style="font-size:30px;font-weight:700;letter-spacing:-0.02em">Which contrast best explains the story’s criticism of Iblis’s idea of superiority?</div>
    <div class="kc-o"><span>A</span>Iblis has less physical strength than Adam</div><div class="kc-o"><span>B</span>The angels are made from soil</div><div class="kc-o" style="height:auto;padding:14px 18px;line-height:1.35"><span style="flex:none">C</span>Iblis focuses on material origin while the story emphasizes knowledge and rejects race, color, or group as sources of greatness</div></div>`, world);

  const STATIONS = [kc, gl, vc, lrWrap, fc];
  const GAP = 2400;
  // camera holds on each station; [arrive, leave] in film time
  const HOLD = [[30.0, 31.45], [32.0, 35.45], [36.0, 38.1], [38.667, 40.8], [41.333, 43.0]];
  const camX = t => {
    const keys = [[29.3, -0.35]];
    HOLD.forEach(([a, b], i) => { keys.push([a, i, bezier(0.5, 0, 0.2, 1)]); keys.push([b, i, E.lin]); });
    return K(t, keys) * GAP;
  };
  const gate = $('#s5bgp');
  let sized = false;

  scene('s5b', 29.3, 43.0, t => {
    if (!sized) { sized = true; STATIONS.forEach((s, i) => { s.__w = s.offsetWidth; s.__h = s.offsetHeight; s.__s = Math.min(1, 730 / s.__h, 1560 / s.__w); }); }
    const hand = { x: smoothNoise(t * 0.45, 61) * 5, y: smoothNoise(t * 0.4, 62) * 4 };
    const cx = camX(t), speed = Math.abs(camX(t + 1 / 60) - cx) * 60;
    const leave = P(t, 42.55, 43.0, E.inStrong);
    tf(world, { x: -cx + hand.x, y: hand.y, z: -leave * 700, ry: clamp(speed / 900, 0, 1) * -3 });
    blur(world, Math.min(9, speed / 1500) + leave * 8);
    STATIONS.forEach((s, i) => {
      const dz = i % 2 ? -120 : 0;
      tf(s, { x: i * GAP + CX - s.__w / 2, y: 532 - s.__h / 2, z: dz, ry: 0, rx: 2, s: s.__s });
      const vis = Math.abs(i * GAP - cx) < GAP * 1.2;
      show(s, vis);
    });
    op(world, P(t, 29.4, 29.8, E.lin));
    /* the gate: an arch the camera passes through into the review part of the book */
    const g = P(t, 29.35, 30.1, bezier(0.55, 0, 0.9, 0.6));
    const k = 0.35 + g * 6;
    const gw = 360 * k, gh = 500 * k;
    gate.setAttribute('d', archD(CX - gw / 2, 560 - gh * 0.62, gw, gh, false));
    op($('#s5bgate'), P(t, 29.3, 29.5, E.lin) * (1 - P(t, 29.8, 30.05, E.lin)));
    /* order track + captions */
    const at = HOLD.map(([a, b]) => P(t, a - 0.45, a - 0.1, E.lin));
    const states = at.map((v, i) => v + (i < 4 ? at[i + 1] : P(t, 42.35, 42.6)));
    const trIn = P(t, 29.5, 30.1, E.outSoft);
    op(track, trIn * (1 - leave)); tf(track, { y: (1 - trIn) * -16 });
    paintFlow(track, states, [1, 2, 3, 4].map(i => at[i]));
    CAPS.forEach((c, i) => {
      const a = HOLD[i][0], b = HOLD[i][1];
      const p = P(t, a - 0.1, a + 0.45, E.outSoft) * (1 - P(t, b - 0.05, b + 0.25, E.in));
      c.style.opacity = p.toFixed(3); c.style.transform = `translateY(${((1 - P(t, a - 0.1, a + 0.45, E.outSoft)) * 30).toFixed(1)}px)`;
    });
    /* Knowledge Check interactions */
    const kB = t >= 30.45, kT = t >= 30.95;
    $('#kcB').classList.toggle('ok', kB); $('#kcT').classList.toggle('ok', kT);
    $('#kcA').textContent = `Answered ${(kB ? 1 : 0) + (kT ? 1 : 0)}/8`; $('#kcBar').style.width = `${((kB ? 1 : 0) + (kT ? 1 : 0)) * 12.5}%`;
    /* Master Glossary: 48 cards, self-assessment, scroll */
    gcards.forEach((c, i) => { const p = P(t, 31.85 + i * 0.012, 32.35 + i * 0.012, E.outSoft); c.style.opacity = p.toFixed(3); c.style.transform = `translateY(${((1 - p) * 30).toFixed(1)}px)`; });
    let conf = 0, prac = 0;
    MARKS.forEach(([idx, kind], j) => {
      const on = t >= 32.6 + j * 0.17;
      gcards[idx].classList.toggle(kind, on);
      if (on) { kind === 'conf' ? conf++ : prac++; gcards[idx].querySelector('em').textContent = kind === 'conf' ? 'CONFIDENT' : 'PRACTICE'; gcards[idx].querySelector('em').style.color = kind === 'conf' ? '#06905f' : '#d2334a'; }
      else { gcards[idx].querySelector('em').textContent = 'NEW'; gcards[idx].querySelector('em').style.color = ''; }
    });
    $('#glC').textContent = conf; $('#glP').textContent = prac; $('#glN').textContent = 48 - conf - prac;
    $('#glCc').textContent = `Confident · ${conf}`; $('#glPc').textContent = `Practice · ${prac}`; $('#glNc').textContent = `New · ${48 - conf - prac}`;
    $('#glPct').textContent = Math.round(conf / 48 * 100) + '%'; $('#glBar').style.width = (conf / 48 * 100) + '%';
    const scroll = P(t, 32.85, 35.45, bezier(0.45, 0, 0.4, 1)) * 2400;
    $('#glGrid').style.transform = `translateY(${-scroll.toFixed(1)}px)`;
    /* Vocabulary Challenge */
    VPAIRS.forEach(([li], k) => vcL[li].classList.toggle('sel', t >= 36.35 + k * 0.42 && t < 36.35 + k * 0.42 + 0.3));
    matchLines(vcSvg, vcL, vcR, VPAIRS, t, 36.5, 0.42);
    const vn = VPAIRS.filter((_, k) => t >= 36.5 + k * 0.42 + 0.34).length;
    $('#vcN').textContent = `${vn}/12`; $('#vcBar').style.width = (vn / 12 * 100) + '%';
    /* Language Review */
    matchLines(lr.svg, lr.L, lr.R, LRP, t, 39.05, 0.33);
    /* Final Challenge */
    const go = Math.exp(-Math.pow((t - 42.0) / 0.07, 2));
    $('#fcGo').style.transform = `scale(${(1 - go * 0.05).toFixed(3)})`;
    const qIn = P(t, 41.7, 42.3, E.cam);
    tf(fcq, { x: 4 * GAP + CX - 580, y: lerp(1300, 200, qIn), z: 160, s: 0.92 });
    op(fcq, P(t, 41.7, 41.9, E.lin));
    show(fcq, false);
    drawDust(t, 0.2, 0);
  });
}

/* ----------------------------- S6 · LEVELS ----------------------------- */
{
  const world = $('#s6world');
  const LV = [
    ['lv0', 24.05, 'Temel', 'The period before Islam was called the Age of Ignorance, or Jahiliyyah.'],
    ['lv1', 24.7, 'Orta', 'The period before Islam was called the Age of Ignorance, or Jahiliyyah, because religious and social disorder was common in society.'],
    ['lv2', 25.35, 'Üst', 'This period is called the Age of Ignorance because people did not truly know Allah and lacked justice, order, and peace in both their personal and social lives.'],
  ].map(([id, t0, tr, sample], i) => {
    const e = $('#' + id);
    e.querySelector('.lvl-tag span').textContent = tr;
    const s = el('div', 'lvl-txt', `“${sample}”`, e);
    return { e, t0, img: e.querySelector('.lvl-img img'), tag: e.querySelector('.lvl-tag'), s, i };
  });
  const head = $('#s6head'), headSpans = maskLines(head);
  const path = $('#s6path');
  const outlines = LV.map(() => { const q = document.createElementNS('http://www.w3.org/2000/svg', 'path'); q.setAttribute('fill', 'none'); q.setAttribute('stroke', 'url(#goldStroke)'); q.setAttribute('stroke-width', '1.6'); $('#s6line').appendChild(q); return q; });
  const style = el('style', null, `.lvl-txt{position:absolute;left:40px;right:34px;top:calc(100% + 26px);font-size:17.5px;line-height:1.5;font-style:italic;color:rgba(253,246,230,.78)} .lvl-txt::before{content:'';display:block;width:34px;height:2px;background:var(--gold);margin-bottom:12px}`, document.head);

  scene('s6', 22.6, 29.0, t => {
    const leave = P(t, 28.35, 28.95, E.inStrong);
    const cam = P(t, 22.7, 28.6, E.lin);
    const hand = { x: smoothNoise(t * 0.4, 31) * 6, y: smoothNoise(t * 0.35, 32) * 5 };
    tf(world, { x: -cam * 60 + hand.x, y: hand.y + leave * 60, z: cam * 70 - leave * 400, rx: 4, ry: lerp(6, -4, cam) });
    const apex = [];
    LV.forEach(o => {
      const p = P(t, o.t0 - 0.12, o.t0 + 0.75, E.cam);
      const x = 440 + o.i * 450, base = 890 - o.i * 55;
      tf(o.e, { x, y: base - 640, z: 0, s: 1 });
      o.e.style.height = '640px'; o.e.style.width = '430px';
      o.e.querySelector('.lvl-img').style.clipPath = `url(#arch)`;
      o.img.style.transform = `translate3d(${(-cam * 30 + (o.i - 1) * 10).toFixed(1)}px,${((1 - p) * 60).toFixed(1)}px,0) scale(${(1.12 - 0.08 * p).toFixed(4)})`;
      o.e.style.clipPath = `inset(${((1 - p) * 100).toFixed(2)}% -10% -40% -10%)`;
      op(o.e, P(t, o.t0 - 0.12, o.t0 + 0.2, E.lin) * (1 - leave));
      blur(o.e, leave * 8);
      const tg = P(t, o.t0 + 0.2, o.t0 + 0.8, E.outSoft);
      o.tag.style.transform = `translateY(${((1 - tg) * 40).toFixed(1)}px)`; o.tag.style.opacity = tg.toFixed(3);
      const sp = P(t, 26.35 + o.i * 0.22, 26.95 + o.i * 0.22, E.outSoft);
      o.s.style.opacity = sp.toFixed(3); o.s.style.transform = `translateY(${((1 - sp) * 16).toFixed(1)}px)`;
      const r = o.e.getBoundingClientRect();
      apex.push([r.left + r.width / 2, r.top - 20, p]);
      const ol = outlines[o.i];
      ol.setAttribute('d', archD(r.left, r.top, r.width, r.height, false));
      const L = ol.getTotalLength();
      const dp = P(t, 23.15 + o.i * 0.18, 24.05 + o.i * 0.18, E.inOut);
      ol.style.strokeDasharray = `${(L * dp).toFixed(1)} ${L}`;
      ol.style.opacity = (0.9 - 0.55 * p).toFixed(3);
    });
    /* gold progression line: A2 → B1 → B2 */
    let d = '';
    apex.forEach(([x, y], i) => { d += (i ? ' L' : 'M') + x.toFixed(1) + ',' + y.toFixed(1); });
    const last = apex[2]; d += ` L${(last[0] + 150).toFixed(1)},${(last[1] - 50).toFixed(1)}`;
    path.setAttribute('d', d);
    const len = path.getTotalLength();
    const lp = P(t, 24.8, 26.6, E.inOut);
    path.style.strokeDasharray = `${len}`; path.style.strokeDashoffset = `${(len * (1 - lp)).toFixed(1)}`;
    op($('#s6line'), 1 - leave);
    headSpans.forEach((s, i) => riseIn(s, t, 22.95 + i * 0.16, 0.8));
    op(head, 1 - leave);
    drawDust(t, 0.3, -0.1);
  }, W6);
}

/* ----------------------------- S7 · GUIDES ----------------------------- */
{
  const TG = ['Overview', 'Curriculum Alignment', 'Teaching Approach', 'Reading Framework', 'Chapter Support', 'Classroom Management', 'Differentiation', 'Assessment & Rubrics', 'Kinesthetic Learning', 'Global Citizenship', 'Values Education', 'Sensitive Notes', 'English Tips', 'Home Connection', 'Quick Checklist', 'Appendices'];
  const SG = ['Study Home', 'Study Path', '1. Who is this for?', '2. What is in the book?', '3. How to use the book', '4. Your Study Routine', '5. Reading Tips', '6. Learning New Words', '7. Listening & Speaking', '8. Writing Practice', '9. When it feels hard'];
  const tgItems = TG.map((s, i) => el('div', 'g-item', `<div class="ic"><i></i></div><span class="n">${i + 1}</span>${s.replace('&', '&amp;')}`, $('#tgList')));
  const sgItems = SG.map(s => el('div', 'g-item', `<div class="ic"><i></i></div>${s.replace('&', '&amp;')}`, $('#sgList')));
  const map = Array.from({ length: 12 }, (_, i) => el('div', '', String(i + 1), $('#sgMap')));
  const tg = $('#tg'), sg = $('#sg'), seam = $('#s7seam');
  const lblL = $('#s7lblL'), lblR = $('#s7lblR');
  const lblLs = Array.from(lblL.children), lblRs = Array.from(lblR.children);
  [tg, sg].forEach(g => { g.style.width = '1180px'; g.style.height = '780px'; });
  const SC = 0.74;

  scene('s7', 28.5, 34.6, t => {
    const sd = P(t, 28.55, 29.0, E.cam);
    const close = P(t, 33.55, 34.4, bezier(0.7, 0, 0.9, 0.5));
    seam.style.transform = `scale(${(1 + Math.pow(close, 3) * 26).toFixed(3)},${sd.toFixed(4)})`;
    op(seam, sd * (1 + close * 0.6));
    seam.style.boxShadow = `0 0 ${(24 + close * 60).toFixed(0)}px ${(6 + close * 30).toFixed(0)}px rgba(243,213,138,${(0.6 + close * 0.3).toFixed(2)})`;
    const oL = P(t, 28.9, 29.75, E.cam), oR = P(t, 31.5, 32.35, E.cam);
    const hand = smoothNoise(t * 0.4, 41) * 3;
    // pages hinge on the seam, like an opening book
    const gw = 1180 * SC, gh = 780 * SC;
    tg.style.transformOrigin = '100% 50%'; sg.style.transformOrigin = '0% 50%';
    tf(tg, { x: 945 - 1180, y: CY - 780 / 2 - 60 + hand, z: -120, ry: lerp(88, 17, oL) + close * 73, s: SC });
    tf(sg, { x: 975, y: CY - 780 / 2 - 60 - hand, z: -120, ry: lerp(-88, -17, oR) - close * 73, s: SC });
    op(tg, P(t, 28.9, 29.1, E.lin)); op(sg, P(t, 31.5, 31.7, E.lin));
    tg.style.filter = `brightness(${(0.55 + 0.45 * oL).toFixed(3)})`; sg.style.filter = `brightness(${(0.55 + 0.45 * oR).toFixed(3)})`;
    /* teacher side: browsing the 16-part guide map */
    const browse = Math.max(0, (t - 29.8) / 0.3);
    const active = Math.min(15, Math.floor(browse));
    const scroll = clamp(browse - 6, 0, 7) * 62;
    tgItems.forEach((it, i) => {
      const p = P(t, 29.3 + i * 0.035, 29.8 + i * 0.035, E.outSoft);
      it.style.opacity = p.toFixed(3);
      it.style.transform = `translate3d(${((1 - p) * -24).toFixed(1)}px,${(-scroll).toFixed(1)}px,0)`;
      it.classList.toggle('on', i === active);
    });
    /* student side: progress through the self-study route */
    sgItems.forEach((it, i) => {
      const p = P(t, 31.9 + i * 0.035, 32.4 + i * 0.035, E.outSoft);
      it.style.opacity = p.toFixed(3); it.classList.toggle('on', i === 0);
    });
    const done = Math.floor(clamp((t - 32.35) / 1.0) * 6);
    map.forEach((m, i) => { m.className = i < done ? 'done' : i === done ? 'on' : ''; });
    const pct = Math.round(lerp(8, 50, clamp((t - 32.35) / 1.0)));
    $('#sgPct').textContent = pct + '%'; $('#sgBar').style.width = pct + '%';
    $('#sgFrac').textContent = `${Math.min(12, done + 1)} / 12`; $('#sgDone').textContent = done;
    $('#sgAct').textContent = `${done * 5} / 60`;
    /* labels */
    lblLs.forEach((s, i) => { const p = P(t, 29.35 + i * 0.1, 29.95 + i * 0.1, E.outSoft); s.style.opacity = p * (1 - close); s.style.transform = `translateY(${((1 - p) * 26).toFixed(1)}px)`; });
    lblRs.forEach((s, i) => { const p = P(t, 31.85 + i * 0.1, 32.45 + i * 0.1, E.outSoft); s.style.opacity = p * (1 - close); s.style.transform = `translateY(${((1 - p) * 26).toFixed(1)}px)`; });
    drawDust(t, 0.22, 0);
    $('#flash').style.opacity = (P(t, 34.25, 34.45, E.in) * 0.6).toFixed(3);
  }, W7);
}

/* ----------------------------- S8 · FINALE ----------------------------- */
{
  const wall = $('#s8wall');
  const tiles = [];
  for (let r = 0; r < 7; r++) for (let c = 0; c < 11; c++) {
    const i = (r * 11 + c) % 60;
    const d = el('div', 'wall', `<img src="assets/img/wall/w${String(i).padStart(2, '0')}.jpg">`, wall);
    tiles.push({ d, r, c, ph: (r * 7 + c * 13) % 10 / 10 });
  }
  const word = $('#s8word');
  word.innerHTML = 'Lisandan Kültüre'.split('').map(ch => `<span class="clip"><span class="ch">${ch === ' ' ? '&nbsp;' : ch}</span></span>`).join('');
  const chars = Array.from(word.querySelectorAll('.ch'));
  const logo = $('#s8logo'), sheen = $('#s8sheen'), flare = $('#s8flare');
  const sub = $('#s8sub'), meta = $('#s8meta');

  scene('s8', 34.4, OLD_END, t => {
    const a = P(t, 34.45, 36.0, E.cam);
    const drift = t - 34.45;
    tf(wall, { x: CX, y: CY, z: -900 + drift * 60, rx: 24, rz: -9, s: 1 });
    tiles.forEach(o => {
      const x = (o.c - 5) * 254 - 115 + (o.r % 2) * 127, y = (o.r - 3) * 318 - 145;
      const p = P(t, 34.45 + o.ph * 0.5, 35.4 + o.ph * 0.5, E.cam);
      tf(o.d, { x, y: y + (1 - p) * 200, z: (1 - p) * -700 + Math.sin(drift * 0.8 + o.ph * 6) * 20 });
      op(o.d, p * 0.9);
    });
    op($('#s8dark'), 1);
    const lg = P(t, 34.5, 35.4, E.cam);
    tf(logo, { s: lerp(0.72, 1, lg) + drift * 0.012, y: (1 - lg) * 40 - P(t, 35.1, 35.9, E.cam) * 0 });
    op(logo, P(t, 34.5, 34.9, E.lin)); blur(logo, (1 - lg) * 18);
    sheen.style.backgroundPosition = `${(lerp(120, -40, P(t, 35.15, 36.1, E.inOut))).toFixed(1)}% 0`;
    const fl = Math.exp(-Math.pow((t - 35.25) / 0.25, 2));
    tf(flare, { s: 0.2 + fl * 0.9, rz: drift * 30 }); op(flare, fl);
    chars.forEach((c, i) => { const p = P(t, 35.3 + i * 0.035, 36.1 + i * 0.035, E.outSoft); c.style.transform = `translate3d(0,${((1 - p) * 135).toFixed(1)}%,0)`; });
    const sp = P(t, 35.95, 36.6, E.outSoft); sub.style.opacity = sp; sub.style.letterSpacing = `${lerp(0.6, 0.34, sp).toFixed(3)}em`;
    const mp = P(t, 36.6, 37.3, E.outSoft); meta.style.opacity = mp; tf(meta, { y: (1 - mp) * 16 });
    const fade = P(t, OLD_END - 0.55, OLD_END, E.inOut);
    $('#stage').style.filter = fade > 0 ? `brightness(${(1 - fade).toFixed(3)})` : '';
    drawDust(t, 0.45 * a, 0.05);
    $('#flash').style.opacity = (Math.exp(-Math.pow((t - 34.47) / 0.18, 2)) * 0.9).toFixed(3);
  }, W8);
}

/* ======================================================================
   TIMELINE DRIVER
   ====================================================================== */
function render(t) {
  $('#stage').style.filter = '';
  $('#flash').style.opacity = 0;
  let any = false;
  const local = s => (s.warp ? s.warp[0] + (t - s.warp[2]) * (s.warp[1] - s.warp[0]) / (s.warp[3] - s.warp[2]) : t);
  for (const s of scenes) {
    const lt = local(s);
    s.el.style.display = lt >= s.a && lt < s.b ? 'block' : 'none';
  }
  for (const s of scenes) { const lt = local(s); if (lt >= s.a && lt < s.b) { s.update(lt); any = true; } }
  if (!any) drawDust(t, 0);
  drawGrain(Math.round(t * 30));  // grain refreshes at 30 Hz: organic, and kinder to the encoder
}

async function ready() {
  await document.fonts.ready;
  await Promise.all(['Poppins', 'Arakom'].flatMap(f => [400, 600, 700].map(w => document.fonts.load(`${w} 40px ${f}`, 'Aa ğşı ع'))));
  await Promise.all(Array.from(document.images).map(i => (i.complete ? i.decode().catch(() => {}) : new Promise(r => { i.onload = () => i.decode().then(r, r); i.onerror = r; }))));
}

window.__duration = DURATION;
window.__ready = ready();
window.__seek = async t => {
  render(t);
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  return true;
};

/* live preview when opened directly in a browser: ?t=12.3 or plays in real time */
const q = new URLSearchParams(location.search);
window.__ready.then(() => {
  if (q.has('render')) return;
  if (q.has('t')) { render(parseFloat(q.get('t'))); return; }
  const t0 = performance.now();
  const loop = () => { const t = ((performance.now() - t0) / 1000) % DURATION; render(t); requestAnimationFrame(loop); };
  loop();
});
})();
