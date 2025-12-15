"use client";

import { motion } from "framer-motion";
import Button from "@/components/button";
import { avigeaFont } from "@/assets/fonts";
import H2 from "@/components/h2";
import dynamic from "next/dynamic";

export default function LandingSection() {
    const onStartNowClick = () => {
        window.location.href = "/contact";
    };

    const Section = dynamic(() => import('@/components/section'));

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
                    {/* <div className="text-lg md:text-3xl text-violet mb-5">Delivering cutting-edge solutions tailored to fuel your growth</div> */}
                    <H2 className="mb-5">
                        We turnnnnn{" "}
                        <span
                            className={`text-highlight ${avigeaFont.className} font-medium`}
                        >
                             software development
                        </span>{" "}
                        into global impact
                    </H2>
                    <div className="text-xl md:text-4xl mb-12 text-violet">Delivering cutting-edge solutions tailored to fuel your growth</div>
                    <Button highlightedArrow onClick={onStartNowClick} href = '/contact'>
                        Start now!
                    </Button>
                </div>
            </motion.div>
        </Section>
    );
}
