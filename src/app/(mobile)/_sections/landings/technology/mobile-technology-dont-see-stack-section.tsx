import FadeIn from '@/app/_components/effects/fade-in';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/section';
import React from 'react'

import dialog from '@/assets/shapes/dialogo-invertida.webp';
import Image from 'next/image';

export const MobileTechnologyDontSeeStackSection = () => {
  const onRedirectClick = () => {
    window.location.href = "/contact";
  };
  
  return (
    <Section className='relative px-8'>        
        <FadeIn>
            <div className='w-full text-center challenge-gradient rounded-3xl text-white py-16 justify-center flex flex-col gap-6 xl:gap-10 px-4'>
              <LandingsH2
                title
                mobile
                className='font-bold'
              >
                Don&apos;t see your stack here?
              </LandingsH2>
              <p className='text-md z-10'>
                We probably already work with it, and if not, we&apos;ll ramp up fast.
              </p>
              <div className="w-full text-center flex align-items-center justify-center mt-4">
                <LandingsButton
                    type="secondary"
                    href='/contact'
                    redirect
                >
                    Let&apos;s talk about your tech stack
                </LandingsButton>
              </div>
            </div>
        </FadeIn>
        <Image
            src={dialog}
            alt="Dialog"
            width={ 150 }
            height={ 150 }
            className='dialog-left-technology animate-float-left'
        />
        
    </Section>
  )
}
