"use client";

import '../../styles/about-us.scss';
import { motion } from "framer-motion";
import { avigeaFont } from "@/assets/fonts";
import placeholderImg from "@/assets/placeholder-img-2.webp";
import checkboxIcon from "@/assets/icons/checkbox-icon.webp";
import searchIcon from "@/assets/icons/seach-icon.webp";
import lampIcon from "@/assets/icons/lamp-icon.webp";
import Attribute from "../../_components/backup/attribute";
import Button from "../../../components/button";
import H3 from "@/components/h3";
import H2 from "@/components/h2";
import {
    /*onMeetOurProcessClick,*/ useNavigationHandlers,
} from "@/lib/helpers";
import DecoratedImage from "../../_components/decorated-image";
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
                <div className="relative md:w-2/4">
                    <div className="image-container">
                       
                        <DecoratedImage 
                            image = {placeholderImg}
                            alt = "About Us Image"
                        />
                           
                    </div>
                </div>

                <div className="flex flex-col md:gap-8 md:w-2/4 text-end items-end md:text-end my-8 md:my-0">
                    <p className="text-xl md:text-4xl leading-tight mb-14 md:mb-0 w-[80%] text-end">
                        We specialize in IT staff augmentation services, using
                        an agile model to deliver top talent in only 72 hours.
                    </p>

                    <p className="text-3xl md:text-6xl leading-none w-[80%] text-end md:max-w-full mx-auto md:mx-0 mb-3 mb:md-0">
                        Ready to{" "}
                        <span
                            className={`font-medium ${avigeaFont.className}`}
                        >
                            ramp up your project?
                        </span>
                    </p>

                    <p className="text-xl md:text-4xl leading-tight text-highlight">We make it happen</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col md:flex-row gap-6 max-w-[80%] md:max-w-full mx-auto md:mx-0 mb-14 md:mb-0"
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
                id="services"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col gap-6 px-10 md:px-36 pt-8 md:pt-16 pb-7 md:pb-9 rounded-3xl md:rounded-full text-center items-center fit-background"
            >
                <H2 className="font-medium text-3xl">
                    Find the{" "}
                    <span className={`font-medium ${avigeaFont.className}`}>
                        perfect fit
                    </span>{" "}
                    for your venture
                </H2>

                <H3 className="text-md">
                    Whether you need a specialized skillset, a temporary highly
                    qualified developer, a Senior team lead, or just more hands
                    on deck, our nearshore IT talents are here to help.
                </H3>

                <Button onClick={onMeetOurProcessClick}>
                    Meet our process
                </Button>
            </motion.div>
        </Section>
    );
}
