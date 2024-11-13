"use client";

import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BetCard = ({ name, image, dbParam }) => {
const router = useRouter();

const handleRedirect = () => {
if (dbParam) {
    console.log(`Redirecionando para /afiliados/${dbParam}`);
    router.push(`/afiliados/${dbParam}`);
} else {
    console.error("dbParam está indefinido");
}
};

return (
<div className="container mx-auto mt-4">
    <Card className="max-w-sm mx-auto mt-4">
    <CardHeader>
        <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
        <Image
        src={image}
        alt={name}
        className="w-full h-32 object-cover"
        width={500}
        height={200}
        priority={false}
        />
    </CardContent>
    <CardFooter className="flex justify-center">
        <Button id='Acessar-click' onClick={handleRedirect}>Acessar</Button>
    </CardFooter>
    </Card>
</div>
);
};

export default BetCard;