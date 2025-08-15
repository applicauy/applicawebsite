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

export const MobileHealthcareFaqsSection = () => {
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
                    <MobileFAQItem
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
                    <MobileFAQItem
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
