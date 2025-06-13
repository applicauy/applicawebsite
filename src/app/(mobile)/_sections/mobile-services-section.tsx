"use client";

import '../../styles/about-us.scss';
import '../../styles/images.scss';
import placeholderImg from "@/assets/placeholder-img-2.webp";
import MobileDecoratedImage from "../_components/mobile-decorated-image";
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';
import { useEffect, useState } from 'react';

export default function MobileServicesSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [width, setWidth] = useState(0);
        
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    return (
        <Section className="flex flex-col md:gap-20">
            <div
                ref={ref}
                className={`flex transition-all duration-1000 ease-out transform flex-col mdplus:flex-row gap-8 mt-20 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                id="about-us"
            >
                <div className="md:ml-24 gradient-ball-about-us-mobile lg:gradient-ball-about-us absolute"></div>
                <div className="relative mdplus:w-2/4">
                    <div className={`${ width > 767 ? "image-container-tablet" : "image-container"}`}>
                       
                       <MobileDecoratedImage image={ placeholderImg } alt = "About Us Image" />
                          
                   </div>
                </div>

                <div className="flex flex-col md:gap-8 mdplus:w-2/4 text-center mdplus:text-end my-4 mdplus:my-0">
                    <p className="text-2xl mdplus:text-3sm leading-tight mb-8 md:mb-0">
                        We work with leading enterprises and forward-thinking organizations to create 
                        tailored digital solutions, guiding them through their digital transformation.<br/>
                        Long-term partnerships require flexible service. Since 2015, Applica Corp has been dedicated to helping companies scale.
                    </p>

                    <p className="text-2xl text-highlight">
                        We make it happen
                    </p>
                </div>
            </div>
        </Section>
    );
}
