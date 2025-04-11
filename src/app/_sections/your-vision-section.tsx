import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import H2 from '@/components/h2';
import { avigeaFont } from '@/assets/fonts';

export default function YourVisionSection() {
    const Section = dynamic(() => import('@/components/section'));

    return (
        <Section className="flex flex-col w-full">
            
            <motion.div
                className="flex flex-col gap-8 items-start"
                initial={{ opacity: 0, x: "-20px" }}
                whileInView={{ opacity: 1, x: "0px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
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
                    <span className="font-bold">expert teams</span>. You choose.
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
            </motion.div>
        </Section>
    );
}