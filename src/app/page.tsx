import { cookies } from "next/headers";
import LandingSection from "./_sections/landing-section";
import AboutUs from "./_sections/about-us";
import BenefitsSection from "./_sections/benefits-section";
import { apexFont } from "@/assets/fonts";
import ProcessSection from "./_sections/process-section";
import TalentOnDemand from "./_sections/talent-on-demand";
import MobileHome from "./(mobile)/mobile-home";
import LatestPosts from "./_sections/latest-posts";
import BlogSection from "./_sections/blog-section";

export default function Home() {
    const cookieStore = cookies();
    const isMobile = cookieStore.get("isMobile")?.value === "true";

    if (isMobile) {
        return <MobileHome />;
    }
    return (
            <main
                className={`${apexFont.className} flex min-h-screen flex-col items-center justify-between gap-20 md:gap-36 px-24`}
            >
                <LandingSection />

                <AboutUs />

                <BenefitsSection />

                <ProcessSection />

                <TalentOnDemand />

                <LatestPosts />
                
            </main>
    );
}
