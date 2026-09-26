/**
 * extract_mnemonics.cjs
 * ─────────────────────────────────────────────────────
 * استخراج تمام رمزهای طلایی (mnemonic) و نکات کلیدی (key_note / clinical_pearl)
 * از فایل‌های JSON آزمون‌های گذشته در src/data
 *
 * خروجی‌ها (در پوشه Personal_Notes):
 *   1. mnemonics_golden.txt   – فایل متنی ساده و تمیز
 *   2. mnemonics_golden.html  – فلشکارت آفلاین با CSS زیبا
 *
 * اجرا:  node extract_mnemonics.cjs
 */

const fs   = require('fs');
const path = require('path');

// ── مسیرها ──────────────────────────────────────────
const DATA_DIR   = path.join(__dirname, 'src', 'data');
const OUTPUT_DIR = path.join(__dirname, 'Personal_Notes');

// ── نگاشت نام فایل به عنوان فارسی آزمون ──────────
const EXAM_NAME_MAP = {
  'questions-1405-khordad':    'خرداد ۱۴۰۵ (میان‌دوره)',
  'questions-1404-azar':       'آذر ۱۴۰۴ (میان‌دوره)',
  'questions-1404':            'شهریور ۱۴۰۴ (جامع)',
  'questions-1403-esfand':     'اسفند ۱۴۰۳ (جامع)',
  'questions-1403-azar':       'آذر ۱۴۰۳ (میان‌دوره)',
  'questions-1403-shahrivar':  'شهریور ۱۴۰۳ (جامع)',
  'questions-1403-khordad':    'خرداد ۱۴۰۳ (میان‌دوره)',
  'questions-1402-esfand':     'اسفند ۱۴۰۲ (جامع)',
  'questions-1402-shahrivar':  'شهریور ۱۴۰۲ (جامع)',
  'questions-1402-khordad':    'خرداد ۱۴۰۲ (میان‌دوره)',
  'khordad1405_traps_analysis':'خرداد ۱۴۰۵ – تحلیل دام‌ها',
};

// ── رنگ‌ها برای دسته‌بندی مباحث ────────────────────
const CATEGORY_COLORS = {
  'داخلی':        { bg: '#FEF3C7', border: '#F59E0B', text: '#92400E', badge: '#FCD34D' },
  'جراحی':        { bg: '#DBEAFE', border: '#3B82F6', text: '#1E3A5F', badge: '#93C5FD' },
  'زنان':         { bg: '#FCE7F3', border: '#EC4899', text: '#831843', badge: '#F9A8D4' },
  'اطفال':        { bg: '#D1FAE5', border: '#10B981', text: '#065F46', badge: '#6EE7B7' },
  'بهداشت':       { bg: '#E0E7FF', border: '#6366F1', text: '#312E81', badge: '#A5B4FC' },
  'ارتوپدی':      { bg: '#FEE2E2', border: '#EF4444', text: '#7F1D1D', badge: '#FCA5A5' },
  'پوست':         { bg: '#FDE68A', border: '#D97706', text: '#78350F', badge: '#FCD34D' },
  'قلب':          { bg: '#FFE4E6', border: '#F43F5E', text: '#881337', badge: '#FDA4AF' },
  'اعصاب':        { bg: '#CFFAFE', border: '#06B6D4', text: '#164E63', badge: '#67E8F9' },
  'عفونی':        { bg: '#ECFCCB', border: '#84CC16', text: '#365314', badge: '#BEF264' },
  'چشم':          { bg: '#E0F2FE', border: '#0EA5E9', text: '#0C4A6E', badge: '#7DD3FC' },
  'گوش و حلق':    { bg: '#FFF7ED', border: '#F97316', text: '#7C2D12', badge: '#FDBA74' },
  'روانپزشکی':    { bg: '#F3E8FF', border: '#A855F7', text: '#581C87', badge: '#C4B5FD' },
  'رادیولوژی':    { bg: '#F0FDFA', border: '#14B8A6', text: '#134E4A', badge: '#5EEAD4' },
  'پاتولوژی':     { bg: '#FFF1F2', border: '#FB7185', text: '#9F1239', badge: '#FDA4AF' },
  'فارماکولوژی':  { bg: '#FAF5FF', border: '#8B5CF6', text: '#4C1D95', badge: '#C4B5FD' },
  'آناتومی':      { bg: '#F0FDF4', border: '#22C55E', text: '#14532D', badge: '#86EFAC' },
  'فیزیولوژی':    { bg: '#FFFBEB', border: '#EAB308', text: '#713F12', badge: '#FDE047' },
  'ارولوژی':      { bg: '#EFF6FF', border: '#2563EB', text: '#1E3A8A', badge: '#93C5FD' },
};

