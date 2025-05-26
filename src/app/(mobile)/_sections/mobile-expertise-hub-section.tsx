'use client'

import { avigeaFont } from "@/assets/fonts";
import digitalTansformationIcon from "@/assets/icons/digital-transformation-icon.webp";
import aiIcon from "@/assets/icons/ai-icon.webp";
import customizedIcon from "@/assets/icons/customized-icon.webp";
import cloudSecurityIcon from "@/assets/icons/cloud-security-icon.webp";
import Attribute from "@/app/_components/attribute";
import MobileH1 from "../_components/mobile-h1";
import MobileH2 from "../_components/mobile-h2";
import { useInView } from "react-intersection-observer";
import Section from "@/components/section";

export default function MobileExpertiseHubSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <Section className="flex flex-col md:gap-20">
            <div
                ref={ref}
                className={`flex flex-col transition-all duration-1000 ease-out transform md:flex-row gap-6 max-w-full mx-auto md:mx-0 md:my-0 my-12 mt-12 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                id="services"
            >

                <div className="w-full flex justify-center">
                    <MobileH1>
                        Our{" "}
                        <span
                            className={`font-medium ${avigeaFont.className}`}
                        >
                            expertise hubs
                        </span>
                    </MobileH1>
                </div>
                <Attribute icon={ digitalTansformationIcon } title = "Drive digital transformation">
                    Bridging the gap between technology and impactful results, 
                    we empower your business to scale, innovate, and stay ahead 
                    in a dynamic market.
                </Attribute>

                <Attribute icon={ aiIcon } title = "Leverage AI & Data for innovation">
                    We turn data into smart decisions through automation, AI, 
                    advanced chatbots, and interactive dashboards to enhance 
                    decision-making.
                </Attribute>

                <Attribute icon={ customizedIcon }  title = "Deliver Tailored Solutions">
                    We design cutting-edge digital solutions tailored to your 
                    needs—web and mobile apps, system modernization, and seamless 
                    integrations—all with top-tier UX/UI.
                </Attribute>

                <Attribute icon={ cloudSecurityIcon } title = "Optimize cloud security & DevOps">
                    Strengthening security, optimizing cloud infrastructure, and 
                    accelerating deployments with DevOps to ensure top performance 
                    and reliability.
                </Attribute>
                <div
                    className={'flex flex-col gap-6 px-6 mt-10 mb-6 md:px-36 pt-8 md:pt-16 pb-7 md:pb-9 rounded-3xl md:rounded-full text-center items-center fit-background'}
                >
                    <MobileH2>
                        With delivery centers based in the USA, Panama, Chile, Colombia, Argentina and Uruguay, 
                        we build long-term relationships based on collaboration, reliability and results.
                    </MobileH2>
                </div>
            </div>

        </Section>
    );
}