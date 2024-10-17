import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { exec } from "child_process";

export async function POST(request) {
const { url } = await request.json();

console.log("URL recebida para Puppeteer:", url);

if (!url) {
return NextResponse.json({ error: "URL não fornecida" }, { status: 400 });
}

try {
console.log("Iniciando Puppeteer...");

// Inicia o Xvfb
exec('Xvfb :99 -screen 0 1280x1024x24 &', (err, stdout, stderr) => {
    if (err) {
    console.error(`Erro ao iniciar o Xvfb: ${err}`);
    return;
    }
    console.log(`Xvfb iniciado: ${stdout}`);
});


const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--enable-automation'],
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--display=:99'],
    headless: false
});
const page = await browser.newPage();

await page.goto(url, { waitUntil: "networkidle0" });
console.log("Página carregada com sucesso no Puppeteer:", url);


return NextResponse.json({ success: true });
} catch (error) {
console.error("Erro ao usar Puppeteer:", error);
return NextResponse.json({ error: "Erro ao abrir o site" }, { status: 500 });
}
}