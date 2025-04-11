"use client";

import { motion } from "framer-motion";
import placeholderImg from "@/assets/placeholder-img-2.webp";
import { avigeaFont } from "@/assets/fonts";
import checkboxIcon from "@/assets/icons/checkbox-icon.webp";
import digitalTansformationIcon from "@/assets/icons/digital-transformation-icon.webp";
import aiIcon from "@/assets/icons/ai-icon.webp";
import customizedIcon from "@/assets/icons/customized-icon.webp";
import cloudSecurityIcon from "@/assets/icons/cloud-security-icon.webp";
import Attribute from "@/app/_components/attribute";
import MobileButton from "../_components/mobile-button";
import {
    /*onMeetOurProcessClick,*/ useNavigationHandlers,
} from "@/lib/helpers";

import MobileH1 from "../_components/mobile-h1";
import MobileDecoratedImage from "../_components/mobile-decorated-image";
import dynamic from "next/dynamic";
import MobileH2 from "../_components/mobile-h2";

export default function MobileServicesSection() {
    const { onMeetOurProcessClick } = useNavigationHandlers();
    const Section = dynamic(() => import('@/components/section'));

    return (
        <Section className="flex flex-col md:gap-20">
            <motion.div
                className="flex flex-col md:flex-row gap-8"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                id="about-us"
            >
                <div className="gradient-ball-about-us-mobile md:gradient-ball-about-us absolute"></div>
                <div className="relative md:w-2/4">
                    <div className="image-container">
                       
                       <MobileDecoratedImage image={ placeholderImg } alt = "About Us Image" />
                          
                   </div>
                </div>

                <div className="flex flex-col md:gap-8 md:w-2/4 text-center md:text-end my-4 md:my-0">
                    <p className="text-xl md:text-3sm leading-tight mb-8 md:mb-0">
                        We work with leading enterprises and forward-thinking organizations to create 
                        tailored digital solutions, guiding them through their digital transformation.<br/>
                        Long-term partnerships require flexible service. Since 2015, Applica Corp has been dedicated to helping companies scale.
                    </p>

                    {/* <p className="text-3xl md:text-4xl leading-none max-w-full md:max-w-full mx-auto md:mx-0 mb-8 mb:md-0">
                        Ready to{" "}
                        <span
                            className={`font-medium ${avigeaFont.className}`}
                        >
                            ramp up your project?
                        </span>
                    </p> */}

                    <p className="text-2xl text-highlight">
                        We make it happen
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col md:flex-row gap-6 max-w-full mx-auto md:mx-0 mb-14 md:mb-0 md:my-0 my-12 mt-20"
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
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-6 px-6 mt-6 mb-6 md:px-36 pt-8 md:pt-16 pb-7 md:pb-9 rounded-3xl md:rounded-full text-center items-center fit-background"
                id="services"
            >
                {/* <MobileH1 className="font-medium">
                    Find the{" "}
                    <span className={`font-medium ${avigeaFont.className}`}>
                        perfect fit
                    </span>{" "}
                    for your venture
                </MobileH1> */}

                <MobileH2>
                    With delivery centers based in the USA, Panama, Chile, Colombia, Argentina and Uruguay, 
                    we build long-term relationships based on collaboration, reliability and results.
                </MobileH2>
            </motion.div>
        </Section>
    );
}
