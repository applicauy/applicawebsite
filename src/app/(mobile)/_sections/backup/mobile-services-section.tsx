"use client";

import { motion } from "framer-motion";
import placeholderImg from "@/assets/placeholder-img-2.webp";
import { avigeaFont } from "@/assets/fonts";
import checkboxIcon from "@/assets/icons/checkbox-icon.webp";
import searchIcon from "@/assets/icons/seach-icon.webp";
import lampIcon from "@/assets/icons/lamp-icon.webp";
import Attribute from "@/app/_components/backup/attribute";
import MobileButton from "../../_components/mobile-button";
import {
    /*onMeetOurProcessClick,*/ useNavigationHandlers,
} from "@/lib/helpers";

import MobileH1 from "../../_components/mobile-h1";
import MobileDecoratedImage from "../../_components/mobile-decorated-image";
import dynamic from "next/dynamic";
import MobileH2 from "../../_components/mobile-h2";

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
                        We specialize in IT staff augmentation services, using
                        an agile model to deliver top talent in only 72 hours.
                    </p>

                    <p className="text-3xl md:text-4xl leading-none max-w-full md:max-w-full mx-auto md:mx-0 mb-8 mb:md-0">
                        Ready to{" "}
                        <span
                            className={`font-medium ${avigeaFont.className}`}
                        >
                            ramp up your project?
                        </span>
                    </p>

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
                className="flex flex-col md:flex-row gap-6 max-w-full mx-auto md:mx-0 mb-14 md:mb-0 md:my-0 my-12"
            >
                <Attribute icon={searchIcon}>
                    Pre-vetted & tailor matched nearshore IT talent you can count
                    on.
                </Attribute>

                <Attribute icon={lampIcon}>
                    Deeper understanding of your needs, giving you even better
                    solutions.
                </Attribute>

                <Attribute icon={checkboxIcon}>
                    Complete control over your team, its size, billed hours &
                    ongoing projects.
                </Attribute>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col gap-6 px-6 mt-12 mb-6 md:px-36 pt-8 md:pt-16 pb-7 md:pb-9 rounded-3xl md:rounded-full text-center items-center fit-background"
                id="services"
            >
                <MobileH1 className="font-medium">
                    Find the{" "}
                    <span className={`font-medium ${avigeaFont.className}`}>
                        perfect fit
                    </span>{" "}
                    for your venture
                </MobileH1>

                <MobileH2>
                    Whether you need a specialized skillset, a temporary highly
                    qualified developer, a Senior team lead, or just more hands
                    on deck, our nearshore IT talents are here to help.
                </MobileH2>

                <MobileButton onClick={onMeetOurProcessClick}>
                    Meet our process
                </MobileButton>
            </motion.div>
        </Section>
    );
}
