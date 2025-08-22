'use client'

import FadeIn from '@/app/_components/effects/fade-in';
import FadeLeft from '@/app/_components/effects/fade-left';
import { rubikFont } from '@/assets/fonts';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/landings/section';
import React, { useEffect, useState } from 'react'
import dialog from '@/assets/shapes/dialogo-2-invertido.webp';
import Image from 'next/image';
import '../../../styles/healthcare.scss';
import '../../../styles/effects.scss';
import { motion } from 'framer-motion';
import { GradientCard } from '@/app/_components/landings/gradient-card';
import { complianceItems } from '@/utils/data/finance/compliance-items';

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


export const FinanceComplianceSection = () => {

  const [width, setWidth] = useState(0);
            
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Section className={`${rubikFont.className} relative mt-10 items-center`}>
      <Image
        src = { dialog }
        alt = "dialog"
        width={ width > 1024 ? 400 : 300 }
        height={ width > 1024 ? 400 : 300 }
        className="dialog-left animate-float-left"
      />
      <FadeIn>
          <div className="flex flex-col gap-8 lg:gap-14 items-center justify-center">
            <LandingsH2
                className='text-black font-bold text-center'
                title
            >
              Compliance & Security
            </LandingsH2>
            <p className='max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg text-xl lg:text-2xl xl:text-3xl z-20 text-center text-black'>
              Our solutions align with top financial regulations, ensuring integrity, traceability, and full auditability. Compliance is integrated from architecture to deployment:
            </p>
          </div>
      </FadeIn>
      <div className="flex flex-col w-full items-center">
        <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`grid grid-cols-2 max-w-screen-md lg:max-w-screen-mdplus xl:max-w-screen-lg gap-6 xl:gap-16 items-stretch mt-10 xl:mt-24`}
          >
              {
                  complianceItems.map(
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
      <FadeIn>
          <div className="flex flex-col justify-center items-center mt-16 lg:mt-28">
            <p className='max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg text-xl lg:text-2xl xl:text-3xl z-20 text-center text-black'>
              With Applica, your financial software is built to meet today&apos;s standards and scale securely for tomorrow.
            </p>
          </div>  
      </FadeIn>
    </Section>
  )
}
