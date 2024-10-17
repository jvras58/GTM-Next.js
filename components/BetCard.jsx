"use client";

import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BetCard = ({ name, image }) => {
const router = useRouter();

const generateSlug = (name) => {
return name.toLowerCase().replace(/\s+/g, '-');
};

const handleRedirect = () => {
const slug = generateSlug(name);
router.push(`/bets/${slug}`);
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
    <Button onClick={handleRedirect}>Acessar</Button>
    </CardFooter>
</Card>
);
};

export default BetCard;
