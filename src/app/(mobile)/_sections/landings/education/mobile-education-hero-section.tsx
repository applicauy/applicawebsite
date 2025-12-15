'use client'

import ZoomIn from "@/app/_components/effects/zoom-in";
import { rubikFont } from "@/assets/fonts";
import Section from "@/components/landings/section";
import Image from "next/image";
import education from '@/assets/Education.webp';
import { useEffect, useState } from "react";
import { LandingsButton } from "@/components/landings/button";
import { LandingsH1 } from "@/components/landings/h1";
import { LandingsH2 } from "@/components/landings/h2";


const MobileEducationHeroSection = () => {

  const [width, setWidth] = useState(0);
                    
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  return (
    <Section className={`${rubikFont.className} md:pt-32 py-4 lg:py-24 relative`}>
        <div className={'mdplus:w-[100%] lg:w-[50%] text-black'}>
            <ZoomIn>
                <LandingsH1 mobile className="text-center">
                    Education technology{" "}
                    <span className="bg-gradient-to-r from-landing-violet to-landing-blue bg-clip-text text-transparent">
                        solutions & software
                    </span>
                    {" "}development
                </LandingsH1>
                <LandingsH2 mobile className='mt-8 text-center px-2'>
                    Custom edtech solutions to enhance learning, streamline operations, and drive student success.
                </LandingsH2>
            </ZoomIn>
        </div>
        <ZoomIn>
            <div className="flex flex-col justify-between items-center mt-8 w-full">
                <LandingsButton
                    type = "primary"
                    href='/contact'
                    redirect
                >
                    <span>
                        <b>Let&apos;s build</b> { width > 767 ? 'your next education solution' : 'your solution' }
                    </span>
                </LandingsButton>
            </div>
        </ZoomIn>
        <div className="flex flex-col items-center justify-center z-10 mt-16">
            <Image
                src={education}
                alt="Education"
                width={300}
                height={300}
                loading="lazy"
                className="animate-float"
            />
        </div> 
    </Section>
  )
}

export default MobileEducationHeroSection;
