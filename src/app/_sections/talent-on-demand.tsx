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

/**
 * Renders the Talent on demand.
 *
 * @returns The JSX element representing the About Us section.
 */
export default function TalentOnDemand() {
    const { onStartNowClick } = useNavigationHandlers();
    
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
    
    return (
        <Section className="flex flex-col md:flex-row gap-8">
            <div
                ref={ref}
                className={`flex flex-col items-center md:items-start md:w-full my-auto transition-all duration-1000 ease-out transform ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
            >
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
                
            </div>

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


        </Section>
    );
}
