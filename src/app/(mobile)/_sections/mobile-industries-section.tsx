import dynamic from 'next/dynamic';
import MobileH1 from '../_components/mobile-h1';
import { avigeaFont } from '@/assets/fonts';
import { motion } from 'framer-motion';

import financial from "@/assets/icons/finance-icon.webp";
import educational from "@/assets/icons/education-icon.webp";
import healthcare from "@/assets/icons/heathcare-icon.webp";
import technology from "@/assets/icons/technology-icon.webp";
import Attribute from '@/app/_components/attribute';

export default function MobileIndustriesSection() {
    const Section = dynamic(() => import('@/components/section'));

    const INDUSTRIES = [
        {
            image: financial,
            imageAlt: 'Financing',
            title: 'Financing',
            description: 'We specialize in fintechs, banks, and insurance. From core system integration to regulatory automation and operational security, we deliver tailor-made solutions that drive real impact.'
        },
        {
            image: educational,
            imageAlt: 'Education',
            title: 'Education',
            description: 'We help institutions scale their digital presence through powerful e-learning platforms, seamless integrations, and data-driven engagement. Better tech, better learning.'
        },
        {
            image: healthcare,
            imageAlt: 'Healthcare',
            title: 'Healthcare',
            description: 'We build smart solutions for hospitals and healthcare providers. Our expertise in clinical data tracking, interoperability, and process automation makes care more connected and efficient.'
        },
        {
            image: technology,
            imageAlt: 'Technology',
            title: 'Technology',
            description: 'We partner with tech companies to scale products and boost performance. With deep know-how in software architecture and agile development, we help you stay ahead—fast.'
        },
    ]

    return (
        <Section className={`flex flex-col items-center w-full mt-6 mb-6`}>
            <motion.div
                className="flex flex-col items-center md:items-start md:w-[60%] w-full z-20"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                id='industries'
            >
                <MobileH1 className="mb-6 md:mb-12 text-center">
                    <span className={`font-medium ${avigeaFont.className}`}>
                        Industries
                    </span>
                </MobileH1>

                <div className="flex flex-col gap-6">
                    {
                        INDUSTRIES.map(
                            (i, index) => (
                                <Attribute icon={ i.image } title = { i.title } key = { index }>
                                    { i.description }
                                </Attribute>
                            )
                        )
                    }
                </div>
            </motion.div>
        </Section>
    );
}