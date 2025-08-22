import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import console from '@/assets/icons/icon-code.svg';
import people from '@/assets/icons/icon-group.svg';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { PropsWithChildren } from 'react';

const MobileCardWhyUs = (
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

    useEffect(() => {
        if (inView) setStartCount(true);
    }, [inView]);

    return (
      <div ref = { ref } className="h-full inner-content flex flex-col min-h-44 justify-center gap-4 px-2 py-6 text-black items-center shadow-lg rounded-2xl backdrop-blur-xl bg-white/30">
          <div className='flex flex-row text-5xl font-bold bg-gradient-to-r from-landing-violet to-landing-blue bg-clip-text text-transparent'>
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
                          width={75}
                          height={75}
                      />
              }
              {
                  isPeople &&
                      <Image
                          src = { people }
                          alt = "Group"
                          width={75}
                          height={75}
                      />
              }
              { endSymbol }
          </div>
          <div className="text-md text-center max-w-xs">{ children }</div>
      </div>
    )
}

export default MobileCardWhyUs;
