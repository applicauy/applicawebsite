'use client'

import { avigeaFont } from "@/assets/fonts";
import costEffectiveness from "@/assets/cost-efectiveness.webp";
import timeSaving from "@/assets/timesaving.webp";
import focused from "@/assets/focused.webp";
import flexibility from "@/assets/flexibility.webp";
import MobileBenefit from "../../_components/mobile-benefit";
import MobileCarousel from "../../_components/mobile-carousel";
import MobileH1 from "../../_components/mobile-h1";
import { benefits } from "@/utils/models/Benefits";
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";

// Benefits to be displayed in the section.
const BENEFITS = [
    {
        image: costEffectiveness,
        description: "Improved cost-effectiveness",
        alt: "",
    },
    {
        image: timeSaving,
        description: "Time saving",
        alt: "",
    },
    {
        image: focused,
        description: "Focused strategy",
        alt: "",
    },
    {
        image: flexibility,
        description: "Flexibility & fast replacement",
        alt: "",
    },
];

export default function MobileBenefitsSection() {
    const Section = dynamic(() => import('@/components/section'));
    return (
        <Section className="flex flex-col gap-12 md:gap-36  overflow-hidden">
            <motion.div
                className="md:max-w-[66%] relative"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >

                <div className="flex flex-col md:flex-row gap-8 items-center" id="benefits">
                    <div className="flex flex-col md:w-2/4 gap-12 text-center">
                        <div className="w-full flex justify-center">
                            <MobileH1>
                                Let&apos;s find your next{" "}
                                <span
                                    className={`font-medium ${avigeaFont.className}`}
                                >
                                    most valuable player.
                                </span>
                            </MobileH1>
                        </div>

                        <div className="w-full flex justify-center">
                            <p className="text-xl md:text-3sm leading-tight">
                                Long-term partnership requires flexible service.
                                Since 2015, Applica Corp. has been dedicated
                                to helping companies scale their business and take
                                it to the next level.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col overflow-hidden">
                        <div className="gradient-ball-benefit-1-mobile"></div>
                        <div className="gradient-ball-benefit-2-mobile"></div>
                        <div className="gradient-ball-benefit-3-mobile"></div>

                        {benefits.map((b, index) => (
                            <MobileBenefit
                                key={index}
                                imageSrc={b.image}
                                imageAlt={b.alt}
                            >
                                {b.description}
                            </MobileBenefit>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="md:max-w-[66%] relative"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <MobileCarousel />
            </motion.div>

        </Section>
    );
}
