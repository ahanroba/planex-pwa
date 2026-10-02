const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

const VIEWPORT = {
  width: 430,
  height: 932,
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
};

(async () => {
  console.log('🚀 Starting screenshot capture...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  
  // Set User-Agent to iPhone
  await page.setUserAgent(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  );

  console.log('🌐 Loading planexapp.ir...');
  try {
    await page.goto('https://planexapp.ir', {
      waitUntil: 'domcontentloaded',
      timeout: 20000,
    });
  } catch (e) {
    console.log('⚠️ Navigation note:', e.message);
  }

  // Wait 4 seconds for PWA UI & charts to render
  await new Promise((r) => setTimeout(r, 4000));

  // Shot 1: Dashboard
  console.log('📸 Taking shot1.png (Dashboard)...');
  await page.screenshot({
    path: path.join(PUBLIC_DIR, 'shot1.png'),
    type: 'png',
  });
  console.log('✅ shot1.png saved');

  // Shot 2: Scroll down / Navigate to Pomodoro
  console.log('📸 Navigating for shot2.png (Pomodoro)...');
  await page.evaluate(() => {
    // Try to click pomodoro or scroll to timer section
    const navItems = Array.from(document.querySelectorAll('a, button, div, span'));
    const pomodoroBtn = navItems.find(el => el.textContent && (el.textContent.includes('تمرکز') || el.textContent.includes('پومودورو') || el.textContent.includes('Focus')));
    if (pomodoroBtn) {
      pomodoroBtn.click();
    } else {
      window.scrollBy(0, 700);
    }
  });
  await new Promise((r) => setTimeout(r, 2000));

  await page.screenshot({
    path: path.join(PUBLIC_DIR, 'shot2.png'),
    type: 'png',
  });
  console.log('✅ shot2.png saved');

  // Shot 3: Scroll down / Navigate to Analytics
  console.log('📸 Navigating for shot3.png (Analytics)...');
  await page.evaluate(() => {
    const navItems = Array.from(document.querySelectorAll('a, button, div, span'));
    const statsBtn = navItems.find(el => el.textContent && (el.textContent.includes('تحلیل') || el.textContent.includes('آمار') || el.textContent.includes('گزارش') || el.textContent.includes('Stats')));
    if (statsBtn) {
      statsBtn.click();
    } else {
      window.scrollTo(0, 1400);
    }
  });
  await new Promise((r) => setTimeout(r, 2000));

  await page.screenshot({
    path: path.join(PUBLIC_DIR, 'shot3.png'),
    type: 'png',
  });
  console.log('✅ shot3.png saved');

  await browser.close();
  console.log('🎉 Screenshot capture complete!');
})();
