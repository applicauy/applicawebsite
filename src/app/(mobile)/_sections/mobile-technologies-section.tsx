'use client'

import Section from "@/components/section";
import { useInView } from "react-intersection-observer";
import MobileCarousel from "../_components/mobile-carousel";

export default function MobileTechnologiesSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <Section>
            <div
                ref={ref}
                className={`lg:max-w-[66%] relative mt-6 transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
            >
                <MobileCarousel />
            </div>
        </Section>
    );
}