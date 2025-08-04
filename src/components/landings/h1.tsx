import React, { PropsWithChildren } from 'react'

export const LandingsH1 = (
    {
        className,
        mobile = false,
        children
    } :
    PropsWithChildren<{ className?: string, mobile?: boolean }>
) => {
  return (
    <h1 className={`
        ${ className ? className : '' }
        ${ mobile ? 'text-3xl' : 'text-4xl lg:text-5xl xl:text-6xl' }         
        font-bold 
        leading-tight
    `}>
        { children }
    </h1>
  )
}
