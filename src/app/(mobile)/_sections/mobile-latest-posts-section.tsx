"use client";

import React from 'react'
import { motion } from 'framer-motion';
import MobileH1 from '../_components/mobile-h1';
import { avigeaFont } from '@/assets/fonts';
import backgroundImg from '@/assets/background/gradient-mobile.webp';
import Image from 'next/image';
import dynamic from 'next/dynamic';

export default function MobileLatestPostsSection(
    { 
        fromPost = false
    } :
    { 
        fromPost?: boolean
    }
) {
  const Section = dynamic(() => import('@/components/section'));
  const LatestPostsClient = dynamic(() => import('@/app/_components/latest-posts-client'));
  
  return (
    <Section className="flex flex-col md:gap-20">
        <motion.div
            className="flex flex-col md:flex-row gap-8"
            initial={{ opacity: 0, x: "-20px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            {
                !fromPost &&
                <div className="latest-posts-degraded-mobile">
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
            }
            <MobileH1 className="text-center">
                Check out our{" "}
                <span className={`font-medium ${avigeaFont.className}`}>
                    latest posts
                </span>
            </MobileH1>
            <div className="flex flex-col">
                <LatestPostsClient></LatestPostsClient>
            </div>
        </motion.div>
    </Section>
  )
}
