import { LandingsH3 } from '@/components/landings/h3'
import React, { PropsWithChildren } from 'react'
import '../../styles/healthcare.scss';

export const GradientCard = (
    {
        title,
        children
    } :
    PropsWithChildren<{ title: string }>
) => {
  return (
    <div className="h-full shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex flex-col gap-3 xl:gap-4 card-gradient rounded-2xl p-6 xl:p-8 justify-center">
        <div className="flex flex-row gap-2 xl:gap-3 items-center justify-center">
            <LandingsH3
                className='font-bold text-white z-50 text-center'
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
