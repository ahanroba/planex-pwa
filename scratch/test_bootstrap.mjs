import { pathToFileURL } from 'url';
import path from 'path';

// Mock Browser Environment
const storage = {
  planex_recent_activity_sessions: JSON.stringify([
    { id: 'sess_1', type: 'study', duration: 25, testCount: 10, category: 'داخلی', dateStr: '1405/06/07' },
    null, // test corrupted item
    { id: 'sess_2', duration: 'invalid' } // test malformed item
  ])
};

global.localStorage = {
  getItem: (k) => storage[k] || null,
  setItem: (k, v) => { storage[k] = String(v); },
  removeItem: (k) => { delete storage[k]; },
  clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

global.window = global;
global.document = {
  getElementById: (id) => ({
    style: {},
    innerHTML: '',
    appendChild: () => {},
    classList: { add: () => {}, remove: () => {} },
    addEventListener: () => {}
  }),
  querySelectorAll: (selector) => [],
  addEventListener: () => {},
  createElement: (tag) => ({
    getContext: () => ({}),
    style: {},
    appendChild: () => {},
    setAttribute: () => {}
  }),
  body: { appendChild: () => {}, classList: { add: () => {}, remove: () => {} }, setAttribute: () => {} },
  documentElement: { classList: { add: () => {}, remove: () => {} }, setAttribute: () => {} },
  location: { href: 'http://localhost:3000/', search: '', pathname: '/' }
};
global.window.document = global.document;
global.window.location = global.document.location;
global.window.addEventListener = () => {};
global.window.removeEventListener = () => {};
global.window.history = { replaceState: () => {} };
global.window.scrollTo = () => {};

try {
  const dbModule = await import(pathToFileURL(path.resolve('src/db.js')).href);
  console.log("✅ db.js loaded successfully");

  const dashboardViewModule = await import(pathToFileURL(path.resolve('src/views/DashboardView.js')).href);
  console.log("✅ DashboardView.js loaded successfully");

  const renderedDashboard = dashboardViewModule.renderDashboardView(0, 'daily');
  console.log("✅ renderDashboardView(0, 'daily') executed successfully, output length:", renderedDashboard.length);

  const focusViewModule = await import(pathToFileURL(path.resolve('src/views/FocusView.js')).href);
  console.log("✅ FocusView.js loaded successfully");

  const renderedFocus = focusViewModule.renderFocusView({});
  console.log("✅ renderFocusView({}) executed successfully, output length:", renderedFocus.length);

  const focusModalModule = await import(pathToFileURL(path.resolve('src/components/FocusModal.js')).href);
  console.log("✅ FocusModal.js loaded successfully");

  const renderedModal = focusModalModule.renderFocusModal({});
  console.log("✅ renderFocusModal({}) executed successfully, output length:", renderedModal.length);

  const mainModule = await import(pathToFileURL(path.resolve('src/main.js')).href);
  console.log("✅ main.js loaded successfully");

  if (typeof global.renderApp === 'function') {
    global.renderApp();
    console.log("✅ global.renderApp() executed successfully without crash!");
  }
} catch (err) {
  console.error("❌ BOOTSTRAP ERROR DETECTED:", err);
}
