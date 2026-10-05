/* ==========================================================================
   Designed illustrations for the civilization opener
   Kudüs · İstanbul · Buhara · Ahmed Yesevi · Kaşgarlı Mahmud
   The library has no artwork for these yet, so they are drawn here as layered
   vector scenes in the library's own palette (dusk gold, amber, parchment, muted
   turquoise tile). Vector → sharp at any resolution (1080p preview and 4K master).
   Each scene is built from layers (.L0 sky … .L4 foreground) so the film can
   parallax them. No people or faces: architecture, landscape and manuscript.
   ========================================================================== */
(() => {
'use strict';
const VW = 1000, VH = 1250;

function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/** shared atmosphere defs, namespaced per illustration */
function defs(id, sky) {
  return `<defs>
    <linearGradient id="${id}-sky" x1="0" y1="0" x2="0" y2="1">${sky.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient>
    <radialGradient id="${id}-sun" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff6d8"/><stop offset="0.18" stop-color="#ffe3a0" stop-opacity=".95"/><stop offset="0.45" stop-color="#f3c46a" stop-opacity=".35"/><stop offset="1" stop-color="#f3c46a" stop-opacity="0"/></radialGradient>
    <linearGradient id="${id}-mist" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6d9a0" stop-opacity="0"/><stop offset=".55" stop-color="#f2cf8e" stop-opacity=".38"/><stop offset="1" stop-color="#e9bd72" stop-opacity="0"/></linearGradient>
    <linearGradient id="${id}-rim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe7ad"/><stop offset="1" stop-color="#c98f3c"/></linearGradient>
    <linearGradient id="${id}-shade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".28"/><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient>
    <linearGradient id="${id}-dome" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a5a1c"/><stop offset=".35" stop-color="#f2c76a"/><stop offset=".55" stop-color="#ffe7a8"/><stop offset="1" stop-color="#9a6420"/></linearGradient>
    <linearGradient id="${id}-teal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1f5159"/><stop offset=".4" stop-color="#3f8e8f"/><stop offset=".6" stop-color="#6bb3aa"/><stop offset="1" stop-color="#1c4a52"/></linearGradient>
    <radialGradient id="${id}-vig" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#140c05" stop-opacity=".55"/></radialGradient>
    <filter id="${id}-soft" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="14"/></filter>
    <filter id="${id}-soft2" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>
    <linearGradient id="${id}-ray" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0c4" stop-opacity=".0"/><stop offset=".25" stop-color="#fff0c4" stop-opacity=".22"/><stop offset="1" stop-color="#fff0c4" stop-opacity="0"/></linearGradient>
  </defs>`;
}
const sky = (id) => `<rect width="${VW}" height="${VH}" fill="url(#${id}-sky)"/>`;
const sun = (id, x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${id}-sun)"/><circle cx="${x}" cy="${y}" r="${r * 0.09}" fill="#fff8e4"/>`;
function rays(id, x, y, n, seed, len = 1300) {
  const r = rng(seed); let s = '';
  for (let i = 0; i < n; i++) { const a = (-70 + r() * 140) * Math.PI / 180, w = 18 + r() * 60; const x2 = x + Math.sin(a) * len, y2 = y + Math.cos(a) * len; s += `<path d="M${x},${y} L${x2 - w},${y2} L${x2 + w},${y2} Z" fill="url(#${id}-ray)" opacity="${(0.35 + r() * 0.5).toFixed(2)}"/>`; }
  return s;
}
function clouds(seed, y0, tone, op, n = 7, id = '') {
  const r = rng(seed); let s = '';
  for (let i = 0; i < n; i++) {
    const cx = r() * VW, cy = y0 + r() * 160, w = 180 + r() * 320, h = 16 + r() * 30;
    s += `<ellipse cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" rx="${w.toFixed(0)}" ry="${h.toFixed(0)}" fill="${tone}" opacity="${(op * (0.5 + r() * 0.5)).toFixed(2)}"/>`;
  }
  return s;
}
function hills(seed, y, amp, color, op = 1, step = 50) {
  const r = rng(seed); let d = `M0,${VH} L0,${y}`;
  for (let x = 0; x <= VW + step; x += step) d += ` Q${x - step / 2},${(y - amp * (0.3 + r())).toFixed(0)} ${x},${(y - amp * r() * 0.6).toFixed(0)}`;
  return `<path d="${d} L${VW},${VH} Z" fill="${color}" opacity="${op}"/>`;
}
function birds(seed, n, x0, y0, spread) {
  const r = rng(seed); let s = '';
  for (let i = 0; i < n; i++) { const x = x0 + (r() - 0.5) * spread, y = y0 + (r() - 0.5) * spread * 0.4, w = 8 + r() * 10; s += `<path d="M${x - w},${y} q${w / 2},${-w * 0.5} ${w},0 q${w / 2},${-w * 0.5} ${w},0" fill="none" stroke="#3a2412" stroke-width="2.2" stroke-linecap="round" opacity=".75"/>`; }
  return s;
}
const minaret = (x, base, top, w, cap = '#3a2412') =>
  `<rect x="${x - w / 2}" y="${top}" width="${w}" height="${base - top}" fill="currentColor"/>` +
  `<rect x="${x - w * 0.9}" y="${top + (base - top) * 0.28}" width="${w * 1.8}" height="7" fill="currentColor"/>` +
  `<rect x="${x - w * 0.8}" y="${top + (base - top) * 0.55}" width="${w * 1.6}" height="6" fill="currentColor"/>` +
  `<path d="M${x - w * 0.62},${top} L${x},${top - w * 4.2} L${x + w * 0.62},${top} Z" fill="currentColor"/>` +
  `<circle cx="${x}" cy="${top - w * 4.4}" r="2.4" fill="#f3c46a"/>`;
const domeShape = (cx, base, r, onion = 0.1) => `M${cx - r},${base} C${cx - r},${base - r * (1 + onion)} ${cx - r * 0.25},${base - r * 1.25} ${cx},${base - r * 1.32} C${cx + r * 0.25},${base - r * 1.25} ${cx + r},${base - r * (1 + onion)} ${cx + r},${base} Z`;
const archWin = (x, y, w, h, fill) => `<path d="M${x},${y + h} L${x},${y + w * 0.5} Q${x},${y} ${x + w / 2},${y - w * 0.15} Q${x + w},${y} ${x + w},${y + w * 0.5} L${x + w},${y + h} Z" fill="${fill}"/>`;
const grain = (id) => `<rect width="${VW}" height="${VH}" fill="url(#${id}-vig)"/>`;

/* ------------------------------ KUDÜS ------------------------------ */
function kudus() {
  const id = 'ill-kds';
  const cyp = (x, y, h) => `<path d="M${x},${y} C${x - h * 0.13},${y - h * 0.45} ${x - h * 0.06},${y - h * 0.85} ${x},${y - h} C${x + h * 0.06},${y - h * 0.85} ${x + h * 0.13},${y - h * 0.45} ${x},${y} Z" fill="#2b1a0c"/>`;
  const olive = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.7}" fill="#3a2715"/><ellipse cx="${x - r * 0.3}" cy="${y - r * 0.25}" rx="${r * 0.6}" ry="${r * 0.42}" fill="#4d3419"/>`;
  let wall = `M0,905 L0,1010 L1000,1010 L1000,905 Z`;
  let cren = ''; for (let x = 0; x < 1000; x += 34) cren += `<rect x="${x}" y="890" width="20" height="18" fill="#3b2616"/>`;
  let facets = '';
  for (let i = 0; i < 5; i++) facets += archWin(352 + i * 62, 760, 34, 70, '#1d3e44');
  return `<svg viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${defs(id, [[0, '#231710'], [0.38, '#6d4322'], [0.62, '#d49a4c'], [0.78, '#f2cf86'], [1, '#e6b566']])}
  <g class="L0">${sky(id)}${sun(id, 640, 560, 420)}<g filter="url(#${id}-soft2)">${rays(id, 640, 520, 9, 3)}</g><g filter="url(#${id}-soft)">${clouds(11, 180, '#f7dca0', 0.25)}</g></g>
  <g class="L1">${hills(21, 820, 60, '#9a6a36', 0.9, 90)}${hills(22, 860, 45, '#7a5028', 1, 70)}<rect y="760" width="${VW}" height="180" fill="url(#${id}-mist)" filter="url(#${id}-soft2)"/></g>
  <g class="L2">
    <rect x="300" y="905" width="400" height="30" fill="#4a3019"/>
    <rect x="330" y="740" width="340" height="170" fill="#8a6a45"/><rect x="330" y="740" width="340" height="170" fill="url(#${id}-shade)"/>
    <rect x="330" y="730" width="340" height="16" fill="#3f8e8f"/><rect x="330" y="742" width="340" height="4" fill="#f3d58a" opacity=".7"/>
    ${facets}
    <rect x="395" y="655" width="210" height="80" fill="#2f6d72"/><rect x="395" y="655" width="210" height="80" fill="url(#${id}-shade)"/>
    ${[0, 1, 2, 3].map(i => archWin(410 + i * 48, 672, 22, 50, '#173338')).join('')}
    <path d="${domeShape(500, 660, 118, 0.12)}" fill="url(#${id}-dome)"/>
    <path d="${domeShape(500, 660, 118, 0.12)}" fill="none" stroke="#fff1c6" stroke-width="2" opacity=".5"/>
    <rect x="497" y="490" width="6" height="30" fill="#f3d58a"/><path d="M492,488 a8,8 0 1,0 16,0 a6,6 0 1,1 -16,0" fill="#f3d58a"/>
  </g>
  <g class="L3"><path d="${wall}" fill="#4a3019"/>${cren}<rect y="905" width="${VW}" height="3" fill="#f0c678" opacity=".55"/>
    ${cyp(130, 915, 230)}${cyp(175, 915, 180)}${cyp(830, 915, 250)}${cyp(880, 915, 170)}${cyp(250, 915, 150)}</g>
  <g class="L4"><path d="M0,1250 L0,1010 Q200,975 420,1015 T1000,995 L1000,1250 Z" fill="#23160b"/>${olive(90, 1040, 90)}${olive(930, 1060, 110)}${olive(700, 1090, 70)}${birds(5, 5, 760, 420, 240)}${grain(id)}</g>
  </svg>`;
}

/* ------------------------------ İSTANBUL ------------------------------ */
function istanbul() {
  const id = 'ill-ist';
  const mosque = (cx, base, r, mins, tint) => {
    let s = `<g style="color:${tint}">`;
    s += `<rect x="${cx - r * 2.2}" y="${base - r * 0.55}" width="${r * 4.4}" height="${r * 0.6}" fill="currentColor"/>`;
    s += `<path d="${domeShape(cx - r * 1.35, base - r * 0.5, r * 0.55, 0.02)}" fill="currentColor"/><path d="${domeShape(cx + r * 1.35, base - r * 0.5, r * 0.55, 0.02)}" fill="currentColor"/>`;
    s += `<path d="${domeShape(cx - r * 0.8, base - r * 0.72, r * 0.62, 0.02)}" fill="currentColor"/><path d="${domeShape(cx + r * 0.8, base - r * 0.72, r * 0.62, 0.02)}" fill="currentColor"/>`;
    s += `<rect x="${cx - r * 0.95}" y="${base - r * 1.15}" width="${r * 1.9}" height="${r * 0.5}" fill="currentColor"/>`;
    s += `<path d="${domeShape(cx, base - r * 1.1, r * 0.95, 0.0)}" fill="currentColor"/><path d="${domeShape(cx, base - r * 1.1, r * 0.95, 0.0)}" fill="none" stroke="#f6cf84" stroke-width="2.5" opacity=".55"/><rect x="${cx - 2}" y="${base - r * 2.45 - 16}" width="4" height="18" fill="currentColor"/>`;
    mins.forEach(([dx, h]) => { s += minaret(cx + dx * r, base - r * 0.2, base - r * h, r * 0.07); });
    return s + '</g>';
  };
  let houses = ''; const r = rng(77);
  for (let x = 0; x < 1000; x += 26 + r() * 18) { const h = 20 + r() * 45; houses += `<rect x="${x.toFixed(0)}" y="${(840 - h).toFixed(0)}" width="${(22 + r() * 16).toFixed(0)}" height="${h.toFixed(0)}" fill="#3e2815"/>`; }
  let refl = ''; const rr = rng(91);
  for (let i = 0; i < 70; i++) { const y = 890 + rr() * 330, x = rr() * 1000, w = 30 + rr() * 140; refl += `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${(1.5 + rr() * 2.5).toFixed(1)}" fill="#ffe4a6" opacity="${(0.15 + rr() * 0.45 * (1 - (y - 890) / 400)).toFixed(2)}"/>`; }
  const boat = (x, y, s) => `<path d="M${x - 40 * s},${y} L${x + 40 * s},${y} L${x + 30 * s},${y + 12 * s} L${x - 30 * s},${y + 12 * s} Z" fill="#24160b"/><path d="M${x},${y - 2} L${x},${y - 70 * s} L${x + 34 * s},${y - 8 * s} Z" fill="#2f1e10"/>`;
  return `<svg viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${defs(id, [[0, '#1d1511'], [0.35, '#5a3a24'], [0.6, '#c98945'], [0.72, '#f0c67c'], [0.74, '#caa36a'], [1, '#6f4a28']])}
  <g class="L0">${sky(id)}${sun(id, 330, 700, 380)}<g filter="url(#${id}-soft2)">${rays(id, 330, 680, 8, 12)}</g><g filter="url(#${id}-soft)">${clouds(31, 230, '#f5d696', 0.22)}</g></g>
  <g class="L1">${hills(41, 830, 40, '#6e4a2a', 0.8, 110)}<g style="color:#5e3d20" opacity=".85">${mosque(250, 830, 70, [[-2.3, 3.2], [2.3, 3.2]], '#5e3d20')}</g></g>
  <g class="L2">${houses}${mosque(620, 845, 125, [[-2.25, 3.6], [2.25, 3.6], [-1.5, 2.9], [1.5, 2.9]], '#3a2513')}
    <rect y="840" width="${VW}" height="4" fill="#f3cf86" opacity=".5"/></g>
  <g class="L3"><rect y="870" width="${VW}" height="380" fill="#6e4a28"/><rect y="870" width="${VW}" height="380" fill="url(#${id}-mist)" opacity=".6"/>${refl}</g>
  <g class="L4">${boat(170, 1010, 1.2)}${boat(820, 1100, 1.6)}${birds(8, 7, 700, 380, 300)}${grain(id)}</g>
  </svg>`;
}

/* ------------------------------ BUHARA ------------------------------ */
function buhara() {
  const id = 'ill-bhr';
  let bands = ''; for (let y = 330; y < 880; y += 26) bands += `<rect x="${442 - (y - 330) * 0.03}" y="${y}" width="${116 + (y - 330) * 0.06}" height="3" fill="#6b4523" opacity=".55"/>`;
  const camel = (x, y, s) => `<path transform="translate(${x},${y}) scale(${s})" d="M0,0 C8,-26 26,-30 34,-18 C40,-34 58,-34 62,-16 L70,-20 C76,-34 88,-40 92,-30 L94,-22 L90,-20 L86,-4 L84,26 L80,26 L78,4 L66,6 L62,26 L58,26 L58,6 L20,6 L16,26 L12,26 L12,4 L4,6 L2,26 L-2,26 L-2,6 Z" fill="#2a1a0c"/>`;
  let dunes = hills(51, 980, 55, '#b9864a', 1, 160) + hills(52, 1040, 50, '#9b6b36', 1, 140);
  return `<svg viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${defs(id, [[0, '#2a1b10'], [0.3, '#7a4a22'], [0.58, '#e0a557'], [0.75, '#f6d895'], [1, '#e7b86a']])}
  <g class="L0">${sky(id)}${sun(id, 740, 640, 440)}<g filter="url(#${id}-soft2)">${rays(id, 740, 600, 10, 21)}</g><g filter="url(#${id}-soft)">${clouds(61, 200, '#f8dfa8', 0.2, 5)}</g></g>
  <g class="L1">${hills(71, 880, 30, '#a06d38', 0.75, 120)}<rect y="780" width="${VW}" height="160" fill="url(#${id}-mist)" filter="url(#${id}-soft2)"/></g>
  <g class="L2">
    <rect x="610" y="700" width="330" height="200" fill="#8a5c30"/><rect x="610" y="700" width="330" height="200" fill="url(#${id}-shade)"/>
    ${archWin(705, 740, 120, 160, '#3b2413')}<rect x="700" y="700" width="130" height="12" fill="#3f8e8f"/>
    <path d="${domeShape(880, 705, 70, 0.18)}" fill="url(#${id}-teal)"/>${[0, 1, 2, 3, 4].map(i => `<path d="M${838 + i * 21},705 Q${848 + i * 17},640 880,612" fill="none" stroke="#bfe2d6" stroke-width="1.4" opacity=".35"/>`).join('')}
    <rect x="80" y="760" width="240" height="140" fill="#7e5329"/>${archWin(150, 790, 100, 110, '#3b2413')}
    <path d="${domeShape(200, 765, 64, 0.2)}" fill="url(#${id}-teal)"/>
    <path d="M430,880 L442,330 L558,330 L570,880 Z" fill="#a4733d"/><path d="M430,880 L442,330 L558,330 L570,880 Z" fill="url(#${id}-shade)"/>${bands}
    <rect x="432" y="250" width="136" height="82" fill="#9c6b37"/>${[0, 1, 2, 3, 4].map(i => archWin(440 + i * 25, 268, 16, 44, '#3b2413')).join('')}
    <rect x="426" y="238" width="148" height="14" fill="#7a4f28"/><path d="M438,238 Q500,205 562,238 Z" fill="#8e6031"/>
    <rect x="430" y="880" width="140" height="6" fill="#f3cf86" opacity=".6"/>
  </g>
  <g class="L3">${dunes}</g>
  <g class="L4">${[0, 1, 2, 3, 4].map(i => camel(120 + i * 150, 1062 - i * 6, 1.05 - i * 0.06)).join('')}<path d="M0,1250 L0,1110 Q300,1080 600,1115 T1000,1100 L1000,1250 Z" fill="#6e4722"/>${grain(id)}</g>
  </svg>`;
}

/* ------------------------------ AHMED YESEVİ (Türkistan) ------------------------------ */
function yesevi() {
  const id = 'ill-ysv';
  let bricks = ''; const r = rng(101);
  for (let y = 420; y < 950; y += 18) for (let x = 250 + (y / 18 % 2) * 12; x < 520; x += 24) if (r() < 0.25) bricks += `<rect x="${x}" y="${y}" width="20" height="3" fill="#6a4520" opacity=".35"/>`;
  let ribs = ''; for (let i = -5; i <= 5; i++) ribs += `<path d="M${705 + i * 22},640 Q${705 + i * 14},560 705,520" fill="none" stroke="#123b40" stroke-width="3" opacity=".45"/>`;
  let grass = ''; const g = rng(131);
  for (let i = 0; i < 160; i++) { const x = g() * 1000, y = 1040 + g() * 210, h = 10 + g() * 28; grass += `<path d="M${x.toFixed(0)},${y.toFixed(0)} q${(g() * 6 - 3).toFixed(1)},${-h / 2} ${(g() * 8 - 4).toFixed(1)},${-h}" stroke="#3b2812" stroke-width="2" fill="none" opacity=".7"/>`; }
  return `<svg viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${defs(id, [[0, '#1e1813'], [0.35, '#5b4028'], [0.62, '#cf9a55'], [0.8, '#f1d08e'], [1, '#d7a661']])}
  <g class="L0">${sky(id)}${sun(id, 180, 620, 380)}<g filter="url(#${id}-soft2)">${rays(id, 180, 600, 8, 41)}</g><g filter="url(#${id}-soft)">${clouds(141, 190, '#f5d9a0', 0.3, 9)}</g></g>
  <g class="L1">${hills(151, 900, 26, '#8b643a', 0.8, 150)}<rect y="820" width="${VW}" height="150" fill="url(#${id}-mist)" filter="url(#${id}-soft2)"/></g>
  <g class="L2">
    <rect x="520" y="650" width="400" height="300" fill="#b48652"/><rect x="520" y="650" width="400" height="300" fill="url(#${id}-shade)"/>
    ${[0, 1, 2, 3].map(i => archWin(560 + i * 88, 760, 46, 110, '#4a2e15')).join('')}
    <rect x="620" y="610" width="170" height="44" fill="#a37644"/>
    <path d="${domeShape(705, 640, 112, 0.25)}" fill="url(#${id}-teal)"/>${ribs}<path d="${domeShape(705, 640, 112, 0.25)}" fill="none" stroke="#d9f0e6" stroke-width="2" opacity=".35"/>
    <path d="${domeShape(860, 655, 48, 0.2)}" fill="#9b7446"/>
    <rect x="250" y="380" width="270" height="570" fill="#c1935c"/><rect x="250" y="380" width="270" height="570" fill="url(#${id}-shade)"/>${bricks}
    <path d="M300,950 L300,560 Q300,470 385,440 Q470,470 470,560 L470,950 Z" fill="#5a3818"/><path d="M322,950 L322,580 Q322,500 385,475 Q448,500 448,580 L448,950 Z" fill="#3c230e"/>
    <rect x="232" y="400" width="30" height="550" rx="14" fill="#b68855"/><rect x="508" y="400" width="30" height="550" rx="14" fill="#a47847"/>
    <rect x="250" y="380" width="270" height="10" fill="#f0cc86" opacity=".6"/>
  </g>
  <g class="L3"><path d="M0,1250 L0,960 Q250,940 500,965 T1000,950 L1000,1250 Z" fill="#7a5630"/></g>
  <g class="L4"><path d="M0,1250 L0,1040 Q250,1020 520,1050 T1000,1035 L1000,1250 Z" fill="#4a3219"/>${grass}${birds(3, 6, 800, 330, 260)}${grain(id)}</g>
  </svg>`;
}

/* ------------------------------ KAŞGARLI MAHMUD ------------------------------
   Inspired by the round world map in Dîvânu Lugâti't-Türk: a circle ringed by the
   world ocean, mountain chains drawn in red, rivers and lakes in blue, the Turkic
   lands at the centre. Rendered as a manuscript folio — no legible script. */
function kasgarli() {
  const id = 'ill-ksg';
  const r = rng(211);
  let mountains = '';
  const chain = (cx, cy, n, dx, dy, s) => { let out = ''; for (let i = 0; i < n; i++) { const x = cx + dx * i + (r() - 0.5) * 8, y = cy + dy * i + (r() - 0.5) * 8; out += `<path d="M${x - 11 * s},${y + 9 * s} L${x},${y - 12 * s} L${x + 11 * s},${y + 9 * s} Z" fill="#a8412c" opacity=".85"/>`; } return out; };
  mountains += chain(400, 520, 9, 22, 6, 1) + chain(560, 690, 8, -20, 10, 0.9) + chain(640, 470, 6, 14, 18, 0.9) + chain(360, 740, 7, 26, -4, 0.8);
  const river = (d) => `<path d="${d}" fill="none" stroke="#3f7f8a" stroke-width="5" stroke-linecap="round" opacity=".85"/>`;
  let strokes = '';
  for (let i = 0; i < 26; i++) { const a = r() * Math.PI * 2, rad = 120 + r() * 230, x = 500 + Math.cos(a) * rad, y = 620 + Math.sin(a) * rad; strokes += `<path d="M${x.toFixed(0)},${y.toFixed(0)} q${(8 + r() * 10).toFixed(0)},${(-6 - r() * 6).toFixed(0)} ${(18 + r() * 16).toFixed(0)},0 m6,-4 q4,-6 8,0" fill="none" stroke="#3a2412" stroke-width="2" opacity=".55"/>`; }
  let border = ''; for (let i = 0; i < 64; i++) { const a = i / 64 * Math.PI * 2; border += `<circle cx="${(500 + Math.cos(a) * 425).toFixed(1)}" cy="${(620 + Math.sin(a) * 425).toFixed(1)}" r="4" fill="#b8893e"/>`; }
  return `<svg viewBox="0 0 ${VW} ${VH}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${defs(id, [[0, '#e9d5aa'], [0.5, '#e2c893'], [1, '#caa66c']])}
    <defs><radialGradient id="${id}-page" cx=".5" cy=".45" r=".8"><stop offset="0" stop-color="#f4e6c3"/><stop offset=".7" stop-color="#e3c98f"/><stop offset="1" stop-color="#b98c4c"/></radialGradient>
    <radialGradient id="${id}-sea" cx=".5" cy=".5" r=".5"><stop offset=".78" stop-color="#6f9c93"/><stop offset=".9" stop-color="#3f7470"/><stop offset="1" stop-color="#2d5552"/></radialGradient></defs>
  <g class="L0"><rect width="${VW}" height="${VH}" fill="url(#${id}-page)"/>
    <rect x="46" y="46" width="908" height="1158" fill="none" stroke="#8a5a22" stroke-width="3"/><rect x="62" y="62" width="876" height="1126" fill="none" stroke="#b8893e" stroke-width="1.5"/>
    ${[0, 1, 2, 3].map(i => `<path d="M${[62, 938][i % 2]},${[62, 1188][i >> 1]} m${i % 2 ? -70 : 0},0 q35,${i >> 1 ? -35 : 35} 70,0" fill="none" stroke="#b8893e" stroke-width="2"/>`).join('')}</g>
  <g class="L2"><circle cx="500" cy="620" r="410" fill="url(#${id}-sea)"/>${border}
    <circle cx="500" cy="620" r="352" fill="#ecdcb4"/><circle cx="500" cy="620" r="352" fill="none" stroke="#7a5a2a" stroke-width="2.5"/>
    ${river('M330,420 C380,500 420,560 470,600 S560,690 620,760')}${river('M700,430 C660,520 610,560 590,620')}${river('M300,700 C360,690 410,720 450,760')}
    <ellipse cx="560" cy="600" rx="44" ry="22" fill="#5f9690" opacity=".9"/><ellipse cx="400" cy="640" rx="26" ry="14" fill="#5f9690" opacity=".9"/>
    ${mountains}${strokes}
    <circle cx="500" cy="620" r="12" fill="#a8412c"/><circle cx="500" cy="620" r="22" fill="none" stroke="#a8412c" stroke-width="2"/></g>
  <g class="L4"><rect width="${VW}" height="${VH}" fill="url(#${id}-vig)" opacity=".7"/></g>
  </svg>`;
}

window.ILLUSTRATIONS = { kudus, istanbul, buhara, yesevi, kasgarli };
})();
