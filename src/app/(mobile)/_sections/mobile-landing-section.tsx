"use client";

import { avigeaFont } from "@/assets/fonts";
import MobileButton from "../_components/mobile-button";
import H2 from "@/components/h2";
import { useInView } from "react-intersection-observer";
import Section from "@/components/section";
import H1 from "@/components/h1";

export default function MobileLandingSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    const onStartNowClick = () => {
        window.location.href = "/contact";
    };

    return (
        <Section className="py-5 md:py-24">
            <div
                ref={ref}
                className={`md:max-w-[66%] relative transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
            >
                <H1 className="mb-5 text-center">
                    We turn{" "} 
                    <span
                        className={`text-highlight ${avigeaFont.className} font-medium`}
                    >
                         software development
                    </span>{" "}
                    into global impact
                </H1>
                <div className="text-xl md:text-4xl w-full mb-12 text-center">
                    Delivering cutting-edge solutions tailored to fuel your growth
                </div>

                <div className="flex flex-row items-center justify-center">
                    <MobileButton highlightedArrow onClick={onStartNowClick} >
                        Start now!
                    </MobileButton>
                </div>

            </div>
        </Section>
    );
}
