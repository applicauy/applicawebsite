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

export const MobileFinanceWhyUsSection = () => {
  return (
    <Section className={`${rubikFont.className} relative px-8 flex flex-col items-center`}>
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
            className="grid grid-cols-2 gap-6 z-10 relative w-full items-stretch"
        >
            <motion.div variants={item}>
                <MobileCardWhyUs value={450} endSymbol="+">
                  Global projects
                </MobileCardWhyUs>
            </motion.div>
            <motion.div variants={item}>
                <MobileCardWhyUs value={88} endSymbol="%">
                  Senior-level team
                </MobileCardWhyUs>
            </motion.div>
            <motion.div variants={item} className="col-span-2">
                <MobileCardWhyUs isConsole = { true }>
                  Proven expertise in banking, fintech and insurance
                </MobileCardWhyUs>
            </motion.div>
            <motion.div variants={item} className="col-span-2">
                <MobileCardWhyUs isPeople = { true }>
                  <b>Adaptable engagement models:</b> dedicated squads or end-to-end delivery
                </MobileCardWhyUs>              
            </motion.div>          
        </motion.div>
        

        <Image
          src={dialogo}
          alt="Dialog"
          className="absolute w-[85%] z-0 pointer-events-none animate-float-right-extended mt-24"
        />
    </Section>
  )
}
