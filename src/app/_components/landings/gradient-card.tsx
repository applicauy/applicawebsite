import { LandingsH3 } from '@/components/landings/h3'
import React, { PropsWithChildren } from 'react'
import '../../styles/healthcare.scss';

export const GradientCard = (
    {
        title,
        gradient = true,
        children
    } :
    PropsWithChildren<{ title: string, gradient?: boolean }>
) => {
  return (
    <div className={`
        ${ gradient && 'h-full' } 
        shadow-[0_2px_8px_rgba(0,0,0,0.2)] 
        flex 
        flex-col 
        gap-3 
        xl:gap-4 
        ${ gradient ? 'card-gradient' : 'bg-white' }
        rounded-2xl 
        p-6 
        xl:p-10 
        justify-center
    `}>
        <div className="flex flex-row gap-2 xl:gap-3 items-center justify-center">
            <LandingsH3
                className={`
                    font-bold 
                    ${ gradient ? 'text-white' : 'text-indigo-700' } 
                    z-50 
                    text-center
                `}
            >
                { title }
            </LandingsH3>
        </div>
        <p className={`
            text-center 
            text-md 
            lg:text-xl 
            ${ gradient ? 'xl:text-3xl' : 'xl:text-xl' }
            font-normal 
            z-50 
            ${ gradient ? 'text-white' : 'text-black' }
        `}>
            { children }
        </p>
    </div>
  )
}
