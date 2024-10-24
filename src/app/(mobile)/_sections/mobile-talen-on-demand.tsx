"use client"
import Image from "next/image";
import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import MobileButton from "../_components/mobile-button";
import MobileGradientBall from "../_components/mobile-gradient-ball";
import MobileH2 from "../_components/mobile-h2";
import MobileH3 from "../_components/mobile-h3";
import { /*onStartNowClick,*/ useNavigationHandlers } from "@/lib/helpers";
import mapImg from "@/assets/mapa.png";
import MobileH1 from "../_components/mobile-h1";
import { motion } from 'framer-motion';

/**
 * Renders the About Us section.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function MobileTalenOnDemand() {
    const { onStartNowClick } = useNavigationHandlers();

    return (
        <Section className="flex flex-col-reverse gap-10">
            <motion.div
                className="flex flex-col items-center md:items-start md:w-[60%] w-full z-20"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <MobileH1 className="mb-6 md:mb-12 w-4/5 md:w-full text-center md:text-left">
                    Talent on demand{" "}
                    <strong
                        className={`font-normal ${avigeaFont.className} block`}
                    >
                        ready to be hired.
                    </strong>
                </MobileH1>

                <MobileH2 className="w-4/5 md:w-full text-center md:text-left">
                    Just tell us your requirements and we will find it wherever
                    it is.
                </MobileH2>

                <div className="flex flex-wrap flex-row mt-12 md:mt-12 mb-12 md:mb-16 gap-6 justify-center">
                    <MobileGradientBall title="+5.000" subtitle="IT Talents" />
                    <MobileGradientBall title="80%" subtitle="Senior level" />
                    <MobileGradientBall title="<13%" subtitle="Turnover rate" />
                    <MobileGradientBall title="+60" subtitle="Technologies" />
                </div>

                <MobileButton onClick={onStartNowClick}>
                    Schedule a call
                </MobileButton>      
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row gap-8"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <Image
                    src={mapImg}
                    width={1000}
                    alt="Applica offices across the world"
                />
            </motion.div>
        </Section>
    );
}
