import '../../../styles/effects.scss';
import { rubikFont } from '@/assets/fonts'
import dialogo from '@/assets/shapes/dialogo-invertida.webp';
import React from 'react'
import Image from 'next/image';
import FadeIn from '@/app/_components/effects/fade-in';
import { motion } from 'framer-motion';
import { LandingsH2 } from '@/components/landings/h2';
import CardWhyUs from '@/app/_components/landings/card-why-us';
import Section from '@/components/section';

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

export const EducationWhyUsSection = () => {
  return (
    <Section className={`${rubikFont.className} relative flex flex-col items-center py-12 xl:py-20 w-[70%] lg:w-[70%] 2xl:w-[65%]`}>
        <FadeIn>  
            <LandingsH2
              className='text-black font-bold mb-8 xl:mb-16 z-10 relative'
              title
            >
              Why Applica?
            </LandingsH2>
        </FadeIn>

        <Image
          src={dialogo}
          alt="Dialog"
          className="absolute w-[70%] mdplus:w-[75%] lg:w-[70%] xl:w-[80%] 2xl:w-[60%] z-0 pointer-events-none animate-float-right-extended mt-72 xl:mt-80"
        />
        
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-20 z-10 relative w-full px-4 items-stretch justify-items-center"
        >
            <motion.div variants={item} className='w-full '>
                <CardWhyUs value={450} endSymbol="+">
                  Successful projects delivered globally
                </CardWhyUs>
            </motion.div>
            <motion.div variants={item} className='w-full '>
                <CardWhyUs value={88} endSymbol="%">
                  Senior-level tech talent
                </CardWhyUs>
            </motion.div>
            <motion.div variants={item} className='w-full '>
                <CardWhyUs isConsole = { true }>
                  Proven experience in education technology and digital transformation
                </CardWhyUs>
            </motion.div>
            <motion.div variants={item} className='w-full'>
                <CardWhyUs isPeople = { true }>
                  Flexible nearshore teams aligned with your timezone
                </CardWhyUs>
            </motion.div>          
            <motion.div variants={item} className='col-span-2 flex justify-center w-full max-w-[47%]'>
                <CardWhyUs isIsolation = { true }>
                  Engagement models that adapt to your goals and product roadmap
                </CardWhyUs>
            </motion.div>          
        </motion.div>
        <FadeIn>
          <div className="w-full text-xl lg:text-2xl xl:text-3xl text-black leading-tight text-center mt-20">
            <p>
              We build technology with purpose: empowering learning, connection, and progress.
            </p>
          </div>
        </FadeIn>
    </Section>
  )
}
