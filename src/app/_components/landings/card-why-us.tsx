import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import console from '@/assets/icons/icon-code.svg';
import people from '@/assets/icons/icon-group.svg';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { PropsWithChildren } from 'react';

const CardWhyUs = (
    {   
        value,
        startSymbol,
        endSymbol,
        duration,
        isConsole,
        isPeople,
        children
    } : PropsWithChildren<{
        value?: number,
        startSymbol?: string,
        endSymbol?: string,
        duration?: number,
        isConsole?: boolean,
        isPeople?: boolean
    }>
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
      <div ref = { ref } className="h-full inner-content flex flex-col justify-center min-h-72 xl:min-h-80 gap-6 px-4 py-14 text-black items-center shadow-lg rounded-4xl backdrop-blur-xl bg-white/30 rounded-3xl xl:rounded-2xl">
          <div className='flex flex-row text-6xl xl:text-75xl font-bold bg-gradient-to-r from-landing-violet to-landing-blue bg-clip-text text-transparent'>
              { startSymbol }
              {
                  (value &&  startCount) &&
                      <CountUp 
                          end={value} 
                          duration={duration} 
                          decimals={Number.isInteger(value) ? 0 : String(value).split('.')[1]?.length || 1} 
                          separator="."
                      />
              }
              {
                  isConsole &&
                      <Image
                          src = { console }
                          alt = "Code"
                          width={ width > 1280 ? 125 : 85 }
                          height={ width > 1280 ? 125 : 85 }
                      />
              }
              {
                  isPeople &&
                      <Image
                          src = { people }
                          alt = "Group"
                          width={ width > 1280 ? 125 : 85 }
                          height={ width > 1280 ? 125 : 85 }
                      />
              }
              { endSymbol }
          </div>
          <div className="text-xl lg:text-2xl xl:text-3xl text-center">{ children }</div>
      </div>
    )
}

export default CardWhyUs;
