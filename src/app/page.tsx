import NavBar from "./navbar";
import LandingSection from "./landing-section";
import ServicesSection from "./services-section";
import BenefitsSection from "./benefits-section";
import { apexFont } from "@/assets/fonts";

export default function Home() {
  return (
    <>
      <NavBar />

      <main
        className={`${apexFont.className} flex min-h-screen flex-col items-center justify-between p-24 gap-36`}
      >
        <LandingSection />

        <ServicesSection />

        <BenefitsSection />
      </main>
    </>
  );
}
