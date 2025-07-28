'use client'

import React, { useEffect, useState } from 'react'
import '../../../styles/healthcare.scss'
import '../../../styles/effects.scss'
import { rubikFont } from '@/assets/fonts';
import curantis from '@/assets/curantis.webp';
import Image from 'next/image';
import HealthcareCardValue from '@/app/_components/landings/card-value';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import FadeLeft from '@/app/_components/effects/fade-left';
import FadeRight from '@/app/_components/effects/fade-right';
import Section from '@/components/landings/section';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';
import { LandingsH3 } from '@/components/landings/h3';

export const HealthcareCaseStudySection = () => {

  const [width, setWidth] = useState(0);
            
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const donwload = () => {
    const url = '/pdf/Applica_Case_Curantis.pdf';
    const a = document.createElement('a');

    a.href = url;
    a.target = '_blank';
    a.download = 'Applica_Case_Cutantis.pdf';
    a.click();
  }

  return (
    <Section fullWidth className={`${ rubikFont.className } px-[5%] relative left-0 right-0 py-16 xl:py-20 w-screen section-gradient`} >
        <div className='flex flex-row gap-16 xl:gap-32 justify-start items-center text-white '>
          <FadeLeft>
            <div className="flex flex-col items-center justify-center right-0 bottom-20 z-10">
              {
                width > 1280 ?
                  (
                    <>
                      <Image
                          src={curantis}
                          alt="Curantis"
                          width={ 500 }
                          height={ 600 }
                          loading="lazy"
                          className="animate-float z-10"
                      />
                      <div className={`absolute bottom-12 ${ width >= 1280 ? 'w-64 h-12' : 'w-48 h-8' } xl:w-72 xl:h-12 z-0 animate-shadow`} style={{
                          background: "radial-gradient(ellipse at center, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 80%)"
                      }} />
                    </>
                  ) :
                  (
                    <>
                      <Image
                          src={curantis}
                          alt="Curantis"
                          width={ width > 970 ? 400 : 450 }
                          height={ width > 970 ? 400 : 450 }
                          loading="lazy"
                          className="animate-float z-10"
                      />
                      <div className={`absolute 
                          ${ width <= 850 ? 'bottom-16' : width <= 970 ? 'bottom-10' : 'bottom-8' } 
                          ${ width <= 850 ? 'w-72 h-8' : width <= 970 ? 'w-64 h-10' : 'w-64 h-12' } 
                          xl:w-72 xl:h-12 z-0 animate-shadow`} 
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(0,0,0,.8) 0%, rgba(0,0,0,0) 80%)"
                        }} />
                    </>
                  )

              }
            </div>
          </FadeLeft>
          <FadeRight>
            <div className="flex flex-col gap-8 xl:gap-16 w-full">
              <LandingsH2
                  title
              >
                Case study: <b>Curantis</b>
              </LandingsH2>
              <LandingsH3>
                Redesigning the clinical experience in palliative care
              </LandingsH3>
              <div className={`grid ${ width < 1024 ? 'grid-cols-1' : 'grid-cols-2' } w-full gap-4 xl:gap-8`}>
                <HealthcareCardValue
                  value = { 45 }
                  startSymbol = "↓"
                  endSymbol = "%"
                  duration={ 5 }
                  concept='Average time to complete a report'
                />
                <HealthcareCardValue
                  value = { 30 }
                  endSymbol = "%"
                  duration={ 5 }
                  concept='Improved interface loading speed'
                />
              </div>
              <LandingsButton
                type = "outline-secondary"
                onClick = { donwload }
              >
                <span className='text-2xl xl:text-3xl'>Read more</span>
                <ArrowDownTrayIcon className="w-7 xl:w-10 h-7 xl:h-10 text-white group-hover:text-landing-indigo transition-all duration-700" strokeWidth={1.5} />
              </LandingsButton>
            </div>
          </FadeRight>
        </div>
    </Section>
  )
}

export default HealthcareCaseStudySection;
