import { apexFont } from "@/assets/fonts";
import MobileLandingSection from "./_sections/mobile-landing-section";
import MobileProcessSection from "./_sections/mobile-proccess-section";
import MobileServicesSection from "./_sections/mobile-services-section";
import MobileBenefitsSection from "./_sections/mobile-benefits-section";
import MobileAboutUsSection from "./_sections/mobile-about-us-section";
import MobileBlogSection from "./_sections/mobile-blog-section";
import MobileLetsTalkSection from "./_sections/mobile-lets-talk-section";

export default function MobileHome() {
    return (
        <main className={`${apexFont.className}`}>
            <MobileLandingSection />
            <MobileServicesSection />

            <br />
            <br />

            <MobileBenefitsSection />

            <br />
            <br />

            <MobileProcessSection />

            <br />
            <br />

            <MobileAboutUsSection />

            <br />
            <br />

            <MobileBlogSection />

            <MobileLetsTalkSection />
        </main>
    );
}
