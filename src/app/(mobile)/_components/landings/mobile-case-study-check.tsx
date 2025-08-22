import React, { PropsWithChildren } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline';

export const MobileCaseStudyCheck = (
    {
        children
    } :
    PropsWithChildren
) => {
  return (
    <div className="flex flew-row items-start gap-1">
        <div>
            <CheckIcon className="h-5 text-green-400" strokeWidth={2.5}/>
        </div>
        <p className='text-md text-white'>
            { children }
        </p>
    </div>
  )
}

