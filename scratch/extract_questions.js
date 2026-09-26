const fs = require('fs');
const raw = fs.readFileSync('raw_khordad1405.txt', 'utf8').replace(/\r\n/g, '\n');

// Parse official key
const keySection = raw.substring(raw.indexOf('--- KEY ---'));
const keyMatches = [...keySection.matchAll(/(\d+):\s*([الف|ب|ج|د])/g)];
const keyMap = {};
keyMatches.forEach(m => keyMap[parseInt(m[1])] = m[2]);

// Categories list
const categories = [
  'داخلی', 'جراحی', 'بیماریهای کودکان', 'کودکان', 'اطفال', 'زنان', 'زنان و زایمان',
  'مغز و اعصاب', 'روانپزشکی', 'بیماری های پوست', 'پوست', 'پاتولوژی',
  'جراحی استخوان و مفاصل', 'ارتوپدی', 'رادیولوژی', 'جراحی عمومی',
  'بیماریهای قلب و عروق', 'قلب و عروق', 'جراحی کلیه و مجاری ادراری تناسلی', 'اورولوژی',
  'چشم پزشکی', 'چشم', 'گوش و حلق و بینی', 'اخلاق پزشکی',
  'آمار و اپیدمیولوژی بیماریهای شایع در ایران', 'آمار و اپیدمیولوژی', 'فارماکولوژی',
  'ایمنی شناسی بالینی', 'ایمنی شناسی', 'ایمنی‌شناسی', 'ژنتیک پزشکی', 'فیزیک پزشکی', 'تغذیه پزشکی', 'تغذیه'
];

console.log('Key count:', Object.keys(keyMap).length);
