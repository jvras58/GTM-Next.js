"use client";

import { useState } from "react";
import { useBetRedirect } from "@/hooks/useBetRedirect";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BetCard = ({ name, image, iframeUrl }) => {
const { handleRedirect } = useBetRedirect();
const [isLoading, setIsLoading] = useState(false);

const onClick = async () => {
setIsLoading(true); 
await handleRedirect(iframeUrl);
setIsLoading(false);
};

return (
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
    <CardFooter>
    <Button onClick={onClick} disabled={isLoading}>
        {isLoading ? "Carregando..." : "Acessar"}
    </Button>
    </CardFooter>
</Card>
);
};

export default BetCard;
