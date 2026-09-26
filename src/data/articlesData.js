// src/data/articlesData.js

export const articlesData = [
  {
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
        id: 'khordad1405-pdf',
        title: 'جزوه کالبدشکافی دام‌های تستی و گزینه‌های انحرافی خرداد ۱۴۰۵ (PDF)',
        description: 'نسخه رسمی و کامل PDF آماده پرینت و مطالعه آفلاین با کیفیت بالا (دانلود مستقیم)',
        format: 'PDF',
        filename: 'Khordad1405_Traps.pdf',
        size: 'فایل PDF',
        url: '/downloads/Khordad1405_Traps.pdf'
      },
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
    content: `
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
    `
  },
  {
    id: 'questions-1404',
    category: 'پرهانترنی و دستیاری پزشکی',
    categoryColor: '#0ea5e9',
    icon: '🩺',
    title: 'بانک ۲۰۰ تست طلایی با پاسخ، نکته و رمز | پرهانترنی شهریور ۱۴۰۴',
    summary: 'بانک تعاملی و طبقه‌بندی‌شده تست‌های پرانترنی پزشکی (داخلی، جراحی، اطفال، زنان، مینورها) همراه با نکات طلایی، تحلیل گزینه‌ها، کدهای رمزگذاری و متدولوژی یادسپاری فعال (Active Recall).',
    readTime: 25,
    date: '1404/06/01',
    isQuestionBank: true,
    content: ''
  },
  {
    id: 'humanities-1month-plan',
    category: 'برنامه‌ریزی و رشته انسانی',
    categoryColor: '#8b5cf6',
    icon: '⚖️',
    title: 'برنامه مطالعاتی جامع یک‌ماهه کنکور انسانی',
    summary: 'برنامه راهبردی و فشرده ۳۰ روزه ویژه داوطلبان کنکور انسانی همراه با بودجه‌بندی دروس تخصصی.',
    readTime: 15,
    date: '1405/06/05',
    url: '/humanities-1month.html',
    content: `
      <div style="padding: 10px 0;">
        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 16px; padding: 20px; margin-bottom: 24px;">
          <h2 style="font-size: 1.3rem; color: #6d28d9; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
            📚 برنامه راهبردی ۳۰ روزه جمع‌بندی کنکور انسانی
          </h2>
          <p style="color: #475569; line-height: 1.8; font-size: 0.92rem; margin-bottom: 16px;">
            این برنامه به صورت اختصاصی برای داوطلبان رشته علوم انسانی و دانشگاه فرهنگیان با تمرکز بر دروس ضریب‌دار (فنون ادبی، عربی، ریاضی، اقتصاد، فلسفه و منطق، جامعه‌شناسی و روانشناسی) طراحی شده است.
          </p>
          <a href="/humanities-1month.html" target="_blank" class="btn-primary" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none; padding: 10px 20px; font-weight: bold; border-radius: 12px;">
            <span>📖 مشاهده نسخه کامل و تعاملی برنامه (HTML)</span>
            <span>↗</span>
          </a>
        </div>

        <h3 style="font-size: 1.1rem; color: #1e293b; margin: 24px 0 12px 0;">🎯 سرفصل‌های تحت پوشش در این دوره ۳۰ روزه:</h3>
        <ul style="padding-right: 20px; line-height: 2; color: #334155; font-size: 0.9rem;">
          <li><strong>علوم و فنون ادبی:</strong> عروض و قافیه سماعی، آرایه‌های ادبی تستی، سبک‌شناسی و تاریخ ادبیات جامع ۳ پایه.</li>
          <li><strong>عربی تخصصی:</strong> ترجمه و تعریب، قواعد اعراب و منصوبات، نواسخ، تحلیل صرفی و درک مطلب.</li>
          <li><strong>ریاضی و آمار:</strong> معادلات، توابع، آمار توصیفی، احتمال و الگوهای خطی دوازدهم.</li>
          <li><strong>اقتصاد و روانشناسی:</strong> حل مسائل مالیات، عرضه و تقاضا، تورم + روانشناسی رشد، حافظه و سلامت روان.</li>
          <li><strong>فلسفه و منطق:</strong> منطق دهم (قضایا و مغالطات)، فلسفه ۱۱ و ۱۲ (مکاتب و مفاهیم بنیادین).</li>
          <li><strong>جامعه‌شناسی، تاریخ و جغرافیا:</strong> مفاهیم ترکیبی جهان‌های اجتماعی، هویت و نمودارهای تاریخی.</li>
        </ul>

        <div style="margin-top: 24px; text-align: center;">
          <iframe src="/humanities-1month.html" style="width: 100%; min-height: 650px; border: 1px solid #cbd5e1; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);" title="برنامه مطالعاتی یکماهه انسانی"></iframe>
        </div>
      </div>
    `
  },
  {
    id: 'konkur-1406-summer-base-plan',
    category: 'پلن مطالعاتی',
    categoryColor: '#6366f1',
    icon: '📅',
    title: 'پلن جامع و فوق‌فشرده ۱ ماهه پایه کنکور ۱۴۰۶ (دهم و یازدهم)',
    summary: 'برنامه فشرده و کاملاً تشریحی یک ماهه برای جمع‌بندی دروس پایه (دهم و یازدهم) و آمادگی کامل برای ورود قدرتمند به سال دوازدهم.',
    readTime: 12,
    date: '1405/06/04',
    content: `\n<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>برنامه جامع ۳۰ روزه جمع‌بندی پایه کنکور تجربی | @medicalaa & @stodybots</title>
    <style>
        :root {
            --primary: #38bdf8;
            --primary-light: #7c3aed;
            --primary-dark: #1e1b4b;
            --secondary: #0d9488;
            --accent: #f59e0b;
            --danger: #ef4444;
            --success: #10b981;
            --bg-page: #0b1120;
            --card-bg: #0f172a;
            --text-main: #f1f5f9;
            --text-muted: #94a3b8;
            --border-color: #1e293b;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Tahoma, 'Segoe UI', Arial, sans-serif;
            background-color: var(--bg-page);
            color: var(--text-main);
            line-height: 1.6;
            padding: 20px;
            position: relative;
        }

        /* Repeating Diagonal Dual Watermark */
        .watermark-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.045;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-around;
            overflow: hidden;
        }

        .watermark-item {
            font-size: 24px;
            font-weight: 900;
            transform: rotate(-30deg);
            color: #0f172a;
            user-select: none;
            margin: 55px 35px;
            white-space: nowrap;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            background: var(--card-bg);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            border: 1px solid var(--border-color);
            position: relative;
            z-index: 1;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0d9488 100%);
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }

        .header h1 {
            font-size: 24pt;
            font-weight: 800;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }

        .header p {
            font-size: 12pt;
            opacity: 0.92;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
        }

        /* Dual Channel Badge */
        .channel-badge-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .channel-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(8px);
            padding: 8px 20px;
            border-radius: 50px;
            font-size: 11pt;
            font-weight: bold;
            border: 1px solid rgba(255, 255, 255, 0.35);
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            color: #ffffff;
        }

        .main-content {
            padding: 35px 30px;
        }

        /* Section Titles */
        .section-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 15pt;
            color: #38bdf8;
            margin: 35px 0 18px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid #334155;
        }

        .section-title::before {
            content: '';
            display: inline-block;
            width: 8px;
            height: 24px;
            background: var(--secondary);
            border-radius: 4px;
        }

        /* Cards Grid */
        .grid-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 25px;
        }

        .stat-card {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 14px;
            padding: 16px;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        .stat-number {
            font-size: 22pt;
            font-weight: 800;
            color: #38bdf8;
            margin-bottom: 4px;
        }

        .stat-label {
            font-size: 10pt;
            color: #cbd5e1;
            font-weight: 600;
        }

        /* Tables */
        .custom-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            margin: 15px 0 25px 0;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border-color);
            background-color: #0b1120;
        }

        .custom-table th {
            background: #1e293b;
            color: #38bdf8;
            padding: 12px 14px;
            font-size: 10pt;
            font-weight: 700;
            text-align: right;
        }

        .custom-table td {
            padding: 10px 14px;
            font-size: 9.5pt;
            border-bottom: 1px solid #334155;
            text-align: right;
            vertical-align: top;
            color: #e2e8f0;
        }

        .custom-table tr:last-child td {
            border-bottom: none;
        }

        .custom-table tr:nth-child(odd) {
            background-color: #1e293b;
        }

        .custom-table tr:nth-child(even) {
            background-color: #0f172a;
        }

        .custom-table tr:hover td {
            background-color: #1e293b;
        }

        /* Badges */
        .pill {
            display: inline-block;
            padding: 3px 9px;
            border-radius: 20px;
            font-size: 8.5pt;
            font-weight: bold;
        }

        .pill-bio { background: #dcfce7; color: #166534; }
        .pill-chem { background: #fee2e2; color: #b91c1c; }
        .pill-phy { background: #e0e7ff; color: #3730a3; }
        .pill-math { background: #fef3c7; color: #92400e; }

        /* Day row special styles */
        .simulation-row {
            background: #ecfdf5 !important;
            font-weight: bold;
        }
        .simulation-row td {
            color: #065f46;
        }

        .review-row {
            background: #fffbeb !important;
            font-weight: bold;
        }
        .review-row td {
            color: #92400e;
        }

        /* Rules Box */
        .rule-card {
            background: #f0fdf4;
            border-right: 5px solid var(--success);
            padding: 18px 22px;
            border-radius: 10px;
            margin-top: 25px;
        }

        .rule-card h3 {
            color: #166534;
            margin-bottom: 10px;
            font-size: 11.5pt;
        }

        .rule-card ul {
            padding-right: 20px;
            color: #1f2937;
            font-size: 9.5pt;
            line-height: 1.8;
        }

        /* Footer */
        .footer {
            background: #0f172a;
            color: #94a3b8;
            text-align: center;
            padding: 22px;
            font-size: 10pt;
            border-top: 1px solid #1e293b;
        }

        .footer strong {
            color: #38bdf8;
        }

        @media (max-width: 768px) {
            body { padding: 8px; }
            .header { padding: 25px 12px; }
            .header h1 { font-size: 16pt; }
            .main-content { padding: 18px 12px; }
            .custom-table th, .custom-table td { padding: 8px 8px; font-size: 8.5pt; }
        }
    </style>
</head>
<body>

    <!-- Watermark Background Layer -->
    <div class="watermark-bg">
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
        <span class="watermark-item">@medicalaa ✕ @stodybots</span>
    </div>

    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1>برنامه جامع ۳۰ روزه جمع‌بندی پایه کنکور تجربی</h1>
            <p>نقشه راه ۱ ماهه ویژه دانش‌آموزان ورودی دوازدهم (جمع‌بندی کامل زیست، شیمی، فیزیک و ریاضی پایه دهم و یازدهم قبل از شروع سال تحصیلی)</p>
            <div class="channel-badge-wrapper">
                <div class="channel-badge">
                    <span>کانال تلگرام:</span>
                    <span>@medicalaa</span>
                </div>
                <div class="channel-badge">
                    <span>پشتیبانی و ربات:</span>
                    <span>@stodybots</span>
                </div>
            </div>
        </header>

        <div class="main-content">

            <!-- Stats Overview -->
            <div class="grid-stats">
                <div class="stat-card">
                    <div class="stat-number">۶۰٪</div>
                    <div class="stat-label">سهم پایه دهم و یازدهم در کنکور</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۸ تا ۱۰</div>
                    <div class="stat-label">ساعت مطالعه روزانه هدف</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۱۶۰+</div>
                    <div class="stat-label">تعداد تست روزانه برگزیده</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۴</div>
                    <div class="stat-label">آزمون جامع شبیه‌سازی پایه</div>
                </div>
            </div>

            <!-- Section 1: Daily Schedule Model -->
            <h2 class="section-title">۱. ساختار اجرایی باکس‌های مطالعاتی روزانه (۴ باکس تخصصی)</h2>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th style="width: 22%;">باکس روزانه</th>
                        <th style="width: 18%; text-align: center;">زمان پیشنهادی</th>
                        <th style="width: 60%;">برنامه اجرایی و درصد تست‌زنی</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>باکس ۱ (صبح زود)</strong></td>
                        <td style="text-align: center; font-weight: bold;">۲.۵ تا ۳ ساعت</td>
                        <td><span class="pill pill-bio">زیست‌شناسی پایه</span> (متن‌خوانی دقیق کتاب درسی + حل تست‌های سراسری و ترکیبی + شکل‌شناسی)</td>
                    </tr>
                    <tr>
                        <td><strong>باکس ۲ (قبل از ظهر)</strong></td>
                        <td style="text-align: center; font-weight: bold;">۲ تا ۲.۵ ساعت</td>
                        <td><span class="pill pill-chem">شیمی پایه</span> (مرور مفاهیم و واکنش‌ها + تیپ‌بندی و حل مسئله استوکیومتری/ترمودینامیک/محلول‌ها)</td>
                    </tr>
                    <tr>
                        <td><strong>باکس ۳ (عصر)</strong></td>
                        <td style="text-align: center; font-weight: bold;">۲ تا ۲.۵ ساعت</td>
                        <td><span class="pill pill-phy">فیزیک پایه</span> یا <span class="pill pill-math">ریاضی پایه</span> (چرخشی روزهای زوج و فرد + تست‌زنی سرعتی)</td>
                    </tr>
                    <tr>
                        <td><strong>باکس ۴ (پایان شب)</strong></td>
                        <td style="text-align: center; font-weight: bold;">۱.۵ ساعت</td>
                        <td><strong>روتین شبانه:</strong> حل ۱۰ تست قرابت/آرایه نهایی، ریدینگ زبان/کلوز، مرور فرمول‌ها و تحلیل غلط‌های روز</td>
                    </tr>
                </tbody>
            </table>

            <!-- Section 2: Step by Step Daily Plan -->
            <h2 class="section-title">۲. جدول زمان‌بندی روز‌به‌روز (۳۰ روز طلایی شهریور)</h2>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th style="width: 12%; text-align: center;">روز</th>
                        <th style="width: 44%;">زیست و شیمی روز</th>
                        <th style="width: 44%;">فیزیک / ریاضی و روتین روز</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Week 1: 10th Base -->
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱</td>
                        <td><strong>زیست ۱۰ (ف ۱ و ۲):</strong> دنیای زنده، گوارش و جذب مواد<br><strong>شیمی ۱۰ (ف ۱):</strong> کیهان زادگاه الفبای هستی، ساختار اتم و جرم اتمی</td>
                        <td><strong>فیزیک ۱۰ (ف ۱):</strong> فیزیک و اندازه‌گیری، چگالی، خطای اندازه‌گیری<br><strong>روتین:</strong> مسائل مقدماتی استوکیومتری (۱۰ تست)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۲</td>
                        <td><strong>زیست ۱۰ (ف ۳):</strong> تبادلات گازی، تنفس و مکانیک تنفس<br><strong>شیمی ۱۰ (ف ۱):</strong> آرایش الکترونی، جدول تناوبی و موازنه</td>
                        <td><strong>ریاضی ۱۰ (ف ۱ و ۲):</strong> الگو و دنباله، مثلثات (نسبت‌ها، دایره مثلثاتی)<br><strong>روتین:</strong> متن زیست گیاهی دهم (مرور مقدماتی)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۳</td>
                        <td><strong>زیست ۱۰ (ف ۴ - پارت ۱):</strong> قلب و رگ‌ها، الکتروکاردیوگرام، گردش خون عمومی و ششی<br><strong>شیمی ۱۰ (ف ۱):</strong> استوکیومتری فرمولی و جرمی، درصد جرمی و ایزوتوپ‌ها</td>
                        <td><strong>فیزیک ۱۰ (ف ۲):</strong> ویژگی‌های فیزیکی مواد، فشار، لوله‌های U شکل و مانومتر<br><strong>روتین:</strong> ریدینگ زبان انگلیسی (۲ متن کنکور)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۴</td>
                        <td><strong>زیست ۱۰ (ف ۴ - پارت ۲):</strong> گردش خون جانوران، لنف و خون<br><strong>شیمی ۱۰ (ف ۲):</strong> ردپای گازها، قانون گازها و استوکیومتری گازها</td>
                        <td><strong>ریاضی ۱۰ (ف ۳ و ۴):</strong> توان‌های گویا و عبارت‌های جبری، معادله درجه دوم و نامعادلات<br><strong>روتین:</strong> تست ترکیبی قلب با سایر فصول</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۵</td>
                        <td><strong>زیست ۱۰ (ف ۵):</strong> تنظیم اسمزی و دفع مواد زائد، کلیه و عملکرد نفرون‌ها<br><strong>شیمی ۱۰ (ف ۲):</strong> ساختار لوویس، اکسیدهای فلزی/نافلزی و باران اسیدی</td>
                        <td><strong>فیزیک ۱۰ (ف ۳):</strong> کار، انرژی جنبشی، پایستگی انرژی مکانیکی و توان<br><strong>روتین:</strong> مسائل استوکیومتری با راندمان درصدی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۶</td>
                        <td><strong>زیست ۱۰ (ف ۶ و ۷):</strong> جذب و انتقال در گیاهان، تغذیه و فتوسنتز پایه دهم<br><strong>شیمی ۱۰ (ف ۳):</strong> آب، محلول‌ها، درصد جرمی، غلظت مولار و ppm</td>
                        <td><strong>ریاضی ۱۰ (ف ۵ و ۶):</strong> مفهوم تابع، بازنمایی‌های تابع، شمارش و جایگشت<br><strong>روتین:</strong> خلاصه‌نویسی نکات گیاهی دهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۷</td>
                        <td><strong>فیزیک ۱۰ (ف ۴):</strong> دما، گرما، ظرفیت گرمایی، تعادل گرمایی و قانون گازها<br><strong>شیمی ۱۰ (ف ۳):</strong> انحلال‌پذیری، رسانایی محلول‌ها و اسمز</td>
                        <td><strong>ریاضی ۱۰ (ف ۷):</strong> آمار و احتمال پایه دهم<br><strong>ایستگاه تست جامع دهم:</strong> حل یک دفترچه اختصاصی پایه دهم قلم‌چی/سنجش</td>
                    </tr>

                    <!-- Week 2: 11th Base Start -->
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۸</td>
                        <td><strong>زیست ۱۱ (ف ۱):</strong> تنظیم عصبی، پتانسیل عمل، ساختار مغز و نخاع<br><strong>شیمی ۱۱ (ف ۱ - پارت ۱):</strong> قدر هدایای زمین را بدانیم، هیدروکربن‌ها و آلکان‌ها</td>
                        <td><strong>فیزیک ۱۱ (ف ۱ - پارت ۱):</strong> الکتریسیته ساکن، قانون کولن و میدان الکتریکی<br><strong>روتین:</strong> ۱۰ تست قرابت معنایی + ۵ تست آرایه ادبی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۹</td>
                        <td><strong>زیست ۱۱ (ف ۲):</strong> حواس (چشم، گوش، گیرنده‌های حسی پوست و جانوران)<br><strong>شیمی ۱۱ (ف ۱ - پارت ۲):</strong> آلکن، آلکین، هیدروکربن‌های حلقوی و نفت خام</td>
                        <td><strong>ریاضی ۱۱ (ف ۱):</strong> هندسه تحلیلی و معادله خط، معادله درجه دوم و سهمی<br><strong>روتین:</strong> تست ترکیبی اعصاب و حواس با جانوری</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۰</td>
                        <td><strong>زیست ۱۱ (ف ۳):</strong> دستگاه حرکتی (اسکلت، استخوان‌ها، مفصل و مکانیسم انقباض عضله)<br><strong>شیمی ۱۱ (ف ۱ - پارت ۳):</strong> واکنش‌های شیمیایی، آلیاژها و بازده درصدی یازدهم</td>
                        <td><strong>فیزیک ۱۱ (ف ۱ - پارت ۲):</strong> انرژی پتانسیل الکتریکی، پتانسیل و خازن‌ها<br><strong>روتین:</strong> واژگان زبان انگلیسی دهم و یازدهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۱</td>
                        <td><strong>زیست ۱۱ (ف ۴):</strong> تنظیم شیمیایی (غدد، هورمون‌های هیپوفیز، تیروئید، آدرنال، کلسیم)<br><strong>شیمی ۱۱ (ف ۲ - پارت ۱):</strong> در پی غذای سالم، آنتالپی واکنش و گرماسنجی</td>
                        <td><strong>ریاضی ۱۱ (ف ۲):</strong> هندسه پایه (ترسیم‌های هندسی، قضیه تالس، تشابه مثلث‌ها)<br><strong>روتین:</strong> شکل‌های مهم دستگاه حرکتی و غدد</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۲</td>
                        <td><strong>زیست ۱۱ (ف ۵):</strong> ایمنی (خط اول، دوم و سوم دفاعی، آنتی‌بادی، لنفوسیت B و T)<br><strong>شیمی ۱۱ (ف ۲ - پارت ۲):</strong> آنتالپی پیوند، قانون هس و گروه‌های عاملی</td>
                        <td><strong>فیزیک ۱۱ (ف ۲ - پارت ۱):</strong> جریان الکتریکی، مقاومت، قانون اهم و عوامل موثر بر مقاومت<br><strong>روتین:</strong> مسائل گرماشیمی و قانون هس</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۳</td>
                        <td><strong>زیست ۱۱ (ف ۶ - پارت ۱):</strong> تقسیم یاخته، کروموزوم‌ها، چرخه یاخته‌ای و میتوز<br><strong>شیمی ۱۱ (ف ۲ - پارت ۳):</strong> سینتیک، عوامل موثر بر سرعت واکنش و محاسبات سرعت</td>
                        <td><strong>ریاضی ۱۱ (ف ۳):</strong> تابع (اعمال روی توابع، توابع یک‌به‌یک و وارون، تساوی توابع)<br><strong>روتین:</strong> نکات ترکیبی ایمنی با لنف دهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۴</td>
                        <td><strong>مرور میان‌دوره‌ای یازدهم:</strong> تست مبحثی زیست ۱ تا ۵ یازدهم + مسائل شیمی ۱ و ۲ یازدهم</td>
                        <td><strong>فیزیک ۱۱ (ف ۲ - پارت ۲):</strong> مدارها، ترکیب مقاومت‌ها، مدار تک‌حلقه‌ای و توان مصرفی<br><strong>آزمون مبحثی:</strong> ۵۰ تست فیزیک الکتریسیته ساکن و جاری</td>
                    </tr>

                    <!-- Week 3: 11th Base Complete -->
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۵</td>
                        <td><strong>زیست ۱۱ (ف ۶ - پارت ۲):</strong> میوز و تولید مثل جنسی، کراسینگ‌اور و ناهنجاری‌ها<br><strong>شیمی ۱۱ (ف ۳ - پارت ۱):</strong> پوشاک نیازی پایان‌ناپذیر، پلیمرها و الکل‌ها/اسیدها</td>
                        <td><strong>ریاضی ۱۱ (ف ۴):</strong> مثلثات یازدهم (روابط تکمیلی مثلثاتی، نمودار توابع سینوس/کسینوس)<br><strong>روتین:</strong> رسم مراحل میوز و میتوز روی کاغذ</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۶</td>
                        <td><strong>زیست ۱۱ (ف ۷ - پارت ۱):</strong> دستگاه تولید مثل مرد و زن، هورمون‌های جنسی و چرخه جنسی<br><strong>شیمی ۱۱ (ف ۳ - پارت ۲):</strong> استرها، پلی‌استرها و پلی‌آمیدها</td>
                        <td><strong>فیزیک ۱۱ (ف ۳ - پارت ۱):</strong> مغناطیس و قطب‌ها، میدان مغناطیسی، نیروی وارد بر بار و سیم متحرک<br><strong>روتین:</strong> تست ترکیبی چرخه جنسی با هورمون‌های هیپوفیز</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۷</td>
                        <td><strong>زیست ۱۱ (ف ۷ - پارت ۲):</strong> لقاح، نمو جنین و سونوگرافی<br><strong>شیمی ۱۱ (ف ۳ - پارت ۳):</strong> واکنش‌های پلیمری‌شدن، پلی‌استرها و بازیافت</td>
                        <td><strong>ریاضی ۱۱ (ف ۵):</strong> توابع نمایی و لگاریتمی و ویژگی‌های لگاریتم<br><strong>روتین:</strong> تست مسائل شیمی کل فصل ۳ یازدهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۸</td>
                        <td><strong>زیست ۱۱ (ف ۸ و ۹):</strong> تولید مثل نهاندانگان، پاسخ گیاهان به محرک‌ها (هورمون‌های گیاهی)<br><strong>شیمی پایه (جمع‌بندی مفاهیم):</strong> مرور کل متن شیمی دهم و یازدهم</td>
                        <td><strong>فیزیک ۱۱ (ف ۳ - پارت ۲):</strong> القای الکترومغناطیسی، قانون فارادی و قانون لنز<br><strong>روتین:</strong> جمع‌بندی گیاهی پایه (دهم + یازدهم)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۱۹</td>
                        <td><strong>زیست پایه (ژنتیک و سلولی):</strong> تست‌های ترکیبی ژنتیک و میوز ۱۰ و ۱۱<br><strong>شیمی پایه (استوکیومتری جامع):</strong> ۳۰ مسئله استوکیومتری ترکیبی دهم و یازدهم</td>
                        <td><strong>ریاضی ۱۱ (ف ۶):</strong> حد و پیوستگی (مفهوم حد، قضایای حد، حد چپ و راست و پیوستگی)<br><strong>روتین:</strong> تست‌های پرچالش فیزیک یازدهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۲۰</td>
                        <td><strong>زیست پایه (جانوری جامع):</strong> مرور کل جانوری‌های دهم و یازدهم در یک نگاه<br><strong>شیمی پایه (شیمی آلی جامع):</strong> آلکان تا پلیمر و گروه‌های عاملی</td>
                        <td><strong>ریاضی ۱۱ (ف ۷):</strong> آمار و احتمال یازدهم (احتمال شرطی و پیشامدهای مستقل)<br><strong>روتین:</strong> جدول مقایسه‌ای جانوری دهم و یازدهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۲۱</td>
                        <td><strong>ایستگاه جمع‌بندی یازدهم:</strong> آزمون جامع شیمی و زیست یازدهم (سراسری‌های ۱۴۰۰ تا ۱۴۰۳)</td>
                        <td><strong>ایستگاه جمع‌بندی یازدهم:</strong> آزمون جامع فیزیک و ریاضی یازدهم کنکورهای اخیر</td>
                    </tr>

                    <!-- Week 4: Integration & Mega-Review -->
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۲۲</td>
                        <td><strong>زیست‌شناسی:</strong> مرور آزمون‌محور فصول ۱ تا ۴ دهم (۵۰ تست سراسری)</td>
                        <td><strong>فیزیک پایه:</strong> جمع‌بندی فرمول‌ها و ۵۰ تست منتخب فیزیک دهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۲۳</td>
                        <td><strong>زیست‌شناسی:</strong> مرور آزمون‌محور فصول ۵ تا ۷ دهم (۵۰ تست سراسری)</td>
                        <td><strong>ریاضی پایه:</strong> جمع‌بندی و تست مثلثات، تابع و معادلات دهم و یازدهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۲۴</td>
                        <td><strong>شیمی پایه:</strong> آزمون جامع شیمی دهم (۳۵ تست شبیه‌ساز کنکور)</td>
                        <td><strong>فیزیک پایه:</strong> جمع‌بندی فرمول‌ها و ۵۰ تست منتخب فیزیک یازدهم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۲۵</td>
                        <td><strong>زیست‌شناسی:</strong> مرور آزمون‌محور فصول ۱ تا ۵ یازدهم (۵۰ تست سراسری)</td>
                        <td><strong>ریاضی پایه:</strong> جمع‌بندی حد، لگاریتم، هندسه و احتمال پایه</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">روز ۲۶</td>
                        <td><strong>زیست‌شناسی:</strong> مرور آزمون‌محور فصول ۶ تا ۹ یازدهم (۵۰ تست سراسری)</td>
                        <td><strong>شیمی پایه:</strong> آزمون جامع شیمی یازدهم (۳۵ تست شبیه‌ساز کنکور)</td>
                    </tr>

                    <!-- Final Simulations -->
                    <tr class="simulation-row">
                        <td style="text-align: center;">روز ۲۷</td>
                        <td><strong>آزمون جامع ۱ (شبیه‌ساز پایه تجربی):</strong> دفترچه ۱ (زیست‌شناسی ۴۵ سوال در ۴۵ دقیقه)</td>
                        <td><strong>دفترچه ۲ و ۳:</strong> فیزیک ۳۰ سوال + شیمی ۳۵ سوال + ریاضی ۳۰ سوال در زمان استاندارد</td>
                    </tr>
                    <tr class="simulation-row">
                        <td style="text-align: center;">روز ۲۸</td>
                        <td><strong>تحلیل جامع آزمون ۲۷:</strong> بررسی موشکافانه پاسخنامه، رفع اشکال علمی در کتاب درسی</td>
                        <td><strong>ثبت خطاهای محاسباتی:</strong> یادداشت دام‌های تستی در دفترچه خودآموز</td>
                    </tr>
                    <tr class="simulation-row">
                        <td style="text-align: center;">روز ۲۹</td>
                        <td><strong>آزمون جامع ۲ (شبیه‌ساز دوم پایه کنکور):</strong> اجرای کامل در شرایط استاندارد کنکور</td>
                        <td><strong>تحلیل آزمون عصرگاهی:</strong> چک‌کردن درصدهای پایانی و اصلاح اشتباهات</td>
                    </tr>
                    <tr class="review-row">
                        <td style="text-align: center;">روز ۳۰</td>
                        <td><strong>تورق سریع و آرام‌سازی:</strong> تورق شکل‌های مهم زیست پایه و جدول تناوبی شیمی</td>
                        <td><strong>آمادگی روانی مهرماه:</strong> مرور خلاصه فرمول‌ها و آغاز پرقدرت دوازدهم</td>
                    </tr>
                </tbody>
            </table>

            <!-- Section 3: Strategic Rules -->
            <div class="rule-card">
                <h3>پنج اصل طلایی رتبه‌های برتر برای جمع‌بندی تابستان:</h3>
                <ul>
                    <li><strong>کتاب درسی خط قرمز زیست‌شناسی:</strong> قبل از هر تستی، خط‌به‌خط متن و قیدهای کتاب درسی دهم و یازدهم را مرور کنید؛ شکل‌ها منبع اصلی طراحی تست‌های دام‌دار کنکور هستند.</li>
                    <li><strong>تیپ‌بندی در مسائل شیمی و فیزیک:</strong> در مسائل استوکیومتری، الکتریسیته و حرکت، الگوهای حل را دسته‌بندی کنید و از فرمول‌های تستی عجیب بپرهیزید.</li>
                    <li><strong>زنده نگه‌داشتن مباحث پیوسته:</strong> مباحثی مثل تابع، مثلثات، ژنتیک و استوکیومتری مستقیماً در سال دوازدهم تکرار می‌شوند؛ ضعف در این مباحث پایه، مانع پیشرفت در دوازدهم خواهد شد.</li>
                    <li><strong>تحلیل آزمون از خود آزمون مهم‌تر است:</strong> تستی که غلط زده‌اید یا نزده‌اید، دقیقاً نقطه ضعف پنهان شماست؛ تا دلیل آن را در کتاب پیدا نکرده‌اید از آن عبور نکنید.</li>
                </ul>
            </div>

        </div>

        <!-- Footer -->
        <footer class="footer">
            <p>برنامه جامع مطالعاتی کنکور سراسری تجربی | عضویت در کانال‌های تلگرام:</p>
            <p><strong>@medicalaa</strong> &nbsp;|&nbsp; <strong>@stodybots</strong></p>
        </footer>
    </div>

</body>
</html>
\n`
  },
  {
    id: 'oloom-paye-1-month-plan',
    category: 'پلن مطالعاتی',
    categoryColor: '#6366f1',
    icon: '🔬',
    title: 'پلن جامع ۱ ماهه جمع‌بندی علوم پایه پزشکی',
    summary: 'برنامه فوق‌العاده فشرده و دقیق برای مرور سریع و تست‌زنی آزمون جامع علوم پایه پزشکی با تکیه بر منابع معتبر.',
    readTime: 10,
    date: '1405/06/02',
    content: `\n<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>برنامه جامع ۳۲ روزه آزمون جامع علوم پایه پزشکی | @medicalaa</title>
    <style>
        :root {
            --primary: #1e3a8a;
            --primary-light: #3b82f6;
            --primary-dark: #0f172a;
            --secondary: #0d9488;
            --accent: #f59e0b;
            --danger: #ef4444;
            --success: #10b981;
            --bg-page: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Tahoma, 'Segoe UI', Arial, sans-serif;
            background-color: var(--bg-page);
            color: var(--text-main);
            line-height: 1.6;
            padding: 20px;
            position: relative;
        }

        /* Repeating Diagonal Watermark */
        .watermark-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.045;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-around;
            overflow: hidden;
        }

        .watermark-item {
            font-size: 26px;
            font-weight: 900;
            transform: rotate(-30deg);
            color: #0f172a;
            user-select: none;
            margin: 60px 40px;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            background: var(--card-bg);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            border: 1px solid var(--border-color);
            position: relative;
            z-index: 1;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0d9488 100%);
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }

        .header h1 {
            font-size: 24pt;
            font-weight: 800;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }

        .header p {
            font-size: 12pt;
            opacity: 0.92;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
        }

        .channel-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(8px);
            padding: 8px 22px;
            border-radius: 50px;
            margin-top: 20px;
            font-size: 11.5pt;
            font-weight: bold;
            border: 1px solid rgba(255, 255, 255, 0.35);
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .main-content {
            padding: 35px 30px;
        }

        /* Section Titles */
        .section-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 15pt;
            color: var(--primary);
            margin: 35px 0 18px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid #e2e8f0;
        }

        .section-title::before {
            content: '';
            display: inline-block;
            width: 8px;
            height: 24px;
            background: var(--secondary);
            border-radius: 4px;
        }

        /* Cards Grid */
        .grid-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 25px;
        }

        .stat-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 16px;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        .stat-number {
            font-size: 22pt;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 4px;
        }

        .stat-label {
            font-size: 10pt;
            color: var(--text-muted);
            font-weight: 600;
        }

        /* Tables */
        .custom-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            margin: 15px 0 25px 0;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border-color);
        }

        .custom-table th {
            background: #1e3a8a;
            color: #ffffff;
            padding: 12px 14px;
            font-size: 10pt;
            font-weight: 700;
            text-align: right;
        }

        .custom-table td {
            padding: 10px 14px;
            font-size: 9.5pt;
            border-bottom: 1px solid #edf2f7;
            text-align: right;
        }

        .custom-table tr:last-child td {
            border-bottom: none;
        }

        .custom-table tr:nth-child(even) {
            background-color: #f8fafc;
        }

        .custom-table tr:hover td {
            background-color: #f1f5f9;
        }

        /* Badges */
        .pill {
            display: inline-block;
            padding: 3px 9px;
            border-radius: 20px;
            font-size: 8.5pt;
            font-weight: bold;
        }

        .pill-major { background: #fee2e2; color: #b91c1c; }
        .pill-minor { background: #e0e7ff; color: #3730a3; }
        .pill-general { background: #dcfce7; color: #166534; }

        /* Day row special styles */
        .simulation-row {
            background: #ecfdf5 !important;
            font-weight: bold;
        }
        .simulation-row td {
            color: #065f46;
        }

        .review-row {
            background: #fffbeb !important;
            font-weight: bold;
        }
        .review-row td {
            color: #92400e;
        }

        .rest-row {
            background: #fee2e2 !important;
            font-weight: bold;
        }
        .rest-row td {
            color: #991b1b;
        }

        /* Rules Box */
        .rule-card {
            background: #f0fdf4;
            border-right: 5px solid var(--success);
            padding: 18px 22px;
            border-radius: 10px;
            margin-top: 25px;
        }

        .rule-card h3 {
            color: #166534;
            margin-bottom: 10px;
            font-size: 11.5pt;
        }

        .rule-card ul {
            padding-right: 20px;
            color: #1f2937;
            font-size: 9.5pt;
            line-height: 1.8;
        }

        /* Footer */
        .footer {
            background: #0f172a;
            color: #94a3b8;
            text-align: center;
            padding: 22px;
            font-size: 10pt;
            border-top: 1px solid #1e293b;
        }

        .footer strong {
            color: #38bdf8;
        }

        @media (max-width: 768px) {
            body { padding: 8px; }
            .header { padding: 25px 12px; }
            .header h1 { font-size: 16pt; }
            .main-content { padding: 18px 12px; }
            .custom-table th, .custom-table td { padding: 8px 8px; font-size: 8.5pt; }
        }
    </style>
</head>
<body>

    <!-- Watermark Background Layer -->
    <div class="watermark-bg">
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
    </div>

    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1>برنامه جامع مطالعاتی آزمون علوم پایه پزشکی</h1>
            <p>برنامه عملیاتی ۳۲ روزه (۱ شهریور تا ۲ مهر) بر اساس بودجه‌بندی استاندارد ۲۰۰ سوالی قطب‌های کشوری، پوشش فیزیولوژی، آناتومی، بیوشیمی، میکروب‌شناسی و عمومی</p>
            <div class="channel-badge">
                <span>کانال تلگرام:</span>
                <span>@medicalaa</span>
            </div>
        </header>

        <div class="main-content">

            <!-- Stats Overview -->
            <div class="grid-stats">
                <div class="stat-card">
                    <div class="stat-number">۲۰۰</div>
                    <div class="stat-label">تعداد کل سوالات آزمون</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۱۱۸</div>
                    <div class="stat-label">سوالات دروس اختصاصی ماژور (۵۹٪)</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۵۸</div>
                    <div class="stat-label">سوالات علوم زیستی و انگل/میکروب (۲۹٪)</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۲۴</div>
                    <div class="stat-label">سوالات دروس عمومی و معارف (۱۲٪)</div>
                </div>
            </div>

            <!-- Section 1: Exact Budget Breakdown -->
            <h2 class="section-title">۱. بودجه‌بندی دقیق آزمون جامع علوم پایه پزشکی (۲۰۰ سوال)</h2>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th style="width: 18%;">گروه درسی</th>
                        <th style="width: 44%;">عناوین دروس و مباحث</th>
                        <th style="width: 15%; text-align: center;">تعداد سوال</th>
                        <th style="width: 23%;">ارزش استراتژیک</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Majors -->
                    <tr>
                        <td><strong>ماژور ۱</strong></td>
                        <td><strong>فیزیولوژی</strong> (قلب و گردش خون، تنفس، کلیه، گوارش، غدد و اعصاب)</td>
                        <td style="text-align: center; font-weight: bold; color: #b91c1c;">۴۴</td>
                        <td><span class="pill pill-major">سنگین‌ترین و پرنمره‌ترین</span></td>
                    </tr>
                    <tr>
                        <td><strong>ماژور ۲</strong></td>
                        <td><strong>آناتومی</strong> (اندام فوقانی/تحتانی، تنه و شکم، سر و گردن و نوروآناتومی)</td>
                        <td style="text-align: center; font-weight: bold; color: #b91c1c;">۴۰</td>
                        <td><span class="pill pill-major">پایه، تصویری و پرتکرار</span></td>
                    </tr>
                    <tr>
                        <td><strong>ماژور ۳</strong></td>
                        <td><strong>بیوشیمی پزشکی</strong> (متابولیسم کربوهیدرات، چربی، پروتئین، ویتامین‌ها و مولکولی)</td>
                        <td style="text-align: center; font-weight: bold; color: #b91c1c;">۲۲</td>
                        <td><span class="pill pill-major">قاعده‌مند و فرمولی</span></td>
                    </tr>
                    <tr>
                        <td><strong>ماژور ۴</strong></td>
                        <td><strong>باکتری‌شناسی پزشکی</strong> (کوکسی‌های گرم مثبت، باسیل‌های گرم منفی، آنتی‌بیوتیک‌ها)</td>
                        <td style="text-align: center; font-weight: bold; color: #b91c1c;">۱۲</td>
                        <td><span class="pill pill-major">حفظی و بسیار روتین</span></td>
                    </tr>

                    <!-- Minors -->
                    <tr>
                        <td><strong>مینور پایه</strong></td>
                        <td><strong>بافت‌شناسی</strong> (بافت‌های عمومی و ارگان‌های اختصاصی)</td>
                        <td style="text-align: center; font-weight: bold;">۱۱</td>
                        <td><span class="pill pill-minor">تصویرمحور و سریع</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور پایه</strong></td>
                        <td><strong>جنین‌شناسی</strong> (لقاح، تکامل لایه‌ها، ناهنجاری‌ها و تکامل ارگان‌ها)</td>
                        <td style="text-align: center; font-weight: bold;">۹</td>
                        <td><span class="pill pill-minor">مبحثی و مفهومی</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور پایه</strong></td>
                        <td><strong>انگل‌شناسی و قارچ‌شناسی</strong> (تک‌یاخته‌ها، کرم‌ها، قارچ‌های جلدی و سیستمیک)</td>
                        <td style="text-align: center; font-weight: bold;">۱۰</td>
                        <td><span class="pill pill-minor">روتین و پرتکرار</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور پایه</strong></td>
                        <td><strong>ویروس‌شناسی پزشکی</strong> (ویروس‌های DNA و RNA، هپاتیت‌ها، HIV، هرپس)</td>
                        <td style="text-align: center; font-weight: bold;">۸</td>
                        <td><span class="pill pill-minor">کم‌حجم و طلایی</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور پایه</strong></td>
                        <td><strong>ایمونولوژی پایه</strong> (آنتی‌بادی‌ها، کمپلمان، ارگان‌های لنفاوی و هایپرسنسیتیویتی)</td>
                        <td style="text-align: center; font-weight: bold;">۸</td>
                        <td><span class="pill pill-minor">مفهومی و نمره‌ساز</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور پایه</strong></td>
                        <td><strong>ژنتیک و فیزیک پزشکی</strong></td>
                        <td style="text-align: center; font-weight: bold;">۶</td>
                        <td><span class="pill pill-minor">فرمول‌ها و قوانین</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور پایه</strong></td>
                        <td><strong>روان‌شناسی سلامت و بهداشت</strong></td>
                        <td style="text-align: center; font-weight: bold;">۶</td>
                        <td><span class="pill pill-minor">سریع و آسان</span></td>
                    </tr>

                    <!-- General -->
                    <tr>
                        <td><strong>عمومی / معارف</strong></td>
                        <td><strong>اندیشه اسلامی ۱</strong></td>
                        <td style="text-align: center; font-weight: bold; color: #166534;">۱۲</td>
                        <td><span class="pill pill-general">تضمین ۱۰۰٪ نمره</span></td>
                    </tr>
                    <tr>
                        <td><strong>عمومی / معارف</strong></td>
                        <td><strong>انقلاب اسلامی ایران</strong></td>
                        <td style="text-align: center; font-weight: bold; color: #166534;">۱۲</td>
                        <td><span class="pill pill-general">تضمین ۱۰۰٪ نمره</span></td>
                    </tr>
                    <tr style="background: #0f172a; color: #ffffff; font-weight: bold;">
                        <td style="color: #ffffff;" colspan="2">مجموع کل سوالات آزمون علوم پایه</td>
                        <td style="text-align: center; color: #38bdf8; font-size: 11pt;">۲۰۰ سوال</td>
                        <td style="color: #38bdf8;">مدت زمان آزمون: ۲۰۰ دقیقه</td>
                    </tr>
                </tbody>
            </table>

            <!-- Section 2: Step by Step Daily Plan -->
            <h2 class="section-title">۲. جدول زمان‌بندی روز‌به‌روز (۱ شهریور تا ۲ مهر - ۳۲ روز)</h2>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th style="width: 14%; text-align: center;">تاریخ / روز</th>
                        <th style="width: 43%;">مبحث ماژور روز (فیزیو / آناتومی / بیوشیمی)</th>
                        <th style="width: 43%;">مبحث مینور / عمومی روز</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱ شهریور (روز ۱)</td>
                        <td><strong>فیزیولوژی قلب:</strong> پتانسیل عمل، الکتروفیزیولوژی، چرخه قلبی، بازده و نوار قلب (ECG)</td>
                        <td><strong>بافت‌شناسی:</strong> بافت پوششی، همبند، خون و بافت عضلانی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲ شهریور (روز ۲)</td>
                        <td><strong>فیزیولوژی گردش خون:</strong> همودینامیک، تنظیم فشار خون، میکروسیرکولاسیون و شوک</td>
                        <td><strong>بافت‌شناسی:</strong> بافت عصبی، غضروف و استخوان، ارگان‌های لنفاوی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۳ شهریور (روز ۳)</td>
                        <td><strong>آناتومی تنه:</strong> قفسه سینه، مدیاستینوم، قلب، پریکارد و عروق کرونر، ریه‌ها</td>
                        <td><strong>جنین‌شناسی:</strong> گامتوژنز، لقاح، لانه‌گزینی و هفته اول تا سوم جنینی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۴ شهریور (روز ۴)</td>
                        <td><strong>فیزیولوژی تنفس:</strong> مکانیک تنفس، حجم‌ها و ظرفیت‌ها، تبادل گازها و انتقال اکسیژن</td>
                        <td><strong>جنین‌شناسی:</strong> تکامل سیستم قلبی عروقی و تکامل دستگاه تنفس</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۵ شهریور (روز ۵)</td>
                        <td><strong>بیوشیمی:</strong> ساختار و متابولیسم کربوهیدرات‌ها (گلیکولیز، چرخه کربس، گلوکونئوژنز)</td>
                        <td><strong>عمومی:</strong> اندیشه اسلامی ۱ (بخش خداشناسی و براهین اثبات وجود خدا)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۶ شهریور (روز ۶)</td>
                        <td><strong>بیوشیمی:</strong> متابولیسم گلیکوژن، مسیر پنتوز فسفات، ساختار و متابولیسم لیپیدها</td>
                        <td><strong>ایمونولوژی:</strong> ایمنی ذاتی و اکتسابی، آنتی‌ژن‌ها، ساختار ایمونوگلوبولین‌ها</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۷ شهریور (روز ۷)</td>
                        <td><strong>مرور جامع هفتگی ۱:</strong> حل ۱۰۰ تست برگزیده قطب‌های کشوری (فیزیولوژی قلب/تنفس + بیوشیمی)</td>
                        <td><strong>ایمونولوژی:</strong> سیستم کمپلمان، پردازش و ارائه آنتی‌ژن (MHC)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۸ شهریور (روز ۸)</td>
                        <td><strong>آناتومی اندام فوقانی:</strong> استخوان‌ها، شبکه بازویی، عضلات شانه، بازو و ساعد</td>
                        <td><strong>باکتری‌شناسی:</strong> ساختار دیواره، استافیلوکوک‌ها، استرپتوکوک‌ها و انتروکوک‌ها</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۹ شهریور (روز ۹)</td>
                        <td><strong>آناتومی اندام فوقانی:</strong> عروق، اعصاب (مدین، اولنار، رادیال)، آناتومی دست و آسیب‌ها</td>
                        <td><strong>باکتری‌شناسی:</strong> باسیل‌های گرم مثبت (باسیلوس، کلستریدیوم، کورینه‌باکتریوم)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۰ شهریور (روز ۱۰)</td>
                        <td><strong>فیزیولوژی کلیه:</strong> فیلتراسیون گلومرولی (GFR)، کلیرانس، بازجذب و ترشح توبولی</td>
                        <td><strong>باکتری‌شناسی:</strong> انتروباکتریاسه (اشریشیا، سالمونلا، شیگلا، کلبسیلا) و سودوموناس</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۱ شهریور (روز ۱۱)</td>
                        <td><strong>فیزیولوژی کلیه و اسید-باز:</strong> تغلیظ و رقیق‌سازی ادرار، تنظیم اسمولاریته، تعادل اسید و باز</td>
                        <td><strong>ویروس‌شناسی:</strong> ساختار، هرپس‌ویروس‌ها، هپاتیت‌ها (HAV, HBV, HCV) و HIV</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۲ شهریور (روز ۱۲)</td>
                        <td><strong>آناتومی شکم و لگن:</strong> جدار قدامی شکم، صفاق، معده، روده، کبد، طحال، کلیه‌ها و مجاری</td>
                        <td><strong>ویروس‌شناسی:</strong> ویروس‌های تنفسی (آنفلوآنزا، کرونا)، پولیو، هاری و آربوویروس‌ها</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۳ شهریور (روز ۱۳)</td>
                        <td><strong>بیوشیمی:</strong> متابولیسم اسیدهای آمینه، چرخه اوره، سنتز پورین و پیریمیدین</td>
                        <td><strong>عمومی:</strong> انقلاب اسلامی (زمینه‌ها، علل وقوع و نقش رهبری امام خمینی)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۴ شهریور (روز ۱۴)</td>
                        <td><strong>مرور جامع هفتگی ۲:</strong> حل ۱۰۰ تست قطب‌های کشوری (آناتومی اندام فوقانی/تنه + کلیه)</td>
                        <td><strong>انگل‌شناسی:</strong> تک‌یاخته‌های روده‌ای و خونی (آمیب، ژیاردیا، لیشمانیا، مالاریا)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۵ شهریور (روز ۱۵)</td>
                        <td><strong>آناتومی اندام تحتانی:</strong> استخوان‌ها، شبکه لومبوساکرال، عضلات ناحیه گلوتئال، ران و ساق</td>
                        <td><strong>انگل‌شناسی:</strong> کرم‌های نواری و لوله‌ای (آسکاریس، اکینوکوکوس، فاسیولا، تنیا)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۶ شهریور (روز ۱۶)</td>
                        <td><strong>آناتومی اندام تحتانی:</strong> عروق و اعصاب (سیاتیک، فمورال، تیبیال، پرونئال)، زانو و مچ پا</td>
                        <td><strong>قارچ‌شناسی:</strong> درماتوفیت‌ها، کاندیدا، آسپرژیلوس و قارچ‌های سیستمیک</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۷ شهریور (روز ۱۷)</td>
                        <td><strong>فیزیولوژی گوارش:</strong> حرکات دستگاه گوارش، ترشحات بزاق، معده، پانکراس، کبد و جذب</td>
                        <td><strong>بافت‌شناسی اختصاصی:</strong> بافت دستگاه گوارش، کبد، کلیه و سیستم تناسلی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۸ شهریور (روز ۱۸)</td>
                        <td><strong>فیزیولوژی غدد:</strong> هیپوفیز، تیروئید، آدرنال (کورتکس و مدولا)، پانکراس و هورمون‌های کلسیم</td>
                        <td><strong>جنین‌شناسی:</strong> تکامل دستگاه گوارش، کلیه و مجاری ادراری-تناسلی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۹ شهریور (روز ۱۹)</td>
                        <td><strong>بیوشیمی:</strong> بیولوژی مولکولی (همانندسازی، رونویسی، ترجمه)، هورمون‌ها و ویتامین‌ها</td>
                        <td><strong>ژنتیک پزشکی:</strong> قوانین مندل، الگوهای وراثت مغلوب/غالب، ناهنجاری‌های کروموزومی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۰ شهریور (روز ۲۰)</td>
                        <td><strong>آناتومی سر و گردن:</strong> استخوان‌های جمجمه و صورت، مثلث‌های گردن، حلق، حنجره و تیروئید</td>
                        <td><strong>ایمونولوژی:</strong> واکنش‌های افزایش حساسیت (تیپ I تا IV)، خودایمنی و نقص ایمنی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۱ شهریور (روز ۲۱)</td>
                        <td><strong>مرور جامع هفتگی ۳:</strong> حل آزمون تست‌های قطب اندام تحتانی، غدد و گوارش (۱۰۰ تست)</td>
                        <td><strong>عمومی:</strong> اندیشه اسلامی ۱ (نبوت، امامت، معاد و عدل الهی)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۲ شهریور (روز ۲۲)</td>
                        <td><strong>نوروآناتومی:</strong> نخاع، ساقه مغز (بصل‌النخاع، پل، مغز میانی) و هسته‌های اعصاب کرانیال</td>
                        <td><strong>فیزیک پزشکی:</strong> پرتوهای یونساز، حفاظت، امواج صوتی و تصویربرداری تشخیصی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۳ شهریور (روز ۲۳)</td>
                        <td><strong>نوروآناتومی:</strong> مخچه، دیانسفال، نیمکره‌های مخ، بطن‌های مغزی و پرده‌های مننژ و عروق مغز</td>
                        <td><strong>روان‌شناسی و بهداشت:</strong> اصول سلامت روان، انواع استرس، بهداشت عمومی و اپیدمیولوژی پایه</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۴ شهریور (روز ۲۴)</td>
                        <td><strong>فیزیولوژی اعصاب:</strong> پتانسیل عمل غشا، سیناپس‌ها، سیستم حس، گیرنده‌ها و راه‌های صعودی</td>
                        <td><strong>عمومی:</strong> انقلاب اسلامی (دستاوردهای انقلاب، قانون اساسی و ولایت فقیه)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۵ شهریور (روز ۲۵)</td>
                        <td><strong>فیزیولوژی اعصاب:</strong> قشر حرکتی، راه‌های نزولی، مخچه، عقده‌های قاعده‌ای و سیستم خودمختار (ANS)</td>
                        <td><strong>تست مبحثی نورو:</strong> حل تست‌های قطب نوروآناتومی و فیزیولوژی اعصاب ۵ سال اخیر</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۶ شهریور (روز ۲۶)</td>
                        <td><strong>آناتومی اعصاب کرانیال و حواس ویژه:</strong> مسیر ۱۲ زوج عصب مغزی، چشم و گوش</td>
                        <td><strong>تست‌های کشوری مینورها:</strong> حل تست‌های جامع جنین، بافت، میکروب و ایمونو</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۷ شهریور (روز ۲۷)</td>
                        <td><strong>جمع‌بندی ماژورها:</strong> مرور جدول عضلات و عصب‌دهی‌ها، فرمول‌های فیزیولوژی و مسیرهای بیوشیمی</td>
                        <td><strong>مرور تست‌های نشان‌دار:</strong> مرور کلیه تست‌های غلط و علامت‌زده روزهای ۱ تا ۲۶</td>
                    </tr>
                    <tr class="simulation-row">
                        <td style="text-align: center;">۲۸ شهریور (روز ۲۸)</td>
                        <td><strong>آزمون شبیه‌سازی ۱:</strong> آزمون جامع علوم پایه اسفند سال قبل (۲۰۰ سوال در ۲۰۰ دقیقه)</td>
                        <td><strong>تحلیل جامع عصرگاهی:</strong> بررسی کارنامه، تحلیل دقیق تست‌های غلط و رفع اشکال فوری</td>
                    </tr>
                    <tr class="simulation-row">
                        <td style="text-align: center;">۲۹ شهریور (روز ۲۹)</td>
                        <td><strong>آزمون شبیه‌سازی ۲:</strong> آزمون جامع علوم پایه شهریور سال قبل (۲۰۰ سوال در ۲۰۰ دقیقه)</td>
                        <td><strong>تحلیل جامع عصرگاهی:</strong> تثبیت نکات پرتکرار و بررسی گزینه‌های انحرافی</td>
                    </tr>
                    <tr class="review-row">
                        <td style="text-align: center;">۳۰ شهریور (روز ۳۰)</td>
                        <td><strong>تورق سریع ۱:</strong> مرور اطلس تصاویر آناتومی و بافت‌شناسی، فرمول‌های تنفس و کلیه</td>
                        <td><strong>مرور مسیرها:</strong> مرور چرخه اسید اوریک، چرخه‌های بیوشیمی و جداول باکتری‌ها</td>
                    </tr>
                    <tr class="review-row">
                        <td style="text-align: center;">۳۱ شهریور (روز ۳۱)</td>
                        <td><strong>تورق سریع ۲:</strong> خلاصه‌های دست‌نویس، کدهای حفظی داروها/میکروب‌ها و دروس عمومی</td>
                        <td><strong>تثبیت روانی:</strong> آرام‌سازی ذهنی، حل تست‌های مروری سریع و چک‌لیست نهایی</td>
                    </tr>
                    <tr class="rest-row">
                        <td style="text-align: center;">۱ مهر (روز ۳۲)</td>
                        <td><strong>آرام‌سازی و استراحت کامل:</strong> توقف کامل مطالعه از ساعت ۱۵:۰۰</td>
                        <td>آماده‌سازی کارت ورود به جلسه، مدارک، خواب زودهنگام برای صبح آزمون ۲ مهر</td>
                    </tr>
                </tbody>
            </table>

            <!-- Section 3: Golden Rules -->
            <div class="rule-card">
                <h3>چهار اصل کلیدی قبولی قطعی و کسب استریت در آزمون علوم پایه پزشکی:</h3>
                <ul>
                    <li><strong>تست‌محوری قطب‌های ۱۰ گانه:</strong> حداقل ۶۵٪ سوالات آزمون علوم پایه عیناً یا با تغییر اندک از تست‌های ۵ سال گذشته تکرار می‌شوند؛ الویت اول باید حل تست‌های قطب‌ها باشد.</li>
                    <li><strong>برگ برنده دروس عمومی (۲۴ سوال):</strong> ۲۴ سوال اندیشه و انقلاب اسلامی ساده‌ترین نمرات آزمون هستند؛ با ۴ تا ۵ ساعت مرور می‌توانید درصد ۱۰۰ این بخش را تضمین کنید.</li>
                    <li><strong>استراتژی مطالعه فیزیولوژی و آناتومی:</strong> این دو درس به تنهایی ۸۴ سوال (۴۲٪ نمره) را تشکیل می‌دهند؛ تسلط بر نوار قلب، اسپیرومتری، GFR و شبکه‌های عصبی ضامن قبولی است.</li>
                    <li><strong>شبیه‌سازی شرایط آزمون:</strong> در روزهای ۲۸ و ۲۹ شهریور، دقیقاً ۲۰۰ سوال را در ۲۰۰ دقیقه و بدون بلند شدن از صندلی پاسخ دهید تا مقاومت ذهنی لازم ایجاد شود.</li>
                </ul>
            </div>

        </div>

        <!-- Footer -->
        <footer class="footer">
            <p>برنامه جامع آزمون علوم پایه پزشکی | عضویت در کانال تخصصی تلگرام: <strong>@medicalaa</strong></p>
        </footer>
    </div>

</body>
</html>
\n`
  },
  {
    id: 'pre-intern-1-month-crash-plan',
    category: 'پلن مطالعاتی',
    categoryColor: '#6366f1',
    icon: '🩺',
    title: 'پلن جامع و طلایی ۱ ماهه آمادگی آزمون پره‌اینترنی پزشکی',
    summary: 'برنامه جمع‌بندی جامع و بسیار دقیق ۴ هفته‌ای برای آزمون پره‌اینترنی با تاکید استراتژیک بر دروس ماژور بالینی، مینورها و تحلیل آزمون‌های قطبی.',
    readTime: 11,
    date: '1405/05/28',
    content: `\n<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>برنامه جامع ۳۲ روزه آزمون پیش‌کارورزی (پره‌انترنی) | @medicalaa</title>
    <style>
        :root {
            --primary: #1e3a8a;
            --primary-light: #3b82f6;
            --primary-dark: #0f172a;
            --secondary: #0d9488;
            --accent: #f59e0b;
            --danger: #ef4444;
            --success: #10b981;
            --bg-page: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Tahoma, 'Segoe UI', Arial, sans-serif;
            background-color: var(--bg-page);
            color: var(--text-main);
            line-height: 1.6;
            padding: 20px;
            position: relative;
        }

        /* Repeating Diagonal Watermark */
        .watermark-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.045;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-around;
            overflow: hidden;
        }

        .watermark-item {
            font-size: 26px;
            font-weight: 900;
            transform: rotate(-30deg);
            color: #0f172a;
            user-select: none;
            margin: 60px 40px;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            background: var(--card-bg);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            border: 1px solid var(--border-color);
            position: relative;
            z-index: 1;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0d9488 100%);
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }

        .header h1 {
            font-size: 24pt;
            font-weight: 800;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }

        .header p {
            font-size: 12pt;
            opacity: 0.92;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
        }

        .channel-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(8px);
            padding: 8px 22px;
            border-radius: 50px;
            margin-top: 20px;
            font-size: 11.5pt;
            font-weight: bold;
            border: 1px solid rgba(255, 255, 255, 0.35);
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        }

        .main-content {
            padding: 35px 30px;
        }

        /* Section Titles */
        .section-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 15pt;
            color: var(--primary);
            margin: 35px 0 18px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid #e2e8f0;
        }

        .section-title::before {
            content: '';
            display: inline-block;
            width: 8px;
            height: 24px;
            background: var(--secondary);
            border-radius: 4px;
        }

        /* Cards Grid */
        .grid-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-bottom: 25px;
        }

        .stat-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 14px;
            padding: 16px;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .stat-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        .stat-number {
            font-size: 22pt;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 4px;
        }

        .stat-label {
            font-size: 10pt;
            color: var(--text-muted);
            font-weight: 600;
        }

        /* Tables */
        .custom-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            margin: 15px 0 25px 0;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border-color);
        }

        .custom-table th {
            background: #1e3a8a;
            color: #ffffff;
            padding: 12px 14px;
            font-size: 10pt;
            font-weight: 700;
            text-align: right;
        }

        .custom-table td {
            padding: 10px 14px;
            font-size: 9.5pt;
            border-bottom: 1px solid #edf2f7;
            text-align: right;
        }

        .custom-table tr:last-child td {
            border-bottom: none;
        }

        .custom-table tr:nth-child(even) {
            background-color: #f8fafc;
        }

        .custom-table tr:hover td {
            background-color: #f1f5f9;
        }

        /* Badges */
        .pill {
            display: inline-block;
            padding: 3px 9px;
            border-radius: 20px;
            font-size: 8.5pt;
            font-weight: bold;
        }

        .pill-major { background: #fee2e2; color: #b91c1c; }
        .pill-minor { background: #e0e7ff; color: #3730a3; }
        .pill-floating { background: #fef3c7; color: #92400e; }

        /* Day row special styles */
        .simulation-row {
            background: #ecfdf5 !important;
            font-weight: bold;
        }
        .simulation-row td {
            color: #065f46;
        }

        .review-row {
            background: #fffbeb !important;
            font-weight: bold;
        }
        .review-row td {
            color: #92400e;
        }

        .rest-row {
            background: #fee2e2 !important;
            font-weight: bold;
        }
        .rest-row td {
            color: #991b1b;
        }

        /* Rules Box */
        .rule-card {
            background: #f0fdf4;
            border-right: 5px solid var(--success);
            padding: 18px 22px;
            border-radius: 10px;
            margin-top: 25px;
        }

        .rule-card h3 {
            color: #166534;
            margin-bottom: 10px;
            font-size: 11.5pt;
        }

        .rule-card ul {
            padding-right: 20px;
            color: #1f2937;
            font-size: 9.5pt;
            line-height: 1.8;
        }

        /* Footer */
        .footer {
            background: #0f172a;
            color: #94a3b8;
            text-align: center;
            padding: 22px;
            font-size: 10pt;
            border-top: 1px solid #1e293b;
        }

        .footer strong {
            color: #38bdf8;
        }

        @media (max-width: 768px) {
            body { padding: 8px; }
            .header { padding: 25px 12px; }
            .header h1 { font-size: 16pt; }
            .main-content { padding: 18px 12px; }
            .custom-table th, .custom-table td { padding: 8px 8px; font-size: 8.5pt; }
        }
    </style>
</head>
<body>

    <!-- Watermark Background Layer -->
    <div class="watermark-bg">
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
        <span class="watermark-item">@medicalaa</span>
    </div>

    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1>برنامه جامع مطالعاتی آزمون پیش‌کارورزی (پره‌انترنی)</h1>
            <p>برنامه عملیاتی ۳۲ روزه (۱ شهریور تا ۲ مهر) بر اساس سرفصل‌های واقعی با پوشش ماژورها، مینورها و دروس شناور (پاتولوژی اختصاصی، ایمنولوژی، ژنتیک، تغذیه و فیزیک پزشکی)</p>
            <div class="channel-badge">
                <span>کانال تلگرام:</span>
                <span>@medicalaa</span>
            </div>
        </header>

        <div class="main-content">

            <!-- Stats Overview -->
            <div class="grid-stats">
                <div class="stat-card">
                    <div class="stat-number">۲۰۰</div>
                    <div class="stat-label">تعداد کل سوالات</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۱۰۰</div>
                    <div class="stat-label">سوالات ۴ درس ماژور (۵۰٪)</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۶۸</div>
                    <div class="stat-label">سوالات مینورهای بالینی (۳۴٪)</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">۳۲</div>
                    <div class="stat-label">سوالات دروس شناور (۱۶٪)</div>
                </div>
            </div>

            <!-- Section 1: Exact Budget Breakdown -->
            <h2 class="section-title">۱. بودجه‌بندی رسمی و اصلاح‌شده آزمون پره‌انترنی (۲۰۰ سوال)</h2>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th style="width: 18%;">گروه درسی</th>
                        <th style="width: 44%;">عناوین دروس آزمون</th>
                        <th style="width: 15%; text-align: center;">تعداد سوال</th>
                        <th style="width: 23%;">ارزش استراتژیک</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Majors -->
                    <tr>
                        <td><strong>ماژور ۱</strong></td>
                        <td><strong>بیماری‌های داخلی</strong> (گوارش، ریه و مسمومیت، غدد، کلیه، روماتولوژی، قلب، خون)</td>
                        <td style="text-align: center; font-weight: bold; color: #b91c1c;">۴۰</td>
                        <td><span class="pill pill-major">ماژور پایه و حیاتی</span></td>
                    </tr>
                    <tr>
                        <td><strong>ماژور ۲</strong></td>
                        <td><strong>کودکان و نوزادان</strong> (رشد، نوزادان، تغذیه اطفال، عفونی، گوارش و ...)</td>
                        <td style="text-align: center; font-weight: bold; color: #b91c1c;">۲۰</td>
                        <td><span class="pill pill-major">ماژور بسیار پربازده</span></td>
                    </tr>
                    <tr>
                        <td><strong>ماژور ۳</strong></td>
                        <td><strong>جراحی عمومی و تروما</strong> (شکم حاد، تروما، شوک، پستان، تیروئید، عروق)</td>
                        <td style="text-align: center; font-weight: bold; color: #b91c1c;">۲۰</td>
                        <td><span class="pill pill-major">ماژور ساختاریافته</span></td>
                    </tr>
                    <tr>
                        <td><strong>ماژور ۴</strong></td>
                        <td><strong>زنان و زایمان</strong> (مامایی، بیماری‌های زنان، انکولوژی زنان)</td>
                        <td style="text-align: center; font-weight: bold; color: #b91c1c;">۲۰</td>
                        <td><span class="pill pill-major">ماژور سوالات مشخص</span></td>
                    </tr>

                    <!-- Minors -->
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>بیماری‌های عفونی</td>
                        <td style="text-align: center; font-weight: bold;">۷</td>
                        <td><span class="pill pill-minor">مینور پربازده</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>نورولوژی (بیماری‌های مغز و اعصاب)</td>
                        <td style="text-align: center; font-weight: bold;">۸</td>
                        <td><span class="pill pill-minor">مینور بالینی</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>ارتوپدی و شکستگی‌ها</td>
                        <td style="text-align: center; font-weight: bold;">۷</td>
                        <td><span class="pill pill-minor">تصویرمحور</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>روان‌پزشکی (اختلالات خلقی، سایکوز و داروها)</td>
                        <td style="text-align: center; font-weight: bold;">۷</td>
                        <td><span class="pill pill-minor">مینور طلایی و نمره‌ساز</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>پوست (درماتولوژی)</td>
                        <td style="text-align: center; font-weight: bold;">۷</td>
                        <td><span class="pill pill-minor">مینور سریع و نمره‌آور</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>فارماکولوژی کاربردی (دارودرمانی بالینی)</td>
                        <td style="text-align: center; font-weight: bold;">۶</td>
                        <td><span class="pill pill-minor">دارودرمانی بالینی</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>اورولوژی (جراحی کلیه، مجاری ادراری، سنگ‌ها، BPH و بیضه)</td>
                        <td style="text-align: center; font-weight: bold;">۶</td>
                        <td><span class="pill pill-minor">روتین</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>چشم‌پزشکی</td>
                        <td style="text-align: center; font-weight: bold;">۶</td>
                        <td><span class="pill pill-minor">مینور طلایی و کم‌حجم</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>گوش، حلق، بینی و جراحی سر و گردن (ENT)</td>
                        <td style="text-align: center; font-weight: bold;">۶</td>
                        <td><span class="pill pill-minor">مینور طلایی و کم‌حجم</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور بالینی</strong></td>
                        <td>رادیولوژی و تصویربرداری تشخیصی</td>
                        <td style="text-align: center; font-weight: bold;">۵</td>
                        <td><span class="pill pill-minor">تست‌محور</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور پاراکلینیک</strong></td>
                        <td>آمار حیاتی و اپیدمیولوژی</td>
                        <td style="text-align: center; font-weight: bold;">۶</td>
                        <td><span class="pill pill-minor">فرمول‌های قطعی</span></td>
                    </tr>
                    <tr>
                        <td><strong>مینور پاراکلینیک</strong></td>
                        <td>اخلاق پزشکی و تصمیم‌گیری بالینی</td>
                        <td style="text-align: center; font-weight: bold;">۳</td>
                        <td><span class="pill pill-minor">۱۰۰٪ نمره</span></td>
                    </tr>

                    <!-- Floating Subjects (دروس شناور اصلاح‌شده) -->
                    <tr>
                        <td><strong>درس شناور</strong></td>
                        <td><strong>پاتولوژی اختصاصی (Systemic Pathology)</strong></td>
                        <td style="text-align: center; font-weight: bold; color: #b45309;">۹</td>
                        <td><span class="pill pill-floating">شناور بالینی پرتکرار</span></td>
                    </tr>
                    <tr>
                        <td><strong>درس شناور</strong></td>
                        <td><strong>ایمونولوژی پزشکی (ایمنی‌شناسی)</strong></td>
                        <td style="text-align: center; font-weight: bold; color: #b45309;">۸</td>
                        <td><span class="pill pill-floating">شناور با ضریب بالا</span></td>
                    </tr>
                    <tr>
                        <td><strong>درس شناور</strong></td>
                        <td><strong>ژنتیک پزشکی</strong></td>
                        <td style="text-align: center; font-weight: bold; color: #b45309;">۵</td>
                        <td><span class="pill pill-floating">شناور الگوریتمی</span></td>
                    </tr>
                    <tr>
                        <td><strong>درس شناور</strong></td>
                        <td><strong>علوم تغذیه</strong></td>
                        <td style="text-align: center; font-weight: bold; color: #b45309;">۵</td>
                        <td><span class="pill pill-floating">شناور حفظی و سریع</span></td>
                    </tr>
                    <tr>
                        <td><strong>درس شناور</strong></td>
                        <td><strong>فیزیک پزشکی</strong></td>
                        <td style="text-align: center; font-weight: bold; color: #b45309;">۵</td>
                        <td><span class="pill pill-floating">شناور فرمولی و کاربردی</span></td>
                    </tr>
                    <tr style="background: #0f172a; color: #ffffff; font-weight: bold;">
                        <td style="color: #ffffff;" colspan="2">مجموع کل سوالات دفترچه آزمون پیش‌کارورزی</td>
                        <td style="text-align: center; color: #38bdf8; font-size: 11pt;">۲۰۰ سوال</td>
                        <td style="color: #38bdf8;">مدت آزمون: ۲۰۰ دقیقه</td>
                    </tr>
                </tbody>
            </table>

            <!-- Section 2: Step by Step Daily Plan -->
            <h2 class="section-title">۲. جدول زمان‌بندی روز‌به‌روز (۱ شهریور تا ۲ مهر - ۳۲ روز)</h2>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th style="width: 14%; text-align: center;">تاریخ / روز</th>
                        <th style="width: 43%;">مبحث ماژور روز</th>
                        <th style="width: 43%;">مبحث مینور / دروس شناور روز</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱ شهریور (روز ۱)</td>
                        <td><strong>داخلی قلب:</strong> ایسکمی قلبی، آنژین، نوار قلب (ECG) و آریتمی‌ها</td>
                        <td><strong>روان‌پزشکی:</strong> اختلالات خلقی (افسردگی، دوقطبی) و داروها</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲ شهریور (روز ۲)</td>
                        <td><strong>داخلی قلب:</strong> نارسایی قلبی، فشار خون، بیماری‌های دریچه‌ای</td>
                        <td><strong>روان‌پزشکی:</strong> اسکیزوفرنی، سایکوز، اضطراب و PTSD</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۳ شهریور (روز ۳)</td>
                        <td><strong>داخلی ریه:</strong> آسم، COPD، پنومونی، آمبولی ریه (PTE)</td>
                        <td><strong>شناور (ایمونولوژی ۱):</strong> آنتی‌بادی‌ها، سیستم کمپلمان، واکنش‌های ازدیاد حساسیت (Hypersensitivity)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۴ شهریور (روز ۴)</td>
                        <td><strong>داخلی گوارش و کبد:</strong> زخم پپتیک، IBD، خونریزی گوارشی، سیروز و هپاتیت</td>
                        <td><strong>شناور (ایمونولوژی ۲):</strong> خودایمنی (Autoimmunity)، ایمنی‌شناسی پیوند و واکسن‌ها</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۵ شهریور (روز ۵)</td>
                        <td><strong>داخلی غدد:</strong> دیابت (DKA و HHS)، تیروئید، آدرنال، متابولیسم کلسیم</td>
                        <td><strong>آمار و اپیدمیولوژی:</strong> انواع مطالعات (Cohort، RCT) و شاخص‌های تشخیصی (Sens, Spec)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۶ شهریور (روز ۶)</td>
                        <td><strong>داخلی کلیه و روماتولوژی:</strong> اسید-باز، الکترولیت‌ها، AKI، CKD، لوپوس و RA</td>
                        <td><strong>شناور (پاتولوژی اختصاصی ۱):</strong> پاتولوژی سیستم قلبی عروقی، ریه و کلیه (گلومرولوپاتی‌ها)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۷ شهریور (روز ۷)</td>
                        <td><strong>داخلی خون:</strong> کم‌خونی‌ها (آنمی‌ها)، لوسمی‌ها، ترومبوسیتوپنی و انعقاد</td>
                        <td><strong>مرور جامع داخلی:</strong> حل ۱۰۰ تست منتخب قطب‌های کشوری</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۸ شهریور (روز ۸)</td>
                        <td><strong>جراحی عمومی:</strong> پروتکل‌های ATLS، ترومای شکم و قفسه سینه، شوک، سوختگی</td>
                        <td><strong>چشم‌پزشکی:</strong> گلوکوم حاد زاویه بسته، ترومای چشم و چشم قرمز</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۹ شهریور (روز ۹)</td>
                        <td><strong>جراحی عمومی:</strong> آپاندیسیت، انسداد روده، هرنی‌ها، بیماری‌های صفراوی</td>
                        <td><strong>چشم‌پزشکی:</strong> کاهش بینایی حاد، کاتاراکت، رتینوپاتی و تست‌های چشم</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۰ شهریور (روز ۱۰)</td>
                        <td><strong>جراحی عمومی:</strong> تومورهای کولورکتال، پستان، تیروئید و عروق</td>
                        <td><strong>گوش، حلق و بینی (ENT):</strong> اوتیت، سینوزیت حاد و مزمن، اپیستاکسی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۱ شهریور (روز ۱۱)</td>
                        <td><strong>کودکان:</strong> پایش رشد و تکامل، تغذیه، مایع‌درمانی، واکسیناسیون کشوری</td>
                        <td><strong>گوش، حلق و بینی (ENT):</strong> انواع سرگیجه (BPPV، منیر)، فلج بل و توده‌های گردن</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۲ شهریور (روز ۱۲)</td>
                        <td><strong>کودکان (نوزادان):</strong> زردی، سپسیس نوزادی، RDS تنفسی، آسفیکسی</td>
                        <td><strong>اورولوژی:</strong> سنگ‌های ادراری، هماچوری، BPH، تومورهای کلیه/مثانه/بیضه</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۳ شهریور (روز ۱۳)</td>
                        <td><strong>کودکان:</strong> گاستروانتریت، برونشیولیت، کروپ، راش‌های اگزانتماتوز اطفال</td>
                        <td><strong>شناور (ژنتیک پزشکی):</strong> الگوهای توارث (اتوزوم، وابسته به X)، ناهنجاری‌های کروموزومی و کاریوتایپ</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۴ شهریور (روز ۱۴)</td>
                        <td><strong>کودکان:</strong> تشنج تب‌دار، گلومرولونفریت و سندروم نفروتیک اطفال</td>
                        <td><strong>ارتوپدی:</strong> شکستگی‌ها، دررفتگی‌های شایع اندام‌ها و سندرم کمپارتمان</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۵ شهریور (روز ۱۵)</td>
                        <td><strong>مامایی:</strong> مراقبت‌های پره‌ناتال، پره‌اکلامپسی، اکلامپسی، HELLP، دیابت بارداری</td>
                        <td><strong>پوست:</strong> عفونت‌های باکتریایی، ویروسی، قارچی و تاولی‌های خودایمن</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۶ شهریور (روز ۱۶)</td>
                        <td><strong>مامایی:</strong> مراحل زایمان طبیعی، NST/CST، خونریزی‌های قبل و بعد زایمان</td>
                        <td><strong>پوست:</strong> اگزما، پسوریازیس، آکنه، درماتوزها و ضایعات بدخیم پوست</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۷ شهریور (روز ۱۷)</td>
                        <td><strong>مامایی:</strong> حاملگی خارج رحمی (EP)، سقط جنین، زایمان زودرس و PROM</td>
                        <td><strong>شناور (علوم تغذیه):</strong> ویتامین‌ها، مواد معدنی، سوءتغذیه (ماراسموس، کواشیورکور) و تغذیه انترال/پارنترال</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۸ شهریور (روز ۱۸)</td>
                        <td><strong>ژینکولوژی:</strong> خونریزی غیرطبیعی رحم (AUB)، واژینیت‌ها، عفونت لگنی (PID)</td>
                        <td><strong>نورولوژی:</strong> سکته مغزی (ایسکمیک/هموراژیک)، ترومبولیز و سردردها</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۱۹ شهریور (روز ۱۹)</td>
                        <td><strong>ژینکولوژی:</strong> آندومتریوز، تخمدان پلی‌کیستیک (PCOS)، توده‌های خوش‌خیم لگن</td>
                        <td><strong>نورولوژی:</strong> صرع و انواع تشنج، ام‌اس (MS)، میاستنی گراویس</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۰ شهریور (روز ۲۰)</td>
                        <td><strong>انکولوژی زنان و تنظیم خانواده:</strong> سرطان‌های سرویکس، اندومتر، تخمدان، روش‌های پیشگیری</td>
                        <td><strong>نورولوژی:</strong> پارکینسون، گیلن‌باره، نوروپاتی‌ها و تست‌های جامع نورولوژی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۱ شهریور (روز ۲۱)</td>
                        <td><strong>مرور زنان و زایمان:</strong> حل آزمون تست‌های قطب مامایی و ژینکولوژی</td>
                        <td><strong>ارتوپدی:</strong> عفونت‌های استخوان/مفصل (آرتریت سپتیک، استئومیلیت)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۲ شهریور (روز ۲۲)</td>
                        <td><strong>بیماری‌های عفونی:</strong> سپسیس، مننژیت حاد، اندوکاردیت، تب با منشا ناشناخته (FUO)</td>
                        <td><strong>رادیولوژی:</strong> تفسیر CXR، پنوموتوراکس، پلورال افیوژن، کدورت‌های ریه</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۳ شهریور (روز ۲۳)</td>
                        <td><strong>بیماری‌های عفونی:</strong> سل، تب مالت (بروسلوز)، مالاریا، لیشمانیوز</td>
                        <td><strong>رادیولوژی:</strong> گرافی شکم ساده (انسداد و هوای آزاد)، CT مغز تروما</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۴ شهریور (روز ۲۴)</td>
                        <td><strong>بیماری‌های عفونی:</strong> HIV/AIDS، عفونت‌های ادراری و زخم جراحی</td>
                        <td><strong>شناور (فیزیک پزشکی):</strong> پرتوهای یونساز، حفاظت در برابر اشعه، اصول MRI، CT و سونوگرافی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۵ شهریور (روز ۲۵)</td>
                        <td><strong>فارماکولوژی بالینی:</strong> داروهای قلب و عروق، دیورتیک‌ها، آنتی‌بیوتیک‌ها و داروهای CNS</td>
                        <td><strong>شناور (پاتولوژی اختصاصی ۲):</strong> پاتولوژی سیستم گوارش، کبد، پستان و تومورهای دستگاه تناسلی-ادراری</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۶ شهریور (روز ۲۶)</td>
                        <td><strong>اخلاق پزشکی:</strong> اصول چهارگانه، رازداری، رضایت آگاهانه، اتانازی و خطای بالینی</td>
                        <td><strong>تست جامع شناورها:</strong> حل تست‌های قطب‌های اخیر پاتولوژی اختصاصی، ایمونو، ژنتیک و فیزیک پزشکی</td>
                    </tr>
                    <tr>
                        <td style="text-align: center; font-weight: bold;">۲۷ شهریور (روز ۲۷)</td>
                        <td><strong>جمع‌بندی ماژورها:</strong> مرور فرمول‌ها، معیارهای تشخیصی و دوزهای اورژانس</td>
                        <td><strong>مرور تست‌های نشان‌دار:</strong> مرور کلیه تست‌های علامت‌زده و اشتباه دوره‌های قبل</td>
                    </tr>
                    <tr class="simulation-row">
                        <td style="text-align: center;">۲۸ شهریور (روز ۲۸)</td>
                        <td><strong>آزمون شبیه‌سازی ۱:</strong> آزمون پره‌انترنی اسفند سال قبل (۲۰۰ سوال در ۲۰۰ دقیقه)</td>
                        <td><strong>تحلیل جامع عصرگاهی:</strong> تحلیل دقیق کارنامه، بررسی اشتباهات و دام‌های طراحان</td>
                    </tr>
                    <tr class="simulation-row">
                        <td style="text-align: center;">۲۹ شهریور (روز ۲۹)</td>
                        <td><strong>آزمون شبیه‌سازی ۲:</strong> آزمون پره‌انترنی شهریور سال قبل (۲۰۰ سوال در ۲۰۰ دقیقه)</td>
                        <td><strong>تحلیل جامع عصرگاهی:</strong> رفع اشکالات باقی‌مانده و مرور مباحث شک‌دار</td>
                    </tr>
                    <tr class="review-row">
                        <td style="text-align: center;">۳۰ شهریور (روز ۳۰)</td>
                        <td><strong>تورق سریع ۱:</strong> جداول دارویی، دوزهای احیا، جدول واکسیناسیون و معیارهای بالینی</td>
                        <td><strong>مرور تصاویر:</strong> گرافی‌های رادیولوژی و نوارهای قلب (ECG) پرتکرار آزمون‌ها</td>
                    </tr>
                    <tr class="review-row">
                        <td style="text-align: center;">۳۱ شهریور (روز ۳۱)</td>
                        <td><strong>تورق سریع ۲:</strong> خواندن خلاصه‌های دست‌نویس و دفترچه دام‌های تستی</td>
                        <td><strong>مرور سریع مینورها و شناورها:</strong> مرور نکات فرار پاتولوژی اختصاصی، ایمونو، ژنتیک و پوست</td>
                    </tr>
                    <tr class="rest-row">
                        <td style="text-align: center;">۱ مهر (روز ۳۲)</td>
                        <td><strong>آرام‌سازی و تثبیت روانی:</strong> توقف کامل مطالعه از ساعت ۱۵:۰۰</td>
                        <td>آماده‌سازی مدارک، کارت ورود به جلسه، استراحت و خواب زودهنگام برای صبح آزمون ۲ مهر</td>
                    </tr>
                </tbody>
            </table>

            <!-- Section 3: Golden Rules -->
            <div class="rule-card">
                <h3>چهار اصل کلیدی موفقیت در آزمون پره‌انترنی:</h3>
                <ul>
                    <li><strong>تست‌محوری قطب‌های کشوری:</strong> بیش از ۶۰ درصد سوالات سناریوهای تکراری دوره‌های قبل هستند؛ اولویت نخست با تحلیل تست و پاسخ تشریحی است.</li>
                    <li><strong>اهمیت دروس شناور (۳۲ سوال):</strong> در برنامه جدید، ۳۲ سوال مربوط به دروس شناور (پاتولوژی اختصاصی، ایمنی‌شناسی، ژنتیک، تغذیه و فیزیک پزشکی) است که سوالاتی کاملاً روتین دارند و میانگین درصد شما را جهش می‌دهند.</li>
                    <li><strong>تحلیل گزینه‌های غلط:</strong> طراحان سوال معمولاً گزینه‌های انحرافی دوره‌های قبل را به سوالات دوره‌های بعد تبدیل می‌کنند.</li>
                    <li><strong>مدیریت زمان در آزمون ۲۰۰ سوالی:</strong> در دو آزمون شبیه‌سازی حتماً ۲۰۰ دقیقه پیوسته بدون وقفه تمرین کنید تا در جلسه آزمون دچار افت تمرکز نشوید.</li>
                </ul>
            </div>

        </div>

        <!-- Footer -->
        <footer class="footer">
            <p>برنامه مطالعاتی اختصاصی آزمون پیش‌کارورزی | عضویت در کانال تلگرام: <strong>@medicalaa</strong></p>
        </footer>
    </div>

</body>
</html>
\n`
  },
  {
    id: 'test-taking-techniques',
    category: 'تکنیک‌های تست‌زنی',
    categoryColor: '#f59e0b',
    icon: '🎯',
    title: '۷ تکنیک طلایی و کاملاً کاربردی تست‌زنی برای افزایش درصد آزمون',
    summary: 'بررسی جامع روش‌های علمی و اثبات‌شده برای افزایش چشمگیر سرعت، دقت و تمرکز در پاسخگویی به تست‌های چهارگزینه‌ای کنکور و آزمون‌های جامع.',
    readTime: 9,
    date: '1405/05/22',
    content: `\n
<h1>🎯 ۷ تکنیک طلایی و کاملاً کاربردی تست‌زنی برای افزایش درصد آزمون</h1>

<p>تست‌زنی صرفاً سنجش دانش شما نیست، بلکه یک <strong>مهارت استراتژیک</strong> است! بسیاری از دانش‌آموزان با وجود ساعت مطالعه بسیار بالا، به دلیل عدم تسلط بر مهارت‌های تست‌زنی، در آزمون‌ها نتیجه مطلوب را کسب نمی‌کنند. در این مقاله، ۷ تکنیک کاملاً علمی، کاربردی و اثبات‌شده را به صورت مشروح بررسی می‌کنیم.</p>

<h2>۱. تکنیک حذف گزینه (Process of Elimination)</h2>
<p>یکی از پایه‌ای‌ترین مهارت‌ها، تکنیک حذف گزینه است. در بسیاری از سوالات سخت، شما مستقیماً جواب درست را نمی‌دانید، اما می‌توانید با اطمینان بگویید کدام گزینه‌ها غلط هستند.</p>
<ul>
  <li>ابتدا زیر کلمات کلیدی سوال خط بکشید.</li>
  <li>گزینه‌هایی که حاوی کلمات مطلق‌گرا مانند "همیشه"، "هرگز"، "همه"، "هیچ‌کدام" و "فقط" هستند را با دقت و شک بیشتری بررسی کنید؛ در دروس علوم تجربی (مثل زیست) این گزینه‌ها معمولاً غلط هستند.</li>
  <li>گزینه‌هایی که از نظر منطقی با صورت سوال تناقض دارند را فوراً خط بزنید.</li>
  <li>با حذف حتی دو گزینه غلط، شانس انتخاب پاسخ صحیح شما از ۲۵٪ به ۵۰٪ افزایش می‌یابد!</li>
</ul>

<h2>۲. تکنیک مدیریت زمان "ضربدر و منها" (Two-Pass Technique)</h2>
<p>بزرگترین دشمن شما در آزمون، کمبود زمان است. هرگز نباید برای یک سوال خاص زمان زیادی را هدر دهید و سوالات آسان انتهای دفترچه را از دست بدهید.</p>
<ul>
  <li><strong>گذر اول:</strong> تمام سوالات آسان و سوالاتی که در کمتر از ۱ دقیقه به جواب می‌رسند را حل کنید. اگر سوالی را بلد نیستید کنار آن علامت <strong>(منها -)</strong> بگذارید. اگر بلد هستید اما وقت‌گیر است (مثل مسائل طولانی شیمی یا فیزیک) کنار آن علامت <strong>(ضربدر ×)</strong> بگذارید.</li>
  <li><strong>گذر دوم:</strong> پس از اتمام دفترچه، اکنون به سراغ سوالات ضربدردار برگردید و با خیالی آسوده‌تر (چون مطمئن هستید سوالات آسان را از دست نداده‌اید) به حل آن‌ها بپردازید.</li>
</ul>

<h2>۳. تکنیک زمان‌های نقصانی</h2>
<p>این تکنیک تکمیل‌کننده روش ضربدر و منهاست. در این روش، شما برای هر درس زمانی <strong>کمتر از زمان استاندارد</strong> در نظر می‌گیرید.</p>
<ul>
  <li>مثلاً اگر برای زیست‌شناسی ۴۰ دقیقه زمان استاندارد دارید، در ذهن خود (و در ساعت مچی‌تان) ۳۰ دقیقه زمان در نظر بگیرید.</li>
  <li>پس از ۳۰ دقیقه، زیست را رها کرده و به سراغ درس بعدی بروید.</li>
  <li>در انتهای آزمون، شما مثلاً ۳۰ دقیقه زمان ذخیره شده (نقصانی) دارید که می‌توانید آن را به دروسی که نقاط قوتتان است یا سوالات ضربدردار اختصاص دهید.</li>
</ul>

<h2>۴. خواندن دقیق صورت سوال و افعال پایانی</h2>
<p>آمارها نشان می‌دهد بیش از ۳۰٪ اشتباهات داوطلبان برتر، ناشی از بی‌دقتی در خواندن صورت سوال است، نه عدم تسلط بر مبحث!</p>
<ul>
  <li>افعال منفی و مثبت را با دقت ببینید: "است/نیست"، "می‌باشد/نمی‌باشد"، "ندارد/دارد".</li>
  <li>به کلمات قیدی دقت کنید: "به ترتیب"، "برخلاف"، "همانند"، "به تقریب".</li>
  <li>تکنیک: دور افعال پایانی صورت سوال دایره بکشید تا چشمتان خطای دید نداشته باشد.</li>
</ul>

<h2>۵. تکنیک کشف تله‌های تستی طراحان</h2>
<p>طراحان سوال از الگوهای خاصی برای به اشتباه انداختن داوطلبان استفاده می‌کنند.</p>
<ul>
  <li><strong>تله گزینه اول:</strong> طراح پاسخ غلطی که به ذهن داوطلب عجول می‌رسد را در گزینه ۱ قرار می‌دهد. همیشه هر ۴ گزینه را تا انتها بخوانید، حتی اگر مطمئن هستید گزینه ۱ درست است!</li>
  <li><strong>تله واحدهای اندازه‌گیری:</strong> در فیزیک و شیمی، طراح در صورت سوال داده‌ها را بر حسب گرم می‌دهد و در گزینه‌ها کیلوگرم می‌خواهد.</li>
  <li><strong>تله شباهت ظاهری:</strong> در زیست، گزینه‌هایی با کلمات مشابه (مثل گلیکوژن/گلوکاگون یا سانتریول/سانترومر) برای فریب ذهن خسته قرار داده می‌شوند.</li>
</ul>

<h2>۶. استفاده از دفترچه خطاها (Error Log) پس از آزمون</h2>
<p>آزمون دادن بدون تحلیل، هدر دادن مطلق زمان است.</p>
<ul>
  <li>هر تستی که اشتباه زدید، یا با شک درست زدید را در یک دفترچه یادداشت کنید.</li>
  <li>دلیل اشتباه را صادقانه بنویسید: بی‌دقتی محاسباتی؟ نخواندن دقیق سوال؟ فراموشی فرمول؟ عدم تسلط مفهومی؟</li>
  <li>مرور این دفترچه قبل از آزمون بعدی، اشتباهات تکراری شما را تا حد صفر کاهش می‌دهد.</li>
</ul>

<h2>۷. کنترل هیجانات و شرایط روانی در طول آزمون</h2>
<p>استرس می‌تواند قشر پیش‌پیشانی مغز (مسئول تصمیم‌گیری و منطق) را مختل کند.</p>
<ul>
  <li>اگر به ۵ سوال پشت سر هم نتوانستید جواب دهید، دچار پانیک نشوید. نفس عمیق بکشید (تکنیک تنفس ۴-۷-۸).</li>
  <li>با خود تکرار کنید: "اگر این سوالات برای من سخت است، برای سایر داوطلبان هم سخت است."</li>
  <li>هرگز در طول آزمون در مورد نتیجه نهایی و رتبه خیال‌پردازی یا فاجعه‌سازی نکنید؛ فقط روی سوالی که در همان لحظه می‌خوانید تمرکز کنید.</li>
</ul>

<h3>جدول خلاصه علائم مدیریت زمان</h3>
<table>
  <tr>
    <th>علامت پیشنهادی</th>
    <th>وضعیت سوال</th>
    <th>اقدام مورد نیاز در حین آزمون</th>
  </tr>
  <tr>
    <td><strong>بدون علامت</strong></td>
    <td>آسان و مسلط</td>
    <td>بلافاصله حل شده و وارد پاسخبرگ شود.</td>
  </tr>
  <tr>
    <td><strong>ضربدر (×)</strong></td>
    <td>بلدم اما وقت‌گیر است / شک بین ۲ گزینه</td>
    <td>رد شدن موقت؛ بررسی مجدد در زمان‌های نقصانی انتهای آزمون.</td>
  </tr>
  <tr>
    <td><strong>منها (-)</strong></td>
    <td>اصلاً مبحث را نخوانده‌ام / بسیار سخت</td>
    <td>رها کردن کامل سوال؛ عدم اختصاص زمان اضافه به آن.</td>
  </tr>
</table>
    \n`
  },
  {
    id: 'study-methods-active-recall',
    category: 'روش مطالعه',
    categoryColor: '#10b981',
    icon: '🧠',
    title: 'روش Active Recall و Spaced Repetition: علمی‌ترین و قطعی‌ترین روش یادگیری',
    summary: 'بررسی جامع و علمی دو تکنیک قدرتمند یادگیری (بازیابی فعال و تکرار فاصله‌دار) که تحقیقات علوم شناختی ثابت کرده‌اند بازدهی مطالعه را تا ۳ برابر افزایش می‌دهند.',
    readTime: 8,
    date: '1405/05/15',
    content: `\n
<h1>🧠 روش Active Recall و Spaced Repetition: علمی‌ترین و قطعی‌ترین روش یادگیری</h1>

<p>بسیاری از دانش‌آموزان و دانشجویان ساعت‌ها وقت خود را صرف خواندن خط به خط کتاب، هایلایت کردن با رنگ‌های مختلف و بازخوانی مجدد (Rereading) می‌کنند. اما تحقیقات گسترده در حوزه <strong>علوم شناختی (Cognitive Science)</strong> نشان داده است که این روش‌ها با وجود ایجاد "توهم یادگیری"، در حافظه بلندمدت کمترین اثر را دارند. در این مقاله به معرفی دو ابزار قدرتمند می‌پردازیم که رتبه‌های برتر در سراسر جهان از آن‌ها استفاده می‌کنند.</p>

<h2>توهم تسلط (Illusion of Competence) چیست؟</h2>
<p>وقتی شما یک متن را برای بار دوم یا سوم می‌خوانید، متن برایتان آشنا به نظر می‌رسد. مغز این "آشنایی بصری" را با "یادگیری عمیق" اشتباه می‌گیرد. شما احساس می‌کنید کاملاً مسلط هستید، اما در جلسه آزمون متوجه می‌شوید که قادر به یادآوری و پردازش اطلاعات نیستید. راه حل چیست؟ شکستن این توهم از طریق <strong>بازیابی فعال</strong>.</p>

<h2>Active Recall (بازیابی فعال) چیست؟</h2>
<p>اکتیو ریکال یعنی به جای اینکه اطلاعات را وارد مغز کنید (با خواندن مجدد)، تلاش کنید اطلاعات را <strong>از مغز خارج کنید</strong>. عمل استخراج اطلاعات از حافظه، باعث ضخیم‌تر شدن غلاف میلین و تقویت اتصالات سیناپسی در مغز می‌شود.</p>

<h3>چگونه Active Recall را اجرا کنیم؟</h3>
<ul>
  <li><strong>کتاب را ببندید و بنویسید:</strong> بعد از خواندن یک فصل یا مبحث، کتاب را ببندید. یک کاغذ سفید بردارید و هرآنچه یادتان مانده را به صورت نقشه ذهنی (Mind Map) یا بولت‌پوینت بنویسید. سپس کتاب را باز کنید و ببینید چه چیزهایی را جا انداخته‌اید.</li>
  <li><strong>طرح سوال از خود:</strong> حین مطالعه، به جای هایلایت کردن، در حاشیه کتاب برای خودتان سوال طرح کنید. در دفعات بعدی مرور، فقط به سوالات نگاه کنید و سعی کنید جواب را از حفظ بگویید.</li>
  <li><strong>فلش‌کارت‌ها (Flashcards):</strong> استفاده از فلش‌کارت‌های فیزیکی یا دیجیتالی (مثل Anki) یکی از بهترین روش‌های اجرای این تکنیک است.</li>
  <li><strong>تست زدن:</strong> تست زدن صرفاً ابزار سنجش نیست، بلکه <strong>بهترین ابزار یادگیری</strong> است. تست زدن، بالاترین سطح Active Recall است زیرا شما را مجبور به تحلیل و پردازش اطلاعات از حافظه می‌کند.</li>
</ul>

<h2>Spaced Repetition (تکرار با فاصله‌های زمانی) چیست؟</h2>
<p>در سال ۱۸۸۵، هرمان ابینگهاوس نموداری به نام <strong>منحنی فراموشی (Forgetting Curve)</strong> را معرفی کرد. این منحنی نشان می‌دهد که اگر اطلاعاتی که امروز یاد می‌گیریم را مرور نکنیم، در کمتر از یک هفته بیش از ۷۰٪ آن‌ها را فراموش خواهیم کرد. Spaced Repetition روشی برای هک کردن این منحنی است.</p>

<p>به جای مرور متراکم (Cramming) - مثلاً خواندن یک درس به مدت ۵ ساعت در روز قبل از امتحان - باید آن ۵ ساعت را در بازه‌های زمانی مختلف توزیع کنید. هر بار که اطلاعات در حال محو شدن از حافظه است، با یک مرور مجدد، آن را به سطح ۱۰۰٪ برمی‌گردانیم و با هر مرور، شیب منحنی فراموشی کندتر می‌شود.</p>

<h3>الگوی پیشنهادی برای فواصل مرور:</h3>
<ul>
  <li><strong>مرور اول:</strong> ۲۴ ساعت بعد از مطالعه اولیه (بسیار حیاتی)</li>
  <li><strong>مرور دوم:</strong> ۳ روز بعد</li>
  <li><strong>مرور سوم:</strong> ۱ هفته بعد</li>
  <li><strong>مرور چهارم:</strong> ۱ ماه بعد</li>
  <li><strong>مرور پنجم:</strong> ۳ تا ۴ ماه بعد (مرورهای زمان جمع‌بندی)</li>
</ul>

<h2>ترکیب جادویی: Active Recall + Spaced Repetition</h2>
<p>استفاده همزمان از این دو تکنیک، قدرتمندترین استراتژی یادگیری شناخته شده در جهان است. یعنی در بازه‌های زمانی مشخص شده (Spaced Repetition)، کتاب را بازخوانی نکنید، بلکه از طریق حل تست، فلش‌کارت یا بستن کتاب و یادآوری (Active Recall) مطالب را مرور کنید.</p>

<h3>چطور در اپلیکیشن PlanEx از این استراتژی استفاده کنیم؟</h3>
<p>سیستم برنامه‌ریزی PlanEx به شما اجازه می‌دهد تا بازه‌های زمانی مرور را در پلنر خود ثبت کنید. توصیه می‌کنیم در بخش تگ‌های دروس (مانند مرور اول، مرور دوم و...) از رنگ‌بندی‌های مختلف استفاده کنید تا فواصل زمانی را به صورت بصری مدیریت کنید و در بخش گزارش‌ها، میزان پایبندی خود به مرورها را رصد کنید.</p>
    \n`
  },
  {
    id: 'daily-routine-successful-student',
    category: 'برنامه روزانه',
    categoryColor: '#ec4899',
    icon: '☕',
    title: 'برنامه روزانه و سبک زندگی یک دانش‌آموز/دانشجوی فوق‌موفق: از صبح تا شب',
    summary: 'بررسی جامع ریزعادت‌ها، زمان‌بندی دقیق استراحت و مطالعه، تغذیه، خواب و ورزش برای ایجاد یک روتین روزانه پایدار و رتبه‌ساز.',
    readTime: 10,
    date: '1405/05/08',
    content: `\n
<h1>☕ برنامه روزانه و سبک زندگی یک دانش‌آموز/دانشجوی فوق‌موفق</h1>

<p>رتبه‌های برتر و دانشجویان موفق، لزوماً باهوش‌تر از بقیه نیستند؛ بلکه آن‌ها دارای <strong>سیستم‌ها و روتین‌های روزانه</strong> پایدار و علمی هستند. موفقیت در آزمون‌های بزرگ نیازمند مدیریت انرژی، تمرکز و زمان است. در این مقاله یک برنامه روزانه کامل بر مبنای ساعت بیولوژیک بدن (Circadian Rhythm) ارائه شده است.</p>

<h2>بخش اول: روتین صبحگاهی (Morning Routine) - تنظیم لحن روز</h2>
<p>نحوه گذراندن اولین ساعت پس از بیداری، کیفیت کل روز شما را تعیین می‌کند.</p>
<ul>
  <li><strong>۰۶:۰۰ | بیداری قطعی:</strong> بیدار شدن بدون زدن دکمه Snooze. گوشی یا آلارم را در سمت دیگر اتاق قرار دهید تا مجبور شوید از تخت خارج شوید.</li>
  <li><strong>۰۶:۰۵ - ۰۶:۱۵ | فعال‌سازی بدن:</strong> نوشیدن یک لیوان آب ولرم (برای رفع دهیدراتاسیون شبانه) + ۱۰ دقیقه حرکات کششی، یوگا یا طناب زدن سبک برای افزایش جریان خون در مغز.</li>
  <li><strong>۰۶:۱۵ - ۰۶:۴۵ | تغذیه و تمرکز:</strong> مصرف صبحانه‌ای سرشار از پروتئین و چربی‌های سالم (تخم‌مرغ، گردو، پنیر). اجتناب از قندهای ساده و کربوهیدرات‌های تصفیه شده که باعث افت انرژی در اواسط صبح می‌شوند. دوری کامل از شبکه‌های اجتماعی در این زمان.</li>
  <li><strong>۰۶:۴۵ - ۰۷:۰۰ | برنامه‌ریزی:</strong> بررسی پلن مطالعه امروز، آماده‌سازی میز کار و تعیین مهم‌ترین هدف روز (MIT - Most Important Task).</li>
</ul>

<h2>بخش دوم: ساعات اوج تمرکز (Deep Work Blocks)</h2>
<p>صبح‌ها مغز بیشترین ظرفیت برای پردازش اطلاعات جدید و سخت را دارد.</p>
<ul>
  <li><strong>۰۷:۰۰ – ۰۹:۰۰ | بلاک مطالعاتی اول (قورباغه‌ات را قورت بده):</strong>
    <ul>
      <li>این زمان باید به سخت‌ترین، مهم‌ترین و چالش‌برانگیزترین درس (مثلاً زیست‌شناسی، ریاضیات سنگین یا دروس ماژور) اختصاص یابد.</li>
      <li>از تکنیک پومودورو پیشرفته (مثلاً ۵۰ دقیقه مطالعه عمیق + ۱۰ دقیقه استراحت مطلق دور از میز) استفاده کنید.</li>
    </ul>
  </li>
  <li><strong>۰۹:۱۵ – ۱۱:۱۵ | بلاک مطالعاتی دوم:</strong>
    <ul>
      <li>اختصاص به درسی با سختی متوسط رو به بالا + تست‌زنی آموزشی و تحلیل دقیق.</li>
    </ul>
  </li>
  <li><strong>۱۱:۳۰ – ۱۳:۰۰ | بلاک مطالعاتی سوم:</strong>
    <ul>
      <li>مرور مباحث روز گذشته، زدن تست‌های جامع یا مطالعه درسی با بار تحلیلی کمتر.</li>
    </ul>
  </li>
</ul>

<h2>بخش سوم: بازیافت انرژی و استراحت میانه روز</h2>
<p>ساعات ظهر معمولاً با افت طبیعی انرژی بدن همراه است (Post-lunch Dip).</p>
<ul>
  <li><strong>۱۳:۰۰ – ۱۴:۰۰ | ناهار و قطع ارتباط با درس:</strong> دور از محیط مطالعه ناهار بخورید. با خانواده معاشرت کنید.</li>
  <li><strong>۱۴:۰۰ – ۱۴:۳۰ | چرت نیروبخش (Power Nap):</strong> خواب کوتاه ظهر (حداکثر ۲۰ تا ۳۰ دقیقه) عملکرد شناختی را در عصر به شدت افزایش می‌دهد. دقت کنید خواب بیش از ۳۰ دقیقه شما را وارد فاز خواب عمیق کرده و باعث گیجی (Sleep Inertia) می‌شود.</li>
</ul>

<h2>بخش چهارم: مطالعات عصرگاهی و مرور</h2>
<ul>
  <li><strong>۱۴:۳۰ – ۱۷:۰۰ | بلاک مطالعاتی چهارم:</strong>
    <ul>
      <li>انرژی شما بازگشته است. زمان مناسبی برای حل مسائل چالشی، فیزیک، شیمی یا فارماکولوژی.</li>
    </ul>
  </li>
  <li><strong>۱۷:۱۵ – ۱۹:۰۰ | بلاک مطالعاتی پنجم (آزمون و مرور):</strong>
    <ul>
      <li>این زمان را به حل تست‌های پوششی از مباحث روزهای قبل، آزمون‌های زمان‌دار و بررسی دفترچه خطاها اختصاص دهید.</li>
    </ul>
  </li>
</ul>

<h2>بخش پنجم: روتین شبانگاهی (Evening Routine) - فرود نرم</h2>
<p>تثبیت اطلاعات در مغز، در زمان خواب رخ می‌دهد. آماده‌سازی برای خواب بسیار مهم است.</p>
<ul>
  <li><strong>۱۹:۰۰ – ۲۰:۰۰ | ورزش و شام:</strong> ۳۰ تا ۴۰ دقیقه ورزش هوازی (پیاده‌روی تند، دویدن) برای دفع کورتیزول (هورمون استرس) انباشته شده در طول روز. سپس صرف شام سبک.</li>
  <li><strong>۲۰:۳۰ – ۲۲:۰۰ | بلاک نهایی (مرور سبک و حفظیات):</strong>
    <ul>
      <li>این زمان برای خواندن مطالب سنگین و جدید مناسب نیست. به حفظیات، لغات زبان، تاریخ ادبیات، مرور خلاصه‌ها و جداول اختصاص دهید.</li>
    </ul>
  </li>
  <li><strong>۲۲:۰۰ – ۲۲:۳۰ | برنامه‌ریزی فردا و آرامش:</strong>
    <ul>
      <li>نوشتن برنامه فردا در پلنر. دوری مطلق از نور آبی موبایل و مانیتور (Digital Sunset).</li>
    </ul>
  </li>
  <li><strong>۲۲:۳۰ – ۲۳:۰۰ | خواب:</strong> خوابیدن در محیطی کاملاً تاریک و خنک. حداقل ۷ تا ۸ ساعت خواب شبانه برای تثبیت حافظه (Memory Consolidation) الزامی و غیرقابل مذاکره است.</li>
</ul>

<h3>نکته کلیدی در اجرای روتین</h3>
<p>این برنامه یک <strong>چارچوب ایده‌آل</strong> است. قرار نیست از روز اول بتوانید ۱۰۰٪ آن را اجرا کنید. اگر در میانه روز برنامه‌تان به هم ریخت، خودزنی نکنید. مهم‌ترین ویژگی افراد موفق، توانایی بازگشت سریع به مسیر بعد از یک لغزش است. برنامه را شخصی‌سازی کنید و به مرور زمان آن را بهبود ببخشید.</p>
    \n`
  }
];
