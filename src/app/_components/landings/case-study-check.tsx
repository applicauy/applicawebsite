import React, { PropsWithChildren } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline';

export const CaseStudyCheck = (
    {
        children
    } :
    PropsWithChildren
) => {
  return (
    <div className="flex flew-row items-start gap-2 xl:gap-4">
        <div className='pt-1'>
            <CheckIcon className="h-8 lg:h-10 xl:h-15 text-green-400" strokeWidth={2.5}/>
        </div>
        <p className='text-md lg:text-xl xl:text-2xl'>
            { children }
        </p>
    </div>
  )
}
