'use client'

import '../../../styles/footer.scss';
import Image from "next/image";
import { rubikFont } from "@/assets/fonts";
import logo from "@/assets/logo/logo-menu.webp";
import linkedinIcon from "@/assets/icons/linkedin.webp";
import instagramIcon from "@/assets/icons/instagram.webp";
import clutchIcon from "@/assets/icons/clutch.webp";
import { LOCATIONS, NAVIGATION_LINKS } from "@/app/_components/footer";
import Script from 'next/script';
import { useEffect, useState } from 'react';
import clutchIPhone from "@/assets/footer/clutch iphone.webp";
import clutchSoftware from "@/assets/footer/clutch software.webp";
import cuti from "@/assets/footer/cuti.png";
import panFinance from "@/assets/footer/pan finance.png";
import databricks from "@/assets/footer/databricks.png";

const MobileLandngsFooter = (
    {
        handleScroll
    } :
    {
        handleScroll: any
    }
) => {
    const [width, setWidth] = useState(0);
      
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={`${rubikFont.className} px-4 sm:px-6 md:px-8 py-8 sm:py-16 lg:py-24 shadow-md text-white bg-secondary-bg`}
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
            <div className="flex flex-row justify-center gap-4 md:gap-10 mb-8 mt-4">
                <Image src={databricks} alt="Databricks" height={ width >= 768 ? 100 : width >= 390 ? 60 : 55 } />
                <Image src={clutchSoftware} alt="Clutch Software" height={ width >= 768 ? 100 : width >= 390 ? 60 : 55 } />
                <Image src={clutchIPhone} alt="Clutch iPhone" height={ width >= 768 ? 100 : width >= 390 ? 60 : 55 } />
                <Image src={cuti} alt="CUTI" height={ width >= 768 ? 100 : width >= 390 ? 60 : 55 } />
                <Image src={panFinance} alt="PAN Finance" height={ width >= 768 ? 100 : width >= 390 ? 60 : 55 } />
            </div>
            <div className="flex container">
                <hr className="border-t-2 border-gray-600 w-full mb-8"/>
            </div>
            <div className="flex justify-between items-center py-2 sm:py-4 lg:py-8">
                <div className="w-3/5">
                    <div className="mdplus:max-w-72 max-w-52">
                        <a href="/">
                            <Image 
                                alt="Applica's logo" 
                                src={logo} 
                                loading="lazy" 
                                width={ width > 767 ? 300 : 180 } 
                                height={ width > 767 ? 50 : 35 }
                            />
                        </a>
                    </div>
                </div>
                <div className="w-2/5">
                    <div className="flex justify-end gap-1">
                        <a
                            href="https://www.linkedin.com/company/applica-corp/"
                            target="_blank"
                        >
                            <Image 
                                src={linkedinIcon} 
                                alt="LinkedIn" 
                                width={ width > 767 ? 48 : 32 } 
                                height={ width > 767 ? 48 : 32 } 
                                loading="lazy"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/applica.corp/"
                            target="_blank"
                        >
                            <Image 
                                src={instagramIcon} 
                                alt="Instagram" 
                                width={ width > 767 ? 48 : 32 } 
                                height={ width > 767 ? 48 : 32 } 
                                loading="lazy"
                            />
                        </a>
                        <a
                            href="https://clutch.co/profile/applica-corp-it-staff-augmentation-uruguay"
                            target="_blank"
                        >
                            <Image 
                                src={clutchIcon} 
                                alt="Clutch" 
                                width={ width > 767 ? 48 : 32 } 
                                height={ width > 767 ? 48 : 32 } 
                                loading="lazy"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center py-2 sm:py-4 md:py-8">
                <div className="w-4/5">
                    <ul translate='no'>
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
                <div className="w-1/5">
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
                                className="text-sm md:text-xl hover:text-landing-violet transition-all duration-300 flex justify-end font-medium text-end w-full mb-1"
                            >
                                {nl.text}
                            </a> :
                            <li key={index} className="my-1 flex justify-end mb-1">
                                <a href={nl.href} className="text-sm md:text-xl font-medium hover:text-landing-violet">
                                    {nl.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center py-2 sm:py-4 md:py-8">
                <p
                    className="mx-auto text-muted text-base flex justify-end"
                    style={{ fontSize: "2.2vw", whiteSpace: "nowrap" }}
                >
                    &copy; {currentYear} Applica Corp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default MobileLandngsFooter;
