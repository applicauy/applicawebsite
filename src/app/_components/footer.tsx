import '../styles/footer.scss';
import Image from "next/image";
import logo from "@/assets/logo/logo-footer.webp";
import { apexFont } from "@/assets/fonts";
import clutchRecognitionImg from "@/assets/clutch/clutch-recognition.webp";
import clutchStarsImg from "@/assets/clutch/clutch-stars.webp";
import linkedinIcon from "@/assets/icons/linkedin.webp";
import instagramIcon from "@/assets/icons/instagram.webp";
import clutchIcon from "@/assets/icons/clutch.webp";
import dynamic from "next/dynamic";
import Script from 'next/script';

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
        location: "Sortis Business Tower - 9C, Ciudad de Panamá.",
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

    const LetsTalkSection = dynamic(() => import('@/app/_sections/lets-talk-section'), { ssr: false });

    return (
        <>
            <LetsTalkSection />

            <footer
                className={`${apexFont.className} py-16 bg-secondary-bg text-xl flex flex-col gap-8`}
                style = {{ paddingLeft: '6rem', paddingRight: '6rem' }}
            >
                <Script id="metricool-loader" strategy="afterInteractive">
                    {`
                        function loadScript(a){
                        var b=document.getElementsByTagName("head")[0],
                            c=document.createElement("script");
                        c.type="text/javascript";
                        c.src="https://tracker.metricool.com/resources/be.js";
                        c.onreadystatechange=a;
                        c.onload=a;
                        b.appendChild(c);
                        }
                        loadScript(function(){
                        beTracker.t({hash:"1290ec9204a13f1d44c1fae9bed96d16"});
                        });
                    `}
                </Script>
                <div className="container mx-25 flex flex-col md:flex-row gap-16 justify-between">
                    <a href="/">
                        <Image
                            src={logo}
                            alt="Applica Corp's logo"
                            width={300}
                            height={220}
                            loading="lazy"
                        />
                    </a>

                    <div>
                        <ul translate='no'>
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
                                <Image src={linkedinIcon} alt="LinkedIn" width={48} height={48} loading="lazy" />
                            </a>

                            <a
                                href="https://www.instagram.com/applica.corp/"
                                target="_blank"
                            >
                                <Image src={instagramIcon} alt="Instagram" width={48} height={48} loading="lazy" />
                            </a>

                            <a
                                href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay"
                                target="_blank"
                            >
                                <Image src={clutchIcon} alt="Clutch" width={48} height={48} loading="lazy" />
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
                                    width={250}
                                    height={100}
                                    loading="lazy"
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
                                    width={150}
                                    loading="lazy"
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
