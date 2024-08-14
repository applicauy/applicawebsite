"use client";

import { motion } from "framer-motion";
import Section from "@/components/section";
import { avigeaFont } from "@/assets/fonts";
import MobileH2 from "../_components/mobile-h2";
import MobileButton from "../_components/mobile-button";

export default function MobileLandingSection() {
    const onStartNowClick = () => {
        window.location.href = "/contact";
    };
    return (
        <Section className="py-10 md:py-24">
            {/* Example of how to utilize motion's animation upon the user's first view (it 
                only triggers when the user sees it for the first time). */}
            <motion.div
                className="md:max-w-[66%]"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <MobileH2 className="mb-6">
                    We are a software company focused on{" "}
                    <strong
                        className={`text-highlight ${avigeaFont.className} font-normal`}
                    >
                        saving your time
                    </strong>{" "}
                    and delivering peace of mind
                </MobileH2>

                <p className={`text-xs md:text-3xs leading-none mb-12`}>
                    Let’s build your IT dream team together
                </p>

                <MobileButton highlightedArrow onClick={onStartNowClick}>
                    Start now!
                </MobileButton>
            </motion.div>
        </Section>
    );
}
