import { LandingsH3 } from '@/components/landings/h3';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react'

const MobileLandingsCard = (
    {
        image,
        alt,
        title,
        children
    }:
    PropsWithChildren<{ image: any, alt: string, title: string }>
) => {
  return (
    <div className="shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex flex-col gap-4 bg-white rounded-2xl px-4 py-6 text-black">
        <div className="flex flex-col gap-3 items-center justify-center">
            <Image
                src = { image }
                alt = { alt }
                width = {50}
                height = {50}
            />
            <LandingsH3
                mobile
                className='font-bold text-center z-50'
            >
                { title }
            </LandingsH3>
        </div>
        <p className='text-md font-normal text-center z-50'>
            { children }
        </p>
    </div>
  )
}

export default MobileLandingsCard;
