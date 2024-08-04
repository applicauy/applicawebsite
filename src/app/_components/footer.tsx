import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/logo-footer.svg";
import { apexFont } from "@/assets/fonts";
import clutchRecognitionImg from "@/assets/clutch/clutch-recognition.png";
import clutchStarsImg from "@/assets/clutch/clutch-stars.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import clutchIcon from "@/assets/icons/clutch.svg";

/**
 * Array of locations.
 * @type {Array<{ country: string, location: string }>}
 */
export const LOCATIONS: {
    country: string;
    location: string;
}[] = [
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
        location: "Carrera 14 # 93-68, Bogotá.",
    },
];

/**
 * Navigation links for the footer component.
 */
export const NAVIGATION_LINKS = [
    {
        text: "About us",
        href: "/#about-us",
    },
    {
        text: "Benefits",
        href: "/#benefits",
    },
    {
        text: "Hiring process",
        href: "/#hiring-process",
    },
    {
        text: "Contact",
        href: "/contact",
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={`${apexFont.className} py-28 bg-secondary-bg text-xl flex flex-col gap-8`}
        >
            <div className="container mx-auto flex flex-col md:flex-row gap-16 justify-between">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Applica Corp's logo"
                        width={250}
                        height={220}
                    />
                </Link>

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

                    <div className="flex gap-8" role="link">
                        <Link
                            href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay#highlights"
                            target="_blank"
                        >
                            <Image
                                src={clutchStarsImg}
                                alt="AplicaCorp at Clutch"
                            />
                        </Link>
                        <Link
                            href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay#highlights"
                            target="_blank"
                        >
                            <Image
                                src={clutchRecognitionImg}
                                alt="Clutch recognition for ApplicaCorp"
                                height={150}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <p className="mx-auto text-muted text-base">
                &copy; {currentYear} Applica Corp. All rights reserved.
            </p>
        </footer>
    );
}
