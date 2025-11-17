import FadeIn from '@/app/_components/effects/fade-in';
import { rubikFont } from '@/assets/fonts';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/section'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { executions } from '@/utils/data/technology/executions';
import MobileLandingsCard from '@/app/(mobile)/_components/landings/mobile-card';
import Image from 'next/image';

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

export const MobileTechnologyExecutionTimelineSection = () => {
  
  const [width, setWidth] = useState(0);
            
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Section className={`${rubikFont.className} relative px-8`}>
          <FadeIn>
              <LandingsH2
                  mobile
                  title
                  className='text-black font-bold text-center'
              >
                Execution timelines
              </LandingsH2>
              <div className="max-w-screen-sm text-md text-black leading-tight text-center flex flex-col gap-4 mb-4 z-10 mt-8">
                <p>
                  We move at startup speed. Examples:              
                </p>
              </div>
          </FadeIn>
          <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`grid ${ width < 580 ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-4' } mt-10`}
          >
              {
                  executions.map(
                      ( { image, alt, title, content }, index ) => (
                          <motion.div
                              key={index}
                              variants={item}> 
                              <MobileLandingsCard
                                  image = { image }
                                  alt = { alt }
                                  title = { title }
                              >
                                  { content }
                              </MobileLandingsCard>
                          </motion.div>
                      )
                  )
              }
          </motion.div>
          <FadeIn>
            <div className="max-w-screen-sm text-md text-black leading-tight text-center flex flex-col gap-4 mb-4 mt-10 z-10">
              <p>
                  Timelines vary by scope — but speed and focus are part of the deal.
              </p>
            </div>
          </FadeIn>
      </Section>
  )

}
