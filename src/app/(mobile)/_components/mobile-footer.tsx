import Link from "next/link";
import Image from "next/image";
import { apexFont } from "@/assets/fonts";
import logo from "@/assets/logo/logo-menu.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import clutchIcon from "@/assets/icons/clutch.svg";
import clutchRecognitionImg from "@/assets/clutch/clutch-recognition.png";
import clutchStarsImg from "@/assets/clutch/clutch-stars.svg";
import { LOCATIONS, NAVIGATION_LINKS } from "@/app/_components/footer";

const MobileFooter = () => {
    const currentYear = new Date().getFullYear();

    const handleScroll = (id: any) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer
            className={`${apexFont.className} px-4 sm:px-6 md:px-8 py-8 sm:py-16 md:py-24 shadow-md`}
        >
            <div className="flex justify-between items-center py-2 sm:py-4 md:py-8">
                <div className="w-3/5">
                    <div className="max-w-40">
                        <Link href="/">
                            <Image alt="Applica's logo" src={logo} />
                        </Link>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="flex justify-end gap-1">
                        <Link
                            href="https://www.linkedin.com/company/applica-corp/"
                            target="_blank"
                        >
                            <Image src={linkedinIcon} alt="" width={32} />
                        </Link>

                        <Link
                            href="https://www.instagram.com/applica.corp/"
                            target="_blank"
                        >
                            <Image src={instagramIcon} alt="" width={32} />
                        </Link>

                        <Link
                            href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay"
                            target="_blank"
                        >
                            <Image src={clutchIcon} alt="" width={32} />
                        </Link>
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
                                <strong className="pr-1">{l.country}</strong>
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
                            <button
                                onClick={() => handleScroll(nl.href.slice(1))}
                                className="text-sm hover:text-highlight transition-all duration-300 flex justify-end font-bold text-end w-full mb-1"
                            >
                                {nl.text}
                            </button> :
                            <li key={index} className="my-1 flex justify-end mb-1">
                                <Link href={nl.href} className="text-sm font-bold hover:text-highlight">
                                    {nl.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex justify-between items-center py-2 sm:py-4 md:py-8">
                <div className="w-3/5">
                    <div className="flex gap-4">
                        <Image src={clutchStarsImg} alt="" height={60} />
                        <Image src={clutchRecognitionImg} alt="" height={60} />
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
