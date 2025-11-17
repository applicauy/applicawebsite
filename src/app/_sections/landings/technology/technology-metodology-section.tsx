import FadeIn from '@/app/_components/effects/fade-in'
import FadeRight from '@/app/_components/effects/fade-right'
import { GradientCard } from '@/app/_components/landings/gradient-card'
import { LandingsH2 } from '@/components/landings/h2'
import Section from '@/components/section'
import { methodologies } from '@/utils/data/technology/methodologies'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dialog from '@/assets/shapes/dialogo.webp';
import '../../../styles/technology.scss'
import '../../../styles/effects.scss'

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

export const TechnologyMethodologySection = () => {
  const [width, setWidth] = useState(0);
            
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return (
    <Section className='relative'>        
        <FadeIn>
            <div className="flex flex-col text-center justify-center align-center gap-12">
                <LandingsH2
                    className='text-black font-bold'
                    title
                >
                  Methodologies & working style
                </LandingsH2>                
                <div className="mx-auto w-full justify-center xl:max-w-screen-md text-xl lg:text-2xl xl:text-3xl text-black leading-tight">
                    We adapt to your startup&apos;s culture, stage, and sprint pace, no overhead, just focused delivery.
                </div>
            </div>
        </FadeIn>
        <FadeIn>
          <div className="flex w-full">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='grid grid-cols-2 gap-6 xl:gap-16 items-stretch mt-10 xl:mt-24'
            >
                {
                    methodologies.map(
                        ( { title, content }, index ) => (
                            <motion.div
                                key={index}
                                variants={item}>    
                                <GradientCard
                                    title = { title }
                                >
                                    { content }
                                </GradientCard>
                            </motion.div>
                        )
                    )
                }
            </motion.div>
          </div>
        </FadeIn>
        <FadeIn>               
          <div className="mx-auto w-full justify-center text-center xl:max-w-screen-lg text-xl lg:text-2xl xl:text-3xl text-black leading-tight mt-20">
              No unnecessary layers. Just real progress, sprint after sprint.
          </div>
        </FadeIn>
        <FadeRight>
          <Image
            src={ dialog }
            alt="Dialog"
            width={ width > 1280 ? 600 : 400 }
            height={ width > 1280 ? 600 : 400 }
            className="dialog-right-technology animate-float-right"
          />
        </FadeRight>
    </Section>
  )
}
