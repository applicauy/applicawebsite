"use client";

import { motion } from "framer-motion";
import { avigeaFont } from "@/assets/fonts";
import MobileButton from "../../_components/mobile-button";
import dynamic from "next/dynamic";
import H2 from "@/components/h2";

export default function MobileLandingSection() {
    const onStartNowClick = () => {
        window.location.href = "/contact";
    };
    const Section = dynamic(() => import('@/components/section'));
    return (
        <Section className="py-5 md:py-24">
            <motion.div
                className="md:max-w-[66%] relative"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <H2 className="mb-5 text-center">
                    We turn{" "} 
                    <span
                        className={`text-highlight ${avigeaFont.className} font-medium`}
                    >
                         software development
                    </span>{" "}
                    into global impact
                </H2>
                <div className="text-xl md:text-4xl w-full mb-12 text-center">
                    Delivering cutting-edge solutions tailored to fuel your growth
                </div>

                <div className="flex flex-row items-center justify-center">
                    <MobileButton highlightedArrow onClick={onStartNowClick} >
                        Start now!
                    </MobileButton>
                </div>

            </motion.div>
        </Section>
    );
}
