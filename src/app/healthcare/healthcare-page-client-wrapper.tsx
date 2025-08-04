'use client'

import { apexFont, rubikFont } from "@/assets/fonts";
import { useEffect, useState } from "react";
import '../styles/effects.scss';
import '../styles/healthcare.scss';
import '../styles/globals.scss';
import HealthcareServicesSection from '../_sections/landings/healthcare/healthcare-services-section';
import HealthcareChallengeSection from "../_sections/landings/healthcare/healthcare-challenge-section";
import HealthcareKeyTechnologySection from "../_sections/landings/healthcare/healthcare-key-technology-section";
import HealthcareCaseStudySection from "../_sections/landings/healthcare/healthcare-case-study-section";
import { HealthcareWhyUsSection } from "../_sections/landings/healthcare/healthcare-why-us-section";
import HealthcareHeroSection from "../_sections/landings/healthcare/healthcare-hero-section";
import HealthcareIndustriesSection from "../_sections/landings/healthcare/healthcare-industries-section";
import HealthcareFaqsSection from "../_sections/landings/healthcare/healthcare-faqs-section";
import HealthcareBlogSection from "../_sections/landings/healthcare/healthcare-blog-section";
import HealthcareLetsTalkSection from "../_sections/landings/healthcare/healthcare-lets-talk-section";
import MobileHealthcareHeroSection from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-hero-section";
import MobileHealthcareServicesSection from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-services-section";
import MobileHealthcareIndustriesSection from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-industries-section";
import MobileHealthcareChallengeSection from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-challenge-section";
import MobileHealthcareKeyTechnologySection from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-key-technology-section";
import MobileHealthcareCaseStudySection from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-case-study-section";
import { MobileHealthcareWhyUsSection } from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-why-us-section";
import { MobileHealthcareFaqsSection } from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-faqs-section";
import { MobileHealthcareBlogSection } from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-blog-section";
import { MobileHealthcareLetsTalkSection } from "../(mobile)/_sections/landings/healthcare/mobile-healthcare-lets-talk-section";
import { TabletHealthcareHeroSection } from "../_sections/landings/healthcare/tablet-healthcare-hero-section";


export default function HealthcarePageClientWrapper() {
    const [isMobile, setIsMobile] = useState(false);

    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth < 768 );
    }, []);

    useEffect(() => {
        document.body.classList.add("bg-white", "text-black");

        return () => {
            document.body.classList.remove("bg-white", "text-black");
        };
    }, []);

    const heroSection =
        width >= 970 ? <HealthcareHeroSection /> :
        width >= 800 ? <TabletHealthcareHeroSection /> :
        <MobileHealthcareHeroSection />;

    return (
        <main className={`${rubikFont.className} flex flex-col gap-8 lg:gap-12 overflow-hidden ${ width <= 768 && 'bg-white' }`}>
            <div className={`${ width <= 768 && 'blue-sections-mobile' } flex flex-col items-center justify-between gap-16 md:gap-20 xl:gap-28 mt-24 md:mt-0`}>
                { heroSection }
                { isMobile ? <MobileHealthcareServicesSection /> : <HealthcareServicesSection /> }
                { isMobile ? <MobileHealthcareIndustriesSection /> : <HealthcareIndustriesSection /> }
                { isMobile ? <MobileHealthcareChallengeSection /> : <HealthcareChallengeSection /> }
                { isMobile ? <MobileHealthcareKeyTechnologySection /> : <HealthcareKeyTechnologySection /> }
                { isMobile ? <MobileHealthcareCaseStudySection /> : <HealthcareCaseStudySection /> }
            </div>
            <div className={`orange-sections-mobile md:orange-sections flex flex-col items-center justify-between gap-20 xl:gap-28 md:px-4 2xl:px-24`}>
                { isMobile ? <MobileHealthcareWhyUsSection /> : <HealthcareWhyUsSection /> }
                { isMobile ? <MobileHealthcareFaqsSection /> : <HealthcareFaqsSection /> }
                { isMobile ? <MobileHealthcareBlogSection /> : <HealthcareBlogSection /> }
                { isMobile ? <MobileHealthcareLetsTalkSection /> : <HealthcareLetsTalkSection /> } 
            </div>
        </main>    
    )
}