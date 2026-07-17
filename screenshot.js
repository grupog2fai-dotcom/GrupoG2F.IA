const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  console.log('Scrolling to trigger animations...');
  // Scroll down multiple times to trigger all whileInView animations
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.waitForTimeout(300);
  }
  
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  console.log('Waiting for animations to settle...');
  await page.waitForTimeout(2000);
  
  console.log('Capturing full page screenshot...');
  await page.screenshot({ path: 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\f2d3d596-4784-4b05-a48c-6764a70f0fde\\fable5_native_screenshot.png', fullPage: true });
  
  await browser.close();
  console.log('Done!');
})();
