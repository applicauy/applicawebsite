import Image from "next/image";
import logo from "@/assets/logo/logo-footer.svg";
import { apexFont } from "@/assets/fonts";
import clutchRecognitionImg from "@/assets/clutch/clutch-recognition.png";
import clutchStarsImg from "@/assets/clutch/clutch-stars.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import clutchIcon from "@/assets/icons/clutch.svg";
import LetsTalkSection from "../_sections/lets-talk-section";

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
        location: "Av. Centenario - Torre de las Américas p12, Ciudad de Panamá.",
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
        href: "#about-us",
    },
    {
        text: "Benefits",
        href: "#benefits",
    },
    {
        text: "Hiring process",
        href: "#hiring-process",
    },
    {
        text: "News",
        href: "news",
    },
    {
        text: "Contact",
        href: "contact",
    },
];

export default function Footer(
    {
        handleScroll
    } :
    {
        handleScroll: any
    }
) {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <LetsTalkSection />

            <footer
                className={`${apexFont.className} py-16 bg-secondary-bg text-xl flex flex-col gap-8`}
                style = {{ paddingLeft: '6rem', paddingRight: '6rem' }}
            >
                <div className="container mx-25 flex flex-col md:flex-row gap-16 justify-between">
                    <a href="/">
                        <Image
                            src={logo}
                            alt="Applica Corp's logo"
                            width={250}
                            height={220}
                        />
                    </a>

                    <div>
                        <ul>
                            {LOCATIONS.map((l, index) => (
                                <li key={index} className="my-1">
                                    <span className="font-medium">{l.country}</span>
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
                                nl.href.startsWith('#') ? 
                                <a
                                    href = { nl.href }
                                    onClick={(e) => {
                                            e.preventDefault();
                                            handleScroll(nl.href.slice(1));
                                        }
                                    }
                                    className="text-xl hover:text-highlight transition-all duration-300 flex items-start text-left justify-start font-medium"
                                    key={index}
                                >
                                    {nl.text}
                                </a> :
                                <li key={index} className="my-1">
                                    <a href={nl.href} className="font-medium hover:text-highlight">
                                        {nl.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                        <div className="flex gap-2">
                            <a
                                href="https://www.linkedin.com/company/applica-corp/"
                                target="_blank"
                            >
                                <Image src={linkedinIcon} alt="LinkedIn" width={48} />
                            </a>

                            <a
                                href="https://www.instagram.com/applica.corp/"
                                target="_blank"
                            >
                                <Image src={instagramIcon} alt="Instagram" width={48} />
                            </a>

                            <a
                                href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay"
                                target="_blank"
                            >
                                <Image src={clutchIcon} alt="Clutch" width={48} />
                            </a>
                        </div>

                        <div className="flex gap-8" role="link">
                            <a
                                href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay#highlights"
                                target="_blank"
                            >
                                <Image
                                    src={clutchStarsImg}
                                    alt="AplicaCorp at Clutch"
                                />
                            </a>
                            <a
                                href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay#highlights"
                                target="_blank"
                            >
                                <Image
                                    src={clutchRecognitionImg}
                                    alt="Clutch recognition for ApplicaCorp"
                                    height={150}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <p className="mx-auto text-muted text-base">
                    &copy; {currentYear} Applica Corp. All rights reserved.
                </p>
            </footer>
        </>
    );
}
