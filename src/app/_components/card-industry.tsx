import Image, { StaticImageData } from 'next/image'
import React, { PropsWithChildren } from 'react'

export const CardIndustry = ({ icon, title, redirect, children } : PropsWithChildren<{ icon: StaticImageData, title: string, redirect: string }> ) => {

    const onRedirect = () => {
        window.location.href = redirect;
    };

    return (
      <div className={`
          h-full 
          shadow-[0_2px_8px_rgba(0,0,0,0.2)] 
          xl:shadow-[0_4px_16px_rgba(0,0,0,0.2)] 
          flex 
          flex-col 
          gap-3 
          xl:gap-5  
          rounded-2xl
          bg-secondary-bg
          p-6 
          xl:p-8
          hover:cursor-pointer
          hover:bg-gray-700
          transition-all
          duration-300
      `}
      onClick={onRedirect}>
          <div className="flex items-center justify-center mdplus:flex-row flex-col mt-6 md:mt-0 h-full">
              <div className="min-w-28 lg:min-w-32 min-h-28 lg:min-h-32 size-28 lg:size-32 flex justify-center h-full">
                  <Image src={icon} alt="Image" loading="lazy" width={150} height={150} quality={80}/>
              </div>
              <div className="flex flex-col mdplus:ml-4 lg:ml-8 h-full">
                  <p className="text-2xl lg:text-3xl font-semibold mb-4 mdplus:text-left text-center">{ title }</p>
                  <span className = "text-xl lg:text-2xl leading-tight text-center mdplus:text-start h-full">{children}</span>
              </div>
          </div>
      </div>
    )
}
