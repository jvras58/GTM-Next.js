

"use client";

import Link from "next/link";

const BetCard = ({ name, image, dbParam }) => {
return (
<div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-32 object-cover" />
    <div className="p-4">
    <h2 className="text-lg font-semibold">{name}</h2>
    <p className="text-sm text-gray-500">Afiliado: {dbParam}</p>
    
    <Link href={`/bets/${dbParam}`}>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Acessar
        </button>
    </Link>
    </div>
</div>
);
};

export default BetCard;
