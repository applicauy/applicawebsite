"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.webp";
import { apexFont } from "@/assets/fonts";
import { menuItems } from "@/utils/menu/menu-items";

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
        <nav className={`sticky flex justify-center ${apexFont.className} px-4 lg:px-24`}>
            <div className="flex justify-between content-center container md:px-0 py-4 lg:py-8">
                <div className="logo">
                    {/* If someone clicks the logo, then redirect him to the home view. */}
                    <a href="/">
                        <Image
                            alt="Applica's logo"
                            src={logo}
                            className="h-14 mdplus:h-20 md:h-16 w-auto"
                            loading="lazy"
                            width={300}
                            height={100}
                        />
                    </a>
                </div>

                <ul className={`hidden md:flex flex-row gap-6 lg:gap-10 h-fit max-h-fit self-center`}>
                    {
                        menuItems.map(
                            (item, index) => (
                                <li key={index}>
                                    {item.url.startsWith('#') ? (
                                        <a
                                            href={item.url}
                                            onClick={
                                                (e) => {
                                                    e.preventDefault();
                                                    handleScroll(item.url.slice(1));
                                                }
                                            }
                                            className="text-xl hover:text-highlight transition-all duration-300 flex items-center justify-center"
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <a
                                            href={item.url}
                                            className="text-xl hover:text-highlight transition-all duration-300 flex items-center justify-center"
                                            target={item.target ?? ''}
                                            onClick={ (event) => onMenuClick( event ) }
                                        >
                                            {item.name}
                                        </a>
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
