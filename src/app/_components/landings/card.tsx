'use client'
import Image from 'next/image'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { LandingsH3 } from '../../../components/landings/h3';

export const LandingsCard = (
    {
        image,
        alt,
        title,
        inline = false,
        smallText = false,
        children
    }:
    PropsWithChildren<{ image: any, alt: string, title: string, smallText?: boolean, inline?: boolean }>
) => {

  const [width, setWidth] = useState(0);
                  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    inline ?
        ( <div className="h-full shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex flex-row gap-5 xl:gap-5 bg-white rounded-2xl p-6 xl:p-8 items-center">
            <Image
                src = { image }
                alt = { alt }
                width = {75}
                height = {75}
            />
            <div className="flex flex-col gap-1 items-start">
                <LandingsH3
                    className='font-bold text-black z-50'
                >
                    { title }
                </LandingsH3>
                <p className='text-xl lg:text-xl xl:text-3xl font-normal text-black z-50'>
                    { children }
                </p>
            </div>
        </div> ) :
        ( 
            <div className={`
                h-full 
                shadow-[0_2px_8px_rgba(0,0,0,0.2)] 
                xl:shadow-[0_4px_16px_rgba(0,0,0,0.2)] 
                flex 
                flex-col 
                gap-3 
                xl:gap-5 
                bg-white 
                rounded-2xl 
                p-6 
                xl:p-8
                ${ !children && 'justify-center' }
            `}>
                <div className="flex flex-row gap-2 xl:gap-3 items-center">
                    <Image
                        src = { image }
                        alt = { alt }
                        width = { width > 1280 ? 50 : 30 }
                        height = { width > 1280 ? 50 : 30 }
                    />
                    <LandingsH3
                        className='font-bold text-black z-50'
                    >
                        { title }
                    </LandingsH3>
                </div> 
                {
                    children && <p className={`text-md lg:text-xl ${ smallText ? 'xl:text-2xl' : 'xl:text-3xl' } font-normal z-50`}>{ children }</p>
                }     
            </div> 
        )
  );
}
