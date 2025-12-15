import { rubikFont } from '@/assets/fonts';
import '../../../styles/technology.scss';
import React, { useEffect, useState } from 'react'
import FadeUp from '@/app/_components/effects/fade-up';
import { LandingsButton } from '@/components/landings/button';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/landings/section';
import { LandingsH3 } from '@/components/landings/h3';
import { motion } from 'framer-motion';
import { startupServices } from '@/utils/data/technology/startup-services';
import { GradientCard } from '@/app/_components/landings/gradient-card';
import Image from 'next/image';
import ameba from '@/assets/shapes/ameba-invertida.webp';
import FadeRight from '@/app/_components/effects/fade-right';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const TechnologyProductChallengeSection = () => {

  const onRedirectClick = () => {
    window.location.href = "/contact";
  };

  const [width, setWidth] = useState(0);
              
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

  return (
      <Section fullWidth className={`${ rubikFont.className } relative left-0 right-0 px-28 py-16 xl:py-20 w-screen challenge-gradient`} >
        <FadeUp>
          <LandingsH2
            className='text-white font-bold w-3/4 mx-auto text-center'
            title
          >
            Startup & tech<br />development services
          </LandingsH2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`columns-1 ${width >= 970 ? 'md:columns-2' : ''} 
                        gap-6 xl:gap-12 w-4/5 xl:w-3/4 mx-auto mt-10 xl:mt-16`}
          >
            {startupServices.map(({ title, concept }, index) => (
              <motion.div
                key={index}
                variants={item}
                className="mb-6 break-inside-avoid"
              >
                <GradientCard title={title} gradient={false}>
                  {concept}
                </GradientCard>
              </motion.div>
            ))}

          </motion.div>
          
        </FadeUp>
        <Image
          src={ameba}
          alt="Ameba"
          width={width > 1280 ? 450 : 250}
          height={width > 1280 ? 450 : 250}
          className="ameba-right-technology animate-float-right-extended"
        />
        <FadeUp>
          <div className='flex flex-col gap-10 justify-center items-center text-white mt-8 lg:mt-20'>
            <LandingsH3
              className='max-w-screen-sm xl:max-w-screen-md font-bold text-center'
            >
              Every product challenge is unique
            </LandingsH3>
            <div className="w-full xl:max-w-screen-lg text-xl lg:text-2xl xl:text-3xl text-white leading-tight text-center flex flex-col gap-12">
                <p>
                    Schedule a discovery call and let&apos;s build the right solution for yours.
                </p>
            </div>
            <LandingsButton
              type="secondary"
              href='/contact'
              redirect
            >
              Contact our team
            </LandingsButton>
          </div>
        </FadeUp>
      </Section>
  )
}

export default TechnologyProductChallengeSection;
