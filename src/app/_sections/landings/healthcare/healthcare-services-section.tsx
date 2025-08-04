'use client'

import '../../../styles/healthcare.scss'
import '../../../styles/effects.scss'
import { rubikFont } from '@/assets/fonts';
import Image from 'next/image';
import dialog from '@/assets/shapes/dialogo.webp';
import dialogTablet from '@/assets/shapes/dialog-3.webp';
import ameba from '@/assets/shapes/ameba.webp';
import React, { useEffect, useState } from 'react'
import FadeIn from '@/app/_components/effects/fade-in';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/landings/section';

export const HealthcareServicesSection = () => {
    const [width, setWidth] = useState(0);
          
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

  return (
    <Section fullWidth className={`${ rubikFont.className } relative left-0 right-0 px-28 py-16 xl:py-24 w-screen section-gradient`} >

        <Image
            src={ameba}
            alt="Ameba"
            width={ width > 1280 ? 600 : 400 }
            height={ width > 1280 ? 600 : 400 }
            className="ameba-left animate-float-left"
        />
        {
            width >= 970 ? 
                <Image
                    src={ dialog }
                    alt="Dialog"
                    width={ width > 1280 ? 600 : 400 }
                    height={ width > 1280 ? 600 : 400 }
                    className="dialog-right animate-float-right"
                />
                :
                <Image
                    src={ dialogTablet }
                    alt="Dialog"
                    width={ 200 }
                    height={ 200 }
                    className="dialog-right animate-float-right"
                />
        }
        
        <FadeIn>
            <div className='flex flex-col gap-12 xl:gap-20 justify-center items-center text-white'>
                <div className='w-[90%] lg:w-[70%] xl:max-w-screen-lg text-center xl:w-full z-10'>
                    <LandingsH2
                        className='w-full'
                        title
                    >
                        <b>Healthcare</b> Software Development Services & Solutions
                    </LandingsH2>
                </div>
                <div className="w-[80%] lg:w-[70%] xl:w-full xl:max-w-screen-mdplus text-xl xl:text-3xl text-white leading-tight text-center flex flex-col gap-8 xl:gap-12 z-10">
                    <p>
                        At Applica, we build digital solutions that strengthen the healthcare ecosystem. We work with clinics, hospitals, eHealth platforms, labs, and medtech startups to turn technology into real value.
                    </p>
                    <p>
                        We don&apos;t just write code—we understand clinical workflows, regulatory demands, and the need for intuitive, secure, and scalable experiences.
                    </p>
                </div>
            </div>
        </FadeIn>
    </Section>
  )
}


export default HealthcareServicesSection;