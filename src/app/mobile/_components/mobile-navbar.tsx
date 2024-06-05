import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import Link from "next/link";
import { apexFont } from "@/assets/fonts";

// Navbar used across the mobile website.
export default function MobileNavBar() {
    return (
        <nav className={`sticky flex justify-center ${apexFont.className}`}>
            <div className="flex justify-between content-center items-center container px-5 md:px-0 py-8">
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
                <div className="items-center mr-4 md:mr-8 lg:mr-12">
                    <div
                        className="flex flex-col"
                        onClick={() => console.log("menu")}
                    >
                        <strong>----</strong>
                    </div>
                </div>
            </div>
        </nav>
    );
}
