"use client"

import '../../styles/animations.scss';
import Image from "next/image";
import MobileButton from "../_components/mobile-button";
import MobileGradientBall from "../_components/mobile-gradient-ball";
import MobileH2 from "../_components/mobile-h2";
import { useNavigationHandlers } from "@/lib/helpers";
import mapImg from "@/assets/mapa.webp";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from "@/components/section";
import { useEffect, useState } from 'react';


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

    const [hasMounted, setHasMounted] = useState(false);
                    
    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <Section className="flex flex-col-reverse gap-10">
            <div
                className={ `flex flex-col items-center md:items-start md:w-[60%] w-full z-20 fade-in-left ${
                  hasMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }` }
            >
                <MobileH2 className="w-full text-center md:text-left">
                    Bridging the gap between cutting-edge technology and impactful results, we deliver customized software solutions that scale with your business.
                </MobileH2>

                <div ref={ref} className="flex flex-wrap flex-row mt-12 md:mt-12 mb-12 md:mb-16 gap-6 justify-center">
                    { inView && 
                        <MobileGradientBall 
                            title = {450} 
                            startSymbol = "+"
                            duration = { 5 }
                            subtitle = "Completed projects" 
                        />
                    }
                    { inView && 
                        <MobileGradientBall 
                            title = { 10 }
                            duration = { 5 }
                            subtitle = "Years" 
                        />
                    }
                    { inView && 
                        <MobileGradientBall 
                            title = { 88 }
                            endSymbol = "%"
                            duration = { 5 } 
                            subtitle = "Senior level tech talents" 
                        />
                    }
                    { inView && 
                        <MobileGradientBall 
                            title = { 4.8 } 
                            endSymbol = "/5"
                            duration = { 5 }
                            subtitle = "Clutch average" 
                        />
                    }
                </div>

                <MobileButton onClick={onStartNowClick}>
                    Schedule a call
                </MobileButton>      
            </div>

            <div
                className={`flex flex-col md:flex-row gap-8 fade-in-left ${
                  hasMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
            >
                <Image
                    src={mapImg}
                    width={1000}
                    height={100}
                    alt="Applica offices across the world"
                    loading="lazy"
                />
            </div>
        </Section>
    );
}
