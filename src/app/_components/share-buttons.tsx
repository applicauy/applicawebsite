'use client'

import { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import xLogoImg from '@/assets/x.png';
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
          <FacebookShareButton url={url} title={title} className='hover:brightness-125 transition-all duration-300'>
            <FacebookIcon size={50} round={true} />
          </FacebookShareButton>
    
          <TwitterShareButton url={url} title={title} className='hover:brightness-125 transition-all duration-300'>
            <Image
                src = {xLogoImg}
                alt = "X Logo"
                width={50}
                height={50}
                className='rounded-full'
            />
          </TwitterShareButton>
    
          <LinkedinShareButton url={url} title={title} className='hover:brightness-125 transition-all duration-300'>
            <LinkedinIcon size={50} round={true} />
          </LinkedinShareButton>
    
          <WhatsappShareButton url={url} title={title} separator=":: " className='hover:brightness-125 transition-all duration-300'>
            <WhatsappIcon size={50} round={true} />
          </WhatsappShareButton>
        </div>
    )

}