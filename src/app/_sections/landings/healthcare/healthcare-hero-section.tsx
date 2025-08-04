'use client'

import { rubikFont } from '@/assets/fonts';
import infinito from '@/assets/shapes/infinito.webp';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '../../../styles/effects.scss';
import ZoomIn from '@/app/_components/effects/zoom-in';
import Section from '@/components/landings/section';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH1 } from '@/components/landings/h1';
import { LandingsH2 } from '@/components/landings/h2';

const HealthcareHeroSection = () => {

  const [width, setWidth] = useState(0);
      
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  const dimension = width < 1025 ? 350 :
                    width < 1281 ? 400 :
                    575;

  return (
    <Section className={`${rubikFont.className} py-12 xl:py-24 relative overflow-hidden w-full`}>
      <div className="absolute right-0 top-[52%] -translate-y-1/2 z-0">
        <Image
          src={infinito}
          alt="Infinite"
          width={ dimension }
          height={ dimension }
          loading="lazy"
          className="animate-float"
        />
        <div
            className="absolute bottom-[-18px] xl:bottom-[-42px] left-1/4 -translate-x-1/4 w-36 h-6 xl:w-80 xl:h-12 z-0 animate-shadow"
            style={{
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 80%)',
            }}
        />
        
      </div>

      <div className="w-[475px] lg:w-[550px] xl:w-[720px] max-w-full z-20 relative">
        <ZoomIn>
          <LandingsH1>
            Scalable and secure{' '}
            <span className="bg-gradient-to-r from-landing-violet to-landing-blue bg-clip-text text-transparent">
              healthcare
            </span>{' '}
            software development services
          </LandingsH1>
          <LandingsH2 className="mt-8 xl:mt-10">
            Custom healthcare software and digital health solutions to improve patient care,
            clinical workflows, and operational efficiency.
          </LandingsH2>
        </ZoomIn>

        <ZoomIn>
          <LandingsButton
            type = "primary"
            onClick={ onRedirectClick }
            redirect
            className='mt-14'>
            <b>Let&apos;s build</b> your next healthcare solution
          </LandingsButton>
        </ZoomIn>
      </div>
    </Section>
  );
};

export default HealthcareHeroSection;
