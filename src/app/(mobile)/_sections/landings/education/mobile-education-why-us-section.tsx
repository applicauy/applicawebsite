import FadeIn from "@/app/_components/effects/fade-in";
import Section from "@/components/section";
import Image from "next/image";
import { motion } from 'framer-motion';
import { rubikFont } from "@/assets/fonts";
import dialogo from '@/assets/shapes/dialogo-invertida.webp';
import { LandingsH2 } from "@/components/landings/h2";
import MobileCardWhyUs from "../../../_components/landings/mobile-card-why-us";

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

export const MobileEducationWhyUsSection = () => {
  return (
    <Section className={`${rubikFont.className} relative flex flex-col items-center px-8`}>
        <FadeIn> 
            <LandingsH2
              mobile
              title
              className="text-black font-bold z-10 mb-4 relative text-center"
            >
              Why Applica?
            </LandingsH2>
        </FadeIn>
        
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 z-10 relative w-full items-stretch"
        >
            <motion.div variants={item}>
                <MobileCardWhyUs value={450} endSymbol="+">
                  Successful projects delivered globally
                </MobileCardWhyUs>
            </motion.div>
            <motion.div variants={item}>
                <MobileCardWhyUs value={88} endSymbol="%">
                  Senior-level tech talent
                </MobileCardWhyUs>
            </motion.div>
            <motion.div variants={item} className="col-span-2">
                <MobileCardWhyUs isConsole = { true }>
                  Proven experience in education technology and digital transformation
                </MobileCardWhyUs>
            </motion.div>
            <motion.div variants={item} className="col-span-2">
                <MobileCardWhyUs isPeople = { true }>
                  Flexible nearshore teams aligned with your timezone
                </MobileCardWhyUs>              
            </motion.div>          
            <motion.div variants={item} className="col-span-2">
                <MobileCardWhyUs isIsolation = { true }>
                  Engagement models that adapt to your goals and product roadmap
                </MobileCardWhyUs>              
            </motion.div>          
        </motion.div>
        <FadeIn>
            <p className='text-md text-center text-black mt-12 z-10 relative'>
              We build technology with purpose: empowering learning, connection, and progress.
            </p>
        </FadeIn>
        <Image
          src={dialogo}
          alt="Dialog"
          className="absolute w-[85%] z-0 pointer-events-none animate-float-right-extended mt-44"
        />
    </Section>
  )
}
