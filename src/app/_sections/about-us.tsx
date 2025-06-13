"use client";

import '../styles/animations.scss';
import '../styles/about-us.scss';
import placeholderImg from "@/assets/placeholder-img-2.webp";
import DecoratedImage from "../_components/decorated-image";
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';

export default function AboutUs() {
    
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <Section className="flex flex-col md:gap-20 md:mt-10 lg:mt-0">
            <div
                ref={ref}
                className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                id="about-us"
            >
                <div className="gradient-ball-about-us absolute mt-4 lg:mt-0"></div>
                <div className="relative md:w-2/4 lg:w-2/5 mt-6 lg:mt-0">
                    <div className="image-container">
                       
                        <DecoratedImage 
                            image = {placeholderImg}
                            alt = "About Us Image"
                        />
                           
                    </div>
                </div>

                <div className="flex flex-col md:gap-8 md:w-2/4 lg:w-3/5 text-end items-end md:text-end">
                    <p className="text-2xl lg:text-4xl leading-tight mb-14 md:mb-0 w-full text-end lg:pt-20">
                        We work with leading enterprises and forward-thinking organizations to create 
                        tailored digital solutions, guiding them through their digital transformation.<br/>
                        Long-term partnerships require flexible service. Since 2015, Applica Corp has been dedicated to helping companies scale.
                    </p>

                    <p className="text-2xl lg:text-4xl leading-tight text-highlight">We make it happen</p>
                </div>
            </div>
        </Section>
    );
}
