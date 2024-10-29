"use client"
import Image from "next/image";
import { avigeaFont } from "@/assets/fonts";
import Section from "@/components/section";
import MobileButton from "../_components/mobile-button";
import MobileGradientBall from "../_components/mobile-gradient-ball";
import MobileH2 from "../_components/mobile-h2";
import MobileH3 from "../_components/mobile-h3";
import { /*onStartNowClick,*/ useNavigationHandlers } from "@/lib/helpers";
import mapImg from "@/assets/mapa.png";
import MobileH1 from "../_components/mobile-h1";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


/**
 * Renders the About Us section.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function MobileTalenOnDemand() {
    const { onStartNowClick } = useNavigationHandlers();
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.9,
    });

    return (
        <Section className="flex flex-col-reverse gap-10">
            <motion.div
                className="flex flex-col items-center md:items-start md:w-[60%] w-full z-20"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <MobileH1 className="mb-6 md:mb-12 w-4/5 md:w-full text-center md:text-left">
                    Talent on demand{" "}
                    <strong
                        className={`font-normal ${avigeaFont.className} block`}
                    >
                        ready to be hired.
                    </strong>
                </MobileH1>

                <MobileH2 className="w-4/5 md:w-full text-center md:text-left">
                    Just tell us your requirements and we will find it wherever
                    it is.
                </MobileH2>

                <div ref={ref} className="flex flex-wrap flex-row mt-12 md:mt-12 mb-12 md:mb-16 gap-6 justify-center">
                    { inView && 
                        <MobileGradientBall 
                            title = {15000} 
                            startSymbol = "+"
                            duration = { 5 }
                            subtitle = "IT Talents" 
                        />
                    }
                    { inView && 
                        <MobileGradientBall 
                            title = { 80 }
                            endSymbol = "%"
                            duration = { 5 }
                            subtitle = "Senior level" 
                        />
                    }
                    { inView && 
                        <MobileGradientBall 
                            title = { 13 }
                            startSymbol = "<"
                            endSymbol = "%"
                            duration = { 5 } 
                            subtitle = "Turnover rate" 
                        />
                    }
                    { inView && 
                        <MobileGradientBall 
                            title = { 60 } 
                            startSymbol = "+"
                            duration = { 5 }
                            subtitle = "Technologies" 
                        />
                    }
                </div>

                <MobileButton onClick={onStartNowClick}>
                    Schedule a call
                </MobileButton>      
            </motion.div>

            <motion.div
                className="flex flex-col md:flex-row gap-8"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <Image
                    src={mapImg}
                    width={1000}
                    alt="Applica offices across the world"
                />
            </motion.div>
        </Section>
    );
}
