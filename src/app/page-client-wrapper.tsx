'use client'

import { apexFont } from "@/assets/fonts";
import MobileDetect from "mobile-detect";
import { useEffect, useState } from "react";
import backgroundImg from '@/assets/background/gradient.webp';
import Image from "next/image";
import dynamic from "next/dynamic";


export default function PageClientWrapper({ initialIsMobile }: { initialIsMobile: boolean }) {
    const [isMobile, setIsMobile] = useState(initialIsMobile);

    useEffect(() => {
        if (initialIsMobile === undefined) {
            const md = new MobileDetect(window.navigator.userAgent);
            setIsMobile(!!md.mobile());
        }
    }, []);

    const MobileLandingSection = dynamic(() => import('@/(mobile)/_sections/mobile-landing-section'));
    const MobileServicesSection = dynamic(() => import('@/(mobile)/_sections/mobile-services-section'));
    const MobileBenefitsSection = dynamic(() => import('@/(mobile)/_sections/mobile-benefits-section'));
    const MobileProcessSection = dynamic(() => import('@/(mobile)/_sections/mobile-proccess-section'));
    const MobileTalenOnDemand = dynamic(() => import('@/(mobile)/_sections/mobile-talen-on-demand'));
    const MobileLatestPostsSection = dynamic(() => import('@/(mobile)/_sections/mobile-latest-posts-section'));
    const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/mobile-lets-talk-section'));

    const LandingSection = dynamic(() => import('@/sections/landing-section'));
    const AboutUs = dynamic(() => import('@/sections/about-us'));
    const BenefitsSection = dynamic(() => import('@/sections/benefits-section'));
    const ProcessSection = dynamic(() => import('@/sections/process-section'));
    const TalentOnDemand = dynamic(() => import('@/sections/talent-on-demand'));
    const LatestPosts = dynamic(() => import('@/sections/latest-posts'));

    return (
        <main className={`${apexFont.className} flex flex-col items-center min-h-screen justify-between gap-20 md:gap-36 mt-24 md:mt-0 md:px-24 ${ isMobile && 'overflow-hidden' }`}>
            {
                isMobile &&
                <div className="absolute right-0 w-[100%] z-[-1]">
                    <Image
                        src={backgroundImg}
                        alt = "Background Image"
                        className="w-full object-cover"
                        priority 
                    />
                </div>
            }
            <h1 className="sr-only">Applica Corp.</h1>
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