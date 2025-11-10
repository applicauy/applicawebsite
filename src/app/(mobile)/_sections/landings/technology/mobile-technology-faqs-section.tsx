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

export const MobileTechnologyFaqsSection = () => {
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
                        question="Do you only work with funded startups?"
                        answer="No. We work with early-stage, bootstrapped, and venture-backed companies. What matters is having a clear vision and commitment to build."
                    />
                </motion.div>
                <motion.div variants={item}>
                    <MobileFAQItem
                        question="Can you help define my MVP?"
                        answer="Absolutely. We offer product strategy sessions to co-define MVP scope, user flows, and must-have features."
                    />
                </motion.div>
                <motion.div variants={item}>
                    <MobileFAQItem
                        question="What if I already have a tech team?"
                        answer="Perfect. We can augment your team with senior devs, designers, or QAs, or help restructure codebases and scale infrastructure."
                    />
                </motion.div>
                <motion.div variants={item}>
                    <MobileFAQItem
                        question="Can you take over an existing codebase or in-progress product?"
                        answer="Yes. We often join projects mid-flight, whether to improve architecture, refactor legacy code, or accelerate delivery. We’ll start with a technical audit to map out next steps and ensure a smooth handover."
                    />
                </motion.div>
            </motion.div>
        </Section>
    )
}
