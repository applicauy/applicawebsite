'use client'
import { useEffect, useState } from "react";
import { FinanceHeroSection } from "../_sections/landings/finance/finance-hero-section";
import { TabletFinanceHeroSection } from "../_sections/landings/finance/tablet-finance-hero-section";
import { MobileFinanceHeroSection } from "../(mobile)/_sections/landings/finance/mobile-finance-hero-section";
import { rubikFont } from "@/assets/fonts";
import { MobileFinanceServicesSection } from "../(mobile)/_sections/landings/finance/mobile-finance-services-section";
import { FinanceServicesSection } from "../_sections/landings/finance/finance-services-section";
import { FinanceIndustriesSection } from "../_sections/landings/finance/finance-industries-section";
import { FinanceChallengeSection } from "../_sections/landings/finance/finance-challenge-section";
import { FinanceKeyTechnologySection } from "../_sections/landings/finance/finance-key-technology-section";
import { FinanceCaseStudySection } from "../_sections/landings/finance/finance-case-study-section";
import { MobileFinanceIndustriesSection } from "../(mobile)/_sections/landings/finance/mobile-finance-industries-section";
import { MobileFinanceChallengeSection } from "../(mobile)/_sections/landings/finance/mobile-finance-challenge-section";
import { MobileFinanceKeyTechnologySection } from "../(mobile)/_sections/landings/finance/mobile-finance-key-technology-section";
import { MobileFinanceCaseStudySection } from "../(mobile)/_sections/landings/finance/mobile-finance-case-study-section";
import { MobileFinanceWhyUsSection } from "../(mobile)/_sections/landings/finance/mobile-finance-why-us-section";
import { MobileFinanceFaqsSection } from "../(mobile)/_sections/landings/finance/mobile-finance-faqs-section";
import { MobileFinanceBlogSection } from "../(mobile)/_sections/landings/finance/mobile-finance-blog-section";
import { MobileFinanceLetsTalkSection } from "../(mobile)/_sections/landings/finance/mobile-finance-lets-talk-section";
import { FinanceLetsTalkSection } from "../_sections/landings/finance/finance-lets-talk-section";
import { FinanceBlogSection } from "../_sections/landings/finance/finance-blog-section";
import { FinanceFaqsSection } from "../_sections/landings/finance/finance-faqs-section";
import { FinanceWhyUsSection } from "../_sections/landings/finance/finance-why-us-section";
import { MobileFinanceComplianceSection } from "../(mobile)/_sections/landings/finance/mobile-finance-compliance-section";
import { FinanceComplianceSection } from "../_sections/landings/finance/finance-compliance-section";
import { MobileFinanceHowWorkSection } from "../(mobile)/_sections/landings/finance/mobile-finance-how-work-section";
import { FinanceHowWorkSection } from "../_sections/landings/finance/finance-how-work-section";

export default function FinancePageClientWrapper() {
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
        width >= 970 ? <FinanceHeroSection /> :
        width >= 800 ? <TabletFinanceHeroSection /> :
        <MobileFinanceHeroSection />;

    return (
        <main className={`${rubikFont.className} flex flex-col gap-8 lg:gap-12 overflow-hidden ${ width <= 768 && 'bg-white' }`}>
            <div className={`${ width <= 768 && 'blue-sections-mobile' } flex flex-col items-center justify-between gap-16 md:gap-20 xl:gap-28 mt-24 md:mt-0`}>
                { heroSection }
                { isMobile ? <MobileFinanceServicesSection /> : <FinanceServicesSection /> }
                { isMobile ? <MobileFinanceIndustriesSection /> : <FinanceIndustriesSection /> }
                { isMobile ? <MobileFinanceChallengeSection /> : <FinanceChallengeSection /> }
                { isMobile ? <MobileFinanceKeyTechnologySection /> : <FinanceKeyTechnologySection /> }
                { isMobile ? <MobileFinanceComplianceSection /> : <FinanceComplianceSection /> }
                { isMobile ? <MobileFinanceCaseStudySection /> : <FinanceCaseStudySection /> }
            </div>
            <div className={`orange-sections-mobile md:orange-sections flex flex-col items-center justify-between gap-20 xl:gap-28 md:px-4 2xl:px-24`}>
                { isMobile ? <MobileFinanceWhyUsSection /> : <FinanceWhyUsSection /> }
                { isMobile ? <MobileFinanceHowWorkSection /> : <FinanceHowWorkSection /> }
                { isMobile ? <MobileFinanceFaqsSection /> : <FinanceFaqsSection /> }
                { isMobile ? <MobileFinanceBlogSection /> : <FinanceBlogSection /> }
                { isMobile ? <MobileFinanceLetsTalkSection /> : <FinanceLetsTalkSection /> } 
            </div>
        </main>    
    )
}