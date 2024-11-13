"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const BetDashboard = () => {
const params = useParams();
const { bet } = params;
const [afilhiadoData, setAfilhiadoData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchAfilhiadoData = async () => {
    try {
    const afilhiadoQuery = query(
        collection(db, "cadastro"),
        where("afilhiado", "==", bet)
    );
    const querySnapshot = await getDocs(afilhiadoQuery);

    if (!querySnapshot.empty) {

        setAfilhiadoData(querySnapshot.docs[0].data());
    } else {

        setError(`Nenhum documento encontrado para o afilhiado: ${bet}`);
    }
    } catch (err) {
    console.error("Erro ao buscar dados do afilhiado:", err);
    setError(`Erro ao buscar dados do afilhiado: ${err.message}`);
    } finally {
    setLoading(false);
    }
};

fetchAfilhiadoData();
}, [bet]);

if (loading) {
return <div>Carregando...</div>;
}

if (error) {
return <div className="text-red-500">Erro: {error}</div>;
}

if (!afilhiadoData) {
return <div>Dados do afilhiado não encontrados.</div>;
}

return (
<div className="p-6">
    <h1 className="text-2xl font-bold">{afilhiadoData.nome} Dashboard</h1>
    <p className="mt-2 text-gray-700">CPF: {afilhiadoData.cpf}</p>
    <p className="mt-1 text-gray-700">Afilhiado: {afilhiadoData.afilhiado}</p>
    <p className="mt-1 text-gray-700">Outros dados: {afilhiadoData.testing}</p>
    {/* Adicione mais informações conforme necessário */}
</div>
);
};

export default BetDashboard;
