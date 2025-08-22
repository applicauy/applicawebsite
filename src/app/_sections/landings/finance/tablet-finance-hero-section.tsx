import ZoomIn from '@/app/_components/effects/zoom-in';
import { rubikFont } from '@/assets/fonts';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH1 } from '@/components/landings/h1';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/landings/section';
import React from 'react'
import infinito from '@/assets/shapes/infinito.webp';
import Image from 'next/image';

export const TabletFinanceHeroSection = () => {
  const onRedirectClick = () => {
    window.location.href = "/contact";
  };
  
  return (
    <Section className={`${rubikFont.className} py-12 lg:py-24 relative overflow-hidden w-full flex flex-col items-center justify-center`}>
      <div className="w-[550px] lg:w-[720px] max-w-full z-20 relative text-center flex flex-col">
        <ZoomIn>
          <LandingsH1 className = "text-center">
            Scalable and secure<br />
            <span className="bg-gradient-to-r from-landing-violet to-landing-blue bg-clip-text text-transparent">
              fintech & banking
            </span>{' '}
            software development services
          </LandingsH1>
          <LandingsH2 className='mt-8 lg:mt-14'>
            Custom solutions to accelerate innovation,<br />compliance, and operational efficiency.
          </LandingsH2>
        </ZoomIn>

        <ZoomIn>
          <div className="flex items-center justify-center">
            <LandingsButton
              className='mt-12'
              redirect
              onClick={ onRedirectClick }
              type = "primary"
            >
              <span>
                <b>Let&apos;s build</b> your next finance solution
              </span>
            </LandingsButton>
          </div>
        </ZoomIn>

        <div className="flex flex-col items-center justify-center z-10 mt-32">
            <Image
                src={infinito}
                alt="Infinite"
                width={400}
                height={400}
                loading="lazy"
                className="animate-float"
            />
            <div className="absolute bottom-[-32px] w-72 h-12 z-0 animate-shadow" style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 80%)"
            }} />
        </div> 
      </div>
    </Section>
  )
}
