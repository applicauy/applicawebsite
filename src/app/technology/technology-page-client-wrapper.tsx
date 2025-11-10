'use client'

import { apexFont, rubikFont } from "@/assets/fonts";
import { useEffect, useState } from "react";
import '../styles/effects.scss';
import '../styles/healthcare.scss';
import '../styles/globals.scss';
import TechnologyServicesSection from '../_sections/landings/technology/technology-services-section';
import TechnologyChallengeSection, { TechnologyProductChallengeSection } from "../_sections/landings/technology/technology-product-challenge-section";
import TechnologyKeyTechnologySection from "../_sections/landings/technology/technology-key-technology-section";
import TechnologyCaseStudySection from "../_sections/landings/technology/technology-case-study-section";
import { TechnologyWhyUsSection } from "../_sections/landings/technology/technology-why-us-section";
import TechnologyHeroSection from "../_sections/landings/technology/technology-hero-section";
import TechnologyFaqsSection from "../_sections/landings/technology/technology-faqs-section";
import TechnologyBlogSection from "../_sections/landings/technology/technology-blog-section";
import TechnologyLetsTalkSection from "../_sections/landings/technology/technology-lets-talk-section";
import MobileTechnologyHeroSection from "../(mobile)/_sections/landings/technology/mobile-technology-hero-section";
import MobileTechnologyServicesSection from "../(mobile)/_sections/landings/technology/mobile-technology-services-section";
import MobileTechnologyKeyTechnologySection from "../(mobile)/_sections/landings/technology/mobile-technology-key-technology-section";
import MobileTechnologyCaseStudySection from "../(mobile)/_sections/landings/technology/mobile-technology-case-study-section";
import { MobileTechnologyWhyUsSection } from "../(mobile)/_sections/landings/technology/mobile-technology-why-us-section";
import { MobileTechnologyFaqsSection } from "../(mobile)/_sections/landings/technology/mobile-technology-faqs-section";
import { MobileTechnologyBlogSection } from "../(mobile)/_sections/landings/technology/mobile-technology-blog-section";
import { MobileTechnologyLetsTalkSection } from "../(mobile)/_sections/landings/technology/mobile-technology-lets-talk-section";
import { TabletTechnologyHeroSection } from "../_sections/landings/technology/tablet-technology-hero-section";
import { MobileTechnologyChallengesSection } from '../(mobile)/_sections/landings/technology/mobile-technology-challenges-section';
import { TechnologyChallengesSection } from "../_sections/landings/technology/technology-challenges-section";
import MobileTechnologyProductChallengeSection from "../(mobile)/_sections/landings/technology/mobile-technology-product-challenge-section";
import { TechnologyDontSeeStackSection } from "../_sections/landings/technology/technology-dont-see-stack-section";
import { TechnologyMethodologySection } from "../_sections/landings/technology/technology-metodology-section";
import { TechnologyExecutionTimelineSection } from "../_sections/landings/technology/technology-execution-timeline-section";
import { TechnologyHowWorkSection } from "../_sections/landings/technology/technology-how-work-section";
import { MobileTechnologyDontSeeStackSection } from "../(mobile)/_sections/landings/technology/mobile-technology-dont-see-stack-section";
import { MobileTechnologyMethodologySection } from "../(mobile)/_sections/landings/technology/mobile-technology-methodology-section";
import { MobileTechnologyExecutionTimelineSection } from "../(mobile)/_sections/landings/technology/mobile-technology-execution-timeline-section";
import { MobileTechnologyHowWorkSection } from "../(mobile)/_sections/landings/technology/mobile-technology-how-work-section";


export default function TechnologyPageClientWrapper() {
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
        width >= 970 ? <TechnologyHeroSection /> :
        width >= 800 ? <TabletTechnologyHeroSection /> :
        <MobileTechnologyHeroSection />;

    return (
        <main className={`${rubikFont.className} flex flex-col overflow-hidden ${ width <= 970 && 'bg-white' }`}>
            <div className={`${ width <= 970 && 'blue-sections-mobile' } flex flex-col items-center justify-between gap-16 md:gap-20 xl:gap-28 mt-24 md:mt-0`}>
                { heroSection }
                { isMobile ? <MobileTechnologyServicesSection /> : <TechnologyServicesSection /> }
                { isMobile ? <MobileTechnologyChallengesSection /> : <TechnologyChallengesSection /> }
                { isMobile ? <MobileTechnologyProductChallengeSection /> : <TechnologyProductChallengeSection /> }
            </div>
            <div className={`orange-sections-mobile md:orange-sections flex flex-col items-center justify-between gap-20 xl:gap-28 md:px-4 2xl:px-24 pt-16`}>
                { isMobile ? <MobileTechnologyKeyTechnologySection /> : <TechnologyKeyTechnologySection /> }
                { isMobile ? <MobileTechnologyDontSeeStackSection /> : <TechnologyDontSeeStackSection /> }
                { isMobile ? <MobileTechnologyMethodologySection /> : <TechnologyMethodologySection /> }
                { isMobile ? <MobileTechnologyExecutionTimelineSection /> : <TechnologyExecutionTimelineSection /> }
                { isMobile ? <MobileTechnologyCaseStudySection /> : <TechnologyCaseStudySection /> }
            </div>
            <div className={`orange-sections-mobile md:orange-sections flex flex-col items-center justify-between gap-20 xl:gap-28 md:px-4 2xl:px-24`}>
                { isMobile ? <MobileTechnologyWhyUsSection /> : <TechnologyWhyUsSection /> }
                { isMobile ? <MobileTechnologyHowWorkSection /> : <TechnologyHowWorkSection /> }
                { isMobile ? <MobileTechnologyFaqsSection /> : <TechnologyFaqsSection /> }
                { isMobile ? <MobileTechnologyBlogSection /> : <TechnologyBlogSection /> }
                { isMobile ? <MobileTechnologyLetsTalkSection /> : <TechnologyLetsTalkSection /> } 
            </div>
        </main>    
    )
}
