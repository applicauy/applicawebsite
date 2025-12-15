import FadeIn from '@/app/_components/effects/fade-in'
import { rubikFont } from '@/assets/fonts'
import Section from '@/components/landings/section'
import dialog from '@/assets/shapes/dialogo-2.webp';
import Image from 'next/image'
import React from 'react'
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';

export const MobileHealthcareBlogSection = () => {

  const onRedirectClick = () => {
    window.location.href = "/news";
  };

  return (
    <Section className={`${rubikFont.className} md:pb-12 px-8`}>
        <div className="flex flex-col gap-6 justify-between items-end">
            <FadeIn>
                <div className="flex flex-col gap-6 max-w-screen-mdplus text-center items-center justify-center">
                    <LandingsH2
                      mobile
                      title
                      className="text-black font-bold"
                    >
                      Resources & Blog
                    </LandingsH2>
                    <p className="text-md text-black">
                        Visit our blog to explore more about digital health innovation.
                    </p>
                    <ul className='text-md text-black'>
                        <li>Clinical software</li>
                        <li>Data security</li>
                        <li>Hospital transformation</li>
                    </ul>
                    <LandingsButton
                        type = "outline-primary"
                        href='/news'
                        redirect
                        className='mt-6'
                    >
                        <span>Read more</span>
                    </LandingsButton>
                    <Image
                        src = { dialog }
                        alt = 'Dialog'
                        width={ 250 }
                        className='rotate-[90deg] animate-float-left mt-20 m-x-auto'/>
                </div>
            </FadeIn>
        </div>
    </Section>
  )
}
