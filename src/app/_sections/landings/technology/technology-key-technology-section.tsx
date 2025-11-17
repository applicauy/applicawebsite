import '../../../styles/technology.scss';
import '../../../styles/effects.scss';
import { LandingsCard } from '@/app/_components/landings/card';
import { rubikFont } from '@/assets/fonts';
import { keyTechnologyServices } from '@/utils/data/healthcare/key-technology-services';
import React, { useEffect, useState } from 'react'
import ball from '@/assets/shapes/ball.webp';
import Image from 'next/image';
import FadeIn from '@/app/_components/effects/fade-in';
import { motion } from 'framer-motion';
import Section from '@/components/landings/section';
import { LandingsH2 } from '@/components/landings/h2';
import { stacks } from '@/utils/data/technology/stacks';
import { LandingsButton } from '@/components/landings/button';

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

export const TechnologyKeyTechnologySection = () => {

  const [width, setWidth] = useState(0);
            
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Section className={`${rubikFont.className} relative`}>
        <FadeIn>
            <LandingsH2
                className='text-black font-bold'
                title
            >
              Compliance & Security
            </LandingsH2>
            <div className="w-full xl:max-w-screen-lg text-xl lg:text-2xl xl:text-3xl text-black leading-tight mt-6 z-10">
              <p>
                We work with the tools and technologies that power modern products:
              </p>
            </div>
        </FadeIn>
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid ${ width >= 970 ? 'grid-cols-2' : 'grid-cols-1' } gap-6 xl:gap-16 mt-10 xl:mt-18 items-stretch`}
        >
            {
                stacks.map(
                    ( { image, alt, title, content }, index ) => (
                        <motion.div
                            key={index}
                            variants={item}> 
                            <LandingsCard
                                image = { image }
                                alt = { alt }
                                title = { title }
                                inline = { width < 970 }
                            >
                                { content }
                            </LandingsCard>
                        </motion.div>
                    )
                )
            }
        </motion.div>
        {
          width >= 970 && (
            <Image
              src={ball}
              alt="Ameba"
              width={ width > 1280 ? 100 : 80 }
              height={ width > 1280 ? 100 : 80 }
              className="ameba-ball-technology spin" />
          )
        }
        <FadeIn>
            <div className="w-full xl:max-w-screen-lg text-xl lg:text-2xl xl:text-3xl text-black leading-tight mt-20 z-10">
              <p>
                We match the stack to your product stage, speed, and team preferences.
              </p>
            </div>
        </FadeIn>       
    </Section>
  )
}

export default TechnologyKeyTechnologySection;
