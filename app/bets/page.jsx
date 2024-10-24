"use client";

import BetCard from "@/components/BetIframe";
import photo from "@/public/assets/photo.png";

const Bet = () => {
return (
<div className="grid gap-4 grid-cols-1 md:grid-cols-3 p-6">
    <BetCard
    name="Betinha"
    image={photo.src}
    iframeUrl="https://www.betinha.com"
    value={1}
    betAmount="1.00" 
    currency="BRL" 
    />
    <BetCard
    name="Estrela - Bet"
    image={photo.src}
    iframeUrl="https://www.estrelabet.com"
    value={2}
    betAmount="5.00" 
    currency="L" 
    />
    <BetCard
    name="Jogo de Ouro"
    image={photo.src}
    iframeUrl="https://www.jogodeouro.com"
    value={3}
    betAmount="3.00" 
    currency="B"
    />
</div>
);
};

export default Bet;
