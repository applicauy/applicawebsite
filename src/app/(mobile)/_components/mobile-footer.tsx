import Image from "next/image";
import { apexFont } from "@/assets/fonts";
import logo from "@/assets/logo/logo-menu.webp";
import linkedinIcon from "@/assets/icons/linkedin.webp";
import instagramIcon from "@/assets/icons/instagram.webp";
import clutchIcon from "@/assets/icons/clutch.webp";
import clutchRecognitionImg from "@/assets/clutch/clutch-recognition.webp";
import clutchStarsImg from "@/assets/clutch/clutch-stars.webp";
import { LOCATIONS, NAVIGATION_LINKS } from "@/app/_components/footer";

const MobileFooter = (
    {
        handleScroll
    } :
    {
        handleScroll: any
    }
) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={`${apexFont.className} px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-24 shadow-md`}
        >
            <div className="flex justify-between items-center py-2 sm:py-4 md:py-8">
                <div className="w-3/5">
                    <div className="max-w-40">
                        <a href="/">
                            <Image alt="Applica's logo" src={logo} loading="lazy" width={200} height={35}/>
                        </a>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="flex justify-end gap-1">
                        <a
                            href="https://www.linkedin.com/company/applica-corp/"
                            target="_blank"
                        >
                            <Image src={linkedinIcon} alt="LinkedIn" width={32} height={32} loading="lazy"/>
                        </a>

                        <a
                            href="https://www.instagram.com/applica.corp/"
                            target="_blank"
                        >
                            <Image src={instagramIcon} alt="Instagram" width={32} height={32} loading="lazy"/>
                        </a>

                        <a
                            href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay"
                            target="_blank"
                        >
                            <Image src={clutchIcon} alt="Clutch" width={32} height={32} loading="lazy"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center py-2 sm:py-4 md:py-8">
                <div className="w-3/5">
                    <ul>
                        {LOCATIONS.map((l, index) => (
                            <li
                                key={index}
                                className="my-1"
                                style={{ fontSize: "2.6vw" }}
                            >
                                <span className="pr-1 font-medium">{l.country}</span>
                                <span className="font-regular">
                                    {l.location}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-2/5">
                    <ul>
                        {NAVIGATION_LINKS.map((nl, index) => (
                            nl.href.startsWith('#') ? 
                            <a
                                href={ nl.href }
                                onClick={(e) => {
                                        e.preventDefault();
                                        handleScroll(nl.href.slice(1));
                                    }
                                }
                                key={index}
                                className="text-sm hover:text-highlight transition-all duration-300 flex justify-end font-medium text-end w-full mb-1"
                            >
                                {nl.text}
                            </a> :
                            <li key={index} className="my-1 flex justify-end mb-1">
                                <a href={nl.href} className="text-sm font-medium hover:text-highlight">
                                    {nl.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex justify-between items-center py-2 sm:py-4 md:py-8">
                <div className="w-3/5">
                    <div className="flex gap-4">
                        <Image src={clutchStarsImg} alt="Clutch Stars" height={60} width={100} loading="lazy"/>
                        <Image src={clutchRecognitionImg} alt="Clutch Recognition" height={60} width={60}loading="lazy"/>
                    </div>
                </div>
                <div className="w-2/5">
                    <p
                        className="mx-auto text-muted text-base flex justify-end"
                        style={{ fontSize: "2.2vw", whiteSpace: "nowrap" }}
                    >
                        &copy; {currentYear} Applica Corp. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default MobileFooter;
