'use client'

import FadeLeft from '@/app/_components/effects/fade-left';
import { rubikFont } from '@/assets/fonts';
import Section from '@/components/landings/section';
import React, { useEffect, useState } from 'react'
import jnBank from '@/assets/jnbank.webp';
import Image from 'next/image';
import FadeRight from '@/app/_components/effects/fade-right';
import { LandingsH2 } from '@/components/landings/h2';
import { LandingsH3 } from '@/components/landings/h3';
import { LandingsButton } from '@/components/landings/button';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { caseStudyChecks } from '@/utils/data/finance/case-study-checks';
import { CaseStudyCheck } from '@/app/_components/landings/case-study-check';

export const FinanceCaseStudySection = () => {
  
  const [width, setWidth] = useState(0);
              
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const donwload = () => {
    const url = '/pdf/Applica_Case_JN_Bank.pdf';
    const a = document.createElement('a');

    a.href = url;
    a.target = '_blank';
    a.download = 'Applica_Case_JN_Bank.pdf';
    a.click();
  }

  return (
    <Section fullWidth className={`${ rubikFont.className } px-[5%] relative left-0 right-0 py-16 xl:py-20 w-screen section-gradient`} >
        <div className='flex flex-row gap-16 xl:gap-32 justify-start items-center text-white '>
          <FadeLeft>
            <div className="relative flex flex-col items-center justify-center z-10">
              <Image
                src={jnBank}
                alt="JN Bank"
                width={ width > 1280 ? 750 : width > 970 ? 600 : 550 }
                height={ width > 1280 ? 600 : width > 970 ? 400 : 450 }
                loading="lazy"
                className="animate-float z-10"
              />

              <div 
                className="absolute z-0 animate-shadow"
                style={{
                  bottom: '-20px',
                  width: width > 1280 ? '18rem' : width > 970 ? '12rem' : '10rem',
                  height: width > 1280 ? '2rem' : width > 970 ? '2.5rem' : '2rem',
                  background: "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"
                }}
              />
            </div>
          </FadeLeft>
          <FadeRight>
            <div className="flex flex-col gap-8 xl:gap-12 w-full">
              <LandingsH2
                  title
              >
                Case study: <b>JN Bank</b>
              </LandingsH2>
              <LandingsH3>
                JN Bank needed to modernize its digital ecosystem to maintain leadership in the Caribbean. In 15 months, we achieved:
              </LandingsH3>
              <div className={`grid grid-cols-2 w-full gap-4 xl:gap-8 justify-start`}>
                {
                  caseStudyChecks.map(
                    ( c, index ) => (
                      <CaseStudyCheck
                        key = { index }>
                          {c}
                      </CaseStudyCheck>
                    )
                  )
                }
              </div>
              <LandingsButton
                type = "outline-secondary"
                onClick = { donwload }
                download
              >
                <span className='text-xl lg:text-2xl xl:text-3xl'>Read more</span>
                <ArrowDownTrayIcon className="w-7 xl:w-10 h-7 xl:h-10 text-white group-hover:text-landing-indigo transition-all duration-700" strokeWidth={1.5} />
              </LandingsButton>
            </div>
          </FadeRight>
        </div>
    </Section>
  )
}
