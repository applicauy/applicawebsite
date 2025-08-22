import FadeIn from '@/app/_components/effects/fade-in'
import { rubikFont } from '@/assets/fonts'
import Section from '@/components/section'
import blog from '@/assets/blog.webp';
import Image from 'next/image'
import React from 'react'
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';

export const MobileFinanceBlogSection = () => {
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
                        <li>Digital banking transformation</li>
                        <li>Fintech innovation</li>
                        <li>Financial compliance and cybersecurity</li>
                    </ul>
                    <LandingsButton
                        type = "outline-primary"
                        onClick={ onRedirectClick }
                        redirect
                        className='mt-6'
                    >
                        <span>Read more</span>
                    </LandingsButton>
                    <Image
                        src = { blog }
                        alt = 'Blog'
                        className='w-full rounded-3xl mt-10'/>
                </div>
            </FadeIn>
        </div>
    </Section>
  )
}
