import { MobileCardHowWork } from '@/app/(mobile)/_components/landings/mobile-card-how-work';
import FadeIn from '@/app/_components/effects/fade-in';
import { rubikFont } from '@/assets/fonts';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';
import { howWeWorkItems } from '@/utils/data/technology/how-work-items';
import React from 'react'

export const MobileTechnologyHowWorkSection = () => {
  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  return (
    <div className={`${ rubikFont.className } relative left-0 right-0 px-8 py-10 w-screen section-gradient`} >
      <FadeIn>
          <div className='relative flex flex-col gap-4 justify-center items-center text-white'>
              <div className='max-w-screen-mdplus text-center'>
                  <LandingsH2
                      mobile
                      title
                      className='w-full'
                  >
                      <b>How We Work Together</b>
                  </LandingsH2>
              </div>
              <div className="max-w-screen-sm text-md text-white leading-tight text-center flex flex-col gap-4">
                  <p>
                      Choose the engagement model that fits your needs:
                  </p>
              </div>
          </div>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col gap-6 mt-8">
          {
            howWeWorkItems.map(
            ( { order, title, concept }, index ) => (
              <MobileCardHowWork 
                key = { index }
                order = { order }
                title = { title }
                concept = { concept }
              />
            )
            )
          }
        </div>
      </FadeIn>
      <FadeIn>
        <div className="max-w-screen-sm text-md text-white leading-tight text-center flex flex-col gap-4 mt-10">
            <p>
                Want to learn more about these models?
            </p>
        </div>
        <div className="flex flex-row justify-center mt-8 mb-4">
          <LandingsButton
              type = "secondary"
              href='/contact'
              redirect
          >
              <span>See how we work</span>
          </LandingsButton>
        </div>
      </FadeIn>
    </div>
  )
}
