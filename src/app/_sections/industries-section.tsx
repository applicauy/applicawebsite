'use client'

import '../styles/animations.scss';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import H2 from '@/components/h2';
import { avigeaFont } from '@/assets/fonts';
import financial from "@/assets/icons/finance-icon.webp";
import educational from "@/assets/icons/education-icon.webp";
import healthcare from "@/assets/icons/heathcare-icon.webp";
import technology from "@/assets/icons/technology-icon.webp";
import Attribute from '../_components/attribute';
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';
import { CardIndustry } from '../_components/card-industry';
import { redirect } from 'next/dist/server/api-utils';

export default function IndustriesSection() {
    const INDUSTRIES = [
        {
            image: financial,
            imageAlt: 'Financing',
            title: 'Financing',
            description: 'We specialize in fintechs, banks, and insurance. From core system integration to regulatory automation and operational security, we deliver tailor-made solutions that drive real impact.',
            redirect: '/finance'
        },
        {
            image: educational,
            imageAlt: 'Education',
            title: 'Education',
            description: 'We help institutions scale their digital presence through powerful e-learning platforms, seamless integrations, and data-driven engagement. Better tech, better learning.',
            redirect: '/education'
        },
        {
            image: healthcare,
            imageAlt: 'Healthcare',
            title: 'Healthcare',
            description: 'We build smart solutions for hospitals and healthcare providers. Our expertise in clinical data tracking, interoperability, and process automation makes care more connected and efficient.',
            redirect: '/healthcare'},
        {
            image: technology,
            imageAlt: 'Technology',
            title: 'Technology',
            description: 'We partner with tech companies to scale products and boost performance. With deep know-how in software architecture and agile development, we help you stay ahead—fast.',
            redirect: '/technology'
        
        },
    ];

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <Section className="flex flex-col w-full mb-8">
            
            <div
                ref={ref}
                className={ `flex flex-col gap-8 items-start transition-all duration-1000 ease-out transform ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }` }
                id="industries"
            >
                <H2 className="mb-6 lg:mb-12 text-center">
                    <span className={`font-medium ${avigeaFont.className}`}>
                        Industries
                    </span>
                </H2>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    {
                        INDUSTRIES.map(
                            (i, index) => (
                                <CardIndustry key={index} icon={i.image} title={i.title} redirect={i.redirect}>
                                    { i.description }
                                </CardIndustry>
                            )
                        )
                    }
                    
                </div>
            </div>
        </Section>
    );
}