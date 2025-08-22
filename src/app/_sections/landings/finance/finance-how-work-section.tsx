'use client'
import FadeIn from '@/app/_components/effects/fade-in'
import { rubikFont } from '@/assets/fonts'
import { LandingsH2 } from '@/components/landings/h2'
import Section from '@/components/landings/section'
import '../../../styles/healthcare.scss';
import '../../../styles/effects.scss';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { howWeWorkItems } from '@/utils/data/finance/how-work-items'
import { CardHowWork } from '@/app/_components/landings/card-how-work'
import { LandingsButton } from '@/components/landings/button'

export const FinanceHowWorkSection = () => {

  const [width, setWidth] = useState(0);
        
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  return (
    <Section fullWidth className={`${ rubikFont.className } relative left-0 right-0 px-10 lg:px-28 py-16 w-screen xl:py-24 section-gradient`} >
      <div className="flex flex-col gap-8 lg:gap-12 xl:gap-20 items-center justify-center">
        <FadeIn>
            <div className='flex flex-col gap-6 xl:gap-12 justify-center items-center text-white'>
                <div className='xl:max-w-screen-lg text-center w-full z-10'>
                    <LandingsH2
                        className='w-full font-bold'
                        title
                    >
                        How We Work Together
                    </LandingsH2>
                </div>
                <div className="w-full xl:max-w-screen-mdplus text-xl lg:text-2xl xl:text-3xl text-white leading-tight text-center flex flex-col gap-8 xl:gap-12 z-10">
                    <p>
                        Choose the engagement model that best fits your goals:
                    </p>
                </div>
            </div>
        </FadeIn>
        <FadeIn>
          <div className={`grid grid-cols-2 gap-4 lg:gap-6 xl:gap-12 items-stretch w-full lg:max-w-[90%] xl:max-w-[70%] m-auto justify-center`}>
            {
              howWeWorkItems.map(
              ( { order, title, concept }, index ) => (
                <CardHowWork 
                  key = { index }
                  order = { order }
                  title = { title }
                  concept = { concept }
                />
              )
              )
            }
          </div>
        </FadeIn>
        <FadeIn>
          <LandingsButton
            type="secondary"
            onClick={ onRedirectClick }
            redirect
          >
            Explore both models in detail
          </LandingsButton>
        </FadeIn>
      </div>
    </Section>
  )
}
