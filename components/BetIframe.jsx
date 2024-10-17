"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BetCard = ({ name, image, iframeUrl }) => {
    const [showIframe, setShowIframe] = useState(false);  
    const handleToggleIframe = () => {
        setShowIframe(!showIframe);
    };

    return (
        <Card className="max-w-sm mx-auto mt-4">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent>
                {!showIframe ? (
                    <img src={image} alt={name} className="w-full h-32 object-cover" />
                ) : (
                    <div className="w-full h-96 flex justify-center items-center">
                        <iframe
                            src={iframeUrl}
                            title={name}
                            className="w-full h-full border-none"
                        />
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Button onClick={handleToggleIframe}>
                    {showIframe ? "Fechar" : "Acessar"}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BetCard;