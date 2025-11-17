import FadeIn from '@/app/_components/effects/fade-in';
import { rubikFont } from '@/assets/fonts';
import { LandingsH2 } from '@/components/landings/h2';
import Section from '@/components/section';
import React from 'react'
import { motion } from 'framer-motion';
import { complianceItems } from '@/utils/data/education/compliance-items';
import { MobileGradientCard } from '@/app/(mobile)/_components/landings/mobile-gradient-card';

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

export const MobileEducationComplianceSection = () => {
  return (
    <Section className={`${rubikFont.className} relative px-8`}>
        <FadeIn>
            <LandingsH2
                mobile
                title
                className='text-black font-bold text-center z-10 relative'
            >
              Compliance & Security
            </LandingsH2>
            <p className='text-md text-center text-black mt-8 z-10 relative'>
              Our solutions align with top financial regulations, ensuring integrity, traceability, and full auditability. Compliance is integrated from architecture to deployment:
            </p>
        </FadeIn>
        <div className="flex flex-col w-full items-center mt-8">
          <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`flex flex-col gap-6 items-stretch w-full`}
            >
                {
                    complianceItems.map(
                        ( { title, content }, index ) => (
                            <motion.div
                                key={index}
                                variants={item}>    
                                <MobileGradientCard
                                    title = { title }
                                >
                                    { content }
                                </MobileGradientCard>
                            </motion.div>
                        )
                    )
                }
            </motion.div>
        </div>
        <FadeIn>
            <p className='text-md text-center text-black mt-12 z-10 relative'>
              With Applica, your financial software is built to meet today&apos;s standards and scale securely for tomorrow.
            </p>
        </FadeIn>
    </Section>
  )
}
