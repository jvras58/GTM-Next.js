import { useRouter } from "next/navigation";

export const useBetRedirect = () => {
const router = useRouter();

const handleRedirect = async (name, iframeUrl) => {
// Primeiro, fazer uma requisição para a rota de API que usa o Puppeteer
try {
    const response = await fetch("/api/open-bet", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: iframeUrl }),
    });

    const data = await response.json();

    if (data.success) {
    // Se o Puppeteer rodar com sucesso, redireciona para a página com o iframe
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    router.push(`/bets/${slug}`);
    } else {
    console.error("Erro ao abrir o site no Puppeteer:", data.error);
    }
} catch (error) {
    console.error("Erro na requisição à API:", error);
}
};

return { handleRedirect };
};
