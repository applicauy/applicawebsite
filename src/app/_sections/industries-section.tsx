import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import H2 from '@/components/h2';
import { avigeaFont } from '@/assets/fonts';
import financial from "@/assets/financial.webp";
import educational from "@/assets/educational.webp";
import healthcare from "@/assets/healthcare.webp";
import technology from "@/assets/technology.webp";
import Industry from '../_components/industry';

export default function IndustriesSection() {
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
        <Section className="flex flex-col w-full">
            
            <motion.div
                className="flex flex-col gap-8 items-start"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                id="industries"
            >
                <H2 className="mb-9 md:mb-12 text-center">
                    <span className={`font-medium ${avigeaFont.className}`}>
                        Industries
                    </span>
                </H2>

                <div className="grid grid-cols-2 w-full">
                    {
                        INDUSTRIES.map(
                            (i, index) => (
                                <Industry
                                    key={index}
                                    image={i.image}
                                    imageAlt={i.imageAlt}
                                    title={ i.title }
                                    description={ i.description }
                                >
                                </Industry>
                            )
                        )
                    }
                    
                </div>
            </motion.div>
        </Section>
    );
}