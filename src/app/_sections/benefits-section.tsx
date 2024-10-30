import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import Benefit from "../_components/benefit";
import Carousel from "../_components/carousel";
import H2 from "@/components/h2";
import H3 from "@/components/h3";
import { benefits } from "@/utils/models/Benefits";
import { motion } from 'framer-motion';

export default function BenefitsSection() {
    return (
        <Section className="flex flex-col gap-12 md:gap-36">
            <motion.div
                className="flex flex-col md:flex-row gap-8 items-center"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                id="benefits"
            >
                <div className="flex flex-col md:w-2/4 gap-12 text-center md:text-left">
                    <H2 className="md:max-w-[70%]">
                        Let&apos;s find your next{" "}
                        <strong
                            className={`font-normal ${avigeaFont.className}`}
                        >
                            most valuable player.
                        </strong>
                    </H2>

                    <H3 className="md:max-w-[80%]">
                        Long-term partnership requires flexible service. Since
                        2015, Applica Corp. has been dedicated to helping
                        companies scale their business and take it to the next
                        level.
                    </H3>
                </div>

                <div className="md:w-2/4 grid grid-cols-2 gap-4">
                    {benefits.map((b, index) => (
                        <Benefit
                            key={index}
                            imageSrc={b.image}
                            imageAlt={b.alt}
                        >
                            {b.description}
                        </Benefit>
                    ))}
                </div>
            </motion.div>
            <Carousel />
        </Section>
    );
}
