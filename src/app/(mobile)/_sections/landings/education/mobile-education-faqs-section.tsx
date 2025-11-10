import FadeIn from '@/app/_components/effects/fade-in'
import { rubikFont } from '@/assets/fonts'
import Section from '@/components/section'
import React from 'react'
import { motion } from 'framer-motion';
import MobileFAQItem from '../../../_components/landings/mobile-faq-item';
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

export const MobileEducationFaqsSection = () => {
   return (
        <Section className={`${rubikFont.className} relative flex flex-col justify-center items-center md:py-8 px-8`}>
            <FadeIn>
                <LandingsH2
                  mobile
                  title
                  className="text-black font-bold z-10 mb-4 relative"
                >
                  FAQs
                </LandingsH2>
            </FadeIn>
            <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col gap-5"
            >
                <motion.div variants={item}>
                    <MobileFAQItem
                        question="What financial solutions do you build?"
                        answer="From core banking modernization, digital banking apps, payment systems, credit scoring to RegTech platforms."
                    />
                </motion.div>
                <motion.div variants={item}>
                    <MobileFAQItem
                        question="Do you comply with standards like PCI-DSS or SOC 2?"
                        answer="Yes, our architectures and processes follow international financial security and compliance standards."
                    />
                </motion.div>
                <motion.div variants={item}>
                    <MobileFAQItem
                        question="How do your teams integrate with clients?"
                        answer="We offer dedicated squads or specific roles, adapting to your stack, methodologies, and culture."
                    />
                </motion.div>
            </motion.div>
        </Section>
    )
}
