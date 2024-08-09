"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholderImg from "@/assets/placeholder-img-2.png";
import { avigeaFont } from "@/assets/fonts";
import checkboxIcon from "@/assets/icons/checkbox-icon.svg";
import searchIcon from "@/assets/icons/seach-icon.svg";
import lampIcon from "@/assets/icons/lamp-icon.svg";
import Attribute from "@/app/_components/attribute";
import MobileButton from "../_components/mobile-button";
import MobileH3 from "../_components/mobile-h3";
import MobileH2 from "../_components/mobile-h2";
import {
    /*onMeetOurProcessClick,*/ useNavigationHandlers,
} from "@/lib/helpers";

export default function MobileServicesSection() {
    const { onMeetOurProcessClick } = useNavigationHandlers();

    return (
        <Section className="flex flex-col md:gap-20">
            <motion.div
                className="flex flex-col md:flex-row gap-8"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                id="about-us"
            >
                <div className="relative md:w-2/4">
                    <Image
                        src={placeholderImg}
                        className="image mx-auto md:hidden"
                        width={400}
                        alt=""
                    />
                </div>

                <div className="flex flex-col md:gap-8 md:w-2/4 text-center md:text-end my-8 md:my-0">
                    <MobileH3 className="mb-14 md:mb-0">
                        We specialize in IT staff augmentation services, using
                        an agile model to deliver talent in only 72 hours.
                    </MobileH3>

                    <MobileH2 className="max-w-[70%] md:max-w-full mx-auto md:mx-0 mb-3 mb:md-0">
                        Ready to{" "}
                        <strong
                            className={`font-normal ${avigeaFont.className}`}
                        >
                            speed up your project?
                        </strong>
                    </MobileH2>

                    <MobileH3 className="text-highlight">
                        We make it happen
                    </MobileH3>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col md:flex-row gap-6 max-w-[80%] md:max-w-full mx-auto md:mx-0 mb-14 md:mb-0"
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
                className="flex flex-col gap-6 px-10 md:px-36 pt-8 md:pt-16 pb-7 md:pb-9 rounded-3xl md:rounded-full border text-center items-center bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-600"
            >
                <MobileH2 className="font-medium">
                    Find the{" "}
                    <strong className={`font-normal ${avigeaFont.className}`}>
                        perfect fit
                    </strong>{" "}
                    for your venture
                </MobileH2>

                <MobileH3 className="text-md">
                    Whether you need a specialized skillset, a temporary highly
                    qualified developer, a Senior team lead, or just more hands
                    on deck, Our IT talents are here to help.
                </MobileH3>

                <MobileButton onClick={onMeetOurProcessClick}>
                    Meet our process
                </MobileButton>
            </motion.div>
        </Section>
    );
}
