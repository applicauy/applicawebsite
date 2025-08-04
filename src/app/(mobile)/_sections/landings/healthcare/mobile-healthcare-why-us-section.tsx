import FadeIn from "@/app/_components/effects/fade-in";
import Section from "@/components/landings/section";
import Image from "next/image";
import { motion } from 'framer-motion';
import MobileHealthcareCardWhyUs from "../../../_components/landings/mobile-card-why-us";
import { rubikFont } from "@/assets/fonts";
import dialogo from '@/assets/shapes/dialogo-invertida.webp';
import { LandingsH2 } from "@/components/landings/h2";

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

export const MobileHealthcareWhyUsSection = () => {
  return (
    <Section className={`${rubikFont.className} relative flex flex-col items-center px-2`}>
        <FadeIn> 
            <LandingsH2
              mobile
              title
              className="text-black font-bold z-10 mb-4 relative text-center"
            >
              Why Applica?
            </LandingsH2>
        </FadeIn>

        <Image
          src={dialogo}
          alt="Dialog"
          className="absolute w-[70%] z-0 pointer-events-none animate-float mt-36"
        />
        
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 z-10 relative w-full items-stretch"
        >
            <motion.div variants={item}>
                <MobileHealthcareCardWhyUs value={450} endSymbol="+" concept="Successful projects" />
            </motion.div>
            <motion.div variants={item}>
                <MobileHealthcareCardWhyUs value={88} endSymbol="%" concept="Senior-level team" />
            </motion.div>
            <motion.div variants={item}>
                <MobileHealthcareCardWhyUs isConsole = { true } concept="Proven clinical software expertise" />
            </motion.div>
            <motion.div variants={item}>
                <MobileHealthcareCardWhyUs isPeople = { true } concept="Flexible nearshore teams" />
            </motion.div>          
        </motion.div>

</Section>
  )
}
