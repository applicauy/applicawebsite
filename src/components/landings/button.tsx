import React, { MouseEventHandler } from 'react'
import { PropsWithChildren } from 'react';

export const LandingsButton = (
    {
        onClick,
        href,
        type,
        redirect = false,
        download = false,
        className,
        children
    } :
    PropsWithChildren<
        {
            onClick?: MouseEventHandler<HTMLButtonElement>;
            href?: string,
            type: "primary" | "secondary" | "outline-primary" | "outline-secondary" ;
            redirect?: boolean;
            download?: boolean;
            className?: string;
        }
    >
    
) => {
    return (
        download ? (
            <button className={`
                    ${ className ? className : '' }
                    group
                    text-xl
                    lg:text-2xl
                    xl:text-3xl
                    ${ type === 'primary' && 'bg-landing-indigo hover:bg-landing-indigo-hover text-white' } 
                    ${ type === 'secondary' && 'bg-white hover:bg-landing-indigo-hover hover:text-white text-landing-indigo' }           
                    ${ type === 'outline-primary' && 'border-2 bg-transparent hover:bg-landing-indigo-hover hover:text-white text-landing-indigo hover:border-landing-indigo-hover border-landing-indigo/50' }           
                    ${ type === 'outline-secondary' && 'border-2 bg-transparent hover:bg-white hover:text-landing-indigo text-white hover:border-white/50 border-white/50' }           
                    px-6 
                    py-4 
                    xl:px-8 
                    xl:py-6
                    transition-colors 
                    duration-700 
                    font-normal 
                    rounded-2xl 
                    flex 
                    items-center 
                    gap-2
                    xl:gap-4
                    w-fit
                    hover:cursor-pointer
                `}
                onClick={ onClick }
            >
                { children }
                { redirect && <span className="ml-2 text-2xl xl:text-3xl">→</span> }
                
            </button>
        ) :
        (
            <a className={`
                    ${ className ? className : '' }
                    group
                    text-xl
                    lg:text-2xl
                    xl:text-3xl
                    ${ type === 'primary' && 'bg-landing-indigo hover:bg-landing-indigo-hover text-white' } 
                    ${ type === 'secondary' && 'bg-white hover:bg-landing-indigo-hover hover:text-white text-landing-indigo' }           
                    ${ type === 'outline-primary' && 'border-2 bg-transparent hover:bg-landing-indigo-hover hover:text-white text-landing-indigo hover:border-landing-indigo-hover border-landing-indigo/50' }           
                    ${ type === 'outline-secondary' && 'border-2 bg-transparent hover:bg-white hover:text-landing-indigo text-white hover:border-white/50 border-white/50' }           
                    px-6 
                    py-4 
                    xl:px-8 
                    xl:py-6
                    transition-colors 
                    duration-700 
                    font-normal 
                    rounded-2xl 
                    flex 
                    items-center 
                    gap-2
                    xl:gap-4
                    w-fit
                    hover:cursor-pointer
                `}
                href={ href }
            >
                { children }
                { redirect && <span className="ml-2 text-2xl xl:text-3xl">→</span> }
                
            </a>
        )
    )
}
