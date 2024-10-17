const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Locahost : node pupt.js
(async () => {
    const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--enable-automation'],
    args: ['--no-sandbox', '--disable-setuid-sandbox',],
    headless: false // Deixe o navegador visível para testes
    });
    const page = await browser.newPage();

    await page.goto('https://www.google.com');

    await page.waitForSelector('#APjFqb');

    await page.type('#APjFqb', 'ping');
    await page.keyboard.press('Enter');

    await page.waitForSelector('#search');

    const screenshotsDir = path.resolve(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
    }

    await page.screenshot({ path: path.join(screenshotsDir, 'google_search.png') });

// await browser.close();
})();