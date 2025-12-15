'use client'
import ZoomIn from '@/app/_components/effects/zoom-in';
import { rubikFont } from '@/assets/fonts';
import infinito from '@/assets/shapes/infinito.webp';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH1 } from '@/components/landings/h1';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/section';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export const MobileFinanceHeroSection = () => {
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
                    Scalable and secure<br />
                    <span className="bg-gradient-to-r from-landing-violet to-landing-blue bg-clip-text text-transparent">
                        fintech & banking
                    </span>
                    <br />software development services
                </LandingsH1>
                <LandingsH2 mobile className='mt-8 text-center px-2'>
                    Custom solutions to accelerate innovation, compliance, and operational efficiency.
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
                        <b>Let&apos;s build</b> { width > 767 ? 'your next finance solution' : 'your solution' }
                    </span>
                </LandingsButton>
            </div>
        </ZoomIn>
        <div className="flex flex-col items-center justify-center z-10 mt-16">
            <Image
                src={infinito}
                alt="Infinite"
                width={300}
                height={300}
                loading="lazy"
                className="animate-float"
            />
            <div className="absolute bottom-[-14px] w-52 h-8 z-0 animate-shadow" style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 80%)"
            }} />
        </div> 
    </Section>
  )
}
