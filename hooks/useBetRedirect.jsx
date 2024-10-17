import { useRouter } from "next/navigation";

export const useBetRedirect = () => {
const router = useRouter();

const handleRedirect = (name, iframeUrl) => {

const encodedUrl = encodeURIComponent(iframeUrl);
const encodedName = encodeURIComponent(name);

router.push(`/bets/${encodedName}?url=${encodedUrl}`);
};

return { handleRedirect };
};
