import React, { PropsWithChildren } from 'react'
import '../../../styles/healthcare.scss';
import { LandingsH3 } from '@/components/landings/h3';

export const MobileGradientCard = (
    {
        title,
        gradient = true,
        children
    } :
    PropsWithChildren<{ title: string, gradient?: boolean }>
) => {
  return (
    <div className={`
        shadow-[0_4px_16px_rgba(0,0,0,0.2)] 
        flex 
        flex-col 
        gap-3 
        xl:gap-4 
        rounded-2xl
         p-6 
        xl:p-8 
        justify-center 
        ${ gradient ? 'card-gradient' : 'bg-white' }
        ${ gradient && 'h-full' } 
    `}>
        <div className="flex flex-row gap-1 xl:gap-3 items-center justify-center">
            <LandingsH3
                className={`
                    font-bold 
                    z-50 
                    text-center
                    ${ gradient ? 'text-white' : 'text-indigo-700' }
                `}
                mobile
            >
                { title }
            </LandingsH3>
        </div>
        <p className={`
            text-center 
            text-md 
            font-normal 
            z-50
            ${ gradient ? 'xl:text-3xl' : 'xl:text-xl' }
            ${ gradient ? 'text-white' : 'text-black' }
        `}>
            { children }
        </p>
    </div>
  )
}
