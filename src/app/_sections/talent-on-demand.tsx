"use client";
import Image from "next/image";
import { avigeaFont } from "@/assets/fonts";
import Button from "@/components/button";
import GradientBall from "../_components/gradient-ball";
import H2 from "@/components/h2";
import H3 from "@/components/h3";
import { /*onStartNowClick,*/ useNavigationHandlers } from "@/lib/helpers";
import mapImg from "@/assets/mapa.webp";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import Section from "@/components/section";

/**
 * Renders the Talent on demand.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function TalentOnDemand() {
    const { onStartNowClick } = useNavigationHandlers();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9,
      });
    
    return (
        <Section className="flex flex-col md:flex-row gap-8">
            <motion.div
                className="flex flex-col items-center md:items-start md:w-full my-auto"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                {/* <H2 className="mb-6 md:mb-12 w-4/5 md:w-full text-center md:text-left">
                    Talent on demand{" "}
                    <span
                        className={`font-medium ${avigeaFont.className} block`}
                    >
                        ready to be hired
                    </span>
                </H2> */}

                <H3 className="w-4/5 md:w-full text-center md:text-left">
                    Bridging the gap between cutting-edge technology and impactful results, we deliver customized software solutions that scale with your business.
                </H3>

                <div ref = { ref } className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8 md:mt-12 mb-12 md:mb-16 gap-10 justify-center">
                { inView && 
                        <GradientBall 
                            title = {450} 
                            startSymbol = "+"
                            duration = { 5 }
                            subtitle = "Completed projects" 
                        />
                    }
                    { inView && 
                        <GradientBall 
                            title = { 10 }
                            duration = { 5 }
                            subtitle = "Years" 
                        />
                    }
                    { inView && 
                        <GradientBall 
                            title = { 88 }
                            endSymbol = "%"
                            duration = { 5 } 
                            subtitle = "Senior level tech talents" 
                        />
                    }
                    { inView && 
                        <GradientBall 
                            title = { 4.8 } 
                            endSymbol = "/5"
                            duration = { 5 }
                            subtitle = "Clutch average" 
                        />
                    }
                </div>

                <Button onClick={onStartNowClick}>Schedule a call</Button>
                
            </motion.div>

            <motion.div
                className="flex flex-col items-center md:items-start md:w-full my-auto"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <div>
                    <Image
                        src={mapImg}
                        width={800}
                        height={800}
                        alt="Applica offices across the world"
                        loading="lazy"
                    />
                </div>
            </motion.div>


        </Section>
    );
}
