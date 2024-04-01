"use client";

import { motion } from "framer-motion";
import Section from "@/components/section";
import Button from "@/components/button";
import { avigeaFont } from "@/assets/fonts";
import H2 from '../../components/h2';
import H1 from "@/components/h1";

export default function LandingSection() {
    return (
        <Section className="py-24">
            {/* Example of how to utilize motion's animation upon the user's first view (it 
                only triggers when the user sees it for the first time). */}
            <motion.div
                className="max-w-[66%]"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <H1 className="mb-5">
                    Build your dream team with top nearshore IT talent
                </H1>

                <H2 className="mb-16">
                    We are a software company focused on{" "}
                    <strong
                        className={`text-[--highlight-color] ${avigeaFont.className} font-normal`}
                    >
                        saving your time
                    </strong>{" "}
                    and delivering peace of mind
                </H2>

                <Button arrowIconColor="var(--highlight-color)">
                    Start now!
                </Button>
            </motion.div>
        </Section>
    );
}
