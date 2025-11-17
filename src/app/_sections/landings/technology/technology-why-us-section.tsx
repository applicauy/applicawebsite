import '../../../styles/effects.scss';
import { rubikFont } from '@/assets/fonts'
import dialogo from '@/assets/shapes/dialogo-invertida.webp';
import React from 'react'
import Image from 'next/image';
import FadeIn from '@/app/_components/effects/fade-in';
import { motion } from 'framer-motion';
import Section from '@/components/landings/section';
import { LandingsH2 } from '@/components/landings/h2';
import CardWhyUs from '@/app/_components/landings/card-why-us';

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

export const TechnologyWhyUsSection = () => {
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
          className="absolute w-[70%] mdplus:w-[75%] lg:w-[70%] xl:w-[80%] 2xl:w-[60%] z-0 pointer-events-none animate-float-right-extended mt-56 xl:mt-96"
        />
        
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-20 z-10 relative w-full px-4 items-stretch"
        >
            <motion.div variants={item}>
                <CardWhyUs value={450} endSymbol="+">
                  Global projects
                </CardWhyUs>
            </motion.div>
            <motion.div variants={item}>
                <CardWhyUs value={88} endSymbol="%">
                  Senior-level team
                </CardWhyUs>
            </motion.div>
            <motion.div variants={item}>
                <CardWhyUs isConsole = { true }>
                  Startup-ready mindset with corporate-grade delivery
                </CardWhyUs>
            </motion.div>
            <motion.div variants={item}>
                <CardWhyUs isIsolation = { true }>
                  <b>Flexible models:</b> from squads to full builds
                </CardWhyUs>
            </motion.div>
            <motion.div variants={item}>
                <CardWhyUs isPeople = { true }>
                  Nearshore teams aligned with your timezone and workflows
                </CardWhyUs>
            </motion.div>          
            <motion.div variants={item}>
                <CardWhyUs isPartnership = { true }>
                  A real partner, not just another dev shop
                </CardWhyUs>
            </motion.div>          
        </motion.div>
        <FadeIn>
          <div className="w-full text-xl lg:text-2xl xl:text-3xl text-black leading-tight text-center mt-20">
            <p>
              <b>We build with you</b>, not just for you.
            </p>
          </div>
        </FadeIn>
    </Section>
  )
}
