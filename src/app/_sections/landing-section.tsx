"use client";

import '../styles/animations.scss';
import Button from "@/components/button";
import { avigeaFont } from "@/assets/fonts";
import H2 from "@/components/h2";
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';
import H1 from '@/components/h1';

export default function LandingSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    const onStartNowClick = () => {
        window.location.href = "/contact";
    };

    return (
        <Section className="py-10 md:py-24">
            {/* Example of how to utilize motion's animation upon the user's first view (it 
                only triggers when the user sees it for the first time). */}
            <div
                ref={ref}
                className={`md:max-w-[66%] transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
                <div className="w-[80%]">
                    {/* <div className="text-lg md:text-3xl text-violet mb-5">Delivering cutting-edge solutions tailored to fuel your growth</div> */}
                    <H1 className="mb-5">
                        We turn{" "}
                        <span
                            className={`text-highlight ${avigeaFont.className} font-medium`}
                        >
                             software development
                        </span>{" "}
                        into global impact
                    </H1>
                    <div className="text-xl md:text-4xl mb-12 text-violet">Delivering cutting-edge solutions tailored to fuel your growth</div>
                    <Button highlightedArrow onClick={onStartNowClick}>
                        Start now!
                    </Button>
                </div>
            </div>
        </Section>
    );
}
