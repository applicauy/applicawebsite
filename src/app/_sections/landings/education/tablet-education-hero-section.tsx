import { rubikFont } from '@/assets/fonts'
import Section from '@/components/landings/section'
import Image from 'next/image'
import infinito from '@/assets/shapes/infinito.webp';
import React from 'react'
import ZoomIn from '@/app/_components/effects/zoom-in';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH1 } from '@/components/landings/h1';
import { LandingsH2 } from '@/components/landings/h2';
import education from '@/assets/Education.png';

export const TabletEducationHeroSection = () => {

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };
  
  return (
    <Section className={`${rubikFont.className} py-12 lg:py-24 relative overflow-hidden w-full flex flex-col items-center justify-center`}>
      <div className="w-[550px] lg:w-[720px] max-w-full z-20 relative text-center flex flex-col">
        <ZoomIn>
          <LandingsH1 className = "text-center">
            Education technology{' '}
            <span className="bg-gradient-to-r from-landing-violet to-landing-blue bg-clip-text text-transparent">
              solutions & software
            </span>{' '}
            development
          </LandingsH1>
          <LandingsH2 className='mt-8 lg:mt-14'>
            Custom edtech solutions to enhance learning, streamline operations, and drive student success.
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
                <b>Let&apos;s build</b> your next education solution
              </span>
            </LandingsButton>
          </div>
        </ZoomIn>

        <div className="flex flex-col items-center justify-center z-10 mt-32">
            <Image
                src={education}
                alt="Education"
                width={400}
                height={400}
                loading="lazy"
                className="animate-float"
            />
        </div> 
      </div>
    </Section>
  )
}
