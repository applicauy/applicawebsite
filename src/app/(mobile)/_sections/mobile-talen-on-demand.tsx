"use client"

import Image from "next/image";
import MobileButton from "../_components/mobile-button";
import MobileGradientBall from "../_components/mobile-gradient-ball";
import MobileH2 from "../_components/mobile-h2";
import { useNavigationHandlers } from "@/lib/helpers";
import mapImg from "@/assets/mapa.webp";
import { useInView } from 'react-intersection-observer';
import Section from "@/components/section";
import { useEffect, useState } from "react";
import MobileH3 from "../_components/mobile-h3";


/**
 * Renders the About Us section.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function MobileTalenOnDemand() {
    const { onStartNowClick } = useNavigationHandlers();
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    const [width, setWidth] = useState(0);
                
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    return (
        <Section className="flex flex-col-reverse gap-10 md:mt-12">
            <div
                ref={ref}
                className={ `flex flex-col items-center lg:items-start lg:w-[60%] w-full z-20 transition-all duration-1000 ease-out transform ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }` }
            >
                <MobileH3 className="w-full text-center lg:text-left">
                    Bridging the gap between cutting-edge technology and impactful results, we deliver customized software solutions that scale with your business.
                </MobileH3>

                <div ref={ref} className="flex flex-wrap flex-row mt-12 lg:mt-12 mb-12 lg:mb-16 gap-6 justify-center md:w-full">
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
                className={'flex flex-col items-center lg:flex-row gap-8 transition-all duration-1000 ease-out transform'}
            >
                <Image
                    src={mapImg}
                    width={ width < 767 ? 1000 : 500 }
                    height={100}
                    alt="Applica offices across the world"
                    loading="lazy"
                />
            </div>
        </Section>
    );
}
