import { apexFont } from "@/assets/fonts";
import MobileLandingSection from "./_sections/mobile-landing-section";
import MobileProcessSection from "./_sections/mobile-proccess-section";
import MobileServicesSection from "./_sections/mobile-services-section";

export default function MobileHome() {
    return (
        <main className={`${apexFont.className}`}>
            <MobileLandingSection />
            <MobileServicesSection />

            <br />
            <br />
            <br />

            <MobileProcessSection />
        </main>
    );
}
