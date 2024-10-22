"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import logo2 from "@/assets/email.png";
import Link from "next/link";
import { apexFont } from "@/assets/fonts";
import classnames from "classnames";
import { menuItems } from "@/utils/menu/menu-items";

// Navbar used across the website.
export default function NavBar() {
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
                                <li key = { index }>
                                    <Link
                                        href = { item.url }
                                        className="text-xl hover:text-highlight transition-all duration-300 flexitems-center justify-center"
                                        target = { item.target ?? '' }
                                    >
                                        {/* <div className="w-full flex justify-center text-3xl mb-1">
                                            { item.icon }   
                                        </div> */}
                                        { item.name }
                                    </Link>
                                </li>
                            ) 
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}
