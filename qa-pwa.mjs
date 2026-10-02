#!/usr/bin/env node
/**
 * Planex PWA: dynamic QA run (Playwright)
 *
 * Setup (once):   npm i -D playwright && npx playwright install chromium
 * Run:            BASE_URL=http://localhost:5173 node qa-pwa.mjs
 * Options:        HEADED=1             watch the browser
 *                 NAV_SELECTOR="..."   force the bottom-nav element if auto-detect misses
 *                 TIMER_SELECTOR="..." force the timer display element
 *                 SKIP_LONG=1          skip the full-session (fake clock) test
 * Output:         ./qa-report/report.json + screenshots, and a summary block printed at the end
 */
import { chromium, devices } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const OUT = path.resolve('qa-report');
const NAV_SELECTOR = process.env.NAV_SELECTOR || null;
const TIMER_SELECTOR = process.env.TIMER_SELECTOR || null;
const SKIP_LONG = !!process.env.SKIP_LONG;

// English + Persian labels. Leading guard instead of \b so Persian text works.
const LABELS = {
  pomodoroTab: /pomodoro|timer|focus|پومودورو|تایمر|تمرکز/i,
  start: /(^|[^a-z])(start|resume|play|begin)|▶|شروع|ادامه/i,
  pause: /(^|[^a-z])(pause|stop)|⏸|توقف|مکث/i,
  reset: /(^|[^a-z])(reset|restart)|↺|⟲|⟳|🔄|بازنشانی|ریست|از ?نو/i,
};

const VIEWPORTS = [
  { name: 'iPhone-SE-320', device: devices['iPhone SE'] },
  { name: 'iPhone-12-390', device: devices['iPhone 12'] },
  { name: 'iPhone-12-landscape', device: devices['iPhone 12 landscape'] },
  { name: 'Pixel-7-412', device: devices['Pixel 7'] || devices['Pixel 5'] },
  { name: 'iPad-Mini-768', device: devices['iPad Mini'] },
  { name: 'Desktop-1440', device: { viewport: { width: 1440, height: 900 } } },
].filter(v => v.device);
const TIMER_VIEWPORTS = ['iPhone-12-390', 'Desktop-1440'];

const results = { baseURL: BASE_URL, startedAt: new Date().toISOString(), issues: [], console: [], network: [], timer: [], tabs: [], pwa: {} };
const state = { viewport: '-', step: 'init' };
const firstLine = e => String(e?.message || e).split('\n')[0];
const slug = s => String(s).replace(/[^\w؀-ۿ-]+/g, '_').slice(0, 30) || 'x';

function issue(severity, area, message, details) {
  results.issues.push({ severity, area, viewport: state.viewport, step: state.step, message, ...(details?.length ? { details } : {}) });
  console.log(`  [${severity}] ${area}: ${message}`);
}

