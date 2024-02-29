import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo-footer.svg";
import { apexFont } from "@/assets/fonts";
import clutchRecognitionImg from "@/assets/clutch/clutch-recognition.png";
import clutchStarsImg from "@/assets/clutch/clutch-stars.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import clutchIcon from "@/assets/icons/clutch.svg";

const LOCATIONS = [
    {
        country: "USA",
        location: "1900 N Bayshore Drive 1A/1B, Miami.",
    },
    {
        country: "Uruguay",
        location: "Bvar. España 2476, Montevideo.",
    },
    {
        country: "Argentina",
        location: "San Lorenzo 1440 - Piso 5, Rosario.",
    },
    {
        country: "Panamá",
        location: "Av. Centenario, Torre de las Américas p12.",
    },
    {
        country: "Chile",
        location: "Avenida Suecia 0142 - Of. 202, Santiago.",
    },
    {
        country: "Colombia",
        location: "Carrera 14 # 93-68, Bogotá",
    },
];

const NAVIGATION_LINKS = [
    {
        text: "About us",
        href: "#",
    },
    {
        text: "Why us",
        href: "#",
    },
    {
        text: "Benefits",
        href: "#",
    },
    {
        text: "Hiring process",
        href: "#",
    },
    {
        text: "Blog",
        href: "#",
    },
    {
        text: "Contact",
        href: "#",
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={`${apexFont.className} py-28 bg-[--background-color-86] text-xl flex flex-col gap-8`}
        >
            <div className="container mx-auto flex gap-16 justify-between">
                <Image
                    src={logo}
                    alt="Applica Corp's logo"
                    width={250}
                    height={220}
                />

                <div>
                    <ul>
                        {LOCATIONS.map((l, index) => (
                            <li key={index} className="my-1">
                                <strong>{l.country}</strong>
                                <span className="font-regular ms-3">
                                    {l.location}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <ul>
                        {NAVIGATION_LINKS.map((nl, index) => (
                            <li key={index} className="my-1">
                                <Link href={nl.href} className="font-bold">
                                    {nl.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-end justify-between">
                    <div className="flex gap-2">
                        <Link
                            href="https://www.linkedin.com/company/applica-corp/"
                            target="_blank"
                        >
                            <Image src={linkedinIcon} alt="" width={48} />
                        </Link>

                        <Link
                            href="https://www.instagram.com/applica.corp/"
                            target="_blank"
                        >
                            <Image src={instagramIcon} alt="" width={48} />
                        </Link>

                        <Link
                            href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay"
                            target="_blank"
                        >
                            <Image src={clutchIcon} alt="" width={48} />
                        </Link>
                    </div>

                    <div className="flex gap-8">
                        <Image src={clutchStarsImg} alt="" />
                        <Image src={clutchRecognitionImg} alt="" height={150} />
                    </div>
                </div>
            </div>

            <p className="mx-auto text-muted text-base">
                &copy; {currentYear} Applica Corp. All rights reserved.
            </p>
        </footer>
    );
}
