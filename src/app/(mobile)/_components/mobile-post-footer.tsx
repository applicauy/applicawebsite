'use client'

import { Post } from "@/utils/models/Post";
import Image from "next/image";
import MobileShareButtons from "./mobile-share-buttons";
import { useEffect, useState } from "react";

export default function MobilePostFooter (
    { 
        title,
        author
    } : 
    Post
    &
    any
) {
   const [width, setWidth] = useState(0);
        
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
    return (
        <div className="flex mb-24 mt-12 bg-violet-background py-6 md:py-8 mdplus:py-10 px-6 rounded-xl flex-col">
            <div className="flex flex-col items-center gap-3">
              <Image
                src = { author.avatar.url }
                width={ width > 767 ? 120 : 60 }
                height={ width > 767 ? 120 : 60 }
                alt = { author.name }
                className="rounded-full object-cover w-16 h-16 mdplus:w-24 mdplus:h-24"
                loading="lazy"
              />
              <div className="author flex flex-col justify-center h-full items-center">
                <span className="font-bold text-lg md:text-2xl mdplus:text-3xl">{ author.name }</span>
                <span className="text-lg md:text-xl mdplus:text-2xl">{ author.position }</span>
              </div>
            </div>
            <MobileShareButtons title = { title } />
        </div>
    )
}