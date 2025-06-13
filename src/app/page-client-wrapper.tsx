'use client'

import { apexFont } from "@/assets/fonts";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";


export default function PageClientWrapper() {
    const [isMobile, setIsMobile] = useState(false);

    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth < 800 );
    }, []);

    const MobileLandingSection = dynamic(() => import('@/(mobile)/_sections/mobile-landing-section'));
    const MobileServicesSection = dynamic(() => import('@/(mobile)/_sections/mobile-services-section'));
    const MobileExpertiseHubSection = dynamic(() => import('@/(mobile)/_sections/mobile-expertise-hub-section'));
    const MobileBenefitsSection = dynamic(() => import('@/(mobile)/_sections/mobile-benefits-section'));
    const MobileTechnologiesSection = dynamic(() => import('@/(mobile)/_sections/mobile-technologies-section'));
    const MobileProcessSection = dynamic(() => import('@/(mobile)/_sections/mobile-proccess-section'));
    const MobileYourVisionSection = dynamic(() => import('@/(mobile)/_sections/mobile-your-vision-section'));
    const MobileTalenOnDemand = dynamic(() => import('@/(mobile)/_sections/mobile-talen-on-demand'));
    const MobileIndustriesSection = dynamic(() => import('@/(mobile)/_sections/mobile-industries-section'));
    const MobileLatestPostsSection = dynamic(() => import('@/(mobile)/_sections/mobile-latest-posts-section'));
    const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/mobile-lets-talk-section'));

    const LandingSection = dynamic(() => import('@/sections/landing-section'));
    const AboutUsSection = dynamic(() => import('@/sections/about-us'));
    const ExpertiseHubSection = dynamic(() => import('@/sections/expertise-hub-section'));
    const BenefitsSection = dynamic(() => import('@/sections/benefits-section'));
    const TechnologiesSection = dynamic(() => import('@/sections/technologies-section'));
    const ProcessSection = dynamic(() => import('@/sections/process-section'));
    const YourVisionSection = dynamic(() => import('@/sections/your-vision-section'));
    const TalentOnDemand = dynamic(() => import('@/sections/talent-on-demand'));
    const IndustriesSection = dynamic(() => import('@/sections/industries-section'));
    const LatestPosts = dynamic(() => import('@/sections/latest-posts'));

    return (
        <main className={`${apexFont.className} flex flex-col items-center min-h-[600px] justify-between gap-12 mdplus:gap-32 lg:gap-36 mt-24 md:mt-0 md:px-4 lg:px-24 ${ width <= 768 && 'overflow-hidden' }`}>
            
            <div
                className={`absolute top-0 right-0 md:mt-16 mt-20 md:w-[70vw] w-[85vw] aspect-[1/1] lg:aspect-[1280/760] z-[-1] ${ width <= 768 ? `bg-[url('/images/gradient-mobile.webp')]` : `bg-[url('/images/gradient-desktop.webp')]` } bg-contain bg-no-repeat bg-right` }
                aria-hidden="true"
                role="presentation"
            />
            
            { isMobile ? <MobileLandingSection /> : <LandingSection /> }
            { isMobile ? <MobileServicesSection /> : <AboutUsSection /> }
            { isMobile ? <MobileExpertiseHubSection /> : <ExpertiseHubSection /> }
            { isMobile ? <MobileBenefitsSection /> : <BenefitsSection /> }
            { isMobile ? <MobileTechnologiesSection /> : <TechnologiesSection /> }
            { isMobile ? <MobileYourVisionSection /> : <YourVisionSection /> }
            { isMobile ? <MobileTalenOnDemand /> : <TalentOnDemand /> }
            { isMobile ? <MobileIndustriesSection /> : <IndustriesSection /> }
            { isMobile ? <MobileLatestPostsSection fromLanding = { true }/> : <LatestPosts fromLanding = { true } /> }
        </main>
    )
}