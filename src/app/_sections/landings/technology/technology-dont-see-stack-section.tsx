'use client'

import '../../../styles/technology.scss'
import '../../../styles/effects.scss'
import FadeIn from '@/app/_components/effects/fade-in'
import { LandingsButton } from '@/components/landings/button'
import { LandingsH2 } from '@/components/landings/h2'
import Section from '@/components/section'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dialog from '@/assets/shapes/dialogo-invertida.webp';

export const TechnologyDontSeeStackSection = () => {
  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  const [width, setWidth] = useState(0);
            
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Section className='relative'>        
        <FadeIn>
            
            <div className='w-full text-center challenge-gradient rounded-3xl text-white py-16 justify-center flex flex-col gap-6 xl:gap-10'>
              <LandingsH2
                title
                className='font-bold'
              >
                Don&apos;t see your stack here?
              </LandingsH2>
              <p className='text-xl'>
                We probably already work with it, and if not, we&apos;ll ramp up fast.
              </p>
              <div className="w-full text-center flex align-items-center justify-center mt-8">
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
            width={ width > 1280 ? 400 : 300 }
            height={ width > 1280 ? 400 : 300 }
            className='dialog-left-technology animate-float-left'
        />
        
    </Section>
  )
}
