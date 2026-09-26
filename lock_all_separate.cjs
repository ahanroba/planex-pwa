const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const outputDir = path.join(__dirname, 'Personal_Notes');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// لیست کلمات اضافه
const stopWords = ['در','با','است','که','و','از','به','این','کدام','یک','برای','میشود','دارد','بیمار','مراجعه','کرده','ساله','سالهای','است؟','چیست؟','میکند','شده','وجود','دارای','آیا','کدامیک','مورد','است.','نموده','یا','تا','بر','روی'];

// گرفتن تمام فایلهای جیسون (بدون محدودیت سال)
const allFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

allFiles.forEach(file => {
    try {
        const raw = fs.readFileSync(path.join(dataDir, file), 'utf8');
        const data = JSON.parse(raw);
        
        let allCardsHtml = '';
        let count = 0;
        
        // تمیز کردن اسم فایل برای نمایش در هدر
        const fileBadge = file.replace('.json', '').replace('questions-', '');
        
        data.forEach(q => {
            if (q.question) {
                count++;
                const mnemonic = q.mnemonic || q.key_note || 'بدون رمز (مرور سریع)';
                
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
                    // نگه داشتن تمام کلمات کلیدی ارزشمند بدون قیچی کردن وسط جمله
                    let validWords = words.filter(w => w.length > 2 && !stopWords.includes(w));
                    keywordsStr = validWords.join(' + ');
                }

                allCardsHtml += `
                <div class="card">
                    <div class="badge-num">تست ${count}</div>
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

        const encodedContent = Buffer.from(encodeURIComponent(allCardsHtml)).toString('base64');
        
        const htmlTemplate = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>کپسول VIP | ${fileBadge} | @medicalaa</title>
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
        
        .header-title {
            text-align: center; color: #38bdf8; font-weight: 900; margin-bottom: 15px;
            font-size: 18px; border-bottom: 1px dashed rgba(56, 189, 248, 0.3); padding-bottom: 10px;
        }

        .card {
            background: var(--card-bg); border: 1px solid rgba(255,255,255,0.05);
            border-radius: 12px; padding: 22px 12px 12px 12px; position: relative;
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
    
    <div class="container">
        <div class="header-title">🔥 مرور رعدآسای ${fileBadge}</div>
        <div id="app-content">
            <div style="text-align: center; margin-top: 20vh; color: #94a3b8; font-size: 14px;">در حال آمادهسازی کپسول...</div>
        </div>
    </div>

    <div class="branding-bar">آزمون ${fileBadge} | <span>@medicalaa</span></div>

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
                    document.getElementById('app-content').innerHTML = "<div style='text-align:center;color:#ef4444;margin-top:20vh;'>خطا در بارگذاری.</div>";
                }
            }, 50);
        };
    </script>
</body>
</html>`;

        const outputFileName = `VIP_Single_${fileBadge}_Locked.html`;
        fs.writeFileSync(path.join(outputDir, outputFileName), htmlTemplate, 'utf8');
        console.log(`✅ کپسول مجزا ساخته شد: ${outputFileName} (شامل ${count} تست)`);

    } catch(e) {
        console.error('Error processing file:', file, e);
    }
});

console.log('🎉 تمامی فایلهای دیتابیس به صورت جداگانه با متن کامل استخراج شدند!');
