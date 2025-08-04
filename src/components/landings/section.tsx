import '../../../src/app/styles/healthcare.scss'
import '../../../src/app/styles/globals.scss'
import React, { PropsWithChildren } from 'react'

const Section = ({
    className,
    children,
    fullWidth = false,
    innerClassName = ""
}: PropsWithChildren<{
    className?: string;
    fullWidth?: boolean;
    innerClassName?: string;
}>) => {
  return (
    fullWidth ? 
        <section className={`flex flex-col justify-center items-center ${className || ''}`}>
          <div className={` ${ innerClassName } 
            max-w-[850px]
            lg:max-w-[1025px]
            xl:max-w-[1280px]
            2xl:max-w-[1441px]` }>
            {children}
          </div>
        </section>
        :
        <section className={`${className || ''}
            max-w-[850px]
            lg:max-w-[1025px] 
            xl:max-w-[1280px]
            2xl:max-w-[1441px] 
            global-container`}>
          {children}
        </section>
  )
}

export default Section;