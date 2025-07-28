import React, { PropsWithChildren } from 'react'

export const LandingsH2 = (
    {
        className,
        title = false,
        mobile = false,
        children
    } :
    PropsWithChildren<{ className?: string, title?: boolean, mobile?: boolean }>
) => {
  return (
    <h2 className={`
        ${ className }
        ${ ( !mobile && !title ) && 'text-xl lg:text-xl xl:text-3xl' }
        ${ ( !mobile && title ) && 'text-3xl lg:text-5xl xl:text-6xl' }
        ${ ( mobile && !title ) && 'text-xl' }
        ${ ( mobile && title ) && 'text-2xl' }
        leading-tight
    `}>
        { children }
    </h2>
  )
}
