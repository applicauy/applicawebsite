'use client'

import { rubikFont } from '@/assets/fonts';
import education from '@/assets/Education.png';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '../../../styles/effects.scss';
import ZoomIn from '@/app/_components/effects/zoom-in';
import Section from '@/components/landings/section';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH1 } from '@/components/landings/h1';
import { LandingsH2 } from '@/components/landings/h2';

const EducationHeroSection = () => {

  const [width, setWidth] = useState(0);
      
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  const dimension = width < 1025 ? 300 :
                    width < 1281 ? 350 :
                    500;

  return (
    <Section className={`${rubikFont.className} py-12 xl:py-24 relative overflow-hidden w-full`}>
      <div className="absolute right-0 top-[52%] -translate-y-1/2 z-0">
        <Image
          src={education}
          alt="Education"
          width={ dimension }
          height={ dimension }
          loading="lazy"
          className="animate-float"
        />
        
      </div>

      <div className="w-[475px] lg:w-[550px] xl:w-[720px] max-w-full z-20 relative">
        <ZoomIn>
          <LandingsH1>
            Education technology{' '}
            <span className="bg-gradient-to-r from-landing-violet to-landing-blue bg-clip-text text-transparent">
              solutions & software
            </span>{' '}
            development
          </LandingsH1>
          <LandingsH2 className="mt-8 xl:mt-10">
            Custom edtech solutions to enhance learning, streamline operations, and drive student success.
          </LandingsH2>
        </ZoomIn>

        <ZoomIn>
          <LandingsButton
            type = "primary"
            onClick={ onRedirectClick }
            redirect
            className='mt-14'>
            <b>Let&apos;s build</b> your next education solution
          </LandingsButton>
        </ZoomIn>
      </div>
    </Section>
  );
};

export default EducationHeroSection;
