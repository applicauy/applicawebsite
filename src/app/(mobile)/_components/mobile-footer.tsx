'use client'

import '../../styles/footer.scss';
import Image from "next/image";
import { apexFont } from "@/assets/fonts";
import logo from "@/assets/logo/logo-menu.webp";
import linkedinIcon from "@/assets/icons/linkedin.webp";
import instagramIcon from "@/assets/icons/instagram.webp";
import clutchIcon from "@/assets/icons/clutch.webp";
import clutchRecognitionImg from "@/assets/clutch/clutch-recognition.webp";
import clutchStarsImg from "@/assets/clutch/clutch-stars.webp";
import { LOCATIONS, NAVIGATION_LINKS } from "@/app/_components/footer";
import Script from 'next/script';
import MobileLetsTalkSection from '../_sections/mobile-lets-talk-section';
import LetsTalkSection from '@/app/_sections/lets-talk-section';
import { useEffect, useState } from 'react';

const MobileFooter = (
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
        <div className='mt-20 md:mt-6'>
            {   
                width < 800 ?
                <MobileLetsTalkSection /> :
                <LetsTalkSection />
            }
            <footer
                className={`${apexFont.className} px-4 sm:px-6 md:px-8 py-8 sm:py-16 lg:py-24 shadow-md`}
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
                <div className="flex justify-between items-center py-2 sm:py-4 lg:py-8">
                    <div className="w-3/5">
                        <div className="mdplus:max-w-72 max-w-52">
                            <a href="/">
                                <Image 
                                    alt="Applica's logo" 
                                    src={logo} 
                                    loading="lazy" 
                                    width={ width > 767 ? 300 : 200 } 
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
                                    className="text-sm md:text-xl hover:text-highlight transition-all duration-300 flex justify-end font-medium text-end w-full mb-1"
                                >
                                    {nl.text}
                                </a> :
                                <li key={index} className="my-1 flex justify-end mb-1">
                                    <a href={nl.href} className="text-sm md:text-xl font-medium hover:text-highlight">
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
                            <Image 
                                src={clutchRecognitionImg} 
                                alt="Clutch Recognition" 
                                height={ width > 767 ? 90 : 60 } 
                                width={ width > 767 ? 90 : 60 }
                                loading="lazy"
                            />
                            <Image 
                                src={clutchStarsImg} 
                                alt="Clutch Stars" 
                                height={ width > 767 ? 90 : 60 } 
                                width={ width > 767 ? 150 : 100 } 
                                loading="lazy"
                            />
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
        </div>
    );
};

export default MobileFooter;
