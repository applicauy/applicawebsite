"use client";

import Section from '@/components/section'
import React from 'react'
import { motion } from 'framer-motion';
import MobileH1 from '../_components/mobile-h1';
import { avigeaFont } from '@/assets/fonts';
import LatestPostsClient from '@/app/_components/latest-posts-client';
import backgroundImg from '@/assets/background/gradient.svg';
import Image from 'next/image';

export default function MobileLatestPostsSection(
    { 
        fromPost = false
    } :
    { 
        fromPost?: boolean
    }
) {

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
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
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
