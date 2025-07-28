import FadeIn from '@/app/_components/effects/fade-in';
import { rubikFont } from '@/assets/fonts';
import Section from '@/components/section';
import React from 'react'
import { motion } from 'framer-motion';
import { industriesSpecialization } from '@/utils/data/industries-specialization';
import MobileLandingsCard from '../../_components/landings/mobile-card';
import '../../../styles/healthcare.scss';
import ball from "@/assets/shapes/ball.webp";
import Image from 'next/image';
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

const MobileHealthcareIndustriesSection = () => {
  return (
    <Section className={`${rubikFont.className} relative px-8`}>
        <FadeIn>
            <LandingsH2
                mobile
                title
                className='text-black font-bold text-center'
            >
              Industry Specializations
            </LandingsH2>
        </FadeIn>
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-8 mt-10"
        >
            {
                industriesSpecialization.map(
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
            <Image
                src={ball}
                alt="Ball"
                width={100}
                height={100}
                className="ball-left-mobile animate-float-right-extended"
            />
        </motion.div>
    </Section>
  )
}

export default MobileHealthcareIndustriesSection;
