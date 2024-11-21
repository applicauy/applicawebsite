"use client";

import { motion } from "framer-motion";
import Section from "@/components/section";
import { avigeaFont } from "@/assets/fonts";
import MobileButton from "../_components/mobile-button";
import MobileH1 from "../_components/mobile-h1";
import H1 from "@/components/h1";

export default function MobileLandingSection() {
    const onStartNowClick = () => {
        window.location.href = "/contact";
    };
    return (
        <Section className="py-5 md:py-24">
            <motion.div
                className="md:max-w-[66%] relative"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <H1 className="mb-4 text-center">
                    Build your dream team with top nearshore IT talent
                </H1>
                <MobileH1 className="mb-12 text-center">
                    We are a software company focused on{" "} 
                    <span
                        className={`text-highlight ${avigeaFont.className} font-medium`}
                    >
                        saving you time
                    </span>{" "}
                    and delivering peace of mind
                </MobileH1>

                <div className="flex flex-row items-center justify-center">
                    <MobileButton highlightedArrow onClick={onStartNowClick} >
                        Start now!
                    </MobileButton>
                </div>

            </motion.div>
        </Section>
    );
}
