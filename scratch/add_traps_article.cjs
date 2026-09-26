const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, '../src/data/articlesData.js');
let articlesContent = fs.readFileSync(articlesPath, 'utf8');

// Check if already added
if (articlesContent.includes('id: \'khordad-1405-traps-analysis\'')) {
  console.log('Article already exists in articlesData.js');
  process.exit(0);
}

const articleEntry = `  {
    id: 'khordad-1405-traps-analysis',
    category: 'تحلیل تخصصی آزمون',
    categoryColor: '#f59e0b',
    icon: '🎯',
    title: 'کالبدشکافی دام‌های تستی و گزینه‌های انحرافی آزمون پرانترنی خرداد ۱۴۰۵',
    summary: 'تحلیل فوق‌تخصصی ۲۰۰ سوال آزمون پیش‌کارورزی خرداد ۱۴۰۵ با تفکیک دقیق تله‌های صورت سوال، اهداف انحرافی گزینه‌های الف، ب، ج، د و روانشناسی طراحی تست همراه با لینک دانلود دیتای ساختاریافته.',
    readTime: 25,
    date: '1405/06/16',
    downloads: [
      {
        id: 'khordad1405-json',
        title: 'بانک جامع JSON تحلیل تله‌ها و گزینه‌های انحرافی (۲۰۰ تست)',
        description: 'دیتای ساختاریافته شامل تحلیل صورت سوال، هدف طراح از گزینه‌های الف تا د و استدلال کلینیکال',
        format: 'JSON',
        filename: 'khordad1405_traps_analysis.json',
        size: '680 KB',
        url: '/downloads/khordad1405_traps_analysis.json'
      },
      {
        id: 'khordad1405-txt',
        title: 'نسخه متنی و کامل تحلیل ۲۰۰ سوال خرداد ۱۴۰۵ (TXT / Markdown)',
        description: 'متن تفکیک‌شده و منظم برای مطالعه آفلاین، چاپ، مرور در تبلت و موبایل',
        format: 'TXT',
        filename: 'khordad1405_traps_analysis.txt',
        size: '722 KB',
        url: '/downloads/khordad1405_traps_analysis.txt'
      }
    ],
    content: \`
      <div style="direction: rtl; font-family: system-ui, -apple-system, sans-serif; line-height: 1.8; color: #e2e8f0;">
        
        <!-- Hero Introduction Box -->
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(124, 58, 237, 0.12) 100%); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 16px; padding: 20px; margin-bottom: 24px;">
          <h2 style="font-size: 1.25rem; font-weight: 800; color: #f59e0b; margin: 0 0 10px 0; display: flex; align-items: center; gap: 8px;">
            <span>🧠</span> روانشناسی طراحان آزمون و مهندسی معکوس تله‌های گزینه‌ای
          </h2>
          <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.8; margin: 0 0 14px 0;">
            در آزمون‌های جامع کشوری نظیر پرانترنی و دستیاری پزشکی، گزینه‌های غلط (Distractors) هرگز تصادفی انتخاب نمی‌شوند. طراح سوال برای هر گزینه نقشه شناختی مشخصی دارد تا داوطلب را بر اساس سوگیری‌های رایج ذهنی (Heuristics & Cognitive Biases) به پاسخ اشتباه هدایت کند.
          </p>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 3px 10px; border-radius: 8px; font-size: 0.74rem; font-weight: 700;">🎯 تفکیک دام صورت سوال</span>
            <span style="background: rgba(124, 58, 237, 0.2); color: #c4b5fd; padding: 3px 10px; border-radius: 8px; font-size: 0.74rem; font-weight: 700;">🔍 کالبدشکافی ۴ گزینه (الف، ب، ج، د)</span>
            <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 3px 10px; border-radius: 8px; font-size: 0.74rem; font-weight: 700;">📦 ۲۰۰ سوال تحلیل‌شده</span>
          </div>
        </div>

        <!-- 4 Core Archetypes of Traps -->
        <h3 style="font-size: 1.1rem; font-weight: 800; color: #ffffff; margin: 24px 0 14px 0; display: flex; align-items: center; gap: 6px;">
          <span>⚡</span> ۴ الگوی تکرارشونده تله‌های تستی در آزمون خرداد ۱۴۰۵:
        </h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-bottom: 24px;">
          
          <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px;">
            <div style="font-weight: 800; font-size: 0.88rem; color: #38bdf8; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <span>1️⃣</span> تله آشنایی ظاهری (Surface Familiarity)
            </div>
            <p style="font-size: 0.78rem; color: #94a3b8; line-height: 1.6; margin: 0;">
              قراردادن بیماری‌ها یا داروهای بسیار معروفی که دانشجو بیشترین مواجهه را با آن‌ها داشته است (مثل پنی‌سیلین، واریس مری، یا کورتون)، تا داوطلب بدون دقت به اندیکاسیون دقیق سناریو، به سمت گزینه آشناتر متمایل شود.
            </p>
          </div>

          <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px;">
            <div style="font-weight: 800; font-size: 0.88rem; color: #f43f5e; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <span>2️⃣</span> تله لنگر انداختن (Anchoring Bias)
            </div>
            <p style="font-size: 0.78rem; color: #94a3b8; line-height: 1.6; margin: 0;">
              برجسته‌سازی یک نشانه غیراختصاصی مانند تب شدید یا افزایش ناگهانی کراتینین، تا ذهن داوطلب روی آن قفل کند و سرنخ تشخیصی طلایی (مثل ائوزینوفیلوری، زمان‌بندی علائم یا سابقه دارویی) را نادیده بگیرد.
            </p>
          </div>

          <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px;">
            <div style="font-weight: 800; font-size: 0.88rem; color: #fbbf24; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <span>3️⃣</span> تله اقدام تهاجمی زودرس (Overcall Trap)
            </div>
            <p style="font-size: 0.78rem; color: #94a3b8; line-height: 1.6; margin: 0;">
              پیشنهاد جراحی فوری، لاپاراتومی یا بیوپسی در شرایطی که بیمار هنوز همودینامیک پایدار نشده یا نیاز به درمان طبی و محافظه‌کارانه دارد.
            </p>
          </div>

          <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px;">
            <div style="font-weight: 800; font-size: 0.88rem; color: #a855f7; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <span>4️⃣</span> تله قید معکوس و منع مصرف (Inversion Trap)
            </div>
            <p style="font-size: 0.78rem; color: #94a3b8; line-height: 1.6; margin: 0;">
              سوالاتی با قید «منع مصرف دارد»، «کدامیک دیده نمی‌شود» یا «بجز». داوطلب تحت استرس زمان، گزاره صحیح را به عنوان پاسخ اشتباه علامت می‌زند.
            </p>
          </div>

        </div>

        <!-- Sample Case Study from Exam -->
        <h3 style="font-size: 1.1rem; font-weight: 800; color: #ffffff; margin: 24px 0 14px 0; display: flex; align-items: center; gap: 6px;">
          <span>🔬</span> نمونه کالبدشکافی عینی از تست‌های خرداد ۱۴۰۵:
        </h3>

        <!-- Case 1: Q2 AIN -->
        <div style="background: rgba(22, 23, 29, 0.85); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-weight: 800; color: #38bdf8; font-size: 0.86rem;">تست شماره ۲ | داخلی (نفرولوژی)</span>
            <span style="background: #16171d; color: #a1a1aa; padding: 2px 8px; border-radius: 6px; font-size: 0.7rem;">کلید رسمی: گزینه د</span>
          </div>
          <p style="font-size: 0.82rem; color: #e2e8f0; margin-bottom: 12px; line-height: 1.7;">
            <strong>صورت سوال:</strong> بیمار ۶۵ ساله‌ای با GFR پایه 40 به دلیل پنومونی بستری و با پیپراسیلین-تازوباکتام درمان می‌شود. پس از ۵ روز کراتینین به 3.2 افزایش می‌یابد. در ادرار ۲۰٪ ائوزینوفیل (Hansel stain) و کست دیده می‌شود. محتمل‌ترین تشخیص چیست؟
          </p>
          <div style="background: #16171d; border-radius: 10px; padding: 12px; font-size: 0.78rem; line-height: 1.8;">
            <p style="color: #f87171; margin: 0 0 6px 0;"><strong>🎯 دام صورت سوال:</strong> طراح با طرح بستری به دلیل پنومونی، ذهن را به سمت شوک سپتیک و ATN می‌برد؛ اما کلید اصلی «ائوزینوفیلوری با رنگ‌آمیزی هانسل» است.</p>
            <p style="color: #94a3b8; margin: 0 0 4px 0;"><strong>• گزینه الف (انسداد ادراری):</strong> انحراف به نارسایی مکانیکال پس‌کلیوی ناشی از سن بیمار؛ ربطی به ائوزینوفیل ندارد.</p>
            <p style="color: #94a3b8; margin: 0 0 4px 0;"><strong>• گزینه ب (نکروز حاد توبولار):</strong> انحراف به شایع‌ترین علت نارسایی کلیه در سپسیس؛ در ATN کست گرنولار قهوه‌ای گلی دیده می‌شود نه ائوزینوفیل.</p>
            <p style="color: #94a3b8; margin: 0 0 4px 0;"><strong>• گزینه ج (گلومرولونفریت کرسنتریک):</strong> انحراف به افت سریع GFR؛ RPGN یک سندرم نفریتیک با کست RBC است.</p>
            <p style="color: #4ade80; margin: 0;"><strong>• گزینه د (نفریت توبولو-اینترستیشیال آلرژیک - AIN):</strong> گزینه صحیح. واکنش ازدیاد حساسیت دارویی به بتالاکتام‌ها (پیپراسیلین) با ائوزینوفیلوری مثبت.</p>
          </div>
        </div>

        <!-- Case 2: Q4 Enalapril in Pregnancy -->
        <div style="background: rgba(22, 23, 29, 0.85); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 16px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-weight: 800; color: #ec4899; font-size: 0.86rem;">تست شماره ۴ | زنان و مامایی</span>
            <span style="background: #16171d; color: #a1a1aa; padding: 2px 8px; border-radius: 6px; font-size: 0.7rem;">کلید رسمی: گزینه د</span>
          </div>
          <p style="font-size: 0.82rem; color: #e2e8f0; margin-bottom: 12px; line-height: 1.7;">
            <strong>صورت سوال:</strong> خانم ۳۲ ساله‌ای در هفته ۳۴ بارداری با فشار خون 160/100 و پروتئینوری ۲ گرم مراجعه کرده است. کدام داروی زیر در مدیریت فشار خون این بیمار منع مصرف دارد؟
          </p>
          <div style="background: #16171d; border-radius: 10px; padding: 12px; font-size: 0.78rem; line-height: 1.8;">
            <p style="color: #f87171; margin: 0 0 6px 0;"><strong>🎯 دام صورت سوال:</strong> قید منفی «منع مصرف دارد» در شرایط پره‌اکلامپسی؛ طراح داروهای خط اول را قرار داده تا داوطلب عجولانه داروی مجاز را انتخاب کند.</p>
            <p style="color: #94a3b8; margin: 0 0 4px 0;"><strong>• گزینه الف (لابتالول):</strong> تله داروی خط اول؛ داروی انتخابی و بسیار ایمن در بارداری است.</p>
            <p style="color: #94a3b8; margin: 0 0 4px 0;"><strong>• گزینه ب (هیدرالازین):</strong> تله داروی اورژانسی؛ گشادکننده شریانی برای کنترل بحران فشار خون بارداری.</p>
            <p style="color: #94a3b8; margin: 0 0 4px 0;"><strong>• گزینه ج (متیل‌دوپا):</strong> تله آگونیست آلفا-۲؛ قدیمی‌ترین و تثبیت‌شده‌ترین داروی ایمن بارداری.</p>
            <p style="color: #4ade80; margin: 0;"><strong>• گزینه د (انالاپریل / مهارکننده ACE):</strong> گزینه صحیح. کنتراندیکاسیون مطلق در بارداری به دلیل دیس‌ژنز کلیه جنین و الیگوهیدرآمنیوس شدید.</p>
          </div>
        </div>

        <!-- Download Banner inside Article -->
        <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(56, 189, 248, 0.15) 100%); border: 1px solid rgba(168, 85, 247, 0.4); border-radius: 16px; padding: 20px; text-align: center; margin-top: 24px;">
          <h3 style="font-size: 1.05rem; font-weight: 800; color: #ffffff; margin: 0 0 8px 0;">
            📥 دریافت دیتای کامل ۲۰۰ سوال با تحلیل تفکیکی تله‌ها
          </h3>
          <p style="font-size: 0.8rem; color: #cbd5e1; max-width: 540px; margin: 0 auto 16px auto; line-height: 1.6;">
            فایل‌های تحلیل کامل شامل تمامی ۲۰۰ سوال آزمون خرداد ۱۴۰۵ در دو فرمت استاندارد دیتای JSON و فایل تفکیکی متنی (TXT) آماده دانلود مستقیم است.
          </p>
          <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
            <button 
              class="btn-article-download" 
              data-url="/downloads/khordad1405_traps_analysis.json" 
              data-filename="khordad1405_traps_analysis.json" 
              data-format="JSON"
              style="display: inline-flex; align-items: center; gap: 6px; background: #7c3aed; color: #ffffff; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 800; font-size: 0.82rem; cursor: pointer; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4);"
            >
              <span>📦 دانلود فایل ساختاریافته (JSON)</span>
            </button>
            <button 
              class="btn-article-download" 
              data-url="/downloads/khordad1405_traps_analysis.txt" 
              data-filename="khordad1405_traps_analysis.txt" 
              data-format="TXT"
              style="display: inline-flex; align-items: center; gap: 6px; background: #1f2029; color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4); padding: 10px 20px; border-radius: 10px; font-weight: 800; font-size: 0.82rem; cursor: pointer;"
            >
              <span>📄 دانلود نسخه متنی کامل (TXT)</span>
            </button>
          </div>
        </div>

      </div>
    \`
  },
`;

// Insert right after `export const articlesData = [\n`
const targetPrefix = 'export const articlesData = [\n';
if (!articlesContent.includes(targetPrefix)) {
  console.error('Target prefix not found in articlesData.js');
  process.exit(1);
}

articlesContent = articlesContent.replace(targetPrefix, targetPrefix + articleEntry);
fs.writeFileSync(articlesPath, articlesContent, 'utf8');
console.log('Article successfully inserted into articlesData.js!');
