"use client";

import { motion } from "framer-motion";
import Section from "@/components/section";
import Button from "@/components/button";
import { avigeaFont } from "@/assets/fonts";
import H2 from "@/components/h2";
import H1 from "@/components/h1";
import H3 from "@/components/h3";

export default function LandingSection() {
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
                <div className="w-[80%]">
                    <H2 className="mb-8">
                        We are a software company focused on{" "}
                        <strong
                            className={`text-highlight ${avigeaFont.className} font-normal`}
                        >
                            saving your time
                        </strong>{" "}
                        and delivering peace of mind
                    </H2>
                    <H3 className="mb-16">
                        Let&apos;s build your IT dream team together
                    </H3>
                    <Button highlightedArrow onClick={onStartNowClick}>
                        Start now!
                    </Button>
                </div>
            </motion.div>
        </Section>
    );
}
