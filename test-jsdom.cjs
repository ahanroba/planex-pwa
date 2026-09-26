const fs = require('fs');
const { JSDOM } = require('jsdom');
const jsCode = fs.readFileSync('dist/assets/index-BE6uRmAE.js', 'utf8');
const htmlCode = fs.readFileSync('dist/index.html', 'utf8');

const { window } = new JSDOM(htmlCode, { runScripts: 'dangerously' });

window.console = Object.assign(window.console, {
  log: (...args) => console.log('LOG:', ...args),
  error: (...args) => console.log('ERROR:', ...args),
  warn: (...args) => console.log('WARN:', ...args),
});

window.addEventListener('error', (event) => {
  console.log('UNCAUGHT EXCEPTION:', event.error);
});

try {
  window.eval(jsCode);
} catch (e) {
  console.log('EVAL ERROR:', e);
}

setTimeout(() => {
  console.log('Test completed.');
  process.exit(0);
}, 2000);
