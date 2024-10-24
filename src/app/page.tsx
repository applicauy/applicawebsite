import { cookies, headers } from "next/headers";
import LandingSection from "./_sections/landing-section";
import AboutUs from "./_sections/about-us";
import BenefitsSection from "./_sections/benefits-section";
import { apexFont } from "@/assets/fonts";
import ProcessSection from "./_sections/process-section";
import TalentOnDemand from "./_sections/talent-on-demand";
import MobileHome from "./(mobile)/mobile-home";
import LatestPosts from "./_sections/latest-posts";
import BlogSection from "./_sections/blog-section";
import MobileDetect from "mobile-detect";
import PageClientWrapper from "./page-client-wrapper";

export default function Home() {

    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();

    return (
        <PageClientWrapper initialIsMobile = { isMobile }></PageClientWrapper>
    );
}
