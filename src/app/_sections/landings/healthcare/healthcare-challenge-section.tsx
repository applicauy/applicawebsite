import { rubikFont } from '@/assets/fonts';
import '../../../styles/healthcare.scss';
import React from 'react'
import FadeUp from '@/app/_components/effects/fade-up';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/landings/section';

export const HealthcareChallengeSection = () => {

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  return (
      <Section fullWidth className={`${ rubikFont.className } relative left-0 right-0 px-28 py-16 xl:py-20 w-screen challenge-gradient`} >
        <FadeUp>
          <div className='flex flex-col gap-10 justify-center items-center text-white'>
            <LandingsH2
              className='max-w-screen-sm xl:max-w-screen-md font-bold text-center'
              title
            >
              Every healthcare<br/>challenge is unique
            </LandingsH2>
            <div className="w-full xl:max-w-screen-lg text-2xl xl:text-3xl text-white leading-tight text-center flex flex-col gap-12">
                <p>
                    Schedule a discovery call and let's develop the right one for you.
                </p>
            </div>
            <LandingsButton
              type="secondary"
              onClick={ onRedirectClick }
              redirect
            >
              <span className='text-2xl xl:text-3xl'>Contact our team</span>
            </LandingsButton>
          </div>
        </FadeUp>
      </Section>
  )
}

export default HealthcareChallengeSection;