'use client'

import '../styles/cards.scss';
import Image from 'next/image';
import React from 'react'
import arrowIcon from '@/assets/icons/arrow-right.webp';

import { useNavigationHandlers } from '@/lib/helpers';

interface Props {
    title: string;
    urlTitle: string;
    objectID: number;
    image: JSX.Element
}

export default function Card(
    { title, urlTitle, image } : Props
) {  
  const { onGoToPost } = useNavigationHandlers();
  return (
    <div className="relative flex flex-col overflow-hidden card-border bg-clip-border hover:shadow-lg max-w-sm hover:cursor-pointer">
       <div className="relative min-h-[250px] m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
           { image }
       </div>
       <div className="p-6 bg-secondary-bg text-white flex">
           <h3 className="text-xl text-left w-[80%] flex-col">{ title }</h3>
           <div className='w-[20%] flex flex-col items-end justify-center'>
            <div className="rounded-full w-fit md:p-2 bg-highlight hover:bg-white hover:cursor-pointer transition-all duration-300"
                onClick={ () => onGoToPost( urlTitle ) }>
                    <Image
                        src={arrowIcon}
                        width={25}
                        height={25}
                        alt="Arrow Icon"
                        color="transparent"
                        loading="lazy"
                    />
            </div>
           </div>
       </div>
    </div>
  )
}

