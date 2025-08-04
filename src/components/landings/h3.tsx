import React, { PropsWithChildren } from 'react'

export const LandingsH3 = (
    {
        className,
        small = false,
        mobile = false,
        children
    } :
    PropsWithChildren<{ className?: string, small?: boolean, mobile?: boolean }>
) => {
  return (
    <h3 className={`
        ${ className }
        ${ ( !mobile && !small ) && 'text-xl lg:text-2xl xl:text-3xl' }
        ${ ( !mobile && small ) && 'text-md lg:text-xl xl:text-2xl' }
        ${ ( mobile && !small ) && 'text-xl' }
        ${ ( mobile && small ) && 'text-md' }
    `}>
        { children }
    </h3>
  )
}
