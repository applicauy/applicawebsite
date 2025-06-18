"use client";

import '../styles/animations.scss';
import Image from "next/image";
import Button from "@/components/button";
import GradientBall from "../_components/gradient-ball";
import H3 from "@/components/h3";
import { useNavigationHandlers } from "@/lib/helpers";
import mapImg from "@/assets/mapa.webp";
import { useInView } from "react-intersection-observer";
import Section from "@/components/section";
import { useEffect, useState } from 'react';

/**
 * Renders the Talent on demand.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function TalentOnDemand() {
    const { onStartNowClick } = useNavigationHandlers();
    
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
        
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
    
    return (
        <Section className="flex flex-col lg:flex-row gap-14 lg:gap-8">
            {
                ( width <= 1024 ) &&
                    <div
                        ref={ref}
                        className={`flex flex-col items-center justify-center lg:items-start lg:w-full my-auto transition-all duration-1000 ease-out transform ${
                        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                        }`}
                    >
                        <Image
                            src={mapImg}
                            width={600}
                            height={600}
                            alt="Applica offices across the world"
                            loading="lazy"
                        />
                    </div>
            }
            <div
                ref={ref}
                className={`flex flex-col items-center lg:items-start lg:w-full my-auto transition-all duration-1000 ease-out transform gap-4 lg:gap-4 ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
            >
                <H3 className="w-full text-center lg:text-left">
                    Bridging the gap between cutting-edge technology and impactful results, we deliver customized software solutions that scale with your business.
                </H3>

                <div className="flex flex-col w-full lg:items-start items-center">
                    <div ref = { ref } className="grid grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 mt-8 lg:mt-12 mb-12 lg:mb-16 gap-12 lg:gap-10">
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

                </div>
                <Button onClick={onStartNowClick}>Schedule a call</Button>
                
            </div>

            {
                ( width > 1024 ) &&
                    <div
                        ref={ref}
                        className={`flex flex-col items-center md:items-start md:w-full my-auto transition-all duration-1000 ease-out transform ${
                        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                        }`}
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
                    </div>
            }


        </Section>
    );
}
