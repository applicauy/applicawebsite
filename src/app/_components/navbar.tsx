import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import Link from "next/link";
import { apexFont } from "@/assets/fonts";

// Navbar used across the website.
export default function NavBar({ isMobile }: any) {
    return isMobile ? (
        <></>
    ) : (
        <nav className={`sticky flex justify-center ${apexFont.className}`}>
            <div className="flex justify-between content-center container px-5 md:px-0 py-8">
                <div className="logo">
                    {/* If somoeone clicks the logo, then redirect him to the home view. */}
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
                        <Link href="#">about us</Link>
                    </li>

                    <li>
                        <Link href="#">services</Link>
                    </li>

                    <li>
                        <Link href="#">careers</Link>
                    </li>

                    <li>
                        <Link href="#">news</Link>
                    </li>

                    <li>
                        <Link href="/contact" className="text-highlight">
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
