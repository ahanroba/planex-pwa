const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'Personal_Notes');
const inputFile = path.join(outputDir, 'mnemonics_golden.html');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

try {
    let rawContent = fs.readFileSync(inputFile, 'utf8');
    
    // ۱. پاکسازی استایلهای زشت و قدیمی از فایل خام
    rawContent = rawContent.replace(/background-color:[^;]+;/g, '');
    rawContent = rawContent.replace(/color:\s*#[0-9a-fA-F]{3,6};/g, '');
    rawContent = rawContent.replace(/background:\s*#[0-9a-fA-F]{3,6};/g, '');
    // تبدیل کلاسهای قدیمی به ساختار جدید
    rawContent = rawContent.replace(/class="card"/g, 'class="vip-card"');

    // ۲. استخراج فقط محتوای داخل بادی (برای جلوگیری از تداخل هد)
    const bodyMatch = rawContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if(bodyMatch && bodyMatch[1]) {
        rawContent = bodyMatch[1];
    }

    // ۳. رمزنگاری محتوای تمیز شده
    const encodedContent = Buffer.from(encodeURIComponent(rawContent)).toString('base64');

    const htmlTemplate = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>گنجینه رمزهای طلایی VIP | @medicalaa</title>
    <style>
        :root {
            --bg: #0b1120; 
            --card-bg: rgba(30, 41, 59, 0.7);
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --primary: #38bdf8;
            --success: #34d399;
            --accent: #fbbf24;
            --danger: #f43f5e;
        }
        body {
            margin: 0; padding: 15px 8px 80px 8px;
            background-color: var(--bg); color: var(--text-main);
            font-family: system-ui, -apple-system, sans-serif;
            user-select: none; -webkit-user-select: none;
            line-height: 1.7;
        }
        
        /* واترمارک امنیتی */
        .watermark-bg {
            position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
            z-index: -1; pointer-events: none; display: flex; flex-wrap: wrap;
            opacity: 0.035; transform: rotate(-35deg); justify-content: center;
            align-content: center; color: #ffffff; font-size: 22px; font-weight: 900;
        }
        .watermark-text { padding: 30px 40px; white-space: nowrap; }
        
        .container { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; }
        
        /* تزریق استایلهای سوپر VIP به المانهای فایل خام */
        #app-content h1, #app-content h2, #app-content h3 {
            color: var(--primary); text-align: center; border-bottom: 1px dashed rgba(255,255,255,0.1);
            padding-bottom: 10px; margin-top: 20px;
        }
        
        /* استایل دکمههای بالای صفحه (فیلترها) */
        #app-content button, #app-content .chip, #app-content .btn {
            background: rgba(15, 23, 42, 0.8) !important; 
            border: 1px solid rgba(56, 189, 248, 0.3) !important;
            color: #bae6fd !important; padding: 6px 12px !important;
            border-radius: 20px !important; margin: 4px !important; font-family: inherit;
        }
        
        /* استایل کارتهای رمز (vip-card) */
        #app-content .vip-card, #app-content div[style*="border"], #app-content .card-body {
            background: var(--card-bg) !important;
            border: 1px solid rgba(255,255,255,0.08) !important;
            border-radius: 14px !important; padding: 20px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
            color: #e2e8f0 !important; backdrop-filter: blur(10px) !important;
            margin-bottom: 15px; position: relative;
        }

        /* برجسته کردن متنهای مهم (مانند رمز طلایی و تلهها) */
        #app-content b, #app-content strong { color: var(--accent); }
        #app-content i, #app-content em { color: var(--success); font-style: normal; font-weight: bold;}
        
        /* استایل نوار جستجو */
        #app-content input[type="text"] {
            width: 100%; padding: 12px; border-radius: 10px;
            background: rgba(0,0,0,0.3) !important; border: 1px solid rgba(255,255,255,0.1) !important;
            color: white !important; margin-bottom: 20px;
        }

        .branding-bar {
            position: fixed; bottom: 15px; left: 50%; transform: translateX(-50%);
            background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(168, 85, 247, 0.4);
            padding: 8px 20px; border-radius: 30px; font-size: 12px; font-weight: bold;
            color: #e2e8f0; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.6); white-space: nowrap;
        }
        .branding-bar span { color: var(--primary); }
        @media print { body { display: none !important; } }
    </style>
</head>
<body oncontextmenu="return false;" ondragstart="return false;" ondrop="return false;">
    
    <div class="watermark-bg">
        ${Array(150).fill('<div class="watermark-text">@medicalaa • planexapp.ir</div>').join('')}
    </div>
    
    <div class="container" id="app-content">
        <div style="text-align: center; margin-top: 20vh; color: #94a3b8; font-size: 14px;">در حال بارگذاری کپسول VIP...</div>
    </div>
    
    <div class="branding-bar">گنجینه رمزها | <span>@medicalaa</span></div>

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

    fs.writeFileSync(path.join(outputDir, 'VIP_Mnemonics_Locked.html'), htmlTemplate, 'utf8');
    console.log('✅ ظاهر تخمی اصلاح شد! گاوصندوق دارکمود و شیک ساخته شد.');
} catch (err) {
    console.error('❌ فایل پیدا نشد.', err);
}
