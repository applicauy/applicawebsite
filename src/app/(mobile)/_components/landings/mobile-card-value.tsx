'use client'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../../../styles/effects.scss';

const MobileHealthcareCardValue = (
    {
        value,
        startSymbol,
        endSymbol,
        duration,
        concept,
        text = false
    } : {
        value: string | number,
        startSymbol?: string,
        endSymbol?: string,
        duration: number,
        concept: string,
        text?: boolean
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
    <div ref = { ref } className="bordered-gradient-box-mobile rounded-3xl">
        <div className="inner-content flex flex-col gap-2 px-2 py-6 text-white items-center shadow-lg rounded-3xl bg-indigo-600">
            <div className={`flex flex-row ${ width > 400 ? 'text-3xl' : 'text-2xl' } font-bold items-center justify-center text-center`}>
                {
                    startSymbol === '↓' ?
                        <ArrowDownIcon className={`${ width > 400 ? 'w-6 h-10' : 'w-7 h-7' }text-white font-extrabold mr-1`} strokeWidth={3} /> :
                        startSymbol === '↑' ?
                          <ArrowUpIcon className={`${ width > 400 ? 'w-6 h-10' : 'w-7 h-7'}text-white font-extrabold mr-1`} strokeWidth={3} /> :
                          startSymbol
                }
                {
                    text ? 
                      value :
                      (
                        startCount ?
                          <CountUp 
                              end={value as number} 
                              duration={duration} 
                              decimals={Number.isInteger(value) ? 0 : String(value).split('.')[1]?.length || 1} 
                              separator="."
                          /> :
                          0
                      )
                }
                {endSymbol}
            </div>
            <div className="text-md text-center w-[90%]">{concept}</div>
        </div>
    </div>
  )
}


export default MobileHealthcareCardValue;