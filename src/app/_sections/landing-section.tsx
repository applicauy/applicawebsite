"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Section from "@/components/section";
import arrowIcon from "@/assets/icons/arrow-right.svg";
import Button from "@/components/button";
import { avigeaFont } from "@/assets/fonts";

export default function LandingSection() {
    return (
        <Section className="py-24">
            <motion.div
                className="max-w-[66%]"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="mb-5">
                    Build your dream team with top nearshore IT talent
                </h1>

                <h2 className="mb-16">
                    We are a software company focused on{" "}
                    <strong
                        className={`text-[--highlight-color] ${avigeaFont.className} font-normal`}
                    >
                        saving your time
                    </strong>{" "}
                    and delivering peace of mind
                </h2>

                <Button arrowIconColor="var(--highlight-color)">
                    Start now!
                </Button>
            </motion.div>
        </Section>
    );
}
