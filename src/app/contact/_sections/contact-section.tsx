'use client'

import '../../styles/images.scss';
import DecoratedImage from "@/app/_components/decorated-image";
import StrongText from "@/app/_components/strong-text";
import Button from "@/components/button";
import H2 from "@/components/h2";
import placeholderImg from '@/assets/placeholder-img-2.webp';
import MobileButton from "@/app/(mobile)/_components/mobile-button";
import MobileDecoratedImage from "@/app/(mobile)/_components/mobile-decorated-image";
import H3 from "@/components/h3";
import H1 from '@/components/h1';
import { useEffect, useState } from 'react';

export default function ContactSection() {

    const [isMobile, setIsMobile] = useState(false);
    
    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth < 800 );
    }, []);

    return (
        <div className={`flex flex-col md:flex-row w-full ${ ( width > 1000 && width < 1025 ) && 'px-24' } ${ ( width > 900 && width < 1000 ) && 'px-12' }`}>
            <div className="flex flex-col md:w-1/2 justify-center mt-6 md:mt-0">
                <H1 className="mb-4 text-center md:text-start">
                    Looking for help to{" "}
                    <StrongText content="ramp up your development" />
                </H1>
                <H2 className="md:mb-16 mb-8 text-highlight text-center md:text-start" subtitle = { true }>Let&apos;s #MakeIThappen</H2>
                <div className="mb-6">
                    <p className="text-2xl lg:text-3xl text-center md:text-start">
                        First, we need some information from you. <br />
                        Please, fill the form or just send us an email to{" "}
                        <a
                            href="mailto:info@applicacorp.com"
                            className="text-highlight"
                        >
                            info@applicacorp.com
                        </a>{" "}
                        and we will contact you shortly!
                    </p>
                </div>
            </div>
            <div className="relative w-full md:w-1/2 mt-12 md:mt-0">
                <div className="image-container">  
                    {
                        isMobile ? 
                        <MobileDecoratedImage
                            image = { placeholderImg }
                            alt = "Contact us!"
                        /> :
                        <DecoratedImage 
                            image={placeholderImg}
                            alt = "Contact us!"
                        />
                    }
                </div>
            </div>
        </div>
    );

}