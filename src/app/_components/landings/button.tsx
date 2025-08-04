import React, { MouseEventHandler } from 'react'
import { PropsWithChildren } from 'react';

const LandingsButton = (
    {
        onClick,
        type,
        redirect = true,
        children
    } :
    PropsWithChildren<
        {
            onClick: MouseEventHandler<HTMLButtonElement>;
            type: "primary" | "secondary" | "outline-primary" | "outline-secondary" ;
            redirect?: boolean;
        }
    >
    
) => {
    return (
      <button className={`
          group
          text-2xl 
          xl:text-3xl
          ${ type === 'primary' && 'bg-landing-indigo hover:bg-landing-indigo-hover text-white' } 
          ${ type === 'secondary' && 'bg-white hover:bg-landing-indigo-hover hover:text-white text-landing-indigo' }           
          ${ type === 'outline-primary' && 'bg-transparent hover:bg-landing-indigo-hover hover:text-white text-landing-indigo hover:border-landing-indigo-hover border-landing-indigo/50' }           
          ${ type === 'outline-secondary' && 'bg-transparent hover:bg-white hover:text-landing-indigo text-white hover:border-white/50 border-white/50' }           
          mt-12 
          transition-colors 
          duration-700 
          font-normal 
          px-6 
          py-4 
          xl:px-8 
          xl:py-6 
          rounded-2xl 
          flex 
          items-center 
          gap-2
      `}
      onClick={ onClick }
      >
        <span>
          { children }
        </span>
        { redirect && <span className="ml-2 text-2xl xl:text-3xl">→</span> }
        
      </button>
    )
}
