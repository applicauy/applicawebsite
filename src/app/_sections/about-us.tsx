"use client";

import '../styles/about-us.scss';
import { motion } from "framer-motion";
import { avigeaFont } from "@/assets/fonts";
import placeholderImg from "@/assets/placeholder-img-2.webp";
import digitalTansformationIcon from "@/assets/icons/digital-transformation-icon.webp";
import aiIcon from "@/assets/icons/ai-icon.webp";
import customizedIcon from "@/assets/icons/customized-icon.webp";
import cloudSecurityIcon from "@/assets/icons/cloud-security-icon.webp";
import Attribute from "../_components/attribute";
import H3 from "@/components/h3";
import H2 from "@/components/h2";
import {
    /*onMeetOurProcessClick,*/ useNavigationHandlers,
} from "@/lib/helpers";
import DecoratedImage from "../_components/decorated-image";
import dynamic from "next/dynamic";

export default function AboutUs() {
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
                <div className="gradient-ball-about-us absolute"></div>
                <div className="relative md:w-2/5">
                    <div className="image-container">
                       
                        <DecoratedImage 
                            image = {placeholderImg}
                            alt = "About Us Image"
                        />
                           
                    </div>
                </div>

                <div className="flex flex-col md:gap-8 md:w-3/5 text-end items-end md:text-end my-8 md:my-0">
                    <p className="text-xl md:text-4xl leading-tight mb-14 md:mb-0 w-full text-end pt-20">
                        We work with leading enterprises and forward-thinking organizations to create 
                        tailored digital solutions, guiding them through their digital transformation.<br/>
                        Long-term partnerships require flexible service. Since 2015, Applica Corp has been dedicated to helping companies scale.
                    </p>

                    {/* <p className="text-3xl md:text-6xl leading-none w-[80%] text-end md:max-w-full mx-auto md:mx-0 mb-3 mb:md-0">
                    Long-term partnerships require flexible service.{ " " }
                        <span
                            className={`font-medium ${avigeaFont.className}`}
                        >
                            Since 2015, Applica Corp has been dedicated to helping companies scale
                        </span>.
                    </p> */}

                    <p className="text-xl md:text-4xl leading-tight text-highlight">We make it happen</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col gap-6 max-w-[80%] md:max-w-full mx-auto md:mx-0 mb-14 md:mb-0 mt-20"
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
            </motion.div>

            <motion.div
                id="services"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col gap-6 px-10 md:px-36 pt-8 md:pt-16 pb-7 md:pb-9 rounded-3xl md:rounded-full text-center items-center fit-background"
            >
                {/* <H2 className="font-medium text-3xl">
                    Find the{" "}
                    <span className={`font-medium ${avigeaFont.className}`}>
                        perfect fit
                    </span>{" "}
                    for your venture
                </H2> */}

                <H3 className="text-md mb-8">
                    With delivery centers based in the USA, Panama, Chile, Colombia, Argentina and Uruguay, 
                    we build long-term relationships based on collaboration, reliability and results.
                </H3>
            </motion.div>
        </Section>
    );
}
