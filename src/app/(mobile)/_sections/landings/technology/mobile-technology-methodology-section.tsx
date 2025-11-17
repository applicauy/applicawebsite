import FadeIn from '@/app/_components/effects/fade-in'
import { LandingsH2 } from '@/components/landings/h2'
import Section from '@/components/section'
import React from 'react'
import { motion } from 'framer-motion';
import { rubikFont } from '@/assets/fonts';
import { methodologies } from '@/utils/data/technology/methodologies';
import { MobileGradientCard } from '../../../_components/landings/mobile-gradient-card';
import Image from 'next/image';
import dialog from '@/assets/shapes/dialogo.webp';

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

export const MobileTechnologyMethodologySection = () => (
  <Section className={`${rubikFont.className} relative px-8`}>
        <FadeIn>
            <LandingsH2
                mobile
                title
                className='text-black font-bold text-center'
            >
              Methodologies & working style
            </LandingsH2>
            <div className="max-w-screen-sm text-md text-black leading-tight text-center flex flex-col gap-4 mb-4 z-10 mt-8">
              <p>
                We adapt to your startup&apos;s culture, stage, and sprint pace, no overhead, just focused delivery.              
              </p>
            </div>
        </FadeIn>
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid grid-cols-1 gap-6 mt-10`}
        >
            {
                methodologies.map(
                    ( { title, content }, index ) => (
                        <motion.div
                            key={index}
                            variants={item}>    
                            <MobileGradientCard
                                title = { title }
                            >
                                { content }
                            </MobileGradientCard>
                        </motion.div>
                    )
                )
            }
        </motion.div>
        <FadeIn>
          <div className="max-w-screen-sm text-md text-black leading-tight text-center flex flex-col gap-4 mb-4 mt-10 z-10">
            <p>
                No unnecessary layers. Just real progress, sprint after sprint.
            </p>
          </div>
        </FadeIn>
        <Image
            src={ dialog }
            alt="Dialog"
            width={ 200 }
            height={ 200 }
            className="ameba-right-mobile animate-float-right-extended"
        />
    </Section>
)
