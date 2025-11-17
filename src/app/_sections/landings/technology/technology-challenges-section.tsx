import FadeIn from '@/app/_components/effects/fade-in';
import { LandingsCard } from '@/app/_components/landings/card';
import { rubikFont } from '@/assets/fonts';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/section';
import { industriesSpecialization } from '@/utils/data/healthcare/industries-specialization';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import ameba from '@/assets/shapes/ameba-invertida.webp';
import { challenges } from '@/utils/data/technology/challenges';

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

export const TechnologyChallengesSection = () => {
  const [width, setWidth] = useState(0);
            
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Section className={`${rubikFont.className} relative`}>
        <FadeIn>
            <LandingsH2
                className='text-black font-bold w-2/4'
                title
            >
              Common startup challenges we solve
            </LandingsH2>
        </FadeIn>
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid ${ width >= 970 ? 'grid-cols-2' : ' grid-cols-1' } gap-6 xl:gap-16 items-stretch mt-10 xl:mt-16`}
        >
            {
                challenges.map(
                    ( { image, alt, title }, index ) => (
                        <motion.div
                            key={index}
                            variants={item}>    
                            <LandingsCard
                                image = { image }
                                alt = { alt }
                                title = { title }
                                inline = { width < 970 }
                            />
                        </motion.div>
                    )
                )
            }
            
            {/* <Image
                src={ameba}
                alt="Ameba"
                width={ width > 1280 ? 450 : 250 }
                height={ width > 1280 ? 450 : 250 }
                className="ameba-right animate-float-right-extended"
            /> */}
        </motion.div>
    </Section>
  )
}
