'use client'

import { useEffect, useState } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import facebookLogoImg from '@/assets/facebook.webp';
import xLogoImg from '@/assets/x.webp';
import linkedinLogoImg from '@/assets/linkedin.webp';
import emailLogoImg from '@/assets/email.webp';
import whatsappLogoImg from '@/assets/whatsapp.webp';
import Image from 'next/image';

export default function ShareButtons(
    {
        title
    }: {
        title: string
    }
) {

    const [ url, setUrl ] = useState('');

    useEffect(
        () => {
            if( typeof window !== 'undefined' ) {
                setUrl( window.location.href );
            }
        },
        []
    )

    return (

        <div className="share-buttons flex flex-row gap-2 justify-end items-center w-1/2">
          <span className='text-xl mr-4'>Share this post</span>
          <FacebookShareButton url={url} title={title}>
            <div className="bg-white rounded-full hover:bg-[#1877F2] transition-all duration-300">
              <Image
                    src = {facebookLogoImg}
                    alt = "Facebook Logo"
                    width={45}
                    height={45}
                    className='rounded-full'
                    loading="lazy"
              />
            </div>
          </FacebookShareButton>
    
          <TwitterShareButton url={url} title={title}>
            <div className="bg-white rounded-full hover:bg-black transition-all duration-300">
              <Image
                  src = {xLogoImg}
                  alt = "X Logo"
                  width={45}
                  height={45}
                  className='rounded-full'
                  loading="lazy"
              />
            </div>
          </TwitterShareButton>
    
          <LinkedinShareButton url={url} title={title} >
          
            <div className="bg-white rounded-full hover:bg-[#0A66C2] transition-all duration-300">
              <Image
                  src = {linkedinLogoImg}
                  alt = "LinkedIn Logo"
                  width={45}
                  height={45}
                  className='rounded-full'
                  loading="lazy"
              />
            </div>
          </LinkedinShareButton>

          <EmailShareButton url={url} title={title}>
            
            <div className="bg-white rounded-full hover:bg-gray-400 transition-all duration-300">
              <Image
                  src = {emailLogoImg}
                  alt = "Email Logo"
                  width={45}
                  height={45}
                  className='rounded-full'
                  loading="lazy"
              />
            </div>
          </EmailShareButton>
    
          <WhatsappShareButton url={url} title={title} separator=":: ">
            <div className="bg-white rounded-full hover:bg-[#25D366] transition-all duration-300">
              <Image
                  src = {whatsappLogoImg}
                  alt = "WhatsApp Logo"
                  width={45}
                  height={45}
                  className='rounded-full'
                  loading="lazy"
              />
            </div>
          </WhatsappShareButton>
        </div>
    )

}