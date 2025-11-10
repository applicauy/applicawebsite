import FadeIn from "@/app/_components/effects/fade-in";
import { rubikFont } from "@/assets/fonts";
import Section from "@/components/section";
import { motion } from 'framer-motion';
import MobileLandingsCard from "../../../_components/landings/mobile-card";
import Image from "next/image";
import ameba from "@/assets/shapes/ameba-invertida.webp";
import { LandingsH2 } from "@/components/landings/h2";
import { stacks } from "@/utils/data/technology/stacks";
import { useEffect, useState } from "react";

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

const MobileTechnologyKeyTechnologySection = () => {
  const [width, setWidth] = useState(0);
          
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return (
    <Section className={`${rubikFont.className} relative px-8`}>
        <FadeIn>
            <LandingsH2
                mobile
                title
                className='text-black font-bold text-center'
            >
              Compliance & Security
            </LandingsH2>
            <div className="max-w-screen-sm text-md text-black leading-tight text-center flex flex-col gap-4 mb-4 z-10">
              <p>
                  We work with the tools and technologies that power modern products:
              </p>
            </div>
        </FadeIn>
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`grid ${ width < 580 ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-4' } mt-10`}
        >
            {
                stacks.map(
                    ( { image, alt, title, content }, index ) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="h-full items-stretch">    
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
        <FadeIn>
          <div className="max-w-screen-sm text-md text-black leading-tight text-center flex flex-col gap-4 mb-4 mt-10 z-10">
            <p>
                We match the stack to your product stage, speed, and team preferences.
            </p>
          </div>
        </FadeIn>
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

export default MobileTechnologyKeyTechnologySection;
