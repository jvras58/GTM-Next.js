"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
    name: "Home",
    path: "/",
    },
    {
    name: "serviços",
    path: "/servicos",
    },
    {
    name: "Aposta Ganha",
    path: "/apostaganha",
    },
    {
    name: "BetEu",
    path: "/bateu",
    },
    {
    name: "Betinha",
    path: "/betinha",
    },
    {
    name: "Estrela-Bet",
    path: "/estrelabet",
    },
    {
    name: "Jogo de Ouro",
    path: "/jogodeouro",
    },
    {
    name: "Bet Nacional",
    path: "/betnacional",
    },
]

const Nav = () => {
    const pathname = usePathname();

    return ( 
        <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`${
                    link.path === pathname && "text-accent border-b-2 border-accent"} 
                    capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            );
            })}
        </nav>
    );
    }

export default Nav;