/* ---------------- in-page helpers (injected before every page load) ---------------- */
const QA_HELPERS = () => {
  // spy on notifications + audio so we can tell if the session end is announced
  window.__qaEvents = [];
  try {
    const N = window.Notification;
    if (N) {
      const W = function (t, o) { window.__qaEvents.push('notification:' + t); return new N(t, o); };
      Object.defineProperty(W, 'permission', { get: () => N.permission });
      W.requestPermission = (...a) => N.requestPermission(...a);
      W.prototype = N.prototype;
      window.Notification = W;
    }
    if (window.ServiceWorkerRegistration) {
      const sn = ServiceWorkerRegistration.prototype.showNotification;
      ServiceWorkerRegistration.prototype.showNotification = function (t, o) { window.__qaEvents.push('sw-notification:' + t); return sn.call(this, t, o); };
    }
    const play = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function () {
      window.__qaEvents.push('audio:' + (this.currentSrc || this.src || 'inline'));
      const p = play.call(this); p?.catch?.(e => window.__qaEvents.push('audio-failed:' + e.name)); return p;
    };
  } catch (_) {}

  const desc = el => {
    if (!el || !el.tagName) return String(el);
    let s = el.tagName.toLowerCase();
    if (el.id) s += '#' + el.id;
    const cls = (el.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean).slice(0, 3);
    if (cls.length) s += '.' + cls.join('.');
    const t = ((el.innerText ?? el.textContent) || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 30);
    return t ? `${s} "${t}"` : s;
  };
  const visible = el => {
    const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && +cs.opacity > 0.01;
  };
  const inFixed = el => { for (let e = el; e && e !== document.body; e = e.parentElement) { const p = getComputedStyle(e).position; if (p === 'fixed' || p === 'sticky') return true; } return false; };
  const ITEM_SEL = 'a,button,[role="tab"],[role="link"],[role="button"],[onclick],[data-tab],[data-page],[data-target],[data-view]';
  const labelOf = el => ((el.innerText ?? '') || el.getAttribute('aria-label') || el.title || el.dataset?.tab || el.dataset?.page || el.dataset?.view || el.getAttribute('href') || '').trim().replace(/\s+/g, ' ');
  const normDigits = s => s.replace(/[۰-۹]/g, d => d.charCodeAt(0) - 1776).replace(/[٠-٩]/g, d => d.charCodeAt(0) - 1632);

  window.__qa = {
    findNav(override) {
      document.querySelectorAll('[data-qa-nav]').forEach(e => e.removeAttribute('data-qa-nav'));
      document.querySelectorAll('[data-qa-item]').forEach(e => e.removeAttribute('data-qa-item'));
      const vh = innerHeight, vw = innerWidth;
      const pool = override ? [...document.querySelectorAll(override)] : [...document.querySelectorAll('body *')];
      let best = null, bs = -1;
      for (const el of pool) {
        if (!visible(el)) continue;
        const cs = getComputedStyle(el), r = el.getBoundingClientRect();
        if (!override) {
          if (['fixed', 'sticky'].includes(cs.position)) continue;
          if (r.width < vw * 0.5 || r.bottom < vh - 6 || r.height > vh * 0.3) continue;
        }
        const n = el.querySelectorAll(ITEM_SEL).length;
        if (n < 2) continue;
        const s = n + (el.tagName === 'NAV' ? 5 : 0) + (el.getAttribute('role') === 'tablist' ? 5 : 0);
        if (s > bs) { bs = s; best = el; }
      }
      if (!best) return null;
      best.setAttribute('data-qa-nav', '');
      const all = [...best.querySelectorAll(ITEM_SEL)].filter(visible);
      const items = all.filter(e => !all.some(o => o !== e && o.contains(e)));
      items.forEach((e, i) => e.setAttribute('data-qa-item', i));
      const r = best.getBoundingClientRect();
      return {
        desc: desc(best), rect: { top: r.top, bottom: r.bottom, height: r.height, width: r.width },
        items: items.map((e, i) => { const ir = e.getBoundingClientRect(); return { i, label: labelOf(e), w: Math.round(ir.width), h: Math.round(ir.height) }; }),
      };
    },
    activeIndex() {
      return [...document.querySelectorAll('[data-qa-nav] [data-qa-item]')].map((e, i) => {
        const cur = e.getAttribute('aria-current');
        const on = e.getAttribute('aria-selected') === 'true' || (cur && cur !== 'false')
          || /(^|\s)(is-)?(active|selected|current)(\s|$)/i.test(e.getAttribute('class') || '')
          || /(^|\s)(is-)?(active|selected|current)(\s|$)/i.test(e.parentElement?.getAttribute('class') || '');
        return on ? i : -1;
      }).filter(i => i >= 0);
    },
    contentSig() {
      const nav = document.querySelector('[data-qa-nav]');
      let t = document.body.innerText; if (nav) t = t.replace(nav.innerText, '');
      let h = 0; for (const c of t) h = (h * 31 + c.charCodeAt(0)) | 0;
      return h + ':' + t.length;
    },
    layout(isMobile) {
      const out = [];
      const de = document.documentElement, vw = de.clientWidth, vh = innerHeight;
      if (de.scrollWidth > vw + 1 || document.body.scrollWidth > vw + 1) {
        const off = [...document.querySelectorAll('body *')]
          .filter(e => { if (!visible(e)) return false; const r = e.getBoundingClientRect(); return r.right > vw + 1 || r.left < -1; })
          .filter((e, _, arr) => !arr.some(o => o !== e && e.contains(o))).slice(0, 6).map(desc);
        out.push({ sev: 'HIGH', msg: `Page scrolls sideways (scrollWidth ${Math.max(de.scrollWidth, document.body.scrollWidth)}px > viewport ${vw}px)`, details: off });
      }
      const nav = document.querySelector('[data-qa-nav]');
      const inter = [...document.querySelectorAll('a,button,input,select,textarea,[role="button"],[role="tab"]')].filter(visible);
      const seen = new Set(); const small = [];
      for (const el of inter) {
        const r = el.getBoundingClientRect();
        if (r.bottom <= 0 || r.top >= vh || r.right <= 0 || r.left >= vw) continue;
        if (getComputedStyle(el).pointerEvents === 'none') continue;
        const cx = Math.min(Math.max(r.left + r.width / 2, 1), vw - 1), cy = Math.min(Math.max(r.top + r.height / 2, 1), vh - 1);
        const top = document.elementFromPoint(cx, cy);
        if (top && top !== el && !el.contains(top) && !top.contains(el) && !(nav && nav.contains(top) && !nav.contains(el))) {
          const key = desc(el) + '|' + desc(top);
          if (!seen.has(key)) { seen.add(key); out.push({ sev: inFixed(top) && !inFixed(el) ? 'MEDIUM' : 'HIGH', msg: `${desc(el)} is covered by ${desc(top)} (taps hit the wrong element)` }); }
        }
        if (isMobile && el.matches('button,[role="button"],[role="tab"]') && (r.width < 40 || r.height < 40)) small.push(`${desc(el)} ${Math.round(r.width)}x${Math.round(r.height)}`);
      }
      if (small.length) out.push({ sev: 'LOW', msg: `${small.length} button(s) smaller than 40px tap target`, details: small.slice(0, 8) });
      const clipped = [...document.querySelectorAll('body *')].filter(e => {
        if (!visible(e) || [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return false;
        const cs = getComputedStyle(e); if (cs.display === 'inline') return false;
        return e.scrollWidth > e.clientWidth + 1 && cs.overflowX === 'hidden' && cs.textOverflow !== 'ellipsis';
      }).slice(0, 6).map(desc);
      if (clipped.length) out.push({ sev: 'LOW', msg: 'Text is clipped (overflow hidden, no ellipsis)', details: clipped });
      const bad = [...new Set(document.body.innerText.match(/\b(NaN|undefined|null|Infinity)\b|\[object Object\]/g) || [])];
      if (bad.length) out.push({ sev: 'MEDIUM', msg: `Broken values rendered on screen: ${bad.join(', ')}` });
      const imgs = [...document.images].filter(i => i.complete && i.naturalWidth === 0 && visible(i)).map(i => i.currentSrc || i.src);
      if (imgs.length) out.push({ sev: 'MEDIUM', msg: 'Broken images', details: imgs.slice(0, 6) });
      return out;
    },
    async bottomClearance() {
      const nav = document.querySelector('[data-qa-nav]'); if (!nav) return null;
      const scrollers = [document.scrollingElement, ...[...document.querySelectorAll('body *')].filter(e => /(auto|scroll)/.test(getComputedStyle(e).overflowY) && e.scrollHeight > e.clientHeight + 2)];
      scrollers.forEach(s => { if (s) s.scrollTop = s.scrollHeight; });
      await new Promise(r => setTimeout(r, 400));
      const navTop = nav.getBoundingClientRect().top;
      let worst = null;
      for (const e of document.querySelectorAll('body *')) {
        if (nav.contains(e) || e.children.length || !visible(e) || inFixed(e)) continue;
        if (!((e.innerText ?? '').trim()) && !/^(img|input|button|svg|canvas|textarea|select)$/i.test(e.tagName)) continue;
        const r = e.getBoundingClientRect();
        if (r.top < innerHeight && r.bottom > navTop + 2 && (!worst || r.bottom > worst.bottom)) worst = { el: desc(e), bottom: Math.round(r.bottom), navTop: Math.round(navTop) };
      }
      scrollers.forEach(s => { if (s) s.scrollTop = 0; });
      return worst;
    },
    findTimer(override) {
      document.querySelectorAll('[data-qa-timer]').forEach(e => e.removeAttribute('data-qa-timer'));
      let c = override ? [...document.querySelectorAll(override)].filter(visible)
        : [...document.querySelectorAll('body *')].filter(e => visible(e) && /^\s*\d{1,2}\s*:\s*\d{2}(\s*:\s*\d{2})?\s*$/.test(normDigits((e.innerText ?? e.textContent) || '')));
      if (!override) c = c.filter(e => !c.some(o => o !== e && e.contains(o)));
      if (!c.length) return null;
      c.sort((a, b) => parseFloat(getComputedStyle(b).fontSize) - parseFloat(getComputedStyle(a).fontSize));
      c[0].setAttribute('data-qa-timer', '');
      return desc(c[0]);
    },
    readTimer() {
      const e = document.querySelector('[data-qa-timer]'); if (!e || !e.isConnected) return null;
      const raw = normDigits(((e.innerText ?? e.textContent) || '')).replace(/\s/g, '');
      const m = raw.match(/(-?)(\d{1,2}):(\d{2})(?::(\d{2}))?/);
      if (!m) return { raw, secs: null };
      const secs = m[4] ? +m[2] * 3600 + +m[3] * 60 + +m[4] : +m[2] * 60 + +m[3];
      return { raw, secs: m[1] ? -secs : secs };
    },
    findControl(src, flags) {
      const re = new RegExp(src, flags);
      document.querySelectorAll('[data-qa-ctl]').forEach(e => e.removeAttribute('data-qa-ctl'));
      const nav = document.querySelector('[data-qa-nav]');
      const els = [...document.querySelectorAll('button,[role="button"],a,input[type="button"],input[type="submit"],[onclick]')].filter(e => visible(e) && !(nav && nav.contains(e)));
      const hit = els.find(e => re.test(labelOf(e)) || re.test(e.value || '') || re.test(e.getAttribute('aria-label') || '') || re.test(e.title || ''))
        || els.find(e => re.test(e.id || '') || re.test(e.getAttribute('class') || '') || re.test(e.dataset?.action || ''));
      if (!hit) return null;
      hit.setAttribute('data-qa-ctl', '');
      return { desc: desc(hit), label: labelOf(hit) };
    },
  };
};

/* ---------------- node-side helpers ---------------- */
function monitor(page) {
  page.on('console', m => {
    const t = m.type();
    if (t !== 'error' && t !== 'warning') return;
    const loc = m.location();
    results.console.push({ type: t, text: m.text(), at: loc?.url ? `${loc.url}:${loc.lineNumber}:${loc.columnNumber}` : '', viewport: state.viewport, step: state.step });
  });
  page.on('pageerror', e => results.console.push({ type: 'uncaught', text: e.message, stack: (e.stack || '').split('\n').slice(0, 4).join(' | '), viewport: state.viewport, step: state.step }));
  page.on('requestfailed', r => {
    const f = r.failure()?.errorText || '';
    if (state.step === 'pwa:offline' || f.includes('ERR_ABORTED')) return;
    results.network.push({ kind: 'failed', url: r.url(), error: f, viewport: state.viewport, step: state.step });
  });
  page.on('response', r => { if (r.status() >= 400) results.network.push({ kind: 'http', status: r.status(), url: r.url(), viewport: state.viewport, step: state.step }); });
  page.on('dialog', async d => { results.console.push({ type: 'dialog', text: `${d.type()}: ${d.message()}`, viewport: state.viewport, step: state.step }); await d.accept().catch(() => {}); });
}

async function gotoApp(page) {
  try { await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 15000 }); }
  catch { await page.goto(BASE_URL, { waitUntil: 'load', timeout: 20000 }); issue('LOW', 'perf', 'Network never went idle within 15s (polling or a hanging request)'); }
}
const getNav = page => page.evaluate(o => window.__qa.findNav(o), NAV_SELECTOR);
async function clickNavItem(page, i, fake = false) {
  await getNav(page);
  if (fake) return page.evaluate(i => document.querySelector(`[data-qa-nav] [data-qa-item="${i}"]`)?.click(), i);
  await page.locator(`[data-qa-nav] [data-qa-item="${i}"]`).first().click({ timeout: 3000 });
}
async function clickCtl(page, key, fake = false) {
  const found = await page.evaluate(([s, f]) => window.__qa.findControl(s, f), [LABELS[key].source, LABELS[key].flags]);
  if (!found) return null;
  try {
    if (fake) await page.evaluate(() => document.querySelector('[data-qa-ctl]').click());
    else await page.locator('[data-qa-ctl]').first().click({ timeout: 3000 });
  } catch (e) { issue('HIGH', 'pomodoro', `Could not click ${key} control ${found.desc}: ${firstLine(e)}`); }
  return found;
}
async function readTimer(page) {
  let r = await page.evaluate(() => window.__qa.readTimer());
  if (!r || r.secs == null) { await page.evaluate(o => window.__qa.findTimer(o), TIMER_SELECTOR); r = await page.evaluate(() => window.__qa.readTimer()); }
  return r || { raw: null, secs: null };
}
async function openTimer(page, wait) {
  const nav = await getNav(page);
  let tab = nav?.items.find(x => LABELS.pomodoroTab.test(x.label)) || null;
  const find = () => page.evaluate(o => window.__qa.findTimer(o), TIMER_SELECTOR);
  const fake = wait.fake;
  if (tab) { await clickNavItem(page, tab.i, fake).catch(() => {}); await wait(600); }
  let timer = await find();
  if (!timer && nav) for (const it of nav.items) {
    await clickNavItem(page, it.i, fake).catch(() => {}); await wait(500);
    timer = await find(); if (timer) { tab = it; break; }
  }
  return { nav, tab, timer };
}
const tlog = (name, data) => { results.timer.push({ viewport: state.viewport, name, ...data }); console.log(`  timer ${name}: ${JSON.stringify(data)}`); };

