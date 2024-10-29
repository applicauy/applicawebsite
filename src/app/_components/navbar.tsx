"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import Link from "next/link";
import { apexFont } from "@/assets/fonts";
import { menuItems } from "@/utils/menu/menu-items";
import { useRouter } from "next/router";

// Navbar used across the website.
export default function NavBar(
    {
        onMenuClick,
        handleScroll
    } :
    {
        onMenuClick: any,
        handleScroll: any
    }
) {
    

    return (
        <nav className={`sticky flex justify-center ${apexFont.className} px-24`}>
            <div className="flex justify-between content-center container md:px-0 py-8">
                <div className="logo">
                    {/* If someone clicks the logo, then redirect him to the home view. */}
                    <Link href="/">
                        <Image
                            alt="Applica's logo"
                            src={logo}
                            className="h-14 md:h-20 w-auto"
                            priority
                        />
                    </Link>
                </div>

                <ul className="hidden md:flex flex-row gap-10 h-fit max-h-fit self-center">
                    {
                        menuItems.map(
                            (item, index) => (
                                <li key={index}>
                                    {item.url.startsWith('#') ? (
                                        <button
                                            onClick={() => handleScroll(item.url.slice(1))}
                                            className="text-xl hover:text-highlight transition-all duration-300 flex items-center justify-center"
                                        >
                                            {item.name}
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.url}
                                            className="text-xl hover:text-highlight transition-all duration-300 flex items-center justify-center"
                                            target={item.target ?? ''}
                                            onClick={ (event) => onMenuClick( event ) }
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ) 
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}
