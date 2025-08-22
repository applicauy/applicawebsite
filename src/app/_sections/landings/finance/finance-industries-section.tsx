'use client'

import FadeIn from '@/app/_components/effects/fade-in';
import { rubikFont } from '@/assets/fonts';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/landings/section';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { LandingsCard } from '@/app/_components/landings/card';
import { industriesSpecialization } from '@/utils/data/finance/industries-specialization';
import Image from 'next/image';
import ameba from '@/assets/shapes/ameba-invertida.webp';

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

export const FinanceIndustriesSection = () => {
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
              Industry Specializations
            </LandingsH2>
        </FadeIn>
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid ${ width >= 970 ? 'grid-cols-2' : ' grid-cols-1' } gap-6 xl:gap-16 items-stretch mt-10 xl:mt-24`}
        >
            {
                industriesSpecialization.map(
                    ( { image, alt, title, content }, index ) => (
                        <motion.div
                            key={index}
                            variants={item}>    
                            <LandingsCard
                                image = { image }
                                alt = { alt }
                                title = { title }
                                inline = { width < 970 }
                                smallText
                            >
                                { content }
                            </LandingsCard>
                        </motion.div>
                    )
                )
            }
            
            <Image
                src={ameba}
                alt="Ameba"
                width={ width > 1280 ? 450 : 250 }
                height={ width > 1280 ? 450 : 250 }
                className="ameba-right animate-float-right-extended"
            />
        </motion.div>
    </Section>
  )
}
