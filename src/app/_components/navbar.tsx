"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import Link from "next/link";
import { apexFont } from "@/assets/fonts";
import classnames from "classnames";

// Navbar used across the website.
export default function NavBar() {
    return (
        <nav className={`sticky flex justify-center ${apexFont.className}`}>
            <div className="flex justify-between content-center container px-5 md:px-0 py-8">
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

                <ul className="hidden md:flex gap-11 h-fit max-h-fit self-center">
                    <li>
                        <Link href="/#about-us">about us</Link>
                    </li>

                    <li>
                        <Link href="/#services-section">services</Link>
                    </li>

                    <li>
                        <Link
                            href="https://recruitcrm.io/jobs/applica_corp"
                            target="_blank"
                        >
                            careers
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact">
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
