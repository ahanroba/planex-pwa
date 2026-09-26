const fs = require('fs');

const raw = fs.readFileSync('raw_khordad1405.txt', 'utf8').replace(/\r\n/g, '\n');

// 1. Parse official key
const keySection = raw.substring(raw.indexOf('--- KEY ---'));
const keyMatches = [...keySection.matchAll(/(\d+):\s*([الف|ب|ج|د])/g)];
const keyMap = {};
keyMatches.forEach(m => keyMap[parseInt(m[1])] = m[2]);

console.log('Total keys:', Object.keys(keyMap).length);
