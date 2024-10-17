import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { exec } from "child_process";

// curl -X POST http://localhost:3000/api/open-bet -H "Content-Type: application/json" -d '{"url": "https://www.betinha.com"}'

// Função para abrir o iframe usando Puppeteer
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

// Inicializa o Puppeteer
const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--enable-automation'],
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--display=:99'],
    headless: false // Deixe o navegador visível para testes
});
const page = await browser.newPage();

// Acessa a URL do iframe
await page.goto(url, { waitUntil: "networkidle0" });
console.log("Página carregada com sucesso no Puppeteer:", url);

// Redireciona o usuário para a página de bets depois de abrir o Puppeteer
return NextResponse.json({ success: true });
} catch (error) {
console.error("Erro ao usar Puppeteer:", error);
return NextResponse.json({ error: "Erro ao abrir o site" }, { status: 500 });
}
}