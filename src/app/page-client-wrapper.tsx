'use client'

import { apexFont } from "@/assets/fonts";
import MobileDetect from "mobile-detect";
import { useEffect, useState } from "react";
import backgroundImg from '@/assets/background/gradient.svg';
import MobileLandingSection from "./(mobile)/_sections/mobile-landing-section";
import MobileServicesSection from "./(mobile)/_sections/mobile-services-section";
import MobileBenefitsSection from "./(mobile)/_sections/mobile-benefits-section";
import MobileProcessSection from "./(mobile)/_sections/mobile-proccess-section";
import MobileTalenOnDemand from "./(mobile)/_sections/mobile-talen-on-demand";
import MobileLatestPostsSection from "./(mobile)/_sections/mobile-latest-posts-section";
import MobileLetsTalkSection from "./(mobile)/_sections/mobile-lets-talk-section";
import Image from "next/image";
import LandingSection from "./_sections/landing-section";
import AboutUs from "./_sections/about-us";
import BenefitsSection from "./_sections/benefits-section";
import ProcessSection from "./_sections/process-section";
import TalentOnDemand from "./_sections/talent-on-demand";
import LatestPosts from "./_sections/latest-posts";


export default function PageClientWrapper({ initialIsMobile }: { initialIsMobile: boolean }) {
    const [isMobile, setIsMobile] = useState(initialIsMobile);

    useEffect(() => {
        if (initialIsMobile === undefined) {
            const md = new MobileDetect(window.navigator.userAgent);
            setIsMobile(!!md.mobile());
        }
    }, []);

    return (
        <main className={`${apexFont.className} flex flex-col items-center min-h-screen justify-between gap-20 md:gap-36 overflow-hidden mt-24 md:mt-0 md:px-24`}>
            {
                isMobile &&
                <div className="absolute right-0 w-[100%] z-[-1]">
                    <Image
                        src={backgroundImg}
                        alt = "Background Image"
                        className="w-full object-cover"
                    />
                </div>
            }
            { isMobile ?  <MobileLandingSection /> : <LandingSection /> }
            { isMobile ? <MobileServicesSection /> : <AboutUs /> }
            { isMobile ? <MobileBenefitsSection /> : <BenefitsSection /> }
            { isMobile ? <MobileProcessSection /> : <ProcessSection /> }
            { isMobile ? <MobileTalenOnDemand /> : <TalentOnDemand /> }
            { isMobile ? <MobileLatestPostsSection/> : <LatestPosts /> }
            { isMobile &&  <MobileLetsTalkSection /> }
        </main>
    )
}