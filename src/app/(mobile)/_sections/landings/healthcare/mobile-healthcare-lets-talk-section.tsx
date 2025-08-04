import FadeIn from '@/app/_components/effects/fade-in'
import { rubikFont } from '@/assets/fonts'
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';
import React from 'react'

export const MobileHealthcareLetsTalkSection = () => {

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className={`${ rubikFont.className } relative left-0 right-0 px-8 py-10 w-screen section-gradient rounded-t-3xl`} >
        <FadeIn>
            <div className='flex flex-col gap-4 justify-center items-center text-white'>
                <LandingsH2
                    mobile
                    title
                    className='max-w-screen-md leading-tight w-full font-bold text-center'
                >
                    Let&apos;s Talk
                </LandingsH2>
                <div className="max-w-screen-lg text-xl text-white leading-tight text-center flex flex-col gap-12">
                    <p>
                        Ready to build your next healthcare solution?
                    </p>
                </div>
                <LandingsButton
                    onClick={ onRedirectClick }
                    type = "secondary"
                    redirect
                    className='mt-4'
                >
                    <span>Talk to a specialist</span>
                </LandingsButton>
            </div>
        </FadeIn>
    </div>
  )
}