const DEFAULT_COLOR = { bg: '#F3F4F6', border: '#9CA3AF', text: '#374151', badge: '#D1D5DB' };

function getColor(category) {
  for (const [key, val] of Object.entries(CATEGORY_COLORS)) {
    if (category && category.includes(key)) return val;
  }
  return DEFAULT_COLOR;
}

// ── کشف و خواندن فایل‌ها ────────────────────────────
function discoverJsonFiles() {
  return fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.json'))
    .sort()
    .map(f => ({
      file: f,
      stem: f.replace('.json', ''),
      fullPath: path.join(DATA_DIR, f),
    }));
}

function extractFromFile({ file, stem, fullPath }) {
  const raw = fs.readFileSync(fullPath, 'utf-8');
  let questions;
  try { questions = JSON.parse(raw); } catch { return []; }
  if (!Array.isArray(questions)) return [];

  const examName = EXAM_NAME_MAP[stem] || stem;
  const results = [];

  for (const q of questions) {
    const mnemonic      = q.mnemonic       || '';
    const keyNote       = q.key_note       || '';
    const clinicalPearl = q.clinical_pearl  || '';
    const questionTrap  = q.question_trap   || '';

    if (!mnemonic && !keyNote && !clinicalPearl) continue;

    results.push({
      examName,
      id:       q.id || '?',
      category: q.category || 'نامشخص',
      question: (q.question || '').substring(0, 120),
      mnemonic,
      keyNote,
      clinicalPearl,
      questionTrap,
    });
  }
  return results;
}

// ── تولید فایل متنی (.txt) ──────────────────────────
function generateTxt(allItems) {
  const lines = [];
  lines.push('╔══════════════════════════════════════════════════════════════════╗');
  lines.push('║          📖 مجموعه رمزهای طلایی آزمون‌های پره‌انترنی           ║');
  lines.push('╚══════════════════════════════════════════════════════════════════╝');
  lines.push('');
  lines.push(`   تاریخ استخراج: ${new Date().toLocaleDateString('fa-IR')}`);
  lines.push(`   تعداد کل رمزها: ${allItems.length}`);
  lines.push('');

  // گروه‌بندی بر اساس آزمون
  const grouped = {};
  for (const item of allItems) {
    if (!grouped[item.examName]) grouped[item.examName] = [];
    grouped[item.examName].push(item);
  }

  for (const [examName, items] of Object.entries(grouped)) {
    lines.push('━'.repeat(66));
    lines.push(`  🎓 آزمون: ${examName}  (${items.length} رمز)`);
    lines.push('━'.repeat(66));
    lines.push('');

    // گروه‌بندی فرعی بر اساس مبحث
    const byCat = {};
    for (const it of items) {
      if (!byCat[it.category]) byCat[it.category] = [];
      byCat[it.category].push(it);
    }

    for (const [cat, catItems] of Object.entries(byCat)) {
      lines.push(`    📌 مبحث: ${cat}`);
      lines.push(`    ${'─'.repeat(50)}`);

      for (const it of catItems) {
        lines.push(`    ▸ سوال ${it.id}:`);
        if (it.mnemonic)      lines.push(`      ⚡ رمز طلایی: ${it.mnemonic}`);
        if (it.keyNote)       lines.push(`      📝 نکته کلیدی: ${it.keyNote}`);
        if (it.clinicalPearl) lines.push(`      💎 نکته بالینی: ${it.clinicalPearl}`);
        lines.push('');
      }
    }
    lines.push('');
  }

  lines.push('═'.repeat(66));
  lines.push('  ✅ پایان فایل');
  lines.push('═'.repeat(66));

  return lines.join('\n');
}

