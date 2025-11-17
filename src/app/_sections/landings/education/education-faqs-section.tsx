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


const EducationFaqsSection = () => {
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
            question="What financial solutions do you build?"
            answer="From core banking modernization, digital banking apps, payment systems, credit scoring to RegTech platforms."
          />
        </motion.div>
        <motion.div variants={item}>
          <FAQItem
            question="Do you comply with standards like PCI-DSS or SOC 2?"
            answer="Yes, our architectures and processes follow international financial security and compliance standards."
          />
        </motion.div>
        <motion.div variants={item}>
          <FAQItem
            question="How do your teams integrate with clients?"
            answer="We offer dedicated squads or specific roles, adapting to your stack, methodologies, and culture."
          />
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default EducationFaqsSection;
