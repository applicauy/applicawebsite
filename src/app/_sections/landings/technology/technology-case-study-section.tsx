'use client'

import React, { useEffect, useState } from 'react'
import '../../../styles/healthcare.scss'
import '../../../styles/effects.scss'
import { rubikFont } from '@/assets/fonts';
import vr from '@/assets/vr.webp';
import Image from 'next/image';
import { HealthcareCardValue } from '@/app/_components/landings/card-value';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import FadeLeft from '@/app/_components/effects/fade-left';
import FadeRight from '@/app/_components/effects/fade-right';
import Section from '@/components/landings/section';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';
import { LandingsH3 } from '@/components/landings/h3';

export const TechnologyCaseStudySection = () => {

  const [width, setWidth] = useState(0);
            
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const download = () => {
    const url = '/pdf/Applica_Case_Technology.pdf';
    const a = document.createElement('a');

    a.href = url;
    a.target = '_blank';
    a.download = 'Applica_Case_Technology.pdf';
    a.click();
  }

  return (
    <Section fullWidth className={`${ rubikFont.className } px-[5%] relative left-0 right-0 py-16 xl:py-20 w-screen section-gradient`} >
        <div className='flex flex-col lg:flex-row gap-16 xl:gap-12 justify-start items-center text-white'>
          {
            width > 1024 &&
            (
              <FadeLeft>
                <div className="flex flex-col items-center justify-center right-0 bottom-20 z-10">
                  <Image
                      src={vr}
                      alt="Case Study"
                      width={ 1200 }
                      height={ 600 }
                      loading="lazy"
                      className="animate-float z-10"
                  />
                </div>
              </FadeLeft>
            )
          }
          
          <FadeRight>
            <div className="flex flex-col gap-8 xl:gap-16 w-full text-center lg:text-left">
              <LandingsH2
                  title
              >
                Case study: <b>High-impact tech talent for critical environments</b>
              </LandingsH2>
              <LandingsH3>
                Redesigning the clinical experience in palliative care
              </LandingsH3>
              <div className={`grid ${ width < 850 ? 'grid-cols-1' : 'grid-cols-2' } w-full gap-4 xl:gap-8`}>
                <HealthcareCardValue
                  value = { 40 }
                  startSymbol = "↓"
                  endSymbol = "%"
                  duration={ 5 }
                  concept='Critical incidents across support systems'
                />
                <HealthcareCardValue
                  value = { 12000 }
                  startSymbol = "+"
                  duration={ 5 }
                  concept='Monthly tickets managed during the first year'
                />
              </div>
                              
              <HealthcareCardValue
                value = "Operational stability"
                startSymbol = "↑"
                duration={ 5 }
                concept='Through proactive monitoring and automation'
                text
              />
            </div>
          </FadeRight>
        </div>
        {
            width <= 1024 &&
            (
              <FadeLeft>
                <div className="flex flex-col items-center justify-center right-0 bottom-20 z-10 mt-28">
                  <Image
                      src={vr}
                      alt="Case Study"
                      width={ 500 }
                      height={ 600 }
                      loading="lazy"
                      className="animate-float z-10"
                  />
                </div>
              </FadeLeft>
            )
          }
        <div className='flex flex-row gap-20 justify-start items-center text-white mt-16 lg:mt-32 lg:w-[60%] text-center lg:text-left w-full lg:justify-start'>
          <FadeLeft>
            <LandingsH2
                title
                className='font-bold'
            >
              How we did it.
            </LandingsH2>
            <p className='text-xl xl:text-3xl text-white leading-tight mt-12 mb-12'>
              Applica integrated specialized Tech Squads to strengthen mission-critical operations, automate repetitive tasks, and improve user experience across multiple platforms.
            </p>
            <LandingsButton
              type = "outline-secondary"
              onClick = { download }
              className = {`${ width <= 1024 && 'mx-auto' }`}
              download
            >
              <span className='text-xl lg:text-2xl xl:text-3xl'>Read more - download full case study</span>
              <ArrowDownTrayIcon className="w-7 xl:w-10 h-7 xl:h-10 text-white group-hover:text-landing-indigo transition-all duration-700" strokeWidth={1.5} />
            </LandingsButton>
          </FadeLeft>
        </div>
    </Section>
  )
}

export default TechnologyCaseStudySection;
