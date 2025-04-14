import Image, { StaticImageData } from 'next/image';
import React from 'react'

export const BenefitsCard = (
    {
        image,
        imageAlt,
        title,
        description
    } : {
        image: StaticImageData,
        imageAlt: string,
        title: string,
        description: string
    }
) => {
  return (
    
    <div className="relative flex flex-col overflow-hidden card-border bg-clip-border hover:shadow-lg bg-secondary-bg group md:z-[1] z-[10] transition-transform duration-300 ease-in-out transform hover:scale-110">
           <div className="relative h-[200px] md:h-[250px] m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <Image 
                    src={ image }
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={imageAlt}
                    className="absolute inset-0"
                    quality={70}
                    loading="lazy"
                />
           </div>
           <div className="p-6 text-white flex flex-col flex-grow">
                
               <h2 className='text-2xl text-left w-[80%] flex-col font-medium text-white'>{ title }</h2>
               <p className="text-lg mt-5">{ description }</p>
                
           </div>
    </div>
  )
}
