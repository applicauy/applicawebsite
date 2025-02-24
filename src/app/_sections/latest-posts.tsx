'use client'
import { avigeaFont } from '@/assets/fonts'
import H2 from '@/components/h2'
import Image from 'next/image';
import backgroundImg from '@/assets/background/gradient-desktop.webp';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import H1 from '@/components/h1';

export default function LatestPosts() {
  
  const Section = dynamic(() => import('@/components/section'));
  const LatestPostsClient = dynamic(() => import('@/app/_components/latest-posts-client'));

  return (
    <Section className="relative flex flex-col gap-8 mb-20">
      <motion.div
          className="flex flex-col gap-8 items-center"
          initial={{ opacity: 0, x: "-20px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="latest-posts-degraded">
          <Image
            src={backgroundImg}
            alt="Background Image"
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
            loading="lazy"
            quality={70}
          />
        </div>
        <div className="w-full z-[1] block">
          <div className='w-[60%]'>
            <H2 className="mb-6 md:mb-12 w-4/5 md:w-full text-center md:text-left">
                Check out our{" "}
                <span
                    className={`font-medium ${avigeaFont.className} block`}
                >
                    latest posts
                </span>
            </H2>
          </div>
        </div>
        <div className="block w-[100%]">
          <LatestPostsClient></LatestPostsClient>
        </div>
      </motion.div>
    </Section>
  )
}
