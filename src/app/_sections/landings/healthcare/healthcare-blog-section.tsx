import '../../../styles/effects.scss';
import '../../../styles/healthcare.scss';
import { rubikFont } from '@/assets/fonts'
import dialog from '@/assets/shapes/dialogo-2.webp';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import FadeLeft from '@/app/_components/effects/fade-left';
import FadeRight from '@/app/_components/effects/fade-right';
import Section from '@/components/landings/section';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';

const HealthcareBlogSection = () => {

  const [width, setWidth] = useState(0);
          
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onRedirectClick = () => {
    window.location.href = "/news";
  };

  const dimension = width < 801 ? 350 :
                    width < 1281 ? 400 :
                    450;

  return (
    <Section className={`${rubikFont.className} pb-12`}>
        <div className="flex flex-row gap-8 xl:gap-12 justify-between items-end">
            <FadeLeft>
                <div className="flex flex-col gap-12 max-w-screen-mdplus">
                    <LandingsH2
                      className='text-black font-bold'
                      title
                    >
                      Resources & Blog
                    </LandingsH2>
                    <p className="text-xl lg:text-2xl xl:text-3xl text-black">
                        Visit our blog to explore more about digital health innovation.
                    </p>
                    <ul className='text-xl lg:text-2xl xl:text-3xl text-black list-disc list-inside'>
                        <li>Clinical software</li>
                        <li>Data security</li>
                        <li>Hospital transformation</li>
                    </ul>
                    <LandingsButton
                        type = "outline-primary"
                        onClick={ onRedirectClick }
                        redirect
                    >
                        Read more
                    </LandingsButton>
                </div>
            </FadeLeft>
            <FadeRight>
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src = { dialog }
                        alt = 'Dialog'
                        width={ dimension }
                        className='rotate-[90deg] animate-float-left'/>
                </div>
            </FadeRight>
        </div>
    </Section>
  )
}

export default HealthcareBlogSection;
