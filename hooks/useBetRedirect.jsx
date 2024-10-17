import { useRouter } from "next/navigation";

export const useBetRedirect = () => {
const router = useRouter();

const handleRedirect = (name, iframeUrl) => {
// Codifica os dados para a URL
const encodedUrl = encodeURIComponent(iframeUrl);
const encodedName = encodeURIComponent(name);

// Redireciona para a rota dinâmica /bets/[bet]
router.push(`/bets/${encodedName}?url=${encodedUrl}`);
};

return { handleRedirect };
};
