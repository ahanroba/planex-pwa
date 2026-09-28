const fs = require('fs');
let code = fs.readFileSync('src/main.js', 'utf8');

const sE3 = 'E3. AI Assistant Modal';
const eE3 = '} catch (_) {}';
let iE3 = code.indexOf(sE3);
if(iE3 > -1) {
  let start = code.lastIndexOf('//', iE3);
  let end = code.indexOf(eE3, iE3) + eE3.length;
  code = code.substring(0, start) + code.substring(end);
}

const sGlobal = 'Global Handlers for AI Assistant';
const eGlobal = 'window.triggerAiFlashcardMode = function';
let iG = code.indexOf(sGlobal);
if(iG > -1) {
  let start = code.lastIndexOf('//', iG);
  let end = code.indexOf('};', code.indexOf(eGlobal)) + 2;
  code = code.substring(0, start) + code.substring(end);
}

const s7 = '7. PlanEx AI Floating Chat Widget';
const e7 = '} catch (aiErr) {';
let i7 = code.indexOf(s7);
if(i7 > -1) {
  let start = code.lastIndexOf('//', i7);
  let catchPos = code.indexOf(e7, i7);
  let end = code.indexOf('}', catchPos + e7.length) + 1;
  code = code.substring(0, start) + code.substring(end);
}

const sImport1 = 'import { renderAiChatWidget }';
let idxImport1 = code.indexOf(sImport1);
if(idxImport1 > -1) code = code.replace(/import \{ renderAiChatWidget \}.*\n?/, '');

const sImport2 = 'import { aiService }';
let idxImport2 = code.indexOf(sImport2);
if(idxImport2 > -1) code = code.replace(/import \{ aiService \}.*\n?/, '');

const sRender = '${renderAiChatWidget';
let idxRender = code.indexOf(sRender);
if(idxRender > -1) {
  let startRender = code.lastIndexOf('$', idxRender);
  let endRender = code.indexOf('}', idxRender) + 1;
  code = code.substring(0, startRender) + code.substring(endRender);
}

code = code.replace(/[ \t]*\} else if \(state\.activeModal === 'ai' \|\| state\.activeModal === 'aiModal' \|\| state\.activeModal === 'aiChat'\) \{[\s\S]*?state\.activeModal = null;\n/g, '');

fs.writeFileSync('src/main.js', code, 'utf8');
