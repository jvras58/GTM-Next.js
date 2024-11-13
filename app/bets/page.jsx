"use client";

import BetCard from "@/components/BetIframe";
import photo from "@/public/assets/photo.png";
import useFetchData from "@/hooks/useFetchData";

const Bet = () => {
const { data, loading } = useFetchData("cadrastro");

if (loading) {
return <div>Carregando...</div>;
}

const afiliados = data.filter(item => item.afiliado);

if (afiliados.length === 0) {
return <div>Nenhum afilhado encontrado no banco de dados.</div>;
}

return (
<div className="grid gap-4 grid-cols-1 md:grid-cols-3 p-6">
    {afiliados.map((afiliado) => (
    <BetCard
        key={afiliado.id}
        name={`${afiliado.afiliado} Dashboard`}
        image={photo.src}
        dbParam={afiliado.afiliado}
    />
    ))}
</div>
);
};

export default Bet;
