require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://pump.fun/login');

  // Login
  await page.type('#email', process.env.PUMP_USER);
  await page.type('#password', process.env.PUMP_PASS);
  await page.click('#login-button');
  await page.waitForNavigation();

  console.log('Logged in successfully! Watching for spam...');

  // Monitor and delete spam (selectors need to be updated for real site)
  setInterval(async () => {
    const messages = await page.$$('.message');
    for (const msg of messages) {
      const text = await page.evaluate(el => el.innerText, msg);
      if (/pump this|moon soon|100x|airdrop/i.test(text)) {
        console.log("Deleting spam:", text);
        const deleteBtn = await msg.$('.delete-button');
        if (deleteBtn) await deleteBtn.click();
      }
    }
  }, 5000);
})();
