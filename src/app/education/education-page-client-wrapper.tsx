'use client'

import { apexFont, rubikFont } from "@/assets/fonts";
import { useEffect, useState } from "react";
import '../styles/effects.scss';
import '../styles/healthcare.scss';
import '../styles/globals.scss';
import EducationServicesSection from '../_sections/landings/education/education-services-section';
import EducationChallengeSection from "../_sections/landings/education/education-challenge-section";
import EducationKeyTechnologySection from "../_sections/landings/education/education-key-technology-section";
import EducationCaseStudySection from "../_sections/landings/education/education-case-study-section";
import { EducationWhyUsSection } from "../_sections/landings/education/education-why-us-section";
import EducationHeroSection from "../_sections/landings/education/education-hero-section";
import EducationIndustriesSection from "../_sections/landings/education/education-industries-section";
import EducationFaqsSection from "../_sections/landings/education/education-faqs-section";
import EducationBlogSection from "../_sections/landings/education/education-blog-section";
import EducationLetsTalkSection from "../_sections/landings/education/education-lets-talk-section";
import MobileEducationHeroSection from "../(mobile)/_sections/landings/education/mobile-education-hero-section";
import MobileEducationServicesSection from "../(mobile)/_sections/landings/education/mobile-education-services-section";
import MobileEducationIndustriesSection from "../(mobile)/_sections/landings/education/mobile-education-industries-section";
import MobileEducationChallengeSection from "../(mobile)/_sections/landings/education/mobile-education-challenge-section";
import MobileEducationKeyTechnologySection from "../(mobile)/_sections/landings/education/mobile-education-key-technology-section";
import MobileEducationCaseStudySection from "../(mobile)/_sections/landings/education/mobile-education-case-study-section";
import { MobileEducationWhyUsSection } from "../(mobile)/_sections/landings/education/mobile-education-why-us-section";
import { MobileEducationFaqsSection } from "../(mobile)/_sections/landings/education/mobile-education-faqs-section";
import { MobileEducationBlogSection } from "../(mobile)/_sections/landings/education/mobile-education-blog-section";
import { MobileEducationLetsTalkSection } from "../(mobile)/_sections/landings/education/mobile-education-lets-talk-section";
import { TabletEducationHeroSection } from "../_sections/landings/education/tablet-education-hero-section";
import { EducationComplianceSection } from "../_sections/landings/education/education-compliance-section";
import { EducationHowWorkSection } from "../_sections/landings/education/education-how-work-section";
import { MobileEducationComplianceSection } from "../(mobile)/_sections/landings/education/mobile-education-compliance-section";
import { MobileEducationHowWorkSection } from "../(mobile)/_sections/landings/education/mobile-education-how-work-section";


export default function EducationPageClientWrapper() {
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
        width >= 970 ? <EducationHeroSection /> :
        width >= 800 ? <TabletEducationHeroSection /> :
        <MobileEducationHeroSection />;

    return (
        <main className={`${rubikFont.className} flex flex-col gap-8 lg:gap-12 overflow-hidden ${ width <= 768 && 'bg-white' }`}>
            <div className={`${ width <= 768 && 'blue-sections-mobile' } flex flex-col items-center justify-between gap-16 md:gap-20 xl:gap-28 mt-24 md:mt-0`}>
                { heroSection }
                { isMobile ? <MobileEducationServicesSection /> : <EducationServicesSection /> }
                { isMobile ? <MobileEducationIndustriesSection /> : <EducationIndustriesSection /> }
                { isMobile ? <MobileEducationChallengeSection /> : <EducationChallengeSection /> }
                { isMobile ? <MobileEducationKeyTechnologySection /> : <EducationKeyTechnologySection /> }
                { isMobile ? <MobileEducationComplianceSection /> : <EducationComplianceSection /> }
                { isMobile ? <MobileEducationCaseStudySection /> : <EducationCaseStudySection /> }
            </div>
            <div className={`orange-sections-mobile md:orange-sections flex flex-col items-center justify-between gap-20 xl:gap-28 md:px-4 2xl:px-24`}>
                { isMobile ? <MobileEducationWhyUsSection /> : <EducationWhyUsSection /> }
                { isMobile ? <MobileEducationHowWorkSection /> : <EducationHowWorkSection /> }
                { isMobile ? <MobileEducationFaqsSection /> : <EducationFaqsSection /> }
                { isMobile ? <MobileEducationBlogSection /> : <EducationBlogSection /> }
                { isMobile ? <MobileEducationLetsTalkSection /> : <EducationLetsTalkSection /> } 
            </div>
        </main>    
    )
}
