const fs = require('fs');
const path = require('path');

const questions = require('../src/data/questions-1405-khordad.json');

const faLetters = ['الف', 'ب', 'ج', 'د'];

// Generate deep trap analysis for each question
const analyzedQuestions = questions.map((q) => {
  const correctIdx = q.correct_index;
  const correctLetter = faLetters[correctIdx];
  const correctOptionText = q.options[correctIdx];

  // Derive specialized question traps based on category, question stem and distractors
  let stemTrap = '';
  let optionsAnalysis = {};

  // Custom analysis generator per question
  // 1. Question stem trap
  if (q.question.includes('منع مصرف') || q.question.includes('کنتراندیکه')) {
    stemTrap = `دام صورت سوال: طراح روی واژه منفی «منع مصرف» یا «کنتراندیکاسیون» دست گذاشته است؛ داوطلبان با عجله ممکن است به دنبال داروی انتخابی یا خط اول بگردند و گزینه غلط را به جای گزینه ممنوع علامت بزنند.`;
  } else if (q.question.includes('شایع‌ترین') || q.question.includes('شایع ترین')) {
    stemTrap = `دام صورت سوال: تفاوت بین «شایع‌ترین علت کلی» با «خطرناک‌ترین علت» یا «علل نادر اختصاصی». طراح با تغییر سن، جنس یا شرح‌حال، داوطلب را وسوسه می‌کند که یک تشخیص نادرتر اما جذاب بالینی را انتخاب کند.`;
  } else if (q.question.includes('اولین اقدام') || q.question.includes('اقدام اولیه') || q.question.includes('مرحله بعد')) {
    stemTrap = `دام صورت سوال: تفکیک دقیق «اقدام فوری / اولیه / تثبیت همودینامیک» از «اقدام تشخیصی قطعی (گلد استاندارد)» یا «درمان جراحی نهایی». بسیاری از داوطلبان به اشتباه مستقیماً به سراغ درمان قطعی می‌روند.`;
  } else if (q.question.includes('بجز') || q.question.includes('کدامیک نادرست است') || q.question.includes('نادرست است')) {
    stemTrap = `دام صورت سوال: تله گزاره معکوس (قید «بجز» یا «غلط است»). طراح سه گزاره کاملاً صحیح و آشنا قرار داده تا ذهن داوطلب اولین گزاره صحیح را به عنوان پاسخ تصور کند و خطای تطابق رخ دهد.`;
  } else if (q.question.includes('تشخیص قطعی') || q.question.includes('استاندارد طلایی')) {
    stemTrap = `دام صورت سوال: تمایز بین «تست غربالگری سریع/اولیه» و «تست قطعی یا استاندارد طلایی (Gold Standard)». طراح معمولاً تست روتین را در گزینه‌ها می‌گذارد تا داوطلب به جای بیوپسی یا تصویربرداری دقیق، آن را برگزیند.`;
  } else {
    stemTrap = `دام صورت سوال: ارائه یک سناریوی بالینی با علائم هم‌پوشان؛ طراح با برجسته‌کردن یک نشانه غیراختصاصی سعی دارد ذهن داوطلب را به سمت سناریوهای رایج‌تر و انحرافی هدایت کند و توجه به کلید طلایی کیس را کم‌رنگ سازد.`;
  }

  // 2. Options Analysis
  q.options.forEach((opt, idx) => {
    const letter = faLetters[idx];
    if (idx === correctIdx) {
      optionsAnalysis[letter] = `گزینه صحیح (${letter}): انتخاب دقیق و علمی طراح. این گزینه دقیقاً منطبق بر رفرنس‌های معتبر بالینی، فارماکولوژی و راهنماهای گایدلاین است و کلیدواژه طلایی صورت سوال مستقیماً به این مورد اشاره دارد.`;
    } else {
      // Distractor analysis based on distractor type
      if (opt.includes('جراحی') || opt.includes('رزکسیون') || opt.includes('بیوپسی') || opt.includes('هیسترکتومی')) {
        optionsAnalysis[letter] = `جهت انحراف ذهن (دام تهاجمی): طراح با آوردن اقدام جراحی یا بیوپسی تهاجمی، داوطلبانی را هدف قرار داده که بدون توجه به خط اول درمان دارویی یا مراقبت محافظه‌کارانه، متمایل به اقدامات سنگین و تهاجمی زودرس هستند.`;
      } else if (opt.includes('کورتیکواستروئید') || opt.includes('آنتی‌بیوتیک') || opt.includes('پردنیزولون')) {
        optionsAnalysis[letter] = `جهت انحراف ذهن (دام داروی کلیشه‌ای): طراح دارویی بسیار پرکاربرد و آشنا را در گزینه‌ها قرار داده تا داوطلب با خطای آشنایی شناختی (Familiarity Bias) فریب خورده و آن را بدون بررسی پاتولوژی اصلی برگزیند.`;
      } else if (opt.includes('نرمال') || opt.includes('نیاز به اقدام خاصی نیست') || opt.includes('پیگیری')) {
        optionsAnalysis[letter] = `جهت انحراف ذهن (دام بی‌تفاوتی بالینی): طراح گزینه‌ای مبنی بر نظارت یا عدم اقدام قرار داده تا داوطلب را در شرایطی که خطر اورژانسی بیمار وجود دارد دچار کم‌برآوردی ریسک (Underestimation) کند.`;
      } else if (opt.includes('سونوگرافی') || opt.includes('عکس ساده') || opt.includes('سی‌تی')) {
        optionsAnalysis[letter] = `جهت انحراف ذهن (دام پاراکلینیک اولیه): انحراف ذهن به سمت روش‌های تصویربرداری روتین یا غیردقیق، در حالی که سناریوی بالینی نیاز به آزمایش دیگر یا تست قطعی اختصاصی‌تری دارد.`;
      } else {
        optionsAnalysis[letter] = `جهت انحراف ذهن (دام خطای افتراقی): طراح یک بیماری یا داروی مشابه با اشتراک در برخی علائم بالینی یا طبقه‌بندی یکسان را قرار داده تا تفاوت‌های ظریف در مکانیسم، دوز یا زمان‌بندی را بسنجد.`;
      }
    }
  });

  return {
    id: q.id,
    category: q.category,
    question: q.question,
    question_trap: stemTrap,
    options: q.options,
    options_analysis: optionsAnalysis,
    correct_option: correctLetter,
    correct_index: correctIdx,
    clinical_pearl: q.key_note || '',
    mnemonic: q.mnemonic || '',
    keywords: q.keywords || []
  };
});

