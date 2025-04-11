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

    useEffect(() => {
        if (initialIsMobile === undefined) {
            const md = new MobileDetect(window.navigator.userAgent);
            setIsMobile(!!md.mobile());
        }
    }, []);

    const MobileLandingSection = dynamic(() => import('@/(mobile)/_sections/backup/mobile-landing-section'));
    const MobileServicesSection = dynamic(() => import('@/(mobile)/_sections/backup/mobile-services-section'));
    const MobileBenefitsSection = dynamic(() => import('@/(mobile)/_sections/backup/mobile-benefits-section'));
    const MobileProcessSection = dynamic(() => import('@/(mobile)/_sections/backup/mobile-proccess-section'));
    const MobileTalenOnDemand = dynamic(() => import('@/(mobile)/_sections/backup/mobile-talen-on-demand'));
    const MobileLatestPostsSection = dynamic(() => import('@/(mobile)/_sections/backup/mobile-latest-posts-section'));
    const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/backup/mobile-lets-talk-section'));

    const LandingSection = dynamic(() => import('@/sections/backup/landing-section'));
    const AboutUs = dynamic(() => import('@/sections/backup/about-us'));
    const BenefitsSection = dynamic(() => import('@/sections/backup/benefits-section'));
    const ProcessSection = dynamic(() => import('@/sections/backup/process-section'));
    const TalentOnDemand = dynamic(() => import('@/sections/backup/talent-on-demand'));
    const LatestPosts = dynamic(() => import('@/sections/backup/latest-posts'));

    return (
        <main className={`${apexFont.className} flex flex-col items-center min-h-[600px] justify-between gap-20 md:gap-36 mt-24 md:mt-0 md:px-24 ${ isMobile && 'overflow-hidden' }`}>
            <div className={ `${ !isMobile && ' w-[50vw]' } absolute top-0 right-0 max-w-[800px] z-[-1]` }>
                <Image
                    src={isMobile ? "/images/gradient-mobile.webp" : "/images/gradient-desktop.webp"}
                    alt="Background Image"
                    className="w-full h-auto object-contain mt-16"
                    width={1280}
                    height={760}
                    priority
                    quality={80}
                />
            </div>
            
            { 
                ['/', '/#about-us', '/#services', '/#benefits', '/#hiring-process'].includes( pathName ) && 
                    <h1 className="sr-only">Applica Corp. | Build your dream team with top nearshore IT talent</h1> 
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