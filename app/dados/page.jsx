"use client";

import { useState } from 'react';
import useAddData from "@/hooks/addcollection";
import cadastro from "../../output/cadastro.json";
import deposito from "../../output/deposito.json";

const Bet = () => {
const { addData: cadastroadd } = useAddData("cadastro");
const { addData: depositoadd } = useAddData("deposito");
const [isDataAdded, setIsDataAdded] = useState(false);

const handleAddData = () => {
cadastroadd(cadastro);
depositoadd(deposito);
setIsDataAdded(true);
};

return (
<div className="grid gap-4 grid-cols-1 md:grid-cols-3 p-6 rounded-lg shadow-lg">
    <button 
    onClick={handleAddData} 
    className={`py-2 px-4 rounded-lg ${isDataAdded ? 'bg-green-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
    disabled={isDataAdded}
    >
    {isDataAdded ? 'Dados Adicionados' : 'Adicionar'}
    </button>
</div>
);
};

export default Bet;