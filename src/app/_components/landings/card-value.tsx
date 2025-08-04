'use client'

import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import '../../styles/effects.scss';
import '../../styles/healthcare.scss';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

export const HealthcareCardValue = (
    {
        value,
        startSymbol,
        endSymbol,
        duration,
        concept,
        inline = false
    } : {
        value: number,
        startSymbol?: string,
        endSymbol?: string,
        duration: number,
        concept: string,
        inline?: boolean
    }

) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const [startCount, setStartCount] = useState(false);

  const [width, setWidth] = useState(0);
                
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <div ref = { ref } className={`bordered-gradient-box ${ width > 1024 ? 'rounded-4xl' : 'rounded-3xl'}`}>
        <div className={`${ width > 1024? 'rounded-4xl py-10' : 'rounded-3xl py-8'} inner-content flex flex-col gap-2 px-8 text-white items-center shadow-lg bg-indigo-600`}>
            <div className={`${ width > 1280 ? 'text-75xl' : 'text-6xl' } flex flex-row font-bold items-center justify-center`}>
                {
                    startSymbol === '↓' ?
                        <ArrowDownIcon className={`${ width > 1280 ? 'w-13 h-20 mr-2' : 'w-12 h-15 mr-1'}text-white font-extrabold`} strokeWidth={3} /> :
                        startSymbol
                }
                {
                    startCount ?
                        <CountUp 
                            end={value} 
                            duration={duration} 
                            decimals={Number.isInteger(value) ? 0 : String(value).split('.')[1]?.length || 1} 
                            separator="."
                        /> :
                        0
                }
                {endSymbol}
            </div>
            <div className={`${ width > 1280 ? 'text-3xl' : 'text-xl' } text-center`}>{concept}</div>
        </div>
    </div>
  )
}

export default HealthcareCardValue;