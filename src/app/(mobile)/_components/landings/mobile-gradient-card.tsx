import React, { PropsWithChildren } from 'react'
import '../../../styles/healthcare.scss';
import { LandingsH3 } from '@/components/landings/h3';

export const MobileGradientCard = (
    {
        title,
        children
    } :
    PropsWithChildren<{ title: string }>
) => {
  return (
    <div className="shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex flex-col gap-3 xl:gap-4 card-gradient rounded-2xl p-6 xl:p-8 justify-center">
        <div className="flex flex-row gap-1 xl:gap-3 items-center justify-center">
            <LandingsH3
                className='font-bold text-white z-50 text-center'
                mobile
            >
                { title }
            </LandingsH3>
        </div>
        <p className={`text-center text-md lg:text-xl xl:text-3xl font-normal z-50 text-white`}>
            { children }
        </p>
    </div>
  )
}
