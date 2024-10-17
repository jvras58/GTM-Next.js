"use client";

import { notFound } from "next/navigation";

const betsData = {
"betinha": {
name: "Betinha",
iframeUrl: "https://www.betinha.com",
},
"estrela-bet": {
name: "Estrela - Bet",
iframeUrl: "https://www.estrelabet.com",
},
"jogo-de-ouro": {
name: "Jogo de Ouro",
iframeUrl: "https://www.jogodeouro.com",
},
};

const BetIframePage = ({ params }) => {
const { bet } = params;

// Mapeia o slug da rota para os dados da aposta
const selectedBet = betsData[bet.toLowerCase()];

// Se a aposta não for encontrada, retorna um 404
if (!selectedBet) {
return notFound();
}

return (
<div className="w-full h-screen flex justify-center items-center">
    <iframe
    src={selectedBet.iframeUrl}
    title={selectedBet.name}
    className="w-full h-full border-none"
    loading="lazy"
    />
</div>
);
};

export default BetIframePage;
