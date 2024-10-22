"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import Link from "next/link";
import { apexFont } from "@/assets/fonts";
import classnames from "classnames";

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

                <ul className="hidden md:flex gap-10 h-fit max-h-fit self-center">
                    <li>
                        <Link href="/#about-us" className="text-xl hover:text-highlight transition-all duration-300">about us</Link>
                    </li>

                    <li>
                        <Link href="#services" className="text-xl hover:text-highlight transition-all duration-300">services</Link>
                    </li>

                    <li>
                        <Link
                            href="https://recruitcrm.io/jobs/applica_corp"
                            target="_blank"
                            className="text-xl hover:text-highlight transition-all duration-300"
                        >
                            careers
                        </Link>
                    </li>

                    <li>
                        <Link href="/news" className="text-xl hover:text-highlight transition-all duration-300">
                            news
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" className="text-xl hover:text-highlight transition-all duration-300">
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
