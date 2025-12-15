import FadeUp from '@/app/_components/effects/fade-up';
import { rubikFont } from '@/assets/fonts';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';
import '../../../../styles/healthcare.scss';
import '../../../../styles/effects.scss';
import React from 'react'

export const MobileFinanceChallengeSection = () => {
  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className={`${rubikFont.className} relative left-0 right-0 px-4 py-10 w-screen challenge-gradient overflow-hidden`}>
      <FadeUp>
        <div className="relative z-10 flex flex-col gap-6 justify-center items-center text-white">
          <LandingsH2
              mobile
              title
              className='max-w-screen-xs leading-tight w-full font-bold text-center'
          >
              Every financial challenge is unique
          </LandingsH2>
          <div className="max-w-screen-xs text-md leading-tight text-center flex flex-col gap-12">
            <p>
                Schedule a discovery call to build the right solution for yours.
            </p>
          </div>
          <LandingsButton
              type = "secondary"
              href='/contact'
              redirect
          >
              <span>Contact our team</span>
          </LandingsButton>
        </div>
      </FadeUp>
    </div>
  );
}
