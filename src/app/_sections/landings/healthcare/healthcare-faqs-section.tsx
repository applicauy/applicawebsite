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


const HealthcareFaqsSection = () => {
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
            className="flex flex-col gap-5 2xl:w-[77%] mdplus:w-[80%]"
      >
        <motion.div variants={item}>
          <FAQItem
            question="What kind of healthcare software do you develop?"
            answer={
              <>
                <p>We build custom solutions tailored to your clinical and operational needs.</p>
                <p>Examples include:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Electronic Health Records (EHR)</li>
                  <li>Mobile apps for patients or clinicians</li>
                  <li>Hospital and appointment management systems</li>
                  <li>Clinical dashboards with real-time data</li>
                  <li>Telehealth platforms and remote monitoring tools</li>
                  <li>Patient portals with medical history, prescriptions, and scheduling</li>
                </ul>
              </>
            }
          />
        </motion.div>
        <motion.div variants={item}>
          <FAQItem
            question="How do you ensure security and regulatory compliance?"
            answer={
              <>
                <p>
                  We follow a compliance-by-design approach in every project. Our solutions include:
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>End-to-end encryption for data at rest and in transit</li>
                  <li>Role-based access control and user traceability</li>
                  <li>Architectures aligned with HIPAA, GDPR, HL7, and FHIR standards</li>
                  <li>Best practices for handling PHI and PII across the full lifecycle</li>
                </ul>
              </>
            }
          />
        </motion.div>
        <motion.div variants={item}>
          <FAQItem
            question="Can I hire a dedicated team for my healthcare project?"
            answer={
              <>
                <p>
                  Absolutely. We offer both dedicated teams that embed into your workflow and end-to-end project delivery.
                </p>
                <p className="mt-2">We can support:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Agile or waterfall methodologies</li>
                  <li>Full multidisciplinary squads or specific roles (Dev, QA, UX, PM)</li>
                  <li>Scalable setups adapted to your product roadmap</li>
                </ul>
              </>
            }
          />
        </motion.div>
      </motion.div>
    </Section>
  )
}

export default HealthcareFaqsSection;
