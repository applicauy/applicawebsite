'use client'

import { useEffect, useState } from 'react';
import {
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

export default function MobileShareButtons(
    {
        title
    }: {
        title: string
    }
) {

    const [ url, setUrl ] = useState('');

    const [width, setWidth] = useState(0);
        
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    useEffect(
        () => {
            if( typeof window !== 'undefined' ) {
                setUrl( window.location.href );
            }
        },
        []
    )

    return (

        <div className="share-buttons flex flex-col gap-5 justify-center items-center mt-8">
          <span className='text-lg md:text-xl mdplus:text-2xl'>Share this post</span>
          <div className="flex flex-row gap-2 mdplus:gap-5">

            <FacebookShareButton url={url} title={title}>
                <div className="bg-white rounded-full hover:bg-[#1877F2] transition-all duration-300">
                <Image
                        src = {facebookLogoImg}
                        alt = "Facebook Logo"
                        width={ width > 767 ? 60 : 45}
                        height={ width > 767 ? 60 : 45}
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
                    width={ width > 767 ? 60 : 45}
                    height={ width > 767 ? 60 : 45}
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
                    width={ width > 767 ? 60 : 45}
                    height={ width > 767 ? 60 : 45}
                    className='rounded-full'
                    loading="lazy"
                />
                </div>
            </LinkedinShareButton>

            <EmailShareButton url={url} title={title}>
                
                <div className="bg-white rounded-full hover:bg-gray-400 transition-all duration-300">
                <Image
                    src = {emailLogoImg}
                    alt = "E-mail Logo"
                    width={ width > 767 ? 60 : 45}
                    height={ width > 767 ? 60 : 45}
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
                    width={ width > 767 ? 60 : 45}
                    height={ width > 767 ? 60 : 45}
                    className='rounded-full'
                    loading="lazy"
                />
                </div>
            </WhatsappShareButton>
          </div>
        </div>
    )

}