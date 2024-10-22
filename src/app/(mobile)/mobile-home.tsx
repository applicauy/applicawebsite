import { apexFont } from "@/assets/fonts";
import MobileLandingSection from "./_sections/mobile-landing-section";
import MobileProcessSection from "./_sections/mobile-proccess-section";
import MobileServicesSection from "./_sections/mobile-services-section";
import MobileBenefitsSection from "./_sections/mobile-benefits-section";
import MobileTalenOnDemand from "./_sections/mobile-talen-on-demand";
import MobileLetsTalkSection from "./_sections/mobile-lets-talk-section";
import MobileLatestPostsSection from "./_sections/mobile-latest-posts-section";
import Image from "next/image";
import backgroundImg from '@/assets/background/gradient.svg';

export default function MobileHome() {
    return (
        <main className={`${apexFont.className} flex flex-col gap-20 overflow-hidden mt-24`}>
            <div className="absolute right-0 w-[100%] z-[-1]">
                <Image
                    src={backgroundImg}
                    alt = "Background Image"
                    className="w-full object-cover"
                />
            </div>
            <MobileLandingSection />
            <MobileServicesSection />
            <MobileBenefitsSection />
            <MobileProcessSection />
            <MobileTalenOnDemand />
            <MobileLatestPostsSection/>
            <MobileLetsTalkSection />
        </main>
    );
}
