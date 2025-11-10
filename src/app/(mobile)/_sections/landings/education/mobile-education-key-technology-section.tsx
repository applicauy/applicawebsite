import FadeIn from "@/app/_components/effects/fade-in";
import { rubikFont } from "@/assets/fonts";
import Section from "@/components/section";
import { motion } from 'framer-motion';
import MobileLandingsCard from "../../../_components/landings/mobile-card";
import Image from "next/image";
import ameba from "@/assets/shapes/ameba-invertida.webp";
import { LandingsH2 } from "@/components/landings/h2";
import { keyTechnologyServices } from "@/utils/data/education/key-technology-services";

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

const MobileEducationKeyTechnologySection = () => {
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
            <p className="text-md text-black text-center mt-6">
                Our IT services for education cover a full range of platforms and tools designed to enhance learning and streamline administration.
            </p>
        </FadeIn>
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-8 mt-10"
        >
            {
                keyTechnologyServices.map(
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
            className="ameba-right-mobile-up animate-float-right-extended"
        />
    </Section>
  )
}

export default MobileEducationKeyTechnologySection;
