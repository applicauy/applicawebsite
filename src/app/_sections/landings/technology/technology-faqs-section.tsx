import FAQItem from '@/app/_components/landings/faq-item';
import { rubikFont } from '@/assets/fonts';
import React from 'react'
import FadeIn from '@/app/_components/effects/fade-in';
import { motion } from 'framer-motion';
import Section from '@/components/landings/section';
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


const TechnologyFaqsSection = () => {
  return (
    <Section className={`${rubikFont.className} relative flex flex-col justify-center items-center py-4 xl:py-20 w-full xl:w-[90%] 2xl:w-[80%] xl:mb-10`}>
      <FadeIn>
        <LandingsH2
          className='text-black font-bold mb-10 xl:mb-16 z-10 relative'
          title
        >
          FAQs
        </LandingsH2>
      </FadeIn>
      <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-5 2xl:w-[77%] mdplus:w-[90%]"
      >
        <motion.div variants={item}>
          <FAQItem
            question="Do you only work with funded startups?"
            answer="No. We work with early-stage, bootstrapped, and venture-backed companies. What matters is having a clear vision and commitment to build."
          />
        </motion.div>
        <motion.div variants={item}>
          <FAQItem
            question="Can you help define my MVP?"
            answer="Absolutely. We offer product strategy sessions to co-define MVP scope, user flows, and must-have features."
          />
        </motion.div>
        <motion.div variants={item}>
          <FAQItem
            question="What if I already have a tech team?"
            answer="Perfect. We can augment your team with senior devs, designers, or QAs, or help restructure codebases and scale infrastructure."
          />
        </motion.div>
        <motion.div variants={item}>
          <FAQItem
            question="Can you take over an existing codebase or in-progress product?"
            answer="Yes. We often join projects mid-flight, whether to improve architecture, refactor legacy code, or accelerate delivery. We&apos;ll start with a technical audit to map out next steps and ensure a smooth handover."
          />
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default TechnologyFaqsSection;