async function auditLayout(page, vp, isMobile, label) {
  for (const f of await page.evaluate(m => window.__qa.layout(m), isMobile)) issue(f.sev, 'layout', `[${label}] ${f.msg}`, f.details);
  const c = await page.evaluate(() => window.__qa.bottomClearance());
  if (c) issue('HIGH', 'layout', `[${label}] Content hidden behind bottom nav: ${c.el} ends at y=${c.bottom}px, nav starts at y=${c.navTop}px`);
  await page.screenshot({ path: path.join(OUT, `${vp}__${slug(label)}.png`) }).catch(() => {});
}

/* ---------------- test suites ---------------- */
async function testTabs(page, vp, isMobile) {
  state.step = 'tabs:detect';
  const nav = await getNav(page);
  if (!nav) {
    issue(isMobile ? 'HIGH' : 'INFO', 'bottom-nav', 'No fixed bottom navigation found' + (isMobile ? ' (set NAV_SELECTOR if it exists)' : ' (may be intended on desktop)'));
    return auditLayout(page, vp, isMobile, 'home');
  }
  results.tabs.push({ viewport: vp, nav: nav.desc, items: nav.items.map(x => x.label) });
  console.log(`  nav: ${nav.desc} -> [${nav.items.map(x => x.label || '(no label)').join(' | ')}]`);
  const vh = page.viewportSize().height;
  if (nav.rect.bottom > vh + 1) issue('MEDIUM', 'bottom-nav', `Bottom nav sticks out below the screen (bottom ${Math.round(nav.rect.bottom)}px > ${vh}px)`);
  for (const it of nav.items) {
    if (!it.label) issue('MEDIUM', 'a11y', `Bottom tab #${it.i} has no text or aria-label`);
    if (isMobile && (it.w < 44 || it.h < 44)) issue('LOW', 'bottom-nav', `Tab "${it.label}" tap target is ${it.w}x${it.h}px (< 44px)`);
  }
  const origin = new URL(BASE_URL).origin;
  for (const it of nav.items) {
    const label = it.label || `tab${it.i}`;
    state.step = `tab:${label}`;
    const errBefore = results.console.length;
    const snap = () => page.evaluate(() => ({ sig: window.__qa.contentSig(), url: location.href, active: window.__qa.activeIndex() }));
    const before = await snap();
    try { await clickNavItem(page, it.i); }
    catch (e) { issue('HIGH', 'bottom-nav', `Tab "${label}" not clickable: ${firstLine(e)}`); continue; }
    await page.waitForTimeout(700);
    if (!page.url().startsWith(origin)) { issue('MEDIUM', 'bottom-nav', `Tab "${label}" leaves the app (${page.url()})`); await page.goBack().catch(() => gotoApp(page)); continue; }
    await getNav(page);
    const after = await snap();
    if (!before.active.includes(it.i) && after.sig === before.sig && after.url === before.url) issue('HIGH', 'bottom-nav', `Clicking tab "${label}" changed nothing (same content, same URL)`);
    if (!after.active.length) issue('LOW', 'bottom-nav', `No tab shows an active state after clicking "${label}"`);
    else if (!after.active.includes(it.i)) issue('MEDIUM', 'bottom-nav', `After clicking "${label}" the highlighted tab is #${after.active.join(',')} instead of #${it.i}`);
    if (after.active.length > 1) issue('MEDIUM', 'bottom-nav', `${after.active.length} tabs highlighted at once after clicking "${label}"`);
    const n = results.console.length - errBefore;
    if (n) issue('HIGH', 'console', `${n} console error/warning(s) when opening tab "${label}"`);
    await auditLayout(page, vp, isMobile, label);
  }
  // browser back after tab hopping should not crash or blank the app
  state.step = 'tabs:back-button';
  const errBefore = results.console.length;
  await page.goBack({ timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(600);
  if (!page.url().startsWith(origin)) { issue('MEDIUM', 'bottom-nav', 'Browser Back after tab navigation exits the app (tabs not in history)'); await gotoApp(page); }
  else if (!(await getNav(page))) issue('MEDIUM', 'bottom-nav', 'Bottom nav disappears after pressing browser Back');
  if (results.console.length > errBefore) issue('HIGH', 'console', 'Console errors after browser Back');
}

async function testPomodoro(page) {
  state.step = 'pomodoro:open';
  const wait = ms => page.waitForTimeout(ms);
  const { nav, tab, timer } = await openTimer(page, wait);
  if (!timer) return issue('HIGH', 'pomodoro', 'No MM:SS timer display found on any tab. Re-run with TIMER_SELECTOR="...".');
  console.log(`  timer element: ${timer}`);
  const t0 = await readTimer(page); tlog('initial', t0);

  state.step = 'pomodoro:start';
  if (!(await clickCtl(page, 'start'))) return issue('HIGH', 'pomodoro', 'No Start/Play button found (checked text, aria-label, title, id, class)');
  let a = await readTimer(page); await wait(4000); let b = await readTimer(page);
  const d1 = a.secs - b.secs; tlog('start +4s', { from: a.raw, to: b.raw, delta: d1 });
  if (d1 === 0) issue('HIGH', 'pomodoro', 'Timer does not count down after pressing Start');
  else if (d1 < 0) issue('MEDIUM', 'pomodoro', `Timer counts UP (${a.raw} -> ${b.raw}), expected countdown`);
  else if (d1 >= 6) issue('HIGH', 'pomodoro', `Timer too fast: ${d1}s elapsed in 4s (stacked setInterval?)`);
  else if (d1 <= 2) issue('MEDIUM', 'pomodoro', `Timer too slow: ${d1}s elapsed in 4s`);

  state.step = 'pomodoro:pause';
  if (!(await clickCtl(page, 'pause'))) issue('MEDIUM', 'pomodoro', 'No Pause/Stop button found while running');
  else {
    await wait(300); a = await readTimer(page); await wait(3000); b = await readTimer(page);
    tlog('paused +3s', { from: a.raw, to: b.raw });
    if (a.secs !== b.secs) issue('HIGH', 'pomodoro', `Timer keeps running after Pause (${a.raw} -> ${b.raw})`);
    state.step = 'pomodoro:resume';
    if (!(await clickCtl(page, 'start'))) issue('MEDIUM', 'pomodoro', 'No Resume/Start button after pausing');
    else {
      const c = await readTimer(page); await wait(3000); const d = await readTimer(page);
      tlog('resume +3s', { from: c.raw, to: d.raw });
      if (c.secs === d.secs) issue('HIGH', 'pomodoro', 'Timer does not resume after Pause -> Start');
      if (b.secs - c.secs > 2) issue('MEDIUM', 'pomodoro', `Resume jumped time: paused at ${b.raw}, resumed at ${c.raw}`);
      if (c.secs - d.secs >= 5) issue('HIGH', 'pomodoro', `After resume timer runs ~${((c.secs - d.secs) / 3).toFixed(1)}x speed (interval not cleared on pause)`);
    }
  }

  state.step = 'pomodoro:tab-switch';
  if (nav && tab && nav.items.length > 1) {
    const other = nav.items.find(x => x.i !== tab.i);
    a = await readTimer(page);
    await clickNavItem(page, other.i).catch(() => {}); await wait(3000);
    await clickNavItem(page, tab.i).catch(() => {}); await wait(400);
    await page.evaluate(o => window.__qa.findTimer(o), TIMER_SELECTOR);
    b = await readTimer(page);
    tlog('switch away 3s and back', { from: a.raw, to: b.raw });
    if (b.secs == null) issue('HIGH', 'pomodoro', 'Timer display missing after switching tabs and back');
    else if (b.secs === t0.secs && a.secs !== t0.secs) issue('HIGH', 'pomodoro', 'Timer reset to initial value after switching tabs');
    else if (a.secs === b.secs) issue('MEDIUM', 'pomodoro', 'Timer froze while on another tab');
    else if (a.secs - b.secs >= 6) issue('HIGH', 'pomodoro', `Timer jumped ${a.secs - b.secs}s in ~3.4s after tab switch (duplicate intervals on re-render)`);
    const c = await readTimer(page); await wait(3000); const d = await readTimer(page);
    tlog('after return +3s', { from: c.raw, to: d.raw });
    if (c.secs - d.secs >= 5) issue('HIGH', 'pomodoro', `After returning to timer tab it runs ~${((c.secs - d.secs) / 3).toFixed(1)}x speed (duplicate intervals)`);
  }

  state.step = 'pomodoro:reset';
  if (!(await clickCtl(page, 'reset'))) issue('LOW', 'pomodoro', 'No Reset button found');
  else {
    await wait(400); a = await readTimer(page); await wait(2500); b = await readTimer(page);
    tlog('after reset', { value: a.raw, after2_5s: b.raw, initial: t0.raw });
    if (a.secs !== t0.secs) issue('MEDIUM', 'pomodoro', `Reset shows ${a.raw}, expected ${t0.raw}`);
    if (a.secs !== b.secs) issue('HIGH', 'pomodoro', 'Timer keeps running after Reset (interval not cleared)');
  }

  state.step = 'pomodoro:rapid-start';
  let clicks = 0;
  for (let k = 0; k < 3; k++) { // only re-clicks if a Start button is still visible (non-toggle UIs)
    const f = await page.evaluate(([s, fl]) => window.__qa.findControl(s, fl), [LABELS.start.source, LABELS.start.flags]);
    if (!f) break;
    await page.locator('[data-qa-ctl]').first().click({ timeout: 1500 }).then(() => clicks++).catch(() => {});
  }
  a = await readTimer(page); await wait(3000); b = await readTimer(page);
  tlog('rapid start then +3s', { clicks, from: a.raw, to: b.raw, delta: a.secs - b.secs });
  if (a.secs - b.secs >= 5) issue('HIGH', 'pomodoro', `Clicking Start ${clicks}x makes the timer run ~${((a.secs - b.secs) / 3).toFixed(1)}x fast (no guard against multiple intervals)`);
  await clickCtl(page, 'pause');

  state.step = 'pomodoro:reload';
  a = await readTimer(page);
  await page.reload({ waitUntil: 'load' }); await wait(800);
  await openTimer(page, wait); b = await readTimer(page);
  tlog('after reload (info)', { before: a.raw, after: b.raw, persisted: a.secs === b.secs });
}

async function testCompletion(browser) {
  state.viewport = 'iPhone-12 (fake clock)'; state.step = 'pomodoro:full-session';
  console.log(`\n▶ ${state.viewport}`);
  const ctx = await browser.newContext({ ...devices['iPhone 12'], permissions: ['notifications'], serviceWorkers: 'block' });
  await ctx.addInitScript(QA_HELPERS);
  const page = await ctx.newPage(); monitor(page);
  try {
    if (!page.clock) return issue('INFO', 'runner', 'Playwright < 1.45, skipped full-session test (npm i -D playwright@latest)');
    await page.clock.install();
    await page.goto(BASE_URL, { waitUntil: 'load' });
    const wait = ms => page.clock.runFor(ms); wait.fake = true;
    await wait(1500);
    const { timer } = await openTimer(page, wait);
    if (!timer) return;
    const t0 = await readTimer(page);
    if (!(await clickCtl(page, 'start', true))) return;
    const errBefore = results.console.length;
    await wait((t0.secs + 2) * 1000);
    const end = await readTimer(page);
    await wait(10000);
    const later = await readTimer(page);
    const events = await page.evaluate(() => window.__qaEvents);
    tlog('full session (fake clock)', { start: t0.raw, atEnd: end.raw, plus10s: later.raw, events });
    if (end.secs == null || end.secs < 0 || /-|NaN/.test(end.raw || '')) issue('HIGH', 'pomodoro', `Timer shows "${end.raw}" after the session ends (negative/NaN, not stopping at 00:00)`);
    if (later.secs < 0 || /-|NaN/.test(later.raw || '')) issue('HIGH', 'pomodoro', `Timer goes past zero: "${later.raw}" 10s after the session ended`);
    if (!events.length) issue('LOW', 'pomodoro', 'No sound or notification fired when the session ended');
    if (events.some(e => e.startsWith('audio-failed'))) issue('MEDIUM', 'pomodoro', 'End-of-session sound failed to play', events);
    if (results.console.length > errBefore) issue('HIGH', 'console', 'Console errors during/after session completion');
    await page.screenshot({ path: path.join(OUT, 'session-complete.png') }).catch(() => {});
  } catch (e) { issue('HIGH', 'runner', `Full-session test crashed: ${firstLine(e)}`); }
  finally { await ctx.close(); }
}

async function testPWA(browser) {
  state.viewport = 'Pixel-7 (PWA)'; state.step = 'pwa:manifest';
  console.log(`\n▶ ${state.viewport}`);
  const ctx = await browser.newContext({ ...(devices['Pixel 7'] || devices['Pixel 5']) });
  await ctx.addInitScript(QA_HELPERS);
  const page = await ctx.newPage(); monitor(page);
  try {
    await gotoApp(page);
    const info = await page.evaluate(async () => {
      const link = document.querySelector('link[rel="manifest"]');
      let manifest = null, manifestErr = null;
      if (link) { try { const r = await fetch(link.href); manifest = await r.json(); } catch (e) { manifestErr = e.message; } }
      let sw = null;
      if ('serviceWorker' in navigator) sw = await Promise.race([navigator.serviceWorker.ready.then(r => ({ scope: r.scope, state: r.active?.state })), new Promise(r => setTimeout(() => r(null), 6000))]);
      return { manifestHref: link?.href || null, manifest, manifestErr, viewportMeta: document.querySelector('meta[name="viewport"]')?.content || null,
        themeColor: document.querySelector('meta[name="theme-color"]')?.content || null, appleTouchIcon: !!document.querySelector('link[rel="apple-touch-icon"]'),
        sw, dir: document.documentElement.dir || getComputedStyle(document.body).direction, lang: document.documentElement.lang || null };
    });
    results.pwa = info;
    if (!info.manifestHref) issue('HIGH', 'pwa', 'No <link rel="manifest"> (app is not installable)');
    else if (!info.manifest) issue('HIGH', 'pwa', `Manifest fails to load/parse: ${info.manifestErr}`);
    else {
      const m = info.manifest;
      for (const k of ['name', 'short_name', 'start_url', 'display', 'icons']) if (!m[k]) issue('MEDIUM', 'pwa', `Manifest missing "${k}"`);
      const sizes = (m.icons || []).flatMap(i => (i.sizes || '').split(/\s+/));
      for (const s of ['192x192', '512x512']) if (!sizes.includes(s)) issue('MEDIUM', 'pwa', `Manifest has no ${s} icon`);
      if (!(m.icons || []).some(i => (i.purpose || '').includes('maskable'))) issue('LOW', 'pwa', 'No maskable icon (Android will letterbox it)');
      for (const ic of m.icons || []) {
        const url = new URL(ic.src, info.manifestHref).href;
        const res = await page.request.get(url).catch(() => null);
        if (!res || !res.ok()) issue('HIGH', 'pwa', `Manifest icon 404/unreachable: ${url}`);
      }
    }
    if (!info.viewportMeta) issue('HIGH', 'responsive', 'No <meta name="viewport"> (mobile renders zoomed out)');
    else {
      if (!/width=device-width/.test(info.viewportMeta)) issue('HIGH', 'responsive', `Viewport meta lacks width=device-width: "${info.viewportMeta}"`);
      if (/user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/.test(info.viewportMeta)) issue('LOW', 'a11y', 'Viewport meta blocks pinch-zoom');
      if (!/viewport-fit\s*=\s*cover/.test(info.viewportMeta)) issue('INFO', 'responsive', 'No viewport-fit=cover; env(safe-area-inset-bottom) will be 0 so the bottom nav can sit under the iPhone home bar');
    }
    if (!info.themeColor) issue('LOW', 'pwa', 'No <meta name="theme-color">');
    if (!info.appleTouchIcon) issue('LOW', 'pwa', 'No apple-touch-icon (iOS home screen icon will be a screenshot)');
    if (!info.sw) issue('HIGH', 'pwa', 'No active service worker within 6s (no offline support)');
    else {
      await page.reload({ waitUntil: 'load' }); await page.waitForTimeout(800); // let SW take control
      state.step = 'pwa:offline';
      await ctx.setOffline(true);
      try {
        await page.reload({ waitUntil: 'load', timeout: 10000 });
        const ok = await page.evaluate(() => (document.body?.innerText || '').trim().length > 0);
        if (!ok) issue('HIGH', 'pwa', 'App renders blank when offline');
        await page.screenshot({ path: path.join(OUT, 'offline.png') }).catch(() => {});
      } catch (e) { issue('HIGH', 'pwa', `App does not load offline: ${firstLine(e)}`); }
      await ctx.setOffline(false);
    }
  } catch (e) { issue('HIGH', 'runner', `PWA test crashed: ${firstLine(e)}`); }
  finally { await ctx.close(); }
}

/* ---------------- main ---------------- */
(async () => {
  await fs.rm(OUT, { recursive: true, force: true }); await fs.mkdir(OUT, { recursive: true });
  try { await fetch(BASE_URL); } catch { console.error(`✖ Can't reach ${BASE_URL}. Start your server first (or set BASE_URL).`); process.exit(2); }
  const launchOptions = { headless: !process.env.HEADED };
  if (process.env.EXECUTABLE_PATH) {
    launchOptions.executablePath = process.env.EXECUTABLE_PATH;
  } else {
    try {
      const checkB = await chromium.launch({ headless: true });
      await checkB.close();
    } catch {
      if (await fs.stat('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe').then(() => true).catch(() => false)) {
        launchOptions.executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
      } else if (await fs.stat('C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe').then(() => true).catch(() => false)) {
        launchOptions.executablePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
      }
    }
  }
  const browser = await chromium.launch(launchOptions);

  for (const v of VIEWPORTS) {
    state.viewport = v.name; state.step = 'load';
    console.log(`\n▶ ${v.name}`);
    // SW blocked here so a stale cache can't mask fresh code; PWA suite runs with it enabled
    const ctx = await browser.newContext({ ...v.device, serviceWorkers: 'block' });
    await ctx.addInitScript(QA_HELPERS);
    const page = await ctx.newPage(); monitor(page);
    const isMobile = !!v.device.isMobile;
    try {
      const t = Date.now(); await gotoApp(page); console.log(`  loaded in ${Date.now() - t}ms`);
      await page.waitForTimeout(500);
      if (results.console.length) issue('HIGH', 'console', 'Console errors/warnings on initial load');
      await testTabs(page, v.name, isMobile);
      if (TIMER_VIEWPORTS.includes(v.name)) { await gotoApp(page); await testPomodoro(page); }
    } catch (e) { issue('HIGH', 'runner', `Test crashed: ${firstLine(e)}`); }
    await ctx.close();
  }
  if (!SKIP_LONG) await testCompletion(browser);
  await testPWA(browser);
  await browser.close();

  // ---- summarize ----
  const rank = { HIGH: 0, MEDIUM: 1, LOW: 2, INFO: 3 };
  const groupBy = (arr, keyFn, base) => { const m = new Map(); for (const x of arr) { const k = keyFn(x); if (!m.has(k)) m.set(k, { ...base(x), count: 0, viewports: new Set(), steps: new Set() }); const g = m.get(k); g.count++; g.viewports.add(x.viewport); g.steps.add(x.step); } return [...m.values()].map(g => ({ ...g, viewports: [...g.viewports], steps: [...g.steps].slice(0, 5) })); };
  const issues = groupBy(results.issues, i => `${i.severity}|${i.area}|${i.message}`, i => ({ sev: i.severity, area: i.area, msg: i.message, details: i.details })).sort((a, b) => rank[a.sev] - rank[b.sev]);
  const consoleU = groupBy(results.console, c => `${c.type}|${c.text}`, c => ({ type: c.type, text: c.text.slice(0, 400), at: c.at, stack: c.stack }));
  const networkU = groupBy(results.network, n => `${n.kind}|${n.status || n.error}|${n.url}`, n => ({ kind: n.kind, status: n.status, error: n.error, url: n.url }));
  const counts = Object.fromEntries(Object.keys(rank).map(k => [k, issues.filter(i => i.sev === k).length]));
  const pwa = { ...results.pwa, manifest: results.pwa.manifest ? { name: results.pwa.manifest.name, short_name: results.pwa.manifest.short_name, start_url: results.pwa.manifest.start_url, display: results.pwa.manifest.display, icons: (results.pwa.manifest.icons || []).map(i => `${i.src} ${i.sizes || ''} ${i.purpose || ''}`.trim()) } : null };
  const summary = { baseURL: BASE_URL, counts, issues, console: consoleU.slice(0, 40), network: networkU.slice(0, 30), tabs: results.tabs, timer: results.timer, pwa };
  await fs.writeFile(path.join(OUT, 'report.json'), JSON.stringify({ summary, raw: results }, null, 2));
  console.log('\n==================== QA SUMMARY: paste everything below back to Brain ====================');
  console.log(JSON.stringify(summary, null, 1));
  console.log('==================== END QA SUMMARY ====================');
  console.log(`Screenshots + full report: ${OUT}`);
  process.exit(counts.HIGH ? 1 : 0);
})();
