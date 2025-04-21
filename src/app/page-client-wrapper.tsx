'use client'

import { apexFont } from "@/assets/fonts";
import MobileDetect from "mobile-detect";
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";


export default function PageClientWrapper({ initialIsMobile }: { initialIsMobile: boolean }) {
    const pathName = usePathname();
    const [isMobile, setIsMobile] = useState(initialIsMobile);
    const [showBg, setShowBg] = useState( false );

    useEffect(() => {
        if (initialIsMobile === undefined) {
            const md = new MobileDetect(window.navigator.userAgent);
            setIsMobile(!!md.mobile());
        }
    }, []);

    useEffect(
        () => {
            const timer = setTimeout( () => setShowBg( true ), 500 );
            return () => clearTimeout( timer );
        },
        []
    )

    const MobileLandingSection = dynamic(() => import('@/(mobile)/_sections/mobile-landing-section'));
    const MobileServicesSection = dynamic(() => import('@/(mobile)/_sections/mobile-services-section'));
    const MobileBenefitsSection = dynamic(() => import('@/(mobile)/_sections/mobile-benefits-section'));
    const MobileProcessSection = dynamic(() => import('@/(mobile)/_sections/mobile-proccess-section'));
    const MobileYourVisionSection = dynamic(() => import('@/(mobile)/_sections/mobile-your-vision-section'));
    const MobileTalenOnDemand = dynamic(() => import('@/(mobile)/_sections/mobile-talen-on-demand'));
    const MobileIndustriesSection = dynamic(() => import('@/(mobile)/_sections/mobile-industries-section'));
    const MobileLatestPostsSection = dynamic(() => import('@/(mobile)/_sections/mobile-latest-posts-section'));
    const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/mobile-lets-talk-section'));

    const LandingSection = dynamic(() => import('@/sections/landing-section'));
    const AboutUs = dynamic(() => import('@/sections/about-us'));
    const BenefitsSection = dynamic(() => import('@/sections/benefits-section'));
    const ProcessSection = dynamic(() => import('@/sections/process-section'));
    const YourVisionSection = dynamic(() => import('@/sections/your-vision-section'));
    const TalentOnDemand = dynamic(() => import('@/sections/talent-on-demand'));
    const IndustriesSection = dynamic(() => import('@/sections/industries-section'));
    const LatestPosts = dynamic(() => import('@/sections/latest-posts'));

    return (
        <main className={`${apexFont.className} flex flex-col items-center min-h-[600px] justify-between gap-20 md:gap-36 mt-24 md:mt-0 md:px-24 ${ isMobile && 'overflow-hidden' }`}>
            
            {
                showBg &&
                    <div
                        className={`absolute top-0 right-0 ${ isMobile ? 'mt-12' : 'mt-16' } ${ isMobile ? 'w-[100vw]' : 'w-[70vw]'} ${ isMobile ? 'aspect-[1/1]' : 'aspect-[1280/760]' } z-[-1] ${ isMobile ? `bg-[url('/images/gradient-mobile.webp')]` : `bg-[url('/images/gradient-desktop.webp')]` } bg-contain bg-no-repeat bg-right` }
                        aria-hidden="true"
                        role="presentation"
                    />
            }
            
            { 
                ['/', '/#about-us', '/#services', '/#benefits', '/#hiring-process'].includes( pathName ) && 
                    <h1 className="sr-only">Applica Corp. | Build your dream team with top nearshore IT talent</h1> 
            }
            {
                showBg &&
                <>
                    { isMobile ?  <MobileLandingSection /> : <LandingSection /> }
                    { isMobile ? <MobileServicesSection /> : <AboutUs /> }
                    { isMobile ? <MobileBenefitsSection /> : <BenefitsSection /> }
                    {/* { isMobile ? <MobileProcessSection /> : <ProcessSection /> } */}
                    { isMobile ? <MobileYourVisionSection /> : <YourVisionSection /> }
                    { isMobile ? <MobileTalenOnDemand /> : <TalentOnDemand /> }
                    { isMobile ? <MobileIndustriesSection /> : <IndustriesSection /> }
                    { isMobile ? <MobileLatestPostsSection/> : <LatestPosts /> }
                    { isMobile &&  <MobileLetsTalkSection /> }
                </>
            }
            
        </main>
    )
}