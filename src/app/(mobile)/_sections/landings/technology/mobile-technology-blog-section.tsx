import FadeIn from '@/app/_components/effects/fade-in'
import { rubikFont } from '@/assets/fonts'
import Section from '@/components/landings/section'
import blog from '@/assets/blog.webp';
import Image from 'next/image'
import React from 'react'
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';

export const MobileTechnologyBlogSection = () => {

  const onRedirectClick = () => {
    window.location.href = "/news";
  };

  return (
    <Section className={`${rubikFont.className} md:pb-12 px-8 w-full`}>
        <div className="flex flex-col gap-6 justify-between items-end w-full">
            <FadeIn>
                <div className="flex flex-col gap-6 w-full text-center items-center justify-center">
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
                        <li>Startup software development strategies</li>
                        <li>MVP vs full product builds</li>
                        <li>Scaling engineering teams</li>
                        <li>Choosing the right stack for your roadmap</li>
                    </ul>
                    <LandingsButton
                        type = "outline-primary"
                        onClick={ onRedirectClick }
                        redirect
                        className='mt-6'
                    >
                        <span>Go to blog</span>
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
