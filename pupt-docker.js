const puppeteer = require('puppeteer');
const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

// node pupt-docker.js   true ou node pupt-docker.js
// Verifica se o argumento "true" foi passado
const iniciarXvfb = process.argv.includes('true');

if (iniciarXvfb) {
    // Verifica se o Xvfb está em execução
    exec('pgrep Xvfb', (err, stdout, stderr) => {
        if (err || !stdout) {
            // Inicia o Xvfb se não estiver em execução
            exec('Xvfb :99 -screen 0 1280x1024x24 &', (err, stdout, stderr) => {
                if (err) {
                    console.error(`Erro ao iniciar o Xvfb: ${err}`);
                    return;
                }
                console.log(`Xvfb iniciado: ${stdout}`);
                iniciarPuppeteer(true);
            });
        } else {
            iniciarPuppeteer(true);
        }
    });
} else {
    iniciarPuppeteer(false);
}

function iniciarPuppeteer(usandoXvfb) {
    (async () => {
        const args = ['--no-sandbox', '--disable-setuid-sandbox'];
        if (usandoXvfb) {
            args.push('--display=:99');
        }

        const browser = await puppeteer.launch({
            ignoreDefaultArgs: ['--enable-automation'],
            args: args,
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
}