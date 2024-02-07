import NavBar from "./navbar";
import LandingSection from "./landing-section";
import { apexFont } from "@/assets/fonts";
import ServicesSection from "./services-section";

export default function Home() {
  return (
    <>
      <NavBar />

      <main
        className={`${apexFont.className} flex min-h-screen flex-col items-center justify-between p-24 gap-[20rem]`}
      >
        <LandingSection />

        <ServicesSection />
      </main>
    </>
  );
}
