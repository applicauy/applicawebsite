"use client";

import '../../styles/animations.scss'
import '../../styles/latest-posts.scss'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import MobileH1 from '../_components/mobile-h1';
import { avigeaFont } from '@/assets/fonts';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Section from '@/components/section';
import { useInView } from 'react-intersection-observer';

export default function MobileLatestPostsSection(
    { 
        fromPost = false
    } :
    { 
        fromPost?: boolean
    }
) {
  const LatestPostsClient = dynamic(() => import('@/app/_components/latest-posts-client'));

  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  
  return (
    <Section className="flex flex-col md:gap-20">
        <div
            ref={ref}
            className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 ease-out transform ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
            }`}
        >
            {
                !fromPost &&
                <div className="latest-posts-degraded-mobile">
                    <Image
                        src="/images/gradient-mobile.webp"
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
        </div>
    </Section>
  )
}
