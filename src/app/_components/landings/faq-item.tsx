'use client'

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { LandingsH3 } from '@/components/landings/h3';

const FAQItem = ({
    question,
    answer
} : {
    question: string,
    answer: React.ReactNode
}) => {
    
    const [ open, setOpen ] = useState( false );

    return (
        <div
            className={`bg-white rounded-2xl xl:rounded-3xl p-6 xl:p-8 shadow-lg transition-all duration-500
                ${ open ? 'pb-6 xl:pb-8' : '' }
            `}
        >
            <button
                onClick={ () => setOpen( !open ) }
                className='w-full flex justify-between items-center text-left'
            >
                <LandingsH3
                    small
                    className='font-semibold text-black'
                >
                    { question }
                </LandingsH3>
                <ChevronDownIcon 
                    strokeWidth={ 2.5 }
                    className={ `w-6 h-6 xl:w-8 xl:h-8 text-landing-indigo transition-transform duration-300
                        ${ open ? 'rotate-180' : '' }
                    ` }
                />
            </button>

            { open && <hr className='mt-5 border-t-2'/> }

            <div
                className={`text-black text-md xl:text-xl leading-relaxed transition-all duration-500 overflow-hidden
                    ${ open ? 'mt-4 max-h-[500px] opacity-100' : 'max-h-0 opacity-0' }
                `}
            >
                { answer }
            </div>
        </div>
    )
}

export default FAQItem;