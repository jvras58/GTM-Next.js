"use client"

import BetCard from "@/components/BetIframe";
import photo from "@/public/assets/photo.png"


const Bet = () => {
return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 p-6">
    <BetCard
        name="Betinha"
        image={photo.src}
        iframeUrl="https://www.betinha.com"
    />
    <BetCard
        name="Estrela - Bet"
        image={photo.src}
        iframeUrl="https://www.estrelabet.com"
    />
    <BetCard
        name="Jogo de Ouro"
        image={photo.src}
        iframeUrl="https://www.jogodeouro.com"
    />
    </div>
);
}
export default Bet;