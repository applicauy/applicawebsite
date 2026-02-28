import '../../styles/footer.scss';
import Image from "next/image";
import logo from "@/assets/logo/logo-footer.webp";
import { rubikFont } from "@/assets/fonts";
import linkedinIcon from "@/assets/icons/linkedin.webp";
import instagramIcon from "@/assets/icons/instagram.webp";
import clutchIcon from "@/assets/icons/clutch.webp";
import Script from 'next/script';
import clutchIPhone from "@/assets/footer/clutch iphone.webp";
import clutchSoftware from "@/assets/footer/clutch software.webp";
import cuti from "@/assets/footer/cuti.png";
import panFinance from "@/assets/footer/pan finance.png";
import databricks from "@/assets/footer/databricks.png";

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
        location: "Austin, TX",
    },
    {
        country: "Uruguay",
        location: "Montevideo",
    },
    {
        country: "Argentina",
        location: "Rosario",
    },
    {
        country: "Panama",
        location: "Panama City",
    },
    {
        country: "Colombia",
        location: "Bogota",
    },
    {
        country: "Ecuador",
        location: "Quito",
    },
    {
        country: "Dominican Republic",
        location: "Santo Domingo",
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

export default function LandingsFooter(
    {
        handleScroll
    } :
    {
        handleScroll: any
    }
) {
    const currentYear = new Date().getFullYear();
    return (
        <footer
            className={`${rubikFont.className} py-16 bg-secondary-bg text-white text-xl flex flex-col gap-8 items-center overflow-x-hidden`}
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
            <div className="flex flex-row justify-center gap-20 mb-8">
                <Image src={databricks} alt="Databricks" height={125} />
                <Image src={clutchSoftware} alt="Clutch Software" height={125} />
                <Image src={clutchIPhone} alt="Clutch iPhone" height={125} />
                <Image src={cuti} alt="CUTI" height={125} />
                <Image src={panFinance} alt="PAN Finance" height={125} />
            </div>
            <div className="flex container">
                <hr className="border-t-2 border-gray-600 w-full mb-8"/>
            </div>
            <div className="container flex flex-col md:flex-row gap-8 justify-between max-w-[960px] 
                lg:max-w-[1024px]
                xl:max-w-[1280px]
                2xl:max-w-[1440px]">
                <div className="w-3/12">
                    <a href="/">
                        <Image
                            src={logo}
                            alt="Applica Corp's logo"
                            width={300}
                            height={220}
                            loading="lazy"
                        />
                    </a>
                </div>
                <div className='w-5/12'>
                    <ul translate='no'>
                        {LOCATIONS.map((l, index) => (
                            <li key={index} className="my-1">
                                <span className="font-medium text-md">{l.country}</span>
                                <span className="font-light ms-3 text-md">
                                    {l.location}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col gap-6 w-4/12'>
                    <ul className='text-right'>
                        {NAVIGATION_LINKS.map((nl, index) => (
                            nl.href.startsWith('#') ? 
                            <a
                                href = { nl.href }
                                onClick={(e) => {
                                        e.preventDefault();
                                        handleScroll(nl.href.slice(1));
                                    }
                                }
                                className="text-xl hover:text-landing-violet transition-all duration-300 text-right w-full block font-medium"
                                key={index}
                            >
                                {nl.text}
                            </a> :
                            <li key={index} className="my-1">
                                <a href={nl.href} className="font-medium hover:text-landing-violet">
                                    {nl.text}
                                </a>
                            </li>
                        ))}
                    </ul>
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
                    </div>
                </div>
            </div>
            <p className="mx-auto text-muted text-base">
                &copy; {currentYear} Applica Corp. All rights reserved.
            </p>
        </footer>
    );
}
