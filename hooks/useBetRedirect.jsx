export const useBetRedirect = () => {
const handleRedirect = async (iframeUrl) => {
    console.log("Chamando API do Puppeteer para URL:", iframeUrl);

    try {
    const response = await fetch("/api/open-bet", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: iframeUrl }),
    });

    const data = await response.json();
    console.log("Resposta da API do Puppeteer:", data);

    if (data.success) {
        console.log("Puppeteer rodou com sucesso.");
    } else {
        console.error("Erro ao abrir o site no Puppeteer:", data.error);
    }
    } catch (error) {
    console.error("Erro ao chamar a API do Puppeteer:", error);
    }
};

return { handleRedirect };
};
