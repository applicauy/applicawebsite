import '../../../styles/healthcare.scss';
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

export const HealthcareKeyTechnologySection = () => {

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
              Key Technology Services
            </LandingsH2>
        </FadeIn>
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid ${ width >= 970 ? 'grid-cols-2' : 'grid-cols-1' } gap-6 xl:gap-16 mt-10 xl:mt-24 items-stretch`}
        >
            {
                keyTechnologyServices.map(
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
            width={ width > 1280 ? 130 : 80 }
            height={ width > 1280 ? 130 : 80 }
            className="ameba-ball spin" />
          )
        }
        
    </Section>
  )
}

export default HealthcareKeyTechnologySection;