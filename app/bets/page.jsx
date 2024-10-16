"use client"

import BetIframe from "@/components/BetIframe";
import {
Card,
CardHeader,
CardTitle,
CardContent,
CardFooter,
} from "@/components/ui/card";


const betsList = [
    { url: "https://betinha.com", title: "Betinha" },
    { url: "https://estrelabet.com", title: "Estrela - Bet" },
    { url: "https://jogodeouro.bet", title: "Jogo de Ouro" },
    { url: "https://betnacional.com", title: "Bet Nacional" },
    { url: "https://bateu.bet", title: "Bet EU" },
    { url: "https://apostaganha.bet", title: "Aposta Ganha" },

];


const BetsPage = () => {
return (
    <div>
    {betsList.map((bet, index) => (
        <Card key={index}>
        <CardHeader>
            <CardTitle>{bet.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <BetIframe url={bet.url} title={bet.title} />
        </CardContent>
        <CardFooter>
            {/* Adicione qualquer conteúdo adicional para o rodapé do card aqui */}
        </CardFooter>
        </Card>
    ))}
    </div>
  );
};

export default BetsPage;