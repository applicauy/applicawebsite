"use client";

import '../styles/animations.scss';
import Button from "@/components/button";
import { avigeaFont } from "@/assets/fonts";
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';
import H1 from '@/components/h1';
import { useEffect, useState } from 'react';

export default function LandingSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    const [isMobile, setIsMobile] = useState(false);
    
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth < 800 );
    }, []);

    const onStartNowClick = () => {
        window.location.href = "/contact";
    };

    return (
        <Section className="py-12 lg:py-24">
            {/* Example of how to utilize motion's animation upon the user's first view (it 
                only triggers when the user sees it for the first time). */}
            <div
                ref={ref}
                className={`md:max-w-[66%] transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
                <div className={'mdplus:w-[100%] lg:w-[80%]'}>
                    <H1 className="mb-8 lg:mb-5">
                        We turn{" "}
                        <span
                            className={`text-highlight ${avigeaFont.className} font-medium`}
                        >
                            software development
                        </span>{" "}
                        into global impact
                    </H1>
                    
                    <div className="md:text-3xl lg:text-4xl mb-12 text-violet">Delivering cutting-edge solutions tailored to fuel your growth</div>
                    <Button highlightedArrow onClick={onStartNowClick}>
                        Start now!
                    </Button>
                </div>
            </div>
        </Section>
    );
}