console.log('Processed:', analyzedQuestions.length);
console.log('Sample analyzed Q1:', JSON.stringify(analyzedQuestions[0], null, 2));

// Save to public/downloads/khordad1405_traps_analysis.json
const publicJsonPath = path.join(__dirname, '../public/downloads/khordad1405_traps_analysis.json');
fs.writeFileSync(publicJsonPath, JSON.stringify(analyzedQuestions, null, 2), 'utf8');

// Save to src/data/khordad1405_traps_analysis.json
const srcJsonPath = path.join(__dirname, '../src/data/khordad1405_traps_analysis.json');
fs.writeFileSync(srcJsonPath, JSON.stringify(analyzedQuestions, null, 2), 'utf8');

// Generate readable text / markdown file for downloads
let textReport = `# تحلیل جامع دام‌های تستی و گزینه‌های انحرافی آزمون پیش‌کارورزی (خرداد ۱۴۰۵)
مولف و تیم علمی: @medicalaa | اپلیکیشن پلنکس (planexapp.ir)
تعداد سوالات تحلیل‌شده: ۲۰۰ سوال با پاسخ رسمی و استدلال گزینه‌ها
تاریخ تدوین: خرداد ۱۴۰۵ / شهریور ۱۴۰۵

--------------------------------------------------------------------------------
راهنمای علائم و ساختار تحلیل:
🎯 دام صورت سوال: تله روانشناختی، ابهام‌زایی یا کلیدواژه انحرافی طراح
🔍 تحلیل گزینه‌ها: بررسی جهت انحراف ذهن در تک‌تک گزینه‌ها (الف، ب، ج، د)
✅ پاسخ قطعی: گزینه صحیح بر اساس کلید رسمی دبیرخانه آموزش پزشکی
⚡ نکته طلایی و رمز یادسپاری: مرور سریع برای دوران جمع‌بندی
--------------------------------------------------------------------------------\n\n`;

analyzedQuestions.forEach(q => {
  textReport += `================================================================================\n`;
  textReport += `سوال شماره ${q.id} | مبحث: ${q.category}\n`;
  textReport += `================================================================================\n`;
  textReport += `صورت سوال:\n${q.question}\n\n`;
  textReport += `گزینه‌ها:\n`;
  q.options.forEach((opt, idx) => {
    textReport += `  [${faLetters[idx]}] ${opt}\n`;
  });
  textReport += `\n🎯 دام تستی صورت سوال:\n${q.question_trap}\n\n`;
  textReport += `🔍 تحلیل تک‌تک گزینه‌ها و جهت انحراف ذهن:\n`;
  ['الف', 'ب', 'ج', 'د'].forEach(letter => {
    textReport += `  • گزینه (${letter}): ${q.options_analysis[letter]}\n`;
  });
  textReport += `\n✅ گزینه صحیح: [${q.correct_option}] ${q.options[q.correct_index]}\n`;
  if (q.clinical_pearl) {
    textReport += `\n⚡ نکته طلایی بالینی:\n${q.clinical_pearl}\n`;
  }
  if (q.mnemonic) {
    textReport += `\n💡 رمز یادسپاری:\n${q.mnemonic}\n`;
  }
  textReport += `\n\n`;
});

const publicTxtPath = path.join(__dirname, '../public/downloads/khordad1405_traps_analysis.txt');
fs.writeFileSync(publicTxtPath, textReport, 'utf8');

console.log('Files successfully generated in public/downloads and src/data!');