// ── تولید فایل HTML با فلشکارت ──────────────────────
function generateHtml(allItems) {
  // گروه‌بندی بر اساس آزمون
  const grouped = {};
  for (const item of allItems) {
    if (!grouped[item.examName]) grouped[item.examName] = [];
    grouped[item.examName].push(item);
  }

  // شمارش بر اساس مبحث
  const categoryCounts = {};
  for (const item of allItems) {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  }

  let cardsHtml = '';
  let examIndex = 0;
  const examNames = Object.keys(grouped);

  for (const [examName, items] of Object.entries(grouped)) {
    // گروه‌بندی بر اساس مبحث
    const byCat = {};
    for (const it of items) {
      if (!byCat[it.category]) byCat[it.category] = [];
      byCat[it.category].push(it);
    }

    cardsHtml += `
      <div class="exam-section" id="exam-${examIndex}">
        <div class="exam-header">
          <h2>🎓 ${examName}</h2>
          <span class="exam-count">${items.length} رمز</span>
        </div>`;

    for (const [cat, catItems] of Object.entries(byCat)) {
      const color = getColor(cat);
      cardsHtml += `
        <div class="category-group">
          <h3 class="category-title" style="color:${color.text};border-right-color:${color.border};">
            📌 ${cat} <span class="cat-count">(${catItems.length})</span>
          </h3>
          <div class="cards-grid">`;

      for (const it of catItems) {
        const mnemonicHtml = it.mnemonic
          ? `<div class="card-mnemonic"><span class="label">⚡ رمز طلایی</span><p>${escHtml(it.mnemonic)}</p></div>`
          : '';
        const keyNoteHtml = it.keyNote
          ? `<div class="card-keynote"><span class="label">📝 نکته کلیدی</span><p>${escHtml(it.keyNote)}</p></div>`
          : '';
        const clinicalHtml = it.clinicalPearl
          ? `<div class="card-clinical"><span class="label">💎 نکته بالینی</span><p>${escHtml(it.clinicalPearl)}</p></div>`
          : '';
        const trapHtml = it.questionTrap
          ? `<div class="card-trap"><span class="label">🪤 دام سوال</span><p>${escHtml(it.questionTrap)}</p></div>`
          : '';

        cardsHtml += `
            <div class="flashcard" style="border-top: 4px solid ${color.border}; background: ${color.bg};">
              <div class="card-top">
                <span class="card-badge" style="background:${color.badge};color:${color.text};">${escHtml(cat)}</span>
                <span class="card-id">#${it.id}</span>
              </div>
              <div class="card-question">${escHtml(it.question)}${it.question.length >= 118 ? '…' : ''}</div>
              ${mnemonicHtml}
              ${keyNoteHtml}
              ${clinicalHtml}
              ${trapHtml}
            </div>`;
      }
      cardsHtml += `
          </div>
        </div>`;
    }
    cardsHtml += `
      </div>`;
    examIndex++;
  }

  // ساخت sidebar
  let sidebarHtml = '';
  examIndex = 0;
  for (const [examName, items] of Object.entries(grouped)) {
    sidebarHtml += `
      <a href="#exam-${examIndex}" class="sidebar-link">${examName} <span>(${items.length})</span></a>`;
    examIndex++;
  }

  // آمار دسته‌بندی
  let statsHtml = '';
  const sortedCats = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);
  for (const [cat, count] of sortedCats) {
    const c = getColor(cat);
    statsHtml += `<span class="stat-chip" style="background:${c.bg};border:1px solid ${c.border};color:${c.text};">${cat}: ${count}</span>`;
  }

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>📖 رمزهای طلایی آزمون‌های پره‌انترنی</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0F172A;
      --surface: #1E293B;
      --surface2: #334155;
      --text: #E2E8F0;
      --text-muted: #94A3B8;
      --accent: #F59E0B;
      --accent2: #3B82F6;
      --radius: 16px;
      --shadow: 0 4px 24px rgba(0,0,0,0.25);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Vazirmatn', 'Tahoma', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.8;
      min-height: 100vh;
    }

    /* ── Sidebar ── */
    .sidebar {
      position: fixed;
      top: 0; right: 0;
      width: 260px;
      height: 100vh;
      background: var(--surface);
      border-left: 1px solid var(--surface2);
      padding: 24px 16px;
      overflow-y: auto;
      z-index: 100;
      transition: transform 0.3s;
    }
    .sidebar h3 {
      font-size: 14px;
      color: var(--accent);
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--surface2);
    }
    .sidebar-link {
      display: block;
      padding: 8px 12px;
      color: var(--text-muted);
      text-decoration: none;
      font-size: 13px;
      border-radius: 8px;
      margin-bottom: 4px;
      transition: all 0.2s;
    }
    .sidebar-link:hover {
      background: var(--surface2);
      color: var(--text);
    }
    .sidebar-link span { float: left; opacity: 0.6; font-size: 12px; }

    /* ── Main ── */
    .main {
      margin-right: 260px;
      padding: 32px 40px;
      max-width: 1200px;
    }

    /* ── Hero ── */
    .hero {
      background: linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #1E293B 100%);
      border: 1px solid var(--surface2);
      border-radius: var(--radius);
      padding: 48px 40px;
      text-align: center;
      margin-bottom: 32px;
    }
    .hero h1 {
      font-size: 32px;
      font-weight: 800;
      background: linear-gradient(135deg, #F59E0B, #EF4444, #EC4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 8px;
    }
    .hero p { color: var(--text-muted); font-size: 15px; }

    .stats-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      margin-top: 20px;
    }
    .stat-chip {
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 12px;
      font-weight: 500;
    }

    /* ── Search ── */
    .search-bar {
      position: sticky; top: 0;
      z-index: 50;
      background: var(--bg);
      padding: 12px 0;
      margin-bottom: 24px;
    }
    .search-bar input {
      width: 100%;
      padding: 14px 20px;
      font-family: inherit;
      font-size: 15px;
      border: 1px solid var(--surface2);
      border-radius: 12px;
      background: var(--surface);
      color: var(--text);
      outline: none;
      transition: border-color 0.2s;
    }
    .search-bar input:focus { border-color: var(--accent); }
    .search-bar input::placeholder { color: var(--text-muted); }

    /* ── Exam Section ── */
    .exam-section { margin-bottom: 48px; }
    .exam-header {
      display: flex; align-items: center; gap: 16px;
      padding-bottom: 12px;
      margin-bottom: 24px;
      border-bottom: 2px solid var(--surface2);
    }
    .exam-header h2 { font-size: 22px; font-weight: 700; color: var(--accent); }
    .exam-count {
      background: var(--accent);
      color: #000;
      padding: 2px 12px;
      border-radius: 99px;
      font-size: 13px;
      font-weight: 600;
    }

    .category-group { margin-bottom: 32px; }
    .category-title {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 16px;
      padding-right: 12px;
      border-right: 4px solid;
    }
    .cat-count { font-weight: 400; font-size: 14px; opacity: 0.7; }

    /* ── Flashcards Grid ── */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 16px;
    }

    .flashcard {
      border-radius: var(--radius);
      padding: 20px;
      box-shadow: var(--shadow);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .flashcard:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 32px rgba(0,0,0,0.35);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .card-badge {
      padding: 2px 10px;
      border-radius: 99px;
      font-size: 12px;
      font-weight: 600;
    }
    .card-id {
      font-size: 12px;
      opacity: 0.5;
      font-weight: 500;
    }

    .card-question {
      font-size: 13px;
      line-height: 1.7;
      color: #475569;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px dashed rgba(0,0,0,0.15);
    }

    .card-mnemonic, .card-keynote, .card-clinical, .card-trap { margin-bottom: 10px; }
    .card-mnemonic .label { color: #D97706; font-weight: 700; font-size: 13px; }
    .card-keynote .label  { color: #2563EB; font-weight: 700; font-size: 13px; }
    .card-clinical .label { color: #7C3AED; font-weight: 700; font-size: 13px; }
    .card-trap .label     { color: #DC2626; font-weight: 700; font-size: 13px; }

    .flashcard p {
      font-size: 14px;
      line-height: 1.9;
      color: #1E293B;
      margin-top: 4px;
    }

    /* ── Footer ── */
    .footer {
      text-align: center;
      padding: 40px;
      color: var(--text-muted);
      font-size: 13px;
      border-top: 1px solid var(--surface2);
      margin-top: 40px;
    }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .sidebar { display: none; }
      .main { margin-right: 0; padding: 16px; }
      .cards-grid { grid-template-columns: 1fr; }
      .hero { padding: 32px 20px; }
      .hero h1 { font-size: 24px; }
    }

    /* ── Print ── */
    @media print {
      .sidebar, .search-bar { display: none; }
      .main { margin: 0; padding: 0; }
      .flashcard { break-inside: avoid; box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body>

  <!-- Sidebar -->
  <nav class="sidebar">
    <h3>📚 فهرست آزمون‌ها</h3>
    ${sidebarHtml}
  </nav>

  <!-- Main Content -->
  <main class="main">
    <div class="hero">
      <h1>📖 مجموعه رمزهای طلایی پره‌انترنی</h1>
      <p>تعداد کل: ${allItems.length} رمز طلایی از ${examNames.length} آزمون</p>
      <p style="margin-top:4px;font-size:13px;opacity:0.6;">استخراج شده در ${new Date().toLocaleDateString('fa-IR')}</p>
      <div class="stats-bar">${statsHtml}</div>
    </div>

    <!-- Search -->
    <div class="search-bar">
      <input type="text" id="searchInput" placeholder="🔍 جستجو در رمزها و نکات... (مثلاً: DKA، هیپوکالمی، استئومالاسی)" />
    </div>

    <div id="cardsContainer">
      ${cardsHtml}
    </div>

    <div class="footer">
      ✅ پایان مجموعه رمزهای طلایی – موفق باشید! 🎯<br>
      ساخته شده با ❤️ برای مطالعه آفلاین
    </div>
  </main>

  <script>
    // جستجوی زنده
    const input = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.flashcard');
    const sections = document.querySelectorAll('.exam-section');
    const catGroups = document.querySelectorAll('.category-group');

    input.addEventListener('input', function() {
      const q = this.value.trim().toLowerCase();
      if (!q) {
        cards.forEach(c => c.style.display = '');
        sections.forEach(s => s.style.display = '');
        catGroups.forEach(g => g.style.display = '');
        return;
      }
      cards.forEach(c => {
        const text = c.textContent.toLowerCase();
        c.style.display = text.includes(q) ? '' : 'none';
      });
      // مخفی کردن گروه‌ها و آزمون‌های خالی
      catGroups.forEach(g => {
        const visible = g.querySelectorAll('.flashcard:not([style*="display: none"])');
        g.style.display = visible.length ? '' : 'none';
      });
      sections.forEach(s => {
        const visible = s.querySelectorAll('.flashcard:not([style*="display: none"])');
        s.style.display = visible.length ? '' : 'none';
      });
    });
  </script>
</body>
</html>`;
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── اجرای اصلی ──────────────────────────────────────
function main() {
  console.log('');
  console.log('⚡ شروع استخراج رمزهای طلایی...');
  console.log('─'.repeat(50));

  // کشف فایل‌ها
  const jsonFiles = discoverJsonFiles();
  console.log(`📁 تعداد ${jsonFiles.length} فایل JSON یافت شد در src/data`);

  // استخراج
  let allItems = [];
  for (const jf of jsonFiles) {
    const items = extractFromFile(jf);
    if (items.length > 0) {
      console.log(`  ✓ ${jf.file}: ${items.length} رمز`);
      allItems = allItems.concat(items);
    } else {
      console.log(`  ⊘ ${jf.file}: بدون رمز (رد شد)`);
    }
  }

  console.log('─'.repeat(50));
  console.log(`📊 مجموع: ${allItems.length} رمز طلایی استخراج شد`);

  // ساخت پوشه خروجی
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // تولید TXT
  const txtContent = generateTxt(allItems);
  const txtPath = path.join(OUTPUT_DIR, 'mnemonics_golden.txt');
  fs.writeFileSync(txtPath, '\uFEFF' + txtContent, 'utf-8'); // BOM برای نمایش صحیح فارسی
  console.log(`📄 فایل متنی ذخیره شد: ${txtPath}`);

  // تولید HTML
  const htmlContent = generateHtml(allItems);
  const htmlPath = path.join(OUTPUT_DIR, 'mnemonics_golden.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
  console.log(`🌐 فایل HTML ذخیره شد: ${htmlPath}`);

  console.log('');
  console.log('✅ استخراج با موفقیت کامل شد!');
  console.log(`📂 پوشه خروجی: ${OUTPUT_DIR}`);
  console.log('');
}

main();
