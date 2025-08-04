import FadeIn from "@/app/_components/effects/fade-in";
import { rubikFont } from "@/assets/fonts";
import Section from "@/components/section";
import { ketTechnologyServices } from "@/utils/data/key-technology-services";
import { motion } from 'framer-motion';
import MobileLandingsCard from "../../../_components/landings/mobile-card";
import Image from "next/image";
import ameba from "@/assets/shapes/ameba-invertida.webp";
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

const MobileHealthcareKeyTechnologySection = () => {
  return (
    <Section className={`${rubikFont.className} relative px-8`}>
        <FadeIn>
            <LandingsH2
                mobile
                title
                className='text-black font-bold text-center'
            >
              Key Technology Services
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
                ketTechnologyServices.map(
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
        <Image
            src={ameba}
            alt="Ameba"
            width={150}
            height={150}
            className="ameba-right-mobile animate-float-right-extended"
        />
    </Section>
  )
}

export default MobileHealthcareKeyTechnologySection;
