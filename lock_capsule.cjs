const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const outputDir = path.join(__dirname, 'Personal_Notes');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

let allCardsHtml = '';
let count = 0;
const stopWords = ['در','با','است','که','و','از','به','این','کدام','یک','برای','میشود','دارد','بیمار','مراجعه','کرده','ساله','سالهای','است؟','چیست؟','میکند','شده','وجود','دارای','آیا','کدامیک','مورد','است.','نموده'];

// ۱. خواندن فایلها
let files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

// ۲. مرتبسازی هوشمند و دقیق بر اساس سال (از جدید به قدیم)
files.sort((a, b) => {
    // استخراج عدد سال از اسم فایل (مثلاً 1405)
    const yearA = a.match(/14\d{2}/) ? parseInt(a.match(/14\d{2}/)[0]) : 0;
    const yearB = b.match(/14\d{2}/) ? parseInt(b.match(/14\d{2}/)[0]) : 0;
    
    // اولویت اول: سال آزمون (۱۴۰۵ بالاتر از ۱۴۰۴ قرار میگیرد)
    if (yearA !== yearB) {
        return yearB - yearA; 
    }
    
    // اولویت دوم: مرتبسازی الفبایی برای قرار گرفتن ماهها و درسهای مشابه در کنار هم
    return a.localeCompare(b);
});

files.forEach(file => {
    try {
        const raw = fs.readFileSync(path.join(dataDir, file), 'utf8');
        const data = JSON.parse(raw);
        
        data.forEach(q => {
            const mnemonic = q.mnemonic || q.key_note;
            // فقط سوالاتی که رمز طلایی دارند وارد کپسول میشوند (حفظ نظم و کیفیت)
            if (mnemonic && q.question) {
                count++;
                
                let correctOpt = 'گزینه صحیح';
                if (q.correct_option && isNaN(q.correct_option)) {
                     correctOpt = q.options ? q.options[q.correct_index || 0] : q.correct_option;
                } else if (q.options && typeof q.correct_index === 'number') {
                     correctOpt = q.options[q.correct_index];
                }

                let keywordsStr = '';
                if (q.keywords && Array.isArray(q.keywords) && q.keywords.length > 0) {
                    keywordsStr = q.keywords.join(' + ');
                } else {
                    let words = q.question.replace(/[.،:؛؟?()]/g, ' ').split(/\s+/);
                    let validWords = words.filter(w => w.length > 2 && !stopWords.includes(w));
                    let topWords = validWords.slice(0, 4);
                    let endWords = validWords.slice(-2);
                    let combined = [...new Set([...topWords, ...endWords])];
                    keywordsStr = combined.join(' + ');
                }

                const fileBadge = file.replace('.json', '').replace('questions-', '');

                allCardsHtml += `
                <div class="card">
                    <div class="badge-num">نکته ${count}</div>
                    <div class="badge">${fileBadge}</div>
                    <div class="q-line">
                        <span class="kw">${keywordsStr}</span>
                        <span class="arrow">➔</span>
                        <span class="ans">${correctOpt}</span>
                    </div>
                    <div class="m-line">
                        <span class="icon">⚡</span> ${mnemonic}
                    </div>
                </div>
                `;
            }
        });
    } catch(e) {
        console.error('Error reading', file, e);
    }
});

const encodedContent = Buffer.from(encodeURIComponent(allCardsHtml)).toString('base64');

const htmlTemplate = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>کپسول VIP پرهانترنی | @medicalaa</title>
    <style>
        :root {
            --bg: #0b1120; --card-bg: rgba(30, 41, 59, 0.6);
            --text: #f8fafc; --success: #34d399; --accent: #fbbf24;
        }
        body {
            margin: 0; padding: 15px 8px 80px 8px;
            background-color: var(--bg); color: var(--text);
            font-family: system-ui, -apple-system, sans-serif;
            user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;
        }
        .watermark-bg {
            position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
            z-index: -1; pointer-events: none; display: flex; flex-wrap: wrap;
            opacity: 0.03; transform: rotate(-35deg); justify-content: center;
            align-content: center; color: #ffffff; font-size: 20px; font-weight: 900;
        }
        .watermark-text { padding: 30px 40px; white-space: nowrap; }
        .container { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; }
        
        .card {
            background: var(--card-bg); border: 1px solid rgba(255,255,255,0.05);
            border-radius: 12px; padding: 22px 12px 12px 12px; position: relative;
        }
        .badge {
            position: absolute; top: 0; right: 0; background: rgba(168, 85, 247, 0.15);
            color: #d8b4fe; font-size: 9px; padding: 2px 8px;
            border-bottom-left-radius: 8px; border-top-right-radius: 10px; font-weight: bold;
        }
        .badge-num {
            position: absolute; top: 0; left: 0; background: rgba(52, 211, 153, 0.15);
            color: #6ee7b7; font-size: 10px; padding: 2px 8px;
            border-bottom-right-radius: 8px; border-top-left-radius: 10px; font-weight: 900;
        }
        .q-line { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; line-height: 1.6; }
        .kw { color: #94a3b8; font-size: 13px; font-weight: 700; word-break: break-word; }
        .arrow { color: #f43f5e; font-weight: 900; font-size: 14px; }
        .ans { color: #064e3b; font-weight: 800; font-size: 13px; background: var(--success); padding: 2px 8px; border-radius: 6px; }
        .m-line { border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 8px; color: #fde68a; font-size: 12.5px; font-weight: 800; line-height: 1.5; }
        
        .branding-bar {
            position: fixed; bottom: 15px; left: 50%; transform: translateX(-50%);
            background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(168, 85, 247, 0.4);
            padding: 8px 20px; border-radius: 30px; font-size: 12px; font-weight: bold;
            color: #e2e8f0; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.6); white-space: nowrap;
        }
        .branding-bar span { color: #38bdf8; }
        @media print { body { display: none !important; } }
    </style>
</head>
<body oncontextmenu="return false;" ondragstart="return false;" ondrop="return false;">
    
    <div class="watermark-bg">
        ${Array(150).fill('<div class="watermark-text">@medicalaa • planexapp.ir</div>').join('')}
    </div>
    
    <div class="container" id="app-content">
        <div style="text-align: center; margin-top: 20vh; color: #94a3b8; font-size: 14px;">در حال بارگذاری و رمزگشایی نکات...</div>
    </div>

    <div class="branding-bar">کپسول فشرده | <span>@medicalaa</span></div>

    <script>
        document.onkeydown = function(e) {
            if(e.keyCode == 123) return false; 
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; 
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; 
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false; 
            if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; 
            if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false; 
            if(e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)) return false; 
        };

        window.onload = function() {
            setTimeout(function() {
                try {
                    const encryptedData = "${encodedContent}";
                    const decoded = decodeURIComponent(atob(encryptedData));
                    document.getElementById('app-content').innerHTML = decoded;
                } catch(err) {
                    document.getElementById('app-content').innerHTML = "<div style='text-align:center;color:#ef4444;margin-top:20vh;'>خطا در بارگذاری محتوای امنیتی.</div>";
                    console.error(err);
                }
            }, 100);
        };
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, 'VIP_Capsule_Locked.html'), htmlTemplate, 'utf8');
console.log('✅ Locked VIP HTML File created successfully (Sorted by Year)!');
