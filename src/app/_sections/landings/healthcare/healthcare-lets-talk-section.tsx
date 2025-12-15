import FadeIn from '@/app/_components/effects/fade-in';
import '../../../styles/healthcare.scss';
import { rubikFont } from '@/assets/fonts';
import React from 'react'
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';

const HealthcareLetsTalkSection = () => {

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className={`${ rubikFont.className } relative left-0 right-0 px-16 xl:px-28 py-12 xl:py-20 w-screen section-gradient rounded-t-35xl xl:rounded-t-4xl`} >
        <FadeIn>
            <div className='flex flex-col gap-10 justify-center items-center text-white'>
                <LandingsH2
                  className='max-w-screen-md w-full font-bold text-center'
                  title
                >
                  Let&apos;s Talk
                </LandingsH2>
                <div className="max-w-screen-lg text-xl lg:text-2xl xl:text-3xl text-white leading-tight text-center flex flex-col gap-12">
                    <p>
                        Ready to build your next healthcare solution?
                    </p>
                </div>

                <LandingsButton
                    type = "secondary"
                    href='/contact'
                    redirect
                >
                    Talk to a specialist
                </LandingsButton>
            </div>
        </FadeIn>
    </div>
  )
}

export default HealthcareLetsTalkSection;