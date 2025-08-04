import '../../../styles/effects.scss';
import { rubikFont } from '@/assets/fonts'
import dialogo from '@/assets/shapes/dialogo-invertida.webp';
import React from 'react'
import Image from 'next/image';
import HealthcareCardWhyUs from '@/app/_components/landings/card-why-us';
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

export const HealthcareWhyUsSection = () => {
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
          className="absolute w-[80%] mdplus:w-[80%] lg:w-[70%] xl:w-[80%] 2xl:w-[60%] z-0 pointer-events-none animate-float-right-extended mt-28 xl:mt-48"
        />
        
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-20 z-10 relative w-full px-4 items-stretch"
        >
            <motion.div variants={item}>
                <HealthcareCardWhyUs value={450} endSymbol="+" concept="Successful projects" />
            </motion.div>
            <motion.div variants={item}>
                <HealthcareCardWhyUs value={88} endSymbol="%" concept="Senior-level team" />
            </motion.div>
            <motion.div variants={item}>
                <HealthcareCardWhyUs isConsole = { true } concept="Proven clinical software expertise" />
            </motion.div>
            <motion.div variants={item}>
                <HealthcareCardWhyUs isPeople = { true } concept="Flexible nearshore teams" />
            </motion.div>          
        </motion.div>

</Section>
  )
}
