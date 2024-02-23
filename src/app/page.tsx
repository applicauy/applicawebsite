import LandingSection from "./_sections/landing-section";
import ServicesSection from "./_sections/services-section";
import BenefitsSection from "./_sections/benefits-section";
import { apexFont } from "@/assets/fonts";
import ProcessSection from "./_sections/process-section";
import AboutUsSection from "./_sections/about-us-section";
import BlogSection from "./_sections/blog-section";
import LetsTalkSection from "./_sections/lets-talk-section";

export default function Home() {
    return (
        <main
            className={`${apexFont.className} flex min-h-screen flex-col items-center justify-between gap-36`}
        >
            <LandingSection />

            <ServicesSection />

            <BenefitsSection />

            <ProcessSection />

            <AboutUsSection />

            <BlogSection />

            <LetsTalkSection />
        </main>
    );
}
