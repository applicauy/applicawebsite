import '../../../../styles/healthcare.scss'
import '../../../../styles/effects.scss'
import { rubikFont } from '@/assets/fonts';
import Image from 'next/image';
import dialog from '@/assets/shapes/dialog-3.webp';
import ameba from '@/assets/shapes/ameba.webp';
import React from 'react'
import FadeIn from '@/app/_components/effects/fade-in';
import { LandingsH2 } from '@/components/landings/h2';

export const MobileEducationServicesSection = () => {
  return (
    <div className={`${ rubikFont.className } relative left-0 right-0 px-8 py-12 w-screen section-gradient`} >

        <Image
            src={ameba}
            alt="Ameba"
            width={225}
            height={225}
            className="ameba-left-mobile animate-float-left"
        />
        <Image
            src={dialog}
            alt="Dialog"
            width={150}
            height={150}
            className="dialog-right-mobile animate-float-right"
        />
        <FadeIn>
            <div className='relative flex flex-col gap-4 justify-center items-center text-white'>
                <div className='max-w-screen-mdplus text-center'>
                    <LandingsH2
                        mobile
                        title
                        className='w-full'
                    >
                        <b>Education</b> Software Development Services & Solutions
                    </LandingsH2>
                </div>
                <div className="max-w-screen-sm text-md text-white leading-tight text-center flex flex-col gap-4">
                    <p>
                        At Applica, we build edtech solutions that empower education at every level. We partner with universities, K-12 schools, and edtech startups to create learning experiences that are engaging, accessible, and future-ready.
                    </p>
                    <p>
                        It&apos;s more than just code,  it&apos;s combining educational strategy, intuitive UX, and robust engineering to build technology that truly transforms learning.
                    </p>
                </div>
            </div>
        </FadeIn>
    </div>
  )
}


export default MobileEducationServicesSection;
