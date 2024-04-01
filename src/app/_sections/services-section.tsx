"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholderImg from "@/assets/placeholder-img-2.png";
import { avigeaFont } from "@/assets/fonts";
import checkboxIcon from "@/assets/icons/checkbox-icon.svg";
import searchIcon from "@/assets/icons/seach-icon.svg";
import lampIcon from "@/assets/icons/lamp-icon.svg";
import Attribute from "../_components/attribute";
import Button from "../../components/button";
import H3 from "@/components/h3";
import H2 from "@/components/h2";

export default function ServicesSection() {
    return (
        <Section className="flex flex-col gap-20">
            <motion.div
                className="flex flex-col md:flex-row gap-8"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <div className="relative md:w-2/4">
                    {/* 
                        Because of lazy loading, the images that are not shown will not be 
                        loaded.
                    */}

                    {/* The image is hidden on mobile devices. */}
                    <Image
                        src={placeholderImg}
                        className="image hidden md:block"
                        height={300}
                        width={600}
                        alt=""
                    />

                    {/* The image is hidden on desktop devices. */}
                    <Image
                        src={placeholderImg}
                        className="image mx-auto md:hidden"
                        width={400}
                        alt=""
                    />
                </div>

                <div className="flex flex-col gap-8 md:w-2/4 text-center md:text-end">
                    <H3>
                        We specialize in IT staff augmentation services, using
                        an agile model to deliver talent in only 72 hours.
                    </H3>

                    <H2>
                        Ready to{" "}
                        <strong
                            className={`font-normal ${avigeaFont.className}`}
                        >
                            speed up your project?
                        </strong>
                    </H2>

                    <H3 className="text-highlight">
                        We make it happen
                    </H3>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col md:flex-row gap-6"
            >
                <Attribute icon={searchIcon}>
                    Pre-vetted & tailor match nearshore IT talent you can count
                    on.
                </Attribute>

                <Attribute icon={lampIcon}>
                    Deeper understanding of your needs giving you even better
                    solutions.
                </Attribute>

                <Attribute icon={checkboxIcon}>
                    Complete control over your team, its size, billed hours &
                    ongoing projects.
                </Attribute>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col gap-6 px-36 pt-16 pb-9 rounded-full border text-center items-center service-gradient"
            >
                <H2 className="font-medium">
                    Find the{" "}
                    <strong className={`font-normal ${avigeaFont.className}`}>
                        perfect fit
                    </strong>{" "}
                    for your venture
                </H2>

                <H3>
                    Whether you need a specialized skillset, a temporary highly
                    qualified developer, a Senior team lead, or just more hands
                    on deck, Our IT talents are here to help.
                </H3>

                <Button>Meet our process</Button>
            </motion.div>
        </Section>
    );
}
