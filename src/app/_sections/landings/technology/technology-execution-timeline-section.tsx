'use client'

import FadeIn from '@/app/_components/effects/fade-in';
import { LandingsCard } from '@/app/_components/landings/card';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/section';
import { executions } from '@/utils/data/technology/executions';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

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

export const TechnologyExecutionTimelineSection = () => {
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
                  Execution timelines
                </LandingsH2>                
                <div className="mx-auto w-full justify-center xl:max-w-screen-md text-xl lg:text-2xl xl:text-3xl text-black leading-tight">
                    We move at startup speed. Examples:
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
                className='grid grid-cols-2 gap-6 xl:gap-16 items-stretch mt-10 xl:mt-24 w-full'
            >
                {
                    executions.map(
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
          </div>
        </FadeIn>
        <FadeIn>               
          <div className="mx-auto w-full justify-center text-center xl:max-w-screen-lg text-xl lg:text-2xl xl:text-3xl text-black leading-tight mt-20">
              Timelines vary by scope — but speed and focus are part of the deal.
          </div>
        </FadeIn>
    </Section>
  )
}
