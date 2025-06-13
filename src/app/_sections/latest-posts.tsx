'use client'

import '../styles/animations.scss';
import '../styles/latest-posts.scss';
import { avigeaFont } from '@/assets/fonts'
import H2 from '@/components/h2'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import Section from '@/components/section';
import { useEffect, useState } from 'react';

export default function LatestPosts(
  {
    fromLanding = false
  } :
  {
    fromLanding?: boolean
  }
) {
  
  const LatestPostsClient = dynamic(() => import('@/app/_components/latest-posts-client'), { ssr: false });

  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Section className="relative flex flex-col gap-8 mb-20">
      <div
          ref={ref}
          className={`flex flex-col gap-8 items-center transition-all duration-1000 ease-out transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
          }`}
      >
        {
          fromLanding &&
          <div className={width < 1024 ? 'latest-posts-degraded-mobile' : 'latest-posts-degraded'}>
            <Image
              src="/images/gradient-desktop.webp"
              alt="Background Image"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
              loading="lazy"
              quality={70}
            />
          </div>
        }
        <div className="w-full z-[1] block">
          <div className='w-full lg:w-[60%]'>
            <H2 className="mb-6 lg:mb-12 w-4/5 md:w-full text-center md:text-left">
                Check out our{" "}
                <span
                    className={`font-medium ${avigeaFont.className} lg:block`}
                >
                    latest posts
                </span>
            </H2>
          </div>
        </div>
        <div className="block w-[100%]">
          <LatestPostsClient></LatestPostsClient>
        </div>
      </div>
    </Section>
  )
}
