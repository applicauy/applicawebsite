'use client'

import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import placeholderImg from "@/assets/placeholder-img-2.png";
import costEffectiveness from "@/assets/cost-efectiveness.png";
import timeSaving from "@/assets/timesaving.png";
import focused from "@/assets/focused.png";
import flexibility from "@/assets/flexibility.png";
import MobileBenefit from "../_components/mobile-benefit";
import MobileCarousel from "../_components/mobile-carousel";
import MobileH2 from "../_components/mobile-h2";
import MobileH3 from "../_components/mobile-h3";
import MobileH1 from "../_components/mobile-h1";
import { benefits } from "@/utils/models/Benefits";
import { motion } from 'framer-motion';

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
                                <strong
                                    className={`font-normal ${avigeaFont.className}`}
                                >
                                    most valuable player.
                                </strong>
                            </MobileH1>
                        </div>

                        <div className="w-full flex justify-center">
                            <MobileH3>
                                Long-term partnership requires flexible service.
                                Since 2015, Applica Corp. has been dedicated
                                to helping companies scale their business and take
                                it to the next level.
                            </MobileH3>
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
