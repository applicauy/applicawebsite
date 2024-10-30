'use client'

import { useEffect, useState } from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

import facebookLogoImg from '@/assets/facebook.png';
import xLogoImg from '@/assets/x.png';
import linkedinLogoImg from '@/assets/linkedin.png';
import emailLogoImg from '@/assets/email.png';
import whatsappLogoImg from '@/assets/whatsapp.png';
import Image from 'next/image';

export default function MobileShareButtons(
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

        <div className="share-buttons flex flex-col gap-5 justify-center items-center mt-8">
          <span className='text-lg'>Share this post</span>
          <div className="flex flex-row gap-2">

            <FacebookShareButton url={url} title={title}>
                <div className="bg-white rounded-full hover:bg-[#1877F2] transition-all duration-300">
                <Image
                        src = {facebookLogoImg}
                        alt = "Facebook Logo"
                        width={45}
                        height={45}
                        className='rounded-full'
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
                />
                </div>
            </WhatsappShareButton>
          </div>
        </div>
    )

}