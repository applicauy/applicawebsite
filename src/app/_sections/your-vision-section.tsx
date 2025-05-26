'use client'

import '../styles/animations.scss';
import '../styles/your-vision.scss';
import H2 from '@/components/h2';
import { avigeaFont } from '@/assets/fonts';
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';

export default function YourVisionSection() {

    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <Section className="flex flex-col w-full">
            
            <div
                ref={ref}
                className={`flex flex-col gap-8 items-start transition-all duration-1000 ease-out transform ${
                  inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                id="your-vision"
            >
                <H2 className="mb-9 md:mb-12 text-center">
                    Your vision,{" "}
                    <span className={`font-medium ${avigeaFont.className}`}>
                        your way
                    </span>
                </H2>

                <div className="md:max-w-[80%] text-xl md:text-4xl leading-tight mb-8">
                    <span className="font-bold">Custom solutions</span> or{" "} 
                    <span className="font-bold">expert teams</span>. Your choice.
                </div>
                
                <div className="flex flex-row gap-16">
                    <div className="box-your-vision-desktop box-your-vision-1 w-1/2 px-12 py-10 flex flex-col gap-6">
                        <p className={`font-medium ${avigeaFont.className} text-4xl text-white text-center`}>Tailored development</p>
                        <p className='text-2xl text-white text-center'>From ideation to deployment, our expert teams ensure scalable, high-performance end to end solutions that drive innovation and long-term success.</p>
                        <p className='text-2xl text-white text-center'>Our commitment to innovation and quality empowers businesses to stay ahead in an ever-evolving digital landscape.</p>
                    </div>
                    <div className="box-your-vision-desktop box-your-vision-2 w-1/2 px-12 py-10 flex flex-col gap-6">
                        <p className={`font-medium ${avigeaFont.className} text-4xl text-white text-center`}>Tech squad</p>
                        <p className='text-2xl text-white text-center'>We provide top-tier tech talent to accelerate projects and seamlessly adapt to your evolving business needs.</p>
                        <p className='text-2xl text-white text-center'>Beyond technical expertise, we emphasize soft skills and a human-centered approach to drive collaboration, spark innovation, and ensure lasting success.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}