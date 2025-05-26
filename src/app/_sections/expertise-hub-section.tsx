'use client'

import '../styles/animations.scss';
import digitalTansformationIcon from "@/assets/icons/digital-transformation-icon.webp";
import aiIcon from "@/assets/icons/ai-icon.webp";
import customizedIcon from "@/assets/icons/customized-icon.webp";
import cloudSecurityIcon from "@/assets/icons/cloud-security-icon.webp";
import Attribute from "../_components/attribute";
import H3 from "@/components/h3";
import H2 from "@/components/h2";
import { avigeaFont } from "@/assets/fonts";
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';


export default function ExpertiseHubSection () {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <Section className="flex flex-col md:gap-20">
            <div
                ref={ref}
                className={`flex flex-col gap-6 max-w-[80%] md:max-w-full mx-auto md:mx-0 mb-14 md:mb-0 mt-20 
                    transition-all duration-1000 ease-out transform 
                    ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                `}
                id="services"
            >
                <H2 className="mb-6 md:mb-12 w-4/5 md:w-full text-center md:text-left">
                    Our {" "}
                    <span
                        className={`font-medium ${avigeaFont.className}`}
                    >
                        expertise hubs
                    </span>
                </H2>
                <div className="grid grid-cols-2 gap-16">
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
                </div>
                <div
                    className="flex flex-col gap-6 px-10 md:px-36 pt-8 md:pt-16 pb-7 md:pb-9 mt-28 rounded-3xl md:rounded-full text-center items-center fit-background"
                >
                    <H3 className="text-md mb-8">
                        With delivery centers based in the USA, Panama, Chile, Colombia, Argentina and Uruguay, 
                        we build long-term relationships based on collaboration, reliability and results.
                    </H3>
                </div>
            </div>
        </Section>
    );

}