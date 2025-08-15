'use client'

import FadeIn from '@/app/_components/effects/fade-in';
import { rubikFont } from '@/assets/fonts';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/landings/section';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import '../../../styles/healthcare.scss'
import '../../../styles/effects.scss'
import dialog from '@/assets/shapes/dialogo.webp';
import dialogTablet from '@/assets/shapes/dialog-3.webp';
import ameba from '@/assets/shapes/ameba.webp';

export const FinanceServicesSection = () => {
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
                        <b>Fintech & Banking</b> Software Development Services & Solutions
                    </LandingsH2>
                </div>
                <div className="w-[80%] lg:w-[70%] xl:w-full xl:max-w-screen-mdplus text-xl xl:text-3xl text-white leading-tight text-center flex flex-col gap-8 xl:gap-12 z-10">
                    <p>
                        We build technology that drives financial evolution.
                    </p>
                    <p>
                        Custom software for banks, fintechs, insurers, and financial institutions to innovate, stay compliant, and scale securely.
                    </p>
                    <p>
                        It&apos;s more than just code, it&apos;s combining strategic vision, regulatory compliance, and user-centric design for robust, sustainable solutions.
                    </p>
                </div>
            </div>
        </FadeIn>
    </Section>
  );
}
